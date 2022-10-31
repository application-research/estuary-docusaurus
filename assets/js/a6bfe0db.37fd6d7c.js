"use strict";(self.webpackChunkestuary_documentation=self.webpackChunkestuary_documentation||[]).push([[2290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:2},i="What is Estuary?",l={unversionedId:"Learn/what-is-estuary",id:"Learn/what-is-estuary",title:"What is Estuary?",description:"Estuary is an open source software that allows easy sending of public data to the Filecoin network that can be retrieved from anywhere.",source:"@site/docs/Learn/what-is-estuary.md",sourceDirName:"Learn",slug:"/Learn/what-is-estuary",permalink:"/estuary-documentation/Learn/what-is-estuary",draft:!1,editUrl:"https://github.com/application-research/estuary-documentation/tree/main/packages/create-docusaurus/templates/shared/docs/Learn/what-is-estuary.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/estuary-documentation/"},next:{title:"FAQ",permalink:"/estuary-documentation/Learn/faq"}},s={},p=[{value:"Why does Estuary exist?",id:"why-does-estuary-exist",level:3},{value:"How do you make Filecoin storage deals?",id:"how-do-you-make-filecoin-storage-deals",level:3},{value:"How does Estuary use the Filecoin Network and IPFS protocol?",id:"how-does-estuary-use-the-filecoin-network-and-ipfs-protocol",level:3},{value:"How does Estuary handle retrieval deals?",id:"how-does-estuary-handle-retrieval-deals",level:3},{value:"People are making deals against my system, where are the logs?",id:"people-are-making-deals-against-my-system-where-are-the-logs",level:3},{value:"I am a developer, how do I start?",id:"i-am-a-developer-how-do-i-start",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-estuary"},"What is Estuary?"),(0,n.kt)("p",null,"Estuary is an open source software that allows easy sending of public data to the Filecoin network that can be retrieved from anywhere."),(0,n.kt)("h3",{id:"why-does-estuary-exist"},"Why does Estuary exist?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://arg.protocol.ai"},"Application Research Group (ARG)")," helped make ",(0,n.kt)("a",{parentName:"p",href:"https://filecoin.io"},"Filecoin")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://arg.protocol.ai"},"ARG")," wanted to provide an end-to-end example of how to use IPFS, Filecoin, and other technologies together."),(0,n.kt)("p",null,"Read our ",(0,n.kt)("a",{parentName:"p",href:"../Learn/faq"},"FAQ")," for more frequently asked questions and criticism."),(0,n.kt)("h3",{id:"how-do-you-make-filecoin-storage-deals"},"How do you make Filecoin storage deals?"),(0,n.kt)("p",null,"All data is currently uploaded to our hosted Estuary Node (Written in Go) in North America. Filecoin deals are made immediately against miners listed on our index. When a file is uploaded:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A proposal receipt is provided."),(0,n.kt)("li",{parentName:"ol"},"The deal machine will continue to make deals until 6 storage deals are sealed on the Filecoin Network with 6 different storage providers. The location is variable."),(0,n.kt)("li",{parentName:"ol"},"Each deal is proposed for at least a year (in fil-epochs), and is a verified client deal."),(0,n.kt)("li",{parentName:"ol"},"For each successful deal, a Filecoin storage deal receipt is provided with duration and miner information.")),(0,n.kt)("h3",{id:"how-does-estuary-use-the-filecoin-network-and-ipfs-protocol"},"How does Estuary use the Filecoin Network and IPFS protocol?"),(0,n.kt)("p",null,"The setup of our node has parts for those who operate IPFS nodes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/libp2p"},"LibP2P")," protocols and modules for identity, establishing secure and multiplexed connections between peers, and so much more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/libp2p/go-libp2p-connmgr"},"go-libp2p-connmgr"),", a package to help manage connections in go-libp2p."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ipfs/go-ipfs-blockstore"},"go-ipfs-blockstore")," a thin wrapper over a datastore, giving a clean interface for Getting and Putting block objects."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/libp2p/go-libp2p-kad-dht"},"go-libp2p-kad-dht"),". A Kademlia DHT implementation on go-libp2p."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ipfs/go-bitswap"},"go-bitswap")," to acquire blocks requested by the client from the network and to judiciously send blocks in its possession to other peers who want them.")),(0,n.kt)("p",null,"Then we added:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/filecoin-project/lotus"},"Lotus-gateway")," - we use a small portion of Lotus, to read information about the chain and publish messages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/application-research/filclient"},"Filclient")," - a new standalone client library for interacting with the Filecoin storage network."),(0,n.kt)("li",{parentName:"ul"},"Filecoin wallet for automation and escrow funds."),(0,n.kt)("li",{parentName:"ul"},"Automated replication till 6 deals are active and on chain. The value is configurable."),(0,n.kt)("li",{parentName:"ul"},"Deal estimation with USD cost estimation."),(0,n.kt)("li",{parentName:"ul"},"Automated Filecoin retrieval if the CID is no longer pinned."),(0,n.kt)("li",{parentName:"ul"},"Bandwidth tracking."),(0,n.kt)("li",{parentName:"ul"},"Miner logs and performance tracking."),(0,n.kt)("li",{parentName:"ul"},"Deal lookup by ID and CID.")),(0,n.kt)("p",null,"Not enough? Read the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/application-research/estuary/blob/master/main.go"},"source code"),"."),(0,n.kt)("h3",{id:"how-does-estuary-handle-retrieval-deals"},"How does Estuary handle retrieval deals?"),(0,n.kt)("p",null,"Given any given person, let us imagine they made a request for their data. As an example: ",(0,n.kt)("a",{parentName:"p",href:"https://dweb.link/ipfs/Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5"},"cid:Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Case A")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"That data is already pinned to an IPFS/Estuary node."),(0,n.kt)("li",{parentName:"ul"},"The CID is served back to the requester immediately.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Case B")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"That data is not pinned to an IPFS/Estuary node"),(0,n.kt)("li",{parentName:"ul"},"The Estuary node makes a retrieval deal against a Filecoin miner using FIL it has in escrow."),(0,n.kt)("li",{parentName:"ul"},"Once the retrieval deal is successful, that data is pinned to the node."),(0,n.kt)("li",{parentName:"ul"},"The CID is served back to the requester.")),(0,n.kt)("p",null,"Still confusing? Check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/application-research/estuary/blob/master/retrieval.go"},"source code"),"."),(0,n.kt)("h3",{id:"people-are-making-deals-against-my-system-where-are-the-logs"},"People are making deals against my system, where are the logs?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All of the miners we work with are located on this ",(0,n.kt)("a",{parentName:"li",href:"https://docs.estuary.tech/api-public-miners"},"API documentation page")," and ",(0,n.kt)("a",{parentName:"li",href:"https://estuary.tech/ecosystem"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"All of our stats are publicly available on this ",(0,n.kt)("a",{parentName:"li",href:"https://docs.estuary.tech/api-public-stats"},"API documentation page")," or visible from ",(0,n.kt)("a",{parentName:"li",href:"https://estuary.tech"},"https://estuary.tech"),"."),(0,n.kt)("li",{parentName:"ul"},"You can find custom miner pages for each miner on ",(0,n.kt)("a",{parentName:"li",href:"https://estuary.tech/ecosystem"},"https://estuary.tech/ecosystem"),".")),(0,n.kt)("h3",{id:"i-am-a-developer-how-do-i-start"},"I am a developer, how do I start?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.estuary.tech/tutorial-get-an-api-key"},"Get API access"),"."))}c.isMDXComponent=!0}}]);