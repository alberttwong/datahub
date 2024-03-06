"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[59930],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,m=p["".concat(i,".").concat(g)]||p[g]||c[g]||s;return t?n.createElement(m,o(o({ref:a},d),{},{components:t})):n.createElement(m,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},18679:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),r=t(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t},a)}},73992:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(87462),r=t(67294),s=t(86010),o=t(72957),l=t(16550),i=t(75238),u=t(33609),d=t(92560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function c(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(n.location.search);a.set(s,e),n.replace({...n.location,search:a.toString()})}),[s,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,s=c(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[i,u]=m({queryString:t,groupId:n}),[p,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,s]=(0,d.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),f=(()=>{const e=i??p;return g({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var f=t(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:a,block:t,selectedValue:l,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const a=e.currentTarget,t=d.indexOf(a),n=u[t].value;n!==l&&(p(a),i(n))},g=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>d.push(e),onKeyDown:g,onClick:c},o,{className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},r.createElement(_,(0,n.Z)({},e,a)),r.createElement(y,(0,n.Z)({},e,a)))}function k(e){const a=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(a)},e))}},13934:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),s=t(73992),o=t(18679);const l={title:"Tags",slug:"/api/tutorials/tags",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/tags.md"},i="Tags",u={unversionedId:"docs/api/tutorials/tags",id:"version-0.12.1/docs/api/tutorials/tags",title:"Tags",description:"Why Would You Use Tags on Datasets?",source:"@site/versioned_docs/version-0.12.1/docs/api/tutorials/tags.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/tags",permalink:"/docs/0.12.1/api/tutorials/tags",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/tags.md",tags:[],version:"0.12.1",frontMatter:{title:"Tags",slug:"/api/tutorials/tags",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/tags.md"},sidebar:"overviewSidebar",previous:{title:"Lineage",permalink:"/docs/0.12.1/api/tutorials/lineage"},next:{title:"Terms",permalink:"/docs/0.12.1/api/tutorials/terms"}},d={},p=[{value:"Why Would You Use Tags on Datasets?",id:"why-would-you-use-tags-on-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Tags",id:"create-tags",level:2},{value:"Expected Outcome of Creating Tags",id:"expected-outcome-of-creating-tags",level:3},{value:"Read Tags",id:"read-tags",level:2},{value:"Add Tags",id:"add-tags",level:2},{value:"Add Tags to a dataset",id:"add-tags-to-a-dataset",level:3},{value:"Add Tags to a Column of a dataset",id:"add-tags-to-a-column-of-a-dataset",level:3},{value:"Expected Outcome of Adding Tags",id:"expected-outcome-of-adding-tags",level:3},{value:"Remove Tags",id:"remove-tags",level:2},{value:"Expected Outcome of Removing Tags",id:"expected-outcome-of-removing-tags",level:3}],c={toc:p},g="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(g,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tags"},"Tags"),(0,r.kt)("h2",{id:"why-would-you-use-tags-on-datasets"},"Why Would You Use Tags on Datasets?"),(0,r.kt)("p",null,"Tags are informal, loosely controlled labels that help in search & discovery. They can be added to datasets, dataset schemas, or containers, for an easy way to label or categorize entities \u2013 without having to associate them to a broader business glossary or vocabulary.\nFor more information about tags, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/tags"},"About DataHub Tags"),"."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create: create a tag."),(0,r.kt)("li",{parentName:"ul"},"Read : read tags attached to a dataset."),(0,r.kt)("li",{parentName:"ul"},"Add: add a tag to a column of a dataset or a dataset itself."),(0,r.kt)("li",{parentName:"ul"},"Remove: remove a tag from a dataset.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before modifying tags, you need to ensure the target dataset is already present in your DataHub instance.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,r.kt)("p",null,"For more information on how to set up for GraphQL, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.1/api/graphql/how-to-set-up-graphql"},"How To Set Up GraphQL"),"."),(0,r.kt)("h2",{id:"create-tags"},"Create Tags"),(0,r.kt)("p",null,"The following code creates a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation createTag {\n    createTag(input:\n    {\n      name: "Deprecated",\n      id: "deprecated",\n      description: "Having this tag means this column or table is deprecated."\n    })\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "createTag": "urn:li:tag:deprecated"\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createTag { createTag(input: { name: \\"Deprecated\\", id: \\"deprecated\\",description: \\"Having this tag means this column or table is deprecated.\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "createTag": "urn:li:tag:deprecated" }, "extensions": {} }\n'))),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/TagCreate.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.tag.TagProperties;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.rest.RestEmitter;\nimport datahub.event.MetadataChangeProposalWrapper;\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\n\npublic class TagCreate {\n\n  private TagCreate() {}\n\n  public static void main(String[] args)\n      throws IOException, ExecutionException, InterruptedException {\n    TagProperties tagProperties =\n        new TagProperties()\n            .setName("Deprecated")\n            .setDescription("Having this tag means this column or table is deprecated.");\n\n    MetadataChangeProposalWrapper mcpw =\n        MetadataChangeProposalWrapper.builder()\n            .entityType("tag")\n            .entityUrn("urn:li:tag:deprecated")\n            .upsert()\n            .aspect(tagProperties)\n            .build();\n\n    String token = "";\n    RestEmitter emitter = RestEmitter.create(b -> b.server("http://localhost:8080").token(token));\n    Future<MetadataWriteResponse> response = emitter.emit(mcpw, null);\n    System.out.println(response.get().getResponseContent());\n  }\n}\n\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_tag.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_tag_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import TagPropertiesClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ntag_urn = make_tag_urn("deprecated")\ntag_properties_aspect = TagPropertiesClass(\n    name="Deprecated",\n    description="Having this tag means this column or table is deprecated.",\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityUrn=tag_urn,\n    aspect=tag_properties_aspect,\n)\n\n# Create rest emitter\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created tag {tag_urn}")\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-creating-tags"},"Expected Outcome of Creating Tags"),(0,r.kt)("p",null,"You can now see the new tag ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated")," has been created."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/tag-created.png"})),(0,r.kt)("p",null,"We can also verify this operation by programmatically searching ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated")," tag after running this code using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:tag:deprecated" --aspect tagProperties\n\n{\n  "tagProperties": {\n    "description": "Having this tag means this column or table is deprecated.",\n    "name": "Deprecated"\n  }\n}\n')),(0,r.kt)("h2",{id:"read-tags"},"Read Tags"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)") {\n    tags {\n      tags {\n        tag {\n          name\n          urn\n            properties {\n              description\n              colorHex\n            }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "tags": {\n        "tags": [\n          {\n            "tag": {\n              "name": "Legacy",\n              "urn": "urn:li:tag:Legacy",\n              "properties": {\n                "description": "Indicates the dataset is no longer supported",\n                "colorHex": null,\n                "name": "Legacy"\n              }\n            }\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)\\\") {tags {tags {tag {name urn properties { description colorHex } } } } } }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "tags": {\n        "tags": [\n          {\n            "tag": {\n              "name": "Legacy",\n              "urn": "urn:li:tag:Legacy",\n              "properties": {\n                "description": "Indicates the dataset is no longer supported",\n                "colorHex": null\n              }\n            }\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_tags.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import GlobalTagsClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="SampleHiveDataset", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["globalTags"],\n    aspect_types=[GlobalTagsClass],\n)\n\nprint(result)\n\n')))),(0,r.kt)("h2",{id:"add-tags"},"Add Tags"),(0,r.kt)("h3",{id:"add-tags-to-a-dataset"},"Add Tags to a dataset"),(0,r.kt)("p",null,"The following code shows you how can add tags to a dataset.\nIn the following code, we add a tag ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated")," to a dataset named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_created"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation addTags {\n    addTags(\n      input: {\n        tagUrns: ["urn:li:tag:deprecated"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n      }\n    )\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "addTags": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTags { addTags(input: { tagUrns: [\\"urn:li:tag:deprecated\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "addTags": true }, "extensions": {} }\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_tag.py\nimport logging\nfrom typing import Optional\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_tag_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import GlobalTagsClass, TagAssociationClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# First we get the current tags\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\n\ncurrent_tags: Optional[GlobalTagsClass] = graph.get_aspect(\n    entity_urn=dataset_urn,\n    aspect_type=GlobalTagsClass,\n)\n\ntag_to_add = make_tag_urn("purchase")\ntag_association_to_add = TagAssociationClass(tag=tag_to_add)\n\nneed_write = False\nif current_tags:\n    if tag_to_add not in [x.tag for x in current_tags.tags]:\n        # tags exist, but this tag is not present in the current tags\n        current_tags.tags.append(TagAssociationClass(tag_to_add))\n        need_write = True\nelse:\n    # create a brand new tags aspect\n    current_tags = GlobalTagsClass(tags=[tag_association_to_add])\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_tags,\n    )\n    graph.emit(event)\n    log.info(f"Tag {tag_to_add} added to dataset {dataset_urn}")\n\nelse:\n    log.info(f"Tag {tag_to_add} already exists, omitting write")\n\n')))),(0,r.kt)("h3",{id:"add-tags-to-a-column-of-a-dataset"},"Add Tags to a Column of a dataset"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation addTags {\n    addTags(\n      input: {\n        tagUrns: ["urn:li:tag:deprecated"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTags { addTags(input: { tagUrns: [\\"urn:li:tag:deprecated\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\", subResourceType: DATASET_FIELD, subResource: \\"user_name\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "addTags": true }, "extensions": {} }\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_column_tag.py\nimport logging\nimport time\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_tag_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    EditableSchemaFieldInfoClass,\n    EditableSchemaMetadataClass,\n    GlobalTagsClass,\n    TagAssociationClass,\n)\nfrom datahub.utilities.urns.field_paths import get_simple_field_path_from_v2_field_path\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Inputs -> the column, dataset and the tag to set\ncolumn = "user_name"\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\ntag_to_add = make_tag_urn("deprecated")\n\n\n# First we get the current editable schema metadata\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n\ncurrent_editable_schema_metadata = graph.get_aspect(\n    entity_urn=dataset_urn,\n    aspect_type=EditableSchemaMetadataClass,\n)\n\n\n# Some pre-built objects to help all the conditional pathways\ntag_association_to_add = TagAssociationClass(tag=tag_to_add)\ntags_aspect_to_set = GlobalTagsClass(tags=[tag_association_to_add])\nfield_info_to_set = EditableSchemaFieldInfoClass(\n    fieldPath=column, globalTags=tags_aspect_to_set\n)\n\n\nneed_write = False\nfield_match = False\nif current_editable_schema_metadata:\n    for fieldInfo in current_editable_schema_metadata.editableSchemaFieldInfo:\n        if get_simple_field_path_from_v2_field_path(fieldInfo.fieldPath) == column:\n            # we have some editable schema metadata for this field\n            field_match = True\n            if fieldInfo.globalTags:\n                if tag_to_add not in [x.tag for x in fieldInfo.globalTags.tags]:\n                    # this tag is not present\n                    fieldInfo.globalTags.tags.append(tag_association_to_add)\n                    need_write = True\n            else:\n                fieldInfo.globalTags = tags_aspect_to_set\n                need_write = True\n\n    if not field_match:\n        # this field isn\'t present in the editable schema metadata aspect, add it\n        field_info = field_info_to_set\n        current_editable_schema_metadata.editableSchemaFieldInfo.append(field_info)\n        need_write = True\n\nelse:\n    # create a brand new editable schema metadata aspect\n    now = int(time.time() * 1000)  # milliseconds since epoch\n    current_timestamp = AuditStampClass(time=now, actor="urn:li:corpuser:ingestion")\n    current_editable_schema_metadata = EditableSchemaMetadataClass(\n        editableSchemaFieldInfo=[field_info_to_set],\n        created=current_timestamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_editable_schema_metadata,\n    )\n    graph.emit(event)\n    log.info(f"Tag {tag_to_add} added to column {column} of dataset {dataset_urn}")\n\nelse:\n    log.info(f"Tag {tag_to_add} already attached to column {column}, omitting write")\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-adding-tags"},"Expected Outcome of Adding Tags"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated")," tag has been added to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/tag-added.png"})),(0,r.kt)("p",null,"We can also verify this operation programmatically by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"globalTags")," aspect using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)" --aspect globalTags\n\n')),(0,r.kt)("h2",{id:"remove-tags"},"Remove Tags"),(0,r.kt)("p",null,"The following code remove a tag from a dataset.\nAfter running this code, ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated")," tag will be removed from a ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeTag {\n    removeTag(\n      input: {\n        tagUrn: "urn:li:tag:deprecated",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation removeTag { removeTag(input: { tagUrn: \\"urn:li:tag:deprecated\\", resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\" }) }", "variables":{}}\'\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_remove_tag_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation removeTag {\n    removeTag(\n      input: {\n        tagUrn: "urn:li:tag:deprecated",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-removing-tags"},"Expected Outcome of Removing Tags"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Deprecated")," tag has been removed to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/tag-removed.png"})),(0,r.kt)("p",null,"We can also verify this operation programmatically by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"gloablTags")," aspect using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)" --aspect globalTags\n\n{\n  "globalTags": {\n    "tags": []\n  }\n}\n')))}m.isMDXComponent=!0}}]);