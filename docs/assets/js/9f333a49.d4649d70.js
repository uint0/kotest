"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[50622],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?o.createElement(f,r(r({ref:n},d),{},{components:t})):o.createElement(f,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97625:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),r=["components"],s={id:"annotations",title:"Conditional tests with annotations",slug:"spec-annotations-conditional-evaluation.html",sidebar_label:"Spec Annotations"},l=void 0,c={unversionedId:"framework/conditional/annotations",id:"version-5.5/framework/conditional/annotations",title:"Conditional tests with annotations",description:"If we wish to completely disable a Spec and all tests included in the spec, we can do this using annotations.",source:"@site/versioned_docs/version-5.5/framework/conditional/annotations.md",sourceDirName:"framework/conditional",slug:"/framework/conditional/spec-annotations-conditional-evaluation.html",permalink:"/docs/framework/conditional/spec-annotations-conditional-evaluation.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/framework/conditional/annotations.md",tags:[],version:"5.5",frontMatter:{id:"annotations",title:"Conditional tests with annotations",slug:"spec-annotations-conditional-evaluation.html",sidebar_label:"Spec Annotations"},sidebar:"framework",previous:{title:"X Methods",permalink:"/docs/framework/conditional/conditional-tests-with-x-methods.html"},next:{title:"Gradle",permalink:"/docs/framework/conditional/conditional-tests-with-gradle.html"}},d={},p=[{value:"@Ignored",id:"ignored",level:3},{value:"@EnabledIf",id:"enabledif",level:3}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If we wish to completely disable a Spec and all tests included in the spec, we can do this using annotations."),(0,i.kt)("p",null,"An advantage to this approach, instead of disabling each test one by one, is that the spec will not be instantiated.\nIf a spec has expensive resource setup/teardown, then that time can be avoided by this approach."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"These annotations are only available for the JVM target.")),(0,i.kt)("h3",{id:"ignored"},"@Ignored"),(0,i.kt)("p",null,"If we wish to simply disable a spec completely, then we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Ignored")," annotation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Ignored\nclass IgnoredSpec : FunSpec() {\n  init {\n    error("boom") // spec will not be created so this error will not happen\n  }\n}\n')),(0,i.kt)("h3",{id:"enabledif"},"@EnabledIf"),(0,i.kt)("p",null,"If we want to disable a spec dependent on the execution of a function, then we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"@EnabledIf"),"."),(0,i.kt)("p",null,"This annotation accepts a class that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"EnabledCondition"),", and that class is instantiated and invoked\nto determine if a spec is enabled. Note that implementations must have a zero args constructor."),(0,i.kt)("p",null,'For example, we may wish to only execute tests containing the name "Linux" when run on a Linux machine.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class LinuxOnlyCondition : EnabledCondition {\n  override fun enabled(kclass: KClass<out Spec>): Boolean = when {\n    kclass.simpleName?.contains("Linux") == true -> IS_OS_LINUX\n    else -> true // non Linux tests always run\n  }\n}\n')),(0,i.kt)("p",null,"Then we can apply this condition to one or more specs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@EnabledIf(LinuxOnlyCondition::class)\nclass MyLinuxTest1 : FunSpec() {\n  // tests here\n}\n\n@EnabledIf(LinuxOnlyCondition::class)\nclass MyLinuxTest2 : DescribeSpec() {\n  // tests here\n}\n\n@EnabledIf(LinuxOnlyCondition::class)\nclass MyWindowsTests : DescribeSpec() {\n  // tests here\n}\n")))}m.isMDXComponent=!0}}]);