"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),v=require("react"),te=require("lucide-react"),ot=require("clsx"),Wi=require("tailwind-merge"),Gs=require("@radix-ui/react-dropdown-menu"),W=require("platform-bible-utils"),Ki=require("@radix-ui/react-slot"),Qn=require("class-variance-authority"),Ji=require("@radix-ui/react-label"),Zi=require("@radix-ui/react-radio-group"),Qi=require("@radix-ui/react-popover"),je=require("cmdk"),el=require("@radix-ui/react-dialog"),Ne=require("@tanstack/react-table"),tl=require("@radix-ui/react-select"),nl=require("@radix-ui/react-checkbox"),rl=require("@radix-ui/react-toggle-group"),ol=require("@radix-ui/react-toggle"),sl=require("@radix-ui/react-tabs"),al=require("@radix-ui/react-separator"),Ar=require("@mui/styled-engine"),Ie=require("@mui/material"),sn=require("react-dom"),Us=require("sonner"),il=require("@radix-ui/react-slider"),ll=require("@radix-ui/react-switch"),cl=require("markdown-to-jsx");function ke(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const M=ke(v),pe=ke(Gs),qs=ke(Ji),hn=ke(Zi),gn=ke(Qi),Xe=ke(el),ge=ke(tl),Br=ke(nl),er=ke(rl),Hs=ke(ol),Oe=ke(sl),Xs=ke(al),dl=ke(sn),an=ke(il),Vr=ke(ll);const ul=Wi.extendTailwindMerge({prefix:"tw-"});function S(...e){return ul(ot.clsx(e))}const qt=v.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:S("pr-twp tw-flex tw-h-10 tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium file:tw-text-foreground placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),ref:r,...n}));qt.displayName="Input";const pl=v.forwardRef(({handleSearch:e,handleKeyDown:t,handleOnClick:n,handleSubmit:r,...o},s)=>a.jsxs("div",{className:"tw-relative",children:[a.jsx(qt,{...o,type:"text",className:"tw-box-border tw-gap-2.5 tw-rounded-lg tw-border tw-border-solid tw-bg-background tw-py-2 tw-pl-4 tw-pr-3 tw-font-medium tw-shadow-none tw-outline-none",onChange:i=>e(i.target.value),onKeyDown:i=>{i.key==="Enter"&&r(),t(i)},onClick:n,ref:s}),a.jsx(te.History,{className:"tw-absolute tw-right-3 tw-top-1/2 tw-h-4 tw-w-4 tw--translate-y-1/2 tw-transform tw-cursor-pointer tw-text-muted-foreground",onClick:()=>{console.log("back in history")}})]}));var wl=Object.defineProperty,fl=(e,t,n)=>t in e?wl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t,n)=>fl(e,typeof t!="symbol"?t+"":t,n);const gt=["GEN","EXO","LEV","NUM","DEU","JOS","JDG","RUT","1SA","2SA","1KI","2KI","1CH","2CH","EZR","NEH","EST","JOB","PSA","PRO","ECC","SNG","ISA","JER","LAM","EZK","DAN","HOS","JOL","AMO","OBA","JON","MIC","NAM","HAB","ZEP","HAG","ZEC","MAL","MAT","MRK","LUK","JHN","ACT","ROM","1CO","2CO","GAL","EPH","PHP","COL","1TH","2TH","1TI","2TI","TIT","PHM","HEB","JAS","1PE","2PE","1JN","2JN","3JN","JUD","REV","TOB","JDT","ESG","WIS","SIR","BAR","LJE","S3Y","SUS","BEL","1MA","2MA","3MA","4MA","1ES","2ES","MAN","PS2","ODA","PSS","JSA","JDB","TBS","SST","DNT","BLT","XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","3ES","EZA","5EZ","6EZ","INT","CNC","GLO","TDX","NDX","DAG","PS3","2BA","LBA","JUB","ENO","1MQ","2MQ","3MQ","REP","4BA","LAO"],Jr=["XXA","XXB","XXC","XXD","XXE","XXF","XXG","FRT","BAK","OTH","INT","CNC","GLO","TDX","NDX"],Ys=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther (Hebrew)","Job","Psalms","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel (Hebrew)","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation","Tobit","Judith","Esther Greek","Wisdom of Solomon","Sirach (Ecclesiasticus)","Baruch","Letter of Jeremiah","Song of 3 Young Men","Susanna","Bel and the Dragon","1 Maccabees","2 Maccabees","3 Maccabees","4 Maccabees","1 Esdras (Greek)","2 Esdras (Latin)","Prayer of Manasseh","Psalm 151","Odes","Psalms of Solomon","Joshua A. *obsolete*","Judges B. *obsolete*","Tobit S. *obsolete*","Susanna Th. *obsolete*","Daniel Th. *obsolete*","Bel Th. *obsolete*","Extra A","Extra B","Extra C","Extra D","Extra E","Extra F","Extra G","Front Matter","Back Matter","Other Matter","3 Ezra *obsolete*","Apocalypse of Ezra","5 Ezra (Latin Prologue)","6 Ezra (Latin Epilogue)","Introduction","Concordance ","Glossary ","Topical Index","Names Index","Daniel Greek","Psalms 152-155","2 Baruch (Apocalypse)","Letter of Baruch","Jubilees","Enoch","1 Meqabyan","2 Meqabyan","3 Meqabyan","Reproof (Proverbs 25-31)","4 Baruch (Rest of Baruch)","Laodiceans"],Wo=El();function Ht(e,t=!0){return t&&(e=e.toUpperCase()),e in Wo?Wo[e]:0}function Zr(e){return Ht(e)>0}function ml(e){const t=typeof e=="string"?Ht(e):e;return t>=40&&t<=66}function hl(e){return(typeof e=="string"?Ht(e):e)<=39}function Ws(e){return e<=66}function gl(e){const t=typeof e=="string"?Ht(e):e;return Zs(t)&&!Ws(t)}function*bl(){for(let e=1;e<=gt.length;e++)yield e}const vl=1,Ks=gt.length;function yl(){return["XXA","XXB","XXC","XXD","XXE","XXF","XXG"]}function Qr(e,t="***"){const n=e-1;return n<0||n>=gt.length?t:gt[n]}function Js(e){return e<=0||e>Ks?"******":Ys[e-1]}function xl(e){return Js(Ht(e))}function Zs(e){const t=typeof e=="number"?Qr(e):e;return Zr(t)&&!Jr.includes(t)}function Nl(e){const t=typeof e=="number"?Qr(e):e;return Zr(t)&&Jr.includes(t)}function kl(e){return Ys[e-1].includes("*obsolete*")}function El(){const e={};for(let t=0;t<gt.length;t++)e[gt[t]]=t+1;return e}const se={allBookIds:gt,nonCanonicalIds:Jr,bookIdToNumber:Ht,isBookIdValid:Zr,isBookNT:ml,isBookOT:hl,isBookOTNT:Ws,isBookDC:gl,allBookNumbers:bl,firstBook:vl,lastBook:Ks,extraBooks:yl,bookNumberToId:Qr,bookNumberToEnglishName:Js,bookIdToEnglishName:xl,isCanonical:Zs,isExtraMaterial:Nl,isObsolete:kl};var qe=(e=>(e[e.Unknown=0]="Unknown",e[e.Original=1]="Original",e[e.Septuagint=2]="Septuagint",e[e.Vulgate=3]="Vulgate",e[e.English=4]="English",e[e.RussianProtestant=5]="RussianProtestant",e[e.RussianOrthodox=6]="RussianOrthodox",e))(qe||{});const Pe=class{constructor(t){if(ne(this,"name"),ne(this,"fullPath"),ne(this,"isPresent"),ne(this,"hasVerseSegments"),ne(this,"isCustomized"),ne(this,"baseVersification"),ne(this,"scriptureBooks"),ne(this,"_type"),t==null)throw new Error("Argument undefined");typeof t=="string"?(this.name=t,this._type=qe[t]):(this._type=t,this.name=qe[t])}get type(){return this._type}equals(t){return!t.type||!this.type?!1:t.type===this.type}};ne(Pe,"Original",new Pe(qe.Original)),ne(Pe,"Septuagint",new Pe(qe.Septuagint)),ne(Pe,"Vulgate",new Pe(qe.Vulgate)),ne(Pe,"English",new Pe(qe.English)),ne(Pe,"RussianProtestant",new Pe(qe.RussianProtestant)),ne(Pe,"RussianOrthodox",new Pe(qe.RussianOrthodox));let ut=Pe;function Ko(e,t){const n=t[0];for(let r=1;r<t.length;r++)e=e.split(t[r]).join(n);return e.split(n)}var Qs=(e=>(e[e.Valid=0]="Valid",e[e.UnknownVersification=1]="UnknownVersification",e[e.OutOfRange=2]="OutOfRange",e[e.VerseOutOfOrder=3]="VerseOutOfOrder",e[e.VerseRepeated=4]="VerseRepeated",e))(Qs||{});const Se=class re{constructor(t,n,r,o){if(ne(this,"firstChapter"),ne(this,"lastChapter"),ne(this,"lastVerse"),ne(this,"hasSegmentsDefined"),ne(this,"text"),ne(this,"BBBCCCVVVS"),ne(this,"longHashCode"),ne(this,"versification"),ne(this,"rtlMark","‏"),ne(this,"_bookNum",0),ne(this,"_chapterNum",0),ne(this,"_verseNum",0),ne(this,"_verse"),r==null&&o==null)if(t!=null&&typeof t=="string"){const s=t,i=n!=null&&n instanceof ut?n:void 0;this.setEmpty(i),this.parse(s)}else if(t!=null&&typeof t=="number"){const s=n!=null&&n instanceof ut?n:void 0;this.setEmpty(s),this._verseNum=t%re.chapterDigitShifter,this._chapterNum=Math.floor(t%re.bookDigitShifter/re.chapterDigitShifter),this._bookNum=Math.floor(t/re.bookDigitShifter)}else if(n==null)if(t!=null&&t instanceof re){const s=t;this._bookNum=s.bookNum,this._chapterNum=s.chapterNum,this._verseNum=s.verseNum,this._verse=s.verse,this.versification=s.versification}else{if(t==null)return;const s=t instanceof ut?t:re.defaultVersification;this.setEmpty(s)}else throw new Error("VerseRef constructor not supported.");else if(t!=null&&n!=null&&r!=null)if(typeof t=="string"&&typeof n=="string"&&typeof r=="string")this.setEmpty(o),this.updateInternal(t,n,r);else if(typeof t=="number"&&typeof n=="number"&&typeof r=="number")this._bookNum=t,this._chapterNum=n,this._verseNum=r,this.versification=o??re.defaultVersification;else throw new Error("VerseRef constructor not supported.");else throw new Error("VerseRef constructor not supported.")}static isVerseParseable(t){return t.length>0&&"0123456789".includes(t[0])&&!t.endsWith(this.verseRangeSeparator)&&!t.endsWith(this.verseSequenceIndicator)}static tryParse(t){let n;try{return n=new re(t),{success:!0,verseRef:n}}catch(r){if(r instanceof en)return n=new re,{success:!1,verseRef:n};throw r}}static getBBBCCCVVV(t,n,r){return t%re.bcvMaxValue*re.bookDigitShifter+(n>=0?n%re.bcvMaxValue*re.chapterDigitShifter:0)+(r>=0?r%re.bcvMaxValue:0)}static fromJSON(t){const{book:n,chapterNum:r,verseNum:o,verse:s,versificationStr:i}=t,l=s||o.toString();let c;return i&&(c=new ut(i)),n?new re(n,r.toString(),l,c):new re}static tryGetVerseNum(t){let n;if(!t)return n=-1,{success:!0,vNum:n};n=0;let r;for(let o=0;o<t.length;o++){if(r=t[o],r<"0"||r>"9")return o===0&&(n=-1),{success:!1,vNum:n};if(n=n*10+ +r-0,n>re.bcvMaxValue)return n=-1,{success:!1,vNum:n}}return{success:!0,vNum:n}}get isDefault(){return this.bookNum===0&&this.chapterNum===0&&this.verseNum===0&&this.versification==null}get hasMultiple(){return this._verse!=null&&(this._verse.includes(re.verseRangeSeparator)||this._verse.includes(re.verseSequenceIndicator))}get book(){return se.bookNumberToId(this.bookNum,"")}set book(t){this.bookNum=se.bookIdToNumber(t)}get chapter(){return this.isDefault||this._chapterNum<0?"":this._chapterNum.toString()}set chapter(t){const n=+t;this._chapterNum=Number.isInteger(n)?n:-1}get verse(){return this._verse!=null?this._verse:this.isDefault||this._verseNum<0?"":this._verseNum.toString()}set verse(t){const{success:n,vNum:r}=re.tryGetVerseNum(t);this._verse=n?void 0:t.replace(this.rtlMark,""),this._verseNum=r,!(this._verseNum>=0)&&({vNum:this._verseNum}=re.tryGetVerseNum(this._verse))}get bookNum(){return this._bookNum}set bookNum(t){if(t<=0||t>se.lastBook)throw new en("BookNum must be greater than zero and less than or equal to last book");this._bookNum=t}get chapterNum(){return this._chapterNum}set chapterNum(t){this.chapterNum=t}get verseNum(){return this._verseNum}set verseNum(t){this._verseNum=t}get versificationStr(){var t;return(t=this.versification)==null?void 0:t.name}set versificationStr(t){this.versification=this.versification!=null?new ut(t):void 0}get valid(){return this.validStatus===0}get validStatus(){return this.validateVerse(re.verseRangeSeparators,re.verseSequenceIndicators)}get BBBCCC(){return re.getBBBCCCVVV(this._bookNum,this._chapterNum,0)}get BBBCCCVVV(){return re.getBBBCCCVVV(this._bookNum,this._chapterNum,this._verseNum)}get isExcluded(){return!1}parse(t){if(t=t.replace(this.rtlMark,""),t.includes("/")){const s=t.split("/");if(t=s[0],s.length>1)try{const i=+s[1].trim();this.versification=new ut(qe[i])}catch{throw new en("Invalid reference : "+t)}}const n=t.trim().split(" ");if(n.length!==2)throw new en("Invalid reference : "+t);const r=n[1].split(":"),o=+r[0];if(r.length!==2||se.bookIdToNumber(n[0])===0||!Number.isInteger(o)||o<0||!re.isVerseParseable(r[1]))throw new en("Invalid reference : "+t);this.updateInternal(n[0],r[0],r[1])}simplify(){this._verse=void 0}clone(){return new re(this)}toString(){const t=this.book;return t===""?"":`${t} ${this.chapter}:${this.verse}`}toJSON(){let t=this.verse;(t===""||t===this.verseNum.toString())&&(t=void 0);const n={book:this.book,chapterNum:this.chapterNum,verseNum:this.verseNum,verse:t,versificationStr:this.versificationStr};return t||delete n.verse,n}equals(t){return t instanceof re?t._bookNum===this._bookNum&&t._chapterNum===this._chapterNum&&t._verseNum===this._verseNum&&t.verse===this.verse&&(t.versification==null&&this.versification==null||t.versification!=null&&this.versification!=null&&t.versification.equals(this.versification)):!1}allVerses(t=!1,n=re.verseRangeSeparators,r=re.verseSequenceIndicators){if(this._verse==null||this.chapterNum<=0)return[this.clone()];const o=[],s=Ko(this._verse,r);for(const i of s.map(l=>Ko(l,n))){const l=this.clone();l.verse=i[0];const c=l.verseNum;if(o.push(l),i.length>1){const d=this.clone();if(d.verse=i[1],!t)for(let u=c+1;u<d.verseNum;u++){const m=new re(this._bookNum,this._chapterNum,u,this.versification);this.isExcluded||o.push(m)}o.push(d)}}return o}validateVerse(t,n){if(!this.verse)return this.internalValid;let r=0;for(const o of this.allVerses(!0,t,n)){const s=o.internalValid;if(s!==0)return s;const i=o.BBBCCCVVV;if(r>i)return 3;if(r===i)return 4;r=i}return 0}get internalValid(){return this.versification==null?1:this._bookNum<=0||this._bookNum>se.lastBook?2:(se.isCanonical(this._bookNum),0)}setEmpty(t=re.defaultVersification){this._bookNum=0,this._chapterNum=-1,this._verse=void 0,this.versification=t}updateInternal(t,n,r){this.bookNum=se.bookIdToNumber(t),this.chapter=n,this.verse=r}};ne(Se,"defaultVersification",ut.English),ne(Se,"verseRangeSeparator","-"),ne(Se,"verseSequenceIndicator",","),ne(Se,"verseRangeSeparators",[Se.verseRangeSeparator]),ne(Se,"verseSequenceIndicators",[Se.verseSequenceIndicator]),ne(Se,"chapterDigitShifter",1e3),ne(Se,"bookDigitShifter",Se.chapterDigitShifter*Se.chapterDigitShifter),ne(Se,"bcvMaxValue",Se.chapterDigitShifter-1),ne(Se,"ValidStatusType",Qs);class en extends Error{}const tr=pe.Root,eo=pe.Trigger,ea=pe.Group,Sl=pe.Portal,Tl=pe.Sub,Cl=pe.RadioGroup,ta=v.forwardRef(({className:e,inset:t,children:n,...r},o)=>a.jsxs(pe.SubTrigger,{ref:o,className:S("tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent data-[state=open]:tw-bg-accent",t&&"tw-pl-8",e),...r,children:[n,a.jsx(te.ChevronRight,{className:"tw-ml-auto tw-h-4 tw-w-4"})]}));ta.displayName=pe.SubTrigger.displayName;const na=v.forwardRef(({className:e,...t},n)=>a.jsx(pe.SubContent,{ref:n,className:S("tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...t}));na.displayName=pe.SubContent.displayName;const Nn=v.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(pe.Portal,{children:a.jsx(pe.Content,{ref:r,sideOffset:t,className:S("pr-twp tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...n})}));Nn.displayName=pe.Content.displayName;const to=v.forwardRef(({className:e,inset:t,...n},r)=>a.jsx(pe.Item,{ref:r,className:S("tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",t&&"tw-pl-8",e),...n}));to.displayName=pe.Item.displayName;const nr=v.forwardRef(({className:e,children:t,checked:n,...r},o)=>a.jsxs(pe.CheckboxItem,{ref:o,className:S("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),checked:n,...r,children:[a.jsx("span",{className:"tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center",children:a.jsx(pe.ItemIndicator,{children:a.jsx(te.Check,{className:"tw-h-4 tw-w-4"})})}),t]}));nr.displayName=pe.CheckboxItem.displayName;const no=v.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(pe.RadioItem,{ref:r,className:S("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),...n,children:[a.jsx("span",{className:"tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center",children:a.jsx(pe.ItemIndicator,{children:a.jsx(te.Circle,{className:"tw-h-2 tw-w-2 tw-fill-current"})})}),t]}));no.displayName=pe.RadioItem.displayName;const Xt=v.forwardRef(({className:e,inset:t,...n},r)=>a.jsx(pe.Label,{ref:r,className:S("tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold",t&&"tw-pl-8",e),...n}));Xt.displayName=pe.Label.displayName;const kn=v.forwardRef(({className:e,...t},n)=>a.jsx(pe.Separator,{ref:n,className:S("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted",e),...t}));kn.displayName=pe.Separator.displayName;function ra({className:e,...t}){return a.jsx("span",{className:S("tw-ml-auto tw-text-xs tw-tracking-widest tw-opacity-60",e),...t})}ra.displayName="DropdownMenuShortcut";const jl=v.forwardRef(({bookId:e,handleSelectBook:t,isSelected:n,handleHighlightBook:r,handleKeyDown:o,bookType:s,children:i},l)=>a.jsxs(to,{ref:l,textValue:e,className:S("tw-mx-1 tw-px-1 tw-font-normal tw-text-foreground/80",{"tw-bg-amber-50 tw-text-yellow-900 data-[highlighted]:tw-bg-amber-100":n}),onSelect:c=>{c.preventDefault(),t()},onKeyDown:c=>{o(c)},onFocus:r,onMouseMove:r,children:[a.jsx("span",{className:S("tw-border-b-0 tw-border-l-2 tw-border-r-0 tw-border-t-0 tw-border-solid tw-px-2",{"tw-font-bold":n,"tw-border-l-red-200":s.toLowerCase()==="ot","tw-border-l-purple-200":s.toLowerCase()==="nt","tw-border-l-indigo-200":s.toLowerCase()==="dc"}),children:se.bookIdToEnglishName(e)}),n&&a.jsx("div",{children:i})]},e));function Ol({handleSelectChapter:e,endChapter:t,activeChapter:n,highlightedChapter:r,handleHighlightedChapter:o}){const s=Array.from({length:t},(l,c)=>c+1),i=v.useCallback(l=>{o(l)},[o]);return a.jsx("div",{className:S("tw-flex tw-flex-wrap tw-items-start tw-justify-start tw-self-stretch"),children:s.map(l=>a.jsx("div",{className:S("tw-box-content tw-flex tw-h-4 tw-w-4 tw-cursor-pointer tw-items-center tw-justify-end tw-rounded-md tw-p-2 tw-text-amber-800",{"tw-font-semibold tw-text-amber-900":l===n,"tw-bg-amber-200":l===r}),onClick:c=>{c.preventDefault(),c.stopPropagation(),e(l)},role:"button",onKeyDown:c=>{c.key==="Enter"&&e(l)},tabIndex:0,onMouseMove:()=>i(l),children:l},l))})}function Rl({handleSort:e,handleLocationHistory:t,handleBookmarks:n}){return a.jsxs(Xt,{className:"tw-flex tw-justify-between",children:[a.jsx("p",{className:"tw-inline-block tw-align-middle",children:"Go To"}),a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(te.ArrowDownWideNarrow,{onClick:e,className:"tw-m-2 tw-h-4 tw-w-4 tw-cursor-pointer tw-gap-2"}),a.jsx(te.Clock,{onClick:t,className:"tw-m-2 tw-h-4 tw-w-4 tw-cursor-pointer tw-gap-2"}),a.jsx(te.Bookmark,{onClick:n,className:"tw-m-2 tw-h-4 tw-w-4 tw-cursor-pointer tw-gap-2"})]})]})}const un=se.allBookIds,Pl={OT:"Old Testament",NT:"New Testament",DC:"Deuterocanon"},Jo=["OT","NT","DC"],_l=32+32+32,Il=[/^(\w+)$/i,/^(\w+)(?:\s(\d+))$/i,/^(\w+)(?:\s(\d+):(\d+))$/i],$l=e=>({OT:un.filter(n=>se.isBookOT(n)),NT:un.filter(n=>se.isBookNT(n)),DC:un.filter(n=>se.isBookDC(n))})[e],tn=e=>W.getChaptersForBook(se.bookIdToNumber(e));function Ml(){return un.map(t=>se.bookIdToEnglishName(t))}function Dl(e){return Ml().includes(e)}function Al(e){const t=e.toLowerCase().replace(/^\w/,n=>n.toUpperCase());if(Dl(t))return un.find(r=>se.bookIdToEnglishName(r)===t)}function Bl({scrRef:e,handleSubmit:t}){const[n,r]=v.useState(""),[o,s]=v.useState(se.bookNumberToId(e.bookNum)),[i,l]=v.useState(e.chapterNum??0),[c,d]=v.useState(se.bookNumberToId(e.bookNum)),[u,m]=v.useState(!1),[w,b]=v.useState(u),y=v.useRef(void 0),f=v.useRef(void 0),h=v.useRef(void 0),E=v.useCallback(N=>$l(N).filter(D=>{const $=se.bookIdToEnglishName(D).toLowerCase(),J=n.replace(/[^a-zA-Z]/g,"").toLowerCase();return $.includes(J)||D.toLowerCase().includes(J)}),[n]),I=N=>{r(N)},j=v.useRef(!1),k=v.useCallback(N=>{if(j.current){j.current=!1;return}m(N)},[]),g=v.useCallback((N,D,$,J)=>{if(l(se.bookNumberToId(e.bookNum)!==N?1:e.chapterNum),D||tn(N)===-1){t({bookNum:se.bookIdToNumber(N),chapterNum:$||1,verseNum:J||1}),m(!1),r("");return}s(o!==N?N:""),m(!D)},[t,e.bookNum,e.chapterNum,o]),P=N=>{N<=0||N>tn(o)||g(o,!0,N)},V=v.useCallback(()=>{Il.forEach(N=>{const D=n.match(N);if(D){const[$,J=void 0,Y=void 0]=D.slice(1),z=Al($);(se.isBookIdValid($)||z)&&g(z??$,!0,J?parseInt(J,10):1,Y?parseInt(Y,10):1)}})},[g,n]),U=v.useCallback(N=>{u?(N.key==="ArrowDown"||N.key==="ArrowUp")&&(typeof h<"u"&&h.current!==null?h.current.focus():typeof f<"u"&&f.current!==null&&f.current.focus(),N.preventDefault()):m(!0)},[u]),T=N=>{const{key:D}=N;D==="ArrowRight"||D==="ArrowLeft"||D==="ArrowDown"||D==="ArrowUp"||D==="Enter"||(y.current.dispatchEvent(new KeyboardEvent("keydown",{key:D})),y.current.focus())},R=N=>{const{key:D}=N;if(c===o){if(D==="Enter"){N.preventDefault(),g(o,!0,i);return}let $=0;if(D==="ArrowRight")if(i<tn(c))$=1;else{N.preventDefault();return}else if(D==="ArrowLeft")if(i>1)$=-1;else{N.preventDefault();return}else D==="ArrowDown"?$=6:D==="ArrowUp"&&($=-6);i+$<=0||i+$>tn(c)?l(0):$!==0&&(l(i+$),N.preventDefault())}};return v.useEffect(()=>{o===c?o===se.bookNumberToId(e.bookNum)?l(e.chapterNum):l(1):l(0)},[c,e.bookNum,e.chapterNum,o]),v.useLayoutEffect(()=>{b(u)},[u]),v.useLayoutEffect(()=>{const N=setTimeout(()=>{if(w&&f.current&&h.current){const $=h.current.offsetTop-_l;f.current.scrollTo({top:$,behavior:"instant"})}},10);return()=>{clearTimeout(N)}},[w]),a.jsx("div",{className:"pr-twp tw-flex",children:a.jsxs(tr,{modal:!1,open:u,onOpenChange:k,children:[a.jsx(eo,{asChild:!0,children:a.jsx(pl,{ref:y,value:n,handleSearch:I,handleKeyDown:U,handleOnClick:()=>{s(se.bookNumberToId(e.bookNum)),d(se.bookNumberToId(e.bookNum)),l(e.chapterNum>0?e.chapterNum:0),m(!0),y.current.focus()},onFocus:()=>{j.current=!0},handleSubmit:V,placeholder:`${se.bookNumberToEnglishName(e.bookNum)} ${e.chapterNum}:${e.verseNum}`})}),a.jsxs(Nn,{className:"tw-m-1 tw-overflow-y-auto tw-p-0 tw-font-normal tw-text-foreground/80",style:{width:"233px",maxHeight:"500px",zIndex:"250"},onKeyDown:T,align:"start",ref:f,children:[a.jsx(Rl,{handleSort:()=>console.log("sorting"),handleLocationHistory:()=>console.log("location history"),handleBookmarks:()=>console.log("bookmarks")}),Jo.map((N,D)=>E(N).length>0&&a.jsxs("div",{children:[a.jsx(Xt,{className:"tw-font-semibold tw-text-foreground/80",children:Pl[N]}),E(N).map($=>a.jsx("div",{children:a.jsx(jl,{bookId:$,handleSelectBook:()=>g($,!1),isSelected:o===$,handleHighlightBook:()=>d($),handleKeyDown:R,bookType:N,ref:J=>{o===$&&(h.current=J)},children:a.jsx(Ol,{handleSelectChapter:P,endChapter:tn($),activeChapter:e.bookNum===se.bookIdToNumber($)?e.chapterNum:0,highlightedChapter:i,handleHighlightedChapter:J=>{l(J)}})})},$)),Jo.length-1!==D?a.jsx(kn,{}):void 0]},N))]})]})})}const oa=Qn.cva("pr-twp tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50",{variants:{variant:{default:"tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary/90",destructive:"tw-bg-destructive tw-text-destructive-foreground hover:tw-bg-destructive/90",outline:"tw-border tw-border-input tw-bg-background hover:tw-bg-accent hover:tw-text-accent-foreground",secondary:"tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/80",ghost:"hover:tw-bg-accent hover:tw-text-accent-foreground",link:"tw-text-primary tw-underline-offset-4 hover:tw-underline"},size:{default:"tw-h-10 tw-px-4 tw-py-2",sm:"tw-h-9 tw-rounded-md tw-px-3",lg:"tw-h-11 tw-rounded-md tw-px-8",icon:"tw-h-10 tw-w-10"}},defaultVariants:{variant:"default",size:"default"}}),he=v.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},s)=>{const i=r?Ki.Slot:"button";return a.jsx(i,{className:S(oa({variant:t,size:n,className:e})),ref:s,...o})});he.displayName="Button";const Vl=Qn.cva("tw-text-sm tw-font-medium tw-leading-none peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"),Ue=v.forwardRef(({className:e,...t},n)=>a.jsx(qs.Root,{ref:n,className:S("pr-twp",Vl(),e),...t}));Ue.displayName=qs.Root.displayName;const ro=v.forwardRef(({className:e,...t},n)=>a.jsx(hn.Root,{className:S("pr-twp tw-grid tw-gap-2",e),...t,ref:n}));ro.displayName=hn.Root.displayName;const qn=v.forwardRef(({className:e,...t},n)=>a.jsx(hn.Item,{ref:n,className:S("pr-twp tw-aspect-square tw-h-4 tw-w-4 tw-rounded-full tw-border tw-border-primary tw-text-primary tw-ring-offset-background focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),...t,children:a.jsx(hn.Indicator,{className:"tw-flex tw-items-center tw-justify-center",children:a.jsx(te.Circle,{className:"tw-h-2.5 tw-w-2.5 tw-fill-current tw-text-current"})})}));qn.displayName=hn.Item.displayName;const Ll=gn.Root,Fl=gn.Trigger,sa=v.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},o)=>a.jsx(gn.Portal,{children:a.jsx(gn.Content,{ref:o,align:t,sideOffset:n,className:S("pr-twp tw-z-50 tw-w-72 tw-rounded-md tw-border tw-bg-popover tw-p-4 tw-text-popover-foreground tw-shadow-md tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",e),...r})}));sa.displayName=gn.Content.displayName;const zl=Xe.Portal,aa=v.forwardRef(({className:e,...t},n)=>a.jsx(Xe.Overlay,{ref:n,className:S("tw-fixed tw-inset-0 tw-z-50 tw-bg-black/80 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0",e),...t}));aa.displayName=Xe.Overlay.displayName;const Gl=v.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(zl,{children:[a.jsx(aa,{}),a.jsxs(Xe.Content,{ref:r,className:S("tw-fixed tw-left-[50%] tw-top-[50%] tw-z-50 tw-grid tw-w-full tw-max-w-lg tw-translate-x-[-50%] tw-translate-y-[-50%] tw-gap-4 tw-border tw-bg-background tw-p-6 tw-shadow-lg tw-duration-200 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[state=closed]:tw-slide-out-to-left-1/2 data-[state=closed]:tw-slide-out-to-top-[48%] data-[state=open]:tw-slide-in-from-left-1/2 data-[state=open]:tw-slide-in-from-top-[48%] sm:tw-rounded-lg",e),...n,children:[t,a.jsxs(Xe.Close,{className:"tw-absolute tw-right-4 tw-top-4 tw-rounded-sm tw-opacity-70 tw-ring-offset-background tw-transition-opacity hover:tw-opacity-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2 disabled:tw-pointer-events-none data-[state=open]:tw-bg-accent data-[state=open]:tw-text-muted-foreground",children:[a.jsx(te.X,{className:"tw-h-4 tw-w-4"}),a.jsx("span",{className:"tw-sr-only",children:"Close"})]})]})]}));Gl.displayName=Xe.Content.displayName;const Ul=v.forwardRef(({className:e,...t},n)=>a.jsx(Xe.Title,{ref:n,className:S("tw-text-lg tw-font-semibold tw-leading-none tw-tracking-tight",e),...t}));Ul.displayName=Xe.Title.displayName;const ql=v.forwardRef(({className:e,...t},n)=>a.jsx(Xe.Description,{ref:n,className:S("tw-text-sm tw-text-muted-foreground",e),...t}));ql.displayName=Xe.Description.displayName;const ia=v.forwardRef(({className:e,...t},n)=>a.jsx(je.Command,{ref:n,className:S("tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-md tw-bg-popover tw-text-popover-foreground",e),...t}));ia.displayName=je.Command.displayName;const la=v.forwardRef(({className:e,...t},n)=>a.jsxs("div",{className:"tw-flex tw-items-center tw-border-b tw-px-3",children:[a.jsx(te.Search,{className:"tw-me-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50"}),a.jsx(je.Command.Input,{ref:n,className:S("tw-flex tw-h-11 tw-w-full tw-rounded-md tw-bg-transparent tw-py-3 tw-text-sm tw-outline-none placeholder:tw-text-muted-foreground disabled:tw-cursor-not-allowed disabled:tw-opacity-50",e),...t})]}));la.displayName=je.Command.Input.displayName;const ca=v.forwardRef(({className:e,...t},n)=>a.jsx(je.Command.List,{ref:n,className:S("tw-max-h-[300px] tw-overflow-y-auto tw-overflow-x-hidden",e),...t}));ca.displayName=je.Command.List.displayName;const da=v.forwardRef((e,t)=>a.jsx(je.Command.Empty,{ref:t,className:"tw-py-6 tw-text-center tw-text-sm",...e}));da.displayName=je.Command.Empty.displayName;const Hl=v.forwardRef(({className:e,...t},n)=>a.jsx(je.Command.Group,{ref:n,className:S("tw-overflow-hidden tw-p-1 tw-text-foreground [&_[cmdk-group-heading]]:tw-px-2 [&_[cmdk-group-heading]]:tw-py-1.5 [&_[cmdk-group-heading]]:tw-text-xs [&_[cmdk-group-heading]]:tw-font-medium [&_[cmdk-group-heading]]:tw-text-muted-foreground",e),...t}));Hl.displayName=je.Command.Group.displayName;const Xl=v.forwardRef(({className:e,...t},n)=>a.jsx(je.Command.Separator,{ref:n,className:S("tw--mx-1 tw-h-px tw-bg-border",e),...t}));Xl.displayName=je.Command.Separator.displayName;const ua=v.forwardRef(({className:e,...t},n)=>a.jsx(je.Command.Item,{ref:n,className:S("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none data-[disabled=true]:tw-pointer-events-none data-[selected=true]:tw-bg-accent data-[selected=true]:tw-text-accent-foreground data-[disabled=true]:tw-opacity-50",e),...t}));ua.displayName=je.Command.Item.displayName;function Yl(e){return typeof e=="string"?e:typeof e=="number"?e.toString():e.label}function Lr({id:e,options:t=[],className:n,value:r,onChange:o=()=>{},getOptionLabel:s=Yl,buttonPlaceholder:i="",textPlaceholder:l="",commandEmptyMessage:c="No option found",buttonVariant:d="outline",dir:u="ltr",isDisabled:m=!1,...w}){const[b,y]=v.useState(!1);return a.jsxs(Ll,{open:b,onOpenChange:y,...w,children:[a.jsx(Fl,{asChild:!0,children:a.jsxs(he,{variant:d,role:"combobox","aria-expanded":b,id:e,className:S("tw-w-[200px] tw-justify-between",n),disabled:m,children:[a.jsx("span",{className:"tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap",children:r?s(r):i}),a.jsx(te.ChevronsUpDown,{className:"tw-ms-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50"})]})}),a.jsx(sa,{className:"tw-w-[200px] tw-p-0",dir:u,children:a.jsxs(ia,{children:[a.jsx(la,{dir:u,placeholder:l,className:"tw-text-inherit"}),a.jsx(da,{children:c}),a.jsx(ca,{children:t.map(f=>a.jsxs(ua,{value:s(f),onSelect:()=>{o(f),y(!1)},children:[a.jsx(te.Check,{className:S("tw-me-2 tw-h-4 tw-w-4",{"tw-opacity-0":!r||s(r)!==s(f)})}),s(f)]},s(f)))})]})})]})}function pa({startChapter:e,endChapter:t,handleSelectStartChapter:n,handleSelectEndChapter:r,isDisabled:o=!1,chapterCount:s}){const i=v.useMemo(()=>Array.from({length:s},(d,u)=>u+1),[s]),l=d=>{n(d),d>t&&r(d)},c=d=>{r(d),d<e&&n(d)};return a.jsxs(a.Fragment,{children:[a.jsx(Ue,{htmlFor:"start-chapters-combobox",children:"Chapters"}),a.jsx(Lr,{isDisabled:o,onChange:l,className:"tw-ml-2 tw-mr-2 tw-w-20",options:i,getOptionLabel:d=>d.toString(),value:e},"start chapter"),a.jsx(Ue,{htmlFor:"end-chapters-combobox",children:"to"}),a.jsx(Lr,{isDisabled:o,onChange:c,className:"tw-ml-2 tw-w-20",options:i,getOptionLabel:d=>d.toString(),value:t},"end chapter")]})}var wa=(e=>(e.CURRENT_BOOK="current book",e.CHOOSE_BOOKS="choose books",e))(wa||{});const Wl=Object.freeze(["%webView_bookSelector_currentBook%","%webView_bookSelector_choose%","%webView_bookSelector_chooseBooks%"]),kr=(e,t)=>e[t]??t;function Kl({handleBookSelectionModeChange:e,currentBookName:t,onSelectBooks:n,selectedBookIds:r,chapterCount:o,endChapter:s,handleSelectEndChapter:i,startChapter:l,handleSelectStartChapter:c,localizedStrings:d}){const u=kr(d,"%webView_bookSelector_currentBook%"),m=kr(d,"%webView_bookSelector_choose%"),w=kr(d,"%webView_bookSelector_chooseBooks%"),[b,y]=v.useState("current book"),f=h=>{y(h),e(h)};return a.jsx(ro,{className:"pr-twp tw-flex",value:b,onValueChange:h=>f(h),children:a.jsxs("div",{className:"tw-flex tw-w-full tw-flex-col tw-gap-4",children:[a.jsxs("div",{className:"tw-grid tw-grid-cols-[25%,25%,50%]",children:[a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(qn,{value:"current book"}),a.jsx(Ue,{className:"tw-ml-1",children:u})]}),a.jsx(Ue,{className:"tw-flex tw-items-center",children:t}),a.jsx("div",{className:"tw-flex tw-items-center tw-justify-end",children:a.jsx(pa,{isDisabled:b==="choose books",handleSelectStartChapter:c,handleSelectEndChapter:i,chapterCount:o,startChapter:l,endChapter:s})})]}),a.jsxs("div",{className:"tw-grid tw-grid-cols-[25%,50%,25%]",children:[a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(qn,{value:"choose books"}),a.jsx(Ue,{className:"tw-ml-1",children:w})]}),a.jsx(Ue,{className:"tw-flex tw-items-center",children:r.map(h=>se.bookIdToEnglishName(h)).join(", ")}),a.jsx(he,{disabled:b==="current book",onClick:()=>n(),children:m})]})]})})}function Jl({table:e}){return a.jsxs(tr,{children:[a.jsx(Gs.DropdownMenuTrigger,{asChild:!0,children:a.jsxs(he,{variant:"outline",size:"sm",className:"tw-ml-auto tw-hidden tw-h-8 lg:tw-flex",children:[a.jsx(te.FilterIcon,{className:"tw-mr-2 tw-h-4 tw-w-4"}),"View"]})}),a.jsxs(Nn,{align:"end",className:"tw-w-[150px]",children:[a.jsx(Xt,{children:"Toggle columns"}),a.jsx(kn,{}),e.getAllColumns().filter(t=>t.getCanHide()).map(t=>a.jsx(nr,{className:"tw-capitalize",checked:t.getIsVisible(),onCheckedChange:n=>t.toggleVisibility(!!n),children:t.id},t.id))]})]})}const Dt=ge.Root,fa=ge.Group,At=ge.Value,bt=v.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(ge.Trigger,{ref:r,className:S("tw-flex tw-h-10 tw-w-full tw-items-center tw-justify-between tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background placeholder:tw-text-muted-foreground focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 [&>span]:tw-line-clamp-1",e),...n,children:[t,a.jsx(ge.Icon,{asChild:!0,children:a.jsx(te.ChevronDown,{className:"tw-h-4 tw-w-4 tw-opacity-50"})})]}));bt.displayName=ge.Trigger.displayName;const oo=v.forwardRef(({className:e,...t},n)=>a.jsx(ge.ScrollUpButton,{ref:n,className:S("tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",e),...t,children:a.jsx(te.ChevronUp,{className:"tw-h-4 tw-w-4"})}));oo.displayName=ge.ScrollUpButton.displayName;const so=v.forwardRef(({className:e,...t},n)=>a.jsx(ge.ScrollDownButton,{ref:n,className:S("tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",e),...t,children:a.jsx(te.ChevronDown,{className:"tw-h-4 tw-w-4"})}));so.displayName=ge.ScrollDownButton.displayName;const vt=v.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>a.jsx(ge.Portal,{children:a.jsxs(ge.Content,{ref:o,className:S("pr-twp tw-relative tw-z-50 tw-max-h-96 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:tw-translate-y-1 data-[side=left]:tw--translate-x-1 data-[side=right]:tw-translate-x-1 data-[side=top]:tw--translate-y-1",e),position:n,...r,children:[a.jsx(oo,{}),a.jsx(ge.Viewport,{className:S("tw-p-1",n==="popper"&&"tw-h-[var(--radix-select-trigger-height)] tw-w-full tw-min-w-[var(--radix-select-trigger-width)]"),children:t}),a.jsx(so,{})]})}));vt.displayName=ge.Content.displayName;const ma=v.forwardRef(({className:e,...t},n)=>a.jsx(ge.Label,{ref:n,className:S("tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-font-semibold",e),...t}));ma.displayName=ge.Label.displayName;const De=v.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(ge.Item,{ref:r,className:S("tw-relative tw-flex tw-w-full tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",e),...n,children:[a.jsx("span",{className:"tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center",children:a.jsx(ge.ItemIndicator,{children:a.jsx(te.Check,{className:"tw-h-4 tw-w-4"})})}),a.jsx(ge.ItemText,{children:t})]}));De.displayName=ge.Item.displayName;const ha=v.forwardRef(({className:e,...t},n)=>a.jsx(ge.Separator,{ref:n,className:S("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted",e),...t}));ha.displayName=ge.Separator.displayName;function Zl({table:e}){return a.jsx("div",{className:"tw-flex tw-items-center tw-justify-between tw-px-2 tw-pb-3 tw-pt-3",children:a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-6 lg:tw-space-x-8",children:[a.jsxs("div",{className:"tw-flex-1 tw-text-sm tw-text-muted-foreground",children:[e.getFilteredSelectedRowModel().rows.length," of"," ",e.getFilteredRowModel().rows.length," row(s) selected"]}),a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-2",children:[a.jsx("p",{className:"tw-text-nowrap tw-text-sm tw-font-medium",children:"Rows per page"}),a.jsxs(Dt,{value:`${e.getState().pagination.pageSize}`,onValueChange:t=>{e.setPageSize(Number(t))},children:[a.jsx(bt,{className:"tw-h-8 tw-w-[70px]",children:a.jsx(At,{placeholder:e.getState().pagination.pageSize})}),a.jsx(vt,{side:"top",children:[10,20,30,40,50].map(t=>a.jsx(De,{value:`${t}`,children:t},t))})]})]}),a.jsxs("div",{className:"tw-flex tw-w-[100px] tw-items-center tw-justify-center tw-text-sm tw-font-medium",children:["Page ",e.getState().pagination.pageIndex+1," of ",e.getPageCount()]}),a.jsxs("div",{className:"tw-flex tw-items-center tw-space-x-2",children:[a.jsxs(he,{variant:"outline",size:"icon",className:"tw-hidden tw-h-8 tw-w-8 tw-p-0 lg:tw-flex",onClick:()=>e.setPageIndex(0),disabled:!e.getCanPreviousPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to first page"}),a.jsx(te.ArrowLeftIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(he,{variant:"outline",size:"icon",className:"tw-h-8 tw-w-8 tw-p-0",onClick:()=>e.previousPage(),disabled:!e.getCanPreviousPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to previous page"}),a.jsx(te.ChevronLeftIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(he,{variant:"outline",size:"icon",className:"tw-h-8 tw-w-8 tw-p-0",onClick:()=>e.nextPage(),disabled:!e.getCanNextPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to next page"}),a.jsx(te.ChevronRightIcon,{className:"tw-h-4 tw-w-4"})]}),a.jsxs(he,{variant:"outline",size:"icon",className:"tw-hidden tw-h-8 tw-w-8 tw-p-0 lg:tw-flex",onClick:()=>e.setPageIndex(e.getPageCount()-1),disabled:!e.getCanNextPage(),children:[a.jsx("span",{className:"tw-sr-only",children:"Go to last page"}),a.jsx(te.ArrowRightIcon,{className:"tw-h-4 tw-w-4"})]})]})]})})}const En=v.forwardRef(({className:e,stickyHeader:t,...n},r)=>a.jsx("div",{className:S("pr-twp tw-relative tw-w-full",{"tw-overflow-auto":!t}),children:a.jsx("table",{ref:r,className:S("tw-w-full tw-caption-bottom tw-text-sm",e),...n})}));En.displayName="Table";const Sn=v.forwardRef(({className:e,stickyHeader:t,...n},r)=>a.jsx("thead",{ref:r,className:S({"tw-sticky tw-top-0 tw-bg-muted":t},"[&_tr]:tw-border-b",e),...n}));Sn.displayName="TableHeader";const Tn=v.forwardRef(({className:e,...t},n)=>a.jsx("tbody",{ref:n,className:S("[&_tr:last-child]:tw-border-0",e),...t}));Tn.displayName="TableBody";const ga=v.forwardRef(({className:e,...t},n)=>a.jsx("tfoot",{ref:n,className:S("tw-border-t tw-bg-muted/50 tw-font-medium [&>tr]:last:tw-border-b-0",e),...t}));ga.displayName="TableFooter";const Ze=v.forwardRef(({className:e,...t},n)=>a.jsx("tr",{ref:n,className:S("tw-border-b tw-transition-colors hover:tw-bg-muted/50 data-[state=selected]:tw-bg-muted",e),...t}));Ze.displayName="TableRow";const Bt=v.forwardRef(({className:e,...t},n)=>a.jsx("th",{ref:n,className:S("tw-h-12 tw-px-4 tw-text-start tw-align-middle tw-font-medium tw-text-muted-foreground [&:has([role=checkbox])]:tw-pe-0",e),...t}));Bt.displayName="TableHead";const yt=v.forwardRef(({className:e,...t},n)=>a.jsx("td",{ref:n,className:S("tw-p-4 tw-align-middle [&:has([role=checkbox])]:tw-pe-0",e),...t}));yt.displayName="TableCell";const ba=v.forwardRef(({className:e,...t},n)=>a.jsx("caption",{ref:n,className:S("tw-mt-4 tw-text-sm tw-text-muted-foreground",e),...t}));ba.displayName="TableCaption";function va({columns:e,data:t,enablePagination:n=!1,showPaginationControls:r=!1,showColumnVisibilityControls:o=!1,stickyHeader:s=!1,onRowClickHandler:i=()=>{}}){var h;const[l,c]=v.useState([]),[d,u]=v.useState([]),[m,w]=v.useState({}),[b,y]=v.useState({}),f=Ne.useReactTable({data:t,columns:e,getCoreRowModel:Ne.getCoreRowModel(),...n&&{getPaginationRowModel:Ne.getPaginationRowModel()},onSortingChange:c,getSortedRowModel:Ne.getSortedRowModel(),onColumnFiltersChange:u,getFilteredRowModel:Ne.getFilteredRowModel(),onColumnVisibilityChange:w,onRowSelectionChange:y,state:{sorting:l,columnFilters:d,columnVisibility:m,rowSelection:b}});return a.jsxs("div",{className:"pr-twp",children:[o&&a.jsx(Jl,{table:f}),a.jsxs(En,{stickyHeader:s,children:[a.jsx(Sn,{stickyHeader:s,children:f.getHeaderGroups().map(E=>a.jsx(Ze,{children:E.headers.map(I=>a.jsx(Bt,{children:I.isPlaceholder?void 0:Ne.flexRender(I.column.columnDef.header,I.getContext())},I.id))},E.id))}),a.jsx(Tn,{children:(h=f.getRowModel().rows)!=null&&h.length?f.getRowModel().rows.map(E=>a.jsx(Ze,{onClick:()=>i(E,f),"data-state":E.getIsSelected()&&"selected",children:E.getVisibleCells().map(I=>a.jsx(yt,{children:Ne.flexRender(I.column.columnDef.cell,I.getContext())},I.id))},E.id)):a.jsx(Ze,{children:a.jsx(yt,{colSpan:e.length,className:"tw-h-24 tw-text-center",children:"No results."})})})]}),n&&a.jsxs("div",{className:"tw-flex tw-items-center tw-justify-end tw-space-x-2 tw-py-4",children:[a.jsx(he,{variant:"outline",size:"sm",onClick:()=>f.previousPage(),disabled:!f.getCanPreviousPage(),children:"Previous"}),a.jsx(he,{variant:"outline",size:"sm",onClick:()=>f.nextPage(),disabled:!f.getCanNextPage(),children:"Next"})]}),n&&r&&a.jsx(Zl,{table:f})]})}function Ql({occurrenceData:e,setScriptureReference:t,localizedStrings:n}){const r=n["%webView_inventory_occurrences_table_header_reference%"],o=n["%webView_inventory_occurrences_table_header_occurrence%"],s=v.useMemo(()=>{const i=[];return e.forEach(l=>{i.some(c=>W.deepEqual(c,l))||i.push(l)}),i},[e]);return a.jsxs(En,{stickyHeader:!0,children:[a.jsx(Sn,{stickyHeader:!0,children:a.jsxs(Ze,{children:[a.jsx(Bt,{children:r}),a.jsx(Bt,{children:o})]})}),a.jsx(Tn,{children:s.length>0&&s.map(i=>a.jsxs(Ze,{onClick:()=>{t(i.reference)},children:[a.jsx(yt,{children:`${se.bookNumberToEnglishName(i.reference.bookNum)} ${i.reference.chapterNum}:${i.reference.verseNum}`}),a.jsx(yt,{children:i.text})]},`${i.reference.bookNum} ${i.reference.chapterNum}:${i.reference.verseNum}-${i.text}`))})]})}const rr=v.forwardRef(({className:e,...t},n)=>a.jsx(Br.Root,{ref:n,className:S("tw-peer pr-twp tw-h-4 tw-w-4 tw-shrink-0 tw-rounded-sm tw-border tw-border-primary tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=checked]:tw-text-primary-foreground",e),...t,children:a.jsx(Br.Indicator,{className:S("tw-flex tw-items-center tw-justify-center tw-text-current"),children:a.jsx(te.Check,{className:"tw-h-4 tw-w-4"})})}));rr.displayName=Br.Root.displayName;const ya=e=>e.split(/(?:\r?\n|\r)|(?=(?:\\(?:v|c|id)))/g),Fr=e=>{const t=/^\\[vc]\s+(\d+)/,n=e.match(t);if(n)return+n[1]},xa=e=>{const t=e.match(/^\\id\s+([A-Za-z]+)/);return t?se.bookIdToNumber(t[1]):0},Na=(e,t,n)=>n.includes(e)?"unapproved":t.includes(e)?"approved":"unknown",ka=Qn.cva("pr-twp tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-colors hover:tw-bg-muted hover:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=on]:tw-bg-accent data-[state=on]:tw-text-accent-foreground",{variants:{variant:{default:"tw-bg-transparent",outline:"tw-border tw-border-input tw-bg-transparent hover:tw-bg-accent hover:tw-text-accent-foreground"},size:{default:"tw-h-10 tw-px-3",sm:"tw-h-9 tw-px-2.5",lg:"tw-h-11 tw-px-5"}},defaultVariants:{variant:"default",size:"default"}}),ec=v.forwardRef(({className:e,variant:t,size:n,...r},o)=>a.jsx(Hs.Root,{ref:o,className:S(ka({variant:t,size:n,className:e})),...r}));ec.displayName=Hs.Root.displayName;const Ea=v.createContext({size:"default",variant:"default"}),ao=v.forwardRef(({className:e,variant:t,size:n,children:r,...o},s)=>a.jsx(er.Root,{ref:s,className:S("pr-twp tw-flex tw-items-center tw-justify-center tw-gap-1",e),...o,children:a.jsx(Ea.Provider,{value:{variant:t,size:n},children:r})}));ao.displayName=er.Root.displayName;const pn=v.forwardRef(({className:e,children:t,variant:n,size:r,...o},s)=>{const i=v.useContext(Ea);return a.jsx(er.Item,{ref:s,className:S(ka({variant:i.variant||n,size:i.size||r}),e),...o,children:t})});pn.displayName=er.Item.displayName;const or=e=>e==="asc"?a.jsx(te.ArrowUpIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}):e==="desc"?a.jsx(te.ArrowDownIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}):a.jsx(te.ArrowUpDownIcon,{className:"tw-ms-2 tw-h-4 tw-w-4"}),tc=e=>({accessorKey:"item",accessorFn:t=>t.items[0],header:({column:t})=>a.jsxs(he,{variant:"ghost",onClick:()=>t.toggleSorting(void 0),children:[e,or(t.getIsSorted())]})}),nc=(e,t)=>({accessorKey:`item${t}`,accessorFn:n=>n.items[t],header:({column:n})=>a.jsxs(he,{variant:"ghost",onClick:()=>n.toggleSorting(void 0),children:[e,or(n.getIsSorted())]})}),rc=e=>({accessorKey:"count",header:({column:t})=>a.jsx("div",{className:"tw-flex tw-justify-end tw-tabular-nums",children:a.jsxs(he,{variant:"ghost",onClick:()=>t.toggleSorting(void 0),children:[e,or(t.getIsSorted())]})}),cell:({row:t})=>a.jsx("div",{className:"tw-flex tw-justify-end",children:t.getValue("count")})}),Er=(e,t,n,r,o,s)=>{let i=[...n];e.forEach(c=>{t==="approved"?i.includes(c)||i.push(c):i=i.filter(d=>d!==c)}),r(i);let l=[...o];e.forEach(c=>{t==="unapproved"?l.includes(c)||l.push(c):l=l.filter(d=>d!==c)}),s(l)},oc=(e,t,n,r,o)=>({accessorKey:"status",header:({column:s})=>a.jsx("div",{className:"tw-flex tw-justify-center",children:a.jsxs(he,{variant:"ghost",onClick:()=>s.toggleSorting(void 0),children:[e,or(s.getIsSorted())]})}),cell:({row:s})=>{const i=s.getValue("status"),l=s.getValue("item");return a.jsxs(ao,{value:i,variant:"outline",type:"single",children:[a.jsx(pn,{onClick:()=>Er([l],"approved",t,n,r,o),value:"approved",children:a.jsx(te.CircleCheckIcon,{})}),a.jsx(pn,{onClick:()=>Er([l],"unapproved",t,n,r,o),value:"unapproved",children:a.jsx(te.CircleXIcon,{})}),a.jsx(pn,{onClick:()=>Er([l],"unknown",t,n,r,o),value:"unknown",children:a.jsx(te.CircleHelpIcon,{})})]})}}),sc=Object.freeze(["%webView_inventory_all%","%webView_inventory_approved%","%webView_inventory_unapproved%","%webView_inventory_unknown%","%webView_inventory_scope_currentBook%","%webView_inventory_scope_chapter%","%webView_inventory_scope_verse%","%webView_inventory_filter_text%","%webView_inventory_show_additional_items%","%webView_inventory_occurrences_table_header_reference%","%webView_inventory_occurrences_table_header_occurrence%"]),ac=(e,t,n)=>{let r=e;return t!=="all"&&(r=r.filter(o=>t==="approved"&&o.status==="approved"||t==="unapproved"&&o.status==="unapproved"||t==="unknown"&&o.status==="unknown")),n!==""&&(r=r.filter(o=>o.items[0].includes(n))),r},ic=(e,t,n,r,o)=>{if(!e)return[];const s=[];let i=t.bookNum,l=t.chapterNum,c=t.verseNum;return ya(e).forEach(u=>{u.startsWith("\\id")&&(i=xa(u),l=0,c=0),u.startsWith("\\c")&&(l=Fr(u),c=0),u.startsWith("\\v")&&(c=Fr(u),l===0&&(l=t.chapterNum));let m=o.exec(u)??void 0;for(;m;){const w=[];m.forEach(h=>w.push(h));const b=m.index,y=s.find(h=>W.deepEqual(h.items,w)),f={reference:{bookNum:i!==void 0?i:-1,chapterNum:l!==void 0?l:-1,verseNum:c!==void 0?c:-1},text:W.substring(u,Math.max(0,b-25),Math.min(b+25,u.length))};if(y)y.count+=1,y.occurrences.push(f);else{const h={items:w,count:1,status:Na(w[0],n,r),occurrences:[f]};s.push(h)}m=o.exec(u)??void 0}}),s},Je=(e,t)=>e[t]??t;function lc({scriptureReference:e,setScriptureReference:t,localizedStrings:n,extractItems:r,additionalItemsLabels:o,approvedItems:s,unapprovedItems:i,text:l,scope:c,onScopeChange:d,columns:u}){const m=Je(n,"%webView_inventory_all%"),w=Je(n,"%webView_inventory_approved%"),b=Je(n,"%webView_inventory_unapproved%"),y=Je(n,"%webView_inventory_unknown%"),f=Je(n,"%webView_inventory_scope_currentBook%"),h=Je(n,"%webView_inventory_scope_chapter%"),E=Je(n,"%webView_inventory_scope_verse%"),I=Je(n,"%webView_inventory_filter_text%"),j=Je(n,"%webView_inventory_show_additional_items%"),[k,g]=v.useState(!1),[P,V]=v.useState("all"),[U,T]=v.useState(""),[R,N]=v.useState([]),D=v.useMemo(()=>l?r instanceof RegExp?ic(l,e,s,i,r):r(l,e,s,i):[],[l,r,e,s,i]),$=v.useMemo(()=>{if(k)return D;const x=[];return D.forEach(C=>{const L=C.items[0],F=x.find(B=>B.items[0]===L);F?(F.count+=C.count,F.occurrences=F.occurrences.concat(C.occurrences)):x.push({items:[L],count:C.count,occurrences:C.occurrences,status:C.status})}),x},[k,D]),J=v.useMemo(()=>ac($,P,U),[$,P,U]),Y=v.useMemo(()=>{var L,F;if(!k)return u;const x=(L=o==null?void 0:o.tableHeaders)==null?void 0:L.length;if(!x)return u;const C=[];for(let B=0;B<x;B++)C.push(nc(((F=o==null?void 0:o.tableHeaders)==null?void 0:F[B])||"Additional Item",B+1));return[...C,...u]},[o==null?void 0:o.tableHeaders,u,k]);v.useEffect(()=>{N([])},[J]);const z=(x,C)=>{C.setRowSelection(()=>{const L={};return L[x.index]=!0,L}),N(x.original.items)},ee=x=>{if(x==="book"||x==="chapter"||x==="verse")d(x);else throw new Error(`Invalid scope value: ${x}`)},ae=x=>{if(x==="all"||x==="approved"||x==="unapproved"||x==="unknown")V(x);else throw new Error(`Invalid status filter value: ${x}`)},oe=v.useMemo(()=>{if($.length===0||R.length===0)return[];const x=$.filter(C=>W.deepEqual(k?C.items:[C.items[0]],R));if(x.length>1)throw new Error("Selected item is not unique");return x[0].occurrences},[R,k,$]);return a.jsxs("div",{className:"pr-twp tw-flex tw-h-full tw-flex-col",children:[a.jsxs("div",{className:"tw-flex tw-items-stretch",children:[a.jsxs(Dt,{onValueChange:x=>ae(x),defaultValue:P,children:[a.jsx(bt,{className:"tw-m-1",children:a.jsx(At,{placeholder:"Select filter"})}),a.jsxs(vt,{children:[a.jsx(De,{value:"all",children:m}),a.jsx(De,{value:"approved",children:w}),a.jsx(De,{value:"unapproved",children:b}),a.jsx(De,{value:"unknown",children:y})]})]}),a.jsxs(Dt,{onValueChange:x=>ee(x),defaultValue:c,children:[a.jsx(bt,{className:"tw-m-1",children:a.jsx(At,{placeholder:"Select scope"})}),a.jsxs(vt,{children:[a.jsx(De,{value:"book",children:f}),a.jsx(De,{value:"chapter",children:h}),a.jsx(De,{value:"verse",children:E})]})]}),a.jsx(qt,{className:"tw-m-1 tw-rounded-md tw-border",placeholder:I,value:U,onChange:x=>{T(x.target.value)}}),o&&a.jsxs("div",{className:"tw-m-1 tw-flex tw-items-center tw-rounded-md tw-border",children:[a.jsx(rr,{className:"tw-m-1",checked:k,onCheckedChange:x=>{N([]),g(x)}}),a.jsx(Ue,{className:"tw-m-1 tw-flex-shrink-0 tw-whitespace-nowrap",children:(o==null?void 0:o.checkboxText)??j})]})]}),a.jsx("div",{className:"tw-m-1 tw-flex-1 tw-overflow-auto tw-rounded-md tw-border",children:a.jsx(va,{columns:Y,data:J,onRowClickHandler:z,stickyHeader:!0})}),oe.length>0&&a.jsx("div",{className:"tw-m-1 tw-flex-1 tw-overflow-auto tw-rounded-md tw-border",children:a.jsx(Ql,{occurrenceData:oe,setScriptureReference:t,localizedStrings:n})})]})}function Sa({onSearch:e,placeholder:t,isFullWidth:n}){const[r,o]=v.useState(""),s=i=>{o(i),e(i)};return a.jsx(qt,{className:S("tw-flex tw-h-10 tw-rounded-md tw-border tw-border-input tw-bg-background tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-[color:hsl(240,5%,64.9%)] focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50",{"tw-w-full":n}),placeholder:t,value:r,onChange:i=>s(i.target.value)})}const io=v.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Root,{orientation:"vertical",ref:n,className:S("tw-flex tw-gap-1 tw-rounded-md tw-text-muted-foreground",e),...t}));io.displayName=Oe.List.displayName;const lo=v.forwardRef(({className:e,...t},n)=>a.jsx(Oe.List,{ref:n,className:S("tw-flex-fit tw-mlk-items-center tw-w-[124px] tw-justify-center tw-rounded-md tw-bg-muted tw-p-1 tw-text-muted-foreground",e),...t}));lo.displayName=Oe.List.displayName;const Ta=v.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Trigger,{ref:n,...t,className:S("overflow-clip tw-inline-flex tw-w-[116px] tw-cursor-pointer tw-items-center tw-justify-center tw-break-words tw-rounded-sm tw-border-0 tw-bg-muted tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-text-inherit tw-ring-offset-background tw-transition-all hover:tw-text-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow-sm",e)})),co=v.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Content,{ref:n,className:S("tw-ms-5 tw-flex-grow tw-text-foreground tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",e),...t}));co.displayName=Oe.Content.displayName;function cc({tabList:e,onSearch:t,searchPlaceholder:n,headerTitle:r,isSearchBarFullWidth:o=!1,direction:s="ltr"}){return a.jsxs("div",{className:"pr-twp",children:[a.jsxs("div",{className:"tw-sticky tw-top-0 tw-space-y-2 tw-pb-2",children:[r?a.jsx("h1",{children:r}):"",a.jsx(Sa,{isFullWidth:o,onSearch:t,placeholder:n})]}),a.jsxs(io,{dir:s,children:[a.jsx(lo,{children:e.map(i=>a.jsx(Ta,{value:i.value,children:i.value},i.key))}),e.map(i=>a.jsx(co,{value:i.value,children:i.content},i.key))]})]})}const rt="scrBook",dc="scrRef",pt="source",uc="details",pc="Scripture Reference",wc="Scripture Book",Ca="Type",fc="Details";function mc(e,t){const n=t??!1;return[{accessorFn:r=>`${se.bookNumberToId(r.start.bookNum)} ${r.start.chapterNum}:${r.start.verseNum}`,id:rt,header:(e==null?void 0:e.scriptureReferenceColumnName)??pc,cell:r=>{const o=r.row.original;return r.row.getIsGrouped()?se.bookNumberToEnglishName(o.start.bookNum):r.row.groupingColumnId===rt?W.formatScrRef(o.start):void 0},getGroupingValue:r=>r.start.bookNum,sortingFn:(r,o)=>W.compareScrRefs(r.original.start,o.original.start),enableGrouping:!0},{accessorFn:r=>W.formatScrRef(r.start),id:dc,header:void 0,cell:r=>{const o=r.row.original;return r.row.getIsGrouped()?void 0:W.formatScrRef(o.start)},sortingFn:(r,o)=>W.compareScrRefs(r.original.start,o.original.start),enableGrouping:!1},{accessorFn:r=>r.source.displayName,id:pt,header:n?(e==null?void 0:e.typeColumnName)??Ca:void 0,cell:r=>n||r.row.getIsGrouped()?r.getValue():void 0,getGroupingValue:r=>r.source.id,sortingFn:(r,o)=>r.original.source.displayName.localeCompare(o.original.source.displayName),enableGrouping:!0},{accessorFn:r=>r.detail,id:uc,header:(e==null?void 0:e.detailsColumnName)??fc,cell:r=>r.getValue(),enableGrouping:!1}]}const hc=e=>{if(!("offset"in e.start))throw new Error("No offset available in range start");if(e.end&&!("offset"in e.end))throw new Error("No offset available in range end");const{offset:t}=e.start;let n=0;return e.end&&({offset:n}=e.end),!e.end||W.compareScrRefs(e.start,e.end)===0?`${W.scrRefToBBBCCCVVV(e.start)}+${t}`:`${W.scrRefToBBBCCCVVV(e.start)}+${t}-${W.scrRefToBBBCCCVVV(e.end)}+${n}`},Zo=e=>`${hc({start:e.start,end:e.end})} ${e.source.displayName} ${e.detail}`;function gc({sources:e,showColumnHeaders:t=!1,showSourceColumn:n=!1,scriptureReferenceColumnName:r,scriptureBookGroupName:o,typeColumnName:s,detailsColumnName:i,onRowSelected:l,direction:c="ltr"}){const[d,u]=v.useState([]),[m,w]=v.useState([{id:rt,desc:!1}]),[b,y]=v.useState({}),f=v.useMemo(()=>e.flatMap(T=>T.data.map(R=>({...R,source:T.source}))),[e]),h=v.useMemo(()=>mc({scriptureReferenceColumnName:r,typeColumnName:s,detailsColumnName:i},n),[r,s,i,n]);v.useEffect(()=>{d.includes(pt)?w([{id:pt,desc:!1},{id:rt,desc:!1}]):w([{id:rt,desc:!1}])},[d]);const E=Ne.useReactTable({data:f,columns:h,state:{grouping:d,sorting:m,rowSelection:b},onGroupingChange:u,onSortingChange:w,onRowSelectionChange:y,getExpandedRowModel:Ne.getExpandedRowModel(),getGroupedRowModel:Ne.getGroupedRowModel(),getCoreRowModel:Ne.getCoreRowModel(),getSortedRowModel:Ne.getSortedRowModel(),getRowId:Zo,autoResetExpanded:!1,enableMultiRowSelection:!1,enableSubRowSelection:!1});v.useEffect(()=>{if(l){const T=E.getSelectedRowModel().rowsById,R=Object.keys(T);if(R.length===1){const N=f.find(D=>Zo(D)===R[0])||void 0;N&&l(N)}}},[b,f,l,E]);const I=o??wc,j=s??Ca,k=[{label:"No Grouping",value:[]},{label:`Group by ${I}`,value:[rt]},{label:`Group by ${j}`,value:[pt]},{label:`Group by ${I} and ${j}`,value:[rt,pt]},{label:`Group by ${j} and ${I}`,value:[pt,rt]}],g=T=>{u(JSON.parse(T))},P=(T,R)=>{!T.getIsGrouped()&&!T.getIsSelected()&&T.getToggleSelectedHandler()(R)},V=(T,R)=>T.getIsGrouped()?"":S("banded-row",R%2===0?"even":"odd"),U=(T,R,N)=>{if(!((T==null?void 0:T.length)===0||R.depth<N.column.getGroupedIndex())){if(R.getIsGrouped())switch(R.depth){case 1:return"tw-ps-4";default:return}switch(R.depth){case 1:return"tw-ps-8";case 2:return"tw-ps-12";default:return}}};return a.jsxs("div",{className:"pr-twp tw-flex tw-h-full tw-w-full tw-flex-col",children:[!t&&a.jsxs(Dt,{value:JSON.stringify(d),onValueChange:T=>{g(T)},children:[a.jsx(bt,{className:"tw-mb-1 tw-mt-2",children:a.jsx(At,{})}),a.jsx(vt,{position:"item-aligned",children:a.jsx(fa,{children:k.map(T=>a.jsx(De,{value:JSON.stringify(T.value),children:T.label},T.label))})})]}),a.jsxs(En,{className:"tw-relative tw-flex tw-flex-col tw-overflow-y-auto tw-p-0",children:[t&&a.jsx(Sn,{children:E.getHeaderGroups().map(T=>a.jsx(Ze,{children:T.headers.filter(R=>R.column.columnDef.header).map(R=>a.jsx(Bt,{colSpan:R.colSpan,className:"top-0 tw-sticky",children:R.isPlaceholder?void 0:a.jsxs("div",{children:[R.column.getCanGroup()?a.jsx(he,{variant:"ghost",title:`Toggle grouping by ${R.column.columnDef.header}`,onClick:R.column.getToggleGroupingHandler(),type:"button",children:R.column.getIsGrouped()?"🛑":"👊 "}):void 0," ",Ne.flexRender(R.column.columnDef.header,R.getContext())]})},R.id))},T.id))}),a.jsx(Tn,{children:E.getRowModel().rows.map((T,R)=>a.jsx(Ze,{"data-state":T.getIsSelected()?"selected":"",className:S(V(T,R)),onClick:N=>P(T,N),children:T.getVisibleCells().map(N=>{if(!(N.getIsPlaceholder()||N.column.columnDef.enableGrouping&&!N.getIsGrouped()&&(N.column.columnDef.id!==pt||!n)))return a.jsx(yt,{className:S(N.column.columnDef.id,"tw-p-[1px]",U(d,T,N)),children:(()=>N.getIsGrouped()?a.jsxs(he,{variant:"link",onClick:T.getToggleExpandedHandler(),type:"button",children:[T.getIsExpanded()&&a.jsx(te.ChevronDown,{}),!T.getIsExpanded()&&(c==="ltr"?a.jsx(te.ChevronRight,{}):a.jsx(te.ChevronLeft,{}))," ",Ne.flexRender(N.column.columnDef.cell,N.getContext())," (",T.subRows.length,")"]}):Ne.flexRender(N.column.columnDef.cell,N.getContext()))()},N.id)})},T.id))})]})]})}const Sr={[W.getLocalizeKeyForScrollGroupId("undefined")]:"Ø",[W.getLocalizeKeyForScrollGroupId(0)]:"A",[W.getLocalizeKeyForScrollGroupId(1)]:"B",[W.getLocalizeKeyForScrollGroupId(2)]:"C",[W.getLocalizeKeyForScrollGroupId(3)]:"D",[W.getLocalizeKeyForScrollGroupId(4)]:"E",[W.getLocalizeKeyForScrollGroupId(5)]:"F",[W.getLocalizeKeyForScrollGroupId(6)]:"G",[W.getLocalizeKeyForScrollGroupId(7)]:"H",[W.getLocalizeKeyForScrollGroupId(8)]:"I",[W.getLocalizeKeyForScrollGroupId(9)]:"J",[W.getLocalizeKeyForScrollGroupId(10)]:"K",[W.getLocalizeKeyForScrollGroupId(11)]:"L",[W.getLocalizeKeyForScrollGroupId(12)]:"M",[W.getLocalizeKeyForScrollGroupId(13)]:"N",[W.getLocalizeKeyForScrollGroupId(14)]:"O",[W.getLocalizeKeyForScrollGroupId(15)]:"P",[W.getLocalizeKeyForScrollGroupId(16)]:"Q",[W.getLocalizeKeyForScrollGroupId(17)]:"R",[W.getLocalizeKeyForScrollGroupId(18)]:"S",[W.getLocalizeKeyForScrollGroupId(19)]:"T",[W.getLocalizeKeyForScrollGroupId(20)]:"U",[W.getLocalizeKeyForScrollGroupId(21)]:"V",[W.getLocalizeKeyForScrollGroupId(22)]:"W",[W.getLocalizeKeyForScrollGroupId(23)]:"X",[W.getLocalizeKeyForScrollGroupId(24)]:"Y",[W.getLocalizeKeyForScrollGroupId(25)]:"Z"};function bc({availableScrollGroupIds:e,scrollGroupId:t,onChangeScrollGroupId:n,localizedStrings:r={}}){const o={...Sr,...Object.fromEntries(Object.entries(r).map(([s,i])=>[s,s===i&&s in Sr?Sr[s]:i]))};return a.jsxs(Dt,{value:`${t}`,onValueChange:s=>n(s==="undefined"?void 0:parseInt(s,10)),children:[a.jsx(bt,{className:"pr-twp tw-w-auto",children:a.jsx(At,{placeholder:o[W.getLocalizeKeyForScrollGroupId(t)]??t})}),a.jsx(vt,{style:{zIndex:250},children:e.map(s=>a.jsx(De,{value:`${s}`,children:o[W.getLocalizeKeyForScrollGroupId(s)]},`${s}`))})]})}const uo=v.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...r},o)=>a.jsx(Xs.Root,{ref:o,decorative:n,orientation:t,className:S("pr-twp tw-shrink-0 tw-bg-border",t==="horizontal"?"tw-h-[1px] tw-w-full":"tw-h-full tw-w-[1px]",e),...r}));uo.displayName=Xs.Root.displayName;function vc({children:e}){return a.jsx("div",{className:"pr-twp tw-grid",children:e})}function yc({primary:e,secondary:t,children:n,isLoading:r=!1,loadingMessage:o}){return a.jsxs("div",{className:"tw-flex tw-items-center tw-justify-between tw-space-x-4 tw-py-2",children:[a.jsxs("div",{children:[a.jsx("p",{className:"tw-text-sm tw-font-medium tw-leading-none",children:e}),a.jsx("p",{className:"tw-whitespace-normal tw-break-words tw-text-sm tw-text-muted-foreground",children:t})]}),r?a.jsx("p",{className:"tw-text-sm tw-text-muted-foreground",children:o}):a.jsx("div",{children:n})]})}function xc({primary:e,secondary:t,includeSeparator:n=!1}){return a.jsxs("div",{className:"tw-space-y-4 tw-py-2",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"tw-text-lg tw-font-medium",children:e}),a.jsx("p",{className:"tw-text-sm tw-text-muted-foreground",children:t})]}),n?a.jsx(uo,{}):""]})}function Nc({id:e,className:t,listItems:n,selectedListItems:r,handleSelectListItem:o,createLabel:s}){return a.jsx("div",{id:e,className:t,children:n.map(i=>a.jsxs("div",{className:"tw-m-2 tw-flex tw-items-center",children:[a.jsx(rr,{className:"tw-mr-2 tw-align-middle",checked:r.includes(i),onCheckedChange:l=>o(i,l)}),a.jsx(Ue,{children:s?s(i):i})]},i))})}function kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ec(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var po={},ja={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(ja);var Sc=ja.exports,Tr={};function wo(e,t){return process.env.NODE_ENV==="production"?()=>null:function(...r){return e(...r)||t(...r)}}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function mt(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Oa(e){if(!mt(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=Oa(e[n])}),t}function Qe(e,t,n={clone:!0}){const r=n.clone?O({},e):e;return mt(e)&&mt(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(mt(t[o])&&o in e&&mt(e[o])?r[o]=Qe(e[o],t[o],n):n.clone?r[o]=mt(t[o])?Oa(t[o]):t[o]:r[o]=t[o])}),r}var zr={exports:{}},An={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo;function Tc(){if(Qo)return ie;Qo=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,E=e?Symbol.for("react.responder"):60118,I=e?Symbol.for("react.scope"):60119;function j(g){if(typeof g=="object"&&g!==null){var P=g.$$typeof;switch(P){case t:switch(g=g.type,g){case c:case d:case r:case s:case o:case m:return g;default:switch(g=g&&g.$$typeof,g){case l:case u:case y:case b:case i:return g;default:return P}}case n:return P}}}function k(g){return j(g)===d}return ie.AsyncMode=c,ie.ConcurrentMode=d,ie.ContextConsumer=l,ie.ContextProvider=i,ie.Element=t,ie.ForwardRef=u,ie.Fragment=r,ie.Lazy=y,ie.Memo=b,ie.Portal=n,ie.Profiler=s,ie.StrictMode=o,ie.Suspense=m,ie.isAsyncMode=function(g){return k(g)||j(g)===c},ie.isConcurrentMode=k,ie.isContextConsumer=function(g){return j(g)===l},ie.isContextProvider=function(g){return j(g)===i},ie.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===t},ie.isForwardRef=function(g){return j(g)===u},ie.isFragment=function(g){return j(g)===r},ie.isLazy=function(g){return j(g)===y},ie.isMemo=function(g){return j(g)===b},ie.isPortal=function(g){return j(g)===n},ie.isProfiler=function(g){return j(g)===s},ie.isStrictMode=function(g){return j(g)===o},ie.isSuspense=function(g){return j(g)===m},ie.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===r||g===d||g===s||g===o||g===m||g===w||typeof g=="object"&&g!==null&&(g.$$typeof===y||g.$$typeof===b||g.$$typeof===i||g.$$typeof===l||g.$$typeof===u||g.$$typeof===h||g.$$typeof===E||g.$$typeof===I||g.$$typeof===f)},ie.typeOf=j,ie}var le={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es;function Cc(){return es||(es=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,E=e?Symbol.for("react.responder"):60118,I=e?Symbol.for("react.scope"):60119;function j(_){return typeof _=="string"||typeof _=="function"||_===r||_===d||_===s||_===o||_===m||_===w||typeof _=="object"&&_!==null&&(_.$$typeof===y||_.$$typeof===b||_.$$typeof===i||_.$$typeof===l||_.$$typeof===u||_.$$typeof===h||_.$$typeof===E||_.$$typeof===I||_.$$typeof===f)}function k(_){if(typeof _=="object"&&_!==null){var ye=_.$$typeof;switch(ye){case t:var A=_.type;switch(A){case c:case d:case r:case s:case o:case m:return A;default:var ve=A&&A.$$typeof;switch(ve){case l:case u:case y:case b:case i:return ve;default:return ye}}case n:return ye}}}var g=c,P=d,V=l,U=i,T=t,R=u,N=r,D=y,$=b,J=n,Y=s,z=o,ee=m,ae=!1;function oe(_){return ae||(ae=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),x(_)||k(_)===c}function x(_){return k(_)===d}function C(_){return k(_)===l}function L(_){return k(_)===i}function F(_){return typeof _=="object"&&_!==null&&_.$$typeof===t}function B(_){return k(_)===u}function X(_){return k(_)===r}function q(_){return k(_)===y}function H(_){return k(_)===b}function G(_){return k(_)===n}function K(_){return k(_)===s}function Z(_){return k(_)===o}function ue(_){return k(_)===m}le.AsyncMode=g,le.ConcurrentMode=P,le.ContextConsumer=V,le.ContextProvider=U,le.Element=T,le.ForwardRef=R,le.Fragment=N,le.Lazy=D,le.Memo=$,le.Portal=J,le.Profiler=Y,le.StrictMode=z,le.Suspense=ee,le.isAsyncMode=oe,le.isConcurrentMode=x,le.isContextConsumer=C,le.isContextProvider=L,le.isElement=F,le.isForwardRef=B,le.isFragment=X,le.isLazy=q,le.isMemo=H,le.isPortal=G,le.isProfiler=K,le.isStrictMode=Z,le.isSuspense=ue,le.isValidElementType=j,le.typeOf=k}()),le}var ts;function Ra(){return ts||(ts=1,process.env.NODE_ENV==="production"?An.exports=Tc():An.exports=Cc()),An.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Cr,ns;function jc(){if(ns)return Cr;ns=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function o(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var i={},l=0;l<10;l++)i["_"+String.fromCharCode(l)]=l;var c=Object.getOwnPropertyNames(i).map(function(u){return i[u]});if(c.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(u){d[u]=u}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Cr=o()?Object.assign:function(s,i){for(var l,c=r(s),d,u=1;u<arguments.length;u++){l=Object(arguments[u]);for(var m in l)t.call(l,m)&&(c[m]=l[m]);if(e){d=e(l);for(var w=0;w<d.length;w++)n.call(l,d[w])&&(c[d[w]]=l[d[w]])}}return c},Cr}var jr,rs;function fo(){if(rs)return jr;rs=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return jr=e,jr}var Or,os;function Pa(){return os||(os=1,Or=Function.call.bind(Object.prototype.hasOwnProperty)),Or}var Rr,ss;function Oc(){if(ss)return Rr;ss=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=fo(),n={},r=Pa();e=function(s){var i="Warning: "+s;typeof console<"u"&&console.error(i);try{throw new Error(i)}catch{}}}function o(s,i,l,c,d){if(process.env.NODE_ENV!=="production"){for(var u in s)if(r(s,u)){var m;try{if(typeof s[u]!="function"){var w=Error((c||"React class")+": "+l+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw w.name="Invariant Violation",w}m=s[u](i,u,c,l,null,t)}catch(y){m=y}if(m&&!(m instanceof Error)&&e((c||"React class")+": type specification of "+l+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof m+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),m instanceof Error&&!(m.message in n)){n[m.message]=!0;var b=d?d():"";e("Failed "+l+" type: "+m.message+(b??""))}}}}return o.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(n={})},Rr=o,Rr}var Pr,as;function Rc(){if(as)return Pr;as=1;var e=Ra(),t=jc(),n=fo(),r=Pa(),o=Oc(),s=function(){};process.env.NODE_ENV!=="production"&&(s=function(l){var c="Warning: "+l;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}});function i(){return null}return Pr=function(l,c){var d=typeof Symbol=="function"&&Symbol.iterator,u="@@iterator";function m(x){var C=x&&(d&&x[d]||x[u]);if(typeof C=="function")return C}var w="<<anonymous>>",b={array:E("array"),bigint:E("bigint"),bool:E("boolean"),func:E("function"),number:E("number"),object:E("object"),string:E("string"),symbol:E("symbol"),any:I(),arrayOf:j,element:k(),elementType:g(),instanceOf:P,node:R(),objectOf:U,oneOf:V,oneOfType:T,shape:D,exact:$};function y(x,C){return x===C?x!==0||1/x===1/C:x!==x&&C!==C}function f(x,C){this.message=x,this.data=C&&typeof C=="object"?C:{},this.stack=""}f.prototype=Error.prototype;function h(x){if(process.env.NODE_ENV!=="production")var C={},L=0;function F(X,q,H,G,K,Z,ue){if(G=G||w,Z=Z||H,ue!==n){if(c){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var ye=G+":"+H;!C[ye]&&L<3&&(s("You are manually calling a React.PropTypes validation function for the `"+Z+"` prop on `"+G+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),C[ye]=!0,L++)}}return q[H]==null?X?q[H]===null?new f("The "+K+" `"+Z+"` is marked as required "+("in `"+G+"`, but its value is `null`.")):new f("The "+K+" `"+Z+"` is marked as required in "+("`"+G+"`, but its value is `undefined`.")):null:x(q,H,G,K,Z)}var B=F.bind(null,!1);return B.isRequired=F.bind(null,!0),B}function E(x){function C(L,F,B,X,q,H){var G=L[F],K=z(G);if(K!==x){var Z=ee(G);return new f("Invalid "+X+" `"+q+"` of type "+("`"+Z+"` supplied to `"+B+"`, expected ")+("`"+x+"`."),{expectedType:x})}return null}return h(C)}function I(){return h(i)}function j(x){function C(L,F,B,X,q){if(typeof x!="function")return new f("Property `"+q+"` of component `"+B+"` has invalid PropType notation inside arrayOf.");var H=L[F];if(!Array.isArray(H)){var G=z(H);return new f("Invalid "+X+" `"+q+"` of type "+("`"+G+"` supplied to `"+B+"`, expected an array."))}for(var K=0;K<H.length;K++){var Z=x(H,K,B,X,q+"["+K+"]",n);if(Z instanceof Error)return Z}return null}return h(C)}function k(){function x(C,L,F,B,X){var q=C[L];if(!l(q)){var H=z(q);return new f("Invalid "+B+" `"+X+"` of type "+("`"+H+"` supplied to `"+F+"`, expected a single ReactElement."))}return null}return h(x)}function g(){function x(C,L,F,B,X){var q=C[L];if(!e.isValidElementType(q)){var H=z(q);return new f("Invalid "+B+" `"+X+"` of type "+("`"+H+"` supplied to `"+F+"`, expected a single ReactElement type."))}return null}return h(x)}function P(x){function C(L,F,B,X,q){if(!(L[F]instanceof x)){var H=x.name||w,G=oe(L[F]);return new f("Invalid "+X+" `"+q+"` of type "+("`"+G+"` supplied to `"+B+"`, expected ")+("instance of `"+H+"`."))}return null}return h(C)}function V(x){if(!Array.isArray(x))return process.env.NODE_ENV!=="production"&&(arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array.")),i;function C(L,F,B,X,q){for(var H=L[F],G=0;G<x.length;G++)if(y(H,x[G]))return null;var K=JSON.stringify(x,function(ue,_){var ye=ee(_);return ye==="symbol"?String(_):_});return new f("Invalid "+X+" `"+q+"` of value `"+String(H)+"` "+("supplied to `"+B+"`, expected one of "+K+"."))}return h(C)}function U(x){function C(L,F,B,X,q){if(typeof x!="function")return new f("Property `"+q+"` of component `"+B+"` has invalid PropType notation inside objectOf.");var H=L[F],G=z(H);if(G!=="object")return new f("Invalid "+X+" `"+q+"` of type "+("`"+G+"` supplied to `"+B+"`, expected an object."));for(var K in H)if(r(H,K)){var Z=x(H,K,B,X,q+"."+K,n);if(Z instanceof Error)return Z}return null}return h(C)}function T(x){if(!Array.isArray(x))return process.env.NODE_ENV!=="production"&&s("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var C=0;C<x.length;C++){var L=x[C];if(typeof L!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ae(L)+" at index "+C+"."),i}function F(B,X,q,H,G){for(var K=[],Z=0;Z<x.length;Z++){var ue=x[Z],_=ue(B,X,q,H,G,n);if(_==null)return null;_.data&&r(_.data,"expectedType")&&K.push(_.data.expectedType)}var ye=K.length>0?", expected one of type ["+K.join(", ")+"]":"";return new f("Invalid "+H+" `"+G+"` supplied to "+("`"+q+"`"+ye+"."))}return h(F)}function R(){function x(C,L,F,B,X){return J(C[L])?null:new f("Invalid "+B+" `"+X+"` supplied to "+("`"+F+"`, expected a ReactNode."))}return h(x)}function N(x,C,L,F,B){return new f((x||"React class")+": "+C+" type `"+L+"."+F+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+B+"`.")}function D(x){function C(L,F,B,X,q){var H=L[F],G=z(H);if(G!=="object")return new f("Invalid "+X+" `"+q+"` of type `"+G+"` "+("supplied to `"+B+"`, expected `object`."));for(var K in x){var Z=x[K];if(typeof Z!="function")return N(B,X,q,K,ee(Z));var ue=Z(H,K,B,X,q+"."+K,n);if(ue)return ue}return null}return h(C)}function $(x){function C(L,F,B,X,q){var H=L[F],G=z(H);if(G!=="object")return new f("Invalid "+X+" `"+q+"` of type `"+G+"` "+("supplied to `"+B+"`, expected `object`."));var K=t({},L[F],x);for(var Z in K){var ue=x[Z];if(r(x,Z)&&typeof ue!="function")return N(B,X,q,Z,ee(ue));if(!ue)return new f("Invalid "+X+" `"+q+"` key `"+Z+"` supplied to `"+B+"`.\nBad object: "+JSON.stringify(L[F],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(x),null,"  "));var _=ue(H,Z,B,X,q+"."+Z,n);if(_)return _}return null}return h(C)}function J(x){switch(typeof x){case"number":case"string":case"undefined":return!0;case"boolean":return!x;case"object":if(Array.isArray(x))return x.every(J);if(x===null||l(x))return!0;var C=m(x);if(C){var L=C.call(x),F;if(C!==x.entries){for(;!(F=L.next()).done;)if(!J(F.value))return!1}else for(;!(F=L.next()).done;){var B=F.value;if(B&&!J(B[1]))return!1}}else return!1;return!0;default:return!1}}function Y(x,C){return x==="symbol"?!0:C?C["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&C instanceof Symbol:!1}function z(x){var C=typeof x;return Array.isArray(x)?"array":x instanceof RegExp?"object":Y(C,x)?"symbol":C}function ee(x){if(typeof x>"u"||x===null)return""+x;var C=z(x);if(C==="object"){if(x instanceof Date)return"date";if(x instanceof RegExp)return"regexp"}return C}function ae(x){var C=ee(x);switch(C){case"array":case"object":return"an "+C;case"boolean":case"date":case"regexp":return"a "+C;default:return C}}function oe(x){return!x.constructor||!x.constructor.name?w:x.constructor.name}return b.checkPropTypes=o,b.resetWarningCache=o.resetWarningCache,b.PropTypes=b,b},Pr}var _r,is;function Pc(){if(is)return _r;is=1;var e=fo();function t(){}function n(){}return n.resetWarningCache=t,_r=function(){function r(i,l,c,d,u,m){if(m!==e){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}r.isRequired=r;function o(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},_r}if(process.env.NODE_ENV!=="production"){var _c=Ra(),Ic=!0;zr.exports=Rc()(_c.isElement,Ic)}else zr.exports=Pc()();var $c=zr.exports;const p=kc($c);function Mc(e){const{prototype:t={}}=e;return!!t.isReactComponent}function _a(e,t,n,r,o){const s=e[t],i=o||t;if(s==null||typeof window>"u")return null;let l;const c=s.type;return typeof c=="function"&&!Mc(c)&&(l="Did you accidentally use a plain function component for an element instead?"),l!==void 0?new Error(`Invalid ${r} \`${i}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`):null}const Ia=wo(p.element,_a);Ia.isRequired=wo(p.element.isRequired,_a);const $a=Ia,Dc="exact-prop: ​";function Ac(e){return process.env.NODE_ENV==="production"?e:O({},e,{[Dc]:t=>{const n=Object.keys(t).filter(r=>!e.hasOwnProperty(r));return n.length>0?new Error(`The following props are not supported: ${n.map(r=>`\`${r}\``).join(", ")}. Please remove them.`):null}})}function Vt(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var Gr={exports:{}},ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls;function Bc(){if(ls)return ce;ls=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),y;y=Symbol.for("react.module.reference");function f(h){if(typeof h=="object"&&h!==null){var E=h.$$typeof;switch(E){case e:switch(h=h.type,h){case n:case o:case r:case d:case u:return h;default:switch(h=h&&h.$$typeof,h){case l:case i:case c:case w:case m:case s:return h;default:return E}}case t:return E}}}return ce.ContextConsumer=i,ce.ContextProvider=s,ce.Element=e,ce.ForwardRef=c,ce.Fragment=n,ce.Lazy=w,ce.Memo=m,ce.Portal=t,ce.Profiler=o,ce.StrictMode=r,ce.Suspense=d,ce.SuspenseList=u,ce.isAsyncMode=function(){return!1},ce.isConcurrentMode=function(){return!1},ce.isContextConsumer=function(h){return f(h)===i},ce.isContextProvider=function(h){return f(h)===s},ce.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===e},ce.isForwardRef=function(h){return f(h)===c},ce.isFragment=function(h){return f(h)===n},ce.isLazy=function(h){return f(h)===w},ce.isMemo=function(h){return f(h)===m},ce.isPortal=function(h){return f(h)===t},ce.isProfiler=function(h){return f(h)===o},ce.isStrictMode=function(h){return f(h)===r},ce.isSuspense=function(h){return f(h)===d},ce.isSuspenseList=function(h){return f(h)===u},ce.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===n||h===o||h===r||h===d||h===u||h===b||typeof h=="object"&&h!==null&&(h.$$typeof===w||h.$$typeof===m||h.$$typeof===s||h.$$typeof===i||h.$$typeof===c||h.$$typeof===y||h.getModuleId!==void 0)},ce.typeOf=f,ce}var de={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cs;function Vc(){return cs||(cs=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),y=!1,f=!1,h=!1,E=!1,I=!1,j;j=Symbol.for("react.module.reference");function k(A){return!!(typeof A=="string"||typeof A=="function"||A===n||A===o||I||A===r||A===d||A===u||E||A===b||y||f||h||typeof A=="object"&&A!==null&&(A.$$typeof===w||A.$$typeof===m||A.$$typeof===s||A.$$typeof===i||A.$$typeof===c||A.$$typeof===j||A.getModuleId!==void 0))}function g(A){if(typeof A=="object"&&A!==null){var ve=A.$$typeof;switch(ve){case e:var ze=A.type;switch(ze){case n:case o:case r:case d:case u:return ze;default:var lt=ze&&ze.$$typeof;switch(lt){case l:case i:case c:case w:case m:case s:return lt;default:return ve}}case t:return ve}}}var P=i,V=s,U=e,T=c,R=n,N=w,D=m,$=t,J=o,Y=r,z=d,ee=u,ae=!1,oe=!1;function x(A){return ae||(ae=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function C(A){return oe||(oe=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function L(A){return g(A)===i}function F(A){return g(A)===s}function B(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function X(A){return g(A)===c}function q(A){return g(A)===n}function H(A){return g(A)===w}function G(A){return g(A)===m}function K(A){return g(A)===t}function Z(A){return g(A)===o}function ue(A){return g(A)===r}function _(A){return g(A)===d}function ye(A){return g(A)===u}de.ContextConsumer=P,de.ContextProvider=V,de.Element=U,de.ForwardRef=T,de.Fragment=R,de.Lazy=N,de.Memo=D,de.Portal=$,de.Profiler=J,de.StrictMode=Y,de.Suspense=z,de.SuspenseList=ee,de.isAsyncMode=x,de.isConcurrentMode=C,de.isContextConsumer=L,de.isContextProvider=F,de.isElement=B,de.isForwardRef=X,de.isFragment=q,de.isLazy=H,de.isMemo=G,de.isPortal=K,de.isProfiler=Z,de.isStrictMode=ue,de.isSuspense=_,de.isSuspenseList=ye,de.isValidElementType=k,de.typeOf=g}()),de}process.env.NODE_ENV==="production"?Gr.exports=Bc():Gr.exports=Vc();var ds=Gr.exports;const Lc=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Fc(e){const t=`${e}`.match(Lc);return t&&t[1]||""}function Ma(e,t=""){return e.displayName||e.name||Fc(e)||t}function us(e,t,n){const r=Ma(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function zc(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Ma(e,"Component");if(typeof e=="object")switch(e.$$typeof){case ds.ForwardRef:return us(e,e.render,"ForwardRef");case ds.Memo:return us(e,e.type,"memo");default:return}}}function bn(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const s=e[t],i=o||t;return s==null?null:s&&s.nodeType!==1?new Error(`Invalid ${r} \`${i}\` supplied to \`${n}\`. Expected an HTMLElement.`):null}const Gc=p.oneOfType([p.func,p.object]),Da=Gc;function Ye(e){if(typeof e!="string")throw new Error(process.env.NODE_ENV!=="production"?"MUI: `capitalize(string)` expects a string argument.":Vt(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Uc(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function qc(e,t=166){let n;function r(...o){const s=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(s,t)}return r.clear=()=>{clearTimeout(n)},r}function Hc(e,t){return process.env.NODE_ENV==="production"?()=>null:(n,r,o,s,i)=>{const l=o||"<<anonymous>>",c=i||r;return typeof n[r]<"u"?new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`):null}}function Xc(e,t){var n,r;return M.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Hn(e){return e&&e.ownerDocument||document}function Yc(e){return Hn(e).defaultView||window}function Wc(e,t){if(process.env.NODE_ENV==="production")return()=>null;const n=t?O({},t.propTypes):null;return o=>(s,i,l,c,d,...u)=>{const m=d||i,w=n==null?void 0:n[m];if(w){const b=w(s,i,l,c,d,...u);if(b)return b}return typeof s[i]<"u"&&!s[o]?new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${o}\` prop.`):null}}function Xn(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Kc=typeof window<"u"?M.useLayoutEffect:M.useEffect,Lt=Kc;let ps=0;function Jc(e){const[t,n]=M.useState(e),r=e||t;return M.useEffect(()=>{t==null&&(ps+=1,n(`mui-${ps}`))},[t]),r}const ws=M["useId".toString()];function Aa(e){if(ws!==void 0){const t=ws();return e??t}return Jc(e)}function Zc(e,t,n,r,o){if(process.env.NODE_ENV==="production")return null;const s=o||t;return typeof e[t]<"u"?new Error(`The prop \`${s}\` is not supported. Please remove it.`):null}function Ba({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=M.useRef(e!==void 0),[s,i]=M.useState(t),l=o?e:s;if(process.env.NODE_ENV!=="production"){M.useEffect(()=>{o!==(e!==void 0)&&console.error([`MUI: A component is changing the ${o?"":"un"}controlled ${r} state of ${n} to be ${o?"un":""}controlled.`,"Elements should not switch from uncontrolled to controlled (or vice versa).",`Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`,"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.","More info: https://fb.me/react-controlled-components"].join(`
`))},[r,n,e]);const{current:d}=M.useRef(t);M.useEffect(()=>{!o&&d!==t&&console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`))},[JSON.stringify(t)])}const c=M.useCallback(d=>{o||i(d)},[]);return[l,c]}function Ur(e){const t=M.useRef(e);return Lt(()=>{t.current=e}),M.useRef((...n)=>(0,t.current)(...n)).current}function xt(...e){return M.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Xn(n,t)})},e)}const fs={};function Qc(e,t){const n=M.useRef(fs);return n.current===fs&&(n.current=e(t)),n}const ed=[];function td(e){M.useEffect(e,ed)}class Cn{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new Cn}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function ln(){const e=Qc(Cn.create).current;return td(e.disposeEffect),e}let sr=!0,qr=!1;const nd=new Cn,rd={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function od(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&rd[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function sd(e){e.metaKey||e.altKey||e.ctrlKey||(sr=!0)}function Ir(){sr=!1}function ad(){this.visibilityState==="hidden"&&qr&&(sr=!0)}function id(e){e.addEventListener("keydown",sd,!0),e.addEventListener("mousedown",Ir,!0),e.addEventListener("pointerdown",Ir,!0),e.addEventListener("touchstart",Ir,!0),e.addEventListener("visibilitychange",ad,!0)}function ld(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return sr||od(t)}function Va(){const e=M.useCallback(o=>{o!=null&&id(o.ownerDocument)},[]),t=M.useRef(!1);function n(){return t.current?(qr=!0,nd.start(100,()=>{qr=!1}),t.current=!1,!0):!1}function r(o){return ld(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function La(e,t){const n=O({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=O({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},s=t[r];n[r]={},!s||!Object.keys(s)?n[r]=o:!o||!Object.keys(o)?n[r]=s:(n[r]=O({},s),Object.keys(o).forEach(i=>{n[r][i]=La(o[i],s[i])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function mo(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((s,i)=>{if(i){const l=t(i);l!==""&&s.push(l),n&&n[i]&&s.push(n[i])}return s},[]).join(" ")}),r}const ms=e=>e,cd=()=>{let e=ms;return{configure(t){e=t},generate(t){return e(t)},reset(){e=ms}}},dd=cd(),Fa=dd,za={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ar(e,t,n="Mui"){const r=za[t];return r?`${n}-${r}`:`${Fa.generate(e)}-${t}`}function Ga(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=ar(e,o,n)}),r}function ud(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function xe(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const pd=["values","unit","step"],wd=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>O({},n,{[r.key]:r.val}),{})};function fd(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=xe(e,pd),s=wd(t),i=Object.keys(s);function l(w){return`@media (min-width:${typeof t[w]=="number"?t[w]:w}${n})`}function c(w){return`@media (max-width:${(typeof t[w]=="number"?t[w]:w)-r/100}${n})`}function d(w,b){const y=i.indexOf(b);return`@media (min-width:${typeof t[w]=="number"?t[w]:w}${n}) and (max-width:${(y!==-1&&typeof t[i[y]]=="number"?t[i[y]]:b)-r/100}${n})`}function u(w){return i.indexOf(w)+1<i.length?d(w,i[i.indexOf(w)+1]):l(w)}function m(w){const b=i.indexOf(w);return b===0?l(i[1]):b===i.length-1?c(i[b]):d(w,i[i.indexOf(w)+1]).replace("@media","@media not all and")}return O({keys:i,values:s,up:l,down:c,between:d,only:u,not:m,unit:n},o)}const md={borderRadius:4},hd=md,gd=process.env.NODE_ENV!=="production"?p.oneOfType([p.number,p.string,p.object,p.array]):{},at=gd;function wn(e,t){return t?Qe(e,t,{clone:!1}):e}const ho={xs:0,sm:600,md:900,lg:1200,xl:1536},hs={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${ho[e]}px)`};function et(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const s=r.breakpoints||hs;return t.reduce((i,l,c)=>(i[s.up(s.keys[c])]=n(t[c]),i),{})}if(typeof t=="object"){const s=r.breakpoints||hs;return Object.keys(t).reduce((i,l)=>{if(Object.keys(s.values||ho).indexOf(l)!==-1){const c=s.up(l);i[c]=n(t[l],l)}else{const c=l;i[c]=t[c]}return i},{})}return n(t)}function bd(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const s=e.up(o);return r[s]={},r},{}))||{}}function vd(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function ir(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,s)=>o&&o[s]?o[s]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function Yn(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=ir(e,n)||r,t&&(o=t(o,r,e)),o}function be(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,s=i=>{if(i[t]==null)return null;const l=i[t],c=i.theme,d=ir(c,r)||{};return et(i,l,m=>{let w=Yn(d,o,m);return m===w&&typeof m=="string"&&(w=Yn(d,o,`${t}${m==="default"?"":Ye(m)}`,m)),n===!1?w:{[n]:w}})};return s.propTypes=process.env.NODE_ENV!=="production"?{[t]:at}:{},s.filterProps=[t],s}function yd(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const xd={m:"margin",p:"padding"},Nd={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},gs={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},kd=yd(e=>{if(e.length>2)if(gs[e])e=gs[e];else return[e];const[t,n]=e.split(""),r=xd[t],o=Nd[n]||"";return Array.isArray(o)?o.map(s=>r+s):[r+o]}),lr=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],cr=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Ed=[...lr,...cr];function jn(e,t,n,r){var o;const s=(o=ir(e,t,!1))!=null?o:n;return typeof s=="number"?i=>typeof i=="string"?i:(process.env.NODE_ENV!=="production"&&typeof i!="number"&&console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`),s*i):Array.isArray(s)?i=>typeof i=="string"?i:(process.env.NODE_ENV!=="production"&&(Number.isInteger(i)?i>s.length-1&&console.error([`MUI: The value provided (${i}) overflows.`,`The supported values are: ${JSON.stringify(s)}.`,`${i} > ${s.length-1}, you need to add the missing values.`].join(`
`)):console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))),s[i]):typeof s=="function"?s:(process.env.NODE_ENV!=="production"&&console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`,"It should be a number, an array or a function."].join(`
`)),()=>{})}function Ua(e){return jn(e,"spacing",8,"spacing")}function On(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function Sd(e,t){return n=>e.reduce((r,o)=>(r[o]=On(t,n),r),{})}function Td(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=kd(n),s=Sd(o,r),i=e[n];return et(e,i,s)}function qa(e,t){const n=Ua(e.theme);return Object.keys(e).map(r=>Td(e,t,r,n)).reduce(wn,{})}function fe(e){return qa(e,lr)}fe.propTypes=process.env.NODE_ENV!=="production"?lr.reduce((e,t)=>(e[t]=at,e),{}):{};fe.filterProps=lr;function me(e){return qa(e,cr)}me.propTypes=process.env.NODE_ENV!=="production"?cr.reduce((e,t)=>(e[t]=at,e),{}):{};me.filterProps=cr;process.env.NODE_ENV!=="production"&&Ed.reduce((e,t)=>(e[t]=at,e),{});function Cd(e=8){if(e.mui)return e;const t=Ua({spacing:e}),n=(...r)=>(process.env.NODE_ENV!=="production"&&(r.length<=4||console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)),(r.length===0?[1]:r).map(s=>{const i=t(s);return typeof i=="number"?`${i}px`:i}).join(" "));return n.mui=!0,n}function dr(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(s=>{r[s]=o}),r),{}),n=r=>Object.keys(r).reduce((o,s)=>t[s]?wn(o,t[s](r)):o,{});return n.propTypes=process.env.NODE_ENV!=="production"?e.reduce((r,o)=>Object.assign(r,o.propTypes),{}):{},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function Ae(e){return typeof e!="number"?e:`${e}px solid`}function Fe(e,t){return be({prop:e,themeKey:"borders",transform:t})}const jd=Fe("border",Ae),Od=Fe("borderTop",Ae),Rd=Fe("borderRight",Ae),Pd=Fe("borderBottom",Ae),_d=Fe("borderLeft",Ae),Id=Fe("borderColor"),$d=Fe("borderTopColor"),Md=Fe("borderRightColor"),Dd=Fe("borderBottomColor"),Ad=Fe("borderLeftColor"),Bd=Fe("outline",Ae),Vd=Fe("outlineColor"),ur=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=jn(e.theme,"shape.borderRadius",4,"borderRadius"),n=r=>({borderRadius:On(t,r)});return et(e,e.borderRadius,n)}return null};ur.propTypes=process.env.NODE_ENV!=="production"?{borderRadius:at}:{};ur.filterProps=["borderRadius"];dr(jd,Od,Rd,Pd,_d,Id,$d,Md,Dd,Ad,ur,Bd,Vd);const pr=e=>{if(e.gap!==void 0&&e.gap!==null){const t=jn(e.theme,"spacing",8,"gap"),n=r=>({gap:On(t,r)});return et(e,e.gap,n)}return null};pr.propTypes=process.env.NODE_ENV!=="production"?{gap:at}:{};pr.filterProps=["gap"];const wr=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=jn(e.theme,"spacing",8,"columnGap"),n=r=>({columnGap:On(t,r)});return et(e,e.columnGap,n)}return null};wr.propTypes=process.env.NODE_ENV!=="production"?{columnGap:at}:{};wr.filterProps=["columnGap"];const fr=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=jn(e.theme,"spacing",8,"rowGap"),n=r=>({rowGap:On(t,r)});return et(e,e.rowGap,n)}return null};fr.propTypes=process.env.NODE_ENV!=="production"?{rowGap:at}:{};fr.filterProps=["rowGap"];const Ld=be({prop:"gridColumn"}),Fd=be({prop:"gridRow"}),zd=be({prop:"gridAutoFlow"}),Gd=be({prop:"gridAutoColumns"}),Ud=be({prop:"gridAutoRows"}),qd=be({prop:"gridTemplateColumns"}),Hd=be({prop:"gridTemplateRows"}),Xd=be({prop:"gridTemplateAreas"}),Yd=be({prop:"gridArea"});dr(pr,wr,fr,Ld,Fd,zd,Gd,Ud,qd,Hd,Xd,Yd);function Mt(e,t){return t==="grey"?t:e}const Wd=be({prop:"color",themeKey:"palette",transform:Mt}),Kd=be({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Mt}),Jd=be({prop:"backgroundColor",themeKey:"palette",transform:Mt});dr(Wd,Kd,Jd);function _e(e){return e<=1&&e!==0?`${e*100}%`:e}const Zd=be({prop:"width",transform:_e}),go=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const s=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||ho[n];return s?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${s}${e.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:_e(n)}};return et(e,e.maxWidth,t)}return null};go.filterProps=["maxWidth"];const Qd=be({prop:"minWidth",transform:_e}),eu=be({prop:"height",transform:_e}),tu=be({prop:"maxHeight",transform:_e}),nu=be({prop:"minHeight",transform:_e});be({prop:"size",cssProperty:"width",transform:_e});be({prop:"size",cssProperty:"height",transform:_e});const ru=be({prop:"boxSizing"});dr(Zd,go,Qd,eu,tu,nu,ru);const ou={border:{themeKey:"borders",transform:Ae},borderTop:{themeKey:"borders",transform:Ae},borderRight:{themeKey:"borders",transform:Ae},borderBottom:{themeKey:"borders",transform:Ae},borderLeft:{themeKey:"borders",transform:Ae},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Ae},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ur},color:{themeKey:"palette",transform:Mt},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Mt},backgroundColor:{themeKey:"palette",transform:Mt},p:{style:me},pt:{style:me},pr:{style:me},pb:{style:me},pl:{style:me},px:{style:me},py:{style:me},padding:{style:me},paddingTop:{style:me},paddingRight:{style:me},paddingBottom:{style:me},paddingLeft:{style:me},paddingX:{style:me},paddingY:{style:me},paddingInline:{style:me},paddingInlineStart:{style:me},paddingInlineEnd:{style:me},paddingBlock:{style:me},paddingBlockStart:{style:me},paddingBlockEnd:{style:me},m:{style:fe},mt:{style:fe},mr:{style:fe},mb:{style:fe},ml:{style:fe},mx:{style:fe},my:{style:fe},margin:{style:fe},marginTop:{style:fe},marginRight:{style:fe},marginBottom:{style:fe},marginLeft:{style:fe},marginX:{style:fe},marginY:{style:fe},marginInline:{style:fe},marginInlineStart:{style:fe},marginInlineEnd:{style:fe},marginBlock:{style:fe},marginBlockStart:{style:fe},marginBlockEnd:{style:fe},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:pr},rowGap:{style:fr},columnGap:{style:wr},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:_e},maxWidth:{style:go},minWidth:{transform:_e},height:{transform:_e},maxHeight:{transform:_e},minHeight:{transform:_e},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},bo=ou;function su(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function au(e,t){return typeof e=="function"?e(t):e}function iu(){function e(n,r,o,s){const i={[n]:r,theme:o},l=s[n];if(!l)return{[n]:r};const{cssProperty:c=n,themeKey:d,transform:u,style:m}=l;if(r==null)return null;if(d==="typography"&&r==="inherit")return{[n]:r};const w=ir(o,d)||{};return m?m(i):et(i,r,y=>{let f=Yn(w,u,y);return y===f&&typeof y=="string"&&(f=Yn(w,u,`${n}${y==="default"?"":Ye(y)}`,y)),c===!1?f:{[c]:f}})}function t(n){var r;const{sx:o,theme:s={}}=n||{};if(!o)return null;const i=(r=s.unstable_sxConfig)!=null?r:bo;function l(c){let d=c;if(typeof c=="function")d=c(s);else if(typeof c!="object")return c;if(!d)return null;const u=bd(s.breakpoints),m=Object.keys(u);let w=u;return Object.keys(d).forEach(b=>{const y=au(d[b],s);if(y!=null)if(typeof y=="object")if(i[b])w=wn(w,e(b,y,s,i));else{const f=et({theme:s},y,h=>({[b]:h}));su(f,y)?w[b]=t({sx:y,theme:s}):w=wn(w,f)}else w=wn(w,e(b,y,s,i))}),vd(m,w)}return Array.isArray(o)?o.map(l):l(o)}return t}const Ha=iu();Ha.filterProps=["sx"];const vo=Ha;function lu(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const cu=["breakpoints","palette","spacing","shape"];function yo(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:s={}}=e,i=xe(e,cu),l=fd(n),c=Cd(o);let d=Qe({breakpoints:l,direction:"ltr",components:{},palette:O({mode:"light"},r),spacing:c,shape:O({},hd,s)},i);return d.applyStyles=lu,d=t.reduce((u,m)=>Qe(u,m),d),d.unstable_sxConfig=O({},bo,i==null?void 0:i.unstable_sxConfig),d.unstable_sx=function(m){return vo({sx:m,theme:this})},d}function du(e){return Object.keys(e).length===0}function Xa(e=null){const t=M.useContext(Ar.ThemeContext);return!t||du(t)?e:t}const uu=yo();function Ya(e=uu){return Xa(e)}const pu=["ownerState"],wu=["variants"],fu=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function mu(e){return Object.keys(e).length===0}function hu(e){return typeof e=="string"&&e.charCodeAt(0)>96}function zn(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const gu=yo(),bs=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Bn({defaultTheme:e,theme:t,themeId:n}){return mu(t)?e:t[n]||t}function bu(e){return e?(t,n)=>n[e]:null}function Gn(e,t){let{ownerState:n}=t,r=xe(t,pu);const o=typeof e=="function"?e(O({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(s=>Gn(s,O({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:s=[]}=o;let l=xe(o,wu);return s.forEach(c=>{let d=!0;typeof c.props=="function"?d=c.props(O({ownerState:n},r,n)):Object.keys(c.props).forEach(u=>{(n==null?void 0:n[u])!==c.props[u]&&r[u]!==c.props[u]&&(d=!1)}),d&&(Array.isArray(l)||(l=[l]),l.push(typeof c.style=="function"?c.style(O({ownerState:n},r,n)):c.style))}),l}return o}function vu(e={}){const{themeId:t,defaultTheme:n=gu,rootShouldForwardProp:r=zn,slotShouldForwardProp:o=zn}=e,s=i=>vo(O({},i,{theme:Bn(O({},i,{defaultTheme:n,themeId:t}))}));return s.__mui_systemSx=!0,(i,l={})=>{Ar.internal_processStyles(i,g=>g.filter(P=>!(P!=null&&P.__mui_systemSx)));const{name:c,slot:d,skipVariantsResolver:u,skipSx:m,overridesResolver:w=bu(bs(d))}=l,b=xe(l,fu),y=u!==void 0?u:d&&d!=="Root"&&d!=="root"||!1,f=m||!1;let h;process.env.NODE_ENV!=="production"&&c&&(h=`${c}-${bs(d||"Root")}`);let E=zn;d==="Root"||d==="root"?E=r:d?E=o:hu(i)&&(E=void 0);const I=Ar(i,O({shouldForwardProp:E,label:h},b)),j=g=>typeof g=="function"&&g.__emotion_real!==g||mt(g)?P=>Gn(g,O({},P,{theme:Bn({theme:P.theme,defaultTheme:n,themeId:t})})):g,k=(g,...P)=>{let V=j(g);const U=P?P.map(j):[];c&&w&&U.push(N=>{const D=Bn(O({},N,{defaultTheme:n,themeId:t}));if(!D.components||!D.components[c]||!D.components[c].styleOverrides)return null;const $=D.components[c].styleOverrides,J={};return Object.entries($).forEach(([Y,z])=>{J[Y]=Gn(z,O({},N,{theme:D}))}),w(N,J)}),c&&!y&&U.push(N=>{var D;const $=Bn(O({},N,{defaultTheme:n,themeId:t})),J=$==null||(D=$.components)==null||(D=D[c])==null?void 0:D.variants;return Gn({variants:J},O({},N,{theme:$}))}),f||U.push(s);const T=U.length-P.length;if(Array.isArray(g)&&T>0){const N=new Array(T).fill("");V=[...g,...N],V.raw=[...g.raw,...N]}const R=I(V,...U);if(process.env.NODE_ENV!=="production"){let N;c&&(N=`${c}${Ye(d||"")}`),N===void 0&&(N=`Styled(${zc(i)})`),R.displayName=N}return i.muiName&&(R.muiName=i.muiName),R};return I.withConfig&&(k.withConfig=I.withConfig),k}}function yu(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:La(t.components[n].defaultProps,r)}function xu({props:e,name:t,defaultTheme:n,themeId:r}){let o=Ya(n);return r&&(o=o[r]||o),yu({theme:o,name:t,props:e})}function xo(e,t=0,n=1){return process.env.NODE_ENV!=="production"&&(e<t||e>n)&&console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`),ud(e,t,n)}function Nu(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Nt(e){if(e.type)return e;if(e.charAt(0)==="#")return Nt(Nu(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`:Vt(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error(process.env.NODE_ENV!=="production"?`MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`:Vt(10,o))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:o}}function mr(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,s)=>s<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function ku(e){e=Nt(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,s=r*Math.min(o,1-o),i=(d,u=(d+n/30)%12)=>o-s*Math.max(Math.min(u-3,9-u,1),-1);let l="rgb";const c=[Math.round(i(0)*255),Math.round(i(8)*255),Math.round(i(4)*255)];return e.type==="hsla"&&(l+="a",c.push(t[3])),mr({type:l,values:c})}function vs(e){e=Nt(e);let t=e.type==="hsl"||e.type==="hsla"?Nt(ku(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function ys(e,t){const n=vs(e),r=vs(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Wa(e,t){return e=Nt(e),t=xo(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,mr(e)}function Eu(e,t){if(e=Nt(e),t=xo(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return mr(e)}function Su(e,t){if(e=Nt(e),t=xo(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return mr(e)}function Tu(e,t){return O({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Cu={black:"#000",white:"#fff"},vn=Cu,ju={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ou=ju,Ru={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},jt=Ru,Pu={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ot=Pu,_u={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},nn=_u,Iu={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Rt=Iu,$u={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Pt=$u,Mu={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},_t=Mu,Du=["mode","contrastThreshold","tonalOffset"],xs={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:vn.white,default:vn.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},$r={text:{primary:vn.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:vn.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ns(e,t,n,r){const o=r.light||r,s=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Su(e.main,o):t==="dark"&&(e.dark=Eu(e.main,s)))}function Au(e="light"){return e==="dark"?{main:Rt[200],light:Rt[50],dark:Rt[400]}:{main:Rt[700],light:Rt[400],dark:Rt[800]}}function Bu(e="light"){return e==="dark"?{main:jt[200],light:jt[50],dark:jt[400]}:{main:jt[500],light:jt[300],dark:jt[700]}}function Vu(e="light"){return e==="dark"?{main:Ot[500],light:Ot[300],dark:Ot[700]}:{main:Ot[700],light:Ot[400],dark:Ot[800]}}function Lu(e="light"){return e==="dark"?{main:Pt[400],light:Pt[300],dark:Pt[700]}:{main:Pt[700],light:Pt[500],dark:Pt[900]}}function Fu(e="light"){return e==="dark"?{main:_t[400],light:_t[300],dark:_t[700]}:{main:_t[800],light:_t[500],dark:_t[900]}}function zu(e="light"){return e==="dark"?{main:nn[400],light:nn[300],dark:nn[700]}:{main:"#ed6c02",light:nn[500],dark:nn[900]}}function Gu(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=xe(e,Du),s=e.primary||Au(t),i=e.secondary||Bu(t),l=e.error||Vu(t),c=e.info||Lu(t),d=e.success||Fu(t),u=e.warning||zu(t);function m(f){const h=ys(f,$r.text.primary)>=n?$r.text.primary:xs.text.primary;if(process.env.NODE_ENV!=="production"){const E=ys(f,h);E<3&&console.error([`MUI: The contrast ratio of ${E}:1 for ${h} on ${f}`,"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.","https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`))}return h}const w=({color:f,name:h,mainShade:E=500,lightShade:I=300,darkShade:j=700})=>{if(f=O({},f),!f.main&&f[E]&&(f.main=f[E]),!f.hasOwnProperty("main"))throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${h?` (${h})`:""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.`:Vt(11,h?` (${h})`:"",E));if(typeof f.main!="string")throw new Error(process.env.NODE_ENV!=="production"?`MUI: The color${h?` (${h})`:""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`:Vt(12,h?` (${h})`:"",JSON.stringify(f.main)));return Ns(f,"light",I,r),Ns(f,"dark",j,r),f.contrastText||(f.contrastText=m(f.main)),f},b={dark:$r,light:xs};return process.env.NODE_ENV!=="production"&&(b[t]||console.error(`MUI: The palette mode \`${t}\` is not supported.`)),Qe(O({common:O({},vn),mode:t,primary:w({color:s,name:"primary"}),secondary:w({color:i,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:w({color:l,name:"error"}),warning:w({color:u,name:"warning"}),info:w({color:c,name:"info"}),success:w({color:d,name:"success"}),grey:Ou,contrastThreshold:n,getContrastText:m,augmentColor:w,tonalOffset:r},b[t]),o)}const Uu=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function qu(e){return Math.round(e*1e5)/1e5}const ks={textTransform:"uppercase"},Es='"Roboto", "Helvetica", "Arial", sans-serif';function Hu(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=Es,fontSize:o=14,fontWeightLight:s=300,fontWeightRegular:i=400,fontWeightMedium:l=500,fontWeightBold:c=700,htmlFontSize:d=16,allVariants:u,pxToRem:m}=n,w=xe(n,Uu);process.env.NODE_ENV!=="production"&&(typeof o!="number"&&console.error("MUI: `fontSize` is required to be a number."),typeof d!="number"&&console.error("MUI: `htmlFontSize` is required to be a number."));const b=o/14,y=m||(E=>`${E/d*b}rem`),f=(E,I,j,k,g)=>O({fontFamily:r,fontWeight:E,fontSize:y(I),lineHeight:j},r===Es?{letterSpacing:`${qu(k/I)}em`}:{},g,u),h={h1:f(s,96,1.167,-1.5),h2:f(s,60,1.2,-.5),h3:f(i,48,1.167,0),h4:f(i,34,1.235,.25),h5:f(i,24,1.334,0),h6:f(l,20,1.6,.15),subtitle1:f(i,16,1.75,.15),subtitle2:f(l,14,1.57,.1),body1:f(i,16,1.5,.15),body2:f(i,14,1.43,.15),button:f(l,14,1.75,.4,ks),caption:f(i,12,1.66,.4),overline:f(i,12,2.66,1,ks),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Qe(O({htmlFontSize:d,pxToRem:y,fontFamily:r,fontSize:o,fontWeightLight:s,fontWeightRegular:i,fontWeightMedium:l,fontWeightBold:c},h),w,{clone:!1})}const Xu=.2,Yu=.14,Wu=.12;function we(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Xu})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yu})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Wu})`].join(",")}const Ku=["none",we(0,2,1,-1,0,1,1,0,0,1,3,0),we(0,3,1,-2,0,2,2,0,0,1,5,0),we(0,3,3,-2,0,3,4,0,0,1,8,0),we(0,2,4,-1,0,4,5,0,0,1,10,0),we(0,3,5,-1,0,5,8,0,0,1,14,0),we(0,3,5,-1,0,6,10,0,0,1,18,0),we(0,4,5,-2,0,7,10,1,0,2,16,1),we(0,5,5,-3,0,8,10,1,0,3,14,2),we(0,5,6,-3,0,9,12,1,0,3,16,2),we(0,6,6,-3,0,10,14,1,0,4,18,3),we(0,6,7,-4,0,11,15,1,0,4,20,3),we(0,7,8,-4,0,12,17,2,0,5,22,4),we(0,7,8,-4,0,13,19,2,0,5,24,4),we(0,7,9,-4,0,14,21,2,0,5,26,4),we(0,8,9,-5,0,15,22,2,0,6,28,5),we(0,8,10,-5,0,16,24,2,0,6,30,5),we(0,8,11,-5,0,17,26,2,0,6,32,5),we(0,9,11,-5,0,18,28,2,0,7,34,6),we(0,9,12,-6,0,19,29,2,0,7,36,6),we(0,10,13,-6,0,20,31,3,0,8,38,7),we(0,10,13,-6,0,21,33,3,0,8,40,7),we(0,10,14,-6,0,22,35,3,0,8,42,7),we(0,11,14,-7,0,23,36,3,0,9,44,8),we(0,11,15,-7,0,24,38,3,0,9,46,8)],Ju=Ku,Zu=["duration","easing","delay"],Qu={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ep={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ss(e){return`${Math.round(e)}ms`}function tp(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function np(e){const t=O({},Qu,e.easing),n=O({},ep,e.duration);return O({getAutoHeightDuration:tp,create:(o=["all"],s={})=>{const{duration:i=n.standard,easing:l=t.easeInOut,delay:c=0}=s,d=xe(s,Zu);if(process.env.NODE_ENV!=="production"){const u=w=>typeof w=="string",m=w=>!isNaN(parseFloat(w));!u(o)&&!Array.isArray(o)&&console.error('MUI: Argument "props" must be a string or Array.'),!m(i)&&!u(i)&&console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`),u(l)||console.error('MUI: Argument "easing" must be a string.'),!m(c)&&!u(c)&&console.error('MUI: Argument "delay" must be a number or a string.'),typeof s!="object"&&console.error(["MUI: Secong argument of transition.create must be an object.","Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)),Object.keys(d).length!==0&&console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`)}return(Array.isArray(o)?o:[o]).map(u=>`${u} ${typeof i=="string"?i:Ss(i)} ${l} ${typeof c=="string"?c:Ss(c)}`).join(",")}},e,{easing:t,duration:n})}const rp={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},op=rp,sp=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function ap(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:s={}}=e,i=xe(e,sp);if(e.vars)throw new Error(process.env.NODE_ENV!=="production"?"MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.":Vt(18));const l=Gu(r),c=yo(e);let d=Qe(c,{mixins:Tu(c.breakpoints,n),palette:l,shadows:Ju.slice(),typography:Hu(l,s),transitions:np(o),zIndex:O({},op)});if(d=Qe(d,i),d=t.reduce((u,m)=>Qe(u,m),d),process.env.NODE_ENV!=="production"){const u=["active","checked","completed","disabled","error","expanded","focused","focusVisible","required","selected"],m=(w,b)=>{let y;for(y in w){const f=w[y];if(u.indexOf(y)!==-1&&Object.keys(f).length>0){if(process.env.NODE_ENV!=="production"){const h=ar("",y);console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${y}\` internal state.`,"You can not override it like this: ",JSON.stringify(w,null,2),"",`Instead, you need to use the '&.${h}' syntax:`,JSON.stringify({root:{[`&.${h}`]:f}},null,2),"","https://mui.com/r/state-classes-guide"].join(`
`))}w[y]={}}}};Object.keys(d.components).forEach(w=>{const b=d.components[w].styleOverrides;b&&w.indexOf("Mui")===0&&m(b,w)})}return d.unstable_sxConfig=O({},bo,i==null?void 0:i.unstable_sxConfig),d.unstable_sx=function(m){return vo({sx:m,theme:this})},d}const ip=ap(),No=ip,ko="$$material";function Eo({props:e,name:t}){return xu({props:e,name:t,defaultTheme:No,themeId:ko})}const lp=e=>zn(e)&&e!=="classes",cp=vu({themeId:ko,defaultTheme:No,rootShouldForwardProp:lp}),Rn=cp;function dp(e){return ar("MuiSvgIcon",e)}Ga("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const up=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],pp=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${Ye(t)}`,`fontSize${Ye(n)}`]};return mo(o,dp,r)},wp=Rn("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Ye(n.color)}`],t[`fontSize${Ye(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,s,i,l,c,d,u,m,w,b,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=e.typography)==null||(i=s.pxToRem)==null?void 0:i.call(s,20))||"1.25rem",medium:((l=e.typography)==null||(c=l.pxToRem)==null?void 0:c.call(l,24))||"1.5rem",large:((d=e.typography)==null||(u=d.pxToRem)==null?void 0:u.call(d,35))||"2.1875rem"}[t.fontSize],color:(m=(w=(e.vars||e).palette)==null||(w=w[t.color])==null?void 0:w.main)!=null?m:{action:(b=(e.vars||e).palette)==null||(b=b.action)==null?void 0:b.active,disabled:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.disabled,inherit:void 0}[t.color]}}),So=M.forwardRef(function(t,n){const r=Eo({props:t,name:"MuiSvgIcon"}),{children:o,className:s,color:i="inherit",component:l="svg",fontSize:c="medium",htmlColor:d,inheritViewBox:u=!1,titleAccess:m,viewBox:w="0 0 24 24"}=r,b=xe(r,up),y=M.isValidElement(o)&&o.type==="svg",f=O({},r,{color:i,component:l,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:u,viewBox:w,hasSvgAsChild:y}),h={};u||(h.viewBox=w);const E=pp(f);return a.jsxs(wp,O({as:l,className:ot(E.root,s),focusable:"false",color:d,"aria-hidden":m?void 0:!0,role:m?"img":void 0,ref:n},h,b,y&&o.props,{ownerState:f,children:[y?o.props.children:o,m?a.jsx("title",{children:m}):null]}))});process.env.NODE_ENV!=="production"&&(So.propTypes={children:p.node,classes:p.object,className:p.string,color:p.oneOfType([p.oneOf(["inherit","action","disabled","primary","secondary","error","info","success","warning"]),p.string]),component:p.elementType,fontSize:p.oneOfType([p.oneOf(["inherit","large","medium","small"]),p.string]),htmlColor:p.string,inheritViewBox:p.bool,shapeRendering:p.string,sx:p.oneOfType([p.arrayOf(p.oneOfType([p.func,p.object,p.bool])),p.func,p.object]),titleAccess:p.string,viewBox:p.string});So.muiName="SvgIcon";const Ts=So;function Ka(e,t){function n(r,o){return a.jsx(Ts,O({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return process.env.NODE_ENV!=="production"&&(n.displayName=`${t}Icon`),n.muiName=Ts.muiName,M.memo(M.forwardRef(n))}const fp={configure:e=>{process.env.NODE_ENV!=="production"&&console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),Fa.configure(e)}},mp=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ye,createChainedFunction:Uc,createSvgIcon:Ka,debounce:qc,deprecatedPropType:Hc,isMuiElement:Xc,ownerDocument:Hn,ownerWindow:Yc,requirePropFactory:Wc,setRef:Xn,unstable_ClassNameGenerator:fp,unstable_useEnhancedEffect:Lt,unstable_useId:Aa,unsupportedProp:Zc,useControlled:Ba,useEventCallback:Ur,useForkRef:xt,useIsFocusVisible:Va},Symbol.toStringTag,{value:"Module"})),hp=Ec(mp);var Cs;function gp(){return Cs||(Cs=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=hp}(Tr)),Tr}var bp=Sc;Object.defineProperty(po,"__esModule",{value:!0});var Ja=po.default=void 0,vp=bp(gp()),yp=a;Ja=po.default=(0,vp.default)((0,yp.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");function xp(e){return typeof e=="string"}function cn(e,t,n){return e===void 0||xp(e)?t:O({},t,{ownerState:O({},t.ownerState,n)})}const Np={disableDefaultClasses:!1},kp=M.createContext(Np);function Ep(e){const{disableDefaultClasses:t}=M.useContext(kp);return n=>t?"":e(n)}function Sp(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function Tp(e,t,n){return typeof e=="function"?e(t,n):e}function js(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Cp(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:s}=e;if(!t){const b=ot(n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),y=O({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),f=O({},n,o,r);return b.length>0&&(f.className=b),Object.keys(y).length>0&&(f.style=y),{props:f,internalRef:void 0}}const i=Sp(O({},o,r)),l=js(r),c=js(o),d=t(i),u=ot(d==null?void 0:d.className,n==null?void 0:n.className,s,o==null?void 0:o.className,r==null?void 0:r.className),m=O({},d==null?void 0:d.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),w=O({},d,n,c,l);return u.length>0&&(w.className=u),Object.keys(m).length>0&&(w.style=m),{props:w,internalRef:d.ref}}const jp=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Op(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:s=!1}=e,i=xe(e,jp),l=s?{}:Tp(r,o),{props:c,internalRef:d}=Cp(O({},i,{externalSlotProps:l})),u=xt(d,l==null?void 0:l.ref,(t=e.additionalProps)==null?void 0:t.ref);return cn(n,O({},c,{ref:u}),o)}const Za="base";function Rp(e){return`${Za}--${e}`}function Pp(e,t){return`${Za}-${e}-${t}`}function Qa(e,t){const n=za[t];return n?Rp(n):Pp(e,t)}function _p(e,t){const n={};return t.forEach(r=>{n[r]=Qa(e,r)}),n}function Ip(e){return typeof e=="function"?e():e}const Wn=M.forwardRef(function(t,n){const{children:r,container:o,disablePortal:s=!1}=t,[i,l]=M.useState(null),c=xt(M.isValidElement(r)?r.ref:null,n);if(Lt(()=>{s||l(Ip(o)||document.body)},[o,s]),Lt(()=>{if(i&&!s)return Xn(n,i),()=>{Xn(n,null)}},[n,i,s]),s){if(M.isValidElement(r)){const d={ref:c};return M.cloneElement(r,d)}return a.jsx(M.Fragment,{children:r})}return a.jsx(M.Fragment,{children:i&&dl.createPortal(r,i)})});process.env.NODE_ENV!=="production"&&(Wn.propTypes={children:p.node,container:p.oneOfType([bn,p.func]),disablePortal:p.bool});process.env.NODE_ENV!=="production"&&(Wn["propTypes"]=Ac(Wn.propTypes));var Te="top",Ve="bottom",Le="right",Ce="left",To="auto",Pn=[Te,Ve,Le,Ce],Ft="start",yn="end",$p="clippingParents",ei="viewport",rn="popper",Mp="reference",Os=Pn.reduce(function(e,t){return e.concat([t+"-"+Ft,t+"-"+yn])},[]),ti=[].concat(Pn,[To]).reduce(function(e,t){return e.concat([t,t+"-"+Ft,t+"-"+yn])},[]),Dp="beforeRead",Ap="read",Bp="afterRead",Vp="beforeMain",Lp="main",Fp="afterMain",zp="beforeWrite",Gp="write",Up="afterWrite",qp=[Dp,Ap,Bp,Vp,Lp,Fp,zp,Gp,Up];function We(e){return e?(e.nodeName||"").toLowerCase():null}function $e(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function kt(e){var t=$e(e).Element;return e instanceof t||e instanceof Element}function Be(e){var t=$e(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Co(e){if(typeof ShadowRoot>"u")return!1;var t=$e(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Hp(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},s=t.elements[n];!Be(s)||!We(s)||(Object.assign(s.style,r),Object.keys(o).forEach(function(i){var l=o[i];l===!1?s.removeAttribute(i):s.setAttribute(i,l===!0?"":l)}))})}function Xp(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],s=t.attributes[r]||{},i=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),l=i.reduce(function(c,d){return c[d]="",c},{});!Be(o)||!We(o)||(Object.assign(o.style,l),Object.keys(s).forEach(function(c){o.removeAttribute(c)}))})}}const Yp={name:"applyStyles",enabled:!0,phase:"write",fn:Hp,effect:Xp,requires:["computeStyles"]};function He(e){return e.split("-")[0]}var ht=Math.max,Kn=Math.min,zt=Math.round;function Hr(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ni(){return!/^((?!chrome|android).)*safari/i.test(Hr())}function Gt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,s=1;t&&Be(e)&&(o=e.offsetWidth>0&&zt(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&zt(r.height)/e.offsetHeight||1);var i=kt(e)?$e(e):window,l=i.visualViewport,c=!ni()&&n,d=(r.left+(c&&l?l.offsetLeft:0))/o,u=(r.top+(c&&l?l.offsetTop:0))/s,m=r.width/o,w=r.height/s;return{width:m,height:w,top:u,right:d+m,bottom:u+w,left:d,x:d,y:u}}function jo(e){var t=Gt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ri(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Co(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function tt(e){return $e(e).getComputedStyle(e)}function Wp(e){return["table","td","th"].indexOf(We(e))>=0}function it(e){return((kt(e)?e.ownerDocument:e.document)||window.document).documentElement}function hr(e){return We(e)==="html"?e:e.assignedSlot||e.parentNode||(Co(e)?e.host:null)||it(e)}function Rs(e){return!Be(e)||tt(e).position==="fixed"?null:e.offsetParent}function Kp(e){var t=/firefox/i.test(Hr()),n=/Trident/i.test(Hr());if(n&&Be(e)){var r=tt(e);if(r.position==="fixed")return null}var o=hr(e);for(Co(o)&&(o=o.host);Be(o)&&["html","body"].indexOf(We(o))<0;){var s=tt(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function _n(e){for(var t=$e(e),n=Rs(e);n&&Wp(n)&&tt(n).position==="static";)n=Rs(n);return n&&(We(n)==="html"||We(n)==="body"&&tt(n).position==="static")?t:n||Kp(e)||t}function Oo(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fn(e,t,n){return ht(e,Kn(t,n))}function Jp(e,t,n){var r=fn(e,t,n);return r>n?n:r}function oi(){return{top:0,right:0,bottom:0,left:0}}function si(e){return Object.assign({},oi(),e)}function ai(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Zp=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,si(typeof t!="number"?t:ai(t,Pn))};function Qp(e){var t,n=e.state,r=e.name,o=e.options,s=n.elements.arrow,i=n.modifiersData.popperOffsets,l=He(n.placement),c=Oo(l),d=[Ce,Le].indexOf(l)>=0,u=d?"height":"width";if(!(!s||!i)){var m=Zp(o.padding,n),w=jo(s),b=c==="y"?Te:Ce,y=c==="y"?Ve:Le,f=n.rects.reference[u]+n.rects.reference[c]-i[c]-n.rects.popper[u],h=i[c]-n.rects.reference[c],E=_n(s),I=E?c==="y"?E.clientHeight||0:E.clientWidth||0:0,j=f/2-h/2,k=m[b],g=I-w[u]-m[y],P=I/2-w[u]/2+j,V=fn(k,P,g),U=c;n.modifiersData[r]=(t={},t[U]=V,t.centerOffset=V-P,t)}}function ew(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ri(t.elements.popper,o)&&(t.elements.arrow=o))}const tw={name:"arrow",enabled:!0,phase:"main",fn:Qp,effect:ew,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ut(e){return e.split("-")[1]}var nw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function rw(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:zt(n*o)/o||0,y:zt(r*o)/o||0}}function Ps(e){var t,n=e.popper,r=e.popperRect,o=e.placement,s=e.variation,i=e.offsets,l=e.position,c=e.gpuAcceleration,d=e.adaptive,u=e.roundOffsets,m=e.isFixed,w=i.x,b=w===void 0?0:w,y=i.y,f=y===void 0?0:y,h=typeof u=="function"?u({x:b,y:f}):{x:b,y:f};b=h.x,f=h.y;var E=i.hasOwnProperty("x"),I=i.hasOwnProperty("y"),j=Ce,k=Te,g=window;if(d){var P=_n(n),V="clientHeight",U="clientWidth";if(P===$e(n)&&(P=it(n),tt(P).position!=="static"&&l==="absolute"&&(V="scrollHeight",U="scrollWidth")),P=P,o===Te||(o===Ce||o===Le)&&s===yn){k=Ve;var T=m&&P===g&&g.visualViewport?g.visualViewport.height:P[V];f-=T-r.height,f*=c?1:-1}if(o===Ce||(o===Te||o===Ve)&&s===yn){j=Le;var R=m&&P===g&&g.visualViewport?g.visualViewport.width:P[U];b-=R-r.width,b*=c?1:-1}}var N=Object.assign({position:l},d&&nw),D=u===!0?rw({x:b,y:f},$e(n)):{x:b,y:f};if(b=D.x,f=D.y,c){var $;return Object.assign({},N,($={},$[k]=I?"0":"",$[j]=E?"0":"",$.transform=(g.devicePixelRatio||1)<=1?"translate("+b+"px, "+f+"px)":"translate3d("+b+"px, "+f+"px, 0)",$))}return Object.assign({},N,(t={},t[k]=I?f+"px":"",t[j]=E?b+"px":"",t.transform="",t))}function ow(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,s=n.adaptive,i=s===void 0?!0:s,l=n.roundOffsets,c=l===void 0?!0:l,d={placement:He(t.placement),variation:Ut(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ps(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ps(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const sw={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ow,data:{}};var Vn={passive:!0};function aw(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,s=o===void 0?!0:o,i=r.resize,l=i===void 0?!0:i,c=$e(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach(function(u){u.addEventListener("scroll",n.update,Vn)}),l&&c.addEventListener("resize",n.update,Vn),function(){s&&d.forEach(function(u){u.removeEventListener("scroll",n.update,Vn)}),l&&c.removeEventListener("resize",n.update,Vn)}}const iw={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:aw,data:{}};var lw={left:"right",right:"left",bottom:"top",top:"bottom"};function Un(e){return e.replace(/left|right|bottom|top/g,function(t){return lw[t]})}var cw={start:"end",end:"start"};function _s(e){return e.replace(/start|end/g,function(t){return cw[t]})}function Ro(e){var t=$e(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Po(e){return Gt(it(e)).left+Ro(e).scrollLeft}function dw(e,t){var n=$e(e),r=it(e),o=n.visualViewport,s=r.clientWidth,i=r.clientHeight,l=0,c=0;if(o){s=o.width,i=o.height;var d=ni();(d||!d&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:s,height:i,x:l+Po(e),y:c}}function uw(e){var t,n=it(e),r=Ro(e),o=(t=e.ownerDocument)==null?void 0:t.body,s=ht(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=ht(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+Po(e),c=-r.scrollTop;return tt(o||n).direction==="rtl"&&(l+=ht(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:i,x:l,y:c}}function _o(e){var t=tt(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ii(e){return["html","body","#document"].indexOf(We(e))>=0?e.ownerDocument.body:Be(e)&&_o(e)?e:ii(hr(e))}function mn(e,t){var n;t===void 0&&(t=[]);var r=ii(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),s=$e(r),i=o?[s].concat(s.visualViewport||[],_o(r)?r:[]):r,l=t.concat(i);return o?l:l.concat(mn(hr(i)))}function Xr(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pw(e,t){var n=Gt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Is(e,t,n){return t===ei?Xr(dw(e,n)):kt(t)?pw(t,n):Xr(uw(it(e)))}function ww(e){var t=mn(hr(e)),n=["absolute","fixed"].indexOf(tt(e).position)>=0,r=n&&Be(e)?_n(e):e;return kt(r)?t.filter(function(o){return kt(o)&&ri(o,r)&&We(o)!=="body"}):[]}function fw(e,t,n,r){var o=t==="clippingParents"?ww(e):[].concat(t),s=[].concat(o,[n]),i=s[0],l=s.reduce(function(c,d){var u=Is(e,d,r);return c.top=ht(u.top,c.top),c.right=Kn(u.right,c.right),c.bottom=Kn(u.bottom,c.bottom),c.left=ht(u.left,c.left),c},Is(e,i,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function li(e){var t=e.reference,n=e.element,r=e.placement,o=r?He(r):null,s=r?Ut(r):null,i=t.x+t.width/2-n.width/2,l=t.y+t.height/2-n.height/2,c;switch(o){case Te:c={x:i,y:t.y-n.height};break;case Ve:c={x:i,y:t.y+t.height};break;case Le:c={x:t.x+t.width,y:l};break;case Ce:c={x:t.x-n.width,y:l};break;default:c={x:t.x,y:t.y}}var d=o?Oo(o):null;if(d!=null){var u=d==="y"?"height":"width";switch(s){case Ft:c[d]=c[d]-(t[u]/2-n[u]/2);break;case yn:c[d]=c[d]+(t[u]/2-n[u]/2);break}}return c}function xn(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,s=n.strategy,i=s===void 0?e.strategy:s,l=n.boundary,c=l===void 0?$p:l,d=n.rootBoundary,u=d===void 0?ei:d,m=n.elementContext,w=m===void 0?rn:m,b=n.altBoundary,y=b===void 0?!1:b,f=n.padding,h=f===void 0?0:f,E=si(typeof h!="number"?h:ai(h,Pn)),I=w===rn?Mp:rn,j=e.rects.popper,k=e.elements[y?I:w],g=fw(kt(k)?k:k.contextElement||it(e.elements.popper),c,u,i),P=Gt(e.elements.reference),V=li({reference:P,element:j,strategy:"absolute",placement:o}),U=Xr(Object.assign({},j,V)),T=w===rn?U:P,R={top:g.top-T.top+E.top,bottom:T.bottom-g.bottom+E.bottom,left:g.left-T.left+E.left,right:T.right-g.right+E.right},N=e.modifiersData.offset;if(w===rn&&N){var D=N[o];Object.keys(R).forEach(function($){var J=[Le,Ve].indexOf($)>=0?1:-1,Y=[Te,Ve].indexOf($)>=0?"y":"x";R[$]+=D[Y]*J})}return R}function mw(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,s=n.rootBoundary,i=n.padding,l=n.flipVariations,c=n.allowedAutoPlacements,d=c===void 0?ti:c,u=Ut(r),m=u?l?Os:Os.filter(function(y){return Ut(y)===u}):Pn,w=m.filter(function(y){return d.indexOf(y)>=0});w.length===0&&(w=m);var b=w.reduce(function(y,f){return y[f]=xn(e,{placement:f,boundary:o,rootBoundary:s,padding:i})[He(f)],y},{});return Object.keys(b).sort(function(y,f){return b[y]-b[f]})}function hw(e){if(He(e)===To)return[];var t=Un(e);return[_s(e),t,_s(t)]}function gw(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,s=o===void 0?!0:o,i=n.altAxis,l=i===void 0?!0:i,c=n.fallbackPlacements,d=n.padding,u=n.boundary,m=n.rootBoundary,w=n.altBoundary,b=n.flipVariations,y=b===void 0?!0:b,f=n.allowedAutoPlacements,h=t.options.placement,E=He(h),I=E===h,j=c||(I||!y?[Un(h)]:hw(h)),k=[h].concat(j).reduce(function(B,X){return B.concat(He(X)===To?mw(t,{placement:X,boundary:u,rootBoundary:m,padding:d,flipVariations:y,allowedAutoPlacements:f}):X)},[]),g=t.rects.reference,P=t.rects.popper,V=new Map,U=!0,T=k[0],R=0;R<k.length;R++){var N=k[R],D=He(N),$=Ut(N)===Ft,J=[Te,Ve].indexOf(D)>=0,Y=J?"width":"height",z=xn(t,{placement:N,boundary:u,rootBoundary:m,altBoundary:w,padding:d}),ee=J?$?Le:Ce:$?Ve:Te;g[Y]>P[Y]&&(ee=Un(ee));var ae=Un(ee),oe=[];if(s&&oe.push(z[D]<=0),l&&oe.push(z[ee]<=0,z[ae]<=0),oe.every(function(B){return B})){T=N,U=!1;break}V.set(N,oe)}if(U)for(var x=y?3:1,C=function(X){var q=k.find(function(H){var G=V.get(H);if(G)return G.slice(0,X).every(function(K){return K})});if(q)return T=q,"break"},L=x;L>0;L--){var F=C(L);if(F==="break")break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}}const bw={name:"flip",enabled:!0,phase:"main",fn:gw,requiresIfExists:["offset"],data:{_skip:!1}};function $s(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ms(e){return[Te,Le,Ve,Ce].some(function(t){return e[t]>=0})}function vw(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,s=t.modifiersData.preventOverflow,i=xn(t,{elementContext:"reference"}),l=xn(t,{altBoundary:!0}),c=$s(i,r),d=$s(l,o,s),u=Ms(c),m=Ms(d);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:u,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":m})}const yw={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:vw};function xw(e,t,n){var r=He(e),o=[Ce,Te].indexOf(r)>=0?-1:1,s=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=s[0],l=s[1];return i=i||0,l=(l||0)*o,[Ce,Le].indexOf(r)>=0?{x:l,y:i}:{x:i,y:l}}function Nw(e){var t=e.state,n=e.options,r=e.name,o=n.offset,s=o===void 0?[0,0]:o,i=ti.reduce(function(u,m){return u[m]=xw(m,t.rects,s),u},{}),l=i[t.placement],c=l.x,d=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=i}const kw={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Nw};function Ew(e){var t=e.state,n=e.name;t.modifiersData[n]=li({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Sw={name:"popperOffsets",enabled:!0,phase:"read",fn:Ew,data:{}};function Tw(e){return e==="x"?"y":"x"}function Cw(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=o===void 0?!0:o,i=n.altAxis,l=i===void 0?!1:i,c=n.boundary,d=n.rootBoundary,u=n.altBoundary,m=n.padding,w=n.tether,b=w===void 0?!0:w,y=n.tetherOffset,f=y===void 0?0:y,h=xn(t,{boundary:c,rootBoundary:d,padding:m,altBoundary:u}),E=He(t.placement),I=Ut(t.placement),j=!I,k=Oo(E),g=Tw(k),P=t.modifiersData.popperOffsets,V=t.rects.reference,U=t.rects.popper,T=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,R=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(P){if(s){var $,J=k==="y"?Te:Ce,Y=k==="y"?Ve:Le,z=k==="y"?"height":"width",ee=P[k],ae=ee+h[J],oe=ee-h[Y],x=b?-U[z]/2:0,C=I===Ft?V[z]:U[z],L=I===Ft?-U[z]:-V[z],F=t.elements.arrow,B=b&&F?jo(F):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:oi(),q=X[J],H=X[Y],G=fn(0,V[z],B[z]),K=j?V[z]/2-x-G-q-R.mainAxis:C-G-q-R.mainAxis,Z=j?-V[z]/2+x+G+H+R.mainAxis:L+G+H+R.mainAxis,ue=t.elements.arrow&&_n(t.elements.arrow),_=ue?k==="y"?ue.clientTop||0:ue.clientLeft||0:0,ye=($=N==null?void 0:N[k])!=null?$:0,A=ee+K-ye-_,ve=ee+Z-ye,ze=fn(b?Kn(ae,A):ae,ee,b?ht(oe,ve):oe);P[k]=ze,D[k]=ze-ee}if(l){var lt,Ee=k==="x"?Te:Ce,In=k==="x"?Ve:Le,Ge=P[g],Et=g==="y"?"height":"width",ct=Ge+h[Ee],St=Ge-h[In],Tt=[Te,Ce].indexOf(E)!==-1,Ct=(lt=N==null?void 0:N[g])!=null?lt:0,dt=Tt?ct:Ge-V[Et]-U[Et]-Ct+R.altAxis,Wt=Tt?Ge+V[Et]+U[Et]-Ct-R.altAxis:St,$n=b&&Tt?Jp(dt,Ge,Wt):fn(b?dt:ct,Ge,b?Wt:St);P[g]=$n,D[g]=$n-Ge}t.modifiersData[r]=D}}const jw={name:"preventOverflow",enabled:!0,phase:"main",fn:Cw,requiresIfExists:["offset"]};function Ow(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Rw(e){return e===$e(e)||!Be(e)?Ro(e):Ow(e)}function Pw(e){var t=e.getBoundingClientRect(),n=zt(t.width)/e.offsetWidth||1,r=zt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function _w(e,t,n){n===void 0&&(n=!1);var r=Be(t),o=Be(t)&&Pw(t),s=it(t),i=Gt(e,o,n),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((We(t)!=="body"||_o(s))&&(l=Rw(t)),Be(t)?(c=Gt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=Po(s))),{x:i.left+l.scrollLeft-c.x,y:i.top+l.scrollTop-c.y,width:i.width,height:i.height}}function Iw(e){var t=new Map,n=new Set,r=[];e.forEach(function(s){t.set(s.name,s)});function o(s){n.add(s.name);var i=[].concat(s.requires||[],s.requiresIfExists||[]);i.forEach(function(l){if(!n.has(l)){var c=t.get(l);c&&o(c)}}),r.push(s)}return e.forEach(function(s){n.has(s.name)||o(s)}),r}function $w(e){var t=Iw(e);return qp.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Mw(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Dw(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var Ds={placement:"bottom",modifiers:[],strategy:"absolute"};function As(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Aw(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,s=o===void 0?Ds:o;return function(l,c,d){d===void 0&&(d=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ds,s),modifiersData:{},elements:{reference:l,popper:c},attributes:{},styles:{}},m=[],w=!1,b={state:u,setOptions:function(E){var I=typeof E=="function"?E(u.options):E;f(),u.options=Object.assign({},s,u.options,I),u.scrollParents={reference:kt(l)?mn(l):l.contextElement?mn(l.contextElement):[],popper:mn(c)};var j=$w(Dw([].concat(r,u.options.modifiers)));return u.orderedModifiers=j.filter(function(k){return k.enabled}),y(),b.update()},forceUpdate:function(){if(!w){var E=u.elements,I=E.reference,j=E.popper;if(As(I,j)){u.rects={reference:_w(I,_n(j),u.options.strategy==="fixed"),popper:jo(j)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(R){return u.modifiersData[R.name]=Object.assign({},R.data)});for(var k=0;k<u.orderedModifiers.length;k++){if(u.reset===!0){u.reset=!1,k=-1;continue}var g=u.orderedModifiers[k],P=g.fn,V=g.options,U=V===void 0?{}:V,T=g.name;typeof P=="function"&&(u=P({state:u,options:U,name:T,instance:b})||u)}}}},update:Mw(function(){return new Promise(function(h){b.forceUpdate(),h(u)})}),destroy:function(){f(),w=!0}};if(!As(l,c))return b;b.setOptions(d).then(function(h){!w&&d.onFirstUpdate&&d.onFirstUpdate(h)});function y(){u.orderedModifiers.forEach(function(h){var E=h.name,I=h.options,j=I===void 0?{}:I,k=h.effect;if(typeof k=="function"){var g=k({state:u,name:E,instance:b,options:j}),P=function(){};m.push(g||P)}})}function f(){m.forEach(function(h){return h()}),m=[]}return b}}var Bw=[iw,Sw,sw,Yp,kw,bw,jw,tw,yw],Vw=Aw({defaultModifiers:Bw});const ci="Popper";function Lw(e){return Qa(ci,e)}_p(ci,["root"]);const Fw=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],zw=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Gw(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Jn(e){return typeof e=="function"?e():e}function gr(e){return e.nodeType!==void 0}function Uw(e){return!gr(e)}const qw=()=>mo({root:["root"]},Ep(Lw)),Hw={},Xw=M.forwardRef(function(t,n){var r;const{anchorEl:o,children:s,direction:i,disablePortal:l,modifiers:c,open:d,placement:u,popperOptions:m,popperRef:w,slotProps:b={},slots:y={},TransitionProps:f}=t,h=xe(t,Fw),E=M.useRef(null),I=xt(E,n),j=M.useRef(null),k=xt(j,w),g=M.useRef(k);Lt(()=>{g.current=k},[k]),M.useImperativeHandle(w,()=>j.current,[]);const P=Gw(u,i),[V,U]=M.useState(P),[T,R]=M.useState(Jn(o));M.useEffect(()=>{j.current&&j.current.forceUpdate()}),M.useEffect(()=>{o&&R(Jn(o))},[o]),Lt(()=>{if(!T||!d)return;const Y=ae=>{U(ae.placement)};if(process.env.NODE_ENV!=="production"&&T&&gr(T)&&T.nodeType===1){const ae=T.getBoundingClientRect();process.env.NODE_ENV!=="test"&&ae.top===0&&ae.left===0&&ae.right===0&&ae.bottom===0&&console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}let z=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:ae})=>{Y(ae)}}];c!=null&&(z=z.concat(c)),m&&m.modifiers!=null&&(z=z.concat(m.modifiers));const ee=Vw(T,E.current,O({placement:P},m,{modifiers:z}));return g.current(ee),()=>{ee.destroy(),g.current(null)}},[T,l,c,d,m,P]);const N={placement:V};f!==null&&(N.TransitionProps=f);const D=qw(),$=(r=y.root)!=null?r:"div",J=Op({elementType:$,externalSlotProps:b.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:I},ownerState:t,className:D.root});return a.jsx($,O({},J,{children:typeof s=="function"?s(N):s}))}),di=M.forwardRef(function(t,n){const{anchorEl:r,children:o,container:s,direction:i="ltr",disablePortal:l=!1,keepMounted:c=!1,modifiers:d,open:u,placement:m="bottom",popperOptions:w=Hw,popperRef:b,style:y,transition:f=!1,slotProps:h={},slots:E={}}=t,I=xe(t,zw),[j,k]=M.useState(!0),g=()=>{k(!1)},P=()=>{k(!0)};if(!c&&!u&&(!f||j))return null;let V;if(s)V=s;else if(r){const R=Jn(r);V=R&&gr(R)?Hn(R).body:Hn(null).body}const U=!u&&c&&(!f||j)?"none":void 0,T=f?{in:u,onEnter:g,onExited:P}:void 0;return a.jsx(Wn,{disablePortal:l,container:V,children:a.jsx(Xw,O({anchorEl:r,direction:i,disablePortal:l,modifiers:d,ref:n,open:f?!j:u,placement:m,popperOptions:w,popperRef:b,slotProps:h,slots:E},I,{style:O({position:"fixed",top:0,left:0,display:U},y),TransitionProps:T,children:o}))})});process.env.NODE_ENV!=="production"&&(di.propTypes={anchorEl:wo(p.oneOfType([bn,p.object,p.func]),e=>{if(e.open){const t=Jn(e.anchorEl);if(t&&gr(t)&&t.nodeType===1){const n=t.getBoundingClientRect();if(process.env.NODE_ENV!=="test"&&n.top===0&&n.left===0&&n.right===0&&n.bottom===0)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","The anchor element should be part of the document layout.","Make sure the element is present in the document or that it's not display none."].join(`
`))}else if(!t||typeof t.getBoundingClientRect!="function"||Uw(t)&&t.contextElement!=null&&t.contextElement.nodeType!==1)return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.","It should be an HTML element instance or a virtualElement ","(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`))}return null}),children:p.oneOfType([p.node,p.func]),container:p.oneOfType([bn,p.func]),direction:p.oneOf(["ltr","rtl"]),disablePortal:p.bool,keepMounted:p.bool,modifiers:p.arrayOf(p.shape({data:p.object,effect:p.func,enabled:p.bool,fn:p.func,name:p.any,options:p.object,phase:p.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:p.arrayOf(p.string),requiresIfExists:p.arrayOf(p.string)})),open:p.bool.isRequired,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:p.shape({modifiers:p.array,onFirstUpdate:p.func,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:p.oneOf(["absolute","fixed"])}),popperRef:Da,slotProps:p.shape({root:p.oneOfType([p.func,p.object])}),slots:p.shape({root:p.elementType}),transition:p.bool});function ui(){const e=Ya(No);return process.env.NODE_ENV!=="production"&&M.useDebugValue(e),e[ko]||e}function Yr(e,t){return Yr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Yr(e,t)}function Yw(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Yr(e,t)}const Bs={disabled:!1};var Ww=process.env.NODE_ENV!=="production"?p.oneOfType([p.number,p.shape({enter:p.number,exit:p.number,appear:p.number}).isRequired]):null;process.env.NODE_ENV!=="production"&&p.oneOfType([p.string,p.shape({enter:p.string,exit:p.string,active:p.string}),p.shape({enter:p.string,enterDone:p.string,enterActive:p.string,exit:p.string,exitDone:p.string,exitActive:p.string})]);const pi=v.createContext(null);var Kw=function(t){return t.scrollTop},dn="unmounted",wt="exited",ft="entering",$t="entered",Wr="exiting",nt=function(e){Yw(t,e);function t(r,o){var s;s=e.call(this,r,o)||this;var i=o,l=i&&!i.isMounting?r.enter:r.appear,c;return s.appearStatus=null,r.in?l?(c=wt,s.appearStatus=ft):c=$t:r.unmountOnExit||r.mountOnEnter?c=dn:c=wt,s.state={status:c},s.nextCallback=null,s}t.getDerivedStateFromProps=function(o,s){var i=o.in;return i&&s.status===dn?{status:wt}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var s=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==ft&&i!==$t&&(s=ft):(i===ft||i===$t)&&(s=Wr)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,s,i,l;return s=i=l=o,o!=null&&typeof o!="number"&&(s=o.exit,i=o.enter,l=o.appear!==void 0?o.appear:i),{exit:s,enter:i,appear:l}},n.updateStatus=function(o,s){if(o===void 0&&(o=!1),s!==null)if(this.cancelNextCallback(),s===ft){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:sn.findDOMNode(this);i&&Kw(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===wt&&this.setState({status:dn})},n.performEnter=function(o){var s=this,i=this.props.enter,l=this.context?this.context.isMounting:o,c=this.props.nodeRef?[l]:[sn.findDOMNode(this),l],d=c[0],u=c[1],m=this.getTimeouts(),w=l?m.appear:m.enter;if(!o&&!i||Bs.disabled){this.safeSetState({status:$t},function(){s.props.onEntered(d)});return}this.props.onEnter(d,u),this.safeSetState({status:ft},function(){s.props.onEntering(d,u),s.onTransitionEnd(w,function(){s.safeSetState({status:$t},function(){s.props.onEntered(d,u)})})})},n.performExit=function(){var o=this,s=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:sn.findDOMNode(this);if(!s||Bs.disabled){this.safeSetState({status:wt},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Wr},function(){o.props.onExiting(l),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:wt},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,s){s=this.setNextCallback(s),this.setState(o,s)},n.setNextCallback=function(o){var s=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,s.nextCallback=null,o(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(o,s){this.setNextCallback(s);var i=this.props.nodeRef?this.props.nodeRef.current:sn.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],d=c[0],u=c[1];this.props.addEndListener(d,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===dn)return null;var s=this.props,i=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var l=xe(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return v.createElement(pi.Provider,{value:null},typeof i=="function"?i(o,l):v.cloneElement(v.Children.only(i),l))},t}(v.Component);nt.contextType=pi;nt.propTypes=process.env.NODE_ENV!=="production"?{nodeRef:p.shape({current:typeof Element>"u"?p.any:function(e,t,n,r,o,s){var i=e[t];return p.instanceOf(i&&"ownerDocument"in i?i.ownerDocument.defaultView.Element:Element)(e,t,n,r,o,s)}}),children:p.oneOfType([p.func.isRequired,p.element.isRequired]).isRequired,in:p.bool,mountOnEnter:p.bool,unmountOnExit:p.bool,appear:p.bool,enter:p.bool,exit:p.bool,timeout:function(t){var n=Ww;t.addEndListener||(n=n.isRequired);for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return n.apply(void 0,[t].concat(o))},addEndListener:p.func,onEnter:p.func,onEntering:p.func,onEntered:p.func,onExit:p.func,onExiting:p.func,onExited:p.func}:{};function It(){}nt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:It,onEntering:It,onEntered:It,onExit:It,onExiting:It,onExited:It};nt.UNMOUNTED=dn;nt.EXITED=wt;nt.ENTERING=ft;nt.ENTERED=$t;nt.EXITING=Wr;const Jw=nt,Zw=e=>e.scrollTop;function Vs(e,t){var n,r;const{timeout:o,easing:s,style:i={}}=e;return{duration:(n=i.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=i.transitionTimingFunction)!=null?r:typeof s=="object"?s[t.mode]:s,delay:i.transitionDelay}}const Qw=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Kr(e){return`scale(${e}, ${e**2})`}const ef={entering:{opacity:1,transform:Kr(1)},entered:{opacity:1,transform:"none"}},Mr=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Io=M.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:s,easing:i,in:l,onEnter:c,onEntered:d,onEntering:u,onExit:m,onExited:w,onExiting:b,style:y,timeout:f="auto",TransitionComponent:h=Jw}=t,E=xe(t,Qw),I=ln(),j=M.useRef(),k=ui(),g=M.useRef(null),P=xt(g,s.ref,n),V=Y=>z=>{if(Y){const ee=g.current;z===void 0?Y(ee):Y(ee,z)}},U=V(u),T=V((Y,z)=>{Zw(Y);const{duration:ee,delay:ae,easing:oe}=Vs({style:y,timeout:f,easing:i},{mode:"enter"});let x;f==="auto"?(x=k.transitions.getAutoHeightDuration(Y.clientHeight),j.current=x):x=ee,Y.style.transition=[k.transitions.create("opacity",{duration:x,delay:ae}),k.transitions.create("transform",{duration:Mr?x:x*.666,delay:ae,easing:oe})].join(","),c&&c(Y,z)}),R=V(d),N=V(b),D=V(Y=>{const{duration:z,delay:ee,easing:ae}=Vs({style:y,timeout:f,easing:i},{mode:"exit"});let oe;f==="auto"?(oe=k.transitions.getAutoHeightDuration(Y.clientHeight),j.current=oe):oe=z,Y.style.transition=[k.transitions.create("opacity",{duration:oe,delay:ee}),k.transitions.create("transform",{duration:Mr?oe:oe*.666,delay:Mr?ee:ee||oe*.333,easing:ae})].join(","),Y.style.opacity=0,Y.style.transform=Kr(.75),m&&m(Y)}),$=V(w),J=Y=>{f==="auto"&&I.start(j.current||0,Y),r&&r(g.current,Y)};return a.jsx(h,O({appear:o,in:l,nodeRef:g,onEnter:T,onEntered:R,onEntering:U,onExit:D,onExited:$,onExiting:N,addEndListener:J,timeout:f==="auto"?null:f},E,{children:(Y,z)=>M.cloneElement(s,O({style:O({opacity:0,transform:Kr(.75),visibility:Y==="exited"&&!l?"hidden":void 0},ef[Y],y,s.props.style),ref:P},z))}))});process.env.NODE_ENV!=="production"&&(Io.propTypes={addEndListener:p.func,appear:p.bool,children:$a.isRequired,easing:p.oneOfType([p.shape({enter:p.string,exit:p.string}),p.string]),in:p.bool,onEnter:p.func,onEntered:p.func,onEntering:p.func,onExit:p.func,onExited:p.func,onExiting:p.func,style:p.object,timeout:p.oneOfType([p.oneOf(["auto"]),p.number,p.shape({appear:p.number,enter:p.number,exit:p.number})])});Io.muiSupportAuto=!0;const Ls=Io,tf=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],nf=Rn(di,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),wi=M.forwardRef(function(t,n){var r;const o=Xa(),s=Eo({props:t,name:"MuiPopper"}),{anchorEl:i,component:l,components:c,componentsProps:d,container:u,disablePortal:m,keepMounted:w,modifiers:b,open:y,placement:f,popperOptions:h,popperRef:E,transition:I,slots:j,slotProps:k}=s,g=xe(s,tf),P=(r=j==null?void 0:j.root)!=null?r:c==null?void 0:c.Root,V=O({anchorEl:i,container:u,disablePortal:m,keepMounted:w,modifiers:b,open:y,placement:f,popperOptions:h,popperRef:E,transition:I},g);return a.jsx(nf,O({as:l,direction:o==null?void 0:o.direction,slots:{root:P},slotProps:k??d},V,{ref:n}))});process.env.NODE_ENV!=="production"&&(wi.propTypes={anchorEl:p.oneOfType([bn,p.object,p.func]),children:p.oneOfType([p.node,p.func]),component:p.elementType,components:p.shape({Root:p.elementType}),componentsProps:p.shape({root:p.oneOfType([p.func,p.object])}),container:p.oneOfType([bn,p.func]),disablePortal:p.bool,keepMounted:p.bool,modifiers:p.arrayOf(p.shape({data:p.object,effect:p.func,enabled:p.bool,fn:p.func,name:p.any,options:p.object,phase:p.oneOf(["afterMain","afterRead","afterWrite","beforeMain","beforeRead","beforeWrite","main","read","write"]),requires:p.arrayOf(p.string),requiresIfExists:p.arrayOf(p.string)})),open:p.bool.isRequired,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),popperOptions:p.shape({modifiers:p.array,onFirstUpdate:p.func,placement:p.oneOf(["auto-end","auto-start","auto","bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),strategy:p.oneOf(["absolute","fixed"])}),popperRef:Da,slotProps:p.shape({root:p.oneOfType([p.func,p.object])}),slots:p.shape({root:p.elementType}),sx:p.oneOfType([p.arrayOf(p.oneOfType([p.func,p.object,p.bool])),p.func,p.object]),transition:p.bool});const fi=wi;function rf(e){return ar("MuiTooltip",e)}const of=Ga("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),st=of,sf=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function af(e){return Math.round(e*1e5)/1e5}const lf=e=>{const{classes:t,disableInteractive:n,arrow:r,touch:o,placement:s}=e,i={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch",`tooltipPlacement${Ye(s.split("-")[0])}`],arrow:["arrow"]};return mo(i,rf,t)},cf=Rn(fi,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})(({theme:e,ownerState:t,open:n})=>O({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${st.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${st.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${st.arrow}`]:O({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${st.arrow}`]:O({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),df=Rn("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${Ye(n.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>O({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Wa(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${af(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${st.popper}[data-popper-placement*="left"] &`]:O({transformOrigin:"right center"},t.isRtl?O({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):O({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${st.popper}[data-popper-placement*="right"] &`]:O({transformOrigin:"left center"},t.isRtl?O({marginRight:"14px"},t.touch&&{marginRight:"24px"}):O({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${st.popper}[data-popper-placement*="top"] &`]:O({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${st.popper}[data-popper-placement*="bottom"] &`]:O({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),uf=Rn("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Wa(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Ln=!1;const Fs=new Cn;let on={x:0,y:0};function Fn(e,t){return n=>{t&&t(n),e(n)}}const mi=M.forwardRef(function(t,n){var r,o,s,i,l,c,d,u,m,w,b,y,f,h,E,I,j,k,g;const P=Eo({props:t,name:"MuiTooltip"}),{arrow:V=!1,children:U,components:T={},componentsProps:R={},describeChild:N=!1,disableFocusListener:D=!1,disableHoverListener:$=!1,disableInteractive:J=!1,disableTouchListener:Y=!1,enterDelay:z=100,enterNextDelay:ee=0,enterTouchDelay:ae=700,followCursor:oe=!1,id:x,leaveDelay:C=0,leaveTouchDelay:L=1500,onClose:F,onOpen:B,open:X,placement:q="bottom",PopperComponent:H,PopperProps:G={},slotProps:K={},slots:Z={},title:ue,TransitionComponent:_=Ls,TransitionProps:ye}=P,A=xe(P,sf),ve=M.isValidElement(U)?U:a.jsx("span",{children:U}),ze=ui(),lt=ze.direction==="rtl",[Ee,In]=M.useState(),[Ge,Et]=M.useState(null),ct=M.useRef(!1),St=J||oe,Tt=ln(),Ct=ln(),dt=ln(),Wt=ln(),[$n,Mo]=Ba({controlled:X,default:!1,name:"Tooltip",state:"open"});let Ke=$n;if(process.env.NODE_ENV!=="production"){const{current:Q}=M.useRef(X!==void 0);M.useEffect(()=>{Ee&&Ee.disabled&&!Q&&ue!==""&&Ee.tagName.toLowerCase()==="button"&&console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.","A disabled element does not fire events.","Tooltip needs to listen to the child element's events to display the title.","","Add a simple wrapper element, such as a `span`."].join(`
`))},[ue,Ee,Q])}const br=Aa(x),Kt=M.useRef(),Mn=Ur(()=>{Kt.current!==void 0&&(document.body.style.WebkitUserSelect=Kt.current,Kt.current=void 0),Wt.clear()});M.useEffect(()=>Mn,[Mn]);const Do=Q=>{Fs.clear(),Ln=!0,Mo(!0),B&&!Ke&&B(Q)},Dn=Ur(Q=>{Fs.start(800+C,()=>{Ln=!1}),Mo(!1),F&&Ke&&F(Q),Tt.start(ze.transitions.duration.shortest,()=>{ct.current=!1})}),vr=Q=>{ct.current&&Q.type!=="touchstart"||(Ee&&Ee.removeAttribute("title"),Ct.clear(),dt.clear(),z||Ln&&ee?Ct.start(Ln?ee:z,()=>{Do(Q)}):Do(Q))},Ao=Q=>{Ct.clear(),dt.start(C,()=>{Dn(Q)})},{isFocusVisibleRef:Bo,onBlur:Ai,onFocus:Bi,ref:Vi}=Va(),[,Vo]=M.useState(!1),Lo=Q=>{Ai(Q),Bo.current===!1&&(Vo(!1),Ao(Q))},Fo=Q=>{Ee||In(Q.currentTarget),Bi(Q),Bo.current===!0&&(Vo(!0),vr(Q))},zo=Q=>{ct.current=!0;const Re=ve.props;Re.onTouchStart&&Re.onTouchStart(Q)},Go=vr,Uo=Ao,Li=Q=>{zo(Q),dt.clear(),Tt.clear(),Mn(),Kt.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Wt.start(ae,()=>{document.body.style.WebkitUserSelect=Kt.current,vr(Q)})},Fi=Q=>{ve.props.onTouchEnd&&ve.props.onTouchEnd(Q),Mn(),dt.start(L,()=>{Dn(Q)})};M.useEffect(()=>{if(!Ke)return;function Q(Re){(Re.key==="Escape"||Re.key==="Esc")&&Dn(Re)}return document.addEventListener("keydown",Q),()=>{document.removeEventListener("keydown",Q)}},[Dn,Ke]);const zi=xt(ve.ref,Vi,In,n);!ue&&ue!==0&&(Ke=!1);const yr=M.useRef(),Gi=Q=>{const Re=ve.props;Re.onMouseMove&&Re.onMouseMove(Q),on={x:Q.clientX,y:Q.clientY},yr.current&&yr.current.update()},Jt={},xr=typeof ue=="string";N?(Jt.title=!Ke&&xr&&!$?ue:null,Jt["aria-describedby"]=Ke?br:null):(Jt["aria-label"]=xr?ue:null,Jt["aria-labelledby"]=Ke&&!xr?br:null);const Me=O({},Jt,A,ve.props,{className:ot(A.className,ve.props.className),onTouchStart:zo,ref:zi},oe?{onMouseMove:Gi}:{});process.env.NODE_ENV!=="production"&&(Me["data-mui-internal-clone-element"]=!0,M.useEffect(()=>{Ee&&!Ee.getAttribute("data-mui-internal-clone-element")&&console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.","Please make sure that props are spread on the same element that the ref is applied to."].join(`
`))},[Ee]));const Zt={};Y||(Me.onTouchStart=Li,Me.onTouchEnd=Fi),$||(Me.onMouseOver=Fn(Go,Me.onMouseOver),Me.onMouseLeave=Fn(Uo,Me.onMouseLeave),St||(Zt.onMouseOver=Go,Zt.onMouseLeave=Uo)),D||(Me.onFocus=Fn(Fo,Me.onFocus),Me.onBlur=Fn(Lo,Me.onBlur),St||(Zt.onFocus=Fo,Zt.onBlur=Lo)),process.env.NODE_ENV!=="production"&&ve.props.title&&console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.",`Remove this title prop \`${ve.props.title}\` or the Tooltip component.`].join(`
`));const Ui=M.useMemo(()=>{var Q;let Re=[{name:"arrow",enabled:!!Ge,options:{element:Ge,padding:4}}];return(Q=G.popperOptions)!=null&&Q.modifiers&&(Re=Re.concat(G.popperOptions.modifiers)),O({},G.popperOptions,{modifiers:Re})},[Ge,G]),Qt=O({},P,{isRtl:lt,arrow:V,disableInteractive:St,placement:q,PopperComponentProp:H,touch:ct.current}),Nr=lf(Qt),qo=(r=(o=Z.popper)!=null?o:T.Popper)!=null?r:cf,Ho=(s=(i=(l=Z.transition)!=null?l:T.Transition)!=null?i:_)!=null?s:Ls,Xo=(c=(d=Z.tooltip)!=null?d:T.Tooltip)!=null?c:df,Yo=(u=(m=Z.arrow)!=null?m:T.Arrow)!=null?u:uf,qi=cn(qo,O({},G,(w=K.popper)!=null?w:R.popper,{className:ot(Nr.popper,G==null?void 0:G.className,(b=(y=K.popper)!=null?y:R.popper)==null?void 0:b.className)}),Qt),Hi=cn(Ho,O({},ye,(f=K.transition)!=null?f:R.transition),Qt),Xi=cn(Xo,O({},(h=K.tooltip)!=null?h:R.tooltip,{className:ot(Nr.tooltip,(E=(I=K.tooltip)!=null?I:R.tooltip)==null?void 0:E.className)}),Qt),Yi=cn(Yo,O({},(j=K.arrow)!=null?j:R.arrow,{className:ot(Nr.arrow,(k=(g=K.arrow)!=null?g:R.arrow)==null?void 0:k.className)}),Qt);return a.jsxs(M.Fragment,{children:[M.cloneElement(ve,Me),a.jsx(qo,O({as:H??fi,placement:q,anchorEl:oe?{getBoundingClientRect:()=>({top:on.y,left:on.x,right:on.x,bottom:on.y,width:0,height:0})}:Ee,popperRef:yr,open:Ee?Ke:!1,id:br,transition:!0},Zt,qi,{popperOptions:Ui,children:({TransitionProps:Q})=>a.jsx(Ho,O({timeout:ze.transitions.duration.shorter},Q,Hi,{children:a.jsxs(Xo,O({},Xi,{children:[ue,V?a.jsx(Yo,O({},Yi,{ref:Et})):null]}))}))}))]})});process.env.NODE_ENV!=="production"&&(mi.propTypes={arrow:p.bool,children:$a.isRequired,classes:p.object,className:p.string,components:p.shape({Arrow:p.elementType,Popper:p.elementType,Tooltip:p.elementType,Transition:p.elementType}),componentsProps:p.shape({arrow:p.object,popper:p.object,tooltip:p.object,transition:p.object}),describeChild:p.bool,disableFocusListener:p.bool,disableHoverListener:p.bool,disableInteractive:p.bool,disableTouchListener:p.bool,enterDelay:p.number,enterNextDelay:p.number,enterTouchDelay:p.number,followCursor:p.bool,id:p.string,leaveDelay:p.number,leaveTouchDelay:p.number,onClose:p.func,onOpen:p.func,open:p.bool,placement:p.oneOf(["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"]),PopperComponent:p.elementType,PopperProps:p.object,slotProps:p.shape({arrow:p.object,popper:p.object,tooltip:p.object,transition:p.object}),slots:p.shape({arrow:p.elementType,popper:p.elementType,tooltip:p.elementType,transition:p.elementType}),sx:p.oneOfType([p.arrayOf(p.oneOfType([p.func,p.object,p.bool])),p.func,p.object]),title:p.node,TransitionComponent:p.elementType,TransitionProps:p.object});const pf=mi;function zs(e,t,n){return e?a.jsx(Ie.ListItemIcon,{className:`papi-menu-icon-${n?"leading":"trailing"}`,children:a.jsx("img",{src:e,alt:`${n?"Leading":"Trailing"} icon for ${t}`})}):void 0}function $o(e){const{onClick:t,label:n,tooltip:r,allowForLeadingIcons:o=!0,iconPathBefore:s=void 0,iconPathAfter:i=void 0,hasAutoFocus:l=!1,className:c,isDisabled:d=!1,isDense:u=!0,isSubMenuParent:m=!1,hasDisabledGutters:w=!1,hasDivider:b=!1,focusVisibleClassName:y,id:f,children:h}=e,E=a.jsx(Ie.MenuItem,{sx:{lineHeight:.8},autoFocus:l,className:c,disabled:d,dense:u,disableGutters:w,divider:b,focusVisibleClassName:y,onClick:t,id:f,children:n?a.jsxs(a.Fragment,{children:[zs(s,n,!0),a.jsx(Ie.ListItemText,{primary:n,inset:!s&&o}),m?a.jsx(Ie.ListItemIcon,{className:"papi-menu-icon-trailing",children:a.jsx(Ja,{})}):zs(i,n,!1)]}):h});return r?a.jsx(pf,{title:r,placement:"right",children:a.jsx("div",{children:E})}):E}function hi(e){return Object.entries(e.groups).map(([n,r])=>({id:n,group:r}))}function wf(e){const[t,n]=v.useState(void 0),{parentMenuItem:r,parentItemProps:o,menuDefinition:s}=e,i=d=>{n(d.currentTarget)},l=()=>{n(void 0)},c=()=>{let d=hi(s).filter(u=>"menuItem"in u.group);if(!(r!=null&&r.id))throw new Error("A valid parent menu item is required for submenus.");return d=d.filter(u=>"menuItem"in u.group&&u.group.menuItem===r.id),a.jsx(gi,{...e,includedGroups:d})};return a.jsxs(a.Fragment,{children:[a.jsx($o,{onClick:i,...o,isSubMenuParent:!0}),a.jsx(Ie.Menu,{anchorEl:t,open:!!t,onClose:l,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:c()},r.id)]})}const ff=(e,t)=>t.filter(o=>o.group===e).sort((o,s)=>(o.order||0)-(s.order||0));function gi(e){const{menuDefinition:t,onClick:n,commandHandler:r,includedGroups:o}=e,{items:s,allowForLeadingIcons:i}=v.useMemo(()=>{const u=o&&o.length>0?o:hi(t).filter(y=>!("menuItem"in y.group)),m=Object.values(u).sort((y,f)=>(y.group.order||0)-(f.group.order||0)),w=[];m.forEach(y=>{ff(y.id,t.items).forEach(f=>w.push({item:f,isLastItemInGroup:!1})),w.length>0&&(w[w.length-1].isLastItemInGroup=!0)}),w.length>0&&(w[w.length-1].isLastItemInGroup=!1);const b=w.some(y=>"iconPathBefore"in y.item&&y.item.iconPathBefore);return{items:w,allowForLeadingIcons:b}},[o,t]),l=({item:u,isLastItemInGroup:m})=>({className:"papi-menu-item",label:u.label,tooltip:u.tooltip,iconPathBefore:"iconPathBefore"in u?u.iconPathBefore:void 0,iconPathAfter:"iconPathAfter"in u?u.iconPathAfter:void 0,hasDivider:m,allowForLeadingIcons:i}),[c]=s;if(!c)return a.jsx("div",{});const d=c.item.group;return a.jsx("div",{role:"menu","aria-label":d,children:s.map((u,m)=>{const{item:w}=u,b=l(u);if("command"in w){const y=w.group+m;return a.jsx($o,{onClick:f=>{n==null||n(f),r(w)},...b},y)}return a.jsx(wf,{parentMenuItem:w,parentItemProps:b,...e},d+w.id)})},d)}function mf(e){const{menuDefinition:t,columnId:n}=e;let s=Object.entries(t.groups).map(([i,l])=>({id:i,group:l})).filter(i=>"column"in i.group);return n&&"columns"in t&&t.columns[n]&&(s=s.filter(i=>"column"in i.group&&i.group.column===n)),a.jsx(gi,{...e,includedGroups:s})}function hf({commandHandler:e,menuDefinition:t,id:n,metadata:r,onClick:o,className:s}){return a.jsxs(Ie.Grid,{id:n,item:!0,xs:"auto",role:"menu","aria-label":n,className:`papi-menu-column ${s??""}`,children:[a.jsx("h3",{"aria-label":r.label,className:`papi-menu-column-header ${s??""}`,children:r.label}),a.jsx(Ie.List,{id:n,dense:!0,className:s??"",children:a.jsx(mf,{commandHandler:e,menuDefinition:t,columnId:n,onClick:o})})]})}function bi({commandHandler:e,className:t,multiColumnMenu:n,id:r}){const{columns:o}=n,s=v.useMemo(()=>{const i=new Map;return Object.getOwnPropertyNames(o).forEach(l=>{if(l==="isExtensible")return;const c=l,d=o[c];typeof d=="object"&&typeof d.order=="number"&&!Number.isNaN(d.order)?i.set(d.order,{id:c,metadata:d}):console.warn(`Property ${l} (${typeof d}) on menu ${r} is not a valid column and is being ignored. This might indicate data corruption`)}),Array.from(i.values()).sort((l,c)=>(l.metadata.order||0)-(c.metadata.order||0))},[o,r]);return a.jsx(Ie.Grid,{container:!0,spacing:0,className:`papi-multi-column-menu ${t??""}`,columns:s.length,role:"menu","aria-label":"GridMenu",id:r,children:s.map((i,l)=>a.jsx(hf,{commandHandler:e,menuDefinition:n,...i,className:t},l))})}function gf(e){return{preserveValue:!0,...e}}const Zn=(e,t,n={})=>{const r=v.useRef(t);r.current=t;const o=v.useRef(n);o.current=gf(o.current);const[s,i]=v.useState(()=>r.current),[l,c]=v.useState(!0);return v.useEffect(()=>{let d=!0;return c(!!e),(async()=>{if(e){const u=await e();d&&(i(()=>u),c(!1))}})(),()=>{d=!1,o.current.preserveValue||i(()=>r.current)}},[e]),[s,l]},bf=Ka(a.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function vi({menuProvider:e,normalMenu:t,fullMenu:n,commandHandler:r,containerRef:o,className:s,ariaLabelPrefix:i,children:l}){const[c,d]=v.useState(!1),[u,m]=v.useState(!1),w=v.useCallback(()=>{c&&d(!1),m(!1)},[c]),b=v.useCallback(k=>{k.stopPropagation(),d(g=>{const P=!g;return P&&k.shiftKey?m(!0):P||m(!1),P})},[]),y=v.useCallback(k=>(w(),r(k)),[r,w]),[f,h]=v.useState({top:1,left:1});v.useEffect(()=>{if(c){const k=o==null?void 0:o.current;if(k){const g=k.getBoundingClientRect(),P=window.scrollY,V=window.scrollX,U=g.top+P+k.clientHeight,T=g.left+V;h({top:U,left:T})}}},[c,o]);const[E]=Zn(v.useCallback(async()=>(e==null?void 0:e(!1))??t,[e,t,c]),t),[I]=Zn(v.useCallback(async()=>(e==null?void 0:e(!0))??n??E,[e,n,E,c]),n??E),j=u&&I?I:E;return a.jsxs(a.Fragment,{children:[a.jsx(Ie.IconButton,{sx:{paddingTop:0,paddingBottom:0},edge:"start",className:`papi-menuButton ${s??""}`,color:"inherit","aria-label":`${i??""} menu button`,onClick:b,children:l??a.jsx(bf,{})}),a.jsx(Ie.Drawer,{className:`papi-menu-drawer ${s??""}`,anchor:"left",variant:"temporary",open:c,onClose:w,PaperProps:{className:"papi-menu-drawer-paper",style:{top:f.top,left:f.left}},children:j?a.jsx(bi,{className:s,id:`${i??""} main menu`,commandHandler:y,multiColumnMenu:j}):void 0})]})}function vf({id:e,label:t,isDisabled:n=!1,tooltip:r,isTooltipSuppressed:o=!1,adjustMarginToAlignToEdge:s=!1,size:i="medium",className:l,onClick:c,children:d}){return a.jsx(Ie.IconButton,{id:e,disabled:n,edge:s,size:i,"aria-label":t,title:o?void 0:r??t,className:`papi-icon-button ${l??""}`,onClick:c,children:d})}const Yt=v.forwardRef(({className:e,...t},n)=>a.jsx(te.LoaderCircle,{size:35,className:S("tw-animate-spin",e),...t,ref:n}));Yt.displayName="Spinner";function yf({id:e,isDisabled:t=!1,hasError:n=!1,isFullWidth:r=!1,helperText:o,label:s,placeholder:i,isRequired:l=!1,className:c,defaultValue:d,value:u,onChange:m,onFocus:w,onBlur:b}){return a.jsxs("div",{className:S("tw-inline-grid tw-items-center tw-gap-1.5",{"tw-w-full":r}),children:[a.jsx(Ue,{htmlFor:e,className:S({"tw-text-red-600":n,"tw-hidden":!s}),children:`${s}${l?"*":""}`}),a.jsx(qt,{id:e,disabled:t,placeholder:i,required:l,className:S(c,{"tw-border-red-600":n}),defaultValue:d,value:u,onChange:m,onFocus:w,onBlur:b}),a.jsx("p",{className:S({"tw-hidden":!o}),children:o})]})}function xf({menuProvider:e,commandHandler:t,className:n,id:r,children:o}){const s=v.useRef(void 0);return a.jsx("div",{ref:s,style:{position:"relative"},children:a.jsx(Ie.AppBar,{position:"static",id:r,children:a.jsxs(Ie.Toolbar,{className:S("tw-bg-muted tw-text-muted-foreground",n),variant:"dense",children:[e?a.jsx(vi,{commandHandler:t,containerRef:s,menuProvider:e}):void 0,o?a.jsx("div",{className:"papi-toolbar-children",children:o}):void 0]})})})}const Nf=Qn.cva("tw-relative tw-w-full tw-rounded-lg tw-border tw-p-4 [&>svg~*]:tw-pl-7 [&>svg+div]:tw-translate-y-[-3px] [&>svg]:tw-absolute [&>svg]:tw-left-4 [&>svg]:tw-top-4 [&>svg]:tw-text-foreground",{variants:{variant:{default:"tw-bg-background tw-text-foreground",destructive:"tw-border-destructive/50 tw-text-destructive dark:tw-border-destructive [&>svg]:tw-text-destructive"}},defaultVariants:{variant:"default"}}),yi=v.forwardRef(({className:e,variant:t,...n},r)=>a.jsx("div",{ref:r,role:"alert",className:S(Nf({variant:t}),e),...n}));yi.displayName="Alert";const xi=v.forwardRef(({className:e,...t},n)=>a.jsxs("h5",{ref:n,className:S("tw-mb-1 tw-font-medium tw-leading-none tw-tracking-tight",e),...t,children:[t.children," "]}));xi.displayName="AlertTitle";const Ni=v.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:S("tw-text-sm [&_p]:tw-leading-relaxed",e),...t}));Ni.displayName="AlertDescription";const ki=v.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:S("pr-twp tw-rounded-lg tw-border tw-bg-card tw-text-card-foreground tw-shadow-sm",e),...t}));ki.displayName="Card";const Ei=v.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:S("pr-twp tw-flex tw-flex-col tw-space-y-1.5 tw-p-6",e),...t}));Ei.displayName="CardHeader";const Si=v.forwardRef(({className:e,...t},n)=>a.jsx("h3",{ref:n,className:S("pr-twp tw-text-2xl tw-font-semibold tw-leading-none tw-tracking-tight",e),...t,children:t.children}));Si.displayName="CardTitle";const Ti=v.forwardRef(({className:e,...t},n)=>a.jsx("p",{ref:n,className:S("pr-twp tw-text-sm tw-text-muted-foreground",e),...t}));Ti.displayName="CardDescription";const Ci=v.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:S("pr-twp tw-p-6 tw-pt-0",e),...t}));Ci.displayName="CardContent";const ji=v.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:S("pr-twp tw-flex tw-items-center tw-p-6 tw-pt-0",e),...t}));ji.displayName="CardFooter";function kf({...e}){return a.jsx(Us.Toaster,{className:"tw-toaster tw-group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})}const Oi=v.forwardRef(({className:e,...t},n)=>a.jsxs(an.Root,{ref:n,className:S("pr-twp tw-relative tw-flex tw-w-full tw-touch-none tw-select-none tw-items-center",e),...t,children:[a.jsx(an.Track,{className:"tw-relative tw-h-2 tw-w-full tw-grow tw-overflow-hidden tw-rounded-full tw-bg-secondary",children:a.jsx(an.Range,{className:"tw-absolute tw-h-full tw-bg-primary"})}),a.jsx(an.Thumb,{className:"tw-block tw-h-5 tw-w-5 tw-rounded-full tw-border-2 tw-border-primary tw-bg-background tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50"})]}));Oi.displayName=an.Root.displayName;const Ri=v.forwardRef(({className:e,...t},n)=>a.jsx(Vr.Root,{className:S("tw-peer pr-twp tw-inline-flex tw-h-6 tw-w-11 tw-shrink-0 tw-cursor-pointer tw-items-center tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-background disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=unchecked]:tw-bg-input",e),...t,ref:n,children:a.jsx(Vr.Thumb,{className:S("pr-twp tw-pointer-events-none tw-block tw-h-5 tw-w-5 tw-rounded-full tw-bg-background tw-shadow-lg tw-ring-0 tw-transition-transform data-[state=checked]:tw-translate-x-5 data-[state=unchecked]:tw-translate-x-0")})}));Ri.displayName=Vr.Root.displayName;const Ef=Oe.Root,Pi=v.forwardRef(({className:e,...t},n)=>a.jsx(Oe.List,{ref:n,className:S("tw-inline-flex tw-h-10 tw-items-center tw-justify-center tw-rounded-md tw-bg-muted tw-p-1 tw-text-muted-foreground",e),...t}));Pi.displayName=Oe.List.displayName;const _i=v.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Trigger,{ref:n,className:S("tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-sm tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-ring-offset-background tw-transition-all hover:tw-text-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow-sm",e),...t}));_i.displayName=Oe.Trigger.displayName;const Ii=v.forwardRef(({className:e,...t},n)=>a.jsx(Oe.Content,{ref:n,className:S("tw-mt-2 tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",e),...t}));Ii.displayName=Oe.Content.displayName;function Sf({isInstalling:e,handleClick:t,buttonText:n,className:r,...o}){return a.jsx(he,{className:S("tw-h-8 tw-rounded-md tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700",{"tw-cursor-not-allowed tw-bg-blue-700":e,"tw-bg-blue-600":!e,"tw-bg-white tw-text-blue-600 hover:tw-text-white":!n,"tw-w-20":n},r),onClick:t,...o,children:e?a.jsx(Yt,{size:15}):a.jsxs(a.Fragment,{children:[a.jsx(te.Download,{size:25,className:S("tw-h-4 tw-w-4",{"tw-mr-1":n})}),n]})})}function Tf({isEnabling:e,handleClick:t,className:n,...r}){return a.jsx(he,{className:S("tw-h-8 tw-rounded-md tw-bg-blue-600 tw-px-4 tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700",{"tw-cursor-not-allowed tw-bg-blue-700":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Yt,{size:15,className:"tw-mr-1 tw-text-white"}),"Enabling..."]}):"Enable"})}function Cf({isDisabling:e,handleClick:t,className:n,...r}){return a.jsx(he,{className:S("tw-h-8 tw-rounded-md tw-bg-gray-300 tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-gray-400",{"tw-cursor-not-allowed tw-bg-gray-400":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Yt,{size:15,className:"tw-mr-1 tw-text-black"}),"Disabling..."]}):"Disable"})}function jf({isUpdating:e,handleClick:t,className:n,...r}){return a.jsx(he,{className:S("tw-h-8 tw-rounded-md tw-bg-blue-600 tw-px-4 tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white",{"tw-cursor-not-allowed tw-bg-blue-700":e},n),onClick:t,...r,children:e?a.jsxs(a.Fragment,{children:[a.jsx(Yt,{size:15,className:"tw-mr-1 tw-text-white"}),"Updating..."]}):"Update"})}function Of({id:e,markdown:t,className:n,anchorTarget:r}){const o=v.useMemo(()=>({overrides:{a:{props:{target:r??"_self"}}}}),[r]);return a.jsx("div",{id:e,className:S("pr-twp tw-prose",n),children:a.jsx(cl,{options:o,children:t})})}const $i=v.forwardRef((e,t)=>a.jsxs(he,{ref:t,className:"tw-rounded-md tw-border tw-border-dashed tw-border-gray-400 tw-bg-white tw-px-4 tw-py-2 tw-text-black tw-transition tw-duration-300 tw-ease-in-out hover:tw-border-blue-600 hover:tw-bg-white hover:tw-text-blue-600",...e,children:[a.jsx(te.Filter,{size:16,className:"tw-mr-2 tw-h-4 tw-w-4 tw-text-gray-700 hover:tw-text-blue-600"}),"Filter",a.jsx(te.ChevronDown,{size:16,className:"tw-ml-2 tw-h-4 tw-w-4 tw-text-gray-700 hover:tw-text-blue-600"})]}));var Mi=(e=>(e[e.Check=0]="Check",e[e.Radio=1]="Radio",e))(Mi||{});function Rf({id:e,groups:t}){return a.jsx("div",{id:e,children:a.jsxs(tr,{children:[a.jsx(eo,{asChild:!0,children:a.jsx($i,{})}),a.jsx(Nn,{children:t.map(n=>a.jsxs("div",{children:[a.jsx(Xt,{children:n.label}),a.jsx(ea,{children:n.items.map(r=>a.jsx("div",{children:r.itemType===0?a.jsx(nr,{onClick:r.onClick,children:r.label}):a.jsx(no,{onClick:r.onClick,value:r.label,children:r.label})},r.label))}),a.jsx(kn,{})]},n.label))})]})})}function Pf({id:e,message:t}){return a.jsx("div",{id:e,className:"tw-mb-20 tw-mt-20 tw-flex tw-items-center tw-justify-center",children:a.jsx("div",{className:"tw-w-3/4 tw-rounded-lg tw-bg-gray-100 tw-p-8 tw-text-center",children:a.jsx("p",{className:"tw-text-lg tw-text-gray-800",children:t})})})}function _f({id:e,category:t,downloads:n,languages:r,moreInfoUrl:o}){const s=new W.NumberFormat("en",{notation:"compact",compactDisplay:"short"}).format(Object.values(n).reduce((l,c)=>l+c,0)),i=()=>{window.scrollTo(0,document.body.scrollHeight)};return a.jsxs("div",{id:e,className:"tw-flex tw-flex-wrap tw-items-start tw-space-x-4 tw-border-b tw-border-t tw-bg-white tw-pb-4 tw-pt-4",children:[a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsx("div",{className:"tw-flex tw-items-center tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1",children:a.jsx("span",{className:"tw-text-xs tw-font-semibold tw-text-gray-700",children:t})}),a.jsx("span",{className:"tw-text-xs tw-text-gray-500",children:"CATEGORY"})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsxs("div",{className:"tw-flex tw-items-center tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1",children:[a.jsx(te.User,{className:"tw-mr-1 tw-h-4 tw-w-4"}),a.jsx("span",{className:"tw-text-xs tw-font-semibold tw-text-gray-700",children:s})]}),a.jsx("span",{className:"tw-text-xs tw-text-gray-500",children:"USERS"})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center",children:[a.jsx("div",{className:"tw-flex tw-items-center",children:r.slice(0,3).map(l=>a.jsx("span",{className:"tw-ml-1 tw-rounded-md tw-bg-gray-100 tw-px-2 tw-py-1 tw-text-xs tw-font-semibold tw-text-gray-700",children:l.toUpperCase()},l))}),r.length>3&&a.jsxs("button",{type:"button",onClick:()=>i(),className:"tw-text-xs tw-text-gray-500 tw-underline",children:["+",r.length-3," more languages"]})]}),a.jsx("div",{className:"tw-mx-2 tw-h-10 tw-border-l tw-border-gray-300"}),a.jsxs("div",{className:"tw-ml-auto tw-flex tw-flex-col tw-space-y-2",children:[a.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",className:"tw-flex tw-items-center tw-text-xs tw-font-semibold tw-text-gray-500 tw-underline",children:["Website",a.jsx(te.Link,{className:"tw-ml-1 tw-inline tw-h-4 tw-w-4"})]}),a.jsxs("a",{href:"https://example.com",target:"_blank",rel:"noreferrer",className:"tw-flex tw-items-center tw-text-xs tw-font-semibold tw-text-gray-500 tw-underline",children:["Support",a.jsx(te.CircleHelp,{className:"tw-ml-1 tw-inline tw-h-4 tw-w-4"})]})]})]})}function Di({id:e,versionHistory:t}){const[n,r]=v.useState(!1),o=new Date;function s(l){const c=new Date(l),d=new Date(o.getTime()-c.getTime()),u=d.getUTCFullYear()-1970,m=d.getUTCMonth(),w=d.getUTCDate()-1;let b="";return u>0?b=`${u.toString()} year${u===1?"":"s"} ago`:m>0?b=`${m.toString()} month${m===1?"":"s"} ago`:w===0?b="today":b=`${w.toString()} day${w===1?"":"s"} ago`,b}const i=Object.entries(t).sort((l,c)=>c[0].localeCompare(l[0]));return a.jsxs("div",{id:e,children:[a.jsx("h3",{className:"tw-text-md tw-font-semibold",children:"What`s New"}),a.jsx("ul",{className:"tw-list-disc tw-pl-5 tw-pr-4 tw-text-xs tw-text-gray-600",children:(n?i:i.slice(0,5)).map(l=>a.jsxs("div",{className:"tw-mt-3 tw-flex tw-justify-between",children:[a.jsx("div",{className:"tw-text-gray-600",children:a.jsx("li",{className:"tw-prose tw-text-xs",children:a.jsx("span",{children:l[1].description})})}),a.jsxs("div",{className:"tw-justify-end tw-text-right",children:[a.jsxs("div",{children:["Version ",l[0]]}),a.jsx("div",{children:s(l[1].date)})]})]},l[0]))}),i.length>5&&a.jsx("button",{type:"button",onClick:()=>r(!n),className:"tw-text-xs tw-text-gray-500 tw-underline",children:n?"Show Less Version History":"Show All Version History"})]})}function If({id:e,publisherDisplayName:t,fileSize:n,locales:r,versionHistory:o}){const s=v.useMemo(()=>W.formatBytes(n),[n]),l=(c=>{const d=new Intl.DisplayNames(navigator.language,{type:"language"});return c.map(u=>d.of(u))})(r);return a.jsx("div",{id:e,className:"tw-border-t tw-pb-4 tw-pt-4",children:a.jsxs("div",{className:"tw-md:flex-row tw-md:space-x-8 tw-flex tw-flex-col tw-space-x-0",children:[a.jsx(Di,{versionHistory:o}),a.jsx("div",{className:"tw-md:border-t-0 tw-md:border-l tw-md-h-auto tw-md-ml-8 tw-mt-4 tw-border-t tw-border-gray-300"}),a.jsxs("div",{className:"tw-md:mt-0 tw-mt-4 tw-flex-1 tw-space-y-3",children:[a.jsx("h2",{className:"tw-text-md tw-font-semibold",children:"Information"}),a.jsxs("div",{className:"tw-flex tw-items-start tw-justify-between tw-pr-4 tw-text-xs tw-text-gray-600",children:[a.jsxs("p",{className:"tw-flex tw-flex-col tw-justify-start",children:[a.jsx("span",{className:"tw-mb-2",children:"Publisher"}),a.jsx("span",{className:"tw-font-semibold",children:t}),a.jsx("span",{className:"tw-mb-2 tw-mt-4",children:"Size"}),a.jsx("span",{className:"tw-font-semibold",children:s})]}),a.jsx("div",{className:"tw-flex tw-w-3/4 tw-items-center tw-justify-between tw-text-xs tw-text-gray-600",children:a.jsxs("p",{className:"tw-flex tw-flex-col tw-justify-start",children:[a.jsx("span",{className:"tw-mb-2",children:"Languages"}),a.jsx("span",{className:"tw-font-semibold",children:l.join(", ")})]})})]})]})]})})}const $f=(e,t)=>{v.useEffect(()=>{if(!e)return()=>{};const n=e(t);return()=>{n()}},[e,t])},Dr=()=>!1,Mf=(e,t)=>{const[n]=Zn(v.useCallback(async()=>{if(!e)return Dr;const r=await Promise.resolve(e(t));return async()=>r()},[t,e]),Dr,{preserveValue:!1});v.useEffect(()=>()=>{n!==Dr&&n()},[n])};Object.defineProperty(exports,"sonner",{enumerable:!0,get:()=>Us.toast});exports.Alert=yi;exports.AlertDescription=Ni;exports.AlertTitle=xi;exports.BOOK_SELECTOR_STRING_KEYS=Wl;exports.BookChapterControl=Bl;exports.BookSelectionMode=wa;exports.BookSelector=Kl;exports.Button=he;exports.Card=ki;exports.CardContent=Ci;exports.CardDescription=Ti;exports.CardFooter=ji;exports.CardHeader=Ei;exports.CardTitle=Si;exports.ChapterRangeSelector=pa;exports.Checkbox=rr;exports.Checklist=Nc;exports.ComboBox=Lr;exports.DataTable=va;exports.DisableButton=Cf;exports.DropdownMenu=tr;exports.DropdownMenuCheckboxItem=nr;exports.DropdownMenuContent=Nn;exports.DropdownMenuGroup=ea;exports.DropdownMenuItem=to;exports.DropdownMenuItemType=Mi;exports.DropdownMenuLabel=Xt;exports.DropdownMenuPortal=Sl;exports.DropdownMenuRadioGroup=Cl;exports.DropdownMenuRadioItem=no;exports.DropdownMenuSeparator=kn;exports.DropdownMenuShortcut=ra;exports.DropdownMenuSub=Tl;exports.DropdownMenuSubContent=na;exports.DropdownMenuSubTrigger=ta;exports.DropdownMenuTrigger=eo;exports.EnableButton=Tf;exports.FilterButton=$i;exports.FilterDropdown=Rf;exports.Footer=If;exports.GridMenu=bi;exports.HamburgerMenuButton=vi;exports.INVENTORY_STRING_KEYS=sc;exports.IconButton=vf;exports.Input=qt;exports.InstallButton=Sf;exports.Inventory=lc;exports.Label=Ue;exports.MarkdownRenderer=Of;exports.MenuItem=$o;exports.MoreInfo=_f;exports.NavigationContentSearch=cc;exports.NoExtensionsFound=Pf;exports.RadioGroup=ro;exports.RadioGroupItem=qn;exports.ScriptureResultsViewer=gc;exports.ScrollGroupSelector=bc;exports.SearchBar=Sa;exports.Select=Dt;exports.SelectContent=vt;exports.SelectGroup=fa;exports.SelectItem=De;exports.SelectLabel=ma;exports.SelectScrollDownButton=so;exports.SelectScrollUpButton=oo;exports.SelectSeparator=ha;exports.SelectTrigger=bt;exports.SelectValue=At;exports.Separator=uo;exports.SettingsList=vc;exports.SettingsListHeader=xc;exports.SettingsListItem=yc;exports.Slider=Oi;exports.Sonner=kf;exports.Spinner=Yt;exports.Switch=Ri;exports.Table=En;exports.TableBody=Tn;exports.TableCaption=ba;exports.TableCell=yt;exports.TableFooter=ga;exports.TableHead=Bt;exports.TableHeader=Sn;exports.TableRow=Ze;exports.Tabs=Ef;exports.TabsContent=Ii;exports.TabsList=Pi;exports.TabsTrigger=_i;exports.TextField=yf;exports.ToggleGroup=ao;exports.ToggleGroupItem=pn;exports.Toolbar=xf;exports.UpdateButton=jf;exports.VersionHistory=Di;exports.VerticalTabs=io;exports.VerticalTabsContent=co;exports.VerticalTabsList=lo;exports.VerticalTabsTrigger=Ta;exports.buttonVariants=oa;exports.cn=S;exports.getBookNumFromId=xa;exports.getLinesFromUSFM=ya;exports.getNumberFromUSFM=Fr;exports.getStatusForItem=Na;exports.inventoryCountColumn=rc;exports.inventoryItemColumn=tc;exports.inventoryStatusColumn=oc;exports.useEvent=$f;exports.useEventAsync=Mf;exports.usePromise=Zn;function Df(e,t="top"){if(!e||typeof document>"u")return;const n=document.head||document.querySelector("head"),r=n.querySelector(":first-child"),o=document.createElement("style");o.appendChild(document.createTextNode(e)),t==="top"&&r?n.insertBefore(o,r):n.appendChild(o)}Df(`*, ::before, ::after {
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
.tw-resize {
  resize: both;
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
