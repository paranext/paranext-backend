import { jsx as T, jsxs as Ce, Fragment as Ga } from "react/jsx-runtime";
import * as I from "react";
import { useMemo as ri, useState as Er, useCallback as Io, useRef as Ds, useEffect as Go } from "react";
import { Button as Ja, Autocomplete as Za, TextField as Kn, FormControlLabel as Oi, FormLabel as Qa, Checkbox as el, MenuItem as tl, Grid as Yn, IconButton as Xn, Paper as rl, Slider as ol, Snackbar as sl, Switch as il, AppBar as nl, Toolbar as al, Drawer as ll } from "@mui/material";
import { offsetBook as Ni, FIRST_SCR_BOOK_NUM as cl, offsetChapter as Ii, FIRST_SCR_CHAPTER_NUM as dl, getChaptersForBook as ul, offsetVerse as Ri, FIRST_SCR_VERSE_NUM as hl } from "platform-bible-utils";
import pl, { SelectColumn as fl } from "react-data-grid";
import ml, { ThemeContext as gl, internal_processStyles as bl } from "@mui/styled-engine";
var Ls = "";
function Bs(e) {
  Ls = e;
}
function vl(e = "") {
  if (!Ls) {
    const t = [...document.getElementsByTagName("script")], r = t.find((o) => o.hasAttribute("data-shoelace"));
    if (r)
      Bs(r.getAttribute("data-shoelace"));
    else {
      const o = t.find((i) => /shoelace(\.min)?\.js($|\?)/.test(i.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));
      let s = "";
      o && (s = o.getAttribute("src")), Bs(s.split("/").slice(0, -1).join("/"));
    }
  }
  return Ls.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
var Gn = Object.defineProperty, yl = Object.defineProperties, wl = Object.getOwnPropertyDescriptor, xl = Object.getOwnPropertyDescriptors, Pi = Object.getOwnPropertySymbols, _l = Object.prototype.hasOwnProperty, kl = Object.prototype.propertyIsEnumerable, hs = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Mi = (e, t, r) => t in e ? Gn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Dt = (e, t) => {
  for (var r in t || (t = {}))
    _l.call(t, r) && Mi(e, r, t[r]);
  if (Pi)
    for (var r of Pi(t))
      kl.call(t, r) && Mi(e, r, t[r]);
  return e;
}, fo = (e, t) => yl(e, xl(t)), a = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? wl(t, r) : t, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (s = (o ? n(t, r, s) : n(s)) || s);
  return o && s && Gn(t, r, s), s;
}, Cl = function(e, t) {
  this[0] = e, this[1] = t;
}, Sl = (e) => {
  var t = e[hs("asyncIterator")], r = !1, o, s = {};
  return t == null ? (t = e[hs("iterator")](), o = (i) => s[i] = (n) => t[i](n)) : (t = t.call(e), o = (i) => s[i] = (n) => {
    if (r) {
      if (r = !1, i === "throw")
        throw n;
      return n;
    }
    return r = !0, {
      done: !1,
      value: new Cl(new Promise((c) => {
        var l = t[i](n);
        if (!(l instanceof Object))
          throw TypeError("Object expected");
        c(l);
      }), 1)
    };
  }), s[hs("iterator")] = () => s, o("next"), "throw" in t ? o("throw") : s.throw = (i) => {
    throw i;
  }, "return" in t && o("return"), s;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ro = globalThis, oi = Ro.ShadowRoot && (Ro.ShadyCSS === void 0 || Ro.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, si = Symbol(), Di = /* @__PURE__ */ new WeakMap();
let Jn = class {
  constructor(t, r, o) {
    if (this._$cssResult$ = !0, o !== si)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (oi && t === void 0) {
      const o = r !== void 0 && r.length === 1;
      o && (t = Di.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && Di.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const $l = (e) => new Jn(typeof e == "string" ? e : e + "", void 0, si), L = (e, ...t) => {
  const r = e.length === 1 ? e[0] : t.reduce((o, s, i) => o + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + e[i + 1], e[0]);
  return new Jn(r, e, si);
}, El = (e, t) => {
  if (oi)
    e.adoptedStyleSheets = t.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else
    for (const r of t) {
      const o = document.createElement("style"), s = Ro.litNonce;
      s !== void 0 && o.setAttribute("nonce", s), o.textContent = r.cssText, e.appendChild(o);
    }
}, Li = oi ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const o of t.cssRules)
    r += o.cssText;
  return $l(r);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: zl, defineProperty: Al, getOwnPropertyDescriptor: Tl, getOwnPropertyNames: Ol, getOwnPropertySymbols: Nl, getPrototypeOf: Il } = Object, Kt = globalThis, Bi = Kt.trustedTypes, Rl = Bi ? Bi.emptyScript : "", ps = Kt.reactiveElementPolyfillSupport, eo = (e, t) => e, Or = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Rl : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let r = e;
  switch (t) {
    case Boolean:
      r = e !== null;
      break;
    case Number:
      r = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(e);
      } catch {
        r = null;
      }
  }
  return r;
} }, ii = (e, t) => !zl(e, t), Vi = { attribute: !0, type: String, converter: Or, reflect: !1, hasChanged: ii };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Kt.litPropertyMetadata ?? (Kt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Cr extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Vi) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.elementProperties.set(t, r), !r.noAccessor) {
      const o = Symbol(), s = this.getPropertyDescriptor(t, o, r);
      s !== void 0 && Al(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, r, o) {
    const { get: s, set: i } = Tl(this.prototype, t) ?? { get() {
      return this[r];
    }, set(n) {
      this[r] = n;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(n) {
      const c = s == null ? void 0 : s.call(this);
      i.call(this, n), this.requestUpdate(t, c, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Vi;
  }
  static _$Ei() {
    if (this.hasOwnProperty(eo("elementProperties")))
      return;
    const t = Il(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(eo("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(eo("properties"))) {
      const r = this.properties, o = [...Ol(r), ...Nl(r)];
      for (const s of o)
        this.createProperty(s, r[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0)
        for (const [o, s] of r)
          this.elementProperties.set(o, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, o] of this.elementProperties) {
      const s = this._$Eu(r, o);
      s !== void 0 && this._$Eh.set(s, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const s of o)
        r.unshift(Li(s));
    } else
      t !== void 0 && r.push(Li(t));
    return r;
  }
  static _$Eu(t, r) {
    const o = r.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((r) => r(this));
  }
  addController(t) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) == null || r.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$EO) == null || r.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const o of r.keys())
      this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return El(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostConnected) == null ? void 0 : o.call(r);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostDisconnected) == null ? void 0 : o.call(r);
    });
  }
  attributeChangedCallback(t, r, o) {
    this._$AK(t, o);
  }
  _$EC(t, r) {
    var i;
    const o = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, o);
    if (s !== void 0 && o.reflect === !0) {
      const n = (((i = o.converter) == null ? void 0 : i.toAttribute) !== void 0 ? o.converter : Or).toAttribute(r, o.type);
      this._$Em = t, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(t, r) {
    var i;
    const o = this.constructor, s = o._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const n = o.getPropertyOptions(s), c = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((i = n.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? n.converter : Or;
      this._$Em = s, this[s] = c.fromAttribute(r, n.type), this._$Em = null;
    }
  }
  requestUpdate(t, r, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? ii)(this[t], r))
        return;
      this.P(t, r, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, r, o) {
    this._$AL.has(t) || this._$AL.set(t, r), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var o;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, n] of this._$Ep)
          this[i] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0)
        for (const [i, n] of s)
          n.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], n);
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), (o = this._$EO) == null || o.forEach((s) => {
        var i;
        return (i = s.hostUpdate) == null ? void 0 : i.call(s);
      }), this.update(r)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var r;
    (r = this._$EO) == null || r.forEach((o) => {
      var s;
      return (s = o.hostUpdated) == null ? void 0 : s.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((r) => this._$EC(r, this[r]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
Cr.elementStyles = [], Cr.shadowRootOptions = { mode: "open" }, Cr[eo("elementProperties")] = /* @__PURE__ */ new Map(), Cr[eo("finalized")] = /* @__PURE__ */ new Map(), ps == null || ps({ ReactiveElement: Cr }), (Kt.reactiveElementVersions ?? (Kt.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const to = globalThis, Bo = to.trustedTypes, Fi = Bo ? Bo.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Zn = "$lit$", jt = `lit$${(Math.random() + "").slice(9)}$`, Qn = "?" + jt, Pl = `<${Qn}>`, ar = document, co = () => ar.createComment(""), uo = (e) => e === null || typeof e != "object" && typeof e != "function", ea = Array.isArray, Ml = (e) => ea(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", fs = `[ 	
\f\r]`, Wr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Hi = /-->/g, Ui = />/g, rr = RegExp(`>|${fs}(?:([^\\s"'>=/]+)(${fs}*=${fs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ji = /'/g, Wi = /"/g, ta = /^(?:script|style|textarea|title)$/i, Dl = (e) => (t, ...r) => ({ _$litType$: e, strings: t, values: r }), C = Dl(1), at = Symbol.for("lit-noChange"), Se = Symbol.for("lit-nothing"), qi = /* @__PURE__ */ new WeakMap(), ir = ar.createTreeWalker(ar, 129);
function ra(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Fi !== void 0 ? Fi.createHTML(t) : t;
}
const Ll = (e, t) => {
  const r = e.length - 1, o = [];
  let s, i = t === 2 ? "<svg>" : "", n = Wr;
  for (let c = 0; c < r; c++) {
    const l = e[c];
    let d, f, h = -1, p = 0;
    for (; p < l.length && (n.lastIndex = p, f = n.exec(l), f !== null); )
      p = n.lastIndex, n === Wr ? f[1] === "!--" ? n = Hi : f[1] !== void 0 ? n = Ui : f[2] !== void 0 ? (ta.test(f[2]) && (s = RegExp("</" + f[2], "g")), n = rr) : f[3] !== void 0 && (n = rr) : n === rr ? f[0] === ">" ? (n = s ?? Wr, h = -1) : f[1] === void 0 ? h = -2 : (h = n.lastIndex - f[2].length, d = f[1], n = f[3] === void 0 ? rr : f[3] === '"' ? Wi : ji) : n === Wi || n === ji ? n = rr : n === Hi || n === Ui ? n = Wr : (n = rr, s = void 0);
    const m = n === rr && e[c + 1].startsWith("/>") ? " " : "";
    i += n === Wr ? l + Pl : h >= 0 ? (o.push(d), l.slice(0, h) + Zn + l.slice(h) + jt + m) : l + jt + (h === -2 ? c : m);
  }
  return [ra(e, i + (e[r] || "<?>") + (t === 2 ? "</svg>" : "")), o];
};
let Vs = class oa {
  constructor({ strings: t, _$litType$: r }, o) {
    let s;
    this.parts = [];
    let i = 0, n = 0;
    const c = t.length - 1, l = this.parts, [d, f] = Ll(t, r);
    if (this.el = oa.createElement(d, o), ir.currentNode = this.el.content, r === 2) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = ir.nextNode()) !== null && l.length < c; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes())
          for (const h of s.getAttributeNames())
            if (h.endsWith(Zn)) {
              const p = f[n++], m = s.getAttribute(h).split(jt), g = /([.?@])?(.*)/.exec(p);
              l.push({ type: 1, index: i, name: g[2], strings: m, ctor: g[1] === "." ? Vl : g[1] === "?" ? Fl : g[1] === "@" ? Hl : Jo }), s.removeAttribute(h);
            } else
              h.startsWith(jt) && (l.push({ type: 6, index: i }), s.removeAttribute(h));
        if (ta.test(s.tagName)) {
          const h = s.textContent.split(jt), p = h.length - 1;
          if (p > 0) {
            s.textContent = Bo ? Bo.emptyScript : "";
            for (let m = 0; m < p; m++)
              s.append(h[m], co()), ir.nextNode(), l.push({ type: 2, index: ++i });
            s.append(h[p], co());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === Qn)
          l.push({ type: 2, index: i });
        else {
          let h = -1;
          for (; (h = s.data.indexOf(jt, h + 1)) !== -1; )
            l.push({ type: 7, index: i }), h += jt.length - 1;
        }
      i++;
    }
  }
  static createElement(t, r) {
    const o = ar.createElement("template");
    return o.innerHTML = t, o;
  }
};
function Nr(e, t, r = e, o) {
  var n, c;
  if (t === at)
    return t;
  let s = o !== void 0 ? (n = r._$Co) == null ? void 0 : n[o] : r._$Cl;
  const i = uo(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== i && ((c = s == null ? void 0 : s._$AO) == null || c.call(s, !1), i === void 0 ? s = void 0 : (s = new i(e), s._$AT(e, r, o)), o !== void 0 ? (r._$Co ?? (r._$Co = []))[o] = s : r._$Cl = s), s !== void 0 && (t = Nr(e, s._$AS(e, t.values), s, o)), t;
}
let Bl = class {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: o } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? ar).importNode(r, !0);
    ir.currentNode = s;
    let i = ir.nextNode(), n = 0, c = 0, l = o[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let d;
        l.type === 2 ? d = new ni(i, i.nextSibling, this, t) : l.type === 1 ? d = new l.ctor(i, l.name, l.strings, this, t) : l.type === 6 && (d = new Ul(i, this, t)), this._$AV.push(d), l = o[++c];
      }
      n !== (l == null ? void 0 : l.index) && (i = ir.nextNode(), n++);
    }
    return ir.currentNode = ar, s;
  }
  p(t) {
    let r = 0;
    for (const o of this._$AV)
      o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, r), r += o.strings.length - 2) : o._$AI(t[r])), r++;
  }
}, ni = class sa {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, r, o, s) {
    this.type = 2, this._$AH = Se, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = o, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = Nr(this, t, r), uo(t) ? t === Se || t == null || t === "" ? (this._$AH !== Se && this._$AR(), this._$AH = Se) : t !== this._$AH && t !== at && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ml(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== Se && uo(this._$AH) ? this._$AA.nextSibling.data = t : this.T(ar.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var i;
    const { values: r, _$litType$: o } = t, s = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = Vs.createElement(ra(o.h, o.h[0]), this.options)), o);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === s)
      this._$AH.p(r);
    else {
      const n = new Bl(s, this), c = n.u(this.options);
      n.p(r), this.T(c), this._$AH = n;
    }
  }
  _$AC(t) {
    let r = qi.get(t.strings);
    return r === void 0 && qi.set(t.strings, r = new Vs(t)), r;
  }
  k(t) {
    ea(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let o, s = 0;
    for (const i of t)
      s === r.length ? r.push(o = new sa(this.S(co()), this.S(co()), this, this.options)) : o = r[s], o._$AI(i), s++;
    s < r.length && (this._$AR(o && o._$AB.nextSibling, s), r.length = s);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, r); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 && (this._$Cv = t, (r = this._$AP) == null || r.call(this, t));
  }
}, Jo = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, o, s, i) {
    this.type = 1, this._$AH = Se, this._$AN = void 0, this.element = t, this.name = r, this._$AM = s, this.options = i, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = Se;
  }
  _$AI(t, r = this, o, s) {
    const i = this.strings;
    let n = !1;
    if (i === void 0)
      t = Nr(this, t, r, 0), n = !uo(t) || t !== this._$AH && t !== at, n && (this._$AH = t);
    else {
      const c = t;
      let l, d;
      for (t = i[0], l = 0; l < i.length - 1; l++)
        d = Nr(this, c[o + l], r, l), d === at && (d = this._$AH[l]), n || (n = !uo(d) || d !== this._$AH[l]), d === Se ? t = Se : t !== Se && (t += (d ?? "") + i[l + 1]), this._$AH[l] = d;
    }
    n && !s && this.j(t);
  }
  j(t) {
    t === Se ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}, Vl = class extends Jo {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === Se ? void 0 : t;
  }
}, Fl = class extends Jo {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== Se);
  }
}, Hl = class extends Jo {
  constructor(t, r, o, s, i) {
    super(t, r, o, s, i), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = Nr(this, t, r, 0) ?? Se) === at)
      return;
    const o = this._$AH, s = t === Se && o !== Se || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, i = t !== Se && (o === Se || s);
    s && this.element.removeEventListener(this.name, this, o), i && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var r;
    typeof this._$AH == "function" ? this._$AH.call(((r = this.options) == null ? void 0 : r.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}, Ul = class {
  constructor(t, r, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Nr(this, t);
  }
};
const ms = to.litHtmlPolyfillSupport;
ms == null || ms(Vs, ni), (to.litHtmlVersions ?? (to.litHtmlVersions = [])).push("3.1.2");
const jl = (e, t, r) => {
  const o = (r == null ? void 0 : r.renderBefore) ?? t;
  let s = o._$litPart$;
  if (s === void 0) {
    const i = (r == null ? void 0 : r.renderBefore) ?? null;
    o._$litPart$ = s = new ni(t.insertBefore(co(), i), i, void 0, r ?? {});
  }
  return s._$AI(e), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ro = class extends Cr {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var r;
    const t = super.createRenderRoot();
    return (r = this.renderOptions).renderBefore ?? (r.renderBefore = t.firstChild), t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = jl(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return at;
  }
};
var qn;
ro._$litElement$ = !0, ro.finalized = !0, (qn = globalThis.litElementHydrateSupport) == null || qn.call(globalThis, { LitElement: ro });
const gs = globalThis.litElementPolyfillSupport;
gs == null || gs({ LitElement: ro });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
var Wl = L`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`, F = L`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ql = { attribute: !0, type: String, converter: Or, reflect: !1, hasChanged: ii }, Kl = (e = ql, t, r) => {
  const { kind: o, metadata: s } = r;
  let i = globalThis.litPropertyMetadata.get(s);
  if (i === void 0 && globalThis.litPropertyMetadata.set(s, i = /* @__PURE__ */ new Map()), i.set(r.name, e), o === "accessor") {
    const { name: n } = r;
    return { set(c) {
      const l = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(n, l, e);
    }, init(c) {
      return c !== void 0 && this.P(n, void 0, e), c;
    } };
  }
  if (o === "setter") {
    const { name: n } = r;
    return function(c) {
      const l = this[n];
      t.call(this, c), this.requestUpdate(n, l, e);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function u(e) {
  return (t, r) => typeof r == "object" ? Kl(e, t, r) : ((o, s, i) => {
    const n = s.hasOwnProperty(i);
    return s.constructor.createProperty(i, n ? { ...o, wrapped: !0 } : o), n ? Object.getOwnPropertyDescriptor(s, i) : void 0;
  })(e, t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function U(e) {
  return u({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ai(e) {
  return (t, r) => {
    const o = typeof t == "function" ? t : t[r];
    Object.assign(o, e);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fs = (e, t, r) => (r.configurable = !0, r.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, r), r);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function A(e, t) {
  return (r, o, s) => {
    const i = (n) => {
      var c;
      return ((c = n.renderRoot) == null ? void 0 : c.querySelector(e)) ?? null;
    };
    if (t) {
      const { get: n, set: c } = typeof o == "object" ? r : s ?? (() => {
        const l = Symbol();
        return { get() {
          return this[l];
        }, set(d) {
          this[l] = d;
        } };
      })();
      return Fs(r, o, { get() {
        let l = n.call(this);
        return l === void 0 && (l = i(this), (l !== null || this.hasUpdated) && c.call(this, l)), l;
      } });
    }
    return Fs(r, o, { get() {
      return i(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Yl(e) {
  return (t, r) => Fs(t, r, { async get() {
    var o;
    return await this.updateComplete, ((o = this.renderRoot) == null ? void 0 : o.querySelector(e)) ?? null;
  } });
}
var R = class extends ro {
  constructor() {
    super(), Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
      this.constructor.define(e, t);
    });
  }
  emit(e, t) {
    const r = new CustomEvent(e, Dt({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, t));
    return this.dispatchEvent(r), r;
  }
  /* eslint-enable */
  static define(e, t = this, r = {}) {
    const o = customElements.get(e);
    if (!o) {
      customElements.define(e, class extends t {
      }, r);
      return;
    }
    let s = " (unknown version)", i = s;
    "version" in t && t.version && (s = " v" + t.version), "version" in o && o.version && (i = " v" + o.version), !(s && i && s === i) && console.warn(
      `Attempted to register <${e}>${s}, but <${e}>${i} has already been registered.`
    );
  }
};
R.version = "2.14.0";
R.dependencies = {};
a([
  u()
], R.prototype, "dir", 2);
a([
  u()
], R.prototype, "lang", 2);
var Zo = class extends R {
  render() {
    return C` <slot></slot> `;
  }
};
Zo.styles = [F, Wl];
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xl = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), Ki = /* @__PURE__ */ new WeakMap(), Gl = (e, t, r, o, s) => {
  const i = s == null ? void 0 : s[t];
  i === void 0 || r === o ? (e[t] = r, r == null && t in HTMLElement.prototype && e.removeAttribute(t)) : ((n, c, l) => {
    let d = Ki.get(n);
    d === void 0 && Ki.set(n, d = /* @__PURE__ */ new Map());
    let f = d.get(c);
    l !== void 0 ? f === void 0 ? (d.set(c, f = { handleEvent: l }), n.addEventListener(c, f)) : f.handleEvent = l : f !== void 0 && (d.delete(c), n.removeEventListener(c, f));
  })(e, i, r);
}, D = ({ react: e, tagName: t, elementClass: r, events: o, displayName: s }) => {
  const i = new Set(Object.keys(o ?? {})), n = e.forwardRef((c, l) => {
    const d = e.useRef(null), f = e.useRef(null), h = {}, p = {};
    for (const [m, g] of Object.entries(c))
      Xl.has(m) ? h[m === "className" ? "class" : m] = g : i.has(m) || m in r.prototype ? p[m] = g : h[m] = g;
    return e.useLayoutEffect(() => {
      if (f.current !== null) {
        for (const m in p)
          Gl(f.current, m, c[m], d.current ? d.current[m] : void 0, o);
        d.current = c;
      }
    }), e.useLayoutEffect(() => {
      var m;
      (m = f.current) == null || m.removeAttribute("defer-hydration");
    }, []), h.suppressHydrationWarning = !0, e.createElement(t, { ...h, ref: e.useCallback((m) => {
      f.current = m, typeof l == "function" ? l(m) : l !== null && (l.current = m);
    }, [l]) });
  });
  return n.displayName = s ?? r.name, n;
};
var Jl = "sl-visually-hidden";
Zo.define("sl-visually-hidden");
D({
  tagName: Jl,
  elementClass: Zo,
  react: I,
  events: {},
  displayName: "SlVisuallyHidden"
});
var Zl = L`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`, Ql = L`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`, ur = (e = "value") => (t, r) => {
  const o = t.constructor, s = o.prototype.attributeChangedCallback;
  o.prototype.attributeChangedCallback = function(i, n, c) {
    var l;
    const d = o.getPropertyOptions(e), f = typeof d.attribute == "string" ? d.attribute : e;
    if (i === f) {
      const h = d.converter || Or, m = (typeof h == "function" ? h : (l = h == null ? void 0 : h.fromAttribute) != null ? l : Or.fromAttribute)(c, d.type);
      this[e] !== m && (this[r] = m);
    }
    s.call(this, i, n, c);
  };
}, qr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakSet(), So = /* @__PURE__ */ new WeakMap(), Lt = class {
  constructor(e, t) {
    this.handleFormData = (r) => {
      const o = this.options.disabled(this.host), s = this.options.name(this.host), i = this.options.value(this.host), n = this.host.tagName.toLowerCase() === "sl-button";
      this.host.isConnected && !o && !n && typeof s == "string" && s.length > 0 && typeof i < "u" && (Array.isArray(i) ? i.forEach((c) => {
        r.formData.append(s, c.toString());
      }) : r.formData.append(s, i.toString()));
    }, this.handleFormSubmit = (r) => {
      var o;
      const s = this.options.disabled(this.host), i = this.options.reportValidity;
      this.form && !this.form.noValidate && ((o = qr.get(this.form)) == null || o.forEach((n) => {
        this.setUserInteracted(n, !0);
      })), this.form && !this.form.noValidate && !s && !i(this.host) && (r.preventDefault(), r.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), So.set(this.host, []);
    }, this.handleInteraction = (r) => {
      const o = So.get(this.host);
      o.includes(r.type) || o.push(r.type), o.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const r = this.form.querySelectorAll("*");
        for (const o of r)
          if (typeof o.checkValidity == "function" && !o.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const r = this.form.querySelectorAll("*");
        for (const o of r)
          if (typeof o.reportValidity == "function" && !o.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = e).addController(this), this.options = Dt({
      form: (r) => {
        const o = r.form;
        if (o) {
          const i = r.getRootNode().getElementById(o);
          if (i)
            return i;
        }
        return r.closest("form");
      },
      name: (r) => r.name,
      value: (r) => r.value,
      defaultValue: (r) => r.defaultValue,
      disabled: (r) => {
        var o;
        return (o = r.disabled) != null ? o : !1;
      },
      reportValidity: (r) => typeof r.reportValidity == "function" ? r.reportValidity() : !0,
      checkValidity: (r) => typeof r.checkValidity == "function" ? r.checkValidity() : !0,
      setValue: (r, o) => r.value = o,
      assumeInteractionOn: ["sl-input"]
    }, t);
  }
  hostConnected() {
    const e = this.options.form(this.host);
    e && this.attachForm(e), So.set(this.host, []), this.options.assumeInteractionOn.forEach((t) => {
      this.host.addEventListener(t, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), So.delete(this.host), this.options.assumeInteractionOn.forEach((e) => {
      this.host.removeEventListener(e, this.handleInteraction);
    });
  }
  hostUpdated() {
    const e = this.options.form(this.host);
    e || this.detachForm(), e && this.form !== e && (this.detachForm(), this.attachForm(e)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(e) {
    e ? (this.form = e, qr.has(this.form) ? qr.get(this.form).add(this.host) : qr.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), Kr.has(this.form) || (Kr.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), Yr.has(this.form) || (Yr.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form)
      return;
    const e = qr.get(this.form);
    e && (e.delete(this.host), e.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), Kr.has(this.form) && (this.form.reportValidity = Kr.get(this.form), Kr.delete(this.form)), Yr.has(this.form) && (this.form.checkValidity = Yr.get(this.form), Yr.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(e, t) {
    t ? bs.add(e) : bs.delete(e), e.requestUpdate();
  }
  doAction(e, t) {
    if (this.form) {
      const r = document.createElement("button");
      r.type = e, r.style.position = "absolute", r.style.width = "0", r.style.height = "0", r.style.clipPath = "inset(50%)", r.style.overflow = "hidden", r.style.whiteSpace = "nowrap", t && (r.name = t.name, r.value = t.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((o) => {
        t.hasAttribute(o) && r.setAttribute(o, t.getAttribute(o));
      })), this.form.append(r), r.click(), r.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var e;
    return (e = this.form) != null ? e : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(e) {
    this.doAction("reset", e);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(e) {
    this.doAction("submit", e);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(e) {
    const t = this.host, r = !!bs.has(t), o = !!t.required;
    t.toggleAttribute("data-required", o), t.toggleAttribute("data-optional", !o), t.toggleAttribute("data-invalid", !e), t.toggleAttribute("data-valid", e), t.toggleAttribute("data-user-invalid", !e && r), t.toggleAttribute("data-user-valid", e && r);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const e = this.host;
    this.setValidity(e.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(e) {
    const t = new CustomEvent("sl-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    e || t.preventDefault(), this.host.dispatchEvent(t) || e == null || e.preventDefault();
  }
}, Qo = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
}), ec = Object.freeze(fo(Dt({}, Qo), {
  valid: !1,
  valueMissing: !0
})), tc = Object.freeze(fo(Dt({}, Qo), {
  valid: !1,
  customError: !0
})), Je = class {
  constructor(e, ...t) {
    this.slotNames = [], this.handleSlotChange = (r) => {
      const o = r.target;
      (this.slotNames.includes("[default]") && !o.name || o.name && this.slotNames.includes(o.name)) && this.host.requestUpdate();
    }, (this.host = e).addController(this), this.slotNames = t;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((e) => {
      if (e.nodeType === e.TEXT_NODE && e.textContent.trim() !== "")
        return !0;
      if (e.nodeType === e.ELEMENT_NODE) {
        const t = e;
        if (t.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!t.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(e) {
    return this.host.querySelector(`:scope > [slot="${e}"]`) !== null;
  }
  test(e) {
    return e === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(e);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
function rc(e) {
  if (!e)
    return "";
  const t = e.assignedNodes({ flatten: !0 });
  let r = "";
  return [...t].forEach((o) => {
    o.nodeType === Node.TEXT_NODE && (r += o.textContent);
  }), r;
}
var oc = {
  name: "default",
  resolver: (e) => vl(`assets/icons/${e}.svg`)
}, sc = oc, Yi = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, ic = {
  name: "system",
  resolver: (e) => e in Yi ? `data:image/svg+xml,${encodeURIComponent(Yi[e])}` : ""
}, nc = ic, ac = [sc, nc], Hs = [];
function lc(e) {
  Hs.push(e);
}
function cc(e) {
  Hs = Hs.filter((t) => t !== e);
}
function Xi(e) {
  return ac.find((t) => t.name === e);
}
var dc = L`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
function E(e, t) {
  const r = Dt({
    waitUntilFirstUpdate: !1
  }, t);
  return (o, s) => {
    const { update: i } = o, n = Array.isArray(e) ? e : [e];
    o.update = function(c) {
      n.forEach((l) => {
        const d = l;
        if (c.has(d)) {
          const f = c.get(d), h = this[d];
          f !== h && (!r.waitUntilFirstUpdate || this.hasUpdated) && this[s](f, h);
        }
      }), i.call(this, c);
    };
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const uc = (e, t) => t === void 0 ? (e == null ? void 0 : e._$litType$) !== void 0 : (e == null ? void 0 : e._$litType$) === t, ia = (e) => e.strings === void 0, hc = {}, pc = (e, t = hc) => e._$AH = t;
var Xr = Symbol(), $o = Symbol(), vs, ys = /* @__PURE__ */ new Map(), xe = class extends R {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(e, t) {
    var r;
    let o;
    if (t != null && t.spriteSheet)
      return C`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;
    try {
      if (o = await fetch(e, { mode: "cors" }), !o.ok)
        return o.status === 410 ? Xr : $o;
    } catch {
      return $o;
    }
    try {
      const s = document.createElement("div");
      s.innerHTML = await o.text();
      const i = s.firstElementChild;
      if (((r = i == null ? void 0 : i.tagName) == null ? void 0 : r.toLowerCase()) !== "svg")
        return Xr;
      vs || (vs = new DOMParser());
      const c = vs.parseFromString(i.outerHTML, "text/html").body.querySelector("svg");
      return c ? (c.part.add("svg"), document.adoptNode(c)) : Xr;
    } catch {
      return Xr;
    }
  }
  connectedCallback() {
    super.connectedCallback(), lc(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), cc(this);
  }
  getIconSource() {
    const e = Xi(this.library);
    return this.name && e ? {
      url: e.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var e;
    const { url: t, fromLibrary: r } = this.getIconSource(), o = r ? Xi(this.library) : void 0;
    if (!t) {
      this.svg = null;
      return;
    }
    let s = ys.get(t);
    if (s || (s = this.resolveIcon(t, o), ys.set(t, s)), !this.initialRender)
      return;
    const i = await s;
    if (i === $o && ys.delete(t), t === this.getIconSource().url) {
      if (uc(i)) {
        this.svg = i;
        return;
      }
      switch (i) {
        case $o:
        case Xr:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = i.cloneNode(!0), (e = o == null ? void 0 : o.mutator) == null || e.call(o, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
xe.styles = [F, dc];
a([
  U()
], xe.prototype, "svg", 2);
a([
  u({ reflect: !0 })
], xe.prototype, "name", 2);
a([
  u()
], xe.prototype, "src", 2);
a([
  u()
], xe.prototype, "label", 2);
a([
  u({ reflect: !0 })
], xe.prototype, "library", 2);
a([
  E("label")
], xe.prototype, "handleLabelChange", 1);
a([
  E(["name", "src", "library"])
], xe.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const zt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, mo = (e) => (...t) => ({ _$litDirective$: e, values: t });
let go = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, o) {
    this._$Ct = t, this._$AM = r, this._$Ci = o;
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = mo(class extends go {
  constructor(e) {
    var t;
    if (super(e), e.type !== zt.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var o, s;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in t)
        t[i] && !((o = this.nt) != null && o.has(i)) && this.st.add(i);
      return this.render(t);
    }
    const r = e.element.classList;
    for (const i of this.st)
      i in t || (r.remove(i), this.st.delete(i));
    for (const i in t) {
      const n = !!t[i];
      n === this.st.has(i) || (s = this.nt) != null && s.has(i) || (n ? (r.add(i), this.st.add(i)) : (r.remove(i), this.st.delete(i)));
    }
    return at;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = (e) => e ?? Se;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr = mo(class extends go {
  constructor(e) {
    if (super(e), e.type !== zt.PROPERTY && e.type !== zt.ATTRIBUTE && e.type !== zt.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!ia(e))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(e) {
    return e;
  }
  update(e, [t]) {
    if (t === at || t === Se)
      return t;
    const r = e.element, o = e.name;
    if (e.type === zt.PROPERTY) {
      if (t === r[o])
        return at;
    } else if (e.type === zt.BOOLEAN_ATTRIBUTE) {
      if (!!t === r.hasAttribute(o))
        return at;
    } else if (e.type === zt.ATTRIBUTE && r.getAttribute(o) === t + "")
      return at;
    return pc(e), t;
  }
});
var De = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this, {
      value: (e) => e.checked ? e.value || "on" : void 0,
      defaultValue: (e) => e.defaultChecked,
      setValue: (e, t) => e.checked = t
    }), this.hasSlotController = new Je(this, "help-text"), this.hasFocus = !1, this.title = "", this.name = "", this.size = "medium", this.disabled = !1, this.checked = !1, this.indeterminate = !1, this.defaultChecked = !1, this.form = "", this.required = !1, this.helpText = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleClick() {
    this.checked = !this.checked, this.indeterminate = !1, this.emit("sl-change");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleInput() {
    this.emit("sl-input");
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked, this.input.indeterminate = this.indeterminate, this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(e) {
    this.input.focus(e);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(e) {
    this.input.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("help-text"), t = this.helpText ? !0 : !!e;
    return C`
      <div
        class=${H({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": t
    })}
      >
        <label
          part="base"
          class=${H({
      checkbox: !0,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${P(this.value)}
            .indeterminate=${lr(this.indeterminate)}
            .checked=${lr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? C`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                ` : ""}
            ${!this.checked && this.indeterminate ? C`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                ` : ""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
De.styles = [F, Ql];
De.dependencies = { "sl-icon": xe };
a([
  A('input[type="checkbox"]')
], De.prototype, "input", 2);
a([
  U()
], De.prototype, "hasFocus", 2);
a([
  u()
], De.prototype, "title", 2);
a([
  u()
], De.prototype, "name", 2);
a([
  u()
], De.prototype, "value", 2);
a([
  u({ reflect: !0 })
], De.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], De.prototype, "disabled", 2);
a([
  u({ type: Boolean, reflect: !0 })
], De.prototype, "checked", 2);
a([
  u({ type: Boolean, reflect: !0 })
], De.prototype, "indeterminate", 2);
a([
  ur("checked")
], De.prototype, "defaultChecked", 2);
a([
  u({ reflect: !0 })
], De.prototype, "form", 2);
a([
  u({ type: Boolean, reflect: !0 })
], De.prototype, "required", 2);
a([
  u({ attribute: "help-text" })
], De.prototype, "helpText", 2);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], De.prototype, "handleDisabledChange", 1);
a([
  E(["checked", "indeterminate"], { waitUntilFirstUpdate: !0 })
], De.prototype, "handleStateChange", 1);
var fc = L`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;
const Us = /* @__PURE__ */ new Set(), mc = new MutationObserver(ca), $r = /* @__PURE__ */ new Map();
let na = document.documentElement.dir || "ltr", aa = document.documentElement.lang || navigator.language, sr;
mc.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir", "lang"]
});
function la(...e) {
  e.map((t) => {
    const r = t.$code.toLowerCase();
    $r.has(r) ? $r.set(r, Object.assign(Object.assign({}, $r.get(r)), t)) : $r.set(r, t), sr || (sr = t);
  }), ca();
}
function ca() {
  na = document.documentElement.dir || "ltr", aa = document.documentElement.lang || navigator.language, [...Us.keys()].map((e) => {
    typeof e.requestUpdate == "function" && e.requestUpdate();
  });
}
let gc = class {
  constructor(t) {
    this.host = t, this.host.addController(this);
  }
  hostConnected() {
    Us.add(this.host);
  }
  hostDisconnected() {
    Us.delete(this.host);
  }
  dir() {
    return `${this.host.dir || na}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || aa}`.toLowerCase();
  }
  getTranslationData(t) {
    var r, o;
    const s = new Intl.Locale(t.replace(/_/g, "-")), i = s == null ? void 0 : s.language.toLowerCase(), n = (o = (r = s == null ? void 0 : s.region) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && o !== void 0 ? o : "", c = $r.get(`${i}-${n}`), l = $r.get(i);
    return { locale: s, language: i, region: n, primary: c, secondary: l };
  }
  exists(t, r) {
    var o;
    const { primary: s, secondary: i } = this.getTranslationData((o = r.lang) !== null && o !== void 0 ? o : this.lang());
    return r = Object.assign({ includeFallback: !1 }, r), !!(s && s[t] || i && i[t] || r.includeFallback && sr && sr[t]);
  }
  term(t, ...r) {
    const { primary: o, secondary: s } = this.getTranslationData(this.lang());
    let i;
    if (o && o[t])
      i = o[t];
    else if (s && s[t])
      i = s[t];
    else if (sr && sr[t])
      i = sr[t];
    else
      return console.error(`No translation found for: ${String(t)}`), String(t);
    return typeof i == "function" ? i(...r) : i;
  }
  date(t, r) {
    return t = new Date(t), new Intl.DateTimeFormat(this.lang(), r).format(t);
  }
  number(t, r) {
    return t = Number(t), isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), r).format(t);
  }
  relativeTime(t, r, o) {
    return new Intl.RelativeTimeFormat(this.lang(), o).format(t, r);
  }
};
var da = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (e, t) => `Go to slide ${e} of ${t}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (e) => e === 0 ? "No options selected" : e === 1 ? "1 option selected" : `${e} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (e) => `Slide ${e}`,
  toggleColorFormat: "Toggle color format"
};
la(da);
var bc = da, de = class extends gc {
};
la(bc);
var Mr = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this);
  }
  render() {
    return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
Mr.styles = [F, fc];
var ua = /* @__PURE__ */ new Map(), vc = /* @__PURE__ */ new WeakMap();
function yc(e) {
  return e ?? { keyframes: [], options: { duration: 0 } };
}
function Gi(e, t) {
  return t.toLowerCase() === "rtl" ? {
    keyframes: e.rtlKeyframes || e.keyframes,
    options: e.options
  } : e;
}
function be(e, t) {
  ua.set(e, yc(t));
}
function $e(e, t, r) {
  const o = vc.get(e);
  if (o != null && o[t])
    return Gi(o[t], r.dir);
  const s = ua.get(t);
  return s ? Gi(s, r.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function Ne(e, t, r) {
  return new Promise((o) => {
    if ((r == null ? void 0 : r.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const s = e.animate(t, fo(Dt({}, r), {
      duration: js() ? 0 : r.duration
    }));
    s.addEventListener("cancel", o, { once: !0 }), s.addEventListener("finish", o, { once: !0 });
  });
}
function Ji(e) {
  return e = e.toString().toLowerCase(), e.indexOf("ms") > -1 ? parseFloat(e) : e.indexOf("s") > -1 ? parseFloat(e) * 1e3 : parseFloat(e);
}
function js() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Me(e) {
  return Promise.all(
    e.getAnimations().map((t) => new Promise((r) => {
      t.cancel(), requestAnimationFrame(r);
    }))
  );
}
function Vo(e, t) {
  return e.map((r) => fo(Dt({}, r), {
    height: r.height === "auto" ? `${t}px` : r.height
  }));
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Zi(e, t, r) {
  return e ? t(e) : r == null ? void 0 : r(e);
}
var Ie = class Ws extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.indeterminate = !1, this.isLeaf = !1, this.loading = !1, this.selectable = !1, this.expanded = !1, this.selected = !1, this.disabled = !1, this.lazy = !1;
  }
  static isTreeItem(t) {
    return t instanceof Element && t.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "treeitem"), this.setAttribute("tabindex", "-1"), this.isNestedItem() && (this.slot = "children");
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded, this.childrenContainer.style.height = this.expanded ? "auto" : "0", this.isLeaf = !this.lazy && this.getChildrenItems().length === 0, this.handleExpandedChange();
  }
  async animateCollapse() {
    this.emit("sl-collapse"), await Me(this.childrenContainer);
    const { keyframes: t, options: r } = $e(this, "tree-item.collapse", { dir: this.localize.dir() });
    await Ne(
      this.childrenContainer,
      Vo(t, this.childrenContainer.scrollHeight),
      r
    ), this.childrenContainer.hidden = !0, this.emit("sl-after-collapse");
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const t = this.parentElement;
    return !!t && Ws.isTreeItem(t);
  }
  handleChildrenSlotChange() {
    this.loading = !1, this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(t) {
    t.has("selected") && !t.has("indeterminate") && (this.indeterminate = !1);
  }
  async animateExpand() {
    this.emit("sl-expand"), await Me(this.childrenContainer), this.childrenContainer.hidden = !1;
    const { keyframes: t, options: r } = $e(this, "tree-item.expand", { dir: this.localize.dir() });
    await Ne(
      this.childrenContainer,
      Vo(t, this.childrenContainer.scrollHeight),
      r
    ), this.childrenContainer.style.height = "auto", this.emit("sl-after-expand");
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false"), this.loading || this.animateExpand();
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    this.isLeaf ? this.removeAttribute("aria-expanded") : this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
  }
  handleExpandAnimation() {
    this.expanded ? this.lazy ? (this.loading = !0, this.emit("sl-lazy-load")) : this.animateExpand() : this.animateCollapse();
  }
  handleLazyChange() {
    this.emit("sl-lazy-change");
  }
  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled: t = !0 } = {}) {
    return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: !0 })].filter(
      (r) => Ws.isTreeItem(r) && (t || !r.disabled)
    ) : [];
  }
  render() {
    const t = this.localize.dir() === "rtl", r = !this.loading && (!this.isLeaf || this.lazy);
    return C`
      <div
        part="base"
        class="${H({
      "tree-item": !0,
      "tree-item--expanded": this.expanded,
      "tree-item--selected": this.selected,
      "tree-item--disabled": this.disabled,
      "tree-item--leaf": this.isLeaf,
      "tree-item--has-expand-button": r,
      "tree-item--rtl": this.localize.dir() === "rtl"
    })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${H({
      "tree-item__expand-button": !0,
      "tree-item__expand-button--visible": r
    })}
            aria-hidden="true"
          >
            ${Zi(this.loading, () => C` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Zi(
      this.selectable,
      () => C`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${lr(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `
    )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
};
Ie.styles = [F, Zl];
Ie.dependencies = {
  "sl-checkbox": De,
  "sl-icon": xe,
  "sl-spinner": Mr
};
a([
  U()
], Ie.prototype, "indeterminate", 2);
a([
  U()
], Ie.prototype, "isLeaf", 2);
a([
  U()
], Ie.prototype, "loading", 2);
a([
  U()
], Ie.prototype, "selectable", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ie.prototype, "expanded", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ie.prototype, "selected", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ie.prototype, "disabled", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ie.prototype, "lazy", 2);
a([
  A("slot:not([name])")
], Ie.prototype, "defaultSlot", 2);
a([
  A("slot[name=children]")
], Ie.prototype, "childrenSlot", 2);
a([
  A(".tree-item__item")
], Ie.prototype, "itemElement", 2);
a([
  A(".tree-item__children")
], Ie.prototype, "childrenContainer", 2);
a([
  A(".tree-item__expand-button slot")
], Ie.prototype, "expandButtonSlot", 2);
a([
  E("loading", { waitUntilFirstUpdate: !0 })
], Ie.prototype, "handleLoadingChange", 1);
a([
  E("disabled")
], Ie.prototype, "handleDisabledChange", 1);
a([
  E("selected")
], Ie.prototype, "handleSelectedChange", 1);
a([
  E("expanded", { waitUntilFirstUpdate: !0 })
], Ie.prototype, "handleExpandedChange", 1);
a([
  E("expanded", { waitUntilFirstUpdate: !0 })
], Ie.prototype, "handleExpandAnimation", 1);
a([
  E("lazy", { waitUntilFirstUpdate: !0 })
], Ie.prototype, "handleLazyChange", 1);
var zr = Ie;
be("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" }
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
be("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" }
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
var wc = "sl-tree-item";
zr.define("sl-tree-item");
D({
  tagName: wc,
  elementClass: zr,
  react: I,
  events: {
    onSlExpand: "sl-expand",
    onSlAfterExpand: "sl-after-expand",
    onSlCollapse: "sl-collapse",
    onSlAfterCollapse: "sl-after-collapse",
    onSlLazyChange: "sl-lazy-change",
    onSlLazyLoad: "sl-lazy-load"
  },
  displayName: "SlTreeItem"
});
var xc = L`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`, Dr = L`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`, We = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this, {
      value: (e) => e.checked ? e.value || "on" : void 0,
      defaultValue: (e) => e.defaultChecked,
      setValue: (e, t) => e.checked = t
    }), this.hasSlotController = new Je(this, "help-text"), this.hasFocus = !1, this.title = "", this.name = "", this.size = "medium", this.disabled = !1, this.checked = !1, this.defaultChecked = !1, this.form = "", this.required = !1, this.helpText = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleInput() {
    this.emit("sl-input");
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleClick() {
    this.checked = !this.checked, this.emit("sl-change");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleKeyDown(e) {
    e.key === "ArrowLeft" && (e.preventDefault(), this.checked = !1, this.emit("sl-change"), this.emit("sl-input")), e.key === "ArrowRight" && (e.preventDefault(), this.checked = !0, this.emit("sl-change"), this.emit("sl-input"));
  }
  handleCheckedChange() {
    this.input.checked = this.checked, this.formControlController.updateValidity();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(!0);
  }
  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }
  /** Sets focus on the switch. */
  focus(e) {
    this.input.focus(e);
  }
  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.input.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("help-text"), t = this.helpText ? !0 : !!e;
    return C`
      <div
        class=${H({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": t
    })}
      >
        <label
          part="base"
          class=${H({
      switch: !0,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus,
      "switch--small": this.size === "small",
      "switch--medium": this.size === "medium",
      "switch--large": this.size === "large"
    })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${P(this.value)}
            .checked=${lr(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
We.styles = [F, Dr, xc];
a([
  A('input[type="checkbox"]')
], We.prototype, "input", 2);
a([
  U()
], We.prototype, "hasFocus", 2);
a([
  u()
], We.prototype, "title", 2);
a([
  u()
], We.prototype, "name", 2);
a([
  u()
], We.prototype, "value", 2);
a([
  u({ reflect: !0 })
], We.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], We.prototype, "disabled", 2);
a([
  u({ type: Boolean, reflect: !0 })
], We.prototype, "checked", 2);
a([
  ur("checked")
], We.prototype, "defaultChecked", 2);
a([
  u({ reflect: !0 })
], We.prototype, "form", 2);
a([
  u({ type: Boolean, reflect: !0 })
], We.prototype, "required", 2);
a([
  u({ attribute: "help-text" })
], We.prototype, "helpText", 2);
a([
  E("checked", { waitUntilFirstUpdate: !0 })
], We.prototype, "handleCheckedChange", 1);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], We.prototype, "handleDisabledChange", 1);
var _c = "sl-switch";
We.define("sl-switch");
D({
  tagName: _c,
  elementClass: We,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlSwitch"
});
var kc = L`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`, Cc = L`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ha = Symbol.for(""), Sc = (e) => {
  if ((e == null ? void 0 : e.r) === ha)
    return e == null ? void 0 : e._$litStatic$;
}, Fo = (e, ...t) => ({ _$litStatic$: t.reduce((r, o, s) => r + ((i) => {
  if (i._$litStatic$ !== void 0)
    return i._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(o) + e[s + 1], e[0]), r: ha }), Qi = /* @__PURE__ */ new Map(), $c = (e) => (t, ...r) => {
  const o = r.length;
  let s, i;
  const n = [], c = [];
  let l, d = 0, f = !1;
  for (; d < o; ) {
    for (l = t[d]; d < o && (i = r[d], (s = Sc(i)) !== void 0); )
      l += s + t[++d], f = !0;
    d !== o && c.push(i), n.push(l), d++;
  }
  if (d === o && n.push(t[o]), f) {
    const h = n.join("$$lit$$");
    (t = Qi.get(h)) === void 0 && (n.raw = n, Qi.set(h, t = n)), r = c;
  }
  return e(t, ...r);
}, oo = $c(C);
var Le = class extends R {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick(e) {
    this.disabled && (e.preventDefault(), e.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(e) {
    this.button.focus(e);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const e = !!this.href, t = e ? Fo`a` : Fo`button`;
    return oo`
      <${t}
        part="base"
        class=${H({
      "icon-button": !0,
      "icon-button--disabled": !e && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${P(e ? void 0 : this.disabled)}
        type=${P(e ? void 0 : "button")}
        href=${P(e ? this.href : void 0)}
        target=${P(e ? this.target : void 0)}
        download=${P(e ? this.download : void 0)}
        rel=${P(e && this.target ? "noreferrer noopener" : void 0)}
        role=${P(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${P(this.name)}
          library=${P(this.library)}
          src=${P(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `;
  }
};
Le.styles = [F, Cc];
Le.dependencies = { "sl-icon": xe };
a([
  A(".icon-button")
], Le.prototype, "button", 2);
a([
  U()
], Le.prototype, "hasFocus", 2);
a([
  u()
], Le.prototype, "name", 2);
a([
  u()
], Le.prototype, "library", 2);
a([
  u()
], Le.prototype, "src", 2);
a([
  u()
], Le.prototype, "href", 2);
a([
  u()
], Le.prototype, "target", 2);
a([
  u()
], Le.prototype, "download", 2);
a([
  u()
], Le.prototype, "label", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Le.prototype, "disabled", 2);
var Ec = 0, _t = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.attrId = ++Ec, this.componentId = `sl-tab-${this.attrId}`, this.panel = "", this.active = !1, this.closable = !1, this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "tab");
  }
  handleCloseClick(e) {
    e.stopPropagation(), this.emit("sl-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus to the tab. */
  focus(e) {
    this.tab.focus(e);
  }
  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }
  render() {
    return this.id = this.id.length > 0 ? this.id : this.componentId, C`
      <div
        part="base"
        class=${H({
      tab: !0,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        tabindex=${this.disabled ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
_t.styles = [F, kc];
_t.dependencies = { "sl-icon-button": Le };
a([
  A(".tab")
], _t.prototype, "tab", 2);
a([
  u({ reflect: !0 })
], _t.prototype, "panel", 2);
a([
  u({ type: Boolean, reflect: !0 })
], _t.prototype, "active", 2);
a([
  u({ type: Boolean })
], _t.prototype, "closable", 2);
a([
  u({ type: Boolean, reflect: !0 })
], _t.prototype, "disabled", 2);
a([
  E("active")
], _t.prototype, "handleActiveChange", 1);
a([
  E("disabled")
], _t.prototype, "handleDisabledChange", 1);
var zc = "sl-tab";
_t.define("sl-tab");
D({
  tagName: zc,
  elementClass: _t,
  react: I,
  events: {
    onSlClose: "sl-close"
  },
  displayName: "SlTab"
});
var Ac = L`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`, Tc = 0, Lr = class extends R {
  constructor() {
    super(...arguments), this.attrId = ++Tc, this.componentId = `sl-tab-panel-${this.attrId}`, this.name = "", this.active = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id = this.id.length > 0 ? this.id : this.componentId, this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return C`
      <slot
        part="base"
        class=${H({
      "tab-panel": !0,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
Lr.styles = [F, Ac];
a([
  u({ reflect: !0 })
], Lr.prototype, "name", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Lr.prototype, "active", 2);
a([
  E("active")
], Lr.prototype, "handleActiveChange", 1);
var Oc = "sl-tab-panel";
Lr.define("sl-tab-panel");
D({
  tagName: Oc,
  elementClass: Lr,
  react: I,
  events: {},
  displayName: "SlTabPanel"
});
var Nc = L`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;
function Ic(e, t) {
  return {
    top: Math.round(e.getBoundingClientRect().top - t.getBoundingClientRect().top),
    left: Math.round(e.getBoundingClientRect().left - t.getBoundingClientRect().left)
  };
}
var qs = /* @__PURE__ */ new Set();
function Rc() {
  const e = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - e);
}
function so(e) {
  if (qs.add(e), !document.body.classList.contains("sl-scroll-lock")) {
    const t = Rc();
    document.body.classList.add("sl-scroll-lock"), document.body.style.setProperty("--sl-scroll-lock-size", `${t}px`);
  }
}
function io(e) {
  qs.delete(e), qs.size === 0 && (document.body.classList.remove("sl-scroll-lock"), document.body.style.removeProperty("--sl-scroll-lock-size"));
}
function Ks(e, t, r = "vertical", o = "smooth") {
  const s = Ic(e, t), i = s.top + t.scrollTop, n = s.left + t.scrollLeft, c = t.scrollLeft, l = t.scrollLeft + t.offsetWidth, d = t.scrollTop, f = t.scrollTop + t.offsetHeight;
  (r === "horizontal" || r === "both") && (n < c ? t.scrollTo({ left: n, behavior: o }) : n + e.clientWidth > l && t.scrollTo({ left: n - t.offsetWidth + e.clientWidth, behavior: o })), (r === "vertical" || r === "both") && (i < d ? t.scrollTo({ top: i, behavior: o }) : i + e.clientHeight > f && t.scrollTo({ top: i - t.offsetHeight + e.clientHeight, behavior: o }));
}
var Qe = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.tabs = [], this.panels = [], this.hasScrollControls = !1, this.placement = "top", this.activation = "auto", this.noScrollControls = !1;
  }
  connectedCallback() {
    const e = Promise.all([
      customElements.whenDefined("sl-tab"),
      customElements.whenDefined("sl-tab-panel")
    ]);
    super.connectedCallback(), this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator(), this.updateScrollControls();
    }), this.mutationObserver = new MutationObserver((t) => {
      t.some((r) => !["aria-labelledby", "aria-controls"].includes(r.attributeName)) && setTimeout(() => this.setAriaLabels()), t.some((r) => r.attributeName === "disabled") && this.syncTabsAndPanels();
    }), this.updateComplete.then(() => {
      this.syncTabsAndPanels(), this.mutationObserver.observe(this, { attributes: !0, childList: !0, subtree: !0 }), this.resizeObserver.observe(this.nav), e.then(() => {
        new IntersectionObserver((r, o) => {
          var s;
          r[0].intersectionRatio > 0 && (this.setAriaLabels(), this.setActiveTab((s = this.getActiveTab()) != null ? s : this.tabs[0], { emitEvents: !1 }), o.unobserve(r[0].target));
        }).observe(this.tabGroup);
      });
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver.disconnect(), this.resizeObserver.unobserve(this.nav);
  }
  getAllTabs(e = { includeDisabled: !0 }) {
    return [...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter((r) => e.includeDisabled ? r.tagName.toLowerCase() === "sl-tab" : r.tagName.toLowerCase() === "sl-tab" && !r.disabled);
  }
  getAllPanels() {
    return [...this.body.assignedElements()].filter((e) => e.tagName.toLowerCase() === "sl-tab-panel");
  }
  getActiveTab() {
    return this.tabs.find((e) => e.active);
  }
  handleClick(e) {
    const r = e.target.closest("sl-tab");
    (r == null ? void 0 : r.closest("sl-tab-group")) === this && r !== null && this.setActiveTab(r, { scrollBehavior: "smooth" });
  }
  handleKeyDown(e) {
    const r = e.target.closest("sl-tab");
    if ((r == null ? void 0 : r.closest("sl-tab-group")) === this && (["Enter", " "].includes(e.key) && r !== null && (this.setActiveTab(r, { scrollBehavior: "smooth" }), e.preventDefault()), ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))) {
      const s = this.tabs.find((n) => n.matches(":focus")), i = this.localize.dir() === "rtl";
      if ((s == null ? void 0 : s.tagName.toLowerCase()) === "sl-tab") {
        let n = this.tabs.indexOf(s);
        e.key === "Home" ? n = 0 : e.key === "End" ? n = this.tabs.length - 1 : ["top", "bottom"].includes(this.placement) && e.key === (i ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && e.key === "ArrowUp" ? n-- : (["top", "bottom"].includes(this.placement) && e.key === (i ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && e.key === "ArrowDown") && n++, n < 0 && (n = this.tabs.length - 1), n > this.tabs.length - 1 && (n = 0), this.tabs[n].focus({ preventScroll: !0 }), this.activation === "auto" && this.setActiveTab(this.tabs[n], { scrollBehavior: "smooth" }), ["top", "bottom"].includes(this.placement) && Ks(this.tabs[n], this.nav, "horizontal"), e.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  setActiveTab(e, t) {
    if (t = Dt({
      emitEvents: !0,
      scrollBehavior: "auto"
    }, t), e !== this.activeTab && !e.disabled) {
      const r = this.activeTab;
      this.activeTab = e, this.tabs.forEach((o) => o.active = o === this.activeTab), this.panels.forEach((o) => {
        var s;
        return o.active = o.name === ((s = this.activeTab) == null ? void 0 : s.panel);
      }), this.syncIndicator(), ["top", "bottom"].includes(this.placement) && Ks(this.activeTab, this.nav, "horizontal", t.scrollBehavior), t.emitEvents && (r && this.emit("sl-tab-hide", { detail: { name: r.panel } }), this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } }));
    }
  }
  setAriaLabels() {
    this.tabs.forEach((e) => {
      const t = this.panels.find((r) => r.name === e.panel);
      t && (e.setAttribute("aria-controls", t.getAttribute("id")), t.setAttribute("aria-labelledby", e.getAttribute("id")));
    });
  }
  repositionIndicator() {
    const e = this.getActiveTab();
    if (!e)
      return;
    const t = e.clientWidth, r = e.clientHeight, o = this.localize.dir() === "rtl", s = this.getAllTabs(), n = s.slice(0, s.indexOf(e)).reduce(
      (c, l) => ({
        left: c.left + l.clientWidth,
        top: c.top + l.clientHeight
      }),
      { left: 0, top: 0 }
    );
    switch (this.placement) {
      case "top":
      case "bottom":
        this.indicator.style.width = `${t}px`, this.indicator.style.height = "auto", this.indicator.style.translate = o ? `${-1 * n.left}px` : `${n.left}px`;
        break;
      case "start":
      case "end":
        this.indicator.style.width = "auto", this.indicator.style.height = `${r}px`, this.indicator.style.translate = `0 ${n.top}px`;
        break;
    }
  }
  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  syncTabsAndPanels() {
    this.tabs = this.getAllTabs({ includeDisabled: !1 }), this.panels = this.getAllPanels(), this.syncIndicator(), this.updateComplete.then(() => this.updateScrollControls());
  }
  updateScrollControls() {
    this.noScrollControls ? this.hasScrollControls = !1 : this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
  }
  syncIndicator() {
    this.getActiveTab() ? (this.indicator.style.display = "block", this.repositionIndicator()) : this.indicator.style.display = "none";
  }
  /** Shows the specified tab panel. */
  show(e) {
    const t = this.tabs.find((r) => r.panel === e);
    t && this.setActiveTab(t, { scrollBehavior: "smooth" });
  }
  render() {
    const e = this.localize.dir() === "rtl";
    return C`
      <div
        part="base"
        class=${H({
      "tab-group": !0,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--rtl": this.localize.dir() === "rtl",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? C`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e ? "chevron-right" : "chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? C`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e ? "chevron-left" : "chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
};
Qe.styles = [F, Nc];
Qe.dependencies = { "sl-icon-button": Le };
a([
  A(".tab-group")
], Qe.prototype, "tabGroup", 2);
a([
  A(".tab-group__body")
], Qe.prototype, "body", 2);
a([
  A(".tab-group__nav")
], Qe.prototype, "nav", 2);
a([
  A(".tab-group__indicator")
], Qe.prototype, "indicator", 2);
a([
  U()
], Qe.prototype, "hasScrollControls", 2);
a([
  u()
], Qe.prototype, "placement", 2);
a([
  u()
], Qe.prototype, "activation", 2);
a([
  u({ attribute: "no-scroll-controls", type: Boolean })
], Qe.prototype, "noScrollControls", 2);
a([
  E("noScrollControls", { waitUntilFirstUpdate: !0 })
], Qe.prototype, "updateScrollControls", 1);
a([
  E("placement", { waitUntilFirstUpdate: !0 })
], Qe.prototype, "syncIndicator", 1);
var Pc = "sl-tab-group";
Qe.define("sl-tab-group");
D({
  tagName: Pc,
  elementClass: Qe,
  react: I,
  events: {
    onSlTabShow: "sl-tab-show",
    onSlTabHide: "sl-tab-hide"
  },
  displayName: "SlTabGroup"
});
var Mc = L`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`, Bt = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return C`
      <span
        part="base"
        class=${H({
      tag: !0,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? C`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
Bt.styles = [F, Mc];
Bt.dependencies = { "sl-icon-button": Le };
a([
  u({ reflect: !0 })
], Bt.prototype, "variant", 2);
a([
  u({ reflect: !0 })
], Bt.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Bt.prototype, "pill", 2);
a([
  u({ type: Boolean })
], Bt.prototype, "removable", 2);
var Dc = "sl-tag";
Bt.define("sl-tag");
D({
  tagName: Dc,
  elementClass: Bt,
  react: I,
  events: {
    onSlRemove: "sl-remove"
  },
  displayName: "SlTag"
});
var Lc = L`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`, Bc = L`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;
const Yt = Math.min, it = Math.max, Ho = Math.round, Eo = Math.floor, Xt = (e) => ({
  x: e,
  y: e
}), Vc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fc = {
  start: "end",
  end: "start"
};
function Ys(e, t, r) {
  return it(e, Yt(t, r));
}
function Br(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gt(e) {
  return e.split("-")[0];
}
function Vr(e) {
  return e.split("-")[1];
}
function pa(e) {
  return e === "x" ? "y" : "x";
}
function li(e) {
  return e === "y" ? "height" : "width";
}
function bo(e) {
  return ["top", "bottom"].includes(Gt(e)) ? "y" : "x";
}
function ci(e) {
  return pa(bo(e));
}
function Hc(e, t, r) {
  r === void 0 && (r = !1);
  const o = Vr(e), s = ci(e), i = li(s);
  let n = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (n = Uo(n)), [n, Uo(n)];
}
function Uc(e) {
  const t = Uo(e);
  return [Xs(e), t, Xs(t)];
}
function Xs(e) {
  return e.replace(/start|end/g, (t) => Fc[t]);
}
function jc(e, t, r) {
  const o = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], n = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? i : n;
    default:
      return [];
  }
}
function Wc(e, t, r, o) {
  const s = Vr(e);
  let i = jc(Gt(e), r === "start", o);
  return s && (i = i.map((n) => n + "-" + s), t && (i = i.concat(i.map(Xs)))), i;
}
function Uo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vc[t]);
}
function qc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fa(e) {
  return typeof e != "number" ? qc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function jo(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function en(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const i = bo(t), n = ci(t), c = li(n), l = Gt(t), d = i === "y", f = o.x + o.width / 2 - s.width / 2, h = o.y + o.height / 2 - s.height / 2, p = o[c] / 2 - s[c] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: f,
        y: o.y - s.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: h
      };
      break;
    case "left":
      m = {
        x: o.x - s.width,
        y: h
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (Vr(t)) {
    case "start":
      m[n] -= p * (r && d ? -1 : 1);
      break;
    case "end":
      m[n] += p * (r && d ? -1 : 1);
      break;
  }
  return m;
}
const Kc = async (e, t, r) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: n
  } = r, c = i.filter(Boolean), l = await (n.isRTL == null ? void 0 : n.isRTL(t));
  let d = await n.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: f,
    y: h
  } = en(d, o, l), p = o, m = {}, g = 0;
  for (let b = 0; b < c.length; b++) {
    const {
      name: y,
      fn: k
    } = c[b], {
      x,
      y: _,
      data: w,
      reset: v
    } = await k({
      x: f,
      y: h,
      initialPlacement: o,
      placement: p,
      strategy: s,
      middlewareData: m,
      rects: d,
      platform: n,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (f = x ?? f, h = _ ?? h, m = {
      ...m,
      [y]: {
        ...m[y],
        ...w
      }
    }, v && g <= 50) {
      g++, typeof v == "object" && (v.placement && (p = v.placement), v.rects && (d = v.rects === !0 ? await n.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : v.rects), {
        x: f,
        y: h
      } = en(d, p, l)), b = -1;
      continue;
    }
  }
  return {
    x: f,
    y: h,
    placement: p,
    strategy: s,
    middlewareData: m
  };
};
async function di(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: i,
    rects: n,
    elements: c,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = Br(t, e), g = fa(m), y = c[p ? h === "floating" ? "reference" : "floating" : h], k = jo(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(y))) == null || r ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), x = h === "floating" ? {
    ...n.floating,
    x: o,
    y: s
  } : n.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), w = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = jo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: _,
    strategy: l
  }) : x);
  return {
    top: (k.top - v.top + g.top) / w.y,
    bottom: (v.bottom - k.bottom + g.bottom) / w.y,
    left: (k.left - v.left + g.left) / w.x,
    right: (v.right - k.right + g.right) / w.x
  };
}
const Yc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: o,
      placement: s,
      rects: i,
      platform: n,
      elements: c,
      middlewareData: l
    } = t, {
      element: d,
      padding: f = 0
    } = Br(e, t) || {};
    if (d == null)
      return {};
    const h = fa(f), p = {
      x: r,
      y: o
    }, m = ci(s), g = li(m), b = await n.getDimensions(d), y = m === "y", k = y ? "top" : "left", x = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", w = i.reference[g] + i.reference[m] - p[m] - i.floating[g], v = p[m] - i.reference[m], z = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(d));
    let V = z ? z[_] : 0;
    (!V || !await (n.isElement == null ? void 0 : n.isElement(z))) && (V = c.floating[_] || i.floating[g]);
    const j = w / 2 - v / 2, M = V / 2 - b[g] / 2 - 1, S = Yt(h[k], M), X = Yt(h[x], M), Y = S, ve = V - b[g] - X, W = V / 2 - b[g] / 2 + j, _e = Ys(Y, W, ve), ye = !l.arrow && Vr(s) != null && W != _e && i.reference[g] / 2 - (W < Y ? S : X) - b[g] / 2 < 0, Be = ye ? W < Y ? W - Y : W - ve : 0;
    return {
      [m]: p[m] + Be,
      data: {
        [m]: _e,
        centerOffset: W - _e - Be,
        ...ye && {
          alignmentOffset: Be
        }
      },
      reset: ye
    };
  }
}), Xc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: s,
        middlewareData: i,
        rects: n,
        initialPlacement: c,
        platform: l,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: h = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: b = !0,
        ...y
      } = Br(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const k = Gt(s), x = Gt(c) === c, _ = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), w = p || (x || !b ? [Uo(c)] : Uc(c));
      !p && g !== "none" && w.push(...Wc(c, b, g, _));
      const v = [c, ...w], z = await di(t, y), V = [];
      let j = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (f && V.push(z[k]), h) {
        const Y = Hc(s, n, _);
        V.push(z[Y[0]], z[Y[1]]);
      }
      if (j = [...j, {
        placement: s,
        overflows: V
      }], !V.every((Y) => Y <= 0)) {
        var M, S;
        const Y = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, ve = v[Y];
        if (ve)
          return {
            data: {
              index: Y,
              overflows: j
            },
            reset: {
              placement: ve
            }
          };
        let W = (S = j.filter((_e) => _e.overflows[0] <= 0).sort((_e, ye) => _e.overflows[1] - ye.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!W)
          switch (m) {
            case "bestFit": {
              var X;
              const _e = (X = j.map((ye) => [ye.placement, ye.overflows.filter((Be) => Be > 0).reduce((Be, Ot) => Be + Ot, 0)]).sort((ye, Be) => ye[1] - Be[1])[0]) == null ? void 0 : X[0];
              _e && (W = _e);
              break;
            }
            case "initialPlacement":
              W = c;
              break;
          }
        if (s !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
async function Gc(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), n = Gt(r), c = Vr(r), l = bo(r) === "y", d = ["left", "top"].includes(n) ? -1 : 1, f = i && l ? -1 : 1, h = Br(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: g
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return c && typeof g == "number" && (m = c === "end" ? g * -1 : g), l ? {
    x: m * f,
    y: p * d
  } : {
    x: p * d,
    y: m * f
  };
}
const Jc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, o;
      const {
        x: s,
        y: i,
        placement: n,
        middlewareData: c
      } = t, l = await Gc(t, e);
      return n === ((r = c.offset) == null ? void 0 : r.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: s + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: n
        }
      };
    }
  };
}, Zc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: o,
        placement: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: n = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: k,
              y: x
            } = y;
            return {
              x: k,
              y: x
            };
          }
        },
        ...l
      } = Br(e, t), d = {
        x: r,
        y: o
      }, f = await di(t, l), h = bo(Gt(s)), p = pa(h);
      let m = d[p], g = d[h];
      if (i) {
        const y = p === "y" ? "top" : "left", k = p === "y" ? "bottom" : "right", x = m + f[y], _ = m - f[k];
        m = Ys(x, m, _);
      }
      if (n) {
        const y = h === "y" ? "top" : "left", k = h === "y" ? "bottom" : "right", x = g + f[y], _ = g - f[k];
        g = Ys(x, g, _);
      }
      const b = c.fn({
        ...t,
        [p]: m,
        [h]: g
      });
      return {
        ...b,
        data: {
          x: b.x - r,
          y: b.y - o
        }
      };
    }
  };
}, Qc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: r,
        rects: o,
        platform: s,
        elements: i
      } = t, {
        apply: n = () => {
        },
        ...c
      } = Br(e, t), l = await di(t, c), d = Gt(r), f = Vr(r), h = bo(r) === "y", {
        width: p,
        height: m
      } = o.floating;
      let g, b;
      d === "top" || d === "bottom" ? (g = d, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = d, g = f === "end" ? "top" : "bottom");
      const y = m - l[g], k = p - l[b], x = !t.middlewareData.shift;
      let _ = y, w = k;
      if (h) {
        const z = p - l.left - l.right;
        w = f || x ? Yt(k, z) : z;
      } else {
        const z = m - l.top - l.bottom;
        _ = f || x ? Yt(y, z) : z;
      }
      if (x && !f) {
        const z = it(l.left, 0), V = it(l.right, 0), j = it(l.top, 0), M = it(l.bottom, 0);
        h ? w = p - 2 * (z !== 0 || V !== 0 ? z + V : it(l.left, l.right)) : _ = m - 2 * (j !== 0 || M !== 0 ? j + M : it(l.top, l.bottom));
      }
      await n({
        ...t,
        availableWidth: w,
        availableHeight: _
      });
      const v = await s.getDimensions(i.floating);
      return p !== v.width || m !== v.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Jt(e) {
  return ma(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function lt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vt(e) {
  var t;
  return (t = (ma(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ma(e) {
  return e instanceof Node || e instanceof lt(e).Node;
}
function Pt(e) {
  return e instanceof Element || e instanceof lt(e).Element;
}
function Tt(e) {
  return e instanceof HTMLElement || e instanceof lt(e).HTMLElement;
}
function tn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot;
}
function vo(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: o,
    display: s
  } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(s);
}
function ed(e) {
  return ["table", "td", "th"].includes(Jt(e));
}
function ui(e) {
  const t = hi(), r = pt(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (r.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (r.contain || "").includes(o));
}
function td(e) {
  let t = Ir(e);
  for (; Tt(t) && !es(t); ) {
    if (ui(t))
      return t;
    t = Ir(t);
  }
  return null;
}
function hi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function es(e) {
  return ["html", "body", "#document"].includes(Jt(e));
}
function pt(e) {
  return lt(e).getComputedStyle(e);
}
function ts(e) {
  return Pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ir(e) {
  if (Jt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    tn(e) && e.host || // Fallback.
    Vt(e)
  );
  return tn(t) ? t.host : t;
}
function ga(e) {
  const t = Ir(e);
  return es(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Tt(t) && vo(t) ? t : ga(t);
}
function ho(e, t, r) {
  var o;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = ga(e), i = s === ((o = e.ownerDocument) == null ? void 0 : o.body), n = lt(s);
  return i ? t.concat(n, n.visualViewport || [], vo(s) ? s : [], n.frameElement && r ? ho(n.frameElement) : []) : t.concat(s, ho(s, [], r));
}
function ba(e) {
  const t = pt(e);
  let r = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const s = Tt(e), i = s ? e.offsetWidth : r, n = s ? e.offsetHeight : o, c = Ho(r) !== i || Ho(o) !== n;
  return c && (r = i, o = n), {
    width: r,
    height: o,
    $: c
  };
}
function pi(e) {
  return Pt(e) ? e : e.contextElement;
}
function Ar(e) {
  const t = pi(e);
  if (!Tt(t))
    return Xt(1);
  const r = t.getBoundingClientRect(), {
    width: o,
    height: s,
    $: i
  } = ba(t);
  let n = (i ? Ho(r.width) : r.width) / o, c = (i ? Ho(r.height) : r.height) / s;
  return (!n || !Number.isFinite(n)) && (n = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: n,
    y: c
  };
}
const rd = /* @__PURE__ */ Xt(0);
function va(e) {
  const t = lt(e);
  return !hi() || !t.visualViewport ? rd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function od(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== lt(e) ? !1 : t;
}
function cr(e, t, r, o) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), i = pi(e);
  let n = Xt(1);
  t && (o ? Pt(o) && (n = Ar(o)) : n = Ar(e));
  const c = od(i, r, o) ? va(i) : Xt(0);
  let l = (s.left + c.x) / n.x, d = (s.top + c.y) / n.y, f = s.width / n.x, h = s.height / n.y;
  if (i) {
    const p = lt(i), m = o && Pt(o) ? lt(o) : o;
    let g = p.frameElement;
    for (; g && o && m !== p; ) {
      const b = Ar(g), y = g.getBoundingClientRect(), k = pt(g), x = y.left + (g.clientLeft + parseFloat(k.paddingLeft)) * b.x, _ = y.top + (g.clientTop + parseFloat(k.paddingTop)) * b.y;
      l *= b.x, d *= b.y, f *= b.x, h *= b.y, l += x, d += _, g = lt(g).frameElement;
    }
  }
  return jo({
    width: f,
    height: h,
    x: l,
    y: d
  });
}
function sd(e) {
  let {
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const s = Tt(r), i = Vt(r);
  if (r === i)
    return t;
  let n = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Xt(1);
  const l = Xt(0);
  if ((s || !s && o !== "fixed") && ((Jt(r) !== "body" || vo(i)) && (n = ts(r)), Tt(r))) {
    const d = cr(r);
    c = Ar(r), l.x = d.x + r.clientLeft, l.y = d.y + r.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - n.scrollLeft * c.x + l.x,
    y: t.y * c.y - n.scrollTop * c.y + l.y
  };
}
function id(e) {
  return Array.from(e.getClientRects());
}
function ya(e) {
  return cr(Vt(e)).left + ts(e).scrollLeft;
}
function nd(e) {
  const t = Vt(e), r = ts(e), o = e.ownerDocument.body, s = it(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = it(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let n = -r.scrollLeft + ya(e);
  const c = -r.scrollTop;
  return pt(o).direction === "rtl" && (n += it(t.clientWidth, o.clientWidth) - s), {
    width: s,
    height: i,
    x: n,
    y: c
  };
}
function ad(e, t) {
  const r = lt(e), o = Vt(e), s = r.visualViewport;
  let i = o.clientWidth, n = o.clientHeight, c = 0, l = 0;
  if (s) {
    i = s.width, n = s.height;
    const d = hi();
    (!d || d && t === "fixed") && (c = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: n,
    x: c,
    y: l
  };
}
function ld(e, t) {
  const r = cr(e, !0, t === "fixed"), o = r.top + e.clientTop, s = r.left + e.clientLeft, i = Tt(e) ? Ar(e) : Xt(1), n = e.clientWidth * i.x, c = e.clientHeight * i.y, l = s * i.x, d = o * i.y;
  return {
    width: n,
    height: c,
    x: l,
    y: d
  };
}
function rn(e, t, r) {
  let o;
  if (t === "viewport")
    o = ad(e, r);
  else if (t === "document")
    o = nd(Vt(e));
  else if (Pt(t))
    o = ld(t, r);
  else {
    const s = va(e);
    o = {
      ...t,
      x: t.x - s.x,
      y: t.y - s.y
    };
  }
  return jo(o);
}
function wa(e, t) {
  const r = Ir(e);
  return r === t || !Pt(r) || es(r) ? !1 : pt(r).position === "fixed" || wa(r, t);
}
function cd(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let o = ho(e, [], !1).filter((c) => Pt(c) && Jt(c) !== "body"), s = null;
  const i = pt(e).position === "fixed";
  let n = i ? Ir(e) : e;
  for (; Pt(n) && !es(n); ) {
    const c = pt(n), l = ui(n);
    !l && c.position === "fixed" && (s = null), (i ? !l && !s : !l && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || vo(n) && !l && wa(e, n)) ? o = o.filter((f) => f !== n) : s = c, n = Ir(n);
  }
  return t.set(e, o), o;
}
function dd(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: o,
    strategy: s
  } = e;
  const n = [...r === "clippingAncestors" ? cd(t, this._c) : [].concat(r), o], c = n[0], l = n.reduce((d, f) => {
    const h = rn(t, f, s);
    return d.top = it(h.top, d.top), d.right = Yt(h.right, d.right), d.bottom = Yt(h.bottom, d.bottom), d.left = it(h.left, d.left), d;
  }, rn(t, c, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ud(e) {
  const {
    width: t,
    height: r
  } = ba(e);
  return {
    width: t,
    height: r
  };
}
function hd(e, t, r) {
  const o = Tt(t), s = Vt(t), i = r === "fixed", n = cr(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  if (o || !o && !i)
    if ((Jt(t) !== "body" || vo(s)) && (c = ts(t)), o) {
      const d = cr(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      s && (l.x = ya(s));
  return {
    x: n.left + c.scrollLeft - l.x,
    y: n.top + c.scrollTop - l.y,
    width: n.width,
    height: n.height
  };
}
function on(e, t) {
  return !Tt(e) || pt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function xa(e, t) {
  const r = lt(e);
  if (!Tt(e))
    return r;
  let o = on(e, t);
  for (; o && ed(o) && pt(o).position === "static"; )
    o = on(o, t);
  return o && (Jt(o) === "html" || Jt(o) === "body" && pt(o).position === "static" && !ui(o)) ? r : o || td(e) || r;
}
const pd = async function(e) {
  let {
    reference: t,
    floating: r,
    strategy: o
  } = e;
  const s = this.getOffsetParent || xa, i = this.getDimensions;
  return {
    reference: hd(t, await s(r), o),
    floating: {
      x: 0,
      y: 0,
      ...await i(r)
    }
  };
};
function fd(e) {
  return pt(e).direction === "rtl";
}
const Po = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sd,
  getDocumentElement: Vt,
  getClippingRect: dd,
  getOffsetParent: xa,
  getElementRects: pd,
  getClientRects: id,
  getDimensions: ud,
  getScale: Ar,
  isElement: Pt,
  isRTL: fd
};
function md(e, t) {
  let r = null, o;
  const s = Vt(e);
  function i() {
    clearTimeout(o), r && r.disconnect(), r = null;
  }
  function n(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const {
      left: d,
      top: f,
      width: h,
      height: p
    } = e.getBoundingClientRect();
    if (c || t(), !h || !p)
      return;
    const m = Eo(f), g = Eo(s.clientWidth - (d + h)), b = Eo(s.clientHeight - (f + p)), y = Eo(d), x = {
      rootMargin: -m + "px " + -g + "px " + -b + "px " + -y + "px",
      threshold: it(0, Yt(1, l)) || 1
    };
    let _ = !0;
    function w(v) {
      const z = v[0].intersectionRatio;
      if (z !== l) {
        if (!_)
          return n();
        z ? n(!1, z) : o = setTimeout(() => {
          n(!1, 1e-7);
        }, 100);
      }
      _ = !1;
    }
    try {
      r = new IntersectionObserver(w, {
        ...x,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(w, x);
    }
    r.observe(e);
  }
  return n(!0), i;
}
function gd(e, t, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: n = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, d = pi(e), f = s || i ? [...d ? ho(d) : [], ...ho(t)] : [];
  f.forEach((k) => {
    s && k.addEventListener("scroll", r, {
      passive: !0
    }), i && k.addEventListener("resize", r);
  });
  const h = d && c ? md(d, r) : null;
  let p = -1, m = null;
  n && (m = new ResizeObserver((k) => {
    let [x] = k;
    x && x.target === d && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), r();
  }), d && !l && m.observe(d), m.observe(t));
  let g, b = l ? cr(e) : null;
  l && y();
  function y() {
    const k = cr(e);
    b && (k.x !== b.x || k.y !== b.y || k.width !== b.width || k.height !== b.height) && r(), b = k, g = requestAnimationFrame(y);
  }
  return r(), () => {
    f.forEach((k) => {
      s && k.removeEventListener("scroll", r), i && k.removeEventListener("resize", r);
    }), h && h(), m && m.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const bd = Zc, vd = Xc, sn = Qc, yd = Yc, wd = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = {
    platform: Po,
    ...r
  }, i = {
    ...s.platform,
    _c: o
  };
  return Kc(e, t, {
    ...s,
    platform: i
  });
};
function xd(e) {
  return _d(e);
}
function ws(e) {
  return e.assignedSlot ? e.assignedSlot : e.parentNode instanceof ShadowRoot ? e.parentNode.host : e.parentNode;
}
function _d(e) {
  for (let t = e; t; t = ws(t))
    if (t instanceof Element && getComputedStyle(t).display === "none")
      return null;
  for (let t = ws(e); t; t = ws(t)) {
    if (!(t instanceof Element))
      continue;
    const r = getComputedStyle(t);
    if (r.display !== "contents" && (r.position !== "static" || r.filter !== "none" || t.tagName === "BODY"))
      return t;
  }
  return null;
}
function kd(e) {
  return e !== null && typeof e == "object" && "getBoundingClientRect" in e;
}
var ue = class extends R {
  constructor() {
    super(...arguments), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const e = this.anchorEl.getBoundingClientRect(), t = this.popup.getBoundingClientRect(), r = this.placement.includes("top") || this.placement.includes("bottom");
        let o = 0, s = 0, i = 0, n = 0, c = 0, l = 0, d = 0, f = 0;
        r ? e.top < t.top ? (o = e.left, s = e.bottom, i = e.right, n = e.bottom, c = t.left, l = t.top, d = t.right, f = t.top) : (o = t.left, s = t.bottom, i = t.right, n = t.bottom, c = e.left, l = e.top, d = e.right, f = e.top) : e.left < t.left ? (o = e.right, s = e.top, i = t.left, n = t.top, c = e.right, l = e.bottom, d = t.left, f = t.bottom) : (o = t.right, s = t.top, i = e.left, n = e.top, c = t.right, l = t.bottom, d = e.left, f = e.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${o}px`), this.style.setProperty("--hover-bridge-top-left-y", `${s}px`), this.style.setProperty("--hover-bridge-top-right-x", `${i}px`), this.style.setProperty("--hover-bridge-top-right-y", `${n}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${c}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${l}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${d}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${f}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(e) {
    super.updated(e), e.has("active") && (this.active ? this.start() : this.stop()), e.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if (await this.stop(), this.anchor && typeof this.anchor == "string") {
      const e = this.getRootNode();
      this.anchorEl = e.getElementById(this.anchor);
    } else
      this.anchor instanceof Element || kd(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.start();
  }
  start() {
    this.anchorEl && (this.cleanup = gd(this.anchorEl, this.popup, () => {
      this.reposition();
    }));
  }
  async stop() {
    return new Promise((e) => {
      this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => e())) : e();
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl)
      return;
    const e = [
      // The offset middleware goes first
      Jc({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? e.push(
      sn({
        apply: ({ rects: r }) => {
          const o = this.sync === "width" || this.sync === "both", s = this.sync === "height" || this.sync === "both";
          this.popup.style.width = o ? `${r.reference.width}px` : "", this.popup.style.height = s ? `${r.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && e.push(
      vd({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && e.push(
      bd({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? e.push(
      sn({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: r, availableHeight: o }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${o}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${r}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && e.push(
      yd({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const t = this.strategy === "absolute" ? (r) => Po.getOffsetParent(r, xd) : Po.getOffsetParent;
    wd(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: e,
      strategy: this.strategy,
      platform: fo(Dt({}, Po), {
        getOffsetParent: t
      })
    }).then(({ x: r, y: o, middlewareData: s, placement: i }) => {
      const n = getComputedStyle(this).direction === "rtl", c = { top: "bottom", right: "left", bottom: "top", left: "right" }[i.split("-")[0]];
      if (this.setAttribute("data-current-placement", i), Object.assign(this.popup.style, {
        left: `${r}px`,
        top: `${o}px`
      }), this.arrow) {
        const l = s.arrow.x, d = s.arrow.y;
        let f = "", h = "", p = "", m = "";
        if (this.arrowPlacement === "start") {
          const g = typeof l == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          f = typeof d == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", h = n ? g : "", m = n ? "" : g;
        } else if (this.arrowPlacement === "end") {
          const g = typeof l == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          h = n ? "" : g, m = n ? g : "", p = typeof d == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else
          this.arrowPlacement === "center" ? (m = typeof l == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", f = typeof d == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (m = typeof l == "number" ? `${l}px` : "", f = typeof d == "number" ? `${d}px` : "");
        Object.assign(this.arrowEl.style, {
          top: f,
          right: h,
          bottom: p,
          left: m,
          [c]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    }), requestAnimationFrame(() => this.updateHoverBridge()), this.emit("sl-reposition");
  }
  render() {
    return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${H({
      "popup-hover-bridge": !0,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${H({
      popup: !0,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? C`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
ue.styles = [F, Bc];
a([
  A(".popup")
], ue.prototype, "popup", 2);
a([
  A(".popup__arrow")
], ue.prototype, "arrowEl", 2);
a([
  u()
], ue.prototype, "anchor", 2);
a([
  u({ type: Boolean, reflect: !0 })
], ue.prototype, "active", 2);
a([
  u({ reflect: !0 })
], ue.prototype, "placement", 2);
a([
  u({ reflect: !0 })
], ue.prototype, "strategy", 2);
a([
  u({ type: Number })
], ue.prototype, "distance", 2);
a([
  u({ type: Number })
], ue.prototype, "skidding", 2);
a([
  u({ type: Boolean })
], ue.prototype, "arrow", 2);
a([
  u({ attribute: "arrow-placement" })
], ue.prototype, "arrowPlacement", 2);
a([
  u({ attribute: "arrow-padding", type: Number })
], ue.prototype, "arrowPadding", 2);
a([
  u({ type: Boolean })
], ue.prototype, "flip", 2);
a([
  u({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (e) => e.split(" ").map((t) => t.trim()).filter((t) => t !== ""),
      toAttribute: (e) => e.join(" ")
    }
  })
], ue.prototype, "flipFallbackPlacements", 2);
a([
  u({ attribute: "flip-fallback-strategy" })
], ue.prototype, "flipFallbackStrategy", 2);
a([
  u({ type: Object })
], ue.prototype, "flipBoundary", 2);
a([
  u({ attribute: "flip-padding", type: Number })
], ue.prototype, "flipPadding", 2);
a([
  u({ type: Boolean })
], ue.prototype, "shift", 2);
a([
  u({ type: Object })
], ue.prototype, "shiftBoundary", 2);
a([
  u({ attribute: "shift-padding", type: Number })
], ue.prototype, "shiftPadding", 2);
a([
  u({ attribute: "auto-size" })
], ue.prototype, "autoSize", 2);
a([
  u()
], ue.prototype, "sync", 2);
a([
  u({ type: Object })
], ue.prototype, "autoSizeBoundary", 2);
a([
  u({ attribute: "auto-size-padding", type: Number })
], ue.prototype, "autoSizePadding", 2);
a([
  u({ attribute: "hover-bridge", type: Boolean })
], ue.prototype, "hoverBridge", 2);
function Ge(e, t) {
  return new Promise((r) => {
    function o(s) {
      s.target === e && (e.removeEventListener(t, o), r());
    }
    e.addEventListener(t, o);
  });
}
var Ve = class extends R {
  constructor() {
    super(), this.localize = new de(this), this.content = "", this.placement = "top", this.disabled = !1, this.distance = 8, this.open = !1, this.skidding = 0, this.trigger = "hover focus", this.hoist = !1, this.handleBlur = () => {
      this.hasTrigger("focus") && this.hide();
    }, this.handleClick = () => {
      this.hasTrigger("click") && (this.open ? this.hide() : this.show());
    }, this.handleFocus = () => {
      this.hasTrigger("focus") && this.show();
    }, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && (e.stopPropagation(), this.hide());
    }, this.handleMouseOver = () => {
      if (this.hasTrigger("hover")) {
        const e = Ji(getComputedStyle(this).getPropertyValue("--show-delay"));
        clearTimeout(this.hoverTimeout), this.hoverTimeout = window.setTimeout(() => this.show(), e);
      }
    }, this.handleMouseOut = () => {
      if (this.hasTrigger("hover")) {
        const e = Ji(getComputedStyle(this).getPropertyValue("--hide-delay"));
        clearTimeout(this.hoverTimeout), this.hoverTimeout = window.setTimeout(() => this.hide(), e);
      }
    }, this.addEventListener("blur", this.handleBlur, !0), this.addEventListener("focus", this.handleFocus, !0), this.addEventListener("click", this.handleClick), this.addEventListener("mouseover", this.handleMouseOver), this.addEventListener("mouseout", this.handleMouseOut);
  }
  disconnectedCallback() {
    var e;
    (e = this.closeWatcher) == null || e.destroy(), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  firstUpdated() {
    this.body.hidden = !this.open, this.open && (this.popup.active = !0, this.popup.reposition());
  }
  hasTrigger(e) {
    return this.trigger.split(" ").includes(e);
  }
  async handleOpenChange() {
    var e, t;
    if (this.open) {
      if (this.disabled)
        return;
      this.emit("sl-show"), "CloseWatcher" in window ? ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
        this.hide();
      }) : document.addEventListener("keydown", this.handleDocumentKeyDown), await Me(this.body), this.body.hidden = !1, this.popup.active = !0;
      const { keyframes: r, options: o } = $e(this, "tooltip.show", { dir: this.localize.dir() });
      await Ne(this.popup.popup, r, o), this.popup.reposition(), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), (t = this.closeWatcher) == null || t.destroy(), document.removeEventListener("keydown", this.handleDocumentKeyDown), await Me(this.body);
      const { keyframes: r, options: o } = $e(this, "tooltip.hide", { dir: this.localize.dir() });
      await Ne(this.popup.popup, r, o), this.popup.active = !1, this.body.hidden = !0, this.emit("sl-after-hide");
    }
  }
  async handleOptionsChange() {
    this.hasUpdated && (await this.updateComplete, this.popup.reposition());
  }
  handleDisabledChange() {
    this.disabled && this.open && this.hide();
  }
  /** Shows the tooltip. */
  async show() {
    if (!this.open)
      return this.open = !0, Ge(this, "sl-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (this.open)
      return this.open = !1, Ge(this, "sl-after-hide");
  }
  //
  // NOTE: Tooltip is a bit unique in that we're using aria-live instead of aria-labelledby to trick screen readers into
  // announcing the content. It works really well, but it violates an accessibility rule. We're also adding the
  // aria-describedby attribute to a slot, which is required by <sl-popup> to correctly locate the first assigned
  // element, otherwise positioning is incorrect.
  //
  render() {
    return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${H({
      tooltip: !0,
      "tooltip--open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;
  }
};
Ve.styles = [F, Lc];
Ve.dependencies = { "sl-popup": ue };
a([
  A("slot:not([name])")
], Ve.prototype, "defaultSlot", 2);
a([
  A(".tooltip__body")
], Ve.prototype, "body", 2);
a([
  A("sl-popup")
], Ve.prototype, "popup", 2);
a([
  u()
], Ve.prototype, "content", 2);
a([
  u()
], Ve.prototype, "placement", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ve.prototype, "disabled", 2);
a([
  u({ type: Number })
], Ve.prototype, "distance", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ve.prototype, "open", 2);
a([
  u({ type: Number })
], Ve.prototype, "skidding", 2);
a([
  u()
], Ve.prototype, "trigger", 2);
a([
  u({ type: Boolean })
], Ve.prototype, "hoist", 2);
a([
  E("open", { waitUntilFirstUpdate: !0 })
], Ve.prototype, "handleOpenChange", 1);
a([
  E(["content", "distance", "hoist", "placement", "skidding"])
], Ve.prototype, "handleOptionsChange", 1);
a([
  E("disabled")
], Ve.prototype, "handleDisabledChange", 1);
be("tooltip.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 150, easing: "ease" }
});
be("tooltip.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 150, easing: "ease" }
});
var Cd = "sl-tooltip";
Ve.define("sl-tooltip");
D({
  tagName: Cd,
  elementClass: Ve,
  react: I,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlTooltip"
});
var Sd = L`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;
function Pe(e, t, r) {
  const o = (s) => Object.is(s, -0) ? 0 : s;
  return e < t ? o(t) : e > r ? o(r) : o(e);
}
function nn(e, t = !1) {
  function r(i) {
    const n = i.getChildrenItems({ includeDisabled: !1 });
    if (n.length) {
      const c = n.every((d) => d.selected), l = n.every((d) => !d.selected && !d.indeterminate);
      i.selected = c, i.indeterminate = !c && !l;
    }
  }
  function o(i) {
    const n = i.parentElement;
    zr.isTreeItem(n) && (r(n), o(n));
  }
  function s(i) {
    for (const n of i.getChildrenItems())
      n.selected = t ? i.selected || n.selected : !n.disabled && i.selected, s(n);
    t && r(i);
  }
  s(e), o(e);
}
var Zt = class extends R {
  constructor() {
    super(), this.selection = "single", this.localize = new de(this), this.clickTarget = null, this.initTreeItem = (e) => {
      e.selectable = this.selection === "multiple", ["expand", "collapse"].filter((t) => !!this.querySelector(`[slot="${t}-icon"]`)).forEach((t) => {
        const r = e.querySelector(`[slot="${t}-icon"]`);
        r === null ? e.append(this.getExpandButtonIcon(t)) : r.hasAttribute("data-default") && r.replaceWith(this.getExpandButtonIcon(t));
      });
    }, this.handleTreeChanged = (e) => {
      for (const t of e) {
        const r = [...t.addedNodes].filter(zr.isTreeItem), o = [...t.removedNodes].filter(zr.isTreeItem);
        r.forEach(this.initTreeItem), this.lastFocusedItem && o.includes(this.lastFocusedItem) && (this.lastFocusedItem = null);
      }
    }, this.handleFocusOut = (e) => {
      const t = e.relatedTarget;
      (!t || !this.contains(t)) && (this.tabIndex = 0);
    }, this.handleFocusIn = (e) => {
      const t = e.target;
      e.target === this && this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]), zr.isTreeItem(t) && !t.disabled && (this.lastFocusedItem && (this.lastFocusedItem.tabIndex = -1), this.lastFocusedItem = t, this.tabIndex = -1, t.tabIndex = 0);
    }, this.addEventListener("focusin", this.handleFocusIn), this.addEventListener("focusout", this.handleFocusOut), this.addEventListener("sl-lazy-change", this.handleSlotChange);
  }
  async connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "tree"), this.setAttribute("tabindex", "0"), await this.updateComplete, this.mutationObserver = new MutationObserver(this.handleTreeChanged), this.mutationObserver.observe(this, { childList: !0, subtree: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver.disconnect();
  }
  // Generates a clone of the expand icon element to use for each tree item
  getExpandButtonIcon(e) {
    const r = (e === "expand" ? this.expandedIconSlot : this.collapsedIconSlot).assignedElements({ flatten: !0 })[0];
    if (r) {
      const o = r.cloneNode(!0);
      return [o, ...o.querySelectorAll("[id]")].forEach((s) => s.removeAttribute("id")), o.setAttribute("data-default", ""), o.slot = `${e}-icon`, o;
    }
    return null;
  }
  selectItem(e) {
    const t = [...this.selectedItems];
    if (this.selection === "multiple")
      e.selected = !e.selected, e.lazy && (e.expanded = !0), nn(e);
    else if (this.selection === "single" || e.isLeaf) {
      const o = this.getAllTreeItems();
      for (const s of o)
        s.selected = s === e;
    } else
      this.selection === "leaf" && (e.expanded = !e.expanded);
    const r = this.selectedItems;
    (t.length !== r.length || r.some((o) => !t.includes(o))) && Promise.all(r.map((o) => o.updateComplete)).then(() => {
      this.emit("sl-selection-change", { detail: { selection: r } });
    });
  }
  getAllTreeItems() {
    return [...this.querySelectorAll("sl-tree-item")];
  }
  focusItem(e) {
    e == null || e.focus();
  }
  handleKeyDown(e) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "Enter", " "].includes(e.key) || e.composedPath().some((s) => {
      var i;
      return ["input", "textarea"].includes((i = s == null ? void 0 : s.tagName) == null ? void 0 : i.toLowerCase());
    }))
      return;
    const t = this.getFocusableItems(), r = this.localize.dir() === "ltr", o = this.localize.dir() === "rtl";
    if (t.length > 0) {
      e.preventDefault();
      const s = t.findIndex((l) => l.matches(":focus")), i = t[s], n = (l) => {
        const d = t[Pe(l, 0, t.length - 1)];
        this.focusItem(d);
      }, c = (l) => {
        i.expanded = l;
      };
      e.key === "ArrowDown" ? n(s + 1) : e.key === "ArrowUp" ? n(s - 1) : r && e.key === "ArrowRight" || o && e.key === "ArrowLeft" ? !i || i.disabled || i.expanded || i.isLeaf && !i.lazy ? n(s + 1) : c(!0) : r && e.key === "ArrowLeft" || o && e.key === "ArrowRight" ? !i || i.disabled || i.isLeaf || !i.expanded ? n(s - 1) : c(!1) : e.key === "Home" ? n(0) : e.key === "End" ? n(t.length - 1) : (e.key === "Enter" || e.key === " ") && (i.disabled || this.selectItem(i));
    }
  }
  handleClick(e) {
    const t = e.target, r = t.closest("sl-tree-item"), o = e.composedPath().some((s) => {
      var i;
      return (i = s == null ? void 0 : s.classList) == null ? void 0 : i.contains("tree-item__expand-button");
    });
    !r || r.disabled || t !== this.clickTarget || (o ? r.expanded = !r.expanded : this.selectItem(r));
  }
  handleMouseDown(e) {
    this.clickTarget = e.target;
  }
  handleSlotChange() {
    this.getAllTreeItems().forEach(this.initTreeItem);
  }
  async handleSelectionChange() {
    const e = this.selection === "multiple", t = this.getAllTreeItems();
    this.setAttribute("aria-multiselectable", e ? "true" : "false");
    for (const r of t)
      r.selectable = e;
    e && (await this.updateComplete, [...this.querySelectorAll(":scope > sl-tree-item")].forEach(
      (r) => nn(r, !0)
    ));
  }
  /** @internal Returns the list of tree items that are selected in the tree. */
  get selectedItems() {
    const e = this.getAllTreeItems(), t = (r) => r.selected;
    return e.filter(t);
  }
  /** @internal Gets focusable tree items in the tree. */
  getFocusableItems() {
    const e = this.getAllTreeItems(), t = /* @__PURE__ */ new Set();
    return e.filter((r) => {
      var o;
      if (r.disabled)
        return !1;
      const s = (o = r.parentElement) == null ? void 0 : o.closest("[role=treeitem]");
      return s && (!s.expanded || s.loading || t.has(s)) && t.add(r), !t.has(r);
    });
  }
  render() {
    return C`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `;
  }
};
Zt.styles = [F, Sd];
a([
  A("slot:not([name])")
], Zt.prototype, "defaultSlot", 2);
a([
  A("slot[name=expand-icon]")
], Zt.prototype, "expandedIconSlot", 2);
a([
  A("slot[name=collapse-icon]")
], Zt.prototype, "collapsedIconSlot", 2);
a([
  u()
], Zt.prototype, "selection", 2);
a([
  E("selection")
], Zt.prototype, "handleSelectionChange", 1);
var $d = "sl-tree";
Zt.define("sl-tree");
D({
  tagName: $d,
  elementClass: Zt,
  react: I,
  events: {
    onSlSelectionChange: "sl-selection-change"
  },
  displayName: "SlTree"
});
var Ed = L`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`, le = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new Je(this, "help-text", "label"), this.hasFocus = !1, this.title = "", this.name = "", this.value = "", this.size = "medium", this.filled = !1, this.label = "", this.helpText = "", this.placeholder = "", this.rows = 4, this.resize = "vertical", this.disabled = !1, this.readonly = !1, this.form = "", this.required = !1, this.spellcheck = !0, this.defaultValue = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight()), this.updateComplete.then(() => {
      this.setTextareaHeight(), this.resizeObserver.observe(this.input);
    });
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.resizeObserver.unobserve(this.input);
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value, this.setTextareaHeight(), this.emit("sl-change");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value, this.emit("sl-input");
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  setTextareaHeight() {
    this.resize === "auto" ? (this.input.style.height = "auto", this.input.style.height = `${this.input.scrollHeight}px`) : this.input.style.height = void 0;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  async handleValueChange() {
    await this.updateComplete, this.formControlController.updateValidity(), this.setTextareaHeight();
  }
  /** Sets focus on the textarea. */
  focus(e) {
    this.input.focus(e);
  }
  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }
  /** Gets or sets the textarea's scroll position. */
  scrollPosition(e) {
    if (e) {
      typeof e.top == "number" && (this.input.scrollTop = e.top), typeof e.left == "number" && (this.input.scrollLeft = e.left);
      return;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(e, t, r = "none") {
    this.input.setSelectionRange(e, t, r);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(e, t, r, o = "preserve") {
    const s = t ?? this.input.selectionStart, i = r ?? this.input.selectionEnd;
    this.input.setRangeText(e, s, i, o), this.value !== this.input.value && (this.value = this.input.value, this.setTextareaHeight());
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.input.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), r = this.label ? !0 : !!e, o = this.helpText ? !0 : !!t;
    return C`
      <div
        part="form-control"
        class=${H({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": r,
      "form-control--has-help-text": o
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({
      textarea: !0,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": !this.filled,
      "textarea--filled": this.filled,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": !this.value,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${P(this.name)}
              .value=${lr(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${P(this.placeholder)}
              rows=${P(this.rows)}
              minlength=${P(this.minlength)}
              maxlength=${P(this.maxlength)}
              autocapitalize=${P(this.autocapitalize)}
              autocorrect=${P(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${P(this.spellcheck)}
              enterkeyhint=${P(this.enterkeyhint)}
              inputmode=${P(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
le.styles = [F, Dr, Ed];
a([
  A(".textarea__control")
], le.prototype, "input", 2);
a([
  U()
], le.prototype, "hasFocus", 2);
a([
  u()
], le.prototype, "title", 2);
a([
  u()
], le.prototype, "name", 2);
a([
  u()
], le.prototype, "value", 2);
a([
  u({ reflect: !0 })
], le.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], le.prototype, "filled", 2);
a([
  u()
], le.prototype, "label", 2);
a([
  u({ attribute: "help-text" })
], le.prototype, "helpText", 2);
a([
  u()
], le.prototype, "placeholder", 2);
a([
  u({ type: Number })
], le.prototype, "rows", 2);
a([
  u()
], le.prototype, "resize", 2);
a([
  u({ type: Boolean, reflect: !0 })
], le.prototype, "disabled", 2);
a([
  u({ type: Boolean, reflect: !0 })
], le.prototype, "readonly", 2);
a([
  u({ reflect: !0 })
], le.prototype, "form", 2);
a([
  u({ type: Boolean, reflect: !0 })
], le.prototype, "required", 2);
a([
  u({ type: Number })
], le.prototype, "minlength", 2);
a([
  u({ type: Number })
], le.prototype, "maxlength", 2);
a([
  u()
], le.prototype, "autocapitalize", 2);
a([
  u()
], le.prototype, "autocorrect", 2);
a([
  u()
], le.prototype, "autocomplete", 2);
a([
  u({ type: Boolean })
], le.prototype, "autofocus", 2);
a([
  u()
], le.prototype, "enterkeyhint", 2);
a([
  u({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (e) => !(!e || e === "false"),
      toAttribute: (e) => e ? "true" : "false"
    }
  })
], le.prototype, "spellcheck", 2);
a([
  u()
], le.prototype, "inputmode", 2);
a([
  ur()
], le.prototype, "defaultValue", 2);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], le.prototype, "handleDisabledChange", 1);
a([
  E("rows", { waitUntilFirstUpdate: !0 })
], le.prototype, "handleRowsChange", 1);
a([
  E("value", { waitUntilFirstUpdate: !0 })
], le.prototype, "handleValueChange", 1);
var zd = "sl-textarea";
le.define("sl-textarea");
D({
  tagName: zd,
  elementClass: le,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlTextarea"
});
var Ad = L`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`, Ee = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this), this.hasSlotController = new Je(this, "help-text", "label"), this.localize = new de(this), this.hasFocus = !1, this.hasTooltip = !1, this.title = "", this.name = "", this.value = 0, this.label = "", this.helpText = "", this.disabled = !1, this.min = 0, this.max = 100, this.step = 1, this.tooltip = "top", this.tooltipFormatter = (e) => e.toString(), this.form = "", this.defaultValue = 0;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver = new ResizeObserver(() => this.syncRange()), this.value < this.min && (this.value = this.min), this.value > this.max && (this.value = this.max), this.updateComplete.then(() => {
      this.syncRange(), this.resizeObserver.observe(this.input);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.resizeObserver.unobserve(this.input);
  }
  handleChange() {
    this.emit("sl-change");
  }
  handleInput() {
    this.value = parseFloat(this.input.value), this.emit("sl-input"), this.syncRange();
  }
  handleBlur() {
    this.hasFocus = !1, this.hasTooltip = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.hasTooltip = !0, this.emit("sl-focus");
  }
  handleThumbDragStart() {
    this.hasTooltip = !0;
  }
  handleThumbDragEnd() {
    this.hasTooltip = !1;
  }
  syncProgress(e) {
    this.input.style.setProperty("--percent", `${e * 100}%`);
  }
  syncTooltip(e) {
    if (this.output !== null) {
      const t = this.input.offsetWidth, r = this.output.offsetWidth, o = getComputedStyle(this.input).getPropertyValue("--thumb-size"), s = this.localize.dir() === "rtl", i = t * e;
      if (s) {
        const n = `${t - i}px + ${e} * ${o}`;
        this.output.style.translate = `calc((${n} - ${r / 2}px - ${o} / 2))`;
      } else {
        const n = `${i}px - ${e} * ${o}`;
        this.output.style.translate = `calc(${n} - ${r / 2}px + ${o} / 2)`;
      }
    }
  }
  handleValueChange() {
    this.formControlController.updateValidity(), this.input.value = this.value.toString(), this.value = parseFloat(this.input.value), this.syncRange();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  syncRange() {
    const e = Math.max(0, (this.value - this.min) / (this.max - this.min));
    this.syncProgress(e), this.tooltip !== "none" && this.syncTooltip(e);
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  /** Sets focus on the range. */
  focus(e) {
    this.input.focus(e);
  }
  /** Removes focus from the range. */
  blur() {
    this.input.blur();
  }
  /** Increments the value of the range by the value of the step attribute. */
  stepUp() {
    this.input.stepUp(), this.value !== Number(this.input.value) && (this.value = Number(this.input.value));
  }
  /** Decrements the value of the range by the value of the step attribute. */
  stepDown() {
    this.input.stepDown(), this.value !== Number(this.input.value) && (this.value = Number(this.input.value));
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.input.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), r = this.label ? !0 : !!e, o = this.helpText ? !0 : !!t;
    return C`
      <div
        part="form-control"
        class=${H({
      "form-control": !0,
      "form-control--medium": !0,
      // range only has one size
      "form-control--has-label": r,
      "form-control--has-help-text": o
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({
      range: !0,
      "range--disabled": this.disabled,
      "range--focused": this.hasFocus,
      "range--rtl": this.localize.dir() === "rtl",
      "range--tooltip-visible": this.hasTooltip,
      "range--tooltip-top": this.tooltip === "top",
      "range--tooltip-bottom": this.tooltip === "bottom"
    })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${P(this.name)}
              ?disabled=${this.disabled}
              min=${P(this.min)}
              max=${P(this.max)}
              step=${P(this.step)}
              .value=${lr(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip !== "none" && !this.disabled ? C`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter == "function" ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                ` : ""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
Ee.styles = [F, Dr, Ad];
a([
  A(".range__control")
], Ee.prototype, "input", 2);
a([
  A(".range__tooltip")
], Ee.prototype, "output", 2);
a([
  U()
], Ee.prototype, "hasFocus", 2);
a([
  U()
], Ee.prototype, "hasTooltip", 2);
a([
  u()
], Ee.prototype, "title", 2);
a([
  u()
], Ee.prototype, "name", 2);
a([
  u({ type: Number })
], Ee.prototype, "value", 2);
a([
  u()
], Ee.prototype, "label", 2);
a([
  u({ attribute: "help-text" })
], Ee.prototype, "helpText", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ee.prototype, "disabled", 2);
a([
  u({ type: Number })
], Ee.prototype, "min", 2);
a([
  u({ type: Number })
], Ee.prototype, "max", 2);
a([
  u({ type: Number })
], Ee.prototype, "step", 2);
a([
  u()
], Ee.prototype, "tooltip", 2);
a([
  u({ attribute: !1 })
], Ee.prototype, "tooltipFormatter", 2);
a([
  u({ reflect: !0 })
], Ee.prototype, "form", 2);
a([
  ur()
], Ee.prototype, "defaultValue", 2);
a([
  ai({ passive: !0 })
], Ee.prototype, "handleThumbDragStart", 1);
a([
  E("value", { waitUntilFirstUpdate: !0 })
], Ee.prototype, "handleValueChange", 1);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], Ee.prototype, "handleDisabledChange", 1);
a([
  E("hasTooltip", { waitUntilFirstUpdate: !0 })
], Ee.prototype, "syncRange", 1);
var Td = "sl-range";
Ee.define("sl-range");
D({
  tagName: Td,
  elementClass: Ee,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlRange"
});
var Od = L`
  :host {
    display: contents;
  }
`, yo = class extends R {
  constructor() {
    super(...arguments), this.observedElements = [], this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver = new ResizeObserver((e) => {
      this.emit("sl-resize", { detail: { entries: e } });
    }), this.disabled || this.startObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stopObserver();
  }
  handleSlotChange() {
    this.disabled || this.startObserver();
  }
  startObserver() {
    const e = this.shadowRoot.querySelector("slot");
    if (e !== null) {
      const t = e.assignedElements({ flatten: !0 });
      this.observedElements.forEach((r) => this.resizeObserver.unobserve(r)), this.observedElements = [], t.forEach((r) => {
        this.resizeObserver.observe(r), this.observedElements.push(r);
      });
    }
  }
  stopObserver() {
    this.resizeObserver.disconnect();
  }
  handleDisabledChange() {
    this.disabled ? this.stopObserver() : this.startObserver();
  }
  render() {
    return C` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
yo.styles = [F, Od];
a([
  u({ type: Boolean, reflect: !0 })
], yo.prototype, "disabled", 2);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], yo.prototype, "handleDisabledChange", 1);
var Nd = "sl-resize-observer";
yo.define("sl-resize-observer");
D({
  tagName: Nd,
  elementClass: yo,
  react: I,
  events: {
    onSlResize: "sl-resize"
  },
  displayName: "SlResizeObserver"
});
var Id = L`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _a = "important", Rd = " !" + _a, Ze = mo(class extends go {
  constructor(e) {
    var t;
    if (super(e), e.type !== zt.ATTRIBUTE || e.name !== "style" || ((t = e.strings) == null ? void 0 : t.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((t, r) => {
      const o = e[r];
      return o == null ? t : t + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${o};`;
    }, "");
  }
  update(e, [t]) {
    const { style: r } = e.element;
    if (this.ft === void 0)
      return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const o of this.ft)
      t[o] == null && (this.ft.delete(o), o.includes("-") ? r.removeProperty(o) : r[o] = null);
    for (const o in t) {
      const s = t[o];
      if (s != null) {
        this.ft.add(o);
        const i = typeof s == "string" && s.endsWith(Rd);
        o.includes("-") || i ? r.setProperty(o, i ? s.slice(0, -11) : s, i ? _a : "") : r[o] = s;
      }
    }
    return at;
  }
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Gs = class extends go {
  constructor(t) {
    if (super(t), this.it = Se, t.type !== zt.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === Se || t == null)
      return this._t = void 0, this.it = t;
    if (t === at)
      return t;
    if (typeof t != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it)
      return this._t;
    this.it = t;
    const r = [t];
    return r.raw = r, this._t = { _$litType$: this.constructor.resultType, strings: r, values: [] };
  }
};
Gs.directiveName = "unsafeHTML", Gs.resultType = 1;
const Mo = mo(Gs);
var qe = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.hoverValue = 0, this.isHovering = !1, this.label = "", this.value = 0, this.max = 5, this.precision = 1, this.readonly = !1, this.disabled = !1, this.getSymbol = () => '<sl-icon name="star-fill" library="system"></sl-icon>';
  }
  getValueFromMousePosition(e) {
    return this.getValueFromXCoordinate(e.clientX);
  }
  getValueFromTouchPosition(e) {
    return this.getValueFromXCoordinate(e.touches[0].clientX);
  }
  getValueFromXCoordinate(e) {
    const t = this.localize.dir() === "rtl", { left: r, right: o, width: s } = this.rating.getBoundingClientRect(), i = t ? this.roundToPrecision((o - e) / s * this.max, this.precision) : this.roundToPrecision((e - r) / s * this.max, this.precision);
    return Pe(i, 0, this.max);
  }
  handleClick(e) {
    this.disabled || (this.setValue(this.getValueFromMousePosition(e)), this.emit("sl-change"));
  }
  setValue(e) {
    this.disabled || this.readonly || (this.value = e === this.value ? 0 : e, this.isHovering = !1);
  }
  handleKeyDown(e) {
    const t = this.localize.dir() === "ltr", r = this.localize.dir() === "rtl", o = this.value;
    if (!(this.disabled || this.readonly)) {
      if (e.key === "ArrowDown" || t && e.key === "ArrowLeft" || r && e.key === "ArrowRight") {
        const s = e.shiftKey ? 1 : this.precision;
        this.value = Math.max(0, this.value - s), e.preventDefault();
      }
      if (e.key === "ArrowUp" || t && e.key === "ArrowRight" || r && e.key === "ArrowLeft") {
        const s = e.shiftKey ? 1 : this.precision;
        this.value = Math.min(this.max, this.value + s), e.preventDefault();
      }
      e.key === "Home" && (this.value = 0, e.preventDefault()), e.key === "End" && (this.value = this.max, e.preventDefault()), this.value !== o && this.emit("sl-change");
    }
  }
  handleMouseEnter(e) {
    this.isHovering = !0, this.hoverValue = this.getValueFromMousePosition(e);
  }
  handleMouseMove(e) {
    this.hoverValue = this.getValueFromMousePosition(e);
  }
  handleMouseLeave() {
    this.isHovering = !1;
  }
  handleTouchStart(e) {
    this.isHovering = !0, this.hoverValue = this.getValueFromTouchPosition(e), e.preventDefault();
  }
  handleTouchMove(e) {
    this.hoverValue = this.getValueFromTouchPosition(e);
  }
  handleTouchEnd(e) {
    this.isHovering = !1, this.setValue(this.hoverValue), this.emit("sl-change"), e.preventDefault();
  }
  roundToPrecision(e, t = 0.5) {
    const r = 1 / t;
    return Math.ceil(e * r) / r;
  }
  handleHoverValueChange() {
    this.emit("sl-hover", {
      detail: {
        phase: "move",
        value: this.hoverValue
      }
    });
  }
  handleIsHoveringChange() {
    this.emit("sl-hover", {
      detail: {
        phase: this.isHovering ? "start" : "end",
        value: this.hoverValue
      }
    });
  }
  /** Sets focus on the rating. */
  focus(e) {
    this.rating.focus(e);
  }
  /** Removes focus from the rating. */
  blur() {
    this.rating.blur();
  }
  render() {
    const e = this.localize.dir() === "rtl", t = Array.from(Array(this.max).keys());
    let r = 0;
    return this.disabled || this.readonly ? r = this.value : r = this.isHovering ? this.hoverValue : this.value, C`
      <div
        part="base"
        class=${H({
      rating: !0,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled,
      "rating--rtl": e
    })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map((o) => r > o && r < o + 1 ? C`
                <span
                  class=${H({
      rating__symbol: !0,
      "rating__partial-symbol-container": !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(r) === o + 1
    })}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${Ze({
      clipPath: e ? `inset(0 ${(r - o) * 100}% 0 0)` : `inset(0 0 0 ${(r - o) * 100}%)`
    })}
                  >
                    ${Mo(this.getSymbol(o + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Ze({
      clipPath: e ? `inset(0 0 0 ${100 - (r - o) * 100}%)` : `inset(0 ${100 - (r - o) * 100}% 0 0)`
    })}
                  >
                    ${Mo(this.getSymbol(o + 1))}
                  </div>
                </span>
              ` : C`
              <span
                class=${H({
      rating__symbol: !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(r) === o + 1,
      "rating__symbol--active": r >= o + 1
    })}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Mo(this.getSymbol(o + 1))}
              </span>
            `)}
        </span>
      </div>
    `;
  }
};
qe.styles = [F, Id];
qe.dependencies = { "sl-icon": xe };
a([
  A(".rating")
], qe.prototype, "rating", 2);
a([
  U()
], qe.prototype, "hoverValue", 2);
a([
  U()
], qe.prototype, "isHovering", 2);
a([
  u()
], qe.prototype, "label", 2);
a([
  u({ type: Number })
], qe.prototype, "value", 2);
a([
  u({ type: Number })
], qe.prototype, "max", 2);
a([
  u({ type: Number })
], qe.prototype, "precision", 2);
a([
  u({ type: Boolean, reflect: !0 })
], qe.prototype, "readonly", 2);
a([
  u({ type: Boolean, reflect: !0 })
], qe.prototype, "disabled", 2);
a([
  u()
], qe.prototype, "getSymbol", 2);
a([
  ai({ passive: !0 })
], qe.prototype, "handleTouchMove", 1);
a([
  E("hoverValue")
], qe.prototype, "handleHoverValueChange", 1);
a([
  E("isHovering")
], qe.prototype, "handleIsHoveringChange", 1);
var Pd = "sl-rating";
qe.define("sl-rating");
D({
  tagName: Pd,
  elementClass: qe,
  react: I,
  events: {
    onSlChange: "sl-change",
    onSlHover: "sl-hover"
  },
  displayName: "SlRating"
});
var Md = [
  { max: 276e4, value: 6e4, unit: "minute" },
  // max 46 minutes
  { max: 72e6, value: 36e5, unit: "hour" },
  // max 20 hours
  { max: 5184e5, value: 864e5, unit: "day" },
  // max 6 days
  { max: 24192e5, value: 6048e5, unit: "week" },
  // max 28 days
  { max: 28512e6, value: 2592e6, unit: "month" },
  // max 11 months
  { max: 1 / 0, value: 31536e6, unit: "year" }
], Ft = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.isoTime = "", this.relativeTime = "", this.titleTime = "", this.date = /* @__PURE__ */ new Date(), this.format = "long", this.numeric = "auto", this.sync = !1;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearTimeout(this.updateTimeout);
  }
  render() {
    const e = /* @__PURE__ */ new Date(), t = new Date(this.date);
    if (isNaN(t.getMilliseconds()))
      return this.relativeTime = "", this.isoTime = "", "";
    const r = t.getTime() - e.getTime(), { unit: o, value: s } = Md.find((i) => Math.abs(r) < i.max);
    if (this.isoTime = t.toISOString(), this.titleTime = this.localize.date(t, {
      month: "long",
      year: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short"
    }), this.relativeTime = this.localize.relativeTime(Math.round(r / s), o, {
      numeric: this.numeric,
      style: this.format
    }), clearTimeout(this.updateTimeout), this.sync) {
      let i;
      o === "minute" ? i = zo("second") : o === "hour" ? i = zo("minute") : o === "day" ? i = zo("hour") : i = zo("day"), this.updateTimeout = window.setTimeout(() => this.requestUpdate(), i);
    }
    return C` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `;
  }
};
a([
  U()
], Ft.prototype, "isoTime", 2);
a([
  U()
], Ft.prototype, "relativeTime", 2);
a([
  U()
], Ft.prototype, "titleTime", 2);
a([
  u()
], Ft.prototype, "date", 2);
a([
  u()
], Ft.prototype, "format", 2);
a([
  u()
], Ft.prototype, "numeric", 2);
a([
  u({ type: Boolean })
], Ft.prototype, "sync", 2);
function zo(e) {
  const r = { second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 }[e];
  return r - Date.now() % r;
}
var Dd = "sl-relative-time";
Ft.define("sl-relative-time");
D({
  tagName: Dd,
  elementClass: Ft,
  react: I,
  events: {},
  displayName: "SlRelativeTime"
});
var Ld = L`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`, re = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new Je(this, "help-text", "label"), this.localize = new de(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (e) => C`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(t) => this.handleTagRemove(t, e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `, this.handleDocumentFocusIn = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    }, this.handleDocumentKeyDown = (e) => {
      const t = e.target, r = t.closest(".select__clear") !== null, o = t.closest("sl-icon-button") !== null;
      if (!(r || o)) {
        if (e.key === "Escape" && this.open && !this.closeWatcher && (e.preventDefault(), e.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), e.key === "Enter" || e.key === " " && this.typeToSelectString === "") {
          if (e.preventDefault(), e.stopImmediatePropagation(), !this.open) {
            this.show();
            return;
          }
          this.currentOption && !this.currentOption.disabled && (this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
            this.emit("sl-input"), this.emit("sl-change");
          }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
          const s = this.getAllOptions(), i = s.indexOf(this.currentOption);
          let n = Math.max(0, i);
          if (e.preventDefault(), !this.open && (this.show(), this.currentOption))
            return;
          e.key === "ArrowDown" ? (n = i + 1, n > s.length - 1 && (n = 0)) : e.key === "ArrowUp" ? (n = i - 1, n < 0 && (n = s.length - 1)) : e.key === "Home" ? n = 0 : e.key === "End" && (n = s.length - 1), this.setCurrentOption(s[n]);
        }
        if (e.key.length === 1 || e.key === "Backspace") {
          const s = this.getAllOptions();
          if (e.metaKey || e.ctrlKey || e.altKey)
            return;
          if (!this.open) {
            if (e.key === "Backspace")
              return;
            this.show();
          }
          e.stopPropagation(), e.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), e.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += e.key.toLowerCase();
          for (const i of s)
            if (i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)) {
              this.setCurrentOption(i);
              break;
            }
        }
      }
    }, this.handleDocumentMouseDown = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), this.open = !1;
  }
  addOpenListeners() {
    var e;
    const t = this.getRootNode();
    "CloseWatcher" in window && ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
      this.open && (this.hide(), this.displayInput.focus({ preventScroll: !0 }));
    }), t.addEventListener("focusin", this.handleDocumentFocusIn), t.addEventListener("keydown", this.handleDocumentKeyDown), t.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    var e;
    const t = this.getRootNode();
    t.removeEventListener("focusin", this.handleDocumentFocusIn), t.removeEventListener("keydown", this.handleDocumentKeyDown), t.removeEventListener("mousedown", this.handleDocumentMouseDown), (e = this.closeWatcher) == null || e.destroy();
  }
  handleFocus() {
    this.hasFocus = !0, this.displayInput.setSelectionRange(0, 0), this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(e) {
    const r = e.composedPath().some((o) => o instanceof Element && o.tagName.toLowerCase() === "sl-icon-button");
    this.disabled || r || (e.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
  }
  handleComboboxKeyDown(e) {
    e.key !== "Tab" && (e.stopPropagation(), this.handleDocumentKeyDown(e));
  }
  handleClearClick(e) {
    e.stopPropagation(), this.value !== "" && (this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
      this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  handleClearMouseDown(e) {
    e.stopPropagation(), e.preventDefault();
  }
  handleOptionClick(e) {
    const r = e.target.closest("sl-option"), o = this.value;
    r && !r.disabled && (this.multiple ? this.toggleOptionSelection(r) : this.setSelectedOptions(r), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== o && this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  handleDefaultSlotChange() {
    const e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value], r = [];
    customElements.get("sl-option") ? (e.forEach((o) => r.push(o.value)), this.setSelectedOptions(e.filter((o) => t.includes(o.value)))) : customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
  }
  handleTagRemove(e, t) {
    e.stopPropagation(), this.disabled || (this.toggleOptionSelection(t, !1), this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(e) {
    this.getAllOptions().forEach((r) => {
      r.current = !1, r.tabIndex = -1;
    }), e && (this.currentOption = e, e.current = !0, e.tabIndex = 0, e.focus());
  }
  // Sets the selected option(s)
  setSelectedOptions(e) {
    const t = this.getAllOptions(), r = Array.isArray(e) ? e : [e];
    t.forEach((o) => o.selected = !1), r.length && r.forEach((o) => o.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(e, t) {
    t === !0 || t === !1 ? e.selected = t : e.selected = !e.selected, this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var e, t, r, o;
    this.selectedOptions = this.getAllOptions().filter((s) => s.selected), this.multiple ? (this.value = this.selectedOptions.map((s) => s.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length)) : (this.value = (t = (e = this.selectedOptions[0]) == null ? void 0 : e.value) != null ? t : "", this.displayLabel = (o = (r = this.selectedOptions[0]) == null ? void 0 : r.getTextLabel()) != null ? o : ""), this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((e, t) => {
      if (t < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const r = this.getTag(e, t);
        return C`<div @sl-remove=${(o) => this.handleTagRemove(o, e)}>
          ${typeof r == "string" ? Mo(r) : r}
        </div>`;
      } else if (t === this.maxOptionsVisible)
        return C`<sl-tag>+${this.selectedOptions.length - t}</sl-tag>`;
      return C``;
    });
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleDisabledChange() {
    this.disabled && (this.open = !1, this.handleOpenChange());
  }
  handleValueChange() {
    const e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(e.filter((r) => t.includes(r.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("sl-show"), this.addOpenListeners(), await Me(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes: e, options: t } = $e(this, "select.show", { dir: this.localize.dir() });
      await Ne(this.popup.popup, e, t), this.currentOption && Ks(this.currentOption, this.listbox, "vertical", "auto"), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await Me(this);
      const { keyframes: e, options: t } = $e(this, "select.hide", { dir: this.localize.dir() });
      await Ne(this.popup.popup, e, t), this.listbox.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, Ge(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, Ge(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.valueInput.setCustomValidity(e), this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(e) {
    this.displayInput.focus(e);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), r = this.label ? !0 : !!e, o = this.helpText ? !0 : !!t, s = this.clearable && !this.disabled && this.value.length > 0, i = this.placeholder && this.value.length === 0;
    return C`
      <div
        part="form-control"
        class=${H({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": r,
      "form-control--has-help-text": o
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${H({
      select: !0,
      "select--standard": !0,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": i,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? C`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s ? C`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
re.styles = [F, Dr, Ld];
re.dependencies = {
  "sl-icon": xe,
  "sl-popup": ue,
  "sl-tag": Bt
};
a([
  A(".select")
], re.prototype, "popup", 2);
a([
  A(".select__combobox")
], re.prototype, "combobox", 2);
a([
  A(".select__display-input")
], re.prototype, "displayInput", 2);
a([
  A(".select__value-input")
], re.prototype, "valueInput", 2);
a([
  A(".select__listbox")
], re.prototype, "listbox", 2);
a([
  U()
], re.prototype, "hasFocus", 2);
a([
  U()
], re.prototype, "displayLabel", 2);
a([
  U()
], re.prototype, "currentOption", 2);
a([
  U()
], re.prototype, "selectedOptions", 2);
a([
  u()
], re.prototype, "name", 2);
a([
  u({
    converter: {
      fromAttribute: (e) => e.split(" "),
      toAttribute: (e) => e.join(" ")
    }
  })
], re.prototype, "value", 2);
a([
  ur()
], re.prototype, "defaultValue", 2);
a([
  u({ reflect: !0 })
], re.prototype, "size", 2);
a([
  u()
], re.prototype, "placeholder", 2);
a([
  u({ type: Boolean, reflect: !0 })
], re.prototype, "multiple", 2);
a([
  u({ attribute: "max-options-visible", type: Number })
], re.prototype, "maxOptionsVisible", 2);
a([
  u({ type: Boolean, reflect: !0 })
], re.prototype, "disabled", 2);
a([
  u({ type: Boolean })
], re.prototype, "clearable", 2);
a([
  u({ type: Boolean, reflect: !0 })
], re.prototype, "open", 2);
a([
  u({ type: Boolean })
], re.prototype, "hoist", 2);
a([
  u({ type: Boolean, reflect: !0 })
], re.prototype, "filled", 2);
a([
  u({ type: Boolean, reflect: !0 })
], re.prototype, "pill", 2);
a([
  u()
], re.prototype, "label", 2);
a([
  u({ reflect: !0 })
], re.prototype, "placement", 2);
a([
  u({ attribute: "help-text" })
], re.prototype, "helpText", 2);
a([
  u({ reflect: !0 })
], re.prototype, "form", 2);
a([
  u({ type: Boolean, reflect: !0 })
], re.prototype, "required", 2);
a([
  u()
], re.prototype, "getTag", 2);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], re.prototype, "handleDisabledChange", 1);
a([
  E("value", { waitUntilFirstUpdate: !0 })
], re.prototype, "handleValueChange", 1);
a([
  E("open", { waitUntilFirstUpdate: !0 })
], re.prototype, "handleOpenChange", 1);
be("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
be("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
var Bd = "sl-select";
re.define("sl-select");
D({
  tagName: Bd,
  elementClass: re,
  react: I,
  events: {
    onSlChange: "sl-change",
    onSlClear: "sl-clear",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlBlur: "sl-blur",
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlSelect"
});
var Vd = L`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`, rs = class extends R {
  constructor() {
    super(...arguments), this.effect = "none";
  }
  render() {
    return C`
      <div
        part="base"
        class=${H({
      skeleton: !0,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
rs.styles = [F, Vd];
a([
  u()
], rs.prototype, "effect", 2);
var Fd = "sl-skeleton";
rs.define("sl-skeleton");
D({
  tagName: Fd,
  elementClass: rs,
  react: I,
  events: {},
  displayName: "SlSkeleton"
});
var Hd = "sl-spinner";
Mr.define("sl-spinner");
D({
  tagName: Hd,
  elementClass: Mr,
  react: I,
  events: {},
  displayName: "SlSpinner"
});
var Ud = L`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;
function no(e, t) {
  function r(s) {
    const i = e.getBoundingClientRect(), n = e.ownerDocument.defaultView, c = i.left + n.scrollX, l = i.top + n.scrollY, d = s.pageX - c, f = s.pageY - l;
    t != null && t.onMove && t.onMove(d, f);
  }
  function o() {
    document.removeEventListener("pointermove", r), document.removeEventListener("pointerup", o), t != null && t.onStop && t.onStop();
  }
  document.addEventListener("pointermove", r, { passive: !0 }), document.addEventListener("pointerup", o), (t == null ? void 0 : t.initialEvent) instanceof PointerEvent && r(t.initialEvent);
}
var et = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.position = 50, this.vertical = !1, this.disabled = !1, this.snapThreshold = 12;
  }
  connectedCallback() {
    super.connectedCallback(), this.resizeObserver = new ResizeObserver((e) => this.handleResize(e)), this.updateComplete.then(() => this.resizeObserver.observe(this)), this.detectSize(), this.cachedPositionInPixels = this.percentageToPixels(this.position);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.resizeObserver.unobserve(this);
  }
  detectSize() {
    const { width: e, height: t } = this.getBoundingClientRect();
    this.size = this.vertical ? t : e;
  }
  percentageToPixels(e) {
    return this.size * (e / 100);
  }
  pixelsToPercentage(e) {
    return e / this.size * 100;
  }
  handleDrag(e) {
    const t = this.localize.dir() === "rtl";
    this.disabled || (e.cancelable && e.preventDefault(), no(this, {
      onMove: (r, o) => {
        let s = this.vertical ? o : r;
        this.primary === "end" && (s = this.size - s), this.snap && this.snap.split(" ").forEach((n) => {
          let c;
          n.endsWith("%") ? c = this.size * (parseFloat(n) / 100) : c = parseFloat(n), t && !this.vertical && (c = this.size - c), s >= c - this.snapThreshold && s <= c + this.snapThreshold && (s = c);
        }), this.position = Pe(this.pixelsToPercentage(s), 0, 100);
      },
      initialEvent: e
    }));
  }
  handleKeyDown(e) {
    if (!this.disabled && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
      let t = this.position;
      const r = (e.shiftKey ? 10 : 1) * (this.primary === "end" ? -1 : 1);
      e.preventDefault(), (e.key === "ArrowLeft" && !this.vertical || e.key === "ArrowUp" && this.vertical) && (t -= r), (e.key === "ArrowRight" && !this.vertical || e.key === "ArrowDown" && this.vertical) && (t += r), e.key === "Home" && (t = this.primary === "end" ? 100 : 0), e.key === "End" && (t = this.primary === "end" ? 0 : 100), this.position = Pe(t, 0, 100);
    }
  }
  handleResize(e) {
    const { width: t, height: r } = e[0].contentRect;
    this.size = this.vertical ? r : t, this.primary && (this.position = this.pixelsToPercentage(this.cachedPositionInPixels));
  }
  handlePositionChange() {
    this.cachedPositionInPixels = this.percentageToPixels(this.position), this.positionInPixels = this.percentageToPixels(this.position), this.emit("sl-reposition");
  }
  handlePositionInPixelsChange() {
    this.position = this.pixelsToPercentage(this.positionInPixels);
  }
  handleVerticalChange() {
    this.detectSize();
  }
  render() {
    const e = this.vertical ? "gridTemplateRows" : "gridTemplateColumns", t = this.vertical ? "gridTemplateColumns" : "gridTemplateRows", r = this.localize.dir() === "rtl", o = `
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `, s = "auto";
    return this.primary === "end" ? r && !this.vertical ? this.style[e] = `${o} var(--divider-width) ${s}` : this.style[e] = `${s} var(--divider-width) ${o}` : r && !this.vertical ? this.style[e] = `${s} var(--divider-width) ${o}` : this.style[e] = `${o} var(--divider-width) ${s}`, this.style[t] = "", C`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${P(this.disabled ? void 0 : "0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `;
  }
};
et.styles = [F, Ud];
a([
  A(".divider")
], et.prototype, "divider", 2);
a([
  u({ type: Number, reflect: !0 })
], et.prototype, "position", 2);
a([
  u({ attribute: "position-in-pixels", type: Number })
], et.prototype, "positionInPixels", 2);
a([
  u({ type: Boolean, reflect: !0 })
], et.prototype, "vertical", 2);
a([
  u({ type: Boolean, reflect: !0 })
], et.prototype, "disabled", 2);
a([
  u()
], et.prototype, "primary", 2);
a([
  u()
], et.prototype, "snap", 2);
a([
  u({ type: Number, attribute: "snap-threshold" })
], et.prototype, "snapThreshold", 2);
a([
  E("position")
], et.prototype, "handlePositionChange", 1);
a([
  E("positionInPixels")
], et.prototype, "handlePositionInPixelsChange", 1);
a([
  E("vertical")
], et.prototype, "handleVerticalChange", 1);
var jd = "sl-split-panel";
et.define("sl-split-panel");
D({
  tagName: jd,
  elementClass: et,
  react: I,
  events: {
    onSlReposition: "sl-reposition"
  },
  displayName: "SlSplitPanel"
});
var Wd = L`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`, ct = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const e = this.getTextLabel();
    if (typeof this.cachedTextLabel > "u") {
      this.cachedTextLabel = e;
      return;
    }
    e !== this.cachedTextLabel && (this.cachedTextLabel = e, this.emit("slotchange", { bubbles: !0, composed: !1, cancelable: !1 }));
  }
  handleMouseEnter() {
    this.hasHover = !0;
  }
  handleMouseLeave() {
    this.hasHover = !1;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    typeof this.value != "string" && (this.value = String(this.value)), this.value.includes(" ") && (console.error("Option values cannot include a space. All spaces have been replaced with underscores.", this), this.value = this.value.replace(/ /g, "_"));
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const e = this.childNodes;
    let t = "";
    return [...e].forEach((r) => {
      r.nodeType === Node.ELEMENT_NODE && (r.hasAttribute("slot") || (t += r.textContent)), r.nodeType === Node.TEXT_NODE && (t += r.textContent);
    }), t.trim();
  }
  render() {
    return C`
      <div
        part="base"
        class=${H({
      option: !0,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
ct.styles = [F, Wd];
ct.dependencies = { "sl-icon": xe };
a([
  A(".option__label")
], ct.prototype, "defaultSlot", 2);
a([
  U()
], ct.prototype, "current", 2);
a([
  U()
], ct.prototype, "selected", 2);
a([
  U()
], ct.prototype, "hasHover", 2);
a([
  u({ reflect: !0 })
], ct.prototype, "value", 2);
a([
  u({ type: Boolean, reflect: !0 })
], ct.prototype, "disabled", 2);
a([
  E("disabled")
], ct.prototype, "handleDisabledChange", 1);
a([
  E("selected")
], ct.prototype, "handleSelectedChange", 1);
a([
  E("value")
], ct.prototype, "handleValueChange", 1);
var qd = "sl-option";
ct.define("sl-option");
D({
  tagName: qd,
  elementClass: ct,
  react: I,
  events: {},
  displayName: "SlOption"
});
var Kd = L`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`, hr = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.value = 0, this.label = "";
  }
  updated(e) {
    if (super.updated(e), e.has("value")) {
      const t = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")), r = 2 * Math.PI * t, o = r - this.value / 100 * r;
      this.indicatorOffset = `${o}px`;
    }
  }
  render() {
    return C`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
hr.styles = [F, Kd];
a([
  A(".progress-ring__indicator")
], hr.prototype, "indicator", 2);
a([
  U()
], hr.prototype, "indicatorOffset", 2);
a([
  u({ type: Number, reflect: !0 })
], hr.prototype, "value", 2);
a([
  u()
], hr.prototype, "label", 2);
var Yd = "sl-progress-ring";
hr.define("sl-progress-ring");
D({
  tagName: Yd,
  elementClass: hr,
  react: I,
  events: {},
  displayName: "SlProgressRing"
});
var Xd = L`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`, Fr = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.value = 0, this.indeterminate = !1, this.label = "";
  }
  render() {
    return C`
      <div
        part="base"
        class=${H({
      "progress-bar": !0,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${P(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ze({ width: `${this.value}%` })}>
          ${this.indeterminate ? "" : C` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `;
  }
};
Fr.styles = [F, Xd];
a([
  u({ type: Number, reflect: !0 })
], Fr.prototype, "value", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Fr.prototype, "indeterminate", 2);
a([
  u()
], Fr.prototype, "label", 2);
var Gd = "sl-progress-bar";
Fr.define("sl-progress-bar");
D({
  tagName: Gd,
  elementClass: Fr,
  react: I,
  events: {},
  displayName: "SlProgressBar"
});
var Jd = "sl-popup";
ue.define("sl-popup");
D({
  tagName: Jd,
  elementClass: ue,
  react: I,
  events: {
    onSlReposition: "sl-reposition"
  },
  displayName: "SlPopup"
});
var Zd = L`
  :host {
    display: inline-block;
  }
`;
let ka = null, Ca = class {
};
Ca.render = function(e, t) {
  ka(e, t);
};
self.QrCreator = Ca;
(function(e) {
  function t(c, l, d, f) {
    var h = {}, p = e(d, l);
    p.u(c), p.J(), f = f || 0;
    var m = p.h(), g = p.h() + 2 * f;
    return h.text = c, h.level = l, h.version = d, h.O = g, h.a = function(b, y) {
      return b -= f, y -= f, 0 > b || b >= m || 0 > y || y >= m ? !1 : p.a(b, y);
    }, h;
  }
  function r(c, l, d, f, h, p, m, g, b, y) {
    function k(x, _, w, v, z, V, j) {
      x ? (c.lineTo(_ + V, w + j), c.arcTo(_, w, v, z, p)) : c.lineTo(_, w);
    }
    m ? c.moveTo(l + p, d) : c.moveTo(l, d), k(g, f, d, f, h, -p, 0), k(b, f, h, l, h, 0, -p), k(y, l, h, l, d, p, 0), k(m, l, d, f, d, 0, p);
  }
  function o(c, l, d, f, h, p, m, g, b, y) {
    function k(x, _, w, v) {
      c.moveTo(x + w, _), c.lineTo(
        x,
        _
      ), c.lineTo(x, _ + v), c.arcTo(x, _, x + w, _, p);
    }
    m && k(l, d, p, p), g && k(f, d, -p, p), b && k(f, h, -p, -p), y && k(l, h, p, -p);
  }
  function s(c, l) {
    var d = l.fill;
    if (typeof d == "string")
      c.fillStyle = d;
    else {
      var f = d.type, h = d.colorStops;
      if (d = d.position.map((m) => Math.round(m * l.size)), f === "linear-gradient")
        var p = c.createLinearGradient.apply(c, d);
      else if (f === "radial-gradient")
        p = c.createRadialGradient.apply(c, d);
      else
        throw Error("Unsupported fill");
      h.forEach(([m, g]) => {
        p.addColorStop(m, g);
      }), c.fillStyle = p;
    }
  }
  function i(c, l) {
    e: {
      var d = l.text, f = l.v, h = l.N, p = l.K, m = l.P;
      for (h = Math.max(1, h || 1), p = Math.min(40, p || 40); h <= p; h += 1)
        try {
          var g = t(d, f, h, m);
          break e;
        } catch {
        }
      g = void 0;
    }
    if (!g)
      return null;
    for (d = c.getContext("2d"), l.background && (d.fillStyle = l.background, d.fillRect(l.left, l.top, l.size, l.size)), f = g.O, p = l.size / f, d.beginPath(), m = 0; m < f; m += 1)
      for (h = 0; h < f; h += 1) {
        var b = d, y = l.left + h * p, k = l.top + m * p, x = m, _ = h, w = g.a, v = y + p, z = k + p, V = x - 1, j = x + 1, M = _ - 1, S = _ + 1, X = Math.floor(Math.min(0.5, Math.max(0, l.R)) * p), Y = w(x, _), ve = w(V, M), W = w(V, _);
        V = w(V, S);
        var _e = w(x, S);
        S = w(j, S), _ = w(
          j,
          _
        ), j = w(j, M), x = w(x, M), y = Math.round(y), k = Math.round(k), v = Math.round(v), z = Math.round(z), Y ? r(b, y, k, v, z, X, !W && !x, !W && !_e, !_ && !_e, !_ && !x) : o(b, y, k, v, z, X, W && x && ve, W && _e && V, _ && _e && S, _ && x && j);
      }
    return s(d, l), d.fill(), c;
  }
  var n = { minVersion: 1, maxVersion: 40, ecLevel: "L", left: 0, top: 0, size: 200, fill: "#000", background: null, text: "no text", radius: 0.5, quiet: 0 };
  ka = function(c, l) {
    var d = {};
    Object.assign(d, n, c), d.N = d.minVersion, d.K = d.maxVersion, d.v = d.ecLevel, d.left = d.left, d.top = d.top, d.size = d.size, d.fill = d.fill, d.background = d.background, d.text = d.text, d.R = d.radius, d.P = d.quiet, l instanceof HTMLCanvasElement ? ((l.width !== d.size || l.height !== d.size) && (l.width = d.size, l.height = d.size), l.getContext("2d").clearRect(0, 0, l.width, l.height), i(l, d)) : (c = document.createElement("canvas"), c.width = d.size, c.height = d.size, d = i(c, d), l.appendChild(d));
  };
})(function() {
  function e(l) {
    var d = r.s(l);
    return { S: function() {
      return 4;
    }, b: function() {
      return d.length;
    }, write: function(f) {
      for (var h = 0; h < d.length; h += 1)
        f.put(d[h], 8);
    } };
  }
  function t() {
    var l = [], d = 0, f = {
      B: function() {
        return l;
      },
      c: function(h) {
        return (l[Math.floor(h / 8)] >>> 7 - h % 8 & 1) == 1;
      },
      put: function(h, p) {
        for (var m = 0; m < p; m += 1)
          f.m((h >>> p - m - 1 & 1) == 1);
      },
      f: function() {
        return d;
      },
      m: function(h) {
        var p = Math.floor(d / 8);
        l.length <= p && l.push(0), h && (l[p] |= 128 >>> d % 8), d += 1;
      }
    };
    return f;
  }
  function r(l, d) {
    function f(x, _) {
      for (var w = -1; 7 >= w; w += 1)
        if (!(-1 >= x + w || g <= x + w))
          for (var v = -1; 7 >= v; v += 1)
            -1 >= _ + v || g <= _ + v || (m[x + w][_ + v] = 0 <= w && 6 >= w && (v == 0 || v == 6) || 0 <= v && 6 >= v && (w == 0 || w == 6) || 2 <= w && 4 >= w && 2 <= v && 4 >= v);
    }
    function h(x, _) {
      for (var w = g = 4 * l + 17, v = Array(w), z = 0; z < w; z += 1) {
        v[z] = Array(w);
        for (var V = 0; V < w; V += 1)
          v[z][V] = null;
      }
      for (m = v, f(0, 0), f(g - 7, 0), f(0, g - 7), w = i.G(l), v = 0; v < w.length; v += 1)
        for (z = 0; z < w.length; z += 1) {
          V = w[v];
          var j = w[z];
          if (m[V][j] == null)
            for (var M = -2; 2 >= M; M += 1)
              for (var S = -2; 2 >= S; S += 1)
                m[V + M][j + S] = M == -2 || M == 2 || S == -2 || S == 2 || M == 0 && S == 0;
        }
      for (w = 8; w < g - 8; w += 1)
        m[w][6] == null && (m[w][6] = w % 2 == 0);
      for (w = 8; w < g - 8; w += 1)
        m[6][w] == null && (m[6][w] = w % 2 == 0);
      for (w = i.w(p << 3 | _), v = 0; 15 > v; v += 1)
        z = !x && (w >> v & 1) == 1, m[6 > v ? v : 8 > v ? v + 1 : g - 15 + v][8] = z, m[8][8 > v ? g - v - 1 : 9 > v ? 15 - v : 14 - v] = z;
      if (m[g - 8][8] = !x, 7 <= l) {
        for (w = i.A(l), v = 0; 18 > v; v += 1)
          z = !x && (w >> v & 1) == 1, m[Math.floor(v / 3)][v % 3 + g - 8 - 3] = z;
        for (v = 0; 18 > v; v += 1)
          z = !x && (w >> v & 1) == 1, m[v % 3 + g - 8 - 3][Math.floor(v / 3)] = z;
      }
      if (b == null) {
        for (x = c.I(l, p), w = t(), v = 0; v < y.length; v += 1)
          z = y[v], w.put(4, 4), w.put(z.b(), i.f(4, l)), z.write(w);
        for (v = z = 0; v < x.length; v += 1)
          z += x[v].j;
        if (w.f() > 8 * z)
          throw Error("code length overflow. (" + w.f() + ">" + 8 * z + ")");
        for (w.f() + 4 <= 8 * z && w.put(0, 4); w.f() % 8 != 0; )
          w.m(!1);
        for (; !(w.f() >= 8 * z) && (w.put(236, 8), !(w.f() >= 8 * z)); )
          w.put(17, 8);
        var X = 0;
        for (z = v = 0, V = Array(x.length), j = Array(x.length), M = 0; M < x.length; M += 1) {
          var Y = x[M].j, ve = x[M].o - Y;
          for (v = Math.max(v, Y), z = Math.max(z, ve), V[M] = Array(Y), S = 0; S < V[M].length; S += 1)
            V[M][S] = 255 & w.B()[S + X];
          for (X += Y, S = i.C(ve), Y = o(V[M], S.b() - 1).l(S), j[M] = Array(S.b() - 1), S = 0; S < j[M].length; S += 1)
            ve = S + Y.b() - j[M].length, j[M][S] = 0 <= ve ? Y.c(ve) : 0;
        }
        for (S = w = 0; S < x.length; S += 1)
          w += x[S].o;
        for (w = Array(w), S = X = 0; S < v; S += 1)
          for (M = 0; M < x.length; M += 1)
            S < V[M].length && (w[X] = V[M][S], X += 1);
        for (S = 0; S < z; S += 1)
          for (M = 0; M < x.length; M += 1)
            S < j[M].length && (w[X] = j[M][S], X += 1);
        b = w;
      }
      for (x = b, w = -1, v = g - 1, z = 7, V = 0, _ = i.F(_), j = g - 1; 0 < j; j -= 2)
        for (j == 6 && --j; ; ) {
          for (M = 0; 2 > M; M += 1)
            m[v][j - M] == null && (S = !1, V < x.length && (S = (x[V] >>> z & 1) == 1), _(v, j - M) && (S = !S), m[v][j - M] = S, --z, z == -1 && (V += 1, z = 7));
          if (v += w, 0 > v || g <= v) {
            v -= w, w = -w;
            break;
          }
        }
    }
    var p = s[d], m = null, g = 0, b = null, y = [], k = { u: function(x) {
      x = e(x), y.push(x), b = null;
    }, a: function(x, _) {
      if (0 > x || g <= x || 0 > _ || g <= _)
        throw Error(x + "," + _);
      return m[x][_];
    }, h: function() {
      return g;
    }, J: function() {
      for (var x = 0, _ = 0, w = 0; 8 > w; w += 1) {
        h(!0, w);
        var v = i.D(k);
        (w == 0 || x > v) && (x = v, _ = w);
      }
      h(!1, _);
    } };
    return k;
  }
  function o(l, d) {
    if (typeof l.length > "u")
      throw Error(l.length + "/" + d);
    var f = function() {
      for (var p = 0; p < l.length && l[p] == 0; )
        p += 1;
      for (var m = Array(l.length - p + d), g = 0; g < l.length - p; g += 1)
        m[g] = l[g + p];
      return m;
    }(), h = { c: function(p) {
      return f[p];
    }, b: function() {
      return f.length;
    }, multiply: function(p) {
      for (var m = Array(h.b() + p.b() - 1), g = 0; g < h.b(); g += 1)
        for (var b = 0; b < p.b(); b += 1)
          m[g + b] ^= n.i(n.g(h.c(g)) + n.g(p.c(b)));
      return o(m, 0);
    }, l: function(p) {
      if (0 > h.b() - p.b())
        return h;
      for (var m = n.g(h.c(0)) - n.g(p.c(0)), g = Array(h.b()), b = 0; b < h.b(); b += 1)
        g[b] = h.c(b);
      for (b = 0; b < p.b(); b += 1)
        g[b] ^= n.i(n.g(p.c(b)) + m);
      return o(g, 0).l(p);
    } };
    return h;
  }
  r.s = function(l) {
    for (var d = [], f = 0; f < l.length; f++) {
      var h = l.charCodeAt(f);
      128 > h ? d.push(h) : 2048 > h ? d.push(192 | h >> 6, 128 | h & 63) : 55296 > h || 57344 <= h ? d.push(224 | h >> 12, 128 | h >> 6 & 63, 128 | h & 63) : (f++, h = 65536 + ((h & 1023) << 10 | l.charCodeAt(f) & 1023), d.push(240 | h >> 18, 128 | h >> 12 & 63, 128 | h >> 6 & 63, 128 | h & 63));
    }
    return d;
  };
  var s = { L: 1, M: 0, Q: 3, H: 2 }, i = function() {
    function l(h) {
      for (var p = 0; h != 0; )
        p += 1, h >>>= 1;
      return p;
    }
    var d = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ], f = { w: function(h) {
      for (var p = h << 10; 0 <= l(p) - l(1335); )
        p ^= 1335 << l(p) - l(1335);
      return (h << 10 | p) ^ 21522;
    }, A: function(h) {
      for (var p = h << 12; 0 <= l(p) - l(7973); )
        p ^= 7973 << l(p) - l(7973);
      return h << 12 | p;
    }, G: function(h) {
      return d[h - 1];
    }, F: function(h) {
      switch (h) {
        case 0:
          return function(p, m) {
            return (p + m) % 2 == 0;
          };
        case 1:
          return function(p) {
            return p % 2 == 0;
          };
        case 2:
          return function(p, m) {
            return m % 3 == 0;
          };
        case 3:
          return function(p, m) {
            return (p + m) % 3 == 0;
          };
        case 4:
          return function(p, m) {
            return (Math.floor(p / 2) + Math.floor(m / 3)) % 2 == 0;
          };
        case 5:
          return function(p, m) {
            return p * m % 2 + p * m % 3 == 0;
          };
        case 6:
          return function(p, m) {
            return (p * m % 2 + p * m % 3) % 2 == 0;
          };
        case 7:
          return function(p, m) {
            return (p * m % 3 + (p + m) % 2) % 2 == 0;
          };
        default:
          throw Error("bad maskPattern:" + h);
      }
    }, C: function(h) {
      for (var p = o([1], 0), m = 0; m < h; m += 1)
        p = p.multiply(o([1, n.i(m)], 0));
      return p;
    }, f: function(h, p) {
      if (h != 4 || 1 > p || 40 < p)
        throw Error("mode: " + h + "; type: " + p);
      return 10 > p ? 8 : 16;
    }, D: function(h) {
      for (var p = h.h(), m = 0, g = 0; g < p; g += 1)
        for (var b = 0; b < p; b += 1) {
          for (var y = 0, k = h.a(g, b), x = -1; 1 >= x; x += 1)
            if (!(0 > g + x || p <= g + x))
              for (var _ = -1; 1 >= _; _ += 1)
                0 > b + _ || p <= b + _ || (x != 0 || _ != 0) && k == h.a(g + x, b + _) && (y += 1);
          5 < y && (m += 3 + y - 5);
        }
      for (g = 0; g < p - 1; g += 1)
        for (b = 0; b < p - 1; b += 1)
          y = 0, h.a(g, b) && (y += 1), h.a(g + 1, b) && (y += 1), h.a(g, b + 1) && (y += 1), h.a(g + 1, b + 1) && (y += 1), (y == 0 || y == 4) && (m += 3);
      for (g = 0; g < p; g += 1)
        for (b = 0; b < p - 6; b += 1)
          h.a(g, b) && !h.a(g, b + 1) && h.a(g, b + 2) && h.a(g, b + 3) && h.a(g, b + 4) && !h.a(g, b + 5) && h.a(g, b + 6) && (m += 40);
      for (b = 0; b < p; b += 1)
        for (g = 0; g < p - 6; g += 1)
          h.a(g, b) && !h.a(g + 1, b) && h.a(g + 2, b) && h.a(g + 3, b) && h.a(g + 4, b) && !h.a(g + 5, b) && h.a(g + 6, b) && (m += 40);
      for (b = y = 0; b < p; b += 1)
        for (g = 0; g < p; g += 1)
          h.a(g, b) && (y += 1);
      return m += Math.abs(100 * y / p / p - 50) / 5 * 10;
    } };
    return f;
  }(), n = function() {
    for (var l = Array(256), d = Array(256), f = 0; 8 > f; f += 1)
      l[f] = 1 << f;
    for (f = 8; 256 > f; f += 1)
      l[f] = l[f - 4] ^ l[f - 5] ^ l[f - 6] ^ l[f - 8];
    for (f = 0; 255 > f; f += 1)
      d[l[f]] = f;
    return { g: function(h) {
      if (1 > h)
        throw Error("glog(" + h + ")");
      return d[h];
    }, i: function(h) {
      for (; 0 > h; )
        h += 255;
      for (; 256 <= h; )
        h -= 255;
      return l[h];
    } };
  }(), c = function() {
    function l(h, p) {
      switch (p) {
        case s.L:
          return d[4 * (h - 1)];
        case s.M:
          return d[4 * (h - 1) + 1];
        case s.Q:
          return d[4 * (h - 1) + 2];
        case s.H:
          return d[4 * (h - 1) + 3];
      }
    }
    var d = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [
        3,
        58,
        36,
        2,
        59,
        37
      ],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],
      [5, 122, 98, 1, 123, 99],
      [
        7,
        73,
        45,
        3,
        74,
        46
      ],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [
        4,
        151,
        121,
        5,
        152,
        122
      ],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ], f = { I: function(h, p) {
      var m = l(h, p);
      if (typeof m > "u")
        throw Error("bad rs block @ typeNumber:" + h + "/errorCorrectLevel:" + p);
      h = m.length / 3, p = [];
      for (var g = 0; g < h; g += 1)
        for (var b = m[3 * g], y = m[3 * g + 1], k = m[3 * g + 2], x = 0; x < b; x += 1) {
          var _ = k, w = {};
          w.o = y, w.j = _, p.push(w);
        }
      return p;
    } };
    return f;
  }();
  return r;
}());
const Qd = QrCreator;
var ft = class extends R {
  constructor() {
    super(...arguments), this.value = "", this.label = "", this.size = 128, this.fill = "black", this.background = "white", this.radius = 0, this.errorCorrection = "H";
  }
  firstUpdated() {
    this.generate();
  }
  generate() {
    this.hasUpdated && Qd.render(
      {
        text: this.value,
        radius: this.radius,
        ecLevel: this.errorCorrection,
        fill: this.fill,
        background: this.background,
        // We draw the canvas larger and scale its container down to avoid blurring on high-density displays
        size: this.size * 2
      },
      this.canvas
    );
  }
  render() {
    var e;
    return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e = this.label) == null ? void 0 : e.length) > 0 ? this.label : this.value}
        style=${Ze({
      width: `${this.size}px`,
      height: `${this.size}px`
    })}
      ></canvas>
    `;
  }
};
ft.styles = [F, Zd];
a([
  A("canvas")
], ft.prototype, "canvas", 2);
a([
  u()
], ft.prototype, "value", 2);
a([
  u()
], ft.prototype, "label", 2);
a([
  u({ type: Number })
], ft.prototype, "size", 2);
a([
  u()
], ft.prototype, "fill", 2);
a([
  u()
], ft.prototype, "background", 2);
a([
  u({ type: Number })
], ft.prototype, "radius", 2);
a([
  u({ attribute: "error-correction" })
], ft.prototype, "errorCorrection", 2);
a([
  E(["background", "errorCorrection", "fill", "radius", "size", "value"])
], ft.prototype, "generate", 1);
var eu = "sl-qr-code";
ft.define("sl-qr-code");
D({
  tagName: eu,
  elementClass: ft,
  react: I,
  events: {},
  displayName: "SlQrCode"
});
var tu = L`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`, kt = class extends R {
  constructor() {
    super(), this.checked = !1, this.hasFocus = !1, this.size = "medium", this.disabled = !1, this.handleBlur = () => {
      this.hasFocus = !1, this.emit("sl-blur");
    }, this.handleClick = () => {
      this.disabled || (this.checked = !0);
    }, this.handleFocus = () => {
      this.hasFocus = !0, this.emit("sl-focus");
    }, this.addEventListener("blur", this.handleBlur), this.addEventListener("click", this.handleClick), this.addEventListener("focus", this.handleFocus);
  }
  connectedCallback() {
    super.connectedCallback(), this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio"), this.setAttribute("tabindex", "-1"), this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false"), this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return C`
      <span
        part="base"
        class=${H({
      radio: !0,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus,
      "radio--small": this.size === "small",
      "radio--medium": this.size === "medium",
      "radio--large": this.size === "large"
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? C` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
kt.styles = [F, tu];
kt.dependencies = { "sl-icon": xe };
a([
  U()
], kt.prototype, "checked", 2);
a([
  U()
], kt.prototype, "hasFocus", 2);
a([
  u()
], kt.prototype, "value", 2);
a([
  u({ reflect: !0 })
], kt.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], kt.prototype, "disabled", 2);
a([
  E("checked")
], kt.prototype, "handleCheckedChange", 1);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], kt.prototype, "handleDisabledChange", 1);
var ru = "sl-radio";
kt.define("sl-radio");
D({
  tagName: ru,
  elementClass: kt,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  },
  displayName: "SlRadio"
});
var Sa = L`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`, ou = L`
  ${Sa}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`, mt = class extends R {
  constructor() {
    super(...arguments), this.hasSlotController = new Je(this, "[default]", "prefix", "suffix"), this.hasFocus = !1, this.checked = !1, this.disabled = !1, this.size = "medium", this.pill = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "presentation");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleClick(e) {
    if (this.disabled) {
      e.preventDefault(), e.stopPropagation();
      return;
    }
    this.checked = !0;
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus on the radio button. */
  focus(e) {
    this.input.focus(e);
  }
  /** Removes focus from the radio button. */
  blur() {
    this.input.blur();
  }
  render() {
    return oo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${H({
      button: !0,
      "button--default": !0,
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--checked": this.checked,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--outline": !0,
      "button--pill": this.pill,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
          aria-disabled=${this.disabled}
          type="button"
          value=${P(this.value)}
          tabindex="${this.checked ? "0" : "-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
  }
};
mt.styles = [F, ou];
a([
  A(".button")
], mt.prototype, "input", 2);
a([
  A(".hidden-input")
], mt.prototype, "hiddenInput", 2);
a([
  U()
], mt.prototype, "hasFocus", 2);
a([
  u({ type: Boolean, reflect: !0 })
], mt.prototype, "checked", 2);
a([
  u()
], mt.prototype, "value", 2);
a([
  u({ type: Boolean, reflect: !0 })
], mt.prototype, "disabled", 2);
a([
  u({ reflect: !0 })
], mt.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], mt.prototype, "pill", 2);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], mt.prototype, "handleDisabledChange", 1);
var su = "sl-radio-button";
mt.define("sl-radio-button");
D({
  tagName: su,
  elementClass: mt,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  },
  displayName: "SlRadioButton"
});
var iu = L`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, nu = L`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`, Qt = class extends R {
  constructor() {
    super(...arguments), this.disableRole = !1, this.label = "";
  }
  handleFocus(e) {
    const t = Gr(e.target);
    t == null || t.classList.add("sl-button-group__button--focus");
  }
  handleBlur(e) {
    const t = Gr(e.target);
    t == null || t.classList.remove("sl-button-group__button--focus");
  }
  handleMouseOver(e) {
    const t = Gr(e.target);
    t == null || t.classList.add("sl-button-group__button--hover");
  }
  handleMouseOut(e) {
    const t = Gr(e.target);
    t == null || t.classList.remove("sl-button-group__button--hover");
  }
  handleSlotChange() {
    const e = [...this.defaultSlot.assignedElements({ flatten: !0 })];
    e.forEach((t) => {
      const r = e.indexOf(t), o = Gr(t);
      o && (o.classList.add("sl-button-group__button"), o.classList.toggle("sl-button-group__button--first", r === 0), o.classList.toggle("sl-button-group__button--inner", r > 0 && r < e.length - 1), o.classList.toggle("sl-button-group__button--last", r === e.length - 1), o.classList.toggle("sl-button-group__button--radio", o.tagName.toLowerCase() === "sl-radio-button"));
    });
  }
  render() {
    return C`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
Qt.styles = [F, nu];
a([
  A("slot")
], Qt.prototype, "defaultSlot", 2);
a([
  U()
], Qt.prototype, "disableRole", 2);
a([
  u()
], Qt.prototype, "label", 2);
function Gr(e) {
  var t;
  const r = "sl-button, sl-radio-button";
  return (t = e.closest(r)) != null ? t : e.querySelector(r);
}
var Ue = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this), this.hasSlotController = new Je(this, "help-text", "label"), this.customValidityMessage = "", this.hasButtonGroup = !1, this.errorMessage = "", this.defaultValue = "", this.label = "", this.helpText = "", this.name = "option", this.value = "", this.size = "medium", this.form = "", this.required = !1;
  }
  /** Gets the validity state object */
  get validity() {
    const e = this.required && !this.value;
    return this.customValidityMessage !== "" ? tc : e ? ec : Qo;
  }
  /** Gets the validation message */
  get validationMessage() {
    const e = this.required && !this.value;
    return this.customValidityMessage !== "" ? this.customValidityMessage : e ? this.validationInput.validationMessage : "";
  }
  connectedCallback() {
    super.connectedCallback(), this.defaultValue = this.value;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  getAllRadios() {
    return [...this.querySelectorAll("sl-radio, sl-radio-button")];
  }
  handleRadioClick(e) {
    const t = e.target.closest("sl-radio, sl-radio-button"), r = this.getAllRadios(), o = this.value;
    t.disabled || (this.value = t.value, r.forEach((s) => s.checked = s === t), this.value !== o && (this.emit("sl-change"), this.emit("sl-input")));
  }
  handleKeyDown(e) {
    var t;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key))
      return;
    const r = this.getAllRadios().filter((c) => !c.disabled), o = (t = r.find((c) => c.checked)) != null ? t : r[0], s = e.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(e.key) ? -1 : 1, i = this.value;
    let n = r.indexOf(o) + s;
    n < 0 && (n = r.length - 1), n > r.length - 1 && (n = 0), this.getAllRadios().forEach((c) => {
      c.checked = !1, this.hasButtonGroup || (c.tabIndex = -1);
    }), this.value = r[n].value, r[n].checked = !0, this.hasButtonGroup ? r[n].shadowRoot.querySelector("button").focus() : (r[n].tabIndex = 0, r[n].focus()), this.value !== i && (this.emit("sl-change"), this.emit("sl-input")), e.preventDefault();
  }
  handleLabelClick() {
    const e = this.getAllRadios(), r = e.find((o) => o.checked) || e[0];
    r && r.focus();
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  async syncRadioElements() {
    var e, t;
    const r = this.getAllRadios();
    if (await Promise.all(
      // Sync the checked state and size
      r.map(async (o) => {
        await o.updateComplete, o.checked = o.value === this.value, o.size = this.size;
      })
    ), this.hasButtonGroup = r.some((o) => o.tagName.toLowerCase() === "sl-radio-button"), r.length > 0 && !r.some((o) => o.checked))
      if (this.hasButtonGroup) {
        const o = (e = r[0].shadowRoot) == null ? void 0 : e.querySelector("button");
        o && (o.tabIndex = 0);
      } else
        r[0].tabIndex = 0;
    if (this.hasButtonGroup) {
      const o = (t = this.shadowRoot) == null ? void 0 : t.querySelector("sl-button-group");
      o && (o.disableRole = !0);
    }
  }
  syncRadios() {
    if (customElements.get("sl-radio") && customElements.get("sl-radio-button")) {
      this.syncRadioElements();
      return;
    }
    customElements.get("sl-radio") ? this.syncRadioElements() : customElements.whenDefined("sl-radio").then(() => this.syncRadios()), customElements.get("sl-radio-button") ? this.syncRadioElements() : customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
  }
  updateCheckedRadio() {
    this.getAllRadios().forEach((t) => t.checked = t.value === this.value), this.formControlController.setValidity(this.validity.valid);
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    this.hasUpdated && this.updateCheckedRadio();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const e = this.required && !this.value, t = this.customValidityMessage !== "";
    return e || t ? (this.formControlController.emitInvalidEvent(), !1) : !0;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    const e = this.validity.valid;
    return this.errorMessage = this.customValidityMessage || e ? "" : this.validationInput.validationMessage, this.formControlController.setValidity(e), this.validationInput.hidden = !0, clearTimeout(this.validationTimeout), e || (this.validationInput.hidden = !1, this.validationInput.reportValidity(), this.validationTimeout = setTimeout(() => this.validationInput.hidden = !0, 1e4)), e;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e = "") {
    this.customValidityMessage = e, this.errorMessage = e, this.validationInput.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), r = this.label ? !0 : !!e, o = this.helpText ? !0 : !!t, s = C`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
    return C`
      <fieldset
        part="form-control"
        class=${H({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": !0,
      "form-control--has-label": r,
      "form-control--has-help-text": o
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? C`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              ` : s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
  }
};
Ue.styles = [F, Dr, iu];
Ue.dependencies = { "sl-button-group": Qt };
a([
  A("slot:not([name])")
], Ue.prototype, "defaultSlot", 2);
a([
  A(".radio-group__validation-input")
], Ue.prototype, "validationInput", 2);
a([
  U()
], Ue.prototype, "hasButtonGroup", 2);
a([
  U()
], Ue.prototype, "errorMessage", 2);
a([
  U()
], Ue.prototype, "defaultValue", 2);
a([
  u()
], Ue.prototype, "label", 2);
a([
  u({ attribute: "help-text" })
], Ue.prototype, "helpText", 2);
a([
  u()
], Ue.prototype, "name", 2);
a([
  u({ reflect: !0 })
], Ue.prototype, "value", 2);
a([
  u({ reflect: !0 })
], Ue.prototype, "size", 2);
a([
  u({ reflect: !0 })
], Ue.prototype, "form", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ue.prototype, "required", 2);
a([
  E("size", { waitUntilFirstUpdate: !0 })
], Ue.prototype, "handleSizeChange", 1);
a([
  E("value")
], Ue.prototype, "handleValueChange", 1);
var au = "sl-radio-group";
Ue.define("sl-radio-group");
D({
  tagName: au,
  elementClass: Ue,
  react: I,
  events: {
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlRadioGroup"
});
var lu = "sl-icon-button";
Le.define("sl-icon-button");
D({
  tagName: lu,
  elementClass: Le,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  },
  displayName: "SlIconButton"
});
var cu = L`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`, K = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new Je(this, "help-text", "label"), this.localize = new de(this), this.hasFocus = !1, this.title = "", this.__numberInput = Object.assign(document.createElement("input"), { type: "number" }), this.__dateInput = Object.assign(document.createElement("input"), { type: "date" }), this.type = "text", this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.filled = !1, this.pill = !1, this.label = "", this.helpText = "", this.clearable = !1, this.disabled = !1, this.placeholder = "", this.readonly = !1, this.passwordToggle = !1, this.passwordVisible = !1, this.noSpinButtons = !1, this.form = "", this.required = !1, this.spellcheck = !0;
  }
  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //
  /**
   * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
   */
  get valueAsDate() {
    var e;
    return this.__dateInput.type = this.type, this.__dateInput.value = this.value, ((e = this.input) == null ? void 0 : e.valueAsDate) || this.__dateInput.valueAsDate;
  }
  set valueAsDate(e) {
    this.__dateInput.type = this.type, this.__dateInput.valueAsDate = e, this.value = this.__dateInput.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var e;
    return this.__numberInput.value = this.value, ((e = this.input) == null ? void 0 : e.valueAsNumber) || this.__numberInput.valueAsNumber;
  }
  set valueAsNumber(e) {
    this.__numberInput.valueAsNumber = e, this.value = this.__numberInput.value;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value, this.emit("sl-change");
  }
  handleClearClick(e) {
    this.value = "", this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change"), this.input.focus(), e.stopPropagation();
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value, this.formControlController.updateValidity(), this.emit("sl-input");
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleKeyDown(e) {
    const t = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
    e.key === "Enter" && !t && setTimeout(() => {
      !e.defaultPrevented && !e.isComposing && this.formControlController.submit();
    });
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step), this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete, this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(e) {
    this.input.focus(e);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(e, t, r = "none") {
    this.input.setSelectionRange(e, t, r);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(e, t, r, o = "preserve") {
    const s = t ?? this.input.selectionStart, i = r ?? this.input.selectionEnd;
    this.input.setRangeText(e, s, i, o), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    "showPicker" in HTMLInputElement.prototype && this.input.showPicker();
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp(), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown(), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.input.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), r = this.label ? !0 : !!e, o = this.helpText ? !0 : !!t, s = this.clearable && !this.disabled && !this.readonly, i = s && (typeof this.value == "number" || this.value.length > 0);
    return C`
      <div
        part="form-control"
        class=${H({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": r,
      "form-control--has-help-text": o
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({
      input: !0,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${P(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${P(this.placeholder)}
              minlength=${P(this.minlength)}
              maxlength=${P(this.maxlength)}
              min=${P(this.min)}
              max=${P(this.max)}
              step=${P(this.step)}
              .value=${lr(this.value)}
              autocapitalize=${P(this.autocapitalize)}
              autocomplete=${P(this.autocomplete)}
              autocorrect=${P(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${P(this.pattern)}
              enterkeyhint=${P(this.enterkeyhint)}
              inputmode=${P(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s ? C`
                  <button
                    part="clear-button"
                    class=${H({
      input__clear: !0,
      "input__clear--visible": i
    })}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? C`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? C`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : C`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
K.styles = [F, Dr, cu];
K.dependencies = { "sl-icon": xe };
a([
  A(".input__control")
], K.prototype, "input", 2);
a([
  U()
], K.prototype, "hasFocus", 2);
a([
  u()
], K.prototype, "title", 2);
a([
  u({ reflect: !0 })
], K.prototype, "type", 2);
a([
  u()
], K.prototype, "name", 2);
a([
  u()
], K.prototype, "value", 2);
a([
  ur()
], K.prototype, "defaultValue", 2);
a([
  u({ reflect: !0 })
], K.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], K.prototype, "filled", 2);
a([
  u({ type: Boolean, reflect: !0 })
], K.prototype, "pill", 2);
a([
  u()
], K.prototype, "label", 2);
a([
  u({ attribute: "help-text" })
], K.prototype, "helpText", 2);
a([
  u({ type: Boolean })
], K.prototype, "clearable", 2);
a([
  u({ type: Boolean, reflect: !0 })
], K.prototype, "disabled", 2);
a([
  u()
], K.prototype, "placeholder", 2);
a([
  u({ type: Boolean, reflect: !0 })
], K.prototype, "readonly", 2);
a([
  u({ attribute: "password-toggle", type: Boolean })
], K.prototype, "passwordToggle", 2);
a([
  u({ attribute: "password-visible", type: Boolean })
], K.prototype, "passwordVisible", 2);
a([
  u({ attribute: "no-spin-buttons", type: Boolean })
], K.prototype, "noSpinButtons", 2);
a([
  u({ reflect: !0 })
], K.prototype, "form", 2);
a([
  u({ type: Boolean, reflect: !0 })
], K.prototype, "required", 2);
a([
  u()
], K.prototype, "pattern", 2);
a([
  u({ type: Number })
], K.prototype, "minlength", 2);
a([
  u({ type: Number })
], K.prototype, "maxlength", 2);
a([
  u()
], K.prototype, "min", 2);
a([
  u()
], K.prototype, "max", 2);
a([
  u()
], K.prototype, "step", 2);
a([
  u()
], K.prototype, "autocapitalize", 2);
a([
  u()
], K.prototype, "autocorrect", 2);
a([
  u()
], K.prototype, "autocomplete", 2);
a([
  u({ type: Boolean })
], K.prototype, "autofocus", 2);
a([
  u()
], K.prototype, "enterkeyhint", 2);
a([
  u({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (e) => !(!e || e === "false"),
      toAttribute: (e) => e ? "true" : "false"
    }
  })
], K.prototype, "spellcheck", 2);
a([
  u()
], K.prototype, "inputmode", 2);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], K.prototype, "handleDisabledChange", 1);
a([
  E("step", { waitUntilFirstUpdate: !0 })
], K.prototype, "handleStepChange", 1);
a([
  E("value", { waitUntilFirstUpdate: !0 })
], K.prototype, "handleValueChange", 1);
var du = "sl-input";
K.define("sl-input");
var uu = D({
  tagName: du,
  elementClass: K,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlClear: "sl-clear",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlInput"
}), hu = uu, pu = L`
  :host {
    display: block;
  }
`, xs = /* @__PURE__ */ new Map();
function fu(e, t = "cors") {
  const r = xs.get(e);
  if (r !== void 0)
    return Promise.resolve(r);
  const o = fetch(e, { mode: t }).then(async (s) => {
    const i = {
      ok: s.ok,
      status: s.status,
      html: await s.text()
    };
    return xs.set(e, i), i;
  });
  return xs.set(e, o), o;
}
var pr = class extends R {
  constructor() {
    super(...arguments), this.mode = "cors", this.allowScripts = !1;
  }
  executeScript(e) {
    const t = document.createElement("script");
    [...e.attributes].forEach((r) => t.setAttribute(r.name, r.value)), t.textContent = e.textContent, e.parentNode.replaceChild(t, e);
  }
  async handleSrcChange() {
    try {
      const e = this.src, t = await fu(e, this.mode);
      if (e !== this.src)
        return;
      if (!t.ok) {
        this.emit("sl-error", { detail: { status: t.status } });
        return;
      }
      this.innerHTML = t.html, this.allowScripts && [...this.querySelectorAll("script")].forEach((r) => this.executeScript(r)), this.emit("sl-load");
    } catch {
      this.emit("sl-error", { detail: { status: -1 } });
    }
  }
  render() {
    return C`<slot></slot>`;
  }
};
pr.styles = [F, pu];
a([
  u()
], pr.prototype, "src", 2);
a([
  u()
], pr.prototype, "mode", 2);
a([
  u({ attribute: "allow-scripts", type: Boolean })
], pr.prototype, "allowScripts", 2);
a([
  E("src")
], pr.prototype, "handleSrcChange", 1);
var mu = "sl-include";
pr.define("sl-include");
D({
  tagName: mu,
  elementClass: pr,
  react: I,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  },
  displayName: "SlInclude"
});
var gu = L`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`, er = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.position = 50;
  }
  handleDrag(e) {
    const { width: t } = this.base.getBoundingClientRect(), r = this.localize.dir() === "rtl";
    e.preventDefault(), no(this.base, {
      onMove: (o) => {
        this.position = parseFloat(Pe(o / t * 100, 0, 100).toFixed(2)), r && (this.position = 100 - this.position);
      },
      initialEvent: e
    });
  }
  handleKeyDown(e) {
    const t = this.localize.dir() === "ltr", r = this.localize.dir() === "rtl";
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
      const o = e.shiftKey ? 10 : 1;
      let s = this.position;
      e.preventDefault(), (t && e.key === "ArrowLeft" || r && e.key === "ArrowRight") && (s -= o), (t && e.key === "ArrowRight" || r && e.key === "ArrowLeft") && (s += o), e.key === "Home" && (s = 0), e.key === "End" && (s = 100), s = Pe(s, 0, 100), this.position = s;
    }
  }
  handlePositionChange() {
    this.emit("sl-change");
  }
  render() {
    const e = this.localize.dir() === "rtl";
    return C`
      <div
        part="base"
        id="image-comparer"
        class=${H({
      "image-comparer": !0,
      "image-comparer--rtl": e
    })}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Ze({
      clipPath: e ? `inset(0 0 0 ${100 - this.position}%)` : `inset(0 ${100 - this.position}% 0 0)`
    })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Ze({
      left: e ? `${100 - this.position}%` : `${this.position}%`
    })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
};
er.styles = [F, gu];
er.scopedElement = { "sl-icon": xe };
a([
  A(".image-comparer")
], er.prototype, "base", 2);
a([
  A(".image-comparer__handle")
], er.prototype, "handle", 2);
a([
  u({ type: Number, reflect: !0 })
], er.prototype, "position", 2);
a([
  E("position", { waitUntilFirstUpdate: !0 })
], er.prototype, "handlePositionChange", 1);
var bu = "sl-image-comparer";
er.define("sl-image-comparer");
D({
  tagName: bu,
  elementClass: er,
  react: I,
  events: {
    onSlChange: "sl-change"
  },
  displayName: "SlImageComparer"
});
var vu = L`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`, os = class extends R {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "menu");
  }
  handleClick(e) {
    const t = ["menuitem", "menuitemcheckbox"], r = e.composedPath().find((s) => {
      var i;
      return t.includes(((i = s == null ? void 0 : s.getAttribute) == null ? void 0 : i.call(s, "role")) || "");
    });
    if (!r)
      return;
    const o = r;
    o.type === "checkbox" && (o.checked = !o.checked), this.emit("sl-select", { detail: { item: o } });
  }
  handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      const t = this.getCurrentItem();
      e.preventDefault(), e.stopPropagation(), t == null || t.click();
    } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
      const t = this.getAllItems(), r = this.getCurrentItem();
      let o = r ? t.indexOf(r) : 0;
      t.length > 0 && (e.preventDefault(), e.stopPropagation(), e.key === "ArrowDown" ? o++ : e.key === "ArrowUp" ? o-- : e.key === "Home" ? o = 0 : e.key === "End" && (o = t.length - 1), o < 0 && (o = t.length - 1), o > t.length - 1 && (o = 0), this.setCurrentItem(t[o]), t[o].focus());
    }
  }
  handleMouseDown(e) {
    const t = e.target;
    this.isMenuItem(t) && this.setCurrentItem(t);
  }
  handleSlotChange() {
    const e = this.getAllItems();
    e.length > 0 && this.setCurrentItem(e[0]);
  }
  isMenuItem(e) {
    var t;
    return e.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((t = e.getAttribute("role")) != null ? t : "");
  }
  /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: !0 })].filter((e) => !(e.inert || !this.isMenuItem(e)));
  }
  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find((e) => e.getAttribute("tabindex") === "0");
  }
  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(e) {
    this.getAllItems().forEach((r) => {
      r.setAttribute("tabindex", r === e ? "0" : "-1");
    });
  }
  render() {
    return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
};
os.styles = [F, vu];
a([
  A("slot")
], os.prototype, "defaultSlot", 2);
var yu = "sl-menu";
os.define("sl-menu");
var wu = D({
  tagName: yu,
  elementClass: os,
  react: I,
  events: {
    onSlSelect: "sl-select"
  },
  displayName: "SlMenu"
}), xu = wu, _u = L`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ao = (e, t) => {
  var o;
  const r = e._$AN;
  if (r === void 0)
    return !1;
  for (const s of r)
    (o = s._$AO) == null || o.call(s, t, !1), ao(s, t);
  return !0;
}, Wo = (e) => {
  let t, r;
  do {
    if ((t = e._$AM) === void 0)
      break;
    r = t._$AN, r.delete(e), e = t;
  } while ((r == null ? void 0 : r.size) === 0);
}, $a = (e) => {
  for (let t; t = e._$AM; e = t) {
    let r = t._$AN;
    if (r === void 0)
      t._$AN = r = /* @__PURE__ */ new Set();
    else if (r.has(e))
      break;
    r.add(e), Su(t);
  }
};
function ku(e) {
  this._$AN !== void 0 ? (Wo(this), this._$AM = e, $a(this)) : this._$AM = e;
}
function Cu(e, t = !1, r = 0) {
  const o = this._$AH, s = this._$AN;
  if (s !== void 0 && s.size !== 0)
    if (t)
      if (Array.isArray(o))
        for (let i = r; i < o.length; i++)
          ao(o[i], !1), Wo(o[i]);
      else
        o != null && (ao(o, !1), Wo(o));
    else
      ao(this, e);
}
const Su = (e) => {
  e.type == zt.CHILD && (e._$AP ?? (e._$AP = Cu), e._$AQ ?? (e._$AQ = ku));
};
let $u = class extends go {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, r, o) {
    super._$AT(t, r, o), $a(this), this.isConnected = t._$AU;
  }
  _$AO(t, r = !0) {
    var o, s;
    t !== this.isConnected && (this.isConnected = t, t ? (o = this.reconnected) == null || o.call(this) : (s = this.disconnected) == null || s.call(this)), r && (ao(this, t), Wo(this));
  }
  setValue(t) {
    if (ia(this._$Ct))
      this._$Ct._$AI(t, this);
    else {
      const r = [...this._$Ct._$AH];
      r[this._$Ci] = t, this._$Ct._$AI(r, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Eu = () => new zu();
class zu {
}
const _s = /* @__PURE__ */ new WeakMap(), Au = mo(class extends $u {
  render(e) {
    return Se;
  }
  update(e, [t]) {
    var o;
    const r = t !== this.Y;
    return r && this.Y !== void 0 && this.rt(void 0), (r || this.lt !== this.ct) && (this.Y = t, this.ht = (o = e.options) == null ? void 0 : o.host, this.rt(this.ct = e.element)), Se;
  }
  rt(e) {
    if (typeof this.Y == "function") {
      const t = this.ht ?? globalThis;
      let r = _s.get(t);
      r === void 0 && (r = /* @__PURE__ */ new WeakMap(), _s.set(t, r)), r.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), r.set(this.Y, e), e !== void 0 && this.Y.call(this.ht, e);
    } else
      this.Y.value = e;
  }
  get lt() {
    var e, t;
    return typeof this.Y == "function" ? (e = _s.get(this.ht ?? globalThis)) == null ? void 0 : e.get(this.Y) : (t = this.Y) == null ? void 0 : t.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
var Tu = class {
  constructor(e, t, r) {
    this.popupRef = Eu(), this.enableSubmenuTimer = -1, this.isConnected = !1, this.isPopupConnected = !1, this.skidding = 0, this.submenuOpenDelay = 100, this.handleMouseMove = (o) => {
      this.host.style.setProperty("--safe-triangle-cursor-x", `${o.clientX}px`), this.host.style.setProperty("--safe-triangle-cursor-y", `${o.clientY}px`);
    }, this.handleMouseOver = () => {
      this.hasSlotController.test("submenu") && this.enableSubmenu();
    }, this.handleKeyDown = (o) => {
      switch (o.key) {
        case "Escape":
        case "Tab":
          this.disableSubmenu();
          break;
        case "ArrowLeft":
          o.target !== this.host && (o.preventDefault(), o.stopPropagation(), this.host.focus(), this.disableSubmenu());
          break;
        case "ArrowRight":
        case "Enter":
        case " ":
          this.handleSubmenuEntry(o);
          break;
      }
    }, this.handleClick = (o) => {
      var s;
      o.target === this.host ? (o.preventDefault(), o.stopPropagation()) : o.target instanceof Element && (o.target.tagName === "sl-menu-item" || (s = o.target.role) != null && s.startsWith("menuitem")) && this.disableSubmenu();
    }, this.handleFocusOut = (o) => {
      o.relatedTarget && o.relatedTarget instanceof Element && this.host.contains(o.relatedTarget) || this.disableSubmenu();
    }, this.handlePopupMouseover = (o) => {
      o.stopPropagation();
    }, this.handlePopupReposition = () => {
      const o = this.host.renderRoot.querySelector("slot[name='submenu']"), s = o == null ? void 0 : o.assignedElements({ flatten: !0 }).filter((f) => f.localName === "sl-menu")[0], i = this.localize.dir() === "rtl";
      if (!s)
        return;
      const { left: n, top: c, width: l, height: d } = s.getBoundingClientRect();
      this.host.style.setProperty("--safe-triangle-submenu-start-x", `${i ? n + l : n}px`), this.host.style.setProperty("--safe-triangle-submenu-start-y", `${c}px`), this.host.style.setProperty("--safe-triangle-submenu-end-x", `${i ? n + l : n}px`), this.host.style.setProperty("--safe-triangle-submenu-end-y", `${c + d}px`);
    }, (this.host = e).addController(this), this.hasSlotController = t, this.localize = r;
  }
  hostConnected() {
    this.hasSlotController.test("submenu") && !this.host.disabled && this.addListeners();
  }
  hostDisconnected() {
    this.removeListeners();
  }
  hostUpdated() {
    this.hasSlotController.test("submenu") && !this.host.disabled ? (this.addListeners(), this.updateSkidding()) : this.removeListeners();
  }
  addListeners() {
    this.isConnected || (this.host.addEventListener("mousemove", this.handleMouseMove), this.host.addEventListener("mouseover", this.handleMouseOver), this.host.addEventListener("keydown", this.handleKeyDown), this.host.addEventListener("click", this.handleClick), this.host.addEventListener("focusout", this.handleFocusOut), this.isConnected = !0), this.isPopupConnected || this.popupRef.value && (this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover), this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition), this.isPopupConnected = !0);
  }
  removeListeners() {
    this.isConnected && (this.host.removeEventListener("mousemove", this.handleMouseMove), this.host.removeEventListener("mouseover", this.handleMouseOver), this.host.removeEventListener("keydown", this.handleKeyDown), this.host.removeEventListener("click", this.handleClick), this.host.removeEventListener("focusout", this.handleFocusOut), this.isConnected = !1), this.isPopupConnected && this.popupRef.value && (this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover), this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition), this.isPopupConnected = !1);
  }
  handleSubmenuEntry(e) {
    const t = this.host.renderRoot.querySelector("slot[name='submenu']");
    if (!t) {
      console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
      return;
    }
    let r = null;
    for (const o of t.assignedElements())
      if (r = o.querySelectorAll("sl-menu-item, [role^='menuitem']"), r.length !== 0)
        break;
    if (!(!r || r.length === 0)) {
      r[0].setAttribute("tabindex", "0");
      for (let o = 1; o !== r.length; ++o)
        r[o].setAttribute("tabindex", "-1");
      this.popupRef.value && (e.preventDefault(), e.stopPropagation(), this.popupRef.value.active ? r[0] instanceof HTMLElement && r[0].focus() : (this.enableSubmenu(!1), this.host.updateComplete.then(() => {
        r[0] instanceof HTMLElement && r[0].focus();
      }), this.host.requestUpdate()));
    }
  }
  setSubmenuState(e) {
    this.popupRef.value && this.popupRef.value.active !== e && (this.popupRef.value.active = e, this.host.requestUpdate());
  }
  // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
  // newly opened menu.
  enableSubmenu(e = !0) {
    e ? this.enableSubmenuTimer = window.setTimeout(() => {
      this.setSubmenuState(!0);
    }, this.submenuOpenDelay) : this.setSubmenuState(!0);
  }
  disableSubmenu() {
    clearTimeout(this.enableSubmenuTimer), this.setSubmenuState(!1);
  }
  // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
  updateSkidding() {
    var e;
    if (!((e = this.host.parentElement) != null && e.computedStyleMap))
      return;
    const t = this.host.parentElement.computedStyleMap(), o = ["padding-top", "border-top-width", "margin-top"].reduce((s, i) => {
      var n;
      const c = (n = t.get(i)) != null ? n : new CSSUnitValue(0, "px"), d = (c instanceof CSSUnitValue ? c : new CSSUnitValue(0, "px")).to("px");
      return s - d.value;
    }, 0);
    this.skidding = o;
  }
  isExpanded() {
    return this.popupRef.value ? this.popupRef.value.active : !1;
  }
  renderSubmenu() {
    const e = this.localize.dir() === "ltr";
    return this.isConnected ? C`
      <sl-popup
        ${Au(this.popupRef)}
        placement=${e ? "right-start" : "left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    ` : C` <slot name="submenu" hidden></slot> `;
  }
}, tt = class extends R {
  constructor() {
    super(...arguments), this.type = "normal", this.checked = !1, this.value = "", this.loading = !1, this.disabled = !1, this.localize = new de(this), this.hasSlotController = new Je(this, "submenu"), this.submenuController = new Tu(this, this.hasSlotController, this.localize), this.handleHostClick = (e) => {
      this.disabled && (e.preventDefault(), e.stopImmediatePropagation());
    }, this.handleMouseOver = (e) => {
      this.focus(), e.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this.handleHostClick), this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("click", this.handleHostClick), this.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleDefaultSlotChange() {
    const e = this.getTextLabel();
    if (typeof this.cachedTextLabel > "u") {
      this.cachedTextLabel = e;
      return;
    }
    e !== this.cachedTextLabel && (this.cachedTextLabel = e, this.emit("slotchange", { bubbles: !0, composed: !1, cancelable: !1 }));
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = !1, console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    this.type === "checkbox" ? this.setAttribute("aria-checked", this.checked ? "true" : "false") : this.removeAttribute("aria-checked");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    this.type === "checkbox" ? (this.setAttribute("role", "menuitemcheckbox"), this.setAttribute("aria-checked", this.checked ? "true" : "false")) : (this.setAttribute("role", "menuitem"), this.removeAttribute("aria-checked"));
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return rc(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const e = this.localize.dir() === "rtl", t = this.submenuController.isExpanded();
    return C`
      <div
        id="anchor"
        part="base"
        class=${H({
      "menu-item": !0,
      "menu-item--rtl": e,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": t
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
  }
};
tt.styles = [F, _u];
tt.dependencies = {
  "sl-icon": xe,
  "sl-popup": ue,
  "sl-spinner": Mr
};
a([
  A("slot:not([name])")
], tt.prototype, "defaultSlot", 2);
a([
  A(".menu-item")
], tt.prototype, "menuItem", 2);
a([
  u()
], tt.prototype, "type", 2);
a([
  u({ type: Boolean, reflect: !0 })
], tt.prototype, "checked", 2);
a([
  u()
], tt.prototype, "value", 2);
a([
  u({ type: Boolean, reflect: !0 })
], tt.prototype, "loading", 2);
a([
  u({ type: Boolean, reflect: !0 })
], tt.prototype, "disabled", 2);
a([
  E("checked")
], tt.prototype, "handleCheckedChange", 1);
a([
  E("disabled")
], tt.prototype, "handleDisabledChange", 1);
a([
  E("type")
], tt.prototype, "handleTypeChange", 1);
var Ou = "sl-menu-item";
tt.define("sl-menu-item");
var Nu = D({
  tagName: Ou,
  elementClass: tt,
  react: I,
  events: {},
  displayName: "SlMenuItem"
}), Xe = Nu, Iu = L`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`, fi = class extends R {
  render() {
    return C` <slot part="base" class="menu-label"></slot> `;
  }
};
fi.styles = [F, Iu];
var Ru = "sl-menu-label";
fi.define("sl-menu-label");
var Pu = D({
  tagName: Ru,
  elementClass: fi,
  react: I,
  events: {},
  displayName: "SlMenuLabel"
}), ks = Pu, Mu = L`
  :host {
    display: contents;
  }
`, Ct = class extends R {
  constructor() {
    super(...arguments), this.attrOldValue = !1, this.charData = !1, this.charDataOldValue = !1, this.childList = !1, this.disabled = !1, this.handleMutation = (e) => {
      this.emit("sl-mutation", {
        detail: { mutationList: e }
      });
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.mutationObserver = new MutationObserver(this.handleMutation), this.disabled || this.startObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stopObserver();
  }
  startObserver() {
    const e = typeof this.attr == "string" && this.attr.length > 0, t = e && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: !0,
        childList: this.childList,
        attributes: e,
        attributeFilter: t,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    this.disabled ? this.stopObserver() : this.startObserver();
  }
  handleChange() {
    this.stopObserver(), this.startObserver();
  }
  render() {
    return C` <slot></slot> `;
  }
};
Ct.styles = [F, Mu];
a([
  u({ reflect: !0 })
], Ct.prototype, "attr", 2);
a([
  u({ attribute: "attr-old-value", type: Boolean, reflect: !0 })
], Ct.prototype, "attrOldValue", 2);
a([
  u({ attribute: "char-data", type: Boolean, reflect: !0 })
], Ct.prototype, "charData", 2);
a([
  u({ attribute: "char-data-old-value", type: Boolean, reflect: !0 })
], Ct.prototype, "charDataOldValue", 2);
a([
  u({ attribute: "child-list", type: Boolean, reflect: !0 })
], Ct.prototype, "childList", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ct.prototype, "disabled", 2);
a([
  E("disabled")
], Ct.prototype, "handleDisabledChange", 1);
a([
  E("attr", { waitUntilFirstUpdate: !0 }),
  E("attr-old-value", { waitUntilFirstUpdate: !0 }),
  E("char-data", { waitUntilFirstUpdate: !0 }),
  E("char-data-old-value", { waitUntilFirstUpdate: !0 }),
  E("childList", { waitUntilFirstUpdate: !0 })
], Ct.prototype, "handleChange", 1);
var Du = "sl-mutation-observer";
Ct.define("sl-mutation-observer");
D({
  tagName: Du,
  elementClass: Ct,
  react: I,
  events: {
    onSlMutation: "sl-mutation"
  },
  displayName: "SlMutationObserver"
});
var Lu = L`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`, gt = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.open = !1, this.disabled = !1;
  }
  firstUpdated() {
    this.body.style.height = this.open ? "auto" : "0", this.open && (this.details.open = !0), this.detailsObserver = new MutationObserver((e) => {
      for (const t of e)
        t.type === "attributes" && t.attributeName === "open" && (this.details.open ? this.show() : this.hide());
    }), this.detailsObserver.observe(this.details, { attributes: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.detailsObserver.disconnect();
  }
  handleSummaryClick(e) {
    e.preventDefault(), this.disabled || (this.open ? this.hide() : this.show(), this.header.focus());
  }
  handleSummaryKeyDown(e) {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.open ? this.hide() : this.show()), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (e.preventDefault(), this.hide()), (e.key === "ArrowDown" || e.key === "ArrowRight") && (e.preventDefault(), this.show());
  }
  async handleOpenChange() {
    if (this.open) {
      if (this.details.open = !0, this.emit("sl-show", { cancelable: !0 }).defaultPrevented) {
        this.open = !1, this.details.open = !1;
        return;
      }
      await Me(this.body);
      const { keyframes: t, options: r } = $e(this, "details.show", { dir: this.localize.dir() });
      await Ne(this.body, Vo(t, this.body.scrollHeight), r), this.body.style.height = "auto", this.emit("sl-after-show");
    } else {
      if (this.emit("sl-hide", { cancelable: !0 }).defaultPrevented) {
        this.details.open = !0, this.open = !0;
        return;
      }
      await Me(this.body);
      const { keyframes: t, options: r } = $e(this, "details.hide", { dir: this.localize.dir() });
      await Ne(this.body, Vo(t, this.body.scrollHeight), r), this.body.style.height = "auto", this.details.open = !1, this.emit("sl-after-hide");
    }
  }
  /** Shows the details. */
  async show() {
    if (!(this.open || this.disabled))
      return this.open = !0, Ge(this, "sl-after-show");
  }
  /** Hides the details */
  async hide() {
    if (!(!this.open || this.disabled))
      return this.open = !1, Ge(this, "sl-after-hide");
  }
  render() {
    const e = this.localize.dir() === "rtl";
    return C`
      <details
        part="base"
        class=${H({
      details: !0,
      "details--open": this.open,
      "details--disabled": this.disabled,
      "details--rtl": e
    })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
  }
};
gt.styles = [F, Lu];
gt.dependencies = {
  "sl-icon": xe
};
a([
  A(".details")
], gt.prototype, "details", 2);
a([
  A(".details__header")
], gt.prototype, "header", 2);
a([
  A(".details__body")
], gt.prototype, "body", 2);
a([
  A(".details__expand-icon-slot")
], gt.prototype, "expandIconSlot", 2);
a([
  u({ type: Boolean, reflect: !0 })
], gt.prototype, "open", 2);
a([
  u()
], gt.prototype, "summary", 2);
a([
  u({ type: Boolean, reflect: !0 })
], gt.prototype, "disabled", 2);
a([
  E("open", { waitUntilFirstUpdate: !0 })
], gt.prototype, "handleOpenChange", 1);
be("details.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
be("details.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});
var Bu = "sl-details";
gt.define("sl-details");
D({
  tagName: Bu,
  elementClass: gt,
  react: I,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlDetails"
});
var Vu = L`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`, an = /* @__PURE__ */ new WeakMap();
function Ea(e) {
  let t = an.get(e);
  return t || (t = window.getComputedStyle(e, null), an.set(e, t)), t;
}
function Fu(e) {
  if (typeof e.checkVisibility == "function")
    return e.checkVisibility({ checkOpacity: !1, checkVisibilityCSS: !0 });
  const t = Ea(e);
  return t.visibility !== "hidden" && t.display !== "none";
}
function Hu(e) {
  const t = Ea(e), { overflowY: r, overflowX: o } = t;
  return r === "scroll" || o === "scroll" ? !0 : r !== "auto" || o !== "auto" ? !1 : e.scrollHeight > e.clientHeight && r === "auto" || e.scrollWidth > e.clientWidth && o === "auto";
}
function Uu(e) {
  const t = e.tagName.toLowerCase(), r = Number(e.getAttribute("tabindex"));
  return e.hasAttribute("tabindex") && (isNaN(r) || r <= -1) || e.hasAttribute("disabled") || e.closest("[inert]") || t === "input" && e.getAttribute("type") === "radio" && !e.hasAttribute("checked") || !Fu(e) ? !1 : (t === "audio" || t === "video") && e.hasAttribute("controls") || e.hasAttribute("tabindex") || e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false" || [
    "button",
    "input",
    "select",
    "textarea",
    "a",
    "audio",
    "video",
    "summary",
    "iframe"
  ].includes(t) ? !0 : Hu(e);
}
function ju(e) {
  var t, r;
  const o = Js(e), s = (t = o[0]) != null ? t : null, i = (r = o[o.length - 1]) != null ? r : null;
  return { start: s, end: i };
}
function Wu(e, t) {
  var r;
  return ((r = e.getRootNode({ composed: !0 })) == null ? void 0 : r.host) !== t;
}
function Js(e) {
  const t = /* @__PURE__ */ new WeakMap(), r = [];
  function o(s) {
    if (s instanceof Element) {
      if (s.hasAttribute("inert") || s.closest("[inert]") || t.has(s))
        return;
      t.set(s, !0), !r.includes(s) && Uu(s) && r.push(s), s instanceof HTMLSlotElement && Wu(s, e) && s.assignedElements({ flatten: !0 }).forEach((i) => {
        o(i);
      }), s.shadowRoot !== null && s.shadowRoot.mode === "open" && o(s.shadowRoot);
    }
    for (const i of s.children)
      o(i);
  }
  return o(e), r.sort((s, i) => {
    const n = Number(s.getAttribute("tabindex")) || 0;
    return (Number(i.getAttribute("tabindex")) || 0) - n;
  });
}
function* mi(e = document.activeElement) {
  e != null && (yield e, "shadowRoot" in e && e.shadowRoot && e.shadowRoot.mode !== "closed" && (yield* Sl(mi(e.shadowRoot.activeElement))));
}
function qu() {
  return [...mi()].pop();
}
var Jr = [], za = class {
  constructor(e) {
    this.tabDirection = "forward", this.handleFocusIn = () => {
      this.isActive() && this.checkFocus();
    }, this.handleKeyDown = (t) => {
      var r;
      if (t.key !== "Tab" || this.isExternalActivated || !this.isActive())
        return;
      const o = qu();
      if (this.previousFocus = o, this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus))
        return;
      t.shiftKey ? this.tabDirection = "backward" : this.tabDirection = "forward";
      const s = Js(this.element);
      let i = s.findIndex((c) => c === o);
      this.previousFocus = this.currentFocus;
      const n = this.tabDirection === "forward" ? 1 : -1;
      for (; ; ) {
        i + n >= s.length ? i = 0 : i + n < 0 ? i = s.length - 1 : i += n, this.previousFocus = this.currentFocus;
        const c = (
          /** @type {HTMLElement} */
          s[i]
        );
        if (this.tabDirection === "backward" && this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus) || c && this.possiblyHasTabbableChildren(c))
          return;
        t.preventDefault(), this.currentFocus = c, (r = this.currentFocus) == null || r.focus({ preventScroll: !1 });
        const l = [...mi()];
        if (l.includes(this.currentFocus) || !l.includes(this.previousFocus))
          break;
      }
      setTimeout(() => this.checkFocus());
    }, this.handleKeyUp = () => {
      this.tabDirection = "forward";
    }, this.element = e, this.elementsWithTabbableControls = ["iframe"];
  }
  /** Activates focus trapping. */
  activate() {
    Jr.push(this.element), document.addEventListener("focusin", this.handleFocusIn), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  /** Deactivates focus trapping. */
  deactivate() {
    Jr = Jr.filter((e) => e !== this.element), this.currentFocus = null, document.removeEventListener("focusin", this.handleFocusIn), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
  }
  /** Determines if this modal element is currently active or not. */
  isActive() {
    return Jr[Jr.length - 1] === this.element;
  }
  /** Activates external modal behavior and temporarily disables focus trapping. */
  activateExternal() {
    this.isExternalActivated = !0;
  }
  /** Deactivates external modal behavior and re-enables focus trapping. */
  deactivateExternal() {
    this.isExternalActivated = !1;
  }
  checkFocus() {
    if (this.isActive() && !this.isExternalActivated) {
      const e = Js(this.element);
      if (!this.element.matches(":focus-within")) {
        const t = e[0], r = e[e.length - 1], o = this.tabDirection === "forward" ? t : r;
        typeof (o == null ? void 0 : o.focus) == "function" && (this.currentFocus = o, o.focus({ preventScroll: !1 }));
      }
    }
  }
  possiblyHasTabbableChildren(e) {
    return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase()) || e.hasAttribute("controls");
  }
};
function ln(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var rt = class extends R {
  constructor() {
    super(...arguments), this.hasSlotController = new Je(this, "footer"), this.localize = new de(this), this.modal = new za(this), this.open = !1, this.label = "", this.placement = "end", this.contained = !1, this.noHeader = !1, this.handleDocumentKeyDown = (e) => {
      this.contained || e.key === "Escape" && this.modal.isActive() && this.open && (e.stopImmediatePropagation(), this.requestClose("keyboard"));
    };
  }
  firstUpdated() {
    this.drawer.hidden = !this.open, this.open && (this.addOpenListeners(), this.contained || (this.modal.activate(), so(this)));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), io(this), (e = this.closeWatcher) == null || e.destroy();
  }
  requestClose(e) {
    if (this.emit("sl-request-close", {
      cancelable: !0,
      detail: { source: e }
    }).defaultPrevented) {
      const r = $e(this, "drawer.denyClose", { dir: this.localize.dir() });
      Ne(this.panel, r.keyframes, r.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var e;
    "CloseWatcher" in window ? ((e = this.closeWatcher) == null || e.destroy(), this.contained || (this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => this.requestClose("keyboard"))) : document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    var e;
    document.removeEventListener("keydown", this.handleDocumentKeyDown), (e = this.closeWatcher) == null || e.destroy();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show"), this.addOpenListeners(), this.originalTrigger = document.activeElement, this.contained || (this.modal.activate(), so(this));
      const e = this.querySelector("[autofocus]");
      e && e.removeAttribute("autofocus"), await Promise.all([Me(this.drawer), Me(this.overlay)]), this.drawer.hidden = !1, requestAnimationFrame(() => {
        this.emit("sl-initial-focus", { cancelable: !0 }).defaultPrevented || (e ? e.focus({ preventScroll: !0 }) : this.panel.focus({ preventScroll: !0 })), e && e.setAttribute("autofocus", "");
      });
      const t = $e(this, `drawer.show${ln(this.placement)}`, {
        dir: this.localize.dir()
      }), r = $e(this, "drawer.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        Ne(this.panel, t.keyframes, t.options),
        Ne(this.overlay, r.keyframes, r.options)
      ]), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), this.contained || (this.modal.deactivate(), io(this)), await Promise.all([Me(this.drawer), Me(this.overlay)]);
      const e = $e(this, `drawer.hide${ln(this.placement)}`, {
        dir: this.localize.dir()
      }), t = $e(this, "drawer.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        Ne(this.overlay, t.keyframes, t.options).then(() => {
          this.overlay.hidden = !0;
        }),
        Ne(this.panel, e.keyframes, e.options).then(() => {
          this.panel.hidden = !0;
        })
      ]), this.drawer.hidden = !0, this.overlay.hidden = !1, this.panel.hidden = !1;
      const r = this.originalTrigger;
      typeof (r == null ? void 0 : r.focus) == "function" && setTimeout(() => r.focus()), this.emit("sl-after-hide");
    }
  }
  handleNoModalChange() {
    this.open && !this.contained && (this.modal.activate(), so(this)), this.open && this.contained && (this.modal.deactivate(), io(this));
  }
  /** Shows the drawer. */
  async show() {
    if (!this.open)
      return this.open = !0, Ge(this, "sl-after-show");
  }
  /** Hides the drawer */
  async hide() {
    if (this.open)
      return this.open = !1, Ge(this, "sl-after-hide");
  }
  render() {
    return C`
      <div
        part="base"
        class=${H({
      drawer: !0,
      "drawer--open": this.open,
      "drawer--top": this.placement === "top",
      "drawer--end": this.placement === "end",
      "drawer--bottom": this.placement === "bottom",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--rtl": this.localize.dir() === "rtl",
      "drawer--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${P(this.noHeader ? this.label : void 0)}
          aria-labelledby=${P(this.noHeader ? void 0 : "title")}
          tabindex="0"
        >
          ${this.noHeader ? "" : C`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
rt.styles = [F, Vu];
rt.dependencies = { "sl-icon-button": Le };
a([
  A(".drawer")
], rt.prototype, "drawer", 2);
a([
  A(".drawer__panel")
], rt.prototype, "panel", 2);
a([
  A(".drawer__overlay")
], rt.prototype, "overlay", 2);
a([
  u({ type: Boolean, reflect: !0 })
], rt.prototype, "open", 2);
a([
  u({ reflect: !0 })
], rt.prototype, "label", 2);
a([
  u({ reflect: !0 })
], rt.prototype, "placement", 2);
a([
  u({ type: Boolean, reflect: !0 })
], rt.prototype, "contained", 2);
a([
  u({ attribute: "no-header", type: Boolean, reflect: !0 })
], rt.prototype, "noHeader", 2);
a([
  E("open", { waitUntilFirstUpdate: !0 })
], rt.prototype, "handleOpenChange", 1);
a([
  E("contained", { waitUntilFirstUpdate: !0 })
], rt.prototype, "handleNoModalChange", 1);
be("drawer.showTop", {
  keyframes: [
    { opacity: 0, translate: "0 -100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.hideTop", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 -100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.showEnd", {
  keyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.showBottom", {
  keyframes: [
    { opacity: 0, translate: "0 100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.showStart", {
  keyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.hideStart", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
be("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});
be("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
be("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});
var Ku = "sl-drawer";
rt.define("sl-drawer");
D({
  tagName: Ku,
  elementClass: rt,
  react: I,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInitialFocus: "sl-initial-focus",
    onSlRequestClose: "sl-request-close"
  },
  displayName: "SlDrawer"
});
var Yu = L`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`, St = class extends R {
  constructor() {
    super(...arguments), this.hasSlotController = new Je(this, "footer"), this.localize = new de(this), this.modal = new za(this), this.open = !1, this.label = "", this.noHeader = !1, this.handleDocumentKeyDown = (e) => {
      e.key === "Escape" && this.modal.isActive() && this.open && (e.stopPropagation(), this.requestClose("keyboard"));
    };
  }
  firstUpdated() {
    this.dialog.hidden = !this.open, this.open && (this.addOpenListeners(), this.modal.activate(), so(this));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.modal.deactivate(), io(this), (e = this.closeWatcher) == null || e.destroy();
  }
  requestClose(e) {
    if (this.emit("sl-request-close", {
      cancelable: !0,
      detail: { source: e }
    }).defaultPrevented) {
      const r = $e(this, "dialog.denyClose", { dir: this.localize.dir() });
      Ne(this.panel, r.keyframes, r.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var e;
    "CloseWatcher" in window ? ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => this.requestClose("keyboard")) : document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    var e;
    (e = this.closeWatcher) == null || e.destroy(), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show"), this.addOpenListeners(), this.originalTrigger = document.activeElement, this.modal.activate(), so(this);
      const e = this.querySelector("[autofocus]");
      e && e.removeAttribute("autofocus"), await Promise.all([Me(this.dialog), Me(this.overlay)]), this.dialog.hidden = !1, requestAnimationFrame(() => {
        this.emit("sl-initial-focus", { cancelable: !0 }).defaultPrevented || (e ? e.focus({ preventScroll: !0 }) : this.panel.focus({ preventScroll: !0 })), e && e.setAttribute("autofocus", "");
      });
      const t = $e(this, "dialog.show", { dir: this.localize.dir() }), r = $e(this, "dialog.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        Ne(this.panel, t.keyframes, t.options),
        Ne(this.overlay, r.keyframes, r.options)
      ]), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), this.modal.deactivate(), await Promise.all([Me(this.dialog), Me(this.overlay)]);
      const e = $e(this, "dialog.hide", { dir: this.localize.dir() }), t = $e(this, "dialog.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        Ne(this.overlay, t.keyframes, t.options).then(() => {
          this.overlay.hidden = !0;
        }),
        Ne(this.panel, e.keyframes, e.options).then(() => {
          this.panel.hidden = !0;
        })
      ]), this.dialog.hidden = !0, this.overlay.hidden = !1, this.panel.hidden = !1, io(this);
      const r = this.originalTrigger;
      typeof (r == null ? void 0 : r.focus) == "function" && setTimeout(() => r.focus()), this.emit("sl-after-hide");
    }
  }
  /** Shows the dialog. */
  async show() {
    if (!this.open)
      return this.open = !0, Ge(this, "sl-after-show");
  }
  /** Hides the dialog */
  async hide() {
    if (this.open)
      return this.open = !1, Ge(this, "sl-after-hide");
  }
  render() {
    return C`
      <div
        part="base"
        class=${H({
      dialog: !0,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${P(this.noHeader ? this.label : void 0)}
          aria-labelledby=${P(this.noHeader ? void 0 : "title")}
          tabindex="-1"
        >
          ${this.noHeader ? "" : C`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
St.styles = [F, Yu];
St.dependencies = {
  "sl-icon-button": Le
};
a([
  A(".dialog")
], St.prototype, "dialog", 2);
a([
  A(".dialog__panel")
], St.prototype, "panel", 2);
a([
  A(".dialog__overlay")
], St.prototype, "overlay", 2);
a([
  u({ type: Boolean, reflect: !0 })
], St.prototype, "open", 2);
a([
  u({ reflect: !0 })
], St.prototype, "label", 2);
a([
  u({ attribute: "no-header", type: Boolean, reflect: !0 })
], St.prototype, "noHeader", 2);
a([
  E("open", { waitUntilFirstUpdate: !0 })
], St.prototype, "handleOpenChange", 1);
be("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
be("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
be("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});
be("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
be("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});
var Xu = "sl-dialog";
St.define("sl-dialog");
D({
  tagName: Xu,
  elementClass: St,
  react: I,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInitialFocus: "sl-initial-focus",
    onSlRequestClose: "sl-request-close"
  },
  displayName: "SlDialog"
});
var Gu = L`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`, Ke = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.open = !1, this.placement = "bottom-start", this.disabled = !1, this.stayOpenOnSelect = !1, this.distance = 0, this.skidding = 0, this.hoist = !1, this.handleKeyDown = (e) => {
      this.open && e.key === "Escape" && (e.stopPropagation(), this.hide(), this.focusOnTrigger());
    }, this.handleDocumentKeyDown = (e) => {
      var t;
      if (e.key === "Escape" && this.open && !this.closeWatcher) {
        e.stopPropagation(), this.focusOnTrigger(), this.hide();
        return;
      }
      if (e.key === "Tab") {
        if (this.open && ((t = document.activeElement) == null ? void 0 : t.tagName.toLowerCase()) === "sl-menu-item") {
          e.preventDefault(), this.hide(), this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var r, o, s;
          const i = ((r = this.containingElement) == null ? void 0 : r.getRootNode()) instanceof ShadowRoot ? (s = (o = document.activeElement) == null ? void 0 : o.shadowRoot) == null ? void 0 : s.activeElement : document.activeElement;
          (!this.containingElement || (i == null ? void 0 : i.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) && this.hide();
        });
      }
    }, this.handleDocumentMouseDown = (e) => {
      const t = e.composedPath();
      this.containingElement && !t.includes(this.containingElement) && this.hide();
    }, this.handlePanelSelect = (e) => {
      const t = e.target;
      !this.stayOpenOnSelect && t.tagName.toLowerCase() === "sl-menu" && (this.hide(), this.focusOnTrigger());
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.containingElement || (this.containingElement = this);
  }
  firstUpdated() {
    this.panel.hidden = !this.open, this.open && (this.addOpenListeners(), this.popup.active = !0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeOpenListeners(), this.hide();
  }
  focusOnTrigger() {
    const e = this.trigger.assignedElements({ flatten: !0 })[0];
    typeof (e == null ? void 0 : e.focus) == "function" && e.focus();
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: !0 }).find((e) => e.tagName.toLowerCase() === "sl-menu");
  }
  handleTriggerClick() {
    this.open ? this.hide() : (this.show(), this.focusOnTrigger());
  }
  async handleTriggerKeyDown(e) {
    if ([" ", "Enter"].includes(e.key)) {
      e.preventDefault(), this.handleTriggerClick();
      return;
    }
    const t = this.getMenu();
    if (t) {
      const r = t.getAllItems(), o = r[0], s = r[r.length - 1];
      ["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key) && (e.preventDefault(), this.open || (this.show(), await this.updateComplete), r.length > 0 && this.updateComplete.then(() => {
        (e.key === "ArrowDown" || e.key === "Home") && (t.setCurrentItem(o), o.focus()), (e.key === "ArrowUp" || e.key === "End") && (t.setCurrentItem(s), s.focus());
      }));
    }
  }
  handleTriggerKeyUp(e) {
    e.key === " " && e.preventDefault();
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const t = this.trigger.assignedElements({ flatten: !0 }).find((o) => ju(o).start);
    let r;
    if (t) {
      switch (t.tagName.toLowerCase()) {
        case "sl-button":
        case "sl-icon-button":
          r = t.button;
          break;
        default:
          r = t;
      }
      r.setAttribute("aria-haspopup", "true"), r.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  /** Shows the dropdown panel. */
  async show() {
    if (!this.open)
      return this.open = !0, Ge(this, "sl-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (this.open)
      return this.open = !1, Ge(this, "sl-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    var e;
    this.panel.addEventListener("sl-select", this.handlePanelSelect), "CloseWatcher" in window ? ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
      this.hide(), this.focusOnTrigger();
    }) : this.panel.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    var e;
    this.panel && (this.panel.removeEventListener("sl-select", this.handlePanelSelect), this.panel.removeEventListener("keydown", this.handleKeyDown)), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), (e = this.closeWatcher) == null || e.destroy();
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = !1;
      return;
    }
    if (this.updateAccessibleTrigger(), this.open) {
      this.emit("sl-show"), this.addOpenListeners(), await Me(this), this.panel.hidden = !1, this.popup.active = !0;
      const { keyframes: e, options: t } = $e(this, "dropdown.show", { dir: this.localize.dir() });
      await Ne(this.popup.popup, e, t), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await Me(this);
      const { keyframes: e, options: t } = $e(this, "dropdown.hide", { dir: this.localize.dir() });
      await Ne(this.popup.popup, e, t), this.panel.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  render() {
    return C`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${H({
      dropdown: !0,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
  }
};
Ke.styles = [F, Gu];
Ke.dependencies = { "sl-popup": ue };
a([
  A(".dropdown")
], Ke.prototype, "popup", 2);
a([
  A(".dropdown__trigger")
], Ke.prototype, "trigger", 2);
a([
  A(".dropdown__panel")
], Ke.prototype, "panel", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ke.prototype, "open", 2);
a([
  u({ reflect: !0 })
], Ke.prototype, "placement", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ke.prototype, "disabled", 2);
a([
  u({ attribute: "stay-open-on-select", type: Boolean, reflect: !0 })
], Ke.prototype, "stayOpenOnSelect", 2);
a([
  u({ attribute: !1 })
], Ke.prototype, "containingElement", 2);
a([
  u({ type: Number })
], Ke.prototype, "distance", 2);
a([
  u({ type: Number })
], Ke.prototype, "skidding", 2);
a([
  u({ type: Boolean })
], Ke.prototype, "hoist", 2);
a([
  E("open", { waitUntilFirstUpdate: !0 })
], Ke.prototype, "handleOpenChange", 1);
be("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
be("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
var Ju = "sl-dropdown";
Ke.define("sl-dropdown");
D({
  tagName: Ju,
  elementClass: Ke,
  react: I,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlDropdown"
});
var wo = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.value = 0, this.unit = "byte", this.display = "short";
  }
  render() {
    if (isNaN(this.value))
      return "";
    const e = ["", "kilo", "mega", "giga", "tera"], t = ["", "kilo", "mega", "giga", "tera", "peta"], r = this.unit === "bit" ? e : t, o = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), r.length - 1)), s = r[o] + this.unit, i = parseFloat((this.value / Math.pow(1e3, o)).toPrecision(3));
    return this.localize.number(i, {
      style: "unit",
      unit: s,
      unitDisplay: this.display
    });
  }
};
a([
  u({ type: Number })
], wo.prototype, "value", 2);
a([
  u()
], wo.prototype, "unit", 2);
a([
  u()
], wo.prototype, "display", 2);
var Zu = "sl-format-bytes";
wo.define("sl-format-bytes");
D({
  tagName: Zu,
  elementClass: wo,
  react: I,
  events: {},
  displayName: "SlFormatBytes"
});
var ot = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.date = /* @__PURE__ */ new Date(), this.hourFormat = "auto";
  }
  render() {
    const e = new Date(this.date), t = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (!isNaN(e.getMilliseconds()))
      return C`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e, {
        weekday: this.weekday,
        era: this.era,
        year: this.year,
        month: this.month,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        timeZoneName: this.timeZoneName,
        timeZone: this.timeZone,
        hour12: t
      })}
      </time>
    `;
  }
};
a([
  u()
], ot.prototype, "date", 2);
a([
  u()
], ot.prototype, "weekday", 2);
a([
  u()
], ot.prototype, "era", 2);
a([
  u()
], ot.prototype, "year", 2);
a([
  u()
], ot.prototype, "month", 2);
a([
  u()
], ot.prototype, "day", 2);
a([
  u()
], ot.prototype, "hour", 2);
a([
  u()
], ot.prototype, "minute", 2);
a([
  u()
], ot.prototype, "second", 2);
a([
  u({ attribute: "time-zone-name" })
], ot.prototype, "timeZoneName", 2);
a([
  u({ attribute: "time-zone" })
], ot.prototype, "timeZone", 2);
a([
  u({ attribute: "hour-format" })
], ot.prototype, "hourFormat", 2);
var Qu = "sl-format-date";
ot.define("sl-format-date");
D({
  tagName: Qu,
  elementClass: ot,
  react: I,
  events: {},
  displayName: "SlFormatDate"
});
var eh = "sl-icon";
xe.define("sl-icon");
var th = D({
  tagName: eh,
  elementClass: xe,
  react: I,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  },
  displayName: "SlIcon"
}), Ao = th, bt = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.value = 0, this.type = "decimal", this.noGrouping = !1, this.currency = "USD", this.currencyDisplay = "symbol";
  }
  render() {
    return isNaN(this.value) ? "" : this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
a([
  u({ type: Number })
], bt.prototype, "value", 2);
a([
  u()
], bt.prototype, "type", 2);
a([
  u({ attribute: "no-grouping", type: Boolean })
], bt.prototype, "noGrouping", 2);
a([
  u()
], bt.prototype, "currency", 2);
a([
  u({ attribute: "currency-display" })
], bt.prototype, "currencyDisplay", 2);
a([
  u({ attribute: "minimum-integer-digits", type: Number })
], bt.prototype, "minimumIntegerDigits", 2);
a([
  u({ attribute: "minimum-fraction-digits", type: Number })
], bt.prototype, "minimumFractionDigits", 2);
a([
  u({ attribute: "maximum-fraction-digits", type: Number })
], bt.prototype, "maximumFractionDigits", 2);
a([
  u({ attribute: "minimum-significant-digits", type: Number })
], bt.prototype, "minimumSignificantDigits", 2);
a([
  u({ attribute: "maximum-significant-digits", type: Number })
], bt.prototype, "maximumSignificantDigits", 2);
var rh = "sl-format-number";
bt.define("sl-format-number");
D({
  tagName: rh,
  elementClass: bt,
  react: I,
  events: {},
  displayName: "SlFormatNumber"
});
var oh = "sl-button-group";
Qt.define("sl-button-group");
D({
  tagName: oh,
  elementClass: Qt,
  react: I,
  events: {},
  displayName: "SlButtonGroup"
});
var sh = L`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`, gi = class extends R {
  constructor() {
    super(...arguments), this.hasSlotController = new Je(this, "footer", "header", "image");
  }
  render() {
    return C`
      <div
        part="base"
        class=${H({
      card: !0,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
};
gi.styles = [F, sh];
var ih = "sl-card";
gi.define("sl-card");
D({
  tagName: ih,
  elementClass: gi,
  react: I,
  events: {},
  displayName: "SlCard"
});
var nh = class {
  constructor(e, t) {
    this.timerId = 0, this.activeInteractions = 0, this.paused = !1, this.stopped = !0, this.pause = () => {
      this.activeInteractions++ || (this.paused = !0, this.host.requestUpdate());
    }, this.resume = () => {
      --this.activeInteractions || (this.paused = !1, this.host.requestUpdate());
    }, e.addController(this), this.host = e, this.tickCallback = t;
  }
  hostConnected() {
    this.host.addEventListener("mouseenter", this.pause), this.host.addEventListener("mouseleave", this.resume), this.host.addEventListener("focusin", this.pause), this.host.addEventListener("focusout", this.resume), this.host.addEventListener("touchstart", this.pause, { passive: !0 }), this.host.addEventListener("touchend", this.resume);
  }
  hostDisconnected() {
    this.stop(), this.host.removeEventListener("mouseenter", this.pause), this.host.removeEventListener("mouseleave", this.resume), this.host.removeEventListener("focusin", this.pause), this.host.removeEventListener("focusout", this.resume), this.host.removeEventListener("touchstart", this.pause), this.host.removeEventListener("touchend", this.resume);
  }
  start(e) {
    this.stop(), this.stopped = !1, this.timerId = window.setInterval(() => {
      this.paused || this.tickCallback();
    }, e);
  }
  stop() {
    clearInterval(this.timerId), this.stopped = !0, this.host.requestUpdate();
  }
}, ah = L`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function* lh(e, t) {
  if (e !== void 0) {
    let r = 0;
    for (const o of e)
      yield t(o, r++);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function* ch(e, t, r = 1) {
  const o = t === void 0 ? 0 : e;
  t ?? (t = e);
  for (let s = o; r > 0 ? s < t : t < s; s += r)
    yield s;
}
var dh = (e, t) => {
  let r = 0;
  return function(...o) {
    window.clearTimeout(r), r = window.setTimeout(() => {
      e.call(this, ...o);
    }, t);
  };
}, cn = (e, t, r) => {
  const o = e[t];
  e[t] = function(...s) {
    o.call(this, ...s), r.call(this, o, ...s);
  };
}, uh = "onscrollend" in window;
if (!uh) {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), r = (s) => {
    for (const i of s.changedTouches)
      e.add(i.identifier);
  }, o = (s) => {
    for (const i of s.changedTouches)
      e.delete(i.identifier);
  };
  document.addEventListener("touchstart", r, !0), document.addEventListener("touchend", o, !0), document.addEventListener("touchcancel", o, !0), cn(EventTarget.prototype, "addEventListener", function(s, i) {
    if (i !== "scrollend")
      return;
    const n = dh(() => {
      e.size ? n() : this.dispatchEvent(new Event("scrollend"));
    }, 100);
    s.call(this, "scroll", n, { passive: !0 }), t.set(this, n);
  }), cn(EventTarget.prototype, "removeEventListener", function(s, i) {
    if (i !== "scrollend")
      return;
    const n = t.get(this);
    n && s.call(this, "scroll", n, { passive: !0 });
  });
}
var ze = class extends R {
  constructor() {
    super(...arguments), this.loop = !1, this.navigation = !1, this.pagination = !1, this.autoplay = !1, this.autoplayInterval = 3e3, this.slidesPerPage = 1, this.slidesPerMove = 1, this.orientation = "horizontal", this.mouseDragging = !1, this.activeSlide = 0, this.scrolling = !1, this.dragging = !1, this.autoplayController = new nh(this, () => this.next()), this.intersectionObserverEntries = /* @__PURE__ */ new Map(), this.localize = new de(this), this.handleMouseDrag = (e) => {
      this.dragging || (this.scrollContainer.style.setProperty("scroll-snap-type", "none"), this.dragging = !0), this.scrollContainer.scrollBy({
        left: -e.movementX,
        top: -e.movementY,
        behavior: "instant"
      });
    }, this.handleMouseDragEnd = () => {
      const e = this.scrollContainer;
      document.removeEventListener("pointermove", this.handleMouseDrag, { capture: !0 });
      const t = e.scrollLeft, r = e.scrollTop;
      e.style.removeProperty("scroll-snap-type"), e.style.setProperty("overflow", "hidden");
      const o = e.scrollLeft, s = e.scrollTop;
      e.style.removeProperty("overflow"), e.style.setProperty("scroll-snap-type", "none"), e.scrollTo({ left: t, top: r, behavior: "instant" }), requestAnimationFrame(async () => {
        (t !== o || r !== s) && (e.scrollTo({
          left: o,
          top: s,
          behavior: js() ? "auto" : "smooth"
        }), await Ge(e, "scrollend")), e.style.removeProperty("scroll-snap-type"), this.dragging = !1, this.handleScrollEnd();
      });
    }, this.handleSlotChange = (e) => {
      e.some(
        (r) => [...r.addedNodes, ...r.removedNodes].some(
          (o) => this.isCarouselItem(o) && !o.hasAttribute("data-clone")
        )
      ) && this.initializeSlides(), this.requestUpdate();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "region"), this.setAttribute("aria-label", this.localize.term("carousel"));
    const e = new IntersectionObserver(
      (t) => {
        t.forEach((r) => {
          this.intersectionObserverEntries.set(r.target, r);
          const o = r.target;
          o.toggleAttribute("inert", !r.isIntersecting), o.classList.toggle("--in-view", r.isIntersecting), o.setAttribute("aria-hidden", r.isIntersecting ? "false" : "true");
        });
      },
      {
        root: this,
        threshold: 0.6
      }
    );
    this.intersectionObserver = e, e.takeRecords().forEach((t) => {
      this.intersectionObserverEntries.set(t.target, t);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.intersectionObserver.disconnect(), this.mutationObserver.disconnect();
  }
  firstUpdated() {
    this.initializeSlides(), this.mutationObserver = new MutationObserver(this.handleSlotChange), this.mutationObserver.observe(this, {
      childList: !0,
      subtree: !0
    });
  }
  willUpdate(e) {
    (e.has("slidesPerMove") || e.has("slidesPerPage")) && (this.slidesPerMove = Math.min(this.slidesPerMove, this.slidesPerPage));
  }
  getPageCount() {
    const e = this.getSlides().length, { slidesPerPage: t, slidesPerMove: r, loop: o } = this, s = o ? e / r : (e - t) / r + 1;
    return Math.ceil(s);
  }
  getCurrentPage() {
    return Math.ceil(this.activeSlide / this.slidesPerMove);
  }
  canScrollNext() {
    return this.loop || this.getCurrentPage() < this.getPageCount() - 1;
  }
  canScrollPrev() {
    return this.loop || this.getCurrentPage() > 0;
  }
  /** @internal Gets all carousel items. */
  getSlides({ excludeClones: e = !0 } = {}) {
    return [...this.children].filter(
      (t) => this.isCarouselItem(t) && (!e || !t.hasAttribute("data-clone"))
    );
  }
  handleKeyDown(e) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
      const t = e.target, r = this.localize.dir() === "rtl", o = t.closest('[part~="pagination-item"]') !== null, s = e.key === "ArrowDown" || !r && e.key === "ArrowRight" || r && e.key === "ArrowLeft", i = e.key === "ArrowUp" || !r && e.key === "ArrowLeft" || r && e.key === "ArrowRight";
      e.preventDefault(), i && this.previous(), s && this.next(), e.key === "Home" && this.goToSlide(0), e.key === "End" && this.goToSlide(this.getSlides().length - 1), o && this.updateComplete.then(() => {
        var n;
        const c = (n = this.shadowRoot) == null ? void 0 : n.querySelector(
          '[part~="pagination-item--active"]'
        );
        c && c.focus();
      });
    }
  }
  handleMouseDragStart(e) {
    this.mouseDragging && e.button === 0 && (e.preventDefault(), document.addEventListener("pointermove", this.handleMouseDrag, { capture: !0, passive: !0 }), document.addEventListener("pointerup", this.handleMouseDragEnd, { capture: !0, once: !0 }));
  }
  handleScroll() {
    this.scrolling = !0;
  }
  handleScrollEnd() {
    if (!this.scrolling || this.dragging)
      return;
    const t = [...this.intersectionObserverEntries.values()].find((r) => r.isIntersecting);
    if (this.loop && (t != null && t.target.hasAttribute("data-clone"))) {
      const r = Number(t.target.getAttribute("data-clone"));
      this.goToSlide(r, "instant");
    } else if (t) {
      const o = this.getSlides().indexOf(t.target);
      this.activeSlide = Math.ceil(o / this.slidesPerMove) * this.slidesPerMove;
    }
    this.scrolling = !1;
  }
  isCarouselItem(e) {
    return e instanceof Element && e.tagName.toLowerCase() === "sl-carousel-item";
  }
  initializeSlides() {
    const e = this.intersectionObserver;
    this.intersectionObserverEntries.clear(), this.getSlides({ excludeClones: !1 }).forEach((t, r) => {
      e.unobserve(t), t.classList.remove("--in-view"), t.classList.remove("--is-active"), t.setAttribute("aria-label", this.localize.term("slideNum", r + 1)), t.hasAttribute("data-clone") && t.remove();
    }), this.updateSlidesSnap(), this.loop && this.createClones(), this.getSlides({ excludeClones: !1 }).forEach((t) => {
      e.observe(t);
    }), this.goToSlide(this.activeSlide, "auto");
  }
  createClones() {
    const e = this.getSlides(), t = this.slidesPerPage, r = e.slice(-t), o = e.slice(0, t);
    r.reverse().forEach((s, i) => {
      const n = s.cloneNode(!0);
      n.setAttribute("data-clone", String(e.length - i - 1)), this.prepend(n);
    }), o.forEach((s, i) => {
      const n = s.cloneNode(!0);
      n.setAttribute("data-clone", String(i)), this.append(n);
    });
  }
  handelSlideChange() {
    const e = this.getSlides();
    e.forEach((t, r) => {
      t.classList.toggle("--is-active", r === this.activeSlide);
    }), this.hasUpdated && this.emit("sl-slide-change", {
      detail: {
        index: this.activeSlide,
        slide: e[this.activeSlide]
      }
    });
  }
  updateSlidesSnap() {
    const e = this.getSlides(), t = this.slidesPerMove;
    e.forEach((r, o) => {
      (o + t) % t === 0 ? r.style.removeProperty("scroll-snap-align") : r.style.setProperty("scroll-snap-align", "none");
    });
  }
  handleAutoplayChange() {
    this.autoplayController.stop(), this.autoplay && this.autoplayController.start(this.autoplayInterval);
  }
  /**
   * Move the carousel backward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  previous(e = "smooth") {
    this.goToSlide(this.activeSlide - this.slidesPerMove, e);
  }
  /**
   * Move the carousel forward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  next(e = "smooth") {
    this.goToSlide(this.activeSlide + this.slidesPerMove, e);
  }
  /**
   * Scrolls the carousel to the slide specified by `index`.
   *
   * @param index - The slide index.
   * @param behavior - The behavior used for scrolling.
   */
  goToSlide(e, t = "smooth") {
    const { slidesPerPage: r, loop: o } = this, s = this.getSlides(), i = this.getSlides({ excludeClones: !1 });
    if (!s.length)
      return;
    const n = o ? (e + s.length) % s.length : Pe(e, 0, s.length - 1);
    this.activeSlide = n;
    const c = Pe(e + (o ? r : 0), 0, i.length - 1), l = i[c];
    this.scrollToSlide(l, js() ? "auto" : t);
  }
  scrollToSlide(e, t = "smooth") {
    const r = this.scrollContainer, o = r.getBoundingClientRect(), s = e.getBoundingClientRect(), i = s.left - o.left, n = s.top - o.top;
    r.scrollTo({
      left: i + r.scrollLeft,
      top: n + r.scrollTop,
      behavior: t
    });
  }
  render() {
    const { slidesPerMove: e, scrolling: t } = this, r = this.getPageCount(), o = this.getCurrentPage(), s = this.canScrollPrev(), i = this.canScrollNext(), n = this.localize.dir() === "ltr";
    return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${H({
      carousel__slides: !0,
      "carousel__slides--horizontal": this.orientation === "horizontal",
      "carousel__slides--vertical": this.orientation === "vertical",
      "carousel__slides--dragging": this.dragging
    })}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t ? "true" : "false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation ? C`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${H({
      "carousel__navigation-button": !0,
      "carousel__navigation-button--previous": !0,
      "carousel__navigation-button--disabled": !s
    })}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s ? "false" : "true"}"
                  @click=${s ? () => this.previous() : null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n ? "chevron-left" : "chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${H({
      "carousel__navigation-button": !0,
      "carousel__navigation-button--next": !0,
      "carousel__navigation-button--disabled": !i
    })}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i ? "false" : "true"}"
                  @click=${i ? () => this.next() : null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n ? "chevron-right" : "chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            ` : ""}
        ${this.pagination ? C`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${lh(ch(r), (c) => {
      const l = c === o;
      return C`
                    <button
                      part="pagination-item ${l ? "pagination-item--active" : ""}"
                      class="${H({
        "carousel__pagination-item": !0,
        "carousel__pagination-item--active": l
      })}"
                      role="tab"
                      aria-selected="${l ? "true" : "false"}"
                      aria-label="${this.localize.term("goToSlide", c + 1, r)}"
                      tabindex=${l ? "0" : "-1"}
                      @click=${() => this.goToSlide(c * e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `;
    })}
              </div>
            ` : ""}
      </div>
    `;
  }
};
ze.styles = [F, ah];
ze.dependencies = { "sl-icon": xe };
a([
  u({ type: Boolean, reflect: !0 })
], ze.prototype, "loop", 2);
a([
  u({ type: Boolean, reflect: !0 })
], ze.prototype, "navigation", 2);
a([
  u({ type: Boolean, reflect: !0 })
], ze.prototype, "pagination", 2);
a([
  u({ type: Boolean, reflect: !0 })
], ze.prototype, "autoplay", 2);
a([
  u({ type: Number, attribute: "autoplay-interval" })
], ze.prototype, "autoplayInterval", 2);
a([
  u({ type: Number, attribute: "slides-per-page" })
], ze.prototype, "slidesPerPage", 2);
a([
  u({ type: Number, attribute: "slides-per-move" })
], ze.prototype, "slidesPerMove", 2);
a([
  u()
], ze.prototype, "orientation", 2);
a([
  u({ type: Boolean, reflect: !0, attribute: "mouse-dragging" })
], ze.prototype, "mouseDragging", 2);
a([
  A(".carousel__slides")
], ze.prototype, "scrollContainer", 2);
a([
  A(".carousel__pagination")
], ze.prototype, "paginationContainer", 2);
a([
  U()
], ze.prototype, "activeSlide", 2);
a([
  U()
], ze.prototype, "scrolling", 2);
a([
  U()
], ze.prototype, "dragging", 2);
a([
  ai({ passive: !0 })
], ze.prototype, "handleScroll", 1);
a([
  E("loop", { waitUntilFirstUpdate: !0 }),
  E("slidesPerPage", { waitUntilFirstUpdate: !0 })
], ze.prototype, "initializeSlides", 1);
a([
  E("activeSlide")
], ze.prototype, "handelSlideChange", 1);
a([
  E("slidesPerMove")
], ze.prototype, "updateSlidesSnap", 1);
a([
  E("autoplay")
], ze.prototype, "handleAutoplayChange", 1);
var hh = "sl-carousel";
ze.define("sl-carousel");
D({
  tagName: hh,
  elementClass: ze,
  react: I,
  events: {
    onSlSlideChange: "sl-slide-change"
  },
  displayName: "SlCarousel"
});
var ph = L`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`, bi = class extends R {
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "group");
  }
  render() {
    return C` <slot></slot> `;
  }
};
bi.styles = [F, ph];
var fh = "sl-carousel-item";
bi.define("sl-carousel-item");
D({
  tagName: fh,
  elementClass: bi,
  react: I,
  events: {},
  displayName: "SlCarouselItem"
});
var mh = "sl-checkbox";
De.define("sl-checkbox");
D({
  tagName: mh,
  elementClass: De,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlCheckbox"
});
var gh = L`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, he = class extends R {
  constructor() {
    super(...arguments), this.formControlController = new Lt(this, {
      assumeInteractionOn: ["click"]
    }), this.hasSlotController = new Je(this, "[default]", "prefix", "suffix"), this.localize = new de(this), this.hasFocus = !1, this.invalid = !1, this.title = "", this.variant = "default", this.size = "medium", this.caret = !1, this.disabled = !1, this.loading = !1, this.outline = !1, this.pill = !1, this.circle = !1, this.type = "button", this.name = "", this.value = "", this.href = "", this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    return this.isButton() ? this.button.validity : Qo;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.isButton() ? this.button.validationMessage : "";
  }
  firstUpdated() {
    this.isButton() && this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick() {
    this.type === "submit" && this.formControlController.submit(this), this.type === "reset" && this.formControlController.reset(this);
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  isButton() {
    return !this.href;
  }
  isLink() {
    return !!this.href;
  }
  handleDisabledChange() {
    this.isButton() && this.formControlController.setValidity(this.disabled);
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(e) {
    this.button.focus(e);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.isButton() ? this.button.checkValidity() : !0;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.isButton() ? this.button.reportValidity() : !0;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.isButton() && (this.button.setCustomValidity(e), this.formControlController.updateValidity());
  }
  render() {
    const e = this.isLink(), t = e ? Fo`a` : Fo`button`;
    return oo`
      <${t}
        part="base"
        class=${H({
      button: !0,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${P(e ? void 0 : this.disabled)}
        type=${P(e ? void 0 : this.type)}
        title=${this.title}
        name=${P(e ? void 0 : this.name)}
        value=${P(e ? void 0 : this.value)}
        href=${P(e ? this.href : void 0)}
        target=${P(e ? this.target : void 0)}
        download=${P(e ? this.download : void 0)}
        rel=${P(e ? this.rel : void 0)}
        role=${P(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? oo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? oo`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${t}>
    `;
  }
};
he.styles = [F, Sa];
he.dependencies = {
  "sl-icon": xe,
  "sl-spinner": Mr
};
a([
  A(".button")
], he.prototype, "button", 2);
a([
  U()
], he.prototype, "hasFocus", 2);
a([
  U()
], he.prototype, "invalid", 2);
a([
  u()
], he.prototype, "title", 2);
a([
  u({ reflect: !0 })
], he.prototype, "variant", 2);
a([
  u({ reflect: !0 })
], he.prototype, "size", 2);
a([
  u({ type: Boolean, reflect: !0 })
], he.prototype, "caret", 2);
a([
  u({ type: Boolean, reflect: !0 })
], he.prototype, "disabled", 2);
a([
  u({ type: Boolean, reflect: !0 })
], he.prototype, "loading", 2);
a([
  u({ type: Boolean, reflect: !0 })
], he.prototype, "outline", 2);
a([
  u({ type: Boolean, reflect: !0 })
], he.prototype, "pill", 2);
a([
  u({ type: Boolean, reflect: !0 })
], he.prototype, "circle", 2);
a([
  u()
], he.prototype, "type", 2);
a([
  u()
], he.prototype, "name", 2);
a([
  u()
], he.prototype, "value", 2);
a([
  u()
], he.prototype, "href", 2);
a([
  u()
], he.prototype, "target", 2);
a([
  u()
], he.prototype, "rel", 2);
a([
  u()
], he.prototype, "download", 2);
a([
  u()
], he.prototype, "form", 2);
a([
  u({ attribute: "formaction" })
], he.prototype, "formAction", 2);
a([
  u({ attribute: "formenctype" })
], he.prototype, "formEnctype", 2);
a([
  u({ attribute: "formmethod" })
], he.prototype, "formMethod", 2);
a([
  u({ attribute: "formnovalidate", type: Boolean })
], he.prototype, "formNoValidate", 2);
a([
  u({ attribute: "formtarget" })
], he.prototype, "formTarget", 2);
a([
  E("disabled", { waitUntilFirstUpdate: !0 })
], he.prototype, "handleDisabledChange", 1);
function je(e, t) {
  bh(e) && (e = "100%");
  const r = vh(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function To(e) {
  return Math.min(1, Math.max(0, e));
}
function bh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function vh(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Aa(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Oo(e) {
  return Number(e) <= 1 ? `${Number(e) * 100}%` : e;
}
function nr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function yh(e, t, r) {
  return {
    r: je(e, 255) * 255,
    g: je(t, 255) * 255,
    b: je(r, 255) * 255
  };
}
function dn(e, t, r) {
  e = je(e, 255), t = je(t, 255), r = je(r, 255);
  const o = Math.max(e, t, r), s = Math.min(e, t, r);
  let i = 0, n = 0;
  const c = (o + s) / 2;
  if (o === s)
    n = 0, i = 0;
  else {
    const l = o - s;
    switch (n = c > 0.5 ? l / (2 - o - s) : l / (o + s), o) {
      case e:
        i = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: n, l: c };
}
function Cs(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function wh(e, t, r) {
  let o, s, i;
  if (e = je(e, 360), t = je(t, 100), r = je(r, 100), t === 0)
    s = r, i = r, o = r;
  else {
    const n = r < 0.5 ? r * (1 + t) : r + t - r * t, c = 2 * r - n;
    o = Cs(c, n, e + 1 / 3), s = Cs(c, n, e), i = Cs(c, n, e - 1 / 3);
  }
  return { r: o * 255, g: s * 255, b: i * 255 };
}
function un(e, t, r) {
  e = je(e, 255), t = je(t, 255), r = je(r, 255);
  const o = Math.max(e, t, r), s = Math.min(e, t, r);
  let i = 0;
  const n = o, c = o - s, l = o === 0 ? 0 : c / o;
  if (o === s)
    i = 0;
  else {
    switch (o) {
      case e:
        i = (t - r) / c + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / c + 2;
        break;
      case r:
        i = (e - t) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: n };
}
function xh(e, t, r) {
  e = je(e, 360) * 6, t = je(t, 100), r = je(r, 100);
  const o = Math.floor(e), s = e - o, i = r * (1 - t), n = r * (1 - s * t), c = r * (1 - (1 - s) * t), l = o % 6, d = [r, n, i, i, c, r][l], f = [c, r, r, n, i, i][l], h = [i, i, c, r, r, n][l];
  return { r: d * 255, g: f * 255, b: h * 255 };
}
function hn(e, t, r, o) {
  const s = [
    nr(Math.round(e).toString(16)),
    nr(Math.round(t).toString(16)),
    nr(Math.round(r).toString(16))
  ];
  return o && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function _h(e, t, r, o, s) {
  const i = [
    nr(Math.round(e).toString(16)),
    nr(Math.round(t).toString(16)),
    nr(Math.round(r).toString(16)),
    nr(kh(o))
  ];
  return s && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function kh(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function pn(e) {
  return st(e) / 255;
}
function st(e) {
  return parseInt(e, 16);
}
function Ch(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
const Zs = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Sh(e) {
  let t = { r: 0, g: 0, b: 0 }, r = 1, o = null, s = null, i = null, n = !1, c = !1;
  return typeof e == "string" && (e = zh(e)), typeof e == "object" && (Nt(e.r) && Nt(e.g) && Nt(e.b) ? (t = yh(e.r, e.g, e.b), n = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Nt(e.h) && Nt(e.s) && Nt(e.v) ? (o = Oo(e.s), s = Oo(e.v), t = xh(e.h, o, s), n = !0, c = "hsv") : Nt(e.h) && Nt(e.s) && Nt(e.l) && (o = Oo(e.s), i = Oo(e.l), t = wh(e.h, o, i), n = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Aa(r), {
    ok: n,
    format: e.format || c,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
const $h = "[-\\+]?\\d+%?", Eh = "[-\\+]?\\d*\\.\\d+%?", qt = "(?:" + Eh + ")|(?:" + $h + ")", Ss = "[\\s|\\(]+(" + qt + ")[,|\\s]+(" + qt + ")[,|\\s]+(" + qt + ")\\s*\\)?", $s = (
  // eslint-disable-next-line prettier/prettier
  "[\\s|\\(]+(" + qt + ")[,|\\s]+(" + qt + ")[,|\\s]+(" + qt + ")[,|\\s]+(" + qt + ")\\s*\\)?"
), wt = {
  CSS_UNIT: new RegExp(qt),
  rgb: new RegExp("rgb" + Ss),
  rgba: new RegExp("rgba" + $s),
  hsl: new RegExp("hsl" + Ss),
  hsla: new RegExp("hsla" + $s),
  hsv: new RegExp("hsv" + Ss),
  hsva: new RegExp("hsva" + $s),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function zh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  let t = !1;
  if (Zs[e])
    e = Zs[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r = wt.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = wt.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = wt.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = wt.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = wt.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = wt.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = wt.hex8.exec(e), r ? {
    r: st(r[1]),
    g: st(r[2]),
    b: st(r[3]),
    a: pn(r[4]),
    format: t ? "name" : "hex8"
  } : (r = wt.hex6.exec(e), r ? {
    r: st(r[1]),
    g: st(r[2]),
    b: st(r[3]),
    format: t ? "name" : "hex"
  } : (r = wt.hex4.exec(e), r ? {
    r: st(r[1] + r[1]),
    g: st(r[2] + r[2]),
    b: st(r[3] + r[3]),
    a: pn(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = wt.hex3.exec(e), r ? {
    r: st(r[1] + r[1]),
    g: st(r[2] + r[2]),
    b: st(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Nt(e) {
  return !!wt.CSS_UNIT.exec(String(e));
}
class Oe {
  constructor(t = "", r = {}) {
    if (t instanceof Oe)
      return t;
    typeof t == "number" && (t = Ch(t)), this.originalInput = t;
    const o = Sh(t);
    this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = r.format ?? o.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const t = this.toRgb();
    let r, o, s;
    const i = t.r / 255, n = t.g / 255, c = t.b / 255;
    return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), n <= 0.03928 ? o = n / 12.92 : o = Math.pow((n + 0.055) / 1.055, 2.4), c <= 0.03928 ? s = c / 12.92 : s = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * o + 0.0722 * s;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(t) {
    return this.a = Aa(t), this.roundA = Math.round(100 * this.a) / 100, this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s: t } = this.toHsl();
    return t === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const t = un(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const t = un(this.r, this.g, this.b), r = Math.round(t.h * 360), o = Math.round(t.s * 100), s = Math.round(t.v * 100);
    return this.a === 1 ? `hsv(${r}, ${o}%, ${s}%)` : `hsva(${r}, ${o}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const t = dn(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const t = dn(this.r, this.g, this.b), r = Math.round(t.h * 360), o = Math.round(t.s * 100), s = Math.round(t.l * 100);
    return this.a === 1 ? `hsl(${r}, ${o}%, ${s}%)` : `hsla(${r}, ${o}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(t = !1) {
    return hn(this.r, this.g, this.b, t);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(t = !1) {
    return "#" + this.toHex(t);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(t = !1) {
    return _h(this.r, this.g, this.b, this.a, t);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(t = !1) {
    return "#" + this.toHex8(t);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(t = !1) {
    return this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const t = Math.round(this.r), r = Math.round(this.g), o = Math.round(this.b);
    return this.a === 1 ? `rgb(${t}, ${r}, ${o})` : `rgba(${t}, ${r}, ${o}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const t = (r) => `${Math.round(je(r, 255) * 100)}%`;
    return {
      r: t(this.r),
      g: t(this.g),
      b: t(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const t = (r) => Math.round(je(r, 255) * 100);
    return this.a === 1 ? `rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)` : `rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    const t = "#" + hn(this.r, this.g, this.b, !1);
    for (const [r, o] of Object.entries(Zs))
      if (t === o)
        return r;
    return !1;
  }
  toString(t) {
    const r = !!t;
    t = t ?? this.format;
    let o = !1;
    const s = this.a < 1 && this.a >= 0;
    return !r && s && (t.startsWith("hex") || t === "name") ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new Oe(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(t = 10) {
    const r = this.toHsl();
    return r.l += t / 100, r.l = To(r.l), new Oe(r);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(t = 10) {
    const r = this.toRgb();
    return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new Oe(r);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(t = 10) {
    const r = this.toHsl();
    return r.l -= t / 100, r.l = To(r.l), new Oe(r);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(t = 10) {
    return this.mix("white", t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(t = 10) {
    return this.mix("black", t);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(t = 10) {
    const r = this.toHsl();
    return r.s -= t / 100, r.s = To(r.s), new Oe(r);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(t = 10) {
    const r = this.toHsl();
    return r.s += t / 100, r.s = To(r.s), new Oe(r);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(t) {
    const r = this.toHsl(), o = (r.h + t) % 360;
    return r.h = o < 0 ? 360 + o : o, new Oe(r);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const o = this.toRgb(), s = new Oe(t).toRgb(), i = r / 100, n = {
      r: (s.r - o.r) * i + o.r,
      g: (s.g - o.g) * i + o.g,
      b: (s.b - o.b) * i + o.b,
      a: (s.a - o.a) * i + o.a
    };
    return new Oe(n);
  }
  analogous(t = 6, r = 30) {
    const o = this.toHsl(), s = 360 / r, i = [this];
    for (o.h = (o.h - (s * t >> 1) + 720) % 360; --t; )
      o.h = (o.h + s) % 360, i.push(new Oe(o));
    return i;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const t = this.toHsl();
    return t.h = (t.h + 180) % 360, new Oe(t);
  }
  monochromatic(t = 6) {
    const r = this.toHsv(), { h: o } = r, { s } = r;
    let { v: i } = r;
    const n = [], c = 1 / t;
    for (; t--; )
      n.push(new Oe({ h: o, s, v: i })), i = (i + c) % 1;
    return n;
  }
  splitcomplement() {
    const t = this.toHsl(), { h: r } = t;
    return [
      this,
      new Oe({ h: (r + 72) % 360, s: t.s, l: t.l }),
      new Oe({ h: (r + 216) % 360, s: t.s, l: t.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(t) {
    const r = this.toRgb(), o = new Oe(t).toRgb(), s = r.a + o.a * (1 - r.a);
    return new Oe({
      r: (r.r * r.a + o.r * o.a * (1 - r.a)) / s,
      g: (r.g * r.a + o.g * o.a * (1 - r.a)) / s,
      b: (r.b * r.a + o.b * o.a * (1 - r.a)) / s,
      a: s
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(t) {
    const r = this.toHsl(), { h: o } = r, s = [this], i = 360 / t;
    for (let n = 1; n < t; n++)
      s.push(new Oe({ h: (o + n * i) % 360, s: r.s, l: r.l }));
    return s;
  }
  /**
   * compare color vs current color
   */
  equals(t) {
    return this.toRgbString() === new Oe(t).toRgbString();
  }
}
var fn = "EyeDropper" in window, oe = class extends R {
  constructor() {
    super(), this.formControlController = new Lt(this), this.isSafeValue = !1, this.localize = new de(this), this.hasFocus = !1, this.isDraggingGridHandle = !1, this.isEmpty = !1, this.inputValue = "", this.hue = 0, this.saturation = 100, this.brightness = 100, this.alpha = 100, this.value = "", this.defaultValue = "", this.label = "", this.format = "hex", this.inline = !1, this.size = "medium", this.noFormatToggle = !1, this.name = "", this.disabled = !1, this.hoist = !1, this.opacity = !1, this.uppercase = !1, this.swatches = "", this.form = "", this.required = !1, this.handleFocusIn = () => {
      this.hasFocus = !0, this.emit("sl-focus");
    }, this.handleFocusOut = () => {
      this.hasFocus = !1, this.emit("sl-blur");
    }, this.addEventListener("focusin", this.handleFocusIn), this.addEventListener("focusout", this.handleFocusOut);
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.input.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  handleCopy() {
    this.input.select(), document.execCommand("copy"), this.previewButton.focus(), this.previewButton.classList.add("color-picker__preview-color--copied"), this.previewButton.addEventListener("animationend", () => {
      this.previewButton.classList.remove("color-picker__preview-color--copied");
    });
  }
  handleFormatToggle() {
    const e = ["hex", "rgb", "hsl", "hsv"], t = (e.indexOf(this.format) + 1) % e.length;
    this.format = e[t], this.setColor(this.value), this.emit("sl-change"), this.emit("sl-input");
  }
  handleAlphaDrag(e) {
    const t = this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"), r = t.querySelector(".color-picker__slider-handle"), { width: o } = t.getBoundingClientRect();
    let s = this.value, i = this.value;
    r.focus(), e.preventDefault(), no(t, {
      onMove: (n) => {
        this.alpha = Pe(n / o * 100, 0, 100), this.syncValues(), this.value !== i && (i = this.value, this.emit("sl-input"));
      },
      onStop: () => {
        this.value !== s && (s = this.value, this.emit("sl-change"));
      },
      initialEvent: e
    });
  }
  handleHueDrag(e) {
    const t = this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"), r = t.querySelector(".color-picker__slider-handle"), { width: o } = t.getBoundingClientRect();
    let s = this.value, i = this.value;
    r.focus(), e.preventDefault(), no(t, {
      onMove: (n) => {
        this.hue = Pe(n / o * 360, 0, 360), this.syncValues(), this.value !== i && (i = this.value, this.emit("sl-input"));
      },
      onStop: () => {
        this.value !== s && (s = this.value, this.emit("sl-change"));
      },
      initialEvent: e
    });
  }
  handleGridDrag(e) {
    const t = this.shadowRoot.querySelector(".color-picker__grid"), r = t.querySelector(".color-picker__grid-handle"), { width: o, height: s } = t.getBoundingClientRect();
    let i = this.value, n = this.value;
    r.focus(), e.preventDefault(), this.isDraggingGridHandle = !0, no(t, {
      onMove: (c, l) => {
        this.saturation = Pe(c / o * 100, 0, 100), this.brightness = Pe(100 - l / s * 100, 0, 100), this.syncValues(), this.value !== n && (n = this.value, this.emit("sl-input"));
      },
      onStop: () => {
        this.isDraggingGridHandle = !1, this.value !== i && (i = this.value, this.emit("sl-change"));
      },
      initialEvent: e
    });
  }
  handleAlphaKeyDown(e) {
    const t = e.shiftKey ? 10 : 1, r = this.value;
    e.key === "ArrowLeft" && (e.preventDefault(), this.alpha = Pe(this.alpha - t, 0, 100), this.syncValues()), e.key === "ArrowRight" && (e.preventDefault(), this.alpha = Pe(this.alpha + t, 0, 100), this.syncValues()), e.key === "Home" && (e.preventDefault(), this.alpha = 0, this.syncValues()), e.key === "End" && (e.preventDefault(), this.alpha = 100, this.syncValues()), this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleHueKeyDown(e) {
    const t = e.shiftKey ? 10 : 1, r = this.value;
    e.key === "ArrowLeft" && (e.preventDefault(), this.hue = Pe(this.hue - t, 0, 360), this.syncValues()), e.key === "ArrowRight" && (e.preventDefault(), this.hue = Pe(this.hue + t, 0, 360), this.syncValues()), e.key === "Home" && (e.preventDefault(), this.hue = 0, this.syncValues()), e.key === "End" && (e.preventDefault(), this.hue = 360, this.syncValues()), this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleGridKeyDown(e) {
    const t = e.shiftKey ? 10 : 1, r = this.value;
    e.key === "ArrowLeft" && (e.preventDefault(), this.saturation = Pe(this.saturation - t, 0, 100), this.syncValues()), e.key === "ArrowRight" && (e.preventDefault(), this.saturation = Pe(this.saturation + t, 0, 100), this.syncValues()), e.key === "ArrowUp" && (e.preventDefault(), this.brightness = Pe(this.brightness + t, 0, 100), this.syncValues()), e.key === "ArrowDown" && (e.preventDefault(), this.brightness = Pe(this.brightness - t, 0, 100), this.syncValues()), this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleInputChange(e) {
    const t = e.target, r = this.value;
    e.stopPropagation(), this.input.value ? (this.setColor(t.value), t.value = this.value) : this.value = "", this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleInputInput(e) {
    this.formControlController.updateValidity(), e.stopPropagation();
  }
  handleInputKeyDown(e) {
    if (e.key === "Enter") {
      const t = this.value;
      this.input.value ? (this.setColor(this.input.value), this.input.value = this.value, this.value !== t && (this.emit("sl-change"), this.emit("sl-input")), setTimeout(() => this.input.select())) : this.hue = 0;
    }
  }
  handleInputInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleTouchMove(e) {
    e.preventDefault();
  }
  parseColor(e) {
    const t = new Oe(e);
    if (!t.isValid)
      return null;
    const r = t.toHsl(), o = {
      h: r.h,
      s: r.s * 100,
      l: r.l * 100,
      a: r.a
    }, s = t.toRgb(), i = t.toHexString(), n = t.toHex8String(), c = t.toHsv(), l = {
      h: c.h,
      s: c.s * 100,
      v: c.v * 100,
      a: c.a
    };
    return {
      hsl: {
        h: o.h,
        s: o.s,
        l: o.l,
        string: this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)
      },
      hsla: {
        h: o.h,
        s: o.s,
        l: o.l,
        a: o.a,
        string: this.setLetterCase(
          `hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`
        )
      },
      hsv: {
        h: l.h,
        s: l.s,
        v: l.v,
        string: this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)
      },
      hsva: {
        h: l.h,
        s: l.s,
        v: l.v,
        a: l.a,
        string: this.setLetterCase(
          `hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`
        )
      },
      rgb: {
        r: s.r,
        g: s.g,
        b: s.b,
        string: this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)
      },
      rgba: {
        r: s.r,
        g: s.g,
        b: s.b,
        a: s.a,
        string: this.setLetterCase(
          `rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`
        )
      },
      hex: this.setLetterCase(i),
      hexa: this.setLetterCase(n)
    };
  }
  setColor(e) {
    const t = this.parseColor(e);
    return t === null ? !1 : (this.hue = t.hsva.h, this.saturation = t.hsva.s, this.brightness = t.hsva.v, this.alpha = this.opacity ? t.hsva.a * 100 : 100, this.syncValues(), !0);
  }
  setLetterCase(e) {
    return typeof e != "string" ? "" : this.uppercase ? e.toUpperCase() : e.toLowerCase();
  }
  async syncValues() {
    const e = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    e !== null && (this.format === "hsl" ? this.inputValue = this.opacity ? e.hsla.string : e.hsl.string : this.format === "rgb" ? this.inputValue = this.opacity ? e.rgba.string : e.rgb.string : this.format === "hsv" ? this.inputValue = this.opacity ? e.hsva.string : e.hsv.string : this.inputValue = this.opacity ? e.hexa : e.hex, this.isSafeValue = !0, this.value = this.inputValue, await this.updateComplete, this.isSafeValue = !1);
  }
  handleAfterHide() {
    this.previewButton.classList.remove("color-picker__preview-color--copied");
  }
  handleEyeDropper() {
    if (!fn)
      return;
    new EyeDropper().open().then((t) => {
      const r = this.value;
      this.setColor(t.sRGBHex), this.value !== r && (this.emit("sl-change"), this.emit("sl-input"));
    }).catch(() => {
    });
  }
  selectSwatch(e) {
    const t = this.value;
    this.disabled || (this.setColor(e), this.value !== t && (this.emit("sl-change"), this.emit("sl-input")));
  }
  /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
  getHexString(e, t, r, o = 100) {
    const s = new Oe(`hsva(${e}, ${t}%, ${r}%, ${o / 100})`);
    return s.isValid ? s.toHex8String() : "";
  }
  // Prevents nested components from leaking events
  stopNestedEventPropagation(e) {
    e.stopImmediatePropagation();
  }
  handleFormatChange() {
    this.syncValues();
  }
  handleOpacityChange() {
    this.alpha = 100;
  }
  handleValueChange(e, t) {
    if (this.isEmpty = !t, t || (this.hue = 0, this.saturation = 0, this.brightness = 100, this.alpha = 100), !this.isSafeValue) {
      const r = this.parseColor(t);
      r !== null ? (this.inputValue = this.value, this.hue = r.hsva.h, this.saturation = r.hsva.s, this.brightness = r.hsva.v, this.alpha = r.hsva.a * 100, this.syncValues()) : this.inputValue = e ?? "";
    }
  }
  /** Sets focus on the color picker. */
  focus(e) {
    this.inline ? this.base.focus(e) : this.trigger.focus(e);
  }
  /** Removes focus from the color picker. */
  blur() {
    var e;
    const t = this.inline ? this.base : this.trigger;
    this.hasFocus && (t.focus({ preventScroll: !0 }), t.blur()), (e = this.dropdown) != null && e.open && this.dropdown.hide();
  }
  /** Returns the current value as a string in the specified format. */
  getFormattedValue(e = "hex") {
    const t = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    if (t === null)
      return "";
    switch (e) {
      case "hex":
        return t.hex;
      case "hexa":
        return t.hexa;
      case "rgb":
        return t.rgb.string;
      case "rgba":
        return t.rgba.string;
      case "hsl":
        return t.hsl.string;
      case "hsla":
        return t.hsla.string;
      case "hsv":
        return t.hsv.string;
      case "hsva":
        return t.hsva.string;
      default:
        return "";
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return !this.inline && !this.validity.valid ? (this.dropdown.show(), this.addEventListener("sl-after-show", () => this.input.reportValidity(), { once: !0 }), this.disabled || this.formControlController.emitInvalidEvent(), !1) : this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.input.setCustomValidity(e), this.formControlController.updateValidity();
  }
  render() {
    const e = this.saturation, t = 100 - this.brightness, r = Array.isArray(this.swatches) ? this.swatches : this.swatches.split(";").filter((s) => s.trim() !== ""), o = C`
      <div
        part="base"
        class=${H({
      "color-picker": !0,
      "color-picker--inline": this.inline,
      "color-picker--disabled": this.disabled,
      "color-picker--focused": this.hasFocus
    })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-labelledby="label"
        tabindex=${this.inline ? "0" : "-1"}
      >
        ${this.inline ? C`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            ` : null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Ze({ backgroundColor: this.getHexString(this.hue, 100, 100) })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${H({
      "color-picker__grid-handle": !0,
      "color-picker__grid-handle--dragging": this.isDraggingGridHandle
    })}
            style=${Ze({
      top: `${t}%`,
      left: `${e}%`,
      backgroundColor: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            role="application"
            aria-label="HSV"
            tabindex=${P(this.disabled ? void 0 : "0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Ze({
      left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
    })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${P(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity ? C`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Ze({
      backgroundImage: `linear-gradient(
                          to right,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 0)} 0%,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 100)} 100%
                        )`
    })}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ze({
      left: `${this.alpha}%`
    })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${P(this.disabled ? void 0 : "0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                ` : ""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Ze({
      "--preview-color": this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty ? "" : this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle ? "" : C`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${fn ? C`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                ` : ""}
          </sl-button-group>
        </div>

        ${r.length > 0 ? C`
              <div part="swatches" class="color-picker__swatches">
                ${r.map((s) => {
      const i = this.parseColor(s);
      return i ? C`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${P(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${s}
                      @click=${() => this.selectSwatch(s)}
                      @keydown=${(n) => !this.disabled && n.key === "Enter" && this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ze({ backgroundColor: i.hexa })}
                      ></div>
                    </div>
                  ` : (console.error(`Unable to parse swatch color: "${s}"`, this), "");
    })}
              </div>
            ` : ""}
      </div>
    `;
    return this.inline ? o : C`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? "true" : "false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${H({
      "color-dropdown__trigger": !0,
      "color-dropdown__trigger--disabled": this.disabled,
      "color-dropdown__trigger--small": this.size === "small",
      "color-dropdown__trigger--medium": this.size === "medium",
      "color-dropdown__trigger--large": this.size === "large",
      "color-dropdown__trigger--empty": this.isEmpty,
      "color-dropdown__trigger--focused": this.hasFocus,
      "color-picker__transparent-bg": !0
    })}
          style=${Ze({
      color: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `;
  }
};
oe.styles = [F, gh];
oe.dependencies = {
  "sl-button-group": Qt,
  "sl-button": he,
  "sl-dropdown": Ke,
  "sl-icon": xe,
  "sl-input": K,
  "sl-visually-hidden": Zo
};
a([
  A('[part~="base"]')
], oe.prototype, "base", 2);
a([
  A('[part~="input"]')
], oe.prototype, "input", 2);
a([
  A(".color-dropdown")
], oe.prototype, "dropdown", 2);
a([
  A('[part~="preview"]')
], oe.prototype, "previewButton", 2);
a([
  A('[part~="trigger"]')
], oe.prototype, "trigger", 2);
a([
  U()
], oe.prototype, "hasFocus", 2);
a([
  U()
], oe.prototype, "isDraggingGridHandle", 2);
a([
  U()
], oe.prototype, "isEmpty", 2);
a([
  U()
], oe.prototype, "inputValue", 2);
a([
  U()
], oe.prototype, "hue", 2);
a([
  U()
], oe.prototype, "saturation", 2);
a([
  U()
], oe.prototype, "brightness", 2);
a([
  U()
], oe.prototype, "alpha", 2);
a([
  u()
], oe.prototype, "value", 2);
a([
  ur()
], oe.prototype, "defaultValue", 2);
a([
  u()
], oe.prototype, "label", 2);
a([
  u()
], oe.prototype, "format", 2);
a([
  u({ type: Boolean, reflect: !0 })
], oe.prototype, "inline", 2);
a([
  u({ reflect: !0 })
], oe.prototype, "size", 2);
a([
  u({ attribute: "no-format-toggle", type: Boolean })
], oe.prototype, "noFormatToggle", 2);
a([
  u()
], oe.prototype, "name", 2);
a([
  u({ type: Boolean, reflect: !0 })
], oe.prototype, "disabled", 2);
a([
  u({ type: Boolean })
], oe.prototype, "hoist", 2);
a([
  u({ type: Boolean })
], oe.prototype, "opacity", 2);
a([
  u({ type: Boolean })
], oe.prototype, "uppercase", 2);
a([
  u()
], oe.prototype, "swatches", 2);
a([
  u({ reflect: !0 })
], oe.prototype, "form", 2);
a([
  u({ type: Boolean, reflect: !0 })
], oe.prototype, "required", 2);
a([
  E("format", { waitUntilFirstUpdate: !0 })
], oe.prototype, "handleFormatChange", 1);
a([
  E("opacity", { waitUntilFirstUpdate: !0 })
], oe.prototype, "handleOpacityChange", 1);
a([
  E("value")
], oe.prototype, "handleValueChange", 1);
var Ah = "sl-color-picker";
oe.define("sl-color-picker");
D({
  tagName: Ah,
  elementClass: oe,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlColorPicker"
});
var Th = L`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`, Fe = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.isCopying = !1, this.status = "rest", this.value = "", this.from = "", this.disabled = !1, this.copyLabel = "", this.successLabel = "", this.errorLabel = "", this.feedbackDuration = 1e3, this.tooltipPlacement = "top", this.hoist = !1;
  }
  async handleCopy() {
    if (this.disabled || this.isCopying)
      return;
    this.isCopying = !0;
    let e = this.value;
    if (this.from) {
      const t = this.getRootNode(), r = this.from.includes("."), o = this.from.includes("[") && this.from.includes("]");
      let s = this.from, i = "";
      r ? [s, i] = this.from.trim().split(".") : o && ([s, i] = this.from.trim().replace(/\]$/, "").split("["));
      const n = "getElementById" in t ? t.getElementById(s) : null;
      n ? o ? e = n.getAttribute(i) || "" : r ? e = n[i] || "" : e = n.textContent || "" : (this.showStatus("error"), this.emit("sl-error"));
    }
    if (!e)
      this.showStatus("error"), this.emit("sl-error");
    else
      try {
        await navigator.clipboard.writeText(e), this.showStatus("success"), this.emit("sl-copy", {
          detail: {
            value: e
          }
        });
      } catch {
        this.showStatus("error"), this.emit("sl-error");
      }
  }
  async showStatus(e) {
    const t = this.copyLabel || this.localize.term("copy"), r = this.successLabel || this.localize.term("copied"), o = this.errorLabel || this.localize.term("error"), s = e === "success" ? this.successIcon : this.errorIcon, i = $e(this, "copy.in", { dir: "ltr" }), n = $e(this, "copy.out", { dir: "ltr" });
    this.tooltip.content = e === "success" ? r : o, await this.copyIcon.animate(n.keyframes, n.options).finished, this.copyIcon.hidden = !0, this.status = e, s.hidden = !1, await s.animate(i.keyframes, i.options).finished, setTimeout(async () => {
      await s.animate(n.keyframes, n.options).finished, s.hidden = !0, this.status = "rest", this.copyIcon.hidden = !1, await this.copyIcon.animate(i.keyframes, i.options).finished, this.tooltip.content = t, this.isCopying = !1;
    }, this.feedbackDuration);
  }
  render() {
    const e = this.copyLabel || this.localize.term("copy");
    return C`
      <sl-tooltip
        class=${H({
      "copy-button": !0,
      "copy-button--success": this.status === "success",
      "copy-button--error": this.status === "error"
    })}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `;
  }
};
Fe.styles = [F, Th];
Fe.dependencies = {
  "sl-icon": xe,
  "sl-tooltip": Ve
};
a([
  A('slot[name="copy-icon"]')
], Fe.prototype, "copyIcon", 2);
a([
  A('slot[name="success-icon"]')
], Fe.prototype, "successIcon", 2);
a([
  A('slot[name="error-icon"]')
], Fe.prototype, "errorIcon", 2);
a([
  A("sl-tooltip")
], Fe.prototype, "tooltip", 2);
a([
  U()
], Fe.prototype, "isCopying", 2);
a([
  U()
], Fe.prototype, "status", 2);
a([
  u()
], Fe.prototype, "value", 2);
a([
  u()
], Fe.prototype, "from", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Fe.prototype, "disabled", 2);
a([
  u({ attribute: "copy-label" })
], Fe.prototype, "copyLabel", 2);
a([
  u({ attribute: "success-label" })
], Fe.prototype, "successLabel", 2);
a([
  u({ attribute: "error-label" })
], Fe.prototype, "errorLabel", 2);
a([
  u({ attribute: "feedback-duration", type: Number })
], Fe.prototype, "feedbackDuration", 2);
a([
  u({ attribute: "tooltip-placement" })
], Fe.prototype, "tooltipPlacement", 2);
a([
  u({ type: Boolean })
], Fe.prototype, "hoist", 2);
be("copy.in", {
  keyframes: [
    { scale: ".25", opacity: ".25" },
    { scale: "1", opacity: "1" }
  ],
  options: { duration: 100 }
});
be("copy.out", {
  keyframes: [
    { scale: "1", opacity: "1" },
    { scale: ".25", opacity: "0" }
  ],
  options: { duration: 100 }
});
var Oh = "sl-copy-button";
Fe.define("sl-copy-button");
D({
  tagName: Oh,
  elementClass: Fe,
  react: I,
  events: {
    onSlCopy: "sl-copy",
    onSlError: "sl-error"
  },
  displayName: "SlCopyButton"
});
var Nh = L`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`, xo = class extends R {
  constructor() {
    super(...arguments), this.vertical = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
xo.styles = [F, Nh];
a([
  u({ type: Boolean, reflect: !0 })
], xo.prototype, "vertical", 2);
a([
  E("vertical")
], xo.prototype, "handleVerticalChange", 1);
var Ih = "sl-divider";
xo.define("sl-divider");
var Rh = D({
  tagName: Ih,
  elementClass: xo,
  react: I,
  events: {},
  displayName: "SlDivider"
}), mn = Rh, Ph = L`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`, br = Object.assign(document.createElement("div"), { className: "sl-toast-stack" }), $t = class extends R {
  constructor() {
    super(...arguments), this.hasSlotController = new Je(this, "icon", "suffix"), this.localize = new de(this), this.open = !1, this.closable = !1, this.variant = "primary", this.duration = 1 / 0;
  }
  firstUpdated() {
    this.base.hidden = !this.open;
  }
  restartAutoHide() {
    clearTimeout(this.autoHideTimeout), this.open && this.duration < 1 / 0 && (this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration));
  }
  handleCloseClick() {
    this.hide();
  }
  handleMouseMove() {
    this.restartAutoHide();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show"), this.duration < 1 / 0 && this.restartAutoHide(), await Me(this.base), this.base.hidden = !1;
      const { keyframes: e, options: t } = $e(this, "alert.show", { dir: this.localize.dir() });
      await Ne(this.base, e, t), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), clearTimeout(this.autoHideTimeout), await Me(this.base);
      const { keyframes: e, options: t } = $e(this, "alert.hide", { dir: this.localize.dir() });
      await Ne(this.base, e, t), this.base.hidden = !0, this.emit("sl-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  /** Shows the alert. */
  async show() {
    if (!this.open)
      return this.open = !0, Ge(this, "sl-after-show");
  }
  /** Hides the alert */
  async hide() {
    if (this.open)
      return this.open = !1, Ge(this, "sl-after-hide");
  }
  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise((e) => {
      br.parentElement === null && document.body.append(br), br.appendChild(this), requestAnimationFrame(() => {
        this.clientWidth, this.show();
      }), this.addEventListener(
        "sl-after-hide",
        () => {
          br.removeChild(this), e(), br.querySelector("sl-alert") === null && br.remove();
        },
        { once: !0 }
      );
    });
  }
  render() {
    return C`
      <div
        part="base"
        class=${H({
      alert: !0,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-icon": this.hasSlotController.test("icon"),
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger"
    })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
$t.styles = [F, Ph];
$t.dependencies = { "sl-icon-button": Le };
a([
  A('[part~="base"]')
], $t.prototype, "base", 2);
a([
  u({ type: Boolean, reflect: !0 })
], $t.prototype, "open", 2);
a([
  u({ type: Boolean, reflect: !0 })
], $t.prototype, "closable", 2);
a([
  u({ reflect: !0 })
], $t.prototype, "variant", 2);
a([
  u({ type: Number })
], $t.prototype, "duration", 2);
a([
  E("open", { waitUntilFirstUpdate: !0 })
], $t.prototype, "handleOpenChange", 1);
a([
  E("duration")
], $t.prototype, "handleDurationChange", 1);
be("alert.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
be("alert.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
var Mh = "sl-alert";
$t.define("sl-alert");
D({
  tagName: Mh,
  elementClass: $t,
  react: I,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlAlert"
});
var Dh = L`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`, vt = class extends R {
  constructor() {
    super(...arguments), this.isLoaded = !1;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const e = document.createElement("canvas"), { width: t, height: r } = this.animatedImage;
    e.width = t, e.height = r, e.getContext("2d").drawImage(this.animatedImage, 0, 0, t, r), this.frozenFrame = e.toDataURL("image/gif"), this.isLoaded || (this.emit("sl-load"), this.isLoaded = !0);
  }
  handleError() {
    this.emit("sl-error");
  }
  handlePlayChange() {
    this.play && (this.animatedImage.src = "", this.animatedImage.src = this.src);
  }
  handleSrcChange() {
    this.isLoaded = !1;
  }
  render() {
    return C`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? C`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            ` : ""}
      </div>
    `;
  }
};
vt.styles = [F, Dh];
vt.dependencies = { "sl-icon": xe };
a([
  A(".animated-image__animated")
], vt.prototype, "animatedImage", 2);
a([
  U()
], vt.prototype, "frozenFrame", 2);
a([
  U()
], vt.prototype, "isLoaded", 2);
a([
  u()
], vt.prototype, "src", 2);
a([
  u()
], vt.prototype, "alt", 2);
a([
  u({ type: Boolean, reflect: !0 })
], vt.prototype, "play", 2);
a([
  E("play", { waitUntilFirstUpdate: !0 })
], vt.prototype, "handlePlayChange", 1);
a([
  E("src")
], vt.prototype, "handleSrcChange", 1);
var Lh = "sl-animated-image";
vt.define("sl-animated-image");
D({
  tagName: Lh,
  elementClass: vt,
  react: I,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  },
  displayName: "SlAnimatedImage"
});
const Bh = [
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
  { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
  { offset: 0.4, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
  { offset: 0.43, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
  { offset: 0.53, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
  { offset: 0.7, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -15px, 0) scaleY(1.05)" },
  {
    offset: 0.8,
    "transition-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0) scaleY(0.95)"
  },
  { offset: 0.9, transform: "translate3d(0, -4px, 0) scaleY(1.02)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" }
], Vh = [
  { offset: 0, opacity: "1" },
  { offset: 0.25, opacity: "0" },
  { offset: 0.5, opacity: "1" },
  { offset: 0.75, opacity: "0" },
  { offset: 1, opacity: "1" }
], Fh = [
  { offset: 0, transform: "translateX(0)" },
  { offset: 0.065, transform: "translateX(-6px) rotateY(-9deg)" },
  { offset: 0.185, transform: "translateX(5px) rotateY(7deg)" },
  { offset: 0.315, transform: "translateX(-3px) rotateY(-5deg)" },
  { offset: 0.435, transform: "translateX(2px) rotateY(3deg)" },
  { offset: 0.5, transform: "translateX(0)" }
], Hh = [
  { offset: 0, transform: "scale(1)" },
  { offset: 0.14, transform: "scale(1.3)" },
  { offset: 0.28, transform: "scale(1)" },
  { offset: 0.42, transform: "scale(1.3)" },
  { offset: 0.7, transform: "scale(1)" }
], Uh = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.111, transform: "translate3d(0, 0, 0)" },
  { offset: 0.222, transform: "skewX(-12.5deg) skewY(-12.5deg)" },
  { offset: 0.33299999999999996, transform: "skewX(6.25deg) skewY(6.25deg)" },
  { offset: 0.444, transform: "skewX(-3.125deg) skewY(-3.125deg)" },
  { offset: 0.555, transform: "skewX(1.5625deg) skewY(1.5625deg)" },
  { offset: 0.6659999999999999, transform: "skewX(-0.78125deg) skewY(-0.78125deg)" },
  { offset: 0.777, transform: "skewX(0.390625deg) skewY(0.390625deg)" },
  { offset: 0.888, transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], jh = [
  { offset: 0, transform: "scale3d(1, 1, 1)" },
  { offset: 0.5, transform: "scale3d(1.05, 1.05, 1.05)" },
  { offset: 1, transform: "scale3d(1, 1, 1)" }
], Wh = [
  { offset: 0, transform: "scale3d(1, 1, 1)" },
  { offset: 0.3, transform: "scale3d(1.25, 0.75, 1)" },
  { offset: 0.4, transform: "scale3d(0.75, 1.25, 1)" },
  { offset: 0.5, transform: "scale3d(1.15, 0.85, 1)" },
  { offset: 0.65, transform: "scale3d(0.95, 1.05, 1)" },
  { offset: 0.75, transform: "scale3d(1.05, 0.95, 1)" },
  { offset: 1, transform: "scale3d(1, 1, 1)" }
], qh = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], Kh = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], Yh = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.1, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.2, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.3, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.4, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.5, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.6, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.7, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.8, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.9, transform: "translate3d(0, -10px, 0)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], Xh = [
  { offset: 0.2, transform: "rotate3d(0, 0, 1, 15deg)" },
  { offset: 0.4, transform: "rotate3d(0, 0, 1, -10deg)" },
  { offset: 0.6, transform: "rotate3d(0, 0, 1, 5deg)" },
  { offset: 0.8, transform: "rotate3d(0, 0, 1, -5deg)" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 0deg)" }
], Gh = [
  { offset: 0, transform: "scale3d(1, 1, 1)" },
  { offset: 0.1, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.3, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.4, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.5, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.6, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.7, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.8, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.9, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 1, transform: "scale3d(1, 1, 1)" }
], Jh = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.15, transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)" },
  { offset: 0.3, transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.45, transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.6, transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)" },
  { offset: 0.75, transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], Zh = [
  { offset: 0, transform: "translateY(-1200px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
], Qh = [
  { offset: 0, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
], ep = [
  { offset: 0, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
], tp = [
  { offset: 0, transform: "translateY(1200px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
], rp = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateY(700px) scale(0.7)", opacity: "0.7" }
], op = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" }
], sp = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" }
], ip = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateY(-700px) scale(0.7)", opacity: "0.7" }
], np = [
  { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.2, transform: "scale3d(1.1, 1.1, 1.1)" },
  { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.4, transform: "scale3d(0.9, 0.9, 0.9)" },
  { offset: 0.4, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "scale3d(1.03, 1.03, 1.03)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.8, transform: "scale3d(0.97, 0.97, 0.97)" },
  { offset: 0.8, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, opacity: "1", transform: "scale3d(1, 1, 1)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
], ap = [
  { offset: 0, opacity: "0", transform: "translate3d(0, -3000px, 0) scaleY(3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(0, 25px, 0) scaleY(0.9)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(0, -10px, 0) scaleY(0.95)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(0, 5px, 0) scaleY(0.985)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
], lp = [
  { offset: 0, opacity: "0", transform: "translate3d(-3000px, 0, 0) scaleX(3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(25px, 0, 0) scaleX(1)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(-10px, 0, 0) scaleX(0.98)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(5px, 0, 0) scaleX(0.995)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
], cp = [
  { offset: 0, opacity: "0", transform: "translate3d(3000px, 0, 0) scaleX(3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(-25px, 0, 0) scaleX(1)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(10px, 0, 0) scaleX(0.98)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(-5px, 0, 0) scaleX(0.995)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
], dp = [
  { offset: 0, opacity: "0", transform: "translate3d(0, 3000px, 0) scaleY(5)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(0, 10px, 0) scaleY(0.95)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(0, -5px, 0) scaleY(0.985)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
], up = [
  { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9)" },
  { offset: 0.5, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
  { offset: 0.55, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
  { offset: 1, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" }
], hp = [
  { offset: 0.2, transform: "translate3d(0, 10px, 0) scaleY(0.985)" },
  { offset: 0.4, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
  { offset: 0.45, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0) scaleY(3)" }
], pp = [
  { offset: 0.2, opacity: "1", transform: "translate3d(20px, 0, 0) scaleX(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0) scaleX(2)" }
], fp = [
  { offset: 0.2, opacity: "1", transform: "translate3d(-20px, 0, 0) scaleX(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0) scaleX(2)" }
], mp = [
  { offset: 0.2, transform: "translate3d(0, -10px, 0) scaleY(0.985)" },
  { offset: 0.4, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
  { offset: 0.45, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0) scaleY(3)" }
], gp = [
  { offset: 0, opacity: "0" },
  { offset: 1, opacity: "1" }
], bp = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, 100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], vp = [
  { offset: 0, opacity: "0", transform: "translate3d(100%, 100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], yp = [
  { offset: 0, opacity: "0", transform: "translate3d(0, -100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], wp = [
  { offset: 0, opacity: "0", transform: "translate3d(0, -2000px, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], xp = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], _p = [
  { offset: 0, opacity: "0", transform: "translate3d(-2000px, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], kp = [
  { offset: 0, opacity: "0", transform: "translate3d(100%, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], Cp = [
  { offset: 0, opacity: "0", transform: "translate3d(2000px, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], Sp = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, -100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], $p = [
  { offset: 0, opacity: "0", transform: "translate3d(100%, -100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], Ep = [
  { offset: 0, opacity: "0", transform: "translate3d(0, 100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], zp = [
  { offset: 0, opacity: "0", transform: "translate3d(0, 2000px, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], Ap = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0" }
], Tp = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(-100%, 100%, 0)" }
], Op = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, 100%, 0)" }
], Np = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, 100%, 0)" }
], Ip = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0)" }
], Rp = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(-100%, 0, 0)" }
], Pp = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0)" }
], Mp = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0)" }
], Dp = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0)" }
], Lp = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(-100%, -100%, 0)" }
], Bp = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, -100%, 0)" }
], Vp = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, -100%, 0)" }
], Fp = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0)" }
], Hp = [
  {
    offset: 0,
    transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
    easing: "ease-out"
  },
  {
    offset: 0.4,
    transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,
    easing: "ease-out"
  },
  {
    offset: 0.5,
    transform: `perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,
    easing: "ease-in"
  },
  {
    offset: 0.8,
    transform: `perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,
    easing: "ease-in"
  },
  {
    offset: 1,
    transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
    easing: "ease-in"
  }
], Up = [
  { offset: 0, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", easing: "ease-in", opacity: "0" },
  { offset: 0.4, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", easing: "ease-in" },
  { offset: 0.6, transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)", opacity: "1" },
  { offset: 0.8, transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)" },
  { offset: 1, transform: "perspective(400px)" }
], jp = [
  { offset: 0, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", easing: "ease-in", opacity: "0" },
  { offset: 0.4, transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)", easing: "ease-in" },
  { offset: 0.6, transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)", opacity: "1" },
  { offset: 0.8, transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)" },
  { offset: 1, transform: "perspective(400px)" }
], Wp = [
  { offset: 0, transform: "perspective(400px)" },
  { offset: 0.3, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", opacity: "1" },
  { offset: 1, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", opacity: "0" }
], qp = [
  { offset: 0, transform: "perspective(400px)" },
  { offset: 0.3, transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)", opacity: "1" },
  { offset: 1, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", opacity: "0" }
], Kp = [
  { offset: 0, transform: "translate3d(-100%, 0, 0) skewX(30deg)", opacity: "0" },
  { offset: 0.6, transform: "skewX(-20deg)", opacity: "1" },
  { offset: 0.8, transform: "skewX(5deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], Yp = [
  { offset: 0, transform: "translate3d(100%, 0, 0) skewX(-30deg)", opacity: "0" },
  { offset: 0.6, transform: "skewX(20deg)", opacity: "1" },
  { offset: 0.8, transform: "skewX(-5deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], Xp = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "translate3d(-100%, 0, 0) skewX(-30deg)", opacity: "0" }
], Gp = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "translate3d(100%, 0, 0) skewX(30deg)", opacity: "0" }
], Jp = [
  { offset: 0, transform: "rotate3d(0, 0, 1, -200deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
], Zp = [
  { offset: 0, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
], Qp = [
  { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
], ef = [
  { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
], tf = [
  { offset: 0, transform: "rotate3d(0, 0, 1, -90deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
], rf = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 200deg)", opacity: "0" }
], of = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" }
], sf = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
], nf = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
], af = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 90deg)", opacity: "0" }
], lf = [
  { offset: 0, transform: "translate3d(0, -100%, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], cf = [
  { offset: 0, transform: "translate3d(-100%, 0, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], df = [
  { offset: 0, transform: "translate3d(100%, 0, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], uf = [
  { offset: 0, transform: "translate3d(0, 100%, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
], hf = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(0, 100%, 0)" }
], pf = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(-100%, 0, 0)" }
], ff = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(100%, 0, 0)" }
], mf = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(0, -100%, 0)" }
], gf = [
  { offset: 0, easing: "ease-in-out" },
  { offset: 0.2, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
  { offset: 0.4, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
  { offset: 0.6, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
  { offset: 0.8, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
  { offset: 1, transform: "translate3d(0, 700px, 0)", opacity: "0" }
], bf = [
  { offset: 0, opacity: "0", transform: "scale(0.1) rotate(30deg)", "transform-origin": "center bottom" },
  { offset: 0.5, transform: "rotate(-10deg)" },
  { offset: 0.7, transform: "rotate(3deg)" },
  { offset: 1, opacity: "1", transform: "scale(1)" }
], vf = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
], yf = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)" }
], wf = [
  { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
  { offset: 0.5, opacity: "1" }
], xf = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
], _f = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
], kf = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
], Cf = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
], Sf = [
  { offset: 0, opacity: "1" },
  { offset: 0.5, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
  { offset: 1, opacity: "0" }
], $f = [
  {
    offset: 0.4,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 1,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
], Ef = [
  { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)" },
  { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(-2000px, 0, 0)" }
], zf = [
  { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)" },
  { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(2000px, 0, 0)" }
], Af = [
  {
    offset: 0.4,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 1,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
], Ta = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
  easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
  easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
  easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
  easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
  easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
  easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
  easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
  easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
  easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
}, Tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  backInDown: Zh,
  backInLeft: Qh,
  backInRight: ep,
  backInUp: tp,
  backOutDown: rp,
  backOutLeft: op,
  backOutRight: sp,
  backOutUp: ip,
  bounce: Bh,
  bounceIn: np,
  bounceInDown: ap,
  bounceInLeft: lp,
  bounceInRight: cp,
  bounceInUp: dp,
  bounceOut: up,
  bounceOutDown: hp,
  bounceOutLeft: pp,
  bounceOutRight: fp,
  bounceOutUp: mp,
  easings: Ta,
  fadeIn: gp,
  fadeInBottomLeft: bp,
  fadeInBottomRight: vp,
  fadeInDown: yp,
  fadeInDownBig: wp,
  fadeInLeft: xp,
  fadeInLeftBig: _p,
  fadeInRight: kp,
  fadeInRightBig: Cp,
  fadeInTopLeft: Sp,
  fadeInTopRight: $p,
  fadeInUp: Ep,
  fadeInUpBig: zp,
  fadeOut: Ap,
  fadeOutBottomLeft: Tp,
  fadeOutBottomRight: Op,
  fadeOutDown: Np,
  fadeOutDownBig: Ip,
  fadeOutLeft: Rp,
  fadeOutLeftBig: Pp,
  fadeOutRight: Mp,
  fadeOutRightBig: Dp,
  fadeOutTopLeft: Lp,
  fadeOutTopRight: Bp,
  fadeOutUp: Vp,
  fadeOutUpBig: Fp,
  flash: Vh,
  flip: Hp,
  flipInX: Up,
  flipInY: jp,
  flipOutX: Wp,
  flipOutY: qp,
  headShake: Fh,
  heartBeat: Hh,
  hinge: gf,
  jackInTheBox: bf,
  jello: Uh,
  lightSpeedInLeft: Kp,
  lightSpeedInRight: Yp,
  lightSpeedOutLeft: Xp,
  lightSpeedOutRight: Gp,
  pulse: jh,
  rollIn: vf,
  rollOut: yf,
  rotateIn: Jp,
  rotateInDownLeft: Zp,
  rotateInDownRight: Qp,
  rotateInUpLeft: ef,
  rotateInUpRight: tf,
  rotateOut: rf,
  rotateOutDownLeft: of,
  rotateOutDownRight: sf,
  rotateOutUpLeft: nf,
  rotateOutUpRight: af,
  rubberBand: Wh,
  shake: qh,
  shakeX: Kh,
  shakeY: Yh,
  slideInDown: lf,
  slideInLeft: cf,
  slideInRight: df,
  slideInUp: uf,
  slideOutDown: hf,
  slideOutLeft: pf,
  slideOutRight: ff,
  slideOutUp: mf,
  swing: Xh,
  tada: Gh,
  wobble: Jh,
  zoomIn: wf,
  zoomInDown: xf,
  zoomInLeft: _f,
  zoomInRight: kf,
  zoomInUp: Cf,
  zoomOut: Sf,
  zoomOutDown: $f,
  zoomOutLeft: Ef,
  zoomOutRight: zf,
  zoomOutUp: Af
}, Symbol.toStringTag, { value: "Module" }));
var Of = L`
  :host {
    display: contents;
  }
`, He = class extends R {
  constructor() {
    super(...arguments), this.hasStarted = !1, this.name = "none", this.play = !1, this.delay = 0, this.direction = "normal", this.duration = 1e3, this.easing = "linear", this.endDelay = 0, this.fill = "auto", this.iterations = 1 / 0, this.iterationStart = 0, this.playbackRate = 1, this.handleAnimationFinish = () => {
      this.play = !1, this.hasStarted = !1, this.emit("sl-finish");
    }, this.handleAnimationCancel = () => {
      this.play = !1, this.hasStarted = !1, this.emit("sl-cancel");
    };
  }
  /** Gets and sets the current animation time. */
  get currentTime() {
    var e, t;
    return (t = (e = this.animation) == null ? void 0 : e.currentTime) != null ? t : 0;
  }
  set currentTime(e) {
    this.animation && (this.animation.currentTime = e);
  }
  connectedCallback() {
    super.connectedCallback(), this.createAnimation();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.destroyAnimation();
  }
  handleSlotChange() {
    this.destroyAnimation(), this.createAnimation();
  }
  async createAnimation() {
    var e, t;
    const r = (e = Ta[this.easing]) != null ? e : this.easing, o = (t = this.keyframes) != null ? t : Tf[this.name], i = (await this.defaultSlot).assignedElements()[0];
    return !i || !o ? !1 : (this.destroyAnimation(), this.animation = i.animate(o, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing: r,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    }), this.animation.playbackRate = this.playbackRate, this.animation.addEventListener("cancel", this.handleAnimationCancel), this.animation.addEventListener("finish", this.handleAnimationFinish), this.play ? (this.hasStarted = !0, this.emit("sl-start")) : this.animation.pause(), !0);
  }
  destroyAnimation() {
    this.animation && (this.animation.cancel(), this.animation.removeEventListener("cancel", this.handleAnimationCancel), this.animation.removeEventListener("finish", this.handleAnimationFinish), this.hasStarted = !1);
  }
  handleAnimationChange() {
    this.hasUpdated && this.createAnimation();
  }
  handlePlayChange() {
    return this.animation ? (this.play && !this.hasStarted && (this.hasStarted = !0, this.emit("sl-start")), this.play ? this.animation.play() : this.animation.pause(), !0) : !1;
  }
  handlePlaybackRateChange() {
    this.animation && (this.animation.playbackRate = this.playbackRate);
  }
  /** Clears all keyframe effects caused by this animation and aborts its playback. */
  cancel() {
    var e;
    (e = this.animation) == null || e.cancel();
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    var e;
    (e = this.animation) == null || e.finish();
  }
  render() {
    return C` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
He.styles = [F, Of];
a([
  Yl("slot")
], He.prototype, "defaultSlot", 2);
a([
  u()
], He.prototype, "name", 2);
a([
  u({ type: Boolean, reflect: !0 })
], He.prototype, "play", 2);
a([
  u({ type: Number })
], He.prototype, "delay", 2);
a([
  u()
], He.prototype, "direction", 2);
a([
  u({ type: Number })
], He.prototype, "duration", 2);
a([
  u()
], He.prototype, "easing", 2);
a([
  u({ attribute: "end-delay", type: Number })
], He.prototype, "endDelay", 2);
a([
  u()
], He.prototype, "fill", 2);
a([
  u({ type: Number })
], He.prototype, "iterations", 2);
a([
  u({ attribute: "iteration-start", type: Number })
], He.prototype, "iterationStart", 2);
a([
  u({ attribute: !1 })
], He.prototype, "keyframes", 2);
a([
  u({ attribute: "playback-rate", type: Number })
], He.prototype, "playbackRate", 2);
a([
  E([
    "name",
    "delay",
    "direction",
    "duration",
    "easing",
    "endDelay",
    "fill",
    "iterations",
    "iterationsStart",
    "keyframes"
  ])
], He.prototype, "handleAnimationChange", 1);
a([
  E("play")
], He.prototype, "handlePlayChange", 1);
a([
  E("playbackRate")
], He.prototype, "handlePlaybackRateChange", 1);
var Nf = "sl-animation";
He.define("sl-animation");
D({
  tagName: Nf,
  elementClass: He,
  react: I,
  events: {
    onSlCancel: "sl-cancel",
    onSlFinish: "sl-finish",
    onSlStart: "sl-start"
  },
  displayName: "SlAnimation"
});
var If = L`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`, Et = class extends R {
  constructor() {
    super(...arguments), this.hasError = !1, this.image = "", this.label = "", this.initials = "", this.loading = "eager", this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = !1;
  }
  render() {
    const e = C`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${() => this.hasError = !0}"
      />
    `;
    let t = C``;
    return this.initials ? t = C`<div part="initials" class="avatar__initials">${this.initials}</div>` : t = C`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `, C`
      <div
        part="base"
        class=${H({
      avatar: !0,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? e : t}
      </div>
    `;
  }
};
Et.styles = [F, If];
Et.dependencies = {
  "sl-icon": xe
};
a([
  U()
], Et.prototype, "hasError", 2);
a([
  u()
], Et.prototype, "image", 2);
a([
  u()
], Et.prototype, "label", 2);
a([
  u()
], Et.prototype, "initials", 2);
a([
  u()
], Et.prototype, "loading", 2);
a([
  u({ reflect: !0 })
], Et.prototype, "shape", 2);
a([
  E("image")
], Et.prototype, "handleImageChange", 1);
var Rf = "sl-avatar";
Et.define("sl-avatar");
D({
  tagName: Rf,
  elementClass: Et,
  react: I,
  events: {},
  displayName: "SlAvatar"
});
var Pf = L`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`, fr = class extends R {
  constructor() {
    super(...arguments), this.localize = new de(this), this.separatorDir = this.localize.dir(), this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const t = this.separatorSlot.assignedElements({ flatten: !0 })[0].cloneNode(!0);
    return [t, ...t.querySelectorAll("[id]")].forEach((r) => r.removeAttribute("id")), t.setAttribute("data-default", ""), t.slot = "separator", t;
  }
  handleSlotChange() {
    const e = [...this.defaultSlot.assignedElements({ flatten: !0 })].filter(
      (t) => t.tagName.toLowerCase() === "sl-breadcrumb-item"
    );
    e.forEach((t, r) => {
      const o = t.querySelector('[slot="separator"]');
      o === null ? t.append(this.getSeparator()) : o.hasAttribute("data-default") && o.replaceWith(this.getSeparator()), r === e.length - 1 ? t.setAttribute("aria-current", "page") : t.removeAttribute("aria-current");
    });
  }
  render() {
    return this.separatorDir !== this.localize.dir() && (this.separatorDir = this.localize.dir(), this.updateComplete.then(() => this.handleSlotChange())), C`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `;
  }
};
fr.styles = [F, Pf];
fr.dependencies = { "sl-icon": xe };
a([
  A("slot")
], fr.prototype, "defaultSlot", 2);
a([
  A('slot[name="separator"]')
], fr.prototype, "separatorSlot", 2);
a([
  u()
], fr.prototype, "label", 2);
var Mf = "sl-breadcrumb";
fr.define("sl-breadcrumb");
D({
  tagName: Mf,
  elementClass: fr,
  react: I,
  events: {},
  displayName: "SlBreadcrumb"
});
var Df = "sl-button";
he.define("sl-button");
D({
  tagName: Df,
  elementClass: he,
  react: I,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlButton"
});
var Lf = L`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`, Hr = class extends R {
  constructor() {
    super(...arguments), this.hasSlotController = new Je(this, "prefix", "suffix"), this.rel = "noreferrer noopener";
  }
  render() {
    const e = !!this.href;
    return C`
      <div
        part="base"
        class=${H({
      "breadcrumb-item": !0,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e ? C`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${P(this.target ? this.target : void 0)}"
                rel=${P(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : C`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
  }
};
Hr.styles = [F, Lf];
a([
  u()
], Hr.prototype, "href", 2);
a([
  u()
], Hr.prototype, "target", 2);
a([
  u()
], Hr.prototype, "rel", 2);
var Bf = "sl-breadcrumb-item";
Hr.define("sl-breadcrumb-item");
D({
  tagName: Bf,
  elementClass: Hr,
  react: I,
  events: {},
  displayName: "SlBreadcrumbItem"
});
var Vf = L`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`, Ur = class extends R {
  constructor() {
    super(...arguments), this.variant = "primary", this.pill = !1, this.pulse = !1;
  }
  render() {
    return C`
      <span
        part="base"
        class=${H({
      badge: !0,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
Ur.styles = [F, Vf];
a([
  u({ reflect: !0 })
], Ur.prototype, "variant", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ur.prototype, "pill", 2);
a([
  u({ type: Boolean, reflect: !0 })
], Ur.prototype, "pulse", 2);
var Ff = "sl-badge";
Ur.define("sl-badge");
D({
  tagName: Ff,
  elementClass: Ur,
  react: I,
  events: {},
  displayName: "SlBadge"
});
function Hf({ endChapter: e }) {
  const t = Array.from({ length: e }, (r, o) => o + 1);
  return /* @__PURE__ */ T("div", { className: "chapter-select", children: t.map((r) => /* @__PURE__ */ T("div", { children: r })) });
}
function nb() {
  return /* @__PURE__ */ Ce("div", { className: "book-chapter-control", children: [
    /* @__PURE__ */ Ce(hu, { placeholder: "Deuteronomy 4:7", size: "small", children: [
      /* @__PURE__ */ T(Ao, { name: "search", slot: "prefix" }),
      /* @__PURE__ */ T(Ao, { name: "clock-history", slot: "suffix" })
    ] }),
    /* @__PURE__ */ Ce(xu, { className: "menu", children: [
      /* @__PURE__ */ Ce(Xe, { className: "selected-menu-item", children: [
        "Deuteronomy",
        /* @__PURE__ */ T(Ao, { slot: "suffix", name: "pin" })
      ] }),
      /* @__PURE__ */ T(ks, { children: "Old Testament" }),
      /* @__PURE__ */ Ce(Xe, { value: "gen", children: [
        "Genesis",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "exo", children: [
        "Exodus",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "lev", children: [
        "Leviticus",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "num", children: [
        "Number",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "deu", className: "selected-menu-item", children: [
        "Deuteronomy",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" }),
        /* @__PURE__ */ T(Ao, { slot: "suffix", name: "chevron-up" })
      ] }),
      /* @__PURE__ */ T(Hf, { endChapter: 34 }),
      /* @__PURE__ */ Ce(Xe, { value: "jos", children: [
        "Joshua",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "jud", children: [
        "Judges",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ T(mn, {}),
      /* @__PURE__ */ T(ks, { children: "Deuterocanon" }),
      /* @__PURE__ */ Ce(Xe, { value: "es1", disabled: !0, children: [
        "1 Esdras",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "es2", disabled: !0, children: [
        "2 Esdras",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "mc1", disabled: !0, children: [
        "1 Maccabees",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "mc2", disabled: !0, children: [
        "2 Maccabees",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ T(mn, {}),
      /* @__PURE__ */ T(ks, { children: "New Testament" }),
      /* @__PURE__ */ Ce(Xe, { value: "mat", children: [
        "Matthew",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "mrk", children: [
        "Mark",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] }),
      /* @__PURE__ */ Ce(Xe, { value: "luk", children: [
        "Luke",
        /* @__PURE__ */ T("div", { className: "book-color-label", slot: "prefix" })
      ] })
    ] })
  ] });
}
function vr({
  id: e,
  isDisabled: t = !1,
  className: r,
  onClick: o,
  onContextMenu: s,
  children: i
}) {
  return /* @__PURE__ */ T(
    Ja,
    {
      id: e,
      disabled: t,
      className: `papi-button ${r ?? ""}`,
      onClick: o,
      onContextMenu: s,
      children: i
    }
  );
}
function Qs({
  id: e,
  title: t,
  isDisabled: r = !1,
  isClearable: o = !0,
  hasError: s = !1,
  isFullWidth: i = !1,
  width: n,
  options: c = [],
  className: l,
  value: d,
  onChange: f,
  onFocus: h,
  onBlur: p,
  getOptionLabel: m
}) {
  return /* @__PURE__ */ T(
    Za,
    {
      id: e,
      disablePortal: !0,
      disabled: r,
      disableClearable: !o,
      fullWidth: i,
      options: c,
      className: `papi-combo-box ${s ? "error" : ""} ${l ?? ""}`,
      value: d,
      onChange: f,
      onFocus: h,
      onBlur: p,
      getOptionLabel: m,
      renderInput: (g) => /* @__PURE__ */ T(
        Kn,
        {
          ...g,
          error: s,
          fullWidth: i,
          disabled: r,
          label: t,
          style: { width: n }
        }
      )
    }
  );
}
function ab({
  startChapter: e,
  endChapter: t,
  handleSelectStartChapter: r,
  handleSelectEndChapter: o,
  isDisabled: s,
  chapterCount: i
}) {
  const n = ri(
    () => Array.from({ length: i }, (d, f) => f + 1),
    [i]
  ), c = (d, f) => {
    r(f), f > t && o(f);
  }, l = (d, f) => {
    o(f), f < e && r(f);
  };
  return /* @__PURE__ */ Ce(Ga, { children: [
    /* @__PURE__ */ T(
      Oi,
      {
        className: "book-selection-chapter-form-label start",
        disabled: s,
        control: /* @__PURE__ */ T(
          Qs,
          {
            onChange: (d, f) => c(d, f),
            className: "book-selection-chapter",
            isClearable: !1,
            options: n,
            getOptionLabel: (d) => d.toString(),
            value: e,
            isDisabled: s
          },
          "start chapter"
        ),
        label: "Chapters",
        labelPlacement: "start"
      }
    ),
    /* @__PURE__ */ T(
      Oi,
      {
        className: "book-selection-chapter-form-label end",
        disabled: s,
        control: /* @__PURE__ */ T(
          Qs,
          {
            onChange: (d, f) => l(d, f),
            className: "book-selection-chapter",
            isClearable: !1,
            options: n,
            getOptionLabel: (d) => d.toString(),
            value: t,
            isDisabled: s
          },
          "end chapter"
        ),
        label: "to",
        labelPlacement: "start"
      }
    )
  ] });
}
var Sr = /* @__PURE__ */ ((e) => (e.After = "after", e.Before = "before", e.Above = "above", e.Below = "below", e))(Sr || {});
function Uf({
  id: e,
  isChecked: t,
  labelText: r = "",
  labelPosition: o = Sr.After,
  isIndeterminate: s = !1,
  isDefaultChecked: i,
  isDisabled: n = !1,
  hasError: c = !1,
  className: l,
  onChange: d
}) {
  const f = /* @__PURE__ */ T(
    el,
    {
      id: e,
      checked: t,
      indeterminate: s,
      defaultChecked: i,
      disabled: n,
      className: `papi-checkbox ${c ? "error" : ""} ${l ?? ""}`,
      onChange: d
    }
  );
  let h;
  if (r) {
    const p = o === Sr.Before || o === Sr.Above, m = /* @__PURE__ */ T("span", { className: `papi-checkbox-label ${c ? "error" : ""} ${l ?? ""}`, children: r }), g = o === Sr.Before || o === Sr.After, b = g ? m : /* @__PURE__ */ T("div", { children: m }), y = g ? f : /* @__PURE__ */ T("div", { children: f });
    h = /* @__PURE__ */ Ce(
      Qa,
      {
        className: `papi-checkbox ${o.toString()}`,
        disabled: n,
        error: c,
        children: [
          p && b,
          y,
          !p && b
        ]
      }
    );
  } else
    h = f;
  return h;
}
function jf(e) {
  const {
    onClick: t,
    name: r,
    hasAutoFocus: o = !1,
    className: s,
    isDense: i = !0,
    hasDisabledGutters: n = !1,
    hasDivider: c = !1,
    focusVisibleClassName: l,
    id: d,
    children: f
  } = e;
  return /* @__PURE__ */ T(
    tl,
    {
      autoFocus: o,
      className: s,
      dense: i,
      disableGutters: n,
      divider: c,
      focusVisibleClassName: l,
      onClick: t,
      id: d,
      children: r || f
    }
  );
}
function Wf({ commandHandler: e, name: t, className: r, items: o, id: s }) {
  return /* @__PURE__ */ Ce(Yn, { id: s, item: !0, xs: "auto", className: `papi-menu-column ${r ?? ""}`, children: [
    /* @__PURE__ */ T("h3", { className: `papi-menu ${r ?? ""}`, children: t }),
    o.map((i, n) => /* @__PURE__ */ T(
      jf,
      {
        className: `papi-menu-item ${i.className}`,
        onClick: () => {
          e(i);
        },
        ...i
      },
      n
    ))
  ] });
}
function qf({ commandHandler: e, className: t, columns: r, id: o }) {
  return /* @__PURE__ */ T(
    Yn,
    {
      container: !0,
      spacing: 0,
      className: `papi-multi-column-menu ${t ?? ""}`,
      columns: r.length,
      id: o,
      children: r.map((s, i) => /* @__PURE__ */ T(
        Wf,
        {
          commandHandler: e,
          name: s.name,
          className: t,
          items: s.items
        },
        i
      ))
    }
  );
}
function lb({
  id: e,
  label: t,
  isDisabled: r = !1,
  tooltip: o,
  isTooltipSuppressed: s = !1,
  adjustMarginToAlignToEdge: i = !1,
  size: n = "medium",
  className: c,
  onClick: l,
  children: d
}) {
  return /* @__PURE__ */ T(
    Xn,
    {
      id: e,
      disabled: r,
      edge: i,
      size: n,
      "aria-label": t,
      title: s ? void 0 : o ?? t,
      className: `papi-icon-button ${c ?? ""}`,
      onClick: l,
      children: d
    }
  );
}
var Kf = Object.defineProperty, Yf = (e, t, r) => t in e ? Kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, te = (e, t, r) => (Yf(e, typeof t != "symbol" ? t + "" : t, r), r);
const dr = [
  "GEN",
  "EXO",
  "LEV",
  "NUM",
  "DEU",
  "JOS",
  "JDG",
  "RUT",
  "1SA",
  "2SA",
  // 10
  "1KI",
  "2KI",
  "1CH",
  "2CH",
  "EZR",
  "NEH",
  "EST",
  "JOB",
  "PSA",
  "PRO",
  // 20
  "ECC",
  "SNG",
  "ISA",
  "JER",
  "LAM",
  "EZK",
  "DAN",
  "HOS",
  "JOL",
  "AMO",
  // 30
  "OBA",
  "JON",
  "MIC",
  "NAM",
  "HAB",
  "ZEP",
  "HAG",
  "ZEC",
  "MAL",
  "MAT",
  // 40
  "MRK",
  "LUK",
  "JHN",
  "ACT",
  "ROM",
  "1CO",
  "2CO",
  "GAL",
  "EPH",
  "PHP",
  // 50
  "COL",
  "1TH",
  "2TH",
  "1TI",
  "2TI",
  "TIT",
  "PHM",
  "HEB",
  "JAS",
  "1PE",
  // 60
  "2PE",
  "1JN",
  "2JN",
  "3JN",
  "JUD",
  "REV",
  "TOB",
  "JDT",
  "ESG",
  "WIS",
  // 70
  "SIR",
  "BAR",
  "LJE",
  "S3Y",
  "SUS",
  "BEL",
  "1MA",
  "2MA",
  "3MA",
  "4MA",
  // 80
  "1ES",
  "2ES",
  "MAN",
  "PS2",
  "ODA",
  "PSS",
  "JSA",
  // actual variant text for JOS, now in LXA text
  "JDB",
  // actual variant text for JDG, now in LXA text
  "TBS",
  // actual variant text for TOB, now in LXA text
  "SST",
  // actual variant text for SUS, now in LXA text // 90
  "DNT",
  // actual variant text for DAN, now in LXA text
  "BLT",
  // actual variant text for BEL, now in LXA text
  "XXA",
  "XXB",
  "XXC",
  "XXD",
  "XXE",
  "XXF",
  "XXG",
  "FRT",
  // 100
  "BAK",
  "OTH",
  "3ES",
  // Used previously but really should be 2ES
  "EZA",
  // Used to be called 4ES, but not actually in any known project
  "5EZ",
  // Used to be called 5ES, but not actually in any known project
  "6EZ",
  // Used to be called 6ES, but not actually in any known project
  "INT",
  "CNC",
  "GLO",
  "TDX",
  // 110
  "NDX",
  "DAG",
  "PS3",
  "2BA",
  "LBA",
  "JUB",
  "ENO",
  "1MQ",
  "2MQ",
  "3MQ",
  // 120
  "REP",
  "4BA",
  "LAO"
], vi = [
  "XXA",
  "XXB",
  "XXC",
  "XXD",
  "XXE",
  "XXF",
  "XXG",
  "FRT",
  "BAK",
  "OTH",
  "INT",
  "CNC",
  "GLO",
  "TDX",
  "NDX"
], Oa = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther (Hebrew)",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Songs",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel (Hebrew)",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
  "Tobit",
  "Judith",
  "Esther Greek",
  "Wisdom of Solomon",
  "Sirach (Ecclesiasticus)",
  "Baruch",
  "Letter of Jeremiah",
  "Song of 3 Young Men",
  "Susanna",
  "Bel and the Dragon",
  "1 Maccabees",
  "2 Maccabees",
  "3 Maccabees",
  "4 Maccabees",
  "1 Esdras (Greek)",
  "2 Esdras (Latin)",
  "Prayer of Manasseh",
  "Psalm 151",
  "Odes",
  "Psalms of Solomon",
  // WARNING, if you change the spelling of the *obsolete* tag be sure to update
  // IsObsolete routine
  "Joshua A. *obsolete*",
  "Judges B. *obsolete*",
  "Tobit S. *obsolete*",
  "Susanna Th. *obsolete*",
  "Daniel Th. *obsolete*",
  "Bel Th. *obsolete*",
  "Extra A",
  "Extra B",
  "Extra C",
  "Extra D",
  "Extra E",
  "Extra F",
  "Extra G",
  "Front Matter",
  "Back Matter",
  "Other Matter",
  "3 Ezra *obsolete*",
  "Apocalypse of Ezra",
  "5 Ezra (Latin Prologue)",
  "6 Ezra (Latin Epilogue)",
  "Introduction",
  "Concordance ",
  "Glossary ",
  "Topical Index",
  "Names Index",
  "Daniel Greek",
  "Psalms 152-155",
  "2 Baruch (Apocalypse)",
  "Letter of Baruch",
  "Jubilees",
  "Enoch",
  "1 Meqabyan",
  "2 Meqabyan",
  "3 Meqabyan",
  "Reproof (Proverbs 25-31)",
  "4 Baruch (Rest of Baruch)",
  "Laodiceans"
], gn = s0();
function jr(e, t = !0) {
  return t && (e = e.toUpperCase()), e in gn ? gn[e] : 0;
}
function yi(e) {
  return jr(e) > 0;
}
function Xf(e) {
  const t = typeof e == "string" ? jr(e) : e;
  return t >= 40 && t <= 66;
}
function Gf(e) {
  return (typeof e == "string" ? jr(e) : e) <= 39;
}
function Na(e) {
  return e <= 66;
}
function Jf(e) {
  const t = typeof e == "string" ? jr(e) : e;
  return Pa(t) && !Na(t);
}
function* Zf() {
  for (let e = 1; e <= dr.length; e++)
    yield e;
}
const Qf = 1, Ia = dr.length;
function e0() {
  return ["XXA", "XXB", "XXC", "XXD", "XXE", "XXF", "XXG"];
}
function wi(e, t = "***") {
  const r = e - 1;
  return r < 0 || r >= dr.length ? t : dr[r];
}
function Ra(e) {
  return e <= 0 || e > Ia ? "******" : Oa[e - 1];
}
function t0(e) {
  return Ra(jr(e));
}
function Pa(e) {
  const t = typeof e == "number" ? wi(e) : e;
  return yi(t) && !vi.includes(t);
}
function r0(e) {
  const t = typeof e == "number" ? wi(e) : e;
  return yi(t) && vi.includes(t);
}
function o0(e) {
  return Oa[e - 1].includes("*obsolete*");
}
function s0() {
  const e = {};
  for (let t = 0; t < dr.length; t++)
    e[dr[t]] = t + 1;
  return e;
}
const Rt = {
  allBookIds: dr,
  nonCanonicalIds: vi,
  bookIdToNumber: jr,
  isBookIdValid: yi,
  isBookNT: Xf,
  isBookOT: Gf,
  isBookOTNT: Na,
  isBookDC: Jf,
  allBookNumbers: Zf,
  firstBook: Qf,
  lastBook: Ia,
  extraBooks: e0,
  bookNumberToId: wi,
  bookNumberToEnglishName: Ra,
  bookIdToEnglishName: t0,
  isCanonical: Pa,
  isExtraMaterial: r0,
  isObsolete: o0
};
var Ut = /* @__PURE__ */ ((e) => (e[e.Unknown = 0] = "Unknown", e[e.Original = 1] = "Original", e[e.Septuagint = 2] = "Septuagint", e[e.Vulgate = 3] = "Vulgate", e[e.English = 4] = "English", e[e.RussianProtestant = 5] = "RussianProtestant", e[e.RussianOrthodox = 6] = "RussianOrthodox", e))(Ut || {});
const or = class {
  // private versInfo: Versification;
  constructor(e) {
    if (te(this, "name"), te(this, "fullPath"), te(this, "isPresent"), te(this, "hasVerseSegments"), te(this, "isCustomized"), te(this, "baseVersification"), te(this, "scriptureBooks"), te(this, "_type"), e != null)
      typeof e == "string" ? this.name = e : this._type = e;
    else
      throw new Error("Argument null");
  }
  get type() {
    return this._type;
  }
  equals(e) {
    return !e.type || !this.type ? !1 : e.type === this.type;
  }
};
let ut = or;
te(ut, "Original", new or(Ut.Original)), te(ut, "Septuagint", new or(Ut.Septuagint)), te(ut, "Vulgate", new or(Ut.Vulgate)), te(ut, "English", new or(Ut.English)), te(ut, "RussianProtestant", new or(Ut.RussianProtestant)), te(ut, "RussianOrthodox", new or(Ut.RussianOrthodox));
function bn(e, t) {
  const r = t[0];
  for (let o = 1; o < t.length; o++)
    e = e.split(t[o]).join(r);
  return e.split(r);
}
var Ma = /* @__PURE__ */ ((e) => (e[e.Valid = 0] = "Valid", e[e.UnknownVersification = 1] = "UnknownVersification", e[e.OutOfRange = 2] = "OutOfRange", e[e.VerseOutOfOrder = 3] = "VerseOutOfOrder", e[e.VerseRepeated = 4] = "VerseRepeated", e))(Ma || {});
const ee = class {
  constructor(t, r, o, s) {
    if (te(this, "firstChapter"), te(this, "lastChapter"), te(this, "lastVerse"), te(this, "hasSegmentsDefined"), te(this, "text"), te(this, "BBBCCCVVVS"), te(this, "longHashCode"), te(this, "versification"), te(this, "rtlMark", "‏"), te(this, "_bookNum", 0), te(this, "_chapterNum", 0), te(this, "_verseNum", 0), te(this, "_verse"), o == null && s == null)
      if (t != null && typeof t == "string") {
        const i = t, n = r != null && r instanceof ut ? r : void 0;
        this.setEmpty(n), this.parse(i);
      } else if (t != null && typeof t == "number") {
        const i = r != null && r instanceof ut ? r : void 0;
        this.setEmpty(i), this._verseNum = t % ee.chapterDigitShifter, this._chapterNum = Math.floor(
          t % ee.bookDigitShifter / ee.chapterDigitShifter
        ), this._bookNum = Math.floor(t / ee.bookDigitShifter);
      } else if (r == null)
        if (t != null && t instanceof ee) {
          const i = t;
          this._bookNum = i.bookNum, this._chapterNum = i.chapterNum, this._verseNum = i.verseNum, this._verse = i.verse, this.versification = i.versification;
        } else {
          if (t == null)
            return;
          const i = t instanceof ut ? t : ee.defaultVersification;
          this.setEmpty(i);
        }
      else
        throw new Error("VerseRef constructor not supported.");
    else if (t != null && r != null && o != null)
      if (typeof t == "string" && typeof r == "string" && typeof o == "string")
        this.setEmpty(s), this.updateInternal(t, r, o);
      else if (typeof t == "number" && typeof r == "number" && typeof o == "number")
        this._bookNum = t, this._chapterNum = r, this._verseNum = o, this.versification = s ?? ee.defaultVersification;
      else
        throw new Error("VerseRef constructor not supported.");
    else
      throw new Error("VerseRef constructor not supported.");
  }
  /**
   * @deprecated Will be removed in v2. Replace `VerseRef.parse('...')` with `new VerseRef('...')`
   * or refactor to use `VerseRef.tryParse('...')` which has a different return type.
   */
  static parse(t, r = ee.defaultVersification) {
    const o = new ee(r);
    return o.parse(t), o;
  }
  /**
   * Determines if the verse string is in a valid format (does not consider versification).
   */
  static isVerseParseable(t) {
    return t.length > 0 && "0123456789".includes(t[0]) && !t.endsWith(this.verseRangeSeparator) && !t.endsWith(this.verseSequenceIndicator);
  }
  /**
   * Tries to parse the specified string into a verse reference.
   * @param str - The string to attempt to parse.
   * @returns success: `true` if the specified string was successfully parsed, `false` otherwise.
   * @returns verseRef: The result of the parse if successful, or empty VerseRef if it failed
   */
  static tryParse(t) {
    let r;
    try {
      return r = ee.parse(t), { success: !0, verseRef: r };
    } catch (o) {
      if (o instanceof Zr)
        return r = new ee(), { success: !1, verseRef: r };
      throw o;
    }
  }
  /**
   * Gets the reference as a comparable integer where the book, chapter, and verse each occupy 3
   * digits.
   * @param bookNum - Book number (this is 1-based, not an index).
   * @param chapterNum - Chapter number.
   * @param verseNum - Verse number.
   * @returns The reference as a comparable integer where the book, chapter, and verse each occupy 3
   * digits.
   */
  static getBBBCCCVVV(t, r, o) {
    return t % ee.bcvMaxValue * ee.bookDigitShifter + (r >= 0 ? r % ee.bcvMaxValue * ee.chapterDigitShifter : 0) + (o >= 0 ? o % ee.bcvMaxValue : 0);
  }
  /**
   * Parses a verse string and gets the leading numeric portion as a number.
   * @param verseStr - verse string to parse
   * @returns true if the entire string could be parsed as a single, simple verse number (1-999);
   *    false if the verse string represented a verse bridge, contained segment letters, or was invalid
   */
  static tryGetVerseNum(t) {
    let r;
    if (!t)
      return r = -1, { success: !0, vNum: r };
    r = 0;
    let o;
    for (let s = 0; s < t.length; s++) {
      if (o = t[s], o < "0" || o > "9")
        return s === 0 && (r = -1), { success: !1, vNum: r };
      if (r = r * 10 + +o - +"0", r > ee.bcvMaxValue)
        return r = -1, { success: !1, vNum: r };
    }
    return { success: !0, vNum: r };
  }
  /**
   * Checks to see if a VerseRef hasn't been set - all values are the default.
   */
  get isDefault() {
    return this.bookNum === 0 && this.chapterNum === 0 && this.verseNum === 0 && this.versification == null;
  }
  /**
   * Gets whether the verse contains multiple verses.
   */
  get hasMultiple() {
    return this._verse != null && (this._verse.includes(ee.verseRangeSeparator) || this._verse.includes(ee.verseSequenceIndicator));
  }
  /**
   * Gets or sets the book of the reference. Book is the 3-letter abbreviation in capital letters,
   * e.g. `'MAT'`.
   */
  get book() {
    return Rt.bookNumberToId(this.bookNum, "");
  }
  set book(t) {
    this.bookNum = Rt.bookIdToNumber(t);
  }
  /**
   * Gets or sets the chapter of the reference,. e.g. `'3'`.
   */
  get chapter() {
    return this.isDefault || this._chapterNum < 0 ? "" : this._chapterNum.toString();
  }
  set chapter(t) {
    const r = +t;
    this._chapterNum = Number.isInteger(r) ? r : -1;
  }
  /**
   * Gets or sets the verse of the reference, including range, segments, and sequences, e.g. `'4'`,
   * or `'4b-5a, 7'`.
   */
  get verse() {
    return this._verse != null ? this._verse : this.isDefault || this._verseNum < 0 ? "" : this._verseNum.toString();
  }
  set verse(t) {
    const { success: r, vNum: o } = ee.tryGetVerseNum(t);
    this._verse = r ? void 0 : t.replace(this.rtlMark, ""), this._verseNum = o, !(this._verseNum >= 0) && ({ vNum: this._verseNum } = ee.tryGetVerseNum(this._verse));
  }
  /**
   * Get or set Book based on book number, e.g. `42`.
   */
  get bookNum() {
    return this._bookNum;
  }
  set bookNum(t) {
    if (t <= 0 || t > Rt.lastBook)
      throw new Zr(
        "BookNum must be greater than zero and less than or equal to last book"
      );
    this._bookNum = t;
  }
  /**
   * Gets or sets the chapter number, e.g. `3`. `-1` if not valid.
   */
  get chapterNum() {
    return this._chapterNum;
  }
  set chapterNum(t) {
    this.chapterNum = t;
  }
  /**
   * Gets or sets verse start number, e.g. `4`. `-1` if not valid.
   */
  get verseNum() {
    return this._verseNum;
  }
  set verseNum(t) {
    this._verseNum = t;
  }
  /**
   * String representing the versification (should ONLY be used for serialization/deserialization).
   *
   * @remarks This is for backwards compatibility when ScrVers was an enumeration.
   */
  get versificationStr() {
    var t;
    return (t = this.versification) == null ? void 0 : t.name;
  }
  set versificationStr(t) {
    this.versification = this.versification != null ? new ut(t) : void 0;
  }
  /**
   * Determines if the reference is valid.
   */
  get valid() {
    return this.validStatus === 0;
  }
  /**
   * Get the valid status for this reference.
   */
  get validStatus() {
    return this.validateVerse(ee.verseRangeSeparators, ee.verseSequenceIndicators);
  }
  /**
   * Gets the reference as a comparable integer where the book,
   * chapter, and verse each occupy three digits and the verse is 0.
   */
  get BBBCCC() {
    return ee.getBBBCCCVVV(this._bookNum, this._chapterNum, 0);
  }
  /**
   * Gets the reference as a comparable integer where the book,
   * chapter, and verse each occupy three digits. If verse is not null
   * (i.e., this reference represents a complex reference with verse
   * segments or bridge) this cannot be used for an exact comparison.
   */
  get BBBCCCVVV() {
    return ee.getBBBCCCVVV(this._bookNum, this._chapterNum, this._verseNum);
  }
  /**
   * Gets whether the verse is defined as an excluded verse in the versification.
   * Does not handle verse ranges.
   */
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get isExcluded() {
    return !1;
  }
  /**
   * Parses the reference in the specified string.
   * Optionally versification can follow reference as in GEN 3:11/4
   * Throw an exception if
   * - invalid book name
   * - chapter number is missing or not a number
   * - verse number is missing or does not start with a number
   * - versification is invalid
   * @param verseStr - string to parse e.g. 'MAT 3:11'
   */
  parse(t) {
    if (t = t.replace(this.rtlMark, ""), t.includes("/")) {
      const i = t.split("/");
      if (t = i[0], i.length > 1)
        try {
          const n = +i[1].trim();
          this.versification = new ut(Ut[n]);
        } catch {
          throw new Zr("Invalid reference : " + t);
        }
    }
    const r = t.trim().split(" ");
    if (r.length !== 2)
      throw new Zr("Invalid reference : " + t);
    const o = r[1].split(":"), s = +o[0];
    if (o.length !== 2 || Rt.bookIdToNumber(r[0]) === 0 || !Number.isInteger(s) || s < 0 || !ee.isVerseParseable(o[1]))
      throw new Zr("Invalid reference : " + t);
    this.updateInternal(r[0], o[0], o[1]);
  }
  /**
   * Simplifies this verse ref so that it has no bridging of verses or
   * verse segments like `'1a'`.
   */
  simplify() {
    this._verse = void 0;
  }
  /**
   * Makes a clone of the reference.
   *
   * @returns The cloned VerseRef.
   */
  clone() {
    return new ee(this);
  }
  toString() {
    const t = this.book;
    return t === "" ? "" : `${t} ${this.chapter}:${this.verse}`;
  }
  /**
   * Compares this `VerseRef` with supplied one.
   * @param verseRef - `VerseRef` to compare this one to.
   * @returns `true` if this `VerseRef` is equal to the supplied on, `false` otherwise.
   */
  equals(t) {
    return t._bookNum === this._bookNum && t._chapterNum === this._chapterNum && t._verseNum === this._verseNum && t._verse === this._verse && t.versification != null && this.versification != null && t.versification.equals(this.versification);
  }
  /**
   * Enumerate all individual verses contained in a VerseRef.
   * Verse ranges are indicated by "-" and consecutive verses by ","s.
   * Examples:
   * GEN 1:2 returns GEN 1:2
   * GEN 1:1a-3b,5 returns GEN 1:1a, GEN 1:2, GEN 1:3b, GEN 1:5
   * GEN 1:2a-2c returns //! ??????
   *
   * @param specifiedVersesOnly - if set to <c>true</c> return only verses that are
   * explicitly specified only, not verses within a range. Defaults to `false`.
   * @param verseRangeSeparators - Verse range separators.
   * Defaults to `VerseRef.verseRangeSeparators`.
   * @param verseSequenceSeparators - Verse sequence separators.
   * Defaults to `VerseRef.verseSequenceIndicators`.
   * @returns An array of all single verse references in this VerseRef.
   */
  allVerses(t = !1, r = ee.verseRangeSeparators, o = ee.verseSequenceIndicators) {
    if (this._verse == null || this.chapterNum <= 0)
      return [this.clone()];
    const s = [], i = bn(this._verse, o);
    for (const n of i.map((c) => bn(c, r))) {
      const c = this.clone();
      c.verse = n[0];
      const l = c.verseNum;
      if (s.push(c), n.length > 1) {
        const d = this.clone();
        if (d.verse = n[1], !t)
          for (let f = l + 1; f < d.verseNum; f++) {
            const h = new ee(
              this._bookNum,
              this._chapterNum,
              f,
              this.versification
            );
            this.isExcluded || s.push(h);
          }
        s.push(d);
      }
    }
    return s;
  }
  /**
   * Validates a verse number using the supplied separators rather than the defaults.
   */
  validateVerse(t, r) {
    if (!this.verse)
      return this.internalValid;
    let o = 0;
    for (const s of this.allVerses(!0, t, r)) {
      const i = s.internalValid;
      if (i !== 0)
        return i;
      const n = s.BBBCCCVVV;
      if (o > n)
        return 3;
      if (o === n)
        return 4;
      o = n;
    }
    return 0;
  }
  /**
   * Gets whether a single verse reference is valid.
   */
  get internalValid() {
    return this.versification == null ? 1 : this._bookNum <= 0 || this._bookNum > Rt.lastBook ? 2 : 0;
  }
  setEmpty(t = ee.defaultVersification) {
    this._bookNum = 0, this._chapterNum = -1, this._verse = void 0, this.versification = t;
  }
  updateInternal(t, r, o) {
    this.bookNum = Rt.bookIdToNumber(t), this.chapter = r, this.verse = o;
  }
};
let It = ee;
te(It, "defaultVersification", ut.English), te(It, "verseRangeSeparator", "-"), te(It, "verseSequenceIndicator", ","), te(It, "verseRangeSeparators", [ee.verseRangeSeparator]), te(It, "verseSequenceIndicators", [ee.verseSequenceIndicator]), te(It, "chapterDigitShifter", 1e3), te(It, "bookDigitShifter", ee.chapterDigitShifter * ee.chapterDigitShifter), te(It, "bcvMaxValue", ee.chapterDigitShifter - 1), /**
* The valid status of the VerseRef.
*/
te(It, "ValidStatusType", Ma);
class Zr extends Error {
}
function qo({
  variant: e = "outlined",
  id: t,
  isDisabled: r = !1,
  hasError: o = !1,
  isFullWidth: s = !1,
  helperText: i,
  label: n,
  placeholder: c,
  isRequired: l = !1,
  className: d,
  defaultValue: f,
  value: h,
  onChange: p,
  onFocus: m,
  onBlur: g
}) {
  return /* @__PURE__ */ T(
    Kn,
    {
      variant: e,
      id: t,
      disabled: r,
      error: o,
      fullWidth: s,
      helperText: i,
      label: n,
      placeholder: c,
      required: l,
      className: `papi-textfield ${d ?? ""}`,
      defaultValue: f,
      value: h,
      onChange: p,
      onFocus: m,
      onBlur: g
    }
  );
}
let Es;
const zs = () => (Es || (Es = Rt.allBookIds.map((e) => ({
  bookId: e,
  label: Rt.bookIdToEnglishName(e)
}))), Es);
function db({ scrRef: e, handleSubmit: t, id: r }) {
  const o = (l) => {
    t(l);
  }, s = (l, d) => {
    const h = { bookNum: Rt.bookIdToNumber(d.bookId), chapterNum: 1, verseNum: 1 };
    o(h);
  }, i = (l) => {
    t({ ...e, chapterNum: +l.target.value });
  }, n = (l) => {
    t({ ...e, verseNum: +l.target.value });
  }, c = ri(() => zs()[e.bookNum - 1], [e.bookNum]);
  return /* @__PURE__ */ Ce("span", { id: r, children: [
    /* @__PURE__ */ T(
      Qs,
      {
        title: "Book",
        className: "papi-ref-selector book",
        value: c,
        options: zs(),
        onChange: s,
        isClearable: !1,
        width: 200
      }
    ),
    /* @__PURE__ */ T(
      vr,
      {
        onClick: () => o(Ni(e, -1)),
        isDisabled: e.bookNum <= cl,
        children: "<"
      }
    ),
    /* @__PURE__ */ T(
      vr,
      {
        onClick: () => o(Ni(e, 1)),
        isDisabled: e.bookNum >= zs().length,
        children: ">"
      }
    ),
    /* @__PURE__ */ T(
      qo,
      {
        className: "papi-ref-selector chapter-verse",
        label: "Chapter",
        value: e.chapterNum,
        onChange: i
      }
    ),
    /* @__PURE__ */ T(
      vr,
      {
        onClick: () => t(Ii(e, -1)),
        isDisabled: e.chapterNum <= dl,
        children: "<"
      }
    ),
    /* @__PURE__ */ T(
      vr,
      {
        onClick: () => t(Ii(e, 1)),
        isDisabled: e.chapterNum >= ul(e.bookNum),
        children: ">"
      }
    ),
    /* @__PURE__ */ T(
      qo,
      {
        className: "papi-ref-selector chapter-verse",
        label: "Verse",
        value: e.verseNum,
        onChange: n
      }
    ),
    /* @__PURE__ */ T(
      vr,
      {
        onClick: () => t(Ri(e, -1)),
        isDisabled: e.verseNum <= hl,
        children: "<"
      }
    ),
    /* @__PURE__ */ T(vr, { onClick: () => t(Ri(e, 1)), children: ">" })
  ] });
}
function ub({ onSearch: e, placeholder: t, isFullWidth: r }) {
  const [o, s] = Er(""), i = (n) => {
    s(n), e(n);
  };
  return /* @__PURE__ */ T(rl, { component: "form", className: "search-bar-paper", children: /* @__PURE__ */ T(
    qo,
    {
      isFullWidth: r,
      className: "search-bar-input",
      placeholder: t,
      value: o,
      onChange: (n) => i(n.target.value)
    }
  ) });
}
function hb({
  id: e,
  isDisabled: t = !1,
  orientation: r = "horizontal",
  min: o = 0,
  max: s = 100,
  step: i = 1,
  showMarks: n = !1,
  defaultValue: c,
  value: l,
  valueLabelDisplay: d = "off",
  className: f,
  onChange: h,
  onChangeCommitted: p
}) {
  return /* @__PURE__ */ T(
    ol,
    {
      id: e,
      disabled: t,
      orientation: r,
      min: o,
      max: s,
      step: i,
      marks: n,
      defaultValue: c,
      value: l,
      valueLabelDisplay: d,
      className: `papi-slider ${r} ${f ?? ""}`,
      onChange: h,
      onChangeCommitted: p
    }
  );
}
function pb({
  autoHideDuration: e = void 0,
  id: t,
  isOpen: r = !1,
  className: o,
  onClose: s,
  anchorOrigin: i = { vertical: "bottom", horizontal: "left" },
  ContentProps: n,
  children: c
}) {
  const l = {
    action: (n == null ? void 0 : n.action) || c,
    message: n == null ? void 0 : n.message,
    className: o
  };
  return /* @__PURE__ */ T(
    sl,
    {
      autoHideDuration: e ?? void 0,
      open: r,
      onClose: s,
      anchorOrigin: i,
      id: t,
      ContentProps: l
    }
  );
}
function fb({
  id: e,
  isChecked: t,
  isDisabled: r = !1,
  hasError: o = !1,
  className: s,
  onChange: i
}) {
  return /* @__PURE__ */ T(
    il,
    {
      id: e,
      checked: t,
      disabled: r,
      className: `papi-switch ${o ? "error" : ""} ${s ?? ""}`,
      onChange: i
    }
  );
}
function vn({ onRowChange: e, row: t, column: r }) {
  const o = (s) => {
    e({ ...t, [r.key]: s.target.value });
  };
  return /* @__PURE__ */ T(qo, { defaultValue: t[r.key], onChange: o });
}
const i0 = ({ onChange: e, disabled: t, checked: r, ...o }) => /* @__PURE__ */ T(
  Uf,
  {
    ...o,
    isChecked: r,
    isDisabled: t,
    onChange: (i) => {
      e(i.target.checked, i.nativeEvent.shiftKey);
    }
  }
);
function mb({
  columns: e,
  sortColumns: t,
  onSortColumnsChange: r,
  onColumnResize: o,
  defaultColumnWidth: s,
  defaultColumnMinWidth: i,
  defaultColumnMaxWidth: n,
  defaultColumnSortable: c = !0,
  defaultColumnResizable: l = !0,
  rows: d,
  enableSelectColumn: f,
  selectColumnWidth: h = 50,
  rowKeyGetter: p,
  rowHeight: m = 35,
  headerRowHeight: g = 35,
  selectedRows: b,
  onSelectedRowsChange: y,
  onRowsChange: k,
  onCellClick: x,
  onCellDoubleClick: _,
  onCellContextMenu: w,
  onCellKeyDown: v,
  direction: z = "ltr",
  enableVirtualization: V = !0,
  onCopy: j,
  onPaste: M,
  onScroll: S,
  className: X
  // id,
}) {
  const Y = ri(() => {
    const ve = e.map((W) => typeof W.editable == "function" ? {
      ...W,
      editable: (ye) => !!W.editable(ye),
      renderEditCell: W.renderEditCell || vn
    } : W.editable && !W.renderEditCell ? { ...W, renderEditCell: vn } : W.renderEditCell && !W.editable ? { ...W, editable: !1 } : W);
    return f ? [{ ...fl, minWidth: h }, ...ve] : ve;
  }, [e, f, h]);
  return /* @__PURE__ */ T(
    pl,
    {
      columns: Y,
      defaultColumnOptions: {
        width: s,
        minWidth: i,
        maxWidth: n,
        sortable: c,
        resizable: l
      },
      sortColumns: t,
      onSortColumnsChange: r,
      onColumnResize: o,
      rows: d,
      rowKeyGetter: p,
      rowHeight: m,
      headerRowHeight: g,
      selectedRows: b,
      onSelectedRowsChange: y,
      onRowsChange: k,
      onCellClick: x,
      onCellDoubleClick: _,
      onCellContextMenu: w,
      onCellKeyDown: v,
      direction: z,
      enableVirtualization: V,
      onCopy: j,
      onPaste: M,
      onScroll: S,
      renderers: { renderCheckbox: i0 },
      className: X ?? "rdg-light"
    }
  );
}
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ae.apply(this, arguments);
}
function Wt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Da(e) {
  if (!Wt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Da(e[r]);
  }), t;
}
function xt(e, t, r = {
  clone: !0
}) {
  const o = r.clone ? ae({}, e) : e;
  return Wt(e) && Wt(t) && Object.keys(t).forEach((s) => {
    s !== "__proto__" && (Wt(t[s]) && s in e && Wt(e[s]) ? o[s] = xt(e[s], t[s], r) : r.clone ? o[s] = Wt(t[s]) ? Da(t[s]) : t[s] : o[s] = t[s]);
  }), o;
}
function n0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ei = { exports: {} }, No = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function a0() {
  if (yn)
    return pe;
  yn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, n = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function _(v) {
    if (typeof v == "object" && v !== null) {
      var z = v.$$typeof;
      switch (z) {
        case t:
          switch (v = v.type, v) {
            case l:
            case d:
            case o:
            case i:
            case s:
            case h:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case f:
                case g:
                case m:
                case n:
                  return v;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  function w(v) {
    return _(v) === d;
  }
  return pe.AsyncMode = l, pe.ConcurrentMode = d, pe.ContextConsumer = c, pe.ContextProvider = n, pe.Element = t, pe.ForwardRef = f, pe.Fragment = o, pe.Lazy = g, pe.Memo = m, pe.Portal = r, pe.Profiler = i, pe.StrictMode = s, pe.Suspense = h, pe.isAsyncMode = function(v) {
    return w(v) || _(v) === l;
  }, pe.isConcurrentMode = w, pe.isContextConsumer = function(v) {
    return _(v) === c;
  }, pe.isContextProvider = function(v) {
    return _(v) === n;
  }, pe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, pe.isForwardRef = function(v) {
    return _(v) === f;
  }, pe.isFragment = function(v) {
    return _(v) === o;
  }, pe.isLazy = function(v) {
    return _(v) === g;
  }, pe.isMemo = function(v) {
    return _(v) === m;
  }, pe.isPortal = function(v) {
    return _(v) === r;
  }, pe.isProfiler = function(v) {
    return _(v) === i;
  }, pe.isStrictMode = function(v) {
    return _(v) === s;
  }, pe.isSuspense = function(v) {
    return _(v) === h;
  }, pe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === o || v === d || v === i || v === s || v === h || v === p || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === m || v.$$typeof === n || v.$$typeof === c || v.$$typeof === f || v.$$typeof === y || v.$$typeof === k || v.$$typeof === x || v.$$typeof === b);
  }, pe.typeOf = _, pe;
}
var fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function l0() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, n = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function _(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === d || O === i || O === s || O === h || O === p || typeof O == "object" && O !== null && (O.$$typeof === g || O.$$typeof === m || O.$$typeof === n || O.$$typeof === c || O.$$typeof === f || O.$$typeof === y || O.$$typeof === k || O.$$typeof === x || O.$$typeof === b);
    }
    function w(O) {
      if (typeof O == "object" && O !== null) {
        var dt = O.$$typeof;
        switch (dt) {
          case t:
            var B = O.type;
            switch (B) {
              case l:
              case d:
              case o:
              case i:
              case s:
              case h:
                return B;
              default:
                var gr = B && B.$$typeof;
                switch (gr) {
                  case c:
                  case f:
                  case g:
                  case m:
                  case n:
                    return gr;
                  default:
                    return dt;
                }
            }
          case r:
            return dt;
        }
      }
    }
    var v = l, z = d, V = c, j = n, M = t, S = f, X = o, Y = g, ve = m, W = r, _e = i, ye = s, Be = h, Ot = !1;
    function mr(O) {
      return Ot || (Ot = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(O) || w(O) === l;
    }
    function $(O) {
      return w(O) === d;
    }
    function N(O) {
      return w(O) === c;
    }
    function Q(O) {
      return w(O) === n;
    }
    function J(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function q(O) {
      return w(O) === f;
    }
    function se(O) {
      return w(O) === o;
    }
    function G(O) {
      return w(O) === g;
    }
    function Z(O) {
      return w(O) === m;
    }
    function ie(O) {
      return w(O) === r;
    }
    function ce(O) {
      return w(O) === i;
    }
    function ne(O) {
      return w(O) === s;
    }
    function Ye(O) {
      return w(O) === h;
    }
    fe.AsyncMode = v, fe.ConcurrentMode = z, fe.ContextConsumer = V, fe.ContextProvider = j, fe.Element = M, fe.ForwardRef = S, fe.Fragment = X, fe.Lazy = Y, fe.Memo = ve, fe.Portal = W, fe.Profiler = _e, fe.StrictMode = ye, fe.Suspense = Be, fe.isAsyncMode = mr, fe.isConcurrentMode = $, fe.isContextConsumer = N, fe.isContextProvider = Q, fe.isElement = J, fe.isForwardRef = q, fe.isFragment = se, fe.isLazy = G, fe.isMemo = Z, fe.isPortal = ie, fe.isProfiler = ce, fe.isStrictMode = ne, fe.isSuspense = Ye, fe.isValidElementType = _, fe.typeOf = w;
  }()), fe;
}
var xn;
function La() {
  return xn || (xn = 1, process.env.NODE_ENV === "production" ? No.exports = a0() : No.exports = l0()), No.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var As, _n;
function c0() {
  if (_n)
    return As;
  _n = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function o(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var n = {}, c = 0; c < 10; c++)
        n["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(n).map(function(f) {
        return n[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return As = s() ? Object.assign : function(i, n) {
    for (var c, l = o(i), d, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var h in c)
        t.call(c, h) && (l[h] = c[h]);
      if (e) {
        d = e(c);
        for (var p = 0; p < d.length; p++)
          r.call(c, d[p]) && (l[d[p]] = c[d[p]]);
      }
    }
    return l;
  }, As;
}
var Ts, kn;
function xi() {
  if (kn)
    return Ts;
  kn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ts = e, Ts;
}
var Os, Cn;
function Ba() {
  return Cn || (Cn = 1, Os = Function.call.bind(Object.prototype.hasOwnProperty)), Os;
}
var Ns, Sn;
function d0() {
  if (Sn)
    return Ns;
  Sn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = xi(), r = {}, o = Ba();
    e = function(i) {
      var n = "Warning: " + i;
      typeof console < "u" && console.error(n);
      try {
        throw new Error(n);
      } catch {
      }
    };
  }
  function s(i, n, c, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (o(i, f)) {
          var h;
          try {
            if (typeof i[f] != "function") {
              var p = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            h = i[f](n, f, l, c, null, t);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var m = d ? d() : "";
            e(
              "Failed " + c + " type: " + h.message + (m ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ns = s, Ns;
}
var Is, $n;
function u0() {
  if ($n)
    return Is;
  $n = 1;
  var e = La(), t = c0(), r = xi(), o = Ba(), s = d0(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function n() {
    return null;
  }
  return Is = function(c, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h($) {
      var N = $ && (d && $[d] || $[f]);
      if (typeof N == "function")
        return N;
    }
    var p = "<<anonymous>>", m = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: x(),
      arrayOf: _,
      element: w(),
      elementType: v(),
      instanceOf: z,
      node: S(),
      objectOf: j,
      oneOf: V,
      oneOfType: M,
      shape: Y,
      exact: ve
    };
    function g($, N) {
      return $ === N ? $ !== 0 || 1 / $ === 1 / N : $ !== $ && N !== N;
    }
    function b($, N) {
      this.message = $, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y($) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, Q = 0;
      function J(se, G, Z, ie, ce, ne, Ye) {
        if (ie = ie || p, ne = ne || Z, Ye !== r) {
          if (l) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var dt = ie + ":" + Z;
            !N[dt] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[dt] = !0, Q++);
          }
        }
        return G[Z] == null ? se ? G[Z] === null ? new b("The " + ce + " `" + ne + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new b("The " + ce + " `" + ne + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : $(G, Z, ie, ce, ne);
      }
      var q = J.bind(null, !1);
      return q.isRequired = J.bind(null, !0), q;
    }
    function k($) {
      function N(Q, J, q, se, G, Z) {
        var ie = Q[J], ce = ye(ie);
        if (ce !== $) {
          var ne = Be(ie);
          return new b(
            "Invalid " + se + " `" + G + "` of type " + ("`" + ne + "` supplied to `" + q + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return y(N);
    }
    function x() {
      return y(n);
    }
    function _($) {
      function N(Q, J, q, se, G) {
        if (typeof $ != "function")
          return new b("Property `" + G + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var Z = Q[J];
        if (!Array.isArray(Z)) {
          var ie = ye(Z);
          return new b("Invalid " + se + " `" + G + "` of type " + ("`" + ie + "` supplied to `" + q + "`, expected an array."));
        }
        for (var ce = 0; ce < Z.length; ce++) {
          var ne = $(Z, ce, q, se, G + "[" + ce + "]", r);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return y(N);
    }
    function w() {
      function $(N, Q, J, q, se) {
        var G = N[Q];
        if (!c(G)) {
          var Z = ye(G);
          return new b("Invalid " + q + " `" + se + "` of type " + ("`" + Z + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y($);
    }
    function v() {
      function $(N, Q, J, q, se) {
        var G = N[Q];
        if (!e.isValidElementType(G)) {
          var Z = ye(G);
          return new b("Invalid " + q + " `" + se + "` of type " + ("`" + Z + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y($);
    }
    function z($) {
      function N(Q, J, q, se, G) {
        if (!(Q[J] instanceof $)) {
          var Z = $.name || p, ie = mr(Q[J]);
          return new b("Invalid " + se + " `" + G + "` of type " + ("`" + ie + "` supplied to `" + q + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return y(N);
    }
    function V($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), n;
      function N(Q, J, q, se, G) {
        for (var Z = Q[J], ie = 0; ie < $.length; ie++)
          if (g(Z, $[ie]))
            return null;
        var ce = JSON.stringify($, function(Ye, O) {
          var dt = Be(O);
          return dt === "symbol" ? String(O) : O;
        });
        return new b("Invalid " + se + " `" + G + "` of value `" + String(Z) + "` " + ("supplied to `" + q + "`, expected one of " + ce + "."));
      }
      return y(N);
    }
    function j($) {
      function N(Q, J, q, se, G) {
        if (typeof $ != "function")
          return new b("Property `" + G + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var Z = Q[J], ie = ye(Z);
        if (ie !== "object")
          return new b("Invalid " + se + " `" + G + "` of type " + ("`" + ie + "` supplied to `" + q + "`, expected an object."));
        for (var ce in Z)
          if (o(Z, ce)) {
            var ne = $(Z, ce, q, se, G + "." + ce, r);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return y(N);
    }
    function M($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), n;
      for (var N = 0; N < $.length; N++) {
        var Q = $[N];
        if (typeof Q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ot(Q) + " at index " + N + "."
          ), n;
      }
      function J(q, se, G, Z, ie) {
        for (var ce = [], ne = 0; ne < $.length; ne++) {
          var Ye = $[ne], O = Ye(q, se, G, Z, ie, r);
          if (O == null)
            return null;
          O.data && o(O.data, "expectedType") && ce.push(O.data.expectedType);
        }
        var dt = ce.length > 0 ? ", expected one of type [" + ce.join(", ") + "]" : "";
        return new b("Invalid " + Z + " `" + ie + "` supplied to " + ("`" + G + "`" + dt + "."));
      }
      return y(J);
    }
    function S() {
      function $(N, Q, J, q, se) {
        return W(N[Q]) ? null : new b("Invalid " + q + " `" + se + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return y($);
    }
    function X($, N, Q, J, q) {
      return new b(
        ($ || "React class") + ": " + N + " type `" + Q + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function Y($) {
      function N(Q, J, q, se, G) {
        var Z = Q[J], ie = ye(Z);
        if (ie !== "object")
          return new b("Invalid " + se + " `" + G + "` of type `" + ie + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var ce in $) {
          var ne = $[ce];
          if (typeof ne != "function")
            return X(q, se, G, ce, Be(ne));
          var Ye = ne(Z, ce, q, se, G + "." + ce, r);
          if (Ye)
            return Ye;
        }
        return null;
      }
      return y(N);
    }
    function ve($) {
      function N(Q, J, q, se, G) {
        var Z = Q[J], ie = ye(Z);
        if (ie !== "object")
          return new b("Invalid " + se + " `" + G + "` of type `" + ie + "` " + ("supplied to `" + q + "`, expected `object`."));
        var ce = t({}, Q[J], $);
        for (var ne in ce) {
          var Ye = $[ne];
          if (o($, ne) && typeof Ye != "function")
            return X(q, se, G, ne, Be(Ye));
          if (!Ye)
            return new b(
              "Invalid " + se + " `" + G + "` key `" + ne + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(Q[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var O = Ye(Z, ne, q, se, G + "." + ne, r);
          if (O)
            return O;
        }
        return null;
      }
      return y(N);
    }
    function W($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(W);
          if ($ === null || c($))
            return !0;
          var N = h($);
          if (N) {
            var Q = N.call($), J;
            if (N !== $.entries) {
              for (; !(J = Q.next()).done; )
                if (!W(J.value))
                  return !1;
            } else
              for (; !(J = Q.next()).done; ) {
                var q = J.value;
                if (q && !W(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _e($, N) {
      return $ === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function ye($) {
      var N = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : _e(N, $) ? "symbol" : N;
    }
    function Be($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var N = ye($);
      if (N === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function Ot($) {
      var N = Be($);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function mr($) {
      return !$.constructor || !$.constructor.name ? p : $.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, Is;
}
var Rs, En;
function h0() {
  if (En)
    return Rs;
  En = 1;
  var e = xi();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Rs = function() {
    function o(n, c, l, d, f, h) {
      if (h !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    o.isRequired = o;
    function s() {
      return o;
    }
    var i = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: s,
      element: o,
      elementType: o,
      instanceOf: s,
      node: o,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Rs;
}
if (process.env.NODE_ENV !== "production") {
  var p0 = La(), f0 = !0;
  ei.exports = u0()(p0.isElement, f0);
} else
  ei.exports = h0()();
var m0 = ei.exports;
const we = /* @__PURE__ */ n0(m0);
function Rr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var ti = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function g0() {
  if (zn)
    return me;
  zn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), n = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var k = y.$$typeof;
      switch (k) {
        case e:
          switch (y = y.type, y) {
            case r:
            case s:
            case o:
            case d:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case n:
                case l:
                case p:
                case h:
                case i:
                  return y;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  return me.ContextConsumer = n, me.ContextProvider = i, me.Element = e, me.ForwardRef = l, me.Fragment = r, me.Lazy = p, me.Memo = h, me.Portal = t, me.Profiler = s, me.StrictMode = o, me.Suspense = d, me.SuspenseList = f, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(y) {
    return b(y) === n;
  }, me.isContextProvider = function(y) {
    return b(y) === i;
  }, me.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, me.isForwardRef = function(y) {
    return b(y) === l;
  }, me.isFragment = function(y) {
    return b(y) === r;
  }, me.isLazy = function(y) {
    return b(y) === p;
  }, me.isMemo = function(y) {
    return b(y) === h;
  }, me.isPortal = function(y) {
    return b(y) === t;
  }, me.isProfiler = function(y) {
    return b(y) === s;
  }, me.isStrictMode = function(y) {
    return b(y) === o;
  }, me.isSuspense = function(y) {
    return b(y) === d;
  }, me.isSuspenseList = function(y) {
    return b(y) === f;
  }, me.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === s || y === o || y === d || y === f || y === m || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === h || y.$$typeof === i || y.$$typeof === n || y.$$typeof === l || y.$$typeof === g || y.getModuleId !== void 0);
  }, me.typeOf = b, me;
}
var ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function b0() {
  return An || (An = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), n = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = !1, b = !1, y = !1, k = !1, x = !1, _;
    _ = Symbol.for("react.module.reference");
    function w(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === s || x || B === o || B === d || B === f || k || B === m || g || b || y || typeof B == "object" && B !== null && (B.$$typeof === p || B.$$typeof === h || B.$$typeof === i || B.$$typeof === n || B.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === _ || B.getModuleId !== void 0));
    }
    function v(B) {
      if (typeof B == "object" && B !== null) {
        var gr = B.$$typeof;
        switch (gr) {
          case e:
            var Co = B.type;
            switch (Co) {
              case r:
              case s:
              case o:
              case d:
              case f:
                return Co;
              default:
                var Ti = Co && Co.$$typeof;
                switch (Ti) {
                  case c:
                  case n:
                  case l:
                  case p:
                  case h:
                  case i:
                    return Ti;
                  default:
                    return gr;
                }
            }
          case t:
            return gr;
        }
      }
    }
    var z = n, V = i, j = e, M = l, S = r, X = p, Y = h, ve = t, W = s, _e = o, ye = d, Be = f, Ot = !1, mr = !1;
    function $(B) {
      return Ot || (Ot = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(B) {
      return mr || (mr = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(B) {
      return v(B) === n;
    }
    function J(B) {
      return v(B) === i;
    }
    function q(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function se(B) {
      return v(B) === l;
    }
    function G(B) {
      return v(B) === r;
    }
    function Z(B) {
      return v(B) === p;
    }
    function ie(B) {
      return v(B) === h;
    }
    function ce(B) {
      return v(B) === t;
    }
    function ne(B) {
      return v(B) === s;
    }
    function Ye(B) {
      return v(B) === o;
    }
    function O(B) {
      return v(B) === d;
    }
    function dt(B) {
      return v(B) === f;
    }
    ge.ContextConsumer = z, ge.ContextProvider = V, ge.Element = j, ge.ForwardRef = M, ge.Fragment = S, ge.Lazy = X, ge.Memo = Y, ge.Portal = ve, ge.Profiler = W, ge.StrictMode = _e, ge.Suspense = ye, ge.SuspenseList = Be, ge.isAsyncMode = $, ge.isConcurrentMode = N, ge.isContextConsumer = Q, ge.isContextProvider = J, ge.isElement = q, ge.isForwardRef = se, ge.isFragment = G, ge.isLazy = Z, ge.isMemo = ie, ge.isPortal = ce, ge.isProfiler = ne, ge.isStrictMode = Ye, ge.isSuspense = O, ge.isSuspenseList = dt, ge.isValidElementType = w, ge.typeOf = v;
  }()), ge;
}
process.env.NODE_ENV === "production" ? ti.exports = g0() : ti.exports = b0();
var Tn = ti.exports;
const v0 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function y0(e) {
  const t = `${e}`.match(v0);
  return t && t[1] || "";
}
function Va(e, t = "") {
  return e.displayName || e.name || y0(e) || t;
}
function On(e, t, r) {
  const o = Va(t);
  return e.displayName || (o !== "" ? `${r}(${o})` : r);
}
function w0(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Va(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Tn.ForwardRef:
          return On(e, e.render, "ForwardRef");
        case Tn.Memo:
          return On(e, e.type, "memo");
        default:
          return;
      }
  }
}
function At(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Rr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Fa(e, t) {
  const r = ae({}, t);
  return Object.keys(e).forEach((o) => {
    if (o.toString().match(/^(components|slots)$/))
      r[o] = ae({}, e[o], r[o]);
    else if (o.toString().match(/^(componentsProps|slotProps)$/)) {
      const s = e[o] || {}, i = t[o];
      r[o] = {}, !i || !Object.keys(i) ? r[o] = s : !s || !Object.keys(s) ? r[o] = i : (r[o] = ae({}, i), Object.keys(s).forEach((n) => {
        r[o][n] = Fa(s[n], i[n]);
      }));
    } else
      r[o] === void 0 && (r[o] = e[o]);
  }), r;
}
function x0(e, t, r = void 0) {
  const o = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (s) => {
      o[s] = e[s].reduce((i, n) => {
        if (n) {
          const c = t(n);
          c !== "" && i.push(c), r && r[n] && i.push(r[n]);
        }
        return i;
      }, []).join(" ");
    }
  ), o;
}
const Nn = (e) => e, _0 = () => {
  let e = Nn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Nn;
    }
  };
}, k0 = _0(), C0 = k0, S0 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function _i(e, t, r = "Mui") {
  const o = S0[t];
  return o ? `${r}-${o}` : `${C0.generate(e)}-${t}`;
}
function $0(e, t, r = "Mui") {
  const o = {};
  return t.forEach((s) => {
    o[s] = _i(e, s, r);
  }), o;
}
function E0(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Ht(e, t) {
  if (e == null)
    return {};
  var r = {}, o = Object.keys(e), s, i;
  for (i = 0; i < o.length; i++)
    s = o[i], !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
function Ha(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Ha(e[t])) && (o && (o += " "), o += r);
    } else
      for (r in e)
        e[r] && (o && (o += " "), o += r);
  return o;
}
function z0() {
  for (var e, t, r = 0, o = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Ha(e)) && (o && (o += " "), o += t);
  return o;
}
const A0 = ["values", "unit", "step"], T0 = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, o) => r.val - o.val), t.reduce((r, o) => ae({}, r, {
    [o.key]: o.val
  }), {});
};
function O0(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: o = 5
  } = e, s = Ht(e, A0), i = T0(t), n = Object.keys(i);
  function c(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - o / 100}${r})`;
  }
  function d(p, m) {
    const g = n.indexOf(m);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(g !== -1 && typeof t[n[g]] == "number" ? t[n[g]] : m) - o / 100}${r})`;
  }
  function f(p) {
    return n.indexOf(p) + 1 < n.length ? d(p, n[n.indexOf(p) + 1]) : c(p);
  }
  function h(p) {
    const m = n.indexOf(p);
    return m === 0 ? c(n[1]) : m === n.length - 1 ? l(n[m]) : d(p, n[n.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return ae({
    keys: n,
    values: i,
    up: c,
    down: l,
    between: d,
    only: f,
    not: h,
    unit: r
  }, s);
}
const N0 = {
  borderRadius: 4
}, I0 = N0, R0 = process.env.NODE_ENV !== "production" ? we.oneOfType([we.number, we.string, we.object, we.array]) : {}, tr = R0;
function lo(e, t) {
  return t ? xt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ki = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, In = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ki[e]}px)`
};
function Mt(e, t, r) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const i = o.breakpoints || In;
    return t.reduce((n, c, l) => (n[i.up(i.keys[l])] = r(t[l]), n), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || In;
    return Object.keys(t).reduce((n, c) => {
      if (Object.keys(i.values || ki).indexOf(c) !== -1) {
        const l = i.up(c);
        n[l] = r(t[c], c);
      } else {
        const l = c;
        n[l] = t[l];
      }
      return n;
    }, {});
  }
  return r(t);
}
function P0(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((o, s) => {
    const i = e.up(s);
    return o[i] = {}, o;
  }, {})) || {};
}
function M0(e, t) {
  return e.reduce((r, o) => {
    const s = r[o];
    return (!s || Object.keys(s).length === 0) && delete r[o], r;
  }, t);
}
function ss(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const o = `vars.${t}`.split(".").reduce((s, i) => s && s[i] ? s[i] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, s) => o && o[s] != null ? o[s] : null, e);
}
function Ko(e, t, r, o = r) {
  let s;
  return typeof e == "function" ? s = e(r) : Array.isArray(e) ? s = e[r] || o : s = ss(e, r) || o, t && (s = t(s, o, e)), s;
}
function Re(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: o,
    transform: s
  } = e, i = (n) => {
    if (n[t] == null)
      return null;
    const c = n[t], l = n.theme, d = ss(l, o) || {};
    return Mt(n, c, (h) => {
      let p = Ko(d, s, h);
      return h === p && typeof h == "string" && (p = Ko(d, s, `${t}${h === "default" ? "" : At(h)}`, h)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: tr
  } : {}, i.filterProps = [t], i;
}
function D0(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const L0 = {
  m: "margin",
  p: "padding"
}, B0 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Rn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, V0 = D0((e) => {
  if (e.length > 2)
    if (Rn[e])
      e = Rn[e];
    else
      return [e];
  const [t, r] = e.split(""), o = L0[t], s = B0[r] || "";
  return Array.isArray(s) ? s.map((i) => o + i) : [o + s];
}), is = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ns = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], F0 = [...is, ...ns];
function _o(e, t, r, o) {
  var s;
  const i = (s = ss(e, t, !1)) != null ? s : r;
  return typeof i == "number" ? (n) => typeof n == "string" ? n : (process.env.NODE_ENV !== "production" && typeof n != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${n}.`), i * n) : Array.isArray(i) ? (n) => typeof n == "string" ? n : (process.env.NODE_ENV !== "production" && (Number.isInteger(n) ? n > i.length - 1 && console.error([`MUI: The value provided (${n}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${n} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[n]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ua(e) {
  return _o(e, "spacing", 8, "spacing");
}
function ko(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), o = e(r);
  return t >= 0 ? o : typeof o == "number" ? -o : `-${o}`;
}
function H0(e, t) {
  return (r) => e.reduce((o, s) => (o[s] = ko(t, r), o), {});
}
function U0(e, t, r, o) {
  if (t.indexOf(r) === -1)
    return null;
  const s = V0(r), i = H0(s, o), n = e[r];
  return Mt(e, n, i);
}
function ja(e, t) {
  const r = Ua(e.theme);
  return Object.keys(e).map((o) => U0(e, t, o, r)).reduce(lo, {});
}
function Ae(e) {
  return ja(e, is);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? is.reduce((e, t) => (e[t] = tr, e), {}) : {};
Ae.filterProps = is;
function Te(e) {
  return ja(e, ns);
}
Te.propTypes = process.env.NODE_ENV !== "production" ? ns.reduce((e, t) => (e[t] = tr, e), {}) : {};
Te.filterProps = ns;
process.env.NODE_ENV !== "production" && F0.reduce((e, t) => (e[t] = tr, e), {});
function j0(e = 8) {
  if (e.mui)
    return e;
  const t = Ua({
    spacing: e
  }), r = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((i) => {
    const n = t(i);
    return typeof n == "number" ? `${n}px` : n;
  }).join(" "));
  return r.mui = !0, r;
}
function as(...e) {
  const t = e.reduce((o, s) => (s.filterProps.forEach((i) => {
    o[i] = s;
  }), o), {}), r = (o) => Object.keys(o).reduce((s, i) => t[i] ? lo(s, t[i](o)) : s, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, s) => Object.assign(o, s.propTypes), {}) : {}, r.filterProps = e.reduce((o, s) => o.concat(s.filterProps), []), r;
}
function ht(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function yt(e, t) {
  return Re({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const W0 = yt("border", ht), q0 = yt("borderTop", ht), K0 = yt("borderRight", ht), Y0 = yt("borderBottom", ht), X0 = yt("borderLeft", ht), G0 = yt("borderColor"), J0 = yt("borderTopColor"), Z0 = yt("borderRightColor"), Q0 = yt("borderBottomColor"), em = yt("borderLeftColor"), tm = yt("outline", ht), rm = yt("outlineColor"), ls = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = _o(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (o) => ({
      borderRadius: ko(t, o)
    });
    return Mt(e, e.borderRadius, r);
  }
  return null;
};
ls.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: tr
} : {};
ls.filterProps = ["borderRadius"];
as(W0, q0, K0, Y0, X0, G0, J0, Z0, Q0, em, ls, tm, rm);
const cs = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = _o(e.theme, "spacing", 8, "gap"), r = (o) => ({
      gap: ko(t, o)
    });
    return Mt(e, e.gap, r);
  }
  return null;
};
cs.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: tr
} : {};
cs.filterProps = ["gap"];
const ds = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = _o(e.theme, "spacing", 8, "columnGap"), r = (o) => ({
      columnGap: ko(t, o)
    });
    return Mt(e, e.columnGap, r);
  }
  return null;
};
ds.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: tr
} : {};
ds.filterProps = ["columnGap"];
const us = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = _o(e.theme, "spacing", 8, "rowGap"), r = (o) => ({
      rowGap: ko(t, o)
    });
    return Mt(e, e.rowGap, r);
  }
  return null;
};
us.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: tr
} : {};
us.filterProps = ["rowGap"];
const om = Re({
  prop: "gridColumn"
}), sm = Re({
  prop: "gridRow"
}), im = Re({
  prop: "gridAutoFlow"
}), nm = Re({
  prop: "gridAutoColumns"
}), am = Re({
  prop: "gridAutoRows"
}), lm = Re({
  prop: "gridTemplateColumns"
}), cm = Re({
  prop: "gridTemplateRows"
}), dm = Re({
  prop: "gridTemplateAreas"
}), um = Re({
  prop: "gridArea"
});
as(cs, ds, us, om, sm, im, nm, am, lm, cm, dm, um);
function Tr(e, t) {
  return t === "grey" ? t : e;
}
const hm = Re({
  prop: "color",
  themeKey: "palette",
  transform: Tr
}), pm = Re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tr
}), fm = Re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tr
});
as(hm, pm, fm);
function nt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const mm = Re({
  prop: "width",
  transform: nt
}), Ci = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, s;
      const i = ((o = e.theme) == null || (o = o.breakpoints) == null || (o = o.values) == null ? void 0 : o[r]) || ki[r];
      return i ? ((s = e.theme) == null || (s = s.breakpoints) == null ? void 0 : s.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: nt(r)
      };
    };
    return Mt(e, e.maxWidth, t);
  }
  return null;
};
Ci.filterProps = ["maxWidth"];
const gm = Re({
  prop: "minWidth",
  transform: nt
}), bm = Re({
  prop: "height",
  transform: nt
}), vm = Re({
  prop: "maxHeight",
  transform: nt
}), ym = Re({
  prop: "minHeight",
  transform: nt
});
Re({
  prop: "size",
  cssProperty: "width",
  transform: nt
});
Re({
  prop: "size",
  cssProperty: "height",
  transform: nt
});
const wm = Re({
  prop: "boxSizing"
});
as(mm, Ci, gm, bm, vm, ym, wm);
const xm = {
  // borders
  border: {
    themeKey: "borders",
    transform: ht
  },
  borderTop: {
    themeKey: "borders",
    transform: ht
  },
  borderRight: {
    themeKey: "borders",
    transform: ht
  },
  borderBottom: {
    themeKey: "borders",
    transform: ht
  },
  borderLeft: {
    themeKey: "borders",
    transform: ht
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ht
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ls
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Tr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Tr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Tr
  },
  // spacing
  p: {
    style: Te
  },
  pt: {
    style: Te
  },
  pr: {
    style: Te
  },
  pb: {
    style: Te
  },
  pl: {
    style: Te
  },
  px: {
    style: Te
  },
  py: {
    style: Te
  },
  padding: {
    style: Te
  },
  paddingTop: {
    style: Te
  },
  paddingRight: {
    style: Te
  },
  paddingBottom: {
    style: Te
  },
  paddingLeft: {
    style: Te
  },
  paddingX: {
    style: Te
  },
  paddingY: {
    style: Te
  },
  paddingInline: {
    style: Te
  },
  paddingInlineStart: {
    style: Te
  },
  paddingInlineEnd: {
    style: Te
  },
  paddingBlock: {
    style: Te
  },
  paddingBlockStart: {
    style: Te
  },
  paddingBlockEnd: {
    style: Te
  },
  m: {
    style: Ae
  },
  mt: {
    style: Ae
  },
  mr: {
    style: Ae
  },
  mb: {
    style: Ae
  },
  ml: {
    style: Ae
  },
  mx: {
    style: Ae
  },
  my: {
    style: Ae
  },
  margin: {
    style: Ae
  },
  marginTop: {
    style: Ae
  },
  marginRight: {
    style: Ae
  },
  marginBottom: {
    style: Ae
  },
  marginLeft: {
    style: Ae
  },
  marginX: {
    style: Ae
  },
  marginY: {
    style: Ae
  },
  marginInline: {
    style: Ae
  },
  marginInlineStart: {
    style: Ae
  },
  marginInlineEnd: {
    style: Ae
  },
  marginBlock: {
    style: Ae
  },
  marginBlockStart: {
    style: Ae
  },
  marginBlockEnd: {
    style: Ae
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: cs
  },
  rowGap: {
    style: us
  },
  columnGap: {
    style: ds
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: nt
  },
  maxWidth: {
    style: Ci
  },
  minWidth: {
    transform: nt
  },
  height: {
    transform: nt
  },
  maxHeight: {
    transform: nt
  },
  minHeight: {
    transform: nt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Si = xm;
function _m(...e) {
  const t = e.reduce((o, s) => o.concat(Object.keys(s)), []), r = new Set(t);
  return e.every((o) => r.size === Object.keys(o).length);
}
function km(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cm() {
  function e(r, o, s, i) {
    const n = {
      [r]: o,
      theme: s
    }, c = i[r];
    if (!c)
      return {
        [r]: o
      };
    const {
      cssProperty: l = r,
      themeKey: d,
      transform: f,
      style: h
    } = c;
    if (o == null)
      return null;
    if (d === "typography" && o === "inherit")
      return {
        [r]: o
      };
    const p = ss(s, d) || {};
    return h ? h(n) : Mt(n, o, (g) => {
      let b = Ko(p, f, g);
      return g === b && typeof g == "string" && (b = Ko(p, f, `${r}${g === "default" ? "" : At(g)}`, g)), l === !1 ? b : {
        [l]: b
      };
    });
  }
  function t(r) {
    var o;
    const {
      sx: s,
      theme: i = {}
    } = r || {};
    if (!s)
      return null;
    const n = (o = i.unstable_sxConfig) != null ? o : Si;
    function c(l) {
      let d = l;
      if (typeof l == "function")
        d = l(i);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const f = P0(i.breakpoints), h = Object.keys(f);
      let p = f;
      return Object.keys(d).forEach((m) => {
        const g = km(d[m], i);
        if (g != null)
          if (typeof g == "object")
            if (n[m])
              p = lo(p, e(m, g, i, n));
            else {
              const b = Mt({
                theme: i
              }, g, (y) => ({
                [m]: y
              }));
              _m(b, g) ? p[m] = t({
                sx: g,
                theme: i
              }) : p = lo(p, b);
            }
          else
            p = lo(p, e(m, g, i, n));
      }), M0(h, p);
    }
    return Array.isArray(s) ? s.map(c) : c(s);
  }
  return t;
}
const Wa = Cm();
Wa.filterProps = ["sx"];
const $i = Wa, Sm = ["breakpoints", "palette", "spacing", "shape"];
function Ei(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: o = {},
    spacing: s,
    shape: i = {}
  } = e, n = Ht(e, Sm), c = O0(r), l = j0(s);
  let d = xt({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ae({
      mode: "light"
    }, o),
    spacing: l,
    shape: ae({}, I0, i)
  }, n);
  return d = t.reduce((f, h) => xt(f, h), d), d.unstable_sxConfig = ae({}, Si, n == null ? void 0 : n.unstable_sxConfig), d.unstable_sx = function(h) {
    return $i({
      sx: h,
      theme: this
    });
  }, d;
}
function $m(e) {
  return Object.keys(e).length === 0;
}
function Em(e = null) {
  const t = I.useContext(gl);
  return !t || $m(t) ? e : t;
}
const zm = Ei();
function Am(e = zm) {
  return Em(e);
}
const Tm = ["variant"];
function Pn(e) {
  return e.length === 0;
}
function qa(e) {
  const {
    variant: t
  } = e, r = Ht(e, Tm);
  let o = t || "";
  return Object.keys(r).sort().forEach((s) => {
    s === "color" ? o += Pn(o) ? e[s] : At(e[s]) : o += `${Pn(o) ? s : At(s)}${At(e[s].toString())}`;
  }), o;
}
const Om = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Nm(e) {
  return Object.keys(e).length === 0;
}
function Im(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Rm = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Yo = (e) => {
  let t = 0;
  const r = {};
  return e && e.forEach((o) => {
    let s = "";
    typeof o.props == "function" ? (s = `callback${t}`, t += 1) : s = qa(o.props), r[s] = o.style;
  }), r;
}, Pm = (e, t) => {
  let r = [];
  return t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants), Yo(r);
}, Xo = (e, t, r) => {
  const {
    ownerState: o = {}
  } = e, s = [];
  let i = 0;
  return r && r.forEach((n) => {
    let c = !0;
    if (typeof n.props == "function") {
      const l = ae({}, e, o);
      c = n.props(l);
    } else
      Object.keys(n.props).forEach((l) => {
        o[l] !== n.props[l] && e[l] !== n.props[l] && (c = !1);
      });
    c && (typeof n.props == "function" ? s.push(t[`callback${i}`]) : s.push(t[qa(n.props)])), typeof n.props == "function" && (i += 1);
  }), s;
}, Mm = (e, t, r, o) => {
  var s;
  const i = r == null || (s = r.components) == null || (s = s[o]) == null ? void 0 : s.variants;
  return Xo(e, t, i);
};
function Do(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Dm = Ei(), Mn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Lo({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Nm(t) ? e : t[r] || t;
}
function Lm(e) {
  return e ? (t, r) => r[e] : null;
}
const Dn = ({
  styledArg: e,
  props: t,
  defaultTheme: r,
  themeId: o
}) => {
  const s = e(ae({}, t, {
    theme: Lo(ae({}, t, {
      defaultTheme: r,
      themeId: o
    }))
  }));
  let i;
  if (s && s.variants && (i = s.variants, delete s.variants), i) {
    const n = Xo(t, Yo(i), i);
    return [s, ...n];
  }
  return s;
};
function Bm(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Dm,
    rootShouldForwardProp: o = Do,
    slotShouldForwardProp: s = Do
  } = e, i = (n) => $i(ae({}, n, {
    theme: Lo(ae({}, n, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (n, c = {}) => {
    bl(n, (w) => w.filter((v) => !(v != null && v.__mui_systemSx)));
    const {
      name: l,
      slot: d,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Lm(Mn(d))
    } = c, m = Ht(c, Om), g = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), b = h || !1;
    let y;
    process.env.NODE_ENV !== "production" && l && (y = `${l}-${Mn(d || "Root")}`);
    let k = Do;
    d === "Root" || d === "root" ? k = o : d ? k = s : Im(n) && (k = void 0);
    const x = ml(n, ae({
      shouldForwardProp: k,
      label: y
    }, m)), _ = (w, ...v) => {
      const z = v ? v.map((S) => {
        if (typeof S == "function" && S.__emotion_real !== S)
          return (X) => Dn({
            styledArg: S,
            props: X,
            defaultTheme: r,
            themeId: t
          });
        if (Wt(S)) {
          let X = S, Y;
          return S && S.variants && (Y = S.variants, delete X.variants, X = (ve) => {
            let W = S;
            return Xo(ve, Yo(Y), Y).forEach((ye) => {
              W = xt(W, ye);
            }), W;
          }), X;
        }
        return S;
      }) : [];
      let V = w;
      if (Wt(w)) {
        let S;
        w && w.variants && (S = w.variants, delete V.variants, V = (X) => {
          let Y = w;
          return Xo(X, Yo(S), S).forEach((W) => {
            Y = xt(Y, W);
          }), Y;
        });
      } else
        typeof w == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        w.__emotion_real !== w && (V = (S) => Dn({
          styledArg: w,
          props: S,
          defaultTheme: r,
          themeId: t
        }));
      l && p && z.push((S) => {
        const X = Lo(ae({}, S, {
          defaultTheme: r,
          themeId: t
        })), Y = Rm(l, X);
        if (Y) {
          const ve = {};
          return Object.entries(Y).forEach(([W, _e]) => {
            ve[W] = typeof _e == "function" ? _e(ae({}, S, {
              theme: X
            })) : _e;
          }), p(S, ve);
        }
        return null;
      }), l && !g && z.push((S) => {
        const X = Lo(ae({}, S, {
          defaultTheme: r,
          themeId: t
        }));
        return Mm(S, Pm(l, X), X, l);
      }), b || z.push(i);
      const j = z.length - v.length;
      if (Array.isArray(w) && j > 0) {
        const S = new Array(j).fill("");
        V = [...w, ...S], V.raw = [...w.raw, ...S];
      }
      const M = x(V, ...z);
      if (process.env.NODE_ENV !== "production") {
        let S;
        l && (S = `${l}${At(d || "")}`), S === void 0 && (S = `Styled(${w0(n)})`), M.displayName = S;
      }
      return n.muiName && (M.muiName = n.muiName), M;
    };
    return x.withConfig && (_.withConfig = x.withConfig), _;
  };
}
function Vm(e) {
  const {
    theme: t,
    name: r,
    props: o
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? o : Fa(t.components[r].defaultProps, o);
}
function Fm({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: o
}) {
  let s = Am(r);
  return o && (s = s[o] || s), Vm({
    theme: s,
    name: t,
    props: e
  });
}
function Ka(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), E0(e, t, r);
}
function Hm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((o) => o + o)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((o, s) => s < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Pr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Pr(Hm(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Rr(9, e));
  let o = e.substring(t + 1, e.length - 1), s;
  if (r === "color") {
    if (o = o.split(" "), s = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Rr(10, s));
  } else
    o = o.split(",");
  return o = o.map((i) => parseFloat(i)), {
    type: r,
    values: o,
    colorSpace: s
  };
}
function zi(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: o
  } = e;
  return t.indexOf("rgb") !== -1 ? o = o.map((s, i) => i < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.indexOf("color") !== -1 ? o = `${r} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function Um(e) {
  e = Pr(e);
  const {
    values: t
  } = e, r = t[0], o = t[1] / 100, s = t[2] / 100, i = o * Math.min(s, 1 - s), n = (d, f = (d + r / 30) % 12) => s - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(n(0) * 255), Math.round(n(8) * 255), Math.round(n(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), zi({
    type: c,
    values: l
  });
}
function Ln(e) {
  e = Pr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Pr(Um(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Bn(e, t) {
  const r = Ln(e), o = Ln(t);
  return (Math.max(r, o) + 0.05) / (Math.min(r, o) + 0.05);
}
function jm(e, t) {
  if (e = Pr(e), t = Ka(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return zi(e);
}
function Wm(e, t) {
  if (e = Pr(e), t = Ka(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return zi(e);
}
function qm(e, t) {
  return ae({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Km = {
  black: "#000",
  white: "#fff"
}, po = Km, Ym = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Xm = Ym, Gm = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, yr = Gm, Jm = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, wr = Jm, Zm = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Qr = Zm, Qm = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, xr = Qm, eg = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, _r = eg, tg = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, kr = tg, rg = ["mode", "contrastThreshold", "tonalOffset"], Vn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: po.white,
    default: po.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ps = {
  text: {
    primary: po.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: po.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Fn(e, t, r, o) {
  const s = o.light || o, i = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Wm(e.main, s) : t === "dark" && (e.dark = jm(e.main, i)));
}
function og(e = "light") {
  return e === "dark" ? {
    main: xr[200],
    light: xr[50],
    dark: xr[400]
  } : {
    main: xr[700],
    light: xr[400],
    dark: xr[800]
  };
}
function sg(e = "light") {
  return e === "dark" ? {
    main: yr[200],
    light: yr[50],
    dark: yr[400]
  } : {
    main: yr[500],
    light: yr[300],
    dark: yr[700]
  };
}
function ig(e = "light") {
  return e === "dark" ? {
    main: wr[500],
    light: wr[300],
    dark: wr[700]
  } : {
    main: wr[700],
    light: wr[400],
    dark: wr[800]
  };
}
function ng(e = "light") {
  return e === "dark" ? {
    main: _r[400],
    light: _r[300],
    dark: _r[700]
  } : {
    main: _r[700],
    light: _r[500],
    dark: _r[900]
  };
}
function ag(e = "light") {
  return e === "dark" ? {
    main: kr[400],
    light: kr[300],
    dark: kr[700]
  } : {
    main: kr[800],
    light: kr[500],
    dark: kr[900]
  };
}
function lg(e = "light") {
  return e === "dark" ? {
    main: Qr[400],
    light: Qr[300],
    dark: Qr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Qr[500],
    dark: Qr[900]
  };
}
function cg(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: o = 0.2
  } = e, s = Ht(e, rg), i = e.primary || og(t), n = e.secondary || sg(t), c = e.error || ig(t), l = e.info || ng(t), d = e.success || ag(t), f = e.warning || lg(t);
  function h(b) {
    const y = Bn(b, Ps.text.primary) >= r ? Ps.text.primary : Vn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const k = Bn(b, y);
      k < 3 && console.error([`MUI: The contrast ratio of ${k}:1 for ${y} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const p = ({
    color: b,
    name: y,
    mainShade: k = 500,
    lightShade: x = 300,
    darkShade: _ = 700
  }) => {
    if (b = ae({}, b), !b.main && b[k] && (b.main = b[k]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${k}\` property.` : Rr(11, y ? ` (${y})` : "", k));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Rr(12, y ? ` (${y})` : "", JSON.stringify(b.main)));
    return Fn(b, "light", x, o), Fn(b, "dark", _, o), b.contrastText || (b.contrastText = h(b.main)), b;
  }, m = {
    dark: Ps,
    light: Vn
  };
  return process.env.NODE_ENV !== "production" && (m[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), xt(ae({
    // A collection of common colors.
    common: ae({}, po),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: n,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Xm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o
  }, m[t]), s);
}
const dg = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ug(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Hn = {
  textTransform: "uppercase"
}, Un = '"Roboto", "Helvetica", "Arial", sans-serif';
function hg(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: o = Un,
    // The default font size of the Material Specification.
    fontSize: s = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: n = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: h
  } = r, p = Ht(r, dg);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = s / 14, g = h || ((k) => `${k / d * m}rem`), b = (k, x, _, w, v) => ae({
    fontFamily: o,
    fontWeight: k,
    fontSize: g(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _
  }, o === Un ? {
    letterSpacing: `${ug(w / x)}em`
  } : {}, v, f), y = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(n, 48, 1.167, 0),
    h4: b(n, 34, 1.235, 0.25),
    h5: b(n, 24, 1.334, 0),
    h6: b(c, 20, 1.6, 0.15),
    subtitle1: b(n, 16, 1.75, 0.15),
    subtitle2: b(c, 14, 1.57, 0.1),
    body1: b(n, 16, 1.5, 0.15),
    body2: b(n, 14, 1.43, 0.15),
    button: b(c, 14, 1.75, 0.4, Hn),
    caption: b(n, 12, 1.66, 0.4),
    overline: b(n, 12, 2.66, 1, Hn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return xt(ae({
    htmlFontSize: d,
    pxToRem: g,
    fontFamily: o,
    fontSize: s,
    fontWeightLight: i,
    fontWeightRegular: n,
    fontWeightMedium: c,
    fontWeightBold: l
  }, y), p, {
    clone: !1
    // No need to clone deep
  });
}
const pg = 0.2, fg = 0.14, mg = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${pg})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${fg})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${mg})`].join(",");
}
const gg = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bg = gg, vg = ["duration", "easing", "delay"], yg = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wg = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function jn(e) {
  return `${Math.round(e)}ms`;
}
function xg(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function _g(e) {
  const t = ae({}, yg, e.easing), r = ae({}, wg, e.duration);
  return ae({
    getAutoHeightDuration: xg,
    create: (s = ["all"], i = {}) => {
      const {
        duration: n = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = i, d = Ht(i, vg);
      if (process.env.NODE_ENV !== "production") {
        const f = (p) => typeof p == "string", h = (p) => !isNaN(parseFloat(p));
        !f(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !h(n) && !f(n) && console.error(`MUI: Argument "duration" must be a number or a string but found ${n}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((f) => `${f} ${typeof n == "string" ? n : jn(n)} ${c} ${typeof l == "string" ? l : jn(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const kg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Cg = kg, Sg = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function $g(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: o = {},
    transitions: s = {},
    typography: i = {}
  } = e, n = Ht(e, Sg);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Rr(18));
  const c = cg(o), l = Ei(e);
  let d = xt(l, {
    mixins: qm(l.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: bg.slice(),
    typography: hg(c, i),
    transitions: _g(s),
    zIndex: ae({}, Cg),
    applyDarkStyles(f) {
      return this.vars ? {
        [this.getColorSchemeSelector("dark").replace(/(\[[^\]]+\])/, ":where($1)")]: f
      } : this.palette.mode === "dark" ? f : {};
    }
  });
  if (d = xt(d, n), d = t.reduce((f, h) => xt(f, h), d), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (p, m) => {
      let g;
      for (g in p) {
        const b = p[g];
        if (f.indexOf(g) !== -1 && Object.keys(b).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = _i("", g);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: b
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[g] = {};
        }
      }
    };
    Object.keys(d.components).forEach((p) => {
      const m = d.components[p].styleOverrides;
      m && p.indexOf("Mui") === 0 && h(m, p);
    });
  }
  return d.unstable_sxConfig = ae({}, Si, n == null ? void 0 : n.unstable_sxConfig), d.unstable_sx = function(h) {
    return $i({
      sx: h,
      theme: this
    });
  }, d;
}
const Eg = $g(), Ya = Eg, Xa = "$$material";
function zg({
  props: e,
  name: t
}) {
  return Fm({
    props: e,
    name: t,
    defaultTheme: Ya,
    themeId: Xa
  });
}
const Ag = (e) => Do(e) && e !== "classes", Tg = Bm({
  themeId: Xa,
  defaultTheme: Ya,
  rootShouldForwardProp: Ag
}), Og = Tg;
function Ng(e) {
  return _i("MuiSvgIcon", e);
}
$0("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ig = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Rg = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: o
  } = e, s = {
    root: ["root", t !== "inherit" && `color${At(t)}`, `fontSize${At(r)}`]
  };
  return x0(s, Ng, o);
}, Pg = Og("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${At(r.color)}`], t[`fontSize${At(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, o, s, i, n, c, l, d, f, h, p, m, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (o = r.create) == null ? void 0 : o.call(r, "fill", {
      duration: (s = e.transitions) == null || (s = s.duration) == null ? void 0 : s.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (n = i.pxToRem) == null ? void 0 : n.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (l = c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (f = d.pxToRem) == null ? void 0 : f.call(d, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (h = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? h : {
      action: (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ai = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const o = zg({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: i,
    color: n = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: d,
    inheritViewBox: f = !1,
    titleAccess: h,
    viewBox: p = "0 0 24 24"
  } = o, m = Ht(o, Ig), g = /* @__PURE__ */ I.isValidElement(s) && s.type === "svg", b = ae({}, o, {
    color: n,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: p,
    hasSvgAsChild: g
  }), y = {};
  f || (y.viewBox = p);
  const k = Rg(b);
  return /* @__PURE__ */ Ce(Pg, ae({
    as: c,
    className: z0(k.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r
  }, y, m, g && s.props, {
    ownerState: b,
    children: [g ? s.props.children : s, h ? /* @__PURE__ */ T("title", {
      children: h
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: we.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: we.object,
  /**
   * @ignore
   */
  className: we.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: we.oneOfType([we.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), we.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: we.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: we.oneOfType([we.oneOf(["inherit", "large", "medium", "small"]), we.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: we.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: we.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: we.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: we.oneOfType([we.arrayOf(we.oneOfType([we.func, we.object, we.bool])), we.func, we.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: we.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: we.string
});
Ai.muiName = "SvgIcon";
const Wn = Ai;
function Mg(e, t) {
  function r(o, s) {
    return /* @__PURE__ */ T(Wn, ae({
      "data-testid": `${t}Icon`,
      ref: s
    }, o, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Wn.muiName, /* @__PURE__ */ I.memo(/* @__PURE__ */ I.forwardRef(r));
}
const Dg = Mg(/* @__PURE__ */ T("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
function gb({
  menu: e,
  dataHandler: t,
  commandHandler: r,
  className: o,
  id: s,
  children: i
}) {
  const [n, c] = Er(!1), [l, d] = Er(!1), f = Io(() => {
    n && c(!1), d(!1);
  }, [n]), h = Io((k) => {
    k.stopPropagation(), c((x) => {
      const _ = !x;
      return _ && k.shiftKey ? d(!0) : _ || d(!1), _;
    });
  }, []), p = Ds(void 0), [m, g] = Er(0);
  Go(() => {
    n && p.current && g(p.current.clientHeight);
  }, [n]);
  const b = Io(
    (k) => (f(), r(k)),
    [r, f]
  );
  let y = e;
  return !y && t && (y = t(l)), /* @__PURE__ */ T("div", { ref: p, style: { position: "relative" }, children: /* @__PURE__ */ T(nl, { position: "static", id: s, children: /* @__PURE__ */ Ce(al, { className: `papi-toolbar ${o ?? ""}`, variant: "dense", children: [
    y ? /* @__PURE__ */ T(
      Xn,
      {
        edge: "start",
        className: `papi-menuButton ${o ?? ""}`,
        color: "inherit",
        "aria-label": "open drawer",
        onClick: h,
        children: /* @__PURE__ */ T(Dg, {})
      }
    ) : void 0,
    i ? /* @__PURE__ */ T("div", { className: "papi-menu-children", children: i }) : void 0,
    y ? /* @__PURE__ */ T(
      ll,
      {
        className: `papi-menu-drawer ${o ?? ""}`,
        anchor: "left",
        variant: "persistent",
        open: n,
        onClose: f,
        PaperProps: {
          className: "papi-menu-drawer-paper",
          style: {
            top: m
          }
        },
        children: /* @__PURE__ */ T(qf, { commandHandler: b, columns: y.columns })
      }
    ) : void 0
  ] }) }) });
}
const bb = (e, t) => {
  Go(() => {
    if (!e)
      return () => {
      };
    const r = e(t);
    return () => {
      r();
    };
  }, [e, t]);
};
function Lg(e) {
  return {
    preserveValue: !0,
    ...e
  };
}
const Bg = (e, t, r = {}) => {
  const o = Ds(t);
  o.current = t;
  const s = Ds(r);
  s.current = Lg(s.current);
  const [i, n] = Er(() => o.current), [c, l] = Er(!0);
  return Go(() => {
    let d = !0;
    return l(!!e), (async () => {
      if (e) {
        const f = await e();
        d && (n(() => f), l(!1));
      }
    })(), () => {
      d = !1, s.current.preserveValue || n(() => o.current);
    };
  }, [e]), [i, c];
}, Ms = () => !1, vb = (e, t) => {
  const [r] = Bg(
    Io(async () => {
      if (!e)
        return Ms;
      const o = await Promise.resolve(e(t));
      return async () => o();
    }, [t, e]),
    Ms,
    // We want the unsubscriber to return to default value immediately upon changing subscription
    // So the useEffect below will unsubscribe asap
    { preserveValue: !1 }
  );
  Go(() => () => {
    r !== Ms && r();
  }, [r]);
};
Bs("../node_modules/@shoelace-style/shoelace/dist/assets");
function Vg(e, t = "top") {
  if (!e || typeof document > "u")
    return;
  const r = document.head || document.querySelector("head"), o = r.querySelector(":first-child"), s = document.createElement("style");
  s.appendChild(document.createTextNode(e)), t === "top" && o ? r.insertBefore(s, o) : r.appendChild(s);
}
Vg(`.papi-button {
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
}

.papi-button.primary {
  background-color: #1ea7fd;
  color: white;
}

.papi-button.secondary {
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  color: #333;
}

.papi-button.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-button.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}

.papi-button.video {
  background-color: red;
  color: white;
}

.papi-button.video a,
.papi-button.video a:visited {
  color: white;
  text-decoration: none;
}

.papi-button.video a:hover {
  color: white;
  text-decoration: underline;
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
.papi-combo-box {
  background-color: transparent;
}

.papi-combo-box.fullwidth {
  width: 100%;
}

.papi-combo-box.error {
  background-color: #f00;
}

.papi-combo-box.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-combo-box.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-multi-column-menu {
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  padding-right: 3px;
}

.papi-menu {
  background-color: rgb(145, 145, 145);
  font-size: 11pt;
  font-weight: 600;
  margin-top: 1px;
  padding-bottom: 2px;
  padding-left: 24px;
  padding-top: 2px;
}
.papi-checkbox {
  background-color: transparent;
}

.papi-checkbox.error {
  color: #f00;
}

.papi-checkbox.error:hover {
  background-color: rgba(255, 0, 0, 0.2);
}

.papi-checkbox.paratext {
  color: greenyellow;
}

.papi-checkbox-label.paratext {
  color: darkgreen;
}

.papi-checkbox.paratext:hover {
  background-color: rgba(0, 100, 0, 0.3);
}

.papi-checkbox.paratext.bright {
  color: darkgreen;
}

.papi-checkbox-label.paratext.bright {
  background-color: greenyellow;
}

.papi-checkbox.paratext.bright:hover {
  background-color: rgba(173, 255, 47, 0.3);
}

.papi-checkbox.below,
.papi-checkbox.above {
  text-align: center;
}
.papi-menu-item {
  line-height: 0.8;
}

.papi-menu-item.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-menu-item.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.search-bar-paper {
  display: flex;
  align-items: center;
}

.search-button {
  padding: 10px;
}
:root,
:host,
.sl-theme-light {
  color-scheme: light;

  --sl-color-gray-50: hsl(0 0% 97.5%);
  --sl-color-gray-100: hsl(240 4.8% 95.9%);
  --sl-color-gray-200: hsl(240 5.9% 90%);
  --sl-color-gray-300: hsl(240 4.9% 83.9%);
  --sl-color-gray-400: hsl(240 5% 64.9%);
  --sl-color-gray-500: hsl(240 3.8% 46.1%);
  --sl-color-gray-600: hsl(240 5.2% 33.9%);
  --sl-color-gray-700: hsl(240 5.3% 26.1%);
  --sl-color-gray-800: hsl(240 3.7% 15.9%);
  --sl-color-gray-900: hsl(240 5.9% 10%);
  --sl-color-gray-950: hsl(240 7.3% 8%);

  --sl-color-red-50: hsl(0 85.7% 97.3%);
  --sl-color-red-100: hsl(0 93.3% 94.1%);
  --sl-color-red-200: hsl(0 96.3% 89.4%);
  --sl-color-red-300: hsl(0 93.5% 81.8%);
  --sl-color-red-400: hsl(0 90.6% 70.8%);
  --sl-color-red-500: hsl(0 84.2% 60.2%);
  --sl-color-red-600: hsl(0 72.2% 50.6%);
  --sl-color-red-700: hsl(0 73.7% 41.8%);
  --sl-color-red-800: hsl(0 70% 35.3%);
  --sl-color-red-900: hsl(0 62.8% 30.6%);
  --sl-color-red-950: hsl(0 60% 19.6%);

  --sl-color-orange-50: hsl(33.3 100% 96.5%);
  --sl-color-orange-100: hsl(34.3 100% 91.8%);
  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);
  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);
  --sl-color-orange-400: hsl(27 96% 61%);
  --sl-color-orange-500: hsl(24.6 95% 53.1%);
  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);
  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);
  --sl-color-orange-800: hsl(15 79.1% 33.7%);
  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);
  --sl-color-orange-950: hsl(15.2 69.1% 19%);

  --sl-color-amber-50: hsl(48 100% 96.1%);
  --sl-color-amber-100: hsl(48 96.5% 88.8%);
  --sl-color-amber-200: hsl(48 96.6% 76.7%);
  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);
  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);
  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);
  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);
  --sl-color-amber-700: hsl(26 90.5% 37.1%);
  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);
  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);
  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);

  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);
  --sl-color-yellow-100: hsl(54.9 96.7% 88%);
  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);
  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);
  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);
  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);
  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);
  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);
  --sl-color-yellow-800: hsl(31.8 81% 28.8%);
  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);
  --sl-color-yellow-950: hsl(33.1 69% 13.9%);

  --sl-color-lime-50: hsl(78.3 92% 95.1%);
  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);
  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);
  --sl-color-lime-300: hsl(82 84.5% 67.1%);
  --sl-color-lime-400: hsl(82.7 78% 55.5%);
  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);
  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);
  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);
  --sl-color-lime-800: hsl(86.3 69% 22.7%);
  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);
  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);

  --sl-color-green-50: hsl(138.5 76.5% 96.7%);
  --sl-color-green-100: hsl(140.6 84.2% 92.5%);
  --sl-color-green-200: hsl(141 78.9% 85.1%);
  --sl-color-green-300: hsl(141.7 76.6% 73.1%);
  --sl-color-green-400: hsl(141.9 69.2% 58%);
  --sl-color-green-500: hsl(142.1 70.6% 45.3%);
  --sl-color-green-600: hsl(142.1 76.2% 36.3%);
  --sl-color-green-700: hsl(142.4 71.8% 29.2%);
  --sl-color-green-800: hsl(142.8 64.2% 24.1%);
  --sl-color-green-900: hsl(143.8 61.2% 20.2%);
  --sl-color-green-950: hsl(144.3 60.7% 12%);

  --sl-color-emerald-50: hsl(151.8 81% 95.9%);
  --sl-color-emerald-100: hsl(149.3 80.4% 90%);
  --sl-color-emerald-200: hsl(152.4 76% 80.4%);
  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);
  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);
  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);
  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);
  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);
  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);
  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);
  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);

  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);
  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);
  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);
  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);
  --sl-color-teal-400: hsl(172.5 66% 50.4%);
  --sl-color-teal-500: hsl(173.4 80.4% 40%);
  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);
  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);
  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);
  --sl-color-teal-900: hsl(175.9 60.8% 19%);
  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);

  --sl-color-cyan-50: hsl(183.2 100% 96.3%);
  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);
  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);
  --sl-color-cyan-300: hsl(187 92.4% 69%);
  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);
  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);
  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);
  --sl-color-cyan-700: hsl(192.9 82.3% 31%);
  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);
  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);
  --sl-color-cyan-950: hsl(196.8 61% 16.1%);

  --sl-color-sky-50: hsl(204 100% 97.1%);
  --sl-color-sky-100: hsl(204 93.8% 93.7%);
  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);
  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);
  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);
  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);
  --sl-color-sky-600: hsl(200.4 98% 39.4%);
  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);
  --sl-color-sky-800: hsl(201 90% 27.5%);
  --sl-color-sky-900: hsl(202 80.3% 23.9%);
  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);

  --sl-color-blue-50: hsl(213.8 100% 96.9%);
  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);
  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);
  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);
  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);
  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);
  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);
  --sl-color-blue-700: hsl(224.3 76.3% 48%);
  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);
  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);
  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);

  --sl-color-indigo-50: hsl(225.9 100% 96.7%);
  --sl-color-indigo-100: hsl(226.5 100% 93.9%);
  --sl-color-indigo-200: hsl(228 96.5% 88.8%);
  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);
  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);
  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);
  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);
  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);
  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);
  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);
  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);

  --sl-color-violet-50: hsl(250 100% 97.6%);
  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);
  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);
  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);
  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);
  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);
  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);
  --sl-color-violet-700: hsl(263.4 70% 50.4%);
  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);
  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);
  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);

  --sl-color-purple-50: hsl(270 100% 98%);
  --sl-color-purple-100: hsl(268.7 100% 95.5%);
  --sl-color-purple-200: hsl(268.6 100% 91.8%);
  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);
  --sl-color-purple-400: hsl(270 95.2% 75.3%);
  --sl-color-purple-500: hsl(270.7 91% 65.1%);
  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);
  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);
  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);
  --sl-color-purple-900: hsl(273.6 65.6% 32%);
  --sl-color-purple-950: hsl(276 59.5% 16.5%);

  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);
  --sl-color-fuchsia-100: hsl(287 100% 95.5%);
  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);
  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);
  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);
  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);
  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);
  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);
  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);
  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);
  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);
  --sl-color-pink-700: hsl(335.1 77.6% 42%);
  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);
  --sl-color-pink-900: hsl(335.9 69% 30.4%);
  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);

  --sl-color-rose-50: hsl(355.7 100% 97.3%);
  --sl-color-rose-100: hsl(355.6 100% 94.7%);
  --sl-color-rose-200: hsl(352.7 96.1% 90%);
  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);
  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);
  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);
  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);
  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);
  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);
  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);
  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);

  --sl-color-primary-50: var(--sl-color-sky-50);
  --sl-color-primary-100: var(--sl-color-sky-100);
  --sl-color-primary-200: var(--sl-color-sky-200);
  --sl-color-primary-300: var(--sl-color-sky-300);
  --sl-color-primary-400: var(--sl-color-sky-400);
  --sl-color-primary-500: var(--sl-color-sky-500);
  --sl-color-primary-600: var(--sl-color-sky-600);
  --sl-color-primary-700: var(--sl-color-sky-700);
  --sl-color-primary-800: var(--sl-color-sky-800);
  --sl-color-primary-900: var(--sl-color-sky-900);
  --sl-color-primary-950: var(--sl-color-sky-950);

  --sl-color-success-50: var(--sl-color-green-50);
  --sl-color-success-100: var(--sl-color-green-100);
  --sl-color-success-200: var(--sl-color-green-200);
  --sl-color-success-300: var(--sl-color-green-300);
  --sl-color-success-400: var(--sl-color-green-400);
  --sl-color-success-500: var(--sl-color-green-500);
  --sl-color-success-600: var(--sl-color-green-600);
  --sl-color-success-700: var(--sl-color-green-700);
  --sl-color-success-800: var(--sl-color-green-800);
  --sl-color-success-900: var(--sl-color-green-900);
  --sl-color-success-950: var(--sl-color-green-950);

  --sl-color-warning-50: var(--sl-color-amber-50);
  --sl-color-warning-100: var(--sl-color-amber-100);
  --sl-color-warning-200: var(--sl-color-amber-200);
  --sl-color-warning-300: var(--sl-color-amber-300);
  --sl-color-warning-400: var(--sl-color-amber-400);
  --sl-color-warning-500: var(--sl-color-amber-500);
  --sl-color-warning-600: var(--sl-color-amber-600);
  --sl-color-warning-700: var(--sl-color-amber-700);
  --sl-color-warning-800: var(--sl-color-amber-800);
  --sl-color-warning-900: var(--sl-color-amber-900);
  --sl-color-warning-950: var(--sl-color-amber-950);

  --sl-color-danger-50: var(--sl-color-red-50);
  --sl-color-danger-100: var(--sl-color-red-100);
  --sl-color-danger-200: var(--sl-color-red-200);
  --sl-color-danger-300: var(--sl-color-red-300);
  --sl-color-danger-400: var(--sl-color-red-400);
  --sl-color-danger-500: var(--sl-color-red-500);
  --sl-color-danger-600: var(--sl-color-red-600);
  --sl-color-danger-700: var(--sl-color-red-700);
  --sl-color-danger-800: var(--sl-color-red-800);
  --sl-color-danger-900: var(--sl-color-red-900);
  --sl-color-danger-950: var(--sl-color-red-950);

  --sl-color-neutral-50: var(--sl-color-gray-50);
  --sl-color-neutral-100: var(--sl-color-gray-100);
  --sl-color-neutral-200: var(--sl-color-gray-200);
  --sl-color-neutral-300: var(--sl-color-gray-300);
  --sl-color-neutral-400: var(--sl-color-gray-400);
  --sl-color-neutral-500: var(--sl-color-gray-500);
  --sl-color-neutral-600: var(--sl-color-gray-600);
  --sl-color-neutral-700: var(--sl-color-gray-700);
  --sl-color-neutral-800: var(--sl-color-gray-800);
  --sl-color-neutral-900: var(--sl-color-gray-900);
  --sl-color-neutral-950: var(--sl-color-gray-950);

  --sl-color-neutral-0: hsl(0, 0%, 100%);
  --sl-color-neutral-1000: hsl(0, 0%, 0%);

  --sl-border-radius-small: 0.1875rem;
  --sl-border-radius-medium: 0.25rem;
  --sl-border-radius-large: 0.5rem;
  --sl-border-radius-x-large: 1rem;

  --sl-border-radius-circle: 50%;
  --sl-border-radius-pill: 9999px;

  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

  --sl-spacing-3x-small: 0.125rem;
  --sl-spacing-2x-small: 0.25rem;
  --sl-spacing-x-small: 0.5rem;
  --sl-spacing-small: 0.75rem;
  --sl-spacing-medium: 1rem;
  --sl-spacing-large: 1.25rem;
  --sl-spacing-x-large: 1.75rem;
  --sl-spacing-2x-large: 2.25rem;
  --sl-spacing-3x-large: 3rem;
  --sl-spacing-4x-large: 4.5rem;

  --sl-transition-x-slow: 1000ms;
  --sl-transition-slow: 500ms;
  --sl-transition-medium: 250ms;
  --sl-transition-fast: 150ms;
  --sl-transition-x-fast: 50ms;

  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --sl-font-serif: Georgia, "Times New Roman", serif;

  --sl-font-size-2x-small: 0.625rem;
  --sl-font-size-x-small: 0.75rem;
  --sl-font-size-small: 0.875rem;
  --sl-font-size-medium: 1rem;
  --sl-font-size-large: 1.25rem;
  --sl-font-size-x-large: 1.5rem;
  --sl-font-size-2x-large: 2.25rem;
  --sl-font-size-3x-large: 3rem;
  --sl-font-size-4x-large: 4.5rem;

  --sl-font-weight-light: 300;
  --sl-font-weight-normal: 400;
  --sl-font-weight-semibold: 500;
  --sl-font-weight-bold: 700;

  --sl-letter-spacing-denser: -0.03em;
  --sl-letter-spacing-dense: -0.015em;
  --sl-letter-spacing-normal: normal;
  --sl-letter-spacing-loose: 0.075em;
  --sl-letter-spacing-looser: 0.15em;

  --sl-line-height-denser: 1;
  --sl-line-height-dense: 1.4;
  --sl-line-height-normal: 1.8;
  --sl-line-height-loose: 2.2;
  --sl-line-height-looser: 2.6;

  --sl-focus-ring-color: var(--sl-color-primary-600);
  --sl-focus-ring-style: solid;
  --sl-focus-ring-width: 3px;
  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)
    var(--sl-focus-ring-color);
  --sl-focus-ring-offset: 1px;

  --sl-button-font-size-small: var(--sl-font-size-x-small);
  --sl-button-font-size-medium: var(--sl-font-size-small);
  --sl-button-font-size-large: var(--sl-font-size-medium);

  --sl-input-height-small: 1.875rem;
  --sl-input-height-medium: 2.5rem;
  --sl-input-height-large: 3.125rem;

  --sl-input-background-color: var(--sl-color-neutral-0);
  --sl-input-background-color-hover: var(--sl-input-background-color);
  --sl-input-background-color-focus: var(--sl-input-background-color);
  --sl-input-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-border-color: var(--sl-color-neutral-300);
  --sl-input-border-color-hover: var(--sl-color-neutral-400);
  --sl-input-border-color-focus: var(--sl-color-primary-500);
  --sl-input-border-color-disabled: var(--sl-color-neutral-300);
  --sl-input-border-width: 1px;
  --sl-input-required-content: "*";
  --sl-input-required-content-offset: -2px;
  --sl-input-required-content-color: var(--sl-input-label-color);

  --sl-input-border-radius-small: var(--sl-border-radius-medium);
  --sl-input-border-radius-medium: var(--sl-border-radius-medium);
  --sl-input-border-radius-large: var(--sl-border-radius-medium);

  --sl-input-font-family: var(--sl-font-sans);
  --sl-input-font-weight: var(--sl-font-weight-normal);
  --sl-input-font-size-small: var(--sl-font-size-small);
  --sl-input-font-size-medium: var(--sl-font-size-medium);
  --sl-input-font-size-large: var(--sl-font-size-large);
  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

  --sl-input-color: var(--sl-color-neutral-700);
  --sl-input-color-hover: var(--sl-color-neutral-700);
  --sl-input-color-focus: var(--sl-color-neutral-700);
  --sl-input-color-disabled: var(--sl-color-neutral-900);
  --sl-input-icon-color: var(--sl-color-neutral-500);
  --sl-input-icon-color-hover: var(--sl-color-neutral-600);
  --sl-input-icon-color-focus: var(--sl-color-neutral-600);
  --sl-input-placeholder-color: var(--sl-color-neutral-500);
  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
  --sl-input-spacing-small: var(--sl-spacing-small);
  --sl-input-spacing-medium: var(--sl-spacing-medium);
  --sl-input-spacing-large: var(--sl-spacing-large);

  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
  --sl-input-focus-ring-offset: 0;

  --sl-input-filled-background-color: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-filled-color: var(--sl-color-neutral-800);
  --sl-input-filled-color-hover: var(--sl-color-neutral-800);
  --sl-input-filled-color-focus: var(--sl-color-neutral-700);
  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

  --sl-input-label-font-size-small: var(--sl-font-size-small);
  --sl-input-label-font-size-medium: var(--sl-font-size-medium);
  --sl-input-label-font-size-large: var(--sl-font-size-large);
  --sl-input-label-color: inherit;

  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);
  --sl-input-help-text-color: var(--sl-color-neutral-500);

  --sl-toggle-size-small: 0.875rem;
  --sl-toggle-size-medium: 1.125rem;
  --sl-toggle-size-large: 1.375rem;

  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

  --sl-panel-background-color: var(--sl-color-neutral-0);
  --sl-panel-border-color: var(--sl-color-neutral-200);
  --sl-panel-border-width: 1px;

  --sl-tooltip-border-radius: var(--sl-border-radius-medium);
  --sl-tooltip-background-color: var(--sl-color-neutral-800);
  --sl-tooltip-color: var(--sl-color-neutral-0);
  --sl-tooltip-font-family: var(--sl-font-sans);
  --sl-tooltip-font-weight: var(--sl-font-weight-normal);
  --sl-tooltip-font-size: var(--sl-font-size-small);
  --sl-tooltip-line-height: var(--sl-line-height-dense);
  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
  --sl-tooltip-arrow-size: 6px;

  --sl-z-index-drawer: 700;
  --sl-z-index-dialog: 800;
  --sl-z-index-dropdown: 900;
  --sl-z-index-toast: 950;
  --sl-z-index-tooltip: 1000;
}

@supports (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    scrollbar-gutter: stable !important;
    overflow: hidden !important;
  }
}

@supports not (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    padding-right: var(--sl-scroll-lock-size) !important;
    overflow: hidden !important;
  }
}

.sl-toast-stack {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  z-index: var(--sl-z-index-toast);
  width: 28rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.sl-toast-stack sl-alert {
  margin: var(--sl-spacing-medium);
}

.sl-toast-stack sl-alert::part(base) {
  box-shadow: var(--sl-shadow-large);
}

.menu {
  max-width: 250px;
  padding-top: 0;
}

.selected-menu-item {
  background-color: var(--sl-color-neutral-200);
}

.book-color-label {
  background-color: var(--sl-color-amber-100);
  height: 16px;
  width: 2px;
}
.papi-slider {
  background-color: transparent;
  color: #1ea7fd;
}

.papi-slider.vertical {
  min-height: 200px;
}

.papi-slider.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-slider.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.papi-snackbar {
  font-family: Arial, Helvetica, sans-serif;
}

.papi-snackbar.primary {
  background: #1ea7fd;
  color: white;
}

.papi-snackbar.external {
  background-color: lightsteelblue;
  border-color: white;
  border-style: dotted;
  padding: 2%;
  width: 30%;
}

.papi-snackbar.secondary {
  background: transparent;
  color: #333;
}

.papi-snackbar.alert {
  background: lightcoral;
}

.papi-snackbar.paratext {
  background: darkgreen;
  color: greenyellow;
}

.papi-snackbar.bright {
  background: greenyellow;
  color: darkgreen;
}
.papi-ref-selector.book {
  display: inline-block;
  vertical-align: middle;
}

.papi-ref-selector.chapter-verse {
  width: 75px;
}
.papi-switch {
  background-color: transparent;
}

.papi-switch.primary {
  background-color: #1ea7fd;
}

.papi-switch.secondary {
  background-color: #6fc8ff;
}

.papi-switch.error {
  background-color: #f00;
}

.papi-switch.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-switch.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}
.paratext {
  background-color: darkgreen;
  color: greenyellow;
}
.papi-toolbar {
  background-color: #eee;
  color: black;
}

.papi-toolbar.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-toolbar.paratext.bright {
  background-color: greenyellow;
  color: darkgreen;
}

.papi-menu-drawer-paper {
  height: fit-content !important;
  position: absolute !important;
}

.papi-menu-children {
  padding: 10px;
  position: relative;
}
@layer rdg.MeasuringCell {.m1l09lto7-0-0-beta-34 {
    contain: strict;
    grid-row: 1;
    visibility: hidden
}
  }


@layer rdg.Cell {.c1wupbe7-0-0-beta-34 {
    /* max-content does not work with size containment
     * dynamically switching between different containment styles incurs a heavy relayout penalty
     * Chromium bug: at odd zoom levels or subpixel positioning, layout/paint containment can make cell borders disappear
     *   https://bugs.chromium.org/p/chromium/issues/detail?id=1326946
     */
    contain: style;
    position: relative; /* needed for absolute positioning to work */
    padding-block: 0;
    padding-inline: 8px;
    border-inline-end: 1px solid var(--rdg-border-color);
    border-block-end: 1px solid var(--rdg-border-color);
    grid-row-start: var(--rdg-grid-row-start);
    background-color: inherit;

    white-space: nowrap;
    overflow: hidden;
    overflow: clip;
    text-overflow: ellipsis;
    outline: none
}

    .c1wupbe7-0-0-beta-34[aria-selected='true'] {
      outline: 2px solid var(--rdg-selection-color);
      outline-offset: -2px;
    }
  }

@layer rdg.Cell {

.cd0kgiy7-0-0-beta-34 {
    position: sticky;
    /* Should have a higher value than 0 to show up above unfrozen cells */
    z-index: 1
}
  }

@layer rdg.Cell {

.c1730fa47-0-0-beta-34 {
    box-shadow: calc(2px * var(--rdg-sign)) 0 5px -2px rgba(136, 136, 136, 0.3)
}
  }


@layer rdg.CheckboxLabel {.c1hs68w07-0-0-beta-34 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    margin-inline-end: 1px /* align checkbox in row group cell */
}
  }

@layer rdg.CheckboxInput {

.cojpd0n7-0-0-beta-34 {
    all: unset
}
  }

@layer rdg.CheckboxIcon {

.cwsfieb7-0-0-beta-34 {
    content: '';
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--rdg-border-color);
    background-color: var(--rdg-background-color)
}

    .cojpd0n7-0-0-beta-34:checked + .cwsfieb7-0-0-beta-34 {
      background-color: var(--rdg-checkbox-color);
      outline: 4px solid var(--rdg-background-color);
      outline-offset: -6px;
    }

    .cojpd0n7-0-0-beta-34:focus + .cwsfieb7-0-0-beta-34 {
      border-color: var(--rdg-checkbox-focus-color);
    }
  }

@layer rdg.CheckboxLabel {

.c1fgadbl7-0-0-beta-34 {
    cursor: default
}

    .c1fgadbl7-0-0-beta-34 .cwsfieb7-0-0-beta-34 {
      border-color: var(--rdg-checkbox-disabled-border-color);
      background-color: var(--rdg-checkbox-disabled-background-color);
    }
  }


@layer rdg.GroupCellContent {.g1w3c5217-0-0-beta-34 {
    outline: none
}
  }

@layer rdg.GroupCellCaret {

.cm5tyhw7-0-0-beta-34 {
    margin-inline-start: 4px;
    stroke: currentColor;
    stroke-width: 1.5px;
    fill: transparent;
    vertical-align: middle
}

    .cm5tyhw7-0-0-beta-34 > path {
      transition: d 0.1s;
    }
  }


@layer rdg.DragHandle {.cadd3bp7-0-0-beta-34 {
    cursor: move;
    position: absolute;
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: 8px;
    block-size: 8px;
    background-color: var(--rdg-selection-color)
}

    .cadd3bp7-0-0-beta-34:hover {
      inline-size: 16px;
      block-size: 16px;
      border: 2px solid var(--rdg-selection-color);
      background-color: var(--rdg-background-color);
    }
  }


@layer rdg.EditCell {.c1tngyp17-0-0-beta-34 {
    padding: 0
}
  }


@layer rdg.Row {.r1otpg647-0-0-beta-34 {
    display: contents;
    line-height: var(--rdg-row-height);
    background-color: var(--rdg-background-color)
}

    .r1otpg647-0-0-beta-34:hover {
      background-color: var(--rdg-row-hover-background-color);
    }

    .r1otpg647-0-0-beta-34[aria-selected='true'] {
      background-color: var(--rdg-row-selected-background-color);
    }

      .r1otpg647-0-0-beta-34[aria-selected='true']:hover {
        background-color: var(--rdg-row-selected-hover-background-color);
      }
  }

@layer rdg.FocusSink {

.rel5gk27-0-0-beta-34 {
    outline: 2px solid var(--rdg-selection-color);
    outline-offset: -2px
}
  }

@layer rdg.FocusSink {
    .r1qymf1z7-0-0-beta-34::before {
      content: '';
      display: inline-block;
      height: 100%;
      position: sticky;
      inset-inline-start: 0;
      border-inline-start: 2px solid var(--rdg-selection-color);
    }
  }


@layer rdg.GroupedRow {
    .gyxx7e97-0-0-beta-34:not([aria-selected='true']) {
      background-color: var(--rdg-header-background-color);
    }

    .gyxx7e97-0-0-beta-34 > .c1wupbe7-0-0-beta-34:not(:last-child):not(.c1730fa47-0-0-beta-34) {
      border-inline-end: none;
    }
  }


@layer rdg.SortableHeaderCell {.hizp7y17-0-0-beta-34 {
    cursor: pointer;
    display: flex
}

    .hizp7y17-0-0-beta-34:focus {
      outline: none;
    }
  }

@layer rdg.SortableHeaderCellName {

.h14cojrm7-0-0-beta-34 {
    flex-grow: 1;
    overflow: hidden;
    overflow: clip;
    text-overflow: ellipsis
}
  }


@layer rdg.HeaderCell {.celq7o97-0-0-beta-34 {
    touch-action: none
}

    .celq7o97-0-0-beta-34::after {
      content: '';
      cursor: col-resize;
      position: absolute;
      inset-block-start: 0;
      inset-inline-end: 0;
      inset-block-end: 0;
      inline-size: 10px;
    }
  }


@layer rdg.HeaderRow {.h197vzie7-0-0-beta-34 {
    display: contents;
    line-height: var(--rdg-header-row-height);
    background-color: var(--rdg-header-background-color);
    font-weight: bold
}

    .h197vzie7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      /* Should have a higher value than 0 to show up above regular cells */
      z-index: 1;
      position: sticky;
      inset-block-start: 0;
    }

    .h197vzie7-0-0-beta-34 > .cd0kgiy7-0-0-beta-34 {
      z-index: 2;
    }
  }


@layer rdg.Cell {.ccpfvsn7-0-0-beta-34 {
    background-color: #ccccff
}
  }

@layer rdg.Cell {

.c1bmg16t7-0-0-beta-34 {
    background-color: #ccccff
}

    .c1bmg16t7-0-0-beta-34.ccpfvsn7-0-0-beta-34 {
      background-color: #9999ff;
    }
  }


@layer rdg.SortIcon {.a1mygwml7-0-0-beta-34 {
    fill: currentColor
}

    .a1mygwml7-0-0-beta-34 > path {
      transition: d 0.1s;
    }
  }


@layer rdg {
    @layer Defaults,
      FocusSink,
      CheckboxInput,
      CheckboxIcon,
      CheckboxLabel,
      Cell,
      HeaderCell,
      SummaryCell,
      EditCell,
      Row,
      HeaderRow,
      SummaryRow,
      GroupedRow,
      Root;

    @layer Defaults {
      .r104f42s7-0-0-beta-34 *,
      .r104f42s7-0-0-beta-34 *::before,
      .r104f42s7-0-0-beta-34 *::after {
        box-sizing: inherit;
      }
    }

    @layer Root {.r104f42s7-0-0-beta-34 {
      --rdg-color: #000;   --rdg-border-color: #ddd;   --rdg-summary-border-color: #aaa;   --rdg-background-color: hsl(0deg 0% 100%);   --rdg-header-background-color: hsl(0deg 0% 97.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 96%);   --rdg-row-selected-background-color: hsl(207deg 76% 92%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 88%);   --rdg-checkbox-color: hsl(207deg 100% 29%);   --rdg-checkbox-focus-color: hsl(207deg 100% 69%);   --rdg-checkbox-disabled-border-color: #ccc;   --rdg-checkbox-disabled-background-color: #ddd;
      --rdg-selection-color: #66afe9;
      --rdg-font-size: 14px;

      display: grid;

      color-scheme: var(--rdg-color-scheme, light dark);

      /* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */
      /* We set a stacking context so internal elements don't render on top of external elements. */
      /* size containment is not used as it could break "width: min-content" for example, and the grid would infinitely resize on Chromium browsers */
      contain: content;
      content-visibility: auto;
      block-size: 350px;
      border: 1px solid var(--rdg-border-color);
      box-sizing: border-box;
      overflow: auto;
      background-color: var(--rdg-background-color);
      color: var(--rdg-color);
      font-size: var(--rdg-font-size)

      /* needed on Firefox */
}
      .r104f42s7-0-0-beta-34::before {
        content: '';
        grid-column: 1/-1;
        grid-row: 1/-1;
      }

      .r104f42s7-0-0-beta-34.rdg-dark {
        --rdg-color-scheme: dark;
        --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
      }

      .r104f42s7-0-0-beta-34.rdg-light {
        --rdg-color-scheme: light;
      }

      @media (prefers-color-scheme: dark) {
        .r104f42s7-0-0-beta-34:not(.rdg-light) {
          --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
        }
      }
    }
  }

@layer rdg.Root {

.v7ly7s7-0-0-beta-34 {
    user-select: none
}

    .v7ly7s7-0-0-beta-34 .r1otpg647-0-0-beta-34 {
      cursor: move;
    }
  }

@layer rdg.FocusSink {

.fc4f4zb7-0-0-beta-34 {
    grid-column: 1/-1;
    pointer-events: none;
    /* Should have a higher value than 2 to show up above header row */
    z-index: 3
}
  }


@layer rdg.SummaryCell {.s1n3hxke7-0-0-beta-34 {
    inset-block-start: var(--rdg-summary-row-top);
    inset-block-end: var(--rdg-summary-row-bottom)
}
  }


@layer rdg.SummaryRow {.snfqesz7-0-0-beta-34 {
    line-height: var(--rdg-summary-row-height)
}

    .snfqesz7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      position: sticky;
    }
  }

@layer rdg.SummaryRow {
    .t1jijrjz7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      z-index: 1;
    }

    .t1jijrjz7-0-0-beta-34 > .cd0kgiy7-0-0-beta-34 {
      z-index: 2;
    }
  }

@layer rdg.SummaryRow {
    .t14bmecc7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      border-block-end: 2px solid var(--rdg-summary-border-color);
    }
  }

@layer rdg.SummaryRow {
    .b1odhhml7-0-0-beta-34 > .c1wupbe7-0-0-beta-34 {
      border-block-start: 2px solid var(--rdg-summary-border-color);
    }
  }


@layer rdg.TextEditor {.tlmcuo07-0-0-beta-34 {
    appearance: none;

    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border: 2px solid #ccc;
    vertical-align: top;
    color: var(--rdg-color);
    background-color: var(--rdg-background-color);

    font-family: inherit;
    font-size: var(--rdg-font-size)
}

    .tlmcuo07-0-0-beta-34:focus {
      border-color: var(--rdg-selection-color);
      outline: none;
    }

    .tlmcuo07-0-0-beta-34::placeholder {
      color: #999;
      opacity: 1;
    }
  }

:root,
:host,
.sl-theme-light {
  color-scheme: light;

  --sl-color-gray-50: hsl(0 0% 97.5%);
  --sl-color-gray-100: hsl(240 4.8% 95.9%);
  --sl-color-gray-200: hsl(240 5.9% 90%);
  --sl-color-gray-300: hsl(240 4.9% 83.9%);
  --sl-color-gray-400: hsl(240 5% 64.9%);
  --sl-color-gray-500: hsl(240 3.8% 46.1%);
  --sl-color-gray-600: hsl(240 5.2% 33.9%);
  --sl-color-gray-700: hsl(240 5.3% 26.1%);
  --sl-color-gray-800: hsl(240 3.7% 15.9%);
  --sl-color-gray-900: hsl(240 5.9% 10%);
  --sl-color-gray-950: hsl(240 7.3% 8%);

  --sl-color-red-50: hsl(0 85.7% 97.3%);
  --sl-color-red-100: hsl(0 93.3% 94.1%);
  --sl-color-red-200: hsl(0 96.3% 89.4%);
  --sl-color-red-300: hsl(0 93.5% 81.8%);
  --sl-color-red-400: hsl(0 90.6% 70.8%);
  --sl-color-red-500: hsl(0 84.2% 60.2%);
  --sl-color-red-600: hsl(0 72.2% 50.6%);
  --sl-color-red-700: hsl(0 73.7% 41.8%);
  --sl-color-red-800: hsl(0 70% 35.3%);
  --sl-color-red-900: hsl(0 62.8% 30.6%);
  --sl-color-red-950: hsl(0 60% 19.6%);

  --sl-color-orange-50: hsl(33.3 100% 96.5%);
  --sl-color-orange-100: hsl(34.3 100% 91.8%);
  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);
  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);
  --sl-color-orange-400: hsl(27 96% 61%);
  --sl-color-orange-500: hsl(24.6 95% 53.1%);
  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);
  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);
  --sl-color-orange-800: hsl(15 79.1% 33.7%);
  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);
  --sl-color-orange-950: hsl(15.2 69.1% 19%);

  --sl-color-amber-50: hsl(48 100% 96.1%);
  --sl-color-amber-100: hsl(48 96.5% 88.8%);
  --sl-color-amber-200: hsl(48 96.6% 76.7%);
  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);
  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);
  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);
  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);
  --sl-color-amber-700: hsl(26 90.5% 37.1%);
  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);
  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);
  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);

  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);
  --sl-color-yellow-100: hsl(54.9 96.7% 88%);
  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);
  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);
  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);
  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);
  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);
  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);
  --sl-color-yellow-800: hsl(31.8 81% 28.8%);
  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);
  --sl-color-yellow-950: hsl(33.1 69% 13.9%);

  --sl-color-lime-50: hsl(78.3 92% 95.1%);
  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);
  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);
  --sl-color-lime-300: hsl(82 84.5% 67.1%);
  --sl-color-lime-400: hsl(82.7 78% 55.5%);
  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);
  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);
  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);
  --sl-color-lime-800: hsl(86.3 69% 22.7%);
  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);
  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);

  --sl-color-green-50: hsl(138.5 76.5% 96.7%);
  --sl-color-green-100: hsl(140.6 84.2% 92.5%);
  --sl-color-green-200: hsl(141 78.9% 85.1%);
  --sl-color-green-300: hsl(141.7 76.6% 73.1%);
  --sl-color-green-400: hsl(141.9 69.2% 58%);
  --sl-color-green-500: hsl(142.1 70.6% 45.3%);
  --sl-color-green-600: hsl(142.1 76.2% 36.3%);
  --sl-color-green-700: hsl(142.4 71.8% 29.2%);
  --sl-color-green-800: hsl(142.8 64.2% 24.1%);
  --sl-color-green-900: hsl(143.8 61.2% 20.2%);
  --sl-color-green-950: hsl(144.3 60.7% 12%);

  --sl-color-emerald-50: hsl(151.8 81% 95.9%);
  --sl-color-emerald-100: hsl(149.3 80.4% 90%);
  --sl-color-emerald-200: hsl(152.4 76% 80.4%);
  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);
  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);
  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);
  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);
  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);
  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);
  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);
  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);

  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);
  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);
  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);
  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);
  --sl-color-teal-400: hsl(172.5 66% 50.4%);
  --sl-color-teal-500: hsl(173.4 80.4% 40%);
  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);
  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);
  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);
  --sl-color-teal-900: hsl(175.9 60.8% 19%);
  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);

  --sl-color-cyan-50: hsl(183.2 100% 96.3%);
  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);
  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);
  --sl-color-cyan-300: hsl(187 92.4% 69%);
  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);
  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);
  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);
  --sl-color-cyan-700: hsl(192.9 82.3% 31%);
  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);
  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);
  --sl-color-cyan-950: hsl(196.8 61% 16.1%);

  --sl-color-sky-50: hsl(204 100% 97.1%);
  --sl-color-sky-100: hsl(204 93.8% 93.7%);
  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);
  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);
  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);
  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);
  --sl-color-sky-600: hsl(200.4 98% 39.4%);
  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);
  --sl-color-sky-800: hsl(201 90% 27.5%);
  --sl-color-sky-900: hsl(202 80.3% 23.9%);
  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);

  --sl-color-blue-50: hsl(213.8 100% 96.9%);
  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);
  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);
  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);
  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);
  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);
  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);
  --sl-color-blue-700: hsl(224.3 76.3% 48%);
  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);
  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);
  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);

  --sl-color-indigo-50: hsl(225.9 100% 96.7%);
  --sl-color-indigo-100: hsl(226.5 100% 93.9%);
  --sl-color-indigo-200: hsl(228 96.5% 88.8%);
  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);
  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);
  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);
  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);
  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);
  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);
  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);
  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);

  --sl-color-violet-50: hsl(250 100% 97.6%);
  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);
  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);
  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);
  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);
  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);
  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);
  --sl-color-violet-700: hsl(263.4 70% 50.4%);
  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);
  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);
  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);

  --sl-color-purple-50: hsl(270 100% 98%);
  --sl-color-purple-100: hsl(268.7 100% 95.5%);
  --sl-color-purple-200: hsl(268.6 100% 91.8%);
  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);
  --sl-color-purple-400: hsl(270 95.2% 75.3%);
  --sl-color-purple-500: hsl(270.7 91% 65.1%);
  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);
  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);
  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);
  --sl-color-purple-900: hsl(273.6 65.6% 32%);
  --sl-color-purple-950: hsl(276 59.5% 16.5%);

  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);
  --sl-color-fuchsia-100: hsl(287 100% 95.5%);
  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);
  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);
  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);
  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);
  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);
  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);
  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);
  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);
  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);
  --sl-color-pink-700: hsl(335.1 77.6% 42%);
  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);
  --sl-color-pink-900: hsl(335.9 69% 30.4%);
  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);

  --sl-color-rose-50: hsl(355.7 100% 97.3%);
  --sl-color-rose-100: hsl(355.6 100% 94.7%);
  --sl-color-rose-200: hsl(352.7 96.1% 90%);
  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);
  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);
  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);
  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);
  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);
  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);
  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);
  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);

  --sl-color-primary-50: var(--sl-color-sky-50);
  --sl-color-primary-100: var(--sl-color-sky-100);
  --sl-color-primary-200: var(--sl-color-sky-200);
  --sl-color-primary-300: var(--sl-color-sky-300);
  --sl-color-primary-400: var(--sl-color-sky-400);
  --sl-color-primary-500: var(--sl-color-sky-500);
  --sl-color-primary-600: var(--sl-color-sky-600);
  --sl-color-primary-700: var(--sl-color-sky-700);
  --sl-color-primary-800: var(--sl-color-sky-800);
  --sl-color-primary-900: var(--sl-color-sky-900);
  --sl-color-primary-950: var(--sl-color-sky-950);

  --sl-color-success-50: var(--sl-color-green-50);
  --sl-color-success-100: var(--sl-color-green-100);
  --sl-color-success-200: var(--sl-color-green-200);
  --sl-color-success-300: var(--sl-color-green-300);
  --sl-color-success-400: var(--sl-color-green-400);
  --sl-color-success-500: var(--sl-color-green-500);
  --sl-color-success-600: var(--sl-color-green-600);
  --sl-color-success-700: var(--sl-color-green-700);
  --sl-color-success-800: var(--sl-color-green-800);
  --sl-color-success-900: var(--sl-color-green-900);
  --sl-color-success-950: var(--sl-color-green-950);

  --sl-color-warning-50: var(--sl-color-amber-50);
  --sl-color-warning-100: var(--sl-color-amber-100);
  --sl-color-warning-200: var(--sl-color-amber-200);
  --sl-color-warning-300: var(--sl-color-amber-300);
  --sl-color-warning-400: var(--sl-color-amber-400);
  --sl-color-warning-500: var(--sl-color-amber-500);
  --sl-color-warning-600: var(--sl-color-amber-600);
  --sl-color-warning-700: var(--sl-color-amber-700);
  --sl-color-warning-800: var(--sl-color-amber-800);
  --sl-color-warning-900: var(--sl-color-amber-900);
  --sl-color-warning-950: var(--sl-color-amber-950);

  --sl-color-danger-50: var(--sl-color-red-50);
  --sl-color-danger-100: var(--sl-color-red-100);
  --sl-color-danger-200: var(--sl-color-red-200);
  --sl-color-danger-300: var(--sl-color-red-300);
  --sl-color-danger-400: var(--sl-color-red-400);
  --sl-color-danger-500: var(--sl-color-red-500);
  --sl-color-danger-600: var(--sl-color-red-600);
  --sl-color-danger-700: var(--sl-color-red-700);
  --sl-color-danger-800: var(--sl-color-red-800);
  --sl-color-danger-900: var(--sl-color-red-900);
  --sl-color-danger-950: var(--sl-color-red-950);

  --sl-color-neutral-50: var(--sl-color-gray-50);
  --sl-color-neutral-100: var(--sl-color-gray-100);
  --sl-color-neutral-200: var(--sl-color-gray-200);
  --sl-color-neutral-300: var(--sl-color-gray-300);
  --sl-color-neutral-400: var(--sl-color-gray-400);
  --sl-color-neutral-500: var(--sl-color-gray-500);
  --sl-color-neutral-600: var(--sl-color-gray-600);
  --sl-color-neutral-700: var(--sl-color-gray-700);
  --sl-color-neutral-800: var(--sl-color-gray-800);
  --sl-color-neutral-900: var(--sl-color-gray-900);
  --sl-color-neutral-950: var(--sl-color-gray-950);

  --sl-color-neutral-0: hsl(0, 0%, 100%);
  --sl-color-neutral-1000: hsl(0, 0%, 0%);

  --sl-border-radius-small: 0.1875rem;
  --sl-border-radius-medium: 0.25rem;
  --sl-border-radius-large: 0.5rem;
  --sl-border-radius-x-large: 1rem;

  --sl-border-radius-circle: 50%;
  --sl-border-radius-pill: 9999px;

  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

  --sl-spacing-3x-small: 0.125rem;
  --sl-spacing-2x-small: 0.25rem;
  --sl-spacing-x-small: 0.5rem;
  --sl-spacing-small: 0.75rem;
  --sl-spacing-medium: 1rem;
  --sl-spacing-large: 1.25rem;
  --sl-spacing-x-large: 1.75rem;
  --sl-spacing-2x-large: 2.25rem;
  --sl-spacing-3x-large: 3rem;
  --sl-spacing-4x-large: 4.5rem;

  --sl-transition-x-slow: 1000ms;
  --sl-transition-slow: 500ms;
  --sl-transition-medium: 250ms;
  --sl-transition-fast: 150ms;
  --sl-transition-x-fast: 50ms;

  --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --sl-font-serif: Georgia, "Times New Roman", serif;

  --sl-font-size-2x-small: 0.625rem;
  --sl-font-size-x-small: 0.75rem;
  --sl-font-size-small: 0.875rem;
  --sl-font-size-medium: 1rem;
  --sl-font-size-large: 1.25rem;
  --sl-font-size-x-large: 1.5rem;
  --sl-font-size-2x-large: 2.25rem;
  --sl-font-size-3x-large: 3rem;
  --sl-font-size-4x-large: 4.5rem;

  --sl-font-weight-light: 300;
  --sl-font-weight-normal: 400;
  --sl-font-weight-semibold: 500;
  --sl-font-weight-bold: 700;

  --sl-letter-spacing-denser: -0.03em;
  --sl-letter-spacing-dense: -0.015em;
  --sl-letter-spacing-normal: normal;
  --sl-letter-spacing-loose: 0.075em;
  --sl-letter-spacing-looser: 0.15em;

  --sl-line-height-denser: 1;
  --sl-line-height-dense: 1.4;
  --sl-line-height-normal: 1.8;
  --sl-line-height-loose: 2.2;
  --sl-line-height-looser: 2.6;

  --sl-focus-ring-color: var(--sl-color-primary-600);
  --sl-focus-ring-style: solid;
  --sl-focus-ring-width: 3px;
  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)
    var(--sl-focus-ring-color);
  --sl-focus-ring-offset: 1px;

  --sl-button-font-size-small: var(--sl-font-size-x-small);
  --sl-button-font-size-medium: var(--sl-font-size-small);
  --sl-button-font-size-large: var(--sl-font-size-medium);

  --sl-input-height-small: 1.875rem;
  --sl-input-height-medium: 2.5rem;
  --sl-input-height-large: 3.125rem;

  --sl-input-background-color: var(--sl-color-neutral-0);
  --sl-input-background-color-hover: var(--sl-input-background-color);
  --sl-input-background-color-focus: var(--sl-input-background-color);
  --sl-input-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-border-color: var(--sl-color-neutral-300);
  --sl-input-border-color-hover: var(--sl-color-neutral-400);
  --sl-input-border-color-focus: var(--sl-color-primary-500);
  --sl-input-border-color-disabled: var(--sl-color-neutral-300);
  --sl-input-border-width: 1px;
  --sl-input-required-content: "*";
  --sl-input-required-content-offset: -2px;
  --sl-input-required-content-color: var(--sl-input-label-color);

  --sl-input-border-radius-small: var(--sl-border-radius-medium);
  --sl-input-border-radius-medium: var(--sl-border-radius-medium);
  --sl-input-border-radius-large: var(--sl-border-radius-medium);

  --sl-input-font-family: var(--sl-font-sans);
  --sl-input-font-weight: var(--sl-font-weight-normal);
  --sl-input-font-size-small: var(--sl-font-size-small);
  --sl-input-font-size-medium: var(--sl-font-size-medium);
  --sl-input-font-size-large: var(--sl-font-size-large);
  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

  --sl-input-color: var(--sl-color-neutral-700);
  --sl-input-color-hover: var(--sl-color-neutral-700);
  --sl-input-color-focus: var(--sl-color-neutral-700);
  --sl-input-color-disabled: var(--sl-color-neutral-900);
  --sl-input-icon-color: var(--sl-color-neutral-500);
  --sl-input-icon-color-hover: var(--sl-color-neutral-600);
  --sl-input-icon-color-focus: var(--sl-color-neutral-600);
  --sl-input-placeholder-color: var(--sl-color-neutral-500);
  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
  --sl-input-spacing-small: var(--sl-spacing-small);
  --sl-input-spacing-medium: var(--sl-spacing-medium);
  --sl-input-spacing-large: var(--sl-spacing-large);

  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
  --sl-input-focus-ring-offset: 0;

  --sl-input-filled-background-color: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
  --sl-input-filled-color: var(--sl-color-neutral-800);
  --sl-input-filled-color-hover: var(--sl-color-neutral-800);
  --sl-input-filled-color-focus: var(--sl-color-neutral-700);
  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

  --sl-input-label-font-size-small: var(--sl-font-size-small);
  --sl-input-label-font-size-medium: var(--sl-font-size-medium);
  --sl-input-label-font-size-large: var(--sl-font-size-large);
  --sl-input-label-color: inherit;

  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);
  --sl-input-help-text-color: var(--sl-color-neutral-500);

  --sl-toggle-size-small: 0.875rem;
  --sl-toggle-size-medium: 1.125rem;
  --sl-toggle-size-large: 1.375rem;

  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

  --sl-panel-background-color: var(--sl-color-neutral-0);
  --sl-panel-border-color: var(--sl-color-neutral-200);
  --sl-panel-border-width: 1px;

  --sl-tooltip-border-radius: var(--sl-border-radius-medium);
  --sl-tooltip-background-color: var(--sl-color-neutral-800);
  --sl-tooltip-color: var(--sl-color-neutral-0);
  --sl-tooltip-font-family: var(--sl-font-sans);
  --sl-tooltip-font-weight: var(--sl-font-weight-normal);
  --sl-tooltip-font-size: var(--sl-font-size-small);
  --sl-tooltip-line-height: var(--sl-line-height-dense);
  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
  --sl-tooltip-arrow-size: 6px;

  --sl-z-index-drawer: 700;
  --sl-z-index-dialog: 800;
  --sl-z-index-dropdown: 900;
  --sl-z-index-toast: 950;
  --sl-z-index-tooltip: 1000;
}

@supports (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    scrollbar-gutter: stable !important;
    overflow: hidden !important;
  }
}

@supports not (scrollbar-gutter: stable) {
  .sl-scroll-lock {
    padding-right: var(--sl-scroll-lock-size) !important;
    overflow: hidden !important;
  }
}

.sl-toast-stack {
  position: fixed;
  top: 0;
  inset-inline-end: 0;
  z-index: var(--sl-z-index-toast);
  width: 28rem;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.sl-toast-stack sl-alert {
  margin: var(--sl-spacing-medium);
}

.sl-toast-stack sl-alert::part(base) {
  box-shadow: var(--sl-shadow-large);
}

.chapter-select {
  display: flex;
  padding: 0 8px 0 24px;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
  background: var(--sl-color-neutral-50, #F9F9F9);

  > div {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .active {
    border-radius: 4px;
    background: var(--sl-color-amber-100, #FEF3C7);
  }

  :hover {
    background: var(--sl-color-amber-50);
  }
}
`, "top");
export {
  nb as BookChapterControl,
  vr as Button,
  ab as ChapterRangeSelector,
  Uf as Checkbox,
  Qs as ComboBox,
  qf as GridMenu,
  lb as IconButton,
  Sr as LabelPosition,
  jf as MenuItem,
  db as RefSelector,
  ub as SearchBar,
  hb as Slider,
  pb as Snackbar,
  fb as Switch,
  mb as Table,
  qo as TextField,
  gb as Toolbar,
  bb as useEvent,
  vb as useEventAsync,
  Bg as usePromise
};
//# sourceMappingURL=index.js.map
