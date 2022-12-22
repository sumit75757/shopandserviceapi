function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    cxbk: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = {
        production: !0,
        imageURL: "http://localhost:4000",
        baseUrl: "http://localhost:4000/",
      };
    },
    vINV: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a = n("ofXK"),
        i = n("tyNb"),
        l = n("cxbk"),
        s = n("fXoL"),
        o = n("UU5k"),
        c = n("/n7v"),
        d =
          (((r = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: "transform",
                  value: function (e) {
                    return e.slice(0, 40) + "....";
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || r)();
          }),
          (r.ɵpipe = s["\u0275\u0275definePipe"]({
            name: "srink",
            type: r,
            pure: !0,
          })),
          r);
      function m(e, t) {
        if (
          (1 & e &&
            (s["\u0275\u0275elementStart"](0, "tr"),
            s["\u0275\u0275elementStart"](1, "td"),
            s["\u0275\u0275elementStart"](2, "div", 6),
            s["\u0275\u0275element"](3, "img", 7),
            s["\u0275\u0275elementStart"](4, "div", 8),
            s["\u0275\u0275elementStart"](5, "h6", 9),
            s["\u0275\u0275text"](6),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](7, "p", 9),
            s["\u0275\u0275text"](8),
            s["\u0275\u0275pipe"](9, "srink"),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](10, "td"),
            s["\u0275\u0275text"](11, "Support Lead"),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](12, "td"),
            s["\u0275\u0275text"](13, "Edinburgh"),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](14, "td"),
            s["\u0275\u0275text"](15, "61"),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](16, "td"),
            s["\u0275\u0275text"](17, "2011/04/25"),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](18, "td"),
            s["\u0275\u0275elementStart"](19, "span", 10),
            s["\u0275\u0275text"](20, "Active"),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](21, "div", 11),
            s["\u0275\u0275elementStart"](22, "button", 12),
            s["\u0275\u0275element"](23, "i", 13),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](24, "button", 14),
            s["\u0275\u0275element"](25, "i", 15),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"]()),
          2 & e)
        ) {
          var n = t.$implicit,
            r = s["\u0275\u0275nextContext"]();
          s["\u0275\u0275advance"](3),
            s["\u0275\u0275propertyInterpolate1"](
              "src",
              "",
              r.imageUrl + n.product.productImage[0],
              " ",
              s["\u0275\u0275sanitizeUrl"]
            ),
            s["\u0275\u0275advance"](3),
            s["\u0275\u0275textInterpolate"](n.product.productName),
            s["\u0275\u0275advance"](2),
            s["\u0275\u0275textInterpolate1"](
              "",
              s["\u0275\u0275pipeBind1"](9, 3, n.product.productInfo),
              " "
            );
        }
      }
      var u,
        p =
          (((u = (function () {
            function e(t, n) {
              _classCallCheck(this, e),
                (this.activeRoute = t),
                (this.api = n),
                (this.imageUrl = l.a.imageURL);
            }
            return (
              _createClass(e, [
                {
                  key: "ngOnInit",
                  value: function () {
                    var e = this;
                    this.activeRoute.params.subscribe(function (t) {
                      e.userId = t.id;
                    }),
                      this.getcart();
                  },
                },
                {
                  key: "getcart",
                  value: function () {
                    var e = this;
                    this.api.getUsercart(this.userId).subscribe(function (t) {
                      e.cart = t.data;
                    });
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || u)(
              s["\u0275\u0275directiveInject"](i.a),
              s["\u0275\u0275directiveInject"](o.a)
            );
          }),
          (u.ɵcmp = s["\u0275\u0275defineComponent"]({
            type: u,
            selectors: [["app-cart"]],
            decls: 22,
            vars: 2,
            consts: [
              [1, "row"],
              [1, "col-sm-12"],
              ["cardClass", "user-profile-list", 3, "hidHeader"],
              [1, "dt-responsive", "table-responsive"],
              [
                "datatable",
                "",
                1,
                "table",
                "table-striped",
                "row-border",
                "table-hover",
              ],
              [4, "ngFor", "ngForOf"],
              [1, "d-inline-block", "align-middle"],
              [
                "alt",
                "user image",
                1,
                "img-radius",
                "align-top",
                "m-r-15",
                2,
                "width",
                "40px",
                3,
                "src",
              ],
              [1, "d-inline-block"],
              [1, "m-b-0"],
              [1, "badge", "badge-light-success"],
              [1, "overlay-edit"],
              ["type", "button", 1, "btn", "btn-icon", "btn-success"],
              [1, "feather", "icon-check-circle"],
              ["type", "button", 1, "btn", "btn-icon", "btn-danger"],
              [1, "feather", "icon-trash-2"],
            ],
            template: function (e, t) {
              1 & e &&
                (s["\u0275\u0275elementStart"](0, "div", 0),
                s["\u0275\u0275elementStart"](1, "div", 1),
                s["\u0275\u0275elementStart"](2, "app-card", 2),
                s["\u0275\u0275elementStart"](3, "div", 3),
                s["\u0275\u0275elementStart"](4, "table", 4),
                s["\u0275\u0275elementStart"](5, "thead"),
                s["\u0275\u0275elementStart"](6, "tr"),
                s["\u0275\u0275elementStart"](7, "th"),
                s["\u0275\u0275text"](8, "Name"),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementStart"](9, "th"),
                s["\u0275\u0275text"](10, "Position"),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementStart"](11, "th"),
                s["\u0275\u0275text"](12, "Office"),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementStart"](13, "th"),
                s["\u0275\u0275text"](14, "Age"),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementStart"](15, "th"),
                s["\u0275\u0275text"](16, "Start date"),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementStart"](17, "th"),
                s["\u0275\u0275text"](18, "Status"),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementStart"](19, "tbody"),
                s["\u0275\u0275template"](20, m, 26, 5, "tr", 5),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275element"](21, "tfoot"),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementEnd"](),
                s["\u0275\u0275elementEnd"]()),
                2 & e &&
                  (s["\u0275\u0275advance"](2),
                  s["\u0275\u0275property"]("hidHeader", !1),
                  s["\u0275\u0275advance"](18),
                  s["\u0275\u0275property"]("ngForOf", t.cart));
            },
            directives: [c.a, a.NgForOf],
            pipes: [d],
            styles: [""],
          })),
          u),
        h = n("PSD3"),
        f = n.n(h),
        v = n("5eHb"),
        b = n("3Pt+"),
        g = n("JqCM");
      function S(e, t) {
        if (1 & e) {
          var n = s["\u0275\u0275getCurrentView"]();
          s["\u0275\u0275elementStart"](0, "tr"),
            s["\u0275\u0275elementStart"](1, "td"),
            s["\u0275\u0275elementStart"](2, "div", 15),
            s["\u0275\u0275element"](3, "img", 16),
            s["\u0275\u0275elementStart"](4, "div", 17),
            s["\u0275\u0275elementStart"](5, "h6", 18),
            s["\u0275\u0275text"](6),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](7, "p", 18),
            s["\u0275\u0275text"](8),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](9, "td"),
            s["\u0275\u0275elementStart"](10, "a", 19),
            s["\u0275\u0275text"](11, " Cart"),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](12, "td"),
            s["\u0275\u0275elementStart"](13, "div", 20),
            s["\u0275\u0275elementStart"](14, "input", 21),
            s["\u0275\u0275listener"]("change", function (e) {
              return (
                s["\u0275\u0275restoreView"](n),
                s["\u0275\u0275nextContext"]().statusHandel(e)
              );
            }),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275element"](15, "label", 22),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](16, "td"),
            s["\u0275\u0275elementStart"](17, "span", 23),
            s["\u0275\u0275text"](18),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementStart"](19, "td"),
            s["\u0275\u0275elementStart"](20, "div", 24),
            s["\u0275\u0275elementStart"](21, "button", 25),
            s["\u0275\u0275listener"]("click", function () {
              s["\u0275\u0275restoreView"](n);
              var e = t.$implicit;
              return s["\u0275\u0275nextContext"]().remove(e._id);
            }),
            s["\u0275\u0275element"](22, "i", 26),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"](),
            s["\u0275\u0275elementEnd"]();
        }
        if (2 & e) {
          var r = t.$implicit;
          s["\u0275\u0275advance"](6),
            s["\u0275\u0275textInterpolate"](r.username),
            s["\u0275\u0275advance"](2),
            s["\u0275\u0275textInterpolate"](r.email),
            s["\u0275\u0275advance"](2),
            s["\u0275\u0275propertyInterpolate"]("routerLink", "cart/" + r._id),
            s["\u0275\u0275advance"](4),
            s["\u0275\u0275propertyInterpolate"]("id", r._id),
            s["\u0275\u0275property"]("checked", r.satate),
            s["\u0275\u0275advance"](1),
            s["\u0275\u0275propertyInterpolate"]("for", r._id),
            s["\u0275\u0275advance"](2),
            s["\u0275\u0275propertyInterpolate1"](
              "ngClass",
              "",
              r.satate ? "badge-light-success" : "badge-light-danger",
              "\n                  "
            ),
            s["\u0275\u0275advance"](1),
            s["\u0275\u0275textInterpolate1"](
              "",
              r.satate ? "Active" : "Disabled",
              " "
            );
        }
      }
      var E,
        k,
        x = [
          {
            path: "",
            component:
              ((E = (function () {
                function e(t, n, r, a, i, s) {
                  _classCallCheck(this, e),
                    (this.toastr = t),
                    (this.fb = n),
                    (this.api = r),
                    (this.spiner = a),
                    (this.route = i),
                    (this.activeRoute = s),
                    (this.imageURL = l.a.imageURL),
                    (this.skip = 0),
                    (this.limit = 10),
                    (this.next = 0);
                }
                return (
                  _createClass(e, [
                    {
                      key: "ngOnInit",
                      value: function () {
                        this.getseller();
                      },
                    },
                    {
                      key: "previeus",
                      value: function () {
                        (this.skip = this.skip - this.limit),
                          this.skip >= 0 &&
                            ((this.next = this.skip), this.getseller()),
                          this.counts(),
                          console.log(this.next);
                      },
                    },
                    {
                      key: "nexts",
                      value: function () {
                        (this.skip = this.skip + this.limit),
                          (this.next = this.skip),
                          this.getseller(),
                          console.log(this.next),
                          this.counts();
                      },
                    },
                    {
                      key: "counts",
                      value: function () {
                        return this.next + 10 > this.count
                          ? this.count
                          : this.next + 10;
                      },
                    },
                    {
                      key: "Search",
                      value: function (e) {
                        (this.serch = e.target.value), this.getseller();
                      },
                    },
                    {
                      key: "getseller",
                      value: function () {
                        var e = this;
                        this.serch || this.spiner.show(),
                          this.api
                            .getUser(this.skip, this.limit, this.serch)
                            .subscribe(function (t) {
                              console.log(e.skip),
                                "success" == t.response
                                  ? (console.log(t),
                                    "" != e.serch &&
                                      0 == t.users.length &&
                                      e.toastr.error(
                                        "Search result not found!"
                                      ),
                                    (e.count = t.count),
                                    (e.tableData = t),
                                    console.log(e.tableData.count),
                                    e.spiner.hide())
                                  : (e.spiner.hide(),
                                    e.toastr.error("Somthing Wrong!")),
                                0 == t.count &&
                                  (e.spiner.hide(),
                                  e.toastr.info("Seller Not Found!"));
                            });
                      },
                    },
                    {
                      key: "statusHandel",
                      value: function (e) {
                        var t = this;
                        console.log(e.target.checked),
                          console.log(e.target.id),
                          this.api
                            .updateSeller(
                              { satate: e.target.checked },
                              e.target.id
                            )
                            .subscribe(function (e) {
                              (e.response = "success")
                                ? (console.log(e),
                                  t.spiner.hide(),
                                  t.toastr.success("Seller Update!"),
                                  t.getseller(),
                                  (t.id = null))
                                : (t.spiner.hide(),
                                  t.toastr.error("Somthing Wrong!")),
                                (t.id = null);
                            });
                      },
                    },
                    { key: "update", value: function (e) {} },
                    {
                      key: "remove",
                      value: function (e) {
                        var t = this;
                        f.a
                          .fire({
                            title: "Are you sure?",
                            text: "Once deleted, you will not be able to recover this imaginary file!",
                            type: "warning",
                            showCloseButton: !0,
                            showCancelButton: !0,
                          })
                          .then(function (n) {
                            n.dismiss ||
                              t.api.removeSeller(e).subscribe(function (e) {
                                t.toastr.success("Product has been deleted!!"),
                                  t.getseller();
                              });
                          });
                      },
                    },
                  ]),
                  e
                );
              })()),
              (E.ɵfac = function (e) {
                return new (e || E)(
                  s["\u0275\u0275directiveInject"](v.c),
                  s["\u0275\u0275directiveInject"](b.f),
                  s["\u0275\u0275directiveInject"](o.a),
                  s["\u0275\u0275directiveInject"](g.c),
                  s["\u0275\u0275directiveInject"](i.f),
                  s["\u0275\u0275directiveInject"](i.a)
                );
              }),
              (E.ɵcmp = s["\u0275\u0275defineComponent"]({
                type: E,
                selectors: [["app-user"]],
                decls: 35,
                vars: 8,
                consts: [
                  [1, "row"],
                  [1, "col-sm-12"],
                  ["cardClass", "user-profile-list", 3, "hidHeader"],
                  [1, "mb-3"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Search...",
                    1,
                    "form-control",
                    3,
                    "ngModel",
                    "input",
                  ],
                  [1, "dt-responsive", "table-responsive"],
                  [
                    "datatable",
                    "",
                    1,
                    "table",
                    "table-striped",
                    "row-border",
                    "table-hover",
                  ],
                  [2, "width", "100%"],
                  [4, "ngFor", "ngForOf"],
                  [1, "footer"],
                  [1, "page-item"],
                  [1, "mb-0", "px-3"],
                  [1, "pagination"],
                  ["href", "#", 1, "page-link", 3, "disabled", "click"],
                  [1, "page-link", 3, "disabled", "click"],
                  [1, "d-inline-block", "align-middle"],
                  [
                    "src",
                    "../../../../assets/images/user/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
                    "alt",
                    "user image",
                    1,
                    "img-radius",
                    "align-top",
                    "m-r-15",
                    2,
                    "width",
                    "40px",
                  ],
                  [1, "d-inline-block"],
                  [1, "m-b-0"],
                  [1, "btn", "btn-link", 3, "routerLink"],
                  [1, "custom-control", "custom-switch"],
                  [
                    "type",
                    "checkbox",
                    1,
                    "custom-control-input",
                    3,
                    "id",
                    "checked",
                    "change",
                  ],
                  [1, "custom-control-label", 3, "for"],
                  [1, "badge", 3, "ngClass"],
                  [1, ""],
                  [
                    "type",
                    "button",
                    1,
                    "btn",
                    "btn-icon",
                    "btn-danger",
                    3,
                    "click",
                  ],
                  [1, "feather", "icon-trash-2"],
                ],
                template: function (e, t) {
                  1 & e &&
                    (s["\u0275\u0275elementStart"](0, "div", 0),
                    s["\u0275\u0275elementStart"](1, "div", 1),
                    s["\u0275\u0275elementStart"](2, "app-card", 2),
                    s["\u0275\u0275elementStart"](3, "div", 3),
                    s["\u0275\u0275elementStart"](4, "input", 4),
                    s["\u0275\u0275listener"]("input", function (e) {
                      return t.Search(e);
                    }),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](5, "div", 5),
                    s["\u0275\u0275elementStart"](6, "table", 6),
                    s["\u0275\u0275elementStart"](7, "thead", 7),
                    s["\u0275\u0275elementStart"](8, "tr"),
                    s["\u0275\u0275elementStart"](9, "th"),
                    s["\u0275\u0275text"](10, "Name"),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](11, "th"),
                    s["\u0275\u0275text"](12, "Cart"),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](13, "th"),
                    s["\u0275\u0275text"](14, "Set State"),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](15, "th"),
                    s["\u0275\u0275text"](16, "Status"),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](17, "th"),
                    s["\u0275\u0275text"](18, "Action"),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](19, "tbody"),
                    s["\u0275\u0275template"](20, S, 23, 8, "tr", 8),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](21, "div"),
                    s["\u0275\u0275elementStart"](22, "div", 9),
                    s["\u0275\u0275elementStart"](23, "div"),
                    s["\u0275\u0275elementStart"](24, "span", 10),
                    s["\u0275\u0275elementStart"](25, "p", 11),
                    s["\u0275\u0275text"](26),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](27, "div"),
                    s["\u0275\u0275elementStart"](28, "ul", 12),
                    s["\u0275\u0275elementStart"](29, "li", 10),
                    s["\u0275\u0275elementStart"](30, "button", 13),
                    s["\u0275\u0275listener"]("click", function () {
                      return t.previeus();
                    }),
                    s["\u0275\u0275text"](31, "Previous"),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementStart"](32, "li", 10),
                    s["\u0275\u0275elementStart"](33, "button", 14),
                    s["\u0275\u0275listener"]("click", function () {
                      return t.nexts();
                    }),
                    s["\u0275\u0275text"](34, "Next"),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"](),
                    s["\u0275\u0275elementEnd"]()),
                    2 & e &&
                      (s["\u0275\u0275advance"](2),
                      s["\u0275\u0275property"]("hidHeader", !0),
                      s["\u0275\u0275advance"](2),
                      s["\u0275\u0275property"]("ngModel", t.serch),
                      s["\u0275\u0275advance"](16),
                      s["\u0275\u0275property"](
                        "ngForOf",
                        null == t.tableData ? null : t.tableData.users
                      ),
                      s["\u0275\u0275advance"](6),
                      s["\u0275\u0275textInterpolate3"](
                        " ",
                        t.next + 1,
                        " - ",
                        t.counts(),
                        " of ",
                        t.count,
                        " "
                      ),
                      s["\u0275\u0275advance"](4),
                      s["\u0275\u0275property"]("disabled", 0 == t.next),
                      s["\u0275\u0275advance"](3),
                      s["\u0275\u0275property"](
                        "disabled",
                        t.count == t.counts() || t.count <= 10
                      ));
                },
                directives: [c.a, b.c, b.q, b.t, a.NgForOf, i.i, a.NgClass],
                styles: [
                  ".footer[_ngcontent-%COMP%]{display:flex!important;align-content:flex-end!important;margin-top:1rem!important;justify-content:space-between!important;align-items:baseline!important;font-size:1rem!important}  #toast-container>div{opacity:1!important}",
                ],
              })),
              E),
          },
          { path: "cart/:id", component: p },
        ],
        y =
          (((k = _createClass(function e() {
            _classCallCheck(this, e);
          })).ɵmod = s["\u0275\u0275defineNgModule"]({ type: k })),
          (k.ɵinj = s["\u0275\u0275defineInjector"]({
            factory: function (e) {
              return new (e || k)();
            },
            imports: [[i.j.forChild(x)], i.j],
          })),
          k),
        C = n("ebz3");
      n.d(t, "UserModule", function () {
        return I;
      });
      var w,
        I =
          (((w = _createClass(function e() {
            _classCallCheck(this, e);
          })).ɵmod = s["\u0275\u0275defineNgModule"]({ type: w })),
          (w.ɵinj = s["\u0275\u0275defineInjector"]({
            factory: function (e) {
              return new (e || w)();
            },
            imports: [[a.CommonModule, y, C.a, v.b.forRoot()]],
          })),
          w);
    },
  },
]);
