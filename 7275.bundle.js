"use strict";(self.webpackChunkmonaco_lsp_streams=self.webpackChunkmonaco_lsp_streams||[]).push([[7275],{44291:(t,e,n)=>{function o(t){let e=0,n=0,o=0,r=0;for(let a=0,s=t.length;a<s;a++){const l=t.charCodeAt(a);13===l?(0===e&&(n=a),e++,a+1<s&&10===t.charCodeAt(a+1)?(r|=2,a++):r|=3,o=a+1):10===l&&(r|=1,0===e&&(n=a),e++,o=a+1)}return 0===e&&(n=t.length),[e,n,t.length-o,r]}n.d(e,{W:()=>o})},16881:(t,e,n)=>{n.d(e,{x:()=>o});class o{static getLanguageId(t){return(255&t)>>>0}static getTokenType(t){return(768&t)>>>8}static containsBalancedBrackets(t){return!!(1024&t)}static getFontStyle(t){return(30720&t)>>>11}static getForeground(t){return(16744448&t)>>>15}static getBackground(t){return(4278190080&t)>>>24}static getClassNameFromMetadata(t){let e="mtk"+this.getForeground(t);const n=this.getFontStyle(t);return 1&n&&(e+=" mtki"),2&n&&(e+=" mtkb"),4&n&&(e+=" mtku"),8&n&&(e+=" mtks"),e}static getInlineStyleFromMetadata(t,e){const n=this.getForeground(t),o=this.getFontStyle(t);let r=`color: ${e[n]};`;1&o&&(r+="font-style: italic;"),2&o&&(r+="font-weight: bold;");let a="";return 4&o&&(a+=" underline"),8&o&&(a+=" line-through"),a&&(r+=`text-decoration:${a};`),r}static getPresentationFromMetadata(t){const e=this.getForeground(t),n=this.getFontStyle(t);return{foreground:e,italic:Boolean(1&n),bold:Boolean(2&n),underline:Boolean(4&n),strikethrough:Boolean(8&n)}}}},7485:(t,e,n)=>{n.d(e,{L:()=>o});const o=(0,n(82834).u1)("languageService")}}]);