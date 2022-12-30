"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[26395],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"extensions_introduction",title:"Introduction to Extensions",slug:"extensions-introduction.html",sidebar_label:"Introduction"},c=void 0,l={unversionedId:"framework/extensions/extensions_introduction",id:"version-5.5/framework/extensions/extensions_introduction",title:"Introduction to Extensions",description:"Extensions are reusable lifecycle hooks. In fact, lifecycle hooks are themselves represented internally as instances",source:"@site/versioned_docs/version-5.5/framework/extensions/extensions.md",sourceDirName:"framework/extensions",slug:"/framework/extensions/extensions-introduction.html",permalink:"/docs/framework/extensions/extensions-introduction.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/framework/extensions/extensions.md",tags:[],version:"5.5",frontMatter:{id:"extensions_introduction",title:"Introduction to Extensions",slug:"extensions-introduction.html",sidebar_label:"Introduction"},sidebar:"framework",previous:{title:"Lifecycle hooks",permalink:"/docs/framework/lifecycle-hooks.html"},next:{title:"Simple Extensions",permalink:"/docs/framework/extensions/simple-extensions.html"}},p={},u=[{value:"How to use",id:"how-to-use",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Extensions are reusable ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/lifecycle-hooks.html"},"lifecycle hooks"),". In fact, lifecycle hooks are themselves represented internally as instances\nof extensions. In the past, Kotest used the term ",(0,i.kt)("em",{parentName:"p"},"listeners")," for simple interfaces and ",(0,i.kt)("em",{parentName:"p"},"extension")," for more advanced interfaces, however\nthere is no distinction between the two and the terms can be used interchangeably."),(0,i.kt)("h3",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"The basic usage is to create an implementation of the required extension interface and register it with a test,\na spec, or project wide in ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"ProjectConfig"),"."),(0,i.kt)("p",null,"For example, here we create a before and after spec listener, and register it with a spec."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTestListener : BeforeSpecListener, AfterSpecListener {\n   override suspend fun beforeSpec(spec:Spec) {\n      // power up kafka\n   }\n   override suspend fun afterSpec(spec: Spec) {\n      // shutdown kafka\n   }\n}\n\n\nclass TestSpec : WordSpec({\n    extension(MyTestListener())\n    // tests here\n})\n")),(0,i.kt)("p",null,"Any extensions registered inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," will be used for all tests in that spec (including ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/test-factories.html"},"test factories")," and nested tests)."),(0,i.kt)("p",null,"To run an extension for every spec in the entire project you can either mark the listener with ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoScan"),",\nor you can register the listener via project config."),(0,i.kt)("p",null,"An example of ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoScan")," on a project listener:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@AutoScan\nobject MyProjectListener : BeforeProjectListener, AfterProjectListener {\n  override suspend fun beforeProject() {\n    println("Project starting")\n  }\n  override suspend fun afterProject() {\n    println("Project complete")\n  }\n}\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Some extensions can only be registered at the project level. For example, registering a ",(0,i.kt)("inlineCode",{parentName:"p"},"BeforeProjectListener")," inside a spec will have no effect, since the project has already started by the time that extension would be encountered!")))}d.isMDXComponent=!0}}]);