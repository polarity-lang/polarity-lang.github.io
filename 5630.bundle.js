"use strict";(self.webpackChunkmonaco_lsp_streams=self.webpackChunkmonaco_lsp_streams||[]).push([[5630,6271],{88107:(e,t,i)=>{i.d(t,{TH:()=>o,Zn:()=>c,_1:()=>d,kb:()=>h});var r=i(22156),s=(i(52888),i(6729));function n(e){return 47===e||92===e}function o(e){return e.replace(/[\\/]/g,r.SA.sep)}function h(e){return-1===e.indexOf("/")&&(e=o(e)),/^[a-zA-Z]:(\/|$)/.test(e)&&(e="/"+e),e}function c(e,t=r.SA.sep){if(!e)return"";const i=e.length,s=e.charCodeAt(0);if(n(s)){if(n(e.charCodeAt(1))&&!n(e.charCodeAt(2))){let r=3;const s=r;for(;r<i&&!n(e.charCodeAt(r));r++);if(s!==r&&!n(e.charCodeAt(r+1)))for(r+=1;r<i;r++)if(n(e.charCodeAt(r)))return e.slice(0,r+1).replace(/[\\/]/g,t)}return t}if(((o=s)>=65&&o<=90||o>=97&&o<=122)&&58===e.charCodeAt(1))return n(e.charCodeAt(2))?e.slice(0,2)+t:e.slice(0,2);var o;let h=e.indexOf("://");if(-1!==h)for(h+=3;h<i;h++)if(n(e.charCodeAt(h)))return e.slice(0,h+1);return""}function d(e,t,i,n=r.Vn){if(e===t)return!0;if(!e||!t)return!1;if(t.length>e.length)return!1;if(i){if(!(0,s.ns)(e,t))return!1;if(t.length===e.length)return!0;let i=t.length;return t.charAt(t.length-1)===n&&i--,e.charAt(i)===n}return t.charAt(t.length-1)!==n&&(t+=n),0===e.indexOf(t)}},68652:(e,t,i)=>{i.r(t),i.d(t,{ILanguageFeaturesService:()=>r});const r=(0,i(82834).u1)("ILanguageFeaturesService")},26092:(e,t,i)=>{i.r(t),i.d(t,{LanguageFeaturesService:()=>g});var r=i(76535),s=i(21172),n=i(75322),o=i(35813),h=i(22156);function c(e,t,i,r,s,n){if(Array.isArray(e)){let o=0;for(const h of e){const e=c(h,t,i,r,s,n);if(10===e)return e;e>o&&(o=e)}return o}if("string"==typeof e)return r?"*"===e?5:e===i?10:0:0;if(e){const{language:c,pattern:d,scheme:a,hasAccessToAllModels:u,notebookType:_}=e;if(!r&&!u)return 0;_&&s&&(t=s);let l=0;if(a)if(a===t.scheme)l=10;else{if("*"!==a)return 0;l=5}if(c)if(c===i)l=10;else{if("*"!==c)return 0;l=Math.max(l,5)}if(_)if(_===n)l=10;else{if("*"!==_||void 0===n)return 0;l=Math.max(l,5)}if(d){let e;if(e="string"==typeof d?d:{...d,base:(0,h.S8)(d.base)},e!==t.fsPath&&!(0,o.YW)(e,t.fsPath))return 0;l=10}return l}return 0}function d(e){return"string"!=typeof e&&(Array.isArray(e)?e.every(d):!!e.exclusive)}class a{constructor(e,t,i,r,s){this.uri=e,this.languageId=t,this.notebookUri=i,this.notebookType=r,this.recursive=s}equals(e){return this.notebookType===e.notebookType&&this.languageId===e.languageId&&this.uri.toString()===e.uri.toString()&&this.notebookUri?.toString()===e.notebookUri?.toString()&&this.recursive===e.recursive}}class u{constructor(e){this._notebookInfoResolver=e,this._clock=0,this._entries=[],this._onDidChange=new r.vl,this.onDidChange=this._onDidChange.event}register(e,t){let i={selector:e,provider:t,_score:-1,_time:this._clock++};return this._entries.push(i),this._lastCandidate=void 0,this._onDidChange.fire(this._entries.length),(0,s.s)((()=>{if(i){const e=this._entries.indexOf(i);e>=0&&(this._entries.splice(e,1),this._lastCandidate=void 0,this._onDidChange.fire(this._entries.length),i=void 0)}}))}has(e){return this.all(e).length>0}all(e){if(!e)return[];this._updateScores(e,!1);const t=[];for(const e of this._entries)e._score>0&&t.push(e.provider);return t}ordered(e,t=!1){const i=[];return this._orderedForEach(e,t,(e=>i.push(e.provider))),i}orderedGroups(e){const t=[];let i,r;return this._orderedForEach(e,!1,(e=>{i&&r===e._score?i.push(e.provider):(r=e._score,i=[e.provider],t.push(i))})),t}_orderedForEach(e,t,i){this._updateScores(e,t);for(const e of this._entries)e._score>0&&i(e)}_updateScores(e,t){const i=this._notebookInfoResolver?.(e.uri),r=i?new a(e.uri,e.getLanguageId(),i.uri,i.type,t):new a(e.uri,e.getLanguageId(),void 0,void 0,t);if(!this._lastCandidate?.equals(r)){this._lastCandidate=r;for(const i of this._entries)if(i._score=c(i.selector,r.uri,r.languageId,(0,n.vd)(e),r.notebookUri,r.notebookType),d(i.selector)&&i._score>0){if(!t){for(const e of this._entries)e._score=0;i._score=1e3;break}i._score=0}this._entries.sort(u._compareByScoreAndTime)}}static _compareByScoreAndTime(e,t){return e._score<t._score?1:e._score>t._score?-1:_(e.selector)&&!_(t.selector)?1:!_(e.selector)&&_(t.selector)?-1:e._time<t._time?1:e._time>t._time?-1:0}}function _(e){return"string"!=typeof e&&(Array.isArray(e)?e.some(_):Boolean(e.isBuiltin))}var l=i(68652),f=i(4562);class g{constructor(){this.referenceProvider=new u(this._score.bind(this)),this.renameProvider=new u(this._score.bind(this)),this.newSymbolNamesProvider=new u(this._score.bind(this)),this.codeActionProvider=new u(this._score.bind(this)),this.definitionProvider=new u(this._score.bind(this)),this.typeDefinitionProvider=new u(this._score.bind(this)),this.declarationProvider=new u(this._score.bind(this)),this.implementationProvider=new u(this._score.bind(this)),this.documentSymbolProvider=new u(this._score.bind(this)),this.inlayHintsProvider=new u(this._score.bind(this)),this.colorProvider=new u(this._score.bind(this)),this.codeLensProvider=new u(this._score.bind(this)),this.documentFormattingEditProvider=new u(this._score.bind(this)),this.documentRangeFormattingEditProvider=new u(this._score.bind(this)),this.onTypeFormattingEditProvider=new u(this._score.bind(this)),this.signatureHelpProvider=new u(this._score.bind(this)),this.hoverProvider=new u(this._score.bind(this)),this.documentHighlightProvider=new u(this._score.bind(this)),this.multiDocumentHighlightProvider=new u(this._score.bind(this)),this.selectionRangeProvider=new u(this._score.bind(this)),this.foldingRangeProvider=new u(this._score.bind(this)),this.linkProvider=new u(this._score.bind(this)),this.inlineCompletionsProvider=new u(this._score.bind(this)),this.inlineEditProvider=new u(this._score.bind(this)),this.completionProvider=new u(this._score.bind(this)),this.linkedEditingRangeProvider=new u(this._score.bind(this)),this.documentRangeSemanticTokensProvider=new u(this._score.bind(this)),this.documentSemanticTokensProvider=new u(this._score.bind(this)),this.documentDropEditProvider=new u(this._score.bind(this)),this.documentPasteEditProvider=new u(this._score.bind(this))}_score(e){return this._notebookTypeResolver?.(e)}}(0,f.v)(l.ILanguageFeaturesService,g,1)},4562:(e,t,i)=>{i.d(t,{v:()=>n});class r{constructor(e,t=[],i=!1){this.ctor=e,this.staticArguments=t,this.supportsDelayedInstantiation=i}}const s=[];function n(e,t,i){t instanceof r||(t=new r(t,[],Boolean(i))),s.push([e,t])}},82834:(e,t,i)=>{var r;i.d(t,{_Y:()=>s,u1:()=>n}),function(e){e.serviceIds=new Map,e.DI_TARGET="$di$target",e.DI_DEPENDENCIES="$di$dependencies",e.getServiceDependencies=function(t){return t[e.DI_DEPENDENCIES]||[]}}(r||(r={}));const s=n("instantiationService");function n(e){if(r.serviceIds.has(e))return r.serviceIds.get(e);const t=function(e,i,s){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");!function(e,t,i){t[r.DI_TARGET]===t?t[r.DI_DEPENDENCIES].push({id:e,index:i}):(t[r.DI_DEPENDENCIES]=[{id:e,index:i}],t[r.DI_TARGET]=t)}(t,e,s)};return t.toString=()=>e,r.serviceIds.set(e,t),t}}}]);