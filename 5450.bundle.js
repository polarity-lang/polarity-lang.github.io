"use strict";(self.webpackChunkmonaco_lsp_streams=self.webpackChunkmonaco_lsp_streams||[]).push([[5450,8465],{28138:(e,r,n)=>{n.r(r),n.d(r,{MarkerDecorationsService:()=>E});var t,s=n(6729);!function(e){e[e.Ignore=0]="Ignore",e[e.Info=1]="Info",e[e.Warning=2]="Warning",e[e.Error=3]="Error"}(t||(t={})),function(e){const r="error",n="warning",t="info";e.fromValue=function(o){return o?s.Q_(r,o)?e.Error:s.Q_(n,o)||s.Q_("warn",o)?e.Warning:s.Q_(t,o)?e.Info:e.Ignore:e.Ignore},e.toString=function(s){switch(s){case e.Error:return r;case e.Warning:return n;case e.Info:return t;default:return"ignore"}}}(t||(t={}));const o=t;var i,a,c=n(96005),u=n(82834);!function(e){e[e.Hint=1]="Hint",e[e.Info=2]="Info",e[e.Warning=4]="Warning",e[e.Error=8]="Error"}(i||(i={})),function(e){e.compare=function(e,r){return r-e};const r=Object.create(null);r[e.Error]=(0,c.kg)("sev.error","Error"),r[e.Warning]=(0,c.kg)("sev.warning","Warning"),r[e.Info]=(0,c.kg)("sev.info","Info"),e.toString=function(e){return r[e]||""},e.fromSeverity=function(r){switch(r){case o.Error:return e.Error;case o.Warning:return e.Warning;case o.Info:return e.Info;case o.Ignore:return e.Hint}},e.toSeverity=function(r){switch(r){case e.Error:return o.Error;case e.Warning:return o.Warning;case e.Info:return o.Info;case e.Hint:return o.Ignore}}}(i||(i={})),function(e){const r="";function n(e,n){const t=[r];return e.source?t.push(e.source.replace("¦","\\¦")):t.push(r),e.code?"string"==typeof e.code?t.push(e.code.replace("¦","\\¦")):t.push(e.code.value.replace("¦","\\¦")):t.push(r),void 0!==e.severity&&null!==e.severity?t.push(i.toString(e.severity)):t.push(r),e.message&&n?t.push(e.message.replace("¦","\\¦")):t.push(r),void 0!==e.startLineNumber&&null!==e.startLineNumber?t.push(e.startLineNumber.toString()):t.push(r),void 0!==e.startColumn&&null!==e.startColumn?t.push(e.startColumn.toString()):t.push(r),void 0!==e.endLineNumber&&null!==e.endLineNumber?t.push(e.endLineNumber.toString()):t.push(r),void 0!==e.endColumn&&null!==e.endColumn?t.push(e.endColumn.toString()):t.push(r),t.push(r),t.join("¦")}e.makeKey=function(e){return n(e,!0)},e.makeKeyOptionalMessage=n}(a||(a={}));const d=(0,u.u1)("markerService");var h=n(21172),l=n(75322),g=n(34710),m=n(84492),f=n(78465),p=n(55490),_=n(44145),v=n(76535),k=n(37550),I=n(4897),D=function(e,r){return function(n,t){r(n,t,e)}};let E=class extends h.jG{constructor(e,r){super(),this._markerService=r,this._onDidChangeMarker=this._register(new v.vl),this._markerDecorations=new I.fT,e.getModels().forEach((e=>this._onModelAdded(e))),this._register(e.onModelAdded(this._onModelAdded,this)),this._register(e.onModelRemoved(this._onModelRemoved,this)),this._register(this._markerService.onMarkerChanged(this._handleMarkerChange,this))}dispose(){super.dispose(),this._markerDecorations.forEach((e=>e.dispose())),this._markerDecorations.clear()}getMarker(e,r){const n=this._markerDecorations.get(e);return n&&n.getMarker(r)||null}_handleMarkerChange(e){e.forEach((e=>{const r=this._markerDecorations.get(e);r&&this._updateDecorations(r)}))}_onModelAdded(e){const r=new C(e);this._markerDecorations.set(e.uri,r),this._updateDecorations(r)}_onModelRemoved(e){const r=this._markerDecorations.get(e.uri);r&&(r.dispose(),this._markerDecorations.delete(e.uri)),e.uri.scheme!==_.ny.inMemory&&e.uri.scheme!==_.ny.internal&&e.uri.scheme!==_.ny.vscode||this._markerService?.read({resource:e.uri}).map((e=>e.owner)).forEach((r=>this._markerService.remove(r,[e.uri])))}_updateDecorations(e){const r=this._markerService.read({resource:e.model.uri,take:500});e.update(r)&&this._onDidChangeMarker.fire(e.model)}};E=function(e,r,n,t){var s,o=arguments.length,i=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,t);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(r,n,i):s(r,n))||i);return o>3&&i&&Object.defineProperty(r,n,i),i}([D(0,f.IModelService),D(1,d)],E);class C extends h.jG{constructor(e){super(),this.model=e,this._map=new I.cO,this._register((0,h.s)((()=>{this.model.deltaDecorations([...this._map.values()],[]),this._map.clear()})))}update(e){const{added:r,removed:n}=function(e,r){const n=[],t=[];for(const t of e)r.has(t)||n.push(t);for(const n of r)e.has(n)||t.push(n);return{removed:n,added:t}}(new Set(this._map.keys()),new Set(e));if(0===r.length&&0===n.length)return!1;const t=n.map((e=>this._map.get(e))),s=r.map((e=>({range:this._createDecorationRange(this.model,e),options:this._createDecorationOption(e)}))),o=this.model.deltaDecorations(t,s);for(const e of n)this._map.delete(e);for(let e=0;e<o.length;e++)this._map.set(r[e],o[e]);return!0}getMarker(e){return this._map.getKey(e.id)}_createDecorationRange(e,r){let n=p.Q.lift(r);if(r.severity!==i.Hint||this._hasMarkerTag(r,1)||this._hasMarkerTag(r,2)||(n=n.setEndPosition(n.startLineNumber,n.startColumn+2)),n=e.validateRange(n),n.isEmpty()){const r=e.getLineLastNonWhitespaceColumn(n.startLineNumber)||e.getLineMaxColumn(n.startLineNumber);if(1===r||n.endColumn>=r)return n;const t=e.getWordAtPosition(n.getStartPosition());t&&(n=new p.Q(n.startLineNumber,t.startColumn,n.endLineNumber,t.endColumn))}else if(r.endColumn===Number.MAX_VALUE&&1===r.startColumn&&n.startLineNumber===n.endLineNumber){const t=e.getLineFirstNonWhitespaceColumn(r.startLineNumber);t<n.endColumn&&(n=new p.Q(n.startLineNumber,t,n.endLineNumber,n.endColumn),r.startColumn=t)}return n}_createDecorationOption(e){let r,n,t,s,o;switch(e.severity){case i.Hint:r=this._hasMarkerTag(e,2)?void 0:this._hasMarkerTag(e,1)?"squiggly-unnecessary":"squiggly-hint",t=0;break;case i.Info:r="squiggly-info",n=(0,g.Yf)(m.AQ),t=10,o={color:(0,g.Yf)(k.KoI),position:1};break;case i.Warning:r="squiggly-warning",n=(0,g.Yf)(m.aZ),t=20,o={color:(0,g.Yf)(k.uMG),position:1};break;case i.Error:default:r="squiggly-error",n=(0,g.Yf)(m.yI),t=30,o={color:(0,g.Yf)(k.yLC),position:1}}return e.tags&&(-1!==e.tags.indexOf(1)&&(s="squiggly-inline-unnecessary"),-1!==e.tags.indexOf(2)&&(s="squiggly-inline-deprecated")),{description:"marker-decoration",stickiness:1,className:r,showIfCollapsed:!0,overviewRuler:{color:n,position:l.A5.Right},minimap:o,zIndex:t,inlineClassName:s}}_hasMarkerTag(e,r){return!!e.tags&&e.tags.indexOf(r)>=0}}},78465:(e,r,n)=>{n.r(r),n.d(r,{IModelService:()=>t});const t=(0,n(82834).u1)("modelService")},82834:(e,r,n)=>{var t;n.d(r,{_Y:()=>s,u1:()=>o}),function(e){e.serviceIds=new Map,e.DI_TARGET="$di$target",e.DI_DEPENDENCIES="$di$dependencies",e.getServiceDependencies=function(r){return r[e.DI_DEPENDENCIES]||[]}}(t||(t={}));const s=o("instantiationService");function o(e){if(t.serviceIds.has(e))return t.serviceIds.get(e);const r=function(e,n,s){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");!function(e,r,n){r[t.DI_TARGET]===r?r[t.DI_DEPENDENCIES].push({id:e,index:n}):(r[t.DI_DEPENDENCIES]=[{id:e,index:n}],r[t.DI_TARGET]=r)}(r,e,s)};return r.toString=()=>e,t.serviceIds.set(e,r),r}},35679:(e,r,n)=>{n.d(r,{F:()=>o});var t=n(76535),s=n(37638);const o={JSONContribution:"base.contributions.json"},i=new class{constructor(){this._onDidChangeSchema=new t.vl,this.schemasById={}}registerSchema(e,r){var n;this.schemasById[(n=e,n.length>0&&"#"===n.charAt(n.length-1)?n.substring(0,n.length-1):n)]=r,this._onDidChangeSchema.fire(e)}notifySchemaChanged(e){this._onDidChangeSchema.fire(e)}};s.O.add(o.JSONContribution,i)},37638:(e,r,n)=>{n.d(r,{O:()=>o});var t=n(67477),s=n(2978);const o=new class{constructor(){this.data=new Map}add(e,r){t.ok(s.Kg(e)),t.ok(s.Gv(r)),t.ok(!this.data.has(e),"There is already an extension with this id"),this.data.set(e,r)}as(e){return this.data.get(e)||null}}}}]);