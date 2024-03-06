"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[52930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,u=m["".concat(o,".").concat(p)]||m[p]||c[p]||r;return a?n.createElement(u,s(s({ref:t},h),{},{components:a})):n.createElement(u,s({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},36008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Timeline API",sidebar_label:"Timeline API",slug:"/dev-guides/timeline",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/dev-guides/timeline.md"},s=void 0,l={unversionedId:"docs/dev-guides/timeline",id:"version-0.12.1/docs/dev-guides/timeline",title:"Timeline API",description:"The Timeline API supports viewing version history of schemas, documentation, tags, glossary terms, and other updates",source:"@site/versioned_docs/version-0.12.1/docs/dev-guides/timeline.md",sourceDirName:"docs/dev-guides",slug:"/dev-guides/timeline",permalink:"/docs/0.12.1/dev-guides/timeline",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/dev-guides/timeline.md",tags:[],version:"0.12.1",frontMatter:{title:"Timeline API",sidebar_label:"Timeline API",slug:"/dev-guides/timeline",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/dev-guides/timeline.md"},sidebar:"overviewSidebar",previous:{title:"OpenAPI Guide",permalink:"/docs/0.12.1/api/openapi/openapi-usage-guide"},next:{title:"Rest.li API",permalink:"/docs/0.12.1/api/restli/restli-overview"}},o={},d=[{value:"Compatibility",id:"compatibility",level:2},{value:"Entity Timeline Conceptually",id:"entity-timeline-conceptually",level:2},{value:"Change Event",id:"change-event",level:2},{value:"Change Event Examples",id:"change-event-examples",level:3},{value:"Change Transaction",id:"change-transaction",level:2},{value:"Technical Schema",id:"technical-schema",level:2},{value:"Example Usage",id:"example-usage",level:3},{value:"Ownership",id:"ownership",level:2},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Tags",id:"tags",level:2},{value:"Example Usage",id:"example-usage-2",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Example Usage",id:"example-usage-3",level:3},{value:"Glossary Terms",id:"glossary-terms",level:2},{value:"Example Usage",id:"example-usage-4",level:3},{value:"Explore the API",id:"explore-the-api",level:2},{value:"Future Work",id:"future-work",level:2}],h={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Timeline API supports viewing version history of schemas, documentation, tags, glossary terms, and other updates\nto entities. At present, the API only supports Datasets and Glossary Terms."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"The Timeline API is available in server versions ",(0,i.kt)("inlineCode",{parentName:"p"},"0.8.28")," and higher. The ",(0,i.kt)("inlineCode",{parentName:"p"},"cli")," timeline command is available in ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/acryl-datahub/"},"pypi")," versions ",(0,i.kt)("inlineCode",{parentName:"p"},"0.8.27.1")," onwards."),(0,i.kt)("h1",{id:"concepts"},"Concepts"),(0,i.kt)("h2",{id:"entity-timeline-conceptually"},"Entity Timeline Conceptually"),(0,i.kt)("p",null,"For the visually inclined, here is a conceptual diagram that illustrates how to think about the entity timeline with categorical changes overlaid on it."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/timeline/timeline-conceptually.png"})),(0,i.kt)("h2",{id:"change-event"},"Change Event"),(0,i.kt)("p",null,"Each modification is modeled as a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/services/src/main/java/com/linkedin/metadata/timeline/data/ChangeEvent.java"},"ChangeEvent"),"\nwhich are grouped under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/services/src/main/java/com/linkedin/metadata/timeline/data/ChangeTransaction.java"},"ChangeTransactions"),"\nbased on timestamp. A ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeEvent")," consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"changeType"),": An operational type for the change, either ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MODIFY"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"REMOVE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"semVerChange"),": A ",(0,i.kt)("a",{parentName:"li",href:"https://semver.org/"},"semver")," change type based on the compatibility of the change. This gets utilized in the computation of the transaction level version. Options are ",(0,i.kt)("inlineCode",{parentName:"li"},"NONE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"MAJOR"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"EXCEPTIONAL")," for cases where an exception occurred during processing, but we do not fail the entire change calculation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": The high level target of the change. This is usually an ",(0,i.kt)("inlineCode",{parentName:"li"},"urn"),", but can differ depending on the type of change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"category"),": The category a change falls under, specific aspects are mapped to each category depending on the entity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elementId"),": Optional, the ID of the element being applied to the target"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": A human readable description of the change produced by the ",(0,i.kt)("inlineCode",{parentName:"li"},"Differ")," type computing the diff"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"changeDetails"),": A loose property map of additional details about the change")),(0,i.kt)("h3",{id:"change-event-examples"},"Change Event Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A tag was applied to a ",(0,i.kt)("em",{parentName:"li"},"field")," of a dataset through the UI:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"changeType"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"urn:li:schemaField:(urn:li:dataset:(urn:li:dataPlatform:<platform>,<name>,<fabric_type>),<fieldPath>)")," -> The field the tag is being added to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"TAG")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elementId"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"urn:li:tag:<tagName>")," -> The ID of the tag being added"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"semVerChange"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR")))),(0,i.kt)("li",{parentName:"ul"},"A tag was added directly at the top-level to a dataset through the UI:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"changeType"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"urn:li:dataset:(urn:li:dataPlatform:<platform>,<name>,<fabric_type>)")," -> The dataset the tag is being added to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"TAG")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elementId"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"urn:li:tag:<tagName>")," -> The ID of the tag being added"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"semVerChange"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR"))))),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"elementId")," fields in the examples above to familiarize yourself with the semantics."),(0,i.kt)("h2",{id:"change-transaction"},"Change Transaction"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeTransaction")," is assigned a computed semantic version based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangeEvents")," that occurred within it,\nstarting at ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0")," and updating based on whether the most significant change in the transaction is a ",(0,i.kt)("inlineCode",{parentName:"p"},"MAJOR"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MINOR"),", or\n",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," change. The logic for what changes constitute a Major, Minor or Patch change are encoded in the category specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Differ")," implementation.\nFor example, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-io/src/main/java/com/linkedin/metadata/timeline/eventgenerator/SchemaMetadataChangeEventGenerator.java"},"SchemaMetadataDiffer")," has baked-in logic for determining what level of semantic change an event is based on backwards and forwards incompatibility. Read on to learn about the different categories of changes, and how semantic changes are interpreted in each."),(0,i.kt)("h1",{id:"categories"},"Categories"),(0,i.kt)("p",null,"ChangeTransactions contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"category")," that represents a kind of change that happened. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Timeline API")," allows the caller to specify which categories of changes they are interested in. Categories allow us to abstract away the low-level technical change that happened in the metadata (e.g. the ",(0,i.kt)("inlineCode",{parentName:"p"},"schemaMetadata")," aspect changed) to a high-level semantic change that happened in the metadata (e.g. the ",(0,i.kt)("inlineCode",{parentName:"p"},"Technical Schema")," of the dataset changed). Read on to learn about the different categories that are supported today."),(0,i.kt)("p",null,"The Dataset entity currently supports the following categories:"),(0,i.kt)("h2",{id:"technical-schema"},"Technical Schema"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any structural changes in the technical schema of the dataset, such as adding, dropping, renaming columns. "),(0,i.kt)("li",{parentName:"ul"},"Driven by the ",(0,i.kt)("inlineCode",{parentName:"li"},"schemaMetadata")," aspect. "),(0,i.kt)("li",{parentName:"ul"},"Changes are marked with the appropriate semantic version marker based on well-understood rules for backwards and forwards compatibility.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE")),": Changes in field descriptions are not communicated via this category, use the Documentation category for that."),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("p",null,"We have provided some example scripts that demonstrate making changes to an aspect within each category and use then use the Timeline API to query the result.\nAll examples can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/smoke-test/test_resources/timeline"},"smoke-test/test_resources/timeline")," and should be executed from that directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"% ./test_timeline_schema.sh\n[2022-02-24 15:31:52,617] INFO     {datahub.cli.delete_cli:130} - DataHub configured with http://localhost:8080\nSuccessfully deleted urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD). 6 rows deleted\nTook 1.077 seconds to hard delete 6 rows for 1 entities\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nhttp://localhost:8080/openapi/timeline/v1/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CtestTimelineDataset%2CPROD%29?categories=TECHNICAL_SCHEMA&start=1644874316591&end=2682397800000\n2022-02-24 15:31:53 - 0.0.0-computed\n    ADD TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:property_id): A forwards & backwards compatible change due to the newly added field 'property_id'.\n    ADD TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service): A forwards & backwards compatible change due to the newly added field 'service'.\n    ADD TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.type): A forwards & backwards compatible change due to the newly added field 'service.type'.\n    ADD TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.provider): A forwards & backwards compatible change due to the newly added field 'service.provider'.\n    ADD TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.provider.name): A forwards & backwards compatible change due to the newly added field 'service.provider.name'.\n    ADD TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.provider.id): A forwards & backwards compatible change due to the newly added field 'service.provider.id'.\n2022-02-24 15:31:55 - 1.0.0-computed\n    MODIFY TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.provider.name): A backwards incompatible change due to  native datatype of the field 'service.provider.id' changed from 'varchar(50)' to 'tinyint'.\n    MODIFY TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.provider.id): A forwards compatible change due to field name changed from 'service.provider.id' to 'service.provider.id2'\n2022-02-24 15:31:55 - 2.0.0-computed\n    MODIFY TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.provider.id): A backwards incompatible change due to  native datatype of the field 'service.provider.name' changed from 'tinyint' to 'varchar(50)'.\n    MODIFY TECHNICAL_SCHEMA dataset:hive:testTimelineDataset (field:service.provider.id2): A forwards compatible change due to field name changed from 'service.provider.id2' to 'service.provider.id'\n")),(0,i.kt)("h2",{id:"ownership"},"Ownership"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any changes in ownership of the dataset, adding an owner, or changing the type of the owner. "),(0,i.kt)("li",{parentName:"ul"},"Driven by the ",(0,i.kt)("inlineCode",{parentName:"li"},"ownership")," aspect. "),(0,i.kt)("li",{parentName:"ul"},"All changes are currently marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR"),".")),(0,i.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,i.kt)("p",null,"We have provided some example scripts that demonstrate making changes to an aspect within each category and use then use the Timeline API to query the result.\nAll examples can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/smoke-test/test_resources/timeline"},"smoke-test/test_resources/timeline")," and should be executed from that directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"% ./test_timeline_ownership.sh\n[2022-02-24 15:40:25,367] INFO     {datahub.cli.delete_cli:130} - DataHub configured with http://localhost:8080\nSuccessfully deleted urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD). 6 rows deleted\nTook 1.087 seconds to hard delete 6 rows for 1 entities\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nhttp://localhost:8080/openapi/timeline/v1/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CtestTimelineDataset%2CPROD%29?categories=OWNER&start=1644874829027&end=2682397800000\n2022-02-24 15:40:26 - 0.0.0-computed\n    ADD OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:datahub): A new owner 'datahub' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n    ADD OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:jdoe): A new owner 'jdoe' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:40:27 - 0.1.0-computed\n    REMOVE OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:datahub): Owner 'datahub' of the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n2022-02-24 15:40:28 - 0.2.0-computed\n    ADD OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:datahub): A new owner 'datahub' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n    REMOVE OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:jdoe): Owner 'jdoe' of the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nhttp://localhost:8080/openapi/timeline/v1/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CtestTimelineDataset%2CPROD%29?categories=OWNER&start=1644874831456&end=2682397800000\n2022-02-24 15:40:26 - 0.0.0-computed\n    ADD OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:datahub): A new owner 'datahub' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n    ADD OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:jdoe): A new owner 'jdoe' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:40:27 - 0.1.0-computed\n    REMOVE OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:datahub): Owner 'datahub' of the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n2022-02-24 15:40:28 - 0.2.0-computed\n    ADD OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:datahub): A new owner 'datahub' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n    REMOVE OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:jdoe): Owner 'jdoe' of the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n2022-02-24 15:40:29 - 0.2.0-computed\n2022-02-24 15:40:30 - 0.3.0-computed\n    ADD OWNERSHIP dataset:hive:testTimelineDataset (urn:li:corpuser:jdoe): A new owner 'jdoe' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:40:30 - 0.4.0-computed\n    MODIFY OWNERSHIP urn:li:corpuser:jdoe (DEVELOPER): The ownership type of the owner 'jdoe' changed from 'DATAOWNER' to 'DEVELOPER'.\n")),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any changes in tags applied to the dataset or to fields of the dataset. "),(0,i.kt)("li",{parentName:"ul"},"Driven by the ",(0,i.kt)("inlineCode",{parentName:"li"},"schemaMetadata"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"editableSchemaMetadata")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"globalTags")," aspects."),(0,i.kt)("li",{parentName:"ul"},"All changes are currently marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR"),".")),(0,i.kt)("h3",{id:"example-usage-2"},"Example Usage"),(0,i.kt)("p",null,"We have provided some example scripts that demonstrate making changes to an aspect within each category and use then use the Timeline API to query the result.\nAll examples can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/smoke-test/test_resources/timeline"},"smoke-test/test_resources/timeline")," and should be executed from that directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"% ./test_timeline_tags.sh\n[2022-02-24 15:44:04,279] INFO     {datahub.cli.delete_cli:130} - DataHub configured with http://localhost:8080\nSuccessfully deleted urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD). 9 rows deleted\nTook 0.626 seconds to hard delete 9 rows for 1 entities\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nhttp://localhost:8080/openapi/timeline/v1/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CtestTimelineDataset%2CPROD%29?categories=TAG&start=1644875047911&end=2682397800000\n2022-02-24 15:44:05 - 0.0.0-computed\n    ADD TAG dataset:hive:testTimelineDataset (urn:li:tag:Legacy): A new tag 'Legacy' for the entity 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:44:06 - 0.1.0-computed\n    ADD TAG dataset:hive:testTimelineDataset (urn:li:tag:NeedsDocumentation): A new tag 'NeedsDocumentation' for the entity 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:44:07 - 0.2.0-computed\n    REMOVE TAG dataset:hive:testTimelineDataset (urn:li:tag:Legacy): Tag 'Legacy' of the entity 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n    REMOVE TAG dataset:hive:testTimelineDataset (urn:li:tag:NeedsDocumentation): Tag 'NeedsDocumentation' of the entity 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n")),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any changes to documentation at the dataset level or at the field level. "),(0,i.kt)("li",{parentName:"ul"},"Driven by the ",(0,i.kt)("inlineCode",{parentName:"li"},"datasetProperties"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"institutionalMemory"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"schemaMetadata")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"editableSchemaMetadata"),"."),(0,i.kt)("li",{parentName:"ul"},"Addition or removal of documentation or links is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR")," while edits to existing documentation are marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH")," changes.")),(0,i.kt)("h3",{id:"example-usage-3"},"Example Usage"),(0,i.kt)("p",null,"We have provided some example scripts that demonstrate making changes to an aspect within each category and use then use the Timeline API to query the result.\nAll examples can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/smoke-test/test_resources/timeline"},"smoke-test/test_resources/timeline")," and should be executed from that directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"% ./test_timeline_documentation.sh\n[2022-02-24 15:45:53,950] INFO     {datahub.cli.delete_cli:130} - DataHub configured with http://localhost:8080\nSuccessfully deleted urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD). 6 rows deleted\nTook 0.578 seconds to hard delete 6 rows for 1 entities\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nhttp://localhost:8080/openapi/timeline/v1/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CtestTimelineDataset%2CPROD%29?categories=DOCUMENTATION&start=1644875157616&end=2682397800000\n2022-02-24 15:45:55 - 0.0.0-computed\n    ADD DOCUMENTATION dataset:hive:testTimelineDataset (https://www.linkedin.com): The institutionalMemory 'https://www.linkedin.com' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:45:56 - 0.1.0-computed\n    ADD DOCUMENTATION dataset:hive:testTimelineDataset (https://www.google.com): The institutionalMemory 'https://www.google.com' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:45:56 - 0.2.0-computed\n    ADD DOCUMENTATION dataset:hive:testTimelineDataset (https://datahubproject.io/docs): The institutionalMemory 'https://datahubproject.io/docs' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n    ADD DOCUMENTATION dataset:hive:testTimelineDataset (https://datahubproject.io/docs): The institutionalMemory 'https://datahubproject.io/docs' for the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n    REMOVE DOCUMENTATION dataset:hive:testTimelineDataset (https://www.linkedin.com): The institutionalMemory 'https://www.linkedin.com' of the dataset 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n")),(0,i.kt)("h2",{id:"glossary-terms"},"Glossary Terms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any changes to applied glossary terms to the dataset or to fields in the dataset. "),(0,i.kt)("li",{parentName:"ul"},"Driven by the ",(0,i.kt)("inlineCode",{parentName:"li"},"schemaMetadata"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"editableSchemaMetadata"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"glossaryTerms")," aspects."),(0,i.kt)("li",{parentName:"ul"},"All changes are currently marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR"),".")),(0,i.kt)("h3",{id:"example-usage-4"},"Example Usage"),(0,i.kt)("p",null,"We have provided some example scripts that demonstrate making changes to an aspect within each category and use then use the Timeline API to query the result.\nAll examples can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/smoke-test/test_resources/timeline"},"smoke-test/test_resources/timeline")," and should be executed from that directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"% ./test_timeline_glossary.sh\n[2022-02-24 15:44:56,152] INFO     {datahub.cli.delete_cli:130} - DataHub configured with http://localhost:8080\nSuccessfully deleted urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD). 6 rows deleted\nTook 0.443 seconds to hard delete 6 rows for 1 entities\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nUpdate succeeded with status 200\nhttp://localhost:8080/openapi/timeline/v1/urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahive%2CtestTimelineDataset%2CPROD%29?categories=GLOSSARY_TERM&start=1644875100605&end=2682397800000\n1969-12-31 18:00:00 - 0.0.0-computed\n    None None  : java.lang.NullPointerException:null\n2022-02-24 15:44:58 - 0.1.0-computed\n    ADD GLOSSARY_TERM dataset:hive:testTimelineDataset (urn:li:glossaryTerm:SavingsAccount): The GlossaryTerm 'SavingsAccount' for the entity 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been added.\n2022-02-24 15:44:59 - 0.2.0-computed\n    REMOVE GLOSSARY_TERM dataset:hive:testTimelineDataset (urn:li:glossaryTerm:CustomerAccount): The GlossaryTerm 'CustomerAccount' for the entity 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n    REMOVE GLOSSARY_TERM dataset:hive:testTimelineDataset (urn:li:glossaryTerm:SavingsAccount): The GlossaryTerm 'SavingsAccount' for the entity 'urn:li:dataset:(urn:li:dataPlatform:hive,testTimelineDataset,PROD)' has been removed.\n")),(0,i.kt)("h2",{id:"explore-the-api"},"Explore the API"),(0,i.kt)("p",null,"The API is browse-able via the UI through through the dropdown.\nHere are a few screenshots showing how to navigate to it. You can try out the API and send example requests."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/timeline/dropdown-apis.png"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/timeline/swagger-ui.png"})),(0,i.kt)("h2",{id:"future-work"},"Future Work"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supporting versions as start and end parameters as part of the call to the timeline API"),(0,i.kt)("li",{parentName:"ul"},"Supporting entities beyond Datasets"),(0,i.kt)("li",{parentName:"ul"},"Adding GraphQL API support"),(0,i.kt)("li",{parentName:"ul"},"Supporting materialization of computed versions for entity categories (compared to the current read-time version computation)"),(0,i.kt)("li",{parentName:"ul"},"Support in the UI to visualize the timeline in various places (e.g. schema history, etc.)")))}c.isMDXComponent=!0}}]);