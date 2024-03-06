"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Introduction",slug:"/actions",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/README.md"},r="\u26a1 DataHub Actions Framework",l={unversionedId:"docs/actions/README",id:"version-0.12.1/docs/actions/README",title:"Introduction",description:"Welcome to DataHub Actions! The Actions framework makes responding to realtime changes in your Metadata Graph easy, enabling you to seamlessly integrate DataHub into a broader events-based architecture.",source:"@site/versioned_docs/version-0.12.1/docs/actions/README.md",sourceDirName:"docs/actions",slug:"/actions",permalink:"/docs/0.12.1/actions",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/README.md",tags:[],version:"0.12.1",frontMatter:{title:"Introduction",slug:"/actions",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/README.md"},sidebar:"overviewSidebar",previous:{title:"Act on Metadata Overview",permalink:"/docs/0.12.1/act-on-metadata"},next:{title:"Quickstart",permalink:"/docs/0.12.1/actions/quickstart"}},s={},c=[{value:"Quickstart",id:"quickstart",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuring an Action",id:"configuring-an-action",level:2},{value:"Example: Hello World",id:"example-hello-world",level:3},{value:"Running an Action",id:"running-an-action",level:2},{value:"Running multiple Actions",id:"running-multiple-actions",level:3},{value:"Running in debug mode",id:"running-in-debug-mode",level:3},{value:"Stopping an Action",id:"stopping-an-action",level:3},{value:"Supported Events",id:"supported-events",level:2},{value:"Supported Event Sources",id:"supported-event-sources",level:2},{value:"Supported Actions",id:"supported-actions",level:2},{value:"Development",id:"development",level:2},{value:"Build and Test",id:"build-and-test",level:3},{value:"Developing a Transformer",id:"developing-a-transformer",level:3},{value:"Developing an Action",id:"developing-an-action",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Resources",id:"resources",level:2},{value:"License",id:"license",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-datahub-actions-framework"},"\u26a1 DataHub Actions Framework"),(0,o.kt)("p",null,"Welcome to DataHub Actions! The Actions framework makes responding to realtime changes in your Metadata Graph easy, enabling you to seamlessly integrate ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub"},"DataHub")," into a broader events-based architecture."),(0,o.kt)("p",null,"For a detailed introduction, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7iwNxHgqxtg&t=2189s"},"original announcement")," of the DataHub Actions Framework at the DataHub April 2022 Town Hall. For a more in-depth look at use cases and concepts, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions/concepts"},"DataHub Actions Concepts"),". "),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"To get started right away, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions/quickstart"},"DataHub Actions Quickstart")," Guide."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The DataHub Actions CLI commands are an extension of the base ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," CLI commands. We recommend\nfirst installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub --version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the Actions Framework requires a version of ",(0,o.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," >= v0.8.34")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Next, simply install the ",(0,o.kt)("inlineCode",{parentName:"p"},"acryl-datahub-actions")," package from PyPi:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub-actions\ndatahub actions version\n")),(0,o.kt)("h2",{id:"configuring-an-action"},"Configuring an Action"),(0,o.kt)("p",null,"Actions are configured using a YAML file, much in the same way DataHub ingestion sources are. An action configuration file consists of the following"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Action Pipeline Name (Should be unique and static)"),(0,o.kt)("li",{parentName:"ol"},"Source Configurations"),(0,o.kt)("li",{parentName:"ol"},"Transform + Filter Configurations"),(0,o.kt)("li",{parentName:"ol"},"Action Configuration"),(0,o.kt)("li",{parentName:"ol"},"Pipeline Options (Optional)"),(0,o.kt)("li",{parentName:"ol"},"DataHub API configs (Optional - required for select actions)")),(0,o.kt)("p",null,"With each component being independently pluggable and configurable. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# 1. Required: Action Pipeline Name\nname: <action-pipeline-name>\n\n# 2. Required: Event Source - Where to source event from.\nsource:\n  type: <source-type>\n  config:\n    # Event Source specific configs (map)\n\n# 3a. Optional: Filter to run on events (map)\nfilter: \n  event_type: <filtered-event-type>\n  event:\n    # Filter event fields by exact-match\n    <filtered-event-fields>\n\n# 3b. Optional: Custom Transformers to run on events (array)\ntransform:\n  - type: <transformer-type>\n    config: \n      # Transformer-specific configs (map)\n\n# 4. Required: Action - What action to take on events. \naction:\n  type: <action-type>\n  config:\n    # Action-specific configs (map)\n\n# 5. Optional: Additional pipeline options (error handling, etc)\noptions: \n  retry_count: 0 # The number of times to retry an Action with the same event. (If an exception is thrown). 0 by default. \n  failure_mode: "CONTINUE" # What to do when an event fails to be processed. Either \'CONTINUE\' to make progress or \'THROW\' to stop the pipeline. Either way, the failed event will be logged to a failed_events.log file. \n  failed_events_dir: "/tmp/datahub/actions"  # The directory in which to write a failed_events.log file that tracks events which fail to be processed. Defaults to "/tmp/logs/datahub/actions". \n\n# 6. Optional: DataHub API configuration\ndatahub:\n  server: "http://localhost:8080" # Location of DataHub API\n  # token: <your-access-token> # Required if Metadata Service Auth enabled\n')),(0,o.kt)("h3",{id:"example-hello-world"},"Example: Hello World"),(0,o.kt)("p",null,'An simple configuration file for a "Hello World" action, which simply prints all events it receives, is'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# 1. Action Pipeline Name\nname: "hello_world"\n# 2. Event Source: Where to source event from.\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\n# 3. Action: What action to take on events. \naction:\n  type: "hello_world"\n')),(0,o.kt)("p",null,'We can modify this configuration further to filter for specific events, by adding a "filter" block.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# 1. Action Pipeline Name\nname: "hello_world"\n\n# 2. Event Source - Where to source event from.\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\n\n# 3. Filter - Filter events that reach the Action\nfilter:\n  event_type: "EntityChangeEvent_v1"\n  event:\n    category: "TAG"\n    operation: "ADD"\n    modifier: "urn:li:tag:pii"\n\n# 4. Action - What action to take on events. \naction:\n  type: "hello_world"\n')),(0,o.kt)("h2",{id:"running-an-action"},"Running an Action"),(0,o.kt)("p",null,"To run a new Action, just use the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," CLI command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub actions -c <config.yml>\n")),(0,o.kt)("p",null,"Once the Action is running, you will see"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Action Pipeline with name '<action-pipeline-name>' is now running.\n")),(0,o.kt)("h3",{id:"running-multiple-actions"},"Running multiple Actions"),(0,o.kt)("p",null,'You can run multiple actions pipeline within the same command. Simply provide multiple\nconfig files by restating the "-c" command line argument.'),(0,o.kt)("p",null,"For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub actions -c <config-1.yaml> -c <config-2.yaml>\n")),(0,o.kt)("h3",{id:"running-in-debug-mode"},"Running in debug mode"),(0,o.kt)("p",null,"Simply append the ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug")," flag to the CLI to run your action in debug mode. NOTE: This will reveal sensitive information in the logs, do not share the logs with outside resources and ensure untrusted\nusers will not have access to logs through UI ingestions before enabling on instances."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub actions -c <config.yaml> --debug\n")),(0,o.kt)("h3",{id:"stopping-an-action"},"Stopping an Action"),(0,o.kt)("p",null,"Just issue a Control-C as usual. You should see the Actions Pipeline shut down gracefully, with a small\nsummary of processing results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Actions Pipeline with name '<action-pipeline-name' has been stopped.\n")),(0,o.kt)("h2",{id:"supported-events"},"Supported Events"),(0,o.kt)("p",null,"Two event types are currently supported. Read more about them below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.12.1/actions/events/entity-change-event"},"Entity Change Event V1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.12.1/actions/events/metadata-change-log-event"},"Metadata Change Log V1"))),(0,o.kt)("h2",{id:"supported-event-sources"},"Supported Event Sources"),(0,o.kt)("p",null,"Currently, the only event source that is officially supported is ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka"),", which polls for events\nvia a Kafka Consumer. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.12.1/actions/sources/kafka-event-source"},"Kafka Event Source"))),(0,o.kt)("h2",{id:"supported-actions"},"Supported Actions"),(0,o.kt)("p",null,"By default, DataHub supports a set of standard actions plugins. These can be found inside the folder\n",(0,o.kt)("inlineCode",{parentName:"p"},"src/datahub-actions/plugins"),". "),(0,o.kt)("p",null,"Some pre-included Actions include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.12.1/actions/actions/hello_world"},"Hello World")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.12.1/actions/actions/executor"},"Executor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.12.1/actions/actions/slack"},"Slack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.12.1/actions/actions/teams"},"Microsoft Teams"))),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("h3",{id:"build-and-test"},"Build and Test"),(0,o.kt)("p",null,"Notice that we support all actions command using a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-actions")," CLI entry point. Feel free\nto use this during development."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Build datahub-actions module\n./gradlew datahub-actions:build\n\n# Drop into virtual env\ncd datahub-actions && source venv/bin/activate \n\n# Start hello world action \ndatahub-actions actions -c ../examples/hello_world.yaml\n\n# Start ingestion executor action\ndatahub-actions actions -c ../examples/executor.yaml\n\n# Start multiple actions \ndatahub-actions actions -c ../examples/executor.yaml -c ../examples/hello_world.yaml\n")),(0,o.kt)("h3",{id:"developing-a-transformer"},"Developing a Transformer"),(0,o.kt)("p",null,"To develop a new Transformer, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions/guides/developing-a-transformer"},"Developing a Transformer")," guide. "),(0,o.kt)("h3",{id:"developing-an-action"},"Developing an Action"),(0,o.kt)("p",null,"To develop a new Action, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/actions/guides/developing-an-action"},"Developing an Action")," guide. "),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Contributing guidelines follow those of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/contributing"},"main DataHub project"),". We are accepting contributions for Actions, Transformers, and general framework improvements (tests, error handling, etc)."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7iwNxHgqxtg&t=2189s"},"original announcement")," of the DataHub Actions Framework at the DataHub April 2022 Town Hall. "),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"Apache 2.0"))}d.isMDXComponent=!0}}]);