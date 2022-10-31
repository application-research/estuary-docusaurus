"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[8994],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,r(r({ref:e},s),{},{components:n})):a.createElement(k,r({ref:e},s))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89097:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const i={},r="CollectionsApi",o={unversionedId:"java/docs/CollectionsApi",id:"java/docs/CollectionsApi",title:"CollectionsApi",description:"All URIs are relative to https://api.estuary.tech",source:"@site/clients/java/docs/CollectionsApi.md",sourceDirName:"java/docs",slug:"/java/docs/CollectionsApi",permalink:"/estuary-documentation/clients/java/docs/CollectionsApi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AutoretrieveApi",permalink:"/estuary-documentation/clients/java/docs/AutoretrieveApi"},next:{title:"CollectionsCollection",permalink:"/estuary-documentation/clients/java/docs/CollectionsCollection"}},p={},u=[{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Example",id:"example-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Example",id:"example-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3},{value:"Example",id:"example-3",level:3},{value:"Parameters",id:"parameters-3",level:3},{value:"Return type",id:"return-type-3",level:3},{value:"Authorization",id:"authorization-3",level:3},{value:"HTTP request headers",id:"http-request-headers-3",level:3},{value:"Example",id:"example-4",level:3},{value:"Parameters",id:"parameters-4",level:3},{value:"Return type",id:"return-type-4",level:3},{value:"Authorization",id:"authorization-4",level:3},{value:"HTTP request headers",id:"http-request-headers-4",level:3},{value:"Example",id:"example-5",level:3},{value:"Parameters",id:"parameters-5",level:3},{value:"Return type",id:"return-type-5",level:3},{value:"Authorization",id:"authorization-5",level:3},{value:"HTTP request headers",id:"http-request-headers-5",level:3},{value:"Example",id:"example-6",level:3},{value:"Parameters",id:"parameters-6",level:3},{value:"Return type",id:"return-type-6",level:3},{value:"Authorization",id:"authorization-6",level:3},{value:"HTTP request headers",id:"http-request-headers-6",level:3},{value:"Example",id:"example-7",level:3},{value:"Parameters",id:"parameters-7",level:3},{value:"Return type",id:"return-type-7",level:3},{value:"Authorization",id:"authorization-7",level:3},{value:"HTTP request headers",id:"http-request-headers-7",level:3}],s={toc:u};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"collectionsapi"},"CollectionsApi"),(0,l.kt)("p",null,"All URIs are relative to ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://api.estuary.tech"},"https://api.estuary.tech"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP request"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsColuuidCommitPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidCommitPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/{coluuid}/commit"),(0,l.kt)("td",{parentName:"tr",align:null},"Produce a CID of the collection contents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsColuuidContentsDelete"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidContentsDelete"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DELETE")," /collections/{coluuid}/contents"),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a content from a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsColuuidDelete"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidDelete"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DELETE")," /collections/{coluuid}"),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsColuuidGet"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidGet"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"GET")," /collections/{coluuid}"),(0,l.kt)("td",{parentName:"tr",align:null},"Get contents in a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsColuuidPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsColuuidPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/{coluuid}"),(0,l.kt)("td",{parentName:"tr",align:null},"Add contents to a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsFsAddPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsFsAddPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/fs/add"),(0,l.kt)("td",{parentName:"tr",align:null},"Add a file to a collection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsGet"},(0,l.kt)("strong",{parentName:"a"},"collectionsGet"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"GET")," /collections/"),(0,l.kt)("td",{parentName:"tr",align:null},"List all collections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/CollectionsApi#collectionsPost"},(0,l.kt)("strong",{parentName:"a"},"collectionsPost"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"POST")," /collections/"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a new collection")))),(0,l.kt)("a",{name:"collectionsColuuidCommitPost"}),"# **collectionsColuuidCommitPost** > String collectionsColuuidCommitPost(coluuid)",(0,l.kt)("p",null,"Produce a CID of the collection contents"),(0,l.kt)("p",null,"This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\nString coluuid = "coluuid_example"; // String | coluuid\ntry {\n    String result = apiInstance.collectionsColuuidCommitPost(coluuid);\n    System.out.println(result);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsColuuidCommitPost");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"coluuid"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"String")),(0,l.kt)("h3",{id:"authorization"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsColuuidContentsDelete"}),"# **collectionsColuuidContentsDelete** > String collectionsColuuidContentsDelete(coluuid, contentid, body)",(0,l.kt)("p",null,"Deletes a content from a collection"),(0,l.kt)("p",null,"This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path"),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\nString coluuid = "coluuid_example"; // String | Collection ID\nString contentid = "contentid_example"; // String | Content ID\nMainDeleteContentFromCollectionBody body = new MainDeleteContentFromCollectionBody(); // MainDeleteContentFromCollectionBody | Variable to use when filtering for files (must be either \'path\' or \'content_id\')\ntry {\n    String result = apiInstance.collectionsColuuidContentsDelete(coluuid, contentid, body);\n    System.out.println(result);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsColuuidContentsDelete");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Collection ID"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"contentid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Content ID"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"body")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/MainDeleteContentFromCollectionBody"},(0,l.kt)("strong",{parentName:"a"},"MainDeleteContentFromCollectionBody"))),(0,l.kt)("td",{parentName:"tr",align:null},"Variable to use when filtering for files (must be either ","'","path","'"," or ","'","content_id","'",")"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-1"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"String")),(0,l.kt)("h3",{id:"authorization-1"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-1"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsColuuidDelete"}),"# **collectionsColuuidDelete** > collectionsColuuidDelete(coluuid)",(0,l.kt)("p",null,"Deletes a collection"),(0,l.kt)("p",null,"This endpoint is used to delete an existing collection."),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\nString coluuid = "coluuid_example"; // String | Collection ID\ntry {\n    apiInstance.collectionsColuuidDelete(coluuid);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsColuuidDelete");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Collection ID"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-2"},"Return type"),(0,l.kt)("p",null,"null (empty response body)"),(0,l.kt)("h3",{id:"authorization-2"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-2"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": Not defined")),(0,l.kt)("a",{name:"collectionsColuuidGet"}),"# **collectionsColuuidGet** > String collectionsColuuidGet(coluuid, dir)",(0,l.kt)("p",null,"Get contents in a collection"),(0,l.kt)("p",null,"This endpoint is used to get contents in a collection. If no colpath query param is passed"),(0,l.kt)("h3",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\nString coluuid = "coluuid_example"; // String | coluuid\nString dir = "dir_example"; // String | Directory\ntry {\n    String result = apiInstance.collectionsColuuidGet(coluuid, dir);\n    System.out.println(result);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsColuuidGet");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"coluuid"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"dir")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Directory"),(0,l.kt)("td",{parentName:"tr",align:null},"[optional]")))),(0,l.kt)("h3",{id:"return-type-3"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"String")),(0,l.kt)("h3",{id:"authorization-3"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-3"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsColuuidPost"}),"# **collectionsColuuidPost** > Map<String, String> collectionsColuuidPost(coluuid, contentIDs)",(0,l.kt)("p",null,"Add contents to a collection"),(0,l.kt)("p",null,"This endpoint adds already-pinned contents (that have ContentIDs) to a collection."),(0,l.kt)("h3",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\nString coluuid = "coluuid_example"; // String | coluuid\nList<Integer> contentIDs = Arrays.asList(new List<Integer>()); // List<Integer> | Content IDs to add to collection\ntry {\n    Map<String, String> result = apiInstance.collectionsColuuidPost(coluuid, contentIDs);\n    System.out.println(result);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsColuuidPost");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"coluuid"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"contentIDs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"List","<","Integer",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Content IDs to add to collection"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-4"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Map","<","String, String",">")),(0,l.kt)("h3",{id:"authorization-4"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-4"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": application/json"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsFsAddPost"}),"# **collectionsFsAddPost** > collectionsFsAddPost(coluuid, content, path)",(0,l.kt)("p",null,"Add a file to a collection"),(0,l.kt)("p",null,"This endpoint adds a file to a collection"),(0,l.kt)("h3",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\nString coluuid = "coluuid_example"; // String | Collection ID\nString content = "content_example"; // String | Content\nString path = "path_example"; // String | Path to file\ntry {\n    apiInstance.collectionsFsAddPost(coluuid, content, path);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsFsAddPost");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"coluuid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Collection ID"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Content"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Path to file"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-5"},"Return type"),(0,l.kt)("p",null,"null (empty response body)"),(0,l.kt)("h3",{id:"authorization-5"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-5"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsGet"}),"# **collectionsGet** > List<CollectionsCollection> collectionsGet()",(0,l.kt)("p",null,"List all collections"),(0,l.kt)("p",null,"This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user."),(0,l.kt)("h3",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\ntry {\n    List<CollectionsCollection> result = apiInstance.collectionsGet();\n    System.out.println(result);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsGet");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters-6"},"Parameters"),(0,l.kt)("p",null,"This endpoint does not need any parameter."),(0,l.kt)("h3",{id:"return-type-6"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/docs/CollectionsCollection"},(0,l.kt)("strong",{parentName:"a"},"List","<","CollectionsCollection",">"))),(0,l.kt)("h3",{id:"authorization-6"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-6"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")),(0,l.kt)("a",{name:"collectionsPost"}),"# **collectionsPost** > CollectionsCollection collectionsPost(body)",(0,l.kt)("p",null,"Create a new collection"),(0,l.kt)("p",null,"This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection."),(0,l.kt)("h3",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Import classes:\n//import io.swagger.client.ApiClient;\n//import io.swagger.client.ApiException;\n//import io.swagger.client.Configuration;\n//import io.swagger.client.auth.*;\n//import io.swagger.client.api.CollectionsApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\n\n// Configure API key authorization: bearerAuth\nApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");\nbearerAuth.setApiKey("YOUR API KEY");\n// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)\n//bearerAuth.setApiKeyPrefix("Token");\n\nCollectionsApi apiInstance = new CollectionsApi();\nMainCreateCollectionBody body = new MainCreateCollectionBody(); // MainCreateCollectionBody | Collection name and description\ntry {\n    CollectionsCollection result = apiInstance.collectionsPost(body);\n    System.out.println(result);\n} catch (ApiException e) {\n    System.err.println("Exception when calling CollectionsApi#collectionsPost");\n    e.printStackTrace();\n}\n')),(0,l.kt)("h3",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"body")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/estuary-documentation/clients/java/docs/MainCreateCollectionBody"},(0,l.kt)("strong",{parentName:"a"},"MainCreateCollectionBody"))),(0,l.kt)("td",{parentName:"tr",align:null},"Collection name and description"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"return-type-7"},"Return type"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/docs/CollectionsCollection"},(0,l.kt)("strong",{parentName:"a"},"CollectionsCollection"))),(0,l.kt)("h3",{id:"authorization-7"},"Authorization"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/estuary-documentation/clients/java/#bearerAuth"},"bearerAuth")),(0,l.kt)("h3",{id:"http-request-headers-7"},"HTTP request headers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Content-Type"),": Not defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accept"),": application/json")))}c.isMDXComponent=!0}}]);