"use strict";
var aa =
  "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a;
      };
function ba(a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }
  throw Error("Cannot find global object");
}
var ca = ba(this);
function da(a, b) {
  if (b)
    a: {
      var c = ca;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d &&
        null != b &&
        aa(c, a, { configurable: !0, writable: !0, value: b });
    }
}
function ea(a) {
  function b(d) {
    return a.next(d);
  }
  function c(d) {
    return a.throw(d);
  }
  return new Promise(function (d, e) {
    function f(g) {
      g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
    }
    f(a.next());
  });
}
function r(a) {
  return ea(a());
}
function fa(a, b) {
  a instanceof String && (a += "");
  var c = 0,
    d = !1,
    e = {
      next: function () {
        if (!d && c < a.length) {
          var f = c++;
          return { value: b(f, a[f]), done: !1 };
        }
        d = !0;
        return { done: !0, value: void 0 };
      },
    };
  e[Symbol.iterator] = function () {
    return e;
  };
  return e;
}
da("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return fa(this, function (b, c) {
          return c;
        });
      };
});
da("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c;
      };
});
da("Array.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }
        return !1;
      };
});
da("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b)
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c;
      };
});
da("String.prototype.matchAll", function (a) {
  return a
    ? a
    : function (b) {
        if (b instanceof RegExp && !b.global)
          throw new TypeError(
            "RegExp passed into String.prototype.matchAll() must have global tag."
          );
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
          d = this,
          e = !1,
          f = {
            next: function () {
              if (e) return { value: void 0, done: !0 };
              var g = c.exec(d);
              if (!g) return (e = !0), { value: void 0, done: !0 };
              "" === g[0] && (c.lastIndex += 1);
              return { value: g, done: !1 };
            },
          };
        f[Symbol.iterator] = function () {
          return f;
        };
        return f;
      };
});
da("Promise.prototype.finally", function (a) {
  return a
    ? a
    : function (b) {
        return this.then(
          function (c) {
            return Promise.resolve(b()).then(function () {
              return c;
            });
          },
          function (c) {
            return Promise.resolve(b()).then(function () {
              throw c;
            });
          }
        );
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t = this || self;
function ha(a) {
  var b = v("CLOSURE_FLAGS");
  a = b && b[a];
  return null != a ? a : !1;
}
function v(a, b) {
  a = a.split(".");
  b = b || t;
  for (var c = 0; c < a.length; c++)
    if (((b = b[a[c]]), null == b)) return null;
  return b;
}
function ia(a) {
  var b = typeof a;
  b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function ja(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ka(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function () {
    return a.apply(b, arguments);
  };
}
function la(a, b, c) {
  la =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? ja
      : ka;
  return la.apply(null, arguments);
}
function w(a, b) {
  a = a.split(".");
  var c = t;
  a[0] in c ||
    "undefined" == typeof c.execScript ||
    c.execScript("var " + a[0]);
  for (var d; a.length && (d = a.shift()); )
    a.length || void 0 === b
      ? c[d] && c[d] !== Object.prototype[d]
        ? (c = c[d])
        : (c = c[d] = {})
      : (c[d] = b);
}
function ma(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.Ma = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Mb = function (d, e, f) {
    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
      g[h - 2] = arguments[h];
    return b.prototype[e].apply(d, g);
  };
}
function na(a) {
  return a;
}
function oa(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
  else {
    const c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
ma(oa, Error);
oa.prototype.name = "CustomError";
var pa = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
var qa;
function ra(a, b) {
  this.h = (a === sa && b) || "";
}
ra.prototype.toString = function () {
  return this.h;
};
function ta(a) {
  return new ra(sa, a);
}
var sa = {};
ta("");
var ua = class {
    constructor(a) {
      this.h = a;
    }
    toString() {
      return this.h + "";
    }
  },
  va = {};
function wa(a, b) {
  Array.prototype.forEach.call(a, b, void 0);
}
function xa(a, b) {
  return Array.prototype.map.call(a, b, void 0);
}
function ya(a, b) {
  b = Array.prototype.indexOf.call(a, b, void 0);
  0 <= b && Array.prototype.splice.call(a, b, 1);
}
function za(a, b) {
  for (let c = 1; c < arguments.length; c++) {
    const d = arguments[c];
    if (ia(d)) {
      const e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (let g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function Aa(a) {
  for (const b in a) return !1;
  return !0;
}
function Ba(a) {
  if (!a || "object" !== typeof a) return a;
  if ("function" === typeof a.clone) return a.clone();
  if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
  if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
  if (a instanceof Date) return new Date(a.getTime());
  const b = Array.isArray(a)
    ? []
    : "function" !== typeof ArrayBuffer ||
      "function" !== typeof ArrayBuffer.isView ||
      !ArrayBuffer.isView(a) ||
      a instanceof DataView
    ? {}
    : new a.constructor(a.length);
  for (const c in a) b[c] = Ba(a[c]);
  return b;
}
const Ca =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function Da(a, b) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (let f = 0; f < Ca.length; f++)
      (c = Ca[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ea(a, b = `unexpected value ${a}!`) {
  throw Error(b);
}
function Fa(a, b) {
  a.__closure__error__context__984382 ||
    (a.__closure__error__context__984382 = {});
  a.__closure__error__context__984382.severity = b;
}
function Ga(a) {
  var b = v("window.location.href");
  null == a && (a = 'Unknown Error of type "null/undefined"');
  if ("string" === typeof a)
    return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: b,
      stack: "Not available",
    };
  var c = !1;
  try {
    var d = a.lineNumber || a.line || "Not available";
  } catch (g) {
    (d = "Not available"), (c = !0);
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b;
  } catch (g) {
    (e = "Not available"), (c = !0);
  }
  b = Ha(a);
  if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
    c = a.message;
    if (null == c) {
      if (a.constructor && a.constructor instanceof Function) {
        if (a.constructor.name) c = a.constructor.name;
        else if (((c = a.constructor), Ia[c])) c = Ia[c];
        else {
          c = String(c);
          if (!Ia[c]) {
            var f = /function\s+([^\(]+)/m.exec(c);
            Ia[c] = f ? f[1] : "[Anonymous]";
          }
          c = Ia[c];
        }
        c = 'Unknown Error of type "' + c + '"';
      } else c = "Unknown Error of unknown type";
      "function" === typeof a.toString &&
        Object.prototype.toString !== a.toString &&
        (c += ": " + a.toString());
    }
    return {
      message: c,
      name: a.name || "UnknownError",
      lineNumber: d,
      fileName: e,
      stack: b || "Not available",
    };
  }
  return {
    message: a.message,
    name: a.name,
    lineNumber: a.lineNumber,
    fileName: a.fileName,
    stack: b,
  };
}
function Ha(a, b) {
  b || (b = {});
  b[Ja(a)] = !0;
  var c = a.stack || "";
  (a = a.cause) &&
    !b[Ja(a)] &&
    ((c += "\nCaused by: "),
    (a.stack && 0 == a.stack.indexOf(a.toString())) ||
      (c += "string" === typeof a ? a : a.message + "\n"),
    (c += Ha(a, b)));
  return c;
}
function Ja(a) {
  var b = "";
  "function" === typeof a.toString && (b = "" + a);
  return b + a.stack;
}
var Ia = {};
var Ka = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function La(a) {
  return a ? decodeURI(a) : a;
}
function Ma(a, b, c) {
  if (Array.isArray(b))
    for (var d = 0; d < b.length; d++) Ma(a, String(b[d]), c);
  else
    null != b &&
      c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
}
function Na(a) {
  var b = [],
    c;
  for (c in a) Ma(c, a[c], b);
  return b.join("&");
}
function Oa() {
  this.l = this.l;
  this.i = this.i;
}
Oa.prototype.l = !1;
Oa.prototype.dispose = function () {
  this.l || ((this.l = !0), this.m());
};
Oa.prototype.addOnDisposeCallback = function (a, b) {
  this.l
    ? void 0 !== b
      ? a.call(b)
      : a()
    : (this.i || (this.i = []), this.i.push(void 0 !== b ? la(a, b) : a));
};
Oa.prototype.m = function () {
  if (this.i) for (; this.i.length; ) this.i.shift()();
};
var Pa = ha(610401301),
  Qa = ha(188588736);
function Ra() {
  var a = t.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var Sa;
const Ta = t.navigator;
Sa = Ta ? Ta.userAgentData || null : null;
function Ua(a) {
  return Pa
    ? Sa
      ? Sa.brands.some(({ brand: b }) => b && -1 != b.indexOf(a))
      : !1
    : !1;
}
function x(a) {
  return -1 != Ra().indexOf(a);
}
function Va() {
  return Pa ? !!Sa && 0 < Sa.brands.length : !1;
}
function Wa() {
  return Va()
    ? Ua("Chromium")
    : ((x("Chrome") || x("CriOS")) && !(Va() ? 0 : x("Edge"))) || x("Silk");
}
var Xa = Va() ? !1 : x("Trident") || x("MSIE");
function Ya(a, b) {
  a.l(b);
  100 > a.i && (a.i++, (b.next = a.h), (a.h = b));
}
class Za {
  constructor(a, b) {
    this.j = a;
    this.l = b;
    this.i = 0;
    this.h = null;
  }
  get() {
    let a;
    0 < this.i
      ? (this.i--, (a = this.h), (this.h = a.next), (a.next = null))
      : (a = this.j());
    return a;
  }
}
function $a() {}
function ab(a) {
  t.setTimeout(() => {
    throw a;
  }, 0);
}
class bb {
  constructor() {
    this.i = this.h = null;
  }
  add(a, b) {
    const c = cb.get();
    c.set(a, b);
    this.i ? (this.i.next = c) : (this.h = c);
    this.i = c;
  }
  remove() {
    let a = null;
    this.h &&
      ((a = this.h),
      (this.h = this.h.next),
      this.h || (this.i = null),
      (a.next = null));
    return a;
  }
}
var cb = new Za(
  () => new db(),
  (a) => a.reset()
);
class db {
  constructor() {
    this.next = this.scope = this.h = null;
  }
  set(a, b) {
    this.h = a;
    this.scope = b;
    this.next = null;
  }
  reset() {
    this.next = this.scope = this.h = null;
  }
}
let eb,
  fb = !1,
  gb = new bb(),
  ib = (a, b) => {
    eb || hb();
    fb || (eb(), (fb = !0));
    gb.add(a, b);
  },
  hb = () => {
    const a = t.Promise.resolve(void 0);
    eb = () => {
      a.then(jb);
    };
  };
var jb = () => {
  let a;
  for (; (a = gb.remove()); ) {
    try {
      a.h.call(a.scope);
    } catch (b) {
      ab(b);
    }
    Ya(cb, a);
  }
  fb = !1;
};
function y(a) {
  this.h = 0;
  this.v = void 0;
  this.l = this.i = this.j = null;
  this.m = this.s = !1;
  if (a != $a)
    try {
      var b = this;
      a.call(
        void 0,
        function (c) {
          kb(b, 2, c);
        },
        function (c) {
          kb(b, 3, c);
        }
      );
    } catch (c) {
      kb(this, 3, c);
    }
}
function lb() {
  this.next = this.context = this.i = this.j = this.h = null;
  this.l = !1;
}
lb.prototype.reset = function () {
  this.context = this.i = this.j = this.h = null;
  this.l = !1;
};
var mb = new Za(
  function () {
    return new lb();
  },
  function (a) {
    a.reset();
  }
);
function nb(a, b, c) {
  var d = mb.get();
  d.j = a;
  d.i = b;
  d.context = c;
  return d;
}
function ob(a) {
  if (a instanceof y) return a;
  var b = new y($a);
  kb(b, 2, a);
  return b;
}
y.prototype.then = function (a, b, c) {
  return pb(
    this,
    "function" === typeof a ? a : null,
    "function" === typeof b ? b : null,
    c
  );
};
y.prototype.$goog_Thenable = !0;
y.prototype.F = function (a, b) {
  return pb(this, null, a, b);
};
y.prototype.catch = y.prototype.F;
y.prototype.cancel = function (a) {
  if (0 == this.h) {
    var b = new qb(a);
    ib(function () {
      rb(this, b);
    }, this);
  }
};
function rb(a, b) {
  if (0 == a.h)
    if (a.j) {
      var c = a.j;
      if (c.i) {
        for (
          var d = 0, e = null, f = null, g = c.i;
          g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d)));
          g = g.next
        )
          e || (f = g);
        e &&
          (0 == c.h && 1 == d
            ? rb(c, b)
            : (f
                ? ((d = f), d.next == c.l && (c.l = d), (d.next = d.next.next))
                : sb(c),
              tb(c, e, 3, b)));
      }
      a.j = null;
    } else kb(a, 3, b);
}
function ub(a, b) {
  a.i || (2 != a.h && 3 != a.h) || vb(a);
  a.l ? (a.l.next = b) : (a.i = b);
  a.l = b;
}
function pb(a, b, c, d) {
  var e = nb(null, null, null);
  e.h = new y(function (f, g) {
    e.j = b
      ? function (h) {
          try {
            var k = b.call(d, h);
            f(k);
          } catch (l) {
            g(l);
          }
        }
      : f;
    e.i = c
      ? function (h) {
          try {
            var k = c.call(d, h);
            void 0 === k && h instanceof qb ? g(h) : f(k);
          } catch (l) {
            g(l);
          }
        }
      : g;
  });
  e.h.j = a;
  ub(a, e);
  return e.h;
}
y.prototype.K = function (a) {
  this.h = 0;
  kb(this, 2, a);
};
y.prototype.M = function (a) {
  this.h = 0;
  kb(this, 3, a);
};
function kb(a, b, c) {
  if (0 == a.h) {
    a === c &&
      ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
    a.h = 1;
    a: {
      var d = c,
        e = a.K,
        f = a.M;
      if (d instanceof y) {
        ub(d, nb(e || $a, f || null, a));
        var g = !0;
      } else {
        if (d)
          try {
            var h = !!d.$goog_Thenable;
          } catch (l) {
            h = !1;
          }
        else h = !1;
        if (h) d.then(e, f, a), (g = !0);
        else {
          h = typeof d;
          if (("object" == h && null != d) || "function" == h)
            try {
              var k = d.then;
              if ("function" === typeof k) {
                wb(d, k, e, f, a);
                g = !0;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
    }
    g ||
      ((a.v = c),
      (a.h = b),
      (a.j = null),
      vb(a),
      3 != b || c instanceof qb || xb(a, c));
  }
}
function wb(a, b, c, d, e) {
  function f(k) {
    h || ((h = !0), d.call(e, k));
  }
  function g(k) {
    h || ((h = !0), c.call(e, k));
  }
  var h = !1;
  try {
    b.call(a, g, f);
  } catch (k) {
    f(k);
  }
}
function vb(a) {
  a.s || ((a.s = !0), ib(a.B, a));
}
function sb(a) {
  var b = null;
  a.i && ((b = a.i), (a.i = b.next), (b.next = null));
  a.i || (a.l = null);
  return b;
}
y.prototype.B = function () {
  for (var a; (a = sb(this)); ) tb(this, a, this.h, this.v);
  this.s = !1;
};
function tb(a, b, c, d) {
  if (3 == c && b.i && !b.l) for (; a && a.m; a = a.j) a.m = !1;
  if (b.h) (b.h.j = null), yb(b, c, d);
  else
    try {
      b.l ? b.j.call(b.context) : yb(b, c, d);
    } catch (e) {
      zb.call(null, e);
    }
  Ya(mb, b);
}
function yb(a, b, c) {
  2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c);
}
function xb(a, b) {
  a.m = !0;
  ib(function () {
    a.m && zb.call(null, b);
  });
}
var zb = ab;
function qb(a) {
  oa.call(this, a);
}
ma(qb, oa);
qb.prototype.name = "cancel";
function Ab() {
  throw Error("Invalid UTF8");
}
function Bb(a, b) {
  b = String.fromCharCode.apply(null, b);
  return null == a ? b : a + b;
}
let Cb = void 0,
  Db;
const Eb = "undefined" !== typeof TextDecoder;
!x("Android") || Wa();
Wa();
var Fb =
  x("Safari") &&
  !(
    Wa() ||
    (Va() ? 0 : x("Coast")) ||
    (Va() ? 0 : x("Opera")) ||
    (Va() ? 0 : x("Edge")) ||
    (Va() ? Ua("Microsoft Edge") : x("Edg/")) ||
    (Va() ? Ua("Opera") : x("OPR")) ||
    x("Firefox") ||
    x("FxiOS") ||
    x("Silk") ||
    x("Android")
  ) &&
  !((x("iPhone") && !x("iPod") && !x("iPad")) || x("iPad") || x("iPod"));
var Gb = {},
  Hb = null;
function Ib(a, b) {
  void 0 === b && (b = 0);
  Jb();
  b = Gb[b];
  const c = Array(Math.floor(a.length / 3)),
    d = b[64] || "";
  let e = 0,
    f = 0;
  for (; e < a.length - 2; e += 3) {
    var g = a[e],
      h = a[e + 1],
      k = a[e + 2],
      l = b[g >> 2];
    g = b[((g & 3) << 4) | (h >> 4)];
    h = b[((h & 15) << 2) | (k >> 6)];
    k = b[k & 63];
    c[f++] = "" + l + g + h + k;
  }
  l = 0;
  k = d;
  switch (a.length - e) {
    case 2:
      (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
    case 1:
      (a = a[e]),
        (c[f] = "" + b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
  }
  return c.join("");
}
function Kb(a) {
  var b = a.length,
    c = (3 * b) / 4;
  c % 3
    ? (c = Math.floor(c))
    : -1 != "=.".indexOf(a[b - 1]) &&
      (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
  var d = new Uint8Array(c),
    e = 0;
  Lb(a, function (f) {
    d[e++] = f;
  });
  return e !== c ? d.subarray(0, e) : d;
}
function Lb(a, b) {
  function c(k) {
    for (; d < a.length; ) {
      var l = a.charAt(d++),
        q = Hb[l];
      if (null != q) return q;
      if (!/^[\s\xa0]*$/.test(l))
        throw Error("Unknown base64 encoding at char: " + l);
    }
    return k;
  }
  Jb();
  for (var d = 0; ; ) {
    var e = c(-1),
      f = c(0),
      g = c(64),
      h = c(64);
    if (64 === h && -1 === e) break;
    b((e << 2) | (f >> 4));
    64 != g &&
      (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
  }
}
function Jb() {
  if (!Hb) {
    Hb = {};
    for (
      var a =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
            ""
          ),
        b = ["+/=", "+/", "-_=", "-_.", "-_"],
        c = 0;
      5 > c;
      c++
    ) {
      var d = a.concat(b[c].split(""));
      Gb[c] = d;
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        void 0 === Hb[f] && (Hb[f] = e);
      }
    }
  }
}
var Mb = "undefined" !== typeof Uint8Array,
  Nb = !Xa && "function" === typeof btoa;
function Ob(a) {
  if (!Nb) return Ib(a);
  let b = "",
    c = 0;
  const d = a.length - 10240;
  for (; c < d; )
    b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
  return btoa(b);
}
const Pb = /[-_.]/g,
  Qb = { "-": "+", _: "/", ".": "=" };
function Rb(a) {
  return Qb[a] || "";
}
function Sb(a) {
  if (!Nb) return Kb(a);
  Pb.test(a) && (a = a.replace(Pb, Rb));
  a = atob(a);
  const b = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
  return b;
}
function Tb(a) {
  return Mb && null != a && a instanceof Uint8Array;
}
let Ub;
var Vb = {};
let Wb;
function Xb(a) {
  if (a !== Vb) throw Error("illegal external caller");
}
function Yb() {
  return Wb || (Wb = new Zb(null, Vb));
}
function $b(a) {
  Xb(Vb);
  var b = a.h;
  b = null == b || Tb(b) ? b : "string" === typeof b ? Sb(b) : null;
  return null == b ? b : (a.h = b);
}
var Zb = class {
  constructor(a, b) {
    Xb(b);
    this.h = a;
    if (null != a && 0 === a.length)
      throw Error("ByteString should be constructed with non-empty values");
  }
  sizeBytes() {
    const a = $b(this);
    return a ? a.length : 0;
  }
};
function ac(a, b) {
  return Error(`Invalid wire type: ${a} (at position ${b})`);
}
function bc() {
  return Error("Failed to read varint, encoding is invalid.");
}
function cc(a, b) {
  return Error(`Tried to read past the end of the data ${b} > ${a}`);
}
function dc(a) {
  if ("string" === typeof a) return { buffer: Sb(a), L: !1 };
  if (Array.isArray(a)) return { buffer: new Uint8Array(a), L: !1 };
  if (a.constructor === Uint8Array) return { buffer: a, L: !1 };
  if (a.constructor === ArrayBuffer)
    return { buffer: new Uint8Array(a), L: !1 };
  if (a.constructor === Zb)
    return { buffer: $b(a) || Ub || (Ub = new Uint8Array(0)), L: !0 };
  if (a instanceof Uint8Array)
    return {
      buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
      L: !1,
    };
  throw Error(
    "Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers"
  );
}
function ec() {
  return "function" === typeof BigInt;
}
const fc = "function" === typeof Uint8Array.prototype.slice;
let gc = 0,
  hc = 0;
function ic(a) {
  const b = 0 > a;
  a = Math.abs(a);
  let c = a >>> 0;
  a = Math.floor((a - c) / 4294967296);
  if (b) {
    const [d, e] = jc(c, a);
    a = e;
    c = d;
  }
  gc = c >>> 0;
  hc = a >>> 0;
}
function kc(a, b) {
  b >>>= 0;
  a >>>= 0;
  if (2097151 >= b) var c = "" + (4294967296 * b + a);
  else
    ec()
      ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
      : ((c = ((a >>> 24) | (b << 8)) & 16777215),
        (b = (b >> 16) & 65535),
        (a = (a & 16777215) + 6777216 * c + 6710656 * b),
        (c += 8147497 * b),
        (b *= 2),
        1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
        1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
        (c = b + lc(c) + lc(a)));
  return c;
}
function lc(a) {
  a = String(a);
  return "0000000".slice(a.length) + a;
}
function mc() {
  var a = gc,
    b = hc;
  if (b & 2147483648)
    if (ec()) a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0));
    else {
      const [c, d] = jc(a, b);
      a = "-" + kc(c, d);
    }
  else a = kc(a, b);
  return a;
}
function jc(a, b) {
  b = ~b;
  a ? (a = ~a + 1) : (b += 1);
  return [a, b];
}
function nc(a) {
  const b = a.j;
  let c = a.h,
    d = b[c++],
    e = d & 127;
  if (
    d & 128 &&
    ((d = b[c++]),
    (e |= (d & 127) << 7),
    d & 128 &&
      ((d = b[c++]),
      (e |= (d & 127) << 14),
      d & 128 &&
        ((d = b[c++]),
        (e |= (d & 127) << 21),
        d & 128 &&
          ((d = b[c++]),
          (e |= d << 28),
          d & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128))))
  )
    throw bc();
  oc(a, c);
  return e;
}
function oc(a, b) {
  a.h = b;
  if (b > a.i) throw cc(a.i, b);
}
function pc(a, b) {
  if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
  const c = a.h,
    d = c + b;
  if (d > a.i) throw cc(b, a.i - c);
  a.h = d;
  return c;
}
var qc = class {
    constructor(a, b) {
      this.j = null;
      this.m = !1;
      this.h = this.i = this.l = 0;
      this.init(a, void 0, void 0, b);
    }
    init(a, b, c, { ba: d = !1 } = {}) {
      this.ba = d;
      a &&
        ((a = dc(a)),
        (this.j = a.buffer),
        (this.m = a.L),
        (this.l = b || 0),
        (this.i = void 0 !== c ? this.l + c : this.j.length),
        (this.h = this.l));
    }
    clear() {
      this.j = null;
      this.m = !1;
      this.h = this.i = this.l = 0;
      this.ba = !1;
    }
    reset() {
      this.h = this.l;
    }
  },
  rc = [];
function sc(a, { ka: b = !1 } = {}) {
  a.ka = b;
}
function tc(a) {
  var b = a.h;
  if (b.h == b.i) return !1;
  a.j = a.h.h;
  var c = nc(a.h) >>> 0;
  b = c >>> 3;
  c &= 7;
  if (!(0 <= c && 5 >= c)) throw ac(c, a.j);
  if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
  a.l = b;
  a.i = c;
  return !0;
}
function uc(a) {
  switch (a.i) {
    case 0:
      if (0 != a.i) uc(a);
      else
        a: {
          a = a.h;
          var b = a.h;
          const c = b + 10,
            d = a.j;
          for (; b < c; )
            if (0 === (d[b++] & 128)) {
              oc(a, b);
              break a;
            }
          throw bc();
        }
      break;
    case 1:
      a = a.h;
      oc(a, a.h + 8);
      break;
    case 2:
      2 != a.i ? uc(a) : ((b = nc(a.h) >>> 0), (a = a.h), oc(a, a.h + b));
      break;
    case 5:
      a = a.h;
      oc(a, a.h + 4);
      break;
    case 3:
      b = a.l;
      do {
        if (!tc(a)) throw Error("Unmatched start-group tag: stream EOF");
        if (4 == a.i) {
          if (a.l != b) throw Error("Unmatched end-group tag");
          break;
        }
        uc(a);
      } while (1);
      break;
    default:
      throw ac(a.i, a.j);
  }
}
function vc(a, b, c) {
  const d = a.h.i,
    e = nc(a.h) >>> 0,
    f = a.h.h + e;
  let g = f - d;
  0 >= g && ((a.h.i = f), c(b, a, void 0, void 0, void 0), (g = f - a.h.h));
  if (g)
    throw Error(
      "Message parsing ended unexpectedly. Expected to read " +
        `${e} bytes, instead read ${e - g} bytes, either the ` +
        "data ended unexpectedly or the message misreported its own length"
    );
  a.h.h = f;
  a.h.i = d;
}
var wc = class {
    constructor(a, b) {
      if (rc.length) {
        const c = rc.pop();
        c.init(a, void 0, void 0, b);
        a = c;
      } else a = new qc(a, b);
      this.h = a;
      this.j = this.h.h;
      this.i = this.l = -1;
      sc(this, b);
    }
    reset() {
      this.h.reset();
      this.j = this.h.h;
      this.i = this.l = -1;
    }
  },
  xc = [];
class yc {
  constructor(a, b, c) {
    this.Z = a;
    this.h = b;
    this.qa = c;
  }
}
function zc(a) {
  return Array.prototype.slice.call(a);
}
function Ac(a) {
  return "function" === typeof Symbol && "symbol" === typeof Symbol()
    ? Symbol()
    : a;
}
var Bc = Ac(),
  Cc = Ac("2ex");
[
  ...Object.values({
    yb: 1,
    wb: 2,
    vb: 4,
    Db: 8,
    Cb: 16,
    Bb: 32,
    Sa: 64,
    Ib: 128,
    Za: 256,
    Ya: 512,
    xb: 1024,
    Wa: 2048,
    Hb: 4096,
    Xa: 8192,
  }),
];
var Dc = Bc
    ? (a, b) => {
        a[Bc] |= b;
      }
    : (a, b) => {
        void 0 !== a.D
          ? (a.D |= b)
          : Object.defineProperties(a, {
              D: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
      },
  Ec = Bc
    ? (a, b) => {
        a[Bc] &= ~b;
      }
    : (a, b) => {
        void 0 !== a.D && (a.D &= ~b);
      };
function Fc(a, b, c) {
  return c ? a | b : a & ~b;
}
var A = Bc ? (a) => a[Bc] | 0 : (a) => a.D | 0,
  B = Bc ? (a) => a[Bc] : (a) => a.D,
  D = Bc
    ? (a, b) => {
        a[Bc] = b;
        return a;
      }
    : (a, b) => {
        void 0 !== a.D
          ? (a.D = b)
          : Object.defineProperties(a, {
              D: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
        return a;
      };
function Gc(a, b) {
  D(b, (a | 0) & -14591);
}
function Hc(a, b) {
  D(b, (a | 34) & -14557);
}
function Ic(a) {
  a = (a >> 14) & 1023;
  return 0 === a ? 536870912 : a;
}
var Jc = {},
  Kc = {};
function Lc(a) {
  return !(!a || "object" !== typeof a || a.h !== Kc);
}
function Mc(a) {
  return (
    null !== a &&
    "object" === typeof a &&
    !Array.isArray(a) &&
    a.constructor === Object
  );
}
let Nc;
function Oc(a, b, c) {
  if (!Array.isArray(a) || a.length) return !1;
  const d = A(a);
  if (d & 1) return !0;
  if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
  D(a, d | 1);
  return !0;
}
var Pc;
const Qc = [];
D(Qc, 55);
Pc = Object.freeze(Qc);
function Rc(a) {
  if (a & 2) throw Error();
}
let Sc;
function Tc(a, b) {
  (b = Sc ? b[Sc] : void 0) && (a[Sc] = zc(b));
}
let Uc;
class Vc {}
class Wc {}
Object.freeze(new Vc());
Object.freeze(new Wc());
let Xc;
function Yc(a) {
  a = Error(a);
  Fa(a, "warning");
  return a;
}
function Zc(a) {
  return a.displayName || a.name || "unknown type name";
}
const $c = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function ad(a) {
  const b = typeof a;
  return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : $c.test(a);
}
function bd(a) {
  if (null == a) return a;
  if ("string" === typeof a) {
    if (!a) return;
    a = +a;
  }
  if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
}
function cd(a, b) {
  b = !!b;
  if (!ad(a)) throw Yc("int64");
  if ("string" === typeof a)
    if ((ad(a), (b = Math.trunc(Number(a))), Number.isSafeInteger(b)))
      a = String(b);
    else {
      if (((b = a.indexOf(".")), -1 !== b && (a = a.substring(0, b)), !dd(a))) {
        if (16 > a.length) ic(Number(a));
        else if (ec())
          (a = BigInt(a)),
            (gc = Number(a & BigInt(4294967295)) >>> 0),
            (hc = Number((a >> BigInt(32)) & BigInt(4294967295)));
        else {
          b = +("-" === a[0]);
          hc = gc = 0;
          var c = a.length;
          for (let d = 0 + b, e = ((c - b) % 6) + b; e <= c; d = e, e += 6) {
            const f = Number(a.slice(d, e));
            hc *= 1e6;
            gc = 1e6 * gc + f;
            4294967296 <= gc &&
              ((hc += Math.trunc(gc / 4294967296)), (hc >>>= 0), (gc >>>= 0));
          }
          if (b) {
            const [d, e] = jc(gc, hc);
            gc = d;
            hc = e;
          }
        }
        a = mc();
      }
    }
  else if (b)
    ad(a),
      (a = Math.trunc(a)),
      Number.isSafeInteger(a)
        ? (a = String(a))
        : ((b = String(a)), dd(b) ? (a = b) : (ic(a), (a = mc())));
  else if ((ad(a), (a = Math.trunc(a)), !Number.isSafeInteger(a))) {
    ic(a);
    b = gc;
    c = hc;
    if ((a = c & 2147483648))
      (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
    b = 4294967296 * c + (b >>> 0);
    a = a ? -b : b;
  }
  return a;
}
function dd(a) {
  return "-" === a[0]
    ? 20 > a.length
      ? !0
      : 20 === a.length && -922337 < Number(a.substring(0, 7))
    : 19 > a.length
    ? !0
    : 19 === a.length && 922337 > Number(a.substring(0, 6));
}
function ed(a) {
  if (null != a && "string" !== typeof a) throw Error();
  return a;
}
function fd(a, b) {
  if (!(a instanceof b))
    throw Error(
      `Expected instanceof ${Zc(b)} but got ${a && Zc(a.constructor)}`
    );
  return a;
}
function gd(a, b, c) {
  if (null != a && "object" === typeof a && a.W === Jc) return a;
  if (Array.isArray(a)) {
    var d = A(a),
      e = d;
    0 === e && (e |= c & 32);
    e |= c & 2;
    e !== d && D(a, e);
    return new b(a);
  }
}
let hd, id, jd;
function kd(a) {
  switch (typeof a) {
    case "boolean":
      return id || (id = [0, void 0, !0]);
    case "number":
      return 0 < a ? void 0 : 0 === a ? jd || (jd = [0, void 0]) : [-a, void 0];
    case "string":
      return [0, a];
    case "object":
      return a;
  }
}
function ld(a, b, c) {
  null == a && (a = hd);
  hd = void 0;
  if (null == a) {
    var d = 96;
    c ? ((a = [c]), (d |= 512)) : (a = []);
    b && (d = (d & -16760833) | ((b & 1023) << 14));
  } else {
    if (!Array.isArray(a)) throw Error("narr");
    d = A(a);
    if (d & 2048) throw Error("farr");
    if (d & 64) return a;
    d |= 64;
    if (c && ((d |= 512), c !== a[0])) throw Error("mid");
    a: {
      c = a;
      const e = c.length;
      if (e) {
        const f = e - 1;
        if (Mc(c[f])) {
          d |= 256;
          b = f - (+!!(d & 512) - 1);
          if (1024 <= b) throw Error("pvtlmt");
          d = (d & -16760833) | ((b & 1023) << 14);
          break a;
        }
      }
      if (b) {
        b = Math.max(b, e - (+!!(d & 512) - 1));
        if (1024 < b) throw Error("spvt");
        d = (d & -16760833) | ((b & 1023) << 14);
      }
    }
  }
  D(a, d);
  return a;
}
function md(a, b) {
  return nd(b);
}
function nd(a) {
  switch (typeof a) {
    case "number":
      return isFinite(a) ? a : String(a);
    case "boolean":
      return a ? 1 : 0;
    case "object":
      if (a)
        if (Array.isArray(a)) {
          if (Oc(a, void 0, 0)) return;
        } else {
          if (Tb(a)) return Ob(a);
          if (a instanceof Zb) {
            const b = a.h;
            return null == b ? "" : "string" === typeof b ? b : (a.h = Ob(b));
          }
        }
  }
  return a;
}
function od(a, b, c) {
  const d = zc(a);
  var e = d.length;
  const f = b & 256 ? d[e - 1] : void 0;
  e += f ? -1 : 0;
  for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
  if (f) {
    b = d[b] = {};
    for (const g in f) b[g] = c(f[g]);
  }
  Tc(d, a);
  return d;
}
function pd(a, b, c, d, e) {
  if (null != a) {
    if (Array.isArray(a))
      a = Oc(a, void 0, 0)
        ? void 0
        : e && A(a) & 2
        ? a
        : qd(a, b, c, void 0 !== d, e);
    else if (Mc(a)) {
      const f = {};
      for (let g in a) f[g] = pd(a[g], b, c, d, e);
      a = f;
    } else a = b(a, d);
    return a;
  }
}
function qd(a, b, c, d, e) {
  const f = d || c ? A(a) : 0;
  d = d ? !!(f & 32) : void 0;
  const g = zc(a);
  for (let h = 0; h < g.length; h++) g[h] = pd(g[h], b, c, d, e);
  c && (Tc(g, a), c(f, g));
  return g;
}
function rd(a) {
  return a.W === Jc ? a.toJSON() : nd(a);
}
function sd(a, b, c = Hc) {
  if (null != a) {
    if (Mb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
    if (Array.isArray(a)) {
      var d = A(a);
      if (d & 2) return a;
      b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
      return b ? D(a, (d | 34) & -12293) : qd(a, sd, d & 4 ? Hc : c, !0, !0);
    }
    a.W === Jc && ((c = a.o), (d = B(c)), (a = d & 2 ? a : td(a, c, d, !0)));
    return a;
  }
}
function td(a, b, c, d) {
  a = a.constructor;
  hd = b = ud(b, c, d);
  b = new a(b);
  hd = void 0;
  return b;
}
function ud(a, b, c) {
  const d = c || b & 2 ? Hc : Gc,
    e = !!(b & 32);
  a = od(a, b, (f) => sd(f, e, d));
  Dc(a, 32 | (c ? 2 : 0));
  return a;
}
function vd(a) {
  const b = a.o,
    c = B(b);
  return c & 2 ? td(a, b, c, !1) : a;
}
function wd(a, b) {
  a = a.o;
  return xd(a, B(a), b);
}
function yd(a, b, c, d) {
  b = d + (+!!(b & 512) - 1);
  if (!(0 > b || b >= a.length || b >= c)) return a[b];
}
function xd(a, b, c, d) {
  if (-1 === c) return null;
  const e = Ic(b);
  if (c >= e) {
    if (b & 256) return a[a.length - 1][c];
  } else {
    var f = a.length;
    if (d && b & 256 && ((d = a[f - 1][c]), null != d)) {
      if (yd(a, b, e, c) && null != Cc) {
        var g;
        a = null != (g = Xc) ? g : (Xc = {});
        g = a[Cc] || 0;
        4 <= g || ((a[Cc] = g + 1), (g = Error()), Fa(g, "incident"), ab(g));
      }
      return d;
    }
    return yd(a, b, e, c);
  }
}
function zd(a, b, c) {
  const d = a.o;
  let e = B(d);
  Rc(e);
  E(d, e, b, c);
  return a;
}
function E(a, b, c, d, e) {
  const f = Ic(b);
  if (c >= f || e) {
    let g = b;
    if (b & 256) e = a[a.length - 1];
    else {
      if (null == d) return g;
      e = a[f + (+!!(b & 512) - 1)] = {};
      g |= 256;
    }
    e[c] = d;
    c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
    g !== b && D(a, g);
    return g;
  }
  a[c + (+!!(b & 512) - 1)] = d;
  b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
  return b;
}
function Ad(a) {
  return void 0 !== Bd(a, F, 2);
}
function Cd(a, b, c, d) {
  var e = b & 2;
  let f = xd(a, b, c);
  Array.isArray(f) || (f = Pc);
  const g = !(d & 2);
  d = !(d & 1);
  const h = !!(b & 32);
  let k = A(f);
  0 !== k || !h || e || g ? k & 1 || ((k |= 1), D(f, k)) : ((k |= 33), D(f, k));
  e
    ? ((a = !1),
      k & 2 || (Dc(f, 34), (a = !!(4 & k))),
      (d || a) && Object.freeze(f))
    : ((e = !!(2 & k) || !!(2048 & k)),
      d && e
        ? ((f = zc(f)), (d = 1), h && !g && (d |= 32), D(f, d), E(a, b, c, f))
        : g && k & 32 && !e && Ec(f, 32));
  return f;
}
function Dd(a) {
  return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
}
function Ed(a, b, c, d) {
  const e = a.o;
  let f = B(e);
  Rc(f);
  (c = Fd(e, f, c)) && c !== b && null != d && (f = E(e, f, c));
  E(e, f, b, d);
  return a;
}
function Fd(a, b, c) {
  let d = 0;
  for (let e = 0; e < c.length; e++) {
    const f = c[e];
    null != xd(a, b, f) && (0 !== d && (b = E(a, b, d)), (d = f));
  }
  return d;
}
function Gd(a, b, c, d) {
  let e = B(a);
  Rc(e);
  const f = xd(a, e, c, d);
  let g;
  if (null != f && f.W === Jc)
    return (b = vd(f)), b !== f && E(a, e, c, b, d), b.o;
  if (Array.isArray(f)) {
    const h = A(f);
    h & 2 ? (g = ud(f, h, !1)) : (g = f);
    g = ld(g, b[0], b[1]);
  } else g = ld(void 0, b[0], b[1]);
  g !== f && E(a, e, c, g, d);
  return g;
}
function Bd(a, b, c) {
  a = a.o;
  let d = B(a);
  const e = xd(a, d, c, !1);
  b = gd(e, b, d);
  b !== e && null != b && E(a, d, c, b, !1);
  return b;
}
function Hd(a, b, c) {
  b = Bd(a, b, c);
  if (null == b) return b;
  a = a.o;
  let d = B(a);
  if (!(d & 2)) {
    const e = vd(b);
    e !== b && ((b = e), E(a, d, c, b, !1));
  }
  return b;
}
function Id(a, b, c, d, e, f) {
  var g = !!(2 & b),
    h = g ? 1 : 2;
  const k = 1 === h;
  h = 2 === h;
  e = !!e;
  f && (f = !g);
  g = xd(a, b, d);
  g = Array.isArray(g) ? g : Pc;
  var l = A(g);
  const q = !!(4 & l);
  if (!q) {
    var m = l;
    0 === m && (m = Jd(m, b));
    m = Fc(m, 1, !0);
    l = g;
    var p = b;
    const n = !!(2 & m);
    n && (p = Fc(p, 2, !0));
    let u = !n,
      z = !0,
      C = 0,
      P = 0;
    for (; C < l.length; C++) {
      const G = gd(l[C], c, p);
      if (G instanceof c) {
        if (!n) {
          const Y = !!(A(G.o) & 2);
          u && (u = !Y);
          z && (z = Y);
        }
        l[P++] = G;
      }
    }
    P < C && (l.length = P);
    m = Fc(m, 4, !0);
    m = Fc(m, 16, z);
    m = Fc(m, 8, u);
    D(l, m);
    n && Object.freeze(l);
    l = m;
  }
  c = !!(8 & l) || (k && !g.length);
  if (f && !c) {
    Dd(l) && ((g = zc(g)), (l = Jd(l, b)), (b = E(a, b, d, g)));
    f = g;
    c = l;
    for (l = 0; l < f.length; l++)
      (m = f[l]), (p = vd(m)), m !== p && (f[l] = p);
    c = Fc(c, 8, !0);
    c = Fc(c, 16, !f.length);
    D(f, c);
    l = c;
  }
  Dd(l) ||
    ((f = l),
    k
      ? ((c = !!(32 & l)),
        c || ((g = zc(g)), (f = 0), (b = E(a, b, d, g))),
        (l = Fc(l, !g.length || (16 & l && (!q || c)) ? 2 : 2048, !0)))
      : (l = Kd(l, b, e)),
    l !== f && D(g, l),
    k && Object.freeze(g));
  h &&
    Dd(l) &&
    ((g = zc(g)), (l = Jd(l, b)), (l = Kd(l, b, e)), D(g, l), E(a, b, d, g));
  return g;
}
function H(a, b, c, d) {
  null != d ? fd(d, b) : (d = void 0);
  return zd(a, c, d);
}
function Ld(a, b, c, d, e) {
  null != e ? fd(e, b) : (e = void 0);
  Ed(a, c, d, e);
}
function Jd(a, b) {
  a = Fc(a, 2, !!(2 & b));
  a = Fc(a, 32, !0);
  return (a = Fc(a, 2048, !1));
}
function Kd(a, b, c) {
  (32 & b && c) || (a = Fc(a, 32, !1));
  return a;
}
function Md(a, b, c, d) {
  a = a.o;
  const e = B(a);
  Rc(e);
  b = Id(a, e, c, b, !0);
  c = null != d ? fd(d, c) : new c();
  b.push(c);
  A(c.o) & 2 ? Ec(b, 8) : Ec(b, 16);
}
function Nd(a, b) {
  a = wd(a, b);
  return null == a || "string" === typeof a ? a : void 0;
}
function Od(a, b) {
  a = Nd(a, b);
  return null != a ? a : "";
}
function Pd(a, b) {
  const c = a.o;
  b = Fd(c, B(c), Qd) === b ? b : -1;
  return Nd(a, b);
}
function Rd(a, b, c) {
  if (null != c) {
    if ("number" !== typeof c) throw Yc("int32");
    if (!Number.isFinite(c)) throw Yc("int32");
    c |= 0;
  }
  return zd(a, b, c);
}
function Sd(a, b, c) {
  zd(a, b, null == c ? c : cd(c));
}
function I(a, b, c) {
  return zd(a, b, ed(c));
}
function J(a, b, c) {
  if (null != c) {
    if (!Number.isFinite(c)) throw Yc("enum");
    c |= 0;
  }
  return zd(a, b, c);
}
var K = class {
  constructor(a, b, c) {
    this.o = ld(a, b, c);
  }
  toJSON() {
    return Nc
      ? Td(this, this.o, !1)
      : Td(this, qd(this.o, rd, void 0, void 0, !1), !0);
  }
  clone() {
    const a = this.o;
    return td(this, a, B(a), !1);
  }
  L() {
    return !!(A(this.o) & 2);
  }
};
K.prototype.W = Jc;
function Td(a, b, c) {
  var d = Qa ? void 0 : a.constructor.A;
  const e = B(c ? a.o : b);
  a = b.length;
  if (!a) return b;
  let f, g;
  if (Mc((c = b[a - 1]))) {
    a: {
      var h = c;
      let q = {},
        m = !1;
      for (var k in h) {
        let p = h[k];
        if (Array.isArray(p)) {
          let n = p;
          if (Oc(p, d, +k) || (Lc(p) && 0 === p.size)) p = null;
          p != n && (m = !0);
        }
        null != p ? (q[k] = p) : (m = !0);
      }
      if (m) {
        for (var l in q) {
          h = q;
          break a;
        }
        h = null;
      }
    }
    h != c && (f = !0);
    a--;
  }
  for (k = +!!(e & 512) - 1; 0 < a; a--) {
    l = a - 1;
    c = b[l];
    l -= k;
    if (!(null == c || Oc(c, d, l) || (Lc(c) && 0 === c.size))) break;
    g = !0;
  }
  if (!f && !g) return b;
  b = Array.prototype.slice.call(b, 0, a);
  h && b.push(h);
  return b;
}
const Ud = Symbol();
function Vd(a) {
  let b = a[Ud];
  if (!b) {
    const c = Wd(a),
      d = Xd(a),
      e = d.j;
    b = e
      ? (f, g) => e(f, g, d)
      : (f, g) => {
          for (; tc(g) && 4 != g.i; ) {
            var h = g.l,
              k = d[h];
            if (!k) {
              var l = d.extensions;
              l && (l = l[h]) && (k = d[h] = Yd(l));
            }
            if (!k || !k(g, f, h)) {
              k = g;
              h = k.j;
              uc(k);
              if (k.ka) k = void 0;
              else {
                l = k.h.h - h;
                k.h.h = h;
                b: {
                  k = k.h;
                  h = l;
                  if (0 == h) {
                    k = Yb();
                    break b;
                  }
                  const q = pc(k, h);
                  k.ba && k.m
                    ? (h = k.j.subarray(q, q + h))
                    : ((k = k.j),
                      (l = q),
                      (h = q + h),
                      (h =
                        l === h
                          ? Ub || (Ub = new Uint8Array(0))
                          : fc
                          ? k.slice(l, h)
                          : new Uint8Array(k.subarray(l, h))));
                  k = 0 == h.length ? Yb() : new Zb(h, Vb);
                }
              }
              h = f;
              k &&
                (Sc || (Sc = Symbol()),
                (l = h[Sc]) ? l.push(k) : (h[Sc] = [k]));
            }
          }
          c === Zd || c === $d || c.l || (f[Uc || (Uc = Symbol())] = c);
        };
    a[Ud] = b;
  }
  return b;
}
function Yd(a) {
  a = Array.isArray(a) ? (a[0] instanceof yc ? a : [ae, a]) : [a, void 0];
  const b = a[0].Z;
  if ((a = a[1])) {
    const c = Vd(a),
      d = Xd(a).V;
    return (e, f, g) => b(e, f, g, d, c);
  }
  return b;
}
class be {}
let Zd, $d;
const ce = Symbol();
function de(a, b, c) {
  const d = c[1];
  let e;
  if (d) {
    const f = d[ce];
    e = f ? f.V : kd(d[0]);
    a[b] = null != f ? f : d;
  }
  e && e === id
    ? (a.h || (a.h = new Set())).add(b)
    : c[0] && (a.i || (a.i = new Set())).add(b);
}
function ee(a, b) {
  return [a.h, !b || 0 < b[0] ? void 0 : b];
}
function Wd(a) {
  var b = a[ce];
  if (b) return b;
  b = fe(a, (a[ce] = new be()), ee, ee, de);
  if (!b.extensions && !b.i && !b.h) {
    let c = !0;
    for (let d in b) isNaN(d) || (c = !1);
    c
      ? (kd(a[0]) === id
          ? $d
            ? (b = $d)
            : ((b = new be()), (b.V = kd(!0)), (b = $d = b))
          : (b = Zd || (Zd = new be())),
        (b = a[ce] = b))
      : (b.l = !0);
  }
  return b;
}
function ge(a, b, c) {
  a[b] = c;
}
function fe(a, b, c, d, e = ge) {
  b.V = kd(a[0]);
  let f = 0;
  var g = a[++f];
  g &&
    g.constructor === Object &&
    ((b.extensions = g),
    (g = a[++f]),
    "function" === typeof g && ((b.j = g), (b.m = a[++f]), (g = a[++f])));
  const h = {};
  for (; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0]; ) {
    for (var k = 0; k < g.length; k++) h[g[k]] = g;
    g = a[++f];
  }
  for (k = 1; void 0 !== g; ) {
    "number" === typeof g && ((k += g), (g = a[++f]));
    let m;
    var l = void 0;
    g instanceof yc ? (m = g) : ((m = he), f--);
    if (m.qa) {
      g = a[++f];
      l = a;
      var q = f;
      "function" == typeof g && ((g = g()), (l[q] = g));
      l = g;
    }
    g = a[++f];
    q = k + 1;
    "number" === typeof g && 0 > g && ((q -= g), (g = a[++f]));
    for (; k < q; k++) {
      const p = h[k];
      e(b, k, l ? d(m, l, p) : c(m, p));
    }
  }
  return b;
}
const ie = Symbol(),
  je = Symbol();
function ke(a, b) {
  const c = a.Z;
  return b ? (d, e, f) => c(d, e, f, b) : c;
}
function le(a, b, c) {
  const d = a.Z;
  let e, f;
  return (g, h, k) => d(g, h, k, f || (f = Xd(b).V), e || (e = Vd(b)), c);
}
function Xd(a) {
  let b = a[je];
  if (b) return b;
  Wd(a);
  b = fe(a, (a[je] = {}), ke, le);
  je in a && ce in a && ie in a && (a.length = 0);
  return b;
}
var me;
me = new yc(
  function (a, b, c) {
    if (2 !== a.i) return !1;
    var d = nc(a.h) >>> 0;
    a = a.h;
    var e = pc(a, d);
    a = a.j;
    if (Eb) {
      var f = a,
        g;
      (g = Db) || (g = Db = new TextDecoder("utf-8", { fatal: !0 }));
      d = e + d;
      f = 0 === e && d === f.length ? f : f.subarray(e, d);
      try {
        var h = g.decode(f);
      } catch (l) {
        if (void 0 === Cb) {
          try {
            g.decode(new Uint8Array([128]));
          } catch (q) {}
          try {
            g.decode(new Uint8Array([97])), (Cb = !0);
          } catch (q) {
            Cb = !1;
          }
        }
        !Cb && (Db = void 0);
        throw l;
      }
    } else {
      h = e;
      d = h + d;
      e = [];
      let l = null;
      let q;
      for (; h < d; ) {
        var k = a[h++];
        128 > k
          ? e.push(k)
          : 224 > k
          ? h >= d
            ? Ab()
            : ((q = a[h++]),
              194 > k || 128 !== (q & 192)
                ? (h--, Ab())
                : e.push(((k & 31) << 6) | (q & 63)))
          : 240 > k
          ? h >= d - 1
            ? Ab()
            : ((q = a[h++]),
              128 !== (q & 192) ||
              (224 === k && 160 > q) ||
              (237 === k && 160 <= q) ||
              128 !== ((g = a[h++]) & 192)
                ? (h--, Ab())
                : e.push(((k & 15) << 12) | ((q & 63) << 6) | (g & 63)))
          : 244 >= k
          ? h >= d - 2
            ? Ab()
            : ((q = a[h++]),
              128 !== (q & 192) ||
              0 !== ((k << 28) + (q - 144)) >> 30 ||
              128 !== ((g = a[h++]) & 192) ||
              128 !== ((f = a[h++]) & 192)
                ? (h--, Ab())
                : ((k =
                    ((k & 7) << 18) |
                    ((q & 63) << 12) |
                    ((g & 63) << 6) |
                    (f & 63)),
                  (k -= 65536),
                  e.push(((k >> 10) & 1023) + 55296, (k & 1023) + 56320)))
          : Ab();
        8192 <= e.length && ((l = Bb(l, e)), (e.length = 0));
      }
      h = Bb(l, e);
    }
    E(b, B(b), c, h);
    return !0;
  },
  !1,
  !1
);
var ae = new yc(
    function (a, b, c, d, e) {
      if (2 !== a.i) return !1;
      vc(a, Gd(b, d, c, !0), e);
      return !0;
    },
    !1,
    !0
  ),
  he = new yc(
    function (a, b, c, d, e) {
      if (2 !== a.i) return !1;
      vc(a, Gd(b, d, c), e);
      return !0;
    },
    !1,
    !0
  ),
  ne;
ne = new yc(
  function (a, b, c, d, e) {
    if (2 !== a.i) return !1;
    d = ld(void 0, d[0], d[1]);
    let f = B(b);
    Rc(f);
    let g = Cd(b, f, c, 3);
    f = B(b);
    A(g) & 4 && ((g = zc(g)), D(g, (A(g) | 1) & -2079), E(b, f, c, g));
    g.push(d);
    vc(a, d, e);
    return !0;
  },
  !0,
  !0
);
ta("csi.gstatic.com");
ta("googleads.g.doubleclick.net");
ta("partner.googleadservices.com");
ta("pubads.g.doubleclick.net");
ta("securepubads.g.doubleclick.net");
ta("tpc.googlesyndication.com");
function oe(a) {
  if (!a) return "";
  if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
  0 === a.indexOf("blob:") && (a = a.substring(5));
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  0 == a.indexOf("//") && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var b = a.substring(a.indexOf("://") + 3),
    c = b.indexOf("/");
  -1 != c && (b = b.substring(0, c));
  c = a.substring(0, a.indexOf("://"));
  if (!c) throw Error("URI is missing protocol: " + a);
  if (
    "http" !== c &&
    "https" !== c &&
    "chrome-extension" !== c &&
    "moz-extension" !== c &&
    "file" !== c &&
    "android-app" !== c &&
    "chrome-search" !== c &&
    "chrome-untrusted" !== c &&
    "chrome" !== c &&
    "app" !== c &&
    "devtools" !== c
  )
    throw Error("Invalid URI scheme in origin: " + c);
  a = "";
  var d = b.indexOf(":");
  if (-1 != d) {
    var e = b.substring(d + 1);
    b = b.substring(0, d);
    if (("http" === c && "80" !== e) || ("https" === c && "443" !== e))
      a = ":" + e;
  }
  return c + "://" + b + a;
}
function pe() {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    q = l = 0;
  }
  function b(m) {
    for (var p = g, n = 0; 64 > n; n += 4)
      p[n / 4] = (m[n] << 24) | (m[n + 1] << 16) | (m[n + 2] << 8) | m[n + 3];
    for (n = 16; 80 > n; n++)
      (m = p[n - 3] ^ p[n - 8] ^ p[n - 14] ^ p[n - 16]),
        (p[n] = ((m << 1) | (m >>> 31)) & 4294967295);
    m = e[0];
    var u = e[1],
      z = e[2],
      C = e[3],
      P = e[4];
    for (n = 0; 80 > n; n++) {
      if (40 > n)
        if (20 > n) {
          var G = C ^ (u & (z ^ C));
          var Y = 1518500249;
        } else (G = u ^ z ^ C), (Y = 1859775393);
      else
        60 > n
          ? ((G = (u & z) | (C & (u | z))), (Y = 2400959708))
          : ((G = u ^ z ^ C), (Y = 3395469782));
      G =
        ((((m << 5) | (m >>> 27)) & 4294967295) + G + P + Y + p[n]) &
        4294967295;
      P = C;
      C = z;
      z = ((u << 30) | (u >>> 2)) & 4294967295;
      u = m;
      m = G;
    }
    e[0] = (e[0] + m) & 4294967295;
    e[1] = (e[1] + u) & 4294967295;
    e[2] = (e[2] + z) & 4294967295;
    e[3] = (e[3] + C) & 4294967295;
    e[4] = (e[4] + P) & 4294967295;
  }
  function c(m, p) {
    if ("string" === typeof m) {
      m = unescape(encodeURIComponent(m));
      for (var n = [], u = 0, z = m.length; u < z; ++u) n.push(m.charCodeAt(u));
      m = n;
    }
    p || (p = m.length);
    n = 0;
    if (0 == l)
      for (; n + 64 < p; ) b(m.slice(n, n + 64)), (n += 64), (q += 64);
    for (; n < p; )
      if (((f[l++] = m[n++]), q++, 64 == l))
        for (l = 0, b(f); n + 64 < p; )
          b(m.slice(n, n + 64)), (n += 64), (q += 64);
  }
  function d() {
    var m = [],
      p = 8 * q;
    56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
    for (var n = 63; 56 <= n; n--) (f[n] = p & 255), (p >>>= 8);
    b(f);
    for (n = p = 0; 5 > n; n++)
      for (var u = 24; 0 <= u; u -= 8) m[p++] = (e[n] >> u) & 255;
    return m;
  }
  for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
  var l, q;
  a();
  return {
    reset: a,
    update: c,
    digest: d,
    Ba: function () {
      for (var m = d(), p = "", n = 0; n < m.length; n++)
        p +=
          "0123456789ABCDEF".charAt(Math.floor(m[n] / 16)) +
          "0123456789ABCDEF".charAt(m[n] % 16);
      return p;
    },
  };
}
function qe(a, b, c) {
  var d = String(t.location.href);
  return d && a && b ? [b, re(oe(d), a, c || null)].join(" ") : null;
}
function re(a, b, c) {
  var d = [],
    e = [];
  if (1 == (Array.isArray(c) ? 2 : 1))
    return (
      (e = [b, a]),
      wa(d, function (h) {
        e.push(h);
      }),
      se(e.join(" "))
    );
  var f = [],
    g = [];
  wa(c, function (h) {
    g.push(h.key);
    f.push(h.value);
  });
  c = Math.floor(new Date().getTime() / 1e3);
  e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
  wa(d, function (h) {
    e.push(h);
  });
  a = se(e.join(" "));
  a = [c, a];
  0 == g.length || a.push(g.join(""));
  return a.join("_");
}
function se(a) {
  var b = pe();
  b.update(a);
  return b.Ba().toLowerCase();
}
const te = {};
function ue() {
  this.h = document || { cookie: "" };
}
ue.prototype.isEnabled = function () {
  if (!t.navigator.cookieEnabled) return !1;
  if (this.h.cookie) return !0;
  this.set("TESTCOOKIESENABLED", "1", { na: 60 });
  if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
  this.remove("TESTCOOKIESENABLED");
  return !0;
};
ue.prototype.set = function (a, b, c) {
  let d,
    e,
    f,
    g = !1,
    h;
  "object" === typeof c &&
    ((h = c.dc),
    (g = c.ec || !1),
    (f = c.domain || void 0),
    (e = c.path || void 0),
    (d = c.na));
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === d && (d = -1);
  this.h.cookie =
    a +
    "=" +
    b +
    (f ? ";domain=" + f : "") +
    (e ? ";path=" + e : "") +
    (0 > d
      ? ""
      : 0 == d
      ? ";expires=" + new Date(1970, 1, 1).toUTCString()
      : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
    (g ? ";secure" : "") +
    (null != h ? ";samesite=" + h : "");
};
ue.prototype.get = function (a, b) {
  const c = a + "=",
    d = (this.h.cookie || "").split(";");
  for (let e = 0, f; e < d.length; e++) {
    f = pa(d[e]);
    if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
    if (f == a) return "";
  }
  return b;
};
ue.prototype.remove = function (a, b, c) {
  const d = void 0 !== this.get(a);
  this.set(a, "", { na: 0, path: b, domain: c });
  return d;
};
ue.prototype.clear = function () {
  var a = (this.h.cookie || "").split(";");
  const b = [],
    c = [];
  let d, e;
  for (let f = 0; f < a.length; f++)
    (e = pa(a[f])),
      (d = e.indexOf("=")),
      -1 == d
        ? (b.push(""), c.push(e))
        : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
};
function ve() {
  return !!te.FPA_SAMESITE_PHASE2_MOD || !1;
}
function we(a, b, c, d) {
  (a = t[a]) || "undefined" === typeof document || (a = new ue().get(b));
  return a ? qe(a, c, d) : null;
}
const xe = self;
class ye {
  constructor() {
    this.promise = new Promise((a) => {
      this.resolve = a;
    });
  }
}
function L(a) {
  Oa.call(this);
  this.K = 1;
  this.s = [];
  this.v = 0;
  this.h = [];
  this.j = {};
  this.aa = !!a;
}
ma(L, Oa);
L.prototype.M = function (a, b, c) {
  var d = this.j[a];
  d || (d = this.j[a] = []);
  var e = this.K;
  this.h[e] = a;
  this.h[e + 1] = b;
  this.h[e + 2] = c;
  this.K = e + 3;
  d.push(e);
  return e;
};
L.prototype.F = function (a) {
  var b = this.h[a];
  if (b) {
    var c = this.j[b];
    0 != this.v
      ? (this.s.push(a), (this.h[a + 1] = () => {}))
      : (c && ya(c, a),
        delete this.h[a],
        delete this.h[a + 1],
        delete this.h[a + 2]);
  }
  return !!b;
};
L.prototype.B = function (a, b) {
  var c = this.j[a];
  if (c) {
    for (
      var d = Array(arguments.length - 1), e = 1, f = arguments.length;
      e < f;
      e++
    )
      d[e - 1] = arguments[e];
    if (this.aa)
      for (e = 0; e < c.length; e++) {
        var g = c[e];
        ze(this.h[g + 1], this.h[g + 2], d);
      }
    else {
      this.v++;
      try {
        for (e = 0, f = c.length; e < f && !this.l; e++)
          (g = c[e]), this.h[g + 1].apply(this.h[g + 2], d);
      } finally {
        if ((this.v--, 0 < this.s.length && 0 == this.v))
          for (; (c = this.s.pop()); ) this.F(c);
      }
    }
    return 0 != e;
  }
  return !1;
};
function ze(a, b, c) {
  ib(function () {
    a.apply(b, c);
  });
}
L.prototype.clear = function (a) {
  if (a) {
    var b = this.j[a];
    b && (b.forEach(this.F, this), delete this.j[a]);
  } else (this.h.length = 0), (this.j = {});
};
L.prototype.m = function () {
  L.Ma.m.call(this);
  this.clear();
  this.s.length = 0;
}; /*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let M = {};
var Ae =
  "undefined" !== typeof Uint8Array &&
  "undefined" !== typeof Uint16Array &&
  "undefined" !== typeof Int32Array;
M.assign = function (a) {
  for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
    var c = b.shift();
    if (c) {
      if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
      for (var d in c)
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    }
  }
  return a;
};
M.ic = function (a, b) {
  if (a.length === b) return a;
  if (a.subarray) return a.subarray(0, b);
  a.length = b;
  return a;
};
var Be = {
    ya: function (a, b, c, d, e) {
      if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
      else for (var f = 0; f < d; f++) a[e + f] = b[c + f];
    },
    Ca: function (a) {
      var b, c;
      var d = (c = 0);
      for (b = a.length; d < b; d++) c += a[d].length;
      var e = new Uint8Array(c);
      d = c = 0;
      for (b = a.length; d < b; d++) {
        var f = a[d];
        e.set(f, c);
        c += f.length;
      }
      return e;
    },
  },
  Ce = {
    ya: function (a, b, c, d, e) {
      for (var f = 0; f < d; f++) a[e + f] = b[c + f];
    },
    Ca: function (a) {
      return [].concat.apply([], a);
    },
  };
M.La = function () {
  Ae
    ? ((M.ta = Uint8Array),
      (M.ra = Uint16Array),
      (M.sa = Int32Array),
      M.assign(M, Be))
    : ((M.ta = Array), (M.ra = Array), (M.sa = Array), M.assign(M, Ce));
};
M.La();
try {
  new Uint8Array(1);
} catch (a) {}
function De(a) {
  for (var b = a.length; 0 <= --b; ) a[b] = 0;
}
De(Array(576));
De(Array(60));
De(Array(512));
De(Array(256));
De(Array(29));
De(Array(30)); /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Ee = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
var Fe = class {
  constructor(a) {
    this.name = a;
  }
};
var Ge = new Fe("rawColdConfigGroup");
var He = new Fe("rawHotConfigGroup");
function Ie(a, b) {
  return Rd(a, 1, b);
}
var Je = class extends K {
  constructor(a) {
    super(a);
  }
};
var Ke = class extends K {
  constructor(a) {
    super(a);
  }
};
Ke.A = [1];
var Le = class extends K {
  constructor(a) {
    super(a);
  }
};
var Me = class extends K {
  constructor(a) {
    super(a);
  }
};
var Ne = class extends K {
  constructor(a) {
    super(a);
  }
};
Ne.A = [2];
var Oe = class extends K {
  constructor(a) {
    super(a);
  }
  getPlayerType() {
    var a = wd(this, 36);
    a = null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
    return null != a ? a : 0;
  }
  setHomeGroupInfo(a) {
    return H(this, Ne, 81, a);
  }
  clearLocationPlayabilityToken() {
    return zd(this, 89);
  }
};
Oe.A = [9, 66, 32, 86, 100, 101];
var Pe = class extends K {
    constructor(a) {
      super(a);
    }
    getKey() {
      return Od(this, 1);
    }
  },
  Qe = [2, 3, 4, 5, 6];
var Re = class extends K {
  constructor(a) {
    super(a);
  }
};
Re.A = [15, 26, 28];
var Se = class extends K {
  constructor(a) {
    super(a);
  }
};
Se.A = [5];
var Te = class extends K {
  constructor(a) {
    super(a);
  }
};
var Ue = class extends K {
  constructor(a) {
    super(a);
  }
  setSafetyMode(a) {
    return J(this, 5, a);
  }
};
Ue.A = [12];
var Ve = class extends K {
  constructor(a) {
    super(a);
  }
  j(a) {
    return H(this, Oe, 1, a);
  }
};
Ve.A = [12];
var We = class extends K {
  constructor(a) {
    super(a);
  }
  getKey() {
    return Od(this, 1);
  }
};
var Xe = class extends K {
  constructor(a) {
    super(a);
  }
};
Xe.A = [4, 5];
var Ye = class extends K {
  constructor(a) {
    super(a);
  }
};
var Ze = class extends K {
    constructor(a) {
      super(a);
    }
  },
  $e = [2, 3, 4, 5];
var af = class extends K {
  constructor(a) {
    super(a);
  }
};
var bf = class extends K {
  constructor(a) {
    super(a);
  }
};
var cf = class extends K {
  constructor(a) {
    super(a);
  }
};
var df = class extends K {
  constructor(a) {
    super(a);
  }
};
df.A = [10, 17];
var ef = class extends K {
  constructor(a) {
    super(a);
  }
};
var F = class extends K {
  constructor(a) {
    super(a);
  }
  setTrackingParams(a) {
    if (null != a)
      if ("string" === typeof a) a = a ? new Zb(a, Vb) : Yb();
      else if (a.constructor !== Zb)
        if (Tb(a)) a = a.length ? new Zb(new Uint8Array(a), Vb) : Yb();
        else throw Error();
    return zd(this, 1, a);
  }
};
var ff = class extends K {
  constructor(a) {
    super(a);
  }
};
var gf = class extends K {
  constructor(a) {
    super(a);
  }
};
var hf = class extends K {
  constructor(a) {
    super(a);
  }
  getVideoData() {
    return Hd(this, gf, 15);
  }
};
hf.A = [4];
function jf(a, b) {
  H(a, F, 1, b);
}
var kf = class extends K {
  constructor(a) {
    super(a);
  }
};
function lf(a, b) {
  return H(a, F, 1, b);
}
var mf = class extends K {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 2, a);
  }
};
function nf(a, b) {
  return H(a, F, 2, b);
}
var of = class extends K {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
};
of.A = [3];
var pf = class extends K {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
  hasVe() {
    return Ad(this);
  }
};
var qf = class extends K {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
  hasVe() {
    return Ad(this);
  }
};
var rf = class extends K {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
  hasVe() {
    return Ad(this);
  }
};
var sf = class extends K {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
  hasVe() {
    return Ad(this);
  }
};
var tf = class extends K {
  constructor(a) {
    super(a);
  }
};
var uf = class extends K {
  constructor(a) {
    super(a);
  }
};
var N = class extends K {
    constructor(a) {
      super(a, 497);
    }
  },
  vf = [
    2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74,
    76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136,
    146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184,
    188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
    204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234,
    240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261,
    266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314,
    319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344,
    348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369,
    370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411,
    412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431,
    439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486,
    491, 495, 496,
  ];
var wf = {
  ub: 0,
  ab: 1,
  hb: 2,
  ib: 4,
  ob: 8,
  jb: 16,
  kb: 32,
  tb: 64,
  sb: 128,
  cb: 256,
  fb: 512,
  mb: 1024,
  eb: 2048,
  gb: 4096,
  bb: 8192,
  lb: 16384,
  pb: 32768,
  nb: 65536,
  qb: 131072,
  rb: 262144,
};
var xf = class extends K {
  constructor(a) {
    super(a);
  }
};
var yf = class extends K {
    constructor(a) {
      super(a);
    }
    setVideoId(a) {
      return Ed(this, 1, Qd, ed(a));
    }
    getPlaylistId() {
      return Pd(this, 2);
    }
  },
  Qd = [1, 2];
var zf = class extends K {
  constructor() {
    super();
  }
};
zf.A = [3];
var Af = new Fe("recordNotificationInteractionsEndpoint");
var Bf = ["notification/convert_endpoint_to_url"],
  Cf = ["notification/record_interactions"],
  Df = ["notification_registration/set_registration"];
var Ef = (a) =>
  self
    .btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
var Ff = ["notifications_register", "notifications_check_registration"];
var Gf = class extends Error {
  constructor(a, ...b) {
    super(a);
    this.args = [...b];
  }
};
let Hf = null;
function O(a, b) {
  const c = {};
  c.key = a;
  c.value = b;
  return If().then(
    (d) =>
      new Promise((e, f) => {
        try {
          const g = d
            .transaction("swpushnotificationsstore", "readwrite")
            .objectStore("swpushnotificationsstore")
            .put(c);
          g.onsuccess = () => {
            e();
          };
          g.onerror = () => {
            f();
          };
        } catch (g) {
          f(g);
        }
      })
  );
}
function Jf() {
  return O("IndexedDBCheck", "testing IndexedDB")
    .then(() => Kf("IndexedDBCheck"))
    .then((a) =>
      "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()
    )
    .then(() => !0)
    .catch(() => !1);
}
function Kf(a) {
  const b = new Gf("Error accessing DB");
  return If().then(
    (c) =>
      new Promise((d, e) => {
        try {
          const f = c
            .transaction("swpushnotificationsstore")
            .objectStore("swpushnotificationsstore")
            .get(a);
          f.onsuccess = () => {
            const g = f.result;
            d(g ? g.value : null);
          };
          f.onerror = () => {
            b.params = { key: a, source: "onerror" };
            e(b);
          };
        } catch (f) {
          (b.params = { key: a, thrownError: String(f) }), e(b);
        }
      }),
    () => null
  );
}
function If() {
  return Hf
    ? Promise.resolve(Hf)
    : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
          const d = c.result;
          if (d.objectStoreNames.contains("swpushnotificationsstore"))
            (Hf = d), a(Hf);
          else
            return self.indexedDB.deleteDatabase("swpushnotificationsdb"), If();
        };
        c.onupgradeneeded = Lf;
      });
}
function Lf(a) {
  a = a.target.result;
  a.objectStoreNames.contains("swpushnotificationsstore") &&
    a.deleteObjectStore("swpushnotificationsstore");
  a.createObjectStore("swpushnotificationsstore", { keyPath: "key" });
}
const Mf = {
  WEB_UNPLUGGED: "^unplugged/",
  WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
  WEB_UNPLUGGED_OPS: "^unplugged/",
  WEB_UNPLUGGED_PUBLIC: "^unplugged/",
  WEB_CREATOR: "^creator/",
  WEB_KIDS: "^kids/",
  WEB_EXPERIMENTS: "^experiments/",
  WEB_MUSIC: "^music/",
  WEB_REMIX: "^music/",
  WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
  WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/",
};
function Nf(a) {
  if (1 === a.length) return a[0];
  var b = Mf.UNKNOWN_INTERFACE;
  if (b) {
    b = new RegExp(b);
    for (var c of a) if (b.exec(c)) return c;
  }
  const d = [];
  Object.entries(Mf).forEach(([e, f]) => {
    "UNKNOWN_INTERFACE" !== e && d.push(f);
  });
  c = new RegExp(d.join("|"));
  a.sort((e, f) => e.length - f.length);
  for (const e of a) if (!c.exec(e)) return e;
  return a[0];
}
function Of(a) {
  return `/youtubei/v1/${Nf(a)}`;
}
var Pf = class extends K {
  constructor(a) {
    super(a);
  }
};
var Qf = class extends K {
  constructor(a) {
    super(a, 0, "yt.sw.adr");
  }
};
const Rf = t.window;
let Sf, Tf;
const Uf =
  (null == Rf ? void 0 : null == (Sf = Rf.yt) ? void 0 : Sf.config_) ||
  (null == Rf ? void 0 : null == (Tf = Rf.ytcfg) ? void 0 : Tf.data_) ||
  {};
w("yt.config_", Uf);
function Q(...a) {
  a = arguments;
  1 < a.length ? (Uf[a[0]] = a[1]) : 1 === a.length && Object.assign(Uf, a[0]);
}
function R(a, b) {
  return a in Uf ? Uf[a] : b;
}
function Vf() {
  return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
}
function Wf() {
  const a = Uf.EXPERIMENT_FLAGS;
  return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0;
}
const Xf = [];
function Yf(a) {
  Xf.forEach((b) => b(a));
}
function Zf(a) {
  return a && window.yterr
    ? function () {
        try {
          return a.apply(this, arguments);
        } catch (b) {
          $f(b);
        }
      }
    : a;
}
function $f(a) {
  var b = v("yt.logging.errors.log");
  b
    ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0)
    : ((b = R("ERRORS", [])),
      b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]),
      Q("ERRORS", b));
  Yf(a);
}
function ag(a) {
  var b = v("yt.logging.errors.log");
  b
    ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0)
    : ((b = R("ERRORS", [])),
      b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]),
      Q("ERRORS", b));
}
const bg = /^[\w.]*$/,
  cg = { q: !0, search_query: !0 };
function dg(a, b) {
  b = a.split(b);
  const c = {};
  for (let f = 0, g = b.length; f < g; f++) {
    const h = b[f].split("=");
    if ((1 === h.length && h[0]) || 2 === h.length)
      try {
        const k = eg(h[0] || ""),
          l = eg(h[1] || "");
        if (k in c) {
          const q = c[k];
          Array.isArray(q) ? za(q, l) : (c[k] = [q, l]);
        } else c[k] = l;
      } catch (k) {
        var d = k,
          e = h[0];
        const l = String(dg);
        d.args = [
          { key: e, value: h[1], query: a, method: fg === l ? "unchanged" : l },
        ];
        cg.hasOwnProperty(e) || ag(d);
      }
  }
  return c;
}
const fg = String(dg);
function gg(a) {
  "?" === a.charAt(0) && (a = a.substring(1));
  return dg(a, "&");
}
function hg(a, b, c) {
  var d = a.split("#", 2);
  a = d[0];
  d = 1 < d.length ? "#" + d[1] : "";
  var e = a.split("?", 2);
  a = e[0];
  e = gg(e[1] || "");
  for (var f in b) (!c && null !== e && f in e) || (e[f] = b[f]);
  b = a;
  a = Na(e);
  a
    ? ((c = b.indexOf("#")),
      0 > c && (c = b.length),
      (f = b.indexOf("?")),
      0 > f || f > c ? ((f = c), (e = "")) : (e = b.substring(f + 1, c)),
      (b = [b.slice(0, f), e, b.slice(c)]),
      (c = b[1]),
      (b[1] = a ? (c ? c + "&" + a : a) : c),
      (a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]))
    : (a = b);
  return a + d;
}
function ig(a) {
  if (!b) var b = window.location.href;
  const c = a.match(Ka)[1] || null,
    d = La(a.match(Ka)[3] || null);
  c && d
    ? ((a = a.match(Ka)),
      (b = b.match(Ka)),
      (a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]))
    : (a = d
        ? La(b.match(Ka)[3] || null) === d &&
          (Number(b.match(Ka)[4] || null) || null) ===
            (Number(a.match(Ka)[4] || null) || null)
        : !0);
  return a;
}
function eg(a) {
  return a && a.match(bg) ? a : decodeURIComponent(a.replace(/\+/g, " "));
}
function jg(a, b) {
  "function" === typeof a && (a = Zf(a));
  return window.setTimeout(a, b);
}
var kg =
    "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(
      " "
    ),
  lg = [...kg, "client_dev_set_cookie"];
function S(a) {
  a = mg(a);
  return "string" === typeof a && "false" === a ? !1 : !!a;
}
function T(a, b) {
  a = mg(a);
  return void 0 === a && void 0 !== b ? b : Number(a || 0);
}
function ng() {
  return R("EXPERIMENTS_TOKEN", "");
}
function mg(a) {
  return R("EXPERIMENT_FLAGS", {})[a];
}
function og() {
  const a = [],
    b = R("EXPERIMENTS_FORCED_FLAGS", {});
  for (var c of Object.keys(b)) a.push({ key: c, value: String(b[c]) });
  c = R("EXPERIMENT_FLAGS", {});
  for (const d of Object.keys(c))
    d.startsWith("force_") &&
      void 0 === b[d] &&
      a.push({ key: d, value: String(c[d]) });
  return a;
}
[...kg];
let pg = !1;
function qg(a, b) {
  const c = { method: b.method || "GET", credentials: "same-origin" };
  b.headers && (c.headers = b.headers);
  a = rg(a, b);
  const d = sg(a, b);
  d && (c.body = d);
  b.withCredentials && (c.credentials = "include");
  const e = b.context || t;
  let f = !1,
    g;
  fetch(a, c)
    .then((h) => {
      if (!f) {
        f = !0;
        g && window.clearTimeout(g);
        var k = h.ok,
          l = (q) => {
            q = q || {};
            k
              ? b.onSuccess && b.onSuccess.call(e, q, h)
              : b.onError && b.onError.call(e, q, h);
            b.onFinish && b.onFinish.call(e, q, h);
          };
        "JSON" === (b.format || "JSON") &&
        (k || (400 <= h.status && 500 > h.status))
          ? h.json().then(l, () => {
              l(null);
            })
          : l(null);
      }
    })
    .catch(() => {
      b.onError && b.onError.call(e, {}, {});
    });
  a = b.timeout || 0;
  b.onFetchTimeout &&
    0 < a &&
    (g = jg(() => {
      f ||
        ((f = !0),
        window.clearTimeout(g),
        b.onFetchTimeout.call(b.context || t));
    }, a));
}
function rg(a, b) {
  b.includeDomain &&
    (a =
      document.location.protocol +
      "//" +
      document.location.hostname +
      (document.location.port ? ":" + document.location.port : "") +
      a);
  const c = R("XSRF_FIELD_NAME");
  if ((b = b.urlParams)) b[c] && delete b[c], (a = hg(a, b || {}, !0));
  return a;
}
function sg(a, b) {
  const c = R("XSRF_FIELD_NAME"),
    d = R("XSRF_TOKEN");
  var e = b.postBody || "",
    f = b.postParams;
  const g = R("XSRF_FIELD_NAME");
  let h;
  b.headers && (h = b.headers["Content-Type"]);
  b.excludeXsrf ||
    (La(a.match(Ka)[3] || null) &&
      !b.withCredentials &&
      La(a.match(Ka)[3] || null) !== document.location.hostname) ||
    "POST" !== b.method ||
    (h && "application/x-www-form-urlencoded" !== h) ||
    (b.postParams && b.postParams[g]) ||
    (f || (f = {}), (f[c] = d));
  ((S("ajax_parse_query_data_only_when_filled") &&
    f &&
    0 < Object.keys(f).length) ||
    f) &&
    "string" === typeof e &&
    ((e = gg(e)),
    Da(e, f),
    (e =
      b.postBodyFormat && "JSON" === b.postBodyFormat
        ? JSON.stringify(e)
        : Na(e)));
  f = e || (f && !Aa(f));
  !pg &&
    f &&
    "POST" !== b.method &&
    ((pg = !0), $f(Error("AJAX request with postData should use POST")));
  return e;
}
const tg = [
  {
    ea: (a) => `Cannot read property '${a.key}'`,
    X: {
      Error: [
        {
          u: /(Permission denied) to access property "([^']+)"/,
          groups: ["reason", "key"],
        },
      ],
      TypeError: [
        {
          u: /Cannot read property '([^']+)' of (null|undefined)/,
          groups: ["key", "value"],
        },
        {
          u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
          groups: ["value", "key"],
        },
        {
          u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
          groups: ["value", "key"],
        },
        {
          u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
          groups: ["key"],
        },
        {
          u: /Unable to get property '([^']+)' of (undefined or null) reference/,
          groups: ["key", "value"],
        },
        {
          u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
          groups: ["value", "base", "key"],
        },
      ],
    },
  },
  {
    ea: (a) => `Cannot call '${a.key}'`,
    X: {
      TypeError: [
        {
          u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
          groups: ["base", "key"],
        },
        {
          u: /([^ ]+) called on (null or undefined)/,
          groups: ["key", "value"],
        },
        { u: /Object (.*) has no method '([^ ]+)'/, groups: ["base", "key"] },
        {
          u: /Object doesn't support property or method '([^ ]+)'/,
          groups: ["key"],
        },
        {
          u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
          groups: ["key"],
        },
        {
          u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
          groups: ["key"],
        },
      ],
    },
  },
  {
    ea: (a) => `${a.key} is not defined`,
    X: {
      ReferenceError: [
        { u: /(.*) is not defined/, groups: ["key"] },
        { u: /Can't find variable: (.*)/, groups: ["key"] },
      ],
    },
  },
];
var vg = { H: [], G: [{ callback: ug, weight: 500 }] };
function ug(a) {
  if ("JavaException" === a.name) return !0;
  a = a.stack;
  return (
    a.includes("chrome://") ||
    a.includes("chrome-extension://") ||
    a.includes("moz-extension://")
  );
}
function wg() {
  if (!xg) {
    var a = (xg = new yg());
    a.H.length = 0;
    a.G.length = 0;
    zg(a, vg);
  }
  return xg;
}
function zg(a, b) {
  b.H && a.H.push.apply(a.H, b.H);
  b.G && a.G.push.apply(a.G, b.G);
}
var yg = class {
    constructor() {
      this.G = [];
      this.H = [];
    }
  },
  xg;
const Ag = new L();
function Bg(a) {
  const b = a.length;
  let c = 0;
  const d = () => a.charCodeAt(c++);
  do {
    var e = Cg(d);
    if (Infinity === e) break;
    const f = e >> 3;
    switch (e & 7) {
      case 0:
        e = Cg(d);
        if (2 === f) return e;
        break;
      case 1:
        if (2 === f) return;
        c += 8;
        break;
      case 2:
        e = Cg(d);
        if (2 === f) return a.substr(c, e);
        c += e;
        break;
      case 5:
        if (2 === f) return;
        c += 4;
        break;
      default:
        return;
    }
  } while (c < b);
}
function Cg(a) {
  let b = a(),
    c = b & 127;
  if (128 > b) return c;
  b = a();
  c |= (b & 127) << 7;
  if (128 > b) return c;
  b = a();
  c |= (b & 127) << 14;
  if (128 > b) return c;
  b = a();
  return 128 > b ? c | ((b & 127) << 21) : Infinity;
}
function Dg(a, b, c, d) {
  if (a)
    if (Array.isArray(a)) {
      var e = d;
      for (
        d = 0;
        d < a.length && !(a[d] && ((e += Eg(d, a[d], b, c)), 500 < e));
        d++
      );
      d = e;
    } else if ("object" === typeof a)
      for (e in a) {
        if (a[e]) {
          var f = e;
          var g = a[e],
            h = b,
            k = c;
          f =
            "string" !== typeof g ||
            ("clickTrackingParams" !== f && "trackingParams" !== f)
              ? 0
              : (g = Bg(atob(g.replace(/-/g, "+").replace(/_/g, "/"))))
              ? Eg(`${f}.ve`, g, h, k)
              : 0;
          d += f;
          d += Eg(e, a[e], b, c);
          if (500 < d) break;
        }
      }
    else (c[b] = Fg(a)), (d += c[b].length);
  else (c[b] = Fg(a)), (d += c[b].length);
  return d;
}
function Eg(a, b, c, d) {
  c += `.${a}`;
  a = Fg(b);
  d[c] = a;
  return c.length + a.length;
}
function Fg(a) {
  try {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(
      0,
      500
    );
  } catch (b) {
    return `unable to serialize ${typeof a} (${b.message})`;
  }
}
function Gg() {
  Hg.h || (Hg.h = new Hg());
  return Hg.h;
}
function Ig(a, b) {
  a = {};
  var c = [],
    d = oe(String(t.location.href));
  var e = [];
  var f = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
  ve() && (f = f || t.__1PSAPISID);
  if (f) f = !0;
  else {
    if ("undefined" !== typeof document) {
      var g = new ue();
      f =
        g.get("SAPISID") ||
        g.get("APISID") ||
        g.get("__Secure-3PAPISID") ||
        g.get("SID") ||
        g.get("OSID");
      ve() && (f = f || g.get("__Secure-1PAPISID"));
    }
    f = !!f;
  }
  f &&
    ((g = (f = d =
      0 == d.indexOf("https:") ||
      0 == d.indexOf("chrome-extension:") ||
      0 == d.indexOf("moz-extension:"))
      ? t.__SAPISID
      : t.__APISID),
    g ||
      "undefined" === typeof document ||
      ((g = new ue()),
      (g = g.get(f ? "SAPISID" : "APISID") || g.get("__Secure-3PAPISID"))),
    (f = g ? qe(g, f ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f),
    d &&
      ve() &&
      ((d = we("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) &&
        e.push(d),
      (c = we("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) &&
        e.push(c)));
  if ((e = 0 == e.length ? null : e.join(" ")))
    (a.Authorization = e),
      (e = b = null == b ? void 0 : b.sessionIndex),
      void 0 === e &&
        ((e = Number(R("SESSION_INDEX", 0))), (e = isNaN(e) ? 0 : e)),
      S("voice_search_auth_header_removal") ||
        (a["X-Goog-AuthUser"] = e.toString()),
      "INNERTUBE_HOST_OVERRIDE" in Uf ||
        (a["X-Origin"] = window.location.origin),
      void 0 === b &&
        "DELEGATED_SESSION_ID" in Uf &&
        (a["X-Goog-PageId"] = R("DELEGATED_SESSION_ID"));
  return a;
}
var Hg = class {
  constructor() {
    this.Na = !0;
  }
};
var Jg = { identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN" };
function Kg(a) {
  switch (a) {
    case "DESKTOP":
      return 1;
    case "UNKNOWN_PLATFORM":
      return 0;
    case "TV":
      return 2;
    case "GAME_CONSOLE":
      return 3;
    case "MOBILE":
      return 4;
    case "TABLET":
      return 5;
  }
}
w("ytglobal.prefsUserPrefsPrefs_", v("ytglobal.prefsUserPrefsPrefs_") || {});
function Lg() {
  if (void 0 !== R("DATASYNC_ID")) return R("DATASYNC_ID");
  throw new Gf("Datasync ID not set", "unknown");
}
function Mg(a, b) {
  return Ng(a, 0, b);
}
function Og(a) {
  const b = v("yt.scheduler.instance.addImmediateJob");
  b ? b(a) : a();
}
var Pg = class {
  h(a) {
    Ng(a, 1);
  }
};
function Qg() {
  Rg.h || (Rg.h = new Rg());
  return Rg.h;
}
function Ng(a, b, c) {
  void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
  const d = v("yt.scheduler.instance.addJob");
  return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : jg(a, c || 0);
}
var Rg = class extends Pg {
    T(a) {
      if (void 0 === a || !Number.isNaN(Number(a))) {
        var b = v("yt.scheduler.instance.cancelJob");
        b ? b(a) : window.clearTimeout(a);
      }
    }
    start() {
      const a = v("yt.scheduler.instance.start");
      a && a();
    }
  },
  Sg = Qg();
const Tg = [];
let Ug,
  Vg = !1;
function Wg(a) {
  Vg ||
    (Ug
      ? Ug.handleError(a)
      : (Tg.push({ type: "ERROR", payload: a }), 10 < Tg.length && Tg.shift()));
}
function Xg(a, b) {
  Vg ||
    (Ug
      ? Ug.U(a, b)
      : (Tg.push({ type: "EVENT", eventType: a, payload: b }),
        10 < Tg.length && Tg.shift()));
}
function Yg(a) {
  if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}
function Zg(a) {
  return a.substr(0, a.indexOf(":")) || a;
}
const $g = {
    AUTH_INVALID: "No user identifier specified.",
    EXPLICIT_ABORT: "Transaction was explicitly aborted.",
    IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
    MISSING_INDEX: "Index not created.",
    MISSING_OBJECT_STORES: "Object stores not created.",
    DB_DELETED_BY_MISSING_OBJECT_STORES:
      "Database is deleted because expected object stores were not created.",
    DB_REOPENED_BY_MISSING_OBJECT_STORES:
      "Database is reopened because expected object stores were not created.",
    UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
    QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
    QUOTA_MAYBE_EXCEEDED:
      "The current transaction may have failed because of exceeding quota limitations.",
    EXECUTE_TRANSACTION_ON_CLOSED_DB:
      "Can't start a transaction on a closed database",
    INCOMPATIBLE_DB_VERSION:
      "The binary is incompatible with the database version",
  },
  ah = {
    AUTH_INVALID: "ERROR",
    EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
    EXPLICIT_ABORT: "IGNORED",
    IDB_NOT_SUPPORTED: "ERROR",
    MISSING_INDEX: "WARNING",
    MISSING_OBJECT_STORES: "ERROR",
    DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
    DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
    QUOTA_EXCEEDED: "WARNING",
    QUOTA_MAYBE_EXCEEDED: "WARNING",
    UNKNOWN_ABORT: "WARNING",
    INCOMPATIBLE_DB_VERSION: "WARNING",
  },
  bh = {
    AUTH_INVALID: !1,
    EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
    EXPLICIT_ABORT: !1,
    IDB_NOT_SUPPORTED: !1,
    MISSING_INDEX: !1,
    MISSING_OBJECT_STORES: !1,
    DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
    DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
    QUOTA_EXCEEDED: !1,
    QUOTA_MAYBE_EXCEEDED: !0,
    UNKNOWN_ABORT: !0,
    INCOMPATIBLE_DB_VERSION: !1,
  };
var U = class extends Gf {
    constructor(a, b = {}, c = $g[a], d = ah[a], e = bh[a]) {
      super(
        c,
        Object.assign(
          {},
          {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a,
          },
          b
        )
      );
      this.type = a;
      this.message = c;
      this.level = d;
      this.h = e;
      Object.setPrototypeOf(this, U.prototype);
    }
  },
  ch = class extends U {
    constructor(a, b) {
      super(
        "MISSING_OBJECT_STORES",
        { expectedObjectStores: b, foundObjectStores: a },
        $g.MISSING_OBJECT_STORES
      );
      Object.setPrototypeOf(this, ch.prototype);
    }
  },
  dh = class extends Error {
    constructor(a, b) {
      super();
      this.index = a;
      this.objectStore = b;
      Object.setPrototypeOf(this, dh.prototype);
    }
  };
const eh = [
  "The database connection is closing",
  "Can't start a transaction on a closed database",
  "A mutation operation was attempted on a database that did not allow mutations",
];
function fh(a, b, c, d) {
  b = Zg(b);
  let e;
  e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
  if (e instanceof U) return e;
  a = { objectStoreNames: c, dbName: b, dbVersion: d };
  if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
  if (Fb && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
  if (e instanceof dh)
    return new U(
      "MISSING_INDEX",
      Object.assign({}, a, { objectStore: e.objectStore, index: e.index })
    );
  if ("InvalidStateError" === e.name && eh.some((f) => e.message.includes(f)))
    return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB", a);
  if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
  e.args = [Object.assign({}, a, { name: "IdbError", Ub: e.name })];
  e.level = "WARNING";
  return e;
}
function gh(a, b, c) {
  return new U("IDB_NOT_SUPPORTED", {
    context: { caller: a, publicName: b, version: c, hasSucceededOnce: void 0 },
  });
}
function hh(a) {
  if (!a) throw Error();
  throw a;
}
function ih(a) {
  return a;
}
var jh = class {
  constructor(a) {
    this.h = a;
  }
};
function kh(a, b, c, d, e) {
  try {
    if ("FULFILLED" !== a.state.status)
      throw Error("calling handleResolve before the promise is fulfilled.");
    const f = c(a.state.value);
    f instanceof lh ? mh(a, b, f, d, e) : d(f);
  } catch (f) {
    e(f);
  }
}
function nh(a, b, c, d, e) {
  try {
    if ("REJECTED" !== a.state.status)
      throw Error("calling handleReject before the promise is rejected.");
    const f = c(a.state.reason);
    f instanceof lh ? mh(a, b, f, d, e) : d(f);
  } catch (f) {
    e(f);
  }
}
function mh(a, b, c, d, e) {
  b === c
    ? e(new TypeError("Circular promise chain detected."))
    : c.then(
        (f) => {
          f instanceof lh ? mh(a, b, f, d, e) : d(f);
        },
        (f) => {
          e(f);
        }
      );
}
var lh = class {
  constructor(a) {
    this.state = { status: "PENDING" };
    this.h = [];
    this.i = [];
    a = a.h;
    const b = (d) => {
        if ("PENDING" === this.state.status) {
          this.state = { status: "FULFILLED", value: d };
          for (const e of this.h) e();
        }
      },
      c = (d) => {
        if ("PENDING" === this.state.status) {
          this.state = { status: "REJECTED", reason: d };
          for (const e of this.i) e();
        }
      };
    try {
      a(b, c);
    } catch (d) {
      c(d);
    }
  }
  static all(a) {
    return new lh(
      new jh((b, c) => {
        const d = [];
        let e = a.length;
        0 === e && b(d);
        for (let f = 0; f < a.length; ++f)
          lh.resolve(a[f])
            .then((g) => {
              d[f] = g;
              e--;
              0 === e && b(d);
            })
            .catch((g) => {
              c(g);
            });
      })
    );
  }
  static resolve(a) {
    return new lh(
      new jh((b, c) => {
        a instanceof lh ? a.then(b, c) : b(a);
      })
    );
  }
  then(a, b) {
    const c = null != a ? a : ih,
      d = null != b ? b : hh;
    return new lh(
      new jh((e, f) => {
        "PENDING" === this.state.status
          ? (this.h.push(() => {
              kh(this, this, c, e, f);
            }),
            this.i.push(() => {
              nh(this, this, d, e, f);
            }))
          : "FULFILLED" === this.state.status
          ? kh(this, this, c, e, f)
          : "REJECTED" === this.state.status && nh(this, this, d, e, f);
      })
    );
  }
  catch(a) {
    return this.then(void 0, a);
  }
};
function oh(a, b, c) {
  const d = () => {
      try {
        a.removeEventListener("success", e), a.removeEventListener("error", f);
      } catch (g) {}
    },
    e = () => {
      b(a.result);
      d();
    },
    f = () => {
      c(a.error);
      d();
    };
  a.addEventListener("success", e);
  a.addEventListener("error", f);
}
function ph(a) {
  return new Promise((b, c) => {
    oh(a, b, c);
  });
}
function V(a) {
  return new lh(
    new jh((b, c) => {
      oh(a, b, c);
    })
  );
}
function qh(a, b) {
  return new lh(
    new jh((c, d) => {
      const e = () => {
        const f = a ? b(a) : null;
        f
          ? f.then((g) => {
              a = g;
              e();
            }, d)
          : c();
      };
      e();
    })
  );
}
const rh = window;
var W =
  rh.ytcsi && rh.ytcsi.now
    ? rh.ytcsi.now
    : rh.performance &&
      rh.performance.timing &&
      rh.performance.now &&
      rh.performance.timing.navigationStart
    ? () => rh.performance.timing.navigationStart + rh.performance.now()
    : () => new Date().getTime();
function sh(a, b, c, d) {
  return r(function* () {
    const e = { mode: "readonly", C: !1, tag: "IDB_TRANSACTION_TAG_UNKNOWN" };
    "string" === typeof c ? (e.mode = c) : Object.assign(e, c);
    a.transactionCount++;
    const f = e.C ? 3 : 1;
    let g = 0,
      h;
    for (; !h; ) {
      g++;
      const q = Math.round(W());
      try {
        var k = a.h.transaction(b, e.mode),
          l = d;
        const m = new th(k),
          p = yield uh(m, l),
          n = Math.round(W());
        vh(a, q, n, g, void 0, b.join(), e);
        return p;
      } catch (m) {
        l = Math.round(W());
        const p = fh(m, a.h.name, b.join(), a.h.version);
        if ((p instanceof U && !p.h) || g >= f)
          vh(a, q, l, g, p, b.join(), e), (h = p);
      }
    }
    return Promise.reject(h);
  });
}
function wh(a, b, c) {
  a = a.h.createObjectStore(b, c);
  return new xh(a);
}
function yh(a, b, c, d) {
  return sh(a, [b], { mode: "readwrite", C: !0 }, (e) => {
    e = e.objectStore(b);
    return V(e.h.put(c, d));
  });
}
function vh(a, b, c, d, e, f, g) {
  b = c - b;
  e
    ? (e instanceof U &&
        ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) &&
        Xg("QUOTA_EXCEEDED", {
          dbName: Zg(a.h.name),
          objectStoreNames: f,
          transactionCount: a.transactionCount,
          transactionMode: g.mode,
        }),
      e instanceof U &&
        "UNKNOWN_ABORT" === e.type &&
        ((c -= a.j),
        0 > c && c >= Math.pow(2, 31) && (c = 0),
        Xg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
          objectStoreNames: f,
          transactionDuration: b,
          transactionCount: a.transactionCount,
          dbDuration: c,
        }),
        (a.i = !0)),
      zh(a, !1, d, f, b, g.tag),
      Wg(e))
    : zh(a, !0, d, f, b, g.tag);
}
function zh(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
  Xg("TRANSACTION_ENDED", {
    objectStoreNames: d,
    connectionHasUnknownAbortedTransaction: a.i,
    duration: e,
    isSuccessful: b,
    tryCount: c,
    tag: f,
  });
}
var Ah = class {
  constructor(a, b) {
    this.h = a;
    this.options = b;
    this.transactionCount = 0;
    this.j = Math.round(W());
    this.i = !1;
  }
  add(a, b, c) {
    return sh(this, [a], { mode: "readwrite", C: !0 }, (d) =>
      d.objectStore(a).add(b, c)
    );
  }
  clear(a) {
    return sh(this, [a], { mode: "readwrite", C: !0 }, (b) =>
      b.objectStore(a).clear()
    );
  }
  close() {
    this.h.close();
    let a;
    (null == (a = this.options) ? 0 : a.closed) && this.options.closed();
  }
  count(a, b) {
    return sh(this, [a], { mode: "readonly", C: !0 }, (c) =>
      c.objectStore(a).count(b)
    );
  }
  delete(a, b) {
    return sh(this, [a], { mode: "readwrite", C: !0 }, (c) =>
      c.objectStore(a).delete(b)
    );
  }
  get(a, b) {
    return sh(this, [a], { mode: "readonly", C: !0 }, (c) =>
      c.objectStore(a).get(b)
    );
  }
  getAll(a, b, c) {
    return sh(this, [a], { mode: "readonly", C: !0 }, (d) =>
      d.objectStore(a).getAll(b, c)
    );
  }
  objectStoreNames() {
    return Array.from(this.h.objectStoreNames);
  }
  getName() {
    return this.h.name;
  }
};
function Bh(a, b, c) {
  a = a.h.openCursor(b.query, b.direction);
  return Ch(a).then((d) => qh(d, c));
}
function Dh(a, b) {
  return Bh(a, { query: b }, (c) => c.delete().then(() => Eh(c))).then(
    () => {}
  );
}
function Fh(a, b, c) {
  const d = [];
  return Bh(a, { query: b }, (e) => {
    if (!(void 0 !== c && d.length >= c)) return d.push(e.cursor.value), Eh(e);
  }).then(() => d);
}
var xh = class {
  constructor(a) {
    this.h = a;
  }
  add(a, b) {
    return V(this.h.add(a, b));
  }
  autoIncrement() {
    return this.h.autoIncrement;
  }
  clear() {
    return V(this.h.clear()).then(() => {});
  }
  count(a) {
    return V(this.h.count(a));
  }
  delete(a) {
    return a instanceof IDBKeyRange ? Dh(this, a) : V(this.h.delete(a));
  }
  get(a) {
    return V(this.h.get(a));
  }
  getAll(a, b) {
    return "getAll" in IDBObjectStore.prototype
      ? V(this.h.getAll(a, b))
      : Fh(this, a, b);
  }
  index(a) {
    try {
      return new Gh(this.h.index(a));
    } catch (b) {
      if (b instanceof Error && "NotFoundError" === b.name)
        throw new dh(a, this.h.name);
      throw b;
    }
  }
  getName() {
    return this.h.name;
  }
  keyPath() {
    return this.h.keyPath;
  }
};
function uh(a, b) {
  const c = new Promise((d, e) => {
    try {
      b(a)
        .then((f) => {
          d(f);
        })
        .catch(e);
    } catch (f) {
      e(f), a.abort();
    }
  });
  return Promise.all([c, a.done]).then(([d]) => d);
}
var th = class {
  constructor(a) {
    this.h = a;
    this.j = new Map();
    this.i = !1;
    this.done = new Promise((b, c) => {
      this.h.addEventListener("complete", () => {
        b();
      });
      this.h.addEventListener("error", (d) => {
        d.currentTarget === d.target && c(this.h.error);
      });
      this.h.addEventListener("abort", () => {
        var d = this.h.error;
        if (d) c(d);
        else if (!this.i) {
          d = U;
          var e = this.h.objectStoreNames;
          const f = [];
          for (let g = 0; g < e.length; g++) {
            const h = e.item(g);
            if (null === h)
              throw Error("Invariant: item in DOMStringList is null");
            f.push(h);
          }
          d = new d("UNKNOWN_ABORT", {
            objectStoreNames: f.join(),
            dbName: this.h.db.name,
            mode: this.h.mode,
          });
          c(d);
        }
      });
    });
  }
  abort() {
    this.h.abort();
    this.i = !0;
    throw new U("EXPLICIT_ABORT");
  }
  objectStore(a) {
    a = this.h.objectStore(a);
    let b = this.j.get(a);
    b || ((b = new xh(a)), this.j.set(a, b));
    return b;
  }
};
function Hh(a, b, c) {
  const { query: d = null, direction: e = "next" } = b;
  a = a.h.openCursor(d, e);
  return Ch(a).then((f) => qh(f, c));
}
function Ih(a, b, c) {
  const d = [];
  return Hh(a, { query: b }, (e) => {
    if (!(void 0 !== c && d.length >= c)) return d.push(e.cursor.value), Eh(e);
  }).then(() => d);
}
var Gh = class {
  constructor(a) {
    this.h = a;
  }
  count(a) {
    return V(this.h.count(a));
  }
  delete(a) {
    return Hh(this, { query: a }, (b) => b.delete().then(() => Eh(b)));
  }
  get(a) {
    return V(this.h.get(a));
  }
  getAll(a, b) {
    return "getAll" in IDBIndex.prototype
      ? V(this.h.getAll(a, b))
      : Ih(this, a, b);
  }
  getKey(a) {
    return V(this.h.getKey(a));
  }
  keyPath() {
    return this.h.keyPath;
  }
  unique() {
    return this.h.unique;
  }
};
function Ch(a) {
  return V(a).then((b) => (b ? new Jh(a, b) : null));
}
function Eh(a) {
  a.cursor.continue(void 0);
  return Ch(a.request);
}
function Kh(a) {
  a.cursor.advance(5);
  return Ch(a.request);
}
var Jh = class {
  constructor(a, b) {
    this.request = a;
    this.cursor = b;
  }
  delete() {
    return V(this.cursor.delete()).then(() => {});
  }
  getKey() {
    return this.cursor.key;
  }
  update(a) {
    return V(this.cursor.update(a));
  }
};
function Lh(a, b, c) {
  return new Promise((d, e) => {
    let f;
    f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
    const g = c.za,
      h = c.blocking,
      k = c.Oa,
      l = c.upgrade,
      q = c.closed;
    let m;
    const p = () => {
      m || (m = new Ah(f.result, { closed: q }));
      return m;
    };
    f.addEventListener("upgradeneeded", (n) => {
      try {
        if (null === n.newVersion)
          throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
        if (null === f.transaction)
          throw Error("Invariant: transaction on IDbOpenDbRequest is null");
        n.dataLoss &&
          "none" !== n.dataLoss &&
          Xg("IDB_DATA_CORRUPTED", {
            reason: n.dataLossMessage || "unknown reason",
            dbName: Zg(a),
          });
        const u = p(),
          z = new th(f.transaction);
        l && l(u, (C) => n.oldVersion < C && n.newVersion >= C, z);
        z.done.catch((C) => {
          e(C);
        });
      } catch (u) {
        e(u);
      }
    });
    f.addEventListener("success", () => {
      const n = f.result;
      h &&
        n.addEventListener("versionchange", () => {
          h(p());
        });
      n.addEventListener("close", () => {
        Xg("IDB_UNEXPECTEDLY_CLOSED", { dbName: Zg(a), dbVersion: n.version });
        k && k();
      });
      d(p());
    });
    f.addEventListener("error", () => {
      e(f.error);
    });
    g &&
      f.addEventListener("blocked", () => {
        g();
      });
  });
}
function Mh(a, b, c = {}) {
  return Lh(a, b, c);
}
function Nh(a, b = {}) {
  return r(function* () {
    try {
      const c = self.indexedDB.deleteDatabase(a),
        d = b.za;
      d &&
        c.addEventListener("blocked", () => {
          d();
        });
      yield ph(c);
    } catch (c) {
      throw fh(c, a, "", -1);
    }
  });
}
function Oh(a, b) {
  return new U("INCOMPATIBLE_DB_VERSION", {
    dbName: a.name,
    oldVersion: a.options.version,
    newVersion: b,
  });
}
function Ph(a, b) {
  if (!b) throw gh("openWithToken", Zg(a.name));
  return a.open();
}
var Qh = class {
  constructor(a, b) {
    this.name = a;
    this.options = b;
    this.j = !0;
    this.m = this.l = 0;
  }
  i(a, b, c = {}) {
    return Mh(a, b, c);
  }
  delete(a = {}) {
    return Nh(this.name, a);
  }
  open() {
    if (!this.j) throw Oh(this);
    if (this.h) return this.h;
    let a;
    const b = () => {
        this.h === a && (this.h = void 0);
      },
      c = {
        blocking: (e) => {
          e.close();
        },
        closed: b,
        Oa: b,
        upgrade: this.options.upgrade,
      },
      d = () => {
        const e = this;
        return r(function* () {
          var f,
            g = null != (f = Error().stack) ? f : "";
          try {
            const k = yield e.i(e.name, e.options.version, c);
            f = k;
            var h = e.options;
            const l = [];
            for (const q of Object.keys(h.O)) {
              const { N: m, Zb: p = Number.MAX_VALUE } = h.O[q];
              !(f.h.version >= m) ||
                f.h.version >= p ||
                f.h.objectStoreNames.contains(q) ||
                l.push(q);
            }
            if (0 !== l.length) {
              const q = Object.keys(e.options.O),
                m = k.objectStoreNames();
              if (e.m < T("ytidb_reopen_db_retries", 0))
                return (
                  e.m++,
                  k.close(),
                  Wg(
                    new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                      dbName: e.name,
                      expectedObjectStores: q,
                      foundObjectStores: m,
                    })
                  ),
                  d()
                );
              if (e.l < T("ytidb_remake_db_retries", 1))
                return (
                  e.l++,
                  yield e.delete(),
                  Wg(
                    new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                      dbName: e.name,
                      expectedObjectStores: q,
                      foundObjectStores: m,
                    })
                  ),
                  d()
                );
              throw new ch(m, q);
            }
            return k;
          } catch (k) {
            if (
              k instanceof DOMException
                ? "VersionError" === k.name
                : "DOMError" in self && k instanceof DOMError
                ? "VersionError" === k.name
                : k instanceof Object &&
                  "message" in k &&
                  "An attempt was made to open a database using a lower version than the existing version." ===
                    k.message
            ) {
              g = yield e.i(
                e.name,
                void 0,
                Object.assign({}, c, { upgrade: void 0 })
              );
              h = g.h.version;
              if (void 0 !== e.options.version && h > e.options.version + 1)
                throw (g.close(), (e.j = !1), Oh(e, h));
              return g;
            }
            b();
            k instanceof Error &&
              !S("ytidb_async_stack_killswitch") &&
              (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n") + 1)}`);
            let l;
            throw fh(k, e.name, "", null != (l = e.options.version) ? l : -1);
          }
        });
      };
    return (this.h = a = d());
  }
};
const Rh = new Qh("YtIdbMeta", {
  O: { databases: { N: 1 } },
  upgrade(a, b) {
    b(1) && wh(a, "databases", { keyPath: "actualName" });
  },
});
function Sh(a, b) {
  return r(function* () {
    return sh(
      yield Ph(Rh, b),
      ["databases"],
      { C: !0, mode: "readwrite" },
      (c) => {
        const d = c.objectStore("databases");
        return d.get(a.actualName).then((e) => {
          if (
            e
              ? a.actualName !== e.actualName ||
                a.publicName !== e.publicName ||
                a.userIdentifier !== e.userIdentifier
              : 1
          )
            return V(d.h.put(a, void 0)).then(() => {});
        });
      }
    );
  });
}
function Th(a, b) {
  return r(function* () {
    if (a) return (yield Ph(Rh, b)).delete("databases", a);
  });
}
let Uh;
const Vh = new (class {
  constructor() {}
})(
  new (class {
    constructor() {}
  })()
);
function Wh() {
  return r(function* () {
    return !0;
  });
}
function Xh() {
  if (void 0 !== Uh) return Uh;
  Vg = !0;
  return (Uh = Wh().then((a) => {
    Vg = !1;
    return a;
  }));
}
function Yh() {
  return v("ytglobal.idbToken_") || void 0;
}
function Zh() {
  const a = Yh();
  return a
    ? Promise.resolve(a)
    : Xh().then((b) => {
        (b = b ? Vh : void 0) && w("ytglobal.idbToken_", b);
        return b;
      });
}
new ye();
function $h(a) {
  try {
    Lg();
    var b = !0;
  } catch (c) {
    b = !1;
  }
  if (!b) throw ((a = new U("AUTH_INVALID", { dbName: a })), Wg(a), a);
  b = Lg();
  return { actualName: `${a}:${b}`, publicName: a, userIdentifier: b };
}
function ai(a, b, c, d) {
  return r(function* () {
    var e,
      f = null != (e = Error().stack) ? e : "";
    e = yield Zh();
    if (!e)
      throw (
        ((e = gh("openDbImpl", a, b)),
        S("ytidb_async_stack_killswitch") ||
          (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n") + 1)}`),
        Wg(e),
        e)
      );
    Yg(a);
    f = c ? { actualName: a, publicName: a, userIdentifier: void 0 } : $h(a);
    try {
      return yield Sh(f, e), yield Mh(f.actualName, b, d);
    } catch (g) {
      try {
        yield Th(f.actualName, e);
      } catch (h) {}
      throw g;
    }
  });
}
function bi(a, b, c = {}) {
  return ai(a, b, !1, c);
}
function ci(a, b, c = {}) {
  return ai(a, b, !0, c);
}
function di(a, b = {}) {
  return r(function* () {
    const c = yield Zh();
    if (c) {
      Yg(a);
      var d = $h(a);
      yield Nh(d.actualName, b);
      yield Th(d.actualName, c);
    }
  });
}
function ei(a, b = {}) {
  return r(function* () {
    const c = yield Zh();
    c && (Yg(a), yield Nh(a, b), yield Th(a, c));
  });
}
function fi(a, b) {
  let c;
  return () => {
    c || (c = new gi(a, b));
    return c;
  };
}
var gi = class extends Qh {
  constructor(a, b) {
    super(a, b);
    this.options = b;
    Yg(a);
  }
  i(a, b, c = {}) {
    return (this.options.shared ? ci : bi)(a, b, Object.assign({}, c));
  }
  delete(a = {}) {
    return (this.options.shared ? ei : di)(this.name, a);
  }
};
function hi(a, b) {
  return fi(a, b);
}
var ii = hi("ytGcfConfig", {
  O: { coldConfigStore: { N: 1 }, hotConfigStore: { N: 1 } },
  shared: !1,
  upgrade(a, b) {
    b(1) &&
      (wh(a, "hotConfigStore", {
        keyPath: "key",
        autoIncrement: !0,
      }).h.createIndex("hotTimestampIndex", "timestamp", { unique: !1 }),
      wh(a, "coldConfigStore", {
        keyPath: "key",
        autoIncrement: !0,
      }).h.createIndex("coldTimestampIndex", "timestamp", { unique: !1 }));
  },
  version: 1,
});
function ji(a) {
  return Ph(ii(), a);
}
function ki(a, b, c) {
  return r(function* () {
    const d = { config: a, hashData: b, timestamp: W() },
      e = yield ji(c);
    yield e.clear("hotConfigStore");
    return yield yh(e, "hotConfigStore", d);
  });
}
function li(a, b, c, d) {
  return r(function* () {
    const e = { config: a, hashData: b, configData: c, timestamp: W() },
      f = yield ji(d);
    yield f.clear("coldConfigStore");
    return yield yh(f, "coldConfigStore", e);
  });
}
function mi(a) {
  return r(function* () {
    let b = void 0;
    yield sh(
      yield ji(a),
      ["coldConfigStore"],
      { mode: "readwrite", C: !0 },
      (c) =>
        Hh(
          c.objectStore("coldConfigStore").index("coldTimestampIndex"),
          { direction: "prev" },
          (d) => {
            b = d.cursor.value;
          }
        )
    );
    return b;
  });
}
function ni(a) {
  return r(function* () {
    let b = void 0;
    yield sh(
      yield ji(a),
      ["hotConfigStore"],
      { mode: "readwrite", C: !0 },
      (c) =>
        Hh(
          c.objectStore("hotConfigStore").index("hotTimestampIndex"),
          { direction: "prev" },
          (d) => {
            b = d.cursor.value;
          }
        )
    );
    return b;
  });
}
var oi = class extends Oa {
  constructor() {
    super();
    this.j = [];
    this.h = [];
    const a = v("yt.gcf.config.hotUpdateCallbacks");
    a
      ? ((this.j = [...a]), (this.h = a))
      : ((this.h = []), w("yt.gcf.config.hotUpdateCallbacks", this.h));
  }
  m() {
    for (const b of this.j) {
      var a = this.h;
      const c = a.indexOf(b);
      0 <= c && a.splice(c, 1);
    }
    this.j.length = 0;
    super.m();
  }
};
function pi(a, b, c) {
  return r(function* () {
    if (S("start_client_gcf")) {
      c && ((a.j = c), w("yt.gcf.config.hotConfigGroup", a.j || null));
      a.hotHashData = b;
      w("yt.gcf.config.hotHashData", a.hotHashData || null);
      var d = Yh();
      if (d) {
        if (!c) {
          var e;
          c = null == (e = yield ni(d)) ? void 0 : e.config;
        }
        yield ki(c, b, d);
      }
      if (c) {
        d = a.i;
        e = c;
        for (const f of d.h) f(e);
      }
    }
  });
}
function qi(a, b, c) {
  return r(function* () {
    if (S("start_client_gcf")) {
      a.coldHashData = b;
      w("yt.gcf.config.coldHashData", a.coldHashData || null);
      const d = Yh();
      if (d) {
        if (!c) {
          let e;
          c = null == (e = yield mi(d)) ? void 0 : e.config;
        }
        c && (yield li(c, b, c.configData, d));
      }
    }
  });
}
var ri = class {
  constructor() {
    this.h = 0;
    this.i = new oi();
  }
};
function si() {
  return "INNERTUBE_API_KEY" in Uf && "INNERTUBE_API_VERSION" in Uf;
}
function ti() {
  return {
    innertubeApiKey: R("INNERTUBE_API_KEY"),
    innertubeApiVersion: R("INNERTUBE_API_VERSION"),
    ca: R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
    Da: R("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
    Ea: R("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
    innertubeContextClientVersion: R("INNERTUBE_CONTEXT_CLIENT_VERSION"),
    ma: R("INNERTUBE_CONTEXT_HL"),
    la: R("INNERTUBE_CONTEXT_GL"),
    Fa: R("INNERTUBE_HOST_OVERRIDE") || "",
    Ha: !!R("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
    Ga: !!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
    appInstallData: R("SERIALIZED_CLIENT_CONFIG_DATA"),
  };
}
function ui(a) {
  const b = {
    client: {
      hl: a.ma,
      gl: a.la,
      clientName: a.Da,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.ca,
    },
  };
  navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
  var c = t.devicePixelRatio;
  c && 1 != c && (b.client.screenDensityFloat = String(c));
  c = ng();
  "" !== c && (b.client.experimentsToken = c);
  c = og();
  0 < c.length && (b.request = { internalExperimentFlags: c });
  vi(void 0, b);
  wi(a, void 0, b);
  S("start_client_gcf") && xi(void 0, b);
  R("DELEGATED_SESSION_ID") &&
    !S("pageid_as_header_web") &&
    (b.user = { onBehalfOfUser: R("DELEGATED_SESSION_ID") });
  !S("fill_delegate_context_in_gel_killswitch") &&
    (a = R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
    (b.user = Object.assign({}, b.user, { serializedDelegationContext: a }));
  a = Object;
  c = a.assign;
  var d = b.client,
    e = R("DEVICE", "");
  const f = {};
  for (const [g, h] of Object.entries(gg(e))) {
    e = g;
    const k = h;
    "cbrand" === e
      ? (f.deviceMake = k)
      : "cmodel" === e
      ? (f.deviceModel = k)
      : "cbr" === e
      ? (f.browserName = k)
      : "cbrver" === e
      ? (f.browserVersion = k)
      : "cos" === e
      ? (f.osName = k)
      : "cosver" === e
      ? (f.osVersion = k)
      : "cplatform" === e && (f.platform = k);
  }
  b.client = c.call(a, d, f);
  return b;
}
function vi(a, b) {
  const c = v("yt.embedded_player.embed_url");
  c &&
    (a
      ? ((b = Hd(a, Se, 7) || new Se()), I(b, 4, c), H(a, Se, 7, b))
      : b && (b.thirdParty = { embedUrl: c }));
}
function wi(a, b, c) {
  if (a.appInstallData)
    if (b) {
      let d;
      c = null != (d = Hd(b, Me, 62)) ? d : new Me();
      I(c, 6, a.appInstallData);
      H(b, Me, 62, c);
    } else
      c &&
        ((c.client.configInfo = c.client.configInfo || {}),
        (c.client.configInfo.appInstallData = a.appInstallData));
}
function yi(a, b, c = {}) {
  let d = {};
  R("EOM_VISITOR_DATA")
    ? (d = { "X-Goog-EOM-Visitor-Id": R("EOM_VISITOR_DATA") })
    : (d = { "X-Goog-Visitor-Id": c.visitorData || R("VISITOR_DATA", "") });
  if (b && b.includes("www.youtube-nocookie.com")) return d;
  b = c.Lb || R("AUTHORIZATION");
  b ||
    (a
      ? (b = `Bearer ${v("gapi.auth.getToken")().Kb}`)
      : ((a = Ig(Gg())),
        S("pageid_as_header_web") || delete a["X-Goog-PageId"],
        (d = Object.assign({}, d, a))));
  b && (d.Authorization = b);
  return d;
}
function xi(a, b) {
  if (!ri.h) {
    var c = new ri();
    ri.h = c;
  }
  c = ri.h;
  var d = W() - c.h;
  if (0 !== c.h && d < T("send_config_hash_timer")) c = void 0;
  else {
    d = v("yt.gcf.config.coldConfigData");
    var e = v("yt.gcf.config.hotHashData"),
      f = v("yt.gcf.config.coldHashData");
    d && e && f && (c.h = W());
    c = { coldConfigData: d, hotHashData: e, coldHashData: f };
  }
  if ((d = c))
    if (
      ((e = d.coldConfigData), (c = d.coldHashData), (d = d.hotHashData), a)
    ) {
      var g;
      b = null != (g = Hd(a, Me, 62)) ? g : new Me();
      g = I(b, 1, e);
      g = I(g, 3, c);
      I(g, 5, d);
      H(a, Me, 62, b);
    } else
      b &&
        ((b.client.configInfo = b.client.configInfo || {}),
        e && (b.client.configInfo.coldConfigData = e),
        c && (b.client.configInfo.coldHashData = c),
        d && (b.client.configInfo.hotHashData = d));
}
"undefined" !== typeof TextEncoder && new TextEncoder();
function zi(a) {
  this.version = 1;
  this.args = a;
}
function Ai() {
  var a = Bi;
  this.topic = "screen-created";
  this.h = a;
}
Ai.prototype.toString = function () {
  return this.topic;
};
const Ci = v("ytPubsub2Pubsub2Instance") || new L();
L.prototype.subscribe = L.prototype.M;
L.prototype.unsubscribeByKey = L.prototype.F;
L.prototype.publish = L.prototype.B;
L.prototype.clear = L.prototype.clear;
w("ytPubsub2Pubsub2Instance", Ci);
const Di = v("ytPubsub2Pubsub2SubscribedKeys") || {};
w("ytPubsub2Pubsub2SubscribedKeys", Di);
const Ei = v("ytPubsub2Pubsub2TopicToKeys") || {};
w("ytPubsub2Pubsub2TopicToKeys", Ei);
const Fi = v("ytPubsub2Pubsub2IsAsync") || {};
w("ytPubsub2Pubsub2IsAsync", Fi);
w("ytPubsub2Pubsub2SkipSubKey", null);
function Gi(a, b) {
  const c = Hi();
  c && c.publish.call(c, a.toString(), a, b);
}
function Ii(a) {
  var b = Ji;
  const c = Hi();
  if (!c) return 0;
  const d = c.subscribe(b.toString(), (e, f) => {
    var g = v("ytPubsub2Pubsub2SkipSubKey");
    (g && g == d) ||
      ((g = () => {
        if (Di[d])
          try {
            if (f && b instanceof Ai && b != e)
              try {
                var h = b.h,
                  k = f;
                if (!k.args || !k.version)
                  throw Error(
                    "yt.pubsub2.Data.deserialize(): serializedData is incomplete."
                  );
                try {
                  if (!h.pa) {
                    const n = new h();
                    h.pa = n.version;
                  }
                  var l = h.pa;
                } catch (n) {}
                if (!l || k.version != l)
                  throw Error(
                    "yt.pubsub2.Data.deserialize(): serializedData version is incompatible."
                  );
                try {
                  l = Reflect;
                  var q = l.construct;
                  {
                    var m = k.args;
                    const n = m.length;
                    if (0 < n) {
                      const u = Array(n);
                      for (k = 0; k < n; k++) u[k] = m[k];
                      var p = u;
                    } else p = [];
                  }
                  f = q.call(l, h, p);
                } catch (n) {
                  throw (
                    ((n.message =
                      "yt.pubsub2.Data.deserialize(): " + n.message),
                    n)
                  );
                }
              } catch (n) {
                throw (
                  ((n.message =
                    "yt.pubsub2.pubsub2 cross-binary conversion error for " +
                    b.toString() +
                    ": " +
                    n.message),
                  n)
                );
              }
            a.call(window, f);
          } catch (n) {
            $f(n);
          }
      }),
      Fi[b.toString()]
        ? v("yt.scheduler.instance")
          ? Sg.h(g)
          : jg(g, 0)
        : g());
  });
  Di[d] = !0;
  Ei[b.toString()] || (Ei[b.toString()] = []);
  Ei[b.toString()].push(d);
  return d;
}
function Ki() {
  var a = Li;
  const b = Ii(function (c) {
    a.apply(void 0, arguments);
    Mi(b);
  });
  return b;
}
function Mi(a) {
  const b = Hi();
  b &&
    ("number" === typeof a && (a = [a]),
    wa(a, (c) => {
      b.unsubscribeByKey(c);
      delete Di[c];
    }));
}
function Hi() {
  return v("ytPubsub2Pubsub2Instance");
}
let Ni = void 0,
  Oi = void 0;
var Pi = {
  accountStateChangeSignedIn: 23,
  accountStateChangeSignedOut: 24,
  delayedEventMetricCaptured: 11,
  latencyActionBaselined: 6,
  latencyActionInfo: 7,
  latencyActionTicked: 5,
  offlineTransferStatusChanged: 2,
  offlineImageDownload: 335,
  playbackStartStateChanged: 9,
  systemHealthCaptured: 3,
  mangoOnboardingCompleted: 10,
  mangoPushNotificationReceived: 230,
  mangoUnforkDbMigrationError: 121,
  mangoUnforkDbMigrationSummary: 122,
  mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
  mangoUnforkDbMigrationPhoneMetadata: 134,
  mangoUnforkDbMigrationPhoneStorage: 135,
  mangoUnforkDbMigrationStep: 142,
  mangoAsyncApiMigrationEvent: 223,
  mangoDownloadVideoResult: 224,
  mangoHomepageVideoCount: 279,
  mangoHomeV3State: 295,
  mangoImageClientCacheHitEvent: 273,
  sdCardStatusChanged: 98,
  framesDropped: 12,
  thumbnailHovered: 13,
  deviceRetentionInfoCaptured: 14,
  thumbnailLoaded: 15,
  backToAppEvent: 318,
  streamingStatsCaptured: 17,
  offlineVideoShared: 19,
  appCrashed: 20,
  youThere: 21,
  offlineStateSnapshot: 22,
  mdxSessionStarted: 25,
  mdxSessionConnected: 26,
  mdxSessionDisconnected: 27,
  bedrockResourceConsumptionSnapshot: 28,
  nextGenWatchWatchSwiped: 29,
  kidsAccountsSnapshot: 30,
  zeroStepChannelCreated: 31,
  tvhtml5SearchCompleted: 32,
  offlineSharePairing: 34,
  offlineShareUnlock: 35,
  mdxRouteDistributionSnapshot: 36,
  bedrockRepetitiveActionTimed: 37,
  unpluggedDegradationInfo: 229,
  uploadMp4HeaderMoved: 38,
  uploadVideoTranscoded: 39,
  uploadProcessorStarted: 46,
  uploadProcessorEnded: 47,
  uploadProcessorReady: 94,
  uploadProcessorRequirementPending: 95,
  uploadProcessorInterrupted: 96,
  uploadFrontendEvent: 241,
  assetPackDownloadStarted: 41,
  assetPackDownloaded: 42,
  assetPackApplied: 43,
  assetPackDeleted: 44,
  appInstallAttributionEvent: 459,
  playbackSessionStopped: 45,
  adBlockerMessagingShown: 48,
  distributionChannelCaptured: 49,
  dataPlanCpidRequested: 51,
  detailedNetworkTypeCaptured: 52,
  sendStateUpdated: 53,
  receiveStateUpdated: 54,
  sendDebugStateUpdated: 55,
  receiveDebugStateUpdated: 56,
  kidsErrored: 57,
  mdxMsnSessionStatsFinished: 58,
  appSettingsCaptured: 59,
  mdxWebSocketServerHttpError: 60,
  mdxWebSocketServer: 61,
  startupCrashesDetected: 62,
  coldStartInfo: 435,
  offlinePlaybackStarted: 63,
  liveChatMessageSent: 225,
  liveChatUserPresent: 434,
  liveChatBeingModerated: 457,
  liveCreationCameraUpdated: 64,
  liveCreationEncodingCaptured: 65,
  liveCreationError: 66,
  liveCreationHealthUpdated: 67,
  liveCreationVideoEffectsCaptured: 68,
  liveCreationStageOccured: 75,
  liveCreationBroadcastScheduled: 123,
  liveCreationArchiveReplacement: 149,
  liveCreationCostreamingConnection: 421,
  liveCreationStreamWebrtcStats: 288,
  mdxSessionRecoveryStarted: 69,
  mdxSessionRecoveryCompleted: 70,
  mdxSessionRecoveryStopped: 71,
  visualElementShown: 72,
  visualElementHidden: 73,
  visualElementGestured: 78,
  visualElementStateChanged: 208,
  screenCreated: 156,
  playbackAssociated: 202,
  visualElementAttached: 215,
  playbackContextEvent: 214,
  cloudCastingPlaybackStarted: 74,
  webPlayerApiCalled: 76,
  tvhtml5AccountDialogOpened: 79,
  foregroundHeartbeat: 80,
  foregroundHeartbeatScreenAssociated: 111,
  kidsOfflineSnapshot: 81,
  mdxEncryptionSessionStatsFinished: 82,
  playerRequestCompleted: 83,
  liteSchedulerStatistics: 84,
  mdxSignIn: 85,
  spacecastMetadataLookupRequested: 86,
  spacecastBatchLookupRequested: 87,
  spacecastSummaryRequested: 88,
  spacecastPlayback: 89,
  spacecastDiscovery: 90,
  tvhtml5LaunchUrlComponentChanged: 91,
  mdxBackgroundPlaybackRequestCompleted: 92,
  mdxBrokenAdditionalDataDeviceDetected: 93,
  tvhtml5LocalStorage: 97,
  tvhtml5DeviceStorageStatus: 147,
  autoCaptionsAvailable: 99,
  playbackScrubbingEvent: 339,
  flexyState: 100,
  interfaceOrientationCaptured: 101,
  mainAppBrowseFragmentCache: 102,
  offlineCacheVerificationFailure: 103,
  offlinePlaybackExceptionDigest: 217,
  vrCopresenceStats: 104,
  vrCopresenceSyncStats: 130,
  vrCopresenceCommsStats: 137,
  vrCopresencePartyStats: 153,
  vrCopresenceEmojiStats: 213,
  vrCopresenceEvent: 141,
  vrCopresenceFlowTransitEvent: 160,
  vrCowatchPartyEvent: 492,
  vrPlaybackEvent: 345,
  kidsAgeGateTracking: 105,
  offlineDelayAllowedTracking: 106,
  mainAppAutoOfflineState: 107,
  videoAsThumbnailDownload: 108,
  videoAsThumbnailPlayback: 109,
  liteShowMore: 110,
  renderingError: 118,
  kidsProfilePinGateTracking: 119,
  abrTrajectory: 124,
  scrollEvent: 125,
  streamzIncremented: 126,
  kidsProfileSwitcherTracking: 127,
  kidsProfileCreationTracking: 129,
  buyFlowStarted: 136,
  mbsConnectionInitiated: 138,
  mbsPlaybackInitiated: 139,
  mbsLoadChildren: 140,
  liteProfileFetcher: 144,
  mdxRemoteTransaction: 146,
  reelPlaybackError: 148,
  reachabilityDetectionEvent: 150,
  mobilePlaybackEvent: 151,
  courtsidePlayerStateChanged: 152,
  musicPersistentCacheChecked: 154,
  musicPersistentCacheCleared: 155,
  playbackInterrupted: 157,
  playbackInterruptionResolved: 158,
  fixFopFlow: 159,
  anrDetection: 161,
  backstagePostCreationFlowEnded: 162,
  clientError: 163,
  gamingAccountLinkStatusChanged: 164,
  liteHousewarming: 165,
  buyFlowEvent: 167,
  kidsParentalGateTracking: 168,
  kidsSignedOutSettingsStatus: 437,
  kidsSignedOutPauseHistoryFixStatus: 438,
  tvhtml5WatchdogViolation: 444,
  ypcUpgradeFlow: 169,
  yongleStudy: 170,
  ypcUpdateFlowStarted: 171,
  ypcUpdateFlowCancelled: 172,
  ypcUpdateFlowSucceeded: 173,
  ypcUpdateFlowFailed: 174,
  liteGrowthkitPromo: 175,
  paymentFlowStarted: 341,
  transactionFlowShowPaymentDialog: 405,
  transactionFlowStarted: 176,
  transactionFlowSecondaryDeviceStarted: 222,
  transactionFlowSecondaryDeviceSignedOutStarted: 383,
  transactionFlowCancelled: 177,
  transactionFlowPaymentCallBackReceived: 387,
  transactionFlowPaymentSubmitted: 460,
  transactionFlowPaymentSucceeded: 329,
  transactionFlowSucceeded: 178,
  transactionFlowFailed: 179,
  transactionFlowPlayBillingConnectionStartEvent: 428,
  transactionFlowSecondaryDeviceSuccess: 458,
  transactionFlowErrorEvent: 411,
  liteVideoQualityChanged: 180,
  watchBreakEnablementSettingEvent: 181,
  watchBreakFrequencySettingEvent: 182,
  videoEffectsCameraPerformanceMetrics: 183,
  adNotify: 184,
  startupTelemetry: 185,
  playbackOfflineFallbackUsed: 186,
  outOfMemory: 187,
  ypcPauseFlowStarted: 188,
  ypcPauseFlowCancelled: 189,
  ypcPauseFlowSucceeded: 190,
  ypcPauseFlowFailed: 191,
  uploadFileSelected: 192,
  ypcResumeFlowStarted: 193,
  ypcResumeFlowCancelled: 194,
  ypcResumeFlowSucceeded: 195,
  ypcResumeFlowFailed: 196,
  adsClientStateChange: 197,
  ypcCancelFlowStarted: 198,
  ypcCancelFlowCancelled: 199,
  ypcCancelFlowSucceeded: 200,
  ypcCancelFlowFailed: 201,
  ypcCancelFlowGoToPaymentProcessor: 402,
  ypcDeactivateFlowStarted: 320,
  ypcRedeemFlowStarted: 203,
  ypcRedeemFlowCancelled: 204,
  ypcRedeemFlowSucceeded: 205,
  ypcRedeemFlowFailed: 206,
  ypcFamilyCreateFlowStarted: 258,
  ypcFamilyCreateFlowCancelled: 259,
  ypcFamilyCreateFlowSucceeded: 260,
  ypcFamilyCreateFlowFailed: 261,
  ypcFamilyManageFlowStarted: 262,
  ypcFamilyManageFlowCancelled: 263,
  ypcFamilyManageFlowSucceeded: 264,
  ypcFamilyManageFlowFailed: 265,
  restoreContextEvent: 207,
  embedsAdEvent: 327,
  autoplayTriggered: 209,
  clientDataErrorEvent: 210,
  experimentalVssValidation: 211,
  tvhtml5TriggeredEvent: 212,
  tvhtml5FrameworksFieldTrialResult: 216,
  tvhtml5FrameworksFieldTrialStart: 220,
  musicOfflinePreferences: 218,
  watchTimeSegment: 219,
  appWidthLayoutError: 221,
  accountRegistryChange: 226,
  userMentionAutoCompleteBoxEvent: 227,
  downloadRecommendationEnablementSettingEvent: 228,
  musicPlaybackContentModeChangeEvent: 231,
  offlineDbOpenCompleted: 232,
  kidsFlowEvent: 233,
  kidsFlowCorpusSelectedEvent: 234,
  videoEffectsEvent: 235,
  unpluggedOpsEogAnalyticsEvent: 236,
  playbackAudioRouteEvent: 237,
  interactionLoggingDebugModeError: 238,
  offlineYtbRefreshed: 239,
  kidsFlowError: 240,
  musicAutoplayOnLaunchAttempted: 242,
  deviceContextActivityEvent: 243,
  deviceContextEvent: 244,
  templateResolutionException: 245,
  musicSideloadedPlaylistServiceCalled: 246,
  embedsStorageAccessNotChecked: 247,
  embedsHasStorageAccessResult: 248,
  embedsItpPlayedOnReload: 249,
  embedsRequestStorageAccessResult: 250,
  embedsShouldRequestStorageAccessResult: 251,
  embedsRequestStorageAccessState: 256,
  embedsRequestStorageAccessFailedState: 257,
  embedsItpWatchLaterResult: 266,
  searchSuggestDecodingPayloadFailure: 252,
  siriShortcutActivated: 253,
  tvhtml5KeyboardPerformance: 254,
  latencyActionSpan: 255,
  elementsLog: 267,
  ytbFileOpened: 268,
  tfliteModelError: 269,
  apiTest: 270,
  yongleUsbSetup: 271,
  touStrikeInterstitialEvent: 272,
  liteStreamToSave: 274,
  appBundleClientEvent: 275,
  ytbFileCreationFailed: 276,
  adNotifyFailure: 278,
  ytbTransferFailed: 280,
  blockingRequestFailed: 281,
  liteAccountSelector: 282,
  liteAccountUiCallbacks: 283,
  dummyPayload: 284,
  browseResponseValidationEvent: 285,
  entitiesError: 286,
  musicIosBackgroundFetch: 287,
  mdxNotificationEvent: 289,
  layersValidationError: 290,
  musicPwaInstalled: 291,
  liteAccountCleanup: 292,
  html5PlayerHealthEvent: 293,
  watchRestoreAttempt: 294,
  liteAccountSignIn: 296,
  notaireEvent: 298,
  kidsVoiceSearchEvent: 299,
  adNotifyFilled: 300,
  delayedEventDropped: 301,
  analyticsSearchEvent: 302,
  systemDarkThemeOptOutEvent: 303,
  flowEvent: 304,
  networkConnectivityBaselineEvent: 305,
  ytbFileImported: 306,
  downloadStreamUrlExpired: 307,
  directSignInEvent: 308,
  lyricImpressionEvent: 309,
  accessibilityStateEvent: 310,
  tokenRefreshEvent: 311,
  genericAttestationExecution: 312,
  tvhtml5VideoSeek: 313,
  unpluggedAutoPause: 314,
  scrubbingEvent: 315,
  bedtimeReminderEvent: 317,
  tvhtml5UnexpectedRestart: 319,
  tvhtml5StabilityTraceEvent: 478,
  tvhtml5OperationHealth: 467,
  tvhtml5WatchKeyEvent: 321,
  voiceLanguageChanged: 322,
  tvhtml5LiveChatStatus: 323,
  parentToolsCorpusSelectedEvent: 324,
  offerAdsEnrollmentInitiated: 325,
  networkQualityIntervalEvent: 326,
  deviceStartupMetrics: 328,
  heartbeatActionPlayerTransitioned: 330,
  tvhtml5Lifecycle: 331,
  heartbeatActionPlayerHalted: 332,
  adaptiveInlineMutedSettingEvent: 333,
  mainAppLibraryLoadingState: 334,
  thirdPartyLogMonitoringEvent: 336,
  appShellAssetLoadReport: 337,
  tvhtml5AndroidAttestation: 338,
  tvhtml5StartupSoundEvent: 340,
  iosBackgroundRefreshTask: 342,
  iosBackgroundProcessingTask: 343,
  sliEventBatch: 344,
  postImpressionEvent: 346,
  musicSideloadedPlaylistExport: 347,
  idbUnexpectedlyClosed: 348,
  voiceSearchEvent: 349,
  mdxSessionCastEvent: 350,
  idbQuotaExceeded: 351,
  idbTransactionEnded: 352,
  idbTransactionAborted: 353,
  tvhtml5KeyboardLogging: 354,
  idbIsSupportedCompleted: 355,
  creatorStudioMobileEvent: 356,
  idbDataCorrupted: 357,
  parentToolsAppChosenEvent: 358,
  webViewBottomSheetResized: 359,
  activeStateControllerScrollPerformanceSummary: 360,
  navigatorValidation: 361,
  mdxSessionHeartbeat: 362,
  clientHintsPolyfillDiagnostics: 363,
  clientHintsPolyfillEvent: 364,
  proofOfOriginTokenError: 365,
  kidsAddedAccountSummary: 366,
  musicWearableDevice: 367,
  ypcRefundFlowEvent: 368,
  tvhtml5PlaybackMeasurementEvent: 369,
  tvhtml5WatermarkMeasurementEvent: 370,
  clientExpGcfPropagationEvent: 371,
  mainAppReferrerIntent: 372,
  leaderLockEnded: 373,
  leaderLockAcquired: 374,
  googleHatsEvent: 375,
  persistentLensLaunchEvent: 376,
  parentToolsChildWelcomeChosenEvent: 378,
  browseThumbnailPreloadEvent: 379,
  finalPayload: 380,
  mdxDialAdditionalDataUpdateEvent: 381,
  webOrchestrationTaskLifecycleRecord: 382,
  startupSignalEvent: 384,
  accountError: 385,
  gmsDeviceCheckEvent: 386,
  accountSelectorEvent: 388,
  accountUiCallbacks: 389,
  mdxDialAdditionalDataProbeEvent: 390,
  downloadsSearchIcingApiStats: 391,
  downloadsSearchIndexUpdatedEvent: 397,
  downloadsSearchIndexSnapshot: 398,
  dataPushClientEvent: 392,
  kidsCategorySelectedEvent: 393,
  mdxDeviceManagementSnapshotEvent: 394,
  prefetchRequested: 395,
  prefetchableCommandExecuted: 396,
  gelDebuggingEvent: 399,
  webLinkTtsPlayEnd: 400,
  clipViewInvalid: 401,
  persistentStorageStateChecked: 403,
  cacheWipeoutEvent: 404,
  playerEvent: 410,
  sfvEffectPipelineStartedEvent: 412,
  sfvEffectPipelinePausedEvent: 429,
  sfvEffectPipelineEndedEvent: 413,
  sfvEffectChosenEvent: 414,
  sfvEffectLoadedEvent: 415,
  sfvEffectUserInteractionEvent: 465,
  sfvEffectFirstFrameProcessedLatencyEvent: 416,
  sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
  sfvEffectAggregatedFramesDroppedEvent: 418,
  sfvEffectPipelineErrorEvent: 430,
  sfvEffectGraphFrozenEvent: 419,
  sfvEffectGlThreadBlockedEvent: 420,
  mdeVideoChangedEvent: 442,
  mdePlayerPerformanceMetrics: 472,
  genericClientExperimentEvent: 423,
  homePreloadTaskScheduled: 424,
  homePreloadTaskExecuted: 425,
  homePreloadCacheHit: 426,
  polymerPropertyChangedInObserver: 427,
  applicationStarted: 431,
  networkCronetRttBatch: 432,
  networkCronetRttSummary: 433,
  repeatChapterLoopEvent: 436,
  seekCancellationEvent: 462,
  lockModeTimeoutEvent: 483,
  offlineTransferStarted: 4,
  musicOfflineMixtapePreferencesChanged: 16,
  mangoDailyNewVideosNotificationAttempt: 40,
  mangoDailyNewVideosNotificationError: 77,
  dtwsPlaybackStarted: 112,
  dtwsTileFetchStarted: 113,
  dtwsTileFetchCompleted: 114,
  dtwsTileFetchStatusChanged: 145,
  dtwsKeyframeDecoderBufferSent: 115,
  dtwsTileUnderflowedOnNonkeyframe: 116,
  dtwsBackfillFetchStatusChanged: 143,
  dtwsBackfillUnderflowed: 117,
  dtwsAdaptiveLevelChanged: 128,
  blockingVisitorIdTimeout: 277,
  liteSocial: 18,
  mobileJsInvocation: 297,
  biscottiBasedDetection: 439,
  coWatchStateChange: 440,
  embedsVideoDataDidChange: 441,
  shortsFirst: 443,
  cruiseControlEvent: 445,
  qoeClientLoggingContext: 446,
  atvRecommendationJobExecuted: 447,
  tvhtml5UserFeedback: 448,
  producerProjectCreated: 449,
  producerProjectOpened: 450,
  producerProjectDeleted: 451,
  producerProjectElementAdded: 453,
  producerProjectElementRemoved: 454,
  tvhtml5ShowClockEvent: 455,
  deviceCapabilityCheckMetrics: 456,
  youtubeClearcutEvent: 461,
  offlineBrowseFallbackEvent: 463,
  getCtvTokenEvent: 464,
  startupDroppedFramesSummary: 466,
  screenshotEvent: 468,
  miniAppPlayEvent: 469,
  elementsDebugCounters: 470,
  fontLoadEvent: 471,
  webKillswitchReceived: 473,
  webKillswitchExecuted: 474,
  cameraOpenEvent: 475,
  manualSmoothnessMeasurement: 476,
  tvhtml5AppQualityEvent: 477,
  polymerPropertyAccessEvent: 479,
  miniAppSdkUsage: 480,
  cobaltTelemetryEvent: 481,
  crossDevicePlayback: 482,
  channelCreatedWithObakeImage: 484,
  channelEditedWithObakeImage: 485,
  offlineDeleteEvent: 486,
  crossDeviceNotificationTransfer: 487,
  androidIntentEvent: 488,
  unpluggedAmbientInterludesCounterfactualEvent: 489,
  keyPlaysPlayback: 490,
  shortsCreationFallbackEvent: 493,
  vssData: 491,
  castMatch: 494,
  miniAppPerformanceMetrics: 495,
  userFeedbackEvent: 496,
};
const Qi = ["client.name", "client.version"];
function Ri(a) {
  if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
  a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter((b) =>
    b.key ? Qi.includes(b.key) : !1
  );
  return a;
}
var Si = hi("ServiceWorkerLogsDatabase", {
  O: { SWHealthLog: { N: 1 } },
  shared: !0,
  upgrade: (a, b) => {
    b(1) &&
      wh(a, "SWHealthLog", { keyPath: "id", autoIncrement: !0 }).h.createIndex(
        "swHealthNewRequest",
        ["interface", "timestamp"],
        { unique: !1 }
      );
  },
  version: 1,
});
function Ti(a, b) {
  return r(function* () {
    var c = yield Ph(Si(), b),
      d = R("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
    const e = Object.assign({}, a);
    e.clientError && (e.clientError = Ri(e.clientError));
    e.interface = d;
    return yh(c, "SWHealthLog", e);
  });
}
w(
  "ytNetworklessLoggingInitializationOptions",
  t.ytNetworklessLoggingInitializationOptions || { isNwlInitialized: !1 }
);
function Ui(a, b, c, d) {
  !R("VISITOR_DATA") &&
    "visitor_id" !== b &&
    0.01 > Math.random() &&
    ag(new Gf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
  if (!a.isReady())
    throw ((a = new Gf("innertube xhrclient not ready", b, c, d)), $f(a), a);
  c = {
    headers: d.headers || {},
    method: "POST",
    postParams: c,
    postBody: d.postBody,
    postBodyFormat: d.postBodyFormat || "JSON",
    onTimeout: () => {
      d.onTimeout();
    },
    onFetchTimeout: d.onTimeout,
    onSuccess: (k, l) => {
      if (d.onSuccess) d.onSuccess(l);
    },
    onFetchSuccess: (k) => {
      if (d.onSuccess) d.onSuccess(k);
    },
    onError: (k, l) => {
      if (d.onError) d.onError(l);
    },
    onFetchError: (k) => {
      if (d.onError) d.onError(k);
    },
    timeout: d.timeout,
    withCredentials: !0,
    compress: d.compress,
  };
  c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
  let e = "";
  var f = a.config_.Fa;
  f && (e = f);
  var g = a.config_.Ha || !1;
  f = yi(g, e, d);
  Object.assign(c.headers, f);
  (f = c.headers.Authorization) &&
    !e &&
    g &&
    (c.headers["x-origin"] = window.location.origin);
  b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
  g = { alt: "json" };
  let h = a.config_.Ga && f;
  h = h && f.startsWith("Bearer");
  h || (g.key = a.config_.innertubeApiKey);
  a = hg(`${e}${b}`, g || {}, !0);
  try {
    qg(a, c);
  } catch (k) {
    if ("InvalidAccessError" === k.name)
      ag(Error("An extension is blocking network request."));
    else throw k;
  }
}
var Vi = class {
  constructor(a) {
    this.config_ = null;
    a ? (this.config_ = a) : si() && (this.config_ = ti());
  }
  isReady() {
    !this.config_ && si() && (this.config_ = ti());
    return !!this.config_;
  }
};
let Wi = 0;
w("ytDomDomGetNextId", v("ytDomDomGetNextId") || (() => ++Wi));
w("ytEventsEventsListeners", t.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", t.ytEventsEventsCounter || { count: 0 });
function Xi() {
  const a = v("_lact", window);
  return null == a ? -1 : Math.max(Date.now() - a, 0);
}
t.ytPubsubPubsubInstance || new L();
var Yi = Symbol("injectionDeps"),
  Zi = class {
    constructor() {
      this.name = "INNERTUBE_TRANSPORT_TOKEN";
    }
    toString() {
      return `InjectionToken(${this.name})`;
    }
  },
  $i = class {
    constructor() {
      this.key = ri;
    }
  };
function aj(a) {
  var b = { fa: bj, oa: cj.h };
  a.i.set(b.fa, b);
  const c = a.j.get(b.fa);
  if (c)
    try {
      c.bc(a.resolve(b.fa));
    } catch (d) {
      c.Yb(d);
    }
}
function dj(a, b, c, d = !1) {
  if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
  if (a.h.has(b)) return a.h.get(b);
  if (!a.i.has(b)) {
    if (d) return;
    throw Error(`No provider for: ${b}`);
  }
  d = a.i.get(b);
  c.push(b);
  if (void 0 !== d.oa) var e = d.oa;
  else if (d.Qa) (e = d[Yi] ? ej(a, d[Yi], c) : []), (e = d.Qa(...e));
  else if (d.Pa) {
    e = d.Pa;
    const f = e[Yi] ? ej(a, e[Yi], c) : [];
    e = new e(...f);
  } else throw Error(`Could not resolve providers for: ${b}`);
  c.pop();
  d.jc || a.h.set(b, e);
  return e;
}
function ej(a, b, c) {
  return b
    ? b.map((d) => (d instanceof $i ? dj(a, d.key, c, !0) : dj(a, d, c)))
    : [];
}
var fj = class {
  constructor() {
    this.i = new Map();
    this.j = new Map();
    this.h = new Map();
  }
  resolve(a) {
    return a instanceof $i ? dj(this, a.key, [], !0) : dj(this, a, []);
  }
};
let gj;
function hj() {
  gj || (gj = new fj());
  return gj;
}
let ij = window;
function jj() {
  let a, b;
  return "h5vcc" in ij &&
    (null == (a = ij.h5vcc.traceEvent) ? 0 : a.traceBegin) &&
    (null == (b = ij.h5vcc.traceEvent) ? 0 : b.traceEnd)
    ? 1
    : "performance" in ij && ij.performance.mark && ij.performance.measure
    ? 2
    : 0;
}
function kj(a) {
  const b = jj();
  switch (b) {
    case 1:
      ij.h5vcc.traceEvent.traceBegin("YTLR", a);
      break;
    case 2:
      ij.performance.mark(`${a}-start`);
      break;
    case 0:
      break;
    default:
      Ea(b, "unknown trace type");
  }
}
function lj(a) {
  var b = jj();
  switch (b) {
    case 1:
      ij.h5vcc.traceEvent.traceEnd("YTLR", a);
      break;
    case 2:
      b = `${a}-start`;
      const c = `${a}-end`;
      ij.performance.mark(c);
      ij.performance.measure(a, b, c);
      break;
    case 0:
      break;
    default:
      Ea(b, "unknown trace type");
  }
}
var mj = S("web_enable_lifecycle_monitoring") && 0 !== jj(),
  nj = S("web_enable_lifecycle_monitoring");
function oj(a) {
  let b;
  return null != (b = a.priority) ? b : 0;
}
function pj(a) {
  var b = Array.from(a.h.keys()).sort((c, d) => oj(a.h[d]) - oj(a.h[c]));
  for (const c of b)
    (b = a.h[c]),
      void 0 === b.jobId || b.Y || (a.scheduler.T(b.jobId), Ng(b.da, 10));
}
var qj = class {
  constructor(a) {
    this.scheduler = Qg();
    this.i = new ye();
    this.h = a;
    for (let b = 0; b < this.h.length; b++) {
      const c = this.h[b];
      a = () => {
        c.da();
        this.h[b].Y = !0;
        this.h.every((e) => !0 === e.Y) && this.i.resolve();
      };
      const d = Ng(a, oj(c));
      this.h[b] = Object.assign({}, c, { da: a, jobId: d });
    }
  }
  cancel() {
    for (const a of this.h)
      void 0 === a.jobId || a.Y || this.scheduler.T(a.jobId), (a.Y = !0);
    this.i.resolve();
  }
};
function rj(a, b, c) {
  nj &&
    console.groupCollapsed &&
    console.groupEnd &&
    (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),
    console.log("with message: ", c),
    console.groupEnd());
}
function sj(a, b) {
  const c = b.filter((e) => 10 === tj(a, e)),
    d = b.filter((e) => 10 !== tj(a, e));
  return a.l.hc
    ? (...e) =>
        r(function* () {
          yield uj(c, ...e);
          vj(a, d, ...e);
        })
    : (...e) => {
        wj(c, ...e);
        vj(a, d, ...e);
      };
}
function tj(a, b) {
  let c, d;
  return null != (d = null != (c = a.j) ? c : b.priority) ? d : 0;
}
function uj(a, ...b) {
  return r(function* () {
    Qg();
    for (const c of a) {
      let d;
      Og(() => {
        xj(c.name);
        const e = c.callback(...b);
        "function" === typeof (null == e ? void 0 : e.then)
          ? (d = e.then(() => {
              yj(c.name);
            }))
          : yj(c.name);
      });
      d && (yield d);
    }
  });
}
function vj(a, b, ...c) {
  b = b.map((d) => ({
    da: () => {
      xj(d.name);
      d.callback(...c);
      yj(d.name);
    },
    priority: tj(a, d),
  }));
  b.length && (a.i = new qj(b));
}
function wj(a, ...b) {
  Qg();
  for (const c of a)
    Og(() => {
      xj(c.name);
      c.callback(...b);
      yj(c.name);
    });
}
function xj(a) {
  mj && a && kj(a);
}
function yj(a) {
  mj && a && lj(a);
}
var zj = class {
  constructor() {
    this.state = "none";
    this.plugins = [];
    this.j = void 0;
    this.l = {};
    mj && kj(this.state);
  }
  get currentState() {
    return this.state;
  }
  install(a) {
    this.plugins.push(a);
    return this;
  }
  transition(a, b) {
    mj && lj(this.state);
    var c = this.transitions.find((d) =>
      Array.isArray(d.from)
        ? d.from.find((e) => e === this.state && d.S === a)
        : d.from === this.state && d.S === a
    );
    if (c) {
      this.i && (pj(this.i), (this.i = void 0));
      rj(this, a, b);
      this.state = a;
      mj && kj(this.state);
      c = c.action.bind(this);
      const d = this.plugins.filter((e) => e[a]).map((e) => e[a]);
      c(sj(this, d), b);
    } else throw Error(`no transition specified from ${this.state} to ${a}`);
  }
};
function Aj() {
  Bj || (Bj = new Cj());
  return Bj;
}
var Cj = class extends zj {
    constructor() {
      super();
      this.h = null;
      this.j = 10;
      this.transitions = [
        { from: "none", S: "application_navigating", action: this.m },
        { from: "application_navigating", S: "none", action: this.s },
        {
          from: "application_navigating",
          S: "application_navigating",
          action: () => {},
        },
        { from: "none", S: "none", action: () => {} },
      ];
    }
    m(a, b) {
      this.h = Mg(() => {
        "application_navigating" === this.currentState &&
          this.transition("none");
      }, 5e3);
      a(null == b ? void 0 : b.event);
    }
    s(a, b) {
      this.h && (Sg.T(this.h), (this.h = null));
      a(null == b ? void 0 : b.event);
    }
  },
  Bj;
let Dj = [];
w("yt.logging.transport.getScrapedGelPayloads", function () {
  return Dj;
});
function Ej(a, b) {
  const c = Fj(b);
  if (a.h[c]) return a.h[c];
  const d = Object.keys(a.store) || [];
  if (1 >= d.length && Fj(b) === d[0]) return d;
  const e = [];
  for (let g = 0; g < d.length; g++) {
    const h = d[g].split("/");
    if (Gj(b.auth, h[0])) {
      var f = b.isJspb;
      Gj(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) &&
        Gj(b.cttAuthInfo, h[2]) &&
        ((f = b.tier),
        (f = void 0 === f ? "undefined" : JSON.stringify(f)),
        Gj(f, h[3]) && e.push(d[g]));
    }
  }
  return (a.h[c] = e);
}
function Gj(a, b) {
  return void 0 === a || "undefined" === a ? !0 : a === b;
}
var Hj = class {
  constructor() {
    this.store = {};
    this.h = {};
  }
  storePayload(a, b) {
    a = Fj(a);
    this.store[a]
      ? this.store[a].push(b)
      : ((this.h = {}), (this.store[a] = [b]));
    return a;
  }
  smartExtractMatchingEntries(a) {
    if (!a.keys.length) return [];
    const b = Ej(this, a.keys.splice(0, 1)[0]),
      c = [];
    for (let d = 0; d < b.length; d++)
      this.store[b[d]] &&
        a.sizeLimit &&
        (this.store[b[d]].length <= a.sizeLimit
          ? (c.push(...this.store[b[d]]), delete this.store[b[d]])
          : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
    (null == a ? 0 : a.sizeLimit) &&
      c.length < (null == a ? void 0 : a.sizeLimit) &&
      ((a.sizeLimit -= c.length),
      c.push(...this.smartExtractMatchingEntries(a)));
    return c;
  }
  extractMatchingEntries(a) {
    a = Ej(this, a);
    const b = [];
    for (let c = 0; c < a.length; c++)
      this.store[a[c]] &&
        (b.push(...this.store[a[c]]), delete this.store[a[c]]);
    return b;
  }
  getSequenceCount(a) {
    a = Ej(this, a);
    let b = 0;
    for (let c = 0; c < a.length; c++) {
      let d;
      b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0;
    }
    return b;
  }
};
Hj.prototype.getSequenceCount = Hj.prototype.getSequenceCount;
Hj.prototype.extractMatchingEntries = Hj.prototype.extractMatchingEntries;
Hj.prototype.smartExtractMatchingEntries =
  Hj.prototype.smartExtractMatchingEntries;
Hj.prototype.storePayload = Hj.prototype.storePayload;
function Fj(a) {
  return [
    void 0 === a.auth ? "undefined" : a.auth,
    void 0 === a.isJspb ? "undefined" : a.isJspb,
    void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo,
    void 0 === a.tier ? "undefined" : a.tier,
  ].join("/");
}
function Ij(a, b) {
  if (a) return a[b.name];
} /*

 SPDX-License-Identifier: Apache-2.0
*/
const Jj = T("initial_gel_batch_timeout", 2e3),
  Kj = T("gel_queue_timeout_max_ms", 6e4),
  Lj = Math.pow(2, 16) - 1,
  Mj = T("gel_min_batch_size", 5);
let Nj = void 0;
class Oj {
  constructor() {
    this.l = this.h = this.i = 0;
    this.j = !1;
  }
}
const Pj = new Oj(),
  Qj = new Oj(),
  Rj = new Oj(),
  Sj = new Oj();
let Tj,
  Uj = !0,
  Vj = 1;
const Wj = new Map(),
  Xj = t.ytLoggingTransportTokensToCttTargetIds_ || {},
  Yj = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Zj = {};
function ak() {
  let a = v("yt.logging.ims");
  a || ((a = new Hj()), w("yt.logging.ims", a));
  return a;
}
function bk(a, b) {
  if ("log_event" === a.endpoint) {
    ck();
    var c = dk(a),
      d = ek(a.payload) || "",
      e = fk(d),
      f = 200;
    if (e) {
      if (!1 === e.enabled && !S("web_payload_policy_disabled_killswitch"))
        return;
      f = gk(e.tier);
      if (400 === f) {
        hk(a, b);
        return;
      }
    }
    Zj[c] = !0;
    e = { cttAuthInfo: c, isJspb: !1, tier: f };
    ak().storePayload(e, a.payload);
    ik(b, c, !1, e, jk(d));
  }
}
function kk(a, b, c) {
  if ("log_event" === b.endpoint) {
    ck();
    var d = dk(b, !0),
      e = fk(a),
      f = 200;
    if (e) {
      if (!1 === e.enabled && !S("web_payload_policy_disabled_killswitch"))
        return;
      f = gk(e.tier);
      if (400 === f) {
        lk(a, b, c);
        return;
      }
    }
    Zj[d] = !0;
    e = { cttAuthInfo: d, isJspb: !0, tier: f };
    ak().storePayload(e, b.payload.toJSON());
    ik(c, d, !0, e, jk(a));
  }
}
function ik(a, b, c = !1, d, e = !1) {
  a && (Nj = new a());
  a =
    T("tvhtml5_logging_max_batch_ads_fork") ||
    T("web_logging_max_batch") ||
    100;
  const f = W(),
    g = mk(c, d.tier),
    h = g.l;
  e && (g.j = !0);
  e = 0;
  d && (e = ak().getSequenceCount(d));
  const k = () => {
    nk(
      { writeThenSend: !0 },
      S("flush_only_full_queue") ? b : void 0,
      c,
      d.tier
    );
  };
  1e3 <= e
    ? k()
    : e >= a
    ? Tj ||
      (Tj = ok(() => {
        k();
        Tj = void 0;
      }, 0))
    : 10 <= f - h && (pk(c, d.tier), (g.l = f));
}
function hk(a, b) {
  if ("log_event" === a.endpoint) {
    ck();
    var c = dk(a),
      d = new Map();
    d.set(c, [a.payload]);
    var e = ek(a.payload) || "";
    b && (Nj = new b());
    return new y((f, g) => {
      Nj && Nj.isReady()
        ? qk(d, Nj, f, g, { bypassNetworkless: !0 }, !0, jk(e))
        : f();
    });
  }
}
function lk(a, b, c) {
  if ("log_event" === b.endpoint) {
    ck();
    var d = dk(b, !0),
      e = new Map();
    e.set(d, [b.payload.toJSON()]);
    c && (Nj = new c());
    return new y((f) => {
      Nj && Nj.isReady()
        ? rk(e, Nj, f, { bypassNetworkless: !0 }, !0, jk(a))
        : f();
    });
  }
}
function dk(a, b = !1) {
  var c = "";
  if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
  else if (a.cttAuthInfo) {
    if (b) {
      b = a.cttAuthInfo.token;
      c = a.cttAuthInfo;
      const d = new yf();
      c.videoId
        ? d.setVideoId(c.videoId)
        : c.playlistId && Ed(d, 2, Qd, ed(c.playlistId));
      Yj[b] = d;
    } else
      (b = a.cttAuthInfo),
        (c = {}),
        b.videoId
          ? (c.videoId = b.videoId)
          : b.playlistId && (c.playlistId = b.playlistId),
        (Xj[a.cttAuthInfo.token] = c);
    c = a.cttAuthInfo.token;
  }
  return c;
}
function nk(a = {}, b, c = !1, d) {
  new y((e, f) => {
    const g = mk(c, d),
      h = g.j;
    g.j = !1;
    sk(g.i);
    sk(g.h);
    g.h = 0;
    Nj && Nj.isReady()
      ? void 0 === d && S("enable_web_tiered_gel")
        ? tk(e, f, a, b, c, 300, h)
        : tk(e, f, a, b, c, d, h)
      : (pk(c, d), e());
  });
}
function tk(a, b, c = {}, d, e = !1, f = 200, g = !1) {
  var h = Nj,
    k = new Map();
  const l = new Map(),
    q = { isJspb: e, cttAuthInfo: d, tier: f },
    m = { isJspb: e, cttAuthInfo: d };
  if (void 0 !== d)
    e
      ? ((b = S("enable_web_tiered_gel")
          ? ak().smartExtractMatchingEntries({ keys: [q, m], sizeLimit: 1e3 })
          : ak().extractMatchingEntries(m)),
        k.set(d, b),
        rk(k, h, a, c, !1, g))
      : ((k = S("enable_web_tiered_gel")
          ? ak().smartExtractMatchingEntries({ keys: [q, m], sizeLimit: 1e3 })
          : ak().extractMatchingEntries(m)),
        l.set(d, k),
        qk(l, h, a, b, c, !1, g));
  else if (e) {
    for (const p of Object.keys(Zj))
      (b = S("enable_web_tiered_gel")
        ? ak().smartExtractMatchingEntries({ keys: [q, m], sizeLimit: 1e3 })
        : ak().extractMatchingEntries({ isJspb: !0, cttAuthInfo: p })),
        0 < b.length && k.set(p, b),
        ((S("web_fp_via_jspb_and_json") && c.writeThenSend) ||
          !S("web_fp_via_jspb_and_json")) &&
          delete Zj[p];
    rk(k, h, a, c, !1, g);
  } else {
    for (const p of Object.keys(Zj))
      (d = S("enable_web_tiered_gel")
        ? ak().smartExtractMatchingEntries({
            keys: [
              { isJspb: !1, cttAuthInfo: p, tier: f },
              { isJspb: !1, cttAuthInfo: p },
            ],
            sizeLimit: 1e3,
          })
        : ak().extractMatchingEntries({ isJspb: !1, cttAuthInfo: p })),
        0 < d.length && l.set(p, d),
        ((S("web_fp_via_jspb_and_json") && c.writeThenSend) ||
          !S("web_fp_via_jspb_and_json")) &&
          delete Zj[p];
    qk(l, h, a, b, c, !1, g);
  }
}
function pk(a = !1, b = 200) {
  const c = () => {
      nk({ writeThenSend: !0 }, void 0, a, b);
    },
    d = mk(a, b);
  var e = d === Sj || d === Rj ? 5e3 : Kj;
  S("web_gel_timeout_cap") &&
    !d.h &&
    ((e = ok(() => {
      c();
    }, e)),
    (d.h = e));
  sk(d.i);
  e = R("LOGGING_BATCH_TIMEOUT", T("web_gel_debounce_ms", 1e4));
  S("shorten_initial_gel_batch_timeout") && Uj && (e = Jj);
  e = ok(() => {
    0 < T("gel_min_batch_size")
      ? ak().getSequenceCount({ cttAuthInfo: void 0, isJspb: a, tier: b }) >=
          Mj && c()
      : c();
  }, e);
  d.i = e;
}
function qk(a, b, c, d, e = {}, f, g) {
  const h = Math.round(W());
  let k = a.size;
  const l = uk(g);
  for (const [q, m] of a) {
    a = q;
    g = m;
    const p = Ba({ context: ui(b.config_ || ti()) });
    if (!ia(g) && !S("throw_err_when_logevent_malformed_killswitch")) {
      d();
      break;
    }
    p.events = g;
    (g = Xj[a]) && vk(p, a, g);
    delete Xj[a];
    const n = "visitorOnlyApprovedKey" === a;
    wk(p, h, n);
    xk(e);
    const u = (P) => {
      S("start_client_gcf") &&
        Sg.h(() =>
          r(function* () {
            yield yk(P);
          })
        );
      k--;
      k || c();
    };
    let z = 0;
    const C = () => {
      z++;
      if (e.bypassNetworkless && 1 === z)
        try {
          Ui(b, l, p, zk({ writeThenSend: !0 }, n, u, C, f)), (Uj = !1);
        } catch (P) {
          $f(P), d();
        }
      k--;
      k || c();
    };
    try {
      Ui(b, l, p, zk(e, n, u, C, f)), (Uj = !1);
    } catch (P) {
      $f(P), d();
    }
  }
}
function rk(a, b, c, d = {}, e, f) {
  const g = Math.round(W()),
    h = { value: a.size };
  var k = new Map([...a]);
  for (const [P] of k) {
    var l = P,
      q = a.get(l);
    k = new zf();
    var m = b.config_ || ti(),
      p = new Ve(),
      n = new Oe();
    I(n, 1, m.ma);
    I(n, 2, m.la);
    J(n, 16, m.Ea);
    I(n, 17, m.innertubeContextClientVersion);
    if (m.ca) {
      var u = m.ca,
        z = new Me();
      u.coldConfigData && I(z, 1, u.coldConfigData);
      u.appInstallData && I(z, 6, u.appInstallData);
      u.coldHashData && I(z, 3, u.coldHashData);
      u.hotHashData && I(z, 5, u.hotHashData);
      H(n, Me, 62, z);
    }
    if ((u = t.devicePixelRatio) && 1 != u) {
      if (null != u && "number" !== typeof u)
        throw Error(
          `Value of float/double field must be a number, found ${typeof u}: ${u}`
        );
      zd(n, 65, u);
    }
    u = ng();
    "" !== u && I(n, 54, u);
    u = og();
    if (0 < u.length) {
      z = new Re();
      for (let G = 0; G < u.length; G++) {
        const Y = new Pe();
        I(Y, 1, u[G].key);
        Ed(Y, 2, Qe, ed(u[G].value));
        Md(z, 15, Pe, Y);
      }
      H(p, Re, 5, z);
    }
    vi(p);
    wi(m, n);
    S("start_client_gcf") && xi(n);
    R("DELEGATED_SESSION_ID") &&
      !S("pageid_as_header_web") &&
      ((m = new Ue()), I(m, 3, R("DELEGATED_SESSION_ID")));
    !S("fill_delegate_context_in_gel_killswitch") &&
      (u = R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
      ((z = Hd(p, Ue, 3) || new Ue()),
      (m = p),
      (u = I(z, 18, u)),
      H(m, Ue, 3, u));
    m = n;
    u = R("DEVICE", "");
    for (const [G, Y] of Object.entries(gg(u)))
      (u = G),
        (z = Y),
        "cbrand" === u
          ? I(m, 12, z)
          : "cmodel" === u
          ? I(m, 13, z)
          : "cbr" === u
          ? I(m, 87, z)
          : "cbrver" === u
          ? I(m, 88, z)
          : "cos" === u
          ? I(m, 18, z)
          : "cosver" === u
          ? I(m, 19, z)
          : "cplatform" === u && J(m, 42, Kg(z));
    p.j(n);
    H(k, Ve, 1, p);
    if ((n = Yj[l]))
      a: {
        if (Pd(n, 1)) p = 1;
        else if (n.getPlaylistId()) p = 2;
        else break a;
        H(k, yf, 4, n);
        n = Hd(k, Ve, 1) || new Ve();
        m = Hd(n, Ue, 3) || new Ue();
        u = new Te();
        I(u, 2, l);
        J(u, 1, p);
        Md(m, 12, Te, u);
        H(n, Ue, 3, m);
      }
    delete Yj[l];
    l = "visitorOnlyApprovedKey" === l;
    Ak() || Sd(k, 2, g);
    !l &&
      (p = R("EVENT_ID")) &&
      ((n = Bk()), (m = new xf()), I(m, 1, p), Sd(m, 2, n), H(k, xf, 5, m));
    xk(d);
    if (S("jspb_serialize_with_worker")) {
      if (!Oi)
        if ((p = R("WORKER_SERIALIZATION_URL"))) {
          if ((p = p.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)) {
            if (void 0 === qa)
              if (((n = null), (m = t.trustedTypes) && m.createPolicy)) {
                try {
                  n = m.createPolicy("goog#html", {
                    createHTML: na,
                    createScript: na,
                    createScriptURL: na,
                  });
                } catch (G) {
                  t.console && t.console.error(G.message);
                }
                qa = n;
              } else qa = n;
            p = (n = qa) ? n.createScriptURL(p) : p;
            p = new ua(p, va);
          } else p = null;
          Oi = p;
        } else Oi = null;
      p = Oi || void 0;
      Ni ||
        void 0 === p ||
        (Ni = new Worker(
          p instanceof ua && p.constructor === ua
            ? p.h
            : "type_error:TrustedResourceUrl",
          void 0
        ));
      if ((p = Ni) && d.writeThenSend) {
        Wj.set(Vj, {
          client: b,
          resolve: c,
          networklessOptions: d,
          isIsolated: e,
          useVSSEndpoint: f,
          dangerousLogToVisitorSession: l,
          requestsOutstanding: h,
        });
        p.postMessage({
          op: "gelBatchToSerialize",
          batchRequest: k.toJSON(),
          clientEvents: q,
          key: Vj,
        });
        Vj++;
        break;
      }
    }
    if (q) {
      p = [];
      for (n = 0; n < q.length; n++)
        try {
          p.push(new N(q[n]));
        } catch (G) {
          $f(new Gf("Transport failed to deserialize " + String(q[n])));
        }
      q = p;
    } else q = [];
    for (const G of q) Md(k, 3, N, G);
    q = { startTime: W(), ticks: {}, infos: {} };
    a: {
      Nc = !0;
      try {
        var C = JSON.stringify(k.toJSON(), md);
        break a;
      } finally {
        Nc = !1;
      }
      C = void 0;
    }
    k = C;
    q.ticks.geljspc = W();
    S("log_jspb_serialize_latency") &&
      0.001 > Math.random() &&
      Gi("meta_logging_csi_event", { timerName: "gel_jspb_serialize", kc: q });
    Ck(k, b, c, d, e, f, l, h);
  }
}
function Ck(a, b, c, d = {}, e, f, g, h = { value: 0 }) {
  f = uk(f);
  d = zk(
    d,
    g,
    (k) => {
      S("start_client_gcf") &&
        Sg.h(() =>
          r(function* () {
            yield yk(k);
          })
        );
      h.value--;
      h.value || c();
    },
    () => {
      h.value--;
      h.value || c();
    },
    e
  );
  d.headers["Content-Type"] = "application/json+protobuf";
  d.postBodyFormat = "JSPB";
  d.postBody = a;
  Ui(b, f, "", d);
  Uj = !1;
}
function xk(a) {
  S("always_send_and_write") && (a.writeThenSend = !1);
}
function zk(a, b, c, d, e) {
  a = {
    retry: !0,
    onSuccess: c,
    onError: d,
    networklessOptions: a,
    dangerousLogToVisitorSession: b,
    Nb: !!e,
    headers: {},
    postBodyFormat: "",
    postBody: "",
    compress: S("compress_gel") || S("compress_gel_lr"),
  };
  Ak() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
  return a;
}
function wk(a, b, c) {
  Ak() || (a.requestTimeMs = String(b));
  S("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
  !c &&
    (b = R("EVENT_ID")) &&
    ((c = Bk()),
    (a.serializedClientEventId = {
      serializedEventId: b,
      clientCounter: String(c),
    }));
}
function Bk() {
  let a = R("BATCH_CLIENT_COUNTER") || 0;
  a || (a = Math.floor((Math.random() * Lj) / 2));
  a++;
  a > Lj && (a = 1);
  Q("BATCH_CLIENT_COUNTER", a);
  return a;
}
function vk(a, b, c) {
  let d;
  if (c.videoId) d = "VIDEO";
  else if (c.playlistId) d = "PLAYLIST";
  else return;
  a.credentialTransferTokenTargetId = c;
  a.context = a.context || {};
  a.context.user = a.context.user || {};
  a.context.user.credentialTransferTokens = [{ token: b, scope: d }];
}
function ck() {
  var a;
  (a = v("yt.logging.transport.enableScrapingForTest")) ||
    ((a = mg("il_payload_scraping")),
    (a = "enable_il_payload_scraping" !== (void 0 !== a ? String(a) : "")));
  a ||
    ((Dj = []),
    w("yt.logging.transport.enableScrapingForTest", !0),
    w("yt.logging.transport.scrapedPayloadsForTesting", Dj),
    w(
      "yt.logging.transport.payloadToScrape",
      "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(
        " "
      )
    ),
    w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
    w("yt.logging.transport.scrapeClientEvent", !0));
}
function Ak() {
  return S("use_request_time_ms_header") || S("lr_use_request_time_ms_header");
}
function ok(a, b) {
  return !1 === S("embeds_transport_use_scheduler")
    ? jg(a, b)
    : S("logging_avoid_blocking_during_navigation") ||
      S("lr_logging_avoid_blocking_during_navigation")
    ? Mg(() => {
        "none" === Aj().currentState
          ? a()
          : Aj().install({ none: { callback: a } });
      }, b)
    : Mg(a, b);
}
function sk(a) {
  S("transport_use_scheduler") ? Sg.T(a) : window.clearTimeout(a);
}
function yk(a) {
  return r(function* () {
    var b,
      c =
        null == a
          ? void 0
          : null == (b = a.responseContext)
          ? void 0
          : b.globalConfigGroup;
    b = Ij(c, He);
    const d = null == c ? void 0 : c.hotHashData,
      e = Ij(c, Ge);
    c = null == c ? void 0 : c.coldHashData;
    const f = hj().resolve(new $i());
    f &&
      (d && (b ? yield pi(f, d, b) : yield pi(f, d)),
      c && (e ? yield qi(f, c, e) : yield qi(f, c)));
  });
}
function mk(a, b = 200) {
  return a ? (300 === b ? Sj : Qj) : 300 === b ? Rj : Pj;
}
function fk(a) {
  if (S("enable_web_tiered_gel")) {
    a = Pi[a || ""];
    var b, c;
    if (null == hj().resolve(new $i())) var d = void 0;
    else {
      var e =
        null != (d = v("yt.gcf.config.hotConfigGroup"))
          ? d
          : R("RAW_HOT_CONFIG_GROUP");
      d =
        null == e
          ? void 0
          : null == (b = e.loggingHotConfig)
          ? void 0
          : null == (c = b.eventLoggingConfig)
          ? void 0
          : c.payloadPolicies;
    }
    if ((b = d))
      for (c = 0; c < b.length; c++) if (b[c].payloadNumber === a) return b[c];
  }
}
function ek(a) {
  a = Object.keys(a);
  for (const b of a) if (Pi[b]) return b;
}
function gk(a) {
  switch (a) {
    case "DELAYED_EVENT_TIER_UNSPECIFIED":
      return 0;
    case "DELAYED_EVENT_TIER_DEFAULT":
      return 100;
    case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
      return 200;
    case "DELAYED_EVENT_TIER_FAST":
      return 300;
    case "DELAYED_EVENT_TIER_IMMEDIATE":
      return 400;
    default:
      return 200;
  }
}
function jk(a) {
  return "gelDebuggingEvent" === a;
}
function uk(a = !1) {
  return a && S("vss_through_gel_video_stats") ? "video_stats" : "log_event";
}
const Dk = t.ytLoggingGelSequenceIdObj_ || {};
function Ek(a, b, c, d = {}) {
  const e = {},
    f = Math.round(d.timestamp || W());
  e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
  e[a] = b;
  a = Xi();
  e.context = { lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a) };
  d.sequenceGroup &&
    !S("web_gel_sequence_info_killswitch") &&
    ((a = e.context),
    (b = d.sequenceGroup),
    (b = { index: Fk(b), groupKey: b }),
    (a.sequence = b),
    d.endOfSequence && delete Dk[d.sequenceGroup]);
  (d.sendIsolatedPayload ? hk : bk)(
    {
      endpoint: "log_event",
      payload: e,
      cttAuthInfo: d.cttAuthInfo,
      dangerousLogToVisitorSession: d.dangerousLogToVisitorSession,
    },
    c
  );
}
function Gk(a = !1) {
  nk(void 0, void 0, a);
}
function Fk(a) {
  Dk[a] = a in Dk ? Dk[a] + 1 : 0;
  return Dk[a];
}
let Hk = [];
function X(a, b, c = {}) {
  let d = Vi;
  R("ytLoggingEventsDefaultDisabled", !1) && Vi === Vi && (d = null);
  S("web_all_payloads_via_jspb") &&
    !c.timestamp &&
    ((c.lact = Xi()), (c.timestamp = W()));
  Ek(a, b, d, c);
}
const Ik = t.ytLoggingGelSequenceIdObj_ || {};
function Jk(a, b, c, d = {}) {
  var e = Math.round(d.timestamp || W());
  Sd(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
  e = new uf();
  if (d.lact) Sd(e, 1, isFinite(d.lact) ? d.lact : -1);
  else if (d.timestamp) Sd(e, 1, -1);
  else {
    var f = Xi();
    Sd(e, 1, isFinite(f) ? f : -1);
  }
  if (d.sequenceGroup && !S("web_gel_sequence_info_killswitch")) {
    f = d.sequenceGroup;
    const g = Fk(f),
      h = new tf();
    Sd(h, 2, g);
    I(h, 1, f);
    H(e, tf, 3, h);
    d.endOfSequence && delete Ik[d.sequenceGroup];
  }
  H(b, uf, 33, e);
  (d.sendIsolatedPayload ? lk : kk)(
    a,
    {
      endpoint: "log_event",
      payload: b,
      cttAuthInfo: d.cttAuthInfo,
      dangerousLogToVisitorSession: d.dangerousLogToVisitorSession,
    },
    c
  );
}
function Kk(a, b, c = {}) {
  let d = !1;
  R("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
  Jk(a, b, d ? null : Vi, c);
}
function Lk(a, b, c) {
  const d = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
  Ld(d, rf, 72, vf, a);
  c ? Jk("visualElementShown", d, c, b) : Kk("visualElementShown", d, b);
}
function Mk(a, b, c) {
  const d = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
  Ld(d, qf, 73, vf, a);
  c ? Jk("visualElementHidden", d, c, b) : Kk("visualElementHidden", d, b);
}
function Nk(a, b, c) {
  const d = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
  Ld(d, pf, 78, vf, a);
  c ? Jk("visualElementGestured", d, c, b) : Kk("visualElementGestured", d, b);
}
function Ok(a, b, c) {
  const d = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
  Ld(d, sf, 208, vf, a);
  c
    ? Jk("visualElementStateChanged", d, c, b)
    : Kk("visualElementStateChanged", d, b);
}
function Pk(a, b, c) {
  const d = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
  Ld(d, mf, 156, vf, a);
  c ? Jk("screenCreated", d, c, b) : Kk("screenCreated", d, b);
}
function Qk(a, b, c) {
  const d = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
  Ld(d, of, 215, vf, a);
  c ? Jk("visualElementAttached", d, c, b) : Kk("visualElementAttached", d, b);
}
var Rk = new Set(),
  Sk = 0,
  Tk = 0,
  Uk = 0,
  Vk = [];
const Wk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];
function Xk(a) {
  Yk(a);
}
function Zk(a) {
  Yk(a, "WARNING");
}
function Yk(a, b = "ERROR") {
  var c = {};
  c.name = R("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
  c.version = R("INNERTUBE_CONTEXT_CLIENT_VERSION");
  $k(a, c, b);
}
function $k(a, b, c = "ERROR") {
  if (a) {
    a.hasOwnProperty("level") && a.level && (c = a.level);
    if (S("console_log_js_exceptions")) {
      var d = [];
      d.push(`Name: ${a.name}`);
      d.push(`Message: ${a.message}`);
      a.hasOwnProperty("params") &&
        d.push(`Error Params: ${JSON.stringify(a.params)}`);
      a.hasOwnProperty("args") &&
        d.push(`Error args: ${JSON.stringify(a.args)}`);
      d.push(`File name: ${a.fileName}`);
      d.push(`Stacktrace: ${a.stack}`);
      window.console.log(d.join("\n"), a);
    }
    if (!(5 <= Sk)) {
      d = Vk;
      var e = Ga(a);
      const m = e.message || "Unknown Error",
        p = e.name || "UnknownError";
      var f = e.stack || a.i || "Not available";
      if (f.startsWith(`${p}: ${m}`)) {
        var g = f.split("\n");
        g.shift();
        f = g.join("\n");
      }
      g = e.lineNumber || "Not available";
      e = e.fileName || "Not available";
      let n = 0;
      if (a.hasOwnProperty("args") && a.args && a.args.length)
        for (
          var h = 0;
          h < a.args.length &&
          !((n = Dg(a.args[h], `params.${h}`, b, n)), 500 <= n);
          h++
        );
      else if (a.hasOwnProperty("params") && a.params) {
        const u = a.params;
        if ("object" === typeof a.params)
          for (h in u) {
            if (!u[h]) continue;
            const z = `params.${h}`,
              C = Fg(u[h]);
            b[z] = C;
            n += z.length + C.length;
            if (500 < n) break;
          }
        else b.params = Fg(u);
      }
      if (d.length)
        for (
          h = 0;
          h < d.length &&
          !((n = Dg(d[h], `params.context.${h}`, b, n)), 500 <= n);
          h++
        );
      navigator.vendor &&
        !b.hasOwnProperty("vendor") &&
        (b["device.vendor"] = navigator.vendor);
      b = {
        message: m,
        name: p,
        lineNumber: g,
        fileName: e,
        stack: f,
        params: b,
        sampleWeight: 1,
      };
      d = Number(a.columnNumber);
      isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
      if ("IGNORED" === a.level) var k = 0;
      else
        a: {
          a = wg();
          for (k of a.H)
            if (b.message && b.message.match(k.Ia)) {
              k = k.weight;
              break a;
            }
          for (var l of a.G)
            if (l.callback(b)) {
              k = l.weight;
              break a;
            }
          k = 1;
        }
      b.sampleWeight = k;
      k = b;
      for (var q of tg)
        if (q.X[k.name]) {
          l = q.X[k.name];
          for (const u of l)
            if ((l = k.message.match(u.u))) {
              k.params["params.error.original"] = l[0];
              a = u.groups;
              b = {};
              for (d = 0; d < a.length; d++)
                (b[a[d]] = l[d + 1]),
                  (k.params[`params.error.${a[d]}`] = l[d + 1]);
              k.message = q.ea(b);
              break;
            }
        }
      k.params || (k.params = {});
      q = wg();
      k.params[
        "params.errorServiceSignature"
      ] = `msg=${q.H.length}&cb=${q.G.length}`;
      k.params["params.serviceWorker"] = "true";
      t.document &&
        t.document.querySelectorAll &&
        (k.params["params.fscripts"] = String(
          document.querySelectorAll("script:not([nonce])").length
        ));
      ta("sample").constructor !== ra && (k.params["params.fconst"] = "true");
      window.yterr && "function" === typeof window.yterr && window.yterr(k);
      0 === k.sampleWeight || Rk.has(k.message) || al(k, c);
    }
  }
}
function al(a, b = "ERROR") {
  if ("ERROR" === b) {
    Ag.B("handleError", a);
    if (S("record_app_crashed_web") && 0 === Uk && 1 === a.sampleWeight)
      if ((Uk++, S("errors_via_jspb"))) {
        var c = new ef();
        c = J(c, 1, 1);
        if (!S("report_client_error_with_app_crash_ks")) {
          var d = new df();
          var e = new cf();
          var f = new bf();
          var g = new af();
          g = I(g, 1, a.message);
          f = H(f, af, 3, g);
          e = H(e, bf, 5, f);
          d = H(d, cf, 9, e);
          H(c, df, 4, d);
        }
        d = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
        Ld(d, ef, 20, vf, c);
        Kk("appCrashed", d);
      } else
        (c = { appCrashType: "APP_CRASH_TYPE_BREAKPAD" }),
          S("report_client_error_with_app_crash_ks") ||
            (c.systemHealth = {
              crashData: {
                clientError: { logMessage: { message: a.message } },
              },
            }),
          X("appCrashed", c);
    Tk++;
  } else "WARNING" === b && Ag.B("handleWarning", a);
  a: {
    if (S("errors_via_jspb")) {
      if (bl()) var h = void 0;
      else {
        c = new Ye();
        I(c, 1, a.stack);
        a.fileName && I(c, 4, a.fileName);
        var k =
          a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        0 !== k.length &&
          (1 !== k.length || isNaN(Number(k[0]))
            ? 2 !== k.length ||
              isNaN(Number(k[0])) ||
              isNaN(Number(k[1])) ||
              (Rd(c, 2, Number(k[0])), Rd(c, 3, Number(k[1])))
            : Rd(c, 2, Number(k[0])));
        k = new af();
        I(k, 1, a.message);
        I(k, 3, a.name);
        Rd(k, 6, a.sampleWeight);
        "ERROR" === b ? J(k, 2, 2) : "WARNING" === b ? J(k, 2, 1) : J(k, 2, 0);
        var l = new Ze();
        zd(l, 1, !0);
        Ld(l, Ye, 3, $e, c);
        c = new Xe();
        I(c, 3, window.location.href);
        d = R("FEXP_EXPERIMENTS", []);
        for (f = 0; f < d.length; f++) {
          g = c.o;
          e = d[f];
          var q = B(g);
          Rc(q);
          g = Cd(g, q, 5, 2);
          q = A(g);
          e = cd(e, !!(4 & q) && !!(4096 & q));
          g.push(e);
        }
        d = Vf();
        if (!Wf() && d)
          for (var m of Object.keys(d))
            (e = new We()), I(e, 1, m), I(e, 2, String(d[m])), Md(c, 4, We, e);
        if ((m = a.params))
          for (h of Object.keys(m))
            (d = new We()),
              I(d, 1, `client.${h}`),
              I(d, 2, String(m[h])),
              Md(c, 4, We, d);
        m = R("SERVER_NAME");
        h = R("SERVER_VERSION");
        m &&
          h &&
          ((d = new We()),
          I(d, 1, "server.name"),
          I(d, 2, m),
          Md(c, 4, We, d),
          (m = new We()),
          I(m, 1, "server.version"),
          I(m, 2, h),
          Md(c, 4, We, m));
        h = new bf();
        H(h, Xe, 1, c);
        H(h, Ze, 2, l);
        H(h, af, 3, k);
      }
      if (!h) break a;
      m = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
      Ld(m, bf, 163, vf, h);
      Kk("clientError", m);
    } else {
      h = {};
      if (bl()) h = void 0;
      else {
        c = { stackTrace: a.stack };
        a.fileName && (c.filename = a.fileName);
        m = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        0 !== m.length &&
          (1 !== m.length || isNaN(Number(m[0]))
            ? 2 !== m.length ||
              isNaN(Number(m[0])) ||
              isNaN(Number(m[1])) ||
              ((c.lineNumber = Number(m[0])), (c.columnNumber = Number(m[1])))
            : (c.lineNumber = Number(m[0])));
        m = {
          level: "ERROR_LEVEL_UNKNOWN",
          message: a.message,
          errorClassName: a.name,
          sampleWeight: a.sampleWeight,
        };
        "ERROR" === b
          ? (m.level = "ERROR_LEVEL_ERROR")
          : "WARNING" === b && (m.level = "ERROR_LEVEL_WARNNING");
        c = { isObfuscated: !0, browserStackInfo: c };
        h.pageUrl = window.location.href;
        h.kvPairs = [];
        R("FEXP_EXPERIMENTS") && (h.experimentIds = R("FEXP_EXPERIMENTS"));
        d = Vf();
        if (!Wf() && d)
          for (l of Object.keys(d))
            h.kvPairs.push({ key: l, value: String(d[l]) });
        if ((l = a.params))
          for (k of Object.keys(l))
            h.kvPairs.push({ key: `client.${k}`, value: String(l[k]) });
        k = R("SERVER_NAME");
        l = R("SERVER_VERSION");
        k &&
          l &&
          (h.kvPairs.push({ key: "server.name", value: k }),
          h.kvPairs.push({ key: "server.version", value: l }));
        h = { errorMetadata: h, stackTrace: c, logMessage: m };
      }
      if (!h) break a;
      X("clientError", h);
    }
    if ("ERROR" === b || S("errors_flush_gel_always_killswitch"))
      b: {
        if (S("web_fp_via_jspb")) {
          b = Hk;
          Hk = [];
          if (b) for (const p of b) Ek(p.P, p.payload, Vi, p.options);
          Gk(!0);
          if (!S("web_fp_via_jspb_and_json")) break b;
        }
        Gk();
      }
  }
  try {
    Rk.add(a.message);
  } catch (p) {}
  Sk++;
}
function bl() {
  for (const a of Wk) {
    const b = Ra();
    if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0;
  }
  return !1;
}
function cl(a, ...b) {
  a.args || (a.args = []);
  a.args.push(...b);
}
function dl(a) {
  return r(function* () {
    var b = yield t.fetch(a.i);
    if (200 !== b.status)
      return Promise.reject("Server error when retrieving AmbientData");
    b = yield b.text();
    if (!b.startsWith(")]}'\n"))
      return Promise.reject("Incorrect JSPB formatting");
    a: {
      b = JSON.parse(b.substring(5));
      for (let c = 0; c < b.length; c++)
        if ("yt.sw.adr" === b[c][0]) {
          b = new Qf(b[c]);
          break a;
        }
      b = null;
    }
    return b ? b : Promise.reject("AmbientData missing from response");
  });
}
function el(a = !1) {
  const b = fl.h;
  return r(function* () {
    if (a || !b.h)
      b.h = dl(b)
        .then(b.j)
        .catch((c) => {
          delete b.h;
          Yk(c);
        });
    return b.h;
  });
}
var fl = class {
  constructor() {
    this.i = gl("/sw.js_data");
  }
  j(a) {
    const b = Hd(a, Pf, 2);
    if (b) {
      var c = Od(b, 5);
      c && (t.__SAPISID = c);
      null != Nd(b, 10)
        ? Q("EOM_VISITOR_DATA", Od(b, 10))
        : null != Nd(b, 7) && Q("VISITOR_DATA", Od(b, 7));
      if (null != bd(wd(b, 4))) {
        c = String;
        var d = bd(wd(b, 4));
        Q("SESSION_INDEX", c(null != d ? d : 0));
      }
      null != Nd(b, 8) && Q("DELEGATED_SESSION_ID", Od(b, 8));
      null != Nd(b, 11) &&
        Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", Od(b, 11));
    }
    return a;
  }
};
function hl(a, b) {
  b.encryptedTokenJarContents &&
    ((a.h[b.encryptedTokenJarContents] = b),
    "string" === typeof b.expirationSeconds &&
      setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents];
      }, 1e3 * Number(b.expirationSeconds)));
}
var il = class {
  constructor() {
    this.h = {};
  }
  handleResponse(a, b) {
    if (!b) throw Error("request needs to be passed into ConsistencyService");
    let c, d;
    b =
      (null == (c = b.I.context)
        ? void 0
        : null == (d = c.request)
        ? void 0
        : d.consistencyTokenJars) || [];
    let e;
    if (
      (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar)
    ) {
      for (const f of b) delete this.h[f.encryptedTokenJarContents];
      hl(this, a);
    }
  }
};
let jl = Date.now().toString();
function kl() {
  const a = Array(16);
  for (var b = 0; 16 > b; b++) {
    var c = Date.now();
    for (let d = 0; d < c % 23; d++) a[b] = Math.random();
    a[b] = Math.floor(256 * Math.random());
  }
  if (jl)
    for (b = 1, c = 0; c < jl.length; c++)
      (a[b % 16] = a[b % 16] ^ (a[(b - 1) % 16] / 4) ^ jl.charCodeAt(c)), b++;
  return a;
}
function ll() {
  if (window.crypto && window.crypto.getRandomValues)
    try {
      const a = Array(16),
        b = new Uint8Array(16);
      window.crypto.getRandomValues(b);
      for (let c = 0; c < a.length; c++) a[c] = b[c];
      return a;
    } catch (a) {}
  return kl();
}
let ml = t.ytLoggingDocDocumentNonce_;
if (!ml) {
  const a = ll(),
    b = [];
  for (let c = 0; c < a.length; c++)
    b.push(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
        a[c] & 63
      )
    );
  ml = b.join("");
}
var nl = ml;
var ol = {
  Ua: 0,
  Ra: 1,
  Ta: 2,
  zb: 3,
  Va: 4,
  Jb: 5,
  Ab: 6,
  Gb: 7,
  Eb: 8,
  Fb: 9,
  0: "DEFAULT",
  1: "CHAT",
  2: "CONVERSATIONS",
  3: "MINIPLAYER",
  4: "DIALOG",
  5: "VOZ",
  6: "MUSIC_WATCH_TABS",
  7: "SHARE",
  8: "PUSH_NOTIFICATIONS",
  9: "RICH_GRID_WATCH",
};
let pl = 1;
function ql(a) {
  return new rl({ trackingParams: a });
}
function sl(a) {
  const b = pl++;
  return new rl({
    veType: a,
    veCounter: b,
    elementIndex: void 0,
    dataElement: void 0,
    youtubeData: void 0,
    jspbYoutubeData: void 0,
    loggingDirectives: void 0,
  });
}
var rl = class {
  constructor(a) {
    this.h = a;
  }
  getAsJson() {
    const a = {};
    void 0 !== this.h.trackingParams
      ? (a.trackingParams = this.h.trackingParams)
      : ((a.veType = this.h.veType),
        void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter),
        void 0 !== this.h.elementIndex &&
          (a.elementIndex = this.h.elementIndex));
    void 0 !== this.h.dataElement &&
      (a.dataElement = this.h.dataElement.getAsJson());
    void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
    this.h.isCounterfactual && (a.isCounterfactual = !0);
    return a;
  }
  getAsJspb() {
    const a = new F();
    void 0 !== this.h.trackingParams
      ? a.setTrackingParams(this.h.trackingParams)
      : (void 0 !== this.h.veType && Rd(a, 2, this.h.veType),
        void 0 !== this.h.veCounter && Rd(a, 6, this.h.veCounter),
        void 0 !== this.h.elementIndex && Rd(a, 3, this.h.elementIndex),
        this.h.isCounterfactual && zd(a, 5, !0));
    if (void 0 !== this.h.dataElement) {
      var b = this.h.dataElement.getAsJspb();
      H(a, F, 7, b);
    }
    void 0 !== this.h.youtubeData && H(a, Le, 8, this.h.jspbYoutubeData);
    return a;
  }
  toString() {
    return JSON.stringify(this.getAsJson());
  }
  isClientVe() {
    return !this.h.trackingParams && !!this.h.veType;
  }
  getLoggingDirectives() {
    return this.h.loggingDirectives;
  }
};
function tl(a = 0) {
  return R("client-screen-nonce-store", {})[a];
}
function ul(a, b = 0) {
  let c = R("client-screen-nonce-store");
  c || ((c = {}), Q("client-screen-nonce-store", c));
  c[b] = a;
}
function vl(a = 0) {
  return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`;
}
function wl(a = 0) {
  return R(vl(a));
}
function xl(a = 0) {
  return (a = wl(a))
    ? new rl({ veType: a, youtubeData: void 0, jspbYoutubeData: void 0 })
    : null;
}
function yl() {
  let a = R("csn-to-ctt-auth-info");
  a || ((a = {}), Q("csn-to-ctt-auth-info", a));
  return a;
}
function zl() {
  return Object.values(R("client-screen-nonce-store", {})).filter(
    (a) => void 0 !== a
  );
}
function Al(a = 0) {
  a = tl(a);
  if (!a && !R("USE_CSN_FALLBACK", !0)) return null;
  a || (a = "UNDEFINED_CSN");
  return a ? a : null;
}
function Bl(a) {
  for (const b of Object.values(ol)) if (Al(b) === a) return !0;
  return !1;
}
function Cl(a, b, c) {
  const d = yl();
  (c = Al(c)) && delete d[c];
  b && (d[a] = b);
}
function Dl(a) {
  return yl()[a];
}
function El(a, b, c = 0, d) {
  if (a !== tl(c) || b !== R(vl(c)))
    if (
      (Cl(a, d, c),
      ul(a, c),
      Q(vl(c), b),
      (b = () => {
        setTimeout(() => {
          if (a)
            if (S("web_time_via_jspb")) {
              const e = new ff();
              I(e, 1, nl);
              I(e, 2, a);
              const f = S("jspb_sparse_encoded_pivot") ? new N([{}]) : new N();
              Ld(f, ff, 111, vf, e);
              Kk("foregroundHeartbeatScreenAssociated", f);
            } else
              X("foregroundHeartbeatScreenAssociated", {
                clientDocumentNonce: nl,
                clientScreenNonce: a,
              });
        }, 0);
      }),
      "requestAnimationFrame" in window)
    )
      try {
        window.requestAnimationFrame(b);
      } catch (e) {
        b();
      }
    else b();
}
function Fl() {
  var a = R("INNERTUBE_CONTEXT");
  if (!a)
    return (
      Yk(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {}
    );
  a = Ba(a);
  S("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
  a.client || (a.client = {});
  var b = a.client;
  b.utcOffsetMinutes = -Math.floor(new Date().getTimezoneOffset());
  var c = ng();
  c ? (b.experimentsToken = c) : delete b.experimentsToken;
  il.h || (il.h = new il());
  b = il.h.h;
  c = [];
  let d = 0;
  for (var e in b) c[d++] = b[e];
  a.request = Object.assign({}, a.request, { consistencyTokenJars: c });
  a.user = Object.assign({}, a.user);
  if ((e = R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")))
    a.user.serializedDelegationContext = e;
  return a;
}
function Gl(a) {
  var b = a;
  if ((a = R("INNERTUBE_HOST_OVERRIDE"))) {
    a = String(a);
    var c = String,
      d = b.match(Ka);
    b = d[5];
    var e = d[6];
    d = d[7];
    var f = "";
    b && (f += b);
    e && (f += "?" + e);
    d && (f += "#" + d);
    b = a + c(f);
  }
  return b;
}
function Hl(a) {
  const b = { "Content-Type": "application/json" };
  R("EOM_VISITOR_DATA")
    ? (b["X-Goog-EOM-Visitor-Id"] = R("EOM_VISITOR_DATA"))
    : R("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = R("VISITOR_DATA"));
  b["X-Youtube-Bootstrap-Logged-In"] = R("LOGGED_IN", !1);
  R("DEBUG_SETTINGS_METADATA") &&
    (b["X-Debug-Settings-Metadata"] = R("DEBUG_SETTINGS_METADATA"));
  "cors" !== a &&
    ((a = R("INNERTUBE_CONTEXT_CLIENT_NAME")) &&
      (b["X-Youtube-Client-Name"] = a),
    (a = R("INNERTUBE_CONTEXT_CLIENT_VERSION")) &&
      (b["X-Youtube-Client-Version"] = a),
    (a = R("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a),
    (a = R("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
  return b;
}
var Il = class {
  constructor() {
    this.h = {};
  }
  get(a) {
    if (Object.prototype.hasOwnProperty.call(this.h, a)) return this.h[a];
  }
  set(a, b) {
    this.h[a] = b;
  }
  remove(a) {
    delete this.h[a];
  }
};
new (class {
  constructor() {
    this.mappings = new Il();
  }
  get(a) {
    a: {
      var b = this.mappings.get(a.toString());
      switch (b.type) {
        case "mapping":
          a = b.value;
          break a;
        case "factory":
          b = b.value();
          this.mappings.set(a.toString(), { type: "mapping", value: b });
          a = b;
          break a;
        default:
          a = Ea(b, void 0);
      }
    }
    return a;
  }
})();
var Jl = class {},
  Kl = class extends Jl {};
const Ll = {
  GET_DATASYNC_IDS: (function (a) {
    return () => new a();
  })(class extends Kl {}),
};
function Ml(a = !0) {
  a = a ? ll() : kl();
  const b = [];
  for (let c = 0; c < a.length; c++)
    b.push(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
        a[c] & 63
      )
    );
  return b.join("");
}
class Bi extends zi {
  constructor(a) {
    super(arguments);
    this.csn = a;
  }
}
const Ji = new Ai(),
  Nl = [];
let Pl = Ol,
  Ql = 0;
const Rl = new Map(),
  Sl = new Map(),
  Tl = new Map();
function Ul(a, b, c, d, e, f, g, h) {
  const k = Pl(),
    l = new rl({ veType: b, youtubeData: f, jspbYoutubeData: void 0 });
  f = Vl({}, k);
  e && (f.cttAuthInfo = e);
  var q = () => {
    Zk(new Gf("newScreen() parent element does not have a VE - rootVe", b));
  };
  if (S("il_via_jspb")) {
    e = lf(new mf().h(k), l.getAsJspb());
    c && c.visualElement
      ? ((q = new kf()),
        c.clientScreenNonce && I(q, 2, c.clientScreenNonce),
        jf(q, c.visualElement.getAsJspb()),
        g && J(q, 4, wf[g]),
        H(e, kf, 5, q))
      : c && q();
    d && I(e, 3, d);
    if (S("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
      c = new Ke();
      h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
      for (var m of h)
        m.screenVeType && ((h = Ie(new Je(), m.screenVeType)), Md(c, 1, Je, h));
      H(e, Ke, 7, c);
    }
    Pk(e, f, a);
  } else
    (m = { csn: k, pageVe: l.getAsJson() }),
      S("expectation_logging") &&
        h &&
        h.screenCreatedLoggingExpectations &&
        (m.screenCreatedLoggingExpectations =
          h.screenCreatedLoggingExpectations),
      c && c.visualElement
        ? ((m.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson(),
          }),
          g && (m.implicitGesture.gestureType = g))
        : c && q(),
      d && (m.cloneCsn = d),
      a ? Ek("screenCreated", m, a, f) : X("screenCreated", m, f);
  Gi(Ji, new Bi(k));
  Rl.clear();
  Sl.clear();
  Tl.clear();
  return k;
}
function Wl(a, b, c, d, e = !1) {
  Xl(a, b, c, [d], e);
}
function Xl(a, b, c, d, e = !1) {
  const f = Vl({ cttAuthInfo: Dl(b) || void 0 }, b);
  for (const h of d) {
    var g = h.getAsJson();
    (Aa(g) || (!g.trackingParams && !g.veType)) &&
      Zk(Error("Child VE logged with no data"));
    if (S("no_client_ve_attach_unless_shown")) {
      const k = Yl(h, b);
      if (g.veType && !Sl.has(k) && !Tl.has(k) && !e) {
        if (!S("il_attach_cache_limit") || 1e3 > Rl.size) {
          Rl.set(k, [a, b, c, h]);
          return;
        }
        S("il_attach_cache_limit") &&
          1e3 < Rl.size &&
          Zk(new Gf("IL Attach cache exceeded limit"));
      }
      g = Yl(c, b);
      Rl.has(g) ? Zl(c, b) : Tl.set(g, !0);
    }
  }
  d = d.filter((h) => {
    h.csn !== b ? ((h.csn = b), (h = !0)) : (h = !1);
    return h;
  });
  if (S("il_via_jspb")) {
    const h = nf(new of().h(b), c.getAsJspb());
    xa(d, (k) => {
      k = k.getAsJspb();
      Md(h, 3, F, k);
    });
    "UNDEFINED_CSN" === b
      ? Z("visualElementAttached", f, void 0, h)
      : Qk(h, f, a);
  } else
    (c = {
      csn: b,
      parentVe: c.getAsJson(),
      childVes: xa(d, (h) => h.getAsJson()),
    }),
      "UNDEFINED_CSN" === b
        ? Z("visualElementAttached", f, c)
        : a
        ? Ek("visualElementAttached", c, a, f)
        : X("visualElementAttached", c, f);
}
function $l(a, b, c, d, e, f) {
  am(a, b, c, e, f);
}
function am(a, b, c, d, e) {
  bm(c, b);
  const f = Vl({ cttAuthInfo: Dl(b) || void 0 }, b);
  S("il_via_jspb")
    ? ((d = new rf().h(b)),
      (c = c.getAsJspb()),
      (c = H(d, F, 2, c)),
      (c = J(c, 4, 1)),
      e && H(c, hf, 3, e),
      "UNDEFINED_CSN" === b
        ? Z("visualElementShown", f, void 0, c)
        : Lk(c, f, a))
    : ((e = { csn: b, ve: c.getAsJson(), eventType: 1 }),
      d && (e.clientData = d),
      "UNDEFINED_CSN" === b
        ? Z("visualElementShown", f, e)
        : a
        ? Ek("visualElementShown", e, a, f)
        : X("visualElementShown", e, f));
}
function cm(a, b, c, d = !1) {
  var e = d ? 16 : 8;
  const f = Vl({ cttAuthInfo: Dl(b) || void 0, endOfSequence: d }, b);
  S("il_via_jspb")
    ? ((e = new qf().h(b)),
      (c = c.getAsJspb()),
      (c = H(e, F, 2, c)),
      J(c, 4, d ? 16 : 8),
      "UNDEFINED_CSN" === b
        ? Z("visualElementHidden", f, void 0, c)
        : Mk(c, f, a))
    : ((d = { csn: b, ve: c.getAsJson(), eventType: e }),
      "UNDEFINED_CSN" === b
        ? Z("visualElementHidden", f, d)
        : a
        ? Ek("visualElementHidden", d, a, f)
        : X("visualElementHidden", d, f));
}
function dm(a, b, c, d) {
  var e = void 0;
  bm(c, b);
  e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
  const f = Vl({ cttAuthInfo: Dl(b) || void 0 }, b);
  S("il_via_jspb")
    ? ((d = new pf().h(b)),
      (c = c.getAsJspb()),
      (c = H(d, F, 2, c)),
      J(c, 4, wf[e]),
      "UNDEFINED_CSN" === b
        ? Z("visualElementGestured", f, void 0, c)
        : Nk(c, f, a))
    : ((e = { csn: b, ve: c.getAsJson(), gestureType: e }),
      d && (e.clientData = d),
      "UNDEFINED_CSN" === b
        ? Z("visualElementGestured", f, e)
        : a
        ? Ek("visualElementGestured", e, a, f)
        : X("visualElementGestured", e, f));
}
function Ol() {
  if (S("enable_web_96_bit_csn")) var a = Ml();
  else if (S("enable_web_96_bit_csn_no_crypto")) a = Ml(!1);
  else {
    a = Math.random() + "";
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    a = Ib(b, 3);
  }
  return a;
}
function Z(a, b, c, d) {
  Nl.push({ P: a, payload: c, J: d, options: b });
  Ql || (Ql = Ki());
}
function Li(a) {
  if (Nl) {
    for (const b of Nl)
      if (S("il_via_jspb") && b.J)
        switch ((b.J.h(a.csn), b.P)) {
          case "screenCreated":
            Pk(b.J, b.options);
            break;
          case "visualElementAttached":
            Qk(b.J, b.options);
            break;
          case "visualElementShown":
            Lk(b.J, b.options);
            break;
          case "visualElementHidden":
            Mk(b.J, b.options);
            break;
          case "visualElementGestured":
            Nk(b.J, b.options);
            break;
          case "visualElementStateChanged":
            Ok(b.J, b.options);
            break;
          default:
            Zk(new Gf("flushQueue unable to map payloadName to JSPB setter"));
        }
      else b.payload && ((b.payload.csn = a.csn), X(b.P, b.payload, b.options));
    Nl.length = 0;
  }
  Ql = 0;
}
function Yl(a, b) {
  return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`;
}
function bm(a, b) {
  if (S("no_client_ve_attach_unless_shown")) {
    var c = Yl(a, b);
    Sl.set(c, !0);
    Zl(a, b);
  }
}
function Zl(a, b) {
  a = Yl(a, b);
  Rl.has(a) &&
    ((b = Rl.get(a) || []), Wl(b[0], b[1], b[2], b[3], !0), Rl.delete(a));
}
function Vl(a, b) {
  S("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
  return a;
}
w("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});
const em = window;
class fm {
  constructor() {
    this.timing = {};
    this.clearResourceTimings = () => {};
    this.webkitClearResourceTimings = () => {};
    this.mozClearResourceTimings = () => {};
    this.msClearResourceTimings = () => {};
    this.oClearResourceTimings = () => {};
  }
}
var gm =
  em.performance ||
  em.mozPerformance ||
  em.msPerformance ||
  em.webkitPerformance ||
  new fm();
la(
  gm.clearResourceTimings ||
    gm.webkitClearResourceTimings ||
    gm.mozClearResourceTimings ||
    gm.msClearResourceTimings ||
    gm.oClearResourceTimings ||
    $a,
  gm
);
const hm = [
  "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse",
  "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse",
];
function im(a) {
  var b = { Pb: {} },
    c = Gg();
  if (void 0 !== cj.h) {
    const d = cj.h;
    a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
    if (a.some((e) => e))
      throw new Gf("InnerTubeTransportService is already initialized", a);
  } else cj.h = new cj(b, a, c);
}
function jm(a, b) {
  return r(function* () {
    var c;
    const d = null == a ? void 0 : null == (c = a.ha) ? void 0 : c.sessionIndex;
    c = yield ob(Ig(0, { sessionIndex: d }));
    return Promise.resolve(Object.assign({}, Hl(b), c));
  });
}
function km(a, b, c, d = () => {}) {
  return r(function* () {
    var e;
    if (null == b ? 0 : null == (e = b.I) ? 0 : e.context) {
      e = b.I.context;
      for (var f of []) yield f.Xb(e);
    }
    var g;
    if (null == (g = a.i) ? 0 : g.fc(b.input, b.I))
      return yield a.i.Tb(b.input, b.I);
    var h;
    if ((g = null == (h = b.config) ? void 0 : h.ac) && a.h.has(g))
      var k = a.h.get(g);
    else {
      h = JSON.stringify(b.I);
      let p;
      f = null != (p = null == (k = b.R) ? void 0 : k.headers) ? p : {};
      b.R = Object.assign({}, b.R, { headers: Object.assign({}, f, c) });
      k = Object.assign({}, b.R);
      "POST" === b.R.method && (k = Object.assign({}, k, { body: h }));
      k = a.l.fetch(b.input, k, b.config);
      g && a.h.set(g, k);
    }
    k = yield k;
    var l;
    let q;
    if (
      k &&
      "error" in k &&
      (null == (l = k) ? 0 : null == (q = l.error) ? 0 : q.details)
    ) {
      l = k.error.details;
      for (const p of l)
        (l = p["@type"]) && -1 < hm.indexOf(l) && (delete p["@type"], (k = p));
    }
    g && a.h.has(g) && a.h.delete(g);
    let m;
    !k &&
      (null == (m = a.i) ? 0 : m.Ob(b.input, b.I)) &&
      (k = yield a.i.Sb(b.input, b.I));
    d();
    return k || void 0;
  });
}
function lm(a, b, c) {
  var d = { ha: { identity: Jg } };
  let e = () => {};
  b.context || (b.context = Fl());
  return new y((f) =>
    r(function* () {
      var g = Gl(c);
      g = ig(g) ? "same-origin" : "cors";
      if (a.j.Na) {
        var h,
          k = null == d ? void 0 : null == (h = d.ha) ? void 0 : h.sessionIndex;
        h = Ig(0, { sessionIndex: k });
        g = Object.assign({}, Hl(g), h);
      } else g = yield jm(d, g);
      h = Gl(c);
      k = {};
      S("web_api_key_killswitch") &&
        ((R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") &&
          (null == g ? 0 : g.Authorization)) ||
          (k.key = R("INNERTUBE_API_KEY")));
      S("json_condensed_response") && (k.prettyPrint = "false");
      h = hg(h, k || {}, !1);
      k = {
        method: "POST",
        mode: ig(h) ? "same-origin" : "cors",
        credentials: ig(h) ? "same-origin" : "include",
      };
      var l = {};
      const q = {};
      for (const m of Object.keys(l)) l[m] && (q[m] = l[m]);
      0 < Object.keys(q).length && (k.headers = q);
      f(km(a, { input: h, R: k, I: b, config: d }, g, e));
    })
  );
}
var cj = class {
  constructor(a, b, c) {
    this.m = a;
    this.l = b;
    this.j = c;
    this.i = void 0;
    this.h = new Map();
    a.ga || (a.ga = {});
    a.ga = Object.assign({}, Ll, a.ga);
  }
};
var bj = new Zi();
let mm;
function nm() {
  if (!mm) {
    const a = hj();
    im({ fetch: (b, c) => ob(fetch(new Request(b, c))) });
    aj(a);
    mm = a.resolve(bj);
  }
  return mm;
}
function om(a) {
  return r(function* () {
    yield pm();
    Zk(a);
  });
}
function qm(a) {
  return r(function* () {
    yield pm();
    Yk(a);
  });
}
function rm(a) {
  r(function* () {
    var b = yield Zh();
    b
      ? yield Ti(a, b)
      : (yield el(),
        (b = { timestamp: a.timestamp }),
        (b = a.appShellAssetLoadReport
          ? {
              P: "appShellAssetLoadReport",
              payload: a.appShellAssetLoadReport,
              options: b,
            }
          : a.clientError
          ? { P: "clientError", payload: a.clientError, options: b }
          : void 0),
        b && X(b.P, b.payload));
  });
}
function pm() {
  return r(function* () {
    try {
      yield el();
    } catch (a) {}
  });
}
var sm = Symbol("trackingData"),
  tm = new WeakMap();
function um() {
  vm.h || (vm.h = new vm());
  return vm.h;
}
function wm(a, b, c) {
  const d = Al(c);
  return null === a.csn || d === a.csn || c
    ? d
    : ((a = new Gf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d,
      })),
      Zk(a),
      null);
}
function xm(a) {
  let b;
  return !(null == (b = ym(a)) || !b.loggingDirectives);
}
function zm(a) {
  a = ym(a);
  return (
    Math.floor(
      Number(
        (a &&
          a.loggingDirectives &&
          a.loggingDirectives.visibility &&
          a.loggingDirectives.visibility.types) ||
          ""
      )
    ) || 1
  );
}
function ym(a) {
  let b,
    c = a.data || (null == (b = a.props) ? void 0 : b.data);
  if (
    !c &&
    a.isWebComponentWrapper &&
    S("read_data_from_web_component_wrapper")
  ) {
    let d;
    c = null == (d = tm.get(a)) ? void 0 : d[sm];
  }
  return c;
}
var vm = class {
  constructor() {
    this.m = new Set();
    this.l = new Set();
    this.h = new Map();
    this.client = void 0;
    this.csn = null;
  }
  j(a) {
    this.client = a;
  }
  s() {
    this.clear();
    this.csn = Al();
  }
  clear() {
    this.m.clear();
    this.l.clear();
    this.h.clear();
    this.csn = null;
  }
  B(a, b, c) {
    b = this.i(a);
    var d = a.visualElement ? a.visualElement : b,
      e = this.m.has(d),
      f = this.h.get(d);
    this.m.add(d);
    this.h.set(d, !0);
    a.impressionLog && !e && a.impressionLog();
    if (b || a.visualElement)
      if ((c = wm(this, a, c))) {
        var g = xm(a);
        if (zm(a) || g) {
          d = a.visualElement ? a.visualElement : ql(b);
          var h = a.interactionLoggingClientData;
          b = a.interactionLoggingClientDataJspbType;
          g || e
            ? zm(a) & 4
              ? f ||
                ((a = this.client),
                bm(d, c),
                (e = Vl({ cttAuthInfo: Dl(c) || void 0 }, c)),
                S("il_via_jspb")
                  ? ((f = new rf().h(c)),
                    (d = d.getAsJspb()),
                    (f = H(f, F, 2, d)),
                    (f = J(f, 4, 4)),
                    b && H(f, hf, 3, b),
                    "UNDEFINED_CSN" === c
                      ? Z("visualElementShown", e, void 0, f)
                      : Lk(f, e, a))
                  : ((b = { csn: c, ve: d.getAsJson(), eventType: 4 }),
                    h && (b.clientData = h),
                    "UNDEFINED_CSN" === c
                      ? Z("visualElementShown", e, b)
                      : a
                      ? Ek("visualElementShown", b, a, e)
                      : X("visualElementShown", b, e)))
              : zm(a) & 1 && !e && am(this.client, c, d, h, b)
            : am(this.client, c, d, h, b);
        }
      }
  }
  v(a, b, c) {
    var d = this.i(a),
      e = a.visualElement ? a.visualElement : d;
    b = this.l.has(e);
    const f = this.h.get(e);
    this.l.add(e);
    this.h.set(e, !1);
    if (!1 === f) return !0;
    if (!d && !a.visualElement) return !1;
    c = wm(this, a, c);
    if (!c || (!zm(a) && xm(a))) return !1;
    d = a.visualElement ? a.visualElement : ql(d);
    zm(a) & 8
      ? cm(this.client, c, d)
      : zm(a) & 2 &&
        !b &&
        ((a = this.client),
        (b = Vl({ cttAuthInfo: Dl(c) || void 0 }, c)),
        S("il_via_jspb")
          ? ((e = new qf().h(c)),
            (d = d.getAsJspb()),
            (d = H(e, F, 2, d)),
            (d = J(d, 4, 2)),
            "UNDEFINED_CSN" === c
              ? Z("visualElementHidden", b, void 0, d)
              : Mk(d, b, a))
          : ((d = { csn: c, ve: d.getAsJson(), eventType: 2 }),
            "UNDEFINED_CSN" === c
              ? Z("visualElementHidden", b, d)
              : a
              ? Ek("visualElementHidden", d, a, b)
              : X("visualElementHidden", d, b)));
    return !0;
  }
  i(a) {
    const b = ym(a);
    let c, d;
    if (
      S("il_use_view_model_logging_context") &&
      (null == b
        ? 0
        : null == (c = b.context)
        ? 0
        : null == (d = c.loggingContext)
        ? 0
        : d.loggingDirectives)
    )
      return b.context.loggingContext.loggingDirectives.trackingParams || "";
    let e, f;
    if (
      null == b
        ? 0
        : null == (e = b.rendererContext)
        ? 0
        : null == (f = e.loggingContext)
        ? 0
        : f.loggingDirectives
    )
      return (
        b.rendererContext.loggingContext.loggingDirectives.trackingParams || ""
      );
    if (null == b ? 0 : b.loggingDirectives)
      return b.loggingDirectives.trackingParams || "";
    let g;
    return (null == (g = a.veContainer) ? 0 : g.trackingParams)
      ? a.veContainer.trackingParams
      : (null == b ? void 0 : b.trackingParams) || "";
  }
};
function Am() {
  Bm.h || (Bm.h = new Bm());
}
function Cm(a) {
  Am();
  Zf(um().B).bind(um())(a, void 0, 8);
}
function Dm(a) {
  Am();
  Zf(um().v).bind(um())(a, void 0, 8);
}
var Bm = class {
  j(a) {
    Zf(um().j).bind(um())(a);
  }
  clear() {
    Zf(um().clear).bind(um())();
  }
};
function Em() {
  Fm.h || (Fm.h = new Fm());
  return Fm.h;
}
function Gm(a, b, c = {}) {
  a.i.add(c.layer || 0);
  a.m = () => {
    Hm(a, b, c);
    const d = xl(c.layer);
    if (d) {
      for (const e of a.B) Im(a, e[0], e[1] || d, c.layer);
      for (const e of a.F) Jm(a, e[0], e[1]);
    }
  };
  Al(c.layer) || a.m();
  if (c.ja) for (const d of c.ja) Km(a, d, c.layer);
  else Yk(Error("Delayed screen needs a data promise."));
}
function Hm(a, b, c = {}) {
  var d = void 0;
  c.layer || (c.layer = 0);
  d = void 0 !== c.Ja ? c.Ja : c.layer;
  const e = Al(d);
  d = xl(d);
  let f;
  d &&
    (void 0 !== c.parentCsn
      ? (f = { clientScreenNonce: c.parentCsn, visualElement: d })
      : e &&
        "UNDEFINED_CSN" !== e &&
        (f = { clientScreenNonce: e, visualElement: d }));
  let g;
  const h = R("EVENT_ID");
  "UNDEFINED_CSN" === e &&
    h &&
    (g = { servletData: { serializedServletEventId: h } });
  S("combine_ve_grafts") && e && Lm(a, e);
  S("no_client_ve_attach_unless_shown") && d && e && Zl(d, e);
  let k;
  try {
    k = Ul(a.client, b, f, c.ia, c.cttAuthInfo, g, c.Rb, c.loggingExpectations);
  } catch (m) {
    cl(m, { cc: b, rootVe: d, Wb: void 0, Qb: e, Vb: f, ia: c.ia });
    Yk(m);
    return;
  }
  El(k, b, c.layer, c.cttAuthInfo);
  e && "UNDEFINED_CSN" !== e && d && !Bl(e) && cm(a.client, e, d, !0);
  a.h[a.h.length - 1] &&
    !a.h[a.h.length - 1].csn &&
    (a.h[a.h.length - 1].csn = k || "");
  Am();
  Zf(um().s).bind(um())();
  const l = xl(c.layer);
  e &&
    "UNDEFINED_CSN" !== e &&
    l &&
    (S("web_mark_root_visible") || S("music_web_mark_root_visible")) &&
    Zf($l)(void 0, k, l, void 0, void 0, void 0);
  a.i.delete(c.layer || 0);
  a.m = void 0;
  let q;
  null == (q = a.aa.get(c.layer)) ||
    q.forEach((m, p) => {
      m ? Im(a, p, m, c.layer) : l && Im(a, p, l, c.layer);
    });
  Mm(a);
}
function Nm(a) {
  var b = 28631,
    c = { layer: 8 };
  Zf(() => {
    [28631].includes(b) ||
      (Zk(new Gf("createClientScreen() called with a non-page VE", b)),
      (b = 83769));
    c.isHistoryNavigation || a.h.push({ rootVe: b, key: c.key || "" });
    a.B = [];
    a.F = [];
    c.ja ? Gm(a, b, c) : Hm(a, b, c);
  })();
}
function Km(a, b, c = 0) {
  Zf(() => {
    b.then((d) => {
      a.i.has(c) && a.m && a.m();
      const e = Al(c),
        f = xl(c);
      if (e && f) {
        var g;
        (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) &&
          Wl(a.client, e, f, ql(d.response.trackingParams));
        var h;
        (null == d
          ? 0
          : null == (h = d.playerResponse)
          ? 0
          : h.trackingParams) &&
          Wl(a.client, e, f, ql(d.playerResponse.trackingParams));
      }
    });
  })();
}
function Im(a, b, c, d = 0) {
  Zf(() => {
    if (a.i.has(d)) return a.B.push([b, c]), !0;
    const e = Al(d),
      f = c || xl(d);
    if (e && f) {
      if (S("combine_ve_grafts")) {
        const g = a.l.get(f.toString());
        g ? g.push(b) : (a.v.set(f.toString(), f), a.l.set(f.toString(), [b]));
        a.M ||
          (a.M = Mg(() => {
            Lm(a, e);
          }, 1200));
      } else Wl(a.client, e, f, b);
      return !0;
    }
    return !1;
  })();
}
function Om(a, b) {
  return Zf(() => {
    const c = ql(b);
    Im(a, c, void 0, 8);
    return c;
  })();
}
function Lm(a, b) {
  if (void 0 === b) {
    const c = zl();
    for (let d = 0; d < c.length; d++) void 0 !== c[d] && Lm(a, c[d]);
  } else
    a.l.forEach((c, d) => {
      (d = a.v.get(d)) && Xl(a.client, b, d, c);
    }),
      a.l.clear(),
      a.v.clear(),
      (a.M = void 0);
}
function Pm(a, b, c = 0) {
  (c = Al(c)) && dm(a.client, c, b);
}
function Qm(a, b, c, d = 0) {
  if (!b) return !1;
  d = Al(d);
  if (!d) return !1;
  dm(a.client, d, ql(b), c);
  return !0;
}
function Rm(a, b) {
  const c = b.getScreenLayer && b.getScreenLayer();
  b.visualElement
    ? Pm(a, b.visualElement, c)
    : (Am(), (b = Zf(um().i).bind(um())(b)), Qm(a, b, void 0, c));
}
function Jm(a, b, c, d = 0) {
  const e = Al(d);
  d = b || xl(d);
  if (e && d)
    if (
      ((a = a.client),
      (b = Vl({ cttAuthInfo: Dl(e) || void 0 }, e)),
      S("il_via_jspb"))
    ) {
      const f = new sf();
      f.h(e);
      c = f;
      d = d.getAsJspb();
      H(c, F, 2, d);
      "UNDEFINED_CSN" === e
        ? Z("visualElementStateChanged", b, void 0, f)
        : Ok(f, b, a);
    } else
      (c = { csn: e, ve: d.getAsJson(), clientData: c }),
        "UNDEFINED_CSN" === e
          ? Z("visualElementStateChanged", b, c)
          : a
          ? Ek("visualElementStateChanged", c, a, b)
          : X("visualElementStateChanged", c, b);
}
function Mm(a) {
  for (var b = 0; b < a.s.length; b++) {
    var c = a.s[b];
    try {
      c();
    } catch (d) {
      Yk(d);
    }
  }
  a.s.length = 0;
  for (b = 0; b < a.K.length; b++) {
    c = a.K[b];
    try {
      c();
    } catch (d) {
      Yk(d);
    }
  }
}
var Fm = class {
  constructor() {
    this.B = [];
    this.F = [];
    this.h = [];
    this.s = [];
    this.K = [];
    this.l = new Map();
    this.v = new Map();
    this.i = new Set();
    this.aa = new Map();
  }
  j(a) {
    this.client = a;
  }
  clickCommand(a, b, c = 0) {
    return Qm(this, a.clickTrackingParams, b, c);
  }
  stateChanged(a, b, c = 0) {
    this.visualElementStateChanged(ql(a), b, c);
  }
  visualElementStateChanged(a, b, c = 0) {
    0 === c && this.i.has(c) ? this.F.push([a, b]) : Jm(this, a, b, c);
  }
};
const Sm = { granted: "GRANTED", denied: "DENIED", unknown: "UNKNOWN" },
  Tm = RegExp("^(?:[a-z]+:)?//", "i");
function Um(a) {
  var b = a.data;
  a = b.type;
  b = b.data;
  "notifications_register" === a
    ? (O("IDToken", b), Vm())
    : "notifications_check_registration" === a && Wm(b);
}
function Xm() {
  return self.clients
    .matchAll({ type: "window", includeUncontrolled: !0 })
    .then((a) => {
      if (a)
        for (const b of a)
          b.postMessage({ type: "update_unseen_notifications_count_signal" });
    });
}
function Ym(a) {
  const b = [];
  a.forEach((c) => {
    b.push({ key: c.key, value: c.value });
  });
  return b;
}
function Zm(a) {
  return r(function* () {
    const b = Ym(a.payload.chrome.extraUrlParams),
      c = {
        recipientId: a.recipientId,
        endpoint: a.payload.chrome.endpoint,
        extraUrlParams: b,
      },
      d = Of(Bf);
    return $m().then((e) =>
      lm(e, c, d).then((f) => {
        f.json()
          .then((g) =>
            g && g.endpointUrl ? an(a, g.endpointUrl) : Promise.resolve()
          )
          .catch((g) => {
            qm(g);
            Promise.reject(g);
          });
      })
    );
  });
}
function bn(a, b) {
  var c = Al(8);
  if (null == c || !b) return a;
  a = Tm.test(a) ? new URL(a) : new URL(a, self.registration.scope);
  a.searchParams.set("parentCsn", c);
  a.searchParams.set("parentTrackingParams", b);
  return a.toString();
}
function an(a, b) {
  a.deviceId && O("DeviceId", a.deviceId);
  a.timestampSec && O("TimestampLowerBound", a.timestampSec);
  const c = a.payload.chrome,
    d = Em();
  Nm(d);
  var e;
  const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
  e = c.title;
  const g = {
    body: c.body,
    icon: c.iconUrl,
    data: {
      nav: bn(b, f),
      id: c.notificationId,
      attributionTag: c.attributionTag,
      clickEndpoint: c.clickEndpoint,
      postedEndpoint: c.postedEndpoint,
      clickTrackingParams: f,
      isDismissed: !0,
    },
    tag: c.notificationTag || c.title + c.body + c.iconUrl,
    requireInteraction: !0,
  };
  return self.registration
    .showNotification(e, g)
    .then(() => {
      var h;
      (null == (h = g.data) ? 0 : h.postedEndpoint) &&
        cn(g.data.postedEndpoint);
      let k;
      if (null == (k = g.data) ? 0 : k.clickTrackingParams)
        (h = {
          screenLayer: 8,
          visualElement: Om(d, g.data.clickTrackingParams),
        }),
          Cm(h);
      dn(a.displayCap);
    })
    .catch(() => {});
}
function cn(a) {
  if (!Ij(a, Af)) return Promise.reject();
  const b = {
      serializedRecordNotificationInteractionsRequest: Ij(a, Af)
        .serializedInteractionsRequest,
    },
    c = Of(Cf);
  return $m()
    .then((d) => lm(d, b, c))
    .then((d) => d);
}
function dn(a) {
  -1 !== a &&
    self.registration.getNotifications().then((b) => {
      for (let d = 0; d < b.length - a; d++) {
        b[d].data.isDismissed = !1;
        b[d].close();
        let e;
        if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
          let f;
          var c = ql(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
          const g = { screenLayer: 8, visualElement: c },
            h = sl(82046),
            k = Em();
          Im(k, h, c, 8);
          c = { screenLayer: 8, visualElement: h };
          Cm(c);
          Rm(k, c);
          Dm(g);
        }
      }
    });
}
function Wm(a) {
  const b = [en(a), Kf("RegistrationTimestamp").then(fn), gn(), hn(), jn()];
  Promise.all(b).catch(() => {
    O("IDToken", a);
    Vm();
    return Promise.resolve();
  });
}
function fn(a) {
  return 9e7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject();
}
function en(a) {
  return Kf("IDToken").then((b) =>
    a === b ? Promise.resolve() : Promise.reject()
  );
}
function gn() {
  return Kf("Permission").then((a) =>
    Notification.permission === a ? Promise.resolve() : Promise.reject()
  );
}
function hn() {
  return Kf("Endpoint").then((a) =>
    kn().then((b) => (a === b ? Promise.resolve() : Promise.reject()))
  );
}
function jn() {
  return Kf("application_server_key").then((a) =>
    ln().then((b) => (a === b ? Promise.resolve() : Promise.reject()))
  );
}
function mn() {
  var a = Notification.permission;
  if (Sm[a]) return Sm[a];
}
function Vm() {
  O("RegistrationTimestamp", 0);
  Promise.all([kn(), nn(), on(), ln()])
    .then(([a, b, c, d]) => {
      b = b ? Ef(b) : null;
      c = c ? Ef(c) : null;
      d = d ? Ib(new Uint8Array(d), 4) : null;
      pn(a, b, c, d);
    })
    .catch(() => {
      pn();
    });
}
function pn(a = null, b = null, c = null, d = null) {
  Jf().then((e) => {
    e &&
      (O("Endpoint", a),
      O("P256dhKey", b),
      O("AuthKey", c),
      O("application_server_key", d),
      O("Permission", Notification.permission),
      Promise.all([Kf("DeviceId"), Kf("NotificationsDisabled")]).then(
        ([f, g]) => {
          if (null != f) var h = f;
          else {
            f = [];
            var k;
            h = h || Ee.length;
            for (k = 0; 256 > k; k++) f[k] = Ee[0 | (Math.random() * h)];
            h = f.join("");
          }
          qn(
            h,
            null != a ? a : void 0,
            null != b ? b : void 0,
            null != c ? c : void 0,
            null != d ? d : void 0,
            null != g ? g : void 0
          );
        }
      ));
  });
}
function qn(a, b, c, d, e, f) {
  r(function* () {
    const g = {
        notificationRegistration: {
          chromeRegistration: {
            deviceId: a,
            pushParams: {
              applicationServerKey: e,
              authKey: d,
              p256dhKey: c,
              browserEndpoint: b,
            },
            notificationsDisabledInApp: f,
            permission: mn(),
          },
        },
      },
      h = Of(Df);
    return $m().then((k) =>
      lm(k, g, h).then(
        () => {
          O("DeviceId", a);
          O("RegistrationTimestamp", Date.now());
          O("TimestampLowerBound", Date.now());
        },
        (l) => {
          om(l);
        }
      )
    );
  });
}
function kn() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) => (a ? Promise.resolve(a.endpoint) : Promise.resolve(null)));
}
function nn() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a && a.getKey
        ? Promise.resolve(a.getKey("p256dh"))
        : Promise.resolve(null)
    );
}
function on() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null)
    );
}
function ln() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a
        ? Promise.resolve(a.options.applicationServerKey)
        : Promise.resolve(null)
    );
}
function $m() {
  return r(function* () {
    try {
      return yield el(!0), nm();
    } catch (a) {
      return yield om(a), Promise.reject(a);
    }
  });
}
let rn = self.location.origin + "/";
function gl(a) {
  let b =
    "undefined" !== typeof ServiceWorkerGlobalScope &&
    self instanceof ServiceWorkerGlobalScope
      ? xe.registration.scope
      : rn;
  b.endsWith("/") && (b = b.slice(0, -1));
  return b + a;
}
let sn = void 0;
function tn(a) {
  return r(function* () {
    sn || (sn = yield a.open("yt-appshell-assets"));
    return sn;
  });
}
function un(a, b) {
  return r(function* () {
    const c = yield tn(a),
      d = b.map((e) => vn(c, e));
    return Promise.all(d);
  });
}
function wn(a, b) {
  return r(function* () {
    let c;
    try {
      c = yield a.match(b, { cacheName: "yt-appshell-assets" });
    } catch (d) {}
    return c;
  });
}
function xn(a, b) {
  return r(function* () {
    const c = yield tn(a),
      d = (yield c.keys())
        .filter((e) => !b.includes(e.url))
        .map((e) => c.delete(e));
    return Promise.all(d);
  });
}
function yn(a, b, c) {
  return r(function* () {
    yield (yield tn(a)).put(b, c);
  });
}
function zn(a, b) {
  r(function* () {
    yield (yield tn(a)).delete(b);
  });
}
function vn(a, b) {
  return r(function* () {
    return (yield a.match(b)) ? Promise.resolve() : a.add(b);
  });
}
var An = hi("yt-serviceworker-metadata", {
  O: { auth: { N: 1 }, ["resource-manifest-assets"]: { N: 2 } },
  shared: !0,
  upgrade(a, b) {
    b(1) && wh(a, "resource-manifest-assets");
    b(2) && wh(a, "auth");
  },
  version: 2,
});
let Bn = null;
function Cn(a) {
  return Ph(An(), a);
}
function Dn() {
  return r(function* () {
    const a = yield Zh();
    if (a) return En.h || (En.h = new En(a)), En.h;
  });
}
function Fn(a, b) {
  return r(function* () {
    yield sh(
      yield Cn(a.token),
      ["resource-manifest-assets"],
      "readwrite",
      (c) => {
        const d = c.objectStore("resource-manifest-assets"),
          e = Date.now();
        return V(d.h.put(b, e)).then(() => {
          Bn = e;
          let f = !0;
          return Bh(
            d,
            { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
            (g) =>
              f ? ((f = !1), Kh(g)) : d.delete(g.getKey()).then(() => Eh(g))
          );
        });
      }
    );
  });
}
function Gn(a, b) {
  return r(function* () {
    let c = !1,
      d = 0;
    yield sh(yield Cn(a.token), ["resource-manifest-assets"], "readonly", (e) =>
      Bh(
        e.objectStore("resource-manifest-assets"),
        { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
        (f) => {
          if (f.cursor.value.includes(b)) c = !0;
          else return (d += 1), Eh(f);
        }
      )
    );
    return c ? d : -1;
  });
}
function Hn(a) {
  return r(function* () {
    Bn ||
      (yield sh(
        yield Cn(a.token),
        ["resource-manifest-assets"],
        "readonly",
        (b) =>
          Bh(
            b.objectStore("resource-manifest-assets"),
            { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
            (c) => {
              Bn = c.getKey();
            }
          )
      ));
    return Bn;
  });
}
var En = class {
  constructor(a) {
    this.token = a;
  }
};
function In() {
  return r(function* () {
    const a = yield Zh();
    if (a) return Jn.h || (Jn.h = new Jn(a)), Jn.h;
  });
}
function Kn(a, b) {
  return r(function* () {
    yield yh(yield Cn(a.token), "auth", b, "shell_identifier_key");
  });
}
function Ln(a) {
  return r(function* () {
    return (
      (yield (yield Cn(a.token)).get("auth", "shell_identifier_key")) || ""
    );
  });
}
function Mn(a) {
  return r(function* () {
    yield (yield Cn(a.token)).clear("auth");
  });
}
var Jn = class {
  constructor(a) {
    this.token = a;
  }
};
function Nn() {
  r(function* () {
    const a = yield In();
    a && (yield Mn(a));
  });
}
var On = class extends K {
    constructor(a) {
      super(a);
    }
    hasUrl() {
      return null != Nd(this, 1);
    }
  },
  Pn = [0, me];
function Qn(a) {
  a = a.o;
  const b = B(a);
  return Id(a, b, On, 1, !1, !(2 & b));
}
var Rn = class extends K {
  constructor(a) {
    super(a);
  }
};
Rn.A = [1];
var Sn = (function (a, b) {
  return (c, d) => {
    a: {
      if (xc.length) {
        const f = xc.pop();
        sc(f, d);
        f.h.init(c, void 0, void 0, d);
        c = f;
      } else c = new wc(c, d);
      try {
        const f = new a(),
          g = f.o;
        Vd(b)(g, c);
        var e = f;
        break a;
      } finally {
        c.h.clear(), (c.l = -1), (c.i = -1), 100 > xc.length && xc.push(c);
      }
      e = void 0;
    }
    return e;
  };
})(Rn, [0, ne, Pn]);
function Tn(a) {
  return r(function* () {
    const b = a.headers.get("X-Resource-Manifest");
    return b
      ? Promise.resolve(Un(b))
      : Promise.reject(Error("No resource manifest header"));
  });
}
function Un(a) {
  return Qn(Sn(decodeURIComponent(a))).reduce((b, c) => {
    (c = Od(c, 1)) && b.push(c);
    return b;
  }, []);
}
function Vn(a) {
  return r(function* () {
    const b = yield el();
    if (b && null != Nd(b, 3)) {
      var c = yield In();
      c && ((c = yield Ln(c)), Nd(b, 3) !== c && (zn(a.caches, a.h), Nn()));
    }
  });
}
function Wn(a) {
  return r(function* () {
    let b, c;
    try {
      (c = yield Xn(a.i)), (b = yield Tn(c)), yield un(a.caches, b);
    } catch (d) {
      return Promise.reject(d);
    }
    try {
      yield Yn(), yield yn(a.caches, a.h, c);
    } catch (d) {
      return Promise.reject(d);
    }
    if (b)
      try {
        yield Zn(a, b, a.h);
      } catch (d) {}
    return Promise.resolve();
  });
}
function $n(a) {
  return r(function* () {
    yield Vn(a);
    return Wn(a);
  });
}
function Xn(a) {
  return r(function* () {
    try {
      return yield t.fetch(new Request(a));
    } catch (b) {
      return Promise.reject(b);
    }
  });
}
function Yn() {
  return r(function* () {
    var a = yield el();
    let b;
    a && null != Nd(a, 3) && (b = Od(a, 3));
    return b
      ? (a = yield In())
        ? Promise.resolve(Kn(a, b))
        : Promise.reject(Error("Could not get AuthMonitor instance"))
      : Promise.reject(Error("Could not get datasync ID"));
  });
}
function Zn(a, b, c) {
  return r(function* () {
    const d = yield Dn();
    if (d)
      try {
        yield Fn(d, b);
      } catch (e) {
        yield om(e);
      }
    b.push(c);
    try {
      yield xn(a.caches, b);
    } catch (e) {
      yield om(e);
    }
    return Promise.resolve();
  });
}
function ao(a, b) {
  return r(function* () {
    return wn(a.caches, b);
  });
}
function bo(a) {
  return r(function* () {
    return wn(a.caches, a.h);
  });
}
var co = class {
  constructor() {
    var a = self.caches;
    let b = gl("/app_shell");
    S("service_worker_forward_exp_params") && (b += self.location.search);
    var c = gl("/app_shell_home");
    this.caches = a;
    this.i = b;
    this.h = c;
  }
};
var eo = class {
  constructor() {
    const a = this;
    this.stream = new ReadableStream({
      start(b) {
        a.close = () => void b.close();
        a.h = (c) => {
          const d = c.getReader();
          return d.read().then(function h({ done: f, value: g }) {
            if (f) return Promise.resolve();
            b.enqueue(g);
            return d.read().then(h);
          });
        };
        a.i = () => {
          const c = new TextEncoder().encode(
            "<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>"
          );
          b.enqueue(c);
        };
      },
    });
  }
};
function fo(a, b) {
  return r(function* () {
    const c = b.request,
      d = yield ao(a.h, c.url);
    if (d)
      return (
        a.i &&
          rm({
            appShellAssetLoadReport: { assetPath: c.url, cacheHit: !0 },
            timestamp: W(),
          }),
        d
      );
    go(a, c);
    return ho(b);
  });
}
function io(a, b) {
  return r(function* () {
    const c = yield jo(b);
    if (
      c.response &&
      (c.response.ok ||
        "opaqueredirect" === c.response.type ||
        429 === c.response.status ||
        303 === c.response.status ||
        (300 <= c.response.status && 400 > c.response.status))
    )
      return c.response;
    const d = yield bo(a.h);
    if (d) return ko(a), lo(d, b);
    mo(a);
    return c.response ? c.response : Promise.reject(c.error);
  });
}
function no(a, b) {
  b = new URL(b);
  if (!a.config.va.includes(b.pathname)) return !1;
  if (!b.search) return !0;
  b = new URLSearchParams(b.search);
  for (const c of a.config.xa)
    if (((a = b.get(c.key)), void 0 === c.value || a === c.value))
      if ((b.delete(c.key), !b.toString())) return !0;
  return !1;
}
function oo(a, b) {
  return r(function* () {
    const c = yield bo(a.h);
    if (!c) return mo(a), ho(b);
    ko(a);
    var d;
    a: {
      if (
        c.headers &&
        (d = c.headers.get("date")) &&
        ((d = Date.parse(d)), !isNaN(d))
      ) {
        d = Math.round(W() - d);
        break a;
      }
      d = -1;
    }
    if (!(-1 < d && 7 <= d / 864e5)) return lo(c, b);
    d = yield jo(b);
    return d.response && d.response.ok ? d.response : lo(c, b);
  });
}
function ho(a) {
  return Promise.resolve(a.preloadResponse).then((b) =>
    b && !po(b) ? b : t.fetch(a.request)
  );
}
function go(a, b) {
  if (a.i) {
    var c = { assetPath: b.url, cacheHit: !1 };
    Dn().then((d) => {
      if (d) {
        var e = Hn(d).then((f) => {
          f && (c.currentAppBundleTimestampSec = String(Math.floor(f / 1e3)));
        });
        d = Gn(d, b.url).then((f) => {
          c.appBundleVersionDiffCount = f;
        });
        Promise.all([e, d])
          .catch((f) => {
            om(f);
          })
          .finally(() => {
            rm({ appShellAssetLoadReport: c, timestamp: W() });
          });
      } else rm({ appShellAssetLoadReport: c, timestamp: W() });
    });
  }
}
function ko(a) {
  a.i &&
    rm({
      appShellAssetLoadReport: { assetPath: a.h.h, cacheHit: !0 },
      timestamp: W(),
    });
}
function mo(a) {
  a.i &&
    rm({
      appShellAssetLoadReport: { assetPath: a.h.h, cacheHit: !1 },
      timestamp: W(),
    });
}
function lo(a, b) {
  if (!S("sw_nav_preload_pbj")) return a;
  const c = new eo(),
    d = c.h(a.body);
  Promise.resolve(b.preloadResponse)
    .then((e) => {
      if (!e || !po(e)) throw Error("no pbj preload response available");
      d.then(() => c.h(e.body)).then(() => void c.close());
    })
    .catch(() => {
      d.then(() => {
        c.i();
        c.close();
      });
    });
  return new Response(c.stream, {
    status: a.status,
    statusText: a.statusText,
    headers: a.headers,
  });
}
function jo(a) {
  return r(function* () {
    try {
      return { response: yield ho(a) };
    } catch (b) {
      return { error: b };
    }
  });
}
function po(a) {
  return "pbj" === a.headers.get("x-navigation-preload-response-type");
}
var yo = class {
  constructor() {
    var a = qo;
    var b = {
      Aa: ro,
      Ka: so([to, /\/signin/, /\/logout/]),
      va: ["/", "/feed/downloads"],
      xa: uo([{ key: "feature", value: "ytca" }]),
      wa: vo(S("kevlar_sw_app_wide_fallback") ? wo : xo),
    };
    this.h = a;
    this.config = b;
    a = T("app_shell_asset_log_fraction");
    this.i = !0;
    a && (this.i = Math.random() < a);
  }
};
const zo = /^\/$/,
  xo = [zo, /^\/feed\/downloads$/],
  wo = [
    zo,
    /^\/feed\/\w*/,
    /^\/results$/,
    /^\/playlist$/,
    /^\/watch$/,
    /^\/channel\/\w*/,
  ];
function vo(a) {
  return new RegExp(a.map((b) => b.source).join("|"));
}
const Ao = /^https:\/\/([\w-]*\.)*youtube\.com.*/;
function so(a) {
  a = vo(a);
  return new RegExp(`${Ao.source}(${a.source})`);
}
const Bo = vo([
    /\.css$/,
    /\.js$/,
    /\.ico$/,
    /\/ytmweb\/_\/js\//,
    /\/ytmweb\/_\/ss\//,
    /\/kabuki\/_\/js\//,
    /\/kabuki\/_\/ss\//,
    /\/ytmainappweb\/_\/ss\//,
  ]),
  ro = new RegExp(`${Ao.source}(${Bo.source})`),
  to = /purge_shell=1/;
function uo(a = []) {
  const b = [];
  for (const c of lg) b.push({ key: c });
  for (const c of a) b.push(c);
  return b;
}
so([to]);
uo();
var Do = class {
  constructor() {
    var a = qo,
      b = Co,
      c = self;
    if (t.URLPattern) {
      var d = [];
      S("service_worker_static_routing_exclude_embed") &&
        d.push({
          condition: { urlPattern: new URLPattern({ pathname: "/embed*" }) },
          source: "network",
        });
      S("service_worker_static_routing_exclude_innertube") &&
        d.push({
          condition: {
            urlPattern: new URLPattern({ pathname: "/youtubei/v1/*" }),
          },
          source: "network",
        });
    } else d = [];
    this.h = c;
    this.i = a;
    this.s = b;
    this.F = Ff;
    this.j = d;
  }
  init() {
    this.h.oninstall = this.v.bind(this);
    this.h.onactivate = this.l.bind(this);
    this.h.onfetch = this.m.bind(this);
    this.h.onmessage = this.B.bind(this);
  }
  v(a) {
    this.h.skipWaiting();
    if (
      S("service_worker_static_routing_registration") &&
      0 < this.j.length &&
      a.addRoutes
    )
      try {
        a.addRoutes(this.j);
      } catch (c) {}
    const b = $n(this.i).catch((c) => {
      om(c);
      return Promise.resolve();
    });
    a.waitUntil(b);
  }
  l(a) {
    const b = [this.h.clients.claim()],
      c = this.h.registration;
    c.navigationPreload &&
      (b.push(c.navigationPreload.enable()),
      S("sw_nav_preload_pbj") &&
        b.push(c.navigationPreload.setHeaderValue("pbj")));
    a.waitUntil(Promise.all(b));
  }
  m(a) {
    const b = this;
    return r(function* () {
      var c = b.s,
        d = !!b.h.registration.navigationPreload;
      const e = a.request;
      if (c.config.Ka.test(e.url))
        fl.h &&
          (delete fl.h.h,
          (t.__SAPISID = void 0),
          Q("VISITOR_DATA", void 0),
          Q("SESSION_INDEX", void 0),
          Q("DELEGATED_SESSION_ID", void 0),
          Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", void 0)),
          (d = a.respondWith),
          (c = c.h),
          zn(c.caches, c.h),
          Nn(),
          (c = ho(a)),
          d.call(a, c);
      else if (c.config.Aa.test(e.url)) a.respondWith(fo(c, a));
      else if ("navigate" === e.mode) {
        const f = new URL(e.url);
        c.config.wa.test(f.pathname)
          ? a.respondWith(io(c, a))
          : no(c, e.url)
          ? a.respondWith(oo(c, a))
          : d && a.respondWith(ho(a));
      }
    });
  }
  B(a) {
    const b = a.data;
    this.F.includes(b.type)
      ? Um(a)
      : "refresh_shell" === b.type &&
        Wn(this.i).catch((c) => {
          om(c);
        });
  }
};
function Eo() {
  let a = v("ytglobal.storage_");
  a || ((a = new Fo()), w("ytglobal.storage_", a));
  return a;
}
var Fo = class {
  estimate() {
    return r(function* () {
      const a = navigator;
      let b;
      if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
      let c;
      if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota)
        return Go();
    });
  }
};
function Go() {
  const a = navigator;
  return new Promise((b, c) => {
    let d;
    null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota
      ? a.webkitTemporaryStorage.queryUsageAndQuota(
          (e, f) => {
            b({ usage: e, quota: f });
          },
          (e) => {
            c(e);
          }
        )
      : c(Error("webkitTemporaryStorage is not supported."));
  });
}
w("ytglobal.storageClass_", Fo);
function Ho(a, b) {
  Eo()
    .estimate()
    .then((c) => {
      c = Object.assign({}, b, {
        isSw: void 0 === self.document,
        isIframe: self !== self.top,
        deviceStorageUsageMbytes: Io(null == c ? void 0 : c.usage),
        deviceStorageQuotaMbytes: Io(null == c ? void 0 : c.quota),
      });
      a.h("idbQuotaExceeded", c);
    });
}
class Jo {
  constructor() {
    var a = Ko;
    this.handleError = Lo;
    this.h = a;
    this.i = !1;
    void 0 === self.document ||
      self.addEventListener("beforeunload", () => {
        this.i = !0;
      });
    this.j =
      Math.random() <=
      T("ytidb_transaction_ended_event_rate_limit_session", 0.2);
  }
  U(a, b) {
    switch (a) {
      case "IDB_DATA_CORRUPTED":
        S("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
        break;
      case "IDB_UNEXPECTEDLY_CLOSED":
        this.h("idbUnexpectedlyClosed", b);
        break;
      case "IS_SUPPORTED_COMPLETED":
        S("idb_is_supported_completed_killswitch") ||
          this.h("idbIsSupportedCompleted", b);
        break;
      case "QUOTA_EXCEEDED":
        Ho(this, b);
        break;
      case "TRANSACTION_ENDED":
        this.j &&
          Math.random() <=
            T("ytidb_transaction_ended_event_rate_limit_transaction", 0.1) &&
          this.h("idbTransactionEnded", b);
        break;
      case "TRANSACTION_UNEXPECTEDLY_ABORTED":
        (a = Object.assign({}, b, { hasWindowUnloaded: this.i })),
          this.h("idbTransactionAborted", a);
    }
  }
}
function Io(a) {
  return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576));
}
zg(wg(), { H: [{ Ia: /Failed to fetch/, weight: 500 }], G: [] });
var { handleError: Lo = Xk, U: Ko = X } = {
  handleError: qm,
  U: function (a, b) {
    return r(function* () {
      yield pm();
      X(a, b);
    });
  },
};
for (Ug = new Jo(); 0 < Tg.length; ) {
  const a = Tg.shift();
  switch (a.type) {
    case "ERROR":
      Ug.handleError(a.payload);
      break;
    case "EVENT":
      Ug.U(a.eventType, a.payload);
  }
}
fl.h = new fl();
self.onnotificationclick = function (a) {
  a.notification.close();
  const b = a.notification.data;
  b.isDismissed = !1;
  const c = self.clients.matchAll({ type: "window", includeUncontrolled: !0 });
  c.then((d) => {
    a: {
      var e = b.nav;
      for (const f of d)
        if (f.url === e) {
          f.focus();
          break a;
        }
      self.clients.openWindow(e);
    }
  });
  a.waitUntil(c);
  a.waitUntil(cn(b.clickEndpoint));
};
self.onnotificationclose = function (a) {
  var b = a.notification.data;
  if (null == b ? 0 : b.clickTrackingParams) {
    var c = ql(b.clickTrackingParams);
    a = { screenLayer: 8, visualElement: c };
    if (b.isDismissed) {
      const d = sl(74726);
      b = Em();
      Im(b, d, c, 8);
      c = { screenLayer: 8, visualElement: d };
      Cm(c);
      Rm(b, c);
    }
    Dm(a);
  }
};
self.onpush = function (a) {
  a.waitUntil(
    Kf("NotificationsDisabled").then((b) => {
      if (b) return Promise.resolve();
      if (a.data && a.data.text().length)
        try {
          return Zm(a.data.json());
        } catch (c) {
          return Promise.resolve(c.message);
        }
      return Promise.resolve();
    })
  );
  a.waitUntil(Xm());
};
self.onpushsubscriptionchange = function () {
  Vm();
};
const qo = new co(),
  Co = new yo();
new Do().init();
