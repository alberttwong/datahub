"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[99612],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),k=n,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||i;return o?r.createElement(m,a(a({ref:t},c),{},{components:o})):r.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},96015:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/looker/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md"},a="Looker & LookML Ingestion Guide: Overview",l={unversionedId:"docs/quick-ingestion-guides/looker/overview",id:"version-0.12.1/docs/quick-ingestion-guides/looker/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/versioned_docs/version-0.12.1/docs/quick-ingestion-guides/looker/overview.md",sourceDirName:"docs/quick-ingestion-guides/looker",slug:"/quick-ingestion-guides/looker/overview",permalink:"/docs/0.12.1/quick-ingestion-guides/looker/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md",tags:[],version:"0.12.1",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/looker/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/0.12.1/quick-ingestion-guides/powerbi/configuration"},next:{title:"Setup",permalink:"/docs/0.12.1/quick-ingestion-guides/looker/setup"}},s={},u=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Looker",id:"looker",level:3},{value:"LookML",id:"lookml",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Reference",id:"reference",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"looker--lookml-ingestion-guide-overview"},"Looker & LookML Ingestion Guide: Overview"),(0,n.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,n.kt)("p",null,"This guide will help you set up the Looker & LookML connectors to begin ingesting metadata into DataHub.\nUpon completing this guide, you will have a recurring ingestion pipeline to extract metadata from Looker & LookML and load it into DataHub. "),(0,n.kt)("h3",{id:"looker"},"Looker"),(0,n.kt)("p",null,"Looker connector will ingest Looker asset types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/dashboards"},"Dashboards")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/creating-visualizations"},"Charts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-explore-explore"},"Explores")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.looker.com/api/explorer/4.0/methods/Metadata/connection_schemas"},"Schemas")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/creating-user-defined-dashboards"},"Owners of Dashboards"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To get complete Looker metadata integration (including Looker views and lineage to the underlying warehouse tables), you must also use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker#module-lookml"},"lookml")," connector.")),(0,n.kt)("h3",{id:"lookml"},"LookML"),(0,n.kt)("p",null,"LookMl connector will include the following LookML asset types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-view-view"},"LookML views from model files in a project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-field-dimension"},"Metadata for dimensions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-measure-types"},"Metadata for measures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-field-dimension-group"},"Dimension Groups as tag"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To get complete Looker metadata integration (including Looker views and lineage to the underlying warehouse tables), you must also use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker#module-looker"},"looker")," connector.")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Please continue to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.12.1/quick-ingestion-guides/looker/setup"},"setup guide"),", where we'll describe the prerequisites."),(0,n.kt)("h3",{id:"reference"},"Reference"),(0,n.kt)("p",null,"If you want to ingest metadata from Looker using the DataHub CLI, check out the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.12.1/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/Looker"},"Looker Ingestion Source"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);