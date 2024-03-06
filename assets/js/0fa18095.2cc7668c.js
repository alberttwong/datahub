"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),i=a(86010),o=a(72957),s=a(16550),l=a(75238),u=a(33609),c=a(92560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=f({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),h=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var h=a(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},70523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(73992),o=a(18679);const s={title:"Recipes",slug:"/metadata-ingestion/recipe_overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/recipe_overview.md"},l="Recipes",u={unversionedId:"metadata-ingestion/recipe_overview",id:"version-0.12.1/metadata-ingestion/recipe_overview",title:"Recipes",description:"A recipe is the main configuration file for metadata ingestion. It tells our ingestion scripts where to pull data from (source) and where to put it (sink).",source:"@site/versioned_docs/version-0.12.1/metadata-ingestion/recipe_overview.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/recipe_overview",permalink:"/docs/0.12.1/metadata-ingestion/recipe_overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/recipe_overview.md",tags:[],version:"0.12.1",frontMatter:{title:"Recipes",slug:"/metadata-ingestion/recipe_overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/recipe_overview.md"},sidebar:"overviewSidebar",previous:{title:"Introduction to Metadata Ingestion",permalink:"/docs/0.12.1/metadata-ingestion"},next:{title:"Sinks",permalink:"/docs/0.12.1/metadata-ingestion/sink_overview"}},c={},p=[{value:"Configuring Recipe",id:"configuring-recipe",level:2},{value:"Running a Recipe",id:"running-a-recipe",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Handling Sensitive Information in Recipes",id:"handling-sensitive-information-in-recipes",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Autocomplete and Syntax Validation",id:"autocomplete-and-syntax-validation",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recipes"},"Recipes"),(0,r.kt)("p",null,"A recipe is the main configuration file for metadata ingestion. It tells our ingestion scripts where to pull data from (source) and where to put it (sink)."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sources-sinks.png"})),(0,r.kt)("h2",{id:"configuring-recipe"},"Configuring Recipe"),(0,r.kt)("p",null,"The basic form of the recipe file consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source"),", which contains the configuration of the data source. (See ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.12.1/metadata-ingestion/source_overview"},"Sources"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sink"),", which defines the destination of the metadata (See ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.12.1/metadata-ingestion/sink_overview"},"Sinks"),")")),(0,r.kt)("p",null,"Here's a simple recipe that pulls metadata from MSSQL (source) and puts it into the default sink (datahub rest)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# The simplest recipe that pulls metadata from MSSQL and puts it into DataHub\n# using the Rest API.\nsource:\n  type: mssql\n  config:\n    username: sa\n    password: ${MSSQL_PASSWORD}\n    database: DemoData\n# sink section omitted as we want to use the default datahub-rest sink\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,r.kt)("p",null,"A number of recipes are included in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/recipes"},"examples/recipes")," directory. For full info and context on each source and sink, see the pages described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/cli#installing-plugins"},"table of plugins"),"."),(0,r.kt)("admonition",{title:"One Source/Sink for One Recipe!",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that one recipe file can only have 1 source and 1 sink. If you want multiple sources then you will need multiple recipe files.")),(0,r.kt)("h2",{id:"running-a-recipe"},"Running a Recipe"),(0,r.kt)("p",null,"DataHub supports running recipes via the CLI or UI."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cli",label:"CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Install CLI and the plugin for the ingestion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade acryl-datahub\npip install 'acryl-datahub[datahub-rest]'\n")),(0,r.kt)("p",null,"Running this recipe is as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c recipe.dhub.yaml\n")),(0,r.kt)("p",null,"For a detailed guide on running recipes via CLI, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/metadata-ingestion/cli-ingestion"},"CLI Ingestion Guide"),".")),(0,r.kt)(o.Z,{value:"ui",label:"UI",mdxType:"TabItem"},(0,r.kt)("p",null,"You can configure and run the recipe in ",(0,r.kt)("strong",{parentName:"p"},"Ingestion")," tab in DataHub. "),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/ingestion-tab.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you have the ",(0,r.kt)("strong",{parentName:"li"},"Manage Metadata Ingestion & Manage Secret")," privileges."),(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Ingestion")," tab in DataHub."),(0,r.kt)("li",{parentName:"ul"},"Create an ingestion source & configure the recipe via UI."),(0,r.kt)("li",{parentName:"ul"},"Hit ",(0,r.kt)("strong",{parentName:"li"},"Execute"),".")),(0,r.kt)("p",null,"For a detailed guide on running recipes via UI, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/ui-ingestion"},"UI Ingestion Guide"),"."))),(0,r.kt)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,r.kt)("h3",{id:"handling-sensitive-information-in-recipes"},"Handling Sensitive Information in Recipes"),(0,r.kt)("p",null,"We automatically expand environment variables in the config (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"${MSSQL_PASSWORD}"),"),\nsimilar to variable substitution in GNU bash or in docker-compose files.\nFor details, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"},"variable-substitution"),".\nThis environment variable substitution should be used to mask sensitive information in recipe files. As long as you can get env variables securely to the ingestion process there would not be any need to store sensitive information in recipes."),(0,r.kt)("h3",{id:"transformations"},"Transformations"),(0,r.kt)("p",null,"If you'd like to modify data before it reaches the ingestion sinks \u2013 for instance, adding additional owners or tags \u2013 you can use a transformer to write your own module and integrate it with DataHub. Transformers require extending the recipe with a new section to describe the transformers that you want to run."),(0,r.kt)("p",null,'For example, a pipeline that ingests metadata from MSSQL and applies a default "important" tag to all datasets is described below:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# A recipe to ingest metadata from MSSQL and apply default tags to all tables\nsource:\n  type: mssql\n  config:\n    username: sa\n    password: ${MSSQL_PASSWORD}\n    database: DemoData\n\ntransformers: # an array of transformers applied sequentially\n  - type: simple_add_dataset_tags\n    config:\n      tag_urns:\n        - "urn:li:tag:Important"\n# default sink, no config needed\n')),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/metadata-ingestion/docs/transformer/intro"},"transformers guide")," to learn more about how you can create really flexible pipelines for processing metadata using Transformers!"),(0,r.kt)("h3",{id:"autocomplete-and-syntax-validation"},"Autocomplete and Syntax Validation"),(0,r.kt)("p",null,"Name your recipe with ",(0,r.kt)("strong",{parentName:"p"},".dhub.yaml")," extension like ",(0,r.kt)("inlineCode",{parentName:"p"},"myrecipe.dhub.yaml_")," to use vscode or intellij as a recipe editor with autocomplete\nand syntax validation. Make sure yaml plugin is installed for your editor:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For vscode install ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"Redhat's yaml plugin")),(0,r.kt)("li",{parentName:"ul"},"For intellij install ",(0,r.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/13126-yaml"},"official yaml plugin"))))}f.isMDXComponent=!0}}]);