"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[32829],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),s=["components"],a={title:"Clues",slug:"clues.html"},u=void 0,i={unversionedId:"assertions/clues",id:"assertions/clues",title:"Clues",description:"Clues only work if you are using the Kotest test framework in conjuction with the assertions library",source:"@site/docs/assertions/clues.md",sourceDirName:"assertions",slug:"/assertions/clues.html",permalink:"/docs/next/assertions/clues.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/clues.md",tags:[],version:"current",frontMatter:{title:"Clues",slug:"clues.html"},sidebar:"assertions",previous:{title:"Exceptions",permalink:"/docs/next/assertions/exceptions.html"},next:{title:"Soft Assertions",permalink:"/docs/next/assertions/soft-assertions.html"}},p={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Clues only work if you are using the Kotest test framework in conjuction with the assertions library")),(0,l.kt)("p",null,"Sometimes a failed assertion contains enough information in the error message to know what went wrong."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'username shouldBe "sksamuel"\n')),(0,l.kt)("p",null,"Might give an error like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'expected: "sksamuel" but was: "sam@myemailaddress.com"\n')),(0,l.kt)("p",null,"And you would be able to see that you were populating the username field with an email address."),(0,l.kt)("p",null,"But let's say you had a test like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"user.name shouldNotBe null\n")),(0,l.kt)("p",null,"If this failed, you would simply get:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<null> should not equal <null>\n")),(0,l.kt)("p",null,"Which isn't particularly helpful. This is where ",(0,l.kt)("inlineCode",{parentName:"p"},"withClue")," comes into play."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"withClue")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"asClue")," helpers can add extra context to assertions so failures are self explanatory:"),(0,l.kt)("p",null,"For example, we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"withClue")," with a string message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'withClue("Name should be present") {\n  user.name shouldNotBe null\n}\n')),(0,l.kt)("p",null,"Would give an error like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Name should be present\n<null> should not equal <null>\n")),(0,l.kt)("p",null,"We can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"asClue")," extension function to turn any object into the clue message."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class HttpResponse(val status: Int, val body: String)\n\nval response = HttpResponse(404, "the content")\n\nresponse.asClue {\n    it.status shouldBe 200\n    it.body shouldBe "the content"\n}\n')),(0,l.kt)("p",null,"Would output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HttpResponse(status=404, body=the content)\nExpected :200\nActual   :404\n")))}d.isMDXComponent=!0}}]);