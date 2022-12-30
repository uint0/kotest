"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[41440],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,s=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||s;return r?n.createElement(d,i(i({ref:e},c),{},{components:r})):n.createElement(d,i({ref:e},c))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79960:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),i=["components"],a={id:"test_output",title:"Test Output",sidebar_label:"Test Output",slug:"test_output.html"},u=void 0,l={unversionedId:"framework/test_output",id:"version-5.2/framework/test_output",title:"Test Output",description:"If you are running Kotest via Gradle's Junit Platform support, and if you are using a nested spec style, you",source:"@site/versioned_docs/version-5.2/framework/output.md",sourceDirName:"framework",slug:"/framework/test_output.html",permalink:"/docs/5.2/framework/test_output.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/framework/output.md",tags:[],version:"5.2",frontMatter:{id:"test_output",title:"Test Output",sidebar_label:"Test Output",slug:"test_output.html"},sidebar:"framework",previous:{title:"Test Factories",permalink:"/docs/5.2/framework/test-factories.html"},next:{title:"Test Timeouts",permalink:"/docs/5.2/framework/timeouts/test-timeouts.html"}},c={},p=[],f={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are running Kotest via Gradle's Junit Platform support, and if you are using a nested spec style, you\nwill notice that only the leaf test name is included in output and test reports. This is a limitation of gradle\nwhich is designed around class.method test frameworks."),(0,s.kt)("p",null,"Until such time that Gradle improves their test integration so that tests can be arbitrarily nested, Kotest\noffers a workaround by allowing you to specify ",(0,s.kt)("inlineCode",{parentName:"p"},"displayFullTestPath")," in ",(0,s.kt)("a",{parentName:"p",href:"#project-config"},"project configuration"),"."),(0,s.kt)("p",null,"When this setting is enabled, the test names will be the concatenation of the entire test path. So a test like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests: DescribeSpec({\n  describe("describe 1"){\n    it("test 1"){}\n    it("test 2"){}\n  }\n})\n')),(0,s.kt)("p",null,"Will be output as"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MyTests. describe 1 - test 1\nMyTests. describe 1 - test 2\n")))}m.isMDXComponent=!0}}]);