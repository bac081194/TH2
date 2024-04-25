(function () {
  "use strict";
  var m;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var ba =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ca(a) {
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
  var ea = ca(this);
  function v(a, b) {
    if (b)
      a: {
        var c = ea;
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
          ba(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  v("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, g) {
      this.g = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  v("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = ea[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return fa(aa(this));
          },
        });
    }
    return a;
  });
  function fa(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function ha(a) {
    return (a.raw = a);
  }
  function w(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function x(a) {
    if (!(a instanceof Array)) {
      a = w(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function ia(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var ja =
    "function" == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) ia(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  v("Object.assign", function (a) {
    return a || ja;
  });
  var ka =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    la = (function () {
      function a() {
        function c() {}
        new c();
        Reflect.construct(c, [], function () {});
        return new c() instanceof c;
      }
      if ("undefined" != typeof Reflect && Reflect.construct) {
        if (a()) return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) {
          c = b(c, d);
          e && Reflect.setPrototypeOf(c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        void 0 === e && (e = c);
        e = ka(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    })(),
    ma;
  if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma;
  function y(a, b) {
    a.prototype = ka(b.prototype);
    a.prototype.constructor = a;
    if (qa) qa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Fa = b.prototype;
  }
  function ra() {
    this.u = !1;
    this.m = null;
    this.l = void 0;
    this.g = 1;
    this.s = this.o = 0;
    this.B = this.i = null;
  }
  function sa(a) {
    if (a.u) throw new TypeError("Generator is already running");
    a.u = !0;
  }
  ra.prototype.A = function (a) {
    this.l = a;
  };
  function ta(a, b) {
    a.i = { Pd: b, je: !0 };
    a.g = a.o || a.s;
  }
  ra.prototype.return = function (a) {
    this.i = { return: a };
    this.g = this.s;
  };
  function A(a, b, c) {
    a.g = c;
    return { value: b };
  }
  ra.prototype.O = function (a) {
    this.g = a;
  };
  function ua(a, b, c) {
    a.o = b;
    void 0 != c && (a.s = c);
  }
  function va(a) {
    a.o = 0;
    var b = a.i.Pd;
    a.i = null;
    return b;
  }
  function wa(a) {
    var b = a.B.splice(0)[0];
    (b = a.i = a.i || b)
      ? b.je
        ? (a.g = a.o || a.s)
        : void 0 != b.O && a.s < b.O
        ? ((a.g = b.O), (a.i = null))
        : (a.g = a.s)
      : (a.g = 0);
  }
  function xa(a) {
    this.g = new ra();
    this.l = a;
  }
  function ya(a, b) {
    sa(a.g);
    var c = a.g.m;
    if (c)
      return za(
        a,
        "return" in c
          ? c["return"]
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.g.return
      );
    a.g.return(b);
    return Aa(a);
  }
  function za(a, b, c, d) {
    try {
      var e = b.call(a.g.m, c);
      if (!(e instanceof Object))
        throw new TypeError("Iterator result " + e + " is not an object");
      if (!e.done) return (a.g.u = !1), e;
      var f = e.value;
    } catch (g) {
      return (a.g.m = null), ta(a.g, g), Aa(a);
    }
    a.g.m = null;
    d.call(a.g, f);
    return Aa(a);
  }
  function Aa(a) {
    for (; a.g.g; )
      try {
        var b = a.l(a.g);
        if (b) return (a.g.u = !1), { value: b.value, done: !1 };
      } catch (c) {
        (a.g.l = void 0), ta(a.g, c);
      }
    a.g.u = !1;
    if (a.g.i) {
      b = a.g.i;
      a.g.i = null;
      if (b.je) throw b.Pd;
      return { value: b.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function Ba(a) {
    this.next = function (b) {
      sa(a.g);
      a.g.m ? (b = za(a, a.g.m.next, b, a.g.A)) : (a.g.A(b), (b = Aa(a)));
      return b;
    };
    this.throw = function (b) {
      sa(a.g);
      a.g.m ? (b = za(a, a.g.m["throw"], b, a.g.A)) : (ta(a.g, b), (b = Aa(a)));
      return b;
    };
    this.return = function (b) {
      return ya(a, b);
    };
    this[Symbol.iterator] = function () {
      return this;
    };
  }
  function Ca(a) {
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
  function B(a) {
    return Ca(new Ba(new xa(a)));
  }
  function Da() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }
  v("Reflect", function (a) {
    return a ? a : {};
  });
  v("Reflect.construct", function () {
    return la;
  });
  v("Reflect.setPrototypeOf", function (a) {
    return a
      ? a
      : qa
      ? function (b, c) {
          try {
            return qa(b, c), !0;
          } catch (d) {
            return !1;
          }
        }
      : null;
  });
  v("Promise", function (a) {
    function b(g) {
      this.g = 0;
      this.i = void 0;
      this.l = [];
      this.u = !1;
      var h = this.m();
      try {
        g(h.resolve, h.reject);
      } catch (l) {
        h.reject(l);
      }
    }
    function c() {
      this.g = null;
    }
    function d(g) {
      return g instanceof b
        ? g
        : new b(function (h) {
            h(g);
          });
    }
    if (a) return a;
    c.prototype.l = function (g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.i(function () {
          h.o();
        });
      }
      this.g.push(g);
    };
    var e = ea.setTimeout;
    c.prototype.i = function (g) {
      e(g, 0);
    };
    c.prototype.o = function () {
      for (; this.g && this.g.length; ) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var l = g[h];
          g[h] = null;
          try {
            l();
          } catch (k) {
            this.m(k);
          }
        }
      }
      this.g = null;
    };
    c.prototype.m = function (g) {
      this.i(function () {
        throw g;
      });
    };
    b.prototype.m = function () {
      function g(k) {
        return function (n) {
          l || ((l = !0), k.call(h, n));
        };
      }
      var h = this,
        l = !1;
      return { resolve: g(this.H), reject: g(this.o) };
    };
    b.prototype.H = function (g) {
      if (g === this)
        this.o(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof b) this.J(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.F(g) : this.s(g);
      }
    };
    b.prototype.F = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (l) {
        this.o(l);
        return;
      }
      "function" == typeof h ? this.K(h, g) : this.s(g);
    };
    b.prototype.o = function (g) {
      this.A(2, g);
    };
    b.prototype.s = function (g) {
      this.A(1, g);
    };
    b.prototype.A = function (g, h) {
      if (0 != this.g)
        throw Error(
          "Cannot settle(" +
            g +
            ", " +
            h +
            "): Promise already settled in state" +
            this.g
        );
      this.g = g;
      this.i = h;
      2 === this.g && this.I();
      this.B();
    };
    b.prototype.I = function () {
      var g = this;
      e(function () {
        if (g.D()) {
          var h = ea.console;
          "undefined" !== typeof h && h.error(g.i);
        }
      }, 1);
    };
    b.prototype.D = function () {
      if (this.u) return !1;
      var g = ea.CustomEvent,
        h = ea.Event,
        l = ea.dispatchEvent;
      if ("undefined" === typeof l) return !0;
      "function" === typeof g
        ? (g = new g("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof h
        ? (g = new h("unhandledrejection", { cancelable: !0 }))
        : ((g = ea.document.createEvent("CustomEvent")),
          g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.i;
      return l(g);
    };
    b.prototype.B = function () {
      if (null != this.l) {
        for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
        this.l = null;
      }
    };
    var f = new c();
    b.prototype.J = function (g) {
      var h = this.m();
      g.fc(h.resolve, h.reject);
    };
    b.prototype.K = function (g, h) {
      var l = this.m();
      try {
        g.call(h, l.resolve, l.reject);
      } catch (k) {
        l.reject(k);
      }
    };
    b.prototype.then = function (g, h) {
      function l(r, q) {
        return "function" == typeof r
          ? function (t) {
              try {
                k(r(t));
              } catch (u) {
                n(u);
              }
            }
          : q;
      }
      var k,
        n,
        p = new b(function (r, q) {
          k = r;
          n = q;
        });
      this.fc(l(g, k), l(h, n));
      return p;
    };
    b.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    b.prototype.fc = function (g, h) {
      function l() {
        switch (k.g) {
          case 1:
            g(k.i);
            break;
          case 2:
            h(k.i);
            break;
          default:
            throw Error("Unexpected state: " + k.g);
        }
      }
      var k = this;
      null == this.l ? f.l(l) : this.l.push(l);
      this.u = !0;
    };
    b.resolve = d;
    b.reject = function (g) {
      return new b(function (h, l) {
        l(g);
      });
    };
    b.race = function (g) {
      return new b(function (h, l) {
        for (var k = w(g), n = k.next(); !n.done; n = k.next())
          d(n.value).fc(h, l);
      });
    };
    b.all = function (g) {
      var h = w(g),
        l = h.next();
      return l.done
        ? d([])
        : new b(function (k, n) {
            function p(t) {
              return function (u) {
                r[t] = u;
                q--;
                0 == q && k(r);
              };
            }
            var r = [],
              q = 0;
            do
              r.push(void 0),
                q++,
                d(l.value).fc(p(r.length - 1), n),
                (l = h.next());
            while (!l.done);
          });
    };
    return b;
  });
  v("Object.setPrototypeOf", function (a) {
    return a || qa;
  });
  v("WeakMap", function (a) {
    function b(l) {
      this.g = (h += Math.random() + 1).toString();
      if (l) {
        l = w(l);
        for (var k; !(k = l.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    function c() {}
    function d(l) {
      var k = typeof l;
      return ("object" === k && null !== l) || "function" === k;
    }
    function e(l) {
      if (!ia(l, g)) {
        var k = new c();
        ba(l, g, { value: k });
      }
    }
    function f(l) {
      var k = Object[l];
      k &&
        (Object[l] = function (n) {
          if (n instanceof c) return n;
          Object.isExtensible(n) && e(n);
          return k(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var l = Object.seal({}),
            k = Object.seal({}),
            n = new a([
              [l, 2],
              [k, 3],
            ]);
          if (2 != n.get(l) || 3 != n.get(k)) return !1;
          n.delete(l);
          n.set(k, 4);
          return !n.has(l) && 4 == n.get(k);
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function (l, k) {
      if (!d(l)) throw Error("Invalid WeakMap key");
      e(l);
      if (!ia(l, g)) throw Error("WeakMap key fail: " + l);
      l[g][this.g] = k;
      return this;
    };
    b.prototype.get = function (l) {
      return d(l) && ia(l, g) ? l[g][this.g] : void 0;
    };
    b.prototype.has = function (l) {
      return d(l) && ia(l, g) && ia(l[g], this.g);
    };
    b.prototype.delete = function (l) {
      return d(l) && ia(l, g) && ia(l[g], this.g) ? delete l[g][this.g] : !1;
    };
    return b;
  });
  v("Map", function (a) {
    function b() {
      var h = {};
      return (h.previous = h.next = h.head = h);
    }
    function c(h, l) {
      var k = h[1];
      return fa(function () {
        if (k) {
          for (; k.head != h[1]; ) k = k.previous;
          for (; k.next != k.head; )
            return (k = k.next), { done: !1, value: l(k) };
          k = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(h, l) {
      var k = l && typeof l;
      "object" == k || "function" == k
        ? f.has(l)
          ? (k = f.get(l))
          : ((k = "" + ++g), f.set(l, k))
        : (k = "p_" + l);
      var n = h[0][k];
      if (n && ia(h[0], k))
        for (h = 0; h < n.length; h++) {
          var p = n[h];
          if ((l !== l && p.key !== p.key) || l === p.key)
            return { id: k, list: n, index: h, entry: p };
        }
      return { id: k, list: n, index: -1, entry: void 0 };
    }
    function e(h) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (h) {
        h = w(h);
        for (var l; !(l = h.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            l = new a(w([[h, "s"]]));
          if (
            "s" != l.get(h) ||
            1 != l.size ||
            l.get({ x: 4 }) ||
            l.set({ x: 4 }, "t") != l ||
            2 != l.size
          )
            return !1;
          var k = l.entries(),
            n = k.next();
          if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
          n = k.next();
          return n.done ||
            4 != n.value[0].x ||
            "t" != n.value[1] ||
            !k.next().done
            ? !1
            : !0;
        } catch (p) {
          return !1;
        }
      })()
    )
      return a;
    var f = new WeakMap();
    e.prototype.set = function (h, l) {
      h = 0 === h ? 0 : h;
      var k = d(this, h);
      k.list || (k.list = this[0][k.id] = []);
      k.entry
        ? (k.entry.value = l)
        : ((k.entry = {
            next: this[1],
            previous: this[1].previous,
            head: this[1],
            key: h,
            value: l,
          }),
          k.list.push(k.entry),
          (this[1].previous.next = k.entry),
          (this[1].previous = k.entry),
          this.size++);
      return this;
    };
    e.prototype.delete = function (h) {
      h = d(this, h);
      return h.entry && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.entry.previous.next = h.entry.next),
          (h.entry.next.previous = h.entry.previous),
          (h.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].previous = b();
      this.size = 0;
    };
    e.prototype.has = function (h) {
      return !!d(this, h).entry;
    };
    e.prototype.get = function (h) {
      return (h = d(this, h).entry) && h.value;
    };
    e.prototype.entries = function () {
      return c(this, function (h) {
        return [h.key, h.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (h) {
        return h.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (h) {
        return h.value;
      });
    };
    e.prototype.forEach = function (h, l) {
      for (var k = this.entries(), n; !(n = k.next()).done; )
        (n = n.value), h.call(l, n[1], n[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e;
  });
  function Ea(a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined"
      );
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression"
      );
    return a + "";
  }
  v("String.prototype.endsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ea(this, b, "endsWith");
          b += "";
          void 0 === c && (c = d.length);
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var e = b.length; 0 < e && 0 < c; )
            if (d[--c] != b[--e]) return !1;
          return 0 >= e;
        };
  });
  function Fa(a, b) {
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
  v("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return Fa(this, function (b, c) {
            return [b, c];
          });
        };
  });
  v("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Fa(this, function (b) {
            return b;
          });
        };
  });
  v("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ea(this, b, "startsWith");
          b += "";
          var e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  v("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  v("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  v("Set", function (a) {
    function b(c) {
      this.g = new Map();
      if (c) {
        c = w(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.g.size;
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(w([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == c ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c;
    };
    b.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.g.has(c);
    };
    b.prototype.entries = function () {
      return this.g.entries();
    };
    b.prototype.values = function () {
      return this.g.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.g.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  v("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return Fa(this, function (b, c) {
            return c;
          });
        };
  });
  v("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  v("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  v("Number.isSafeInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
        };
  });
  v("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
            return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  v("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ia(b, d) && c.push(b[d]);
          return c;
        };
  });
  v("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  v("Array.prototype.includes", function (a) {
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
  v("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== Ea(this, b, "includes").indexOf(b, c || 0);
        };
  });
  v("Number.isNaN", function (a) {
    return a
      ? a
      : function (b) {
          return "number" === typeof b && isNaN(b);
        };
  });
  v("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  v("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ia(b, d) && c.push([d, b[d]]);
          return c;
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var C = this || self;
  function Ga(a) {
    var b = D("CLOSURE_FLAGS");
    a = b && b[a];
    return null != a ? a : !1;
  }
  function D(a, b) {
    a = a.split(".");
    b = b || C;
    for (var c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function Ha(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function Ia(a) {
    var b = Ha(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function Ja(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function Ka(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function La(a, b, c) {
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
  function F(a, b, c) {
    F =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? Ka
        : La;
    return F.apply(null, arguments);
  }
  function G() {
    return Date.now();
  }
  function H(a, b) {
    a = a.split(".");
    var c = C;
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
  function I(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Fa = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Nh = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  function Ma(a) {
    return a;
  }
  function Na(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Na);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  I(Na, Error);
  Na.prototype.name = "CustomError";
  function Oa(a) {
    a = a.url;
    var b = /[?&]dsh=1(&|$)/.test(a);
    this.i = !b && /[?&]ae=1(&|$)/.test(a);
    this.m = !b && /[?&]ae=2(&|$)/.test(a);
    if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
      try {
        var c = decodeURIComponent(this.g[1]);
      } catch (d) {
        c = null;
      }
      this.l = c;
    }
  }
  var Pa = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  function Qa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  } /*

 SPDX-License-Identifier: Apache-2.0
*/
  function Ra(a) {
    return { valueOf: a }.valueOf();
  }
  var Sa;
  function Ta() {
    if (void 0 === Sa) {
      var a = null,
        b = C.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: Ma,
            createScript: Ma,
            createScriptURL: Ma,
          });
        } catch (c) {
          C.console && C.console.error(c.message);
        }
        Sa = a;
      } else Sa = a;
    }
    return Sa;
  }
  function Ua(a) {
    this.g = a;
  }
  Ua.prototype.toString = function () {
    return this.g + "";
  };
  function Xa(a) {
    if (a instanceof Ua && a.constructor === Ua) return a.g;
    Ha(a);
    return "type_error:TrustedResourceUrl";
  }
  var Ya = {};
  function Za(a) {
    var b = Ta();
    a = b ? b.createScriptURL(a) : a;
    return new Ua(a, Ya);
  }
  function $a(a) {
    this.g = a;
  }
  $a.prototype.toString = function () {
    return this.g;
  };
  var ab = new $a("about:invalid#zClosurez");
  function bb(a) {
    this.og = a;
  }
  function cb(a) {
    return new bb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var db = [
    cb("data"),
    cb("http"),
    cb("https"),
    cb("mailto"),
    cb("ftp"),
    new bb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function eb(a) {
    for (var b = Da.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++)
      c.push(String(b[d])), c.push(a[d + 1]);
    return new $a(c.join(""));
  }
  var fb = Ra(function () {
      return "function" === typeof URL;
    }),
    gb = ["data:", "http:", "https:", "mailto:", "ftp:"],
    hb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function ib(a) {
    if (a instanceof $a)
      if (a instanceof $a) a = a.g;
      else throw Error("");
    else a = hb.test(a) ? a : void 0;
    return a;
  }
  function mb(a, b) {
    b = ib(b);
    void 0 !== b && (a.href = b);
  }
  var nb = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    ob = Array.prototype.forEach
      ? function (a, b) {
          Array.prototype.forEach.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            e in d && b.call(void 0, d[e], e, a);
        },
    pb = Array.prototype.filter
      ? function (a, b, c) {
          return Array.prototype.filter.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = [],
              f = 0,
              g = "string" === typeof a ? a.split("") : a,
              h = 0;
            h < d;
            h++
          )
            if (h in g) {
              var l = g[h];
              b.call(c, l, h, a) && (e[f++] = l);
            }
          return e;
        };
  function qb(a, b) {
    b = nb(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function rb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ia(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  function sb(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }
  function tb(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    var b = Array.isArray(a)
        ? []
        : "function" !== typeof ArrayBuffer ||
          "function" !== typeof ArrayBuffer.isView ||
          !ArrayBuffer.isView(a) ||
          a instanceof DataView
        ? {}
        : new a.constructor(a.length),
      c;
    for (c in a) b[c] = tb(a[c]);
    return b;
  }
  var ub =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function vb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < ub.length; f++)
        (c = ub[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function wb(a) {
    var b = arguments.length;
    if (1 == b && Array.isArray(arguments[0]))
      return wb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c;
  }
  var xb = {};
  function yb(a) {
    this.g = a;
  }
  yb.prototype.toString = function () {
    return this.g.toString();
  };
  function zb(a) {
    if (a instanceof yb && a.constructor === yb) return a.g;
    Ha(a);
    return "type_error:SafeHtml";
  }
  function Ab(a) {
    var b = Ta();
    a = b ? b.createHTML(a) : a;
    return new yb(a, xb);
  }
  function Bb(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = zb(b);
  }
  function Cb() {
    throw Error("unknown trace type");
  }
  function Db(a, b) {
    a.src = Xa(b);
    var c, d;
    (c = (b =
      null ==
      (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
        .document).querySelector)
        ? void 0
        : d.call(c, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", c);
  }
  function Eb(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  function Fb(a) {
    return decodeURIComponent(a.replace(/\+/g, " "));
  }
  var Gb = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function Hb(a) {
    return a ? decodeURI(a) : a;
  }
  function Ib(a) {
    return Hb(a.match(Gb)[3] || null);
  }
  function Jb(a) {
    var b = a.match(Gb);
    a = b[5];
    var c = b[6];
    b = b[7];
    var d = "";
    a && (d += a);
    c && (d += "?" + c);
    b && (d += "#" + b);
    return d;
  }
  function Kb(a) {
    var b = a.indexOf("#");
    return 0 > b ? a : a.slice(0, b);
  }
  function Lb(a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) Lb(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
  }
  function Mb(a) {
    var b = [],
      c;
    for (c in a) Lb(c, a[c], b);
    return b.join("&");
  }
  function Nb(a, b) {
    b = Mb(b);
    if (b) {
      var c = a.indexOf("#");
      0 > c && (c = a.length);
      var d = a.indexOf("?");
      if (0 > d || d > c) {
        d = c;
        var e = "";
      } else e = a.substring(d + 1, c);
      a = [a.slice(0, d), e, a.slice(c)];
      c = a[1];
      a[1] = b ? (c ? c + "&" + b : b) : c;
      b = a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    } else b = a;
    return b;
  }
  function Ob(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
      var f = a.charCodeAt(b - 1);
      if (38 == f || 63 == f)
        if (((f = a.charCodeAt(b + e)), !f || 61 == f || 38 == f || 35 == f))
          return b;
      b += e + 1;
    }
    return -1;
  }
  var Pb = /#|$/,
    Qb = /[?&]($|#)/;
  function Rb() {
    this.ab = this.ab;
    this.m = this.m;
  }
  Rb.prototype.ab = !1;
  Rb.prototype.dispose = function () {
    this.ab || ((this.ab = !0), this.Ba());
  };
  Rb.prototype.addOnDisposeCallback = function (a, b) {
    this.ab
      ? void 0 !== b
        ? a.call(b)
        : a()
      : (this.m || (this.m = []), this.m.push(void 0 !== b ? F(a, b) : a));
  };
  Rb.prototype.Ba = function () {
    if (this.m) for (; this.m.length; ) this.m.shift()();
  };
  function Sb(a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = this.i = !1;
  }
  Sb.prototype.stopPropagation = function () {
    this.i = !0;
  };
  Sb.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var Tb = (function () {
    if (!C.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      var c = function () {};
      C.addEventListener("test", c, b);
      C.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  var Ub = Ga(610401301),
    Vb = Ga(188588736);
  function Wb() {
    var a = C.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Xb,
    Yb = C.navigator;
  Xb = Yb ? Yb.userAgentData || null : null;
  function Zb(a) {
    return Ub
      ? Xb
        ? Xb.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          })
        : !1
      : !1;
  }
  function J(a) {
    return -1 != Wb().indexOf(a);
  }
  function $b() {
    return Ub ? !!Xb && 0 < Xb.brands.length : !1;
  }
  function ac() {
    return $b() ? !1 : J("Opera");
  }
  function bc() {
    return $b() ? !1 : J("Trident") || J("MSIE");
  }
  function cc() {
    return $b() ? Zb("Microsoft Edge") : J("Edg/");
  }
  function dc() {
    return (
      J("Safari") &&
      !(
        ec() ||
        ($b() ? 0 : J("Coast")) ||
        ac() ||
        ($b() ? 0 : J("Edge")) ||
        cc() ||
        ($b() ? Zb("Opera") : J("OPR")) ||
        J("Firefox") ||
        J("FxiOS") ||
        J("Silk") ||
        J("Android")
      )
    );
  }
  function ec() {
    return $b()
      ? Zb("Chromium")
      : ((J("Chrome") || J("CriOS")) && !($b() ? 0 : J("Edge"))) || J("Silk");
  }
  function fc(a) {
    var b = {};
    a.forEach(function (c) {
      b[c[0]] = c[1];
    });
    return function (c) {
      return (
        b[
          c.find(function (d) {
            return d in b;
          })
        ] || ""
      );
    };
  }
  function gc() {
    var a = Wb();
    if (bc()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    for (var d; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = fc(b);
    return ac()
      ? a(["Version", "Opera"])
      : ($b() ? 0 : J("Edge"))
      ? a(["Edge"])
      : cc()
      ? a(["Edg"])
      : J("Silk")
      ? a(["Silk"])
      : ec()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  function hc() {
    return (
      J("Gecko") &&
      !(-1 != Wb().toLowerCase().indexOf("webkit") && !J("Edge")) &&
      !(J("Trident") || J("MSIE")) &&
      !J("Edge")
    );
  }
  function ic() {
    return Ub && Xb && Xb.platform ? "Android" === Xb.platform : J("Android");
  }
  function jc() {
    return J("iPhone") && !J("iPod") && !J("iPad");
  }
  function kc(a) {
    kc[" "](a);
    return a;
  }
  kc[" "] = function () {};
  var lc = bc(),
    mc = J("Edge"),
    nc = hc(),
    oc = ic();
  function pc(a, b) {
    Sb.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.l = null;
    a && this.init(a, b);
  }
  I(pc, Sb);
  var qc = { 2: "touch", 3: "pen", 4: "mouse" };
  pc.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    if ((b = a.relatedTarget)) {
      if (nc) {
        a: {
          try {
            kc(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}
          e = !1;
        }
        e || (b = null);
      }
    } else
      "mouseover" == c
        ? (b = a.fromElement)
        : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType =
      "string" === typeof a.pointerType
        ? a.pointerType
        : qc[a.pointerType] || "";
    this.state = a.state;
    this.l = a;
    a.defaultPrevented && pc.Fa.preventDefault.call(this);
  };
  pc.prototype.stopPropagation = function () {
    pc.Fa.stopPropagation.call(this);
    this.l.stopPropagation
      ? this.l.stopPropagation()
      : (this.l.cancelBubble = !0);
  };
  pc.prototype.preventDefault = function () {
    pc.Fa.preventDefault.call(this);
    var a = this.l;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var rc = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var sc = 0;
  function tc(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.oc = e;
    this.key = ++sc;
    this.Ub = this.ec = !1;
  }
  function uc(a) {
    a.Ub = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.oc = null;
  }
  function vc(a) {
    this.src = a;
    this.listeners = {};
    this.g = 0;
  }
  vc.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.listeners[f];
    a || ((a = this.listeners[f] = []), this.g++);
    var g = wc(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.ec = !1))
      : ((b = new tc(b, this.src, f, !!d, e)), (b.ec = c), a.push(b));
    return b;
  };
  vc.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.listeners)) return !1;
    var e = this.listeners[a];
    b = wc(e, b, c, d);
    return -1 < b
      ? (uc(e[b]),
        Array.prototype.splice.call(e, b, 1),
        0 == e.length && (delete this.listeners[a], this.g--),
        !0)
      : !1;
  };
  function xc(a, b) {
    var c = b.type;
    c in a.listeners &&
      qb(a.listeners[c], b) &&
      (uc(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.g--));
  }
  function wc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ub && f.listener == b && f.capture == !!c && f.oc == d) return e;
    }
    return -1;
  }
  var yc = "closure_lm_" + ((1e6 * Math.random()) | 0),
    zc = {},
    Ac = 0;
  function Bc(a, b, c, d, e) {
    if (d && d.once) Cc(a, b, c, d, e);
    else if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) Bc(a, b[f], c, d, e);
    else
      (c = Dc(c)),
        a && a[rc]
          ? a.qa(b, c, Ja(d) ? !!d.capture : !!d, e)
          : Ec(a, b, c, !1, d, e);
  }
  function Ec(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = Ja(e) ? !!e.capture : !!e,
      h = Fc(a);
    h || (a[yc] = h = new vc(a));
    c = h.add(b, c, d, g, f);
    if (!c.proxy) {
      d = Gc();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Tb || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Ic(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Ac++;
    }
  }
  function Gc() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    var b = Jc;
    return a;
  }
  function Cc(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) Cc(a, b[f], c, d, e);
    else
      (c = Dc(c)),
        a && a[rc]
          ? a.g.add(String(b), c, !0, Ja(d) ? !!d.capture : !!d, e)
          : Ec(a, b, c, !0, d, e);
  }
  function Kc(a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) Kc(a, b[f], c, d, e);
    else
      ((d = Ja(d) ? !!d.capture : !!d), (c = Dc(c)), a && a[rc])
        ? a.g.remove(String(b), c, d, e)
        : a &&
          (a = Fc(a)) &&
          ((b = a.listeners[b.toString()]),
          (a = -1),
          b && (a = wc(b, c, d, e)),
          (c = -1 < a ? b[a] : null) && Lc(c));
  }
  function Lc(a) {
    if ("number" !== typeof a && a && !a.Ub) {
      var b = a.src;
      if (b && b[rc]) xc(b.g, a);
      else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.capture)
          : b.detachEvent
          ? b.detachEvent(Ic(c), d)
          : b.addListener && b.removeListener && b.removeListener(d);
        Ac--;
        (c = Fc(b))
          ? (xc(c, a), 0 == c.g && ((c.src = null), (b[yc] = null)))
          : uc(a);
      }
    }
  }
  function Ic(a) {
    return a in zc ? zc[a] : (zc[a] = "on" + a);
  }
  function Jc(a, b) {
    if (a.Ub) a = !0;
    else {
      b = new pc(b, this);
      var c = a.listener,
        d = a.oc || a.src;
      a.ec && Lc(a);
      a = c.call(d, b);
    }
    return a;
  }
  function Fc(a) {
    a = a[yc];
    return a instanceof vc ? a : null;
  }
  var Mc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Dc(a) {
    if ("function" === typeof a) return a;
    a[Mc] ||
      (a[Mc] = function (b) {
        return a.handleEvent(b);
      });
    return a[Mc];
  }
  function Nc() {
    Rb.call(this);
    this.g = new vc(this);
    this.B = this;
    this.u = null;
  }
  I(Nc, Rb);
  Nc.prototype[rc] = !0;
  Nc.prototype.addEventListener = function (a, b, c, d) {
    Bc(this, a, b, c, d);
  };
  Nc.prototype.removeEventListener = function (a, b, c, d) {
    Kc(this, a, b, c, d);
  };
  function Oc(a, b) {
    var c = a.u;
    if (c) {
      var d = [];
      for (var e = 1; c; c = c.u) d.push(c), ++e;
    }
    a = a.B;
    c = b.type || b;
    "string" === typeof b
      ? (b = new Sb(b, a))
      : b instanceof Sb
      ? (b.target = b.target || a)
      : ((e = b), (b = new Sb(c, a)), vb(b, e));
    e = !0;
    if (d)
      for (var f = d.length - 1; !b.i && 0 <= f; f--) {
        var g = (b.g = d[f]);
        e = Pc(g, c, !0, b) && e;
      }
    b.i ||
      ((g = b.g = a),
      (e = Pc(g, c, !0, b) && e),
      b.i || (e = Pc(g, c, !1, b) && e));
    if (d)
      for (f = 0; !b.i && f < d.length; f++)
        (g = b.g = d[f]), (e = Pc(g, c, !1, b) && e);
  }
  Nc.prototype.Ba = function () {
    Nc.Fa.Ba.call(this);
    if (this.g) {
      var a = this.g,
        b = 0,
        c;
      for (c in a.listeners) {
        for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, uc(d[e]);
        delete a.listeners[c];
        a.g--;
      }
    }
    this.u = null;
  };
  Nc.prototype.qa = function (a, b, c, d) {
    return this.g.add(String(a), b, !1, c, d);
  };
  function Pc(a, b, c, d) {
    b = a.g.listeners[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Ub && g.capture == c) {
        var h = g.listener,
          l = g.oc || g.src;
        g.ec && xc(a.g, g);
        e = !1 !== h.call(l, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function Qc(a, b) {
    this.i = a;
    this.m = b;
    this.l = 0;
    this.g = null;
  }
  Qc.prototype.get = function () {
    if (0 < this.l) {
      this.l--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.i();
    return a;
  };
  function Rc(a, b) {
    a.m(b);
    100 > a.l && (a.l++, (b.next = a.g), (a.g = b));
  }
  function Sc() {}
  function Tc() {
    var a = Uc;
    return document.createRange().createContextualFragment(zb(Ab(a[0])));
  }
  function Vc(a, b) {
    var c = b.createRange();
    c.selectNode(b.body);
    a = Ab(a);
    return c.createContextualFragment(zb(a));
  }
  function Wc(a) {
    a = a.nodeName;
    return "string" === typeof a ? a : "FORM";
  }
  function Xc(a) {
    a = a.nodeType;
    return 1 === a || "number" !== typeof a;
  }
  var Yc =
      "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(
        " "
      ),
    Zc = [
      ["A", new Map([["href", { ra: 2 }]])],
      ["AREA", new Map([["href", { ra: 2 }]])],
      [
        "LINK",
        new Map([
          [
            "href",
            {
              ra: 2,
              conditions: new Map([
                [
                  "rel",
                  new Set(
                    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
                      " "
                    )
                  ),
                ],
              ]),
            },
          ],
        ]),
      ],
      ["SOURCE", new Map([["src", { ra: 1 }]])],
      ["IMG", new Map([["src", { ra: 1 }]])],
      ["VIDEO", new Map([["src", { ra: 1 }]])],
      ["AUDIO", new Map([["src", { ra: 1 }]])],
    ],
    $c =
      "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(
        " "
      ),
    ad = [
      [
        "dir",
        {
          ra: 3,
          conditions: Ra(function () {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]]);
          }),
        },
      ],
      [
        "async",
        {
          ra: 3,
          conditions: Ra(function () {
            return new Map([["async", new Set(["async"])]]);
          }),
        },
      ],
      ["cite", { ra: 2 }],
      [
        "loading",
        {
          ra: 3,
          conditions: Ra(function () {
            return new Map([["loading", new Set(["eager", "lazy"])]]);
          }),
        },
      ],
      ["poster", { ra: 2 }],
      [
        "target",
        {
          ra: 3,
          conditions: Ra(function () {
            return new Map([["target", new Set(["_self", "_blank"])]]);
          }),
        },
      ],
    ],
    bd = new (function () {
      var a = new Set($c),
        b = new Map(ad),
        c = new Map(Zc);
      this.l = new Set(Yc);
      this.g = c;
      this.i = a;
      this.m = b;
    })();
  function cd() {
    this.g = bd;
  }
  function dd(a, b) {
    var c = document.implementation.createHTMLDocument("");
    a = ed(a, b, c);
    c = c.body;
    c.appendChild(a);
    c = new XMLSerializer().serializeToString(c);
    c = c.slice(c.indexOf(">") + 1, c.lastIndexOf("</"));
    return Ab(c);
  }
  function ed(a, b, c) {
    b = Vc(b, c);
    b = document.createTreeWalker(
      b,
      5,
      function (h) {
        if (3 === h.nodeType) h = 1;
        else if (Xc(h))
          if (((h = Wc(h)), null === h)) h = 2;
          else {
            var l = a.g;
            h = "FORM" !== h && (l.l.has(h) || l.g.has(h)) ? 1 : 2;
          }
        else h = 2;
        return h;
      },
      !1
    );
    for (
      var d = b.nextNode(), e = c.createDocumentFragment(), f = e;
      null !== d;

    ) {
      var g = void 0;
      if (3 === d.nodeType) g = document.createTextNode(d.data);
      else if (Xc(d)) g = fd(a, d, c);
      else throw Error("");
      f.appendChild(g);
      if ((d = b.firstChild())) f = g;
      else
        for (; !(d = b.nextSibling()) && (d = b.parentNode()); )
          f = f.parentNode;
    }
    return e;
  }
  function fd(a, b, c) {
    var d = Wc(b);
    c = c.createElement(d);
    b = b.attributes;
    for (var e = w(b), f = e.next(); !f.done; f = e.next()) {
      var g = f.value;
      f = g.name;
      g = g.value;
      var h = a.g;
      var l = h.g.get(d);
      h = (null == l ? 0 : l.has(f))
        ? l.get(f)
        : h.i.has(f)
        ? { ra: 1 }
        : (h = h.m.get(f))
        ? h
        : { ra: 0 };
      a: {
        if ((l = h.conditions)) {
          l = w(l);
          for (var k = l.next(); !k.done; k = l.next()) {
            var n = w(k.value);
            k = n.next().value;
            n = n.next().value;
            var p = void 0;
            if (
              (k = null == (p = b.getNamedItem(k)) ? void 0 : p.value) &&
              !n.has(k)
            ) {
              l = !1;
              break a;
            }
          }
        }
        l = !0;
      }
      if (l)
        switch (h.ra) {
          case 1:
            gd(c, f, g);
            break;
          case 2:
            a: if (((h = void 0), fb)) {
              try {
                h = new URL(g);
              } catch (r) {
                h = "https:";
                break a;
              }
              h = h.protocol;
            } else
              b: {
                h = document.createElement("a");
                try {
                  h.href = g;
                } catch (r) {
                  h = void 0;
                  break b;
                }
                h = h.protocol;
                h = ":" === h || "" === h ? "https:" : h;
              }
            gd(
              c,
              f,
              void 0 !== h && -1 !== gb.indexOf(h.toLowerCase())
                ? g
                : "about:invalid#zClosurez"
            );
            break;
          case 3:
            gd(c, f, g.toLowerCase());
            break;
          case 4:
            gd(c, f, g);
        }
    }
    return c;
  }
  function gd(a, b, c) {
    a.setAttribute(b, c);
  }
  var hd = Ra(function () {
    return new cd();
  });
  function id(a) {
    var b = a.split(/\?|#/),
      c = /\?/.test(a) ? "?" + b[1] : "";
    return {
      path: b[0],
      params: c,
      hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : "",
    };
  }
  function jd(a) {
    var b = Da.apply(1, arguments);
    if (0 === b.length) return Za(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++)
      c += encodeURIComponent(b[d]) + a[d + 1];
    return Za(c);
  }
  function kd(a, b) {
    a = id(Xa(a).toString());
    var c = a.params,
      d = c.length ? "&" : "?";
    b.forEach(function (e, f) {
      e = e instanceof Array ? e : [e];
      for (var g = 0; g < e.length; g++) {
        var h = e[g];
        null !== h &&
          void 0 !== h &&
          ((c +=
            d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h))),
          (d = "&"));
      }
    });
    return Za(a.path + c + a.hash);
  }
  function ld(a, b) {
    this.width = a;
    this.height = b;
  }
  m = ld.prototype;
  m.clone = function () {
    return new ld(this.width, this.height);
  };
  m.aspectRatio = function () {
    return this.width / this.height;
  };
  m.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  m.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  m.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function md(a) {
    var b = document;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  }
  function nd(a) {
    "function" !== typeof C.setImmediate ||
    (C.Window &&
      C.Window.prototype &&
      C.Window.prototype.setImmediate == C.setImmediate)
      ? (od || (od = pd()), od(a))
      : C.setImmediate(a);
  }
  var od;
  function pd() {
    var a = C.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !J("Presto") &&
      (a = function () {
        var e = md("IFRAME");
        e.style.display = "none";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = "callImmediate" + Math.random(),
          h =
            "file:" == f.location.protocol
              ? "*"
              : f.location.protocol + "//" + f.location.host;
        e = F(function (l) {
          if (("*" == h || l.origin == h) && l.data == g)
            this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, h);
          },
        };
      });
    if ("undefined" !== typeof a) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.Kd;
          c.Kd = null;
          e();
        }
      };
      return function (e) {
        d.next = { Kd: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      C.setTimeout(e, 0);
    };
  }
  function qd(a) {
    C.setTimeout(function () {
      throw a;
    }, 0);
  }
  function rd() {
    this.l = this.g = null;
  }
  rd.prototype.add = function (a, b) {
    var c = sd.get();
    c.set(a, b);
    this.l ? (this.l.next = c) : (this.g = c);
    this.l = c;
  };
  rd.prototype.remove = function () {
    var a = null;
    this.g &&
      ((a = this.g),
      (this.g = this.g.next),
      this.g || (this.l = null),
      (a.next = null));
    return a;
  };
  var sd = new Qc(
    function () {
      return new td();
    },
    function (a) {
      return a.reset();
    }
  );
  function td() {
    this.next = this.scope = this.g = null;
  }
  td.prototype.set = function (a, b) {
    this.g = a;
    this.scope = b;
    this.next = null;
  };
  td.prototype.reset = function () {
    this.next = this.scope = this.g = null;
  };
  var ud,
    vd = !1,
    wd = new rd();
  function xd(a, b) {
    ud || yd();
    vd || (ud(), (vd = !0));
    wd.add(a, b);
  }
  function yd() {
    if (C.Promise && C.Promise.resolve) {
      var a = C.Promise.resolve(void 0);
      ud = function () {
        a.then(zd);
      };
    } else
      ud = function () {
        nd(zd);
      };
  }
  function zd() {
    for (var a; (a = wd.remove()); ) {
      try {
        a.g.call(a.scope);
      } catch (b) {
        qd(b);
      }
      Rc(sd, a);
    }
    vd = !1;
  }
  function Ad(a) {
    this.g = 0;
    this.u = void 0;
    this.m = this.l = this.i = null;
    this.o = this.s = !1;
    if (a != Sc)
      try {
        var b = this;
        a.call(
          void 0,
          function (c) {
            Bd(b, 2, c);
          },
          function (c) {
            Bd(b, 3, c);
          }
        );
      } catch (c) {
        Bd(this, 3, c);
      }
  }
  function Cd() {
    this.next = this.context = this.l = this.i = this.g = null;
    this.m = !1;
  }
  Cd.prototype.reset = function () {
    this.context = this.l = this.i = this.g = null;
    this.m = !1;
  };
  var Dd = new Qc(
    function () {
      return new Cd();
    },
    function (a) {
      a.reset();
    }
  );
  function Ed(a, b, c) {
    var d = Dd.get();
    d.i = a;
    d.l = b;
    d.context = c;
    return d;
  }
  Ad.prototype.then = function (a, b, c) {
    return Fd(
      this,
      "function" === typeof a ? a : null,
      "function" === typeof b ? b : null,
      c
    );
  };
  Ad.prototype.$goog_Thenable = !0;
  Ad.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Gd(a);
      xd(function () {
        Hd(this, b);
      }, this);
    }
  };
  function Hd(a, b) {
    if (0 == a.g)
      if (a.i) {
        var c = a.i;
        if (c.l) {
          for (
            var d = 0, e = null, f = null, g = c.l;
            g && (g.m || (d++, g.g == a && (e = g), !(e && 1 < d)));
            g = g.next
          )
            e || (f = g);
          e &&
            (0 == c.g && 1 == d
              ? Hd(c, b)
              : (f
                  ? ((d = f),
                    d.next == c.m && (c.m = d),
                    (d.next = d.next.next))
                  : Id(c),
                Jd(c, e, 3, b)));
        }
        a.i = null;
      } else Bd(a, 3, b);
  }
  function Kd(a, b) {
    a.l || (2 != a.g && 3 != a.g) || Ld(a);
    a.m ? (a.m.next = b) : (a.l = b);
    a.m = b;
  }
  function Fd(a, b, c, d) {
    var e = Ed(null, null, null);
    e.g = new Ad(function (f, g) {
      e.i = b
        ? function (h) {
            try {
              var l = b.call(d, h);
              f(l);
            } catch (k) {
              g(k);
            }
          }
        : f;
      e.l = c
        ? function (h) {
            try {
              var l = c.call(d, h);
              void 0 === l && h instanceof Gd ? g(h) : f(l);
            } catch (k) {
              g(k);
            }
          }
        : g;
    });
    e.g.i = a;
    Kd(a, e);
    return e.g;
  }
  Ad.prototype.B = function (a) {
    this.g = 0;
    Bd(this, 2, a);
  };
  Ad.prototype.D = function (a) {
    this.g = 0;
    Bd(this, 3, a);
  };
  function Bd(a, b, c) {
    if (0 == a.g) {
      a === c &&
        ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
      a.g = 1;
      a: {
        var d = c,
          e = a.B,
          f = a.D;
        if (d instanceof Ad) {
          Kd(d, Ed(e || Sc, f || null, a));
          var g = !0;
        } else {
          if (d)
            try {
              var h = !!d.$goog_Thenable;
            } catch (k) {
              h = !1;
            }
          else h = !1;
          if (h) d.then(e, f, a), (g = !0);
          else {
            if (Ja(d))
              try {
                var l = d.then;
                if ("function" === typeof l) {
                  Md(d, l, e, f, a);
                  g = !0;
                  break a;
                }
              } catch (k) {
                f.call(a, k);
                g = !0;
                break a;
              }
            g = !1;
          }
        }
      }
      g ||
        ((a.u = c),
        (a.g = b),
        (a.i = null),
        Ld(a),
        3 != b || c instanceof Gd || Nd(a, c));
    }
  }
  function Md(a, b, c, d, e) {
    function f(l) {
      h || ((h = !0), d.call(e, l));
    }
    function g(l) {
      h || ((h = !0), c.call(e, l));
    }
    var h = !1;
    try {
      b.call(a, g, f);
    } catch (l) {
      f(l);
    }
  }
  function Ld(a) {
    a.s || ((a.s = !0), xd(a.A, a));
  }
  function Id(a) {
    var b = null;
    a.l && ((b = a.l), (a.l = b.next), (b.next = null));
    a.l || (a.m = null);
    return b;
  }
  Ad.prototype.A = function () {
    for (var a; (a = Id(this)); ) Jd(this, a, this.g, this.u);
    this.s = !1;
  };
  function Jd(a, b, c, d) {
    if (3 == c && b.l && !b.m) for (; a && a.o; a = a.i) a.o = !1;
    if (b.g) (b.g.i = null), Od(b, c, d);
    else
      try {
        b.m ? b.i.call(b.context) : Od(b, c, d);
      } catch (e) {
        Pd.call(null, e);
      }
    Rc(Dd, b);
  }
  function Od(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.l && a.l.call(a.context, c);
  }
  function Nd(a, b) {
    a.o = !0;
    xd(function () {
      a.o && Pd.call(null, b);
    });
  }
  var Pd = qd;
  function Gd(a) {
    Na.call(this, a);
  }
  I(Gd, Na);
  Gd.prototype.name = "cancel";
  function Qd(a, b) {
    Nc.call(this);
    this.i = a || 1;
    this.l = b || C;
    this.o = F(this.Yg, this);
    this.s = G();
  }
  I(Qd, Nc);
  m = Qd.prototype;
  m.enabled = !1;
  m.La = null;
  m.Yg = function () {
    if (this.enabled) {
      var a = G() - this.s;
      0 < a && a < 0.8 * this.i
        ? (this.La = this.l.setTimeout(this.o, this.i - a))
        : (this.La && (this.l.clearTimeout(this.La), (this.La = null)),
          Oc(this, "tick"),
          this.enabled && (Rd(this), this.start()));
    }
  };
  m.start = function () {
    this.enabled = !0;
    this.La || ((this.La = this.l.setTimeout(this.o, this.i)), (this.s = G()));
  };
  function Rd(a) {
    a.enabled = !1;
    a.La && (a.l.clearTimeout(a.La), (a.La = null));
  }
  m.Ba = function () {
    Qd.Fa.Ba.call(this);
    Rd(this);
    delete this.l;
  };
  var Sd = jc() || J("iPod"),
    Td = J("iPad");
  !J("Android") || ec();
  ec();
  var Ud = dc() && !(jc() || J("iPad") || J("iPod"));
  var Vd = {},
    Wd = null;
  function Xd(a, b) {
    Ia(a);
    void 0 === b && (b = 0);
    if (!Wd) {
      Wd = {};
      for (
        var c =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          d = ["+/=", "+/", "-_=", "-_.", "-_"],
          e = 0;
        5 > e;
        e++
      ) {
        var f = c.concat(d[e].split(""));
        Vd[e] = f;
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          void 0 === Wd[h] && (Wd[h] = g);
        }
      }
    }
    b = Vd[b];
    c = Array(Math.floor(a.length / 3));
    d = b[64] || "";
    for (e = f = 0; f < a.length - 2; f += 3) {
      var l = a[f],
        k = a[f + 1];
      h = a[f + 2];
      g = b[l >> 2];
      l = b[((l & 3) << 4) | (k >> 4)];
      k = b[((k & 15) << 2) | (h >> 6)];
      h = b[h & 63];
      c[e++] = "" + g + l + k + h;
    }
    g = 0;
    h = d;
    switch (a.length - f) {
      case 2:
        (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
      case 1:
        (a = a[f]),
          (c[e] = "" + b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
    }
    return c.join("");
  }
  var Yd = "undefined" !== typeof Uint8Array,
    Zd = !lc && "function" === typeof btoa;
  function $d() {
    return "function" === typeof BigInt;
  }
  var ae = 0,
    be = 0;
  function ce(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    b &&
      ((c = w(de(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
    ae = c >>> 0;
    be = a >>> 0;
  }
  function ee(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);
    else
      $d()
        ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + 6777216 * c + 6710656 * b),
          (c += 8147497 * b),
          (b *= 2),
          1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
          1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
          (c = b + fe(c) + fe(a)));
    return c;
  }
  function fe(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function ge() {
    var a = ae,
      b = be;
    b & 2147483648
      ? $d()
        ? (a = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
        : ((b = w(de(a, b))),
          (a = b.next().value),
          (b = b.next().value),
          (a = "-" + ee(a, b)))
      : (a = ee(a, b));
    return a;
  }
  function de(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  function he(a) {
    return Array.prototype.slice.call(a);
  }
  function ie(a) {
    return "function" === typeof Symbol && "symbol" === typeof Symbol()
      ? Symbol()
      : a;
  }
  var je = ie(),
    ke = ie("0di"),
    le = ie("2ex");
  Math.max.apply(
    Math,
    x(
      Object.values({
        zh: 1,
        xh: 2,
        wh: 4,
        Ch: 8,
        Bh: 16,
        Ah: 32,
        rh: 64,
        Eh: 128,
        vh: 256,
        uh: 512,
        yh: 1024,
        sh: 2048,
        Dh: 4096,
        th: 8192,
      })
    )
  );
  var me = je
      ? function (a, b) {
          a[je] |= b;
        }
      : function (a, b) {
          void 0 !== a.Da
            ? (a.Da |= b)
            : Object.defineProperties(a, {
                Da: {
                  value: b,
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                },
              });
        },
    ne = je
      ? function (a, b) {
          a[je] &= ~b;
        }
      : function (a, b) {
          void 0 !== a.Da && (a.Da &= ~b);
        };
  function oe(a, b, c) {
    return c ? a | b : a & ~b;
  }
  var pe = je
      ? function (a) {
          return a[je] | 0;
        }
      : function (a) {
          return a.Da | 0;
        },
    qe = je
      ? function (a) {
          return a[je];
        }
      : function (a) {
          return a.Da;
        },
    re = je
      ? function (a, b) {
          a[je] = b;
          return a;
        }
      : function (a, b) {
          void 0 !== a.Da
            ? (a.Da = b)
            : Object.defineProperties(a, {
                Da: {
                  value: b,
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                },
              });
          return a;
        };
  function se(a) {
    me(a, 34);
    return a;
  }
  function te(a, b) {
    re(b, (a | 0) & -14591);
  }
  function ue(a, b) {
    re(b, (a | 34) & -14557);
  }
  function ve(a) {
    a = (a >> 14) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var we = {},
    xe = {};
  function ye(a) {
    return !(!a || "object" !== typeof a || a.tg !== xe);
  }
  function ze(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var Ae;
  function Be(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = pe(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    re(a, d | 1);
    return !0;
  }
  var Ce,
    De = [];
  re(De, 55);
  Ce = Object.freeze(De);
  function Ee(a) {
    if (a & 2) throw Error();
  }
  function Fe(a, b, c) {
    this.i = 0;
    this.g = a;
    this.l = b;
    this.m = c;
  }
  Fe.prototype.next = function () {
    if (this.i < this.g.length) {
      var a = this.g[this.i++];
      return { done: !1, value: this.l ? this.l.call(this.m, a) : a };
    }
    return { done: !0, value: void 0 };
  };
  Fe.prototype[Symbol.iterator] = function () {
    return new Fe(this.g, this.l, this.m);
  };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var Ge;
  function He(a) {
    a = Error(a);
    Eb(a, "warning");
    return a;
  }
  function Ie(a) {
    return a.displayName || a.name || "unknown type name";
  }
  var Je = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Ke(a) {
    var b = typeof a;
    return "number" === b
      ? Number.isFinite(a)
      : "string" !== b
      ? !1
      : Je.test(a);
  }
  function Le(a) {
    if (null != a) {
      var b = !!b;
      if (!Ke(a)) throw He("int64");
      "string" === typeof a
        ? (a = Me(a))
        : b
        ? (Ke(a),
          (a = Math.trunc(a)),
          Number.isSafeInteger(a)
            ? (a = String(a))
            : ((b = String(a)), Ne(b) ? (a = b) : (ce(a), (a = ge()))))
        : (a = Oe(a));
    }
    return a;
  }
  function Ne(a) {
    return "-" === a[0]
      ? 20 > a.length
        ? !0
        : 20 === a.length && -922337 < Number(a.substring(0, 7))
      : 19 > a.length
      ? !0
      : 19 === a.length && 922337 > Number(a.substring(0, 6));
  }
  function Oe(a) {
    Ke(a);
    a = Math.trunc(a);
    if (!Number.isSafeInteger(a)) {
      ce(a);
      var b = ae,
        c = be;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), 0 == b && (c = (c + 1) >>> 0);
      b = 4294967296 * c + (b >>> 0);
      a = a ? -b : b;
    }
    return a;
  }
  function Me(a) {
    Ke(a);
    var b = Math.trunc(Number(a));
    if (Number.isSafeInteger(b)) return String(b);
    b = a.indexOf(".");
    -1 !== b && (a = a.substring(0, b));
    if (!Ne(a)) {
      if (16 > a.length) ce(Number(a));
      else if ($d())
        (a = BigInt(a)),
          (ae = Number(a & BigInt(4294967295)) >>> 0),
          (be = Number((a >> BigInt(32)) & BigInt(4294967295)));
      else {
        b = +("-" === a[0]);
        be = ae = 0;
        for (
          var c = a.length, d = 0 + b, e = ((c - b) % 6) + b;
          e <= c;
          d = e, e += 6
        )
          (d = Number(a.slice(d, e))),
            (be *= 1e6),
            (ae = 1e6 * ae + d),
            4294967296 <= ae &&
              ((be += Math.trunc(ae / 4294967296)), (be >>>= 0), (ae >>>= 0));
        b &&
          ((b = w(de(ae, be))),
          (a = b.next().value),
          (b = b.next().value),
          (ae = a),
          (be = b));
      }
      a = ge();
    }
    return a;
  }
  function Pe(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function Qe(a, b) {
    if (!(a instanceof b))
      throw Error(
        "Expected instanceof " + Ie(b) + " but got " + (a && Ie(a.constructor))
      );
    return a;
  }
  function Re(a, b, c, d) {
    if (null != a && "object" === typeof a && a.gd === we) return a;
    if (!Array.isArray(a))
      return (
        c
          ? d & 2
            ? (a = b[ke])
              ? (b = a)
              : ((a = new b()), se(a.M), (b = b[ke] = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    var e = (c = pe(a));
    0 === e && (e |= d & 32);
    e |= d & 2;
    e !== c && re(a, e);
    return new b(a);
  }
  var Se;
  function K(a, b, c) {
    null == a && (a = Se);
    Se = void 0;
    if (null == a) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -16760833) | ((b & 1023) << 14));
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      d = pe(a);
      if (d & 2048) throw Error("farr");
      if (d & 64) return a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error("mid");
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1;
          if (ze(c[f])) {
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
    re(a, d);
    return a;
  }
  var Te = (function () {
    try {
      var a = function () {
        return la(Map, [], this.constructor);
      };
      y(a, Map);
      new a();
      return !1;
    } catch (b) {
      return !0;
    }
  })();
  function Ue() {
    this.g = new Map();
  }
  m = Ue.prototype;
  m.get = function (a) {
    return this.g.get(a);
  };
  m.set = function (a, b) {
    this.g.set(a, b);
    this.size = this.g.size;
    return this;
  };
  m.delete = function (a) {
    a = this.g.delete(a);
    this.size = this.g.size;
    return a;
  };
  m.clear = function () {
    this.g.clear();
    this.size = this.g.size;
  };
  m.has = function (a) {
    return this.g.has(a);
  };
  m.entries = function () {
    return this.g.entries();
  };
  m.keys = function () {
    return this.g.keys();
  };
  m.values = function () {
    return this.g.values();
  };
  m.forEach = function (a, b) {
    return this.g.forEach(a, b);
  };
  Ue.prototype[Symbol.iterator] = function () {
    return this.entries();
  };
  var Ve = (function () {
    function a() {
      return la(Map, [], this.constructor);
    }
    if (Te)
      return (
        Object.setPrototypeOf(Ue.prototype, Map.prototype),
        Object.defineProperties(Ue.prototype, {
          size: { value: 0, configurable: !0, enumerable: !0, writable: !0 },
        }),
        Ue
      );
    y(a, Map);
    return a;
  })();
  function We(a) {
    return a;
  }
  function Xe(a, b, c, d) {
    c = void 0 === c ? We : c;
    d = void 0 === d ? We : d;
    var e = Ve.call(this) || this;
    var f = pe(a);
    f |= 64;
    re(a, f);
    e.Yb = f;
    e.Hc = b;
    e.Qb = c;
    e.Ad = e.Hc ? Ye : d;
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
        l = c(h[0], !1, !0),
        k = h[1];
      b ? void 0 === k && (k = null) : (k = d(h[1], !1, !0, void 0, void 0, f));
      Ve.prototype.set.call(e, l, k);
    }
    return e;
  }
  y(Xe, Ve);
  function Ze(a) {
    if (a.Yb & 2) throw Error("Cannot mutate an immutable Map");
  }
  function $e(a, b) {
    b = void 0 === b ? af : b;
    if (0 !== a.size) return bf(a, b);
  }
  function bf(a, b) {
    b = void 0 === b ? af : b;
    var c = [];
    a = Ve.prototype.entries.call(a);
    for (var d; !(d = a.next()).done; )
      (d = d.value), (d[0] = b(d[0])), (d[1] = b(d[1])), c.push(d);
    return c;
  }
  m = Xe.prototype;
  m.clear = function () {
    Ze(this);
    Ve.prototype.clear.call(this);
  };
  m.delete = function (a) {
    Ze(this);
    return Ve.prototype.delete.call(this, this.Qb(a, !0, !1));
  };
  m.entries = function () {
    var a = Array.from(Ve.prototype.keys.call(this));
    return new Fe(a, cf, this);
  };
  m.keys = function () {
    return Ve.prototype.keys.call(this);
  };
  m.values = function () {
    var a = Array.from(Ve.prototype.keys.call(this));
    return new Fe(a, Xe.prototype.get, this);
  };
  m.forEach = function (a, b) {
    var c = this;
    Ve.prototype.forEach.call(this, function (d, e) {
      a.call(b, c.get(e), e, c);
    });
  };
  m.set = function (a, b) {
    Ze(this);
    a = this.Qb(a, !0, !1);
    return null == a
      ? this
      : null == b
      ? (Ve.prototype.delete.call(this, a), this)
      : Ve.prototype.set.call(
          this,
          a,
          this.Ad(b, !0, !0, this.Hc, !1, this.Yb)
        );
  };
  m.has = function (a) {
    return Ve.prototype.has.call(this, this.Qb(a, !1, !1));
  };
  m.get = function (a) {
    a = this.Qb(a, !1, !1);
    var b = Ve.prototype.get.call(this, a);
    if (void 0 !== b) {
      var c = this.Hc;
      return c
        ? ((c = this.Ad(b, !1, !0, c, this.Ph, this.Yb)),
          c !== b && Ve.prototype.set.call(this, a, c),
          c)
        : b;
    }
  };
  Xe.prototype[Symbol.iterator] = function () {
    return this.entries();
  };
  Xe.prototype.toJSON = void 0;
  Xe.prototype.tg = xe;
  function Ye(a, b, c, d, e, f) {
    b && Qe(a, d);
    a = Re(a, d, c, f);
    e && (a = df(a));
    f & 2 && pe(a.M);
    return a;
  }
  function af(a) {
    return a;
  }
  function cf(a) {
    return [a, this.get(a)];
  }
  function ef(a, b) {
    return ff(b);
  }
  function ff(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (Be(a, void 0, 0)) return;
          } else {
            if (Yd && null != a && a instanceof Uint8Array) {
              if (Zd) {
                for (var b = "", c = 0, d = a.length - 10240; c < d; )
                  b += String.fromCharCode.apply(
                    null,
                    a.subarray(c, (c += 10240))
                  );
                b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                a = btoa(b);
              } else a = Xd(a);
              return a;
            }
            if (a instanceof Xe) return $e(a);
          }
    }
    return a;
  }
  function gf(a, b, c) {
    a = he(a);
    var d = a.length,
      e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (var f in e) b[f] = c(e[f]);
    }
    return a;
  }
  function hf(a, b, c, d, e) {
    if (null != a) {
      if (Array.isArray(a))
        a = Be(a, void 0, 0)
          ? void 0
          : e && pe(a) & 2
          ? a
          : jf(a, b, c, void 0 !== d, e);
      else if (ze(a)) {
        var f = {},
          g;
        for (g in a) f[g] = hf(a[g], b, c, d, e);
        a = f;
      } else a = b(a, d);
      return a;
    }
  }
  function jf(a, b, c, d, e) {
    var f = d || c ? pe(a) : 0;
    d = d ? !!(f & 32) : void 0;
    a = he(a);
    for (var g = 0; g < a.length; g++) a[g] = hf(a[g], b, c, d, e);
    c && c(f, a);
    return a;
  }
  function kf(a) {
    return hf(a, lf, void 0, void 0, !1);
  }
  function lf(a) {
    return a.gd === we ? a.toJSON() : a instanceof Xe ? $e(a, kf) : ff(a);
  }
  function mf(a, b, c) {
    c = void 0 === c ? ue : c;
    if (null != a) {
      if (Yd && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = pe(a);
        if (d & 2) return a;
        b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b ? re(a, (d | 34) & -12293) : jf(a, mf, d & 4 ? ue : c, !0, !0);
      }
      a.gd === we
        ? ((c = a.M), (d = qe(c)), (a = d & 2 ? a : nf(a, c, d, !0)))
        : a instanceof Xe &&
          !(a.Yb & 2) &&
          ((c = se(bf(a, mf))), (a = new Xe(c, a.Hc, a.Qb, a.Ad)));
      return a;
    }
  }
  function nf(a, b, c, d) {
    a = a.constructor;
    b = of(b, c, d);
    pe(b);
    Se = b;
    b = new a(b);
    Se = void 0;
    return b;
  }
  function of(a, b, c) {
    var d = c || b & 2 ? ue : te,
      e = !!(b & 32);
    a = gf(a, b, function (f) {
      return mf(f, e, d);
    });
    me(a, 32 | (c ? 2 : 0));
    return a;
  }
  function df(a) {
    var b = a.M,
      c = qe(b);
    return c & 2 ? nf(a, b, c, !1) : a;
  }
  function pf(a, b) {
    a = a.M;
    return qf(a, qe(a), b);
  }
  function rf(a, b, c, d) {
    b = d + (+!!(b & 512) - 1);
    if (!(0 > b || b >= a.length || b >= c)) return a[b];
  }
  function qf(a, b, c, d) {
    if (-1 === c) return null;
    var e = ve(b);
    if (c >= e) {
      if (b & 256) return a[a.length - 1][c];
    } else {
      var f = a.length;
      if (d && b & 256 && ((d = a[f - 1][c]), null != d)) {
        if (rf(a, b, e, c) && null != le) {
          var g;
          a = null != (g = Ge) ? g : (Ge = {});
          g = a[le] || 0;
          4 <= g || ((a[le] = g + 1), (g = Error()), Eb(g, "incident"), qd(g));
        }
        return d;
      }
      return rf(a, b, e, c);
    }
  }
  function sf(a, b, c) {
    var d = a.M,
      e = qe(d);
    Ee(e);
    tf(d, e, b, c);
    return a;
  }
  function tf(a, b, c, d, e) {
    ze(d);
    var f = ve(b);
    if (c >= f || e) {
      var g = b;
      if (b & 256) e = a[a.length - 1];
      else {
        if (null == d) return g;
        e = a[f + (+!!(b & 512) - 1)] = {};
        g |= 256;
      }
      e[c] = d;
      c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
      g !== b && re(a, g);
      return g;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    return b;
  }
  function uf(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(2048 & a);
  }
  function vf(a, b, c, d) {
    a = a.M;
    var e = qe(a);
    Ee(e);
    (c = wf(a, e, c)) && c !== b && null != d && (e = tf(a, e, c));
    tf(a, e, b, d);
  }
  function wf(a, b, c) {
    for (var d = 0, e = 0; e < c.length; e++) {
      var f = c[e];
      null != qf(a, b, f) && (0 !== d && (b = tf(a, b, d)), (d = f));
    }
    return d;
  }
  function xf(a, b, c) {
    var d = void 0 === d ? !1 : d;
    var e = a.M;
    var f = qe(e),
      g = qf(e, f, c, d);
    b = Re(g, b, !1, f);
    b !== g && null != b && tf(e, f, c, b, d);
    e = b;
    if (null == e) return e;
    a = a.M;
    f = qe(a);
    f & 2 || ((g = df(e)), g !== e && ((e = g), tf(a, f, c, e, d)));
    return e;
  }
  function yf(a, b, c, d) {
    null != d ? Qe(d, b) : (d = void 0);
    return sf(a, c, d);
  }
  function zf(a, b) {
    a = oe(a, 2, !!(2 & b));
    a = oe(a, 32, !0);
    return (a = oe(a, 2048, !1));
  }
  function Af(a, b) {
    var c = !0;
    (32 & b && c) || (a = oe(a, 32, !1));
    return a;
  }
  function Bf(a, b, c, d) {
    a = a.M;
    var e = qe(a);
    Ee(e);
    var f,
      g = !!(2 & e),
      h = g ? 1 : 2,
      l = 1 === h;
    h = 2 === h;
    f && (f = !g);
    g = qf(a, e, b);
    g = Array.isArray(g) ? g : Ce;
    var k = pe(g),
      n = !!(4 & k);
    if (!n) {
      var p = k;
      0 === p && (p = zf(p, e));
      p = oe(p, 1, !0);
      k = g;
      var r = e,
        q = !!(2 & p);
      q && (r = oe(r, 2, !0));
      for (var t = !q, u = !0, z = 0, E = 0; z < k.length; z++) {
        var Q = Re(k[z], c, !1, r);
        if (Q instanceof c) {
          if (!q) {
            var X = !!(pe(Q.M) & 2);
            t && (t = !X);
            u && (u = X);
          }
          k[E++] = Q;
        }
      }
      E < z && (k.length = E);
      p = oe(p, 4, !0);
      p = oe(p, 16, u);
      p = oe(p, 8, t);
      re(k, p);
      q && Object.freeze(k);
      k = p;
    }
    p = !!(8 & k) || (l && !g.length);
    if (f && !p) {
      uf(k) && ((g = he(g)), (k = zf(k, e)), (e = tf(a, e, b, g)));
      f = g;
      for (p = 0; p < f.length; p++)
        (r = f[p]), (q = df(r)), r !== q && (f[p] = q);
      k = oe(k, 8, !0);
      k = oe(k, 16, !f.length);
      re(f, k);
    }
    uf(k) ||
      ((f = k),
      l
        ? ((p = !!(32 & k)),
          p || ((g = he(g)), (f = 0), (e = tf(a, e, b, g))),
          (k = oe(k, !g.length || (16 & k && (!n || p)) ? 2 : 2048, !0)))
        : (k = Af(k, e)),
      k !== f && re(g, k),
      l && Object.freeze(g));
    h &&
      uf(k) &&
      ((g = he(g)), (k = zf(k, e)), (k = Af(k, e)), re(g, k), tf(a, e, b, g));
    b = g;
    c = null != d ? Qe(d, c) : new c();
    b.push(c);
    pe(c.M) & 2 ? ne(b, 8) : ne(b, 16);
  }
  function Cf(a, b) {
    var c = 0;
    c = void 0 === c ? 0 : c;
    a = pf(a, b);
    a = null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
    return null != a ? a : c;
  }
  function Df(a, b) {
    var c = a.M;
    b = wf(c, qe(c), Ef) === b ? b : -1;
    a = pf(a, b);
    return null == a || "string" === typeof a ? a : void 0;
  }
  function L(a, b, c) {
    return sf(a, b, Pe(c));
  }
  function Ff(a, b, c) {
    if (null != c) {
      if (!Number.isFinite(c)) throw He("enum");
      c |= 0;
    }
    return sf(a, b, c);
  }
  function M(a, b, c) {
    this.M = K(a, b, c);
  }
  M.prototype.toJSON = function () {
    if (Ae) var a = Gf(this, this.M, !1);
    else (a = jf(this.M, lf, void 0, void 0, !1)), (a = Gf(this, a, !0));
    return a;
  };
  M.prototype.clone = function () {
    var a = this.M;
    return nf(this, a, qe(a), !1);
  };
  M.prototype.gd = we;
  M.prototype.toString = function () {
    return Gf(this, this.M, !1).toString();
  };
  function Gf(a, b, c) {
    var d = Vb ? void 0 : a.constructor.hb;
    var e = qe(c ? a.M : b);
    a = b.length;
    if (!a) return b;
    var f;
    if (ze((c = b[a - 1]))) {
      a: {
        var g = c;
        var h = {},
          l = !1,
          k;
        for (k in g) {
          var n = g[k];
          if (Array.isArray(n)) {
            var p = n;
            if (Be(n, d, +k) || (ye(n) && 0 === n.size)) n = null;
            n != p && (l = !0);
          }
          null != n ? (h[k] = n) : (l = !0);
        }
        if (l) {
          for (var r in h) {
            g = h;
            break a;
          }
          g = null;
        }
      }
      g != c && (f = !0);
      a--;
    }
    for (k = +!!(e & 512) - 1; 0 < a; a--) {
      r = a - 1;
      c = b[r];
      r -= k;
      if (!(null == c || Be(c, d, r) || (ye(c) && 0 === c.size))) break;
      var q = !0;
    }
    if (!f && !q) return b;
    b = Array.prototype.slice.call(b, 0, a);
    g && b.push(g);
    return b;
  }
  var Hf = window;
  function If() {
    return Ub && Xb
      ? Xb.mobile
      : !(Ub && Xb
          ? !Xb.mobile && (J("iPad") || J("Android") || J("Silk"))
          : J("iPad") || (J("Android") && !J("Mobile")) || J("Silk")) &&
          (J("iPod") || J("iPhone") || J("Android") || J("IEMobile"));
  }
  function Jf(a) {
    var b = Kf;
    if (b)
      for (var c in b)
        Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b);
  }
  function Lf() {
    var a = [];
    Jf(function (b) {
      a.push(b);
    });
    return a;
  }
  var Kf = {
      gh: "allow-forms",
      hh: "allow-modals",
      ih: "allow-orientation-lock",
      jh: "allow-pointer-lock",
      kh: "allow-popups",
      lh: "allow-popups-to-escape-sandbox",
      mh: "allow-presentation",
      nh: "allow-same-origin",
      oh: "allow-scripts",
      ph: "allow-top-navigation",
      qh: "allow-top-navigation-by-user-activation",
    },
    Mf = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      return Lf();
    });
  function Nf() {
    var a = Of(),
      b = {};
    ob(Mf(), function (c) {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  }
  function Of() {
    var a = void 0 === a ? document : a;
    return a.createElement("iframe");
  }
  function Pf() {
    var a = document.body || document.documentElement;
    a: {
      var b = 9 == a.nodeType ? a : a.ownerDocument || a.document;
      if (
        b.defaultView &&
        b.defaultView.getComputedStyle &&
        (b = b.defaultView.getComputedStyle(a, null))
      ) {
        b = b.direction || b.getPropertyValue("direction") || "";
        break a;
      }
      b = "";
    }
    return (
      b ||
      (a.currentStyle ? a.currentStyle.direction : null) ||
      (a.style && a.style.direction)
    );
  }
  var Qf = new Date().getTime();
  function Rf(a) {
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
  function Sf() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      n = k = 0;
    }
    function b(p) {
      for (var r = g, q = 0; 64 > q; q += 4)
        r[q / 4] = (p[q] << 24) | (p[q + 1] << 16) | (p[q + 2] << 8) | p[q + 3];
      for (q = 16; 80 > q; q++)
        (p = r[q - 3] ^ r[q - 8] ^ r[q - 14] ^ r[q - 16]),
          (r[q] = ((p << 1) | (p >>> 31)) & 4294967295);
      p = e[0];
      var t = e[1],
        u = e[2],
        z = e[3],
        E = e[4];
      for (q = 0; 80 > q; q++) {
        if (40 > q)
          if (20 > q) {
            var Q = z ^ (t & (u ^ z));
            var X = 1518500249;
          } else (Q = t ^ u ^ z), (X = 1859775393);
        else
          60 > q
            ? ((Q = (t & u) | (z & (t | u))), (X = 2400959708))
            : ((Q = t ^ u ^ z), (X = 3395469782));
        Q =
          ((((p << 5) | (p >>> 27)) & 4294967295) + Q + E + X + r[q]) &
          4294967295;
        E = z;
        z = u;
        u = ((t << 30) | (t >>> 2)) & 4294967295;
        t = p;
        p = Q;
      }
      e[0] = (e[0] + p) & 4294967295;
      e[1] = (e[1] + t) & 4294967295;
      e[2] = (e[2] + u) & 4294967295;
      e[3] = (e[3] + z) & 4294967295;
      e[4] = (e[4] + E) & 4294967295;
    }
    function c(p, r) {
      if ("string" === typeof p) {
        p = unescape(encodeURIComponent(p));
        for (var q = [], t = 0, u = p.length; t < u; ++t)
          q.push(p.charCodeAt(t));
        p = q;
      }
      r || (r = p.length);
      q = 0;
      if (0 == k)
        for (; q + 64 < r; ) b(p.slice(q, q + 64)), (q += 64), (n += 64);
      for (; q < r; )
        if (((f[k++] = p[q++]), n++, 64 == k))
          for (k = 0, b(f); q + 64 < r; )
            b(p.slice(q, q + 64)), (q += 64), (n += 64);
    }
    function d() {
      var p = [],
        r = 8 * n;
      56 > k ? c(h, 56 - k) : c(h, 64 - (k - 56));
      for (var q = 63; 56 <= q; q--) (f[q] = r & 255), (r >>>= 8);
      b(f);
      for (q = r = 0; 5 > q; q++)
        for (var t = 24; 0 <= t; t -= 8) p[r++] = (e[q] >> t) & 255;
      return p;
    }
    for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l) h[l] = 0;
    var k, n;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      ef: function () {
        for (var p = d(), r = "", q = 0; q < p.length; q++)
          r +=
            "0123456789ABCDEF".charAt(Math.floor(p[q] / 16)) +
            "0123456789ABCDEF".charAt(p[q] % 16);
        return r;
      },
    };
  }
  function Tf(a, b, c) {
    var d = String(C.location.href);
    return d && a && b ? [b, Uf(Rf(d), a, c || null)].join(" ") : null;
  }
  function Uf(a, b, c) {
    var d = [],
      e = [];
    if (1 == (Array.isArray(c) ? 2 : 1))
      return (
        (e = [b, a]),
        ob(d, function (h) {
          e.push(h);
        }),
        Vf(e.join(" "))
      );
    var f = [],
      g = [];
    ob(c, function (h) {
      g.push(h.key);
      f.push(h.value);
    });
    c = Math.floor(new Date().getTime() / 1e3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    ob(d, function (h) {
      e.push(h);
    });
    a = Vf(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_");
  }
  function Vf(a) {
    var b = Sf();
    b.update(a);
    return b.ef().toLowerCase();
  }
  var Wf = {};
  function Xf(a) {
    this.g = a || { cookie: "" };
  }
  m = Xf.prototype;
  m.isEnabled = function () {
    if (!C.navigator.cookieEnabled) return !1;
    if (this.g.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", { ed: 60 });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0;
  };
  m.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.ui;
      d = c.secure || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.ed;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    c = f ? ";domain=" + f : "";
    g = g ? ";path=" + g : "";
    d = d ? ";secure" : "";
    h =
      0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString();
    this.g.cookie =
      a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "");
  };
  m.get = function (a, b) {
    for (
      var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Pa(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  m.remove = function (a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", { ed: 0, path: b, domain: c });
    return d;
  };
  m.clear = function () {
    for (
      var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = Pa(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
  };
  var Yf = new Xf("undefined" == typeof document ? null : document);
  function Zf(a) {
    return !!Wf.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
  }
  function $f(a) {
    a = void 0 === a ? !1 : a;
    var b = C.__SAPISID || C.__APISID || C.__3PSAPISID || C.__OVERRIDE_SID;
    Zf(a) && (b = b || C.__1PSAPISID);
    if (b) return !0;
    if ("undefined" !== typeof document) {
      var c = new Xf(document);
      b =
        c.get("SAPISID") ||
        c.get("APISID") ||
        c.get("__Secure-3PAPISID") ||
        c.get("SID") ||
        c.get("OSID");
      Zf(a) && (b = b || c.get("__Secure-1PAPISID"));
    }
    return !!b;
  }
  function ag(a, b, c, d) {
    (a = C[a]) ||
      "undefined" === typeof document ||
      (a = new Xf(document).get(b));
    return a ? Tf(a, c, d) : null;
  }
  function bg(a) {
    var b = void 0 === b ? !1 : b;
    var c = Rf(String(C.location.href)),
      d = [];
    if ($f(b)) {
      c =
        0 == c.indexOf("https:") ||
        0 == c.indexOf("chrome-extension:") ||
        0 == c.indexOf("moz-extension:");
      var e = c ? C.__SAPISID : C.__APISID;
      e ||
        "undefined" === typeof document ||
        ((e = new Xf(document)),
        (e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")));
      (e = e ? Tf(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e);
      c &&
        Zf(b) &&
        ((b = ag("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) &&
          d.push(b),
        (a = ag("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) &&
          d.push(a));
    }
    return 0 == d.length ? null : d.join(" ");
  }
  function cg(a) {
    Nc.call(this);
    var b = this;
    this.A = this.i = 0;
    this.Ea =
      null != a
        ? a
        : {
            Ha: function (e, f) {
              return setTimeout(e, f);
            },
            xa: function (e) {
              clearTimeout(e);
            },
          };
    var c, d;
    this.l =
      null != (d = null == (c = window.navigator) ? void 0 : c.onLine) ? d : !0;
    this.o = function () {
      return B(function (e) {
        return A(e, dg(b), 0);
      });
    };
    window.addEventListener("offline", this.o);
    window.addEventListener("online", this.o);
    this.A || eg(this);
  }
  y(cg, Nc);
  function fg() {
    var a = gg;
    cg.g || (cg.g = new cg(a));
    return cg.g;
  }
  cg.prototype.dispose = function () {
    window.removeEventListener("offline", this.o);
    window.removeEventListener("online", this.o);
    this.Ea.xa(this.A);
    delete cg.g;
  };
  cg.prototype.ya = function () {
    return this.l;
  };
  function eg(a) {
    a.A = a.Ea.Ha(function () {
      var b;
      return B(function (c) {
        if (1 == c.g)
          return a.l
            ? (null == (b = window.navigator) ? 0 : b.onLine)
              ? c.O(3)
              : A(c, dg(a), 3)
            : A(c, dg(a), 3);
        eg(a);
        c.g = 0;
      });
    }, 3e4);
  }
  function dg(a, b) {
    return a.s
      ? a.s
      : (a.s = new Promise(function (c) {
          var d, e, f, g;
          return B(function (h) {
            switch (h.g) {
              case 1:
                return (
                  (d = window.AbortController
                    ? new window.AbortController()
                    : void 0),
                  (f = null == (e = d) ? void 0 : e.signal),
                  (g = !1),
                  ua(h, 2, 3),
                  d &&
                    (a.i = a.Ea.Ha(function () {
                      d.abort();
                    }, b || 2e4)),
                  A(h, fetch("/generate_204", { method: "HEAD", signal: f }), 5)
                );
              case 5:
                g = !0;
              case 3:
                h.B = [h.i];
                h.o = 0;
                h.s = 0;
                a.s = void 0;
                a.i && (a.Ea.xa(a.i), (a.i = 0));
                g !== a.l &&
                  ((a.l = g),
                  a.l
                    ? Oc(a, "networkstatus-online")
                    : Oc(a, "networkstatus-offline"));
                c(g);
                wa(h);
                break;
              case 2:
                va(h), (g = !1), h.O(3);
            }
          });
        }));
  }
  var hg = /^[6-9]$/,
    ig = /<\/?(?:b|em)>/gi;
  function jg(a) {
    this.g = a;
  }
  var kg = new jg({});
  function lg(a) {
    a = mg(a);
    return Ab(a);
  }
  function ng(a) {
    a = mg(a);
    return Za(a);
  }
  function mg(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  function og(a, b, c, d, e, f) {
    this.A = a instanceof yb ? a : lg(a);
    this.g = b;
    this.u = c;
    this.s = d;
    this.i = e;
    this.m = f || kg;
    this.o = !1;
    switch (this.s) {
      case 0:
      case 32:
      case 38:
      case 400:
      case 407:
      case 35:
      case 33:
      case 41:
      case 34:
      case 44:
      case 45:
      case 40:
      case 46:
      case 56:
      case 30:
      case 94:
      case 92:
      case 93:
      case 411:
      case 410:
      case 71:
        this.o = !0;
    }
  }
  og.prototype.getHtml = function () {
    return zb(this.A).toString();
  };
  og.prototype.l = function () {
    return this.u;
  };
  og.prototype.getType = function () {
    return this.s;
  };
  var pg = /^\s/,
    qg = /\s+/,
    rg = /\s+/g,
    sg = /^\s+|\s+$/g,
    tg = /^\s+$/,
    ug = /<[^>]*>/g,
    vg = /&nbsp;/g,
    wg = /&#x3000;/g,
    xg = [
      /&/g,
      /&amp;/g,
      /</g,
      /&lt;/g,
      />/g,
      /&gt;/g,
      /"/g,
      /&quot;/g,
      /'/g,
      /&#39;/g,
      /{/g,
      /&#123;/g,
    ],
    yg = document.getElementsByTagName("head")[0],
    zg = 0,
    Ag = 1;
  function Bg(a) {
    var b = {};
    if (a) for (var c = 0; c < a.length; ++c) b[a[c]] = !0;
    return b;
  }
  function Cg(a, b) {
    function c() {
      return b;
    }
    void 0 === b && (b = a);
    return {
      Ob: c,
      Yd: function () {
        return a;
      },
      zf: c,
      bi: function () {
        return a < b;
      },
      equals: function (d) {
        return d && a == d.Yd() && b == d.zf();
      },
    };
  }
  function Dg(a, b, c, d) {
    if (null == b || "" === b) {
      if (!d) return;
      b = "";
    }
    c.push(a + "=" + encodeURIComponent(String(b)));
  }
  function Eg(a, b) {
    var c = [],
      d;
    for (d in a) Dg(d, a[d], c, b);
    return c.join("&");
  }
  function Fg(a) {
    var b = {},
      c = Math.max(a.indexOf("?"), a.indexOf("#"));
    a = a.substr(c + 1);
    if (0 <= c && a) {
      c = a.split("&");
      a = 0;
      for (var d; a < c.length; ++a)
        if ((d = c[a])) (d = d.split("=")), (b[d[0]] = d[1] || "");
    }
    return b;
  }
  function Gg(a) {
    return !!a && !tg.test(a);
  }
  function Hg(a) {
    for (var b = xg.length, c = 0; c < b; c += 2)
      a = a.replace(xg[c], xg[c + 1].source);
    return a;
  }
  function Ig(a) {
    for (var b = xg.length, c = 0; c < b; c += 2)
      a = a.replace(xg[c + 1], xg[c].source);
    a = a.replace(vg, " ");
    return a.replace(wg, "\u3000");
  }
  function Jg(a, b) {
    return a && (-1 < a.indexOf(" ") || qg.test(a))
      ? ((a = a.replace(rg, " ")), a.replace(b ? sg : pg, ""))
      : a;
  }
  function Kg(a, b, c) {
    c && ((a = a.toLowerCase()), (b = b.toLowerCase()));
    return b.length <= a.length && a.substring(0, b.length) == b;
  }
  function Lg() {}
  function Mg(a) {
    var b = Ng;
    if (b.indexOf) return b.indexOf(a);
    for (var c = 0, d = b.length; c < d; ++c) if (b[c] === a) return c;
    return -1;
  }
  function Og() {
    return 0;
  }
  function Pg(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  function Qg(a, b) {
    a += "";
    b.length &&
      ((a += "i" + b.join("i")), (a += "k" + (-1 != nb(b, 173) ? 14 : 1)));
    return a;
  }
  function Rg(a, b, c) {
    this.g = a;
    this.J = b;
    this.D = c || "";
    this.u = (zg++).toString(36);
    this.B = this.g.toLowerCase();
    this.l = Jg(this.B);
    this.F = {};
    this.A = {};
    this.o = this.I = this.m = !1;
    this.H = 1;
  }
  Rg.prototype.getId = function () {
    return this.u;
  };
  function Sg(a) {
    a = parseInt(a.u, 36);
    return isNaN(a) ? -1 : a;
  }
  function Tg(a, b, c, d) {
    a.m || ((a.F[b] = c), d && (a.A[b] = c));
  }
  function Ug(a, b, c, d, e, f) {
    this.l = a;
    this.g = b;
    this.i = c;
    this.o = d;
    this.m = e;
    this.u = f;
    this.s = !0;
    this.g
      ? this.g.length && 33 == this.g[0].getType() && (this.m = this.s = !1)
      : (this.g = []);
    this.i || (this.i = kg);
  }
  Ug.prototype.getType = function () {
    return this.s;
  };
  function Vg() {}
  Vg.prototype.Dd = function () {};
  Vg.prototype.redirect = function () {};
  Vg.prototype.Cd = function () {
    return "";
  };
  Vg.prototype.me = function () {};
  function Wg() {
    this.l = {};
    this.g = {};
  }
  Wg.prototype.set = function (a, b) {
    this.l[a] = b;
  };
  Wg.prototype.has = function (a) {
    return !!this.l[a];
  };
  function Xg(a, b, c) {
    b in a.g || (a.g[b] = []);
    a.g[b].push(c);
  }
  function Yg(a, b, c, d, e, f) {
    this.s = a;
    this.A = b;
    this.B = c;
    this.o = d;
    this.i = e;
    this.config_ = f;
    this.u = {};
    this.m = {};
    this.g = [];
    this.l = !1;
    a = this.A;
    c = a.l;
    for (var g in c) if (((d = g), (b = c[d]))) (this.u[d] = b), this.g.push(b);
    a = a.g;
    for (g in a) {
      d = g;
      b = a[d];
      c = d;
      d = b;
      e = this.m[c] || [];
      for (f = 0; f < d.length; ++f) if ((b = d[f])) e.push(b), this.g.push(b);
      this.m[c] = e;
    }
    this.g.sort(Zg);
    for (g = 0; (a = this.g[g++]); ) a.sa(this.B, this.o);
    this.s.me(this.o);
    this.o.Ye();
    for (g = 0; (a = this.g[g++]); ) a.P(this);
    for (g = 0; (a = this.g[g++]); ) a.ga(this.config_);
    for (g = 0; (a = this.g[g++]); ) a.nb(this.config_);
    for (g = 0; (a = this.g[g++]); ) a.R(this.config_);
    this.l = !0;
  }
  function $g(a) {
    if (a.l) {
      for (var b = 0, c; (c = a.g[b++]); ) c.Ga();
      a.l = !1;
    }
  }
  Yg.prototype.isActive = function () {
    return this.l;
  };
  Yg.prototype.get = function (a) {
    return this.u[a];
  };
  function ah(a, b) {
    return a.m[b] || [];
  }
  function Zg(a, b) {
    a = Mg(a.getType());
    b = Mg(b.getType());
    return 0 > a ? 1 : 0 > b ? -1 : a - b;
  }
  var Ng = [
    127, 551, 149, 134, 494, 123, 121, 126, 553, 118, 115, 128, 160, 173, 119,
    116, 152, 153, 129, 120, 374, 124, 158, 155, 131, 130, 147, 570, 141, 143,
    138, 144, 139, 140, 135, 136,
  ];
  function N(a) {
    this.l = a;
  }
  m = N.prototype;
  m.sa = function () {};
  m.P = function () {};
  m.ga = function () {};
  m.nb = function () {};
  m.R = function () {};
  m.getType = function () {
    return this.l;
  };
  m.Ga = function () {};
  function bh() {
    this.l = 149;
    this.g = {};
    this.i = 0;
  }
  y(bh, N);
  m = bh.prototype;
  m.P = function (a) {
    this.A = a.get(127);
  };
  m.R = function (a) {
    if (a.connectionType == this.qb()) {
      this.config_ = a;
      var b = this.A.i,
        c = "https:" == document.location.protocol;
      this.s = b.protocol || "http" + (c ? "s" : "") + "://";
      this.o = b.host || "clients1." + a.ic;
      this.u = b.Ac;
      this.m = b.He;
    }
  };
  m.Ga = function () {
    ch(this);
    this.i = 0;
  };
  m.Fe = function (a, b, c) {
    dh(this, a.getId(), a.g, b, c);
    return !0;
  };
  m.qb = function () {
    return 1;
  };
  m.Tc = function () {
    return this.i;
  };
  m.Pc = function (a) {
    var b = this.g[a];
    b && (eh(b), delete this.g[a]);
  };
  function dh(a, b, c, d, e) {
    a.config_.Od || ch(a);
    var f = new XMLHttpRequest();
    c =
      a.s +
      a.o +
      a.u +
      "?" +
      (a.m ? a.m + "&" : "") +
      (d ? d + "&" : "") +
      "q=" +
      encodeURIComponent(c) +
      "&xhr=t&xssi=t";
    f.open("GET", c, !0);
    f.withCredentials = !0;
    a.config_.visitorData &&
      f.setRequestHeader("X-Goog-Visitor-Id", a.config_.visitorData);
    f.onreadystatechange = function () {
      if (4 == f.readyState) {
        switch (f.status) {
          case 403:
            a.i = 1e3;
            break;
          case 302:
          case 500:
          case 502:
          case 503:
            ++a.i;
            break;
          case 200:
            var g = f.responseText;
            0 == g.lastIndexOf(")]}'\n", 0) && (g = g.substring(5));
            e(JSON.parse(g));
          default:
            a.i = 0;
        }
        a.Pc(b);
      }
    };
    a.g[b] = f;
    f.send(null);
  }
  function ch(a) {
    for (var b in a.g) eh(a.g[b]);
    a.g = {};
  }
  function eh(a) {
    a.onreadystatechange = Lg;
    var b = a.readyState;
    0 != b && 4 != b && a.abort();
  }
  var fh;
  function gh() {
    this.l = 153;
  }
  y(gh, N);
  function hh(a, b) {
    a.length &&
      b.push({
        getType: function () {
          return 507;
        },
        position: 2,
      });
  }
  function ih(a) {
    this.o = a;
  }
  ih.prototype.getType = function () {
    return this.o;
  };
  ih.prototype.s = function () {
    return !0;
  };
  function jh(a) {
    this.l = 152;
    this.D = a;
  }
  I(jh, N);
  jh.prototype.Ab = Lg;
  var kh = bc(),
    lh;
  if ((lh = kh)) {
    for (
      var mh = gc(),
        nh = 0,
        oh = Pa(String(mh)).split("."),
        ph = Pa("10").split("."),
        qh = Math.max(oh.length, ph.length),
        rh = 0;
      0 == nh && rh < qh;
      rh++
    ) {
      var sh = oh[rh] || "",
        th = ph[rh] || "";
      do {
        var uh = /(\d*)(\D*)(.*)/.exec(sh) || ["", "", "", ""],
          vh = /(\d*)(\D*)(.*)/.exec(th) || ["", "", "", ""];
        if (0 == uh[0].length && 0 == vh[0].length) break;
        nh =
          Qa(
            0 == uh[1].length ? 0 : parseInt(uh[1], 10),
            0 == vh[1].length ? 0 : parseInt(vh[1], 10)
          ) ||
          Qa(0 == uh[2].length, 0 == vh[2].length) ||
          Qa(uh[2], vh[2]);
        sh = uh[3];
        th = vh[3];
      } while (0 == nh);
    }
    lh = 0 <= nh;
  }
  var wh = lh,
    xh = hc();
  xh && gc();
  var yh = ac(),
    zh = -1 != Wb().toLowerCase().indexOf("webkit") && !J("Edge");
  dc();
  var Ah = ec(),
    Bh = If() && dc(),
    Ch = ic(),
    Dh = Ub && Xb && Xb.platform ? "macOS" === Xb.platform : J("Macintosh"),
    Eh = If();
  var Fh;
  wb(
    "A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(
      " "
    )
  );
  function Gh(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role");
  }
  function Hh(a, b, c) {
    Array.isArray(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c
      ? (Fh ||
          ((c = {}),
          (Fh =
            ((c.atomic = !1),
            (c.autocomplete = "none"),
            (c.dropeffect = "none"),
            (c.haspopup = !1),
            (c.live = "off"),
            (c.multiline = !1),
            (c.multiselectable = !1),
            (c.orientation = "vertical"),
            (c.readonly = !1),
            (c.relevant = "additions text"),
            (c.required = !1),
            (c.sort = "none"),
            (c.busy = !1),
            (c.disabled = !1),
            (c.hidden = !1),
            (c.invalid = "false"),
            c))),
        (c = Fh),
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
      : a.setAttribute(d, c);
  }
  function Ih(a) {
    var b = a.getAttribute("aria-activedescendant");
    return (9 == a.nodeType ? a : a.ownerDocument || a.document).getElementById(
      null == b || void 0 == b ? "" : String(b)
    );
  }
  function Jh(a, b) {
    var c = "";
    b && (c = b.id);
    Hh(a, "activedescendant", c);
  }
  var Kh = void 0 != document.documentElement.style.opacity,
    Lh = { rtl: "right", ltr: "left" };
  function Mh(a, b) {
    try {
      if (a.setSelectionRange) a.setSelectionRange(b, b);
      else if (a.createTextRange) {
        var c = a.createTextRange();
        c.collapse(!0);
        c.moveStart("character", b);
        c.select();
      }
    } catch (d) {}
  }
  function Nh(a) {
    for (var b = 0, c = 0; a; ) {
      b += a.offsetTop;
      c += a.offsetLeft;
      try {
        a = a.offsetParent;
      } catch (d) {
        a = null;
      }
    }
    return { Ec: b, Ta: c };
  }
  function Oh(a) {
    try {
      return Ph(a).activeElement == a;
    } catch (b) {}
    return !1;
  }
  function O(a, b) {
    a = document.createElement(a);
    b && (a.className = b);
    return a;
  }
  function P(a) {
    return O("div", a);
  }
  function Qh(a, b) {
    a.innerHTML != b && Bb(a, lg(b));
  }
  function Rh(a, b) {
    a.dir != b && ((a.dir = b), (a.style.textAlign = Lh[b]));
  }
  function Sh(a) {
    a && (a.preventDefault && a.preventDefault(), (a.returnValue = !1));
    return !1;
  }
  function Th(a) {
    if ((a = a || window.event))
      a.stopPropagation && a.stopPropagation(),
        (a.cancelBubble = a.cancel = !0);
    return Sh(a);
  }
  function Uh(a) {
    var b = O("a");
    mb(b, "#ifl");
    b.className = "sbsb_i sbqs_b";
    a.appendChild(b);
    return b;
  }
  function Vh(a) {
    var b = a || window;
    a = b.document;
    var c = b.innerWidth;
    b = b.innerHeight;
    if (!c) {
      var d = a.documentElement;
      d && ((c = d.clientWidth), (b = d.clientHeight));
      c || ((c = a.body.clientWidth), (b = a.body.clientHeight));
    }
    return { Oe: c, de: b };
  }
  function Ph(a) {
    return a ? a.ownerDocument || a.document : window.document;
  }
  function Wh(a) {
    return a ? ((a = Ph(a)), a.defaultView || a.parentWindow) : window;
  }
  function Xh() {
    return Kh ? "opacity" : "filter";
  }
  function Yh(a) {
    return Kh ? a + "" : "alpha(opacity=" + Math.floor(100 * a) + ")";
  }
  function Zh() {
    this.o = 507;
    $h(this);
  }
  y(Zh, ih);
  Zh.prototype.g = function () {
    return this.i;
  };
  function ai(a, b, c, d) {
    $h(a, c, d);
    Bb(a.l, dd(hd, b));
  }
  function $h(a, b, c) {
    a.i = P("sbfl_a");
    a.l = P("sbfl_b");
    a.l.onclick = function () {
      c && c.openReportForm && c.openReportForm(b);
    };
    a.i.appendChild(a.l);
  }
  var bi = [30, 35, 33, 41],
    ci = [39, 10, 21];
  function di(a, b) {
    jh.call(this, 507);
    this.m = a;
    this.g = b;
  }
  y(di, jh);
  di.prototype.P = function (a) {
    this.i = a.get(128);
  };
  di.prototype.sa = function (a, b) {
    b.addRule(
      ".sbfl_a",
      "font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0"
    );
    b.addRule(".sbsb_c[dir=ltr] .sbfl_a", "text-align:right");
    b.addRule(".sbsb_c[dir=rtl] .sbfl_a", "text-align:left");
    b.addRule(".sbfl_a:hover", "color:#333;cursor:pointer");
    b.addRule(".sbfl_b", "background:rgba(255,255,255,.9)");
  };
  di.prototype.Ib = function () {
    return new Zh();
  };
  function ei(a) {
    return a.map(function (b) {
      return { label: b.g };
    });
  }
  di.prototype.Bb = function (a, b) {
    a = pb(
      this.i.m,
      function (c) {
        a: if (0 <= bi.indexOf(c.getType())) c = !1;
        else {
          c = c.i || [];
          for (var d = w(ci), e = d.next(); !e.done; e = d.next())
            if (0 <= c.indexOf(e.value)) {
              c = !1;
              break a;
            }
          c = !0;
        }
        return c;
      },
      this
    );
    0 < a.length
      ? (ai(b, this.m, ei(a), this.g), (b.g().style.display = ""))
      : (b.g().style.display = "none");
  };
  var Uc = ha([
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>',
    ]),
    fi = ha(["#ps"]);
  function gi(a, b, c, d, e, f, g) {
    this.o = 35;
    this.X = b;
    this.W = c;
    this.H = d;
    this.D = e;
    this.J = f;
    this.Y = g;
    this.B = !0;
    this.A = !1;
    this.i = P("sbpqs_d");
    this.u = P();
    this.K = O("span", "sbpqs_a");
    this.J &&
      ((this.l = O("a")),
      mb(this.l, eb(fi)),
      (this.l.className = "sbsb_i"),
      (this.I = P("fr sbpqs_b")),
      this.u.appendChild(this.I),
      this.I.appendChild(this.l),
      (this.m = P("sbpqs_c")),
      Bb(this.m, dd(hd, this.Y)),
      Gh(this.m, "alert"));
    this.u.appendChild(this.K);
    this.i.appendChild(this.u);
    this.m && this.i.appendChild(this.m);
  }
  y(gi, ih);
  gi.prototype.g = function () {
    return this.i;
  };
  gi.prototype.s = function () {
    return this.B;
  };
  function hi(a, b, c, d, e) {
    a.A = !1;
    a.B = !0;
    a.ca = c;
    a.F = d;
    a.u.style.display = "";
    Bb(a.K, dd(hd, b));
    a.J &&
      ((a.m.style.display = "none"),
      (b = Tc()),
      (a.l.textContent = ""),
      a.l.appendChild(b),
      (a.l.onclick = function (f) {
        ii(a, f);
      }),
      (a.l.title = e));
  }
  function ii(a, b) {
    a.A = !0;
    ji(a.X, a.ca, function () {
      a.A &&
        (ki(a.W),
        (a.i.onmouseover = a.i.onmouseout = a.i.onclick = null),
        (a.u.style.display = "none"),
        (a.m.style.display = ""),
        a.D.i == a.F && li(a.H),
        a.D.g == a.F && (mi(a.D), ni(a.H)),
        (a.B = !1));
    });
    Th(b);
  }
  function oi() {
    jh.call(this, 35);
  }
  y(oi, jh);
  m = oi.prototype;
  m.sa = function (a, b) {
    b.addRule(".sbpqs_a", "color:#52188c");
    b.addRule(".sbdd_a[dir=ltr] .sbpqs_a", "padding-right:8px");
    b.addRule(".sbdd_a[dir=rtl] .sbpqs_a", "padding-left:8px");
    b.addRule(".sbpqs_c", "color:#666;line-height:22px");
  };
  m.P = function (a) {
    this.g = a.get(123);
    this.i = a.get(118);
    this.m = a.get(189);
    this.u = a.get(127);
    this.B = a.get(128);
  };
  m.ga = function (a) {
    this.R(a);
  };
  m.R = function (a) {
    this.A = a.vd;
    this.s = a.qd;
    this.o = a.pd;
  };
  m.Ib = function () {
    return new gi(this.u, this.m, this.g, this.i, this.B, this.A, this.o);
  };
  m.Bb = function (a, b) {
    hi(b, a.getHtml(), a.g, a.l(), this.s);
  };
  m.Ab = function (a, b, c) {
    pi(c, b.g, 1);
  };
  function qi(a, b, c, d, e, f, g, h) {
    this.o = 35;
    this.X = b;
    this.W = c;
    this.H = d;
    this.D = e;
    this.J = g;
    this.Y = h;
    this.B = !0;
    this.A = !1;
    this.l = P("sbpqs_d");
    this.m = P();
    this.K = O("span", "sbpqs_a");
    this.J &&
      ((this.u = O("a")),
      mb(this.u, "#ps"),
      (this.u.className = "sbsb_i"),
      (this.I = P("fr sbpqs_b")),
      this.m.appendChild(this.I),
      this.I.appendChild(this.u),
      (this.i = P("sbpqs_c")),
      Bb(this.i, dd(hd, this.Y)),
      Gh(this.i, "alert"));
    this.m.appendChild(this.K);
    this.l.appendChild(this.m);
    this.i && this.l.appendChild(this.i);
  }
  y(qi, ih);
  qi.prototype.g = function () {
    return this.l;
  };
  qi.prototype.s = function () {
    return this.B;
  };
  qi.prototype.ea = function (a) {
    this.A = !0;
    ji(this.X, this.ca, F(this.ma, this));
    return Th(a);
  };
  qi.prototype.ma = function () {
    this.A &&
      (ki(this.W),
      (this.l.onmouseover = this.l.onmouseout = this.l.onclick = null),
      (this.m.style.display = "none"),
      (this.i.style.display = ""),
      this.D.i == this.F && li(this.H),
      this.D.g == this.F && (mi(this.D), ni(this.H)),
      (this.B = !1));
  };
  function ri() {
    jh.call(this, 35);
  }
  y(ri, jh);
  m = ri.prototype;
  m.sa = function (a, b) {
    b.addRule(".sbpqs_a", "color:#52188c");
    b.addRule(".sbdd_a[dir=ltr] .sbpqs_a", "padding-right:8px");
    b.addRule(".sbdd_a[dir=rtl] .sbpqs_a", "padding-left:8px");
    b.addRule(".sbdd_a[dir=ltr] .sbpqs_b", "padding-right:3px");
    b.addRule(".sbdd_a[dir=rtl] .sbpqs_b", "padding-left:3px");
    b.addRule(".sbpqs_c", "color:#666;line-height:22px");
  };
  m.P = function (a) {
    this.g = a.get(123);
    this.i = a.get(118);
    this.m = a.get(189);
    this.u = a.get(127);
    this.B = a.get(128);
  };
  m.ga = function (a) {
    this.R(a);
  };
  m.R = function (a) {
    this.A = a.vd;
    this.s = a.qd;
    this.o = a.pd;
  };
  m.Ib = function (a) {
    return new qi(this.u, this.m, this.g, this.i, this.B, a, this.A, this.o);
  };
  m.Bb = function (a, b) {
    var c = a.getHtml(),
      d = a.g;
    a = a.l();
    var e = this.s;
    b.A = !1;
    b.B = !0;
    b.ca = d;
    b.F = a;
    b.m.style.display = "";
    Bb(b.K, dd(hd, c));
    b.J &&
      ((b.i.style.display = "none"),
      Bb(b.u, dd(hd, e)),
      (b.u.onclick = F(b.ea, b)));
  };
  m.Ab = function (a, b, c) {
    pi(c, b.g, 1);
  };
  function si() {
    this.l = 134;
    this.i = {};
  }
  y(si, N);
  m = si.prototype;
  m.P = function (a) {
    this.m = a.i.getId();
  };
  m.ga = function () {
    "google" in window || (window.google = {});
    "sbox" in window.google || (window.google.sbox = {});
    window.google.sbox["d" + this.m] = F(this.Te, this);
  };
  m.R = function (a) {
    this.A = ng("//" + (a.rd || "clients1." + a.ic) + "/complete/deleteitems");
    this.s = a.zd;
    this.o = a.authuser;
    this.u = a.clientName;
  };
  m.Ga = function () {
    ti(this);
  };
  function ti(a) {
    a.g && (ui.removeChild(a.g), (a.g = null));
  }
  m.Te = function (a) {
    ti(this);
    a = a[0];
    var b = this.i[a];
    b && (delete this.i[a], b());
  };
  var ui = yg;
  function vi() {
    this.l = 189;
  }
  y(vi, N);
  vi.prototype.P = function (a) {
    this.g = a.get(134);
    this.i = a.get(123);
    this.s = a.get(118);
    this.A = a.get(553);
  };
  vi.prototype.ga = function (a) {
    this.o = a.uf;
  };
  vi.prototype.R = function (a) {
    this.m = a.zd;
    this.u = !(!this.g || !this.m);
    this.o &&
      ((a = this.s.g ? 3e3 : 0),
      window.setTimeout(F(this.B, this), a),
      (this.o = !1));
  };
  function ji(a, b, c) {
    a = a.g;
    a.i[b] = c;
    c = new Map();
    "1" === Fg(window.location.search).ssl_dbg && c.set("ssl_dbg", "1");
    c.set("delq", b);
    c.set("client", a.u);
    c.set("callback", "google.sbox.d" + a.m);
    b = a.A;
    c.set("tok", a.s);
    a.o && c.set("authuser", a.o);
    a.g = O("script");
    b = kd(b, c);
    Db(a.g, b);
    ui.appendChild(a.g);
  }
  vi.prototype.B = function () {
    var a = wi(this.A, "", void 0, void 0, !0);
    xi(this.i, a);
    yi(this.i);
  };
  function zi() {
    this.l = 156;
  }
  y(zi, N);
  zi.prototype.P = function (a) {
    this.m = a.get(189);
  };
  zi.prototype.i = function (a) {
    var b = this.m,
      c = {};
    b.u && (c.tok = b.m);
    "1" === Fg(window.location.search).ssl_dbg && (c.ssl_dbg = "1");
    for (var d in c) Tg(a, d, c[d]);
    return 1;
  };
  zi.prototype.g = function () {
    return 12;
  };
  function Ai(a) {
    this.l = 156;
    this.o = a;
    this.m = null;
  }
  I(Ai, N);
  Ai.prototype.i = function (a) {
    var b = 1,
      c = a.D;
    a = Gg(a.g);
    var d = "focus" == c || "input" == c;
    c =
      this.o.SEARCHBOX_INPUT_AUTOFOCUS &&
      "mousedown" == c &&
      this.m &&
      !this.m.isVisible();
    a || (!d && !c) || (b = 2);
    return b;
  };
  Ai.prototype.g = function () {
    return 2;
  };
  Ai.prototype.P = function (a) {
    this.m = a.get(128);
  };
  function Bi() {
    this.l = 157;
  }
  y(Bi, N);
  function Ci() {
    this.l = 156;
  }
  y(Ci, N);
  Ci.prototype.i = function (a) {
    var b = Fg(Fb(window.location.href));
    b.v && Tg(a, "video_id", b.v, !0);
    return 1;
  };
  Ci.prototype.g = function () {
    return 24;
  };
  function Di(a, b, c) {
    this.l = 598;
    this.I = b;
    this.A = c;
    this.s = "";
    this.i = a;
    this.u = !1;
  }
  y(Di, N);
  Di.prototype.P = function (a) {
    this.F = a.get(553);
    this.g = a.get(128);
    this.D = a.get(118);
    this.B = a.get(150);
  };
  Di.prototype.ga = function (a) {
    this.m = a.od;
    this.H = a.rf;
  };
  function Ei(a, b) {
    a.s = b;
    a.F.ud(a.s);
  }
  function Fi(a) {
    if (!a.I || a.g.isVisible()) return !1;
    var b = a.D.g;
    if (!b || 0 == b.length) return !1;
    if (b != a.m)
      return "always" == a.A && a.g && a.g.m && 0 < a.g.m.length && Gi(a.g), !1;
    if (a.i && a.i.getRefinementsTuple) {
      var c = a.i.getRefinementsTuple();
      if (c) {
        var d = c[0];
        "ClearBySearchbox" == d
          ? (a.o = [])
          : "FromSearchResponse" == d && a.u && ((a.o = c[1]), (a.u = !1));
      }
    }
    if (!a.o || 0 >= a.o.length)
      return a.g && a.g.m && 0 < a.g.m.length
        ? (Gi(a.g), !1)
        : "always" == a.A || "fallback" == a.A;
    c = [];
    for (var e = (d = 0); e < a.o.length && !(c.length >= a.H); ++e) {
      var f = a.o[e];
      f &&
        0 < f.length &&
        c.push(new og(a.B.bold(b, f), f, d++, 0, [71], null));
    }
    0 < c.length && Hi(a.g, c, !1);
    return !1;
  }
  function Ii() {
    this.l = 156;
  }
  y(Ii, N);
  Ii.prototype.P = function (a) {
    this.m = a.get(598);
  };
  Ii.prototype.i = function (a) {
    var b = this.m,
      c;
    a: {
      if (b.i && b.i.getPreviousQuery && (c = b.i.getPreviousQuery())) break a;
      c = null;
    }
    var d;
    d = (d = Fg(Fb(window.location.href)))
      ? (d = d.search_query || d.q) && d == b.m
      : !1;
    c && c != b.m
      ? ((b.u = !0), (b.m = c), Ei(b, c))
      : d || "" == b.s
      ? d && "" == b.s && Ei(b, b.m)
      : Ei(b, "");
    return ("mousedown" != a.D && "focus" != a.D) || !Fi(this.m) ? 1 : 2;
  };
  Ii.prototype.g = function () {
    return 46;
  };
  function Ji() {
    this.l = 149;
    this.i = yg;
    this.g = {};
  }
  y(Ji, N);
  m = Ji.prototype;
  m.P = function (a) {
    this.D = a.get(127);
    this.u = a.i.getId();
  };
  m.ga = function () {
    "google" in window || (window.google = {});
    "sbox" in window.google || (window.google.sbox = {});
  };
  m.R = function (a) {
    this.config_ = a;
    a.connectionType == this.qb() &&
      ((a = this.D.i),
      (this.s = a.protocol),
      (this.o = a.host),
      (this.B = a.Ac),
      (this.A = a.He),
      (this.F = "https:" == document.location.protocol),
      Li(this, F(this.Ue, this)),
      (new Image().src = this.s + this.o + "/generate_204"));
  };
  m.Ga = function () {
    Li(this, null);
    Mi(this);
  };
  m.Fe = function (a, b, c, d) {
    c = a.getId();
    var e = a.g;
    this.config_.Od || Mi(this);
    b =
      this.s +
      this.o +
      this.B +
      "?" +
      (this.A ? this.A + "&" : "") +
      (b ? b + "&" : "");
    a = [];
    Dg("q", e, a, !0);
    this.config_.Ne || Dg("callback", "google.sbox.p" + this.u, a);
    if (this.F) {
      e = "";
      for (var f = 4 + Math.floor(32 * Math.random()), g, h = 0; h < f; ++h)
        (g =
          0.3 > Math.random()
            ? 48 + Math.floor(10 * Math.random())
            : (0.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random())),
          (e += String.fromCharCode(g));
      Dg("gs_gbg", e, a);
    }
    e = O("script");
    this.config_.pg && e.setAttribute("nonce", this.config_.pg);
    Db(e, ng(b + a.join("&")));
    e.charset = "utf-8";
    this.g[c] = e;
    this.m = d;
    this.i.appendChild(e);
    return !0;
  };
  m.qb = function () {
    return 0;
  };
  m.Tc = function () {
    return 0;
  };
  m.Pc = function (a) {
    var b = this.g[a];
    b && (this.i.removeChild(b), delete this.g[a]);
  };
  function Mi(a) {
    for (var b in a.g) a.i.removeChild(a.g[b]);
    a.g = {};
    a.m = null;
  }
  m.Ue = function (a) {
    this.m && this.m(a);
  };
  function Li(a, b) {
    b || (b = Lg);
    var c = window.google;
    a.config_.Ne ? (c.ac.h = b) : (c.sbox["p" + a.u] = b);
  }
  function Ni() {
    this.l = 115;
    this.o = {};
  }
  y(Ni, N);
  m = Ni.prototype;
  m.P = function (a) {
    this.m = a.get(116);
    if ((a = ah(a, 154))) for (var b, c = 0; (b = a[c++]); ) this.o[Oi] = b;
  };
  m.R = function () {
    this.g = !1;
  };
  m.Ga = function () {
    Pi(this);
  };
  m.isVisible = function () {
    return this.g;
  };
  m.getHeight = function () {
    return this.g ? this.m.getHeight() : 0;
  };
  function Pi(a) {
    if (a.g) {
      var b = a.m;
      b.B = 0;
      Qi(b.o.m, !1);
      Ri(b.K, !1);
      Ri(b.i, !1);
      Si(b, b.W);
      Ti(b.F, 9);
      a.g = !1;
    }
  }
  var Ui = { ee: "left", lg: !0, pb: null, marginWidth: 0 };
  function Vi() {
    this.l = 118;
  }
  y(Vi, N);
  m = Vi.prototype;
  m.P = function (a) {
    this.m = a.get(119);
    this.A = a.get(130);
    this.X = a.get(145);
    this.s = a.get(117);
    this.I = a.get(123);
    this.B = a.get(374);
    this.F = a.get(121);
    this.Y = a.get(553);
    this.i = a.get(128);
    this.J = a.get(139);
    this.ca = a.get(173);
    this.ea = ah(a, 160);
  };
  m.ga = function (a) {
    this.config_ = a;
    this.g = this.o = this.m.g.value || "";
  };
  m.R = function (a) {
    this.config_ = a;
    this.D = this.K = !1;
    Wi(this);
  };
  function Xi(a) {
    var b = {};
    Ti(a.s, 11, b);
    !b.cancel &&
      a.config_.Wf &&
      nd(function () {
        var c = a.i;
        yi(c.D);
        Yi(c);
      });
  }
  function Zi(a, b) {
    if (
      0 == a.config_.Dc ||
      2 == a.config_.Dc ||
      (3 == a.config_.Dc && !a.o && !b)
    )
      return !1;
    a: {
      if (
        $i(a.i) &&
        (null != a.i.i
          ? (b = aj(a.i))
          : ((b = a.i), (b = $i(b) ? b.m[0] : null)),
        b.o)
      )
        break a;
      b = null;
    }
    var c;
    if ((c = b)) {
      if ((c = b = b.g))
        (c = a.o),
          (c = !(c || b ? c && b && c.toLowerCase() == b.toLowerCase() : 1));
      c
        ? ((a.o = a.g),
          Kg(b, a.g, !0) && (b = a.g + b.substr(a.g.length)),
          bj(a, b, Cg(b.length), "", !0),
          cj(a, b, !0),
          (c = !0))
        : (c = !1);
    }
    return c ? (a.B.add(8), !0) : !1;
  }
  function bj(a, b, c, d, e) {
    a.config_.hf && !a.i.isVisible() && "mousedown" == d && dj(a.i, c, d);
    var f = !1,
      g = !1;
    if (b != a.g || "onremovechip" == d)
      Kg(d, "key") ? a.B.add(1) : "paste" == d && a.B.add(2),
        (f = !0),
        ej(a, b),
        Ti(a.s, 1, { Xb: d, pb: a.u }),
        (g = G()),
        a.H || (a.H = g),
        (a.W = g),
        Gg(b) && (e = !0),
        (g = !0);
    b = wi(a.Y, b, c, d);
    switch (b.H) {
      case 3:
        b.o = !0;
      case 2:
        e = !0;
        break;
      case 4:
        e = !1;
    }
    e
      ? (f &&
          ((f = a.i),
          f.s &&
            !f.A &&
            (f.A = window.setTimeout(F(f.clear, f), f.config_.Xf))),
        a.K && Tg(b, "gs_is", 1),
        xi(a.I, b))
      : g && (a.i.clear(), yi(a.I));
    Ti(a.s, 2, { Xb: d });
  }
  function ni(a) {
    a = a.m;
    if (!a.u)
      try {
        a.g.focus(), (a.u = !0), fj(a);
      } catch (b) {}
  }
  function gj(a, b) {
    ej(a, b);
    hj(a.m);
    Ti(a.s, 4, { pb: a.u, input: b });
  }
  function li(a) {
    a.g != a.o && ej(a, a.o);
    Ti(a.s, 5, { input: a.o, Ug: a.i.m, pb: a.u });
    hj(a.m);
  }
  m.getHeight = function () {
    return this.m.getHeight();
  };
  function ij(a) {
    if (a.ca) {
      if (a.config_.Wc) return !0;
      for (var b = 0, c; (c = a.ea[b++]); ) if (c.isEnabled()) return !0;
    }
    return !1;
  }
  m.clear = function () {
    this.g &&
      (ej(this, ""),
      this.m.clear(),
      Ti(this.s, 1),
      Ti(this.s, 16),
      this.i.clear());
  };
  function jj(a, b) {
    var c = a.m.s.Ob();
    a.u == b
      ? $i(a.i) &&
        c == a.g.length &&
        (null != a.i.i
          ? a.config_.mc && !a.config_.Na && pi(a.F, aj(a.i).g, 6)
          : a.config_.le && Zi(a, !0))
      : a.A && 0 == c && a.A.g();
  }
  function kj(a) {
    var b = a.m.s.Ob();
    return a.config_.Na && $i(a.i) && null != a.i.i && b === a.g.length;
  }
  function cj(a, b, c) {
    a.g = b || "";
    Wi(a);
    hj(a.m);
    c || Ti(a.s, 4, { pb: a.u, input: a.g });
  }
  function Wi(a) {
    var b = lj(a.X, a.g);
    if (b != a.u) {
      var c = a.m;
      c.o && (c.o.dir = b);
      c.g.dir = b;
      c.B && (c.B.dir = b);
      if (c.Cb) {
        c = c.g;
        var d = 0,
          e = c.style;
        "INPUT" != c.nodeName && (d += 1);
        e.left = e.right = "";
        e["rtl" == b ? "right" : "left"] = d + "px";
      }
      a.u = b;
    }
  }
  function ej(a, b) {
    a.g = a.o = b || "";
    Wi(a);
  }
  function mj() {
    this.l = 128;
  }
  y(mj, N);
  m = mj.prototype;
  m.P = function (a) {
    this.o = a.get(129);
    this.K = a.get(145);
    this.I = a.get(115);
    this.D = a.get(123);
    this.u = a.get(118);
    this.ca = a.get(147);
    this.W = ah(a, 153);
    this.Y = a.get(553);
    this.H = a.get(184);
    this.ea = a.get(157);
  };
  m.ga = function () {
    this.W.sort(Og);
  };
  m.R = function (a) {
    this.config_ = a;
    this.i = this.g = null;
    this.s = this.F = !1;
    this.X = !0;
    this.B = "";
    this.J = 0;
  };
  m.Ga = function () {
    this.A && (window.clearTimeout(this.A), (this.A = null));
    this.m = null;
    Yi(this);
  };
  function Hi(a, b, c) {
    var d = a.H && a.H.i(b);
    a.clear();
    a.m = b;
    var e = $i(a) ? b[0].g : a.u.o;
    a: {
      var f = e;
      if (a.K.g) {
        for (var g = !1, h = !1, l = 0, k; l < f.length; ++l)
          if (
            ((k = f.charAt(l)),
            !nj.test(k) && (oj.test(k) ? (h = !0) : (g = !0), h && g))
          ) {
            f = !0;
            break a;
          }
        f = !1;
      } else f = !0;
    }
    f && (e = a.u.o);
    a.B = lj(a.K, e);
    if (a.config_.Fg && $i(a) && c && !Eh) {
      a.F = !0;
      c = a.o;
      if (c.o) {
        c.F = a.B;
        pj(c);
        e = !1;
        for (f = 0; (g = b[f++]); ) qj(c, g) && (e = !0);
        c = e;
      } else c = !1;
      e = b[0].m.g.a || "";
      e = Ig(e);
      b = a.ca;
      f = 0;
      e &&
        (b.g || rj(b),
        sj(b),
        e in b.m
          ? (f = b.m[e])
          : (Qh(b.g, Hg(e)), (b.m[e] = f = b.g.offsetWidth), Qh(b.g, "")));
      a.J = f;
    } else {
      a.F = !1;
      b = a.o;
      if (a.F || (!a.config_.Qg && !$i(a))) c = [];
      else {
        c = [];
        e = [];
        for (f = 0; a.W[f++] && !hh(a.m, e); );
        (f = e ? e.length : 0) && (f -= tj(e, c, 0));
        for (g = 0; g < a.m.length; ++g) c.push(a.m[g]);
        f && (f -= tj(e, c, 1));
        a.config_.Tf && c.push(1);
        f && (f -= tj(e, c, 2));
        f && tj(e, c, 3);
        a.config_.be && c.push(2);
        a.ea && 1 < c.length && 5 == c[0].getType() && c.splice(1, 0, 3);
      }
      if (b.o) {
        b.F = a.B;
        pj(b);
        e = !1;
        for (f = 0; (g = c[f++]); )
          if (1 == g)
            (g = b),
              g.B
                ? (g.B.style.display = "")
                : ((h = O("li")),
                  (l = h.style),
                  (l.position = "relative"),
                  (l.textAlign = "center"),
                  (l.whiteSpace = "nowrap"),
                  (h.dir = g.H),
                  (g.i = P()),
                  (g.i.className = "sbsb_g"),
                  g.config_.be && (g.i.style.paddingBottom = "1px"),
                  uj(g, g.config_.Ng, g.i, 13),
                  g.config_.Sf
                    ? uj(g, g.config_.Rd, g.i, 8)
                    : g.config_.Uf && uj(g, g.config_.Og, g.i, 14),
                  h.appendChild(g.i),
                  (h.onmousedown = F(g.nd, g)),
                  (h.className = g.config_.Cc),
                  (g.B = h)),
              g.g.appendChild(g.B);
          else if (2 == g)
            if (((g = b), g.A)) g.A.style.display = "";
            else {
              h = P("sbsb_j " + g.config_.Cc);
              l = O("a");
              l.id = "sbsb_f";
              mb(
                l,
                "http://www.google.com/support/websearch/bin/answer.py?hl=" +
                  g.config_.ad +
                  "&answer=106230"
              );
              var n = g.config_.qg;
              k = { Gg: !0 };
              k = void 0 === k ? {} : k;
              n instanceof yb
                ? (k = n)
                : ((n = String(n)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;")),
                  k.oi && (n = n.replace(/(^|[\r\n\t ]) /g, "$1&#160;")),
                  k.Gg && (n = n.replace(/(\r\n|\n|\r)/g, "<br>")),
                  k.ri &&
                    (n = n.replace(
                      /(\t+)/g,
                      '<span style="white-space:pre">$1</span>'
                    )),
                  (k = Ab(n)));
              Bb(l, k);
              h.appendChild(l);
              h.onmousedown = F(g.nd, g);
              g.A = h;
              g.o.appendChild(g.A);
            }
          else
            3 == g
              ? ((g = b),
                (h = g.ca.pop()),
                h ||
                  ((h = O("li")),
                  Hh(h, "hidden", !0),
                  (h.l = !0),
                  (l = O("div", "sbsb_e")),
                  h.appendChild(l)),
                g.g.appendChild(h))
              : qj(b, g) && (e = !0);
        c = e;
      } else c = !1;
      a.J = 0;
    }
    d && ((a.i = a.H.l()), vj(a, a.H.g()));
    c ? Gi(a) : a.clear();
  }
  function vj(a, b) {
    if (a.g != b) {
      var c = a.g;
      a.g = b;
      wj(a, c);
    }
  }
  m.De = function () {
    if ($i(this))
      if (this.s) {
        var a = this.g;
        this.g == this.m.length - 1
          ? (this.i = this.g = null)
          : null == this.g
          ? (this.g = 0)
          : ++this.g;
        this.i = this.g;
        xj(this, a, F(this.De, this));
      } else Gi(this);
  };
  m.Ee = function () {
    if ($i(this))
      if (this.s) {
        var a = this.g;
        this.m && 0 != this.g
          ? null == this.g
            ? (this.g = this.m.length - 1)
            : --this.g
          : (this.i = this.g = null);
        this.i = this.g;
        xj(this, a, F(this.Ee, this));
      } else Gi(this);
  };
  m.isVisible = function () {
    return this.s;
  };
  m.isEnabled = function () {
    return this.X;
  };
  function aj(a) {
    return null != a.i ? a.m[a.i] : null;
  }
  function $i(a) {
    return !(!a.m || !a.m.length);
  }
  function Gi(a) {
    if (!a.s) {
      a: {
        var b = a.I,
          c = Oi;
        if (c in b.o) {
          if (b.i) {
            if (c == Oi) break a;
            Pi(b);
            b.i.i.s = !1;
          }
          b.i = b.o[c];
          c = b.m;
          b = b.i;
          b != c.u &&
            ((c.u = b),
            (b = b.g.o),
            c.I ? b != c.I && c.s.replaceChild(b, c.I) : c.s.appendChild(b),
            (c.I = b));
        }
      }
      c = a.I;
      if (!c.g) {
        b = c.m;
        var d = Pg(Ui);
        if (c.i) {
          var e = c.i.i;
          d.pb = e.B;
          d.marginWidth = e.J;
          var f = e.config_.Vg;
          f || (f = "rtl" == e.B ? "right" : "left");
          d.ee = f;
        }
        Si(b, d.pb || b.W);
        e = d.marginWidth;
        b.X != e &&
          ((f = b.H.style),
          e ? ((f.width = e + "px"), (f.height = "1px")) : (f.height = ""),
          (b.X = e));
        b.ea = d.lg;
        b.ca = d.ee;
        Qi(b.o.m, !0);
        Ri(b.K, !0);
        Ri(b.i, !0);
        Ti(b.F, 14);
        b.Fd();
        c.g = !0;
      }
      a.s = !0;
    }
  }
  function Yi(a) {
    a.s &&
      (a.A && (window.clearTimeout(a.A), (a.A = null)), Pi(a.I), (a.s = !1));
  }
  m.clear = function () {
    Yi(this);
    this.m = null;
    this.F = !1;
    null != this.g && yj(this.o, this.g);
    this.i = this.g = null;
    this.o.clear();
  };
  function mi(a) {
    null != a.g && yj(a.o, a.g);
    a.i = a.g = null;
  }
  function dj(a, b, c) {
    if ($i(a)) Gi(a);
    else {
      var d = a.u.o;
      d && ((b = wi(a.Y, d, b || a.u.m.s, c)), xi(a.D, b));
    }
  }
  function tj(a, b, c) {
    for (var d = 0, e = 0, f; e < a.length; ++e)
      (f = a[e]) &&
        f.position == c &&
        (3 == c ? f.ka && f.ka(b) && ++d : (b.push(f), ++d));
    return d;
  }
  function xj(a, b, c) {
    var d;
    (d = null == a.g) || (d = (d = a.o.m[a.g]) ? d.s() : !1);
    d
      ? (wj(a, b),
        (b = a.o),
        (c = a.g),
        (c = void 0 === c ? null : c),
        null === c
          ? b.u.removeAttribute("aria-activedescendant")
          : (c = b.m[c]) &&
            c.s() &&
            ((c = c.g()),
            b.config_.Na && (c = c.querySelector('[role="gridcell"]')),
            c && Jh(b.u, c)),
        null == a.g ? li(a.u) : ((b = a.m[a.g]), b.getType(), cj(a.u, b.g)))
      : (yj(a.o, b), c());
  }
  function wj(a, b) {
    null != b && yj(a.o, b);
    null != a.g &&
      ((b = a.o), (a = b.m[a.g]) && a.s() && zj(a.g().parentNode, b.X));
  }
  var Oi = Ag++;
  function Aj() {
    this.l = 154;
  }
  y(Aj, N);
  Aj.prototype.P = function (a) {
    this.i = a.get(128);
    this.g = a.get(129);
  };
  function Bj() {
    this.l = 145;
    this.g = oj.test("x");
  }
  y(Bj, N);
  Bj.prototype.sa = function (a) {
    this.i = a.nc();
  };
  function lj(a, b) {
    var c = a.i;
    a.g && (oj.test(b) ? (c = "ltr") : nj.test(b) || (c = "rtl"));
    return c;
  }
  var nj = RegExp(
      "^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"
    ),
    oj = RegExp(
      "^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])"
    );
  function Cj() {
    this.l = 117;
    this.i = [];
    this.g = { Se: 1 };
  }
  y(Cj, N);
  function Dj(a, b, c, d, e, f) {
    var g = Ej(a, b);
    g || ((g = {}), a.i.push({ element: b, Of: g }));
    var h = g[c];
    h ||
      ((h = g[c] = []),
      (a = Fj(a, c, b.Se ? window : Wh(b), h)),
      "string" !== typeof c
        ? (b[c] = a)
        : b.addEventListener
        ? b.addEventListener(c, a, !1)
        : (b["on" + c] = a));
    h.push({ kg: !!f, dd: !1, priority: e || 0, process: d });
    h.sort(Gj);
    d.qf = c;
  }
  function Hj(a, b, c) {
    if ((a = Ej(a, b)))
      if ((a = a[c.qf]))
        for (var d = 0; (b = a[d++]); )
          if (b.process == c) {
            b.dd = !0;
            break;
          }
  }
  function Ti(a, b, c) {
    c = c || {};
    (a = a.g[b]) && a(c, c.Xb);
  }
  Cj.prototype.qa = function (a, b, c) {
    a.addEventListener
      ? a.addEventListener(b, c, !1)
      : a.attachEvent("on" + b, c);
  };
  function Fj(a, b, c, d) {
    return F(function (e, f) {
      if (d.length) {
        if (!e) {
          e = {};
          var g = c.event;
          g && (g.keyCode && (e.keyCode = g.keyCode), (e.jg = !0));
        }
        e.Xb = f || b;
        f = e;
        for (var h, l, k = 0; (g = d[k++]); )
          g.dd ? (l = !0) : h || (g.kg ? Ij(g, f) : (h = g.process(f)));
        if (l) for (l = 0; (h = d[l]); ) h.dd ? d.splice(l, 1) : ++l;
        if (e.sc)
          return (
            delete e.sc, e.jg && (e = c.event || e), Th(e), (e.returnValue = !1)
          );
      }
    }, a);
  }
  function Ej(a, b) {
    for (var c, d = 0; d < a.i.length; ++d)
      if (((c = a.i[d]), c.element == b)) return c.Of;
    return null;
  }
  function Ij(a, b) {
    nd(function () {
      a.process(b);
    });
  }
  function Gj(a, b) {
    return b.priority - a.priority;
  }
  function Jj() {
    this.l = 494;
    this.g = {};
    this.o = this.u = 0;
    this.i = -1;
    this.m = 0;
    this.s = {};
  }
  y(Jj, N);
  Jj.prototype.R = function () {
    this.reset();
  };
  Jj.prototype.reset = function () {
    this.g = {};
    this.o = this.u = 0;
    this.i = -1;
    this.m = 0;
    this.s = {};
  };
  function Kj() {
    this.l = 374;
  }
  y(Kj, N);
  Kj.prototype.R = function () {
    this.reset();
  };
  Kj.prototype.add = function (a) {
    this.g || (this.g = {});
    this.g[a] = !0;
  };
  Kj.prototype.reset = function () {
    this.g = {};
  };
  function Lj() {
    this.l = 120;
    this.D = -1;
  }
  y(Lj, N);
  Lj.prototype.P = function (a) {
    this.H = a.get(191);
    this.g = a.get(123);
    this.m = a.get(118);
    this.A = a.get(374);
    this.i = a.get(494);
    this.B = a.get(126);
    this.o = a.get(128);
    this.F = ah(a, 311);
  };
  Lj.prototype.ga = function (a) {
    this.u = a.sg;
  };
  Lj.prototype.R = function (a) {
    this.config_ = a;
    this.reset();
  };
  function Mj(a, b) {
    var c = a.m.o;
    var d = [];
    d[27] = 64;
    d[0] = Nj(a.config_.clientName);
    d[28] = Nj(a.config_.requestIdentifier);
    d[1] = void 0 == b ? "" : b + "";
    b = a.A;
    var e = [];
    for (f in b.g) e.push(parseInt(f, 10));
    d[26] = e.join("j");
    var f = "";
    null != a.o.i
      ? (f = a.o.i + "")
      : ((b = a.B.i), (10 <= b.s || 3 <= b.u.Tc()) && (f = "o"));
    d[2] = f;
    f = "";
    if ((b = a.o.m)) {
      for (var g = (e = 0), h; (h = b[g++]); ) {
        h = Qg(h.getType(), h.i || []);
        if (h != l) {
          1 < e && (f += "l" + e);
          f += (l ? "j" : "") + h;
          e = 0;
          var l = h;
        }
        ++e;
      }
      1 < e && (f += "l" + e);
    }
    d[3] = f;
    l = "";
    f = a.o.m;
    b = a.i.s;
    if (f)
      for (e = 0; (g = f[e++]); ) {
        var k = Qg(g.getType(), g.i || []);
        k in b && delete b[k];
      }
    if (b) for (k in b) l += (l ? "j" : "") + k;
    d[35] = l;
    k = a.i.i;
    d[33] = -1 < k ? String(k) : "";
    d[4] = Math.max(a.m.H - a.s, 0);
    d[5] = Math.max(a.m.W - a.s, 0);
    d[6] = a.D;
    d[7] = G() - a.s;
    d[18] = Math.max(a.m.ma - a.s, 0);
    d[8] = a.g.Db;
    l = a.g;
    l = (k = l.i) ? l.g.m : 0;
    d[25] = k
      ? "1" + (a.config_.lf ? "a" : "") + (a.config_.Md ? "c" : "")
      : "";
    d[10] = l;
    k = a.g;
    d[11] = k.i ? k.g.o : 0;
    d[12] = a.g.ma;
    f = a.g;
    k = f.ca;
    l = f.Y;
    f = f.ea;
    d[9] = k;
    d[22] = l;
    d[17] = f;
    d[13] = a.g.Cb;
    d[14] = a.g.H;
    d[15] = a.g.J;
    k = a.g;
    l = [];
    for (b = e = 0; b <= Oj; ++b)
      (f = k.I[b]),
        0 == f
          ? e++
          : ((e = 1 == e ? "0j" : 1 < e ? b + "-" : ""),
            l.push(e + f),
            (e = 0));
    d[16] = l.join("j");
    d[36] = a.g.K;
    k = 0;
    for (var n in a.i.g) k++;
    d[30] = k;
    d[31] = a.i.u;
    d[32] = a.i.o;
    d[19] = Nj(a.config_.xd);
    n = a.i;
    l = a.B.g;
    k = !1;
    l && (k = l.i.g.e || "");
    l = 0;
    k ? ((l |= 1), 1 < n.m && (l |= 2)) : 0 < n.m && (l |= 2);
    n = l;
    d[20] = 0 == n ? "" : n + "";
    for (n = 0; (k = a.F[n++]); )
      (l = k.l()), Pj[l] && (d[l] = void 0 == d[l] ? Nj(k.g()) : "");
    d = d.join(".").replace(Qj, "");
    if (a.H && a.u) {
      n = c + d;
      b: {
        k = a.u;
        l = [];
        if (k)
          for (e = b = f = 0; e < k.length; ++e) {
            g = k.charCodeAt(e);
            if (32 > g || 127 < g || !Rj[g - 32]) {
              k = [];
              break b;
            }
            f <<= 6;
            f |= Rj[g - 32] - 1;
            b += 6;
            8 <= b && (l.push((f >> (b - 8)) & 255), (b -= 8));
          }
        k = l;
      }
      f = k;
      k = {};
      k.chain = Array(4);
      k.buffer = Array(4);
      k.fh = Array(4);
      k.padding = Array(64);
      k.padding[0] = 128;
      for (l = 1; 64 > l; ++l) k.padding[l] = 0;
      Sj(k);
      l = Array(64);
      64 < f.length && (Sj(k), Tj(k, f), (f = Uj(k)));
      for (b = 0; b < f.length; ++b) l[b] = f[b] ^ 92;
      for (b = f.length; 64 > b; ++b) l[b] = 92;
      Sj(k);
      for (b = 0; 64 > b; ++b) k.buffer[b] = l[b] ^ 106;
      Vj(k, k.buffer);
      k.total = 64;
      Tj(k, Wj(n));
      n = Uj(k);
      Sj(k);
      Vj(k, l);
      k.total = 64;
      Tj(k, n);
      n = Uj(k);
      n = n.slice(0, 8);
      "string" === typeof n && (n = Wj(n));
      k = "";
      if (n) {
        l = n.length;
        for (e = b = f = 0; l--; )
          for (b <<= 8, b |= n[e++], f += 8; 6 <= f; )
            (k +=
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
                (b >> (f - 6)) & 63
              )),
              (f -= 6);
        f &&
          (k +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
              ((b << 8) >> (f + 8 - 6)) & 63
            ));
      }
      n = k;
    } else n = "";
    c = { oq: c, gs_l: d + "." + n };
    a.config_.mg && (c.q = a.m.g);
    return c;
  }
  Lj.prototype.reset = function () {
    this.s = G();
    ++this.D;
    var a = this.m;
    a.H = 0;
    a.W = 0;
    a.ma = 0;
    this.A.reset();
    a = this.g;
    if (a.i) {
      var b = a.g;
      b.m = 0;
      b.o = 0;
    }
    a.Db = 0;
    a.s = 0;
    a.ma = 0;
    a.ca = 0;
    a.Y = 0;
    a.ea = 0;
    a.Cb = 0;
    a.H = 0;
    a.J = 0;
    a.K = 0;
    a.I = [];
    for (b = 0; b <= Oj; ++b) a.I[b] = 0;
    for (a = 0; (b = this.F[a++]); ) b.reset();
    this.i.reset();
  };
  function Nj(a) {
    return a ? a.replace(Xj, "-") : "";
  }
  var Qj = /\.+$/,
    Xj = /\./g,
    Pj = Bg([23]);
  function Yj() {
    this.l = 121;
  }
  y(Yj, N);
  Yj.prototype.sa = function (a) {
    this.m = a.Vd();
  };
  Yj.prototype.P = function (a) {
    this.g = a.get(347);
    this.s = a.get(130);
    this.F = a.get(117);
    this.A = a.get(123);
    this.o = a.get(118);
    this.H = a.get(120);
    this.I = a.get(128);
    this.B = a.get(139);
    this.u = a.s;
    this.D = ah(a, 294);
  };
  Yj.prototype.R = function (a) {
    this.config_ = a;
  };
  function pi(a, b, c) {
    if (a.D) {
      for (var d = !1, e = 0, f; (f = a.D[e++]); ) 2 == f.g(b, c) && (d = !0);
      if (d) return;
    }
    if (Gg(b) || a.config_.lb || (a.s && a.s.lb())) {
      if (hg.test(c)) {
        if (a.m && !a.i) {
          d = a.m;
          b: {
            if ((e = d.getElementsByTagName("input")))
              for (var g = 0; (f = e[g++]); )
                if ("btnI" == f.name && "submit" != f.type.toLowerCase()) {
                  e = f;
                  break b;
                }
            e = null;
          }
          e
            ? (d = null)
            : ((e = O("input")),
              (e.type = "hidden"),
              (e.name = "btnI"),
              (e.value = "1"),
              d.appendChild(e),
              (d = e));
          a.i = d;
        }
      } else a.i && (a.m.removeChild(a.i), (a.i = null));
      a.g && a.config_.Qc && Zj(a.g, c);
      a.u.Dd(c);
      ak(a);
      Ti(a.F, 12, { query: b });
    }
  }
  Yj.prototype.redirect = function (a) {
    this.g && this.config_.Qc && Zj(this.g);
    this.u.redirect(a);
    ak(this);
  };
  function ak(a) {
    yi(a.A);
    a.A.o = null;
    a.H.reset();
    a.I.clear();
    if (a.o.o != a.o.g) {
      var b = a.o;
      b.o = b.g;
    }
    a.B && a.B.clear();
  }
  function bk() {
    this.l = 553;
  }
  y(bk, N);
  bk.prototype.P = function (a) {
    this.g = ah(a, 156);
    a.get(126);
  };
  bk.prototype.ga = function () {
    this.g.sort(ck);
  };
  bk.prototype.R = function (a) {
    this.config_ = a;
    this.i = a.od;
  };
  bk.prototype.ud = function (a) {
    this.i = a;
  };
  function wi(a, b, c, d, e) {
    b = new Rg(b, c || Cg(b.length), d || "");
    c = 1;
    if (a.g) {
      d = 0;
      for (var f; (f = a.g[d++]); ) (f = f.i(b)), f > c && (c = f);
    }
    b.H = c;
    null != a.config_.Nc && Tg(b, "ds", a.config_.Nc, !0);
    null != a.config_.Ge && Tg(b, "swl", a.config_.Ge, !0);
    Tg(b, "pq", a.i, !0);
    e && !b.m && (b.I = !0);
    b.m ||
      ((b.s = G()),
      "cp" in b.A || ((a = b.J.Ob()), Tg(b, "cp", a, !0)),
      Tg(b, "gs_id", b.u),
      (b.i = Eg(b.A) + ":" + b.B),
      (b.m = !0));
    return b;
  }
  function ck(a, b) {
    return a.g() - b.g();
  }
  function dk() {
    this.l = 123;
    this.A = !1;
    this.F = -1;
  }
  y(dk, N);
  m = dk.prototype;
  m.P = function (a) {
    this.g = a.get(133);
    this.W = a.get(130);
    this.Ic = a.get(118);
    this.Jc = a.get(120);
    this.X = a.get(494);
    this.Ze = a.get(124);
    this.Eb = a.get(125);
    this.Fb = a.get(230);
    this.Kc = a.get(127);
  };
  m.R = function (a) {
    this.u = this.Kc.g;
    this.config_ = a;
    this.A = !0;
    this.m = {};
    this.D = 0;
    this.Ve = a.vf;
    this.We = a.ag;
    this.Ya = -1;
    this.i = this.config_.enableCaching && !!this.g;
  };
  m.Ga = function () {
    this.A = !1;
    ek(this);
    this.m = this.o = null;
    yi(this);
  };
  function xi(a, b) {
    if (!(!a.A || a.We || (a.W && a.W.l()))) {
      var c = !0,
        d = Sg(b);
      d > a.F && (a.F = d);
      ++a.Db;
      a.X.g[b.getId()] = !0;
      Gg(a.Ic.g) || Gg(b.g) || ((d = a.X), (d.i = Math.max(d.i, 0)));
      d = G();
      for (var e in a.m) 2500 < d - a.m[e].s && fk(a, e);
      a.i &&
        (e = a.g.get(b)) &&
        ((c = a.Ve || b.I) && a.config_.bg && (b.o = !0),
        a.Eb.process(e),
        e.o && ++a.ma,
        (a.o = null));
      c && ((a.o = b), a.B || a.te());
    }
  }
  function yi(a) {
    a.Ya = a.F;
  }
  function ki(a) {
    if (a.i) {
      a = a.g;
      for (var b in a.i)
        for (var c = a.i[b].g, d, e = 0; (d = c[e++]); )
          if (35 == d.getType()) {
            delete a.i[b];
            break;
          }
      for (b = 0; b < a.g.length; ++b) a.g[b].reset();
    }
  }
  function gk(a, b) {
    return F(function (c) {
      this.Ed(c, b);
    }, a);
  }
  m.te = function () {
    ek(this);
    if (!(2 < this.u.Tc())) {
      var a = this.o;
      this.o = null;
      if (a) {
        var b = [],
          c = a.F;
        if (c) for (var d in c) Dg(d, c[d], b);
        b = this.u.Fe(a, b.join("&"), gk(this, a), F(this.Ed, this));
        a.o || (++this.ca, b ? ((this.m[a.getId()] = a), ++this.s) : ++this.Y);
        a = 100;
        b = (this.s - 2) / 2;
        for (c = 1; c++ <= b; ) a *= 2;
        a < this.D && (a = this.D);
        this.B = window.setTimeout(F(this.te, this), a);
      }
    }
  };
  function ek(a) {
    null != a.B && (window.clearTimeout(a.B), (a.B = null));
  }
  function fk(a, b) {
    a.u.Pc(b);
    delete a.m[b];
    a.s && --a.s;
  }
  m.Ed = function (a, b) {
    if (this.A) {
      if (!b && ((b = this.m[(a[2] || {}).j]), !b)) return;
      if (!b.o) {
        var c = this.Ze;
        var d = b,
          e = a[0],
          f = a[1],
          g = {};
        if ((a = a[2]))
          for (var h in a) {
            var l = a[h];
            h in c.g && (l = c.g[h].parse(l));
            g[h] = l;
          }
        h = l = a = !1;
        for (var k, n = 0; (k = f[n++]); )
          if ((33 == (k[1] || 0) ? (l = !0) : (a = !0), l && a)) {
            h = !0;
            break;
          }
        a = 0;
        l = [];
        for (n = 0; (k = f[n++]); ) {
          var p = k[1] || 0;
          if (!h || 33 != p) {
            var r = k[0];
            c.m && (r = c.i.bold(e.toLowerCase(), Ig(r).replace(ug, "")));
            var q = l,
              t = q.push,
              u = Ig(r).replace(ug, ""),
              z = a++,
              E = k[3];
            t.call(q, new og(r, u, z, p, k[2] || [], E ? new jg(E) : kg));
          }
        }
        c = new Ug(d, l, new jg(g), !1, !0, !1);
        this.Fb && (c = dd(this.Fb, c));
        if (this.i)
          for (
            d = this.g,
              e = c,
              ((e.g && e.g[0]) || "" != e.l.g) && e && e.m && (d.i[e.l.i] = e),
              f = 0;
            f < d.g.length;
            ++f
          )
            d.g[f].update(e);
        Sg(b) <= this.Ya
          ? !b || b.g || c.o || (this.K = G() - b.s)
          : (++this.ea,
            this.Eb.process(c) || ++this.Cb,
            (this.D = c.i.g.d || 0),
            b &&
              (fk(this, b.getId()),
              (d = b.s),
              (d = G() - d),
              b.g
                ? ((this.J += d),
                  (this.H = Math.max(d, this.H)),
                  ++this.I[d > hk ? Oj : ik[Math.floor(d / 100)]])
                : (this.K = d)));
        c && (b = c.i.g.q || "") && (this.Jc.u = b);
      }
    }
  };
  var ik = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
    Oj = ik[ik.length - 1] + 1,
    hk = 100 * ik.length - 1;
  function jk() {
    this.l = 124;
    this.g = {};
  }
  y(jk, N);
  jk.prototype.P = function (a) {
    this.i = a.get(150);
    if ((a = ah(a, 158))) for (var b, c = 0; (b = a[c++]); ) this.g[b.Yh()] = b;
  };
  jk.prototype.R = function (a) {
    this.m = a.Vc;
  };
  function kk() {
    this.l = 125;
  }
  y(kk, N);
  kk.prototype.P = function (a) {
    this.o = a.get(117);
    this.u = a.get(118);
    this.s = a.get(494);
    this.g = ah(a, 122);
    this.i = a.get(126);
    this.m = a.get(128);
    this.g.sort(lk);
  };
  kk.prototype.process = function (a) {
    var b = a,
      c = this.u.g.toLowerCase(),
      d = this.i.g;
    c = Jg(c);
    var e = b.l;
    b = e ? e.l : Jg(b.l.g.toLowerCase());
    var f = (d = d ? d.l : null) ? d.l : "";
    e =
      1 ==
      (0 == c.indexOf(b)
        ? 0 == c.indexOf(f)
          ? d && d.getId() == e.getId()
            ? 0
            : b.length >= f.length
            ? 1
            : -1
          : 1
        : -1);
    c = -1 != e;
    if (e) {
      if (this.g) for (e = 0; (b = this.g[e++]); ) a = b.l(a);
      d = this.i.g = a;
      a = d.l.g;
      e = d.g;
      this.m.isEnabled() && ((b = 0 == d.getType()), Hi(this.m, e, b));
      b = this.s;
      var g = d.l;
      f = g.getId();
      if (f in b.g) {
        var h = d.g.length;
        0 < h &&
          (Gg(g.g) || (b.i = h), (g = g.s), (g = G() - g), (b.o += g), ++b.u);
        d.i.g.e && ++b.m;
        delete b.g[f];
      }
      d = d.g;
      for (g = 0; (f = d[g++]); )
        (h = f.getType()), (b.s[Qg(h, f.i || [])] = !0);
      Ti(this.o, 3, { input: a, Ug: e });
    }
    return c;
  };
  function lk(a, b) {
    return a.g() - b.g();
  }
  function mk() {
    this.l = 126;
  }
  y(mk, N);
  mk.prototype.P = function (a) {
    this.i = a.get(123);
  };
  mk.prototype.R = function () {
    this.g = null;
  };
  var nk = ["expflags", "plugin"];
  function ok() {
    this.l = 127;
    this.m = {};
  }
  y(ok, N);
  ok.prototype.P = function (a) {
    a = ah(a, 149);
    for (var b, c = 0; (b = a[c++]); ) this.m[b.qb()] = b;
  };
  ok.prototype.R = function (a) {
    var b = "https:" == document.location.protocol,
      c = [];
    Dg("client", a.clientName, c);
    Dg("hl", a.ad, c);
    Dg("gl", a.Je, c);
    Dg("sugexp", a.xd, c);
    Dg("gs_rn", 64, c);
    Dg("gs_ri", a.requestIdentifier, c);
    var d = Fg(a.url || C.location.href);
    nk.filter(function (e) {
      return d.hasOwnProperty(e);
    }).forEach(function (e) {
      return c.push(e + "=" + d[e]);
    });
    a.authuser && Dg("authuser", a.authuser, c);
    this.i = {
      protocol: "http" + (b ? "s" : "") + "://",
      host: a.rd || "clients1." + a.ic,
      Ac: a.Ac || "/complete/search",
      He: c.length ? c.join("&") : "",
    };
    (this.g && this.g.qb() == a.connectionType) ||
      (this.g = this.m[a.connectionType]);
  };
  function pk() {
    this.l = 191;
  }
  y(pk, N);
  function Wj(a) {
    for (var b = [], c = 0, d = 0; d < a.length; ++d) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : ((b[c++] = (e >> 12) | 224), (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  }
  function Sj(a) {
    a.chain[0] = 1732584193;
    a.chain[1] = 4023233417;
    a.chain[2] = 2562383102;
    a.chain[3] = 271733878;
    a.cc = a.total = 0;
  }
  function Vj(a, b) {
    for (var c = a.fh, d = 0; 64 > d; d += 4)
      c[d / 4] = b[d] | (b[d + 1] << 8) | (b[d + 2] << 16) | (b[d + 3] << 24);
    var e = a.chain[0];
    b = a.chain[1];
    d = a.chain[2];
    for (var f = a.chain[3], g, h, l, k = 0; 64 > k; ++k)
      16 > k
        ? ((g = f ^ (b & (d ^ f))), (h = k))
        : 32 > k
        ? ((g = d ^ (f & (b ^ d))), (h = (5 * k + 1) & 15))
        : 48 > k
        ? ((g = b ^ d ^ f), (h = (3 * k + 5) & 15))
        : ((g = d ^ (b | ~f)), (h = (7 * k) & 15)),
        (l = f),
        (f = d),
        (d = b),
        (e = (e + g + qk[k] + c[h]) & 4294967295),
        (g = rk[k]),
        (b = (b + (((e << g) | (e >>> (32 - g))) & 4294967295)) & 4294967295),
        (e = l);
    a.chain[0] = (a.chain[0] + e) & 4294967295;
    a.chain[1] = (a.chain[1] + b) & 4294967295;
    a.chain[2] = (a.chain[2] + d) & 4294967295;
    a.chain[3] = (a.chain[3] + f) & 4294967295;
  }
  function Tj(a, b, c) {
    c || (c = b.length);
    a.total += c;
    for (var d = 0; d < c; ++d)
      (a.buffer[a.cc++] = b[d]), 64 == a.cc && (Vj(a, a.buffer), (a.cc = 0));
  }
  function Uj(a) {
    var b = Array(16),
      c = 8 * a.total,
      d = a.cc;
    Tj(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
    for (var e = 56; 64 > e; ++e) (a.buffer[e] = c & 255), (c >>>= 8);
    Vj(a, a.buffer);
    for (e = d = 0; 4 > e; ++e)
      for (c = 0; 32 > c; c += 8) b[d++] = (a.chain[e] >> c) & 255;
    return b;
  }
  var Rj = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58,
      59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0,
      64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
      44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0,
    ],
    rk = [
      7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20,
      5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4,
      11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6,
      10, 15, 21,
    ],
    qk = [
      3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426,
      2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134,
      1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664,
      643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448,
      568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512,
      1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740,
      2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074,
      3572445317, 76029189, 3654602809, 3873151461, 530742520, 3299628645,
      4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690,
      4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649,
      4149444226, 3174756917, 718787259, 3951481745,
    ];
  function sk() {
    this.l = 150;
  }
  I(sk, N);
  sk.prototype.bold = function (a, b) {
    b = Hg(b.replace(ig, ""));
    a = Hg(Jg(a, !0));
    if (Kg(b, a)) return a + "<b>" + b.substr(a.length) + "</b>";
    for (
      var c = "", d = [], e = b.length - 1, f = 0, g = -1, h;
      (h = b.charAt(f));
      ++f
    )
      " " == h || "\t" == h
        ? c.length && (d.push({ t: c, Vb: g, e: f + 1 }), (c = ""), (g = -1))
        : ((c += h),
          -1 == g ? (g = f) : f == e && d.push({ t: c, Vb: g, e: f + 1 }));
    a = a.split(/\s+/);
    f = {};
    for (c = 0; (e = a[c++]); ) f[e] = 1;
    g = -1;
    a = [];
    h = d.length - 1;
    for (c = 0; (e = d[c]); ++c)
      f[e.t]
        ? ((e = -1 == g),
          c == h ? a.push({ Vb: e ? c : g, e: c }) : e && (g = c))
        : -1 < g && (a.push({ Vb: g, e: c - 1 }), (g = -1));
    if (!a.length) return "<b>" + b + "</b>";
    c = "";
    for (f = e = 0; (g = a[f]); ++f)
      (h = d[g.Vb].Vb) && (c += "<b>" + b.substring(e, h - 1) + "</b> "),
        (e = d[g.e].e),
        (c += b.substring(h, e));
    e < b.length && (c += "<b>" + b.substring(e) + "</b> ");
    return c;
  };
  function tk() {
    this.l = 146;
  }
  I(tk, N);
  function uk(a) {
    JSON.parse('"\\u30' + a.split(",").join("\\u30") + '"');
  }
  uk(
    "02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C"
  );
  uk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");
  uk("D1,D4,D7,DA,DD");
  uk(
    "F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC"
  );
  uk("D1__,D4__,D7__,DA__,DD");
  uk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");
  uk("CF,D2,D5,D8,DB");
  function vk() {
    this.l = 116;
    this.ea = !0;
    this.isDarkTheme = !!document.body.dataset.dt;
  }
  y(vk, N);
  m = vk.prototype;
  m.sa = function (a, b) {
    var c = this.isDarkTheme ? "#202124" : "#fff",
      d = this.isDarkTheme ? "#3c4043" : "#ccc",
      e = this.isDarkTheme ? "#5f6368" : "#d9d9d9";
    this.W = a.nc();
    b.addRule(".sbdd_a", (Eh ? "margin-top:-1px;" : "") + "z-index:989");
    b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr", "float:left");
    b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl", "float:right");
    Eh
      ? b.addRule(
          ".sbdd_b",
          "background:" +
            c +
            ";border:1px solid " +
            (d + ";border-top-color:") +
            (e + ";") +
            b.prefix("border-radius:0 0 3px 3px;") +
            "cursor:default"
        )
      : b.addRule(
          ".sbdd_b",
          "background:" +
            c +
            ";border:1px solid " +
            (d + ";border-top-color:") +
            (e + ";") +
            b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") +
            "cursor:default"
        );
    b.addRule(
      ".sbdd_c",
      "border:0;display:block;position:absolute;top:0;z-index:988"
    );
  };
  m.P = function (a) {
    this.J = a.get(130);
    a.get(115);
    this.o = a.get(118);
    this.F = a.get(117);
    this.Y = a.i.getId();
  };
  m.ga = function (a) {
    this.config_ = a;
  };
  m.nb = function (a) {
    this.g = P();
    this.g.className = "gstl_" + this.Y + " sbdd_a";
    Ri(this.g, !1);
    this.K = this.g;
    this.H = P("fl");
    this.g.appendChild(this.H);
    this.A = P();
    this.g.appendChild(this.A);
    this.s = P("sbdd_b");
    this.A.appendChild(this.s);
    this.ma = P();
    this.A.appendChild(this.ma);
    this.config_.ae &&
      ((this.i = O("iframe", "gstl_" + this.Y + " sbdd_c")),
      Ri(this.i, !1),
      (this.config_.Ia || document.body).appendChild(this.i));
    if ((this.m = this.config_.jf))
      "number" === typeof this.m &&
        ((this.m += this.config_.kc[2]), (this.m -= wk(this))),
        xk(this, this.g, this.m);
    yk(this);
    (a.Ia || document.body).appendChild(this.g);
    a = this.F;
    var b = F(this.Fd, this);
    Dj(a, a.g, 8, b);
  };
  m.R = function (a) {
    this.config_ = a;
    this.g.style.position = a.Mb;
  };
  m.getHeight = function () {
    this.B || (this.B = this.s ? Math.max(this.s.offsetHeight, 0) : 0);
    return this.B;
  };
  m.Fd = function () {
    this.B = 0;
    yk(this);
    if (this.i) {
      var a = this.config_.Hd[0],
        b = this.i.style;
      "relative" != this.config_.Mb &&
        ((b.top = this.g.style.top),
        (b.left = this.g.offsetLeft + this.H.offsetWidth + "px"));
      b = this.i;
      a = this.getHeight() + a;
      b.style.height = Math.max(a, 0) + "px";
      xk(this, this.i, this.s.offsetWidth);
    }
    this.u && pj(this.u.g);
  };
  function yk(a) {
    var b, c;
    if ((c = a.u)) (c = a.u.g), (c = c.config_.Rf || c.H == c.F ? c.Ya : null);
    var d = (b = c) ? b.offsetWidth : zk(a.o.m);
    var e = a.m;
    c = wk(a);
    e
      ? "string" === typeof e && (e = null)
      : a.X || !a.ea
      ? (a.A.style.display = "inline-block")
      : ((a.A.style.display = ""),
        (e = d + a.config_.kc[2] - c),
        xk(a, a.g, e));
    if ("relative" != a.config_.Mb) {
      var f = ("rtl" == Pf()) != ("rtl" == a.D),
        g = a.config_.Ia;
      var h = { Ta: 0, Ec: 0 };
      if (f || !g || g == document.body || a.config_.Td)
        (h = Nh(a.o.m.F)), b && (h.Ta = Nh(b).Ta);
      b = h;
      h = e;
      e = a.config_.kc;
      g = e[1];
      e = e[0];
      e = b.Ec + a.o.getHeight() + e;
      if ("right" == a.ca) {
        h = ("rtl" == Pf()) != ("rtl" == a.D);
        var l = a.config_.Ia;
        g = -g;
        if (h || !l || l == document.body)
          g +=
            (Wh(a.g) || window).document.documentElement.clientWidth - d - b.Ta;
        d = g;
        h = e;
        b = void 0;
      } else
        (b = b.Ta + g),
          "center" == a.ca && h && (b += (d - h) / 2),
          (h = e),
          (d = void 0);
      e = { Ta: 0, Ec: 0 };
      "absolute" == a.config_.Mb &&
        a.config_.Ia &&
        a.config_.Ia != document.body &&
        (f || a.config_.Td) &&
        (e = Nh(a.config_.Ia));
      g = a.g.style;
      g.top = h - e.Ec + "px";
      g.left = g.right = "";
      void 0 != b
        ? (g.left = b + c - e.Ta + "px")
        : ((b = 0),
          a.config_.Ia &&
            f &&
            (b = document.body.clientWidth - (e.Ta + a.config_.Ia.offsetWidth)),
          (g.right = d + c - b + "px"));
    }
  }
  function xk(a, b, c) {
    "number" === typeof c
      ? 0 < c &&
        (a.config_.eh
          ? (b.style.width = c + "px")
          : (b.style.minWidth = c + "px"))
      : (b.style.width = c);
  }
  function Ri(a, b) {
    a && (a.style.display = b ? "" : "none");
  }
  function Si(a, b) {
    if (a.D != b) {
      a.D = b;
      var c = a.config_.Ia;
      c &&
        c != document.body &&
        (c.style.textAlign = "rtl" == b ? "right" : "left");
      Rh(a.g, b);
    }
  }
  function wk(a) {
    return a.J && a.J.i() && ((a = a.o.m.B.offsetWidth), "number" === typeof a)
      ? a
      : 0;
  }
  function Ak() {
    this.l = 119;
    this.W = !1;
    this.s = Cg(0);
    this.ca = -1;
    this.ea = !1;
    this.isDarkTheme = !!document.body.dataset.dt;
  }
  y(Ak, N);
  m = Ak.prototype;
  m.sa = function (a, b) {
    var c = this.isDarkTheme ? "#202124" : "#fff";
    this.D = a;
    this.g = a.Uc();
    Gh(this.g, "combobox");
    Hh(this.g, "haspopup", !1);
    Hh(this.g, "autocomplete", "list");
    this.Ic = a.nc();
    a.Lc() ||
      (b.addRule(
        ".sbib_a",
        "background:" + c + ";" + b.prefix("box-sizing:border-box;")
      ),
      (a = (Dh && zh) || kh ? 6 : 5),
      b.addRule(
        ".sbib_b",
        b.prefix("box-sizing:border-box;") +
          "height:100%;overflow:hidden;padding:" +
          a +
          "px 9px 0"
      ),
      b.addRule(".sbib_c[dir=ltr]", "float:right"),
      b.addRule(".sbib_c[dir=rtl]", "float:left"),
      b.addRule(
        ".sbib_d",
        b.prefix("box-sizing:border-box;") +
          "height:100%;unicode-bidi:embed;white-space:nowrap"
      ),
      b.addRule(".sbib_d[dir=ltr]", "float:left"),
      b.addRule(".sbib_d[dir=rtl]", "float:right"),
      wh && b.addRule(".sbib_a input::-ms-clear", "display: none"),
      b.addRule(".sbib_a,.sbib_c", "vertical-align:top"));
  };
  m.P = function (a) {
    this.i = a.get(118);
    this.m = a.get(117);
    this.X = a.get(128);
    this.I = a.get(173);
    this.Cb = !!a.get(136);
    this.Jc = a.i.getId();
  };
  m.ga = function (a) {
    this.config_ = a;
    this.J = a.Pb;
    this.K = a.ig;
    this.Kc = a.Nd;
    this.u = Oh(this.g);
    this.Gc();
    var b = this;
    kh &&
      Dj(
        this.m,
        this.g,
        "beforedeactivate",
        function (c) {
          b.ea && ((b.ea = !1), (c.sc = !0));
        },
        10
      );
    a = (jc() || J("iPad") || J("iPod")) && Ah;
    xh && Bk(this);
    (Bh || a) && Ck(this);
    this.F = this.g;
  };
  m.nb = function (a) {
    var b = !!a.pf[130];
    if (this.Cb || ij(this.i) || b || a.wf)
      (this.A = this.D.get("gs_id"))
        ? (b && (this.B = this.D.get("sb_chc")),
          (this.o = this.D.get("sb_ifc")))
        : ((this.A = P("gstl_" + this.Jc + " sbib_a")),
          (a = this.A.style),
          this.K && (a.width = this.K + "px"),
          this.J && (a.height = this.J + "px"),
          (a = this.g.style),
          (a.border = "none"),
          (a.padding = yh || kh ? "0 1px" : "0"),
          (a.margin = "0"),
          (a.height = "auto"),
          (a.width = "100%"),
          (this.g.className = this.config_.Zc),
          b &&
            ((this.B = P("sbib_d")),
            (this.B.id = this.D.getId("sb_chc")),
            this.A.appendChild(this.B)),
          ij(this.i) &&
            this.I &&
            ((this.I.g.className += " sbib_c"),
            (b = this.I),
            (a = this.Ic),
            b.s != a && (b.g.dir = b.s = a),
            this.A.appendChild(this.I.g)),
          (this.o = P("sbib_b")),
          (this.o.id = this.D.getId("sb_ifc")),
          this.A.appendChild(this.o),
          Dk(this, this.A, this.o)),
        this.config_.td &&
          this.g &&
          this.o &&
          (this.g.removeAttribute("role"),
          Gh(this.o, "combobox"),
          this.g.removeAttribute("aria-haspopup"),
          Hh(this.o, "haspopup", !0)),
        this.config_.Na &&
          this.g &&
          ((b = this.D.getId("sbsg")),
          Hh(this.g, "controls", b),
          this.config_.td && this.o
            ? (Hh(this.o, "haspopup", "grid"), Hh(this.o, "owns", b))
            : Hh(this.g, "haspopup", "grid")),
        this.config_.Rg || this.config_.ff || Ek(this, this.A),
        (this.F = this.A);
    this.Kc &&
      ((b = F(this.re, this)),
      Dj(this.m, this.g, "blur", b, 10),
      (b = F(this.Ae, this)),
      Dj(this.m, this.g, "focus", b, 10),
      (this.Fb = !0));
    b = this.m;
    a = F(this.Nf, this);
    Dj(b, b.g, 8, a);
    Fk(this);
  };
  m.R = function (a) {
    this.config_ = a;
    this.g.setAttribute("autocomplete", "off");
    this.g.setAttribute("spellcheck", !1);
    this.g.style.outline = a.ne ? "" : "none";
    this.Db = this.g.value;
    this.Fb && this.Ae();
    Gk(this);
  };
  m.Ga = function () {
    this.Fb && this.re();
    Hk(this);
  };
  function Dk(a, b, c) {
    Hk(a);
    c || (c = b);
    a.g.parentNode.replaceChild(b, a.g);
    c.appendChild(a.g);
    a.u &&
      a.config_.Ig &&
      (kh || xh
        ? nd(function () {
            a.g.focus();
            Mh(a.g, a.s.Ob());
          })
        : a.g.focus());
    Gk(a);
  }
  m.getHeight = function () {
    var a = this.F ? this.F.offsetHeight : 0;
    this.J > a && (a = this.J);
    return a;
  };
  function zk(a) {
    return a.K ? a.K : a.F ? a.F.offsetWidth : 0;
  }
  m.select = function () {
    this.g.select();
    this.Gc();
  };
  function hj(a) {
    Ch && (a.g.value = "");
    a.g.value = a.i.g;
    Ch && (a.g.value = a.g.value);
    fj(a);
  }
  function Ik(a) {
    a.u && (a.g.blur(), (a.u = !1));
  }
  m.clear = function () {
    this.g.value = "";
  };
  function fj(a) {
    if (a.u) {
      var b = a.g.value.length;
      a.s = Cg(b);
      Mh(a.g, b);
    }
  }
  function Ek(a, b) {
    Dj(a.m, b, "mouseup", function () {
      a.g.focus();
    });
  }
  function Fk(a) {
    function b(e) {
      Dj(a.m, a.g, e, F(a.ye, a), 10, c);
    }
    Dj(a.m, a.g, "keydown", F(a.Lf, a));
    (yh || a.config_.cf) && Dj(a.m, a.g, "keypress", F(a.Mf, a));
    Dj(a.m, a.g, "select", F(a.Gc, a), 10);
    var c = !1;
    b("mousedown");
    b("keyup");
    b("keypress");
    c = !0;
    b("mouseup");
    b("keydown");
    b("focus");
    b("blur");
    b("cut");
    b("paste");
    b("input");
    var d = F(a.If, a);
    Dj(a.m, a.g, "compositionstart", d);
    Dj(a.m, a.g, "compositionend", d);
  }
  m.If = function (a) {
    a = a.type;
    "compositionstart" == a
      ? ((a = this.i), 1 != a.D && (a.D = !0))
      : "compositionend" == a && ((a = this.i), 0 != a.D && (a.D = !1));
  };
  m.Lf = function (a) {
    var b = a.keyCode;
    this.ca = b;
    var c = (zh || xh) && (38 == b || 40 == b) && $i(this.X),
      d = 13 == b,
      e = 27 == b;
    this.Y = !1;
    9 != b || a.shiftKey || (this.Y = Zi(this.i));
    if (d) {
      (b = aj(this.X)) && b.getType();
      var f = this;
      nd(function () {
        var g = f.X,
          h = a.shiftKey ? 4 : 3;
        null != g.i && aj(g).getType();
        g = g.u;
        pi(g.F, g.g, h);
      });
    }
    if (c || d || e || this.Y) a.sc = !0;
  };
  m.Mf = function (a) {
    var b = a.keyCode,
      c = 9 == b && this.Y;
    if (13 == b || 27 == b || c) a.sc = !0;
  };
  m.ye = function (a) {
    if (!this.Eb) {
      var b = a.Xb;
      if (
        !(b.indexOf("key") || a.ctrlKey || a.altKey || a.shiftKey || a.metaKey)
      )
        a: if (((a = a.keyCode), "keypress" != b)) {
          var c = 38 == a || 40 == a;
          if ("keydown" == b) {
            var d = this.i;
            var e = 229 == a;
            (d.K = e) && d.B.add(4);
            if (c) break a;
          } else if (((d = a != this.ca), (this.ca = -1), !c || d)) break a;
          switch (a) {
            case 27:
              a = this.i;
              a.config_.Mg
                ? pi(a.F, a.g, 5)
                : (a.i.isVisible() ? ((c = a.i), yi(c.D), Yi(c)) : Ik(a.m),
                  li(a));
              break;
            case 37:
              a = this.i;
              jj(a, "rtl");
              if (
                kj(a) &&
                ((c = a.i),
                null !== c.i &&
                  ((a = c.o), (c = Jk(a, c.i)) && !(1 >= c.length)))
              )
                for (d = Ih(a.u), e = 1; e < c.length; e++)
                  c[e].id === d.id && Jh(a.u, c[e - 1]);
              break;
            case 39:
              a = this.i;
              jj(a, "ltr");
              if (
                kj(a) &&
                ((c = a.i), null !== c.i && ((a = c.o), (c = Jk(a, c.i))))
              )
                for (d = Ih(a.u), e = 0; e < c.length - 1; e++)
                  c[e].id === d.id && Jh(a.u, c[e + 1]);
              break;
            case 38:
              this.i.i.Ee();
              break;
            case 40:
              a = this.i;
              c = this.s;
              $i(a.i) ? a.i.De() : dj(a.i, c);
              break;
            case 46:
              a = this.i;
              a.g &&
                this.s.Yd() == a.g.length &&
                (a.J && a.J.clear(), a.config_.Lg && pi(a.F, a.g, 2));
              break;
            case 8:
              (a = this.i), a.A && 0 == this.s.Ob() && a.A.g();
          }
        }
      this.Gc();
      bj(this.i, this.g.value, this.s, b);
    }
  };
  m.Hf = function () {
    this.u = !0;
    Ti(this.i.s, 10);
  };
  m.Ff = function () {
    this.u = !1;
    Xi(this.i);
  };
  function Gk(a) {
    a.W ||
      ((a.W = !0),
      (a.Ya = F(a.Hf, a)),
      Dj(a.m, a.g, "focus", a.Ya, 99),
      (a.ma = F(a.Ff, a)),
      Dj(a.m, a.g, "blur", a.ma, 99));
  }
  function Hk(a) {
    a.W && ((a.W = !1), Hj(a.m, a.g, a.Ya), Hj(a.m, a.g, a.ma));
  }
  m.Ae = function () {
    this.H ||
      ((this.H = new Qd(this.config_.Eg || 50)),
      this.H.qa("tick", this.Dg, void 0, this),
      this.H.start());
  };
  m.re = function () {
    this.H && (Rd(this.H), (this.H = null));
  };
  m.Dg = function () {
    this.ye({ Xb: "polling" });
  };
  m.Nf = function () {
    if (xh) {
      var a = this.g,
        b = document.createEvent("KeyboardEvent");
      b.initKeyEvent &&
        (b.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0),
        a.dispatchEvent(b));
    }
  };
  m.Gc = function () {
    if (this.u) {
      a: {
        var a = this.g;
        try {
          if ("selectionStart" in a) {
            var b = a.selectionStart;
            var c = a.selectionEnd;
          } else {
            var d = a.createTextRange(),
              e = Ph(a).selection.createRange();
            d.inRange(e) &&
              (d.setEndPoint("EndToStart", e),
              (b = d.text.length),
              d.setEndPoint("EndToEnd", e),
              (c = d.text.length));
          }
          if (void 0 !== b) {
            var f = Cg(b, c);
            break a;
          }
        } catch (g) {}
        f = null;
      }
      f && (this.s = f);
    }
  };
  function Bk(a) {
    var b;
    a.m.qa(window, "pagehide", function () {
      a.Eb = !0;
      b = a.g.value;
    });
    a.m.qa(window, "pageshow", function (c) {
      a.Eb = !1;
      (c.persisted || void 0 !== b) && gj(a.i, b);
    });
  }
  function Ck(a) {
    a.m.qa(window, "pageshow", function (b) {
      b.persisted && a.Db && gj(a.i, a.Db);
    });
  }
  function Qi(a, b) {
    a.config_.td && a.o ? Hh(a.o, "expanded", b) : Hh(a.g, "haspopup", b);
    b || a.g.removeAttribute("aria-activedescendant");
  }
  function Kk(a) {
    return "string" == typeof a.className
      ? a.className
      : (a.getAttribute && a.getAttribute("class")) || "";
  }
  function Lk(a, b) {
    "string" == typeof a.className
      ? (a.className = b)
      : a.setAttribute && a.setAttribute("class", b);
  }
  function Mk(a, b) {
    a.classList
      ? (b = a.classList.contains(b))
      : ((a = a.classList ? a.classList : Kk(a).match(/\S+/g) || []),
        (b = 0 <= nb(a, b)));
    return b;
  }
  function zj(a, b) {
    if (a.classList) a.classList.add(b);
    else if (!Mk(a, b)) {
      var c = Kk(a);
      Lk(a, c + (0 < c.length ? " " + b : b));
    }
  }
  function Nk(a, b) {
    a.classList
      ? a.classList.remove(b)
      : Mk(a, b) &&
        Lk(
          a,
          Array.prototype.filter
            .call(
              a.classList ? a.classList : Kk(a).match(/\S+/g) || [],
              function (c) {
                return c != b;
              }
            )
            .join(" ")
        );
  }
  function Ok() {
    this.l = 129;
    this.J = {};
    this.W = [];
    this.Y = [];
    this.ca = [];
    this.m = [];
    this.ea = 0;
    this.isDarkTheme = !!document.body.dataset.dt;
  }
  y(Ok, N);
  m = Ok.prototype;
  m.sa = function (a, b) {
    var c = this.isDarkTheme ? "#202124" : "#fff";
    this.K = a;
    this.u = a.Uc();
    this.H = a.nc();
    Eh || b.addRule(".sbsb_a", "background:" + c);
    b.addRule(".sbsb_b", "list-style-type:none;margin:0;padding:0");
    Eh ||
      b.addRule(".sbsb_c", "line-height:22px;overflow:hidden;padding:0 10px");
    b.addRule(".sbsb_d", "background:#eee");
    b.addRule(".sbsb_e", "height:1px;background-color:#e5e5e5");
    b.addRule("#sbsb_f", "font-size:11px;color:#36c;text-decoration:none");
    b.addRule(
      "#sbsb_f:hover",
      "font-size:11px;color:#36c;text-decoration:underline"
    );
    b.addRule(
      ".sbsb_g",
      "text-align:center;padding:8px 0 7px;position:relative"
    );
    b.addRule(
      ".sbsb_h",
      "font-size:15px;height:28px;margin:0.2em" +
        (zh ? ";-webkit-appearance:button" : "")
    );
    b.addRule(
      ".sbsb_i",
      "font-size:13px;color:#36c;text-decoration:none;line-height:100%"
    );
    b.addRule(".sbsb_i:hover", "text-decoration:underline");
    b.addRule(".sbsb_j", "padding-top:1px 0 2px 0;font-size:11px");
    b.addRule(".sbdd_a[dir=ltr] .sbsb_j", "padding-right:4px;text-align:right");
    b.addRule(".sbdd_a[dir=rtl] .sbsb_j", "padding-left:4px;text-align:left");
    Eh &&
      (b.addRule(".sbsb_c[dir=ltr] .sbsb_k", "padding:10px 3px 11px 8px"),
      b.addRule(".sbsb_c[dir=rtl] .sbsb_k", "padding:10px 8px 11px 3px"));
  };
  m.P = function (a) {
    this.D = a.get(128);
    this.s = a.get(118);
    this.I = a.get(121);
    a = ah(a, 152);
    var b = {};
    if (a) for (var c, d = 0; (c = a[d++]); ) b[c.D] = c;
    this.ma = b;
  };
  m.ga = function (a) {
    this.config_ = a;
  };
  m.nb = function (a) {
    this.o = P();
    a.Na
      ? ((this.g = P("sbsb_b")),
        Gh(this.g, "grid"),
        (this.g.id = this.K.getId("sbsg")))
      : ((this.g = O("ul", "sbsb_b")), Gh(this.g, "listbox"));
    this.o.appendChild(this.g);
  };
  m.R = function (a) {
    this.config_ = a;
    var b = a.xe;
    b && (this.Ya = this.K.Ud(b));
    this.o.className = a.Wg || "sbsb_a";
    this.X = a.Tg || "sbsb_d";
  };
  function Jk(a, b) {
    if (a.config_.Na && (a = a.m[b]))
      return a.g().parentNode.querySelectorAll("[role=gridcell]");
  }
  function yj(a, b) {
    (b = a.m[b]) && Nk(b.g().parentNode, a.X);
  }
  m.clear = function () {
    for (var a, b, c; (c = this.W.pop()); )
      (a = c.getType()),
        (b = this.J[a]) || (b = this.J[a] = []),
        b.push(c),
        (a = c.g()),
        a.parentNode.removeChild(a);
    for (; (a = this.g.firstChild); )
      (a = this.g.removeChild(a)),
        a.l ? this.ca.push(a) : a != this.B && a != this.A && this.Y.push(a);
    this.B && (this.B.style.display = "none");
    this.A && (this.A.style.display = "none");
    this.m = [];
  };
  function qj(a, b) {
    var c = b.getType(),
      d = a.ma[c];
    if (!d) return !1;
    (c = (c = a.J[c]) && c.pop()) || (c = Pk(a, d));
    d.Bb(b, c);
    a.W.push(c);
    var e = c.g();
    if (a.config_.Na)
      for (
        var f = e.querySelectorAll('[role="gridcell"]'), g = 0;
        g < f.length;
        g++
      )
        f[g].id = e.id + ("x" + g);
    f = Qk(a);
    f.appendChild(e);
    if (void 0 !== b.l) {
      a.m.push(c);
      g = a.F;
      var h = b.l();
      a.config_.Yf &&
        ((e.onmouseover = function () {
          vj(a.D, h);
        }),
        (e.onmouseout = function () {
          mi(a.D);
        }));
      var l = c.g();
      l.onclick = function (k) {
        Ik(a.s.m);
        b.o && cj(a.s, b.g);
        mi(a.D);
        var n = a.D;
        n.i = n.g = h;
        k = k || Wh(l).event;
        d.Ab(k, b, a.I);
      };
    } else g = a.H;
    Rh(f, g);
    return !0;
  }
  function Pk(a, b) {
    b = b.Ib(a.I);
    var c = b.g();
    zj(c, "sbse");
    c.id = "sbse" + a.ea;
    (c = b.g()) && !a.config_.Na && Gh(c, "option");
    a.ea++;
    return b;
  }
  function uj(a, b, c, d) {
    var e = O("input");
    e.type = "button";
    e.value = Ig(b);
    e.onclick = function () {
      pi(a.I, a.s.g, d);
    };
    if (a.config_.Qf) {
      b = "lsb";
      var f = O("span");
      var g = O("span");
      f.className = "ds";
      g.className = "lsbb";
      f.appendChild(g);
      g.appendChild(e);
    } else (b = "sbsb_h"), (f = e);
    e.className = b;
    c.appendChild(f);
  }
  function Qk(a) {
    var b = a.Y.pop();
    if (b) return a.g.appendChild(b), b;
    a.config_.Na
      ? ((b = P()), Gh(b, "row"))
      : ((b = O("li")), Gh(b, "presentation"));
    b.className = "sbsb_c " + a.config_.Cc;
    b.onmousedown = F(a.nd, a);
    a.g.appendChild(b);
    return b;
  }
  m.nd = function (a) {
    a = a || Wh(this.o).event;
    a.stopPropagation
      ? (a.stopPropagation(),
        window.Polymer && window.Polymer.Element && a.preventDefault())
      : kh && !yh && (this.s.m.ea = !0);
    return !1;
  };
  function pj(a) {
    if (a.i) {
      var b = 0,
        c = a.s.m.B;
      c && (b = c.offsetWidth);
      c = a.i;
      a = zk(a.s.m) - b - 3;
      0 < a && (c.style.width = a + "px");
    }
  }
  function Rk() {
    this.l = 147;
  }
  I(Rk, N);
  Rk.prototype.sa = function (a) {
    this.u = a.Vd() || document.body;
  };
  Rk.prototype.ga = function (a) {
    this.config_ = a;
  };
  Rk.prototype.getHeight = function () {
    this.g || rj(this);
    sj(this);
    this.i || (Qh(this.g, "|"), (this.i = this.g.offsetHeight));
    return this.i;
  };
  function rj(a) {
    var b = P(a.config_.Zc),
      c = b.style;
    c.background = "transparent";
    c.color = "#000";
    c.padding = 0;
    c.position = "absolute";
    c.whiteSpace = "pre";
    a.g = b;
    a.g.style.visibility = "hidden";
    a.u.appendChild(a.g);
  }
  function sj(a) {
    var b = G();
    if (!a.o || a.o + 3e3 < b) {
      a.o = b;
      b = a.g;
      var c = Wh(b);
      b = (b = c.getComputedStyle ? c.getComputedStyle(b, "") : b.currentStyle)
        ? b.fontSize
        : null;
      (a.s && b == a.s) || ((a.m = {}), (a.i = null), (a.s = b));
    }
  }
  function Sk() {
    Wg.call(this);
    this.set(191, new pk());
    this.set(150, new sk());
    this.set(146, new tk());
    this.set(147, new Rk());
    Xg(this, 149, new Ji());
    this.set(145, new Bj());
    this.set(117, new Cj());
    this.set(494, new Jj());
    this.set(374, new Kj());
    this.set(120, new Lj());
    this.set(121, new Yj());
    this.set(553, new bk());
    this.set(124, new jk());
    this.set(125, new kk());
    this.set(123, new dk());
    this.set(126, new mk());
    this.set(127, new ok());
    this.set(115, new Ni());
    this.set(118, new Vi());
    this.set(128, new mj());
    Xg(this, 154, new Aj());
    this.set(116, new vk());
    this.set(119, new Ak());
    this.set(129, new Ok());
  }
  y(Sk, Wg);
  function Tk() {
    this.l = 347;
    this.i = [];
    this.m = 0;
  }
  y(Tk, N);
  Tk.prototype.P = function (a) {
    this.o = a.get(120);
  };
  Tk.prototype.R = function (a) {
    this.s = "//" + (a.rg || "www." + a.ic) + "/gen_204?";
    this.g = a.Sg || {};
  };
  function Zj(a, b) {
    b = Mj(a.o, b);
    for (var c in a.g) c in b || (b[c] = a.g[c]);
    c = Eg(b, !0);
    Uk(a, a.s + c);
  }
  function Uk(a, b) {
    var c = new Image(),
      d = a.m,
      e = a.i;
    c.onerror =
      c.onload =
      c.onabort =
        function () {
          try {
            delete e[d];
          } catch (f) {}
        };
    a.i[a.m++] = c;
    c.src = b;
  }
  function Vk() {
    this.l = 151;
    this.g = !0;
    this.i = {};
  }
  y(Vk, N);
  m = Vk.prototype;
  m.P = function (a) {
    this.m = a.get(150);
  };
  m.ga = function () {
    this.s = Bg([0]);
  };
  m.R = function (a) {
    this.o = a.Vc;
    this.g = a.Md;
  };
  m.Ga = function () {
    this.g = !1;
  };
  m.update = function (a) {
    if (this.g) {
      var b = a.g;
      if (b.length) {
        var c = a.l.l;
        a: {
          var d = Number.MAX_VALUE;
          for (var e, f = 0; (e = b[f++]); ) {
            if (!this.s[e.getType()]) {
              d = -1;
              break a;
            }
            e = e.g;
            d = Math.min(e.length, d);
          }
        }
        if (-1 != d) {
          var g = b[0].g;
          if (Kg(g, c, !0))
            for (f = c.length + 1; f <= d; ) {
              c = null;
              for (e = 0; (g = b[e++]); ) {
                g = g.g;
                if (f > g.length) return;
                g = g.substr(0, f);
                if (!c) c = g;
                else if (c != g) return;
              }
              this.i[c] = a;
              ++f;
            }
        }
      }
    }
  };
  m.get = function (a) {
    if (this.g) {
      var b = this.i[a.l];
      if (b) {
        for (
          var c = a.B,
            d = a.l,
            e = b.i,
            f = this.o || !e.g.k,
            g = [],
            h,
            l,
            k = b.g,
            n,
            p = 0;
          (n = k[p++]);

        )
          (l = n.g),
            (h = f ? this.m.bold(c, l) : Hg(l)),
            g.push(new og(h, l, n.l(), n.getType(), n.i || [], n.m));
        delete this.i[d];
        return new Ug(a, g, e, !0, b.m, !1);
      }
    }
    return null;
  };
  m.reset = function () {
    this.i = {};
  };
  function Wk() {
    this.l = 133;
    this.i = {};
    this.g = [];
    this.o = this.m = 0;
  }
  y(Wk, N);
  Wk.prototype.P = function (a) {
    this.g = ah(a, 151);
    this.g.sort(Xk);
  };
  Wk.prototype.R = function () {
    this.o = this.m = 0;
  };
  Wk.prototype.get = function (a) {
    var b = this.i[a.i];
    if (b) ++this.m;
    else if (this.g)
      for (var c = 0; c < this.g.length; ++c)
        if ((b = this.g[c].get(a))) {
          b && b.m && (this.i[b.l.i] = b);
          ++this.o;
          break;
        }
    return b ? new Ug(a, b.g, b.i, b.o, b.m, b.u) : null;
  };
  Wk.prototype.has = function (a) {
    return !!this.i[a.i];
  };
  function Xk() {
    return 0;
  }
  function Yk(a) {
    this.l = a;
    this.g = new RegExp("(?:^|\\s+)" + a + "(?:$|\\s+)");
  }
  function Zk(a, b) {
    b && !a.g.test(b.className) && (b.className += " " + a.l);
  }
  function $k(a, b) {
    b && (b.className = b.className.replace(a.g, " "));
  }
  function al() {
    this.l = 570;
    this.m = !1;
  }
  I(al, N);
  m = al.prototype;
  m.sa = function (a) {
    this.u = a;
  };
  m.P = function (a) {
    this.s = a.get(117);
    this.A = a.get(118);
  };
  m.ga = function (a) {
    var b = a.Nb;
    if ((this.g = b ? this.u.Ud(b) : null)) {
      b = this.s;
      var c = F(this.Gf, this);
      Dj(b, b.g, 10, c);
      b = this.s;
      c = F(this.Ef, this);
      Dj(b, b.g, 11, c);
      Dj(this.s, this.g, "mouseover", F(this.Kf, this));
      Dj(this.s, this.g, "mouseout", F(this.Jf, this));
      a.Sc && (this.o = new Yk(a.Sc));
      a.Rc && (this.i = new Yk(a.Rc));
    }
  };
  m.R = function () {
    this.m = !0;
    this.g && this.A.m.u && this.i && Zk(this.i, this.g);
  };
  m.Ga = function () {
    this.m = !1;
    this.g && (this.o && $k(this.o, this.g), this.i && $k(this.i, this.g));
  };
  m.Kf = function () {
    this.m && this.o && Zk(this.o, this.g);
  };
  m.Jf = function () {
    this.m && this.o && $k(this.o, this.g);
  };
  m.Gf = function () {
    this.m && this.i && Zk(this.i, this.g);
  };
  m.Ef = function () {
    this.m && this.i && $k(this.i, this.g);
  };
  var bl = ha(["//www.google.com/textinputassistant/", "/", "_tia.js"]);
  function cl() {
    this.l = 160;
  }
  I(cl, N);
  m = cl.prototype;
  m.sa = function (a, b) {
    this.m = a;
    a.Lc() ||
      (b.addRule(
        ".gsok_a",
        "background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"
      ),
      b.addRule(".gsok_a img", "border:none;visibility:hidden"));
  };
  m.P = function (a) {
    this.s = a.get(374);
    this.u = a.get(128);
  };
  m.ga = function (a) {
    this.o = !!a.pc;
    this.A = a.pe;
    this.D = a.vc;
    this.H = a.Bg;
    this.F = a.Ag;
  };
  m.nb = function () {
    (this.i = this.m.get("gs_ok"))
      ? (this.g = this.i.firstChild)
      : ((this.g = O("img")),
        (this.g.src = this.A + "/tia.png"),
        (this.i = O("span", "gsok_a gsst_e")),
        (this.i.id = this.m.getId("gs_ok")),
        this.i.appendChild(this.g));
    this.g.ds = F(this.gf, this);
    this.g.setAttribute("tia_field_name", this.m.Uc().name);
    this.g.setAttribute("tia_disable_swap", !0);
  };
  m.R = function (a) {
    a.Wc && (this.o = !!a.pc);
    this.g.setAttribute("tia_property", a.qe);
  };
  m.isEnabled = function () {
    return this.o;
  };
  m.Xd = function () {
    return { tooltip: this.F };
  };
  m.Gd = function (a) {
    if (!this.B) {
      a = md("SCRIPT");
      var b = jd(bl, this.H, this.D);
      Db(a, b);
      document.body.appendChild(a);
      this.B = !0;
      this.s.add(3);
    } else if (this.g.onclick) this.g.onclick(a);
    return !1;
  };
  m.gf = function () {
    var a = this.u;
    yi(a.D);
    Yi(a);
  };
  var dl = Ag++;
  var el = ha(["#"]);
  function fl() {
    this.l = 173;
    this.m = {};
  }
  y(fl, N);
  m = fl.prototype;
  m.sa = function (a, b) {
    this.o = a;
    a.Lc() ||
      (b.addRule(".gsst_a", "display:inline-block"),
      b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"),
      b.addRule(".gsst_a:hover", "text-decoration:none!important"),
      b.addRule(
        ".gsst_b",
        "font-size:16px;padding:0 2px;position:relative;" +
          b.prefix("user-select:none;") +
          "white-space:nowrap"
      ),
      b.addRule(
        ".gsst_e",
        "vertical-align:middle;" + (Xh() + ":" + Yh(0.6) + ";")
      ),
      b.addRule(
        ".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",
        Xh() + ":" + Yh(0.8) + ";"
      ),
      b.addRule(".gsst_a:active .gsst_e", Xh() + ":" + Yh(1) + ";"));
  };
  m.P = function (a) {
    this.u = a.get(118);
    this.i = ah(a, 160);
  };
  m.ga = function (a) {
    this.A = a.Wc;
    this.i.sort(gl);
  };
  m.nb = function (a) {
    this.g = this.o.get("gs_st");
    if (!this.g) {
      this.g = P("gsst_b");
      this.g.id = this.o.getId("gs_st");
      if ((a = a.Pb)) this.g.style.lineHeight = a + "px";
      hl(this);
    }
    il(this);
  };
  m.R = function () {
    if (this.A)
      for (var a = 0, b; (b = this.i[a++]); ) {
        var c = !!this.m[dl];
        if (b.isEnabled() != c) {
          for (; this.g.hasChildNodes(); ) this.g.removeChild(this.g.lastChild);
          hl(this);
          il(this);
          break;
        }
      }
  };
  function gl() {
    return 0;
  }
  function hl(a) {
    for (var b, c = 0, d; (d = a.i[c++]); )
      if (d.isEnabled()) {
        b = !0;
        var e = O("a", "gsst_a");
        jl(a, e, d);
        e.appendChild(d.i);
        a.g.appendChild(e);
      }
    a.g.style.display = b ? "" : "none";
  }
  function il(a) {
    a.m = {};
    for (var b = 0, c; (c = a.i[b++]); )
      if (c.isEnabled()) {
        var d = dl,
          e = c.i.parentNode;
        e.onclick = F(c.Gd, c);
        a.m[d] = e;
        c.Xd &&
          ((c = c.Xd()),
          c.fi && (d = a.m[d]) && d.style && (d.style.visibility = "hidden"),
          (d = c.tooltip)) &&
          (e.title = d);
      }
  }
  function jl(a, b, c) {
    mb(b, eb(el));
    b.addEventListener("click", function () {
      return !1;
    });
    yh && (b.tabIndex = 0);
    b.onkeydown = function (d) {
      d = d || window.event;
      var e = d.keyCode;
      if (13 == e || 32 == e) c.Gd(d), ni(a.u), Th(d);
    };
  }
  Ag++;
  function kl() {
    this.o = 33;
    this.l = P();
    this.l.className = "gspr_a";
  }
  I(kl, ih);
  kl.prototype.g = function () {
    return this.l;
  };
  function ll() {
    jh.call(this, 33);
  }
  y(ll, jh);
  ll.prototype.sa = function (a, b) {
    b.addRule(".gspr_a", "padding-right:1px");
  };
  ll.prototype.Ib = function () {
    return new kl();
  };
  ll.prototype.Bb = function (a, b) {
    Bb(b.l, dd(hd, a.m.g.b || ""));
  };
  ll.prototype.Ab = function (a, b, c) {
    pi(c, b.g, 1);
  };
  function ml(a, b) {
    this.o = 0;
    this.u = a;
    this.D = b;
    this.m = P();
    this.l = P("sbqs_a");
    this.m.appendChild(this.l);
    this.B = P("sbqs_c");
    this.m.appendChild(this.B);
  }
  y(ml, ih);
  ml.prototype.g = function () {
    return this.m;
  };
  function nl(a, b, c, d) {
    Bb(a.B, lg(b));
    a.A = c;
    d &&
      !a.i &&
      ((a.i = Uh(a.l)),
      (a.i.onclick = F(function (e) {
        Ik(this.u.m);
        cj(this.u, this.A);
        pi(this.D, this.A, 9);
        return Th(e);
      }, a)));
    d
      ? (Bb(a.i, lg(d + " &raquo;")),
        (a.l.style.display = ""),
        Hh(a.l, "hidden", !0))
      : a.i && (a.l.style.display = "none");
  }
  function ol() {
    jh.call(this, 0);
  }
  I(ol, jh);
  m = ol.prototype;
  m.sa = function (a, b) {
    b.addRule(".sbsb_c[dir=ltr] .sbqs_a", "float:right");
    b.addRule(".sbsb_c[dir=rtl] .sbqs_a", "float:left");
    b.addRule(".sbqs_b", "visibility:hidden");
    b.addRule(".sbsb_d .sbqs_b", "visibility:visible");
    b.addRule(".sbsb_c[dir=ltr] .sbqs_b", "padding-left:5px;");
    b.addRule(".sbsb_c[dir=rtl] .sbqs_b", "padding-right:5px;");
    b.addRule(".sbqs_c", "word-wrap:break-word");
  };
  m.P = function (a) {
    this.g = a.get(118);
  };
  m.R = function (a) {
    this.i = a.Qd ? a.Rd : "";
  };
  m.Ib = function (a) {
    return new ml(this.g, a);
  };
  m.Bb = function (a, b) {
    nl(b, a.getHtml(), a.g, this.i);
  };
  m.Ab = function (a, b, c) {
    pi(c, b.g, 1);
  };
  function pl(a) {
    Sk.call(this);
    Xg(this, 149, new bh());
    this.set(347, new Tk());
    this.set(133, new Wk());
    Xg(this, 151, new Vk());
    this.set(570, new al());
    this.set(134, new si());
    this.set(189, new vi());
    Xg(this, 156, new zi());
    a.ENABLE_DELETE_ICON ? Xg(this, 152, new oi()) : Xg(this, 152, new ri());
    Xg(this, 152, new ll());
    Xg(this, 152, new ol());
    this.set(173, new fl());
    Xg(this, 160, new cl());
    this.set(157, new Bi());
    Xg(this, 156, new Ci());
    "zero-prefix" == a.SEARCHBOX_BEHAVIOR_EXPERIMENT &&
      Xg(this, 156, new Ai(a));
    var b = a.SBOX_STRINGS || {};
    a.SEARCHBOX_REPORTING &&
      a.SEARCHBOX_COMPONENT &&
      b.SBOX_REPORT_SUGGESTIONS &&
      (Xg(this, 153, new gh()),
      Xg(this, 152, new di(b.SBOX_REPORT_SUGGESTIONS, a.SEARCHBOX_COMPONENT)));
    a.SEARCHBOX_COMPONENT &&
      (this.set(
        598,
        new Di(
          a.SEARCHBOX_COMPONENT,
          a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,
          a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST
        )
      ),
      Xg(this, 156, new Ii()));
  }
  y(pl, Sk);
  function ql() {
    return {
      yf: function () {
        return {
          clientName: "hp",
          requestIdentifier: "hp",
          ic: "google.com",
          Je: "",
          ad: "en",
          Nc: "",
          od: "",
          videoId: "",
          zd: "",
          authuser: 0,
          sg: "",
          Ei: "",
          Ge: null,
          xd: "",
          Od: !1,
          rd: "",
          Ac: "",
          connectionType: 0,
          transport: null,
          Ne: !1,
          ti: !1,
          ag: !1,
          enableCaching: !0,
          rf: 10,
          Xh: 10,
          lf: !0,
          Md: !0,
          Th: !1,
          vf: !1,
          mg: !1,
          ng: !1,
          ii: !1,
          Wf: !0,
          hf: !1,
          Xf: 500,
          Wc: !1,
          Pf: !0,
          ci: !0,
          xi: !1,
          pc: !1,
          vc: "",
          pe: "//www.google.com/textinputassistant",
          qe: "",
          Bg: 7,
          Zh: !1,
          ai: !1,
          Tf: !1,
          Sf: !0,
          Uf: !1,
          be: !1,
          Na: !1,
          Mg: !1,
          Lg: !1,
          Dc: 1,
          le: !0,
          mc: !1,
          Qd: !1,
          Nd: !1,
          Eg: 10,
          Vc: !1,
          Ig: !0,
          Ia: document.body,
          Vf: !0,
          Ke: null,
          pf: {},
          Wh: {},
          si: 0,
          wf: !1,
          bg: !0,
          lb: !1,
          uf: !1,
          Qg: !1,
          zi: null,
          mf: !1,
          rg: null,
          Sg: null,
          Qc: !1,
          Yf: !0,
          td: !1,
          cf: !1,
          Bi: 1,
          ne: !1,
          Ng: "Search",
          Rd: "I'm  Feeling Lucky",
          Og: "",
          qg: "Learn more",
          qd: "Remove",
          pd: "This search was removed from your Web History",
          di: "",
          Sh: "Did you mean:",
          Ag: "",
          vi: "",
          Hi: "Search by voice",
          Gi: 'Listening for "Ok Google"',
          Fi: 'Say "Ok Google"',
          Rh: "Clear Search",
          Pb: 0,
          ig: 0,
          Zc: "",
          Cc: "",
          hi: !1,
          Mb: "absolute",
          Qf: !1,
          ae: !1,
          xe: null,
          Rf: !0,
          kc: [0, 0, 0],
          jf: null,
          Vg: null,
          Hd: [0],
          vd: !0,
          Me: "",
          Wg: "",
          Tg: "",
          Nb: null,
          Sc: "",
          Rc: "",
          Qh: 1,
          eh: !1,
          Td: !1,
          ki: 0,
          Rg: !1,
          ff: !1,
          Uh: !1,
          Fg: !0,
        };
      },
    };
  }
  function rl(a, b, c, d, e) {
    var f = xh ? "-moz-" : kh ? "-ms-" : yh ? "-o-" : zh ? "-webkit-" : "",
      g = ".gstl_" + d,
      h = new RegExp("(\\.(" + e.join("|") + ")\\b)"),
      l = [];
    return {
      addRule: function (k, n) {
        if (b) {
          if (c) {
            k = k.split(",");
            for (var p = [], r = 0, q; (q = k[r++]); )
              (q = h.test(q) ? q.replace(h, g + "$1") : g + " " + q), p.push(q);
            k = p.join(",");
          }
          l.push(k, "{", n, "}");
        }
      },
      Ye: function () {
        if (b && l.length) {
          b = !1;
          var k = O("style");
          k.setAttribute("type", "text/css");
          (a || yg).appendChild(k);
          var n = l.join("");
          l = null;
          k.styleSheet
            ? (k.styleSheet.cssText = n)
            : k.appendChild(document.createTextNode(n));
        }
      },
      prefix: function (k, n) {
        var p = k + (n || "");
        f && (p += n ? k + f + n : f + k);
        return p;
      },
    };
  }
  function sl(a, b, c, d) {
    this.i = a;
    this.I = b;
    this.F = c;
    this.H = d;
    this.l = -1;
    this.D = !1;
  }
  m = sl.prototype;
  m.install = function (a) {
    if (!this.D) {
      a = tl(a);
      0 > this.l && (this.l = ul(a));
      var b = Ph(this.i),
        c = vl(this),
        d = !!b.getElementById("gs_id" + this.l),
        e = this,
        f = ["gssb_c", "gssb_k", "sbdd_a", "sbdd_c", "sbib_a"];
      a.Me && f.push(a.Me);
      f = rl(a.Ke, a.Vf, a.mf, this.l, f);
      this.A = a.lb;
      this.g = new Yg(
        this.F,
        this.H,
        {
          Lc: function () {
            return d;
          },
          get: function (g) {
            return b.getElementById(g + e.l);
          },
          Ud: function (g) {
            return b.getElementById(g);
          },
          Vd: function () {
            return e.I;
          },
          nc: function () {
            return c;
          },
          getId: function (g) {
            return g + e.l;
          },
          Uc: function () {
            return e.i;
          },
        },
        f,
        this,
        a
      );
      this.g.get(347);
      this.u = this.g.get(130);
      this.g.get(115);
      this.m = this.g.get(117);
      this.g.get(123);
      this.g.get(135);
      this.J = this.g.get(118);
      this.Y = this.g.get(119);
      this.K = this.g.get(374);
      this.o = this.g.get(120);
      this.g.get(189);
      this.W = this.g.get(553);
      this.g.get(419);
      this.g.get(126);
      this.g.get(128);
      this.g.get(139);
      this.X = this.g.get(121);
      a = Wh(this.i);
      this.s = Vh(a);
      this.B = F(this.Kg, this);
      this.m.qa(a, "resize", this.B);
      this.D = !0;
    }
  };
  m.isActive = function () {
    return !!this.g && this.g.isActive();
  };
  function wl(a, b) {
    function c(d) {
      pi(a.X, a.J.g, 12);
      return Sh(d);
    }
    a.m.qa(b, "keyup", function (d) {
      (13 != d.keyCode && 32 != d.keyCode) || c(d);
    });
    a.m.qa(b, "click", c);
  }
  m.getId = function () {
    return this.l;
  };
  m.lb = function () {
    return this.A || (!!this.u && this.u.lb());
  };
  m.ud = function (a) {
    this.W.ud(a);
  };
  function ul(a) {
    a = Wh(a.Ke || yg);
    void 0 == a.nextSearchboxId && (a.nextSearchboxId = 50);
    return a.nextSearchboxId++;
  }
  function vl(a) {
    if (a.i)
      for (a = a.i; (a = a.parentNode); ) {
        var b = a.dir;
        if (b) return b;
      }
    return "ltr";
  }
  function tl(a) {
    a = Pg(a);
    var b = a.vc;
    b ? (a.vc = b.toLowerCase()) : (a.pc = !1);
    a.mc && !a.Qd && (a.mc = !1);
    Ah || (a.ng = !1);
    return a;
  }
  m.Kg = function () {
    var a = Vh(Wh(this.i));
    if (a.Oe != this.s.Oe || a.de != this.s.de) (this.s = a), Ti(this.m, 8);
  };
  function xl() {
    this.B = "sbhcn";
    this.A = "sbfcn";
    this.D = "gsfi";
    this.i = "gsfs";
    this.u = function () {
      return !0;
    };
    H("ytvoicesearchloggingparams", F(this.Af, this));
  }
  y(xl, Vg);
  m = xl.prototype;
  m.Af = function () {
    this.g.K.add(6);
    return Mj(this.g.o, 15);
  };
  m.Dd = function (a) {
    Ik(this.g.Y);
    this.u(Mj(this.g.o, a)) && this.l.submit();
  };
  m.redirect = function (a) {
    this.J(this.Cd(a));
  };
  m.Cd = function (a) {
    var b = 0 <= a.indexOf("?") ? "&" : "?",
      c = Mj(this.g.o);
    var d = this.g;
    c || (c = Mj(d.o));
    d = Eg(c);
    return a + b + d;
  };
  m.me = function (a) {
    if (this.o || this.m) {
      if (22 < this.s) {
        var b = (this.s - 22) / 2;
        a.addRule(".sbsb_c", "padding:" + b + "px 24px " + b + "px 10px");
      } else a.addRule(".sbsb_c", "padding:4px 24px 4px 10px");
      this.K
        ? a.addRule(".sbsb_a", "padding: 16px 0 0")
        : a.addRule(".sbsb_a", "padding: 16px 0");
      a.addRule(".sbdd_b", "border-top: 0");
      a.addRule(".sbib_a", "background:transparent");
      a.addRule(".sbib_b", "padding: 0");
    }
    b =
      'background: no-repeat url("data:image/svg+xml;base64, ' +
      window.btoa(
        '<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>'
      ) +
      '");';
    a.addRule(
      ".sbpqs_a",
      "display: flex; align-items:center; white-space: pre;"
    );
    a.addRule(".sbpqs_a:before", b);
    b = this.I
      ? '<svg fill="fillColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>'
      : '<svg fill="fillColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.3917 16.8083L12.7333 12.15C13.625 11.125 14.1667 9.79167 14.1667 8.33333C14.1667 5.10833 11.5583 2.5 8.33333 2.5C5.10833 2.5 2.5 5.10833 2.5 8.33333C2.5 11.5583 5.10833 14.1667 8.33333 14.1667C9.79167 14.1667 11.125 13.625 12.15 12.7417L16.8083 17.4L17.3917 16.8083ZM8.33333 13.3333C5.575 13.3333 3.33333 11.0917 3.33333 8.33333C3.33333 5.575 5.575 3.33333 8.33333 3.33333C11.0917 3.33333 13.3333 5.575 13.3333 8.33333C13.3333 11.0917 11.0917 13.3333 8.33333 13.3333Z"/></svg>';
    var c =
      'background: no-repeat url("data:image/svg+xml;base64,' +
      window.btoa(b.replace("fillColor", "#030303")) +
      '");';
    a.addRule(
      ".sbqs_c",
      "display: flex; align-items:center; white-space: pre;"
    );
    a.addRule(".sbqs_c:before", c);
    c =
      'background: no-repeat url("data:image/svg+xml;base64, ' +
      window.btoa(
        '<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>'
      ) +
      '");';
    a.addRule("html[dark] .sbpqs_a:before", c);
    b =
      'background: no-repeat url("data:image/svg+xml;base64, ' +
      window.btoa(b.replace("fillColor", "#f1f1f1")) +
      '");';
    a.addRule("html[dark] .sbqs_c:before", b);
    a.addRule(".sbpqs_a:before", 'height: 20px; width: 20px; content: " ";');
    a.addRule(".sbqs_c:before", 'height: 20px; width: 20px; content: " ";');
    a.addRule(
      ".sbpqs_c",
      "display: flex; align-items:center; margin-left: 34px;"
    );
    a.addRule(".sbsb_c[dir=rtl] .sbpqs_c", "margin-right: 34px;");
    a.addRule(".sbsb_c", "line-height: 32px;");
    a.addRule(".sbpqs_c", "line-height: 32px;");
    a.addRule(".sbsb_a", "padding: 16px 0 8px");
    a.addRule(".sbfl_a", "margin:-5px -18px -9px 0");
    a.addRule("." + this.i, "font-size:1.6rem;color:#222");
    a.addRule(".sbdd_c", "z-index:2010");
    a.addRule(".sbdd_a", "z-index:2021");
    a.addRule(".sbib_a", "background:transparent; width: 100%; flex: 1;");
    a.addRule("ytd-masthead[dark] .gsst_e", "filter: invert(100%)");
    a.addRule(".sbpqs_a", "color: #030303");
    a.addRule(".sbqs_c b", "font-weight:500");
    a.addRule(".sbpqs_a b", "font-weight: 500");
    a.addRule("html[dark] .sbqs_c b", "font-weight: 600");
    a.addRule("html[dark] .sbpqs_a b", "font-weight: 600");
    a.addRule(".sbsb_c[dir=ltr]", "padding: 0px 24px 0px 16px;");
    a.addRule(".sbsb_c[dir=rtl]", "padding: 0px 16px 0px 24px;");
    a.addRule(".sbdd_b", "border-radius: 12px;");
    a.addRule(".sbsb_a", "border-radius: 12px;");
    a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before", "margin-right: 14px;");
    a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before", "margin-right: 14px;");
    a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before", "margin-left: 14px;");
    a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before", "margin-left: 14px;");
    a.addRule(".sbfl_a", "margin:-5px -10px -9px 0");
    this.H &&
      (a.addRule(".sbsb_c", "padding:0px 12px 0px 16px"),
      a.addRule(
        ".sbpqs_b",
        "display: flex; align-items: center; height: 32px;"
      ));
    this.F &&
      (a.addRule(".sbpqs_b", "display: none"),
      a.addRule(
        ".sbsb_d .sbpqs_b",
        "display: flex; align-items: center; height: 32px;"
      ));
    a.addRule(
      "html[dark] .sbsb_a",
      "background: var(--yt-spec-raised-background);"
    );
    a.addRule(
      "html[dark] .sbdd_b",
      "border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);"
    );
    a.addRule("html[dark] .sbsb_i", "color: var(--yt-spec-call-to-action)");
    a.addRule(
      "html[dark] .sbsb_d",
      "background: var(--yt-spec-additive-background);"
    );
    a.addRule(
      ".sbfl_b",
      "background: none; color: var(--yt-spec-text-secondary);"
    );
    a.addRule(
      "html[dark] .sbfl_a:hover",
      "color: var(--yt-spec-text-primary);"
    );
    a.addRule("html[dark] .sbpqs_a", "color: var(--yt-spec-text-primary);");
    a.addRule("html[dark] .sbqs_c", "color: var(--yt-spec-text-primary);");
    a.addRule("html[dark] .sbse", "color: var(--yt-spec-text-primary);");
  };
  m.install = function (a, b, c, d, e, f, g) {
    this.l = a;
    this.J = f;
    g && (this.u = g);
    f = ql().yf();
    f.clientName = "youtube";
    f.requestIdentifier = "youtube";
    f.Nc = "yt";
    f.ad = d.REQUEST_LANGUAGE;
    f.Je = d.REQUEST_DOMAIN;
    f.Pf = !1;
    f.Dc = 0;
    f.le = !1;
    f.mc = !1;
    f.ne = !1;
    f.Vc = !0;
    f.Zc = this.D;
    f.Cc = this.i;
    f.Sc = this.B;
    f.Rc = this.A;
    f.gi = !0;
    f.pc = d.HAS_ON_SCREEN_KEYBOARD;
    f.vc = d.REQUEST_LANGUAGE;
    f.pe = "//www.gstatic.com/inputtools/images";
    f.qe = "youtube";
    f.Qc = !0;
    f.Mb = "fixed";
    this.o = d.IS_POLYMER;
    this.m = d.IS_FUSION;
    this.K = d.SEARCHBOX_REPORTING;
    this.s = d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
    this.H = d.ENABLE_DELETE_ICON;
    this.F = d.ENABLE_DELETE_ICON_HOVER;
    this.I = d.ENABLE_PROMINENT_SEARCH_ICON;
    f.rd = "suggestqueries-clients6.youtube.com";
    d.PQ && (f.od = d.PQ);
    f.zd = d.PSUGGEST_TOKEN;
    f.authuser = d.SESSION_INDEX;
    f.pd = e.SUGGESTION_DISMISSED_LABEL;
    f.qd = e.SUGGESTION_DISMISS_LABEL;
    f.vd = !d.HIDE_REMOVE_LINK;
    f.Ai = Bg([0, 33, 35]);
    this.o
      ? ((f.Nb = "search-container"), (f.Pb = 24))
      : this.m
      ? ((f.Nb = "masthead-search"), (f.Pb = 24))
      : ((f.Nb = "masthead-search-terms"), (f.Pb = 30));
    ac() || (f.ae = !0);
    f.xe = f.Nb;
    e = this.l.offsetHeight;
    f.kc = [e + (56 - e) / 2 - 40 + 4, 0, 0];
    e = [0];
    bc() && "8.0" == gc() && (e[0] = -1);
    f.Hd = e;
    (e = d.REQUEST_LANGUAGE)
      ? ((e = e.toLowerCase()),
        (e = "zh-tw" == e || "zh-cn" == e || "ja" == e || "ko" == e))
      : (e = !1);
    e && (f.Nd = !0);
    if ((e = d.SUGG_EXP_ID)) f.xd = e;
    d.SEND_VISITOR_DATA && (f.connectionType = 1);
    d.SEND_VISITOR_DATA &&
      "VISITOR_DATA" in d &&
      (f.visitorData = d.VISITOR_DATA);
    if (this.g) {
      a = this.g;
      b = f;
      c = Wh(a.i);
      d = a.B;
      c.removeEventListener
        ? c.removeEventListener("resize", d, !1)
        : c.detachEvent("onresize", d);
      $g(a.g);
      b = tl(b);
      a.A = b.lb;
      a = a.g;
      $g(a);
      for (c = 0; (d = a.g[c++]); ) d.R(b);
      a.l = !0;
    } else
      (d = new pl(d)),
        (this.g = new sl(b, a, this, d)),
        this.g.install(f),
        c && (wl(this.g, c), (c.onclick = null));
  };
  function yl() {
    this.data = [];
    this.g = -1;
  }
  yl.prototype.set = function (a, b) {
    b = void 0 === b ? !0 : b;
    0 <= a &&
      52 > a &&
      Number.isInteger(a) &&
      this.data[a] !== b &&
      ((this.data[a] = b), (this.g = -1));
  };
  yl.prototype.get = function (a) {
    return !!this.data[a];
  };
  function zl(a) {
    -1 === a.g &&
      (a.g = a.data.reduce(function (b, c, d) {
        return b + (c ? Math.pow(2, d) : 0);
      }, 0));
    return a.g;
  }
  function Al() {
    this.blockSize = -1;
  }
  function Bl() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = [];
    this.o = [];
    this.s = [];
    this.i = [];
    this.i[0] = 128;
    for (var a = 1; a < this.blockSize; ++a) this.i[a] = 0;
    this.m = this.l = 0;
    this.reset();
  }
  I(Bl, Al);
  Bl.prototype.reset = function () {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.g[4] = 3285377520;
    this.m = this.l = 0;
  };
  function Cl(a, b, c) {
    c || (c = 0);
    var d = a.s;
    if ("string" === typeof b)
      for (var e = 0; 16 > e; e++)
        (d[e] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (e = 0; 16 > e; e++)
        (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = ((f << 1) | (f >>> 31)) & 4294967295;
    }
    b = a.g[0];
    c = a.g[1];
    var g = a.g[2],
      h = a.g[3],
      l = a.g[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = h ^ (c & (g ^ h));
          var k = 1518500249;
        } else (f = c ^ g ^ h), (k = 1859775393);
      else
        60 > e
          ? ((f = (c & g) | (h & (c | g))), (k = 2400959708))
          : ((f = c ^ g ^ h), (k = 3395469782));
      f = (((b << 5) | (b >>> 27)) + f + l + k + d[e]) & 4294967295;
      l = h;
      h = g;
      g = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = f;
    }
    a.g[0] = (a.g[0] + b) & 4294967295;
    a.g[1] = (a.g[1] + c) & 4294967295;
    a.g[2] = (a.g[2] + g) & 4294967295;
    a.g[3] = (a.g[3] + h) & 4294967295;
    a.g[4] = (a.g[4] + l) & 4294967295;
  }
  Bl.prototype.update = function (a, b) {
    if (null != a) {
      void 0 === b && (b = a.length);
      for (var c = b - this.blockSize, d = 0, e = this.o, f = this.l; d < b; ) {
        if (0 == f) for (; d <= c; ) Cl(this, a, d), (d += this.blockSize);
        if ("string" === typeof a)
          for (; d < b; ) {
            if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.blockSize)) {
              Cl(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b; )
            if (((e[f] = a[d]), ++f, ++d, f == this.blockSize)) {
              Cl(this, e);
              f = 0;
              break;
            }
      }
      this.l = f;
      this.m += b;
    }
  };
  Bl.prototype.digest = function () {
    var a = [],
      b = 8 * this.m;
    56 > this.l
      ? this.update(this.i, 56 - this.l)
      : this.update(this.i, this.blockSize - (this.l - 56));
    for (var c = this.blockSize - 1; 56 <= c; c--)
      (this.o[c] = b & 255), (b /= 256);
    Cl(this, this.o);
    for (c = b = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.g[c] >> d) & 255), ++b;
    return a;
  };
  function Dl() {}
  Dl.prototype.next = function () {
    return El;
  };
  var El = { done: !0, value: void 0 };
  Dl.prototype.kb = function () {
    return this;
  };
  function Fl(a) {
    if (a instanceof Gl || a instanceof Hl || a instanceof Il) return a;
    if ("function" == typeof a.next)
      return new Gl(function () {
        return a;
      });
    if ("function" == typeof a[Symbol.iterator])
      return new Gl(function () {
        return a[Symbol.iterator]();
      });
    if ("function" == typeof a.kb)
      return new Gl(function () {
        return a.kb();
      });
    throw Error("Not an iterator or iterable.");
  }
  function Gl(a) {
    this.g = a;
  }
  Gl.prototype.kb = function () {
    return new Hl(this.g());
  };
  Gl.prototype[Symbol.iterator] = function () {
    return new Il(this.g());
  };
  Gl.prototype.l = function () {
    return new Il(this.g());
  };
  function Hl(a) {
    this.g = a;
  }
  y(Hl, Dl);
  Hl.prototype.next = function () {
    return this.g.next();
  };
  Hl.prototype[Symbol.iterator] = function () {
    return new Il(this.g);
  };
  Hl.prototype.l = function () {
    return new Il(this.g);
  };
  function Il(a) {
    Gl.call(this, function () {
      return a;
    });
    this.i = a;
  }
  y(Il, Gl);
  Il.prototype.next = function () {
    return this.i.next();
  };
  function Jl(a) {
    var b = [];
    Kl(new Ll(), a, b);
    return b.join("");
  }
  function Ll() {}
  function Kl(a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if (Array.isArray(b)) {
          var d = b;
          b = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b; f++)
            c.push(e), Kl(a, d[f], c), (e = ",");
          c.push("]");
          return;
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean)
          b = b.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
              ((f = b[d]),
              "function" != typeof f &&
                (c.push(e), Ml(d, c), c.push(":"), Kl(a, f, c), (e = ",")));
          c.push("}");
          return;
        }
      }
      switch (typeof b) {
        case "string":
          Ml(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  }
  var Nl = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\u000b",
    },
    Ol = /\uffff/.test("\uffff")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g;
  function Ml(a, b) {
    b.push(
      '"',
      a.replace(Ol, function (c) {
        var d = Nl[c];
        d ||
          ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1)),
          (Nl[c] = d));
        return d;
      }),
      '"'
    );
  }
  function Pl() {
    var a = this;
    this.promise = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  }
  function R(a) {
    Rb.call(this);
    this.s = 1;
    this.i = [];
    this.o = 0;
    this.g = [];
    this.l = {};
    this.u = !!a;
  }
  I(R, Rb);
  m = R.prototype;
  m.subscribe = function (a, b, c) {
    var d = this.l[a];
    d || (d = this.l[a] = []);
    var e = this.s;
    this.g[e] = a;
    this.g[e + 1] = b;
    this.g[e + 2] = c;
    this.s = e + 3;
    d.push(e);
    return e;
  };
  m.Fc = function (a) {
    var b = this.g[a];
    if (b) {
      var c = this.l[b];
      0 != this.o
        ? (this.i.push(a), (this.g[a + 1] = function () {}))
        : (c && qb(c, a),
          delete this.g[a],
          delete this.g[a + 1],
          delete this.g[a + 2]);
    }
    return !!b;
  };
  m.ue = function (a, b) {
    var c = this.l[a];
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e];
      if (this.u)
        for (e = 0; e < c.length; e++) {
          var g = c[e];
          Ql(this.g[g + 1], this.g[g + 2], d);
        }
      else {
        this.o++;
        try {
          for (e = 0, f = c.length; e < f && !this.ab; e++)
            (g = c[e]), this.g[g + 1].apply(this.g[g + 2], d);
        } finally {
          if ((this.o--, 0 < this.i.length && 0 == this.o))
            for (; (c = this.i.pop()); ) this.Fc(c);
        }
      }
      return 0 != e;
    }
    return !1;
  };
  function Ql(a, b, c) {
    xd(function () {
      a.apply(b, c);
    });
  }
  m.clear = function (a) {
    if (a) {
      var b = this.l[a];
      b && (b.forEach(this.Fc, this), delete this.l[a]);
    } else (this.g.length = 0), (this.l = {});
  };
  m.Ba = function () {
    R.Fa.Ba.call(this);
    this.clear();
    this.i.length = 0;
  };
  function Rl(a) {
    this.g = a;
  }
  Rl.prototype.set = function (a, b) {
    void 0 === b ? this.g.remove(a) : this.g.set(a, Jl(b));
  };
  Rl.prototype.get = function (a) {
    try {
      var b = this.g.get(a);
    } catch (c) {
      return;
    }
    if (null !== b)
      try {
        return JSON.parse(b);
      } catch (c) {
        throw "Storage: Invalid value was encountered";
      }
  };
  Rl.prototype.remove = function (a) {
    this.g.remove(a);
  };
  function Sl(a) {
    this.g = a;
  }
  I(Sl, Rl);
  function Tl(a) {
    this.data = a;
  }
  function Ul(a) {
    return void 0 === a || a instanceof Tl ? a : new Tl(a);
  }
  Sl.prototype.set = function (a, b) {
    Sl.Fa.set.call(this, a, Ul(b));
  };
  Sl.prototype.l = function (a) {
    a = Sl.Fa.get.call(this, a);
    if (void 0 === a || a instanceof Object) return a;
    throw "Storage: Invalid value was encountered";
  };
  Sl.prototype.get = function (a) {
    if ((a = this.l(a))) {
      if (((a = a.data), void 0 === a))
        throw "Storage: Invalid value was encountered";
    } else a = void 0;
    return a;
  };
  function Vl(a) {
    this.g = a;
  }
  I(Vl, Sl);
  Vl.prototype.set = function (a, b, c) {
    if ((b = Ul(b))) {
      if (c) {
        if (c < G()) {
          Vl.prototype.remove.call(this, a);
          return;
        }
        b.expiration = c;
      }
      b.creation = G();
    }
    Vl.Fa.set.call(this, a, b);
  };
  Vl.prototype.l = function (a) {
    var b = Vl.Fa.l.call(this, a);
    if (b) {
      var c = b.creation,
        d = b.expiration;
      if ((d && d < G()) || (c && c > G())) Vl.prototype.remove.call(this, a);
      else return b;
    }
  };
  function Wl() {}
  function Xl() {}
  I(Xl, Wl);
  Xl.prototype[Symbol.iterator] = function () {
    return Fl(this.kb(!0)).l();
  };
  Xl.prototype.clear = function () {
    var a = Array.from(this);
    a = w(a);
    for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value);
  };
  function Yl(a) {
    this.g = a;
    this.l = null;
  }
  I(Yl, Xl);
  m = Yl.prototype;
  m.set = function (a, b) {
    Zl(this);
    try {
      this.g.setItem(a, b);
    } catch (c) {
      if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
      throw "Storage mechanism: Quota exceeded";
    }
  };
  m.get = function (a) {
    Zl(this);
    a = this.g.getItem(a);
    if ("string" !== typeof a && null !== a)
      throw "Storage mechanism: Invalid value was encountered";
    return a;
  };
  m.remove = function (a) {
    Zl(this);
    this.g.removeItem(a);
  };
  m.kb = function (a) {
    Zl(this);
    var b = 0,
      c = this.g,
      d = new Dl();
    d.next = function () {
      if (b >= c.length) return El;
      var e = c.key(b++);
      if (a) return { value: e, done: !1 };
      e = c.getItem(e);
      if ("string" !== typeof e)
        throw "Storage mechanism: Invalid value was encountered";
      return { value: e, done: !1 };
    };
    return d;
  };
  m.clear = function () {
    Zl(this);
    this.g.clear();
  };
  m.key = function (a) {
    Zl(this);
    return this.g.key(a);
  };
  function Zl(a) {
    if (null == a.g) throw Error("Storage mechanism: Storage unavailable");
    var b;
    (null != (b = a.l) ? b : (a.l = $l(a.g))) ||
      qd(Error("Storage mechanism: Storage unavailable"));
  }
  function $l(a) {
    if (!a) return !1;
    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return (
        b instanceof DOMException &&
        ("QuotaExceededError" === b.name ||
          22 === b.code ||
          1014 === b.code ||
          "NS_ERROR_DOM_QUOTA_REACHED" === b.name) &&
        a &&
        0 !== a.length
      );
    }
  }
  function am() {
    var a = null;
    try {
      a = C.localStorage || null;
    } catch (b) {}
    Yl.call(this, a);
  }
  I(am, Yl);
  function bm(a, b) {
    this.l = a;
    this.g = b + "::";
  }
  I(bm, Xl);
  bm.prototype.set = function (a, b) {
    this.l.set(this.g + a, b);
  };
  bm.prototype.get = function (a) {
    return this.l.get(this.g + a);
  };
  bm.prototype.remove = function (a) {
    this.l.remove(this.g + a);
  };
  bm.prototype.kb = function (a) {
    var b = this.l[Symbol.iterator](),
      c = this,
      d = new Dl();
    d.next = function () {
      var e = b.next();
      if (e.done) return e;
      for (e = e.value; e.slice(0, c.g.length) != c.g; ) {
        e = b.next();
        if (e.done) return e;
        e = e.value;
      }
      return { value: a ? e.slice(c.g.length) : c.l.get(e), done: !1 };
    };
    return d;
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
  var S = {},
    cm =
      "undefined" !== typeof Uint8Array &&
      "undefined" !== typeof Uint16Array &&
      "undefined" !== typeof Int32Array;
  S.assign = function (a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
      var c = b.shift();
      if (c) {
        if ("object" !== typeof c)
          throw new TypeError(c + "must be non-object");
        for (var d in c)
          Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
      }
    }
    return a;
  };
  S.wd = function (a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a;
  };
  var dm = {
      mb: function (a, b, c, d, e) {
        if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
        else for (var f = 0; f < d; f++) a[e + f] = b[c + f];
      },
      Sd: function (a) {
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
    em = {
      mb: function (a, b, c, d, e) {
        for (var f = 0; f < d; f++) a[e + f] = b[c + f];
      },
      Sd: function (a) {
        return [].concat.apply([], a);
      },
    };
  S.Pg = function () {
    cm
      ? ((S.jb = Uint8Array),
        (S.Ka = Uint16Array),
        (S.Re = Int32Array),
        S.assign(S, dm))
      : ((S.jb = Array), (S.Ka = Array), (S.Re = Array), S.assign(S, em));
  };
  S.Pg();
  var fm = !0;
  try {
    new Uint8Array(1);
  } catch (a) {
    fm = !1;
  }
  function gm(a) {
    var b,
      c,
      d = a.length,
      e = 0;
    for (b = 0; b < d; b++) {
      var f = a.charCodeAt(b);
      if (55296 === (f & 64512) && b + 1 < d) {
        var g = a.charCodeAt(b + 1);
        56320 === (g & 64512) &&
          ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++);
      }
      e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4;
    }
    var h = new S.jb(e);
    for (b = c = 0; c < e; b++)
      (f = a.charCodeAt(b)),
        55296 === (f & 64512) &&
          b + 1 < d &&
          ((g = a.charCodeAt(b + 1)),
          56320 === (g & 64512) &&
            ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++)),
        128 > f
          ? (h[c++] = f)
          : (2048 > f
              ? (h[c++] = 192 | (f >>> 6))
              : (65536 > f
                  ? (h[c++] = 224 | (f >>> 12))
                  : ((h[c++] = 240 | (f >>> 18)),
                    (h[c++] = 128 | ((f >>> 12) & 63))),
                (h[c++] = 128 | ((f >>> 6) & 63))),
            (h[c++] = 128 | (f & 63)));
    return h;
  }
  var hm = {};
  hm = function (a, b, c, d) {
    var e = (a & 65535) | 0;
    a = ((a >>> 16) & 65535) | 0;
    for (var f; 0 !== c; ) {
      f = 2e3 < c ? 2e3 : c;
      c -= f;
      do (e = (e + b[d++]) | 0), (a = (a + e) | 0);
      while (--f);
      e %= 65521;
      a %= 65521;
    }
    return e | (a << 16) | 0;
  };
  for (var im = {}, jm, km = [], lm = 0; 256 > lm; lm++) {
    jm = lm;
    for (var mm = 0; 8 > mm; mm++)
      jm = jm & 1 ? 3988292384 ^ (jm >>> 1) : jm >>> 1;
    km[lm] = jm;
  }
  im = function (a, b, c, d) {
    c = d + c;
    for (a ^= -1; d < c; d++) a = (a >>> 8) ^ km[(a ^ b[d]) & 255];
    return a ^ -1;
  };
  var nm = {};
  nm = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version",
  };
  function om(a) {
    for (var b = a.length; 0 <= --b; ) a[b] = 0;
  }
  var pm = [
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ],
    qm = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ],
    rm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    sm = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    tm = Array(576);
  om(tm);
  var um = Array(60);
  om(um);
  var vm = Array(512);
  om(vm);
  var wm = Array(256);
  om(wm);
  var xm = Array(29);
  om(xm);
  var ym = Array(30);
  om(ym);
  function zm(a, b, c, d, e) {
    this.Ie = a;
    this.tf = b;
    this.sf = c;
    this.kf = d;
    this.xg = e;
    this.ce = a && a.length;
  }
  var Am, Bm, Cm;
  function Dm(a, b) {
    this.Ld = a;
    this.wb = 0;
    this.Ua = b;
  }
  function Em(a, b) {
    a.ba[a.pending++] = b & 255;
    a.ba[a.pending++] = (b >>> 8) & 255;
  }
  function Fm(a, b, c) {
    a.ha > 16 - c
      ? ((a.oa |= (b << a.ha) & 65535),
        Em(a, a.oa),
        (a.oa = b >> (16 - a.ha)),
        (a.ha += c - 16))
      : ((a.oa |= (b << a.ha) & 65535), (a.ha += c));
  }
  function Gm(a, b, c) {
    Fm(a, c[2 * b], c[2 * b + 1]);
  }
  function Hm(a, b) {
    var c = 0;
    do (c |= a & 1), (a >>>= 1), (c <<= 1);
    while (0 < --b);
    return c >>> 1;
  }
  function Im(a, b, c) {
    var d = Array(16),
      e = 0,
      f;
    for (f = 1; 15 >= f; f++) d[f] = e = (e + c[f - 1]) << 1;
    for (c = 0; c <= b; c++)
      (e = a[2 * c + 1]), 0 !== e && (a[2 * c] = Hm(d[e]++, e));
  }
  function Jm(a) {
    var b;
    for (b = 0; 286 > b; b++) a.ta[2 * b] = 0;
    for (b = 0; 30 > b; b++) a.bb[2 * b] = 0;
    for (b = 0; 19 > b; b++) a.ja[2 * b] = 0;
    a.ta[512] = 1;
    a.Ra = a.zb = 0;
    a.za = a.matches = 0;
  }
  function Km(a) {
    8 < a.ha ? Em(a, a.oa) : 0 < a.ha && (a.ba[a.pending++] = a.oa);
    a.oa = 0;
    a.ha = 0;
  }
  function Lm(a, b, c) {
    Km(a);
    Em(a, c);
    Em(a, ~c);
    S.mb(a.ba, a.window, b, c, a.pending);
    a.pending += c;
  }
  function Mm(a, b, c, d) {
    var e = 2 * b,
      f = 2 * c;
    return a[e] < a[f] || (a[e] === a[f] && d[b] <= d[c]);
  }
  function Nm(a, b, c) {
    for (var d = a.da[c], e = c << 1; e <= a.Qa; ) {
      e < a.Qa && Mm(b, a.da[e + 1], a.da[e], a.depth) && e++;
      if (Mm(b, d, a.da[e], a.depth)) break;
      a.da[c] = a.da[e];
      c = e;
      e <<= 1;
    }
    a.da[c] = d;
  }
  function Om(a, b, c) {
    var d = 0;
    if (0 !== a.za) {
      do {
        var e = (a.ba[a.Jb + 2 * d] << 8) | a.ba[a.Jb + 2 * d + 1];
        var f = a.ba[a.cd + d];
        d++;
        if (0 === e) Gm(a, f, b);
        else {
          var g = wm[f];
          Gm(a, g + 256 + 1, b);
          var h = pm[g];
          0 !== h && ((f -= xm[g]), Fm(a, f, h));
          e--;
          g = 256 > e ? vm[e] : vm[256 + (e >>> 7)];
          Gm(a, g, c);
          h = qm[g];
          0 !== h && ((e -= ym[g]), Fm(a, e, h));
        }
      } while (d < a.za);
    }
    Gm(a, 256, b);
  }
  function Pm(a, b) {
    var c = b.Ld,
      d = b.Ua.Ie,
      e = b.Ua.ce,
      f = b.Ua.kf,
      g,
      h = -1;
    a.Qa = 0;
    a.sb = 573;
    for (g = 0; g < f; g++)
      0 !== c[2 * g]
        ? ((a.da[++a.Qa] = h = g), (a.depth[g] = 0))
        : (c[2 * g + 1] = 0);
    for (; 2 > a.Qa; ) {
      var l = (a.da[++a.Qa] = 2 > h ? ++h : 0);
      c[2 * l] = 1;
      a.depth[l] = 0;
      a.Ra--;
      e && (a.zb -= d[2 * l + 1]);
    }
    b.wb = h;
    for (g = a.Qa >> 1; 1 <= g; g--) Nm(a, c, g);
    l = f;
    do
      (g = a.da[1]),
        (a.da[1] = a.da[a.Qa--]),
        Nm(a, c, 1),
        (d = a.da[1]),
        (a.da[--a.sb] = g),
        (a.da[--a.sb] = d),
        (c[2 * l] = c[2 * g] + c[2 * d]),
        (a.depth[l] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1),
        (c[2 * g + 1] = c[2 * d + 1] = l),
        (a.da[1] = l++),
        Nm(a, c, 1);
    while (2 <= a.Qa);
    a.da[--a.sb] = a.da[1];
    g = b.Ld;
    l = b.wb;
    d = b.Ua.Ie;
    e = b.Ua.ce;
    f = b.Ua.tf;
    var k = b.Ua.sf,
      n = b.Ua.xg,
      p,
      r = 0;
    for (p = 0; 15 >= p; p++) a.Ma[p] = 0;
    g[2 * a.da[a.sb] + 1] = 0;
    for (b = a.sb + 1; 573 > b; b++) {
      var q = a.da[b];
      p = g[2 * g[2 * q + 1] + 1] + 1;
      p > n && ((p = n), r++);
      g[2 * q + 1] = p;
      if (!(q > l)) {
        a.Ma[p]++;
        var t = 0;
        q >= k && (t = f[q - k]);
        var u = g[2 * q];
        a.Ra += u * (p + t);
        e && (a.zb += u * (d[2 * q + 1] + t));
      }
    }
    if (0 !== r) {
      do {
        for (p = n - 1; 0 === a.Ma[p]; ) p--;
        a.Ma[p]--;
        a.Ma[p + 1] += 2;
        a.Ma[n]--;
        r -= 2;
      } while (0 < r);
      for (p = n; 0 !== p; p--)
        for (q = a.Ma[p]; 0 !== q; )
          (d = a.da[--b]),
            d > l ||
              (g[2 * d + 1] !== p &&
                ((a.Ra += (p - g[2 * d + 1]) * g[2 * d]), (g[2 * d + 1] = p)),
              q--);
    }
    Im(c, h, a.Ma);
  }
  function Qm(a, b, c) {
    var d,
      e = -1,
      f = b[1],
      g = 0,
      h = 7,
      l = 4;
    0 === f && ((h = 138), (l = 3));
    b[2 * (c + 1) + 1] = 65535;
    for (d = 0; d <= c; d++) {
      var k = f;
      f = b[2 * (d + 1) + 1];
      (++g < h && k === f) ||
        (g < l
          ? (a.ja[2 * k] += g)
          : 0 !== k
          ? (k !== e && a.ja[2 * k]++, a.ja[32]++)
          : 10 >= g
          ? a.ja[34]++
          : a.ja[36]++,
        (g = 0),
        (e = k),
        0 === f
          ? ((h = 138), (l = 3))
          : k === f
          ? ((h = 6), (l = 3))
          : ((h = 7), (l = 4)));
    }
  }
  function Rm(a, b, c) {
    var d,
      e = -1,
      f = b[1],
      g = 0,
      h = 7,
      l = 4;
    0 === f && ((h = 138), (l = 3));
    for (d = 0; d <= c; d++) {
      var k = f;
      f = b[2 * (d + 1) + 1];
      if (!(++g < h && k === f)) {
        if (g < l) {
          do Gm(a, k, a.ja);
          while (0 !== --g);
        } else
          0 !== k
            ? (k !== e && (Gm(a, k, a.ja), g--),
              Gm(a, 16, a.ja),
              Fm(a, g - 3, 2))
            : 10 >= g
            ? (Gm(a, 17, a.ja), Fm(a, g - 3, 3))
            : (Gm(a, 18, a.ja), Fm(a, g - 11, 7));
        g = 0;
        e = k;
        0 === f
          ? ((h = 138), (l = 3))
          : k === f
          ? ((h = 6), (l = 3))
          : ((h = 7), (l = 4));
      }
    }
  }
  function Sm(a) {
    var b = 4093624447,
      c;
    for (c = 0; 31 >= c; c++, b >>>= 1)
      if (b & 1 && 0 !== a.ta[2 * c]) return 0;
    if (0 !== a.ta[18] || 0 !== a.ta[20] || 0 !== a.ta[26]) return 1;
    for (c = 32; 256 > c; c++) if (0 !== a.ta[2 * c]) return 1;
    return 0;
  }
  var Tm = !1;
  function Um(a, b, c) {
    a.ba[a.Jb + 2 * a.za] = (b >>> 8) & 255;
    a.ba[a.Jb + 2 * a.za + 1] = b & 255;
    a.ba[a.cd + a.za] = c & 255;
    a.za++;
    0 === b
      ? a.ta[2 * c]++
      : (a.matches++,
        b--,
        a.ta[2 * (wm[c] + 256 + 1)]++,
        a.bb[2 * (256 > b ? vm[b] : vm[256 + (b >>> 7)])]++);
    return a.za === a.Sb - 1;
  }
  function Vm(a, b) {
    a.msg = nm[b];
    return b;
  }
  function Wm(a) {
    for (var b = a.length; 0 <= --b; ) a[b] = 0;
  }
  function Xm(a) {
    var b = a.state,
      c = b.pending;
    c > a.U && (c = a.U);
    0 !== c &&
      (S.mb(a.output, b.ba, b.Tb, c, a.xb),
      (a.xb += c),
      (b.Tb += c),
      (a.yd += c),
      (a.U -= c),
      (b.pending -= c),
      0 === b.pending && (b.Tb = 0));
  }
  function Ym(a, b) {
    var c = 0 <= a.va ? a.va : -1,
      d = a.C - a.va,
      e = 0;
    if (0 < a.level) {
      2 === a.S.Oc && (a.S.Oc = Sm(a));
      Pm(a, a.uc);
      Pm(a, a.jc);
      Qm(a, a.ta, a.uc.wb);
      Qm(a, a.bb, a.jc.wb);
      Pm(a, a.Id);
      for (e = 18; 3 <= e && 0 === a.ja[2 * sm[e] + 1]; e--);
      a.Ra += 3 * (e + 1) + 14;
      var f = (a.Ra + 3 + 7) >>> 3;
      var g = (a.zb + 3 + 7) >>> 3;
      g <= f && (f = g);
    } else f = g = d + 5;
    if (d + 4 <= f && -1 !== c) Fm(a, b ? 1 : 0, 3), Lm(a, c, d);
    else if (4 === a.strategy || g === f)
      Fm(a, 2 + (b ? 1 : 0), 3), Om(a, tm, um);
    else {
      Fm(a, 4 + (b ? 1 : 0), 3);
      c = a.uc.wb + 1;
      d = a.jc.wb + 1;
      e += 1;
      Fm(a, c - 257, 5);
      Fm(a, d - 1, 5);
      Fm(a, e - 4, 4);
      for (f = 0; f < e; f++) Fm(a, a.ja[2 * sm[f] + 1], 3);
      Rm(a, a.ta, c - 1);
      Rm(a, a.bb, d - 1);
      Om(a, a.ta, a.bb);
    }
    Jm(a);
    b && Km(a);
    a.va = a.C;
    Xm(a.S);
  }
  function T(a, b) {
    a.ba[a.pending++] = b;
  }
  function Zm(a, b) {
    a.ba[a.pending++] = (b >>> 8) & 255;
    a.ba[a.pending++] = b & 255;
  }
  function $m(a, b) {
    var c = a.ke,
      d = a.C,
      e = a.wa,
      f = a.oe,
      g = a.C > a.la - 262 ? a.C - (a.la - 262) : 0,
      h = a.window,
      l = a.Wa,
      k = a.Ja,
      n = a.C + 258,
      p = h[d + e - 1],
      r = h[d + e];
    a.wa >= a.Zd && (c >>= 2);
    f > a.G && (f = a.G);
    do {
      var q = b;
      if (
        h[q + e] === r &&
        h[q + e - 1] === p &&
        h[q] === h[d] &&
        h[++q] === h[d + 1]
      ) {
        d += 2;
        for (
          q++;
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          h[++d] === h[++q] &&
          d < n;

        );
        q = 258 - (n - d);
        d = n - 258;
        if (q > e) {
          a.vb = b;
          e = q;
          if (q >= f) break;
          p = h[d + e - 1];
          r = h[d + e];
        }
      }
    } while ((b = k[b & l]) > g && 0 !== --c);
    return e <= a.G ? e : a.G;
  }
  function an(a) {
    var b = a.la,
      c;
    do {
      var d = a.Pe - a.G - a.C;
      if (a.C >= b + (b - 262)) {
        S.mb(a.window, a.window, b, b, 0);
        a.vb -= b;
        a.C -= b;
        a.va -= b;
        var e = (c = a.qc);
        do {
          var f = a.head[--e];
          a.head[e] = f >= b ? f - b : 0;
        } while (--c);
        e = c = b;
        do (f = a.Ja[--e]), (a.Ja[e] = f >= b ? f - b : 0);
        while (--c);
        d += b;
      }
      if (0 === a.S.na) break;
      e = a.S;
      c = a.window;
      f = a.C + a.G;
      var g = e.na;
      g > d && (g = d);
      0 === g
        ? (c = 0)
        : ((e.na -= g),
          S.mb(c, e.input, e.gb, g, f),
          1 === e.state.wrap
            ? (e.N = hm(e.N, c, g, f))
            : 2 === e.state.wrap && (e.N = im(e.N, c, g, f)),
          (e.gb += g),
          (e.ib += g),
          (c = g));
      a.G += c;
      if (3 <= a.G + a.ka)
        for (
          d = a.C - a.ka,
            a.T = a.window[d],
            a.T = ((a.T << a.Pa) ^ a.window[d + 1]) & a.Oa;
          a.ka &&
          !((a.T = ((a.T << a.Pa) ^ a.window[d + 3 - 1]) & a.Oa),
          (a.Ja[d & a.Wa] = a.head[a.T]),
          (a.head[a.T] = d),
          d++,
          a.ka--,
          3 > a.G + a.ka);

        );
    } while (262 > a.G && 0 !== a.S.na);
  }
  function bn(a, b) {
    for (var c; ; ) {
      if (262 > a.G) {
        an(a);
        if (262 > a.G && 0 === b) return 1;
        if (0 === a.G) break;
      }
      c = 0;
      3 <= a.G &&
        ((a.T = ((a.T << a.Pa) ^ a.window[a.C + 3 - 1]) & a.Oa),
        (c = a.Ja[a.C & a.Wa] = a.head[a.T]),
        (a.head[a.T] = a.C));
      0 !== c && a.C - c <= a.la - 262 && (a.V = $m(a, c));
      if (3 <= a.V)
        if (
          ((c = Um(a, a.C - a.vb, a.V - 3)),
          (a.G -= a.V),
          a.V <= a.fd && 3 <= a.G)
        ) {
          a.V--;
          do
            a.C++,
              (a.T = ((a.T << a.Pa) ^ a.window[a.C + 3 - 1]) & a.Oa),
              (a.Ja[a.C & a.Wa] = a.head[a.T]),
              (a.head[a.T] = a.C);
          while (0 !== --a.V);
          a.C++;
        } else
          (a.C += a.V),
            (a.V = 0),
            (a.T = a.window[a.C]),
            (a.T = ((a.T << a.Pa) ^ a.window[a.C + 1]) & a.Oa);
      else (c = Um(a, 0, a.window[a.C])), a.G--, a.C++;
      if (c && (Ym(a, !1), 0 === a.S.U)) return 1;
    }
    a.ka = 2 > a.C ? a.C : 2;
    return 4 === b
      ? (Ym(a, !0), 0 === a.S.U ? 3 : 4)
      : a.za && (Ym(a, !1), 0 === a.S.U)
      ? 1
      : 2;
  }
  function cn(a, b) {
    for (var c, d; ; ) {
      if (262 > a.G) {
        an(a);
        if (262 > a.G && 0 === b) return 1;
        if (0 === a.G) break;
      }
      c = 0;
      3 <= a.G &&
        ((a.T = ((a.T << a.Pa) ^ a.window[a.C + 3 - 1]) & a.Oa),
        (c = a.Ja[a.C & a.Wa] = a.head[a.T]),
        (a.head[a.T] = a.C));
      a.wa = a.V;
      a.se = a.vb;
      a.V = 2;
      0 !== c &&
        a.wa < a.fd &&
        a.C - c <= a.la - 262 &&
        ((a.V = $m(a, c)),
        5 >= a.V &&
          (1 === a.strategy || (3 === a.V && 4096 < a.C - a.vb)) &&
          (a.V = 2));
      if (3 <= a.wa && a.V <= a.wa) {
        d = a.C + a.G - 3;
        c = Um(a, a.C - 1 - a.se, a.wa - 3);
        a.G -= a.wa - 1;
        a.wa -= 2;
        do
          ++a.C <= d &&
            ((a.T = ((a.T << a.Pa) ^ a.window[a.C + 3 - 1]) & a.Oa),
            (a.Ja[a.C & a.Wa] = a.head[a.T]),
            (a.head[a.T] = a.C));
        while (0 !== --a.wa);
        a.eb = 0;
        a.V = 2;
        a.C++;
        if (c && (Ym(a, !1), 0 === a.S.U)) return 1;
      } else if (a.eb) {
        if (
          ((c = Um(a, 0, a.window[a.C - 1])) && Ym(a, !1),
          a.C++,
          a.G--,
          0 === a.S.U)
        )
          return 1;
      } else (a.eb = 1), a.C++, a.G--;
    }
    a.eb && (Um(a, 0, a.window[a.C - 1]), (a.eb = 0));
    a.ka = 2 > a.C ? a.C : 2;
    return 4 === b
      ? (Ym(a, !0), 0 === a.S.U ? 3 : 4)
      : a.za && (Ym(a, !1), 0 === a.S.U)
      ? 1
      : 2;
  }
  function dn(a, b) {
    for (var c, d, e, f = a.window; ; ) {
      if (258 >= a.G) {
        an(a);
        if (258 >= a.G && 0 === b) return 1;
        if (0 === a.G) break;
      }
      a.V = 0;
      if (
        3 <= a.G &&
        0 < a.C &&
        ((d = a.C - 1),
        (c = f[d]),
        c === f[++d] && c === f[++d] && c === f[++d])
      ) {
        for (
          e = a.C + 258;
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          c === f[++d] &&
          d < e;

        );
        a.V = 258 - (e - d);
        a.V > a.G && (a.V = a.G);
      }
      3 <= a.V
        ? ((c = Um(a, 1, a.V - 3)), (a.G -= a.V), (a.C += a.V), (a.V = 0))
        : ((c = Um(a, 0, a.window[a.C])), a.G--, a.C++);
      if (c && (Ym(a, !1), 0 === a.S.U)) return 1;
    }
    a.ka = 0;
    return 4 === b
      ? (Ym(a, !0), 0 === a.S.U ? 3 : 4)
      : a.za && (Ym(a, !1), 0 === a.S.U)
      ? 1
      : 2;
  }
  function en(a, b) {
    for (var c; ; ) {
      if (0 === a.G && (an(a), 0 === a.G)) {
        if (0 === b) return 1;
        break;
      }
      a.V = 0;
      c = Um(a, 0, a.window[a.C]);
      a.G--;
      a.C++;
      if (c && (Ym(a, !1), 0 === a.S.U)) return 1;
    }
    a.ka = 0;
    return 4 === b
      ? (Ym(a, !0), 0 === a.S.U ? 3 : 4)
      : a.za && (Ym(a, !1), 0 === a.S.U)
      ? 1
      : 2;
  }
  function fn(a, b, c, d, e) {
    this.Cf = a;
    this.wg = b;
    this.zg = c;
    this.vg = d;
    this.xf = e;
  }
  var gn;
  gn = [
    new fn(0, 0, 0, 0, function (a, b) {
      var c = 65535;
      for (c > a.Aa - 5 && (c = a.Aa - 5); ; ) {
        if (1 >= a.G) {
          an(a);
          if (0 === a.G && 0 === b) return 1;
          if (0 === a.G) break;
        }
        a.C += a.G;
        a.G = 0;
        var d = a.va + c;
        if (0 === a.C || a.C >= d)
          if (((a.G = a.C - d), (a.C = d), Ym(a, !1), 0 === a.S.U)) return 1;
        if (a.C - a.va >= a.la - 262 && (Ym(a, !1), 0 === a.S.U)) return 1;
      }
      a.ka = 0;
      if (4 === b) return Ym(a, !0), 0 === a.S.U ? 3 : 4;
      a.C > a.va && Ym(a, !1);
      return 1;
    }),
    new fn(4, 4, 8, 4, bn),
    new fn(4, 5, 16, 8, bn),
    new fn(4, 6, 32, 32, bn),
    new fn(4, 4, 16, 16, cn),
    new fn(8, 16, 32, 32, cn),
    new fn(8, 16, 128, 128, cn),
    new fn(8, 32, 128, 256, cn),
    new fn(32, 128, 258, 1024, cn),
    new fn(32, 258, 258, 4096, cn),
  ];
  function hn() {
    this.S = null;
    this.status = 0;
    this.ba = null;
    this.wrap = this.pending = this.Tb = this.Aa = 0;
    this.L = null;
    this.Ca = 0;
    this.method = 8;
    this.tb = -1;
    this.Wa = this.Bd = this.la = 0;
    this.window = null;
    this.Pe = 0;
    this.head = this.Ja = null;
    this.oe =
      this.Zd =
      this.strategy =
      this.level =
      this.fd =
      this.ke =
      this.wa =
      this.G =
      this.vb =
      this.C =
      this.eb =
      this.se =
      this.V =
      this.va =
      this.Pa =
      this.Oa =
      this.Xc =
      this.qc =
      this.T =
        0;
    this.ta = new S.Ka(1146);
    this.bb = new S.Ka(122);
    this.ja = new S.Ka(78);
    Wm(this.ta);
    Wm(this.bb);
    Wm(this.ja);
    this.Id = this.jc = this.uc = null;
    this.Ma = new S.Ka(16);
    this.da = new S.Ka(573);
    Wm(this.da);
    this.sb = this.Qa = 0;
    this.depth = new S.Ka(573);
    Wm(this.depth);
    this.ha =
      this.oa =
      this.ka =
      this.matches =
      this.zb =
      this.Ra =
      this.Jb =
      this.za =
      this.Sb =
      this.cd =
        0;
  }
  function jn(a, b) {
    if (!a || !a.state || 5 < b || 0 > b) return a ? Vm(a, -2) : -2;
    var c = a.state;
    if (!a.output || (!a.input && 0 !== a.na) || (666 === c.status && 4 !== b))
      return Vm(a, 0 === a.U ? -5 : -2);
    c.S = a;
    var d = c.tb;
    c.tb = b;
    if (42 === c.status)
      if (2 === c.wrap)
        (a.N = 0),
          T(c, 31),
          T(c, 139),
          T(c, 8),
          c.L
            ? (T(
                c,
                (c.L.text ? 1 : 0) +
                  (c.L.Sa ? 2 : 0) +
                  (c.L.extra ? 4 : 0) +
                  (c.L.name ? 8 : 0) +
                  (c.L.comment ? 16 : 0)
              ),
              T(c, c.L.time & 255),
              T(c, (c.L.time >> 8) & 255),
              T(c, (c.L.time >> 16) & 255),
              T(c, (c.L.time >> 24) & 255),
              T(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0),
              T(c, c.L.mi & 255),
              c.L.extra &&
                c.L.extra.length &&
                (T(c, c.L.extra.length & 255),
                T(c, (c.L.extra.length >> 8) & 255)),
              c.L.Sa && (a.N = im(a.N, c.ba, c.pending, 0)),
              (c.Ca = 0),
              (c.status = 69))
            : (T(c, 0),
              T(c, 0),
              T(c, 0),
              T(c, 0),
              T(c, 0),
              T(c, 9 === c.level ? 2 : 2 <= c.strategy || 2 > c.level ? 4 : 0),
              T(c, 3),
              (c.status = 113));
      else {
        var e = (8 + ((c.Bd - 8) << 4)) << 8;
        e |=
          (2 <= c.strategy || 2 > c.level
            ? 0
            : 6 > c.level
            ? 1
            : 6 === c.level
            ? 2
            : 3) << 6;
        0 !== c.C && (e |= 32);
        c.status = 113;
        Zm(c, e + (31 - (e % 31)));
        0 !== c.C && (Zm(c, a.N >>> 16), Zm(c, a.N & 65535));
        a.N = 1;
      }
    if (69 === c.status)
      if (c.L.extra) {
        for (
          e = c.pending;
          c.Ca < (c.L.extra.length & 65535) &&
          (c.pending !== c.Aa ||
            (c.L.Sa && c.pending > e && (a.N = im(a.N, c.ba, c.pending - e, e)),
            Xm(a),
            (e = c.pending),
            c.pending !== c.Aa));

        )
          T(c, c.L.extra[c.Ca] & 255), c.Ca++;
        c.L.Sa && c.pending > e && (a.N = im(a.N, c.ba, c.pending - e, e));
        c.Ca === c.L.extra.length && ((c.Ca = 0), (c.status = 73));
      } else c.status = 73;
    if (73 === c.status)
      if (c.L.name) {
        e = c.pending;
        do {
          if (
            c.pending === c.Aa &&
            (c.L.Sa && c.pending > e && (a.N = im(a.N, c.ba, c.pending - e, e)),
            Xm(a),
            (e = c.pending),
            c.pending === c.Aa)
          ) {
            var f = 1;
            break;
          }
          f = c.Ca < c.L.name.length ? c.L.name.charCodeAt(c.Ca++) & 255 : 0;
          T(c, f);
        } while (0 !== f);
        c.L.Sa && c.pending > e && (a.N = im(a.N, c.ba, c.pending - e, e));
        0 === f && ((c.Ca = 0), (c.status = 91));
      } else c.status = 91;
    if (91 === c.status)
      if (c.L.comment) {
        e = c.pending;
        do {
          if (
            c.pending === c.Aa &&
            (c.L.Sa && c.pending > e && (a.N = im(a.N, c.ba, c.pending - e, e)),
            Xm(a),
            (e = c.pending),
            c.pending === c.Aa)
          ) {
            f = 1;
            break;
          }
          f =
            c.Ca < c.L.comment.length
              ? c.L.comment.charCodeAt(c.Ca++) & 255
              : 0;
          T(c, f);
        } while (0 !== f);
        c.L.Sa && c.pending > e && (a.N = im(a.N, c.ba, c.pending - e, e));
        0 === f && (c.status = 103);
      } else c.status = 103;
    103 === c.status &&
      (c.L.Sa
        ? (c.pending + 2 > c.Aa && Xm(a),
          c.pending + 2 <= c.Aa &&
            (T(c, a.N & 255),
            T(c, (a.N >> 8) & 255),
            (a.N = 0),
            (c.status = 113)))
        : (c.status = 113));
    if (0 !== c.pending) {
      if ((Xm(a), 0 === a.U)) return (c.tb = -1), 0;
    } else if (
      0 === a.na &&
      (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) &&
      4 !== b
    )
      return Vm(a, -5);
    if (666 === c.status && 0 !== a.na) return Vm(a, -5);
    if (0 !== a.na || 0 !== c.G || (0 !== b && 666 !== c.status)) {
      d =
        2 === c.strategy
          ? en(c, b)
          : 3 === c.strategy
          ? dn(c, b)
          : gn[c.level].xf(c, b);
      if (3 === d || 4 === d) c.status = 666;
      if (1 === d || 3 === d) return 0 === a.U && (c.tb = -1), 0;
      if (
        2 === d &&
        (1 === b
          ? (Fm(c, 2, 3),
            Gm(c, 256, tm),
            16 === c.ha
              ? (Em(c, c.oa), (c.oa = 0), (c.ha = 0))
              : 8 <= c.ha &&
                ((c.ba[c.pending++] = c.oa & 255), (c.oa >>= 8), (c.ha -= 8)))
          : 5 !== b &&
            (Fm(c, 0, 3),
            Lm(c, 0, 0),
            3 === b &&
              (Wm(c.head), 0 === c.G && ((c.C = 0), (c.va = 0), (c.ka = 0)))),
        Xm(a),
        0 === a.U)
      )
        return (c.tb = -1), 0;
    }
    if (4 !== b) return 0;
    if (0 >= c.wrap) return 1;
    2 === c.wrap
      ? (T(c, a.N & 255),
        T(c, (a.N >> 8) & 255),
        T(c, (a.N >> 16) & 255),
        T(c, (a.N >> 24) & 255),
        T(c, a.ib & 255),
        T(c, (a.ib >> 8) & 255),
        T(c, (a.ib >> 16) & 255),
        T(c, (a.ib >> 24) & 255))
      : (Zm(c, a.N >>> 16), Zm(c, a.N & 65535));
    Xm(a);
    0 < c.wrap && (c.wrap = -c.wrap);
    return 0 !== c.pending ? 0 : 1;
  }
  var kn = {};
  kn = function () {
    this.input = null;
    this.ib = this.na = this.gb = 0;
    this.output = null;
    this.yd = this.U = this.xb = 0;
    this.msg = "";
    this.state = null;
    this.Oc = 2;
    this.N = 0;
  };
  var ln = Object.prototype.toString;
  function mn(a) {
    if (!(this instanceof mn)) return new mn(a);
    a = this.options = S.assign(
      {
        level: -1,
        method: 8,
        chunkSize: 16384,
        Xa: 15,
        yg: 8,
        strategy: 0,
        Va: "",
      },
      a || {}
    );
    a.raw && 0 < a.Xa
      ? (a.Xa = -a.Xa)
      : a.Df && 0 < a.Xa && 16 > a.Xa && (a.Xa += 16);
    this.err = 0;
    this.msg = "";
    this.ended = !1;
    this.chunks = [];
    this.S = new kn();
    this.S.U = 0;
    var b = this.S;
    var c = a.level,
      d = a.method,
      e = a.Xa,
      f = a.yg,
      g = a.strategy;
    if (b) {
      var h = 1;
      -1 === c && (c = 6);
      0 > e ? ((h = 0), (e = -e)) : 15 < e && ((h = 2), (e -= 16));
      if (
        1 > f ||
        9 < f ||
        8 !== d ||
        8 > e ||
        15 < e ||
        0 > c ||
        9 < c ||
        0 > g ||
        4 < g
      )
        b = Vm(b, -2);
      else {
        8 === e && (e = 9);
        var l = new hn();
        b.state = l;
        l.S = b;
        l.wrap = h;
        l.L = null;
        l.Bd = e;
        l.la = 1 << l.Bd;
        l.Wa = l.la - 1;
        l.Xc = f + 7;
        l.qc = 1 << l.Xc;
        l.Oa = l.qc - 1;
        l.Pa = ~~((l.Xc + 3 - 1) / 3);
        l.window = new S.jb(2 * l.la);
        l.head = new S.Ka(l.qc);
        l.Ja = new S.Ka(l.la);
        l.Sb = 1 << (f + 6);
        l.Aa = 4 * l.Sb;
        l.ba = new S.jb(l.Aa);
        l.Jb = 1 * l.Sb;
        l.cd = 3 * l.Sb;
        l.level = c;
        l.strategy = g;
        l.method = d;
        if (b && b.state) {
          b.ib = b.yd = 0;
          b.Oc = 2;
          c = b.state;
          c.pending = 0;
          c.Tb = 0;
          0 > c.wrap && (c.wrap = -c.wrap);
          c.status = c.wrap ? 42 : 113;
          b.N = 2 === c.wrap ? 0 : 1;
          c.tb = 0;
          if (!Tm) {
            d = Array(16);
            for (f = g = 0; 28 > f; f++)
              for (xm[f] = g, e = 0; e < 1 << pm[f]; e++) wm[g++] = f;
            wm[g - 1] = f;
            for (f = g = 0; 16 > f; f++)
              for (ym[f] = g, e = 0; e < 1 << qm[f]; e++) vm[g++] = f;
            for (g >>= 7; 30 > f; f++)
              for (ym[f] = g << 7, e = 0; e < 1 << (qm[f] - 7); e++)
                vm[256 + g++] = f;
            for (e = 0; 15 >= e; e++) d[e] = 0;
            for (e = 0; 143 >= e; ) (tm[2 * e + 1] = 8), e++, d[8]++;
            for (; 255 >= e; ) (tm[2 * e + 1] = 9), e++, d[9]++;
            for (; 279 >= e; ) (tm[2 * e + 1] = 7), e++, d[7]++;
            for (; 287 >= e; ) (tm[2 * e + 1] = 8), e++, d[8]++;
            Im(tm, 287, d);
            for (e = 0; 30 > e; e++)
              (um[2 * e + 1] = 5), (um[2 * e] = Hm(e, 5));
            Am = new zm(tm, pm, 257, 286, 15);
            Bm = new zm(um, qm, 0, 30, 15);
            Cm = new zm([], rm, 0, 19, 7);
            Tm = !0;
          }
          c.uc = new Dm(c.ta, Am);
          c.jc = new Dm(c.bb, Bm);
          c.Id = new Dm(c.ja, Cm);
          c.oa = 0;
          c.ha = 0;
          Jm(c);
          c = 0;
        } else c = Vm(b, -2);
        0 === c &&
          ((b = b.state),
          (b.Pe = 2 * b.la),
          Wm(b.head),
          (b.fd = gn[b.level].wg),
          (b.Zd = gn[b.level].Cf),
          (b.oe = gn[b.level].zg),
          (b.ke = gn[b.level].vg),
          (b.C = 0),
          (b.va = 0),
          (b.G = 0),
          (b.ka = 0),
          (b.V = b.wa = 2),
          (b.eb = 0),
          (b.T = 0));
        b = c;
      }
    } else b = -2;
    if (0 !== b) throw Error(nm[b]);
    a.header &&
      (b = this.S) &&
      b.state &&
      2 === b.state.wrap &&
      (b.state.L = a.header);
    if (a.Kb) {
      var k;
      "string" === typeof a.Kb
        ? (k = gm(a.Kb))
        : "[object ArrayBuffer]" === ln.call(a.Kb)
        ? (k = new Uint8Array(a.Kb))
        : (k = a.Kb);
      a = this.S;
      f = k;
      g = f.length;
      if (a && a.state)
        if (
          ((k = a.state),
          (b = k.wrap),
          2 === b || (1 === b && 42 !== k.status) || k.G)
        )
          b = -2;
        else {
          1 === b && (a.N = hm(a.N, f, g, 0));
          k.wrap = 0;
          g >= k.la &&
            (0 === b && (Wm(k.head), (k.C = 0), (k.va = 0), (k.ka = 0)),
            (c = new S.jb(k.la)),
            S.mb(c, f, g - k.la, k.la, 0),
            (f = c),
            (g = k.la));
          c = a.na;
          d = a.gb;
          e = a.input;
          a.na = g;
          a.gb = 0;
          a.input = f;
          for (an(k); 3 <= k.G; ) {
            f = k.C;
            g = k.G - 2;
            do
              (k.T = ((k.T << k.Pa) ^ k.window[f + 3 - 1]) & k.Oa),
                (k.Ja[f & k.Wa] = k.head[k.T]),
                (k.head[k.T] = f),
                f++;
            while (--g);
            k.C = f;
            k.G = 2;
            an(k);
          }
          k.C += k.G;
          k.va = k.C;
          k.ka = k.G;
          k.G = 0;
          k.V = k.wa = 2;
          k.eb = 0;
          a.gb = d;
          a.input = e;
          a.na = c;
          k.wrap = b;
          b = 0;
        }
      else b = -2;
      if (0 !== b) throw Error(nm[b]);
      this.Kh = !0;
    }
  }
  mn.prototype.push = function (a, b) {
    var c = this.S,
      d = this.options.chunkSize;
    if (this.ended) return !1;
    var e = b === ~~b ? b : !0 === b ? 4 : 0;
    "string" === typeof a
      ? (c.input = gm(a))
      : "[object ArrayBuffer]" === ln.call(a)
      ? (c.input = new Uint8Array(a))
      : (c.input = a);
    c.gb = 0;
    c.na = c.input.length;
    do {
      0 === c.U && ((c.output = new S.jb(d)), (c.xb = 0), (c.U = d));
      a = jn(c, e);
      if (1 !== a && 0 !== a) return nn(this, a), (this.ended = !0), !1;
      if (0 === c.U || (0 === c.na && (4 === e || 2 === e)))
        if ("string" === this.options.Va) {
          var f = S.wd(c.output, c.xb);
          b = f;
          f = f.length;
          if (65537 > f && ((b.subarray && fm) || !b.subarray))
            b = String.fromCharCode.apply(null, S.wd(b, f));
          else {
            for (var g = "", h = 0; h < f; h++) g += String.fromCharCode(b[h]);
            b = g;
          }
          this.chunks.push(b);
        } else (b = S.wd(c.output, c.xb)), this.chunks.push(b);
    } while ((0 < c.na || 0 === c.U) && 1 !== a);
    if (4 === e)
      return (
        (c = this.S) && c.state
          ? ((d = c.state.status),
            42 !== d &&
            69 !== d &&
            73 !== d &&
            91 !== d &&
            103 !== d &&
            113 !== d &&
            666 !== d
              ? (a = Vm(c, -2))
              : ((c.state = null), (a = 113 === d ? Vm(c, -3) : 0)))
          : (a = -2),
        nn(this, a),
        (this.ended = !0),
        0 === a
      );
    2 === e && (nn(this, 0), (c.U = 0));
    return !0;
  };
  function nn(a, b) {
    0 === b &&
      (a.result =
        "string" === a.options.Va ? a.chunks.join("") : S.Sd(a.chunks));
    a.chunks = [];
    a.err = b;
    a.msg = a.S.msg;
  }
  function on(a) {
    this.name = a;
  }
  var pn = new on("rawColdConfigGroup");
  var qn = new on("rawHotConfigGroup");
  function rn(a) {
    this.M = K(a);
  }
  y(rn, M);
  rn.prototype.g = function (a) {
    L(this, 5, a);
  };
  function sn(a) {
    this.M = K(a);
  }
  y(sn, M);
  function tn(a) {
    this.M = K(a);
  }
  y(tn, M);
  tn.hb = [2];
  function un(a) {
    this.M = K(a);
  }
  y(un, M);
  un.prototype.qb = function () {
    return Cf(this, 61);
  };
  un.prototype.getPlayerType = function () {
    return Cf(this, 36);
  };
  un.prototype.setHomeGroupInfo = function (a) {
    return yf(this, tn, 81, a);
  };
  un.hb = [9, 66, 32, 86, 100, 101];
  function vn(a) {
    this.M = K(a);
  }
  y(vn, M);
  var wn = [2, 3, 4, 5, 6];
  function xn(a) {
    this.M = K(a);
  }
  y(xn, M);
  xn.hb = [15, 26, 28];
  function yn(a) {
    this.M = K(a);
  }
  y(yn, M);
  yn.hb = [5];
  function zn(a) {
    this.M = K(a);
  }
  y(zn, M);
  function An(a) {
    this.M = K(a);
  }
  y(An, M);
  An.prototype.setSafetyMode = function (a) {
    return Ff(this, 5, a);
  };
  An.hb = [12];
  function Bn(a) {
    this.M = K(a);
  }
  y(Bn, M);
  Bn.hb = [12];
  var Cn = {
    Jh: "WEB_DISPLAY_MODE_UNKNOWN",
    Fh: "WEB_DISPLAY_MODE_BROWSER",
    Hh: "WEB_DISPLAY_MODE_MINIMAL_UI",
    Ih: "WEB_DISPLAY_MODE_STANDALONE",
    Gh: "WEB_DISPLAY_MODE_FULLSCREEN",
  };
  function Dn(a) {
    this.M = K(a);
  }
  y(Dn, M);
  function En(a) {
    this.M = K(a);
  }
  y(En, M);
  En.prototype.l = function () {
    var a = void 0 === a ? 0 : a;
    var b = pf(this, 2);
    if (null != b)
      if (Ke(b)) {
        var c;
        "number" === typeof b ? (c = Oe(b)) : (c = Me(b));
        b = c;
      } else b = void 0;
    return null != b ? b : a;
  };
  function Fn(a) {
    this.M = K(a);
  }
  y(Fn, M);
  function Gn(a) {
    this.M = K(a, 497);
  }
  y(Gn, M);
  var Hn = [
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
  function In(a) {
    this.M = K(a);
  }
  y(In, M);
  function Jn(a) {
    this.M = K(a);
  }
  y(Jn, M);
  Jn.prototype.getPlaylistId = function () {
    return Df(this, 2);
  };
  var Ef = [1, 2];
  function Kn(a) {
    this.M = K(a);
  }
  y(Kn, M);
  Kn.hb = [3];
  var Ln = C.window,
    Mn,
    Nn,
    On =
      (null == Ln ? void 0 : null == (Mn = Ln.yt) ? void 0 : Mn.config_) ||
      (null == Ln ? void 0 : null == (Nn = Ln.ytcfg) ? void 0 : Nn.data_) ||
      {};
  H("yt.config_", On);
  function Pn() {
    var a = arguments;
    1 < a.length
      ? (On[a[0]] = a[1])
      : 1 === a.length && Object.assign(On, a[0]);
  }
  function U(a, b) {
    return a in On ? On[a] : b;
  }
  var Qn = {};
  function Rn() {
    return (
      Qn.clicktracking ||
      (Qn.clicktracking = "clicktracking".replace(
        /\-([a-z])/g,
        function (a, b) {
          return b.toUpperCase();
        }
      ))
    );
  }
  function V(a) {
    a = Sn(a);
    return "string" === typeof a && "false" === a ? !1 : !!a;
  }
  function Tn(a, b) {
    a = Sn(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0);
  }
  function Sn(a) {
    return U("EXPERIMENT_FLAGS", {})[a];
  }
  function Un() {
    for (
      var a = [],
        b = U("EXPERIMENTS_FORCED_FLAGS", {}),
        c = w(Object.keys(b)),
        d = c.next();
      !d.done;
      d = c.next()
    )
      (d = d.value), a.push({ key: d, value: String(b[d]) });
    c = U("EXPERIMENT_FLAGS", {});
    d = w(Object.keys(c));
    for (var e = d.next(); !e.done; e = d.next())
      (e = e.value),
        e.startsWith("force_") &&
          void 0 === b[e] &&
          a.push({ key: e, value: String(c[e]) });
    return a;
  }
  function Vn(a, b, c, d) {
    Yf.set("" + a, b, {
      ed: c,
      path: "/",
      domain: void 0 === d ? "youtube.com" : d,
      secure: !1,
    });
  }
  var Wn = [];
  function Xn(a) {
    Wn.forEach(function (b) {
      return b(a);
    });
  }
  function Yn(a) {
    return a && window.yterr
      ? function () {
          try {
            return a.apply(this, arguments);
          } catch (b) {
            Zn(b);
          }
        }
      : a;
  }
  function Zn(a) {
    var b = D("yt.logging.errors.log");
    b
      ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0)
      : ((b = U("ERRORS", [])),
        b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]),
        Pn("ERRORS", b));
    Xn(a);
  }
  function $n(a, b, c, d, e) {
    var f = D("yt.logging.errors.log");
    f
      ? f(a, "WARNING", b, c, d, void 0, e)
      : ((f = U("ERRORS", [])),
        f.push([a, "WARNING", b, c, d, void 0, e]),
        Pn("ERRORS", f));
  }
  var ao = /^[\w.]*$/,
    bo = { q: !0, search_query: !0 };
  function co(a, b) {
    b = a.split(b);
    for (var c = {}, d = 0, e = b.length; d < e; d++) {
      var f = b[d].split("=");
      if ((1 === f.length && f[0]) || 2 === f.length)
        try {
          var g = eo(f[0] || ""),
            h = eo(f[1] || "");
          if (g in c) {
            var l = c[g];
            Array.isArray(l) ? rb(l, h) : (c[g] = [l, h]);
          } else c[g] = h;
        } catch (r) {
          var k = r,
            n = f[0],
            p = String(co);
          k.args = [
            {
              key: n,
              value: f[1],
              query: a,
              method: fo === p ? "unchanged" : p,
            },
          ];
          bo.hasOwnProperty(n) || $n(k);
        }
    }
    return c;
  }
  var fo = String(co);
  function go(a) {
    var b = [];
    sb(a, function (c, d) {
      var e = encodeURIComponent(String(d));
      c = Array.isArray(c) ? c : [c];
      ob(c, function (f) {
        "" == f ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(f)));
      });
    });
    return b.join("&");
  }
  function ho(a) {
    "?" === a.charAt(0) && (a = a.substring(1));
    return co(a, "&");
  }
  function io(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = ho(e[1] || "");
    for (var f in b) (!c && null !== e && f in e) || (e[f] = b[f]);
    return Nb(a, e) + d;
  }
  function jo(a) {
    if (!b) var b = window.location.href;
    var c = a.match(Gb)[1] || null,
      d = Ib(a);
    c && d
      ? ((a = a.match(Gb)),
        (b = b.match(Gb)),
        (a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]))
      : (a = d
          ? Ib(b) === d &&
            (Number(b.match(Gb)[4] || null) || null) ===
              (Number(a.match(Gb)[4] || null) || null)
          : !0);
    return a;
  }
  function eo(a) {
    return a && a.match(ao) ? a : Fb(a);
  }
  var ko = Sd || Td;
  function lo(a) {
    var b = Wb();
    return b ? 0 <= b.toLowerCase().indexOf(a) : !1;
  }
  var mo = Date.now().toString();
  function no(a) {
    var b = oo;
    a = void 0 === a ? D("yt.ads.biscotti.lastId_") || "" : a;
    var c = Object,
      d = c.assign,
      e = {};
    e.dt = Qf;
    e.flash = "0";
    a: {
      try {
        var f = b.g.top.location.href;
      } catch (jb) {
        f = 2;
        break a;
      }
      f = f ? (f === b.l.location.href ? 0 : 1) : 2;
    }
    e = ((e.frm = f), e);
    try {
      e.u_tz = -new Date().getTimezoneOffset();
      var g = void 0 === g ? Hf : g;
      try {
        var h = g.history.length;
      } catch (jb) {
        h = 0;
      }
      e.u_his = h;
      var l;
      e.u_h = null == (l = Hf.screen) ? void 0 : l.height;
      var k;
      e.u_w = null == (k = Hf.screen) ? void 0 : k.width;
      var n;
      e.u_ah = null == (n = Hf.screen) ? void 0 : n.availHeight;
      var p;
      e.u_aw = null == (p = Hf.screen) ? void 0 : p.availWidth;
      var r;
      e.u_cd = null == (r = Hf.screen) ? void 0 : r.colorDepth;
    } catch (jb) {}
    h = b.g;
    try {
      var q = h.screenX;
      var t = h.screenY;
    } catch (jb) {}
    try {
      var u = h.outerWidth;
      var z = h.outerHeight;
    } catch (jb) {}
    try {
      var E = h.innerWidth;
      var Q = h.innerHeight;
    } catch (jb) {}
    try {
      var X = h.screenLeft;
      var da = h.screenTop;
    } catch (jb) {}
    try {
      (E = h.innerWidth), (Q = h.innerHeight);
    } catch (jb) {}
    try {
      var kb = h.screen.availWidth;
      var Ki = h.screen.availTop;
    } catch (jb) {}
    q = [X, da, q, t, kb, Ki, u, z, E, Q];
    t = b.g.top;
    try {
      var Hc = (t || window).document,
        lb = "CSS1Compat" == Hc.compatMode ? Hc.documentElement : Hc.body;
      var Va = new ld(lb.clientWidth, lb.clientHeight).round();
    } catch (jb) {
      Va = new ld(-12245933, -12245933);
    }
    Hc = Va;
    Va = {};
    var Wa = void 0 === Wa ? C : Wa;
    lb = new yl();
    "SVGElement" in Wa && "createElementNS" in Wa.document && lb.set(0);
    t = Nf();
    t["allow-top-navigation-by-user-activation"] && lb.set(1);
    t["allow-popups-to-escape-sandbox"] && lb.set(2);
    Wa.crypto && Wa.crypto.subtle && lb.set(3);
    "TextDecoder" in Wa && "TextEncoder" in Wa && lb.set(4);
    Wa = zl(lb);
    Va.bc = Wa;
    Va.bih = Hc.height;
    Va.biw = Hc.width;
    Va.brdim = q.join();
    b = b.l;
    b =
      ((Va.vis = b.prerendering
        ? 3
        : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
            b.visibilityState ||
              b.webkitVisibilityState ||
              b.mozVisibilityState ||
              ""
          ] || 0),
      (Va.wgl = !!Hf.WebGLRenderingContext),
      Va);
    c = d.call(c, e, b);
    c.ca_type = "image";
    a && (c.bid = a);
    return c;
  }
  var oo = new (function () {
    var a = window.document;
    this.g = window;
    this.l = a;
  })();
  H("yt.ads_.signals_.getAdSignalsString", function (a) {
    return go(no(a));
  });
  G();
  var po =
    "XMLHttpRequest" in C
      ? function () {
          return new XMLHttpRequest();
        }
      : null;
  function qo() {
    if (!po) return null;
    var a = po();
    return "open" in a ? a : null;
  }
  function ro(a, b) {
    "function" === typeof a && (a = Yn(a));
    return window.setTimeout(a, b);
  }
  var so =
    "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(
      " "
    );
  x(so);
  var to = {
      Authorization: "AUTHORIZATION",
      "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
      "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
      "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
      "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
      "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
      "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
      "X-YouTube-Delegation-Context":
        "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
      "X-YouTube-Device": "DEVICE",
      "X-Youtube-Identity-Token": "ID_TOKEN",
      "X-YouTube-Page-CL": "PAGE_CL",
      "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
      "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM",
      "X-Goog-AuthUser": "SESSION_INDEX",
      "X-Goog-PageId": "DELEGATED_SESSION_ID",
    },
    uo =
      "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address"
        .split(" ")
        .concat(x(so)),
    vo = !1;
  function wo(a, b, c, d, e, f, g, h) {
    function l() {
      4 === (k && "readyState" in k ? k.readyState : 0) && b && Yn(b)(k);
    }
    c = void 0 === c ? "GET" : c;
    d = void 0 === d ? "" : d;
    h = void 0 === h ? !1 : h;
    var k = qo();
    if (!k) return null;
    "onloadend" in k
      ? k.addEventListener("loadend", l, !1)
      : (k.onreadystatechange = l);
    V("debug_forward_web_query_parameters") && (a = xo(a));
    k.open(c, a, !0);
    f && (k.responseType = f);
    g && (k.withCredentials = !0);
    c =
      "POST" === c && (void 0 === window.FormData || !(d instanceof FormData));
    if ((e = yo(a, e)))
      for (var n in e)
        k.setRequestHeader(n, e[n]),
          "content-type" === n.toLowerCase() && (c = !1);
    c &&
      k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    if (h && "setAttributionReporting" in XMLHttpRequest.prototype) {
      a = { eventSourceEligible: !0, triggerEligible: !1 };
      try {
        k.setAttributionReporting(a);
      } catch (p) {
        $n(p);
      }
    }
    k.send(d);
    return k;
  }
  function yo(a, b) {
    b = void 0 === b ? {} : b;
    var c = jo(a),
      d = V("web_ajax_ignore_global_headers_if_set"),
      e;
    for (e in to) {
      var f = U(to[e]),
        g = "X-Goog-AuthUser" === e || "X-Goog-PageId" === e;
      "X-Goog-Visitor-Id" !== e || f || (f = U("VISITOR_DATA"));
      !f ||
        (!c && Ib(a)) ||
        (d && void 0 !== b[e]) ||
        ("TVHTML5_UNPLUGGED" === U("INNERTUBE_CLIENT_NAME") && g) ||
        (b[e] = f);
    }
    "X-Goog-EOM-Visitor-Id" in b &&
      "X-Goog-Visitor-Id" in b &&
      delete b["X-Goog-Visitor-Id"];
    if (c || !Ib(a))
      b["X-YouTube-Utc-Offset"] = String(-new Date().getTimezoneOffset());
    if (c || !Ib(a)) {
      try {
        var h = new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (l) {}
      h && (b["X-YouTube-Time-Zone"] = h);
    }
    document.location.hostname.endsWith("youtubeeducation.com") ||
      (!c && Ib(a)) ||
      (b["X-YouTube-Ad-Signals"] = go(no()));
    return b;
  }
  function zo(a, b) {
    b.method = "POST";
    b.postParams || (b.postParams = {});
    return Ao(a, b);
  }
  function Ao(a, b) {
    var c = b.format || "JSON";
    a = Bo(a, b);
    var d = Co(a, b),
      e = !1,
      f = Do(
        a,
        function (l) {
          if (!e) {
            e = !0;
            h && window.clearTimeout(h);
            a: switch (l && "status" in l ? l.status : -1) {
              case 200:
              case 201:
              case 202:
              case 203:
              case 204:
              case 205:
              case 206:
              case 304:
                var k = !0;
                break a;
              default:
                k = !1;
            }
            var n = null,
              p = 400 <= l.status && 500 > l.status,
              r = 500 <= l.status && 600 > l.status;
            if (k || p || r) n = Eo(a, c, l, b.convertToSafeHtml);
            k && (k = Fo(c, l, n));
            n = n || {};
            p = b.context || C;
            k
              ? b.onSuccess && b.onSuccess.call(p, l, n)
              : b.onError && b.onError.call(p, l, n);
            b.onFinish && b.onFinish.call(p, l, n);
          }
        },
        b.method,
        d,
        b.headers,
        b.responseType,
        b.withCredentials
      );
    d = b.timeout || 0;
    if (b.onTimeout && 0 < d) {
      var g = b.onTimeout;
      var h = ro(function () {
        e ||
          ((e = !0),
          f.abort(),
          window.clearTimeout(h),
          g.call(b.context || C, f));
      }, d);
    }
    return f;
  }
  function Bo(a, b) {
    b.includeDomain &&
      (a =
        document.location.protocol +
        "//" +
        document.location.hostname +
        (document.location.port ? ":" + document.location.port : "") +
        a);
    var c = U("XSRF_FIELD_NAME");
    if ((b = b.urlParams)) b[c] && delete b[c], (a = io(a, b || {}, !0));
    return a;
  }
  function Co(a, b) {
    var c = U("XSRF_FIELD_NAME"),
      d = U("XSRF_TOKEN"),
      e = b.postBody || "",
      f = b.postParams,
      g = U("XSRF_FIELD_NAME"),
      h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf ||
      (Ib(a) && !b.withCredentials && Ib(a) !== document.location.hostname) ||
      "POST" !== b.method ||
      (h && "application/x-www-form-urlencoded" !== h) ||
      (b.postParams && b.postParams[g]) ||
      (f || (f = {}), (f[c] = d));
    ((V("ajax_parse_query_data_only_when_filled") &&
      f &&
      0 < Object.keys(f).length) ||
      f) &&
      "string" === typeof e &&
      ((e = ho(e)),
      vb(e, f),
      (e =
        b.postBodyFormat && "JSON" === b.postBodyFormat
          ? JSON.stringify(e)
          : Mb(e)));
    if (!(a = e) && (a = f)) {
      a: {
        for (var l in f) {
          f = !1;
          break a;
        }
        f = !0;
      }
      a = !f;
    }
    !vo &&
      a &&
      "POST" !== b.method &&
      ((vo = !0), Zn(Error("AJAX request with postData should use POST")));
    return e;
  }
  function Eo(a, b, c, d) {
    var e = null;
    switch (b) {
      case "JSON":
        try {
          var f = c.responseText;
        } catch (g) {
          throw (
            ((d = Error("Error reading responseText")),
            (d.params = a),
            $n(d),
            g)
          );
        }
        a = c.getResponseHeader("Content-Type") || "";
        f &&
          0 <= a.indexOf("json") &&
          (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)),
          (e = JSON.parse(f)));
        break;
      case "XML":
        if ((a = (a = c.responseXML) ? Go(a) : null))
          (e = {}),
            ob(a.getElementsByTagName("*"), function (g) {
              e[g.tagName] = Ho(g);
            });
    }
    d && Io(e);
    return e;
  }
  function Io(a) {
    if (Ja(a))
      for (var b in a) {
        var c;
        (c = "html_content" === b) ||
          ((c = b.length - 5), (c = 0 <= c && b.indexOf("_html", c) == c));
        if (c) {
          c = b;
          var d = Ab(a[b]);
          a[c] = d;
        } else Io(a[b]);
      }
  }
  function Fo(a, b, c) {
    if (b && 204 === b.status) return !0;
    switch (a) {
      case "JSON":
        return !!c;
      case "XML":
        return 0 === Number(c && c.return_code);
      case "RAW":
        return !0;
      default:
        return !!c;
    }
  }
  function Go(a) {
    return a
      ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName(
          "root"
        )) && 0 < a.length
        ? a[0]
        : null
      : null;
  }
  function Ho(a) {
    var b = "";
    ob(a.childNodes, function (c) {
      b += c.nodeValue;
    });
    return b;
  }
  function xo(a) {
    var b = window.location.search,
      c = Ib(a);
    V("debug_handle_relative_url_for_query_forward_killswitch") ||
      (!c && jo(a) && (c = document.location.hostname));
    var d = Hb(a.match(Gb)[5] || null);
    d =
      (c =
        c &&
        (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) &&
      d &&
      d.startsWith("/api/");
    if (!c || d) return a;
    var e = ho(b),
      f = {};
    ob(uo, function (g) {
      e[g] && (f[g] = e[g]);
    });
    return io(a, f || {}, !1);
  }
  var Do = wo;
  function Jo() {
    if (!C.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
    try {
      return C.matchMedia("(display-mode: standalone)").matches
        ? "WEB_DISPLAY_MODE_STANDALONE"
        : C.matchMedia("(display-mode: minimal-ui)").matches
        ? "WEB_DISPLAY_MODE_MINIMAL_UI"
        : C.matchMedia("(display-mode: fullscreen)").matches
        ? "WEB_DISPLAY_MODE_FULLSCREEN"
        : C.matchMedia("(display-mode: browser)").matches
        ? "WEB_DISPLAY_MODE_BROWSER"
        : "WEB_DISPLAY_MODE_UNKNOWN";
    } catch (a) {
      return "WEB_DISPLAY_MODE_UNKNOWN";
    }
  }
  function Ko() {}
  function Lo(a) {
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
  H("ytglobal.prefsUserPrefsPrefs_", D("ytglobal.prefsUserPrefsPrefs_") || {});
  var Mo = {
      bluetooth: "CONN_DISCO",
      cellular: "CONN_CELLULAR_UNKNOWN",
      ethernet: "CONN_WIFI",
      none: "CONN_NONE",
      wifi: "CONN_WIFI",
      wimax: "CONN_CELLULAR_4G",
      other: "CONN_UNKNOWN",
      unknown: "CONN_UNKNOWN",
      "slow-2g": "CONN_CELLULAR_2G",
      "2g": "CONN_CELLULAR_2G",
      "3g": "CONN_CELLULAR_3G",
      "4g": "CONN_CELLULAR_4G",
    },
    No = {
      CONN_DEFAULT: 0,
      CONN_UNKNOWN: 1,
      CONN_NONE: 2,
      CONN_WIFI: 3,
      CONN_CELLULAR_2G: 4,
      CONN_CELLULAR_3G: 5,
      CONN_CELLULAR_4G: 6,
      CONN_CELLULAR_UNKNOWN: 7,
      CONN_DISCO: 8,
      CONN_CELLULAR_5G: 9,
      CONN_WIFI_METERED: 10,
      CONN_CELLULAR_5G_SA: 11,
      CONN_CELLULAR_5G_NSA: 12,
      CONN_WIRED: 30,
      CONN_INVALID: 31,
    },
    Oo = {
      EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
      EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
      EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
      EFFECTIVE_CONNECTION_TYPE_2G: 3,
      EFFECTIVE_CONNECTION_TYPE_3G: 4,
      EFFECTIVE_CONNECTION_TYPE_4G: 5,
    },
    Po = {
      "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
      "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
      "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
      "4g": "EFFECTIVE_CONNECTION_TYPE_4G",
    };
  function Qo() {
    var a = C.navigator;
    return a ? a.connection : void 0;
  }
  function Ro(a) {
    var b = Da.apply(1, arguments);
    var c = Error.call(this, a);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.args = [].concat(x(b));
  }
  y(Ro, Error);
  function So() {
    try {
      return To(), !0;
    } catch (a) {
      return !1;
    }
  }
  function To() {
    if (void 0 !== U("DATASYNC_ID")) return U("DATASYNC_ID");
    throw new Ro("Datasync ID not set", "unknown");
  }
  function Uo() {}
  function Vo(a, b) {
    return gg.Za(a, 0, b);
  }
  Uo.prototype.Ha = function (a, b) {
    return this.Za(a, 1, b);
  };
  Uo.prototype.Gb = function (a) {
    var b = D("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a();
  };
  var Wo = Tn("web_emulated_idle_callback_delay", 300),
    Xo = 1e3 / 60 - 3,
    Yo = [8, 5, 4, 3, 2, 1, 0];
  function Zo(a) {
    a = void 0 === a ? {} : a;
    Rb.call(this);
    this.l = [];
    this.i = {};
    this.I = this.g = 0;
    this.H = this.s = !1;
    this.B = [];
    this.D = this.J = !1;
    for (var b = w(Yo), c = b.next(); !c.done; c = b.next())
      this.l[c.value] = [];
    this.o = 0;
    this.ma = a.timeout || 1;
    this.A = Xo;
    this.u = 0;
    this.K = this.Cg.bind(this);
    this.ea = this.Zg.bind(this);
    this.X = this.Xe.bind(this);
    this.Y = this.Zf.bind(this);
    this.ca = this.Hg.bind(this);
    this.W =
      !!window.requestIdleCallback &&
      !!window.cancelIdleCallback &&
      !V("disable_scheduler_requestIdleCallback");
    (this.F = !1 !== a.useRaf && !!window.requestAnimationFrame) &&
      document.addEventListener("visibilitychange", this.K);
  }
  y(Zo, Rb);
  m = Zo.prototype;
  m.Gb = function (a) {
    var b = G();
    $o(a);
    a = G() - b;
    this.s || (this.A -= a);
  };
  m.Za = function (a, b, c) {
    ++this.I;
    if (10 === b) return this.Gb(a), this.I;
    var d = this.I;
    this.i[d] = a;
    this.s && !c
      ? this.B.push({ id: d, priority: b })
      : (this.l[b].push(d),
        this.H ||
          this.s ||
          (0 !== this.g && ap(this) !== this.u && bp(this), this.start()));
    return d;
  };
  m.xa = function (a) {
    delete this.i[a];
  };
  function cp(a) {
    a.B.length = 0;
    for (var b = 5; 0 <= b; b--) a.l[b].length = 0;
    a.l[8].length = 0;
    a.i = {};
    bp(a);
  }
  function ap(a) {
    if (a.l[8].length) {
      if (a.D) return 4;
      if (!document.hidden && a.F) return 3;
    }
    for (var b = 5; b >= a.o; b--)
      if (0 < a.l[b].length)
        return 0 < b ? (!document.hidden && a.F ? 3 : 2) : 1;
    return 0;
  }
  function dp(a) {
    var b = D("yt.logging.errors.log");
    b && b(a);
  }
  function $o(a) {
    try {
      a();
    } catch (b) {
      dp(b);
    }
  }
  function ep(a) {
    for (var b = w(Yo), c = b.next(); !c.done; c = b.next())
      if (a.l[c.value].length) return !0;
    return !1;
  }
  m.Zf = function (a) {
    var b = void 0;
    a && (b = a.timeRemaining());
    this.J = !0;
    fp(this, b);
    this.J = !1;
  };
  m.Zg = function () {
    fp(this);
  };
  m.Xe = function () {
    gp(this);
  };
  m.Hg = function (a) {
    this.D = !0;
    var b = ap(this);
    4 === b && b !== this.u && (bp(this), this.start());
    fp(this, void 0, a);
    this.D = !1;
  };
  m.Cg = function () {
    document.hidden || gp(this);
    this.g && (bp(this), this.start());
  };
  function gp(a) {
    bp(a);
    a.s = !0;
    for (var b = G(), c = a.l[8]; c.length; ) {
      var d = c.shift(),
        e = a.i[d];
      delete a.i[d];
      e && $o(e);
    }
    hp(a);
    a.s = !1;
    ep(a) && a.start();
    b = G() - b;
    a.A -= b;
  }
  function hp(a) {
    for (var b = 0, c = a.B.length; b < c; b++) {
      var d = a.B[b];
      a.l[d.priority].push(d.id);
    }
    a.B.length = 0;
  }
  function fp(a, b, c) {
    (a.D && 4 === a.u && a.g) || bp(a);
    a.s = !0;
    b = G() + (b || a.A);
    for (var d = a.l[5]; d.length; ) {
      var e = d.shift(),
        f = a.i[e];
      delete a.i[e];
      if (f)
        try {
          f(c);
        } catch (k) {
          dp(k);
        }
    }
    for (d = a.l[4]; d.length; )
      (c = d.shift()), (e = a.i[c]), delete a.i[c], e && $o(e);
    d = a.J ? 0 : 1;
    d = a.o > d ? a.o : d;
    if (!(G() >= b)) {
      do {
        a: {
          c = a;
          e = d;
          for (f = 3; f >= e; f--)
            for (var g = c.l[f]; g.length; ) {
              var h = g.shift(),
                l = c.i[h];
              delete c.i[h];
              if (l) {
                c = l;
                break a;
              }
            }
          c = null;
        }
        c && $o(c);
      } while (c && G() < b);
    }
    a.s = !1;
    hp(a);
    a.A = Xo;
    ep(a) && a.start();
  }
  m.start = function () {
    this.H = !1;
    if (0 === this.g)
      switch (((this.u = ap(this)), this.u)) {
        case 1:
          var a = this.Y;
          this.g = this.W
            ? window.requestIdleCallback(a, { timeout: 3e3 })
            : window.setTimeout(a, Wo);
          break;
        case 2:
          this.g = window.setTimeout(this.ea, this.ma);
          break;
        case 3:
          this.g = window.requestAnimationFrame(this.ca);
          break;
        case 4:
          this.g = window.setTimeout(this.X, 0);
      }
  };
  function bp(a) {
    if (a.g) {
      switch (a.u) {
        case 1:
          var b = a.g;
          a.W ? window.cancelIdleCallback(b) : window.clearTimeout(b);
          break;
        case 2:
        case 4:
          window.clearTimeout(a.g);
          break;
        case 3:
          window.cancelAnimationFrame(a.g);
      }
      a.g = 0;
    }
  }
  m.Ba = function () {
    cp(this);
    bp(this);
    this.F && document.removeEventListener("visibilitychange", this.K);
    Rb.prototype.Ba.call(this);
  };
  var ip = D("yt.scheduler.instance.timerIdMap_") || {},
    jp = Tn("kevlar_tuner_scheduler_soft_state_timer_ms", 800),
    kp = 0,
    lp = 0;
  function mp() {
    var a = D("ytglobal.schedulerInstanceInstance_");
    if (!a || a.ab)
      (a = new Zo(U("scheduler") || {})),
        H("ytglobal.schedulerInstanceInstance_", a);
    return a;
  }
  function np() {
    op();
    var a = D("ytglobal.schedulerInstanceInstance_");
    a &&
      (a && "function" == typeof a.dispose && a.dispose(),
      H("ytglobal.schedulerInstanceInstance_", null));
  }
  function op() {
    cp(mp());
    for (var a in ip) ip.hasOwnProperty(a) && delete ip[Number(a)];
  }
  function pp(a, b, c) {
    if (!c) return (c = void 0 === c), -mp().Za(a, b, c);
    var d = window.setTimeout(function () {
      var e = mp().Za(a, b);
      ip[d] = e;
    }, c);
    return d;
  }
  function qp(a) {
    mp().Gb(a);
  }
  function rp(a) {
    var b = mp();
    if (0 > a) b.xa(-a);
    else {
      var c = ip[a];
      c ? (b.xa(c), delete ip[a]) : window.clearTimeout(a);
    }
  }
  function sp() {
    tp();
  }
  function tp() {
    window.clearTimeout(kp);
    mp().start();
  }
  function up() {
    var a = mp();
    bp(a);
    a.H = !0;
    window.clearTimeout(kp);
    kp = window.setTimeout(sp, jp);
  }
  function vp() {
    window.clearTimeout(lp);
    lp = window.setTimeout(function () {
      wp(0);
    }, jp);
  }
  function wp(a) {
    vp();
    var b = mp();
    b.o = a;
    b.start();
  }
  function xp(a) {
    vp();
    var b = mp();
    b.o > a && ((b.o = a), b.start());
  }
  function yp() {
    window.clearTimeout(lp);
    var a = mp();
    a.o = 0;
    a.start();
  }
  function zp() {
    Uo.apply(this, arguments);
  }
  y(zp, Uo);
  function Ap() {
    zp.g || (zp.g = new zp());
    return zp.g;
  }
  zp.prototype.Za = function (a, b, c) {
    void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
    var d = D("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : ro(a, c || 0);
  };
  zp.prototype.xa = function (a) {
    if (void 0 === a || !Number.isNaN(Number(a))) {
      var b = D("yt.scheduler.instance.cancelJob");
      b ? b(a) : window.clearTimeout(a);
    }
  };
  zp.prototype.start = function () {
    var a = D("yt.scheduler.instance.start");
    a && a();
  };
  var gg = Ap();
  V("web_scheduler_auto_init") &&
    !D("yt.scheduler.initialized") &&
    (H("yt.scheduler.instance.dispose", np),
    H("yt.scheduler.instance.addJob", pp),
    H("yt.scheduler.instance.addImmediateJob", qp),
    H("yt.scheduler.instance.cancelJob", rp),
    H("yt.scheduler.instance.cancelAllJobs", op),
    H("yt.scheduler.instance.start", tp),
    H("yt.scheduler.instance.pause", up),
    H("yt.scheduler.instance.setPriorityThreshold", wp),
    H("yt.scheduler.instance.enablePriorityThreshold", xp),
    H("yt.scheduler.instance.clearPriorityThreshold", yp),
    H("yt.scheduler.initialized", !0));
  function Bp(a) {
    var b = new am();
    this.g = (a = (b.l = $l(b.g)) ? (a ? new bm(b, a) : b) : null)
      ? new Vl(a)
      : null;
    this.l = document.domain || window.location.hostname;
  }
  Bp.prototype.set = function (a, b, c, d) {
    c = c || 31104e3;
    this.remove(a);
    if (this.g)
      try {
        this.g.set(a, b, Date.now() + 1e3 * c);
        return;
      } catch (f) {}
    var e = "";
    if (d)
      try {
        e = escape(Jl(b));
      } catch (f) {
        return;
      }
    else e = escape(b);
    Vn(a, e, c, this.l);
  };
  Bp.prototype.get = function (a, b) {
    var c = void 0,
      d = !this.g;
    if (!d)
      try {
        c = this.g.get(a);
      } catch (e) {
        d = !0;
      }
    if (d && (c = Yf.get("" + a, void 0)) && ((c = unescape(c)), b))
      try {
        c = JSON.parse(c);
      } catch (e) {
        this.remove(a), (c = void 0);
      }
    return c;
  };
  Bp.prototype.remove = function (a) {
    this.g && this.g.remove(a);
    var b = this.l;
    Yf.remove("" + a, "/", void 0 === b ? "youtube.com" : b);
  };
  var Cp = (function () {
    var a;
    return function () {
      a || (a = new Bp("ytidb"));
      return a;
    };
  })();
  function Dp() {
    var a;
    return null == (a = Cp()) ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0);
  }
  var Ep = [],
    Fp = !1;
  function Gp(a) {
    Fp ||
      (Ep.push({ type: "ERROR", payload: a }), 10 < Ep.length && Ep.shift());
  }
  function Hp(a, b) {
    Fp ||
      (Ep.push({ type: "EVENT", eventType: a, payload: b }),
      10 < Ep.length && Ep.shift());
  }
  function Ip(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
  }
  function Jp(a) {
    return a.substr(0, a.indexOf(":")) || a;
  }
  var Kp = {},
    Lp =
      ((Kp.AUTH_INVALID = "No user identifier specified."),
      (Kp.EXPLICIT_ABORT = "Transaction was explicitly aborted."),
      (Kp.IDB_NOT_SUPPORTED = "IndexedDB is not supported."),
      (Kp.MISSING_INDEX = "Index not created."),
      (Kp.MISSING_OBJECT_STORES = "Object stores not created."),
      (Kp.DB_DELETED_BY_MISSING_OBJECT_STORES =
        "Database is deleted because expected object stores were not created."),
      (Kp.DB_REOPENED_BY_MISSING_OBJECT_STORES =
        "Database is reopened because expected object stores were not created."),
      (Kp.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons."),
      (Kp.QUOTA_EXCEEDED =
        "The current transaction exceeded its quota limitations."),
      (Kp.QUOTA_MAYBE_EXCEEDED =
        "The current transaction may have failed because of exceeding quota limitations."),
      (Kp.EXECUTE_TRANSACTION_ON_CLOSED_DB =
        "Can't start a transaction on a closed database"),
      (Kp.INCOMPATIBLE_DB_VERSION =
        "The binary is incompatible with the database version"),
      Kp),
    Mp = {},
    Np =
      ((Mp.AUTH_INVALID = "ERROR"),
      (Mp.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING"),
      (Mp.EXPLICIT_ABORT = "IGNORED"),
      (Mp.IDB_NOT_SUPPORTED = "ERROR"),
      (Mp.MISSING_INDEX = "WARNING"),
      (Mp.MISSING_OBJECT_STORES = "ERROR"),
      (Mp.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING"),
      (Mp.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING"),
      (Mp.QUOTA_EXCEEDED = "WARNING"),
      (Mp.QUOTA_MAYBE_EXCEEDED = "WARNING"),
      (Mp.UNKNOWN_ABORT = "WARNING"),
      (Mp.INCOMPATIBLE_DB_VERSION = "WARNING"),
      Mp),
    Op = {},
    Pp =
      ((Op.AUTH_INVALID = !1),
      (Op.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1),
      (Op.EXPLICIT_ABORT = !1),
      (Op.IDB_NOT_SUPPORTED = !1),
      (Op.MISSING_INDEX = !1),
      (Op.MISSING_OBJECT_STORES = !1),
      (Op.DB_DELETED_BY_MISSING_OBJECT_STORES = !1),
      (Op.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1),
      (Op.QUOTA_EXCEEDED = !1),
      (Op.QUOTA_MAYBE_EXCEEDED = !0),
      (Op.UNKNOWN_ABORT = !0),
      (Op.INCOMPATIBLE_DB_VERSION = !1),
      Op);
  function W(a, b, c, d, e) {
    b = void 0 === b ? {} : b;
    c = void 0 === c ? Lp[a] : c;
    d = void 0 === d ? Np[a] : d;
    e = void 0 === e ? Pp[a] : e;
    Ro.call(
      this,
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
    this.g = e;
    Object.setPrototypeOf(this, W.prototype);
  }
  y(W, Ro);
  function Qp(a, b) {
    W.call(
      this,
      "MISSING_OBJECT_STORES",
      { expectedObjectStores: b, foundObjectStores: a },
      Lp.MISSING_OBJECT_STORES
    );
    Object.setPrototypeOf(this, Qp.prototype);
  }
  y(Qp, W);
  function Rp(a, b) {
    var c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.index = a;
    this.objectStore = b;
    Object.setPrototypeOf(this, Rp.prototype);
  }
  y(Rp, Error);
  var Sp = [
    "The database connection is closing",
    "Can't start a transaction on a closed database",
    "A mutation operation was attempted on a database that did not allow mutations",
  ];
  function Tp(a, b, c, d) {
    b = Jp(b);
    var e = a instanceof Error ? a : Error("Unexpected error: " + a);
    if (e instanceof W) return e;
    a = { objectStoreNames: c, dbName: b, dbVersion: d };
    if ("QuotaExceededError" === e.name) return new W("QUOTA_EXCEEDED", a);
    if (Ud && "UnknownError" === e.name)
      return new W("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Rp)
      return new W(
        "MISSING_INDEX",
        Object.assign({}, a, { objectStore: e.objectStore, index: e.index })
      );
    if (
      "InvalidStateError" === e.name &&
      Sp.some(function (f) {
        return e.message.includes(f);
      })
    )
      return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB", a);
    if ("AbortError" === e.name) return new W("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, { name: "IdbError", li: e.name })];
    e.level = "WARNING";
    return e;
  }
  function Up(a, b, c) {
    var d = Dp();
    return new W("IDB_NOT_SUPPORTED", {
      context: {
        caller: a,
        publicName: b,
        version: c,
        hasSucceededOnce: null == d ? void 0 : d.hasSucceededOnce,
      },
    });
  }
  function Vp(a) {
    if (!a) throw Error();
    throw a;
  }
  function Wp(a) {
    return a;
  }
  function Xp(a) {
    this.g = a;
  }
  function Yp(a) {
    function b(e) {
      if ("PENDING" === d.state.status) {
        d.state = { status: "REJECTED", reason: e };
        e = w(d.l);
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), f();
      }
    }
    function c(e) {
      if ("PENDING" === d.state.status) {
        d.state = { status: "FULFILLED", value: e };
        e = w(d.g);
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), f();
      }
    }
    var d = this;
    this.state = { status: "PENDING" };
    this.g = [];
    this.l = [];
    a = a.g;
    try {
      a(c, b);
    } catch (e) {
      b(e);
    }
  }
  Yp.resolve = function (a) {
    return new Yp(
      new Xp(function (b, c) {
        a instanceof Yp ? a.then(b, c) : b(a);
      })
    );
  };
  Yp.reject = function (a) {
    return new Yp(
      new Xp(function (b, c) {
        c(a);
      })
    );
  };
  Yp.prototype.then = function (a, b) {
    var c = this,
      d = null != a ? a : Wp,
      e = null != b ? b : Vp;
    return new Yp(
      new Xp(function (f, g) {
        "PENDING" === c.state.status
          ? (c.g.push(function () {
              Zp(c, c, d, f, g);
            }),
            c.l.push(function () {
              $p(c, c, e, f, g);
            }))
          : "FULFILLED" === c.state.status
          ? Zp(c, c, d, f, g)
          : "REJECTED" === c.state.status && $p(c, c, e, f, g);
      })
    );
  };
  function aq(a, b) {
    a.then(void 0, b);
  }
  function Zp(a, b, c, d, e) {
    try {
      if ("FULFILLED" !== a.state.status)
        throw Error("calling handleResolve before the promise is fulfilled.");
      var f = c(a.state.value);
      f instanceof Yp ? bq(a, b, f, d, e) : d(f);
    } catch (g) {
      e(g);
    }
  }
  function $p(a, b, c, d, e) {
    try {
      if ("REJECTED" !== a.state.status)
        throw Error("calling handleReject before the promise is rejected.");
      var f = c(a.state.reason);
      f instanceof Yp ? bq(a, b, f, d, e) : d(f);
    } catch (g) {
      e(g);
    }
  }
  function bq(a, b, c, d, e) {
    b === c
      ? e(new TypeError("Circular promise chain detected."))
      : c.then(
          function (f) {
            f instanceof Yp ? bq(a, b, f, d, e) : d(f);
          },
          function (f) {
            e(f);
          }
        );
  }
  function cq(a, b, c) {
    function d() {
      c(a.error);
      f();
    }
    function e() {
      b(a.result);
      f();
    }
    function f() {
      try {
        a.removeEventListener("success", e), a.removeEventListener("error", d);
      } catch (g) {}
    }
    a.addEventListener("success", e);
    a.addEventListener("error", d);
  }
  function dq(a) {
    return new Promise(function (b, c) {
      cq(a, b, c);
    });
  }
  function eq(a) {
    return new Yp(
      new Xp(function (b, c) {
        cq(a, b, c);
      })
    );
  }
  function fq(a, b) {
    return new Yp(
      new Xp(function (c, d) {
        function e() {
          var f = a ? b(a) : null;
          f
            ? f.then(function (g) {
                a = g;
                e();
              }, d)
            : c();
        }
        e();
      })
    );
  }
  var gq = window,
    Y =
      gq.ytcsi && gq.ytcsi.now
        ? gq.ytcsi.now
        : gq.performance &&
          gq.performance.timing &&
          gq.performance.now &&
          gq.performance.timing.navigationStart
        ? function () {
            return gq.performance.timing.navigationStart + gq.performance.now();
          }
        : function () {
            return new Date().getTime();
          };
  function hq(a, b) {
    this.g = a;
    this.options = b;
    this.transactionCount = 0;
    this.i = Math.round(Y());
    this.l = !1;
  }
  m = hq.prototype;
  m.add = function (a, b, c) {
    return iq(this, [a], { mode: "readwrite", pa: !0 }, function (d) {
      return d.objectStore(a).add(b, c);
    });
  };
  m.clear = function (a) {
    return iq(this, [a], { mode: "readwrite", pa: !0 }, function (b) {
      return b.objectStore(a).clear();
    });
  };
  m.close = function () {
    this.g.close();
    var a;
    (null == (a = this.options) ? 0 : a.closed) && this.options.closed();
  };
  function jq(a, b, c) {
    a = a.g.createObjectStore(b, c);
    return new kq(a);
  }
  m.delete = function (a, b) {
    return iq(this, [a], { mode: "readwrite", pa: !0 }, function (c) {
      return c.objectStore(a).delete(b);
    });
  };
  m.get = function (a, b) {
    return iq(this, [a], { mode: "readonly", pa: !0 }, function (c) {
      return c.objectStore(a).get(b);
    });
  };
  function lq(a, b, c) {
    return iq(a, [b], { mode: "readwrite", pa: !0 }, function (d) {
      d = d.objectStore(b);
      return eq(d.g.put(c, void 0));
    });
  }
  m.objectStoreNames = function () {
    return Array.from(this.g.objectStoreNames);
  };
  function iq(a, b, c, d) {
    var e, f, g, h, l, k, n, p, r, q, t, u;
    return B(function (z) {
      switch (z.g) {
        case 1:
          var E = {
            mode: "readonly",
            pa: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN",
          };
          "string" === typeof c ? (E.mode = c) : Object.assign(E, c);
          e = E;
          a.transactionCount++;
          f = e.pa ? 3 : 1;
          g = 0;
        case 2:
          if (h) {
            z.O(4);
            break;
          }
          g++;
          l = Math.round(Y());
          ua(z, 5);
          k = a.g.transaction(b, e.mode);
          E = new mq(k);
          E = nq(E, d);
          return A(z, E, 7);
        case 7:
          return (
            (n = z.l),
            (p = Math.round(Y())),
            oq(a, l, p, g, void 0, b.join(), e),
            z.return(n)
          );
        case 5:
          r = va(z);
          q = Math.round(Y());
          t = Tp(r, a.g.name, b.join(), a.g.version);
          if ((u = t instanceof W && !t.g) || g >= f)
            oq(a, l, q, g, t, b.join(), e), (h = t);
          z.O(2);
          break;
        case 4:
          return z.return(Promise.reject(h));
      }
    });
  }
  function oq(a, b, c, d, e, f, g) {
    b = c - b;
    e
      ? (e instanceof W &&
          ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) &&
          Hp("QUOTA_EXCEEDED", {
            dbName: Jp(a.g.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode,
          }),
        e instanceof W &&
          "UNKNOWN_ABORT" === e.type &&
          ((c -= a.i),
          0 > c && c >= Math.pow(2, 31) && (c = 0),
          Hp("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c,
          }),
          (a.l = !0)),
        pq(a, !1, d, f, b, g.tag),
        Gp(e))
      : pq(a, !0, d, f, b, g.tag);
  }
  function pq(a, b, c, d, e, f) {
    Hp("TRANSACTION_ENDED", {
      objectStoreNames: d,
      connectionHasUnknownAbortedTransaction: a.l,
      duration: e,
      isSuccessful: b,
      tryCount: c,
      tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f,
    });
  }
  m.getName = function () {
    return this.g.name;
  };
  function kq(a) {
    this.g = a;
  }
  m = kq.prototype;
  m.add = function (a, b) {
    return eq(this.g.add(a, b));
  };
  m.autoIncrement = function () {
    return this.g.autoIncrement;
  };
  m.clear = function () {
    return eq(this.g.clear()).then(function () {});
  };
  function qq(a, b, c) {
    a.g.createIndex(b, c, { unique: !1 });
  }
  function rq(a, b) {
    return sq(a, { query: b }, function (c) {
      return c.delete().then(function () {
        return tq(c);
      });
    }).then(function () {});
  }
  m.delete = function (a) {
    return a instanceof IDBKeyRange ? rq(this, a) : eq(this.g.delete(a));
  };
  m.get = function (a) {
    return eq(this.g.get(a));
  };
  m.index = function (a) {
    try {
      return new uq(this.g.index(a));
    } catch (b) {
      if (b instanceof Error && "NotFoundError" === b.name)
        throw new Rp(a, this.g.name);
      throw b;
    }
  };
  m.getName = function () {
    return this.g.name;
  };
  m.keyPath = function () {
    return this.g.keyPath;
  };
  function sq(a, b, c) {
    a = a.g.openCursor(b.query, b.direction);
    return vq(a).then(function (d) {
      return fq(d, c);
    });
  }
  function mq(a) {
    var b = this;
    this.g = a;
    this.i = new Map();
    this.l = !1;
    this.done = new Promise(function (c, d) {
      b.g.addEventListener("complete", function () {
        c();
      });
      b.g.addEventListener("error", function (e) {
        e.currentTarget === e.target && d(b.g.error);
      });
      b.g.addEventListener("abort", function () {
        var e = b.g.error;
        if (e) d(e);
        else if (!b.l) {
          e = W;
          for (var f = b.g.objectStoreNames, g = [], h = 0; h < f.length; h++) {
            var l = f.item(h);
            if (null === l)
              throw Error("Invariant: item in DOMStringList is null");
            g.push(l);
          }
          e = new e("UNKNOWN_ABORT", {
            objectStoreNames: g.join(),
            dbName: b.g.db.name,
            mode: b.g.mode,
          });
          d(e);
        }
      });
    });
  }
  function nq(a, b) {
    var c = new Promise(function (d, e) {
      try {
        aq(
          b(a).then(function (f) {
            d(f);
          }),
          e
        );
      } catch (f) {
        e(f), a.abort();
      }
    });
    return Promise.all([c, a.done]).then(function (d) {
      return w(d).next().value;
    });
  }
  mq.prototype.abort = function () {
    this.g.abort();
    this.l = !0;
    throw new W("EXPLICIT_ABORT");
  };
  mq.prototype.objectStore = function (a) {
    a = this.g.objectStore(a);
    var b = this.i.get(a);
    b || ((b = new kq(a)), this.i.set(a, b));
    return b;
  };
  function uq(a) {
    this.g = a;
  }
  uq.prototype.delete = function (a) {
    return wq(this, { query: a }, function (b) {
      return b.delete().then(function () {
        return tq(b);
      });
    });
  };
  uq.prototype.get = function (a) {
    return eq(this.g.get(a));
  };
  uq.prototype.keyPath = function () {
    return this.g.keyPath;
  };
  uq.prototype.unique = function () {
    return this.g.unique;
  };
  function wq(a, b, c) {
    a = a.g.openCursor(
      void 0 === b.query ? null : b.query,
      void 0 === b.direction ? "next" : b.direction
    );
    return vq(a).then(function (d) {
      return fq(d, c);
    });
  }
  function xq(a, b) {
    this.request = a;
    this.cursor = b;
  }
  function vq(a) {
    return eq(a).then(function (b) {
      return b ? new xq(a, b) : null;
    });
  }
  function tq(a) {
    a.cursor.continue(void 0);
    return vq(a.request);
  }
  xq.prototype.delete = function () {
    return eq(this.cursor.delete()).then(function () {});
  };
  xq.prototype.update = function (a) {
    return eq(this.cursor.update(a));
  };
  function yq(a, b, c) {
    return new Promise(function (d, e) {
      function f() {
        r || (r = new hq(g.result, { closed: p }));
        return r;
      }
      var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
      var h = c.af,
        l = c.bf,
        k = c.Xg,
        n = c.upgrade,
        p = c.closed,
        r;
      g.addEventListener("upgradeneeded", function (q) {
        try {
          if (null === q.newVersion)
            throw Error(
              "Invariant: newVersion on IDbVersionChangeEvent is null"
            );
          if (null === g.transaction)
            throw Error("Invariant: transaction on IDbOpenDbRequest is null");
          q.dataLoss &&
            "none" !== q.dataLoss &&
            Hp("IDB_DATA_CORRUPTED", {
              reason: q.dataLossMessage || "unknown reason",
              dbName: Jp(a),
            });
          var t = f(),
            u = new mq(g.transaction);
          n &&
            n(
              t,
              function (z) {
                return q.oldVersion < z && q.newVersion >= z;
              },
              u
            );
          u.done.catch(function (z) {
            e(z);
          });
        } catch (z) {
          e(z);
        }
      });
      g.addEventListener("success", function () {
        var q = g.result;
        l &&
          q.addEventListener("versionchange", function () {
            l(f());
          });
        q.addEventListener("close", function () {
          Hp("IDB_UNEXPECTEDLY_CLOSED", {
            dbName: Jp(a),
            dbVersion: q.version,
          });
          k && k();
        });
        d(f());
      });
      g.addEventListener("error", function () {
        e(g.error);
      });
      h &&
        g.addEventListener("blocked", function () {
          h();
        });
    });
  }
  function zq(a, b, c) {
    c = void 0 === c ? {} : c;
    return yq(a, b, c);
  }
  function Aq(a, b) {
    b = void 0 === b ? {} : b;
    var c, d, e, f;
    return B(function (g) {
      if (1 == g.g)
        return (
          ua(g, 2),
          (c = self.indexedDB.deleteDatabase(a)),
          (d = b),
          (e = d.af) &&
            c.addEventListener("blocked", function () {
              e();
            }),
          A(g, dq(c), 4)
        );
      if (2 != g.g) (g.g = 0), (g.o = 0);
      else throw ((f = va(g)), Tp(f, a, "", -1));
    });
  }
  function Bq(a, b) {
    this.name = a;
    this.options = b;
    this.i = !0;
    this.o = this.m = 0;
  }
  Bq.prototype.l = function (a, b, c) {
    c = void 0 === c ? {} : c;
    return zq(a, b, c);
  };
  Bq.prototype.delete = function (a) {
    a = void 0 === a ? {} : a;
    return Aq(this.name, a);
  };
  function Cq(a, b) {
    return new W("INCOMPATIBLE_DB_VERSION", {
      dbName: a.name,
      oldVersion: a.options.version,
      newVersion: b,
    });
  }
  function Dq(a, b) {
    if (!b) throw Up("openWithToken", Jp(a.name));
    return Eq(a);
  }
  function Eq(a) {
    function b() {
      var f, g, h, l, k, n, p, r, q, t;
      return B(function (u) {
        switch (u.g) {
          case 1:
            return (
              (g = null != (f = Error().stack) ? f : ""),
              ua(u, 2),
              A(u, a.l(a.name, a.options.version, d), 4)
            );
          case 4:
            for (
              var z = (h = u.l),
                E = a.options,
                Q = [],
                X = w(Object.keys(E.yb)),
                da = X.next();
              !da.done;
              da = X.next()
            ) {
              da = da.value;
              var kb = E.yb[da],
                Ki = void 0 === kb.Jg ? Number.MAX_VALUE : kb.Jg;
              !(z.g.version >= kb.Hb) ||
                z.g.version >= Ki ||
                z.g.objectStoreNames.contains(da) ||
                Q.push(da);
            }
            l = Q;
            if (0 === l.length) {
              u.O(5);
              break;
            }
            k = Object.keys(a.options.yb);
            n = h.objectStoreNames();
            if (a.o < Tn("ytidb_reopen_db_retries", 0))
              return (
                a.o++,
                h.close(),
                Gp(
                  new W("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                    dbName: a.name,
                    expectedObjectStores: k,
                    foundObjectStores: n,
                  })
                ),
                u.return(b())
              );
            if (!(a.m < Tn("ytidb_remake_db_retries", 1))) {
              u.O(6);
              break;
            }
            a.m++;
            return A(u, a.delete(), 7);
          case 7:
            return (
              Gp(
                new W("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                  dbName: a.name,
                  expectedObjectStores: k,
                  foundObjectStores: n,
                })
              ),
              u.return(b())
            );
          case 6:
            throw new Qp(n, k);
          case 5:
            return u.return(h);
          case 2:
            p = va(u);
            if (
              p instanceof DOMException
                ? "VersionError" !== p.name
                : "DOMError" in self && p instanceof DOMError
                ? "VersionError" !== p.name
                : !(p instanceof Object && "message" in p) ||
                  "An attempt was made to open a database using a lower version than the existing version." !==
                    p.message
            ) {
              u.O(8);
              break;
            }
            return A(
              u,
              a.l(a.name, void 0, Object.assign({}, d, { upgrade: void 0 })),
              9
            );
          case 9:
            r = u.l;
            q = r.g.version;
            if (void 0 !== a.options.version && q > a.options.version + 1)
              throw (r.close(), (a.i = !1), Cq(a, q));
            return u.return(r);
          case 8:
            throw (
              (c(),
              p instanceof Error &&
                !V("ytidb_async_stack_killswitch") &&
                (p.stack = p.stack + "\n" + g.substring(g.indexOf("\n") + 1)),
              Tp(p, a.name, "", null != (t = a.options.version) ? t : -1))
            );
        }
      });
    }
    function c() {
      a.g === e && (a.g = void 0);
    }
    if (!a.i) throw Cq(a);
    if (a.g) return a.g;
    var d = {
      bf: function (f) {
        f.close();
      },
      closed: c,
      Xg: c,
      upgrade: a.options.upgrade,
    };
    var e = b();
    a.g = e;
    return a.g;
  }
  var Fq = new Bq("YtIdbMeta", {
    yb: { databases: { Hb: 1 } },
    upgrade: function (a, b) {
      b(1) && jq(a, "databases", { keyPath: "actualName" });
    },
  });
  function Gq(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return A(d, Dq(Fq, b), 2);
      c = d.l;
      return d.return(
        iq(c, ["databases"], { pa: !0, mode: "readwrite" }, function (e) {
          var f = e.objectStore("databases");
          return f.get(a.actualName).then(function (g) {
            if (
              g
                ? a.actualName !== g.actualName ||
                  a.publicName !== g.publicName ||
                  a.userIdentifier !== g.userIdentifier
                : 1
            )
              return eq(f.g.put(a, void 0)).then(function () {});
          });
        })
      );
    });
  }
  function Hq(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return a ? A(d, Dq(Fq, b), 2) : d.return();
      c = d.l;
      return d.return(c.delete("databases", a));
    });
  }
  function Iq(a, b) {
    var c, d;
    return B(function (e) {
      return 1 == e.g
        ? ((c = []), A(e, Dq(Fq, b), 2))
        : 3 != e.g
        ? ((d = e.l),
          A(
            e,
            iq(d, ["databases"], { pa: !0, mode: "readonly" }, function (f) {
              c.length = 0;
              return sq(f.objectStore("databases"), {}, function (g) {
                a(g.cursor.value) && c.push(g.cursor.value);
                return tq(g);
              });
            }),
            3
          ))
        : e.return(c);
    });
  }
  function Jq(a) {
    return Iq(function (b) {
      return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier;
    }, a);
  }
  var Kq,
    Lq = new (function () {})(new (function () {})());
  function Mq() {
    var a, b, c, d;
    return B(function (e) {
      switch (e.g) {
        case 1:
          a = Dp();
          if (null == (b = a) ? 0 : b.hasSucceededOnce) return e.return(!0);
          var f;
          if ((f = ko))
            (f = /WebKit\/([0-9]+)/.exec(Wb())),
              (f = !!(f && 600 <= parseInt(f[1], 10)));
          f &&
            ((f = /WebKit\/([0-9]+)/.exec(Wb())),
            (f = !(f && 602 <= parseInt(f[1], 10))));
          if (f || mc) return e.return(!1);
          try {
            if (
              ((c = self),
              !(c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore))
            )
              return e.return(!1);
          } catch (g) {
            return e.return(!1);
          }
          if (
            !(
              "IDBTransaction" in self &&
              "objectStoreNames" in IDBTransaction.prototype
            )
          )
            return e.return(!1);
          ua(e, 2);
          d = {
            actualName: "yt-idb-test-do-not-use",
            publicName: "yt-idb-test-do-not-use",
            userIdentifier: void 0,
          };
          return A(e, Gq(d, Lq), 4);
        case 4:
          return A(e, Hq("yt-idb-test-do-not-use", Lq), 5);
        case 5:
          return e.return(!0);
        case 2:
          return va(e), e.return(!1);
      }
    });
  }
  function Nq() {
    if (void 0 !== Kq) return Kq;
    Fp = !0;
    return (Kq = Mq().then(function (a) {
      Fp = !1;
      var b;
      if (null != (b = Cp()) && b.g) {
        var c;
        b = {
          hasSucceededOnce:
            (null == (c = Dp()) ? void 0 : c.hasSucceededOnce) || a,
        };
        var d;
        null == (d = Cp()) || d.set("LAST_RESULT_ENTRY_KEY", b, 2592e3, !0);
      }
      return a;
    }));
  }
  function Oq() {
    return D("ytglobal.idbToken_") || void 0;
  }
  function Pq() {
    var a = Oq();
    return a
      ? Promise.resolve(a)
      : Nq().then(function (b) {
          (b = b ? Lq : void 0) && H("ytglobal.idbToken_", b);
          return b;
        });
  }
  new Pl();
  function Qq(a) {
    if (!So()) throw ((a = new W("AUTH_INVALID", { dbName: a })), Gp(a), a);
    var b = To();
    return { actualName: a + ":" + b, publicName: a, userIdentifier: b };
  }
  function Rq(a, b, c, d) {
    var e, f, g, h, l, k;
    return B(function (n) {
      switch (n.g) {
        case 1:
          return (f = null != (e = Error().stack) ? e : ""), A(n, Pq(), 2);
        case 2:
          g = n.l;
          if (!g)
            throw (
              ((h = Up("openDbImpl", a, b)),
              V("ytidb_async_stack_killswitch") ||
                (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)),
              Gp(h),
              h)
            );
          Ip(a);
          l = c
            ? { actualName: a, publicName: a, userIdentifier: void 0 }
            : Qq(a);
          ua(n, 3);
          return A(n, Gq(l, g), 5);
        case 5:
          return A(n, zq(l.actualName, b, d), 6);
        case 6:
          return n.return(n.l);
        case 3:
          return (k = va(n)), ua(n, 7), A(n, Hq(l.actualName, g), 9);
        case 9:
          n.g = 8;
          n.o = 0;
          break;
        case 7:
          va(n);
        case 8:
          throw k;
      }
    });
  }
  function Sq(a, b, c) {
    c = void 0 === c ? {} : c;
    return Rq(a, b, !1, c);
  }
  function Tq(a, b, c) {
    c = void 0 === c ? {} : c;
    return Rq(a, b, !0, c);
  }
  function Uq(a, b) {
    b = void 0 === b ? {} : b;
    var c, d;
    return B(function (e) {
      if (1 == e.g) return A(e, Pq(), 2);
      if (3 != e.g) {
        c = e.l;
        if (!c) return e.return();
        Ip(a);
        d = Qq(a);
        return A(e, Aq(d.actualName, b), 3);
      }
      return A(e, Hq(d.actualName, c), 0);
    });
  }
  function Vq(a, b, c) {
    a = a.map(function (d) {
      return B(function (e) {
        return 1 == e.g
          ? A(e, Aq(d.actualName, b), 2)
          : A(e, Hq(d.actualName, c), 0);
      });
    });
    return Promise.all(a).then(function () {});
  }
  function Wq() {
    var a = void 0 === a ? {} : a;
    var b, c;
    return B(function (d) {
      if (1 == d.g) return A(d, Pq(), 2);
      if (3 != d.g) {
        b = d.l;
        if (!b) return d.return();
        Ip("LogsDatabaseV2");
        return A(d, Jq(b), 3);
      }
      c = d.l;
      return A(d, Vq(c, a, b), 0);
    });
  }
  function Xq(a, b) {
    b = void 0 === b ? {} : b;
    var c;
    return B(function (d) {
      if (1 == d.g) return A(d, Pq(), 2);
      if (3 != d.g) {
        c = d.l;
        if (!c) return d.return();
        Ip(a);
        return A(d, Aq(a, b), 3);
      }
      return A(d, Hq(a, c), 0);
    });
  }
  function Yq(a, b) {
    Bq.call(this, a, b);
    this.options = b;
    Ip(a);
  }
  y(Yq, Bq);
  function Zq(a, b) {
    var c;
    return function () {
      c || (c = new Yq(a, b));
      return c;
    };
  }
  Yq.prototype.l = function (a, b, c) {
    c = void 0 === c ? {} : c;
    return (this.options.shared ? Tq : Sq)(a, b, Object.assign({}, c));
  };
  Yq.prototype.delete = function (a) {
    a = void 0 === a ? {} : a;
    return (this.options.shared ? Xq : Uq)(this.name, a);
  };
  function $q(a, b) {
    return Zq(a, b);
  }
  var ar = {},
    br = $q("ytGcfConfig", {
      yb:
        ((ar.coldConfigStore = { Hb: 1 }), (ar.hotConfigStore = { Hb: 1 }), ar),
      shared: !1,
      upgrade: function (a, b) {
        b(1) &&
          (qq(
            jq(a, "hotConfigStore", { keyPath: "key", autoIncrement: !0 }),
            "hotTimestampIndex",
            "timestamp"
          ),
          qq(
            jq(a, "coldConfigStore", { keyPath: "key", autoIncrement: !0 }),
            "coldTimestampIndex",
            "timestamp"
          ));
      },
      version: 1,
    });
  function cr(a) {
    return Dq(br(), a);
  }
  function dr(a, b, c) {
    var d, e, f;
    return B(function (g) {
      switch (g.g) {
        case 1:
          return (
            (d = { config: a, hashData: b, timestamp: Y() }), A(g, cr(c), 2)
          );
        case 2:
          return (e = g.l), A(g, e.clear("hotConfigStore"), 3);
        case 3:
          return A(g, lq(e, "hotConfigStore", d), 4);
        case 4:
          return (f = g.l), g.return(f);
      }
    });
  }
  function er(a, b, c, d) {
    var e, f, g;
    return B(function (h) {
      switch (h.g) {
        case 1:
          return (
            (e = { config: a, hashData: b, configData: c, timestamp: Y() }),
            A(h, cr(d), 2)
          );
        case 2:
          return (f = h.l), A(h, f.clear("coldConfigStore"), 3);
        case 3:
          return A(h, lq(f, "coldConfigStore", e), 4);
        case 4:
          return (g = h.l), h.return(g);
      }
    });
  }
  function fr(a) {
    var b, c;
    return B(function (d) {
      return 1 == d.g
        ? A(d, cr(a), 2)
        : 3 != d.g
        ? ((b = d.l),
          (c = void 0),
          A(
            d,
            iq(
              b,
              ["coldConfigStore"],
              { mode: "readwrite", pa: !0 },
              function (e) {
                return wq(
                  e.objectStore("coldConfigStore").index("coldTimestampIndex"),
                  { direction: "prev" },
                  function (f) {
                    c = f.cursor.value;
                  }
                );
              }
            ),
            3
          ))
        : d.return(c);
    });
  }
  function gr(a) {
    var b, c;
    return B(function (d) {
      return 1 == d.g
        ? A(d, cr(a), 2)
        : 3 != d.g
        ? ((b = d.l),
          (c = void 0),
          A(
            d,
            iq(
              b,
              ["hotConfigStore"],
              { mode: "readwrite", pa: !0 },
              function (e) {
                return wq(
                  e.objectStore("hotConfigStore").index("hotTimestampIndex"),
                  { direction: "prev" },
                  function (f) {
                    c = f.cursor.value;
                  }
                );
              }
            ),
            3
          ))
        : d.return(c);
    });
  }
  function hr() {
    Rb.call(this);
    this.l = [];
    this.g = [];
    var a = D("yt.gcf.config.hotUpdateCallbacks");
    a
      ? ((this.l = [].concat(x(a))), (this.g = a))
      : ((this.g = []), H("yt.gcf.config.hotUpdateCallbacks", this.g));
  }
  y(hr, Rb);
  hr.prototype.Ba = function () {
    for (var a = w(this.l), b = a.next(); !b.done; b = a.next()) {
      var c = this.g;
      b = c.indexOf(b.value);
      0 <= b && c.splice(b, 1);
    }
    this.l.length = 0;
    Rb.prototype.Ba.call(this);
  };
  function ir() {
    this.l = 0;
    this.i = new hr();
  }
  function jr(a, b, c) {
    var d, e, f;
    return B(function (g) {
      switch (g.g) {
        case 1:
          if (!V("start_client_gcf")) {
            g.O(0);
            break;
          }
          c && ((a.m = c), H("yt.gcf.config.hotConfigGroup", a.m || null));
          a.g(b);
          d = Oq();
          if (!d) {
            g.O(3);
            break;
          }
          if (c) {
            g.O(4);
            break;
          }
          return A(g, gr(d), 5);
        case 5:
          (e = g.l), (c = null == (f = e) ? void 0 : f.config);
        case 4:
          return A(g, dr(c, b, d), 3);
        case 3:
          if (c)
            for (var h = c, l = w(a.i.g), k = l.next(); !k.done; k = l.next())
              (k = k.value), k(h);
          g.g = 0;
      }
    });
  }
  function kr(a, b, c) {
    var d, e, f, g;
    return B(function (h) {
      if (1 == h.g) {
        if (!V("start_client_gcf")) return h.O(0);
        a.coldHashData = b;
        H("yt.gcf.config.coldHashData", a.coldHashData || null);
        return (d = Oq()) ? (c ? h.O(4) : A(h, fr(d), 5)) : h.O(0);
      }
      4 != h.g && ((e = h.l), (c = null == (f = e) ? void 0 : f.config));
      if (!c) return h.O(0);
      g = c.configData;
      return A(h, er(c, b, g, d), 0);
    });
  }
  ir.prototype.g = function (a) {
    this.hotHashData = a;
    H("yt.gcf.config.hotHashData", this.hotHashData || null);
  };
  function lr() {
    return "INNERTUBE_API_KEY" in On && "INNERTUBE_API_VERSION" in On;
  }
  function mr() {
    return {
      cg: U("INNERTUBE_API_KEY"),
      dg: U("INNERTUBE_API_VERSION"),
      Yc: U("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
      fe: U("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
      eg: U("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
      ge: U("INNERTUBE_CONTEXT_CLIENT_VERSION"),
      ie: U("INNERTUBE_CONTEXT_HL"),
      he: U("INNERTUBE_CONTEXT_GL"),
      fg: U("INNERTUBE_HOST_OVERRIDE") || "",
      hg: !!U("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
      gg: !!U("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
      appInstallData: U("SERIALIZED_CLIENT_CONFIG_DATA"),
    };
  }
  function nr(a) {
    var b = {
      client: {
        hl: a.ie,
        gl: a.he,
        clientName: a.fe,
        clientVersion: a.ge,
        configInfo: a.Yc,
      },
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = C.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = U("EXPERIMENTS_TOKEN", "");
    "" !== c && (b.client.experimentsToken = c);
    c = Un();
    0 < c.length && (b.request = { internalExperimentFlags: c });
    or(a, void 0, b);
    pr(void 0, b);
    qr(void 0, b);
    rr(a, void 0, b);
    sr(void 0, b);
    V("start_client_gcf") && tr(void 0, b);
    U("DELEGATED_SESSION_ID") &&
      !V("pageid_as_header_web") &&
      (b.user = { onBehalfOfUser: U("DELEGATED_SESSION_ID") });
    !V("fill_delegate_context_in_gel_killswitch") &&
      (a = U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
      (b.user = Object.assign({}, b.user, { serializedDelegationContext: a }));
    a = Object;
    c = a.assign;
    for (
      var d = b.client,
        e = {},
        f = w(Object.entries(ho(U("DEVICE", "")))),
        g = f.next();
      !g.done;
      g = f.next()
    ) {
      var h = w(g.value);
      g = h.next().value;
      h = h.next().value;
      "cbrand" === g
        ? (e.deviceMake = h)
        : "cmodel" === g
        ? (e.deviceModel = h)
        : "cbr" === g
        ? (e.browserName = h)
        : "cbrver" === g
        ? (e.browserVersion = h)
        : "cos" === g
        ? (e.osName = h)
        : "cosver" === g
        ? (e.osVersion = h)
        : "cplatform" === g && (e.platform = h);
    }
    b.client = c.call(a, d, e);
    return b;
  }
  function or(a, b, c) {
    a = a.fe;
    if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
      if (b) {
        c = xf(b, sn, 96) || new sn();
        var d = Jo();
        d = Object.keys(Cn).indexOf(d);
        d = -1 === d ? null : d;
        null !== d && Ff(c, 3, d);
        yf(b, sn, 96, c);
      } else
        c &&
          ((c.client.mainAppWebInfo =
            null != (d = c.client.mainAppWebInfo) ? d : {}),
          (c.client.mainAppWebInfo.webDisplayMode = Jo()));
  }
  function pr(a, b) {
    var c = D("yt.embedded_player.embed_url");
    c &&
      (a
        ? ((b = xf(a, yn, 7) || new yn()), L(b, 4, c), yf(a, yn, 7, b))
        : b && (b.thirdParty = { embedUrl: c }));
  }
  function qr(a, b) {
    var c;
    if (
      V("web_log_memory_total_kbytes") &&
      (null == (c = C.navigator) ? 0 : c.deviceMemory)
    ) {
      var d;
      c = null == (d = C.navigator) ? void 0 : d.deviceMemory;
      a
        ? sf(a, 95, Le(1e6 * c))
        : b && (b.client.memoryTotalKbytes = "" + 1e6 * c);
    }
  }
  function rr(a, b, c) {
    if (a.appInstallData)
      if (b) {
        var d;
        c = null != (d = xf(b, rn, 62)) ? d : new rn();
        L(c, 6, a.appInstallData);
        yf(b, rn, 62, c);
      } else
        c &&
          ((c.client.configInfo = c.client.configInfo || {}),
          (c.client.configInfo.appInstallData = a.appInstallData));
  }
  function sr(a, b) {
    a: {
      var c = Qo();
      if (c) {
        var d = Mo[c.type || "unknown"] || "CONN_UNKNOWN";
        c = Mo[c.effectiveType || "unknown"] || "CONN_UNKNOWN";
        "CONN_CELLULAR_UNKNOWN" === d && "CONN_UNKNOWN" !== c && (d = c);
        if ("CONN_UNKNOWN" !== d) break a;
        if ("CONN_UNKNOWN" !== c) {
          d = c;
          break a;
        }
      }
      d = void 0;
    }
    d && (a ? Ff(a, 61, No[d]) : b && (b.client.connectionType = d));
    V("web_log_effective_connection_type") &&
      ((d = Qo()),
      (d =
        null != d && d.effectiveType
          ? Po.hasOwnProperty(d.effectiveType)
            ? Po[d.effectiveType]
            : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN"
          : void 0),
      d &&
        (a ? Ff(a, 94, Oo[d]) : b && (b.client.effectiveConnectionType = d)));
  }
  function ur(a, b, c) {
    c = void 0 === c ? {} : c;
    var d = {};
    U("EOM_VISITOR_DATA")
      ? (d = { "X-Goog-EOM-Visitor-Id": U("EOM_VISITOR_DATA") })
      : (d = { "X-Goog-Visitor-Id": c.visitorData || U("VISITOR_DATA", "") });
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.Mh || U("AUTHORIZATION");
    if (!b)
      if (a) b = "Bearer " + D("gapi.auth.getToken")().Lh;
      else {
        Ko.g || (Ko.g = new Ko());
        a = {};
        if ((c = bg([])))
          (a.Authorization = c),
            (c = void 0),
            void 0 === c &&
              ((c = Number(U("SESSION_INDEX", 0))), (c = isNaN(c) ? 0 : c)),
            V("voice_search_auth_header_removal") ||
              (a["X-Goog-AuthUser"] = c.toString()),
            "INNERTUBE_HOST_OVERRIDE" in On ||
              (a["X-Origin"] = window.location.origin),
            "DELEGATED_SESSION_ID" in On &&
              (a["X-Goog-PageId"] = U("DELEGATED_SESSION_ID"));
        V("pageid_as_header_web") || delete a["X-Goog-PageId"];
        d = Object.assign({}, d, a);
      }
    b && (d.Authorization = b);
    return d;
  }
  function tr(a, b) {
    if (!ir.g) {
      var c = new ir();
      ir.g = c;
    }
    c = ir.g;
    var d = Y() - c.l;
    if (0 !== c.l && d < Tn("send_config_hash_timer")) c = void 0;
    else {
      d = D("yt.gcf.config.coldConfigData");
      var e = D("yt.gcf.config.hotHashData"),
        f = D("yt.gcf.config.coldHashData");
      d && e && f && (c.l = Y());
      c = { coldConfigData: d, hotHashData: e, coldHashData: f };
    }
    if ((e = c))
      if (
        ((d = e.coldConfigData), (c = e.coldHashData), (e = e.hotHashData), a)
      ) {
        var g;
        b = null != (g = xf(a, rn, 62)) ? g : new rn();
        g = L(b, 1, d);
        L(g, 3, c).g(e);
        yf(a, rn, 62, b);
      } else
        b &&
          ((b.client.configInfo = b.client.configInfo || {}),
          d && (b.client.configInfo.coldConfigData = d),
          c && (b.client.configInfo.coldHashData = c),
          e && (b.client.configInfo.hotHashData = e));
  }
  var vr = "undefined" !== typeof TextEncoder ? new TextEncoder() : null,
    wr = vr
      ? function (a) {
          return vr.encode(a);
        }
      : function (a) {
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
                          65536 +
                          ((e & 1023) << 10) +
                          (a.charCodeAt(++d) & 1023)),
                        (b[c++] = (e >> 18) | 240),
                        (b[c++] = ((e >> 12) & 63) | 128))
                      : (b[c++] = (e >> 12) | 224),
                    (b[c++] = ((e >> 6) & 63) | 128)),
                (b[c++] = (e & 63) | 128));
          }
          a = new Uint8Array(b.length);
          for (c = 0; c < a.length; c++) a[c] = b[c];
          return a;
        };
  var xr = D("ytPubsub2Pubsub2Instance") || new R();
  R.prototype.subscribe = R.prototype.subscribe;
  R.prototype.unsubscribeByKey = R.prototype.Fc;
  R.prototype.publish = R.prototype.ue;
  R.prototype.clear = R.prototype.clear;
  H("ytPubsub2Pubsub2Instance", xr);
  H(
    "ytPubsub2Pubsub2SubscribedKeys",
    D("ytPubsub2Pubsub2SubscribedKeys") || {}
  );
  H("ytPubsub2Pubsub2TopicToKeys", D("ytPubsub2Pubsub2TopicToKeys") || {});
  H("ytPubsub2Pubsub2IsAsync", D("ytPubsub2Pubsub2IsAsync") || {});
  H("ytPubsub2Pubsub2SkipSubKey", null);
  function yr(a, b, c) {
    c = void 0 === c ? { sampleRate: 0.1 } : c;
    Math.random() < Math.min(0.02, c.sampleRate / 100) &&
      ((a = { Di: a, Ci: b }),
      (b = D("ytPubsub2Pubsub2Instance")) &&
        b.publish.call(
          b,
          "meta_logging_csi_event".toString(),
          "meta_logging_csi_event",
          a
        ));
  }
  var zr = void 0,
    Ar = void 0;
  function Br() {
    if (!Ar) {
      var a = U("WORKER_SERIALIZATION_URL");
      Ar = a
        ? (a = a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)
          ? Za(a)
          : null
        : null;
    }
    return Ar || void 0;
  }
  function Cr() {
    var a = Br();
    zr || void 0 === a || (zr = new Worker(Xa(a), void 0));
    return zr;
  }
  var Dr = Tn("max_body_size_to_compress", 5e5),
    Er = Tn("min_body_size_to_compress", 500),
    Fr = !0,
    Gr = 0,
    Hr = 0,
    Ir = Tn("compression_performance_threshold_lr", 250),
    Jr = Tn("slow_compressions_before_abandon_count", 4),
    Kr = !1,
    Lr = new Map(),
    Mr = 1,
    Nr = !0;
  function Or() {
    if ("function" === typeof Worker && Br() && !Kr) {
      var a = function (c) {
          c = c.data;
          if ("gzippedGelBatch" === c.op) {
            var d = Lr.get(c.key);
            d &&
              (Pr(c.gzippedBatch, d.latencyPayload, d.url, d.options, d.sendFn),
              Lr.delete(c.key));
          }
        },
        b = Cr();
      b &&
        (b.addEventListener("message", a),
        (b.onerror = function () {
          Lr.clear();
        }),
        (Kr = !0));
    }
  }
  function Qr(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = { startTime: Y(), ticks: {}, infos: {} };
    if (Fr)
      try {
        try {
          var g = new Blob(b.split("")).size;
        } catch (n) {
          $n(n), (g = null);
        }
        if (null != g && (g > Dr || g < Er)) d(a, c);
        else {
          if (
            V("gzip_gel_with_worker") &&
            ((V("initial_gzip_use_main_thread") && !Nr) ||
              !V("initial_gzip_use_main_thread"))
          ) {
            Kr || Or();
            var h = Cr();
            if (h && !e) {
              Lr.set(Mr, { latencyPayload: f, url: a, options: c, sendFn: d });
              h.postMessage({
                op: "gelBatchToGzip",
                serializedBatch: b,
                key: Mr,
              });
              Mr++;
              return;
            }
          }
          var l = wr(b);
          b = ((b = void 0), {});
          b.Df = !0;
          var k = new mn(b);
          k.push(l, !0);
          if (k.err) throw k.msg || nm[k.err];
          Pr(k.result, f, a, c, d);
        }
      } catch (n) {
        $n(n), d(a, c);
      }
    else d(a, c);
  }
  function Pr(a, b, c, d, e) {
    Nr = !1;
    var f = Y();
    b.ticks.gelc = f;
    Hr++;
    V("disable_compression_due_to_performance_degredation") &&
      f - b.startTime >= Ir &&
      (Gr++,
      V("abandon_compression_after_N_slow_zips")
        ? Hr === Tn("compression_disable_point") && Gr > Jr && (Fr = !1)
        : (Fr = !1));
    V("gel_compression_csi_killswitch") ||
      (!V("log_gel_compression_latency") &&
        !V("log_gel_compression_latency_lr")) ||
      yr("gel_compression", b, { sampleRate: 0.1 });
    d.headers || (d.headers = {});
    d.headers["Content-Encoding"] = "gzip";
    d.postBody = a;
    d.postParams = void 0;
    e(c, d);
  }
  function Rr(a) {
    a = Object.assign({}, a);
    delete a.Authorization;
    var b = bg();
    if (b) {
      var c = new Bl();
      c.update(U("INNERTUBE_API_KEY"));
      c.update(b);
      a.hash = Xd(c.digest(), 3);
    }
    return a;
  }
  var Sr;
  function Tr() {
    Sr || (Sr = new Bp("yt.innertube"));
    return Sr;
  }
  function Ur(a, b, c, d) {
    if (d) return null;
    d = Tr().get("nextId", !0) || 1;
    var e = Tr().get("requests", !0) || {};
    e[d] = {
      method: a,
      request: b,
      authState: Rr(c),
      requestTime: Math.round(Y()),
    };
    Tr().set("nextId", d + 1, 86400, !0);
    Tr().set("requests", e, 86400, !0);
    return d;
  }
  function Vr(a) {
    var b = Tr().get("requests", !0) || {};
    delete b[a];
    Tr().set("requests", b, 86400, !0);
  }
  function Wr(a) {
    var b = Tr().get("requests", !0);
    if (b) {
      for (var c in b) {
        var d = b[c];
        if (!(6e4 > Math.round(Y()) - d.requestTime)) {
          var e = d.authState;
          var f = Rr(ur(!1));
          a: {
            var g = void 0,
              h = void 0;
            for (h in e)
              if (!(h in f) || e[h] !== f[h]) {
                e = !1;
                break a;
              }
            for (g in f)
              if (!(g in e)) {
                e = !1;
                break a;
              }
            e = !0;
          }
          e &&
            ((e = d.request),
            "requestTimeMs" in e && (e.requestTimeMs = Math.round(Y())),
            Xr(a, d.method, e, {}));
          delete b[c];
        }
      }
      Tr().set("requests", b, 86400, !0);
    }
  }
  function Yr(a) {
    this.dc = this.g = !1;
    this.potentialEsfErrorCounter = this.l = 0;
    this.handleError = function () {};
    this.rb = function () {};
    this.now = Date.now;
    this.Lb = !1;
    var b;
    this.Le = null != (b = a.Le) ? b : 100;
    var c;
    this.Ce = null != (c = a.Ce) ? c : 1;
    var d;
    this.ze = null != (d = a.ze) ? d : 2592e6;
    var e;
    this.we = null != (e = a.we) ? e : 12e4;
    var f;
    this.Be = null != (f = a.Be) ? f : 5e3;
    var g;
    this.Z = null != (g = a.Z) ? g : void 0;
    this.lc = !!a.lc;
    var h;
    this.hc = null != (h = a.hc) ? h : 0.1;
    var l;
    this.xc = null != (l = a.xc) ? l : 10;
    a.handleError && (this.handleError = a.handleError);
    a.rb && (this.rb = a.rb);
    a.Lb && (this.Lb = a.Lb);
    a.dc && (this.dc = a.dc);
    this.aa = a.aa;
    this.Ea = a.Ea;
    this.fa = a.fa;
    this.ia = a.ia;
    this.sendFn = a.sendFn;
    this.md = a.md;
    this.jd = a.jd;
    Zr(this) && (!this.aa || this.aa("networkless_logging")) && $r(this);
  }
  function $r(a) {
    Zr(a) &&
      !a.Lb &&
      ((a.g = !0),
      a.lc && Math.random() <= a.hc && a.fa.df(a.Z),
      as(a),
      a.ia.ya() && a.Wb(),
      a.ia.qa(a.md, a.Wb.bind(a)),
      a.ia.qa(a.jd, a.Jd.bind(a)));
  }
  m = Yr.prototype;
  m.writeThenSend = function (a, b) {
    var c = this;
    b = void 0 === b ? {} : b;
    if (Zr(this) && this.g) {
      var d = {
        url: a,
        options: b,
        timestamp: this.now(),
        status: "NEW",
        sendCount: 0,
      };
      this.fa
        .set(d, this.Z)
        .then(function (e) {
          d.id = e;
          c.ia.ya() && bs(c, d);
        })
        .catch(function (e) {
          bs(c, d);
          cs(c, e);
        });
    } else this.sendFn(a, b);
  };
  m.sendThenWrite = function (a, b, c) {
    var d = this;
    b = void 0 === b ? {} : b;
    if (Zr(this) && this.g) {
      var e = {
        url: a,
        options: b,
        timestamp: this.now(),
        status: "NEW",
        sendCount: 0,
      };
      this.aa && this.aa("nwl_skip_retry") && (e.skipRetry = c);
      if (
        this.ia.ya() ||
        (this.aa && this.aa("nwl_aggressive_send_then_write") && !e.skipRetry)
      ) {
        if (!e.skipRetry) {
          var f = b.onError ? b.onError : function () {};
          b.onError = function (g, h) {
            return B(function (l) {
              if (1 == l.g)
                return A(
                  l,
                  d.fa.set(e, d.Z).catch(function (k) {
                    cs(d, k);
                  }),
                  2
                );
              f(g, h);
              l.g = 0;
            });
          };
        }
        this.sendFn(a, b, e.skipRetry);
      } else
        this.fa.set(e, this.Z).catch(function (g) {
          d.sendFn(a, b, e.skipRetry);
          cs(d, g);
        });
    } else this.sendFn(a, b, this.aa && this.aa("nwl_skip_retry") && c);
  };
  m.sendAndWrite = function (a, b) {
    var c = this;
    b = void 0 === b ? {} : b;
    if (Zr(this) && this.g) {
      var d = {
          url: a,
          options: b,
          timestamp: this.now(),
          status: "NEW",
          sendCount: 0,
        },
        e = !1,
        f = b.onSuccess ? b.onSuccess : function () {};
      d.options.onSuccess = function (g, h) {
        void 0 !== d.id ? c.fa.ob(d.id, c.Z) : (e = !0);
        c.ia.fb && c.aa && c.aa("vss_network_hint") && c.ia.fb(!0);
        f(g, h);
      };
      this.sendFn(d.url, d.options, void 0, !0);
      this.fa
        .set(d, this.Z)
        .then(function (g) {
          d.id = g;
          e && c.fa.ob(d.id, c.Z);
        })
        .catch(function (g) {
          cs(c, g);
        });
    } else this.sendFn(a, b, void 0, !0);
  };
  m.Wb = function () {
    var a = this;
    if (!Zr(this)) throw Error("IndexedDB is not supported: throttleSend");
    this.l ||
      (this.l = this.Ea.Ha(function () {
        var b;
        return B(function (c) {
          if (1 == c.g) return A(c, a.fa.Wd("NEW", a.Z), 2);
          if (3 != c.g)
            return (b = c.l), b ? A(c, bs(a, b), 3) : (a.Jd(), c.return());
          a.l && ((a.l = 0), a.Wb());
          c.g = 0;
        });
      }, this.Le));
  };
  m.Jd = function () {
    this.Ea.xa(this.l);
    this.l = 0;
  };
  function bs(a, b) {
    var c;
    return B(function (d) {
      switch (d.g) {
        case 1:
          if (!Zr(a)) throw Error("IndexedDB is not supported: immediateSend");
          if (void 0 === b.id) {
            d.O(2);
            break;
          }
          return A(d, a.fa.ug(b.id, a.Z), 3);
        case 3:
          (c = d.l) ||
            a.rb(Error("The request cannot be found in the database."));
        case 2:
          if (ds(a, b, a.ze)) {
            d.O(4);
            break;
          }
          a.rb(
            Error("Networkless Logging: Stored logs request expired age limit")
          );
          if (void 0 === b.id) {
            d.O(5);
            break;
          }
          return A(d, a.fa.ob(b.id, a.Z), 5);
        case 5:
          return d.return();
        case 4:
          b.skipRetry || (b = es(a, b));
          if (!b) {
            d.O(0);
            break;
          }
          if (!b.skipRetry || void 0 === b.id) {
            d.O(8);
            break;
          }
          return A(d, a.fa.ob(b.id, a.Z), 8);
        case 8:
          a.sendFn(b.url, b.options, !!b.skipRetry), (d.g = 0);
      }
    });
  }
  function es(a, b) {
    if (!Zr(a))
      throw Error("IndexedDB is not supported: updateRequestHandlers");
    var c = b.options.onError ? b.options.onError : function () {};
    b.options.onError = function (e, f) {
      var g, h, l, k;
      return B(function (n) {
        switch (n.g) {
          case 1:
            g = fs(f);
            (h = gs(f)) &&
              a.aa &&
              a.aa("web_enable_error_204") &&
              a.handleError(
                Error("Request failed due to compression"),
                b.url,
                f
              );
            if (
              !(
                (a.aa && a.aa("nwl_consider_error_code") && g) ||
                (a.aa &&
                  !a.aa("nwl_consider_error_code") &&
                  a.potentialEsfErrorCounter <= a.xc)
              )
            ) {
              n.O(2);
              break;
            }
            if (!a.ia.Bc) {
              n.O(3);
              break;
            }
            return A(n, a.ia.Bc(), 3);
          case 3:
            if (a.ia.ya()) {
              n.O(2);
              break;
            }
            c(e, f);
            if (
              !a.aa ||
              !a.aa("nwl_consider_error_code") ||
              void 0 === (null == (l = b) ? void 0 : l.id)
            ) {
              n.O(6);
              break;
            }
            return A(n, a.fa.sd(b.id, a.Z, !1), 6);
          case 6:
            return n.return();
          case 2:
            if (
              a.aa &&
              a.aa("nwl_consider_error_code") &&
              !g &&
              a.potentialEsfErrorCounter > a.xc
            )
              return n.return();
            a.potentialEsfErrorCounter++;
            if (void 0 === (null == (k = b) ? void 0 : k.id)) {
              n.O(8);
              break;
            }
            return b.sendCount < a.Ce
              ? A(n, a.fa.sd(b.id, a.Z, !0, h ? !1 : void 0), 12)
              : A(n, a.fa.ob(b.id, a.Z), 8);
          case 12:
            a.Ea.Ha(function () {
              a.ia.ya() && a.Wb();
            }, a.Be);
          case 8:
            c(e, f), (n.g = 0);
        }
      });
    };
    var d = b.options.onSuccess ? b.options.onSuccess : function () {};
    b.options.onSuccess = function (e, f) {
      var g;
      return B(function (h) {
        if (1 == h.g)
          return void 0 === (null == (g = b) ? void 0 : g.id)
            ? h.O(2)
            : A(h, a.fa.ob(b.id, a.Z), 2);
        a.ia.fb && a.aa && a.aa("vss_network_hint") && a.ia.fb(!0);
        d(e, f);
        h.g = 0;
      });
    };
    return b;
  }
  function ds(a, b, c) {
    b = b.timestamp;
    return a.now() - b >= c ? !1 : !0;
  }
  function as(a) {
    if (!Zr(a)) throw Error("IndexedDB is not supported: retryQueuedRequests");
    a.fa.Wd("QUEUED", a.Z).then(function (b) {
      b && !ds(a, b, a.we)
        ? a.Ea.Ha(function () {
            return B(function (c) {
              if (1 == c.g)
                return void 0 === b.id ? c.O(2) : A(c, a.fa.sd(b.id, a.Z), 2);
              as(a);
              c.g = 0;
            });
          })
        : a.ia.ya() && a.Wb();
    });
  }
  function cs(a, b) {
    a.Qe && !a.ia.ya() ? a.Qe(b) : a.handleError(b);
  }
  function Zr(a) {
    return !!a.Z || a.dc;
  }
  function fs(a) {
    var b;
    return (a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code) &&
      400 <= a &&
      599 >= a
      ? !1
      : !0;
  }
  function gs(a) {
    var b;
    a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code;
    return !(400 !== a && 415 !== a);
  }
  var hs;
  function is() {
    if (hs) return hs();
    var a = {};
    hs = $q("LogsDatabaseV2", {
      yb: ((a.LogsRequestsStore = { Hb: 2 }), a),
      shared: !1,
      upgrade: function (b, c, d) {
        c(2) &&
          jq(b, "LogsRequestsStore", { keyPath: "id", autoIncrement: !0 });
        c(3);
        c(5) &&
          ((d = d.objectStore("LogsRequestsStore")),
          d.g.indexNames.contains("newRequest") &&
            d.g.deleteIndex("newRequest"),
          qq(d, "newRequestV2", ["status", "interface", "timestamp"]));
        c(7) &&
          b.g.objectStoreNames.contains("sapisid") &&
          b.g.deleteObjectStore("sapisid");
        c(9) &&
          b.g.objectStoreNames.contains("SWHealthLog") &&
          b.g.deleteObjectStore("SWHealthLog");
      },
      version: 9,
    });
    return hs();
  }
  function js(a) {
    return Dq(is(), a);
  }
  function ks(a, b) {
    var c, d, e, f;
    return B(function (g) {
      if (1 == g.g)
        return (
          (c = {
            startTime: Y(),
            infos: { transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE" },
            ticks: {},
          }),
          A(g, js(b), 2)
        );
      if (3 != g.g)
        return (
          (d = g.l),
          (e = Object.assign({}, a, {
            options: JSON.parse(JSON.stringify(a.options)),
            interface: U("INNERTUBE_CONTEXT_CLIENT_NAME", 0),
          })),
          A(g, lq(d, "LogsRequestsStore", e), 3)
        );
      f = g.l;
      c.ticks.tc = Y();
      ls(c);
      return g.return(f);
    });
  }
  function ms(a, b) {
    var c, d, e, f, g, h, l, k;
    return B(function (n) {
      if (1 == n.g)
        return (
          (c = {
            startTime: Y(),
            infos: { transactionType: "YT_IDB_TRANSACTION_TYPE_READ" },
            ticks: {},
          }),
          A(n, js(b), 2)
        );
      if (3 != n.g)
        return (
          (d = n.l),
          (e = U("INNERTUBE_CONTEXT_CLIENT_NAME", 0)),
          (f = [a, e, 0]),
          (g = [a, e, Y()]),
          (h = IDBKeyRange.bound(f, g)),
          (l = "prev"),
          V("use_fifo_for_networkless") && (l = "next"),
          (k = void 0),
          A(
            n,
            iq(
              d,
              ["LogsRequestsStore"],
              { mode: "readwrite", pa: !0 },
              function (p) {
                return wq(
                  p.objectStore("LogsRequestsStore").index("newRequestV2"),
                  { query: h, direction: l },
                  function (r) {
                    r.cursor.value &&
                      ((k = r.cursor.value),
                      "NEW" === a && ((k.status = "QUEUED"), r.update(k)));
                  }
                );
              }
            ),
            3
          )
        );
      c.ticks.tc = Y();
      ls(c);
      return n.return(k);
    });
  }
  function ns(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return A(d, js(b), 2);
      c = d.l;
      return d.return(
        iq(
          c,
          ["LogsRequestsStore"],
          { mode: "readwrite", pa: !0 },
          function (e) {
            var f = e.objectStore("LogsRequestsStore");
            return f.get(a).then(function (g) {
              if (g)
                return (
                  (g.status = "QUEUED"),
                  eq(f.g.put(g, void 0)).then(function () {
                    return g;
                  })
                );
            });
          }
        )
      );
    });
  }
  function os(a, b, c, d) {
    c = void 0 === c ? !0 : c;
    var e;
    return B(function (f) {
      if (1 == f.g) return A(f, js(b), 2);
      e = f.l;
      return f.return(
        iq(
          e,
          ["LogsRequestsStore"],
          { mode: "readwrite", pa: !0 },
          function (g) {
            var h = g.objectStore("LogsRequestsStore");
            return h.get(a).then(function (l) {
              return l
                ? ((l.status = "NEW"),
                  c && (l.sendCount += 1),
                  void 0 !== d && (l.options.compress = d),
                  eq(h.g.put(l, void 0)).then(function () {
                    return l;
                  }))
                : Yp.resolve(void 0);
            });
          }
        )
      );
    });
  }
  function ps(a, b) {
    var c;
    return B(function (d) {
      if (1 == d.g) return A(d, js(b), 2);
      c = d.l;
      return d.return(c.delete("LogsRequestsStore", a));
    });
  }
  function qs(a) {
    var b, c;
    return B(function (d) {
      if (1 == d.g) return A(d, js(a), 2);
      b = d.l;
      c = Y() - 2592e6;
      return A(
        d,
        iq(
          b,
          ["LogsRequestsStore"],
          { mode: "readwrite", pa: !0 },
          function (e) {
            return sq(e.objectStore("LogsRequestsStore"), {}, function (f) {
              if (f.cursor.value.timestamp <= c)
                return f.delete().then(function () {
                  return tq(f);
                });
            });
          }
        ),
        0
      );
    });
  }
  function rs() {
    B(function (a) {
      return A(a, Wq(), 0);
    });
  }
  function ls(a) {
    V("nwl_csi_killswitch") ||
      yr("networkless_performance", a, { sampleRate: 1 });
  }
  var ss = {
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
  var ts = {},
    us = $q("ServiceWorkerLogsDatabase", {
      yb: ((ts.SWHealthLog = { Hb: 1 }), ts),
      shared: !0,
      upgrade: function (a, b) {
        b(1) &&
          qq(
            jq(a, "SWHealthLog", { keyPath: "id", autoIncrement: !0 }),
            "swHealthNewRequest",
            ["interface", "timestamp"]
          );
      },
      version: 1,
    });
  function vs(a) {
    return Dq(us(), a);
  }
  function ws(a) {
    var b, c;
    B(function (d) {
      if (1 == d.g) return A(d, vs(a), 2);
      b = d.l;
      c = Y() - 2592e6;
      return A(
        d,
        iq(b, ["SWHealthLog"], { mode: "readwrite", pa: !0 }, function (e) {
          return sq(e.objectStore("SWHealthLog"), {}, function (f) {
            if (f.cursor.value.timestamp <= c)
              return f.delete().then(function () {
                return tq(f);
              });
          });
        }),
        0
      );
    });
  }
  function xs(a) {
    var b;
    return B(function (c) {
      if (1 == c.g) return A(c, vs(a), 2);
      b = c.l;
      return A(c, b.clear("SWHealthLog"), 0);
    });
  }
  var ys = {},
    zs = 0;
  function As(a) {
    var b = new Image(),
      c = "" + zs++;
    ys[c] = b;
    b.onload = b.onerror = function () {
      delete ys[c];
    };
    b.src = a;
  }
  var Bs;
  function Cs() {
    Bs || (Bs = new Bp("yt.offline"));
    return Bs;
  }
  function Ds(a) {
    if (V("offline_error_handling")) {
      var b = Cs().get("errors", !0) || {};
      b[a.message] = { name: a.name, stack: a.stack };
      a.level && (b[a.message].level = a.level);
      Cs().set("errors", b, 2592e3, !0);
    }
  }
  function Es() {
    this.g = new Map();
    this.l = !1;
  }
  function Fs() {
    if (!Es.g) {
      var a = D("yt.networkRequestMonitor.instance") || new Es();
      H("yt.networkRequestMonitor.instance", a);
      Es.g = a;
    }
    return Es.g;
  }
  Es.prototype.requestComplete = function (a, b) {
    b && (this.l = !0);
    a = this.removeParams(a);
    this.g.get(a) || this.g.set(a, b);
  };
  Es.prototype.isEndpointCFR = function (a) {
    a = this.removeParams(a);
    return (a = this.g.get(a)) ? !1 : !1 === a && this.l ? !0 : null;
  };
  Es.prototype.removeParams = function (a) {
    return a.split("?")[0];
  };
  Es.prototype.removeParams = Es.prototype.removeParams;
  Es.prototype.isEndpointCFR = Es.prototype.isEndpointCFR;
  Es.prototype.requestComplete = Es.prototype.requestComplete;
  Es.getInstance = Fs;
  function Z() {
    Nc.call(this);
    var a = this;
    this.i = !1;
    this.l = fg();
    this.l.qa("networkstatus-online", function () {
      if (a.i && V("offline_error_handling")) {
        var b = Cs().get("errors", !0);
        if (b) {
          for (var c in b)
            if (b[c]) {
              var d = new Ro(c, "sent via offline_errors");
              d.name = b[c].name;
              d.stack = b[c].stack;
              d.level = b[c].level;
              Zn(d);
            }
          Cs().set("errors", {}, 2592e3, !0);
        }
      }
    });
  }
  y(Z, Nc);
  function Gs() {
    if (!Z.g) {
      var a = D("yt.networkStatusManager.instance") || new Z();
      H("yt.networkStatusManager.instance", a);
      Z.g = a;
    }
    return Z.g;
  }
  m = Z.prototype;
  m.ya = function () {
    return this.l.ya();
  };
  m.fb = function (a) {
    this.l.l = a;
  };
  m.Bf = function () {
    var a = window.navigator.onLine;
    return void 0 === a ? !0 : a;
  };
  m.nf = function () {
    this.i = !0;
  };
  m.qa = function (a, b) {
    return this.l.qa(a, b);
  };
  m.Bc = function (a) {
    a = dg(this.l, a);
    a.then(function (b) {
      V("use_cfr_monitor") && Fs().requestComplete("generate_204", b);
    });
    return a;
  };
  Z.prototype.sendNetworkCheckRequest = Z.prototype.Bc;
  Z.prototype.listen = Z.prototype.qa;
  Z.prototype.enableErrorFlushing = Z.prototype.nf;
  Z.prototype.getWindowStatus = Z.prototype.Bf;
  Z.prototype.networkStatusHint = Z.prototype.fb;
  Z.prototype.isNetworkAvailable = Z.prototype.ya;
  Z.getInstance = Gs;
  function Hs(a) {
    a = void 0 === a ? {} : a;
    Nc.call(this);
    var b = this;
    this.l = this.s = 0;
    this.i = Gs();
    var c = D("yt.networkStatusManager.instance.listen").bind(this.i);
    c &&
      (a.zc
        ? ((this.zc = a.zc),
          c("networkstatus-online", function () {
            Is(b, "publicytnetworkstatus-online");
          }),
          c("networkstatus-offline", function () {
            Is(b, "publicytnetworkstatus-offline");
          }))
        : (c("networkstatus-online", function () {
            Oc(b, "publicytnetworkstatus-online");
          }),
          c("networkstatus-offline", function () {
            Oc(b, "publicytnetworkstatus-offline");
          })));
  }
  y(Hs, Nc);
  Hs.prototype.ya = function () {
    var a = D("yt.networkStatusManager.instance.isNetworkAvailable");
    return a ? a.bind(this.i)() : !0;
  };
  Hs.prototype.fb = function (a) {
    var b = D("yt.networkStatusManager.instance.networkStatusHint").bind(
      this.i
    );
    b && b(a);
  };
  Hs.prototype.Bc = function (a) {
    var b = this,
      c;
    return B(function (d) {
      c = D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(
        b.i
      );
      return V("skip_network_check_if_cfr") &&
        Fs().isEndpointCFR("generate_204")
        ? d.return(
            new Promise(function (e) {
              var f;
              b.fb((null == (f = window.navigator) ? void 0 : f.onLine) || !0);
              e(b.ya());
            })
          )
        : c
        ? d.return(c(a))
        : d.return(!0);
    });
  };
  function Is(a, b) {
    a.zc
      ? a.l
        ? (gg.xa(a.s),
          (a.s = gg.Ha(function () {
            a.o !== b && (Oc(a, b), (a.o = b), (a.l = Y()));
          }, a.zc - (Y() - a.l))))
        : (Oc(a, b), (a.o = b), (a.l = Y()))
      : Oc(a, b);
  }
  var Js;
  function Ks() {
    var a = Yr.call;
    Js || (Js = new Hs({ ji: !0, Vh: !0 }));
    a.call(Yr, this, {
      fa: { df: qs, ob: ps, Wd: ms, ug: ns, sd: os, set: ks },
      ia: Js,
      handleError: function (b, c, d) {
        var e,
          f = null == d ? void 0 : null == (e = d.error) ? void 0 : e.code;
        if (400 === f || 415 === f) {
          var g;
          $n(
            new Ro(
              b.message,
              c,
              null == d ? void 0 : null == (g = d.error) ? void 0 : g.code
            ),
            void 0,
            void 0,
            void 0,
            !0
          );
        } else Zn(b);
      },
      rb: $n,
      sendFn: Ls,
      now: Y,
      Qe: Ds,
      Ea: Ap(),
      md: "publicytnetworkstatus-online",
      jd: "publicytnetworkstatus-offline",
      lc: !0,
      hc: 0.1,
      xc: Tn("potential_esf_error_limit", 10),
      aa: V,
      Lb: !(
        So() && "www.youtube-nocookie.com" !== Ib(document.location.toString())
      ),
    });
    this.i = new Pl();
    V("networkless_immediately_drop_all_requests") && rs();
    Xq("LogsDatabaseV2");
  }
  y(Ks, Yr);
  function Ms() {
    var a = D("yt.networklessRequestController.instance");
    a ||
      ((a = new Ks()),
      H("yt.networklessRequestController.instance", a),
      V("networkless_logging") &&
        Pq().then(function (b) {
          a.Z = b;
          $r(a);
          a.i.resolve();
          a.lc && Math.random() <= a.hc && a.Z && ws(a.Z);
          V("networkless_immediately_drop_sw_health_store") && Ns(a);
        }));
    return a;
  }
  Ks.prototype.writeThenSend = function (a, b) {
    b || (b = {});
    b = Os(a, b);
    So() || (this.g = !1);
    Yr.prototype.writeThenSend.call(this, a, b);
  };
  Ks.prototype.sendThenWrite = function (a, b, c) {
    b || (b = {});
    b = Os(a, b);
    So() || (this.g = !1);
    Yr.prototype.sendThenWrite.call(this, a, b, c);
  };
  Ks.prototype.sendAndWrite = function (a, b) {
    b || (b = {});
    b = Os(a, b);
    So() || (this.g = !1);
    Yr.prototype.sendAndWrite.call(this, a, b);
  };
  Ks.prototype.awaitInitialization = function () {
    return this.i.promise;
  };
  function Ns(a) {
    var b;
    B(function (c) {
      if (!a.Z) throw ((b = Up("clearSWHealthLogsDb")), b);
      return c.return(
        xs(a.Z).catch(function (d) {
          a.handleError(d);
        })
      );
    });
  }
  function Ls(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    b = V("web_fp_via_jspb") ? Object.assign({}, b) : b;
    V("use_cfr_monitor") && Ps(a, b);
    if (V("use_request_time_ms_header"))
      b.headers &&
        jo(a) &&
        (b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(Y())));
    else {
      var e;
      if (null == (e = b.postParams) ? 0 : e.requestTimeMs)
        b.postParams.requestTimeMs = Math.round(Y());
    }
    if (c && 0 === Object.keys(b).length) {
      var f = void 0 === f ? "" : f;
      var g = void 0 === g ? !1 : g;
      var h = void 0 === h ? !1 : h;
      if (a)
        if (f) wo(a, void 0, "POST", f, void 0);
        else if (U("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) || h)
          wo(a, void 0, "GET", "", void 0, void 0, g, h);
        else {
          b: {
            try {
              var l = new Oa({ url: a });
              if ((l.i && l.l) || l.m) {
                var k = Hb(a.match(Gb)[5] || null),
                  n;
                if (!(n = !k || !k.endsWith("/aclk"))) {
                  var p = a.search(Pb),
                    r = Ob(a, 0, "ri", p);
                  if (0 > r) var q = null;
                  else {
                    var t = a.indexOf("&", r);
                    if (0 > t || t > p) t = p;
                    q = Fb(a.slice(r + 3, -1 !== t ? t : 0));
                  }
                  n = "1" !== q;
                }
                var u = !n;
                break b;
              }
            } catch (E) {}
            u = !1;
          }
          if (u) {
            b: {
              try {
                if (
                  window.navigator &&
                  window.navigator.sendBeacon &&
                  window.navigator.sendBeacon(a, "")
                ) {
                  var z = !0;
                  break b;
                }
              } catch (E) {}
              z = !1;
            }
            c = z ? !0 : !1;
          } else c = !1;
          c || As(a);
        }
    } else
      b.compress
        ? b.postBody
          ? ("string" !== typeof b.postBody &&
              (b.postBody = JSON.stringify(b.postBody)),
            Qr(a, b.postBody, b, Ao, d))
          : Qr(a, JSON.stringify(b.postParams), b, zo, d)
        : Ao(a, b);
  }
  function Os(a, b) {
    V("use_event_time_ms_header") &&
      jo(a) &&
      (b.headers || (b.headers = {}),
      (b.headers["X-Goog-Event-Time"] = JSON.stringify(Math.round(Y()))));
    return b;
  }
  function Ps(a, b) {
    var c = b.onError ? b.onError : function () {};
    b.onError = function (e, f) {
      Fs().requestComplete(a, !1);
      c(e, f);
    };
    var d = b.onSuccess ? b.onSuccess : function () {};
    b.onSuccess = function (e, f) {
      Fs().requestComplete(a, !0);
      d(e, f);
    };
  }
  var Qs = C.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
  };
  H("ytNetworklessLoggingInitializationOptions", Qs);
  function Rs(a) {
    var b = this;
    this.config_ = null;
    a ? (this.config_ = a) : lr() && (this.config_ = mr());
    Vo(function () {
      Wr(b);
    }, 5e3);
  }
  Rs.prototype.isReady = function () {
    !this.config_ && lr() && (this.config_ = mr());
    return !!this.config_;
  };
  function Xr(a, b, c, d) {
    function e(t) {
      t = void 0 === t ? !1 : t;
      var u;
      if (
        d.retry &&
        "www.youtube-nocookie.com" != h &&
        (t ||
          V("skip_ls_gel_retry") ||
          "application/json" !== g.headers["Content-Type"] ||
          (u = Ur(b, c, k, l)),
        u)
      ) {
        var z = g.onSuccess,
          E = g.onFetchSuccess;
        g.onSuccess = function (da, kb) {
          Vr(u);
          z(da, kb);
        };
        c.onFetchSuccess = function (da, kb) {
          Vr(u);
          E(da, kb);
        };
      }
      try {
        if (t && d.retry && !d.networklessOptions.bypassNetworkless)
          (g.method = "POST"),
            d.networklessOptions.writeThenSend
              ? Ms().writeThenSend(q, g)
              : Ms().sendAndWrite(q, g);
        else if (d.compress) {
          var Q = !d.networklessOptions.writeThenSend;
          if (g.postBody) {
            var X = g.postBody;
            "string" !== typeof X && (X = JSON.stringify(g.postBody));
            Qr(q, X, g, Ao, Q);
          } else Qr(q, JSON.stringify(g.postParams), g, zo, Q);
        } else V("web_all_payloads_via_jspb") ? Ao(q, g) : zo(q, g);
      } catch (da) {
        if ("InvalidAccessError" === da.name)
          u && (Vr(u), (u = 0)),
            $n(Error("An extension is blocking network request."));
        else throw da;
      }
      u &&
        Vo(function () {
          Wr(a);
        }, 5e3);
    }
    !U("VISITOR_DATA") &&
      "visitor_id" !== b &&
      0.01 > Math.random() &&
      $n(
        new Ro("Missing VISITOR_DATA when sending innertube request.", b, c, d)
      );
    if (!a.isReady()) {
      var f = new Ro("innertube xhrclient not ready", b, c, d);
      Zn(f);
      throw f;
    }
    var g = {
      headers: d.headers || {},
      method: "POST",
      postParams: c,
      postBody: d.postBody,
      postBodyFormat: d.postBodyFormat || "JSON",
      onTimeout: function () {
        d.onTimeout();
      },
      onFetchTimeout: d.onTimeout,
      onSuccess: function (t, u) {
        if (d.onSuccess) d.onSuccess(u);
      },
      onFetchSuccess: function (t) {
        if (d.onSuccess) d.onSuccess(t);
      },
      onError: function (t, u) {
        if (d.onError) d.onError(u);
      },
      onFetchError: function (t) {
        if (d.onError) d.onError(t);
      },
      timeout: d.timeout,
      withCredentials: !0,
      compress: d.compress,
    };
    g.headers["Content-Type"] ||
      (g.headers["Content-Type"] = "application/json");
    var h = "";
    (f = a.config_.fg) && (h = f);
    var l = a.config_.hg || !1,
      k = ur(l, h, d);
    Object.assign(g.headers, k);
    (f = g.headers.Authorization) &&
      !h &&
      l &&
      (g.headers["x-origin"] = window.location.origin);
    var n = "/youtubei/" + a.config_.dg + "/" + b,
      p = { alt: "json" },
      r = a.config_.gg && f;
    r = r && f.startsWith("Bearer");
    r || (p.key = a.config_.cg);
    var q = io("" + h + n, p || {}, !0);
    D("ytNetworklessLoggingInitializationOptions") && Qs.isNwlInitialized
      ? Nq().then(function (t) {
          e(t);
        })
      : e(!1);
  }
  var Ss = 0;
  H(
    "ytDomDomGetNextId",
    D("ytDomDomGetNextId") ||
      function () {
        return ++Ss;
      }
  );
  H("ytEventsEventsListeners", C.ytEventsEventsListeners || {});
  H("ytEventsEventsCounter", C.ytEventsEventsCounter || { count: 0 });
  function Ts() {
    var a = D("_lact", window);
    return null == a ? -1 : Math.max(Date.now() - a, 0);
  }
  var Us = C.ytPubsubPubsubInstance || new R(),
    Vs = C.ytPubsubPubsubSubscribedKeys || {},
    Ws = C.ytPubsubPubsubTopicToKeys || {},
    Xs = C.ytPubsubPubsubIsSynchronous || {};
  R.prototype.subscribe = R.prototype.subscribe;
  R.prototype.unsubscribeByKey = R.prototype.Fc;
  R.prototype.publish = R.prototype.ue;
  R.prototype.clear = R.prototype.clear;
  H("ytPubsubPubsubInstance", Us);
  H("ytPubsubPubsubTopicToKeys", Ws);
  H("ytPubsubPubsubIsSynchronous", Xs);
  H("ytPubsubPubsubSubscribedKeys", Vs);
  var Ys = Symbol("injectionDeps");
  function Zs() {
    this.key = ir;
  }
  function $s() {
    this.l = new Map();
    this.g = new Map();
  }
  $s.prototype.resolve = function (a) {
    return a instanceof Zs ? at(this, a.key, [], !0) : at(this, a, []);
  };
  function at(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (-1 < c.indexOf(b)) throw Error("Deps cycle for: " + b);
    if (a.g.has(b)) return a.g.get(b);
    if (!a.l.has(b)) {
      if (d) return;
      throw Error("No provider for: " + b);
    }
    d = a.l.get(b);
    c.push(b);
    if (void 0 !== d.dh) var e = d.dh;
    else if (d.bh)
      (e = d[Ys] ? bt(a, d[Ys], c) : []), (e = d.bh.apply(d, x(e)));
    else if (d.ah) {
      e = d.ah;
      var f = e[Ys] ? bt(a, e[Ys], c) : [];
      e = new (Function.prototype.bind.apply(e, [null].concat(x(f))))();
    } else throw Error("Could not resolve providers for: " + b);
    c.pop();
    d.yi || a.g.set(b, e);
    return e;
  }
  function bt(a, b, c) {
    return b
      ? b.map(function (d) {
          return d instanceof Zs ? at(a, d.key, c, !0) : at(a, d, c);
        })
      : [];
  }
  var ct;
  function dt() {
    ct || (ct = new $s());
    return ct;
  }
  var et = window;
  function ft() {
    var a, b;
    return "h5vcc" in et &&
      (null == (a = et.h5vcc.traceEvent) ? 0 : a.traceBegin) &&
      (null == (b = et.h5vcc.traceEvent) ? 0 : b.traceEnd)
      ? 1
      : "performance" in et && et.performance.mark && et.performance.measure
      ? 2
      : 0;
  }
  function gt(a) {
    switch (ft()) {
      case 1:
        et.h5vcc.traceEvent.traceBegin("YTLR", a);
        break;
      case 2:
        et.performance.mark(a + "-start");
        break;
      case 0:
        break;
      default:
        Cb();
    }
  }
  function ht(a) {
    switch (ft()) {
      case 1:
        et.h5vcc.traceEvent.traceEnd("YTLR", a);
        break;
      case 2:
        var b = a + "-start",
          c = a + "-end";
        et.performance.mark(c);
        et.performance.measure(a, b, c);
        break;
      case 0:
        break;
      default:
        Cb();
    }
  }
  var it = V("web_enable_lifecycle_monitoring") && 0 !== ft(),
    jt = V("web_enable_lifecycle_monitoring");
  function kt(a) {
    var b = this;
    var c = void 0 === c ? 0 : c;
    var d = void 0 === d ? Ap() : d;
    this.m = c;
    this.l = d;
    this.i = new Pl();
    this.g = a;
    for (
      a = { cb: 0 };
      a.cb < this.g.length;
      a = { wc: void 0, cb: a.cb }, a.cb++
    )
      (a.wc = this.g[a.cb]),
        (c = (function (e) {
          return function () {
            e.wc.bd();
            b.g[e.cb].yc = !0;
            b.g.every(function (f) {
              return !0 === f.yc;
            }) && b.i.resolve();
          };
        })(a)),
        (d = this.l.Za(c, lt(this, a.wc))),
        (this.g[a.cb] = Object.assign({}, a.wc, { bd: c, jobId: d }));
  }
  function mt(a) {
    var b = Array.from(a.g.keys()).sort(function (d, e) {
      return lt(a, a.g[e]) - lt(a, a.g[d]);
    });
    b = w(b);
    for (var c = b.next(); !c.done; c = b.next())
      (c = a.g[c.value]),
        void 0 === c.jobId || c.yc || (a.l.xa(c.jobId), a.l.Za(c.bd, 10));
  }
  kt.prototype.cancel = function () {
    for (var a = w(this.g), b = a.next(); !b.done; b = a.next())
      (b = b.value),
        void 0 === b.jobId || b.yc || this.l.xa(b.jobId),
        (b.yc = !0);
    this.i.resolve();
  };
  function lt(a, b) {
    var c;
    return null != (c = b.priority) ? c : a.m;
  }
  function nt(a) {
    this.state = a;
    this.i = [];
    this.o = void 0;
    this.u = {};
    it && gt(this.state);
  }
  nt.prototype.install = function (a) {
    this.i.push(a);
    return this;
  };
  function ot(a) {
    it && ht(a.state);
    var b = a.transitions.find(function (d) {
      return Array.isArray(d.from)
        ? d.from.find(function (e) {
            return e === a.state && "none" === d.Va;
          })
        : d.from === a.state && "none" === d.Va;
    });
    if (b) {
      a.l && (mt(a.l), (a.l = void 0));
      jt &&
        console.groupCollapsed &&
        console.groupEnd &&
        (console.groupCollapsed(
          "[" + a.constructor.name + "] '" + a.state + "' to 'none'"
        ),
        console.log("with message: ", void 0),
        console.groupEnd());
      a.state = "none";
      it && gt(a.state);
      b = b.action.bind(a);
      var c = a.i
        .filter(function (d) {
          return d.none;
        })
        .map(function (d) {
          return d.none;
        });
      b(pt(a, c), void 0);
    } else throw Error("no transition specified from " + a.state + " to none");
  }
  function pt(a, b) {
    var c = b.filter(function (e) {
        return 10 === qt(a, e);
      }),
      d = b.filter(function (e) {
        return 10 !== qt(a, e);
      });
    return a.u.wi
      ? function () {
          var e = Da.apply(0, arguments);
          return B(function (f) {
            if (1 == f.g) return A(f, a.D.apply(a, [c].concat(x(e))), 2);
            a.s.apply(a, [d].concat(x(e)));
            f.g = 0;
          });
        }
      : function () {
          var e = Da.apply(0, arguments);
          a.F.apply(a, [c].concat(x(e)));
          a.s.apply(a, [d].concat(x(e)));
        };
  }
  nt.prototype.F = function (a) {
    for (
      var b = Da.apply(1, arguments), c = Ap(), d = w(a), e = d.next(), f = {};
      !e.done;
      f = { Rb: void 0 }, e = d.next()
    )
      (f.Rb = e.value),
        c.Gb(
          (function (g) {
            return function () {
              rt(g.Rb.name);
              g.Rb.Mc.apply(g.Rb, x(b));
              st(g.Rb.name);
            };
          })(f)
        );
  };
  nt.prototype.D = function (a) {
    var b = Da.apply(1, arguments),
      c,
      d,
      e,
      f,
      g;
    return B(function (h) {
      1 == h.g && ((c = Ap()), (d = w(a)), (e = d.next()), (f = {}));
      if (3 != h.g) {
        if (e.done) return h.O(0);
        f.ub = e.value;
        f.Zb = void 0;
        g = (function (l) {
          return function () {
            rt(l.ub.name);
            var k = l.ub.Mc.apply(l.ub, x(b));
            "function" === typeof (null == k ? void 0 : k.then)
              ? (l.Zb = k.then(function () {
                  st(l.ub.name);
                }))
              : st(l.ub.name);
          };
        })(f);
        c.Gb(g);
        return f.Zb ? A(h, f.Zb, 3) : h.O(3);
      }
      f = { ub: void 0, Zb: void 0 };
      e = d.next();
      return h.O(2);
    });
  };
  nt.prototype.s = function (a) {
    var b = Da.apply(1, arguments),
      c = this,
      d = a.map(function (e) {
        return {
          bd: function () {
            rt(e.name);
            e.Mc.apply(e, x(b));
            st(e.name);
          },
          priority: qt(c, e),
        };
      });
    d.length && (this.l = new kt(d));
  };
  function qt(a, b) {
    var c, d;
    return null != (d = null != (c = a.o) ? c : b.priority) ? d : 0;
  }
  function rt(a) {
    it && a && gt(a);
  }
  function st(a) {
    it && a && ht(a);
  }
  ea.Object.defineProperties(nt.prototype, {
    m: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.state;
      },
    },
  });
  function tt(a) {
    nt.call(this, void 0 === a ? "none" : a);
    this.g = null;
    this.o = 10;
    this.transitions = [
      { from: "none", Va: "application_navigating", action: this.A },
      { from: "application_navigating", Va: "none", action: this.B },
      {
        from: "application_navigating",
        Va: "application_navigating",
        action: function () {},
      },
      { from: "none", Va: "none", action: function () {} },
    ];
  }
  var ut;
  y(tt, nt);
  tt.prototype.A = function (a, b) {
    var c = this;
    this.g = Vo(function () {
      "application_navigating" === c.m && ot(c);
    }, 5e3);
    a(null == b ? void 0 : b.event);
  };
  tt.prototype.B = function (a, b) {
    this.g && (gg.xa(this.g), (this.g = null));
    a(null == b ? void 0 : b.event);
  };
  function vt() {
    ut || (ut = new tt());
    return ut;
  }
  var wt = [];
  H("yt.logging.transport.getScrapedGelPayloads", function () {
    return wt;
  });
  function xt() {
    this.store = {};
    this.g = {};
  }
  xt.prototype.storePayload = function (a, b) {
    a = zt(a);
    this.store[a]
      ? this.store[a].push(b)
      : ((this.g = {}), (this.store[a] = [b]));
    return a;
  };
  xt.prototype.smartExtractMatchingEntries = function (a) {
    if (!a.keys.length) return [];
    for (
      var b = At(this, a.keys.splice(0, 1)[0]), c = [], d = 0;
      d < b.length;
      d++
    )
      this.store[b[d]] &&
        a.sizeLimit &&
        (this.store[b[d]].length <= a.sizeLimit
          ? (c.push.apply(c, x(this.store[b[d]])), delete this.store[b[d]])
          : c.push.apply(c, x(this.store[b[d]].splice(0, a.sizeLimit))));
    (null == a ? 0 : a.sizeLimit) &&
      c.length < (null == a ? void 0 : a.sizeLimit) &&
      ((a.sizeLimit -= c.length),
      c.push.apply(c, x(this.smartExtractMatchingEntries(a))));
    return c;
  };
  xt.prototype.extractMatchingEntries = function (a) {
    a = At(this, a);
    for (var b = [], c = 0; c < a.length; c++)
      this.store[a[c]] &&
        (b.push.apply(b, x(this.store[a[c]])), delete this.store[a[c]]);
    return b;
  };
  xt.prototype.getSequenceCount = function (a) {
    a = At(this, a);
    for (var b = 0, c = 0; c < a.length; c++) {
      var d = void 0;
      b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0;
    }
    return b;
  };
  function At(a, b) {
    var c = zt(b);
    if (a.g[c]) return a.g[c];
    var d = Object.keys(a.store) || [];
    if (1 >= d.length && zt(b) === d[0]) return d;
    for (var e = [], f = 0; f < d.length; f++) {
      var g = d[f].split("/");
      if (Bt(b.auth, g[0])) {
        var h = b.isJspb;
        Bt(void 0 === h ? "undefined" : h ? "true" : "false", g[1]) &&
          Bt(b.cttAuthInfo, g[2]) &&
          ((h = b.tier),
          (h = void 0 === h ? "undefined" : JSON.stringify(h)),
          Bt(h, g[3]) && e.push(d[f]));
      }
    }
    return (a.g[c] = e);
  }
  function Bt(a, b) {
    return void 0 === a || "undefined" === a ? !0 : a === b;
  }
  xt.prototype.getSequenceCount = xt.prototype.getSequenceCount;
  xt.prototype.extractMatchingEntries = xt.prototype.extractMatchingEntries;
  xt.prototype.smartExtractMatchingEntries =
    xt.prototype.smartExtractMatchingEntries;
  xt.prototype.storePayload = xt.prototype.storePayload;
  function zt(a) {
    return [
      void 0 === a.auth ? "undefined" : a.auth,
      void 0 === a.isJspb ? "undefined" : a.isJspb,
      void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo,
      void 0 === a.tier ? "undefined" : a.tier,
    ].join("/");
  }
  var Ct = Tn("initial_gel_batch_timeout", 2e3),
    Dt = Tn("gel_queue_timeout_max_ms", 6e4),
    Et = Math.pow(2, 16) - 1,
    Ft = Tn("gel_min_batch_size", 5),
    Gt = void 0;
  function Ht() {
    this.m = this.g = this.l = 0;
    this.i = !1;
  }
  var It = new Ht(),
    Jt = new Ht(),
    Kt = new Ht(),
    Lt = new Ht(),
    Mt,
    Nt = !0,
    Ot = 1,
    Pt = new Map(),
    Qt = C.ytLoggingTransportTokensToCttTargetIds_ || {};
  H("ytLoggingTransportTokensToCttTargetIds_", Qt);
  var Rt = C.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
  H("ytLoggingTransportTokensToJspbCttTargetIds_", Rt);
  var St = {};
  function Tt() {
    var a = D("yt.logging.ims");
    a || ((a = new xt()), H("yt.logging.ims", a));
    return a;
  }
  function Ut(a, b) {
    if ("log_event" === a.endpoint) {
      Vt(a);
      var c = Wt(a),
        d = Xt(a.payload) || "",
        e = Yt(d),
        f = 200;
      if (e) {
        if (!1 === e.enabled && !V("web_payload_policy_disabled_killswitch"))
          return;
        f = Zt(e.tier);
        if (400 === f) {
          $t(a, b);
          return;
        }
      }
      St[c] = !0;
      e = { cttAuthInfo: c, isJspb: !1, tier: f };
      Tt().storePayload(e, a.payload);
      au(b, c, !1, e, bu(d));
    }
  }
  function cu(a, b, c) {
    if ("log_event" === b.endpoint) {
      Vt(void 0, b);
      var d = Wt(b, !0),
        e = Yt(a),
        f = 200;
      if (e) {
        if (!1 === e.enabled && !V("web_payload_policy_disabled_killswitch"))
          return;
        f = Zt(e.tier);
        if (400 === f) {
          du(a, b, c);
          return;
        }
      }
      St[d] = !0;
      e = { cttAuthInfo: d, isJspb: !0, tier: f };
      Tt().storePayload(e, b.payload.toJSON());
      au(c, d, !0, e, bu(a));
    }
  }
  function au(a, b, c, d, e) {
    function f() {
      eu(V("flush_only_full_queue") ? b : void 0, c, d.tier);
    }
    c = void 0 === c ? !1 : c;
    e = void 0 === e ? !1 : e;
    a && (Gt = new a());
    a =
      Tn("tvhtml5_logging_max_batch_ads_fork") ||
      Tn("web_logging_max_batch") ||
      100;
    var g = Y(),
      h = fu(c, d.tier),
      l = h.m;
    e && (h.i = !0);
    e = 0;
    d && (e = Tt().getSequenceCount(d));
    1e3 <= e
      ? f()
      : e >= a
      ? Mt ||
        (Mt = gu(function () {
          f();
          Mt = void 0;
        }, 0))
      : 10 <= g - l && (hu(c, d.tier), (h.m = g));
  }
  function $t(a, b) {
    if ("log_event" === a.endpoint) {
      Vt(a);
      var c = Wt(a),
        d = new Map();
      d.set(c, [a.payload]);
      var e = Xt(a.payload) || "";
      b && (Gt = new b());
      return new Ad(function (f, g) {
        Gt && Gt.isReady()
          ? iu(d, Gt, f, g, { bypassNetworkless: !0 }, !0, bu(e))
          : f();
      });
    }
  }
  function du(a, b, c) {
    if ("log_event" === b.endpoint) {
      Vt(void 0, b);
      var d = Wt(b, !0),
        e = new Map();
      e.set(d, [b.payload.toJSON()]);
      c && (Gt = new c());
      return new Ad(function (f) {
        Gt && Gt.isReady()
          ? ju(e, Gt, f, { bypassNetworkless: !0 }, !0, bu(a))
          : f();
      });
    }
  }
  function Wt(a, b) {
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
      if (void 0 === b ? 0 : b) {
        b = a.cttAuthInfo.token;
        c = a.cttAuthInfo;
        var d = new Jn();
        c.videoId
          ? vf(d, 1, Ef, Pe(c.videoId))
          : c.playlistId && vf(d, 2, Ef, Pe(c.playlistId));
        Rt[b] = d;
      } else
        (b = a.cttAuthInfo),
          (c = {}),
          b.videoId
            ? (c.videoId = b.videoId)
            : b.playlistId && (c.playlistId = b.playlistId),
          (Qt[a.cttAuthInfo.token] = c);
      c = a.cttAuthInfo.token;
    }
    return c;
  }
  function eu(a, b, c) {
    var d = { writeThenSend: !0 };
    d = void 0 === d ? {} : d;
    b = void 0 === b ? !1 : b;
    new Ad(function (e, f) {
      var g = fu(b, c),
        h = g.i;
      g.i = !1;
      ku(g.l);
      ku(g.g);
      g.g = 0;
      Gt && Gt.isReady()
        ? void 0 === c && V("enable_web_tiered_gel")
          ? lu(e, f, d, a, b, 300, h)
          : lu(e, f, d, a, b, c, h)
        : (hu(b, c), e());
    });
  }
  function lu(a, b, c, d, e, f, g) {
    var h = Gt;
    c = void 0 === c ? {} : c;
    e = void 0 === e ? !1 : e;
    f = void 0 === f ? 200 : f;
    g = void 0 === g ? !1 : g;
    var l = new Map(),
      k = new Map(),
      n = { isJspb: e, cttAuthInfo: d, tier: f },
      p = { isJspb: e, cttAuthInfo: d };
    if (void 0 !== d)
      e
        ? ((b = V("enable_web_tiered_gel")
            ? Tt().smartExtractMatchingEntries({ keys: [n, p], sizeLimit: 1e3 })
            : Tt().extractMatchingEntries(p)),
          l.set(d, b),
          ju(l, h, a, c, !1, g))
        : ((l = V("enable_web_tiered_gel")
            ? Tt().smartExtractMatchingEntries({ keys: [n, p], sizeLimit: 1e3 })
            : Tt().extractMatchingEntries(p)),
          k.set(d, l),
          iu(k, h, a, b, c, !1, g));
    else if (e) {
      b = w(Object.keys(St));
      for (k = b.next(); !k.done; k = b.next())
        (k = k.value),
          (f = V("enable_web_tiered_gel")
            ? Tt().smartExtractMatchingEntries({ keys: [n, p], sizeLimit: 1e3 })
            : Tt().extractMatchingEntries({ isJspb: !0, cttAuthInfo: k })),
          0 < f.length && l.set(k, f),
          ((V("web_fp_via_jspb_and_json") && c.writeThenSend) ||
            !V("web_fp_via_jspb_and_json")) &&
            delete St[k];
      ju(l, h, a, c, !1, g);
    } else {
      l = w(Object.keys(St));
      for (n = l.next(); !n.done; n = l.next())
        (n = n.value),
          (p = V("enable_web_tiered_gel")
            ? Tt().smartExtractMatchingEntries({
                keys: [
                  { isJspb: !1, cttAuthInfo: n, tier: f },
                  { isJspb: !1, cttAuthInfo: n },
                ],
                sizeLimit: 1e3,
              })
            : Tt().extractMatchingEntries({ isJspb: !1, cttAuthInfo: n })),
          0 < p.length && k.set(n, p),
          ((V("web_fp_via_jspb_and_json") && c.writeThenSend) ||
            !V("web_fp_via_jspb_and_json")) &&
            delete St[n];
      iu(k, h, a, b, c, !1, g);
    }
  }
  function hu(a, b) {
    function c() {
      eu(void 0, a, b);
    }
    a = void 0 === a ? !1 : a;
    b = void 0 === b ? 200 : b;
    var d = fu(a, b),
      e = d === Lt || d === Kt ? 5e3 : Dt;
    V("web_gel_timeout_cap") &&
      !d.g &&
      ((e = gu(function () {
        c();
      }, e)),
      (d.g = e));
    ku(d.l);
    e = U("LOGGING_BATCH_TIMEOUT", Tn("web_gel_debounce_ms", 1e4));
    V("shorten_initial_gel_batch_timeout") && Nt && (e = Ct);
    e = gu(function () {
      0 < Tn("gel_min_batch_size")
        ? Tt().getSequenceCount({ cttAuthInfo: void 0, isJspb: a, tier: b }) >=
            Ft && c()
        : c();
    }, e);
    d.l = e;
  }
  function iu(a, b, c, d, e, f, g) {
    e = void 0 === e ? {} : e;
    var h = Math.round(Y()),
      l = a.size,
      k = mu(g);
    a = w(a);
    var n = a.next();
    for (
      g = {};
      !n.done;
      g = {
        hd: void 0,
        batchRequest: void 0,
        dangerousLogToVisitorSession: void 0,
        ld: void 0,
        kd: void 0,
      },
        n = a.next()
    ) {
      var p = w(n.value);
      n = p.next().value;
      p = p.next().value;
      g.batchRequest = tb({ context: nr(b.config_ || mr()) });
      if (!Ia(p) && !V("throw_err_when_logevent_malformed_killswitch")) {
        d();
        break;
      }
      g.batchRequest.events = p;
      (p = Qt[n]) && nu(g.batchRequest, n, p);
      delete Qt[n];
      g.dangerousLogToVisitorSession = "visitorOnlyApprovedKey" === n;
      ou(g.batchRequest, h, g.dangerousLogToVisitorSession);
      pu(e);
      g.ld = function (r) {
        V("start_client_gcf") &&
          gg.Ha(function () {
            return B(function (q) {
              return A(q, qu(r), 0);
            });
          });
        l--;
        l || c();
      };
      g.hd = 0;
      g.kd = (function (r) {
        return function () {
          r.hd++;
          if (e.bypassNetworkless && 1 === r.hd)
            try {
              Xr(
                b,
                k,
                r.batchRequest,
                ru(
                  { writeThenSend: !0 },
                  r.dangerousLogToVisitorSession,
                  r.ld,
                  r.kd,
                  f
                )
              ),
                (Nt = !1);
            } catch (q) {
              Zn(q), d();
            }
          l--;
          l || c();
        };
      })(g);
      try {
        Xr(
          b,
          k,
          g.batchRequest,
          ru(e, g.dangerousLogToVisitorSession, g.ld, g.kd, f)
        ),
          (Nt = !1);
      } catch (r) {
        Zn(r), d();
      }
    }
  }
  function ju(a, b, c, d, e, f) {
    d = void 0 === d ? {} : d;
    var g = Math.round(Y()),
      h = { value: a.size },
      l = new Map([].concat(x(a)));
    l = w(l);
    for (var k = l.next(); !k.done; k = l.next()) {
      var n = w(k.value).next().value,
        p = a.get(n);
      k = new Kn();
      var r = b.config_ || mr(),
        q = new Bn(),
        t = new un();
      L(t, 1, r.ie);
      L(t, 2, r.he);
      Ff(t, 16, r.eg);
      L(t, 17, r.ge);
      if (r.Yc) {
        var u = r.Yc,
          z = new rn();
        u.coldConfigData && L(z, 1, u.coldConfigData);
        u.appInstallData && L(z, 6, u.appInstallData);
        u.coldHashData && L(z, 3, u.coldHashData);
        u.hotHashData && z.g(u.hotHashData);
        yf(t, rn, 62, z);
      }
      if ((u = C.devicePixelRatio) && 1 != u) {
        if (null != u && "number" !== typeof u)
          throw Error(
            "Value of float/double field must be a number, found " +
              typeof u +
              ": " +
              u
          );
        sf(t, 65, u);
      }
      u = U("EXPERIMENTS_TOKEN", "");
      "" !== u && L(t, 54, u);
      u = Un();
      if (0 < u.length) {
        z = new xn();
        for (var E = 0; E < u.length; E++) {
          var Q = new vn();
          L(Q, 1, u[E].key);
          vf(Q, 2, wn, Pe(u[E].value));
          Bf(z, 15, vn, Q);
        }
        yf(q, xn, 5, z);
      }
      or(r, t);
      pr(q);
      qr(t);
      rr(r, t);
      sr(t);
      V("start_client_gcf") && tr(t);
      U("DELEGATED_SESSION_ID") &&
        !V("pageid_as_header_web") &&
        ((r = new An()), L(r, 3, U("DELEGATED_SESSION_ID")));
      !V("fill_delegate_context_in_gel_killswitch") &&
        (u = U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
        ((z = xf(q, An, 3) || new An()),
        (r = q),
        (u = L(z, 18, u)),
        yf(r, An, 3, u));
      r = t;
      u = w(Object.entries(ho(U("DEVICE", ""))));
      for (z = u.next(); !z.done; z = u.next())
        (E = w(z.value)),
          (z = E.next().value),
          (E = E.next().value),
          "cbrand" === z
            ? L(r, 12, E)
            : "cmodel" === z
            ? L(r, 13, E)
            : "cbr" === z
            ? L(r, 87, E)
            : "cbrver" === z
            ? L(r, 88, E)
            : "cos" === z
            ? L(r, 18, E)
            : "cosver" === z
            ? L(r, 19, E)
            : "cplatform" === z && Ff(r, 42, Lo(E));
      yf(q, un, 1, t);
      yf(k, Bn, 1, q);
      if ((t = Rt[n]))
        a: {
          if (Df(t, 1)) q = 1;
          else if (t.getPlaylistId()) q = 2;
          else break a;
          yf(k, Jn, 4, t);
          t = xf(k, Bn, 1) || new Bn();
          r = xf(t, An, 3) || new An();
          u = new zn();
          L(u, 2, n);
          Ff(u, 1, q);
          Bf(r, 12, zn, u);
          yf(t, An, 3, r);
        }
      delete Rt[n];
      n = "visitorOnlyApprovedKey" === n;
      su() || sf(k, 2, Le(g));
      !n &&
        (q = U("EVENT_ID")) &&
        ((t = tu()),
        (r = new In()),
        L(r, 1, q),
        sf(r, 2, Le(t)),
        yf(k, In, 5, r));
      pu(d);
      if (V("jspb_serialize_with_worker") && (q = Cr()) && d.writeThenSend) {
        Pt.set(Ot, {
          client: b,
          resolve: c,
          networklessOptions: d,
          isIsolated: e,
          useVSSEndpoint: f,
          dangerousLogToVisitorSession: n,
          requestsOutstanding: h,
        });
        q.postMessage({
          op: "gelBatchToSerialize",
          batchRequest: k.toJSON(),
          clientEvents: p,
          key: Ot,
        });
        Ot++;
        break;
      }
      if (p) {
        q = [];
        for (t = 0; t < p.length; t++)
          try {
            q.push(new Gn(p[t]));
          } catch (da) {
            Zn(new Ro("Transport failed to deserialize " + String(p[t])));
          }
        p = q;
      } else p = [];
      p = w(p);
      for (q = p.next(); !q.done; q = p.next()) Bf(k, 3, Gn, q.value);
      p = { startTime: Y(), ticks: {}, infos: {} };
      a: {
        Ae = !0;
        try {
          var X = JSON.stringify(k.toJSON(), ef);
          break a;
        } finally {
          Ae = !1;
        }
        X = void 0;
      }
      p.ticks.geljspc = Y();
      V("log_jspb_serialize_latency") &&
        yr("gel_jspb_serialize", p, { sampleRate: 0.1 });
      uu(X, b, c, d, e, f, n, h);
    }
  }
  function uu(a, b, c, d, e, f, g, h) {
    d = void 0 === d ? {} : d;
    h = void 0 === h ? { value: 0 } : h;
    f = mu(f);
    d = ru(
      d,
      g,
      function (l) {
        V("start_client_gcf") &&
          gg.Ha(function () {
            return B(function (k) {
              return A(k, qu(l), 0);
            });
          });
        h.value--;
        h.value || c();
      },
      function () {
        h.value--;
        h.value || c();
      },
      e
    );
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Xr(b, f, "", d);
    Nt = !1;
  }
  function pu(a) {
    V("always_send_and_write") && (a.writeThenSend = !1);
  }
  function ru(a, b, c, d, e) {
    a = {
      retry: !0,
      onSuccess: c,
      onError: d,
      networklessOptions: a,
      dangerousLogToVisitorSession: b,
      Oh: !!e,
      headers: {},
      postBodyFormat: "",
      postBody: "",
      compress: V("compress_gel") || V("compress_gel_lr"),
    };
    su() &&
      (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(Y())));
    return a;
  }
  function ou(a, b, c) {
    su() || (a.requestTimeMs = String(b));
    V("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c &&
      (b = U("EVENT_ID")) &&
      ((c = tu()),
      (a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c),
      }));
  }
  function tu() {
    var a = U("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor((Math.random() * Et) / 2));
    a++;
    a > Et && (a = 1);
    Pn("BATCH_CLIENT_COUNTER", a);
    return a;
  }
  function nu(a, b, c) {
    if (c.videoId) var d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{ token: b, scope: d }];
  }
  function Vt(a, b) {
    if (!D("yt.logging.transport.enableScrapingForTest")) {
      var c = Sn("il_payload_scraping");
      if ("enable_il_payload_scraping" === (void 0 !== c ? String(c) : ""))
        (wt = []),
          H("yt.logging.transport.enableScrapingForTest", !0),
          H("yt.logging.transport.scrapedPayloadsForTesting", wt),
          H(
            "yt.logging.transport.payloadToScrape",
            "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(
              " "
            )
          ),
          H("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
          H("yt.logging.transport.scrapeClientEvent", !0);
      else return;
    }
    c = D("yt.logging.transport.scrapedPayloadsForTesting");
    var d = D("yt.logging.transport.payloadToScrape");
    b &&
      (b = D(
        "yt.logging.transport.getScrapedPayloadFromClientEventsFunction"
      ).bind(b.payload)()) &&
      c.push(b);
    b = D("yt.logging.transport.scrapeClientEvent");
    if (d && 1 <= d.length)
      for (var e = 0; e < d.length; e++)
        if (a && a.payload[d[e]])
          if (b) c.push(a.payload);
          else {
            var f = void 0;
            c.push((null == (f = a) ? void 0 : f.payload)[d[e]]);
          }
    H("yt.logging.transport.scrapedPayloadsForTesting", c);
  }
  function su() {
    return (
      V("use_request_time_ms_header") || V("lr_use_request_time_ms_header")
    );
  }
  function gu(a, b) {
    return !1 === V("embeds_transport_use_scheduler")
      ? ro(a, b)
      : V("logging_avoid_blocking_during_navigation") ||
        V("lr_logging_avoid_blocking_during_navigation")
      ? Vo(function () {
          if ("none" === vt().m) a();
          else {
            var c = {};
            vt().install(((c.none = { Mc: a }), c));
          }
        }, b)
      : Vo(a, b);
  }
  function ku(a) {
    V("transport_use_scheduler") ? gg.xa(a) : window.clearTimeout(a);
  }
  function qu(a) {
    var b, c, d, e, f, g, h, l, k, n;
    return B(function (p) {
      if (1 == p.g) {
        d =
          null == (b = a)
            ? void 0
            : null == (c = b.responseContext)
            ? void 0
            : c.globalConfigGroup;
        var r = d ? d[qn.name] : void 0;
        e = r;
        g = null == (f = d) ? void 0 : f.hotHashData;
        r = d ? d[pn.name] : void 0;
        h = r;
        k = null == (l = d) ? void 0 : l.coldHashData;
        return (n = dt().resolve(new Zs()))
          ? g
            ? e
              ? A(p, jr(n, g, e), 2)
              : A(p, jr(n, g), 2)
            : p.O(2)
          : p.return();
      }
      return k ? (h ? A(p, kr(n, k, h), 0) : A(p, kr(n, k), 0)) : p.O(0);
    });
  }
  function fu(a, b) {
    b = void 0 === b ? 200 : b;
    return a ? (300 === b ? Lt : Jt) : 300 === b ? Kt : It;
  }
  function Yt(a) {
    if (V("enable_web_tiered_gel")) {
      a = ss[a || ""];
      var b, c;
      if (null == dt().resolve(new Zs())) var d = void 0;
      else {
        var e =
          null != (d = D("yt.gcf.config.hotConfigGroup"))
            ? d
            : U("RAW_HOT_CONFIG_GROUP");
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
        for (c = 0; c < b.length; c++)
          if (b[c].payloadNumber === a) return b[c];
    }
  }
  function Xt(a) {
    a = Object.keys(a);
    a = w(a);
    for (var b = a.next(); !b.done; b = a.next())
      if (((b = b.value), ss[b])) return b;
  }
  function Zt(a) {
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
  function bu(a) {
    return "gelDebuggingEvent" === a;
  }
  function mu(a) {
    return (void 0 === a ? 0 : a) && V("vss_through_gel_video_stats")
      ? "video_stats"
      : "log_event";
  }
  var vu = C.ytLoggingGelSequenceIdObj_ || {};
  H("ytLoggingGelSequenceIdObj_", vu);
  function wu(a) {
    vu[a] = a in vu ? vu[a] + 1 : 0;
    return vu[a];
  }
  var xu = [];
  var yu = C.ytLoggingGelSequenceIdObj_ || {};
  H("ytLoggingGelSequenceIdObj_", yu);
  var zu = C.ytLoggingDocDocumentNonce_;
  if (!zu) {
    var Au;
    a: {
      if (window.crypto && window.crypto.getRandomValues)
        try {
          var Bu = Array(16),
            Cu = new Uint8Array(16);
          window.crypto.getRandomValues(Cu);
          for (var Du = 0; Du < Bu.length; Du++) Bu[Du] = Cu[Du];
          Au = Bu;
          break a;
        } catch (a) {}
      for (var Eu = Array(16), Fu = 0; 16 > Fu; Fu++) {
        for (var Gu = Date.now(), Hu = 0; Hu < Gu % 23; Hu++)
          Eu[Fu] = Math.random();
        Eu[Fu] = Math.floor(256 * Math.random());
      }
      if (mo)
        for (var Iu = 1, Ju = 0; Ju < mo.length; Ju++)
          (Eu[Iu % 16] =
            Eu[Iu % 16] ^ (Eu[(Iu - 1) % 16] / 4) ^ mo.charCodeAt(Ju)),
            Iu++;
      Au = Eu;
    }
    for (var Ku = Au, Lu = [], Mu = 0; Mu < Ku.length; Mu++)
      Lu.push(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          Ku[Mu] & 63
        )
      );
    zu = Lu.join("");
    H("ytLoggingDocDocumentNonce_", zu);
  }
  var Nu = zu;
  function Ou(a) {
    return U("client-screen-nonce-store", {})[void 0 === a ? 0 : a];
  }
  function Pu(a, b) {
    b = void 0 === b ? 0 : b;
    var c = U("client-screen-nonce-store");
    c || ((c = {}), Pn("client-screen-nonce-store", c));
    c[b] = a;
  }
  function Qu(a) {
    a = void 0 === a ? 0 : a;
    return 0 === a ? "ROOT_VE_TYPE" : "ROOT_VE_TYPE." + a;
  }
  H("yt_logging_screen.getRootVeType", function (a) {
    return U(Qu(void 0 === a ? 0 : a));
  });
  function Ru() {
    var a = U("csn-to-ctt-auth-info");
    a || ((a = {}), Pn("csn-to-ctt-auth-info", a));
    return a;
  }
  function Su(a) {
    a = Ou(void 0 === a ? 0 : a);
    if (!a && !U("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null;
  }
  H("yt_logging_screen.getCurrentCsn", Su);
  function Tu(a, b, c) {
    var d = Ru();
    (c = Su(c)) && delete d[c];
    b && (d[a] = b);
  }
  H("yt_logging_screen.getCttAuthInfo", function (a) {
    return Ru()[a];
  });
  H("yt_logging_screen.setCurrentScreen", function (a, b, c, d) {
    c = void 0 === c ? 0 : c;
    if (a !== Ou(c) || b !== U(Qu(c)))
      if (
        (Tu(a, d, c),
        Pu(a, c),
        Pn(Qu(c), b),
        (b = function () {
          setTimeout(function () {
            if (a)
              if (V("web_time_via_jspb")) {
                var e = new Dn();
                L(e, 1, Nu);
                L(e, 2, a);
                var f = V("jspb_sparse_encoded_pivot")
                  ? new Gn([{}])
                  : new Gn();
                null != e ? Qe(e, Dn) : (e = void 0);
                vf(f, 111, Hn, e);
                var g = void 0;
                g = void 0 === g ? {} : g;
                e = !1;
                U("ytLoggingEventsDefaultDisabled", !1) && (e = !0);
                e = e ? null : Rs;
                g = void 0 === g ? {} : g;
                var h = Math.round(g.timestamp || Y());
                sf(f, 1, Le(h < Number.MAX_SAFE_INTEGER ? h : 0));
                h = new Fn();
                if (g.lact) sf(h, 1, Le(isFinite(g.lact) ? g.lact : -1));
                else if (g.timestamp) sf(h, 1, Le(-1));
                else {
                  var l = Ts();
                  sf(h, 1, Le(isFinite(l) ? l : -1));
                }
                if (g.sequenceGroup && !V("web_gel_sequence_info_killswitch")) {
                  l = g.sequenceGroup;
                  var k = wu(l),
                    n = new En();
                  sf(n, 2, Le(k));
                  L(n, 1, l);
                  yf(h, En, 3, n);
                  g.endOfSequence && delete yu[g.sequenceGroup];
                }
                yf(f, Fn, 33, h);
                (g.sendIsolatedPayload ? du : cu)(
                  "foregroundHeartbeatScreenAssociated",
                  {
                    endpoint: "log_event",
                    payload: f,
                    cttAuthInfo: g.cttAuthInfo,
                    dangerousLogToVisitorSession:
                      g.dangerousLogToVisitorSession,
                  },
                  e
                );
              } else
                (h = { clientDocumentNonce: Nu, clientScreenNonce: a }),
                  (e = void 0 === e ? {} : e),
                  (f = Rs),
                  U("ytLoggingEventsDefaultDisabled", !1) &&
                    Rs === Rs &&
                    (f = null),
                  V("web_all_payloads_via_jspb")
                    ? (e.timestamp || ((e.lact = Ts()), (e.timestamp = Y())),
                      xu.push({
                        ni: "foregroundHeartbeatScreenAssociated",
                        payload: h,
                        options: e,
                      }))
                    : ((e = void 0 === e ? {} : e),
                      (g = {}),
                      (l = Math.round(e.timestamp || Y())),
                      (g.eventTimeMs = l < Number.MAX_SAFE_INTEGER ? l : 0),
                      (g.foregroundHeartbeatScreenAssociated = h),
                      (h = Ts()),
                      (g.context = {
                        lastActivityMs: String(
                          e.timestamp || !isFinite(h) ? -1 : h
                        ),
                      }),
                      e.sequenceGroup &&
                        !V("web_gel_sequence_info_killswitch") &&
                        ((h = g.context),
                        (l = e.sequenceGroup),
                        (l = { index: wu(l), groupKey: l }),
                        (h.sequence = l),
                        e.endOfSequence && delete vu[e.sequenceGroup]),
                      (e.sendIsolatedPayload ? $t : Ut)(
                        {
                          endpoint: "log_event",
                          payload: g,
                          cttAuthInfo: e.cttAuthInfo,
                          dangerousLogToVisitorSession:
                            e.dangerousLogToVisitorSession,
                        },
                        f
                      ));
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
  });
  var Uu =
    "absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(
      " "
    );
  function Vu(a, b) {
    var c = void 0 === c ? !0 : c;
    var d = U("VALID_SESSION_TEMPDATA_DOMAINS", []),
      e = Ib(window.location.href);
    e && d.push(e);
    e = Ib(a);
    if (0 <= nb(d, e) || (!e && 0 == a.lastIndexOf("/", 0)))
      if (((d = document.createElement("a")), mb(d, a), (a = d.href)))
        if (((a = Jb(a)), (a = Kb(a))))
          if (
            (c &&
              !b.csn &&
              (b.itct || b.ved) &&
              (b = Object.assign({ csn: Su() }, b)),
            f)
          ) {
            var f = parseInt(f, 10);
            isFinite(f) && 0 < f && Wu(a, b, f);
          } else Wu(a, b);
  }
  function Wu(a, b, c) {
    a = Xu(a);
    b = b ? Mb(b) : "";
    c = c || 5;
    ($f() ||
      ((Sd || Td) &&
        lo("applewebkit") &&
        !lo("version") &&
        (!lo("safari") || lo("gsa/"))) ||
      (oc && lo("version/")) ||
      !U("EOM_VISITOR_DATA")) &&
      Vn(a, b, c);
  }
  function Xu(a) {
    var b = a;
    a = w(Uu);
    for (var c = a.next(); !c.done; c = a.next()) {
      for (
        var d = c.value, e = b.search(Pb), f = 0, g = [];
        0 <= (c = Ob(b, f, d, e));

      )
        g.push(b.substring(f, c)),
          (f = Math.min(b.indexOf("&", c) + 1 || e, e));
      g.push(b.slice(f));
      b = g.join("").replace(Qb, "$1");
    }
    for (c = a = 0; c < b.length; ++c) a = (31 * a + b.charCodeAt(c)) >>> 0;
    return "ST-" + a.toString(36);
  }
  new R();
  function Yu() {
    var a = !1;
    try {
      a = !!window.sessionStorage.getItem("session_logininfo");
    } catch (b) {
      a = !0;
    }
    return (
      ("WEB" === U("INNERTUBE_CLIENT_NAME") ||
        "WEB_CREATOR" === U("INNERTUBE_CLIENT_NAME")) &&
      a
    );
  }
  function Zu(a, b) {
    b = b ? { feature: b } : {};
    var c = U("EVENT_ID");
    c &&
      ((b.ei = c),
      (c =
        ((c = document.getElementById("masthead-search"))
          ? c.dataset
            ? c.dataset[Rn()]
            : c.getAttribute("data-clicktracking")
          : null) || ""),
      (b.ved = c),
      Vu(a, b));
    b = D("yt.window.navigate");
    try {
      b(a);
    } catch (h) {
      var d = void 0 === d ? {} : d;
      var e = void 0 === e ? "" : e;
      var f = void 0 === f ? window : f;
      a = Nb(a, d);
      U("LOGGED_IN", !0) &&
        Yu() &&
        ((d = U("VALID_SESSION_TEMPDATA_DOMAINS", [])),
        (b = Ib(window.location.href)) && d.push(b),
        (b = Ib(a)),
        0 <= nb(d, b) || (!b && 0 == a.lastIndexOf("/", 0))
          ? ((d = Jb(a)),
            (d = Kb(d))
              ? ((d = Xu(d)),
                (d = (d = Yf.get("" + d, void 0) || null) ? ho(d) : {}))
              : (d = null))
          : (d = null),
        null == d && (d = {}),
        (b = d),
        (c = void 0),
        Yu()
          ? (c || (c = U("LOGIN_INFO")),
            c ? ((b.session_logininfo = c), (b = !0)) : (b = !1))
          : (b = !1),
        b && Vu(a, d));
      e = a + e;
      var g = void 0 === g ? db : g;
      a: if (((g = void 0 === g ? db : g), e instanceof $a)) g = e;
      else {
        for (a = 0; a < g.length; ++a)
          if (((d = g[a]), d instanceof bb && d.og(e))) {
            g = new $a(e);
            break a;
          }
        g = void 0;
      }
      f = f.location;
      g = ib(g || ab);
      void 0 !== g && (f.href = g);
    }
  }
  H("searchbox.yt.install", function (a, b, c, d, e, f, g) {
    fh || (fh = new xl());
    fh.install(a, b, c, d, e, f, g);
  });
  H("yt.www.masthead.searchbox.initPolymer", function (a, b, c, d) {
    var e = gg.Ha;
    if (a && e) {
      var f = U("SBOX_SETTINGS"),
        g = U("SBOX_LABELS");
      f &&
        g &&
        (a = D("searchbox.yt.install")(a, b, c, f, g, Zu, d)) &&
        e(a, 100);
    }
  });
}.call(this));
