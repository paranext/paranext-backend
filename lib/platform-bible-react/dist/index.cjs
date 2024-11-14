"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),y=require("react"),ne=require("lucide-react"),lt=require("clsx"),zl=require("tailwind-merge"),ma=require("@radix-ui/react-dropdown-menu"),K=require("platform-bible-utils"),Fl=require("@radix-ui/react-slot"),lr=require("class-variance-authority"),Gl=require("@radix-ui/react-label"),Ul=require("@radix-ui/react-radio-group"),ql=require("@radix-ui/react-popover"),Oe=require("cmdk"),Hl=require("@radix-ui/react-dialog"),Ee=require("@tanstack/react-table"),Xl=require("@radix-ui/react-select"),Wl=require("@radix-ui/react-checkbox"),Yl=require("@radix-ui/react-toggle-group"),Kl=require("@radix-ui/react-toggle"),Jl=require("@radix-ui/react-tabs"),Zl=require("@radix-ui/react-separator"),Jr=require("@mui/styled-engine"),Ie=require("@mui/material"),pn=require("react-dom"),ha=require("sonner"),Ql=require("@radix-ui/react-slider"),ec=require("@radix-ui/react-switch"),tc=require("@radix-ui/react-tooltip");function Ne(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const A=Ne(y),fe=Ne(ma),ga=Ne(Gl),kn=Ne(Ul),Nn=Ne(ql),We=Ne(Hl),be=Ne(Xl),Zr=Ne(Wl),cr=Ne(Yl),ba=Ne(Kl),Re=Ne(Jl),va=Ne(Zl),nc=Ne(pn),fn=Ne(Ql),Qr=Ne(ec),jn=Ne(tc);const rc=zl.extendTailwindMerge({prefix:"tw-"});function j(...e){return rc(lt.clsx(e))}const Kt=y.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:j("pr-twp tw-flex tw-h-10 tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium file:tw-text-foreground placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),ref:r,...n}));Kt.displayName="Input";const oc=y.forwardRef(({handleSearch:e,handleKeyDown:t,handleOnClick:n,handleSubmit:r,...o},s)=>a.jsxs("div",{className:"tw-relative",children:[a.jsx(Kt,{...o,type:"text",className:"tw-box-border tw-gap-2.5 tw-rounded-lg tw-border tw-border-solid tw-bg-background tw-py-2 tw-pl-4 tw-pr-3 tw-font-medium tw-shadow-none tw-outline-none",onChange:i=>e(i.target.value),onKeyDown:i=>{i.key==="Enter"&&r(),t(i)},onClick:n,ref:s}),a.jsx(ne.History,{className:"tw-absolute tw-right-3 tw-top-1/2 tw-h-4 tw-w-4 tw--translate-y-1/2 tw-transform tw-cursor-pointer tw-text-muted-foreground",onClick:()=>{console.log("back in history")}})]}));var sc=Object.defineProperty,ac=(e,t,n)=>t in e?sc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,re=(e,t,n)=>ac(e,typeof t!="symbol"?t+"":t,n);const kt=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA","1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JON","MIC","NAM","HAB","ZEP","HAG","ZEC","MAL","MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV","TOB","JDT","ESG","WIS","SIR","BAR","LJE","S3Y","SUS","BEL","1MA","2MA","3MA","4MA","1ES","2ES","MAN","PS2","ODA","PSS","JSA","JDB","TBS","SST","DNT","BLT","XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","3ES","EZA","5EZ","6EZ","INT","CNC","GLO","TDX","NDX","DAG","PS3","2BA","LBA","JUB","ENO","1MQ","2MQ","3MQ","REP","4BA","LAO"],wo=["XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","INT","CNC","GLO","TDX","NDX"],ya=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther (Hebrew)","Job","Psalms","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel (Hebrew)","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation","Tobit","Judith","Esther Greek","Wisdom of Solomon","Sirach (Ecclesiasticus)","Baruch","Letter of Jeremiah","Song of 3 Young Men","Susanna","Bel and the Dragon","1 Maccabees","2 Maccabees","3 Maccabees","4 Maccabees","1 Esdras (Greek)","2 Esdras (Latin)","Prayer of Manasseh","Psalm 151","Odes","Psalms of Solomon","Joshua A. *obsolete*","Judges B. *obsolete*","Tobit S. *obsolete*","Susanna Th. *obsolete*","Daniel Th. *obsolete*","Bel Th. *obsolete*","Extra A","Extra B","Extra C","Extra D","Extra E","Extra F","Extra G","Front Matter","Back Matter","Other Matter","3 Ezra *obsolete*","Apocalypse of Ezra","5 Ezra (Latin Prologue)","6 Ezra (Latin Epilogue)","Introduction","Concordance ","Glossary ","Topical Index","Names Index","Daniel Greek","Psalms 152-155","2 Baruch (Apocalypse)","Letter of Baruch","Jubilees","Enoch","1 Meqabyan","2 Meqabyan","3 Meqabyan","Reproof (Proverbs 25-31)","4 Baruch (Rest of Baruch)","Laodiceans"],fs=hc();function Jt(e,t=!0){return t&&(e=e.toUpperCase()),e in fs?fs[e]:0}function mo(e){return Jt(e)>0}function ic(e){const t=typeof e=="string"?Jt(e):e;return t>=40&&t<=66}function lc(e){return(typeof e=="string"?Jt(e):e)<=39}function xa(e){return e<=66}function cc(e){const t=typeof e=="string"?Jt(e):e;return Ea(t)&&!xa(t)}function*dc(){for(let e=1;e<=kt.length;e++)yield e}const uc=1,ka=kt.length;function pc(){return["XXA","XXB","XXC","XXD","XXE","XXF","XXG"]}function ho(e,t="***"){const n=e-1;return n<0||n>=kt.length?t:kt[n]}function Na(e){return e<=0||e>ka?"******":ya[e-1]}function fc(e){return Na(Jt(e))}function Ea(e){const t=typeof e=="number"?ho(e):e;return mo(t)&&!wo.includes(t)}function wc(e){const t=typeof e=="number"?ho(e):e;return mo(t)&&wo.includes(t)}function mc(e){return ya[e-1].includes("*obsolete*")}function hc(){const e={};for(let t=0;t<kt.length;t++)e[kt[t]]=t+1;return e}const ae={allBookIds:kt,nonCanonicalIds:wo,bookIdToNumber:Jt,isBookIdValid:mo,isBookNT:ic,isBookOT:lc,isBookOTNT:xa,isBookDC:cc,allBookNumbers:dc,firstBook:uc,lastBook:ka,extraBooks:pc,bookNumberToId:ho,bookNumberToEnglishName:Na,bookIdToEnglishName:fc,isCanonical:Ea,isExtraMaterial:wc,isObsolete:mc};var He=(e=>(e[e.Unknown=0]="Unknown",e[e.Original=1]="Original",e[e.Septuagint=2]="Septuagint",e[e.Vulgate=3]="Vulgate",e[e.English=4]="English",e[e.RussianProtestant=5]="RussianProtestant",e[e.RussianOrthodox=6]="RussianOrthodox",e))(He||{});const _e=class{constructor(t){if(re(this,"name"),re(this,"fullPath"),re(this,"isPresent"),re(this,"hasVerseSegments"),re(this,"isCustomized"),re(this,"baseVersification"),re(this,"scriptureBooks"),re(this,"_type"),t==null)throw new Error("Argument undefined");typeof t=="string"?(this.name=t,this._type=He[t]):(this._type=t,this.name=He[t])}get type(){return this._type}equals(t){return!t.type||!this.type?!1:t.type===this.type}};re(_e,"Original",new _e(He.Original)),re(_e,"Septuagint",new _e(He.Septuagint)),re(_e,"Vulgate",new _e(He.Vulgate)),re(_e,"English",new _e(He.English)),re(_e,"RussianProtestant",new _e(He.RussianProtestant)),re(_e,"RussianOrthodox",new _e(He.RussianOrthodox));let mt=_e;function ws(e,t){const n=t[0];for(let r=1;r<t.length;r++)e=e.split(t[r]).join(n);return e.split(n)}var Sa=(e=>(e[e.Valid=0]="Valid",e[e.UnknownVersification=1]="UnknownVersification",e[e.OutOfRange=2]="OutOfRange",e[e.VerseOutOfOrder=3]="VerseOutOfOrder",e[e.VerseRepeated=4]="VerseRepeated",e))(Sa||{});const Te=class oe{constructor(t,n,r,o){if(re(this,"firstChapter"),re(this,"lastChapter"),re(this,"lastVerse"),re(this,"hasSegmentsDefined"),re(this,"text"),re(this,"BBBCCCVVVS"),re(this,"longHashCode"),re(this,"versification"),re(this,"rtlMark","‏"),re(this,"_bookNum",0),re(this,"_chapterNum",0),re(this,"_verseNum",0),re(this,"_verse"),r==null&&o==null)if(t!=null&&typeof t=="string"){const s=t,i=n!=null&&n instanceof mt?n:void 0;this.setEmpty(i),this.parse(s)}else if(t!=null&&typeof t=="number"){const s=n!=null&&n instanceof mt?n:void 0;this.setEmpty(s),this._verseNum=t%oe.chapterDigitShifter,this._chapterNum=Math.floor(t%oe.bookDigitShifter/oe.chapterDigitShifter),this._bookNum=Math.floor(t/oe.bookDigitShifter)}else if(n==null)if(t!=null&&t instanceof oe){const s=t;this._bookNum=s.bookNum,this._chapterNum=s.chapterNum,this._verseNum=s.verseNum,this._verse=s.verse,this.versification=s.versification}else{if(t==null)return;const s=t instanceof mt?t:oe.defaultVersification;this.setEmpty(s)}else throw new Error("VerseRef constructor not supported.");else if(t!=null&&n!=null&&r!=null)if(typeof t=="string"&&typeof n=="string"&&typeof r=="string")this.setEmpty(o),this.updateInternal(t,n,r);else if(typeof t=="number"&&typeof n=="number"&&typeof r=="number")this._bookNum=t,this._chapterNum=n,this._verseNum=r,this.versification=o??oe.defaultVersification;else throw new Error("VerseRef constructor not supported.");else throw new Error("VerseRef constructor not supported.")}static isVerseParseable(t){return t.length>0&&"0123456789".includes(t[0])&&!t.endsWith(this.verseRangeSeparator)&&!t.endsWith(this.verseSequenceIndicator)}static tryParse(t){let n;try{return n=new oe(t),{success:!0,verseRef:n}}catch(r){if(r instanceof sn)return n=new oe,{success:!1,verseRef:n};throw r}}static getBBBCCCVVV(t,n,r){return t%oe.bcvMaxValue*oe.bookDigitShifter+(n>=0?n%oe.bcvMaxValue*oe.chapterDigitShifter:0)+(r>=0?r%oe.bcvMaxValue:0)}static fromJSON(t){const{book:n,chapterNum:r,verseNum:o,verse:s,versificationStr:i}=t,l=s||o.toString();let d;return i&&(d=new mt(i)),n?new oe(n,r.toString(),l,d):new oe}static tryGetVerseNum(t){let n;if(!t)return n=-1,{success:!0,vNum:n};n=0;let r;for(let o=0;o<t.length;o++){if(r=t[o],r<"0"||r>"9")return o===0&&(n=-1),{success:!1,vNum:n};if(n=n*10+ +r-0,n>oe.bcvMaxValue)return n=-1,{success:!1,vNum:n}}return{success:!0,vNum:n}}get isDefault(){return this.bookNum===0&&this.chapterNum===0&&this.verseNum===0&&this.versification==null}get hasMultiple(){return this._verse!=null&&(this._verse.includes(oe.verseRangeSeparator)||this._verse.includes(oe.verseSequenceIndicator))}get book(){return ae.bookNumberToId(this.bookNum,"")}set book(t){this.bookNum=ae.bookIdToNumber(t)}get chapter(){return this.isDefault||this._chapterNum<0?"":this._chapterNum.toString()}set chapter(t){const n=+t;this._chapterNum=Number.isInteger(n)?n:-1}get verse(){return this._verse!=null?this._verse:this.isDefault||this._verseNum<0?"":this._verseNum.toString()}set verse(t){const{success:n,vNum:r}=oe.tryGetVerseNum(t);this._verse=n?void 0:t.replace(this.rtlMark,""),this._verseNum=r,!(this._verseNum>=0)&&({vNum:this._verseNum}=oe.tryGetVerseNum(this._verse))}get bookNum(){return this._bookNum}set bookNum(t){if(t<=0||t>ae.lastBook)throw new sn("BookNum must be greater than zero and less than or equal to last book");this._bookNum=t}get chapterNum(){return this._chapterNum}set chapterNum(t){this.chapterNum=t}get verseNum(){return this._verseNum}set verseNum(t){this._verseNum=t}get versificationStr(){var t;return(t=this.versification)==null?void 0:t.name}set versificationStr(t){this.versification=this.versification!=null?new mt(t):void 0}get valid(){return this.validStatus===0}get validStatus(){return this.validateVerse(oe.verseRangeSeparators,oe.verseSequenceIndicators)}get BBBCCC(){return oe.getBBBCCCVVV(this._bookNum,this._chapterNum,0)}get BBBCCCVVV(){return oe.getBBBCCCVVV(this._bookNum,this._chapterNum,this._verseNum)}get isExcluded(){return!1}parse(t){if(t=t.replace(this.rtlMark,""),t.includes("/")){const s=t.split("/");if(t=s[0],s.length>1)try{const i=+s[1].trim();this.versification=new mt(He[i])}catch{throw new sn("Invalid reference : "+t)}}const n=t.trim().split(" ");if(n.length!==2)throw new sn("Invalid reference : "+t);const r=n[1].split(":"),o=+r[0];if(r.length!==2||ae.bookIdToNumber(n[0])===0||!Number.isInteger(o)||o<0||!oe.isVerseParseable(r[1]))throw new sn("Invalid reference : "+t);this.updateInternal(n[0],r[0],r[1])}simplify(){this._verse=void 0}clone(){return new oe(this)}toString(){const t=this.book;return t===""?"":`${t} ${this.chapter}:${this.verse}`}toJSON(){let t=this.verse;(t===""||t===this.verseNum.toString())&&(t=void 0);const n={book:this.book,chapterNum:this.chapterNum,verseNum:this.verseNum,verse:t,versificationStr:this.versificationStr};return t||delete n.verse,n}equals(t){return t instanceof oe?t._bookNum===this._bookNum&&t._chapterNum===this._chapterNum&&t._verseNum===this._verseNum&&t.verse===this.verse&&(t.versification==null&&this.versification==null||t.versification!=null&&this.versification!=null&&t.versification.equals(this.versification)):!1}allVerses(t=!1,n=oe.verseRangeSeparators,r=oe.verseSequenceIndicators){if(this._verse==null||this.chapterNum<=0)return[this.clone()];const o=[],s=ws(this._verse,r);for(const i of s.map(l=>ws(l,n))){const l=this.clone();l.verse=i[0];const d=l.verseNum;if(o.push(l),i.length>1){const u=this.clone();if(u.verse=i[1],!t)for(let p=d+1;p<u.verseNum;p++){const b=new oe(this._bookNum,this._chapterNum,p,this.versification);this.isExcluded||o.push(b)}o.push(u)}}return o}validateVerse(t,n){if(!this.verse)return this.internalValid;let r=0;for(const o of this.allVerses(!0,t,n)){const s=o.internalValid;if(s!==0)return s;const i=o.BBBCCCVVV;if(r>i)return 3;if(r===i)return 4;r=i}return 0}get internalValid(){return this.versification==null?1:this._bookNum<=0||this._bookNum>ae.lastBook?2:(ae.isCanonical(this._bookNum),0)}setEmpty(t=oe.defaultVersification){this._bookNum=0,this._chapterNum=-1,this._verse=void 0,this.versification=t}updateInternal(t,n,r){this.bookNum=ae.bookIdToNumber(t),this.chapter=n,this.verse=r}};re(Te,"defaultVersification",mt.English),re(Te,"verseRangeSeparator","-"),re(Te,"verseSequenceIndicator",","),re(Te,"verseRangeSeparators",[Te.verseRangeSeparator]),re(Te,"verseSequenceIndicators",[Te.verseSequenceIndicator]),re(Te,"chapterDigitShifter",1e3),re(Te,"bookDigitShifter",Te.chapterDigitShifter*Te.chapterDigitShifter),re(Te,"bcvMaxValue",Te.chapterDigitShifter-1),re(Te,"ValidStatusType",Sa);let sn=class extends Error{};const dr=fe.Root,go=fe.Trigger,Ta=fe.Group,gc=fe.Portal,bc=fe.Sub,vc=fe.RadioGroup,Ca=y.forwardRef(({className:e,inset:t,children:n,...r},o)=>a.jsxs(fe.SubTrigger,{ref:o,className:j("tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent data-[state=open]:tw-bg-accent",t&&"tw-pl-8",e),...r,children:[n,a.jsx(ne.ChevronRight,{className:"tw-ml-auto tw-h-4 tw-w-4"})]}));Ca.displayName=fe.SubTrigger.displayName;const ja=y.forwardRef(({className:e,...t},n)=>a.jsx(fe.SubContent,{ref:n,className:j("tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...t}));ja.displayName=fe.SubContent.displayName;const On=y.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(fe.Portal,{children:a.jsx(fe.Content,{ref:r,sideOffset:t,className:j("pr-twp tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...n})}));On.displayName=fe.Content.displayName;const bo=y.forwardRef(({className:e,inset:t,...n},r)=>a.jsx(fe.Item,{ref:r,className:j("tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",t&&"tw-pl-8",e),...n}));bo.displayName=fe.Item.displayName;const ur=y.forwardRef(({className:e,children:t,checked:n,...r},o)=>a.jsxs(fe.CheckboxItem,{ref:o,className:j("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),checked:n,...r,children:[a.jsx("span",{className:"tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center",children:a.jsx(fe.ItemIndicator,{children:a.jsx(ne.Check,{className:"tw-h-4 tw-w-4"})})}),t]}));ur.displayName=fe.CheckboxItem.displayName;const vo=y.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(fe.RadioItem,{ref:r,className:j("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),...n,children:[a.jsx("span",{className:"tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center",children:a.jsx(fe.ItemIndicator,{children:a.jsx(ne.Circle,{className:"tw-h-2 tw-w-2 tw-fill-current"})})}),t]}));vo.displayName=fe.RadioItem.displayName;const Zt=y.forwardRef(({className:e,inset:t,...n},r)=>a.jsx(fe.Label,{ref:r,className:j("tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold",t&&"tw-pl-8",e),...n}));Zt.displayName=fe.Label.displayName;const Rn=y.forwardRef(({className:e,...t},n)=>a.jsx(fe.Separator,{ref:n,className:j("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted",e),...t}));Rn.displayName=fe.Separator.displayName;function Oa({className:e,...t}){return a.jsx("span",{className:j("tw-ml-auto tw-text-xs tw-tracking-widest tw-opacity-60",e),...t})}Oa.displayName="DropdownMenuShortcut";const yc=y.forwardRef(({bookId:e,handleSelectBook:t,isSelected:n,handleHighlightBook:r,handleKeyDown:o,bookType:s,children:i},l)=>a.jsxs(bo,{ref:l,textValue:e,className:j("tw-mx-1 tw-px-1 tw-font-normal tw-text-foreground/80",{"tw-bg-amber-50 tw-text-yellow-900 data-[highlighted]:tw-bg-amber-100":n}),onSelect:d=>{d.preventDefault(),t()},onKeyDown:d=>{o(d)},onFocus:r,onMouseMove:r,children:[a.jsx("span",{className:j("tw-border-b-0 tw-border-l-2 tw-border-r-0 tw-border-t-0 tw-border-solid tw-px-2",{"tw-font-bold":n,"tw-border-l-red-200":s.toLowerCase()==="ot","tw-border-l-purple-200":s.toLowerCase()==="nt","tw-border-l-indigo-200":s.toLowerCase()==="dc"}),children:ae.bookIdToEnglishName(e)}),n&&a.jsx("div",{children:i})]},e));function xc({handleSelectChapter:e,endChapter:t,activeChapter:n,highlightedChapter:r,handleHighlightedChapter:o}){const s=Array.from({length:t},(l,d)=>d+1),i=y.useCallback(l=>{o(l)},[o]);return a.jsx("div",{className:j("tw-flex tw-flex-wrap tw-items-start tw-justify-start tw-self-stretch"),children:s.map(l=>a.jsx("div",{className:j("tw-box-content tw-flex tw-h-4 tw-w-4 tw-cursor-pointer tw-items-center tw-justify-end tw-rounded-md tw-p-2 tw-text-amber-800",{"tw-font-semibold tw-text-amber-900":l===n,"tw-bg-amber-200":l===r}),onClick:d=>{d.preventDefault(),d.stopPropagation(),e(l)},role:"button",onKeyDown:d=>{d.key==="Enter"&&e(l)},tabIndex:0,onMouseMove:()=>i(l),children:l},l))})}function kc({handleSort:e,handleLocationHistory:t,handleBookmarks:n}){return a.jsxs(Zt,{className:"tw-flex tw-justify-between",children:[a.jsx("p",{className:"tw-inline-block tw-align-middle",children:"Go To"}),a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(ne.ArrowDownWideNarrow,{onClick:e,className:"tw-m-2 tw-h-4 tw-w-4 tw-cursor-pointer tw-gap-2"}),a.jsx(ne.Clock,{onClick:t,className:"tw-m-2 tw-h-4 tw-w-4 tw-cursor-pointer tw-gap-2"}),a.jsx(ne.Bookmark,{onClick:n,className:"tw-m-2 tw-h-4 tw-w-4 tw-cursor-pointer tw-gap-2"})]})]})}const gn=ae.allBookIds,Nc={OT:"Old Testament",NT:"New Testament",DC:"Deuterocanon"},ms=["OT","NT","DC"],Ec=32+32+32,Sc=[/^(\w+)$/i,/^(\w+)(?:\s(\d+))$/i,/^(\w+)(?:\s(\d+):(\d+))$/i],Tc=e=>({OT:gn.filter(n=>ae.isBookOT(n)),NT:gn.filter(n=>ae.isBookNT(n)),DC:gn.filter(n=>ae.isBookDC(n))})[e],an=e=>K.getChaptersForBook(ae.bookIdToNumber(e));function Cc(){return gn.map(t=>ae.bookIdToEnglishName(t))}function jc(e){return Cc().includes(e)}function Oc(e){const t=e.toLowerCase().replace(/^\w/,n=>n.toUpperCase());if(jc(t))return gn.find(r=>ae.bookIdToEnglishName(r)===t)}function Rc({scrRef:e,handleSubmit:t}){const[n,r]=y.useState(""),[o,s]=y.useState(ae.bookNumberToId(e.bookNum)),[i,l]=y.useState(e.chapterNum??0),[d,u]=y.useState(ae.bookNumberToId(e.bookNum)),[p,b]=y.useState(!1),[c,m]=y.useState(p),f=y.useRef(void 0),h=y.useRef(void 0),g=y.useRef(void 0),k=y.useCallback(E=>Tc(E).filter(D=>{const M=ae.bookIdToEnglishName(D).toLowerCase(),J=n.replace(/[^a-zA-Z]/g,"").toLowerCase();return M.includes(J)||D.toLowerCase().includes(J)}),[n]),C=E=>{r(E)},S=y.useRef(!1),N=y.useCallback(E=>{if(S.current){S.current=!1;return}b(E)},[]),v=y.useCallback((E,D,M,J)=>{if(l(ae.bookNumberToId(e.bookNum)!==E?1:e.chapterNum),D||an(E)===-1){t({bookNum:ae.bookIdToNumber(E),chapterNum:M||1,verseNum:J||1}),b(!1),r("");return}s(o!==E?E:""),b(!D)},[t,e.bookNum,e.chapterNum,o]),O=E=>{E<=0||E>an(o)||v(o,!0,E)},_=y.useCallback(()=>{Sc.forEach(E=>{const D=n.match(E);if(D){const[M,J=void 0,Y=void 0]=D.slice(1),U=Oc(M);(ae.isBookIdValid(M)||U)&&v(U??M,!0,J?parseInt(J,10):1,Y?parseInt(Y,10):1)}})},[v,n]),B=y.useCallback(E=>{p?(E.key==="ArrowDown"||E.key==="ArrowUp")&&(typeof g<"u"&&g.current!==null?g.current.focus():typeof h<"u"&&h.current!==null&&h.current.focus(),E.preventDefault()):b(!0)},[p]),T=E=>{const{key:D}=E;D==="ArrowRight"||D==="ArrowLeft"||D==="ArrowDown"||D==="ArrowUp"||D==="Enter"||(f.current.dispatchEvent(new KeyboardEvent("keydown",{key:D})),f.current.focus())},P=E=>{const{key:D}=E;if(d===o){if(D==="Enter"){E.preventDefault(),v(o,!0,i);return}let M=0;if(D==="ArrowRight")if(i<an(d))M=1;else{E.preventDefault();return}else if(D==="ArrowLeft")if(i>1)M=-1;else{E.preventDefault();return}else D==="ArrowDown"?M=6:D==="ArrowUp"&&(M=-6);i+M<=0||i+M>an(d)?l(0):M!==0&&(l(i+M),E.preventDefault())}};return y.useEffect(()=>{o===d?o===ae.bookNumberToId(e.bookNum)?l(e.chapterNum):l(1):l(0)},[d,e.bookNum,e.chapterNum,o]),y.useLayoutEffect(()=>{m(p)},[p]),y.useLayoutEffect(()=>{const E=setTimeout(()=>{if(c&&h.current&&g.current){const M=g.current.offsetTop-Ec;h.current.scrollTo({top:M,behavior:"instant"})}},10);return()=>{clearTimeout(E)}},[c]),a.jsx("div",{className:"pr-twp tw-flex",children:a.jsxs(dr,{modal:!1,open:p,onOpenChange:N,children:[a.jsx(go,{asChild:!0,children:a.jsx(oc,{ref:f,value:n,handleSearch:C,handleKeyDown:B,handleOnClick:()=>{s(ae.bookNumberToId(e.bookNum)),u(ae.bookNumberToId(e.bookNum)),l(e.chapterNum>0?e.chapterNum:0),b(!0),f.current.focus()},onFocus:()=>{S.current=!0},handleSubmit:_,placeholder:`${ae.bookNumberToEnglishName(e.bookNum)} ${e.chapterNum}:${e.verseNum}`})}),a.jsxs(On,{className:"tw-m-1 tw-overflow-y-auto tw-p-0 tw-font-normal tw-text-foreground/80",style:{width:"233px",maxHeight:"500px",zIndex:"250"},onKeyDown:T,align:"start",ref:h,children:[a.jsx(kc,{handleSort:()=>console.log("sorting"),handleLocationHistory:()=>console.log("location history"),handleBookmarks:()=>console.log("bookmarks")}),ms.map((E,D)=>k(E).length>0&&a.jsxs("div",{children:[a.jsx(Zt,{className:"tw-font-semibold tw-text-foreground/80",children:Nc[E]}),k(E).map(M=>a.jsx("div",{children:a.jsx(yc,{bookId:M,handleSelectBook:()=>v(M,!1),isSelected:o===M,handleHighlightBook:()=>u(M),handleKeyDown:P,bookType:E,ref:J=>{o===M&&(g.current=J)},children:a.jsx(xc,{handleSelectChapter:O,endChapter:an(M),activeChapter:e.bookNum===ae.bookIdToNumber(M)?e.chapterNum:0,highlightedChapter:i,handleHighlightedChapter:J=>{l(J)}})})},M)),ms.length-1!==D?a.jsx(Rn,{}):void 0]},E))]})]})})}const Ra=lr.cva("pr-twp tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50",{variants:{variant:{default:"tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary/90",destructive:"tw-bg-destructive tw-text-destructive-foreground hover:tw-bg-destructive/90",outline:"tw-border tw-border-input tw-bg-background hover:tw-bg-accent hover:tw-text-accent-foreground",secondary:"tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/80",ghost:"hover:tw-bg-accent hover:tw-text-accent-foreground",link:"tw-text-primary tw-underline-offset-4 hover:tw-underline"},size:{default:"tw-h-10 tw-px-4 tw-py-2",sm:"tw-h-9 tw-rounded-md tw-px-3",lg:"tw-h-11 tw-rounded-md tw-px-8",icon:"tw-h-10 tw-w-10"}},defaultVariants:{variant:"default",size:"default"}}),ge=y.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},s)=>{const i=r?Fl.Slot:"button";return a.jsx(i,{className:j(Ra({variant:t,size:n,className:e})),ref:s,...o})});ge.displayName="Button";const Pc=lr.cva("tw-text-sm tw-font-medium tw-leading-none peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"),qe=y.forwardRef(({className:e,...t},n)=>a.jsx(ga.Root,{ref:n,className:j("pr-twp",Pc(),e),...t}));qe.displayName=ga.Root.displayName;const yo=y.forwardRef(({className:e,...t},n)=>a.jsx(kn.Root,{className:j("pr-twp tw-grid tw-gap-2",e),...t,ref:n}));yo.displayName=kn.Root.displayName;const er=y.forwardRef(({className:e,...t},n)=>a.jsx(kn.Item,{ref:n,className:j("pr-twp tw-aspect-square tw-h-4 tw-w-4 tw-rounded-full tw-border tw-border-primary tw-text-primary tw-ring-offset-background focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),...t,children:a.jsx(kn.Indicator,{className:"tw-flex tw-items-center tw-justify-center",children:a.jsx(ne.Circle,{className:"tw-h-2.5 tw-w-2.5 tw-fill-current tw-text-current"})})}));er.displayName=kn.Item.displayName;const _c=Nn.Root,$c=Nn.Trigger,Pa=y.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},o)=>a.jsx(Nn.Portal,{children:a.jsx(Nn.Content,{ref:o,align:t,sideOffset:n,className:j("pr-twp tw-z-50 tw-w-72 tw-rounded-md tw-border tw-bg-popover tw-p-4 tw-text-popover-foreground tw-shadow-md tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...r})}));Pa.displayName=Nn.Content.displayName;const Ic=We.Portal,_a=y.forwardRef(({className:e,...t},n)=>a.jsx(We.Overlay,{ref:n,className:j("tw-fixed tw-inset-0 tw-z-50 tw-bg-black/80 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0",e),...t}));_a.displayName=We.Overlay.displayName;const Mc=y.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(Ic,{children:[a.jsx(_a,{}),a.jsxs(We.Content,{ref:r,className:j("tw-fixed tw-left-[50%] tw-top-[50%] tw-z-50 tw-grid tw-w-full tw-max-w-lg tw-translate-x-[-50%] tw-translate-y-[-50%] tw-gap-4 tw-border tw-bg-background tw-p-6 tw-shadow-lg tw-duration-200 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[state=closed]:tw-slide-out-to-left-1/2 data-[state=closed]:tw-slide-out-to-top-[48%] data-[state=open]:tw-slide-in-from-left-1/2 data-[state=open]:tw-slide-in-from-top-[48%] sm:tw-rounded-lg",e),...n,children:[t,a.jsxs(We.Close,{className:"tw-absolute tw-right-4 tw-top-4 tw-rounded-sm tw-opacity-70 tw-ring-offset-background tw-transition-opacity hover:tw-opacity-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2 disabled:tw-pointer-events-none data-[state=open]:tw-bg-accent data-[state=open]:tw-text-muted-foreground",children:[a.jsx(ne.X,{className:"tw-h-4 tw-w-4"}),a.jsx("span",{className:"tw-sr-only",children:"Close"})]})]})]}));Mc.displayName=We.Content.displayName;const Ac=y.forwardRef(({className:e,...t},n)=>a.jsx(We.Title,{ref:n,className:j("tw-text-lg tw-font-semibold tw-leading-none tw-tracking-tight",e),...t}));Ac.displayName=We.Title.displayName;const Dc=y.forwardRef(({className:e,...t},n)=>a.jsx(We.Description,{ref:n,className:j("tw-text-sm tw-text-muted-foreground",e),...t}));Dc.displayName=We.Description.displayName;const $a=y.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Command,{ref:n,className:j("tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-md tw-bg-popover tw-text-popover-foreground",e),...t}));$a.displayName=Oe.Command.displayName;const Ia=y.forwardRef(({className:e,...t},n)=>a.jsxs("div",{className:"tw-flex tw-items-center tw-border-b tw-px-3",children:[a.jsx(ne.Search,{className:"tw-me-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50"}),a.jsx(Oe.Command.Input,{ref:n,className:j("tw-flex tw-h-11 tw-w-full tw-rounded-md tw-bg-transparent tw-py-3 tw-text-sm tw-outline-none placeholder:tw-text-muted-foreground disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),...t})]}));Ia.displayName=Oe.Command.Input.displayName;const Ma=y.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Command.List,{ref:n,className:j("tw-max-h-[300px] tw-overflow-y-auto tw-overflow-x-hidden",e),...t}));Ma.displayName=Oe.Command.List.displayName;const Aa=y.forwardRef((e,t)=>a.jsx(Oe.Command.Empty,{ref:t,className:"tw-py-6 tw-text-center tw-text-sm",...e}));Aa.displayName=Oe.Command.Empty.displayName;const Bc=y.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Command.Group,{ref:n,className:j("tw-overflow-hidden tw-p-1 tw-text-foreground [&_[cmdk-group-heading]]:tw-px-2 [&_[cmdk-group-heading]]:tw-py-1.5 [&_[cmdk-group-heading]]:tw-text-xs [&_[cmdk-group-heading]]:tw-font-medium [&_[cmdk-group-heading]]:tw-text-muted-foreground",e),...t}));Bc.displayName=Oe.Command.Group.displayName;const Vc=y.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Command.Separator,{ref:n,className:j("tw--mx-1 tw-h-px tw-bg-border",e),...t}));Vc.displayName=Oe.Command.Separator.displayName;const Da=y.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Command.Item,{ref:n,className:j("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none data-[disabled=true]:tw-pointer-events-none data-[selected=true]:tw-bg-accent data-[selected=true]:tw-text-accent-foreground data-[disabled=true]:tw-opacity-50",e),...t}));Da.displayName=Oe.Command.Item.displayName;function Lc(e){return typeof e=="string"?e:typeof e=="number"?e.toString():e.label}function eo({id:e,options:t=[],className:n,value:r,onChange:o=()=>{},getOptionLabel:s=Lc,buttonPlaceholder:i="",textPlaceholder:l="",commandEmptyMessage:d="No option found",buttonVariant:u="outline",dir:p="ltr",isDisabled:b=!1,...c}){const[m,f]=y.useState(!1);return a.jsxs(_c,{open:m,onOpenChange:f,...c,children:[a.jsx($c,{asChild:!0,children:a.jsxs(ge,{variant:u,role:"combobox","aria-expanded":m,id:e,className:j("tw-w-[200px] tw-justify-between",n),disabled:b,children:[a.jsx("span",{className:"tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap",children:r?s(r):i}),a.jsx(ne.ChevronsUpDown,{className:"tw-ms-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50"})]})}),a.jsx(Pa,{className:"tw-w-[200px] tw-p-0",dir:p,children:a.jsxs($a,{children:[a.jsx(Ia,{dir:p,placeholder:l,className:"tw-text-inherit"}),a.jsx(Aa,{children:d}),a.jsx(Ma,{children:t.map(h=>a.jsxs(Da,{value:s(h),onSelect:()=>{o(h),f(!1)},children:[a.jsx(ne.Check,{className:j("tw-me-2 tw-h-4 tw-w-4",{"tw-opacity-0":!r||s(r)!==s(h)})}),s(h)]},s(h)))})]})})]})}function Ba({startChapter:e,endChapter:t,handleSelectStartChapter:n,handleSelectEndChapter:r,isDisabled:o=!1,chapterCount:s}){const i=y.useMemo(()=>Array.from({length:s},(u,p)=>p+1),[s]),l=u=>{n(u),u>t&&r(u)},d=u=>{r(u),u<e&&n(u)};return a.jsxs(a.Fragment,{children:[a.jsx(qe,{htmlFor:"start-chapters-combobox",children:"Chapters"}),a.jsx(eo,{isDisabled:o,onChange:l,className:"tw-ml-2 tw-mr-2 tw-w-20",options:i,getOptionLabel:u=>u.toString(),value:e},"start chapter"),a.jsx(qe,{htmlFor:"end-chapters-combobox",children:"to"}),a.jsx(eo,{isDisabled:o,onChange:d,className:"tw-ml-2 tw-w-20",options:i,getOptionLabel:u=>u.toString(),value:t},"end chapter")]})}var Va=(e=>(e.CURRENT_BOOK="current book",e.CHOOSE_BOOKS="choose books",e))(Va||{});const zc=Object.freeze(["%webView_bookSelector_currentBook%","%webView_bookSelector_choose%","%webView_bookSelector_chooseBooks%"]),$r=(e,t)=>e[t]??t;function Fc({handleBookSelectionModeChange:e,currentBookName:t,onSelectBooks:n,selectedBookIds:r,chapterCount:o,endChapter:s,handleSelectEndChapter:i,startChapter:l,handleSelectStartChapter:d,localizedStrings:u}){const p=$r(u,"%webView_bookSelector_currentBook%"),b=$r(u,"%webView_bookSelector_choose%"),c=$r(u,"%webView_bookSelector_chooseBooks%"),[m,f]=y.useState("current book"),h=g=>{f(g),e(g)};return a.jsx(yo,{className:"pr-twp tw-flex",value:m,onValueChange:g=>h(g),children:a.jsxs("div",{className:"tw-flex tw-w-full tw-flex-col tw-gap-4",children:[a.jsxs("div",{className:"tw-grid tw-grid-cols-[25%,25%,50%]",children:[a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(er,{value:"current book"}),a.jsx(qe,{className:"tw-ml-1",children:p})]}),a.jsx(qe,{className:"tw-flex tw-items-center",children:t}),a.jsx("div",{className:"tw-flex tw-items-center tw-justify-end",children:a.jsx(Ba,{isDisabled:m==="choose books",handleSelectStartChapter:d,handleSelectEndChapter:i,chapterCount:o,startChapter:l,endChapter:s})})]}),a.jsxs("div",{className:"tw-grid tw-grid-cols-[25%,50%,25%]",children:[a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(er,{value:"choose books"}),a.jsx(qe,{className:"tw-ml-1",children:c})]}),a.jsx(qe,{className:"tw-flex tw-items-center",children:r.map(g=>ae.bookIdToEnglishName(g)).join(", ")}),a.jsx(ge,{disabled:m==="current book",onClick:()=>n(),children:b})]})]})})}function Gc({table:e}){return a.jsxs(dr,{children:[a.jsx(ma.DropdownMenuTrigger,{asChild:!0,children:a.jsxs(ge,{variant:"outline",size:"sm",className:"tw-ml-auto tw-hidden tw-h-8 lg:tw-flex",children:[a.jsx(ne.FilterIcon,{className:"tw-mr-2 tw-h-4 tw-w-4"}),"View"]})}),a.jsxs(On,{align:"end",className:"tw-w-[150px]",children:[a.jsx(Zt,{children:"Toggle columns"}),a.jsx(Rn,{}),e.getAllColumns().filter(t=>t.getCanHide()).map(t=>a.jsx(ur,{className:"tw-capitalize",checked:t.getIsVisible(),onCheckedChange:n=>t.toggleVisibility(!!n),children:t.id},t.id))]})]})}const zt=be.Root,La=be.Group,Ft=be.Value,Nt=y.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(be.Trigger,{ref:r,className:j("tw-flex tw-h-10 tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background placeholder:tw-text-muted-foreground focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 [&>span]:tw-line-clamp-1",e),...n,children:[t,a.jsx(be.Icon,{asChild:!0,children:a.jsx(ne.ChevronDown,{className:"tw-h-4 tw-w-4 tw-opacity-50"})})]}));Nt.displayName=be.Trigger.displayName;const xo=y.forwardRef(({className:e,...t},n)=>a.jsx(be.ScrollUpButton,{ref:n,className:j("tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",e),...t,children:a.jsx(ne.ChevronUp,{className:"tw-h-4 tw-w-4"})}));xo.displayName=be.ScrollUpButton.displayName;const ko=y.forwardRef(({className:e,...t},n)=>a.jsx(be.ScrollDownButton,{ref:n,className:j("tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",e),...t,children:a.jsx(ne.ChevronDown,{className:"tw-h-4 tw-w-4"})}));ko.displayName=be.ScrollDownButton.displayName;const Et=y.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>a.jsx(be.Portal,{children:a.jsxs(be.Content,{ref:o,className:j("pr-twp tw-relative tw-z-50 tw-max-h-96 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:tw-translate-y-1 data-[side=left]:tw--translate-x-1 data-[side=right]:tw-translate-x-1 data-[side=top]:tw--translate-y-1",e),position:n,...r,children:[a.jsx(xo,{}),a.jsx(be.Viewport,{className:j("tw-p-1",n==="popper"&&"tw-h-[var(--radix-select-trigger-height)] tw-w-full tw-min-w-[var(--radix-select-trigger-width)]"),children:t}),a.jsx(ko,{})]})}));Et.displayName=be.Content.displayName;const za=y.forwardRef(({className:e,...t},n)=>a.jsx(be.Label,{ref:n,className:j("tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-font-semibold",e),...t}));za.displayName=be.Label.displayName;const De=y.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(be.Item,{ref:r,className:j("tw-relative tw-flex tw-w-full tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),...n,children:[a.jsx("span",{className:"tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center",children:a.jsx(be.ItemIndicator,{children:a.jsx(ne.Check,{className:"tw-h-4 tw-w-4"})})}),a.jsx(be.ItemText,{children:t})]}));De.displayName=be.Item.displayName;const Fa=y.forwardRef(({className:e,...t},n)=>a.jsx(be.Separator,{ref:n,className:j("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted",e),...t}));Fa.displayName=be.Separator.displayName;function Uc({table:e}){return a.jsx("div",{className:"tw-flex tw-items-center tw-justify-between tw-px-2 tw-pb-3 tw-pt-3",children:a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-6 lg:tw-space-x-8",children:[a.jsxs("div",{className:"tw-flex-1 tw-text-sm tw-text-muted-foreground",children:[e.getFilteredSelectedRowModel().rows.length," of"," ",e.getFilteredRowModel().rows.length," row(s) selected"]}),a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-2",children:[a.jsx("p",{className:"tw-text-nowrap tw-text-sm tw-font-medium",children:"Rows per page"}),a.jsxs(zt,{value:`${e.getState().pagination.pageSize}`,onValueChange:t=>{e.setPageSize(Number(t))},children:[a.jsx(Nt,{className:"tw-h-8 tw-w-[70px]",children:a.jsx(Ft,{placeholder:e.getState().pagination.pageSize})}),a.jsx(Et,{side:"top",children:[10,20,30,40,50].map(t=>a.jsx(De,{value:`${t}`,children:t},t))})]})]}),a.jsxs("div",{className:"tw-flex tw-w-[100px] tw-items-center tw-justify-center tw-text-sm tw-font-medium",children:["Page ",e.getState().pagination.pageIndex+1," of ",e.getPageCount()]}),a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-2",children:[a.jsxs(ge,{variant:"outline",size:"icon",className:"tw-hidden tw-h-8 tw-w-8 tw-p-0 lg:tw-flex",onClick:()=>e.setPageIndex(0),disabled:!e.getCanPreviousPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to first page"}),a.jsx(ne.ArrowLeftIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(ge,{variant:"outline",size:"icon",className:"tw-h-8 tw-w-8 tw-p-0",onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to previous page"}),a.jsx(ne.ChevronLeftIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(ge,{variant:"outline",size:"icon",className:"tw-h-8 tw-w-8 tw-p-0",onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to next page"}),a.jsx(ne.ChevronRightIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(ge,{variant:"outline",size:"icon",className:"tw-hidden tw-h-8 tw-w-8 tw-p-0 lg:tw-flex",onClick:()=>e.setPageIndex(e.getPageCount()-1),disabled:!e.getCanNextPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to last page"}),a.jsx(ne.ArrowRightIcon,{className:"tw-h-4 tw-w-4"})]})]})]})})}const Pn=y.forwardRef(({className:e,stickyHeader:t,...n},r)=>a.jsx("div",{className:j("pr-twp tw-relative tw-w-full",{"tw-overflow-auto":!t}),children:a.jsx("table",{ref:r,className:j("tw-w-full tw-caption-bottom tw-text-sm",e),...n})}));Pn.displayName="Table";const _n=y.forwardRef(({className:e,stickyHeader:t,...n},r)=>a.jsx("thead",{ref:r,className:j({"tw-sticky tw-top-0 tw-bg-muted":t},"[&_tr]:tw-border-b",e),...n}));_n.displayName="TableHeader";const $n=y.forwardRef(({className:e,...t},n)=>a.jsx("tbody",{ref:n,className:j("[&_tr:last-child]:tw-border-0",e),...t}));$n.displayName="TableBody";const Ga=y.forwardRef(({className:e,...t},n)=>a.jsx("tfoot",{ref:n,className:j("tw-border-t tw-bg-muted/50 tw-font-medium [&>tr]:last:tw-border-b-0",e),...t}));Ga.displayName="TableFooter";const et=y.forwardRef(({className:e,...t},n)=>a.jsx("tr",{ref:n,className:j("tw-border-b tw-transition-colors hover:tw-bg-muted/50 data-[state=selected]:tw-bg-muted",e),...t}));et.displayName="TableRow";const Gt=y.forwardRef(({className:e,...t},n)=>a.jsx("th",{ref:n,className:j("tw-h-12 tw-px-4 tw-text-start tw-align-middle tw-font-medium tw-text-muted-foreground [&:has([role=checkbox])]:tw-pe-0",e),...t}));Gt.displayName="TableHead";const St=y.forwardRef(({className:e,...t},n)=>a.jsx("td",{ref:n,className:j("tw-p-4 tw-align-middle [&:has([role=checkbox])]:tw-pe-0",e),...t}));St.displayName="TableCell";const Ua=y.forwardRef(({className:e,...t},n)=>a.jsx("caption",{ref:n,className:j("tw-mt-4 tw-text-sm tw-text-muted-foreground",e),...t}));Ua.displayName="TableCaption";function qa({columns:e,data:t,enablePagination:n=!1,showPaginationControls:r=!1,showColumnVisibilityControls:o=!1,stickyHeader:s=!1,onRowClickHandler:i=()=>{}}){var g;const[l,d]=y.useState([]),[u,p]=y.useState([]),[b,c]=y.useState({}),[m,f]=y.useState({}),h=Ee.useReactTable({data:t,columns:e,getCoreRowModel:Ee.getCoreRowModel(),...n&&{getPaginationRowModel:Ee.getPaginationRowModel()},onSortingChange:d,getSortedRowModel:Ee.getSortedRowModel(),onColumnFiltersChange:p,getFilteredRowModel:Ee.getFilteredRowModel(),onColumnVisibilityChange:c,onRowSelectionChange:f,state:{sorting:l,columnFilters:u,columnVisibility:b,rowSelection:m}});return a.jsxs("div",{className:"pr-twp",children:[o&&a.jsx(Gc,{table:h}),a.jsxs(Pn,{stickyHeader:s,children:[a.jsx(_n,{stickyHeader:s,children:h.getHeaderGroups().map(k=>a.jsx(et,{children:k.headers.map(C=>a.jsx(Gt,{children:C.isPlaceholder?void 0:Ee.flexRender(C.column.columnDef.header,C.getContext())},C.id))},k.id))}),a.jsx($n,{children:(g=h.getRowModel().rows)!=null&&g.length?h.getRowModel().rows.map(k=>a.jsx(et,{onClick:()=>i(k,h),"data-state":k.getIsSelected()&&"selected",children:k.getVisibleCells().map(C=>a.jsx(St,{children:Ee.flexRender(C.column.columnDef.cell,C.getContext())},C.id))},k.id)):a.jsx(et,{children:a.jsx(St,{colSpan:e.length,className:"tw-h-24 tw-text-center",children:"No results."})})})]}),n&&a.jsxs("div",{className:"tw-flex tw-items-center tw-justify-end tw-space-x-2 tw-py-4",children:[a.jsx(ge,{variant:"outline",size:"sm",onClick:()=>h.previousPage(),disabled:!h.getCanPreviousPage(),children:"Previous"}),a.jsx(ge,{variant:"outline",size:"sm",onClick:()=>h.nextPage(),disabled:!h.getCanNextPage(),children:"Next"})]}),n&&r&&a.jsx(Uc,{table:h})]})}function qc({occurrenceData:e,setScriptureReference:t,localizedStrings:n}){const r=n["%webView_inventory_occurrences_table_header_reference%"],o=n["%webView_inventory_occurrences_table_header_occurrence%"],s=y.useMemo(()=>{const i=[];return e.forEach(l=>{i.some(d=>K.deepEqual(d,l))||i.push(l)}),i},[e]);return a.jsxs(Pn,{stickyHeader:!0,children:[a.jsx(_n,{stickyHeader:!0,children:a.jsxs(et,{children:[a.jsx(Gt,{children:r}),a.jsx(Gt,{children:o})]})}),a.jsx($n,{children:s.length>0&&s.map(i=>a.jsxs(et,{onClick:()=>{t(i.reference)},children:[a.jsx(St,{children:`${ae.bookNumberToEnglishName(i.reference.bookNum)} ${i.reference.chapterNum}:${i.reference.verseNum}`}),a.jsx(St,{children:i.text})]},`${i.reference.bookNum} ${i.reference.chapterNum}:${i.reference.verseNum}-${i.text}`))})]})}const pr=y.forwardRef(({className:e,...t},n)=>a.jsx(Zr.Root,{ref:n,className:j("tw-peer pr-twp tw-h-4 tw-w-4 tw-shrink-0 tw-rounded-sm tw-border tw-border-primary tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=checked]:tw-text-primary-foreground",e),...t,children:a.jsx(Zr.Indicator,{className:j("tw-flex tw-items-center tw-justify-center tw-text-current"),children:a.jsx(ne.Check,{className:"tw-h-4 tw-w-4"})})}));pr.displayName=Zr.Root.displayName;const Ha=e=>e.split(/(?:\r?\n|\r)|(?=(?:\\(?:v|c|id)))/g),to=e=>{const t=/^\\[vc]\s+(\d+)/,n=e.match(t);if(n)return+n[1]},Xa=e=>{const t=e.match(/^\\id\s+([A-Za-z]+)/);return t?ae.bookIdToNumber(t[1]):0},Wa=(e,t,n)=>n.includes(e)?"unapproved":t.includes(e)?"approved":"unknown",Ya=lr.cva("pr-twp tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-colors hover:tw-bg-muted hover:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=on]:tw-bg-accent data-[state=on]:tw-text-accent-foreground",{variants:{variant:{default:"tw-bg-transparent",outline:"tw-border tw-border-input tw-bg-transparent hover:tw-bg-accent hover:tw-text-accent-foreground"},size:{default:"tw-h-10 tw-px-3",sm:"tw-h-9 tw-px-2.5",lg:"tw-h-11 tw-px-5"}},defaultVariants:{variant:"default",size:"default"}}),Hc=y.forwardRef(({className:e,variant:t,size:n,...r},o)=>a.jsx(ba.Root,{ref:o,className:j(Ya({variant:t,size:n,className:e})),...r}));Hc.displayName=ba.Root.displayName;const Ka=y.createContext({size:"default",variant:"default"}),No=y.forwardRef(({className:e,variant:t,size:n,children:r,...o},s)=>a.jsx(cr.Root,{ref:s,className:j("pr-twp tw-flex tw-items-center tw-justify-center tw-gap-1",e),...o,children:a.jsx(Ka.Provider,{value:{variant:t,size:n},children:r})}));No.displayName=cr.Root.displayName;const bn=y.forwardRef(({className:e,children:t,variant:n,size:r,...o},s)=>{const i=y.useContext(Ka);return a.jsx(cr.Item,{ref:s,className:j(Ya({variant:i.variant||n,size:i.size||r}),e),...o,children:t})});bn.displayName=cr.Item.displayName;const fr=e=>e==="asc"?a.jsx(ne.ArrowUpIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}):e==="desc"?a.jsx(ne.ArrowDownIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}):a.jsx(ne.ArrowUpDownIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}),Xc=e=>({accessorKey:"item",accessorFn:t=>t.items[0],header:({column:t})=>a.jsxs(ge,{variant:"ghost",onClick:()=>t.toggleSorting(void 0),children:[e,fr(t.getIsSorted())]})}),Wc=(e,t)=>({accessorKey:`item${t}`,accessorFn:n=>n.items[t],header:({column:n})=>a.jsxs(ge,{variant:"ghost",onClick:()=>n.toggleSorting(void 0),children:[e,fr(n.getIsSorted())]})}),Yc=e=>({accessorKey:"count",header:({column:t})=>a.jsx("div",{className:"tw-flex tw-justify-end tw-tabular-nums",children:a.jsxs(ge,{variant:"ghost",onClick:()=>t.toggleSorting(void 0),children:[e,fr(t.getIsSorted())]})}),cell:({row:t})=>a.jsx("div",{className:"tw-flex tw-justify-end",children:t.getValue("count")})}),Ir=(e,t,n,r,o,s)=>{let i=[...n];e.forEach(d=>{t==="approved"?i.includes(d)||i.push(d):i=i.filter(u=>u!==d)}),r(i);let l=[...o];e.forEach(d=>{t==="unapproved"?l.includes(d)||l.push(d):l=l.filter(u=>u!==d)}),s(l)},Kc=(e,t,n,r,o)=>({accessorKey:"status",header:({column:s})=>a.jsx("div",{className:"tw-flex tw-justify-center",children:a.jsxs(ge,{variant:"ghost",onClick:()=>s.toggleSorting(void 0),children:[e,fr(s.getIsSorted())]})}),cell:({row:s})=>{const i=s.getValue("status"),l=s.getValue("item");return a.jsxs(No,{value:i,variant:"outline",type:"single",children:[a.jsx(bn,{onClick:()=>Ir([l],"approved",t,n,r,o),value:"approved",children:a.jsx(ne.CircleCheckIcon,{})}),a.jsx(bn,{onClick:()=>Ir([l],"unapproved",t,n,r,o),value:"unapproved",children:a.jsx(ne.CircleXIcon,{})}),a.jsx(bn,{onClick:()=>Ir([l],"unknown",t,n,r,o),value:"unknown",children:a.jsx(ne.CircleHelpIcon,{})})]})}}),Jc=Object.freeze(["%webView_inventory_all%","%webView_inventory_approved%","%webView_inventory_unapproved%","%webView_inventory_unknown%","%webView_inventory_scope_currentBook%","%webView_inventory_scope_chapter%","%webView_inventory_scope_verse%","%webView_inventory_filter_text%","%webView_inventory_show_additional_items%","%webView_inventory_occurrences_table_header_reference%","%webView_inventory_occurrences_table_header_occurrence%"]),Zc=(e,t,n)=>{let r=e;return t!=="all"&&(r=r.filter(o=>t==="approved"&&o.status==="approved"||t==="unapproved"&&o.status==="unapproved"||t==="unknown"&&o.status==="unknown")),n!==""&&(r=r.filter(o=>o.items[0].includes(n))),r},Qc=(e,t,n,r,o)=>{if(!e)return[];const s=[];let i=t.bookNum,l=t.chapterNum,d=t.verseNum;return Ha(e).forEach(p=>{p.startsWith("\\id")&&(i=Xa(p),l=0,d=0),p.startsWith("\\c")&&(l=to(p),d=0),p.startsWith("\\v")&&(d=to(p),l===0&&(l=t.chapterNum));let b=o.exec(p)??void 0;for(;b;){const c=[];b.forEach(g=>c.push(g));const m=b.index,f=s.find(g=>K.deepEqual(g.items,c)),h={reference:{bookNum:i!==void 0?i:-1,chapterNum:l!==void 0?l:-1,verseNum:d!==void 0?d:-1},text:K.substring(p,Math.max(0,m-25),Math.min(m+25,p.length))};if(f)f.count+=1,f.occurrences.push(h);else{const g={items:c,count:1,status:Wa(c[0],n,r),occurrences:[h]};s.push(g)}b=o.exec(p)??void 0}}),s},Ze=(e,t)=>e[t]??t;function ed({scriptureReference:e,setScriptureReference:t,localizedStrings:n,extractItems:r,additionalItemsLabels:o,approvedItems:s,unapprovedItems:i,text:l,scope:d,onScopeChange:u,columns:p}){const b=Ze(n,"%webView_inventory_all%"),c=Ze(n,"%webView_inventory_approved%"),m=Ze(n,"%webView_inventory_unapproved%"),f=Ze(n,"%webView_inventory_unknown%"),h=Ze(n,"%webView_inventory_scope_currentBook%"),g=Ze(n,"%webView_inventory_scope_chapter%"),k=Ze(n,"%webView_inventory_scope_verse%"),C=Ze(n,"%webView_inventory_filter_text%"),S=Ze(n,"%webView_inventory_show_additional_items%"),[N,v]=y.useState(!1),[O,_]=y.useState("all"),[B,T]=y.useState(""),[P,E]=y.useState([]),D=y.useMemo(()=>l?r instanceof RegExp?Qc(l,e,s,i,r):r(l,e,s,i):[],[l,r,e,s,i]),M=y.useMemo(()=>{if(N)return D;const x=[];return D.forEach(R=>{const z=R.items[0],F=x.find(L=>L.items[0]===z);F?(F.count+=R.count,F.occurrences=F.occurrences.concat(R.occurrences)):x.push({items:[z],count:R.count,occurrences:R.occurrences,status:R.status})}),x},[N,D]),J=y.useMemo(()=>Zc(M,O,B),[M,O,B]),Y=y.useMemo(()=>{var z,F;if(!N)return p;const x=(z=o==null?void 0:o.tableHeaders)==null?void 0:z.length;if(!x)return p;const R=[];for(let L=0;L<x;L++)R.push(Wc(((F=o==null?void 0:o.tableHeaders)==null?void 0:F[L])||"Additional Item",L+1));return[...R,...p]},[o==null?void 0:o.tableHeaders,p,N]);y.useEffect(()=>{E([])},[J]);const U=(x,R)=>{R.setRowSelection(()=>{const z={};return z[x.index]=!0,z}),E(x.original.items)},te=x=>{if(x==="book"||x==="chapter"||x==="verse")u(x);else throw new Error(`Invalid scope value: ${x}`)},ie=x=>{if(x==="all"||x==="approved"||x==="unapproved"||x==="unknown")_(x);else throw new Error(`Invalid status filter value: ${x}`)},se=y.useMemo(()=>{if(M.length===0||P.length===0)return[];const x=M.filter(R=>K.deepEqual(N?R.items:[R.items[0]],P));if(x.length>1)throw new Error("Selected item is not unique");return x[0].occurrences},[P,N,M]);return a.jsxs("div",{className:"pr-twp tw-flex tw-h-full tw-flex-col",children:[a.jsxs("div",{className:"tw-flex tw-items-stretch",children:[a.jsxs(zt,{onValueChange:x=>ie(x),defaultValue:O,children:[a.jsx(Nt,{className:"tw-m-1",children:a.jsx(Ft,{placeholder:"Select filter"})}),a.jsxs(Et,{children:[a.jsx(De,{value:"all",children:b}),a.jsx(De,{value:"approved",children:c}),a.jsx(De,{value:"unapproved",children:m}),a.jsx(De,{value:"unknown",children:f})]})]}),a.jsxs(zt,{onValueChange:x=>te(x),defaultValue:d,children:[a.jsx(Nt,{className:"tw-m-1",children:a.jsx(Ft,{placeholder:"Select scope"})}),a.jsxs(Et,{children:[a.jsx(De,{value:"book",children:h}),a.jsx(De,{value:"chapter",children:g}),a.jsx(De,{value:"verse",children:k})]})]}),a.jsx(Kt,{className:"tw-m-1 tw-rounded-md tw-border",placeholder:C,value:B,onChange:x=>{T(x.target.value)}}),o&&a.jsxs("div",{className:"tw-m-1 tw-flex tw-items-center tw-rounded-md tw-border",children:[a.jsx(pr,{className:"tw-m-1",checked:N,onCheckedChange:x=>{E([]),v(x)}}),a.jsx(qe,{className:"tw-m-1 tw-flex-shrink-0 tw-whitespace-nowrap",children:(o==null?void 0:o.checkboxText)??S})]})]}),a.jsx("div",{className:"tw-m-1 tw-flex-1 tw-overflow-auto tw-rounded-md tw-border",children:a.jsx(qa,{columns:Y,data:J,onRowClickHandler:U,stickyHeader:!0})}),se.length>0&&a.jsx("div",{className:"tw-m-1 tw-flex-1 tw-overflow-auto tw-rounded-md tw-border",children:a.jsx(qc,{occurrenceData:se,setScriptureReference:t,localizedStrings:n})})]})}function Ja({onSearch:e,placeholder:t,isFullWidth:n}){const[r,o]=y.useState(""),s=i=>{o(i),e(i)};return a.jsx(Kt,{className:j("tw-flex tw-h-10 tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-[color:hsl(240,5%,64.9%)] focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",{"tw-w-full":n}),placeholder:t,value:r,onChange:i=>s(i.target.value)})}const Eo=y.forwardRef(({className:e,...t},n)=>a.jsx(Re.Root,{orientation:"vertical",ref:n,className:j("tw-flex tw-gap-1 tw-rounded-md tw-text-muted-foreground",e),...t}));Eo.displayName=Re.List.displayName;const So=y.forwardRef(({className:e,...t},n)=>a.jsx(Re.List,{ref:n,className:j("tw-flex-fit tw-mlk-items-center tw-w-[124px] tw-justify-center tw-rounded-md tw-bg-muted tw-p-1 tw-text-muted-foreground",e),...t}));So.displayName=Re.List.displayName;const Za=y.forwardRef(({className:e,...t},n)=>a.jsx(Re.Trigger,{ref:n,...t,className:j("overflow-clip tw-inline-flex tw-w-[116px] tw-cursor-pointer tw-items-center tw-justify-center tw-break-words tw-rounded-sm tw-border-0 tw-bg-muted tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-text-inherit tw-ring-offset-background tw-transition-all hover:tw-text-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow-sm",e)})),To=y.forwardRef(({className:e,...t},n)=>a.jsx(Re.Content,{ref:n,className:j("tw-ms-5 tw-flex-grow tw-text-foreground tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",e),...t}));To.displayName=Re.Content.displayName;function td({tabList:e,onSearch:t,searchPlaceholder:n,headerTitle:r,isSearchBarFullWidth:o=!1,direction:s="ltr"}){return a.jsxs("div",{className:"pr-twp",children:[a.jsxs("div",{className:"tw-sticky tw-top-0 tw-space-y-2 tw-pb-2",children:[r?a.jsx("h1",{children:r}):"",a.jsx(Ja,{isFullWidth:o,onSearch:t,placeholder:n})]}),a.jsxs(Eo,{dir:s,children:[a.jsx(So,{children:e.map(i=>a.jsx(Za,{value:i.value,children:i.value},i.key))}),e.map(i=>a.jsx(To,{value:i.value,children:i.content},i.key))]})]})}const it="scrBook",nd="scrRef",ht="source",rd="details",od="Scripture Reference",sd="Scripture Book",Qa="Type",ad="Details";function id(e,t){const n=t??!1;return[{accessorFn:r=>`${ae.bookNumberToId(r.start.bookNum)} ${r.start.chapterNum}:${r.start.verseNum}`,id:it,header:(e==null?void 0:e.scriptureReferenceColumnName)??od,cell:r=>{const o=r.row.original;return r.row.getIsGrouped()?ae.bookNumberToEnglishName(o.start.bookNum):r.row.groupingColumnId===it?K.formatScrRef(o.start):void 0},getGroupingValue:r=>r.start.bookNum,sortingFn:(r,o)=>K.compareScrRefs(r.original.start,o.original.start),enableGrouping:!0},{accessorFn:r=>K.formatScrRef(r.start),id:nd,header:void 0,cell:r=>{const o=r.row.original;return r.row.getIsGrouped()?void 0:K.formatScrRef(o.start)},sortingFn:(r,o)=>K.compareScrRefs(r.original.start,o.original.start),enableGrouping:!1},{accessorFn:r=>r.source.displayName,id:ht,header:n?(e==null?void 0:e.typeColumnName)??Qa:void 0,cell:r=>n||r.row.getIsGrouped()?r.getValue():void 0,getGroupingValue:r=>r.source.id,sortingFn:(r,o)=>r.original.source.displayName.localeCompare(o.original.source.displayName),enableGrouping:!0},{accessorFn:r=>r.detail,id:rd,header:(e==null?void 0:e.detailsColumnName)??ad,cell:r=>r.getValue(),enableGrouping:!1}]}const ld=e=>{if(!("offset"in e.start))throw new Error("No offset available in range start");if(e.end&&!("offset"in e.end))throw new Error("No offset available in range end");const{offset:t}=e.start;let n=0;return e.end&&({offset:n}=e.end),!e.end||K.compareScrRefs(e.start,e.end)===0?`${K.scrRefToBBBCCCVVV(e.start)}+${t}`:`${K.scrRefToBBBCCCVVV(e.start)}+${t}-${K.scrRefToBBBCCCVVV(e.end)}+${n}`},hs=e=>`${ld({start:e.start,end:e.end})} ${e.source.displayName} ${e.detail}`;function cd({sources:e,showColumnHeaders:t=!1,showSourceColumn:n=!1,scriptureReferenceColumnName:r,scriptureBookGroupName:o,typeColumnName:s,detailsColumnName:i,onRowSelected:l,direction:d="ltr"}){const[u,p]=y.useState([]),[b,c]=y.useState([{id:it,desc:!1}]),[m,f]=y.useState({}),h=y.useMemo(()=>e.flatMap(T=>T.data.map(P=>({...P,source:T.source}))),[e]),g=y.useMemo(()=>id({scriptureReferenceColumnName:r,typeColumnName:s,detailsColumnName:i},n),[r,s,i,n]);y.useEffect(()=>{u.includes(ht)?c([{id:ht,desc:!1},{id:it,desc:!1}]):c([{id:it,desc:!1}])},[u]);const k=Ee.useReactTable({data:h,columns:g,state:{grouping:u,sorting:b,rowSelection:m},onGroupingChange:p,onSortingChange:c,onRowSelectionChange:f,getExpandedRowModel:Ee.getExpandedRowModel(),getGroupedRowModel:Ee.getGroupedRowModel(),getCoreRowModel:Ee.getCoreRowModel(),getSortedRowModel:Ee.getSortedRowModel(),getRowId:hs,autoResetExpanded:!1,enableMultiRowSelection:!1,enableSubRowSelection:!1});y.useEffect(()=>{if(l){const T=k.getSelectedRowModel().rowsById,P=Object.keys(T);if(P.length===1){const E=h.find(D=>hs(D)===P[0])||void 0;E&&l(E)}}},[m,h,l,k]);const C=o??sd,S=s??Qa,N=[{label:"No Grouping",value:[]},{label:`Group by ${C}`,value:[it]},{label:`Group by ${S}`,value:[ht]},{label:`Group by ${C} and ${S}`,value:[it,ht]},{label:`Group by ${S} and ${C}`,value:[ht,it]}],v=T=>{p(JSON.parse(T))},O=(T,P)=>{!T.getIsGrouped()&&!T.getIsSelected()&&T.getToggleSelectedHandler()(P)},_=(T,P)=>T.getIsGrouped()?"":j("banded-row",P%2===0?"even":"odd"),B=(T,P,E)=>{if(!((T==null?void 0:T.length)===0||P.depth<E.column.getGroupedIndex())){if(P.getIsGrouped())switch(P.depth){case 1:return"tw-ps-4";default:return}switch(P.depth){case 1:return"tw-ps-8";case 2:return"tw-ps-12";default:return}}};return a.jsxs("div",{className:"pr-twp tw-flex tw-h-full tw-w-full tw-flex-col",children:[!t&&a.jsxs(zt,{value:JSON.stringify(u),onValueChange:T=>{v(T)},children:[a.jsx(Nt,{className:"tw-mb-1 tw-mt-2",children:a.jsx(Ft,{})}),a.jsx(Et,{position:"item-aligned",children:a.jsx(La,{children:N.map(T=>a.jsx(De,{value:JSON.stringify(T.value),children:T.label},T.label))})})]}),a.jsxs(Pn,{className:"tw-relative tw-flex tw-flex-col tw-overflow-y-auto tw-p-0",children:[t&&a.jsx(_n,{children:k.getHeaderGroups().map(T=>a.jsx(et,{children:T.headers.filter(P=>P.column.columnDef.header).map(P=>a.jsx(Gt,{colSpan:P.colSpan,className:"top-0 tw-sticky",children:P.isPlaceholder?void 0:a.jsxs("div",{children:[P.column.getCanGroup()?a.jsx(ge,{variant:"ghost",title:`Toggle grouping by ${P.column.columnDef.header}`,onClick:P.column.getToggleGroupingHandler(),type:"button",children:P.column.getIsGrouped()?"🛑":"👊 "}):void 0," ",Ee.flexRender(P.column.columnDef.header,P.getContext())]})},P.id))},T.id))}),a.jsx($n,{children:k.getRowModel().rows.map((T,P)=>a.jsx(et,{"data-state":T.getIsSelected()?"selected":"",className:j(_(T,P)),onClick:E=>O(T,E),children:T.getVisibleCells().map(E=>{if(!(E.getIsPlaceholder()||E.column.columnDef.enableGrouping&&!E.getIsGrouped()&&(E.column.columnDef.id!==ht||!n)))return a.jsx(St,{className:j(E.column.columnDef.id,"tw-p-[1px]",B(u,T,E)),children:(()=>E.getIsGrouped()?a.jsxs(ge,{variant:"link",onClick:T.getToggleExpandedHandler(),type:"button",children:[T.getIsExpanded()&&a.jsx(ne.ChevronDown,{}),!T.getIsExpanded()&&(d==="ltr"?a.jsx(ne.ChevronRight,{}):a.jsx(ne.ChevronLeft,{}))," ",Ee.flexRender(E.column.columnDef.cell,E.getContext())," (",T.subRows.length,")"]}):Ee.flexRender(E.column.columnDef.cell,E.getContext()))()},E.id)})},T.id))})]})]})}const Mr={[K.getLocalizeKeyForScrollGroupId("undefined")]:"Ø",[K.getLocalizeKeyForScrollGroupId(0)]:"A",[K.getLocalizeKeyForScrollGroupId(1)]:"B",[K.getLocalizeKeyForScrollGroupId(2)]:"C",[K.getLocalizeKeyForScrollGroupId(3)]:"D",[K.getLocalizeKeyForScrollGroupId(4)]:"E",[K.getLocalizeKeyForScrollGroupId(5)]:"F",[K.getLocalizeKeyForScrollGroupId(6)]:"G",[K.getLocalizeKeyForScrollGroupId(7)]:"H",[K.getLocalizeKeyForScrollGroupId(8)]:"I",[K.getLocalizeKeyForScrollGroupId(9)]:"J",[K.getLocalizeKeyForScrollGroupId(10)]:"K",[K.getLocalizeKeyForScrollGroupId(11)]:"L",[K.getLocalizeKeyForScrollGroupId(12)]:"M",[K.getLocalizeKeyForScrollGroupId(13)]:"N",[K.getLocalizeKeyForScrollGroupId(14)]:"O",[K.getLocalizeKeyForScrollGroupId(15)]:"P",[K.getLocalizeKeyForScrollGroupId(16)]:"Q",[K.getLocalizeKeyForScrollGroupId(17)]:"R",[K.getLocalizeKeyForScrollGroupId(18)]:"S",[K.getLocalizeKeyForScrollGroupId(19)]:"T",[K.getLocalizeKeyForScrollGroupId(20)]:"U",[K.getLocalizeKeyForScrollGroupId(21)]:"V",[K.getLocalizeKeyForScrollGroupId(22)]:"W",[K.getLocalizeKeyForScrollGroupId(23)]:"X",[K.getLocalizeKeyForScrollGroupId(24)]:"Y",[K.getLocalizeKeyForScrollGroupId(25)]:"Z"};function dd({availableScrollGroupIds:e,scrollGroupId:t,onChangeScrollGroupId:n,localizedStrings:r={}}){const o={...Mr,...Object.fromEntries(Object.entries(r).map(([s,i])=>[s,s===i&&s in Mr?Mr[s]:i]))};return a.jsxs(zt,{value:`${t}`,onValueChange:s=>n(s==="undefined"?void 0:parseInt(s,10)),children:[a.jsx(Nt,{className:"pr-twp tw-w-auto",children:a.jsx(Ft,{placeholder:o[K.getLocalizeKeyForScrollGroupId(t)]??t})}),a.jsx(Et,{style:{zIndex:250},children:e.map(s=>a.jsx(De,{value:`${s}`,children:o[K.getLocalizeKeyForScrollGroupId(s)]},`${s}`))})]})}const Co=y.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...r},o)=>a.jsx(va.Root,{ref:o,decorative:n,orientation:t,className:j("pr-twp tw-shrink-0 tw-bg-border",t==="horizontal"?"tw-h-[1px] tw-w-full":"tw-h-full tw-w-[1px]",e),...r}));Co.displayName=va.Root.displayName;function ud({children:e}){return a.jsx("div",{className:"pr-twp tw-grid",children:e})}function pd({primary:e,secondary:t,children:n,isLoading:r=!1,loadingMessage:o}){return a.jsxs("div",{className:"tw-flex tw-items-center tw-justify-between tw-space-x-4 tw-py-2",children:[a.jsxs("div",{children:[a.jsx("p",{className:"tw-text-sm tw-font-medium tw-leading-none",children:e}),a.jsx("p",{className:"tw-whitespace-normal tw-break-words tw-text-sm tw-text-muted-foreground",children:t})]}),r?a.jsx("p",{className:"tw-text-sm tw-text-muted-foreground",children:o}):a.jsx("div",{children:n})]})}function fd({primary:e,secondary:t,includeSeparator:n=!1}){return a.jsxs("div",{className:"tw-space-y-4 tw-py-2",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"tw-text-lg tw-font-medium",children:e}),a.jsx("p",{className:"tw-text-sm tw-text-muted-foreground",children:t})]}),n?a.jsx(Co,{}):""]})}function wd({id:e,className:t,listItems:n,selectedListItems:r,handleSelectListItem:o,createLabel:s}){return a.jsx("div",{id:e,className:t,children:n.map(i=>a.jsxs("div",{className:"tw-m-2 tw-flex tw-items-center",children:[a.jsx(pr,{className:"tw-mr-2 tw-align-middle",checked:r.includes(i),onCheckedChange:l=>o(i,l)}),a.jsx(qe,{children:s?s(i):i})]},i))})}function md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function hd(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var jo={},ei={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(ei);var gd=ei.exports,Ar={};function Oo(e,t){return process.env.NODE_ENV==="production"?()=>null:function(...r){return e(...r)||t(...r)}}function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function vt(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ti(e){if(!vt(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=ti(e[n])}),t}function tt(e,t,n={clone:!0}){const r=n.clone?$({},e):e;return vt(e)&&vt(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(vt(t[o])&&o in e&&vt(e[o])?r[o]=tt(e[o],t[o],n):n.clone?r[o]=vt(t[o])?ti(t[o]):t[o]:r[o]=t[o])}),r}var no={exports:{}},Un={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs;function bd(){if(gs)return le;gs=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,c=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,k=e?Symbol.for("react.responder"):60118,C=e?Symbol.for("react.scope"):60119;function S(v){if(typeof v=="object"&&v!==null){var O=v.$$typeof;switch(O){case t:switch(v=v.type,v){case d:case u:case r:case s:case o:case b:return v;default:switch(v=v&&v.$$typeof,v){case l:case p:case f:case m:case i:return v;default:return O}}case n:return O}}}function N(v){return S(v)===u}return le.AsyncMode=d,le.ConcurrentMode=u,le.ContextConsumer=l,le.ContextProvider=i,le.Element=t,le.ForwardRef=p,le.Fragment=r,le.Lazy=f,le.Memo=m,le.Portal=n,le.Profiler=s,le.StrictMode=o,le.Suspense=b,le.isAsyncMode=function(v){return N(v)||S(v)===d},le.isConcurrentMode=N,le.isContextConsumer=function(v){return S(v)===l},le.isContextProvider=function(v){return S(v)===i},le.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===t},le.isForwardRef=function(v){return S(v)===p},le.isFragment=function(v){return S(v)===r},le.isLazy=function(v){return S(v)===f},le.isMemo=function(v){return S(v)===m},le.isPortal=function(v){return S(v)===n},le.isProfiler=function(v){return S(v)===s},le.isStrictMode=function(v){return S(v)===o},le.isSuspense=function(v){return S(v)===b},le.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===r||v===u||v===s||v===o||v===b||v===c||typeof v=="object"&&v!==null&&(v.$$typeof===f||v.$$typeof===m||v.$$typeof===i||v.$$typeof===l||v.$$typeof===p||v.$$typeof===g||v.$$typeof===k||v.$$typeof===C||v.$$typeof===h)},le.typeOf=S,le}var ce={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs;function vd(){return bs||(bs=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,c=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,k=e?Symbol.for("react.responder"):60118,C=e?Symbol.for("react.scope"):60119;function S(I){return typeof I=="string"||typeof I=="function"||I===r||I===u||I===s||I===o||I===b||I===c||typeof I=="object"&&I!==null&&(I.$$typeof===f||I.$$typeof===m||I.$$typeof===i||I.$$typeof===l||I.$$typeof===p||I.$$typeof===g||I.$$typeof===k||I.$$typeof===C||I.$$typeof===h)}function N(I){if(typeof I=="object"&&I!==null){var xe=I.$$typeof;switch(xe){case t:var V=I.type;switch(V){case d:case u:case r:case s:case o:case b:return V;default:var ye=V&&V.$$typeof;switch(ye){case l:case p:case f:case m:case i:return ye;default:return xe}}case n:return xe}}}var v=d,O=u,_=l,B=i,T=t,P=p,E=r,D=f,M=m,J=n,Y=s,U=o,te=b,ie=!1;function se(I){return ie||(ie=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),x(I)||N(I)===d}function x(I){return N(I)===u}function R(I){return N(I)===l}function z(I){return N(I)===i}function F(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function L(I){return N(I)===p}function W(I){return N(I)===r}function H(I){return N(I)===f}function X(I){return N(I)===m}function q(I){return N(I)===n}function Z(I){return N(I)===s}function Q(I){return N(I)===o}function pe(I){return N(I)===b}ce.AsyncMode=v,ce.ConcurrentMode=O,ce.ContextConsumer=_,ce.ContextProvider=B,ce.Element=T,ce.ForwardRef=P,ce.Fragment=E,ce.Lazy=D,ce.Memo=M,ce.Portal=J,ce.Profiler=Y,ce.StrictMode=U,ce.Suspense=te,ce.isAsyncMode=se,ce.isConcurrentMode=x,ce.isContextConsumer=R,ce.isContextProvider=z,ce.isElement=F,ce.isForwardRef=L,ce.isFragment=W,ce.isLazy=H,ce.isMemo=X,ce.isPortal=q,ce.isProfiler=Z,ce.isStrictMode=Q,ce.isSuspense=pe,ce.isValidElementType=S,ce.typeOf=N}()),ce}var vs;function ni(){return vs||(vs=1,process.env.NODE_ENV==="production"?Un.exports=bd():Un.exports=vd()),Un.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Dr,ys;function yd(){if(ys)return Dr;ys=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function o(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var i={},l=0;l<10;l++)i["_"+String.fromCharCode(l)]=l;var d=Object.getOwnPropertyNames(i).map(function(p){return i[p]});if(d.join("")!=="0123456789")return!1;var u={};return"abcdefghijklmnopqrst".split("").forEach(function(p){u[p]=p}),Object.keys(Object.assign({},u)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Dr=o()?Object.assign:function(s,i){for(var l,d=r(s),u,p=1;p<arguments.length;p++){l=Object(arguments[p]);for(var b in l)t.call(l,b)&&(d[b]=l[b]);if(e){u=e(l);for(var c=0;c<u.length;c++)n.call(l,u[c])&&(d[u[c]]=l[u[c]])}}return d},Dr}var Br,xs;function Ro(){if(xs)return Br;xs=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Br=e,Br}var Vr,ks;function ri(){return ks||(ks=1,Vr=Function.call.bind(Object.prototype.hasOwnProperty)),Vr}var Lr,Ns;function xd(){if(Ns)return Lr;Ns=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=Ro(),n={},r=ri();e=function(s){var i="Warning: "+s;typeof console<"u"&&console.error(i);try{throw new Error(i)}catch{}}}function o(s,i,l,d,u){if(process.env.NODE_ENV!=="production"){for(var p in s)if(r(s,p)){var b;try{if(typeof s[p]!="function"){var c=Error((d||"React class")+": "+l+" type `"+p+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[p]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}b=s[p](i,p,d,l,null,t)}catch(f){b=f}if(b&&!(b instanceof Error)&&e((d||"React class")+": type specification of "+l+" `"+p+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof b+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),b instanceof Error&&!(b.message in n)){n[b.message]=!0;var m=u?u():"";e("Failed "+l+" type: "+b.message+(m??""))}}}}return o.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(n={})},Lr=o,Lr}var zr,Es;function kd(){if(Es)return zr;Es=1;var e=ni(),t=yd(),n=Ro(),r=ri(),o=xd(),s=function(){};process.env.NODE_ENV!=="production"&&(s=function(l){var d="Warning: "+l;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}});function i(){return null}return zr=function(l,d){var u=typeof Symbol=="function"&&Symbol.iterator,p="@@iterator";function b(x){var R=x&&(u&&x[u]||x[p]);if(typeof R=="function")return R}var c="<<anonymous>>",m={array:k("array"),bigint:k("bigint"),bool:k("boolean"),func:k("function"),number:k("number"),object:k("object"),string:k("string"),symbol:k("symbol"),any:C(),arrayOf:S,element:N(),elementType:v(),instanceOf:O,node:P(),objectOf:B,oneOf:_,oneOfType:T,shape:D,exact:M};function f(x,R){return x===R?x!==0||1/x===1/R:x!==x&&R!==R}function h(x,R){this.message=x,this.data=R&&typeof R=="object"?R:{},this.stack=""}h.prototype=Error.prototype;function g(x){if(process.env.NODE_ENV!=="production")var R={},z=0;function F(W,H,X,q,Z,Q,pe){if(q=q||c,Q=Q||X,pe!==n){if(d){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var xe=q+":"+X;!R[xe]&&z<3&&(s("You are manually calling a React.PropTypes validation function for the `"+Q+"` prop on `"+q+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),R[xe]=!0,z++)}}return H[X]==null?W?H[X]===null?new h("The "+Z+" `"+Q+"` is marked as required "+("in `"+q+"`, but its value is `null`.")):new h("The "+Z+" `"+Q+"` is marked as required in "+("`"+q+"`, but its value is `undefined`.")):null:x(H,X,q,Z,Q)}var L=F.bind(null,!1);return L.isRequired=F.bind(null,!0),L}function k(x){function R(z,F,L,W,H,X){var q=z[F],Z=U(q);if(Z!==x){var Q=te(q);return new h("Invalid "+W+" `"+H+"` of type "+("`"+Q+"` supplied to `"+L+"`, expected ")+("`"+x+"`."),{expectedType:x})}return null}return g(R)}function C(){return g(i)}function S(x){function R(z,F,L,W,H){if(typeof x!="function")return new h("Property `"+H+"` of component `"+L+"` has invalid PropType notation inside arrayOf.");var X=z[F];if(!Array.isArray(X)){var q=U(X);return new h("Invalid "+W+" `"+H+"` of type "+("`"+q+"` supplied to `"+L+"`, expected an array."))}for(var Z=0;Z<X.length;Z++){var Q=x(X,Z,L,W,H+"["+Z+"]",n);if(Q instanceof Error)return Q}return null}return g(R)}function N(){function x(R,z,F,L,W){var H=R[z];if(!l(H)){var X=U(H);return new h("Invalid "+L+" `"+W+"` of type "+("`"+X+"` supplied to `"+F+"`, expected a single ReactElement."))}return null}return g(x)}function v(){function x(R,z,F,L,W){var H=R[z];if(!e.isValidElementType(H)){var X=U(H);return new h("Invalid "+L+" `"+W+"` of type "+("`"+X+"` supplied to `"+F+"`, expected a single ReactElement type."))}return null}return g(x)}function O(x){function R(z,F,L,W,H){if(!(z[F]instanceof x)){var X=x.name||c,q=se(z[F]);return new h("Invalid "+W+" `"+H+"` of type "+("`"+q+"` supplied to `"+L+"`, expected ")+("instance of `"+X+"`."))}return null}return g(R)}function _(x){if(!Array.isArray(x))return process.env.NODE_ENV!=="production"&&(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array.")),i;function R(z,F,L,W,H){for(var X=z[F],q=0;q<x.length;q++)if(f(X,x[q]))return null;var Z=JSON.stringify(x,function(pe,I){var xe=te(I);return xe==="symbol"?String(I):I});return new h("Invalid "+W+" `"+H+"` of value `"+String(X)+"` "+("supplied to `"+L+"`, expected one of "+Z+"."))}return g(R)}function B(x){function R(z,F,L,W,H){if(typeof x!="function")return new h("Property `"+H+"` of component `"+L+"` has invalid PropType notation inside objectOf.");var X=z[F],q=U(X);if(q!=="object")return new h("Invalid "+W+" `"+H+"` of type "+("`"+q+"` supplied to `"+L+"`, expected an object."));for(var Z in X)if(r(X,Z)){var Q=x(X,Z,L,W,H+"."+Z,n);if(Q instanceof Error)return Q}return null}return g(R)}function T(x){if(!Array.isArray(x))return process.env.NODE_ENV!=="production"&&s("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var R=0;R<x.length;R++){var z=x[R];if(typeof z!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ie(z)+" at index "+R+"."),i}function F(L,W,H,X,q){for(var Z=[],Q=0;Q<x.length;Q++){var pe=x[Q],I=pe(L,W,H,X,q,n);if(I==null)return null;I.data&&r(I.data,"expectedType")&&Z.push(I.data.expectedType)}var xe=Z.length>0?", expected one of type ["+Z.join(", ")+"]":"";return new h("Invalid "+X+" `"+q+"` supplied to "+("`"+H+"`"+xe+"."))}return g(F)}function P(){function x(R,z,F,L,W){return J(R[z])?null:new h("Invalid "+L+" `"+W+"` supplied to "+("`"+F+"`, expected a ReactNode."))}return g(x)}function E(x,R,z,F,L){return new h((x||"React class")+": "+R+" type `"+z+"."+F+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+L+"`.")}function D(x){function R(z,F,L,W,H){var X=z[F],q=U(X);if(q!=="object")return new h("Invalid "+W+" `"+H+"` of type `"+q+"` "+("supplied to `"+L+"`, expected `object`."));for(var Z in x){var Q=x[Z];if(typeof Q!="function")return E(L,W,H,Z,te(Q));var pe=Q(X,Z,L,W,H+"."+Z,n);if(pe)return pe}return null}return g(R)}function M(x){function R(z,F,L,W,H){var X=z[F],q=U(X);if(q!=="object")return new h("Invalid "+W+" `"+H+"` of type `"+q+"` "+("supplied to `"+L+"`, expected `object`."));var Z=t({},z[F],x);for(var Q in Z){var pe=x[Q];if(r(x,Q)&&typeof pe!="function")return E(L,W,H,Q,te(pe));if(!pe)return new h("Invalid "+W+" `"+H+"` key `"+Q+"` supplied to `"+L+"`.\nBad object: "+JSON.stringify(z[F],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(x),null,"  "));var I=pe(X,Q,L,W,H+"."+Q,n);if(I)return I}return null}return g(R)}function J(x){switch(typeof x){case"number":case"string":case"undefined":return!0;case"boolean":return!x;case"object":if(Array.isArray(x))return x.every(J);if(x===null||l(x))return!0;var R=b(x);if(R){var z=R.call(x),F;if(R!==x.entries){for(;!(F=z.next()).done;)if(!J(F.value))return!1}else for(;!(F=z.next()).done;){var L=F.value;if(L&&!J(L[1]))return!1}}else return!1;return!0;default:return!1}}function Y(x,R){return x==="symbol"?!0:R?R["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&R instanceof Symbol:!1}function U(x){var R=typeof x;return Array.isArray(x)?"array":x instanceof RegExp?"object":Y(R,x)?"symbol":R}function te(x){if(typeof x>"u"||x===null)return""+x;var R=U(x);if(R==="object"){if(x instanceof Date)return"date";if(x instanceof RegExp)return"regexp"}return R}function ie(x){var R=te(x);switch(R){case"array":case"object":return"an "+R;case"boolean":case"date":case"regexp":return"a "+R;default:return R}}function se(x){return!x.constructor||!x.constructor.name?c:x.constructor.name}return m.checkPropTypes=o,m.resetWarningCache=o.resetWarningCache,m.PropTypes=m,m},zr}var Fr,Ss;function Nd(){if(Ss)return Fr;Ss=1;var e=Ro();function t(){}function n(){}return n.resetWarningCache=t,Fr=function(){function r(i,l,d,u,p,b){if(b!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}r.isRequired=r;function o(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},Fr}if(process.env.NODE_ENV!=="production"){var Ed=ni(),Sd=!0;no.exports=kd()(Ed.isElement,Sd)}else no.exports=Nd()();var Td=no.exports;const w=md(Td);function Cd(e){const{prototype:t={}}=e;return!!t.isReactComponent}function oi(e,t,n,r,o){const s=e[t],i=o||t;if(s==null||typeof window>"u")return null;let l;const d=s.type;return typeof d=="function"&&!Cd(d)&&(l="Did you accidentally use a plain function component for an element instead?"),l!==void 0?new Error(`Invalid ${r} \`${i}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const si=Oo(w.element,oi);si.isRequired=Oo(w.element.isRequired,oi);const ai=si,jd="exact-prop: ​";function Od(e){return process.env.NODE_ENV==="production"?e:$({},e,{[jd]:t=>{const n=Object.keys(t).filter(r=>!e.hasOwnProperty(r));return n.length>0?new Error(`The following props are not supported: ${n.map(r=>`\`${r}\``).join(", ")}. Please remove them.`):null}})}function Ut(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var ro={exports:{}},de={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts;function Rd(){if(Ts)return de;Ts=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),f;f=Symbol.for("react.module.reference");function h(g){if(typeof g=="object"&&g!==null){var k=g.$$typeof;switch(k){case e:switch(g=g.type,g){case n:case o:case r:case u:case p:return g;default:switch(g=g&&g.$$typeof,g){case l:case i:case d:case c:case b:case s:return g;default:return k}}case t:return k}}}return de.ContextConsumer=i,de.ContextProvider=s,de.Element=e,de.ForwardRef=d,de.Fragment=n,de.Lazy=c,de.Memo=b,de.Portal=t,de.Profiler=o,de.StrictMode=r,de.Suspense=u,de.SuspenseList=p,de.isAsyncMode=function(){return!1},de.isConcurrentMode=function(){return!1},de.isContextConsumer=function(g){return h(g)===i},de.isContextProvider=function(g){return h(g)===s},de.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===e},de.isForwardRef=function(g){return h(g)===d},de.isFragment=function(g){return h(g)===n},de.isLazy=function(g){return h(g)===c},de.isMemo=function(g){return h(g)===b},de.isPortal=function(g){return h(g)===t},de.isProfiler=function(g){return h(g)===o},de.isStrictMode=function(g){return h(g)===r},de.isSuspense=function(g){return h(g)===u},de.isSuspenseList=function(g){return h(g)===p},de.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===n||g===o||g===r||g===u||g===p||g===m||typeof g=="object"&&g!==null&&(g.$$typeof===c||g.$$typeof===b||g.$$typeof===s||g.$$typeof===i||g.$$typeof===d||g.$$typeof===f||g.getModuleId!==void 0)},de.typeOf=h,de}var ue={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs;function Pd(){return Cs||(Cs=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),f=!1,h=!1,g=!1,k=!1,C=!1,S;S=Symbol.for("react.module.reference");function N(V){return!!(typeof V=="string"||typeof V=="function"||V===n||V===o||C||V===r||V===u||V===p||k||V===m||f||h||g||typeof V=="object"&&V!==null&&(V.$$typeof===c||V.$$typeof===b||V.$$typeof===s||V.$$typeof===i||V.$$typeof===d||V.$$typeof===S||V.getModuleId!==void 0))}function v(V){if(typeof V=="object"&&V!==null){var ye=V.$$typeof;switch(ye){case e:var Ge=V.type;switch(Ge){case n:case o:case r:case u:case p:return Ge;default:var pt=Ge&&Ge.$$typeof;switch(pt){case l:case i:case d:case c:case b:case s:return pt;default:return ye}}case t:return ye}}}var O=i,_=s,B=e,T=d,P=n,E=c,D=b,M=t,J=o,Y=r,U=u,te=p,ie=!1,se=!1;function x(V){return ie||(ie=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function R(V){return se||(se=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function z(V){return v(V)===i}function F(V){return v(V)===s}function L(V){return typeof V=="object"&&V!==null&&V.$$typeof===e}function W(V){return v(V)===d}function H(V){return v(V)===n}function X(V){return v(V)===c}function q(V){return v(V)===b}function Z(V){return v(V)===t}function Q(V){return v(V)===o}function pe(V){return v(V)===r}function I(V){return v(V)===u}function xe(V){return v(V)===p}ue.ContextConsumer=O,ue.ContextProvider=_,ue.Element=B,ue.ForwardRef=T,ue.Fragment=P,ue.Lazy=E,ue.Memo=D,ue.Portal=M,ue.Profiler=J,ue.StrictMode=Y,ue.Suspense=U,ue.SuspenseList=te,ue.isAsyncMode=x,ue.isConcurrentMode=R,ue.isContextConsumer=z,ue.isContextProvider=F,ue.isElement=L,ue.isForwardRef=W,ue.isFragment=H,ue.isLazy=X,ue.isMemo=q,ue.isPortal=Z,ue.isProfiler=Q,ue.isStrictMode=pe,ue.isSuspense=I,ue.isSuspenseList=xe,ue.isValidElementType=N,ue.typeOf=v}()),ue}process.env.NODE_ENV==="production"?ro.exports=Rd():ro.exports=Pd();var js=ro.exports;const _d=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function $d(e){const t=`${e}`.match(_d);return t&&t[1]||""}function ii(e,t=""){return e.displayName||e.name||$d(e)||t}function Os(e,t,n){const r=ii(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function Id(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return ii(e,"Component");if(typeof e=="object")switch(e.$$typeof){case js.ForwardRef:return Os(e,e.render,"ForwardRef");case js.Memo:return Os(e,e.type,"memo");default:return}}}function En(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const s=e[t],i=o||t;return s==null?null:s&&s.nodeType!==1?new Error(`Invalid ${r} \`${i}\` supplied to \`${n}\`. Expected an HTMLElement.`):null}const Md=w.oneOfType([w.func,w.object]),li=Md;function Ye(e){if(typeof e!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":Ut(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Ad(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function Dd(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function Bd(e,t){return process.env.NODE_ENV==="production"?()=>null:(n,r,o,s,i)=>{const l=o||"<<anonymous>>",d=i||r;return typeof n[r]<"u"?new Error(`The ${s} \`${d}\` of \`${l}\` is deprecated. ${t}`):null}}function Vd(e,t){var n,r;return A.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function tr(e){return e&&e.ownerDocument||document}function Ld(e){return tr(e).defaultView||window}function zd(e,t){if(process.env.NODE_ENV==="production")return()=>null;const n=t?$({},t.propTypes):null;return o=>(s,i,l,d,u,...p)=>{const b=u||i,c=n==null?void 0:n[b];if(c){const m=c(s,i,l,d,u,...p);if(m)return m}return typeof s[i]<"u"&&!s[o]?new Error(`The prop \`${b}\` of \`${e}\` can only be used together with the \`${o}\` prop.`):null}}function nr(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Fd=typeof window<"u"?A.useLayoutEffect:A.useEffect,qt=Fd;let Rs=0;function Gd(e){const[t,n]=A.useState(e),r=e||t;return A.useEffect(()=>{t==null&&(Rs+=1,n(`mui-${Rs}`))},[t]),r}const Ps=A["useId".toString()];function ci(e){if(Ps!==void 0){const t=Ps();return e??t}return Gd(e)}function Ud(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const s=o||t;return typeof e[t]<"u"?new Error(`The prop \`${s}\` is not supported. Please remove it.`):null}function di({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=A.useRef(e!==void 0),[s,i]=A.useState(t),l=o?e:s;if(process.env.NODE_ENV!=="production"){A.useEffect(()=>{o!==(e!==void 0)&&console.error([`MUI: A component is changing the ${o?"":"un"}controlled ${r} state of ${n} to be ${o?"un":""}controlled.`,"Elements should not switch from uncontrolled to controlled (or vice versa).",`Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`,"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.","More info: https://fb.me/react-controlled-components"].join(`
`))},[r,n,e]);const{current:u}=A.useRef(t);A.useEffect(()=>{!o&&u!==t&&console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`))},[JSON.stringify(t)])}const d=A.useCallback(u=>{o||i(u)},[]);return[l,d]}function oo(e){const t=A.useRef(e);return qt(()=>{t.current=e}),A.useRef((...n)=>(0,t.current)(...n)).current}function Tt(...e){return A.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{nr(n,t)})},e)}const _s={};function qd(e,t){const n=A.useRef(_s);return n.current===_s&&(n.current=e(t)),n}const Hd=[];function Xd(e){A.useEffect(e,Hd)}class In{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new In}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function wn(){const e=qd(In.create).current;return Xd(e.disposeEffect),e}let wr=!0,so=!1;const Wd=new In,Yd={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Kd(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Yd[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Jd(e){e.metaKey||e.altKey||e.ctrlKey||(wr=!0)}function Gr(){wr=!1}function Zd(){this.visibilityState==="hidden"&&so&&(wr=!0)}function Qd(e){e.addEventListener("keydown",Jd,!0),e.addEventListener("mousedown",Gr,!0),e.addEventListener("pointerdown",Gr,!0),e.addEventListener("touchstart",Gr,!0),e.addEventListener("visibilitychange",Zd,!0)}function eu(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return wr||Kd(t)}function ui(){const e=A.useCallback(o=>{o!=null&&Qd(o.ownerDocument)},[]),t=A.useRef(!1);function n(){return t.current?(so=!0,Wd.start(100,()=>{so=!1}),t.current=!1,!0):!1}function r(o){return eu(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function pi(e,t){const n=$({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=$({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},s=t[r];n[r]={},!s||!Object.keys(s)?n[r]=o:!o||!Object.keys(o)?n[r]=s:(n[r]=$({},s),Object.keys(o).forEach(i=>{n[r][i]=pi(o[i],s[i])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function Po(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((s,i)=>{if(i){const l=t(i);l!==""&&s.push(l),n&&n[i]&&s.push(n[i])}return s},[]).join(" ")}),r}const $s=e=>e,tu=()=>{let e=$s;return{configure(t){e=t},generate(t){return e(t)},reset(){e=$s}}},nu=tu(),fi=nu,wi={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function mr(e,t,n="Mui"){const r=wi[t];return r?`${n}-${r}`:`${fi.generate(e)}-${t}`}function mi(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=mr(e,o,n)}),r}function ru(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function ke(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const ou=["values","unit","step"],su=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>$({},n,{[r.key]:r.val}),{})};function au(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=ke(e,ou),s=su(t),i=Object.keys(s);function l(c){return`@media (min-width:${typeof t[c]=="number"?t[c]:c}${n})`}function d(c){return`@media (max-width:${(typeof t[c]=="number"?t[c]:c)-r/100}${n})`}function u(c,m){const f=i.indexOf(m);return`@media (min-width:${typeof t[c]=="number"?t[c]:c}${n}) and (max-width:${(f!==-1&&typeof t[i[f]]=="number"?t[i[f]]:m)-r/100}${n})`}function p(c){return i.indexOf(c)+1<i.length?u(c,i[i.indexOf(c)+1]):l(c)}function b(c){const m=i.indexOf(c);return m===0?l(i[1]):m===i.length-1?d(i[m]):u(c,i[i.indexOf(c)+1]).replace("@media","@media not all and")}return $({keys:i,values:s,up:l,down:d,between:u,only:p,not:b,unit:n},o)}const iu={borderRadius:4},lu=iu,cu=process.env.NODE_ENV!=="production"?w.oneOfType([w.number,w.string,w.object,w.array]):{},dt=cu;function vn(e,t){return t?tt(e,t,{clone:!1}):e}const _o={xs:0,sm:600,md:900,lg:1200,xl:1536},Is={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${_o[e]}px)`};function nt(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const s=r.breakpoints||Is;return t.reduce((i,l,d)=>(i[s.up(s.keys[d])]=n(t[d]),i),{})}if(typeof t=="object"){const s=r.breakpoints||Is;return Object.keys(t).reduce((i,l)=>{if(Object.keys(s.values||_o).indexOf(l)!==-1){const d=s.up(l);i[d]=n(t[l],l)}else{const d=l;i[d]=t[d]}return i},{})}return n(t)}function du(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const s=e.up(o);return r[s]={},r},{}))||{}}function uu(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function hr(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,s)=>o&&o[s]?o[s]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function rr(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=hr(e,n)||r,t&&(o=t(o,r,e)),o}function ve(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,s=i=>{if(i[t]==null)return null;const l=i[t],d=i.theme,u=hr(d,r)||{};return nt(i,l,b=>{let c=rr(u,o,b);return b===c&&typeof b=="string"&&(c=rr(u,o,`${t}${b==="default"?"":Ye(b)}`,b)),n===!1?c:{[n]:c}})};return s.propTypes=process.env.NODE_ENV!=="production"?{[t]:dt}:{},s.filterProps=[t],s}function pu(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const fu={m:"margin",p:"padding"},wu={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Ms={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},mu=pu(e=>{if(e.length>2)if(Ms[e])e=Ms[e];else return[e];const[t,n]=e.split(""),r=fu[t],o=wu[n]||"";return Array.isArray(o)?o.map(s=>r+s):[r+o]}),gr=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],br=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],hu=[...gr,...br];function Mn(e,t,n,r){var o;const s=(o=hr(e,t,!1))!=null?o:n;return typeof s=="number"?i=>typeof i=="string"?i:(process.env.NODE_ENV!=="production"&&typeof i!="number"&&console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`),s*i):Array.isArray(s)?i=>typeof i=="string"?i:(process.env.NODE_ENV!=="production"&&(Number.isInteger(i)?i>s.length-1&&console.error([`MUI: The value provided (${i}) overflows.`,`The supported values are: ${JSON.stringify(s)}.`,`${i} > ${s.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))),s[i]):typeof s=="function"?s:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function hi(e){return Mn(e,"spacing",8,"spacing")}function An(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function gu(e,t){return n=>e.reduce((r,o)=>(r[o]=An(t,n),r),{})}function bu(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=mu(n),s=gu(o,r),i=e[n];return nt(e,i,s)}function gi(e,t){const n=hi(e.theme);return Object.keys(e).map(r=>bu(e,t,r,n)).reduce(vn,{})}function me(e){return gi(e,gr)}me.propTypes=process.env.NODE_ENV!=="production"?gr.reduce((e,t)=>(e[t]=dt,e),{}):{};me.filterProps=gr;function he(e){return gi(e,br)}he.propTypes=process.env.NODE_ENV!=="production"?br.reduce((e,t)=>(e[t]=dt,e),{}):{};he.filterProps=br;process.env.NODE_ENV!=="production"&&hu.reduce((e,t)=>(e[t]=dt,e),{});function vu(e=8){if(e.mui)return e;const t=hi({spacing:e}),n=(...r)=>(process.env.NODE_ENV!=="production"&&(r.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)),(r.length===0?[1]:r).map(s=>{const i=t(s);return typeof i=="number"?`${i}px`:i}).join(" "));return n.mui=!0,n}function vr(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(s=>{r[s]=o}),r),{}),n=r=>Object.keys(r).reduce((o,s)=>t[s]?vn(o,t[s](r)):o,{});return n.propTypes=process.env.NODE_ENV!=="production"?e.reduce((r,o)=>Object.assign(r,o.propTypes),{}):{},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function Be(e){return typeof e!="number"?e:`${e}px solid`}function Fe(e,t){return ve({prop:e,themeKey:"borders",transform:t})}const yu=Fe("border",Be),xu=Fe("borderTop",Be),ku=Fe("borderRight",Be),Nu=Fe("borderBottom",Be),Eu=Fe("borderLeft",Be),Su=Fe("borderColor"),Tu=Fe("borderTopColor"),Cu=Fe("borderRightColor"),ju=Fe("borderBottomColor"),Ou=Fe("borderLeftColor"),Ru=Fe("outline",Be),Pu=Fe("outlineColor"),yr=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Mn(e.theme,"shape.borderRadius",4,"borderRadius"),n=r=>({borderRadius:An(t,r)});return nt(e,e.borderRadius,n)}return null};yr.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:dt}:{};yr.filterProps=["borderRadius"];vr(yu,xu,ku,Nu,Eu,Su,Tu,Cu,ju,Ou,yr,Ru,Pu);const xr=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Mn(e.theme,"spacing",8,"gap"),n=r=>({gap:An(t,r)});return nt(e,e.gap,n)}return null};xr.propTypes=process.env.NODE_ENV!=="production"?{gap:dt}:{};xr.filterProps=["gap"];const kr=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Mn(e.theme,"spacing",8,"columnGap"),n=r=>({columnGap:An(t,r)});return nt(e,e.columnGap,n)}return null};kr.propTypes=process.env.NODE_ENV!=="production"?{columnGap:dt}:{};kr.filterProps=["columnGap"];const Nr=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Mn(e.theme,"spacing",8,"rowGap"),n=r=>({rowGap:An(t,r)});return nt(e,e.rowGap,n)}return null};Nr.propTypes=process.env.NODE_ENV!=="production"?{rowGap:dt}:{};Nr.filterProps=["rowGap"];const _u=ve({prop:"gridColumn"}),$u=ve({prop:"gridRow"}),Iu=ve({prop:"gridAutoFlow"}),Mu=ve({prop:"gridAutoColumns"}),Au=ve({prop:"gridAutoRows"}),Du=ve({prop:"gridTemplateColumns"}),Bu=ve({prop:"gridTemplateRows"}),Vu=ve({prop:"gridTemplateAreas"}),Lu=ve({prop:"gridArea"});vr(xr,kr,Nr,_u,$u,Iu,Mu,Au,Du,Bu,Vu,Lu);function Lt(e,t){return t==="grey"?t:e}const zu=ve({prop:"color",themeKey:"palette",transform:Lt}),Fu=ve({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Lt}),Gu=ve({prop:"backgroundColor",themeKey:"palette",transform:Lt});vr(zu,Fu,Gu);function $e(e){return e<=1&&e!==0?`${e*100}%`:e}const Uu=ve({prop:"width",transform:$e}),$o=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const s=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||_o[n];return s?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${s}${e.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:$e(n)}};return nt(e,e.maxWidth,t)}return null};$o.filterProps=["maxWidth"];const qu=ve({prop:"minWidth",transform:$e}),Hu=ve({prop:"height",transform:$e}),Xu=ve({prop:"maxHeight",transform:$e}),Wu=ve({prop:"minHeight",transform:$e});ve({prop:"size",cssProperty:"width",transform:$e});ve({prop:"size",cssProperty:"height",transform:$e});const Yu=ve({prop:"boxSizing"});vr(Uu,$o,qu,Hu,Xu,Wu,Yu);const Ku={border:{themeKey:"borders",transform:Be},borderTop:{themeKey:"borders",transform:Be},borderRight:{themeKey:"borders",transform:Be},borderBottom:{themeKey:"borders",transform:Be},borderLeft:{themeKey:"borders",transform:Be},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Be},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:yr},color:{themeKey:"palette",transform:Lt},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Lt},backgroundColor:{themeKey:"palette",transform:Lt},p:{style:he},pt:{style:he},pr:{style:he},pb:{style:he},pl:{style:he},px:{style:he},py:{style:he},padding:{style:he},paddingTop:{style:he},paddingRight:{style:he},paddingBottom:{style:he},paddingLeft:{style:he},paddingX:{style:he},paddingY:{style:he},paddingInline:{style:he},paddingInlineStart:{style:he},paddingInlineEnd:{style:he},paddingBlock:{style:he},paddingBlockStart:{style:he},paddingBlockEnd:{style:he},m:{style:me},mt:{style:me},mr:{style:me},mb:{style:me},ml:{style:me},mx:{style:me},my:{style:me},margin:{style:me},marginTop:{style:me},marginRight:{style:me},marginBottom:{style:me},marginLeft:{style:me},marginX:{style:me},marginY:{style:me},marginInline:{style:me},marginInlineStart:{style:me},marginInlineEnd:{style:me},marginBlock:{style:me},marginBlockStart:{style:me},marginBlockEnd:{style:me},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:xr},rowGap:{style:Nr},columnGap:{style:kr},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:$e},maxWidth:{style:$o},minWidth:{transform:$e},height:{transform:$e},maxHeight:{transform:$e},minHeight:{transform:$e},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Io=Ku;function Ju(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Zu(e,t){return typeof e=="function"?e(t):e}function Qu(){function e(n,r,o,s){const i={[n]:r,theme:o},l=s[n];if(!l)return{[n]:r};const{cssProperty:d=n,themeKey:u,transform:p,style:b}=l;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const c=hr(o,u)||{};return b?b(i):nt(i,r,f=>{let h=rr(c,p,f);return f===h&&typeof f=="string"&&(h=rr(c,p,`${n}${f==="default"?"":Ye(f)}`,f)),d===!1?h:{[d]:h}})}function t(n){var r;const{sx:o,theme:s={}}=n||{};if(!o)return null;const i=(r=s.unstable_sxConfig)!=null?r:Io;function l(d){let u=d;if(typeof d=="function")u=d(s);else if(typeof d!="object")return d;if(!u)return null;const p=du(s.breakpoints),b=Object.keys(p);let c=p;return Object.keys(u).forEach(m=>{const f=Zu(u[m],s);if(f!=null)if(typeof f=="object")if(i[m])c=vn(c,e(m,f,s,i));else{const h=nt({theme:s},f,g=>({[m]:g}));Ju(h,f)?c[m]=t({sx:f,theme:s}):c=vn(c,h)}else c=vn(c,e(m,f,s,i))}),uu(b,c)}return Array.isArray(o)?o.map(l):l(o)}return t}const bi=Qu();bi.filterProps=["sx"];const Mo=bi;function ep(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const tp=["breakpoints","palette","spacing","shape"];function Ao(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:s={}}=e,i=ke(e,tp),l=au(n),d=vu(o);let u=tt({breakpoints:l,direction:"ltr",components:{},palette:$({mode:"light"},r),spacing:d,shape:$({},lu,s)},i);return u.applyStyles=ep,u=t.reduce((p,b)=>tt(p,b),u),u.unstable_sxConfig=$({},Io,i==null?void 0:i.unstable_sxConfig),u.unstable_sx=function(b){return Mo({sx:b,theme:this})},u}function np(e){return Object.keys(e).length===0}function vi(e=null){const t=A.useContext(Jr.ThemeContext);return!t||np(t)?e:t}const rp=Ao();function yi(e=rp){return vi(e)}const op=["ownerState"],sp=["variants"],ap=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ip(e){return Object.keys(e).length===0}function lp(e){return typeof e=="string"&&e.charCodeAt(0)>96}function Kn(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const cp=Ao(),As=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function qn({defaultTheme:e,theme:t,themeId:n}){return ip(t)?e:t[n]||t}function dp(e){return e?(t,n)=>n[e]:null}function Jn(e,t){let{ownerState:n}=t,r=ke(t,op);const o=typeof e=="function"?e($({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(s=>Jn(s,$({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:s=[]}=o;let l=ke(o,sp);return s.forEach(d=>{let u=!0;typeof d.props=="function"?u=d.props($({ownerState:n},r,n)):Object.keys(d.props).forEach(p=>{(n==null?void 0:n[p])!==d.props[p]&&r[p]!==d.props[p]&&(u=!1)}),u&&(Array.isArray(l)||(l=[l]),l.push(typeof d.style=="function"?d.style($({ownerState:n},r,n)):d.style))}),l}return o}function up(e={}){const{themeId:t,defaultTheme:n=cp,rootShouldForwardProp:r=Kn,slotShouldForwardProp:o=Kn}=e,s=i=>Mo($({},i,{theme:qn($({},i,{defaultTheme:n,themeId:t}))}));return s.__mui_systemSx=!0,(i,l={})=>{Jr.internal_processStyles(i,v=>v.filter(O=>!(O!=null&&O.__mui_systemSx)));const{name:d,slot:u,skipVariantsResolver:p,skipSx:b,overridesResolver:c=dp(As(u))}=l,m=ke(l,ap),f=p!==void 0?p:u&&u!=="Root"&&u!=="root"||!1,h=b||!1;let g;process.env.NODE_ENV!=="production"&&d&&(g=`${d}-${As(u||"Root")}`);let k=Kn;u==="Root"||u==="root"?k=r:u?k=o:lp(i)&&(k=void 0);const C=Jr(i,$({shouldForwardProp:k,label:g},m)),S=v=>typeof v=="function"&&v.__emotion_real!==v||vt(v)?O=>Jn(v,$({},O,{theme:qn({theme:O.theme,defaultTheme:n,themeId:t})})):v,N=(v,...O)=>{let _=S(v);const B=O?O.map(S):[];d&&c&&B.push(E=>{const D=qn($({},E,{defaultTheme:n,themeId:t}));if(!D.components||!D.components[d]||!D.components[d].styleOverrides)return null;const M=D.components[d].styleOverrides,J={};return Object.entries(M).forEach(([Y,U])=>{J[Y]=Jn(U,$({},E,{theme:D}))}),c(E,J)}),d&&!f&&B.push(E=>{var D;const M=qn($({},E,{defaultTheme:n,themeId:t})),J=M==null||(D=M.components)==null||(D=D[d])==null?void 0:D.variants;return Jn({variants:J},$({},E,{theme:M}))}),h||B.push(s);const T=B.length-O.length;if(Array.isArray(v)&&T>0){const E=new Array(T).fill("");_=[...v,...E],_.raw=[...v.raw,...E]}const P=C(_,...B);if(process.env.NODE_ENV!=="production"){let E;d&&(E=`${d}${Ye(u||"")}`),E===void 0&&(E=`Styled(${Id(i)})`),P.displayName=E}return i.muiName&&(P.muiName=i.muiName),P};return C.withConfig&&(N.withConfig=C.withConfig),N}}function pp(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:pi(t.components[n].defaultProps,r)}function fp({props:e,name:t,defaultTheme:n,themeId:r}){let o=yi(n);return r&&(o=o[r]||o),pp({theme:o,name:t,props:e})}function Do(e,t=0,n=1){return process.env.NODE_ENV!=="production"&&(e<t||e>n)&&console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`),ru(e,t,n)}function wp(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Ct(e){if(e.type)return e;if(e.charAt(0)==="#")return Ct(wp(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:Ut(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:Ut(10,o))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:o}}function Er(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,s)=>s<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function mp(e){e=Ct(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,s=r*Math.min(o,1-o),i=(u,p=(u+n/30)%12)=>o-s*Math.max(Math.min(p-3,9-p,1),-1);let l="rgb";const d=[Math.round(i(0)*255),Math.round(i(8)*255),Math.round(i(4)*255)];return e.type==="hsla"&&(l+="a",d.push(t[3])),Er({type:l,values:d})}function Ds(e){e=Ct(e);let t=e.type==="hsl"||e.type==="hsla"?Ct(mp(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Bs(e,t){const n=Ds(e),r=Ds(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function xi(e,t){return e=Ct(e),t=Do(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Er(e)}function hp(e,t){if(e=Ct(e),t=Do(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Er(e)}function gp(e,t){if(e=Ct(e),t=Do(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Er(e)}function bp(e,t){return $({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const vp={black:"#000",white:"#fff"},Sn=vp,yp={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},xp=yp,kp={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},$t=kp,Np={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},It=Np,Ep={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ln=Ep,Sp={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Mt=Sp,Tp={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},At=Tp,Cp={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Dt=Cp,jp=["mode","contrastThreshold","tonalOffset"],Vs={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Sn.white,default:Sn.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ur={text:{primary:Sn.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Sn.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ls(e,t,n,r){const o=r.light||r,s=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=gp(e.main,o):t==="dark"&&(e.dark=hp(e.main,s)))}function Op(e="light"){return e==="dark"?{main:Mt[200],light:Mt[50],dark:Mt[400]}:{main:Mt[700],light:Mt[400],dark:Mt[800]}}function Rp(e="light"){return e==="dark"?{main:$t[200],light:$t[50],dark:$t[400]}:{main:$t[500],light:$t[300],dark:$t[700]}}function Pp(e="light"){return e==="dark"?{main:It[500],light:It[300],dark:It[700]}:{main:It[700],light:It[400],dark:It[800]}}function _p(e="light"){return e==="dark"?{main:At[400],light:At[300],dark:At[700]}:{main:At[700],light:At[500],dark:At[900]}}function $p(e="light"){return e==="dark"?{main:Dt[400],light:Dt[300],dark:Dt[700]}:{main:Dt[800],light:Dt[500],dark:Dt[900]}}function Ip(e="light"){return e==="dark"?{main:ln[400],light:ln[300],dark:ln[700]}:{main:"#ed6c02",light:ln[500],dark:ln[900]}}function Mp(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=ke(e,jp),s=e.primary||Op(t),i=e.secondary||Rp(t),l=e.error||Pp(t),d=e.info||_p(t),u=e.success||$p(t),p=e.warning||Ip(t);function b(h){const g=Bs(h,Ur.text.primary)>=n?Ur.text.primary:Vs.text.primary;if(process.env.NODE_ENV!=="production"){const k=Bs(h,g);k<3&&console.error([`MUI: The contrast ratio of ${k}:1 for ${g} on ${h}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return g}const c=({color:h,name:g,mainShade:k=500,lightShade:C=300,darkShade:S=700})=>{if(h=$({},h),!h.main&&h[k]&&(h.main=h[k]),!h.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${g?` (${g})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${k}\` property.`:Ut(11,g?` (${g})`:"",k));if(typeof h.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${g?` (${g})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:Ut(12,g?` (${g})`:"",JSON.stringify(h.main)));return Ls(h,"light",C,r),Ls(h,"dark",S,r),h.contrastText||(h.contrastText=b(h.main)),h},m={dark:Ur,light:Vs};return process.env.NODE_ENV!=="production"&&(m[t]||console.error(`MUI: The palette mode \`${t}\` is not supported.`)),tt($({common:$({},Sn),mode:t,primary:c({color:s,name:"primary"}),secondary:c({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:c({color:l,name:"error"}),warning:c({color:p,name:"warning"}),info:c({color:d,name:"info"}),success:c({color:u,name:"success"}),grey:xp,contrastThreshold:n,getContrastText:b,augmentColor:c,tonalOffset:r},m[t]),o)}const Ap=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Dp(e){return Math.round(e*1e5)/1e5}const zs={textTransform:"uppercase"},Fs='"Roboto", "Helvetica", "Arial", sans-serif';function Bp(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Fs,fontSize:o=14,fontWeightLight:s=300,fontWeightRegular:i=400,fontWeightMedium:l=500,fontWeightBold:d=700,htmlFontSize:u=16,allVariants:p,pxToRem:b}=n,c=ke(n,Ap);process.env.NODE_ENV!=="production"&&(typeof o!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof u!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const m=o/14,f=b||(k=>`${k/u*m}rem`),h=(k,C,S,N,v)=>$({fontFamily:r,fontWeight:k,fontSize:f(C),lineHeight:S},r===Fs?{letterSpacing:`${Dp(N/C)}em`}:{},v,p),g={h1:h(s,96,1.167,-1.5),h2:h(s,60,1.2,-.5),h3:h(i,48,1.167,0),h4:h(i,34,1.235,.25),h5:h(i,24,1.334,0),h6:h(l,20,1.6,.15),subtitle1:h(i,16,1.75,.15),subtitle2:h(l,14,1.57,.1),body1:h(i,16,1.5,.15),body2:h(i,14,1.43,.15),button:h(l,14,1.75,.4,zs),caption:h(i,12,1.66,.4),overline:h(i,12,2.66,1,zs),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return tt($({htmlFontSize:u,pxToRem:f,fontFamily:r,fontSize:o,fontWeightLight:s,fontWeightRegular:i,fontWeightMedium:l,fontWeightBold:d},g),c,{clone:!1})}const Vp=.2,Lp=.14,zp=.12;function we(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Vp})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Lp})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${zp})`].join(",")}const Fp=["none",we(0,2,1,-1,0,1,1,0,0,1,3,0),we(0,3,1,-2,0,2,2,0,0,1,5,0),we(0,3,3,-2,0,3,4,0,0,1,8,0),we(0,2,4,-1,0,4,5,0,0,1,10,0),we(0,3,5,-1,0,5,8,0,0,1,14,0),we(0,3,5,-1,0,6,10,0,0,1,18,0),we(0,4,5,-2,0,7,10,1,0,2,16,1),we(0,5,5,-3,0,8,10,1,0,3,14,2),we(0,5,6,-3,0,9,12,1,0,3,16,2),we(0,6,6,-3,0,10,14,1,0,4,18,3),we(0,6,7,-4,0,11,15,1,0,4,20,3),we(0,7,8,-4,0,12,17,2,0,5,22,4),we(0,7,8,-4,0,13,19,2,0,5,24,4),we(0,7,9,-4,0,14,21,2,0,5,26,4),we(0,8,9,-5,0,15,22,2,0,6,28,5),we(0,8,10,-5,0,16,24,2,0,6,30,5),we(0,8,11,-5,0,17,26,2,0,6,32,5),we(0,9,11,-5,0,18,28,2,0,7,34,6),we(0,9,12,-6,0,19,29,2,0,7,36,6),we(0,10,13,-6,0,20,31,3,0,8,38,7),we(0,10,13,-6,0,21,33,3,0,8,40,7),we(0,10,14,-6,0,22,35,3,0,8,42,7),we(0,11,14,-7,0,23,36,3,0,9,44,8),we(0,11,15,-7,0,24,38,3,0,9,46,8)],Gp=Fp,Up=["duration","easing","delay"],qp={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Hp={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Gs(e){return`${Math.round(e)}ms`}function Xp(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Wp(e){const t=$({},qp,e.easing),n=$({},Hp,e.duration);return $({getAutoHeightDuration:Xp,create:(o=["all"],s={})=>{const{duration:i=n.standard,easing:l=t.easeInOut,delay:d=0}=s,u=ke(s,Up);if(process.env.NODE_ENV!=="production"){const p=c=>typeof c=="string",b=c=>!isNaN(parseFloat(c));!p(o)&&!Array.isArray(o)&&console.error('MUI: Argument "props" must be a string or Array.'),!b(i)&&!p(i)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`),p(l)||console.error('MUI: Argument "easing" must be a string.'),!b(d)&&!p(d)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof s!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(u).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`)}return(Array.isArray(o)?o:[o]).map(p=>`${p} ${typeof i=="string"?i:Gs(i)} ${l} ${typeof d=="string"?d:Gs(d)}`).join(",")}},e,{easing:t,duration:n})}const Yp={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Kp=Yp,Jp=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Zp(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:s={}}=e,i=ke(e,Jp);if(e.vars)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.":Ut(18));const l=Mp(r),d=Ao(e);let u=tt(d,{mixins:bp(d.breakpoints,n),palette:l,shadows:Gp.slice(),typography:Bp(l,s),transitions:Wp(o),zIndex:$({},Kp)});if(u=tt(u,i),u=t.reduce((p,b)=>tt(p,b),u),process.env.NODE_ENV!=="production"){const p=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],b=(c,m)=>{let f;for(f in c){const h=c[f];if(p.indexOf(f)!==-1&&Object.keys(h).length>0){if(process.env.NODE_ENV!=="production"){const g=mr("",f);console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${f}\` internal state.`,"You can not override it like this: ",JSON.stringify(c,null,2),"",`Instead, you need to use the '&.${g}' syntax:`,JSON.stringify({root:{[`&.${g}`]:h}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}c[f]={}}}};Object.keys(u.components).forEach(c=>{const m=u.components[c].styleOverrides;m&&c.indexOf("Mui")===0&&b(m,c)})}return u.unstable_sxConfig=$({},Io,i==null?void 0:i.unstable_sxConfig),u.unstable_sx=function(b){return Mo({sx:b,theme:this})},u}const Qp=Zp(),Bo=Qp,Vo="$$material";function Lo({props:e,name:t}){return fp({props:e,name:t,defaultTheme:Bo,themeId:Vo})}const ef=e=>Kn(e)&&e!=="classes",tf=up({themeId:Vo,defaultTheme:Bo,rootShouldForwardProp:ef}),Dn=tf;function nf(e){return mr("MuiSvgIcon",e)}mi("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const rf=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],of=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${Ye(t)}`,`fontSize${Ye(n)}`]};return Po(o,nf,r)},sf=Dn("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Ye(n.color)}`],t[`fontSize${Ye(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,s,i,l,d,u,p,b,c,m,f;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(i=s.pxToRem)==null?void 0:i.call(s,20))||"1.25rem",medium:((l=e.typography)==null||(d=l.pxToRem)==null?void 0:d.call(l,24))||"1.5rem",large:((u=e.typography)==null||(p=u.pxToRem)==null?void 0:p.call(u,35))||"2.1875rem"}[t.fontSize],color:(b=(c=(e.vars||e).palette)==null||(c=c[t.color])==null?void 0:c.main)!=null?b:{action:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.active,disabled:(f=(e.vars||e).palette)==null||(f=f.action)==null?void 0:f.disabled,inherit:void 0}[t.color]}}),zo=A.forwardRef(function(t,n){const r=Lo({props:t,name:"MuiSvgIcon"}),{children:o,className:s,color:i="inherit",component:l="svg",fontSize:d="medium",htmlColor:u,inheritViewBox:p=!1,titleAccess:b,viewBox:c="0 0 24 24"}=r,m=ke(r,rf),f=A.isValidElement(o)&&o.type==="svg",h=$({},r,{color:i,component:l,fontSize:d,instanceFontSize:t.fontSize,inheritViewBox:p,viewBox:c,hasSvgAsChild:f}),g={};p||(g.viewBox=c);const k=of(h);return a.jsxs(sf,$({as:l,className:lt(k.root,s),focusable:"false",color:u,"aria-hidden":b?void 0:!0,role:b?"img":void 0,ref:n},g,m,f&&o.props,{ownerState:h,children:[f?o.props.children:o,b?a.jsx("title",{children:b}):null]}))});process.env.NODE_ENV!=="production"&&(zo.propTypes={children:w.node,classes:w.object,className:w.string,color:w.oneOfType([w.oneOf(["inherit","action","disabled","primary","secondary","error","info","success","warning"]),w.string]),component:w.elementType,fontSize:w.oneOfType([w.oneOf(["inherit","large","medium","small"]),w.string]),htmlColor:w.string,inheritViewBox:w.bool,shapeRendering:w.string,sx:w.oneOfType([w.arrayOf(w.oneOfType([w.func,w.object,w.bool])),w.func,w.object]),titleAccess:w.string,viewBox:w.string});zo.muiName="SvgIcon";const Us=zo;function ki(e,t){function n(r,o){return a.jsx(Us,$({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return process.env.NODE_ENV!=="production"&&(n.displayName=`${t}Icon`),n.muiName=Us.muiName,A.memo(A.forwardRef(n))}const af={configure:e=>{process.env.NODE_ENV!=="production"&&console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),fi.configure(e)}},lf=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ye,createChainedFunction:Ad,createSvgIcon:ki,debounce:Dd,deprecatedPropType:Bd,isMuiElement:Vd,ownerDocument:tr,ownerWindow:Ld,requirePropFactory:zd,setRef:nr,unstable_ClassNameGenerator:af,unstable_useEnhancedEffect:qt,unstable_useId:ci,unsupportedProp:Ud,useControlled:di,useEventCallback:oo,useForkRef:Tt,useIsFocusVisible:ui},Symbol.toStringTag,{value:"Module"})),cf=hd(lf);var qs;function df(){return qs||(qs=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=cf}(Ar)),Ar}var uf=gd;Object.defineProperty(jo,"__esModule",{value:!0});var Ni=jo.default=void 0,pf=uf(df()),ff=a;Ni=jo.default=(0,pf.default)((0,ff.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");function wf(e){return typeof e=="string"}function mn(e,t,n){return e===void 0||wf(e)?t:$({},t,{ownerState:$({},t.ownerState,n)})}const mf={disableDefaultClasses:!1},hf=A.createContext(mf);function gf(e){const{disableDefaultClasses:t}=A.useContext(hf);return n=>t?"":e(n)}function bf(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function vf(e,t,n){return typeof e=="function"?e(t,n):e}function Hs(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function yf(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:s}=e;if(!t){const m=lt(n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),f=$({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),h=$({},n,o,r);return m.length>0&&(h.className=m),Object.keys(f).length>0&&(h.style=f),{props:h,internalRef:void 0}}const i=bf($({},o,r)),l=Hs(r),d=Hs(o),u=t(i),p=lt(u==null?void 0:u.className,n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),b=$({},u==null?void 0:u.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),c=$({},u,n,d,l);return p.length>0&&(c.className=p),Object.keys(b).length>0&&(c.style=b),{props:c,internalRef:u.ref}}const xf=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function kf(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:s=!1}=e,i=ke(e,xf),l=s?{}:vf(r,o),{props:d,internalRef:u}=yf($({},i,{externalSlotProps:l})),p=Tt(u,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return mn(n,$({},d,{ref:p}),o)}const Ei="base";function Nf(e){return`${Ei}--${e}`}function Ef(e,t){return`${Ei}-${e}-${t}`}function Si(e,t){const n=wi[t];return n?Nf(n):Ef(e,t)}function Sf(e,t){const n={};return t.forEach(r=>{n[r]=Si(e,r)}),n}function Tf(e){return typeof e=="function"?e():e}const or=A.forwardRef(function(t,n){const{children:r,container:o,disablePortal:s=!1}=t,[i,l]=A.useState(null),d=Tt(A.isValidElement(r)?r.ref:null,n);if(qt(()=>{s||l(Tf(o)||document.body)},[o,s]),qt(()=>{if(i&&!s)return nr(n,i),()=>{nr(n,null)}},[n,i,s]),s){if(A.isValidElement(r)){const u={ref:d};return A.cloneElement(r,u)}return a.jsx(A.Fragment,{children:r})}return a.jsx(A.Fragment,{children:i&&nc.createPortal(r,i)})});process.env.NODE_ENV!=="production"&&(or.propTypes={children:w.node,container:w.oneOfType([En,w.func]),disablePortal:w.bool});process.env.NODE_ENV!=="production"&&(or["propTypes"]=Od(or.propTypes));var Ce="top",Le="bottom",ze="right",je="left",Fo="auto",Bn=[Ce,Le,ze,je],Ht="start",Tn="end",Cf="clippingParents",Ti="viewport",cn="popper",jf="reference",Xs=Bn.reduce(function(e,t){return e.concat([t+"-"+Ht,t+"-"+Tn])},[]),Ci=[].concat(Bn,[Fo]).reduce(function(e,t){return e.concat([t,t+"-"+Ht,t+"-"+Tn])},[]),Of="beforeRead",Rf="read",Pf="afterRead",_f="beforeMain",$f="main",If="afterMain",Mf="beforeWrite",Af="write",Df="afterWrite",Bf=[Of,Rf,Pf,_f,$f,If,Mf,Af,Df];function Ke(e){return e?(e.nodeName||"").toLowerCase():null}function Me(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function jt(e){var t=Me(e).Element;return e instanceof t||e instanceof Element}function Ve(e){var t=Me(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Go(e){if(typeof ShadowRoot>"u")return!1;var t=Me(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Vf(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},s=t.elements[n];!Ve(s)||!Ke(s)||(Object.assign(s.style,r),Object.keys(o).forEach(function(i){var l=o[i];l===!1?s.removeAttribute(i):s.setAttribute(i,l===!0?"":l)}))})}function Lf(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],s=t.attributes[r]||{},i=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),l=i.reduce(function(d,u){return d[u]="",d},{});!Ve(o)||!Ke(o)||(Object.assign(o.style,l),Object.keys(s).forEach(function(d){o.removeAttribute(d)}))})}}const zf={name:"applyStyles",enabled:!0,phase:"write",fn:Vf,effect:Lf,requires:["computeStyles"]};function Xe(e){return e.split("-")[0]}var xt=Math.max,sr=Math.min,Xt=Math.round;function ao(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ji(){return!/^((?!chrome|android).)*safari/i.test(ao())}function Wt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,s=1;t&&Ve(e)&&(o=e.offsetWidth>0&&Xt(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Xt(r.height)/e.offsetHeight||1);var i=jt(e)?Me(e):window,l=i.visualViewport,d=!ji()&&n,u=(r.left+(d&&l?l.offsetLeft:0))/o,p=(r.top+(d&&l?l.offsetTop:0))/s,b=r.width/o,c=r.height/s;return{width:b,height:c,top:p,right:u+b,bottom:p+c,left:u,x:u,y:p}}function Uo(e){var t=Wt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Oi(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Go(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function rt(e){return Me(e).getComputedStyle(e)}function Ff(e){return["table","td","th"].indexOf(Ke(e))>=0}function ut(e){return((jt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Sr(e){return Ke(e)==="html"?e:e.assignedSlot||e.parentNode||(Go(e)?e.host:null)||ut(e)}function Ws(e){return!Ve(e)||rt(e).position==="fixed"?null:e.offsetParent}function Gf(e){var t=/firefox/i.test(ao()),n=/Trident/i.test(ao());if(n&&Ve(e)){var r=rt(e);if(r.position==="fixed")return null}var o=Sr(e);for(Go(o)&&(o=o.host);Ve(o)&&["html","body"].indexOf(Ke(o))<0;){var s=rt(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function Vn(e){for(var t=Me(e),n=Ws(e);n&&Ff(n)&&rt(n).position==="static";)n=Ws(n);return n&&(Ke(n)==="html"||Ke(n)==="body"&&rt(n).position==="static")?t:n||Gf(e)||t}function qo(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function yn(e,t,n){return xt(e,sr(t,n))}function Uf(e,t,n){var r=yn(e,t,n);return r>n?n:r}function Ri(){return{top:0,right:0,bottom:0,left:0}}function Pi(e){return Object.assign({},Ri(),e)}function _i(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var qf=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Pi(typeof t!="number"?t:_i(t,Bn))};function Hf(e){var t,n=e.state,r=e.name,o=e.options,s=n.elements.arrow,i=n.modifiersData.popperOffsets,l=Xe(n.placement),d=qo(l),u=[je,ze].indexOf(l)>=0,p=u?"height":"width";if(!(!s||!i)){var b=qf(o.padding,n),c=Uo(s),m=d==="y"?Ce:je,f=d==="y"?Le:ze,h=n.rects.reference[p]+n.rects.reference[d]-i[d]-n.rects.popper[p],g=i[d]-n.rects.reference[d],k=Vn(s),C=k?d==="y"?k.clientHeight||0:k.clientWidth||0:0,S=h/2-g/2,N=b[m],v=C-c[p]-b[f],O=C/2-c[p]/2+S,_=yn(N,O,v),B=d;n.modifiersData[r]=(t={},t[B]=_,t.centerOffset=_-O,t)}}function Xf(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Oi(t.elements.popper,o)&&(t.elements.arrow=o))}const Wf={name:"arrow",enabled:!0,phase:"main",fn:Hf,effect:Xf,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Yt(e){return e.split("-")[1]}var Yf={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Kf(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:Xt(n*o)/o||0,y:Xt(r*o)/o||0}}function Ys(e){var t,n=e.popper,r=e.popperRect,o=e.placement,s=e.variation,i=e.offsets,l=e.position,d=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,b=e.isFixed,c=i.x,m=c===void 0?0:c,f=i.y,h=f===void 0?0:f,g=typeof p=="function"?p({x:m,y:h}):{x:m,y:h};m=g.x,h=g.y;var k=i.hasOwnProperty("x"),C=i.hasOwnProperty("y"),S=je,N=Ce,v=window;if(u){var O=Vn(n),_="clientHeight",B="clientWidth";if(O===Me(n)&&(O=ut(n),rt(O).position!=="static"&&l==="absolute"&&(_="scrollHeight",B="scrollWidth")),O=O,o===Ce||(o===je||o===ze)&&s===Tn){N=Le;var T=b&&O===v&&v.visualViewport?v.visualViewport.height:O[_];h-=T-r.height,h*=d?1:-1}if(o===je||(o===Ce||o===Le)&&s===Tn){S=ze;var P=b&&O===v&&v.visualViewport?v.visualViewport.width:O[B];m-=P-r.width,m*=d?1:-1}}var E=Object.assign({position:l},u&&Yf),D=p===!0?Kf({x:m,y:h},Me(n)):{x:m,y:h};if(m=D.x,h=D.y,d){var M;return Object.assign({},E,(M={},M[N]=C?"0":"",M[S]=k?"0":"",M.transform=(v.devicePixelRatio||1)<=1?"translate("+m+"px, "+h+"px)":"translate3d("+m+"px, "+h+"px, 0)",M))}return Object.assign({},E,(t={},t[N]=C?h+"px":"",t[S]=k?m+"px":"",t.transform="",t))}function Jf(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,s=n.adaptive,i=s===void 0?!0:s,l=n.roundOffsets,d=l===void 0?!0:l,u={placement:Xe(t.placement),variation:Yt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ys(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:d})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ys(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:d})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Zf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Jf,data:{}};var Hn={passive:!0};function Qf(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,s=o===void 0?!0:o,i=r.resize,l=i===void 0?!0:i,d=Me(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach(function(p){p.addEventListener("scroll",n.update,Hn)}),l&&d.addEventListener("resize",n.update,Hn),function(){s&&u.forEach(function(p){p.removeEventListener("scroll",n.update,Hn)}),l&&d.removeEventListener("resize",n.update,Hn)}}const ew={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Qf,data:{}};var tw={left:"right",right:"left",bottom:"top",top:"bottom"};function Zn(e){return e.replace(/left|right|bottom|top/g,function(t){return tw[t]})}var nw={start:"end",end:"start"};function Ks(e){return e.replace(/start|end/g,function(t){return nw[t]})}function Ho(e){var t=Me(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Xo(e){return Wt(ut(e)).left+Ho(e).scrollLeft}function rw(e,t){var n=Me(e),r=ut(e),o=n.visualViewport,s=r.clientWidth,i=r.clientHeight,l=0,d=0;if(o){s=o.width,i=o.height;var u=ji();(u||!u&&t==="fixed")&&(l=o.offsetLeft,d=o.offsetTop)}return{width:s,height:i,x:l+Xo(e),y:d}}function ow(e){var t,n=ut(e),r=Ho(e),o=(t=e.ownerDocument)==null?void 0:t.body,s=xt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=xt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+Xo(e),d=-r.scrollTop;return rt(o||n).direction==="rtl"&&(l+=xt(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:i,x:l,y:d}}function Wo(e){var t=rt(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function $i(e){return["html","body","#document"].indexOf(Ke(e))>=0?e.ownerDocument.body:Ve(e)&&Wo(e)?e:$i(Sr(e))}function xn(e,t){var n;t===void 0&&(t=[]);var r=$i(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),s=Me(r),i=o?[s].concat(s.visualViewport||[],Wo(r)?r:[]):r,l=t.concat(i);return o?l:l.concat(xn(Sr(i)))}function io(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function sw(e,t){var n=Wt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Js(e,t,n){return t===Ti?io(rw(e,n)):jt(t)?sw(t,n):io(ow(ut(e)))}function aw(e){var t=xn(Sr(e)),n=["absolute","fixed"].indexOf(rt(e).position)>=0,r=n&&Ve(e)?Vn(e):e;return jt(r)?t.filter(function(o){return jt(o)&&Oi(o,r)&&Ke(o)!=="body"}):[]}function iw(e,t,n,r){var o=t==="clippingParents"?aw(e):[].concat(t),s=[].concat(o,[n]),i=s[0],l=s.reduce(function(d,u){var p=Js(e,u,r);return d.top=xt(p.top,d.top),d.right=sr(p.right,d.right),d.bottom=sr(p.bottom,d.bottom),d.left=xt(p.left,d.left),d},Js(e,i,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function Ii(e){var t=e.reference,n=e.element,r=e.placement,o=r?Xe(r):null,s=r?Yt(r):null,i=t.x+t.width/2-n.width/2,l=t.y+t.height/2-n.height/2,d;switch(o){case Ce:d={x:i,y:t.y-n.height};break;case Le:d={x:i,y:t.y+t.height};break;case ze:d={x:t.x+t.width,y:l};break;case je:d={x:t.x-n.width,y:l};break;default:d={x:t.x,y:t.y}}var u=o?qo(o):null;if(u!=null){var p=u==="y"?"height":"width";switch(s){case Ht:d[u]=d[u]-(t[p]/2-n[p]/2);break;case Tn:d[u]=d[u]+(t[p]/2-n[p]/2);break}}return d}function Cn(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,s=n.strategy,i=s===void 0?e.strategy:s,l=n.boundary,d=l===void 0?Cf:l,u=n.rootBoundary,p=u===void 0?Ti:u,b=n.elementContext,c=b===void 0?cn:b,m=n.altBoundary,f=m===void 0?!1:m,h=n.padding,g=h===void 0?0:h,k=Pi(typeof g!="number"?g:_i(g,Bn)),C=c===cn?jf:cn,S=e.rects.popper,N=e.elements[f?C:c],v=iw(jt(N)?N:N.contextElement||ut(e.elements.popper),d,p,i),O=Wt(e.elements.reference),_=Ii({reference:O,element:S,strategy:"absolute",placement:o}),B=io(Object.assign({},S,_)),T=c===cn?B:O,P={top:v.top-T.top+k.top,bottom:T.bottom-v.bottom+k.bottom,left:v.left-T.left+k.left,right:T.right-v.right+k.right},E=e.modifiersData.offset;if(c===cn&&E){var D=E[o];Object.keys(P).forEach(function(M){var J=[ze,Le].indexOf(M)>=0?1:-1,Y=[Ce,Le].indexOf(M)>=0?"y":"x";P[M]+=D[Y]*J})}return P}function lw(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,s=n.rootBoundary,i=n.padding,l=n.flipVariations,d=n.allowedAutoPlacements,u=d===void 0?Ci:d,p=Yt(r),b=p?l?Xs:Xs.filter(function(f){return Yt(f)===p}):Bn,c=b.filter(function(f){return u.indexOf(f)>=0});c.length===0&&(c=b);var m=c.reduce(function(f,h){return f[h]=Cn(e,{placement:h,boundary:o,rootBoundary:s,padding:i})[Xe(h)],f},{});return Object.keys(m).sort(function(f,h){return m[f]-m[h]})}function cw(e){if(Xe(e)===Fo)return[];var t=Zn(e);return[Ks(e),t,Ks(t)]}function dw(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,s=o===void 0?!0:o,i=n.altAxis,l=i===void 0?!0:i,d=n.fallbackPlacements,u=n.padding,p=n.boundary,b=n.rootBoundary,c=n.altBoundary,m=n.flipVariations,f=m===void 0?!0:m,h=n.allowedAutoPlacements,g=t.options.placement,k=Xe(g),C=k===g,S=d||(C||!f?[Zn(g)]:cw(g)),N=[g].concat(S).reduce(function(L,W){return L.concat(Xe(W)===Fo?lw(t,{placement:W,boundary:p,rootBoundary:b,padding:u,flipVariations:f,allowedAutoPlacements:h}):W)},[]),v=t.rects.reference,O=t.rects.popper,_=new Map,B=!0,T=N[0],P=0;P<N.length;P++){var E=N[P],D=Xe(E),M=Yt(E)===Ht,J=[Ce,Le].indexOf(D)>=0,Y=J?"width":"height",U=Cn(t,{placement:E,boundary:p,rootBoundary:b,altBoundary:c,padding:u}),te=J?M?ze:je:M?Le:Ce;v[Y]>O[Y]&&(te=Zn(te));var ie=Zn(te),se=[];if(s&&se.push(U[D]<=0),l&&se.push(U[te]<=0,U[ie]<=0),se.every(function(L){return L})){T=E,B=!1;break}_.set(E,se)}if(B)for(var x=f?3:1,R=function(W){var H=N.find(function(X){var q=_.get(X);if(q)return q.slice(0,W).every(function(Z){return Z})});if(H)return T=H,"break"},z=x;z>0;z--){var F=R(z);if(F==="break")break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}}const uw={name:"flip",enabled:!0,phase:"main",fn:dw,requiresIfExists:["offset"],data:{_skip:!1}};function Zs(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Qs(e){return[Ce,ze,Le,je].some(function(t){return e[t]>=0})}function pw(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,s=t.modifiersData.preventOverflow,i=Cn(t,{elementContext:"reference"}),l=Cn(t,{altBoundary:!0}),d=Zs(i,r),u=Zs(l,o,s),p=Qs(d),b=Qs(u);t.modifiersData[n]={referenceClippingOffsets:d,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:b},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":b})}const fw={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pw};function ww(e,t,n){var r=Xe(e),o=[je,Ce].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=s[0],l=s[1];return i=i||0,l=(l||0)*o,[je,ze].indexOf(r)>=0?{x:l,y:i}:{x:i,y:l}}function mw(e){var t=e.state,n=e.options,r=e.name,o=n.offset,s=o===void 0?[0,0]:o,i=Ci.reduce(function(p,b){return p[b]=ww(b,t.rects,s),p},{}),l=i[t.placement],d=l.x,u=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=d,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=i}const hw={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:mw};function gw(e){var t=e.state,n=e.name;t.modifiersData[n]=Ii({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const bw={name:"popperOffsets",enabled:!0,phase:"read",fn:gw,data:{}};function vw(e){return e==="x"?"y":"x"}function yw(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=o===void 0?!0:o,i=n.altAxis,l=i===void 0?!1:i,d=n.boundary,u=n.rootBoundary,p=n.altBoundary,b=n.padding,c=n.tether,m=c===void 0?!0:c,f=n.tetherOffset,h=f===void 0?0:f,g=Cn(t,{boundary:d,rootBoundary:u,padding:b,altBoundary:p}),k=Xe(t.placement),C=Yt(t.placement),S=!C,N=qo(k),v=vw(N),O=t.modifiersData.popperOffsets,_=t.rects.reference,B=t.rects.popper,T=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,P=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),E=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(O){if(s){var M,J=N==="y"?Ce:je,Y=N==="y"?Le:ze,U=N==="y"?"height":"width",te=O[N],ie=te+g[J],se=te-g[Y],x=m?-B[U]/2:0,R=C===Ht?_[U]:B[U],z=C===Ht?-B[U]:-_[U],F=t.elements.arrow,L=m&&F?Uo(F):{width:0,height:0},W=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ri(),H=W[J],X=W[Y],q=yn(0,_[U],L[U]),Z=S?_[U]/2-x-q-H-P.mainAxis:R-q-H-P.mainAxis,Q=S?-_[U]/2+x+q+X+P.mainAxis:z+q+X+P.mainAxis,pe=t.elements.arrow&&Vn(t.elements.arrow),I=pe?N==="y"?pe.clientTop||0:pe.clientLeft||0:0,xe=(M=E==null?void 0:E[N])!=null?M:0,V=te+Z-xe-I,ye=te+Q-xe,Ge=yn(m?sr(ie,V):ie,te,m?xt(se,ye):se);O[N]=Ge,D[N]=Ge-te}if(l){var pt,Se=N==="x"?Ce:je,Ln=N==="x"?Le:ze,Ue=O[v],Ot=v==="y"?"height":"width",ft=Ue+g[Se],Rt=Ue-g[Ln],Pt=[Ce,je].indexOf(k)!==-1,_t=(pt=E==null?void 0:E[v])!=null?pt:0,wt=Pt?ft:Ue-_[Ot]-B[Ot]-_t+P.altAxis,en=Pt?Ue+_[Ot]+B[Ot]-_t-P.altAxis:Rt,zn=m&&Pt?Uf(wt,Ue,en):yn(m?wt:ft,Ue,m?en:Rt);O[v]=zn,D[v]=zn-Ue}t.modifiersData[r]=D}}const xw={name:"preventOverflow",enabled:!0,phase:"main",fn:yw,requiresIfExists:["offset"]};function kw(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Nw(e){return e===Me(e)||!Ve(e)?Ho(e):kw(e)}function Ew(e){var t=e.getBoundingClientRect(),n=Xt(t.width)/e.offsetWidth||1,r=Xt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Sw(e,t,n){n===void 0&&(n=!1);var r=Ve(t),o=Ve(t)&&Ew(t),s=ut(t),i=Wt(e,o,n),l={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(r||!r&&!n)&&((Ke(t)!=="body"||Wo(s))&&(l=Nw(t)),Ve(t)?(d=Wt(t,!0),d.x+=t.clientLeft,d.y+=t.clientTop):s&&(d.x=Xo(s))),{x:i.left+l.scrollLeft-d.x,y:i.top+l.scrollTop-d.y,width:i.width,height:i.height}}function Tw(e){var t=new Map,n=new Set,r=[];e.forEach(function(s){t.set(s.name,s)});function o(s){n.add(s.name);var i=[].concat(s.requires||[],s.requiresIfExists||[]);i.forEach(function(l){if(!n.has(l)){var d=t.get(l);d&&o(d)}}),r.push(s)}return e.forEach(function(s){n.has(s.name)||o(s)}),r}function Cw(e){var t=Tw(e);return Bf.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function jw(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ow(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var ea={placement:"bottom",modifiers:[],strategy:"absolute"};function ta(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Rw(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,s=o===void 0?ea:o;return function(l,d,u){u===void 0&&(u=s);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},ea,s),modifiersData:{},elements:{reference:l,popper:d},attributes:{},styles:{}},b=[],c=!1,m={state:p,setOptions:function(k){var C=typeof k=="function"?k(p.options):k;h(),p.options=Object.assign({},s,p.options,C),p.scrollParents={reference:jt(l)?xn(l):l.contextElement?xn(l.contextElement):[],popper:xn(d)};var S=Cw(Ow([].concat(r,p.options.modifiers)));return p.orderedModifiers=S.filter(function(N){return N.enabled}),f(),m.update()},forceUpdate:function(){if(!c){var k=p.elements,C=k.reference,S=k.popper;if(ta(C,S)){p.rects={reference:Sw(C,Vn(S),p.options.strategy==="fixed"),popper:Uo(S)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(P){return p.modifiersData[P.name]=Object.assign({},P.data)});for(var N=0;N<p.orderedModifiers.length;N++){if(p.reset===!0){p.reset=!1,N=-1;continue}var v=p.orderedModifiers[N],O=v.fn,_=v.options,B=_===void 0?{}:_,T=v.name;typeof O=="function"&&(p=O({state:p,options:B,name:T,instance:m})||p)}}}},update:jw(function(){return new Promise(function(g){m.forceUpdate(),g(p)})}),destroy:function(){h(),c=!0}};if(!ta(l,d))return m;m.setOptions(u).then(function(g){!c&&u.onFirstUpdate&&u.onFirstUpdate(g)});function f(){p.orderedModifiers.forEach(function(g){var k=g.name,C=g.options,S=C===void 0?{}:C,N=g.effect;if(typeof N=="function"){var v=N({state:p,name:k,instance:m,options:S}),O=function(){};b.push(v||O)}})}function h(){b.forEach(function(g){return g()}),b=[]}return m}}var Pw=[ew,bw,Zf,zf,hw,uw,xw,Wf,fw],_w=Rw({defaultModifiers:Pw});const Mi="Popper";function $w(e){return Si(Mi,e)}Sf(Mi,["root"]);const Iw=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Mw=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Aw(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function ar(e){return typeof e=="function"?e():e}function Tr(e){return e.nodeType!==void 0}function Dw(e){return!Tr(e)}const Bw=()=>Po({root:["root"]},gf($w)),Vw={},Lw=A.forwardRef(function(t,n){var r;const{anchorEl:o,children:s,direction:i,disablePortal:l,modifiers:d,open:u,placement:p,popperOptions:b,popperRef:c,slotProps:m={},slots:f={},TransitionProps:h}=t,g=ke(t,Iw),k=A.useRef(null),C=Tt(k,n),S=A.useRef(null),N=Tt(S,c),v=A.useRef(N);qt(()=>{v.current=N},[N]),A.useImperativeHandle(c,()=>S.current,[]);const O=Aw(p,i),[_,B]=A.useState(O),[T,P]=A.useState(ar(o));A.useEffect(()=>{S.current&&S.current.forceUpdate()}),A.useEffect(()=>{o&&P(ar(o))},[o]),qt(()=>{if(!T||!u)return;const Y=ie=>{B(ie.placement)};if(process.env.NODE_ENV!=="production"&&T&&Tr(T)&&T.nodeType===1){const ie=T.getBoundingClientRect();process.env.NODE_ENV!=="test"&&ie.top===0&&ie.left===0&&ie.right===0&&ie.bottom===0&&console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}let U=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:ie})=>{Y(ie)}}];d!=null&&(U=U.concat(d)),b&&b.modifiers!=null&&(U=U.concat(b.modifiers));const te=_w(T,k.current,$({placement:O},b,{modifiers:U}));return v.current(te),()=>{te.destroy(),v.current(null)}},[T,l,d,u,b,O]);const E={placement:_};h!==null&&(E.TransitionProps=h);const D=Bw(),M=(r=f.root)!=null?r:"div",J=kf({elementType:M,externalSlotProps:m.root,externalForwardedProps:g,additionalProps:{role:"tooltip",ref:C},ownerState:t,className:D.root});return a.jsx(M,$({},J,{children:typeof s=="function"?s(E):s}))}),Ai=A.forwardRef(function(t,n){const{anchorEl:r,children:o,container:s,direction:i="ltr",disablePortal:l=!1,keepMounted:d=!1,modifiers:u,open:p,placement:b="bottom",popperOptions:c=Vw,popperRef:m,style:f,transition:h=!1,slotProps:g={},slots:k={}}=t,C=ke(t,Mw),[S,N]=A.useState(!0),v=()=>{N(!1)},O=()=>{N(!0)};if(!d&&!p&&(!h||S))return null;let _;if(s)_=s;else if(r){const P=ar(r);_=P&&Tr(P)?tr(P).body:tr(null).body}const B=!p&&d&&(!h||S)?"none":void 0,T=h?{in:p,onEnter:v,onExited:O}:void 0;return a.jsx(or,{disablePortal:l,container:_,children:a.jsx(Lw,$({anchorEl:r,direction:i,disablePortal:l,modifiers:u,ref:n,open:h?!S:p,placement:b,popperOptions:c,popperRef:m,slotProps:g,slots:k},C,{style:$({position:"fixed",top:0,left:0,display:B},f),TransitionProps:T,children:o}))})});process.env.NODE_ENV!=="production"&&(Ai.propTypes={anchorEl:Oo(w.oneOfType([En,w.object,w.func]),e=>{if(e.open){const t=ar(e.anchorEl);if(t&&Tr(t)&&t.nodeType===1){const n=t.getBoundingClientRect();if(process.env.NODE_ENV!=="test"&&n.top===0&&n.left===0&&n.right===0&&n.bottom===0)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}else if(!t||typeof t.getBoundingClientRect!="function"||Dw(t)&&t.contextElement!=null&&t.contextElement.nodeType!==1)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","It should be an HTML element instance or a virtualElement ","(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`))}return null}),children:w.oneOfType([w.node,w.func]),container:w.oneOfType([En,w.func]),direction:w.oneOf(["ltr","rtl"]),disablePortal:w.bool,keepMounted:w.bool,modifiers:w.arrayOf(w.shape({data:w.object,effect:w.func,enabled:w.bool,fn:w.func,name:w.any,options:w.object,phase:w.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:w.arrayOf(w.string),requiresIfExists:w.arrayOf(w.string)})),open:w.bool.isRequired,placement:w.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:w.shape({modifiers:w.array,onFirstUpdate:w.func,placement:w.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:w.oneOf(["absolute","fixed"])}),popperRef:li,slotProps:w.shape({root:w.oneOfType([w.func,w.object])}),slots:w.shape({root:w.elementType}),transition:w.bool});function Di(){const e=yi(Bo);return process.env.NODE_ENV!=="production"&&A.useDebugValue(e),e[Vo]||e}function lo(e,t){return lo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},lo(e,t)}function zw(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,lo(e,t)}const na={disabled:!1};var Fw=process.env.NODE_ENV!=="production"?w.oneOfType([w.number,w.shape({enter:w.number,exit:w.number,appear:w.number}).isRequired]):null;process.env.NODE_ENV!=="production"&&w.oneOfType([w.string,w.shape({enter:w.string,exit:w.string,active:w.string}),w.shape({enter:w.string,enterDone:w.string,enterActive:w.string,exit:w.string,exitDone:w.string,exitActive:w.string})]);const Bi=y.createContext(null);var Gw=function(t){return t.scrollTop},hn="unmounted",gt="exited",bt="entering",Vt="entered",co="exiting",ot=function(e){zw(t,e);function t(r,o){var s;s=e.call(this,r,o)||this;var i=o,l=i&&!i.isMounting?r.enter:r.appear,d;return s.appearStatus=null,r.in?l?(d=gt,s.appearStatus=bt):d=Vt:r.unmountOnExit||r.mountOnEnter?d=hn:d=gt,s.state={status:d},s.nextCallback=null,s}t.getDerivedStateFromProps=function(o,s){var i=o.in;return i&&s.status===hn?{status:gt}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var s=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==bt&&i!==Vt&&(s=bt):(i===bt||i===Vt)&&(s=co)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,s,i,l;return s=i=l=o,o!=null&&typeof o!="number"&&(s=o.exit,i=o.enter,l=o.appear!==void 0?o.appear:i),{exit:s,enter:i,appear:l}},n.updateStatus=function(o,s){if(o===void 0&&(o=!1),s!==null)if(this.cancelNextCallback(),s===bt){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:pn.findDOMNode(this);i&&Gw(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===gt&&this.setState({status:hn})},n.performEnter=function(o){var s=this,i=this.props.enter,l=this.context?this.context.isMounting:o,d=this.props.nodeRef?[l]:[pn.findDOMNode(this),l],u=d[0],p=d[1],b=this.getTimeouts(),c=l?b.appear:b.enter;if(!o&&!i||na.disabled){this.safeSetState({status:Vt},function(){s.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:bt},function(){s.props.onEntering(u,p),s.onTransitionEnd(c,function(){s.safeSetState({status:Vt},function(){s.props.onEntered(u,p)})})})},n.performExit=function(){var o=this,s=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:pn.findDOMNode(this);if(!s||na.disabled){this.safeSetState({status:gt},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:co},function(){o.props.onExiting(l),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:gt},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,s){s=this.setNextCallback(s),this.setState(o,s)},n.setNextCallback=function(o){var s=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,s.nextCallback=null,o(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(o,s){this.setNextCallback(s);var i=this.props.nodeRef?this.props.nodeRef.current:pn.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=d[0],p=d[1];this.props.addEndListener(u,p)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===hn)return null;var s=this.props,i=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var l=ke(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return y.createElement(Bi.Provider,{value:null},typeof i=="function"?i(o,l):y.cloneElement(y.Children.only(i),l))},t}(y.Component);ot.contextType=Bi;ot.propTypes=process.env.NODE_ENV!=="production"?{nodeRef:w.shape({current:typeof Element>"u"?w.any:function(e,t,n,r,o,s){var i=e[t];return w.instanceOf(i&&"ownerDocument"in i?i.ownerDocument.defaultView.Element:Element)(e,t,n,r,o,s)}}),children:w.oneOfType([w.func.isRequired,w.element.isRequired]).isRequired,in:w.bool,mountOnEnter:w.bool,unmountOnExit:w.bool,appear:w.bool,enter:w.bool,exit:w.bool,timeout:function(t){var n=Fw;t.addEndListener||(n=n.isRequired);for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return n.apply(void 0,[t].concat(o))},addEndListener:w.func,onEnter:w.func,onEntering:w.func,onEntered:w.func,onExit:w.func,onExiting:w.func,onExited:w.func}:{};function Bt(){}ot.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Bt,onEntering:Bt,onEntered:Bt,onExit:Bt,onExiting:Bt,onExited:Bt};ot.UNMOUNTED=hn;ot.EXITED=gt;ot.ENTERING=bt;ot.ENTERED=Vt;ot.EXITING=co;const Uw=ot,qw=e=>e.scrollTop;function ra(e,t){var n,r;const{timeout:o,easing:s,style:i={}}=e;return{duration:(n=i.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=i.transitionTimingFunction)!=null?r:typeof s=="object"?s[t.mode]:s,delay:i.transitionDelay}}const Hw=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function uo(e){return`scale(${e}, ${e**2})`}const Xw={entering:{opacity:1,transform:uo(1)},entered:{opacity:1,transform:"none"}},qr=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Yo=A.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:s,easing:i,in:l,onEnter:d,onEntered:u,onEntering:p,onExit:b,onExited:c,onExiting:m,style:f,timeout:h="auto",TransitionComponent:g=Uw}=t,k=ke(t,Hw),C=wn(),S=A.useRef(),N=Di(),v=A.useRef(null),O=Tt(v,s.ref,n),_=Y=>U=>{if(Y){const te=v.current;U===void 0?Y(te):Y(te,U)}},B=_(p),T=_((Y,U)=>{qw(Y);const{duration:te,delay:ie,easing:se}=ra({style:f,timeout:h,easing:i},{mode:"enter"});let x;h==="auto"?(x=N.transitions.getAutoHeightDuration(Y.clientHeight),S.current=x):x=te,Y.style.transition=[N.transitions.create("opacity",{duration:x,delay:ie}),N.transitions.create("transform",{duration:qr?x:x*.666,delay:ie,easing:se})].join(","),d&&d(Y,U)}),P=_(u),E=_(m),D=_(Y=>{const{duration:U,delay:te,easing:ie}=ra({style:f,timeout:h,easing:i},{mode:"exit"});let se;h==="auto"?(se=N.transitions.getAutoHeightDuration(Y.clientHeight),S.current=se):se=U,Y.style.transition=[N.transitions.create("opacity",{duration:se,delay:te}),N.transitions.create("transform",{duration:qr?se:se*.666,delay:qr?te:te||se*.333,easing:ie})].join(","),Y.style.opacity=0,Y.style.transform=uo(.75),b&&b(Y)}),M=_(c),J=Y=>{h==="auto"&&C.start(S.current||0,Y),r&&r(v.current,Y)};return a.jsx(g,$({appear:o,in:l,nodeRef:v,onEnter:T,onEntered:P,onEntering:B,onExit:D,onExited:M,onExiting:E,addEndListener:J,timeout:h==="auto"?null:h},k,{children:(Y,U)=>A.cloneElement(s,$({style:$({opacity:0,transform:uo(.75),visibility:Y==="exited"&&!l?"hidden":void 0},Xw[Y],f,s.props.style),ref:O},U))}))});process.env.NODE_ENV!=="production"&&(Yo.propTypes={addEndListener:w.func,appear:w.bool,children:ai.isRequired,easing:w.oneOfType([w.shape({enter:w.string,exit:w.string}),w.string]),in:w.bool,onEnter:w.func,onEntered:w.func,onEntering:w.func,onExit:w.func,onExited:w.func,onExiting:w.func,style:w.object,timeout:w.oneOfType([w.oneOf(["auto"]),w.number,w.shape({appear:w.number,enter:w.number,exit:w.number})])});Yo.muiSupportAuto=!0;const oa=Yo,Ww=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Yw=Dn(Ai,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Vi=A.forwardRef(function(t,n){var r;const o=vi(),s=Lo({props:t,name:"MuiPopper"}),{anchorEl:i,component:l,components:d,componentsProps:u,container:p,disablePortal:b,keepMounted:c,modifiers:m,open:f,placement:h,popperOptions:g,popperRef:k,transition:C,slots:S,slotProps:N}=s,v=ke(s,Ww),O=(r=S==null?void 0:S.root)!=null?r:d==null?void 0:d.Root,_=$({anchorEl:i,container:p,disablePortal:b,keepMounted:c,modifiers:m,open:f,placement:h,popperOptions:g,popperRef:k,transition:C},v);return a.jsx(Yw,$({as:l,direction:o==null?void 0:o.direction,slots:{root:O},slotProps:N??u},_,{ref:n}))});process.env.NODE_ENV!=="production"&&(Vi.propTypes={anchorEl:w.oneOfType([En,w.object,w.func]),children:w.oneOfType([w.node,w.func]),component:w.elementType,components:w.shape({Root:w.elementType}),componentsProps:w.shape({root:w.oneOfType([w.func,w.object])}),container:w.oneOfType([En,w.func]),disablePortal:w.bool,keepMounted:w.bool,modifiers:w.arrayOf(w.shape({data:w.object,effect:w.func,enabled:w.bool,fn:w.func,name:w.any,options:w.object,phase:w.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:w.arrayOf(w.string),requiresIfExists:w.arrayOf(w.string)})),open:w.bool.isRequired,placement:w.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:w.shape({modifiers:w.array,onFirstUpdate:w.func,placement:w.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:w.oneOf(["absolute","fixed"])}),popperRef:li,slotProps:w.shape({root:w.oneOfType([w.func,w.object])}),slots:w.shape({root:w.elementType}),sx:w.oneOfType([w.arrayOf(w.oneOfType([w.func,w.object,w.bool])),w.func,w.object]),transition:w.bool});const Li=Vi;function Kw(e){return mr("MuiTooltip",e)}const Jw=mi("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),ct=Jw,Zw=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Qw(e){return Math.round(e*1e5)/1e5}const em=e=>{const{classes:t,disableInteractive:n,arrow:r,touch:o,placement:s}=e,i={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch",`tooltipPlacement${Ye(s.split("-")[0])}`],arrow:["arrow"]};return Po(i,Kw,t)},tm=Dn(Li,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:e,ownerState:t,open:n})=>$({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${ct.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${ct.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${ct.arrow}`]:$({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${ct.arrow}`]:$({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),nm=Dn("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${Ye(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>$({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:xi(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Qw(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${ct.popper}[data-popper-placement*="left"] &`]:$({transformOrigin:"right center"},t.isRtl?$({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):$({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${ct.popper}[data-popper-placement*="right"] &`]:$({transformOrigin:"left center"},t.isRtl?$({marginRight:"14px"},t.touch&&{marginRight:"24px"}):$({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${ct.popper}[data-popper-placement*="top"] &`]:$({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${ct.popper}[data-popper-placement*="bottom"] &`]:$({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),rm=Dn("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:xi(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Xn=!1;const sa=new In;let dn={x:0,y:0};function Wn(e,t){return n=>{t&&t(n),e(n)}}const zi=A.forwardRef(function(t,n){var r,o,s,i,l,d,u,p,b,c,m,f,h,g,k,C,S,N,v;const O=Lo({props:t,name:"MuiTooltip"}),{arrow:_=!1,children:B,components:T={},componentsProps:P={},describeChild:E=!1,disableFocusListener:D=!1,disableHoverListener:M=!1,disableInteractive:J=!1,disableTouchListener:Y=!1,enterDelay:U=100,enterNextDelay:te=0,enterTouchDelay:ie=700,followCursor:se=!1,id:x,leaveDelay:R=0,leaveTouchDelay:z=1500,onClose:F,onOpen:L,open:W,placement:H="bottom",PopperComponent:X,PopperProps:q={},slotProps:Z={},slots:Q={},title:pe,TransitionComponent:I=oa,TransitionProps:xe}=O,V=ke(O,Zw),ye=A.isValidElement(B)?B:a.jsx("span",{children:B}),Ge=Di(),pt=Ge.direction==="rtl",[Se,Ln]=A.useState(),[Ue,Ot]=A.useState(null),ft=A.useRef(!1),Rt=J||se,Pt=wn(),_t=wn(),wt=wn(),en=wn(),[zn,Qo]=di({controlled:W,default:!1,name:"Tooltip",state:"open"});let Je=zn;if(process.env.NODE_ENV!=="production"){const{current:ee}=A.useRef(W!==void 0);A.useEffect(()=>{Se&&Se.disabled&&!ee&&pe!==""&&Se.tagName.toLowerCase()==="button"&&console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.","A disabled element does not fire events.","Tooltip needs to listen to the child element's events to display the title.","","Add a simple wrapper element, such as a `span`."].join(`
`))},[pe,Se,ee])}const jr=ci(x),tn=A.useRef(),Fn=oo(()=>{tn.current!==void 0&&(document.body.style.WebkitUserSelect=tn.current,tn.current=void 0),en.clear()});A.useEffect(()=>Fn,[Fn]);const es=ee=>{sa.clear(),Xn=!0,Qo(!0),L&&!Je&&L(ee)},Gn=oo(ee=>{sa.start(800+R,()=>{Xn=!1}),Qo(!1),F&&Je&&F(ee),Pt.start(Ge.transitions.duration.shortest,()=>{ft.current=!1})}),Or=ee=>{ft.current&&ee.type!=="touchstart"||(Se&&Se.removeAttribute("title"),_t.clear(),wt.clear(),U||Xn&&te?_t.start(Xn?te:U,()=>{es(ee)}):es(ee))},ts=ee=>{_t.clear(),wt.start(R,()=>{Gn(ee)})},{isFocusVisibleRef:ns,onBlur:Ol,onFocus:Rl,ref:Pl}=ui(),[,rs]=A.useState(!1),os=ee=>{Ol(ee),ns.current===!1&&(rs(!1),ts(ee))},ss=ee=>{Se||Ln(ee.currentTarget),Rl(ee),ns.current===!0&&(rs(!0),Or(ee))},as=ee=>{ft.current=!0;const Pe=ye.props;Pe.onTouchStart&&Pe.onTouchStart(ee)},is=Or,ls=ts,_l=ee=>{as(ee),wt.clear(),Pt.clear(),Fn(),tn.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",en.start(ie,()=>{document.body.style.WebkitUserSelect=tn.current,Or(ee)})},$l=ee=>{ye.props.onTouchEnd&&ye.props.onTouchEnd(ee),Fn(),wt.start(z,()=>{Gn(ee)})};A.useEffect(()=>{if(!Je)return;function ee(Pe){(Pe.key==="Escape"||Pe.key==="Esc")&&Gn(Pe)}return document.addEventListener("keydown",ee),()=>{document.removeEventListener("keydown",ee)}},[Gn,Je]);const Il=Tt(ye.ref,Pl,Ln,n);!pe&&pe!==0&&(Je=!1);const Rr=A.useRef(),Ml=ee=>{const Pe=ye.props;Pe.onMouseMove&&Pe.onMouseMove(ee),dn={x:ee.clientX,y:ee.clientY},Rr.current&&Rr.current.update()},nn={},Pr=typeof pe=="string";E?(nn.title=!Je&&Pr&&!M?pe:null,nn["aria-describedby"]=Je?jr:null):(nn["aria-label"]=Pr?pe:null,nn["aria-labelledby"]=Je&&!Pr?jr:null);const Ae=$({},nn,V,ye.props,{className:lt(V.className,ye.props.className),onTouchStart:as,ref:Il},se?{onMouseMove:Ml}:{});process.env.NODE_ENV!=="production"&&(Ae["data-mui-internal-clone-element"]=!0,A.useEffect(()=>{Se&&!Se.getAttribute("data-mui-internal-clone-element")&&console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.","Please make sure that props are spread on the same element that the ref is applied to."].join(`
`))},[Se]));const rn={};Y||(Ae.onTouchStart=_l,Ae.onTouchEnd=$l),M||(Ae.onMouseOver=Wn(is,Ae.onMouseOver),Ae.onMouseLeave=Wn(ls,Ae.onMouseLeave),Rt||(rn.onMouseOver=is,rn.onMouseLeave=ls)),D||(Ae.onFocus=Wn(ss,Ae.onFocus),Ae.onBlur=Wn(os,Ae.onBlur),Rt||(rn.onFocus=ss,rn.onBlur=os)),process.env.NODE_ENV!=="production"&&ye.props.title&&console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.",`Remove this title prop \`${ye.props.title}\` or the Tooltip component.`].join(`
`));const Al=A.useMemo(()=>{var ee;let Pe=[{name:"arrow",enabled:!!Ue,options:{element:Ue,padding:4}}];return(ee=q.popperOptions)!=null&&ee.modifiers&&(Pe=Pe.concat(q.popperOptions.modifiers)),$({},q.popperOptions,{modifiers:Pe})},[Ue,q]),on=$({},O,{isRtl:pt,arrow:_,disableInteractive:Rt,placement:H,PopperComponentProp:X,touch:ft.current}),_r=em(on),cs=(r=(o=Q.popper)!=null?o:T.Popper)!=null?r:tm,ds=(s=(i=(l=Q.transition)!=null?l:T.Transition)!=null?i:I)!=null?s:oa,us=(d=(u=Q.tooltip)!=null?u:T.Tooltip)!=null?d:nm,ps=(p=(b=Q.arrow)!=null?b:T.Arrow)!=null?p:rm,Dl=mn(cs,$({},q,(c=Z.popper)!=null?c:P.popper,{className:lt(_r.popper,q==null?void 0:q.className,(m=(f=Z.popper)!=null?f:P.popper)==null?void 0:m.className)}),on),Bl=mn(ds,$({},xe,(h=Z.transition)!=null?h:P.transition),on),Vl=mn(us,$({},(g=Z.tooltip)!=null?g:P.tooltip,{className:lt(_r.tooltip,(k=(C=Z.tooltip)!=null?C:P.tooltip)==null?void 0:k.className)}),on),Ll=mn(ps,$({},(S=Z.arrow)!=null?S:P.arrow,{className:lt(_r.arrow,(N=(v=Z.arrow)!=null?v:P.arrow)==null?void 0:N.className)}),on);return a.jsxs(A.Fragment,{children:[A.cloneElement(ye,Ae),a.jsx(cs,$({as:X??Li,placement:H,anchorEl:se?{getBoundingClientRect:()=>({top:dn.y,left:dn.x,right:dn.x,bottom:dn.y,width:0,height:0})}:Se,popperRef:Rr,open:Se?Je:!1,id:jr,transition:!0},rn,Dl,{popperOptions:Al,children:({TransitionProps:ee})=>a.jsx(ds,$({timeout:Ge.transitions.duration.shorter},ee,Bl,{children:a.jsxs(us,$({},Vl,{children:[pe,_?a.jsx(ps,$({},Ll,{ref:Ot})):null]}))}))}))]})});process.env.NODE_ENV!=="production"&&(zi.propTypes={arrow:w.bool,children:ai.isRequired,classes:w.object,className:w.string,components:w.shape({Arrow:w.elementType,Popper:w.elementType,Tooltip:w.elementType,Transition:w.elementType}),componentsProps:w.shape({arrow:w.object,popper:w.object,tooltip:w.object,transition:w.object}),describeChild:w.bool,disableFocusListener:w.bool,disableHoverListener:w.bool,disableInteractive:w.bool,disableTouchListener:w.bool,enterDelay:w.number,enterNextDelay:w.number,enterTouchDelay:w.number,followCursor:w.bool,id:w.string,leaveDelay:w.number,leaveTouchDelay:w.number,onClose:w.func,onOpen:w.func,open:w.bool,placement:w.oneOf(["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),PopperComponent:w.elementType,PopperProps:w.object,slotProps:w.shape({arrow:w.object,popper:w.object,tooltip:w.object,transition:w.object}),slots:w.shape({arrow:w.elementType,popper:w.elementType,tooltip:w.elementType,transition:w.elementType}),sx:w.oneOfType([w.arrayOf(w.oneOfType([w.func,w.object,w.bool])),w.func,w.object]),title:w.node,TransitionComponent:w.elementType,TransitionProps:w.object});const om=zi;function aa(e,t,n){return e?a.jsx(Ie.ListItemIcon,{className:`papi-menu-icon-${n?"leading":"trailing"}`,children:a.jsx("img",{src:e,alt:`${n?"Leading":"Trailing"} icon for ${t}`})}):void 0}function Ko(e){const{onClick:t,label:n,tooltip:r,allowForLeadingIcons:o=!0,iconPathBefore:s=void 0,iconPathAfter:i=void 0,hasAutoFocus:l=!1,className:d,isDisabled:u=!1,isDense:p=!0,isSubMenuParent:b=!1,hasDisabledGutters:c=!1,hasDivider:m=!1,focusVisibleClassName:f,id:h,children:g}=e,k=a.jsx(Ie.MenuItem,{sx:{lineHeight:.8},autoFocus:l,className:d,disabled:u,dense:p,disableGutters:c,divider:m,focusVisibleClassName:f,onClick:t,id:h,children:n?a.jsxs(a.Fragment,{children:[aa(s,n,!0),a.jsx(Ie.ListItemText,{primary:n,inset:!s&&o}),b?a.jsx(Ie.ListItemIcon,{className:"papi-menu-icon-trailing",children:a.jsx(Ni,{})}):aa(i,n,!1)]}):g});return r?a.jsx(om,{title:r,placement:"right",children:a.jsx("div",{children:k})}):k}function Fi(e){return Object.entries(e.groups).map(([n,r])=>({id:n,group:r}))}function sm(e){const[t,n]=y.useState(void 0),{parentMenuItem:r,parentItemProps:o,menuDefinition:s}=e,i=u=>{n(u.currentTarget)},l=()=>{n(void 0)},d=()=>{let u=Fi(s).filter(p=>"menuItem"in p.group);if(!(r!=null&&r.id))throw new Error("A valid parent menu item is required for submenus.");return u=u.filter(p=>"menuItem"in p.group&&p.group.menuItem===r.id),a.jsx(Gi,{...e,includedGroups:u})};return a.jsxs(a.Fragment,{children:[a.jsx(Ko,{onClick:i,...o,isSubMenuParent:!0}),a.jsx(Ie.Menu,{anchorEl:t,open:!!t,onClose:l,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:d()},r.id)]})}const am=(e,t)=>t.filter(o=>o.group===e).sort((o,s)=>(o.order||0)-(s.order||0));function Gi(e){const{menuDefinition:t,onClick:n,commandHandler:r,includedGroups:o}=e,{items:s,allowForLeadingIcons:i}=y.useMemo(()=>{const p=o&&o.length>0?o:Fi(t).filter(f=>!("menuItem"in f.group)),b=Object.values(p).sort((f,h)=>(f.group.order||0)-(h.group.order||0)),c=[];b.forEach(f=>{am(f.id,t.items).forEach(h=>c.push({item:h,isLastItemInGroup:!1})),c.length>0&&(c[c.length-1].isLastItemInGroup=!0)}),c.length>0&&(c[c.length-1].isLastItemInGroup=!1);const m=c.some(f=>"iconPathBefore"in f.item&&f.item.iconPathBefore);return{items:c,allowForLeadingIcons:m}},[o,t]),l=({item:p,isLastItemInGroup:b})=>({className:"papi-menu-item",label:p.label,tooltip:p.tooltip,iconPathBefore:"iconPathBefore"in p?p.iconPathBefore:void 0,iconPathAfter:"iconPathAfter"in p?p.iconPathAfter:void 0,hasDivider:b,allowForLeadingIcons:i}),[d]=s;if(!d)return a.jsx("div",{});const u=d.item.group;return a.jsx("div",{role:"menu","aria-label":u,children:s.map((p,b)=>{const{item:c}=p,m=l(p);if("command"in c){const f=c.group+b;return a.jsx(Ko,{onClick:h=>{n==null||n(h),r(c)},...m},f)}return a.jsx(sm,{parentMenuItem:c,parentItemProps:m,...e},u+c.id)})},u)}function im(e){const{menuDefinition:t,columnId:n}=e;let s=Object.entries(t.groups).map(([i,l])=>({id:i,group:l})).filter(i=>"column"in i.group);return n&&"columns"in t&&t.columns[n]&&(s=s.filter(i=>"column"in i.group&&i.group.column===n)),a.jsx(Gi,{...e,includedGroups:s})}function lm({commandHandler:e,menuDefinition:t,id:n,metadata:r,onClick:o,className:s}){return a.jsxs(Ie.Grid,{id:n,item:!0,xs:"auto",role:"menu","aria-label":n,className:`papi-menu-column ${s??""}`,children:[a.jsx("h3",{"aria-label":r.label,className:`papi-menu-column-header ${s??""}`,children:r.label}),a.jsx(Ie.List,{id:n,dense:!0,className:s??"",children:a.jsx(im,{commandHandler:e,menuDefinition:t,columnId:n,onClick:o})})]})}function Ui({commandHandler:e,className:t,multiColumnMenu:n,id:r}){const{columns:o}=n,s=y.useMemo(()=>{const i=new Map;return Object.getOwnPropertyNames(o).forEach(l=>{if(l==="isExtensible")return;const d=l,u=o[d];typeof u=="object"&&typeof u.order=="number"&&!Number.isNaN(u.order)?i.set(u.order,{id:d,metadata:u}):console.warn(`Property ${l} (${typeof u}) on menu ${r} is not a valid column and is being ignored. This might indicate data corruption`)}),Array.from(i.values()).sort((l,d)=>(l.metadata.order||0)-(d.metadata.order||0))},[o,r]);return a.jsx(Ie.Grid,{container:!0,spacing:0,className:`papi-multi-column-menu ${t??""}`,columns:s.length,role:"menu","aria-label":"GridMenu",id:r,children:s.map((i,l)=>a.jsx(lm,{commandHandler:e,menuDefinition:n,...i,className:t},l))})}function cm(e){return{preserveValue:!0,...e}}const ir=(e,t,n={})=>{const r=y.useRef(t);r.current=t;const o=y.useRef(n);o.current=cm(o.current);const[s,i]=y.useState(()=>r.current),[l,d]=y.useState(!0);return y.useEffect(()=>{let u=!0;return d(!!e),(async()=>{if(e){const p=await e();u&&(i(()=>p),d(!1))}})(),()=>{u=!1,o.current.preserveValue||i(()=>r.current)}},[e]),[s,l]},dm=ki(a.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function qi({menuProvider:e,normalMenu:t,fullMenu:n,commandHandler:r,containerRef:o,className:s,ariaLabelPrefix:i,children:l}){const[d,u]=y.useState(!1),[p,b]=y.useState(!1),c=y.useCallback(()=>{d&&u(!1),b(!1)},[d]),m=y.useCallback(N=>{N.stopPropagation(),u(v=>{const O=!v;return O&&N.shiftKey?b(!0):O||b(!1),O})},[]),f=y.useCallback(N=>(c(),r(N)),[r,c]),[h,g]=y.useState({top:1,left:1});y.useEffect(()=>{if(d){const N=o==null?void 0:o.current;if(N){const v=N.getBoundingClientRect(),O=window.scrollY,_=window.scrollX,B=v.top+O+N.clientHeight,T=v.left+_;g({top:B,left:T})}}},[d,o]);const[k]=ir(y.useCallback(async()=>(e==null?void 0:e(!1))??t,[e,t,d]),t),[C]=ir(y.useCallback(async()=>(e==null?void 0:e(!0))??n??k,[e,n,k,d]),n??k),S=p&&C?C:k;return a.jsxs(a.Fragment,{children:[a.jsx(Ie.IconButton,{sx:{paddingTop:0,paddingBottom:0},edge:"start",className:`papi-menuButton ${s??""}`,color:"inherit","aria-label":`${i??""} menu button`,onClick:m,children:l??a.jsx(dm,{})}),a.jsx(Ie.Drawer,{className:`papi-menu-drawer ${s??""}`,anchor:"left",variant:"temporary",open:d,onClose:c,PaperProps:{className:"papi-menu-drawer-paper",style:{top:h.top,left:h.left}},children:S?a.jsx(Ui,{className:s,id:`${i??""} main menu`,commandHandler:f,multiColumnMenu:S}):void 0})]})}function um({id:e,label:t,isDisabled:n=!1,tooltip:r,isTooltipSuppressed:o=!1,adjustMarginToAlignToEdge:s=!1,size:i="medium",className:l,onClick:d,children:u}){return a.jsx(Ie.IconButton,{id:e,disabled:n,edge:s,size:i,"aria-label":t,title:o?void 0:r??t,className:`papi-icon-button ${l??""}`,onClick:d,children:u})}const Qt=y.forwardRef(({className:e,...t},n)=>a.jsx(ne.LoaderCircle,{size:35,className:j("tw-animate-spin",e),...t,ref:n}));Qt.displayName="Spinner";function pm({id:e,isDisabled:t=!1,hasError:n=!1,isFullWidth:r=!1,helperText:o,label:s,placeholder:i,isRequired:l=!1,className:d,defaultValue:u,value:p,onChange:b,onFocus:c,onBlur:m}){return a.jsxs("div",{className:j("tw-inline-grid tw-items-center tw-gap-1.5",{"tw-w-full":r}),children:[a.jsx(qe,{htmlFor:e,className:j({"tw-text-red-600":n,"tw-hidden":!s}),children:`${s}${l?"*":""}`}),a.jsx(Kt,{id:e,disabled:t,placeholder:i,required:l,className:j(d,{"tw-border-red-600":n}),defaultValue:u,value:p,onChange:b,onFocus:c,onBlur:m}),a.jsx("p",{className:j({"tw-hidden":!o}),children:o})]})}function fm({menuProvider:e,commandHandler:t,className:n,id:r,children:o}){const s=y.useRef(void 0);return a.jsx("div",{ref:s,style:{position:"relative"},children:a.jsx(Ie.AppBar,{position:"static",id:r,children:a.jsxs(Ie.Toolbar,{className:j("tw-bg-muted tw-text-muted-foreground",n),variant:"dense",children:[e?a.jsx(qi,{commandHandler:t,containerRef:s,menuProvider:e}):void 0,o?a.jsx("div",{className:"papi-toolbar-children",children:o}):void 0]})})})}const wm=lr.cva("tw-relative tw-w-full tw-rounded-lg tw-border tw-p-4 [&>svg~*]:tw-pl-7 [&>svg+div]:tw-translate-y-[-3px] [&>svg]:tw-absolute [&>svg]:tw-left-4 [&>svg]:tw-top-4 [&>svg]:tw-text-foreground",{variants:{variant:{default:"tw-bg-background tw-text-foreground",destructive:"tw-border-destructive/50 tw-text-destructive dark:tw-border-destructive [&>svg]:tw-text-destructive"}},defaultVariants:{variant:"default"}}),Hi=y.forwardRef(({className:e,variant:t,...n},r)=>a.jsx("div",{ref:r,role:"alert",className:j(wm({variant:t}),e),...n}));Hi.displayName="Alert";const Xi=y.forwardRef(({className:e,...t},n)=>a.jsxs("h5",{ref:n,className:j("tw-mb-1 tw-font-medium tw-leading-none tw-tracking-tight",e),...t,children:[t.children," "]}));Xi.displayName="AlertTitle";const Wi=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:j("tw-text-sm [&_p]:tw-leading-relaxed",e),...t}));Wi.displayName="AlertDescription";const Yi=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:j("pr-twp tw-rounded-lg tw-border tw-bg-card tw-text-card-foreground tw-shadow-sm",e),...t}));Yi.displayName="Card";const Ki=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:j("pr-twp tw-flex tw-flex-col tw-space-y-1.5 tw-p-6",e),...t}));Ki.displayName="CardHeader";const Ji=y.forwardRef(({className:e,...t},n)=>a.jsx("h3",{ref:n,className:j("pr-twp tw-text-2xl tw-font-semibold tw-leading-none tw-tracking-tight",e),...t,children:t.children}));Ji.displayName="CardTitle";const Zi=y.forwardRef(({className:e,...t},n)=>a.jsx("p",{ref:n,className:j("pr-twp tw-text-sm tw-text-muted-foreground",e),...t}));Zi.displayName="CardDescription";const Qi=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:j("pr-twp tw-p-6 tw-pt-0",e),...t}));Qi.displayName="CardContent";const el=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:j("pr-twp tw-flex tw-items-center tw-p-6 tw-pt-0",e),...t}));el.displayName="CardFooter";function mm({...e}){return a.jsx(ha.Toaster,{className:"tw-toaster tw-group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})}const tl=y.forwardRef(({className:e,...t},n)=>a.jsxs(fn.Root,{ref:n,className:j("pr-twp tw-relative tw-flex tw-w-full tw-touch-none tw-select-none tw-items-center",e),...t,children:[a.jsx(fn.Track,{className:"tw-relative tw-h-2 tw-w-full tw-grow tw-overflow-hidden tw-rounded-full tw-bg-secondary",children:a.jsx(fn.Range,{className:"tw-absolute tw-h-full tw-bg-primary"})}),a.jsx(fn.Thumb,{className:"tw-block tw-h-5 tw-w-5 tw-rounded-full tw-border-2 tw-border-primary tw-bg-background tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50"})]}));tl.displayName=fn.Root.displayName;const nl=y.forwardRef(({className:e,...t},n)=>a.jsx(Qr.Root,{className:j("tw-peer pr-twp tw-inline-flex tw-h-6 tw-w-11 tw-shrink-0 tw-cursor-pointer tw-items-center tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-background disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=unchecked]:tw-bg-input",e),...t,ref:n,children:a.jsx(Qr.Thumb,{className:j("pr-twp tw-pointer-events-none tw-block tw-h-5 tw-w-5 tw-rounded-full tw-bg-background tw-shadow-lg tw-ring-0 tw-transition-transform data-[state=checked]:tw-translate-x-5 data-[state=unchecked]:tw-translate-x-0")})}));nl.displayName=Qr.Root.displayName;const hm=Re.Root,rl=y.forwardRef(({className:e,...t},n)=>a.jsx(Re.List,{ref:n,className:j("tw-inline-flex tw-h-10 tw-items-center tw-justify-center tw-rounded-md tw-bg-muted tw-p-1 tw-text-muted-foreground",e),...t}));rl.displayName=Re.List.displayName;const ol=y.forwardRef(({className:e,...t},n)=>a.jsx(Re.Trigger,{ref:n,className:j("tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-sm tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-all hover:tw-text-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow-sm",e),...t}));ol.displayName=Re.Trigger.displayName;const sl=y.forwardRef(({className:e,...t},n)=>a.jsx(Re.Content,{ref:n,className:j("tw-mt-2 tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",e),...t}));sl.displayName=Re.Content.displayName;const gm=jn.Provider,bm=jn.Root,vm=jn.Trigger,al=y.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(jn.Content,{ref:r,sideOffset:t,className:j("pr-twp tw-z-50 tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-px-3 tw-py-1.5 tw-text-sm tw-text-popover-foreground tw-shadow-md tw-animate-in tw-fade-in-0 tw-zoom-in-95 data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=closed]:tw-zoom-out-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...n}));al.displayName=jn.Content.displayName;function ym({isInstalling:e,handleClick:t,buttonText:n,className:r,...o}){return a.jsx(ge,{className:j("tw-h-8 tw-rounded-md tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700",{"tw-cursor-not-allowed tw-bg-blue-700":e,"tw-bg-blue-600":!e,"tw-bg-white tw-text-blue-600 hover:tw-text-white":!n,"tw-w-20":n},r),onClick:t,...o,children:e?a.jsx(Qt,{size:15}):a.jsxs(a.Fragment,{children:[a.jsx(ne.Download,{size:25,className:j("tw-h-4 tw-w-4",{"tw-mr-1":n})}),n]})})}function xm({isEnabling:e,handleClick:t,className:n,...r}){return a.jsx(ge,{className:j("tw-h-8 tw-rounded-md tw-bg-blue-600 tw-px-4 tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700",{"tw-cursor-not-allowed tw-bg-blue-700":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Qt,{size:15,className:"tw-mr-1 tw-text-white"}),"Enabling..."]}):"Enable"})}function km({isDisabling:e,handleClick:t,className:n,...r}){return a.jsx(ge,{className:j("tw-h-8 tw-rounded-md tw-bg-gray-300 tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-400",{"tw-cursor-not-allowed tw-bg-gray-400":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Qt,{size:15,className:"tw-mr-1 tw-text-black"}),"Disabling..."]}):"Disable"})}function Nm({isUpdating:e,handleClick:t,className:n,...r}){return a.jsx(ge,{className:j("tw-h-8 tw-rounded-md tw-bg-blue-600 tw-px-4 tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white",{"tw-cursor-not-allowed tw-bg-blue-700":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Qt,{size:15,className:"tw-mr-1 tw-text-white"}),"Updating..."]}):"Update"})}function yt(){return yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yt.apply(this,arguments)}const Em=["children","options"],G={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};var ia;(function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"})(ia||(ia={}));const la=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),ca={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},Sm=["style","script"],Tm=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,Cm=/mailto:/i,jm=/\n{2,}$/,il=/^(\s*>[\s\S]*?)(?=\n{2,})/,Om=/^ *> ?/gm,Rm=/^ {2,}\n/,Pm=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,ll=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,cl=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,_m=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,$m=/^(?:\n *)*\n/,Im=/\r\n?/g,Mm=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,Am=/^\[\^([^\]]+)]/,Dm=/\f/g,Bm=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,Vm=/^\s*?\[(x|\s)\]/,dl=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,ul=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,pl=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,po=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,Lm=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,fl=/^<!--[\s\S]*?(?:-->)/,zm=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,fo=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Fm=/^\{.*\}$/,Gm=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Um=/^<([^ >]+@[^ >]+)>/,qm=/^<([^ >]+:\/[^ >]+)>/,Hm=/-([a-z])?/gi,wl=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,Xm=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Wm=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Ym=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Km=/(\[|\])/g,Jm=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Zm=/\t/g,Qm=/(^ *\||\| *$)/g,eh=/^ *:-+: *$/,th=/^ *:-+ *$/,nh=/^ *-+: *$/,Cr="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",rh=new RegExp(`^([*_])\\1${Cr}\\1\\1(?!\\1)`),oh=new RegExp(`^([*_])${Cr}\\1(?!\\1|\\w)`),sh=new RegExp(`^==${Cr}==`),ah=new RegExp(`^~~${Cr}~~`),ih=/^\\([^0-9A-Za-z\s])/,lh=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ch=/^\n+/,dh=/^([ \t]*)/,uh=/\\([^\\])/g,da=/ *\n+$/,ph=/(?:^|\n)( *)$/,Jo="(?:\\d+\\.)",Zo="(?:[*+-])";function ml(e){return"( *)("+(e===1?Jo:Zo)+") +"}const hl=ml(1),gl=ml(2);function bl(e){return new RegExp("^"+(e===1?hl:gl))}const fh=bl(1),wh=bl(2);function vl(e){return new RegExp("^"+(e===1?hl:gl)+"[^\\n]*(?:\\n(?!\\1"+(e===1?Jo:Zo)+" )[^\\n]*)*(\\n|$)","gm")}const yl=vl(1),xl=vl(2);function kl(e){const t=e===1?Jo:Zo;return new RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}const Nl=kl(1),El=kl(2);function ua(e,t){const n=t===1,r=n?Nl:El,o=n?yl:xl,s=n?fh:wh;return{match(i,l,d){const u=ph.exec(d);return u&&(l.list||!l.inline&&!l.simple)?r.exec(i=u[1]+i):null},order:1,parse(i,l,d){const u=n?+i[2]:void 0,p=i[0].replace(jm,`
`).match(o);let b=!1;return{items:p.map(function(c,m){const f=s.exec(c)[0].length,h=new RegExp("^ {1,"+f+"}","gm"),g=c.replace(h,"").replace(s,""),k=m===p.length-1,C=g.indexOf(`

`)!==-1||k&&b;b=C;const S=d.inline,N=d.list;let v;d.list=!0,C?(d.inline=!1,v=g.replace(da,`

`)):(d.inline=!0,v=g.replace(da,""));const O=l(v,d);return d.inline=S,d.list=N,O}),ordered:n,start:u}},render:(i,l,d)=>e(i.ordered?"ol":"ul",{key:d.key,start:i.type===G.orderedList?i.start:void 0},i.items.map(function(u,p){return e("li",{key:p},l(u,d))}))}}const mh=new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),hh=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,Sl=[il,ll,cl,dl,pl,ul,fl,wl,yl,Nl,xl,El],gh=[...Sl,/^[^\n]+(?:  \n|\n{2,})/,po,fo];function Yn(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function bh(e){return nh.test(e)?"right":eh.test(e)?"center":th.test(e)?"left":null}function pa(e,t,n,r){const o=n.inTable;n.inTable=!0;let s=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((l,d)=>(d.trim()==="|"?l.push(r?{type:G.tableSeparator}:{type:G.text,text:d}):d!==""&&l.push.apply(l,t(d,n)),l),[]);n.inTable=o;let i=[[]];return s.forEach(function(l,d){l.type===G.tableSeparator?d!==0&&d!==s.length-1&&i.push([]):(l.type!==G.text||s[d+1]!=null&&s[d+1].type!==G.tableSeparator||(l.text=l.text.trimEnd()),i[i.length-1].push(l))}),i}function vh(e,t,n){n.inline=!0;const r=e[2]?e[2].replace(Qm,"").split("|").map(bh):[],o=e[3]?function(i,l,d){return i.trim().split(`
`).map(function(u){return pa(u,l,d,!0)})}(e[3],t,n):[],s=pa(e[1],t,n,!!o.length);return n.inline=!1,o.length?{align:r,cells:o,header:s,type:G.table}:{children:s,type:G.paragraph}}function fa(e,t){return e.align[t]==null?{}:{textAlign:e.align[t]}}function st(e){return function(t,n){return n.inline?e.exec(t):null}}function at(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Qe(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function un(e){return function(t){return e.exec(t)}}function yh(e,t,n){if(t.inline||t.simple||n&&!n.endsWith(`
`))return null;let r="";e.split(`
`).every(s=>!Sl.some(i=>i.test(s))&&(r+=s+`
`,s.trim()));const o=r.trimEnd();return o==""?null:[r,o]}function xh(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch{return null}return e}function wa(e){return e.replace(uh,"$1")}function Qn(e,t,n){const r=n.inline||!1,o=n.simple||!1;n.inline=!0,n.simple=!0;const s=e(t,n);return n.inline=r,n.simple=o,s}function kh(e,t,n){const r=n.inline||!1,o=n.simple||!1;n.inline=!1,n.simple=!0;const s=e(t,n);return n.inline=r,n.simple=o,s}function Nh(e,t,n){const r=n.inline||!1;n.inline=!1;const o=e(t,n);return n.inline=r,o}const Hr=(e,t,n)=>({children:Qn(t,e[1],n)});function Xr(){return{}}function Wr(){return null}function Eh(...e){return e.filter(Boolean).join(" ")}function Yr(e,t,n){let r=e;const o=t.split(".");for(;o.length&&(r=r[o[0]],r!==void 0);)o.shift();return r||n}function Sh(e="",t={}){function n(c,m,...f){const h=Yr(t.overrides,`${c}.props`,{});return t.createElement(function(g,k){const C=Yr(k,g);return C?typeof C=="function"||typeof C=="object"&&"render"in C?C:Yr(k,`${g}.component`,g):g}(c,t.overrides),yt({},m,h,{className:Eh(m==null?void 0:m.className,h.className)||void 0}),...f)}function r(c){c=c.replace(Bm,"");let m=!1;t.forceInline?m=!0:t.forceBlock||(m=Jm.test(c)===!1);const f=u(d(m?c:`${c.trimEnd().replace(ch,"")}

`,{inline:m}));for(;typeof f[f.length-1]=="string"&&!f[f.length-1].trim();)f.pop();if(t.wrapper===null)return f;const h=t.wrapper||(m?"span":"div");let g;if(f.length>1||t.forceWrapper)g=f;else{if(f.length===1)return g=f[0],typeof g=="string"?n("span",{key:"outer"},g):g;g=null}return A.createElement(h,{key:"outer"},g)}function o(c,m){const f=m.match(Tm);return f?f.reduce(function(h,g,k){const C=g.indexOf("=");if(C!==-1){const S=function(_){return _.indexOf("-")!==-1&&_.match(zm)===null&&(_=_.replace(Hm,function(B,T){return T.toUpperCase()})),_}(g.slice(0,C)).trim(),N=function(_){const B=_[0];return(B==='"'||B==="'")&&_.length>=2&&_[_.length-1]===B?_.slice(1,-1):_}(g.slice(C+1).trim()),v=la[S]||S,O=h[v]=function(_,B,T,P){return B==="style"?T.split(/;\s?/).reduce(function(E,D){const M=D.slice(0,D.indexOf(":"));return E[M.trim().replace(/(-[a-z])/g,J=>J[1].toUpperCase())]=D.slice(M.length+1).trim(),E},{}):B==="href"||B==="src"?P(T,_,B):(T.match(Fm)&&(T=T.slice(1,T.length-1)),T==="true"||T!=="false"&&T)}(c,S,N,t.sanitizer);typeof O=="string"&&(po.test(O)||fo.test(O))&&(h[v]=A.cloneElement(r(O.trim()),{key:k}))}else g!=="style"&&(h[la[g]||g]=!0);return h},{}):null}t.overrides=t.overrides||{},t.sanitizer=t.sanitizer||xh,t.slugify=t.slugify||Yn,t.namedCodesToUnicode=t.namedCodesToUnicode?yt({},ca,t.namedCodesToUnicode):ca,t.createElement=t.createElement||A.createElement;const s=[],i={},l={[G.blockQuote]:{match:Qe(il),order:1,parse:(c,m,f)=>({children:m(c[0].replace(Om,""),f)}),render:(c,m,f)=>n("blockquote",{key:f.key},m(c.children,f))},[G.breakLine]:{match:un(Rm),order:1,parse:Xr,render:(c,m,f)=>n("br",{key:f.key})},[G.breakThematic]:{match:Qe(Pm),order:1,parse:Xr,render:(c,m,f)=>n("hr",{key:f.key})},[G.codeBlock]:{match:Qe(cl),order:0,parse:c=>({lang:void 0,text:c[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(c,m,f)=>n("pre",{key:f.key},n("code",yt({},c.attrs,{className:c.lang?`lang-${c.lang}`:""}),c.text))},[G.codeFenced]:{match:Qe(ll),order:0,parse:c=>({attrs:o("code",c[3]||""),lang:c[2]||void 0,text:c[4],type:G.codeBlock})},[G.codeInline]:{match:at(_m),order:3,parse:c=>({text:c[2]}),render:(c,m,f)=>n("code",{key:f.key},c.text)},[G.footnote]:{match:Qe(Mm),order:0,parse:c=>(s.push({footnote:c[2],identifier:c[1]}),{}),render:Wr},[G.footnoteReference]:{match:st(Am),order:1,parse:c=>({target:`#${t.slugify(c[1],Yn)}`,text:c[1]}),render:(c,m,f)=>n("a",{key:f.key,href:t.sanitizer(c.target,"a","href")},n("sup",{key:f.key},c.text))},[G.gfmTask]:{match:st(Vm),order:1,parse:c=>({completed:c[1].toLowerCase()==="x"}),render:(c,m,f)=>n("input",{checked:c.completed,key:f.key,readOnly:!0,type:"checkbox"})},[G.heading]:{match:Qe(t.enforceAtxHeadings?ul:dl),order:1,parse:(c,m,f)=>({children:Qn(m,c[2],f),id:t.slugify(c[2],Yn),level:c[1].length}),render:(c,m,f)=>n(`h${c.level}`,{id:c.id,key:f.key},m(c.children,f))},[G.headingSetext]:{match:Qe(pl),order:0,parse:(c,m,f)=>({children:Qn(m,c[1],f),level:c[2]==="="?1:2,type:G.heading})},[G.htmlBlock]:{match:un(po),order:1,parse(c,m,f){const[,h]=c[3].match(dh),g=new RegExp(`^${h}`,"gm"),k=c[3].replace(g,""),C=(S=k,gh.some(B=>B.test(S))?Nh:Qn);var S;const N=c[1].toLowerCase(),v=Sm.indexOf(N)!==-1,O=(v?N:c[1]).trim(),_={attrs:o(O,c[2]),noInnerParse:v,tag:O};return f.inAnchor=f.inAnchor||N==="a",v?_.text=c[3]:_.children=C(m,k,f),f.inAnchor=!1,_},render:(c,m,f)=>n(c.tag,yt({key:f.key},c.attrs),c.text||m(c.children,f))},[G.htmlSelfClosing]:{match:un(fo),order:1,parse(c){const m=c[1].trim();return{attrs:o(m,c[2]||""),tag:m}},render:(c,m,f)=>n(c.tag,yt({},c.attrs,{key:f.key}))},[G.htmlComment]:{match:un(fl),order:1,parse:()=>({}),render:Wr},[G.image]:{match:at(hh),order:1,parse:c=>({alt:c[1],target:wa(c[2]),title:c[3]}),render:(c,m,f)=>n("img",{key:f.key,alt:c.alt||void 0,title:c.title||void 0,src:t.sanitizer(c.target,"img","src")})},[G.link]:{match:st(mh),order:3,parse:(c,m,f)=>({children:kh(m,c[1],f),target:wa(c[2]),title:c[3]}),render:(c,m,f)=>n("a",{key:f.key,href:t.sanitizer(c.target,"a","href"),title:c.title},m(c.children,f))},[G.linkAngleBraceStyleDetector]:{match:st(qm),order:0,parse:c=>({children:[{text:c[1],type:G.text}],target:c[1],type:G.link})},[G.linkBareUrlDetector]:{match:(c,m)=>m.inAnchor?null:st(Gm)(c,m),order:0,parse:c=>({children:[{text:c[1],type:G.text}],target:c[1],title:void 0,type:G.link})},[G.linkMailtoDetector]:{match:st(Um),order:0,parse(c){let m=c[1],f=c[1];return Cm.test(f)||(f="mailto:"+f),{children:[{text:m.replace("mailto:",""),type:G.text}],target:f,type:G.link}}},[G.orderedList]:ua(n,1),[G.unorderedList]:ua(n,2),[G.newlineCoalescer]:{match:Qe($m),order:3,parse:Xr,render:()=>`
`},[G.paragraph]:{match:yh,order:3,parse:Hr,render:(c,m,f)=>n("p",{key:f.key},m(c.children,f))},[G.ref]:{match:st(Xm),order:0,parse:c=>(i[c[1]]={target:c[2],title:c[4]},{}),render:Wr},[G.refImage]:{match:at(Wm),order:0,parse:c=>({alt:c[1]||void 0,ref:c[2]}),render:(c,m,f)=>i[c.ref]?n("img",{key:f.key,alt:c.alt,src:t.sanitizer(i[c.ref].target,"img","src"),title:i[c.ref].title}):null},[G.refLink]:{match:st(Ym),order:0,parse:(c,m,f)=>({children:m(c[1],f),fallbackChildren:m(c[0].replace(Km,"\\$1"),f),ref:c[2]}),render:(c,m,f)=>i[c.ref]?n("a",{key:f.key,href:t.sanitizer(i[c.ref].target,"a","href"),title:i[c.ref].title},m(c.children,f)):n("span",{key:f.key},m(c.fallbackChildren,f))},[G.table]:{match:Qe(wl),order:1,parse:vh,render(c,m,f){const h=c;return n("table",{key:f.key},n("thead",null,n("tr",null,h.header.map(function(g,k){return n("th",{key:k,style:fa(h,k)},m(g,f))}))),n("tbody",null,h.cells.map(function(g,k){return n("tr",{key:k},g.map(function(C,S){return n("td",{key:S,style:fa(h,S)},m(C,f))}))})))}},[G.text]:{match:un(lh),order:4,parse:c=>({text:c[0].replace(Lm,(m,f)=>t.namedCodesToUnicode[f]?t.namedCodesToUnicode[f]:m)}),render:c=>c.text},[G.textBolded]:{match:at(rh),order:2,parse:(c,m,f)=>({children:m(c[2],f)}),render:(c,m,f)=>n("strong",{key:f.key},m(c.children,f))},[G.textEmphasized]:{match:at(oh),order:3,parse:(c,m,f)=>({children:m(c[2],f)}),render:(c,m,f)=>n("em",{key:f.key},m(c.children,f))},[G.textEscaped]:{match:at(ih),order:1,parse:c=>({text:c[1],type:G.text})},[G.textMarked]:{match:at(sh),order:3,parse:Hr,render:(c,m,f)=>n("mark",{key:f.key},m(c.children,f))},[G.textStrikethroughed]:{match:at(ah),order:3,parse:Hr,render:(c,m,f)=>n("del",{key:f.key},m(c.children,f))}};t.disableParsingRawHTML===!0&&(delete l[G.htmlBlock],delete l[G.htmlSelfClosing]);const d=function(c){let m=Object.keys(c);function f(h,g){let k=[],C="";for(;h;){let S=0;for(;S<m.length;){const N=m[S],v=c[N],O=v.match(h,g,C);if(O){const _=O[0];h=h.substring(_.length);const B=v.parse(O,f,g);B.type==null&&(B.type=N),k.push(B),C=_;break}S++}}return k}return m.sort(function(h,g){let k=c[h].order,C=c[g].order;return k!==C?k-C:h<g?-1:1}),function(h,g){return f(function(k){return k.replace(Im,`
`).replace(Dm,"").replace(Zm,"    ")}(h),g)}}(l),u=(p=function(c,m){return function(f,h,g){const k=c[f.type].render;return m?m(()=>k(f,h,g),f,h,g):k(f,h,g)}}(l,t.renderRule),function c(m,f={}){if(Array.isArray(m)){const h=f.key,g=[];let k=!1;for(let C=0;C<m.length;C++){f.key=C;const S=c(m[C],f),N=typeof S=="string";N&&k?g[g.length-1]+=S:S!==null&&g.push(S),k=N}return f.key=h,g}return p(m,c,f)});var p;const b=r(e);return s.length?n("div",null,b,n("footer",{key:"footer"},s.map(function(c){return n("div",{id:t.slugify(c.identifier,Yn),key:c.identifier},c.identifier,u(d(c.footnote,{inline:!0})))}))):b}const Th=e=>{let{children:t="",options:n}=e,r=function(o,s){if(o==null)return{};var i,l,d={},u=Object.keys(o);for(l=0;l<u.length;l++)s.indexOf(i=u[l])>=0||(d[i]=o[i]);return d}(e,Em);return A.cloneElement(Sh(t,n),r)};function Ch({id:e,markdown:t,className:n}){return a.jsx("div",{id:e,className:j("pr-twp tw-prose",n),children:a.jsx(Th,{children:t})})}const Tl=y.forwardRef((e,t)=>a.jsxs(ge,{ref:t,className:"tw-rounded-md tw-border tw-border-dashed tw-border-gray-400 tw-bg-white tw-px-4 tw-py-2 tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw-border-blue-600 hover:tw-bg-white hover:tw-text-blue-600",...e,children:[a.jsx(ne.Filter,{size:16,className:"tw-mr-2 tw-h-4 tw-w-4 tw-text-gray-700 hover:tw-text-blue-600"}),"Filter",a.jsx(ne.ChevronDown,{size:16,className:"tw-ml-2 tw-h-4 tw-w-4 tw-text-gray-700 hover:tw-text-blue-600"})]}));var Cl=(e=>(e[e.Check=0]="Check",e[e.Radio=1]="Radio",e))(Cl||{});function jh({id:e,groups:t}){return a.jsx("div",{id:e,children:a.jsxs(dr,{children:[a.jsx(go,{asChild:!0,children:a.jsx(Tl,{})}),a.jsx(On,{children:t.map(n=>a.jsxs("div",{children:[a.jsx(Zt,{children:n.label}),a.jsx(Ta,{children:n.items.map(r=>a.jsx("div",{children:r.itemType===0?a.jsx(ur,{onClick:r.onClick,children:r.label}):a.jsx(vo,{onClick:r.onClick,value:r.label,children:r.label})},r.label))}),a.jsx(Rn,{})]},n.label))})]})})}function Oh({id:e,message:t}){return a.jsx("div",{id:e,className:"tw-mb-20 tw-mt-20 tw-flex tw-items-center tw-justify-center",children:a.jsx("div",{className:"tw-w-3/4 tw-rounded-lg tw-bg-gray-100 tw-p-8 tw-text-center",children:a.jsx("p",{className:"tw-text-lg tw-text-gray-800",children:t})})})}function Rh({id:e,category:t,downloads:n,languages:r,moreInfoUrl:o}){const s=new K.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(Object.values(n).reduce((l,d)=>l+d,0)),i=()=>{window.scrollTo(0,document.body.scrollHeight)};return a.jsxs("div",{id:e,className:"tw-flex tw-flex-wrap tw-items-start tw-space-x-4 tw-border-b tw-border-t tw-bg-white tw-pb-4 tw-pt-4",children:[a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsx("div",{className:"tw-flex tw-items-center tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1",children:a.jsx("span",{className:"tw-text-xs tw-font-semibold tw-text-gray-700",children:t})}),a.jsx("span",{className:"tw-text-xs tw-text-gray-500",children:"CATEGORY"})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsxs("div",{className:"tw-flex tw-items-center tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1",children:[a.jsx(ne.User,{className:"tw-mr-1 tw-h-4 tw-w-4"}),a.jsx("span",{className:"tw-text-xs tw-font-semibold tw-text-gray-700",children:s})]}),a.jsx("span",{className:"tw-text-xs tw-text-gray-500",children:"USERS"})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsx("div",{className:"tw-flex tw-items-center",children:r.slice(0,3).map(l=>a.jsx("span",{className:"tw-ml-1 tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-700",children:l.toUpperCase()},l))}),r.length>3&&a.jsxs("button",{type:"button",onClick:()=>i(),className:"tw-text-xs tw-text-gray-500 tw-underline",children:["+",r.length-3," more languages"]})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-ml-auto tw-flex tw-flex-col tw-space-y-2",children:[a.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",className:"tw-flex tw-items-center tw-text-xs tw-font-semibold tw-text-gray-500 tw-underline",children:["Website",a.jsx(ne.Link,{className:"tw-ml-1 tw-inline tw-h-4 tw-w-4"})]}),a.jsxs("a",{href:"https://example.com",target:"_blank",rel:"noreferrer",className:"tw-flex tw-items-center tw-text-xs tw-font-semibold tw-text-gray-500 tw-underline",children:["Support",a.jsx(ne.CircleHelp,{className:"tw-ml-1 tw-inline tw-h-4 tw-w-4"})]})]})]})}function jl({id:e,versionHistory:t}){const[n,r]=y.useState(!1),o=new Date;function s(l){const d=new Date(l),u=new Date(o.getTime()-d.getTime()),p=u.getUTCFullYear()-1970,b=u.getUTCMonth(),c=u.getUTCDate()-1;let m="";return p>0?m=`${p.toString()} year${p===1?"":"s"} ago`:b>0?m=`${b.toString()} month${b===1?"":"s"} ago`:c===0?m="today":m=`${c.toString()} day${c===1?"":"s"} ago`,m}const i=Object.entries(t).sort((l,d)=>d[0].localeCompare(l[0]));return a.jsxs("div",{id:e,children:[a.jsx("h3",{className:"tw-text-md tw-font-semibold",children:"What`s New"}),a.jsx("ul",{className:"tw-list-disc tw-pl-5 tw-pr-4 tw-text-xs tw-text-gray-600",children:(n?i:i.slice(0,5)).map(l=>a.jsxs("div",{className:"tw-mt-3 tw-flex tw-justify-between",children:[a.jsx("div",{className:"tw-text-gray-600",children:a.jsx("li",{className:"tw-prose tw-text-xs",children:a.jsx("span",{children:l[1].description})})}),a.jsxs("div",{className:"tw-justify-end tw-text-right",children:[a.jsxs("div",{children:["Version ",l[0]]}),a.jsx("div",{children:s(l[1].date)})]})]},l[0]))}),i.length>5&&a.jsx("button",{type:"button",onClick:()=>r(!n),className:"tw-text-xs tw-text-gray-500 tw-underline",children:n?"Show Less Version History":"Show All Version History"})]})}function Ph({id:e,publisherDisplayName:t,fileSize:n,locales:r,versionHistory:o}){const s=y.useMemo(()=>K.formatBytes(n),[n]),l=(d=>{const u=new Intl.DisplayNames(navigator.language,{type:"language"});return d.map(p=>u.of(p))})(r);return a.jsx("div",{id:e,className:"tw-border-t tw-pb-4 tw-pt-4",children:a.jsxs("div",{className:"tw-md:flex-row tw-md:space-x-8 tw-flex tw-flex-col tw-space-x-0",children:[a.jsx(jl,{versionHistory:o}),a.jsx("div",{className:"tw-md:border-t-0 tw-md:border-l tw-md-h-auto tw-md-ml-8 tw-mt-4 tw-border-t tw-border-gray-300"}),a.jsxs("div",{className:"tw-md:mt-0 tw-mt-4 tw-flex-1 tw-space-y-3",children:[a.jsx("h2",{className:"tw-text-md tw-font-semibold",children:"Information"}),a.jsxs("div",{className:"tw-flex tw-items-start tw-justify-between tw-pr-4 tw-text-xs tw-text-gray-600",children:[a.jsxs("p",{className:"tw-flex tw-flex-col tw-justify-start",children:[a.jsx("span",{className:"tw-mb-2",children:"Publisher"}),a.jsx("span",{className:"tw-font-semibold",children:t}),a.jsx("span",{className:"tw-mb-2 tw-mt-4",children:"Size"}),a.jsx("span",{className:"tw-font-semibold",children:s})]}),a.jsx("div",{className:"tw-flex tw-w-3/4 tw-items-center tw-justify-between tw-text-xs tw-text-gray-600",children:a.jsxs("p",{className:"tw-flex tw-flex-col tw-justify-start",children:[a.jsx("span",{className:"tw-mb-2",children:"Languages"}),a.jsx("span",{className:"tw-font-semibold",children:l.join(", ")})]})})]})]})]})})}const _h=(e,t)=>{y.useEffect(()=>{if(!e)return()=>{};const n=e(t);return()=>{n()}},[e,t])},Kr=()=>!1,$h=(e,t)=>{const[n]=ir(y.useCallback(async()=>{if(!e)return Kr;const r=await Promise.resolve(e(t));return async()=>r()},[t,e]),Kr,{preserveValue:!1});y.useEffect(()=>()=>{n!==Kr&&n()},[n])};Object.defineProperty(exports,"sonner",{enumerable:!0,get:()=>ha.toast});exports.Alert=Hi;exports.AlertDescription=Wi;exports.AlertTitle=Xi;exports.BOOK_SELECTOR_STRING_KEYS=zc;exports.BookChapterControl=Rc;exports.BookSelectionMode=Va;exports.BookSelector=Fc;exports.Button=ge;exports.Card=Yi;exports.CardContent=Qi;exports.CardDescription=Zi;exports.CardFooter=el;exports.CardHeader=Ki;exports.CardTitle=Ji;exports.ChapterRangeSelector=Ba;exports.Checkbox=pr;exports.Checklist=wd;exports.ComboBox=eo;exports.DataTable=qa;exports.DisableButton=km;exports.DropdownMenu=dr;exports.DropdownMenuCheckboxItem=ur;exports.DropdownMenuContent=On;exports.DropdownMenuGroup=Ta;exports.DropdownMenuItem=bo;exports.DropdownMenuItemType=Cl;exports.DropdownMenuLabel=Zt;exports.DropdownMenuPortal=gc;exports.DropdownMenuRadioGroup=vc;exports.DropdownMenuRadioItem=vo;exports.DropdownMenuSeparator=Rn;exports.DropdownMenuShortcut=Oa;exports.DropdownMenuSub=bc;exports.DropdownMenuSubContent=ja;exports.DropdownMenuSubTrigger=Ca;exports.DropdownMenuTrigger=go;exports.EnableButton=xm;exports.FilterButton=Tl;exports.FilterDropdown=jh;exports.Footer=Ph;exports.GridMenu=Ui;exports.HamburgerMenuButton=qi;exports.INVENTORY_STRING_KEYS=Jc;exports.IconButton=um;exports.Input=Kt;exports.InstallButton=ym;exports.Inventory=ed;exports.Label=qe;exports.MarkdownRenderer=Ch;exports.MenuItem=Ko;exports.MoreInfo=Rh;exports.NavigationContentSearch=td;exports.NoExtensionsFound=Oh;exports.RadioGroup=yo;exports.RadioGroupItem=er;exports.ScriptureResultsViewer=cd;exports.ScrollGroupSelector=dd;exports.SearchBar=Ja;exports.Select=zt;exports.SelectContent=Et;exports.SelectGroup=La;exports.SelectItem=De;exports.SelectLabel=za;exports.SelectScrollDownButton=ko;exports.SelectScrollUpButton=xo;exports.SelectSeparator=Fa;exports.SelectTrigger=Nt;exports.SelectValue=Ft;exports.Separator=Co;exports.SettingsList=ud;exports.SettingsListHeader=fd;exports.SettingsListItem=pd;exports.Slider=tl;exports.Sonner=mm;exports.Spinner=Qt;exports.Switch=nl;exports.Table=Pn;exports.TableBody=$n;exports.TableCaption=Ua;exports.TableCell=St;exports.TableFooter=Ga;exports.TableHead=Gt;exports.TableHeader=_n;exports.TableRow=et;exports.Tabs=hm;exports.TabsContent=sl;exports.TabsList=rl;exports.TabsTrigger=ol;exports.TextField=pm;exports.ToggleGroup=No;exports.ToggleGroupItem=bn;exports.Toolbar=fm;exports.Tooltip=bm;exports.TooltipContent=al;exports.TooltipProvider=gm;exports.TooltipTrigger=vm;exports.UpdateButton=Nm;exports.VersionHistory=jl;exports.VerticalTabs=Eo;exports.VerticalTabsContent=To;exports.VerticalTabsList=So;exports.VerticalTabsTrigger=Za;exports.buttonVariants=Ra;exports.cn=j;exports.getBookNumFromId=Xa;exports.getLinesFromUSFM=Ha;exports.getNumberFromUSFM=to;exports.getStatusForItem=Wa;exports.inventoryCountColumn=Yc;exports.inventoryItemColumn=Xc;exports.inventoryStatusColumn=Kc;exports.useEvent=_h;exports.useEventAsync=$h;exports.usePromise=ir;function Ih(e,t="top"){if(!e||typeof document>"u")return;const n=document.head||document.querySelector("head"),r=n.querySelector(":first-child"),o=document.createElement("style");o.appendChild(document.createTextNode(e)),t==="top"&&r?n.insertBefore(o,r):n.appendChild(o)}Ih(`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*:where(.pr-twp,.pr-twp *),
::before:where(.pr-twp,.pr-twp *),
::after:where(.pr-twp,.pr-twp *) {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before:where(.pr-twp,.pr-twp *),
::after:where(.pr-twp,.pr-twp *) {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html:where(.pr-twp,.pr-twp *),
:host:where(.pr-twp,.pr-twp *) {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body:where(.pr-twp,.pr-twp *) {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr:where(.pr-twp,.pr-twp *) {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]):where(.pr-twp,.pr-twp *) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1:where(.pr-twp,.pr-twp *),
h2:where(.pr-twp,.pr-twp *),
h3:where(.pr-twp,.pr-twp *),
h4:where(.pr-twp,.pr-twp *),
h5:where(.pr-twp,.pr-twp *),
h6:where(.pr-twp,.pr-twp *) {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a:where(.pr-twp,.pr-twp *) {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b:where(.pr-twp,.pr-twp *),
strong:where(.pr-twp,.pr-twp *) {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code:where(.pr-twp,.pr-twp *),
kbd:where(.pr-twp,.pr-twp *),
samp:where(.pr-twp,.pr-twp *),
pre:where(.pr-twp,.pr-twp *) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small:where(.pr-twp,.pr-twp *) {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub:where(.pr-twp,.pr-twp *),
sup:where(.pr-twp,.pr-twp *) {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub:where(.pr-twp,.pr-twp *) {
  bottom: -0.25em;
}

sup:where(.pr-twp,.pr-twp *) {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table:where(.pr-twp,.pr-twp *) {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button:where(.pr-twp,.pr-twp *),
input:where(.pr-twp,.pr-twp *),
optgroup:where(.pr-twp,.pr-twp *),
select:where(.pr-twp,.pr-twp *),
textarea:where(.pr-twp,.pr-twp *) {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button:where(.pr-twp,.pr-twp *),
select:where(.pr-twp,.pr-twp *) {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button:where(.pr-twp,.pr-twp *),
input:where([type='button']):where(.pr-twp,.pr-twp *),
input:where([type='reset']):where(.pr-twp,.pr-twp *),
input:where([type='submit']):where(.pr-twp,.pr-twp *) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring:where(.pr-twp,.pr-twp *) {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid:where(.pr-twp,.pr-twp *) {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress:where(.pr-twp,.pr-twp *) {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button:where(.pr-twp,.pr-twp *),
::-webkit-outer-spin-button:where(.pr-twp,.pr-twp *) {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search']:where(.pr-twp,.pr-twp *) {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration:where(.pr-twp,.pr-twp *) {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button:where(.pr-twp,.pr-twp *) {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary:where(.pr-twp,.pr-twp *) {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote:where(.pr-twp,.pr-twp *),
dl:where(.pr-twp,.pr-twp *),
dd:where(.pr-twp,.pr-twp *),
h1:where(.pr-twp,.pr-twp *),
h2:where(.pr-twp,.pr-twp *),
h3:where(.pr-twp,.pr-twp *),
h4:where(.pr-twp,.pr-twp *),
h5:where(.pr-twp,.pr-twp *),
h6:where(.pr-twp,.pr-twp *),
hr:where(.pr-twp,.pr-twp *),
figure:where(.pr-twp,.pr-twp *),
p:where(.pr-twp,.pr-twp *),
pre:where(.pr-twp,.pr-twp *) {
  margin: 0;
}

fieldset:where(.pr-twp,.pr-twp *) {
  margin: 0;
  padding: 0;
}

legend:where(.pr-twp,.pr-twp *) {
  padding: 0;
}

ol:where(.pr-twp,.pr-twp *),
ul:where(.pr-twp,.pr-twp *),
menu:where(.pr-twp,.pr-twp *) {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog:where(.pr-twp,.pr-twp *) {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea:where(.pr-twp,.pr-twp *) {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder:where(.pr-twp,.pr-twp *),
textarea::placeholder:where(.pr-twp,.pr-twp *) {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button:where(.pr-twp,.pr-twp *),
[role="button"]:where(.pr-twp,.pr-twp *) {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled:where(.pr-twp,.pr-twp *) {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img:where(.pr-twp,.pr-twp *),
svg:where(.pr-twp,.pr-twp *),
video:where(.pr-twp,.pr-twp *),
canvas:where(.pr-twp,.pr-twp *),
audio:where(.pr-twp,.pr-twp *),
iframe:where(.pr-twp,.pr-twp *),
embed:where(.pr-twp,.pr-twp *),
object:where(.pr-twp,.pr-twp *) {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img:where(.pr-twp,.pr-twp *),
video:where(.pr-twp,.pr-twp *) {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(.pr-twp,.pr-twp *) {
  display: none;
}
  /* Adding the preflight selector (pr-twp) to components was not changing the font as desired.
  So this piece of code adds tw-font-sans everywhere we include preflight. */
  .pr-twp {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
  @font-face {
    font-family: 'Inter';
    font-display: 'swap';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  }

  /*
   * Theme colors in Platform.Bible. These are applied in CSS properties using \`hsl(var(--varName))\`
   * or Tailwind classes like \`tw-bg-primary\`
   *
   * See the wiki's
   * [Matching Application Theme](https://github.com/paranext/paranext-extension-template/wiki/Extension-Anatomy#matching-application-theme)
   * section for more information
   */
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }

  /* using color palette https://supercolorpalette.com/?scp=G0-hsl-99827A-E7DDD0-FEF4E7-FEFAF1-FFFFFF-D8E9E3-719892-07463D-0A433D-083030-041616-000000-85DBB8-F2F52E-CD3737 */
  .paratext-light {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    --muted: 33.9 32.4% 86.1%;
    --muted-foreground: 15.5 13.2% 53.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --border: 220 13% 91%;
    --input: 161.3 26.7% 88.2%;
    --primary: 173.4 82.1% 15.3%;
    --primary-foreground: 40 85.7% 97.3%;
    --secondary: 161.3 26.7% 88.2%;
    --secondary-foreground: 173.4 82.1% 15.3%;
    --accent: 161.3 26.7% 88.2%;
    --accent-foreground: 173.4 82.1% 15.3%;
    --destructive: 0 60% 51%;
    --destructive-foreground: 210 20% 98%;
    --ring: 13.5 13.2% 53.9%;
  }

  .paratext-dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --muted: 15.5 13.2% 53.9%;
    --muted-foreground: 33.9 32.4% 86.1%;
    --popover: 180 71.4% 5%;
    --popover-foreground: 0 0% 100%;
    --card: 0 0% 0%;
    --card-foreground: 0 0% 100%;
    --border: 220 13% 20%;
    --input: 220 13% 20%;
    --primary: 161.3 26.7% 88.2%;
    --primary-foreground: 173.4 82.1% 15.3%;
    --secondary: 180 71.4% 11%;
    --secondary-foreground: 161.3 26.7% 88.2%;
    --accent: 180 71.4% 11%;
    --accent-foreground: 161.3 26.7% 88.2%;
    --destructive: 0 60% 51%;
    --destructive-foreground: 210 20% 98%;
    --ring: 13.5 13.2% 53.9%;
  }
  * {
  border-color: hsl(var(--border));
}

  body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}
.tw-prose {
  color: var(--tw-prose-body);
  max-width: 65ch;
}
.tw-prose :where(p):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.tw-prose :where([class~="lead"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-lead);
  font-size: 1.25em;
  line-height: 1.6;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
}
.tw-prose :where(a):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-links);
  text-decoration: underline;
  font-weight: 500;
}
.tw-prose :where(strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-bold);
  font-weight: 600;
}
.tw-prose :where(a strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(blockquote strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(thead th strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(ol):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: decimal;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-inline-start: 1.625em;
}
.tw-prose :where(ol[type="A"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-alpha;
}
.tw-prose :where(ol[type="a"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-alpha;
}
.tw-prose :where(ol[type="A" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-alpha;
}
.tw-prose :where(ol[type="a" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-alpha;
}
.tw-prose :where(ol[type="I"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-roman;
}
.tw-prose :where(ol[type="i"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-roman;
}
.tw-prose :where(ol[type="I" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: upper-roman;
}
.tw-prose :where(ol[type="i" s]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: lower-roman;
}
.tw-prose :where(ol[type="1"]):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: decimal;
}
.tw-prose :where(ul):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  list-style-type: disc;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-inline-start: 1.625em;
}
.tw-prose :where(ol > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::marker {
  font-weight: 400;
  color: var(--tw-prose-counters);
}
.tw-prose :where(ul > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::marker {
  color: var(--tw-prose-bullets);
}
.tw-prose :where(dt):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.25em;
}
.tw-prose :where(hr):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-color: var(--tw-prose-hr);
  border-top-width: 1px;
  margin-top: 3em;
  margin-bottom: 3em;
}
.tw-prose :where(blockquote):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 500;
  font-style: italic;
  color: var(--tw-prose-quotes);
  border-inline-start-width: 0.25rem;
  border-inline-start-color: var(--tw-prose-quote-borders);
  quotes: "0o201C""0o201D""0o2018""0o2019";
  margin-top: 1.6em;
  margin-bottom: 1.6em;
  padding-inline-start: 1em;
}
.tw-prose :where(blockquote p:first-of-type):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::before {
  content: open-quote;
}
.tw-prose :where(blockquote p:last-of-type):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::after {
  content: close-quote;
}
.tw-prose :where(h1):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 800;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0.8888889em;
  line-height: 1.1111111;
}
.tw-prose :where(h1 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 900;
  color: inherit;
}
.tw-prose :where(h2):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
}
.tw-prose :where(h2 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 800;
  color: inherit;
}
.tw-prose :where(h3):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  line-height: 1.6;
}
.tw-prose :where(h3 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 700;
  color: inherit;
}
.tw-prose :where(h4):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  line-height: 1.5;
}
.tw-prose :where(h4 strong):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 700;
  color: inherit;
}
.tw-prose :where(img):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(picture):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  display: block;
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(video):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(kbd):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  font-weight: 500;
  font-family: inherit;
  color: var(--tw-prose-kbd);
  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);
  font-size: 0.875em;
  border-radius: 0.3125rem;
  padding-top: 0.1875em;
  padding-inline-end: 0.375em;
  padding-bottom: 0.1875em;
  padding-inline-start: 0.375em;
}
.tw-prose :where(code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-code);
  font-weight: 600;
  font-size: 0.875em;
}
.tw-prose :where(code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::before {
  content: "\`";
}
.tw-prose :where(code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::after {
  content: "\`";
}
.tw-prose :where(a code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(h1 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(h2 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
  font-size: 0.875em;
}
.tw-prose :where(h3 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
  font-size: 0.9em;
}
.tw-prose :where(h4 code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(blockquote code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(thead th code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: inherit;
}
.tw-prose :where(pre):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-pre-code);
  background-color: var(--tw-prose-pre-bg);
  overflow-x: auto;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.7142857;
  margin-top: 1.7142857em;
  margin-bottom: 1.7142857em;
  border-radius: 0.375rem;
  padding-top: 0.8571429em;
  padding-inline-end: 1.1428571em;
  padding-bottom: 0.8571429em;
  padding-inline-start: 1.1428571em;
}
.tw-prose :where(pre code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  background-color: transparent;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
.tw-prose :where(pre code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::before {
  content: none;
}
.tw-prose :where(pre code):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *))::after {
  content: none;
}
.tw-prose :where(table):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  width: 100%;
  table-layout: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 0.875em;
  line-height: 1.7142857;
}
.tw-prose :where(thead):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-th-borders);
}
.tw-prose :where(thead th):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  vertical-align: bottom;
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-inline-start: 0.5714286em;
}
.tw-prose :where(tbody tr):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-td-borders);
}
.tw-prose :where(tbody tr:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-bottom-width: 0;
}
.tw-prose :where(tbody td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  vertical-align: baseline;
}
.tw-prose :where(tfoot):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  border-top-width: 1px;
  border-top-color: var(--tw-prose-th-borders);
}
.tw-prose :where(tfoot td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  vertical-align: top;
}
.tw-prose :where(th, td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  text-align: start;
}
.tw-prose :where(figure > *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
.tw-prose :where(figcaption):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  color: var(--tw-prose-captions);
  font-size: 0.875em;
  line-height: 1.4285714;
  margin-top: 0.8571429em;
}
.tw-prose {
  --tw-prose-body: #374151;
  --tw-prose-headings: #111827;
  --tw-prose-lead: #4b5563;
  --tw-prose-links: #111827;
  --tw-prose-bold: #111827;
  --tw-prose-counters: #6b7280;
  --tw-prose-bullets: #d1d5db;
  --tw-prose-hr: #e5e7eb;
  --tw-prose-quotes: #111827;
  --tw-prose-quote-borders: #e5e7eb;
  --tw-prose-captions: #6b7280;
  --tw-prose-kbd: #111827;
  --tw-prose-kbd-shadows: 17 24 39;
  --tw-prose-code: #111827;
  --tw-prose-pre-code: #e5e7eb;
  --tw-prose-pre-bg: #1f2937;
  --tw-prose-th-borders: #d1d5db;
  --tw-prose-td-borders: #e5e7eb;
  --tw-prose-invert-body: #d1d5db;
  --tw-prose-invert-headings: #fff;
  --tw-prose-invert-lead: #9ca3af;
  --tw-prose-invert-links: #fff;
  --tw-prose-invert-bold: #fff;
  --tw-prose-invert-counters: #9ca3af;
  --tw-prose-invert-bullets: #4b5563;
  --tw-prose-invert-hr: #374151;
  --tw-prose-invert-quotes: #f3f4f6;
  --tw-prose-invert-quote-borders: #374151;
  --tw-prose-invert-captions: #9ca3af;
  --tw-prose-invert-kbd: #fff;
  --tw-prose-invert-kbd-shadows: 255 255 255;
  --tw-prose-invert-code: #fff;
  --tw-prose-invert-pre-code: #d1d5db;
  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
  --tw-prose-invert-th-borders: #4b5563;
  --tw-prose-invert-td-borders: #374151;
  font-size: 1rem;
  line-height: 1.75;
}
.tw-prose :where(picture > img):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
.tw-prose :where(li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.tw-prose :where(ol > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0.375em;
}
.tw-prose :where(ul > li):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0.375em;
}
.tw-prose :where(.tw-prose > ul > li p):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.tw-prose :where(.tw-prose > ul > li > p:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
}
.tw-prose :where(.tw-prose > ul > li > p:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-bottom: 1.25em;
}
.tw-prose :where(.tw-prose > ol > li > p:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
}
.tw-prose :where(.tw-prose > ol > li > p:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-bottom: 1.25em;
}
.tw-prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.tw-prose :where(dl):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.tw-prose :where(dd):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0.5em;
  padding-inline-start: 1.625em;
}
.tw-prose :where(hr + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(h2 + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(h3 + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(h4 + *):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(thead th:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0;
}
.tw-prose :where(thead th:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-end: 0;
}
.tw-prose :where(tbody td, tfoot td):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-top: 0.5714286em;
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-inline-start: 0.5714286em;
}
.tw-prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-start: 0;
}
.tw-prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  padding-inline-end: 0;
}
.tw-prose :where(figure):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.tw-prose :where(.tw-prose > :first-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-top: 0;
}
.tw-prose :where(.tw-prose > :last-child):not(:where([class~="tw-not-prose"],[class~="tw-not-prose"] *)) {
  margin-bottom: 0;
}
.tw-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.tw-pointer-events-none {
  pointer-events: none;
}
.tw-fixed {
  position: fixed;
}
.tw-absolute {
  position: absolute;
}
.tw-relative {
  position: relative;
}
.tw-sticky {
  position: sticky;
}
.tw-inset-0 {
  inset: 0px;
}
.tw-inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.tw-bottom-2 {
  bottom: 0.5rem;
}
.tw-left-2 {
  left: 0.5rem;
}
.tw-left-2\\.5 {
  left: 0.625rem;
}
.tw-left-\\[50\\%\\] {
  left: 50%;
}
.tw-right-3 {
  right: 0.75rem;
}
.tw-right-4 {
  right: 1rem;
}
.tw-top-0 {
  top: 0px;
}
.tw-top-1\\/2 {
  top: 50%;
}
.tw-top-2\\.5 {
  top: 0.625rem;
}
.tw-top-4 {
  top: 1rem;
}
.tw-top-\\[50\\%\\] {
  top: 50%;
}
.tw-z-10 {
  z-index: 10;
}
.tw-z-30 {
  z-index: 30;
}
.tw-z-50 {
  z-index: 50;
}
.tw-col-span-2 {
  grid-column: span 2 / span 2;
}
.tw-m-1 {
  margin: 0.25rem;
}
.tw-m-2 {
  margin: 0.5rem;
}
.tw--mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.tw-mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.tw-mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.tw-my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.tw-my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.tw-my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.tw-mb-1 {
  margin-bottom: 0.25rem;
}
.tw-mb-2 {
  margin-bottom: 0.5rem;
}
.tw-mb-20 {
  margin-bottom: 5rem;
}
.tw-me-2 {
  margin-inline-end: 0.5rem;
}
.tw-ml-1 {
  margin-left: 0.25rem;
}
.tw-ml-2 {
  margin-left: 0.5rem;
}
.tw-ml-auto {
  margin-left: auto;
}
.tw-mr-1 {
  margin-right: 0.25rem;
}
.tw-mr-2 {
  margin-right: 0.5rem;
}
.tw-ms-2 {
  margin-inline-start: 0.5rem;
}
.tw-ms-5 {
  margin-inline-start: 1.25rem;
}
.tw-ms-auto {
  margin-inline-start: auto;
}
.tw-mt-2 {
  margin-top: 0.5rem;
}
.tw-mt-20 {
  margin-top: 5rem;
}
.tw-mt-3 {
  margin-top: 0.75rem;
}
.tw-mt-4 {
  margin-top: 1rem;
}
.tw-mt-auto {
  margin-top: auto;
}
.tw-box-border {
  box-sizing: border-box;
}
.tw-box-content {
  box-sizing: content-box;
}
.tw-block {
  display: block;
}
.tw-inline-block {
  display: inline-block;
}
.tw-inline {
  display: inline;
}
.tw-flex {
  display: flex;
}
.tw-inline-flex {
  display: inline-flex;
}
.tw-grid {
  display: grid;
}
.tw-inline-grid {
  display: inline-grid;
}
.tw-hidden {
  display: none;
}
.tw-aspect-square {
  aspect-ratio: 1 / 1;
}
.tw-h-1\\/2 {
  height: 50%;
}
.tw-h-10 {
  height: 2.5rem;
}
.tw-h-11 {
  height: 2.75rem;
}
.tw-h-12 {
  height: 3rem;
}
.tw-h-14 {
  height: 3.5rem;
}
.tw-h-2 {
  height: 0.5rem;
}
.tw-h-2\\.5 {
  height: 0.625rem;
}
.tw-h-20 {
  height: 5rem;
}
.tw-h-24 {
  height: 6rem;
}
.tw-h-3 {
  height: 0.75rem;
}
.tw-h-3\\.5 {
  height: 0.875rem;
}
.tw-h-4 {
  height: 1rem;
}
.tw-h-5 {
  height: 1.25rem;
}
.tw-h-6 {
  height: 1.5rem;
}
.tw-h-7 {
  height: 1.75rem;
}
.tw-h-8 {
  height: 2rem;
}
.tw-h-9 {
  height: 2.25rem;
}
.tw-h-96 {
  height: 24rem;
}
.tw-h-\\[1\\.2rem\\] {
  height: 1.2rem;
}
.tw-h-\\[100\\%\\] {
  height: 100%;
}
.tw-h-\\[1px\\] {
  height: 1px;
}
.tw-h-\\[405px\\] {
  height: 405px;
}
.tw-h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.tw-h-full {
  height: 100%;
}
.tw-h-px {
  height: 1px;
}
.tw-max-h-96 {
  max-height: 24rem;
}
.tw-max-h-\\[300px\\] {
  max-height: 300px;
}
.tw-w-0 {
  width: 0px;
}
.tw-w-1\\/3 {
  width: 33.333333%;
}
.tw-w-10 {
  width: 2.5rem;
}
.tw-w-11 {
  width: 2.75rem;
}
.tw-w-14 {
  width: 3.5rem;
}
.tw-w-2 {
  width: 0.5rem;
}
.tw-w-2\\.5 {
  width: 0.625rem;
}
.tw-w-20 {
  width: 5rem;
}
.tw-w-3 {
  width: 0.75rem;
}
.tw-w-3\\.5 {
  width: 0.875rem;
}
.tw-w-3\\/4 {
  width: 75%;
}
.tw-w-4 {
  width: 1rem;
}
.tw-w-5 {
  width: 1.25rem;
}
.tw-w-6 {
  width: 1.5rem;
}
.tw-w-72 {
  width: 18rem;
}
.tw-w-8 {
  width: 2rem;
}
.tw-w-9 {
  width: 2.25rem;
}
.tw-w-\\[1\\.2rem\\] {
  width: 1.2rem;
}
.tw-w-\\[100px\\] {
  width: 100px;
}
.tw-w-\\[116px\\] {
  width: 116px;
}
.tw-w-\\[124px\\] {
  width: 124px;
}
.tw-w-\\[150px\\] {
  width: 150px;
}
.tw-w-\\[1px\\] {
  width: 1px;
}
.tw-w-\\[200px\\] {
  width: 200px;
}
.tw-w-\\[350px\\] {
  width: 350px;
}
.tw-w-\\[70px\\] {
  width: 70px;
}
.tw-w-auto {
  width: auto;
}
.tw-w-full {
  width: 100%;
}
.tw-min-w-\\[8rem\\] {
  min-width: 8rem;
}
.tw-min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.tw-max-w-64 {
  max-width: 16rem;
}
.tw-max-w-lg {
  max-width: 32rem;
}
.tw-flex-1 {
  flex: 1 1 0%;
}
.tw-flex-shrink-0 {
  flex-shrink: 0;
}
.tw-shrink-0 {
  flex-shrink: 0;
}
.tw-flex-grow {
  flex-grow: 1;
}
.tw-grow {
  flex-grow: 1;
}
.tw-caption-bottom {
  caption-side: bottom;
}
.tw--translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-scale-0 {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.tw-transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes tw-spin {

  to {
    transform: rotate(360deg);
  }
}
.tw-animate-spin {
  animation: tw-spin 1s linear infinite;
}
.tw-cursor-default {
  cursor: default;
}
.tw-cursor-not-allowed {
  cursor: not-allowed;
}
.tw-cursor-pointer {
  cursor: pointer;
}
.tw-touch-none {
  touch-action: none;
}
.tw-select-none {
  user-select: none;
}
.tw-list-disc {
  list-style-type: disc;
}
.tw-columns-2 {
  columns: 2;
}
.tw-auto-rows-max {
  grid-auto-rows: max-content;
}
.tw-grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.tw-grid-cols-\\[25\\%\\,25\\%\\,50\\%\\] {
  grid-template-columns: 25% 25% 50%;
}
.tw-grid-cols-\\[25\\%\\,50\\%\\,25\\%\\] {
  grid-template-columns: 25% 50% 25%;
}
.tw-flex-row {
  flex-direction: row;
}
.tw-flex-col {
  flex-direction: column;
}
.tw-flex-col-reverse {
  flex-direction: column-reverse;
}
.tw-flex-wrap {
  flex-wrap: wrap;
}
.tw-items-start {
  align-items: flex-start;
}
.tw-items-center {
  align-items: center;
}
.tw-items-stretch {
  align-items: stretch;
}
.tw-justify-start {
  justify-content: flex-start;
}
.tw-justify-end {
  justify-content: flex-end;
}
.tw-justify-center {
  justify-content: center;
}
.tw-justify-between {
  justify-content: space-between;
}
.tw-gap-0\\.5 {
  gap: 0.125rem;
}
.tw-gap-1 {
  gap: 0.25rem;
}
.tw-gap-1\\.5 {
  gap: 0.375rem;
}
.tw-gap-2 {
  gap: 0.5rem;
}
.tw-gap-2\\.5 {
  gap: 0.625rem;
}
.tw-gap-3 {
  gap: 0.75rem;
}
.tw-gap-4 {
  gap: 1rem;
}
.tw-gap-6 {
  gap: 1.5rem;
}
.tw-gap-x-4 {
  column-gap: 1rem;
}
.tw-space-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0px * var(--tw-space-x-reverse));
  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.tw-space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.tw-space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.tw-space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.tw-space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.tw-space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.tw-self-stretch {
  align-self: stretch;
}
.tw-overflow-auto {
  overflow: auto;
}
.tw-overflow-hidden {
  overflow: hidden;
}
.tw-overflow-y-auto {
  overflow-y: auto;
}
.tw-overflow-x-hidden {
  overflow-x: hidden;
}
.tw-overflow-y-hidden {
  overflow-y: hidden;
}
.tw-text-ellipsis {
  text-overflow: ellipsis;
}
.tw-whitespace-normal {
  white-space: normal;
}
.tw-whitespace-nowrap {
  white-space: nowrap;
}
.tw-text-nowrap {
  text-wrap: nowrap;
}
.tw-text-balance {
  text-wrap: balance;
}
.tw-break-words {
  overflow-wrap: break-word;
}
.tw-rounded-full {
  border-radius: 9999px;
}
.tw-rounded-lg {
  border-radius: var(--radius);
}
.tw-rounded-md {
  border-radius: calc(var(--radius) - 2px);
}
.tw-rounded-sm {
  border-radius: calc(var(--radius) - 4px);
}
.tw-rounded-s-md {
  border-start-start-radius: calc(var(--radius) - 2px);
  border-end-start-radius: calc(var(--radius) - 2px);
}
.tw-rounded-ee-none {
  border-end-end-radius: 0px;
}
.tw-rounded-se-md {
  border-start-end-radius: calc(var(--radius) - 2px);
}
.tw-rounded-ss-none {
  border-start-start-radius: 0px;
}
.tw-border {
  border-width: 1px;
}
.tw-border-0 {
  border-width: 0px;
}
.tw-border-2 {
  border-width: 2px;
}
.tw-border-b {
  border-bottom-width: 1px;
}
.tw-border-b-0 {
  border-bottom-width: 0px;
}
.tw-border-e {
  border-inline-end-width: 1px;
}
.tw-border-l {
  border-left-width: 1px;
}
.tw-border-l-2 {
  border-left-width: 2px;
}
.tw-border-r-0 {
  border-right-width: 0px;
}
.tw-border-t {
  border-top-width: 1px;
}
.tw-border-t-0 {
  border-top-width: 0px;
}
.tw-border-solid {
  border-style: solid;
}
.tw-border-dashed {
  border-style: dashed;
}
.tw-border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}
.tw-border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}
.tw-border-destructive\\/50 {
  border-color: hsl(var(--destructive) / 0.5);
}
.tw-border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.tw-border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}
.tw-border-input {
  border-color: hsl(var(--input));
}
.tw-border-primary {
  border-color: hsl(var(--primary));
}
.tw-border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity));
}
.tw-border-transparent {
  border-color: transparent;
}
.tw-border-l-indigo-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(199 210 254 / var(--tw-border-opacity));
}
.tw-border-l-purple-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(233 213 255 / var(--tw-border-opacity));
}
.tw-border-l-red-200 {
  --tw-border-opacity: 1;
  border-left-color: rgb(254 202 202 / var(--tw-border-opacity));
}
.tw-bg-accent {
  background-color: hsl(var(--accent));
}
.tw-bg-accent-foreground {
  background-color: hsl(var(--accent-foreground));
}
.tw-bg-amber-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity));
}
.tw-bg-amber-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 230 138 / var(--tw-bg-opacity));
}
.tw-bg-amber-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 251 235 / var(--tw-bg-opacity));
}
.tw-bg-background {
  background-color: hsl(var(--background));
}
.tw-bg-black\\/80 {
  background-color: rgb(0 0 0 / 0.8);
}
.tw-bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}
.tw-bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}
.tw-bg-border {
  background-color: hsl(var(--border));
}
.tw-bg-card {
  background-color: hsl(var(--card));
}
.tw-bg-card-foreground {
  background-color: hsl(var(--card-foreground));
}
.tw-bg-destructive {
  background-color: hsl(var(--destructive));
}
.tw-bg-destructive-foreground {
  background-color: hsl(var(--destructive-foreground));
}
.tw-bg-foreground {
  background-color: hsl(var(--foreground));
}
.tw-bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.tw-bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
.tw-bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}
.tw-bg-input {
  background-color: hsl(var(--input));
}
.tw-bg-muted {
  background-color: hsl(var(--muted));
}
.tw-bg-muted-foreground {
  background-color: hsl(var(--muted-foreground));
}
.tw-bg-muted\\/40 {
  background-color: hsl(var(--muted) / 0.4);
}
.tw-bg-muted\\/50 {
  background-color: hsl(var(--muted) / 0.5);
}
.tw-bg-neutral-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}
.tw-bg-popover {
  background-color: hsl(var(--popover));
}
.tw-bg-popover-foreground {
  background-color: hsl(var(--popover-foreground));
}
.tw-bg-primary {
  background-color: hsl(var(--primary));
}
.tw-bg-primary-foreground {
  background-color: hsl(var(--primary-foreground));
}
.tw-bg-ring {
  background-color: hsl(var(--ring));
}
.tw-bg-secondary {
  background-color: hsl(var(--secondary));
}
.tw-bg-secondary-foreground {
  background-color: hsl(var(--secondary-foreground));
}
.tw-bg-transparent {
  background-color: transparent;
}
.tw-bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.tw-fill-current {
  fill: currentColor;
}
.tw-p-0 {
  padding: 0px;
}
.tw-p-1 {
  padding: 0.25rem;
}
.tw-p-2 {
  padding: 0.5rem;
}
.tw-p-4 {
  padding: 1rem;
}
.tw-p-6 {
  padding: 1.5rem;
}
.tw-p-8 {
  padding: 2rem;
}
.tw-p-\\[1px\\] {
  padding: 1px;
}
.tw-px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.tw-px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.tw-px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.tw-px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.tw-px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.tw-px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.tw-px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.tw-px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}
.tw-px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.tw-py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.tw-py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.tw-py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.tw-py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.tw-py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.tw-py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.tw-pb-2 {
  padding-bottom: 0.5rem;
}
.tw-pb-3 {
  padding-bottom: 0.75rem;
}
.tw-pb-4 {
  padding-bottom: 1rem;
}
.tw-pe-2 {
  padding-inline-end: 0.5rem;
}
.tw-pl-4 {
  padding-left: 1rem;
}
.tw-pl-5 {
  padding-left: 1.25rem;
}
.tw-pl-8 {
  padding-left: 2rem;
}
.tw-pr-2 {
  padding-right: 0.5rem;
}
.tw-pr-3 {
  padding-right: 0.75rem;
}
.tw-pr-4 {
  padding-right: 1rem;
}
.tw-ps-12 {
  padding-inline-start: 3rem;
}
.tw-ps-4 {
  padding-inline-start: 1rem;
}
.tw-ps-8 {
  padding-inline-start: 2rem;
}
.tw-pt-0 {
  padding-top: 0px;
}
.tw-pt-3 {
  padding-top: 0.75rem;
}
.tw-pt-4 {
  padding-top: 1rem;
}
.tw-text-center {
  text-align: center;
}
.tw-text-right {
  text-align: right;
}
.tw-text-start {
  text-align: start;
}
.tw-text-end {
  text-align: end;
}
.tw-align-middle {
  vertical-align: middle;
}
.tw-text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.tw-text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.tw-text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.tw-text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.tw-text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.tw-text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.tw-font-bold {
  font-weight: 700;
}
.tw-font-medium {
  font-weight: 500;
}
.tw-font-normal {
  font-weight: 400;
}
.tw-font-semibold {
  font-weight: 600;
}
.tw-uppercase {
  text-transform: uppercase;
}
.tw-capitalize {
  text-transform: capitalize;
}
.tw-not-italic {
  font-style: normal;
}
.tw-tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.tw-leading-9 {
  line-height: 2.25rem;
}
.tw-leading-none {
  line-height: 1;
}
.tw-leading-relaxed {
  line-height: 1.625;
}
.tw-tracking-tight {
  letter-spacing: -0.025em;
}
.tw-tracking-widest {
  letter-spacing: 0.1em;
}
.tw-text-accent-foreground {
  color: hsl(var(--accent-foreground));
}
.tw-text-amber-800 {
  --tw-text-opacity: 1;
  color: rgb(146 64 14 / var(--tw-text-opacity));
}
.tw-text-amber-900 {
  --tw-text-opacity: 1;
  color: rgb(120 53 15 / var(--tw-text-opacity));
}
.tw-text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.tw-text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.tw-text-card-foreground {
  color: hsl(var(--card-foreground));
}
.tw-text-current {
  color: currentColor;
}
.tw-text-destructive {
  color: hsl(var(--destructive));
}
.tw-text-destructive-foreground {
  color: hsl(var(--destructive-foreground));
}
.tw-text-foreground {
  color: hsl(var(--foreground));
}
.tw-text-foreground\\/80 {
  color: hsl(var(--foreground) / 0.8);
}
.tw-text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.tw-text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.tw-text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.tw-text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.tw-text-inherit {
  color: inherit;
}
.tw-text-muted-foreground {
  color: hsl(var(--muted-foreground));
}
.tw-text-popover-foreground {
  color: hsl(var(--popover-foreground));
}
.tw-text-primary {
  color: hsl(var(--primary));
}
.tw-text-primary-foreground {
  color: hsl(var(--primary-foreground));
}
.tw-text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.tw-text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}
.tw-text-secondary-foreground {
  color: hsl(var(--secondary-foreground));
}
.tw-text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}
.tw-text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.tw-text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(113 63 18 / var(--tw-text-opacity));
}
.tw-underline {
  text-decoration-line: underline;
}
.tw-underline-offset-4 {
  text-underline-offset: 4px;
}
.tw-opacity-0 {
  opacity: 0;
}
.tw-opacity-50 {
  opacity: 0.5;
}
.tw-opacity-60 {
  opacity: 0.6;
}
.tw-opacity-70 {
  opacity: 0.7;
}
.tw-shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.tw-outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.tw-ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.tw-ring-offset-background {
  --tw-ring-offset-color: hsl(var(--background));
}
.tw-transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.tw-duration-200 {
  transition-duration: 200ms;
}
.tw-duration-300 {
  transition-duration: 300ms;
}
.tw-ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.tw-animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.tw-fade-in-0 {
  --tw-enter-opacity: 0;
}
.tw-zoom-in-95 {
  --tw-enter-scale: .95;
}
.tw-duration-200 {
  animation-duration: 200ms;
}
.tw-duration-300 {
  animation-duration: 300ms;
}
.tw-ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* #region shared with https://github.com/paranext/paranext-extension-template/blob/main/tailwind.css */

/* #endregion */

.\\*\\:tw-m-4 > * {
  margin: 1rem;
}

.file\\:tw-border-0::file-selector-button {
  border-width: 0px;
}

.file\\:tw-bg-transparent::file-selector-button {
  background-color: transparent;
}

.file\\:tw-text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.file\\:tw-font-medium::file-selector-button {
  font-weight: 500;
}

.file\\:tw-text-foreground::file-selector-button {
  color: hsl(var(--foreground));
}

.placeholder\\:tw-text-muted-foreground::placeholder {
  color: hsl(var(--muted-foreground));
}

.hover\\:tw-border-blue-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
}

.hover\\:tw-bg-accent:hover {
  background-color: hsl(var(--accent));
}

.hover\\:tw-bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.hover\\:tw-bg-destructive\\/90:hover {
  background-color: hsl(var(--destructive) / 0.9);
}

.hover\\:tw-bg-gray-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}

.hover\\:tw-bg-muted:hover {
  background-color: hsl(var(--muted));
}

.hover\\:tw-bg-muted\\/50:hover {
  background-color: hsl(var(--muted) / 0.5);
}

.hover\\:tw-bg-primary\\/90:hover {
  background-color: hsl(var(--primary) / 0.9);
}

.hover\\:tw-bg-secondary\\/80:hover {
  background-color: hsl(var(--secondary) / 0.8);
}

.hover\\:tw-bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.hover\\:tw-text-accent-foreground:hover {
  color: hsl(var(--accent-foreground));
}

.hover\\:tw-text-blue-600:hover {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

.hover\\:tw-text-foreground:hover {
  color: hsl(var(--foreground));
}

.hover\\:tw-text-muted-foreground:hover {
  color: hsl(var(--muted-foreground));
}

.hover\\:tw-text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\\:tw-underline:hover {
  text-decoration-line: underline;
}

.hover\\:tw-opacity-100:hover {
  opacity: 1;
}

.focus\\:tw-bg-accent:focus {
  background-color: hsl(var(--accent));
}

.focus\\:tw-text-accent-foreground:focus {
  color: hsl(var(--accent-foreground));
}

.focus\\:tw-outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:tw-ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:tw-ring-ring:focus {
  --tw-ring-color: hsl(var(--ring));
}

.focus\\:tw-ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:tw-outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:tw-ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:tw-ring-\\[color\\:hsl\\(2400o2c 5\\%0o2c 64\\.9\\%\\)\\]:focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: hsl(240 5% 64.9% / var(--tw-ring-opacity));
}

.focus-visible\\:tw-ring-ring:focus-visible {
  --tw-ring-color: hsl(var(--ring));
}

.focus-visible\\:tw-ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:tw-ring-offset-background:focus-visible {
  --tw-ring-offset-color: hsl(var(--background));
}

.disabled\\:tw-pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\\:tw-cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:tw-opacity-50:disabled {
  opacity: 0.5;
}

.tw-group:hover .group-hover\\:tw-opacity-100 {
  opacity: 1;
}

.tw-peer:disabled ~ .peer-disabled\\:tw-cursor-not-allowed {
  cursor: not-allowed;
}

.tw-peer:disabled ~ .peer-disabled\\:tw-opacity-70 {
  opacity: 0.7;
}

.data-\\[disabled\\=true\\]\\:tw-pointer-events-none[data-disabled="true"] {
  pointer-events: none;
}

.data-\\[disabled\\]\\:tw-pointer-events-none[data-disabled] {
  pointer-events: none;
}

.data-\\[side\\=bottom\\]\\:tw-translate-y-1[data-side="bottom"] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=left\\]\\:tw--translate-x-1[data-side="left"] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=right\\]\\:tw-translate-x-1[data-side="right"] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=top\\]\\:tw--translate-y-1[data-side="top"] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=checked\\]\\:tw-translate-x-5[data-state="checked"] {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=unchecked\\]\\:tw-translate-x-0[data-state="unchecked"] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[highlighted\\]\\:tw-bg-amber-100[data-highlighted] {
  --tw-bg-opacity: 1;
  background-color: rgb(254 243 199 / var(--tw-bg-opacity));
}

.data-\\[selected\\=true\\]\\:tw-bg-accent[data-selected="true"] {
  background-color: hsl(var(--accent));
}

.data-\\[state\\=active\\]\\:tw-bg-background[data-state="active"] {
  background-color: hsl(var(--background));
}

.data-\\[state\\=checked\\]\\:tw-bg-primary[data-state="checked"] {
  background-color: hsl(var(--primary));
}

.data-\\[state\\=on\\]\\:tw-bg-accent[data-state="on"] {
  background-color: hsl(var(--accent));
}

.data-\\[state\\=open\\]\\:tw-bg-accent[data-state="open"] {
  background-color: hsl(var(--accent));
}

.data-\\[state\\=selected\\]\\:tw-bg-muted[data-state="selected"] {
  background-color: hsl(var(--muted));
}

.data-\\[state\\=unchecked\\]\\:tw-bg-input[data-state="unchecked"] {
  background-color: hsl(var(--input));
}

.data-\\[selected\\=true\\]\\:tw-text-accent-foreground[data-selected="true"] {
  color: hsl(var(--accent-foreground));
}

.data-\\[state\\=active\\]\\:tw-text-foreground[data-state="active"] {
  color: hsl(var(--foreground));
}

.data-\\[state\\=checked\\]\\:tw-text-primary-foreground[data-state="checked"] {
  color: hsl(var(--primary-foreground));
}

.data-\\[state\\=on\\]\\:tw-text-accent-foreground[data-state="on"] {
  color: hsl(var(--accent-foreground));
}

.data-\\[state\\=open\\]\\:tw-text-muted-foreground[data-state="open"] {
  color: hsl(var(--muted-foreground));
}

.data-\\[disabled\\=true\\]\\:tw-opacity-50[data-disabled="true"] {
  opacity: 0.5;
}

.data-\\[disabled\\]\\:tw-opacity-50[data-disabled] {
  opacity: 0.5;
}

.data-\\[state\\=active\\]\\:tw-shadow-sm[data-state="active"] {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.data-\\[state\\=open\\]\\:tw-animate-in[data-state="open"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:tw-animate-out[data-state="closed"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:tw-fade-out-0[data-state="closed"] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=open\\]\\:tw-fade-in-0[data-state="open"] {
  --tw-enter-opacity: 0;
}

.data-\\[state\\=closed\\]\\:tw-zoom-out-95[data-state="closed"] {
  --tw-exit-scale: .95;
}

.data-\\[state\\=open\\]\\:tw-zoom-in-95[data-state="open"] {
  --tw-enter-scale: .95;
}

.data-\\[side\\=bottom\\]\\:tw-slide-in-from-top-2[data-side="bottom"] {
  --tw-enter-translate-y: -0.5rem;
}

.data-\\[side\\=left\\]\\:tw-slide-in-from-right-2[data-side="left"] {
  --tw-enter-translate-x: 0.5rem;
}

.data-\\[side\\=right\\]\\:tw-slide-in-from-left-2[data-side="right"] {
  --tw-enter-translate-x: -0.5rem;
}

.data-\\[side\\=top\\]\\:tw-slide-in-from-bottom-2[data-side="top"] {
  --tw-enter-translate-y: 0.5rem;
}

.data-\\[state\\=closed\\]\\:tw-slide-out-to-left-1\\/2[data-state="closed"] {
  --tw-exit-translate-x: -50%;
}

.data-\\[state\\=closed\\]\\:tw-slide-out-to-top-\\[48\\%\\][data-state="closed"] {
  --tw-exit-translate-y: -48%;
}

.data-\\[state\\=open\\]\\:tw-slide-in-from-left-1\\/2[data-state="open"] {
  --tw-enter-translate-x: -50%;
}

.data-\\[state\\=open\\]\\:tw-slide-in-from-top-\\[48\\%\\][data-state="open"] {
  --tw-enter-translate-y: -48%;
}

@media (min-width: 640px) {

  .sm\\:tw-not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .sm\\:tw-static {
    position: static;
  }

  .sm\\:tw-col-span-2 {
    grid-column: span 2 / span 2;
  }

  .sm\\:tw-flex {
    display: flex;
  }

  .sm\\:tw-table-cell {
    display: table-cell;
  }

  .sm\\:tw-hidden {
    display: none;
  }

  .sm\\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:tw-flex-row {
    flex-direction: row;
  }

  .sm\\:tw-justify-end {
    justify-content: flex-end;
  }

  .sm\\:tw-gap-4 {
    gap: 1rem;
  }

  .sm\\:tw-space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:tw-rounded-lg {
    border-radius: var(--radius);
  }

  .sm\\:tw-border-0 {
    border-width: 0px;
  }

  .sm\\:tw-bg-transparent {
    background-color: transparent;
  }

  .sm\\:tw-px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:tw-py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .sm\\:tw-py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:tw-py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .sm\\:tw-pl-14 {
    padding-left: 3.5rem;
  }

  .sm\\:tw-text-left {
    text-align: left;
  }
}

@media (min-width: 768px) {

  .md\\:tw-inline {
    display: inline;
  }

  .md\\:tw-flex {
    display: flex;
  }

  .md\\:tw-table-cell {
    display: table-cell;
  }

  .md\\:tw-h-8 {
    height: 2rem;
  }

  .md\\:tw-w-8 {
    width: 2rem;
  }

  .md\\:tw-w-\\[200px\\] {
    width: 200px;
  }

  .md\\:tw-grow-0 {
    flex-grow: 0;
  }

  .md\\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:tw-gap-8 {
    gap: 2rem;
  }

  .md\\:tw-text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

@media (min-width: 1024px) {

  .lg\\:tw-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .lg\\:tw-col-span-2 {
    grid-column: span 2 / span 2;
  }

  .lg\\:tw-flex {
    display: flex;
  }

  .lg\\:tw-w-\\[336px\\] {
    width: 336px;
  }

  .lg\\:tw-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:tw-space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }
}

@media (min-width: 1280px) {

  .xl\\:tw-not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .xl\\:tw-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .xl\\:tw-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .xl\\:tw-whitespace-nowrap {
    white-space: nowrap;
  }
}

@media (prefers-color-scheme: dark) {

  .dark\\:tw--rotate-90 {
    --tw-rotate: -90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-rotate-0 {
    --tw-rotate: 0deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-scale-0 {
    --tw-scale-x: 0;
    --tw-scale-y: 0;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .dark\\:tw-border-destructive {
    border-color: hsl(var(--destructive));
  }
}

.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:tw-pe-0:has([role=checkbox]) {
  padding-inline-end: 0px;
}

.\\[\\&\\>span\\]\\:tw-line-clamp-1>span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.\\[\\&\\>svg\\+div\\]\\:tw-translate-y-\\[-3px\\]>svg+div {
  --tw-translate-y: -3px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&\\>svg\\]\\:tw-absolute>svg {
  position: absolute;
}

.\\[\\&\\>svg\\]\\:tw-left-4>svg {
  left: 1rem;
}

.\\[\\&\\>svg\\]\\:tw-top-4>svg {
  top: 1rem;
}

.\\[\\&\\>svg\\]\\:tw-text-destructive>svg {
  color: hsl(var(--destructive));
}

.\\[\\&\\>svg\\]\\:tw-text-foreground>svg {
  color: hsl(var(--foreground));
}

.\\[\\&\\>svg\\~\\*\\]\\:tw-pl-7>svg~* {
  padding-left: 1.75rem;
}

.\\[\\&\\>tr\\]\\:last\\:tw-border-b-0:last-child>tr {
  border-bottom-width: 0px;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-px-2 [cmdk-group-heading] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-py-1\\.5 [cmdk-group-heading] {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-text-xs [cmdk-group-heading] {
  font-size: 0.75rem;
  line-height: 1rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-font-medium [cmdk-group-heading] {
  font-weight: 500;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:tw-text-muted-foreground [cmdk-group-heading] {
  color: hsl(var(--muted-foreground));
}

.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:tw-pt-0 [cmdk-group]:not([hidden]) ~[cmdk-group] {
  padding-top: 0px;
}

.\\[\\&_\\[cmdk-group\\]\\]\\:tw-px-2 [cmdk-group] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:tw-h-5 [cmdk-input-wrapper] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:tw-w-5 [cmdk-input-wrapper] svg {
  width: 1.25rem;
}

.\\[\\&_\\[cmdk-input\\]\\]\\:tw-h-12 [cmdk-input] {
  height: 3rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:tw-px-2 [cmdk-item] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:tw-py-3 [cmdk-item] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:tw-h-5 [cmdk-item] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:tw-w-5 [cmdk-item] svg {
  width: 1.25rem;
}

.\\[\\&_p\\]\\:tw-leading-relaxed p {
  line-height: 1.625;
}

.\\[\\&_tr\\:last-child\\]\\:tw-border-0 tr:last-child {
  border-width: 0px;
}

.\\[\\&_tr\\]\\:tw-border-b tr {
  border-bottom-width: 1px;
}
.papi-icon-button {
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
}

.papi-icon-button.primary {
  background-color: #1ea7fd;
  color: white;
}

.papi-icon-button.secondary {
  background-color: transparent;
  color: #333;
}

.papi-icon-button.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-icon-button.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-menu-item {
  background-color: transparent;
}

.papi-menu-icon-trailing {
  margin-left: 10px;
  place-content: flex-end;
}

.papi-menu-item img {
  max-width: 24px;
  max-height: 24px;
}
.papi-multi-column-menu {
  background-color: rgb(222, 222, 222);
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  padding-right: 3px;
}

.papi-menu-column {
  font-size: 11pt;
  font-weight: 600;
  padding-bottom: 2px;
}

.papi-menu-column ul {
  padding-top: 0;
}

.papi-menu-column-header {
  background-color: rgb(181, 181, 181);
  padding-left: 24px;
  margin-top: 0;
  margin-bottom: 0;
}

.papi-multi-column-menu.paratext {
  background-color: rgb(76, 106, 76);
  color: rgb(214, 255, 152);
}

.papi-multi-column-menu.paratext.bright {
  color: rgb(76, 106, 76);
  background-color: rgb(214, 255, 152);
}
.banded-row:hover {
  cursor: pointer;
}

.banded-row[data-state='selected']:hover {
  cursor: default;
}
.papi-menu-drawer-paper {
  height: fit-content !important;
  position: absolute !important;
}

.papi-toolbar-children {
  padding: 10px;
  display: flex;
  gap: 8px;
}
`,"top");
//# sourceMappingURL=index.cjs.map
