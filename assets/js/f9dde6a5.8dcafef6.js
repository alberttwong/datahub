"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[25083,49804,27423,5042,82661,39328,16947,94566,72185,70756,48375,6237,28618,50999,73380,95761,18142,40523,62904,85285,7666,35238,12857,8e4,57619,45714,23333,90476,68095,56190,33809,99631,22012,54869,77250,89155,11536,44393,66774,20583,42964,90608,68227,45846,23465,1084,78703,56322,33941,3417,25798,48179,70560,13893,36274,58655,81036,24369,46750,16226,93845,60988,38607,5750,83369,50512,28131,37178,14797,29035,51416,84273,6654,39511,61892,94749,17130,8083,30464,31452,9071,86690,64309,20976,98595,76214,53833,52404,30023,44261,66642,89023,11404,33785,56166,78547,928,65213,87594,22455,44836,77693,74,11979,34360,67217,89598,1503,23884,9646,87265,54408,32027,20122,97741,42503,88694,66313,96837,19218,41599,63980,86361,8742,31123,53504,17789,40170,84028,61647,39266,16885,73552,51171,28790,6409,4980],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,f=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=y;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function s({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,n),hidden:t},e)}},53720:(e,t,n)=>{n.d(t,{A:()=>D});var r=n(96540),a=n(20053),o=n(65697),s=n(56347),u=n(9226),i=n(34387),l=n(28609);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function y(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function b({queryString:e=!1,groupId:t}){const n=(0,s.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,u.aZ)(a),i=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[a,n]);return[o,i]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=y(e),[s,u]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=b({queryString:n,groupId:a}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,l.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),g=(()=>{const e=null!=i?i:p;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var h=n(20162);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function P({className:e,block:t,selectedValue:n,selectValue:s,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=u[r].value;a!==n&&(l(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[i.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:o})=>r.createElement("li",w(O({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>i.push(e),onKeyDown:p,onClick:c},o),{className:(0,a.A)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function C({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function j(e){const t=g(e);return r.createElement("div",{className:(0,a.A)("tabs-container",m.tabList)},r.createElement(P,O({},e,t)),r.createElement(C,O({},e,t)))}function D(e){const t=(0,h.A)();return r.createElement(j,O({key:String(t)},e))}},79583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>y});n(96540);var r=n(15680),a=n(53720),o=n(5400);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Data Contracts",slug:"/api/tutorials/data-contracts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/data-contracts.md"},c="Data Contracts",p={unversionedId:"docs/api/tutorials/data-contracts",id:"docs/api/tutorials/data-contracts",title:"Data Contracts",description:"This guide specifically covers how to use the Data Contract APIs with DataHub Cloud.",source:"@site/genDocs/docs/api/tutorials/data-contracts.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/data-contracts",permalink:"/docs/api/tutorials/data-contracts",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/data-contracts.md",tags:[],version:"current",frontMatter:{title:"Data Contracts",slug:"/api/tutorials/data-contracts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/data-contracts.md"},sidebar:"overviewSidebar",previous:{title:"Operations",permalink:"/docs/api/tutorials/operations"},next:{title:"Domains",permalink:"/docs/api/tutorials/domains"}},d={},y=[{value:"Why Would You Use Data Contract APIs?",id:"why-would-you-use-data-contract-apis",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Privileges Required",id:"privileges-required",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Create &amp; Update Data Contract",id:"create--update-data-contract",level:2},{value:"Check Contract Status",id:"check-contract-status",level:2},{value:"Check Contract Status for Table",id:"check-contract-status-for-table",level:3}],f=(b="FeatureAvailability",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var b;const g={toc:y},h="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(h,u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"data-contracts"},"Data Contracts"),(0,r.yg)(f,{saasOnly:!0,mdxType:"FeatureAvailability"}),(0,r.yg)("p",null,"This guide specifically covers how to use the Data Contract APIs with ",(0,r.yg)("strong",{parentName:"p"},"DataHub Cloud"),"."),(0,r.yg)("h2",{id:"why-would-you-use-data-contract-apis"},"Why Would You Use Data Contract APIs?"),(0,r.yg)("p",null,"The Assertions APIs allow you to create, update, and evaluate Data Contracts programmatically. This is particularly\nuseful to automate the monitoring of data quality and schema compliance for your data."),(0,r.yg)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.yg)("p",null,"This guide will show you how to create, update, and check the status of aData Contract."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("h3",{id:"privileges-required"},"Privileges Required"),(0,r.yg)("p",null,"The actor making API calls must have the ",(0,r.yg)("inlineCode",{parentName:"p"},"Edit Data Contract")," privileges for the Tables at hand."),(0,r.yg)("h3",{id:"assertions"},"Assertions"),(0,r.yg)("p",null,"Before creating a Data Contract, you should have already created the Assertions that you want to associate with the Data Contract.\nCheck out the ",(0,r.yg)("a",{parentName:"p",href:"/docs/api/tutorials/assertions"},"Assertions")," guide for details on how to create DataHub Assertions."),(0,r.yg)("h2",{id:"create--update-data-contract"},"Create & Update Data Contract"),(0,r.yg)("p",null,'You can create a new Data Contract, which is simply bundle of "important" assertions, using the following APIs.'),(0,r.yg)(a.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.yg)("p",null,"To create or update a Data Contract, simply use the ",(0,r.yg)("inlineCode",{parentName:"p"},"upsertDataContract")," GraphQL Mutation. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},'mutation upsertDataContract {\n    upsertDataContract(\n      input: {\n        entityUrn: "urn:li:dataset:(urn:li:dataPlatform:snowflake,purchases,PROD)", # Table to Create Contract for \n        freshness: [\n            {\n                assertionUrn: "urn:li:assertion:your-freshness-assertion-id",\n            }\n        ],\n        schema: [\n            {\n                assertionUrn: "urn:li:assertion:your-schema-assertion-id",\n            }\n        ],\n        dataQuality: [\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-1",\n            },\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-2",\n            }\n        ]\n      }) {\n        urn\n      }\n  )\n}\n')),(0,r.yg)("p",null,"This API will return a unique identifier (URN) for the Data Contract if you were successful:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsertDataContract": {\n      "urn": "urn:li:dataContract:your-new-contract-id"\n    }\n  },\n  "extensions": {}\n}\n')),(0,r.yg)("p",null,"If you want to update an existing Data Contract, you can use the same API, but also passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"urn")," parameter in the\n",(0,r.yg)("inlineCode",{parentName:"p"},"upsertDataContract")," mutation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},'mutation upsertDataContract {\n    upsertDataContract(\n      urn: "urn:li:dataContract:your-existing-contract-id",\n      input: {\n        freshness: [\n            {\n                assertionUrn: "urn:li:assertion:your-freshness-assertion-id",\n            }\n        ],\n        schema: [\n            {\n                assertionUrn: "urn:li:assertion:your-schema-assertion-id",\n            }\n        ],\n        dataQuality: [\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-1",\n            },\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-2",\n            }\n        ]\n      }) {\n        urn\n      }\n  )\n}\n')))),(0,r.yg)("h2",{id:"check-contract-status"},"Check Contract Status"),(0,r.yg)("p",null,"You can use the following APIs to check whether a Data Contract is passing or failing, which is determined\nby the last status of the assertions associated with the contract."),(0,r.yg)(a.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.yg)("h3",{id:"check-contract-status-for-table"},"Check Contract Status for Table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},'query getTableContractStatus {\n    dataset(urn: "urn:li:dataset(urn:li:dataPlatform:snowflake,purchases,PROD") {\n        contract {\n           result {\n              type # Passing or Failing.\n              assertionResults { # Results of each contract assertion. \n                  assertion {\n                     urn\n                  }\n                  result {\n                      type\n                      nativeResults {\n                          key\n                          value\n                      }\n                  }\n              }\n           }\n        }\n    }\n}\n')),(0,r.yg)("p",null,"You can also ",(0,r.yg)("em",{parentName:"p"},"force refresh")," all of the Contract Assertions by evaluating them on-demand by providing the ",(0,r.yg)("inlineCode",{parentName:"p"},"refresh")," argument\nin your query. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},'query getTableContractStatus {\n    dataset(urn: "urn:li:dataset(urn:li:dataPlatform:snowflake,purchases,PROD") {\n        contract(refresh: true) {\n           ... same\n        }\n    }\n}\n')),(0,r.yg)("p",null,"This will run any native Acryl assertions comprising the Data Contract. Be careful! This can take a while depending on how many native assertions are part of the contract."),(0,r.yg)("p",null,"If you're successful, you'll get the latest status for the Table Contract: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n       "contract": {\n           "result": {\n              "type": "PASSING",\n              "assertionResults": [\n                  {\n                      "assertion": {\n                         "urn": "urn:li:assertion:your-freshness-assertion-id"\n                      },\n                      "result": {\n                          "type": "SUCCESS",\n                          "nativeResults": [\n                              {\n                                  "key": "Value",\n                                  "value": "1382"\n                              }\n                          ]\n                      }\n                  },\n                  {\n                     "assertion": {\n                        "urn": "urn:li:assertion:your-volume-assertion-id"\n                     },\n                      "result": {\n                          "type": "SUCCESS",\n                          "nativeResults": [\n                              {\n                                  "key": "Value",\n                                  "value": "12323"\n                              }\n                          ]\n                      }\n                  }\n              ]\n           }\n        }\n    }\n  },\n  "extensions": {}\n}\n')))))}m.isMDXComponent=!0}}]);