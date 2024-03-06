"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[41677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const r={title:"SQL Profiling",slug:"/metadata-ingestion/docs/dev_guides/sql_profiles",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/sql_profiles.md"},a="SQL Profiling",s={unversionedId:"metadata-ingestion/docs/dev_guides/sql_profiles",id:"version-0.12.1/metadata-ingestion/docs/dev_guides/sql_profiles",title:"SQL Profiling",description:"SQL Profiling collects table level and column level statistics.",source:"@site/versioned_docs/version-0.12.1/metadata-ingestion/docs/dev_guides/sql_profiles.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/sql_profiles",permalink:"/docs/0.12.1/metadata-ingestion/docs/dev_guides/sql_profiles",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/sql_profiles.md",tags:[],version:"0.12.1",frontMatter:{title:"SQL Profiling",slug:"/metadata-ingestion/docs/dev_guides/sql_profiles",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/sql_profiles.md"},sidebar:"overviewSidebar",previous:{title:"Adding Stateful Ingestion to a Source",permalink:"/docs/0.12.1/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source"},next:{title:"Profiling ingestions",permalink:"/docs/0.12.1/metadata-ingestion/docs/dev_guides/profiling_ingestions"}},l={},u=[{value:"Capabilities",id:"capabilities",level:2},{value:"Supported Sources",id:"supported-sources",level:2},{value:"Questions",id:"questions",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sql-profiling"},"SQL Profiling"),(0,o.kt)("p",null,"SQL Profiling collects table level and column level statistics.\nThe SQL-based profiler does not run alone, but rather can be enabled for other SQL-based sources.\nEnabling profiling will slow down ingestion runs."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Running profiling against many tables or over many rows can run up significant costs.\nWhile we've done our best to limit the expensiveness of the queries the profiler runs, you\nshould be prudent about the set of tables profiling is enabled on or the frequency\nof the profiling runs.")),(0,o.kt)("h2",{id:"capabilities"},"Capabilities"),(0,o.kt)("p",null,"Extracts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Row and column counts for each table"),(0,o.kt)("li",{parentName:"ul"},"For each column, if applicable:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"null counts and proportions"),(0,o.kt)("li",{parentName:"ul"},"distinct counts and proportions"),(0,o.kt)("li",{parentName:"ul"},"minimum, maximum, mean, median, standard deviation, some quantile values"),(0,o.kt)("li",{parentName:"ul"},"histograms or frequencies of unique values")))),(0,o.kt)("h2",{id:"supported-sources"},"Supported Sources"),(0,o.kt)("p",null,"SQL profiling is supported for all SQL sources. Check the individual source page to verify if it supports profiling."),(0,o.kt)("h2",{id:"questions"},"Questions"),(0,o.kt)("p",null,"If you've got any questions on configuring profiling, feel free to ping us on ",(0,o.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}p.isMDXComponent=!0}}]);