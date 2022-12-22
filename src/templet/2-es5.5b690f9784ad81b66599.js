function _slicedToArray(t, e) {
  return (
    _arrayWithHoles(t) ||
    _iterableToArrayLimit(t, e) ||
    _unsupportedIterableToArray(t, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ("string" == typeof t) return _arrayLikeToArray(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      "Object" === n && t.constructor && (n = t.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(t)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(t, e)
        : void 0
    );
  }
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function _iterableToArrayLimit(t, e) {
  var n =
    null == t
      ? null
      : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (null != n) {
    var r,
      i,
      o = [],
      s = !0,
      c = !1;
    try {
      for (
        n = n.call(t);
        !(s = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e);
        s = !0
      );
    } catch (u) {
      (c = !0), (i = u);
    } finally {
      try {
        s || null == n.return || n.return();
      } finally {
        if (c) throw i;
      }
    }
    return o;
  }
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
function _classCallCheck(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function _createClass(t, e, n) {
  return (
    e && _defineProperties(t.prototype, e),
    n && _defineProperties(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    cxbk: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = {
        production: !0,
        imageURL: "http://localhost:4000",
        baseUrl: "http://localhost:4000/",
      };
    },
    vV5l: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return qu;
      }),
        n.d(e, "b", function () {
          return Wu;
        });
      var r = n("fXoL"),
        i = n("ofXK"),
        o = n("3Pt+"),
        s = function (t) {
          return { active: t };
        },
        c = function (t, e, n, r) {
          return { top: t, left: e, color: n, background: r };
        };
      function u(t, e) {
        if (
          (1 & t &&
            (r["\u0275\u0275elementStart"](0, "button", 19),
            r["\u0275\u0275text"](1),
            r["\u0275\u0275elementEnd"]()),
          2 & t)
        ) {
          var n = e.$implicit,
            i = r["\u0275\u0275nextContext"]();
          r["\u0275\u0275property"](
            "ngClass",
            r["\u0275\u0275pureFunction1"](4, s, i.nowTime == n.time)
          )("id", "timepicker-item-id-" + n.time)(
            "ngStyle",
            r["\u0275\u0275pureFunction4"](
              6,
              c,
              n.top,
              n.left,
              i.nowTime == n.time ? i.config.arrowStyle.color : "",
              i.nowTime == n.time
                ? i.config.arrowStyle.background
                : "transparent"
            )
          ),
            r["\u0275\u0275advance"](1),
            r["\u0275\u0275textInterpolate1"](" ", i.GetClockTime(n), " ");
        }
      }
      var a = function (t, e) {
          return { active: t, static: e };
        },
        p = function (t) {
          return { selected: t };
        },
        l = function (t) {
          return { "hide-time-picker-clock": t };
        },
        h = function (t) {
          return { background: t };
        },
        f = (function () {
          var t = (function () {
            function t() {
              _classCallCheck(this, t);
            }
            return (
              _createClass(t, [
                {
                  key: "allowedTimes",
                  value: function (t, e) {
                    for (
                      var n = [],
                        r = +t.split(":")[0],
                        i = +e.split(":")[0],
                        o = +t.split(":")[1],
                        s = +e.split(":")[1],
                        c = r;
                      c <= i;
                      c++
                    ) {
                      var u = 0,
                        a = 59;
                      for (c === r ? (u = o) : c === i && (a = s); u <= a; u++)
                        n.push(
                          (c <= 12 ? c : c - 12) +
                            ":" +
                            u +
                            " " +
                            (c < 12 ? "AM" : "PM")
                        );
                    }
                    return n;
                  },
                },
                {
                  key: "ClockMaker",
                  value: function (t) {
                    for (
                      var e = [],
                        n = "minute" === t ? 60 : 12,
                        r = "minute" === t ? 5 : 1,
                        i = "minute" === t ? 0 : 1;
                      i <= n;
                      i += r
                    )
                      if (60 !== i) {
                        var o = String(i),
                          s = 99 * Math.sin(2 * Math.PI * (i / n)),
                          c = 99 * Math.cos(2 * Math.PI * (i / n));
                        e.push({
                          time: o,
                          left: s + 124 - 17 + "px",
                          top: 124 - c - 17 + "px",
                          type: t,
                        });
                      }
                    return e;
                  },
                },
                {
                  key: "TimeToString",
                  value: function (t) {
                    var e = t.ampm,
                      n = t.minute,
                      r = t.hour,
                      i = "PM" === e ? +r + 12 : +r;
                    return (
                      "AM" === e && 12 === i && (i = 0),
                      24 === i && (i = 12),
                      ""
                        .concat((i = i < 10 ? "0" + i : "" + i), ":")
                        .concat(n < 10 ? "0" + n : n)
                    );
                  },
                },
                {
                  key: "StringToTime",
                  value: function (t) {
                    var e = _slicedToArray(t.split(":"), 2),
                      n = e[0],
                      r = +n > 12 ? +n - 12 : +n;
                    return {
                      ampm: +n >= 12 ? "PM" : "AM",
                      minute: +e[1],
                      hour: (r = 0 === r ? 12 : r),
                    };
                  },
                },
                {
                  key: "CalcDegrees",
                  value: function (t, e, n) {
                    var r = t.currentTarget.offsetHeight / 2,
                      i = Math.round(
                        t.clientX - e.left - t.currentTarget.offsetWidth / 2
                      ),
                      o = Math.round(r - (t.clientY - e.top)),
                      s = -Math.atan2(o, i);
                    s += 2.5 * Math.PI;
                    var c = Math.round((180 * s) / Math.PI),
                      u = c % n;
                    return 0 === u
                      ? c
                      : (u >= n / 2 ? (c += n - u) : u < n / 2 && (c -= u), c);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = r["\u0275\u0275defineInjectable"]({
              token: t,
              factory: t.ɵfac,
            })),
            t
          );
        })(),
        b = (function () {
          var t = (function () {
            function t(e) {
              var n = this;
              _classCallCheck(this, t),
                (this.core = e),
                (this.subject = null),
                (this.activeModal = !1),
                (this.clockType = "hour"),
                (this.time = { ampm: "AM", minute: 0, hour: 12 }),
                (this.nowTime = this.time.hour),
                (this.isPopup = !0),
                (this.animationTime = 0),
                (this.clockMaker = function () {
                  (n.clockObject = n.core.ClockMaker(n.clockType)),
                    n.setArrow(null);
                }),
                (this.setActiveTime = function () {
                  n.nowTime =
                    "minute" === n.clockType ? n.time.minute : n.time.hour;
                }),
                (this.setArrow = function (t) {
                  t &&
                    ((n.clockType = t.type),
                    "minute" === n.clockType
                      ? (n.time.minute = t.time)
                      : (n.time.hour = t.time)),
                    n.rotationClass(
                      ("minute" === n.clockType ? n.time.minute : n.time.hour) *
                        ("minute" === n.clockType ? 6 : 30)
                    ),
                    n.setActiveTime();
                }),
                (this.rotationClass = function (t) {
                  n.degree = t;
                }),
                (this.getDegree = function (t) {
                  var e = "minute" === n.clockType ? 6 : 30,
                    r = t.currentTarget.getBoundingClientRect();
                  if (
                    n.isClicked &&
                    (t.currentTarget === t.target ||
                      "BUTTON" === t.target.nodeName)
                  ) {
                    var i = n.core.CalcDegrees(t, r, e),
                      o = n.time.hour,
                      s = n.time.minute;
                    "hour" === n.clockType
                      ? (o = (o = i / e) > 12 ? o - 12 : o)
                      : "minute" === n.clockType &&
                        (s = (s = i / e) > 59 ? s - 60 : s);
                    var c = n.config.rangeTime.start,
                      u = n.config.rangeTime.end,
                      a =
                        +c.split(":")[0] < 12
                          ? +c.split(":")[0]
                          : +c.split(":")[0] - 12,
                      p =
                        +u.split(":")[0] < 12
                          ? +u.split(":")[0]
                          : +u.split(":")[0] - 12,
                      l = +c.split(":")[1],
                      h = +u.split(":")[1],
                      f = n.GetNowTime(o, n.time.ampm, s);
                    n.allowed.indexOf(f) > -1
                      ? ((n.time.hour = o),
                        (n.time.minute = s),
                        n.rotationClass(i),
                        n.setActiveTime())
                      : "hour" === n.clockType && o === a && s <= l
                      ? ((n.time.hour = a), (n.time.minute = l))
                      : "hour" === n.clockType &&
                        o === p &&
                        s >= h &&
                        ((n.time.hour = p), (n.time.minute = h));
                  }
                });
            }
            return (
              _createClass(t, [
                {
                  key: "ParseStringToTime",
                  value: function (t) {
                    this.time = this.core.StringToTime(
                      (t =
                        "" === t || null == t
                          ? this.time.hour + ":" + this.time.minute
                          : t)
                    );
                  },
                },
                {
                  key: "GetTime",
                  value: function () {
                    var t = this.core.TimeToString(this.time);
                    this.subject.next(t);
                  },
                },
                {
                  key: "setTime",
                  value: function () {
                    (this.isClicked = !1),
                      this.config.changeToMinutes &&
                        !this.config.onlyHour &&
                        "hour" === this.clockType &&
                        this.ChangeAnimational("minute");
                  },
                },
                {
                  key: "GetNowTime",
                  value: function (t, e, n) {
                    return (
                      (12 === t && "AM" === e ? "0" : t) + ":" + n + " " + e
                    );
                  },
                },
                {
                  key: "checkBet",
                  value: function () {
                    var t = this.GetNowTime(
                      this.time.hour,
                      this.time.ampm,
                      this.time.minute
                    );
                    -1 === this.allowed.indexOf(t) &&
                      (this.ParseStringToTime(this.config.rangeTime.start),
                      this.setArrow(null),
                      this.setActiveTime());
                  },
                },
                {
                  key: "modalAnimation",
                  value: function () {
                    var t = this;
                    setTimeout(function () {
                      t.activeModal = !0;
                    }, 1);
                  },
                },
                {
                  key: "ngOnInit",
                  value: function () {
                    (this.allowed = this.core.allowedTimes(
                      this.config.rangeTime.start,
                      this.config.rangeTime.end
                    )),
                      this.config &&
                        this.config.onlyMinute &&
                        (this.clockType = "minute"),
                      this.config &&
                        (this.config.onlyPM
                          ? (this.time.ampm = "PM")
                          : this.config.onlyAM && (this.time.ampm = "AM")),
                      this.clockMaker(),
                      this.modalAnimation();
                  },
                },
                {
                  key: "MinuteClick",
                  value: function () {
                    if (this.config && this.config.onlyHour) return !1;
                    this.ChangeAnimational("minute");
                  },
                },
                {
                  key: "HourClick",
                  value: function () {
                    if (this.config && this.config.onlyMinute) return !1;
                    this.ChangeAnimational("hour");
                  },
                },
                {
                  key: "ChangeAnimational",
                  value: function (t) {
                    var e = this;
                    this.clockType !== t &&
                      ("fade" === this.config.animation
                        ? ((this.changeToMin = !0),
                          setTimeout(function () {
                            (e.changeToMin = !1),
                              (e.clockType = t),
                              e.clockMaker();
                          }, 200))
                        : "rotate" === this.config.animation
                        ? ((this.animationTime = 0.4),
                          (this.clockType = t),
                          this.clockMaker())
                        : ((this.clockType = t), this.clockMaker()));
                  },
                },
                {
                  key: "SetAM",
                  value: function () {
                    if (this.config && this.config.onlyPM) return !1;
                    (this.time.ampm = "AM"), this.checkBet();
                  },
                },
                {
                  key: "SetPM",
                  value: function () {
                    if (this.config && this.config.onlyAM) return !1;
                    (this.time.ampm = "PM"), this.checkBet();
                  },
                },
                {
                  key: "Close",
                  value: function (t) {
                    var e = this;
                    t.target === t.currentTarget &&
                      !0 === this.isPopup &&
                      ((this.activeModal = !1),
                      setTimeout(function () {
                        e.appRef.detachView(e._ref.hostView), e._ref.destroy();
                      }, 400));
                  },
                },
                {
                  key: "getClockArrowStyle",
                  value: function () {
                    return "rotate" === this.config.animation
                      ? {
                          transform: "rotate(" + this.degree + "deg)",
                          "-webkit-transform": "rotate(" + this.degree + "deg)",
                          background: this.config.arrowStyle.background,
                          "-webkit-transition":
                            "transform " + this.getAnimationTime(),
                          transition: "transform " + +this.getAnimationTime(),
                        }
                      : {
                          transform: "rotate(" + this.degree + "deg)",
                          "-webkit-transform": "rotate(" + this.degree + "deg)",
                          background: this.config.arrowStyle.background,
                        };
                  },
                },
                {
                  key: "getAnimationTime",
                  value: function () {
                    return this.animationTime + "s";
                  },
                },
                {
                  key: "updateClockDown",
                  value: function (t) {
                    (this.isClicked = !0),
                      (this.animationTime = 0),
                      this.getDegree(t);
                  },
                },
                {
                  key: "setNewRotation",
                  value: function () {
                    var t = (this.time.minute / 60) * 360 + 360,
                      e = 2 * t,
                      n = Math.abs(this.degree - t),
                      r = Math.abs(this.degree - e);
                    this.rotationClass(n < r ? t : e);
                  },
                },
                {
                  key: "GetSeparator",
                  value: function () {
                    return this.preference && this.preference.separator
                      ? this.preference.separator
                      : ":";
                  },
                },
                {
                  key: "GetPeriod",
                  value: function (t) {
                    return this.preference && this.preference.period
                      ? this.preference.period(t)
                      : t;
                  },
                },
                {
                  key: "GetMinute",
                  value: function () {
                    if (this.preference && this.preference.minute)
                      return this.preference.minute(this.time.minute);
                    var t = this.time.minute.toString();
                    return +t < 10 && (t = "0" + t), t;
                  },
                },
                {
                  key: "GetHour",
                  value: function () {
                    return this.preference && this.preference.hour
                      ? this.preference.hour(this.time.hour)
                      : this.time.hour;
                  },
                },
                {
                  key: "GetClockTime",
                  value: function (t) {
                    return this.preference
                      ? "hour" === this.clockType && this.preference.clockHour
                        ? this.preference.clockHour(t.time)
                        : "minute" === this.clockType &&
                          this.preference.clockMinute
                        ? this.preference.clockMinute(t.time)
                        : t.time
                      : t.time;
                  },
                },
                {
                  key: "GetLabel",
                  value: function (t) {
                    var e = { ok: "Ok", cancel: "Cancel" };
                    return (
                      this.preference &&
                        this.preference.labels &&
                        this.preference.labels.ok &&
                        (e.ok = this.preference.labels.ok),
                      this.preference &&
                        this.preference.labels &&
                        this.preference.labels.cancel &&
                        (e.cancel = this.preference.labels.cancel),
                      e[t]
                    );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r["\u0275\u0275directiveInject"](f));
            }),
            (t.ɵcmp = r["\u0275\u0275defineComponent"]({
              type: t,
              selectors: [["time-picker"]],
              decls: 26,
              vars: 45,
              consts: [
                ["id", "time-picker-wrapper", 3, "ngClass", "click"],
                ["id", "time-picker", 3, "ngClass"],
                [1, "time-picker-header"],
                [1, "time-picker-selected-time"],
                [1, "time-picker-hour", 3, "ngClass", "click"],
                [1, "time-seprator"],
                [1, "time-picker-minute", 3, "ngClass", "click"],
                [1, "time-picker-selected-ampm"],
                [1, "time-picker-am", 3, "ngClass", "click"],
                [1, "time-picker-pm", 3, "ngClass", "click"],
                [1, "time-picker-content"],
                [
                  1,
                  "time-picker-clock",
                  3,
                  "ngClass",
                  "mousemove",
                  "mousedown",
                  "mouseup",
                ],
                [3, "ngClass", "id", "ngStyle", 4, "ngFor", "ngForOf"],
                [1, "time-picker-clock-origin", 3, "ngStyle"],
                ["id", "tpc-arrow", 1, "time-picker-clock-arrow", 3, "ngStyle"],
                [3, "ngStyle"],
                [1, "time-picker-footer"],
                [3, "click"],
                [1, "atp-ref-dialog-close", 3, "click"],
                [3, "ngClass", "id", "ngStyle"],
              ],
              template: function (t, e) {
                1 & t &&
                  (r["\u0275\u0275elementStart"](0, "div", 0),
                  r["\u0275\u0275listener"]("click", function (t) {
                    return e.Close(t);
                  }),
                  r["\u0275\u0275elementStart"](1, "div", 1),
                  r["\u0275\u0275elementStart"](2, "div", 2),
                  r["\u0275\u0275elementStart"](3, "div", 3),
                  r["\u0275\u0275elementStart"](4, "div", 4),
                  r["\u0275\u0275listener"]("click", function () {
                    return e.HourClick();
                  }),
                  r["\u0275\u0275text"](5),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementStart"](6, "span", 5),
                  r["\u0275\u0275text"](7),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementStart"](8, "div", 6),
                  r["\u0275\u0275listener"]("click", function () {
                    return e.MinuteClick();
                  }),
                  r["\u0275\u0275text"](9),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementStart"](10, "div", 7),
                  r["\u0275\u0275elementStart"](11, "div", 8),
                  r["\u0275\u0275listener"]("click", function () {
                    return e.SetAM();
                  }),
                  r["\u0275\u0275text"](12),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementStart"](13, "div", 9),
                  r["\u0275\u0275listener"]("click", function () {
                    return e.SetPM();
                  }),
                  r["\u0275\u0275text"](14),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementStart"](15, "div", 10),
                  r["\u0275\u0275elementStart"](16, "div", 11),
                  r["\u0275\u0275listener"]("mousemove", function (t) {
                    return e.getDegree(t);
                  })("mousedown", function (t) {
                    return e.updateClockDown(t);
                  })("mouseup", function () {
                    return e.setTime();
                  }),
                  r["\u0275\u0275template"](17, u, 2, 11, "button", 12),
                  r["\u0275\u0275element"](18, "div", 13),
                  r["\u0275\u0275elementStart"](19, "div", 14),
                  r["\u0275\u0275element"](20, "span", 15),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementStart"](21, "div", 16),
                  r["\u0275\u0275elementStart"](22, "button", 17),
                  r["\u0275\u0275listener"]("click", function (t) {
                    return e.Close(t);
                  }),
                  r["\u0275\u0275text"](23),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementStart"](24, "button", 18),
                  r["\u0275\u0275listener"]("click", function (t) {
                    return e.GetTime(), e.Close(t);
                  }),
                  r["\u0275\u0275text"](25),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"](),
                  r["\u0275\u0275elementEnd"]()),
                  2 & t &&
                    (r["\u0275\u0275classMap"](e.config.theme),
                    r["\u0275\u0275property"](
                      "ngClass",
                      r["\u0275\u0275pureFunction2"](
                        25,
                        a,
                        e.activeModal,
                        !e.isPopup
                      )
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275property"](
                      "ngClass",
                      r["\u0275\u0275pureFunction2"](
                        28,
                        a,
                        e.activeModal,
                        !e.isPopup
                      )
                    ),
                    r["\u0275\u0275advance"](3),
                    r["\u0275\u0275property"](
                      "ngClass",
                      r["\u0275\u0275pureFunction1"](
                        31,
                        p,
                        "hour" == e.clockType
                      )
                    ),
                    r["\u0275\u0275attribute"](
                      "disabled",
                      e.config.onlyMinute ? "disabled" : null
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275textInterpolate"](e.GetHour()),
                    r["\u0275\u0275advance"](2),
                    r["\u0275\u0275textInterpolate"](e.GetSeparator()),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275property"](
                      "ngClass",
                      r["\u0275\u0275pureFunction1"](
                        33,
                        p,
                        "minute" == e.clockType
                      )
                    ),
                    r["\u0275\u0275attribute"](
                      "disabled",
                      e.config.onlyHour ? "disabled" : null
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275textInterpolate"](e.GetMinute()),
                    r["\u0275\u0275advance"](2),
                    r["\u0275\u0275property"](
                      "ngClass",
                      r["\u0275\u0275pureFunction1"](35, p, "AM" == e.time.ampm)
                    ),
                    r["\u0275\u0275attribute"](
                      "disabled",
                      e.config.onlyPM ? "disabled" : null
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275textInterpolate"](e.GetPeriod("AM")),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275property"](
                      "ngClass",
                      r["\u0275\u0275pureFunction1"](37, p, "PM" == e.time.ampm)
                    ),
                    r["\u0275\u0275attribute"](
                      "disabled",
                      e.config.onlyAM ? "disabled" : null
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275textInterpolate"](e.GetPeriod("PM")),
                    r["\u0275\u0275advance"](2),
                    r["\u0275\u0275property"](
                      "ngClass",
                      r["\u0275\u0275pureFunction1"](39, l, e.changeToMin)
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275property"]("ngForOf", e.clockObject),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275property"](
                      "ngStyle",
                      r["\u0275\u0275pureFunction1"](
                        41,
                        h,
                        e.config.arrowStyle.background
                      )
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275property"](
                      "ngStyle",
                      e.getClockArrowStyle()
                    ),
                    r["\u0275\u0275advance"](1),
                    r["\u0275\u0275property"](
                      "ngStyle",
                      r["\u0275\u0275pureFunction1"](
                        43,
                        h,
                        e.config.arrowStyle.background
                      )
                    ),
                    r["\u0275\u0275advance"](3),
                    r["\u0275\u0275textInterpolate"](e.GetLabel("cancel")),
                    r["\u0275\u0275advance"](2),
                    r["\u0275\u0275textInterpolate"](e.GetLabel("ok")));
              },
              directives: [i.NgClass, i.NgForOf, i.NgStyle],
              styles: [
                "#time-picker-wrapper[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: transparent;\n      -webkit-transition: background 0.4s;\n      transition: background 0.4s;\n      font-family: 'Roboto', sans-serif;\n      z-index: 1000; }\n      #time-picker-wrapper.static[_ngcontent-%COMP%] {\n        position: relative !important;\n        background: transparent !important;\n        display: inline-block;\n        z-index: 0; }\n      #time-picker-wrapper.active[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.3); }\n      #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        background: #424242; }\n        #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          border-bottom: none;\n          background: #555555; }\n          #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            color: #999; }\n            #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n          #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            color: #999; }\n            #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n        #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          background: #555555; }\n          #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n            color: #fff; }\n        #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          border-top: none; }\n          #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            background: #555555;\n            color: #fff; }\n            #time-picker-wrapper.dark[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n              background: #777; }\n      #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        background: #fff; }\n        #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            color: #aaa; }\n            #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #000; }\n          #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            color: #aaa; }\n            #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #000; }\n        #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          background: #ededed; }\n          #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n            color: #000; }\n            #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n              background: blue;\n              color: #fff; }\n          #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-origin[_ngcontent-%COMP%] {\n            background: blue; }\n          #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%] {\n            background: blue; }\n            #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n              background: blue; }\n        #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            background: #f1f1f1; }\n            #time-picker-wrapper.light[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        background: #fff; }\n        #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          background-color: #00897b;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n          #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n        #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          background: #ededed; }\n          #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n            color: #000; }\n            #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n              background: #00897b;\n              color: #fff; }\n          #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-origin[_ngcontent-%COMP%] {\n            background: #00897b; }\n          #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%] {\n            background: #00897b; }\n            #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n              background: #00897b; }\n        #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #00897b; }\n            #time-picker-wrapper.material-green[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        background: #fff; }\n        #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          background-color: #3F51B5;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n          #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n        #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          background: #ededed; }\n          #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n            color: #000; }\n            #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n              background: #3F51B5;\n              color: #fff; }\n          #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-origin[_ngcontent-%COMP%] {\n            background: #3F51B5; }\n          #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%] {\n            background: #3F51B5; }\n            #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n              background: #3F51B5; }\n        #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #3F51B5; }\n            #time-picker-wrapper.material-blue[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        background: #fff; }\n        #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          background-color: #F44336;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n          #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n        #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          background: #ededed; }\n          #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n            color: #000; }\n            #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n              background: #F44336;\n              color: #fff; }\n          #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-origin[_ngcontent-%COMP%] {\n            background: #F44336; }\n          #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%] {\n            background: #F44336; }\n            #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n              background: #F44336; }\n        #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #F44336; }\n            #time-picker-wrapper.material-red[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        background: #fff; }\n        #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          background-color: #9C27B0;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n          #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n        #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          background: #ededed; }\n          #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n            color: #000; }\n            #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n              background: #9C27B0;\n              color: #fff; }\n          #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-origin[_ngcontent-%COMP%] {\n            background: #9C27B0; }\n          #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%] {\n            background: #9C27B0; }\n            #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n              background: #9C27B0; }\n        #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #9C27B0; }\n            #time-picker-wrapper.material-purple[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n              background: #ddd; }\n      #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        background: #fff; }\n        #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          background-color: #FF9800;\n          border-bottom: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n          #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            color: rgba(255, 255, 255, 0.4); }\n            #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n              color: #fff; }\n        #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          background: #ededed; }\n          #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n            color: #000; }\n            #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n              background: #FF9800;\n              color: #fff; }\n          #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-origin[_ngcontent-%COMP%] {\n            background: #FF9800; }\n          #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%] {\n            background: #FF9800; }\n            #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n              background: #FF9800; }\n        #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          border-top: 1px solid #e1e1e1; }\n          #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            font-weight: bold;\n            text-transform: uppercase;\n            background: transparent;\n            color: #FF9800; }\n            #time-picker-wrapper.material-orange[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n              background: #ddd; }\n      #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%] {\n        width: 325px;\n        height: auto;\n        -webkit-box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n                box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n        border-radius: 2px;\n        margin: 15vh auto !important;\n        -webkit-transform: scale(0.5) !important;\n                transform: scale(0.5) !important;\n        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n        transition: opacity 0.3s, -webkit-transform 0.3s;\n        transition: transform 0.3s, opacity 0.3s;\n        transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n        opacity: 0; }\n        #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker.static[_ngcontent-%COMP%] {\n          margin: 0px !important;\n          -webkit-box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 0 7px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n                  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 0 7px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n        #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker.active[_ngcontent-%COMP%] {\n          -webkit-transform: scale(1) !important;\n                  transform: scale(1) !important;\n          opacity: 1; }\n        #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%] {\n          text-align: center;\n          padding: 15px 0px; }\n          #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%] {\n            font-size: 35px;\n            padding: 5px 0px; }\n            #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n              display: inline-block;\n              cursor: pointer; }\n              #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-time[_ngcontent-%COMP%]   div[disabled=true][_ngcontent-%COMP%] {\n                cursor: default; }\n          #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%] {\n            font-size: 18px; }\n            #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n              display: inline-block;\n              padding: 0 5px;\n              cursor: pointer; }\n              #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-header[_ngcontent-%COMP%]   .time-picker-selected-ampm[_ngcontent-%COMP%]   div[disabled=true][_ngcontent-%COMP%] {\n                cursor: default; }\n        #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-content[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%] {\n          width: 200px;\n          height: 200px;\n          padding: 24px;\n          border-radius: 50%;\n          cursor: pointer;\n          margin: 25px auto;\n          position: relative;\n          user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          -webkit-user-select: none;\n          opacity: 1;\n          -webkit-transform: scale(1);\n                  transform: scale(1);\n          -webkit-transition: opacity 0.3s, transform 0.3s;\n          -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n          transition: opacity 0.3s, -webkit-transform 0.3s;\n          transition: opacity 0.3s, transform 0.3s;\n          transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s; }\n          #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-content[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            border: none;\n            position: absolute;\n            width: 35px;\n            height: 35px;\n            border-radius: 50%;\n            cursor: pointer;\n            font-size: 17px;\n            text-align: center;\n            padding: 0;\n            -webkit-transition: all .2s;\n            transition: all .2s;\n            z-index: 3; }\n          #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-content[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-origin[_ngcontent-%COMP%] {\n            width: 6px;\n            height: 6px;\n            border-radius: 50%;\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            margin-left: -3px;\n            margin-top: -3px; }\n          #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-content[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%] {\n            width: 2px;\n            height: 41%;\n            position: absolute;\n            left: 0;\n            top: 22px;\n            right: 0;\n            margin: auto;\n            -webkit-transform-origin: top left;\n            transform-origin: bottom; }\n            #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-content[_ngcontent-%COMP%]   .time-picker-clock[_ngcontent-%COMP%]   .time-picker-clock-arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n              width: 8px;\n              height: 8px;\n              border-radius: 50%;\n              position: absolute;\n              top: 0;\n              right: -3px; }\n          #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-content[_ngcontent-%COMP%]   .time-picker-clock.hide-time-picker-clock[_ngcontent-%COMP%] {\n            opacity: 0;\n            -webkit-transform: scale(0.8);\n                    transform: scale(0.8); }\n        #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%] {\n          padding: 15px;\n          text-align: right; }\n          #time-picker-wrapper[_ngcontent-%COMP%]   #time-picker[_ngcontent-%COMP%]   .time-picker-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            border: transparent;\n            margin-left: 10px;\n            padding: 10px;\n            font-size: 14px;\n            border-radius: 2px;\n            cursor: pointer; }\n\n    *[_ngcontent-%COMP%] {\n      outline: none;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box; }",
              ],
            })),
            t
          );
        })(),
        d =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {};
      function y(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var m = "undefined" != typeof window && window,
        v =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        g = m || (void 0 !== d && d) || v,
        _ = g;
      !(function () {
        if (!g)
          throw new Error(
            "RxJS could not find any global context (window, self, global)"
          );
      })();
      var w,
        O = { root: _ },
        k = function (t) {
          return "function" == typeof t;
        },
        x = {
          isArray:
            Array.isArray ||
            function (t) {
              return t && "number" == typeof t.length;
            },
        },
        C = function (t) {
          return null != t && "object" == typeof t;
        },
        S = { errorObject: { e: {} } };
      function P() {
        try {
          return w.apply(this, arguments);
        } catch (t) {
          return (S.errorObject.e = t), S.errorObject;
        }
      }
      var M = function (t) {
          return (w = t), P;
        },
        T =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        j = {
          UnsubscriptionError: (function (t) {
            function e(e) {
              t.call(this), (this.errors = e);
              var n = Error.call(
                this,
                e
                  ? e.length +
                      " errors occurred during unsubscription:\n  " +
                      e
                        .map(function (t, e) {
                          return e + 1 + ") " + t.toString();
                        })
                        .join("\n  ")
                  : ""
              );
              (this.name = n.name = "UnsubscriptionError"),
                (this.stack = n.stack),
                (this.message = n.message);
            }
            return T(e, t), e;
          })(Error),
        };
      function I(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof j.UnsubscriptionError ? e.errors : e);
        }, []);
      }
      var E = {
          Subscription: (function () {
            function t(t) {
              (this.closed = !1),
                (this._parent = null),
                (this._parents = null),
                (this._subscriptions = null),
                t && (this._unsubscribe = t);
            }
            return (
              (t.prototype.unsubscribe = function () {
                var t,
                  e = !1;
                if (!this.closed) {
                  var n = this._parent,
                    r = this._parents,
                    i = this._unsubscribe,
                    o = this._subscriptions;
                  (this.closed = !0),
                    (this._parent = null),
                    (this._parents = null),
                    (this._subscriptions = null);
                  for (var s = -1, c = r ? r.length : 0; n; )
                    n.remove(this), (n = (++s < c && r[s]) || null);
                  if (
                    (k(i) &&
                      M(i).call(this) === S.errorObject &&
                      ((e = !0),
                      (t =
                        t ||
                        (S.errorObject.e instanceof j.UnsubscriptionError
                          ? I(S.errorObject.e.errors)
                          : [S.errorObject.e]))),
                    x.isArray(o))
                  )
                    for (s = -1, c = o.length; ++s < c; ) {
                      var u = o[s];
                      if (C(u) && M(u.unsubscribe).call(u) === S.errorObject) {
                        (e = !0), (t = t || []);
                        var a = S.errorObject.e;
                        a instanceof j.UnsubscriptionError
                          ? (t = t.concat(I(a.errors)))
                          : t.push(a);
                      }
                    }
                  if (e) throw new j.UnsubscriptionError(t);
                }
              }),
              (t.prototype.add = function (e) {
                if (!e || e === t.EMPTY) return t.EMPTY;
                if (e === this) return this;
                var n = e;
                switch (typeof e) {
                  case "function":
                    n = new t(e);
                  case "object":
                    if (n.closed || "function" != typeof n.unsubscribe)
                      return n;
                    if (this.closed) return n.unsubscribe(), n;
                    if ("function" != typeof n._addParent) {
                      var r = n;
                      (n = new t())._subscriptions = [r];
                    }
                    break;
                  default:
                    throw new Error(
                      "unrecognized teardown " + e + " added to Subscription."
                    );
                }
                return (
                  (this._subscriptions || (this._subscriptions = [])).push(n),
                  n._addParent(this),
                  n
                );
              }),
              (t.prototype.remove = function (t) {
                var e = this._subscriptions;
                if (e) {
                  var n = e.indexOf(t);
                  -1 !== n && e.splice(n, 1);
                }
              }),
              (t.prototype._addParent = function (t) {
                var e = this._parent,
                  n = this._parents;
                e && e !== t
                  ? n
                    ? -1 === n.indexOf(t) && n.push(t)
                    : (this._parents = [t])
                  : (this._parent = t);
              }),
              (t.EMPTY = (((e = new t()).closed = !0), e)),
              t
            );
            var e;
          })(),
        },
        A = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            throw t;
          },
          complete: function () {},
        },
        N = y(function (t, e) {
          var n = O.root.Symbol;
          (e.rxSubscriber =
            "function" == typeof n && "function" == typeof n.for
              ? n.for("rxSubscriber")
              : "@@rxSubscriber"),
            (e.$$rxSubscriber = e.rxSubscriber);
        }),
        F =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        V = (function (t) {
          function e(e, n, r) {
            switch (
              (t.call(this),
              (this.syncErrorValue = null),
              (this.syncErrorThrown = !1),
              (this.syncErrorThrowable = !1),
              (this.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                this.destination = A;
                break;
              case 1:
                if (!e) {
                  this.destination = A;
                  break;
                }
                if ("object" == typeof e) {
                  if (L(e)) {
                    var i = e[N.rxSubscriber]();
                    (this.syncErrorThrowable = i.syncErrorThrowable),
                      (this.destination = i),
                      i.add(this);
                  } else
                    (this.syncErrorThrowable = !0),
                      (this.destination = new B(this, e));
                  break;
                }
              default:
                (this.syncErrorThrowable = !0),
                  (this.destination = new B(this, e, n, r));
            }
          }
          return (
            F(e, t),
            (e.prototype[N.rxSubscriber] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var i = new e(t, n, r);
              return (i.syncErrorThrowable = !1), i;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parent,
                e = this._parents;
              return (
                (this._parent = null),
                (this._parents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parent = t),
                (this._parents = e),
                this
              );
            }),
            e
          );
        })(E.Subscription),
        R = V,
        B = (function (t) {
          function e(e, n, r, i) {
            var o;
            t.call(this), (this._parentSubscriber = e);
            var s = this;
            k(n)
              ? (o = n)
              : n &&
                ((o = n.next),
                (r = n.error),
                (i = n.complete),
                n !== A &&
                  ((s = Object.create(n)),
                  k(s.unsubscribe) && this.add(s.unsubscribe.bind(s)),
                  (s.unsubscribe = this.unsubscribe.bind(this)))),
              (this._context = s),
              (this._next = o),
              (this._error = r),
              (this._complete = i);
          }
          return (
            F(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._error)
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else {
                  if (!e.syncErrorThrowable) throw (this.unsubscribe(), t);
                  (e.syncErrorValue = t),
                    (e.syncErrorThrown = !0),
                    this.unsubscribe();
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                throw (this.unsubscribe(), n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              try {
                e.call(this._context, n);
              } catch (r) {
                return (t.syncErrorValue = r), (t.syncErrorThrown = !0), !0;
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(V);
      function L(t) {
        return (
          t instanceof V || ("syncErrorThrowable" in t && t[N.rxSubscriber])
        );
      }
      var W = { Subscriber: R },
        q = y(function (t, e) {
          function n(t) {
            var e,
              n = t.Symbol;
            return (
              "function" == typeof n
                ? n.observable
                  ? (e = n.observable)
                  : ((e = n("observable")), (n.observable = e))
                : (e = "@@observable"),
              e
            );
          }
          (e.getSymbolObservable = n),
            (e.observable = n(O.root)),
            (e.$$observable = e.observable);
        }),
        z = { noop: function () {} };
      function U(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function (e) {
                return t.reduce(function (t, e) {
                  return e(t);
                }, e);
              }
          : z.noop;
      }
      var H = {
          pipe: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return U(t);
          },
          pipeFromArray: U,
        },
        Y = {
          Observable: (function () {
            function t(t) {
              (this._isScalar = !1), t && (this._subscribe = t);
            }
            return (
              (t.prototype.lift = function (e) {
                var n = new t();
                return (n.source = this), (n.operator = e), n;
              }),
              (t.prototype.subscribe = function (t, e, n) {
                var r = this.operator,
                  i = (function (t, e, n) {
                    if (t) {
                      if (t instanceof W.Subscriber) return t;
                      if (t[N.rxSubscriber]) return t[N.rxSubscriber]();
                    }
                    return t || e || n
                      ? new W.Subscriber(t, e, n)
                      : new W.Subscriber(A);
                  })(t, e, n);
                if (
                  (r
                    ? r.call(i, this.source)
                    : i.add(
                        this.source || !i.syncErrorThrowable
                          ? this._subscribe(i)
                          : this._trySubscribe(i)
                      ),
                  i.syncErrorThrowable &&
                    ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                )
                  throw i.syncErrorValue;
                return i;
              }),
              (t.prototype._trySubscribe = function (t) {
                try {
                  return this._subscribe(t);
                } catch (e) {
                  (t.syncErrorThrown = !0), (t.syncErrorValue = e), t.error(e);
                }
              }),
              (t.prototype.forEach = function (t, e) {
                var n = this;
                if (
                  (e ||
                    (O.root.Rx && O.root.Rx.config && O.root.Rx.config.Promise
                      ? (e = O.root.Rx.config.Promise)
                      : O.root.Promise && (e = O.root.Promise)),
                  !e)
                )
                  throw new Error("no Promise impl found");
                return new e(function (e, r) {
                  var i;
                  i = n.subscribe(
                    function (e) {
                      if (i)
                        try {
                          t(e);
                        } catch (n) {
                          r(n), i.unsubscribe();
                        }
                      else t(e);
                    },
                    r,
                    e
                  );
                });
              }),
              (t.prototype._subscribe = function (t) {
                return this.source.subscribe(t);
              }),
              (t.prototype[q.observable] = function () {
                return this;
              }),
              (t.prototype.pipe = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e - 0] = arguments[e];
                return 0 === t.length ? this : H.pipeFromArray(t)(this);
              }),
              (t.prototype.toPromise = function (t) {
                var e = this;
                if (
                  (t ||
                    (O.root.Rx && O.root.Rx.config && O.root.Rx.config.Promise
                      ? (t = O.root.Rx.config.Promise)
                      : O.root.Promise && (t = O.root.Promise)),
                  !t)
                )
                  throw new Error("no Promise impl found");
                return new t(function (t, n) {
                  var r;
                  e.subscribe(
                    function (t) {
                      return (r = t);
                    },
                    function (t) {
                      return n(t);
                    },
                    function () {
                      return t(r);
                    }
                  );
                });
              }),
              (t.create = function (e) {
                return new t(e);
              }),
              t
            );
          })(),
        },
        D =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        G = {
          ObjectUnsubscribedError: (function (t) {
            function e() {
              var e = t.call(this, "object unsubscribed");
              (this.name = e.name = "ObjectUnsubscribedError"),
                (this.stack = e.stack),
                (this.message = e.message);
            }
            return D(e, t), e;
          })(Error),
        },
        X =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        J = {
          SubjectSubscription: (function (t) {
            function e(e, n) {
              t.call(this),
                (this.subject = e),
                (this.subscriber = n),
                (this.closed = !1);
            }
            return (
              X(e, t),
              (e.prototype.unsubscribe = function () {
                if (!this.closed) {
                  this.closed = !0;
                  var t = this.subject,
                    e = t.observers;
                  if (
                    ((this.subject = null),
                    e && 0 !== e.length && !t.isStopped && !t.closed)
                  ) {
                    var n = e.indexOf(this.subscriber);
                    -1 !== n && e.splice(n, 1);
                  }
                }
              }),
              e
            );
          })(E.Subscription),
        },
        $ =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        K = (function (t) {
          function e(e) {
            t.call(this, e), (this.destination = e);
          }
          return $(e, t), e;
        })(W.Subscriber),
        Z = K,
        Q = (function (t) {
          function e() {
            t.call(this),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          return (
            $(e, t),
            (e.prototype[N.rxSubscriber] = function () {
              return new K(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new et(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new G.ObjectUnsubscribedError();
              if (!this.isStopped)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), i = 0;
                  i < n;
                  i++
                )
                  r[i].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new G.ObjectUnsubscribedError();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, n = e.length, r = e.slice(), i = 0;
                i < n;
                i++
              )
                r[i].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new G.ObjectUnsubscribedError();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, n = t.slice(), r = 0;
                r < e;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new G.ObjectUnsubscribedError();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new G.ObjectUnsubscribedError();
              return this.hasError
                ? (t.error(this.thrownError), E.Subscription.EMPTY)
                : this.isStopped
                ? (t.complete(), E.Subscription.EMPTY)
                : (this.observers.push(t), new J.SubjectSubscription(this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new Y.Observable();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new et(t, e);
            }),
            e
          );
        })(Y.Observable),
        tt = Q,
        et = (function (t) {
          function e(e, n) {
            t.call(this), (this.destination = e), (this.source = n);
          }
          return (
            $(e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              return this.source
                ? this.source.subscribe(t)
                : E.Subscription.EMPTY;
            }),
            e
          );
        })(Q),
        nt = { SubjectSubscriber: Z, Subject: tt, AnonymousSubject: et },
        rt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        it = {
          AsyncSubject: (function (t) {
            function e() {
              t.apply(this, arguments),
                (this.value = null),
                (this.hasNext = !1),
                (this.hasCompleted = !1);
            }
            return (
              rt(e, t),
              (e.prototype._subscribe = function (e) {
                return this.hasError
                  ? (e.error(this.thrownError), E.Subscription.EMPTY)
                  : this.hasCompleted && this.hasNext
                  ? (e.next(this.value), e.complete(), E.Subscription.EMPTY)
                  : t.prototype._subscribe.call(this, e);
              }),
              (e.prototype.next = function (t) {
                this.hasCompleted || ((this.value = t), (this.hasNext = !0));
              }),
              (e.prototype.error = function (e) {
                this.hasCompleted || t.prototype.error.call(this, e);
              }),
              (e.prototype.complete = function () {
                (this.hasCompleted = !0),
                  this.hasNext && t.prototype.next.call(this, this.value),
                  t.prototype.complete.call(this);
              }),
              e
            );
          })(nt.Subject),
        },
        ot =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        st = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this),
              (this.callbackFunc = e),
              (this.selector = n),
              (this.args = r),
              (this.context = i),
              (this.scheduler = o);
          }
          return (
            ot(e, t),
            (e.create = function (t, n, r) {
              return (
                void 0 === n && (n = void 0),
                function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o - 0] = arguments[o];
                  return new e(t, n, i, this, r);
                }
              );
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.callbackFunc,
                r = this.args,
                i = this.scheduler,
                o = this.subject;
              if (i)
                return i.schedule(e.dispatch, 0, {
                  source: this,
                  subscriber: t,
                  context: this.context,
                });
              if (!o) {
                o = this.subject = new it.AsyncSubject();
                var s = function t() {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n - 0] = arguments[n];
                  var r = t.source,
                    i = r.selector,
                    o = r.subject;
                  if (i) {
                    var s = M(i).apply(this, e);
                    s === S.errorObject
                      ? o.error(S.errorObject.e)
                      : (o.next(s), o.complete());
                  } else o.next(e.length <= 1 ? e[0] : e), o.complete();
                };
                (s.source = this),
                  M(n).apply(this.context, r.concat(s)) === S.errorObject &&
                    o.error(S.errorObject.e);
              }
              return o.subscribe(t);
            }),
            (e.dispatch = function (t) {
              var e = this,
                n = t.source,
                r = t.subscriber,
                i = t.context,
                o = n.callbackFunc,
                s = n.args,
                c = n.scheduler,
                u = n.subject;
              if (!u) {
                u = n.subject = new it.AsyncSubject();
                var a = function t() {
                  for (var n = [], r = 0; r < arguments.length; r++)
                    n[r - 0] = arguments[r];
                  var i = t.source,
                    o = i.selector,
                    s = i.subject;
                  if (o) {
                    var u = M(o).apply(this, n);
                    e.add(
                      u === S.errorObject
                        ? c.schedule(ut, 0, {
                            err: S.errorObject.e,
                            subject: s,
                          })
                        : c.schedule(ct, 0, { value: u, subject: s })
                    );
                  } else {
                    var a = n.length <= 1 ? n[0] : n;
                    e.add(c.schedule(ct, 0, { value: a, subject: s }));
                  }
                };
                (a.source = n),
                  M(o).apply(i, s.concat(a)) === S.errorObject &&
                    u.error(S.errorObject.e);
              }
              e.add(u.subscribe(r));
            }),
            e
          );
        })(Y.Observable);
      function ct(t) {
        var e = t.subject;
        e.next(t.value), e.complete();
      }
      function ut(t) {
        t.subject.error(t.err);
      }
      Y.Observable.bindCallback = st.create;
      var at =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        pt = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this),
              (this.callbackFunc = e),
              (this.selector = n),
              (this.args = r),
              (this.context = i),
              (this.scheduler = o);
          }
          return (
            at(e, t),
            (e.create = function (t, n, r) {
              return (
                void 0 === n && (n = void 0),
                function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o - 0] = arguments[o];
                  return new e(t, n, i, this, r);
                }
              );
            }),
            (e.prototype._subscribe = function (t) {
              var e = this.callbackFunc,
                n = this.args,
                r = this.scheduler,
                i = this.subject;
              if (r)
                return r.schedule(lt, 0, {
                  source: this,
                  subscriber: t,
                  context: this.context,
                });
              if (!i) {
                i = this.subject = new it.AsyncSubject();
                var o = function t() {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n - 0] = arguments[n];
                  var r = t.source,
                    i = r.selector,
                    o = r.subject,
                    s = e.shift();
                  if (s) o.error(s);
                  else if (i) {
                    var c = M(i).apply(this, e);
                    c === S.errorObject
                      ? o.error(S.errorObject.e)
                      : (o.next(c), o.complete());
                  } else o.next(e.length <= 1 ? e[0] : e), o.complete();
                };
                (o.source = this),
                  M(e).apply(this.context, n.concat(o)) === S.errorObject &&
                    i.error(S.errorObject.e);
              }
              return i.subscribe(t);
            }),
            e
          );
        })(Y.Observable);
      function lt(t) {
        var e = this,
          n = t.source,
          r = t.subscriber,
          i = t.context,
          o = n.callbackFunc,
          s = n.args,
          c = n.scheduler,
          u = n.subject;
        if (!u) {
          u = n.subject = new it.AsyncSubject();
          var a = function t() {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r - 0] = arguments[r];
            var i = t.source,
              o = i.selector,
              s = i.subject,
              u = n.shift();
            if (u) e.add(c.schedule(ft, 0, { err: u, subject: s }));
            else if (o) {
              var a = M(o).apply(this, n);
              e.add(
                a === S.errorObject
                  ? c.schedule(ft, 0, { err: S.errorObject.e, subject: s })
                  : c.schedule(ht, 0, { value: a, subject: s })
              );
            } else {
              var p = n.length <= 1 ? n[0] : n;
              e.add(c.schedule(ht, 0, { value: p, subject: s }));
            }
          };
          (a.source = n),
            M(o).apply(i, s.concat(a)) === S.errorObject &&
              e.add(c.schedule(ft, 0, { err: S.errorObject.e, subject: u }));
        }
        e.add(u.subscribe(r));
      }
      function ht(t) {
        var e = t.subject;
        e.next(t.value), e.complete();
      }
      function ft(t) {
        t.subject.error(t.err);
      }
      Y.Observable.bindNodeCallback = pt.create;
      var bt = function (t) {
          return t && "function" == typeof t.schedule;
        },
        dt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        yt = {
          ScalarObservable: (function (t) {
            function e(e, n) {
              t.call(this),
                (this.value = e),
                (this.scheduler = n),
                (this._isScalar = !0),
                n && (this._isScalar = !1);
            }
            return (
              dt(e, t),
              (e.create = function (t, n) {
                return new e(t, n);
              }),
              (e.dispatch = function (t) {
                var e = t.value,
                  n = t.subscriber;
                t.done
                  ? n.complete()
                  : (n.next(e), n.closed || ((t.done = !0), this.schedule(t)));
              }),
              (e.prototype._subscribe = function (t) {
                var n = this.value,
                  r = this.scheduler;
                if (r)
                  return r.schedule(e.dispatch, 0, {
                    done: !1,
                    value: n,
                    subscriber: t,
                  });
                t.next(n), t.closed || t.complete();
              }),
              e
            );
          })(Y.Observable),
        },
        mt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        vt = {
          EmptyObservable: (function (t) {
            function e(e) {
              t.call(this), (this.scheduler = e);
            }
            return (
              mt(e, t),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.dispatch = function (t) {
                t.subscriber.complete();
              }),
              (e.prototype._subscribe = function (t) {
                var n = this.scheduler;
                if (n) return n.schedule(e.dispatch, 0, { subscriber: t });
                t.complete();
              }),
              e
            );
          })(Y.Observable),
        },
        gt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        _t = {
          ArrayObservable: (function (t) {
            function e(e, n) {
              t.call(this),
                (this.array = e),
                (this.scheduler = n),
                n ||
                  1 !== e.length ||
                  ((this._isScalar = !0), (this.value = e[0]));
            }
            return (
              gt(e, t),
              (e.create = function (t, n) {
                return new e(t, n);
              }),
              (e.of = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n - 0] = arguments[n];
                var r = t[t.length - 1];
                bt(r) ? t.pop() : (r = null);
                var i = t.length;
                return i > 1
                  ? new e(t, r)
                  : 1 === i
                  ? new yt.ScalarObservable(t[0], r)
                  : new vt.EmptyObservable(r);
              }),
              (e.dispatch = function (t) {
                var e = t.array,
                  n = t.index,
                  r = t.subscriber;
                n >= t.count
                  ? r.complete()
                  : (r.next(e[n]),
                    r.closed || ((t.index = n + 1), this.schedule(t)));
              }),
              (e.prototype._subscribe = function (t) {
                var n = this.array,
                  r = n.length,
                  i = this.scheduler;
                if (i)
                  return i.schedule(e.dispatch, 0, {
                    array: n,
                    index: 0,
                    count: r,
                    subscriber: t,
                  });
                for (var o = 0; o < r && !t.closed; o++) t.next(n[o]);
                t.complete();
              }),
              e
            );
          })(Y.Observable),
        },
        wt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ot = {
          OuterSubscriber: (function (t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              wt(e, t),
              (e.prototype.notifyNext = function (t, e, n, r, i) {
                this.destination.next(e);
              }),
              (e.prototype.notifyError = function (t, e) {
                this.destination.error(t);
              }),
              (e.prototype.notifyComplete = function (t) {
                this.destination.complete();
              }),
              e
            );
          })(W.Subscriber),
        },
        kt = function (t) {
          return t && "number" == typeof t.length;
        },
        xt = function (t) {
          return (
            t && "function" != typeof t.subscribe && "function" == typeof t.then
          );
        },
        Ct = y(function (t, e) {
          function n(t) {
            var e = t.Symbol;
            if ("function" == typeof e)
              return (
                e.iterator || (e.iterator = e("iterator polyfill")), e.iterator
              );
            var n = t.Set;
            if (n && "function" == typeof new n()["@@iterator"])
              return "@@iterator";
            var r = t.Map;
            if (r)
              for (
                var i = Object.getOwnPropertyNames(r.prototype), o = 0;
                o < i.length;
                ++o
              ) {
                var s = i[o];
                if (
                  "entries" !== s &&
                  "size" !== s &&
                  r.prototype[s] === r.prototype.entries
                )
                  return s;
              }
            return "@@iterator";
          }
          (e.symbolIteratorPonyfill = n),
            (e.iterator = n(O.root)),
            (e.$$iterator = e.iterator);
        }),
        St =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Pt = {
          InnerSubscriber: (function (t) {
            function e(e, n, r) {
              t.call(this),
                (this.parent = e),
                (this.outerValue = n),
                (this.outerIndex = r),
                (this.index = 0);
            }
            return (
              St(e, t),
              (e.prototype._next = function (t) {
                this.parent.notifyNext(
                  this.outerValue,
                  t,
                  this.outerIndex,
                  this.index++,
                  this
                );
              }),
              (e.prototype._error = function (t) {
                this.parent.notifyError(t, this), this.unsubscribe();
              }),
              (e.prototype._complete = function () {
                this.parent.notifyComplete(this), this.unsubscribe();
              }),
              e
            );
          })(W.Subscriber),
        },
        Mt = function (t, e, n, r) {
          var i = new Pt.InnerSubscriber(t, n, r);
          if (i.closed) return null;
          if (e instanceof Y.Observable)
            return e._isScalar
              ? (i.next(e.value), i.complete(), null)
              : ((i.syncErrorThrowable = !0), e.subscribe(i));
          if (kt(e)) {
            for (var o = 0, s = e.length; o < s && !i.closed; o++) i.next(e[o]);
            i.closed || i.complete();
          } else {
            if (xt(e))
              return (
                e
                  .then(
                    function (t) {
                      i.closed || (i.next(t), i.complete());
                    },
                    function (t) {
                      return i.error(t);
                    }
                  )
                  .then(null, function (t) {
                    O.root.setTimeout(function () {
                      throw t;
                    });
                  }),
                i
              );
            if (e && "function" == typeof e[Ct.iterator])
              for (var c = e[Ct.iterator](); ; ) {
                var u = c.next();
                if (u.done) {
                  i.complete();
                  break;
                }
                if ((i.next(u.value), i.closed)) break;
              }
            else if (e && "function" == typeof e[q.observable]) {
              var a = e[q.observable]();
              if ("function" == typeof a.subscribe)
                return a.subscribe(new Pt.InnerSubscriber(t, n, r));
              i.error(
                new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                )
              );
            } else {
              var p = C(e) ? "an invalid object" : "'" + e + "'";
              i.error(
                new TypeError(
                  "You provided " +
                    p +
                    " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
                )
              );
            }
          }
          return null;
        },
        Tt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        jt = {},
        It = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new At(t, this.project));
            }),
            t
          );
        })(),
        Et = It,
        At = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.project = n),
              (this.active = 0),
              (this.values = []),
              (this.observables = []);
          }
          return (
            Tt(e, t),
            (e.prototype._next = function (t) {
              this.values.push(jt), this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                (this.active = e), (this.toRespond = e);
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  this.add(Mt(this, r, r, n));
                }
              }
            }),
            (e.prototype.notifyComplete = function (t) {
              0 == (this.active -= 1) && this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.values,
                s = this.toRespond
                  ? o[n] === jt
                    ? --this.toRespond
                    : this.toRespond
                  : 0;
              (o[n] = e),
                0 === s &&
                  (this.project
                    ? this._tryProject(o)
                    : this.destination.next(o.slice()));
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(Ot.OuterSubscriber),
        Nt = {
          combineLatest: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            var n = null;
            return (
              "function" == typeof t[t.length - 1] && (n = t.pop()),
              1 === t.length && x.isArray(t[0]) && (t = t[0].slice()),
              function (e) {
                return e.lift.call(
                  new _t.ArrayObservable([e].concat(t)),
                  new It(n)
                );
              }
            );
          },
          CombineLatestOperator: Et,
          CombineLatestSubscriber: At,
        };
      Y.Observable.combineLatest = function () {
        for (var t = [], e = 0; e < arguments.length; e++)
          t[e - 0] = arguments[e];
        var n = null,
          r = null;
        return (
          bt(t[t.length - 1]) && (r = t.pop()),
          "function" == typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && x.isArray(t[0]) && (t = t[0]),
          new _t.ArrayObservable(t, r).lift(new Nt.CombineLatestOperator(n))
        );
      };
      var Ft = { of: _t.ArrayObservable.of },
        Vt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          };
      function Rt(t) {
        var e = t.subscriber;
        e.closed || (e.next(t.value), e.complete());
      }
      function Bt(t) {
        var e = t.subscriber;
        e.closed || e.error(t.err);
      }
      var Lt = {
          PromiseObservable: (function (t) {
            function e(e, n) {
              t.call(this), (this.promise = e), (this.scheduler = n);
            }
            return (
              Vt(e, t),
              (e.create = function (t, n) {
                return new e(t, n);
              }),
              (e.prototype._subscribe = function (t) {
                var e = this,
                  n = this.promise,
                  r = this.scheduler;
                if (null == r)
                  this._isScalar
                    ? t.closed || (t.next(this.value), t.complete())
                    : n
                        .then(
                          function (n) {
                            (e.value = n),
                              (e._isScalar = !0),
                              t.closed || (t.next(n), t.complete());
                          },
                          function (e) {
                            t.closed || t.error(e);
                          }
                        )
                        .then(null, function (t) {
                          O.root.setTimeout(function () {
                            throw t;
                          });
                        });
                else if (this._isScalar) {
                  if (!t.closed)
                    return r.schedule(Rt, 0, {
                      value: this.value,
                      subscriber: t,
                    });
                } else
                  n.then(
                    function (n) {
                      (e.value = n),
                        (e._isScalar = !0),
                        t.closed ||
                          t.add(r.schedule(Rt, 0, { value: n, subscriber: t }));
                    },
                    function (e) {
                      t.closed ||
                        t.add(r.schedule(Bt, 0, { err: e, subscriber: t }));
                    }
                  ).then(null, function (t) {
                    O.root.setTimeout(function () {
                      throw t;
                    });
                  });
              }),
              e
            );
          })(Y.Observable),
        },
        Wt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        qt = (function (t) {
          function e(e, n) {
            if ((t.call(this), (this.scheduler = n), null == e))
              throw new Error("iterator cannot be null.");
            this.iterator = (function (t) {
              var e = t[Ct.iterator];
              if (!e && "string" == typeof t) return new zt(t);
              if (!e && void 0 !== t.length) return new Ut(t);
              if (!e) throw new TypeError("object is not iterable");
              return t[Ct.iterator]();
            })(e);
          }
          return (
            Wt(e, t),
            (e.create = function (t, n) {
              return new e(t, n);
            }),
            (e.dispatch = function (t) {
              var e = t.index,
                n = t.iterator,
                r = t.subscriber;
              if (t.hasError) r.error(t.error);
              else {
                var i = n.next();
                i.done
                  ? r.complete()
                  : (r.next(i.value),
                    (t.index = e + 1),
                    r.closed
                      ? "function" == typeof n.return && n.return()
                      : this.schedule(t));
              }
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.iterator,
                r = this.scheduler;
              if (r)
                return r.schedule(e.dispatch, 0, {
                  index: 0,
                  iterator: n,
                  subscriber: t,
                });
              for (;;) {
                var i = n.next();
                if (i.done) {
                  t.complete();
                  break;
                }
                if ((t.next(i.value), t.closed)) {
                  "function" == typeof n.return && n.return();
                  break;
                }
              }
            }),
            e
          );
        })(Y.Observable),
        zt = (function () {
          function t(t, e, n) {
            void 0 === e && (e = 0),
              void 0 === n && (n = t.length),
              (this.str = t),
              (this.idx = e),
              (this.len = n);
          }
          return (
            (t.prototype[Ct.iterator] = function () {
              return this;
            }),
            (t.prototype.next = function () {
              return this.idx < this.len
                ? { done: !1, value: this.str.charAt(this.idx++) }
                : { done: !0, value: void 0 };
            }),
            t
          );
        })(),
        Ut = (function () {
          function t(t, e, n) {
            void 0 === e && (e = 0),
              void 0 === n &&
                (n = (function (t) {
                  var e,
                    n = +t.length;
                  return isNaN(n)
                    ? 0
                    : 0 !== n &&
                      "number" == typeof (e = n) &&
                      O.root.isFinite(e)
                    ? (n =
                        (function (t) {
                          var e = +t;
                          return 0 === e ? e : isNaN(e) ? e : e < 0 ? -1 : 1;
                        })(n) * Math.floor(Math.abs(n))) <= 0
                      ? 0
                      : n > Ht
                      ? Ht
                      : n
                    : n;
                })(t)),
              (this.arr = t),
              (this.idx = e),
              (this.len = n);
          }
          return (
            (t.prototype[Ct.iterator] = function () {
              return this;
            }),
            (t.prototype.next = function () {
              return this.idx < this.len
                ? { done: !1, value: this.arr[this.idx++] }
                : { done: !0, value: void 0 };
            }),
            t
          );
        })(),
        Ht = Math.pow(2, 53) - 1,
        Yt = { IteratorObservable: qt },
        Dt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Gt = {
          ArrayLikeObservable: (function (t) {
            function e(e, n) {
              t.call(this),
                (this.arrayLike = e),
                (this.scheduler = n),
                n ||
                  1 !== e.length ||
                  ((this._isScalar = !0), (this.value = e[0]));
            }
            return (
              Dt(e, t),
              (e.create = function (t, n) {
                var r = t.length;
                return 0 === r
                  ? new vt.EmptyObservable()
                  : 1 === r
                  ? new yt.ScalarObservable(t[0], n)
                  : new e(t, n);
              }),
              (e.dispatch = function (t) {
                var e = t.arrayLike,
                  n = t.index,
                  r = t.subscriber;
                r.closed ||
                  (n >= t.length
                    ? r.complete()
                    : (r.next(e[n]), (t.index = n + 1), this.schedule(t)));
              }),
              (e.prototype._subscribe = function (t) {
                var n = this.arrayLike,
                  r = this.scheduler,
                  i = n.length;
                if (r)
                  return r.schedule(e.dispatch, 0, {
                    arrayLike: n,
                    index: 0,
                    length: i,
                    subscriber: t,
                  });
                for (var o = 0; o < i && !t.closed; o++) t.next(n[o]);
                t.complete();
              }),
              e
            );
          })(Y.Observable),
        },
        Xt = {
          Notification: (function () {
            function t(t, e, n) {
              (this.kind = t),
                (this.value = e),
                (this.error = n),
                (this.hasValue = "N" === t);
            }
            return (
              (t.prototype.observe = function (t) {
                switch (this.kind) {
                  case "N":
                    return t.next && t.next(this.value);
                  case "E":
                    return t.error && t.error(this.error);
                  case "C":
                    return t.complete && t.complete();
                }
              }),
              (t.prototype.do = function (t, e, n) {
                switch (this.kind) {
                  case "N":
                    return t && t(this.value);
                  case "E":
                    return e && e(this.error);
                  case "C":
                    return n && n();
                }
              }),
              (t.prototype.accept = function (t, e, n) {
                return t && "function" == typeof t.next
                  ? this.observe(t)
                  : this.do(t, e, n);
              }),
              (t.prototype.toObservable = function () {
                switch (this.kind) {
                  case "N":
                    return Y.Observable.of(this.value);
                  case "E":
                    return Y.Observable.throw(this.error);
                  case "C":
                    return Y.Observable.empty();
                }
                throw new Error("unexpected notification kind value");
              }),
              (t.createNext = function (e) {
                return void 0 !== e
                  ? new t("N", e)
                  : t.undefinedValueNotification;
              }),
              (t.createError = function (e) {
                return new t("E", void 0, e);
              }),
              (t.createComplete = function () {
                return t.completeNotification;
              }),
              (t.completeNotification = new t("C")),
              (t.undefinedValueNotification = new t("N", void 0)),
              t
            );
          })(),
        },
        Jt =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        $t = (function () {
          function t(t, e) {
            void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Zt(t, this.scheduler, this.delay));
            }),
            t
          );
        })(),
        Kt = $t,
        Zt = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = 0),
              t.call(this, e),
              (this.scheduler = n),
              (this.delay = r);
          }
          return (
            Jt(e, t),
            (e.dispatch = function (t) {
              t.notification.observe(t.destination), this.unsubscribe();
            }),
            (e.prototype.scheduleMessage = function (t) {
              this.add(
                this.scheduler.schedule(
                  e.dispatch,
                  this.delay,
                  new Qt(t, this.destination)
                )
              );
            }),
            (e.prototype._next = function (t) {
              this.scheduleMessage(Xt.Notification.createNext(t));
            }),
            (e.prototype._error = function (t) {
              this.scheduleMessage(Xt.Notification.createError(t));
            }),
            (e.prototype._complete = function () {
              this.scheduleMessage(Xt.Notification.createComplete());
            }),
            e
          );
        })(W.Subscriber),
        Qt = function (t, e) {
          (this.notification = t), (this.destination = e);
        },
        te = {
          observeOn: function (t, e) {
            return (
              void 0 === e && (e = 0),
              function (n) {
                return n.lift(new $t(t, e));
              }
            );
          },
          ObserveOnOperator: Kt,
          ObserveOnSubscriber: Zt,
          ObserveOnMessage: Qt,
        },
        ee =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ne = {
          FromObservable: (function (t) {
            function e(e, n) {
              t.call(this, null), (this.ish = e), (this.scheduler = n);
            }
            return (
              ee(e, t),
              (e.create = function (t, n) {
                if (null != t) {
                  if ("function" == typeof t[q.observable])
                    return t instanceof Y.Observable && !n ? t : new e(t, n);
                  if (x.isArray(t)) return new _t.ArrayObservable(t, n);
                  if (xt(t)) return new Lt.PromiseObservable(t, n);
                  if (
                    "function" == typeof t[Ct.iterator] ||
                    "string" == typeof t
                  )
                    return new Yt.IteratorObservable(t, n);
                  if (kt(t)) return new Gt.ArrayLikeObservable(t, n);
                }
                throw new TypeError(
                  ((null !== t && typeof t) || t) + " is not observable"
                );
              }),
              (e.prototype._subscribe = function (t) {
                var e = this.ish,
                  n = this.scheduler;
                return null == n
                  ? e[q.observable]().subscribe(t)
                  : e[q.observable]().subscribe(
                      new te.ObserveOnSubscriber(t, n, 0)
                    );
              }),
              e
            );
          })(Y.Observable),
        },
        re = { from: ne.FromObservable.create },
        ie =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        oe = (function () {
          function t(t, e, n) {
            void 0 === n && (n = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.resultSelector = e),
              (this.concurrent = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new se(t, this.project, this.resultSelector, this.concurrent)
              );
            }),
            t
          );
        })(),
        se = (function (t) {
          function e(e, n, r, i) {
            void 0 === i && (i = Number.POSITIVE_INFINITY),
              t.call(this, e),
              (this.project = n),
              (this.resultSelector = r),
              (this.concurrent = i),
              (this.hasCompleted = !1),
              (this.buffer = []),
              (this.active = 0),
              (this.index = 0);
          }
          return (
            ie(e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              this.add(Mt(this, t, e, n));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.resultSelector
                ? this._notifyResultSelector(t, e, n, r)
                : this.destination.next(e);
            }),
            (e.prototype._notifyResultSelector = function (t, e, n, r) {
              var i;
              try {
                i = this.resultSelector(t, e, n, r);
              } catch (o) {
                return void this.destination.error(o);
              }
              this.destination.next(i);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber),
        ce = function (t, e, n) {
          return (
            void 0 === n && (n = Number.POSITIVE_INFINITY),
            function (r) {
              return (
                "number" == typeof e && ((n = e), (e = null)),
                r.lift(new oe(t, e, n))
              );
            }
          );
        },
        ue = function (t) {
          return t;
        },
        ae = function (t) {
          return (
            void 0 === t && (t = Number.POSITIVE_INFINITY), ce(ue, null, t)
          );
        },
        pe = function () {
          return ae(1);
        },
        le = {
          concat: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return 1 === t.length || (2 === t.length && bt(t[1]))
              ? re.from(t[0])
              : pe()(Ft.of.apply(void 0, t));
          },
        };
      Y.Observable.concat = le.concat;
      var he =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        fe = (function (t) {
          function e(e) {
            t.call(this), (this.observableFactory = e);
          }
          return (
            he(e, t),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.prototype._subscribe = function (t) {
              return new be(t, this.observableFactory);
            }),
            e
          );
        })(Y.Observable),
        be = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.factory = n), this.tryDefer();
          }
          return (
            he(e, t),
            (e.prototype.tryDefer = function () {
              try {
                this._callFactory();
              } catch (t) {
                this._error(t);
              }
            }),
            (e.prototype._callFactory = function () {
              var t = this.factory();
              t && this.add(Mt(this, t));
            }),
            e
          );
        })(Ot.OuterSubscriber);
      (Y.Observable.defer = fe.create),
        (Y.Observable.empty = vt.EmptyObservable.create);
      var de =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ye = (function (t) {
          function e(e, n) {
            t.call(this), (this.sources = e), (this.resultSelector = n);
          }
          return (
            de(e, t),
            (e.create = function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n - 0] = arguments[n];
              if (null === t || 0 === arguments.length)
                return new vt.EmptyObservable();
              var r = null;
              return (
                "function" == typeof t[t.length - 1] && (r = t.pop()),
                1 === t.length && x.isArray(t[0]) && (t = t[0]),
                0 === t.length ? new vt.EmptyObservable() : new e(t, r)
              );
            }),
            (e.prototype._subscribe = function (t) {
              return new me(t, this.sources, this.resultSelector);
            }),
            e
          );
        })(Y.Observable),
        me = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.sources = n),
              (this.resultSelector = r),
              (this.completed = 0),
              (this.haveValues = 0);
            var i = n.length;
            (this.total = i), (this.values = new Array(i));
            for (var o = 0; o < i; o++) {
              var s = Mt(this, n[o], null, o);
              s && ((s.outerIndex = o), this.add(s));
            }
          }
          return (
            de(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              (this.values[n] = e),
                i._hasValue || ((i._hasValue = !0), this.haveValues++);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination,
                n = this.haveValues,
                r = this.resultSelector,
                i = this.values,
                o = i.length;
              if (t._hasValue) {
                if ((this.completed++, this.completed === o)) {
                  if (n === o) {
                    var s = r ? r.apply(this, i) : i;
                    e.next(s);
                  }
                  e.complete();
                }
              } else e.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber);
      (Y.Observable.forkJoin = ye.create), (Y.Observable.from = re.from);
      var ve =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ge = Object.prototype.toString,
        _e = (function (t) {
          function e(e, n, r, i) {
            t.call(this),
              (this.sourceObj = e),
              (this.eventName = n),
              (this.selector = r),
              (this.options = i);
          }
          return (
            ve(e, t),
            (e.create = function (t, n, r, i) {
              return k(r) && ((i = r), (r = void 0)), new e(t, n, i, r);
            }),
            (e.setupSubscription = function (t, n, r, i, o) {
              var s;
              if (
                (function (t) {
                  return !!t && "[object NodeList]" === ge.call(t);
                })(t) ||
                (function (t) {
                  return !!t && "[object HTMLCollection]" === ge.call(t);
                })(t)
              )
                for (var c = 0, u = t.length; c < u; c++)
                  e.setupSubscription(t[c], n, r, i, o);
              else if (
                (function (t) {
                  return (
                    !!t &&
                    "function" == typeof t.addEventListener &&
                    "function" == typeof t.removeEventListener
                  );
                })(t)
              ) {
                var a = t;
                t.addEventListener(n, r, o),
                  (s = function () {
                    return a.removeEventListener(n, r, o);
                  });
              } else if (
                (function (t) {
                  return (
                    !!t &&
                    "function" == typeof t.on &&
                    "function" == typeof t.off
                  );
                })(t)
              ) {
                var p = t;
                t.on(n, r),
                  (s = function () {
                    return p.off(n, r);
                  });
              } else {
                if (
                  !(function (t) {
                    return (
                      !!t &&
                      "function" == typeof t.addListener &&
                      "function" == typeof t.removeListener
                    );
                  })(t)
                )
                  throw new TypeError("Invalid event target");
                var l = t;
                t.addListener(n, r),
                  (s = function () {
                    return l.removeListener(n, r);
                  });
              }
              i.add(new E.Subscription(s));
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.selector;
              e.setupSubscription(
                this.sourceObj,
                this.eventName,
                n
                  ? function () {
                      for (var e = [], r = 0; r < arguments.length; r++)
                        e[r - 0] = arguments[r];
                      var i = M(n).apply(void 0, e);
                      i === S.errorObject
                        ? t.error(S.errorObject.e)
                        : t.next(i);
                    }
                  : function (e) {
                      return t.next(e);
                    },
                t,
                this.options
              );
            }),
            e
          );
        })(Y.Observable);
      Y.Observable.fromEvent = _e.create;
      var we =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Oe = (function (t) {
          function e(e, n, r) {
            t.call(this),
              (this.addHandler = e),
              (this.removeHandler = n),
              (this.selector = r);
          }
          return (
            we(e, t),
            (e.create = function (t, n, r) {
              return new e(t, n, r);
            }),
            (e.prototype._subscribe = function (t) {
              var e = this,
                n = this.removeHandler,
                r = this.selector
                  ? function () {
                      for (var n = [], r = 0; r < arguments.length; r++)
                        n[r - 0] = arguments[r];
                      e._callSelector(t, n);
                    }
                  : function (e) {
                      t.next(e);
                    },
                i = this._callAddHandler(r, t);
              k(n) &&
                t.add(
                  new E.Subscription(function () {
                    n(r, i);
                  })
                );
            }),
            (e.prototype._callSelector = function (t, e) {
              try {
                var n = this.selector.apply(this, e);
                t.next(n);
              } catch (r) {
                t.error(r);
              }
            }),
            (e.prototype._callAddHandler = function (t, e) {
              try {
                return this.addHandler(t) || null;
              } catch (n) {
                e.error(n);
              }
            }),
            e
          );
        })(Y.Observable);
      (Y.Observable.fromEventPattern = Oe.create),
        (Y.Observable.fromPromise = Lt.PromiseObservable.create);
      var ke =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        xe = function (t) {
          return t;
        },
        Ce = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this),
              (this.initialState = e),
              (this.condition = n),
              (this.iterate = r),
              (this.resultSelector = i),
              (this.scheduler = o);
          }
          return (
            ke(e, t),
            (e.create = function (t, n, r, i, o) {
              return 1 == arguments.length
                ? new e(
                    t.initialState,
                    t.condition,
                    t.iterate,
                    t.resultSelector || xe,
                    t.scheduler
                  )
                : void 0 === i || bt(i)
                ? new e(t, n, r, xe, i)
                : new e(t, n, r, i, o);
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.initialState;
              if (this.scheduler)
                return this.scheduler.schedule(e.dispatch, 0, {
                  subscriber: t,
                  iterate: this.iterate,
                  condition: this.condition,
                  resultSelector: this.resultSelector,
                  state: n,
                });
              for (
                var r = this.condition,
                  i = this.resultSelector,
                  o = this.iterate;
                ;

              ) {
                if (r) {
                  var s = void 0;
                  try {
                    s = r(n);
                  } catch (u) {
                    return void t.error(u);
                  }
                  if (!s) {
                    t.complete();
                    break;
                  }
                }
                var c = void 0;
                try {
                  c = i(n);
                } catch (u) {
                  return void t.error(u);
                }
                if ((t.next(c), t.closed)) break;
                try {
                  n = o(n);
                } catch (u) {
                  return void t.error(u);
                }
              }
            }),
            (e.dispatch = function (t) {
              var e = t.subscriber,
                n = t.condition;
              if (!e.closed) {
                if (t.needIterate)
                  try {
                    t.state = t.iterate(t.state);
                  } catch (o) {
                    return void e.error(o);
                  }
                else t.needIterate = !0;
                if (n) {
                  var r = void 0;
                  try {
                    r = n(t.state);
                  } catch (o) {
                    return void e.error(o);
                  }
                  if (!r) return void e.complete();
                  if (e.closed) return;
                }
                var i;
                try {
                  i = t.resultSelector(t.state);
                } catch (o) {
                  return void e.error(o);
                }
                if (!e.closed && (e.next(i), !e.closed))
                  return this.schedule(t);
              }
            }),
            e
          );
        })(Y.Observable);
      Y.Observable.generate = Ce.create;
      var Se =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Pe = (function (t) {
          function e(e, n, r) {
            t.call(this),
              (this.condition = e),
              (this.thenSource = n),
              (this.elseSource = r);
          }
          return (
            Se(e, t),
            (e.create = function (t, n, r) {
              return new e(t, n, r);
            }),
            (e.prototype._subscribe = function (t) {
              return new Me(
                t,
                this.condition,
                this.thenSource,
                this.elseSource
              );
            }),
            e
          );
        })(Y.Observable),
        Me = (function (t) {
          function e(e, n, r, i) {
            t.call(this, e),
              (this.condition = n),
              (this.thenSource = r),
              (this.elseSource = i),
              this.tryIf();
          }
          return (
            Se(e, t),
            (e.prototype.tryIf = function () {
              var t = this.condition,
                e = this.thenSource,
                n = this.elseSource;
              try {
                var r = t() ? e : n;
                r ? this.add(Mt(this, r)) : this._complete();
              } catch (i) {
                this._error(i);
              }
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.if = Pe.create;
      var Te = function (t) {
          return !x.isArray(t) && t - parseFloat(t) + 1 >= 0;
        },
        je =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ie = (function (t) {
          function e(e, n) {
            t.call(this);
          }
          return (
            je(e, t),
            (e.prototype.schedule = function (t, e) {
              return void 0 === e && (e = 0), this;
            }),
            e
          );
        })(E.Subscription),
        Ee =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ae = {
          AsyncAction: (function (t) {
            function e(e, n) {
              t.call(this, e, n),
                (this.scheduler = e),
                (this.pending = !1),
                (this.work = n);
            }
            return (
              Ee(e, t),
              (e.prototype.schedule = function (t, e) {
                if ((void 0 === e && (e = 0), this.closed)) return this;
                (this.state = t), (this.pending = !0);
                var n = this.id,
                  r = this.scheduler;
                return (
                  null != n && (this.id = this.recycleAsyncId(r, n, e)),
                  (this.delay = e),
                  (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                  this
                );
              }),
              (e.prototype.requestAsyncId = function (t, e, n) {
                return (
                  void 0 === n && (n = 0),
                  O.root.setInterval(t.flush.bind(t, this), n)
                );
              }),
              (e.prototype.recycleAsyncId = function (t, e, n) {
                if (
                  (void 0 === n && (n = 0),
                  null !== n && this.delay === n && !1 === this.pending)
                )
                  return e;
                O.root.clearInterval(e);
              }),
              (e.prototype.execute = function (t, e) {
                if (this.closed)
                  return new Error("executing a cancelled action");
                this.pending = !1;
                var n = this._execute(t, e);
                if (n) return n;
                !1 === this.pending &&
                  null != this.id &&
                  (this.id = this.recycleAsyncId(
                    this.scheduler,
                    this.id,
                    null
                  ));
              }),
              (e.prototype._execute = function (t, e) {
                var n = !1,
                  r = void 0;
                try {
                  this.work(t);
                } catch (i) {
                  (n = !0), (r = (!!i && i) || new Error(i));
                }
                if (n) return this.unsubscribe(), r;
              }),
              (e.prototype._unsubscribe = function () {
                var t = this.id,
                  e = this.scheduler,
                  n = e.actions,
                  r = n.indexOf(this);
                (this.work = null),
                  (this.state = null),
                  (this.pending = !1),
                  (this.scheduler = null),
                  -1 !== r && n.splice(r, 1),
                  null != t && (this.id = this.recycleAsyncId(e, t, null)),
                  (this.delay = null);
              }),
              e
            );
          })(Ie),
        },
        Ne =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Fe = {
          AsyncScheduler: (function (t) {
            function e() {
              t.apply(this, arguments),
                (this.actions = []),
                (this.active = !1),
                (this.scheduled = void 0);
            }
            return (
              Ne(e, t),
              (e.prototype.flush = function (t) {
                var e = this.actions;
                if (this.active) e.push(t);
                else {
                  var n;
                  this.active = !0;
                  do {
                    if ((n = t.execute(t.state, t.delay))) break;
                  } while ((t = e.shift()));
                  if (((this.active = !1), n)) {
                    for (; (t = e.shift()); ) t.unsubscribe();
                    throw n;
                  }
                }
              }),
              e
            );
          })(
            (function () {
              function t(e, n) {
                void 0 === n && (n = t.now),
                  (this.SchedulerAction = e),
                  (this.now = n);
              }
              return (
                (t.prototype.schedule = function (t, e, n) {
                  return (
                    void 0 === e && (e = 0),
                    new this.SchedulerAction(this, t).schedule(n, e)
                  );
                }),
                (t.now = Date.now
                  ? Date.now
                  : function () {
                      return +new Date();
                    }),
                t
              );
            })()
          ),
        },
        Ve = { async: new Fe.AsyncScheduler(Ae.AsyncAction) },
        Re =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Be = (function (t) {
          function e(e, n) {
            void 0 === e && (e = 0),
              void 0 === n && (n = Ve.async),
              t.call(this),
              (this.period = e),
              (this.scheduler = n),
              (!Te(e) || e < 0) && (this.period = 0),
              (n && "function" == typeof n.schedule) ||
                (this.scheduler = Ve.async);
          }
          return (
            Re(e, t),
            (e.create = function (t, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === n && (n = Ve.async),
                new e(t, n)
              );
            }),
            (e.dispatch = function (t) {
              var e = t.subscriber,
                n = t.period;
              e.next(t.index),
                e.closed || ((t.index += 1), this.schedule(t, n));
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.period;
              t.add(
                this.scheduler.schedule(e.dispatch, n, {
                  index: 0,
                  subscriber: t,
                  period: n,
                })
              );
            }),
            e
          );
        })(Y.Observable);
      Y.Observable.interval = Be.create;
      var Le = {
        merge: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          var n = Number.POSITIVE_INFINITY,
            r = null,
            i = t[t.length - 1];
          return (
            bt(i)
              ? ((r = t.pop()),
                t.length > 1 &&
                  "number" == typeof t[t.length - 1] &&
                  (n = t.pop()))
              : "number" == typeof i && (n = t.pop()),
            null === r && 1 === t.length && t[0] instanceof Y.Observable
              ? t[0]
              : ae(n)(new _t.ArrayObservable(t, r))
          );
        },
      };
      Y.Observable.merge = Le.merge;
      var We =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        qe = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ue(t));
            }),
            t
          );
        })(),
        ze = qe,
        Ue = (function (t) {
          function e(e) {
            t.call(this, e),
              (this.hasFirst = !1),
              (this.observables = []),
              (this.subscriptions = []);
          }
          return (
            We(e, t),
            (e.prototype._next = function (t) {
              this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                for (var n = 0; n < e && !this.hasFirst; n++) {
                  var r = t[n],
                    i = Mt(this, r, r, n);
                  this.subscriptions && this.subscriptions.push(i), this.add(i);
                }
                this.observables = null;
              }
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              if (!this.hasFirst) {
                this.hasFirst = !0;
                for (var o = 0; o < this.subscriptions.length; o++)
                  if (o !== n) {
                    var s = this.subscriptions[o];
                    s.unsubscribe(), this.remove(s);
                  }
                this.subscriptions = null;
              }
              this.destination.next(e);
            }),
            e
          );
        })(Ot.OuterSubscriber),
        He = {
          race: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            if (1 === t.length) {
              if (!x.isArray(t[0])) return t[0];
              t = t[0];
            }
            return new _t.ArrayObservable(t).lift(new qe());
          },
          RaceOperator: ze,
          RaceSubscriber: Ue,
        };
      Y.Observable.race = He.race;
      var Ye =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        De = (function (t) {
          function e() {
            t.call(this);
          }
          return (
            Ye(e, t),
            (e.create = function () {
              return new e();
            }),
            (e.prototype._subscribe = function (t) {
              z.noop();
            }),
            e
          );
        })(Y.Observable);
      (Y.Observable.never = De.create), (Y.Observable.of = Ft.of);
      var Ge =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Xe = (function () {
          function t(t) {
            this.nextSources = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Je(t, this.nextSources));
            }),
            t
          );
        })(),
        Je = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.destination = e), (this.nextSources = n);
          }
          return (
            Ge(e, t),
            (e.prototype.notifyError = function (t, e) {
              this.subscribeToNextSource();
            }),
            (e.prototype.notifyComplete = function (t) {
              this.subscribeToNextSource();
            }),
            (e.prototype._error = function (t) {
              this.subscribeToNextSource();
            }),
            (e.prototype._complete = function () {
              this.subscribeToNextSource();
            }),
            (e.prototype.subscribeToNextSource = function () {
              var t = this.nextSources.shift();
              t ? this.add(Mt(this, t)) : this.destination.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber),
        $e = {
          onErrorResumeNext: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return (
              1 === t.length && x.isArray(t[0]) && (t = t[0]),
              function (e) {
                return e.lift(new Xe(t));
              }
            );
          },
          onErrorResumeNextStatic: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            var n = null;
            return (
              1 === t.length && x.isArray(t[0]) && (t = t[0]),
              (n = t.shift()),
              new ne.FromObservable(n, null).lift(new Xe(t))
            );
          },
        };
      Y.Observable.onErrorResumeNext = $e.onErrorResumeNextStatic;
      var Ke =
        (d && d.__extends) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          function r() {
            this.constructor = t;
          }
          t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r());
        };
      function Ze(t) {
        var e = t.index,
          n = t.subscriber;
        if (e !== t.length) {
          var r = t.keys[e];
          n.next([r, t.obj[r]]), (t.index = e + 1), this.schedule(t);
        } else n.complete();
      }
      var Qe = (function (t) {
        function e(e, n) {
          t.call(this),
            (this.obj = e),
            (this.scheduler = n),
            (this.keys = Object.keys(e));
        }
        return (
          Ke(e, t),
          (e.create = function (t, n) {
            return new e(t, n);
          }),
          (e.prototype._subscribe = function (t) {
            var e = this.keys,
              n = this.scheduler,
              r = e.length;
            if (n)
              return n.schedule(Ze, 0, {
                obj: this.obj,
                keys: e,
                length: r,
                index: 0,
                subscriber: t,
              });
            for (var i = 0; i < r; i++) {
              var o = e[i];
              t.next([o, this.obj[o]]);
            }
            t.complete();
          }),
          e
        );
      })(Y.Observable);
      Y.Observable.pairs = Qe.create;
      var tn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        en = (function (t) {
          function e(e, n, r) {
            t.call(this),
              (this.start = e),
              (this._count = n),
              (this.scheduler = r);
          }
          return (
            tn(e, t),
            (e.create = function (t, n, r) {
              return (
                void 0 === t && (t = 0), void 0 === n && (n = 0), new e(t, n, r)
              );
            }),
            (e.dispatch = function (t) {
              var e = t.start,
                n = t.index,
                r = t.subscriber;
              n >= t.count
                ? r.complete()
                : (r.next(e),
                  r.closed ||
                    ((t.index = n + 1), (t.start = e + 1), this.schedule(t)));
            }),
            (e.prototype._subscribe = function (t) {
              var n = 0,
                r = this.start,
                i = this._count,
                o = this.scheduler;
              if (o)
                return o.schedule(e.dispatch, 0, {
                  index: n,
                  count: i,
                  start: r,
                  subscriber: t,
                });
              for (;;) {
                if (n++ >= i) {
                  t.complete();
                  break;
                }
                if ((t.next(r++), t.closed)) break;
              }
            }),
            e
          );
        })(Y.Observable);
      Y.Observable.range = en.create;
      var nn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        rn = (function (t) {
          function e(e, n) {
            t.call(this),
              (this.resourceFactory = e),
              (this.observableFactory = n);
          }
          return (
            nn(e, t),
            (e.create = function (t, n) {
              return new e(t, n);
            }),
            (e.prototype._subscribe = function (t) {
              var e,
                n = this.resourceFactory,
                r = this.observableFactory;
              try {
                return (e = n()), new on(t, e, r);
              } catch (i) {
                t.error(i);
              }
            }),
            e
          );
        })(Y.Observable),
        on = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.resource = n),
              (this.observableFactory = r),
              e.add(n),
              this.tryUse();
          }
          return (
            nn(e, t),
            (e.prototype.tryUse = function () {
              try {
                var t = this.observableFactory.call(this, this.resource);
                t && this.add(Mt(this, t));
              } catch (e) {
                this._error(e);
              }
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.using = rn.create;
      var sn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        cn = (function (t) {
          function e(e, n) {
            t.call(this), (this.error = e), (this.scheduler = n);
          }
          return (
            sn(e, t),
            (e.create = function (t, n) {
              return new e(t, n);
            }),
            (e.dispatch = function (t) {
              t.subscriber.error(t.error);
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.error,
                r = this.scheduler;
              if (((t.syncErrorThrowable = !0), r))
                return r.schedule(e.dispatch, 0, { error: n, subscriber: t });
              t.error(n);
            }),
            e
          );
        })(Y.Observable);
      Y.Observable.throw = cn.create;
      var un = function (t) {
          return t instanceof Date && !isNaN(+t);
        },
        an =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        pn = {
          timer: (function (t) {
            function e(e, n, r) {
              void 0 === e && (e = 0),
                t.call(this),
                (this.period = -1),
                (this.dueTime = 0),
                Te(n)
                  ? (this.period = Number(n) < 1 ? 1 : Number(n))
                  : bt(n) && (r = n),
                bt(r) || (r = Ve.async),
                (this.scheduler = r),
                (this.dueTime = un(e) ? +e - this.scheduler.now() : e);
            }
            return (
              an(e, t),
              (e.create = function (t, n, r) {
                return void 0 === t && (t = 0), new e(t, n, r);
              }),
              (e.dispatch = function (t) {
                var e = t.index,
                  n = t.period,
                  r = t.subscriber;
                if ((r.next(e), !r.closed)) {
                  if (-1 === n) return r.complete();
                  (t.index = e + 1), this.schedule(t, n);
                }
              }),
              (e.prototype._subscribe = function (t) {
                return this.scheduler.schedule(e.dispatch, this.dueTime, {
                  index: 0,
                  period: this.period,
                  subscriber: t,
                });
              }),
              e
            );
          })(Y.Observable).create,
        };
      Y.Observable.timer = pn.timer;
      var ln =
        (d && d.__extends) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          function r() {
            this.constructor = t;
          }
          t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r());
        };
      function hn() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t[e - 0] = arguments[e];
        var n = t[t.length - 1];
        return (
          "function" == typeof n && t.pop(),
          new _t.ArrayObservable(t).lift(new bn(n))
        );
      }
      var fn = hn,
        bn = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new yn(t, this.project));
            }),
            t
          );
        })(),
        dn = bn,
        yn = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Object.create(null)),
              t.call(this, e),
              (this.iterators = []),
              (this.active = 0),
              (this.project = "function" == typeof n ? n : null),
              (this.values = r);
          }
          return (
            ln(e, t),
            (e.prototype._next = function (t) {
              var e = this.iterators;
              x.isArray(t)
                ? e.push(new gn(t))
                : e.push(
                    "function" == typeof t[Ct.iterator]
                      ? new vn(t[Ct.iterator]())
                      : new _n(this.destination, this, t)
                  );
            }),
            (e.prototype._complete = function () {
              var t = this.iterators,
                e = t.length;
              if (0 !== e) {
                this.active = e;
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  r.stillUnsubscribed
                    ? this.add(r.subscribe(r, n))
                    : this.active--;
                }
              } else this.destination.complete();
            }),
            (e.prototype.notifyInactive = function () {
              this.active--, 0 === this.active && this.destination.complete();
            }),
            (e.prototype.checkIterators = function () {
              for (
                var t = this.iterators,
                  e = t.length,
                  n = this.destination,
                  r = 0;
                r < e;
                r++
              )
                if ("function" == typeof (s = t[r]).hasValue && !s.hasValue())
                  return;
              var i = !1,
                o = [];
              for (r = 0; r < e; r++) {
                var s,
                  c = (s = t[r]).next();
                if ((s.hasCompleted() && (i = !0), c.done))
                  return void n.complete();
                o.push(c.value);
              }
              this.project ? this._tryProject(o) : n.next(o), i && n.complete();
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(W.Subscriber),
        mn = yn,
        vn = (function () {
          function t(t) {
            (this.iterator = t), (this.nextResult = t.next());
          }
          return (
            (t.prototype.hasValue = function () {
              return !0;
            }),
            (t.prototype.next = function () {
              var t = this.nextResult;
              return (this.nextResult = this.iterator.next()), t;
            }),
            (t.prototype.hasCompleted = function () {
              var t = this.nextResult;
              return t && t.done;
            }),
            t
          );
        })(),
        gn = (function () {
          function t(t) {
            (this.array = t),
              (this.index = 0),
              (this.length = 0),
              (this.length = t.length);
          }
          return (
            (t.prototype[Ct.iterator] = function () {
              return this;
            }),
            (t.prototype.next = function (t) {
              var e = this.index++;
              return e < this.length
                ? { value: this.array[e], done: !1 }
                : { value: null, done: !0 };
            }),
            (t.prototype.hasValue = function () {
              return this.array.length > this.index;
            }),
            (t.prototype.hasCompleted = function () {
              return this.array.length === this.index;
            }),
            t
          );
        })(),
        _n = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.parent = n),
              (this.observable = r),
              (this.stillUnsubscribed = !0),
              (this.buffer = []),
              (this.isComplete = !1);
          }
          return (
            ln(e, t),
            (e.prototype[Ct.iterator] = function () {
              return this;
            }),
            (e.prototype.next = function () {
              var t = this.buffer;
              return 0 === t.length && this.isComplete
                ? { value: null, done: !0 }
                : { value: t.shift(), done: !1 };
            }),
            (e.prototype.hasValue = function () {
              return this.buffer.length > 0;
            }),
            (e.prototype.hasCompleted = function () {
              return 0 === this.buffer.length && this.isComplete;
            }),
            (e.prototype.notifyComplete = function () {
              this.buffer.length > 0
                ? ((this.isComplete = !0), this.parent.notifyInactive())
                : this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.buffer.push(e), this.parent.checkIterators();
            }),
            (e.prototype.subscribe = function (t, e) {
              return Mt(this, this.observable, this, e);
            }),
            e
          );
        })(Ot.OuterSubscriber),
        wn = {
          zip: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return function (e) {
              return e.lift.call(hn.apply(void 0, [e].concat(t)));
            };
          },
          zipStatic: fn,
          ZipOperator: dn,
          ZipSubscriber: mn,
        };
      Y.Observable.zip = wn.zipStatic;
      var On =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        kn = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new xn(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        xn = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.project = n),
              (this.count = 0),
              (this.thisArg = r || this);
          }
          return (
            On(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(W.Subscriber),
        Cn = function (t, e) {
          return function (n) {
            if ("function" != typeof t)
              throw new TypeError(
                "argument is not a function. Are you looking for `mapTo()`?"
              );
            return n.lift(new kn(t, e));
          };
        },
        Sn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          };
      function Pn() {
        if (O.root.XMLHttpRequest) return new O.root.XMLHttpRequest();
        if (O.root.XDomainRequest) return new O.root.XDomainRequest();
        throw new Error("CORS is not supported by your browser");
      }
      function Mn(t, e) {
        return (
          void 0 === e && (e = null),
          new Fn({ method: "GET", url: t, headers: e })
        );
      }
      function Tn(t, e, n) {
        return new Fn({ method: "POST", url: t, body: e, headers: n });
      }
      function jn(t, e) {
        return new Fn({ method: "DELETE", url: t, headers: e });
      }
      function In(t, e, n) {
        return new Fn({ method: "PUT", url: t, body: e, headers: n });
      }
      function En(t, e, n) {
        return new Fn({ method: "PATCH", url: t, body: e, headers: n });
      }
      var An = Cn(function (t, e) {
        return t.response;
      });
      function Nn(t, e) {
        return An(
          new Fn({ method: "GET", url: t, responseType: "json", headers: e })
        );
      }
      var Fn = (function (t) {
          function e(e) {
            t.call(this);
            var n = {
              async: !0,
              createXHR: function () {
                return this.crossDomain
                  ? Pn.call(this)
                  : (function () {
                      if (O.root.XMLHttpRequest)
                        return new O.root.XMLHttpRequest();
                      var t = void 0;
                      try {
                        for (
                          var e = [
                              "Msxml2.XMLHTTP",
                              "Microsoft.XMLHTTP",
                              "Msxml2.XMLHTTP.4.0",
                            ],
                            n = 0;
                          n < 3;
                          n++
                        )
                          try {
                            if (new O.root.ActiveXObject((t = e[n]))) break;
                          } catch (r) {}
                        return new O.root.ActiveXObject(t);
                      } catch (r) {
                        throw new Error(
                          "XMLHttpRequest is not supported by your browser"
                        );
                      }
                    })();
              },
              crossDomain: !1,
              withCredentials: !1,
              headers: {},
              method: "GET",
              responseType: "json",
              timeout: 0,
            };
            if ("string" == typeof e) n.url = e;
            else for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
            this.request = n;
          }
          var n;
          return (
            Sn(e, t),
            (e.prototype._subscribe = function (t) {
              return new Rn(t, this.request);
            }),
            (e.create =
              (((n = function (t) {
                return new e(t);
              }).get = Mn),
              (n.post = Tn),
              (n.delete = jn),
              (n.put = In),
              (n.patch = En),
              (n.getJSON = Nn),
              n)),
            e
          );
        })(Y.Observable),
        Vn = Fn,
        Rn = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.request = n), (this.done = !1);
            var r = (n.headers = n.headers || {});
            n.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
              "Content-Type" in r ||
                (O.root.FormData && n.body instanceof O.root.FormData) ||
                void 0 === n.body ||
                (r["Content-Type"] =
                  "application/x-www-form-urlencoded; charset=UTF-8"),
              (n.body = this.serializeBody(n.body, n.headers["Content-Type"])),
              this.send();
          }
          return (
            Sn(e, t),
            (e.prototype.next = function (t) {
              this.done = !0;
              var e = this.destination,
                n = new Bn(t, this.xhr, this.request);
              e.next(n);
            }),
            (e.prototype.send = function () {
              var t = this.request,
                e = this.request,
                n = e.user,
                r = e.method,
                i = e.url,
                o = e.async,
                s = e.password,
                c = e.headers,
                u = e.body,
                a = M(t.createXHR).call(t);
              if (a === S.errorObject) this.error(S.errorObject.e);
              else {
                if (
                  ((this.xhr = a),
                  this.setupEvents(a, t),
                  (n
                    ? M(a.open).call(a, r, i, o, n, s)
                    : M(a.open).call(a, r, i, o)) === S.errorObject)
                )
                  return this.error(S.errorObject.e), null;
                if (
                  (o &&
                    ((a.timeout = t.timeout),
                    (a.responseType = t.responseType)),
                  "withCredentials" in a &&
                    (a.withCredentials = !!t.withCredentials),
                  this.setHeaders(a, c),
                  (u ? M(a.send).call(a, u) : M(a.send).call(a)) ===
                    S.errorObject)
                )
                  return this.error(S.errorObject.e), null;
              }
              return a;
            }),
            (e.prototype.serializeBody = function (t, e) {
              if (!t || "string" == typeof t) return t;
              if (O.root.FormData && t instanceof O.root.FormData) return t;
              if (e) {
                var n = e.indexOf(";");
                -1 !== n && (e = e.substring(0, n));
              }
              switch (e) {
                case "application/x-www-form-urlencoded":
                  return Object.keys(t)
                    .map(function (e) {
                      return (
                        encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                      );
                    })
                    .join("&");
                case "application/json":
                  return JSON.stringify(t);
                default:
                  return t;
              }
            }),
            (e.prototype.setHeaders = function (t, e) {
              for (var n in e)
                e.hasOwnProperty(n) && t.setRequestHeader(n, e[n]);
            }),
            (e.prototype.setupEvents = function (t, e) {
              var n,
                r,
                i = e.progressSubscriber;
              function o(t) {
                var e = o.subscriber,
                  n = o.progressSubscriber,
                  r = o.request;
                n && n.error(t), e.error(new qn(this, r));
              }
              function s(t) {
                var e = s.subscriber,
                  n = s.progressSubscriber,
                  r = s.request;
                if (4 === this.readyState) {
                  var i = 1223 === this.status ? 204 : this.status;
                  0 === i &&
                    (i = (
                      "text" === this.responseType
                        ? this.response || this.responseText
                        : this.response
                    )
                      ? 200
                      : 0),
                    200 <= i && i < 300
                      ? (n && n.complete(), e.next(t), e.complete())
                      : (n && n.error(t),
                        e.error(new Ln("ajax error " + i, this, r)));
                }
              }
              (t.ontimeout = o),
                (o.request = e),
                (o.subscriber = this),
                (o.progressSubscriber = i),
                t.upload &&
                  "withCredentials" in t &&
                  (i &&
                    ((n = function (t) {
                      n.progressSubscriber.next(t);
                    }),
                    O.root.XDomainRequest
                      ? (t.onprogress = n)
                      : (t.upload.onprogress = n),
                    (n.progressSubscriber = i)),
                  (t.onerror = r =
                    function (t) {
                      var e = r.progressSubscriber,
                        n = r.subscriber,
                        i = r.request;
                      e && e.error(t), n.error(new Ln("ajax error", this, i));
                    }),
                  (r.request = e),
                  (r.subscriber = this),
                  (r.progressSubscriber = i)),
                (t.onreadystatechange = s),
                (s.subscriber = this),
                (s.progressSubscriber = i),
                (s.request = e);
            }),
            (e.prototype.unsubscribe = function () {
              var e = this.xhr;
              !this.done &&
                e &&
                4 !== e.readyState &&
                "function" == typeof e.abort &&
                e.abort(),
                t.prototype.unsubscribe.call(this);
            }),
            e
          );
        })(W.Subscriber),
        Bn = function (t, e, n) {
          (this.originalEvent = t),
            (this.xhr = e),
            (this.request = n),
            (this.status = e.status),
            (this.responseType = e.responseType || n.responseType),
            (this.response = Wn(this.responseType, e));
        },
        Ln = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.message = e),
              (this.xhr = n),
              (this.request = r),
              (this.status = n.status),
              (this.responseType = n.responseType || r.responseType),
              (this.response = Wn(this.responseType, n));
          }
          return Sn(e, t), e;
        })(Error);
      function Wn(t, e) {
        switch (t) {
          case "json":
            return "response" in e
              ? e.responseType
                ? e.response
                : JSON.parse(e.response || e.responseText || "null")
              : JSON.parse(e.responseText || "null");
          case "xml":
            return e.responseXML;
          case "text":
          default:
            return "response" in e ? e.response : e.responseText;
        }
      }
      var qn = (function (t) {
        function e(e, n) {
          t.call(this, "ajax timeout", e, n);
        }
        return Sn(e, t), e;
      })(Ln);
      Y.Observable.ajax = Vn.create;
      var zn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Un = {
          QueueAction: (function (t) {
            function e(e, n) {
              t.call(this, e, n), (this.scheduler = e), (this.work = n);
            }
            return (
              zn(e, t),
              (e.prototype.schedule = function (e, n) {
                return (
                  void 0 === n && (n = 0),
                  n > 0
                    ? t.prototype.schedule.call(this, e, n)
                    : ((this.delay = n),
                      (this.state = e),
                      this.scheduler.flush(this),
                      this)
                );
              }),
              (e.prototype.execute = function (e, n) {
                return n > 0 || this.closed
                  ? t.prototype.execute.call(this, e, n)
                  : this._execute(e, n);
              }),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return (
                  void 0 === r && (r = 0),
                  (null !== r && r > 0) || (null === r && this.delay > 0)
                    ? t.prototype.requestAsyncId.call(this, e, n, r)
                    : e.flush(this)
                );
              }),
              e
            );
          })(Ae.AsyncAction),
        },
        Hn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Yn = new ((function (t) {
          function e() {
            t.apply(this, arguments);
          }
          return Hn(e, t), e;
        })(Fe.AsyncScheduler))(Un.QueueAction),
        Dn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Gn = (function (t) {
          function e(e, n, r) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              void 0 === n && (n = Number.POSITIVE_INFINITY),
              t.call(this),
              (this.scheduler = r),
              (this._events = []),
              (this._bufferSize = e < 1 ? 1 : e),
              (this._windowTime = n < 1 ? 1 : n);
          }
          return (
            Dn(e, t),
            (e.prototype.next = function (e) {
              var n = this._getNow();
              this._events.push(new Xn(n, e)),
                this._trimBufferThenGetEvents(),
                t.prototype.next.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              var e,
                n = this._trimBufferThenGetEvents(),
                r = this.scheduler;
              if (this.closed) throw new G.ObjectUnsubscribedError();
              this.hasError
                ? (e = E.Subscription.EMPTY)
                : this.isStopped
                ? (e = E.Subscription.EMPTY)
                : (this.observers.push(t),
                  (e = new J.SubjectSubscription(this, t))),
                r && t.add((t = new te.ObserveOnSubscriber(t, r)));
              for (var i = n.length, o = 0; o < i && !t.closed; o++)
                t.next(n[o].value);
              return (
                this.hasError
                  ? t.error(this.thrownError)
                  : this.isStopped && t.complete(),
                e
              );
            }),
            (e.prototype._getNow = function () {
              return (this.scheduler || Yn).now();
            }),
            (e.prototype._trimBufferThenGetEvents = function () {
              for (
                var t = this._getNow(),
                  e = this._bufferSize,
                  n = this._windowTime,
                  r = this._events,
                  i = r.length,
                  o = 0;
                o < i && !(t - r[o].time < n);

              )
                o++;
              return (
                i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r
              );
            }),
            e
          );
        })(nt.Subject),
        Xn = function (t, e) {
          (this.time = t), (this.value = e);
        },
        Jn = { ReplaySubject: Gn };
      function $n(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = e.length, i = 0; i < r; i++) {
          var o = e[i];
          for (var s in o) o.hasOwnProperty(s) && (t[s] = o[s]);
        }
        return t;
      }
      function Kn(t) {
        return t.Object.assign || $n;
      }
      var Zn = { assignImpl: $n, getAssign: Kn, assign: Kn(O.root) },
        Qn =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        tr = (function (t) {
          function e(e, n) {
            if (e instanceof Y.Observable) t.call(this, n, e);
            else {
              if (
                (t.call(this),
                (this.WebSocketCtor = O.root.WebSocket),
                (this._output = new nt.Subject()),
                "string" == typeof e ? (this.url = e) : Zn.assign(this, e),
                !this.WebSocketCtor)
              )
                throw new Error("no WebSocket constructor can be found");
              this.destination = new Jn.ReplaySubject();
            }
          }
          return (
            Qn(e, t),
            (e.prototype.resultSelector = function (t) {
              return JSON.parse(t.data);
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            (e.prototype.lift = function (t) {
              var n = new e(this, this.destination);
              return (n.operator = t), n;
            }),
            (e.prototype._resetState = function () {
              (this.socket = null),
                this.source || (this.destination = new Jn.ReplaySubject()),
                (this._output = new nt.Subject());
            }),
            (e.prototype.multiplex = function (t, e, n) {
              var r = this;
              return new Y.Observable(function (i) {
                var o = M(t)();
                o === S.errorObject ? i.error(S.errorObject.e) : r.next(o);
                var s = r.subscribe(
                  function (t) {
                    var e = M(n)(t);
                    e === S.errorObject
                      ? i.error(S.errorObject.e)
                      : e && i.next(t);
                  },
                  function (t) {
                    return i.error(t);
                  },
                  function () {
                    return i.complete();
                  }
                );
                return function () {
                  var t = M(e)();
                  t === S.errorObject ? i.error(S.errorObject.e) : r.next(t),
                    s.unsubscribe();
                };
              });
            }),
            (e.prototype._connectSocket = function () {
              var t = this,
                e = this.WebSocketCtor,
                n = this._output,
                r = null;
              try {
                (r = this.protocol
                  ? new e(this.url, this.protocol)
                  : new e(this.url)),
                  (this.socket = r),
                  this.binaryType && (this.socket.binaryType = this.binaryType);
              } catch (o) {
                return void n.error(o);
              }
              var i = new E.Subscription(function () {
                (t.socket = null), r && 1 === r.readyState && r.close();
              });
              (r.onopen = function (e) {
                var o = t.openObserver;
                o && o.next(e);
                var s = t.destination;
                (t.destination = W.Subscriber.create(
                  function (t) {
                    return 1 === r.readyState && r.send(t);
                  },
                  function (e) {
                    var i = t.closingObserver;
                    i && i.next(void 0),
                      e && e.code
                        ? r.close(e.code, e.reason)
                        : n.error(
                            new TypeError(
                              "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"
                            )
                          ),
                      t._resetState();
                  },
                  function () {
                    var e = t.closingObserver;
                    e && e.next(void 0), r.close(), t._resetState();
                  }
                )),
                  s &&
                    s instanceof Jn.ReplaySubject &&
                    i.add(s.subscribe(t.destination));
              }),
                (r.onerror = function (e) {
                  t._resetState(), n.error(e);
                }),
                (r.onclose = function (e) {
                  t._resetState();
                  var r = t.closeObserver;
                  r && r.next(e), e.wasClean ? n.complete() : n.error(e);
                }),
                (r.onmessage = function (e) {
                  var r = M(t.resultSelector)(e);
                  r === S.errorObject ? n.error(S.errorObject.e) : n.next(r);
                });
            }),
            (e.prototype._subscribe = function (t) {
              var e = this,
                n = this.source;
              if (n) return n.subscribe(t);
              this.socket || this._connectSocket();
              var r = new E.Subscription();
              return (
                r.add(this._output.subscribe(t)),
                r.add(function () {
                  var t = e.socket;
                  0 === e._output.observers.length &&
                    (t && 1 === t.readyState && t.close(), e._resetState());
                }),
                r
              );
            }),
            (e.prototype.unsubscribe = function () {
              var e = this.source,
                n = this.socket;
              n && 1 === n.readyState && (n.close(), this._resetState()),
                t.prototype.unsubscribe.call(this),
                e || (this.destination = new Jn.ReplaySubject());
            }),
            e
          );
        })(nt.AnonymousSubject);
      Y.Observable.webSocket = tr.create;
      var er =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        nr = (function () {
          function t(t) {
            this.closingNotifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new rr(t, this.closingNotifier));
            }),
            t
          );
        })(),
        rr = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.buffer = []), this.add(Mt(this, n));
          }
          return (
            er(e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.buffer;
              (this.buffer = []), this.destination.next(o);
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.buffer = {
        buffer: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new nr(t));
            };
          })(t)(this);
        },
      }.buffer;
      var ir =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        or = (function () {
          function t(t, e) {
            (this.bufferSize = t),
              (this.startBufferEvery = e),
              (this.subscriberClass = e && t !== e ? cr : sr);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new this.subscriberClass(
                  t,
                  this.bufferSize,
                  this.startBufferEvery
                )
              );
            }),
            t
          );
        })(),
        sr = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.bufferSize = n), (this.buffer = []);
          }
          return (
            ir(e, t),
            (e.prototype._next = function (t) {
              var e = this.buffer;
              e.push(t),
                e.length == this.bufferSize &&
                  (this.destination.next(e), (this.buffer = []));
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              e.length > 0 && this.destination.next(e),
                t.prototype._complete.call(this);
            }),
            e
          );
        })(W.Subscriber),
        cr = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.bufferSize = n),
              (this.startBufferEvery = r),
              (this.buffers = []),
              (this.count = 0);
          }
          return (
            ir(e, t),
            (e.prototype._next = function (t) {
              var e = this.bufferSize,
                n = this.startBufferEvery,
                r = this.buffers,
                i = this.count;
              this.count++, i % n == 0 && r.push([]);
              for (var o = r.length; o--; ) {
                var s = r[o];
                s.push(t),
                  s.length === e && (r.splice(o, 1), this.destination.next(s));
              }
            }),
            (e.prototype._complete = function () {
              for (var e = this.buffers, n = this.destination; e.length > 0; ) {
                var r = e.shift();
                r.length > 0 && n.next(r);
              }
              t.prototype._complete.call(this);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.bufferCount = {
        bufferCount: function (t, e) {
          return (
            void 0 === e && (e = null),
            (function (t, e) {
              return (
                void 0 === e && (e = null),
                function (n) {
                  return n.lift(new or(t, e));
                }
              );
            })(
              t,
              e
            )(this)
          );
        },
      }.bufferCount;
      var ur =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ar = (function () {
          function t(t, e, n, r) {
            (this.bufferTimeSpan = t),
              (this.bufferCreationInterval = e),
              (this.maxBufferSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new lr(
                  t,
                  this.bufferTimeSpan,
                  this.bufferCreationInterval,
                  this.maxBufferSize,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        pr = function () {
          this.buffer = [];
        },
        lr = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.bufferTimeSpan = n),
              (this.bufferCreationInterval = r),
              (this.maxBufferSize = i),
              (this.scheduler = o),
              (this.contexts = []);
            var s = this.openContext();
            if (((this.timespanOnly = null == r || r < 0), this.timespanOnly))
              this.add(
                (s.closeAction = o.schedule(hr, n, {
                  subscriber: this,
                  context: s,
                  bufferTimeSpan: n,
                }))
              );
            else {
              var c = {
                bufferTimeSpan: n,
                bufferCreationInterval: r,
                subscriber: this,
                scheduler: o,
              };
              this.add(
                (s.closeAction = o.schedule(br, n, {
                  subscriber: this,
                  context: s,
                }))
              ),
                this.add(o.schedule(fr, r, c));
            }
          }
          return (
            ur(e, t),
            (e.prototype._next = function (t) {
              for (var e, n = this.contexts, r = n.length, i = 0; i < r; i++) {
                var o = n[i],
                  s = o.buffer;
                s.push(t), s.length == this.maxBufferSize && (e = o);
              }
              e && this.onBufferFull(e);
            }),
            (e.prototype._error = function (e) {
              (this.contexts.length = 0), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              for (
                var e = this.contexts, n = this.destination;
                e.length > 0;

              ) {
                var r = e.shift();
                n.next(r.buffer);
              }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              this.contexts = null;
            }),
            (e.prototype.onBufferFull = function (t) {
              this.closeContext(t);
              var e = t.closeAction;
              if (
                (e.unsubscribe(),
                this.remove(e),
                !this.closed && this.timespanOnly)
              ) {
                t = this.openContext();
                var n = this.bufferTimeSpan;
                this.add(
                  (t.closeAction = this.scheduler.schedule(hr, n, {
                    subscriber: this,
                    context: t,
                    bufferTimeSpan: n,
                  }))
                );
              }
            }),
            (e.prototype.openContext = function () {
              var t = new pr();
              return this.contexts.push(t), t;
            }),
            (e.prototype.closeContext = function (t) {
              this.destination.next(t.buffer);
              var e = this.contexts;
              (e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(W.Subscriber);
      function hr(t) {
        var e = t.subscriber,
          n = t.context;
        n && e.closeContext(n),
          e.closed ||
            ((t.context = e.openContext()),
            (t.context.closeAction = this.schedule(t, t.bufferTimeSpan)));
      }
      function fr(t) {
        var e = t.bufferCreationInterval,
          n = t.bufferTimeSpan,
          r = t.subscriber,
          i = t.scheduler,
          o = r.openContext();
        r.closed ||
          (r.add(
            (o.closeAction = i.schedule(br, n, { subscriber: r, context: o }))
          ),
          this.schedule(t, e));
      }
      function br(t) {
        t.subscriber.closeContext(t.context);
      }
      var dr = function (t) {
        var e = arguments.length,
          n = Ve.async;
        bt(arguments[arguments.length - 1]) &&
          ((n = arguments[arguments.length - 1]), e--);
        var r = null;
        e >= 2 && (r = arguments[1]);
        var i = Number.POSITIVE_INFINITY;
        return (
          e >= 3 && (i = arguments[2]),
          function (e) {
            return e.lift(new ar(t, r, i, n));
          }
        );
      };
      Y.Observable.prototype.bufferTime = {
        bufferTime: function (t) {
          var e = arguments.length,
            n = Ve.async;
          bt(arguments[arguments.length - 1]) &&
            ((n = arguments[arguments.length - 1]), e--);
          var r = null;
          e >= 2 && (r = arguments[1]);
          var i = Number.POSITIVE_INFINITY;
          return e >= 3 && (i = arguments[2]), dr(t, r, i, n)(this);
        },
      }.bufferTime;
      var yr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        mr = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new vr(t, this.openings, this.closingSelector)
              );
            }),
            t
          );
        })(),
        vr = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.openings = n),
              (this.closingSelector = r),
              (this.contexts = []),
              this.add(Mt(this, n));
          }
          return (
            yr(e, t),
            (e.prototype._next = function (t) {
              for (var e = this.contexts, n = e.length, r = 0; r < n; r++)
                e[r].buffer.push(t);
            }),
            (e.prototype._error = function (e) {
              for (var n = this.contexts; n.length > 0; ) {
                var r = n.shift();
                r.subscription.unsubscribe(),
                  (r.buffer = null),
                  (r.subscription = null);
              }
              (this.contexts = null), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              for (var e = this.contexts; e.length > 0; ) {
                var n = e.shift();
                this.destination.next(n.buffer),
                  n.subscription.unsubscribe(),
                  (n.buffer = null),
                  (n.subscription = null);
              }
              (this.contexts = null), t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              t ? this.closeBuffer(t) : this.openBuffer(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.closeBuffer(t.context);
            }),
            (e.prototype.openBuffer = function (t) {
              try {
                var e = this.closingSelector.call(this, t);
                e && this.trySubscribe(e);
              } catch (n) {
                this._error(n);
              }
            }),
            (e.prototype.closeBuffer = function (t) {
              var e = this.contexts;
              if (e && t) {
                var n = t.subscription;
                this.destination.next(t.buffer),
                  e.splice(e.indexOf(t), 1),
                  this.remove(n),
                  n.unsubscribe();
              }
            }),
            (e.prototype.trySubscribe = function (t) {
              var e = this.contexts,
                n = new E.Subscription(),
                r = { buffer: [], subscription: n };
              e.push(r);
              var i = Mt(this, t, r);
              !i || i.closed
                ? this.closeBuffer(r)
                : ((i.context = r), this.add(i), n.add(i));
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.bufferToggle = {
        bufferToggle: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new mr(t, e));
            };
          })(
            t,
            e
          )(this);
        },
      }.bufferToggle;
      var gr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        _r = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new wr(t, this.closingSelector));
            }),
            t
          );
        })(),
        wr = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.closingSelector = n),
              (this.subscribing = !1),
              this.openBuffer();
          }
          return (
            gr(e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              e && this.destination.next(e), t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              (this.buffer = null), (this.subscribing = !1);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.openBuffer();
            }),
            (e.prototype.notifyComplete = function () {
              this.subscribing ? this.complete() : this.openBuffer();
            }),
            (e.prototype.openBuffer = function () {
              var t = this.closingSubscription;
              t && (this.remove(t), t.unsubscribe()),
                this.buffer && this.destination.next(this.buffer),
                (this.buffer = []);
              var e = M(this.closingSelector)();
              e === S.errorObject
                ? this.error(S.errorObject.e)
                : ((t = new E.Subscription()),
                  (this.closingSubscription = t),
                  this.add(t),
                  (this.subscribing = !0),
                  t.add(Mt(this, e)),
                  (this.subscribing = !1));
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.bufferWhen = {
        bufferWhen: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new _r(t));
            };
          })(t)(this);
        },
      }.bufferWhen;
      var Or =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        kr = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new xr(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        xr = (function (t) {
          function e(e, n, r) {
            t.call(this, e), (this.selector = n), (this.caught = r);
          }
          return (
            Or(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (r) {
                  return void t.prototype.error.call(this, r);
                }
                this._unsubscribeAndRecycle(), this.add(Mt(this, n));
              }
            }),
            e
          );
        })(Ot.OuterSubscriber),
        Cr = function (t) {
          return (function (t) {
            return function (e) {
              var n = new kr(t),
                r = e.lift(n);
              return (n.caught = r);
            };
          })(t)(this);
        };
      (Y.Observable.prototype.catch = Cr),
        (Y.Observable.prototype._catch = Cr),
        (Y.Observable.prototype.combineAll = {
          combineAll: function (t) {
            return (function (t) {
              return function (e) {
                return e.lift(new Nt.CombineLatestOperator(t));
              };
            })(t)(this);
          },
        }.combineAll),
        (Y.Observable.prototype.combineLatest = {
          combineLatest: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return Nt.combineLatest.apply(void 0, t)(this);
          },
        }.combineLatest);
      var Sr = {
        concatStatic: le.concat,
        concat: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return function (e) {
            return e.lift.call(le.concat.apply(void 0, [e].concat(t)));
          };
        },
      };
      (Y.Observable.prototype.concat = {
        concatStatic: le.concat,
        concat: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return Sr.concat.apply(void 0, t)(this);
        },
      }.concat),
        (Y.Observable.prototype.concatAll = {
          concatAll: function () {
            return pe()(this);
          },
        }.concatAll);
      var Pr = function (t, e) {
        return ce(t, e, 1);
      };
      (Y.Observable.prototype.concatMap = {
        concatMap: function (t, e) {
          return Pr(t, e)(this);
        },
      }.concatMap),
        (Y.Observable.prototype.concatMapTo = {
          concatMapTo: function (t, e) {
            return (function (t, e) {
              return Pr(function () {
                return t;
              }, e);
            })(
              t,
              e
            )(this);
          },
        }.concatMapTo);
      var Mr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Tr = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new jr(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        jr = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.predicate = n),
              (this.source = r),
              (this.count = 0),
              (this.index = 0);
          }
          return (
            Mr(e, t),
            (e.prototype._next = function (t) {
              this.predicate ? this._tryPredicate(t) : this.count++;
            }),
            (e.prototype._tryPredicate = function (t) {
              var e;
              try {
                e = this.predicate(t, this.index++, this.source);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.count++;
            }),
            (e.prototype._complete = function () {
              this.destination.next(this.count), this.destination.complete();
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.count = {
        count: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Tr(t, e));
            };
          })(t)(this);
        },
      }.count;
      var Ir =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Er = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ar(t));
            }),
            t
          );
        })(),
        Ar = (function (t) {
          function e(e) {
            t.call(this, e);
          }
          return (
            Ir(e, t),
            (e.prototype._next = function (t) {
              t.observe(this.destination);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.dematerialize = {
        dematerialize: function () {
          return this.lift(new Er());
        },
      }.dematerialize;
      var Nr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Fr = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Vr(t, this.durationSelector));
            }),
            t
          );
        })(),
        Vr = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.durationSelector = n),
              (this.hasValue = !1),
              (this.durationSubscription = null);
          }
          return (
            Nr(e, t),
            (e.prototype._next = function (t) {
              try {
                var e = this.durationSelector.call(this, t);
                e && this._tryNext(t, e);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            (e.prototype._complete = function () {
              this.emitValue(), this.destination.complete();
            }),
            (e.prototype._tryNext = function (t, e) {
              var n = this.durationSubscription;
              (this.value = t),
                (this.hasValue = !0),
                n && (n.unsubscribe(), this.remove(n)),
                (n = Mt(this, e)).closed ||
                  this.add((this.durationSubscription = n));
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              if (this.hasValue) {
                var e = this.value,
                  n = this.durationSubscription;
                n &&
                  ((this.durationSubscription = null),
                  n.unsubscribe(),
                  this.remove(n)),
                  (this.value = null),
                  (this.hasValue = !1),
                  t.prototype._next.call(this, e);
              }
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.debounce = {
        debounce: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Fr(t));
            };
          })(t)(this);
        },
      }.debounce;
      var Rr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Br = (function () {
          function t(t, e) {
            (this.dueTime = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Lr(t, this.dueTime, this.scheduler));
            }),
            t
          );
        })(),
        Lr = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.dueTime = n),
              (this.scheduler = r),
              (this.debouncedSubscription = null),
              (this.lastValue = null),
              (this.hasValue = !1);
          }
          return (
            Rr(e, t),
            (e.prototype._next = function (t) {
              this.clearDebounce(),
                (this.lastValue = t),
                (this.hasValue = !0),
                this.add(
                  (this.debouncedSubscription = this.scheduler.schedule(
                    Wr,
                    this.dueTime,
                    this
                  ))
                );
            }),
            (e.prototype._complete = function () {
              this.debouncedNext(), this.destination.complete();
            }),
            (e.prototype.debouncedNext = function () {
              this.clearDebounce(),
                this.hasValue &&
                  (this.destination.next(this.lastValue),
                  (this.lastValue = null),
                  (this.hasValue = !1));
            }),
            (e.prototype.clearDebounce = function () {
              var t = this.debouncedSubscription;
              null !== t &&
                (this.remove(t),
                t.unsubscribe(),
                (this.debouncedSubscription = null));
            }),
            e
          );
        })(W.Subscriber);
      function Wr(t) {
        t.debouncedNext();
      }
      Y.Observable.prototype.debounceTime = {
        debounceTime: function (t, e) {
          return (
            void 0 === e && (e = Ve.async),
            (function (t, e) {
              return (
                void 0 === e && (e = Ve.async),
                function (n) {
                  return n.lift(new Br(t, e));
                }
              );
            })(
              t,
              e
            )(this)
          );
        },
      }.debounceTime;
      var qr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        zr = (function () {
          function t(t) {
            this.defaultValue = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ur(t, this.defaultValue));
            }),
            t
          );
        })(),
        Ur = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.defaultValue = n), (this.isEmpty = !0);
          }
          return (
            qr(e, t),
            (e.prototype._next = function (t) {
              (this.isEmpty = !1), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            e
          );
        })(W.Subscriber),
        Hr = function (t) {
          return (
            void 0 === t && (t = null),
            function (e) {
              return e.lift(new zr(t));
            }
          );
        };
      Y.Observable.prototype.defaultIfEmpty = {
        defaultIfEmpty: function (t) {
          return void 0 === t && (t = null), Hr(t)(this);
        },
      }.defaultIfEmpty;
      var Yr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Dr = (function () {
          function t(t, e) {
            (this.delay = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Gr(t, this.delay, this.scheduler));
            }),
            t
          );
        })(),
        Gr = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.delay = n),
              (this.scheduler = r),
              (this.queue = []),
              (this.active = !1),
              (this.errored = !1);
          }
          return (
            Yr(e, t),
            (e.dispatch = function (t) {
              for (
                var e = t.source,
                  n = e.queue,
                  r = t.scheduler,
                  i = t.destination;
                n.length > 0 && n[0].time - r.now() <= 0;

              )
                n.shift().notification.observe(i);
              if (n.length > 0) {
                var o = Math.max(0, n[0].time - r.now());
                this.schedule(t, o);
              } else this.unsubscribe(), (e.active = !1);
            }),
            (e.prototype._schedule = function (t) {
              (this.active = !0),
                this.add(
                  t.schedule(e.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t,
                  })
                );
            }),
            (e.prototype.scheduleNotification = function (t) {
              if (!0 !== this.errored) {
                var e = this.scheduler,
                  n = new Xr(e.now() + this.delay, t);
                this.queue.push(n), !1 === this.active && this._schedule(e);
              }
            }),
            (e.prototype._next = function (t) {
              this.scheduleNotification(Xt.Notification.createNext(t));
            }),
            (e.prototype._error = function (t) {
              (this.errored = !0), (this.queue = []), this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              this.scheduleNotification(Xt.Notification.createComplete());
            }),
            e
          );
        })(W.Subscriber),
        Xr = function (t, e) {
          (this.time = t), (this.notification = e);
        };
      Y.Observable.prototype.delay = {
        delay: function (t, e) {
          return (
            void 0 === e && (e = Ve.async),
            (function (t, e) {
              void 0 === e && (e = Ve.async);
              var n = un(t) ? +t - e.now() : Math.abs(t);
              return function (t) {
                return t.lift(new Dr(n, e));
              };
            })(
              t,
              e
            )(this)
          );
        },
      }.delay;
      var Jr =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        $r = (function () {
          function t(t) {
            this.delayDurationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Kr(t, this.delayDurationSelector));
            }),
            t
          );
        })(),
        Kr = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.delayDurationSelector = n),
              (this.completed = !1),
              (this.delayNotifierSubscriptions = []),
              (this.values = []);
          }
          return (
            Jr(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(t),
                this.removeSubscription(i),
                this.tryComplete();
            }),
            (e.prototype.notifyError = function (t, e) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.removeSubscription(t);
              e && this.destination.next(e), this.tryComplete();
            }),
            (e.prototype._next = function (t) {
              try {
                var e = this.delayDurationSelector(t);
                e && this.tryDelay(e, t);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            (e.prototype._complete = function () {
              (this.completed = !0), this.tryComplete();
            }),
            (e.prototype.removeSubscription = function (t) {
              t.unsubscribe();
              var e = this.delayNotifierSubscriptions.indexOf(t),
                n = null;
              return (
                -1 !== e &&
                  ((n = this.values[e]),
                  this.delayNotifierSubscriptions.splice(e, 1),
                  this.values.splice(e, 1)),
                n
              );
            }),
            (e.prototype.tryDelay = function (t, e) {
              var n = Mt(this, t, e);
              n &&
                !n.closed &&
                (this.add(n), this.delayNotifierSubscriptions.push(n)),
                this.values.push(e);
            }),
            (e.prototype.tryComplete = function () {
              this.completed &&
                0 === this.delayNotifierSubscriptions.length &&
                this.destination.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber),
        Zr = (function (t) {
          function e(e, n) {
            t.call(this), (this.source = e), (this.subscriptionDelay = n);
          }
          return (
            Jr(e, t),
            (e.prototype._subscribe = function (t) {
              this.subscriptionDelay.subscribe(new Qr(t, this.source));
            }),
            e
          );
        })(Y.Observable),
        Qr = (function (t) {
          function e(e, n) {
            t.call(this),
              (this.parent = e),
              (this.source = n),
              (this.sourceSubscribed = !1);
          }
          return (
            Jr(e, t),
            (e.prototype._next = function (t) {
              this.subscribeToSource();
            }),
            (e.prototype._error = function (t) {
              this.unsubscribe(), this.parent.error(t);
            }),
            (e.prototype._complete = function () {
              this.subscribeToSource();
            }),
            (e.prototype.subscribeToSource = function () {
              this.sourceSubscribed ||
                ((this.sourceSubscribed = !0),
                this.unsubscribe(),
                this.source.subscribe(this.parent));
            }),
            e
          );
        })(W.Subscriber);
      function ti() {
        return (function () {
          function t() {
            this._values = [];
          }
          return (
            (t.prototype.add = function (t) {
              this.has(t) || this._values.push(t);
            }),
            (t.prototype.has = function (t) {
              return -1 !== this._values.indexOf(t);
            }),
            Object.defineProperty(t.prototype, "size", {
              get: function () {
                return this._values.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.clear = function () {
              this._values.length = 0;
            }),
            t
          );
        })();
      }
      Y.Observable.prototype.delayWhen = {
        delayWhen: function (t, e) {
          return (function (t, e) {
            return e
              ? function (n) {
                  return new Zr(n, e).lift(new $r(t));
                }
              : function (e) {
                  return e.lift(new $r(t));
                };
          })(
            t,
            e
          )(this);
        },
      }.delayWhen;
      var ei = { minimalSetImpl: ti, Set: O.root.Set || ti() },
        ni =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ri = (function () {
          function t(t, e) {
            (this.keySelector = t), (this.flushes = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ii(t, this.keySelector, this.flushes));
            }),
            t
          );
        })(),
        ii = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.keySelector = n),
              (this.values = new ei.Set()),
              r && this.add(Mt(this, r));
          }
          return (
            ni(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.values.clear();
            }),
            (e.prototype.notifyError = function (t, e) {
              this._error(t);
            }),
            (e.prototype._next = function (t) {
              this.keySelector
                ? this._useKeySelector(t)
                : this._finalizeNext(t, t);
            }),
            (e.prototype._useKeySelector = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.keySelector(t);
              } catch (r) {
                return void n.error(r);
              }
              this._finalizeNext(e, t);
            }),
            (e.prototype._finalizeNext = function (t, e) {
              var n = this.values;
              n.has(t) || (n.add(t), this.destination.next(e));
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.distinct = {
        distinct: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new ri(t, e));
            };
          })(
            t,
            e
          )(this);
        },
      }.distinct;
      var oi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        si = (function () {
          function t(t, e) {
            (this.compare = t), (this.keySelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ci(t, this.compare, this.keySelector));
            }),
            t
          );
        })(),
        ci = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.keySelector = r),
              (this.hasKey = !1),
              "function" == typeof n && (this.compare = n);
          }
          return (
            oi(e, t),
            (e.prototype.compare = function (t, e) {
              return t === e;
            }),
            (e.prototype._next = function (t) {
              var e = t;
              if (
                this.keySelector &&
                (e = M(this.keySelector)(t)) === S.errorObject
              )
                return this.destination.error(S.errorObject.e);
              var n = !1;
              if (this.hasKey) {
                if ((n = M(this.compare)(this.key, e)) === S.errorObject)
                  return this.destination.error(S.errorObject.e);
              } else this.hasKey = !0;
              !1 === Boolean(n) && ((this.key = e), this.destination.next(t));
            }),
            e
          );
        })(W.Subscriber),
        ui = function (t, e) {
          return function (n) {
            return n.lift(new si(t, e));
          };
        };
      (Y.Observable.prototype.distinctUntilChanged = {
        distinctUntilChanged: function (t, e) {
          return ui(t, e)(this);
        },
      }.distinctUntilChanged),
        (Y.Observable.prototype.distinctUntilKeyChanged = {
          distinctUntilKeyChanged: function (t, e) {
            return (function (t, e) {
              return ui(function (n, r) {
                return e ? e(n[t], r[t]) : n[t] === r[t];
              });
            })(
              t,
              e
            )(this);
          },
        }.distinctUntilKeyChanged);
      var ai =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        pi = (function () {
          function t(t, e, n) {
            (this.nextOrObserver = t), (this.error = e), (this.complete = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new li(t, this.nextOrObserver, this.error, this.complete)
              );
            }),
            t
          );
        })(),
        li = (function (t) {
          function e(e, n, r, i) {
            t.call(this, e);
            var o = new W.Subscriber(n, r, i);
            (o.syncErrorThrowable = !0), this.add(o), (this.safeSubscriber = o);
          }
          return (
            ai(e, t),
            (e.prototype._next = function (t) {
              var e = this.safeSubscriber;
              e.next(t),
                e.syncErrorThrown
                  ? this.destination.error(e.syncErrorValue)
                  : this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              var e = this.safeSubscriber;
              e.error(t),
                this.destination.error(
                  e.syncErrorThrown ? e.syncErrorValue : t
                );
            }),
            (e.prototype._complete = function () {
              var t = this.safeSubscriber;
              t.complete(),
                t.syncErrorThrown
                  ? this.destination.error(t.syncErrorValue)
                  : this.destination.complete();
            }),
            e
          );
        })(W.Subscriber),
        hi = function (t, e, n) {
          return (function (t, e, n) {
            return function (r) {
              return r.lift(new pi(t, e, n));
            };
          })(
            t,
            e,
            n
          )(this);
        };
      (Y.Observable.prototype.do = hi), (Y.Observable.prototype._do = hi);
      var fi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        bi = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new di(t));
            }),
            t
          );
        })(),
        di = (function (t) {
          function e(e) {
            t.call(this, e),
              (this.hasCompleted = !1),
              (this.hasSubscription = !1);
          }
          return (
            fi(e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription ||
                ((this.hasSubscription = !0), this.add(Mt(this, t)));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete();
            }),
            (e.prototype.notifyComplete = function (t) {
              this.remove(t),
                (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.exhaust = {
        exhaust: function () {
          return this.lift(new bi());
        },
      }.exhaust;
      var yi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        mi = (function () {
          function t(t, e) {
            (this.project = t), (this.resultSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new vi(t, this.project, this.resultSelector));
            }),
            t
          );
        })(),
        vi = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.project = n),
              (this.resultSelector = r),
              (this.hasSubscription = !1),
              (this.hasCompleted = !1),
              (this.index = 0);
          }
          return (
            yi(e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription || this.tryNext(t);
            }),
            (e.prototype.tryNext = function (t) {
              var e = this.index++,
                n = this.destination;
              try {
                var r = this.project(t, e);
                (this.hasSubscription = !0), this.add(Mt(this, r, t, e));
              } catch (i) {
                n.error(i);
              }
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.destination;
              this.resultSelector
                ? this.trySelectResult(t, e, n, r)
                : o.next(e);
            }),
            (e.prototype.trySelectResult = function (t, e, n, r) {
              var i = this.resultSelector,
                o = this.destination;
              try {
                var s = i(t, e, n, r);
                o.next(s);
              } catch (c) {
                o.error(c);
              }
            }),
            (e.prototype.notifyError = function (t) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.remove(t),
                (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.exhaustMap = {
        exhaustMap: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new mi(t, e));
            };
          })(
            t,
            e
          )(this);
        },
      }.exhaustMap;
      var gi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        _i = (function () {
          function t(t, e, n) {
            (this.project = t), (this.concurrent = e), (this.scheduler = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new wi(t, this.project, this.concurrent, this.scheduler)
              );
            }),
            t
          );
        })(),
        wi = (function (t) {
          function e(e, n, r, i) {
            t.call(this, e),
              (this.project = n),
              (this.concurrent = r),
              (this.scheduler = i),
              (this.index = 0),
              (this.active = 0),
              (this.hasCompleted = !1),
              r < Number.POSITIVE_INFINITY && (this.buffer = []);
          }
          return (
            gi(e, t),
            (e.dispatch = function (t) {
              t.subscriber.subscribeToProjection(t.result, t.value, t.index);
            }),
            (e.prototype._next = function (t) {
              var n = this.destination;
              if (n.closed) this._complete();
              else {
                var r = this.index++;
                if (this.active < this.concurrent) {
                  n.next(t);
                  var i = M(this.project)(t, r);
                  i === S.errorObject
                    ? n.error(S.errorObject.e)
                    : this.scheduler
                    ? this.add(
                        this.scheduler.schedule(e.dispatch, 0, {
                          subscriber: this,
                          result: i,
                          value: t,
                          index: r,
                        })
                      )
                    : this.subscribeToProjection(i, t, r);
                } else this.buffer.push(t);
              }
            }),
            (e.prototype.subscribeToProjection = function (t, e, n) {
              this.active++, this.add(Mt(this, t, e, n));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this._next(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e && e.length > 0 && this._next(e.shift()),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.expand = {
        expand: function (t, e, n) {
          return (
            void 0 === e && (e = Number.POSITIVE_INFINITY),
            void 0 === n && (n = void 0),
            (function (t, e, n) {
              return (
                void 0 === e && (e = Number.POSITIVE_INFINITY),
                void 0 === n && (n = void 0),
                (e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e),
                function (r) {
                  return r.lift(new _i(t, e, n));
                }
              );
            })(
              t,
              (e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e),
              n
            )(this)
          );
        },
      }.expand;
      var Oi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ki = {
          ArgumentOutOfRangeError: (function (t) {
            function e() {
              var e = t.call(this, "argument out of range");
              (this.name = e.name = "ArgumentOutOfRangeError"),
                (this.stack = e.stack),
                (this.message = e.message);
            }
            return Oi(e, t), e;
          })(Error),
        },
        xi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ci = (function () {
          function t(t, e) {
            if (((this.index = t), (this.defaultValue = e), t < 0))
              throw new ki.ArgumentOutOfRangeError();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Si(t, this.index, this.defaultValue));
            }),
            t
          );
        })(),
        Si = (function (t) {
          function e(e, n, r) {
            t.call(this, e), (this.index = n), (this.defaultValue = r);
          }
          return (
            xi(e, t),
            (e.prototype._next = function (t) {
              0 == this.index-- &&
                (this.destination.next(t), this.destination.complete());
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              this.index >= 0 &&
                (void 0 !== this.defaultValue
                  ? t.next(this.defaultValue)
                  : t.error(new ki.ArgumentOutOfRangeError())),
                t.complete();
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.elementAt = {
        elementAt: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new Ci(t, e));
            };
          })(
            t,
            e
          )(this);
        },
      }.elementAt;
      var Pi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Mi = (function () {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ti(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        Ti = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.predicate = n),
              (this.thisArg = r),
              (this.count = 0);
          }
          return (
            Pi(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(W.Subscriber),
        ji = function (t, e) {
          return function (n) {
            return n.lift(new Mi(t, e));
          };
        };
      Y.Observable.prototype.filter = {
        filter: function (t, e) {
          return ji(t, e)(this);
        },
      }.filter;
      var Ii =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ei = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ai(t, this.callback));
            }),
            t
          );
        })(),
        Ai = (function (t) {
          function e(e, n) {
            t.call(this, e), this.add(new E.Subscription(n));
          }
          return Ii(e, t), e;
        })(W.Subscriber),
        Ni = function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Ei(t));
            };
          })(t)(this);
        };
      (Y.Observable.prototype.finally = Ni),
        (Y.Observable.prototype._finally = Ni);
      var Fi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Vi = (function () {
          function t(t, e, n, r) {
            (this.predicate = t),
              (this.source = e),
              (this.yieldIndex = n),
              (this.thisArg = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Bi(
                  t,
                  this.predicate,
                  this.source,
                  this.yieldIndex,
                  this.thisArg
                )
              );
            }),
            t
          );
        })(),
        Ri = Vi,
        Bi = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.predicate = n),
              (this.source = r),
              (this.yieldIndex = i),
              (this.thisArg = o),
              (this.index = 0);
          }
          return (
            Fi(e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype._next = function (t) {
              var e = this.predicate,
                n = this.thisArg,
                r = this.index++;
              try {
                e.call(n || this, t, r, this.source) &&
                  this.notifyComplete(this.yieldIndex ? r : t);
              } catch (i) {
                this.destination.error(i);
              }
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(this.yieldIndex ? -1 : void 0);
            }),
            e
          );
        })(W.Subscriber),
        Li = {
          find: function (t, e) {
            if ("function" != typeof t)
              throw new TypeError("predicate is not a function");
            return function (n) {
              return n.lift(new Vi(t, n, !1, e));
            };
          },
          FindValueOperator: Ri,
          FindValueSubscriber: Bi,
        };
      (Y.Observable.prototype.find = {
        find: function (t, e) {
          return Li.find(t, e)(this);
        },
      }.find),
        (Y.Observable.prototype.findIndex = {
          findIndex: function (t, e) {
            return (function (t, e) {
              return function (n) {
                return n.lift(new Li.FindValueOperator(t, n, !0, e));
              };
            })(
              t,
              e
            )(this);
          },
        }.findIndex);
      var Wi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        qi = {
          EmptyError: (function (t) {
            function e() {
              var e = t.call(this, "no elements in sequence");
              (this.name = e.name = "EmptyError"),
                (this.stack = e.stack),
                (this.message = e.message);
            }
            return Wi(e, t), e;
          })(Error),
        },
        zi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ui = (function () {
          function t(t, e, n, r) {
            (this.predicate = t),
              (this.resultSelector = e),
              (this.defaultValue = n),
              (this.source = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Hi(
                  t,
                  this.predicate,
                  this.resultSelector,
                  this.defaultValue,
                  this.source
                )
              );
            }),
            t
          );
        })(),
        Hi = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.predicate = n),
              (this.resultSelector = r),
              (this.defaultValue = i),
              (this.source = o),
              (this.index = 0),
              (this.hasCompleted = !1),
              (this._emitted = !1);
          }
          return (
            zi(e, t),
            (e.prototype._next = function (t) {
              var e = this.index++;
              this.predicate ? this._tryPredicate(t, e) : this._emit(t, e);
            }),
            (e.prototype._tryPredicate = function (t, e) {
              var n;
              try {
                n = this.predicate(t, e, this.source);
              } catch (r) {
                return void this.destination.error(r);
              }
              n && this._emit(t, e);
            }),
            (e.prototype._emit = function (t, e) {
              this.resultSelector
                ? this._tryResultSelector(t, e)
                : this._emitFinal(t);
            }),
            (e.prototype._tryResultSelector = function (t, e) {
              var n;
              try {
                n = this.resultSelector(t, e);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._emitFinal(n);
            }),
            (e.prototype._emitFinal = function (t) {
              var e = this.destination;
              this._emitted ||
                ((this._emitted = !0),
                e.next(t),
                e.complete(),
                (this.hasCompleted = !0));
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              this.hasCompleted || void 0 === this.defaultValue
                ? this.hasCompleted || t.error(new qi.EmptyError())
                : (t.next(this.defaultValue), t.complete());
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.first = {
        first: function (t, e, n) {
          return (function (t, e, n) {
            return function (r) {
              return r.lift(new Ui(t, e, n, r));
            };
          })(
            t,
            e,
            n
          )(this);
        },
      }.first;
      var Yi = {
          Map:
            O.root.Map ||
            (function () {
              function t() {
                (this.size = 0), (this._values = []), (this._keys = []);
              }
              return (
                (t.prototype.get = function (t) {
                  var e = this._keys.indexOf(t);
                  return -1 === e ? void 0 : this._values[e];
                }),
                (t.prototype.set = function (t, e) {
                  var n = this._keys.indexOf(t);
                  return (
                    -1 === n
                      ? (this._keys.push(t), this._values.push(e), this.size++)
                      : (this._values[n] = e),
                    this
                  );
                }),
                (t.prototype.delete = function (t) {
                  var e = this._keys.indexOf(t);
                  return (
                    -1 !== e &&
                    (this._values.splice(e, 1),
                    this._keys.splice(e, 1),
                    this.size--,
                    !0)
                  );
                }),
                (t.prototype.clear = function () {
                  (this._keys.length = 0),
                    (this._values.length = 0),
                    (this.size = 0);
                }),
                (t.prototype.forEach = function (t, e) {
                  for (var n = 0; n < this.size; n++)
                    t.call(e, this._values[n], this._keys[n]);
                }),
                t
              );
            })(),
        },
        Di = {
          FastMap: (function () {
            function t() {
              this.values = {};
            }
            return (
              (t.prototype.delete = function (t) {
                return (this.values[t] = null), !0;
              }),
              (t.prototype.set = function (t, e) {
                return (this.values[t] = e), this;
              }),
              (t.prototype.get = function (t) {
                return this.values[t];
              }),
              (t.prototype.forEach = function (t, e) {
                var n = this.values;
                for (var r in n)
                  n.hasOwnProperty(r) && null !== n[r] && t.call(e, n[r], r);
              }),
              (t.prototype.clear = function () {
                this.values = {};
              }),
              t
            );
          })(),
        },
        Gi =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Xi = (function () {
          function t(t, e, n, r) {
            (this.keySelector = t),
              (this.elementSelector = e),
              (this.durationSelector = n),
              (this.subjectSelector = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Ji(
                  t,
                  this.keySelector,
                  this.elementSelector,
                  this.durationSelector,
                  this.subjectSelector
                )
              );
            }),
            t
          );
        })(),
        Ji = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.keySelector = n),
              (this.elementSelector = r),
              (this.durationSelector = i),
              (this.subjectSelector = o),
              (this.groups = null),
              (this.attemptedToUnsubscribe = !1),
              (this.count = 0);
          }
          return (
            Gi(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.keySelector(t);
              } catch (n) {
                return void this.error(n);
              }
              this._group(t, e);
            }),
            (e.prototype._group = function (t, e) {
              var n = this.groups;
              n ||
                (n = this.groups =
                  "string" == typeof e ? new Di.FastMap() : new Yi.Map());
              var r,
                i = n.get(e);
              if (this.elementSelector)
                try {
                  r = this.elementSelector(t);
                } catch (c) {
                  this.error(c);
                }
              else r = t;
              if (!i) {
                (i = this.subjectSelector
                  ? this.subjectSelector()
                  : new nt.Subject()),
                  n.set(e, i);
                var o = new Ki(e, i, this);
                if ((this.destination.next(o), this.durationSelector)) {
                  var s = void 0;
                  try {
                    s = this.durationSelector(new Ki(e, i));
                  } catch (c) {
                    return void this.error(c);
                  }
                  this.add(s.subscribe(new $i(e, i, this)));
                }
              }
              i.closed || i.next(r);
            }),
            (e.prototype._error = function (t) {
              var e = this.groups;
              e &&
                (e.forEach(function (e, n) {
                  e.error(t);
                }),
                e.clear()),
                this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.groups;
              t &&
                (t.forEach(function (t, e) {
                  t.complete();
                }),
                t.clear()),
                this.destination.complete();
            }),
            (e.prototype.removeGroup = function (t) {
              this.groups.delete(t);
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.attemptedToUnsubscribe = !0),
                0 === this.count && t.prototype.unsubscribe.call(this));
            }),
            e
          );
        })(W.Subscriber),
        $i = (function (t) {
          function e(e, n, r) {
            t.call(this, n),
              (this.key = e),
              (this.group = n),
              (this.parent = r);
          }
          return (
            Gi(e, t),
            (e.prototype._next = function (t) {
              this.complete();
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.parent,
                e = this.key;
              (this.key = this.parent = null), t && t.removeGroup(e);
            }),
            e
          );
        })(W.Subscriber),
        Ki = (function (t) {
          function e(e, n, r) {
            t.call(this),
              (this.key = e),
              (this.groupSubject = n),
              (this.refCountSubscription = r);
          }
          return (
            Gi(e, t),
            (e.prototype._subscribe = function (t) {
              var e = new E.Subscription(),
                n = this.refCountSubscription,
                r = this.groupSubject;
              return (
                n && !n.closed && e.add(new Qi(n)), e.add(r.subscribe(t)), e
              );
            }),
            e
          );
        })(Y.Observable),
        Zi = Ki,
        Qi = (function (t) {
          function e(e) {
            t.call(this), (this.parent = e), e.count++;
          }
          return (
            Gi(e, t),
            (e.prototype.unsubscribe = function () {
              var e = this.parent;
              e.closed ||
                this.closed ||
                (t.prototype.unsubscribe.call(this),
                (e.count -= 1),
                0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
            }),
            e
          );
        })(E.Subscription);
      Y.Observable.prototype.groupBy = {
        GroupedObservable: Zi,
        groupBy: function (t, e, n, r) {
          return (function (t, e, n, r) {
            return function (i) {
              return i.lift(new Xi(t, e, n, r));
            };
          })(
            t,
            e,
            n,
            r
          )(this);
        },
      }.groupBy;
      var to =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        eo = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new no(t));
            }),
            t
          );
        })(),
        no = (function (t) {
          function e() {
            t.apply(this, arguments);
          }
          return (
            to(e, t),
            (e.prototype._next = function (t) {
              z.noop();
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.ignoreElements = {
        ignoreElements: function () {
          return this.lift(new eo());
        },
      }.ignoreElements;
      var ro =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        io = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new oo(t));
            }),
            t
          );
        })(),
        oo = (function (t) {
          function e(e) {
            t.call(this, e);
          }
          return (
            ro(e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype._next = function (t) {
              this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.isEmpty = {
        isEmpty: function () {
          return this.lift(new io());
        },
      }.isEmpty;
      var so =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        co = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new uo(t, this.durationSelector));
            }),
            t
          );
        })(),
        uo = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.durationSelector = n), (this.hasValue = !1);
          }
          return (
            so(e, t),
            (e.prototype._next = function (t) {
              if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
                var e = M(this.durationSelector)(t);
                if (e === S.errorObject)
                  this.destination.error(S.errorObject.e);
                else {
                  var n = Mt(this, e);
                  n.closed
                    ? this.clearThrottle()
                    : this.add((this.throttled = n));
                }
              }
            }),
            (e.prototype.clearThrottle = function () {
              var t = this.value,
                e = this.hasValue,
                n = this.throttled;
              n && (this.remove(n), (this.throttled = null), n.unsubscribe()),
                e &&
                  ((this.value = null),
                  (this.hasValue = !1),
                  this.destination.next(t));
            }),
            (e.prototype.notifyNext = function (t, e, n, r) {
              this.clearThrottle();
            }),
            (e.prototype.notifyComplete = function () {
              this.clearThrottle();
            }),
            e
          );
        })(Ot.OuterSubscriber),
        ao = function (t) {
          return function (e) {
            return e.lift(new co(t));
          };
        };
      (Y.Observable.prototype.audit = {
        audit: function (t) {
          return ao(t)(this);
        },
      }.audit),
        (Y.Observable.prototype.auditTime = {
          auditTime: function (t, e) {
            return (
              void 0 === e && (e = Ve.async),
              (function (t, e) {
                return (
                  void 0 === e && (e = Ve.async),
                  ao(function () {
                    return pn.timer(t, e);
                  })
                );
              })(
                t,
                e
              )(this)
            );
          },
        }.auditTime);
      var po =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        lo = (function () {
          function t(t, e, n, r) {
            (this.predicate = t),
              (this.resultSelector = e),
              (this.defaultValue = n),
              (this.source = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ho(
                  t,
                  this.predicate,
                  this.resultSelector,
                  this.defaultValue,
                  this.source
                )
              );
            }),
            t
          );
        })(),
        ho = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.predicate = n),
              (this.resultSelector = r),
              (this.defaultValue = i),
              (this.source = o),
              (this.hasValue = !1),
              (this.index = 0),
              void 0 !== i && ((this.lastValue = i), (this.hasValue = !0));
          }
          return (
            po(e, t),
            (e.prototype._next = function (t) {
              var e = this.index++;
              if (this.predicate) this._tryPredicate(t, e);
              else {
                if (this.resultSelector)
                  return void this._tryResultSelector(t, e);
                (this.lastValue = t), (this.hasValue = !0);
              }
            }),
            (e.prototype._tryPredicate = function (t, e) {
              var n;
              try {
                n = this.predicate(t, e, this.source);
              } catch (r) {
                return void this.destination.error(r);
              }
              if (n) {
                if (this.resultSelector)
                  return void this._tryResultSelector(t, e);
                (this.lastValue = t), (this.hasValue = !0);
              }
            }),
            (e.prototype._tryResultSelector = function (t, e) {
              var n;
              try {
                n = this.resultSelector(t, e);
              } catch (r) {
                return void this.destination.error(r);
              }
              (this.lastValue = n), (this.hasValue = !0);
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              this.hasValue
                ? (t.next(this.lastValue), t.complete())
                : t.error(new qi.EmptyError());
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.last = {
        last: function (t, e, n) {
          return (function (t, e, n) {
            return function (r) {
              return r.lift(new lo(t, e, n, r));
            };
          })(
            t,
            e,
            n
          )(this);
        },
      }.last;
      var fo = function (t) {
        return t(this);
      };
      (Y.Observable.prototype.let = fo), (Y.Observable.prototype.letBind = fo);
      var bo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        yo = (function () {
          function t(t, e, n) {
            (this.predicate = t), (this.thisArg = e), (this.source = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new mo(t, this.predicate, this.thisArg, this.source)
              );
            }),
            t
          );
        })(),
        mo = (function (t) {
          function e(e, n, r, i) {
            t.call(this, e),
              (this.predicate = n),
              (this.thisArg = r),
              (this.source = i),
              (this.index = 0),
              (this.thisArg = r || this);
          }
          return (
            bo(e, t),
            (e.prototype.notifyComplete = function (t) {
              this.destination.next(t), this.destination.complete();
            }),
            (e.prototype._next = function (t) {
              var e = !1;
              try {
                e = this.predicate.call(
                  this.thisArg,
                  t,
                  this.index++,
                  this.source
                );
              } catch (n) {
                return void this.destination.error(n);
              }
              e || this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(W.Subscriber);
      (Y.Observable.prototype.every = {
        every: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new yo(t, e, n));
            };
          })(
            t,
            e
          )(this);
        },
      }.every),
        (Y.Observable.prototype.map = {
          map: function (t, e) {
            return Cn(t, e)(this);
          },
        }.map);
      var vo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        go = (function () {
          function t(t) {
            this.value = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new _o(t, this.value));
            }),
            t
          );
        })(),
        _o = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.value = n);
          }
          return (
            vo(e, t),
            (e.prototype._next = function (t) {
              this.destination.next(this.value);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.mapTo = {
        mapTo: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new go(t));
            };
          })(t)(this);
        },
      }.mapTo;
      var wo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Oo = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ko(t));
            }),
            t
          );
        })(),
        ko = (function (t) {
          function e(e) {
            t.call(this, e);
          }
          return (
            wo(e, t),
            (e.prototype._next = function (t) {
              this.destination.next(Xt.Notification.createNext(t));
            }),
            (e.prototype._error = function (t) {
              var e = this.destination;
              e.next(Xt.Notification.createError(t)), e.complete();
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              t.next(Xt.Notification.createComplete()), t.complete();
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.materialize = {
        materialize: function () {
          return this.lift(new Oo());
        },
      }.materialize;
      var xo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Co = (function () {
          function t(t, e, n) {
            void 0 === n && (n = !1),
              (this.accumulator = t),
              (this.seed = e),
              (this.hasSeed = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new So(t, this.accumulator, this.seed, this.hasSeed)
              );
            }),
            t
          );
        })(),
        So = (function (t) {
          function e(e, n, r, i) {
            t.call(this, e),
              (this.accumulator = n),
              (this._seed = r),
              (this.hasSeed = i),
              (this.index = 0);
          }
          return (
            xo(e, t),
            Object.defineProperty(e.prototype, "seed", {
              get: function () {
                return this._seed;
              },
              set: function (t) {
                (this.hasSeed = !0), (this._seed = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._next = function (t) {
              if (this.hasSeed) return this._tryNext(t);
              (this.seed = t), this.destination.next(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.accumulator(this.seed, t, n);
              } catch (r) {
                this.destination.error(r);
              }
              (this.seed = e), this.destination.next(e);
            }),
            e
          );
        })(W.Subscriber),
        Po = function (t, e) {
          var n = !1;
          return (
            arguments.length >= 2 && (n = !0),
            function (r) {
              return r.lift(new Co(t, e, n));
            }
          );
        },
        Mo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        To = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0))
              throw new ki.ArgumentOutOfRangeError();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new jo(t, this.total));
            }),
            t
          );
        })(),
        jo = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.total = n),
              (this.ring = new Array()),
              (this.count = 0);
          }
          return (
            Mo(e, t),
            (e.prototype._next = function (t) {
              var e = this.ring,
                n = this.total,
                r = this.count++;
              e.length < n ? e.push(t) : (e[r % n] = t);
            }),
            (e.prototype._complete = function () {
              var t = this.destination,
                e = this.count;
              if (e > 0)
                for (
                  var n = this.count >= this.total ? this.total : this.count,
                    r = this.ring,
                    i = 0;
                  i < n;
                  i++
                ) {
                  var o = e++ % n;
                  t.next(r[o]);
                }
              t.complete();
            }),
            e
          );
        })(W.Subscriber),
        Io = function (t) {
          return function (e) {
            return 0 === t ? new vt.EmptyObservable() : e.lift(new To(t));
          };
        },
        Eo = function (t, e) {
          return arguments.length >= 2
            ? function (n) {
                return H.pipe(Po(t, e), Io(1), Hr(e))(n);
              }
            : function (e) {
                return H.pipe(
                  Po(function (e, n, r) {
                    return t(e, n, r + 1);
                  }),
                  Io(1)
                )(e);
              };
        };
      Y.Observable.prototype.max = {
        max: function (t) {
          return (function (t) {
            return Eo(
              "function" == typeof t
                ? function (e, n) {
                    return t(e, n) > 0 ? e : n;
                  }
                : function (t, e) {
                    return t > e ? t : e;
                  }
            );
          })(t)(this);
        },
      }.max;
      var Ao = {
        mergeStatic: Le.merge,
        merge: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return function (e) {
            return e.lift.call(Le.merge.apply(void 0, [e].concat(t)));
          };
        },
      };
      (Y.Observable.prototype.merge = {
        mergeStatic: Le.merge,
        merge: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return Ao.merge.apply(void 0, t)(this);
        },
      }.merge),
        (Y.Observable.prototype.mergeAll = {
          mergeAll: function (t) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY), ae(t)(this);
          },
        }.mergeAll);
      var No = function (t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY), ce(t, e, n)(this)
        );
      };
      (Y.Observable.prototype.mergeMap = No),
        (Y.Observable.prototype.flatMap = No);
      var Fo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Vo = (function () {
          function t(t, e, n) {
            void 0 === n && (n = Number.POSITIVE_INFINITY),
              (this.ish = t),
              (this.resultSelector = e),
              (this.concurrent = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Ro(t, this.ish, this.resultSelector, this.concurrent)
              );
            }),
            t
          );
        })(),
        Ro = (function (t) {
          function e(e, n, r, i) {
            void 0 === i && (i = Number.POSITIVE_INFINITY),
              t.call(this, e),
              (this.ish = n),
              (this.resultSelector = r),
              (this.concurrent = i),
              (this.hasCompleted = !1),
              (this.buffer = []),
              (this.active = 0),
              (this.index = 0);
          }
          return (
            Fo(e, t),
            (e.prototype._next = function (t) {
              if (this.active < this.concurrent) {
                var e = this.resultSelector,
                  n = this.index++,
                  r = this.ish,
                  i = this.destination;
                this.active++, this._innerSub(r, i, e, t, n);
              } else this.buffer.push(t);
            }),
            (e.prototype._innerSub = function (t, e, n, r, i) {
              this.add(Mt(this, t, r, i));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.destination;
              this.resultSelector
                ? this.trySelectResult(t, e, n, r)
                : o.next(e);
            }),
            (e.prototype.trySelectResult = function (t, e, n, r) {
              var i,
                o = this.resultSelector,
                s = this.destination;
              try {
                i = o(t, e, n, r);
              } catch (c) {
                return void s.error(c);
              }
              s.next(i);
            }),
            (e.prototype.notifyError = function (t) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(Ot.OuterSubscriber),
        Bo = function (t, e, n) {
          return (
            void 0 === n && (n = Number.POSITIVE_INFINITY),
            (function (t, e, n) {
              return (
                void 0 === n && (n = Number.POSITIVE_INFINITY),
                "number" == typeof e && ((n = e), (e = null)),
                function (r) {
                  return r.lift(new Vo(t, e, n));
                }
              );
            })(
              t,
              e,
              n
            )(this)
          );
        };
      (Y.Observable.prototype.flatMapTo = Bo),
        (Y.Observable.prototype.mergeMapTo = Bo);
      var Lo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Wo = (function () {
          function t(t, e, n) {
            (this.accumulator = t), (this.seed = e), (this.concurrent = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new qo(t, this.accumulator, this.seed, this.concurrent)
              );
            }),
            t
          );
        })(),
        qo = (function (t) {
          function e(e, n, r, i) {
            t.call(this, e),
              (this.accumulator = n),
              (this.acc = r),
              (this.concurrent = i),
              (this.hasValue = !1),
              (this.hasCompleted = !1),
              (this.buffer = []),
              (this.active = 0),
              (this.index = 0);
          }
          return (
            Lo(e, t),
            (e.prototype._next = function (t) {
              if (this.active < this.concurrent) {
                var e = this.index++,
                  n = M(this.accumulator)(this.acc, t);
                n === S.errorObject
                  ? this.destination.error(S.errorObject.e)
                  : (this.active++, this._innerSub(n, t, e));
              } else this.buffer.push(t);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              this.add(Mt(this, t, e, n));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  (!1 === this.hasValue && this.destination.next(this.acc),
                  this.destination.complete());
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.destination;
              (this.acc = e), (this.hasValue = !0), o.next(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete());
            }),
            e
          );
        })(Ot.OuterSubscriber);
      (Y.Observable.prototype.mergeScan = {
        mergeScan: function (t, e, n) {
          return (
            void 0 === n && (n = Number.POSITIVE_INFINITY),
            (function (t, e, n) {
              return (
                void 0 === n && (n = Number.POSITIVE_INFINITY),
                function (r) {
                  return r.lift(new Wo(t, e, n));
                }
              );
            })(
              t,
              e,
              n
            )(this)
          );
        },
      }.mergeScan),
        (Y.Observable.prototype.min = {
          min: function (t) {
            return (function (t) {
              return Eo(
                "function" == typeof t
                  ? function (e, n) {
                      return t(e, n) < 0 ? e : n;
                    }
                  : function (t, e) {
                      return t < e ? t : e;
                    }
              );
            })(t)(this);
          },
        }.min);
      var zo =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Uo = (function () {
          function t(t) {
            this.connectable = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.connectable;
              n._refCount++;
              var r = new Ho(t, n),
                i = e.subscribe(r);
              return r.closed || (r.connection = n.connect()), i;
            }),
            t
          );
        })(),
        Ho = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.connectable = n);
          }
          return (
            zo(e, t),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null;
                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = t._connection;
                  (this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            e
          );
        })(W.Subscriber),
        Yo = function () {
          return function (t) {
            return t.lift(new Uo(t));
          };
        },
        Do =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Go = (function (t) {
          function e(e, n) {
            t.call(this),
              (this.source = e),
              (this.subjectFactory = n),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          return (
            Do(e, t),
            (e.prototype._subscribe = function (t) {
              return this.getSubject().subscribe(t);
            }),
            (e.prototype.getSubject = function () {
              var t = this._subject;
              return (
                (t && !t.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (e.prototype.connect = function () {
              var t = this._connection;
              return (
                t ||
                  ((this._isComplete = !1),
                  (t = this._connection = new E.Subscription()).add(
                    this.source.subscribe(new Ko(this.getSubject(), this))
                  ),
                  t.closed
                    ? ((this._connection = null), (t = E.Subscription.EMPTY))
                    : (this._connection = t)),
                t
              );
            }),
            (e.prototype.refCount = function () {
              return Yo()(this);
            }),
            e
          );
        })(Y.Observable),
        Xo = Go,
        Jo = Go.prototype,
        $o = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: Jo._subscribe },
          _isComplete: { value: Jo._isComplete, writable: !0 },
          getSubject: { value: Jo.getSubject },
          connect: { value: Jo.connect },
          refCount: { value: Jo.refCount },
        },
        Ko = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.connectable = n);
          }
          return (
            Do(e, t),
            (e.prototype._error = function (e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._connection;
                (t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe();
              }
            }),
            e
          );
        })(nt.SubjectSubscriber),
        Zo =
          ((function (t) {
            function e(e, n) {
              t.call(this, e), (this.connectable = n);
            }
            Do(e, t),
              (e.prototype._unsubscribe = function () {
                var t = this.connectable;
                if (t) {
                  this.connectable = null;
                  var e = t._refCount;
                  if (e <= 0) this.connection = null;
                  else if (((t._refCount = e - 1), e > 1))
                    this.connection = null;
                  else {
                    var n = this.connection,
                      r = t._connection;
                    (this.connection = null),
                      !r || (n && r !== n) || r.unsubscribe();
                  }
                } else this.connection = null;
              });
          })(W.Subscriber),
          { ConnectableObservable: Xo, connectableObservableDescriptor: $o }),
        Qo = (function () {
          function t(t, e) {
            (this.subjectFactory = t), (this.selector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.selector,
                r = this.subjectFactory(),
                i = n(r).subscribe(t);
              return i.add(e.subscribe(r)), i;
            }),
            t
          );
        })(),
        ts = function (t, e) {
          return function (n) {
            var r;
            if (
              ((r =
                "function" == typeof t
                  ? t
                  : function () {
                      return t;
                    }),
              "function" == typeof e)
            )
              return n.lift(new Qo(r, e));
            var i = Object.create(n, Zo.connectableObservableDescriptor);
            return (i.source = n), (i.subjectFactory = r), i;
          };
        };
      (Y.Observable.prototype.multicast = {
        multicast: function (t, e) {
          return ts(t, e)(this);
        },
      }.multicast),
        (Y.Observable.prototype.observeOn = {
          observeOn: function (t, e) {
            return void 0 === e && (e = 0), te.observeOn(t, e)(this);
          },
        }.observeOn),
        (Y.Observable.prototype.onErrorResumeNext = {
          onErrorResumeNext: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return $e.onErrorResumeNext.apply(void 0, t)(this);
          },
        }.onErrorResumeNext);
      var es =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ns = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new rs(t));
            }),
            t
          );
        })(),
        rs = (function (t) {
          function e(e) {
            t.call(this, e), (this.hasPrev = !1);
          }
          return (
            es(e, t),
            (e.prototype._next = function (t) {
              this.hasPrev
                ? this.destination.next([this.prev, t])
                : (this.hasPrev = !0),
                (this.prev = t);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.pairwise = {
        pairwise: function () {
          return this.lift(new ns());
        },
      }.pairwise;
      var is = function (t, e) {
        function n() {
          return !n.pred.apply(n.thisArg, arguments);
        }
        return (n.pred = t), (n.thisArg = e), n;
      };
      function os(t, e) {
        return function (n) {
          for (var r = n, i = 0; i < e; i++) {
            var o = r[t[i]];
            if (void 0 === o) return;
            r = o;
          }
          return r;
        };
      }
      Y.Observable.prototype.partition = {
        partition: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return [ji(t, e)(n), ji(is(t, e))(n)];
            };
          })(
            t,
            e
          )(this);
        },
      }.partition;
      var ss = {
        pluck: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          var n = t.length;
          if (0 === n) throw new Error("list of properties cannot be empty.");
          return function (e) {
            return Cn(os(t, n))(e);
          };
        },
      };
      (Y.Observable.prototype.pluck = {
        pluck: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return ss.pluck.apply(void 0, t)(this);
        },
      }.pluck),
        (Y.Observable.prototype.publish = {
          publish: function (t) {
            return (function (t) {
              return t
                ? ts(function () {
                    return new nt.Subject();
                  }, t)
                : ts(new nt.Subject());
            })(t)(this);
          },
        }.publish);
      var cs =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        us = {
          BehaviorSubject: (function (t) {
            function e(e) {
              t.call(this), (this._value = e);
            }
            return (
              cs(e, t),
              Object.defineProperty(e.prototype, "value", {
                get: function () {
                  return this.getValue();
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype._subscribe = function (e) {
                var n = t.prototype._subscribe.call(this, e);
                return n && !n.closed && e.next(this._value), n;
              }),
              (e.prototype.getValue = function () {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new G.ObjectUnsubscribedError();
                return this._value;
              }),
              (e.prototype.next = function (e) {
                t.prototype.next.call(this, (this._value = e));
              }),
              e
            );
          })(nt.Subject),
        };
      (Y.Observable.prototype.publishBehavior = {
        publishBehavior: function (t) {
          return (function (t) {
            return function (e) {
              return ts(new us.BehaviorSubject(t))(e);
            };
          })(t)(this);
        },
      }.publishBehavior),
        (Y.Observable.prototype.publishReplay = {
          publishReplay: function (t, e, n, r) {
            return (function (t, e, n, r) {
              n && "function" != typeof n && (r = n);
              var i = "function" == typeof n ? n : void 0,
                o = new Jn.ReplaySubject(t, e, r);
              return function (t) {
                return ts(function () {
                  return o;
                }, i)(t);
              };
            })(
              t,
              e,
              n,
              r
            )(this);
          },
        }.publishReplay),
        (Y.Observable.prototype.publishLast = {
          publishLast: function () {
            return this, ts(new it.AsyncSubject())(this);
          },
        }.publishLast);
      var as = {
        race: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return function (e) {
            return (
              1 === t.length && x.isArray(t[0]) && (t = t[0]),
              e.lift.call(He.race.apply(void 0, [e].concat(t)))
            );
          };
        },
      };
      (Y.Observable.prototype.race = {
        raceStatic: He.race,
        race: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return as.race.apply(void 0, t)(this);
        },
      }.race),
        (Y.Observable.prototype.reduce = {
          reduce: function (t, e) {
            return arguments.length >= 2 ? Eo(t, e)(this) : Eo(t)(this);
          },
        }.reduce);
      var ps =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ls = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new hs(t, this.count, this.source));
            }),
            t
          );
        })(),
        hs = (function (t) {
          function e(e, n, r) {
            t.call(this, e), (this.count = n), (this.source = r);
          }
          return (
            ps(e, t),
            (e.prototype.complete = function () {
              if (!this.isStopped) {
                var e = this.source,
                  n = this.count;
                if (0 === n) return t.prototype.complete.call(this);
                n > -1 && (this.count = n - 1),
                  e.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.repeat = {
        repeat: function (t) {
          return (
            void 0 === t && (t = -1),
            (function (t) {
              return (
                void 0 === t && (t = -1),
                function (e) {
                  return 0 === t
                    ? new vt.EmptyObservable()
                    : e.lift(new ls(t < 0 ? -1 : t - 1, e));
                }
              );
            })(t)(this)
          );
        },
      }.repeat;
      var fs =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        bs = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ds(t, this.notifier, e));
            }),
            t
          );
        })(),
        ds = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.notifier = n),
              (this.source = r),
              (this.sourceIsBeingSubscribedTo = !0);
          }
          return (
            fs(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              (this.sourceIsBeingSubscribedTo = !0),
                this.source.subscribe(this);
            }),
            (e.prototype.notifyComplete = function (e) {
              if (!1 === this.sourceIsBeingSubscribedTo)
                return t.prototype.complete.call(this);
            }),
            (e.prototype.complete = function () {
              if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
                if (
                  (this.retries || this.subscribeToRetries(),
                  !this.retriesSubscription || this.retriesSubscription.closed)
                )
                  return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(), this.notifications.next();
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.notifications,
                e = this.retriesSubscription;
              t && (t.unsubscribe(), (this.notifications = null)),
                e && (e.unsubscribe(), (this.retriesSubscription = null)),
                (this.retries = null);
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var e = this.notifications,
                n = this.retries,
                r = this.retriesSubscription;
              return (
                (this.notifications = null),
                (this.retries = null),
                (this.retriesSubscription = null),
                t.prototype._unsubscribeAndRecycle.call(this),
                (this.notifications = e),
                (this.retries = n),
                (this.retriesSubscription = r),
                this
              );
            }),
            (e.prototype.subscribeToRetries = function () {
              this.notifications = new nt.Subject();
              var e = M(this.notifier)(this.notifications);
              if (e === S.errorObject) return t.prototype.complete.call(this);
              (this.retries = e), (this.retriesSubscription = Mt(this, e));
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.repeatWhen = {
        repeatWhen: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new bs(t));
            };
          })(t)(this);
        },
      }.repeatWhen;
      var ys =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ms = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new vs(t, this.count, this.source));
            }),
            t
          );
        })(),
        vs = (function (t) {
          function e(e, n, r) {
            t.call(this, e), (this.count = n), (this.source = r);
          }
          return (
            ys(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this.source,
                  r = this.count;
                if (0 === r) return t.prototype.error.call(this, e);
                r > -1 && (this.count = r - 1),
                  n.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.retry = {
        retry: function (t) {
          return (
            void 0 === t && (t = -1),
            (function (t) {
              return (
                void 0 === t && (t = -1),
                function (e) {
                  return e.lift(new ms(t, e));
                }
              );
            })(t)(this)
          );
        },
      }.retry;
      var gs =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        _s = (function () {
          function t(t, e) {
            (this.notifier = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ws(t, this.notifier, this.source));
            }),
            t
          );
        })(),
        ws = (function (t) {
          function e(e, n, r) {
            t.call(this, e), (this.notifier = n), (this.source = r);
          }
          return (
            gs(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this.errors,
                  r = this.retries,
                  i = this.retriesSubscription;
                if (r) (this.errors = null), (this.retriesSubscription = null);
                else {
                  if (
                    ((n = new nt.Subject()),
                    (r = M(this.notifier)(n)) === S.errorObject)
                  )
                    return t.prototype.error.call(this, S.errorObject.e);
                  i = Mt(this, r);
                }
                this._unsubscribeAndRecycle(),
                  (this.errors = n),
                  (this.retries = r),
                  (this.retriesSubscription = i),
                  n.next(e);
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.errors,
                e = this.retriesSubscription;
              t && (t.unsubscribe(), (this.errors = null)),
                e && (e.unsubscribe(), (this.retriesSubscription = null)),
                (this.retries = null);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.errors,
                s = this.retries,
                c = this.retriesSubscription;
              (this.errors = null),
                (this.retries = null),
                (this.retriesSubscription = null),
                this._unsubscribeAndRecycle(),
                (this.errors = o),
                (this.retries = s),
                (this.retriesSubscription = c),
                this.source.subscribe(this);
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.retryWhen = {
        retryWhen: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new _s(t, e));
            };
          })(t)(this);
        },
      }.retryWhen;
      var Os =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ks = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new xs(t),
                r = e.subscribe(n);
              return r.add(Mt(n, this.notifier)), r;
            }),
            t
          );
        })(),
        xs = (function (t) {
          function e() {
            t.apply(this, arguments), (this.hasValue = !1);
          }
          return (
            Os(e, t),
            (e.prototype._next = function (t) {
              (this.value = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.value));
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.sample = {
        sample: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new ks(t));
            };
          })(t)(this);
        },
      }.sample;
      var Cs =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ss = (function () {
          function t(t, e) {
            (this.period = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ps(t, this.period, this.scheduler));
            }),
            t
          );
        })(),
        Ps = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.period = n),
              (this.scheduler = r),
              (this.hasValue = !1),
              this.add(r.schedule(Ms, n, { subscriber: this, period: n }));
          }
          return (
            Cs(e, t),
            (e.prototype._next = function (t) {
              (this.lastValue = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.lastValue));
            }),
            e
          );
        })(W.Subscriber);
      function Ms(t) {
        var e = t.period;
        t.subscriber.notifyNext(), this.schedule(t, e);
      }
      (Y.Observable.prototype.sampleTime = {
        sampleTime: function (t, e) {
          return (
            void 0 === e && (e = Ve.async),
            (function (t, e) {
              return (
                void 0 === e && (e = Ve.async),
                function (n) {
                  return n.lift(new Ss(t, e));
                }
              );
            })(
              t,
              e
            )(this)
          );
        },
      }.sampleTime),
        (Y.Observable.prototype.scan = {
          scan: function (t, e) {
            return arguments.length >= 2 ? Po(t, e)(this) : Po(t)(this);
          },
        }.scan);
      var Ts =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        js = (function () {
          function t(t, e) {
            (this.compareTo = t), (this.comparor = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Is(t, this.compareTo, this.comparor));
            }),
            t
          );
        })(),
        Is = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.compareTo = n),
              (this.comparor = r),
              (this._a = []),
              (this._b = []),
              (this._oneComplete = !1),
              this.add(n.subscribe(new Es(e, this)));
          }
          return (
            Ts(e, t),
            (e.prototype._next = function (t) {
              this._oneComplete && 0 === this._b.length
                ? this.emit(!1)
                : (this._a.push(t), this.checkValues());
            }),
            (e.prototype._complete = function () {
              this._oneComplete
                ? this.emit(0 === this._a.length && 0 === this._b.length)
                : (this._oneComplete = !0);
            }),
            (e.prototype.checkValues = function () {
              for (
                var t = this._a, e = this._b, n = this.comparor;
                t.length > 0 && e.length > 0;

              ) {
                var r = t.shift(),
                  i = e.shift(),
                  o = !1;
                n
                  ? (o = M(n)(r, i)) === S.errorObject &&
                    this.destination.error(S.errorObject.e)
                  : (o = r === i),
                  o || this.emit(!1);
              }
            }),
            (e.prototype.emit = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype.nextB = function (t) {
              this._oneComplete && 0 === this._a.length
                ? this.emit(!1)
                : (this._b.push(t), this.checkValues());
            }),
            e
          );
        })(W.Subscriber),
        Es = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.parent = n);
          }
          return (
            Ts(e, t),
            (e.prototype._next = function (t) {
              this.parent.nextB(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.error(t);
            }),
            (e.prototype._complete = function () {
              this.parent._complete();
            }),
            e
          );
        })(W.Subscriber);
      function As() {
        return new nt.Subject();
      }
      (Y.Observable.prototype.sequenceEqual = {
        sequenceEqual: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new js(t, e));
            };
          })(
            t,
            e
          )(this);
        },
      }.sequenceEqual),
        (Y.Observable.prototype.share = {
          share: function () {
            return this, Yo()(ts(As)(this));
          },
        }.share),
        (Y.Observable.prototype.shareReplay = {
          shareReplay: function (t, e, n) {
            return (function (t, e, n) {
              return function (r) {
                return r.lift(
                  (function (t, e, n) {
                    var r,
                      i,
                      o = 0,
                      s = !1,
                      c = !1;
                    return function (u) {
                      o++,
                        (r && !s) ||
                          ((s = !1),
                          (r = new Jn.ReplaySubject(t, e, n)),
                          (i = u.subscribe({
                            next: function (t) {
                              r.next(t);
                            },
                            error: function (t) {
                              (s = !0), r.error(t);
                            },
                            complete: function () {
                              (c = !0), r.complete();
                            },
                          })));
                      var a = r.subscribe(this);
                      return function () {
                        o--,
                          a.unsubscribe(),
                          i && 0 === o && c && i.unsubscribe();
                      };
                    };
                  })(t, e, n)
                );
              };
            })(
              t,
              e,
              n
            )(this);
          },
        }.shareReplay);
      var Ns =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Fs = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Vs(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        Vs = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.predicate = n),
              (this.source = r),
              (this.seenValue = !1),
              (this.index = 0);
          }
          return (
            Ns(e, t),
            (e.prototype.applySingleValue = function (t) {
              this.seenValue
                ? this.destination.error(
                    "Sequence contains more than one element"
                  )
                : ((this.seenValue = !0), (this.singleValue = t));
            }),
            (e.prototype._next = function (t) {
              var e = this.index++;
              this.predicate ? this.tryNext(t, e) : this.applySingleValue(t);
            }),
            (e.prototype.tryNext = function (t, e) {
              try {
                this.predicate(t, e, this.source) && this.applySingleValue(t);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              this.index > 0
                ? (t.next(this.seenValue ? this.singleValue : void 0),
                  t.complete())
                : t.error(new qi.EmptyError());
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.single = {
        single: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Fs(t, e));
            };
          })(t)(this);
        },
      }.single;
      var Rs =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Bs = (function () {
          function t(t) {
            this.total = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ls(t, this.total));
            }),
            t
          );
        })(),
        Ls = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.total = n), (this.count = 0);
          }
          return (
            Rs(e, t),
            (e.prototype._next = function (t) {
              ++this.count > this.total && this.destination.next(t);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.skip = {
        skip: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Bs(t));
            };
          })(t)(this);
        },
      }.skip;
      var Ws =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        qs = (function () {
          function t(t) {
            if (((this._skipCount = t), this._skipCount < 0))
              throw new ki.ArgumentOutOfRangeError();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                0 === this._skipCount
                  ? new W.Subscriber(t)
                  : new zs(t, this._skipCount)
              );
            }),
            t
          );
        })(),
        zs = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this._skipCount = n),
              (this._count = 0),
              (this._ring = new Array(n));
          }
          return (
            Ws(e, t),
            (e.prototype._next = function (t) {
              var e = this._skipCount,
                n = this._count++;
              if (n < e) this._ring[n] = t;
              else {
                var r = n % e,
                  i = this._ring,
                  o = i[r];
                (i[r] = t), this.destination.next(o);
              }
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.skipLast = {
        skipLast: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new qs(t));
            };
          })(t)(this);
        },
      }.skipLast;
      var Us =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Hs = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ys(t, this.notifier));
            }),
            t
          );
        })(),
        Ys = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.hasValue = !1),
              (this.isInnerStopped = !1),
              this.add(Mt(this, n));
          }
          return (
            Us(e, t),
            (e.prototype._next = function (e) {
              this.hasValue && t.prototype._next.call(this, e);
            }),
            (e.prototype._complete = function () {
              this.isInnerStopped
                ? t.prototype._complete.call(this)
                : this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.hasValue = !0;
            }),
            (e.prototype.notifyComplete = function () {
              (this.isInnerStopped = !0),
                this.isStopped && t.prototype._complete.call(this);
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.skipUntil = {
        skipUntil: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Hs(t));
            };
          })(t)(this);
        },
      }.skipUntil;
      var Ds =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Gs = (function () {
          function t(t) {
            this.predicate = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Xs(t, this.predicate));
            }),
            t
          );
        })(),
        Xs = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.predicate = n),
              (this.skipping = !0),
              (this.index = 0);
          }
          return (
            Ds(e, t),
            (e.prototype._next = function (t) {
              var e = this.destination;
              this.skipping && this.tryCallPredicate(t),
                this.skipping || e.next(t);
            }),
            (e.prototype.tryCallPredicate = function (t) {
              try {
                var e = this.predicate(t, this.index++);
                this.skipping = Boolean(e);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.skipWhile = {
        skipWhile: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Gs(t));
            };
          })(t)(this);
        },
      }.skipWhile;
      var Js = {
        startWith: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return function (e) {
            var n = t[t.length - 1];
            bt(n) ? t.pop() : (n = null);
            var r = t.length;
            return le.concat(
              1 === r
                ? new yt.ScalarObservable(t[0], n)
                : r > 1
                ? new _t.ArrayObservable(t, n)
                : new vt.EmptyObservable(n),
              e
            );
          };
        },
      };
      Y.Observable.prototype.startWith = {
        startWith: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return Js.startWith.apply(void 0, t)(this);
        },
      }.startWith;
      var $s = (function () {
          function t(t) {
            if (
              ((this.root = t),
              t.setImmediate && "function" == typeof t.setImmediate)
            )
              (this.setImmediate = t.setImmediate.bind(t)),
                (this.clearImmediate = t.clearImmediate.bind(t));
            else {
              (this.nextHandle = 1),
                (this.tasksByHandle = {}),
                (this.currentlyRunningATask = !1),
                (this.setImmediate = this.canUseProcessNextTick()
                  ? this.createProcessNextTickSetImmediate()
                  : this.canUsePostMessage()
                  ? this.createPostMessageSetImmediate()
                  : this.canUseMessageChannel()
                  ? this.createMessageChannelSetImmediate()
                  : this.canUseReadyStateChange()
                  ? this.createReadyStateChangeSetImmediate()
                  : this.createSetTimeoutSetImmediate());
              var e = function t(e) {
                delete t.instance.tasksByHandle[e];
              };
              (e.instance = this), (this.clearImmediate = e);
            }
          }
          return (
            (t.prototype.identify = function (t) {
              return this.root.Object.prototype.toString.call(t);
            }),
            (t.prototype.canUseProcessNextTick = function () {
              return "[object process]" === this.identify(this.root.process);
            }),
            (t.prototype.canUseMessageChannel = function () {
              return Boolean(this.root.MessageChannel);
            }),
            (t.prototype.canUseReadyStateChange = function () {
              var t = this.root.document;
              return Boolean(
                t && "onreadystatechange" in t.createElement("script")
              );
            }),
            (t.prototype.canUsePostMessage = function () {
              var t = this.root;
              if (t.postMessage && !t.importScripts) {
                var e = !0,
                  n = t.onmessage;
                return (
                  (t.onmessage = function () {
                    e = !1;
                  }),
                  t.postMessage("", "*"),
                  (t.onmessage = n),
                  e
                );
              }
              return !1;
            }),
            (t.prototype.partiallyApplied = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var r = function t() {
                var e = t.handler;
                "function" == typeof e
                  ? e.apply(void 0, t.args)
                  : new Function("" + e)();
              };
              return (r.handler = t), (r.args = e), r;
            }),
            (t.prototype.addFromSetImmediateArguments = function (t) {
              return (
                (this.tasksByHandle[this.nextHandle] =
                  this.partiallyApplied.apply(void 0, t)),
                this.nextHandle++
              );
            }),
            (t.prototype.createProcessNextTickSetImmediate = function () {
              var t = function t() {
                var e = t.instance,
                  n = e.addFromSetImmediateArguments(arguments);
                return (
                  e.root.process.nextTick(
                    e.partiallyApplied(e.runIfPresent, n)
                  ),
                  n
                );
              };
              return (t.instance = this), t;
            }),
            (t.prototype.createPostMessageSetImmediate = function () {
              var t = this.root,
                e = "setImmediate$" + t.Math.random() + "$",
                n = function n(r) {
                  var i = n.instance;
                  r.source === t &&
                    "string" == typeof r.data &&
                    0 === r.data.indexOf(e) &&
                    i.runIfPresent(+r.data.slice(e.length));
                };
              (n.instance = this), t.addEventListener("message", n, !1);
              var r = function t() {
                var e = t,
                  n = e.messagePrefix,
                  r = e.instance,
                  i = r.addFromSetImmediateArguments(arguments);
                return r.root.postMessage(n + i, "*"), i;
              };
              return (r.instance = this), (r.messagePrefix = e), r;
            }),
            (t.prototype.runIfPresent = function (t) {
              if (this.currentlyRunningATask)
                this.root.setTimeout(
                  this.partiallyApplied(this.runIfPresent, t),
                  0
                );
              else {
                var e = this.tasksByHandle[t];
                if (e) {
                  this.currentlyRunningATask = !0;
                  try {
                    e();
                  } finally {
                    this.clearImmediate(t), (this.currentlyRunningATask = !1);
                  }
                }
              }
            }),
            (t.prototype.createMessageChannelSetImmediate = function () {
              var t = this,
                e = new this.root.MessageChannel();
              e.port1.onmessage = function (e) {
                t.runIfPresent(e.data);
              };
              var n = function t() {
                var e = t,
                  n = e.channel,
                  r = e.instance,
                  i = r.addFromSetImmediateArguments(arguments);
                return n.port2.postMessage(i), i;
              };
              return (n.channel = e), (n.instance = this), n;
            }),
            (t.prototype.createReadyStateChangeSetImmediate = function () {
              var t = function t() {
                var e = t.instance,
                  n = e.root,
                  r = n.document,
                  i = r.documentElement,
                  o = e.addFromSetImmediateArguments(arguments),
                  s = r.createElement("script");
                return (
                  (s.onreadystatechange = function () {
                    e.runIfPresent(o),
                      (s.onreadystatechange = null),
                      i.removeChild(s),
                      (s = null);
                  }),
                  i.appendChild(s),
                  o
                );
              };
              return (t.instance = this), t;
            }),
            (t.prototype.createSetTimeoutSetImmediate = function () {
              var t = function t() {
                var e = t.instance,
                  n = e.addFromSetImmediateArguments(arguments);
                return (
                  e.root.setTimeout(e.partiallyApplied(e.runIfPresent, n), 0), n
                );
              };
              return (t.instance = this), t;
            }),
            t
          );
        })(),
        Ks = { ImmediateDefinition: $s, Immediate: new $s(O.root) },
        Zs =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Qs = {
          AsapAction: (function (t) {
            function e(e, n) {
              t.call(this, e, n), (this.scheduler = e), (this.work = n);
            }
            return (
              Zs(e, t),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return (
                  void 0 === r && (r = 0),
                  null !== r && r > 0
                    ? t.prototype.requestAsyncId.call(this, e, n, r)
                    : (e.actions.push(this),
                      e.scheduled ||
                        (e.scheduled = Ks.Immediate.setImmediate(
                          e.flush.bind(e, null)
                        )))
                );
              }),
              (e.prototype.recycleAsyncId = function (e, n, r) {
                if (
                  (void 0 === r && (r = 0),
                  (null !== r && r > 0) || (null === r && this.delay > 0))
                )
                  return t.prototype.recycleAsyncId.call(this, e, n, r);
                0 === e.actions.length &&
                  (Ks.Immediate.clearImmediate(n), (e.scheduled = void 0));
              }),
              e
            );
          })(Ae.AsyncAction),
        },
        tc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ec = {
          asap: new ((function (t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              tc(e, t),
              (e.prototype.flush = function (t) {
                (this.active = !0), (this.scheduled = void 0);
                var e,
                  n = this.actions,
                  r = -1,
                  i = n.length;
                t = t || n.shift();
                do {
                  if ((e = t.execute(t.state, t.delay))) break;
                } while (++r < i && (t = n.shift()));
                if (((this.active = !1), e)) {
                  for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
                  throw e;
                }
              }),
              e
            );
          })(Fe.AsyncScheduler))(Qs.AsapAction),
        },
        nc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        rc = {
          SubscribeOnObservable: (function (t) {
            function e(e, n, r) {
              void 0 === n && (n = 0),
                void 0 === r && (r = ec.asap),
                t.call(this),
                (this.source = e),
                (this.delayTime = n),
                (this.scheduler = r),
                (!Te(n) || n < 0) && (this.delayTime = 0),
                (r && "function" == typeof r.schedule) ||
                  (this.scheduler = ec.asap);
            }
            return (
              nc(e, t),
              (e.create = function (t, n, r) {
                return (
                  void 0 === n && (n = 0),
                  void 0 === r && (r = ec.asap),
                  new e(t, n, r)
                );
              }),
              (e.dispatch = function (t) {
                return this.add(t.source.subscribe(t.subscriber));
              }),
              (e.prototype._subscribe = function (t) {
                return this.scheduler.schedule(e.dispatch, this.delayTime, {
                  source: this.source,
                  subscriber: t,
                });
              }),
              e
            );
          })(Y.Observable),
        },
        ic = (function () {
          function t(t, e) {
            (this.scheduler = t), (this.delay = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return new rc.SubscribeOnObservable(
                e,
                this.delay,
                this.scheduler
              ).subscribe(t);
            }),
            t
          );
        })();
      Y.Observable.prototype.subscribeOn = {
        subscribeOn: function (t, e) {
          return (
            void 0 === e && (e = 0),
            (function (t, e) {
              return (
                void 0 === e && (e = 0),
                function (n) {
                  return n.lift(new ic(t, e));
                }
              );
            })(
              t,
              e
            )(this)
          );
        },
      }.subscribeOn;
      var oc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        sc = (function () {
          function t(t, e) {
            (this.project = t), (this.resultSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new cc(t, this.project, this.resultSelector));
            }),
            t
          );
        })(),
        cc = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.project = n),
              (this.resultSelector = r),
              (this.index = 0);
          }
          return (
            oc(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              var r = this.innerSubscription;
              r && r.unsubscribe(),
                this.add((this.innerSubscription = Mt(this, t, e, n)));
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (e.prototype.notifyComplete = function (e) {
              this.remove(e),
                (this.innerSubscription = null),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.resultSelector
                ? this._tryNotifyNext(t, e, n, r)
                : this.destination.next(e);
            }),
            (e.prototype._tryNotifyNext = function (t, e, n, r) {
              var i;
              try {
                i = this.resultSelector(t, e, n, r);
              } catch (o) {
                return void this.destination.error(o);
              }
              this.destination.next(i);
            }),
            e
          );
        })(Ot.OuterSubscriber),
        uc = function (t, e) {
          return function (n) {
            return n.lift(new sc(t, e));
          };
        },
        ac = function () {
          return uc(ue)(this);
        };
      (Y.Observable.prototype.switch = ac),
        (Y.Observable.prototype._switch = ac),
        (Y.Observable.prototype.switchMap = {
          switchMap: function (t, e) {
            return uc(t, e)(this);
          },
        }.switchMap);
      var pc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        lc = (function () {
          function t(t, e) {
            (this.observable = t), (this.resultSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new hc(t, this.observable, this.resultSelector)
              );
            }),
            t
          );
        })(),
        hc = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.inner = n),
              (this.resultSelector = r),
              (this.index = 0);
          }
          return (
            pc(e, t),
            (e.prototype._next = function (t) {
              var e = this.innerSubscription;
              e && e.unsubscribe(),
                this.add(
                  (this.innerSubscription = Mt(
                    this,
                    this.inner,
                    t,
                    this.index++
                  ))
                );
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (e.prototype.notifyComplete = function (e) {
              this.remove(e),
                (this.innerSubscription = null),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.destination;
              this.resultSelector
                ? this.tryResultSelector(t, e, n, r)
                : o.next(e);
            }),
            (e.prototype.tryResultSelector = function (t, e, n, r) {
              var i,
                o = this.resultSelector,
                s = this.destination;
              try {
                i = o(t, e, n, r);
              } catch (c) {
                return void s.error(c);
              }
              s.next(i);
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.switchMapTo = {
        switchMapTo: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new lc(t, e));
            };
          })(
            t,
            e
          )(this);
        },
      }.switchMapTo;
      var fc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        bc = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0))
              throw new ki.ArgumentOutOfRangeError();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new dc(t, this.total));
            }),
            t
          );
        })(),
        dc = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.total = n), (this.count = 0);
          }
          return (
            fc(e, t),
            (e.prototype._next = function (t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(W.Subscriber);
      (Y.Observable.prototype.take = {
        take: function (t) {
          return (function (t) {
            return function (e) {
              return 0 === t ? new vt.EmptyObservable() : e.lift(new bc(t));
            };
          })(t)(this);
        },
      }.take),
        (Y.Observable.prototype.takeLast = {
          takeLast: function (t) {
            return Io(t)(this);
          },
        }.takeLast);
      var yc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        mc = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new vc(t, this.notifier));
            }),
            t
          );
        })(),
        vc = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.notifier = n), this.add(Mt(this, n));
          }
          return (
            yc(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.complete();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.takeUntil = {
        takeUntil: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new mc(t));
            };
          })(t)(this);
        },
      }.takeUntil;
      var gc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        _c = (function () {
          function t(t) {
            this.predicate = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new wc(t, this.predicate));
            }),
            t
          );
        })(),
        wc = (function (t) {
          function e(e, n) {
            t.call(this, e), (this.predicate = n), (this.index = 0);
          }
          return (
            gc(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.predicate(t, this.index++);
              } catch (r) {
                return void n.error(r);
              }
              this.nextOrComplete(t, e);
            }),
            (e.prototype.nextOrComplete = function (t, e) {
              var n = this.destination;
              Boolean(e) ? n.next(t) : n.complete();
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.takeWhile = {
        takeWhile: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new _c(t));
            };
          })(t)(this);
        },
      }.takeWhile;
      var Oc = y(function (t, e) {
        var n =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          };
        (e.defaultThrottleConfig = { leading: !0, trailing: !1 }),
          (e.throttle = function (t, n) {
            return (
              void 0 === n && (n = e.defaultThrottleConfig),
              function (e) {
                return e.lift(new r(t, n.leading, n.trailing));
              }
            );
          });
        var r = (function () {
            function t(t, e, n) {
              (this.durationSelector = t),
                (this.leading = e),
                (this.trailing = n);
            }
            return (
              (t.prototype.call = function (t, e) {
                return e.subscribe(
                  new i(t, this.durationSelector, this.leading, this.trailing)
                );
              }),
              t
            );
          })(),
          i = (function (t) {
            function e(e, n, r, i) {
              t.call(this, e),
                (this.destination = e),
                (this.durationSelector = n),
                (this._leading = r),
                (this._trailing = i),
                (this._hasTrailingValue = !1);
            }
            return (
              n(e, t),
              (e.prototype._next = function (t) {
                if (this.throttled)
                  this._trailing &&
                    ((this._hasTrailingValue = !0), (this._trailingValue = t));
                else {
                  var e = this.tryDurationSelector(t);
                  e && this.add((this.throttled = Mt(this, e))),
                    this._leading &&
                      (this.destination.next(t),
                      this._trailing &&
                        ((this._hasTrailingValue = !0),
                        (this._trailingValue = t)));
                }
              }),
              (e.prototype.tryDurationSelector = function (t) {
                try {
                  return this.durationSelector(t);
                } catch (e) {
                  return this.destination.error(e), null;
                }
              }),
              (e.prototype._unsubscribe = function () {
                var t = this.throttled;
                (this._trailingValue = null),
                  (this._hasTrailingValue = !1),
                  t &&
                    (this.remove(t), (this.throttled = null), t.unsubscribe());
              }),
              (e.prototype._sendTrailing = function () {
                var t = this;
                t.throttled &&
                  t._trailing &&
                  t._hasTrailingValue &&
                  (t.destination.next(t._trailingValue),
                  (this._trailingValue = null),
                  (this._hasTrailingValue = !1));
              }),
              (e.prototype.notifyNext = function (t, e, n, r, i) {
                this._sendTrailing(), this._unsubscribe();
              }),
              (e.prototype.notifyComplete = function () {
                this._sendTrailing(), this._unsubscribe();
              }),
              e
            );
          })(Ot.OuterSubscriber);
      });
      Y.Observable.prototype.throttle = {
        throttle: function (t, e) {
          return (
            void 0 === e && (e = Oc.defaultThrottleConfig),
            Oc.throttle(t, e)(this)
          );
        },
      }.throttle;
      var kc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        xc = (function () {
          function t(t, e, n, r) {
            (this.duration = t),
              (this.scheduler = e),
              (this.leading = n),
              (this.trailing = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Cc(
                  t,
                  this.duration,
                  this.scheduler,
                  this.leading,
                  this.trailing
                )
              );
            }),
            t
          );
        })(),
        Cc = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.duration = n),
              (this.scheduler = r),
              (this.leading = i),
              (this.trailing = o),
              (this._hasTrailingValue = !1),
              (this._trailingValue = null);
          }
          return (
            kc(e, t),
            (e.prototype._next = function (t) {
              this.throttled
                ? this.trailing &&
                  ((this._trailingValue = t), (this._hasTrailingValue = !0))
                : (this.add(
                    (this.throttled = this.scheduler.schedule(
                      Sc,
                      this.duration,
                      { subscriber: this }
                    ))
                  ),
                  this.leading && this.destination.next(t));
            }),
            (e.prototype.clearThrottle = function () {
              var t = this.throttled;
              t &&
                (this.trailing &&
                  this._hasTrailingValue &&
                  (this.destination.next(this._trailingValue),
                  (this._trailingValue = null),
                  (this._hasTrailingValue = !1)),
                t.unsubscribe(),
                this.remove(t),
                (this.throttled = null));
            }),
            e
          );
        })(W.Subscriber);
      function Sc(t) {
        t.subscriber.clearThrottle();
      }
      Y.Observable.prototype.throttleTime = {
        throttleTime: function (t, e, n) {
          return (
            void 0 === e && (e = Ve.async),
            void 0 === n && (n = Oc.defaultThrottleConfig),
            (function (t, e, n) {
              return (
                void 0 === e && (e = Ve.async),
                void 0 === n && (n = Oc.defaultThrottleConfig),
                function (r) {
                  return r.lift(new xc(t, e, n.leading, n.trailing));
                }
              );
            })(
              t,
              e,
              n
            )(this)
          );
        },
      }.throttleTime;
      var Pc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Mc = function (t, e) {
          (this.value = t), (this.interval = e);
        },
        Tc = Mc,
        jc = (function () {
          function t(t) {
            this.scheduler = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ic(t, this.scheduler));
            }),
            t
          );
        })(),
        Ic = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.scheduler = n),
              (this.lastTime = 0),
              (this.lastTime = n.now());
          }
          return (
            Pc(e, t),
            (e.prototype._next = function (t) {
              var e = this.scheduler.now(),
                n = e - this.lastTime;
              (this.lastTime = e), this.destination.next(new Mc(t, n));
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.timeInterval = {
        TimeInterval: Tc,
        timeInterval: function (t) {
          return (
            void 0 === t && (t = Ve.async),
            (function (t) {
              return (
                void 0 === t && (t = Ve.async),
                function (e) {
                  return e.lift(new jc(t));
                }
              );
            })(t)(this)
          );
        },
      }.timeInterval;
      var Ec =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Ac = {
          TimeoutError: (function (t) {
            function e() {
              var e = t.call(this, "Timeout has occurred");
              (this.name = e.name = "TimeoutError"),
                (this.stack = e.stack),
                (this.message = e.message);
            }
            return Ec(e, t), e;
          })(Error),
        },
        Nc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Fc = (function () {
          function t(t, e, n, r) {
            (this.waitFor = t),
              (this.absoluteTimeout = e),
              (this.scheduler = n),
              (this.errorInstance = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Vc(
                  t,
                  this.absoluteTimeout,
                  this.waitFor,
                  this.scheduler,
                  this.errorInstance
                )
              );
            }),
            t
          );
        })(),
        Vc = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.absoluteTimeout = n),
              (this.waitFor = r),
              (this.scheduler = i),
              (this.errorInstance = o),
              (this.action = null),
              this.scheduleTimeout();
          }
          return (
            Nc(e, t),
            (e.dispatchTimeout = function (t) {
              t.error(t.errorInstance);
            }),
            (e.prototype.scheduleTimeout = function () {
              var t = this.action;
              t
                ? (this.action = t.schedule(this, this.waitFor))
                : this.add(
                    (this.action = this.scheduler.schedule(
                      e.dispatchTimeout,
                      this.waitFor,
                      this
                    ))
                  );
            }),
            (e.prototype._next = function (e) {
              this.absoluteTimeout || this.scheduleTimeout(),
                t.prototype._next.call(this, e);
            }),
            (e.prototype._unsubscribe = function () {
              (this.action = null),
                (this.scheduler = null),
                (this.errorInstance = null);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.timeout = {
        timeout: function (t, e) {
          return (
            void 0 === e && (e = Ve.async),
            (function (t, e) {
              void 0 === e && (e = Ve.async);
              var n = un(t),
                r = n ? +t - e.now() : Math.abs(t);
              return function (t) {
                return t.lift(new Fc(r, n, e, new Ac.TimeoutError()));
              };
            })(
              t,
              e
            )(this)
          );
        },
      }.timeout;
      var Rc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Bc = (function () {
          function t(t, e, n, r) {
            (this.waitFor = t),
              (this.absoluteTimeout = e),
              (this.withObservable = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Lc(
                  t,
                  this.absoluteTimeout,
                  this.waitFor,
                  this.withObservable,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        Lc = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.absoluteTimeout = n),
              (this.waitFor = r),
              (this.withObservable = i),
              (this.scheduler = o),
              (this.action = null),
              this.scheduleTimeout();
          }
          return (
            Rc(e, t),
            (e.dispatchTimeout = function (t) {
              var e = t.withObservable;
              t._unsubscribeAndRecycle(), t.add(Mt(t, e));
            }),
            (e.prototype.scheduleTimeout = function () {
              var t = this.action;
              t
                ? (this.action = t.schedule(this, this.waitFor))
                : this.add(
                    (this.action = this.scheduler.schedule(
                      e.dispatchTimeout,
                      this.waitFor,
                      this
                    ))
                  );
            }),
            (e.prototype._next = function (e) {
              this.absoluteTimeout || this.scheduleTimeout(),
                t.prototype._next.call(this, e);
            }),
            (e.prototype._unsubscribe = function () {
              (this.action = null),
                (this.scheduler = null),
                (this.withObservable = null);
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.timeoutWith = {
        timeoutWith: function (t, e, n) {
          return (
            void 0 === n && (n = Ve.async),
            (function (t, e, n) {
              return (
                void 0 === n && (n = Ve.async),
                function (r) {
                  var i = un(t),
                    o = i ? +t - n.now() : Math.abs(t);
                  return r.lift(new Bc(o, i, e, n));
                }
              );
            })(
              t,
              e,
              n
            )(this)
          );
        },
      }.timeoutWith;
      var Wc = function (t, e) {
        (this.value = t), (this.timestamp = e);
      };
      function qc(t, e, n) {
        return 0 === n ? [e] : (t.push(e), t);
      }
      (Y.Observable.prototype.timestamp = {
        timestamp: function (t) {
          return (
            void 0 === t && (t = Ve.async),
            (function (t) {
              return (
                void 0 === t && (t = Ve.async),
                Cn(function (e) {
                  return new Wc(e, t.now());
                })
              );
            })(t)(this)
          );
        },
      }.timestamp),
        (Y.Observable.prototype.toArray = {
          toArray: function () {
            return Eo(qc, [])(this);
          },
        }.toArray);
      var zc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Uc = (function () {
          function t(t) {
            this.windowBoundaries = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new Hc(t),
                r = e.subscribe(n);
              return r.closed || n.add(Mt(n, this.windowBoundaries)), r;
            }),
            t
          );
        })(),
        Hc = (function (t) {
          function e(e) {
            t.call(this, e),
              (this.window = new nt.Subject()),
              e.next(this.window);
          }
          return (
            zc(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.openWindow();
            }),
            (e.prototype.notifyError = function (t, e) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this._complete();
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t), this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              this.window.complete(), this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              this.window = null;
            }),
            (e.prototype.openWindow = function () {
              var t = this.window;
              t && t.complete();
              var e = this.destination,
                n = (this.window = new nt.Subject());
              e.next(n);
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.window = {
        window: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new Uc(t));
            };
          })(t)(this);
        },
      }.window;
      var Yc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Dc = (function () {
          function t(t, e) {
            (this.windowSize = t), (this.startWindowEvery = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Gc(t, this.windowSize, this.startWindowEvery)
              );
            }),
            t
          );
        })(),
        Gc = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.destination = e),
              (this.windowSize = n),
              (this.startWindowEvery = r),
              (this.windows = [new nt.Subject()]),
              (this.count = 0),
              e.next(this.windows[0]);
          }
          return (
            Yc(e, t),
            (e.prototype._next = function (t) {
              for (
                var e =
                    this.startWindowEvery > 0
                      ? this.startWindowEvery
                      : this.windowSize,
                  n = this.destination,
                  r = this.windowSize,
                  i = this.windows,
                  o = i.length,
                  s = 0;
                s < o && !this.closed;
                s++
              )
                i[s].next(t);
              var c = this.count - r + 1;
              if (
                (c >= 0 && c % e == 0 && !this.closed && i.shift().complete(),
                ++this.count % e == 0 && !this.closed)
              ) {
                var u = new nt.Subject();
                i.push(u), n.next(u);
              }
            }),
            (e.prototype._error = function (t) {
              var e = this.windows;
              if (e) for (; e.length > 0 && !this.closed; ) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.windows;
              if (t)
                for (; t.length > 0 && !this.closed; ) t.shift().complete();
              this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              (this.count = 0), (this.windows = null);
            }),
            e
          );
        })(W.Subscriber);
      Y.Observable.prototype.windowCount = {
        windowCount: function (t, e) {
          return (
            void 0 === e && (e = 0),
            (function (t, e) {
              return (
                void 0 === e && (e = 0),
                function (n) {
                  return n.lift(new Dc(t, e));
                }
              );
            })(
              t,
              e
            )(this)
          );
        },
      }.windowCount;
      var Xc =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Jc = (function () {
          function t(t, e, n, r) {
            (this.windowTimeSpan = t),
              (this.windowCreationInterval = e),
              (this.maxWindowSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Kc(
                  t,
                  this.windowTimeSpan,
                  this.windowCreationInterval,
                  this.maxWindowSize,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        $c = (function (t) {
          function e() {
            t.apply(this, arguments), (this._numberOfNextedValues = 0);
          }
          return (
            Xc(e, t),
            (e.prototype.next = function (e) {
              this._numberOfNextedValues++, t.prototype.next.call(this, e);
            }),
            Object.defineProperty(e.prototype, "numberOfNextedValues", {
              get: function () {
                return this._numberOfNextedValues;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(nt.Subject),
        Kc = (function (t) {
          function e(e, n, r, i, o) {
            t.call(this, e),
              (this.destination = e),
              (this.windowTimeSpan = n),
              (this.windowCreationInterval = r),
              (this.maxWindowSize = i),
              (this.scheduler = o),
              (this.windows = []);
            var s = this.openWindow();
            if (null !== r && r >= 0) {
              var c = {
                windowTimeSpan: n,
                windowCreationInterval: r,
                subscriber: this,
                scheduler: o,
              };
              this.add(
                o.schedule(tu, n, {
                  subscriber: this,
                  window: s,
                  context: null,
                })
              ),
                this.add(o.schedule(Qc, r, c));
            } else
              this.add(
                o.schedule(Zc, n, {
                  subscriber: this,
                  window: s,
                  windowTimeSpan: n,
                })
              );
          }
          return (
            Xc(e, t),
            (e.prototype._next = function (t) {
              for (var e = this.windows, n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                i.closed ||
                  (i.next(t),
                  i.numberOfNextedValues >= this.maxWindowSize &&
                    this.closeWindow(i));
              }
            }),
            (e.prototype._error = function (t) {
              for (var e = this.windows; e.length > 0; ) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              for (var t = this.windows; t.length > 0; ) {
                var e = t.shift();
                e.closed || e.complete();
              }
              this.destination.complete();
            }),
            (e.prototype.openWindow = function () {
              var t = new $c();
              return this.windows.push(t), this.destination.next(t), t;
            }),
            (e.prototype.closeWindow = function (t) {
              t.complete();
              var e = this.windows;
              e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(W.Subscriber);
      function Zc(t) {
        var e = t.subscriber,
          n = t.windowTimeSpan,
          r = t.window;
        r && e.closeWindow(r), (t.window = e.openWindow()), this.schedule(t, n);
      }
      function Qc(t) {
        var e = t.windowTimeSpan,
          n = t.subscriber,
          r = t.scheduler,
          i = t.windowCreationInterval,
          o = n.openWindow(),
          s = { action: this, subscription: null };
        (s.subscription = r.schedule(tu, e, {
          subscriber: n,
          window: o,
          context: s,
        })),
          this.add(s.subscription),
          this.schedule(t, i);
      }
      function tu(t) {
        var e = t.subscriber,
          n = t.window,
          r = t.context;
        r && r.action && r.subscription && r.action.remove(r.subscription),
          e.closeWindow(n);
      }
      var eu = function (t) {
        var e = Ve.async,
          n = null,
          r = Number.POSITIVE_INFINITY;
        return (
          bt(arguments[3]) && (e = arguments[3]),
          bt(arguments[2])
            ? (e = arguments[2])
            : Te(arguments[2]) && (r = arguments[2]),
          bt(arguments[1])
            ? (e = arguments[1])
            : Te(arguments[1]) && (n = arguments[1]),
          function (i) {
            return i.lift(new Jc(t, n, r, e));
          }
        );
      };
      Y.Observable.prototype.windowTime = {
        windowTime: function (t) {
          var e = Ve.async,
            n = null,
            r = Number.POSITIVE_INFINITY;
          return (
            bt(arguments[3]) && (e = arguments[3]),
            bt(arguments[2])
              ? (e = arguments[2])
              : Te(arguments[2]) && (r = arguments[2]),
            bt(arguments[1])
              ? (e = arguments[1])
              : Te(arguments[1]) && (n = arguments[1]),
            eu(t, n, r, e)(this)
          );
        },
      }.windowTime;
      var nu =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        ru = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new iu(t, this.openings, this.closingSelector)
              );
            }),
            t
          );
        })(),
        iu = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.openings = n),
              (this.closingSelector = r),
              (this.contexts = []),
              this.add((this.openSubscription = Mt(this, n, n)));
          }
          return (
            nu(e, t),
            (e.prototype._next = function (t) {
              var e = this.contexts;
              if (e)
                for (var n = e.length, r = 0; r < n; r++) e[r].window.next(t);
            }),
            (e.prototype._error = function (e) {
              var n = this.contexts;
              if (((this.contexts = null), n))
                for (var r = n.length, i = -1; ++i < r; ) {
                  var o = n[i];
                  o.window.error(e), o.subscription.unsubscribe();
                }
              t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              var e = this.contexts;
              if (((this.contexts = null), e))
                for (var n = e.length, r = -1; ++r < n; ) {
                  var i = e[r];
                  i.window.complete(), i.subscription.unsubscribe();
                }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.contexts;
              if (((this.contexts = null), t))
                for (var e = t.length, n = -1; ++n < e; ) {
                  var r = t[n];
                  r.window.unsubscribe(), r.subscription.unsubscribe();
                }
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              if (t === this.openings) {
                var o = M(this.closingSelector)(e);
                if (o === S.errorObject) return this.error(S.errorObject.e);
                var s = new nt.Subject(),
                  c = new E.Subscription(),
                  u = { window: s, subscription: c };
                this.contexts.push(u);
                var a = Mt(this, o, u);
                a.closed
                  ? this.closeWindow(this.contexts.length - 1)
                  : ((a.context = u), c.add(a)),
                  this.destination.next(s);
              } else this.closeWindow(this.contexts.indexOf(t));
            }),
            (e.prototype.notifyError = function (t) {
              this.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              t !== this.openSubscription &&
                this.closeWindow(this.contexts.indexOf(t.context));
            }),
            (e.prototype.closeWindow = function (t) {
              if (-1 !== t) {
                var e = this.contexts,
                  n = e[t],
                  r = n.window,
                  i = n.subscription;
                e.splice(t, 1), r.complete(), i.unsubscribe();
              }
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.windowToggle = {
        windowToggle: function (t, e) {
          return (function (t, e) {
            return function (n) {
              return n.lift(new ru(t, e));
            };
          })(
            t,
            e
          )(this);
        },
      }.windowToggle;
      var ou =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        su = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new cu(t, this.closingSelector));
            }),
            t
          );
        })(),
        cu = (function (t) {
          function e(e, n) {
            t.call(this, e),
              (this.destination = e),
              (this.closingSelector = n),
              this.openWindow();
          }
          return (
            ou(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.openWindow(i);
            }),
            (e.prototype.notifyError = function (t, e) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.openWindow(t);
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t),
                this.destination.error(t),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype._complete = function () {
              this.window.complete(),
                this.destination.complete(),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype.unsubscribeClosingNotification = function () {
              this.closingNotification &&
                this.closingNotification.unsubscribe();
            }),
            (e.prototype.openWindow = function (t) {
              void 0 === t && (t = null),
                t && (this.remove(t), t.unsubscribe());
              var e = this.window;
              e && e.complete();
              var n = (this.window = new nt.Subject());
              this.destination.next(n);
              var r = M(this.closingSelector)();
              if (r === S.errorObject) {
                var i = S.errorObject.e;
                this.destination.error(i), this.window.error(i);
              } else this.add((this.closingNotification = Mt(this, r)));
            }),
            e
          );
        })(Ot.OuterSubscriber);
      Y.Observable.prototype.windowWhen = {
        windowWhen: function (t) {
          return (function (t) {
            return function (e) {
              return e.lift(new su(t));
            };
          })(t)(this);
        },
      }.windowWhen;
      var uu =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        au = (function () {
          function t(t, e) {
            (this.observables = t), (this.project = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new pu(t, this.observables, this.project));
            }),
            t
          );
        })(),
        pu = (function (t) {
          function e(e, n, r) {
            t.call(this, e),
              (this.observables = n),
              (this.project = r),
              (this.toRespond = []);
            var i = n.length;
            this.values = new Array(i);
            for (var o = 0; o < i; o++) this.toRespond.push(o);
            for (o = 0; o < i; o++) {
              var s = n[o];
              this.add(Mt(this, s, s, o));
            }
          }
          return (
            uu(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.values[n] = e;
              var o = this.toRespond;
              if (o.length > 0) {
                var s = o.indexOf(n);
                -1 !== s && o.splice(s, 1);
              }
            }),
            (e.prototype.notifyComplete = function () {}),
            (e.prototype._next = function (t) {
              if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e);
              }
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(Ot.OuterSubscriber),
        lu = {
          withLatestFrom: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return function (e) {
              var n;
              return (
                "function" == typeof t[t.length - 1] && (n = t.pop()),
                e.lift(new au(t, n))
              );
            };
          },
        };
      (Y.Observable.prototype.withLatestFrom = {
        withLatestFrom: function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e - 0] = arguments[e];
          return lu.withLatestFrom.apply(void 0, t)(this);
        },
      }.withLatestFrom),
        (Y.Observable.prototype.zip = {
          zipProto: function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e - 0] = arguments[e];
            return wn.zip.apply(void 0, t)(this);
          },
        }.zipProto),
        (Y.Observable.prototype.zipAll = {
          zipAll: function (t) {
            return (function (t) {
              return function (e) {
                return e.lift(new wn.ZipOperator(t));
              };
            })(t)(this);
          },
        }.zipAll);
      var hu = {
          SubscriptionLog: function (t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.subscribedFrame = t),
              (this.unsubscribedFrame = e);
          },
        },
        fu = {
          SubscriptionLoggable: (function () {
            function t() {
              this.subscriptions = [];
            }
            return (
              (t.prototype.logSubscribedFrame = function () {
                return (
                  this.subscriptions.push(
                    new hu.SubscriptionLog(this.scheduler.now())
                  ),
                  this.subscriptions.length - 1
                );
              }),
              (t.prototype.logUnsubscribedFrame = function (t) {
                var e = this.subscriptions;
                e[t] = new hu.SubscriptionLog(
                  e[t].subscribedFrame,
                  this.scheduler.now()
                );
              }),
              t
            );
          })(),
        },
        bu = function (t, e) {
          for (var n = 0, r = e.length; n < r; n++)
            for (
              var i = e[n],
                o = Object.getOwnPropertyNames(i.prototype),
                s = 0,
                c = o.length;
              s < c;
              s++
            ) {
              var u = o[s];
              t.prototype[u] = i.prototype[u];
            }
        },
        du =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        yu = (function (t) {
          function e(e, n) {
            t.call(this, function (t) {
              var e = this,
                n = e.logSubscribedFrame();
              return (
                t.add(
                  new E.Subscription(function () {
                    e.logUnsubscribedFrame(n);
                  })
                ),
                e.scheduleMessages(t),
                t
              );
            }),
              (this.messages = e),
              (this.subscriptions = []),
              (this.scheduler = n);
          }
          return (
            du(e, t),
            (e.prototype.scheduleMessages = function (t) {
              for (var e = this.messages.length, n = 0; n < e; n++) {
                var r = this.messages[n];
                t.add(
                  this.scheduler.schedule(
                    function (t) {
                      t.message.notification.observe(t.subscriber);
                    },
                    r.frame,
                    { message: r, subscriber: t }
                  )
                );
              }
            }),
            e
          );
        })(Y.Observable),
        mu = yu;
      bu(yu, [fu.SubscriptionLoggable]);
      var vu = { ColdObservable: mu },
        gu =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        _u = (function (t) {
          function e(e, n) {
            t.call(this),
              (this.messages = e),
              (this.subscriptions = []),
              (this.scheduler = n);
          }
          return (
            gu(e, t),
            (e.prototype._subscribe = function (e) {
              var n = this,
                r = n.logSubscribedFrame();
              return (
                e.add(
                  new E.Subscription(function () {
                    n.logUnsubscribedFrame(r);
                  })
                ),
                t.prototype._subscribe.call(this, e)
              );
            }),
            (e.prototype.setup = function () {
              for (var t = this, e = t.messages.length, n = 0; n < e; n++)
                !(function () {
                  var e = t.messages[n];
                  t.scheduler.schedule(function () {
                    e.notification.observe(t);
                  }, e.frame);
                })();
            }),
            e
          );
        })(nt.Subject),
        wu = _u;
      bu(_u, [fu.SubscriptionLoggable]);
      var Ou = { HotObservable: wu },
        ku =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        xu = (function (t) {
          function e(e, n) {
            var r = this;
            void 0 === e && (e = Cu),
              void 0 === n && (n = Number.POSITIVE_INFINITY),
              t.call(this, e, function () {
                return r.frame;
              }),
              (this.maxFrames = n),
              (this.frame = 0),
              (this.index = -1);
          }
          return (
            ku(e, t),
            (e.prototype.flush = function () {
              for (
                var t, e, n = this.actions, r = this.maxFrames;
                (e = n.shift()) &&
                (this.frame = e.delay) <= r &&
                !(t = e.execute(e.state, e.delay));

              );
              if (t) {
                for (; (e = n.shift()); ) e.unsubscribe();
                throw t;
              }
            }),
            (e.frameTimeFactor = 10),
            e
          );
        })(Fe.AsyncScheduler),
        Cu = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = e.index += 1),
              t.call(this, e, n),
              (this.scheduler = e),
              (this.work = n),
              (this.index = r),
              (this.active = !0),
              (this.index = e.index = r);
          }
          return (
            ku(e, t),
            (e.prototype.schedule = function (n, r) {
              if ((void 0 === r && (r = 0), !this.id))
                return t.prototype.schedule.call(this, n, r);
              this.active = !1;
              var i = new e(this.scheduler, this.work);
              return this.add(i), i.schedule(n, r);
            }),
            (e.prototype.requestAsyncId = function (t, n, r) {
              void 0 === r && (r = 0), (this.delay = t.frame + r);
              var i = t.actions;
              return i.push(this), i.sort(e.sortActions), !0;
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              void 0 === n && (n = 0);
            }),
            (e.prototype._execute = function (e, n) {
              if (!0 === this.active)
                return t.prototype._execute.call(this, e, n);
            }),
            (e.sortActions = function (t, e) {
              return t.delay === e.delay
                ? t.index === e.index
                  ? 0
                  : t.index > e.index
                  ? 1
                  : -1
                : t.delay > e.delay
                ? 1
                : -1;
            }),
            e
          );
        })(Ae.AsyncAction),
        Su = { VirtualTimeScheduler: xu, VirtualAction: Cu },
        Pu =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Mu =
          ((function (t) {
            function e(e) {
              t.call(this, Su.VirtualAction, 750),
                (this.assertDeepEqual = e),
                (this.hotObservables = []),
                (this.coldObservables = []),
                (this.flushTests = []);
            }
            Pu(e, t),
              (e.prototype.createTime = function (t) {
                var n = t.indexOf("|");
                if (-1 === n)
                  throw new Error(
                    'marble diagram for time should have a completion marker "|"'
                  );
                return n * e.frameTimeFactor;
              }),
              (e.prototype.createColdObservable = function (t, n, r) {
                if (-1 !== t.indexOf("^"))
                  throw new Error(
                    'cold observable cannot have subscription offset "^"'
                  );
                if (-1 !== t.indexOf("!"))
                  throw new Error(
                    'cold observable cannot have unsubscription marker "!"'
                  );
                var i = e.parseMarbles(t, n, r),
                  o = new vu.ColdObservable(i, this);
                return this.coldObservables.push(o), o;
              }),
              (e.prototype.createHotObservable = function (t, n, r) {
                if (-1 !== t.indexOf("!"))
                  throw new Error(
                    'hot observable cannot have unsubscription marker "!"'
                  );
                var i = e.parseMarbles(t, n, r),
                  o = new Ou.HotObservable(i, this);
                return this.hotObservables.push(o), o;
              }),
              (e.prototype.materializeInnerObservable = function (t, e) {
                var n = this,
                  r = [];
                return (
                  t.subscribe(
                    function (t) {
                      r.push({
                        frame: n.frame - e,
                        notification: Xt.Notification.createNext(t),
                      });
                    },
                    function (t) {
                      r.push({
                        frame: n.frame - e,
                        notification: Xt.Notification.createError(t),
                      });
                    },
                    function () {
                      r.push({
                        frame: n.frame - e,
                        notification: Xt.Notification.createComplete(),
                      });
                    }
                  ),
                  r
                );
              }),
              (e.prototype.expectObservable = function (t, n) {
                var r = this;
                void 0 === n && (n = null);
                var i,
                  o = [],
                  s = { actual: o, ready: !1 },
                  c = e.parseMarblesAsSubscriptions(n).unsubscribedFrame;
                return (
                  this.schedule(function () {
                    i = t.subscribe(
                      function (t) {
                        var e = t;
                        t instanceof Y.Observable &&
                          (e = r.materializeInnerObservable(e, r.frame)),
                          o.push({
                            frame: r.frame,
                            notification: Xt.Notification.createNext(e),
                          });
                      },
                      function (t) {
                        o.push({
                          frame: r.frame,
                          notification: Xt.Notification.createError(t),
                        });
                      },
                      function () {
                        o.push({
                          frame: r.frame,
                          notification: Xt.Notification.createComplete(),
                        });
                      }
                    );
                  }, 0),
                  c !== Number.POSITIVE_INFINITY &&
                    this.schedule(function () {
                      return i.unsubscribe();
                    }, c),
                  this.flushTests.push(s),
                  {
                    toBe: function (t, n, r) {
                      (s.ready = !0),
                        (s.expected = e.parseMarbles(t, n, r, !0));
                    },
                  }
                );
              }),
              (e.prototype.expectSubscriptions = function (t) {
                var n = { actual: t, ready: !1 };
                return (
                  this.flushTests.push(n),
                  {
                    toBe: function (t) {
                      var r = "string" == typeof t ? [t] : t;
                      (n.ready = !0),
                        (n.expected = r.map(function (t) {
                          return e.parseMarblesAsSubscriptions(t);
                        }));
                    },
                  }
                );
              }),
              (e.prototype.flush = function () {
                for (var e = this.hotObservables; e.length > 0; )
                  e.shift().setup();
                t.prototype.flush.call(this);
                for (
                  var n = this.flushTests.filter(function (t) {
                    return t.ready;
                  });
                  n.length > 0;

                ) {
                  var r = n.shift();
                  this.assertDeepEqual(r.actual, r.expected);
                }
              }),
              (e.parseMarblesAsSubscriptions = function (t) {
                if ("string" != typeof t)
                  return new hu.SubscriptionLog(Number.POSITIVE_INFINITY);
                for (
                  var e = t.length,
                    n = -1,
                    r = Number.POSITIVE_INFINITY,
                    i = Number.POSITIVE_INFINITY,
                    o = 0;
                  o < e;
                  o++
                ) {
                  var s = o * this.frameTimeFactor,
                    c = t[o];
                  switch (c) {
                    case "-":
                    case " ":
                      break;
                    case "(":
                      n = s;
                      break;
                    case ")":
                      n = -1;
                      break;
                    case "^":
                      if (r !== Number.POSITIVE_INFINITY)
                        throw new Error(
                          "found a second subscription point '^' in a subscription marble diagram. There can only be one."
                        );
                      r = n > -1 ? n : s;
                      break;
                    case "!":
                      if (i !== Number.POSITIVE_INFINITY)
                        throw new Error(
                          "found a second subscription point '^' in a subscription marble diagram. There can only be one."
                        );
                      i = n > -1 ? n : s;
                      break;
                    default:
                      throw new Error(
                        "there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" +
                          c +
                          "'."
                      );
                  }
                }
                return i < 0
                  ? new hu.SubscriptionLog(r)
                  : new hu.SubscriptionLog(r, i);
              }),
              (e.parseMarbles = function (t, e, n, r) {
                if ((void 0 === r && (r = !1), -1 !== t.indexOf("!")))
                  throw new Error(
                    'conventional marble diagrams cannot have the unsubscription marker "!"'
                  );
                for (
                  var i = t.length,
                    o = [],
                    s = t.indexOf("^"),
                    c = -1 === s ? 0 : s * -this.frameTimeFactor,
                    u =
                      "object" != typeof e
                        ? function (t) {
                            return t;
                          }
                        : function (t) {
                            return r && e[t] instanceof vu.ColdObservable
                              ? e[t].messages
                              : e[t];
                          },
                    a = -1,
                    p = 0;
                  p < i;
                  p++
                ) {
                  var l = p * this.frameTimeFactor + c,
                    h = void 0,
                    f = t[p];
                  switch (f) {
                    case "-":
                    case " ":
                      break;
                    case "(":
                      a = l;
                      break;
                    case ")":
                      a = -1;
                      break;
                    case "|":
                      h = Xt.Notification.createComplete();
                      break;
                    case "^":
                      break;
                    case "#":
                      h = Xt.Notification.createError(n || "error");
                      break;
                    default:
                      h = Xt.Notification.createNext(u(f));
                  }
                  h && o.push({ frame: a > -1 ? a : l, notification: h });
                }
                return o;
              });
          })(Su.VirtualTimeScheduler),
          function (t) {
            t.requestAnimationFrame
              ? ((this.cancelAnimationFrame = t.cancelAnimationFrame.bind(t)),
                (this.requestAnimationFrame = t.requestAnimationFrame.bind(t)))
              : t.mozRequestAnimationFrame
              ? ((this.cancelAnimationFrame =
                  t.mozCancelAnimationFrame.bind(t)),
                (this.requestAnimationFrame =
                  t.mozRequestAnimationFrame.bind(t)))
              : t.webkitRequestAnimationFrame
              ? ((this.cancelAnimationFrame =
                  t.webkitCancelAnimationFrame.bind(t)),
                (this.requestAnimationFrame =
                  t.webkitRequestAnimationFrame.bind(t)))
              : t.msRequestAnimationFrame
              ? ((this.cancelAnimationFrame = t.msCancelAnimationFrame.bind(t)),
                (this.requestAnimationFrame =
                  t.msRequestAnimationFrame.bind(t)))
              : t.oRequestAnimationFrame
              ? ((this.cancelAnimationFrame = t.oCancelAnimationFrame.bind(t)),
                (this.requestAnimationFrame = t.oRequestAnimationFrame.bind(t)))
              : ((this.cancelAnimationFrame = t.clearTimeout.bind(t)),
                (this.requestAnimationFrame = function (e) {
                  return t.setTimeout(e, 1e3 / 60);
                }));
          }),
        Tu = {
          RequestAnimationFrameDefinition: Mu,
          AnimationFrame: new Mu(O.root),
        },
        ju =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Iu = {
          AnimationFrameAction: (function (t) {
            function e(e, n) {
              t.call(this, e, n), (this.scheduler = e), (this.work = n);
            }
            return (
              ju(e, t),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return (
                  void 0 === r && (r = 0),
                  null !== r && r > 0
                    ? t.prototype.requestAsyncId.call(this, e, n, r)
                    : (e.actions.push(this),
                      e.scheduled ||
                        (e.scheduled = Tu.AnimationFrame.requestAnimationFrame(
                          e.flush.bind(e, null)
                        )))
                );
              }),
              (e.prototype.recycleAsyncId = function (e, n, r) {
                if (
                  (void 0 === r && (r = 0),
                  (null !== r && r > 0) || (null === r && this.delay > 0))
                )
                  return t.prototype.recycleAsyncId.call(this, e, n, r);
                0 === e.actions.length &&
                  (Tu.AnimationFrame.cancelAnimationFrame(n),
                  (e.scheduled = void 0));
              }),
              e
            );
          })(Ae.AsyncAction),
        },
        Eu =
          (d && d.__extends) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r());
          },
        Au =
          (new ((function (t) {
            function e() {
              t.apply(this, arguments);
            }
            return (
              Eu(e, t),
              (e.prototype.flush = function (t) {
                (this.active = !0), (this.scheduled = void 0);
                var e,
                  n = this.actions,
                  r = -1,
                  i = n.length;
                t = t || n.shift();
                do {
                  if ((e = t.execute(t.state, t.delay))) break;
                } while (++r < i && (t = n.shift()));
                if (((this.active = !1), e)) {
                  for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
                  throw e;
                }
              }),
              e
            );
          })(Fe.AsyncScheduler))(Iu.AnimationFrameAction),
          nt.Subject),
        Nu = new Intl.NumberFormat("ar-AE"),
        Fu = new Intl.NumberFormat("fa-IR"),
        Vu = {
          hour: function (t) {
            return Fu.format(t);
          },
          minute: function (t) {
            var e = Fu.format(t);
            return 1 === e.length && (e = Fu.format(0) + e), e;
          },
          separator: ":",
          period: function (t) {
            return "AM" === t ? "\u0635\u0628\u062d" : "\u0639\u0635\u0631";
          },
          clockHour: function (t) {
            return Fu.format(t);
          },
          clockMinute: function (t) {
            return Fu.format(t);
          },
          labels: {
            ok: "\u062a\u0627\u06cc\u06cc\u062f",
            cancel: "\u0644\u063a\u0648",
          },
        },
        Ru = {
          hour: function (t) {
            return Nu.format(t);
          },
          minute: function (t) {
            var e = Nu.format(t);
            return 1 === e.length && (e = Nu.format(0) + e), e;
          },
          separator: ":",
          period: function (t) {
            return "AM" === t
              ? "\u0635\u0628\u0627\u062d\u0627"
              : "\u0645\u0633\u0627\u0621";
          },
          clockHour: function (t) {
            return Nu.format(t);
          },
          clockMinute: function (t) {
            return Nu.format(t);
          },
          labels: {
            ok: "\u062d\u0633\u0646\u0627",
            cancel: "\u0625\u0644\u063a\u0627\u0621",
          },
        },
        Bu = {
          hour: function (t) {
            return t;
          },
          minute: function (t) {
            var e = t;
            return 1 === e.length && (e = "\u06f0" + e), e;
          },
          separator: ":",
          period: function (t) {
            return "AM" === t ? "\u4e0a\u5348" : "\u4e0b\u5348";
          },
          clockHour: function (t) {
            return t;
          },
          clockMinute: function (t) {
            return t;
          },
          labels: { ok: "\u786e\u5b9a", cancel: "\u53d6\u6d88" },
        },
        Lu = (function () {
          var t = (function () {
            function t(e, n, r) {
              _classCallCheck(this, t),
                (this.resolver = e),
                (this.appRef = n),
                (this.injector = r);
            }
            return (
              _createClass(t, [
                {
                  key: "open",
                  value: function (t) {
                    ((t = {
                      time: (t = t || {}).time || "00:00",
                      theme:
                        [
                          "light",
                          "dark",
                          "material-red",
                          "material-green",
                          "material-blue",
                          "material-purple",
                          "material-orange",
                        ].indexOf(t.theme) > 0
                          ? t.theme
                          : "light",
                      rangeTime: t.rangeTime || { start: "0:0", end: "24:0" },
                      arrowStyle: t.arrowStyle || {},
                      locale: t.locale || "en",
                      changeToMinutes: t.changeToMinutes,
                      animation:
                        null == t.animation || "fade" === t.animation
                          ? "fade"
                          : "rotate" === t.animation && "rotate",
                      preference: t.preference || null,
                      onlyHour: t.onlyHour,
                      onlyMinute: t.onlyMinute,
                      onlyAM: t.onlyAM,
                      onlyPM: t.onlyPM,
                    }).rangeTime = {
                      start: t.rangeTime.start || "0:0",
                      end: t.rangeTime.end || "24:0",
                    }),
                      (t.arrowStyle = {
                        background: t.arrowStyle.background
                          ? t.arrowStyle.background
                          : void 0 !== t.theme && "dark" === t.theme
                          ? "rgb(128, 203, 196)"
                          : "",
                        color: t.arrowStyle.color || "",
                      });
                    var e = this.resolver
                      .resolveComponentFactory(b)
                      .create(this.injector);
                    return (
                      this.appRef.attachView(e.hostView),
                      document.body.appendChild(e.hostView.rootNodes[0]),
                      (e.instance.subject = new Au()),
                      (e.instance._ref = e),
                      (e.instance.appRef = this.appRef),
                      (e.instance.timerElement = ""),
                      (e.instance.config = t),
                      (e.instance.preference = t.preference
                        ? t.preference
                        : (function (t) {
                            switch (t) {
                              case "fa":
                                return Vu;
                              case "ar":
                                return Ru;
                              case "zh":
                                return Bu;
                              default:
                                return null;
                            }
                          })(t.locale)),
                      e.instance.ParseStringToTime(t.time),
                      {
                        afterClose: function () {
                          return e.instance.subject.asObservable();
                        },
                      }
                    );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r["\u0275\u0275inject"](r.ComponentFactoryResolver),
                r["\u0275\u0275inject"](r.ApplicationRef),
                r["\u0275\u0275inject"](r.Injector)
              );
            }),
            (t.ɵprov = r["\u0275\u0275defineInjectable"]({
              token: t,
              factory: t.ɵfac,
            })),
            t
          );
        })(),
        Wu = (function () {
          var t = (function () {
            function t(e, n) {
              _classCallCheck(this, t),
                (this.viewContainerRef = e),
                (this.atp = n),
                (this.myClick = new r.EventEmitter()),
                (this.onChange = function (t) {}),
                (this.elementRef = this.viewContainerRef.element);
            }
            return (
              _createClass(t, [
                {
                  key: "onClick",
                  value: function (t) {
                    var e = this,
                      n = this.viewContainerRef.element.nativeElement,
                      r = n.value,
                      i = n.getAttribute("theme"),
                      o = n.getAttribute("start"),
                      s = n.getAttribute("end"),
                      c = n.getAttribute("locale") || "en",
                      u = "true" === n.getAttribute("changeToMinutes"),
                      a = n.getAttribute("animation"),
                      p = n.getAttribute("preference") || null,
                      l = "true" === n.getAttribute("onlyHour"),
                      h = "true" === n.getAttribute("onlyMinute"),
                      f = "true" === n.getAttribute("onlyAM"),
                      b = "true" === n.getAttribute("onlyPM"),
                      d = n.getAttribute("arrowStyle");
                    (d = d
                      ? JSON.parse(d.replace(new RegExp("'", "g"), '"'))
                      : ""),
                      this.atp
                        .open({
                          time: r,
                          theme: i,
                          rangeTime: { start: o, end: s },
                          arrowStyle: d,
                          locale: c,
                          changeToMinutes: u,
                          animation: a,
                          onlyHour: l,
                          onlyMinute: h,
                          onlyAM: f,
                          onlyPM: b,
                          preference: p,
                        })
                        .afterClose()
                        .subscribe(function (t) {
                          e.writeValue(t), e.onChange(t);
                        });
                  },
                },
                {
                  key: "onInput",
                  value: function (t) {
                    this.onChange(t.srcElement.value);
                  },
                },
                {
                  key: "writeValue",
                  value: function (t) {
                    this.elementRef &&
                      (this.elementRef.nativeElement.value = t);
                  },
                },
                {
                  key: "registerOnChange",
                  value: function (t) {
                    this.onChange = t;
                  },
                },
                { key: "registerOnTouched", value: function (t) {} },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(
                r["\u0275\u0275directiveInject"](r.ViewContainerRef),
                r["\u0275\u0275directiveInject"](Lu)
              );
            }),
            (t.ɵdir = r["\u0275\u0275defineDirective"]({
              type: t,
              selectors: [["input", "atp-time-picker", ""]],
              hostBindings: function (t, e) {
                1 & t &&
                  r["\u0275\u0275listener"]("click", function (t) {
                    return e.onClick(t);
                  })("input", function (t) {
                    return e.onInput(t);
                  });
              },
              outputs: { myClick: "myClick" },
              features: [
                r["\u0275\u0275ProvidersFeature"]([
                  { provide: o.p, useExisting: t, multi: !0 },
                ]),
              ],
            })),
            t
          );
        })(),
        qu = (function () {
          var t = _createClass(function t() {
            _classCallCheck(this, t);
          });
          return (
            (t.ɵmod = r["\u0275\u0275defineNgModule"]({ type: t })),
            (t.ɵinj = r["\u0275\u0275defineInjector"]({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [Lu, f],
              imports: [[i.CommonModule]],
            })),
            t
          );
        })();
    },
  },
]);
