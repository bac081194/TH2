(function (g) {
  var window = this;
  ("use strict");
  var Ptb = function (a, b) {
      if (!Number.isFinite(a)) return String(a);
      a = String(a);
      var c = a.indexOf(".");
      -1 === c && (c = a.length);
      var d = "-" === a[0] ? "-" : "";
      d && (a = a.substring(1));
      return d + (0, g.rib)("0", Math.max(0, b - c)) + a;
    },
    Qtb = function () {
      return {
        I: "svg",
        X: {
          fill: "#fff",
          height: "24px",
          viewBox: "0 0 24 24",
          width: "24px",
        },
        V: [
          {
            I: "path",
            X: {
              d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
            },
          },
        ],
      };
    },
    Rtb = function () {
      return {
        I: "svg",
        X: {
          fill: "#fff",
          height: "24px",
          viewBox: "0 0 24 24",
          width: "24px",
        },
        V: [
          {
            I: "path",
            X: {
              d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z",
            },
          },
        ],
      };
    },
    Ttb = function (a) {
      "number" === typeof a
        ? ((this.date = Stb(a, 0, 1)), y6(this, 1))
        : g.bb(a)
        ? ((this.date = Stb(a.getFullYear(), a.getMonth(), a.getDate())),
          y6(this, a.getDate()))
        : ((this.date = new Date(g.kb())),
          (a = this.date.getDate()),
          this.date.setHours(0),
          this.date.setMinutes(0),
          this.date.setSeconds(0),
          this.date.setMilliseconds(0),
          y6(this, a));
    },
    Stb = function (a, b, c) {
      b = new Date(a, b, c);
      0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
      return b;
    },
    y6 = function (a, b) {
      a.getDate() != b &&
        a.date.setUTCHours(a.date.getUTCHours() + (a.getDate() < b ? 1 : -1));
    },
    z6 = function (a, b) {
      g.gU.call(
        this,
        a,
        {
          I: "div",
          S: "ytp-reminder-menu",
          X: { role: "menu", tabindex: "-1" },
          V: [
            {
              I: "div",
              S: "ytp-reminder-menu-contents",
              V: [{ I: "div", S: "ytp-reminder-menu-items" }],
            },
          ],
        },
        100,
        !0
      );
      this.buttonElement = b;
      this.j = [];
      this.menuPopupRenderer = void 0;
      this.items = this.Fa("ytp-reminder-menu-items");
      this.hide();
    },
    Utb = function (a) {
      return ((a.menuPopupRenderer && a.menuPopupRenderer.items) || []).reduce(
        function (b, c) {
          c && c.menuServiceItemRenderer && b.push(c.menuServiceItemRenderer);
          return b;
        },
        []
      );
    },
    A6 = function (a) {
      g.W.call(this, {
        I: "div",
        V: [
          {
            I: "button",
            Ka: ["ytp-offline-slate-button", "ytp-button"],
            V: [
              { I: "div", S: "ytp-offline-slate-button-icon", xa: "{{icon}}" },
              { I: "div", S: "ytp-offline-slate-button-text", xa: "{{text}}" },
            ],
          },
        ],
      });
      this.J = a;
      this.upcomingEventReminderButtonRenderer = this.toggleButtonRenderer =
        null;
      this.B = void 0;
      this.D = this.j = null;
      (this.buttonElement = this.Fa("ytp-offline-slate-button")) &&
        this.T(this.buttonElement, "click", this.G);
      this.hide();
    },
    Wtb = function (a, b, c) {
      !a.toggleButtonRenderer && b && b.toggleButtonRenderer
        ? (a.toggleButtonRenderer = b.toggleButtonRenderer)
        : (b && b.toggleButtonRenderer) || (a.toggleButtonRenderer = null);
      !a.upcomingEventReminderButtonRenderer && c && g.V(c, Vtb)
        ? (a.upcomingEventReminderButtonRenderer = g.V(c, Vtb))
        : (c && g.V(c, Vtb)) || (a.upcomingEventReminderButtonRenderer = null);
      B6(a);
    },
    B6 = function (a) {
      if (a.toggleButtonRenderer) {
        var b = a.toggleButtonRenderer;
        if (b.isToggled) {
          var c = b.toggledText ? g.HF(b.toggledText) : "";
          a.update({ text: c, icon: Xtb(b.toggledIcon) });
        } else
          (c = b.defaultText ? g.HF(b.defaultText) : ""),
            a.update({ text: c, icon: Xtb(b.defaultIcon) });
        a.show();
      } else
        a.upcomingEventReminderButtonRenderer
          ? (b = Ytb(a))
            ? ((c = b.text ? g.HF(b.text) : ""),
              a.update({ text: c, icon: Xtb(b.icon) }),
              a.show())
            : a.hide()
          : a.hide();
    },
    $tb = function (a, b, c) {
      a.D || (a.D = new g.bE(a.J.U().ll));
      var d = { context: g.Bsa(a.D.config_ || g.CD()) };
      g.aF() && (d.context.clientScreenNonce = g.aF());
      d.params = c;
      g.cE(a.D, b, d, {
        timeout: 5e3,
        onSuccess: function () {
          a.upcomingEventReminderButtonRenderer &&
            a.B &&
            ((a.upcomingEventReminderButtonRenderer.currentState = a.B),
            (a.B = void 0));
        },
        onError: function () {
          Ztb(a);
        },
        onTimeout: function () {
          Ztb(a);
        },
      });
    },
    Ztb = function (a) {
      a.toggleButtonRenderer
        ? ((a.toggleButtonRenderer.isToggled =
            !a.toggleButtonRenderer.isToggled),
          B6(a))
        : a.upcomingEventReminderButtonRenderer && ((a.B = void 0), B6(a));
    },
    Xtb = function (a) {
      if (!a) return null;
      switch (a.iconType) {
        case "NOTIFICATIONS":
          return Qtb();
        case "NOTIFICATIONS_NONE":
          return Rtb();
        case "NOTIFICATIONS_ACTIVE":
          return g.Zwa();
        default:
          return null;
      }
    },
    Ytb = function (a) {
      if (!a.upcomingEventReminderButtonRenderer) return null;
      var b = a.B || a.upcomingEventReminderButtonRenderer.currentState;
      a = g.u(a.upcomingEventReminderButtonRenderer.states || []);
      for (var c = a.next(); !c.done; c = a.next())
        if (
          (c = g.V(c.value, aub)) &&
          c.state === b &&
          c.button &&
          g.V(c.button, g.yM)
        )
          return g.V(c.button, g.yM);
      return null;
    },
    bub = function (a) {
      g.W.call(this, {
        I: "div",
        S: "ytp-offline-slate",
        V: [
          { I: "div", S: "ytp-offline-slate-background" },
          {
            I: "div",
            S: "ytp-offline-slate-bar",
            V: [
              {
                I: "span",
                S: "ytp-offline-slate-icon",
                V: [
                  {
                    I: "svg",
                    X: {
                      fill: "#fff",
                      height: "100%",
                      viewBox: "0 0 24 24",
                      width: "100%",
                    },
                    V: [
                      {
                        I: "path",
                        X: {
                          d: "M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z",
                        },
                      },
                      { I: "circle", X: { cx: "12", cy: "12", r: "3" } },
                    ],
                  },
                ],
              },
              {
                I: "span",
                S: "ytp-offline-slate-messages",
                V: [
                  {
                    I: "div",
                    S: "ytp-offline-slate-main-text",
                    X: { "aria-label": "{{label}}" },
                    xa: "{{mainText}}",
                  },
                  {
                    I: "div",
                    S: "ytp-offline-slate-subtitle-text",
                    xa: "{{subtitleText}}",
                  },
                ],
              },
              { I: "span", S: "ytp-offline-slate-buttons" },
            ],
          },
          {
            I: "button",
            Ka: ["ytp-offline-slate-close-button", "ytp-button"],
            V: [g.KF()],
          },
          {
            I: "button",
            Ka: ["ytp-offline-slate-open-button", "ytp-button"],
            V: [g.JF()],
          },
        ],
      });
      var b = this;
      this.api = a;
      this.j = this.B = null;
      this.background = this.Fa("ytp-offline-slate-background");
      this.C = this.Fa("ytp-offline-slate-bar");
      this.G = new g.lv(function () {
        g.uv(b.C, "ytp-offline-slate-bar-fade");
      }, 15e3);
      this.K = !1;
      this.D = new g.lv(function () {
        g.uv(b.element, "ytp-offline-slate-collapsed");
      }, 15e3);
      g.O(this, this.D);
      g.O(this, this.G);
      this.countdownTimer = new g.lv(this.q1, 1e3, this);
      this.T(a, "presentingplayerstatechange", this.w1);
      this.T(a, "livestatedata", this.Sa);
      a = this.Fa("ytp-offline-slate-close-button");
      this.T(a, "click", function () {
        g.uv(b.element, "ytp-offline-slate-collapsed");
      });
      a = this.Fa("ytp-offline-slate-open-button");
      this.T(a, "click", function () {
        g.wv(b.element, "ytp-offline-slate-collapsed");
      });
      this.hide();
      a = this.getVideoData();
      a.getPlayerResponse() &&
        (a = a.getPlayerResponse().playabilityStatus) &&
        this.Sa(a);
      a = 8 === this.api.getPresentingPlayerType() && !this.getVideoData().Ll;
      var c = 8 === this.api.getPresentingPlayerType();
      g.yv(this.element, "ytp-offline-slate-premiere-trailer", a);
      g.yv(this.element, "ytp-offline-slate-hide-background", c);
    },
    cub = function (a, b, c) {
      if (b) {
        var d = null != b.subtitleText ? g.HF(b.subtitleText) : "";
        c = c ? c : null != b.mainText ? g.HF(b.mainText) : "";
        var e, f, h, l;
        b =
          null !=
          (l =
            null == (e = b.mainText)
              ? void 0
              : null == (f = e.accessibility)
              ? void 0
              : null == (h = f.accessibilityData)
              ? void 0
              : h.label)
            ? l
            : c;
        a.update({ mainText: c, subtitleText: d, label: b });
        g.yv(a.element, "ytp-offline-slate-single-text-line", !d);
        g.yv(a.C, "ytp-offline-slate-bar-hidden", !c && !d);
      }
    },
    C6 = function (a, b) {
      var c = (0, g.$C)();
      this.module = "heartbeat";
      this.trigger = a;
      this.j = b;
      this.C = c;
    },
    iub = function (a) {
      g.qV.call(this, a);
      var b = this;
      this.N = !1;
      this.Z = 0;
      this.G = !1;
      this.B = new g.lv(function () {
        dub(b);
      }, 0);
      this.j = this.heartbeatParams = null;
      this.D = !1;
      this.K = new g.Bm(1e3, 6e4, 1);
      this.sequenceNumber = 0;
      this.offlineSlate = null;
      this.qa = new g.bE(void 0);
      this.attestationResponse = Promise.resolve(void 0);
      this.Y = Promise.resolve(void 0);
      this.utcOffsetMinutes = -new Ttb().getTimezoneOffset();
      this.C = new g.vK(this);
      g.O(this, this.B);
      g.O(this, this.C);
      eub(this);
      fub(this);
      this.C.T(a, "heartbeatparams", this.ZE);
      this.C.T(a, "presentingplayerstatechange", this.A3);
      this.C.T(a, "videoplayerreset", this.B3);
      this.C.T(a, g.EJ("heartbeat"), this.onCueRangeEnter);
      this.D && this.j && gub(this, void 0, this.j);
      var c = new g.DJ(1e3, 0x7ffffffffffff, {
          priority: 1,
          namespace: "heartbeat",
        }),
        d = new g.DJ(0x8000000000000, 0x8000000000000, {
          id: "stream_end",
          priority: 1,
          namespace: "heartbeat",
        });
      a.jf([c, d]);
      hub(this);
    },
    hub = function (a) {
      var b = a.getVideoData();
      !b.L("use_rta_only_for_player") &&
        b.Fl &&
        (b = b.botguardData) &&
        g.ONa(b, a.player.U());
    },
    jub = function (a) {
      var b, c;
      return g.H(function (d) {
        if (1 == d.j) return g.z(d, g.Cza(), 2);
        if (!d.B)
          return 3 <= a.sequenceNumber
            ? d.return({ error: "ATTESTATION_ERROR_VM_INTERNAL_ERROR" })
            : d.return(void 0);
        b = a.getVideoData();
        c = {};
        return d.return(
          g.Bza(
            ((c.cpn = b.clientPlaybackNonce),
            (c.encryptedVideoId = b.videoId || ""),
            c)
          )
        );
      });
    },
    eub = function (a) {
      var b = a.getVideoData();
      if (b.Fl)
        if (b.L("use_rta_for_player_hb")) a.attestationResponse = jub(a);
        else if (
          ((b = new g.MNa(b)), g.cP.isInitialized() || 3 <= a.sequenceNumber)
        ) {
          var c = Promise,
            d = c.resolve,
            e = null;
          if (b.videoData.uq) {
            var f = g.NNa(b);
            if (f) {
              e = {};
              var h = {};
              f = f.split("&");
              f = g.u(f);
              for (var l = f.next(); !l.done; l = f.next())
                (l = l.value.split("=")), 2 === l.length && (h[l[0]] = l[1]);
              h.r1a && (e.webResponse = h.r1a);
              h.r1c && (e.error = kub[Number(h.r1c)]);
              e.challenge = b.videoData.uq;
            }
          }
          a.attestationResponse = d.call(c, e || void 0);
        }
    },
    lub = function (a) {
      var b = a.getVideoData();
      if (!g.gT(a.getVideoData()) || b.e1) return !1;
      if (b.useInnertubeDrmService() && b.K) {
        a =
          "playready" === b.K.flavor &&
          b.L("html5_innertube_heartbeats_for_playready");
        var c =
          "widevine" === b.K.flavor &&
          b.L("html5_innertube_heartbeats_for_widevine");
        b = g.iR(b.K) && b.L("html5_innertube_heartbeats_for_fairplay");
        return !(a || c || b);
      }
      return !0;
    },
    mub = function (a) {
      if (lub(a)) return !!a.heartbeatParams;
      var b = a.getVideoData();
      return g.gT(a.getVideoData()) &&
        b.useInnertubeDrmService() &&
        !b.Bl &&
        !b.zC
        ? !1
        : !!b.heartbeatToken;
    },
    D6 = function (a, b) {
      if (!a.B.isActive() && a.N) {
        var c = a.getVideoData();
        if (mub(a) || c.isLivePlayback) {
          if (void 0 === b)
            if (a.G)
              if (a.D) b = 7500;
              else {
                var d;
                b = (null == (d = a.heartbeatParams) ? 0 : d.interval)
                  ? 1e3 * a.heartbeatParams.interval
                  : a.getVideoData().F_ || 6e4;
              }
            else b = 1e3;
          a.B.start(b);
        }
      }
    },
    qub = function (a, b, c) {
      b.Sm && (c = g.Mn(c, { internalipoverride: b.Sm }));
      var d = { cpn: b.clientPlaybackNonce };
      b.contextParams && (d.context_params = b.contextParams);
      b.Hb && (d.kpt = b.Hb);
      c = g.Mn(c, d);
      g.CB(c, {
        format: "RAW",
        method: "GET",
        timeout: 3e4,
        onSuccess: function (e) {
          if (!a.B.isActive() && E6(a)) {
            a.K.reset();
            a.sequenceNumber++;
            e = e.responseText;
            var f = nub(e);
            if (f) {
              a.player.gb("onHeartbeat", f);
              var h =
                "ok" === f.status
                  ? f.stop_heartbeat
                    ? 2
                    : 0
                  : "stop" === f.status
                  ? 1
                  : "live_stream_offline" === f.status
                  ? 0
                  : -1;
            } else h = (h = e.match(oub)) ? ("0" === h[1] ? 0 : 1) : -1;
            pub(a, void 0, f, e, h);
          }
        },
        onError: function (e) {
          E6(a) && F6(a, !0, "net-" + e.status);
        },
        onTimeout: function () {
          E6(a) && F6(a, !0, "timeout");
        },
        withCredentials: !0,
      });
    },
    dub = function (a) {
      var b, c;
      g.H(function (d) {
        b = a.player.U();
        c = a.getVideoData();
        if (!E6(a)) return d.return();
        if (lub(a)) return rub(a, b, c), d.Ia(0);
        eub(a);
        return g.z(d, sub(a, b, c), 0);
      });
    },
    rub = function (a, b, c) {
      var d;
      if (null != (d = a.heartbeatParams) && d.url) {
        var e = g.Mn(a.heartbeatParams.url, { request_id: g.Wta() });
        c.Ba &&
          ((e = g.Mn(e, { vvt: c.Ba })),
          c.mdxEnvironment &&
            (e = g.Mn(e, { mdx_environment: c.mdxEnvironment })));
        g.gS(b, c.oauthToken).then(function (f) {
          f && (e = g.Mn(e, { access_token: f }));
          qub(a, c, e);
        });
      }
    },
    E6 = function (a) {
      var b = a.getVideoData();
      return 3 === a.player.getPresentingPlayerType() ||
        g.mG(a.player.Qb(a.getPlayerType()), 4)
        ? !1
        : mub(a) || b.isLivePlayback
        ? !0
        : (G6(a), !1);
    },
    sub = function (a, b, c) {
      var d, e, f, h, l, m, n, p, q, r, t, v, w, A, C, F, G, L, M, R;
      return g.H(function (ea) {
        if (1 == ea.j)
          return (
            (d = "player/heartbeat"),
            (f = {
              videoId: c.videoId,
              sequenceNumber: a.sequenceNumber,
              heartbeatServerData:
                null != (e = a.ra) ? e : c.heartbeatServerData,
            }),
            (a.Y = a.attestationResponse),
            c.Fl ? g.z(ea, a.Y, 3) : ea.Ia(2)
          );
        2 != ea.j && (f.attestationResponse = ea.B);
        h = g.FT(c);
        m = null != (l = h.client) ? l : {};
        m.utcOffsetMinutes = a.utcOffsetMinutes;
        f.context = h;
        f.cpn = c.clientPlaybackNonce;
        if (
          (n =
            "undefined" !== typeof Intl
              ? new Intl.DateTimeFormat().resolvedOptions().timeZone
              : null)
        )
          m.timeZone = n;
        p = { heartbeatChecks: [] };
        if ((q = c.getPlayerResponse()))
          c.heartbeatToken && (f.heartbeatToken = c.heartbeatToken),
            (r = q.playabilityStatus) &&
              (t = r.liveStreamability) &&
              t.liveStreamabilityRenderer &&
              p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");
        c.heartbeatToken && p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");
        g.gJ(b) &&
          (p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED"),
          (v = tub(a)),
          (w = {}),
          null !== v && (w.clientPlayerPositionUtcMillis = v),
          (C = null == (A = a.player.yb()) ? void 0 : g.FV(A)),
          (G = (null == (F = C) ? void 0 : F.freePreviewWatchedDuration) || 0),
          0 < G && (w.freePreviewWatchedDuration = { seconds: "" + G }),
          (p.unpluggedParams = w));
        f.heartbeatRequestParams = p;
        c.isLivePlayback
          ? ((L = tub(a)),
            null !== L &&
              (f.playbackState || (f.playbackState = {}),
              (f.playbackState.playbackPosition = { utcTimeMillis: L })))
          : b.L("enable_heartbeat_vod_playback_position") &&
            ((M = uub(a)),
            null !== M &&
              (f.playbackState || (f.playbackState = {}),
              (f.playbackState.playbackPosition = { streamTimeMillis: M })));
        a.player.publish("heartbeatRequest", f);
        R = {
          timeout: 3e4,
          onSuccess: function (ma) {
            if (!a.B.isActive() && E6(a)) {
              var oa = a.getVideoData(),
                ia = oa.Fl && null == a.Y,
                va;
              oa.Fl =
                !(
                  null == (va = ma.heartbeatAttestationConfig) ||
                  !va.requiresAttestation
                ) || ia;
              ia = ma.playabilityStatus;
              va = JSON.stringify(ia) || "{}";
              ma.authenticationMismatch && a.player.ma("authshear", {});
              var aa = -1;
              var U = ma.playabilityStatus;
              U &&
                (a.player.gb("onHeartbeat", U),
                "OK" === U.status
                  ? (aa = ma.stopHeartbeat ? 2 : 0)
                  : "UNPLAYABLE" === U.status
                  ? (aa = 1)
                  : "LIVE_STREAM_OFFLINE" === U.status && (aa = 0));
              (a.sequenceNumber && -1 === aa) || a.K.reset();
              a.sequenceNumber++;
              ma.heartbeatServerData && (a.ra = ma.heartbeatServerData);
              oa.BC = ma;
              (U = ma.playerCueRangeSet) && g.MTa(oa, U);
              ma.playerCueRanges &&
                0 < ma.playerCueRanges.length &&
                (oa.cueRanges = ma.playerCueRanges);
              var La, x;
              (null == (La = ma.progressBarConfig)
                ? 0
                : La.progressBarStartPosition) &&
                (null == (x = ma.progressBarConfig)
                  ? 0
                  : x.progressBarEndPosition) &&
                ((oa.progressBarStartPosition =
                  ma.progressBarConfig.progressBarStartPosition),
                (oa.progressBarEndPosition =
                  ma.progressBarConfig.progressBarEndPosition));
              oa.compositeLiveIngestionOffsetToken =
                ma.compositeLiveIngestionOffsetToken;
              ma.compositeLiveStatusToken !== oa.compositeLiveStatusToken &&
                (oa.compositeLiveStatusToken = ma.compositeLiveStatusToken);
              oa.publish("dataupdated");
              pub(a, ma, ia, va, aa);
            }
          },
          onError: function (ma) {
            E6(a) && F6(a, !0, "net-" + ma.status);
          },
          onTimeout: function () {
            E6(a) && F6(a, !0, "timeout");
          },
        };
        g.gS(b, g.xT(c)).then(function (ma) {
          ma && (R.EV = "Bearer " + ma);
          g.cE(a.qa, d, f, R);
        });
        g.Aa(ea);
      });
    },
    pub = function (a, b, c, d, e) {
      -1 === e
        ? ((c = "decode " + g.Hg(d, 3)), F6(a, !1, c))
        : 2 === e
        ? (G6(a), (a.G = !0))
        : ((a.Z = 0),
          a.B.stop(),
          1 === e
            ? ((a.G = !1),
              c &&
                "PLAYABILITY_ERROR_CODE_EMBARGOED" === c.errorCode &&
                a.player.oo(!0),
              (e =
                "pe." +
                (null == c ? void 0 : c.errorCode) +
                ";ps." +
                (null == c ? void 0 : c.status)),
              a.player.Zf("heartbeat.stop", 2, a.tf(d), e),
              g.MC("heartbeatActionPlayerHalted", vub(c)),
              (null == b ? 0 : b.videoTransitionEndpoint) &&
                c &&
                ((b = b.videoTransitionEndpoint),
                (d = g.V(b, g.WS)) &&
                  wub(a, d, c, {
                    itct: null == b ? void 0 : b.clickTrackingParams,
                  })))
            : ((a.G = !0),
              (d = 0),
              a.D &&
                c &&
                ((d = gub(a, b, c)), a.player.publish("livestatedata", c)),
              d ? D6(a, d) : D6(a)));
    },
    gub = function (a, b, c) {
      var d =
          c.liveStreamability && c.liveStreamability.liveStreamabilityRenderer,
        e = !(
          !d ||
          !(
            d.switchStreamsImmediately ||
            (d.transitionTiming &&
              "STREAM_TRANSITION_TIMING_IMMEDIATELY" === d.transitionTiming)
          )
        );
      b = xub(a, b, d);
      var f = a.getVideoData(),
        h = a.player.Qb(a.getPlayerType()),
        l =
          h.isPlaying() &&
          !g.mT(f) &&
          !a.player.isAtLiveHead(a.getPlayerType());
      if (f.U().uc()) {
        var m,
          n = (null == (m = a.player.Ve()) ? void 0 : m.jc()) || {};
        n.status = c.status || "";
        n.dvr = "" + +l;
        n["switch"] = "" + +e;
        n.ended = "" + +!(!d || !d.displayEndscreen);
        a.player.ma("heartbeat", n);
      }
      if (l && !e) return b;
      e =
        d &&
        d.streamTransitionEndpoint &&
        g.V(d.streamTransitionEndpoint, g.WS);
      if (
        "STREAM_TRANSITION_TIMING_AT_STREAM_END" === (d && d.transitionTiming)
      )
        a.getVideoData().transitionEndpointAtEndOfStream = e;
      else if (e && wub(a, e, c)) return b;
      if ("OK" === c.status.toUpperCase()) {
        e = d && d.broadcastId;
        m =
          a.j &&
          a.j.liveStreamability &&
          a.j.liveStreamability.liveStreamabilityRenderer &&
          a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;
        l = e !== m && null != e;
        if (!g.jT(f) || l) {
          var p = { video_id: f.videoId };
          f.IC && (p.is_live_destination = "1");
          a.player.L("web_player_heartbeat_request_watch_next") ||
            ((p.disable_watch_next = !0),
            (p.raw_watch_next_response = f.getWatchNextResponse()));
          p.autonav_state = f.autonavState;
          p.oauth_token = f.oauthToken;
          p.force_gvi = f.Rm;
          p.xm = f.xm;
          f.G &&
            ((p.vss_credentials_token = f.G),
            (p.vss_credentials_token_type = f.Lm));
          f.Ba && (p.vvt = f.Ba);
          d = void 0;
          g.jT(f)
            ? l &&
              ((d = new C6("broadcastIdChanged", m + "," + e)),
              a.uJ(
                "HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
                "HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",
                c
              ))
            : (e && (d = new C6("formatsReceived", "" + e)),
              a.uJ(
                "HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
                "HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",
                c
              ));
          a.player.loadVideoByPlayerVars(p, void 0, void 0, void 0, d);
          return b;
        }
        a.player.Ag("heartbeat", a.getPlayerType());
      }
      d &&
        d.displayEndscreen &&
        (a.offlineSlate
          ? ((a = a.offlineSlate), (a.K = !0), a.Eb && a.api.uB())
          : g.pL(h) &&
            ((f = (null == (p = a.player.Ve()) ? void 0 : p.jc()) || {}),
            a.player.ma("hbse", f, !0),
            a.player.uB(),
            a.player.gb("onLiveMediaEnded", c)));
      return b;
    },
    xub = function (a, b, c) {
      return a.player.L("web_player_use_heartbeat_poll_delay_ms") &&
        (a = Number(null == b ? void 0 : b.pollDelayMs))
        ? a
        : (c = Number(null == c ? void 0 : c.pollDelayMs))
        ? c
        : 0;
    },
    F6 = function (a, b, c) {
      var d = a.player.U();
      if (!a.B.isActive()) {
        a.B.stop();
        a.Z++;
        var e = b ? "heartbeat.net" : "heartbeat.servererror";
        var f = a.getVideoData();
        if (
          f.o0 ||
          (b && !g.gT(a.getVideoData()) && !mub(a) && f.isLivePlayback)
        )
          f = !1;
        else {
          var h, l;
          (null == (l = a.heartbeatParams) ? 0 : l.retries)
            ? (h = a.heartbeatParams.retries)
            : (h = f.T_ || 5);
          f = a.Z >= h;
        }
        f
          ? (g.MC(
              "heartbeatActionPlayerHalted",
              b ? { enforcedPolicyToHaltOnNetworkFailure: !0 } : vub()
            ),
            (b = a.getVideoData()) && b.isLivePlayback
              ? a.player.Zf(
                  e,
                  1,
                  "Ph\u00e1t l\u1ea1i video b\u1ecb gi\u00e1n \u0111o\u1ea1n. Vui l\u00f2ng th\u1eed l\u1ea1i.",
                  c
                )
              : a.player.Zf(
                  e,
                  1,
                  "R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra l\u1ed7i khi c\u1ea5p ph\u00e9p video n\u00e0y.",
                  c
                ))
          : (d.L("html5_report_non_fatal_heartbeat_error") &&
              a.player.Jr(e, { msg: c }),
            D6(a, a.K.getValue()),
            g.Cm(a.K));
      }
    },
    vub = function (a) {
      var b = { enforcedPolicyToHaltOnNetworkFailure: !1 };
      a && (b.serializedServerContext = a.additionalLoggingData);
      return b;
    },
    G6 = function (a) {
      a.Z = 0;
      a.B.stop();
      a.G = !1;
      a.sequenceNumber = 0;
    },
    fub = function (a) {
      var b = a.getVideoData(),
        c = a.player.U();
      if (b.isLivePlayback)
        if (g.xRa(c.G)) {
          a.D = !0;
          a.N = !0;
          if (!g.iJ(c) || g.gJ(c))
            (a.offlineSlate = new bub(a.player)),
              g.O(a, a.offlineSlate),
              g.cU(a.player, a.offlineSlate.element, 4);
          (b = b.getPlayerResponse()) &&
            b.playabilityStatus &&
            (a.j = b.playabilityStatus);
          var d;
          "UNPLAYABLE" !== (null == (d = a.j) ? void 0 : d.status) &&
            (a.j
              ? (d = xub(
                  a,
                  void 0,
                  a.j.liveStreamability &&
                    a.j.liveStreamability.liveStreamabilityRenderer
                ))
                ? D6(a, d)
                : D6(a, 7500)
              : D6(a, 1e3));
        } else
          a.player.Zf(
            "html5.unsupportedlive",
            2,
            "HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
            "nolive.1"
          );
      else
        g.Fb(b.Da, "heartbeat") && a.player.Ag("heartbeat", a.getPlayerType());
    },
    wub = function (a, b, c, d) {
      var e = b && b.videoId;
      return e
        ? (a.player.Go(
            e,
            Object.assign({}, { autonav: "1" }, d || {}),
            void 0,
            !0,
            !0,
            b,
            g.xT(a.getVideoData())
          ),
          a.uJ(
            "HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
            "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",
            c
          ),
          !0)
        : !1;
    },
    tub = function (a) {
      return (a = a.player.getProgressState(a.getPlayerType()).ingestionTime) &&
        isFinite(a)
        ? "" + Math.floor(1e3 * a)
        : null;
    },
    uub = function (a) {
      return (a = a.player.getCurrentTime(a.getPlayerType())) && isFinite(a)
        ? "" + Math.floor(1e3 * a)
        : null;
    },
    nub = function (a) {
      try {
        var b = JSON.parse(a);
        return null != b ? b : void 0;
      } catch (c) {}
    },
    yub = {
      ERAS: ["BC", "AD"],
      ERANAMES: ["Before Christ", "Anno Domini"],
      NARROWMONTHS: "JFMAMJJASOND".split(""),
      STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
      MONTHS:
        "January February March April May June July August September October November December".split(
          " "
        ),
      STANDALONEMONTHS:
        "January February March April May June July August September October November December".split(
          " "
        ),
      SHORTMONTHS: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      STANDALONESHORTMONTHS:
        "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      WEEKDAYS:
        "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      STANDALONEWEEKDAYS:
        "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
      NARROWWEEKDAYS: "SMTWTFS".split(""),
      STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
      SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
      QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      AMPMS: ["AM", "PM"],
      DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
      TIMEFORMATS: [
        "h:mm:ss\u202fa zzzz",
        "h:mm:ss\u202fa z",
        "h:mm:ss\u202fa",
        "h:mm\u202fa",
      ],
      DATETIMEFORMATS: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
      FIRSTDAYOFWEEK: 6,
      WEEKENDRANGE: [5, 6],
      FIRSTWEEKCUTOFFDAY: 5,
    };
  yub = {
    ERAS: ["TCN", "SCN"],
    ERANAMES: [
      "Tr\u01b0\u1edbc Ch\u00faa Gi\u00e1ng Sinh",
      "Sau C\u00f4ng Nguy\u00ean",
    ],
    NARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    STANDALONENARROWMONTHS: "1 2 3 4 5 6 7 8 9 10 11 12".split(" "),
    MONTHS:
      "th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(
        ";"
      ),
    STANDALONEMONTHS:
      "Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(
        ";"
      ),
    SHORTMONTHS:
      "thg 1;thg 2;thg 3;thg 4;thg 5;thg 6;thg 7;thg 8;thg 9;thg 10;thg 11;thg 12".split(
        ";"
      ),
    STANDALONESHORTMONTHS:
      "Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(
        ";"
      ),
    WEEKDAYS:
      "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(
        ";"
      ),
    STANDALONEWEEKDAYS:
      "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(
        ";"
      ),
    SHORTWEEKDAYS: "CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),
    STANDALONESHORTWEEKDAYS: "CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),
    NARROWWEEKDAYS: "CN T2 T3 T4 T5 T6 T7".split(" "),
    STANDALONENARROWWEEKDAYS: "CN T2 T3 T4 T5 T6 T7".split(" "),
    SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
    QUARTERS: ["Qu\u00fd 1", "Qu\u00fd 2", "Qu\u00fd 3", "Qu\u00fd 4"],
    AMPMS: ["SA", "CH"],
    DATEFORMATS: ["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"],
    TIMEFORMATS: ["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
    DATETIMEFORMATS: [
      "'l\u00fac' {0} {1}",
      "'l\u00fac' {0} {1}",
      "{0} {1}",
      "{0} {1}",
    ],
    FIRSTDAYOFWEEK: 0,
    WEEKENDRANGE: [5, 6],
    FIRSTWEEKCUTOFFDAY: 6,
  };
  var kub = [
    "ATTESTATION_ERROR_UNKNOWN",
    "ATTESTATION_ERROR_VM_NOT_INITIALIZED",
    "ATTESTATION_ERROR_VM_NO_RESPONSE",
    "ATTESTATION_ERROR_VM_TIMEOUT",
    "ATTESTATION_ERROR_VM_INTERNAL_ERROR",
  ];
  g.k = Ttb.prototype;
  g.k.NW = yub.FIRSTDAYOFWEEK;
  g.k.OW = yub.FIRSTWEEKCUTOFFDAY;
  g.k.clone = function () {
    var a = new Ttb(this.date);
    a.NW = this.NW;
    a.OW = this.OW;
    return a;
  };
  g.k.getFullYear = function () {
    return this.date.getFullYear();
  };
  g.k.getYear = function () {
    return this.getFullYear();
  };
  g.k.getMonth = function () {
    return this.date.getMonth();
  };
  g.k.getDate = function () {
    return this.date.getDate();
  };
  g.k.getTime = function () {
    return this.date.getTime();
  };
  g.k.getDay = function () {
    return this.date.getDay();
  };
  g.k.getUTCFullYear = function () {
    return this.date.getUTCFullYear();
  };
  g.k.getUTCMonth = function () {
    return this.date.getUTCMonth();
  };
  g.k.getUTCDate = function () {
    return this.date.getUTCDate();
  };
  g.k.getUTCDay = function () {
    return this.date.getDay();
  };
  g.k.getUTCHours = function () {
    return this.date.getUTCHours();
  };
  g.k.getUTCMinutes = function () {
    return this.date.getUTCMinutes();
  };
  g.k.getTimezoneOffset = function () {
    return this.date.getTimezoneOffset();
  };
  g.k.set = function (a) {
    this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  };
  g.k.setFullYear = function (a) {
    this.date.setFullYear(a);
  };
  g.k.setYear = function (a) {
    this.setFullYear(a);
  };
  g.k.setMonth = function (a) {
    this.date.setMonth(a);
  };
  g.k.setDate = function (a) {
    this.date.setDate(a);
  };
  g.k.setTime = function (a) {
    this.date.setTime(a);
  };
  g.k.setUTCFullYear = function (a) {
    this.date.setUTCFullYear(a);
  };
  g.k.setUTCMonth = function (a) {
    this.date.setUTCMonth(a);
  };
  g.k.setUTCDate = function (a) {
    this.date.setUTCDate(a);
  };
  g.k.add = function (a) {
    if (a.years || a.months) {
      var b = this.getMonth() + a.months + 12 * a.years,
        c = this.getYear() + Math.floor(b / 12);
      b %= 12;
      0 > b && (b += 12);
      a: {
        switch (b) {
          case 1:
            var d = 0 != c % 4 || (0 == c % 100 && 0 != c % 400) ? 28 : 29;
            break a;
          case 5:
          case 8:
          case 10:
          case 3:
            d = 30;
            break a;
        }
        d = 31;
      }
      d = Math.min(d, this.getDate());
      this.setDate(1);
      this.setFullYear(c);
      this.setMonth(b);
      this.setDate(d);
    }
    a.days &&
      ((c = this.getYear()),
      (b = 0 <= c && 99 >= c ? -1900 : 0),
      (a = new Date(
        new Date(c, this.getMonth(), this.getDate(), 12).getTime() +
          864e5 * a.days
      )),
      this.setDate(1),
      this.setFullYear(a.getFullYear() + b),
      this.setMonth(a.getMonth()),
      this.setDate(a.getDate()),
      y6(this, a.getDate()));
  };
  g.k.toString = function () {
    var a = this.getFullYear(),
      b = 0 > a ? "-" : 1e4 <= a ? "+" : "";
    return (
      [
        b + Ptb(Math.abs(a), b ? 6 : 4),
        Ptb(this.getMonth() + 1, 2),
        Ptb(this.getDate(), 2),
      ].join("") + ""
    );
  };
  g.k.valueOf = function () {
    return this.date.valueOf();
  };
  var zub = new g.Ow("addUpcomingEventReminderEndpoint");
  var Aub = new g.Ow("removeUpcomingEventReminderEndpoint");
  var Bub = new g.Ow("updateUpcomingEventReminderButtonStateCommand");
  var Vtb = new g.Ow("upcomingEventReminderButtonRenderer"),
    aub = new g.Ow("upcomingEventReminderButtonStateRenderer");
  g.y(z6, g.gU);
  z6.prototype.updateMenuItems = function () {
    var a = this,
      b = Utb(this),
      c = 0;
    c = 0;
    for (var d = {}; c < b.length; d = { eY: void 0 }, c++) {
      var e = this.j[c];
      e ||
        ((e = new g.W({
          I: "div",
          S: "ytp-reminder-menu-item",
          X: { role: "menuitem", tabindex: "0" },
          V: [
            { I: "div", S: "ytp-reminder-menu-item-icon", xa: "{{icon}}" },
            { I: "div", S: "ytp-reminder-menu-item-label", xa: "{{text}}" },
          ],
        })),
        (d.eY = c),
        e.listen(
          "click",
          (function (h) {
            return function () {
              var l = h.eY;
              a.Lb();
              l = Utb(a)[l];
              a.publish(
                "reminderMenuItemClicked",
                l.serviceEndpoint || l.command
              );
            };
          })(d)
        ),
        e.Ja(this.items),
        (this.j[c] = e));
      var f = b[c];
      d = null;
      switch (f.icon && f.icon.iconType) {
        case "NOTIFICATIONS":
          d = Qtb();
          break;
        case "NOTIFICATIONS_NONE":
          d = Rtb();
          break;
        case "NOTIFICATIONS_ACTIVE":
          d = g.Zwa();
      }
      f = f.text ? g.HF(f.text) : "";
      e.update({ icon: d, text: f });
    }
    for (; c < this.j.length; ) this.j.pop().dispose();
    0 === c ? this.Lb() : this.od(this.buttonElement);
  };
  z6.prototype.hide = function () {
    this.buttonElement && this.buttonElement.removeAttribute("aria-haspopup");
    g.gU.prototype.hide.call(this);
  };
  z6.prototype.show = function () {
    this.buttonElement &&
      this.buttonElement.setAttribute("aria-haspopup", "true");
    g.gU.prototype.show.call(this);
  };
  z6.prototype.va = function () {
    g.wb(this.j);
    g.gU.prototype.va.call(this);
  };
  g.y(A6, g.W);
  A6.prototype.G = function () {
    if (this.toggleButtonRenderer) {
      var a = this.toggleButtonRenderer;
      a.isToggled
        ? this.C(a.toggledServiceEndpoint)
        : this.C(a.defaultServiceEndpoint);
      a.isToggled = !a.isToggled;
      B6(this);
    } else if (this.upcomingEventReminderButtonRenderer)
      if (this.j && this.j.Eb) this.j.Lb();
      else {
        var b = Ytb(this);
        b && this.C(b.serviceEndpoint || b.command);
        b =
          (null == (a = g.V(null == b ? void 0 : b.command, g.qG))
            ? void 0
            : a.commands) || [];
        a: {
          a = g.u(b);
          for (var c = a.next(); !c.done; c = a.next()) {
            var d = (b = void 0);
            if (
              (c =
                null == (b = g.V(c.value, g.ckb))
                  ? void 0
                  : null == (d = b.popup)
                  ? void 0
                  : d.menuPopupRenderer)
            ) {
              a = c;
              break a;
            }
          }
          a = void 0;
        }
        this.j ||
          ((this.j = new z6(this.J, this.buttonElement)),
          this.j.Ja(this.element),
          g.O(this, this.j),
          this.j.subscribe("reminderMenuItemClicked", this.C, this));
        b = this.j;
        b.menuPopupRenderer = a;
        b.updateMenuItems();
      }
  };
  A6.prototype.C = function (a) {
    var b = g.V(a, zub),
      c = g.V(a, Aub);
    if (a && (b || c)) {
      if (b) {
        var d = b;
        var e = "notification/add_upcoming_event_reminder";
      } else
        c && ((d = c), (e = "notification/remove_upcoming_event_reminder"));
      if (e && d && d.params)
        for (
          $tb(this, e, d.params), a = g.u(d.commands || []), b = a.next();
          !b.done;
          b = a.next()
        )
          if ((b = b.value) && g.V(b, Bub)) {
            this.B = g.V(b, Bub).state;
            B6(this);
            break;
          }
    }
  };
  g.y(bub, g.W);
  g.k = bub.prototype;
  g.k.getPlayerType = function () {
    if (8 === this.api.getPresentingPlayerType()) return 1;
  };
  g.k.getVideoData = function () {
    return this.api.getVideoData(this.getPlayerType());
  };
  g.k.Sa = function (a) {
    var b,
      c,
      d =
        null == a
          ? void 0
          : null == (b = a.liveStreamability)
          ? void 0
          : null == (c = b.liveStreamabilityRenderer)
          ? void 0
          : c.offlineSlate;
    if (d) {
      this.B = a;
      b = d.liveStreamOfflineSlateRenderer;
      b.canShowCountdown ? this.q1() : cub(this, b);
      var e, f, h, l;
      if (
        (c =
          null == a
            ? void 0
            : null == (e = a.liveStreamability)
            ? void 0
            : null == (f = e.liveStreamabilityRenderer)
            ? void 0
            : null == (h = f.offlineSlate)
            ? void 0
            : null == (l = h.liveStreamOfflineSlateRenderer)
            ? void 0
            : l.thumbnail)
      ) {
        e = 0;
        f = null;
        h = c.thumbnails;
        for (l = 0; l < h.length; l++)
          h[l].width > e && ((e = h[l].width || 0), (f = h[l].url));
        f && (this.background.style.backgroundImage = "url(" + f + ")");
      } else this.background.style.backgroundImage = "";
      b.actionButtons || b.reminderButton
        ? (this.j ||
            ((this.j = new A6(this.api)),
            this.j.Ja(this.Fa("ytp-offline-slate-buttons")),
            g.O(this, this.j)),
          Wtb(this.j, b.actionButtons && b.actionButtons[0], b.reminderButton))
        : this.j && Wtb(this.j, null, null);
      this.B = a;
    } else this.B = null;
    this.w1();
  };
  g.k.w1 = function (a) {
    if (8 === this.api.getPresentingPlayerType()) var b = !0;
    else {
      var c = this.api.Qb(),
        d = this.getVideoData();
      b = d.isLivePlayback && (g.pL(c) || g.mG(c, 2) || g.mG(c, 64));
      var e = 2 === d.autonavState && g.mG(c, 2);
      c = c.isPlaying() && !g.mT(d) && !this.api.isAtLiveHead(void 0, !0);
      b = b && !c && !e;
    }
    b && this.B
      ? this.Eb
        ? (null == a ? 0 : g.oG(a, 2)) &&
          !this.getVideoData().Ll &&
          (g.wv(this.element, "ytp-offline-slate-collapsed"),
          this.D.stop(),
          g.wv(this.C, "ytp-offline-slate-bar-fade"),
          this.G.start())
        : (this.show(),
          this.D.start(),
          this.api.publish("offlineslatestatechange"),
          this.K && this.api.uB())
      : this.Eb && (this.hide(), this.api.publish("offlineslatestatechange"));
  };
  g.k.q1 = function () {
    var a,
      b,
      c,
      d,
      e =
        null == (a = this.B)
          ? void 0
          : null == (b = a.liveStreamability)
          ? void 0
          : null == (c = b.liveStreamabilityRenderer)
          ? void 0
          : null == (d = c.offlineSlate)
          ? void 0
          : d.liveStreamOfflineSlateRenderer;
    e &&
      ((a = Math.floor(g.kb() / 1e3)),
      (b = e.canShowCountdown && Number(e.scheduledStartTime)),
      !b || b <= a
        ? (cub(this, e), this.countdownTimer.stop())
        : (cub(this, e, g.CG(b - a)), g.mv(this.countdownTimer)));
  };
  g.k.va = function () {
    this.countdownTimer.dispose();
    this.countdownTimer = null;
    g.W.prototype.va.call(this);
  };
  C6.prototype.B = function (a) {
    return this.trigger && a.trigger
      ? this.module === a.module && this.trigger === a.trigger && this.j === a.j
      : !1;
  };
  C6.prototype.isExpired = function () {
    return 6e4 < (0, g.$C)() - this.C;
  };
  C6.prototype.toString = function () {
    return this.module + ":" + this.trigger + ":" + this.j;
  };
  g.y(iub, g.qV);
  g.k = iub.prototype;
  g.k.va = function () {
    G6(this);
    this.player.qf("heartbeat");
    g.qV.prototype.va.call(this);
  };
  g.k.onCueRangeEnter = function () {
    this.N = !0;
    D6(this, 2e3);
  };
  g.k.ZE = function (a) {
    this.heartbeatParams = a;
    D6(this, 2e3);
  };
  g.k.A3 = function (a) {
    var b;
    8 !== this.player.getPresentingPlayerType() &&
      "UNPLAYABLE" !== (null == (b = this.j) ? void 0 : b.status) &&
      (g.mG(a.state, 2) || g.mG(a.state, 64)
        ? (G6(this), this.D && ((this.N = !0), D6(this, 1e3)))
        : (g.mG(a.state, 1) || g.mG(a.state, 8)) && D6(this, 2e3));
  };
  g.k.B3 = function () {
    3 !== this.player.getPresentingPlayerType() && D6(this, 2e3);
  };
  g.k.getPlayerType = function () {
    if (8 === this.player.getPresentingPlayerType()) return 1;
  };
  g.k.getVideoData = function () {
    return this.player.getVideoData(this.getPlayerType());
  };
  g.k.il = function (a) {
    switch (a) {
      case 4:
      case 3:
        return !1;
    }
    return !0;
  };
  g.k.uJ = function (a, b, c) {
    a = { trigger: a, reason: b };
    c && (a.serializedServerContext = c.additionalLoggingData);
    g.MC("heartbeatActionPlayerTransitioned", a);
  };
  g.k.tf = function (a) {
    var b = "LICENSE",
      c = nub(a);
    if (c) return c.reason || g.OV[b] || "";
    (a = a.match(oub)) && (a = Number(a[1])) && (b = g.YCa(a));
    return g.OV[b] || "";
  };
  g.k.oE = function () {
    return !!this.offlineSlate && this.offlineSlate.Eb;
  };
  var oub = /^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;
  g.pV("heartbeat", iub);
})(_yt_player);
