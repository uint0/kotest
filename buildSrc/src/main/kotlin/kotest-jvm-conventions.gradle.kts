@file:Suppress("UNUSED_VARIABLE")

plugins {
   id("kotlin-conventions")
   id("kotest-publishing-conventions")
}

kotlin {
   targets {
      jvm {
         compilations.all {
            kotlinOptions {
               jvmTarget = "1.8"
            }
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
