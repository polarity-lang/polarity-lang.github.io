"use strict";(self.webpackChunkmonaco_lsp_streams=self.webpackChunkmonaco_lsp_streams||[]).push([[9424,8391],{68391:(e,n,i)=>{i.r(n),i.d(n,{clearPlatformLanguageAssociations:()=>h,getLanguageIds:()=>p,registerPlatformLanguageAssociation:()=>c});var t=i(35813),a=i(29159),s=i(44145),r=i(22156),o=i(12126),g=i(6729),l=i(45396);let u=[],m=[],f=[];function c(e,n=!1){!function(e,n,i){const a=function(e){return{id:e.id,mime:e.mime,filename:e.filename,extension:e.extension,filepattern:e.filepattern,firstline:e.firstline,userConfigured:false,filenameLowercase:e.filename?e.filename.toLowerCase():void 0,extensionLowercase:e.extension?e.extension.toLowerCase():void 0,filepatternLowercase:e.filepattern?(0,t.qg)(e.filepattern.toLowerCase()):void 0,filepatternOnPath:!!e.filepattern&&e.filepattern.indexOf(r.SA.sep)>=0}}(e);u.push(a),a.userConfigured?f.push(a):m.push(a),i&&!a.userConfigured&&u.forEach((e=>{e.mime===a.mime||e.userConfigured||(a.extension&&e.extension===a.extension&&console.warn(`Overwriting extension <<${a.extension}>> to now point to mime <<${a.mime}>>`),a.filename&&e.filename===a.filename&&console.warn(`Overwriting filename <<${a.filename}>> to now point to mime <<${a.mime}>>`),a.filepattern&&e.filepattern===a.filepattern&&console.warn(`Overwriting filepattern <<${a.filepattern}>> to now point to mime <<${a.mime}>>`),a.firstline&&e.firstline===a.firstline&&console.warn(`Overwriting firstline <<${a.firstline}>> to now point to mime <<${a.mime}>>`))}))}(e,0,n)}function h(){u=u.filter((e=>e.userConfigured)),m=[]}function p(e,n){return function(e,n){let i;if(e)switch(e.scheme){case s.ny.file:i=e.fsPath;break;case s.ny.data:i=o.B6.parseMetaData(e).get(o.B6.META_DATA_LABEL);break;case s.ny.vscodeNotebookCell:i=void 0;break;default:i=e.path}if(!i)return[{id:"unknown",mime:a.K.unknown}];i=i.toLowerCase();const t=(0,r.P8)(i),c=d(i,t,f);if(c)return[c,{id:l.vH,mime:a.K.text}];const h=d(i,t,m);if(h)return[h,{id:l.vH,mime:a.K.text}];if(n){const e=function(e){if((0,g.LU)(e)&&(e=e.substr(1)),e.length>0)for(let n=u.length-1;n>=0;n--){const i=u[n];if(!i.firstline)continue;const t=e.match(i.firstline);if(t&&t.length>0)return i}}(n);if(e)return[e,{id:l.vH,mime:a.K.text}]}return[{id:"unknown",mime:a.K.unknown}]}(e,n).map((e=>e.id))}function d(e,n,i){let t,a,s;for(let r=i.length-1;r>=0;r--){const o=i[r];if(n===o.filenameLowercase){t=o;break}if(o.filepattern&&(!a||o.filepattern.length>a.filepattern.length)){const i=o.filepatternOnPath?e:n;o.filepatternLowercase?.(i)&&(a=o)}o.extension&&(!s||o.extension.length>s.extension.length)&&n.endsWith(o.extensionLowercase)&&(s=o)}return t||a||s||void 0}},49424:(e,n,i)=>{i.r(n),i.d(n,{LanguageIdCodec:()=>f,LanguagesRegistry:()=>c});var t=i(76535),a=i(21172),s=i(6729),r=i(68391),o=i(45396),g=i(64863),l=i(37638);const u=Object.prototype.hasOwnProperty,m="vs.editor.nullLanguage";class f{constructor(){this._languageIdToLanguage=[],this._languageToLanguageId=new Map,this._register(m,0),this._register(o.vH,1),this._nextLanguageId=2}_register(e,n){this._languageIdToLanguage[n]=e,this._languageToLanguageId.set(e,n)}register(e){if(this._languageToLanguageId.has(e))return;const n=this._nextLanguageId++;this._register(e,n)}encodeLanguageId(e){return this._languageToLanguageId.get(e)||0}decodeLanguageId(e){return this._languageIdToLanguage[e]||m}}class c extends a.jG{static{this.instanceCount=0}constructor(e=!0,n=!1){super(),this._onDidChange=this._register(new t.vl),this.onDidChange=this._onDidChange.event,c.instanceCount++,this._warnOnOverwrite=n,this.languageIdCodec=new f,this._dynamicLanguages=[],this._languages={},this._mimeTypesMap={},this._nameMap={},this._lowercaseNameMap={},e&&(this._initializeFromRegistry(),this._register(o.W6.onDidChangeLanguages((e=>{this._initializeFromRegistry()}))))}dispose(){c.instanceCount--,super.dispose()}_initializeFromRegistry(){this._languages={},this._mimeTypesMap={},this._nameMap={},this._lowercaseNameMap={},(0,r.clearPlatformLanguageAssociations)();const e=[].concat(o.W6.getLanguages()).concat(this._dynamicLanguages);this._registerLanguages(e)}_registerLanguages(e){for(const n of e)this._registerLanguage(n);this._mimeTypesMap={},this._nameMap={},this._lowercaseNameMap={},Object.keys(this._languages).forEach((e=>{const n=this._languages[e];n.name&&(this._nameMap[n.name]=n.identifier),n.aliases.forEach((e=>{this._lowercaseNameMap[e.toLowerCase()]=n.identifier})),n.mimetypes.forEach((e=>{this._mimeTypesMap[e]=n.identifier}))})),l.O.as(g.Fd.Configuration).registerOverrideIdentifiers(this.getRegisteredLanguageIds()),this._onDidChange.fire()}_registerLanguage(e){const n=e.id;let i;u.call(this._languages,n)?i=this._languages[n]:(this.languageIdCodec.register(n),i={identifier:n,name:null,mimetypes:[],aliases:[],extensions:[],filenames:[],configurationFiles:[],icons:[]},this._languages[n]=i),this._mergeLanguage(i,e)}_mergeLanguage(e,n){const i=n.id;let t=null;if(Array.isArray(n.mimetypes)&&n.mimetypes.length>0&&(e.mimetypes.push(...n.mimetypes),t=n.mimetypes[0]),t||(t=`text/x-${i}`,e.mimetypes.push(t)),Array.isArray(n.extensions)){n.configuration?e.extensions=n.extensions.concat(e.extensions):e.extensions=e.extensions.concat(n.extensions);for(const e of n.extensions)(0,r.registerPlatformLanguageAssociation)({id:i,mime:t,extension:e},this._warnOnOverwrite)}if(Array.isArray(n.filenames))for(const a of n.filenames)(0,r.registerPlatformLanguageAssociation)({id:i,mime:t,filename:a},this._warnOnOverwrite),e.filenames.push(a);if(Array.isArray(n.filenamePatterns))for(const e of n.filenamePatterns)(0,r.registerPlatformLanguageAssociation)({id:i,mime:t,filepattern:e},this._warnOnOverwrite);if("string"==typeof n.firstLine&&n.firstLine.length>0){let e=n.firstLine;"^"!==e.charAt(0)&&(e="^"+e);try{const n=new RegExp(e);(0,s.eY)(n)||(0,r.registerPlatformLanguageAssociation)({id:i,mime:t,firstline:n},this._warnOnOverwrite)}catch(i){console.warn(`[${n.id}]: Invalid regular expression \`${e}\`: `,i)}}e.aliases.push(i);let a=null;if(void 0!==n.aliases&&Array.isArray(n.aliases)&&(a=0===n.aliases.length?[null]:n.aliases),null!==a)for(const n of a)n&&0!==n.length&&e.aliases.push(n);const o=null!==a&&a.length>0;if(o&&null===a[0]);else{const n=(o?a[0]:null)||i;!o&&e.name||(e.name=n)}n.configuration&&e.configurationFiles.push(n.configuration),n.icon&&e.icons.push(n.icon)}isRegisteredLanguageId(e){return!!e&&u.call(this._languages,e)}getRegisteredLanguageIds(){return Object.keys(this._languages)}getLanguageIdByLanguageName(e){const n=e.toLowerCase();return u.call(this._lowercaseNameMap,n)?this._lowercaseNameMap[n]:null}getLanguageIdByMimeType(e){return e&&u.call(this._mimeTypesMap,e)?this._mimeTypesMap[e]:null}guessLanguageIdByFilepathOrFirstLine(e,n){return e||n?(0,r.getLanguageIds)(e,n):[]}}}}]);