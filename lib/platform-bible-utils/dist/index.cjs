"use strict";var K=Object.defineProperty;var F=(t,e,r)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var f=(t,e,r)=>(F(t,typeof e!="symbol"?e+"":e,r),r);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});class L{constructor(e,r=1e4){f(this,"variableName");f(this,"promiseToValue");f(this,"resolver");f(this,"rejecter");this.variableName=e,this.promiseToValue=new Promise((s,a)=>{this.resolver=s,this.rejecter=a}),r>0&&setTimeout(()=>{this.rejecter&&(this.rejecter(`Timeout reached when waiting for ${this.variableName} to settle`),this.complete())},r),Object.seal(this)}get promise(){return this.promiseToValue}get hasSettled(){return Object.isFrozen(this)}resolveToValue(e,r=!1){if(this.resolver)console.debug(`${this.variableName} is being resolved now`),this.resolver(e),this.complete();else{if(r)throw Error(`${this.variableName} was already settled`);console.debug(`Ignoring subsequent resolution of ${this.variableName}`)}}rejectWithReason(e,r=!1){if(this.rejecter)console.debug(`${this.variableName} is being rejected now`),this.rejecter(e),this.complete();else{if(r)throw Error(`${this.variableName} was already settled`);console.debug(`Ignoring subsequent rejection of ${this.variableName}`)}}complete(){this.resolver=void 0,this.rejecter=void 0,Object.freeze(this)}}function W(){return"00-0-4-1-000".replace(/[^-]/g,t=>((Math.random()+~~t)*65536>>t).toString(16).padStart(4,"0"))}function P(t){return typeof t=="string"||t instanceof String}function v(t){return JSON.parse(JSON.stringify(t))}function k(t,e=300){if(P(t))throw new Error("Tried to debounce a string! Could be XSS");let r;return(...s)=>{clearTimeout(r),r=setTimeout(()=>t(...s),e)}}function Z(t,e,r){const s=new Map;return t.forEach(a=>{const i=e(a),o=s.get(i),u=r?r(a,i):a;o?o.push(u):s.set(i,[u])}),s}function X(t){return typeof t=="object"&&t!==null&&"message"in t&&typeof t.message=="string"}function Q(t){if(X(t))return t;try{return new Error(JSON.stringify(t))}catch{return new Error(String(t))}}function Y(t){return Q(t).message}function T(t){return new Promise(e=>setTimeout(e,t))}function ee(t,e){const r=T(e).then(()=>{});return Promise.any([r,t()])}function te(t,e="obj"){const r=new Set;Object.getOwnPropertyNames(t).forEach(a=>{try{typeof t[a]=="function"&&r.add(a)}catch(i){console.debug(`Skipping ${a} on ${e} due to error: ${i}`)}});let s=Object.getPrototypeOf(t);for(;s&&Object.getPrototypeOf(s);)Object.getOwnPropertyNames(s).forEach(a=>{try{typeof t[a]=="function"&&r.add(a)}catch(i){console.debug(`Skipping ${a} on ${e}'s prototype due to error: ${i}`)}}),s=Object.getPrototypeOf(s);return r}class re{constructor(e,r){f(this,"baseDocument");f(this,"contributions",new Map);f(this,"latestOutput");f(this,"options");this.baseDocument=e,this.options=r,this.updateBaseDocument(e)}updateBaseDocument(e){return this.validateStartingDocument(e),this.baseDocument=this.options.copyDocuments?v(e):e,this.rebuild()}addOrUpdateContribution(e,r){this.validateContribution(e,r);const s=this.contributions.get(e),a=this.options.copyDocuments&&r?v(r):r;this.contributions.set(e,a);try{return this.rebuild()}catch(i){throw s?this.contributions.set(e,s):this.contributions.delete(e),new Error(`Error when setting the document named ${e}: ${i}`)}}deleteContribution(e){const r=this.contributions.get(e);if(!r)throw new Error("{documentKey} does not exist");this.contributions.delete(e);try{return this.rebuild()}catch(s){throw this.contributions.set(e,r),new Error(`Error when deleting the document named ${e}: ${s}`)}}rebuild(){if(this.contributions.size===0){let r=v(this.baseDocument);return r=this.transformFinalOutput(r),this.validateOutput(r),this.latestOutput=r,this.latestOutput}let e=this.baseDocument;return this.contributions.forEach(r=>{e=R(e,r,this.options.ignoreDuplicateProperties),this.validateOutput(e)}),e=this.transformFinalOutput(e),this.validateOutput(e),this.latestOutput=e,this.latestOutput}}function se(...t){let e=!0;return t.forEach(r=>{(!r||typeof r!="object"||Array.isArray(r))&&(e=!1)}),e}function ae(...t){let e=!0;return t.forEach(r=>{(!r||typeof r!="object"||!Array.isArray(r))&&(e=!1)}),e}function R(t,e,r){const s=v(t);return e&&Object.keys(e).forEach(a=>{if(Object.hasOwn(t,a)){if(se(t[a],e[a]))s[a]=R(t[a],e[a],r);else if(ae(t[a],e[a]))s[a]=s[a].concat(e[a]);else if(!r)throw new Error(`Cannot merge objects: key "${a}" already exists in the target object`)}else s[a]=e[a]}),s}class ie{constructor(e="Anonymous"){f(this,"unsubscribers",new Set);this.name=e}add(...e){e.forEach(r=>{"dispose"in r?this.unsubscribers.add(r.dispose):this.unsubscribers.add(r)})}async runAllUnsubscribers(){const e=[...this.unsubscribers].map(s=>s()),r=await Promise.all(e);return this.unsubscribers.clear(),r.every((s,a)=>(s||console.error(`UnsubscriberAsyncList ${this.name}: Unsubscriber at index ${a} failed!`),s))}}class oe{constructor(){f(this,"subscribe",this.event);f(this,"subscriptions");f(this,"lazyEvent");f(this,"isDisposed",!1);f(this,"dispose",()=>this.disposeFn());f(this,"emit",e=>{this.emitFn(e)})}get event(){return this.assertNotDisposed(),this.lazyEvent||(this.lazyEvent=e=>{if(!e||typeof e!="function")throw new Error("Event handler callback must be a function!");return this.subscriptions||(this.subscriptions=[]),this.subscriptions.push(e),()=>{if(!this.subscriptions)return!1;const r=this.subscriptions.indexOf(e);return r<0?!1:(this.subscriptions.splice(r,1),!0)}}),this.lazyEvent}emitFn(e){var r;this.assertNotDisposed(),(r=this.subscriptions)==null||r.forEach(s=>s(e))}assertNotDisposed(){if(this.isDisposed)throw new Error("Emitter is disposed")}disposeFn(){return this.assertNotDisposed(),this.isDisposed=!0,this.subscriptions=void 0,this.lazyEvent=void 0,Promise.resolve(!0)}}const I=[{shortName:"ERR",fullNames:["ERROR"],chapters:-1},{shortName:"GEN",fullNames:["Genesis"],chapters:50},{shortName:"EXO",fullNames:["Exodus"],chapters:40},{shortName:"LEV",fullNames:["Leviticus"],chapters:27},{shortName:"NUM",fullNames:["Numbers"],chapters:36},{shortName:"DEU",fullNames:["Deuteronomy"],chapters:34},{shortName:"JOS",fullNames:["Joshua"],chapters:24},{shortName:"JDG",fullNames:["Judges"],chapters:21},{shortName:"RUT",fullNames:["Ruth"],chapters:4},{shortName:"1SA",fullNames:["1 Samuel"],chapters:31},{shortName:"2SA",fullNames:["2 Samuel"],chapters:24},{shortName:"1KI",fullNames:["1 Kings"],chapters:22},{shortName:"2KI",fullNames:["2 Kings"],chapters:25},{shortName:"1CH",fullNames:["1 Chronicles"],chapters:29},{shortName:"2CH",fullNames:["2 Chronicles"],chapters:36},{shortName:"EZR",fullNames:["Ezra"],chapters:10},{shortName:"NEH",fullNames:["Nehemiah"],chapters:13},{shortName:"EST",fullNames:["Esther"],chapters:10},{shortName:"JOB",fullNames:["Job"],chapters:42},{shortName:"PSA",fullNames:["Psalm","Psalms"],chapters:150},{shortName:"PRO",fullNames:["Proverbs"],chapters:31},{shortName:"ECC",fullNames:["Ecclesiastes"],chapters:12},{shortName:"SNG",fullNames:["Song of Solomon","Song of Songs"],chapters:8},{shortName:"ISA",fullNames:["Isaiah"],chapters:66},{shortName:"JER",fullNames:["Jeremiah"],chapters:52},{shortName:"LAM",fullNames:["Lamentations"],chapters:5},{shortName:"EZK",fullNames:["Ezekiel"],chapters:48},{shortName:"DAN",fullNames:["Daniel"],chapters:12},{shortName:"HOS",fullNames:["Hosea"],chapters:14},{shortName:"JOL",fullNames:["Joel"],chapters:3},{shortName:"AMO",fullNames:["Amos"],chapters:9},{shortName:"OBA",fullNames:["Obadiah"],chapters:1},{shortName:"JON",fullNames:["Jonah"],chapters:4},{shortName:"MIC",fullNames:["Micah"],chapters:7},{shortName:"NAM",fullNames:["Nahum"],chapters:3},{shortName:"HAB",fullNames:["Habakkuk"],chapters:3},{shortName:"ZEP",fullNames:["Zephaniah"],chapters:3},{shortName:"HAG",fullNames:["Haggai"],chapters:2},{shortName:"ZEC",fullNames:["Zechariah"],chapters:14},{shortName:"MAL",fullNames:["Malachi"],chapters:4},{shortName:"MAT",fullNames:["Matthew"],chapters:28},{shortName:"MRK",fullNames:["Mark"],chapters:16},{shortName:"LUK",fullNames:["Luke"],chapters:24},{shortName:"JHN",fullNames:["John"],chapters:21},{shortName:"ACT",fullNames:["Acts"],chapters:28},{shortName:"ROM",fullNames:["Romans"],chapters:16},{shortName:"1CO",fullNames:["1 Corinthians"],chapters:16},{shortName:"2CO",fullNames:["2 Corinthians"],chapters:13},{shortName:"GAL",fullNames:["Galatians"],chapters:6},{shortName:"EPH",fullNames:["Ephesians"],chapters:6},{shortName:"PHP",fullNames:["Philippians"],chapters:4},{shortName:"COL",fullNames:["Colossians"],chapters:4},{shortName:"1TH",fullNames:["1 Thessalonians"],chapters:5},{shortName:"2TH",fullNames:["2 Thessalonians"],chapters:3},{shortName:"1TI",fullNames:["1 Timothy"],chapters:6},{shortName:"2TI",fullNames:["2 Timothy"],chapters:4},{shortName:"TIT",fullNames:["Titus"],chapters:3},{shortName:"PHM",fullNames:["Philemon"],chapters:1},{shortName:"HEB",fullNames:["Hebrews"],chapters:13},{shortName:"JAS",fullNames:["James"],chapters:5},{shortName:"1PE",fullNames:["1 Peter"],chapters:5},{shortName:"2PE",fullNames:["2 Peter"],chapters:3},{shortName:"1JN",fullNames:["1 John"],chapters:5},{shortName:"2JN",fullNames:["2 John"],chapters:1},{shortName:"3JN",fullNames:["3 John"],chapters:1},{shortName:"JUD",fullNames:["Jude"],chapters:1},{shortName:"REV",fullNames:["Revelation"],chapters:22}],D=1,x=I.length-1,z=1,B=1,J=t=>{var e;return((e=I[t])==null?void 0:e.chapters)??-1},ne=(t,e)=>({bookNum:Math.max(D,Math.min(t.bookNum+e,x)),chapterNum:1,verseNum:1}),ue=(t,e)=>({...t,chapterNum:Math.min(Math.max(z,t.chapterNum+e),J(t.bookNum)),verseNum:1}),le=(t,e)=>({...t,verseNum:Math.max(B,t.verseNum+e)}),ce=t=>(...e)=>t.map(s=>s(...e)).every(s=>s),he=t=>async(...e)=>{const r=t.map(async s=>s(...e));return(await Promise.all(r)).every(s=>s)};var pe=Object.getOwnPropertyNames,fe=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty;function O(t,e){return function(s,a,i){return t(s,a,i)&&e(s,a,i)}}function y(t){return function(r,s,a){if(!r||!s||typeof r!="object"||typeof s!="object")return t(r,s,a);var i=a.cache,o=i.get(r),u=i.get(s);if(o&&u)return o===s&&u===r;i.set(r,s),i.set(s,r);var c=t(r,s,a);return i.delete(r),i.delete(s),c}}function $(t){return pe(t).concat(fe(t))}var G=Object.hasOwn||function(t,e){return me.call(t,e)};function b(t,e){return t||e?t===e:t===e||t!==t&&e!==e}var U="_owner",A=Object.getOwnPropertyDescriptor,S=Object.keys;function de(t,e,r){var s=t.length;if(e.length!==s)return!1;for(;s-- >0;)if(!r.equals(t[s],e[s],s,s,t,e,r))return!1;return!0}function Ne(t,e){return b(t.getTime(),e.getTime())}function q(t,e,r){if(t.size!==e.size)return!1;for(var s={},a=t.entries(),i=0,o,u;(o=a.next())&&!o.done;){for(var c=e.entries(),p=!1,n=0;(u=c.next())&&!u.done;){var l=o.value,h=l[0],d=l[1],m=u.value,w=m[0],H=m[1];!p&&!s[n]&&(p=r.equals(h,w,i,n,t,e,r)&&r.equals(d,H,h,w,t,e,r))&&(s[n]=!0),n++}if(!p)return!1;i++}return!0}function be(t,e,r){var s=S(t),a=s.length;if(S(e).length!==a)return!1;for(var i;a-- >0;)if(i=s[a],i===U&&(t.$$typeof||e.$$typeof)&&t.$$typeof!==e.$$typeof||!G(e,i)||!r.equals(t[i],e[i],i,i,t,e,r))return!1;return!0}function g(t,e,r){var s=$(t),a=s.length;if($(e).length!==a)return!1;for(var i,o,u;a-- >0;)if(i=s[a],i===U&&(t.$$typeof||e.$$typeof)&&t.$$typeof!==e.$$typeof||!G(e,i)||!r.equals(t[i],e[i],i,i,t,e,r)||(o=A(t,i),u=A(e,i),(o||u)&&(!o||!u||o.configurable!==u.configurable||o.enumerable!==u.enumerable||o.writable!==u.writable)))return!1;return!0}function ge(t,e){return b(t.valueOf(),e.valueOf())}function ve(t,e){return t.source===e.source&&t.flags===e.flags}function j(t,e,r){if(t.size!==e.size)return!1;for(var s={},a=t.values(),i,o;(i=a.next())&&!i.done;){for(var u=e.values(),c=!1,p=0;(o=u.next())&&!o.done;)!c&&!s[p]&&(c=r.equals(i.value,o.value,i.value,o.value,t,e,r))&&(s[p]=!0),p++;if(!c)return!1}return!0}function ye(t,e){var r=t.length;if(e.length!==r)return!1;for(;r-- >0;)if(t[r]!==e[r])return!1;return!0}var Ee="[object Arguments]",we="[object Boolean]",Oe="[object Date]",$e="[object Map]",Ae="[object Number]",Se="[object Object]",qe="[object RegExp]",je="[object Set]",Ce="[object String]",Me=Array.isArray,C=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,M=Object.assign,Pe=Object.prototype.toString.call.bind(Object.prototype.toString);function Te(t){var e=t.areArraysEqual,r=t.areDatesEqual,s=t.areMapsEqual,a=t.areObjectsEqual,i=t.arePrimitiveWrappersEqual,o=t.areRegExpsEqual,u=t.areSetsEqual,c=t.areTypedArraysEqual;return function(n,l,h){if(n===l)return!0;if(n==null||l==null||typeof n!="object"||typeof l!="object")return n!==n&&l!==l;var d=n.constructor;if(d!==l.constructor)return!1;if(d===Object)return a(n,l,h);if(Me(n))return e(n,l,h);if(C!=null&&C(n))return c(n,l,h);if(d===Date)return r(n,l,h);if(d===RegExp)return o(n,l,h);if(d===Map)return s(n,l,h);if(d===Set)return u(n,l,h);var m=Pe(n);return m===Oe?r(n,l,h):m===qe?o(n,l,h):m===$e?s(n,l,h):m===je?u(n,l,h):m===Se?typeof n.then!="function"&&typeof l.then!="function"&&a(n,l,h):m===Ee?a(n,l,h):m===we||m===Ae||m===Ce?i(n,l,h):!1}}function Re(t){var e=t.circular,r=t.createCustomConfig,s=t.strict,a={areArraysEqual:s?g:de,areDatesEqual:Ne,areMapsEqual:s?O(q,g):q,areObjectsEqual:s?g:be,arePrimitiveWrappersEqual:ge,areRegExpsEqual:ve,areSetsEqual:s?O(j,g):j,areTypedArraysEqual:s?g:ye};if(r&&(a=M({},a,r(a))),e){var i=y(a.areArraysEqual),o=y(a.areMapsEqual),u=y(a.areObjectsEqual),c=y(a.areSetsEqual);a=M({},a,{areArraysEqual:i,areMapsEqual:o,areObjectsEqual:u,areSetsEqual:c})}return a}function Ie(t){return function(e,r,s,a,i,o,u){return t(e,r,u)}}function De(t){var e=t.circular,r=t.comparator,s=t.createState,a=t.equals,i=t.strict;if(s)return function(c,p){var n=s(),l=n.cache,h=l===void 0?e?new WeakMap:void 0:l,d=n.meta;return r(c,p,{cache:h,equals:a,meta:d,strict:i})};if(e)return function(c,p){return r(c,p,{cache:new WeakMap,equals:a,meta:void 0,strict:i})};var o={cache:void 0,equals:a,meta:void 0,strict:i};return function(c,p){return r(c,p,o)}}var xe=N();N({strict:!0});N({circular:!0});N({circular:!0,strict:!0});N({createInternalComparator:function(){return b}});N({strict:!0,createInternalComparator:function(){return b}});N({circular:!0,createInternalComparator:function(){return b}});N({circular:!0,createInternalComparator:function(){return b},strict:!0});function N(t){t===void 0&&(t={});var e=t.circular,r=e===void 0?!1:e,s=t.createInternalComparator,a=t.createState,i=t.strict,o=i===void 0?!1:i,u=Re(t),c=Te(u),p=s?s(c):Ie(c);return De({circular:r,comparator:c,createState:a,equals:p,strict:o})}function ze(t,e){return xe(t,e)}function E(t,e,r){return JSON.stringify(t,(a,i)=>{let o=i;return e&&(o=e(a,o)),o===void 0&&(o=null),o},r)}function _(t,e){function r(a){return Object.keys(a).forEach(i=>{a[i]===null?a[i]=void 0:typeof a[i]=="object"&&(a[i]=r(a[i]))}),a}const s=JSON.parse(t,e);if(s!==null)return typeof s=="object"?r(s):s}function Be(t){try{const e=E(t);return e===E(_(e))}catch{return!1}}const Je=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),V={title:"Platform.Bible menus",type:"object",properties:{mainMenu:{description:"Top level menu for the application",$ref:"#/$defs/multiColumnMenu"},defaultWebViewTopMenu:{description:"Default top menu for web views that don't specify their own",$ref:"#/$defs/multiColumnMenu"},defaultWebViewContextMenu:{description:"Default context menu for web views that don't specify their own",$ref:"#/$defs/singleColumnMenu"},webViewMenus:{description:"Menus that apply per web view in the application",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{$ref:"#/$defs/menusForOneWebView"}},additionalProperties:!1}},required:["mainMenu","defaultWebViewTopMenu","defaultWebViewContextMenu","webViewMenus"],additionalProperties:!1,$defs:{localizeKey:{description:"Identifier for a string that will be localized in a menu based on the user's UI language",type:"string",pattern:"^%[\\w\\-\\.]+%$"},referencedItem:{description:"Name of some UI element (i.e., tab, column, group, menu item) or some PAPI object (i.e., command)",type:"string",pattern:"^[\\w\\-]+\\.[\\w\\-]+$"},columnsWithHeaders:{description:"Group of columns that can be combined with other columns to form a multi-column menu",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{description:"Single column with a header string",type:"object",properties:{label:{description:"Header text for this this column in the UI",$ref:"#/$defs/localizeKey"},localizeNotes:{description:"Additional information provided by developers to help people who perform localization",type:"string"},order:{description:"Relative order of this column compared to other columns (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu groups to this column",type:"boolean"}},required:["label","order"],additionalProperties:!1}},properties:{isExtensible:{description:"Defines whether contributions are allowed to add columns to this multi-column menu",type:"boolean"}}},menuGroups:{description:"Group of menu items that can be combined with other groups to form a single menu/submenu. Groups are separated using a line within the menu/submenu.",type:"object",patternProperties:{"^[\\w\\-]+\\.[\\w\\-]+$":{description:"Single group that contains menu items",type:"object",oneOf:[{properties:{column:{description:"Column where this group belongs, not required for single column menus",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this group compared to other groups in the same column or submenu (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu items to this menu group",type:"boolean"}},required:["order"],additionalProperties:!1},{properties:{menuItem:{description:"Menu item that anchors the submenu where this group belongs",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this group compared to other groups in the same column or submenu (sorted ascending)",type:"number"},isExtensible:{description:"Defines whether contributions are allowed to add menu items to this menu group",type:"boolean"}},required:["menuItem","order"],additionalProperties:!1}]}},additionalProperties:!1},menuItem:{description:"Single item in a menu that can be clicked on to take an action or can be the parent of a submenu",type:"object",oneOf:[{properties:{id:{description:"ID for this menu item that holds a submenu",$ref:"#/$defs/referencedItem"}},required:["id"]},{properties:{command:{description:"Name of the PAPI command to run when this menu item is selected.",$ref:"#/$defs/referencedItem"},iconPathBefore:{description:"Path to the icon to display before the menu text",type:"string"},iconPathAfter:{description:"Path to the icon to display after the menu text",type:"string"}},required:["command"]}],properties:{label:{description:"Key that represents the text of this menu item to display",$ref:"#/$defs/localizeKey"},tooltip:{description:"Key that represents the text to display if a mouse pointer hovers over the menu item",$ref:"#/$defs/localizeKey"},searchTerms:{description:"Key that represents additional words the platform should reference when users are searching for menu items",$ref:"#/$defs/localizeKey"},localizeNotes:{description:"Additional information provided by developers to help people who perform localization",type:"string"},group:{description:"Group to which this menu item belongs",$ref:"#/$defs/referencedItem"},order:{description:"Relative order of this menu item compared to other menu items in the same group (sorted ascending)",type:"number"}},required:["label","group","order"],unevaluatedProperties:!1},groupsAndItems:{description:"Core schema for a column",type:"object",properties:{groups:{description:"Groups that belong in this menu",$ref:"#/$defs/menuGroups"},items:{description:"List of menu items that belong in this menu",type:"array",items:{$ref:"#/$defs/menuItem"},uniqueItems:!0}},required:["groups","items"]},singleColumnMenu:{description:"Menu that contains a column without a header",type:"object",allOf:[{$ref:"#/$defs/groupsAndItems"}],unevaluatedProperties:!1},multiColumnMenu:{description:"Menu that can contain multiple columns with headers",type:"object",allOf:[{$ref:"#/$defs/groupsAndItems"},{properties:{columns:{description:"Columns that belong in this menu",$ref:"#/$defs/columnsWithHeaders"}},required:["columns"]}],unevaluatedProperties:!1},menusForOneWebView:{description:"Set of menus that are associated with a single tab",type:"object",properties:{includeDefaults:{description:"Indicates whether the platform default menus should be included for this webview",type:"boolean"},topMenu:{description:"Menu that opens when you click on the top left corner of a tab",$ref:"#/$defs/multiColumnMenu"},contextMenu:{description:"Menu that opens when you right click on the main body/area of a tab",$ref:"#/$defs/singleColumnMenu"}},additionalProperties:!1}}};Object.freeze(V);exports.AsyncVariable=L;exports.DocumentCombinerEngine=re;exports.FIRST_SCR_BOOK_NUM=D;exports.FIRST_SCR_CHAPTER_NUM=z;exports.FIRST_SCR_VERSE_NUM=B;exports.LAST_SCR_BOOK_NUM=x;exports.PlatformEventEmitter=oe;exports.UnsubscriberAsyncList=ie;exports.aggregateUnsubscriberAsyncs=he;exports.aggregateUnsubscribers=ce;exports.debounce=k;exports.deepClone=v;exports.deepEqual=ze;exports.deserialize=_;exports.getAllObjectFunctionNames=te;exports.getChaptersForBook=J;exports.getErrorMessage=Y;exports.groupBy=Z;exports.htmlEncode=Je;exports.isSerializable=Be;exports.isString=P;exports.menuDocumentSchema=V;exports.newGuid=W;exports.offsetBook=ne;exports.offsetChapter=ue;exports.offsetVerse=le;exports.serialize=E;exports.wait=T;exports.waitForDuration=ee;
//# sourceMappingURL=index.cjs.map
