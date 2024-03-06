"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18543],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"Debugging by Jattach",hide_title:!0,sidebar_label:"Debugging by Jattach",slug:"/how/jattach-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/jattach-guide.md"},o=void 0,l={unversionedId:"docs/how/jattach-guide",id:"version-0.12.1/docs/how/jattach-guide",title:"Debugging by Jattach",description:"We have installed jattach in Docker image of datahub-gms, datahub-mae-consumer, datahub-mce-consumer",source:"@site/versioned_docs/version-0.12.1/docs/how/jattach-guide.md",sourceDirName:"docs/how",slug:"/how/jattach-guide",permalink:"/docs/0.12.1/how/jattach-guide",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/jattach-guide.md",tags:[],version:"0.12.1",frontMatter:{title:"Debugging by Jattach",hide_title:!0,sidebar_label:"Debugging by Jattach",slug:"/how/jattach-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/jattach-guide.md"},sidebar:"overviewSidebar",previous:{title:"No Code Upgrade (In-Place Migration Guide)",permalink:"/docs/0.12.1/advanced/no-code-upgrade"},next:{title:"Overview",permalink:"/docs/0.12.1/architecture/architecture"}},s={},p=[{value:"Example 1: Dump heap",id:"example-1-dump-heap",level:2},{value:"Example 2: Dump thread",id:"example-2-dump-thread",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We have installed jattach in Docker image of datahub-gms, datahub-mae-consumer, datahub-mce-consumer\nand datahub-frontend to facilitating troubleshooting in a production environment."),(0,i.kt)("h1",{id:"introduction-to-jattach"},"Introduction to Jattach"),(0,i.kt)("p",null,"Jattach is a utility to send commands to a JVM process via Dynamic Attach mechanism."),(0,i.kt)("p",null,"Supported commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"load            : load agent library"),(0,i.kt)("li",{parentName:"ul"},"properties      : print system properties"),(0,i.kt)("li",{parentName:"ul"},"agentProperties : print agent properties"),(0,i.kt)("li",{parentName:"ul"},"datadump        : show heap and thread summary"),(0,i.kt)("li",{parentName:"ul"},"threaddump      : dump all stack traces (like jstack)"),(0,i.kt)("li",{parentName:"ul"},"dumpheap        : dump heap (like jmap)"),(0,i.kt)("li",{parentName:"ul"},"inspectheap     : heap histogram (like jmap -histo)"),(0,i.kt)("li",{parentName:"ul"},"setflag         : modify manageable VM flag"),(0,i.kt)("li",{parentName:"ul"},"printflag       : print VM flag"),(0,i.kt)("li",{parentName:"ul"},"jcmd            : execute jcmd command")),(0,i.kt)("h1",{id:"use-examples"},"Use examples"),(0,i.kt)("p",null,"Jattach is a All-in-one ",(0,i.kt)("strong",{parentName:"p"},"jmap + jstack + jcmd + jinfo")," functionality in a single tiny program.\nThe scenarios where these commands were previously used can now be replaced with jattach."),(0,i.kt)("h2",{id:"example-1-dump-heap"},"Example 1: Dump heap"),(0,i.kt)("p",null,"The jattach dumpheap command is typically used in the following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Memory leak analysis: When an application experiences memory leaks or abnormal memory growth, the jattach dumpheap\ncommand is used to generate a heap dump file for further analysis and identification of the memory leak causes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Memory analysis: By generating a heap dump file, various memory analysis tools such as Eclipse Memory Analyzer and\nVisualVM can be utilized to analyze objects, reference relationships, and memory usage within the heap. This helps\nidentify potential performance issues and optimization opportunities.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Troubleshooting: When encountering frequent Full GCs, memory out-of-memory errors, or other memory-related issues,\ngenerating a heap dump file provides additional information for troubleshooting and debugging purposes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Performance optimization: By analyzing the heap dump file, it becomes possible to identify which objects in the\napplication consume a significant amount of memory. This information can be used for targeted performance optimizations,\nsuch as reducing object creation or optimizing cache usage."))),(0,i.kt)("p",null,"It's important to note that generating a heap dump file can have an impact on the performance of the application.\nTherefore, caution should be exercised when using it in a production environment, ensuring sufficient resources and\npermissions are available for the operation."),(0,i.kt)("p",null,"The command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"jattach <pid> dumpheap /tmp/heap.bin\n")),(0,i.kt)("h2",{id:"example-2-dump-thread"},"Example 2: Dump thread"),(0,i.kt)("p",null,"The jattach threaddump command is typically used in the following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deadlock analysis: When an application experiences deadlocks or thread contention issues, the jattach threaddump\ncommand is used to generate a thread dump file. It provides the current thread's stack trace information, helping to\nidentify the code paths and lock contention causing the deadlock.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Thread troubleshooting: When threads in an application encounter exceptions, long blocking times, excessive CPU usage,\nor other issues, generating a thread dump file provides detailed information about each thread's state, stack trace, and\nresource usage. This helps with troubleshooting and analysis.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Performance analysis: By generating a thread dump file, it becomes possible to understand the thread activity, call\npaths, and resource contention within the application. This aids in identifying potential performance bottlenecks and\nconcurrency issues.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Monitoring and diagnostics: Regularly generating thread dump files can be used to monitor the health of an application\nand provide historical data for subsequent diagnostics. This helps gain a better understanding of the application's\nbehavior and performance."))),(0,i.kt)("p",null,"It's important to note that generating a thread dump file may impact the performance of the application. Therefore,\ncaution should be exercised when using it in a production environment, ensuring sufficient resources and permissions\nare available for the operation."),(0,i.kt)("p",null,"The command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"jattach <pid> threaddump -l > /tmp/jstack.out\n")))}d.isMDXComponent=!0}}]);