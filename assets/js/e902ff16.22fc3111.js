"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[1236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},o="DefaultApi",i={unversionedId:"bash/docs/DefaultApi",id:"bash/docs/DefaultApi",title:"DefaultApi",description:"All URIs are relative to",source:"@site/clients/bash/docs/DefaultApi.md",sourceDirName:"bash/docs",slug:"/bash/docs/DefaultApi",permalink:"/estuary-documentation/clients/bash/docs/DefaultApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DealsApi",permalink:"/estuary-documentation/clients/bash/docs/DealsApi"},next:{title:"main.createCollectionBody",permalink:"/estuary-documentation/clients/bash/docs/Main.createCollectionBody"}},s={},p=[{value:"<strong>dealTransferStatusPost</strong>",id:"dealtransferstatuspost",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"defaultapi"},"DefaultApi"),(0,n.kt)("p",null,"All URIs are relative to **"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/bash/docs/DefaultApi#dealTransferStatusPost"},(0,n.kt)("strong",{parentName:"a"},"dealTransferStatusPost"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"POST")," /deal/transfer/status"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"dealtransferstatuspost"},(0,n.kt)("strong",{parentName:"h2"},"dealTransferStatusPost")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," dealTransferStatusPost\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"This endpoint does not need any parameter."),(0,n.kt)("h3",{id:"return-type"},"Return type"),(0,n.kt)("p",null,"(empty response body)"),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#bearerAuth"},"bearerAuth")),(0,n.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Content-Type"),": Not Applicable"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accept"),": Not Applicable")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#"},"[Back to top]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-api-endpoints"},"[Back to API list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/#documentation-for-models"},"[Back to Model list]")," ",(0,n.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/bash/"},"[Back to README]")))}c.isMDXComponent=!0}}]);