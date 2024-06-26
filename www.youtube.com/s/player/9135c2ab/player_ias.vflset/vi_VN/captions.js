(function (g) {
  var window = this;
  ("use strict");
  var opb = function (a, b) {
      return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN";
    },
    ppb = function (a, b) {
      var c = new g.mS();
      c.languageCode = a.languageCode;
      c.languageName = a.languageName;
      c.name = a.name;
      c.displayName = a.displayName;
      c.kind = a.kind;
      c.isDefault = !1;
      c.j = a.j;
      c.isTranslateable = a.isTranslateable;
      c.vssId = a.vssId;
      c.url = a.url;
      c.translationLanguage = b;
      a.xtags && (c.xtags = a.xtags);
      a.captionId && (c.captionId = a.captionId);
      return c;
    },
    qpb = function (a, b) {
      var c, d, e;
      return g.H(function (f) {
        if (1 == f.j) return (c = a + "|" + b), g.z(f, g.sD(), 2);
        if (3 != f.j) {
          d = f.B;
          if (!d) throw g.WC("gct");
          return g.z(f, g.BS(d), 3);
        }
        e = f.B;
        return f.return(e.get("captions", c));
      });
    },
    rpb = function (a, b, c) {
      qpb(a, b).then(function (d) {
        d && c(d.trackData, new g.mS(d.metadata));
      });
    },
    upb = function (a) {
      if (!spb.test(a)) throw Error("'" + a + "' is not a valid hex color");
      4 == a.length && (a = a.replace(tpb, "#$1$1$2$2$3$3"));
      a = a.toLowerCase();
      a = parseInt(a.slice(1), 16);
      return [a >> 16, (a >> 8) & 255, a & 255];
    },
    vpb = function () {
      return g.tC("yt-player-caption-display-settings");
    },
    p4 = function () {
      this.segments = [];
    },
    wpb = function (a, b) {
      var c = g.Tb(a.segments, b);
      0 <= c ||
        (0 > c && 1 === (-c - 1) % 2) ||
        ((c = -c - 1),
        0 < c &&
        1 === b - a.segments[c - 1] &&
        c < a.segments.length &&
        1 === a.segments[c] - b
          ? (g.Gb(a.segments, c), g.Gb(a.segments, c - 1))
          : 0 < c && 1 === b - a.segments[c - 1]
          ? (a.segments[c - 1] = b)
          : c < a.segments.length && 1 === a.segments[c] - b
          ? (a.segments[c] = b)
          : (g.Pb(a.segments, c, 0, b), g.Pb(a.segments, c + 1, 0, b)));
    },
    xpb = function (a, b, c, d, e, f) {
      g.I.call(this);
      this.policy = a;
      this.player = b;
      this.qa = c;
      this.Z = d;
      this.G = e;
      this.Y = f;
      this.D = new p4();
      this.K = -1;
      this.C = this.B = this.j = null;
      this.N = new g.lv(this.MY, 1e3, this);
      this.events = new g.vK(this);
      g.O(this, this.N);
      g.O(this, this.events);
      this.events.T(b, "SEEK_COMPLETE", this.KA);
      this.KA();
      this.MY();
    },
    ypb = function (a) {
      return a.j && a.j.D
        ? a.j.D + a.player.Lc() < a.player.getCurrentTime()
        : !1;
    },
    zpb = function (a, b) {
      var c = g.GPa(b, a.policy, {}).Me(),
        d = { format: "RAW", withCredentials: !0 };
      if (a.policy.Ga) {
        d.method = "POST";
        var e = b.D,
          f = (0, g.mZ)([120, 0]);
        e && g.uO(e, g.CXa);
        d.postBody = f;
      }
      a.G && (d.responseType = "arraybuffer");
      a.C = g
        .FB(c, d, 3, 100)
        .then(function (h) {
          a: {
            h = h.xhr;
            a.Ma();
            if (a.B) {
              var l = !(a.G ? h.response : h.responseText) || 400 <= h.status,
                m = g.uQa(h);
              if (m) {
                h = g.GPa(a.B, a.policy, {});
                a.B.Mk(h, m);
                zpb(a, a.B);
                break a;
              }
              l
                ? a.player.ma("capfail", { status: h.status })
                : (a.player.wi().Eh("fcb_r"),
                  (m = a.B.eb[0].Pa),
                  null != a.Z &&
                    a.K !== m &&
                    ((l = a.B.eb[0]),
                    a.G
                      ? a.Z(h.response, 1e3 * (l.startTime + a.player.Lc()))
                      : a.Z(
                          h.responseText,
                          1e3 * (l.startTime + a.player.Lc())
                        ),
                    (a.K = m)));
            }
            a.B = null;
            a.C = null;
          }
        })
        .rl(function (h) {
          a.B = null;
          a.C = null;
          var l;
          a.player.ma("capfail", {
            status: null == (l = h.xhr) ? void 0 : l.status,
          });
        });
      a.B = b;
      wpb(a.D, a.B.eb[0].Pa);
    },
    q4 = function (a, b) {
      g.tV.call(this, b.U());
      this.j = a;
      this.J = b;
      this.C = null;
      this.G = !1;
      this.K = g.gJ(this.J.U()) && !this.j.isManifestless;
    },
    Bpb = function (a, b) {
      var c = [],
        d;
      for (d in a.j.j)
        if (a.j.j.hasOwnProperty(d)) {
          var e = a.j.j[d];
          if (g.dYa(e, b || null)) {
            var f = e.info.id,
              h = f,
              l = "." + f,
              m = "",
              n = "",
              p = "";
            if ((e = e.info.captionTrack))
              (f = e.languageCode),
                (h = e.displayName),
                (l = e.vssId),
                (m = e.kind),
                a.J.U().L("html5_expose_xtags_through_caption_track") &&
                  (n = e.xtags),
                (p = e.id);
            else {
              e = f;
              var q = g.mnb.get(e);
              null == q &&
                ((q = Apb[e] || Apb[e.replace(/-/g, "_")]), g.mnb.set(e, q));
              h = q || h;
            }
            c.push(
              new g.mS({
                id: d,
                languageCode: f,
                languageName: h,
                is_servable: !0,
                is_default: !0,
                is_translateable: !1,
                vss_id: l,
                kind: m,
                xtags: n,
                captionId: p,
              })
            );
          }
        }
      return c;
    },
    Cpb = function (a, b) {
      return null != b && b in a.j.j ? a.j.j[b] : null;
    },
    Dpb = function (a, b, c) {
      var d = [],
        e;
      for (e in a.j.j)
        if (a.j.j.hasOwnProperty(e)) {
          var f = a.j.j[e];
          if (g.dYa(f, c || null)) {
            var h = f.info.captionTrack;
            h && h.languageCode === b && d.push(f);
          }
        }
      return d.length ? d[0] : null;
    },
    Epb = function () {
      var a = void 0;
      a = void 0 === a ? {} : a;
      var b =
        "suggest_correction" in g.Anb
          ? g.Anb.suggest_correction
          : "Edit caption";
      b = b || "";
      var c = {},
        d;
      for (d in a) {
        c = { vE: c.vE };
        c.vE = d;
        var e = (function (f) {
          return function () {
            return String(a[f.vE]);
          };
        })(c);
        b = b.replace(new RegExp("\\$\\{" + c.vE + "\\}", "gi"), e);
        b = b.replace(new RegExp("\\$" + c.vE, "gi"), e);
      }
      return b;
    },
    r4 = function (a, b, c, d, e, f, h, l, m, n) {
      var p = n.isInline() && !0,
        q = {};
      Object.assign(q, b);
      Object.assign(q, a.params);
      Object.assign(q, c);
      var r = {};
      Object.assign(r, b.Te);
      a.params.Te && Object.assign(r, a.params.Te);
      Object.assign(r, c.Te);
      p && ((q.windowOpacity = 0.6), (r.backgroundOpacity = 0));
      q.Te = r;
      var t = 1 === q.Ei,
        v = [
          {
            I: "span",
            S: "captions-text",
            X: { style: "word-wrap: normal; display: block;" },
          },
        ],
        w,
        A,
        C;
      (l =
        l.jb("caption_edit_on_hover") &&
        (null == (w = n.getVideoData().getPlayerResponse())
          ? void 0
          : null == (A = w.captions)
          ? void 0
          : null == (C = A.playerCaptionsTracklistRenderer)
          ? void 0
          : C.openTranscriptCommand)) &&
        v.unshift({
          I: "button",
          S: "caption-edit",
          X: { tabindex: "0", "aria-label": Epb() },
          V: [
            {
              I: "svg",
              X: {
                fill: "#e3e3e3",
                height: "100%",
                viewBox: "5 5 38 38",
                width: "100%",
              },
              V: [
                {
                  I: "path",
                  X: {
                    d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z",
                  },
                },
              ],
            },
          ],
        });
      g.W.call(this, {
        I: "div",
        S: "caption-window",
        X: {
          id: "caption-window-" + a.id,
          dir: t ? "rtl" : "ltr",
          tabindex: "0",
          lang: q.lang,
        },
        V: v,
      });
      var F = this;
      this.K = [];
      this.Da = !1;
      this.B = a;
      this.Na = this.La = null;
      this.playerWidth = f;
      this.playerHeight = h;
      this.N = null;
      this.maxWidth = 0.96 * f;
      this.maxHeight = 0.96 * h;
      this.j = q;
      this.Dc = c;
      this.ra = b;
      this.D = this.Fa("captions-text");
      this.Pb =
        "" !== this.D.style.getPropertyValue("box-decoration-break") ||
        "" !== this.D.style.getPropertyValue("-webkit-box-decoration-break");
      this.Va = Fpb(d, e, f, h);
      this.pc = m;
      l &&
        ((this.G = this.Fa("caption-edit")),
        this.T(this.G, "click", function () {
          F.pc();
        }));
      this.type = 0;
      this.Za = this.Va * Gpb(r);
      this.Gb = p;
      a = new g.QU(this.element, !0);
      g.O(this, a);
      a.subscribe("dragstart", this.o3, this);
      a.subscribe("dragmove", this.n3, this);
      a.subscribe("dragend", this.m3, this);
      this.fb = this.bb = this.zb = this.rb = 0;
      a = "";
      this.j.windowOpacity &&
        ((a = upb(this.j.windowColor)),
        (a =
          "rgba(" +
          a[0] +
          "," +
          a[1] +
          "," +
          a[2] +
          "," +
          this.j.windowOpacity +
          ")"));
      b = {
        "background-color": a,
        display: !1 === this.j.isVisible ? "none" : "",
        "text-align": Hpb[this.j.textAlign],
      };
      this.Pb && (b["border-radius"] = a ? this.Za / 8 + "px" : "");
      (this.C = 2 === this.B.params.Ei || 3 === this.B.params.Ei) &&
        Ipb(this, this.element);
      g.zs(this.element, b);
      if (p) {
        var G;
        null == (G = this.element.parentElement) ||
          G.style.setProperty("--caption-window-color", a);
      }
      switch (this.j.Ul) {
        case 0:
        case 1:
        case 2:
          g.uv(this.element, "ytp-caption-window-top");
          break;
        case 6:
        case 7:
        case 8:
          g.uv(this.element, "ytp-caption-window-bottom");
      }
    },
    Ipb = function (a, b) {
      var c = "vertical-rl";
      1 === a.j.zS && (c = "vertical-lr");
      g.Bs && (c = "vertical-lr" === c ? "tb-lr" : "tb-rl");
      g.zs(b, "-o-writing-mode", c);
      g.zs(b, "-webkit-writing-mode", c);
      g.zs(b, "writing-mode", c);
      g.zs(b, "text-orientation", "upright");
      g.uv(b, "ytp-vertical-caption");
      3 === a.B.params.Ei &&
        (g.zs(b, "text-orientation", ""),
        g.zs(b, "transform", "rotate(180deg)"));
    },
    Gpb = function (a) {
      var b = 1 + 0.25 * (a.fontSizeIncrement || 0);
      if (0 === a.offset || 2 === a.offset) b *= 0.8;
      return b;
    },
    Jpb = function (a, b) {
      var c = {},
        d = b.background ? b.background : a.j.Te.background;
      if (null != b.backgroundOpacity || b.background) {
        var e =
          null != b.backgroundOpacity
            ? b.backgroundOpacity
            : a.j.Te.backgroundOpacity;
        d = upb(d);
        c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
        a.Pb &&
          ((c["box-decoration-break"] = "clone"),
          (c["border-radius"] = a.Za / 8 + "px"));
      }
      if (null != b.fontSizeIncrement || null != b.offset)
        c["font-size"] = a.Va * Gpb(b) + "px";
      d = 1;
      e = b.color || a.j.Te.color;
      if (b.color || null != b.textOpacity)
        (e = upb(e)),
          (d = null == b.textOpacity ? a.j.Te.textOpacity : b.textOpacity),
          (e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")"),
          (c.color = e),
          (c.fill = e);
      var f = b.charEdgeStyle;
      0 === f && (f = void 0);
      if (f) {
        e = "rgba(34, 34, 34, " + d + ")";
        var h = "rgba(204, 204, 204, " + d + ")";
        b.nN && (h = e = b.nN);
        var l = a.Va / 16 / 2,
          m = Math.max(l, 1),
          n = Math.max(2 * l, 1),
          p = Math.max(3 * l, 1),
          q = Math.max(5 * l, 1);
        d = [];
        switch (f) {
          case 4:
            for (; p <= q; p += l)
              d.push(n + "px " + n + "px " + p + "px " + e);
            break;
          case 1:
            n = 2 <= window.devicePixelRatio ? 0.5 : 1;
            for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
            break;
          case 2:
            d.push(m + "px " + m + "px " + h);
            d.push("-" + m + "px -" + m + "px " + e);
            break;
          case 3:
            for (p = 0; 5 > p; p++) d.push("0 0 " + n + "px " + e);
        }
        c["text-shadow"] = d.join(", ");
      }
      e = "";
      switch (b.fontFamily) {
        case 1:
          e =
            '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
          break;
        case 2:
          e =
            '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
          break;
        case 3:
          e =
            '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
          break;
        case 5:
          e = '"Comic Sans MS", Impact, Handlee, fantasy';
          break;
        case 6:
          e =
            '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
          break;
        case 7:
          e = g.PB()
            ? '"Carrois Gothic SC", sans-serif-smallcaps'
            : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
          break;
        case 0:
        case 4:
          e =
            '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';
      }
      e && (c["font-family"] = e);
      e = b.offset;
      null == e && (e = a.j.Te.offset);
      switch (e) {
        case 0:
          c["vertical-align"] = "sub";
          break;
        case 2:
          c["vertical-align"] = "super";
      }
      7 === b.fontFamily && (c["font-variant"] = "small-caps");
      b.bold && (c["font-weight"] = "bold");
      b.italic && (c["font-style"] = "italic");
      b.underline && (c["text-decoration"] = "underline");
      b.A8 && (c.visibility = "hidden");
      1 === b.ZX &&
        a.C &&
        ((c["text-combine-upright"] = "all"),
        (c["text-orientation"] = "mixed"),
        (e = g.bS || g.VC),
        3 === a.B.params.Ei
          ? (c.transform = e ? "rotate(90deg)" : "rotate(180deg)")
          : e && (c.transform = "rotate(-90deg)"));
      if (1 === b.xo || 2 === b.xo || 3 === b.xo || 4 === b.xo || 5 === b.xo)
        if (g.bS) c["font-weight"] = "bold";
        else
          switch (
            ((c["text-emphasis-style"] = "filled circle"),
            (c["text-emphasis-color"] = "currentcolor"),
            (c["webkit-text-emphasis"] = "filled circle"),
            b.xo)
          ) {
            case 4:
            case 3:
              c["text-emphasis-position"] = "under left";
              c["webkit-text-emphasis-position"] = "under left";
              break;
            case 5:
            case 2:
              (c["text-emphasis-position"] = "over right"),
                (c["webkit-text-emphasis-position"] = "over right");
          }
      return c;
    },
    s4 = function (a) {
      a = a.split("px");
      return 0 < a.length ? ((a = Number(a[0])) ? a : 0) : 0;
    },
    Kpb = function (a) {
      a.N = g.yf("SPAN");
      g.zs(a.N, { display: "block" });
      g.uv(a.N, "caption-visual-line");
      a.D.appendChild(a.N);
    },
    Lpb = function (a, b) {
      var c = g.yf("SPAN");
      g.zs(c, { display: "inline-block", "white-space": "pre-wrap" });
      g.zs(c, Jpb(a, b));
      c.classList.add("ytp-caption-segment");
      a.N.appendChild(c);
      c.previousElementSibling &&
        (g.zs(c.previousElementSibling, {
          "border-top-right-radius": "0",
          "border-bottom-right-radius": "0",
        }),
        g.zs(c, {
          "border-top-left-radius": "0",
          "border-bottom-left-radius": "0",
        }));
      return c;
    },
    Mpb = function (a, b, c) {
      a.Da = a.Da || !!c;
      var d = {};
      Object.assign(d, a.j.Te);
      Object.assign(d, c || b.j);
      Object.assign(d, a.Dc.Te);
      (c = !a.N) && Kpb(a);
      for (
        var e = a.La && a.Na && g.ld(d, a.Na) ? a.La : Lpb(a, d),
          f = "string" === typeof b.text,
          h = f ? b.text.split("\n") : [b.text],
          l = 0;
        l < h.length;
        l++
      ) {
        var m = 0 < l || !b.append,
          n = h[l];
        m && !c ? (Kpb(a), (e = Lpb(a, d))) : m && c && (c = !1);
        n &&
          (e.appendChild(f ? g.zf(n) : n),
          f ||
            "RUBY" !== n.tagName ||
            4 !== n.childElementCount ||
            g.bS ||
            !g.Cs(n.children[2], "text-emphasis") ||
            ((m = a.C ? "padding-right" : "padding-top"),
            g.Cs(n.children[2], "text-emphasis-position") &&
              (m = a.C ? "padding-left" : "padding-bottom"),
            g.Rc ? g.zs(e, m, "1em") : g.zs(e, m, "0.5em")));
      }
      a.Na = d;
      a.La = e;
      a.K.push(b);
    },
    Fpb = function (a, b, c, d) {
      var e = (b / 360) * 16;
      b >= a && ((a = 640), d > 1.3 * c && (a = 480), (e = (c / a) * 16));
      return e;
    },
    Opb = function () {
      this.C = this.time = this.mode = this.B = 0;
      this.D = new Npb(this);
      this.G = new Npb(this);
      this.j = [];
      this.clear();
    },
    Qpb = function (a, b, c) {
      if ((255 === a && 255 === b) || (!a && !b))
        return { hv: a, qs: b, result: 0 };
      a = Ppb[a];
      b = Ppb[b];
      if (a & 128) {
        var d;
        if ((d = !(b & 128))) (d = b), (d = c.me() && c.qs === d);
        if (d) return { hv: a, qs: b, result: 1 };
      } else if (b & 128 && 1 <= a && 31 >= a)
        return { hv: a, qs: b, result: 2 };
      return { hv: a, qs: b, result: 3 };
    },
    Spb = function (a, b, c, d) {
      (255 === b && 255 === c) || (!b && !c)
        ? (45 === ++a.C && a.reset(), a.D.B.clear(), a.G.B.clear())
        : ((a.C = 0), Rpb(a.D, b, c, d));
    },
    Tpb = function (a, b) {
      a.j.sort(function (e, f) {
        var h = e.time - f.time;
        return 0 === h ? e.order - f.order : h;
      });
      for (var c = g.u(a.j), d = c.next(); !d.done; d = c.next())
        (d = d.value),
          (a.time = d.time),
          0 === d.type
            ? Spb(a, d.VV, d.WV, b)
            : 1 === d.type && a.B & 496 && Rpb(a.G, d.VV, d.WV, b);
      a.j.length = 0;
    },
    t4 = function () {
      this.type = 0;
    },
    u4 = function () {
      this.state = this.qs = this.hv = 0;
    },
    Upb = function () {
      this.timestamp = this.j = 0;
    },
    v4 = function (a) {
      this.D = a;
      this.B = [];
      this.j = this.col = this.row = 0;
      this.style = new t4();
      for (a = this.C = 0; 15 >= a; a++) {
        this.B[a] = [];
        for (var b = 0; 32 >= b; b++) this.B[a][b] = new Upb();
      }
    },
    w4 = function (a, b) {
      if (3 === a.style.type) {
        for (
          var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1;
          15 >= m;
          ++m
        ) {
          for (var n = !1, p = d ? d : 1; 32 >= p; ++p) {
            var q = a.B[m][p];
            if (0 !== q.j) {
              0 === c && ((c = m), (d = p));
              n = String.fromCharCode(q.j);
              var r = q.timestamp;
              r < e && (e = r);
              q.timestamp = l;
              h && ((f += h), (h = ""));
              f += n;
              n = !0;
            }
            if ((0 === q.j || 32 === p) && n) {
              h = "\n";
              break;
            } else if (d && !n) break;
          }
          if (c && !n) break;
        }
        f && b.D(c, d, e, l, f);
      } else
        for (d = c = 0, f = e = a.D.time + 0, h = 1; 15 >= h; ++h)
          for (l = "", m = 1; 32 >= m; ++m)
            if (
              ((p = a.B[h][m]),
              (q = p.j),
              0 !== q &&
                (0 === c && ((c = h), (d = m)),
                (n = String.fromCharCode(q)),
                (r = p.timestamp),
                r <= e && (e = r),
                (l += n),
                p.reset()),
              32 === m || 0 === q)
            )
              l && b.D(c, d, e, f, l), (e = f), (l = ""), (d = c = 0);
    },
    Zpb = function (a, b) {
      switch (a) {
        case 0:
          return Vpb[(b & 127) - 32];
        case 1:
          return Wpb[b & 15];
        case 2:
          return Xpb[b & 31];
        case 3:
          return Ypb[b & 31];
      }
      return 0;
    },
    x4 = function (a) {
      return a.B[a.row][a.col];
    },
    y4 = function (a, b, c) {
      2 <= b && 1 < a.col && (--a.col, (x4(a).j = 0));
      var d = x4(a);
      d.timestamp = a.D.time + 0;
      d.j = Zpb(b, c);
      32 > a.col && a.col++;
    },
    $pb = function (a, b, c, d) {
      for (var e = 0; e < d; e++)
        for (var f = 0; 32 >= f; f++) {
          var h = a.B[b + e][f],
            l = a.B[c + e][f];
          h.j = l.j;
          h.timestamp = l.timestamp;
        }
    },
    z4 = function (a, b, c) {
      for (var d = 0; d < c; d++)
        for (var e = 0; 32 >= e; e++) a.B[b + d][e].reset();
    },
    aqb = function (a) {
      a.row = 0 < a.j ? a.j : 1;
      a.col = 1;
      z4(a, 0, 15);
    },
    bqb = function (a) {
      this.C = a;
      this.G = 0;
      this.style = new t4();
      this.K = new v4(this.C);
      this.N = new v4(this.C);
      this.text = new v4(this.C);
      this.B = this.K;
      this.D = this.N;
      this.j = this.B;
    },
    cqb = function (a, b, c) {
      var d = a.B,
        e = !1;
      switch (a.style.get()) {
        case 4:
        case 1:
        case 2:
          (4 === a.style.get() && 0 < d.j) ||
            (w4(d, c), aqb(a.B), aqb(a.D), (d.row = 15), (d.j = b), (e = !0));
      }
      a.style.set(3);
      a.j = d;
      a.j.style = a.style;
      a.C.mode = 1 << d.C;
      e
        ? (d.col = 1)
        : d.j !== b &&
          (d.j > b ? (w4(d, c), z4(d, d.row - d.j, b)) : d.row < b && (b = d.j),
          (d.j = b));
    },
    dqb = function (a) {
      a.style.set(1);
      a.j = a.D;
      a.j.j = 0;
      a.j.style = a.style;
      a.C.mode = 1 << a.j.C;
    },
    eqb = function (a) {
      a.style.set(4);
      a.j = a.text;
      a.j.style = a.style;
      a.C.mode = 1 << a.j.C;
    },
    Npb = function (a) {
      this.j = a;
      this.G = 0;
      this.C = new bqb(this.j);
      this.K = new bqb(this.j);
      this.B = new u4();
      this.D = this.C;
    },
    Rpb = function (a, b, c, d) {
      a.B.update();
      b = Qpb(b, c, a.B);
      switch (b.result) {
        case 0:
          return;
        case 1:
        case 2:
          return;
      }
      var e = b.hv;
      c = b.qs;
      if (32 <= e || !e)
        a.j.mode & a.j.B &&
          ((b = e),
          b & 128 && (b = 127),
          c & 128 && (c = 127),
          (a = a.D.j),
          b & 96 && y4(a, 0, b),
          c & 96 && y4(a, 0, c),
          0 !== b && 0 !== c && 3 === a.style.type && w4(a, d));
      else if (e & 16)
        a: if (
          !a.B.matches(e, c) &&
          ((b = a.B),
          (b.hv = e),
          (b.qs = c),
          (b.state = 2),
          (b = e & 8 ? a.K : a.C),
          (a.D = b),
          (a.j.mode =
            1 << ((a.G << 2) + (b.G << 1) + (4 === b.style.type ? 1 : 0))),
          (a.j.mode |
            (1 << ((a.G << 2) + (b.G << 1) + (4 !== b.style.type ? 1 : 0)))) &
            a.j.B)
        )
          if (c & 64) {
            d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][
              ((e & 7) << 1) | ((c >> 5) & 1)
            ];
            a = c & 16 ? 4 * ((c & 14) >> 1) : 0;
            c = b.j;
            switch (b.style.get()) {
              case 4:
                d = c.row;
                break;
              case 3:
                if (d !== c.row) {
                  if (d < c.j && ((d = c.j), d === c.row)) break;
                  var f = 1 + c.row - c.j,
                    h = 1 + d - c.j;
                  $pb(c, h, f, c.j);
                  b = f;
                  e = c.j;
                  h < f
                    ? ((f = h + e - f), 0 < f && ((b += f), (e -= f)))
                    : ((f = f + e - h), 0 < f && (e -= f));
                  z4(c, b, e);
                }
            }
            c.row = d;
            c.col = a + 1;
          } else
            switch (e & 7) {
              case 1:
                switch (c & 112) {
                  case 32:
                    y4(b.j, 0, 32);
                    break a;
                  case 48:
                    57 === c
                      ? ((d = b.j), (x4(d).j = 0), 32 > d.col && d.col++)
                      : y4(b.j, 1, c & 15);
                }
                break;
              case 2:
                c & 32 && y4(b.j, 2, c & 31);
                break;
              case 3:
                c & 32 && y4(b.j, 3, c & 31);
                break;
              case 4:
              case 5:
                if (32 <= c && 47 >= c)
                  switch (c) {
                    case 32:
                      dqb(b);
                      break;
                    case 33:
                      d = b.j;
                      1 < d.col && (--d.col, (x4(d).j = 0));
                      break;
                    case 36:
                      d = b.j;
                      b = x4(d);
                      for (a = 0; 15 >= a; a++)
                        for (c = 0; 32 >= c; c++)
                          if (d.B[a][c] === b) {
                            for (; 32 >= c; c++) d.B[a][c].reset();
                            break;
                          }
                      break;
                    case 37:
                      cqb(b, 2, d);
                      break;
                    case 38:
                      cqb(b, 3, d);
                      break;
                    case 39:
                      cqb(b, 4, d);
                      break;
                    case 40:
                      y4(b.j, 0, 32);
                      break;
                    case 41:
                      b.style.set(2);
                      b.j = b.B;
                      b.j.j = 0;
                      b.j.style = b.style;
                      b.C.mode = 1 << b.j.C;
                      break;
                    case 42:
                      d = b.text;
                      d.j = 15;
                      d.style.set(4);
                      aqb(d);
                      eqb(b);
                      break;
                    case 43:
                      eqb(b);
                      break;
                    case 44:
                      a = b.B;
                      switch (b.style.get()) {
                        case 1:
                        case 2:
                        case 3:
                          w4(a, d);
                      }
                      z4(a, 0, 15);
                      break;
                    case 45:
                      b: {
                        a = b.j;
                        switch (b.style.get()) {
                          default:
                          case 2:
                          case 1:
                            break b;
                          case 4:
                            if (15 > a.row) {
                              ++a.row;
                              a.col = 1;
                              break b;
                            }
                          case 3:
                        }
                        2 > a.j && ((a.j = 2), a.row < a.j && (a.row = a.j));
                        b = a.row - a.j + 1;
                        w4(a, d);
                        $pb(a, b, b + 1, a.j - 1);
                        z4(a, a.row, 1);
                      }
                      break;
                    case 46:
                      z4(b.D, 0, 15);
                      break;
                    case 47:
                      w4(b.B, d),
                        b.D.updateTime(b.C.time + 0),
                        (d = b.D),
                        (b.D = b.B),
                        (b.B = d),
                        dqb(b);
                  }
                break;
              case 7:
                switch (c) {
                  case 33:
                  case 34:
                  case 35:
                    (d = b.j), 32 < (d.col += c & 3) && (d.col = 32);
                }
            }
    },
    fqb = function () {},
    A4 = function (a, b, c, d, e, f, h) {
      f = void 0 === f ? !1 : f;
      h = void 0 === h ? null : h;
      g.DJ.call(this, a, a + b, { priority: c, namespace: "captions" });
      this.windowId = d;
      this.text = e;
      this.append = f;
      this.j = h;
    },
    hqb = function (a, b, c, d, e, f, h) {
      var l = f[0],
        m = h[l.getAttribute("p")];
      if (1 === m.Yf) {
        var n = f[1],
          p = f[2];
        f = f[3];
        l.getAttribute("t");
        n.getAttribute("t");
        p.getAttribute("t");
        f.getAttribute("t");
        l.getAttribute("p");
        n.getAttribute("p");
        f.getAttribute("p");
        h = h[p.getAttribute("p")];
        l = gqb(l.textContent, n.textContent, p.textContent, f.textContent, h);
        return new A4(a, b, e, c, l, d, m);
      }
      switch (m.Yf) {
        case 9:
        case 10:
          m.xo = 1;
          break;
        case 11:
          m.xo = 2;
          break;
        case 12:
          m.xo = 3;
          break;
        case 13:
          m.xo = 4;
          break;
        case 14:
          m.xo = 5;
      }
      return new A4(a, b, e, c, l.textContent || "", d, m);
    },
    gqb = function (a, b, c, d, e) {
      var f = g.PB(),
        h = f ? g.yf("DIV") : g.yf("RUBY"),
        l = g.yf("SPAN");
      l.textContent = a;
      h.appendChild(l);
      a = f ? g.yf("DIV") : g.yf("RP");
      a.textContent = b;
      h.appendChild(a);
      b = f ? g.yf("DIV") : g.yf("RT");
      b.textContent = c;
      h.appendChild(b);
      c = e.Yf;
      if (10 === c || 11 === c || 12 === c || 13 === c || 14 === c)
        if (
          (g.zs(b, "text-emphasis-style", "filled circle"),
          g.zs(b, "text-emphasis-color", "currentcolor"),
          g.zs(b, "webkit-text-emphasis", "filled circle"),
          11 === e.Yf || 13 === e.Yf)
        )
          g.zs(b, "webkit-text-emphasis-position", "under left"),
            g.zs(b, "text-emphasis-position", "under left");
      c = !0;
      if (4 === e.Yf || 7 === e.Yf || 12 === e.Yf || 14 === e.Yf)
        g.zs(h, "ruby-position", "over"),
          g.zs(h, "-webkit-ruby-position", "before");
      else if (5 === e.Yf || 6 === e.Yf || 11 === e.Yf || 13 === e.Yf)
        g.zs(h, "ruby-position", "under"),
          g.zs(h, "-webkit-ruby-position", "after"),
          (c = !1);
      e = f ? g.yf("DIV") : g.yf("RP");
      e.textContent = d;
      h.appendChild(e);
      f &&
        ((d = c),
        g.zs(h, { display: "inline-block", position: "relative" }),
        (f = h.firstElementChild.nextElementSibling),
        g.zs(f, "display", "none"),
        (f = f.nextElementSibling),
        g.zs(f, {
          "font-size": "0.5em",
          "line-height": "1.2em",
          "text-align": "center",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400%",
        }),
        g.zs(h.lastElementChild, "display", "none"),
        d
          ? (g.zs(h, "padding-top", "0.6em"), g.zs(f, "top", "0"))
          : (g.zs(h, "padding-bottom", "0.6em"), g.zs(f, "bottom", "0")));
      return h;
    },
    B4 = function () {
      g.I.apply(this, arguments);
    },
    C4 = function (a, b, c, d, e) {
      g.DJ.call(this, a, a + b, { priority: c, namespace: "captions" });
      this.id = d;
      this.params = e;
      this.j = [];
    },
    iqb = function (a) {
      var b = "_" + D4++;
      return new C4(0, 0x8000000000000, 0, b, a);
    },
    E4 = function (a) {
      B4.call(this);
      this.C = a;
      this.pens = {};
      this.N = {};
      this.Z = {};
      this.D = "_" + D4++;
      this.K = {};
      this.B = this.j = null;
      this.G = !0;
    },
    F4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return Number(a);
    },
    G4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return "1" === a;
    },
    H4 = function (a, b) {
      a = F4(a, b);
      return void 0 !== a ? a : null;
    },
    J4 = function (a, b) {
      a = a.getAttribute(b);
      if (null != a) return I4.test(a), a;
    },
    jqb = function (a, b) {
      var c = {},
        d = b.getAttribute("ws");
      Object.assign(c, d ? a.Z[d] : a.C);
      a = H4(b, "mh");
      null != a && (c.wA = a);
      a = H4(b, "ju");
      null != a && (c.textAlign = a);
      a = H4(b, "pd");
      null != a && (c.Ei = a);
      a = H4(b, "sd");
      null != a && (c.zS = a);
      a = J4(b, "wfc");
      null != a && (c.windowColor = a);
      b = F4(b, "wfo");
      void 0 !== b && (c.windowOpacity = b / 255);
      return c;
    },
    kqb = function (a, b) {
      var c = {},
        d = b.getAttribute("wp");
      d && Object.assign(c, a.N[d]);
      a = H4(b, "ap");
      null != a && (c.Ul = a);
      a = F4(b, "cc");
      null != a && (c.zs = a);
      a = F4(b, "ah");
      null != a && (c.Wj = a);
      a = F4(b, "rc");
      null != a && (c.Cr = a);
      b = F4(b, "av");
      null != b && (c.zo = b);
      return c;
    },
    lqb = function (a, b, c, d) {
      var e = {};
      Object.assign(e, kqb(a, b));
      Object.assign(e, jqb(a, b));
      d
        ? g.ld(e, a.C)
          ? ((d = a.D), (e = a.C))
          : (d = "_" + D4++)
        : (d = b.getAttribute("id") || "_" + D4++);
      a = F4(b, "t") + c;
      b = F4(b, "d") || 0x8000000000000;
      if (2 === e.Ei || 3 === e.Ei) (c = e.Cr), (e.Cr = e.zs), (e.zs = c);
      return new C4(a, b, 0, d, e);
    },
    K4 = function (a) {
      B4.call(this);
      this.G = a;
      this.j = new Map();
      this.C = new Map();
      this.D = new Map();
      this.B = new Map();
    },
    L4 = function (a) {
      a = g.ye(Math.round(a), 0, 16777215).toString(16).toUpperCase();
      return "#000000".substr(0, 7 - a.length) + a;
    },
    mqb = function (a, b, c, d, e) {
      0 === d && (d = 0x8000000000000);
      var f = {};
      b.wpWinPosId && Object.assign(f, a.C.get(b.wpWinPosId));
      b.wsWinStyleId && Object.assign(f, a.D.get(b.wsWinStyleId));
      a = b.rcRowCount;
      void 0 !== a && (f.Cr = a);
      b = b.ccColCount;
      void 0 !== b && (f.zs = b);
      if (2 === f.Ei || 3 === f.Ei) (b = f.Cr), (f.Cr = f.zs), (f.zs = b);
      return new C4(c, d, 0, e, f);
    },
    M4 = function (a, b, c, d) {
      g.tV.call(this, a);
      this.videoData = b;
      this.audioTrack = c;
      this.Ua = d;
      this.D = b.Lu;
    },
    N4 = function (a, b, c, d, e, f, h, l, m, n) {
      r4.call(this, a, b, c, d, e, f, h, l, m, n);
      this.type = 1;
    },
    O4 = function (a, b, c) {
      this.trackData = a;
      this.K = c;
      this.version = this.G = this.C = this.byteOffset = 0;
      this.j = new DataView(this.trackData);
      this.B = [];
    },
    P4 = function (a) {
      var b = a.byteOffset;
      a.byteOffset += 1;
      return a.j.getUint8(b);
    },
    Q4 = function (a) {
      var b = a.byteOffset;
      a.byteOffset += 4;
      return a.j.getUint32(b);
    },
    R4 = function (a, b) {
      B4.call(this);
      this.B = a;
      this.C = b;
      this.track = "CC3" === this.C.languageName ? 4 : 0;
      this.j = new Opb();
      this.j.B = 1 << this.track;
    },
    oqb = function (a) {
      if ("string" === typeof a) return !1;
      a = new O4(a, 8, 0);
      return nqb(a);
    },
    nqb = function (a) {
      if (!(a.byteOffset < a.j.byteLength) || 1380139777 !== Q4(a)) return !1;
      a.version = P4(a);
      if (1 < a.version) return !1;
      P4(a);
      P4(a);
      P4(a);
      return !0;
    },
    S4 = function (a, b, c, d, e, f, h, l, m, n) {
      r4.call(this, a, b, c, d, e, f, h, l, m, n);
      var p = this;
      this.type = 2;
      this.Ba = [];
      this.qa = this.Y = this.Ra = 0;
      this.Ga = NaN;
      this.Jb = 0;
      this.Xb = null;
      this.Wa = new g.lv(this.Eaa, 433, this);
      this.G &&
        (n.createClientVe(this.G, this, 167342),
        this.T(this.G, "click", function () {
          n.logClick(p.G);
        }),
        (a = new g.QU(this.element, !0)),
        g.O(this, a),
        a.subscribe(
          "hoverstart",
          function () {
            n.logVisibility(p.G, !0);
          },
          this
        ));
      g.uv(this.element, "ytp-caption-window-rollup");
      g.O(this, this.Wa);
      g.zs(this.element, "overflow", "hidden");
    },
    pqb = function (a, b) {
      if (!b) return "";
      a.C && 1 !== a.B.params.zS && (b *= -1);
      return "translate" + (a.C ? "X" : "Y") + "(" + b + "px)";
    },
    qqb = function (a) {
      a.Ba = Array.from(document.getElementsByClassName("caption-visual-line"));
      for (
        var b = a.B.params.Cr, c = 0, d = 0, e = a.Ba.length - 1;
        c < b && -1 < e;

      ) {
        var f = a.Ba[e];
        d += a.C ? f.offsetWidth : f.offsetHeight;
        c++;
        e--;
      }
      a.Y = d;
      b = Math;
      c = b.max;
      isNaN(a.Ga) &&
        ((d = a.j.zs)
          ? ((e = g.yf("SPAN")),
            g.Of(e, "\u2013".repeat(d)),
            g.zs(e, Jpb(a, a.j.Te)),
            a.D.appendChild(e),
            (a.Ga = e.offsetWidth),
            a.D.removeChild(e))
          : (a.Ga = 0));
      d = a.D;
      a.qa = c.call(b, a.Ga, a.Jb, (a.C ? d.offsetHeight : d.offsetWidth) + 1);
    },
    rqb = function (a, b) {
      qqb(a);
      var c = a.Ba.reduce(function (f, h) {
        return (a.C ? h.offsetWidth : h.offsetHeight) + f;
      }, 0);
      c = a.Y - c;
      if (c !== a.Ra) {
        var d = 0 < c && 0 === a.Ra,
          e = c < a.Ra;
        b ||
          isNaN(c) ||
          d ||
          !e ||
          (g.uv(a.element, "ytp-rollup-mode"), g.mv(a.Wa));
        g.zs(a.D, "transform", pqb(a, c));
        a.Ra = c;
      }
      qqb(a);
    },
    T4 = function () {
      B4.call(this);
    },
    sqb = function (a, b, c, d, e, f, h, l, m) {
      switch (h.tagName) {
        case "b":
          l.bold = !0;
          break;
        case "i":
          l.italic = !0;
          break;
        case "u":
          l.underline = !0;
      }
      for (var n = 0; n < h.childNodes.length; n++) {
        var p = h.childNodes[n];
        if (3 === p.nodeType)
          (p = new A4(
            b,
            c,
            d,
            e.id,
            p.nodeValue,
            f || 0 < n,
            g.id(l) ? void 0 : l
          )),
            m.push(p),
            e.j.push(p);
        else {
          var q = {};
          Object.assign(q, l);
          sqb(a, b, c, d, e, !0, p, q, m);
        }
      }
    },
    tqb = function (a) {
      var b = a.split(":");
      a = 0;
      b = g.u(b);
      for (var c = b.next(); !c.done; c = b.next())
        a = 60 * a + Number(c.value);
      return 1e3 * a;
    },
    uqb = function (a, b, c, d) {
      d = Object.assign({ wA: 0 }, d);
      return new C4(a, b, c, "_" + D4++, d);
    },
    U4 = function (a, b) {
      g.I.call(this);
      this.J = a;
      this.W = b;
      this.j = null;
      this.B = this.J.zz();
    },
    vqb = function (a) {
      if ("string" === typeof a || oqb(a)) return a;
      var b = new DataView(a);
      if (8 >= b.byteLength || 1718909296 !== b.getUint32(4)) return "";
      b = g.RP(b, 0, 1835295092);
      if (!b || !b.size) return "";
      a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
      return g.$N(a);
    },
    xqb = function (a, b, c) {
      if ("string" === typeof b || oqb(b)) return [{ trackData: b, tS: c }];
      var d = new DataView(b);
      if (8 >= d.byteLength || 1718909296 !== d.getUint32(4)) return [];
      var e = g.cPa(d);
      if (a.B && e) {
        var f = g.UOa(e),
          h = g.VOa(e);
        e = e.bl;
        f && e && a.B.DG(e, f, h);
      }
      a = g.YP(d, 1835295092);
      if (!a || !a.length || !a[0].size) return [];
      f = [];
      for (h = 0; h < a.length; h++)
        (e = a[h]),
          (e = new Uint8Array(
            b,
            e.dataOffset,
            e.size - (e.dataOffset - e.offset)
          )),
          (e = g.$N(e)),
          f.push({ trackData: e, tS: c + 1e3 * h });
      wqb(d, f, c);
      return (f = f.filter(function (l) {
        return !!l.trackData;
      }));
    },
    wqb = function (a, b, c) {
      var d = g.RP(a, 0, 1836476516),
        e = 9e4;
      d && (e = g.SP(d) || 9e4);
      d = 0;
      for (var f = g.YP(a, 1836019558), h = 0; h < f.length; h++) {
        var l = f[h];
        h < b.length &&
          (l = g.RP(a, l.dataOffset, 1953653094)) &&
          (l = g.RP(a, l.dataOffset, 1952867444)) &&
          ((l = (g.$Oa(l) / e) * 1e3),
          0 === h && (d = l),
          (b[h].tS = l - d + c || c * h * 1e3));
      }
    },
    yqb = function (a, b, c, d, e) {
      if (!oqb(c)) throw Error("Invalid binary caption track data");
      a.j || (a.j = new R4(e, b));
      return a.j.Wn(c, d);
    },
    zqb = function (a, b, c) {
      a.j || (a.j = new T4());
      a = a.j.Wn(b, c);
      0.01 > Math.random() &&
        g.eF(Error("Deprecated subtitles format in web player: WebVTT"));
      return a;
    },
    Bqb = function (a, b, c, d) {
      if ("{" === c[0])
        try {
          return a.j || (a.j = new K4(Aqb(b))), a.j.Wn(c, d);
        } catch (f) {
          return g.dF(f), [];
        }
      var e = g.f2(c);
      if (!e || !e.firstChild)
        throw ((a = Error("Invalid caption track data")), (a.params = c), a);
      if ("timedtext" === e.firstChild.tagName) {
        if (3 === Number(e.firstChild.getAttribute("format")))
          return a.j || (a.j = new E4(Aqb(b), a.W)), a.j.Wn(e, d);
        a = Error("Unsupported subtitles format in web player (Format2)");
        a.params = c;
        throw a;
      }
      if ("transcript" === e.firstChild.tagName)
        throw (
          ((a = Error("Unsupported subtitles format in web player (Format1)")),
          (a.params = c),
          a)
        );
      a = Error("Invalid caption track data");
      a.params = c;
      throw a;
    },
    Aqb = function (a) {
      var b = {};
      if ((a = g.pS(a))) (b.lang = a), g.zjb.test(a) && (b.Ei = 1);
      return b;
    },
    V4 = function (a) {
      g.qV.call(this, a);
      var b = this;
      this.J = a;
      this.W = this.J.U();
      this.videoData = this.J.getVideoData();
      this.zb = this.J.kb();
      var c;
      this.fb = null == (c = this.J.getVideoData(1)) ? void 0 : g.BT(c);
      this.C = { Te: {} };
      this.G = { Te: {} };
      this.Da = [];
      this.ra = {};
      this.Va = {};
      this.Y = !1;
      this.Pb = g.CT(this.videoData);
      this.bb = g.eYa(this.videoData, this.J);
      this.Jb = !!this.videoData.captionTracks.length;
      this.Xb = !!this.videoData.Td;
      this.Wa = "3" === this.W.controlsType;
      this.j = this.N = this.Z = this.Ra = this.rb = null;
      this.Za = new U4(this.J, this.W);
      this.B = null;
      this.Ba = new g.vK(this);
      this.K = new g.W({
        I: "div",
        S: "ytp-caption-window-container",
        X: { id: "ytp-caption-window-container" },
      });
      this.qa = { top: 0, right: 0, bottom: 0, left: 0, width: 1, height: 1 };
      c = null;
      var d = g.Xv("yt-html5-player-modules::subtitlesModuleData");
      d && (c = new g.Ov(d));
      this.storage = c;
      var e;
      this.Hb = !(null == (e = a.Ve()) || !e.vG());
      this.D = Cqb(this);
      this.Ga = !this.D && this.Wa && this.Hb && this.bb;
      g.O(this, this.Za);
      this.D
        ? (this.Na = this.La = null)
        : ((this.La = new g.jv(this.NS, void 0, this)),
          g.O(this, this.La),
          (this.Na = new g.lv(this.lca, 2e3, this)),
          g.O(this, this.Na));
      g.O(this, this.Ba);
      g.cU(this.player, this.K.element, 4);
      g.O(this, this.K);
      this.D || this.Ba.T(a, "resize", this.OS);
      (this.Gb =
        g.MR(this.W) &&
        !g.eC() &&
        !this.J.isFullscreen() &&
        !this.D &&
        !this.Ga) && this.Ba.T(a, "resize", this.K$);
      this.Ba.T(a, "onPlaybackAudioChange", this.Z9);
      this.Ba.T(a, g.EJ("captions"), function (f) {
        b.onCueRangeEnter(f);
      });
      this.Ba.T(a, g.FJ("captions"), function (f) {
        b.onCueRangeExit(f);
      });
      this.fb &&
        this.Ba.T(a, "videodatachange", function (f, h) {
          b.onVideoDataChange(f, h);
        });
      Dqb(this, vpb() || {});
      this.player.wc("onCaptionsModuleAvailable");
    },
    Gqb = function (a) {
      if (
        1 === a.W.Hb ||
        1 === a.videoData.KG ||
        "alwayson" === g.iT(a.videoData, "yt:cc")
      )
        return !0;
      if (a.videoData.captionTracks.length) var b = a.getAudioTrack().B;
      if (2 === a.W.Hb) {
        if (g.ZR(a.W)) var c = Eqb(a);
        else if (a.storage)
          try {
            c = a.storage.get("module-enabled");
          } catch (e) {
            a.storage.remove("module-enabled");
          }
        else c = null;
        if (null != c) return !!c;
      }
      c = opb(a.player.getAudioTrack(), g.ZR(a.W));
      var d = g.iT(a.videoData, "yt:cc");
      if (void 0 === Fqb(a)) {
        if ("CAPTIONS_INITIAL_STATE_ON_RECOMMENDED" === c)
          return d ? "on" === d : !0;
        if ("CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED" === c) return "on" === d;
      } else return "on" === d;
      return "ON" === b || "on" === g.iT(a.videoData, "yt:cc");
    },
    W4 = function (a, b) {
      if ((a.B && (void 0 === b || !b)) || !a.videoData.captionTracks.length)
        return !1;
      a = a.getAudioTrack();
      return !!a.j || "FORCED_ON" === a.B;
    },
    Fqb = function (a) {
      var b = void 0,
        c = g.yC(g.xC(), 65);
      if (g.ZR(a.W) && null != c) {
        if (null != Eqb(a)) return !1;
        b = !c;
      }
      return b;
    },
    Hqb = function (a) {
      var b;
      a.Pb
        ? (b = new M4(a.W, a.videoData, a.getAudioTrack(), a.player))
        : a.bb
        ? (b = new q4(a.videoData.j, a.player))
        : a.Jb
        ? (b = new g.uV(a.W, a.videoData, a.getAudioTrack()))
        : (b = new g.yV(
            a.W,
            a.videoData.Td,
            a.videoData.videoId,
            g.LUa(a.videoData),
            a.videoData.Om,
            a.videoData.eventId
          ));
      return b;
    },
    Y4 = function (a, b) {
      if (a.j) {
        if (a.N && a.N.D) return a.N.D;
        g.uT(a.videoData) && (b = !0);
        b || (b = a.Xb ? !1 : a.Jb ? !1 : !0);
        b = b || Iqb(a);
        b = g.rV(a.j.B, b);
        var c = null;
        if (g.ZR(a.W)) {
          var d = a.J.isInline()
            ? void 0
            : g.tC("yt-player-caption-sticky-language");
          for (
            var e = [
                d,
                a.videoData.captionsLanguagePreference,
                a.W.captionsLanguagePreference,
                g.iT(a.videoData, "yt:cc_default_lang"),
              ],
              f = !1,
              h = 0;
            h < e.length;
            h++
          ) {
            var l = e[h];
            if (l) {
              f = !0;
              for (var m = 0; m < b.length; m++)
                if (g.pS(b[m]) === l) return b[m];
              for (m = 0; m < b.length; m++)
                if (g.pS(b[m]).split("-")[0] === l.split("-")[0]) return b[m];
            }
          }
          if (f && a.j && ((e = a.j.D), e.length))
            for (e = g.u(e), f = e.next(); !f.done; f = e.next())
              if (((f = f.value), f.languageCode === d)) {
                c = f;
                break;
              }
        } else
          for (
            d = [
              a.videoData.captionsLanguagePreference,
              a.W.captionsLanguagePreference,
              g.iT(a.videoData, "yt:cc_default_lang"),
            ],
              e = 0;
            e < d.length;
            e++
          )
            for (f = 0; f < b.length; f++) if (g.pS(b[f]) === d[e]) return b[f];
        d = null;
        a.N && a.N.C && (d = a.N.C);
        d ||
          (d =
            b.find(function (n) {
              return n.isDefault;
            }) || null);
        d || (d = b[0] || X4(a));
        d &&
          c &&
          g.pS(d).split("-")[0] !== c.languageCode.split("-")[0] &&
          (d = ppb(d, c));
        return d;
      }
      return null;
    },
    X4 = function (a) {
      return a.N && a.N.j;
    },
    Z4 = function (a) {
      var b = X4(a);
      return !!b && a.B === b;
    },
    Jqb = function (a) {
      var b = opb(a.player.getAudioTrack(), g.ZR(a.W)),
        c;
      "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === b
        ? (c = Y4(a, a.Y))
        : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === b && W4(a)
        ? (c = X4(a))
        : Fqb(a) || a.Y || Gqb(a)
        ? (c = Y4(a, a.Y))
        : W4(a) && (c = X4(a));
      if (a.D || a.Ga) {
        var d = g.rV(a.j.B, !0);
        b = [];
        for (var e = 0; e < d.length; e++) {
          var f = d[e],
            h = g.yf("TRACK");
          h.setAttribute("kind", "subtitles");
          h.setAttribute("label", g.nS(f));
          h.setAttribute("srclang", g.pS(f));
          h.setAttribute("id", f.toString());
          a.Ga || h.setAttribute("src", a.j.Rv(f, "vtt"));
          f === c && h.setAttribute("default", "1");
          b.push(h);
        }
        c = a.J.Ve();
        c.OC(b);
        c = c.Ib();
        a.Hb && a.Ba.T(c.textTracks, "change", a.pba);
      } else
        !a.B && c && $4(a, c),
          a.player.wc("onCaptionsTrackListChanged"),
          a.player.Cm("onApiChange");
    },
    Kqb = function (a, b) {
      var c = a.J.Ve().Ib().textTracks;
      a = a.B.toString();
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        e.id === a &&
          (b
            ? "showing" !== e.mode && (e.mode = "showing")
            : "showing" === e.mode && (e.mode = "disabled"));
      }
    },
    $4 = function (a, b, c) {
      a.loaded && a.unload();
      null != c && ((a.Y = c), a.Y && (g.ZR(a.W) ? a5(a, !!b) : b5(a, !!b)));
      a.B = b;
      W4(a) && (a.B = X4(a));
      var d;
      Lqb(a, null != (d = a.B) ? d : void 0);
      a.load();
    },
    Nqb = function (a, b) {
      if (b instanceof C4) {
        var c = a.ra[b.id];
        c && c.B !== b && (c.dispose(), delete a.ra[b.id], (c = null));
        c || ((c = Mqb(a, b)) && (a.ra[b.id] = c));
      } else (c = b.windowId), a.Va[c] || (a.Va[c] = []), a.Va[c].push(b);
    },
    Mqb = function (a, b) {
      var c = Oqb(a);
      if (!c) return null;
      var d = a.B ? g.pS(a.B) : null;
      d && g.zjb.test(d) && (b.params.Ei = 1);
      var e = a.zb.getPlayerSize();
      d = e.height * a.qa.height;
      e = e.width * a.qa.width;
      "google-live" !== a.W.playerStyle ||
        a.C.isDefault ||
        Object.assign(b.params, a.C);
      switch (null != b.params.wA ? b.params.wA : 1 < b.j.length ? 1 : 0) {
        case 1:
          return new N4(
            b,
            a.C,
            a.G,
            c.width,
            c.height,
            e,
            d,
            a.W.experiments,
            a.SL.bind(a),
            a.J
          );
        case 2:
          return new S4(
            b,
            a.C,
            a.G,
            c.width,
            c.height,
            e,
            d,
            a.W.experiments,
            a.SL.bind(a),
            a.J
          );
        default:
          return new r4(
            b,
            a.C,
            a.G,
            c.width,
            c.height,
            e,
            d,
            a.W.experiments,
            a.SL.bind(a),
            a.J
          );
      }
    },
    Dqb = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      var d = c5.Te;
      a.C = {};
      Object.assign(a.C, c5);
      a.C.Te = {};
      Object.assign(a.C.Te, d);
      a.G = { Te: {} };
      var e = b.backgroundOverride ? a.G : a.C,
        f = b.background || d.background;
      I4.test(f);
      e.Te.background = f;
      e = b.colorOverride ? a.G : a.C;
      f = b.color || d.color;
      I4.test(f);
      e.Te.color = f;
      e = b.windowColorOverride ? a.G : a.C;
      f = b.windowColor || c5.windowColor;
      I4.test(f);
      e.windowColor = f;
      e = b.backgroundOpacityOverride ? a.G : a.C;
      f = b.backgroundOpacity;
      null == f && (f = d.backgroundOpacity);
      e.Te.backgroundOpacity = f;
      e = b.fontSizeIncrementOverride ? a.G : a.C;
      f = b.fontSizeIncrement;
      null == f && (f = d.fontSizeIncrement);
      e.Te.fontSizeIncrement = f;
      f = b.fontStyleOverride ? a.G : a.C;
      e = b.fontStyle;
      null == e && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
      f = f.Te;
      switch (e) {
        case 1:
          f.bold = !0;
          delete f.italic;
          break;
        case 2:
          delete f.bold;
          f.italic = !0;
          break;
        case 3:
          f.bold = !0;
          f.italic = !0;
          break;
        default:
          delete f.bold, delete f.italic;
      }
      e = b.textOpacityOverride ? a.G : a.C;
      f = b.textOpacity;
      null == f && (f = d.textOpacity);
      e.Te.textOpacity = f;
      e = b.windowOpacityOverride ? a.G : a.C;
      f = b.windowOpacity;
      null == f && (f = c5.windowOpacity);
      e.windowOpacity = f;
      e = b.charEdgeStyleOverride ? a.G : a.C;
      f = b.charEdgeStyle;
      null == f && (f = d.charEdgeStyle);
      e.Te.charEdgeStyle = f;
      e = b.fontFamilyOverride ? a.G : a.C;
      f = b.fontFamily;
      null == f && (f = d.fontFamily);
      e.Te.fontFamily = f;
      a.loaded && a.OS();
      c && g.sC("yt-player-caption-display-settings", b, 2592e3);
    },
    Qqb = function (a, b, c) {
      b && !a.Z
        ? ((b = iqb({ Ei: 0, lang: "vi" })),
          (a.Z = [
            b,
            new A4(
              b.start,
              b.end - b.start,
              0,
              b.id,
              null != c
                ? c
                : "Ph\u1ee5 \u0111\u1ec1 tr\u00f4ng nh\u01b0 th\u1ebf n\u00e0y"
            ),
          ]),
          a.player.jf(a.Z))
        : !b && a.Z && (Pqb(a, a.Z), (a.Z = null));
    },
    Pqb = function (a, b) {
      a.player.qo(b);
      b = g.u(b);
      for (var c = b.next(); !c.done; c = b.next()) g.Hb(a.Da, c.value);
      g.kv(a.La);
    },
    Lqb = function (a, b) {
      a.W.L("html5_modify_caption_vss_logging") && (a.videoData.sC = b);
    },
    Oqb = function (a) {
      var b = a.zb.getVideoContentRect(!0).height,
        c = a.zb.getVideoContentRect(!0).width;
      if (!b || !c) return null;
      b *= a.qa.height;
      c *= a.qa.width;
      return { width: c, height: b };
    },
    b5 = function (a, b) {
      if (a.storage)
        try {
          a.storage.set("module-enabled", b);
        } catch (c) {}
    },
    a5 = function (a, b) {
      a.J.isInline() || g.sC("yt-player-sticky-caption", b, 2592e3);
    },
    Eqb = function (a) {
      if (!a.J.isInline()) return g.tC("yt-player-sticky-caption");
    },
    Cqb = function (a) {
      var b,
        c = !(null == (b = a.J.Ve()) || !b.uG());
      return a.Wa && c && !a.bb;
    },
    Iqb = function (a) {
      return a.W.L("web_deprecate_always_includes_asr_setting") && g.ZR(a.W)
        ? !0
        : !!g.yC(g.xC(), 66);
    };
  g.jY.prototype.FD = g.fa(44, function (a) {
    var b = 2;
    this.D.has(a) ? (b = 0) : g.j4a(this, a) && (b = 1);
    return b;
  });
  g.D_.prototype.FD = g.fa(43, function (a) {
    return this.Vc.FD(a);
  });
  g.jY.prototype.DG = g.fa(42, function (a, b, c) {
    this.Ra.set(a, { Fs: b, Fy: c });
  });
  g.D_.prototype.DG = g.fa(41, function (a, b, c) {
    this.Vc.DG(a, b, c);
  });
  g.tV.prototype.lR = g.fa(40, function () {
    return !1;
  });
  g.tV.prototype.Ht = g.fa(39, function () {});
  g.uV.prototype.Ht = g.fa(38, function (a, b, c) {
    var d = this;
    this.Ma();
    b = this.Rv(a, b);
    this.Rr();
    this.j = g.CB(b, {
      format: "RAW",
      onSuccess: function (e) {
        d.j = null;
        c(e.responseText, a);
      },
      withCredentials: !0,
    });
  });
  g.yV.prototype.Ht = g.fa(37, function (a, b, c) {
    var d = this;
    this.Ma();
    b = this.Rv(a, b);
    this.Rr();
    this.j = g.CB(b, {
      format: "RAW",
      onSuccess: function (e) {
        d.j = null;
        c(e.responseText, a);
      },
      withCredentials: !0,
    });
  });
  g.XU.prototype.Ty = g.fa(36, function () {
    for (
      var a = g.mf(document, "track", void 0, this.j), b = 0;
      b < a.length;
      b++
    )
      g.Ff(a[b]);
  });
  g.PX.prototype.Ty = g.fa(35, function () {
    this.mediaElement.Ty();
  });
  g.XU.prototype.vG = g.fa(34, function () {
    return !(!this.j.textTracks || !this.j.textTracks.addEventListener);
  });
  g.PX.prototype.vG = g.fa(33, function () {
    return this.mediaElement.vG();
  });
  g.XU.prototype.uG = g.fa(32, function () {
    return !!this.j.textTracks;
  });
  g.PX.prototype.uG = g.fa(31, function () {
    return this.mediaElement.uG();
  });
  g.XU.prototype.OC = g.fa(30, function (a) {
    for (var b = 0; b < a.length; b++) this.j.appendChild(a[b]);
  });
  g.PX.prototype.OC = g.fa(29, function (a) {
    this.mediaElement.OC(a);
  });
  g.x_.prototype.VD = g.fa(19, function () {
    return this.N;
  });
  g.K0.prototype.VD = g.fa(18, function () {
    var a;
    return (null == (a = g.PT(this)) ? void 0 : a.zz()) || null;
  });
  g.VT.prototype.zz = g.fa(17, function () {
    return this.app.VD();
  });
  g.z0.prototype.zz = g.fa(16, function () {
    var a;
    return (null == (a = this.ya) ? void 0 : a.VD()) || null;
  });
  g.GP.prototype.GI = g.fa(2, function (a) {
    return (a = this.un(a)) ? a.j : 0;
  });
  g.mQa.prototype.GI = g.fa(1, function () {
    return 0;
  });
  var tpb = /#(.)(.)(.)/,
    spb = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Apb = {
      aa: "Afar",
      ab: "Abkhazian",
      ace: "Achinese",
      ach: "Acoli",
      ada: "Adangme",
      ady: "Adyghe",
      ae: "Avestan",
      aeb: "Tunisian Arabic",
      af: "Afrikaans",
      afh: "Afrihili",
      agq: "Aghem",
      ain: "Ainu",
      ak: "Akan",
      akk: "Akkadian",
      akz: "Alabama",
      ale: "Aleut",
      aln: "Gheg Albanian",
      alt: "Southern Altai",
      am: "Amharic",
      an: "Aragonese",
      ang: "Old English",
      anp: "Angika",
      ar: "Arabic",
      ar_001: "Arabic (world)",
      arc: "Aramaic",
      arn: "Mapuche",
      aro: "Araona",
      arp: "Arapaho",
      arq: "Algerian Arabic",
      ars: "Najdi Arabic",
      arw: "Arawak",
      ary: "Moroccan Arabic",
      arz: "Egyptian Arabic",
      as: "Assamese",
      asa: "Asu",
      ase: "American Sign Language",
      ast: "Asturian",
      av: "Avaric",
      avk: "Kotava",
      awa: "Awadhi",
      ay: "Aymara",
      az: "Azerbaijani",
      az_Cyrl: "Azerbaijani (Cyrillic)",
      az_Latn: "Azerbaijani (Latin)",
      ba: "Bashkir",
      bal: "Baluchi",
      ban: "Balinese",
      bar: "Bavarian",
      bas: "Basaa",
      bax: "Bamun",
      bbc: "Batak Toba",
      bbj: "Ghomala",
      be: "Belarusian",
      bej: "Beja",
      bem: "Bemba",
      bew: "Betawi",
      bez: "Bena",
      bfd: "Bafut",
      bfq: "Badaga",
      bg: "Bulgarian",
      bgc: "Haryanvi",
      bgn: "Western Balochi",
      bho: "Bhojpuri",
      bi: "Bislama",
      bik: "Bikol",
      bin: "Bini",
      bjn: "Banjar",
      bkm: "Kom",
      bla: "Siksik\u00e1",
      blo: "Anii",
      bm: "Bambara",
      bn: "Bangla",
      bo: "Tibetan",
      bpy: "Bishnupriya",
      bqi: "Bakhtiari",
      br: "Breton",
      bra: "Braj",
      brh: "Brahui",
      brx: "Bodo",
      bs: "Bosnian",
      bs_Cyrl: "Bosnian (Cyrillic)",
      bs_Latn: "Bosnian (Latin)",
      bss: "Akoose",
      bua: "Buriat",
      bug: "Buginese",
      bum: "Bulu",
      byn: "Blin",
      byv: "Medumba",
      ca: "Catalan",
      cad: "Caddo",
      car: "Carib",
      cay: "Cayuga",
      cch: "Atsam",
      ccp: "Chakma",
      ce: "Chechen",
      ceb: "Cebuano",
      cgg: "Chiga",
      ch: "Chamorro",
      chb: "Chibcha",
      chg: "Chagatai",
      chk: "Chuukese",
      chm: "Mari",
      chn: "Chinook Jargon",
      cho: "Choctaw",
      chp: "Chipewyan",
      chr: "Cherokee",
      chy: "Cheyenne",
      ckb: "Central Kurdish",
      co: "Corsican",
      cop: "Coptic",
      cps: "Capiznon",
      cr: "Cree",
      crh: "Crimean Tatar",
      cs: "Czech",
      csb: "Kashubian",
      csw: "Swampy Cree",
      cu: "Church Slavic",
      cv: "Chuvash",
      cy: "Welsh",
      da: "Danish",
      dak: "Dakota",
      dar: "Dargwa",
      dav: "Taita",
      de: "German",
      de_AT: "German (Austria)",
      de_CH: "German (Switzerland)",
      del: "Delaware",
      den: "Slave",
      dgr: "Dogrib",
      din: "Dinka",
      dje: "Zarma",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dua: "Duala",
      dum: "Middle Dutch",
      dv: "Divehi",
      dyo: "Jola-Fonyi",
      dyu: "Dyula",
      dz: "Dzongkha",
      dzg: "Dazaga",
      ebu: "Embu",
      ee: "Ewe",
      efi: "Efik",
      egy: "Ancient Egyptian",
      eka: "Ekajuk",
      el: "Greek",
      elx: "Elamite",
      en: "English",
      en_AU: "English (Australia)",
      en_CA: "English (Canada)",
      en_GB: "English (United Kingdom)",
      en_US: "English (United States)",
      enm: "Middle English",
      eo: "Esperanto",
      es: "Spanish",
      es_419: "Spanish (Latin America)",
      es_ES: "Spanish (Spain)",
      es_MX: "Spanish (Mexico)",
      et: "Estonian",
      eu: "Basque",
      ewo: "Ewondo",
      fa: "Persian",
      fa_AF: "Persian (Afghanistan)",
      fan: "Fang",
      fat: "Fanti",
      ff: "Fula",
      ff_Adlm: "Fula (Adlam)",
      ff_Latn: "Fula (Latin)",
      fi: "Finnish",
      fil: "Filipino",
      fj: "Fijian",
      fo: "Faroese",
      fon: "Fon",
      fr: "French",
      fr_CA: "French (Canada)",
      fr_CH: "French (Switzerland)",
      frm: "Middle French",
      fro: "Old French",
      frr: "Northern Frisian",
      frs: "Eastern Frisian",
      fur: "Friulian",
      fy: "Western Frisian",
      ga: "Irish",
      gaa: "Ga",
      gay: "Gayo",
      gba: "Gbaya",
      gd: "Scottish Gaelic",
      gez: "Geez",
      gil: "Gilbertese",
      gl: "Galician",
      gmh: "Middle High German",
      gn: "Guarani",
      goh: "Old High German",
      gon: "Gondi",
      gor: "Gorontalo",
      got: "Gothic",
      grb: "Grebo",
      grc: "Ancient Greek",
      gsw: "Swiss German",
      gu: "Gujarati",
      guz: "Gusii",
      gv: "Manx",
      gwi: "Gwich\u02bcin",
      ha: "Hausa",
      hai: "Haida",
      haw: "Hawaiian",
      he: "Hebrew",
      hi: "Hindi",
      hi_Latn: "Hindi (Latin)",
      hil: "Hiligaynon",
      hit: "Hittite",
      hmn: "Hmong",
      ho: "Hiri Motu",
      hr: "Croatian",
      hsb: "Upper Sorbian",
      ht: "Haitian Creole",
      hu: "Hungarian",
      hup: "Hupa",
      hy: "Armenian",
      hz: "Herero",
      ia: "Interlingua",
      iba: "Iban",
      ibb: "Ibibio",
      id: "Indonesian",
      ie: "Interlingue",
      ig: "Igbo",
      ii: "Sichuan Yi",
      ik: "Inupiaq",
      ilo: "Iloko",
      in: "Indonesian",
      inh: "Ingush",
      io: "Ido",
      is: "Icelandic",
      it: "Italian",
      iu: "Inuktitut",
      iw: "Hebrew",
      ja: "Japanese",
      jbo: "Lojban",
      jgo: "Ngomba",
      jmc: "Machame",
      jpr: "Judeo-Persian",
      jrb: "Judeo-Arabic",
      jv: "Javanese",
      ka: "Georgian",
      kaa: "Kara-Kalpak",
      kab: "Kabyle",
      kac: "Kachin",
      kaj: "Jju",
      kam: "Kamba",
      kaw: "Kawi",
      kbd: "Kabardian",
      kbl: "Kanembu",
      kcg: "Tyap",
      kde: "Makonde",
      kea: "Kabuverdianu",
      kfo: "Koro",
      kg: "Kongo",
      kgp: "Kaingang",
      kha: "Khasi",
      kho: "Khotanese",
      khq: "Koyra Chiini",
      ki: "Kikuyu",
      kj: "Kuanyama",
      kk: "Kazakh",
      kkj: "Kako",
      kl: "Kalaallisut",
      kln: "Kalenjin",
      km: "Khmer",
      kmb: "Kimbundu",
      kn: "Kannada",
      ko: "Korean",
      kok: "Konkani",
      kos: "Kosraean",
      kpe: "Kpelle",
      kr: "Kanuri",
      krc: "Karachay-Balkar",
      krl: "Karelian",
      kru: "Kurukh",
      ks: "Kashmiri",
      ks_Arab: "Kashmiri (Arabic)",
      ks_Deva: "Kashmiri (Devanagari)",
      ksb: "Shambala",
      ksf: "Bafia",
      ksh: "Colognian",
      ku: "Kurdish",
      kum: "Kumyk",
      kut: "Kutenai",
      kv: "Komi",
      kw: "Cornish",
      kxv: "Kuvi",
      kxv_Deva: "Kuvi (Devanagari)",
      kxv_Latn: "Kuvi (Latin)",
      kxv_Orya: "Kuvi (Odia)",
      kxv_Telu: "Kuvi (Telugu)",
      ky: "Kyrgyz",
      la: "Latin",
      lad: "Ladino",
      lag: "Langi",
      lah: "Western Panjabi",
      lam: "Lamba",
      lb: "Luxembourgish",
      lez: "Lezghian",
      lg: "Ganda",
      li: "Limburgish",
      lij: "Ligurian",
      lkt: "Lakota",
      lmo: "Lombard",
      ln: "Lingala",
      lo: "Lao",
      lol: "Mongo",
      loz: "Lozi",
      lrc: "Northern Luri",
      lt: "Lithuanian",
      lu: "Luba-Katanga",
      lua: "Luba-Lulua",
      lui: "Luiseno",
      lun: "Lunda",
      luo: "Luo",
      lus: "Mizo",
      luy: "Luyia",
      lv: "Latvian",
      mad: "Madurese",
      maf: "Mafa",
      mag: "Magahi",
      mai: "Maithili",
      mak: "Makasar",
      man: "Mandingo",
      mas: "Masai",
      mde: "Maba",
      mdf: "Moksha",
      mdr: "Mandar",
      men: "Mende",
      mer: "Meru",
      mfe: "Morisyen",
      mg: "Malagasy",
      mga: "Middle Irish",
      mgh: "Makhuwa-Meetto",
      mgo: "Meta\u02bc",
      mh: "Marshallese",
      mi: "M\u0101ori",
      mic: "Mi'kmaw",
      min: "Minangkabau",
      mk: "Macedonian",
      ml: "Malayalam",
      mn: "Mongolian",
      mnc: "Manchu",
      mni: "Manipuri",
      mni_Beng: "Manipuri (Bangla)",
      mo: "Romanian",
      moh: "Mohawk",
      mos: "Mossi",
      mr: "Marathi",
      ms: "Malay",
      mt: "Maltese",
      mua: "Mundang",
      mul: "Multiple languages",
      mus: "Muscogee",
      mwl: "Mirandese",
      mwr: "Marwari",
      my: "Burmese",
      mye: "Myene",
      myv: "Erzya",
      mzn: "Mazanderani",
      na: "Nauru",
      nap: "Neapolitan",
      naq: "Nama",
      nb: "Norwegian Bokm\u00e5l",
      nd: "North Ndebele",
      nds: "Low German",
      nds_NL: "Low German (Netherlands)",
      ne: "Nepali",
      new: "Newari",
      ng: "Ndonga",
      nia: "Nias",
      niu: "Niuean",
      nl: "Dutch",
      nl_BE: "Dutch (Belgium)",
      nmg: "Kwasio",
      nn: "Norwegian Nynorsk",
      nnh: "Ngiemboon",
      no: "Norwegian",
      nog: "Nogai",
      non: "Old Norse",
      nqo: "N\u2019Ko",
      nr: "South Ndebele",
      nso: "Northern Sotho",
      nus: "Nuer",
      nv: "Navajo",
      nwc: "Classical Newari",
      ny: "Nyanja",
      nym: "Nyamwezi",
      nyn: "Nyankole",
      nyo: "Nyoro",
      nzi: "Nzima",
      oc: "Occitan",
      oj: "Ojibwa",
      om: "Oromo",
      or: "Odia",
      os: "Ossetic",
      osa: "Osage",
      ota: "Ottoman Turkish",
      pa: "Punjabi",
      pa_Arab: "Punjabi (Arabic)",
      pa_Guru: "Punjabi (Gurmukhi)",
      pag: "Pangasinan",
      pal: "Pahlavi",
      pam: "Pampanga",
      pap: "Papiamento",
      pau: "Palauan",
      pcm: "Nigerian Pidgin",
      peo: "Old Persian",
      phn: "Phoenician",
      pi: "Pali",
      pl: "Polish",
      pon: "Pohnpeian",
      prg: "Prussian",
      pro: "Old Proven\u00e7al",
      ps: "Pashto",
      pt: "Portuguese",
      pt_BR: "Portuguese (Brazil)",
      pt_PT: "Portuguese (Portugal)",
      qu: "Quechua",
      raj: "Rajasthani",
      rap: "Rapanui",
      rar: "Rarotongan",
      rm: "Romansh",
      rn: "Rundi",
      ro: "Romanian",
      ro_MD: "Romanian (Moldova)",
      rof: "Rombo",
      rom: "Romany",
      ru: "Russian",
      rup: "Aromanian",
      rw: "Kinyarwanda",
      rwk: "Rwa",
      sa: "Sanskrit",
      sad: "Sandawe",
      sah: "Yakut",
      sam: "Samaritan Aramaic",
      saq: "Samburu",
      sas: "Sasak",
      sat: "Santali",
      sat_Olck: "Santali (Ol Chiki)",
      sba: "Ngambay",
      sbp: "Sangu",
      sc: "Sardinian",
      scn: "Sicilian",
      sco: "Scots",
      sd: "Sindhi",
      sd_Arab: "Sindhi (Arabic)",
      sd_Deva: "Sindhi (Devanagari)",
      se: "Northern Sami",
      see: "Seneca",
      seh: "Sena",
      sel: "Selkup",
      ses: "Koyraboro Senni",
      sg: "Sango",
      sga: "Old Irish",
      sh: "Serbo-Croatian",
      shi: "Tachelhit",
      shi_Latn: "Tachelhit (Latin)",
      shi_Tfng: "Tachelhit (Tifinagh)",
      shn: "Shan",
      shu: "Chadian Arabic",
      si: "Sinhala",
      sid: "Sidamo",
      sk: "Slovak",
      sl: "Slovenian",
      sm: "Samoan",
      sma: "Southern Sami",
      smj: "Lule Sami",
      smn: "Inari Sami",
      sms: "Skolt Sami",
      sn: "Shona",
      snk: "Soninke",
      so: "Somali",
      sog: "Sogdien",
      sq: "Albanian",
      sr: "Serbian",
      sr_Cyrl: "Serbian (Cyrillic)",
      sr_Latn: "Serbian (Latin)",
      srn: "Sranan Tongo",
      srr: "Serer",
      ss: "Swati",
      ssy: "Saho",
      st: "Southern Sotho",
      su: "Sundanese",
      su_Latn: "Sundanese (Latin)",
      suk: "Sukuma",
      sus: "Susu",
      sux: "Sumerian",
      sv: "Swedish",
      sw: "Swahili",
      sw_CD: "Swahili (Congo - Kinshasa)",
      swb: "Comorian",
      syc: "Classical Syriac",
      syr: "Syriac",
      szl: "Silesian",
      ta: "Tamil",
      te: "Telugu",
      tem: "Timne",
      teo: "Teso",
      ter: "Tereno",
      tet: "Tetum",
      tg: "Tajik",
      th: "Thai",
      ti: "Tigrinya",
      tig: "Tigre",
      tiv: "Tiv",
      tk: "Turkmen",
      tkl: "Tokelau",
      tl: "Tagalog",
      tlh: "Klingon",
      tli: "Tlingit",
      tmh: "Tamashek",
      tn: "Tswana",
      to: "Tongan",
      tog: "Nyasa Tonga",
      tok: "Toki Pona",
      tpi: "Tok Pisin",
      tr: "Turkish",
      trv: "Taroko",
      ts: "Tsonga",
      tsi: "Tsimshian",
      tt: "Tatar",
      tum: "Tumbuka",
      tvl: "Tuvalu",
      tw: "Twi",
      twq: "Tasawaq",
      ty: "Tahitian",
      tyv: "Tuvinian",
      tzm: "Central Atlas Tamazight",
      udm: "Udmurt",
      ug: "Uyghur",
      uga: "Ugaritic",
      uk: "Ukrainian",
      umb: "Umbundu",
      ur: "Urdu",
      uz: "Uzbek",
      uz_Arab: "Uzbek (Arabic)",
      uz_Cyrl: "Uzbek (Cyrillic)",
      uz_Latn: "Uzbek (Latin)",
      vai: "Vai",
      vai_Latn: "Vai (Latin)",
      vai_Vaii: "Vai (Vai)",
      ve: "Venda",
      vec: "Venetian",
      vi: "Vietnamese",
      vmw: "Makhuwa",
      vo: "Volap\u00fck",
      vot: "Votic",
      vun: "Vunjo",
      wa: "Walloon",
      wae: "Walser",
      wal: "Wolaytta",
      war: "Waray",
      was: "Washo",
      wo: "Wolof",
      xal: "Kalmyk",
      xh: "Xhosa",
      xnr: "Kangri",
      xog: "Soga",
      yao: "Yao",
      yap: "Yapese",
      yav: "Yangben",
      ybb: "Yemba",
      yi: "Yiddish",
      yo: "Yoruba",
      yrl: "Nheengatu",
      yue: "Cantonese",
      yue_Hans: "Cantonese (Simplified)",
      yue_Hant: "Cantonese (Traditional)",
      za: "Zhuang",
      zap: "Zapotec",
      zbl: "Blissymbols",
      zen: "Zenaga",
      zgh: "Standard Moroccan Tamazight",
      zh: "Chinese",
      zh_Hans: "Chinese (Simplified)",
      zh_Hant: "Chinese (Traditional)",
      zh_TW: "Chinese (Taiwan)",
      zu: "Zulu",
      zun: "Zuni",
      zxx: "No linguistic content",
      zza: "Zaza",
    };
  p4.prototype.contains = function (a) {
    a = g.Tb(this.segments, a);
    return 0 <= a || (0 > a && 1 === (-a - 1) % 2);
  };
  p4.prototype.length = function () {
    return this.segments.length / 2;
  };
  g.y(xpb, g.I);
  g.k = xpb.prototype;
  g.k.va = function () {
    g.I.prototype.va.call(this);
    this.C && this.C.cancel();
  };
  g.k.KA = function () {
    this.seekTo(this.player.getCurrentTime());
  };
  g.k.seekTo = function (a) {
    a -= this.player.Lc();
    var b = this.j;
    this.j = g.Ab(this.qa.Mq(a).eb);
    b !== this.j && this.Y && this.Y();
  };
  g.k.reset = function () {
    this.D = new p4();
    this.K = -1;
    this.C && (this.C.cancel(), (this.C = null));
  };
  g.k.MY = function () {
    this.Ma();
    var a;
    if ((a = null != this.j)) (a = this.j), (a = a.j.Yr(a));
    if (
      a &&
      !this.C &&
      !(this.j && 30 < this.j.startTime - this.player.getCurrentTime())
    ) {
      a = this.j;
      a = a.j.pC(a);
      var b = a.eb[0],
        c;
      if (
        null == (c = this.player.getVideoData()) ? 0 : c.enableServerStitchedDai
      )
        if ((c = this.player.zz())) {
          var d = b.j.info.id,
            e = b.Pa,
            f = a.eb[0].C;
          if (this.policy.Ga) {
            if ((c = c.JI(f, e, d, 3))) a.D = c;
          } else if ((d = c.sz(f, e, d, 3)))
            if (((c = c.FD(e)), 0 === c)) d && (a.j = new g.zP(d));
            else if (2 === c) {
              this.N.start();
              ypb(this) && this.seekTo(this.player.getCurrentTime());
              return;
            }
        }
      b.j.index.Gn(b.Pa)
        ? (this.D.contains(a.eb[0].Pa) || zpb(this, a), (this.j = g.Ab(a.eb)))
        : ypb(this) && this.seekTo(this.player.getCurrentTime());
    }
    this.N.start();
  };
  g.y(q4, g.tV);
  g.k = q4.prototype;
  g.k.Ht = function (a, b, c) {
    var d = this;
    this.Rr();
    b = Cpb(this, a.getId());
    b ||
      ((b = a.languageCode),
      (b = this.j.isManifestless ? Dpb(this, b, "386") : Dpb(this, b)));
    if (b) {
      var e =
          1e3 * (b.index.GI(b.index.xn()) - b.index.getStartTime(b.index.xn())),
        f = new g.aYa(this.W),
        h = function () {
          d.C && d.C.reset();
          d.G = !0;
        };
      this.W.L("html5_keep_caption_data_after_seek") && (h = null);
      this.C = new xpb(
        f,
        this.J,
        b,
        function (l, m) {
          c(l, a, m, e);
        },
        this.K || g.GK(b.info),
        h
      );
    }
  };
  g.k.lR = function () {
    var a = this.G;
    this.G = !1;
    return a;
  };
  g.k.kA = function (a) {
    var b = this.K
      ? [
          new g.mS({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC1",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en",
          }),
          new g.mS({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC3",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en",
          }),
        ]
      : this.j.isManifestless
      ? Bpb(this, "386")
      : Bpb(this);
    b = g.u(b);
    for (var c = b.next(); !c.done; c = b.next()) g.sV(this.B, c.value);
    a();
  };
  g.k.Rr = function () {
    this.C && (this.C.dispose(), (this.C = null));
  };
  g.k.Rv = function () {
    return "";
  };
  var I4 = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var Hpb = ["left", "right", "center", "justify"];
  g.y(r4, g.W);
  g.k = r4.prototype;
  g.k.o3 = function (a, b) {
    this.bb = a;
    this.fb = b;
    var c = g.Js(this.element, this.element.parentElement);
    this.rb = a - c.x;
    this.zb = b - c.y;
  };
  g.k.n3 = function (a, b) {
    if (a !== this.bb || b !== this.fb) {
      g.tv(this.element, "ytp-dragging") || g.uv(this.element, "ytp-dragging");
      var c = g.Ls(this.element);
      a = a - this.rb - 0.02 * this.playerWidth;
      var d = b - this.zb - 0.02 * this.playerHeight,
        e = ((a + c.width / 2) / this.maxWidth) * 3;
      e = Math.floor(g.ye(e, 0, 2));
      var f = ((d + c.height / 2) / this.maxHeight) * 3;
      f = Math.floor(g.ye(f, 0, 2));
      b = e + 3 * f;
      a = (a + (e / 2) * c.width) / this.maxWidth;
      a = 100 * g.ye(a, 0, 1);
      c = (d + (f / 2) * c.height) / this.maxHeight;
      c = 100 * g.ye(c, 0, 1);
      this.B.params.Ul = b;
      this.B.params.zo = c;
      this.B.params.Wj = a;
      this.B.params.isDefault = !1;
      this.j.Ul = b;
      this.j.zo = c;
      this.j.Wj = a;
      this.j.isDefault = !1;
      this.ra.Ul = b;
      this.ra.zo = c;
      this.ra.Wj = a;
      this.ra.isDefault = !1;
      this.O_();
    }
  };
  g.k.m3 = function () {
    g.wv(this.element, "ytp-dragging");
  };
  g.k.O_ = function () {
    this.wB(this.K);
  };
  g.k.getType = function () {
    return this.type;
  };
  g.k.wB = function (a) {
    var b = this.Gb ? 0 : Math.min(this.bX(), this.maxWidth),
      c = this.aX(),
      d = this.Gb;
    if (d) {
      var e = getComputedStyle(this.D.parentNode);
      e =
        s4(e.borderLeftWidth) +
        s4(e.borderRightWidth) +
        s4(e.paddingLeft) +
        s4(e.paddingRight);
    } else e = 0;
    var f = e;
    e = "";
    3 === this.B.params.Ei && (e = "rotate(180deg)");
    var h = d ? "calc(96% - " + f + "px)" : "96%";
    g.zs(this.element, {
      top: 0,
      left: 0,
      right: "",
      bottom: "",
      width: b ? b + "px" : "",
      height: c ? c + "px" : "",
      "max-width": h,
      "max-height": h,
      margin: "",
      transform: "",
    });
    this.VM(a);
    e = {
      transform: e,
      top: "",
      left: "",
      width: b ? b + "px" : "",
      height: c ? c + "px" : "",
      "max-width": "",
      "max-height": "",
    };
    var l = 0.96 * this.j.Wj + 2;
    h = this.j.Ul;
    switch (h) {
      case 0:
      case 3:
      case 6:
        (d = this.j.Te.fontSizeIncrement) &&
          0 < d &&
          2 !== this.j.Ei &&
          3 !== this.j.Ei &&
          (l = Math.max(l / (1 + 2 * d), 2));
        e.left = l + "%";
        break;
      case 1:
      case 4:
      case 7:
        e.left = l + "%";
        l = this.D.offsetWidth;
        b || l
          ? ((b = b || l + 1),
            (e.width = b + "px"),
            (e["margin-left"] = d ? b / -2 - f / 2 + "px" : b / -2 + "px"))
          : (e.transform += " translateX(-50%)");
        break;
      case 2:
      case 5:
      case 8:
        e.right = 100 - l + "%";
    }
    d = 0.96 * this.j.zo + 2;
    switch (h) {
      case 0:
      case 1:
      case 2:
        e.top = d + "%";
        break;
      case 3:
      case 4:
      case 5:
        e.top = d + "%";
        (c = c || this.element.clientHeight)
          ? ((e.height = c + "px"), (e["margin-top"] = c / -2 + "px"))
          : (e.transform += " translateY(-50%)");
        break;
      case 6:
      case 7:
      case 8:
        e.bottom = 100 - d + "%";
    }
    g.zs(this.element, e);
    if (this.G) {
      c = this.D.offsetHeight;
      d = 1;
      for (b = 0; b < a.length; b++)
        (e = a[b]),
          "string" === typeof e.text &&
            ((d += e.text.split("\n").length - 1), e.append || 0 === b || d++);
      c /= d;
      this.G.style.height = c + "px";
      this.G.style.width = c + "px";
      this.element.style.paddingLeft = c + 5 + "px";
      this.element.style.paddingRight = c + 5 + "px";
      a = Number(this.element.style.marginLeft.replace("px", "")) - c - 5;
      c = Number(this.element.style.marginRight.replace("px", "")) - c - 5;
      this.element.style.marginLeft = a + "px";
      this.element.style.marginRight = c + "px";
    }
  };
  g.k.VM = function (a) {
    var b;
    for (b = 0; b < a.length && a[b] === this.K[b]; b++);
    if (this.Da || this.K.length > b)
      (b = 0),
        (this.Da = !1),
        (this.K = []),
        (this.N = this.Na = this.La = null),
        g.Bf(this.D);
    for (; b < a.length; b++) Mpb(this, a[b]);
  };
  g.k.bX = function () {
    return 0;
  };
  g.k.aX = function () {
    return 0;
  };
  g.k.toString = function () {
    return g.W.prototype.toString.call(this);
  };
  Opb.prototype.clear = function () {
    this.C = this.time = this.mode = 0;
    this.j = [];
    this.reset();
  };
  Opb.prototype.reset = function () {
    this.mode = 0;
    this.D.reset(0);
    this.G.reset(1);
  };
  var Ppb = [
    128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145,
    146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162,
    35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179,
    52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196,
    69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213,
    214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229,
    230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244,
    117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132,
    5, 6, 135, 136, 9, 10, 139, 12, 141, 142, 15, 144, 17, 18, 147, 20, 149,
    150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166,
    39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183,
    184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72,
    201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89,
    90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105,
    106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120,
    249, 250, 123, 252, 125, 126, 255,
  ];
  t4.prototype.set = function (a) {
    this.type = a;
  };
  t4.prototype.get = function () {
    return this.type;
  };
  u4.prototype.clear = function () {
    this.state = 0;
  };
  u4.prototype.update = function () {
    this.state = 2 === this.state ? 1 : 0;
  };
  u4.prototype.me = function () {
    return 0 !== this.state;
  };
  u4.prototype.matches = function (a, b) {
    return this.me() && a === this.hv && b === this.qs;
  };
  Upb.prototype.reset = function () {
    this.timestamp = this.j = 0;
  };
  v4.prototype.updateTime = function (a) {
    for (var b = 1; 15 >= b; ++b)
      for (var c = 1; 32 >= c; ++c) this.B[b][c].timestamp = a;
  };
  v4.prototype.debugString = function () {
    for (var a = "\n", b = 1; 15 >= b; ++b) {
      for (var c = 1; 32 >= c; ++c) {
        var d = this.B[b][c];
        a = 0 === d.j ? a + "_" : a + String.fromCharCode(d.j);
      }
      a += "\n";
    }
    return a;
  };
  v4.prototype.reset = function (a) {
    for (var b = 0; 15 >= b; b++)
      for (var c = 0; 32 >= c; c++) this.B[b][c].reset();
    this.C = a;
    this.j = 0;
    this.col = this.row = 1;
  };
  var Vpb = [
      32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49,
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
      68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102,
      103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
      118, 119, 120, 121, 122, 231, 247, 209, 241, 9632,
    ],
    Wpb = [
      174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238,
      244, 251,
    ],
    Xpb = [
      193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183,
      8220, 8221, 192, 194, 199, 200, 202, 203, 235, 206, 207, 239, 212, 217,
      249, 219, 171, 187,
    ],
    Ypb = [
      195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124,
      126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487,
      9491, 9495, 9499,
    ];
  bqb.prototype.reset = function (a, b) {
    this.G = b;
    this.style.set(2);
    this.B = this.K;
    this.D = this.N;
    this.j = this.B;
    var c = (a << 2) + (b << 1);
    this.K.reset(c);
    this.N.reset(c);
    this.text.reset((a << 2) + (b << 1) + 1);
  };
  Npb.prototype.reset = function (a) {
    this.G = a;
    this.B.clear();
    this.D = this.C;
    this.C.reset(a, 0);
    this.K.reset(a, 1);
  };
  fqb.prototype.D = function () {};
  g.y(A4, g.DJ);
  A4.prototype.toString = function () {
    return g.DJ.prototype.toString.call(this);
  };
  g.y(B4, g.I);
  B4.prototype.Wn = function () {
    return [];
  };
  B4.prototype.reset = function () {};
  g.y(C4, g.DJ);
  C4.prototype.toString = function () {
    return g.DJ.prototype.toString.call(this);
  };
  var D4 = 0;
  g.y(E4, B4);
  E4.prototype.reset = function () {
    this.K = {};
    this.B = this.j = null;
    this.G = !0;
  };
  E4.prototype.Wn = function (a, b) {
    a = a.firstChild;
    a.getAttribute("format");
    b = b || 0;
    Number.isFinite(b);
    a = Array.from(a.childNodes);
    a = g.u(a);
    for (var c = a.next(); !c.done; c = a.next())
      if (((c = c.value), 1 === c.nodeType))
        switch (c.tagName) {
          case "head":
            var d = c;
            break;
          case "body":
            var e = c;
        }
    if (d)
      for (
        d = Array.from(d.childNodes), d = g.u(d), a = d.next();
        !a.done;
        a = d.next()
      )
        if (((a = a.value), 1 === a.nodeType))
          switch (a.tagName) {
            case "pen":
              c = a.getAttribute("id");
              var f = this.pens,
                h = {},
                l = a.getAttribute("p");
              l && Object.assign(h, this.pens[l]);
              l = G4(a, "b");
              null != l && (h.bold = l);
              l = G4(a, "i");
              null != l && (h.italic = l);
              l = G4(a, "u");
              null != l && (h.underline = l);
              l = H4(a, "et");
              null != l && (h.charEdgeStyle = l);
              l = H4(a, "of");
              null != l && (h.offset = l);
              l = J4(a, "bc");
              null != l && (h.background = l);
              l = J4(a, "ec");
              null != l && (h.nN = l);
              l = J4(a, "fc");
              null != l && (h.color = l);
              l = H4(a, "fs");
              null != l && 0 !== l && (h.fontFamily = l);
              l = F4(a, "sz");
              void 0 !== l && (h.fontSizeIncrement = l / 100 - 1);
              l = F4(a, "bo");
              void 0 !== l && (h.backgroundOpacity = l / 255);
              l = F4(a, "fo");
              void 0 !== l && (h.textOpacity = l / 255);
              l = H4(a, "rb");
              null != l && 10 !== l && 0 !== l && (h.Yf = 10 < l ? l - 1 : l);
              a = H4(a, "hg");
              null != a && (h.ZX = a);
              f[c] = h;
              break;
            case "ws":
              c = a.getAttribute("id");
              this.Z[c] = jqb(this, a);
              break;
            case "wp":
              (c = a.getAttribute("id")), (this.N[c] = kqb(this, a));
          }
    if (e) {
      d = [];
      e = Array.from(e.childNodes);
      e = g.u(e);
      for (a = e.next(); !a.done; a = e.next())
        if (((a = a.value), 1 === a.nodeType))
          switch (a.tagName) {
            case "w":
              this.j = lqb(this, a, b, !1);
              (a = this.K[this.j.id]) &&
                a.end > this.j.start &&
                (a.end = this.j.start);
              this.K[this.j.id] = this.j;
              d.push(this.j);
              break;
            case "p":
              var m = a;
              l = b;
              c = [];
              f = m.getAttribute("w") || this.D;
              h = !!G4(m, "a");
              l = (F4(m, "t") || 0) + l;
              var n = F4(m, "d") || 5e3;
              h ||
                (!this.G &&
                  this.B &&
                  this.B.windowId === f &&
                  this.B.end > l &&
                  (this.B.end = l),
                this.B && "\n" === this.B.text && (this.B.text = ""));
              var p = h ? 6 : 5,
                q = m.getAttribute("p");
              q = q ? this.pens[q] : null;
              var r = Array.from(m.childNodes);
              r.length && (this.G = null != m.getAttribute("d"));
              for (m = 0; m < r.length; m++) {
                var t = r[m],
                  v = void 0;
                0 < m && (h = !0);
                var w = void 0;
                1 === t.nodeType && (w = t);
                if (w && "s" === w.tagName) {
                  if (
                    ((t = (t = w.getAttribute("p")) ? this.pens[t] : null) &&
                      t.Yf &&
                      (1 === t.Yf
                        ? ((t = r.slice(m, m + 4)),
                          4 === t.length &&
                            ((v = hqb(l, n, f, h, p, t, this.pens)), (m += 3)))
                        : (v = hqb(l, n, f, h, p, [w], this.pens))),
                    !v)
                  ) {
                    var A = w;
                    v = l;
                    w = n;
                    t = f;
                    var C = h,
                      F = p,
                      G = A.textContent ? A.textContent : "",
                      L = A.getAttribute("p");
                    L = L ? this.pens[L] : null;
                    A = F4(A, "t") || 0;
                    v = new A4(v + A, w - A, F, t, G, C, L);
                  }
                } else v = new A4(l, n, p, f, t.textContent || "", h, q);
                c.push(v);
                this.B = v;
              }
              if (0 < c.length)
                for (
                  c[0].windowId === this.D &&
                    ((this.j = lqb(this, a, b, !0)), d.push(this.j)),
                    a = g.u(c),
                    c = a.next();
                  !c.done;
                  c = a.next()
                )
                  (c = c.value),
                    (c.windowId = this.j.id),
                    this.j.j.push(c),
                    d.push(c);
          }
      b = d;
    } else b = [];
    return b;
  };
  var Rqb = new Map([
    [9, 1],
    [10, 1],
    [11, 2],
    [12, 3],
    [13, 4],
    [14, 5],
  ]);
  g.y(K4, B4);
  K4.prototype.reset = function () {
    this.B.clear();
  };
  K4.prototype.Wn = function (a, b) {
    var c = JSON.parse(a);
    if (!c) return [];
    if (c.pens) {
      a = 0;
      for (var d = g.u(c.pens), e = d.next(); !e.done; e = d.next()) {
        e = e.value;
        var f = {},
          h = e.pParentId;
        h && Object.assign(f, this.j.get(h));
        e.bAttr && (f.bold = !0);
        e.iAttr && (f.italic = !0);
        e.uAttr && (f.underline = !0);
        h = e.ofOffset;
        null != h && (f.offset = h);
        void 0 !== e.szPenSize && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
        h = e.etEdgeType;
        null != h && (f.charEdgeStyle = h);
        void 0 !== e.ecEdgeColor && (f.nN = L4(e.ecEdgeColor));
        h = e.fsFontStyle;
        null != h && 0 !== h && (f.fontFamily = h);
        void 0 !== e.fcForeColor && (f.color = L4(e.fcForeColor));
        void 0 !== e.foForeAlpha && (f.textOpacity = e.foForeAlpha / 255);
        void 0 !== e.bcBackColor && (f.background = L4(e.bcBackColor));
        void 0 !== e.boBackAlpha && (f.backgroundOpacity = e.boBackAlpha / 255);
        (h = e.rbRuby) &&
          10 !== h &&
          ((f.Yf = 10 < h ? h - 1 : h), (f.xo = Rqb.get(f.Yf)));
        e.hgHorizGroup && (f.ZX = e.hgHorizGroup);
        this.j.set(a++, f);
      }
    }
    if (c.wsWinStyles)
      for (a = 0, d = g.u(c.wsWinStyles), e = d.next(); !e.done; e = d.next())
        (e = e.value),
          (f = {}),
          (h = e.wsParentId)
            ? Object.assign(f, this.D.get(h))
            : Object.assign(f, this.G),
          void 0 !== e.mhModeHint && (f.wA = e.mhModeHint),
          void 0 !== e.juJustifCode && (f.textAlign = e.juJustifCode),
          void 0 !== e.pdPrintDir && (f.Ei = e.pdPrintDir),
          void 0 !== e.sdScrollDir && (f.zS = e.sdScrollDir),
          void 0 !== e.wfcWinFillColor &&
            (f.windowColor = L4(e.wfcWinFillColor)),
          void 0 !== e.wfoWinFillAlpha &&
            (f.windowOpacity = e.wfoWinFillAlpha / 255),
          this.D.set(a++, f);
    if (c.wpWinPositions)
      for (
        a = 0, d = g.u(c.wpWinPositions), e = d.next();
        !e.done;
        e = d.next()
      )
        (e = e.value),
          (f = {}),
          (h = e.wpParentId) && Object.assign(f, this.C.get(h)),
          void 0 !== e.ahHorPos && (f.Wj = e.ahHorPos),
          void 0 !== e.apPoint && (f.Ul = e.apPoint),
          void 0 !== e.avVerPos && (f.zo = e.avVerPos),
          void 0 !== e.ccCols && (f.zs = e.ccCols),
          void 0 !== e.rcRows && (f.Cr = e.rcRows),
          this.C.set(a++, f);
    if (c.events) {
      a = [];
      c = g.u(c.events);
      for (d = c.next(); !d.done; d = c.next()) {
        var l = d.value;
        e = (l.tStartMs || 0) + b;
        f = l.dDurationMs || 0;
        if (l.id)
          (h = String(l.id)),
            (d = mqb(this, l, e, f, h)),
            a.push(d),
            this.B.set(h, d);
        else {
          l.wWinId
            ? (h = l.wWinId.toString())
            : ((h = "_" + D4++),
              (d = mqb(this, l, e, f, h)),
              a.push(d),
              this.B.set(h, d));
          d = a;
          var m = l;
          0 === f && (f = 5e3);
          l = this.B.get(h);
          var n = !!m.aAppend,
            p = n ? 6 : 5,
            q = m.segs,
            r = null;
          m.pPenId && (r = this.j.get(m.pPenId));
          for (m = 0; m < q.length; m++) {
            var t = q[m],
              v = t.utf8;
            if (v) {
              var w = t.tOffsetMs || 0,
                A = null;
              t.pPenId && (A = this.j.get(t.pPenId));
              if (
                2 ===
                  (null != l.params.wA
                    ? l.params.wA
                    : 1 < l.j.length
                    ? 1
                    : 0) &&
                n &&
                "\n" === v
              )
                continue;
              t = null;
              var C = [],
                F;
              if ((F = A && 1 === A.Yf)) {
                F = q;
                var G = m;
                if (
                  G + 3 >= F.length ||
                  !F[G + 1].pPenId ||
                  !F[G + 2].pPenId ||
                  !F[G + 3].pPenId
                )
                  F = !1;
                else {
                  var L = F[G + 1].pPenId;
                  (L = this.j.get(L)) && L.Yf && 2 === L.Yf
                    ? ((L = F[G + 2].pPenId),
                      (L = this.j.get(L)),
                      !L || !L.Yf || 3 > L.Yf
                        ? (F = !1)
                        : ((L = F[G + 3].pPenId),
                          (F =
                            (L = this.j.get(L)) && L.Yf && 2 === L.Yf
                              ? !0
                              : !1)))
                    : (F = !1);
                }
              }
              if (F)
                (w = q[m + 1].utf8),
                  (t = q[m + 3].utf8),
                  (F = q[m + 2].utf8),
                  (G = this.j.get(q[m + 2].pPenId)),
                  (v = gqb(v, w, F, t, G)),
                  (t = new A4(e, f, p, h, v, n, A)),
                  (m += 3);
              else {
                if (-1 < v.indexOf("<")) {
                  var M = void 0;
                  C = A;
                  F = r;
                  G = e;
                  L = f;
                  var R = w,
                    ea = p,
                    ma = n,
                    oa = [],
                    ia = g.f2("<html>" + v + "</html>");
                  if (
                    !ia.getElementsByTagName("parsererror").length &&
                    (null == (M = ia.firstChild) ? 0 : M.childNodes.length)
                  )
                    for (
                      M = g.u(ia.firstChild.childNodes), ia = M.next();
                      !ia.done;
                      ia = M.next()
                    ) {
                      ia = ia.value;
                      var va = void 0,
                        aa = void 0,
                        U =
                          null !=
                          (aa =
                            null == (va = ia.textContent)
                              ? void 0
                              : va.replace(/\n/g, ""))
                            ? aa
                            : "";
                      if (3 !== ia.nodeType || (U && null == U.match(/^ *$/))) {
                        va = {};
                        Object.assign(va, C || F);
                        aa = void 0;
                        switch (null == (aa = ia) ? void 0 : aa.tagName) {
                          case "b":
                            va.bold = !0;
                            break;
                          case "i":
                            va.italic = !0;
                            break;
                          case "u":
                            va.underline = !0;
                        }
                        oa.push(new A4(G + R, L - R, ea, l.id, U, ma, va));
                      }
                    }
                  C = oa;
                }
                C.length || (C = [new A4(e + w, f - w, p, l.id, v, n, A || r)]);
              }
              if (C.length)
                for (n = g.u(C), A = n.next(); !A.done; A = n.next())
                  (A = A.value), d.push(A), l.j.push(A);
              else t && (d.push(t), l.j.push(t));
            }
            n = !0;
          }
        }
      }
      b = a;
    } else b = [];
    return b;
  };
  g.y(M4, g.tV);
  M4.prototype.Ht = function (a, b, c) {
    rpb(this.videoData.videoId, a.vssId, c);
  };
  M4.prototype.kA = function (a) {
    if (this.audioTrack)
      for (
        var b = g.u(this.audioTrack.captionTracks), c = b.next();
        !c.done;
        c = b.next()
      )
        g.sV(this.B, c.value);
    a();
  };
  g.y(N4, r4);
  N4.prototype.VM = function (a) {
    var b = this.B.j;
    r4.prototype.VM.call(this, a);
    for (a = a.length; a < b.length; a++) {
      var c = b[a];
      if (f && c.j === e) var d = f;
      else {
        d = {};
        Object.assign(d, c.j);
        Object.assign(d, Sqb);
        var e = c.j;
        var f = d;
      }
      Mpb(this, c, d);
    }
  };
  var Sqb = { A8: !0 };
  g.y(O4, fqb);
  O4.prototype.D = function (a, b, c, d, e) {
    if (c < d) {
      var f = "_" + D4++;
      c = c / 1e3 - this.K;
      d = d / 1e3 - this.K;
      a = new C4(c, d - c, 5, f, {
        textAlign: 0,
        Ul: 0,
        Wj: 2.5 * b,
        zo: 5.33 * a,
      });
      e = new A4(c, d - c, 5, f, e);
      this.B.push(a);
      this.B.push(e);
    }
  };
  g.y(R4, B4);
  R4.prototype.Wn = function (a) {
    a = new O4(a, a.byteLength, this.B);
    if (nqb(a)) {
      for (; a.byteOffset < a.j.byteLength; )
        for (
          0 === a.version
            ? (a.C = Q4(a) * (1e3 / 45))
            : 1 === a.version && (a.C = 4294967296 * Q4(a) + Q4(a)),
            a.G = P4(a);
          0 < a.G;
          a.G--
        ) {
          var b = P4(a),
            c = P4(a),
            d = P4(a);
          b & 4 &&
            (b & 3) === this.track &&
            (0 === this.track || 1 === this.track) &&
            ((b = this.j),
            b.j.push({
              time: a.C,
              type: this.track,
              VV: c,
              WV: d,
              order: b.j.length,
            }));
        }
      Tpb(this.j, a);
      return a.B;
    }
    return [];
  };
  R4.prototype.reset = function () {
    this.j.clear();
  };
  g.y(S4, r4);
  g.k = S4.prototype;
  g.k.O_ = function () {
    g.nv(this.Wa);
  };
  g.k.Eaa = function () {
    g.wv(this.element, "ytp-rollup-mode");
    this.wB(this.Xb, !0);
  };
  g.k.aX = function () {
    return this.C ? this.qa : this.Y;
  };
  g.k.bX = function () {
    return this.C ? this.Y : this.qa;
  };
  g.k.wB = function (a, b) {
    this.Xb = a;
    if (this.B.params.Cr) {
      for (var c = 0, d = 0; d < this.K.length && c < a.length; d++)
        this.K[d] === a[c] && c++;
      0 < c && c < a.length && (a = this.K.concat(a.slice(c)));
      this.Jb = this.qa;
      this.Y = this.qa = 0;
      r4.prototype.wB.call(this, a);
      rqb(this, b);
    }
    r4.prototype.wB.call(this, a);
  };
  g.y(T4, B4);
  T4.prototype.Wn = function (a, b) {
    var c = [];
    a = a.split(Tqb);
    for (var d = 1; d < a.length; d++) {
      var e = a[d],
        f = b;
      if ("" !== e && !Uqb.test(e)) {
        var h = Vqb.exec(e);
        if (h && 4 <= h.length) {
          var l = tqb(h[1]),
            m = tqb(h[2]) - l;
          l += f;
          var n = (h = h[3]) ? h.split(" ") : [];
          h = {};
          var p = null;
          var q = "";
          var r = null,
            t = "";
          n = g.u(n);
          for (var v = n.next(); !v.done; v = n.next())
            if (((v = v.value.split(":")), 2 === v.length)) {
              var w = v[1];
              switch (v[0]) {
                case "line":
                  v = w.split(",");
                  v[0].endsWith("%") &&
                    ((p = v[0]),
                    (h.zo = Number.parseInt(p, 10)),
                    2 === v.length && (q = v[1].trim()));
                  break;
                case "position":
                  v = w.split(",");
                  r = v[0];
                  h.Wj = Number.parseInt(r, 10);
                  2 === v.length && (t = v[1].trim());
                  break;
                case "align":
                  switch (w) {
                    case "start":
                      h.textAlign = 0;
                      break;
                    case "middle":
                      h.textAlign = 2;
                      break;
                    case "end":
                      h.textAlign = 1;
                  }
              }
            }
          p || q || (q = "end");
          if (!r)
            switch (h.textAlign) {
              case 0:
                h.Wj = 0;
                break;
              case 1:
                h.Wj = 100;
                break;
              case 2:
                h.Wj = 50;
            }
          if (null != h.textAlign) {
            p = 0;
            switch (q) {
              case "center":
                p += 3;
                break;
              case "end":
                p += 6;
                break;
              default:
                p += 0;
            }
            switch (t) {
              case "line-left":
                p += 0;
                break;
              case "center":
                p += 1;
                break;
              case "line-right":
                p += 2;
                break;
              default:
                switch (h.textAlign) {
                  case 0:
                    p += 0;
                    break;
                  case 2:
                    p += 1;
                    break;
                  case 1:
                    p += 2;
                }
            }
            q = 0 > p || 8 < p ? 7 : p;
            h.Ul = q;
          }
          e = e.substring(Vqb.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
          t = h;
          h = e;
          e = {};
          if (0 > h.indexOf("<") && 0 > h.indexOf("&"))
            (f = uqb(l, m, 5, t)),
              (m = new A4(l, m, 5, f.id, h, !1, g.id(e) ? void 0 : e)),
              c.push(f),
              c.push(m),
              f.j.push(m);
          else
            for (
              q = h.split(Wqb),
                1 === q.length
                  ? ((h = 5), (t = uqb(l, m, h, t)))
                  : ((p = h = 6),
                    (t = Object.assign({ zs: 32 }, t)),
                    (t = new C4(l, m, p, "_" + D4++, t))),
                c.push(t),
                p = l,
                r = 0;
              r < q.length;
              r++
            )
              (n = q[r]),
                0 === r % 2
                  ? ((v = g.f2("<html>" + n + "</html>")),
                    v.getElementsByTagName("parsererror").length
                      ? ((w = v.createElement("span")),
                        w.appendChild(v.createTextNode(n)))
                      : (w = v.firstChild),
                    sqb(this, p, m - (p - l), h, t, 0 < r, w, e, c))
                  : (p = tqb(n) + f);
        }
        Vqb.lastIndex = 0;
      }
    }
    return c;
  };
  var Uqb = /^NOTE/,
    Tqb = /(?:\r\n|\r|\n){2,}/,
    Vqb = RegExp(
      "^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)",
      "gm"
    ),
    Wqb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
  g.QX.cJ(T4, { Wn: "wvppt" });
  g.y(U4, g.I);
  U4.prototype.Wn = function (a, b, c, d) {
    c = c || 0;
    d = d || 0;
    if (this.B && a) {
      var e = d,
        f = xqb(this, a, c),
        h = [];
      try {
        for (var l = g.u(f), m = l.next(); !m.done; m = l.next()) {
          var n = m.value,
            p = n.trackData,
            q = n.tS;
          h =
            "string" !== typeof p
              ? h.concat(yqb(this, b, p, q, e))
              : "WEBVTT" === p.substring(0, 6)
              ? h.concat(zqb(this, p, q))
              : h.concat(Bqb(this, b, p, q));
        }
        var r = h;
      } catch (t) {
        g.dF(t), this.clear(), (r = []);
      }
      if (0 !== r.length) return r;
    }
    a = vqb(a);
    if (!a) return [];
    try {
      return "string" !== typeof a
        ? yqb(this, b, a, c, d)
        : "WEBVTT" === a.substring(0, 6)
        ? zqb(this, a, c)
        : Bqb(this, b, a, c);
    } catch (t) {
      return g.dF(t), this.clear(), [];
    }
  };
  U4.prototype.clear = function () {
    this.j && this.j.dispose();
    this.j = null;
  };
  U4.prototype.reset = function () {
    this.j && this.j.reset();
  };
  U4.prototype.va = function () {
    g.I.prototype.va.call(this);
    this.clear();
  };
  var c5 = {
    windowColor: "#080808",
    windowOpacity: 0,
    textAlign: 2,
    Ul: 7,
    Wj: 50,
    zo: 100,
    isDefault: !0,
    Te: {
      background: "#080808",
      backgroundOpacity: 0.75,
      charEdgeStyle: 0,
      color: "#fff",
      fontFamily: 4,
      fontSizeIncrement: 0,
      textOpacity: 1,
      offset: 1,
    },
  };
  g.y(V4, g.qV);
  g.k = V4.prototype;
  g.k.va = function () {
    if (this.D || this.Ga) {
      var a = this.J.Ve();
      a && !a.Ma() && a.Ty();
    } else Qqb(this, !1);
    g.qV.prototype.va.call(this);
  };
  g.k.lS = function () {
    return (
      this.W.L("html5_honor_caption_availabilities_in_audio_track") && !this.bb
    );
  };
  g.k.du = function () {
    if (this.Wa) return this.D || this.Ga;
    var a = this.getAudioTrack();
    if (this.lS()) {
      if (!a.captionTracks.length) return !1;
      if (!this.j) return !0;
    }
    a = opb(a, g.ZR(this.W));
    return "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === a
      ? !0
      : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === a
      ? W4(this)
      : Fqb(this) || W4(this)
      ? !0
      : Gqb(this);
  };
  g.k.load = function () {
    var a = this;
    g.qV.prototype.load.call(this);
    this.N = this.getAudioTrack();
    this.j
      ? this.B &&
        (this.Za.clear(),
        this.D
          ? Kqb(this, !0)
          : 3 !== this.player.getPresentingPlayerType() &&
            this.j.Ht(this.B, "json3", function (b, c, d, e) {
              if (b) {
                var f;
                Lqb(a, null != (f = a.B) ? f : void 0);
                a.j.lR() &&
                  ((a.Da = []), a.J.qf("captions"), g.kv(a.La), a.Za.reset());
                if (a.videoData.nj) {
                  var h;
                  d = (null != (h = d) ? h : 0) + a.videoData.nj;
                }
                b = a.Za.Wn(b, c, d, e);
                if (a.fb)
                  for (c = g.u(b), e = c.next(); !e.done; e = c.next())
                    (e = e.value),
                      (e.C = a.videoData.clientPlaybackNonce),
                      (e.Uk = a.videoData.nj);
                c = !a.W.L("html5_keep_caption_data_after_seek") && a.bb;
                a.player.jf(b, void 0, c);
                !a.Y ||
                  a.Ga ||
                  Z4(a) ||
                  !a.W.Nm ||
                  g.iJ(a.W) ||
                  g.OR(a.W) ||
                  g.JG(a.W) ||
                  "shortspage" === a.W.La ||
                  a.player.isInline() ||
                  (g.ov(a.Na),
                  (b = iqb({
                    Ul: 0,
                    Wj: 5,
                    zo: 5,
                    Cr: 2,
                    textAlign: 0,
                    Ei: 0,
                    lang: "vi",
                  })),
                  (a.Ra = [b]),
                  (c = [
                    "Nh\u00e2\u0301p va\u0300o ",
                    " \u0111\u00ea\u0309 bi\u00ea\u0301t ca\u0300i \u0111\u0103\u0323t",
                  ]),
                  a.rb ||
                    ((e = new g.AF(g.gxa())), g.O(a, e), (a.rb = e.element)),
                  (e = b.end - b.start),
                  (f = g.nS(a.B)) && a.Ra.push(new A4(b.start, e, 0, b.id, f)),
                  a.Ra.push(
                    new A4(b.start, e, 0, b.id, c[0]),
                    new A4(b.start, e, 0, b.id, a.rb, !0),
                    new A4(b.start, e, 0, b.id, c[1], !0)
                  ),
                  a.player.jf(a.Ra),
                  g.mv(a.Na));
                !a.Y ||
                  a.Ga ||
                  Z4(a) ||
                  (g.ZR(a.W) ? a5(a, !0) : b5(a, !0),
                  a.N && (a.N.D = a.B),
                  a.player.Do());
                a.Y = !1;
              }
            }),
        this.D ||
          this.Ga ||
          Z4(this) ||
          this.player.wc("captionschanged", g.oS(this.B)))
      : ((this.j = Hqb(this)),
        g.O(this, this.j),
        this.j.kA(function () {
          Jqb(a);
        }));
  };
  g.k.unload = function () {
    this.D && this.B
      ? Kqb(this, !1)
      : (this.Na && g.ov(this.Na),
        this.player.qf("captions"),
        (this.Da = []),
        this.j && this.j.Rr(),
        this.Za.clear(),
        this.Z && this.player.jf(this.Z),
        this.OS());
    g.qV.prototype.unload.call(this);
    this.player.Do();
    this.player.wc("captionschanged", {});
  };
  g.k.create = function () {
    this.du() && this.load();
    var a;
    a: {
      var b, c, d;
      if (
        this.W.L("suggest_caption_correction_menu_item") &&
        this.W.L("web_player_nitrate_promo_tooltip") &&
        (null == (b = this.videoData.getPlayerResponse())
          ? 0
          : null == (c = b.captions)
          ? 0
          : null == (d = c.playerCaptionsTracklistRenderer)
          ? 0
          : d.openTranscriptCommand)
      ) {
        var e, f;
        if (
          (b =
            null == (a = this.videoData.getPlayerResponse())
              ? void 0
              : null == (e = a.captions)
              ? void 0
              : null == (f = e.playerCaptionsTracklistRenderer)
              ? void 0
              : f.captionTracks)
        )
          for (a = g.u(b), e = a.next(); !e.done; e = a.next())
            if (((e = e.value), "asr" === e.kind && "en" === e.languageCode)) {
              a = !0;
              break a;
            }
      }
      a = !1;
    }
    a && this.J.publish("showpromotooltip", this.K.element);
  };
  g.k.pba = function () {
    for (
      var a = this.J.Ve().Ib().textTracks, b = null, c = 0;
      c < a.length;
      c++
    )
      if ("showing" === a[c].mode)
        a: {
          b = g.rV(this.j.B, !0);
          for (var d = 0; d < b.length; d++)
            if (b[d].toString() === a[c].id) {
              b = b[d];
              break a;
            }
          b = null;
        }
    (this.loaded ? this.B : null) !== b && $4(this, b, !0);
  };
  g.k.Fda = function () {
    (!this.B && this.D) || this.unload();
  };
  g.k.onCueRangeEnter = function (a) {
    this.Da.push(a);
    g.kv(this.La);
  };
  g.k.onCueRangeExit = function (a) {
    g.Hb(this.Da, a);
    this.j instanceof q4 && this.j.K && this.player.qo([a]);
    g.kv(this.La);
  };
  g.k.getCaptionWindowContainerId = function () {
    return this.K.element.id;
  };
  g.k.lca = function () {
    Pqb(this, this.Ra);
    this.Ra = null;
  };
  g.k.NS = function () {
    var a = this;
    if (!this.Gb || !this.D) {
      this.La.stop();
      g.eba(this.Va);
      this.Da.sort(g.BBa);
      var b = this.Da;
      if (this.Z) {
        var c = g.Ht(
          b,
          function (f) {
            return -1 === this.Z.indexOf(f);
          },
          this
        );
        c.length && (b = c);
      }
      b = g.u(b);
      for (c = b.next(); !c.done; c = b.next()) Nqb(this, c.value);
      b = g.u(Object.entries(this.ra));
      var d = b.next();
      for (c = {}; !d.done; c = { Nz: void 0, Wo: void 0 }, d = b.next()) {
        var e = g.u(d.value);
        d = e.next().value;
        e = e.next().value;
        c.Nz = d;
        c.Wo = e;
        this.Va[c.Nz]
          ? (c.Wo.element.parentNode ||
              (c.Wo instanceof S4 ||
                c.Wo instanceof N4 ||
                g.ad(
                  this.ra,
                  (function (f) {
                    return function (h, l) {
                      l !== f.Nz &&
                        h.B.params.Ul === f.Wo.B.params.Ul &&
                        h.B.params.Wj === f.Wo.B.params.Wj &&
                        h.B.params.zo === f.Wo.B.params.zo &&
                        (h.dispose(), delete a.ra[l]);
                      return l === f.Nz;
                    };
                  })(c),
                  this
                ),
              this.K.element.appendChild(c.Wo.element)),
            c.Wo.wB(this.Va[c.Nz]))
          : (c.Wo.dispose(), delete this.ra[c.Nz]);
      }
    }
  };
  g.k.qca = function () {
    Dqb(this, {}, !0);
    this.player.wc("captionssettingschanged");
  };
  g.k.J7 = function () {
    var a = c5.Te;
    a = {
      background: a.background,
      backgroundOpacity: a.backgroundOpacity,
      charEdgeStyle: a.charEdgeStyle,
      color: a.color,
      fontFamily: a.fontFamily,
      fontSizeIncrement: a.fontSizeIncrement,
      fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
      textOpacity: a.textOpacity,
      windowColor: c5.windowColor,
      windowOpacity: c5.windowOpacity,
    };
    var b = vpb() || {};
    null != b.background && (a.background = b.background);
    null != b.backgroundOverride &&
      (a.backgroundOverride = b.backgroundOverride);
    null != b.backgroundOpacity && (a.backgroundOpacity = b.backgroundOpacity);
    null != b.backgroundOpacityOverride &&
      (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
    null != b.charEdgeStyle && (a.charEdgeStyle = b.charEdgeStyle);
    null != b.charEdgeStyleOverride &&
      (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
    null != b.color && (a.color = b.color);
    null != b.colorOverride && (a.colorOverride = b.colorOverride);
    null != b.fontFamily && (a.fontFamily = b.fontFamily);
    null != b.fontFamilyOverride &&
      (a.fontFamilyOverride = b.fontFamilyOverride);
    null != b.fontSizeIncrement && (a.fontSizeIncrement = b.fontSizeIncrement);
    null != b.fontSizeIncrementOverride &&
      (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
    null != b.fontStyle && (a.fontStyle = b.fontStyle);
    null != b.fontStyleOverride && (a.fontStyleOverride = b.fontStyleOverride);
    null != b.textOpacity && (a.textOpacity = b.textOpacity);
    null != b.textOpacityOverride &&
      (a.textOpacityOverride = b.textOpacityOverride);
    null != b.windowColor && (a.windowColor = b.windowColor);
    null != b.windowColorOverride &&
      (a.windowColorOverride = b.windowColorOverride);
    null != b.windowOpacity && (a.windowOpacity = b.windowOpacity);
    null != b.windowOpacityOverride &&
      (a.windowOpacityOverride = b.windowOpacityOverride);
    return a;
  };
  g.k.z1 = function (a, b) {
    var c = {};
    Object.assign(c, vpb());
    Object.assign(c, a);
    Dqb(this, c, b);
    this.player.wc("captionssettingschanged");
  };
  g.k.OS = function () {
    !this.D &&
      this.loaded &&
      (g.Vc(
        this.ra,
        function (a, b) {
          a.dispose();
          delete this.ra[b];
        },
        this
      ),
      this.NS());
  };
  g.k.Mh = function (a, b) {
    switch (a) {
      case "fontSize":
        if (isNaN(b)) break;
        var c = g.ye(b, -2, 4);
        this.z1({ fontSizeIncrement: c });
        return c;
      case "reload":
        b && !this.D && $4(this, this.B, !0);
        break;
      case "stickyLoading":
        void 0 !== b &&
          this.W.N &&
          (g.ZR(this.W) ? a5(this, !!b) : b5(this, !!b));
        break;
      case "track":
        if (!this.j) return {};
        if (b) {
          if (this.D) break;
          if (!g.bb(b)) break;
          if (g.id(b)) {
            $4(this, null, !0);
            break;
          }
          a = g.rV(this.j.B, !0);
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            e.languageCode !== b.languageCode ||
              (c &&
                (e.languageName !== b.languageName ||
                  (e.captionId || "") !== (b.captionId || "") ||
                  g.nS(e) !== b.displayName)) ||
              (c = b.translationLanguage ? ppb(e, b.translationLanguage) : e);
          }
          this.uL(b.position);
          !c ||
            (c === this.B && this.loaded) ||
            ((b = g.$Na()),
            (a = g.pS(c)),
            (b.length && a === b[b.length - 1]) ||
              (b.push(a), g.sC("yt-player-caption-language-preferences", b)),
            g.ZR(this.W) &&
              !this.J.isInline() &&
              g.sC("yt-player-caption-sticky-language", a, 2592e3),
            $4(this, c, !0));
        } else return this.loaded && this.B && !Z4(this) ? g.oS(this.B) : {};
        return "";
      case "tracklist":
        return this.j
          ? g.Rr(g.rV(this.j.B, !(!b || !b.includeAsr)), function (f) {
              return g.oS(f);
            })
          : [];
      case "translationLanguages":
        return this.j
          ? this.j.D.map(function (f) {
              return Object.assign({}, f);
            })
          : [];
      case "sampleSubtitles":
        this.D || void 0 === b || Qqb(this, !!b);
        break;
      case "sampleSubtitlesCustomized":
        this.D || Qqb(this, !!b, b);
        break;
      case "recommendedTranslationLanguages":
        return g.$Na();
      case "defaultTranslationSourceTrackIndices":
        return this.j ? this.j.N : [];
    }
  };
  g.k.getOptions = function () {
    var a =
      "reload fontSize track tracklist translationLanguages sampleSubtitle".split(
        " "
      );
    this.W.N && a.push("stickyLoading");
    return a;
  };
  g.k.Nq = function () {
    var a = this.B;
    if (this.W.L("html5_modify_caption_vss_logging")) {
      var b;
      return (a = null != (b = this.videoData.sC) ? b : null)
        ? { cc: g.JSa(a) }
        : {};
    }
    return a
      ? ((b = a.vssId),
        a.translationLanguage && b && (b = "t" + b + "." + g.pS(a)),
        { cc: b })
      : {};
  };
  g.k.rda = function () {
    this.isSubtitlesOn()
      ? (g.ZR(this.W) ? a5(this, !1) : b5(this, !1),
        Lqb(this),
        this.unload(),
        W4(this, !0) && $4(this, X4(this), !1))
      : this.S0();
  };
  g.k.S0 = function () {
    this.isSubtitlesOn() ||
      $4(this, Z4(this) || !this.B ? Y4(this, !0) : this.B, !0);
  };
  g.k.isSubtitlesOn = function () {
    return !!this.loaded && !!this.B && !Z4(this);
  };
  g.k.Z9 = function () {
    var a = Z4(this);
    W4(this, a)
      ? $4(this, this.getAudioTrack().j, !1)
      : this.videoData.captionTracks.length &&
        (this.loaded && this.unload(),
        this.lS() &&
          ((this.Y = !1),
          (this.B = null),
          this.j && (this.j.dispose(), (this.j = null))),
        this.du() && (a ? $4(this, Y4(this), !1) : this.load()));
  };
  g.k.uL = function (a) {
    a &&
      ((this.qa = {
        top: a.top,
        right: a.right,
        bottom: a.bottom,
        left: a.left,
        width: 1 - a.left - a.right,
        height: 1 - a.top - a.bottom,
      }),
      (this.K.element.style.top = 100 * this.qa.top + "%"),
      (this.K.element.style.left = 100 * this.qa.left + "%"),
      (this.K.element.style.width = 100 * this.qa.width + "%"),
      (this.K.element.style.height = 100 * this.qa.height + "%"),
      (this.K.element.style.position = "absolute"),
      (a = Oqb(this))) &&
      ((this.K.element.style.width = a.width + "px"),
      (this.K.element.style.height = a.height + "px"));
  };
  g.k.onVideoDataChange = function (a, b) {
    "newdata" === a &&
      ((this.videoData = b),
      this.loaded && this.unload(),
      (this.Y = !1),
      (this.B = null),
      this.j &&
        (this.j.dispose(),
        (this.j = null),
        this.player.wc("captionschanged", {})),
      this.du() && this.load());
  };
  g.k.getAudioTrack = function () {
    return this.fb && 2 === this.player.getPresentingPlayerType()
      ? this.videoData.wl
      : this.player.getAudioTrack();
  };
  g.k.K$ = function () {
    var a = this.J.Ve();
    a && !a.Ma() && a.Ty();
    this.J.isFullscreen()
      ? ((this.D = this.Wa = !0), this.loaded && Jqb(this))
      : ((this.Wa = "3" === this.W.controlsType), (this.D = Cqb(this)));
    $4(this, this.B);
  };
  g.k.SL = function () {
    var a,
      b,
      c,
      d =
        null == (a = this.videoData.getPlayerResponse())
          ? void 0
          : null == (b = a.captions)
          ? void 0
          : null == (c = b.playerCaptionsTracklistRenderer)
          ? void 0
          : c.openTranscriptCommand;
    d && this.player.gb("innertubeCommand", d);
  };
  g.QX.cJ(V4, { NS: "smucd" });
  g.pV("captions", V4);
})(_yt_player);
