"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[96364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return n?i.createElement(d,s(s({ref:t},u),{},{components:n})):i.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const o={title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/snowflake/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/configuration.md"},s="Configuring Your Snowflake Connector to DataHub",r={unversionedId:"docs/quick-ingestion-guides/snowflake/configuration",id:"version-0.12.1/docs/quick-ingestion-guides/snowflake/configuration",title:"Configuration",description:"Now that you have created a DataHub-specific user with the relevant roles in Snowflake in the prior step, it's now time to set up a connection via the DataHub UI.",source:"@site/versioned_docs/version-0.12.1/docs/quick-ingestion-guides/snowflake/configuration.md",sourceDirName:"docs/quick-ingestion-guides/snowflake",slug:"/quick-ingestion-guides/snowflake/configuration",permalink:"/docs/0.12.1/quick-ingestion-guides/snowflake/configuration",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/configuration.md",tags:[],version:"0.12.1",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/snowflake/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/configuration.md"},sidebar:"overviewSidebar",previous:{title:"Setup",permalink:"/docs/0.12.1/quick-ingestion-guides/snowflake/setup"},next:{title:"Overview",permalink:"/docs/0.12.1/quick-ingestion-guides/tableau/overview"}},c={},l=[{value:"Configure Secrets",id:"configure-secrets",level:2},{value:"Configure Recipe",id:"configure-recipe",level:2},{value:"Schedule Execution",id:"schedule-execution",level:2},{value:"Finish Up",id:"finish-up",level:2},{value:"Validate Ingestion Runs",id:"validate-ingestion-runs",level:2}],u={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-your-snowflake-connector-to-datahub"},"Configuring Your Snowflake Connector to DataHub"),(0,a.kt)("p",null,"Now that you have created a DataHub-specific user with the relevant roles in Snowflake in ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.12.1/quick-ingestion-guides/snowflake/setup"},"the prior step"),", it's now time to set up a connection via the DataHub UI."),(0,a.kt)("h2",{id:"configure-secrets"},"Configure Secrets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Within DataHub, navigate to the ",(0,a.kt)("strong",{parentName:"li"},"Ingestion")," tab in the top, right corner of your screen")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:'Navigate to the "Ingestion Tab"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_ingestion_button.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you do not see the Ingestion tab, please contact your DataHub admin to grant you the correct permissions")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Navigate to the ",(0,a.kt)("strong",{parentName:"li"},"Secrets")," tab and click ",(0,a.kt)("strong",{parentName:"li"},"Create new secret"))),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"Secrets Tab",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_secrets_tab.png"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Password secret"),(0,a.kt)("p",{parentName:"li"},"This will securely store your Snowflake password within DataHub"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enter a name like ",(0,a.kt)("inlineCode",{parentName:"li"},"SNOWFLAKE_PASSWORD")," - we will use this later to refer to the secret"),(0,a.kt)("li",{parentName:"ul"},"Enter the password configured for the DataHub user in the previous step"),(0,a.kt)("li",{parentName:"ul"},"Optionally add a description"),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"))))),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",alt:"Snowflake Password Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_password_secret.png"})),(0,a.kt)("h2",{id:"configure-recipe"},"Configure Recipe"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Navigate to the ",(0,a.kt)("strong",{parentName:"li"},"Sources")," tab and click ",(0,a.kt)("strong",{parentName:"li"},"Create new source"))),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_click_create_new_source_button.png"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Select Snowflake")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",alt:"Select Snowflake from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_snowflake_source.png"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Fill out the Snowflake Recipe")),(0,a.kt)("p",null,"Enter the Snowflake Account Identifier as ",(0,a.kt)("strong",{parentName:"p"},"Account ID")," field. Account identifier is the part before ",(0,a.kt)("inlineCode",{parentName:"p"},".snowflakecomputing.com")," in your snowflake host URL:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",alt:"Account Id Field",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_account_id.png"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Learn more about Snowflake Account Identifiers ",(0,a.kt)("a",{parentName:"em",href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#account-identifiers"},"here"))),(0,a.kt)("p",null,"Add the previously added Password secret to ",(0,a.kt)("strong",{parentName:"p"},"Password")," field:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the Password input field"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"SNOWFLAKE_PASSWORD")," secret")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",alt:"Password field",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_password_secret_field.png"})),(0,a.kt)("p",null,"Populate the relevant fields using the same ",(0,a.kt)("strong",{parentName:"p"},"Username"),", ",(0,a.kt)("strong",{parentName:"p"},"Role"),", and ",(0,a.kt)("strong",{parentName:"p"},"Warehouse")," you created and/or specified in ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.12.1/quick-ingestion-guides/snowflake/setup"},"Snowflake Prerequisites"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",alt:"Warehouse Field",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_warehouse_username_role_fields.png"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Test Connection"))),(0,a.kt)("p",null,"This step will ensure you have configured your credentials accurately and confirm you have the required permissions to extract all relevant metadata."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"Test Snoflake connection",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_test_connection.png"})),(0,a.kt)("p",null,"After you have successfully tested your connection, click ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)("h2",{id:"schedule-execution"},"Schedule Execution"),(0,a.kt)("p",null,"Now it's time to schedule a recurring ingestion pipeline to regularly extract metadata from your Snowflake instance."),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_schedule.png"})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure you've configured your correct timezone"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_timezone.png"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Next")," when you are done"))),(0,a.kt)("h2",{id:"finish-up"},"Finish Up"),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"Name your ingestion source, then click ",(0,a.kt)("strong",{parentName:"li"},"Save and Run"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_name_ingestion_source.png"})))),(0,a.kt)("p",null,"You will now find your new ingestion source running"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_source_running.png"})),(0,a.kt)("h2",{id:"validate-ingestion-runs"},"Validate Ingestion Runs"),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"View the latest status of ingestion runs on the Ingestion page")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"ingestion succeeded",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_ingestion_succeded.png"})),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},"Click the plus sign to expand the full list of historical runs and outcomes; click ",(0,a.kt)("strong",{parentName:"li"},"Details")," to see the outcomes of a specific run")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"ingestion_details",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_ingestion_details.png"})),(0,a.kt)("ol",{start:14},(0,a.kt)("li",{parentName:"ol"},"From the Ingestion Run Details page, pick ",(0,a.kt)("strong",{parentName:"li"},"View All")," to see which entities were ingested")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_details_view_all.png"})),(0,a.kt)("ol",{start:15},(0,a.kt)("li",{parentName:"ol"},"Pick an entity from the list to manually validate if it contains the detail you expected  ")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_view_ingested_assets.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations!")," You've successfully set up Snowflake as an ingestion source for DataHub!"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,a.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}g.isMDXComponent=!0}}]);