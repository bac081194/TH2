(function (g) {
  var window = this;
  ("use strict");
  var Btb = function (a, b) {
      a.gb("onAutonavCoundownStarted", b);
    },
    j6 = function (a, b, c) {
      g.yv(a.element, "ytp-suggestion-set", !!b.videoId);
      var d = b.playlistId;
      c = b.Wg(c ? c : "mqdefault.jpg");
      var e = null,
        f = null;
      b instanceof g.wS &&
        (b.lengthText
          ? ((e = b.lengthText || null), (f = b.yw || null))
          : b.lengthSeconds &&
            ((e = g.CG(b.lengthSeconds)), (f = g.CG(b.lengthSeconds, !0))));
      var h = !!d;
      d = h && "RD" === g.YSa(d).type;
      var l = b instanceof g.wS ? b.isLivePlayback : null,
        m = b instanceof g.wS ? b.isUpcoming : null,
        n = b.author,
        p = b.shortViewCount,
        q = b.publishedTimeText,
        r = [],
        t = [];
      n && r.push(n);
      p && (r.push(p), t.push(p));
      q && t.push(q);
      c = {
        title: b.title,
        author: n,
        author_and_views: r.join(" \u2022 "),
        aria_label: b.ariaLabel || g.KJ("Xem $TITLE", { TITLE: b.title }),
        duration: e,
        timestamp: f,
        url: b.Lk(),
        is_live: l,
        is_upcoming: m,
        is_list: h,
        is_mix: d,
        background: c ? "background-image: url(" + c + ")" : "",
        views_and_publish_time: t.join(" \u2022 "),
        autoplayAlternativeHeader: b.ls,
      };
      b instanceof g.vS && (c.playlist_length = b.playlistLength);
      a.update(c);
    },
    k6 = function (a) {
      var b = a.U(),
        c = b.D;
      g.W.call(this, {
        I: "a",
        S: "ytp-autonav-suggestion-card",
        X: {
          href: "{{url}}",
          target: c ? b.Y : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}",
        },
        V: [
          {
            I: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-thumbnail",
              "ytp-autonav-thumbnail-small",
            ],
            X: { style: "{{background}}" },
            V: [
              {
                I: "div",
                X: { "aria-label": "{{timestamp}}" },
                Ka: ["ytp-autonav-timestamp"],
                xa: "{{duration}}",
              },
              {
                I: "div",
                Ka: ["ytp-autonav-live-stamp"],
                xa: "Tr\u1ef1c ti\u1ebfp",
              },
              {
                I: "div",
                Ka: ["ytp-autonav-upcoming-stamp"],
                xa: "S\u1eafp di\u1ec5n ra",
              },
              {
                I: "div",
                S: "ytp-autonav-list-overlay",
                V: [
                  {
                    I: "div",
                    S: "ytp-autonav-mix-text",
                    xa: "Tuy\u1ec3n t\u1eadp",
                  },
                  { I: "div", S: "ytp-autonav-mix-icon" },
                ],
              },
            ],
          },
          {
            I: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-title",
              "ytp-autonav-title-card",
            ],
            xa: "{{title}}",
          },
          {
            I: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-author",
              "ytp-autonav-author-card",
            ],
            xa: "{{author}}",
          },
          {
            I: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-author",
              "ytp-autonav-view-and-date-card",
            ],
            xa: "{{views_and_publish_time}}",
          },
        ],
      });
      this.J = a;
      this.suggestion = null;
      this.j = c;
      this.listen("click", this.onClick);
      this.listen("keypress", this.onKeyPress);
    },
    l6 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g.W.call(this, {
        I: "div",
        S: "ytp-autonav-endscreen-countdown-overlay",
      });
      var c = this;
      this.K = b;
      this.cancelCommand = this.G = void 0;
      this.C = 0;
      this.container = new g.W({
        I: "div",
        S: "ytp-autonav-endscreen-countdown-container",
      });
      g.O(this, this.container);
      this.container.Ja(this.element);
      b = a.U();
      var d = b.D;
      this.J = a;
      this.suggestion = null;
      this.onVideoDataChange("newdata", this.J.getVideoData());
      this.T(a, "videodatachange", this.onVideoDataChange);
      this.j = new g.W({
        I: "div",
        S: "ytp-autonav-endscreen-upnext-container",
        X: {
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}",
        },
        V: [
          { I: "div", S: "ytp-autonav-endscreen-upnext-header" },
          {
            I: "div",
            S: "ytp-autonav-endscreen-upnext-alternative-header",
            xa: "{{autoplayAlternativeHeader}}",
          },
          {
            I: "a",
            S: "ytp-autonav-endscreen-link-container",
            X: { href: "{{url}}", target: d ? b.Y : "" },
            V: [
              {
                I: "div",
                S: "ytp-autonav-endscreen-upnext-thumbnail",
                X: { style: "{{background}}" },
                V: [
                  {
                    I: "div",
                    X: { "aria-label": "{{timestamp}}" },
                    Ka: ["ytp-autonav-timestamp"],
                    xa: "{{duration}}",
                  },
                  {
                    I: "div",
                    Ka: ["ytp-autonav-live-stamp"],
                    xa: "Tr\u1ef1c ti\u1ebfp",
                  },
                  {
                    I: "div",
                    Ka: ["ytp-autonav-upcoming-stamp"],
                    xa: "S\u1eafp di\u1ec5n ra",
                  },
                ],
              },
              {
                I: "div",
                S: "ytp-autonav-endscreen-video-info",
                V: [
                  { I: "div", S: "ytp-autonav-endscreen-premium-badge" },
                  {
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-title",
                    xa: "{{title}}",
                  },
                  {
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-author",
                    xa: "{{author}}",
                  },
                  {
                    I: "div",
                    S: "ytp-autonav-view-and-date",
                    xa: "{{views_and_publish_time}}",
                  },
                  {
                    I: "div",
                    S: "ytp-autonav-author-and-view",
                    xa: "{{author_and_views}}",
                  },
                ],
              },
            ],
          },
        ],
      });
      g.O(this, this.j);
      this.j.Ja(this.container.element);
      d ||
        this.T(
          this.j.Fa("ytp-autonav-endscreen-link-container"),
          "click",
          this.AT
        );
      this.J.createClientVe(this.container.element, this, 115127);
      this.J.createClientVe(
        this.j.Fa("ytp-autonav-endscreen-link-container"),
        this,
        115128
      );
      this.overlay = new g.W({ I: "div", S: "ytp-autonav-overlay" });
      g.O(this, this.overlay);
      this.overlay.Ja(this.container.element);
      this.B = new g.W({
        I: "div",
        S: "ytp-autonav-endscreen-button-container",
      });
      g.O(this, this.B);
      this.B.Ja(this.container.element);
      this.cancelButton = new g.W({
        I: "button",
        Ka: [
          "ytp-autonav-endscreen-upnext-button",
          "ytp-autonav-endscreen-upnext-cancel-button",
          b.L("web_modern_buttons")
            ? "ytp-autonav-endscreen-upnext-button-rounded"
            : "",
        ],
        X: { "aria-label": "H\u1ee7y t\u1ef1 \u0111\u1ed9ng ph\u00e1t" },
        xa: "H\u1ee7y",
      });
      g.O(this, this.cancelButton);
      this.cancelButton.Ja(this.B.element);
      this.cancelButton.listen("click", this.t3, this);
      this.J.createClientVe(this.cancelButton.element, this, 115129);
      this.playButton = new g.W({
        I: "a",
        Ka: [
          "ytp-autonav-endscreen-upnext-button",
          "ytp-autonav-endscreen-upnext-play-button",
          b.L("web_modern_buttons")
            ? "ytp-autonav-endscreen-upnext-button-rounded"
            : "",
        ],
        X: {
          href: "{{url}}",
          role: "button",
          "aria-label": "Ph\u00e1t video ti\u1ebfp theo",
        },
        xa: "Ph\u00e1t ngay",
      });
      g.O(this, this.playButton);
      this.playButton.Ja(this.B.element);
      this.playButton.listen("click", this.AT, this);
      this.J.L("web_player_autonav_next_button_renderer")
        ? (this.J.createServerVe(this.playButton.element, this.playButton, !0),
          (b = this.J.getVideoData()) && Ctb(this, b))
        : this.J.createClientVe(this.playButton.element, this, 115130);
      this.D = new g.lv(function () {
        Dtb(c);
      }, 500);
      g.O(this, this.D);
      this.zT();
      this.T(a, "autonavvisibility", this.zT);
      this.J.L("web_autonav_color_transition") &&
        (this.T(a, "autonavchange", this.s3),
        this.T(a, "onAutonavCoundownStarted", this.a$));
    },
    m6 = function (a) {
      var b = a.J.Bn(!0, a.J.isFullscreen());
      g.yv(a.container.element, "ytp-autonav-endscreen-small-mode", a.Ig(b));
      g.yv(
        a.container.element,
        "ytp-autonav-endscreen-is-premium",
        !!a.suggestion && !!a.suggestion.eL
      );
      g.yv(
        a.J.getRootNode(),
        "ytp-autonav-endscreen-cancelled-state",
        !a.J.Gf()
      );
      g.yv(a.J.getRootNode(), "countdown-running", a.Qk());
      g.yv(a.container.element, "ytp-player-content", a.J.Gf());
      g.zs(a.overlay.element, { width: b.width + "px" });
      if (!a.Qk()) {
        a.J.Gf() ? Etb(a, Math.round(Ftb(a) / 1e3)) : Etb(a);
        b = !!a.suggestion && !!a.suggestion.ls;
        var c = a.J.Gf() || !b;
        g.yv(
          a.container.element,
          "ytp-autonav-endscreen-upnext-alternative-header-only",
          !c && b
        );
        g.yv(
          a.container.element,
          "ytp-autonav-endscreen-upnext-no-alternative-header",
          c && !b
        );
        g.DF(a.B, a.J.Gf());
        g.yv(a.element, "ytp-enable-w2w-color-transitions", Gtb(a));
      }
    },
    Dtb = function (a) {
      var b = Ftb(a),
        c = Math,
        d = c.min;
      var e = a.C ? Date.now() - a.C : 0;
      c = d.call(c, e, b);
      Etb(a, Math.ceil((b - c) / 1e3));
      500 >= b - c && a.Qk() ? a.select(!0) : a.Qk() && a.D.start();
    },
    Ftb = function (a) {
      if (a.J.isFullscreen()) {
        var b;
        a = null == (b = a.J.getVideoData()) ? void 0 : b.XB;
        return -1 === a || void 0 === a ? 8e3 : a;
      }
      return 0 <= a.J.Ps()
        ? a.J.Ps()
        : g.YI(a.J.U().experiments, "autoplay_time") || 1e4;
    },
    Ctb = function (a, b) {
      a.J.L("web_player_autonav_next_button_renderer");
      b = b.L9;
      a.G = null == b ? void 0 : b.navigationEndpoint;
      b = null == b ? void 0 : b.trackingParams;
      a.playButton && b && a.J.setTrackingParams(a.playButton.element, b);
    },
    Gtb = function (a) {
      var b;
      return !(
        null == (b = a.J.getVideoData()) || !b.watchToWatchTransitionRenderer
      );
    },
    Etb = function (a, b) {
      b = void 0 === b ? -1 : b;
      a = a.j.Fa("ytp-autonav-endscreen-upnext-header");
      g.Bf(a);
      if (0 <= b) {
        b = String(b);
        var c = "Video ti\u1ebfp theo sau $SECONDS".match(
            RegExp("\\$SECONDS", "gi")
          )[0],
          d = "Video ti\u1ebfp theo sau $SECONDS".indexOf(c);
        if (0 <= d) {
          a.appendChild(g.zf("Video ti\u1ebfp theo sau $SECONDS".slice(0, d)));
          var e = g.yf("span");
          g.rv(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
          g.Of(e, b);
          a.appendChild(e);
          a.appendChild(
            g.zf("Video ti\u1ebfp theo sau $SECONDS".slice(d + c.length))
          );
          return;
        }
      }
      g.Of(a, "Ti\u1ebfp theo");
    },
    n6 = function (a, b) {
      g.W.call(this, {
        I: "div",
        Ka: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"],
      });
      this.created = !1;
      this.player = a;
    },
    o6 = function (a) {
      g.W.call(this, {
        I: "div",
        Ka: ["ytp-upnext", "ytp-player-content"],
        X: { "aria-label": "{{aria_label}}" },
        V: [
          {
            I: "div",
            S: "ytp-cued-thumbnail-overlay-image",
            X: { style: "{{background}}" },
          },
          {
            I: "span",
            S: "ytp-upnext-top",
            V: [
              { I: "span", S: "ytp-upnext-header", xa: "Ti\u1ebfp theo" },
              { I: "span", S: "ytp-upnext-title", xa: "{{title}}" },
              { I: "span", S: "ytp-upnext-author", xa: "{{author}}" },
            ],
          },
          {
            I: "a",
            S: "ytp-upnext-autoplay-icon",
            X: {
              role: "button",
              href: "{{url}}",
              "aria-label": "Ph\u00e1t video ti\u1ebfp theo",
            },
            V: [
              {
                I: "svg",
                X: {
                  height: "100%",
                  version: "1.1",
                  viewBox: "0 0 72 72",
                  width: "100%",
                },
                V: [
                  {
                    I: "circle",
                    S: "ytp-svg-autoplay-circle",
                    X: {
                      cx: "36",
                      cy: "36",
                      fill: "#fff",
                      "fill-opacity": "0.3",
                      r: "31.5",
                    },
                  },
                  {
                    I: "circle",
                    S: "ytp-svg-autoplay-ring",
                    X: {
                      cx: "-36",
                      cy: "36",
                      "fill-opacity": "0",
                      r: "33.5",
                      stroke: "#FFFFFF",
                      "stroke-dasharray": "211",
                      "stroke-dashoffset": "-211",
                      "stroke-width": "4",
                      transform: "rotate(-90)",
                    },
                  },
                  {
                    I: "path",
                    S: "ytp-svg-fill",
                    X: {
                      d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z",
                    },
                  },
                ],
              },
            ],
          },
          {
            I: "span",
            S: "ytp-upnext-bottom",
            V: [
              { I: "span", S: "ytp-upnext-cancel" },
              {
                I: "span",
                S: "ytp-upnext-paused",
                xa: "T\u1ef1 \u0111\u1ed9ng ph\u00e1t b\u1ecb t\u1ea1m d\u1eebng",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.cancelButton = null;
      this.G = this.Fa("ytp-svg-autoplay-ring");
      this.C = this.notification = this.j = this.suggestion = null;
      this.D = new g.lv(this.HH, 5e3, this);
      this.B = 0;
      var b = this.Fa("ytp-upnext-cancel");
      this.cancelButton = new g.W({
        I: "button",
        Ka: ["ytp-upnext-cancel-button", "ytp-button"],
        X: {
          tabindex: "0",
          "aria-label": "H\u1ee7y t\u1ef1 \u0111\u1ed9ng ph\u00e1t",
        },
        xa: "H\u1ee7y",
      });
      g.O(this, this.cancelButton);
      this.cancelButton.listen("click", this.u3, this);
      this.cancelButton.Ja(b);
      this.cancelButton &&
        this.api.createClientVe(this.cancelButton.element, this, 115129);
      g.O(this, this.D);
      this.api.createClientVe(this.element, this, 18788);
      b = this.Fa("ytp-upnext-autoplay-icon");
      this.T(b, "click", this.v3);
      this.api.createClientVe(b, this, 115130);
      this.BT();
      this.T(a, "autonavvisibility", this.BT);
      this.T(a, "mdxnowautoplaying", this.M$);
      this.T(a, "mdxautoplaycanceled", this.N$);
      g.yv(this.element, "ytp-upnext-mobile", this.api.U().B);
    },
    Htb = function (a, b) {
      if (b) return b;
      if (a.api.isFullscreen()) {
        var c;
        a = null == (c = a.api.getVideoData()) ? void 0 : c.XB;
        return -1 === a || void 0 === a ? 8e3 : a;
      }
      return 0 <= a.api.Ps()
        ? a.api.Ps()
        : g.YI(a.api.U().experiments, "autoplay_time") || 1e4;
    },
    Itb = function (a, b) {
      b = Htb(a, b);
      var c = Math,
        d = c.min;
      var e = (0, g.$C)() - a.B;
      c = d.call(c, e, b);
      b = 0 === b ? 1 : Math.min(c / b, 1);
      a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
      1 <= b && a.Qk() && 3 !== a.api.getPresentingPlayerType()
        ? a.select(!0)
        : a.Qk() && a.j.start();
    },
    p6 = function (a) {
      n6.call(this, a, "autonav-endscreen");
      this.overlay = this.videoData = null;
      this.table = new g.W({
        I: "div",
        S: "ytp-suggestion-panel",
        V: [
          {
            I: "div",
            Ka: [
              "ytp-autonav-endscreen-upnext-header",
              "ytp-autonav-endscreen-more-videos",
            ],
            xa: "Video kh\u00e1c",
          },
        ],
      });
      this.N = new g.W({ I: "div", S: "ytp-suggestions-container" });
      this.videos = [];
      this.C = null;
      this.G = this.K = !1;
      this.B = new l6(this.player);
      g.O(this, this.B);
      this.B.Ja(this.element);
      a.getVideoData().Of
        ? (this.j = this.B)
        : ((this.j = new o6(a)),
          g.cU(this.player, this.j.element, 4),
          g.O(this, this.j));
      this.overlay = new g.W({
        I: "div",
        S: "ytp-autonav-overlay-cancelled-state",
      });
      g.O(this, this.overlay);
      this.overlay.Ja(this.element);
      this.D = new g.vK(this);
      g.O(this, this.D);
      g.O(this, this.table);
      this.table.Ja(this.element);
      this.table.show();
      g.O(this, this.N);
      this.N.Ja(this.table.element);
      this.hide();
    },
    q6 = function (a) {
      var b = a.Gf();
      b !== a.G &&
        ((a.G = b),
        a.player.publish("autonavvisibility"),
        a.G
          ? (a.B !== a.j && a.B.hide(), a.table.hide())
          : (a.B !== a.j && a.B.show(), a.table.show()));
    },
    r6 = function (a, b) {
      g.W.call(this, {
        I: "button",
        Ka: ["ytp-watch-on-youtube-button", "ytp-button"],
        xa: "{{content}}",
      });
      this.J = a;
      this.buttonType = this.buttonType = b;
      this.n0();
      2 === this.buttonType &&
        g.uv(this.element, "ytp-continue-watching-button");
      this.listen("click", this.onClick);
      this.listen("videodatachange", this.n0);
      g.DF(this, !0);
    },
    s6 = function (a, b) {
      n6.call(this, a, "embeds-lite-endscreen");
      this.J = a;
      this.Re = b;
      this.J.createClientVe(this.element, this, 156943);
      this.watchButton = new r6(a, 2);
      g.O(this, this.watchButton);
      this.watchButton.Ja(this.element);
      this.hide();
    },
    Jtb = function (a) {
      n6.call(this, a, "subscribecard-endscreen");
      this.j = new g.W({
        I: "div",
        S: "ytp-subscribe-card",
        V: [
          { I: "img", S: "ytp-author-image", X: { src: "{{profilePicture}}" } },
          {
            I: "div",
            S: "ytp-subscribe-card-right",
            V: [
              { I: "div", S: "ytp-author-name", xa: "{{author}}" },
              { I: "div", S: "html5-subscribe-button-container" },
            ],
          },
        ],
      });
      g.O(this, this.j);
      this.j.Ja(this.element);
      var b = a.getVideoData();
      this.subscribeButton = new g.ZV(
        "\u0110\u0103ng k\u00fd",
        null,
        "H\u1ee7y \u0111\u0103ng k\u00fd",
        null,
        !0,
        !1,
        b.zl,
        b.subscribed,
        "trailer-endscreen",
        null,
        a,
        !1
      );
      g.O(this, this.subscribeButton);
      this.subscribeButton.Ja(this.j.Fa("html5-subscribe-button-container"));
      this.T(a, "videodatachange", this.Sa);
      this.Sa();
      this.hide();
    },
    t6 = function (a) {
      var b = a.U(),
        c = g.tK || g.HR ? { style: "will-change: opacity" } : void 0,
        d = b.D,
        e = ["ytp-videowall-still"];
      b.B && e.push("ytp-videowall-show-text");
      g.W.call(this, {
        I: "a",
        Ka: e,
        X: {
          href: "{{url}}",
          target: d ? b.Y : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
        },
        V: [
          {
            I: "div",
            S: "ytp-videowall-still-image",
            X: { style: "{{background}}" },
          },
          {
            I: "span",
            S: "ytp-videowall-still-info",
            X: { "aria-hidden": "true" },
            V: [
              {
                I: "span",
                S: "ytp-videowall-still-info-bg",
                V: [
                  {
                    I: "span",
                    S: "ytp-videowall-still-info-content",
                    X: c,
                    V: [
                      {
                        I: "span",
                        S: "ytp-videowall-still-info-title",
                        xa: "{{title}}",
                      },
                      {
                        I: "span",
                        S: "ytp-videowall-still-info-author",
                        xa: "{{author_and_views}}",
                      },
                      {
                        I: "span",
                        S: "ytp-videowall-still-info-live",
                        xa: "Tr\u1ef1c ti\u1ebfp",
                      },
                      {
                        I: "span",
                        S: "ytp-videowall-still-info-duration",
                        xa: "{{duration}}",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            I: "span",
            Ka: [
              "ytp-videowall-still-listlabel-regular",
              "ytp-videowall-still-listlabel",
            ],
            X: { "aria-hidden": "true" },
            V: [
              { I: "span", S: "ytp-videowall-still-listlabel-icon" },
              "Danh s\u00e1ch ph\u00e1t",
              {
                I: "span",
                S: "ytp-videowall-still-listlabel-length",
                V: [" (", { I: "span", xa: "{{playlist_length}}" }, ")"],
              },
            ],
          },
          {
            I: "span",
            Ka: [
              "ytp-videowall-still-listlabel-mix",
              "ytp-videowall-still-listlabel",
            ],
            X: { "aria-hidden": "true" },
            V: [
              { I: "span", S: "ytp-videowall-still-listlabel-mix-icon" },
              "Tuy\u1ec3n t\u1eadp",
              {
                I: "span",
                S: "ytp-videowall-still-listlabel-length",
                xa: " (50+)",
              },
            ],
          },
        ],
      });
      this.suggestion = null;
      this.B = d;
      this.api = a;
      this.j = new g.vK(this);
      g.O(this, this.j);
      this.listen("click", this.onClick);
      this.listen("keypress", this.onKeyPress);
      this.j.T(a, "videodatachange", this.onVideoDataChange);
      a.createServerVe(this.element, this);
      this.onVideoDataChange();
    },
    u6 = function (a) {
      n6.call(this, a, "videowall-endscreen");
      var b = this;
      this.J = a;
      this.C = 0;
      this.stills = [];
      this.D = this.videoData = null;
      this.G = this.N = !1;
      this.Y = null;
      this.B = new g.vK(this);
      g.O(this, this.B);
      this.K = new g.lv(function () {
        g.uv(b.element, "ytp-show-tiles");
      }, 0);
      g.O(this, this.K);
      var c = new g.W({
        I: "button",
        Ka: ["ytp-button", "ytp-endscreen-previous"],
        X: { "aria-label": "Tr\u01b0\u1edbc" },
        V: [g.JF()],
      });
      g.O(this, c);
      c.Ja(this.element);
      c.listen("click", this.z3, this);
      this.table = new g.AF({ I: "div", S: "ytp-endscreen-content" });
      g.O(this, this.table);
      this.table.Ja(this.element);
      c = new g.W({
        I: "button",
        Ka: ["ytp-button", "ytp-endscreen-next"],
        X: { "aria-label": "Ti\u1ebfp theo" },
        V: [g.KF()],
      });
      g.O(this, c);
      c.Ja(this.element);
      c.listen("click", this.y3, this);
      a.getVideoData().Of ? (this.j = new l6(a, !0)) : (this.j = new o6(a));
      g.O(this, this.j);
      g.cU(this.player, this.j.element, 4);
      a.createClientVe(this.element, this, 158789);
      this.hide();
    },
    v6 = function (a) {
      return g.dU(a.player) && a.RC() && !a.D;
    },
    w6 = function (a) {
      var b = a.Gf();
      b !== a.N && ((a.N = b), a.player.publish("autonavvisibility"));
    },
    x6 = function (a) {
      n6.call(this, a, "watch-again-on-youtube-endscreen");
      this.watchButton = new r6(a, 1);
      g.O(this, this.watchButton);
      this.watchButton.Ja(this.element);
      g.Rhb(a) &&
        ((this.j = new g.h2(a)),
        g.O(this, this.j),
        (this.B = new g.W({
          I: "div",
          Ka: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
          X: { tabIndex: "-1" },
          V: [this.j],
        })),
        g.O(this, this.B),
        this.j.Ja(this.B.element),
        this.B.Ja(this.element));
      a.createClientVe(this.element, this, 156914);
      this.hide();
    },
    Ntb = function (a) {
      g.qV.call(this, a);
      var b = this;
      this.endScreen = null;
      this.B = this.j = this.C = this.D = !1;
      this.listeners = new g.vK(this);
      g.O(this, this.listeners);
      var c = a.U(),
        d = a.getVideoData();
      d = d && 0 !== d.limitedPlaybackDurationInSeconds;
      g.aC(g.QR(c)) && d && !g.$T(a)
        ? ((this.B = !0), (this.endScreen = new s6(a, g.QT(a))))
        : a.Yc()
        ? (this.endScreen = new x6(a))
        : Ktb(a)
        ? ((this.D = !0),
          Ltb(this),
          this.j ? (this.endScreen = new p6(a)) : (this.endScreen = new u6(a)))
        : c.Og
        ? (this.endScreen = new Jtb(a))
        : (this.endScreen = new n6(a));
      g.O(this, this.endScreen);
      g.cU(a, this.endScreen.element, 4);
      Mtb(this);
      this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
      this.listeners.T(a, g.EJ("endscreen"), function (e) {
        b.onCueRangeEnter(e);
      });
      this.listeners.T(a, g.FJ("endscreen"), function (e) {
        b.onCueRangeExit(e);
      });
    },
    Ltb = function (a) {
      var b = a.player.getVideoData();
      if (!b || (a.j === b.Hl && a.C === b.Of)) return !1;
      a.j = b.Hl;
      a.C = b.Of;
      return !0;
    },
    Ktb = function (a) {
      a = a.U();
      return a.wd && !a.Og;
    },
    Mtb = function (a) {
      a.player.qf("endscreen");
      var b = a.player.getVideoData();
      b = new g.DJ(Math.max(1e3 * (b.lengthSeconds - 10), 0), 0x8000000000000, {
        id: "preload",
        namespace: "endscreen",
      });
      var c = new g.DJ(0x8000000000000, 0x8000000000000, {
        id: "load",
        priority: 8,
        namespace: "endscreen",
      });
      a.player.jf([b, c]);
    };
  g.VT.prototype.Ps = g.fa(15, function () {
    return this.app.Ps();
  });
  g.K0.prototype.Ps = g.fa(14, function () {
    return this.getVideoData().oV;
  });
  g.RT.prototype.Hr = g.fa(13, function (a) {
    this.ri().Hr(a);
  });
  g.vW.prototype.Hr = g.fa(12, function (a) {
    this.j !== a && ((this.j = a), this.Sa());
  });
  g.DX.prototype.Hr = g.fa(11, function (a) {
    this.overflowButton && this.overflowButton.Hr(a);
  });
  g.RT.prototype.Ir = g.fa(10, function (a) {
    this.ri().Ir(a);
  });
  g.AW.prototype.Ir = g.fa(9, function (a) {
    this.j !== a && ((this.j = a), this.Sa());
  });
  g.DX.prototype.Ir = g.fa(8, function (a) {
    this.shareButton && this.shareButton.Ir(a);
  });
  g.RT.prototype.sB = g.fa(7, function (a) {
    this.ri().sB(a);
  });
  g.SV.prototype.sB = g.fa(6, function (a) {
    this.ZQ !== a && ((this.ZQ = a), this.fq());
  });
  g.RT.prototype.rB = g.fa(5, function (a) {
    this.ri().rB(a);
  });
  g.DX.prototype.rB = g.fa(4, function (a) {
    this.YQ !== a && ((this.YQ = a), this.eq());
  });
  g.y(k6, g.W);
  k6.prototype.select = function () {
    this.J.Go(
      this.suggestion.videoId,
      this.suggestion.sessionData,
      this.suggestion.playlistId,
      void 0,
      void 0,
      this.suggestion.nD || void 0
    ) && this.J.logClick(this.element);
  };
  k6.prototype.onClick = function (a) {
    g.tU(a, this.J, this.j, this.suggestion.sessionData || void 0) &&
      this.select();
  };
  k6.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        a.defaultPrevented || (this.select(), a.preventDefault());
    }
  };
  g.y(l6, g.W);
  g.k = l6.prototype;
  g.k.OG = function (a) {
    this.suggestion !== a &&
      ((this.suggestion = a),
      j6(this.j, a),
      this.playButton.updateValue("url", this.suggestion.Lk()),
      m6(this));
  };
  g.k.Qk = function () {
    return 0 < this.C;
  };
  g.k.zB = function () {
    this.Qk() ||
      ((this.C = Date.now()),
      Dtb(this),
      Btb(this.J, Ftb(this)),
      g.yv(this.J.getRootNode(), "countdown-running", this.Qk()));
  };
  g.k.ax = function () {
    this.Zp();
    Dtb(this);
    var a = this.j.Fa("ytp-autonav-endscreen-upnext-header");
    a && g.Of(a, "Ti\u1ebfp theo");
  };
  g.k.Zp = function () {
    this.Qk() && (this.D.stop(), (this.C = 0));
  };
  g.k.select = function (a) {
    this.J.nextVideo(!1, void 0 === a ? !1 : a);
    this.Zp();
  };
  g.k.AT = function (a) {
    g.tU(a, this.J) &&
      (a.currentTarget === this.playButton.element
        ? this.J.logClick(this.playButton.element)
        : a.currentTarget ===
            this.j.Fa("ytp-autonav-endscreen-link-container") &&
          ((a = this.j.Fa("ytp-autonav-endscreen-link-container")),
          this.J.logVisibility(a, !0),
          this.J.logClick(a)),
      this.J.L("web_player_autonav_next_button_renderer") && this.G
        ? (this.J.gb("innertubeCommand", this.G), this.Zp())
        : this.select());
  };
  g.k.t3 = function () {
    this.J.logClick(this.cancelButton.element);
    g.XT(this.J, !0);
    this.cancelCommand && this.J.gb("innertubeCommand", this.cancelCommand);
  };
  g.k.onVideoDataChange = function (a, b) {
    this.J.L("web_player_autonav_next_button_renderer") && Ctb(this, b);
    var c;
    this.cancelCommand = null == (c = b.V8) ? void 0 : c.command;
  };
  g.k.a$ = function (a) {
    if (Gtb(this)) {
      var b = this.J.getVideoData().watchToWatchTransitionRenderer,
        c = null == b ? void 0 : b.fromColorPaletteDark;
      b = null == b ? void 0 : b.toColorPaletteDark;
      if (c && b) {
        var d = this.element;
        d.style.setProperty("--w2w-start-background-color", g.KG(c.surgeColor));
        d.style.setProperty(
          "--w2w-start-primary-text-color",
          g.KG(c.primaryTitleColor)
        );
        d.style.setProperty(
          "--w2w-start-secondary-text-color",
          g.KG(c.secondaryTitleColor)
        );
        d.style.setProperty("--w2w-end-background-color", g.KG(b.surgeColor));
        d.style.setProperty(
          "--w2w-end-primary-text-color",
          g.KG(b.primaryTitleColor)
        );
        d.style.setProperty(
          "--w2w-end-secondary-text-color",
          g.KG(b.secondaryTitleColor)
        );
        d.style.setProperty("--w2w-animation-duration", a + "ms");
      }
      g.yv(this.element, "ytp-w2w-animate", !0);
    }
  };
  g.k.s3 = function (a) {
    this.J.L("web_autonav_color_transition") &&
      2 !== a &&
      g.yv(this.element, "ytp-w2w-animate", !1);
  };
  g.k.zT = function () {
    var a = this.J.Gf();
    this.K && this.Eb !== a && g.DF(this, a);
    m6(this);
    this.J.logVisibility(this.container.element, a);
    this.J.logVisibility(this.cancelButton.element, a);
    this.J.logVisibility(this.j.Fa("ytp-autonav-endscreen-link-container"), a);
    this.J.logVisibility(this.playButton.element, a);
  };
  g.k.Ig = function (a) {
    return 400 > a.width || 459 > a.height;
  };
  g.y(n6, g.W);
  g.k = n6.prototype;
  g.k.create = function () {
    this.created = !0;
  };
  g.k.destroy = function () {
    this.created = !1;
  };
  g.k.RC = function () {
    return !1;
  };
  g.k.Gf = function () {
    return !1;
  };
  g.k.vY = function () {
    return !1;
  };
  g.y(o6, g.W);
  g.k = o6.prototype;
  g.k.HH = function () {
    this.notification &&
      (this.D.stop(),
      this.Pc(this.C),
      (this.C = null),
      this.notification.close(),
      (this.notification = null));
  };
  g.k.OG = function (a) {
    this.suggestion = a;
    j6(this, a, "hqdefault.jpg");
  };
  g.k.BT = function () {
    g.DF(this, this.api.Gf());
    this.api.logVisibility(this.element, this.api.Gf());
    this.api.logVisibility(this.Fa("ytp-upnext-autoplay-icon"), this.api.Gf());
    this.cancelButton &&
      this.api.logVisibility(this.cancelButton.element, this.api.Gf());
  };
  g.k.V$ = function () {
    window.focus();
    this.HH();
  };
  g.k.zB = function (a) {
    var b = this;
    this.Qk() ||
      (g.jE("a11y-announce", "Ti\u1ebfp theo " + this.suggestion.title),
      (this.B = (0, g.$C)()),
      (this.j = new g.lv(function () {
        Itb(b, a);
      }, 25)),
      Itb(this, a),
      Btb(this.api, Htb(this, a)));
    g.wv(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.hide = function () {
    g.W.prototype.hide.call(this);
  };
  g.k.Qk = function () {
    return !!this.j;
  };
  g.k.ax = function () {
    this.Zp();
    this.B = (0, g.$C)();
    Itb(this);
    g.uv(this.element, "ytp-upnext-autoplay-paused");
  };
  g.k.Zp = function () {
    this.Qk() && (this.j.dispose(), (this.j = null));
  };
  g.k.select = function (a) {
    a = void 0 === a ? !1 : a;
    if (
      this.api.U().L("autonav_notifications") &&
      a &&
      window.Notification &&
      "function" === typeof document.hasFocus
    ) {
      var b = Notification.permission;
      "default" === b
        ? Notification.requestPermission()
        : "granted" !== b ||
          document.hasFocus() ||
          (this.HH(),
          (this.notification = new Notification("Ti\u1ebfp theo", {
            body: this.suggestion.title,
            icon: this.suggestion.Wg(),
          })),
          (this.C = this.T(this.notification, "click", this.V$)),
          this.D.start());
    }
    this.Zp();
    this.api.nextVideo(!1, a);
  };
  g.k.v3 = function (a) {
    !g.Nf(this.cancelButton.element, a.target) &&
      g.tU(a, this.api) &&
      (this.api.Gf() && this.api.logClick(this.Fa("ytp-upnext-autoplay-icon")),
      this.select());
  };
  g.k.u3 = function () {
    this.api.Gf() &&
      this.cancelButton &&
      this.api.logClick(this.cancelButton.element);
    g.XT(this.api, !0);
  };
  g.k.M$ = function (a) {
    this.api.getPresentingPlayerType();
    this.show();
    this.zB(a);
  };
  g.k.N$ = function () {
    this.api.getPresentingPlayerType();
    this.Zp();
    this.hide();
  };
  g.k.va = function () {
    this.Zp();
    this.HH();
    g.W.prototype.va.call(this);
  };
  g.y(p6, n6);
  g.k = p6.prototype;
  g.k.create = function () {
    n6.prototype.create.call(this);
    this.D.T(this.player, "appresize", this.eC);
    this.D.T(this.player, "onVideoAreaChange", this.eC);
    this.D.T(this.player, "videodatachange", this.onVideoDataChange);
    this.D.T(this.player, "autonavchange", this.CT);
    this.D.T(this.player, "onAutonavCancelled", this.w3);
    this.onVideoDataChange();
  };
  g.k.show = function () {
    n6.prototype.show.call(this);
    (this.K || (this.C && this.C !== this.videoData.clientPlaybackNonce)) &&
      g.XT(this.player, !1);
    g.dU(this.player) && this.RC() && !this.C
      ? (q6(this),
        2 === this.videoData.autonavState
          ? 3 === this.player.getVisibilityState()
            ? this.j.select(!0)
            : this.j.zB()
          : 3 === this.videoData.autonavState && this.j.ax())
      : (g.XT(this.player, !0), q6(this));
    this.eC();
  };
  g.k.hide = function () {
    n6.prototype.hide.call(this);
    this.j.ax();
    q6(this);
  };
  g.k.eC = function () {
    var a = this.player.Bn(!0, this.player.isFullscreen());
    q6(this);
    m6(this.B);
    g.yv(this.element, "ytp-autonav-cancelled-small-mode", this.Ig(a));
    g.yv(this.element, "ytp-autonav-cancelled-tiny-mode", this.iJ(a));
    g.yv(
      this.element,
      "ytp-autonav-cancelled-mini-mode",
      400 >= a.width || 360 >= a.height
    );
    this.overlay && g.zs(this.overlay.element, { width: a.width + "px" });
    if (!this.G)
      for (a = 0; a < this.videos.length; a++)
        g.yv(
          this.videos[a].element,
          "ytp-suggestion-card-with-margin",
          1 === a % 2
        );
  };
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData();
    if (this.videoData !== a && a) {
      this.videoData = a;
      if (
        ((a = this.videoData.suggestions) && a.length) ||
        this.player.L("web_player_autonav_empty_suggestions_fix")
      ) {
        var b = g.XS(this.videoData);
        b && (this.j.OG(b), this.j !== this.B && this.B.OG(b));
      }
      if (a && a.length)
        for (b = 0; b < Otb.length; ++b) {
          var c = Otb[b];
          if (a && a[c]) {
            this.videos[b] = new k6(this.player);
            var d = this.videos[b];
            c = a[c];
            d.suggestion !== c && ((d.suggestion = c), j6(d, c));
            g.O(this, this.videos[b]);
            this.videos[b].Ja(this.N.element);
          }
        }
      this.eC();
    }
  };
  g.k.CT = function (a) {
    1 === a
      ? ((this.K = !1),
        (this.C = this.videoData.clientPlaybackNonce),
        this.j.Zp(),
        this.Eb && this.eC())
      : ((this.K = !0),
        this.Gf() && (2 === a ? this.j.zB() : 3 === a && this.j.ax()));
  };
  g.k.w3 = function (a) {
    a ? this.CT(1) : ((this.C = null), (this.K = !1));
  };
  g.k.RC = function () {
    return 1 !== this.videoData.autonavState;
  };
  g.k.Ig = function (a) {
    return (
      (910 > a.width || 459 > a.height) &&
      !this.iJ(a) &&
      !(400 >= a.width || 360 >= a.height)
    );
  };
  g.k.iJ = function (a) {
    return 800 > a.width && !(400 >= a.width || 360 >= a.height);
  };
  g.k.Gf = function () {
    return this.Eb && g.dU(this.player) && this.RC() && !this.C;
  };
  var Otb = [1, 3, 2, 4];
  g.y(r6, g.W);
  g.k = r6.prototype;
  g.k.n0 = function () {
    switch (this.buttonType) {
      case 1:
        var a = "Xem l\u1ea1i tr\u00ean YouTube";
        var b = 156915;
        break;
      case 2:
        a = "Ti\u1ebfp t\u1ee5c xem tr\u00ean YouTube";
        b = 156942;
        break;
      default:
        (a = "Ti\u1ebfp t\u1ee5c xem tr\u00ean YouTube"), (b = 156942);
    }
    this.update({ content: a });
    this.J.hasVe(this.element) && this.J.destroyVe(this.element);
    this.J.createClientVe(this.element, this, b);
  };
  g.k.onClick = function (a) {
    this.J.L("web_player_log_click_before_generating_ve_conversion_params") &&
      this.J.logClick(this.element);
    g.uU(this.getVideoUrl(), this.J, a);
    this.J.L("web_player_log_click_before_generating_ve_conversion_params") ||
      this.J.logClick(this.element);
  };
  g.k.getVideoUrl = function () {
    var a = !0;
    switch (this.buttonType) {
      case 1:
        a = !0;
        break;
      case 2:
        a = !1;
    }
    a = this.J.getVideoUrl(a, !1, !1, !0);
    var b = this.J.U();
    if (g.IR(b)) {
      var c = {};
      g.IR(b) && g.KT(this.J, "addEmbedsConversionTrackingParams", [c]);
      a: {
        switch (this.buttonType) {
          case 2:
            b = "emb_ytp_continue_watching";
            break a;
        }
        b = "emb_ytp_watch_again";
      }
      g.eP(c, b);
      a = g.Mn(a, c);
    }
    return a;
  };
  g.k.logVisibility = function () {
    this.J.logVisibility(this.element, this.Eb && this.Z);
  };
  g.k.show = function () {
    g.W.prototype.show.call(this);
    this.logVisibility();
  };
  g.k.hide = function () {
    g.W.prototype.hide.call(this);
    this.logVisibility();
  };
  g.k.Hc = function (a) {
    g.W.prototype.Hc.call(this, a);
    this.logVisibility();
  };
  g.y(s6, n6);
  s6.prototype.show = function () {
    3 !== this.player.getPlayerState() &&
      (n6.prototype.show.call(this),
      this.Re.rB(!0),
      this.Re.Ir(!0),
      this.J.U().ge || this.Re.Hr(!0),
      this.J.logVisibility(this.element, !0),
      this.watchButton.Hc(!0));
  };
  s6.prototype.hide = function () {
    n6.prototype.hide.call(this);
    this.Re.rB(!1);
    this.Re.Ir(!1);
    this.Re.Hr(!1);
    this.J.logVisibility(this.element, !1);
    this.watchButton.Hc(!1);
  };
  g.y(Jtb, n6);
  Jtb.prototype.Sa = function () {
    var a = this.player.getVideoData();
    this.j.update({ profilePicture: a.profilePicture, author: a.author });
    this.subscribeButton.channelId = a.zl;
    var b = this.subscribeButton;
    a.subscribed ? b.j() : b.B();
  };
  g.y(t6, g.W);
  t6.prototype.select = function () {
    this.api.Go(
      this.suggestion.videoId,
      this.suggestion.sessionData,
      this.suggestion.playlistId,
      void 0,
      void 0,
      this.suggestion.nD || void 0
    ) && this.api.logClick(this.element);
  };
  t6.prototype.onClick = function (a) {
    if (
      g.IR(this.api.U()) &&
      this.api.L("web_player_log_click_before_generating_ve_conversion_params")
    ) {
      this.api.logClick(this.element);
      var b = this.suggestion.Lk(),
        c = {};
      g.rVa(this.api, c, "emb_rel_end");
      b = g.Mn(b, c);
      g.uU(b, this.api, a);
    } else
      g.tU(a, this.api, this.B, this.suggestion.sessionData || void 0) &&
        this.select();
  };
  t6.prototype.onKeyPress = function (a) {
    switch (a.keyCode) {
      case 13:
      case 32:
        a.defaultPrevented || (this.select(), a.preventDefault());
    }
  };
  t6.prototype.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.U();
    this.B = a.If ? !1 : b.D;
  };
  g.y(u6, n6);
  g.k = u6.prototype;
  g.k.create = function () {
    n6.prototype.create.call(this);
    var a = this.player.getVideoData();
    a && (this.videoData = a);
    this.kq();
    this.B.T(this.player, "appresize", this.kq);
    this.B.T(this.player, "onVideoAreaChange", this.kq);
    this.B.T(this.player, "videodatachange", this.onVideoDataChange);
    this.B.T(this.player, "autonavchange", this.UL);
    this.B.T(this.player, "onAutonavCancelled", this.x3);
    a = this.videoData.autonavState;
    a !== this.Y && this.UL(a);
    this.B.T(this.element, "transitionend", this.qba);
  };
  g.k.destroy = function () {
    g.pC(this.B);
    g.wb(this.stills);
    this.stills = [];
    n6.prototype.destroy.call(this);
    g.wv(this.element, "ytp-show-tiles");
    this.K.stop();
    this.Y = this.videoData.autonavState;
  };
  g.k.RC = function () {
    return 1 !== this.videoData.autonavState;
  };
  g.k.show = function () {
    var a = this.Eb;
    n6.prototype.show.call(this);
    g.wv(this.element, "ytp-show-tiles");
    this.player.U().B ? g.nv(this.K) : this.K.start();
    (this.G || (this.D && this.D !== this.videoData.clientPlaybackNonce)) &&
      g.XT(this.player, !1);
    v6(this)
      ? (w6(this),
        2 === this.videoData.autonavState
          ? 3 === this.player.getVisibilityState()
            ? this.j.select(!0)
            : this.j.zB()
          : 3 === this.videoData.autonavState && this.j.ax())
      : (g.XT(this.player, !0), w6(this));
    a !== this.Eb && this.player.logVisibility(this.element, !0);
  };
  g.k.hide = function () {
    var a = this.Eb;
    n6.prototype.hide.call(this);
    this.j.ax();
    w6(this);
    a !== this.Eb && this.player.logVisibility(this.element, !1);
  };
  g.k.qba = function (a) {
    a.target === this.element && this.kq();
  };
  g.k.kq = function () {
    var a, b, c, d;
    var e = (
      null == (a = this.videoData)
        ? 0
        : null == (b = a.suggestions)
        ? 0
        : b.length
    )
      ? null == (c = this.videoData)
        ? void 0
        : c.suggestions
      : [null == (d = this.videoData) ? void 0 : g.XS(d)];
    if (e.length) {
      g.uv(this.element, "ytp-endscreen-paginate");
      var f = this.J.Bn(!0, this.J.isFullscreen());
      if ((a = g.QT(this.J))) (a = a.wh() ? 48 : 32), (f.width -= 2 * a);
      var h = f.width / f.height;
      d = 96 / 54;
      b = a = 2;
      var l = Math.max(f.width / 96, 2),
        m = Math.max(f.height / 54, 2);
      c = e.length;
      var n = Math.pow(2, 2);
      var p = c * n + (Math.pow(2, 2) - n);
      p += Math.pow(2, 2) - n;
      for (p -= n; 0 < p && (a < l || b < m); ) {
        var q = a / 2,
          r = b / 2,
          t = a <= l - 2 && p >= r * n,
          v = b <= m - 2 && p >= q * n;
        if ((((q + 1) / r) * d) / h > h / ((q / (r + 1)) * d) && v)
          (p -= q * n), (b += 2);
        else if (t) (p -= r * n), (a += 2);
        else if (v) (p -= q * n), (b += 2);
        else break;
      }
      d = !1;
      p >= 3 * n && 6 >= c * n - p && (4 <= b || 4 <= a) && (d = !0);
      n = 96 * a;
      p = 54 * b;
      h = n / p < h ? f.height / p : f.width / n;
      h = Math.min(h, 2);
      n = Math.floor(Math.min(f.width, n * h));
      p = Math.floor(Math.min(f.height, p * h));
      f = this.table.element;
      f.ariaLive = "polite";
      g.Ks(f, n, p);
      g.zs(f, { marginLeft: n / -2 + "px", marginTop: p / -2 + "px" });
      this.j.OG(g.XS(this.videoData));
      this.j instanceof l6 && m6(this.j);
      g.yv(this.element, "ytp-endscreen-takeover", v6(this));
      w6(this);
      n += 4;
      p += 4;
      h = 0;
      f.ariaBusy = "true";
      for (l = 0; l < a; l++)
        for (m = 0; m < b; m++)
          if (
            ((q = h),
            (t = 0),
            d && l >= a - 2 && m >= b - 2
              ? (t = 1)
              : 0 === m % 2 &&
                0 === l % 2 &&
                (2 > m && 2 > l ? 0 === m && 0 === l && (t = 2) : (t = 2)),
            (q = g.Ee(q + this.C, c)),
            0 !== t)
          ) {
            r = this.stills[h];
            r ||
              ((r = new t6(this.player)),
              (this.stills[h] = r),
              f.appendChild(r.element));
            v = Math.floor((p * m) / b);
            var w = Math.floor((n * l) / a),
              A = Math.floor((p * (m + t)) / b) - v - 4,
              C = Math.floor((n * (l + t)) / a) - w - 4;
            g.Gs(r.element, w, v);
            g.Ks(r.element, C, A);
            g.zs(r.element, "transitionDelay", (m + l) / 20 + "s");
            g.yv(r.element, "ytp-videowall-still-mini", 1 === t);
            g.yv(r.element, "ytp-videowall-still-large", 2 < t);
            t = Math.max(C, A);
            g.yv(r.element, "ytp-videowall-still-round-large", 256 <= t);
            g.yv(
              r.element,
              "ytp-videowall-still-round-medium",
              96 < t && 256 > t
            );
            g.yv(r.element, "ytp-videowall-still-round-small", 96 >= t);
            q = e[q];
            r.suggestion !== q &&
              ((r.suggestion = q),
              (t = r.api.U()),
              (v = g.tv(r.element, "ytp-videowall-still-large")
                ? "hqdefault.jpg"
                : "mqdefault.jpg"),
              j6(r, q, v),
              g.IR(t) &&
                !r.api.L(
                  "web_player_log_click_before_generating_ve_conversion_params"
                ) &&
                ((t = q.Lk()),
                (v = {}),
                g.KT(r.api, "addEmbedsConversionTrackingParams", [v]),
                (t = g.Mn(t, g.eP(v, "emb_rel_end"))),
                r.updateValue("url", t)),
              (q = (q = q.sessionData) && q.itct) &&
                r.api.setTrackingParams(r.element, q));
            h++;
          }
      f.ariaBusy = "false";
      g.yv(this.element, "ytp-endscreen-paginate", h < c);
      for (e = this.stills.length - 1; e >= h; e--)
        (a = this.stills[e]), g.Ff(a.element), g.vb(a);
      this.stills.length = h;
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.player.getVideoData(1);
    this.videoData !== a &&
      (null != a && g.XS(a)
        ? ((this.C = 0), (this.videoData = a), this.kq())
        : this.player.ma("missg", {
            vid: (null == a ? void 0 : a.videoId) || "",
            cpn: (null == a ? void 0 : a.clientPlaybackNonce) || "",
          }));
  };
  g.k.y3 = function () {
    this.C += this.stills.length;
    this.kq();
  };
  g.k.z3 = function () {
    this.C -= this.stills.length;
    this.kq();
  };
  g.k.vY = function () {
    return this.j.Qk();
  };
  g.k.UL = function (a) {
    1 === a
      ? ((this.G = !1),
        (this.D = this.videoData.clientPlaybackNonce),
        this.j.Zp(),
        this.Eb && this.kq())
      : ((this.G = !0),
        this.Eb &&
          v6(this) &&
          (2 === a ? this.j.zB() : 3 === a && this.j.ax()));
  };
  g.k.x3 = function (a) {
    if (a) {
      for (a = 0; a < this.stills.length; a++)
        this.J.logVisibility(this.stills[a].element, !0);
      this.UL(1);
    } else (this.D = null), (this.G = !1);
    this.kq();
  };
  g.k.Gf = function () {
    return this.Eb && v6(this);
  };
  g.y(x6, n6);
  x6.prototype.dE = function () {
    var a;
    return null == (a = this.j) ? void 0 : a.dE();
  };
  x6.prototype.show = function () {
    if (3 !== this.player.getPlayerState()) {
      n6.prototype.show.call(this);
      var a = this.B;
      if (a) {
        var b = this.j.dE();
        g.yv(this.element, "ytp-shorts-branded-ui", b);
        b ? a.show() : a.hide();
      }
      var c;
      null == (c = g.QT(this.player)) || c.sB(!0);
      this.player.logVisibility(this.element, !0);
      this.watchButton.Hc(!0);
    }
  };
  x6.prototype.hide = function () {
    n6.prototype.hide.call(this);
    var a;
    null == (a = g.QT(this.player)) || a.sB(!1);
    this.player.logVisibility(this.element, !1);
    this.watchButton.Hc(!1);
  };
  g.y(Ntb, g.qV);
  g.k = Ntb.prototype;
  g.k.du = function () {
    var a = this.player.getVideoData(),
      b = a.mutedAutoplay;
    if ((this.player.Yc() || this.B) && !b) return !0;
    var c;
    var d = !!(
      (null == a ? 0 : g.XS(a)) ||
      (null == a ? 0 : null == (c = a.suggestions) ? 0 : c.length)
    );
    d = !Ktb(this.player) || d;
    a = a.xj;
    c = this.player.BD();
    return d && !a && !c && !b;
  };
  g.k.Gf = function () {
    return this.endScreen.Gf();
  };
  g.k.N8 = function () {
    return this.Gf() ? this.endScreen.vY() : !1;
  };
  g.k.va = function () {
    this.player.qf("endscreen");
    g.qV.prototype.va.call(this);
  };
  g.k.load = function () {
    var a = this.player.getVideoData();
    var b = a.transitionEndpointAtEndOfStream;
    if (b && b.videoId) {
      var c = this.player.yb().Ee.get("heartbeat"),
        d = g.XS(a);
      !d || b.videoId !== d.videoId || a.pT
        ? (this.player.Go(b.videoId, void 0, void 0, !0, !0, b),
          c &&
            c.uJ(
              "HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END",
              "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"
            ),
          (a = !0))
        : (a = !1);
    } else a = !1;
    a || (g.qV.prototype.load.call(this), this.endScreen.show());
  };
  g.k.unload = function () {
    g.qV.prototype.unload.call(this);
    this.endScreen.hide();
    this.endScreen.destroy();
  };
  g.k.onCueRangeEnter = function (a) {
    this.du() &&
      (this.endScreen.created || this.endScreen.create(),
      "load" === a.getId() && this.load());
  };
  g.k.onCueRangeExit = function (a) {
    "load" === a.getId() && this.loaded && this.unload();
  };
  g.k.onVideoDataChange = function () {
    Mtb(this);
    this.D &&
      Ltb(this) &&
      (this.endScreen &&
        (this.endScreen.hide(),
        this.endScreen.created && this.endScreen.destroy(),
        this.endScreen.dispose()),
      this.j
        ? (this.endScreen = new p6(this.player))
        : (this.endScreen = new u6(this.player)),
      g.O(this, this.endScreen),
      g.cU(this.player, this.endScreen.element, 4));
  };
  g.pV("endscreen", Ntb);
})(_yt_player);
