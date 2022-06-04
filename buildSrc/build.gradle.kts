plugins {
   `kotlin-dsl`
}

repositories {
   mavenLocal()
   mavenCentral()
   gradlePluginPortal()
}

dependencies {
   implementation(libs.kotest.gradle.plugin)
   implementation(libs.testlogger.gradle.plugin)
   implementation(libs.kotlin.gradle.plugin)
}
