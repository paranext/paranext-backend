import qs, { jsx as P, jsxs as ye, Fragment as jn } from "react/jsx-runtime";
import { Button as Gs, Autocomplete as Xs, TextField as bi, FormControlLabel as go, FormLabel as Ks, Checkbox as Ys, MenuItem as Js, ListItemText as Zs, ListItemIcon as vi, Menu as Qs, Grid as yi, List as ea, IconButton as xi, Drawer as ta, Paper as na, Slider as ra, Snackbar as oa, Switch as ia, AppBar as sa, Toolbar as aa } from "@mui/material";
import * as w from "react";
import Ct, { useMemo as Dt, useState as ut, useCallback as et, useRef as br, useEffect as Bn } from "react";
import be from "clsx";
import la, { ThemeContext as ca, internal_processStyles as ua } from "@mui/styled-engine";
import * as da from "react-dom";
import vn from "react-dom";
import { offsetBook as bo, FIRST_SCR_BOOK_NUM as pa, offsetChapter as vo, FIRST_SCR_CHAPTER_NUM as fa, getChaptersForBook as ha, offsetVerse as yo, FIRST_SCR_VERSE_NUM as ma } from "platform-bible-utils";
import ga, { SelectColumn as ba } from "react-data-grid";
function vt({
  id: e,
  isDisabled: t = !1,
  className: n,
  onClick: r,
  onContextMenu: o,
  children: i
}) {
  return /* @__PURE__ */ P(
    Gs,
    {
      id: e,
      disabled: t,
      className: `papi-button ${n ?? ""}`,
      onClick: r,
      onContextMenu: o,
      children: i
    }
  );
}
function vr({
  id: e,
  title: t,
  isDisabled: n = !1,
  isClearable: r = !0,
  hasError: o = !1,
  isFullWidth: i = !1,
  width: a,
  options: l = [],
  className: c,
  value: u,
  onChange: d,
  onFocus: f,
  onBlur: p,
  getOptionLabel: b
}) {
  return /* @__PURE__ */ P(
    Xs,
    {
      id: e,
      disablePortal: !0,
      disabled: n,
      disableClearable: !r,
      fullWidth: i,
      options: l,
      className: `papi-combo-box ${o ? "error" : ""} ${c ?? ""}`,
      value: u,
      onChange: d,
      onFocus: f,
      onBlur: p,
      getOptionLabel: b,
      renderInput: (v) => /* @__PURE__ */ P(
        bi,
        {
          ...v,
          error: o,
          fullWidth: i,
          disabled: n,
          label: t,
          style: { width: a }
        }
      )
    }
  );
}
function Vf({
  startChapter: e,
  endChapter: t,
  handleSelectStartChapter: n,
  handleSelectEndChapter: r,
  isDisabled: o,
  chapterCount: i
}) {
  const a = Dt(
    () => Array.from({ length: i }, (u, d) => d + 1),
    [i]
  ), l = (u, d) => {
    n(d), d > t && r(d);
  }, c = (u, d) => {
    r(d), d < e && n(d);
  };
  return /* @__PURE__ */ ye(jn, { children: [
    /* @__PURE__ */ P(
      go,
      {
        className: "book-selection-chapter-form-label start",
        disabled: o,
        control: /* @__PURE__ */ P(
          vr,
          {
            onChange: (u, d) => l(u, d),
            className: "book-selection-chapter",
            isClearable: !1,
            options: a,
            getOptionLabel: (u) => u.toString(),
            value: e,
            isDisabled: o
          },
          "start chapter"
        ),
        label: "Chapters",
        labelPlacement: "start"
      }
    ),
    /* @__PURE__ */ P(
      go,
      {
        className: "book-selection-chapter-form-label end",
        disabled: o,
        control: /* @__PURE__ */ P(
          vr,
          {
            onChange: (u, d) => c(u, d),
            className: "book-selection-chapter",
            isClearable: !1,
            options: a,
            getOptionLabel: (u) => u.toString(),
            value: t,
            isDisabled: o
          },
          "end chapter"
        ),
        label: "to",
        labelPlacement: "start"
      }
    )
  ] });
}
var kt = /* @__PURE__ */ ((e) => (e.After = "after", e.Before = "before", e.Above = "above", e.Below = "below", e))(kt || {});
function va({
  id: e,
  isChecked: t,
  labelText: n = "",
  labelPosition: r = kt.After,
  isIndeterminate: o = !1,
  isDefaultChecked: i,
  isDisabled: a = !1,
  hasError: l = !1,
  className: c,
  onChange: u
}) {
  const d = /* @__PURE__ */ P(
    Ys,
    {
      id: e,
      checked: t,
      indeterminate: o,
      defaultChecked: i,
      disabled: a,
      className: `papi-checkbox ${l ? "error" : ""} ${c ?? ""}`,
      onChange: u
    }
  );
  let f;
  if (n) {
    const p = r === kt.Before || r === kt.Above, b = /* @__PURE__ */ P("span", { className: `papi-checkbox-label ${l ? "error" : ""} ${c ?? ""}`, children: n }), v = r === kt.Before || r === kt.After, g = v ? b : /* @__PURE__ */ P("div", { children: b }), m = v ? d : /* @__PURE__ */ P("div", { children: d });
    f = /* @__PURE__ */ ye(
      Ks,
      {
        className: `papi-checkbox ${r.toString()}`,
        disabled: a,
        error: l,
        children: [
          p && g,
          m,
          !p && g
        ]
      }
    );
  } else
    f = d;
  return f;
}
function ce(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, T.apply(this, arguments);
}
function ya(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xa(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var yr = { exports: {} }, yn = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function Ea() {
  if (xo)
    return ie;
  xo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var k = h.$$typeof;
      switch (k) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case r:
            case i:
            case o:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case d:
                case v:
                case b:
                case a:
                  return h;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function x(h) {
    return y(h) === u;
  }
  return ie.AsyncMode = c, ie.ConcurrentMode = u, ie.ContextConsumer = l, ie.ContextProvider = a, ie.Element = t, ie.ForwardRef = d, ie.Fragment = r, ie.Lazy = v, ie.Memo = b, ie.Portal = n, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = f, ie.isAsyncMode = function(h) {
    return x(h) || y(h) === c;
  }, ie.isConcurrentMode = x, ie.isContextConsumer = function(h) {
    return y(h) === l;
  }, ie.isContextProvider = function(h) {
    return y(h) === a;
  }, ie.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ie.isForwardRef = function(h) {
    return y(h) === d;
  }, ie.isFragment = function(h) {
    return y(h) === r;
  }, ie.isLazy = function(h) {
    return y(h) === v;
  }, ie.isMemo = function(h) {
    return y(h) === b;
  }, ie.isPortal = function(h) {
    return y(h) === n;
  }, ie.isProfiler = function(h) {
    return y(h) === i;
  }, ie.isStrictMode = function(h) {
    return y(h) === o;
  }, ie.isSuspense = function(h) {
    return y(h) === f;
  }, ie.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === i || h === o || h === f || h === p || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === b || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === m || h.$$typeof === E || h.$$typeof === $ || h.$$typeof === g);
  }, ie.typeOf = y, ie;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function wa() {
  return Eo || (Eo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function y(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === r || N === u || N === i || N === o || N === f || N === p || typeof N == "object" && N !== null && (N.$$typeof === v || N.$$typeof === b || N.$$typeof === a || N.$$typeof === l || N.$$typeof === d || N.$$typeof === m || N.$$typeof === E || N.$$typeof === $ || N.$$typeof === g);
    }
    function x(N) {
      if (typeof N == "object" && N !== null) {
        var J = N.$$typeof;
        switch (J) {
          case t:
            var C = N.type;
            switch (C) {
              case c:
              case u:
              case r:
              case i:
              case o:
              case f:
                return C;
              default:
                var re = C && C.$$typeof;
                switch (re) {
                  case l:
                  case d:
                  case v:
                  case b:
                  case a:
                    return re;
                  default:
                    return J;
                }
            }
          case n:
            return J;
        }
      }
    }
    var h = c, k = u, S = l, A = a, I = t, D = d, B = r, z = v, G = b, L = n, _ = i, R = o, j = f, Q = !1;
    function Z(N) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(N) || x(N) === c;
    }
    function O(N) {
      return x(N) === u;
    }
    function M(N) {
      return x(N) === l;
    }
    function V(N) {
      return x(N) === a;
    }
    function X(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function F(N) {
      return x(N) === d;
    }
    function U(N) {
      return x(N) === r;
    }
    function W(N) {
      return x(N) === v;
    }
    function q(N) {
      return x(N) === b;
    }
    function H(N) {
      return x(N) === n;
    }
    function K(N) {
      return x(N) === i;
    }
    function Y(N) {
      return x(N) === o;
    }
    function ne(N) {
      return x(N) === f;
    }
    se.AsyncMode = h, se.ConcurrentMode = k, se.ContextConsumer = S, se.ContextProvider = A, se.Element = I, se.ForwardRef = D, se.Fragment = B, se.Lazy = z, se.Memo = G, se.Portal = L, se.Profiler = _, se.StrictMode = R, se.Suspense = j, se.isAsyncMode = Z, se.isConcurrentMode = O, se.isContextConsumer = M, se.isContextProvider = V, se.isElement = X, se.isForwardRef = F, se.isFragment = U, se.isLazy = W, se.isMemo = q, se.isPortal = H, se.isProfiler = K, se.isStrictMode = Y, se.isSuspense = ne, se.isValidElementType = y, se.typeOf = x;
  }()), se;
}
var wo;
function Ei() {
  return wo || (wo = 1, process.env.NODE_ENV === "production" ? yn.exports = Ea() : yn.exports = wa()), yn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nr, To;
function Ta() {
  if (To)
    return nr;
  To = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return nr = o() ? Object.assign : function(i, a) {
    for (var l, c = r(i), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          n.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, nr;
}
var rr, Oo;
function $r() {
  if (Oo)
    return rr;
  Oo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return rr = e, rr;
}
var or, ko;
function wi() {
  return ko || (ko = 1, or = Function.call.bind(Object.prototype.hasOwnProperty)), or;
}
var ir, So;
function Oa() {
  if (So)
    return ir;
  So = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = $r(), n = {}, r = wi();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var f;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = i[d](a, d, c, l, null, t);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ir = o, ir;
}
var sr, Po;
function ka() {
  if (Po)
    return sr;
  Po = 1;
  var e = Ei(), t = Ta(), n = $r(), r = wi(), o = Oa(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return sr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(O) {
      var M = O && (u && O[u] || O[d]);
      if (typeof M == "function")
        return M;
    }
    var p = "<<anonymous>>", b = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: $(),
      arrayOf: y,
      element: x(),
      elementType: h(),
      instanceOf: k,
      node: D(),
      objectOf: A,
      oneOf: S,
      oneOfType: I,
      shape: z,
      exact: G
    };
    function v(O, M) {
      return O === M ? O !== 0 || 1 / O === 1 / M : O !== O && M !== M;
    }
    function g(O, M) {
      this.message = O, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(O) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, V = 0;
      function X(U, W, q, H, K, Y, ne) {
        if (H = H || p, Y = Y || q, ne !== n) {
          if (c) {
            var N = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw N.name = "Invariant Violation", N;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = H + ":" + q;
            !M[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[J] = !0, V++);
          }
        }
        return W[q] == null ? U ? W[q] === null ? new g("The " + K + " `" + Y + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new g("The " + K + " `" + Y + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : O(W, q, H, K, Y);
      }
      var F = X.bind(null, !1);
      return F.isRequired = X.bind(null, !0), F;
    }
    function E(O) {
      function M(V, X, F, U, W, q) {
        var H = V[X], K = R(H);
        if (K !== O) {
          var Y = j(H);
          return new g(
            "Invalid " + U + " `" + W + "` of type " + ("`" + Y + "` supplied to `" + F + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return m(M);
    }
    function $() {
      return m(a);
    }
    function y(O) {
      function M(V, X, F, U, W) {
        if (typeof O != "function")
          return new g("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var q = V[X];
        if (!Array.isArray(q)) {
          var H = R(q);
          return new g("Invalid " + U + " `" + W + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an array."));
        }
        for (var K = 0; K < q.length; K++) {
          var Y = O(q, K, F, U, W + "[" + K + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return m(M);
    }
    function x() {
      function O(M, V, X, F, U) {
        var W = M[V];
        if (!l(W)) {
          var q = R(W);
          return new g("Invalid " + F + " `" + U + "` of type " + ("`" + q + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(O);
    }
    function h() {
      function O(M, V, X, F, U) {
        var W = M[V];
        if (!e.isValidElementType(W)) {
          var q = R(W);
          return new g("Invalid " + F + " `" + U + "` of type " + ("`" + q + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(O);
    }
    function k(O) {
      function M(V, X, F, U, W) {
        if (!(V[X] instanceof O)) {
          var q = O.name || p, H = Z(V[X]);
          return new g("Invalid " + U + " `" + W + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return m(M);
    }
    function S(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function M(V, X, F, U, W) {
        for (var q = V[X], H = 0; H < O.length; H++)
          if (v(q, O[H]))
            return null;
        var K = JSON.stringify(O, function(ne, N) {
          var J = j(N);
          return J === "symbol" ? String(N) : N;
        });
        return new g("Invalid " + U + " `" + W + "` of value `" + String(q) + "` " + ("supplied to `" + F + "`, expected one of " + K + "."));
      }
      return m(M);
    }
    function A(O) {
      function M(V, X, F, U, W) {
        if (typeof O != "function")
          return new g("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var q = V[X], H = R(q);
        if (H !== "object")
          return new g("Invalid " + U + " `" + W + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected an object."));
        for (var K in q)
          if (r(q, K)) {
            var Y = O(q, K, F, U, W + "." + K, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return m(M);
    }
    function I(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var M = 0; M < O.length; M++) {
        var V = O[M];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(V) + " at index " + M + "."
          ), a;
      }
      function X(F, U, W, q, H) {
        for (var K = [], Y = 0; Y < O.length; Y++) {
          var ne = O[Y], N = ne(F, U, W, q, H, n);
          if (N == null)
            return null;
          N.data && r(N.data, "expectedType") && K.push(N.data.expectedType);
        }
        var J = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new g("Invalid " + q + " `" + H + "` supplied to " + ("`" + W + "`" + J + "."));
      }
      return m(X);
    }
    function D() {
      function O(M, V, X, F, U) {
        return L(M[V]) ? null : new g("Invalid " + F + " `" + U + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return m(O);
    }
    function B(O, M, V, X, F) {
      return new g(
        (O || "React class") + ": " + M + " type `" + V + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function z(O) {
      function M(V, X, F, U, W) {
        var q = V[X], H = R(q);
        if (H !== "object")
          return new g("Invalid " + U + " `" + W + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var K in O) {
          var Y = O[K];
          if (typeof Y != "function")
            return B(F, U, W, K, j(Y));
          var ne = Y(q, K, F, U, W + "." + K, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return m(M);
    }
    function G(O) {
      function M(V, X, F, U, W) {
        var q = V[X], H = R(q);
        if (H !== "object")
          return new g("Invalid " + U + " `" + W + "` of type `" + H + "` " + ("supplied to `" + F + "`, expected `object`."));
        var K = t({}, V[X], O);
        for (var Y in K) {
          var ne = O[Y];
          if (r(O, Y) && typeof ne != "function")
            return B(F, U, W, Y, j(ne));
          if (!ne)
            return new g(
              "Invalid " + U + " `" + W + "` key `" + Y + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(V[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var N = ne(q, Y, F, U, W + "." + Y, n);
          if (N)
            return N;
        }
        return null;
      }
      return m(M);
    }
    function L(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(L);
          if (O === null || l(O))
            return !0;
          var M = f(O);
          if (M) {
            var V = M.call(O), X;
            if (M !== O.entries) {
              for (; !(X = V.next()).done; )
                if (!L(X.value))
                  return !1;
            } else
              for (; !(X = V.next()).done; ) {
                var F = X.value;
                if (F && !L(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _(O, M) {
      return O === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function R(O) {
      var M = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : _(M, O) ? "symbol" : M;
    }
    function j(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var M = R(O);
      if (M === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function Q(O) {
      var M = j(O);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function Z(O) {
      return !O.constructor || !O.constructor.name ? p : O.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, sr;
}
var ar, Co;
function Sa() {
  if (Co)
    return ar;
  Co = 1;
  var e = $r();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ar = function() {
    function r(a, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, ar;
}
if (process.env.NODE_ENV !== "production") {
  var Pa = Ei(), Ca = !0;
  yr.exports = ka()(Pa.isElement, Ca);
} else
  yr.exports = Sa()();
var Ra = yr.exports;
const s = /* @__PURE__ */ ya(Ra);
function jt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ct(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ti(e) {
  if (!ct(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ti(e[n]);
  }), t;
}
function qe(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? T({}, e) : e;
  return ct(e) && ct(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (ct(t[o]) && o in e && ct(e[o]) ? r[o] = qe(e[o], t[o], n) : n.clone ? r[o] = ct(t[o]) ? Ti(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function Na(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Oi(e, t, n, r, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !Na(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ki = jt(s.element, Oi);
ki.isRequired = jt(s.element.isRequired, Oi);
const ln = ki;
function $a(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ma(e, t, n, r, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !$a(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const _a = jt(s.elementType, Ma), Ia = "exact-prop: ​";
function Si(e) {
  return process.env.NODE_ENV === "production" ? e : T({}, e, {
    [Ia]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Nt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var xr = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function Aa() {
  if (Ro)
    return ae;
  Ro = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case a:
                case c:
                case p:
                case f:
                case i:
                  return m;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return ae.ContextConsumer = a, ae.ContextProvider = i, ae.Element = e, ae.ForwardRef = c, ae.Fragment = n, ae.Lazy = p, ae.Memo = f, ae.Portal = t, ae.Profiler = o, ae.StrictMode = r, ae.Suspense = u, ae.SuspenseList = d, ae.isAsyncMode = function() {
    return !1;
  }, ae.isConcurrentMode = function() {
    return !1;
  }, ae.isContextConsumer = function(m) {
    return g(m) === a;
  }, ae.isContextProvider = function(m) {
    return g(m) === i;
  }, ae.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ae.isForwardRef = function(m) {
    return g(m) === c;
  }, ae.isFragment = function(m) {
    return g(m) === n;
  }, ae.isLazy = function(m) {
    return g(m) === p;
  }, ae.isMemo = function(m) {
    return g(m) === f;
  }, ae.isPortal = function(m) {
    return g(m) === t;
  }, ae.isProfiler = function(m) {
    return g(m) === o;
  }, ae.isStrictMode = function(m) {
    return g(m) === r;
  }, ae.isSuspense = function(m) {
    return g(m) === u;
  }, ae.isSuspenseList = function(m) {
    return g(m) === d;
  }, ae.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === u || m === d || m === b || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
  }, ae.typeOf = g, ae;
}
var le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No;
function Da() {
  return No || (No = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = !1, g = !1, m = !1, E = !1, $ = !1, y;
    y = Symbol.for("react.module.reference");
    function x(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === n || C === o || $ || C === r || C === u || C === d || E || C === b || v || g || m || typeof C == "object" && C !== null && (C.$$typeof === p || C.$$typeof === f || C.$$typeof === i || C.$$typeof === a || C.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === y || C.getModuleId !== void 0));
    }
    function h(C) {
      if (typeof C == "object" && C !== null) {
        var re = C.$$typeof;
        switch (re) {
          case e:
            var me = C.type;
            switch (me) {
              case n:
              case o:
              case r:
              case u:
              case d:
                return me;
              default:
                var Ee = me && me.$$typeof;
                switch (Ee) {
                  case l:
                  case a:
                  case c:
                  case p:
                  case f:
                  case i:
                    return Ee;
                  default:
                    return re;
                }
            }
          case t:
            return re;
        }
      }
    }
    var k = a, S = i, A = e, I = c, D = n, B = p, z = f, G = t, L = o, _ = r, R = u, j = d, Q = !1, Z = !1;
    function O(C) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(C) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(C) {
      return h(C) === a;
    }
    function X(C) {
      return h(C) === i;
    }
    function F(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function U(C) {
      return h(C) === c;
    }
    function W(C) {
      return h(C) === n;
    }
    function q(C) {
      return h(C) === p;
    }
    function H(C) {
      return h(C) === f;
    }
    function K(C) {
      return h(C) === t;
    }
    function Y(C) {
      return h(C) === o;
    }
    function ne(C) {
      return h(C) === r;
    }
    function N(C) {
      return h(C) === u;
    }
    function J(C) {
      return h(C) === d;
    }
    le.ContextConsumer = k, le.ContextProvider = S, le.Element = A, le.ForwardRef = I, le.Fragment = D, le.Lazy = B, le.Memo = z, le.Portal = G, le.Profiler = L, le.StrictMode = _, le.Suspense = R, le.SuspenseList = j, le.isAsyncMode = O, le.isConcurrentMode = M, le.isContextConsumer = V, le.isContextProvider = X, le.isElement = F, le.isForwardRef = U, le.isFragment = W, le.isLazy = q, le.isMemo = H, le.isPortal = K, le.isProfiler = Y, le.isStrictMode = ne, le.isSuspense = N, le.isSuspenseList = J, le.isValidElementType = x, le.typeOf = h;
  }()), le;
}
process.env.NODE_ENV === "production" ? xr.exports = Aa() : xr.exports = Da();
var Cn = xr.exports;
const ja = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ba(e) {
  const t = `${e}`.match(ja);
  return t && t[1] || "";
}
function Pi(e, t = "") {
  return e.displayName || e.name || Ba(e) || t;
}
function $o(e, t, n) {
  const r = Pi(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function La(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Pi(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Cn.ForwardRef:
          return $o(e, e.render, "ForwardRef");
        case Cn.Memo:
          return $o(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ge(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Fa = s.oneOfType([s.func, s.object]), Mr = Fa;
function Fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Er(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Ci(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Va(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, o, i, a) => {
    const l = o || "<<anonymous>>", c = a || r;
    return typeof n[r] < "u" ? new Error(`The ${i} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function za(e, t) {
  var n, r;
  return /* @__PURE__ */ w.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function ve(e) {
  return e && e.ownerDocument || document;
}
function $t(e) {
  return ve(e).defaultView || window;
}
function Ua(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? T({}, t.propTypes) : null;
  return (o) => (i, a, l, c, u, ...d) => {
    const f = u || a, p = n == null ? void 0 : n[f];
    if (p) {
      const b = p(i, a, l, c, u, ...d);
      if (b)
        return b;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Rn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ha = typeof window < "u" ? w.useLayoutEffect : w.useEffect, pt = Ha;
let Mo = 0;
function Wa(e) {
  const [t, n] = w.useState(e), r = e || t;
  return w.useEffect(() => {
    t == null && (Mo += 1, n(`mui-${Mo}`));
  }, [t]), r;
}
const _o = w["useId".toString()];
function Ri(e) {
  if (_o !== void 0) {
    const t = _o();
    return e ?? t;
  }
  return Wa(e);
}
function qa(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Ni({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = w.useRef(e !== void 0), [i, a] = w.useState(t), l = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    w.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = w.useRef(t);
    w.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = w.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function nn(e) {
  const t = w.useRef(e);
  return pt(() => {
    t.current = e;
  }), w.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ie(...e) {
  return w.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Rn(n, t);
    });
  }, e);
}
const Io = {};
function Ga(e, t) {
  const n = w.useRef(Io);
  return n.current === Io && (n.current = e(t)), n;
}
const Xa = [];
function Ka(e) {
  w.useEffect(e, Xa);
}
class cn {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new cn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Kt() {
  const e = Ga(cn.create).current;
  return Ka(e.disposeEffect), e;
}
let Ln = !0, wr = !1;
const Ya = new cn(), Ja = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Za(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Ja[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Qa(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ln = !0);
}
function lr() {
  Ln = !1;
}
function el() {
  this.visibilityState === "hidden" && wr && (Ln = !0);
}
function tl(e) {
  e.addEventListener("keydown", Qa, !0), e.addEventListener("mousedown", lr, !0), e.addEventListener("pointerdown", lr, !0), e.addEventListener("touchstart", lr, !0), e.addEventListener("visibilitychange", el, !0);
}
function nl(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ln || Za(t);
}
function $i() {
  const e = w.useCallback((o) => {
    o != null && tl(o.ownerDocument);
  }, []), t = w.useRef(!1);
  function n() {
    return t.current ? (wr = !0, Ya.start(100, () => {
      wr = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return nl(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Mi(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function rl(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function ol(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const il = Number.isInteger || ol;
function _i(e, t, n, r) {
  const o = e[t];
  if (o == null || !il(o)) {
    const i = rl(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ii(e, t, ...n) {
  return e[t] === void 0 ? null : _i(e, t, ...n);
}
function Tr() {
  return null;
}
Ii.isRequired = _i;
Tr.isRequired = Tr;
const Ai = process.env.NODE_ENV === "production" ? Tr : Ii;
function Di(e, t) {
  const n = T({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = T({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = T({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = Di(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Ye(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, a) => {
        if (a) {
          const l = t(a);
          l !== "" && i.push(l), n && n[a] && i.push(n[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const Ao = (e) => e, sl = () => {
  let e = Ao;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ao;
    }
  };
}, al = sl(), ji = al, Bi = {
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
function ze(e, t, n = "Mui") {
  const r = Bi[t];
  return r ? `${n}-${r}` : `${ji.generate(e)}-${t}`;
}
function nt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ze(e, o, n);
  }), r;
}
function ll(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Li(e) {
  return typeof e == "string";
}
function Yt(e, t, n) {
  return e === void 0 || Li(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, n)
  });
}
const cl = {
  disableDefaultClasses: !1
}, ul = /* @__PURE__ */ w.createContext(cl);
function dl(e) {
  const {
    disableDefaultClasses: t
  } = w.useContext(ul);
  return (n) => t ? "" : e(n);
}
function Fi(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function pl(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Do(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function fl(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const b = be(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = T({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), g = T({}, n, o, r);
    return b.length > 0 && (g.className = b), Object.keys(v).length > 0 && (g.style = v), {
      props: g,
      internalRef: void 0
    };
  }
  const a = Fi(T({}, o, r)), l = Do(r), c = Do(o), u = t(a), d = be(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = T({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = T({}, u, n, c, l);
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
const hl = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ft(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = ce(e, hl), l = i ? {} : pl(r, o), {
    props: c,
    internalRef: u
  } = fl(T({}, a, {
    externalSlotProps: l
  })), d = Ie(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Yt(n, T({}, c, {
    ref: d
  }), o);
}
const Vi = "base";
function ml(e) {
  return `${Vi}--${e}`;
}
function gl(e, t) {
  return `${Vi}-${e}-${t}`;
}
function zi(e, t) {
  const n = Bi[t];
  return n ? ml(n) : gl(e, t);
}
function bl(e, t) {
  const n = {};
  return t.forEach((r) => {
    n[r] = zi(e, r);
  }), n;
}
const vl = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function yl(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function xl(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function El(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || xl(e));
}
function wl(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(vl)).forEach((r, o) => {
    const i = yl(r);
    i === -1 || !El(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function Tl() {
  return !0;
}
function Nn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = wl,
    isEnabled: a = Tl,
    open: l
  } = e, c = w.useRef(!1), u = w.useRef(null), d = w.useRef(null), f = w.useRef(null), p = w.useRef(null), b = w.useRef(!1), v = w.useRef(null), g = Ie(t.ref, v), m = w.useRef(null);
  w.useEffect(() => {
    !l || !v.current || (b.current = !n);
  }, [n, l]), w.useEffect(() => {
    if (!l || !v.current)
      return;
    const y = ve(v.current);
    return v.current.contains(y.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), b.current && v.current.focus()), () => {
      o || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), w.useEffect(() => {
    if (!l || !v.current)
      return;
    const y = ve(v.current), x = (S) => {
      m.current = S, !(r || !a() || S.key !== "Tab") && y.activeElement === v.current && S.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, h = () => {
      const S = v.current;
      if (S === null)
        return;
      if (!y.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (S.contains(y.activeElement) || r && y.activeElement !== u.current && y.activeElement !== d.current)
        return;
      if (y.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!b.current)
        return;
      let A = [];
      if ((y.activeElement === u.current || y.activeElement === d.current) && (A = i(v.current)), A.length > 0) {
        var I, D;
        const B = !!((I = m.current) != null && I.shiftKey && ((D = m.current) == null ? void 0 : D.key) === "Tab"), z = A[0], G = A[A.length - 1];
        typeof z != "string" && typeof G != "string" && (B ? G.focus() : z.focus());
      } else
        S.focus();
    };
    y.addEventListener("focusin", h), y.addEventListener("keydown", x, !0);
    const k = setInterval(() => {
      y.activeElement && y.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(k), y.removeEventListener("focusin", h), y.removeEventListener("keydown", x, !0);
    };
  }, [n, r, o, a, l, i]);
  const E = (y) => {
    f.current === null && (f.current = y.relatedTarget), b.current = !0, p.current = y.target;
    const x = t.props.onFocus;
    x && x(y);
  }, $ = (y) => {
    f.current === null && (f.current = y.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ ye(w.Fragment, {
    children: [/* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: $,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ w.cloneElement(t, {
      ref: g,
      onFocus: E
    }), /* @__PURE__ */ P("div", {
      tabIndex: l ? 0 : -1,
      onFocus: $,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: ln,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: s.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: s.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: s.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: s.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: s.func,
  /**
   * If `true`, focus is locked.
   */
  open: s.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Nn["propTypes"] = Si(Nn.propTypes));
function Ol(e) {
  return typeof e == "function" ? e() : e;
}
const rn = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [a, l] = w.useState(null), c = Ie(/* @__PURE__ */ w.isValidElement(r) ? r.ref : null, n);
  if (pt(() => {
    i || l(Ol(o) || document.body);
  }, [o, i]), pt(() => {
    if (a && !i)
      return Rn(n, a), () => {
        Rn(n, null);
      };
  }, [n, a, i]), i) {
    if (/* @__PURE__ */ w.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ w.cloneElement(r, u);
    }
    return /* @__PURE__ */ P(w.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ P(w.Fragment, {
    children: a && /* @__PURE__ */ da.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (rn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: s.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Ge, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool
});
process.env.NODE_ENV !== "production" && (rn["propTypes"] = Si(rn.propTypes));
function kl(e) {
  const t = ve(e);
  return t.body === e ? $t(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Zt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function jo(e) {
  return parseInt($t(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Sl(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Bo(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = i.indexOf(a) === -1, c = !Sl(a);
    l && c && Zt(a, o);
  });
}
function cr(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Pl(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (kl(r)) {
      const a = Mi(ve(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${jo(r) + a}px`;
      const l = ve(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${jo(c) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ve(r).body;
    else {
      const a = r.parentElement, l = $t(r);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: a,
      property: l
    }) => {
      i ? a.style.setProperty(l, i) : a.style.removeProperty(l);
    });
  };
}
function Cl(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Rl {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Zt(t.modalRef, !1);
    const o = Cl(n);
    Bo(n, t.mount, t.modalRef, o, !0);
    const i = cr(this.containers, (a) => a.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = cr(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Pl(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = cr(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Zt(t.modalRef, n), Bo(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && Zt(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Nl(e) {
  return typeof e == "function" ? e() : e;
}
function $l(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ml = new Rl();
function _l(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Ml,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, p = w.useRef({}), b = w.useRef(null), v = w.useRef(null), g = Ie(v, f), [m, E] = w.useState(!d), $ = $l(c);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const x = () => ve(b.current), h = () => (p.current.modalRef = v.current, p.current.mount = b.current, p.current), k = () => {
    o.mount(h(), {
      disableScrollLock: r
    }), v.current && (v.current.scrollTop = 0);
  }, S = nn(() => {
    const R = Nl(t) || x().body;
    o.add(h(), R), v.current && k();
  }), A = w.useCallback(() => o.isTopModal(h()), [o]), I = nn((R) => {
    b.current = R, R && (d && A() ? k() : v.current && Zt(v.current, y));
  }), D = w.useCallback(() => {
    o.remove(h(), y);
  }, [y, o]);
  w.useEffect(() => () => {
    D();
  }, [D]), w.useEffect(() => {
    d ? S() : (!$ || !i) && D();
  }, [d, D, $, i, S]);
  const B = (R) => (j) => {
    var Q;
    (Q = R.onKeyDown) == null || Q.call(R, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !A()) && (n || (j.stopPropagation(), u && u(j, "escapeKeyDown")));
  }, z = (R) => (j) => {
    var Q;
    (Q = R.onClick) == null || Q.call(R, j), j.target === j.currentTarget && u && u(j, "backdropClick");
  };
  return {
    getRootProps: (R = {}) => {
      const j = Fi(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const Q = T({}, j, R);
      return T({
        role: "presentation"
      }, Q, {
        onKeyDown: B(Q),
        ref: g
      });
    },
    getBackdropProps: (R = {}) => {
      const j = R;
      return T({
        "aria-hidden": !0
      }, j, {
        onClick: z(j),
        open: d
      });
    },
    getTransitionProps: () => {
      const R = () => {
        E(!1), a && a();
      }, j = () => {
        E(!0), l && l(), i && D();
      };
      return {
        onEnter: Er(R, c == null ? void 0 : c.props.onEnter),
        onExited: Er(j, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: g,
    portalRef: I,
    isTopModal: A,
    exited: m,
    hasTransition: $
  };
}
var Oe = "top", Ae = "bottom", De = "right", ke = "left", _r = "auto", un = [Oe, Ae, De, ke], Mt = "start", on = "end", Il = "clippingParents", Ui = "viewport", Ht = "popper", Al = "reference", Lo = /* @__PURE__ */ un.reduce(function(e, t) {
  return e.concat([t + "-" + Mt, t + "-" + on]);
}, []), Hi = /* @__PURE__ */ [].concat(un, [_r]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Mt, t + "-" + on]);
}, []), Dl = "beforeRead", jl = "read", Bl = "afterRead", Ll = "beforeMain", Fl = "main", Vl = "afterMain", zl = "beforeWrite", Ul = "write", Hl = "afterWrite", Wl = [Dl, jl, Bl, Ll, Fl, Vl, zl, Ul, Hl];
function Ve(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ne(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ht(e) {
  var t = Ne(e).Element;
  return e instanceof t || e instanceof Element;
}
function _e(e) {
  var t = Ne(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ir(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ne(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ql(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !_e(i) || !Ve(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Gl(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !_e(o) || !Ve(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Xl = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ql,
  effect: Gl,
  requires: ["computeStyles"]
};
function Le(e) {
  return e.split("-")[0];
}
var dt = Math.max, $n = Math.min, _t = Math.round;
function Or() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Wi() {
  return !/^((?!chrome|android).)*safari/i.test(Or());
}
function It(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && _e(e) && (o = e.offsetWidth > 0 && _t(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && _t(r.height) / e.offsetHeight || 1);
  var a = ht(e) ? Ne(e) : window, l = a.visualViewport, c = !Wi() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / o, d = (r.top + (c && l ? l.offsetTop : 0)) / i, f = r.width / o, p = r.height / i;
  return {
    width: f,
    height: p,
    top: d,
    right: u + f,
    bottom: d + p,
    left: u,
    x: u,
    y: d
  };
}
function Ar(e) {
  var t = It(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function qi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ir(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Xe(e) {
  return Ne(e).getComputedStyle(e);
}
function Kl(e) {
  return ["table", "td", "th"].indexOf(Ve(e)) >= 0;
}
function rt(e) {
  return ((ht(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Fn(e) {
  return Ve(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ir(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    rt(e)
  );
}
function Fo(e) {
  return !_e(e) || // https://github.com/popperjs/popper-core/issues/837
  Xe(e).position === "fixed" ? null : e.offsetParent;
}
function Yl(e) {
  var t = /firefox/i.test(Or()), n = /Trident/i.test(Or());
  if (n && _e(e)) {
    var r = Xe(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Fn(e);
  for (Ir(o) && (o = o.host); _e(o) && ["html", "body"].indexOf(Ve(o)) < 0; ) {
    var i = Xe(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function dn(e) {
  for (var t = Ne(e), n = Fo(e); n && Kl(n) && Xe(n).position === "static"; )
    n = Fo(n);
  return n && (Ve(n) === "html" || Ve(n) === "body" && Xe(n).position === "static") ? t : n || Yl(e) || t;
}
function Dr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qt(e, t, n) {
  return dt(e, $n(t, n));
}
function Jl(e, t, n) {
  var r = Qt(e, t, n);
  return r > n ? n : r;
}
function Gi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Xi(e) {
  return Object.assign({}, Gi(), e);
}
function Ki(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Zl = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Xi(typeof t != "number" ? t : Ki(t, un));
};
function Ql(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, l = Le(n.placement), c = Dr(l), u = [ke, De].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !a)) {
    var f = Zl(o.padding, n), p = Ar(i), b = c === "y" ? Oe : ke, v = c === "y" ? Ae : De, g = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d], m = a[c] - n.rects.reference[c], E = dn(i), $ = E ? c === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, y = g / 2 - m / 2, x = f[b], h = $ - p[d] - f[v], k = $ / 2 - p[d] / 2 + y, S = Qt(x, k, h), A = c;
    n.modifiersData[r] = (t = {}, t[A] = S, t.centerOffset = S - k, t);
  }
}
function ec(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || qi(t.elements.popper, o) && (t.elements.arrow = o));
}
const tc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ql,
  effect: ec,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function At(e) {
  return e.split("-")[1];
}
var nc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rc(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: _t(n * o) / o || 0,
    y: _t(r * o) / o || 0
  };
}
function Vo(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, b = p === void 0 ? 0 : p, v = a.y, g = v === void 0 ? 0 : v, m = typeof d == "function" ? d({
    x: b,
    y: g
  }) : {
    x: b,
    y: g
  };
  b = m.x, g = m.y;
  var E = a.hasOwnProperty("x"), $ = a.hasOwnProperty("y"), y = ke, x = Oe, h = window;
  if (u) {
    var k = dn(n), S = "clientHeight", A = "clientWidth";
    if (k === Ne(n) && (k = rt(n), Xe(k).position !== "static" && l === "absolute" && (S = "scrollHeight", A = "scrollWidth")), k = k, o === Oe || (o === ke || o === De) && i === on) {
      x = Ae;
      var I = f && k === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[S]
      );
      g -= I - r.height, g *= c ? 1 : -1;
    }
    if (o === ke || (o === Oe || o === Ae) && i === on) {
      y = De;
      var D = f && k === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[A]
      );
      b -= D - r.width, b *= c ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: l
  }, u && nc), z = d === !0 ? rc({
    x: b,
    y: g
  }, Ne(n)) : {
    x: b,
    y: g
  };
  if (b = z.x, g = z.y, c) {
    var G;
    return Object.assign({}, B, (G = {}, G[x] = $ ? "0" : "", G[y] = E ? "0" : "", G.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + g + "px)" : "translate3d(" + b + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, B, (t = {}, t[x] = $ ? g + "px" : "", t[y] = E ? b + "px" : "", t.transform = "", t));
}
function oc(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Le(t.placement),
    variation: At(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Vo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ic = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: oc,
  data: {}
};
var xn = {
  passive: !0
};
function sc(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, l = a === void 0 ? !0 : a, c = Ne(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, xn);
  }), l && c.addEventListener("resize", n.update, xn), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, xn);
    }), l && c.removeEventListener("resize", n.update, xn);
  };
}
const ac = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: sc,
  data: {}
};
var lc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function On(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return lc[t];
  });
}
var cc = {
  start: "end",
  end: "start"
};
function zo(e) {
  return e.replace(/start|end/g, function(t) {
    return cc[t];
  });
}
function jr(e) {
  var t = Ne(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Br(e) {
  return It(rt(e)).left + jr(e).scrollLeft;
}
function uc(e, t) {
  var n = Ne(e), r = rt(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = Wi();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l + Br(e),
    y: c
  };
}
function dc(e) {
  var t, n = rt(e), r = jr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = dt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = dt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Br(e), c = -r.scrollTop;
  return Xe(o || n).direction === "rtl" && (l += dt(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Lr(e) {
  var t = Xe(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Yi(e) {
  return ["html", "body", "#document"].indexOf(Ve(e)) >= 0 ? e.ownerDocument.body : _e(e) && Lr(e) ? e : Yi(Fn(e));
}
function en(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Yi(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ne(r), a = o ? [i].concat(i.visualViewport || [], Lr(r) ? r : []) : r, l = t.concat(a);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(en(Fn(a)))
  );
}
function kr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pc(e, t) {
  var n = It(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Uo(e, t, n) {
  return t === Ui ? kr(uc(e, n)) : ht(t) ? pc(t, n) : kr(dc(rt(e)));
}
function fc(e) {
  var t = en(Fn(e)), n = ["absolute", "fixed"].indexOf(Xe(e).position) >= 0, r = n && _e(e) ? dn(e) : e;
  return ht(r) ? t.filter(function(o) {
    return ht(o) && qi(o, r) && Ve(o) !== "body";
  }) : [];
}
function hc(e, t, n, r) {
  var o = t === "clippingParents" ? fc(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], l = i.reduce(function(c, u) {
    var d = Uo(e, u, r);
    return c.top = dt(d.top, c.top), c.right = $n(d.right, c.right), c.bottom = $n(d.bottom, c.bottom), c.left = dt(d.left, c.left), c;
  }, Uo(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ji(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Le(r) : null, i = r ? At(r) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (o) {
    case Oe:
      c = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Ae:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case De:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ke:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? Dr(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Mt:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case on:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function sn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, l = n.boundary, c = l === void 0 ? Il : l, u = n.rootBoundary, d = u === void 0 ? Ui : u, f = n.elementContext, p = f === void 0 ? Ht : f, b = n.altBoundary, v = b === void 0 ? !1 : b, g = n.padding, m = g === void 0 ? 0 : g, E = Xi(typeof m != "number" ? m : Ki(m, un)), $ = p === Ht ? Al : Ht, y = e.rects.popper, x = e.elements[v ? $ : p], h = hc(ht(x) ? x : x.contextElement || rt(e.elements.popper), c, d, a), k = It(e.elements.reference), S = Ji({
    reference: k,
    element: y,
    strategy: "absolute",
    placement: o
  }), A = kr(Object.assign({}, y, S)), I = p === Ht ? A : k, D = {
    top: h.top - I.top + E.top,
    bottom: I.bottom - h.bottom + E.bottom,
    left: h.left - I.left + E.left,
    right: I.right - h.right + E.right
  }, B = e.modifiersData.offset;
  if (p === Ht && B) {
    var z = B[o];
    Object.keys(D).forEach(function(G) {
      var L = [De, Ae].indexOf(G) >= 0 ? 1 : -1, _ = [Oe, Ae].indexOf(G) >= 0 ? "y" : "x";
      D[G] += z[_] * L;
    });
  }
  return D;
}
function mc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? Hi : c, d = At(r), f = d ? l ? Lo : Lo.filter(function(v) {
    return At(v) === d;
  }) : un, p = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f);
  var b = p.reduce(function(v, g) {
    return v[g] = sn(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Le(g)], v;
  }, {});
  return Object.keys(b).sort(function(v, g) {
    return b[v] - b[g];
  });
}
function gc(e) {
  if (Le(e) === _r)
    return [];
  var t = On(e);
  return [zo(e), t, zo(t)];
}
function bc(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, b = n.flipVariations, v = b === void 0 ? !0 : b, g = n.allowedAutoPlacements, m = t.options.placement, E = Le(m), $ = E === m, y = c || ($ || !v ? [On(m)] : gc(m)), x = [m].concat(y).reduce(function(F, U) {
      return F.concat(Le(U) === _r ? mc(t, {
        placement: U,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: g
      }) : U);
    }, []), h = t.rects.reference, k = t.rects.popper, S = /* @__PURE__ */ new Map(), A = !0, I = x[0], D = 0; D < x.length; D++) {
      var B = x[D], z = Le(B), G = At(B) === Mt, L = [Oe, Ae].indexOf(z) >= 0, _ = L ? "width" : "height", R = sn(t, {
        placement: B,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), j = L ? G ? De : ke : G ? Ae : Oe;
      h[_] > k[_] && (j = On(j));
      var Q = On(j), Z = [];
      if (i && Z.push(R[z] <= 0), l && Z.push(R[j] <= 0, R[Q] <= 0), Z.every(function(F) {
        return F;
      })) {
        I = B, A = !1;
        break;
      }
      S.set(B, Z);
    }
    if (A)
      for (var O = v ? 3 : 1, M = function(U) {
        var W = x.find(function(q) {
          var H = S.get(q);
          if (H)
            return H.slice(0, U).every(function(K) {
              return K;
            });
        });
        if (W)
          return I = W, "break";
      }, V = O; V > 0; V--) {
        var X = M(V);
        if (X === "break")
          break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const vc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ho(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Wo(e) {
  return [Oe, De, Ae, ke].some(function(t) {
    return e[t] >= 0;
  });
}
function yc(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = sn(t, {
    elementContext: "reference"
  }), l = sn(t, {
    altBoundary: !0
  }), c = Ho(a, r), u = Ho(l, o, i), d = Wo(c), f = Wo(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const xc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yc
};
function Ec(e, t, n) {
  var r = Le(e), o = [ke, Oe].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], l = i[1];
  return a = a || 0, l = (l || 0) * o, [ke, De].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function wc(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Hi.reduce(function(d, f) {
    return d[f] = Ec(f, t.rects, i), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Tc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: wc
};
function Oc(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ji({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const kc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Oc,
  data: {}
};
function Sc(e) {
  return e === "x" ? "y" : "x";
}
function Pc(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, b = p === void 0 ? !0 : p, v = n.tetherOffset, g = v === void 0 ? 0 : v, m = sn(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), E = Le(t.placement), $ = At(t.placement), y = !$, x = Dr(E), h = Sc(x), k = t.modifiersData.popperOffsets, S = t.rects.reference, A = t.rects.popper, I = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, D = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var G, L = x === "y" ? Oe : ke, _ = x === "y" ? Ae : De, R = x === "y" ? "height" : "width", j = k[x], Q = j + m[L], Z = j - m[_], O = b ? -A[R] / 2 : 0, M = $ === Mt ? S[R] : A[R], V = $ === Mt ? -A[R] : -S[R], X = t.elements.arrow, F = b && X ? Ar(X) : {
        width: 0,
        height: 0
      }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Gi(), W = U[L], q = U[_], H = Qt(0, S[R], F[R]), K = y ? S[R] / 2 - O - H - W - D.mainAxis : M - H - W - D.mainAxis, Y = y ? -S[R] / 2 + O + H + q + D.mainAxis : V + H + q + D.mainAxis, ne = t.elements.arrow && dn(t.elements.arrow), N = ne ? x === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, J = (G = B == null ? void 0 : B[x]) != null ? G : 0, C = j + K - J - N, re = j + Y - J, me = Qt(b ? $n(Q, C) : Q, j, b ? dt(Z, re) : Z);
      k[x] = me, z[x] = me - j;
    }
    if (l) {
      var Ee, fe = x === "x" ? Oe : ke, it = x === "x" ? Ae : De, we = k[h], Ue = h === "y" ? "height" : "width", Se = we + m[fe], He = we - m[it], ge = [Oe, ke].indexOf(E) !== -1, bt = (Ee = B == null ? void 0 : B[h]) != null ? Ee : 0, st = ge ? Se : we - S[Ue] - A[Ue] - bt + D.altAxis, Lt = ge ? we + S[Ue] + A[Ue] - bt - D.altAxis : He, mn = b && ge ? Jl(st, we, Lt) : Qt(b ? st : Se, we, b ? Lt : He);
      k[h] = mn, z[h] = mn - we;
    }
    t.modifiersData[r] = z;
  }
}
const Cc = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Pc,
  requiresIfExists: ["offset"]
};
function Rc(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Nc(e) {
  return e === Ne(e) || !_e(e) ? jr(e) : Rc(e);
}
function $c(e) {
  var t = e.getBoundingClientRect(), n = _t(t.width) / e.offsetWidth || 1, r = _t(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Mc(e, t, n) {
  n === void 0 && (n = !1);
  var r = _e(t), o = _e(t) && $c(t), i = rt(t), a = It(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ve(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Lr(i)) && (l = Nc(t)), _e(t) ? (c = It(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Br(i))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function _c(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && o(c);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function Ic(e) {
  var t = _c(e);
  return Wl.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Ac(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Dc(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var qo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Go() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function jc(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? qo : o;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qo, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, b = {
      state: d,
      setOptions: function(E) {
        var $ = typeof E == "function" ? E(d.options) : E;
        g(), d.options = Object.assign({}, i, d.options, $), d.scrollParents = {
          reference: ht(l) ? en(l) : l.contextElement ? en(l.contextElement) : [],
          popper: en(c)
        };
        var y = Ic(Dc([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = y.filter(function(x) {
          return x.enabled;
        }), v(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var E = d.elements, $ = E.reference, y = E.popper;
          if (Go($, y)) {
            d.rects = {
              reference: Mc($, dn(y), d.options.strategy === "fixed"),
              popper: Ar(y)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
              return d.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var x = 0; x < d.orderedModifiers.length; x++) {
              if (d.reset === !0) {
                d.reset = !1, x = -1;
                continue;
              }
              var h = d.orderedModifiers[x], k = h.fn, S = h.options, A = S === void 0 ? {} : S, I = h.name;
              typeof k == "function" && (d = k({
                state: d,
                options: A,
                name: I,
                instance: b
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ac(function() {
        return new Promise(function(m) {
          b.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!Go(l, c))
      return b;
    b.setOptions(u).then(function(m) {
      !p && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function v() {
      d.orderedModifiers.forEach(function(m) {
        var E = m.name, $ = m.options, y = $ === void 0 ? {} : $, x = m.effect;
        if (typeof x == "function") {
          var h = x({
            state: d,
            name: E,
            instance: b,
            options: y
          }), k = function() {
          };
          f.push(h || k);
        }
      });
    }
    function g() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return b;
  };
}
var Bc = [ac, kc, ic, Xl, Tc, vc, Cc, tc, xc], Lc = /* @__PURE__ */ jc({
  defaultModifiers: Bc
});
const Zi = "Popper";
function Fc(e) {
  return zi(Zi, e);
}
bl(Zi, ["root"]);
const Vc = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], zc = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Uc(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Mn(e) {
  return typeof e == "function" ? e() : e;
}
function Vn(e) {
  return e.nodeType !== void 0;
}
function Hc(e) {
  return !Vn(e);
}
const Wc = () => Ye({
  root: ["root"]
}, dl(Fc)), qc = {}, Gc = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: f,
    popperRef: p,
    slotProps: b = {},
    slots: v = {},
    TransitionProps: g
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, m = ce(t, Vc), E = w.useRef(null), $ = Ie(E, n), y = w.useRef(null), x = Ie(y, p), h = w.useRef(x);
  pt(() => {
    h.current = x;
  }, [x]), w.useImperativeHandle(p, () => y.current, []);
  const k = Uc(d, a), [S, A] = w.useState(k), [I, D] = w.useState(Mn(o));
  w.useEffect(() => {
    y.current && y.current.forceUpdate();
  }), w.useEffect(() => {
    o && D(Mn(o));
  }, [o]), pt(() => {
    if (!I || !u)
      return;
    const _ = (Q) => {
      A(Q.placement);
    };
    if (process.env.NODE_ENV !== "production" && I && Vn(I) && I.nodeType === 1) {
      const Q = I.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Q.top === 0 && Q.left === 0 && Q.right === 0 && Q.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let R = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: Q
      }) => {
        _(Q);
      }
    }];
    c != null && (R = R.concat(c)), f && f.modifiers != null && (R = R.concat(f.modifiers));
    const j = Lc(I, E.current, T({
      placement: k
    }, f, {
      modifiers: R
    }));
    return h.current(j), () => {
      j.destroy(), h.current(null);
    };
  }, [I, l, c, u, f, k]);
  const B = {
    placement: S
  };
  g !== null && (B.TransitionProps = g);
  const z = Wc(), G = (r = v.root) != null ? r : "div", L = ft({
    elementType: G,
    externalSlotProps: b.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: $
    },
    ownerState: t,
    className: z.root
  });
  return /* @__PURE__ */ P(G, T({}, L, {
    children: typeof i == "function" ? i(B) : i
  }));
}), Qi = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: p = qc,
    popperRef: b,
    style: v,
    transition: g = !1,
    slotProps: m = {},
    slots: E = {}
  } = t, $ = ce(t, zc), [y, x] = w.useState(!0), h = () => {
    x(!1);
  }, k = () => {
    x(!0);
  };
  if (!c && !d && (!g || y))
    return null;
  let S;
  if (i)
    S = i;
  else if (r) {
    const D = Mn(r);
    S = D && Vn(D) ? ve(D).body : ve(null).body;
  }
  const A = !d && c && (!g || y) ? "none" : void 0, I = g ? {
    in: d,
    onEnter: h,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ P(rn, {
    disablePortal: l,
    container: S,
    children: /* @__PURE__ */ P(Gc, T({
      anchorEl: r,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: g ? !y : d,
      placement: f,
      popperOptions: p,
      popperRef: b,
      slotProps: m,
      slots: E
    }, $, {
      style: T({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: A
      }, v),
      TransitionProps: I,
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (Qi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: jt(s.oneOfType([Ge, s.object, s.func]), (e) => {
    if (e.open) {
      const t = Mn(e.anchorEl);
      if (t && Vn(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Hc(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: s.oneOfType([s.node, s.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Ge, s.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: s.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: s.arrayOf(s.shape({
    data: s.object,
    effect: s.func,
    enabled: s.bool,
    fn: s.func,
    name: s.any,
    options: s.object,
    phase: s.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: s.arrayOf(s.string),
    requiresIfExists: s.arrayOf(s.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: s.shape({
    modifiers: s.array,
    onFirstUpdate: s.func,
    placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: s.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Mr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: s.bool
});
const Xc = ["values", "unit", "step"], Kc = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => T({}, n, {
    [r.key]: r.val
  }), {});
};
function Yc(e) {
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
    unit: n = "px",
    step: r = 5
  } = e, o = ce(e, Xc), i = Kc(t), a = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, b) {
    const v = a.indexOf(b);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : b) - r / 100}${n})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const b = a.indexOf(p);
    return b === 0 ? l(a[1]) : b === a.length - 1 ? c(a[b]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return T({
    keys: a,
    values: i,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n
  }, o);
}
const Jc = {
  borderRadius: 4
}, Zc = Jc, Qc = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.string, s.object, s.array]) : {}, ot = Qc;
function tn(e, t) {
  return t ? qe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Fr = {
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
}, Xo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Fr[e]}px)`
};
function Ke(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Xo;
    return t.reduce((a, l, c) => (a[i.up(i.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Xo;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || Fr).indexOf(l) !== -1) {
        const c = i.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function eu(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function tu(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function zn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function _n(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = zn(e, n) || r, t && (o = t(o, r, e)), o;
}
function he(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = zn(c, r) || {};
    return Ke(a, l, (f) => {
      let p = _n(u, o, f);
      return f === p && typeof f == "string" && (p = _n(u, o, `${t}${f === "default" ? "" : Fe(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ot
  } : {}, i.filterProps = [t], i;
}
function nu(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const ru = {
  m: "margin",
  p: "padding"
}, ou = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ko = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, iu = nu((e) => {
  if (e.length > 2)
    if (Ko[e])
      e = Ko[e];
    else
      return [e];
  const [t, n] = e.split(""), r = ru[t], o = ou[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Un = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Hn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], su = [...Un, ...Hn];
function pn(e, t, n, r) {
  var o;
  const i = (o = zn(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function es(e) {
  return pn(e, "spacing", 8, "spacing");
}
function fn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function au(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = fn(t, n), r), {});
}
function lu(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = iu(n), i = au(o, r), a = e[n];
  return Ke(e, a, i);
}
function ts(e, t) {
  const n = es(e.theme);
  return Object.keys(e).map((r) => lu(e, t, r, n)).reduce(tn, {});
}
function de(e) {
  return ts(e, Un);
}
de.propTypes = process.env.NODE_ENV !== "production" ? Un.reduce((e, t) => (e[t] = ot, e), {}) : {};
de.filterProps = Un;
function pe(e) {
  return ts(e, Hn);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? Hn.reduce((e, t) => (e[t] = ot, e), {}) : {};
pe.filterProps = Hn;
process.env.NODE_ENV !== "production" && su.reduce((e, t) => (e[t] = ot, e), {});
function cu(e = 8) {
  if (e.mui)
    return e;
  const t = es({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Wn(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? tn(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Me(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function je(e, t) {
  return he({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const uu = je("border", Me), du = je("borderTop", Me), pu = je("borderRight", Me), fu = je("borderBottom", Me), hu = je("borderLeft", Me), mu = je("borderColor"), gu = je("borderTopColor"), bu = je("borderRightColor"), vu = je("borderBottomColor"), yu = je("borderLeftColor"), xu = je("outline", Me), Eu = je("outlineColor"), qn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = pn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: fn(t, r)
    });
    return Ke(e, e.borderRadius, n);
  }
  return null;
};
qn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ot
} : {};
qn.filterProps = ["borderRadius"];
Wn(uu, du, pu, fu, hu, mu, gu, bu, vu, yu, qn, xu, Eu);
const Gn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = pn(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: fn(t, r)
    });
    return Ke(e, e.gap, n);
  }
  return null;
};
Gn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ot
} : {};
Gn.filterProps = ["gap"];
const Xn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = pn(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: fn(t, r)
    });
    return Ke(e, e.columnGap, n);
  }
  return null;
};
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ot
} : {};
Xn.filterProps = ["columnGap"];
const Kn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = pn(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: fn(t, r)
    });
    return Ke(e, e.rowGap, n);
  }
  return null;
};
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ot
} : {};
Kn.filterProps = ["rowGap"];
const wu = he({
  prop: "gridColumn"
}), Tu = he({
  prop: "gridRow"
}), Ou = he({
  prop: "gridAutoFlow"
}), ku = he({
  prop: "gridAutoColumns"
}), Su = he({
  prop: "gridAutoRows"
}), Pu = he({
  prop: "gridTemplateColumns"
}), Cu = he({
  prop: "gridTemplateRows"
}), Ru = he({
  prop: "gridTemplateAreas"
}), Nu = he({
  prop: "gridArea"
});
Wn(Gn, Xn, Kn, wu, Tu, Ou, ku, Su, Pu, Cu, Ru, Nu);
function Rt(e, t) {
  return t === "grey" ? t : e;
}
const $u = he({
  prop: "color",
  themeKey: "palette",
  transform: Rt
}), Mu = he({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Rt
}), _u = he({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Rt
});
Wn($u, Mu, _u);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Iu = he({
  prop: "width",
  transform: Re
}), Vr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Fr[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Re(n)
      };
    };
    return Ke(e, e.maxWidth, t);
  }
  return null;
};
Vr.filterProps = ["maxWidth"];
const Au = he({
  prop: "minWidth",
  transform: Re
}), Du = he({
  prop: "height",
  transform: Re
}), ju = he({
  prop: "maxHeight",
  transform: Re
}), Bu = he({
  prop: "minHeight",
  transform: Re
});
he({
  prop: "size",
  cssProperty: "width",
  transform: Re
});
he({
  prop: "size",
  cssProperty: "height",
  transform: Re
});
const Lu = he({
  prop: "boxSizing"
});
Wn(Iu, Vr, Au, Du, ju, Bu, Lu);
const Fu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Me
  },
  borderTop: {
    themeKey: "borders",
    transform: Me
  },
  borderRight: {
    themeKey: "borders",
    transform: Me
  },
  borderBottom: {
    themeKey: "borders",
    transform: Me
  },
  borderLeft: {
    themeKey: "borders",
    transform: Me
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
    transform: Me
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Rt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Rt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Rt
  },
  // spacing
  p: {
    style: pe
  },
  pt: {
    style: pe
  },
  pr: {
    style: pe
  },
  pb: {
    style: pe
  },
  pl: {
    style: pe
  },
  px: {
    style: pe
  },
  py: {
    style: pe
  },
  padding: {
    style: pe
  },
  paddingTop: {
    style: pe
  },
  paddingRight: {
    style: pe
  },
  paddingBottom: {
    style: pe
  },
  paddingLeft: {
    style: pe
  },
  paddingX: {
    style: pe
  },
  paddingY: {
    style: pe
  },
  paddingInline: {
    style: pe
  },
  paddingInlineStart: {
    style: pe
  },
  paddingInlineEnd: {
    style: pe
  },
  paddingBlock: {
    style: pe
  },
  paddingBlockStart: {
    style: pe
  },
  paddingBlockEnd: {
    style: pe
  },
  m: {
    style: de
  },
  mt: {
    style: de
  },
  mr: {
    style: de
  },
  mb: {
    style: de
  },
  ml: {
    style: de
  },
  mx: {
    style: de
  },
  my: {
    style: de
  },
  margin: {
    style: de
  },
  marginTop: {
    style: de
  },
  marginRight: {
    style: de
  },
  marginBottom: {
    style: de
  },
  marginLeft: {
    style: de
  },
  marginX: {
    style: de
  },
  marginY: {
    style: de
  },
  marginInline: {
    style: de
  },
  marginInlineStart: {
    style: de
  },
  marginInlineEnd: {
    style: de
  },
  marginBlock: {
    style: de
  },
  marginBlockStart: {
    style: de
  },
  marginBlockEnd: {
    style: de
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
    style: Gn
  },
  rowGap: {
    style: Kn
  },
  columnGap: {
    style: Xn
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
    transform: Re
  },
  maxWidth: {
    style: Vr
  },
  minWidth: {
    transform: Re
  },
  height: {
    transform: Re
  },
  maxHeight: {
    transform: Re
  },
  minHeight: {
    transform: Re
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
}, zr = Fu;
function Vu(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function zu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Uu() {
  function e(n, r, o, i) {
    const a = {
      [n]: r,
      theme: o
    }, l = i[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = zn(o, u) || {};
    return f ? f(a) : Ke(a, r, (v) => {
      let g = _n(p, d, v);
      return v === g && typeof v == "string" && (g = _n(p, d, `${n}${v === "default" ? "" : Fe(v)}`, v)), c === !1 ? g : {
        [c]: g
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const a = (r = i.unstable_sxConfig) != null ? r : zr;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = eu(i.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((b) => {
        const v = zu(u[b], i);
        if (v != null)
          if (typeof v == "object")
            if (a[b])
              p = tn(p, e(b, v, i, a));
            else {
              const g = Ke({
                theme: i
              }, v, (m) => ({
                [b]: m
              }));
              Vu(g, v) ? p[b] = t({
                sx: v,
                theme: i
              }) : p = tn(p, g);
            }
          else
            p = tn(p, e(b, v, i, a));
      }), tu(f, p);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const ns = Uu();
ns.filterProps = ["sx"];
const Ur = ns;
function Hu(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Wu = ["breakpoints", "palette", "spacing", "shape"];
function Hr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = ce(e, Wu), l = Yc(n), c = cu(o);
  let u = qe({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: T({
      mode: "light"
    }, r),
    spacing: c,
    shape: T({}, Zc, i)
  }, a);
  return u.applyStyles = Hu, u = t.reduce((d, f) => qe(d, f), u), u.unstable_sxConfig = T({}, zr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return Ur({
      sx: f,
      theme: this
    });
  }, u;
}
function qu(e) {
  return Object.keys(e).length === 0;
}
function rs(e = null) {
  const t = w.useContext(ca);
  return !t || qu(t) ? e : t;
}
const Gu = Hr();
function os(e = Gu) {
  return rs(e);
}
const Xu = ["ownerState"], Ku = ["variants"], Yu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ju(e) {
  return Object.keys(e).length === 0;
}
function Zu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function kn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Qu = Hr(), Yo = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function En({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Ju(t) ? e : t[n] || t;
}
function ed(e) {
  return e ? (t, n) => n[e] : null;
}
function Sn(e, t) {
  let {
    ownerState: n
  } = t, r = ce(t, Xu);
  const o = typeof e == "function" ? e(T({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Sn(i, T({
      ownerState: n
    }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let l = ce(o, Ku);
    return i.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props(T({
        ownerState: n
      }, r, n)) : Object.keys(c.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style(T({
        ownerState: n
      }, r, n)) : c.style));
    }), l;
  }
  return o;
}
function td(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Qu,
    rootShouldForwardProp: r = kn,
    slotShouldForwardProp: o = kn
  } = e, i = (a) => Ur(T({}, a, {
    theme: En(T({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, l = {}) => {
    ua(a, (h) => h.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = ed(Yo(u))
    } = l, b = ce(l, Yu), v = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), g = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Yo(u || "Root")}`);
    let E = kn;
    u === "Root" || u === "root" ? E = r : u ? E = o : Zu(a) && (E = void 0);
    const $ = la(a, T({
      shouldForwardProp: E,
      label: m
    }, b)), y = (h) => typeof h == "function" && h.__emotion_real !== h || ct(h) ? (k) => Sn(h, T({}, k, {
      theme: En({
        theme: k.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : h, x = (h, ...k) => {
      let S = y(h);
      const A = k ? k.map(y) : [];
      c && p && A.push((B) => {
        const z = En(T({}, B, {
          defaultTheme: n,
          themeId: t
        }));
        if (!z.components || !z.components[c] || !z.components[c].styleOverrides)
          return null;
        const G = z.components[c].styleOverrides, L = {};
        return Object.entries(G).forEach(([_, R]) => {
          L[_] = Sn(R, T({}, B, {
            theme: z
          }));
        }), p(B, L);
      }), c && !v && A.push((B) => {
        var z;
        const G = En(T({}, B, {
          defaultTheme: n,
          themeId: t
        })), L = G == null || (z = G.components) == null || (z = z[c]) == null ? void 0 : z.variants;
        return Sn({
          variants: L
        }, T({}, B, {
          theme: G
        }));
      }), g || A.push(i);
      const I = A.length - k.length;
      if (Array.isArray(h) && I > 0) {
        const B = new Array(I).fill("");
        S = [...h, ...B], S.raw = [...h.raw, ...B];
      }
      const D = $(S, ...A);
      if (process.env.NODE_ENV !== "production") {
        let B;
        c && (B = `${c}${Fe(u || "")}`), B === void 0 && (B = `Styled(${La(a)})`), D.displayName = B;
      }
      return a.muiName && (D.muiName = a.muiName), D;
    };
    return $.withConfig && (x.withConfig = $.withConfig), x;
  };
}
function nd(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Di(t.components[n].defaultProps, r);
}
function rd({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = os(n);
  return r && (o = o[r] || o), nd({
    theme: o,
    name: t,
    props: e
  });
}
function Wr(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), ll(e, t, n);
}
function od(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function mt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return mt(od(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Nt(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Nt(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Yn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function id(e) {
  e = mt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Yn({
    type: l,
    values: c
  });
}
function Jo(e) {
  e = mt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? mt(id(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Zo(e, t) {
  const n = Jo(e), r = Jo(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function In(e, t) {
  return e = mt(e), t = Wr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Yn(e);
}
function sd(e, t) {
  if (e = mt(e), t = Wr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Yn(e);
}
function ad(e, t) {
  if (e = mt(e), t = Wr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Yn(e);
}
function ld(e, t) {
  return T({
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
const cd = {
  black: "#000",
  white: "#fff"
}, an = cd, ud = {
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
}, dd = ud, pd = {
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
}, yt = pd, fd = {
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
}, xt = fd, hd = {
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
}, Wt = hd, md = {
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
}, Et = md, gd = {
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
}, wt = gd, bd = {
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
}, Tt = bd, vd = ["mode", "contrastThreshold", "tonalOffset"], Qo = {
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
    paper: an.white,
    default: an.white
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
}, ur = {
  text: {
    primary: an.white,
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
    active: an.white,
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
function ei(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = ad(e.main, o) : t === "dark" && (e.dark = sd(e.main, i)));
}
function yd(e = "light") {
  return e === "dark" ? {
    main: Et[200],
    light: Et[50],
    dark: Et[400]
  } : {
    main: Et[700],
    light: Et[400],
    dark: Et[800]
  };
}
function xd(e = "light") {
  return e === "dark" ? {
    main: yt[200],
    light: yt[50],
    dark: yt[400]
  } : {
    main: yt[500],
    light: yt[300],
    dark: yt[700]
  };
}
function Ed(e = "light") {
  return e === "dark" ? {
    main: xt[500],
    light: xt[300],
    dark: xt[700]
  } : {
    main: xt[700],
    light: xt[400],
    dark: xt[800]
  };
}
function wd(e = "light") {
  return e === "dark" ? {
    main: wt[400],
    light: wt[300],
    dark: wt[700]
  } : {
    main: wt[700],
    light: wt[500],
    dark: wt[900]
  };
}
function Td(e = "light") {
  return e === "dark" ? {
    main: Tt[400],
    light: Tt[300],
    dark: Tt[700]
  } : {
    main: Tt[800],
    light: Tt[500],
    dark: Tt[900]
  };
}
function Od(e = "light") {
  return e === "dark" ? {
    main: Wt[400],
    light: Wt[300],
    dark: Wt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Wt[500],
    dark: Wt[900]
  };
}
function kd(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = ce(e, vd), i = e.primary || yd(t), a = e.secondary || xd(t), l = e.error || Ed(t), c = e.info || wd(t), u = e.success || Td(t), d = e.warning || Od(t);
  function f(g) {
    const m = Zo(g, ur.text.primary) >= n ? ur.text.primary : Qo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Zo(g, m);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: g,
    name: m,
    mainShade: E = 500,
    lightShade: $ = 300,
    darkShade: y = 700
  }) => {
    if (g = T({}, g), !g.main && g[E] && (g.main = g[E]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Nt(11, m ? ` (${m})` : "", E));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Nt(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return ei(g, "light", $, r), ei(g, "dark", y, r), g.contrastText || (g.contrastText = f(g.main)), g;
  }, b = {
    dark: ur,
    light: Qo
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), qe(T({
    // A collection of common colors.
    common: T({}, an),
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
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: dd,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, b[t]), o);
}
const Sd = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Pd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ti = {
  textTransform: "uppercase"
}, ni = '"Roboto", "Helvetica", "Arial", sans-serif';
function Cd(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ni,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f
  } = n, p = ce(n, Sd);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, v = f || ((E) => `${E / u * b}rem`), g = (E, $, y, x, h) => T({
    fontFamily: r,
    fontWeight: E,
    fontSize: v($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: y
  }, r === ni ? {
    letterSpacing: `${Pd(x / $)}em`
  } : {}, h, d), m = {
    h1: g(i, 96, 1.167, -1.5),
    h2: g(i, 60, 1.2, -0.5),
    h3: g(a, 48, 1.167, 0),
    h4: g(a, 34, 1.235, 0.25),
    h5: g(a, 24, 1.334, 0),
    h6: g(l, 20, 1.6, 0.15),
    subtitle1: g(a, 16, 1.75, 0.15),
    subtitle2: g(l, 14, 1.57, 0.1),
    body1: g(a, 16, 1.5, 0.15),
    body2: g(a, 14, 1.43, 0.15),
    button: g(l, 14, 1.75, 0.4, ti),
    caption: g(a, 12, 1.66, 0.4),
    overline: g(a, 12, 2.66, 1, ti),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return qe(T({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, m), p, {
    clone: !1
    // No need to clone deep
  });
}
const Rd = 0.2, Nd = 0.14, $d = 0.12;
function ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Rd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Nd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${$d})`].join(",");
}
const Md = ["none", ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _d = Md, Id = ["duration", "easing", "delay"], Ad = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Dd = {
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
function ri(e) {
  return `${Math.round(e)}ms`;
}
function jd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Bd(e) {
  const t = T({}, Ad, e.easing), n = T({}, Dd, e.duration);
  return T({
    getAutoHeightDuration: jd,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = ce(i, Id);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : ri(a)} ${l} ${typeof c == "string" ? c : ri(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Ld = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Fd = Ld, Vd = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function zd(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = ce(e, Vd);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Nt(18));
  const l = kd(r), c = Hr(e);
  let u = qe(c, {
    mixins: ld(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: _d.slice(),
    typography: Cd(l, i),
    transitions: Bd(o),
    zIndex: T({}, Fd)
  });
  if (u = qe(u, a), u = t.reduce((d, f) => qe(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, b) => {
      let v;
      for (v in p) {
        const g = p[v];
        if (d.indexOf(v) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = ze("", v);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[v] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const b = u.components[p].styleOverrides;
      b && p.indexOf("Mui") === 0 && f(b, p);
    });
  }
  return u.unstable_sxConfig = T({}, zr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return Ur({
      sx: f,
      theme: this
    });
  }, u;
}
const Ud = zd(), qr = Ud, Gr = "$$material", is = (e) => kn(e) && e !== "classes", Hd = td({
  themeId: Gr,
  defaultTheme: qr,
  rootShouldForwardProp: is
}), xe = Hd;
function hn() {
  const e = os(qr);
  return process.env.NODE_ENV !== "production" && w.useDebugValue(e), e[Gr] || e;
}
function Je({
  props: e,
  name: t
}) {
  return rd({
    props: e,
    name: t,
    defaultTheme: qr,
    themeId: Gr
  });
}
function Sr(e, t) {
  return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Sr(e, t);
}
function Wd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Sr(e, t);
}
const oi = {
  disabled: !1
};
var qd = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.shape({
  enter: s.number,
  exit: s.number,
  appear: s.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && s.oneOfType([s.string, s.shape({
  enter: s.string,
  exit: s.string,
  active: s.string
}), s.shape({
  enter: s.string,
  enterDone: s.string,
  enterActive: s.string,
  exit: s.string,
  exitDone: s.string,
  exitActive: s.string
})]);
const ss = Ct.createContext(null);
var Gd = function(t) {
  return t.scrollTop;
}, Jt = "unmounted", at = "exited", lt = "entering", St = "entered", Pr = "exiting", Ze = /* @__PURE__ */ function(e) {
  Wd(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, l = a && !a.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = at, i.appearStatus = lt) : c = St : r.unmountOnExit || r.mountOnEnter ? c = Jt : c = at, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === Jt ? {
      status: at
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== lt && a !== St && (i = lt) : (a === lt || a === St) && (i = Pr);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, a, l;
    return i = a = l = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === lt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : vn.findDOMNode(this);
          a && Gd(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === at && this.setState({
        status: Jt
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [vn.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!o && !a || oi.disabled) {
      this.safeSetState({
        status: St
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: lt
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: St
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : vn.findDOMNode(this);
    if (!i || oi.disabled) {
      this.safeSetState({
        status: at
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Pr
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: at
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : vn.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Jt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = ce(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ct.createElement(ss.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : Ct.cloneElement(Ct.Children.only(a), l))
    );
  }, t;
}(Ct.Component);
Ze.contextType = ss;
Ze.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: s.shape({
    current: typeof Element > "u" ? s.any : function(e, t, n, r, o, i) {
      var a = e[t];
      return s.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: s.oneOfType([s.func.isRequired, s.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: s.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: s.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: s.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: s.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: s.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: s.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = qd;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: s.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: s.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: s.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: s.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: s.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: s.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: s.func
} : {};
function Ot() {
}
Ze.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ot,
  onEntering: Ot,
  onEntered: Ot,
  onExit: Ot,
  onExiting: Ot,
  onExited: Ot
};
Ze.UNMOUNTED = Jt;
Ze.EXITED = at;
Ze.ENTERING = lt;
Ze.ENTERED = St;
Ze.EXITING = Pr;
const as = Ze, ls = (e) => e.scrollTop;
function An(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
const Xd = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Cr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Kd = {
  entering: {
    opacity: 1,
    transform: Cr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, dr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Xr = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: p,
    onExiting: b,
    style: v,
    timeout: g = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = as
  } = t, E = ce(t, Xd), $ = Kt(), y = w.useRef(), x = hn(), h = w.useRef(null), k = Ie(h, i.ref, n), S = (_) => (R) => {
    if (_) {
      const j = h.current;
      R === void 0 ? _(j) : _(j, R);
    }
  }, A = S(d), I = S((_, R) => {
    ls(_);
    const {
      duration: j,
      delay: Q,
      easing: Z
    } = An({
      style: v,
      timeout: g,
      easing: a
    }, {
      mode: "enter"
    });
    let O;
    g === "auto" ? (O = x.transitions.getAutoHeightDuration(_.clientHeight), y.current = O) : O = j, _.style.transition = [x.transitions.create("opacity", {
      duration: O,
      delay: Q
    }), x.transitions.create("transform", {
      duration: dr ? O : O * 0.666,
      delay: Q,
      easing: Z
    })].join(","), c && c(_, R);
  }), D = S(u), B = S(b), z = S((_) => {
    const {
      duration: R,
      delay: j,
      easing: Q
    } = An({
      style: v,
      timeout: g,
      easing: a
    }, {
      mode: "exit"
    });
    let Z;
    g === "auto" ? (Z = x.transitions.getAutoHeightDuration(_.clientHeight), y.current = Z) : Z = R, _.style.transition = [x.transitions.create("opacity", {
      duration: Z,
      delay: j
    }), x.transitions.create("transform", {
      duration: dr ? Z : Z * 0.666,
      delay: dr ? j : j || Z * 0.333,
      easing: Q
    })].join(","), _.style.opacity = 0, _.style.transform = Cr(0.75), f && f(_);
  }), G = S(p);
  return /* @__PURE__ */ P(m, T({
    appear: o,
    in: l,
    nodeRef: h,
    onEnter: I,
    onEntered: D,
    onEntering: A,
    onExit: z,
    onExited: G,
    onExiting: B,
    addEndListener: (_) => {
      g === "auto" && $.start(y.current || 0, _), r && r(h.current, _);
    },
    timeout: g === "auto" ? null : g
  }, E, {
    children: (_, R) => /* @__PURE__ */ w.cloneElement(i, T({
      style: T({
        opacity: 0,
        transform: Cr(0.75),
        visibility: _ === "exited" && !l ? "hidden" : void 0
      }, Kd[_], v, i.props.style),
      ref: k
    }, R))
  }));
});
process.env.NODE_ENV !== "production" && (Xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: s.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: s.bool,
  /**
   * A single child content element.
   */
  children: ln.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: s.oneOfType([s.shape({
    enter: s.string,
    exit: s.string
  }), s.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: s.bool,
  /**
   * @ignore
   */
  onEnter: s.func,
  /**
   * @ignore
   */
  onEntered: s.func,
  /**
   * @ignore
   */
  onEntering: s.func,
  /**
   * @ignore
   */
  onExit: s.func,
  /**
   * @ignore
   */
  onExited: s.func,
  /**
   * @ignore
   */
  onExiting: s.func,
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: s.oneOfType([s.oneOf(["auto"]), s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
Xr.muiSupportAuto = !0;
const Rr = Xr, Yd = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ii = Yd, Jd = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Zd = xe(Qi, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), cs = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r;
  const o = rs(), i = Je({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: b,
    open: v,
    placement: g,
    popperOptions: m,
    popperRef: E,
    transition: $,
    slots: y,
    slotProps: x
  } = i, h = ce(i, Jd), k = (r = y == null ? void 0 : y.root) != null ? r : c == null ? void 0 : c.Root, S = T({
    anchorEl: a,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: b,
    open: v,
    placement: g,
    popperOptions: m,
    popperRef: E,
    transition: $
  }, h);
  return /* @__PURE__ */ P(Zd, T({
    as: l,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: k
    },
    slotProps: x ?? u
  }, S, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (cs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: s.oneOfType([Ge, s.object, s.func]),
  /**
   * Popper render function or node.
   */
  children: s.oneOfType([s.node, s.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: s.shape({
    Root: s.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Ge, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: s.arrayOf(s.shape({
    data: s.object,
    effect: s.func,
    enabled: s.bool,
    fn: s.func,
    name: s.any,
    options: s.object,
    phase: s.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: s.arrayOf(s.string),
    requiresIfExists: s.arrayOf(s.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: s.shape({
    modifiers: s.array,
    onFirstUpdate: s.func,
    placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: s.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Mr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: s.bool
});
const us = cs;
function Qd(e) {
  return ze("MuiTooltip", e);
}
const ep = nt("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), tt = ep, tp = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function np(e) {
  return Math.round(e * 1e5) / 1e5;
}
const rp = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${Fe(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ye(a, Qd, t);
}, op = xe(us, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(({
  theme: e,
  ownerState: t,
  open: n
}) => T({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${tt.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${tt.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${tt.arrow}`]: T({}, t.isRtl ? {
    right: 0,
    marginRight: "-0.71em"
  } : {
    left: 0,
    marginLeft: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "100% 100%"
    }
  }),
  [`&[data-popper-placement*="left"] .${tt.arrow}`]: T({}, t.isRtl ? {
    left: 0,
    marginLeft: "-0.71em"
  } : {
    right: 0,
    marginRight: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "0 0"
    }
  })
})), ip = xe("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${Fe(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : In(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium
}, t.arrow && {
  position: "relative",
  margin: 0
}, t.touch && {
  padding: "8px 16px",
  fontSize: e.typography.pxToRem(14),
  lineHeight: `${np(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${tt.popper}[data-popper-placement*="left"] &`]: T({
    transformOrigin: "right center"
  }, t.isRtl ? T({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : T({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${tt.popper}[data-popper-placement*="right"] &`]: T({
    transformOrigin: "left center"
  }, t.isRtl ? T({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : T({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${tt.popper}[data-popper-placement*="top"] &`]: T({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${tt.popper}[data-popper-placement*="bottom"] &`]: T({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), sp = xe("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : In(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
}));
let wn = !1;
const si = new cn();
let qt = {
  x: 0,
  y: 0
};
function Tn(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const ds = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r, o, i, a, l, c, u, d, f, p, b, v, g, m, E, $, y, x, h;
  const k = Je({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: S = !1,
    children: A,
    components: I = {},
    componentsProps: D = {},
    describeChild: B = !1,
    disableFocusListener: z = !1,
    disableHoverListener: G = !1,
    disableInteractive: L = !1,
    disableTouchListener: _ = !1,
    enterDelay: R = 100,
    enterNextDelay: j = 0,
    enterTouchDelay: Q = 700,
    followCursor: Z = !1,
    id: O,
    leaveDelay: M = 0,
    leaveTouchDelay: V = 1500,
    onClose: X,
    onOpen: F,
    open: U,
    placement: W = "bottom",
    PopperComponent: q,
    PopperProps: H = {},
    slotProps: K = {},
    slots: Y = {},
    title: ne,
    TransitionComponent: N = Rr,
    TransitionProps: J
  } = k, C = ce(k, tp), re = /* @__PURE__ */ w.isValidElement(A) ? A : /* @__PURE__ */ P("span", {
    children: A
  }), me = hn(), Ee = me.direction === "rtl", [fe, it] = w.useState(), [we, Ue] = w.useState(null), Se = w.useRef(!1), He = L || Z, ge = Kt(), bt = Kt(), st = Kt(), Lt = Kt(), [mn, to] = Ni({
    controlled: U,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let We = mn;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ee
    } = w.useRef(U !== void 0);
    w.useEffect(() => {
      fe && fe.disabled && !ee && ne !== "" && fe.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [ne, fe, ee]);
  }
  const Jn = Ri(O), Ft = w.useRef(), gn = nn(() => {
    Ft.current !== void 0 && (document.body.style.WebkitUserSelect = Ft.current, Ft.current = void 0), Lt.clear();
  });
  w.useEffect(() => gn, [gn]);
  const no = (ee) => {
    si.clear(), wn = !0, to(!0), F && !We && F(ee);
  }, bn = nn(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ee) => {
      si.start(800 + M, () => {
        wn = !1;
      }), to(!1), X && We && X(ee), ge.start(me.transitions.duration.shortest, () => {
        Se.current = !1;
      });
    }
  ), Zn = (ee) => {
    Se.current && ee.type !== "touchstart" || (fe && fe.removeAttribute("title"), bt.clear(), st.clear(), R || wn && j ? bt.start(wn ? j : R, () => {
      no(ee);
    }) : no(ee));
  }, ro = (ee) => {
    bt.clear(), st.start(M, () => {
      bn(ee);
    });
  }, {
    isFocusVisibleRef: oo,
    onBlur: Is,
    onFocus: As,
    ref: Ds
  } = $i(), [, io] = w.useState(!1), so = (ee) => {
    Is(ee), oo.current === !1 && (io(!1), ro(ee));
  }, ao = (ee) => {
    fe || it(ee.currentTarget), As(ee), oo.current === !0 && (io(!0), Zn(ee));
  }, lo = (ee) => {
    Se.current = !0;
    const Pe = re.props;
    Pe.onTouchStart && Pe.onTouchStart(ee);
  }, co = Zn, uo = ro, js = (ee) => {
    lo(ee), st.clear(), ge.clear(), gn(), Ft.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Lt.start(Q, () => {
      document.body.style.WebkitUserSelect = Ft.current, Zn(ee);
    });
  }, Bs = (ee) => {
    re.props.onTouchEnd && re.props.onTouchEnd(ee), gn(), st.start(V, () => {
      bn(ee);
    });
  };
  w.useEffect(() => {
    if (!We)
      return;
    function ee(Pe) {
      (Pe.key === "Escape" || Pe.key === "Esc") && bn(Pe);
    }
    return document.addEventListener("keydown", ee), () => {
      document.removeEventListener("keydown", ee);
    };
  }, [bn, We]);
  const Ls = Ie(re.ref, Ds, it, n);
  !ne && ne !== 0 && (We = !1);
  const Qn = w.useRef(), Fs = (ee) => {
    const Pe = re.props;
    Pe.onMouseMove && Pe.onMouseMove(ee), qt = {
      x: ee.clientX,
      y: ee.clientY
    }, Qn.current && Qn.current.update();
  }, Vt = {}, er = typeof ne == "string";
  B ? (Vt.title = !We && er && !G ? ne : null, Vt["aria-describedby"] = We ? Jn : null) : (Vt["aria-label"] = er ? ne : null, Vt["aria-labelledby"] = We && !er ? Jn : null);
  const $e = T({}, Vt, C, re.props, {
    className: be(C.className, re.props.className),
    onTouchStart: lo,
    ref: Ls
  }, Z ? {
    onMouseMove: Fs
  } : {});
  process.env.NODE_ENV !== "production" && ($e["data-mui-internal-clone-element"] = !0, w.useEffect(() => {
    fe && !fe.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [fe]));
  const zt = {};
  _ || ($e.onTouchStart = js, $e.onTouchEnd = Bs), G || ($e.onMouseOver = Tn(co, $e.onMouseOver), $e.onMouseLeave = Tn(uo, $e.onMouseLeave), He || (zt.onMouseOver = co, zt.onMouseLeave = uo)), z || ($e.onFocus = Tn(ao, $e.onFocus), $e.onBlur = Tn(so, $e.onBlur), He || (zt.onFocus = ao, zt.onBlur = so)), process.env.NODE_ENV !== "production" && re.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${re.props.title}\` or the Tooltip component.`].join(`
`));
  const Vs = w.useMemo(() => {
    var ee;
    let Pe = [{
      name: "arrow",
      enabled: !!we,
      options: {
        element: we,
        padding: 4
      }
    }];
    return (ee = H.popperOptions) != null && ee.modifiers && (Pe = Pe.concat(H.popperOptions.modifiers)), T({}, H.popperOptions, {
      modifiers: Pe
    });
  }, [we, H]), Ut = T({}, k, {
    isRtl: Ee,
    arrow: S,
    disableInteractive: He,
    placement: W,
    PopperComponentProp: q,
    touch: Se.current
  }), tr = rp(Ut), po = (r = (o = Y.popper) != null ? o : I.Popper) != null ? r : op, fo = (i = (a = (l = Y.transition) != null ? l : I.Transition) != null ? a : N) != null ? i : Rr, ho = (c = (u = Y.tooltip) != null ? u : I.Tooltip) != null ? c : ip, mo = (d = (f = Y.arrow) != null ? f : I.Arrow) != null ? d : sp, zs = Yt(po, T({}, H, (p = K.popper) != null ? p : D.popper, {
    className: be(tr.popper, H == null ? void 0 : H.className, (b = (v = K.popper) != null ? v : D.popper) == null ? void 0 : b.className)
  }), Ut), Us = Yt(fo, T({}, J, (g = K.transition) != null ? g : D.transition), Ut), Hs = Yt(ho, T({}, (m = K.tooltip) != null ? m : D.tooltip, {
    className: be(tr.tooltip, (E = ($ = K.tooltip) != null ? $ : D.tooltip) == null ? void 0 : E.className)
  }), Ut), Ws = Yt(mo, T({}, (y = K.arrow) != null ? y : D.arrow, {
    className: be(tr.arrow, (x = (h = K.arrow) != null ? h : D.arrow) == null ? void 0 : x.className)
  }), Ut);
  return /* @__PURE__ */ ye(w.Fragment, {
    children: [/* @__PURE__ */ w.cloneElement(re, $e), /* @__PURE__ */ P(po, T({
      as: q ?? us,
      placement: W,
      anchorEl: Z ? {
        getBoundingClientRect: () => ({
          top: qt.y,
          left: qt.x,
          right: qt.x,
          bottom: qt.y,
          width: 0,
          height: 0
        })
      } : fe,
      popperRef: Qn,
      open: fe ? We : !1,
      id: Jn,
      transition: !0
    }, zt, zs, {
      popperOptions: Vs,
      children: ({
        TransitionProps: ee
      }) => /* @__PURE__ */ P(fo, T({
        timeout: me.transitions.duration.shorter
      }, ee, Us, {
        children: /* @__PURE__ */ ye(ho, T({}, Hs, {
          children: [ne, S ? /* @__PURE__ */ P(mo, T({}, Ws, {
            ref: Ue
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: s.bool,
  /**
   * Tooltip reference element.
   */
  children: ln.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Arrow: s.elementType,
    Popper: s.elementType,
    Tooltip: s.elementType,
    Transition: s.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: s.shape({
    arrow: s.object,
    popper: s.object,
    tooltip: s.object,
    transition: s.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: s.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: s.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: s.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: s.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: s.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: s.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: s.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: s.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: s.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: s.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: s.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: s.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: s.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: s.elementType,
  /**
   * Props applied to the [`Popper`](/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: s.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: s.shape({
    arrow: s.object,
    popper: s.object,
    tooltip: s.object,
    transition: s.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: s.shape({
    arrow: s.elementType,
    popper: s.elementType,
    tooltip: s.elementType,
    transition: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: s.node,
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: s.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: s.object
});
const ap = ds;
var Kr = {}, ps = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ps);
var lp = ps.exports, pr = {};
function cp(e) {
  return ze("MuiSvgIcon", e);
}
nt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const up = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], dp = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Fe(t)}`, `fontSize${Fe(n)}`]
  };
  return Ye(o, cp, r);
}, pp = xe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Fe(n.color)}`], t[`fontSize${Fe(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, a, l, c, u, d, f, p, b, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? f : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), Yr = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = Je({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = r, b = ce(r, up), v = /* @__PURE__ */ w.isValidElement(o) && o.type === "svg", g = T({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: v
  }), m = {};
  d || (m.viewBox = p);
  const E = dp(g);
  return /* @__PURE__ */ ye(pp, T({
    as: l,
    className: be(E.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, m, b, v && o.props, {
    ownerState: g,
    children: [v ? o.props.children : o, f ? /* @__PURE__ */ P("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: s.oneOfType([s.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: s.oneOfType([s.oneOf(["inherit", "large", "medium", "small"]), s.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: s.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: s.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: s.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: s.string
});
Yr.muiName = "SvgIcon";
const ai = Yr;
function fs(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ P(ai, T({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = ai.muiName, /* @__PURE__ */ w.memo(/* @__PURE__ */ w.forwardRef(n));
}
const fp = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ji.configure(e);
  }
}, hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Fe,
  createChainedFunction: Er,
  createSvgIcon: fs,
  debounce: Ci,
  deprecatedPropType: Va,
  isMuiElement: za,
  ownerDocument: ve,
  ownerWindow: $t,
  requirePropFactory: Ua,
  setRef: Rn,
  unstable_ClassNameGenerator: fp,
  unstable_useEnhancedEffect: pt,
  unstable_useId: Ri,
  unsupportedProp: qa,
  useControlled: Ni,
  useEventCallback: nn,
  useForkRef: Ie,
  useIsFocusVisible: $i
}, Symbol.toStringTag, { value: "Module" })), mp = /* @__PURE__ */ xa(hp);
var li;
function gp() {
  return li || (li = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = mp;
  }(pr)), pr;
}
var bp = lp;
Object.defineProperty(Kr, "__esModule", {
  value: !0
});
var hs = Kr.default = void 0, vp = bp(gp()), yp = qs;
hs = Kr.default = (0, vp.default)(/* @__PURE__ */ (0, yp.jsx)("path", {
  d: "m10 17 5-5-5-5z"
}), "ArrowRight");
function ci(e, t, n) {
  return e ? /* @__PURE__ */ P(vi, { className: `papi-menu-icon-${n ? "leading" : "trailing"}`, children: /* @__PURE__ */ P("img", { src: e, alt: `${n ? "Leading" : "Trailing"} icon for ${t}` }) }) : void 0;
}
function ms(e) {
  const {
    onClick: t,
    label: n,
    tooltip: r,
    allowForLeadingIcons: o = !0,
    iconPathBefore: i = void 0,
    iconPathAfter: a = void 0,
    hasAutoFocus: l = !1,
    className: c,
    isDisabled: u = !1,
    isDense: d = !0,
    isSubMenuParent: f = !1,
    hasDisabledGutters: p = !1,
    hasDivider: b = !1,
    focusVisibleClassName: v,
    id: g,
    children: m
  } = e, E = /* @__PURE__ */ P(
    Js,
    {
      sx: { lineHeight: 0.8 },
      autoFocus: l,
      className: c,
      disabled: u,
      dense: d,
      disableGutters: p,
      divider: b,
      focusVisibleClassName: v,
      onClick: t,
      id: g,
      children: n ? /* @__PURE__ */ ye(jn, { children: [
        ci(i, n, !0),
        /* @__PURE__ */ P(Zs, { primary: n, inset: !i && o }),
        f ? /* @__PURE__ */ P(vi, { className: "papi-menu-icon-trailing", children: /* @__PURE__ */ P(hs, {}) }) : ci(a, n, !1)
      ] }) : m
    }
  );
  return r ? /* @__PURE__ */ P(ap, { title: r, placement: "right", children: /* @__PURE__ */ P("div", { children: E }) }) : E;
}
function gs(e) {
  return Object.entries(e.groups).map(([n, r]) => ({ id: n, group: r }));
}
function xp(e) {
  const [t, n] = ut(void 0), { parentMenuItem: r, parentItemProps: o, menuDefinition: i } = e, a = (u) => {
    n(u.currentTarget);
  }, l = () => {
    n(void 0);
  }, c = () => {
    let u = gs(i).filter((d) => "menuItem" in d.group);
    if (!(r != null && r.id))
      throw new Error("A valid parent menu item is required for submenus.");
    return u = u.filter(
      (d) => "menuItem" in d.group && d.group.menuItem === r.id
    ), /* @__PURE__ */ P(Jr, { ...e, includedGroups: u });
  };
  return /* @__PURE__ */ ye(jn, { children: [
    /* @__PURE__ */ P(ms, { onClick: a, ...o, isSubMenuParent: !0 }),
    /* @__PURE__ */ P(
      Qs,
      {
        anchorEl: t,
        open: !!t,
        onClose: l,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        children: c()
      },
      r.id
    )
  ] });
}
const Ep = (e, t) => t.filter((o) => o.group === e).sort((o, i) => (o.order || 0) - (i.order || 0));
function Jr(e) {
  const { menuDefinition: t, onClick: n, commandHandler: r, includedGroups: o } = e, { items: i, allowForLeadingIcons: a } = Dt(() => {
    const d = o && o.length > 0 ? o : (
      // We're apparently laying out a single-column menu (presumably a context menu). In this
      // case, all groups should be included except ones that belong to a submenu.
      gs(t).filter((v) => !("menuItem" in v.group))
    ), f = Object.values(d).sort(
      (v, g) => (v.group.order || 0) - (g.group.order || 0)
    ), p = [];
    f.forEach((v) => {
      Ep(v.id, t.items).forEach(
        (g) => p.push({ item: g, isLastItemInGroup: !1 })
      ), p.length > 0 && (p[p.length - 1].isLastItemInGroup = !0);
    }), p.length > 0 && (p[p.length - 1].isLastItemInGroup = !1);
    const b = p.some(
      (v) => "iconPathBefore" in v.item && v.item.iconPathBefore
    );
    return { items: p, allowForLeadingIcons: b };
  }, [o, t]), l = ({ item: d, isLastItemInGroup: f }) => ({
    className: "papi-menu-item",
    label: d.label,
    tooltip: d.tooltip,
    iconPathBefore: "iconPathBefore" in d ? d.iconPathBefore : void 0,
    iconPathAfter: "iconPathAfter" in d ? d.iconPathAfter : void 0,
    hasDivider: f,
    // Set hasDivider to true for the last item in a group
    allowForLeadingIcons: a
  }), [c] = i;
  if (!c)
    return /* @__PURE__ */ P("div", {});
  const u = c.item.group;
  return /* @__PURE__ */ P("div", { role: "menu", "aria-label": u, children: i.map((d, f) => {
    const { item: p } = d, b = l(d);
    if ("command" in p) {
      const v = p.group + f;
      return /* @__PURE__ */ P(
        ms,
        {
          onClick: (g) => {
            n == null || n(g), r(p);
          },
          ...b
        },
        v
      );
    }
    return /* @__PURE__ */ P(
      xp,
      {
        parentMenuItem: p,
        parentItemProps: b,
        ...e
      },
      u + p.id
    );
  }) }, u);
}
function wp(e) {
  const { menuDefinition: t, columnId: n } = e;
  let i = Object.entries(t.groups).map(([a, l]) => ({ id: a, group: l })).filter((a) => "column" in a.group);
  return n && "columns" in t && // Without this type assertion, TS doesn't know what columns is.
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  t.columns[n] && (i = i.filter(
    (a) => "column" in a.group && a.group.column === n
  )), /* @__PURE__ */ P(Jr, { ...e, includedGroups: i });
}
function Tp({
  commandHandler: e,
  menuDefinition: t,
  id: n,
  metadata: r,
  onClick: o,
  className: i
}) {
  return /* @__PURE__ */ ye(
    yi,
    {
      id: n,
      item: !0,
      xs: "auto",
      role: "menu",
      "aria-label": n,
      className: `papi-menu-column ${i ?? ""}`,
      children: [
        /* @__PURE__ */ P("h3", { "aria-label": r.label, className: `papi-menu-column-header ${i ?? ""}`, children: r.label }),
        /* @__PURE__ */ P(ea, { id: n, dense: !0, className: i ?? "", children: /* @__PURE__ */ P(
          wp,
          {
            commandHandler: e,
            menuDefinition: t,
            columnId: n,
            onClick: o
          }
        ) })
      ]
    }
  );
}
function Op({
  commandHandler: e,
  className: t,
  multiColumnMenu: n,
  id: r
}) {
  const { columns: o } = n, i = Dt(() => {
    const a = /* @__PURE__ */ new Map();
    return Object.getOwnPropertyNames(o).forEach((l) => {
      if (l === "isExtensible")
        return;
      const c = l, u = o[c];
      typeof u == "object" && typeof u.order == "number" && !Number.isNaN(u.order) ? a.set(u.order, { id: c, metadata: u }) : console.warn(
        `Property ${l} (${typeof u}) on menu ${r} is not a valid column and is being ignored. This might indicate data corruption`
      );
    }), Array.from(a.values()).sort((l, c) => (l.metadata.order || 0) - (c.metadata.order || 0));
  }, [o, r]);
  return /* @__PURE__ */ P(
    yi,
    {
      container: !0,
      spacing: 0,
      className: `papi-multi-column-menu ${t ?? ""}`,
      columns: i.length,
      role: "menu",
      "aria-label": "GridMenu",
      id: r,
      children: i.map((a, l) => /* @__PURE__ */ P(
        Tp,
        {
          commandHandler: e,
          menuDefinition: n,
          ...a,
          className: t
        },
        l
      ))
    }
  );
}
const bs = /* @__PURE__ */ w.createContext({});
process.env.NODE_ENV !== "production" && (bs.displayName = "ListContext");
const kp = bs;
function Sp(e) {
  return ze("MuiList", e);
}
nt("MuiList", ["root", "padding", "dense", "subheader"]);
const Pp = ["children", "className", "component", "dense", "disablePadding", "subheader"], Cp = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return Ye({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, Sp, t);
}, Rp = xe("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => T({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), vs = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = Je({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ce(r, Pp), f = w.useMemo(() => ({
    dense: l
  }), [l]), p = T({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), b = Cp(p);
  return /* @__PURE__ */ P(kp.Provider, {
    value: f,
    children: /* @__PURE__ */ ye(Rp, T({
      as: a,
      className: be(b.root, i),
      ref: n,
      ownerState: p
    }, d, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (vs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: s.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: s.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: s.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const Np = vs, $p = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function fr(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ui(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ys(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Gt(e, t, n, r, o, i) {
  let a = !1, l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !ys(l, i) || c)
      l = o(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const xs = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu"
  } = t, p = ce(t, $p), b = w.useRef(null), v = w.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  pt(() => {
    o && b.current.focus();
  }, [o]), w.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (y, x) => {
      const h = !b.current.style.width;
      if (y.clientHeight < b.current.clientHeight && h) {
        const k = `${Mi(ve(y))}px`;
        b.current.style[x.direction === "rtl" ? "paddingLeft" : "paddingRight"] = k, b.current.style.width = `calc(100% + ${k})`;
      }
      return b.current;
    }
  }), []);
  const g = (y) => {
    const x = b.current, h = y.key, k = ve(x).activeElement;
    if (h === "ArrowDown")
      y.preventDefault(), Gt(x, k, u, c, fr);
    else if (h === "ArrowUp")
      y.preventDefault(), Gt(x, k, u, c, ui);
    else if (h === "Home")
      y.preventDefault(), Gt(x, null, u, c, fr);
    else if (h === "End")
      y.preventDefault(), Gt(x, null, u, c, ui);
    else if (h.length === 1) {
      const S = v.current, A = h.toLowerCase(), I = performance.now();
      S.keys.length > 0 && (I - S.lastTime > 500 ? (S.keys = [], S.repeating = !0, S.previousKeyMatched = !0) : S.repeating && A !== S.keys[0] && (S.repeating = !1)), S.lastTime = I, S.keys.push(A);
      const D = k && !S.repeating && ys(k, S);
      S.previousKeyMatched && (D || Gt(x, k, !1, c, fr, S)) ? y.preventDefault() : S.previousKeyMatched = !1;
    }
    d && d(y);
  }, m = Ie(b, n);
  let E = -1;
  w.Children.forEach(a, (y, x) => {
    if (!/* @__PURE__ */ w.isValidElement(y)) {
      E === x && (E += 1, E >= a.length && (E = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Cn.isFragment(y) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), y.props.disabled || (f === "selectedMenu" && y.props.selected || E === -1) && (E = x), E === x && (y.props.disabled || y.props.muiSkipListHighlight || y.type.muiSkipListHighlight) && (E += 1, E >= a.length && (E = -1));
  });
  const $ = w.Children.map(a, (y, x) => {
    if (x === E) {
      const h = {};
      return i && (h.autoFocus = !0), y.props.tabIndex === void 0 && f === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ w.cloneElement(y, h);
    }
    return y;
  });
  return /* @__PURE__ */ P(Np, T({
    role: "menu",
    ref: m,
    className: l,
    onKeyDown: g,
    tabIndex: o ? 0 : -1
  }, p, {
    children: $
  }));
});
process.env.NODE_ENV !== "production" && (xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: s.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: s.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: s.node,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: s.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: s.bool,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: s.oneOf(["menu", "selectedMenu"])
});
const Mp = xs, _p = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Ip = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Es = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = hn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: p,
    onExit: b,
    onExited: v,
    onExiting: g,
    style: m,
    timeout: E = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: $ = as
  } = t, y = ce(t, _p), x = w.useRef(null), h = Ie(x, l.ref, n), k = (L) => (_) => {
    if (L) {
      const R = x.current;
      _ === void 0 ? L(R) : L(R, _);
    }
  }, S = k(p), A = k((L, _) => {
    ls(L);
    const R = An({
      style: m,
      timeout: E,
      easing: c
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = r.transitions.create("opacity", R), L.style.transition = r.transitions.create("opacity", R), d && d(L, _);
  }), I = k(f), D = k(g), B = k((L) => {
    const _ = An({
      style: m,
      timeout: E,
      easing: c
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = r.transitions.create("opacity", _), L.style.transition = r.transitions.create("opacity", _), b && b(L);
  }), z = k(v);
  return /* @__PURE__ */ P($, T({
    appear: a,
    in: u,
    nodeRef: x,
    onEnter: A,
    onEntered: I,
    onEntering: S,
    onExit: B,
    onExited: z,
    onExiting: D,
    addEndListener: (L) => {
      i && i(x.current, L);
    },
    timeout: E
  }, y, {
    children: (L, _) => /* @__PURE__ */ w.cloneElement(l, T({
      style: T({
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0
      }, Ip[L], m, l.props.style),
      ref: h
    }, _))
  }));
});
process.env.NODE_ENV !== "production" && (Es.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: s.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: s.bool,
  /**
   * A single child content element.
   */
  children: ln.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: s.oneOfType([s.shape({
    enter: s.string,
    exit: s.string
  }), s.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: s.bool,
  /**
   * @ignore
   */
  onEnter: s.func,
  /**
   * @ignore
   */
  onEntered: s.func,
  /**
   * @ignore
   */
  onEntering: s.func,
  /**
   * @ignore
   */
  onExit: s.func,
  /**
   * @ignore
   */
  onExited: s.func,
  /**
   * @ignore
   */
  onExiting: s.func,
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
const Ap = Es;
function Dp(e) {
  return ze("MuiBackdrop", e);
}
nt("MuiBackdrop", ["root", "invisible"]);
const jp = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Bp = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ye({
    root: ["root", n && "invisible"]
  }, Dp, t);
}, Lp = xe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => T({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), ws = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r, o, i;
  const a = Je({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: f = {},
    invisible: p = !1,
    open: b,
    slotProps: v = {},
    slots: g = {},
    TransitionComponent: m = Ap,
    transitionDuration: E
  } = a, $ = ce(a, jp), y = T({}, a, {
    component: u,
    invisible: p
  }), x = Bp(y), h = (r = v.root) != null ? r : f.root;
  return /* @__PURE__ */ P(m, T({
    in: b,
    timeout: E
  }, $, {
    children: /* @__PURE__ */ P(Lp, T({
      "aria-hidden": !0
    }, h, {
      as: (o = (i = g.root) != null ? i : d.Root) != null ? o : u,
      className: be(x.root, c, h == null ? void 0 : h.className),
      ownerState: T({}, y, h == null ? void 0 : h.ownerState),
      classes: x,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Root: s.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: s.shape({
    root: s.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: s.bool,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: s.shape({
    root: s.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: s.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
const Fp = ws;
function Vp(e) {
  return ze("MuiModal", e);
}
nt("MuiModal", ["root", "hidden", "backdrop"]);
const zp = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Up = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ye({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Vp, r);
}, Hp = xe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Wp = xe(Fp, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Ts = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r, o, i, a, l, c;
  const u = Je({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Wp,
    BackdropProps: f,
    className: p,
    closeAfterTransition: b = !1,
    children: v,
    container: g,
    component: m,
    components: E = {},
    componentsProps: $ = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: k = !1,
    disableRestoreFocus: S = !1,
    disableScrollLock: A = !1,
    hideBackdrop: I = !1,
    keepMounted: D = !1,
    onBackdropClick: B,
    open: z,
    slotProps: G,
    slots: L
    // eslint-disable-next-line react/prop-types
  } = u, _ = ce(u, zp), R = T({}, u, {
    closeAfterTransition: b,
    disableAutoFocus: y,
    disableEnforceFocus: x,
    disableEscapeKeyDown: h,
    disablePortal: k,
    disableRestoreFocus: S,
    disableScrollLock: A,
    hideBackdrop: I,
    keepMounted: D
  }), {
    getRootProps: j,
    getBackdropProps: Q,
    getTransitionProps: Z,
    portalRef: O,
    isTopModal: M,
    exited: V,
    hasTransition: X
  } = _l(T({}, R, {
    rootRef: n
  })), F = T({}, R, {
    exited: V
  }), U = Up(F), W = {};
  if (v.props.tabIndex === void 0 && (W.tabIndex = "-1"), X) {
    const {
      onEnter: J,
      onExited: C
    } = Z();
    W.onEnter = J, W.onExited = C;
  }
  const q = (r = (o = L == null ? void 0 : L.root) != null ? o : E.Root) != null ? r : Hp, H = (i = (a = L == null ? void 0 : L.backdrop) != null ? a : E.Backdrop) != null ? i : d, K = (l = G == null ? void 0 : G.root) != null ? l : $.root, Y = (c = G == null ? void 0 : G.backdrop) != null ? c : $.backdrop, ne = ft({
    elementType: q,
    externalSlotProps: K,
    externalForwardedProps: _,
    getSlotProps: j,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: F,
    className: be(p, K == null ? void 0 : K.className, U == null ? void 0 : U.root, !F.open && F.exited && (U == null ? void 0 : U.hidden))
  }), N = ft({
    elementType: H,
    externalSlotProps: Y,
    additionalProps: f,
    getSlotProps: (J) => Q(T({}, J, {
      onClick: (C) => {
        B && B(C), J != null && J.onClick && J.onClick(C);
      }
    })),
    className: be(Y == null ? void 0 : Y.className, f == null ? void 0 : f.className, U == null ? void 0 : U.backdrop),
    ownerState: F
  });
  return !D && !z && (!X || V) ? null : /* @__PURE__ */ P(rn, {
    ref: O,
    container: g,
    disablePortal: k,
    children: /* @__PURE__ */ ye(q, T({}, ne, {
      children: [!I && d ? /* @__PURE__ */ P(H, T({}, N)) : null, /* @__PURE__ */ P(Nn, {
        disableEnforceFocus: x,
        disableAutoFocus: y,
        disableRestoreFocus: S,
        isEnabled: M,
        open: z,
        children: /* @__PURE__ */ w.cloneElement(v, W)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: s.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: s.object,
  /**
   * A single child content element.
   */
  children: ln.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: s.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Backdrop: s.elementType,
    Root: s.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: s.shape({
    backdrop: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Ge, s.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: s.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: s.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: s.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: s.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: s.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: s.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: s.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: s.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: s.shape({
    backdrop: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    backdrop: s.elementType,
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const qp = Ts;
function Gp(e) {
  return ze("MuiPaper", e);
}
nt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Xp = ["className", "component", "elevation", "square", "variant"], Kp = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ye(i, Gp, o);
}, Yp = xe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return T({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && T({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${In("#fff", ii(t.elevation))}, ${In("#fff", ii(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Os = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = Je({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ce(r, Xp), d = T({}, r, {
    component: i,
    elevation: a,
    square: l,
    variant: c
  }), f = Kp(d);
  return process.env.NODE_ENV !== "production" && hn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ P(Yp, T({
    as: i,
    ownerState: d,
    className: be(f.root, o),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: jt(Ai, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: s.oneOfType([s.oneOf(["elevation", "outlined"]), s.string])
});
const Jp = Os;
function Zp(e) {
  return ze("MuiPopover", e);
}
nt("MuiPopover", ["root", "paper"]);
const Qp = ["onEntering"], ef = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], tf = ["slotProps"];
function di(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function pi(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function fi(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Pn(e) {
  return typeof e == "function" ? e() : e;
}
const nf = (e) => {
  const {
    classes: t
  } = e;
  return Ye({
    root: ["root"],
    paper: ["paper"]
  }, Zp, t);
}, rf = xe(qp, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ks = xe(Jp, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ss = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r, o, i;
  const a = Je({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: f = "anchorEl",
    children: p,
    className: b,
    container: v,
    elevation: g = 8,
    marginThreshold: m = 16,
    open: E,
    PaperProps: $ = {},
    slots: y,
    slotProps: x,
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: k = Rr,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: A
    } = {},
    disableScrollLock: I = !1
  } = a, D = ce(a.TransitionProps, Qp), B = ce(a, ef), z = (r = x == null ? void 0 : x.paper) != null ? r : $, G = w.useRef(), L = Ie(G, z.ref), _ = T({}, a, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: g,
    marginThreshold: m,
    externalPaperSlotProps: z,
    transformOrigin: h,
    TransitionComponent: k,
    transitionDuration: S,
    TransitionProps: D
  }), R = nf(_), j = w.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const J = Pn(c), C = J && J.nodeType === 1 ? J : ve(G.current).body, re = C.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const me = C.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && me.top === 0 && me.left === 0 && me.right === 0 && me.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: re.top + di(re, u.vertical),
      left: re.left + pi(re, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), Q = w.useCallback((J) => ({
    vertical: di(J, h.vertical),
    horizontal: pi(J, h.horizontal)
  }), [h.horizontal, h.vertical]), Z = w.useCallback((J) => {
    const C = {
      width: J.offsetWidth,
      height: J.offsetHeight
    }, re = Q(C);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: fi(re)
      };
    const me = j();
    let Ee = me.top - re.vertical, fe = me.left - re.horizontal;
    const it = Ee + C.height, we = fe + C.width, Ue = $t(Pn(c)), Se = Ue.innerHeight - m, He = Ue.innerWidth - m;
    if (m !== null && Ee < m) {
      const ge = Ee - m;
      Ee -= ge, re.vertical += ge;
    } else if (m !== null && it > Se) {
      const ge = it - Se;
      Ee -= ge, re.vertical += ge;
    }
    if (process.env.NODE_ENV !== "production" && C.height > Se && C.height && Se && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${C.height - Se}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), m !== null && fe < m) {
      const ge = fe - m;
      fe -= ge, re.horizontal += ge;
    } else if (we > He) {
      const ge = we - He;
      fe -= ge, re.horizontal += ge;
    }
    return {
      top: `${Math.round(Ee)}px`,
      left: `${Math.round(fe)}px`,
      transformOrigin: fi(re)
    };
  }, [c, f, j, Q, m]), [O, M] = w.useState(E), V = w.useCallback(() => {
    const J = G.current;
    if (!J)
      return;
    const C = Z(J);
    C.top !== null && (J.style.top = C.top), C.left !== null && (J.style.left = C.left), J.style.transformOrigin = C.transformOrigin, M(!0);
  }, [Z]);
  w.useEffect(() => (I && window.addEventListener("scroll", V), () => window.removeEventListener("scroll", V)), [c, I, V]);
  const X = (J, C) => {
    A && A(J, C), V();
  }, F = () => {
    M(!1);
  };
  w.useEffect(() => {
    E && V();
  }), w.useImperativeHandle(l, () => E ? {
    updatePosition: () => {
      V();
    }
  } : null, [E, V]), w.useEffect(() => {
    if (!E)
      return;
    const J = Ci(() => {
      V();
    }), C = $t(c);
    return C.addEventListener("resize", J), () => {
      J.clear(), C.removeEventListener("resize", J);
    };
  }, [c, E, V]);
  let U = S;
  S === "auto" && !k.muiSupportAuto && (U = void 0);
  const W = v || (c ? ve(Pn(c)).body : void 0), q = (o = y == null ? void 0 : y.root) != null ? o : rf, H = (i = y == null ? void 0 : y.paper) != null ? i : ks, K = ft({
    elementType: H,
    externalSlotProps: T({}, z, {
      style: O ? z.style : T({}, z.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: g,
      ref: L
    },
    ownerState: _,
    className: be(R.paper, z == null ? void 0 : z.className)
  }), Y = ft({
    elementType: q,
    externalSlotProps: (x == null ? void 0 : x.root) || {},
    externalForwardedProps: B,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: W,
      open: E
    },
    ownerState: _,
    className: be(R.root, b)
  }), {
    slotProps: ne
  } = Y, N = ce(Y, tf);
  return /* @__PURE__ */ P(q, T({}, N, !Li(q) && {
    slotProps: ne,
    disableScrollLock: I
  }, {
    children: /* @__PURE__ */ P(k, T({
      appear: !0,
      in: E,
      onEntering: X,
      onExited: F,
      timeout: U
    }, D, {
      children: /* @__PURE__ */ P(H, T({}, K, {
        children: p
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Mr,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: jt(s.oneOfType([Ge, s.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Pn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: s.shape({
    horizontal: s.oneOfType([s.oneOf(["center", "left", "right"]), s.number]).isRequired,
    vertical: s.oneOfType([s.oneOf(["bottom", "center", "top"]), s.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: s.shape({
    left: s.number.isRequired,
    top: s.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: s.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Ge, s.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: s.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Ai,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: s.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: s.shape({
    component: _a
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: s.shape({
    paper: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: s.shape({
    paper: s.elementType,
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: s.shape({
    horizontal: s.oneOfType([s.oneOf(["center", "left", "right"]), s.number]).isRequired,
    vertical: s.oneOfType([s.oneOf(["bottom", "center", "top"]), s.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: s.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: s.oneOfType([s.oneOf(["auto"]), s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: s.object
});
const of = Ss;
function sf(e) {
  return ze("MuiMenu", e);
}
nt("MuiMenu", ["root", "paper", "list"]);
const af = ["onEntering"], lf = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], cf = {
  vertical: "top",
  horizontal: "right"
}, uf = {
  vertical: "top",
  horizontal: "left"
}, df = (e) => {
  const {
    classes: t
  } = e;
  return Ye({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, sf, t);
}, pf = xe(of, {
  shouldForwardProp: (e) => is(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ff = xe(ks, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), hf = xe(Mp, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ps = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r, o;
  const i = Je({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: f,
    open: p,
    PaperProps: b = {},
    PopoverClasses: v,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: m
    } = {},
    variant: E = "selectedMenu",
    slots: $ = {},
    slotProps: y = {}
  } = i, x = ce(i.TransitionProps, af), h = ce(i, lf), k = hn(), S = k.direction === "rtl", A = T({}, i, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: m,
    PaperProps: b,
    transitionDuration: g,
    TransitionProps: x,
    variant: E
  }), I = df(A), D = a && !u && p, B = w.useRef(null), z = (Z, O) => {
    B.current && B.current.adjustStyleForScrollbar(Z, k), m && m(Z, O);
  }, G = (Z) => {
    Z.key === "Tab" && (Z.preventDefault(), f && f(Z, "tabKeyDown"));
  };
  let L = -1;
  w.Children.map(l, (Z, O) => {
    /* @__PURE__ */ w.isValidElement(Z) && (process.env.NODE_ENV !== "production" && Cn.isFragment(Z) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), Z.props.disabled || (E === "selectedMenu" && Z.props.selected || L === -1) && (L = O));
  });
  const _ = (r = $.paper) != null ? r : ff, R = (o = y.paper) != null ? o : b, j = ft({
    elementType: $.root,
    externalSlotProps: y.root,
    ownerState: A,
    className: [I.root, c]
  }), Q = ft({
    elementType: _,
    externalSlotProps: R,
    ownerState: A,
    className: I.paper
  });
  return /* @__PURE__ */ P(pf, T({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: S ? "right" : "left"
    },
    transformOrigin: S ? cf : uf,
    slots: {
      paper: _,
      root: $.root
    },
    slotProps: {
      root: j,
      paper: Q
    },
    open: p,
    ref: n,
    transitionDuration: g,
    TransitionProps: T({
      onEntering: z
    }, x),
    ownerState: A
  }, h, {
    classes: v,
    children: /* @__PURE__ */ P(hf, T({
      onKeyDown: G,
      actions: B,
      autoFocus: a && (L === -1 || u),
      autoFocusItem: D,
      variant: E
    }, d, {
      className: be(I.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: s.oneOfType([Ge, s.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: s.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: s.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: s.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: s.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: s.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: s.shape({
    paper: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: s.shape({
    paper: s.elementType,
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: s.oneOfType([s.oneOf(["auto"]), s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: s.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: s.oneOf(["menu", "selectedMenu"])
});
const mf = Ps;
function zf({
  className: e,
  commandHandler: t,
  menuDefinition: n,
  children: r
}) {
  var u;
  const [o, i] = Ct.useState(void 0), a = et(
    (d) => {
      d.preventDefault(), i(
        o === void 0 ? {
          mouseX: d.clientX + 2,
          mouseY: d.clientY - 6
        } : (
          // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent re-locating existing context menus.
          void 0
        )
      );
    },
    [o]
  ), l = et(() => {
    i(void 0);
  }, []), c = Dt(() => {
    if (o !== void 0)
      return { top: o.mouseY, left: o.mouseX };
  }, [o]);
  return (((u = n == null ? void 0 : n.items) == null ? void 0 : u.length) ?? 0) === 0 || !r ? r : /* @__PURE__ */ ye(
    "div",
    {
      className: `papi-context-menu-target ${e ?? ""}`,
      onContextMenu: a,
      children: [
        r,
        /* @__PURE__ */ P(
          mf,
          {
            className: `papi-context-menu ${e ?? ""}`,
            open: o !== void 0,
            onClose: l,
            anchorReference: "anchorPosition",
            anchorPosition: c,
            children: /* @__PURE__ */ P(
              Jr,
              {
                menuDefinition: n,
                commandHandler: t,
                onClick: l
              }
            )
          }
        )
      ]
    }
  );
}
const gf = fs(/* @__PURE__ */ P("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
function bf(e) {
  return {
    preserveValue: !0,
    ...e
  };
}
const Nr = (e, t, n = {}) => {
  const r = br(t);
  r.current = t;
  const o = br(n);
  o.current = bf(o.current);
  const [i, a] = ut(() => r.current), [l, c] = ut(!0);
  return Bn(() => {
    let u = !0;
    return c(!!e), (async () => {
      if (e) {
        const d = await e();
        u && (a(() => d), c(!1));
      }
    })(), () => {
      u = !1, o.current.preserveValue || a(() => r.current);
    };
  }, [e]), [i, l];
};
function vf({
  menuProvider: e,
  normalMenu: t,
  fullMenu: n,
  commandHandler: r,
  containerRef: o,
  className: i,
  ariaLabelPrefix: a,
  children: l
}) {
  const [c, u] = ut(!1), [d, f] = ut(!1), p = et(() => {
    c && u(!1), f(!1);
  }, [c]), b = et((x) => {
    x.stopPropagation(), u((h) => {
      const k = !h;
      return k && x.shiftKey ? f(!0) : k || f(!1), k;
    });
  }, []), v = et(
    (x) => (p(), r(x)),
    [r, p]
  ), [g, m] = ut({ top: 1, left: 1 });
  Bn(() => {
    if (c) {
      const x = o == null ? void 0 : o.current;
      if (x) {
        const h = x.getBoundingClientRect(), k = window.scrollY, S = window.scrollX, A = h.top + k + x.clientHeight, I = h.left + S;
        m({ top: A, left: I });
      }
    }
  }, [c, o]);
  const [E] = Nr(
    et(async () => (e == null ? void 0 : e(!1)) ?? t, [e, t, c]),
    t
  ), [$] = Nr(
    et(async () => (e == null ? void 0 : e(!0)) ?? n ?? E, [e, n, E, c]),
    n ?? E
  ), y = d && $ ? $ : E;
  return /* @__PURE__ */ ye(jn, { children: [
    /* @__PURE__ */ P(
      xi,
      {
        sx: {
          paddingTop: 0,
          paddingBottom: 0
        },
        edge: "start",
        className: `papi-menuButton ${i ?? ""}`,
        color: "inherit",
        "aria-label": `${a ?? ""} menu button`,
        onClick: b,
        children: l ?? /* @__PURE__ */ P(gf, {})
      }
    ),
    /* @__PURE__ */ P(
      ta,
      {
        className: `papi-menu-drawer ${i ?? ""}`,
        anchor: "left",
        variant: "temporary",
        open: c,
        onClose: p,
        PaperProps: {
          className: "papi-menu-drawer-paper",
          style: {
            top: g.top,
            left: g.left
          }
        },
        children: y ? /* @__PURE__ */ P(
          Op,
          {
            className: i,
            id: `${a ?? ""} main menu`,
            commandHandler: v,
            multiColumnMenu: y
          }
        ) : void 0
      }
    )
  ] });
}
function Uf({
  id: e,
  label: t,
  isDisabled: n = !1,
  tooltip: r,
  isTooltipSuppressed: o = !1,
  adjustMarginToAlignToEdge: i = !1,
  size: a = "medium",
  className: l,
  onClick: c,
  children: u
}) {
  return /* @__PURE__ */ P(
    xi,
    {
      id: e,
      disabled: n,
      edge: i,
      size: a,
      "aria-label": t,
      title: o ? void 0 : r ?? t,
      className: `papi-icon-button ${l ?? ""}`,
      onClick: c,
      children: u
    }
  );
}
var yf = Object.defineProperty, xf = (e, t, n) => t in e ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, te = (e, t, n) => (xf(e, typeof t != "symbol" ? t + "" : t, n), n);
const gt = [
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
], Zr = [
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
], Cs = [
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
], hi = Nf();
function Bt(e, t = !0) {
  return t && (e = e.toUpperCase()), e in hi ? hi[e] : 0;
}
function Qr(e) {
  return Bt(e) > 0;
}
function Ef(e) {
  const t = typeof e == "string" ? Bt(e) : e;
  return t >= 40 && t <= 66;
}
function wf(e) {
  return (typeof e == "string" ? Bt(e) : e) <= 39;
}
function Rs(e) {
  return e <= 66;
}
function Tf(e) {
  const t = typeof e == "string" ? Bt(e) : e;
  return Ms(t) && !Rs(t);
}
function* Of() {
  for (let e = 1; e <= gt.length; e++)
    yield e;
}
const kf = 1, Ns = gt.length;
function Sf() {
  return ["XXA", "XXB", "XXC", "XXD", "XXE", "XXF", "XXG"];
}
function eo(e, t = "***") {
  const n = e - 1;
  return n < 0 || n >= gt.length ? t : gt[n];
}
function $s(e) {
  return e <= 0 || e > Ns ? "******" : Cs[e - 1];
}
function Pf(e) {
  return $s(Bt(e));
}
function Ms(e) {
  const t = typeof e == "number" ? eo(e) : e;
  return Qr(t) && !Zr.includes(t);
}
function Cf(e) {
  const t = typeof e == "number" ? eo(e) : e;
  return Qr(t) && Zr.includes(t);
}
function Rf(e) {
  return Cs[e - 1].includes("*obsolete*");
}
function Nf() {
  const e = {};
  for (let t = 0; t < gt.length; t++)
    e[gt[t]] = t + 1;
  return e;
}
const Be = {
  allBookIds: gt,
  nonCanonicalIds: Zr,
  bookIdToNumber: Bt,
  isBookIdValid: Qr,
  isBookNT: Ef,
  isBookOT: wf,
  isBookOTNT: Rs,
  isBookDC: Tf,
  allBookNumbers: Of,
  firstBook: kf,
  lastBook: Ns,
  extraBooks: Sf,
  bookNumberToId: eo,
  bookNumberToEnglishName: $s,
  bookIdToEnglishName: Pf,
  isCanonical: Ms,
  isExtraMaterial: Cf,
  isObsolete: Rf
};
var Qe = /* @__PURE__ */ ((e) => (e[e.Unknown = 0] = "Unknown", e[e.Original = 1] = "Original", e[e.Septuagint = 2] = "Septuagint", e[e.Vulgate = 3] = "Vulgate", e[e.English = 4] = "English", e[e.RussianProtestant = 5] = "RussianProtestant", e[e.RussianOrthodox = 6] = "RussianOrthodox", e))(Qe || {});
const Ce = class {
  // private versInfo: Versification;
  constructor(t) {
    if (te(this, "name"), te(this, "fullPath"), te(this, "isPresent"), te(this, "hasVerseSegments"), te(this, "isCustomized"), te(this, "baseVersification"), te(this, "scriptureBooks"), te(this, "_type"), t != null)
      typeof t == "string" ? this.name = t : this._type = t;
    else
      throw new Error("Argument null");
  }
  get type() {
    return this._type;
  }
  equals(t) {
    return !t.type || !this.type ? !1 : t.type === this.type;
  }
};
te(Ce, "Original", new Ce(Qe.Original)), te(Ce, "Septuagint", new Ce(Qe.Septuagint)), te(Ce, "Vulgate", new Ce(Qe.Vulgate)), te(Ce, "English", new Ce(Qe.English)), te(Ce, "RussianProtestant", new Ce(Qe.RussianProtestant)), te(Ce, "RussianOrthodox", new Ce(Qe.RussianOrthodox));
let Pt = Ce;
function mi(e, t) {
  const n = t[0];
  for (let r = 1; r < t.length; r++)
    e = e.split(t[r]).join(n);
  return e.split(n);
}
var _s = /* @__PURE__ */ ((e) => (e[e.Valid = 0] = "Valid", e[e.UnknownVersification = 1] = "UnknownVersification", e[e.OutOfRange = 2] = "OutOfRange", e[e.VerseOutOfOrder = 3] = "VerseOutOfOrder", e[e.VerseRepeated = 4] = "VerseRepeated", e))(_s || {});
const Te = class oe {
  constructor(t, n, r, o) {
    if (te(this, "firstChapter"), te(this, "lastChapter"), te(this, "lastVerse"), te(this, "hasSegmentsDefined"), te(this, "text"), te(this, "BBBCCCVVVS"), te(this, "longHashCode"), te(this, "versification"), te(this, "rtlMark", "‏"), te(this, "_bookNum", 0), te(this, "_chapterNum", 0), te(this, "_verseNum", 0), te(this, "_verse"), r == null && o == null)
      if (t != null && typeof t == "string") {
        const i = t, a = n != null && n instanceof Pt ? n : void 0;
        this.setEmpty(a), this.parse(i);
      } else if (t != null && typeof t == "number") {
        const i = n != null && n instanceof Pt ? n : void 0;
        this.setEmpty(i), this._verseNum = t % oe.chapterDigitShifter, this._chapterNum = Math.floor(
          t % oe.bookDigitShifter / oe.chapterDigitShifter
        ), this._bookNum = Math.floor(t / oe.bookDigitShifter);
      } else if (n == null)
        if (t != null && t instanceof oe) {
          const i = t;
          this._bookNum = i.bookNum, this._chapterNum = i.chapterNum, this._verseNum = i.verseNum, this._verse = i.verse, this.versification = i.versification;
        } else {
          if (t == null)
            return;
          const i = t instanceof Pt ? t : oe.defaultVersification;
          this.setEmpty(i);
        }
      else
        throw new Error("VerseRef constructor not supported.");
    else if (t != null && n != null && r != null)
      if (typeof t == "string" && typeof n == "string" && typeof r == "string")
        this.setEmpty(o), this.updateInternal(t, n, r);
      else if (typeof t == "number" && typeof n == "number" && typeof r == "number")
        this._bookNum = t, this._chapterNum = n, this._verseNum = r, this.versification = o ?? oe.defaultVersification;
      else
        throw new Error("VerseRef constructor not supported.");
    else
      throw new Error("VerseRef constructor not supported.");
  }
  /**
   * @deprecated Will be removed in v2. Replace `VerseRef.parse('...')` with `new VerseRef('...')`
   * or refactor to use `VerseRef.tryParse('...')` which has a different return type.
   */
  static parse(t, n = oe.defaultVersification) {
    const r = new oe(n);
    return r.parse(t), r;
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
    let n;
    try {
      return n = oe.parse(t), { success: !0, verseRef: n };
    } catch (r) {
      if (r instanceof Xt)
        return n = new oe(), { success: !1, verseRef: n };
      throw r;
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
  static getBBBCCCVVV(t, n, r) {
    return t % oe.bcvMaxValue * oe.bookDigitShifter + (n >= 0 ? n % oe.bcvMaxValue * oe.chapterDigitShifter : 0) + (r >= 0 ? r % oe.bcvMaxValue : 0);
  }
  /**
   * Parses a verse string and gets the leading numeric portion as a number.
   * @param verseStr - verse string to parse
   * @returns true if the entire string could be parsed as a single, simple verse number (1-999);
   *    false if the verse string represented a verse bridge, contained segment letters, or was invalid
   */
  static tryGetVerseNum(t) {
    let n;
    if (!t)
      return n = -1, { success: !0, vNum: n };
    n = 0;
    let r;
    for (let o = 0; o < t.length; o++) {
      if (r = t[o], r < "0" || r > "9")
        return o === 0 && (n = -1), { success: !1, vNum: n };
      if (n = n * 10 + +r - +"0", n > oe.bcvMaxValue)
        return n = -1, { success: !1, vNum: n };
    }
    return { success: !0, vNum: n };
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
    return this._verse != null && (this._verse.includes(oe.verseRangeSeparator) || this._verse.includes(oe.verseSequenceIndicator));
  }
  /**
   * Gets or sets the book of the reference. Book is the 3-letter abbreviation in capital letters,
   * e.g. `'MAT'`.
   */
  get book() {
    return Be.bookNumberToId(this.bookNum, "");
  }
  set book(t) {
    this.bookNum = Be.bookIdToNumber(t);
  }
  /**
   * Gets or sets the chapter of the reference,. e.g. `'3'`.
   */
  get chapter() {
    return this.isDefault || this._chapterNum < 0 ? "" : this._chapterNum.toString();
  }
  set chapter(t) {
    const n = +t;
    this._chapterNum = Number.isInteger(n) ? n : -1;
  }
  /**
   * Gets or sets the verse of the reference, including range, segments, and sequences, e.g. `'4'`,
   * or `'4b-5a, 7'`.
   */
  get verse() {
    return this._verse != null ? this._verse : this.isDefault || this._verseNum < 0 ? "" : this._verseNum.toString();
  }
  set verse(t) {
    const { success: n, vNum: r } = oe.tryGetVerseNum(t);
    this._verse = n ? void 0 : t.replace(this.rtlMark, ""), this._verseNum = r, !(this._verseNum >= 0) && ({ vNum: this._verseNum } = oe.tryGetVerseNum(this._verse));
  }
  /**
   * Get or set Book based on book number, e.g. `42`.
   */
  get bookNum() {
    return this._bookNum;
  }
  set bookNum(t) {
    if (t <= 0 || t > Be.lastBook)
      throw new Xt(
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
    this.versification = this.versification != null ? new Pt(t) : void 0;
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
    return this.validateVerse(oe.verseRangeSeparators, oe.verseSequenceIndicators);
  }
  /**
   * Gets the reference as a comparable integer where the book,
   * chapter, and verse each occupy three digits and the verse is 0.
   */
  get BBBCCC() {
    return oe.getBBBCCCVVV(this._bookNum, this._chapterNum, 0);
  }
  /**
   * Gets the reference as a comparable integer where the book,
   * chapter, and verse each occupy three digits. If verse is not null
   * (i.e., this reference represents a complex reference with verse
   * segments or bridge) this cannot be used for an exact comparison.
   */
  get BBBCCCVVV() {
    return oe.getBBBCCCVVV(this._bookNum, this._chapterNum, this._verseNum);
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
          const a = +i[1].trim();
          this.versification = new Pt(Qe[a]);
        } catch {
          throw new Xt("Invalid reference : " + t);
        }
    }
    const n = t.trim().split(" ");
    if (n.length !== 2)
      throw new Xt("Invalid reference : " + t);
    const r = n[1].split(":"), o = +r[0];
    if (r.length !== 2 || Be.bookIdToNumber(n[0]) === 0 || !Number.isInteger(o) || o < 0 || !oe.isVerseParseable(r[1]))
      throw new Xt("Invalid reference : " + t);
    this.updateInternal(n[0], r[0], r[1]);
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
    return new oe(this);
  }
  toString() {
    const t = this.book;
    return t === "" ? "" : `${t} ${this.chapter}:${this.verse}`;
  }
  /**
   * Compares this `VerseRef` with supplied one.
   * @param verseRef - object to compare this one to.
   * @returns `true` if this `VerseRef` is equal to the supplied on, `false` otherwise.
   */
  equals(t) {
    return t instanceof oe ? t._bookNum === this._bookNum && t._chapterNum === this._chapterNum && t._verseNum === this._verseNum && t.verse === this.verse && t.versification != null && this.versification != null && t.versification.equals(this.versification) : !1;
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
  allVerses(t = !1, n = oe.verseRangeSeparators, r = oe.verseSequenceIndicators) {
    if (this._verse == null || this.chapterNum <= 0)
      return [this.clone()];
    const o = [], i = mi(this._verse, r);
    for (const a of i.map((l) => mi(l, n))) {
      const l = this.clone();
      l.verse = a[0];
      const c = l.verseNum;
      if (o.push(l), a.length > 1) {
        const u = this.clone();
        if (u.verse = a[1], !t)
          for (let d = c + 1; d < u.verseNum; d++) {
            const f = new oe(
              this._bookNum,
              this._chapterNum,
              d,
              this.versification
            );
            this.isExcluded || o.push(f);
          }
        o.push(u);
      }
    }
    return o;
  }
  /**
   * Validates a verse number using the supplied separators rather than the defaults.
   */
  validateVerse(t, n) {
    if (!this.verse)
      return this.internalValid;
    let r = 0;
    for (const o of this.allVerses(!0, t, n)) {
      const i = o.internalValid;
      if (i !== 0)
        return i;
      const a = o.BBBCCCVVV;
      if (r > a)
        return 3;
      if (r === a)
        return 4;
      r = a;
    }
    return 0;
  }
  /**
   * Gets whether a single verse reference is valid.
   */
  get internalValid() {
    return this.versification == null ? 1 : this._bookNum <= 0 || this._bookNum > Be.lastBook ? 2 : (Be.isCanonical(this._bookNum), 0);
  }
  setEmpty(t = oe.defaultVersification) {
    this._bookNum = 0, this._chapterNum = -1, this._verse = void 0, this.versification = t;
  }
  updateInternal(t, n, r) {
    this.bookNum = Be.bookIdToNumber(t), this.chapter = n, this.verse = r;
  }
};
te(Te, "defaultVersification", Pt.English), te(Te, "verseRangeSeparator", "-"), te(Te, "verseSequenceIndicator", ","), te(Te, "verseRangeSeparators", [Te.verseRangeSeparator]), te(Te, "verseSequenceIndicators", [Te.verseSequenceIndicator]), te(Te, "chapterDigitShifter", 1e3), te(Te, "bookDigitShifter", Te.chapterDigitShifter * Te.chapterDigitShifter), te(Te, "bcvMaxValue", Te.chapterDigitShifter - 1), /**
* The valid status of the VerseRef.
*/
te(Te, "ValidStatusType", _s);
class Xt extends Error {
}
function Dn({
  variant: e = "outlined",
  id: t,
  isDisabled: n = !1,
  hasError: r = !1,
  isFullWidth: o = !1,
  helperText: i,
  label: a,
  placeholder: l,
  isRequired: c = !1,
  className: u,
  defaultValue: d,
  value: f,
  onChange: p,
  onFocus: b,
  onBlur: v
}) {
  return /* @__PURE__ */ P(
    bi,
    {
      variant: e,
      id: t,
      disabled: n,
      error: r,
      fullWidth: o,
      helperText: i,
      label: a,
      placeholder: l,
      required: c,
      className: `papi-textfield ${u ?? ""}`,
      defaultValue: d,
      value: f,
      onChange: p,
      onFocus: b,
      onBlur: v
    }
  );
}
let hr;
const mr = () => (hr || (hr = Be.allBookIds.map((e) => ({
  bookId: e,
  label: Be.bookIdToEnglishName(e)
}))), hr);
function Wf({ scrRef: e, handleSubmit: t, id: n }) {
  const r = (c) => {
    t(c);
  }, o = (c, u) => {
    const f = { bookNum: Be.bookIdToNumber(u.bookId), chapterNum: 1, verseNum: 1 };
    r(f);
  }, i = (c) => {
    t({ ...e, chapterNum: +c.target.value });
  }, a = (c) => {
    t({ ...e, verseNum: +c.target.value });
  }, l = Dt(() => mr()[e.bookNum - 1], [e.bookNum]);
  return /* @__PURE__ */ ye("span", { id: n, children: [
    /* @__PURE__ */ P(
      vr,
      {
        title: "Book",
        className: "papi-ref-selector book",
        value: l,
        options: mr(),
        onChange: o,
        isClearable: !1,
        width: 200
      }
    ),
    /* @__PURE__ */ P(
      vt,
      {
        onClick: () => r(bo(e, -1)),
        isDisabled: e.bookNum <= pa,
        children: "<"
      }
    ),
    /* @__PURE__ */ P(
      vt,
      {
        onClick: () => r(bo(e, 1)),
        isDisabled: e.bookNum >= mr().length,
        children: ">"
      }
    ),
    /* @__PURE__ */ P(
      Dn,
      {
        className: "papi-ref-selector chapter-verse",
        label: "Chapter",
        value: e.chapterNum,
        onChange: i
      }
    ),
    /* @__PURE__ */ P(
      vt,
      {
        onClick: () => t(vo(e, -1)),
        isDisabled: e.chapterNum <= fa,
        children: "<"
      }
    ),
    /* @__PURE__ */ P(
      vt,
      {
        onClick: () => t(vo(e, 1)),
        isDisabled: e.chapterNum >= ha(e.bookNum),
        children: ">"
      }
    ),
    /* @__PURE__ */ P(
      Dn,
      {
        className: "papi-ref-selector chapter-verse",
        label: "Verse",
        value: e.verseNum,
        onChange: a
      }
    ),
    /* @__PURE__ */ P(
      vt,
      {
        onClick: () => t(yo(e, -1)),
        isDisabled: e.verseNum <= ma,
        children: "<"
      }
    ),
    /* @__PURE__ */ P(vt, { onClick: () => t(yo(e, 1)), children: ">" })
  ] });
}
function qf({ onSearch: e, placeholder: t, isFullWidth: n }) {
  const [r, o] = ut(""), i = (a) => {
    o(a), e(a);
  };
  return /* @__PURE__ */ P(na, { component: "form", className: "search-bar-paper", children: /* @__PURE__ */ P(
    Dn,
    {
      isFullWidth: n,
      className: "search-bar-input",
      placeholder: t,
      value: r,
      onChange: (a) => i(a.target.value)
    }
  ) });
}
function Gf({
  id: e,
  isDisabled: t = !1,
  orientation: n = "horizontal",
  min: r = 0,
  max: o = 100,
  step: i = 1,
  showMarks: a = !1,
  defaultValue: l,
  value: c,
  valueLabelDisplay: u = "off",
  className: d,
  onChange: f,
  onChangeCommitted: p
}) {
  return /* @__PURE__ */ P(
    ra,
    {
      id: e,
      disabled: t,
      orientation: n,
      min: r,
      max: o,
      step: i,
      marks: a,
      defaultValue: l,
      value: c,
      valueLabelDisplay: u,
      className: `papi-slider ${n} ${d ?? ""}`,
      onChange: f,
      onChangeCommitted: p
    }
  );
}
function Xf({
  autoHideDuration: e = void 0,
  id: t,
  isOpen: n = !1,
  className: r,
  onClose: o,
  anchorOrigin: i = { vertical: "bottom", horizontal: "left" },
  ContentProps: a,
  children: l
}) {
  const c = {
    action: (a == null ? void 0 : a.action) || l,
    message: a == null ? void 0 : a.message,
    className: r
  };
  return /* @__PURE__ */ P(
    oa,
    {
      autoHideDuration: e ?? void 0,
      open: n,
      onClose: o,
      anchorOrigin: i,
      id: t,
      ContentProps: c
    }
  );
}
function Kf({
  id: e,
  isChecked: t,
  isDisabled: n = !1,
  hasError: r = !1,
  className: o,
  onChange: i
}) {
  return /* @__PURE__ */ P(
    ia,
    {
      id: e,
      checked: t,
      disabled: n,
      className: `papi-switch ${r ? "error" : ""} ${o ?? ""}`,
      onChange: i
    }
  );
}
function gi({ onRowChange: e, row: t, column: n }) {
  const r = (o) => {
    e({ ...t, [n.key]: o.target.value });
  };
  return /* @__PURE__ */ P(Dn, { defaultValue: t[n.key], onChange: r });
}
const $f = ({ onChange: e, disabled: t, checked: n, ...r }) => /* @__PURE__ */ P(
  va,
  {
    ...r,
    isChecked: n,
    isDisabled: t,
    onChange: (i) => {
      e(i.target.checked, i.nativeEvent.shiftKey);
    }
  }
);
function Yf({
  columns: e,
  sortColumns: t,
  onSortColumnsChange: n,
  onColumnResize: r,
  defaultColumnWidth: o,
  defaultColumnMinWidth: i,
  defaultColumnMaxWidth: a,
  defaultColumnSortable: l = !0,
  defaultColumnResizable: c = !0,
  rows: u,
  enableSelectColumn: d,
  selectColumnWidth: f = 50,
  rowKeyGetter: p,
  rowHeight: b = 35,
  headerRowHeight: v = 35,
  selectedRows: g,
  onSelectedRowsChange: m,
  onRowsChange: E,
  onCellClick: $,
  onCellDoubleClick: y,
  onCellContextMenu: x,
  onCellKeyDown: h,
  direction: k = "ltr",
  enableVirtualization: S = !0,
  onCopy: A,
  onPaste: I,
  onScroll: D,
  className: B,
  "data-testid": z
}) {
  const G = Dt(() => {
    const L = e.map((_) => typeof _.editable == "function" ? {
      ..._,
      editable: (j) => !!_.editable(j),
      renderEditCell: _.renderEditCell || gi
    } : _.editable && !_.renderEditCell ? { ..._, renderEditCell: gi } : _.renderEditCell && !_.editable ? { ..._, editable: !1 } : _);
    return d ? [{ ...ba, minWidth: f }, ...L] : L;
  }, [e, d, f]);
  return /* @__PURE__ */ P(
    ga,
    {
      columns: G,
      defaultColumnOptions: {
        width: o,
        minWidth: i,
        maxWidth: a,
        sortable: l,
        resizable: c
      },
      sortColumns: t,
      onSortColumnsChange: n,
      onColumnResize: r,
      rows: u,
      rowKeyGetter: p,
      rowHeight: b,
      headerRowHeight: v,
      selectedRows: g,
      onSelectedRowsChange: m,
      onRowsChange: E,
      onCellClick: $,
      onCellDoubleClick: y,
      onCellContextMenu: x,
      onCellKeyDown: h,
      direction: k,
      enableVirtualization: S,
      onCopy: A,
      onPaste: I,
      onScroll: D,
      renderers: { renderCheckbox: $f },
      className: `papi-table ${B ?? "rdg-light"}`,
      "data-testid": z
    }
  );
}
function Jf({
  menuProvider: e,
  commandHandler: t,
  className: n,
  id: r,
  children: o
}) {
  const i = br(void 0);
  return /* @__PURE__ */ P("div", { ref: i, style: { position: "relative" }, children: /* @__PURE__ */ P(sa, { position: "static", id: r, children: /* @__PURE__ */ ye(aa, { className: `papi-toolbar ${n ?? ""}`, variant: "dense", children: [
    e ? /* @__PURE__ */ P(
      vf,
      {
        commandHandler: t,
        containerRef: i,
        menuProvider: e
      }
    ) : void 0,
    o ? /* @__PURE__ */ P("div", { className: "papi-toolbar-children", children: o }) : void 0
  ] }) }) });
}
const Zf = (e, t) => {
  Bn(() => {
    if (!e)
      return () => {
      };
    const n = e(t);
    return () => {
      n();
    };
  }, [e, t]);
}, gr = () => !1, Qf = (e, t) => {
  const [n] = Nr(
    et(async () => {
      if (!e)
        return gr;
      const r = await Promise.resolve(e(t));
      return async () => r();
    }, [t, e]),
    gr,
    // We want the unsubscriber to return to default value immediately upon changing subscription
    // So the useEffect below will unsubscribe asap
    { preserveValue: !1 }
  );
  Bn(() => () => {
    n !== gr && n();
  }, [n]);
};
function Mf(e, t = "top") {
  if (!e || typeof document > "u")
    return;
  const n = document.head || document.querySelector("head"), r = n.querySelector(":first-child"), o = document.createElement("style");
  o.appendChild(document.createTextNode(e)), t === "top" && r ? n.insertBefore(o, r) : n.appendChild(o);
}
Mf(`.papi-button {
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
.papi-context-menu-target {
  white-space: nowrap;
  cursor: context-menu;
}

.papi-context-menu-target * {
  white-space: normal;
}

.papi-context-menu-target:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07); /* Faint shadowy background */
}

.papi-context-menu-target.paratext:hover {
  box-shadow: 0 0 10px rgba(0, 100, 0, 0.07); /* Faint shadowy background */
}

.papi-context-menu-target.paratext.bright:hover {
  box-shadow: 0 0 10px rgba(173, 255, 47, 0.07); /* Faint shadowy background */
}

.papi-context-menu.paratext ul {
  background-color: rgb(76, 106, 76);
  color: rgb(214, 255, 152);
}

.papi-context-menu.paratext.bright ul {
  color: rgb(76, 106, 76);
  background-color: rgb(214, 255, 152);
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
.search-bar-paper {
  display: flex;
  align-items: center;
}

.search-button {
  padding: 10px;
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
.papi-ref-selector.book {
  display: inline-block;
  vertical-align: middle;
}

.papi-ref-selector.chapter-verse {
  width: 75px;
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

.papi-toolbar-children {
  padding: 10px;
  position: relative;
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
.papi-table.paratext {
  background-color: darkgreen;
  color: greenyellow;
}

.papi-table.paratext.bright {
  color: darkgreen;
  background-color: greenyellow;
}
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

/*
Remove the default font size and weight for headings.
*/

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

/*
Add the correct font weight in Edge and Safari.
*/

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

/*
Add the correct font size in all browsers.
*/

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

/*
Use the modern Firefox focus style for all focusable elements.
*/

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

/*
Add the correct display in Chrome and Safari.
*/

/*
Removes the default spacing and border for appropriate elements.
*/

/*
Reset default styling for dialogs.
*/

/*
Prevent resizing textareas horizontally by default.
*/

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

/*
Set the default cursor for buttons.
*/

/*
Make sure disabled buttons don't get the pointer cursor.
*/

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

/* Make elements with the HTML hidden attribute stay hidden by default */
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
  * {
    border-color: hsl(var(--border));
}
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
}
*, ::before, ::after {
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
}

.mlln6zg7-0-0-beta-42 {
  @layer rdg.MeasuringCell {
    contain: strict;
    grid-row: 1;
    visibility: hidden;
  }
}


.cj343x07-0-0-beta-42 {
  @layer rdg.Cell {
    /* max-content does not work with size containment
     * dynamically switching between different containment styles incurs a heavy relayout penalty
     * Chromium bug: at odd zoom levels or subpixel positioning,
     * layout/paint/style containment can make cell borders disappear
     *   https://bugs.chromium.org/p/chromium/issues/detail?id=1326946
     */
    position: relative; /* needed for absolute positioning to work */
    padding-block: 0;
    padding-inline: 8px;
    border-inline-end: 1px solid var(--rdg-border-color);
    border-block-end: 1px solid var(--rdg-border-color);
    grid-row-start: var(--rdg-grid-row-start);
    background-color: inherit;

    white-space: nowrap;
    overflow: clip;
    text-overflow: ellipsis;
    outline: none;

    &[aria-selected='true'] {
      outline: 2px solid var(--rdg-selection-color);
      outline-offset: -2px;
    }
  }
}

.csofj7r7-0-0-beta-42 {
  @layer rdg.Cell {
    position: sticky;
    /* Should have a higher value than 0 to show up above unfrozen cells */
    z-index: 1;
  }
}

.ch2wcw87-0-0-beta-42 {
  @layer rdg.Cell {
    box-shadow: calc(2px * var(--rdg-sign)) 0 5px -2px rgba(136, 136, 136, 0.3);
  }
}


.c1bn88vv7-0-0-beta-42 {
  @layer rdg.CheckboxLabel {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    margin-inline-end: 1px; /* align checkbox in row group cell */
  }
}

.c1qt073l7-0-0-beta-42 {
  @layer rdg.CheckboxInput {
    all: unset;
  }
}

.cf71kmq7-0-0-beta-42 {
  @layer rdg.CheckboxIcon {
    content: '';
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--rdg-border-color);
    background-color: var(--rdg-background-color);

    .c1qt073l7-0-0-beta-42:checked + & {
      background-color: var(--rdg-checkbox-color);
      outline: 4px solid var(--rdg-background-color);
      outline-offset: -6px;
    }

    .c1qt073l7-0-0-beta-42:focus + & {
      border-color: var(--rdg-checkbox-focus-color);
    }
  }
}

.c1lwve4p7-0-0-beta-42 {
  @layer rdg.CheckboxLabel {
    cursor: default;

    .cf71kmq7-0-0-beta-42 {
      border-color: var(--rdg-checkbox-disabled-border-color);
      background-color: var(--rdg-checkbox-disabled-background-color);
    }
  }
}


.g1s9ylgp7-0-0-beta-42 {
  @layer rdg.GroupCellContent {
    outline: none;
  }
}

.cz54e4y7-0-0-beta-42 {
  @layer rdg.GroupCellCaret {
    margin-inline-start: 4px;
    stroke: currentColor;
    stroke-width: 1.5px;
    fill: transparent;
    vertical-align: middle;

    > path {
      transition: d 0.1s;
    }
  }
}


.c1w9bbhr7-0-0-beta-42 {
  @layer rdg.DragHandle {
    --rdg-drag-handle-size: 8px;
    z-index: 0;
    cursor: move;
    inline-size: var(--rdg-drag-handle-size);
    block-size: var(--rdg-drag-handle-size);
    background-color: var(--rdg-selection-color);
    place-self: end;

    &:hover {
      --rdg-drag-handle-size: 16px;
      border: 2px solid var(--rdg-selection-color);
      background-color: var(--rdg-background-color);
    }
  }
}

.c1creorc7-0-0-beta-42 {
  @layer rdg.DragHandle {
    z-index: 1;
    position: sticky;
  }
}


.cis5rrm7-0-0-beta-42 {
  @layer rdg.EditCell {
    padding: 0;
  }
}


.h44jtk67-0-0-beta-42 {
  @layer rdg.SortableHeaderCell {
    display: flex;
  }
}

.hcgkhxz7-0-0-beta-42 {
  @layer rdg.SortableHeaderCellName {
    flex-grow: 1;
    overflow: clip;
    text-overflow: ellipsis;
  }
}


.c6l2wv17-0-0-beta-42 {
  @layer rdg.HeaderCell {
    cursor: pointer;
  }
}

.c1kqdw7y7-0-0-beta-42 {
  @layer rdg.HeaderCell {
    touch-action: none;
  }
}

.r1y6ywlx7-0-0-beta-42 {
  @layer rdg.HeaderCell {
    cursor: col-resize;
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: 10px;
  }
}

.c1bezg5o7-0-0-beta-42 {
  opacity: 0.5;
}

.c1vc96037-0-0-beta-42 {
  background-color: var(--rdg-header-draggable-background-color);
}


.r1upfr807-0-0-beta-42 {
  @layer rdg.Row {
    display: contents;
    line-height: var(--rdg-row-height);
    background-color: var(--rdg-background-color);

    &:hover {
      background-color: var(--rdg-row-hover-background-color);
    }

    &[aria-selected='true'] {
      background-color: var(--rdg-row-selected-background-color);

      &:hover {
        background-color: var(--rdg-row-selected-hover-background-color);
      }
    }
  }
}

.r190mhd37-0-0-beta-42 {
  @layer rdg.FocusSink {
    outline: 2px solid var(--rdg-selection-color);
    outline-offset: -2px;
  }
}

.r139qu9m7-0-0-beta-42 {
  @layer rdg.FocusSink {
    &::before {
      content: '';
      display: inline-block;
      height: 100%;
      position: sticky;
      inset-inline-start: 0;
      border-inline-start: 2px solid var(--rdg-selection-color);
    }
  }
}


.h10tskcx7-0-0-beta-42 {
  @layer rdg.HeaderRow {
    display: contents;
    line-height: var(--rdg-header-row-height);
    background-color: var(--rdg-header-background-color);
    font-weight: bold;

    & > .cj343x07-0-0-beta-42 {
      /* Should have a higher value than 1 to show up above regular cells and the focus sink */
      z-index: 2;
      position: sticky;
    }

    & > .csofj7r7-0-0-beta-42 {
      z-index: 3;
    }
  }
}


.c6ra8a37-0-0-beta-42 {
  @layer rdg.Cell {
    background-color: #ccccff;
  }
}

.cq910m07-0-0-beta-42 {
  @layer rdg.Cell {
    background-color: #ccccff;

    &.c6ra8a37-0-0-beta-42 {
      background-color: #9999ff;
    }
  }
}


.a3ejtar7-0-0-beta-42 {
  @layer rdg.SortIcon {
    fill: currentColor;

    > path {
      transition: d 0.1s;
    }
  }
}


.rnvodz57-0-0-beta-42 {
  @layer rdg.Defaults {
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  @layer rdg.Root {
    --rdg-color: #000;   --rdg-border-color: #ddd;   --rdg-summary-border-color: #aaa;   --rdg-background-color: hsl(0deg 0% 100%);   --rdg-header-background-color: hsl(0deg 0% 97.5%);   --rdg-header-draggable-background-color: hsl(0deg 0% 90.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 96%);   --rdg-row-selected-background-color: hsl(207deg 76% 92%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 88%);   --rdg-checkbox-color: hsl(207deg 100% 29%);   --rdg-checkbox-focus-color: hsl(207deg 100% 69%);   --rdg-checkbox-disabled-border-color: #ccc;   --rdg-checkbox-disabled-background-color: #ddd;
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
    font-size: var(--rdg-font-size);

    /* needed on Firefox to fix scrollbars */
    &::before {
      content: '';
      grid-column: 1/-1;
      grid-row: 1/-1;
    }

    &.rdg-dark {
      --rdg-color-scheme: dark;
      --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-header-draggable-background-color: hsl(0deg 0% 17.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
    }

    &.rdg-light {
      --rdg-color-scheme: light;
    }

    @media (prefers-color-scheme: dark) {
      &:not(.rdg-light) {
        --rdg-color: #ddd;   --rdg-border-color: #444;   --rdg-summary-border-color: #555;   --rdg-background-color: hsl(0deg 0% 13%);   --rdg-header-background-color: hsl(0deg 0% 10.5%);   --rdg-header-draggable-background-color: hsl(0deg 0% 17.5%);   --rdg-row-hover-background-color: hsl(0deg 0% 9%);   --rdg-row-selected-background-color: hsl(207deg 76% 42%);   --rdg-row-selected-hover-background-color: hsl(207deg 76% 38%);   --rdg-checkbox-color: hsl(207deg 100% 79%);   --rdg-checkbox-focus-color: hsl(207deg 100% 89%);   --rdg-checkbox-disabled-border-color: #000;   --rdg-checkbox-disabled-background-color: #333;
      }
    }
  }
}

.vlqv91k7-0-0-beta-42 {
  @layer rdg.Root {
    user-select: none;

    & .r1upfr807-0-0-beta-42 {
      cursor: move;
    }
  }
}

.f1lsfrzw7-0-0-beta-42 {
  @layer rdg.FocusSink {
    grid-column: 1/-1;
    pointer-events: none;
    /* Should have a higher value than 1 to show up above regular frozen cells */
    z-index: 1;
  }
}

.f1cte0lg7-0-0-beta-42 {
  @layer rdg.FocusSink {
    /* Should have a higher value than 3 to show up above header and summary rows */
    z-index: 3;
  }
}


.s8wc6fl7-0-0-beta-42 {
  @layer rdg.SummaryCell {
    inset-block-start: var(--rdg-summary-row-top);
    inset-block-end: var(--rdg-summary-row-bottom);
  }
}


.skuhp557-0-0-beta-42 {
  @layer rdg.SummaryRow {
    line-height: var(--rdg-summary-row-height);

    > .cj343x07-0-0-beta-42 {
      position: sticky;
    }
  }
}

.tf8l5ub7-0-0-beta-42 {
  @layer rdg.SummaryRow {
    > .cj343x07-0-0-beta-42 {
      z-index: 2;
    }

    > .csofj7r7-0-0-beta-42 {
      z-index: 3;
    }
  }
}

.tb9ughf7-0-0-beta-42 {
  @layer rdg.SummaryRow {
    > .cj343x07-0-0-beta-42 {
      border-block-end: 2px solid var(--rdg-summary-border-color);
    }
  }
}

.b1yssfnt7-0-0-beta-42 {
  @layer rdg.SummaryRow {
    > .cj343x07-0-0-beta-42 {
      border-block-start: 2px solid var(--rdg-summary-border-color);
    }
  }
}


.g1yxluv37-0-0-beta-42 {
  @layer rdg.GroupedRow {
    &:not([aria-selected='true']) {
      background-color: var(--rdg-header-background-color);
    }

    > .cj343x07-0-0-beta-42:not(:last-child):not(.ch2wcw87-0-0-beta-42) {
      border-inline-end: none;
    }
  }
}


.t7vyx3i7-0-0-beta-42 {
  @layer rdg.TextEditor {
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
    font-size: var(--rdg-font-size);

    &:focus {
      border-color: var(--rdg-selection-color);
      outline: none;
    }

    &::placeholder {
      color: #999;
      opacity: 1;
    }
  }
}

`, "top");
export {
  vt as Button,
  Vf as ChapterRangeSelector,
  va as Checkbox,
  vr as ComboBox,
  zf as ContextMenu,
  Op as GridMenu,
  vf as HamburgerMenuButton,
  Uf as IconButton,
  kt as LabelPosition,
  ms as MenuItem,
  Wf as RefSelector,
  qf as SearchBar,
  Gf as Slider,
  Xf as Snackbar,
  Kf as Switch,
  Yf as Table,
  Dn as TextField,
  Jf as Toolbar,
  Zf as useEvent,
  Qf as useEventAsync,
  Nr as usePromise
};
//# sourceMappingURL=index.js.map
