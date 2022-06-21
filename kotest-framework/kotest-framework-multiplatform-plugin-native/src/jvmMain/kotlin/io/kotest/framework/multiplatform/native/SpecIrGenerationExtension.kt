package io.kotest.framework.multiplatform.native

import org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext
import org.jetbrains.kotlin.backend.common.extensions.IrGenerationExtension
import org.jetbrains.kotlin.backend.common.extensions.IrPluginContext
import org.jetbrains.kotlin.backend.common.ir.addChild
import org.jetbrains.kotlin.backend.common.ir.isTopLevel
import org.jetbrains.kotlin.backend.common.ir.simpleFunctions
import org.jetbrains.kotlin.backend.common.lower.DeclarationIrBuilder
import org.jetbrains.kotlin.backend.common.lower.inline.isTopLevelInPackage
import org.jetbrains.kotlin.cli.common.messages.MessageCollector
import org.jetbrains.kotlin.cli.common.toLogger
import org.jetbrains.kotlin.descriptors.DescriptorVisibilities
import org.jetbrains.kotlin.descriptors.FunctionDescriptor
import org.jetbrains.kotlin.descriptors.Modality
import org.jetbrains.kotlin.ir.builders.declarations.buildFun
import org.jetbrains.kotlin.ir.builders.irBlockBody
import org.jetbrains.kotlin.ir.builders.irCall
import org.jetbrains.kotlin.ir.builders.irString
import org.jetbrains.kotlin.ir.declarations.IrClass
import org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin
import org.jetbrains.kotlin.ir.declarations.IrFile
import org.jetbrains.kotlin.ir.declarations.IrModuleFragment
import org.jetbrains.kotlin.ir.declarations.IrSimpleFunction
import org.jetbrains.kotlin.ir.declarations.name
import org.jetbrains.kotlin.ir.descriptors.toIrBasedDescriptor
import org.jetbrains.kotlin.ir.types.isUnit
import org.jetbrains.kotlin.ir.util.constructors
import org.jetbrains.kotlin.ir.util.dump
import org.jetbrains.kotlin.ir.util.getPackageFragment
import org.jetbrains.kotlin.ir.util.getSimpleFunction
import org.jetbrains.kotlin.ir.util.isTopLevelDeclaration
import org.jetbrains.kotlin.ir.util.kotlinFqName
import org.jetbrains.kotlin.name.FqName
import org.jetbrains.kotlin.name.Name
import java.util.concurrent.CopyOnWriteArrayList

class SpecIrGenerationExtension(private val messageCollector: MessageCollector) : IrGenerationExtension {

   override fun generate(moduleFragment: IrModuleFragment, pluginContext: IrPluginContext) {

      moduleFragment.transform(object : IrElementTransformerVoidWithContext() {

         val specs = CopyOnWriteArrayList<IrClass>()

         override fun visitModuleFragment(declaration: IrModuleFragment): IrModuleFragment {
            val fragment: IrModuleFragment = super.visitModuleFragment(declaration)
            messageCollector.toLogger().log("Detected ${specs.size} native specs:")
            specs.forEach {
               messageCollector.toLogger().log(it.kotlinFqName.asString())
            }
            if (specs.isEmpty()) return fragment

            val file = fragment.files.first()

            val launcherClass = pluginContext.referenceClass(FqName(EntryPoint.TestEngineClassName))
               ?: error("Cannot find ${EntryPoint.TestEngineClassName} class reference")

            val launcherConstructor = launcherClass.constructors.first { it.owner.valueParameters.isEmpty() }

            val launchFn = launcherClass.getSimpleFunction(EntryPoint.LaunchMethodName)
               ?: error("Cannot find function ${EntryPoint.LaunchMethodName}")

            val withSpecsFn = launcherClass.getSimpleFunction(EntryPoint.WithSpecsMethodName)
               ?: error("Cannot find function ${EntryPoint.WithSpecsMethodName}")

            val withTeamCityListenerMethodNameFn =
               launcherClass.getSimpleFunction(EntryPoint.WithTeamCityListenerMethodName)
                  ?: error("Cannot find function ${EntryPoint.WithTeamCityListenerMethodName}")

            val eagerAnnotationName = FqName("kotlin.native.EagerInitialization")
            val eagerAnnotation = pluginContext.referenceClass(eagerAnnotationName)
               ?: error("Cannot find eager initialisation annotation class $eagerAnnotationName")

            val eagerAnnotationConstructor = eagerAnnotation.constructors.single()

            val funPrintln = pluginContext.referenceFunctions(FqName("kotlin.io.println")).single {
               val parameters = it.owner.valueParameters
               parameters.size == 1 && parameters[0].type == pluginContext.irBuiltIns.anyNType
            }

            val main = pluginContext.irFactory.buildFun {
               name = Name.identifier("kotestmain")
               returnType = pluginContext.irBuiltIns.unitType
               visibility = DescriptorVisibilities.PUBLIC
               modality = Modality.FINAL
               origin = IrDeclarationOrigin.DEFINED
            }.also { func: IrSimpleFunction ->
//               func.parent = file
//               func.addValueParameter {
//                  this.name = Name.identifier("args")
//                  this.type = pluginContext.irBuiltIns.stringType.toArrayOrPrimitiveArrayType(pluginContext.irBuiltIns)
//               }
               func.body = DeclarationIrBuilder(pluginContext, func.symbol).irBlockBody {
                  val callPrintln = irCall(funPrintln)
                  callPrintln.putValueArgument(0, irString("Hello, World!"))
                  +callPrintln
               }
            }

//            val launcher = pluginContext.irFactory.buildProperty {
//               name = Name.identifier(EntryPoint.LauncherValName)
//            }.apply {
//               parent = file
//               annotations += IrSingleStatementBuilder(pluginContext, Scope(this.symbol), UNDEFINED_OFFSET, UNDEFINED_OFFSET).build { irCall(eagerAnnotationConstructor) }
//
//               backingField = pluginContext.irFactory.buildField {
//                  type = pluginContext.irBuiltIns.unitType
//                  isFinal = true
//                  isExternal = false
//                  isStatic = true // top level vals must be static
//                  name = Name.identifier(EntryPoint.LauncherValName)
//               }.also { field ->
//                  field.correspondingPropertySymbol = this@apply.symbol
//                  field.initializer = pluginContext.irFactory.createExpressionBody(startOffset, endOffset) {
//                     this.expression = DeclarationIrBuilder(pluginContext, field.symbol).irBlock {
//                        +irCall(launchFn).also { launch ->
//                           launch.dispatchReceiver = irCall(withTeamCityListenerMethodNameFn).also { withTeamCity ->
//                              withTeamCity.dispatchReceiver = irCall(withSpecsFn).also { withSpecs ->
//                                 withSpecs.dispatchReceiver = irCall(launcherConstructor)
//                                 withSpecs.putValueArgument(
//                                    0,
//                                    irVararg(
//                                       pluginContext.irBuiltIns.stringType,
//                                       specs.map { irCall(it.constructors.first()) }
//                                    )
//                                 )
//                              }
//                           }
//                        }
//                     }
//                  }
//               }
//
//               addGetter {
//                  returnType = pluginContext.irBuiltIns.unitType
//               }.also { func ->
//                  func.body = DeclarationIrBuilder(pluginContext, func.symbol).irBlockBody {
//                  }
//               }
//            }

            val f = FqName("kotest")
            messageCollector.toLogger().log("entryName" + f.shortName())
            messageCollector.toLogger().log("packageName" + f.parent())
            messageCollector.toLogger().log("isRoot" + f.parent().isRoot)

            messageCollector.toLogger().log("isUnit" + main.returnType.isUnit())
            messageCollector.toLogger().log("isEmpty" + main.typeParameters.isEmpty())
            messageCollector.toLogger().log("isPublicAPI" + main.visibility.isPublicAPI)
            messageCollector.toLogger().log("hasNoParameters" + main.toIrBasedDescriptor().hasNoParameters)


            declaration.files.first { it.getPackageFragment()?.fqName?.isRoot ?: false }.addChild(main)
//            fragment.files.first().addChild(main)
//            messageCollector.toLogger().log("Adding ${main.dump()}")
//            messageCollector.toLogger().log("isTopLevel ${main.isTopLevel}")
//            messageCollector.toLogger().log("isTopLevelDeclaration ${main.isTopLevelDeclaration}")
//            messageCollector.toLogger().log("isTopLevelInPackage ${main.isTopLevelInPackage("kotestmain", "")}")
//            messageCollector.toLogger().log(fragment.files.first().dump())
            messageCollector.toLogger().log("Contains kotestmain=" + fragment.files.first().simpleFunctions())
//            file.addChild(launcher)
            return fragment
         }

         override fun visitFileNew(declaration: IrFile): IrFile {
            super.visitFileNew(declaration)
            val specs = declaration.specs()
            messageCollector.toLogger()
               .log("${declaration.name} contains ${specs.size} spec(s): ${specs.joinToString(", ") { it.kotlinFqName.asString() }}")
            this.specs.addAll(specs)
            return declaration
         }

      }, null)
   }
}

private val FunctionDescriptor.hasNoParameters: Boolean
   get() = valueParameters.isEmpty()
