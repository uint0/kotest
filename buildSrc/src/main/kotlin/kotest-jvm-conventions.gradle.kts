@file:Suppress("UNUSED_VARIABLE")

plugins {
   id("kotlin-conventions")
}

kotlin {
   jvmToolchain {
      (this as JavaToolchainSpec).languageVersion.set(JavaLanguageVersion.of(11))
   }

   jvm {
      compilations.all {
         kotlinOptions {
            jvmTarget = "11"
         }
      }
   }

   sourceSets {
      val jvmTest by getting {
         dependencies {
            implementation(project(Projects.JunitRunner))
         }
      }
   }
}

//configurations.named("jvmApiElements") {
//   attributes {
//      attribute(Bundling.BUNDLING_ATTRIBUTE, project.objects.named(Bundling::class, Bundling.EXTERNAL))
//      attribute(TargetJvmVersion.TARGET_JVM_VERSION_ATTRIBUTE, 11)
//   }
//}
