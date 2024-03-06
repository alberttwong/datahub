"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9652],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const l={title:"A Custom Metadata Model",slug:"/metadata-models-custom",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/README.md"},r="A Custom Metadata Model",i={unversionedId:"metadata-models-custom/README",id:"version-0.12.1/metadata-models-custom/README",title:"A Custom Metadata Model",description:"This module hosts a gradle project where you can store your custom metadata model. It contains an example extension for you to follow.",source:"@site/versioned_docs/version-0.12.1/metadata-models-custom/README.md",sourceDirName:"metadata-models-custom",slug:"/metadata-models-custom",permalink:"/docs/0.12.1/metadata-models-custom",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/README.md",tags:[],version:"0.12.1",frontMatter:{title:"A Custom Metadata Model",slug:"/metadata-models-custom",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/README.md"}},s={},d=[{value:"Caveats",id:"caveats",level:3},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Create your new aspect(s)",id:"create-your-new-aspects",level:2},{value:"Add your aspect(s) to the entity registry",id:"add-your-aspects-to-the-entity-registry",level:2},{value:"Understanding the entity registry",id:"understanding-the-entity-registry",level:2},{value:"Build your new model",id:"build-your-new-model",level:2},{value:"Build a versioned artifact",id:"build-a-versioned-artifact",level:3},{value:"Deploy your versioned artifact to DataHub",id:"deploy-your-versioned-artifact-to-datahub",level:3},{value:"Deploying to a remote Kubernetes server",id:"deploying-to-a-remote-kubernetes-server",level:4},{value:"Check if your model got loaded successfully",id:"check-if-your-model-got-loaded-successfully",level:3},{value:"Add some metadata with your new model",id:"add-some-metadata-with-your-new-model",level:3},{value:"Advanced Guide",id:"advanced-guide",level:2},{value:"Deleting metadata associated with a model",id:"deleting-metadata-associated-with-a-model",level:3},{value:"Evolve the metadata model",id:"evolve-the-metadata-model",level:3},{value:"The Future",id:"the-future",level:2}],u={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a-custom-metadata-model"},"A Custom Metadata Model"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/"},"This module")," hosts a gradle project where you can store your custom metadata model. It contains an example extension for you to follow."),(0,o.kt)("h3",{id:"caveats"},"Caveats"),(0,o.kt)("p",null,"Currently, this project only supports aspects defined in PDL to existing or newly defined entities. You cannot add new aspects to the metadata model directly through yaml configuration yet."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,o.kt)("p",null,"Before proceeding further, make sure you understand the DataHub Metadata Model concepts defined ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/metadata-modeling/metadata-model"},"here")," and extending the model defined ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.12.1/metadata-modeling/extending-the-metadata-model"},"here"),". "),(0,o.kt)("h2",{id:"create-your-new-aspects"},"Create your new aspect(s)"),(0,o.kt)("p",null,"Follow the regular process in creating a new aspect by adding it to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/pegasus"},(0,o.kt)("inlineCode",{parentName:"a"},"src/main/pegasus"))," folder. e.g. This repository has an Aspect called ",(0,o.kt)("inlineCode",{parentName:"p"},"customDataQualityRules")," hosted in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models-custom/src/main/pegasus/com/mycompany/dq/DataQualityRules.pdl"},(0,o.kt)("inlineCode",{parentName:"a"},"DataQualityRules.pdl"))," file that you can follow.\nOnce you've gone through this exercise, feel free to delete the sample aspects that are stored in this module."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Tip")),": PDL requires that the name of the file must match the name of the class that is defined in it and the package path must also match the directory path, so keep that in mind when you create your aspect pdl file."),(0,o.kt)("h2",{id:"add-your-aspects-to-the-entity-registry"},"Add your aspect(s) to the entity registry"),(0,o.kt)("p",null,"Add your new aspect(s) to the entity registry by editing the yaml file located under ",(0,o.kt)("inlineCode",{parentName:"p"},"registry/entity-registry.yaml"),".\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note")),": The registry file must be called ",(0,o.kt)("inlineCode",{parentName:"p"},"entity-registry.yaml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"entity-registry.yml")," for it to be recognized."),(0,o.kt)("h2",{id:"understanding-the-entity-registry"},"Understanding the entity registry"),(0,o.kt)("p",null,"Here is a sample entity-registry file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"id: mycompany-dq-model\nentities:\n  - name: dataset\n    aspects:\n      - customDataQualityRules\n")),(0,o.kt)("p",null,"The entity registry has a few important fields to pay attention to: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"id: The name of your registry. This drives naming, artifact generation, so make sure you pick a unique name that will not conflict with other names you might create for other registries. "),(0,o.kt)("li",{parentName:"ul"},"entities: A list of entities with aspects attached to them that you are creating additional aspects for as well as any new entities you wish to define. In this example, we are adding the aspect ",(0,o.kt)("inlineCode",{parentName:"li"},"customDataQualityRules")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"dataset")," entity. ")),(0,o.kt)("h2",{id:"build-your-new-model"},"Build your new model"),(0,o.kt)("p",null,"Change your directory to the metadata-models-custom folder and then run this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"../gradlew build\n")),(0,o.kt)("p",null,"This will create a zip file in the build/dist folder. Then change your directory back to the main datahub folder and run "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-models-custom:install\n")),(0,o.kt)("p",null,"This will install the zip file as a datahub plugin. It is installed at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.datahub/plugins/models/")," and if you list the directory you should see the following path if you are following the customDataQualityRules implementation example: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.datahub/plugins/models/mycompany-dq-model/0.0.0-dev/")),(0,o.kt)("h3",{id:"build-a-versioned-artifact"},"Build a versioned artifact"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"../gradlew -PprojVersion=0.0.1 build\n")),(0,o.kt)("p",null,"This will deposit an artifact called ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata-models-custom-<version>.zip")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"build/dist")," directory. "),(0,o.kt)("h3",{id:"deploy-your-versioned-artifact-to-datahub"},"Deploy your versioned artifact to DataHub"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"../gradlew -PprojVersion=0.0.1 install\n")),(0,o.kt)("p",null,"This will unpack the artifact and deposit it under ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.datahub/plugins/models/<registry-name>/<registry-version>/"),"."),(0,o.kt)("h4",{id:"deploying-to-a-remote-kubernetes-server"},"Deploying to a remote Kubernetes server"),(0,o.kt)("p",null,"Deploying your customized jar to a remote Kubernetes server requires that you take the output zip\n(generated from ",(0,o.kt)("inlineCode",{parentName:"p"},"../gradlew modelArtifact")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"build/dist"),") and place the unzipped contents in the volumes mount for the GMS pod on the remote server.\nFirst you will need to push the files into a configmap using kubectl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create configmap custom-model --from-file=<<path-to-file>> -n <<namespace>>\n")),(0,o.kt)("p",null,"Then you need to set the volumes for GMS (refer to how jmx exporter configmap is added here:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L40"},"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L40"),")\nThis tells GMS that we will be pulling this configmap in. You can do this by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-gms.extraVolumes")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),"\nwhich gets appended to the deployment without having to change the helm chart."),(0,o.kt)("p",null,"Finally you need to mount the volume into the container\u2019s local directory by setting volumeMounts.\nRefer to how the kafka certs are mounted onto a local path here:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L182"},"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/subcharts/datahub-gms/templates/deployment.yaml#L182"),"\nYou can do this by setting the datahub-gms.extraVolumeMounts in ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")),(0,o.kt)("p",null,"at the end your values.yaml should have something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub-gms:\n  ...\n  extraVolumes:\n    - name: custom-model\n      configMap:\n        name: custom-model ## should match configmap name above\n  extraVolumeMounts:\n    - name: custom-model-dir\n      mountPath: /etc/plugins/models/<registry-name>/<registry-version>\n")),(0,o.kt)("p",null,"The mountPath can be configured using ",(0,o.kt)("inlineCode",{parentName:"p"},"ENTITY_REGISTRY_PLUGIN_PATH")," and defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/datahub/plugins/models"),"."),(0,o.kt)("h3",{id:"check-if-your-model-got-loaded-successfully"},"Check if your model got loaded successfully"),(0,o.kt)("p",null,"Assuming that you are running DataHub on localhost, you can curl the config endpoint to see the model load status. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -s http://localhost:8080/config | jq .\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "models": {\n    "mycompany-dq-model": {\n      "0.0.1": {\n        "loadResult": "SUCCESS",\n        "registryLocation": "/Users/username/.datahub/plugins/models/mycompany-dq-model/0.0.1",\n        "failureCount": 0\n      }\n    }\n  },\n  "noCode": "true"\n}\n')),(0,o.kt)("p",null,"Alternatively, you could type in http://localhost:8080/config in your browser."),(0,o.kt)("h3",{id:"add-some-metadata-with-your-new-model"},"Add some metadata with your new model"),(0,o.kt)("p",null,"We have included some sample scripts that you can modify to upload data corresponding to your new data model.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/insert_one.sh")," script takes the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/data/dq_rule.json")," file and attaches it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset_urn")," entity using the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," cli. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd scripts\n./insert_one.sh\n")),(0,o.kt)("p",null,"results in "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Update succeeded with status 200\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/insert_custom_aspect.py")," script shows you how to accomplish the same using the Python SDK. Note that we are just using a raw dictionary here to represent the ",(0,o.kt)("inlineCode",{parentName:"p"},"dq_rule")," aspect and not a strongly-typed class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd scripts\npython3 insert_custom_aspect.py\n")),(0,o.kt)("p",null,"results in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Successfully wrote to DataHub\n")),(0,o.kt)("h2",{id:"advanced-guide"},"Advanced Guide"),(0,o.kt)("p",null,"A few things that you will likely do as you start creating new models and creating metadata that conforms to those models. "),(0,o.kt)("h3",{id:"deleting-metadata-associated-with-a-model"},"Deleting metadata associated with a model"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," cli supports deleting metadata associated with a model as a customization of the ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," command. "),(0,o.kt)("p",null,"e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub delete by-registry --registry-id=mycompany-dq-model:0.0.1 --hard")," will delete all data written using this registry name and version pair. "),(0,o.kt)("h3",{id:"evolve-the-metadata-model"},"Evolve the metadata model"),(0,o.kt)("p",null,"As you evolve the metadata model, you can publish new versions of the repository and deploy it into DataHub as well using the same steps outlined above. DataHub will check whether your new models are backwards compatible with the previous versioned model and decline loading models that are backwards incompatible. "),(0,o.kt)("h2",{id:"the-future"},"The Future"),(0,o.kt)("p",null,"Hopefully this repository shows you how easily you can extend and customize DataHub's metadata model!"),(0,o.kt)("p",null,"We will be continuing to make the experience less reliant on core changes to DataHub and reducing the need to fork the main repository."))}p.isMDXComponent=!0}}]);