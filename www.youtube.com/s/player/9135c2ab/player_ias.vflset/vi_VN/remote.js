(function (g) {
  var window = this;
  ("use strict");
  var b8 = function (a) {
      g.Fp(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.kb()).toString(36)
      );
      return a;
    },
    c8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Ega(a.B, b, c);
    },
    OAb = function (a) {
      if (a instanceof g.Ct) return a;
      if ("function" == typeof a.Ql) return a.Ql(!1);
      if (g.ab(a)) {
        var b = 0,
          c = new g.Ct();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.t2;
            if (b in a) return g.Dt(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    PAb = function (a, b, c) {
      if (g.ab(a)) g.$b(a, b, c);
      else
        for (a = OAb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    QAb = function (a, b) {
      var c = [];
      PAb(
        b,
        function (d) {
          try {
            var e = g.Rv.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.ula(e) && c.push(d);
        },
        a
      );
      return c;
    },
    RAb = function (a, b) {
      QAb(a, b).forEach(function (c) {
        g.Rv.prototype.remove.call(this, c);
      }, a);
    },
    SAb = function (a) {
      if (a.qa) {
        if (a.qa.locationOverrideToken)
          return { locationOverrideToken: a.qa.locationOverrideToken };
        if (null != a.qa.latitudeE7 && null != a.qa.longitudeE7)
          return { latitudeE7: a.qa.latitudeE7, longitudeE7: a.qa.longitudeE7 };
      }
      return null;
    },
    TAb = function (a, b) {
      g.Fb(a, b) || a.push(b);
    },
    UAb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    VAb = function (a, b) {
      return g.gd(a, b);
    },
    WAb = function (a) {
      try {
        return g.Ta.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    d8 = function (a) {
      if (g.Ta.JSON)
        try {
          return g.Ta.JSON.parse(a);
        } catch (b) {}
      return WAb(a);
    },
    XAb = function (a) {
      if (a.im && "function" == typeof a.im) return a.im();
      if (
        ("undefined" !== typeof Map && a instanceof Map) ||
        ("undefined" !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (g.ab(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return g.cd(a);
    },
    YAb = function (a) {
      if (a.yn && "function" == typeof a.yn) return a.yn();
      if (!a.im || "function" != typeof a.im) {
        if ("undefined" !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (g.ab(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return g.dd(a);
        }
      }
    },
    ZAb = function (a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (g.ab(a) || "string" === typeof a)
        Array.prototype.forEach.call(a, b, void 0);
      else
        for (var c = YAb(a), d = XAb(a), e = d.length, f = 0; f < e; f++)
          b.call(void 0, d[f], c && c[f], a);
    },
    $Ab = function (a, b, c, d) {
      var e = new g.xp(null);
      a && g.yp(e, a);
      b && g.zp(e, b);
      c && g.Ap(e, c);
      d && (e.C = d);
      return e;
    },
    aBb = function () {
      this.j = e8();
      this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Kc: 3,
        Jc: "channel_type",
      });
    },
    bBb = function (a, b) {
      a.j.Hi("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    cBb = function () {
      this.j = e8();
      this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Kc: 3,
        Jc: "channel_type",
      });
    },
    dBb = function (a, b) {
      a.j.Hi("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    eBb = function () {
      this.j = e8();
      this.j.Lh(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Kc: 3, Jc: "channel_type" }
      );
    },
    fBb = function (a, b) {
      a.j.Hi(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    gBb = function () {
      this.j = e8();
      this.j.Lh("/client_streamz/youtube/living_room/mdx/channel/error", {
        Kc: 3,
        Jc: "channel_type",
      });
    },
    hBb = function (a, b) {
      a.j.Hi("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    iBb = function () {
      this.j = e8();
      this.j.Lh(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    jBb = function () {
      this.j = e8();
      this.j.Lh(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    kBb = function (a, b) {
      return new g.pv(a, b);
    },
    f8 = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    g8 = function (a, b) {
      this.B = {};
      this.j = [];
      this.Du = this.size = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a)
        if (a instanceof g8)
          for (c = a.yn(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
        else for (d in a) this.set(d, a[d]);
    },
    h8 = function (a) {
      if (a.size != a.j.length) {
        for (var b = 0, c = 0; b < a.j.length; ) {
          var d = a.j[b];
          f8(a.B, d) && (a.j[c++] = d);
          b++;
        }
        a.j.length = c;
      }
      if (a.size != a.j.length) {
        var e = {};
        for (c = b = 0; b < a.j.length; )
          (d = a.j[b]), f8(e, d) || ((a.j[c++] = d), (e[d] = 1)), b++;
        a.j.length = c;
      }
    },
    oBb = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.ownerObfuscatedGaiaId =
        this.obfuscatedGaiaId =
        this.avatar =
        this.username =
          "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g8();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        lBb(this, a.capabilities || ""),
        mBb(this, a.compatibleSenderThemes || ""),
        nBb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    lBb = function (a, b) {
      a.capabilities.clear();
      g.Ht(b.split(","), g.jb(VAb, pBb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    mBb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.Ht(b.split(","), g.jb(VAb, qBb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    nBb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    i8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    j8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    rBb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    sBb = function (a) {
      return new i8(a);
    },
    tBb = function (a) {
      return Array.isArray(a) ? g.Rr(a, sBb) : [];
    },
    k8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    uBb = function (a) {
      return Array.isArray(a) ? "[" + g.Rr(a, k8).join(",") + "]" : "null";
    },
    vBb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    wBb = function (a) {
      return g.Rr(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    xBb = function (a, b) {
      return g.Db(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    l8 = function (a, b) {
      return g.Db(a, function (c) {
        return j8(c, b);
      });
    },
    yBb = function () {
      var a = (0, g.rC)();
      a && RAb(a, a.j.Ql(!0));
    },
    m8 = function () {
      var a = g.tC("yt-remote-connected-devices") || [];
      g.Wb(a);
      return a;
    },
    zBb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.Rr(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    ABb = function (a) {
      g.sC("yt-remote-connected-devices", a, 86400);
    },
    n8 = function () {
      if (BBb) return BBb;
      var a = g.tC("yt-remote-device-id");
      a || ((a = vBb()), g.sC("yt-remote-device-id", a, 31536e3));
      for (var b = m8(), c = 1, d = a; g.Fb(b, d); ) c++, (d = a + "#" + c);
      return (BBb = d);
    },
    CBb = function () {
      var a = m8(),
        b = n8();
      g.vC() && g.Zb(a, b);
      a = zBb(a);
      if (0 == a.length)
        try {
          g.Kpa("remote_sid");
        } catch (c) {}
      else
        try {
          g.LB("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    DBb = function () {
      return g.tC("yt-remote-session-browser-channel");
    },
    EBb = function () {
      return g.tC("yt-remote-local-screens") || [];
    },
    FBb = function () {
      g.sC("yt-remote-lounge-token-expiration", !0, 86400);
    },
    GBb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.Rr(EBb(), function (d) {
          return d.loungeToken;
        }),
        c = g.Rr(a, function (d) {
          return d.loungeToken;
        });
      g.Sr(c, function (d) {
        return !g.Fb(b, d);
      }) && FBb();
      g.sC("yt-remote-local-screens", a, 31536e3);
    },
    o8 = function (a) {
      a ||
        (g.uC("yt-remote-session-screen-id"),
        g.uC("yt-remote-session-video-id"));
      CBb();
      a = m8();
      g.Hb(a, n8());
      ABb(a);
    },
    HBb = function () {
      if (!p8) {
        var a = g.Xv();
        a && (p8 = new g.Ov(a));
      }
    },
    IBb = function () {
      HBb();
      return p8 ? !!p8.get("yt-remote-use-staging-server") : !1;
    },
    q8 = function (a, b) {
      g.fE[a] = !0;
      var c = g.dE();
      c && c.publish.apply(c, arguments);
      g.fE[a] = !1;
    },
    JBb = function () {},
    e8 = function () {
      if (!r8) {
        r8 = new g.Dg(new JBb());
        var a = g.BB("client_streamz_web_flush_count", -1);
        -1 !== a && (r8.C = a);
      }
      return r8;
    },
    KBb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    LBb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    MBb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    s8 = function (a) {
      a.length
        ? NBb(a.shift(), function () {
            s8(a);
          })
        : OBb();
    },
    PBb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    NBb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Re(d, g.Mw(a));
      (document.head || document.documentElement).appendChild(d);
    },
    QBb = function () {
      var a = KBb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    OBb = function () {
      var a = MBb();
      a && a(!1, "No cast extension found");
    },
    SBb = function () {
      if (RBb) {
        var a = 2,
          b = MBb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        NBb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          OBb,
          c
        );
      }
    },
    TBb = function () {
      SBb();
      var a = QBb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      s8(a);
    },
    VBb = function () {
      SBb();
      var a = QBb();
      a.push.apply(a, g.qa(UBb.map(PBb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      s8(a);
    },
    t8 = function (a, b, c) {
      g.I.call(this);
      this.K = null != c ? (0, g.gb)(a, c) : a;
      this.Qi = b;
      this.G = (0, g.gb)(this.N3, this);
      this.j = !1;
      this.B = 0;
      this.C = this.fd = null;
      this.D = [];
    },
    u8 = function (a, b, c) {
      g.I.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Qi = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.fd = null;
    },
    WBb = function (a) {
      a.fd = g.Bg(function () {
        a.fd = null;
        a.j && !a.B && ((a.j = !1), WBb(a));
      }, a.Qi);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    v8 = function () {},
    XBb = function () {
      g.zb.call(this, "p");
    },
    YBb = function () {
      g.zb.call(this, "o");
    },
    $Bb = function () {
      return (ZBb = ZBb || new g.Dd());
    },
    aCb = function (a) {
      g.zb.call(this, "serverreachability", a);
    },
    w8 = function (a) {
      var b = $Bb();
      b.dispatchEvent(new aCb(b, a));
    },
    bCb = function (a) {
      g.zb.call(this, "statevent", a);
    },
    x8 = function (a) {
      var b = $Bb();
      b.dispatchEvent(new bCb(b, a));
    },
    cCb = function (a, b, c, d) {
      g.zb.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    y8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ta.setTimeout(function () {
        a();
      }, b);
    },
    z8 = function () {},
    A8 = function (a, b, c, d) {
      this.C = a;
      this.D = b;
      this.Xb = c;
      this.Pb = d || 1;
      this.zb = new g.Kp(this);
      this.fb = 45e3;
      this.Na = null;
      this.K = !1;
      this.Y = this.Za = this.Z = this.Ra = this.Ba = this.rb = this.qa = null;
      this.ra = [];
      this.j = null;
      this.N = 0;
      this.G = this.Ga = null;
      this.Hb = -1;
      this.La = !1;
      this.bb = 0;
      this.Wa = null;
      this.Jb = this.Va = this.Gb = this.Da = !1;
      this.B = new dCb();
    },
    dCb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    fCb = function (a, b, c) {
      a.Ra = 1;
      a.Z = b8(b.clone());
      a.Y = c;
      a.Da = !0;
      eCb(a, null);
    },
    eCb = function (a, b) {
      a.Ba = Date.now();
      B8(a);
      a.Za = a.Z.clone();
      c8(a.Za, "t", a.Pb);
      a.N = 0;
      var c = a.C.Ra;
      a.B = new dCb();
      a.j = gCb(a.C, c ? b : null, !a.Y);
      0 < a.bb && (a.Wa = new u8((0, g.gb)(a.HT, a, a.j), a.bb));
      a.zb.listen(a.j, "readystatechange", a.P3);
      b = a.Na ? g.md(a.Na) : {};
      a.Y
        ? (a.Ga || (a.Ga = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.Za, a.Ga, a.Y, b))
        : ((a.Ga = "GET"), a.j.send(a.Za, a.Ga, null, b));
      w8(1);
    },
    hCb = function (a) {
      return a.j ? "GET" == a.Ga && 2 != a.Ra && a.C.Pe : !1;
    },
    kCb = function (a, b) {
      var c = a.N,
        d = b.indexOf("\n", c);
      if (-1 == d) return iCb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return jCb;
      d += 1;
      if (d + c > b.length) return iCb;
      b = b.slice(d, d + c);
      a.N = d + c;
      return b;
    },
    B8 = function (a) {
      a.rb = Date.now() + a.fb;
      lCb(a, a.fb);
    },
    lCb = function (a, b) {
      if (null != a.qa) throw Error("WatchDog timer not null");
      a.qa = y8((0, g.gb)(a.O3, a), b);
    },
    mCb = function (a) {
      a.qa && (g.Ta.clearTimeout(a.qa), (a.qa = null));
    },
    C8 = function (a) {
      a.C.Hg() || a.La || nCb(a.C, a);
    },
    D8 = function (a) {
      mCb(a);
      g.vb(a.Wa);
      a.Wa = null;
      a.zb.removeAll();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    vCb = function (a, b) {
      try {
        var c = a.C;
        if (0 != c.Ih && (c.j == a || oCb(c.B, a)))
          if (!a.Va && oCb(c.B, a) && 3 == c.Ih) {
            try {
              var d = c.zf.j.parse(b);
            } catch (w) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.Z) {
                    if (c.j)
                      if (c.j.Ba + 3e3 < a.Ba) E8(c), F8(c);
                      else break a;
                    pCb(c);
                    x8(18);
                  }
                }
              else
                (c.Td = e[1]),
                  0 < c.Td - c.Wa &&
                    37500 > e[2] &&
                    c.Va &&
                    0 == c.ra &&
                    !c.qa &&
                    (c.qa = y8((0, g.gb)(c.Q3, c), 6e3));
              if (1 >= qCb(c.B) && c.Sc) {
                try {
                  c.Sc();
                } catch (w) {}
                c.Sc = void 0;
              }
            } else G8(c, 11);
          } else if (((a.Va || c.j == a) && E8(c), !g.ec(b)))
            for (e = c.zf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Wa = f[0];
              f = f[1];
              if (2 == c.Ih)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.Pb = f[2];
                  var h = f[3];
                  null != h && (c.IT = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.bb = 1.5 * l);
                  d = c;
                  var m = a.LO();
                  if (m) {
                    var n = g.Xn(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.ic(n, "spdy") || g.ic(n, "quic") || g.ic(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (rCb(p, p.B), (p.B = null)));
                    }
                    if (d.Da) {
                      var q = g.Xn(m, "X-HTTP-Session-Id");
                      q && ((d.Ge = q), g.Fp(d.Na, d.Da, q));
                    }
                  }
                  c.Ih = 3;
                  c.G && c.G.PT();
                  c.Dc && (c.Id = Date.now() - a.Ba);
                  d = c;
                  var r = a;
                  d.wd = sCb(d, d.Ra ? d.Pb : null, d.Xb);
                  if (r.Va) {
                    tCb(d.B, r);
                    var t = r,
                      v = d.bb;
                    v && t.setTimeout(v);
                    t.qa && (mCb(t), B8(t));
                    d.j = r;
                  } else uCb(d);
                  0 < c.C.length && H8(c);
                } else ("stop" != f[0] && "close" != f[0]) || G8(c, 7);
              else
                3 == c.Ih &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? G8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.OT(f),
                  (c.ra = 0));
            }
        w8(4);
      } catch (w) {}
    },
    wCb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    xCb = function (a) {
      this.G = a || 10;
      g.Ta.PerformanceNavigationTiming
        ? ((a = g.Ta.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Ta.chrome &&
            g.Ta.chrome.loadTimes &&
            g.Ta.chrome.loadTimes() &&
            g.Ta.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    yCb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    qCb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    oCb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    rCb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    tCb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    zCb = function (a) {
      if (null != a.B) return a.C.concat(a.B.ra);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
        return b;
      }
      return g.Lb(a.C);
    },
    ACb = function (a, b) {
      var c = new z8();
      if (g.Ta.Image) {
        var d = new Image();
        d.onload = g.jb(I8, c, "TestLoadImage: loaded", !0, b, d);
        d.onerror = g.jb(I8, c, "TestLoadImage: error", !1, b, d);
        d.onabort = g.jb(I8, c, "TestLoadImage: abort", !1, b, d);
        d.ontimeout = g.jb(I8, c, "TestLoadImage: timeout", !1, b, d);
        g.Ta.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    BCb = function (a, b) {
      var c = new z8(),
        d = new AbortController(),
        e = setTimeout(function () {
          d.abort();
          I8(c, "TestPingServer: timeout", !1, b);
        }, 1e4);
      fetch(a, { signal: d.signal })
        .then(function (f) {
          clearTimeout(e);
          f.ok
            ? I8(c, "TestPingServer: ok", !0, b)
            : I8(c, "TestPingServer: server error", !1, b);
        })
        .catch(function () {
          clearTimeout(e);
          I8(c, "TestPingServer: error", !1, b);
        });
    },
    I8 = function (a, b, c, d, e) {
      try {
        e &&
          ((e.onload = null),
          (e.onerror = null),
          (e.onabort = null),
          (e.ontimeout = null)),
          d(c);
      } catch (f) {}
    },
    CCb = function () {
      this.j = new v8();
    },
    DCb = function (a, b, c) {
      var d = c || "";
      try {
        ZAb(a, function (e, f) {
          var h = e;
          g.bb(e) && (h = g.$m(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    J8 = function (a, b, c) {
      return c && c.K8 ? c.K8[a] || b : b;
    },
    ECb = function (a) {
      this.C = [];
      this.Pb =
        this.wd =
        this.Na =
        this.Xb =
        this.j =
        this.Ge =
        this.Da =
        this.La =
        this.N =
        this.Hb =
        this.Y =
          null;
      this.Pf = this.Za = 0;
      this.Nf = J8("failFast", !1, a);
      this.Va = this.qa = this.Z = this.K = this.G = null;
      this.pc = !0;
      this.Td = this.Wa = -1;
      this.Jb = this.ra = this.Ba = 0;
      this.lh = J8("baseRetryDelayMs", 5e3, a);
      this.Qf = J8("retryDelaySeedMs", 1e4, a);
      this.Of = J8("forwardChannelMaxRetries", 2, a);
      this.ge = J8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.ye = (a && a.kqb) || void 0;
      this.cg = (a && a.apb) || void 0;
      this.Pe = (a && a.hqb) || !1;
      this.bb = void 0;
      this.Ra = (a && a.gda) || !1;
      this.D = "";
      this.B = new xCb(a && a.hnb);
      this.zf = new CCb();
      this.zb = (a && a.ynb) || !1;
      this.rb = (a && a.nnb) || !1;
      this.zb && this.rb && (this.rb = !1);
      this.Rf = (a && a.Xmb) || !1;
      a && a.Anb && (this.pc = !1);
      this.Dc = (!this.zb && this.pc && a && a.lnb) || !1;
      this.hd = void 0;
      a && a.WY && 0 < a.WY && (this.hd = a.WY);
      this.Sc = void 0;
      this.Id = 0;
      this.fb = !1;
      this.Gb = this.Ga = null;
    },
    F8 = function (a) {
      a.j && (FCb(a), a.j.cancel(), (a.j = null));
    },
    GCb = function (a) {
      F8(a);
      a.Z && (g.Ta.clearTimeout(a.Z), (a.Z = null));
      E8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Ta.clearTimeout(a.K), (a.K = null));
    },
    H8 = function (a) {
      yCb(a.B) || a.K || ((a.K = !0), g.fg(a.KT, a), (a.Ba = 0));
    },
    ICb = function (a, b) {
      if (qCb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.ra.concat(a.C)), !0;
      if (1 == a.Ih || 2 == a.Ih || a.Ba >= (a.Nf ? 0 : a.Of)) return !1;
      a.K = y8((0, g.gb)(a.KT, a, b), HCb(a, a.Ba));
      a.Ba++;
      return !0;
    },
    KCb = function (a, b) {
      var c;
      b ? (c = b.Xb) : (c = a.Za++);
      var d = a.Na.clone();
      g.Fp(d, "SID", a.D);
      g.Fp(d, "RID", c);
      g.Fp(d, "AID", a.Wa);
      K8(a, d);
      a.N && a.Y && g.Jp(d, a.N, a.Y);
      c = new A8(a, a.D, c, a.Ba + 1);
      null === a.N && (c.Na = a.Y);
      b && (a.C = b.ra.concat(a.C));
      b = JCb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.ge) + Math.round(0.5 * a.ge * Math.random())
      );
      rCb(a.B, c);
      fCb(c, d, b);
    },
    K8 = function (a, b) {
      a.La &&
        g.Vc(a.La, function (c, d) {
          g.Fp(b, d, c);
        });
      a.G &&
        ZAb({}, function (c, d) {
          g.Fp(b, d, c);
        });
    },
    JCb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.gb)(a.G.R3, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              DCb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.ra = a;
      return d;
    },
    uCb = function (a) {
      a.j || a.Z || ((a.Jb = 1), g.fg(a.JT, a), (a.ra = 0));
    },
    pCb = function (a) {
      if (a.j || a.Z || 3 <= a.ra) return !1;
      a.Jb++;
      a.Z = y8((0, g.gb)(a.JT, a), HCb(a, a.ra));
      a.ra++;
      return !0;
    },
    FCb = function (a) {
      null != a.Ga && (g.Ta.clearTimeout(a.Ga), (a.Ga = null));
    },
    LCb = function (a) {
      a.j = new A8(a, a.D, "rpc", a.Jb);
      null === a.N && (a.j.Na = a.Y);
      a.j.bb = 0;
      var b = a.wd.clone();
      g.Fp(b, "RID", "rpc");
      g.Fp(b, "SID", a.D);
      g.Fp(b, "AID", a.Wa);
      g.Fp(b, "CI", a.Va ? "0" : "1");
      !a.Va && a.hd && g.Fp(b, "TO", a.hd);
      g.Fp(b, "TYPE", "xmlhttp");
      K8(a, b);
      a.N && a.Y && g.Jp(b, a.N, a.Y);
      a.bb && a.j.setTimeout(a.bb);
      var c = a.j;
      a = a.Pb;
      c.Ra = 1;
      c.Z = b8(b.clone());
      c.Y = null;
      c.Da = !0;
      eCb(c, a);
    },
    E8 = function (a) {
      null != a.qa && (g.Ta.clearTimeout(a.qa), (a.qa = null));
    },
    nCb = function (a, b) {
      var c = null;
      if (a.j == b) {
        E8(a);
        FCb(a);
        a.j = null;
        var d = 2;
      } else if (oCb(a.B, b)) (c = b.ra), tCb(a.B, b), (d = 1);
      else return;
      if (0 != a.Ih)
        if (b.K)
          if (1 == d) {
            c = b.Y ? b.Y.length : 0;
            b = Date.now() - b.Ba;
            var e = a.Ba;
            d = $Bb();
            d.dispatchEvent(new cCb(d, c, b, e));
            H8(a);
          } else uCb(a);
        else {
          var f = b.Hb;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && ICb(a, b)) || (2 == d && pCb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                G8(a, 5);
                break;
              case 4:
                G8(a, 10);
                break;
              case 3:
                G8(a, 6);
                break;
              default:
                G8(a, 2);
            }
        }
    },
    HCb = function (a, b) {
      var c = a.lh + Math.floor(Math.random() * a.Qf);
      a.isActive() || (c *= 2);
      return c * b;
    },
    G8 = function (a, b) {
      if (2 == b) {
        var c = (0, g.gb)(a.mda, a),
          d = a.cg,
          e = !d;
        d = new g.xp(d || "//www.google.com/images/cleardot.gif");
        (g.Ta.location && "http" == g.Ta.location.protocol) || g.yp(d, "https");
        b8(d);
        e ? ACb(d.toString(), c) : BCb(d.toString(), c);
      } else x8(2);
      a.Ih = 0;
      a.G && a.G.NT(b);
      MCb(a);
      GCb(a);
    },
    MCb = function (a) {
      a.Ih = 0;
      a.Gb = [];
      if (a.G) {
        var b = zCb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Mb(a.Gb, b),
            g.Mb(a.Gb, a.C),
            (a.B.C.length = 0),
            g.Lb(a.C),
            (a.C.length = 0);
        a.G.LT();
      }
    },
    NCb = function (a) {
      if (0 == a.Ih) return a.Gb;
      var b = [];
      g.Mb(b, zCb(a.B));
      g.Mb(b, a.C);
      return b;
    },
    sCb = function (a, b, c) {
      var d = g.Gp(c);
      "" != d.j
        ? (b && g.zp(d, b + "." + d.j), g.Ap(d, d.D))
        : ((d = g.Ta.location),
          (d = $Ab(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Da;
      c = a.Ge;
      b && c && g.Fp(d, b, c);
      g.Fp(d, "VER", a.IT);
      K8(a, d);
      return d;
    },
    gCb = function (a, b, c) {
      if (b && !a.Ra)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = a.Pe && !a.ye ? new g.Qn(new g.Ho({ E0: c })) : new g.Qn(a.ye);
      b.K = a.Ra;
      return b;
    },
    OCb = function () {},
    PCb = function () {},
    M8 = function (a, b) {
      g.Dd.call(this);
      this.j = new ECb(b);
      this.G = a;
      this.B = (b && b.z9) || null;
      a = (b && b.y9) || null;
      b &&
        b.fnb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Y = a;
      a = (b && b.Eob) || null;
      b &&
        b.eZ &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.eZ)
          : (a = { "X-WebChannel-Content-Type": b.eZ }));
      b &&
        b.fW &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.fW)
          : (a = { "X-WebChannel-Client-Profile": b.fW }));
      this.j.Hb = a;
      (a = b && b.Dob) && !g.ec(a) && (this.j.N = a);
      this.K = (b && b.gda) || !1;
      this.D = (b && b.Epb) || !1;
      (b = b && b.E8) &&
        !g.ec(b) &&
        ((this.j.Da = b),
        g.ed(this.B, b) && ((a = this.B), b in a && delete a[b]));
      this.C = new L8(this);
    },
    QCb = function (a) {
      XBb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.bd(b)) ? g.jd(b, this.j) : b)
        : (this.data = a);
    },
    RCb = function (a) {
      YBb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    L8 = function (a) {
      this.j = a;
    },
    SCb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    TCb = function (a) {
      return NCb(a.j).map(function (b) {
        var c = a.B;
        b = b.map;
        "__data__" in b ? ((b = b.__data__), (c = c.D ? WAb(b) : b)) : (c = b);
        return c;
      });
    },
    N8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Ta.setTimeout(function () {
        a();
      }, b);
    },
    P8 = function (a) {
      O8.dispatchEvent(new UCb(O8, a));
    },
    UCb = function (a) {
      g.zb.call(this, "statevent", a);
    },
    Q8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.N = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.Kp(this);
      this.G = new g.Ag();
      this.G.setInterval(250);
    },
    WCb = function (a, b, c) {
      a.TG = 1;
      a.fC = b8(b.clone());
      a.Ru = c;
      a.Da = !0;
      VCb(a, null);
    },
    XCb = function (a, b, c, d, e) {
      a.TG = 1;
      a.fC = b8(b.clone());
      a.Ru = null;
      a.Da = c;
      e && (a.b0 = !1);
      VCb(a, d);
    },
    VCb = function (a, b) {
      a.iC = Date.now();
      YCb(a);
      a.SG = a.fC.clone();
      c8(a.SG, "t", a.K);
      a.VG = 0;
      a.cj = a.j.ZL(a.j.jC() ? b : null);
      0 < a.XL && (a.QG = new u8((0, g.gb)(a.QT, a, a.cj), a.XL));
      a.C.listen(a.cj, "readystatechange", a.T3);
      b = a.Pu ? g.md(a.Pu) : {};
      a.Ru
        ? ((a.UG = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.cj.send(a.SG, a.UG, a.Ru, b))
        : ((a.UG = "GET"),
          a.b0 && !g.Rc && (b.Connection = "close"),
          a.cj.send(a.SG, a.UG, null, b));
      a.j.jr(1);
    },
    aDb = function (a, b) {
      var c = a.VG,
        d = b.indexOf("\n", c);
      if (-1 == d) return ZCb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return $Cb;
      d += 1;
      if (d + c > b.length) return ZCb;
      b = b.slice(d, d + c);
      a.VG = d + c;
      return b;
    },
    YCb = function (a) {
      a.YL = Date.now() + a.B;
      bDb(a, a.B);
    },
    bDb = function (a, b) {
      if (null != a.Sx) throw Error("WatchDog timer not null");
      a.Sx = N8((0, g.gb)(a.S3, a), b);
    },
    cDb = function (a) {
      a.Sx && (g.Ta.clearTimeout(a.Sx), (a.Sx = null));
    },
    dDb = function (a) {
      a.j.Hg() || a.gC || a.j.bM(a);
    },
    R8 = function (a) {
      cDb(a);
      g.vb(a.QG);
      a.QG = null;
      a.G.stop();
      a.C.removeAll();
      if (a.cj) {
        var b = a.cj;
        a.cj = null;
        b.abort();
        b.dispose();
      }
      a.X0 && (a.X0 = null);
    },
    eDb = function (a, b) {
      try {
        a.j.RT(a, b), a.j.jr(4);
      } catch (c) {}
    },
    gDb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        fDb(a, b, function (h) {
          h
            ? c(!0)
            : g.Ta.setTimeout(function () {
                gDb(a, b, c, d, f);
              }, f);
        });
      }
    },
    fDb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Ta.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    hDb = function (a) {
      this.j = a;
      this.B = new v8();
    },
    iDb = function (a) {
      var b = T8(a.j, a.SC, "/mail/images/cleardot.gif");
      b8(b);
      gDb(b.toString(), 5e3, (0, g.gb)(a.c6, a), 3, 2e3);
      a.jr(1);
    },
    jDb = function (a) {
      var b = a.j.K;
      null != b
        ? (P8(5), b ? (P8(11), U8(a.j, a, !1)) : (P8(12), U8(a.j, a, !0)))
        : ((a.Ck = new Q8(a)),
          (a.Ck.Pu = a.aM),
          (b = a.j),
          (b = T8(b, b.jC() ? a.WG : null, a.cM)),
          P8(5),
          c8(b, "TYPE", "xmlhttp"),
          XCb(a.Ck, b, !1, a.WG, !1));
    },
    kDb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new v8();
      this.Y = a || null;
      this.K = null != b ? b : null;
      this.Z = c || !1;
    },
    lDb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    mDb = function (a, b, c, d) {
      g.zb.call(this, "timingevent", a);
      this.size = b;
      this.retries = d;
    },
    nDb = function (a) {
      g.zb.call(this, "serverreachability", a);
    },
    pDb = function (a) {
      a.U3(1, 0);
      a.XG = T8(a, null, a.eM);
      oDb(a);
    },
    qDb = function (a) {
      a.Bs && (a.Bs.abort(), (a.Bs = null));
      a.Ng && (a.Ng.cancel(), (a.Ng = null));
      a.mq && (g.Ta.clearTimeout(a.mq), (a.mq = null));
      V8(a);
      a.Sj && (a.Sj.cancel(), (a.Sj = null));
      a.Wr && (g.Ta.clearTimeout(a.Wr), (a.Wr = null));
    },
    rDb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new lDb(a.V3++, b));
      (2 != a.j && 3 != a.j) || oDb(a);
    },
    sDb = function (a) {
      var b = 0;
      a.Ng && b++;
      a.Sj && b++;
      return b;
    },
    oDb = function (a) {
      a.Sj || a.Wr || ((a.Wr = N8((0, g.gb)(a.VT, a), 0)), (a.Ux = 0));
    },
    vDb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.lC = Math.floor(1e5 * Math.random());
          b = a.lC++;
          var c = new Q8(a, "", b);
          c.Pu = a.Ho;
          var d = tDb(a),
            e = a.XG.clone();
          g.Fp(e, "RID", b);
          g.Fp(e, "CVER", "1");
          W8(a, e);
          WCb(c, e, d);
          a.Sj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? uDb(a, b) : 0 == a.B.length || a.Sj || uDb(a));
    },
    uDb = function (a, b) {
      if (b)
        if (6 < a.Su) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.lC - 1;
          b = tDb(a);
        } else (c = b.N), (b = b.Ru);
      else (c = a.lC++), (b = tDb(a));
      var d = a.XG.clone();
      g.Fp(d, "SID", a.D);
      g.Fp(d, "RID", c);
      g.Fp(d, "AID", a.Vx);
      W8(a, d);
      c = new Q8(a, a.D, c, a.Ux + 1);
      c.Pu = a.Ho;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Sj = c;
      WCb(c, d, b);
    },
    W8 = function (a, b) {
      a.Gi &&
        (a = a.Gi.bU()) &&
        g.Vc(a, function (c, d) {
          g.Fp(b, d, c);
        });
    },
    tDb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Su && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { JE: void 0 }, f++) {
        e.JE = a.B[f].j;
        var h = a.B[f].map;
        e.JE = 6 >= a.Su ? f : e.JE - d;
        try {
          g.Vc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.JE + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.JE + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    wDb = function (a) {
      a.Ng ||
        a.mq ||
        ((a.N = 1), (a.mq = N8((0, g.gb)(a.UT, a), 0)), (a.Tx = 0));
    },
    yDb = function (a) {
      if (a.Ng || a.mq || 3 <= a.Tx) return !1;
      a.N++;
      a.mq = N8((0, g.gb)(a.UT, a), xDb(a, a.Tx));
      a.Tx++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.xL = null == a.K ? c : !a.K;
      a.Io = b.lq;
      a.Z || pDb(a);
    },
    V8 = function (a) {
      null != a.Tu && (g.Ta.clearTimeout(a.Tu), (a.Tu = null));
    },
    xDb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Gi && (c = null);
        var d = (0, g.gb)(a.lda, a);
        c || ((c = new g.xp("//www.google.com/images/cleardot.gif")), b8(c));
        fDb(c.toString(), 1e4, d);
      } else P8(2);
      zDb(a, b);
    },
    zDb = function (a, b) {
      a.j = 0;
      a.Gi && a.Gi.XT(b);
      ADb(a);
      qDb(a);
    },
    ADb = function (a) {
      a.j = 0;
      a.Io = -1;
      if (a.Gi)
        if (0 == a.C.length && 0 == a.B.length) a.Gi.fM();
        else {
          var b = g.Lb(a.C),
            c = g.Lb(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Gi.fM(b, c);
        }
    },
    T8 = function (a, b, c) {
      var d = g.Gp(c);
      if ("" != d.j) b && g.zp(d, b + "." + d.j), g.Ap(d, d.D);
      else {
        var e = window.location;
        d = $Ab(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.kC &&
        g.Vc(a.kC, function (f, h) {
          g.Fp(d, h, f);
        });
      g.Fp(d, "VER", a.Su);
      W8(a, d);
      return d;
    },
    BDb = function () {},
    CDb = function () {
      this.j = [];
      this.B = [];
    },
    DDb = function (a) {
      g.zb.call(this, "channelMessage");
      this.message = a;
    },
    EDb = function (a) {
      g.zb.call(this, "channelError");
      this.error = a;
    },
    FDb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.I.call(this);
      this.j = new g.lv(this.lba, 0, this);
      g.O(this, this.j);
      this.Qi = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.gb)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.gb)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    GDb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Ba = a;
      this.N = b;
      this.C = new g.Nv();
      this.B = new Y8(this.zca, this);
      this.j = null;
      this.qa = !1;
      this.K = null;
      this.Y = "";
      this.Z = this.G = 0;
      this.D = [];
      this.Ra = c;
      this.ra = d;
      this.Va = e;
      this.Na = new aBb();
      this.Ga = new cBb();
      this.La = new eBb();
      this.Da = new gBb();
      this.Wa = new iBb();
      this.Za = new jBb();
    },
    HDb = function (a) {
      if (a.j) {
        var b = a.ra(),
          c = a.j.Ho || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Ho = c;
      }
    },
    Z8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.gn(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.hn(a) || "";
      a = g.pc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.mc(a, "10.0") && (this.B = !1));
    },
    $8 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.Mn(c + b, {});
    },
    IDb = function (a, b) {
      g.Dd.call(this);
      var c = this;
      this.Ed = a();
      this.Ed.subscribe("handlerOpened", this.X3, this);
      this.Ed.subscribe("handlerClosed", this.onClosed, this);
      this.Ed.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Ed.subscribe("handlerMessage", this.onMessage, this);
      this.j = b;
    },
    JDb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new PCb() : e;
      var f = void 0 === f ? new g.Nv() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Ba = c;
      this.G = f;
      this.Z = null;
      this.Y = this.N = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Y8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : qCb(new SCb(h, h.j).j.B)) &&
          d.connect(d.Z, d.N);
      });
      this.D = {};
      this.B = {};
      this.qa = !1;
      this.logger = null;
      this.ra = [];
      this.xg = void 0;
      this.Na = new aBb();
      this.Ga = new cBb();
      this.La = new eBb();
      this.Da = new gBb();
    },
    KDb = function (a) {
      g.td(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.Z = null;
        a.N = 0;
        for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.ra = [];
        a.publish("webChannelOpened");
        bBb(a.Na, "WEB_CHANNEL");
      });
      g.td(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.publish("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : TCb(new SCb(b, b.j));
        c && (a.ra = [].concat(g.qa(c)));
        dBb(a.Ga, "WEB_CHANNEL");
      });
      g.td(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.publish("webChannelMessage", new FDb(c[0], c[1]));
        a.xg = b.statusCode;
        fBb(a.La, "WEB_CHANNEL");
      });
      g.td(a.channel, "o", function () {
        401 === a.xg || a.C.start();
        a.publish("webChannelError");
        hBb(a.Da, "WEB_CHANNEL");
      });
    },
    LDb = function (a) {
      var b = a.Ba();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    MDb = function (a) {
      g.Dd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.Y3, this);
      this.j.subscribe("webChannelClosed", this.onClosed, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.onMessage, this);
    },
    NDb = function (a, b, c, d, e) {
      function f() {
        return new GDb($8(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.AB("enable_mdx_web_channel_desktop")
        ? new MDb(function () {
            return new JDb($8(a, "/wc"), b, c);
          })
        : new IDb(f, e);
    },
    RDb = function () {
      var a = ODb;
      PDb();
      a9.push(a);
      QDb();
    },
    b9 = function (a, b) {
      PDb();
      var c = SDb(a, String(b));
      0 == a9.length
        ? TDb(c)
        : (QDb(),
          g.$b(a9, function (d) {
            d(c);
          }));
    },
    c9 = function (a) {
      b9("CP", a);
    },
    PDb = function () {
      a9 ||
        ((a9 = g.Xa("yt.mdx.remote.debug.handlers_") || []),
        g.Va("yt.mdx.remote.debug.handlers_", a9));
    },
    TDb = function (a) {
      var b = (d9 + 1) % 50;
      d9 = b;
      e9[b] = a;
      f9 || (f9 = 49 == b);
    },
    QDb = function () {
      var a = a9;
      if (e9[0]) {
        var b = f9 ? d9 : -1;
        do {
          b = (b + 1) % 50;
          var c = e9[b];
          g.$b(a, function (d) {
            d(c);
          });
        } while (b != d9);
        e9 = Array(50);
        d9 = -1;
        f9 = !1;
      }
    },
    SDb = function (a, b) {
      var c = (Date.now() - UDb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    g9 = function (a) {
      g.wF.call(this);
      this.K = a;
      this.screens = [];
    },
    VDb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    WDb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Ht(a.screens, function (f) {
        return !!xBb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = VDb(a, b[d]) || c;
      return c;
    },
    XDb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Ht(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    YDb = function (a, b, c, d, e) {
      g.wF.call(this);
      this.C = a;
      this.N = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.fd = NaN;
    },
    i9 = function (a) {
      g9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      h9(this);
      this.info("Initializing with " + uBb(this.screens));
    },
    ZDb = function (a) {
      if (a.screens.length) {
        var b = g.Rr(a.screens, function (d) {
            return d.id;
          }),
          c = $8(a.B, "/pairing/get_lounge_token_batch");
        a.B.sendRequest(
          "POST",
          c,
          { screen_ids: b.join(",") },
          (0, g.gb)(a.c8, a),
          (0, g.gb)(a.b8, a)
        );
      }
    },
    h9 = function (a) {
      if (g.AB("deprecate_pair_servlet_enabled")) return WDb(a, []);
      var b = tBb(EBb());
      b = g.Ht(b, function (c) {
        return !c.uuid;
      });
      return WDb(a, b);
    },
    j9 = function (a, b) {
      GBb(g.Rr(a.screens, rBb));
      b && FBb();
    },
    aEb = function (a, b) {
      g.wF.call(this);
      this.K = b;
      b = (b = g.tC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Fb(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      $Db("Initialized with " + g.$m(this.j));
    },
    bEb = function (a, b, c) {
      var d = $8(a.G, "/pairing/get_screen_availability");
      a.G.sendRequest(
        "POST",
        d,
        { lounge_token: b.token },
        (0, g.gb)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.gb)(function () {
          c(!1);
        }, a)
      );
    },
    dEb = function (a, b) {
      a: if (UAb(b) != UAb(a.j)) var c = !1;
      else {
        c = g.dd(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        ($Db("Updated online screens: " + g.$m(a.j)),
        (a.j = b),
        a.publish("screenChange"));
      cEb(a);
    },
    k9 = function (a) {
      isNaN(a.C) || g.yB(a.C);
      a.C = g.wB((0, g.gb)(a.CR, a), 0 < a.D && a.D < g.kb() ? 2e4 : 1e4);
    },
    $Db = function (a) {
      b9("OnlineScreenService", a);
    },
    eEb = function (a) {
      var b = {};
      g.$b(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.ag("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    cEb = function (a) {
      a = g.dd(
        g.Xc(a.j, function (b) {
          return b;
        })
      );
      g.Wb(a);
      a.length
        ? g.sC("yt-remote-online-screen-ids", a.join(","), 60)
        : g.uC("yt-remote-online-screen-ids");
    },
    l9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g9.call(this, "ScreenService");
      this.D = a;
      this.N = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      fEb(this);
    },
    hEb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Kk(),
        l = c ? l8(h, c) : null;
      (c && (a.N || l)) || (l = l8(h, b));
      if (l) {
        l.uuid = b;
        var m = m9(a, l);
        bEb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? gEb(
              a,
              c,
              (0, g.gb)(function (n) {
                var p = m9(
                  this,
                  new i8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                bEb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    iEb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    jEb = function (a, b, c) {
      bEb(a.j, b, c);
    },
    gEb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.CB($8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    kEb = function (a) {
      a.screens = a.B.Kk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + uBb(a.screens));
    },
    fEb = function (a) {
      lEb(a);
      a.B = new i9(a.D);
      a.B.subscribe("screenChange", (0, g.gb)(a.m8, a));
      kEb(a);
      a.N || (a.C = tBb(g.tC("yt-remote-automatic-screen-cache") || []));
      lEb(a);
      a.info("Initializing automatic screens: " + uBb(a.C));
      a.j = new aEb(a.D, (0, g.gb)(a.Kk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.gb)(function () {
          this.publish("onlineScreenChange");
        }, a)
      );
    },
    m9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = l8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.N || mEb(a));
      lEb(a);
      a.G[b.uuid] = b.id;
      g.sC("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    mEb = function (a) {
      a = g.Ht(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.sC("yt-remote-automatic-screen-cache", g.Rr(a, rBb));
    },
    lEb = function (a) {
      a.G = g.tC("yt-remote-device-id-map") || {};
    },
    n9 = function (a, b, c) {
      g.wF.call(this);
      this.Da = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    o9 = function (a, b) {
      a.j = b;
      a.publish("sessionScreen", a.j);
    },
    nEb = function (a, b) {
      a.j && ((a.j.token = b), m9(a.D, a.j));
      a.publish("sessionScreen", a.j);
    },
    p9 = function (a, b) {
      b9(a.Da, b);
    },
    q9 = function (a, b, c) {
      n9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.ra = (0, g.gb)(this.e4, this);
      this.Ga = (0, g.gb)(this.zba, this);
      this.qa = g.wB(function () {
        oEb(d, null);
      }, 12e4);
      this.N = this.G = this.K = this.Z = 0;
      this.Ba = !1;
      this.Y = "unknown";
    },
    qEb = function (a, b) {
      g.yB(a.N);
      a.N = 0;
      0 == b
        ? pEb(a)
        : (a.N = g.wB(function () {
            pEb(a);
          }, b));
    },
    pEb = function (a) {
      rEb(a, "getLoungeToken");
      g.yB(a.G);
      a.G = g.wB(function () {
        sEb(a, null);
      }, 3e4);
    },
    rEb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.$m());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.gb)(function () {
              p9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : p9(a, "Sending yt message without session: " + g.$m(c));
    },
    tEb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.qX(
              b,
              function (c) {
                o9(a, c);
              },
              function () {
                return a.uj();
              },
              5
            ))
        : a.uj(Error("Waiting for session status timed out."));
    },
    vEb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new i8(b);
      uEb(
        a,
        d,
        function (e) {
          e
            ? ((a.Ba = !0), m9(a.D, d), o9(a, d), (a.Y = "unknown"), qEb(a, c))
            : (g.fB(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.uj());
        },
        5
      );
    },
    oEb = function (a, b) {
      g.yB(a.qa);
      a.qa = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? vEb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.fB(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  tEb(a, b.screenId)))
            : (g.fB(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              tEb(a, b.screenId))
          : tEb(a, b.screenId)
        : a.uj(Error("Waiting for session status timed out."));
    },
    sEb = function (a, b) {
      g.yB(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Y = c),
          qEb(a, 3e4))
        : (nEb(a, b.loungeToken),
          (a.Ba = !1),
          (a.Y = "unknown"),
          qEb(a, b.loungeTokenRefreshIntervalMs));
    },
    uEb = function (a, b, c, d) {
      g.yB(a.K);
      a.K = 0;
      jEb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.wB(function () {
              uEb(a, b, c, d - 1);
            }, 300));
      });
    },
    wEb = function (a) {
      g.yB(a.Z);
      a.Z = 0;
      g.yB(a.K);
      a.K = 0;
      g.yB(a.qa);
      a.qa = 0;
      g.yB(a.G);
      a.G = 0;
      g.yB(a.N);
      a.N = 0;
    },
    r9 = function (a, b, c, d) {
      n9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.Z = null;
      this.Ga = "";
      this.Ra = c;
      this.Na = null;
      this.qa = function () {};
      this.Y = NaN;
      this.La = (0, g.gb)(this.f4, this);
      this.G = function () {};
      this.N = this.K = 0;
      this.ra = !1;
      this.Ba = "unknown";
    },
    s9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    xEb = function (a) {
      a.G = a.D.dU(
        a.Ga,
        a.B.label,
        a.B.friendlyName,
        s9(a),
        function (b, c) {
          a.G = function () {};
          a.ra = !0;
          o9(a, b);
          "shortLived" == b.idType && 0 < c && t9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.uj(b);
        }
      );
    },
    yEb = function (a) {
      var b = {};
      b.pairingCode = a.Ga;
      b.theme = a.Ra;
      IBb() && (b.env_useStageMdx = 1);
      return g.Ln(b);
    },
    zEb = function (a) {
      return new Promise(function (b) {
        a.Ga = vBb();
        if (a.Na) {
          var c = new chrome.cast.DialLaunchResponse(!0, yEb(a));
          b(c);
          xEb(a);
        } else
          (a.qa = function () {
            g.yB(a.Y);
            a.qa = function () {};
            a.Y = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, yEb(a));
            b(d);
            xEb(a);
          }),
            (a.Y = g.wB(function () {
              a.qa();
            }, 100));
      });
    },
    BEb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new i8(b);
      return new Promise(function (e) {
        AEb(
          a,
          d,
          function (f) {
            f
              ? ((a.ra = !0), m9(a.D, d), o9(a, d), t9(a, c))
              : g.fB(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : zEb(a);
      });
    },
    CEb = function (a, b) {
      var c = a.Z.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        hEb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && o9(a, f);
            e(f);
          },
          function (f) {
            p9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : zEb(a);
      });
    },
    AEb = function (a, b, c, d) {
      g.yB(a.K);
      a.K = 0;
      jEb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.wB(function () {
              AEb(a, b, c, d - 1);
            }, 300));
      });
    },
    t9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      s9(a) &&
        (g.yB(a.N),
        (a.N = 0),
        0 == b
          ? DEb(a)
          : (a.N = g.wB(function () {
              DEb(a);
            }, b)));
    },
    DEb = function (a) {
      s9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Ba = c), t9(a, 3e4))
              : ((a.ra = !1),
                (a.Ba = "unknown"),
                nEb(a, b.loungeToken),
                t9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Ba = "noLoungeTokenResponse";
            t9(a, 3e4);
          }
        );
    },
    EEb = function (a) {
      g.yB(a.K);
      a.K = 0;
      g.yB(a.N);
      a.N = 0;
      a.G();
      a.G = function () {};
      g.yB(a.Y);
    },
    u9 = function (a, b) {
      n9.call(this, a, b, "ManualSession");
      this.C = g.wB((0, g.gb)(this.gA, this, null), 150);
    },
    v9 = function (a, b) {
      g.wF.call(this);
      this.config_ = b;
      this.B = a;
      this.Z = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.Y = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.N = !1;
      this.C = [];
      this.G = (0, g.gb)(this.uaa, this);
    },
    FEb = function (a, b) {
      return b
        ? g.Db(
            a.C,
            function (c) {
              return j8(b, c.label);
            },
            a
          )
        : null;
    },
    w9 = function (a) {
      b9("Controller", a);
    },
    ODb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    x9 = function (a) {
      return a.N || !!a.C.length || !!a.j;
    },
    y9 = function (a, b, c) {
      b != a.j &&
        (g.vb(a.j),
        (a.j = b)
          ? (c
              ? a.publish("yt-remote-cast2-receiver-resumed", b.B)
              : a.publish("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.gb)(a.XZ, a, b)),
            b.subscribe("sessionFailed", function () {
              return GEb(a, b);
            }),
            b.j
              ? a.publish("yt-remote-cast2-session-change", b.j)
              : c && a.j.gA(null))
          : a.publish("yt-remote-cast2-session-change", null));
    },
    GEb = function (a, b) {
      a.j == b && a.publish("yt-remote-cast2-session-failed");
    },
    HEb = function (a) {
      var b = a.B.cU(),
        c = a.j && a.j.B;
      a = g.Rr(
        b,
        function (d) {
          c && j8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = FEb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    OEb = function (a, b, c, d) {
      d.disableCastApi
        ? z9("Cannot initialize because disabled by Mdx config.")
        : IEb()
        ? JEb(b, d) &&
          (KEb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? LEb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? LEb(a, c)
                  : (A9("Failed to load cast API: " + f),
                    MEb(!1),
                    KEb(!1),
                    g.uC("yt-remote-cast-available"),
                    g.uC("yt-remote-cast-receiver"),
                    NEb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Mta(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= KBb() && TBb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? OBb()
                : 89 <= KBb()
                ? VBb()
                : (SBb(), s8(UBb.map(PBb)))))
        : z9("Cannot initialize because not running Chrome");
    },
    NEb = function () {
      z9("dispose");
      var a = B9();
      a && a.dispose();
      g.Va("yt.mdx.remote.cloudview.instance_", null);
      PEb(!1);
      g.iE(QEb);
      QEb.length = 0;
    },
    C9 = function () {
      return !!g.tC("yt-remote-cast-installed");
    },
    REb = function () {
      var a = g.tC("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    SEb = function () {
      z9("clearCurrentReceiver");
      g.uC("yt-remote-cast-receiver");
    },
    TEb = function () {
      return C9()
        ? B9()
          ? B9().getCastSession()
          : (A9("getCastSelector: Cast is not initialized."), null)
        : (A9("getCastSelector: Cast API is not installed!"), null);
    },
    UEb = function () {
      C9()
        ? B9()
          ? D9()
            ? (z9("Requesting cast selector."), B9().requestSession())
            : (z9("Wait for cast API to be ready to request the session."),
              QEb.push(g.hE("yt-remote-cast2-api-ready", UEb)))
          : A9("requestCastSelector: Cast is not initialized.")
        : A9("requestCastSelector: Cast API is not installed!");
    },
    E9 = function (a, b) {
      D9()
        ? B9().setConnectedScreenStatus(a, b)
        : A9("setConnectedScreenStatus called before ready.");
    },
    IEb = function () {
      var a = 0 <= g.pc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.tK || a;
    },
    VEb = function (a, b) {
      B9().init(a, b);
    },
    JEb = function (a, b) {
      var c = !1;
      B9() ||
        ((a = new v9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.sC("yt-remote-cast-available", d);
          q8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          z9("onReceiverSelected: " + d.friendlyName);
          g.sC("yt-remote-cast-receiver", d);
          q8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          z9("onReceiverResumed: " + d.friendlyName);
          g.sC("yt-remote-cast-receiver", d);
          q8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          z9("onSessionChange: " + k8(d));
          d || g.uC("yt-remote-cast-receiver");
          q8("yt-remote-cast2-session-change", d);
        }),
        g.Va("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      z9("cloudview.createSingleton_: " + c);
      return c;
    },
    B9 = function () {
      return g.Xa("yt.mdx.remote.cloudview.instance_");
    },
    LEb = function (a, b) {
      MEb(!0);
      KEb(!1);
      VEb(a, function (c) {
        c
          ? (PEb(!0), g.jE("yt-remote-cast2-api-ready"))
          : (A9("Failed to initialize cast API."),
            MEb(!1),
            g.uC("yt-remote-cast-available"),
            g.uC("yt-remote-cast-receiver"),
            NEb());
        b(c);
      });
    },
    z9 = function (a) {
      b9("cloudview", a);
    },
    A9 = function (a) {
      b9("cloudview", a);
    },
    MEb = function (a) {
      z9("setCastInstalled_ " + a);
      g.sC("yt-remote-cast-installed", a);
    },
    D9 = function () {
      return !!g.Xa("yt.mdx.remote.cloudview.apiReady_");
    },
    PEb = function (a) {
      z9("setApiReady_ " + a);
      g.Va("yt.mdx.remote.cloudview.apiReady_", a);
    },
    KEb = function (a) {
      g.Va("yt.mdx.remote.cloudview.initializing_", a);
    },
    F9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.trackData = null;
      this.Nk = this.vp = !1;
      this.Z = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    WEb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.vp = !1;
      a.Nk = !1;
      a.N = 0;
      a.K = g.kb();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.Z = 0;
      a.C = NaN;
      a.B = !1;
    },
    G9 = function (a) {
      return a.isPlaying() ? (g.kb() - a.K) / 1e3 : 0;
    },
    H9 = function (a, b) {
      a.N = b;
      a.K = g.kb();
    },
    I9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.kb() - a.K) / 1e3 + a.N;
        case -1e3:
          return 0;
      }
      return a.N;
    },
    J9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && WEb(a);
    },
    XEb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.nd(a.trackData);
      b.hasPrevious = a.vp;
      b.hasNext = a.Nk;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.Z;
      b.liveIngestionTime = a.C;
      return b;
    },
    L9 = function (a, b) {
      g.wF.call(this);
      var c = this;
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new CDb();
      this.B = this.j = null;
      this.Y = (0, g.gb)(this.g$, this);
      this.N = (0, g.gb)(this.WE, this);
      this.Z = (0, g.gb)(this.f$, this);
      this.qa = (0, g.gb)(this.i$, this);
      var d = 0;
      a
        ? ((d = a.getProxyState()),
          3 != d && (a.subscribe("proxyStateChange", this.bS, this), YEb(this)))
        : (d = 3);
      0 != d &&
        (b
          ? this.bS(d)
          : g.wB(function () {
              c.bS(d);
            }, 0));
      (a = TEb()) && K9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.qa);
    },
    M9 = function (a) {
      return new F9(a.D.getPlayerContextData());
    },
    YEb = function (a) {
      g.$b(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.jb(this.saa, b), this));
        },
        a
      );
    },
    ZEb = function (a) {
      g.$b(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    N9 = function (a) {
      return 1 == a.getState();
    },
    O9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.enqueue(b);
    },
    $Eb = function (a, b, c) {
      var d = M9(a);
      H9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      P9(a, d);
    },
    Q9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    P9 = function (a, b) {
      ZEb(a);
      a.D.setPlayerContextData(XEb(b));
      YEb(a);
    },
    K9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.Y),
        a.B.removeMediaListener(a.N),
        a.WE(null));
      a.B = b;
      a.B &&
        (c9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.Y),
        a.B.addMediaListener(a.N),
        a.B.media.length && a.WE(a.B.media[0]));
    },
    aFb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = M9(a);
        b.contentId != d.videoId &&
          c9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        H9(d, a.j.getEstimatedTime());
        P9(a, d);
      } else c9("No cast media video. Ignoring state update.");
    },
    R9 = function (a, b, c) {
      return (0, g.gb)(function (d) {
        this.ag(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.ag("Retrying " + b + " using MDx browser channel."),
          Q9(this, b, c));
      }, a);
    },
    U9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.wF.call(this);
      var e = this;
      this.K = NaN;
      this.Ga = !1;
      this.Y = this.Z = this.ra = this.Ba = NaN;
      this.qa = [];
      this.G = this.N = this.D = this.j = this.B = null;
      this.Na = a;
      this.La = d;
      this.qa.push(
        g.jC(window, "beforeunload", function () {
          e.lz(2);
        })
      );
      this.C = [];
      this.j = new F9();
      this.Ra = b.id;
      this.Da = b.idType;
      this.B = NDb(this.Na, c, this.hU, "shortLived" == this.Da, this.Ra);
      this.B.listen("channelOpened", function () {
        bFb(e);
      });
      this.B.listen("channelClosed", function () {
        S9("Channel closed");
        isNaN(e.K) ? o8(!0) : o8();
        e.dispose();
      });
      this.B.listen("channelError", function (f) {
        o8();
        isNaN(e.QD())
          ? (1 == f &&
              "shortLived" == e.Da &&
              e.publish("browserChannelAuthError", f),
            S9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Ga = !0),
            S9(
              "Channel error: " + f + " with reconnection in " + e.QD() + " ms"
            ),
            T9(e, 2));
      });
      this.B.listen("channelMessage", function (f) {
        cFb(e, f);
      });
      this.B.Gr(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.vC() && g.sC("yt-remote-session-video-id", f);
      });
    },
    dFb = function (a) {
      return g.Db(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    S9 = function (a) {
      b9("conn", a);
    },
    T9 = function (a, b) {
      a.publish("proxyStateChange", b);
    },
    eFb = function (a) {
      a.K = g.wB(function () {
        S9("Connecting timeout");
        a.lz(1);
      }, 2e4);
    },
    fFb = function (a) {
      g.yB(a.K);
      a.K = NaN;
    },
    gFb = function (a) {
      g.yB(a.Ba);
      a.Ba = NaN;
    },
    iFb = function (a) {
      hFb(a);
      a.ra = g.wB(function () {
        V9(a, "getNowPlaying");
      }, 2e4);
    },
    hFb = function (a) {
      g.yB(a.ra);
      a.ra = NaN;
    },
    bFb = function (a) {
      S9("Channel opened");
      a.Ga &&
        ((a.Ga = !1),
        gFb(a),
        (a.Ba = g.wB(function () {
          S9("Timing out waiting for a screen.");
          a.lz(1);
        }, 15e3)));
    },
    kFb = function (a, b) {
      var c = null;
      if (b) {
        var d = dFb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Va("yt.mdx.remote.remoteClient_", c);
      b && (fFb(a), gFb(a));
      c = a.B.Sz() && isNaN(a.K);
      b == c
        ? b && (T9(a, 1), V9(a, "getSubtitlesTrack"))
        : b
        ? (a.lX() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), jFb(a))
        : a.lz(1);
    },
    lFb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.id(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.publish("remotePlayerChange"));
    },
    mFb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      J9(a.j, d, e);
      a.publish("remoteQueueChange", c);
    },
    oFb = function (a, b) {
      b.params = b.params || {};
      mFb(a, b, "NOW_PLAYING_MAY_CHANGE");
      nFb(a, b);
      a.publish("autoplayDismissed");
    },
    nFb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      H9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.Z = isNaN(c) ? 0 : c;
      a.j.fl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? iFb(a) : hFb(a);
      a.publish("remotePlayerChange");
    },
    pFb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        H9(a.j, isNaN(b) ? 0 : b);
        a.publish("remotePlayerChange");
      }
    },
    qFb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.publish("remotePlayerChange");
    },
    rFb = function (a, b) {
      a.N = b.params.videoId;
      a.publish("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    sFb = function (a, b) {
      a.N = b.params.videoId || null;
      a.publish("autoplayUpNext", a.N);
    },
    tFb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.publish("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.publish("autoplayDismissed");
    },
    uFb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.vp = "true" == b.params.hasPrevious;
      a.j.Nk = c;
      a.publish("previousNextChange");
    },
    cFb = function (a, b) {
      b = b.message;
      b.params
        ? S9("Received: action=" + b.action + ", params=" + g.$m(b.params))
        : S9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = d8(b.params.devices);
          a.C = g.Rr(b, function (d) {
            return new oBb(d);
          });
          b = !!g.Db(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          kFb(a, b);
          b = a.qY("mlm");
          a.publish("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Jb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          kFb(a, !1);
          break;
        case "remoteConnected":
          var c = new oBb(d8(b.params.device));
          g.Db(a.C, function (d) {
            return c ? d.id == c.id : !1;
          }) || TAb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new oBb(d8(b.params.device));
          g.Jb(a.C, function (d) {
            return c ? d.id == c.id : !1;
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          mFb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          oFb(a, b);
          break;
        case "onStateChange":
          nFb(a, b);
          break;
        case "onAdStateChange":
          pFb(a, b);
          break;
        case "onVolumeChanged":
          qFb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          lFb(a, b);
          break;
        case "nowAutoplaying":
          rFb(a, b);
          break;
        case "autoplayDismissed":
          a.publish("autoplayDismissed");
          break;
        case "autoplayUpNext":
          sFb(a, b);
          break;
        case "onAutoplayModeChanged":
          tFb(a, b);
          break;
        case "onHasPreviousNextChanged":
          uFb(a, b);
          break;
        case "requestAssistedSignIn":
          a.publish("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.publish("loopModeChange", b.params.loopMode);
          break;
        default:
          S9("Unrecognized action: " + b.action);
      }
    },
    jFb = function (a) {
      g.yB(a.Y);
      a.Y = g.wB(function () {
        a.lz(1);
      }, 864e5);
    },
    V9 = function (a, b, c) {
      c
        ? S9("Sending: action=" + b + ", params=" + g.$m(c))
        : S9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    vFb = function (a) {
      g9.call(this, "ScreenServiceProxy");
      this.Yg = a;
      this.j = [];
      this.j.push(this.Yg.$_s("screenChange", (0, g.gb)(this.l4, this)));
      this.j.push(this.Yg.$_s("onlineScreenChange", (0, g.gb)(this.X$, this)));
    },
    AFb = function (a, b) {
      HBb();
      if (!p8 || !p8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.cB("MDX_CONFIG") || b;
        yBb();
        CBb();
        W9 ||
          ((W9 = new Z8(b ? b.loungeApiHost : void 0)),
          IBb() && (W9.j = "/api/loungedev"));
        X9 ||
          ((X9 = g.Xa("yt.mdx.remote.deferredProxies_") || []),
          g.Va("yt.mdx.remote.deferredProxies_", X9));
        wFb();
        var c = Y9();
        if (!c) {
          var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Va("yt.mdx.remote.screenService_", d);
          c = Y9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Va(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          OEb(
            a,
            d,
            function (f) {
              f
                ? Z9() && E9(Z9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    q8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Xa("yt.mdx.remote.initialized_") &&
          (g.Va("yt.mdx.remote.initialized_", !0),
          $9("Initializing: " + g.$m(b)),
          a$.push(
            g.hE("yt-remote-cast2-api-ready", function () {
              q8("yt-remote-api-ready");
            })
          ),
          a$.push(
            g.hE("yt-remote-cast2-availability-change", function () {
              q8("yt-remote-receiver-availability-change");
            })
          ),
          a$.push(
            g.hE("yt-remote-cast2-receiver-selected", function () {
              b$(null);
              q8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          a$.push(
            g.hE("yt-remote-cast2-receiver-resumed", function () {
              q8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          a$.push(g.hE("yt-remote-cast2-session-change", xFb)),
          a$.push(
            g.hE("yt-remote-connection-change", function (f) {
              f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), SEb());
            })
          ),
          a$.push(
            g.hE("yt-remote-cast2-session-failed", function () {
              q8("yt-remote-connection-failed");
            })
          ),
          (a = yFb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.AB("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          $9(" -- with channel params: " + g.$m(a)),
          a
            ? (g.sC("yt-remote-session-app", a.app),
              g.sC("yt-remote-session-name", a.name))
            : (g.uC("yt-remote-session-app"), g.uC("yt-remote-session-name")),
          g.Va("yt.mdx.remote.channelParams_", a),
          c.start(),
          Z9() || zFb());
      }
    },
    BFb = function () {
      var a = Y9().Yg.$_gos();
      var b = d$();
      b && e$() && (xBb(a, b) || a.push(b));
      return wBb(a);
    },
    DFb = function () {
      var a = CFb();
      !a &&
        C9() &&
        REb() &&
        (a = { key: "cast-selector-receiver", name: REb() });
      return a;
    },
    CFb = function () {
      var a = BFb(),
        b = d$();
      b || (b = c$());
      return g.Db(a, function (c) {
        return b && j8(b, c.key) ? !0 : !1;
      });
    },
    d$ = function () {
      var a = Z9();
      if (!a) return null;
      var b = Y9().Kk();
      return l8(b, a);
    },
    xFb = function (a) {
      $9("remote.onCastSessionChange_: " + k8(a));
      if (a) {
        var b = d$();
        if (b && b.id == a.id) {
          if (
            (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            f$ && (f$.token = a), (b = e$()) && b.Gr(a);
        } else b && g$(), h$(a, 1);
      } else e$() && g$();
    },
    g$ = function () {
      D9() ? B9().stopSession() : A9("stopSession called before API ready.");
      var a = e$();
      a && (a.disconnect(1), EFb(null));
    },
    FFb = function () {
      var a = e$();
      return !!a && 3 != a.getProxyState();
    },
    $9 = function (a) {
      b9("remote", a);
    },
    Y9 = function () {
      if (!GFb) {
        var a = g.Xa("yt.mdx.remote.screenService_");
        GFb = a ? new vFb(a) : null;
      }
      return GFb;
    },
    Z9 = function () {
      return g.Xa("yt.mdx.remote.currentScreenId_");
    },
    HFb = function (a) {
      g.Va("yt.mdx.remote.currentScreenId_", a);
    },
    IFb = function () {
      return g.Xa("yt.mdx.remote.connectData_");
    },
    b$ = function (a) {
      g.Va("yt.mdx.remote.connectData_", a);
    },
    e$ = function () {
      return g.Xa("yt.mdx.remote.connection_");
    },
    EFb = function (a) {
      var b = e$();
      b$(null);
      a || HFb("");
      g.Va("yt.mdx.remote.connection_", a);
      X9 &&
        (g.$b(X9, function (c) {
          c(a);
        }),
        (X9.length = 0));
      b && !a
        ? q8("yt-remote-connection-change", !1)
        : !b && a && q8("yt-remote-connection-change", !0);
    },
    c$ = function () {
      var a = g.vC();
      if (!a) return null;
      var b = Y9();
      if (!b) return null;
      b = b.Kk();
      return l8(b, a);
    },
    h$ = function (a, b) {
      Z9();
      d$() && d$();
      if (i$) f$ = a;
      else {
        HFb(a.id);
        var c = g.Xa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new U9(W9, a, yFb(), c);
        a.connect(b, IFb());
        a.subscribe("beforeDisconnect", function (d) {
          q8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          e$() && (e$(), EFb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = d$();
          d &&
            "shortLived" == d.idType &&
            (D9()
              ? B9().handleBrowserChannelAuthError()
              : A9("refreshLoungeToken called before API ready."));
        });
        EFb(a);
      }
    },
    zFb = function () {
      var a = c$();
      a
        ? ($9("Resume connection to: " + k8(a)), h$(a, 0))
        : (o8(),
          SEb(),
          $9("Skipping connecting because no session screen found."));
    },
    wFb = function () {
      var a = yFb();
      if (g.id(a)) {
        a = n8();
        var b = g.tC("yt-remote-session-name") || "",
          c = g.tC("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.cB("SESSION_INDEX", "0"));
        (b = g.cB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Va("yt.mdx.remote.channelParams_", a);
      }
    },
    yFb = function () {
      return g.Xa("yt.mdx.remote.channelParams_") || {};
    },
    LFb = function (a, b, c) {
      g.I.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Fc = c;
      this.events = new g.vK(this);
      this.Y = this.events.T(this.J, "onVolumeChange", function (e) {
        JFb(d, e);
      });
      this.D = !1;
      this.G = new g.iL(64);
      this.j = new g.lv(this.A0, 500, this);
      this.B = new g.lv(this.B0, 1e3, this);
      this.N = new t8(this.Jda, 0, this);
      this.C = {};
      this.Z = new g.lv(this.A1, 1e3, this);
      this.K = new u8(this.seekTo, 1e3, this);
      g.O(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.I$);
      this.events.T(b, "captionschanged", this.d$);
      this.events.T(b, "captionssettingschanged", this.I0);
      this.events.T(b, "videoplayerreset", this.gK);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Fc.xW();
      });
      b.L("enable_mdx_video_play_directly") &&
        this.events.T(b, "videodatachange", function () {
          KFb(d.module) || j$(d) || k$(d, 0);
        });
      a = this.Fc;
      a.Ma();
      a.subscribe("proxyStateChange", this.UZ, this);
      a.subscribe("remotePlayerChange", this.cF, this);
      a.subscribe("remoteQueueChange", this.gK, this);
      a.subscribe("previousNextChange", this.RZ, this);
      a.subscribe("nowAutoplaying", this.NZ, this);
      a.subscribe("autoplayDismissed", this.wZ, this);
      g.O(this, this.j);
      g.O(this, this.B);
      g.O(this, this.N);
      g.O(this, this.Z);
      g.O(this, this.K);
      this.I0();
      this.gK();
      this.cF();
    },
    JFb = function (a, b) {
      if (j$(a)) {
        a.Fc.unsubscribe("remotePlayerChange", a.cF, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = M9(a.Fc);
        if (c !== d.volume || b !== d.muted) a.Fc.setVolume(c, b), a.Z.start();
        a.Fc.subscribe("remotePlayerChange", a.cF, a);
      }
    },
    MFb = function (a) {
      a.Nc(0);
      a.j.stop();
      a.Ac(new g.iL(64));
    },
    NFb = function (a, b) {
      if (j$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.od(c, b));
        a.Fc.gU(a.J.getVideoData(1).videoId, c);
        a.C = M9(a.Fc).trackData;
      }
    },
    k$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Fc.playVideo(c.videoId, b, d, e, c.playerParams, c.ra, SAb(c));
      a.Ac(new g.iL(1));
    },
    OFb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { dY: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    j$ = function (a) {
      return M9(a.Fc).videoId === a.J.getVideoData(1).videoId;
    },
    l$ = function () {
      g.W.call(this, {
        I: "div",
        S: "ytp-mdx-popup-dialog",
        X: { role: "dialog" },
        V: [
          {
            I: "div",
            S: "ytp-mdx-popup-dialog-inner-content",
            V: [
              {
                I: "div",
                S: "ytp-mdx-popup-title",
                xa: "B\u1ea1n \u0111\u00e3 \u0111\u0103ng xu\u1ea5t",
              },
              {
                I: "div",
                S: "ytp-mdx-popup-description",
                xa: "C\u00e1c video m\u00e0 b\u1ea1n xem c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o nh\u1eadt k\u00fd xem v\u00e0 g\u00e2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ph\u1ea7n \u0111\u1ec1 xu\u1ea5t tr\u00ean TV. \u0110\u1ec3 tr\u00e1nh \u0111i\u1ec1u n\u00e0y, h\u00e3y h\u1ee7y r\u1ed3i \u0111\u0103ng nh\u1eadp v\u00e0o YouTube tr\u00ean m\u00e1y t\u00ednh.",
              },
              {
                I: "div",
                S: "ytp-mdx-privacy-popup-buttons",
                V: [
                  {
                    I: "button",
                    Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    xa: "H\u1ee7y",
                  },
                  {
                    I: "button",
                    Ka: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    xa: "X\u00e1c nh\u1eadn",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.gG(this, 250);
      this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
      g.O(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    m$ = function (a) {
      g.W.call(this, {
        I: "div",
        S: "ytp-remote",
        V: [
          {
            I: "div",
            S: "ytp-remote-display-status",
            V: [
              { I: "div", S: "ytp-remote-display-status-icon", V: [g.Lwa()] },
              {
                I: "div",
                S: "ytp-remote-display-status-text",
                xa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.gG(this, 250);
      g.O(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.Bc(a.Qb());
    },
    n$ = function (a, b) {
      g.kX.call(this, "Ph\u00e1t tr\u00ean", 1, a, b);
      this.J = a;
      this.Xt = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    PFb = function (a) {
      g.qV.call(this, a);
      this.Ip = { key: vBb(), name: "M\u00e1y t\u00ednh n\u00e0y" };
      this.Sl = null;
      this.subscriptions = [];
      this.iR = this.Fc = null;
      this.Xt = [this.Ip];
      this.Es = this.Ip;
      this.Ce = new g.iL(64);
      this.BY = 0;
      this.Wh = -1;
      this.vF = !1;
      this.tF = this.ZA = null;
      if (!g.OR(this.player.U()) && !g.JG(this.player.U())) {
        a = this.player;
        var b = g.QT(a);
        b && (b = b.pp()) && ((b = new n$(a, b)), g.O(this, b));
        b = new m$(a);
        g.O(this, b);
        g.cU(a, b.element, 4);
        this.ZA = new l$();
        g.O(this, this.ZA);
        g.cU(a, this.ZA.element, 4);
        this.vF = !!c$();
      }
    },
    o$ = function (a) {
      a.tF &&
        (a.player.removeEventListener("presentingplayerstatechange", a.tF),
        (a.tF = null));
    },
    QFb = function (a, b, c) {
      a.Ce = c;
      a.player.publish("presentingplayerstatechange", new g.lG(c, b));
    },
    p$ = function (a, b) {
      if (b.key !== a.Es.key)
        if (b.key === a.Ip.key) g$();
        else if (
          (KFb(a) && RFb(a),
          (a.Es = b),
          !a.player
            .U()
            .L("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.JG(a.player.U()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .U()
                .L("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.getLength(); l++) h[l] = g.nV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.ra,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = SAb(d)) && (a.locationInfo = d);
            d = a;
          }
          $9("Connecting to: " + g.$m(b));
          "cast-selector-receiver" == b.key
            ? (b$(d || null),
              (b = d || null),
              D9()
                ? B9().setLaunchParams(b)
                : A9("setLaunchParams called before ready."))
            : !d && FFb() && Z9() == b.key
            ? q8("yt-remote-connection-change", !0)
            : (g$(),
              b$(d || null),
              (d = Y9().Kk()),
              (b = l8(d, b.key)) && h$(b, 1));
        }
    },
    KFb = function (a) {
      var b = a.player.U();
      return !b.L("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.vF ||
        !a.ZA
        ? !1
        : g.ZR(b) || g.aS(b);
    },
    RFb = function (a) {
      a.player.Qb().isPlaying()
        ? a.player.pauseVideo()
        : ((a.tF = function (b) {
            !a.vF && g.oG(b, 8) && (a.player.pauseVideo(), o$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.tF));
      a.ZA && a.ZA.od();
      e$() || (i$ = !0);
    };
  g.k = g8.prototype;
  g.k.im = function () {
    h8(this);
    for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
    return a;
  };
  g.k.yn = function () {
    h8(this);
    return this.j.concat();
  };
  g.k.has = function (a) {
    return f8(this.B, a);
  };
  g.k.isEmpty = function () {
    return 0 == this.size;
  };
  g.k.clear = function () {
    this.B = {};
    this.Du = this.size = this.j.length = 0;
  };
  g.k.remove = function (a) {
    return this.delete(a);
  };
  g.k.delete = function (a) {
    return f8(this.B, a)
      ? (delete this.B[a],
        --this.size,
        this.Du++,
        this.j.length > 2 * this.size && h8(this),
        !0)
      : !1;
  };
  g.k.get = function (a, b) {
    return f8(this.B, a) ? this.B[a] : b;
  };
  g.k.set = function (a, b) {
    f8(this.B, a) || ((this.size += 1), this.j.push(a), this.Du++);
    this.B[a] = b;
  };
  g.k.forEach = function (a, b) {
    for (var c = this.yn(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  g.k.clone = function () {
    return new g8(this);
  };
  g.k.keys = function () {
    return g.Hv(this.Ql(!0)).j();
  };
  g.k.values = function () {
    return g.Hv(this.Ql(!1)).j();
  };
  g.k.entries = function () {
    var a = this;
    return kBb(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  g.k.Ql = function (a) {
    h8(this);
    var b = 0,
      c = this.Du,
      d = this,
      e = new g.Ct();
    e.next = function () {
      if (c != d.Du)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.j.length) return g.t2;
      var f = d.j[b++];
      return g.Dt(a ? f : d.B[f]);
    };
    return e;
  };
  var pBb = {
      upa: "atp",
      p7a: "ska",
      y3a: "que",
      IVa: "mus",
      n7a: "sus",
      CGa: "dsp",
      o5a: "seq",
      gUa: "mic",
      hxa: "dpa",
      Uqa: "cds",
      xVa: "mlm",
      Vwa: "dsdtr",
      iWa: "ntb",
      bjb: "vsp",
      Vxa: "scn",
      M3a: "rpe",
      Swa: "dcn",
      Twa: "dcp",
      a0a: "pas",
      Uwa: "drq",
      IZa: "opf",
      Uxa: "els",
      G5a: "svq",
    },
    qBb = {
      u5: "u",
      o2: "cl",
      Y4: "k",
      L2: "i",
      t2: "cr",
      f5: "m",
      I2: "g",
      dV: "up",
    },
    BBb = "",
    p8 = null;
  JBb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.AB("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.hfa(c.value)),
          (c = { serializedIncrementBatch: g.Gg(c.j()) }),
          g.MC("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var r8,
    RBb = LBb("loadCastFramework") || LBb("loadCastApplicationFramework"),
    UBb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.lb(t8, g.I);
  g.k = t8.prototype;
  g.k.M3 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.fd ? (this.C = g.kb() + this.Qi) : (this.fd = g.Bg(this.G, this.Qi));
  };
  g.k.stop = function () {
    this.fd && (g.Ta.clearTimeout(this.fd), (this.fd = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.va = function () {
    this.stop();
    t8.Mf.va.call(this);
  };
  g.k.N3 = function () {
    this.fd && (g.Ta.clearTimeout(this.fd), (this.fd = null));
    this.C
      ? ((this.fd = g.Bg(this.G, this.C - g.kb())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.y(u8, g.I);
  g.k = u8.prototype;
  g.k.WL = function (a) {
    this.C = arguments;
    this.fd || this.B ? (this.j = !0) : WBb(this);
  };
  g.k.stop = function () {
    this.fd &&
      (g.Ta.clearTimeout(this.fd),
      (this.fd = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.fd || ((this.j = !1), WBb(this));
  };
  g.k.va = function () {
    g.I.prototype.va.call(this);
    this.stop();
  };
  v8.prototype.stringify = function (a) {
    return g.Ta.JSON.stringify(a, void 0);
  };
  v8.prototype.parse = function (a) {
    return g.Ta.JSON.parse(a, void 0);
  };
  g.lb(XBb, g.zb);
  g.lb(YBb, g.zb);
  var ZBb = null;
  g.lb(aCb, g.zb);
  g.lb(bCb, g.zb);
  g.lb(cCb, g.zb);
  z8.prototype.debug = function () {};
  z8.prototype.info = function () {};
  z8.prototype.warning = function () {};
  var jCb = {},
    iCb = {};
  g.k = A8.prototype;
  g.k.setTimeout = function (a) {
    this.fb = a;
  };
  g.k.P3 = function (a) {
    a = a.target;
    var b = this.Wa;
    b && 3 == g.Tn(a) ? b.WL() : this.HT(a);
  };
  g.k.HT = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.Tn(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b || (this.j && (this.B.B || g.Vn(this.j) || g.Wn(this.j))))
          ) {
            this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? w8(3) : w8(2));
            mCb(this);
            var e = this.j.getStatus();
            this.Hb = e;
            b: if (hCb(this)) {
              var f = g.Wn(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.Tn(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  D8(this);
                  C8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Ta.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.length = 0;
              this.B.j += a;
              this.N = 0;
              m = this.B.j;
            } else m = g.Vn(this.j);
            if ((this.K = 200 == e)) {
              if (this.Gb && !this.Va) {
                b: {
                  if (this.j) {
                    var n = g.Xn(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.ec(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Va = !0), vCb(this, e);
                else {
                  this.K = !1;
                  this.G = 3;
                  x8(12);
                  D8(this);
                  C8(this);
                  break a;
                }
              }
              if (this.Da) {
                e = !0;
                for (var q; !this.La && this.N < m.length; )
                  if (((q = kCb(this, m)), q == iCb)) {
                    4 == b && ((this.G = 4), x8(14), (e = !1));
                    break;
                  } else if (q == jCb) {
                    this.G = 4;
                    x8(15);
                    e = !1;
                    break;
                  } else vCb(this, q);
                hCb(this) &&
                  0 != this.N &&
                  ((this.B.j = this.B.j.slice(this.N)), (this.N = 0));
                4 != b ||
                  0 != m.length ||
                  this.B.B ||
                  ((this.G = 1), x8(16), (e = !1));
                this.K = this.K && e;
                e
                  ? 0 < m.length &&
                    !this.Jb &&
                    ((this.Jb = !0), this.C.wQ(this))
                  : (D8(this), C8(this));
              } else vCb(this, m);
              4 == b && D8(this);
              this.K &&
                !this.La &&
                (4 == b ? nCb(this.C, this) : ((this.K = !1), B8(this)));
            } else
              g.Wfa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.G = 3), x8(12))
                  : ((this.G = 0), x8(13)),
                D8(this),
                C8(this);
          }
        }
    } catch (r) {
    } finally {
    }
  };
  g.k.cancel = function () {
    this.La = !0;
    D8(this);
  };
  g.k.O3 = function () {
    this.qa = null;
    var a = Date.now();
    0 <= a - this.rb
      ? (2 != this.Ra && (w8(3), x8(17)), D8(this), (this.G = 2), C8(this))
      : lCb(this, this.rb - a);
  };
  g.k.getLastError = function () {
    return this.G;
  };
  g.k.LO = function () {
    return this.j;
  };
  xCb.prototype.cancel = function () {
    this.C = zCb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = ECb.prototype;
  g.k.IT = 8;
  g.k.Ih = 1;
  g.k.connect = function (a, b, c, d) {
    x8(0);
    this.Xb = a;
    this.La = b || {};
    c && void 0 !== d && ((this.La.OSID = c), (this.La.OAID = d));
    this.Va = this.pc;
    this.Na = sCb(this, null, this.Xb);
    H8(this);
  };
  g.k.disconnect = function () {
    GCb(this);
    if (3 == this.Ih) {
      var a = this.Za++,
        b = this.Na.clone();
      g.Fp(b, "SID", this.D);
      g.Fp(b, "RID", a);
      g.Fp(b, "TYPE", "terminate");
      K8(this, b);
      a = new A8(this, this.D, a);
      a.Ra = 2;
      a.Z = b8(b.clone());
      b = !1;
      if (g.Ta.navigator && g.Ta.navigator.sendBeacon)
        try {
          b = g.Ta.navigator.sendBeacon(a.Z.toString(), "");
        } catch (c) {}
      !b && g.Ta.Image && ((new Image().src = a.Z), (b = !0));
      b || ((a.j = gCb(a.C, null)), a.j.send(a.Z));
      a.Ba = Date.now();
      B8(a);
    }
    MCb(this);
  };
  g.k.Hg = function () {
    return 0 == this.Ih;
  };
  g.k.getState = function () {
    return this.Ih;
  };
  g.k.KT = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Ih)) {
        if (!a) {
          this.Za = Math.floor(1e5 * Math.random());
          a = this.Za++;
          var b = new A8(this, "", a),
            c = this.Y;
          this.Hb && (c ? ((c = g.md(c)), g.od(c, this.Hb)) : (c = this.Hb));
          null !== this.N || this.rb || ((b.Na = c), (c = null));
          var d;
          if (this.zb)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = JCb(this, b, d);
          e = this.Na.clone();
          g.Fp(e, "RID", a);
          g.Fp(e, "CVER", 22);
          this.Da && g.Fp(e, "X-HTTP-Session-Id", this.Da);
          K8(this, e);
          c &&
            (this.rb
              ? (d = "headers=" + g.Se(g.Fga(c)) + "&" + d)
              : this.N && g.Jp(e, this.N, c));
          rCb(this.B, b);
          this.Rf && g.Fp(e, "TYPE", "init");
          this.zb
            ? (g.Fp(e, "$req", d),
              g.Fp(e, "SID", "null"),
              (b.Gb = !0),
              fCb(b, e, null))
            : fCb(b, e, d);
          this.Ih = 2;
        }
      } else
        3 == this.Ih &&
          (a ? KCb(this, a) : 0 == this.C.length || yCb(this.B) || KCb(this));
  };
  g.k.JT = function () {
    this.Z = null;
    LCb(this);
    if (this.Dc && !(this.fb || null == this.j || 0 >= this.Id)) {
      var a = 2 * this.Id;
      this.Ga = y8((0, g.gb)(this.c$, this), a);
    }
  };
  g.k.c$ = function () {
    this.Ga &&
      ((this.Ga = null),
      (this.Va = !1),
      (this.fb = !0),
      x8(10),
      F8(this),
      LCb(this));
  };
  g.k.wQ = function (a) {
    this.j == a && this.Dc && !this.fb && (FCb(this), (this.fb = !0), x8(11));
  };
  g.k.Q3 = function () {
    null != this.qa && ((this.qa = null), F8(this), pCb(this), x8(19));
  };
  g.k.mda = function (a) {
    a ? x8(2) : x8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = OCb.prototype;
  g.k.PT = function () {};
  g.k.OT = function () {};
  g.k.NT = function () {};
  g.k.LT = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.R3 = function () {};
  g.lb(M8, g.Dd);
  M8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Ra = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  M8.prototype.close = function () {
    this.j.disconnect();
  };
  M8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.$m(a)), (a = c));
    b.C.push(new wCb(b.Pf++, a));
    3 == b.Ih && H8(b);
  };
  M8.prototype.va = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    M8.Mf.va.call(this);
  };
  g.lb(QCb, XBb);
  g.lb(RCb, YBb);
  g.lb(L8, OCb);
  L8.prototype.PT = function () {
    this.j.dispatchEvent("m");
  };
  L8.prototype.OT = function (a) {
    this.j.dispatchEvent(new QCb(a));
  };
  L8.prototype.NT = function (a) {
    this.j.dispatchEvent(new RCb(a));
  };
  L8.prototype.LT = function () {
    this.j.dispatchEvent("n");
  };
  var O8 = new g.Dd();
  g.y(UCb, g.zb);
  g.k = Q8.prototype;
  g.k.Pu = null;
  g.k.Vr = !1;
  g.k.Sx = null;
  g.k.YL = null;
  g.k.iC = null;
  g.k.TG = null;
  g.k.fC = null;
  g.k.SG = null;
  g.k.Ru = null;
  g.k.cj = null;
  g.k.VG = 0;
  g.k.X0 = null;
  g.k.UG = null;
  g.k.Qu = null;
  g.k.hC = -1;
  g.k.b0 = !0;
  g.k.gC = !1;
  g.k.XL = 0;
  g.k.QG = null;
  var $Cb = {},
    ZCb = {};
  g.k = Q8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.T3 = function (a) {
    a = a.target;
    var b = this.QG;
    b && 3 == g.Tn(a) ? b.WL() : this.QT(a);
  };
  g.k.QT = function (a) {
    try {
      if (a == this.cj)
        a: {
          var b = g.Tn(this.cj),
            c = this.cj.B,
            d = this.cj.getStatus();
          if (g.Rc && !g.Mc("420+")) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Vn(this.cj))) break a;
          this.gC ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.jr(3) : this.j.jr(2));
          cDb(this);
          var e = this.cj.getStatus();
          this.hC = e;
          var f = g.Vn(this.cj);
          if ((this.Vr = 200 == e)) {
            4 == b && R8(this);
            if (this.Da) {
              for (a = !0; !this.gC && this.VG < f.length; ) {
                var h = aDb(this, f);
                if (h == ZCb) {
                  4 == b && ((this.Qu = 4), P8(15), (a = !1));
                  break;
                } else if (h == $Cb) {
                  this.Qu = 4;
                  P8(16);
                  a = !1;
                  break;
                } else eDb(this, h);
              }
              4 == b && 0 == f.length && ((this.Qu = 1), P8(17), (a = !1));
              this.Vr = this.Vr && a;
              a || (R8(this), dDb(this));
            } else eDb(this, f);
            this.Vr &&
              !this.gC &&
              (4 == b ? this.j.bM(this) : ((this.Vr = !1), YCb(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.Qu = 3), P8(13))
              : ((this.Qu = 0), P8(14)),
              R8(this),
              dDb(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.cancel = function () {
    this.gC = !0;
    R8(this);
  };
  g.k.S3 = function () {
    this.Sx = null;
    var a = Date.now();
    0 <= a - this.YL
      ? (2 != this.TG && this.j.jr(3),
        R8(this),
        (this.Qu = 2),
        P8(18),
        dDb(this))
      : bDb(this, this.YL - a);
  };
  g.k.getLastError = function () {
    return this.Qu;
  };
  g.k = hDb.prototype;
  g.k.aM = null;
  g.k.Ck = null;
  g.k.EK = !1;
  g.k.cM = null;
  g.k.Nl = null;
  g.k.lq = -1;
  g.k.WG = null;
  g.k.SC = null;
  g.k.connect = function (a) {
    this.cM = a;
    a = T8(this.j, null, this.cM);
    P8(3);
    Date.now();
    var b = this.j.Y;
    null != b
      ? ((this.WG = b[0]),
        (this.SC = b[1])
          ? ((this.Nl = 1), iDb(this))
          : ((this.Nl = 2), jDb(this)))
      : (c8(a, "MODE", "init"),
        (this.Ck = new Q8(this)),
        (this.Ck.Pu = this.aM),
        XCb(this.Ck, a, !1, null, !0),
        (this.Nl = 0));
  };
  g.k.c6 = function (a) {
    if (a) (this.Nl = 2), jDb(this);
    else {
      P8(4);
      var b = this.j;
      b.Io = b.Bs.lq;
      X8(b, 9);
    }
    a && this.jr(2);
  };
  g.k.ZL = function (a) {
    return this.j.ZL(a);
  };
  g.k.abort = function () {
    this.Ck && (this.Ck.cancel(), (this.Ck = null));
    this.lq = -1;
  };
  g.k.Hg = function () {
    return !1;
  };
  g.k.RT = function (a, b) {
    this.lq = a.hC;
    if (0 == this.Nl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.Io = this.lq;
          X8(a, 2);
          return;
        }
        this.WG = c[0];
        this.SC = c[1];
      } else (a = this.j), (a.Io = this.lq), X8(a, 2);
    else
      2 == this.Nl &&
        (this.EK
          ? (P8(7), Date.now())
          : "11111" == b
          ? (P8(6),
            (this.EK = !0),
            Date.now(),
            (this.lq = 200),
            this.Ck.cancel(),
            P8(12),
            U8(this.j, this, !0))
          : (P8(8), Date.now(), (this.EK = !1)));
  };
  g.k.bM = function () {
    this.lq = this.Ck.hC;
    if (this.Ck.Vr)
      0 == this.Nl
        ? this.SC
          ? ((this.Nl = 1), iDb(this))
          : ((this.Nl = 2), jDb(this))
        : 2 == this.Nl &&
          (this.EK
            ? (P8(12), U8(this.j, this, !0))
            : (P8(11), U8(this.j, this, !1)));
    else {
      0 == this.Nl ? P8(9) : 2 == this.Nl && P8(10);
      var a = this.j;
      this.Ck.getLastError();
      a.Io = this.lq;
      X8(a, 2);
    }
  };
  g.k.jC = function () {
    return this.j.jC();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.jr = function (a) {
    this.j.jr(a);
  };
  g.k = kDb.prototype;
  g.k.Ho = null;
  g.k.kC = null;
  g.k.Sj = null;
  g.k.Ng = null;
  g.k.eM = null;
  g.k.XG = null;
  g.k.ST = null;
  g.k.dM = null;
  g.k.lC = 0;
  g.k.V3 = 0;
  g.k.Gi = null;
  g.k.Wr = null;
  g.k.mq = null;
  g.k.Tu = null;
  g.k.Bs = null;
  g.k.xL = null;
  g.k.Vx = -1;
  g.k.TT = -1;
  g.k.Io = -1;
  g.k.Ux = 0;
  g.k.Tx = 0;
  g.k.Su = 8;
  g.lb(mDb, g.zb);
  g.lb(nDb, g.zb);
  g.k = kDb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    P8(0);
    this.eM = b;
    this.kC = c || {};
    d && void 0 !== e && ((this.kC.OSID = d), (this.kC.OAID = e));
    this.Z ? (N8((0, g.gb)(this.hW, this, a), 100), pDb(this)) : this.hW(a);
  };
  g.k.disconnect = function () {
    qDb(this);
    if (3 == this.j) {
      var a = this.lC++,
        b = this.XG.clone();
      g.Fp(b, "SID", this.D);
      g.Fp(b, "RID", a);
      g.Fp(b, "TYPE", "terminate");
      W8(this, b);
      a = new Q8(this, this.D, a);
      a.TG = 2;
      a.fC = b8(b.clone());
      new Image().src = a.fC.toString();
      a.iC = Date.now();
      YCb(a);
    }
    ADb(this);
  };
  g.k.hW = function (a) {
    this.Bs = new hDb(this);
    this.Bs.aM = this.Ho;
    this.Bs.B = this.G;
    this.Bs.connect(a);
  };
  g.k.Hg = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.VT = function (a) {
    this.Wr = null;
    vDb(this, a);
  };
  g.k.UT = function () {
    this.mq = null;
    this.Ng = new Q8(this, this.D, "rpc", this.N);
    this.Ng.Pu = this.Ho;
    this.Ng.XL = 0;
    var a = this.ST.clone();
    g.Fp(a, "RID", "rpc");
    g.Fp(a, "SID", this.D);
    g.Fp(a, "CI", this.xL ? "0" : "1");
    g.Fp(a, "AID", this.Vx);
    W8(this, a);
    g.Fp(a, "TYPE", "xmlhttp");
    XCb(this.Ng, a, !0, this.dM, !1);
  };
  g.k.RT = function (a, b) {
    if (0 != this.j && (this.Ng == a || this.Sj == a))
      if (((this.Io = a.hC), this.Sj == a && 3 == this.j))
        if (7 < this.Su) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.mq) {
                  if (this.Ng)
                    if (this.Ng.iC + 3e3 < this.Sj.iC)
                      V8(this), this.Ng.cancel(), (this.Ng = null);
                    else break a;
                  yDb(this);
                  P8(19);
                }
              }
            else
              (this.TT = a[1]),
                0 < this.TT - this.Vx &&
                  37500 > a[2] &&
                  this.xL &&
                  0 == this.Tx &&
                  !this.Tu &&
                  (this.Tu = N8((0, g.gb)(this.W3, this), 6e3));
          else X8(this, 11);
        } else null != b && X8(this, 11);
      else if ((this.Ng == a && V8(this), !g.ec(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Vx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.dM = c[2]),
                  (c = c[3]),
                  null != c ? (this.Su = c) : (this.Su = 6),
                  (this.j = 3),
                  this.Gi && this.Gi.aU(),
                  (this.ST = T8(this, this.jC() ? this.dM : null, this.eM)),
                  wDb(this))
                : "stop" == c[0] && X8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? X8(this, 7)
                  : "noop" != c[0] && this.Gi && this.Gi.ZT(c),
                (this.Tx = 0));
  };
  g.k.W3 = function () {
    null != this.Tu &&
      ((this.Tu = null), this.Ng.cancel(), (this.Ng = null), yDb(this), P8(20));
  };
  g.k.bM = function (a) {
    if (this.Ng == a) {
      V8(this);
      this.Ng = null;
      var b = 2;
    } else if (this.Sj == a) (this.Sj = null), (b = 1);
    else return;
    this.Io = a.hC;
    if (0 != this.j)
      if (a.Vr)
        if (1 == b) {
          b = a.Ru ? a.Ru.length : 0;
          a = Date.now() - a.iC;
          var c = O8;
          c.dispatchEvent(new mDb(c, b, a, this.Ux));
          oDb(this);
          this.C.length = 0;
        } else wDb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.Io))) {
          if ((d = 1 == b))
            this.Sj || this.Wr || 1 == this.j || 2 <= this.Ux
              ? (d = !1)
              : ((this.Wr = N8(
                  (0, g.gb)(this.VT, this, a),
                  xDb(this, this.Ux)
                )),
                this.Ux++,
                (d = !0));
          d = !(d || (2 == b && yDb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              X8(this, 5);
              break;
            case 4:
              X8(this, 10);
              break;
            case 3:
              X8(this, 6);
              break;
            case 7:
              X8(this, 12);
              break;
            default:
              X8(this, 2);
          }
      }
  };
  g.k.U3 = function (a) {
    if (!g.Fb(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.lda = function (a) {
    a ? P8(2) : (P8(1), zDb(this, 8));
  };
  g.k.ZL = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.Qn();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Gi && this.Gi.isActive(this);
  };
  g.k.jr = function (a) {
    var b = O8;
    b.dispatchEvent(new nDb(b, a));
  };
  g.k.jC = function () {
    return !1;
  };
  g.k = BDb.prototype;
  g.k.aU = function () {};
  g.k.ZT = function () {};
  g.k.XT = function () {};
  g.k.fM = function () {};
  g.k.bU = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = CDb.prototype;
  g.k.enqueue = function (a) {
    this.B.push(a);
  };
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Fb(this.j, a) || g.Fb(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.bib)(b, a);
    0 <= c ? (g.Gb(b, c), (b = !0)) : (b = !1);
    return b || g.Hb(this.B, a);
  };
  g.k.im = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.y(DDb, g.zb);
  g.y(EDb, g.zb);
  g.lb(Y8, g.I);
  g.k = Y8.prototype;
  g.k.lba = function () {
    this.Qi = Math.min(3e5, 2 * this.Qi);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Qi + 15e3 * Math.random();
    g.mv(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Qi = 5e3;
  };
  g.lb(GDb, BDb);
  g.k = GDb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Hh = function (a) {
    return this.C.Hh(a);
  };
  g.k.publish = function (a, b) {
    return this.C.publish.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.vb(this.C),
      this.disconnect(),
      g.vb(this.B),
      (this.B = null),
      (this.ra = function () {
        return "";
      }));
  };
  g.k.Ma = function () {
    return this.qa;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Y = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Ba + "/test";
      b = this.Ba + "/bind";
      var d = new kDb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Ra
        ),
        e = this.j;
      e && (e.Gi = null);
      d.Gi = this;
      this.j = d;
      HDb(this);
      if (this.j) {
        d = g.cB("ID_TOKEN");
        var f = this.j.Ho || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Ho = f;
      }
      e
        ? ((3 != e.getState() && 0 == sDb(e)) || e.getState(),
          this.j.connect(a, b, this.N, e.D, e.Vx))
        : c
        ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.N);
    }
  };
  g.k.disconnect = function (a) {
    this.Z = a || 0;
    this.B.stop();
    HDb(this);
    this.j && (3 == this.j.getState() && vDb(this.j), this.j.disconnect());
    this.Z = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.od(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Sz() && (HDb(this), rDb(this.j, a));
  };
  g.k.aU = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) rDb(this.j, a[b]);
    }
    this.publish("handlerOpened");
    bBb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.XT = function (a) {
    var b = 2 == a && 401 == this.j.Io;
    4 == a || b || this.B.start();
    this.publish("handlerError", a, b);
    hBb(this.Da, "BROWSER_CHANNEL");
  };
  g.k.fM = function (a, b) {
    if (!this.B.isActive()) this.publish("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    dBb(this.Ga, "BROWSER_CHANNEL");
    a &&
      this.Wa.j.hM(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.Za.j.hM(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.bU = function () {
    var a = { v: 2 };
    this.Y && (a.gsessionid = this.Y);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.Z && (a.ui = "" + this.Z);
    this.K && g.od(a, this.K);
    return a;
  };
  g.k.ZT = function (a) {
    "S" == a[0]
      ? (this.Y = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.publish("handlerMessage", new FDb(a[0], a[1]));
    fBb(this.La, "BROWSER_CHANNEL");
  };
  g.k.Sz = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Gr = function (a) {
    (this.N.loungeIdToken = a) || this.B.stop();
    if (this.Va && this.j) {
      var b = this.j.Ho || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Ho = b;
    }
  };
  g.k.getDeviceId = function () {
    return this.N.id;
  };
  g.k.Vs = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.ix = function () {
    var a = this.B;
    g.nv(a.j);
    a.start();
  };
  g.k.zca = function () {
    this.B.isActive();
    0 == sDb(this.j) && this.connect(this.K, this.G);
  };
  Z8.prototype.sendRequest = function (a, b, c, d, e, f, h) {
    a = {
      format: f ? "RAW" : "JSON",
      method: a,
      context: this,
      timeout: 5e3,
      withCredentials: !!h,
      onSuccess: g.jb(this.D, d, !f),
      onError: g.jb(this.C, e),
      onTimeout: g.jb(this.G, e),
    };
    c &&
      ((a.postParams = c),
      (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
    return g.CB(b, a);
  };
  Z8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  Z8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Z8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.y(IDb, g.Dd);
  g.k = IDb.prototype;
  g.k.connect = function (a, b, c) {
    this.Ed.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Ed.disconnect(a);
  };
  g.k.ix = function () {
    this.Ed.ix();
  };
  g.k.getDeviceId = function () {
    return this.Ed.getDeviceId();
  };
  g.k.Vs = function () {
    return this.Ed.Vs();
  };
  g.k.Sz = function () {
    return this.Ed.Sz();
  };
  g.k.X3 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Ed,
      b = this.j;
    g.sC("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.xL,
      sessionId: a.j.D,
      arrayId: a.j.Vx,
    });
    g.sC("yt-remote-session-screen-id", b);
    a = m8();
    b = n8();
    g.Fb(a, b) || a.push(b);
    ABb(a);
    CBb();
  };
  g.k.onClosed = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.onMessage = function (a) {
    this.dispatchEvent(new DDb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new EDb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Ed.sendMessage(a, b);
  };
  g.k.Gr = function (a) {
    this.Ed.Gr(a);
  };
  g.k.dispose = function () {
    this.Ed.dispose();
  };
  g.k = JDb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.Z = a),
      (this.N = b),
      LDb(this),
      (a = g.cB("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.u9 && (this.B.mdxVersion = "" + this.j.u9),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.u6 && (this.B.cst = this.j.u6),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.N ? (this.B.ui = "" + this.N) : delete this.B.ui,
      Object.assign(this.B, this.Z),
      (this.channel = new M8(this.pathPrefix, {
        E8: "gsessionid",
        y9: this.D,
        z9: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      KDb(this));
  };
  g.k.disconnect = function (a) {
    this.Y = void 0 === a ? 0 : a;
    this.C.stop();
    LDb(this);
    this.channel &&
      (0 !== this.Y ? (this.B.ui = "" + this.Y) : delete this.B.ui,
      this.channel.close());
    this.Y = 0;
  };
  g.k.Vs = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.ix = function () {
    var a = this.C;
    g.nv(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (LDb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Gr = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.getDeviceId = function () {
    return this.j ? this.j.id : "";
  };
  g.k.publish = function (a) {
    return this.G.publish.apply(
      this.G,
      [a].concat(g.qa(g.Ia.apply(1, arguments)))
    );
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Hh = function (a) {
    return this.G.Hh(a);
  };
  g.k.dispose = function () {
    this.qa ||
      ((this.qa = !0),
      g.vb(this.G),
      this.disconnect(),
      g.vb(this.C),
      (this.Ba = function () {
        return "";
      }));
  };
  g.k.Ma = function () {
    return this.qa;
  };
  g.y(MDb, g.Dd);
  g.k = MDb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.ix = function () {
    this.j.ix();
  };
  g.k.getDeviceId = function () {
    return this.j.getDeviceId();
  };
  g.k.Vs = function () {
    return this.j.Vs();
  };
  g.k.Sz = function () {
    return 3 === this.j.K;
  };
  g.k.Y3 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.onClosed = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.onMessage = function (a) {
    this.dispatchEvent(new DDb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new EDb(401 === this.j.xg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Gr = function (a) {
    this.j.Gr(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var UDb = Date.now(),
    a9 = null,
    e9 = Array(50),
    d9 = -1,
    f9 = !1;
  g.lb(g9, g.wF);
  g9.prototype.Kk = function () {
    return this.screens;
  };
  g9.prototype.contains = function (a) {
    return !!xBb(this.screens, a);
  };
  g9.prototype.get = function (a) {
    return a ? l8(this.screens, a) : null;
  };
  g9.prototype.info = function (a) {
    b9(this.K, a);
  };
  g.y(YDb, g.wF);
  g.k = YDb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.fd) && this.s_();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.fd) || (g.yB(this.fd), (this.fd = NaN));
  };
  g.k.va = function () {
    this.stop();
    g.wF.prototype.va.call(this);
  };
  g.k.s_ = function () {
    this.fd = NaN;
    this.j = g.CB($8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.N },
      timeout: 5e3,
      onSuccess: (0, g.gb)(this.a4, this),
      onError: (0, g.gb)(this.Z3, this),
      onTimeout: (0, g.gb)(this.b4, this),
    });
  };
  g.k.a4 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.publish("pairingComplete", new i8(a), b);
  };
  g.k.Z3 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= SFb.length
        ? this.publish("pairingFailed", Error("DIAL polling timed out"))
        : ((a = SFb[this.B]),
          (this.fd = g.wB((0, g.gb)(this.s_, this), a)),
          this.B++)
      : this.publish("pairingFailed", Error("Server error " + a.status));
  };
  g.k.b4 = function () {
    this.j = null;
    this.publish("pairingFailed", Error("Server not responding"));
  };
  var SFb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.lb(i9, g9);
  g.k = i9.prototype;
  g.k.start = function () {
    h9(this) && this.publish("screenChange");
    !g.tC("yt-remote-lounge-token-expiration") && ZDb(this);
    g.yB(this.j);
    this.j = g.wB((0, g.gb)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    h9(this);
    VDb(this, a);
    j9(this, !1);
    this.publish("screenChange");
    b(a);
    a.token || ZDb(this);
  };
  g.k.remove = function (a, b) {
    var c = h9(this);
    XDb(this, a) && (j9(this, !1), (c = !0));
    b(a);
    c && this.publish("screenChange");
  };
  g.k.wL = function (a, b, c, d) {
    var e = h9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), j9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.publish("screenChange");
  };
  g.k.va = function () {
    g.yB(this.j);
    i9.Mf.va.call(this);
  };
  g.k.c8 = function (a) {
    h9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    j9(this, !b);
    b && b9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.b8 = function (a) {
    b9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.y(aEb, g.wF);
  g.k = aEb.prototype;
  g.k.start = function () {
    var a = parseInt(g.tC("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.kb() - 144e5 < a ? 0 : a)
      ? k9(this)
      : ((this.D = g.kb() + 3e5),
        g.sC("yt-remote-fast-check-period", this.D),
        this.CR());
  };
  g.k.isEmpty = function () {
    return g.id(this.j);
  };
  g.k.update = function () {
    $Db("Updating availability on schedule.");
    var a = this.K(),
      b = g.Xc(
        this.j,
        function (c, d) {
          return c && !!l8(a, d);
        },
        this
      );
    dEb(this, b);
  };
  g.k.va = function () {
    g.yB(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.wF.prototype.va.call(this);
  };
  g.k.CR = function () {
    g.yB(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = eEb(this);
    if (UAb(a)) {
      var b = $8(this.G, "/pairing/get_screen_availability");
      this.B = this.G.sendRequest(
        "POST",
        b,
        { lounge_token: g.dd(a).join(",") },
        (0, g.gb)(this.Paa, this, a),
        (0, g.gb)(this.Oaa, this)
      );
    } else dEb(this, {}), k9(this);
  };
  g.k.Paa = function (a, b) {
    this.B = null;
    var c = g.dd(eEb(this));
    if (g.Xb(c, g.dd(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      dEb(this, c);
      k9(this);
    } else this.ag("Changing Screen set during request."), this.CR();
  };
  g.k.Oaa = function (a) {
    this.ag("Screen availability failed: " + a);
    this.B = null;
    k9(this);
  };
  g.k.ag = function (a) {
    b9("OnlineScreenService", a);
  };
  g.lb(l9, g9);
  g.k = l9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.publish("screenChange"),
      this.j.isEmpty() || this.publish("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.wL = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.wL(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        b9(this.K, a),
        d(Error(a)));
  };
  g.k.Kk = function (a) {
    return a
      ? this.screens
      : g.Kb(
          this.screens,
          g.Ht(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.cU = function () {
    return g.Ht(
      this.Kk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.dU = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new YDb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.vb(l);
      e(m9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.vb(l);
      f(m);
    });
    l.start();
    return (0, g.gb)(l.stop, l);
  };
  g.k.d4 = function (a, b, c, d) {
    g.CB($8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.gb)(function (e, f) {
        e = new i8(f.screen || {});
        if (!e.name || iEb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); iEb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(m9(this, e));
      }, this),
      onError: (0, g.gb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.gb)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.va = function () {
    g.vb(this.B);
    g.vb(this.j);
    l9.Mf.va.call(this);
  };
  g.k.m8 = function () {
    kEb(this);
    this.publish("screenChange");
    this.j.update();
  };
  l9.prototype.dispose = l9.prototype.dispose;
  g.lb(n9, g.wF);
  g.k = n9.prototype;
  g.k.uj = function (a) {
    this.Ma() ||
      (a && (p9(this, "" + a), this.publish("sessionFailed")),
      (this.j = null),
      this.publish("sessionScreen", null));
  };
  g.k.info = function (a) {
    b9(this.Da, a);
  };
  g.k.eU = function () {
    return null;
  };
  g.k.XR = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.gb)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.gb)(function () {
        p9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.va = function () {
    this.XR("");
    n9.Mf.va.call(this);
  };
  g.y(q9, n9);
  g.k = q9.prototype;
  g.k.VR = function (a) {
    if (this.C) {
      if (this.C == a) return;
      p9(this, "Overriding cast session with new session object");
      wEb(this);
      this.Ba = !1;
      this.Y = "unknown";
      this.C.removeUpdateListener(this.ra);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ga
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.ra);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga);
    rEb(this, "getMdxSessionStatus");
  };
  g.k.gA = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.$m(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.gb)(function () {
            this.uj();
          }, this),
          (0, g.gb)(function () {
            this.uj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.uj(Error("Stopping cast device without session."));
  };
  g.k.XR = function () {};
  g.k.va = function () {
    this.info("disposeInternal");
    wEb(this);
    this.C &&
      (this.C.removeUpdateListener(this.ra),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ga
      ));
    this.C = null;
    n9.prototype.va.call(this);
  };
  g.k.zba = function (a, b) {
    if (!this.Ma())
      if (b)
        if (((b = d8(b)), g.bb(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.$m(b)),
            a)
          ) {
            case "mdxSessionStatus":
              oEb(this, b);
              break;
            case "loungeToken":
              sEb(this, b);
              break;
            default:
              p9(this, "Unknown youtube message: " + a);
          }
        else p9(this, "Unable to parse message.");
      else p9(this, "No data in message.");
  };
  g.k.qX = function (a, b, c, d) {
    g.yB(this.Z);
    this.Z = 0;
    hEb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.gb)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (p9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.Z = g.wB((0, g.gb)(this.qX, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.eU = function () {
    return this.C;
  };
  g.k.e4 = function (a) {
    this.Ma() || a || (p9(this, "Cast session died."), this.uj());
  };
  g.y(r9, n9);
  g.k = r9.prototype;
  g.k.VR = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.La);
  };
  g.k.gA = function (a) {
    this.Na = a;
    this.qa();
  };
  g.k.stop = function () {
    EEb(this);
    this.C
      ? this.C.stop(
          (0, g.gb)(this.uj, this, null),
          (0, g.gb)(this.uj, this, "Failed to stop DIAL device.")
        )
      : this.uj();
  };
  g.k.va = function () {
    EEb(this);
    this.C && this.C.removeUpdateListener(this.La);
    this.C = null;
    n9.prototype.va.call(this);
  };
  g.k.f4 = function (a) {
    this.Ma() ||
      a ||
      (p9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.uj());
  };
  g.y(u9, n9);
  u9.prototype.stop = function () {
    this.uj();
  };
  u9.prototype.VR = function () {};
  u9.prototype.gA = function () {
    g.yB(this.C);
    this.C = NaN;
    var a = l8(this.D.Kk(), this.B.label);
    a ? o9(this, a) : this.uj(Error("No such screen"));
  };
  u9.prototype.va = function () {
    g.yB(this.C);
    this.C = NaN;
    n9.prototype.va.call(this);
  };
  g.y(v9, g.wF);
  g.k = v9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.Z, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.gb)(this.xaa, this);
    c = new chrome.cast.ApiConfig(c, (0, g.gb)(this.VZ, this), e, d, a);
    c.customDialLaunchCallback = (0, g.gb)(this.p$, this);
    chrome.cast.initialize(
      c,
      (0, g.gb)(function () {
        this.Ma() ||
          (chrome.cast.addReceiverActionListener(this.G),
          RDb(),
          this.B.subscribe("onlineScreenChange", (0, g.gb)(this.fU, this)),
          (this.C = HEb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.gb)(function (f) {
              this.ag("Failed to set initial custom receivers: " + g.$m(f));
            }, this)
          ),
          this.publish("yt-remote-cast2-availability-change", x9(this)),
          b(!0));
      }, this),
      (0, g.gb)(function (f) {
        this.ag("Failed to initialize API: " + g.$m(f));
        b(!1);
      }, this)
    );
  };
  g.k.Ica = function (a, b) {
    w9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        w9("Unsetting old screen status: " + this.j.B.friendlyName),
          y9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        a = l8(this.B.Kk(), a);
        if (!a) {
          w9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == a.idType) {
          w9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        c = FEb(this, a);
        c ||
          (w9("setConnectedScreenStatus: Connected receiver not custom..."),
          (c = new chrome.cast.Receiver(a.uuid ? a.uuid : a.id, a.name)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(c),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.gb)(function (d) {
              this.ag("Failed to set initial custom receivers: " + g.$m(d));
            }, this)
          ));
        w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
        y9(this, new u9(this.B, c), !0);
      }
      this.j.XR(b);
    } else w9("setConnectedScreenStatus: no screen.");
  };
  g.k.Lca = function (a) {
    this.Ma()
      ? this.ag("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.gA(a)
      : this.ag("Setting connection data without a session");
  };
  g.k.i4 = function () {
    this.Ma()
      ? this.ag("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), y9(this, null))
      : w9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.gb)(this.VZ, this),
      (0, g.gb)(this.Saa, this)
    );
  };
  g.k.va = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.gb)(this.fU, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = ODb,
      b = g.Xa("yt.mdx.remote.debug.handlers_");
    g.Hb(b || [], a);
    g.vb(this.j);
    g.wF.prototype.va.call(this);
  };
  g.k.ag = function (a) {
    b9("Controller", a);
  };
  g.k.XZ = function (a, b) {
    this.j == a &&
      (b || y9(this, null), this.publish("yt-remote-cast2-session-change", b));
  };
  g.k.uaa = function (a, b) {
    if (!this.Ma())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          w9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                w9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                w9("onReceiverAction_: Casting to active receiver.");
                this.j.j &&
                  this.publish("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                y9(this, new u9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                y9(this, new r9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                y9(this, new q9(this.B, a, this.config_));
                break;
              default:
                this.ag("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.ag("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.ag("onReceiverAction_ called without receiver.");
  };
  g.k.p$ = function (a) {
    if (this.Ma()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.ag("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.ag(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          w9("Reselecting dial screen."),
          this.publish("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.ag(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      y9(this, new r9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.Z = a;
    b.Z.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.Z.extraData || {}),
        (c = a.screenId || null),
        s9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = BEb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.Z.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.fB(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = CEb(b, c)))
          : (a = CEb(b, c)))
      : (a = zEb(b));
    return a;
  };
  g.k.VZ = function (a) {
    var b = this;
    if (!this.Ma() && !this.K) {
      w9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            w9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              y9(this, new q9(this.B, c, this.config_), !0);
          else {
            this.ag(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = l8(this.B.Kk(), d.label);
        e &&
          j8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (w9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.vb(this.j),
          (this.j = new q9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.gb)(this.XZ, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return GEb(b, b.j);
          }),
          this.j.gA(null));
        this.j.VR(a);
      }
    }
  };
  g.k.g4 = function () {
    return this.j ? this.j.eU() : null;
  };
  g.k.Saa = function (a) {
    this.Ma() ||
      (this.ag("Failed to estabilish a session: " + g.$m(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null),
      this.publish("yt-remote-cast2-session-failed"));
  };
  g.k.xaa = function (a) {
    w9("Receiver availability updated: " + a);
    if (!this.Ma()) {
      var b = x9(this);
      this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      x9(this) != b &&
        this.publish("yt-remote-cast2-availability-change", x9(this));
    }
  };
  g.k.fU = function () {
    this.Ma() ||
      ((this.C = HEb(this)),
      w9("Updating custom receivers: " + g.$m(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.gb)(function () {
          this.ag("Failed to set custom receivers.");
        }, this)
      ),
      this.publish("yt-remote-cast2-availability-change", x9(this)));
  };
  v9.prototype.setLaunchParams = v9.prototype.Lca;
  v9.prototype.setConnectedScreenStatus = v9.prototype.Ica;
  v9.prototype.stopSession = v9.prototype.i4;
  v9.prototype.getCastSession = v9.prototype.g4;
  v9.prototype.requestSession = v9.prototype.requestSession;
  v9.prototype.init = v9.prototype.init;
  v9.prototype.dispose = v9.prototype.dispose;
  var QEb = [];
  g.k = F9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    WEb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.vp = a.hasPrevious),
      (this.Nk = a.hasNext),
      (this.N = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.Z = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.fl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + G9(this) : this.G;
  };
  g.k.clone = function () {
    return new F9(XEb(this));
  };
  g.y(L9, g.wF);
  g.k = L9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.Vs = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.ix = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    N9(this)
      ? (this.j ? this.j.play(null, g.Jd, R9(this, "play")) : Q9(this, "play"),
        $Eb(this, 1, I9(M9(this))),
        this.publish("remotePlayerChange"))
      : O9(this, this.play);
  };
  g.k.pause = function () {
    N9(this)
      ? (this.j
          ? this.j.pause(null, g.Jd, R9(this, "pause"))
          : Q9(this, "pause"),
        $Eb(this, 2, I9(M9(this))),
        this.publish("remotePlayerChange"))
      : O9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (N9(this)) {
      if (this.j) {
        var b = M9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Jd, R9(this, "seekTo", { newTime: a }));
      } else Q9(this, "seekTo", { newTime: a });
      $Eb(this, 3, a);
      this.publish("remotePlayerChange");
    } else O9(this, g.jb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (N9(this)) {
      this.j
        ? this.j.stop(null, g.Jd, R9(this, "stopVideo"))
        : Q9(this, "stopVideo");
      var a = M9(this);
      a.index = -1;
      a.videoId = "";
      WEb(a);
      P9(this, a);
      this.publish("remotePlayerChange");
    } else O9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.gb)(function () {
              c9("set receiver volume: " + d);
            }, this),
            (0, g.gb)(function () {
              this.ag("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.gb)(function () {
              c9("set receiver muted: " + b);
            }, this),
            (0, g.gb)(function () {
              this.ag("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        Q9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      P9(this, c);
    } else O9(this, g.jb(this.setVolume, a, b));
  };
  g.k.gU = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.$m(b.style)),
        g.od(a, c.trackData));
      Q9(this, "setSubtitlesTrack", a);
      P9(this, c);
    } else O9(this, g.jb(this.gU, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    N9(this)
      ? ((b = b.getLanguageInfo().getId()),
        Q9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = M9(this)),
        (a.audioTrackId = b),
        P9(this, a))
      : O9(this, g.jb(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = M9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    J9(l, a, c || 0);
    void 0 !== b && (H9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.$m(h));
    Q9(this, "setPlaylist", m);
    d || P9(this, l);
  };
  g.k.yK = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "previous");
    } else O9(this, g.jb(this.yK, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "next");
    } else O9(this, g.jb(this.nextVideo, a, b));
  };
  g.k.EH = function () {
    if (N9(this)) {
      Q9(this, "clearPlaylist");
      var a = M9(this);
      a.reset();
      P9(this, a);
      this.publish("remotePlayerChange");
    } else O9(this, this.EH);
  };
  g.k.xW = function () {
    N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.xW);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.publish("proxyStateChange", a, this.C);
    }
    g.wF.prototype.dispose.call(this);
  };
  g.k.va = function () {
    ZEb(this);
    this.D = null;
    this.G.clear();
    K9(this, null);
    g.wF.prototype.va.call(this);
  };
  g.k.bS = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.publish("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.saa = function (a, b) {
    this.publish(a, b);
  };
  g.k.g$ = function (a) {
    if (!a) this.WE(null), K9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = M9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          P9(this, b);
    }
  };
  g.k.WE = function (a) {
    c9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.Z);
    if ((this.j = a))
      this.j.addUpdateListener(this.Z),
        aFb(this),
        this.publish("remotePlayerChange");
  };
  g.k.f$ = function (a) {
    a ? (aFb(this), this.publish("remotePlayerChange")) : this.WE(null);
  };
  g.k.CS = function () {
    Q9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.i$ = function () {
    var a = TEb();
    a && K9(this, a);
  };
  g.k.ag = function (a) {
    b9("CP", a);
  };
  g.y(U9, g.wF);
  g.k = U9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.La && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      H9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.La ? "setInitialState" : "setPlaylist";
      S9("Connecting with " + c + " and params: " + g.$m(m));
      this.B.connect({ method: c, params: g.$m(m) }, a, DBb());
    } else S9("Connecting without params"), this.B.connect({}, a, DBb());
    eFb(this);
  };
  g.k.Gr = function (a) {
    this.B.Gr(a);
  };
  g.k.dispose = function () {
    this.Ma() ||
      (g.Va("yt.mdx.remote.remoteClient_", null),
      this.publish("beforeDispose"),
      T9(this, 3));
    g.wF.prototype.dispose.call(this);
  };
  g.k.va = function () {
    fFb(this);
    hFb(this);
    gFb(this);
    g.yB(this.Z);
    this.Z = NaN;
    g.yB(this.Y);
    this.Y = NaN;
    this.D = null;
    g.kC(this.qa);
    this.qa.length = 0;
    this.B.dispose();
    g.wF.prototype.va.call(this);
    this.G = this.N = this.C = this.j = this.B = null;
  };
  g.k.qY = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.I7 = function () {
    var a = 3;
    this.Ma() ||
      ((a = 0),
      isNaN(this.QD()) ? this.B.Sz() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.lz = function (a) {
    S9("Disconnecting with " + a);
    g.Va("yt.mdx.remote.remoteClient_", null);
    fFb(this);
    this.publish("beforeDisconnect", a);
    1 == a && o8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.D7 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), J9(a, this.D, a.index));
    return XEb(a);
  };
  g.k.Nca = function (a) {
    var b = this,
      c = new F9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.yB(this.Z),
      (this.Z = g.wB(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && V9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      I9(this.j) == I9(c) &&
      g.$m(this.j.trackData) == g.$m(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.$b(
      d,
      function (e) {
        this.publish(e);
      },
      this
    );
  };
  g.k.lX = function () {
    var a = this.B.getDeviceId(),
      b = g.Db(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.QD = function () {
    return this.B.Vs();
  };
  g.k.n7 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.o7 = function () {
    return this.N || "";
  };
  g.k.j4 = function () {
    !isNaN(this.QD()) && this.B.ix();
  };
  g.k.Gca = function (a, b) {
    V9(this, a, b);
    jFb(this);
  };
  g.k.hU = function () {
    var a = g.MB("SAPISID", "") || g.MB("__Secure-1PAPISID") || "",
      b = g.MB("__Secure-3PAPISID", "") || "";
    if (!a && !b) return "";
    a = g.Gg(g.Fg(a), 2);
    b = g.Gg(g.Fg(b), 2);
    return g.Gg(g.Fg("," + a + "," + b), 2);
  };
  U9.prototype.subscribe = U9.prototype.subscribe;
  U9.prototype.unsubscribeByKey = U9.prototype.Hh;
  U9.prototype.getProxyState = U9.prototype.I7;
  U9.prototype.disconnect = U9.prototype.lz;
  U9.prototype.getPlayerContextData = U9.prototype.D7;
  U9.prototype.setPlayerContextData = U9.prototype.Nca;
  U9.prototype.getOtherConnectedRemoteId = U9.prototype.lX;
  U9.prototype.getReconnectTimeout = U9.prototype.QD;
  U9.prototype.getAutoplayMode = U9.prototype.n7;
  U9.prototype.getAutoplayVideoId = U9.prototype.o7;
  U9.prototype.reconnect = U9.prototype.j4;
  U9.prototype.sendMessage = U9.prototype.Gca;
  U9.prototype.getXsrfToken = U9.prototype.hU;
  U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.qY;
  g.y(vFb, g9);
  g.k = vFb.prototype;
  g.k.Kk = function (a) {
    return this.Yg.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.Yg.$_c(a);
  };
  g.k.get = function (a) {
    return this.Yg.$_g(a);
  };
  g.k.start = function () {
    this.Yg.$_st();
  };
  g.k.add = function (a, b, c) {
    this.Yg.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.Yg.$_r(a, b, c);
  };
  g.k.wL = function (a, b, c, d) {
    this.Yg.$_un(a, b, c, d);
  };
  g.k.va = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.Yg.$_ubk(this.j[a]);
    this.j.length = 0;
    this.Yg = null;
    g9.prototype.va.call(this);
  };
  g.k.l4 = function () {
    this.publish("screenChange");
  };
  g.k.X$ = function () {
    this.publish("onlineScreenChange");
  };
  l9.prototype.$_st = l9.prototype.start;
  l9.prototype.$_gspc = l9.prototype.d4;
  l9.prototype.$_gsppc = l9.prototype.dU;
  l9.prototype.$_c = l9.prototype.contains;
  l9.prototype.$_g = l9.prototype.get;
  l9.prototype.$_a = l9.prototype.add;
  l9.prototype.$_un = l9.prototype.wL;
  l9.prototype.$_r = l9.prototype.remove;
  l9.prototype.$_gs = l9.prototype.Kk;
  l9.prototype.$_gos = l9.prototype.cU;
  l9.prototype.$_s = l9.prototype.subscribe;
  l9.prototype.$_ubk = l9.prototype.Hh;
  var f$ = null,
    i$ = !1,
    W9 = null,
    X9 = null,
    GFb = null,
    a$ = [];
  g.y(LFb, g.I);
  g.k = LFb.prototype;
  g.k.va = function () {
    g.I.prototype.va.call(this);
    this.j.stop();
    this.B.stop();
    this.N.stop();
    var a = this.Fc;
    a.unsubscribe("proxyStateChange", this.UZ, this);
    a.unsubscribe("remotePlayerChange", this.cF, this);
    a.unsubscribe("remoteQueueChange", this.gK, this);
    a.unsubscribe("previousNextChange", this.RZ, this);
    a.unsubscribe("nowAutoplaying", this.NZ, this);
    a.unsubscribe("autoplayDismissed", this.wZ, this);
    this.Fc = this.module = null;
  };
  g.k.Mk = function (a) {
    var b = g.Ia.apply(1, arguments);
    if (2 != this.Fc.C)
      if (j$(this)) {
        if (1081 != M9(this.Fc).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              M9(this.Fc).isPlaying() ? this.Fc.pause() : this.Fc.play();
              break;
            case "control_play":
              this.Fc.play();
              break;
            case "control_pause":
              this.Fc.pause();
              break;
            case "control_seek":
              this.K.WL(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              NFb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            k$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            k$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            NFb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.d$ = function (a) {
    this.N.M3(a);
  };
  g.k.Jda = function (a) {
    this.Mk("control_subtitles_set_track", g.id(a) ? null : a);
  };
  g.k.I0 = function () {
    var a = this.J.getOption("captions", "track");
    g.id(a) || NFb(this, a);
  };
  g.k.Nc = function (a) {
    this.module.Nc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.I$ = function () {
    g.id(this.C) || OFb(this, this.C);
    this.D = !1;
  };
  g.k.UZ = function (a, b) {
    this.B.stop();
    2 === b && this.B0();
  };
  g.k.cF = function () {
    if (j$(this)) {
      this.j.stop();
      var a = M9(this.Fc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Wh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Wh = 0;
          break;
        default:
          this.module.Wh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.Ac(new g.iL(8));
          this.A0();
          break;
        case 1085:
        case 3:
          this.Ac(new g.iL(9));
          break;
        case 1083:
        case 0:
          this.Ac(new g.iL(2));
          this.K.stop();
          this.Nc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.Ac(new g.iL(4));
          break;
        case 2:
          this.Ac(new g.iL(4));
          this.Nc(I9(a));
          break;
        case -1:
          this.Ac(new g.iL(64));
          break;
        case -1e3:
          this.Ac(
            new g.iL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage:
                "Video n\u00e0y kh\u00f4ng kh\u1ea3 d\u1ee5ng \u0111\u1ec3 ph\u00e1t l\u1ea1i t\u1eeb xa.",
              eI: 2,
            })
          );
      }
      a = M9(this.Fc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), OFb(this, a));
      a = M9(this.Fc);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.Z.isActive() ||
        this.A1();
    } else MFb(this);
  };
  g.k.RZ = function () {
    this.J.publish("mdxpreviousnextchange");
  };
  g.k.gK = function () {
    j$(this) || MFb(this);
  };
  g.k.NZ = function (a) {
    isNaN(a) || this.J.publish("mdxnowautoplaying", a);
  };
  g.k.wZ = function () {
    this.J.publish("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    j$(this) && this.Fc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === M9(this.Fc).playerState ? k$(this, a) : b && this.Fc.seekTo(a);
  };
  g.k.A1 = function () {
    var a = this;
    if (j$(this)) {
      var b = M9(this.Fc);
      this.events.Pc(this.Y);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.Y = this.events.T(this.J, "onVolumeChange", function (c) {
        JFb(a, c);
      });
    }
  };
  g.k.A0 = function () {
    this.j.stop();
    if (!this.Fc.Ma()) {
      var a = M9(this.Fc);
      a.isPlaying() && this.Ac(new g.iL(8));
      this.Nc(I9(a));
      this.j.start();
    }
  };
  g.k.B0 = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Fc.Vs();
    2 == this.Fc.C && !isNaN(a) && this.B.start();
  };
  g.k.Ac = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.EDa(b, a)) {
      var c = g.mG(a, 2);
      c !== g.mG(this.G, 2) && this.J.uB(c);
      this.G = a;
      QFb(this.module, b, a);
    }
  };
  g.y(l$, g.W);
  l$.prototype.od = function () {
    this.j.show();
  };
  l$.prototype.Lb = function () {
    this.j.hide();
  };
  l$.prototype.B = function () {
    q8("mdx-privacy-popup-cancel");
    this.Lb();
  };
  l$.prototype.C = function () {
    q8("mdx-privacy-popup-confirm");
    this.Lb();
  };
  g.y(m$, g.W);
  m$.prototype.onStateChange = function (a) {
    this.Bc(a.state);
  };
  m$.prototype.Bc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.mG(a, 128)
        ? g.KJ("L\u1ed7i tr\u00ean $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.KJ("\u0110ang ph\u00e1t tr\u00ean $RECEIVER_NAME", b)
        : g.KJ("\u0110\u00e3 k\u1ebft n\u1ed1i v\u1edbi $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.y(n$, g.kX);
  n$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.Xt = g.bc(a, this.j, this)),
        g.lX(this, g.Rr(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Fj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  n$.prototype.j = function (a) {
    return a.key;
  };
  n$.prototype.Bk = function (a) {
    return "cast-selector-receiver" === a ? "Truy\u1ec1n..." : this.Xt[a].name;
  };
  n$.prototype.kh = function (a) {
    g.kX.prototype.kh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.Xt[a]);
    this.Fb.Lb();
  };
  g.y(PFb, g.qV);
  g.k = PFb.prototype;
  g.k.create = function () {
    var a = this.player.U(),
      b = g.NR(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token"),
    };
    AFb(b, a);
    this.subscriptions.push(g.hE("yt-remote-before-disconnect", this.b$, this));
    this.subscriptions.push(
      g.hE("yt-remote-connection-change", this.yaa, this)
    );
    this.subscriptions.push(
      g.hE("yt-remote-receiver-availability-change", this.TZ, this)
    );
    this.subscriptions.push(g.hE("yt-remote-auto-connect", this.waa, this));
    this.subscriptions.push(g.hE("yt-remote-receiver-resumed", this.vaa, this));
    this.subscriptions.push(g.hE("mdx-privacy-popup-confirm", this.Vba, this));
    this.subscriptions.push(g.hE("mdx-privacy-popup-cancel", this.Uba, this));
    this.TZ();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.qV.prototype.load.call(this);
    this.Sl = new LFb(this, this.player, this.Fc);
    var a = (a = IFb()) ? a.currentTime : 0;
    var b = FFb() ? new L9(e$(), void 0) : null;
    0 == a && b && (a = I9(M9(b)));
    0 !== a && this.Nc(a);
    QFb(this, this.Ce, this.Ce);
    this.player.Xp(6);
  };
  g.k.unload = function () {
    this.player.publish("mdxautoplaycanceled");
    this.Es = this.Ip;
    g.wb(this.Sl, this.Fc);
    this.Fc = this.Sl = null;
    g.qV.prototype.unload.call(this);
    this.player.Xp(5);
    o$(this);
  };
  g.k.va = function () {
    g.iE(this.subscriptions);
    g.qV.prototype.va.call(this);
  };
  g.k.YE = function (a) {
    var b = g.Ia.apply(1, arguments);
    this.loaded && this.Sl.Mk.apply(this.Sl, [a].concat(g.qa(b)));
  };
  g.k.getAdState = function () {
    return this.Wh;
  };
  g.k.vp = function () {
    return this.Fc ? M9(this.Fc).vp : !1;
  };
  g.k.Nk = function () {
    return this.Fc ? M9(this.Fc).Nk : !1;
  };
  g.k.Nc = function (a, b) {
    this.BY = a || 0;
    this.player.publish("progresssync", a, b);
    this.player.wc("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.BY;
  };
  g.k.getProgressState = function () {
    var a = M9(this.Fc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Vh(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + G9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
      loaded: a.Z,
      seekableEnd: a.B ? a.j + G9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Fc && this.Fc.nextVideo();
  };
  g.k.yK = function () {
    this.Fc && this.Fc.yK();
  };
  g.k.b$ = function (a) {
    1 === a && (this.iR = this.Fc ? M9(this.Fc) : null);
  };
  g.k.yaa = function () {
    var a = FFb() ? new L9(e$(), void 0) : null;
    if (a) {
      var b = this.Es;
      this.loaded && this.unload();
      this.Fc = a;
      this.iR = null;
      b.key !== this.Ip.key && ((this.Es = b), this.load());
    } else
      g.vb(this.Fc),
        (this.Fc = null),
        this.loaded &&
          (this.unload(),
          (a = this.iR) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, I9(a)));
    this.player.publish(
      "videodatachange",
      "newdata",
      this.player.getVideoData(),
      3
    );
  };
  g.k.TZ = function () {
    var a = [this.Ip],
      b = a.concat,
      c = BFb();
    C9() &&
      g.tC("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.Xt = b.call(a, c);
    a = DFb() || this.Ip;
    p$(this, a);
    this.player.wc("onMdxReceiversChange");
  };
  g.k.waa = function () {
    var a = DFb();
    p$(this, a);
  };
  g.k.vaa = function () {
    this.Es = DFb();
  };
  g.k.Vba = function () {
    this.vF = !0;
    o$(this);
    i$ = !1;
    f$ && h$(f$, 1);
    f$ = null;
  };
  g.k.Uba = function () {
    this.vF = !1;
    o$(this);
    p$(this, this.Ip);
    this.Es = this.Ip;
    i$ = !1;
    f$ = null;
    this.player.playVideo();
  };
  g.k.Mh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.Xt;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? UEb() : p$(this, b)),
          this.loaded ? this.Es : this.Ip
        );
      case "quickCast":
        return 2 === this.Xt.length &&
          "cast-selector-receiver" === this.Xt[1].key
          ? (b && UEb(), !0)
          : !1;
    }
  };
  g.k.CS = function () {
    this.Fc.CS();
  };
  g.k.il = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.cB("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.cB("SESSION_INDEX") && !g.cB("LOGGED_IN"));
  };
  g.pV("remote", PFb);
})(_yt_player);
