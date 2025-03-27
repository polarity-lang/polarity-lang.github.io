"use strict";(self.webpackChunkmonaco_lsp_streams=self.webpackChunkmonaco_lsp_streams||[]).push([[3047],{50127:(e,t,r)=>{r.d(t,{FZ:()=>m,GE:()=>d,MY:()=>v,N9:()=>y,kt:()=>k,yS:()=>f});var o=r(93765),n=r(10442),i=r(1661),s=r(25934),l=r(30321),a=r(93152);const c="\\w+[-_\\w+]*",d=`^${c}$`,u=`^(${c}|\\*)(\\.${c})*(:${c})?$`;class y{constructor(e,t,r,o,n){this.foreground=e,this.bold=t,this.underline=r,this.strikethrough=o,this.italic=n}}var f;!function(e){e.toJSONObject=function(e){return{_foreground:void 0===e.foreground?null:n.Q1.Format.CSS.formatHexA(e.foreground,!0),_bold:void 0===e.bold?null:e.bold,_underline:void 0===e.underline?null:e.underline,_italic:void 0===e.italic?null:e.italic,_strikethrough:void 0===e.strikethrough?null:e.strikethrough}},e.fromJSONObject=function(t){if(t){const o=e=>"boolean"==typeof e?e:void 0;return new e("string"==typeof(r=t._foreground)?n.Q1.fromHex(r):void 0,o(t._bold),o(t._underline),o(t._strikethrough),o(t._italic))}var r},e.equals=function(e,t){return e===t||void 0!==e&&void 0!==t&&(e.foreground instanceof n.Q1?e.foreground.equals(t.foreground):void 0===t.foreground)&&e.bold===t.bold&&e.underline===t.underline&&e.strikethrough===t.strikethrough&&e.italic===t.italic},e.is=function(t){return t instanceof e},e.fromData=function(t){return new e(t.foreground,t.bold,t.underline,t.strikethrough,t.italic)},e.fromSettings=function(t,r,o,i,s,l){let a;if(void 0!==t&&(a=n.Q1.fromHex(t)),void 0!==r){o=l=i=s=!1;const e=/italic|bold|underline|strikethrough/g;let t;for(;t=e.exec(r);)switch(t[0]){case"bold":o=!0;break;case"italic":l=!0;break;case"underline":i=!0;break;case"strikethrough":s=!0}}return new e(a,o,i,s,l)}}(y||(y={})),function(e){e.fromJSONObject=function(e,t){if(t&&"string"==typeof t._selector&&t._style){const r=y.fromJSONObject(t._style);if(r)try{return{selector:e.parseTokenSelector(t._selector),style:r}}catch(e){}}},e.toJSONObject=function(e){return{_selector:e.selector.id,_style:y.toJSONObject(e.style)}},e.equals=function(e,t){return e===t||void 0!==e&&void 0!==t&&e.selector&&t.selector&&e.selector.id===t.selector.id&&y.equals(e.style,t.style)},e.is=function(e){return e&&e.selector&&"string"==typeof e.selector.id&&y.is(e.style)}}(f||(f={}));class p{constructor(){this._onDidChangeSchema=new i.vl,this.onDidChangeSchema=this._onDidChangeSchema.event,this.currentTypeNumber=0,this.currentModifierBit=1,this.tokenStylingDefaultRules=[],this.tokenStylingSchema={type:"object",properties:{},patternProperties:{[u]:S()},additionalProperties:!1,definitions:{style:{type:"object",description:(0,s.kg)(7046,"Colors and styles for the token."),properties:{foreground:{type:"string",description:(0,s.kg)(7047,"Foreground color for the token."),format:"color-hex",default:"#ff0000"},background:{type:"string",deprecationMessage:(0,s.kg)(7048,"Token background colors are currently not supported.")},fontStyle:{type:"string",description:(0,s.kg)(7049,"Sets the all font styles of the rule: 'italic', 'bold', 'underline' or 'strikethrough' or a combination. All styles that are not listed are unset. The empty string unsets all styles."),pattern:"^(\\s*(italic|bold|underline|strikethrough))*\\s*$",patternErrorMessage:(0,s.kg)(7050,"Font style must be 'italic', 'bold', 'underline' or 'strikethrough' or a combination. The empty string unsets all styles."),defaultSnippets:[{label:(0,s.kg)(7051,"None (clear inherited style)"),bodyText:'""'},{body:"italic"},{body:"bold"},{body:"underline"},{body:"strikethrough"},{body:"italic bold"},{body:"italic underline"},{body:"italic strikethrough"},{body:"bold underline"},{body:"bold strikethrough"},{body:"underline strikethrough"},{body:"italic bold underline"},{body:"italic bold strikethrough"},{body:"italic underline strikethrough"},{body:"bold underline strikethrough"},{body:"italic bold underline strikethrough"}]},bold:{type:"boolean",description:(0,s.kg)(7052,"Sets or unsets the font style to bold. Note, the presence of 'fontStyle' overrides this setting.")},italic:{type:"boolean",description:(0,s.kg)(7053,"Sets or unsets the font style to italic. Note, the presence of 'fontStyle' overrides this setting.")},underline:{type:"boolean",description:(0,s.kg)(7054,"Sets or unsets the font style to underline. Note, the presence of 'fontStyle' overrides this setting.")},strikethrough:{type:"boolean",description:(0,s.kg)(7055,"Sets or unsets the font style to strikethrough. Note, the presence of 'fontStyle' overrides this setting.")}},defaultSnippets:[{body:{foreground:"${1:#FF0000}",fontStyle:"${2:bold}"}}]}}},this.tokenTypeById=Object.create(null),this.tokenModifierById=Object.create(null),this.typeHierarchy=Object.create(null)}registerTokenType(e,t,r,o){if(!e.match(d))throw new Error("Invalid token type id.");if(r&&!r.match(d))throw new Error("Invalid token super type id.");const n={num:this.currentTypeNumber++,id:e,superType:r,description:t,deprecationMessage:o};this.tokenTypeById[e]=n;const i=S(t,o);this.tokenStylingSchema.properties[e]=i,this.typeHierarchy=Object.create(null)}registerTokenModifier(e,t,r){if(!e.match(d))throw new Error("Invalid token modifier id.");const o=this.currentModifierBit;this.currentModifierBit=2*this.currentModifierBit;const n={num:o,id:e,description:t,deprecationMessage:r};this.tokenModifierById[e]=n,this.tokenStylingSchema.properties[`*.${e}`]=S(t,r)}parseTokenSelector(e,t){const r=k(e,t);return r.type?{match:(e,t,o)=>{let n=0;if(void 0!==r.language){if(r.language!==o)return-1;n+=10}if("*"!==r.type){const t=this.getTypeHierarchy(e).indexOf(r.type);if(-1===t)return-1;n+=100-t}for(const e of r.modifiers)if(-1===t.indexOf(e))return-1;return n+100*r.modifiers.length},id:`${[r.type,...r.modifiers.sort()].join(".")}${void 0!==r.language?":"+r.language:""}`}:{match:()=>-1,id:"$invalid"}}registerTokenStyleDefault(e,t){this.tokenStylingDefaultRules.push({selector:e,defaults:t})}deregisterTokenStyleDefault(e){const t=e.id;this.tokenStylingDefaultRules=this.tokenStylingDefaultRules.filter((e=>e.selector.id!==t))}deregisterTokenType(e){delete this.tokenTypeById[e],delete this.tokenStylingSchema.properties[e],this.typeHierarchy=Object.create(null)}deregisterTokenModifier(e){delete this.tokenModifierById[e],delete this.tokenStylingSchema.properties[`*.${e}`]}getTokenTypes(){return Object.keys(this.tokenTypeById).map((e=>this.tokenTypeById[e]))}getTokenModifiers(){return Object.keys(this.tokenModifierById).map((e=>this.tokenModifierById[e]))}getTokenStylingSchema(){return this.tokenStylingSchema}getTokenStylingDefaultRules(){return this.tokenStylingDefaultRules}getTypeHierarchy(e){let t=this.typeHierarchy[e];if(!t){this.typeHierarchy[e]=t=[e];let r=this.tokenTypeById[e];for(;r&&r.superType;)t.push(r.superType),r=this.tokenTypeById[r.superType]}return t}toString(){return Object.keys(this.tokenTypeById).sort(((e,t)=>{const r=-1===e.indexOf(".")?0:1,o=-1===t.indexOf(".")?0:1;return r!==o?r-o:e.localeCompare(t)})).map((e=>`- \`${e}\`: ${this.tokenTypeById[e].description}`)).join("\n")}}const h=":".charCodeAt(0),g=".".charCodeAt(0);function k(e,t){let r=e.length,o=t;const n=[];for(let t=r-1;t>=0;t--){const i=e.charCodeAt(t);if(i===h||i===g){const s=e.substring(t+1,r);r=t,i===h?o=s:n.push(s)}}return{type:e.substring(0,r),modifiers:n,language:o}}const b=function(){const e=new p;function t(t,o,n=[],i,s){return e.registerTokenType(t,o,i,s),n&&r(t,n),t}function r(t,r){try{const o=e.parseTokenSelector(t);e.registerTokenStyleDefault(o,{scopesToProbe:r})}catch(e){console.log(e)}}return t("comment",(0,s.kg)(7056,"Style for comments."),[["comment"]]),t("string",(0,s.kg)(7057,"Style for strings."),[["string"]]),t("keyword",(0,s.kg)(7058,"Style for keywords."),[["keyword.control"]]),t("number",(0,s.kg)(7059,"Style for numbers."),[["constant.numeric"]]),t("regexp",(0,s.kg)(7060,"Style for expressions."),[["constant.regexp"]]),t("operator",(0,s.kg)(7061,"Style for operators."),[["keyword.operator"]]),t("namespace",(0,s.kg)(7062,"Style for namespaces."),[["entity.name.namespace"]]),t("type",(0,s.kg)(7063,"Style for types."),[["entity.name.type"],["support.type"]]),t("struct",(0,s.kg)(7064,"Style for structs."),[["entity.name.type.struct"]]),t("class",(0,s.kg)(7065,"Style for classes."),[["entity.name.type.class"],["support.class"]]),t("interface",(0,s.kg)(7066,"Style for interfaces."),[["entity.name.type.interface"]]),t("enum",(0,s.kg)(7067,"Style for enums."),[["entity.name.type.enum"]]),t("typeParameter",(0,s.kg)(7068,"Style for type parameters."),[["entity.name.type.parameter"]]),t("function",(0,s.kg)(7069,"Style for functions"),[["entity.name.function"],["support.function"]]),t("member",(0,s.kg)(7070,"Style for member functions"),[],"method","Deprecated use `method` instead"),t("method",(0,s.kg)(7071,"Style for method (member functions)"),[["entity.name.function.member"],["support.function"]]),t("macro",(0,s.kg)(7072,"Style for macros."),[["entity.name.function.preprocessor"]]),t("variable",(0,s.kg)(7073,"Style for variables."),[["variable.other.readwrite"],["entity.name.variable"]]),t("parameter",(0,s.kg)(7074,"Style for parameters."),[["variable.parameter"]]),t("property",(0,s.kg)(7075,"Style for properties."),[["variable.other.property"]]),t("enumMember",(0,s.kg)(7076,"Style for enum members."),[["variable.other.enummember"]]),t("event",(0,s.kg)(7077,"Style for events."),[["variable.other.event"]]),t("decorator",(0,s.kg)(7078,"Style for decorators & annotations."),[["entity.name.decorator"],["entity.name.function"]]),t("label",(0,s.kg)(7079,"Style for labels. "),void 0),e.registerTokenModifier("declaration",(0,s.kg)(7080,"Style for all symbol declarations."),void 0),e.registerTokenModifier("documentation",(0,s.kg)(7081,"Style to use for references in documentation."),void 0),e.registerTokenModifier("static",(0,s.kg)(7082,"Style to use for symbols that are static."),void 0),e.registerTokenModifier("abstract",(0,s.kg)(7083,"Style to use for symbols that are abstract."),void 0),e.registerTokenModifier("deprecated",(0,s.kg)(7084,"Style to use for symbols that are deprecated."),void 0),e.registerTokenModifier("modification",(0,s.kg)(7085,"Style to use for write accesses."),void 0),e.registerTokenModifier("async",(0,s.kg)(7086,"Style to use for symbols that are async."),void 0),e.registerTokenModifier("readonly",(0,s.kg)(7087,"Style to use for symbols that are read-only."),void 0),r("variable.readonly",[["variable.other.constant"]]),r("property.readonly",[["variable.other.constant.property"]]),r("type.defaultLibrary",[["support.type"]]),r("class.defaultLibrary",[["support.class"]]),r("interface.defaultLibrary",[["support.class"]]),r("variable.defaultLibrary",[["support.variable"],["support.other.variable"]]),r("variable.defaultLibrary.readonly",[["support.constant"]]),r("property.defaultLibrary",[["support.variable.property"]]),r("property.defaultLibrary.readonly",[["support.constant.property"]]),r("function.defaultLibrary",[["support.function"]]),r("member.defaultLibrary",[["support.function"]]),e}();function m(){return b}function S(e,t){return{description:e,deprecationMessage:t,defaultSnippets:[{body:"${1:#ff0000}"}],anyOf:[{type:"string",format:"color-hex"},{$ref:"#/definitions/style"}]}}a.O.add("base.contributions.tokenClassification",b);const v="vscode://schemas/token-styling",T=a.O.as(l.F.JSONContribution);T.registerSchema(v,b.getTokenStylingSchema());const O=new o.uC((()=>T.notifySchemaChanged(v)),200);b.onDidChangeSchema((()=>{O.isScheduled()||O.schedule()}))},94717:(e,t,r)=>{r.d(t,{t:()=>i});var o=r(28672),n=r(40240);const i=(0,o.GU)(n.G)}}]);