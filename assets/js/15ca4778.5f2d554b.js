"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[26387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=a,d=l["".concat(m,".").concat(f)]||l[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Custom transformer script",slug:"/metadata-ingestion/examples/transforms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/transforms/README.md"},s="Custom transformer script",i={unversionedId:"metadata-ingestion/examples/transforms/README",id:"version-0.12.1/metadata-ingestion/examples/transforms/README",title:"Custom transformer script",description:"This script sets up a transformer that reads in a list of owner URNs from a JSON file specified via owners_json and appends these owners to every MCE.",source:"@site/versioned_docs/version-0.12.1/metadata-ingestion/examples/transforms/README.md",sourceDirName:"metadata-ingestion/examples/transforms",slug:"/metadata-ingestion/examples/transforms",permalink:"/docs/0.12.1/metadata-ingestion/examples/transforms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/transforms/README.md",tags:[],version:"0.12.1",frontMatter:{title:"Custom transformer script",slug:"/metadata-ingestion/examples/transforms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/transforms/README.md"}},m={},p=[],c={toc:p},l="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-transformer-script"},"Custom transformer script"),(0,a.kt)("p",null,"This script sets up a transformer that reads in a list of owner URNs from a JSON file specified via ",(0,a.kt)("inlineCode",{parentName:"p"},"owners_json")," and appends these owners to every MCE."),(0,a.kt)("p",null,"See the transformers tutorial (",(0,a.kt)("a",{parentName:"p",href:"https://datahubproject.io/docs/metadata-ingestion/docs/transformer/intro"},"https://datahubproject.io/docs/metadata-ingestion/docs/transformer/intro"),") for how this module is built and run."))}u.isMDXComponent=!0}}]);