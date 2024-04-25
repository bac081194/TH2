(function (g) {
  var window = this;
  ("use strict");
  var Lub = function (a, b) {
      g.W.call(this, {
        I: "button",
        Ka: [
          "ytp-miniplayer-expand-watch-page-button",
          "ytp-button",
          "ytp-miniplayer-button-top-left",
        ],
        X: {
          title: "{{title}}",
          "data-tooltip-target-id": "ytp-miniplayer-expand-watch-page-button",
          "aria-keyshortcuts": "i",
          "data-title-no-tooltip": "{{data-title-no-tooltip}}",
        },
        V: [
          {
            I: "svg",
            X: {
              height: "24px",
              version: "1.1",
              viewBox: "0 0 24 24",
              width: "24px",
            },
            V: [
              {
                I: "g",
                X: {
                  fill: "none",
                  "fill-rule": "evenodd",
                  stroke: "none",
                  "stroke-width": "1",
                },
                V: [
                  {
                    I: "g",
                    X: {
                      transform:
                        "translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ",
                    },
                    V: [
                      {
                        I: "path",
                        X: {
                          d: "M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
                          fill: "#fff",
                          "fill-rule": "nonzero",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      this.J = a;
      this.listen("click", this.onClick, this);
      this.updateValue("title", g.UT(a, "M\u1edf r\u1ed9ng", "i"));
      this.update({ "data-title-no-tooltip": "M\u1edf r\u1ed9ng" });
      this.addOnDisposeCallback(g.ST(b.Le(), this.element));
    },
    Mub = function (a) {
      g.W.call(this, { I: "div", S: "ytp-miniplayer-ui" });
      this.G = !1;
      this.player = a;
      this.T(a, "minimized", this.fh);
      this.T(a, "onStateChange", this.K3);
    },
    Nub = function (a) {
      g.qV.call(this, a);
      this.B = new g.vK(this);
      this.j = new Mub(this.player);
      this.j.hide();
      g.cU(this.player, this.j.element, 4);
      a.isMinimized() &&
        (this.load(), g.yv(a.getRootNode(), "ytp-player-minimized", !0));
    };
  g.y(Lub, g.W);
  Lub.prototype.onClick = function () {
    this.J.gb("onExpandMiniplayer");
  };
  g.y(Mub, g.W);
  g.k = Mub.prototype;
  g.k.show = function () {
    this.j = new g.jv(this.I3, null, this);
    this.j.start();
    if (!this.G) {
      this.tooltip = new g.CX(this.player, this);
      g.O(this, this.tooltip);
      g.cU(this.player, this.tooltip.element, 4);
      this.tooltip.scale = 0.6;
      this.Wd = new g.VV(this.player);
      g.O(this, this.Wd);
      this.B = new g.W({ I: "div", S: "ytp-miniplayer-scrim" });
      g.O(this, this.B);
      this.B.Ja(this.element);
      this.T(this.B.element, "click", this.FT);
      var a = new g.W({
        I: "button",
        Ka: ["ytp-miniplayer-close-button", "ytp-button"],
        X: { "aria-label": "\u0110o\u0301ng" },
        V: [g.LF()],
      });
      g.O(this, a);
      a.Ja(this.B.element);
      this.T(a.element, "click", this.ET);
      a = new Lub(this.player, this);
      g.O(this, a);
      a.Ja(this.B.element);
      this.C = new g.W({ I: "div", S: "ytp-miniplayer-controls" });
      g.O(this, this.C);
      this.C.Ja(this.B.element);
      this.T(this.C.element, "click", this.FT);
      var b = new g.W({ I: "div", S: "ytp-miniplayer-button-container" });
      g.O(this, b);
      b.Ja(this.C.element);
      a = new g.W({ I: "div", S: "ytp-miniplayer-play-button-container" });
      g.O(this, a);
      a.Ja(this.C.element);
      var c = new g.W({ I: "div", S: "ytp-miniplayer-button-container" });
      g.O(this, c);
      c.Ja(this.C.element);
      this.N = new g.PW(this.player, this, !1);
      g.O(this, this.N);
      this.N.Ja(b.element);
      b = new g.OW(this.player, this);
      g.O(this, b);
      b.Ja(a.element);
      this.nextButton = new g.PW(this.player, this, !0);
      g.O(this, this.nextButton);
      this.nextButton.Ja(c.element);
      this.K = new g.vX(this.player, this);
      g.O(this, this.K);
      this.K.Ja(this.B.element);
      this.progressBar = new g.UW(this.player, this);
      g.O(this, this.progressBar);
      g.cU(this.player, this.progressBar.element, 4);
      this.D = new g.W({ I: "div", S: "ytp-miniplayer-buttons" });
      g.O(this, this.D);
      g.cU(this.player, this.D.element, 4);
      a = new g.W({
        I: "button",
        Ka: ["ytp-miniplayer-close-button", "ytp-button"],
        X: { "aria-label": "\u0110o\u0301ng" },
        V: [g.LF()],
      });
      g.O(this, a);
      a.Ja(this.D.element);
      this.T(a.element, "click", this.ET);
      a = new g.W({
        I: "button",
        Ka: ["ytp-miniplayer-replay-button", "ytp-button"],
        X: { "aria-label": "\u0110o\u0301ng" },
        V: [g.fxa()],
      });
      g.O(this, a);
      a.Ja(this.D.element);
      this.T(a.element, "click", this.Aaa);
      this.T(this.player, "presentingplayerstatechange", this.J3);
      this.T(this.player, "appresize", this.Tb);
      this.T(this.player, "fullscreentoggled", this.Tb);
      this.Tb();
      this.G = !0;
    }
    0 !== this.player.getPlayerState() && g.W.prototype.show.call(this);
    this.progressBar.show();
    this.player.unloadModule("annotations_module");
  };
  g.k.hide = function () {
    this.j && (this.j.dispose(), (this.j = void 0));
    g.W.prototype.hide.call(this);
    this.player.isMinimized() ||
      (this.G && this.progressBar.hide(),
      this.player.loadModule("annotations_module"));
  };
  g.k.va = function () {
    this.j && (this.j.dispose(), (this.j = void 0));
    g.W.prototype.va.call(this);
  };
  g.k.ET = function () {
    this.player.stopVideo();
    this.player.gb("onCloseMiniplayer");
  };
  g.k.Aaa = function () {
    this.player.playVideo();
  };
  g.k.FT = function (a) {
    if (a.target === this.B.element || a.target === this.C.element)
      g.oL(this.player.Qb())
        ? this.player.pauseVideo()
        : this.player.playVideo();
  };
  g.k.fh = function () {
    g.yv(
      this.player.getRootNode(),
      "ytp-player-minimized",
      this.player.isMinimized()
    );
  };
  g.k.Vf = function () {
    this.progressBar.Nc();
    this.K.Nc();
  };
  g.k.I3 = function () {
    this.Vf();
    this.j && this.j.start();
  };
  g.k.J3 = function (a) {
    g.mG(a.state, 32) && this.tooltip.hide();
  };
  g.k.Tb = function () {
    g.q1a(this.progressBar, 0, this.player.kb().getPlayerSize().width, !1);
    g.VW(this.progressBar);
  };
  g.k.K3 = function (a) {
    this.player.isMinimized() && (0 === a ? this.hide() : this.show());
  };
  g.k.Le = function () {
    return this.tooltip;
  };
  g.k.Ut = function (a, b, c, d, e) {
    var f = 0,
      h = (d = 0),
      l = g.Ls(a);
    if (b) {
      c = g.tv(b, "ytp-prev-button") || g.tv(b, "ytp-next-button");
      var m = g.tv(b, "ytp-play-button"),
        n = g.tv(b, "ytp-miniplayer-expand-watch-page-button");
      c
        ? (f = h = 12)
        : m
        ? ((b = g.Js(b, this.element)), (h = b.x), (f = b.y - 12))
        : n &&
          ((h = g.tv(b, "ytp-miniplayer-button-top-left")),
          (f = g.Js(b, this.element)),
          (b = g.Ls(b)),
          h
            ? ((h = 8), (f = f.y + 40))
            : ((h = f.x - l.width + b.width), (f = f.y - 20)));
    } else (h = c - l.width / 2), (d = 25 + (e || 0));
    b = this.player.kb().getPlayerSize().width;
    e = f + (e || 0);
    l = g.ye(h, 0, b - l.width);
    e
      ? ((a.style.top = e + "px"), (a.style.bottom = ""))
      : ((a.style.top = ""), (a.style.bottom = d + "px"));
    a.style.left = l + "px";
  };
  g.y(Nub, g.qV);
  g.k = Nub.prototype;
  g.k.onVideoDataChange = function () {
    if (this.player.getVideoData()) {
      var a = this.player.getVideoAspectRatio(),
        b = 16 / 9;
      a = a > b + 0.1 || a < b - 0.1;
      g.yv(
        this.player.getRootNode(),
        "ytp-rounded-miniplayer-not-regular-wide-video",
        a
      );
    }
  };
  g.k.create = function () {
    g.qV.prototype.create.call(this);
    this.B.T(this.player, "videodatachange", this.onVideoDataChange);
    this.onVideoDataChange();
  };
  g.k.il = function () {
    return !1;
  };
  g.k.load = function () {
    this.player.hideControls();
    this.j.show();
  };
  g.k.unload = function () {
    this.player.showControls();
    this.j.hide();
  };
  g.pV("miniplayer", Nub);
})(_yt_player);
