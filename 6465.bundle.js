"use strict";(self.webpackChunkmonaco_lsp_streams=self.webpackChunkmonaco_lsp_streams||[]).push([[6465],{66465:(e,t,s)=>{s.d(t,{rr:()=>H,$b:()=>U}),s(76535);var r=s(21172),i=s(52888),n=s(6729),a=s(84780),h=s(96005);function u(...e){switch(e.length){case 1:return(0,h.kg)("contextkey.scanner.hint.didYouMean1","Did you mean {0}?",e[0]);case 2:return(0,h.kg)("contextkey.scanner.hint.didYouMean2","Did you mean {0} or {1}?",e[0],e[1]);case 3:return(0,h.kg)("contextkey.scanner.hint.didYouMean3","Did you mean {0}, {1} or {2}?",e[0],e[1],e[2]);default:return}}const c=(0,h.kg)("contextkey.scanner.hint.didYouForgetToOpenOrCloseQuote","Did you forget to open or close the quote?"),o=(0,h.kg)("contextkey.scanner.hint.didYouForgetToEscapeSlash","Did you forget to escape the '/' (slash) character? Put two backslashes before it to escape, e.g., '\\\\/'.");class l{constructor(){this._input="",this._start=0,this._current=0,this._tokens=[],this._errors=[],this.stringRe=/[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy}static getLexeme(e){switch(e.type){case 0:return"(";case 1:return")";case 2:return"!";case 3:return e.isTripleEq?"===":"==";case 4:return e.isTripleEq?"!==":"!=";case 5:return"<";case 6:return"<=";case 7:case 8:return">=";case 9:return"=~";case 10:case 17:case 18:case 19:return e.lexeme;case 11:return"true";case 12:return"false";case 13:return"in";case 14:return"not";case 15:return"&&";case 16:return"||";case 20:return"EOF";default:throw(0,a.iH)(`unhandled token type: ${JSON.stringify(e)}; have you forgotten to add a case?`)}}static{this._regexFlags=new Set(["i","g","s","m","y","u"].map((e=>e.charCodeAt(0))))}static{this._keywords=new Map([["not",14],["in",13],["false",12],["true",11]])}reset(e){return this._input=e,this._start=0,this._current=0,this._tokens=[],this._errors=[],this}scan(){for(;!this._isAtEnd();)switch(this._start=this._current,this._advance()){case 40:this._addToken(0);break;case 41:this._addToken(1);break;case 33:if(this._match(61)){const e=this._match(61);this._tokens.push({type:4,offset:this._start,isTripleEq:e})}else this._addToken(2);break;case 39:this._quotedString();break;case 47:this._regex();break;case 61:if(this._match(61)){const e=this._match(61);this._tokens.push({type:3,offset:this._start,isTripleEq:e})}else this._match(126)?this._addToken(9):this._error(u("==","=~"));break;case 60:this._addToken(this._match(61)?6:5);break;case 62:this._addToken(this._match(61)?8:7);break;case 38:this._match(38)?this._addToken(15):this._error(u("&&"));break;case 124:this._match(124)?this._addToken(16):this._error(u("||"));break;case 32:case 13:case 9:case 10:case 160:break;default:this._string()}return this._start=this._current,this._addToken(20),Array.from(this._tokens)}_match(e){return!this._isAtEnd()&&this._input.charCodeAt(this._current)===e&&(this._current++,!0)}_advance(){return this._input.charCodeAt(this._current++)}_peek(){return this._isAtEnd()?0:this._input.charCodeAt(this._current)}_addToken(e){this._tokens.push({type:e,offset:this._start})}_error(e){const t=this._start,s=this._input.substring(this._start,this._current),r={type:19,offset:this._start,lexeme:s};this._errors.push({offset:t,lexeme:s,additionalInfo:e}),this._tokens.push(r)}_string(){this.stringRe.lastIndex=this._start;const e=this.stringRe.exec(this._input);if(e){this._current=this._start+e[0].length;const t=this._input.substring(this._start,this._current),s=l._keywords.get(t);s?this._addToken(s):this._tokens.push({type:17,lexeme:t,offset:this._start})}}_quotedString(){for(;39!==this._peek()&&!this._isAtEnd();)this._advance();this._isAtEnd()?this._error(c):(this._advance(),this._tokens.push({type:18,lexeme:this._input.substring(this._start+1,this._current-1),offset:this._start+1}))}_regex(){let e=this._current,t=!1,s=!1;for(;;){if(e>=this._input.length)return this._current=e,void this._error(o);const r=this._input.charCodeAt(e);if(t)t=!1;else{if(47===r&&!s){e++;break}91===r?s=!0:92===r?t=!0:93===r&&(s=!1)}e++}for(;e<this._input.length&&l._regexFlags.has(this._input.charCodeAt(e));)e++;this._current=e;const r=this._input.substring(this._start,this._current);this._tokens.push({type:10,lexeme:r,offset:this._start})}_isAtEnd(){return this._current>=this._input.length}}var p=s(82834);const y=new Map;y.set("false",!1),y.set("true",!0),y.set("isMac",i.zx),y.set("isLinux",i.j9),y.set("isWindows",i.uF),y.set("isWeb",i.HZ),y.set("isMacNative",i.zx&&!i.HZ),y.set("isEdge",i.UP),y.set("isFirefox",i.gm),y.set("isChrome",i.H8),y.set("isSafari",i.nr);const g=Object.prototype.hasOwnProperty,_={regexParsingWithErrorRecovery:!0},f=(0,h.kg)("contextkey.parser.error.emptyString","Empty context key expression"),d=(0,h.kg)("contextkey.parser.error.emptyString.hint","Did you forget to write an expression? You can also put 'false' or 'true' to always evaluate to false or true, respectively."),k=(0,h.kg)("contextkey.parser.error.noInAfterNot","'in' after 'not'."),v=(0,h.kg)("contextkey.parser.error.closingParenthesis","closing parenthesis ')'"),x=(0,h.kg)("contextkey.parser.error.unexpectedToken","Unexpected token"),E=(0,h.kg)("contextkey.parser.error.unexpectedToken.hint","Did you forget to put && or || before the token?"),m=(0,h.kg)("contextkey.parser.error.unexpectedEOF","Unexpected end of expression"),N=(0,h.kg)("contextkey.parser.error.unexpectedEOF.hint","Did you forget to put a context key?");class b{static{this._parseError=new Error}constructor(e=_){this._config=e,this._scanner=new l,this._tokens=[],this._current=0,this._parsingErrors=[],this._flagsGYRe=/g|y/g}parse(e){if(""!==e){this._tokens=this._scanner.reset(e).scan(),this._current=0,this._parsingErrors=[];try{const e=this._expr();if(!this._isAtEnd()){const e=this._peek(),t=17===e.type?E:void 0;throw this._parsingErrors.push({message:x,offset:e.offset,lexeme:l.getLexeme(e),additionalInfo:t}),b._parseError}return e}catch(e){if(e!==b._parseError)throw e;return}}else this._parsingErrors.push({message:f,offset:0,lexeme:"",additionalInfo:d})}_expr(){return this._or()}_or(){const e=[this._and()];for(;this._matchOne(16);){const t=this._and();e.push(t)}return 1===e.length?e[0]:C.or(...e)}_and(){const e=[this._term()];for(;this._matchOne(15);){const t=this._term();e.push(t)}return 1===e.length?e[0]:C.and(...e)}_term(){if(this._matchOne(2)){const e=this._peek();switch(e.type){case 11:return this._advance(),w.INSTANCE;case 12:return this._advance(),T.INSTANCE;case 0:{this._advance();const e=this._expr();return this._consume(1,v),e?.negate()}case 17:return this._advance(),G.create(e.lexeme);default:throw this._errExpectedButGot("KEY | true | false | '(' expression ')'",e)}}return this._primary()}_primary(){const e=this._peek();switch(e.type){case 11:return this._advance(),C.true();case 12:return this._advance(),C.false();case 0:{this._advance();const e=this._expr();return this._consume(1,v),e}case 17:{const t=e.lexeme;if(this._advance(),this._matchOne(9)){const e=this._peek();if(!this._config.regexParsingWithErrorRecovery){if(this._advance(),10!==e.type)throw this._errExpectedButGot("REGEX",e);const s=e.lexeme,r=s.lastIndexOf("/"),i=r===s.length-1?void 0:this._removeFlagsGY(s.substring(r+1));let n;try{n=new RegExp(s.substring(1,r),i)}catch(t){throw this._errExpectedButGot("REGEX",e)}return Y.create(t,n)}switch(e.type){case 10:case 19:{const s=[e.lexeme];this._advance();let r=this._peek(),i=0;for(let t=0;t<e.lexeme.length;t++)40===e.lexeme.charCodeAt(t)?i++:41===e.lexeme.charCodeAt(t)&&i--;for(;!this._isAtEnd()&&15!==r.type&&16!==r.type;){switch(r.type){case 0:i++;break;case 1:i--;break;case 10:case 18:for(let t=0;t<r.lexeme.length;t++)40===r.lexeme.charCodeAt(t)?i++:41===e.lexeme.charCodeAt(t)&&i--}if(i<0)break;s.push(l.getLexeme(r)),this._advance(),r=this._peek()}const n=s.join(""),a=n.lastIndexOf("/"),h=a===n.length-1?void 0:this._removeFlagsGY(n.substring(a+1));let u;try{u=new RegExp(n.substring(1,a),h)}catch(t){throw this._errExpectedButGot("REGEX",e)}return C.regex(t,u)}case 18:{const s=e.lexeme;this._advance();let r=null;if(!(0,n.AV)(s)){const t=s.indexOf("/"),i=s.lastIndexOf("/");if(t!==i&&t>=0){const n=s.slice(t+1,i),a="i"===s[i+1]?"i":"";try{r=new RegExp(n,a)}catch(t){throw this._errExpectedButGot("REGEX",e)}}}if(null===r)throw this._errExpectedButGot("REGEX",e);return Y.create(t,r)}default:throw this._errExpectedButGot("REGEX",this._peek())}}if(this._matchOne(14)){this._consume(13,k);const e=this._value();return C.notIn(t,e)}switch(this._peek().type){case 3:{this._advance();const e=this._value();if(18===this._previous().type)return C.equals(t,e);switch(e){case"true":return C.has(t);case"false":return C.not(t);default:return C.equals(t,e)}}case 4:{this._advance();const e=this._value();if(18===this._previous().type)return C.notEquals(t,e);switch(e){case"true":return C.not(t);case"false":return C.has(t);default:return C.notEquals(t,e)}}case 5:return this._advance(),F.create(t,this._value());case 6:return this._advance(),V.create(t,this._value());case 7:return this._advance(),R.create(t,this._value());case 8:return this._advance(),K.create(t,this._value());case 13:return this._advance(),C.in(t,this._value());default:return C.has(t)}}case 20:throw this._parsingErrors.push({message:m,offset:e.offset,lexeme:"",additionalInfo:N}),b._parseError;default:throw this._errExpectedButGot("true | false | KEY \n\t| KEY '=~' REGEX \n\t| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value",this._peek())}}_value(){const e=this._peek();switch(e.type){case 17:case 18:return this._advance(),e.lexeme;case 11:return this._advance(),"true";case 12:return this._advance(),"false";case 13:return this._advance(),"in";default:return""}}_removeFlagsGY(e){return e.replaceAll(this._flagsGYRe,"")}_previous(){return this._tokens[this._current-1]}_matchOne(e){return!!this._check(e)&&(this._advance(),!0)}_advance(){return this._isAtEnd()||this._current++,this._previous()}_consume(e,t){if(this._check(e))return this._advance();throw this._errExpectedButGot(t,this._peek())}_errExpectedButGot(e,t,s){const r=(0,h.kg)("contextkey.parser.error.expectedButGot","Expected: {0}\nReceived: '{1}'.",e,l.getLexeme(t)),i=t.offset,n=l.getLexeme(t);return this._parsingErrors.push({message:r,offset:i,lexeme:n,additionalInfo:s}),b._parseError}_check(e){return this._peek().type===e}_peek(){return this._tokens[this._current]}_isAtEnd(){return 20===this._peek().type}}class C{static false(){return w.INSTANCE}static true(){return T.INSTANCE}static has(e){return I.create(e)}static equals(e,t){return S.create(e,t)}static notEquals(e,t){return $.create(e,t)}static regex(e,t){return Y.create(e,t)}static in(e,t){return q.create(e,t)}static notIn(e,t){return z.create(e,t)}static not(e){return G.create(e)}static and(...e){return j.create(e,null,!0)}static or(...e){return L.create(e,null,!0)}static{this._parser=new b({regexParsingWithErrorRecovery:!1})}static deserialize(e){if(null!=e)return this._parser.parse(e)}}function A(e,t){return e.cmp(t)}class w{static{this.INSTANCE=new w}constructor(){this.type=0}cmp(e){return this.type-e.type}equals(e){return e.type===this.type}substituteConstants(){return this}evaluate(e){return!1}serialize(){return"false"}keys(){return[]}negate(){return T.INSTANCE}}class T{static{this.INSTANCE=new T}constructor(){this.type=1}cmp(e){return this.type-e.type}equals(e){return e.type===this.type}substituteConstants(){return this}evaluate(e){return!0}serialize(){return"true"}keys(){return[]}negate(){return w.INSTANCE}}class I{static create(e,t=null){const s=y.get(e);return"boolean"==typeof s?s?T.INSTANCE:w.INSTANCE:new I(e,t)}constructor(e,t){this.key=e,this.negated=t,this.type=2}cmp(e){return e.type!==this.type?this.type-e.type:M(this.key,e.key)}equals(e){return e.type===this.type&&this.key===e.key}substituteConstants(){const e=y.get(this.key);return"boolean"==typeof e?e?T.INSTANCE:w.INSTANCE:this}evaluate(e){return!!e.getValue(this.key)}serialize(){return this.key}keys(){return[this.key]}negate(){return this.negated||(this.negated=G.create(this.key,this)),this.negated}}class S{static create(e,t,s=null){if("boolean"==typeof t)return t?I.create(e,s):G.create(e,s);const r=y.get(e);return"boolean"==typeof r?t===(r?"true":"false")?T.INSTANCE:w.INSTANCE:new S(e,t,s)}constructor(e,t,s){this.key=e,this.value=t,this.negated=s,this.type=4}cmp(e){return e.type!==this.type?this.type-e.type:P(this.key,this.value,e.key,e.value)}equals(e){return e.type===this.type&&this.key===e.key&&this.value===e.value}substituteConstants(){const e=y.get(this.key);if("boolean"==typeof e){const t=e?"true":"false";return this.value===t?T.INSTANCE:w.INSTANCE}return this}evaluate(e){return e.getValue(this.key)==this.value}serialize(){return`${this.key} == '${this.value}'`}keys(){return[this.key]}negate(){return this.negated||(this.negated=$.create(this.key,this.value,this)),this.negated}}class q{static create(e,t){return new q(e,t)}constructor(e,t){this.key=e,this.valueKey=t,this.type=10,this.negated=null}cmp(e){return e.type!==this.type?this.type-e.type:P(this.key,this.valueKey,e.key,e.valueKey)}equals(e){return e.type===this.type&&this.key===e.key&&this.valueKey===e.valueKey}substituteConstants(){return this}evaluate(e){const t=e.getValue(this.valueKey),s=e.getValue(this.key);return Array.isArray(t)?t.includes(s):"string"==typeof s&&"object"==typeof t&&null!==t&&g.call(t,s)}serialize(){return`${this.key} in '${this.valueKey}'`}keys(){return[this.key,this.valueKey]}negate(){return this.negated||(this.negated=z.create(this.key,this.valueKey)),this.negated}}class z{static create(e,t){return new z(e,t)}constructor(e,t){this.key=e,this.valueKey=t,this.type=11,this._negated=q.create(e,t)}cmp(e){return e.type!==this.type?this.type-e.type:this._negated.cmp(e._negated)}equals(e){return e.type===this.type&&this._negated.equals(e._negated)}substituteConstants(){return this}evaluate(e){return!this._negated.evaluate(e)}serialize(){return`${this.key} not in '${this.valueKey}'`}keys(){return this._negated.keys()}negate(){return this._negated}}class ${static create(e,t,s=null){if("boolean"==typeof t)return t?G.create(e,s):I.create(e,s);const r=y.get(e);return"boolean"==typeof r?t===(r?"true":"false")?w.INSTANCE:T.INSTANCE:new $(e,t,s)}constructor(e,t,s){this.key=e,this.value=t,this.negated=s,this.type=5}cmp(e){return e.type!==this.type?this.type-e.type:P(this.key,this.value,e.key,e.value)}equals(e){return e.type===this.type&&this.key===e.key&&this.value===e.value}substituteConstants(){const e=y.get(this.key);if("boolean"==typeof e){const t=e?"true":"false";return this.value===t?w.INSTANCE:T.INSTANCE}return this}evaluate(e){return e.getValue(this.key)!=this.value}serialize(){return`${this.key} != '${this.value}'`}keys(){return[this.key]}negate(){return this.negated||(this.negated=S.create(this.key,this.value,this)),this.negated}}class G{static create(e,t=null){const s=y.get(e);return"boolean"==typeof s?s?w.INSTANCE:T.INSTANCE:new G(e,t)}constructor(e,t){this.key=e,this.negated=t,this.type=3}cmp(e){return e.type!==this.type?this.type-e.type:M(this.key,e.key)}equals(e){return e.type===this.type&&this.key===e.key}substituteConstants(){const e=y.get(this.key);return"boolean"==typeof e?e?w.INSTANCE:T.INSTANCE:this}evaluate(e){return!e.getValue(this.key)}serialize(){return`!${this.key}`}keys(){return[this.key]}negate(){return this.negated||(this.negated=I.create(this.key,this)),this.negated}}function O(e,t){if("string"==typeof e){const t=parseFloat(e);isNaN(t)||(e=t)}return"string"==typeof e||"number"==typeof e?t(e):w.INSTANCE}class R{static create(e,t,s=null){return O(t,(t=>new R(e,t,s)))}constructor(e,t,s){this.key=e,this.value=t,this.negated=s,this.type=12}cmp(e){return e.type!==this.type?this.type-e.type:P(this.key,this.value,e.key,e.value)}equals(e){return e.type===this.type&&this.key===e.key&&this.value===e.value}substituteConstants(){return this}evaluate(e){return"string"!=typeof this.value&&parseFloat(e.getValue(this.key))>this.value}serialize(){return`${this.key} > ${this.value}`}keys(){return[this.key]}negate(){return this.negated||(this.negated=V.create(this.key,this.value,this)),this.negated}}class K{static create(e,t,s=null){return O(t,(t=>new K(e,t,s)))}constructor(e,t,s){this.key=e,this.value=t,this.negated=s,this.type=13}cmp(e){return e.type!==this.type?this.type-e.type:P(this.key,this.value,e.key,e.value)}equals(e){return e.type===this.type&&this.key===e.key&&this.value===e.value}substituteConstants(){return this}evaluate(e){return"string"!=typeof this.value&&parseFloat(e.getValue(this.key))>=this.value}serialize(){return`${this.key} >= ${this.value}`}keys(){return[this.key]}negate(){return this.negated||(this.negated=F.create(this.key,this.value,this)),this.negated}}class F{static create(e,t,s=null){return O(t,(t=>new F(e,t,s)))}constructor(e,t,s){this.key=e,this.value=t,this.negated=s,this.type=14}cmp(e){return e.type!==this.type?this.type-e.type:P(this.key,this.value,e.key,e.value)}equals(e){return e.type===this.type&&this.key===e.key&&this.value===e.value}substituteConstants(){return this}evaluate(e){return"string"!=typeof this.value&&parseFloat(e.getValue(this.key))<this.value}serialize(){return`${this.key} < ${this.value}`}keys(){return[this.key]}negate(){return this.negated||(this.negated=K.create(this.key,this.value,this)),this.negated}}class V{static create(e,t,s=null){return O(t,(t=>new V(e,t,s)))}constructor(e,t,s){this.key=e,this.value=t,this.negated=s,this.type=15}cmp(e){return e.type!==this.type?this.type-e.type:P(this.key,this.value,e.key,e.value)}equals(e){return e.type===this.type&&this.key===e.key&&this.value===e.value}substituteConstants(){return this}evaluate(e){return"string"!=typeof this.value&&parseFloat(e.getValue(this.key))<=this.value}serialize(){return`${this.key} <= ${this.value}`}keys(){return[this.key]}negate(){return this.negated||(this.negated=R.create(this.key,this.value,this)),this.negated}}class Y{static create(e,t){return new Y(e,t)}constructor(e,t){this.key=e,this.regexp=t,this.type=7,this.negated=null}cmp(e){if(e.type!==this.type)return this.type-e.type;if(this.key<e.key)return-1;if(this.key>e.key)return 1;const t=this.regexp?this.regexp.source:"",s=e.regexp?e.regexp.source:"";return t<s?-1:t>s?1:0}equals(e){if(e.type===this.type){const t=this.regexp?this.regexp.source:"",s=e.regexp?e.regexp.source:"";return this.key===e.key&&t===s}return!1}substituteConstants(){return this}evaluate(e){const t=e.getValue(this.key);return!!this.regexp&&this.regexp.test(t)}serialize(){const e=this.regexp?`/${this.regexp.source}/${this.regexp.flags}`:"/invalid/";return`${this.key} =~ ${e}`}keys(){return[this.key]}negate(){return this.negated||(this.negated=B.create(this)),this.negated}}class B{static create(e){return new B(e)}constructor(e){this._actual=e,this.type=8}cmp(e){return e.type!==this.type?this.type-e.type:this._actual.cmp(e._actual)}equals(e){return e.type===this.type&&this._actual.equals(e._actual)}substituteConstants(){return this}evaluate(e){return!this._actual.evaluate(e)}serialize(){return`!(${this._actual.serialize()})`}keys(){return this._actual.keys()}negate(){return this._actual}}function D(e){let t=null;for(let s=0,r=e.length;s<r;s++){const r=e[s].substituteConstants();if(e[s]!==r&&null===t){t=[];for(let r=0;r<s;r++)t[r]=e[r]}null!==t&&(t[s]=r)}return null===t?e:t}class j{static create(e,t,s){return j._normalizeArr(e,t,s)}constructor(e,t){this.expr=e,this.negated=t,this.type=6}cmp(e){if(e.type!==this.type)return this.type-e.type;if(this.expr.length<e.expr.length)return-1;if(this.expr.length>e.expr.length)return 1;for(let t=0,s=this.expr.length;t<s;t++){const s=A(this.expr[t],e.expr[t]);if(0!==s)return s}return 0}equals(e){if(e.type===this.type){if(this.expr.length!==e.expr.length)return!1;for(let t=0,s=this.expr.length;t<s;t++)if(!this.expr[t].equals(e.expr[t]))return!1;return!0}return!1}substituteConstants(){const e=D(this.expr);return e===this.expr?this:j.create(e,this.negated,!1)}evaluate(e){for(let t=0,s=this.expr.length;t<s;t++)if(!this.expr[t].evaluate(e))return!1;return!0}static _normalizeArr(e,t,s){const r=[];let i=!1;for(const t of e)if(t)if(1!==t.type){if(0===t.type)return w.INSTANCE;6!==t.type?r.push(t):r.push(...t.expr)}else i=!0;if(0===r.length&&i)return T.INSTANCE;if(0!==r.length){if(1===r.length)return r[0];r.sort(A);for(let e=1;e<r.length;e++)r[e-1].equals(r[e])&&(r.splice(e,1),e--);if(1===r.length)return r[0];for(;r.length>1;){const e=r[r.length-1];if(9!==e.type)break;r.pop();const t=r.pop(),i=0===r.length,n=L.create(e.expr.map((e=>j.create([e,t],null,s))),null,i);n&&(r.push(n),r.sort(A))}if(1===r.length)return r[0];if(s){for(let e=0;e<r.length;e++)for(let t=e+1;t<r.length;t++)if(r[e].negate().equals(r[t]))return w.INSTANCE;if(1===r.length)return r[0]}return new j(r,t)}}serialize(){return this.expr.map((e=>e.serialize())).join(" && ")}keys(){const e=[];for(const t of this.expr)e.push(...t.keys());return e}negate(){if(!this.negated){const e=[];for(const t of this.expr)e.push(t.negate());this.negated=L.create(e,this,!0)}return this.negated}}class L{static create(e,t,s){return L._normalizeArr(e,t,s)}constructor(e,t){this.expr=e,this.negated=t,this.type=9}cmp(e){if(e.type!==this.type)return this.type-e.type;if(this.expr.length<e.expr.length)return-1;if(this.expr.length>e.expr.length)return 1;for(let t=0,s=this.expr.length;t<s;t++){const s=A(this.expr[t],e.expr[t]);if(0!==s)return s}return 0}equals(e){if(e.type===this.type){if(this.expr.length!==e.expr.length)return!1;for(let t=0,s=this.expr.length;t<s;t++)if(!this.expr[t].equals(e.expr[t]))return!1;return!0}return!1}substituteConstants(){const e=D(this.expr);return e===this.expr?this:L.create(e,this.negated,!1)}evaluate(e){for(let t=0,s=this.expr.length;t<s;t++)if(this.expr[t].evaluate(e))return!0;return!1}static _normalizeArr(e,t,s){let r=[],i=!1;if(e){for(let t=0,s=e.length;t<s;t++){const s=e[t];if(s)if(0!==s.type){if(1===s.type)return T.INSTANCE;9!==s.type?r.push(s):r=r.concat(s.expr)}else i=!0}if(0===r.length&&i)return w.INSTANCE;r.sort(A)}if(0!==r.length){if(1===r.length)return r[0];for(let e=1;e<r.length;e++)r[e-1].equals(r[e])&&(r.splice(e,1),e--);if(1===r.length)return r[0];if(s){for(let e=0;e<r.length;e++)for(let t=e+1;t<r.length;t++)if(r[e].negate().equals(r[t]))return T.INSTANCE;if(1===r.length)return r[0]}return new L(r,t)}}serialize(){return this.expr.map((e=>e.serialize())).join(" || ")}keys(){const e=[];for(const t of this.expr)e.push(...t.keys());return e}negate(){if(!this.negated){const e=[];for(const t of this.expr)e.push(t.negate());for(;e.length>1;){const t=e.shift(),s=e.shift(),r=[];for(const e of X(t))for(const t of X(s))r.push(j.create([e,t],null,!1));e.unshift(L.create(r,null,!1))}this.negated=L.create(e,this,!0)}return this.negated}}class W extends I{static{this._info=[]}static all(){return W._info.values()}constructor(e,t,s){super(e,null),this._defaultValue=t,"object"==typeof s?W._info.push({...s,key:e}):!0!==s&&W._info.push({key:e,description:s,type:null!=t?typeof t:void 0})}bindTo(e){return e.createKey(this.key,this._defaultValue)}getValue(e){return e.getContextKeyValue(this.key)}toNegated(){return this.negate()}isEqualTo(e){return S.create(this.key,e)}}function M(e,t){return e<t?-1:e>t?1:0}function P(e,t,s,r){return e<s?-1:e>s?1:t<r?-1:t>r?1:0}function X(e){return 9===e.type?e.expr:[e]}(0,p.u1)("contextKeyService");const H=(0,p.u1)("logService");var U;!function(e){e[e.Off=0]="Off",e[e.Trace=1]="Trace",e[e.Debug=2]="Debug",e[e.Info=3]="Info",e[e.Warning=4]="Warning",e[e.Error=5]="Error"}(U||(U={})),U.Info,r.jG,new W("logLevel",function(e){switch(e){case U.Trace:return"trace";case U.Debug:return"debug";case U.Info:return"info";case U.Warning:return"warn";case U.Error:return"error";case U.Off:return"off"}}(U.Info))}}]);