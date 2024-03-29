/*!
 * BootstrapVue 2.3.0
 *
 * @link https://bootstrap-vue.js.org
 * @source https://github.com/bootstrap-vue/bootstrap-vue
 * @copyright (c) 2016-2020 BootstrapVue
 * @license MIT
 * https://github.com/bootstrap-vue/bootstrap-vue/blob/master/LICENSE
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("vue")) : "function" == typeof define && define.amd ? define(["vue"], e) : (t = t || self).bootstrapVue = e(t.Vue)
}(this, (function (t) {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function r(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function o(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function a(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, n)
        }
        return i
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(i), !0).forEach((function (e) {
                o(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
        }
        return t
    }

    function l(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && c(t, e)
    }

    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (t) {
            return !1
        }
    }

    function h(t, e, i) {
        return (h = d() ? Reflect.construct : function (t, e, i) {
            var n = [null];
            n.push.apply(n, e);
            var r = new(Function.bind.apply(t, n));
            return i && c(r, i.prototype), r
        }).apply(null, arguments)
    }

    function f(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (f = function (t) {
            if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
            var i;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" != typeof e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n)
            }

            function n() {
                return h(t, arguments, u(this).constructor)
            }
            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), c(n, t)
        })(t)
    }

    function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function m(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? p(t) : e
    }

    function g(t, e, i) {
        return (g = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
            var n = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                return t
            }(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(i) : r.value
            }
        })(t, e, i || t)
    }

    function v(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var b, y, S = function () {
            return Array.from.apply(Array, arguments)
        },
        T = function (t) {
            return Array.isArray(t)
        },
        w = function (t, e) {
            return -1 !== t.indexOf(e)
        },
        B = function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return Array.prototype.concat.apply([], e)
        },
        k = function () {
            return Object.assign.apply(Object, arguments)
        },
        C = function (t, e) {
            return Object.create(t, e)
        },
        x = function (t, e) {
            return Object.defineProperties(t, e)
        },
        $ = function (t, e, i) {
            return Object.defineProperty(t, e, i)
        },
        _ = function (t) {
            return Object.freeze(t)
        },
        P = function (t) {
            return Object.getOwnPropertyNames(t)
        },
        O = function (t) {
            return Object.keys(t)
        },
        I = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        E = function (t) {
            return null !== t && "object" === e(t)
        },
        F = function (t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        },
        V = function (t) {
            return s({}, t)
        },
        A = function (t, e) {
            return O(t).filter((function (t) {
                return -1 === e.indexOf(t)
            })).reduce((function (e, i) {
                return s({}, e, o({}, i, t[i]))
            }), {})
        },
        D = "undefined" != typeof window,
        N = "undefined" != typeof document,
        R = "undefined" != typeof navigator,
        L = "undefined" != typeof Promise,
        H = "undefined" != typeof MutationObserver || "undefined" != typeof WebKitMutationObserver || "undefined" != typeof MozMutationObserver,
        z = D && N && R,
        M = z ? window.navigator.userAgent.toLowerCase() : "",
        j = M.indexOf("jsdom") > 0,
        G = (/msie|trident/.test(M), function () {
            var t = !1;
            if (z) try {
                var e = {
                    get passive() {
                        t = !0
                    }
                };
                window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
            } catch (e) {
                t = !1
            }
            return t
        }()),
        W = z && ("ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
        U = z && Boolean(window.PointerEvent || window.MSPointerEvent),
        q = z && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype,
        K = function () {
            return function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = "undefined" != typeof process && process && process.env || {};
                return t ? i[t] || e : i
            }("BOOTSTRAP_VUE_NO_WARN")
        },
        X = D ? window : {},
        Y = D ? X.Element : function (t) {
            function Element() {
                return i(this, Element), m(this, u(Element).apply(this, arguments))
            }
            return l(Element, t), Element
        }(f(Object)),
        HTMLElement = D ? X.HTMLElement : function (t) {
            function HTMLElement() {
                return i(this, HTMLElement), m(this, u(HTMLElement).apply(this, arguments))
            }
            return l(HTMLElement, t), HTMLElement
        }(Y),
        SVGElement = D ? X.SVGElement : function (t) {
            function SVGElement() {
                return i(this, SVGElement), m(this, u(SVGElement).apply(this, arguments))
            }
            return l(SVGElement, t), SVGElement
        }(Y),
        Z = D ? X.File : function (t) {
            function e() {
                return i(this, e), m(this, u(e).apply(this, arguments))
            }
            return l(e, t), e
        }(f(Object)),
        J = function (t) {
            return e(t)
        },
        Q = function (t) {
            return void 0 === t
        },
        tt = function (t) {
            return null === t
        },
        et = function (t) {
            return Q(t) || tt(t)
        },
        it = function (t) {
            return "function" === J(t)
        },
        nt = function (t) {
            return "boolean" === J(t)
        },
        rt = function (t) {
            return "string" === J(t)
        },
        ot = function (t) {
            return "number" === J(t)
        },
        at = function (t) {
            return t instanceof Date
        },
        st = function (t) {
            return t instanceof Event
        },
        lt = function (t) {
            return t instanceof Z
        },
        ut = function (t) {
            return "RegExp" === function (t) {
                return Object.prototype.toString.call(t).slice(8, -1)
            }(t)
        },
        ct = function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
            return T(e) ? e.reduce((function (e, i) {
                return [].concat(v(e), [t(i, i)])
            }), []) : F(e) ? O(e).reduce((function (i, n) {
                return s({}, i, o({}, n, t(e[n], e[n])))
            }), {}) : i
        },
        dt = function (t) {
            return t
        },
        ht = /\[(\d+)]/g,
        ft = function (t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (!(e = T(e) ? e.join(".") : e) || !E(t)) return i;
            if (e in t) return t[e];
            var n = (e = String(e).replace(ht, ".$1")).split(".").filter(dt);
            return 0 === n.length ? i : n.every((function (e) {
                return E(t) && e in t && null != (t = t[e])
            })) ? t : i
        },
        pt = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            K() || console.warn("[BootstrapVue warn]: ".concat(e ? "".concat(e, " - ") : "").concat(t))
        },
        mt = function (t) {
            return !z && (pt("".concat(t, ": Can not be called during SSR.")), !0)
        },
        gt = function (t) {
            return !L && (pt("".concat(t, ": Requires Promise support.")), !0)
        },
        vt = function t(e) {
            return O(e).forEach((function (i) {
                var n = e[i];
                e[i] = n && (F(n) || T(n)) ? t(n) : n
            })), _(e)
        }({
            breakpoints: ["xs", "sm", "md", "lg", "xl"],
            formControls: {
                size: null
            },
            BAlert: {
                dismissLabel: "Close",
                variant: "info"
            },
            BBadge: {
                variant: "secondary"
            },
            BButton: {
                size: null,
                variant: "secondary"
            },
            BButtonClose: {
                content: "&times;",
                textVariant: null,
                ariaLabel: "Close"
            },
            BCardSubTitle: {
                subTitleTextVariant: "muted"
            },
            BCarousel: {
                labelPrev: "Previous Slide",
                labelNext: "Next Slide",
                labelGotoSlide: "Goto Slide",
                labelIndicators: "Select a slide to display"
            },
            BDropdown: {
                toggleText: "Toggle Dropdown",
                size: null,
                variant: "secondary",
                splitVariant: null
            },
            BFormFile: {
                browseText: "Browse",
                placeholder: "No file chosen",
                dropPlaceholder: "Drop files here"
            },
            BFormTag: {
                removeLabel: "Remove tag",
                variant: "secondary"
            },
            BFormTags: {
                addButtonText: "Add",
                addButtonVariant: "outline-secondary",
                duplicateTagText: "Duplicate tag(s)",
                invalidTagText: "Invalid tag(s)",
                placeholder: "Add tag...",
                tagRemoveLabel: "Remove tag",
                tagVariant: "secondary"
            },
            BFormText: {
                textVariant: "muted"
            },
            BImg: {
                blankColor: "transparent"
            },
            BImgLazy: {
                blankColor: "transparent"
            },
            BInputGroup: {
                size: null
            },
            BJumbotron: {
                bgVariant: null,
                borderVariant: null,
                textVariant: null
            },
            BListGroupItem: {
                variant: null
            },
            BModal: {
                titleTag: "h5",
                size: "md",
                headerBgVariant: null,
                headerBorderVariant: null,
                headerTextVariant: null,
                headerCloseVariant: null,
                bodyBgVariant: null,
                bodyTextVariant: null,
                footerBgVariant: null,
                footerBorderVariant: null,
                footerTextVariant: null,
                cancelTitle: "Cancel",
                cancelVariant: "secondary",
                okTitle: "OK",
                okVariant: "primary",
                headerCloseContent: "&times;",
                headerCloseLabel: "Close"
            },
            BNavbar: {
                variant: null
            },
            BNavbarToggle: {
                label: "Toggle navigation"
            },
            BPagination: {
                size: null
            },
            BPaginationNav: {
                size: null
            },
            BPopover: {
                boundary: "scrollParent",
                boundaryPadding: 5,
                customClass: null,
                delay: 50,
                variant: null
            },
            BProgress: {
                variant: null
            },
            BProgressBar: {
                variant: null
            },
            BSpinner: {
                variant: null
            },
            BTable: {
                selectedVariant: "active",
                headVariant: null,
                footVariant: null
            },
            BToast: {
                toaster: "b-toaster-top-right",
                autoHideDelay: 5e3,
                variant: null,
                toastClass: null,
                headerClass: null,
                bodyClass: null
            },
            BToaster: {
                ariaLive: null,
                ariaAtomic: null,
                role: null
            },
            BTooltip: {
                boundary: "scrollParent",
                boundaryPadding: 5,
                customClass: null,
                delay: 50,
                variant: null
            }
        }),
        bt = "BvConfig",
        yt = function () {
            function t() {
                i(this, t), this.$_config = {}, this.$_cachedBreakpoints = null
            }
            return r(t, [{
                key: "getDefaults",
                value: function () {
                    return this.defaults
                }
            }, {
                key: "setConfig",
                value: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (F(e)) {
                        var i = P(e);
                        i.forEach((function (i) {
                            if (I(vt, i)) {
                                var n = e[i];
                                if ("breakpoints" === i) {
                                    var r = e.breakpoints;
                                    !T(r) || r.length < 2 || r.some((function (t) {
                                        return !rt(t) || 0 === t.length
                                    })) ? pt('"breakpoints" must be an array of at least 2 breakpoint names', bt) : t.$_config.breakpoints = ct(r)
                                } else if (F(n)) {
                                    P(n).forEach((function (e) {
                                        I(vt[i], e) ? (t.$_config[i] = t.$_config[i] || {}, Q(n[e]) || (t.$_config[i][e] = ct(n[e]))) : pt('Unknown config property "'.concat(i, ".").concat(e, '"'), bt)
                                    }))
                                }
                            } else pt('Unknown config property "'.concat(i, '"'), bt)
                        }))
                    }
                }
            }, {
                key: "resetConfig",
                value: function () {
                    this.$_config = {}
                }
            }, {
                key: "getConfig",
                value: function () {
                    return ct(this.$_config)
                }
            }, {
                key: "getConfigValue",
                value: function (t) {
                    return ct(ft(this.$_config, t, ft(vt, t)))
                }
            }, {
                key: "defaults",
                get: function () {
                    return vt
                }
            }], [{
                key: "Defaults",
                get: function () {
                    return vt
                }
            }]), t
        }(),
        St = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
            i.prototype.$bvConfig = t.prototype.$bvConfig = i.prototype.$bvConfig || t.prototype.$bvConfig || new yt, i.prototype.$bvConfig.setConfig(e)
        },
        Tt = (b = !1, y = ["Multiple instances of Vue detected!", "You may need to set up an alias for Vue in your bundler config.", "See: https://bootstrap-vue.js.org/docs#using-module-bundlers"].join("\n"), function (e) {
            b || t === e || j || pt(y), b = !0
        }),
        wt = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.components,
                i = t.directives,
                n = t.plugins,
                r = function t(r) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t.installed || (t.installed = !0, Tt(r), St(o, r), xt(r, e), _t(r, i), kt(r, n))
                };
            return r.installed = !1, r
        },
        Bt = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return s({}, e, {
                install: wt(t)
            })
        },
        kt = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var i in e) i && e[i] && t.use(e[i])
        },
        Ct = function (t, e, i) {
            t && e && i && t.component(e, i)
        },
        xt = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var i in e) Ct(t, i, e[i])
        },
        $t = function (t, e, i) {
            t && e && i && t.directive(e.replace(/^VB/, "B"), i)
        },
        _t = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var i in e) $t(t, i, e[i])
        },
        Pt = function (t) {
            var e = C(null);
            return function () {
                for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                var o = JSON.stringify(n);
                return e[o] = e[o] || t.apply(null, n)
            }
        },
        Ot = t.prototype,
        It = function (t) {
            return Ot.$bvConfig ? Ot.$bvConfig.getConfigValue(t) : ct(ft(vt, t))
        },
        Et = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return e ? It("".concat(t, ".").concat(e)) : It(t) || {}
        },
        Ft = function () {
            return It("breakpoints")
        },
        Vt = Pt((function () {
            return Ft()
        })),
        At = Pt((function () {
            var t = ct(Vt());
            return t[0] = "", t
        })),
        Dt = D ? window : {},
        Nt = N ? document : {},
        Rt = "undefined" != typeof Element ? Element.prototype : {},
        Lt = Rt.matches || Rt.msMatchesSelector || Rt.webkitMatchesSelector,
        Ht = Rt.closest || function (t) {
            var e = this;
            do {
                if (Jt(e, t)) return e;
                e = e.parentElement || e.parentNode
            } while (!tt(e) && e.nodeType === Node.ELEMENT_NODE);
            return null
        },
        zt = Dt.requestAnimationFrame || Dt.webkitRequestAnimationFrame || Dt.mozRequestAnimationFrame || Dt.msRequestAnimationFrame || Dt.oRequestAnimationFrame || function (t) {
            return setTimeout(t, 16)
        },
        Mt = Dt.MutationObserver || Dt.WebKitMutationObserver || Dt.MozMutationObserver || null,
        jt = function (t) {
            return G ? E(t) ? t : {
                useCapture: !!t || !1
            } : !!(E(t) ? t.useCapture : t)
        },
        Gt = function (t, e, i, n) {
            t && t.addEventListener && t.addEventListener(e, i, jt(n))
        },
        Wt = function (t, e, i, n) {
            t && t.removeEventListener && t.removeEventListener(e, i, jt(n))
        },
        Ut = function (t) {
            return !(!t || t.nodeType !== Node.ELEMENT_NODE)
        },
        qt = function (t) {
            if (!Ut(t) || !t.parentNode || !te(Nt.body, t)) return !1;
            if ("none" === t.style.display) return !1;
            var e = ue(t);
            return !!(e && e.height > 0 && e.width > 0)
        },
        Kt = function (t) {
            return !Ut(t) || t.disabled || le(t, "disabled") || re(t, "disabled")
        },
        Xt = function (t) {
            return Ut(t) && t.offsetHeight
        },
        Yt = function (t, e) {
            return S((Ut(e) ? e : Nt).querySelectorAll(t))
        },
        Zt = function (t, e) {
            return (Ut(e) ? e : Nt).querySelector(t) || null
        },
        Jt = function (t, e) {
            return !!Ut(t) && Lt.call(t, e)
        },
        Qt = function (t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!Ut(e)) return null;
            var n = Ht.call(e, t);
            return i ? n : n === e ? null : n
        },
        te = function (t, e) {
            return !(!t || !it(t.contains)) && t.contains(e)
        },
        ee = function (t) {
            return Nt.getElementById(/^#/.test(t) ? t.slice(1) : t) || null
        },
        ie = function (t, e) {
            e && Ut(t) && t.classList && t.classList.add(e)
        },
        ne = function (t, e) {
            e && Ut(t) && t.classList && t.classList.remove(e)
        },
        re = function (t, e) {
            return !!(e && Ut(t) && t.classList) && t.classList.contains(e)
        },
        oe = function (t, e, i) {
            e && Ut(t) && t.setAttribute(e, i)
        },
        ae = function (t, e) {
            e && Ut(t) && t.removeAttribute(e)
        },
        se = function (t, e) {
            return e && Ut(t) ? t.getAttribute(e) : null
        },
        le = function (t, e) {
            return e && Ut(t) ? t.hasAttribute(e) : null
        },
        ue = function (t) {
            return Ut(t) ? t.getBoundingClientRect() : null
        },
        ce = function (t) {
            return D && Ut(t) ? Dt.getComputedStyle(t) : {}
        },
        de = function () {
            return D && Dt.getSelection ? Dt.getSelection() : null
        },
        he = function (t) {
            var e = {
                top: 0,
                left: 0
            };
            if (!Ut(t) || 0 === t.getClientRects().length) return e;
            var i = ue(t);
            if (i) {
                var n = t.ownerDocument.defaultView;
                e.top = i.top + n.pageYOffset, e.left = i.left + n.pageXOffset
            }
            return e
        },
        fe = function (t) {
            var e = {
                top: 0,
                left: 0
            };
            if (!Ut(t)) return e;
            var i = {
                    top: 0,
                    left: 0
                },
                n = ce(t);
            if ("fixed" === n.position) e = ue(t) || e;
            else {
                e = he(t);
                for (var r = t.ownerDocument, o = t.offsetParent || r.documentElement; o && (o === r.body || o === r.documentElement) && "static" === ce(o).position;) o = o.parentNode;
                if (o && o !== t && o.nodeType === Node.ELEMENT_NODE) {
                    i = he(o);
                    var a = ce(o);
                    i.top += parseFloat(a.borderTopWidth), i.left += parseFloat(a.borderLeftWidth)
                }
            }
            return {
                top: e.top - i.top - parseFloat(n.marginTop),
                left: e.left - i.left - parseFloat(n.marginLeft)
            }
        },
        pe = function (t) {
            return parseInt(t, 10)
        },
        me = function (t) {
            return parseFloat(t)
        },
        ge = function (t, e) {
            return me(t).toFixed(pe(e) || 0)
        },
        ve = function () {
            return (ve = Object.assign || function (t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        be = /-(\w)/g,
        ye = /:(.*)/,
        Se = /;(?![^(]*\))/g;

    function Te(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function we(t) {
        for (var e, i = {}, n = 0, r = t.split(Se); n < r.length; n++) {
            var o = r[n].split(ye),
                a = o[0],
                s = o[1];
            (a = a.trim()) && ("string" == typeof s && (s = s.trim()), i[(e = a, e.replace(be, Te))] = s)
        }
        return i
    }

    function Be() {
        for (var t, e, i = {}, n = arguments.length; n--;)
            for (var r = 0, o = Object.keys(arguments[n]); r < o.length; r++) switch (t = o[r]) {
                case "class":
                case "style":
                case "directives":
                    if (Array.isArray(i[t]) || (i[t] = []), "style" === t) {
                        var a = void 0;
                        a = Array.isArray(arguments[n].style) ? arguments[n].style : [arguments[n].style];
                        for (var s = 0; s < a.length; s++) {
                            var l = a[s];
                            "string" == typeof l && (a[s] = we(l))
                        }
                        arguments[n].style = a
                    }
                    i[t] = i[t].concat(arguments[n][t]);
                    break;
                case "staticClass":
                    if (!arguments[n][t]) break;
                    void 0 === i[t] && (i[t] = ""), i[t] && (i[t] += " "), i[t] += arguments[n][t].trim();
                    break;
                case "on":
                case "nativeOn":
                    i[t] || (i[t] = {});
                    for (var u = 0, c = Object.keys(arguments[n][t] || {}); u < c.length; u++) e = c[u], i[t][e] ? i[t][e] = [].concat(i[t][e], arguments[n][t][e]) : i[t][e] = arguments[n][t][e];
                    break;
                case "attrs":
                case "props":
                case "domProps":
                case "scopedSlots":
                case "staticStyle":
                case "hook":
                case "transition":
                    i[t] || (i[t] = {}), i[t] = ve({}, arguments[n][t], i[t]);
                    break;
                case "slot":
                case "key":
                case "ref":
                case "tag":
                case "show":
                case "keepAlive":
                default:
                    i[t] || (i[t] = arguments[n][t])
            }
        return i
    }
    var ke = {
            name: "",
            enterClass: "",
            enterActiveClass: "",
            enterToClass: "show",
            leaveClass: "show",
            leaveActiveClass: "",
            leaveToClass: ""
        },
        Ce = s({}, ke, {
            enterActiveClass: "fade",
            leaveActiveClass: "fade"
        }),
        xe = t.extend({
            name: "BVTransition",
            functional: !0,
            props: {
                noFade: {
                    type: Boolean,
                    default: !1
                },
                appear: {
                    type: Boolean,
                    default: !1
                },
                mode: {
                    type: String
                },
                transProps: {
                    type: Object,
                    default: null
                }
            },
            render: function (t, e) {
                var i = e.children,
                    n = e.data,
                    r = (e.listeners, e.props),
                    o = r.transProps;
                return F(o) || (o = r.noFade ? ke : Ce, r.appear && (o = s({}, o, {
                    appear: !0,
                    appearClass: o.enterClass,
                    appearActiveClass: o.enterActiveClass,
                    appearToClass: o.enterToClass
                }))), t("transition", Be(n, {
                    props: o = s({
                        mode: r.mode
                    }, o, {
                        css: !0
                    })
                }), i)
            }
        }),
        $e = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (t = B(t).filter(dt)).some((function (t) {
                return e[t] || i[t]
            }))
        },
        _e = function (t) {
            var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            t = B(t).filter(dt);
            for (var o = 0; o < t.length && !e; o++) {
                var a = t[o];
                e = n[a] || r[a]
            }
            return it(e) ? e(i) : e
        },
        Pe = {
            methods: {
                hasNormalizedSlot: function (t) {
                    return $e(t, this.$scopedSlots, this.$slots)
                },
                normalizeSlot: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = _e(t, e, this.$scopedSlots, this.$slots);
                    return i ? B(i) : i
                }
            }
        },
        Oe = "BButtonClose",
        Ie = {
            content: {
                type: String,
                default: function () {
                    return Et(Oe, "content")
                }
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            ariaLabel: {
                type: String,
                default: function () {
                    return Et(Oe, "ariaLabel")
                }
            },
            textVariant: {
                type: String,
                default: function () {
                    return Et(Oe, "textVariant")
                }
            }
        },
        Ee = t.extend({
            name: Oe,
            functional: !0,
            props: Ie,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = (e.listeners, e.slots),
                    a = e.scopedSlots,
                    s = r(),
                    l = a || {},
                    u = {
                        staticClass: "close",
                        class: o({}, "text-".concat(i.textVariant), i.textVariant),
                        attrs: {
                            type: "button",
                            disabled: i.disabled,
                            "aria-label": i.ariaLabel ? String(i.ariaLabel) : null
                        },
                        on: {
                            click: function (t) {
                                i.disabled && st(t) && (t.stopPropagation(), t.preventDefault())
                            }
                        }
                    };
                return $e("default", l, s) || (u.domProps = {
                    innerHTML: i.content
                }), t("button", Be(n, u), _e("default", {}, l, s))
            }
        }),
        Fe = function (t) {
            return "" === t || nt(t) ? 0 : (t = pe(t)) > 0 ? t : 0
        },
        Ve = function (t) {
            return "" === t || !0 === t || !(pe(t) < 1) && !!t
        },
        Ae = function (t) {
            return !isNaN(pe(t))
        },
        De = Bt({
            components: {
                BAlert: t.extend({
                    name: "BAlert",
                    mixins: [Pe],
                    model: {
                        prop: "show",
                        event: "input"
                    },
                    props: {
                        variant: {
                            type: String,
                            default: function () {
                                return Et("BAlert", "variant")
                            }
                        },
                        dismissible: {
                            type: Boolean,
                            default: !1
                        },
                        dismissLabel: {
                            type: String,
                            default: function () {
                                return Et("BAlert", "dismissLabel")
                            }
                        },
                        show: {
                            type: [Boolean, Number, String],
                            default: !1
                        },
                        fade: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            countDownTimerId: null,
                            countDown: 0,
                            localShow: Ve(this.show)
                        }
                    },
                    watch: {
                        show: function (t) {
                            this.countDown = Fe(t), this.localShow = Ve(t)
                        },
                        countDown: function (t) {
                            var e = this;
                            this.clearTimer(), Ae(this.show) && (this.$emit("dismiss-count-down", t), this.show !== t && this.$emit("input", t), t > 0 ? (this.localShow = !0, this.countDownTimerId = setTimeout((function () {
                                e.countDown--
                            }), 1e3)) : this.$nextTick((function () {
                                zt((function () {
                                    e.localShow = !1
                                }))
                            })))
                        },
                        localShow: function (t) {
                            t || !this.dismissible && !Ae(this.show) || this.$emit("dismissed"), Ae(this.show) || this.show === t || this.$emit("input", t)
                        }
                    },
                    created: function () {
                        this.countDown = Fe(this.show), this.localShow = Ve(this.show)
                    },
                    mounted: function () {
                        this.countDown = Fe(this.show), this.localShow = Ve(this.show)
                    },
                    beforeDestroy: function () {
                        this.clearTimer()
                    },
                    methods: {
                        dismiss: function () {
                            this.clearTimer(), this.countDown = 0, this.localShow = !1
                        },
                        clearTimer: function () {
                            this.countDownTimerId && (clearInterval(this.countDownTimerId), this.countDownTimerId = null)
                        }
                    },
                    render: function (t) {
                        var e;
                        if (this.localShow) {
                            var i = t();
                            this.dismissible && (i = t(Ee, {
                                attrs: {
                                    "aria-label": this.dismissLabel
                                },
                                on: {
                                    click: this.dismiss
                                }
                            }, [this.normalizeSlot("dismiss")])), e = [e = t("div", {
                                key: this._uid,
                                staticClass: "alert",
                                class: o({
                                    "alert-dismissible": this.dismissible
                                }, "alert-".concat(this.variant), this.variant),
                                attrs: {
                                    role: "alert",
                                    "aria-live": "polite",
                                    "aria-atomic": !0
                                }
                            }, [i, this.normalizeSlot("default")])]
                        }
                        return t(xe, {
                            props: {
                                noFade: !this.fade
                            }
                        }, e)
                    }
                })
            }
        }),
        Ne = function (t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dt;
            return (T(t) ? t.slice() : O(t)).reduce((function (t, n) {
                return t[i(n)] = e[n], t
            }), {})
        },
        Re = /^\s+/,
        Le = /[-/\\^$*+?.()|[\]{}]/g,
        He = /-(\w)/g,
        ze = /\B([A-Z])/g,
        Me = function (t) {
            return t.replace(ze, "-$1").toLowerCase()
        },
        je = function (t) {
            return (t = Me(t).replace(He, (function (t, e) {
                return e ? e.toUpperCase() : ""
            }))).charAt(0).toUpperCase() + t.slice(1)
        },
        Ge = function (t) {
            return (t = rt(t) ? t.trim() : String(t)).charAt(0).toUpperCase() + t.slice(1)
        },
        We = function (t) {
            return t.replace(Le, "\\$&")
        },
        Ue = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return et(t) ? "" : T(t) || F(t) && t.toString === Object.prototype.toString ? JSON.stringify(t, null, e) : String(t)
        },
        qe = function (t) {
            return Ue(t).trim()
        },
        Ke = function (t) {
            return Ue(t).toLowerCase()
        },
        Xe = /%2C/g,
        Ye = /[!'()*]/g,
        Ze = /\+/g,
        Je = /^(\?|#|&)/,
        Qe = function (t) {
            return "%" + t.charCodeAt(0).toString(16)
        },
        ti = function (t) {
            return encodeURIComponent(Ue(t)).replace(Ye, Qe).replace(Xe, ",")
        },
        ei = decodeURIComponent,
        ii = function (t) {
            if (!F(t)) return "";
            var e = O(t).map((function (e) {
                var i = t[e];
                return Q(i) ? "" : tt(i) ? ti(e) : T(i) ? i.reduce((function (t, i) {
                    return tt(i) ? t.push(ti(e)) : Q(i) || t.push(ti(e) + "=" + ti(i)), t
                }), []).join("&") : ti(e) + "=" + ti(i)
            })).filter((function (t) {
                return t.length > 0
            })).join("&");
            return e ? "?".concat(e) : ""
        },
        ni = function (t) {
            var e = {};
            return (t = Ue(t).trim().replace(Je, "")) ? (t.split("&").forEach((function (t) {
                var i = t.replace(Ze, " ").split("="),
                    n = ei(i.shift()),
                    r = i.length > 0 ? ei(i.join("=")) : null;
                Q(e[n]) ? e[n] = r : T(e[n]) ? e[n].push(r) : e[n] = [e[n], r]
            })), e) : e
        },
        ri = function (t) {
            return "a" !== Ue(t).toLowerCase()
        },
        oi = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.href,
                i = t.to,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "a",
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#",
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/";
            if (ri(n)) return null;
            if (e) return e;
            if (i) {
                if (rt(i)) return i || o;
                if (F(i) && (i.path || i.query || i.hash)) {
                    var a = Ue(i.path),
                        s = ii(i.query),
                        l = Ue(i.hash);
                    return l = l && "#" !== l.charAt(0) ? "#".concat(l) : l, "".concat(a).concat(s).concat(l) || o
                }
            }
            return r
        },
        ai = function () {
            return {
                href: {
                    type: String,
                    default: null
                },
                rel: {
                    type: String,
                    default: null
                },
                target: {
                    type: String,
                    default: "_self"
                },
                active: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                to: {
                    type: [String, Object],
                    default: null
                },
                append: {
                    type: Boolean,
                    default: !1
                },
                replace: {
                    type: Boolean,
                    default: !1
                },
                event: {
                    type: [String, Array],
                    default: "click"
                },
                activeClass: {
                    type: String
                },
                exact: {
                    type: Boolean,
                    default: !1
                },
                exactActiveClass: {
                    type: String
                },
                routerTag: {
                    type: String,
                    default: "a"
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            }
        },
        si = t.extend({
            name: "BLink",
            mixins: [Pe],
            inheritAttrs: !1,
            props: ai(),
            computed: {
                computedTag: function () {
                    return function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.to,
                            i = t.disabled,
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return n.$router && e && !i ? n.$nuxt ? "nuxt-link" : "router-link" : "a"
                    }({
                        to: this.to,
                        disabled: this.disabled
                    }, this)
                },
                isRouterLink: function () {
                    return ri(this.computedTag)
                },
                computedRel: function () {
                    return function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.target,
                            i = t.rel;
                        return "_blank" === e && tt(i) ? "noopener" : i || null
                    }({
                        target: this.target,
                        rel: this.rel
                    })
                },
                computedHref: function () {
                    return oi({
                        to: this.to,
                        href: this.href
                    }, this.computedTag)
                },
                computedProps: function () {
                    return this.isRouterLink ? s({}, this.$props, {
                        tag: this.routerTag
                    }) : {}
                }
            },
            methods: {
                onClick: function (t) {
                    var e = arguments,
                        i = st(t),
                        n = this.isRouterLink,
                        r = this.$listeners.click;
                    i && this.disabled ? (t.stopPropagation(), t.stopImmediatePropagation()) : (n && t.currentTarget.__vue__ && t.currentTarget.__vue__.$emit("click", t), B(r).filter((function (t) {
                        return it(t)
                    })).forEach((function (t) {
                        t.apply(void 0, v(e))
                    })), this.$root.$emit("clicked::link", t)), i && (this.disabled || !n && "#" === this.computedHref) && t.preventDefault()
                },
                focus: function () {
                    this.$el && this.$el.focus && this.$el.focus()
                },
                blur: function () {
                    this.$el && this.$el.blur && this.$el.blur()
                }
            },
            render: function (t) {
                var e = this.computedTag,
                    i = this.computedRel,
                    n = this.computedHref,
                    r = this.isRouterLink,
                    o = {
                        class: {
                            active: this.active, disabled: this.disabled
                        },
                        attrs: s({}, this.$attrs, {
                            rel: i,
                            target: this.target,
                            tabindex: this.disabled ? "-1" : Q(this.$attrs.tabindex) ? null : this.$attrs.tabindex,
                            "aria-disabled": this.disabled ? "true" : null
                        }),
                        props: this.computedProps
                    };
                return o[r ? "nativeOn" : "on"] = s({}, this.$listeners, {
                    click: this.onClick
                }), n ? o.attrs.href = n : delete o.props.href, t(e, o, this.normalizeSlot("default"))
            }
        }),
        li = ai();
    delete li.href.default, delete li.to.default;
    var ui = s({}, li, {
            tag: {
                type: String,
                default: "span"
            },
            variant: {
                type: String,
                default: function () {
                    return Et("BBadge", "variant")
                }
            },
            pill: {
                type: Boolean,
                default: !1
            }
        }),
        ci = t.extend({
            name: "BBadge",
            functional: !0,
            props: ui,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = i.href || i.to;
                return t(o ? si : i.tag, Be(n, {
                    staticClass: "badge",
                    class: [i.variant ? "badge-".concat(i.variant) : "badge-secondary", {
                        "badge-pill": i.pill,
                        active: i.active,
                        disabled: i.disabled
                    }],
                    props: o ? Ne(li, i) : {}
                }), r)
            }
        }),
        di = Bt({
            components: {
                BBadge: ci
            }
        }),
        hi = /(<([^>]+)>)/gi,
        fi = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return String(t).replace(hi, "")
        },
        pi = function (t, e) {
            return t ? {
                innerHTML: t
            } : e ? {
                textContent: e
            } : {}
        },
        mi = s({}, ai(), {
            text: {
                type: String,
                default: null
            },
            html: {
                type: String,
                default: null
            },
            ariaCurrent: {
                type: String,
                default: "location"
            }
        }),
        gi = t.extend({
            name: "BBreadcrumbLink",
            functional: !0,
            props: mi,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = i.active ? "span" : si,
                    a = {
                        props: Ne(mi, i)
                    };
                return i.active && (a.attrs = {
                    "aria-current": i.ariaCurrent
                }), r || (a.domProps = pi(i.html, i.text)), t(o, Be(n, a), r)
            }
        }),
        vi = t.extend({
            name: "BBreadcrumbItem",
            functional: !0,
            props: mi,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t("li", Be(n, {
                    staticClass: "breadcrumb-item",
                    class: {
                        active: i.active
                    }
                }), [t(gi, {
                    props: i
                }, r)])
            }
        }),
        bi = {
            items: {
                type: Array,
                default: null
            }
        },
        yi = Bt({
            components: {
                BBreadcrumb: t.extend({
                    name: "BBreadcrumb",
                    functional: !0,
                    props: bi,
                    render: function (t, e) {
                        var i = e.props,
                            n = e.data,
                            r = e.children;
                        if (T(i.items)) {
                            var o = !1;
                            r = i.items.map((function (e, n) {
                                E(e) || (e = {
                                    text: Ue(e)
                                });
                                var r = e.active;
                                return r && (o = !0), r || o || (r = n + 1 === i.items.length), t(vi, {
                                    props: s({}, e, {
                                        active: r
                                    })
                                })
                            }))
                        }
                        return t("ol", Be(n, {
                            staticClass: "breadcrumb"
                        }), r)
                    }
                }),
                BBreadcrumbItem: vi,
                BBreadcrumbLink: gi
            }
        }),
        Si = {
            block: {
                type: Boolean,
                default: !1
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            size: {
                type: String,
                default: function () {
                    return Et("BButton", "size")
                }
            },
            variant: {
                type: String,
                default: function () {
                    return Et("BButton", "variant")
                }
            },
            type: {
                type: String,
                default: "button"
            },
            tag: {
                type: String,
                default: "button"
            },
            pill: {
                type: Boolean,
                default: !1
            },
            squared: {
                type: Boolean,
                default: !1
            },
            pressed: {
                type: Boolean,
                default: null
            }
        },
        Ti = ai();
    delete Ti.href.default, delete Ti.to.default;
    var wi = O(Ti),
        Bi = s({}, Ti, {}, Si),
        ki = function (t, e) {
            return Ue(t).toLowerCase() === Ue(e).toLowerCase()
        },
        Ci = function (t) {
            "focusin" === t.type ? ie(t.target, "focus") : "focusout" === t.type && ne(t.target, "focus")
        },
        xi = function (t) {
            return t.href || t.to || ki(t.tag, "a")
        },
        $i = function (t) {
            return nt(t.pressed)
        },
        _i = function (t) {
            return !(xi(t) || t.tag && !ki(t.tag, "button"))
        },
        Pi = function (t) {
            var e;
            return ["btn-".concat(t.variant || Et("BButton", "variant")), (e = {}, o(e, "btn-".concat(t.size), t.size), o(e, "btn-block", t.block), o(e, "rounded-pill", t.pill), o(e, "rounded-0", t.squared && !t.pill), o(e, "disabled", t.disabled), o(e, "active", t.pressed), e)]
        },
        Oi = function (t) {
            return xi(t) ? Ne(wi, t) : null
        },
        Ii = function (t, e) {
            var i = _i(t),
                n = xi(t),
                r = $i(t),
                o = function (t) {
                    return !xi(t) && !_i(t)
                }(t),
                a = e.attrs && e.attrs.role ? e.attrs.role : null,
                s = e.attrs ? e.attrs.tabindex : null;
            return o && (s = "0"), {
                type: i && !n ? t.type : null,
                disabled: i ? t.disabled : null,
                role: o ? "button" : a,
                "aria-disabled": o ? String(t.disabled) : null,
                "aria-pressed": r ? String(t.pressed) : null,
                autocomplete: r ? "off" : null,
                tabindex: t.disabled && !i ? "-1" : s
            }
        },
        Ei = t.extend({
            name: "BButton",
            functional: !0,
            props: Bi,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.listeners,
                    o = e.children,
                    a = $i(i),
                    s = xi(i),
                    l = {
                        click: function (t) {
                            i.disabled && st(t) ? (t.stopPropagation(), t.preventDefault()) : a && r && r["update:pressed"] && B(r["update:pressed"]).forEach((function (t) {
                                it(t) && t(!i.pressed)
                            }))
                        }
                    };
                a && (l.focusin = Ci, l.focusout = Ci);
                var u = {
                    staticClass: "btn",
                    class: Pi(i),
                    props: Oi(i),
                    attrs: Ii(i, n),
                    on: l
                };
                return t(s ? si : i.tag, Be(n, u), o)
            }
        }),
        Fi = Bt({
            components: {
                BButton: Ei,
                BBtn: Ei,
                BButtonClose: Ee,
                BBtnClose: Ee
            }
        }),
        Vi = {
            vertical: {
                type: Boolean,
                default: !1
            },
            size: {
                type: String,
                default: function () {
                    return Et("BButton", "size")
                }
            },
            tag: {
                type: String,
                default: "div"
            },
            ariaRole: {
                type: String,
                default: "group"
            }
        },
        Ai = t.extend({
            name: "BButtonGroup",
            functional: !0,
            props: Vi,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.tag, Be(n, {
                    class: o({
                        "btn-group": !i.vertical,
                        "btn-group-vertical": i.vertical
                    }, "btn-group-".concat(i.size), i.size),
                    attrs: {
                        role: i.ariaRole
                    }
                }), r)
            }
        }),
        Di = Bt({
            components: {
                BButtonGroup: Ai,
                BBtnGroup: Ai
            }
        }),
        Ni = _({
            SPACE: 32,
            ENTER: 13,
            ESC: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PAGEUP: 33,
            PAGEDOWN: 34,
            HOME: 36,
            END: 35,
            TAB: 9,
            SHIFT: 16,
            CTRL: 17,
            BACKSPACE: 8,
            ALT: 18,
            PAUSE: 19,
            BREAK: 19,
            INSERT: 45,
            INS: 45,
            DELETE: 46
        }),
        Ri = [".btn:not(.disabled):not([disabled]):not(.dropdown-item)", ".form-control:not(.disabled):not([disabled])", "select:not(.disabled):not([disabled])", 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(","),
        Li = t.extend({
            name: "BButtonToolbar",
            mixins: [Pe],
            props: {
                justify: {
                    type: Boolean,
                    default: !1
                },
                keyNav: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function () {
                this.keyNav && this.getItems()
            },
            methods: {
                onFocusin: function (t) {
                    t.target === this.$el && (t.preventDefault(), t.stopPropagation(), this.focusFirst(t))
                },
                stop: function (t) {
                    t.preventDefault(), t.stopPropagation()
                },
                onKeydown: function (t) {
                    if (this.keyNav) {
                        var e = t.keyCode,
                            i = t.shiftKey;
                        e === Ni.UP || e === Ni.LEFT ? (this.stop(t), i ? this.focusFirst(t) : this.focusPrev(t)) : e !== Ni.DOWN && e !== Ni.RIGHT || (this.stop(t), i ? this.focusLast(t) : this.focusNext(t))
                    }
                },
                setItemFocus: function (t) {
                    t && t.focus && t.focus()
                },
                focusFirst: function (t) {
                    var e = this.getItems();
                    this.setItemFocus(e[0])
                },
                focusPrev: function (t) {
                    var e = this.getItems(),
                        i = e.indexOf(t.target);
                    i > -1 && (e = e.slice(0, i).reverse(), this.setItemFocus(e[0]))
                },
                focusNext: function (t) {
                    var e = this.getItems(),
                        i = e.indexOf(t.target);
                    i > -1 && (e = e.slice(i + 1), this.setItemFocus(e[0]))
                },
                focusLast: function (t) {
                    var e = this.getItems().reverse();
                    this.setItemFocus(e[0])
                },
                getItems: function () {
                    var t = Yt(Ri, this.$el);
                    return t.forEach((function (t) {
                        t.tabIndex = -1
                    })), t.filter((function (t) {
                        return qt(t)
                    }))
                }
            },
            render: function (t) {
                return t("div", {
                    staticClass: "btn-toolbar",
                    class: {
                        "justify-content-between": this.justify
                    },
                    attrs: {
                        role: "toolbar",
                        tabindex: this.keyNav ? "0" : null
                    },
                    on: this.keyNav ? {
                        focusin: this.onFocusin,
                        keydown: this.onKeydown
                    } : {}
                }, [this.normalizeSlot("default")])
            }
        }),
        Hi = Bt({
            components: {
                BButtonToolbar: Li,
                BBtnToolbar: Li
            }
        }),
        zi = function (t, e) {
            return t + Ge(e)
        },
        Mi = function (t, e) {
            return i = e.replace(t, ""), (i = rt(i) ? i.trim() : String(i)).charAt(0).toLowerCase() + i.slice(1);
            var i
        },
        ji = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dt;
            if (T(t)) return t.map(e);
            var i = {};
            for (var n in t) t.hasOwnProperty(n) && (i[e(n)] = E(t[n]) ? V(t[n]) : t[n]);
            return i
        },
        Gi = {
            props: {
                tag: {
                    type: String,
                    default: "div"
                },
                bgVariant: {
                    type: String,
                    default: null
                },
                borderVariant: {
                    type: String,
                    default: null
                },
                textVariant: {
                    type: String,
                    default: null
                }
            }
        },
        Wi = {
            title: {
                type: String,
                default: ""
            },
            titleTag: {
                type: String,
                default: "h4"
            }
        },
        Ui = t.extend({
            name: "BCardTitle",
            functional: !0,
            props: Wi,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.titleTag, Be(n, {
                    staticClass: "card-title"
                }), r || i.title)
            }
        }),
        qi = {
            subTitle: {
                type: String,
                default: ""
            },
            subTitleTag: {
                type: String,
                default: "h6"
            },
            subTitleTextVariant: {
                type: String,
                default: function () {
                    return Et("BCardSubTitle", "subTitleTextVariant")
                }
            }
        },
        Ki = t.extend({
            name: "BCardSubTitle",
            functional: !0,
            props: qi,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.subTitleTag, Be(n, {
                    staticClass: "card-subtitle",
                    class: [i.subTitleTextVariant ? "text-".concat(i.subTitleTextVariant) : null]
                }), r || i.subTitle)
            }
        }),
        Xi = s({}, ji(Gi.props, zi.bind(null, "body")), {
            bodyClass: {
                type: [String, Object, Array],
                default: null
            }
        }, Wi, {}, qi, {
            overlay: {
                type: Boolean,
                default: !1
            }
        }),
        Yi = t.extend({
            name: "BCardBody",
            functional: !0,
            props: Xi,
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = e.children,
                    s = t(),
                    l = t(),
                    u = a || [t()];
                return n.title && (s = t(Ui, {
                    props: Ne(Wi, n)
                })), n.subTitle && (l = t(Ki, {
                    props: Ne(qi, n),
                    class: ["mb-2"]
                })), t(n.bodyTag, Be(r, {
                    staticClass: "card-body",
                    class: [(i = {
                        "card-img-overlay": n.overlay
                    }, o(i, "bg-".concat(n.bodyBgVariant), n.bodyBgVariant), o(i, "border-".concat(n.bodyBorderVariant), n.bodyBorderVariant), o(i, "text-".concat(n.bodyTextVariant), n.bodyTextVariant), i), n.bodyClass || {}]
                }), [s, l].concat(v(u)))
            }
        }),
        Zi = s({}, ji(Gi.props, zi.bind(null, "header")), {
            header: {
                type: String,
                default: null
            },
            headerHtml: {
                type: String,
                default: null
            },
            headerClass: {
                type: [String, Object, Array],
                default: null
            }
        }),
        Ji = t.extend({
            name: "BCardHeader",
            functional: !0,
            props: Zi,
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = e.children;
                return t(n.headerTag, Be(r, {
                    staticClass: "card-header",
                    class: [n.headerClass, (i = {}, o(i, "bg-".concat(n.headerBgVariant), n.headerBgVariant), o(i, "border-".concat(n.headerBorderVariant), n.headerBorderVariant), o(i, "text-".concat(n.headerTextVariant), n.headerTextVariant), i)]
                }), a || [t("div", {
                    domProps: pi(n.headerHtml, n.header)
                })])
            }
        }),
        Qi = s({}, ji(Gi.props, zi.bind(null, "footer")), {
            footer: {
                type: String,
                default: null
            },
            footerHtml: {
                type: String,
                default: null
            },
            footerClass: {
                type: [String, Object, Array],
                default: null
            }
        }),
        tn = t.extend({
            name: "BCardFooter",
            functional: !0,
            props: Qi,
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = e.children;
                return t(n.footerTag, Be(r, {
                    staticClass: "card-footer",
                    class: [n.footerClass, (i = {}, o(i, "bg-".concat(n.footerBgVariant), n.footerBgVariant), o(i, "border-".concat(n.footerBorderVariant), n.footerBorderVariant), o(i, "text-".concat(n.footerTextVariant), n.footerTextVariant), i)]
                }), a || [t("div", {
                    domProps: pi(n.footerHtml, n.footer)
                })])
            }
        }),
        en = {
            src: {
                type: String,
                default: null,
                required: !0
            },
            alt: {
                type: String,
                default: null
            },
            top: {
                type: Boolean,
                default: !1
            },
            bottom: {
                type: Boolean,
                default: !1
            },
            start: {
                type: Boolean,
                default: !1
            },
            left: {
                type: Boolean,
                default: !1
            },
            end: {
                type: Boolean,
                default: !1
            },
            right: {
                type: Boolean,
                default: !1
            },
            height: {
                type: [Number, String],
                default: null
            },
            width: {
                type: [Number, String],
                default: null
            }
        },
        nn = t.extend({
            name: "BCardImg",
            functional: !0,
            props: en,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = "card-img";
                return i.top ? r += "-top" : i.right || i.end ? r += "-right" : i.bottom ? r += "-bottom" : (i.left || i.start) && (r += "-left"), t("img", Be(n, {
                    class: [r],
                    attrs: {
                        src: i.src,
                        alt: i.alt,
                        height: i.height,
                        width: i.width
                    }
                }))
            }
        }),
        rn = ji(en, zi.bind(null, "img"));
    rn.imgSrc.required = !1;
    var on = s({}, Xi, {}, Zi, {}, Qi, {}, rn, {}, ji(Gi.props), {
            align: {
                type: String,
                default: null
            },
            noBody: {
                type: Boolean,
                default: !1
            }
        }),
        an = t.extend({
            name: "BCard",
            functional: !0,
            props: on,
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = e.slots,
                    s = e.scopedSlots,
                    l = a(),
                    u = s || {},
                    c = t(),
                    d = t(),
                    h = t(),
                    f = t(),
                    p = t();
                if (n.imgSrc) {
                    var m = t(nn, {
                        props: Ne(rn, n, Mi.bind(null, "img"))
                    });
                    n.imgBottom ? p = m : c = m
                }
                return (n.header || $e("header", u, l)) && (d = t(Ji, {
                    props: Ne(Zi, n)
                }, _e("header", {}, u, l))), h = _e("default", {}, u, l) || [], n.noBody || (h = [t(Yi, {
                    props: Ne(Xi, n)
                }, v(h))]), (n.footer || $e("footer", u, l)) && (f = t(tn, {
                    props: Ne(Qi, n)
                }, _e("footer", {}, u, l))), t(n.tag, Be(r, {
                    staticClass: "card",
                    class: (i = {
                        "flex-row": n.imgLeft || n.imgStart,
                        "flex-row-reverse": (n.imgRight || n.imgEnd) && !(n.imgLeft || n.imgStart)
                    }, o(i, "text-".concat(n.align), n.align), o(i, "bg-".concat(n.bgVariant), n.bgVariant), o(i, "border-".concat(n.borderVariant), n.borderVariant), o(i, "text-".concat(n.textVariant), n.textVariant), i)
                }), [c, d].concat(v(h), [f, p]))
            }
        }),
        sn = function (t, e) {
            if (t.length !== e.length) return !1;
            for (var i = !0, n = 0; i && n < t.length; n++) i = ln(t[n], e[n]);
            return i
        },
        ln = function t(e, i) {
            if (e === i) return !0;
            var n = at(e),
                r = at(i);
            if (n || r) return !(!n || !r) && e.getTime() === i.getTime();
            if (n = T(e), r = T(i), n || r) return !(!n || !r) && sn(e, i);
            if (n = E(e), r = E(i), n || r) {
                if (!n || !r) return !1;
                if (O(e).length !== O(i).length) return !1;
                for (var o in e) {
                    var a = e.hasOwnProperty(o),
                        s = i.hasOwnProperty(o);
                    if (a && !s || !a && s || !t(e[o], i[o])) return !1
                }
            }
            return String(e) === String(i)
        },
        un = "__bv__visibility_observer",
        cn = /^\d+$/,
        dn = function () {
            function t(e, n, r) {
                i(this, t), this.el = e, this.callback = n.callback, this.margin = n.margin || 0, this.once = n.once || !1, this.observer = null, this.visible = void 0, this.doneOnce = !1, this.createObserver(r)
            }
            return r(t, [{
                key: "createObserver",
                value: function (t) {
                    var e = this;
                    if (this.observer && this.stop(), !this.doneOnce && it(this.callback)) {
                        try {
                            this.observer = new IntersectionObserver(this.handler.bind(this), {
                                root: null,
                                rootMargin: this.margin,
                                threshold: 0
                            })
                        } catch (t) {
                            return this.doneOnce = !0, this.observer = void 0, void this.callback(null)
                        }
                        t.context.$nextTick((function () {
                            zt((function () {
                                e.observer && e.observer.observe(e.el)
                            }))
                        }))
                    }
                }
            }, {
                key: "handler",
                value: function (t) {
                    var e = t ? t[0] : {},
                        i = Boolean(e.isIntersecting || e.intersectionRatio > 0);
                    i !== this.visible && (this.visible = i, this.callback(i), this.once && this.visible && (this.doneOnce = !0, this.stop()))
                }
            }, {
                key: "stop",
                value: function () {
                    var t = this.observer;
                    t && t.disconnect && t.disconnect(), this.observer = null
                }
            }]), t
        }(),
        hn = function (t) {
            var e = t[un];
            e && e.stop && e.stop(), delete t[un]
        },
        fn = function (t, e, i) {
            var n = e.value,
                r = e.modifiers,
                o = {
                    margin: "0px",
                    once: !1,
                    callback: n
                };
            O(r).forEach((function (t) {
                cn.test(t) ? o.margin = "".concat(t, "px") : "once" === t.toLowerCase() && (o.once = !0)
            })), hn(t), t[un] = new dn(t, o, i), t[un]._prevModifiers = V(r)
        },
        pn = {
            bind: fn,
            componentUpdated: function (t, e, i) {
                var n = e.value,
                    r = e.oldValue,
                    o = e.modifiers;
                o = V(o), !t || n === r && t[un] && ln(o, t[un]._prevModifiers) || fn(t, {
                    value: n,
                    modifiers: o
                }, i)
            },
            unbind: function (t) {
                hn(t)
            }
        },
        mn = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',
        gn = {
            src: {
                type: String,
                default: null
            },
            srcset: {
                type: [String, Array],
                default: null
            },
            sizes: {
                type: [String, Array],
                default: null
            },
            alt: {
                type: String,
                default: null
            },
            width: {
                type: [Number, String],
                default: null
            },
            height: {
                type: [Number, String],
                default: null
            },
            block: {
                type: Boolean,
                default: !1
            },
            fluid: {
                type: Boolean,
                default: !1
            },
            fluidGrow: {
                type: Boolean,
                default: !1
            },
            rounded: {
                type: [Boolean, String],
                default: !1
            },
            thumbnail: {
                type: Boolean,
                default: !1
            },
            left: {
                type: Boolean,
                default: !1
            },
            right: {
                type: Boolean,
                default: !1
            },
            center: {
                type: Boolean,
                default: !1
            },
            blank: {
                type: Boolean,
                default: !1
            },
            blankColor: {
                type: String,
                default: function () {
                    return Et("BImg", "blankColor")
                }
            }
        },
        vn = t.extend({
            name: "BImg",
            functional: !0,
            props: gn,
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = n.src,
                    s = pe(n.width) || null,
                    l = pe(n.height) || null,
                    u = null,
                    c = n.block,
                    d = B(n.srcset).filter(dt).join(","),
                    h = B(n.sizes).filter(dt).join(",");
                return n.blank && (!l && s ? l = s : !s && l && (s = l), s || l || (s = 1, l = 1), a = function (t, e, i) {
                    var n = encodeURIComponent(mn.replace("%{w}", Ue(t)).replace("%{h}", Ue(e)).replace("%{f}", i));
                    return "data:image/svg+xml;charset=UTF-8,".concat(n)
                }(s, l, n.blankColor || "transparent"), d = null, h = null), n.left ? u = "float-left" : n.right ? u = "float-right" : n.center && (u = "mx-auto", c = !0), t("img", Be(r, {
                    attrs: {
                        src: a,
                        alt: n.alt,
                        width: s ? Ue(s) : null,
                        height: l ? Ue(l) : null,
                        srcset: d || null,
                        sizes: h || null
                    },
                    class: (i = {
                        "img-thumbnail": n.thumbnail,
                        "img-fluid": n.fluid || n.fluidGrow,
                        "w-100": n.fluidGrow,
                        rounded: "" === n.rounded || !0 === n.rounded
                    }, o(i, "rounded-".concat(n.rounded), rt(n.rounded) && "" !== n.rounded), o(i, u, u), o(i, "d-block", c), i)
                }))
            }
        }),
        bn = {
            src: {
                type: String,
                default: null,
                required: !0
            },
            srcset: {
                type: [String, Array],
                default: null
            },
            sizes: {
                type: [String, Array],
                default: null
            },
            alt: {
                type: String,
                default: null
            },
            width: {
                type: [Number, String],
                default: null
            },
            height: {
                type: [Number, String],
                default: null
            },
            blankSrc: {
                type: String,
                default: null
            },
            blankColor: {
                type: String,
                default: function () {
                    return Et("BImgLazy", "blankColor")
                }
            },
            blankWidth: {
                type: [Number, String],
                default: null
            },
            blankHeight: {
                type: [Number, String],
                default: null
            },
            show: {
                type: Boolean,
                default: !1
            },
            fluid: {
                type: Boolean,
                default: !1
            },
            fluidGrow: {
                type: Boolean,
                default: !1
            },
            block: {
                type: Boolean,
                default: !1
            },
            thumbnail: {
                type: Boolean,
                default: !1
            },
            rounded: {
                type: [Boolean, String],
                default: !1
            },
            left: {
                type: Boolean,
                default: !1
            },
            right: {
                type: Boolean,
                default: !1
            },
            center: {
                type: Boolean,
                default: !1
            },
            offset: {
                type: [Number, String],
                default: 360
            }
        },
        yn = t.extend({
            name: "BImgLazy",
            directives: {
                bVisible: pn
            },
            props: bn,
            data: function () {
                return {
                    isShown: this.show
                }
            },
            computed: {
                computedSrc: function () {
                    return !this.blankSrc || this.isShown ? this.src : this.blankSrc
                },
                computedBlank: function () {
                    return !(this.isShown || this.blankSrc)
                },
                computedWidth: function () {
                    return this.isShown ? this.width : this.blankWidth || this.width
                },
                computedHeight: function () {
                    return this.isShown ? this.height : this.blankHeight || this.height
                },
                computedSrcset: function () {
                    var t = B(this.srcset).filter(dt).join(",");
                    return !this.blankSrc || this.isShown ? t : null
                },
                computedSizes: function () {
                    var t = B(this.sizes).filter(dt).join(",");
                    return !this.blankSrc || this.isShown ? t : null
                }
            },
            watch: {
                show: function (t, e) {
                    if (t !== e) {
                        var i = !q || t;
                        this.isShown = i, i !== t && this.$nextTick(this.updateShowProp)
                    }
                },
                isShown: function (t, e) {
                    t !== e && this.updateShowProp()
                }
            },
            mounted: function () {
                this.isShown = !q || this.show
            },
            methods: {
                updateShowProp: function () {
                    this.$emit("update:show", this.isShown)
                },
                doShow: function (t) {
                    !t && null !== t || this.isShown || (this.isShown = !0)
                }
            },
            render: function (t) {
                var e, i = [];
                this.isShown || i.push({
                    name: "b-visible",
                    value: this.doShow,
                    modifiers: (e = {}, o(e, "".concat(pe(this.offset) || 0), !0), o(e, "once", !0), e)
                });
                return t(vn, {
                    directives: i,
                    props: {
                        src: this.computedSrc,
                        blank: this.computedBlank,
                        width: this.computedWidth,
                        height: this.computedHeight,
                        srcset: this.computedSrcset || null,
                        sizes: this.computedSizes || null,
                        alt: this.alt,
                        blankColor: this.blankColor,
                        fluid: this.fluid,
                        fluidGrow: this.fluidGrow,
                        block: this.block,
                        thumbnail: this.thumbnail,
                        rounded: this.rounded,
                        left: this.left,
                        right: this.right,
                        center: this.center
                    }
                })
            }
        }),
        Sn = s({}, A(bn, ["left", "right", "center", "block", "rounded", "thumbnail", "fluid", "fluidGrow"]), {
            top: {
                type: Boolean,
                default: !1
            },
            bottom: {
                type: Boolean,
                default: !1
            },
            start: {
                type: Boolean,
                default: !1
            },
            left: {
                type: Boolean,
                default: !1
            },
            end: {
                type: Boolean,
                default: !1
            },
            right: {
                type: Boolean,
                default: !1
            }
        }),
        Tn = {
            textTag: {
                type: String,
                default: "p"
            }
        },
        wn = {
            tag: {
                type: String,
                default: "div"
            },
            deck: {
                type: Boolean,
                default: !1
            },
            columns: {
                type: Boolean,
                default: !1
            }
        },
        Bn = Bt({
            components: {
                BCard: an,
                BCardHeader: Ji,
                BCardBody: Yi,
                BCardTitle: Ui,
                BCardSubTitle: Ki,
                BCardFooter: tn,
                BCardImg: nn,
                BCardImgLazy: t.extend({
                    name: "BCardImgLazy",
                    functional: !0,
                    props: Sn,
                    render: function (t, e) {
                        var i = e.props,
                            n = e.data,
                            r = "card-img";
                        i.top ? r += "-top" : i.right || i.end ? r += "-right" : i.bottom ? r += "-bottom" : (i.left || i.start) && (r += "-left");
                        var o = s({}, i, {
                            left: !1,
                            right: !1,
                            center: !1
                        });
                        return t(yn, Be(n, {
                            class: [r],
                            props: o
                        }))
                    }
                }),
                BCardText: t.extend({
                    name: "BCardText",
                    functional: !0,
                    props: Tn,
                    render: function (t, e) {
                        var i = e.props,
                            n = e.data,
                            r = e.children;
                        return t(i.textTag, Be(n, {
                            staticClass: "card-text"
                        }), r)
                    }
                }),
                BCardGroup: t.extend({
                    name: "BCardGroup",
                    functional: !0,
                    props: wn,
                    render: function (t, e) {
                        var i = e.props,
                            n = e.data,
                            r = e.children;
                        return t(i.tag, Be(n, {
                            class: i.deck ? "card-deck" : i.columns ? "card-columns" : "card-group"
                        }), r)
                    }
                })
            }
        }),
        kn = function () {},
        Cn = function (t, e, i) {
            if (t = t ? t.$el || t : null, !Ut(t)) return null;
            if (n = "observeDom", !H && (pt("".concat(n, ": Requires MutationObserver support.")), 1)) return null;
            var n, r = new Mt((function (t) {
                for (var i = !1, n = 0; n < t.length && !i; n++) {
                    var r = t[n],
                        o = r.type,
                        a = r.target;
                    "characterData" === o && a.nodeType === Node.TEXT_NODE ? i = !0 : "attributes" === o ? i = !0 : "childList" === o && (r.addedNodes.length > 0 || r.removedNodes.length > 0) && (i = !0)
                }
                i && e()
            }));
            return r.observe(t, s({
                childList: !0,
                subtree: !0
            }, i)), r
        },
        xn = {
            props: {
                id: {
                    type: String,
                    default: null
                }
            },
            data: function () {
                return {
                    localId_: null
                }
            },
            computed: {
                safeId: function () {
                    var t = this.id || this.localId_;
                    return function (e) {
                        return t ? (e = String(e || "").replace(/\s+/g, "_")) ? t + "_" + e : t : null
                    }
                }
            },
            mounted: function () {
                var t = this;
                this.$nextTick((function () {
                    t.localId_ = "__BVID__".concat(t._uid)
                }))
            }
        },
        $n = "BCarousel",
        _n = {
            next: {
                dirClass: "carousel-item-left",
                overlayClass: "carousel-item-next"
            },
            prev: {
                dirClass: "carousel-item-right",
                overlayClass: "carousel-item-prev"
            }
        },
        Pn = {
            TOUCH: "touch",
            PEN: "pen"
        },
        On = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend oTransitionEnd",
            transition: "transitionend"
        },
        In = {
            passive: !0,
            capture: !1
        },
        En = t.extend({
            name: $n,
            mixins: [xn, Pe],
            provide: function () {
                return {
                    bvCarousel: this
                }
            },
            model: {
                prop: "value",
                event: "input"
            },
            props: {
                labelPrev: {
                    type: String,
                    default: function () {
                        return Et($n, "labelPrev")
                    }
                },
                labelNext: {
                    type: String,
                    default: function () {
                        return Et($n, "labelNext")
                    }
                },
                labelGotoSlide: {
                    type: String,
                    default: function () {
                        return Et($n, "labelGotoSlide")
                    }
                },
                labelIndicators: {
                    type: String,
                    default: function () {
                        return Et($n, "labelIndicators")
                    }
                },
                interval: {
                    type: Number,
                    default: 5e3
                },
                indicators: {
                    type: Boolean,
                    default: !1
                },
                controls: {
                    type: Boolean,
                    default: !1
                },
                noAnimation: {
                    type: Boolean,
                    default: !1
                },
                fade: {
                    type: Boolean,
                    default: !1
                },
                noWrap: {
                    type: Boolean,
                    default: !1
                },
                noTouch: {
                    type: Boolean,
                    default: !1
                },
                noHoverPause: {
                    type: Boolean,
                    default: !1
                },
                imgWidth: {
                    type: [Number, String]
                },
                imgHeight: {
                    type: [Number, String]
                },
                background: {
                    type: String
                },
                value: {
                    type: Number,
                    default: 0
                }
            },
            data: function () {
                return {
                    index: this.value || 0,
                    isSliding: !1,
                    transitionEndEvent: null,
                    slides: [],
                    direction: null,
                    isPaused: !(pe(this.interval) > 0),
                    touchStartX: 0,
                    touchDeltaX: 0
                }
            },
            computed: {
                numSlides: function () {
                    return this.slides.length
                }
            },
            watch: {
                value: function (t, e) {
                    t !== e && this.setSlide(pe(t) || 0)
                },
                interval: function (t, e) {
                    t !== e && (t ? (this.pause(!0), this.start(!1)) : this.pause(!1))
                },
                isPaused: function (t, e) {
                    t !== e && this.$emit(t ? "paused" : "unpaused")
                },
                index: function (t, e) {
                    t === e || this.isSliding || this.doSlide(t, e)
                }
            },
            created: function () {
                this._intervalId = null, this._animationTimeout = null, this._touchTimeout = null, this.isPaused = !(pe(this.interval) > 0)
            },
            mounted: function () {
                this.transitionEndEvent = function (t) {
                    for (var e in On)
                        if (!Q(t.style[e])) return On[e];
                    return null
                }(this.$el) || null, this.updateSlides(), Cn(this.$refs.inner, this.updateSlides.bind(this), {
                    subtree: !1,
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["id"]
                })
            },
            beforeDestroy: function () {
                clearTimeout(this._animationTimeout), clearTimeout(this._touchTimeout), clearInterval(this._intervalId), this._intervalId = null, this._animationTimeout = null, this._touchTimeout = null
            },
            methods: {
                setSlide: function (t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (!(z && document.visibilityState && document.hidden)) {
                        var n = this.noWrap,
                            r = this.numSlides;
                        t = Math.floor(t), 0 !== r && (this.isSliding ? this.$once("sliding-end", (function () {
                            return e.setSlide(t, i)
                        })) : (this.direction = i, this.index = t >= r ? n ? r - 1 : 0 : t < 0 ? n ? 0 : r - 1 : t, n && this.index !== t && this.index !== this.value && this.$emit("input", this.index)))
                    }
                },
                prev: function () {
                    this.setSlide(this.index - 1, "prev")
                },
                next: function () {
                    this.setSlide(this.index + 1, "next")
                },
                pause: function (t) {
                    t || (this.isPaused = !0), this._intervalId && (clearInterval(this._intervalId), this._intervalId = null)
                },
                start: function (t) {
                    t || (this.isPaused = !1), this._intervalId && (clearInterval(this._intervalId), this._intervalId = null), this.interval && this.numSlides > 1 && (this._intervalId = setInterval(this.next, Math.max(1e3, this.interval)))
                },
                restart: function (t) {
                    this.$el.contains(document.activeElement) || this.start()
                },
                doSlide: function (t, e) {
                    var i = this,
                        n = Boolean(this.interval),
                        r = this.calcDirection(this.direction, e, t),
                        o = r.overlayClass,
                        a = r.dirClass,
                        s = this.slides[e],
                        l = this.slides[t];
                    if (s && l) {
                        if (this.isSliding = !0, n && this.pause(!1), this.$emit("sliding-start", t), this.$emit("input", this.index), this.noAnimation) ie(l, "active"), ne(s, "active"), this.isSliding = !1, this.$nextTick((function () {
                            return i.$emit("sliding-end", t)
                        }));
                        else {
                            ie(l, o), Xt(l), ie(s, a), ie(l, a);
                            var u = !1,
                                c = function e(n) {
                                    if (!u) {
                                        if (u = !0, i.transitionEndEvent) i.transitionEndEvent.split(/\s+/).forEach((function (t) {
                                            return Wt(s, t, e, In)
                                        }));
                                        i._animationTimeout = null, ne(l, a), ne(l, o), ie(l, "active"), ne(s, "active"), ne(s, a), ne(s, o), oe(s, "aria-current", "false"), oe(l, "aria-current", "true"), oe(s, "aria-hidden", "true"), oe(l, "aria-hidden", "false"), i.isSliding = !1, i.direction = null, i.$nextTick((function () {
                                            return i.$emit("sliding-end", t)
                                        }))
                                    }
                                };
                            if (this.transitionEndEvent) this.transitionEndEvent.split(/\s+/).forEach((function (t) {
                                return Gt(s, t, c, In)
                            }));
                            this._animationTimeout = setTimeout(c, 650)
                        }
                        n && this.start(!1)
                    }
                },
                updateSlides: function () {
                    this.pause(!0), this.slides = Yt(".carousel-item", this.$refs.inner);
                    var t = this.slides.length,
                        e = Math.max(0, Math.min(Math.floor(this.index), t - 1));
                    this.slides.forEach((function (i, n) {
                        var r = n + 1;
                        n === e ? (ie(i, "active"), oe(i, "aria-current", "true")) : (ne(i, "active"), oe(i, "aria-current", "false")), oe(i, "aria-posinset", String(r)), oe(i, "aria-setsize", String(t))
                    })), this.setSlide(e), this.start(this.isPaused)
                },
                calcDirection: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return t ? _n[t] : i > e ? _n.next : _n.prev
                },
                handleClick: function (t, e) {
                    var i = t.keyCode;
                    "click" !== t.type && i !== Ni.SPACE && i !== Ni.ENTER || (t.preventDefault(), t.stopPropagation(), e())
                },
                handleSwipe: function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e > 0 ? this.prev() : e < 0 && this.next()
                    }
                },
                touchStart: function (t) {
                    U && Pn[t.pointerType.toUpperCase()] ? this.touchStartX = t.clientX : U || (this.touchStartX = t.touches[0].clientX)
                },
                touchMove: function (t) {
                    t.touches && t.touches.length > 1 ? this.touchDeltaX = 0 : this.touchDeltaX = t.touches[0].clientX - this.touchStartX
                },
                touchEnd: function (t) {
                    U && Pn[t.pointerType.toUpperCase()] && (this.touchDeltaX = t.clientX - this.touchStartX), this.handleSwipe(), this.pause(!1), this._touchTimeout && clearTimeout(this._touchTimeout), this._touchTimeout = setTimeout(this.start, 500 + Math.max(1e3, this.interval))
                }
            },
            render: function (t) {
                var e = this,
                    i = t("div", {
                        ref: "inner",
                        class: ["carousel-inner"],
                        attrs: {
                            id: this.safeId("__BV_inner_"),
                            role: "list"
                        }
                    }, [this.normalizeSlot("default")]),
                    n = t();
                if (this.controls) {
                    var r = function (t) {
                            e.isSliding ? t.preventDefault() : e.handleClick(t, e.prev)
                        },
                        o = function (t) {
                            e.isSliding ? t.preventDefault() : e.handleClick(t, e.next)
                        };
                    n = [t("a", {
                        class: ["carousel-control-prev"],
                        attrs: {
                            href: "#",
                            role: "button",
                            "aria-controls": this.safeId("__BV_inner_"),
                            "aria-disabled": this.isSliding ? "true" : null
                        },
                        on: {
                            click: r,
                            keydown: r
                        }
                    }, [t("span", {
                        class: ["carousel-control-prev-icon"],
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }), t("span", {
                        class: ["sr-only"]
                    }, [this.labelPrev])]), t("a", {
                        class: ["carousel-control-next"],
                        attrs: {
                            href: "#",
                            role: "button",
                            "aria-controls": this.safeId("__BV_inner_"),
                            "aria-disabled": this.isSliding ? "true" : null
                        },
                        on: {
                            click: o,
                            keydown: o
                        }
                    }, [t("span", {
                        class: ["carousel-control-next-icon"],
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }), t("span", {
                        class: ["sr-only"]
                    }, [this.labelNext])])]
                }
                var a = t("ol", {
                        class: ["carousel-indicators"],
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.indicators,
                            expression: "indicators"
                        }],
                        attrs: {
                            id: this.safeId("__BV_indicators_"),
                            "aria-hidden": this.indicators ? "false" : "true",
                            "aria-label": this.labelIndicators,
                            "aria-owns": this.safeId("__BV_inner_")
                        }
                    }, this.slides.map((function (i, n) {
                        return t("li", {
                            key: "slide_".concat(n),
                            class: {
                                active: n === e.index
                            },
                            attrs: {
                                role: "button",
                                id: e.safeId("__BV_indicator_".concat(n + 1, "_")),
                                tabindex: e.indicators ? "0" : "-1",
                                "aria-current": n === e.index ? "true" : "false",
                                "aria-label": "".concat(e.labelGotoSlide, " ").concat(n + 1),
                                "aria-describedby": e.slides[n].id || null,
                                "aria-controls": e.safeId("__BV_inner_")
                            },
                            on: {
                                click: function (t) {
                                    e.handleClick(t, (function () {
                                        e.setSlide(n)
                                    }))
                                },
                                keydown: function (t) {
                                    e.handleClick(t, (function () {
                                        e.setSlide(n)
                                    }))
                                }
                            }
                        })
                    }))),
                    s = {
                        mouseenter: this.noHoverPause ? kn : this.pause,
                        mouseleave: this.noHoverPause ? kn : this.restart,
                        focusin: this.pause,
                        focusout: this.restart,
                        keydown: function (t) {
                            if (!/input|textarea/i.test(t.target.tagName)) {
                                var i = t.keyCode;
                                i !== Ni.LEFT && i !== Ni.RIGHT || (t.preventDefault(), t.stopPropagation(), e[i === Ni.LEFT ? "prev" : "next"]())
                            }
                        }
                    };
                return !this.noTouch && W && (U ? (s["&pointerdown"] = this.touchStart, s["&pointerup"] = this.touchEnd) : (s["&touchstart"] = this.touchStart, s["&touchmove"] = this.touchMove, s["&touchend"] = this.touchEnd)), t("div", {
                    staticClass: "carousel",
                    class: {
                        slide: !this.noAnimation, "carousel-fade": !this.noAnimation && this.fade, "pointer-event": !this.noTouch && W && U
                    },
                    style: {
                        background: this.background
                    },
                    attrs: {
                        role: "region",
                        id: this.safeId(),
                        "aria-busy": this.isSliding ? "true" : "false"
                    },
                    on: s
                }, [i, n, a])
            }
        }),
        Fn = {
            imgSrc: {
                type: String
            },
            imgAlt: {
                type: String
            },
            imgWidth: {
                type: [Number, String]
            },
            imgHeight: {
                type: [Number, String]
            },
            imgBlank: {
                type: Boolean,
                default: !1
            },
            imgBlankColor: {
                type: String,
                default: "transparent"
            },
            contentVisibleUp: {
                type: String
            },
            contentTag: {
                type: String,
                default: "div"
            },
            caption: {
                type: String
            },
            captionHtml: {
                type: String
            },
            captionTag: {
                type: String,
                default: "h3"
            },
            text: {
                type: String
            },
            textHtml: {
                type: String
            },
            textTag: {
                type: String,
                default: "p"
            },
            background: {
                type: String
            }
        },
        Vn = Bt({
            components: {
                BCarousel: En,
                BCarouselSlide: t.extend({
                    name: "BCarouselSlide",
                    mixins: [xn, Pe],
                    inject: {
                        bvCarousel: {
                            default: function () {
                                return {
                                    noTouch: !0
                                }
                            }
                        }
                    },
                    props: Fn,
                    computed: {
                        contentClasses: function () {
                            return [this.contentVisibleUp ? "d-none" : "", this.contentVisibleUp ? "d-".concat(this.contentVisibleUp, "-block") : ""]
                        },
                        computedWidth: function () {
                            return this.imgWidth || this.bvCarousel.imgWidth || null
                        },
                        computedHeight: function () {
                            return this.imgHeight || this.bvCarousel.imgHeight || null
                        }
                    },
                    render: function (t) {
                        var e = !this.bvCarousel.noTouch && W,
                            i = this.normalizeSlot("img");
                        i || !this.imgSrc && !this.imgBlank || (i = t(vn, {
                            props: {
                                fluidGrow: !0,
                                block: !0,
                                src: this.imgSrc,
                                blank: this.imgBlank,
                                blankColor: this.imgBlankColor,
                                width: this.computedWidth,
                                height: this.computedHeight,
                                alt: this.imgAlt
                            },
                            on: e ? {
                                dragstart: function (t) {
                                    t.preventDefault()
                                }
                            } : {}
                        })), i || (i = t());
                        var n = t(),
                            r = [!(!this.caption && !this.captionHtml) && t(this.captionTag, {
                                domProps: pi(this.captionHtml, this.caption)
                            }), !(!this.text && !this.textHtml) && t(this.textTag, {
                                domProps: pi(this.textHtml, this.text)
                            }), this.normalizeSlot("default") || !1];
                        return r.some(Boolean) && (n = t(this.contentTag, {
                            staticClass: "carousel-caption",
                            class: this.contentClasses
                        }, r.map((function (e) {
                            return e || t()
                        })))), t("div", {
                            staticClass: "carousel-item",
                            style: {
                                background: this.background || this.bvCarousel.background || null
                            },
                            attrs: {
                                id: this.safeId(),
                                role: "listitem"
                            }
                        }, [i, n])
                    }
                })
            }
        }),
        An = {
            methods: {
                listenOnRoot: function (t, e) {
                    var i = this;
                    return this.$root.$on(t, e), this.$on("hook:beforeDestroy", (function () {
                        i.$root.$off(t, e)
                    })), this
                },
                listenOnRootOnce: function (t, e) {
                    var i = this;
                    return this.$root.$once(t, e), this.$on("hook:beforeDestroy", (function () {
                        i.$root.$off(t, e)
                    })), this
                },
                emitOnRoot: function (t) {
                    for (var e, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    return (e = this.$root).$emit.apply(e, [t].concat(n)), this
                }
            }
        },
        Dn = {
            css: !0,
            enterClass: "",
            enterActiveClass: "collapsing",
            enterToClass: "collapse show",
            leaveClass: "collapse show",
            leaveActiveClass: "collapsing",
            leaveToClass: "collapse"
        },
        Nn = {
            enter: function (t) {
                t.style.height = 0, zt((function () {
                    Xt(t), t.style.height = "".concat(t.scrollHeight, "px")
                }))
            },
            afterEnter: function (t) {
                t.style.height = null
            },
            leave: function (t) {
                t.style.height = "auto", t.style.display = "block", t.style.height = "".concat(ue(t).height, "px"), Xt(t), t.style.height = 0
            },
            afterLeave: function (t) {
                t.style.height = null
            }
        },
        Rn = t.extend({
            name: "BVCollapse",
            functional: !0,
            props: {
                appear: {
                    type: Boolean,
                    default: !1
                }
            },
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t("transition", Be(n, {
                    props: Dn,
                    on: Nn
                }, {
                    props: i
                }), r)
            }
        }),
        Ln = {
            passive: !0,
            capture: !1
        },
        Hn = t.extend({
            name: "BCollapse",
            mixins: [xn, An, Pe],
            model: {
                prop: "visible",
                event: "input"
            },
            props: {
                isNav: {
                    type: Boolean,
                    default: !1
                },
                accordion: {
                    type: String,
                    default: null
                },
                visible: {
                    type: Boolean,
                    default: !1
                },
                tag: {
                    type: String,
                    default: "div"
                },
                appear: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function () {
                return {
                    show: this.visible,
                    transitioning: !1
                }
            },
            computed: {
                classObject: function () {
                    return {
                        "navbar-collapse": this.isNav,
                        collapse: !this.transitioning,
                        show: this.show && !this.transitioning
                    }
                }
            },
            watch: {
                visible: function (t) {
                    t !== this.show && (this.show = t)
                },
                show: function (t, e) {
                    t !== e && this.emitState()
                }
            },
            created: function () {
                this.show = this.visible
            },
            mounted: function () {
                var t = this;
                this.show = this.visible, this.listenOnRoot("bv::toggle::collapse", this.handleToggleEvt), this.listenOnRoot("bv::collapse::accordion", this.handleAccordionEvt), this.isNav && (this.setWindowEvents(!0), this.handleResize()), this.$nextTick((function () {
                    t.emitState()
                })), this.listenOnRoot("bv::request::collapse::state", (function (e) {
                    e === t.safeId() && t.$nextTick(t.emitSync)
                }))
            },
            updated: function () {
                this.emitSync()
            },
            deactivated: function () {
                this.isNav && this.setWindowEvents(!1)
            },
            activated: function () {
                this.isNav && this.setWindowEvents(!0), this.emitSync()
            },
            beforeDestroy: function () {
                this.show = !1, this.isNav && z && this.setWindowEvents(!1)
            },
            methods: {
                setWindowEvents: function (t) {
                    var e = t ? Gt : Wt;
                    e(window, "resize", this.handleResize, Ln), e(window, "orientationchange", this.handleResize, Ln)
                },
                toggle: function () {
                    this.show = !this.show
                },
                onEnter: function (t) {
                    this.transitioning = !0, this.$emit("show")
                },
                onAfterEnter: function (t) {
                    this.transitioning = !1, this.$emit("shown")
                },
                onLeave: function (t) {
                    this.transitioning = !0, this.$emit("hide")
                },
                onAfterLeave: function (t) {
                    this.transitioning = !1, this.$emit("hidden")
                },
                emitState: function () {
                    this.$emit("input", this.show), this.$root.$emit("bv::collapse::state", this.safeId(), this.show), this.accordion && this.show && this.$root.$emit("bv::collapse::accordion", this.safeId(), this.accordion)
                },
                emitSync: function () {
                    this.$root.$emit("bv::collapse::sync::state", this.safeId(), this.show)
                },
                checkDisplayBlock: function () {
                    var t = re(this.$el, "show");
                    ne(this.$el, "show");
                    var e = "block" === ce(this.$el).display;
                    return t && ie(this.$el, "show"), e
                },
                clickHandler: function (t) {
                    var e = t.target;
                    this.isNav && e && "block" === ce(this.$el).display && (Jt(e, ".nav-link,.dropdown-item") || Qt(".nav-link,.dropdown-item", e)) && (this.checkDisplayBlock() || (this.show = !1))
                },
                handleToggleEvt: function (t) {
                    t === this.safeId() && this.toggle()
                },
                handleAccordionEvt: function (t, e) {
                    this.accordion && e === this.accordion && (t === this.safeId() ? this.show || this.toggle() : this.show && this.toggle())
                },
                handleResize: function () {
                    this.show = "block" === ce(this.$el).display
                }
            },
            render: function (t) {
                var e = this,
                    i = {
                        visible: this.show,
                        close: function () {
                            return e.show = !1
                        }
                    },
                    n = t(this.tag, {
                        class: this.classObject,
                        directives: [{
                            name: "show",
                            value: this.show
                        }],
                        attrs: {
                            id: this.safeId()
                        },
                        on: {
                            click: this.clickHandler
                        }
                    }, [this.normalizeSlot("default", i)]);
                return t(Rn, {
                    props: {
                        appear: this.appear
                    },
                    on: {
                        enter: this.onEnter,
                        afterEnter: this.onAfterEnter,
                        leave: this.onLeave,
                        afterLeave: this.onAfterLeave
                    }
                }, [n])
            }
        }),
        zn = {
            hover: !0,
            click: !0,
            focus: !0
        },
        Mn = "__BV_boundEventListeners__",
        jn = function (t) {
            var e = O(t.modifiers || {}).filter((function (t) {
                return !zn[t]
            }));
            return t.value && e.push(t.value), e
        },
        Gn = function (t, e, i, n) {
            var r = jn(e),
                o = function () {
                    n({
                        targets: r,
                        vnode: t
                    })
                };
            return O(zn).forEach((function (n) {
                if (i[n] || e.modifiers[n]) {
                    Gt(t.elm, n, o);
                    var r = t.elm[Mn] || {};
                    r[n] = r[n] || [], r[n].push(o), t.elm[Mn] = r
                }
            })), r
        },
        Wn = function (t, e, i) {
            O(zn).forEach((function (n) {
                if (i[n] || e.modifiers[n]) {
                    var r = t.elm[Mn] && t.elm[Mn][n];
                    r && (r.forEach((function (e) {
                        return Wt(t.elm, n, e)
                    })), delete t.elm[Mn][n])
                }
            }))
        },
        Un = {
            click: !0
        },
        qn = "__BV_toggle__",
        Kn = function (t, e) {
            t[e] = null, delete t[e]
        },
        Xn = function (t) {
            var e = t.targets,
                i = t.vnode;
            e.forEach((function (t) {
                i.context.$root.$emit("bv::toggle::collapse", t)
            }))
        },
        Yn = function (t, e, i) {
            if (z) {
                if (!ln(jn(e), t.__BV_toggle_TARGETS__)) {
                    Wn(i, e, Un);
                    var n = Gn(i, e, Un, Xn);
                    t.__BV_toggle_TARGETS__ = n, t.__BV_toggle_CONTROLS__ = n.join(" "), oe(t, "aria-controls", t.__BV_toggle_CONTROLS__), n.forEach((function (t) {
                        i.context.$root.$emit("bv::request::collapse::state", t)
                    }))
                }!0 === t.__BV_toggle_STATE__ ? (ie(t, "collapsed"), oe(t, "aria-expanded", "true")) : !1 === t.__BV_toggle_STATE__ && (ne(t, "collapsed"), oe(t, "aria-expanded", "false")), oe(t, "aria-controls", t.__BV_toggle_CONTROLS__)
            }
        },
        Zn = {
            bind: function (t, e, i) {
                var n = Gn(i, e, Un, Xn);
                if (z && i.context && n.length > 0) {
                    t.__BV_toggle_TARGETS__ = n, t.__BV_toggle_CONTROLS__ = n.join(" "), t.__BV_toggle_STATE__ = !1, oe(t, "aria-controls", t.__BV_toggle_CONTROLS__), oe(t, "aria-expanded", "false"), "BUTTON" === t.tagName || le(t, "role") || oe(t, "role", "button");
                    t[qn] = function (e, i) {
                        -1 !== (t.__BV_toggle_TARGETS__ || []).indexOf(e) && (oe(t, "aria-expanded", i ? "true" : "false"), t.__BV_toggle_STATE__ = i, i ? ne(t, "collapsed") : ie(t, "collapsed"))
                    }, i.context.$root.$on("bv::collapse::state", t[qn]), i.context.$root.$on("bv::collapse::sync::state", t[qn])
                }
            },
            componentUpdated: Yn,
            updated: Yn,
            unbind: function (t, e, i) {
                Wn(i, e, Un), t[qn] && (i.context.$root.$off("bv::collapse::state", t[qn]), i.context.$root.$off("bv::collapse::sync::state", t[qn])), Kn(t, qn), Kn(t, "__BV_toggle_STATE__"), Kn(t, "__BV_toggle_CONTROLS__"), Kn(t, "__BV_toggle_TARGETS__"), ne(t, "collapsed"), ae(t, "aria-expanded"), ae(t, "aria-controls"), ae(t, "role")
            }
        },
        Jn = Bt({
            components: {
                BCollapse: Hn
            },
            directives: {
                VBToggle: Zn
            }
        }),
        Qn = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        tr = function () {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (Qn && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0
        }();
    var er = Qn && window.Promise ? function (t) {
        var e = !1;
        return function () {
            e || (e = !0, window.Promise.resolve().then((function () {
                e = !1, t()
            })))
        }
    } : function (t) {
        var e = !1;
        return function () {
            e || (e = !0, setTimeout((function () {
                e = !1, t()
            }), tr))
        }
    };

    function ir(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function nr(t, e) {
        if (1 !== t.nodeType) return [];
        var i = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? i[e] : i
    }

    function rr(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function or(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = nr(t),
            i = e.overflow,
            n = e.overflowX,
            r = e.overflowY;
        return /(auto|scroll|overlay)/.test(i + r + n) ? t : or(rr(t))
    }

    function ar(t) {
        return t && t.referenceNode ? t.referenceNode : t
    }
    var sr = Qn && !(!window.MSInputMethodContext || !document.documentMode),
        lr = Qn && /MSIE 10/.test(navigator.userAgent);

    function ur(t) {
        return 11 === t ? sr : 10 === t ? lr : sr || lr
    }

    function cr(t) {
        if (!t) return document.documentElement;
        for (var e = ur(10) ? document.body : null, i = t.offsetParent || null; i === e && t.nextElementSibling;) i = (t = t.nextElementSibling).offsetParent;
        var n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === nr(i, "position") ? cr(i) : i : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function dr(t) {
        return null !== t.parentNode ? dr(t.parentNode) : t
    }

    function hr(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = i ? t : e,
            r = i ? e : t,
            o = document.createRange();
        o.setStart(n, 0), o.setEnd(r, 0);
        var a, s, l = o.commonAncestorContainer;
        if (t !== l && e !== l || n.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && cr(a.firstElementChild) !== a ? cr(l) : l;
        var u = dr(t);
        return u.host ? hr(u.host, e) : hr(t, dr(e).host)
    }

    function fr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            i = "top" === e ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var r = t.ownerDocument.documentElement,
                o = t.ownerDocument.scrollingElement || r;
            return o[i]
        }
        return t[i]
    }

    function pr(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = fr(e, "top"),
            r = fr(e, "left"),
            o = i ? -1 : 1;
        return t.top += n * o, t.bottom += n * o, t.left += r * o, t.right += r * o, t
    }

    function mr(t, e) {
        var i = "x" === e ? "Left" : "Top",
            n = "Left" === i ? "Right" : "Bottom";
        return parseFloat(t["border" + i + "Width"]) + parseFloat(t["border" + n + "Width"])
    }

    function gr(t, e, i, n) {
        return Math.max(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], ur(10) ? parseInt(i["offset" + t]) + parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function vr(t) {
        var e = t.body,
            i = t.documentElement,
            n = ur(10) && getComputedStyle(i);
        return {
            height: gr("Height", e, i, n),
            width: gr("Width", e, i, n)
        }
    }
    var br = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        yr = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        Sr = function (t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        },
        Tr = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        };

    function wr(t) {
        return Tr({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function Br(t) {
        var e = {};
        try {
            if (ur(10)) {
                e = t.getBoundingClientRect();
                var i = fr(t, "top"),
                    n = fr(t, "left");
                e.top += i, e.left += n, e.bottom += i, e.right += n
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var r = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            o = "HTML" === t.nodeName ? vr(t.ownerDocument) : {},
            a = o.width || t.clientWidth || r.width,
            s = o.height || t.clientHeight || r.height,
            l = t.offsetWidth - a,
            u = t.offsetHeight - s;
        if (l || u) {
            var c = nr(t);
            l -= mr(c, "x"), u -= mr(c, "y"), r.width -= l, r.height -= u
        }
        return wr(r)
    }

    function kr(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = ur(10),
            r = "HTML" === e.nodeName,
            o = Br(t),
            a = Br(e),
            s = or(t),
            l = nr(e),
            u = parseFloat(l.borderTopWidth),
            c = parseFloat(l.borderLeftWidth);
        i && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var d = wr({
            top: o.top - a.top - u,
            left: o.left - a.left - c,
            width: o.width,
            height: o.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !n && r) {
            var h = parseFloat(l.marginTop),
                f = parseFloat(l.marginLeft);
            d.top -= u - h, d.bottom -= u - h, d.left -= c - f, d.right -= c - f, d.marginTop = h, d.marginLeft = f
        }
        return (n && !i ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (d = pr(d, e)), d
    }

    function Cr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = t.ownerDocument.documentElement,
            n = kr(t, i),
            r = Math.max(i.clientWidth, window.innerWidth || 0),
            o = Math.max(i.clientHeight, window.innerHeight || 0),
            a = e ? 0 : fr(i),
            s = e ? 0 : fr(i, "left"),
            l = {
                top: a - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: r,
                height: o
            };
        return wr(l)
    }

    function xr(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === nr(t, "position")) return !0;
        var i = rr(t);
        return !!i && xr(i)
    }

    function $r(t) {
        if (!t || !t.parentElement || ur()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === nr(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function _r(t, e, i, n) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            a = r ? $r(t) : hr(t, ar(e));
        if ("viewport" === n) o = Cr(a, r);
        else {
            var s = void 0;
            "scrollParent" === n ? "BODY" === (s = or(rr(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === n ? t.ownerDocument.documentElement : n;
            var l = kr(s, a, r);
            if ("HTML" !== s.nodeName || xr(a)) o = l;
            else {
                var u = vr(t.ownerDocument),
                    c = u.height,
                    d = u.width;
                o.top += l.top - l.marginTop, o.bottom = c + l.top, o.left += l.left - l.marginLeft, o.right = d + l.left
            }
        }
        var h = "number" == typeof (i = i || 0);
        return o.left += h ? i : i.left || 0, o.top += h ? i : i.top || 0, o.right -= h ? i : i.right || 0, o.bottom -= h ? i : i.bottom || 0, o
    }

    function Pr(t) {
        return t.width * t.height
    }

    function Or(t, e, i, n, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = _r(i, n, o, r),
            s = {
                top: {
                    width: a.width,
                    height: e.top - a.top
                },
                right: {
                    width: a.right - e.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - e.bottom
                },
                left: {
                    width: e.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map((function (t) {
                return Tr({
                    key: t
                }, s[t], {
                    area: Pr(s[t])
                })
            })).sort((function (t, e) {
                return e.area - t.area
            })),
            u = l.filter((function (t) {
                var e = t.width,
                    n = t.height;
                return e >= i.clientWidth && n >= i.clientHeight
            })),
            c = u.length > 0 ? u[0].key : l[0].key,
            d = t.split("-")[1];
        return c + (d ? "-" + d : "")
    }

    function Ir(t, e, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = n ? $r(e) : hr(e, ar(i));
        return kr(i, r, n)
    }

    function Er(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            n = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + n,
            height: t.offsetHeight + i
        }
    }

    function Fr(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return e[t]
        }))
    }

    function Vr(t, e, i) {
        i = i.split("-")[0];
        var n = Er(t),
            r = {
                width: n.width,
                height: n.height
            },
            o = -1 !== ["right", "left"].indexOf(i),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return r[a] = e[a] + e[l] / 2 - n[l] / 2, r[s] = i === s ? e[s] - n[u] : e[Fr(s)], r
    }

    function Ar(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function Dr(t, e, i) {
        return (void 0 === i ? t : t.slice(0, function (t, e, i) {
            if (Array.prototype.findIndex) return t.findIndex((function (t) {
                return t[e] === i
            }));
            var n = Ar(t, (function (t) {
                return t[e] === i
            }));
            return t.indexOf(n)
        }(t, "name", i))).forEach((function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && ir(i) && (e.offsets.popper = wr(e.offsets.popper), e.offsets.reference = wr(e.offsets.reference), e = i(e, t))
        })), e
    }

    function Nr() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = Ir(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Or(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Vr(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = Dr(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function Rr(t, e) {
        return t.some((function (t) {
            var i = t.name;
            return t.enabled && i === e
        }))
    }

    function Lr(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < e.length; n++) {
            var r = e[n],
                o = r ? "" + r + i : t;
            if ("undefined" != typeof document.body.style[o]) return o
        }
        return null
    }

    function Hr() {
        return this.state.isDestroyed = !0, Rr(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Lr("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function zr(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function Mr(t, e, i, n) {
        i.updateBound = n, zr(t).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var r = or(t);
        return function t(e, i, n, r) {
            var o = "BODY" === e.nodeName,
                a = o ? e.ownerDocument.defaultView : e;
            a.addEventListener(i, n, {
                passive: !0
            }), o || t(or(a.parentNode), i, n, r), r.push(a)
        }(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i
    }

    function jr() {
        this.state.eventsEnabled || (this.state = Mr(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function Gr() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, zr(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function (t) {
            t.removeEventListener("scroll", e.updateBound)
        })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function Wr(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function Ur(t, e) {
        Object.keys(e).forEach((function (i) {
            var n = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && Wr(e[i]) && (n = "px"), t.style[i] = e[i] + n
        }))
    }
    var qr = Qn && /Firefox/i.test(navigator.userAgent);

    function Kr(t, e, i) {
        var n = Ar(t, (function (t) {
                return t.name === e
            })),
            r = !!n && t.some((function (t) {
                return t.name === i && t.enabled && t.order < n.order
            }));
        if (!r) {
            var o = "`" + e + "`",
                a = "`" + i + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var Xr = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Yr = Xr.slice(3);

    function Zr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = Yr.indexOf(t),
            n = Yr.slice(i + 1).concat(Yr.slice(0, i));
        return e ? n.reverse() : n
    }
    var Jr = "flip",
        Qr = "clockwise",
        to = "counterclockwise";

    function eo(t, e, i, n) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(n),
            a = t.split(/(\+|\-)/).map((function (t) {
                return t.trim()
            })),
            s = a.indexOf(Ar(a, (function (t) {
                return -1 !== t.search(/,|\s/)
            })));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
        return (u = u.map((function (t, n) {
            var r = (1 === n ? !o : o) ? "height" : "width",
                a = !1;
            return t.reduce((function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
            }), []).map((function (t) {
                return function (t, e, i, n) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        a = r[2];
                    if (!o) return t;
                    if (0 === a.indexOf("%")) {
                        var s = void 0;
                        switch (a) {
                            case "%p":
                                s = i;
                                break;
                            case "%":
                            case "%r":
                            default:
                                s = n
                        }
                        return wr(s)[e] / 100 * o
                    }
                    if ("vh" === a || "vw" === a) {
                        return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                    }
                    return o
                }(t, r, e, i)
            }))
        }))).forEach((function (t, e) {
            t.forEach((function (i, n) {
                Wr(i) && (r[e] += i * ("-" === t[n - 1] ? -1 : 1))
            }))
        })), r
    }
    var io = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.placement,
                            i = e.split("-")[0],
                            n = e.split("-")[1];
                        if (n) {
                            var r = t.offsets,
                                o = r.reference,
                                a = r.popper,
                                s = -1 !== ["bottom", "top"].indexOf(i),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                c = {
                                    start: Sr({}, l, o[l]),
                                    end: Sr({}, l, o[l] + o[u] - a[u])
                                };
                            t.offsets.popper = Tr({}, a, c[n])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (t, e) {
                        var i = e.offset,
                            n = t.placement,
                            r = t.offsets,
                            o = r.popper,
                            a = r.reference,
                            s = n.split("-")[0],
                            l = void 0;
                        return l = Wr(+i) ? [+i, 0] : eo(i, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (t, e) {
                        var i = e.boundariesElement || cr(t.instance.popper);
                        t.instance.reference === i && (i = cr(i));
                        var n = Lr("transform"),
                            r = t.instance.popper.style,
                            o = r.top,
                            a = r.left,
                            s = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = _r(t.instance.popper, t.instance.reference, e.padding, i, t.positionFixed);
                        r.top = o, r.left = a, r[n] = s, e.boundaries = l;
                        var u = e.priority,
                            c = t.offsets.popper,
                            d = {
                                primary: function (t) {
                                    var i = c[t];
                                    return c[t] < l[t] && !e.escapeWithReference && (i = Math.max(c[t], l[t])), Sr({}, t, i)
                                },
                                secondary: function (t) {
                                    var i = "right" === t ? "left" : "top",
                                        n = c[i];
                                    return c[t] > l[t] && !e.escapeWithReference && (n = Math.min(c[i], l[t] - ("right" === t ? c.width : c.height))), Sr({}, i, n)
                                }
                            };
                        return u.forEach((function (t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            c = Tr({}, c, d[e](t))
                        })), t.offsets.popper = c, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (t) {
                        var e = t.offsets,
                            i = e.popper,
                            n = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(r),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            u = a ? "width" : "height";
                        return i[s] < o(n[l]) && (t.offsets.popper[l] = o(n[l]) - i[u]), i[l] > o(n[s]) && (t.offsets.popper[l] = o(n[s])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (t, e) {
                        var i;
                        if (!Kr(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var n = e.element;
                        if ("string" == typeof n) {
                            if (!(n = t.instance.popper.querySelector(n))) return t
                        } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0],
                            o = t.offsets,
                            a = o.popper,
                            s = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            u = l ? "height" : "width",
                            c = l ? "Top" : "Left",
                            d = c.toLowerCase(),
                            h = l ? "left" : "top",
                            f = l ? "bottom" : "right",
                            p = Er(n)[u];
                        s[f] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[f] - p)), s[d] + p > a[f] && (t.offsets.popper[d] += s[d] + p - a[f]), t.offsets.popper = wr(t.offsets.popper);
                        var m = s[d] + s[u] / 2 - p / 2,
                            g = nr(t.instance.popper),
                            v = parseFloat(g["margin" + c]),
                            b = parseFloat(g["border" + c + "Width"]),
                            y = m - t.offsets.popper[d] - v - b;
                        return y = Math.max(Math.min(a[u] - p, y), 0), t.arrowElement = n, t.offsets.arrow = (Sr(i = {}, d, Math.round(y)), Sr(i, h, ""), i), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (t, e) {
                        if (Rr(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var i = _r(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            n = t.placement.split("-")[0],
                            r = Fr(n),
                            o = t.placement.split("-")[1] || "",
                            a = [];
                        switch (e.behavior) {
                            case Jr:
                                a = [n, r];
                                break;
                            case Qr:
                                a = Zr(n);
                                break;
                            case to:
                                a = Zr(n, !0);
                                break;
                            default:
                                a = e.behavior
                        }
                        return a.forEach((function (s, l) {
                            if (n !== s || a.length === l + 1) return t;
                            n = t.placement.split("-")[0], r = Fr(n);
                            var u = t.offsets.popper,
                                c = t.offsets.reference,
                                d = Math.floor,
                                h = "left" === n && d(u.right) > d(c.left) || "right" === n && d(u.left) < d(c.right) || "top" === n && d(u.bottom) > d(c.top) || "bottom" === n && d(u.top) < d(c.bottom),
                                f = d(u.left) < d(i.left),
                                p = d(u.right) > d(i.right),
                                m = d(u.top) < d(i.top),
                                g = d(u.bottom) > d(i.bottom),
                                v = "left" === n && f || "right" === n && p || "top" === n && m || "bottom" === n && g,
                                b = -1 !== ["top", "bottom"].indexOf(n),
                                y = !!e.flipVariations && (b && "start" === o && f || b && "end" === o && p || !b && "start" === o && m || !b && "end" === o && g),
                                S = !!e.flipVariationsByContent && (b && "start" === o && p || b && "end" === o && f || !b && "start" === o && g || !b && "end" === o && m),
                                T = y || S;
                            (h || v || T) && (t.flipped = !0, (h || v) && (n = a[l + 1]), T && (o = function (t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(o)), t.placement = n + (o ? "-" + o : ""), t.offsets.popper = Tr({}, t.offsets.popper, Vr(t.instance.popper, t.offsets.reference, t.placement)), t = Dr(t.instance.modifiers, t, "flip"))
                        })), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (t) {
                        var e = t.placement,
                            i = e.split("-")[0],
                            n = t.offsets,
                            r = n.popper,
                            o = n.reference,
                            a = -1 !== ["left", "right"].indexOf(i),
                            s = -1 === ["top", "left"].indexOf(i);
                        return r[a ? "left" : "top"] = o[i] - (s ? r[a ? "width" : "height"] : 0), t.placement = Fr(e), t.offsets.popper = wr(r), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (t) {
                        if (!Kr(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            i = Ar(t.instance.modifiers, (function (t) {
                                return "preventOverflow" === t.name
                            })).boundaries;
                        if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (t, e) {
                        var i = e.x,
                            n = e.y,
                            r = t.offsets.popper,
                            o = Ar(t.instance.modifiers, (function (t) {
                                return "applyStyle" === t.name
                            })).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== o ? o : e.gpuAcceleration,
                            s = cr(t.instance.popper),
                            l = Br(s),
                            u = {
                                position: r.position
                            },
                            c = function (t, e) {
                                var i = t.offsets,
                                    n = i.popper,
                                    r = i.reference,
                                    o = Math.round,
                                    a = Math.floor,
                                    s = function (t) {
                                        return t
                                    },
                                    l = o(r.width),
                                    u = o(n.width),
                                    c = -1 !== ["left", "right"].indexOf(t.placement),
                                    d = -1 !== t.placement.indexOf("-"),
                                    h = e ? c || d || l % 2 == u % 2 ? o : a : s,
                                    f = e ? o : s;
                                return {
                                    left: h(l % 2 == 1 && u % 2 == 1 && !d && e ? n.left - 1 : n.left),
                                    top: f(n.top),
                                    bottom: f(n.bottom),
                                    right: h(n.right)
                                }
                            }(t, window.devicePixelRatio < 2 || !qr),
                            d = "bottom" === i ? "top" : "bottom",
                            h = "right" === n ? "left" : "right",
                            f = Lr("transform"),
                            p = void 0,
                            m = void 0;
                        if (m = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom : c.top, p = "right" === h ? "HTML" === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right : c.left, a && f) u[f] = "translate3d(" + p + "px, " + m + "px, 0)", u[d] = 0, u[h] = 0, u.willChange = "transform";
                        else {
                            var g = "bottom" === d ? -1 : 1,
                                v = "right" === h ? -1 : 1;
                            u[d] = m * g, u[h] = p * v, u.willChange = d + ", " + h
                        }
                        var b = {
                            "x-placement": t.placement
                        };
                        return t.attributes = Tr({}, b, t.attributes), t.styles = Tr({}, u, t.styles), t.arrowStyles = Tr({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (t) {
                        var e, i;
                        return Ur(t.instance.popper, t.styles), e = t.instance.popper, i = t.attributes, Object.keys(i).forEach((function (t) {
                            !1 !== i[t] ? e.setAttribute(t, i[t]) : e.removeAttribute(t)
                        })), t.arrowElement && Object.keys(t.arrowStyles).length && Ur(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function (t, e, i, n, r) {
                        var o = Ir(r, e, t, i.positionFixed),
                            a = Or(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                        return e.setAttribute("x-placement", a), Ur(e, {
                            position: i.positionFixed ? "fixed" : "absolute"
                        }), i
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        no = function () {
            function t(e, i) {
                var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                br(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(n.update)
                }, this.update = er(this.update.bind(this)), this.options = Tr({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(Tr({}, t.Defaults.modifiers, r.modifiers)).forEach((function (e) {
                    n.options.modifiers[e] = Tr({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                    return Tr({
                        name: t
                    }, n.options.modifiers[t])
                })).sort((function (t, e) {
                    return t.order - e.order
                })), this.modifiers.forEach((function (t) {
                    t.enabled && ir(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
                })), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return yr(t, [{
                key: "update",
                value: function () {
                    return Nr.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return Hr.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return jr.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return Gr.call(this)
                }
            }]), t
        }();
    no.Utils = ("undefined" != typeof window ? window : global).PopperUtils, no.placements = Xr, no.Defaults = io;
    var BvEvent = function () {
            function BvEvent(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (i(this, BvEvent), !t) throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
                k(this, BvEvent.Defaults, this.constructor.Defaults, e, {
                    type: t
                }), x(this, {
                    type: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    },
                    cancelable: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    },
                    nativeEvent: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    },
                    target: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    },
                    relatedTarget: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    },
                    vueTarget: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    },
                    componentId: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    }
                });
                var n = !1;
                this.preventDefault = function () {
                    this.cancelable && (n = !0)
                }, $(this, "defaultPrevented", {
                    enumerable: !0,
                    get: function () {
                        return n
                    }
                })
            }
            return r(BvEvent, null, [{
                key: "Defaults",
                get: function () {
                    return {
                        type: "",
                        cancelable: !0,
                        nativeEvent: null,
                        target: null,
                        relatedTarget: null,
                        vueTarget: null,
                        componentId: null
                    }
                }
            }]), BvEvent
        }(),
        ro = {
            passive: !0,
            capture: !1
        },
        oo = {
            data: function () {
                return {
                    listenForClickOut: !1
                }
            },
            watch: {
                listenForClickOut: function (t, e) {
                    t !== e && (Wt(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, ro), t && Gt(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, ro))
                }
            },
            beforeCreate: function () {
                this.clickOutElement = null, this.clickOutEventName = null
            },
            mounted: function () {
                this.clickOutElement || (this.clickOutElement = document), this.clickOutEventName || (this.clickOutEventName = "ontouchstart" in document.documentElement ? "touchstart" : "click"), this.listenForClickOut && Gt(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, ro)
            },
            beforeDestroy: function () {
                Wt(this.clickOutElement, this.clickOutEventName, this._clickOutHandler, ro)
            },
            methods: {
                isClickOut: function (t) {
                    return !te(this.$el, t.target)
                },
                _clickOutHandler: function (t) {
                    this.clickOutHandler && this.isClickOut(t) && this.clickOutHandler(t)
                }
            }
        },
        ao = {
            passive: !0,
            capture: !1
        },
        so = {
            data: function () {
                return {
                    listenForFocusIn: !1
                }
            },
            watch: {
                listenForFocusIn: function (t, e) {
                    t !== e && (Wt(this.focusInElement, "focusin", this._focusInHandler, ao), t && Gt(this.focusInElement, "focusin", this._focusInHandler, ao))
                }
            },
            beforeCreate: function () {
                this.focusInElement = null
            },
            mounted: function () {
                this.focusInElement || (this.focusInElement = document), this.listenForFocusIn && Gt(this.focusInElement, "focusin", this._focusInHandler, ao)
            },
            beforeDestroy: function () {
                Wt(this.focusInElement, "focusin", this._focusInHandler, ao)
            },
            methods: {
                _focusInHandler: function (t) {
                    this.focusInHandler && this.focusInHandler(t)
                }
            }
        },
        lo = "".concat("bv::dropdown::", "shown"),
        uo = "".concat("bv::dropdown::", "hidden"),
        co = W ? 450 : 150,
        ho = {
            FORM_CHILD: ".dropdown form",
            ITEM_SELECTOR: [".dropdown-item", ".b-dropdown-form"].map((function (t) {
                return "".concat(t, ":not(.disabled):not([disabled])")
            })).join(", ")
        },
        fo = "top-start",
        po = "top-end",
        mo = "bottom-start",
        go = "bottom-end",
        vo = "right-start",
        bo = "left-start",
        yo = {
            mixins: [xn, oo, so],
            provide: function () {
                return {
                    bvDropdown: this
                }
            },
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                text: {
                    type: String,
                    default: ""
                },
                html: {
                    type: String
                },
                dropup: {
                    type: Boolean,
                    default: !1
                },
                dropright: {
                    type: Boolean,
                    default: !1
                },
                dropleft: {
                    type: Boolean,
                    default: !1
                },
                right: {
                    type: Boolean,
                    default: !1
                },
                offset: {
                    type: [Number, String],
                    default: 0
                },
                noFlip: {
                    type: Boolean,
                    default: !1
                },
                lazy: {
                    type: Boolean,
                    default: !1
                },
                popperOpts: {
                    default: function () {}
                }
            },
            data: function () {
                return {
                    visible: !1,
                    inNavbar: null,
                    visibleChangePrevented: !1
                }
            },
            computed: {
                toggler: function () {
                    var t = this.$refs.toggle;
                    return t ? t.$el || t : null
                },
                directionClass: function () {
                    return this.dropup ? "dropup" : this.dropright ? "dropright" : this.dropleft ? "dropleft" : ""
                }
            },
            watch: {
                visible: function (t, e) {
                    if (this.visibleChangePrevented) this.visibleChangePrevented = !1;
                    else if (t !== e) {
                        var i = t ? "show" : "hide",
                            n = new BvEvent(i, {
                                cancelable: !0,
                                vueTarget: this,
                                target: this.$refs.menu,
                                relatedTarget: null,
                                componentId: this.safeId ? this.safeId() : this.id || null
                            });
                        if (this.emitEvent(n), n.defaultPrevented) return this.visibleChangePrevented = !0, this.visible = e, void this.$off("hidden", this.focusToggler);
                        "show" === i ? this.showMenu() : this.hideMenu()
                    }
                },
                disabled: function (t, e) {
                    t !== e && t && this.visible && (this.visible = !1)
                }
            },
            created: function () {
                this.$_popper = null, this.$_hideTimeout = null, this.$_noop = function () {}
            },
            deactivated: function () {
                this.visible = !1, this.whileOpenListen(!1), this.destroyPopper()
            },
            beforeDestroy: function () {
                this.visible = !1, this.whileOpenListen(!1), this.destroyPopper(), this.clearHideTimeout()
            },
            methods: {
                emitEvent: function (t) {
                    var e = t.type;
                    this.$emit(e, t), this.$root.$emit("".concat("bv::dropdown::").concat(e), t)
                },
                showMenu: function () {
                    var t = this;
                    if (!this.disabled) {
                        if (tt(this.inNavbar) && this.isNav && (this.inNavbar = Boolean(Qt(".navbar", this.$el))), !this.inNavbar)
                            if ("undefined" == typeof no) pt("Popper.js not found. Falling back to CSS positioning", "BDropdown");
                            else {
                                var e = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle;
                                e = e.$el || e, this.createPopper(e)
                            } this.$root.$emit(lo, this), this.whileOpenListen(!0), this.$nextTick((function () {
                            t.focusMenu(), t.$emit("shown")
                        }))
                    }
                },
                hideMenu: function () {
                    this.whileOpenListen(!1), this.$root.$emit(uo, this), this.$emit("hidden"), this.destroyPopper()
                },
                createPopper: function (t) {
                    this.destroyPopper(), this.$_popper = new no(t, this.$refs.menu, this.getPopperConfig())
                },
                destroyPopper: function () {
                    this.$_popper && this.$_popper.destroy(), this.$_popper = null
                },
                clearHideTimeout: function () {
                    this.$_hideTimeout && (clearTimeout(this.$_hideTimeout), this.$_hideTimeout = null)
                },
                getPopperConfig: function () {
                    var t = mo;
                    this.dropup ? t = this.right ? po : fo : this.dropright ? t = vo : this.dropleft ? t = bo : this.right && (t = go);
                    var e = {
                        placement: t,
                        modifiers: {
                            offset: {
                                offset: this.offset || 0
                            },
                            flip: {
                                enabled: !this.noFlip
                            }
                        }
                    };
                    return this.boundary && (e.modifiers.preventOverflow = {
                        boundariesElement: this.boundary
                    }), s({}, e, {}, this.popperOpts || {})
                },
                whileOpenListen: function (t) {
                    this.listenForClickOut = t, this.listenForFocusIn = t;
                    var e = t ? "$on" : "$off";
                    this.$root[e](lo, this.rootCloseListener)
                },
                rootCloseListener: function (t) {
                    t !== this && (this.visible = !1)
                },
                show: function () {
                    var t = this;
                    this.disabled || zt((function () {
                        t.visible = !0
                    }))
                },
                hide: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.disabled || (this.visible = !1, t && this.$once("hidden", this.focusToggler))
                },
                toggle: function (t) {
                    var e = (t = t || {}).type,
                        i = t.keyCode;
                    "click" !== e && ("keydown" !== e || i !== Ni.ENTER && i !== Ni.SPACE && i !== Ni.DOWN) || (this.disabled ? this.visible = !1 : (this.$emit("toggle", t), t.preventDefault(), t.stopPropagation(), this.visible ? this.hide(!0) : this.show()))
                },
                click: function (t) {
                    this.disabled ? this.visible = !1 : this.$emit("click", t)
                },
                onKeydown: function (t) {
                    var e = t.keyCode;
                    e === Ni.ESC ? this.onEsc(t) : e === Ni.DOWN ? this.focusNext(t, !1) : e === Ni.UP && this.focusNext(t, !0)
                },
                onEsc: function (t) {
                    this.visible && (this.visible = !1, t.preventDefault(), t.stopPropagation(), this.$once("hidden", this.focusToggler))
                },
                clickOutHandler: function (t) {
                    var e = this,
                        i = t.target;
                    if (this.visible && !te(this.$refs.menu, i) && !te(this.toggler, i)) {
                        var n = function () {
                            return e.visible = !1, null
                        };
                        this.clearHideTimeout(), this.$_hideTimeout = this.inNavbar ? setTimeout(n, co) : n()
                    }
                },
                focusInHandler: function (t) {
                    this.clickOutHandler(t)
                },
                focusNext: function (t, e) {
                    var i = this;
                    !this.visible || t && Qt(ho.FORM_CHILD, t.target) || (t.preventDefault(), t.stopPropagation(), this.$nextTick((function () {
                        var n = i.getItems();
                        if (!(n.length < 1)) {
                            var r = n.indexOf(t.target);
                            e && r > 0 ? r-- : !e && r < n.length - 1 && r++, r < 0 && (r = 0), i.focusItem(r, n)
                        }
                    })))
                },
                focusItem: function (t, e) {
                    var i = e.find((function (e, i) {
                        return i === t
                    }));
                    i && i.focus && i.focus()
                },
                getItems: function () {
                    return (Yt(ho.ITEM_SELECTOR, this.$refs.menu) || []).filter(qt)
                },
                focusMenu: function () {
                    this.$refs.menu.focus && this.$refs.menu.focus()
                },
                focusToggler: function () {
                    var t = this;
                    this.$nextTick((function () {
                        var e = t.toggler;
                        e && e.focus && e.focus()
                    }))
                }
            }
        },
        So = "BDropdown",
        To = {
            toggleText: {
                type: String,
                default: function () {
                    return Et(So, "toggleText")
                }
            },
            size: {
                type: String,
                default: function () {
                    return Et(So, "size")
                }
            },
            variant: {
                type: String,
                default: function () {
                    return Et(So, "variant")
                }
            },
            block: {
                type: Boolean,
                default: !1
            },
            menuClass: {
                type: [String, Array, Object],
                default: null
            },
            toggleTag: {
                type: String,
                default: "button"
            },
            toggleClass: {
                type: [String, Array, Object],
                default: null
            },
            noCaret: {
                type: Boolean,
                default: !1
            },
            split: {
                type: Boolean,
                default: !1
            },
            splitHref: {
                type: String
            },
            splitTo: {
                type: [String, Object]
            },
            splitVariant: {
                type: String,
                default: function () {
                    return Et(So, "splitVariant")
                }
            },
            splitClass: {
                type: [String, Array, Object],
                default: null
            },
            splitButtonType: {
                type: String,
                default: "button",
                validator: function (t) {
                    return w(["button", "submit", "reset"], t)
                }
            },
            role: {
                type: String,
                default: "menu"
            },
            boundary: {
                type: [String, HTMLElement],
                default: "scrollParent"
            }
        },
        wo = t.extend({
            name: So,
            mixins: [xn, yo, Pe],
            props: To,
            computed: {
                dropdownClasses: function () {
                    return [this.directionClass, {
                        show: this.visible,
                        "btn-group": this.split || !this.block,
                        "d-flex": this.block && this.split,
                        "position-static": "scrollParent" !== this.boundary || !this.boundary
                    }]
                },
                menuClasses: function () {
                    return [this.menuClass, {
                        "dropdown-menu-right": this.right,
                        show: this.visible
                    }]
                },
                toggleClasses: function () {
                    return [this.toggleClass, {
                        "dropdown-toggle-split": this.split,
                        "dropdown-toggle-no-caret": this.noCaret && !this.split
                    }]
                }
            },
            render: function (t) {
                var e = t(),
                    i = this.normalizeSlot("button-content") || this.html || fi(this.text);
                if (this.split) {
                    var n = {
                        variant: this.splitVariant || this.variant,
                        size: this.size,
                        block: this.block,
                        disabled: this.disabled
                    };
                    this.splitTo ? n.to = this.splitTo : this.splitHref ? n.href = this.splitHref : this.splitButtonType && (n.type = this.splitButtonType), e = t(Ei, {
                        ref: "button",
                        props: n,
                        class: this.splitClass,
                        attrs: {
                            id: this.safeId("_BV_button_")
                        },
                        on: {
                            click: this.click
                        }
                    }, [i])
                }
                var r = t(Ei, {
                        ref: "toggle",
                        staticClass: "dropdown-toggle",
                        class: this.toggleClasses,
                        props: {
                            tag: this.toggleTag,
                            variant: this.variant,
                            size: this.size,
                            block: this.block && !this.split,
                            disabled: this.disabled
                        },
                        attrs: {
                            id: this.safeId("_BV_toggle_"),
                            "aria-haspopup": "true",
                            "aria-expanded": this.visible ? "true" : "false"
                        },
                        on: {
                            click: this.toggle,
                            keydown: this.toggle
                        }
                    }, [this.split ? t("span", {
                        class: ["sr-only"]
                    }, [this.toggleText]) : i]),
                    o = t("ul", {
                        ref: "menu",
                        staticClass: "dropdown-menu",
                        class: this.menuClasses,
                        attrs: {
                            role: this.role,
                            tabindex: "-1",
                            "aria-labelledby": this.safeId(this.split ? "_BV_button_" : "_BV_toggle_")
                        },
                        on: {
                            keydown: this.onKeydown
                        }
                    }, !this.lazy || this.visible ? this.normalizeSlot("default", {
                        hide: this.hide
                    }) : [t()]);
                return t("div", {
                    staticClass: "dropdown b-dropdown",
                    class: this.dropdownClasses,
                    attrs: {
                        id: this.safeId()
                    }
                }, [e, r, o])
            }
        }),
        Bo = ai(),
        ko = t.extend({
            name: "BDropdownItem",
            mixins: [Pe],
            inheritAttrs: !1,
            inject: {
                bvDropdown: {
                    default: null
                }
            },
            props: s({}, Bo, {
                variant: {
                    type: String,
                    default: null
                }
            }),
            methods: {
                closeDropdown: function () {
                    var t = this;
                    zt((function () {
                        t.bvDropdown && t.bvDropdown.hide(!0)
                    }))
                },
                onClick: function (t) {
                    this.$emit("click", t), this.closeDropdown()
                }
            },
            render: function (t) {
                return t("li", {
                    attrs: {
                        role: "presentation"
                    }
                }, [t(si, {
                    props: this.$props,
                    staticClass: "dropdown-item",
                    class: o({}, "text-".concat(this.variant), this.variant && !(this.active || this.disabled)),
                    attrs: s({}, this.$attrs, {
                        role: "menuitem"
                    }),
                    on: {
                        click: this.onClick
                    },
                    ref: "item"
                }, this.normalizeSlot("default"))])
            }
        }),
        Co = {
            active: {
                type: Boolean,
                default: !1
            },
            activeClass: {
                type: String,
                default: "active"
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            variant: {
                type: String,
                default: null
            }
        },
        xo = t.extend({
            name: "BDropdownItemButton",
            mixins: [Pe],
            inheritAttrs: !1,
            inject: {
                bvDropdown: {
                    default: null
                }
            },
            props: Co,
            methods: {
                closeDropdown: function () {
                    this.bvDropdown && this.bvDropdown.hide(!0)
                },
                onClick: function (t) {
                    this.$emit("click", t), this.closeDropdown()
                }
            },
            render: function (t) {
                var e;
                return t("li", {
                    attrs: {
                        role: "presentation"
                    }
                }, [t("button", {
                    staticClass: "dropdown-item",
                    class: (e = {}, o(e, this.activeClass, this.active), o(e, "text-".concat(this.variant), this.variant && !(this.active || this.disabled)), e),
                    attrs: s({}, this.$attrs, {
                        role: "menuitem",
                        type: "button",
                        disabled: this.disabled
                    }),
                    on: {
                        click: this.onClick
                    },
                    ref: "button"
                }, this.normalizeSlot("default"))])
            }
        }),
        $o = {
            id: {
                type: String,
                default: null
            },
            tag: {
                type: String,
                default: "header"
            },
            variant: {
                type: String,
                default: null
            }
        },
        _o = t.extend({
            name: "BDropdownHeader",
            functional: !0,
            props: $o,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    a = n.attrs || {};
                return n.attrs = {}, t("li", Be(n, {
                    attrs: {
                        role: "presentation"
                    }
                }), [t(i.tag, {
                    staticClass: "dropdown-header",
                    class: o({}, "text-".concat(i.variant), i.variant),
                    attrs: s({}, a, {
                        id: i.id || null,
                        role: "heading"
                    }),
                    ref: "header"
                }, r)])
            }
        }),
        Po = {
            tag: {
                type: String,
                default: "hr"
            }
        },
        Oo = t.extend({
            name: "BDropdownDivider",
            functional: !0,
            props: Po,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = n.attrs || {};
                return n.attrs = {}, t("li", Be(n, {
                    attrs: {
                        role: "presentation"
                    }
                }), [t(i.tag, {
                    staticClass: "dropdown-divider",
                    attrs: s({}, r, {
                        role: "separator",
                        "aria-orientation": "horizontal"
                    }),
                    ref: "divider"
                })])
            }
        }),
        Io = {
            id: {
                type: String,
                default: null
            },
            inline: {
                type: Boolean,
                default: !1
            },
            novalidate: {
                type: Boolean,
                default: !1
            },
            validated: {
                type: Boolean,
                default: !1
            }
        },
        Eo = t.extend({
            name: "BForm",
            functional: !0,
            props: Io,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t("form", Be(n, {
                    class: {
                        "form-inline": i.inline, "was-validated": i.validated
                    },
                    attrs: {
                        id: i.id,
                        novalidate: i.novalidate
                    }
                }), r)
            }
        }),
        Fo = t.extend({
            name: "BDropdownForm",
            functional: !0,
            props: s({}, Io, {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                formClass: {
                    type: [String, Object, Array],
                    default: null
                }
            }),
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = n.attrs || {},
                    a = n.on || {};
                return n.attrs = {}, n.on = {}, t("li", Be(n, {
                    attrs: {
                        role: "presentation"
                    }
                }), [t(Eo, {
                    ref: "form",
                    staticClass: "b-dropdown-form",
                    class: [i.formClass, {
                        disabled: i.disabled
                    }],
                    props: i,
                    attrs: s({}, o, {
                        disabled: i.disabled,
                        tabindex: i.disabled ? null : "-1"
                    }),
                    on: a
                }, r)])
            }
        }),
        Vo = t.extend({
            name: "BDropdownText",
            functional: !0,
            props: {
                tag: {
                    type: String,
                    default: "p"
                },
                variant: {
                    type: String,
                    default: null
                }
            },
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    a = n.attrs || {};
                return n.attrs = {}, t("li", Be(n, {
                    attrs: {
                        role: "presentation"
                    }
                }), [t(i.tag, {
                    staticClass: "b-dropdown-text",
                    class: o({}, "text-".concat(i.variant), i.variant),
                    props: i,
                    attrs: a,
                    ref: "text"
                }, r)])
            }
        }),
        Ao = {
            id: {
                type: String,
                default: null
            },
            header: {
                type: String,
                default: null
            },
            headerTag: {
                type: String,
                default: "header"
            },
            headerVariant: {
                type: String,
                default: null
            },
            headerClasses: {
                type: [String, Array, Object],
                default: null
            },
            ariaDescribedby: {
                type: String,
                default: null
            }
        },
        Do = t.extend({
            name: "BDropdownGroup",
            functional: !0,
            props: Ao,
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = e.slots,
                    l = e.scopedSlots,
                    u = a(),
                    c = l || {},
                    d = r.attrs || {};
                r.attrs = {};
                var h = null;
                ($e("header", c, u) || n.header) && (h = n.id ? "_bv_".concat(n.id, "_group_dd_header") : null, i = t(n.headerTag, {
                    staticClass: "dropdown-header",
                    class: [n.headerClasses, o({}, "text-".concat(n.variant), n.variant)],
                    attrs: {
                        id: h,
                        role: "heading"
                    }
                }, _e("header", {}, c, u) || n.header));
                var f = [h, n.ariaDescribedBy].filter(Boolean).join(" ").trim();
                return t("li", Be(r, {
                    attrs: {
                        role: "presentation"
                    }
                }), [i || t(), t("ul", {
                    staticClass: "list-unstyled",
                    attrs: s({}, d, {
                        id: n.id || null,
                        role: "group",
                        "aria-describedby": f || null
                    })
                }, _e("default", {}, c, u))])
            }
        }),
        No = Bt({
            components: {
                BDropdown: wo,
                BDd: wo,
                BDropdownItem: ko,
                BDdItem: ko,
                BDropdownItemButton: xo,
                BDropdownItemBtn: xo,
                BDdItemButton: xo,
                BDdItemBtn: xo,
                BDropdownHeader: _o,
                BDdHeader: _o,
                BDropdownDivider: Oo,
                BDdDivider: Oo,
                BDropdownForm: Fo,
                BDdForm: Fo,
                BDropdownText: Vo,
                BDdText: Vo,
                BDropdownGroup: Do,
                BDdGroup: Do
            }
        }),
        Ro = {
            type: {
                type: String,
                default: "iframe",
                validator: function (t) {
                    return w(["iframe", "embed", "video", "object", "img", "b-img", "b-img-lazy"], t)
                }
            },
            tag: {
                type: String,
                default: "div"
            },
            aspect: {
                type: String,
                default: "16by9"
            }
        },
        Lo = Bt({
            components: {
                BEmbed: t.extend({
                    name: "BEmbed",
                    functional: !0,
                    props: Ro,
                    render: function (t, e) {
                        var i = e.props,
                            n = e.data,
                            r = e.children;
                        return t(i.tag, {
                            ref: n.ref,
                            staticClass: "embed-responsive",
                            class: o({}, "embed-responsive-".concat(i.aspect), i.aspect)
                        }, [t(i.type, Be(n, {
                            ref: "",
                            staticClass: "embed-responsive-item"
                        }), r)])
                    }
                })
            }
        }),
        Ho = {
            props: {
                options: {
                    type: [Array, Object],
                    default: function () {
                        return []
                    }
                },
                valueField: {
                    type: String,
                    default: "value"
                },
                textField: {
                    type: String,
                    default: "text"
                },
                htmlField: {
                    type: String,
                    default: "html"
                },
                disabledField: {
                    type: String,
                    default: "disabled"
                }
            },
            computed: {
                formOptions: function () {
                    var t = this,
                        e = this.options;
                    return T(e) ? e.map((function (e) {
                        return t.normalizeOption(e)
                    })) : (pt('Setting prop "options" to an object is deprecated. Use the array format instead.', this.$options.name), O(e).map((function (i) {
                        return t.normalizeOption(e[i] || {}, i)
                    })))
                }
            },
            methods: {
                normalizeOption: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (F(t)) {
                        var i = ft(t, this.valueField),
                            n = ft(t, this.textField);
                        return {
                            value: Q(i) ? e || n : i,
                            text: fi(String(Q(n) ? e : n)),
                            html: ft(t, this.htmlField),
                            disabled: Boolean(ft(t, this.disabledField))
                        }
                    }
                    return {
                        value: e || t,
                        text: fi(String(t)),
                        disabled: !1
                    }
                }
            }
        },
        zo = t.extend({
            name: "BFormDatalist",
            mixins: [Ho, Pe],
            props: {
                id: {
                    type: String,
                    default: null,
                    required: !0
                }
            },
            render: function (t) {
                var e = this.formOptions.map((function (e, i) {
                    return t("option", {
                        key: "option_".concat(i, "_opt"),
                        attrs: {
                            disabled: e.disabled
                        },
                        domProps: s({}, pi(e.html, e.text), {
                            value: e.value
                        })
                    })
                }));
                return t("datalist", {
                    attrs: {
                        id: this.id
                    }
                }, [e, this.normalizeSlot("default")])
            }
        }),
        Mo = {
            id: {
                type: String,
                default: null
            },
            tag: {
                type: String,
                default: "small"
            },
            textVariant: {
                type: String,
                default: function () {
                    return Et("BFormText", "textVariant")
                }
            },
            inline: {
                type: Boolean,
                default: !1
            }
        },
        jo = t.extend({
            name: "BFormText",
            functional: !0,
            props: Mo,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.tag, Be(n, {
                    class: o({
                        "form-text": !i.inline
                    }, "text-".concat(i.textVariant), i.textVariant),
                    attrs: {
                        id: i.id
                    }
                }), r)
            }
        }),
        Go = {
            id: {
                type: String,
                default: null
            },
            tag: {
                type: String,
                default: "div"
            },
            tooltip: {
                type: Boolean,
                default: !1
            },
            forceShow: {
                type: Boolean,
                default: !1
            },
            state: {
                type: Boolean,
                default: null
            },
            ariaLive: {
                type: String,
                default: null
            },
            role: {
                type: String,
                default: null
            }
        },
        Wo = t.extend({
            name: "BFormInvalidFeedback",
            functional: !0,
            props: Go,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = !0 === i.forceShow || !1 === i.state;
                return t(i.tag, Be(n, {
                    class: {
                        "invalid-feedback": !i.tooltip, "invalid-tooltip": i.tooltip, "d-block": o
                    },
                    attrs: {
                        id: i.id,
                        role: i.role,
                        "aria-live": i.ariaLive,
                        "aria-atomic": i.ariaLive ? "true" : null
                    }
                }), r)
            }
        }),
        Uo = {
            id: {
                type: String,
                default: null
            },
            tag: {
                type: String,
                default: "div"
            },
            tooltip: {
                type: Boolean,
                default: !1
            },
            forceShow: {
                type: Boolean,
                default: !1
            },
            state: {
                type: Boolean,
                default: null
            },
            ariaLive: {
                type: String,
                default: null
            },
            role: {
                type: String,
                default: null
            }
        },
        qo = t.extend({
            name: "BFormValidFeedback",
            functional: !0,
            props: Uo,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = !0 === i.forceShow || !0 === i.state;
                return t(i.tag, Be(n, {
                    class: {
                        "valid-feedback": !i.tooltip, "valid-tooltip": i.tooltip, "d-block": o
                    },
                    attrs: {
                        id: i.id,
                        role: i.role,
                        "aria-live": i.ariaLive,
                        "aria-atomic": i.ariaLive ? "true" : null
                    }
                }), r)
            }
        }),
        Ko = {
            tag: {
                type: String,
                default: "div"
            }
        },
        Xo = t.extend({
            name: "BFormRow",
            functional: !0,
            props: Ko,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.tag, Be(n, {
                    staticClass: "form-row"
                }), r)
            }
        }),
        Yo = Bt({
            components: {
                BForm: Eo,
                BFormDatalist: zo,
                BDatalist: zo,
                BFormText: jo,
                BFormInvalidFeedback: Wo,
                BFormFeedback: Wo,
                BFormValidFeedback: qo,
                BFormRow: Xo
            }
        }),
        Zo = {
            props: {
                state: {
                    type: Boolean,
                    default: null
                }
            },
            computed: {
                computedState: function () {
                    return nt(this.state) ? this.state : null
                },
                stateClass: function () {
                    var t = this.computedState;
                    return !0 === t ? "is-valid" : !1 === t ? "is-invalid" : null
                }
            }
        },
        Jo = function (t, e) {
            return e + (t ? Ge(t) : "")
        },
        Qo = /^col-/,
        ta = function () {
            return {
                type: [String, Number],
                default: null
            }
        },
        ea = Pt((function (t, e, i) {
            var n = t;
            if (!et(i) && !1 !== i) return e && (n += "-".concat(e)), "col" !== t || "" !== i && !0 !== i ? (n += "-".concat(i), Ke(n)) : Ke(n)
        })),
        ia = C(null),
        na = function () {
            var t = At().filter(dt),
                e = t.reduce((function (t, e) {
                    return e && (t[e] = {
                        type: [Boolean, String, Number],
                        default: !1
                    }), t
                }), C(null)),
                i = t.reduce((function (t, e) {
                    return t[Jo(e, "offset")] = ta(), t
                }), C(null)),
                n = t.reduce((function (t, e) {
                    return t[Jo(e, "order")] = ta(), t
                }), C(null));
            return ia = k(C(null), {
                col: O(e),
                offset: O(i),
                order: O(n)
            }), s({
                col: {
                    type: Boolean,
                    default: !1
                },
                cols: ta()
            }, e, {
                offset: ta()
            }, i, {
                order: ta()
            }, n, {
                alignSelf: {
                    type: String,
                    default: null,
                    validator: function (t) {
                        return w(["auto", "start", "end", "center", "baseline", "stretch"], t)
                    }
                },
                tag: {
                    type: String,
                    default: "div"
                }
            })
        },
        ra = {
            name: "BCol",
            functional: !0,
            get props() {
                return delete this.props, this.props = na()
            },
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = e.children,
                    s = [];
                for (var l in ia)
                    for (var u = ia[l], c = 0; c < u.length; c++) {
                        var d = ea(l, u[c].replace(l, ""), n[u[c]]);
                        d && s.push(d)
                    }
                var h = s.some((function (t) {
                    return Qo.test(t)
                }));
                return s.push((o(i = {
                    col: n.col || !h && !n.cols
                }, "col-".concat(n.cols), n.cols), o(i, "offset-".concat(n.offset), n.offset), o(i, "order-".concat(n.order), n.order), o(i, "align-self-".concat(n.alignSelf), n.alignSelf), i)), t(n.tag, Be(r, {
                    class: s
                }), a)
            }
        },
        oa = function (t, e) {
            var i = e.normalizeSlot("invalid-feedback") || e.invalidFeedback,
                n = t();
            return i && (n = t(Wo, {
                props: {
                    id: e.invalidFeedbackId,
                    state: e.computedState,
                    tooltip: e.tooltip,
                    ariaLive: e.feedbackAriaLive,
                    role: e.feedbackAriaLive ? "alert" : null
                },
                attrs: {
                    tabindex: i ? "-1" : null
                }
            }, [i])), n
        },
        aa = function (t, e) {
            var i = e.normalizeSlot("valid-feedback") || e.validFeedback,
                n = t();
            return i && (n = t(qo, {
                props: {
                    id: e.validFeedbackId,
                    state: e.computedState,
                    tooltip: e.tooltip,
                    ariaLive: e.feedbackAriaLive,
                    role: e.feedbackAriaLive ? "alert" : null
                },
                attrs: {
                    tabindex: i ? "-1" : null
                }
            }, [i])), n
        },
        sa = function (t, e) {
            var i = e.normalizeSlot("description") || e.description,
                n = t();
            return i && (n = t(jo, {
                attrs: {
                    id: e.descriptionId,
                    tabindex: i ? "-1" : null
                }
            }, [i])), n
        },
        la = Pt((function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = arguments.length > 1 ? arguments[1] : void 0;
            return "".concat(e).concat(Ge(t))
        })),
        ua = {
            name: "BFormGroup",
            mixins: [xn, Zo, Pe],
            get props() {
                return delete this.props, this.props = (t = At(), e = t.reduce((function (t, e) {
                    return t[la(e, "labelCols")] = {
                        type: [Number, String, Boolean],
                        default: !e && null
                    }, t
                }), C(null)), i = t.reduce((function (t, e) {
                    return t[la(e, "labelAlign")] = {
                        type: String,
                        default: null
                    }, t
                }), C(null)), s({
                    label: {
                        type: String,
                        default: null
                    },
                    labelFor: {
                        type: String,
                        default: null
                    },
                    labelSize: {
                        type: String,
                        default: null
                    },
                    labelSrOnly: {
                        type: Boolean,
                        default: !1
                    }
                }, e, {}, i, {
                    labelClass: {
                        type: [String, Array, Object],
                        default: null
                    },
                    description: {
                        type: String,
                        default: null
                    },
                    invalidFeedback: {
                        type: String,
                        default: null
                    },
                    validFeedback: {
                        type: String,
                        default: null
                    },
                    tooltip: {
                        type: Boolean,
                        default: !1
                    },
                    feedbackAriaLive: {
                        type: String,
                        default: "assertive"
                    },
                    validated: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    }
                }));
                var t, e, i
            },
            computed: {
                labelColProps: function () {
                    var t = this,
                        e = {};
                    return At().forEach((function (i) {
                        var n = t[la(i, "labelCols")];
                        if (nt(n = "" === n || (n || !1)) || "auto" === n || (n = (n = parseInt(n, 10) || 0) > 0 && n), n) {
                            var r = i || (nt(n) ? "col" : "cols");
                            e[r] = n
                        }
                    })), e
                },
                labelAlignClasses: function () {
                    var t = this,
                        e = [];
                    return At().forEach((function (i) {
                        var n = t[la(i, "labelAlign")] || null;
                        if (n) {
                            var r = i ? "text-".concat(i, "-").concat(n) : "text-".concat(n);
                            e.push(r)
                        }
                    })), e
                },
                isHorizontal: function () {
                    return O(this.labelColProps).length > 0
                },
                labelId: function () {
                    return this.hasNormalizedSlot("label") || this.label ? this.safeId("_BV_label_") : null
                },
                descriptionId: function () {
                    return this.hasNormalizedSlot("description") || this.description ? this.safeId("_BV_description_") : null
                },
                hasInvalidFeedback: function () {
                    return !1 === this.computedState && (this.hasNormalizedSlot("invalid-feedback") || this.invalidFeedback)
                },
                invalidFeedbackId: function () {
                    return this.hasInvalidFeedback ? this.safeId("_BV_feedback_invalid_") : null
                },
                hasValidFeedback: function () {
                    return !0 === this.computedState && (this.hasNormalizedSlot("valid-feedback") || this.validFeedback)
                },
                validFeedbackId: function () {
                    return this.hasValidFeedback ? this.safeId("_BV_feedback_valid_") : null
                },
                describedByIds: function () {
                    return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(Boolean).join(" ") || null
                }
            },
            watch: {
                describedByIds: function (t, e) {
                    t !== e && this.setInputDescribedBy(t, e)
                }
            },
            mounted: function () {
                var t = this;
                this.$nextTick((function () {
                    t.setInputDescribedBy(t.describedByIds)
                }))
            },
            methods: {
                legendClick: function (t) {
                    if (!this.labelFor) {
                        var e = t.target ? t.target.tagName : "";
                        if (!/^(input|select|textarea|label|button|a)$/i.test(e)) {
                            var i = Yt("input:not([disabled]),textarea:not([disabled]),select:not([disabled])", this.$refs.content).filter(qt);
                            if (i && 1 === i.length && i[0].focus) try {
                                i[0].focus()
                            } catch (t) {}
                        }
                    }
                },
                setInputDescribedBy: function (t, e) {
                    if (this.labelFor && z) {
                        var i = Zt("#".concat(this.labelFor), this.$refs.content);
                        if (i) {
                            var n = "aria-describedby",
                                r = (se(i, n) || "").split(/\s+/);
                            t = (t || "").split(/\s+/), e = (e || "").split(/\s+/), r = r.filter((function (t) {
                                return !w(e, t)
                            })).concat(t).filter(Boolean), (r = O(r.reduce((function (t, e) {
                                return s({}, t, o({}, e, !0))
                            }), {})).join(" ").trim()) ? oe(i, n, r) : ae(i, n)
                        }
                    }
                }
            },
            render: function (t) {
                var e = !this.labelFor,
                    i = this.isHorizontal,
                    n = function (t, e) {
                        var i = e.normalizeSlot("label") || e.label,
                            n = e.labelFor,
                            r = !n,
                            o = e.isHorizontal,
                            a = r ? "legend" : "label";
                        if (i || o) {
                            if (e.labelSrOnly) {
                                var l = t();
                                return i && (l = t(a, {
                                    class: "sr-only",
                                    attrs: {
                                        id: e.labelId,
                                        for: n || null
                                    }
                                }, [i])), t(o ? ra : "div", {
                                    props: o ? e.labelColProps : {}
                                }, [l])
                            }
                            return t(o ? ra : a, {
                                on: r ? {
                                    click: e.legendClick
                                } : {},
                                props: o ? s({
                                    tag: a
                                }, e.labelColProps) : {},
                                attrs: {
                                    id: e.labelId,
                                    for: n || null,
                                    tabindex: r ? "-1" : null
                                },
                                class: [r ? "bv-no-focus-ring" : "", o || r ? "col-form-label" : "", !o && r ? "pt-0" : "", o || r ? "" : "d-block", e.labelSize ? "col-form-label-".concat(e.labelSize) : "", e.labelAlignClasses, e.labelClass]
                            }, [i])
                        }
                        return t()
                    }(t, this),
                    r = t(i ? ra : "div", {
                        ref: "content",
                        staticClass: "bv-no-focus-ring",
                        attrs: {
                            tabindex: e ? "-1" : null,
                            role: e ? "group" : null
                        }
                    }, [this.normalizeSlot("default") || t(), oa(t, this), aa(t, this), sa(t, this)]),
                    o = {
                        staticClass: "form-group",
                        class: [this.validated ? "was-validated" : null, this.stateClass],
                        attrs: {
                            id: this.safeId(),
                            disabled: e ? this.disabled : null,
                            role: e ? null : "group",
                            "aria-invalid": !1 === this.computedState ? "true" : null,
                            "aria-labelledby": e && i ? this.labelId : null,
                            "aria-describedby": e ? this.describedByIds : null
                        }
                    };
                return t(e ? "fieldset" : i ? Xo : "div", o, i && e ? [t(Xo, {}, [n, r])] : [n, r])
            }
        },
        ca = Bt({
            components: {
                BFormGroup: ua,
                BFormFieldset: ua
            }
        }),
        da = function (t, e) {
            for (var i = 0; i < t.length; i++)
                if (ln(t[i], e)) return i;
            return -1
        },
        ha = {
            props: {
                name: {
                    type: String
                },
                id: {
                    type: String
                },
                disabled: {
                    type: Boolean
                },
                required: {
                    type: Boolean,
                    default: !1
                },
                form: {
                    type: String,
                    default: null
                },
                autofocus: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function () {
                this.handleAutofocus()
            },
            activated: function () {
                this.handleAutofocus()
            },
            methods: {
                handleAutofocus: function () {
                    var t = this;
                    this.$nextTick((function () {
                        zt((function () {
                            var e = t.$el;
                            t.autofocus && qt(e) && (Jt(e, "input, textarea, select") || (e = Zt("input, textarea, select", e)), e && e.focus && e.focus())
                        }))
                    }))
                }
            }
        },
        fa = {
            mixins: [Pe],
            inheritAttrs: !1,
            model: {
                prop: "checked",
                event: "input"
            },
            props: {
                value: {},
                checked: {},
                inline: {
                    type: Boolean,
                    default: !1
                },
                plain: {
                    type: Boolean,
                    default: !1
                },
                button: {
                    type: Boolean,
                    default: !1
                },
                buttonVariant: {
                    type: String,
                    default: null
                },
                ariaLabel: {
                    type: String,
                    default: null
                },
                ariaLabelledby: {
                    type: String,
                    default: null
                }
            },
            data: function () {
                return {
                    localChecked: this.isGroup ? this.bvGroup.checked : this.checked,
                    hasFocus: !1
                }
            },
            computed: {
                computedLocalChecked: {
                    get: function () {
                        return this.isGroup ? this.bvGroup.localChecked : this.localChecked
                    },
                    set: function (t) {
                        this.isGroup ? this.bvGroup.localChecked = t : this.localChecked = t
                    }
                },
                isGroup: function () {
                    return Boolean(this.bvGroup)
                },
                isBtnMode: function () {
                    return this.isGroup ? this.bvGroup.buttons : this.button
                },
                isPlain: function () {
                    return !this.isBtnMode && (this.isGroup ? this.bvGroup.plain : this.plain)
                },
                isCustom: function () {
                    return !this.isBtnMode && !this.isPlain
                },
                isSwitch: function () {
                    return !(this.isBtnMode || this.isRadio || this.isPlain) && (this.isGroup ? this.bvGroup.switches : this.switch)
                },
                isInline: function () {
                    return this.isGroup ? this.bvGroup.inline : this.inline
                },
                isDisabled: function () {
                    return this.isGroup && this.bvGroup.disabled || this.disabled
                },
                isRequired: function () {
                    return this.getName && (this.isGroup ? this.bvGroup.required : this.required)
                },
                getName: function () {
                    return (this.isGroup ? this.bvGroup.groupName : this.name) || null
                },
                getForm: function () {
                    return (this.isGroup ? this.bvGroup.form : this.form) || null
                },
                getSize: function () {
                    return (this.isGroup ? this.bvGroup.size : this.size) || ""
                },
                getState: function () {
                    return this.isGroup ? this.bvGroup.computedState : this.computedState
                },
                getButtonVariant: function () {
                    return this.buttonVariant ? this.buttonVariant : this.isGroup && this.bvGroup.buttonVariant ? this.bvGroup.buttonVariant : "secondary"
                },
                buttonClasses: function () {
                    var t;
                    return ["btn", "btn-".concat(this.getButtonVariant), (t = {}, o(t, "btn-".concat(this.getSize), this.getSize), o(t, "disabled", this.isDisabled), o(t, "active", this.isChecked), o(t, "focus", this.hasFocus), t)]
                }
            },
            watch: {
                checked: function (t, e) {
                    this.computedLocalChecked = t
                }
            },
            methods: {
                handleFocus: function (t) {
                    t.target && ("focus" === t.type ? this.hasFocus = !0 : "blur" === t.type && (this.hasFocus = !1))
                },
                focus: function () {
                    !this.isDisabled && this.$refs.input && this.$refs.input.focus && this.$refs.input.focus()
                },
                blur: function () {
                    !this.isDisabled && this.$refs.input && this.$refs.input.blur && this.$refs.input.blur()
                }
            },
            render: function (t) {
                var e = this.normalizeSlot("default"),
                    i = {
                        change: this.handleChange
                    };
                this.isBtnMode && (i.focus = i.blur = this.handleFocus);
                var n = t("input", {
                    ref: "input",
                    key: "input",
                    on: i,
                    class: {
                        "form-check-input": this.isPlain, "custom-control-input": this.isCustom, "is-valid": !0 === this.getState && !this.isBtnMode, "is-invalid": !1 === this.getState && !this.isBtnMode, "position-static": this.isPlain && !e
                    },
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: this.computedLocalChecked,
                        expression: "computedLocalChecked"
                    }],
                    attrs: s({}, this.$attrs, {
                        id: this.safeId(),
                        type: this.isRadio ? "radio" : "checkbox",
                        name: this.getName,
                        form: this.getForm,
                        disabled: this.isDisabled,
                        required: this.isRequired,
                        autocomplete: "off",
                        "aria-required": this.isRequired || null,
                        "aria-label": this.ariaLabel || null,
                        "aria-labelledby": this.ariaLabelledby || null
                    }),
                    domProps: {
                        value: this.value,
                        checked: this.isChecked
                    }
                });
                if (this.isBtnMode) {
                    var r = t("label", {
                        class: this.buttonClasses
                    }, [n, e]);
                    return this.isGroup || (r = t("div", {
                        class: ["btn-group-toggle", "d-inline-block"]
                    }, [r])), r
                }
                var a = t();
                return this.isPlain && !e || (a = t("label", {
                    class: {
                        "form-check-label": this.isPlain, "custom-control-label": this.isCustom
                    },
                    attrs: {
                        for: this.safeId()
                    }
                }, e)), t("div", {
                    class: o({
                        "form-check": this.isPlain,
                        "form-check-inline": this.isPlain && this.isInline,
                        "custom-control": this.isCustom,
                        "custom-control-inline": this.isCustom && this.isInline,
                        "custom-checkbox": this.isCustom && this.isCheck && !this.isSwitch,
                        "custom-switch": this.isSwitch,
                        "custom-radio": this.isCustom && this.isRadio
                    }, "b-custom-control-".concat(this.getSize), Boolean(this.getSize && !this.isBtnMode))
                }, [n, a])
            }
        },
        pa = {
            props: {
                size: {
                    type: String,
                    default: function () {
                        return Et("formControls", "size")
                    }
                }
            },
            computed: {
                sizeFormClass: function () {
                    return [this.size ? "form-control-".concat(this.size) : null]
                },
                sizeBtnClass: function () {
                    return [this.size ? "btn-".concat(this.size) : null]
                }
            }
        },
        ma = t.extend({
            name: "BFormCheckbox",
            mixins: [fa, xn, ha, pa, Zo],
            inject: {
                bvGroup: {
                    from: "bvCheckGroup",
                    default: !1
                }
            },
            props: {
                value: {
                    default: !0
                },
                uncheckedValue: {
                    default: !1
                },
                indeterminate: {
                    type: Boolean,
                    default: !1
                },
                switch: {
                    type: Boolean,
                    default: !1
                },
                checked: {
                    default: null
                }
            },
            computed: {
                isChecked: function () {
                    var t = this.computedLocalChecked,
                        e = this.value;
                    return T(t) ? da(t, e) > -1 : ln(t, e)
                },
                isRadio: function () {
                    return !1
                },
                isCheck: function () {
                    return !0
                }
            },
            watch: {
                computedLocalChecked: function (t, e) {
                    this.$emit("input", t), this.$refs && this.$refs.input && this.$emit("update:indeterminate", this.$refs.input.indeterminate)
                },
                indeterminate: function (t, e) {
                    this.setIndeterminate(t)
                }
            },
            mounted: function () {
                this.setIndeterminate(this.indeterminate)
            },
            methods: {
                handleChange: function (t) {
                    var e = t.target,
                        i = e.checked,
                        n = e.indeterminate,
                        r = this.computedLocalChecked,
                        o = this.value,
                        a = T(r),
                        s = a ? null : this.uncheckedValue;
                    if (a) {
                        var l = da(r, o);
                        i && l < 0 ? r = r.concat(o) : !i && l > -1 && (r = r.slice(0, l).concat(r.slice(l + 1)))
                    } else r = i ? o : s;
                    this.computedLocalChecked = r, this.$emit("change", i ? o : s), this.isGroup && this.bvGroup.$emit("change", r), this.$emit("update:indeterminate", n)
                },
                setIndeterminate: function (t) {
                    T(this.computedLocalChecked) && (t = !1), this.$refs && this.$refs.input && (this.$refs.input.indeterminate = t, this.$emit("update:indeterminate", t))
                }
            }
        }),
        ga = t.extend({
            name: "BFormRadio",
            mixins: [xn, fa, ha, pa, Zo],
            inject: {
                bvGroup: {
                    from: "bvRadioGroup",
                    default: !1
                }
            },
            props: {
                checked: {
                    default: null
                }
            },
            computed: {
                isChecked: function () {
                    return ln(this.value, this.computedLocalChecked)
                },
                isRadio: function () {
                    return !0
                },
                isCheck: function () {
                    return !1
                }
            },
            watch: {
                computedLocalChecked: function (t, e) {
                    this.$emit("input", this.computedLocalChecked)
                }
            },
            methods: {
                handleChange: function (t) {
                    var e = t.target.checked,
                        i = this.value;
                    this.computedLocalChecked = i, this.$emit("change", e ? i : null), this.isGroup && this.bvGroup.$emit("change", e ? i : null)
                }
            }
        }),
        va = {
            mixins: [Pe],
            model: {
                prop: "checked",
                event: "input"
            },
            props: {
                validated: {
                    type: Boolean,
                    default: !1
                },
                ariaInvalid: {
                    type: [Boolean, String],
                    default: !1
                },
                stacked: {
                    type: Boolean,
                    default: !1
                },
                plain: {
                    type: Boolean,
                    default: !1
                },
                buttons: {
                    type: Boolean,
                    default: !1
                },
                buttonVariant: {
                    type: String,
                    default: "secondary"
                }
            },
            computed: {
                inline: function () {
                    return !this.stacked
                },
                groupName: function () {
                    return this.name || this.safeId()
                },
                groupClasses: function () {
                    return this.buttons ? ["btn-group-toggle", this.inline ? "btn-group" : "btn-group-vertical", this.size ? "btn-group-".concat(this.size) : "", this.validated ? "was-validated" : ""] : [this.validated ? "was-validated" : ""]
                },
                computedAriaInvalid: function () {
                    var t = this.ariaInvalid;
                    return !0 === t || "true" === t || "" === t ? "true" : !1 === this.computedState ? "true" : null
                }
            },
            watch: {
                checked: function (t, e) {
                    this.localChecked = t
                },
                localChecked: function (t, e) {
                    this.$emit("input", t)
                }
            },
            render: function (t) {
                var e = this,
                    i = this.formOptions.map((function (i, n) {
                        var r = "_BV_option_".concat(n, "_");
                        return t(e.isRadioGroup ? ga : ma, {
                            key: r,
                            props: {
                                id: e.safeId(r),
                                value: i.value,
                                disabled: i.disabled || !1
                            }
                        }, [t("span", {
                            domProps: pi(i.html, i.text)
                        })])
                    }));
                return t("div", {
                    class: [this.groupClasses, "bv-no-focus-ring"],
                    attrs: {
                        id: this.safeId(),
                        role: this.isRadioGroup ? "radiogroup" : "group",
                        tabindex: "-1",
                        "aria-required": this.required ? "true" : null,
                        "aria-invalid": this.computedAriaInvalid
                    }
                }, [this.normalizeSlot("first"), i, this.normalizeSlot("default")])
            }
        },
        ba = {
            switches: {
                type: Boolean,
                default: !1
            },
            checked: {
                type: Array,
                default: null
            }
        },
        ya = t.extend({
            name: "BFormCheckboxGroup",
            mixins: [xn, ha, va, Ho, pa, Zo],
            provide: function () {
                return {
                    bvCheckGroup: this
                }
            },
            props: ba,
            data: function () {
                return {
                    localChecked: this.checked || []
                }
            },
            computed: {
                isRadioGroup: function () {
                    return !1
                }
            }
        }),
        Sa = Bt({
            components: {
                BFormCheckbox: ma,
                BCheckbox: ma,
                BCheck: ma,
                BFormCheckboxGroup: ya,
                BCheckboxGroup: ya,
                BCheckGroup: ya
            }
        }),
        Ta = t.extend({
            name: "BFormRadioGroup",
            mixins: [xn, ha, va, Ho, pa, Zo],
            provide: function () {
                return {
                    bvRadioGroup: this
                }
            },
            props: {
                checked: {
                    default: null
                }
            },
            data: function () {
                return {
                    localChecked: this.checked
                }
            },
            computed: {
                isRadioGroup: function () {
                    return !0
                }
            }
        }),
        wa = Bt({
            components: {
                BFormRadio: ga,
                BRadio: ga,
                BFormRadioGroup: Ta,
                BRadioGroup: Ta
            }
        }),
        Ba = t.extend({
            name: "BFormTag",
            mixins: [xn, Pe],
            props: {
                variant: {
                    type: String,
                    default: function () {
                        return Et("BFormTag", "variant")
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    default: null
                },
                pill: {
                    type: Boolean,
                    default: !1
                },
                removeLabel: {
                    type: String,
                    default: function () {
                        return Et("BFormTag", "removeLabel")
                    }
                },
                tag: {
                    type: String,
                    default: "span"
                }
            },
            methods: {
                onClick: function () {
                    this.$emit("remove")
                }
            },
            render: function (t) {
                var e = this.safeId(),
                    i = t();
                this.disabled || (i = t(Ee, {
                    staticClass: "b-form-tag-remove ml-1",
                    props: {
                        ariaLabel: this.removeLabel
                    },
                    attrs: {
                        "aria-controls": e
                    },
                    on: {
                        click: this.onClick
                    }
                }));
                var n = t("span", {
                    staticClass: "b-form-tag-content flex-grow-1 text-truncate"
                }, this.normalizeSlot("default") || this.title || [t()]);
                return t(ci, {
                    staticClass: "b-form-tag d-inline-flex align-items-baseline mw-100",
                    class: {
                        disabled: this.disabled
                    },
                    attrs: {
                        id: e,
                        title: this.title || null
                    },
                    props: {
                        tag: this.tag,
                        variant: this.variant,
                        pill: this.pill
                    }
                }, [n, i])
            }
        }),
        ka = "BFormTags",
        Ca = ["text", "email", "tel", "url", "number"],
        xa = /[\s\uFEFF\xA0]+/g,
        $a = function (t) {
            return B(t).map((function (t) {
                return qe(Ue(t))
            })).filter((function (t, e, i) {
                return t.length > 0 && i.indexOf(t) === e
            }))
        },
        _a = function (t) {
            return rt(t) ? t : st(t) && t.target.value || ""
        },
        Pa = t.extend({
            name: ka,
            mixins: [xn, Pe],
            model: {
                prop: "value",
                event: "input"
            },
            props: {
                inputId: {
                    type: String,
                    default: null
                },
                placeholder: {
                    type: String,
                    default: function () {
                        return Et(ka, "placeholder")
                    }
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                name: {
                    type: String,
                    default: null
                },
                form: {
                    type: String,
                    default: null
                },
                autofocus: {
                    type: Boolean,
                    default: !1
                },
                state: {
                    type: Boolean,
                    default: null
                },
                size: {
                    type: String,
                    default: null
                },
                inputType: {
                    type: String,
                    default: "text",
                    validator: function (t) {
                        return w(Ca, t)
                    }
                },
                inputClass: {
                    type: [String, Array, Object],
                    default: null
                },
                inputAttrs: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                addButtonText: {
                    type: String,
                    default: function () {
                        return Et(ka, "addButtonText")
                    }
                },
                addButtonVariant: {
                    type: String,
                    default: function () {
                        return Et(ka, "addButtonVariant")
                    }
                },
                tagVariant: {
                    type: String,
                    default: function () {
                        return Et(ka, "tagVariant")
                    }
                },
                tagClass: {
                    type: [String, Array, Object],
                    default: null
                },
                tagPills: {
                    type: Boolean,
                    default: !1
                },
                tagRemoveLabel: {
                    type: String,
                    default: function () {
                        return Et(ka, "tagRemoveLabel")
                    }
                },
                tagValidator: {
                    type: Function,
                    default: null
                },
                duplicateTagText: {
                    type: String,
                    default: function () {
                        return Et(ka, "duplicateTagText")
                    }
                },
                invalidTagText: {
                    type: String,
                    default: function () {
                        return Et(ka, "invalidTagText")
                    }
                },
                separator: {
                    type: [String, Array],
                    default: null
                },
                removeOnDelete: {
                    type: Boolean,
                    default: !1
                },
                addOnChange: {
                    type: Boolean,
                    default: !1
                },
                noAddOnEnter: {
                    type: Boolean,
                    default: !1
                },
                noOuterFocus: {
                    type: Boolean,
                    default: !1
                },
                value: {
                    type: Array,
                    default: function () {
                        return []
                    }
                }
            },
            data: function () {
                return {
                    hasFocus: !1,
                    newTag: "",
                    tags: [],
                    tagsState: {
                        all: [],
                        valid: [],
                        invalid: [],
                        duplicate: []
                    }
                }
            },
            computed: {
                computedInputId: function () {
                    return this.inputId || this.safeId("__input__")
                },
                computedInputType: function () {
                    return w(Ca, this.inputType) ? this.inputType : "text"
                },
                computedInputAttrs: function () {
                    return s({}, this.inputAttrs, {
                        id: this.computedInputId,
                        value: this.newTag,
                        disabled: this.disabled || null,
                        form: this.form || null
                    })
                },
                computedInputHandlers: function () {
                    return {
                        input: this.onInputInput,
                        change: this.onInputChange,
                        keydown: this.onInputKeydown
                    }
                },
                computedSeparator: function () {
                    return B(this.separator).filter(rt).filter(dt).join("")
                },
                computedSeparatorRegExp: function () {
                    var t = this.computedSeparator;
                    return t ? new RegExp("[".concat(We(t).replace(xa, "\\s"), "]+")) : null
                },
                computedJoiner: function () {
                    var t = this.computedSeparator.charAt(0);
                    return " " !== t ? "".concat(t, " ") : t
                },
                disableAddButton: function () {
                    var t = this,
                        e = qe(this.newTag);
                    return "" === e || !this.splitTags(e).some((function (e) {
                        return !w(t.tags, e) && t.validateTag(e)
                    }))
                },
                duplicateTags: function () {
                    return this.tagsState.duplicate
                },
                hasDuplicateTags: function () {
                    return this.duplicateTags.length > 0
                },
                invalidTags: function () {
                    return this.tagsState.invalid
                },
                hasInvalidTags: function () {
                    return this.invalidTags.length > 0
                }
            },
            watch: {
                value: function (t) {
                    this.tags = $a(t)
                },
                tags: function (t) {
                    ln(t, this.value) || this.$emit("input", t)
                },
                tagsState: function (t, e) {
                    ln(t, e) || this.$emit("tag-state", t.valid, t.invalid, t.duplicate)
                }
            },
            created: function () {
                this.tags = $a(this.value)
            },
            mounted: function () {
                this.handleAutofocus()
            },
            activated: function () {
                this.handleAutofocus()
            },
            methods: {
                addTag: function (t) {
                    if (t = rt(t) ? t : this.newTag, !this.disabled && "" !== qe(t)) {
                        var e = this.parseTags(t);
                        if (e.valid.length > 0 || 0 === e.all.length)
                            if (Jt(this.getInput(), "select")) this.newTag = "";
                            else {
                                var i = [].concat(v(e.invalid), v(e.duplicate));
                                this.newTag = e.all.filter((function (t) {
                                    return w(i, t)
                                })).join(this.computedJoiner).concat(i.length > 0 ? this.computedJoiner.charAt(0) : "")
                            } e.valid.length > 0 && (this.tags = B(this.tags, e.valid)), this.tagsState = e, this.focus()
                    }
                },
                removeTag: function (t) {
                    this.disabled || (this.tags = this.tags.filter((function (e) {
                        return e !== t
                    })), this.focus())
                },
                onInputInput: function (t) {
                    if (!(this.disabled || st(t) && t.target.composing)) {
                        var e = _a(t),
                            i = this.computedSeparatorRegExp;
                        this.newTag !== e && (this.newTag = e), e = Ue(e).replace(Re, ""), i && i.test(e.slice(-1)) ? this.addTag() : this.tagsState = "" === e ? {
                            all: [],
                            valid: [],
                            invalid: [],
                            duplicate: []
                        } : this.parseTags(e)
                    }
                },
                onInputChange: function (t) {
                    if (!this.disabled && this.addOnChange) {
                        var e = _a(t);
                        this.newTag !== e && (this.newTag = e), this.addTag()
                    }
                },
                onInputKeydown: function (t) {
                    if (!this.disabled && st(t)) {
                        var e = t.keyCode,
                            i = t.target.value || "";
                        this.noAddOnEnter || e !== Ni.ENTER ? this.removeOnDelete && e === Ni.BACKSPACE && "" === i && (t.preventDefault(), this.tags.pop()) : (t.preventDefault(), this.addTag())
                    }
                },
                onClick: function (t) {
                    !this.disabled && st(t) && t.target === t.currentTarget && this.$nextTick(this.focus)
                },
                onFocusin: function () {
                    this.hasFocus = !0
                },
                onFocusout: function () {
                    this.hasFocus = !1
                },
                handleAutofocus: function () {
                    var t = this;
                    this.$nextTick((function () {
                        zt((function () {
                            t.autofocus && !t.disabled && t.focus()
                        }))
                    }))
                },
                focus: function () {
                    if (!this.disabled) try {
                        this.getInput().focus()
                    } catch (t) {}
                },
                blur: function () {
                    try {
                        this.getInput().blur()
                    } catch (t) {}
                },
                splitTags: function (t) {
                    t = Ue(t);
                    var e = this.computedSeparatorRegExp;
                    return (e ? t.split(e) : [t]).map(qe).filter(dt)
                },
                parseTags: function (t) {
                    var e = this,
                        i = this.splitTags(t),
                        n = {
                            all: i,
                            valid: [],
                            invalid: [],
                            duplicate: []
                        };
                    return i.forEach((function (t) {
                        w(e.tags, t) || w(n.valid, t) ? w(n.duplicate, t) || n.duplicate.push(t) : e.validateTag(t) ? n.valid.push(t) : w(n.invalid, t) || n.invalid.push(t)
                    })), n
                },
                validateTag: function (t) {
                    var e = this.tagValidator;
                    return !it(e) || e(t)
                },
                getInput: function () {
                    return Zt("#".concat(this.computedInputId), this.$el)
                },
                defaultRender: function (t) {
                    var e = t.tags,
                        i = t.addTag,
                        n = t.removeTag,
                        r = t.inputType,
                        o = t.inputAttrs,
                        a = t.inputHandlers,
                        l = t.inputClass,
                        u = t.tagClass,
                        c = t.tagVariant,
                        d = t.tagPills,
                        h = t.tagRemoveLabel,
                        f = t.invalidTagText,
                        p = t.duplicateTagText,
                        m = t.isInvalid,
                        g = (t.invalidTags, t.isDuplicate),
                        v = (t.duplicateTags, t.disabled),
                        b = t.placeholder,
                        y = t.addButtonText,
                        S = t.addButtonVariant,
                        T = t.disableAddButton,
                        w = this.$createElement,
                        k = e.map((function (t, e) {
                            return t = Ue(t), w(Ba, {
                                key: "li-tag__".concat(t),
                                staticClass: "mt-1 mr-1",
                                class: u,
                                props: {
                                    tag: "li",
                                    title: t,
                                    disabled: v,
                                    variant: c,
                                    pill: d,
                                    removeLabel: h
                                },
                                on: {
                                    remove: function () {
                                        return n(t)
                                    }
                                }
                            }, t)
                        })),
                        C = f && m ? this.safeId("__invalid_feedback__") : null,
                        x = p && g ? this.safeId("__duplicate_feedback__") : null,
                        $ = [o["aria-describedby"], C, x].filter(dt).join(" "),
                        _ = w("input", {
                            ref: "input",
                            directives: [{
                                name: "model",
                                value: o.value
                            }],
                            staticClass: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                            class: l,
                            style: {
                                outline: 0,
                                minWidth: "5rem"
                            },
                            attrs: s({}, o, {
                                "aria-describedby": $ || null,
                                type: r,
                                placeholder: b || null
                            }),
                            domProps: {
                                value: o.value
                            },
                            on: a
                        }),
                        P = w(Ei, {
                            ref: "button",
                            staticClass: "b-form-tags-button py-0",
                            class: {
                                invisible: T
                            },
                            style: {
                                fontSize: "90%"
                            },
                            props: {
                                variant: S,
                                disabled: T
                            },
                            on: {
                                click: function () {
                                    return i()
                                }
                            }
                        }, [this.normalizeSlot("add-button-text") || y]),
                        O = this.safeId("__TAG__LIST__"),
                        I = w("li", {
                            key: "__li-input__",
                            staticClass: "d-inline-flex flex-grow-1 mt-1",
                            attrs: {
                                role: "group",
                                "aria-live": "off",
                                "aria-controls": O
                            }
                        }, [_, P]),
                        E = w("ul", {
                            key: "_tags_list_",
                            staticClass: "list-unstyled mt-n1 mb-0 d-flex flex-wrap align-items-center",
                            attrs: {
                                id: O,
                                "aria-live": "polite",
                                "aria-atomic": "false",
                                "aria-relevant": "additions removals"
                            }
                        }, B(k, I)),
                        F = w();
                    if (f || p) {
                        var V = this.computedJoiner,
                            A = w();
                        C && (A = w(Wo, {
                            key: "_tags_invalid_feedback_",
                            props: {
                                id: C,
                                forceShow: !0
                            }
                        }, [this.invalidTagText, ": ", this.invalidTags.join(V)]));
                        var D = w();
                        x && (D = w(jo, {
                            key: "_tags_duplicate_feedback_",
                            props: {
                                id: x
                            }
                        }, [this.duplicateTagText, ": ", this.duplicateTags.join(V)])), F = w("div", {
                            key: "_tags_feedback_",
                            attrs: {
                                "aria-live": "polite",
                                "aria-atomic": "true"
                            }
                        }, [A, D])
                    }
                    return [E, F]
                }
            },
            render: function (t) {
                var e = this,
                    i = {
                        tags: this.tags.slice(),
                        removeTag: this.removeTag,
                        addTag: this.addTag,
                        inputType: this.computedInputType,
                        inputAttrs: this.computedInputAttrs,
                        inputHandlers: this.computedInputHandlers,
                        inputId: this.computedInputId,
                        invalidTags: this.invalidTags.slice(),
                        isInvalid: this.hasInvalidTags,
                        duplicateTags: this.duplicateTags.slice(),
                        isDuplicate: this.hasDuplicateTags,
                        disableAddButton: this.disableAddButton,
                        state: this.state,
                        separator: this.separator,
                        disabled: this.disabled,
                        size: this.size,
                        placeholder: this.placeholder,
                        inputClass: this.inputClass,
                        tagRemoveLabel: this.tagRemoveLabel,
                        tagVariant: this.tagVariant,
                        tagPills: this.tagPills,
                        tagClass: this.tagClass,
                        addButtonText: this.addButtonText,
                        addButtonVariant: this.addButtonVariant,
                        invalidTagText: this.invalidTagText,
                        duplicateTagText: this.duplicateTagText
                    },
                    n = this.normalizeSlot("default", i) || this.defaultRender(i),
                    r = t();
                return this.name && !this.disabled && (r = this.tags.map((function (i) {
                    return t("input", {
                        key: i,
                        attrs: {
                            type: "hidden",
                            value: i,
                            name: e.name,
                            form: e.form || null
                        }
                    })
                }))), t("div", {
                    staticClass: "b-form-tags form-control h-auto",
                    class: o({
                        focus: this.hasFocus && !this.noOuterFocus && !this.disabled,
                        disabled: this.disabled,
                        "is-valid": !0 === this.state,
                        "is-invalid": !1 === this.state
                    }, "form-control-".concat(this.size), this.size),
                    attrs: {
                        id: this.safeId(),
                        role: "group",
                        tabindex: this.disabled || this.noOuterFocus ? null : "-1"
                    },
                    on: {
                        focusin: this.onFocusin,
                        focusout: this.onFocusout,
                        click: this.onClick
                    }
                }, B(n, r))
            }
        }),
        Oa = Bt({
            components: {
                BFormTags: Pa,
                BTags: Pa,
                BFormTag: Ba,
                BTag: Ba
            }
        }),
        Ia = {
            model: {
                prop: "value",
                event: "update"
            },
            props: {
                value: {
                    type: [String, Number],
                    default: ""
                },
                ariaInvalid: {
                    type: [Boolean, String],
                    default: !1
                },
                readonly: {
                    type: Boolean,
                    default: !1
                },
                plaintext: {
                    type: Boolean,
                    default: !1
                },
                autocomplete: {
                    type: String,
                    default: null
                },
                placeholder: {
                    type: String,
                    default: null
                },
                formatter: {
                    type: Function,
                    default: null
                },
                lazyFormatter: {
                    type: Boolean,
                    default: !1
                },
                trim: {
                    type: Boolean,
                    default: !1
                },
                number: {
                    type: Boolean,
                    default: !1
                },
                lazy: {
                    type: Boolean,
                    default: !1
                },
                debounce: {
                    type: [Number, String],
                    default: 0
                }
            },
            data: function () {
                return {
                    localValue: Ue(this.value),
                    vModelValue: this.value
                }
            },
            computed: {
                computedDebounce: function () {
                    return Math.max(pe(this.debounce) || 0, 0)
                },
                computedClass: function () {
                    return [{
                        "custom-range": "range" === this.type,
                        "form-control-plaintext": this.plaintext && "range" !== this.type && "color" !== this.type,
                        "form-control": !this.plaintext && "range" !== this.type || "color" === this.type
                    }, this.sizeFormClass, this.stateClass]
                },
                computedAriaInvalid: function () {
                    return this.ariaInvalid && "false" !== this.ariaInvalid ? !0 === this.ariaInvalid ? "true" : this.ariaInvalid : !1 === this.computedState ? "true" : null
                }
            },
            watch: {
                value: function (t) {
                    var e = Ue(t);
                    e !== this.localValue && t !== this.vModelValue && (this.clearDebounce(), this.localValue = e, this.vModelValue = t)
                }
            },
            mounted: function () {
                this.$_inputDebounceTimer = null, this.$on("hook:beforeDestroy", this.clearDebounce);
                var t = this.value,
                    e = Ue(t);
                e !== this.localValue && t !== this.vModelValue && (this.localValue = e, this.vModelValue = t)
            },
            methods: {
                clearDebounce: function () {
                    clearTimeout(this.$_inputDebounceTimer), this.$_inputDebounceTimer = null
                },
                formatValue: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return t = Ue(t), this.lazyFormatter && !i || !it(this.formatter) || (t = this.formatter(t, e)), t
                },
                modifyValue: function (t) {
                    if (this.trim && (t = t.trim()), this.number) {
                        var e = me(t);
                        t = isNaN(e) ? t : e
                    }
                    return t
                },
                updateValue: function (t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = this.lazy,
                        r = this.computedDebounce;
                    if ((!n || i) && (t = this.modifyValue(t)) !== this.vModelValue) {
                        this.clearDebounce();
                        var o = function () {
                            e.vModelValue = t, e.$emit("update", t)
                        };
                        r > 0 && !n && !i ? this.$_inputDebounceTimer = setTimeout(o, r) : o()
                    }
                },
                onInput: function (t) {
                    if (!t.target.composing) {
                        var e = t.target.value,
                            i = this.formatValue(e, t);
                        !1 === i || t.defaultPrevented ? t.preventDefault() : (this.localValue = i, this.updateValue(i), this.$emit("input", i))
                    }
                },
                onChange: function (t) {
                    if (!t.target.composing) {
                        var e = t.target.value,
                            i = this.formatValue(e, t);
                        !1 === i || t.defaultPrevented ? t.preventDefault() : (this.localValue = i, this.updateValue(i, !0), this.$emit("change", i))
                    }
                },
                onBlur: function (t) {
                    var e = t.target.value,
                        i = this.formatValue(e, t, !0);
                    !1 !== i && (this.localValue = Ue(this.modifyValue(i)), this.updateValue(i, !0)), this.$emit("blur", t)
                },
                focus: function () {
                    this.disabled || this.$el.focus()
                },
                blur: function () {
                    this.disabled || this.$el.blur()
                }
            }
        },
        Ea = {
            computed: {
                selectionStart: {
                    cache: !1,
                    get: function () {
                        return this.$refs.input.selectionStart
                    },
                    set: function (t) {
                        this.$refs.input.selectionStart = t
                    }
                },
                selectionEnd: {
                    cache: !1,
                    get: function () {
                        return this.$refs.input.selectionEnd
                    },
                    set: function (t) {
                        this.$refs.input.selectionEnd = t
                    }
                },
                selectionDirection: {
                    cache: !1,
                    get: function () {
                        return this.$refs.input.selectionDirection
                    },
                    set: function (t) {
                        this.$refs.input.selectionDirection = t
                    }
                }
            },
            methods: {
                select: function () {
                    var t;
                    (t = this.$refs.input).select.apply(t, arguments)
                },
                setSelectionRange: function () {
                    var t;
                    (t = this.$refs.input).setSelectionRange.apply(t, arguments)
                },
                setRangeText: function () {
                    var t;
                    (t = this.$refs.input).setRangeText.apply(t, arguments)
                }
            }
        },
        Fa = {
            computed: {
                validity: {
                    cache: !1,
                    get: function () {
                        return this.$refs.input.validity
                    }
                },
                validationMessage: {
                    cache: !1,
                    get: function () {
                        return this.$refs.input.validationMessage
                    }
                },
                willValidate: {
                    cache: !1,
                    get: function () {
                        return this.$refs.input.willValidate
                    }
                }
            },
            methods: {
                setCustomValidity: function () {
                    var t;
                    return (t = this.$refs.input).setCustomValidity.apply(t, arguments)
                },
                checkValidity: function () {
                    var t;
                    return (t = this.$refs.input).checkValidity.apply(t, arguments)
                },
                reportValidity: function () {
                    var t;
                    return (t = this.$refs.input).reportValidity.apply(t, arguments)
                }
            }
        },
        Va = ["text", "password", "email", "number", "url", "tel", "search", "range", "color", "date", "time", "datetime", "datetime-local", "month", "week"],
        Aa = t.extend({
            name: "BFormInput",
            mixins: [xn, ha, pa, Zo, Ia, Ea, Fa],
            props: {
                type: {
                    type: String,
                    default: "text",
                    validator: function (t) {
                        return w(Va, t)
                    }
                },
                noWheel: {
                    type: Boolean,
                    default: !1
                },
                min: {
                    type: [String, Number],
                    default: null
                },
                max: {
                    type: [String, Number],
                    default: null
                },
                step: {
                    type: [String, Number],
                    default: null
                },
                list: {
                    type: String,
                    default: null
                }
            },
            computed: {
                localType: function () {
                    return w(Va, this.type) ? this.type : "text"
                }
            },
            watch: {
                noWheel: function (t) {
                    this.setWheelStopper(t)
                }
            },
            mounted: function () {
                this.setWheelStopper(this.noWheel)
            },
            deactivated: function () {
                this.setWheelStopper(!1)
            },
            activated: function () {
                this.setWheelStopper(this.noWheel)
            },
            beforeDestroy: function () {
                this.setWheelStopper(!1)
            },
            methods: {
                setWheelStopper: function (t) {
                    var e = this.$el;
                    t ? (Gt(e, "focus", this.onWheelFocus), Gt(e, "blur", this.onWheelBlur)) : (Wt(e, "focus", this.onWheelFocus), Wt(e, "blur", this.onWheelBlur), Wt(document, "wheel", this.stopWheel))
                },
                onWheelFocus: function (t) {
                    Gt(document, "wheel", this.stopWheel)
                },
                onWheelBlur: function (t) {
                    Wt(document, "wheel", this.stopWheel)
                },
                stopWheel: function (t) {
                    t.preventDefault(), this.$el.blur()
                }
            },
            render: function (t) {
                return t("input", {
                    ref: "input",
                    class: this.computedClass,
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: this.localValue,
                        expression: "localValue"
                    }],
                    attrs: {
                        id: this.safeId(),
                        name: this.name,
                        form: this.form || null,
                        type: this.localType,
                        disabled: this.disabled,
                        placeholder: this.placeholder,
                        required: this.required,
                        autocomplete: this.autocomplete || null,
                        readonly: this.readonly || this.plaintext,
                        min: this.min,
                        max: this.max,
                        step: this.step,
                        list: "password" !== this.localType ? this.list : null,
                        "aria-required": this.required ? "true" : null,
                        "aria-invalid": this.computedAriaInvalid
                    },
                    domProps: {
                        value: this.localValue
                    },
                    on: s({}, this.$listeners, {
                        input: this.onInput,
                        change: this.onChange,
                        blur: this.onBlur
                    })
                })
            }
        }),
        Da = Bt({
            components: {
                BFormInput: Aa,
                BInput: Aa
            }
        }),
        Na = t.extend({
            name: "BFormTextarea",
            directives: {
                "b-visible": pn
            },
            mixins: [xn, An, ha, pa, Zo, Ia, Ea, Fa],
            props: {
                rows: {
                    type: [Number, String],
                    default: 2
                },
                maxRows: {
                    type: [Number, String],
                    default: null
                },
                wrap: {
                    type: String,
                    default: "soft"
                },
                noResize: {
                    type: Boolean,
                    default: !1
                },
                noAutoShrink: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function () {
                return {
                    heightInPx: null
                }
            },
            computed: {
                computedStyle: function () {
                    var t = {
                        resize: !this.computedRows || this.noResize ? "none" : null
                    };
                    return this.computedRows || (t.height = this.heightInPx, t.overflowY = "scroll"), t
                },
                computedMinRows: function () {
                    return Math.max(parseInt(this.rows, 10) || 2, 2)
                },
                computedMaxRows: function () {
                    return Math.max(this.computedMinRows, parseInt(this.maxRows, 10) || 0)
                },
                computedRows: function () {
                    return this.computedMinRows === this.computedMaxRows ? this.computedMinRows : null
                }
            },
            watch: {
                localValue: function (t, e) {
                    this.setHeight()
                }
            },
            mounted: function () {
                this.setHeight()
            },
            methods: {
                visibleCallback: function (t) {
                    t && this.$nextTick(this.setHeight)
                },
                setHeight: function () {
                    var t = this;
                    this.$nextTick((function () {
                        zt((function () {
                            t.heightInPx = t.computeHeight()
                        }))
                    }))
                },
                computeHeight: function () {
                    if (this.$isServer || !tt(this.computedRows)) return null;
                    var t = this.$el;
                    if (!qt(t)) return null;
                    var e = ce(t),
                        i = parseFloat(e.lineHeight),
                        n = (parseFloat(e.borderTopWidth) || 0) + (parseFloat(e.borderBottomWidth) || 0),
                        r = (parseFloat(e.paddingTop) || 0) + (parseFloat(e.paddingBottom) || 0),
                        o = n + r,
                        a = i * this.computedMinRows + o,
                        s = t.style.height || e.height;
                    t.style.height = "auto";
                    var l = t.scrollHeight;
                    t.style.height = s;
                    var u = Math.max((l - r) / i, 2),
                        c = Math.min(Math.max(u, this.computedMinRows), this.computedMaxRows),
                        d = Math.max(Math.ceil(c * i + o), a);
                    return this.noAutoShrink && (parseFloat(s) || 0) > d ? s : "".concat(d, "px")
                }
            },
            render: function (t) {
                return t("textarea", {
                    ref: "input",
                    class: this.computedClass,
                    style: this.computedStyle,
                    directives: [{
                        name: "model",
                        value: this.localValue
                    }, {
                        name: "b-visible",
                        value: this.visibleCallback,
                        modifiers: {
                            640: !0
                        }
                    }],
                    attrs: {
                        id: this.safeId(),
                        name: this.name,
                        form: this.form || null,
                        disabled: this.disabled,
                        placeholder: this.placeholder,
                        required: this.required,
                        autocomplete: this.autocomplete || null,
                        readonly: this.readonly || this.plaintext,
                        rows: this.computedRows,
                        wrap: this.wrap || null,
                        "aria-required": this.required ? "true" : null,
                        "aria-invalid": this.computedAriaInvalid
                    },
                    domProps: {
                        value: this.localValue
                    },
                    on: s({}, this.$listeners, {
                        input: this.onInput,
                        change: this.onChange,
                        blur: this.onBlur
                    })
                })
            }
        }),
        Ra = Bt({
            components: {
                BFormTextarea: Na,
                BTextarea: Na
            }
        }),
        La = {
            props: {
                plain: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                custom: function () {
                    return !this.plain
                }
            }
        },
        Ha = "BFormFile",
        za = t.extend({
            name: Ha,
            mixins: [xn, ha, Zo, La, Pe],
            inheritAttrs: !1,
            model: {
                prop: "value",
                event: "input"
            },
            props: {
                size: {
                    type: String,
                    default: function () {
                        return Et("BFormControl", "size")
                    }
                },
                value: {
                    type: [Z, Array],
                    default: null,
                    validator: function (t) {
                        return "" === t ? (pt('Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.', Ha), !0) : et(t) || lt(t) || T(t) && (0 === t.length || t.every(lt))
                    }
                },
                accept: {
                    type: String,
                    default: ""
                },
                capture: {
                    type: Boolean,
                    default: !1
                },
                placeholder: {
                    type: String,
                    default: function () {
                        return Et(Ha, "placeholder")
                    }
                },
                browseText: {
                    type: String,
                    default: function () {
                        return Et(Ha, "browseText")
                    }
                },
                dropPlaceholder: {
                    type: String,
                    default: function () {
                        return Et(Ha, "dropPlaceholder")
                    }
                },
                multiple: {
                    type: Boolean,
                    default: !1
                },
                directory: {
                    type: Boolean,
                    default: !1
                },
                noTraverse: {
                    type: Boolean,
                    default: !1
                },
                noDrop: {
                    type: Boolean,
                    default: !1
                },
                fileNameFormatter: {
                    type: Function,
                    default: null
                }
            },
            data: function () {
                return {
                    selectedFile: null,
                    dragging: !1,
                    hasFocus: !1
                }
            },
            computed: {
                selectLabel: function () {
                    if (this.dragging && this.dropPlaceholder) return this.dropPlaceholder;
                    if (!this.selectedFile || 0 === this.selectedFile.length) return this.placeholder;
                    var t = B(this.selectedFile).filter(dt);
                    return this.hasNormalizedSlot("file-name") ? [this.normalizeSlot("file-name", {
                        files: t,
                        names: t.map((function (t) {
                            return t.name
                        }))
                    })] : it(this.fileNameFormatter) ? Ue(this.fileNameFormatter(t)) : t.map((function (t) {
                        return t.name
                    })).join(", ")
                }
            },
            watch: {
                selectedFile: function (t, e) {
                    t === e || T(t) && T(e) && t.length === e.length && t.every((function (t, i) {
                        return t === e[i]
                    })) || (!t && this.multiple ? this.$emit("input", []) : this.$emit("input", t))
                },
                value: function (t) {
                    (!t || T(t) && 0 === t.length) && this.reset()
                }
            },
            methods: {
                focusHandler: function (t) {
                    this.plain || "focusout" === t.type ? this.hasFocus = !1 : this.hasFocus = !0
                },
                reset: function () {
                    try {
                        this.$refs.input.value = ""
                    } catch (t) {}
                    this.$refs.input.type = "", this.$refs.input.type = "file", this.selectedFile = this.multiple ? [] : null
                },
                onFileChange: function (t) {
                    var e = this;
                    this.$emit("change", t);
                    var i = t.dataTransfer && t.dataTransfer.items;
                    if (!i || this.noTraverse) this.setFiles(t.target.files || t.dataTransfer.files);
                    else {
                        for (var n = [], r = 0; r < i.length; r++) {
                            var o = i[r].webkitGetAsEntry();
                            o && n.push(this.traverseFileTree(o))
                        }
                        Promise.all(n).then((function (t) {
                            e.setFiles(S(t))
                        }))
                    }
                },
                setFiles: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    if (t)
                        if (this.multiple) {
                            for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
                            this.selectedFile = e
                        } else this.selectedFile = t[0] || null;
                    else this.selectedFile = null
                },
                onReset: function () {
                    this.selectedFile = this.multiple ? [] : null
                },
                onDragover: function (t) {
                    t.preventDefault(), t.stopPropagation(), !this.noDrop && this.custom && (this.dragging = !0, t.dataTransfer.dropEffect = "copy")
                },
                onDragleave: function (t) {
                    t.preventDefault(), t.stopPropagation(), this.dragging = !1
                },
                onDrop: function (t) {
                    t.preventDefault(), t.stopPropagation(), this.noDrop || (this.dragging = !1, t.dataTransfer.files && t.dataTransfer.files.length > 0 && this.onFileChange(t))
                },
                traverseFileTree: function (t, e) {
                    var i = this;
                    return new Promise((function (n) {
                        e = e || "", t.isFile ? t.file((function (t) {
                            t.$path = e, n(t)
                        })) : t.isDirectory && t.createReader().readEntries((function (r) {
                            for (var o = [], a = 0; a < r.length; a++) o.push(i.traverseFileTree(r[a], e + t.name + "/"));
                            Promise.all(o).then((function (t) {
                                n(S(t))
                            }))
                        }))
                    }))
                }
            },
            render: function (t) {
                var e = t("input", {
                    ref: "input",
                    class: [{
                        "form-control-file": this.plain,
                        "custom-file-input": this.custom,
                        focus: this.custom && this.hasFocus
                    }, this.stateClass],
                    attrs: s({}, this.$attrs, {
                        type: "file",
                        id: this.safeId(),
                        name: this.name,
                        disabled: this.disabled,
                        required: this.required,
                        form: this.form || null,
                        capture: this.capture || null,
                        accept: this.accept || null,
                        multiple: this.multiple,
                        webkitdirectory: this.directory,
                        "aria-required": this.required ? "true" : null
                    }),
                    on: {
                        change: this.onFileChange,
                        focusin: this.focusHandler,
                        focusout: this.focusHandler,
                        reset: this.onReset
                    }
                });
                if (this.plain) return e;
                var i = t("label", {
                    staticClass: "custom-file-label",
                    class: [this.dragging ? "dragging" : null],
                    attrs: {
                        for: this.safeId(),
                        "data-browse": this.browseText || null
                    }
                }, this.selectLabel);
                return t("div", {
                    staticClass: "custom-file b-form-file",
                    class: [this.stateClass, o({}, "b-custom-control-".concat(this.size), this.size)],
                    attrs: {
                        id: this.safeId("_BV_file_outer_")
                    },
                    on: {
                        dragover: this.onDragover,
                        dragleave: this.onDragleave,
                        drop: this.onDrop
                    }
                }, [e, i])
            }
        }),
        Ma = Bt({
            components: {
                BFormFile: za,
                BFile: za
            }
        }),
        ja = {
            mixins: [Ho],
            props: {
                labelField: {
                    type: String,
                    default: "label"
                },
                optionsField: {
                    type: String,
                    default: "options"
                }
            },
            methods: {
                normalizeOption: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (F(t)) {
                        var i = ft(t, this.valueField),
                            n = ft(t, this.textField),
                            r = ft(t, this.optionsField);
                        return T(r) ? {
                            label: String(ft(t, this.labelField) || n),
                            options: r
                        } : {
                            value: Q(i) ? e || n : i,
                            text: String(Q(n) ? e : n),
                            html: ft(t, this.htmlField),
                            disabled: Boolean(ft(t, this.disabledField))
                        }
                    }
                    return {
                        value: e || t,
                        text: String(t),
                        disabled: !1
                    }
                }
            }
        },
        Ga = {
            value: {
                required: !0
            },
            disabled: {
                type: Boolean,
                default: !1
            }
        },
        Wa = t.extend({
            name: "BFormSelectOption",
            functional: !0,
            props: Ga,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = i.value;
                return t("option", Be(n, {
                    attrs: {
                        disabled: i.disabled
                    },
                    domProps: {
                        value: o
                    }
                }), r)
            }
        }),
        Ua = t.extend({
            name: "BFormSelectOptionGroup",
            mixins: [Pe, Ho],
            props: {
                label: {
                    type: String,
                    required: !0
                }
            },
            render: function (t) {
                return t("optgroup", {
                    attrs: {
                        label: this.label
                    }
                }, [this.normalizeSlot("first"), this.formOptions.map((function (e, i) {
                    return t(Wa, {
                        props: {
                            value: e.value,
                            disabled: e.disabled
                        },
                        domProps: pi(e.html, e.text),
                        key: "option_".concat(i, "_opt")
                    })
                })), this.normalizeSlot("default")])
            }
        }),
        qa = t.extend({
            name: "BFormSelect",
            mixins: [xn, Pe, ha, pa, Zo, La, ja],
            model: {
                prop: "value",
                event: "input"
            },
            props: {
                value: {},
                multiple: {
                    type: Boolean,
                    default: !1
                },
                selectSize: {
                    type: Number,
                    default: 0
                },
                ariaInvalid: {
                    type: [Boolean, String],
                    default: !1
                }
            },
            data: function () {
                return {
                    localValue: this.value
                }
            },
            computed: {
                computedSelectSize: function () {
                    return this.plain || 0 !== this.selectSize ? this.selectSize : null
                },
                inputClass: function () {
                    return [this.plain ? "form-control" : "custom-select", this.size && this.plain ? "form-control-".concat(this.size) : null, this.size && !this.plain ? "custom-select-".concat(this.size) : null, this.stateClass]
                },
                computedAriaInvalid: function () {
                    return !0 === this.ariaInvalid || "true" === this.ariaInvalid ? "true" : "is-invalid" === this.stateClass ? "true" : null
                }
            },
            watch: {
                value: function (t, e) {
                    this.localValue = t
                },
                localValue: function (t, e) {
                    this.$emit("input", this.localValue)
                }
            },
            methods: {
                focus: function () {
                    this.$refs.input.focus()
                },
                blur: function () {
                    this.$refs.input.blur()
                }
            },
            render: function (t) {
                var e = this;
                return t("select", {
                    ref: "input",
                    class: this.inputClass,
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: this.localValue,
                        expression: "localValue"
                    }],
                    attrs: {
                        id: this.safeId(),
                        name: this.name,
                        form: this.form || null,
                        multiple: this.multiple || null,
                        size: this.computedSelectSize,
                        disabled: this.disabled,
                        required: this.required,
                        "aria-required": this.required ? "true" : null,
                        "aria-invalid": this.computedAriaInvalid
                    },
                    on: {
                        change: function (t) {
                            var i = t.target,
                                n = S(i.options).filter((function (t) {
                                    return t.selected
                                })).map((function (t) {
                                    return "_value" in t ? t._value : t.value
                                }));
                            e.localValue = i.multiple ? n : n[0], e.$nextTick((function () {
                                e.$emit("change", e.localValue)
                            }))
                        }
                    }
                }, [this.normalizeSlot("first"), this.formOptions.map((function (e, i) {
                    var n = "option_".concat(i, "_opt"),
                        r = e.options;
                    return T(r) ? t(Ua, {
                        props: {
                            label: e.label,
                            options: r
                        },
                        key: n
                    }) : t(Wa, {
                        props: {
                            value: e.value,
                            disabled: e.disabled
                        },
                        domProps: pi(e.html, e.text),
                        key: n
                    })
                })), this.normalizeSlot("default")])
            }
        }),
        Ka = Bt({
            components: {
                BFormSelect: qa,
                BFormSelectOption: Wa,
                BFormSelectOptionGroup: Ua,
                BSelect: qa,
                BSelectOption: Wa,
                BSelectOptionGroup: Ua
            }
        }),
        Xa = Bt({
            components: {
                BImg: vn,
                BImgLazy: yn
            }
        }),
        Ya = {
            tag: {
                type: String,
                default: "div"
            }
        },
        Za = t.extend({
            name: "BInputGroupText",
            functional: !0,
            props: Ya,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.tag, Be(n, {
                    staticClass: "input-group-text"
                }), r)
            }
        }),
        Ja = {
            id: {
                type: String,
                default: null
            },
            tag: {
                type: String,
                default: "div"
            },
            isText: {
                type: Boolean,
                default: !1
            }
        },
        Qa = t.extend({
            name: "BInputGroupAddon",
            functional: !0,
            props: s({}, Ja, {
                append: {
                    type: Boolean,
                    default: !1
                }
            }),
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.tag, Be(n, {
                    class: {
                        "input-group-append": i.append, "input-group-prepend": !i.append
                    },
                    attrs: {
                        id: i.id
                    }
                }), i.isText ? [t(Za, r)] : r)
            }
        }),
        ts = t.extend({
            name: "BInputGroupPrepend",
            functional: !0,
            props: Ja,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(Qa, Be(n, {
                    props: s({}, i, {
                        append: !1
                    })
                }), r)
            }
        }),
        es = t.extend({
            name: "BInputGroupAppend",
            functional: !0,
            props: Ja,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(Qa, Be(n, {
                    props: s({}, i, {
                        append: !0
                    })
                }), r)
            }
        }),
        is = {
            id: {
                type: String
            },
            size: {
                type: String,
                default: function () {
                    return Et("BInputGroup", "size")
                }
            },
            prepend: {
                type: String
            },
            prependHtml: {
                type: String
            },
            append: {
                type: String
            },
            appendHtml: {
                type: String
            },
            tag: {
                type: String,
                default: "div"
            }
        },
        ns = Bt({
            components: {
                BInputGroup: t.extend({
                    name: "BInputGroup",
                    functional: !0,
                    props: is,
                    render: function (t, e) {
                        var i = e.props,
                            n = e.data,
                            r = e.slots,
                            a = e.scopedSlots,
                            s = r(),
                            l = a || {},
                            u = [];
                        return i.prepend || i.prependHtml || $e("prepend", l, s) ? u.push(t(ts, [i.prepend || i.prependHtml ? t(Za, {
                            domProps: pi(i.prependHtml, i.prepend)
                        }) : t(), _e("prepend", {}, l, s) || t()])) : u.push(t()), $e("default", l, s) ? u.push.apply(u, v(_e("default", {}, l, s))) : u.push(t()), i.append || i.appendHtml || $e("append", l, s) ? u.push(t(es, [i.append || i.appendHtml ? t(Za, {
                            domProps: pi(i.appendHtml, i.append)
                        }) : t(), _e("append", {}, l, s) || t()])) : u.push(t()), t(i.tag, Be(n, {
                            staticClass: "input-group",
                            class: o({}, "input-group-".concat(i.size), i.size),
                            attrs: {
                                id: i.id || null,
                                role: "group"
                            }
                        }), u)
                    }
                }),
                BInputGroupAddon: Qa,
                BInputGroupPrepend: ts,
                BInputGroupAppend: es,
                BInputGroupText: Za
            }
        }),
        rs = {
            tag: {
                type: String,
                default: "div"
            },
            fluid: {
                type: [Boolean, String],
                default: !1
            }
        },
        os = t.extend({
            name: "BContainer",
            functional: !0,
            props: rs,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.tag, Be(n, {
                    class: o({
                        container: !(i.fluid || "" === i.fluid),
                        "container-fluid": !0 === i.fluid || "" === i.fluid
                    }, "container-".concat(i.fluid), i.fluid && !0 !== i.fluid)
                }), r)
            }
        }),
        as = "BJumbotron",
        ss = {
            fluid: {
                type: Boolean,
                default: !1
            },
            containerFluid: {
                type: [Boolean, String],
                default: !1
            },
            header: {
                type: String,
                default: null
            },
            headerHtml: {
                type: String,
                default: null
            },
            headerTag: {
                type: String,
                default: "h1"
            },
            headerLevel: {
                type: [Number, String],
                default: "3"
            },
            lead: {
                type: String,
                default: null
            },
            leadHtml: {
                type: String,
                default: null
            },
            leadTag: {
                type: String,
                default: "p"
            },
            tag: {
                type: String,
                default: "div"
            },
            bgVariant: {
                type: String,
                default: function () {
                    return Et(as, "bgVariant")
                }
            },
            borderVariant: {
                type: String,
                default: function () {
                    return Et(as, "borderVariant")
                }
            },
            textVariant: {
                type: String,
                default: function () {
                    return Et(as, "textVariant")
                }
            }
        },
        ls = Bt({
            components: {
                BJumbotron: t.extend({
                    name: as,
                    functional: !0,
                    props: ss,
                    render: function (t, e) {
                        var i, n = e.props,
                            r = e.data,
                            a = e.slots,
                            s = e.scopedSlots,
                            l = [],
                            u = a(),
                            c = s || {};
                        return (n.header || $e("header", c, u) || n.headerHtml) && l.push(t(n.headerTag, {
                            class: o({}, "display-".concat(n.headerLevel), n.headerLevel)
                        }, _e("header", {}, c, u) || n.headerHtml || fi(n.header))), (n.lead || $e("lead", c, u) || n.leadHtml) && l.push(t(n.leadTag, {
                            staticClass: "lead"
                        }, _e("lead", {}, c, u) || n.leadHtml || fi(n.lead))), $e("default", c, u) && l.push(_e("default", {}, c, u)), n.fluid && (l = [t(os, {
                            props: {
                                fluid: n.containerFluid
                            }
                        }, l)]), t(n.tag, Be(r, {
                            staticClass: "jumbotron",
                            class: (i = {
                                "jumbotron-fluid": n.fluid
                            }, o(i, "text-".concat(n.textVariant), n.textVariant), o(i, "bg-".concat(n.bgVariant), n.bgVariant), o(i, "border-".concat(n.borderVariant), n.borderVariant), o(i, "border", n.borderVariant), i)
                        }), l)
                    }
                })
            }
        }),
        us = ["start", "end", "center"],
        cs = Pt((function (t, e) {
            return (e = qe(Ue(e))) ? Ke(["row-cols", t, e].filter(dt).join("-")) : null
        })),
        ds = Pt((function (t) {
            return Ke(t.replace("cols", ""))
        })),
        hs = [],
        fs = function () {
            var t = At().reduce((function (t, e) {
                return t[Jo(e, "cols")] = {
                    type: [String, Number],
                    default: null
                }, t
            }), C(null));
            return hs = O(t), s({
                tag: {
                    type: String,
                    default: "div"
                },
                noGutters: {
                    type: Boolean,
                    default: !1
                },
                alignV: {
                    type: String,
                    default: null,
                    validator: function (t) {
                        return w(us.concat(["baseline", "stretch"]), t)
                    }
                },
                alignH: {
                    type: String,
                    default: null,
                    validator: function (t) {
                        return w(us.concat(["between", "around"]), t)
                    }
                },
                alignContent: {
                    type: String,
                    default: null,
                    validator: function (t) {
                        return w(us.concat(["between", "around", "stretch"]), t)
                    }
                }
            }, t)
        },
        ps = Bt({
            components: {
                BContainer: os,
                BRow: {
                    name: "BRow",
                    functional: !0,
                    get props() {
                        return delete this.props, this.props = fs(), this.props
                    },
                    render: function (t, e) {
                        var i, n = e.props,
                            r = e.data,
                            a = e.children,
                            s = [];
                        return hs.forEach((function (t) {
                            var e = cs(ds(t), n[t]);
                            e && s.push(e)
                        })), s.push((o(i = {
                            "no-gutters": n.noGutters
                        }, "align-items-".concat(n.alignV), n.alignV), o(i, "justify-content-".concat(n.alignH), n.alignH), o(i, "align-content-".concat(n.alignContent), n.alignContent), i)), t(n.tag, Be(r, {
                            staticClass: "row",
                            class: s
                        }), a)
                    }
                },
                BCol: ra,
                BFormRow: Xo
            }
        }),
        ms = Bt({
            components: {
                BLink: si
            }
        }),
        gs = {
            tag: {
                type: String,
                default: "div"
            },
            flush: {
                type: Boolean,
                default: !1
            },
            horizontal: {
                type: [Boolean, String],
                default: !1
            }
        },
        vs = t.extend({
            name: "BListGroup",
            functional: !0,
            props: gs,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    a = "" === i.horizontal || i.horizontal;
                a = !i.flush && a;
                var s = {
                    staticClass: "list-group",
                    class: o({
                        "list-group-flush": i.flush,
                        "list-group-horizontal": !0 === a
                    }, "list-group-horizontal-".concat(a), rt(a))
                };
                return t(i.tag, Be(n, s), r)
            }
        }),
        bs = ["a", "router-link", "button", "b-link"],
        ys = ai();
    delete ys.href.default, delete ys.to.default;
    var Ss = s({
            tag: {
                type: String,
                default: "div"
            },
            action: {
                type: Boolean,
                default: null
            },
            button: {
                type: Boolean,
                default: null
            },
            variant: {
                type: String,
                default: function () {
                    return Et("BListGroupItem", "variant")
                }
            }
        }, ys),
        Ts = Bt({
            components: {
                BListGroup: vs,
                BListGroupItem: t.extend({
                    name: "BListGroupItem",
                    functional: !0,
                    props: Ss,
                    render: function (t, e) {
                        var i, n = e.props,
                            r = e.data,
                            a = e.children,
                            s = n.button ? "button" : n.href || n.to ? si : n.tag,
                            l = Boolean(n.href || n.to || n.action || n.button || w(bs, n.tag)),
                            u = {},
                            c = {};
                        return "button" === s ? (r.attrs && r.attrs.type || (u.type = "button"), n.disabled && (u.disabled = !0)) : c = Ne(ys, n), t(s, Be(r, {
                            attrs: u,
                            props: c,
                            staticClass: "list-group-item",
                            class: (i = {}, o(i, "list-group-item-".concat(n.variant), n.variant), o(i, "list-group-item-action", l), o(i, "active", n.active), o(i, "disabled", n.disabled), i)
                        }), a)
                    }
                })
            }
        }),
        ws = {
            tag: {
                type: String,
                default: "div"
            }
        },
        Bs = t.extend({
            name: "BMediaBody",
            functional: !0,
            props: ws,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children;
                return t(i.tag, Be(n, {
                    staticClass: "media-body"
                }), r)
            }
        }),
        ks = {
            tag: {
                type: String,
                default: "div"
            },
            verticalAlign: {
                type: String,
                default: "top"
            }
        },
        Cs = t.extend({
            name: "BMediaAside",
            functional: !0,
            props: ks,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    a = "top" === i.verticalAlign ? "start" : "bottom" === i.verticalAlign ? "end" : i.verticalAlign;
                return t(i.tag, Be(n, {
                    staticClass: "d-flex",
                    class: o({}, "align-self-".concat(a), a)
                }), r)
            }
        }),
        xs = {
            tag: {
                type: String,
                default: "div"
            },
            rightAlign: {
                type: Boolean,
                default: !1
            },
            verticalAlign: {
                type: String,
                default: "top"
            },
            noBody: {
                type: Boolean,
                default: !1
            }
        },
        $s = Bt({
            components: {
                BMedia: t.extend({
                    name: "BMedia",
                    functional: !0,
                    props: xs,
                    render: function (t, e) {
                        var i = e.props,
                            n = e.data,
                            r = e.slots,
                            o = e.scopedSlots,
                            a = e.children,
                            s = i.noBody ? a : [];
                        if (!i.noBody) {
                            var l = r(),
                                u = o || {},
                                c = _e("aside", {}, u, l),
                                d = _e("default", {}, u, l);
                            c && !i.rightAlign && s.push(t(Cs, {
                                staticClass: "mr-3",
                                props: {
                                    verticalAlign: i.verticalAlign
                                }
                            }, c)), s.push(t(Bs, {}, d)), c && i.rightAlign && s.push(t(Cs, {
                                staticClass: "ml-3",
                                props: {
                                    verticalAlign: i.verticalAlign
                                }
                            }, c))
                        }
                        return t(i.tag, Be(n, {
                            staticClass: "media"
                        }), s)
                    }
                }),
                BMediaAside: Cs,
                BMediaBody: Bs
            }
        }),
        _s = t.extend({
            abstract: !0,
            name: "BTransporterTargetSingle",
            props: {
                nodes: {
                    type: [Array, Function]
                }
            },
            data: function (t) {
                return {
                    updatedNodes: t.nodes
                }
            },
            destroyed: function () {
                var t;
                (t = this.$el) && t.parentNode && t.parentNode.removeChild(t)
            },
            render: function (t) {
                var e = it(this.updatedNodes) ? this.updatedNodes({}) : this.updatedNodes;
                return (e = B(e).filter(Boolean)) && e.length > 0 && !e[0].text ? e[0] : t()
            }
        }),
        Ps = t.extend({
            name: "BTransporterSingle",
            mixins: [Pe],
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                container: {
                    type: [String, HTMLElement],
                    default: "body"
                },
                tag: {
                    type: String,
                    default: "div"
                }
            },
            watch: {
                disabled: {
                    immediate: !0,
                    handler: function (t) {
                        t ? this.unmountTarget() : this.$nextTick(this.mountTarget)
                    }
                }
            },
            created: function () {
                this._bv_defaultFn = null, this._bv_target = null
            },
            beforeMount: function () {
                this.mountTarget()
            },
            updated: function () {
                this.updateTarget()
            },
            beforeDestroy: function () {
                this.unmountTarget(), this._bv_defaultFn = null
            },
            methods: {
                getContainer: function () {
                    if (z) {
                        var t = this.container;
                        return rt(t) ? Zt(t) : t
                    }
                    return null
                },
                mountTarget: function () {
                    if (!this._bv_target) {
                        var t = this.getContainer();
                        if (t) {
                            var e = document.createElement("div");
                            t.appendChild(e), this._bv_target = new _s({
                                el: e,
                                parent: this,
                                propsData: {
                                    nodes: B(this.normalizeSlot("default"))
                                }
                            })
                        }
                    }
                },
                updateTarget: function () {
                    if (z && this._bv_target) {
                        var t = this.$scopedSlots.default;
                        this.disabled || (t && this._bv_defaultFn !== t ? this._bv_target.updatedNodes = t : t || (this._bv_target.updatedNodes = this.$slots.default)), this._bv_defaultFn = t
                    }
                },
                unmountTarget: function () {
                    this._bv_target && (this._bv_target.$destroy(), this._bv_target = null)
                }
            },
            render: function (t) {
                if (this.disabled) {
                    var e = B(this.normalizeSlot("default")).filter(dt);
                    if (e.length > 0 && !e[0].text) return e[0]
                }
                return t()
            }
        }),
        Os = {
            passive: !0,
            capture: !1
        },
        Is = "$_bv_documentHandlers_",
        Es = {
            created: function () {
                var t = this;
                z && (this[Is] = {}, this.$once("hook:beforeDestroy", (function () {
                    var e = t[Is] || {};
                    delete t[Is], O(e).forEach((function (t) {
                        (e[t] || []).forEach((function (e) {
                            return Wt(document, t, e, Os)
                        }))
                    }))
                })))
            },
            methods: {
                listenDocument: function (t, e, i) {
                    t ? this.listenOnDocument(e, i) : this.listenOffDocument(e, i)
                },
                listenOnDocument: function (t, e) {
                    this[Is] && rt(t) && it(e) && (this[Is][t] = this[Is][t] || [], w(this[Is][t], e) || (this[Is][t].push(e), Gt(document, t, e, Os)))
                },
                listenOffDocument: function (t, e) {
                    this[Is] && rt(t) && it(e) && (Wt(document, t, e, Os), this[Is][t] = (this[Is][t] || []).filter((function (t) {
                        return t !== e
                    })))
                }
            }
        },
        Fs = {
            passive: !0,
            capture: !1
        },
        Vs = "$_bv_windowHandlers_",
        As = {
            beforeCreate: function () {
                this[Vs] = {}
            },
            beforeDestroy: function () {
                if (z) {
                    var t = this[Vs];
                    delete this[Vs], O(t).forEach((function (e) {
                        (t[e] || []).forEach((function (t) {
                            return Wt(window, e, t, Fs)
                        }))
                    }))
                }
            },
            methods: {
                listenWindow: function (t, e, i) {
                    t ? this.listenOnWindow(e, i) : this.listenOffWindow(e, i)
                },
                listenOnWindow: function (t, e) {
                    z && this[Vs] && rt(t) && it(e) && (this[Vs][t] = this[Vs][t] || [], w(this[Vs][t], e) || (this[Vs][t].push(e), Gt(window, t, e, Fs)))
                },
                listenOffWindow: function (t, e) {
                    z && this[Vs] && rt(t) && it(e) && (Wt(window, t, e, Fs), this[Vs][t] = (this[Vs][t] || []).filter((function (t) {
                        return t !== e
                    })))
                }
            }
        },
        Ds = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return t && t.$options._scopeId || e
        },
        Ns = {
            computed: {
                scopedStyleAttrs: function () {
                    var t = Ds(this.$parent);
                    return t ? o({}, t, "") : {}
                }
            }
        },
        Rs = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ls = ".sticky-top",
        Hs = ".navbar-toggler",
        zs = new(t.extend({
            data: function () {
                return {
                    modals: [],
                    baseZIndex: null,
                    scrollbarWidth: null,
                    isBodyOverflowing: !1
                }
            },
            computed: {
                modalCount: function () {
                    return this.modals.length
                },
                modalsAreOpen: function () {
                    return this.modalCount > 0
                }
            },
            watch: {
                modalCount: function (t, e) {
                    z && (this.getScrollbarWidth(), t > 0 && 0 === e ? (this.checkScrollbar(), this.setScrollbar(), ie(document.body, "modal-open")) : 0 === t && e > 0 && (this.resetScrollbar(), ne(document.body, "modal-open")), oe(document.body, "data-modal-open-count", String(t)))
                },
                modals: function (t, e) {
                    var i = this;
                    this.checkScrollbar(), zt((function () {
                        i.updateModals(t || [])
                    }))
                }
            },
            methods: {
                registerModal: function (t) {
                    var e = this;
                    t && -1 === this.modals.indexOf(t) && (this.modals.push(t), t.$once("hook:beforeDestroy", (function () {
                        e.unregisterModal(t)
                    })))
                },
                unregisterModal: function (t) {
                    var e = this.modals.indexOf(t);
                    e > -1 && (this.modals.splice(e, 1), t._isBeingDestroyed || t._isDestroyed || this.resetModal(t))
                },
                getBaseZIndex: function () {
                    if (tt(this.baseZIndex) && z) {
                        var t = document.createElement("div");
                        t.className = "modal-backdrop d-none", t.style.display = "none", document.body.appendChild(t), this.baseZIndex = pe(ce(t).zIndex || 1040), document.body.removeChild(t)
                    }
                    return this.baseZIndex || 1040
                },
                getScrollbarWidth: function () {
                    if (tt(this.scrollbarWidth) && z) {
                        var t = document.createElement("div");
                        t.className = "modal-scrollbar-measure", document.body.appendChild(t), this.scrollbarWidth = ue(t).width - t.clientWidth, document.body.removeChild(t)
                    }
                    return this.scrollbarWidth || 0
                },
                updateModals: function (t) {
                    var e = this,
                        i = this.getBaseZIndex(),
                        n = this.getScrollbarWidth();
                    t.forEach((function (t, r) {
                        t.zIndex = i + r, t.scrollbarWidth = n, t.isTop = r === e.modals.length - 1, t.isBodyOverflowing = e.isBodyOverflowing
                    }))
                },
                resetModal: function (t) {
                    t && (t.zIndex = this.getBaseZIndex(), t.isTop = !0, t.isBodyOverflowing = !1)
                },
                checkScrollbar: function () {
                    var t = ue(document.body),
                        e = t.left,
                        i = t.right;
                    this.isBodyOverflowing = e + i < window.innerWidth
                },
                setScrollbar: function () {
                    var t = document.body;
                    if (t._paddingChangedForModal = t._paddingChangedForModal || [], t._marginChangedForModal = t._marginChangedForModal || [], this.isBodyOverflowing) {
                        var e = this.scrollbarWidth;
                        Yt(Rs).forEach((function (i) {
                            var n = i.style.paddingRight,
                                r = ce(i).paddingRight || 0;
                            oe(i, "data-padding-right", n), i.style.paddingRight = "".concat(me(r) + e, "px"), t._paddingChangedForModal.push(i)
                        })), Yt(Ls).forEach((function (i) {
                            var n = i.style.marginRight,
                                r = ce(i).marginRight || 0;
                            oe(i, "data-margin-right", n), i.style.marginRight = "".concat(me(r) - e, "px"), t._marginChangedForModal.push(i)
                        })), Yt(Hs).forEach((function (i) {
                            var n = i.style.marginRight,
                                r = ce(i).marginRight || 0;
                            oe(i, "data-margin-right", n), i.style.marginRight = "".concat(me(r) + e, "px"), t._marginChangedForModal.push(i)
                        }));
                        var i = t.style.paddingRight,
                            n = ce(t).paddingRight;
                        oe(t, "data-padding-right", i), t.style.paddingRight = "".concat(me(n) + e, "px")
                    }
                },
                resetScrollbar: function () {
                    var t = document.body;
                    t._paddingChangedForModal && t._paddingChangedForModal.forEach((function (t) {
                        le(t, "data-padding-right") && (t.style.paddingRight = se(t, "data-padding-right") || "", ae(t, "data-padding-right"))
                    })), t._marginChangedForModal && t._marginChangedForModal.forEach((function (t) {
                        le(t, "data-margin-right") && (t.style.marginRight = se(t, "data-margin-right") || "", ae(t, "data-margin-right"))
                    })), t._paddingChangedForModal = null, t._marginChangedForModal = null, le(t, "data-padding-right") && (t.style.paddingRight = se(t, "data-padding-right") || "", ae(t, "data-padding-right"))
                }
            }
        })),
        BvModalEvent = function (t) {
            function BvModalEvent(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return i(this, BvModalEvent), e = m(this, u(BvModalEvent).call(this, t, n)), x(p(e), {
                    trigger: {
                        enumerable: !0,
                        configurable: !1,
                        writable: !1
                    }
                }), e
            }
            return l(BvModalEvent, t), r(BvModalEvent, null, [{
                key: "Defaults",
                get: function () {
                    return s({}, g(u(BvModalEvent), "Defaults", this), {
                        trigger: null
                    })
                }
            }]), BvModalEvent
        }(BvEvent),
        Ms = "BModal",
        js = {
            subtree: !0,
            childList: !0,
            characterData: !0,
            attributes: !0,
            attributeFilter: ["style", "class"]
        },
        Gs = {
            passive: !0,
            capture: !1
        },
        Ws = ["button", "[href]:not(.disabled)", "input", "select", "textarea", "[tabindex]", "[contenteditable]"].map((function (t) {
            return "".concat(t, ":not(:disabled):not([disabled])")
        })).join(", "),
        Us = function (t) {
            if (t && qt(t) && t.focus) try {
                t.focus()
            } catch (t) {}
            return document.activeElement === t
        },
        qs = {
            size: {
                type: String,
                default: function () {
                    return Et(Ms, "size")
                }
            },
            centered: {
                type: Boolean,
                default: !1
            },
            scrollable: {
                type: Boolean,
                default: !1
            },
            buttonSize: {
                type: String,
                default: ""
            },
            noStacking: {
                type: Boolean,
                default: !1
            },
            noFade: {
                type: Boolean,
                default: !1
            },
            noCloseOnBackdrop: {
                type: Boolean,
                default: !1
            },
            noCloseOnEsc: {
                type: Boolean,
                default: !1
            },
            noEnforceFocus: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            titleHtml: {
                type: String
            },
            titleTag: {
                type: String,
                default: function () {
                    return Et(Ms, "titleTag")
                }
            },
            titleClass: {
                type: [String, Array, Object],
                default: null
            },
            titleSrOnly: {
                type: Boolean,
                default: !1
            },
            ariaLabel: {
                type: String,
                default: null
            },
            headerBgVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "headerBgVariant")
                }
            },
            headerBorderVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "headerBorderVariant")
                }
            },
            headerTextVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "headerTextVariant")
                }
            },
            headerCloseVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "headerCloseVariant")
                }
            },
            headerClass: {
                type: [String, Array, Object],
                default: null
            },
            bodyBgVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "bodyBgVariant")
                }
            },
            bodyTextVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "bodyTextVariant")
                }
            },
            modalClass: {
                type: [String, Array, Object],
                default: null
            },
            dialogClass: {
                type: [String, Array, Object],
                default: null
            },
            contentClass: {
                type: [String, Array, Object],
                default: null
            },
            bodyClass: {
                type: [String, Array, Object],
                default: null
            },
            footerBgVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "footerBgVariant")
                }
            },
            footerBorderVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "footerBorderVariant")
                }
            },
            footerTextVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "footerTextVariant")
                }
            },
            footerClass: {
                type: [String, Array, Object],
                default: null
            },
            hideHeader: {
                type: Boolean,
                default: !1
            },
            hideFooter: {
                type: Boolean,
                default: !1
            },
            hideHeaderClose: {
                type: Boolean,
                default: !1
            },
            hideBackdrop: {
                type: Boolean,
                default: !1
            },
            okOnly: {
                type: Boolean,
                default: !1
            },
            okDisabled: {
                type: Boolean,
                default: !1
            },
            cancelDisabled: {
                type: Boolean,
                default: !1
            },
            visible: {
                type: Boolean,
                default: !1
            },
            returnFocus: {
                type: [HTMLElement, String, Object],
                default: null
            },
            headerCloseContent: {
                type: String,
                default: function () {
                    return Et(Ms, "headerCloseContent")
                }
            },
            headerCloseLabel: {
                type: String,
                default: function () {
                    return Et(Ms, "headerCloseLabel")
                }
            },
            cancelTitle: {
                type: String,
                default: function () {
                    return Et(Ms, "cancelTitle")
                }
            },
            cancelTitleHtml: {
                type: String
            },
            okTitle: {
                type: String,
                default: function () {
                    return Et(Ms, "okTitle")
                }
            },
            okTitleHtml: {
                type: String
            },
            cancelVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "cancelVariant")
                }
            },
            okVariant: {
                type: String,
                default: function () {
                    return Et(Ms, "okVariant")
                }
            },
            lazy: {
                type: Boolean,
                default: !1
            },
            busy: {
                type: Boolean,
                default: !1
            },
            static: {
                type: Boolean,
                default: !1
            },
            autoFocusButton: {
                type: String,
                default: null,
                validator: function (t) {
                    return et(t) || w(["ok", "cancel", "close"], t)
                }
            }
        },
        Ks = t.extend({
            name: Ms,
            mixins: [xn, Es, An, As, Pe, Ns],
            inheritAttrs: !1,
            model: {
                prop: "visible",
                event: "change"
            },
            props: qs,
            data: function () {
                return {
                    isHidden: !0,
                    isVisible: !1,
                    isTransitioning: !1,
                    isShow: !1,
                    isBlock: !1,
                    isOpening: !1,
                    isClosing: !1,
                    ignoreBackdropClick: !1,
                    isModalOverflowing: !1,
                    return_focus: this.returnFocus || null,
                    scrollbarWidth: 0,
                    zIndex: zs.getBaseZIndex(),
                    isTop: !0,
                    isBodyOverflowing: !1
                }
            },
            computed: {
                modalClasses: function () {
                    return [{
                        fade: !this.noFade,
                        show: this.isShow
                    }, this.modalClass]
                },
                modalStyles: function () {
                    var t = "".concat(this.scrollbarWidth, "px");
                    return {
                        paddingLeft: !this.isBodyOverflowing && this.isModalOverflowing ? t : "",
                        paddingRight: this.isBodyOverflowing && !this.isModalOverflowing ? t : "",
                        display: this.isBlock ? "block" : "none"
                    }
                },
                dialogClasses: function () {
                    var t;
                    return [(t = {}, o(t, "modal-".concat(this.size), this.size), o(t, "modal-dialog-centered", this.centered), o(t, "modal-dialog-scrollable", this.scrollable), t), this.dialogClass]
                },
                headerClasses: function () {
                    var t;
                    return [(t = {}, o(t, "bg-".concat(this.headerBgVariant), this.headerBgVariant), o(t, "text-".concat(this.headerTextVariant), this.headerTextVariant), o(t, "border-".concat(this.headerBorderVariant), this.headerBorderVariant), t), this.headerClass]
                },
                titleClasses: function () {
                    return [{
                        "sr-only": this.titleSrOnly
                    }, this.titleClass]
                },
                bodyClasses: function () {
                    var t;
                    return [(t = {}, o(t, "bg-".concat(this.bodyBgVariant), this.bodyBgVariant), o(t, "text-".concat(this.bodyTextVariant), this.bodyTextVariant), t), this.bodyClass]
                },
                footerClasses: function () {
                    var t;
                    return [(t = {}, o(t, "bg-".concat(this.footerBgVariant), this.footerBgVariant), o(t, "text-".concat(this.footerTextVariant), this.footerTextVariant), o(t, "border-".concat(this.footerBorderVariant), this.footerBorderVariant), t), this.footerClass]
                },
                modalOuterStyle: function () {
                    return {
                        position: "absolute",
                        zIndex: this.zIndex
                    }
                },
                slotScope: function () {
                    return {
                        ok: this.onOk,
                        cancel: this.onCancel,
                        close: this.onClose,
                        hide: this.hide,
                        visible: this.isVisible
                    }
                }
            },
            watch: {
                visible: function (t, e) {
                    t !== e && this[t ? "show" : "hide"]()
                }
            },
            created: function () {
                this._observer = null
            },
            mounted: function () {
                this.zIndex = zs.getBaseZIndex(), this.listenOnRoot("bv::show::modal", this.showHandler), this.listenOnRoot("bv::hide::modal", this.hideHandler), this.listenOnRoot("bv::toggle::modal", this.toggleHandler), this.listenOnRoot("bv::modal::show", this.modalListener), !0 === this.visible && this.$nextTick(this.show)
            },
            beforeDestroy: function () {
                this._observer && (this._observer.disconnect(), this._observer = null), this.isVisible && (this.isVisible = !1, this.isShow = !1, this.isTransitioning = !1)
            },
            methods: {
                updateModel: function (t) {
                    t !== this.visible && this.$emit("change", t)
                },
                buildEvent: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new BvModalEvent(t, s({
                        cancelable: !1,
                        target: this.$refs.modal || this.$el || null,
                        relatedTarget: null,
                        trigger: null
                    }, e, {
                        vueTarget: this,
                        componentId: this.safeId()
                    }))
                },
                show: function () {
                    if (!this.isVisible && !this.isOpening)
                        if (this.isClosing) this.$once("hidden", this.show);
                        else {
                            this.isOpening = !0, this.return_focus = this.return_focus || this.getActiveElement();
                            var t = this.buildEvent("show", {
                                cancelable: !0
                            });
                            if (this.emitEvent(t), t.defaultPrevented || this.isVisible) return this.isOpening = !1, void this.updateModel(!1);
                            this.doShow()
                        }
                },
                hide: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (this.isVisible && !this.isClosing) {
                        this.isClosing = !0;
                        var e = this.buildEvent("hide", {
                            cancelable: "FORCE" !== t,
                            trigger: t || null
                        });
                        if ("ok" === t ? this.$emit("ok", e) : "cancel" === t ? this.$emit("cancel", e) : "headerclose" === t && this.$emit("close", e), this.emitEvent(e), e.defaultPrevented || !this.isVisible) return this.isClosing = !1, void this.updateModel(!0);
                        this._observer && (this._observer.disconnect(), this._observer = null), this.isVisible = !1, this.updateModel(!1)
                    }
                },
                toggle: function (t) {
                    t && (this.return_focus = t), this.isVisible ? this.hide("toggle") : this.show()
                },
                getActiveElement: function () {
                    if (z) {
                        var t = document.activeElement;
                        if (t && t !== document.body && t.focus) return t
                    }
                    return null
                },
                getTabables: function () {
                    return Yt(Ws, this.$refs.content).filter(qt).filter((function (t) {
                        return t.tabIndex > -1 && !t.disabled
                    }))
                },
                doShow: function () {
                    var t = this;
                    zs.modalsAreOpen && this.noStacking ? this.listenOnRootOnce("bv::modal::hidden", this.doShow) : (zs.registerModal(this), this.isHidden = !1, this.$nextTick((function () {
                        t.isVisible = !0, t.isOpening = !1, t.updateModel(!0), t.$nextTick((function () {
                            t._observer = Cn(t.$refs.content, t.checkModalOverflow.bind(t), js)
                        }))
                    })))
                },
                onBeforeEnter: function () {
                    this.isTransitioning = !0, this.setResizeEvent(!0)
                },
                onEnter: function () {
                    this.isBlock = !0
                },
                onAfterEnter: function () {
                    var t = this;
                    this.checkModalOverflow(), this.isShow = !0, this.isTransitioning = !1, zt((function () {
                        t.emitEvent(t.buildEvent("shown")), t.setEnforceFocus(!0), t.$nextTick((function () {
                            t.focusFirst()
                        }))
                    }))
                },
                onBeforeLeave: function () {
                    this.isTransitioning = !0, this.setResizeEvent(!1), this.setEnforceFocus(!1)
                },
                onLeave: function () {
                    this.isShow = !1
                },
                onAfterLeave: function () {
                    var t = this;
                    this.isBlock = !1, this.isTransitioning = !1, this.isModalOverflowing = !1, this.isHidden = !0, this.$nextTick((function () {
                        t.isClosing = !1, zs.unregisterModal(t), t.returnFocusTo(), t.emitEvent(t.buildEvent("hidden"))
                    }))
                },
                emitEvent: function (t) {
                    var e = t.type;
                    this.emitOnRoot("bv::modal::".concat(e), t, t.componentId), this.$emit(e, t)
                },
                onDialogMousedown: function () {
                    var t = this,
                        e = this.$refs.modal;
                    Gt(e, "mouseup", (function i(n) {
                        Wt(e, "mouseup", i, Gs), n.target === e && (t.ignoreBackdropClick = !0)
                    }), Gs)
                },
                onClickOut: function (t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : this.isVisible && !this.noCloseOnBackdrop && te(document.body, t.target) && (te(this.$refs.content, t.target) || this.hide("backdrop"))
                },
                onOk: function () {
                    this.hide("ok")
                },
                onCancel: function () {
                    this.hide("cancel")
                },
                onClose: function () {
                    this.hide("headerclose")
                },
                onEsc: function (t) {
                    t.keyCode === Ni.ESC && this.isVisible && !this.noCloseOnEsc && this.hide("esc")
                },
                focusHandler: function (t) {
                    var e = this.$refs.content,
                        i = t.target;
                    if (!this.noEnforceFocus && this.isTop && this.isVisible && e && document !== i && !te(e, i)) {
                        var n = this.getTabables();
                        if (this.$refs.bottomTrap && i === this.$refs.bottomTrap) {
                            if (Us(n[0])) return
                        } else if (this.$refs.topTrap && i === this.$refs.topTrap && Us(n[n.length - 1])) return;
                        e.focus({
                            preventScroll: !0
                        })
                    }
                },
                setEnforceFocus: function (t) {
                    this.listenDocument(t, "focusin", this.focusHandler)
                },
                setResizeEvent: function (t) {
                    this.listenWindow(t, "resize", this.checkModalOverflow), this.listenWindow(t, "orientationchange", this.checkModalOverflow)
                },
                showHandler: function (t, e) {
                    t === this.safeId() && (this.return_focus = e || this.getActiveElement(), this.show())
                },
                hideHandler: function (t) {
                    t === this.safeId() && this.hide("event")
                },
                toggleHandler: function (t, e) {
                    t === this.safeId() && this.toggle(e)
                },
                modalListener: function (t) {
                    this.noStacking && t.vueTarget !== this && this.hide()
                },
                focusFirst: function () {
                    var t = this;
                    z && zt((function () {
                        var e = t.$refs.modal,
                            i = t.$refs.content,
                            n = t.getActiveElement();
                        if (e && i && (!n || !te(i, n))) {
                            var r = t.$refs["ok-button"],
                                o = t.$refs["cancel-button"],
                                a = t.$refs["close-button"],
                                s = t.autoFocusButton,
                                l = "ok" === s && r ? r.$el || r : "cancel" === s && o ? o.$el || o : "close" === s && a ? a.$el || a : i;
                            Us(l), l === i && t.$nextTick((function () {
                                e.scrollTop = 0
                            }))
                        }
                    }))
                },
                returnFocusTo: function () {
                    var t = this.returnFocus || this.return_focus || null;
                    this.return_focus = null, this.$nextTick((function () {
                        (t = rt(t) ? Zt(t) : t) && (t = t.$el || t, Us(t))
                    }))
                },
                checkModalOverflow: function () {
                    if (this.isVisible) {
                        var t = this.$refs.modal;
                        this.isModalOverflowing = t.scrollHeight > document.documentElement.clientHeight
                    }
                },
                makeModal: function (t) {
                    var e = t();
                    if (!this.hideHeader) {
                        var i = this.normalizeSlot("modal-header", this.slotScope);
                        if (!i) {
                            var n = t();
                            this.hideHeaderClose || (n = t(Ee, {
                                ref: "close-button",
                                props: {
                                    content: this.headerCloseContent,
                                    disabled: this.isTransitioning,
                                    ariaLabel: this.headerCloseLabel,
                                    textVariant: this.headerCloseVariant || this.headerTextVariant
                                },
                                on: {
                                    click: this.onClose
                                }
                            }, [this.normalizeSlot("modal-header-close")]));
                            var r = !this.hasNormalizedSlot("modal-title") && this.titleHtml ? {
                                innerHTML: this.titleHtml
                            } : {};
                            i = [t(this.titleTag, {
                                staticClass: "modal-title",
                                class: this.titleClasses,
                                attrs: {
                                    id: this.safeId("__BV_modal_title_")
                                },
                                domProps: r
                            }, [this.normalizeSlot("modal-title", this.slotScope) || fi(this.title)]), n]
                        }
                        e = t("header", {
                            ref: "header",
                            staticClass: "modal-header",
                            class: this.headerClasses,
                            attrs: {
                                id: this.safeId("__BV_modal_header_")
                            }
                        }, [i])
                    }
                    var o = t("div", {
                            ref: "body",
                            staticClass: "modal-body",
                            class: this.bodyClasses,
                            attrs: {
                                id: this.safeId("__BV_modal_body_")
                            }
                        }, this.normalizeSlot("default", this.slotScope)),
                        a = t();
                    if (!this.hideFooter) {
                        var l = this.normalizeSlot("modal-footer", this.slotScope);
                        if (!l) {
                            var u = t();
                            if (!this.okOnly) {
                                var c = this.cancelTitleHtml ? {
                                    innerHTML: this.cancelTitleHtml
                                } : null;
                                u = t(Ei, {
                                    ref: "cancel-button",
                                    props: {
                                        variant: this.cancelVariant,
                                        size: this.buttonSize,
                                        disabled: this.cancelDisabled || this.busy || this.isTransitioning
                                    },
                                    on: {
                                        click: this.onCancel
                                    }
                                }, [this.normalizeSlot("modal-cancel") || (c ? t("span", {
                                    domProps: c
                                }) : fi(this.cancelTitle))])
                            }
                            var d = this.okTitleHtml ? {
                                innerHTML: this.okTitleHtml
                            } : null;
                            l = [u, t(Ei, {
                                ref: "ok-button",
                                props: {
                                    variant: this.okVariant,
                                    size: this.buttonSize,
                                    disabled: this.okDisabled || this.busy || this.isTransitioning
                                },
                                on: {
                                    click: this.onOk
                                }
                            }, [this.normalizeSlot("modal-ok") || (d ? t("span", {
                                domProps: d
                            }) : fi(this.okTitle))])]
                        }
                        a = t("footer", {
                            ref: "footer",
                            staticClass: "modal-footer",
                            class: this.footerClasses,
                            attrs: {
                                id: this.safeId("__BV_modal_footer_")
                            }
                        }, [l])
                    }
                    var h = t("div", {
                            ref: "content",
                            staticClass: "modal-content",
                            class: this.contentClass,
                            attrs: {
                                role: "document",
                                id: this.safeId("__BV_modal_content_"),
                                tabindex: "-1"
                            }
                        }, [e, o, a]),
                        f = t(),
                        p = t();
                    this.isVisible && !this.noEnforceFocus && (f = t("span", {
                        ref: "topTrap",
                        attrs: {
                            tabindex: "0"
                        }
                    }), p = t("span", {
                        ref: "bottomTrap",
                        attrs: {
                            tabindex: "0"
                        }
                    }));
                    var m = t("div", {
                            ref: "dialog",
                            staticClass: "modal-dialog",
                            class: this.dialogClasses,
                            on: {
                                mousedown: this.onDialogMousedown
                            }
                        }, [f, h, p]),
                        g = t("div", {
                            ref: "modal",
                            staticClass: "modal",
                            class: this.modalClasses,
                            style: this.modalStyles,
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: this.isVisible,
                                expression: "isVisible"
                            }],
                            attrs: {
                                id: this.safeId(),
                                role: "dialog",
                                "aria-hidden": this.isVisible ? null : "true",
                                "aria-modal": this.isVisible ? "true" : null,
                                "aria-label": this.ariaLabel,
                                "aria-labelledby": this.hideHeader || this.ariaLabel || !(this.hasNormalizedSlot("modal-title") || this.titleHtml || this.title) ? null : this.safeId("__BV_modal_title_"),
                                "aria-describedby": this.safeId("__BV_modal_body_")
                            },
                            on: {
                                keydown: this.onEsc,
                                click: this.onClickOut
                            }
                        }, [m]);
                    g = t("transition", {
                        props: {
                            enterClass: "",
                            enterToClass: "",
                            enterActiveClass: "",
                            leaveClass: "",
                            leaveActiveClass: "",
                            leaveToClass: ""
                        },
                        on: {
                            beforeEnter: this.onBeforeEnter,
                            enter: this.onEnter,
                            afterEnter: this.onAfterEnter,
                            beforeLeave: this.onBeforeLeave,
                            leave: this.onLeave,
                            afterLeave: this.onAfterLeave
                        }
                    }, [g]);
                    var v = t();
                    !this.hideBackdrop && this.isVisible && (v = t("div", {
                        staticClass: "modal-backdrop",
                        attrs: {
                            id: this.safeId("__BV_modal_backdrop_")
                        }
                    }, [this.normalizeSlot("modal-backdrop")])), v = t(xe, {
                        props: {
                            noFade: this.noFade
                        }
                    }, [v]);
                    var b = this.static ? {} : this.scopedStyleAttrs;
                    return t("div", {
                        key: "modal-outer-".concat(this._uid),
                        style: this.modalOuterStyle,
                        attrs: s({}, b, {}, this.$attrs, {
                            id: this.safeId("__BV_modal_outer_")
                        })
                    }, [g, v])
                }
            },
            render: function (t) {
                return this.static ? this.lazy && this.isHidden ? t() : this.makeModal(t) : this.isHidden ? t() : t(Ps, {}, [this.makeModal(t)])
            }
        }),
        Xs = "__bv_modal_directive__",
        Ys = {
            passive: !0
        },
        Zs = function (t) {
            var e = t.modifiers,
                i = void 0 === e ? {} : e,
                n = t.arg,
                r = t.value;
            return rt(r) ? r : rt(n) ? n : O(i).reverse()[0]
        },
        Js = function (t) {
            return t && Jt(t, ".dropdown-menu > li, li.nav-item") && Zt("a, button", t) || t
        },
        Qs = function (t) {
            t && "BUTTON" !== t.tagName && (le(t, "role") || oe(t, "role", "button"), "A" === t.tagName || le(t, "tabindex") || oe(t, "tabindex", "0"))
        },
        tl = function (t) {
            var e = t[Xs] || {},
                i = e.trigger,
                n = e.handler;
            i && n && (Wt(i, "click", n, Ys), Wt(i, "keydown", n, Ys), Wt(t, "click", n, Ys), Wt(t, "keydown", n, Ys)), delete t[Xs]
        },
        el = function (t, e, i) {
            var n = t[Xs] || {},
                r = Zs(e),
                o = Js(t);
            r === n.target && o === n.trigger || (tl(t), function (t, e, i) {
                var n = Zs(e),
                    r = Js(t);
                if (n && r) {
                    var o = function (t) {
                        var e = t.currentTarget;
                        if (!Kt(e)) {
                            var r = t.type,
                                o = t.keyCode;
                            "click" !== r && ("keydown" !== r || o !== Ni.ENTER && o !== Ni.SPACE) || i.context.$root.$emit("bv::show::modal", n, e)
                        }
                    };
                    t[Xs] = {
                        handler: o,
                        target: n,
                        trigger: r
                    }, Qs(r), Gt(r, "click", o, Ys), "BUTTON" !== r.tagName && "button" === se(r, "role") && Gt(r, "keydown", o, Ys)
                }
            }(t, e, i)), Qs(o)
        },
        il = {
            inserted: el,
            updated: function () {},
            componentUpdated: el,
            unbind: tl
        },
        nl = ["id"].concat(v(O(A(qs, ["busy", "lazy", "noStacking", "static", "visible"])))),
        rl = function (t) {},
        ol = {
            msgBoxContent: "default",
            title: "modal-title",
            okTitle: "modal-ok",
            cancelTitle: "modal-cancel"
        },
        al = function (t) {
            return nl.reduce((function (e, i) {
                return Q(t[i]) || (e[i] = t[i]), e
            }), {})
        },
        sl = Bt({
            components: {
                BModal: Ks
            },
            directives: {
                VBModal: il
            },
            plugins: {
                BVModalPlugin: Bt({
                    plugins: {
                        plugin: function (t) {
                            var e = t.extend({
                                    name: "BMsgBox",
                                    extends: Ks,
                                    destroyed: function () {
                                        this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
                                    },
                                    mounted: function () {
                                        var t = this,
                                            e = function () {
                                                var e = t;
                                                t.$nextTick((function () {
                                                    setTimeout((function () {
                                                        return e.$destroy()
                                                    }), 0)
                                                }))
                                            };
                                        this.$parent.$once("hook:destroyed", e), this.$once("hidden", e), this.$router && this.$route && this.$once("hook:beforeDestroy", this.$watch("$router", e)), this.show()
                                    }
                                }),
                                n = function (t, i) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rl;
                                    if (!mt("$bvModal") && !gt("$bvModal")) {
                                        var r = new e({
                                            parent: t,
                                            propsData: s({}, al(Et("BModal") || {}), {
                                                hideHeaderClose: !0,
                                                hideHeader: !(i.title || i.titleHtml)
                                            }, A(i, O(ol)), {
                                                lazy: !1,
                                                busy: !1,
                                                visible: !1,
                                                noStacking: !1,
                                                noEnforceFocus: !1
                                            })
                                        });
                                        return O(ol).forEach((function (t) {
                                            Q(i[t]) || (r.$slots[ol[t]] = B(i[t]))
                                        })), new Promise((function (t, e) {
                                            var i = !1;
                                            r.$once("hook:destroyed", (function () {
                                                i || e(new Error("BootstrapVue MsgBox destroyed before resolve"))
                                            })), r.$on("hide", (function (e) {
                                                if (!e.defaultPrevented) {
                                                    var r = n(e);
                                                    e.defaultPrevented || (i = !0, t(r))
                                                }
                                            }));
                                            var o = document.createElement("div");
                                            document.body.appendChild(o), r.$mount(o)
                                        }))
                                    }
                                },
                                o = function (t, e) {
                                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        r = arguments.length > 3 ? arguments[3] : void 0;
                                    if (e && !gt("$bvModal") && !mt("$bvModal") && it(r)) return n(t, s({}, al(i), {
                                        msgBoxContent: e
                                    }), r)
                                },
                                a = function () {
                                    function t(e) {
                                        i(this, t), k(this, {
                                            _vm: e,
                                            _root: e.$root
                                        }), x(this, {
                                            _vm: {
                                                enumerable: !0,
                                                configurable: !1,
                                                writable: !1
                                            },
                                            _root: {
                                                enumerable: !0,
                                                configurable: !1,
                                                writable: !1
                                            }
                                        })
                                    }
                                    return r(t, [{
                                        key: "show",
                                        value: function (t) {
                                            if (t && this._root) {
                                                for (var e, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                                                (e = this._root).$emit.apply(e, ["bv::show::modal", t].concat(n))
                                            }
                                        }
                                    }, {
                                        key: "hide",
                                        value: function (t) {
                                            if (t && this._root) {
                                                for (var e, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                                                (e = this._root).$emit.apply(e, ["bv::hide::modal", t].concat(n))
                                            }
                                        }
                                    }, {
                                        key: "msgBoxOk",
                                        value: function (t) {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                i = s({}, e, {
                                                    okOnly: !0,
                                                    okDisabled: !1,
                                                    hideFooter: !1,
                                                    msgBoxContent: t
                                                });
                                            return o(this._vm, t, i, (function (t) {
                                                return !0
                                            }))
                                        }
                                    }, {
                                        key: "msgBoxConfirm",
                                        value: function (t) {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                i = s({}, e, {
                                                    okOnly: !1,
                                                    okDisabled: !1,
                                                    cancelDisabled: !1,
                                                    hideFooter: !1
                                                });
                                            return o(this._vm, t, i, (function (t) {
                                                var e = t.trigger;
                                                return "ok" === e || "cancel" !== e && null
                                            }))
                                        }
                                    }]), t
                                }();
                            t.mixin({
                                beforeCreate: function () {
                                    this._bv__modal = new a(this)
                                }
                            }), t.prototype.hasOwnProperty("$bvModal") || $(t.prototype, "$bvModal", {
                                get: function () {
                                    return this && this._bv__modal || pt('"'.concat("$bvModal", '" must be accessed from a Vue instance "this" context.'), "BModal"), this._bv__modal
                                }
                            })
                        }
                    }
                })
            }
        }),
        ll = {
            tag: {
                type: String,
                default: "ul"
            },
            fill: {
                type: Boolean,
                default: !1
            },
            justified: {
                type: Boolean,
                default: !1
            },
            align: {
                type: String,
                default: null
            },
            tabs: {
                type: Boolean,
                default: !1
            },
            pills: {
                type: Boolean,
                default: !1
            },
            vertical: {
                type: Boolean,
                default: !1
            },
            small: {
                type: Boolean,
                default: !1
            },
            cardHeader: {
                type: Boolean,
                default: !1
            }
        },
        ul = t.extend({
            name: "BNav",
            functional: !0,
            props: ll,
            render: function (t, e) {
                var i, n, r = e.props,
                    a = e.data,
                    s = e.children;
                return t(r.tag, Be(a, {
                    staticClass: "nav",
                    class: (i = {
                        "nav-tabs": r.tabs,
                        "nav-pills": r.pills && !r.tabs,
                        "card-header-tabs": !r.vertical && r.cardHeader && r.tabs,
                        "card-header-pills": !r.vertical && r.cardHeader && r.pills && !r.tabs,
                        "flex-column": r.vertical,
                        "nav-fill": !r.vertical && r.fill,
                        "nav-justified": !r.vertical && r.justified
                    }, o(i, (n = r.align, "justify-content-".concat(n = "left" === n ? "start" : "right" === n ? "end" : n)), !r.vertical && r.align), o(i, "small", r.small), i)
                }), s)
            }
        }),
        cl = ai(),
        dl = t.extend({
            name: "BNavItem",
            functional: !0,
            props: s({}, cl, {
                linkAttrs: {
                    type: Object,
                    default: function () {}
                },
                linkClasses: {
                    type: [String, Object, Array],
                    default: null
                }
            }),
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.listeners,
                    o = e.children;
                return delete n.on, t("li", Be(n, {
                    staticClass: "nav-item"
                }), [t(si, {
                    staticClass: "nav-link",
                    class: i.linkClasses,
                    attrs: i.linkAttrs,
                    props: i,
                    on: r
                }, o)])
            }
        }),
        hl = t.extend({
            name: "BNavText",
            functional: !0,
            props: {},
            render: function (t, e) {
                e.props;
                var i = e.data,
                    n = e.children;
                return t("li", Be(i, {
                    staticClass: "navbar-text"
                }), n)
            }
        }),
        fl = s({}, A(Io, ["inline"]), {
            formClass: {
                type: [String, Array, Object],
                default: null
            }
        }),
        pl = t.extend({
            name: "BNavForm",
            functional: !0,
            props: fl,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = e.listeners,
                    a = void 0 === o ? {} : o,
                    l = n.attrs;
                n.attrs = {}, n.on = {};
                var u = t(Eo, {
                    class: i.formClass,
                    props: s({}, i, {
                        inline: !0
                    }),
                    attrs: l,
                    on: a
                }, r);
                return t("li", Be(n, {
                    staticClass: "form-inline"
                }), [u])
            }
        }),
        ml = Ne(["menuClass", "toggleClass", "noCaret", "role"], To),
        gl = t.extend({
            name: "BNavItemDropdown",
            mixins: [xn, yo, Pe],
            props: ml,
            computed: {
                isNav: function () {
                    return !0
                },
                dropdownClasses: function () {
                    return [this.directionClass, {
                        show: this.visible
                    }]
                },
                menuClasses: function () {
                    return [this.menuClass, {
                        "dropdown-menu-right": this.right,
                        show: this.visible
                    }]
                },
                toggleClasses: function () {
                    return [this.toggleClass, {
                        "dropdown-toggle-no-caret": this.noCaret
                    }]
                }
            },
            render: function (t) {
                var e = t(si, {
                        ref: "toggle",
                        staticClass: "nav-link dropdown-toggle",
                        class: this.toggleClasses,
                        props: {
                            href: "#",
                            disabled: this.disabled
                        },
                        attrs: {
                            id: this.safeId("_BV_button_"),
                            "aria-haspopup": "true",
                            "aria-expanded": this.visible ? "true" : "false"
                        },
                        on: {
                            click: this.toggle,
                            keydown: this.toggle
                        }
                    }, [this.$slots["button-content"] || this.$slots.text || t("span", {
                        domProps: pi(this.html, this.text)
                    })]),
                    i = t("ul", {
                        staticClass: "dropdown-menu",
                        class: this.menuClasses,
                        ref: "menu",
                        attrs: {
                            tabindex: "-1",
                            "aria-labelledby": this.safeId("_BV_button_")
                        },
                        on: {
                            keydown: this.onKeydown
                        }
                    }, !this.lazy || this.visible ? this.normalizeSlot("default", {
                        hide: this.hide
                    }) : [t()]);
                return t("li", {
                    staticClass: "nav-item b-nav-dropdown dropdown",
                    class: this.dropdownClasses,
                    attrs: {
                        id: this.safeId()
                    }
                }, [e, i])
            }
        }),
        vl = Bt({
            components: {
                BNav: ul,
                BNavItem: dl,
                BNavText: hl,
                BNavForm: pl,
                BNavItemDropdown: gl,
                BNavItemDd: gl,
                BNavDropdown: gl,
                BNavDd: gl
            },
            plugins: {
                DropdownPlugin: No
            }
        }),
        bl = {
            tag: {
                type: String,
                default: "nav"
            },
            type: {
                type: String,
                default: "light"
            },
            variant: {
                type: String,
                default: function () {
                    return Et("BNavbar", "variant")
                }
            },
            toggleable: {
                type: [Boolean, String],
                default: !1
            },
            fixed: {
                type: String
            },
            sticky: {
                type: Boolean,
                default: !1
            },
            print: {
                type: Boolean,
                default: !1
            }
        },
        yl = t.extend({
            name: "BNavbar",
            functional: !0,
            props: bl,
            render: function (t, e) {
                var i, n = e.props,
                    r = e.data,
                    a = e.children,
                    s = "",
                    l = Ft()[0];
                return n.toggleable && rt(n.toggleable) && n.toggleable !== l ? s = "navbar-expand-".concat(n.toggleable) : !1 === n.toggleable && (s = "navbar-expand"), t(n.tag, Be(r, {
                    staticClass: "navbar",
                    class: (i = {
                        "d-print": n.print,
                        "sticky-top": n.sticky
                    }, o(i, "navbar-".concat(n.type), n.type), o(i, "bg-".concat(n.variant), n.variant), o(i, "fixed-".concat(n.fixed), n.fixed), o(i, "".concat(s), s), i),
                    attrs: {
                        role: "nav" === n.tag ? null : "navigation"
                    }
                }), a)
            }
        }),
        Sl = Ne(["tag", "fill", "justified", "align", "small"], ll),
        Tl = t.extend({
            name: "BNavbarNav",
            functional: !0,
            props: Sl,
            render: function (t, e) {
                var i, n, r = e.props,
                    a = e.data,
                    s = e.children;
                return t(r.tag, Be(a, {
                    staticClass: "navbar-nav",
                    class: (i = {
                        "nav-fill": r.fill,
                        "nav-justified": r.justified
                    }, o(i, (n = r.align, "justify-content-".concat(n = "left" === n ? "start" : "right" === n ? "end" : n)), r.align), o(i, "small", r.small), i)
                }), s)
            }
        }),
        wl = ai();
    wl.href.default = void 0, wl.to.default = void 0;
    var Bl = s({}, wl, {
            tag: {
                type: String,
                default: "div"
            }
        }),
        kl = t.extend({
            name: "BNavbarBrand",
            functional: !0,
            props: Bl,
            render: function (t, e) {
                var i = e.props,
                    n = e.data,
                    r = e.children,
                    o = i.to || i.href;
                return t(o ? si : i.tag, Be(n, {
                    staticClass: "navbar-brand",
                    props: o ? Ne(wl, i) : {}
                }), r)
            }
        }),
        Cl = t.extend({
            name: "BNavbarToggle",
            mixins: [An, Pe],
            props: {
                label: {
                    type: String,
                    default: function () {
                        return Et("BNavbarToggle", "label")
                    }
                },
                target: {
                    type: String,
                    required: !0
                }
            },
            data: function () {
                return {
                    toggleState: !1
                }
            },
            created: function () {
                this.listenOnRoot("bv::collapse::state", this.handleStateEvt), this.listenOnRoot("bv::collapse::sync::state", this.handleStateEvt)
            },
            methods: {
                onClick: function (t) {
                    this.$emit("click", t), t.defaultPrevented || this.$root.$emit("bv::toggle::collapse", this.target)
                },
                handleStateEvt: function (t, e) {
                    t === this.target && (this.toggleState = e)
                }
            },
            render: function (t) {
                return t("button", {
                    class: ["navbar-toggler"],
                    attrs: {
                        type: "button",
                        "aria-label": this.label,
                        "aria-controls": this.target,
                        "aria-expanded": this.toggleState ? "true" : "false"
                    },
                    on: {
                        click: this.onClick
                    }
                }, [this.normalizeSlot("default") || t("span", {
                    class: ["navbar-toggler-icon"]
                })])
            }
        }),
        xl = Bt({
            components: {
                BNavbar: yl,
                BNavbarNav: Tl,
                BNavbarBrand: kl,
                BNavbarToggle: Cl,
                BNavToggle: Cl
            },
            plugins: {
                NavPlugin: vl,
                CollapsePlugin: Jn,
                DropdownPlugin: No
            }
        }),
        $l = function (t) {
            return Array.apply(null, {
                length: t
            })
        },
        _l = function (t) {
            var e = pe(t) || 1;
            return e < 1 ? 5 : e
        },
        Pl = function (t, e) {
            var i = pe(t) || 1;
            return i > e ? e : i < 1 ? 1 : i
        },
        Ol = function (t) {
            if (t.keyCode === Ni.SPACE) return t.preventDefault(), t.stopImmediatePropagation(), t.stopPropagation(), t.currentTarget.click(), !1
        },
        Il = {
            mixins: [Pe],
            model: {
                prop: "value",
                event: "input"
            },
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                value: {
                    type: [Number, String],
                    default: null,
                    validator: function (t) {
                        var e = pe(t);
                        return !(!tt(t) && (isNaN(e) || e < 1)) || (pt('"v-model" value must be a number greater than "0"', "BPagination"), !1)
                    }
                },
                limit: {
                    type: [Number, String],
                    default: 5,
                    validator: function (t) {
                        var e = pe(t);
                        return !(isNaN(e) || e < 1) || (pt('Prop "limit" must be a number greater than "0"', "BPagination"), !1)
                    }
                },
                align: {
                    type: String,
                    default: "left"
                },
                pills: {
                    type: Boolean,
                    default: !1
                },
                hideGotoEndButtons: {
                    type: Boolean,
                    default: !1
                },
                ariaLabel: {
                    type: String,
                    default: "Pagination"
                },
                labelFirstPage: {
                    type: String,
                    default: "Go to first page"
                },
                firstText: {
                    type: String,
                    default: "«"
                },
                firstNumber: {
                    type: Boolean,
                    default: !1
                },
                firstClass: {
                    type: [String, Array, Object],
                    default: null
                },
                labelPrevPage: {
                    type: String,
                    default: "Go to previous page"
                },
                prevText: {
                    type: String,
                    default: "‹"
                },
                prevClass: {
                    type: [String, Array, Object],
                    default: null
                },
                labelNextPage: {
                    type: String,
                    default: "Go to next page"
                },
                nextText: {
                    type: String,
                    default: "›"
                },
                nextClass: {
                    type: [String, Array, Object],
                    default: null
                },
                labelLastPage: {
                    type: String,
                    default: "Go to last page"
                },
                lastText: {
                    type: String,
                    default: "»"
                },
                lastNumber: {
                    type: Boolean,
                    default: !1
                },
                lastClass: {
                    type: [String, Array, Object],
                    default: null
                },
                labelPage: {
                    type: [String, Function],
                    default: "Go to page"
                },
                pageClass: {
                    type: [String, Array, Object],
                    default: null
                },
                hideEllipsis: {
                    type: Boolean,
                    default: !1
                },
                ellipsisText: {
                    type: String,
                    default: "…"
                },
                ellipsisClass: {
                    type: [String, Array, Object],
                    default: null
                }
            },
            data: function () {
                var t = pe(this.value);
                return {
                    currentPage: t > 0 ? t : -1,
                    localNumberOfPages: 1,
                    localLimit: 5
                }
            },
            computed: {
                btnSize: function () {
                    return this.size ? "pagination-".concat(this.size) : ""
                },
                alignment: function () {
                    var t = this.align;
                    return "center" === t ? "justify-content-center" : "end" === t || "right" === t ? "justify-content-end" : "fill" === t ? "text-center" : ""
                },
                styleClass: function () {
                    return this.pills ? "b-pagination-pills" : ""
                },
                computedCurrentPage: function () {
                    return Pl(this.currentPage, this.localNumberOfPages)
                },
                paginationParams: function () {
                    var t = this.localLimit,
                        e = this.localNumberOfPages,
                        i = this.computedCurrentPage,
                        n = this.hideEllipsis,
                        r = this.firstNumber,
                        o = this.lastNumber,
                        a = !1,
                        s = !1,
                        l = t,
                        u = 1;
                    e <= t ? l = e : i < t - 1 && t > 3 ? (n && !o || (s = !0, l = t - (r ? 0 : 1)), l = Math.min(l, t)) : e - i + 2 < t && t > 3 ? (n && !r || (a = !0, l = t - (o ? 0 : 1)), u = e - l + 1) : (t > 3 && (l = t - 2, a = !(n && !r), s = !(n && !o)), u = i - Math.floor(l / 2)), u < 1 ? (u = 1, a = !1) : u > e - l && (u = e - l + 1, s = !1), a && r && u < 4 && (l += 2, u = 1, a = !1);
                    var c = u + l - 1;
                    return s && o && c > e - 3 && (l += c === e - 2 ? 2 : 3, s = !1), t <= 3 && (r && 1 === u ? l = Math.min(l + 1, e, t + 1) : o && e === u + l - 1 && (u = Math.max(u - 1, 1), l = Math.min(e - u + 1, e, t + 1))), {
                        showFirstDots: a,
                        showLastDots: s,
                        numberOfLinks: l = Math.min(l, e - u + 1),
                        startNumber: u
                    }
                },
                pageList: function () {
                    var t = this.paginationParams,
                        e = t.numberOfLinks,
                        i = t.startNumber,
                        n = this.computedCurrentPage,
                        r = function (t, e) {
                            return $l(e).map((function (e, i) {
                                return {
                                    number: t + i,
                                    classes: null
                                }
                            }))
                        }(i, e);
                    if (r.length > 3) {
                        var o = n - i,
                            a = "bv-d-xs-down-none";
                        if (0 === o)
                            for (var s = 3; s < r.length; s++) r[s].classes = a;
                        else if (o === r.length - 1)
                            for (var l = 0; l < r.length - 3; l++) r[l].classes = a;
                        else {
                            for (var u = 0; u < o - 1; u++) r[u].classes = a;
                            for (var c = r.length - 1; c > o + 1; c--) r[c].classes = a
                        }
                    }
                    return r
                }
            },
            watch: {
                value: function (t, e) {
                    t !== e && (this.currentPage = Pl(t, this.localNumberOfPages))
                },
                currentPage: function (t, e) {
                    t !== e && this.$emit("input", t > 0 ? t : null)
                },
                limit: function (t, e) {
                    t !== e && (this.localLimit = _l(t))
                }
            },
            created: function () {
                var t = this;
                this.localLimit = _l(this.limit), this.$nextTick((function () {
                    t.currentPage = t.currentPage > t.localNumberOfPages ? t.localNumberOfPages : t.currentPage
                }))
            },
            methods: {
                handleKeyNav: function (t) {
                    var e = t.keyCode,
                        i = t.shiftKey;
                    e === Ni.LEFT || e === Ni.UP ? (t.preventDefault(), i ? this.focusFirst() : this.focusPrev()) : e !== Ni.RIGHT && e !== Ni.DOWN || (t.preventDefault(), i ? this.focusLast() : this.focusNext())
                },
                getButtons: function () {
                    return Yt("a.page-link", this.$el).filter((function (t) {
                        return qt(t)
                    }))
                },
                setBtnFocus: function (t) {
                    t.focus()
                },
                focusCurrent: function () {
                    var t = this;
                    this.$nextTick((function () {
                        var e = t.getButtons().find((function (e) {
                            return pe(se(e, "aria-posinset")) === t.computedCurrentPage
                        }));
                        e && e.focus ? t.setBtnFocus(e) : t.focusFirst()
                    }))
                },
                focusFirst: function () {
                    var t = this;
                    this.$nextTick((function () {
                        var e = t.getButtons().find((function (t) {
                            return !Kt(t)
                        }));
                        e && e.focus && e !== document.activeElement && t.setBtnFocus(e)
                    }))
                },
                focusLast: function () {
                    var t = this;
                    this.$nextTick((function () {
                        var e = t.getButtons().reverse().find((function (t) {
                            return !Kt(t)
                        }));
                        e && e.focus && e !== document.activeElement && t.setBtnFocus(e)
                    }))
                },
                focusPrev: function () {
                    var t = this;
                    this.$nextTick((function () {
                        var e = t.getButtons(),
                            i = e.indexOf(document.activeElement);
                        i > 0 && !Kt(e[i - 1]) && e[i - 1].focus && t.setBtnFocus(e[i - 1])
                    }))
                },
                focusNext: function () {
                    var t = this;
                    this.$nextTick((function () {
                        var e = t.getButtons(),
                            i = e.indexOf(document.activeElement);
                        i < e.length - 1 && !Kt(e[i + 1]) && e[i + 1].focus && t.setBtnFocus(e[i + 1])
                    }))
                }
            },
            render: function (t) {
                var e = this,
                    i = [],
                    n = this.localNumberOfPages,
                    r = this.pageList.map((function (t) {
                        return t.number
                    })),
                    o = this.disabled,
                    a = this.paginationParams,
                    s = a.showFirstDots,
                    l = a.showLastDots,
                    u = this.computedCurrentPage,
                    c = "fill" === this.align,
                    d = function (t) {
                        return t === u
                    },
                    h = this.currentPage < 1,
                    f = function (i, r, a, s, l, u, f) {
                        var p = o || d(u) || h || i < 1 || i > n,
                            m = i < 1 ? 1 : i > n ? n : i,
                            g = {
                                disabled: p,
                                page: m,
                                index: m - 1
                            },
                            v = e.normalizeSlot(a, g) || Ue(s) || t(),
                            b = t(p ? "span" : si, {
                                staticClass: "page-link",
                                props: p ? {} : e.linkProps(i),
                                attrs: {
                                    role: "menuitem",
                                    tabindex: p ? null : "-1",
                                    "aria-label": r,
                                    "aria-controls": e.ariaControls || null,
                                    "aria-disabled": p ? "true" : null
                                },
                                on: p ? {} : {
                                    click: function (t) {
                                        e.onClick(i, t)
                                    },
                                    keydown: Ol
                                }
                            }, [v]);
                        return t("li", {
                            key: f,
                            staticClass: "page-item",
                            class: [{
                                disabled: p,
                                "flex-fill": c
                            }, l],
                            attrs: {
                                role: "presentation",
                                "aria-hidden": p ? "true" : null
                            }
                        }, [b])
                    },
                    p = function (i) {
                        return t("li", {
                            key: "ellipsis-".concat(i ? "last" : "first"),
                            staticClass: "page-item",
                            class: ["disabled", "bv-d-xs-down-none", c ? "flex-fill" : "", e.ellipsisClass],
                            attrs: {
                                role: "separator"
                            }
                        }, [t("span", {
                            staticClass: "page-link"
                        }, [e.normalizeSlot("ellipsis-text") || Ue(e.ellipsisText) || t()])])
                    },
                    m = function (i, r) {
                        var a = d(i.number) && !h,
                            s = o ? null : a || h && 0 === r ? "0" : "-1",
                            l = {
                                role: "menuitemradio",
                                "aria-disabled": o ? "true" : null,
                                "aria-controls": e.ariaControls || null,
                                "aria-label": it(e.labelPage) ? e.labelPage(i.number) : "".concat(e.labelPage, " ").concat(i.number),
                                "aria-checked": a ? "true" : "false",
                                "aria-posinset": i.number,
                                "aria-setsize": n,
                                tabindex: s
                            },
                            u = Ue(e.makePage(i.number)),
                            f = {
                                page: i.number,
                                index: i.number - 1,
                                content: u,
                                active: a,
                                disabled: o
                            },
                            p = t(o ? "span" : si, {
                                props: o ? {} : e.linkProps(i.number),
                                staticClass: "page-link",
                                attrs: l,
                                on: o ? {} : {
                                    click: function (t) {
                                        e.onClick(i.number, t)
                                    },
                                    keydown: Ol
                                }
                            }, [e.normalizeSlot("page", f) || u]);
                        return t("li", {
                            key: "page-".concat(i.number),
                            staticClass: "page-item",
                            class: [{
                                disabled: o,
                                active: a,
                                "flex-fill": c
                            }, i.classes, e.pageClass],
                            attrs: {
                                role: "presentation"
                            }
                        }, [p])
                    },
                    g = t();
                this.firstNumber || this.hideGotoEndButtons || (g = f(1, this.labelFirstPage, "first-text", this.firstText, this.firstClass, 1, "pagination-goto-first")), i.push(g), i.push(f(u - 1, this.labelPrevPage, "prev-text", this.prevText, this.prevClass, 1, "pagination-goto-prev")), i.push(this.firstNumber && 1 !== r[0] ? m({
                    number: 1
                }, 0) : t()), i.push(s ? p(!1) : t()), this.pageList.forEach((function (t, n) {
                    var o = s && e.firstNumber && 1 !== r[0] ? 1 : 0;
                    i.push(m(t, n + o))
                })), i.push(l ? p(!0) : t()), i.push(this.lastNumber && r[r.length - 1] !== n ? m({
                    number: n
                }, -1) : t()), i.push(f(u + 1, this.labelNextPage, "next-text", this.nextText, this.nextClass, n, "pagination-goto-next"));
                var v = t();
                this.lastNumber || this.hideGotoEndButtons || (v = f(n, this.labelLastPage, "last-text", this.lastText, this.lastClass, n, "pagination-goto-last")), i.push(v);
                var b = t("ul", {
                    ref: "ul",
                    staticClass: "pagination",
                    class: ["b-pagination", this.btnSize, this.alignment, this.styleClass],
                    attrs: {
                        role: "menubar",
                        "aria-disabled": o ? "true" : "false",
                        "aria-label": this.ariaLabel || null
                    },
                    on: {
                        keydown: this.handleKeyNav
                    }
                }, i);
                return this.isNav ? t("nav", {
                    attrs: {
                        "aria-disabled": o ? "true" : null,
                        "aria-hidden": o ? "true" : "false"
                    }
                }, [b]) : b
            }
        },
        El = {
            size: {
                type: String,
                default: function () {
                    return Et("BPagination", "size")
                }
            },
            perPage: {
                type: [Number, String],
                default: 20
            },
            totalRows: {
                type: [Number, String],
                default: 0
            },
            ariaControls: {
                type: String,
                default: null
            }
        },
        Fl = function (t) {
            var e = pe(t) || 20;
            return e < 1 ? 1 : e
        },
        Vl = function (t) {
            var e = pe(t) || 0;
            return e < 0 ? 0 : e
        },
        Al = Bt({
            components: {
                BPagination: t.extend({
                    name: "BPagination",
                    mixins: [Il],
                    props: El,
                    computed: {
                        numberOfPages: function () {
                            var t = Math.ceil(Vl(this.totalRows) / Fl(this.perPage));
                            return t < 1 ? 1 : t
                        },
                        pageSizeNumberOfPages: function () {
                            return {
                                perPage: Fl(this.perPage),
                                totalRows: Vl(this.totalRows),
                                numberOfPages: this.numberOfPages
                            }
                        }
                    },
                    watch: {
                        pageSizeNumberOfPages: function (t, e) {
                            et(e) || (t.perPage !== e.perPage && t.totalRows === e.totalRows ? this.currentPage = 1 : t.numberOfPages !== e.numberOfPages && this.currentPage > t.numberOfPages && (this.currentPage = 1)), this.localNumberOfPages = t.numberOfPages
                        }
                    },
                    created: function () {
                        var t = this;
                        this.localNumberOfPages = this.numberOfPages;
                        var e = pe(this.value) || 0;
                        e > 0 ? this.currentPage = e : this.$nextTick((function () {
                            t.currentPage = 0
                        }))
                    },
                    mounted: function () {
                        this.localNumberOfPages = this.numberOfPages
                    },
                    methods: {
                        onClick: function (t, e) {
                            var i = this;
                            t > this.numberOfPages ? t = this.numberOfPages : t < 1 && (t = 1), this.currentPage = t, this.$emit("change", this.currentPage), this.$nextTick((function () {
                                var t = e.target;
                                qt(t) && i.$el.contains(t) && t.focus ? t.focus() : i.focusCurrent()
                            }))
                        },
                        makePage: function (t) {
                            return t
                        },
                        linkProps: function (t) {
                            return {
                                href: "#"
                            }
                        }
                    }
                })
            }
        }),
        Dl = "BPaginationNav",
        Nl = {
            size: {
                type: String,
                default: function () {
                    return Et(Dl, "size")
                }
            },
            numberOfPages: {
                type: [Number, String],
                default: 1,
                validator: function (t) {
                    var e = pe(t);
                    return !(isNaN(e) || e < 1) || (pt('Prop "number-of-pages" must be a number greater than "0"', Dl), !1)
                }
            },
            baseUrl: {
                type: String,
                default: "/"
            },
            useRouter: {
                type: Boolean,
                default: !1
            },
            linkGen: {
                type: Function,
                default: null
            },
            pageGen: {
                type: Function,
                default: null
            },
            pages: {
                type: Array,
                default: null
            },
            noPageDetect: {
                type: Boolean,
                default: !1
            },
            activeClass: {
                type: String
            },
            exact: {
                type: Boolean,
                default: !1
            },
            exactActiveClass: {
                type: String
            },
            noPrefetch: {
                type: Boolean,
                default: !1
            }
        },
        Rl = Bt({
            components: {
                BPaginationNav: t.extend({
                    name: Dl,
                    mixins: [Il],
                    props: Nl,
                    computed: {
                        isNav: function () {
                            return !0
                        },
                        computedValue: function () {
                            var t = pe(this.value);
                            return isNaN(t) || t < 1 ? null : t
                        }
                    },
                    watch: {
                        numberOfPages: function (t, e) {
                            var i = this;
                            this.$nextTick((function () {
                                i.setNumberOfPages()
                            }))
                        },
                        pages: function (t, e) {
                            var i = this;
                            this.$nextTick((function () {
                                i.setNumberOfPages()
                            }))
                        }
                    },
                    created: function () {
                        this.setNumberOfPages()
                    },
                    mounted: function () {
                        var t = this;
                        this.$router && this.$watch("$route", (function (e, i) {
                            t.$nextTick((function () {
                                zt((function () {
                                    t.guessCurrentPage()
                                }))
                            }))
                        }))
                    },
                    methods: {
                        setNumberOfPages: function () {
                            var t, e, i = this;
                            T(this.pages) && this.pages.length > 0 ? this.localNumberOfPages = this.pages.length : this.localNumberOfPages = (t = this.numberOfPages, (e = pe(t) || 1) < 1 ? 1 : e), this.$nextTick((function () {
                                i.guessCurrentPage()
                            }))
                        },
                        onClick: function (t, e) {
                            var i = this;
                            t !== this.currentPage && (zt((function () {
                                i.currentPage = t, i.$emit("change", t)
                            })), this.$nextTick((function () {
                                try {
                                    (e.currentTarget || e.target).blur()
                                } catch (t) {}
                            })))
                        },
                        getPageInfo: function (t) {
                            if (!T(this.pages) || 0 === this.pages.length || Q(this.pages[t - 1])) {
                                var e = "".concat(this.baseUrl).concat(t);
                                return {
                                    link: this.useRouter ? {
                                        path: e
                                    } : e,
                                    text: Ue(t)
                                }
                            }
                            var i = this.pages[t - 1];
                            if (E(i)) {
                                var n = i.link;
                                return {
                                    link: E(n) ? n : this.useRouter ? {
                                        path: n
                                    } : n,
                                    text: Ue(i.text || t)
                                }
                            }
                            return {
                                link: Ue(i),
                                text: Ue(t)
                            }
                        },
                        makePage: function (t) {
                            var e = this.getPageInfo(t);
                            return this.pageGen && it(this.pageGen) ? this.pageGen(t, e) : e.text
                        },
                        makeLink: function (t) {
                            var e = this.getPageInfo(t);
                            return this.linkGen && it(this.linkGen) ? this.linkGen(t, e) : e.link
                        },
                        linkProps: function (t) {
                            var e = this.makeLink(t),
                                i = {
                                    target: this.target || null,
                                    rel: this.rel || null,
                                    disabled: this.disabled,
                                    exact: this.exact,
                                    activeClass: this.activeClass,
                                    exactActiveClass: this.exactActiveClass,
                                    append: this.append,
                                    replace: this.replace,
                                    noPrefetch: this.noPrefetch
                                };
                            return this.useRouter || E(e) ? i.to = e : i.href = e, i
                        },
                        resolveLink: function () {
                            var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            try {
                                (t = document.createElement("a")).href = oi({
                                    to: e
                                }, "a", "/", "/"), document.body.appendChild(t);
                                var i = t,
                                    n = i.pathname,
                                    r = i.hash,
                                    o = i.search;
                                return document.body.removeChild(t), {
                                    path: n,
                                    hash: r,
                                    query: ni(o)
                                }
                            } catch (e) {
                                try {
                                    t && t.parentNode && t.parentNode.removeChild(t)
                                } catch (t) {}
                                return {}
                            }
                        },
                        resolveRoute: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            try {
                                var e = this.$router.resolve(t, this.$route).route;
                                return {
                                    path: e.path,
                                    hash: e.hash,
                                    query: e.query
                                }
                            } catch (t) {
                                return {}
                            }
                        },
                        guessCurrentPage: function () {
                            var t = this.computedValue,
                                e = this.$router,
                                i = this.$route;
                            if (!this.noPageDetect && !t && (z || !z && e))
                                for (var n = e && i ? {
                                        path: i.path,
                                        hash: i.hash,
                                        query: i.query
                                    } : {}, r = z ? window.location || document.location : null, o = r ? {
                                        path: r.pathname,
                                        hash: r.hash,
                                        query: ni(r.search)
                                    } : {}, a = 1; !t && a <= this.localNumberOfPages; a++) {
                                    var s = this.makeLink(a);
                                    t = e && (E(s) || this.useRouter) ? ln(this.resolveRoute(s), n) ? a : null : z ? ln(this.resolveLink(s), o) ? a : null : -1
                                }
                            this.currentPage = t > 0 ? t : 0
                        }
                    }
                })
            }
        }),
        Ll = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
            TOPLEFT: "top",
            TOPRIGHT: "top",
            RIGHTTOP: "right",
            RIGHTBOTTOM: "right",
            BOTTOMLEFT: "bottom",
            BOTTOMRIGHT: "bottom",
            LEFTTOP: "left",
            LEFTBOTTOM: "left"
        },
        Hl = {
            AUTO: 0,
            TOPLEFT: -1,
            TOP: 0,
            TOPRIGHT: 1,
            RIGHTTOP: -1,
            RIGHT: 0,
            RIGHTBOTTOM: 1,
            BOTTOMLEFT: -1,
            BOTTOM: 0,
            BOTTOMRIGHT: 1,
            LEFTTOP: -1,
            LEFT: 0,
            LEFTBOTTOM: 1
        },
        zl = t.extend({
            name: "BVPopper",
            props: {
                target: {
                    type: [HTMLElement, SVGElement],
                    default: null
                },
                placement: {
                    type: String,
                    default: "top"
                },
                fallbackPlacement: {
                    type: [String, Array],
                    default: "flip"
                },
                offset: {
                    type: Number,
                    default: 0
                },
                boundary: {
                    type: [String, HTMLElement],
                    default: "scrollParent"
                },
                boundaryPadding: {
                    type: Number,
                    default: 5
                },
                arrowPadding: {
                    type: Number,
                    default: 6
                }
            },
            data: function () {
                return {
                    noFade: !1,
                    localShow: !0,
                    attachment: this.getAttachment(this.placement)
                }
            },
            computed: {
                templateType: function () {
                    return "unknown"
                },
                popperConfig: function () {
                    var t = this,
                        e = this.placement;
                    return {
                        placement: this.getAttachment(e),
                        modifiers: {
                            offset: {
                                offset: this.getOffset(e)
                            },
                            flip: {
                                behavior: this.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                padding: this.boundaryPadding,
                                boundariesElement: this.boundary
                            }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t.popperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            t.popperPlacementChange(e)
                        }
                    }
                }
            },
            created: function () {
                var t = this;
                this.$_popper = null, this.localShow = !0, this.$on("show", (function (e) {
                    t.popperCreate(e)
                })), this.$on("hidden", (function () {
                    t.$nextTick(t.$destroy)
                })), this.$parent.$once("hook:destroyed", this.$destroy)
            },
            beforeMount: function () {
                this.attachment = this.getAttachment(this.placement)
            },
            mounted: function () {},
            updated: function () {
                this.popperUpdate()
            },
            beforeDestroy: function () {
                this.popperDestroy()
            },
            destroyed: function () {
                var t = this.$el;
                t && t.parentNode && t.parentNode.removeChild(t)
            },
            methods: {
                hide: function () {
                    this.localShow = !1
                },
                getAttachment: function (t) {
                    return Ll[String(t).toUpperCase()] || "auto"
                },
                getOffset: function (t) {
                    if (!this.offset) {
                        var e = this.$refs.arrow || Zt(".arrow", this.$el),
                            i = (parseFloat(ce(e).width) || 0) + (parseFloat(this.arrowPadding) || 0);
                        switch (Hl[String(t).toUpperCase()] || 0) {
                            case 1:
                                return "+50%p - ".concat(i, "px");
                            case -1:
                                return "-50%p + ".concat(i, "px");
                            default:
                                return 0
                        }
                    }
                    return this.offset
                },
                popperCreate: function (t) {
                    this.popperDestroy(), this.$_popper = new no(this.target, t, this.popperConfig)
                },
                popperDestroy: function () {
                    this.$_popper && this.$_popper.destroy(), this.$_popper = null
                },
                popperUpdate: function () {
                    this.$_popper && this.$_popper.scheduleUpdate()
                },
                popperPlacementChange: function (t) {
                    this.attachment = this.getAttachment(t.placement)
                },
                renderTemplate: function (t) {
                    return t("div")
                }
            },
            render: function (t) {
                var e = this;
                return t(xe, {
                    props: {
                        appear: !0,
                        noFade: this.noFade
                    },
                    on: {
                        beforeEnter: function (t) {
                            return e.$emit("show", t)
                        },
                        afterEnter: function (t) {
                            return e.$emit("shown", t)
                        },
                        beforeLeave: function (t) {
                            return e.$emit("hide", t)
                        },
                        afterLeave: function (t) {
                            return e.$emit("hidden", t)
                        }
                    }
                }, [this.localShow ? this.renderTemplate(t) : t()])
            }
        }),
        Ml = t.extend({
            name: "BVTooltipTemplate",
            extends: zl,
            mixins: [Ns],
            props: {
                id: {
                    type: String,
                    default: null
                },
                html: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function () {
                return {
                    title: "",
                    content: "",
                    variant: null,
                    customClass: null,
                    interactive: !0
                }
            },
            computed: {
                templateType: function () {
                    return "tooltip"
                },
                templateClasses: function () {
                    var t;
                    return [(t = {
                        noninteractive: !this.interactive
                    }, o(t, "b-".concat(this.templateType, "-").concat(this.variant), this.variant), o(t, "bs-".concat(this.templateType, "-").concat(this.attachment), this.attachment), t), this.customClass]
                },
                templateAttributes: function () {
                    return s({
                        id: this.id,
                        role: "tooltip",
                        tabindex: "-1"
                    }, this.scopedStyleAttrs)
                },
                templateListeners: function () {
                    var t = this;
                    return {
                        mouseenter: function (e) {
                            t.$emit("mouseenter", e)
                        },
                        mouseleave: function (e) {
                            t.$emit("mouseleave", e)
                        },
                        focusin: function (e) {
                            t.$emit("focusin", e)
                        },
                        focusout: function (e) {
                            t.$emit("focusout", e)
                        }
                    }
                }
            },
            methods: {
                renderTemplate: function (t) {
                    var e = it(this.title) ? this.title({}) : et(this.title) ? t() : this.title,
                        i = this.html && !it(this.title) ? {
                            innerHTML: this.title
                        } : {};
                    return t("div", {
                        staticClass: "tooltip b-tooltip",
                        class: this.templateClasses,
                        attrs: this.templateAttributes,
                        on: this.templateListeners
                    }, [t("div", {
                        ref: "arrow",
                        staticClass: "arrow"
                    }), t("div", {
                        staticClass: "tooltip-inner",
                        domProps: i
                    }, [e])])
                }
            }
        }),
        jl = {
            passive: !0,
            capture: !1
        },
        Gl = {
            title: "",
            content: "",
            variant: null,
            customClass: null,
            triggers: "",
            placement: "auto",
            fallbackPlacement: "flip",
            target: null,
            container: null,
            noFade: !1,
            boundary: "scrollParent",
            boundaryPadding: 5,
            offset: 0,
            delay: 0,
            arrowPadding: 6,
            interactive: !0,
            disabled: !1,
            id: null,
            html: !1
        },
        Wl = t.extend({
            name: "BVTooltip",
            props: {},
            data: function () {
                return s({}, Gl, {
                    activeTrigger: {
                        hover: !1,
                        click: !1,
                        focus: !1
                    },
                    localShow: !1
                })
            },
            computed: {
                templateType: function () {
                    return "tooltip"
                },
                computedId: function () {
                    return this.id || "__bv_".concat(this.templateType, "_").concat(this._uid, "__")
                },
                computedDelay: function () {
                    var t = {
                        show: 0,
                        hide: 0
                    };
                    return F(this.delay) ? (t.show = Math.max(parseInt(this.delay.show, 10) || 0, 0), t.hide = Math.max(parseInt(this.delay.hide, 10) || 0, 0)) : (ot(this.delay) || rt(this.delay)) && (t.show = t.hide = Math.max(parseInt(this.delay, 10) || 0, 0)), t
                },
                computedTriggers: function () {
                    return B(this.triggers).filter(Boolean).join(" ").trim().toLowerCase().split(/\s+/).sort()
                },
                isWithActiveTrigger: function () {
                    for (var t in this.activeTrigger)
                        if (this.activeTrigger[t]) return !0;
                    return !1
                },
                computedTemplateData: function () {
                    return {
                        title: this.title,
                        content: this.content,
                        variant: this.variant,
                        customClass: this.customClass,
                        noFade: this.noFade,
                        interactive: this.interactive
                    }
                }
            },
            watch: {
                computedTriggers: function (t, e) {
                    var i = this;
                    ln(t, e) || this.$nextTick((function () {
                        i.unListen(), e.forEach((function (e) {
                            w(t, e) || i.activeTrigger[e] && (i.activeTrigger[e] = !1)
                        })), i.listen()
                    }))
                },
                computedTemplateData: function () {
                    this.handleTemplateUpdate()
                },
                disabled: function (t) {
                    t ? this.disable() : this.enable()
                }
            },
            created: function () {
                var t = this;
                this.$_tip = null, this.$_hoverTimeout = null, this.$_hoverState = "", this.$_visibleInterval = null, this.$_enabled = !this.disabled, this.$_noop = kn.bind(this), this.$parent && this.$parent.$once("hook:beforeDestroy", this.$destroy), this.$nextTick((function () {
                    var e = t.getTarget();
                    e && te(document.body, e) ? (t.scopeId = Ds(t.$parent), t.listen()) : pt("Unable to find target element in document.", t.templateType)
                }))
            },
            updated: function () {
                this.$nextTick(this.handleTemplateUpdate)
            },
            deactivated: function () {
                this.forceHide()
            },
            beforeDestroy: function () {
                this.unListen(), this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.clearVisibilityInterval(), this.destroyTemplate()
            },
            methods: {
                getTemplate: function () {
                    return Ml
                },
                updateData: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = !1;
                    O(Gl).forEach((function (n) {
                        Q(e[n]) || t[n] === e[n] || (t[n] = e[n], "title" === n && (i = !0))
                    })), i && this.localShow && this.fixTitle()
                },
                createTemplateAndShow: function () {
                    var t = this.getContainer(),
                        e = this.getTemplate(),
                        i = this.$_tip = new e({
                            parent: this,
                            propsData: {
                                id: this.computedId,
                                html: this.html,
                                placement: this.placement,
                                fallbackPlacement: this.fallbackPlacement,
                                target: this.getPlacementTarget(),
                                boundary: this.getBoundary(),
                                offset: parseInt(this.offset, 10) || 0,
                                arrowPadding: parseInt(this.arrowPadding, 10) || 0,
                                boundaryPadding: parseInt(this.boundaryPadding, 10) || 0
                            }
                        });
                    this.handleTemplateUpdate(), i.$once("show", this.onTemplateShow), i.$once("shown", this.onTemplateShown), i.$once("hide", this.onTemplateHide), i.$once("hidden", this.onTemplateHidden), i.$once("hook:destroyed", this.destroyTemplate), i.$on("focusin", this.handleEvent), i.$on("focusout", this.handleEvent), i.$on("mouseenter", this.handleEvent), i.$on("mouseleave", this.handleEvent), i.$mount(t.appendChild(document.createElement("div")))
                },
                hideTemplate: function () {
                    this.$_tip && this.$_tip.hide(), this.clearActiveTriggers(), this.$_hoverState = ""
                },
                destroyTemplate: function () {
                    this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.$_hoverState = "", this.clearActiveTriggers(), this.localPlacementTarget = null;
                    try {
                        this.$_tip && this.$_tip.$destroy()
                    } catch (t) {}
                    this.$_tip = null, this.removeAriaDescribedby(), this.restoreTitle(), this.localShow = !1
                },
                getTemplateElement: function () {
                    return this.$_tip ? this.$_tip.$el : null
                },
                handleTemplateUpdate: function () {
                    var t = this,
                        e = this.$_tip;
                    if (e) {
                        ["title", "content", "variant", "customClass", "noFade", "interactive"].forEach((function (i) {
                            e[i] !== t[i] && (e[i] = t[i])
                        }))
                    }
                },
                show: function () {
                    var t = this.getTarget();
                    if (t && te(document.body, t) && qt(t) && !this.dropdownOpen() && (!et(this.title) && "" !== this.title || !et(this.content) && "" !== this.content) && !this.$_tip && !this.localShow) {
                        this.localShow = !0;
                        var e = this.buildEvent("show", {
                            cancelable: !0
                        });
                        this.emitEvent(e), e.defaultPrevented ? this.destroyTemplate() : (this.fixTitle(), this.addAriaDescribedby(), this.createTemplateAndShow())
                    }
                },
                hide: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = this.getTemplateElement();
                    if (e && this.localShow) {
                        var i = this.buildEvent("hide", {
                            cancelable: !t
                        });
                        this.emitEvent(i), i.defaultPrevented || this.hideTemplate()
                    } else this.restoreTitle()
                },
                forceHide: function () {
                    this.getTemplateElement() && this.localShow && (this.setWhileOpenListeners(!1), this.clearHoverTimeout(), this.$_hoverState = "", this.clearActiveTriggers(), this.$_tip && (this.$_tip.noFade = !0), this.hide(!0))
                },
                enable: function () {
                    this.$_enabled = !0, this.emitEvent(this.buildEvent("enabled"))
                },
                disable: function () {
                    this.$_enabled = !1, this.emitEvent(this.buildEvent("disabled"))
                },
                onTemplateShow: function () {
                    this.setWhileOpenListeners(!0)
                },
                onTemplateShown: function () {
                    var t = this.$_hoverState;
                    this.$_hoverState = "", "out" === t && this.leave(null), this.emitEvent(this.buildEvent("shown"))
                },
                onTemplateHide: function () {
                    this.setWhileOpenListeners(!1)
                },
                onTemplateHidden: function () {
                    this.destroyTemplate(), this.emitEvent(this.buildEvent("hidden", {}))
                },
                getTarget: function () {
                    var t = this.target ? this.target.$el || this.target : null;
                    return t = rt(t) ? ee(t.replace(/^#/, "")) : t, t = it(t) ? t() : t, Ut(t) ? t : null
                },
                getPlacementTarget: function () {
                    return this.getTarget()
                },
                getTargetId: function () {
                    var t = this.getTarget();
                    return t && t.id ? t.id : null
                },
                getContainer: function () {
                    var t = !!this.container && (this.container.$el || this.container),
                        e = document.body,
                        i = this.getTarget();
                    return !1 === t ? Qt(".modal-content", i) || e : rt(t) && ee(t.replace(/^#/, "")) || e
                },
                getBoundary: function () {
                    return this.boundary ? this.boundary.$el || this.boundary : "scrollParent"
                },
                isInModal: function () {
                    var t = this.getTarget();
                    return t && Qt(".modal-content", t)
                },
                isDropdown: function () {
                    var t = this.getTarget();
                    return t && re(t, "dropdown")
                },
                dropdownOpen: function () {
                    var t = this.getTarget();
                    return this.isDropdown() && t && Zt(".dropdown-menu.show", t)
                },
                clearHoverTimeout: function () {
                    this.$_hoverTimeout && (clearTimeout(this.$_hoverTimeout), this.$_hoverTimeout = null)
                },
                clearVisibilityInterval: function () {
                    this.$_visibleInterval && (clearInterval(this.$_visibleInterval), this.$_visibleInterval = null)
                },
                clearActiveTriggers: function () {
                    for (var t in this.activeTrigger) this.activeTrigger[t] = !1
                },
                addAriaDescribedby: function () {
                    var t = this.getTarget(),
                        e = se(t, "aria-describedby") || "";
                    e = e.split(/\s+/).concat(this.computedId).join(" ").trim(), oe(t, "aria-describedby", e)
                },
                removeAriaDescribedby: function () {
                    var t = this,
                        e = this.getTarget(),
                        i = se(e, "aria-describedby") || "";
                    (i = i.split(/\s+/).filter((function (e) {
                        return e !== t.computedId
                    })).join(" ").trim()) ? oe(e, "aria-describedby", i): ae(e, "aria-describedby")
                },
                fixTitle: function () {
                    var t = this.getTarget();
                    t && se(t, "title") && (oe(t, "data-original-title", se(t, "title") || ""), oe(t, "title", ""))
                },
                restoreTitle: function () {
                    var t = this.getTarget();
                    t && le(t, "data-original-title") && (oe(t, "title", se(t, "data-original-title") || ""), ae(t, "data-original-title"))
                },
                buildEvent: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new BvEvent(t, s({
                        cancelable: !1,
                        target: this.getTarget(),
                        relatedTarget: this.getTemplateElement() || null,
                        componentId: this.computedId,
                        vueTarget: this
                    }, e))
                },
                emitEvent: function (t) {
                    var e = t.type,
                        i = this.$root;
                    i && i.$emit && i.$emit("bv::".concat(this.templateType, "::").concat(e), t), this.$emit(e, t)
                },
                listen: function () {
                    var t = this,
                        e = this.getTarget();
                    e && (this.setRootListener(!0), this.computedTriggers.forEach((function (i) {
                        "click" === i ? Gt(e, "click", t.handleEvent, jl) : "focus" === i ? (Gt(e, "focusin", t.handleEvent, jl), Gt(e, "focusout", t.handleEvent, jl)) : "blur" === i ? Gt(e, "focusout", t.handleEvent, jl) : "hover" === i && (Gt(e, "mouseenter", t.handleEvent, jl), Gt(e, "mouseleave", t.handleEvent, jl))
                    }), this))
                },
                unListen: function () {
                    var t = this,
                        e = this.getTarget();
                    this.setRootListener(!1), ["click", "focusin", "focusout", "mouseenter", "mouseleave"].forEach((function (i) {
                        e && Wt(e, i, t.handleEvent, jl)
                    }), this)
                },
                setRootListener: function (t) {
                    var e = this.$root;
                    if (e) {
                        var i = t ? "$on" : "$off",
                            n = this.templateType;
                        e[i]("bv::hide::".concat(n), this.doHide), e[i]("bv::show::".concat(n), this.doShow), e[i]("bv::disable::".concat(n), this.doDisable), e[i]("bv::enable::".concat(n), this.doEnable)
                    }
                },
                setWhileOpenListeners: function (t) {
                    this.setModalListener(t), this.setDropdownListener(t), this.visibleCheck(t), this.setOnTouchStartListener(t)
                },
                visibleCheck: function (t) {
                    var e = this;
                    this.clearVisibilityInterval();
                    var i = this.getTarget(),
                        n = this.getTemplateElement();
                    t && (this.$_visibleInterval = setInterval((function () {
                        !n || !e.localShow || i.parentNode && qt(i) || e.forceHide()
                    }), 100))
                },
                setModalListener: function (t) {
                    this.isInModal() && this.$root[t ? "$on" : "$off"]("bv::modal::hidden", this.forceHide)
                },
                setOnTouchStartListener: function (t) {
                    var e = this;
                    if ("ontouchstart" in document.documentElement) {
                        var i = t ? Gt : Wt;
                        S(document.body.children).forEach((function (t) {
                            i(t, "mouseover", e.$_noop)
                        }))
                    }
                },
                setDropdownListener: function (t) {
                    var e = this.getTarget();
                    e && this.$root && this.isDropdown && e.__vue__ && e.__vue__[t ? "$on" : "$off"]("shown", this.forceHide)
                },
                handleEvent: function (t) {
                    var e = this.getTarget();
                    if (e && !Kt(e) && this.$_enabled && !this.dropdownOpen()) {
                        var i = t.type,
                            n = this.computedTriggers;
                        if ("click" === i && w(n, "click")) this.click(t);
                        else if ("mouseenter" === i && w(n, "hover")) this.enter(t);
                        else if ("focusin" === i && w(n, "focus")) this.enter(t);
                        else if ("focusout" === i && (w(n, "focus") || w(n, "blur")) || "mouseleave" === i && w(n, "hover")) {
                            var r = this.getTemplateElement(),
                                o = t.target,
                                a = t.relatedTarget;
                            if (r && te(r, o) && te(e, a) || r && te(e, o) && te(r, a) || r && te(r, o) && te(r, a) || te(e, o) && te(e, a)) return;
                            this.leave(t)
                        }
                    }
                },
                doHide: function (t) {
                    t && this.getTargetId() !== t && this.computedId !== t || this.forceHide()
                },
                doShow: function (t) {
                    t && this.getTargetId() !== t && this.computedId !== t || this.show()
                },
                doDisable: function (t) {
                    t && this.getTargetId() !== t && this.computedId !== t || this.disable()
                },
                doEnable: function (t) {
                    t && this.getTargetId() !== t && this.computedId !== t || this.enable()
                },
                click: function (t) {
                    this.$_enabled && !this.dropdownOpen() && (this.activeTrigger.click = !this.activeTrigger.click, this.isWithActiveTrigger ? this.enter(null) : this.leave(null))
                },
                toggle: function () {
                    this.$_enabled && !this.dropdownOpen() && (this.localShow ? this.leave(null) : this.enter(null))
                },
                enter: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    e && (this.activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), this.localShow || "in" === this.$_hoverState ? this.$_hoverState = "in" : (this.clearHoverTimeout(), this.$_hoverState = "in", this.computedDelay.show ? (this.fixTitle(), this.$_hoverTimeout = setTimeout((function () {
                        "in" === t.$_hoverState ? t.show() : t.localShow || t.restoreTitle()
                    }), this.computedDelay.show)) : this.show())
                },
                leave: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    e && (this.activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1, "focusout" === e.type && w(this.computedTriggers, "blur") && (this.activeTrigger.click = !1, this.activeTrigger.hover = !1)), this.isWithActiveTrigger || (this.clearHoverTimeout(), this.$_hoverState = "out", this.computedDelay.hide ? this.$_hoverTimeout = setTimeout((function () {
                        "out" === t.$_hoverState && t.hide()
                    }), this.computedDelay.hide) : this.hide())
                }
            }
        }),
        Ul = "BTooltip",
        ql = t.extend({
            name: Ul,
            props: {
                title: {
                    type: String
                },
                target: {
                    type: [String, HTMLElement, SVGElement, Function, Object],
                    required: !0
                },
                triggers: {
                    type: [String, Array],
                    default: "hover focus"
                },
                placement: {
                    type: String,
                    default: "top"
                },
                fallbackPlacement: {
                    type: [String, Array],
                    default: "flip",
                    validator: function (t) {
                        return T(t) && t.every((function (t) {
                            return rt(t)
                        })) || w(["flip", "clockwise", "counterclockwise"], t)
                    }
                },
                variant: {
                    type: String,
                    default: function () {
                        return Et(Ul, "variant")
                    }
                },
                customClass: {
                    type: String,
                    default: function () {
                        return Et(Ul, "customClass")
                    }
                },
                delay: {
                    type: [Number, Object, String],
                    default: function () {
                        return Et(Ul, "delay")
                    }
                },
                boundary: {
                    type: [String, HTMLElement, Object],
                    default: function () {
                        return Et(Ul, "boundary")
                    }
                },
                boundaryPadding: {
                    type: [Number, String],
                    default: function () {
                        return Et(Ul, "boundaryPadding")
                    }
                },
                offset: {
                    type: [Number, String],
                    default: 0
                },
                noFade: {
                    type: Boolean,
                    default: !1
                },
                container: {
                    type: [String, HTMLElement, Object]
                },
                show: {
                    type: Boolean,
                    default: !1
                },
                noninteractive: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                id: {
                    type: String,
                    default: null
                }
            },
            data: function () {
                return {
                    localShow: this.show,
                    localTitle: "",
                    localContent: ""
                }
            },
            computed: {
                templateData: function () {
                    return {
                        title: this.localTitle,
                        content: this.localContent,
                        target: this.target,
                        triggers: this.triggers,
                        placement: this.placement,
                        fallbackPlacement: this.fallbackPlacement,
                        variant: this.variant,
                        customClass: this.customClass,
                        container: this.container,
                        boundary: this.boundary,
                        boundaryPadding: this.boundaryPadding,
                        delay: this.delay,
                        offset: this.offset,
                        noFade: this.noFade,
                        interactive: !this.noninteractive,
                        disabled: this.disabled,
                        id: this.id
                    }
                },
                templateTitleContent: function () {
                    return {
                        title: this.title,
                        content: this.content
                    }
                }
            },
            watch: {
                show: function (t, e) {
                    t !== e && t !== this.localShow && this.$_bv_toolpop && (t ? this.$_bv_toolpop.show() : this.$_bv_toolpop.forceHide())
                },
                disabled: function (t, e) {
                    t ? this.doDisable() : this.doEnable()
                },
                localShow: function (t, e) {
                    this.$emit("update:show", t)
                },
                templateData: function (t, e) {
                    var i = this;
                    this.$nextTick((function () {
                        i.$_bv_toolpop && i.$_bv_toolpop.updateData(i.templateData)
                    }))
                },
                templateTitleContent: function (t, e) {
                    this.$nextTick(this.updateContent)
                }
            },
            created: function () {
                this.$_bv_toolpop = null
            },
            updated: function () {
                this.$nextTick(this.updateContent)
            },
            beforeDestroy: function () {
                this.$off("open", this.doOpen), this.$off("close", this.doClose), this.$off("disable", this.doDisable), this.$off("enable", this.doEnable), this.$_bv_toolpop && this.$_bv_toolpop.$destroy(), this.$_bv_toolpop = null
            },
            mounted: function () {
                var t = this;
                this.$nextTick((function () {
                    var e = t.getComponent();
                    t.updateContent();
                    var i = Ds(t) || Ds(t.$parent),
                        n = t.$_bv_toolpop = new e({
                            parent: t,
                            _scopeId: i || void 0
                        });
                    n.updateData(t.templateData), n.$on("show", t.onShow), n.$on("shown", t.onShown), n.$on("hide", t.onHide), n.$on("hidden", t.onHidden), n.$on("disabled", t.onDisabled), n.$on("enabled", t.onEnabled), t.disabled && t.doDisable(), t.$on("open", t.doOpen), t.$on("close", t.doClose), t.$on("disable", t.doDisable), t.$on("enable", t.doEnable), t.localShow && t.$_bv_toolpop && t.$_bv_toolpop.show()
                }))
            },
            methods: {
                getComponent: function () {
                    return Wl
                },
                updateContent: function () {
                    this.setTitle(this.$scopedSlots.default || this.title)
                },
                setTitle: function (t) {
                    t = et(t) ? "" : t, this.localTitle !== t && (this.localTitle = t)
                },
                setContent: function (t) {
                    t = et(t) ? "" : t, this.localContent !== t && (this.localContent = t)
                },
                onShow: function (t) {
                    this.$emit("show", t), t && (this.localShow = !t.defaultPrevented)
                },
                onShown: function (t) {
                    this.localShow = !0, this.$emit("shown", t)
                },
                onHide: function (t) {
                    this.$emit("hide", t)
                },
                onHidden: function (t) {
                    this.$emit("hidden", t), this.localShow = !1
                },
                onDisabled: function (t) {
                    t && "disabled" === t.type && (this.$emit("update:disabled", !0), this.$emit("disabled", t))
                },
                onEnabled: function (t) {
                    t && "enabled" === t.type && (this.$emit("update:disabled", !1), this.$emit("enabled", t))
                },
                doOpen: function () {
                    !this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.show()
                },
                doClose: function () {
                    this.localShow && this.$_bv_toolpop && this.$_bv_toolpop.hide()
                },
                doDisable: function (t) {
                    this.$_bv_toolpop && this.$_bv_toolpop.disable()
                },
                doEnable: function () {
                    this.$_bv_toolpop && this.$_bv_toolpop.enable()
                }
            },
            render: function (t) {
                return t()
            }
        }),
        Kl = t.extend({
            name: "BVPopoverTemplate",
            extends: Ml,
            computed: {
                templateType: function () {
                    return "popover"
                }
            },
            methods: {
                renderTemplate: function (t) {
                    var e = it(this.title) ? this.title({}) : this.title,
                        i = it(this.content) ? this.content({}) : this.content,
                        n = this.html && !it(this.title) ? {
                            innerHTML: this.title
                        } : {},
                        r = this.html && !it(this.content) ? {
                            innerHTML: this.content
                        } : {};
                    return t("div", {
                        staticClass: "popover b-popover",
                        class: this.templateClasses,
                        attrs: this.templateAttributes,
                        on: this.templateListeners
                    }, [t("div", {
                        ref: "arrow",
                        staticClass: "arrow"
                    }), et(e) || "" === e ? t() : t("h3", {
                        staticClass: "popover-header",
                        domProps: n
                    }, [e]), et(i) || "" === i ? t() : t("div", {
                        staticClass: "popover-body",
                        domProps: r
                    }, [i])])
                }
            }
        }),
        Xl = t.extend({
            name: "BVPopover",
            extends: Wl,
            computed: {
                templateType: function () {
                    return "popover"
                }
            },
            methods: {
                getTemplate: function () {
                    return Kl
                }
            }
        }),
        Yl = "BPopover",
        Zl = t.extend({
            name: Yl,
            extends: ql,
            inheritAttrs: !1,
            props: {
                title: {
                    type: String
                },
                content: {
                    type: String
                },
                triggers: {
                    type: [String, Array],
                    default: "click"
                },
                placement: {
                    type: String,
                    default: "right"
                },
                variant: {
                    type: String,
                    default: function () {
                        return Et(Yl, "variant")
                    }
                },
                customClass: {
                    type: String,
                    default: function () {
                        return Et(Yl, "customClass")
                    }
                },
                delay: {
                    type: [Number, Object, String],
                    default: function () {
                        return Et(Yl, "delay")
                    }
                },
                boundary: {
                    type: [String, HTMLElement, Object],
                    default: function () {
                        return Et(Yl, "boundary")
                    }
                },
                boundaryPadding: {
                    type: [Number, String],
                    default: function () {
                        return Et(Yl, "boundaryPadding")
                    }
                }
            },
            methods: {
                getComponent: function () {
                    return Xl
                },
                updateContent: function () {
                    this.setContent(this.$scopedSlots.default || this.content), this.setTitle(this.$scopedSlots.title || this.title)
                }
            }
        }),
        Jl = "__BV_Popover__",
        Ql = {
            focus: !0,
            hover: !0,
            click: !0,
            blur: !0,
            manual: !0
        },
        tu = /^html$/i,
        eu = /^nofade$/i,
        iu = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
        nu = /^(window|viewport|scrollParent)$/i,
        ru = /^d\d+$/i,
        ou = /^ds\d+$/i,
        au = /^dh\d+$/i,
        su = /^o-?\d+$/i,
        lu = /^v-.+$/i,
        uu = /\s+/,
        cu = function (t, e, i) {
            if (z) {
                var n = function (t, e) {
                    var i = "BPopover",
                        n = {
                            title: void 0,
                            content: void 0,
                            trigger: "",
                            placement: "right",
                            fallbackPlacement: "flip",
                            container: !1,
                            animation: !0,
                            offset: 0,
                            disabled: !1,
                            id: null,
                            html: !1,
                            delay: Et(i, "delay"),
                            boundary: String(Et(i, "boundary")),
                            boundaryPadding: parseInt(Et(i, "boundaryPadding"), 10) || 0,
                            variant: Et(i, "variant"),
                            customClass: Et(i, "customClass")
                        };
                    if (rt(t.value) || ot(t.value) ? n.content = t.value : it(t.value) ? n.content = t.value : F(t.value) && (n = s({}, n, {}, t.value)), t.arg && (n.container = "#".concat(t.arg)), Q(n.title)) {
                        var r = e.data || {};
                        n.title = r.attrs && !et(r.attrs.title) ? r.attrs.title : void 0
                    }
                    F(n.delay) || (n.delay = {
                        show: parseInt(n.delay, 10) || 0,
                        hide: parseInt(n.delay, 10) || 0
                    }), O(t.modifiers).forEach((function (t) {
                        if (tu.test(t)) n.html = !0;
                        else if (eu.test(t)) n.animation = !1;
                        else if (iu.test(t)) n.placement = t;
                        else if (nu.test(t)) t = "scrollparent" === t ? "scrollParent" : t, n.boundary = t;
                        else if (ru.test(t)) {
                            var e = parseInt(t.slice(1), 10) || 0;
                            n.delay.show = e, n.delay.hide = e
                        } else ou.test(t) ? n.delay.show = parseInt(t.slice(2), 10) || 0 : au.test(t) ? n.delay.hide = parseInt(t.slice(2), 10) || 0 : su.test(t) ? n.offset = parseInt(t.slice(1), 10) || 0 : lu.test(t) && (n.variant = t.slice(2) || null)
                    }));
                    var o = {};
                    return B(n.trigger || "").filter(dt).join(" ").trim().toLowerCase().split(uu).forEach((function (t) {
                        Ql[t] && (o[t] = !0)
                    })), O(t.modifiers).forEach((function (t) {
                        t = t.toLowerCase(), Ql[t] && (o[t] = !0)
                    })), n.trigger = O(o).join(" "), "blur" === n.trigger && (n.trigger = "focus"), n.trigger || (n.trigger = "click"), n
                }(e, i);
                if (!t[Jl]) {
                    var r = i.context;
                    t[Jl] = new Xl({
                        parent: r,
                        _scopeId: Ds(r, void 0)
                    }), t[Jl].__bv_prev_data__ = {}, t[Jl].$on("show", (function () {
                        var e = {};
                        it(n.title) && (e.title = n.title(t)), it(n.content) && (e.content = n.content(t)), O(e).length > 0 && t[Jl].updateData(e)
                    }))
                }
                var o = {
                        title: n.title,
                        content: n.content,
                        triggers: n.trigger,
                        placement: n.placement,
                        fallbackPlacement: n.fallbackPlacement,
                        variant: n.variant,
                        customClass: n.customClass,
                        container: n.container,
                        boundary: n.boundary,
                        delay: n.delay,
                        offset: n.offset,
                        noFade: !n.animation,
                        id: n.id,
                        disabled: n.disabled,
                        html: n.html
                    },
                    a = t[Jl].__bv_prev_data__;
                if (t[Jl].__bv_prev_data__ = o, !ln(o, a)) {
                    var l = {
                        target: t
                    };
                    O(o).forEach((function (e) {
                        o[e] !== a[e] && (l[e] = "title" !== e && "content" !== e || !it(o[e]) ? o[e] : o[e](t))
                    })), t[Jl].updateData(l)
                }
            }
        },
        du = Bt({
            directives: {
                VBPopover: {
                    bind: function (t, e, i) {
                        cu(t, e, i)
                    },
                    componentUpdated: function (t, e, i) {
                        i.context.$nextTick((function () {
                            cu(t, e, i)
                        }))
                    },
                    unbind: function (t) {
                        ! function (t) {
                            t[Jl] && (t[Jl].$destroy(), t[Jl] = null), delete t[Jl]
                        }(t)
                    }
                }
            }
        }),
        hu = Bt({
            components: {
                BPopover: Zl
            },
            plugins: {
                VBPopoverPlugin: du
            }
        }),
        fu = t.extend({
            name: "BProgressBar",
            mixins: [Pe],
            inject: {
                bvProgress: {
                    default: function () {
                        return {}
                    }
                }
            },
            props: {
                value: {
                    type: [Number, String],
                    default: 0
                },
                label: {
                    type: String,
                    default: null
                },
                labelHtml: {
                    type: String
                },
                max: {
                    type: [Number, String],
                    default: null
                },
                precision: {
                    type: [Number, String],
                    default: null
                },
                variant: {
                    type: String,
                    default: function () {
                        return Et("BProgressBar", "variant")
                    }
                },
                striped: {
                    type: Boolean,
                    default: null
                },
                animated: {
                    type: Boolean,
                    default: null
                },
                showProgress: {
                    type: Boolean,
                    default: null
                },
                showValue: {
                    type: Boolean,
                    default: null
                }
            },
            computed: {
                progressBarClasses: function () {
                    return [this.computedVariant ? "bg-".concat(this.computedVariant) : "", this.computedStriped || this.computedAnimated ? "progress-bar-striped" : "", this.computedAnimated ? "progress-bar-animated" : ""]
                },
                progressBarStyles: function () {
                    return {
                        width: this.computedValue / this.computedMax * 100 + "%"
                    }
                },
                computedValue: function () {
                    return me(this.value) || 0
                },
                computedMax: function () {
                    var t = me(this.max);
                    return isNaN(t) ? me(this.bvProgress.max) || 100 : t
                },
                computedPrecision: function () {
                    var t = pe(this.precision);
                    return isNaN(t) ? pe(this.bvProgress.precision) || 0 : t
                },
                computedProgress: function () {
                    var t = this.computedPrecision,
                        e = Math.pow(10, t);
                    return ge(100 * e * this.computedValue / this.computedMax / e, t)
                },
                computedVariant: function () {
                    return this.variant || this.bvProgress.variant
                },
                computedStriped: function () {
                    return nt(this.striped) ? this.striped : this.bvProgress.striped || !1
                },
                computedAnimated: function () {
                    return nt(this.animated) ? this.animated : this.bvProgress.animated || !1
                },
                computedShowProgress: function () {
                    return nt(this.showProgress) ? this.showProgress : this.bvProgress.showProgress || !1
                },
                computedShowValue: function () {
                    return nt(this.showValue) ? this.showValue : this.bvProgress.showValue || !1
                }
            },
            render: function (t) {
                var e = t();
                return this.hasNormalizedSlot("default") ? e = this.normalizeSlot("default") : this.label || this.labelHtml ? e = t("span", {
                    domProps: pi(this.labelHtml, this.label)
                }) : this.computedShowProgress ? e = this.computedProgress : this.computedShowValue && (e = ge(this.computedValue, this.computedPrecision)), t("div", {
                    staticClass: "progress-bar",
                    class: this.progressBarClasses,
                    style: this.progressBarStyles,
                    attrs: {
                        role: "progressbar",
                        "aria-valuemin": "0",
                        "aria-valuemax": Ue(this.computedMax),
                        "aria-valuenow": ge(this.computedValue, this.computedPrecision)
                    }
                }, [e])
            }
        }),
        pu = Bt({
            components: {
                BProgress: t.extend({
                    name: "BProgress",
                    mixins: [Pe],
                    provide: function () {
                        return {
                            bvProgress: this
                        }
                    },
                    props: {
                        variant: {
                            type: String,
                            default: function () {
                                return Et("BProgress", "variant")
                            }
                        },
                        striped: {
                            type: Boolean,
                            default: !1
                        },
                        animated: {
                            type: Boolean,
                            default: !1
                        },
                        height: {
                            type: String,
                            default: null
                        },
                        precision: {
                            type: [Number, String],
                            default: 0
                        },
                        showProgress: {
                            type: Boolean,
                            default: !1
                        },
                        showValue: {
                            type: Boolean,
                            default: !1
                        },
                        max: {
                            type: [Number, String],
                            default: 100
                        },
                        value: {
                            type: [Number, String],
                            default: 0
                        }
                    },
                    computed: {
                        progressHeight: function () {
                            return {
                                height: this.height || null
                            }
                        }
                    },
                    render: function (t) {
                        var e = this.normalizeSlot("default");
                        return e || (e = t(fu, {
                            props: {
                                value: this.value,
                                max: this.max,
                                precision: this.precision,
                                variant: this.variant,
                                animated: this.animated,
                                striped: this.striped,
                                showProgress: this.showProgress,
                                showValue: this.showValue
                            }
                        })), t("div", {
                            class: ["progress"],
                            style: this.progressHeight
                        }, [e])
                    }
                }),
                BProgressBar: fu
            }
        }),
        mu = Bt({
            components: {
                BSpinner: t.extend({
                    name: "BSpinner",
                    functional: !0,
                    props: {
                        type: {
                            type: String,
                            default: "border"
                        },
                        label: {
                            type: String,
                            default: null
                        },
                        variant: {
                            type: String,
                            default: function () {
                                return Et("BSpinner", "variant")
                            }
                        },
                        small: {
                            type: Boolean,
                            default: !1
                        },
                        role: {
                            type: String,
                            default: "status"
                        },
                        tag: {
                            type: String,
                            default: "span"
                        }
                    },
                    render: function (t, e) {
                        var i, n = e.props,
                            r = e.data,
                            a = e.slots,
                            s = e.scopedSlots,
                            l = a(),
                            u = _e("label", {}, s || {}, l) || n.label;
                        return u && (u = t("span", {
                            staticClass: "sr-only"
                        }, u)), t(n.tag, Be(r, {
                            attrs: {
                                role: u ? n.role || "status" : null,
                                "aria-hidden": u ? null : "true"
                            },
                            class: (i = {}, o(i, "spinner-".concat(n.type), n.type), o(i, "spinner-".concat(n.type, "-sm"), n.small), o(i, "text-".concat(n.variant), n.variant), i)
                        }), [u || t()])
                    }
                })
            }
        }),
        gu = {
            methods: {
                hasListener: function (t) {
                    var e = this.$listeners || {},
                        i = this._events || {};
                    return !Q(e[t]) || T(i[t]) && i[t].length > 0
                }
            }
        },
        vu = /_/g,
        bu = /([a-z])([A-Z])/g,
        yu = /(\s|^)(\w)/g,
        Su = function (t) {
            return t.replace(vu, " ").replace(bu, (function (t, e, i) {
                return e + " " + i
            })).replace(yu, (function (t, e, i) {
                return e + i.toUpperCase()
            }))
        },
        Tu = {
            _rowVariant: !0,
            _cellVariants: !0,
            _showDetails: !0
        },
        wu = ["a", "a *", "button", "button *", "input:not(.disabled):not([disabled])", "select:not(.disabled):not([disabled])", "textarea:not(.disabled):not([disabled])", '[role="link"]', '[role="link"] *', '[role="button"]', '[role="button"] *', "[tabindex]:not(.disabled):not([disabled])"].join(","),
        Bu = function (t, e) {
            var i = [];
            if (T(t) && t.filter(dt).forEach((function (t) {
                    if (rt(t)) i.push({
                        key: t,
                        label: Su(t)
                    });
                    else if (E(t) && t.key && rt(t.key)) i.push(V(t));
                    else if (E(t) && 1 === O(t).length) {
                        var e = O(t)[0],
                            n = function (t, e) {
                                var i = null;
                                return rt(e) ? i = {
                                    key: t,
                                    label: e
                                } : it(e) ? i = {
                                    key: t,
                                    formatter: e
                                } : E(e) ? (i = V(e)).key = i.key || t : !1 !== e && (i = {
                                    key: t
                                }), i
                            }(e, t[e]);
                        n && i.push(n)
                    }
                })), 0 === i.length && T(e) && e.length > 0) {
                var n = e[0];
                O(n).forEach((function (t) {
                    Tu[t] || i.push({
                        key: t,
                        label: Su(t)
                    })
                }))
            }
            var r = {};
            return i.filter((function (t) {
                return !r[t.key] && (r[t.key] = !0, t.label = rt(t.label) ? t.label : Su(t.key), !0)
            }))
        },
        ku = {
            props: {
                items: {
                    type: Array,
                    default: function () {
                        return []
                    }
                },
                fields: {
                    type: Array,
                    default: null
                },
                primaryKey: {
                    type: String,
                    default: null
                },
                value: {
                    type: Array,
                    default: function () {
                        return []
                    }
                }
            },
            data: function () {
                return {
                    localItems: T(this.items) ? this.items.slice() : []
                }
            },
            computed: {
                computedFields: function () {
                    return Bu(this.fields, this.localItems)
                },
                computedFieldsObj: function () {
                    var t = this.$parent;
                    return this.computedFields.reduce((function (e, i) {
                        if (e[i.key] = V(i), i.formatter) {
                            var n = i.formatter;
                            rt(n) && it(t[n]) ? n = t[n] : it(n) || (n = void 0), e[i.key].formatter = n
                        }
                        return e
                    }), {})
                },
                computedItems: function () {
                    return (this.paginatedItems || this.sortedItems || this.filteredItems || this.localItems || []).slice()
                },
                context: function () {
                    return {
                        filter: this.localFilter,
                        sortBy: this.localSortBy,
                        sortDesc: this.localSortDesc,
                        perPage: parseInt(this.perPage, 10) || 0,
                        currentPage: parseInt(this.currentPage, 10) || 1,
                        apiUrl: this.apiUrl
                    }
                }
            },
            watch: {
                items: function (t) {
                    T(t) ? this.localItems = t.slice() : et(t) && (this.localItems = [])
                },
                computedItems: function (t) {
                    this.$emit("input", t)
                },
                context: function (t, e) {
                    ln(t, e) || this.$emit("context-changed", t)
                }
            },
            mounted: function () {
                this.$emit("input", this.computedItems)
            },
            methods: {
                getFieldFormatter: function (t) {
                    var e = this.computedFieldsObj[t];
                    return e ? e.formatter : void 0
                }
            }
        },
        Cu = {
            props: {
                stacked: {
                    type: [Boolean, String],
                    default: !1
                }
            },
            computed: {
                isStacked: function () {
                    return "" === this.stacked || this.stacked
                },
                isStackedAlways: function () {
                    return !0 === this.isStacked
                },
                stackedTableClasses: function () {
                    return o({
                        "b-table-stacked": this.isStackedAlways
                    }, "b-table-stacked-".concat(this.stacked), !this.isStackedAlways && this.isStacked)
                }
            }
        },
        xu = function (t, e, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return O(t).reduce((function (r, o) {
                if (!Tu[o] && !(e && e.length > 0 && w(e, o)) && (!(i && i.length > 0) || w(i, o))) {
                    var a = n[o] || {},
                        s = t[o],
                        l = a.filterByFormatted,
                        u = it(l) ? l : l ? a.formatter : null;
                    r[o] = it(u) ? u(s, o, t) : s
                }
                return r
            }), {})
        },
        $u = function t(e) {
            return et(e) ? "" : E(e) && !at(e) ? O(e).sort().filter((function (t) {
                return !et(t)
            })).map((function (i) {
                return t(e[i])
            })).join(" ") : Ue(e)
        },
        _u = 'Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.',
        Pu = /[\s\uFEFF\xA0]+/g,
        Ou = {
            props: {
                filter: {
                    type: [String, RegExp, Object, Array],
                    default: null
                },
                filterFunction: {
                    type: Function,
                    default: null
                },
                filterIgnoredFields: {
                    type: Array
                },
                filterIncludedFields: {
                    type: Array
                },
                filterDebounce: {
                    type: [Number, String],
                    deprecated: _u,
                    default: 0,
                    validator: function (t) {
                        return /^\d+/.test(String(t))
                    }
                }
            },
            data: function () {
                return {
                    isFiltered: !1,
                    localFilter: this.filterSanitize(this.filter)
                }
            },
            computed: {
                computedFilterIgnored: function () {
                    return this.filterIgnoredFields ? B(this.filterIgnoredFields).filter(Boolean) : null
                },
                computedFilterIncluded: function () {
                    return this.filterIncludedFields ? B(this.filterIncludedFields).filter(Boolean) : null
                },
                computedFilterDebounce: function () {
                    var t = pe(this.filterDebounce) || 0;
                    return t > 0 && pt(_u, "BTable"), t
                },
                localFiltering: function () {
                    return !this.hasProvider || !!this.noProviderFiltering
                },
                filteredCheck: function () {
                    return {
                        filteredItems: this.filteredItems,
                        localItems: this.localItems,
                        localFilter: this.localFilter
                    }
                },
                localFilterFn: function () {
                    return it(this.filterFunction) ? this.filterFunction : null
                },
                filteredItems: function () {
                    var t = this.localItems || [],
                        e = this.localFilter,
                        i = this.localFiltering ? this.filterFnFactory(this.localFilterFn, e) || this.defaultFilterFnFactory(e) : null;
                    return i && t.length > 0 ? t.filter(i) : t
                }
            },
            watch: {
                computedFilterDebounce: function (t, e) {
                    !t && this.$_filterTimer && (clearTimeout(this.$_filterTimer), this.$_filterTimer = null, this.localFilter = this.filterSanitize(this.filter))
                },
                filter: {
                    deep: !0,
                    handler: function (t, e) {
                        var i = this,
                            n = this.computedFilterDebounce;
                        clearTimeout(this.$_filterTimer), this.$_filterTimer = null, n && n > 0 ? this.$_filterTimer = setTimeout((function () {
                            i.localFilter = i.filterSanitize(t)
                        }), n) : this.localFilter = this.filterSanitize(t)
                    }
                },
                filteredCheck: function (t) {
                    var e = t.filteredItems,
                        i = (t.localItems, t.localFilter),
                        n = !1;
                    i ? ln(i, []) || ln(i, {}) ? n = !1 : i && (n = !0) : n = !1, n && this.$emit("filtered", e, e.length), this.isFiltered = n
                },
                isFiltered: function (t, e) {
                    !1 === t && !0 === e && this.$emit("filtered", this.localItems, this.localItems.length)
                }
            },
            created: function () {
                var t = this;
                this.$_filterTimer = null, this.$nextTick((function () {
                    t.isFiltered = Boolean(t.localFilter)
                }))
            },
            beforeDestroy: function () {
                clearTimeout(this.$_filterTimer), this.$_filterTimer = null
            },
            methods: {
                filterSanitize: function (t) {
                    return !this.localFiltering || this.localFilterFn || rt(t) || ut(t) ? ct(t) : ""
                },
                filterFnFactory: function (t, e) {
                    if (!t || !it(t) || !e || ln(e, []) || ln(e, {})) return null;
                    return function (i) {
                        return t(i, e)
                    }
                },
                defaultFilterFnFactory: function (t) {
                    var e = this;
                    if (!t || !rt(t) && !ut(t)) return null;
                    var i = t;
                    if (rt(i)) {
                        var n = We(t).replace(Pu, "\\s+");
                        i = new RegExp(".*".concat(n, ".*"), "i")
                    }
                    return function (t) {
                        return i.lastIndex = 0, i.test((n = t, r = e.computedFilterIgnored, o = e.computedFilterIncluded, a = e.computedFieldsObj, E(n) ? $u(xu(n, r, o, a)) : ""));
                        var n, r, o, a
                    }
                }
            }
        },
        Iu = function (t, e) {
            return t.map((function (t, e) {
                return [e, t]
            })).sort(function (t, e) {
                return this(t[1], e[1]) || t[0] - e[0]
            }.bind(e)).map((function (t) {
                return t[1]
            }))
        },
        Eu = {
            props: {
                sortBy: {
                    type: String,
                    default: ""
                },
                sortDesc: {
                    type: Boolean,
                    default: !1
                },
                sortDirection: {
                    type: String,
                    default: "asc",
                    validator: function (t) {
                        return w(["asc", "desc", "last"], t)
                    }
                },
                sortCompare: {
                    type: Function,
                    default: null
                },
                sortCompareOptions: {
                    type: Object,
                    default: function () {
                        return {
                            numeric: !0
                        }
                    }
                },
                sortCompareLocale: {
                    type: [String, Array]
                },
                sortNullLast: {
                    type: Boolean,
                    default: !1
                },
                noSortReset: {
                    type: Boolean,
                    default: !1
                },
                labelSortAsc: {
                    type: String,
                    default: "Click to sort Ascending"
                },
                labelSortDesc: {
                    type: String,
                    default: "Click to sort Descending"
                },
                labelSortClear: {
                    type: String,
                    default: "Click to clear sorting"
                },
                noLocalSorting: {
                    type: Boolean,
                    default: !1
                },
                noFooterSorting: {
                    type: Boolean,
                    default: !1
                },
                sortIconLeft: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function () {
                return {
                    localSortBy: this.sortBy || "",
                    localSortDesc: this.sortDesc || !1
                }
            },
            computed: {
                localSorting: function () {
                    return this.hasProvider ? !!this.noProviderSorting : !this.noLocalSorting
                },
                isSortable: function () {
                    return this.computedFields.some((function (t) {
                        return t.sortable
                    }))
                },
                sortedItems: function () {
                    var t = (this.filteredItems || this.localItems || []).slice(),
                        e = this.localSortBy,
                        i = this.localSortDesc,
                        n = this.sortCompare,
                        r = this.localSorting,
                        o = s({}, this.sortCompareOptions, {
                            usage: "sort"
                        }),
                        a = this.sortCompareLocale || void 0,
                        l = this.sortNullLast;
                    if (e && r) {
                        var u = (this.computedFieldsObj[e] || {}).sortByFormatted,
                            c = it(u) ? u : u ? this.getFieldFormatter(e) : void 0;
                        return Iu(t, (function (t, r) {
                            var s = null;
                            return it(n) && (s = n(t, r, e, i, c, o, a)), (et(s) || !1 === s) && (s = function (t, e, i, n, r, o, a, s) {
                                var l = ft(t, i, null),
                                    u = ft(e, i, null);
                                return it(r) && (l = r(l, i, t), u = r(u, i, e)), l = et(l) ? "" : l, u = et(u) ? "" : u, at(l) && at(u) || ot(l) && ot(u) ? l < u ? -1 : l > u ? 1 : 0 : s && "" === l && "" !== u ? 1 : s && "" !== l && "" === u ? -1 : $u(l).localeCompare($u(u), a, o)
                            }(t, r, e, 0, c, o, a, l)), (s || 0) * (i ? -1 : 1)
                        }))
                    }
                    return t
                }
            },
            watch: {
                isSortable: function (t, e) {
                    t ? this.isSortable && this.$on("head-clicked", this.handleSort) : this.$off("head-clicked", this.handleSort)
                },
                sortDesc: function (t, e) {
                    t !== this.localSortDesc && (this.localSortDesc = t || !1)
                },
                sortBy: function (t, e) {
                    t !== this.localSortBy && (this.localSortBy = t || "")
                },
                localSortDesc: function (t, e) {
                    t !== e && this.$emit("update:sortDesc", t)
                },
                localSortBy: function (t, e) {
                    t !== e && this.$emit("update:sortBy", t)
                }
            },
            created: function () {
                this.isSortable && this.$on("head-clicked", this.handleSort)
            },
            methods: {
                handleSort: function (t, e, i, n) {
                    var r = this;
                    if (this.isSortable && (!n || !this.noFooterSorting)) {
                        var o = !1,
                            a = function () {
                                var t = e.sortDirection || r.sortDirection;
                                "asc" === t ? r.localSortDesc = !1 : "desc" === t && (r.localSortDesc = !0)
                            };
                        e.sortable ? (t === this.localSortBy ? this.localSortDesc = !this.localSortDesc : (this.localSortBy = t, a()), o = !0) : this.localSortBy && !this.noSortReset && (this.localSortBy = "", a(), o = !0), o && this.$emit("sort-changed", this.context)
                    }
                },
                sortTheadThClasses: function (t, e, i) {
                    return {
                        "b-table-sort-icon-left": e.sortable && this.sortIconLeft && !(i && this.noFooterSorting)
                    }
                },
                sortTheadThAttrs: function (t, e, i) {
                    if (!this.isSortable || i && this.noFooterSorting) return {};
                    var n = e.sortable;
                    return {
                        "aria-sort": n && this.localSortBy === t ? this.localSortDesc ? "descending" : "ascending" : n ? "none" : null
                    }
                },
                sortTheadThLabel: function (t, e, i) {
                    if (!this.isSortable || i && this.noFooterSorting) return null;
                    var n = "";
                    if (e.sortable)
                        if (this.localSortBy === t) n = this.localSortDesc ? this.labelSortAsc : this.labelSortDesc;
                        else {
                            n = this.localSortDesc ? this.labelSortDesc : this.labelSortAsc;
                            var r = this.sortDirection || e.sortDirection;
                            "asc" === r ? n = this.labelSortAsc : "desc" === r && (n = this.labelSortDesc)
                        }
                    else this.noSortReset || (n = this.localSortBy ? this.labelSortClear : "");
                    return qe(n) || null
                }
            }
        },
        Fu = {
            props: {
                perPage: {
                    type: [Number, String],
                    default: 0
                },
                currentPage: {
                    type: [Number, String],
                    default: 1
                }
            },
            computed: {
                localPaging: function () {
                    return !this.hasProvider || !!this.noProviderPaging
                },
                paginatedItems: function () {
                    var t = this.sortedItems || this.filteredItems || this.localItems || [],
                        e = Math.max(parseInt(this.currentPage, 10) || 1, 1),
                        i = Math.max(parseInt(this.perPage, 10) || 0, 0);
                    return this.localPaging && i && (t = t.slice((e - 1) * i, e * i)), t
                }
            }
        },
        Vu = {
            props: {
                caption: {
                    type: String,
                    default: null
                },
                captionHtml: {
                    type: String
                }
            },
            computed: {
                captionId: function () {
                    return this.isStacked ? this.safeId("_caption_") : null
                }
            },
            methods: {
                renderCaption: function () {
                    var t = this.$createElement,
                        e = this.normalizeSlot("table-caption"),
                        i = t();
                    if (e || this.caption || this.captionHtml) {
                        var n = {
                            key: "caption",
                            attrs: {
                                id: this.captionId
                            }
                        };
                        e || (n.domProps = pi(this.captionHtml, this.caption)), i = t("caption", n, [e])
                    }
                    return i
                }
            }
        },
        Au = {
            methods: {
                renderColgroup: function () {
                    var t = this.$createElement,
                        e = this.computedFields,
                        i = t();
                    return this.hasNormalizedSlot("table-colgroup") && (i = t("colgroup", {
                        key: "colgroup"
                    }, [this.normalizeSlot("table-colgroup", {
                        columns: e.length,
                        fields: e
                    })])), i
                }
            }
        },
        Du = ["TD", "TH", "TR"],
        Nu = function (t) {
            if (!t || !t.target) return !1;
            var e = t.target;
            if (e.disabled || -1 !== Du.indexOf(e.tagName)) return !1;
            if (Qt(".dropdown-menu", e)) return !0;
            var i = "LABEL" === e.tagName ? e : Qt("label", e);
            if (i) {
                var n = se(i, "for"),
                    r = n ? ee(n) : Zt("input, select, textarea", i);
                if (r && !r.disabled) return !0
            }
            return Jt(e, wu)
        },
        Ru = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                e = de();
            return !!(e && "" !== e.toString().trim() && e.containsNode && Ut(t)) && e.containsNode(t, !0)
        },
        Lu = {
            headVariant: {
                type: String,
                default: null
            }
        },
        Hu = t.extend({
            name: "BThead",
            mixins: [Pe],
            inheritAttrs: !1,
            provide: function () {
                return {
                    bvTableRowGroup: this
                }
            },
            inject: {
                bvTable: {
                    default: function () {
                        return {}
                    }
                }
            },
            props: Lu,
            computed: {
                isThead: function () {
                    return !0
                },
                isDark: function () {
                    return this.bvTable.dark
                },
                isStacked: function () {
                    return this.bvTable.isStacked
                },
                isResponsive: function () {
                    return this.bvTable.isResponsive
                },
                isStickyHeader: function () {
                    return !this.isStacked && this.bvTable.stickyHeader
                },
                hasStickyHeader: function () {
                    return !this.isStacked && this.bvTable.stickyHeader
                },
                tableVariant: function () {
                    return this.bvTable.tableVariant
                },
                theadClasses: function () {
                    return [this.headVariant ? "thead-".concat(this.headVariant) : null]
                },
                theadAttrs: function () {
                    return s({
                        role: "rowgroup"
                    }, this.$attrs)
                }
            },
            render: function (t) {
                return t("thead", {
                    class: this.theadClasses,
                    attrs: this.theadAttrs,
                    on: this.$listeners
                }, this.normalizeSlot("default", {}))
            }
        }),
        zu = {
            footVariant: {
                type: String,
                default: null
            }
        },
        Mu = t.extend({
            name: "BTfoot",
            mixins: [Pe],
            inheritAttrs: !1,
            provide: function () {
                return {
                    bvTableRowGroup: this
                }
            },
            inject: {
                bvTable: {
                    default: function () {
                        return {}
                    }
                }
            },
            props: zu,
            computed: {
                isTfoot: function () {
                    return !0
                },
                isDark: function () {
                    return this.bvTable.dark
                },
                isStacked: function () {
                    return this.bvTable.isStacked
                },
                isResponsive: function () {
                    return this.bvTable.isResponsive
                },
                isStickyHeader: function () {
                    return !1
                },
                hasStickyHeader: function () {
                    return !this.isStacked && this.bvTable.stickyHeader
                },
                tableVariant: function () {
                    return this.bvTable.tableVariant
                },
                tfootClasses: function () {
                    return [this.footVariant ? "thead-".concat(this.footVariant) : null]
                },
                tfootAttrs: function () {
                    return s({
                        role: "rowgroup"
                    }, this.$attrs)
                }
            },
            render: function (t) {
                return t("tfoot", {
                    class: this.tfootClasses,
                    attrs: this.tfootAttrs,
                    on: this.$listeners
                }, this.normalizeSlot("default", {}))
            }
        }),
        ju = {
            variant: {
                type: String,
                default: null
            }
        },
        Gu = t.extend({
            name: "BTr",
            mixins: [Pe],
            inheritAttrs: !1,
            provide: function () {
                return {
                    bvTableTr: this
                }
            },
            inject: {
                bvTableRowGroup: {
                    defaut: function () {
                        return {}
                    }
                }
            },
            props: ju,
            computed: {
                inTbody: function () {
                    return this.bvTableRowGroup.isTbody
                },
                inThead: function () {
                    return this.bvTableRowGroup.isThead
                },
                inTfoot: function () {
                    return this.bvTableRowGroup.isTfoot
                },
                isDark: function () {
                    return this.bvTableRowGroup.isDark
                },
                isStacked: function () {
                    return this.bvTableRowGroup.isStacked
                },
                isResponsive: function () {
                    return this.bvTableRowGroup.isResponsive
                },
                isStickyHeader: function () {
                    return this.bvTableRowGroup.isStickyHeader
                },
                hasStickyHeader: function () {
                    return !this.isStacked && this.bvTableRowGroup.hasStickyHeader
                },
                tableVariant: function () {
                    return this.bvTableRowGroup.tableVariant
                },
                headVariant: function () {
                    return this.inThead ? this.bvTableRowGroup.headVariant : null
                },
                footVariant: function () {
                    return this.inTfoot ? this.bvTableRowGroup.footVariant : null
                },
                isRowDark: function () {
                    return "light" !== this.headVariant && "light" !== this.footVariant && ("dark" === this.headVariant || "dark" === this.footVariant || this.isDark)
                },
                trClasses: function () {
                    return [this.variant ? "".concat(this.isRowDark ? "bg" : "table", "-").concat(this.variant) : null]
                },
                trAttrs: function () {
                    return s({
                        role: "row"
                    }, this.$attrs)
                }
            },
            render: function (t) {
                return t("tr", {
                    class: this.trClasses,
                    attrs: this.trAttrs,
                    on: this.$listeners
                }, this.normalizeSlot("default", {}))
            }
        }),
        Wu = /^\d+$/,
        Uu = function (t) {
            return t = parseInt(t, 10), Wu.test(String(t)) && t > 0 ? t : null
        },
        qu = function (t) {
            return et(t) || Uu(t) > 0
        },
        Ku = {
            variant: {
                type: String,
                default: null
            },
            colspan: {
                type: [Number, String],
                default: null,
                validator: qu
            },
            rowspan: {
                type: [Number, String],
                default: null,
                validator: qu
            },
            stackedHeading: {
                type: String,
                default: null
            },
            stickyColumn: {
                type: Boolean,
                default: !1
            }
        },
        Xu = t.extend({
            name: "BTableCell",
            mixins: [Pe],
            inheritAttrs: !1,
            inject: {
                bvTableTr: {
                    default: function () {
                        return {}
                    }
                }
            },
            props: Ku,
            computed: {
                tag: function () {
                    return "td"
                },
                inTbody: function () {
                    return this.bvTableTr.inTbody
                },
                inThead: function () {
                    return this.bvTableTr.inThead
                },
                inTfoot: function () {
                    return this.bvTableTr.inTfoot
                },
                isDark: function () {
                    return this.bvTableTr.isDark
                },
                isStacked: function () {
                    return this.bvTableTr.isStacked
                },
                isStackedCell: function () {
                    return this.inTbody && this.isStacked
                },
                isResponsive: function () {
                    return this.bvTableTr.isResponsive
                },
                isStickyHeader: function () {
                    return this.bvTableTr.isStickyHeader
                },
                hasStickyHeader: function () {
                    return this.bvTableTr.hasStickyHeader
                },
                isStickyColumn: function () {
                    return !this.isStacked && (this.isResponsive || this.hasStickyHeader) && this.stickyColumn
                },
                rowVariant: function () {
                    return this.bvTableTr.variant
                },
                headVariant: function () {
                    return this.bvTableTr.headVariant
                },
                footVariant: function () {
                    return this.bvTableTr.footVariant
                },
                tableVariant: function () {
                    return this.bvTableTr.tableVariant
                },
                computedColspan: function () {
                    return Uu(this.colspan)
                },
                computedRowspan: function () {
                    return Uu(this.rowspan)
                },
                cellClasses: function () {
                    var t = this.variant;
                    return (!t && this.isStickyHeader && !this.headVariant || !t && this.isStickyColumn) && (t = this.rowVariant || this.tableVariant || "b-table-default"), [t ? "".concat(this.isDark ? "bg" : "table", "-").concat(t) : null, this.isStickyColumn ? "b-table-sticky-column" : null]
                },
                cellAttrs: function () {
                    var t = this.inThead || this.inTfoot,
                        e = this.computedColspan,
                        i = this.computedRowspan,
                        n = "cell",
                        r = null;
                    return t ? (n = "columnheader", r = e > 0 ? "colspan" : "col") : "th" === this.tag && (n = "rowheader", r = i > 0 ? "rowgroup" : "row"), s({
                        colspan: e,
                        rowspan: i,
                        role: n,
                        scope: r
                    }, this.$attrs, {
                        "data-label": this.isStackedCell && !et(this.stackedHeading) ? Ue(this.stackedHeading) : null
                    })
                }
            },
            render: function (t) {
                var e = [this.normalizeSlot("default")];
                return t(this.tag, {
                    class: this.cellClasses,
                    attrs: this.cellAttrs,
                    on: this.$listeners
                }, [this.isStackedCell ? t("div", [e]) : e])
            }
        }),
        Yu = t.extend({
            name: "BTh",
            extends: Xu,
            computed: {
                tag: function () {
                    return "th"
                }
            }
        }),
        Zu = {
            props: {
                headVariant: {
                    type: String,
                    default: function () {
                        return Et("BTable", "headVariant")
                    }
                },
                headRowVariant: {
                    type: String,
                    default: null
                },
                theadClass: {
                    type: [String, Array, Object]
                },
                theadTrClass: {
                    type: [String, Array, Object]
                }
            },
            methods: {
                fieldClasses: function (t) {
                    return [t.class ? t.class : "", t.thClass ? t.thClass : ""]
                },
                headClicked: function (t, e, i) {
                    this.stopIfBusy && this.stopIfBusy(t) || Nu(t) || Ru(this.$el) || (t.stopPropagation(), t.preventDefault(), this.$emit("head-clicked", e.key, e, t, i))
                },
                renderThead: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        i = this.$createElement,
                        n = this.computedFields || [];
                    if (this.isStackedAlways || 0 === n.length) return i();
                    var r = this.isSelectable ? this.selectAllRows : function () {},
                        o = this.isSelectable ? this.clearSelected : function () {},
                        a = function (n, a) {
                            var l = null;
                            n.label.trim() || n.headerTitle || (l = Su(n.key));
                            var u = t.hasListener("head-clicked") || t.isSortable,
                                c = {};
                            u && (c.click = function (i) {
                                t.headClicked(i, n, e)
                            }, c.keydown = function (i) {
                                var r = i.keyCode;
                                r !== Ni.ENTER && r !== Ni.SPACE || t.headClicked(i, n, e)
                            });
                            var d = t.isSortable ? t.sortTheadThAttrs(n.key, n, e) : {},
                                h = t.isSortable ? t.sortTheadThClasses(n.key, n, e) : null,
                                f = t.isSortable ? t.sortTheadThLabel(n.key, n, e) : null,
                                p = {
                                    key: n.key,
                                    class: [t.fieldClasses(n), h],
                                    props: {
                                        variant: n.variant,
                                        stickyColumn: n.stickyColumn
                                    },
                                    style: n.thStyle || {},
                                    attrs: s({
                                        tabindex: u ? "0" : null,
                                        abbr: n.headerAbbr || null,
                                        title: n.headerTitle || null,
                                        "aria-colindex": a + 1,
                                        "aria-label": l
                                    }, t.getThValues(null, n.key, n.thAttr, e ? "foot" : "head", {}), {}, d),
                                    on: c
                                },
                                m = ["head(".concat(n.key, ")"), "head(".concat(n.key.toLowerCase(), ")"), "head()"];
                            e && (m = ["foot(".concat(n.key, ")"), "foot(".concat(n.key.toLowerCase(), ")"), "foot()"].concat(v(m)));
                            var g = {
                                    label: n.label,
                                    column: n.key,
                                    field: n,
                                    isFoot: e,
                                    selectAllRows: r,
                                    clearSelected: o
                                },
                                b = t.normalizeSlot(m, g) || (n.labelHtml ? i("div", {
                                    domProps: pi(n.labelHtml)
                                }) : n.label),
                                y = f ? i("span", {
                                    staticClass: "sr-only"
                                }, " (".concat(f, ")")) : null;
                            return i(Yu, p, [b, y].filter(dt))
                        },
                        l = n.map(a).filter(dt),
                        u = [];
                    if (e) {
                        var c = {
                            variant: et(this.footRowVariant) ? this.headRowVariant : this.footRowVariant
                        };
                        u.push(i(Gu, {
                            class: this.tfootTrClass,
                            props: c
                        }, l))
                    } else {
                        var d = {
                            columns: n.length,
                            fields: n,
                            selectAllRows: r,
                            clearSelected: o
                        };
                        u.push(this.normalizeSlot("thead-top", d) || i()), u.push(i(Gu, {
                            class: this.theadTrClass,
                            props: {
                                variant: this.headRowVariant
                            }
                        }, l))
                    }
                    return i(e ? Mu : Hu, {
                        key: e ? "bv-tfoot" : "bv-thead",
                        class: (e ? this.tfootClass : this.theadClass) || null,
                        props: e ? {
                            footVariant: this.footVariant || this.headVariant || null
                        } : {
                            headVariant: this.headVariant || null
                        }
                    }, u)
                }
            }
        },
        Ju = {
            props: {
                footClone: {
                    type: Boolean,
                    default: !1
                },
                footVariant: {
                    type: String,
                    default: function () {
                        return Et("BTable", "footVariant")
                    }
                },
                footRowVariant: {
                    type: String,
                    default: null
                },
                tfootClass: {
                    type: [String, Array, Object],
                    default: null
                },
                tfootTrClass: {
                    type: [String, Array, Object],
                    default: null
                }
            },
            methods: {
                renderTFootCustom: function () {
                    var t = this.$createElement;
                    return this.hasNormalizedSlot("custom-foot") ? t(Mu, {
                        key: "bv-tfoot-custom",
                        class: this.tfootClass || null,
                        props: {
                            footVariant: this.footVariant || this.headVariant || null
                        }
                    }, this.normalizeSlot("custom-foot", {
                        items: this.computedItems.slice(),
                        fields: this.computedFields.slice(),
                        columns: this.computedFields.length
                    })) : t()
                },
                renderTfoot: function () {
                    return this.footClone ? this.renderThead(!0) : this.renderTFootCustom()
                }
            }
        },
        Qu = {
            tbodyTransitionProps: {
                type: Object
            },
            tbodyTransitionHandlers: {
                type: Object
            }
        },
        tc = t.extend({
            name: "BTbody",
            mixins: [Pe],
            inheritAttrs: !1,
            provide: function () {
                return {
                    bvTableRowGroup: this
                }
            },
            inject: {
                bvTable: {
                    default: function () {
                        return {}
                    }
                }
            },
            props: Qu,
            computed: {
                isTbody: function () {
                    return !0
                },
                isDark: function () {
                    return this.bvTable.dark
                },
                isStacked: function () {
                    return this.bvTable.isStacked
                },
                isResponsive: function () {
                    return this.bvTable.isResponsive
                },
                isStickyHeader: function () {
                    return !1
                },
                hasStickyHeader: function () {
                    return !this.isStacked && this.bvTable.stickyHeader
                },
                tableVariant: function () {
                    return this.bvTable.tableVariant
                },
                isTransitionGroup: function () {
                    return this.tbodyTransitionProps || this.tbodyTransitionHandlers
                },
                tbodyAttrs: function () {
                    return s({
                        role: "rowgroup"
                    }, this.$attrs)
                },
                tbodyProps: function () {
                    return this.tbodyTransitionProps ? s({}, this.tbodyTransitionProps, {
                        tag: "tbody"
                    }) : {}
                }
            },
            render: function (t) {
                var e = {
                    props: this.tbodyProps,
                    attrs: this.tbodyAttrs
                };
                return this.isTransitionGroup ? (e.on = this.tbodyTransitionHandlers || {}, e.nativeOn = this.$listeners || {}) : e.on = this.$listeners || {}, t(this.isTransitionGroup ? "transition-group" : "tbody", e, this.normalizeSlot("default", {}))
            }
        }),
        ec = {
            mixins: [{
                props: {
                    tbodyTrClass: {
                        type: [String, Array, Object, Function],
                        default: null
                    },
                    tbodyTrAttr: {
                        type: [Object, Function],
                        default: null
                    },
                    detailsTdClass: {
                        type: [String, Array, Object],
                        default: null
                    }
                },
                methods: {
                    getTdValues: function (t, e, i, n) {
                        var r = this.$parent;
                        if (i) {
                            var o = ft(t, e, "");
                            return it(i) ? i(o, e, t) : rt(i) && it(r[i]) ? r[i](o, e, t) : i
                        }
                        return n
                    },
                    getThValues: function (t, e, i, n, r) {
                        var o = this.$parent;
                        if (i) {
                            var a = ft(t, e, "");
                            return it(i) ? i(a, e, t, n) : rt(i) && it(o[i]) ? o[i](a, e, t, n) : i
                        }
                        return r
                    },
                    getFormattedValue: function (t, e) {
                        var i = e.key,
                            n = this.getFieldFormatter(i),
                            r = ft(t, i, null);
                        return it(n) && (r = n(r, i, t)), et(r) ? "" : r
                    },
                    toggleDetailsFactory: function (t, e) {
                        var i = this;
                        return function () {
                            t && i.$set(e, "_showDetails", !e._showDetails)
                        }
                    },
                    rowHovered: function (t) {
                        this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent("row-hovered", t)
                    },
                    rowUnhovered: function (t) {
                        this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent("row-unhovered", t)
                    },
                    renderTbodyRowCell: function (t, e, i, n) {
                        var r = this,
                            o = this.$createElement,
                            a = this.hasNormalizedSlot("row-details"),
                            l = this.getFormattedValue(i, t),
                            u = t.key,
                            c = !this.isStacked && (this.isResponsive || this.stickyHeader) && t.stickyColumn,
                            d = c ? t.isRowHeader ? Yu : Xu : t.isRowHeader ? "th" : "td",
                            h = i._cellVariants && i._cellVariants[u] ? i._cellVariants[u] : t.variant || null,
                            f = {
                                key: "row-".concat(n, "-cell-").concat(e, "-").concat(u),
                                class: [t.class ? t.class : "", this.getTdValues(i, u, t.tdClass, "")],
                                props: {},
                                attrs: s({
                                    "aria-colindex": String(e + 1)
                                }, t.isRowHeader ? this.getThValues(i, u, t.thAttr, "row", {}) : this.getTdValues(i, u, t.tdAttr, {}))
                            };
                        c ? f.props = {
                            stackedHeading: this.isStacked ? t.label : null,
                            stickyColumn: !0,
                            variant: h
                        } : (f.attrs["data-label"] = this.isStacked && !et(t.label) ? Ue(t.label) : null, f.attrs.role = t.isRowHeader ? "rowheader" : "cell", f.attrs.scope = t.isRowHeader ? "row" : null, h && f.class.push("".concat(this.dark ? "bg" : "table", "-").concat(h)));
                        var p = {
                            item: i,
                            index: n,
                            field: t,
                            unformatted: ft(i, u, ""),
                            value: l,
                            toggleDetails: this.toggleDetailsFactory(a, i),
                            detailsShowing: Boolean(i._showDetails)
                        };
                        this.supportsSelectableRows && (p.rowSelected = this.isRowSelected(n), p.selectRow = function () {
                            return r.selectRow(n)
                        }, p.unselectRow = function () {
                            return r.unselectRow(n)
                        });
                        var m = this.$_bodyFieldSlotNameCache[u],
                            g = m ? this.normalizeSlot(m, p) : Ue(l);
                        return this.isStacked && (g = [o("div", {}, [g])]), o(d, f, [g])
                    },
                    renderTbodyRow: function (t, e) {
                        var i = this,
                            n = this.$createElement,
                            r = this.computedFields,
                            o = this.striped,
                            a = this.hasNormalizedSlot("row-details"),
                            l = t._showDetails && a,
                            u = this.$listeners["row-clicked"] || this.hasSelectableRowClick,
                            c = [],
                            d = l ? this.safeId("_details_".concat(e, "_")) : null,
                            h = r.map((function (n, r) {
                                return i.renderTbodyRowCell(n, r, t, e)
                            })),
                            f = null;
                        this.currentPage && this.perPage && this.perPage > 0 && (f = String((this.currentPage - 1) * this.perPage + e + 1));
                        var p = this.primaryKey,
                            m = Ue(ft(t, p)) || null,
                            g = m || Ue(e),
                            v = m ? this.safeId("_row_".concat(m)) : null,
                            b = this.selectableRowClasses ? this.selectableRowClasses(e) : {},
                            y = this.selectableRowAttrs ? this.selectableRowAttrs(e) : {},
                            S = it(this.tbodyTrClass) ? this.tbodyTrClass(t, "row") : this.tbodyTrClass,
                            T = it(this.tbodyTrAttr) ? this.tbodyTrAttr(t, "row") : this.tbodyTrAttr;
                        if (c.push(n(Gu, {
                                key: "__b-table-row-".concat(g, "__"),
                                ref: "itemRows",
                                refInFor: !0,
                                class: [S, b, l ? "b-table-has-details" : ""],
                                props: {
                                    variant: t._rowVariant || null
                                },
                                attrs: s({
                                    id: v
                                }, T, {
                                    tabindex: u ? "0" : null,
                                    "data-pk": m || null,
                                    "aria-details": d,
                                    "aria-owns": d,
                                    "aria-rowindex": f
                                }, y),
                                on: {
                                    mouseenter: this.rowHovered,
                                    mouseleave: this.rowUnhovered
                                }
                            }, h)), l) {
                            var w = {
                                item: t,
                                index: e,
                                fields: r,
                                toggleDetails: this.toggleDetailsFactory(a, t)
                            };
                            this.supportsSelectableRows && (w.rowSelected = this.isRowSelected(e), w.selectRow = function () {
                                return i.selectRow(e)
                            }, w.unselectRow = function () {
                                return i.unselectRow(e)
                            });
                            var B = n(Xu, {
                                props: {
                                    colspan: r.length
                                },
                                class: this.detailsTdClass
                            }, [this.normalizeSlot("row-details", w)]);
                            o && c.push(n("tr", {
                                key: "__b-table-details-stripe__".concat(g),
                                staticClass: "d-none",
                                attrs: {
                                    "aria-hidden": "true",
                                    role: "presentation"
                                }
                            }));
                            var k = it(this.tbodyTrClass) ? this.tbodyTrClass(t, "row-details") : this.tbodyTrClass,
                                C = it(this.tbodyTrAttr) ? this.tbodyTrAttr(t, "row-details") : this.tbodyTrAttr;
                            c.push(n(Gu, {
                                key: "__b-table-details__".concat(g),
                                staticClass: "b-table-details",
                                class: [k],
                                props: {
                                    variant: t._rowVariant || null
                                },
                                attrs: s({}, C, {
                                    id: d,
                                    tabindex: "-1"
                                })
                            }, [B]))
                        } else a && (c.push(n()), o && c.push(n()));
                        return c
                    }
                }
            }],
            props: s({}, Qu, {
                tbodyClass: {
                    type: [String, Array, Object]
                }
            }),
            methods: {
                getTbodyTrs: function () {
                    var t = this.$refs || {},
                        e = t.tbody ? t.tbody.$el || t.tbody : null,
                        i = (t.itemRows || []).map((function (t) {
                            return t.$el || t
                        }));
                    return e && e.children && e.children.length > 0 && i && i.length > 0 ? S(e.children).filter((function (t) {
                        return w(i, t)
                    })) : []
                },
                getTbodyTrIndex: function (t) {
                    if (!Ut(t)) return -1;
                    var e = "TR" === t.tagName ? t : Qt("tr", t, !0);
                    return e ? this.getTbodyTrs().indexOf(e) : -1
                },
                emitTbodyRowEvent: function (t, e) {
                    if (t && this.hasListener(t) && e && e.target) {
                        var i = this.getTbodyTrIndex(e.target);
                        if (i > -1) {
                            var n = this.computedItems[i];
                            this.$emit(t, n, i, e)
                        }
                    }
                },
                tbodyRowEvtStopped: function (t) {
                    return this.stopIfBusy && this.stopIfBusy(t)
                },
                onTbodyRowKeydown: function (t) {
                    var e = t.target;
                    if (!this.tbodyRowEvtStopped(t) && "TR" === e.tagName && e === document.activeElement && 0 === e.tabIndex) {
                        var i = t.keyCode;
                        if (w([Ni.ENTER, Ni.SPACE], i)) t.stopPropagation(), t.preventDefault(), this.onTBodyRowClicked(t);
                        else if (w([Ni.UP, Ni.DOWN, Ni.HOME, Ni.END], i)) {
                            var n = this.getTbodyTrIndex(e);
                            if (n > -1) {
                                t.stopPropagation(), t.preventDefault();
                                var r = this.getTbodyTrs(),
                                    o = t.shiftKey;
                                i === Ni.HOME || o && i === Ni.UP ? r[0].focus() : i === Ni.END || o && i === Ni.DOWN ? r[r.length - 1].focus() : i === Ni.UP && n > 0 ? r[n - 1].focus() : i === Ni.DOWN && n < r.length - 1 && r[n + 1].focus()
                            }
                        }
                    }
                },
                onTBodyRowClicked: function (t) {
                    this.tbodyRowEvtStopped(t) || Nu(t) || Ru(this.$el) || this.emitTbodyRowEvent("row-clicked", t)
                },
                onTbodyRowMiddleMouseRowClicked: function (t) {
                    this.tbodyRowEvtStopped(t) || 2 !== t.which || this.emitTbodyRowEvent("row-middle-clicked", t)
                },
                onTbodyRowContextmenu: function (t) {
                    this.tbodyRowEvtStopped(t) || this.emitTbodyRowEvent("row-contextmenu", t)
                },
                onTbodyRowDblClicked: function (t) {
                    this.tbodyRowEvtStopped(t) || Nu(t) || this.emitTbodyRowEvent("row-dblclicked", t)
                },
                renderTbody: function () {
                    var t = this,
                        e = this.computedItems,
                        i = this.$createElement,
                        n = this.hasListener("row-clicked") || this.hasSelectableRowClick,
                        r = [],
                        o = this.renderBusy ? this.renderBusy() : null;
                    if (o) r.push(o);
                    else {
                        var a = {},
                            s = this.hasNormalizedSlot("cell()") ? "cell()" : null;
                        this.computedFields.forEach((function (e) {
                            var i = e.key,
                                n = "cell(".concat(i, ")"),
                                r = "cell(".concat(i.toLowerCase(), ")");
                            a[i] = t.hasNormalizedSlot(n) ? n : t.hasNormalizedSlot(r) ? r : s
                        })), this.$_bodyFieldSlotNameCache = a, r.push(this.renderTopRow ? this.renderTopRow() : i()), e.forEach((function (e, i) {
                            r.push(t.renderTbodyRow(e, i))
                        })), r.push(this.renderEmpty ? this.renderEmpty() : i()), r.push(this.renderBottomRow ? this.renderBottomRow() : i())
                    }
                    var l = {
                        auxclick: this.onTbodyRowMiddleMouseRowClicked,
                        contextmenu: this.onTbodyRowContextmenu,
                        dblclick: this.onTbodyRowDblClicked
                    };
                    return n && (l.click = this.onTBodyRowClicked, l.keydown = this.onTbodyRowKeydown), i(tc, {
                        ref: "tbody",
                        class: this.tbodyClass || null,
                        props: {
                            tbodyTransitionProps: this.tbodyTransitionProps,
                            tbodyTransitionHandlers: this.tbodyTransitionHandlers
                        },
                        on: l
                    }, r)
                }
            }
        },
        ic = {
            props: {
                showEmpty: {
                    type: Boolean,
                    default: !1
                },
                emptyText: {
                    type: String,
                    default: "There are no records to show"
                },
                emptyHtml: {
                    type: String
                },
                emptyFilteredText: {
                    type: String,
                    default: "There are no records matching your request"
                },
                emptyFilteredHtml: {
                    type: String
                }
            },
            methods: {
                renderEmpty: function () {
                    var t, e = this.$createElement,
                        i = this.computedItems;
                    return !this.showEmpty || i && 0 !== i.length || this.computedBusy && this.hasNormalizedSlot("table-busy") || ((t = this.normalizeSlot(this.isFiltered ? "emptyfiltered" : "empty", {
                        emptyFilteredHtml: this.emptyFilteredHtml,
                        emptyFilteredText: this.emptyFilteredText,
                        emptyHtml: this.emptyHtml,
                        emptyText: this.emptyText,
                        fields: this.computedFields,
                        items: this.computedItems
                    })) || (t = e("div", {
                        class: ["text-center", "my-2"],
                        domProps: this.isFiltered ? pi(this.emptyFilteredHtml, this.emptyFilteredText) : pi(this.emptyHtml, this.emptyText)
                    })), t = e(Xu, {
                        props: {
                            colspan: this.computedFields.length || null
                        }
                    }, [e("div", {
                        attrs: {
                            role: "alert",
                            "aria-live": "polite"
                        }
                    }, [t])]), t = e(Gu, {
                        key: this.isFiltered ? "b-empty-filtered-row" : "b-empty-row",
                        staticClass: "b-table-empty-row",
                        class: [it(this.tbodyTrClass) ? this.tbodyTrClass(null, "row-empty") : this.tbodyTrClass],
                        attrs: it(this.tbodyTrAttr) ? this.tbodyTrAttr(null, "row-empty") : this.tbodyTrAttr
                    }, [t])), t || e()
                }
            }
        },
        nc = {
            methods: {
                renderTopRow: function () {
                    var t = this.$createElement;
                    if (!this.hasNormalizedSlot("top-row") || !0 === this.stacked || "" === this.stacked) return t();
                    var e = this.computedFields;
                    return t(Gu, {
                        key: "b-top-row",
                        staticClass: "b-table-top-row",
                        class: [it(this.tbodyTrClass) ? this.tbodyTrClass(null, "row-top") : this.tbodyTrClass],
                        attrs: it(this.tbodyTrAttr) ? this.tbodyTrAttr(null, "row-top") : this.tbodyTrAttr
                    }, [this.normalizeSlot("top-row", {
                        columns: e.length,
                        fields: e
                    })])
                }
            }
        },
        rc = {
            methods: {
                renderBottomRow: function () {
                    var t = this.$createElement;
                    if (!this.hasNormalizedSlot("bottom-row") || !0 === this.stacked || "" === this.stacked) return t();
                    var e = this.computedFields;
                    return t(Gu, {
                        key: "b-bottom-row",
                        staticClass: "b-table-bottom-row",
                        class: [it(this.tbodyTrClass) ? this.tbodyTrClass(null, "row-bottom") : this.tbodyTrClass],
                        attrs: it(this.tbodyTrAttr) ? this.tbodyTrAttr(null, "row-bottom") : this.tbodyTrAttr
                    }, this.normalizeSlot("bottom-row", {
                        columns: e.length,
                        fields: e
                    }))
                }
            }
        },
        oc = {
            props: {
                busy: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function () {
                return {
                    localBusy: !1
                }
            },
            computed: {
                computedBusy: function () {
                    return this.busy || this.localBusy
                }
            },
            watch: {
                localBusy: function (t, e) {
                    t !== e && this.$emit("update:busy", t)
                }
            },
            methods: {
                stopIfBusy: function (t) {
                    return !!this.computedBusy && (t.preventDefault(), t.stopPropagation(), !0)
                },
                renderBusy: function () {
                    var t = this.$createElement;
                    return this.computedBusy && this.hasNormalizedSlot("table-busy") ? t(Gu, {
                        key: "table-busy-slot",
                        staticClass: "b-table-busy-slot",
                        class: [it(this.tbodyTrClass) ? this.tbodyTrClass(null, "table-busy") : this.tbodyTrClass],
                        attrs: it(this.tbodyTrAttr) ? this.tbodyTrAttr(null, "table-busy") : this.tbodyTrAttr
                    }, [t(Xu, {
                        props: {
                            colspan: this.computedFields.length || null
                        }
                    }, [this.normalizeSlot("table-busy")])]) : null
                }
            }
        },
        ac = {
            props: {
                selectable: {
                    type: Boolean,
                    default: !1
                },
                selectMode: {
                    type: String,
                    default: "multi",
                    validator: function (t) {
                        return w(["range", "multi", "single"], t)
                    }
                },
                selectedVariant: {
                    type: String,
                    default: function () {
                        return Et("BTable", "selectedVariant")
                    }
                },
                noSelectOnClick: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function () {
                return {
                    selectedRows: [],
                    selectedLastRow: -1
                }
            },
            computed: {
                isSelectable: function () {
                    return this.selectable && this.selectMode
                },
                hasSelectableRowClick: function () {
                    return this.isSelectable && !this.noSelectOnClick
                },
                supportsSelectableRows: function () {
                    return !0
                },
                selectableHasSelection: function () {
                    return this.isSelectable && this.selectedRows && this.selectedRows.length > 0 && this.selectedRows.some(dt)
                },
                selectableIsMultiSelect: function () {
                    return this.isSelectable && w(["range", "multi"], this.selectMode)
                },
                selectableTableClasses: function () {
                    var t;
                    return o(t = {
                        "b-table-selectable": this.isSelectable
                    }, "b-table-select-".concat(this.selectMode), this.isSelectable), o(t, "b-table-selecting", this.selectableHasSelection), o(t, "b-table-selectable-no-click", this.isSelectable && !this.hasSelectableRowClick), t
                },
                selectableTableAttrs: function () {
                    return {
                        "aria-multiselectable": this.isSelectable ? this.selectableIsMultiSelect ? "true" : "false" : null
                    }
                }
            },
            watch: {
                computedItems: function (t, e) {
                    var i = !1;
                    if (this.isSelectable && this.selectedRows.length > 0) {
                        i = T(t) && T(e) && t.length === e.length;
                        for (var n = 0; i && n < t.length; n++) i = ln(xu(t[n]), xu(e[n]))
                    }
                    i || this.clearSelected()
                },
                selectable: function (t, e) {
                    this.clearSelected(), this.setSelectionHandlers(t)
                },
                selectMode: function (t, e) {
                    this.clearSelected()
                },
                hasSelectableRowClick: function (t, e) {
                    this.clearSelected(), this.setSelectionHandlers(!t)
                },
                selectedRows: function (t, e) {
                    var i = this;
                    if (this.isSelectable && !ln(t, e)) {
                        var n = [];
                        t.forEach((function (t, e) {
                            t && n.push(i.computedItems[e])
                        })), this.$emit("row-selected", n)
                    }
                }
            },
            beforeMount: function () {
                this.isSelectable && this.setSelectionHandlers(!0)
            },
            methods: {
                selectRow: function (t) {
                    if (this.isSelectable && ot(t) && t >= 0 && t < this.computedItems.length && !this.isRowSelected(t)) {
                        var e = this.selectableIsMultiSelect ? this.selectedRows.slice() : [];
                        e[t] = !0, this.selectedLastClicked = -1, this.selectedRows = e
                    }
                },
                unselectRow: function (t) {
                    if (this.isSelectable && ot(t) && this.isRowSelected(t)) {
                        var e = this.selectedRows.slice();
                        e[t] = !1, this.selectedLastClicked = -1, this.selectedRows = e
                    }
                },
                selectAllRows: function () {
                    var t = this.computedItems.length;
                    this.isSelectable && t > 0 && (this.selectedLastClicked = -1, this.selectedRows = this.selectableIsMultiSelect ? $l(t).map((function (t) {
                        return !0
                    })) : [!0])
                },
                isRowSelected: function (t) {
                    return !(!ot(t) || !this.selectedRows[t])
                },
                clearSelected: function () {
                    this.selectedLastClicked = -1, this.selectedRows = []
                },
                selectableRowClasses: function (t) {
                    if (this.isSelectable && this.isRowSelected(t)) {
                        var e = this.selectedVariant;
                        return o({
                            "b-table-row-selected": !0
                        }, "".concat(this.dark ? "bg" : "table", "-").concat(e), e)
                    }
                    return {}
                },
                selectableRowAttrs: function (t) {
                    return {
                        "aria-selected": this.isSelectable ? this.isRowSelected(t) ? "true" : "false" : null
                    }
                },
                setSelectionHandlers: function (t) {
                    var e = t && !this.noSelectOnClick ? "$on" : "$off";
                    this[e]("row-clicked", this.selectionHandler), this[e]("filtered", this.clearSelected), this[e]("context-changed", this.clearSelected)
                },
                selectionHandler: function (t, e, i) {
                    if (this.isSelectable && !this.noSelectOnClick) {
                        var n = this.selectMode,
                            r = this.selectedRows.slice(),
                            o = !r[e];
                        if ("single" === n) r = [];
                        else if ("range" === n)
                            if (this.selectedLastRow > -1 && i.shiftKey) {
                                for (var a = Math.min(this.selectedLastRow, e); a <= Math.max(this.selectedLastRow, e); a++) r[a] = !0;
                                o = !0
                            } else i.ctrlKey || i.metaKey || (r = [], o = !0), this.selectedLastRow = o ? e : -1;
                        r[e] = o, this.selectedRows = r
                    } else this.clearSelected()
                }
            }
        },
        sc = {
            mixins: [An],
            props: {
                items: {
                    type: [Array, Function],
                    default: function () {
                        return []
                    }
                },
                noProviderPaging: {
                    type: Boolean,
                    default: !1
                },
                noProviderSorting: {
                    type: Boolean,
                    default: !1
                },
                noProviderFiltering: {
                    type: Boolean,
                    default: !1
                },
                apiUrl: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                hasProvider: function () {
                    return it(this.items)
                },
                providerTriggerContext: function () {
                    var t = {
                        apiUrl: this.apiUrl,
                        filter: null,
                        sortBy: null,
                        sortDesc: null,
                        perPage: null,
                        currentPage: null
                    };
                    return this.noProviderFiltering || (t.filter = this.localFilter), this.noProviderSorting || (t.sortBy = this.localSortBy, t.sortDesc = this.localSortDesc), this.noProviderPaging || (t.perPage = this.perPage, t.currentPage = this.currentPage), V(t)
                }
            },
            watch: {
                items: function (t, e) {
                    (this.hasProvider || it(t)) && this.$nextTick(this._providerUpdate)
                },
                providerTriggerContext: function (t, e) {
                    ln(t, e) || this.$nextTick(this._providerUpdate)
                }
            },
            mounted: function () {
                var t = this;
                !this.hasProvider || this.localItems && 0 !== this.localItems.length || this._providerUpdate(), this.listenOnRoot("bv::refresh::table", (function (e) {
                    e !== t.id && e !== t || t.refresh()
                }))
            },
            methods: {
                refresh: function () {
                    this.$off("refreshed", this.refresh), this.computedBusy ? this.localBusy && this.hasProvider && this.$on("refreshed", this.refresh) : (this.clearSelected(), this.hasProvider ? this.$nextTick(this._providerUpdate) : this.localItems = T(this.items) ? this.items.slice() : [])
                },
                _providerSetLocal: function (t) {
                    this.localItems = T(t) ? t.slice() : [], this.localBusy = !1, this.$emit("refreshed"), this.id && this.emitOnRoot("bv::table::refreshed", this.id)
                },
                _providerUpdate: function () {
                    var t = this;
                    this.hasProvider && (this.computedBusy ? this.$nextTick(this.refresh) : (this.localBusy = !0, this.$nextTick((function () {
                        try {
                            var e = t.items(t.context, t._providerSetLocal);
                            !et(i = e) && it(i.then) && it(i.catch) ? e.then((function (e) {
                                t._providerSetLocal(e)
                            })) : T(e) ? t._providerSetLocal(e) : 2 !== t.items.length && (pt("Provider function didn't request callback and did not return a promise or data.", "BTable"), t.localBusy = !1)
                        } catch (e) {
                            pt("Provider function error [".concat(e.name, "] ").concat(e.message, "."), "BTable"), t.localBusy = !1, t.$off("refreshed", t.refresh)
                        }
                        var i
                    }))))
                }
            }
        },
        lc = {
            inheritAttrs: !1,
            provide: function () {
                return {
                    bvTable: this
                }
            },
            props: {
                striped: {
                    type: Boolean,
                    default: !1
                },
                bordered: {
                    type: Boolean,
                    default: !1
                },
                borderless: {
                    type: Boolean,
                    default: !1
                },
                outlined: {
                    type: Boolean,
                    default: !1
                },
                dark: {
                    type: Boolean,
                    default: !1
                },
                hover: {
                    type: Boolean,
                    default: !1
                },
                small: {
                    type: Boolean,
                    default: !1
                },
                fixed: {
                    type: Boolean,
                    default: !1
                },
                responsive: {
                    type: [Boolean, String],
                    default: !1
                },
                stickyHeader: {
                    type: [Boolean, String],
                    default: !1
                },
                noBorderCollapse: {
                    type: Boolean,
                    default: !1
                },
                captionTop: {
                    type: Boolean,
                    default: !1
                },
                tableVariant: {
                    type: String,
                    default: null
                },
                tableClass: {
                    type: [String, Array, Object],
                    default: null
                }
            },
            computed: {
                isResponsive: function () {
                    var t = "" === this.responsive || this.responsive;
                    return !this.isStacked && t
                },
                isStickyHeader: function () {
                    var t = "" === this.stickyHeader || this.stickyHeader;
                    return !this.isStacked && t
                },
                wrapperClasses: function () {
                    return [this.isStickyHeader ? "b-table-sticky-header" : "", !0 === this.isResponsive ? "table-responsive" : this.isResponsive ? "table-responsive-".concat(this.responsive) : ""].filter(dt)
                },
                wrapperStyles: function () {
                    return this.isStickyHeader && !nt(this.isStickyHeader) ? {
                        maxHeight: this.isStickyHeader
                    } : {}
                },
                tableClasses: function () {
                    var t = this.isTableSimple ? this.hover : this.hover && this.computedItems.length > 0 && !this.computedBusy;
                    return [this.tableClass, {
                        "table-striped": this.striped,
                        "table-hover": t,
                        "table-dark": this.dark,
                        "table-bordered": this.bordered,
                        "table-borderless": this.borderless,
                        "table-sm": this.small,
                        border: this.outlined,
                        "b-table-fixed": this.fixed,
                        "b-table-caption-top": this.captionTop,
                        "b-table-no-border-collapse": this.noBorderCollapse
                    }, this.tableVariant ? "".concat(this.dark ? "bg" : "table", "-").concat(this.tableVariant) : "", this.stackedTableClasses, this.selectableTableClasses]
                },
                tableAttrs: function () {
                    var t = [(this.$attrs || {})["aria-describedby"], this.captionId].filter(dt).join(" ") || null,
                        e = this.computedItems,
                        i = this.filteredItems,
                        n = this.computedFields,
                        r = this.selectableTableAttrs || {},
                        o = this.isTableSimple ? {} : {
                            "aria-busy": this.computedBusy ? "true" : "false",
                            "aria-colcount": Ue(n.length),
                            "aria-describedby": t
                        };
                    return s({
                        "aria-rowcount": e && i && i.length > e.length ? Ue(i.length) : null
                    }, this.$attrs, {
                        id: this.safeId(),
                        role: "table"
                    }, o, {}, r)
                }
            },
            render: function (t) {
                var e = [];
                this.isTableSimple ? e.push(this.normalizeSlot("default", {})) : (e.push(this.renderCaption ? this.renderCaption() : null), e.push(this.renderColgroup ? this.renderColgroup() : null), e.push(this.renderThead ? this.renderThead() : null), e.push(this.renderTbody ? this.renderTbody() : null), e.push(this.renderTfoot ? this.renderTfoot() : null));
                var i = t("table", {
                    key: "b-table",
                    staticClass: "table b-table",
                    class: this.tableClasses,
                    attrs: this.tableAttrs
                }, e.filter(dt));
                return this.wrapperClasses.length > 0 ? t("div", {
                    key: "wrap",
                    class: this.wrapperClasses,
                    style: this.wrapperStyles
                }, [i]) : i
            }
        },
        uc = t.extend({
            name: "BTable",
            mixins: [gu, xn, Pe, ku, lc, Cu, Zu, Ju, ec, Cu, Ou, Eu, Fu, Vu, Au, ac, ic, nc, rc, oc, sc]
        }),
        cc = t.extend({
            name: "BTableLite",
            mixins: [gu, xn, Pe, ku, lc, Cu, Zu, Ju, ec, Vu, Au]
        }),
        dc = t.extend({
            name: "BTableSimple",
            mixins: [xn, Pe, lc, Cu],
            computed: {
                isTableSimple: function () {
                    return !0
                }
            }
        }),
        hc = Bt({
            components: {
                BTable: uc
            },
            plugins: {
                TableLitePlugin: Bt({
                    components: {
                        BTableLite: cc
                    }
                }),
                TableSimplePlugin: Bt({
                    components: {
                        BTableSimple: dc,
                        BTbody: tc,
                        BThead: Hu,
                        BTfoot: Mu,
                        BTr: Gu,
                        BTd: Xu,
                        BTh: Yu
                    }
                })
            }
        }),
        fc = A(ll, ["tabs", "isNavBar", "cardHeader"]),
        pc = function (t) {
            return !t.disabled
        },
        mc = t.extend({
            name: "BTabButtonHelper",
            inject: {
                bvTabs: {
                    default: function () {
                        return {}
                    }
                }
            },
            props: {
                tab: {
                    default: null
                },
                tabs: {
                    type: Array,
                    default: function () {
                        return []
                    }
                },
                id: {
                    type: String,
                    default: null
                },
                controls: {
                    type: String,
                    default: null
                },
                tabIndex: {
                    type: Number,
                    default: null
                },
                posInSet: {
                    type: Number,
                    default: null
                },
                setSize: {
                    type: Number,
                    default: null
                },
                noKeyNav: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                focus: function () {
                    this.$refs && this.$refs.link && this.$refs.link.focus && this.$refs.link.focus()
                },
                handleEvt: function (t) {
                    var e = function () {
                        t.preventDefault(), t.stopPropagation()
                    };
                    if (!this.tab.disabled) {
                        var i = t.type,
                            n = t.keyCode,
                            r = t.shiftKey;
                        "click" === i ? (e(), this.$emit("click", t)) : "keydown" === i && n === Ni.SPACE ? (e(), this.$emit("click", t)) : "keydown" !== i || this.noKeyNav || (n === Ni.UP || n === Ni.LEFT || n === Ni.HOME ? (e(), r || n === Ni.HOME ? this.$emit("first", t) : this.$emit("prev", t)) : n !== Ni.DOWN && n !== Ni.RIGHT && n !== Ni.END || (e(), r || n === Ni.END ? this.$emit("last", t) : this.$emit("next", t)))
                    }
                }
            },
            render: function (t) {
                var e = t(si, {
                    ref: "link",
                    staticClass: "nav-link",
                    class: [{
                        active: this.tab.localActive && !this.tab.disabled,
                        disabled: this.tab.disabled
                    }, this.tab.titleLinkClass, this.tab.localActive ? this.bvTabs.activeNavItemClass : null],
                    props: {
                        disabled: this.tab.disabled
                    },
                    attrs: {
                        role: "tab",
                        id: this.id,
                        tabindex: this.tabIndex,
                        "aria-selected": this.tab.localActive && !this.tab.disabled ? "true" : "false",
                        "aria-setsize": this.setSize,
                        "aria-posinset": this.posInSet,
                        "aria-controls": this.controls
                    },
                    on: {
                        click: this.handleEvt,
                        keydown: this.handleEvt
                    }
                }, [this.tab.normalizeSlot("title") || this.tab.title]);
                return t("li", {
                    staticClass: "nav-item",
                    class: [this.tab.titleItemClass],
                    attrs: {
                        role: "presentation"
                    }
                }, [e])
            }
        }),
        gc = Bt({
            components: {
                BTabs: t.extend({
                    name: "BTabs",
                    mixins: [xn, Pe],
                    provide: function () {
                        return {
                            bvTabs: this
                        }
                    },
                    model: {
                        prop: "value",
                        event: "input"
                    },
                    props: s({}, fc, {
                        tag: {
                            type: String,
                            default: "div"
                        },
                        card: {
                            type: Boolean,
                            default: !1
                        },
                        end: {
                            type: Boolean,
                            default: !1
                        },
                        noFade: {
                            type: Boolean,
                            default: !1
                        },
                        noNavStyle: {
                            type: Boolean,
                            default: !1
                        },
                        noKeyNav: {
                            type: Boolean,
                            default: !1
                        },
                        lazy: {
                            type: Boolean,
                            default: !1
                        },
                        contentClass: {
                            type: [String, Array, Object],
                            default: null
                        },
                        navClass: {
                            type: [String, Array, Object],
                            default: null
                        },
                        navWrapperClass: {
                            type: [String, Array, Object],
                            default: null
                        },
                        activeNavItemClass: {
                            type: [String, Array, Object],
                            default: null
                        },
                        activeTabClass: {
                            type: [String, Array, Object],
                            default: null
                        },
                        value: {
                            type: Number,
                            default: null
                        }
                    }),
                    data: function () {
                        var t = parseInt(this.value, 10);
                        return {
                            currentTab: t = isNaN(t) ? -1 : t,
                            tabs: [],
                            registeredTabs: [],
                            isMounted: !1
                        }
                    },
                    computed: {
                        fade: function () {
                            return !this.noFade
                        },
                        localNavClass: function () {
                            var t = [];
                            return this.card && this.vertical && t.push("card-header", "h-100", "border-bottom-0", "rounded-0"), [].concat(t, [this.navClass])
                        }
                    },
                    watch: {
                        currentTab: function (t, e) {
                            var i = -1;
                            this.tabs.forEach((function (e, n) {
                                t !== n || e.disabled ? e.localActive = !1 : (e.localActive = !0, i = n)
                            })), this.$emit("input", i)
                        },
                        value: function (t, e) {
                            if (t !== e) {
                                t = parseInt(t, 10), t = isNaN(t) ? -1 : t, e = parseInt(e, 10) || 0;
                                var i = this.tabs;
                                i[t] && !i[t].disabled ? this.activateTab(i[t]) : t < e ? this.previousTab() : this.nextTab()
                            }
                        },
                        registeredTabs: function (t, e) {
                            var i = this;
                            this.$nextTick((function () {
                                zt((function () {
                                    i.updateTabs()
                                }))
                            }))
                        },
                        tabs: function (t, e) {
                            var i = this;
                            ln(t.map((function (t) {
                                return t._uid
                            })), e.map((function (t) {
                                return t._uid
                            }))) || this.$nextTick((function () {
                                i.$emit("changed", t.slice(), e.slice())
                            }))
                        },
                        isMounted: function (t, e) {
                            var i = this;
                            t && zt((function () {
                                i.updateTabs()
                            })), this.setObserver(t)
                        }
                    },
                    created: function () {
                        var t = this,
                            e = parseInt(this.value, 10);
                        this.currentTab = isNaN(e) ? -1 : e, this._bvObserver = null, this.$nextTick((function () {
                            t.updateTabs()
                        }))
                    },
                    mounted: function () {
                        var t = this;
                        this.updateTabs(), this.$nextTick((function () {
                            t.isMounted = !0
                        }))
                    },
                    deactivated: function () {
                        this.isMounted = !1
                    },
                    activated: function () {
                        var t = this,
                            e = parseInt(this.value, 10);
                        this.currentTab = isNaN(e) ? -1 : e, this.$nextTick((function () {
                            t.updateTabs(), t.isMounted = !0
                        }))
                    },
                    beforeDestroy: function () {
                        this.isMounted = !1
                    },
                    destroyed: function () {
                        this.tabs = []
                    },
                    methods: {
                        registerTab: function (t) {
                            var e = this;
                            w(this.registeredTabs, t) || (this.registeredTabs.push(t), t.$once("hook:destroyed", (function () {
                                e.unregisterTab(t)
                            })))
                        },
                        unregisterTab: function (t) {
                            this.registeredTabs = this.registeredTabs.slice().filter((function (e) {
                                return e !== t
                            }))
                        },
                        setObserver: function (t) {
                            if (t) {
                                this.setObserver(!1);
                                var e = this;
                                this._bvObserver = Cn(this.$refs.tabsContainer, (function () {
                                    e.$nextTick((function () {
                                        zt((function () {
                                            e.updateTabs()
                                        }))
                                    }))
                                }), {
                                    childList: !0,
                                    subtree: !1,
                                    attributes: !0,
                                    attributeFilter: ["id"]
                                })
                            } else this._bvObserver && this._bvObserver.disconnect && this._bvObserver.disconnect(), this._bvObserver = null
                        },
                        getTabs: function () {
                            var t = this.registeredTabs.filter((function (t) {
                                    return 0 === t.$children.filter((function (t) {
                                        return t._isTab
                                    })).length
                                })),
                                e = [];
                            if (this.isMounted && t.length > 0) {
                                var i = t.map((function (t) {
                                    return "#".concat(t.safeId())
                                })).join(", ");
                                e = Yt(i, this.$el).map((function (t) {
                                    return t.id
                                })).filter(dt)
                            }
                            return Iu(t, (function (t, i) {
                                return e.indexOf(t.safeId()) - e.indexOf(i.safeId())
                            }))
                        },
                        updateTabs: function () {
                            var t = this.getTabs(),
                                e = t.indexOf(t.slice().reverse().find((function (t) {
                                    return t.localActive && !t.disabled
                                })));
                            if (e < 0) {
                                var i = this.currentTab;
                                i >= t.length ? e = t.indexOf(t.slice().reverse().find(pc)) : t[i] && !t[i].disabled && (e = i)
                            }
                            e < 0 && (e = t.indexOf(t.find(pc))), t.forEach((function (t, e) {
                                t.localActive = !1
                            })), t[e] && (t[e].localActive = !0), this.tabs = t, this.currentTab = e
                        },
                        getButtonForTab: function (t) {
                            return (this.$refs.buttons || []).find((function (e) {
                                return e.tab === t
                            }))
                        },
                        updateButton: function (t) {
                            var e = this.getButtonForTab(t);
                            e && e.$forceUpdate && e.$forceUpdate()
                        },
                        activateTab: function (t) {
                            var e = !1;
                            if (t) {
                                var i = this.tabs.indexOf(t);
                                if (!t.disabled && i > -1 && i !== this.currentTab) {
                                    var n = new BvEvent("activate-tab", {
                                        cancelable: !0,
                                        vueTarget: this,
                                        componentId: this.safeId()
                                    });
                                    this.$emit(n.type, i, this.currentTab, n), n.defaultPrevented || (e = !0, this.currentTab = i)
                                }
                            }
                            return e || this.currentTab === this.value || this.$emit("input", this.currentTab), e
                        },
                        deactivateTab: function (t) {
                            return !!t && this.activateTab(this.tabs.filter((function (e) {
                                return e !== t
                            })).find(pc))
                        },
                        focusButton: function (t) {
                            var e = this;
                            this.$nextTick((function () {
                                var i = e.getButtonForTab(t);
                                i && i.focus && i.focus()
                            }))
                        },
                        emitTabClick: function (t, e) {
                            st(e) && t && t.$emit && !t.disabled && t.$emit("click", e)
                        },
                        clickTab: function (t, e) {
                            this.activateTab(t), this.emitTabClick(t, e)
                        },
                        firstTab: function (t) {
                            var e = this.tabs.find(pc);
                            this.activateTab(e) && t && (this.focusButton(e), this.emitTabClick(e, t))
                        },
                        previousTab: function (t) {
                            var e = Math.max(this.currentTab, 0),
                                i = this.tabs.slice(0, e).reverse().find(pc);
                            this.activateTab(i) && t && (this.focusButton(i), this.emitTabClick(i, t))
                        },
                        nextTab: function (t) {
                            var e = Math.max(this.currentTab, -1),
                                i = this.tabs.slice(e + 1).find(pc);
                            this.activateTab(i) && t && (this.focusButton(i), this.emitTabClick(i, t))
                        },
                        lastTab: function (t) {
                            var e = this.tabs.slice().reverse().find(pc);
                            this.activateTab(e) && t && (this.focusButton(e), this.emitTabClick(e, t))
                        }
                    },
                    render: function (t) {
                        var e = this,
                            i = this.tabs,
                            n = i.find((function (t) {
                                return t.localActive && !t.disabled
                            })),
                            r = i.find((function (t) {
                                return !t.disabled
                            })),
                            o = i.map((function (o, a) {
                                var s = null;
                                return e.noKeyNav || (s = -1, (n === o || !n && r === o) && (s = null)), t(mc, {
                                    key: o._uid || a,
                                    ref: "buttons",
                                    refInFor: !0,
                                    props: {
                                        tab: o,
                                        tabs: i,
                                        id: o.controlledBy || (o.safeId ? o.safeId("_BV_tab_button_") : null),
                                        controls: o.safeId ? o.safeId() : null,
                                        tabIndex: s,
                                        setSize: i.length,
                                        posInSet: a + 1,
                                        noKeyNav: e.noKeyNav
                                    },
                                    on: {
                                        click: function (t) {
                                            e.clickTab(o, t)
                                        },
                                        first: e.firstTab,
                                        prev: e.previousTab,
                                        next: e.nextTab,
                                        last: e.lastTab
                                    }
                                })
                            })),
                            a = t(ul, {
                                ref: "nav",
                                class: this.localNavClass,
                                attrs: {
                                    role: "tablist",
                                    id: this.safeId("_BV_tab_controls_")
                                },
                                props: {
                                    fill: this.fill,
                                    justified: this.justified,
                                    align: this.align,
                                    tabs: !this.noNavStyle && !this.pills,
                                    pills: !this.noNavStyle && this.pills,
                                    vertical: this.vertical,
                                    small: this.small,
                                    cardHeader: this.card && !this.vertical
                                }
                            }, [this.normalizeSlot("tabs-start") || t(), o, this.normalizeSlot("tabs-end") || t()]);
                        a = t("div", {
                            key: "bv-tabs-nav",
                            class: [{
                                "card-header": this.card && !this.vertical && !this.end,
                                "card-footer": this.card && !this.vertical && this.end,
                                "col-auto": this.vertical
                            }, this.navWrapperClass]
                        }, [a]);
                        var s = t();
                        i && 0 !== i.length || (s = t("div", {
                            key: "bv-empty-tab",
                            class: ["tab-pane", "active", {
                                "card-body": this.card
                            }]
                        }, this.normalizeSlot("empty")));
                        var l = t("div", {
                            ref: "tabsContainer",
                            key: "bv-tabs-container",
                            staticClass: "tab-content",
                            class: [{
                                col: this.vertical
                            }, this.contentClass],
                            attrs: {
                                id: this.safeId("_BV_tab_container_")
                            }
                        }, B(this.normalizeSlot("default"), s));
                        return t(this.tag, {
                            staticClass: "tabs",
                            class: {
                                row: this.vertical, "no-gutters": this.vertical && this.card
                            },
                            attrs: {
                                id: this.safeId()
                            }
                        }, [this.end ? l : t(), [a], this.end ? t() : l])
                    }
                }),
                BTab: t.extend({
                    name: "BTab",
                    mixins: [xn, Pe],
                    inject: {
                        bvTabs: {
                            default: function () {
                                return {}
                            }
                        }
                    },
                    props: {
                        active: {
                            type: Boolean,
                            default: !1
                        },
                        tag: {
                            type: String,
                            default: "div"
                        },
                        buttonId: {
                            type: String,
                            default: ""
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        titleItemClass: {
                            type: [String, Array, Object],
                            default: null
                        },
                        titleLinkClass: {
                            type: [String, Array, Object],
                            default: null
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        noBody: {
                            type: Boolean,
                            default: !1
                        },
                        lazy: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            localActive: this.active && !this.disabled,
                            show: !1
                        }
                    },
                    computed: {
                        tabClasses: function () {
                            return [{
                                active: this.localActive,
                                disabled: this.disabled,
                                "card-body": this.bvTabs.card && !this.noBody
                            }, this.localActive ? this.bvTabs.activeTabClass : null]
                        },
                        controlledBy: function () {
                            return this.buttonId || this.safeId("__BV_tab_button__")
                        },
                        computedNoFade: function () {
                            return !this.bvTabs.fade
                        },
                        computedLazy: function () {
                            return this.bvTabs.lazy || this.lazy
                        },
                        _isTab: function () {
                            return !0
                        }
                    },
                    watch: {
                        localActive: function (t, e) {
                            this.$emit("update:active", t)
                        },
                        active: function (t, e) {
                            t !== e && (t ? this.activate() : this.deactivate() || this.$emit("update:active", this.localActive))
                        },
                        disabled: function (t, e) {
                            t !== e && t && this.localActive && this.bvTabs.firstTab && (this.localActive = !1, this.bvTabs.firstTab())
                        }
                    },
                    mounted: function () {
                        this.registerTab(), this.show = this.localActive
                    },
                    updated: function () {
                        this.hasNormalizedSlot("title") && this.bvTabs.updateButton && this.bvTabs.updateButton(this)
                    },
                    destroyed: function () {
                        this.unregisterTab()
                    },
                    methods: {
                        registerTab: function () {
                            this.bvTabs.registerTab && this.bvTabs.registerTab(this)
                        },
                        unregisterTab: function () {
                            this.bvTabs.unregisterTab && this.bvTabs.unregisterTab(this)
                        },
                        activate: function () {
                            return !(!this.bvTabs.activateTab || this.disabled) && this.bvTabs.activateTab(this)
                        },
                        deactivate: function () {
                            return !(!this.bvTabs.deactivateTab || !this.localActive) && this.bvTabs.deactivateTab(this)
                        }
                    },
                    render: function (t) {
                        var e = t(this.tag, {
                            ref: "panel",
                            staticClass: "tab-pane",
                            class: this.tabClasses,
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: this.localActive,
                                expression: "localActive"
                            }],
                            attrs: {
                                role: "tabpanel",
                                id: this.safeId(),
                                "aria-hidden": this.localActive ? "false" : "true",
                                "aria-labelledby": this.controlledBy || null
                            }
                        }, [this.localActive || !this.computedLazy ? this.normalizeSlot("default") : t()]);
                        return t(xe, {
                            props: {
                                mode: "out-in",
                                noFade: this.computedNoFade
                            }
                        }, [e])
                    }
                })
            }
        });

    function vc(t) {
        return (vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function bc(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var yc = "undefined" != typeof window;

    function Sc(t, e) {
        return e.reduce((function (e, i) {
            return t.hasOwnProperty(i) && (e[i] = t[i]), e
        }), {})
    }
    var Tc, wc = {},
        Bc = {},
        kc = {},
        Cc = new(t.extend({
            data: function () {
                return {
                    transports: wc,
                    targets: Bc,
                    sources: kc,
                    trackInstances: yc
                }
            },
            methods: {
                open: function (e) {
                    if (yc) {
                        var i = e.to,
                            n = e.from,
                            r = e.passengers,
                            o = e.order,
                            a = void 0 === o ? 1 / 0 : o;
                        if (i && n && r) {
                            var s, l = {
                                to: i,
                                from: n,
                                passengers: (s = r, Array.isArray(s) || "object" === vc(s) ? Object.freeze(s) : s),
                                order: a
                            }; - 1 === Object.keys(this.transports).indexOf(i) && t.set(this.transports, i, []);
                            var u, c = this.$_getTransportIndex(l),
                                d = this.transports[i].slice(0); - 1 === c ? d.push(l) : d[c] = l, this.transports[i] = (u = function (t, e) {
                                return t.order - e.order
                            }, d.map((function (t, e) {
                                return [e, t]
                            })).sort((function (t, e) {
                                return u(t[1], e[1]) || t[0] - e[0]
                            })).map((function (t) {
                                return t[1]
                            })))
                        }
                    }
                },
                close: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = t.to,
                        n = t.from;
                    if (i && (n || !1 !== e) && this.transports[i])
                        if (e) this.transports[i] = [];
                        else {
                            var r = this.$_getTransportIndex(t);
                            if (r >= 0) {
                                var o = this.transports[i].slice(0);
                                o.splice(r, 1), this.transports[i] = o
                            }
                        }
                },
                registerTarget: function (t, e, i) {
                    yc && (this.trackInstances && !i && this.targets[t] && console.warn("[portal-vue]: Target ".concat(t, " already exists")), this.$set(this.targets, t, Object.freeze([e])))
                },
                unregisterTarget: function (t) {
                    this.$delete(this.targets, t)
                },
                registerSource: function (t, e, i) {
                    yc && (this.trackInstances && !i && this.sources[t] && console.warn("[portal-vue]: source ".concat(t, " already exists")), this.$set(this.sources, t, Object.freeze([e])))
                },
                unregisterSource: function (t) {
                    this.$delete(this.sources, t)
                },
                hasTarget: function (t) {
                    return !(!this.targets[t] || !this.targets[t][0])
                },
                hasSource: function (t) {
                    return !(!this.sources[t] || !this.sources[t][0])
                },
                hasContentFor: function (t) {
                    return !!this.transports[t] && !!this.transports[t].length
                },
                $_getTransportIndex: function (t) {
                    var e = t.to,
                        i = t.from;
                    for (var n in this.transports[e])
                        if (this.transports[e][n].from === i) return +n;
                    return -1
                }
            }
        }))(wc),
        xc = 1,
        $c = t.extend({
            name: "portal",
            props: {
                disabled: {
                    type: Boolean
                },
                name: {
                    type: String,
                    default: function () {
                        return String(xc++)
                    }
                },
                order: {
                    type: Number,
                    default: 0
                },
                slim: {
                    type: Boolean
                },
                slotProps: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                tag: {
                    type: String,
                    default: "DIV"
                },
                to: {
                    type: String,
                    default: function () {
                        return String(Math.round(1e7 * Math.random()))
                    }
                }
            },
            created: function () {
                var t = this;
                this.$nextTick((function () {
                    Cc.registerSource(t.name, t)
                }))
            },
            mounted: function () {
                this.disabled || this.sendUpdate()
            },
            updated: function () {
                this.disabled ? this.clear() : this.sendUpdate()
            },
            beforeDestroy: function () {
                Cc.unregisterSource(this.name), this.clear()
            },
            watch: {
                to: function (t, e) {
                    e && e !== t && this.clear(e), this.sendUpdate()
                }
            },
            methods: {
                clear: function (t) {
                    var e = {
                        from: this.name,
                        to: t || this.to
                    };
                    Cc.close(e)
                },
                normalizeSlots: function () {
                    return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default
                },
                normalizeOwnChildren: function (t) {
                    return "function" == typeof t ? t(this.slotProps) : t
                },
                sendUpdate: function () {
                    var t = this.normalizeSlots();
                    if (t) {
                        var e = {
                            from: this.name,
                            to: this.to,
                            passengers: bc(t),
                            order: this.order
                        };
                        Cc.open(e)
                    } else this.clear()
                }
            },
            render: function (t) {
                var e = this.$slots.default || this.$scopedSlots.default || [],
                    i = this.tag;
                return e && this.disabled ? e.length <= 1 && this.slim ? this.normalizeOwnChildren(e)[0] : t(i, [this.normalizeOwnChildren(e)]) : this.slim ? t() : t(i, {
                    class: {
                        "v-portal": !0
                    },
                    style: {
                        display: "none"
                    },
                    key: "v-portal-placeholder"
                })
            }
        }),
        _c = t.extend({
            name: "portalTarget",
            props: {
                multiple: {
                    type: Boolean,
                    default: !1
                },
                name: {
                    type: String,
                    required: !0
                },
                slim: {
                    type: Boolean,
                    default: !1
                },
                slotProps: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                tag: {
                    type: String,
                    default: "div"
                },
                transition: {
                    type: [String, Object, Function]
                }
            },
            data: function () {
                return {
                    transports: Cc.transports,
                    firstRender: !0
                }
            },
            created: function () {
                var t = this;
                this.$nextTick((function () {
                    Cc.registerTarget(t.name, t)
                }))
            },
            watch: {
                ownTransports: function () {
                    this.$emit("change", this.children().length > 0)
                },
                name: function (t, e) {
                    Cc.unregisterTarget(e), Cc.registerTarget(t, this)
                }
            },
            mounted: function () {
                var t = this;
                this.transition && this.$nextTick((function () {
                    t.firstRender = !1
                }))
            },
            beforeDestroy: function () {
                Cc.unregisterTarget(this.name)
            },
            computed: {
                ownTransports: function () {
                    var t = this.transports[this.name] || [];
                    return this.multiple ? t : 0 === t.length ? [] : [t[t.length - 1]]
                },
                passengers: function () {
                    return function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return t.reduce((function (t, i) {
                            var n = i.passengers[0],
                                r = "function" == typeof n ? n(e) : i.passengers;
                            return t.concat(r)
                        }), [])
                    }(this.ownTransports, this.slotProps)
                }
            },
            methods: {
                children: function () {
                    return 0 !== this.passengers.length ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || []
                },
                noWrapper: function () {
                    var t = this.slim && !this.transition;
                    return t && this.children().length > 1 && console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."), t
                }
            },
            render: function (t) {
                var e = this.noWrapper(),
                    i = this.children(),
                    n = this.transition || this.tag;
                return e ? i[0] : this.slim && !n ? t() : t(n, {
                    props: {
                        tag: this.transition && this.tag ? this.tag : void 0
                    },
                    class: {
                        "vue-portal-target": !0
                    }
                }, i)
            }
        }),
        Pc = 0,
        Oc = ["disabled", "name", "order", "slim", "slotProps", "tag", "to"],
        Ic = ["multiple", "transition"],
        Ec = (t.extend({
            name: "MountingPortal",
            inheritAttrs: !1,
            props: {
                append: {
                    type: [Boolean, String]
                },
                bail: {
                    type: Boolean
                },
                mountTo: {
                    type: String,
                    required: !0
                },
                disabled: {
                    type: Boolean
                },
                name: {
                    type: String,
                    default: function () {
                        return "mounted_" + String(Pc++)
                    }
                },
                order: {
                    type: Number,
                    default: 0
                },
                slim: {
                    type: Boolean
                },
                slotProps: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                tag: {
                    type: String,
                    default: "DIV"
                },
                to: {
                    type: String,
                    default: function () {
                        return String(Math.round(1e7 * Math.random()))
                    }
                },
                multiple: {
                    type: Boolean,
                    default: !1
                },
                targetSlim: {
                    type: Boolean
                },
                targetSlotProps: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                targetTag: {
                    type: String,
                    default: "div"
                },
                transition: {
                    type: [String, Object, Function]
                }
            },
            created: function () {
                if ("undefined" != typeof document) {
                    var t = document.querySelector(this.mountTo);
                    if (t) {
                        var e = this.$props;
                        if (Cc.targets[e.name]) e.bail ? console.warn("[portal-vue]: Target ".concat(e.name, " is already mounted.\n        Aborting because 'bail: true' is set")) : this.portalTarget = Cc.targets[e.name];
                        else {
                            var i = e.append;
                            if (i) {
                                var n = "string" == typeof i ? i : "DIV",
                                    r = document.createElement(n);
                                t.appendChild(r), t = r
                            }
                            var o = Sc(this.$props, Ic);
                            o.slim = this.targetSlim, o.tag = this.targetTag, o.slotProps = this.targetSlotProps, o.name = this.to, this.portalTarget = new _c({
                                el: t,
                                parent: this.$parent || this,
                                propsData: o
                            })
                        }
                    } else console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"))
                }
            },
            beforeDestroy: function () {
                var t = this.portalTarget;
                if (this.append) {
                    var e = t.$el;
                    e.parentNode.removeChild(e)
                }
                t.$destroy()
            },
            render: function (t) {
                if (!this.portalTarget) return console.warn("[portal-vue] Target wasn't mounted"), t();
                if (!this.$scopedSlots.manual) {
                    var e = Sc(this.$props, Oc);
                    return t($c, {
                        props: e,
                        attrs: this.$attrs,
                        on: this.$listeners,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
                var i = this.$scopedSlots.manual({
                    to: this.to
                });
                return Array.isArray(i) && (i = i[0]), i || t()
            }
        }), {
            name: {
                type: String,
                required: !0
            },
            ariaLive: {
                type: String,
                default: function () {
                    return Et("BToaster", "ariaLive")
                }
            },
            ariaAtomic: {
                type: String,
                default: function () {
                    return Et("BToaster", "ariaAtomic")
                }
            },
            role: {
                type: String,
                default: function () {
                    return Et("BToaster", "role")
                }
            }
        }),
        Fc = t.extend({
            data: function () {
                return {
                    name: "b-toaster"
                }
            },
            methods: {
                onAfterEnter: function (t) {
                    var e = this;
                    zt((function () {
                        ne(t, "".concat(e.name, "-enter-to"))
                    }))
                }
            },
            render: function (t) {
                return t("transition-group", {
                    props: {
                        tag: "div",
                        name: this.name
                    },
                    on: {
                        afterEnter: this.onAfterEnter
                    }
                }, this.$slots.default)
            }
        }),
        Vc = t.extend({
            name: "BToaster",
            props: Ec,
            data: function () {
                return {
                    doRender: !1,
                    dead: !1,
                    staticName: this.name
                }
            },
            beforeMount: function () {
                var t = this;
                this.staticName = this.name, Cc.hasTarget(this.staticName) ? (pt('A "<portal-target>" with name "'.concat(this.name, '" already exists in the document.'), "BToaster"), this.dead = !0) : (this.doRender = !0, this.$once("hook:beforeDestroy", (function () {
                    t.$root.$emit("bv::toaster::destroyed", t.staticName)
                })))
            },
            destroyed: function () {
                this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
            },
            render: function (t) {
                var e = t("div", {
                    class: ["d-none", {
                        "b-dead-toaster": this.dead
                    }]
                });
                if (this.doRender) {
                    var i = t(_c, {
                        staticClass: "b-toaster-slot",
                        props: {
                            name: this.staticName,
                            multiple: !0,
                            tag: "div",
                            slim: !1,
                            transition: Fc
                        }
                    });
                    e = t("div", {
                        staticClass: "b-toaster",
                        class: [this.staticName],
                        attrs: {
                            id: this.staticName,
                            role: this.role || null,
                            "aria-live": this.ariaLive,
                            "aria-atomic": this.ariaAtomic
                        }
                    }, [i])
                }
                return e
            }
        }),
        Ac = {
            passive: !0,
            capture: !1
        },
        Dc = {
            id: {
                type: String,
                default: null
            },
            title: {
                type: String,
                default: null
            },
            toaster: {
                type: String,
                default: function () {
                    return Et("BToast", "toaster")
                }
            },
            visible: {
                type: Boolean,
                default: !1
            },
            variant: {
                type: String,
                default: function () {
                    return Et("BToast", "variant")
                }
            },
            isStatus: {
                type: Boolean,
                default: !1
            },
            appendToast: {
                type: Boolean,
                default: !1
            },
            noAutoHide: {
                type: Boolean,
                default: !1
            },
            autoHideDelay: {
                type: [Number, String],
                default: function () {
                    return Et("BToast", "autoHideDelay")
                }
            },
            noCloseButton: {
                type: Boolean,
                default: !1
            },
            noFade: {
                type: Boolean,
                default: !1
            },
            noHoverPause: {
                type: Boolean,
                default: !1
            },
            solid: {
                type: Boolean,
                default: !1
            },
            toastClass: {
                type: [String, Object, Array],
                default: function () {
                    return Et("BToast", "toastClass")
                }
            },
            headerClass: {
                type: [String, Object, Array],
                default: function () {
                    return Et("BToast", "headerClass")
                }
            },
            bodyClass: {
                type: [String, Object, Array],
                default: function () {
                    return Et("BToast", "bodyClass")
                }
            },
            href: {
                type: String,
                default: null
            },
            to: {
                type: [String, Object],
                default: null
            },
            static: {
                type: Boolean,
                default: !1
            }
        },
        Nc = t.extend({
            name: "BToast",
            mixins: [xn, An, Pe, Ns],
            inheritAttrs: !1,
            model: {
                prop: "visible",
                event: "change"
            },
            props: Dc,
            data: function () {
                return {
                    isMounted: !1,
                    doRender: !1,
                    localShow: !1,
                    isTransitioning: !1,
                    isHiding: !1,
                    order: 0,
                    timer: null,
                    dismissStarted: 0,
                    resumeDismiss: 0
                }
            },
            computed: {
                bToastClasses: function () {
                    return o({
                        "b-toast-solid": this.solid,
                        "b-toast-append": this.appendToast,
                        "b-toast-prepend": !this.appendToast
                    }, "b-toast-".concat(this.variant), this.variant)
                },
                slotScope: function () {
                    return {
                        hide: this.hide
                    }
                },
                computedDuration: function () {
                    return Math.max(pe(this.autoHideDelay) || 0, 1e3)
                },
                computedToaster: function () {
                    return String(this.toaster)
                },
                transitionHandlers: function () {
                    return {
                        beforeEnter: this.onBeforeEnter,
                        afterEnter: this.onAfterEnter,
                        beforeLeave: this.onBeforeLeave,
                        afterLeave: this.onAfterLeave
                    }
                }
            },
            watch: {
                visible: function (t) {
                    t ? this.show() : this.hide()
                },
                localShow: function (t) {
                    t !== this.visible && this.$emit("change", t)
                },
                toaster: function (t) {
                    this.$nextTick(this.ensureToaster)
                },
                static: function (t) {
                    t && this.localShow && this.ensureToaster()
                }
            },
            mounted: function () {
                var t = this;
                this.isMounted = !0, this.$nextTick((function () {
                    t.visible && zt((function () {
                        t.show()
                    }))
                })), this.listenOnRoot("bv::show::toast", (function (e) {
                    e === t.safeId() && t.show()
                })), this.listenOnRoot("bv::hide::toast", (function (e) {
                    e && e !== t.safeId() || t.hide()
                })), this.listenOnRoot("bv::toaster::destroyed", (function (e) {
                    e === t.computedToaster && t.hide()
                }))
            },
            beforeDestroy: function () {
                this.clearDismissTimer()
            },
            methods: {
                show: function () {
                    var t = this;
                    if (!this.localShow) {
                        this.ensureToaster();
                        var e = this.buildEvent("show");
                        this.emitEvent(e), this.dismissStarted = this.resumeDismiss = 0, this.order = Date.now() * (this.appendToast ? 1 : -1), this.isHiding = !1, this.doRender = !0, this.$nextTick((function () {
                            zt((function () {
                                t.localShow = !0
                            }))
                        }))
                    }
                },
                hide: function () {
                    var t = this;
                    if (this.localShow) {
                        var e = this.buildEvent("hide");
                        this.emitEvent(e), this.setHoverHandler(!1), this.dismissStarted = this.resumeDismiss = 0, this.clearDismissTimer(), this.isHiding = !0, zt((function () {
                            t.localShow = !1
                        }))
                    }
                },
                buildEvent: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new BvEvent(t, s({
                        cancelable: !1,
                        target: this.$el || null,
                        relatedTarget: null
                    }, e, {
                        vueTarget: this,
                        componentId: this.safeId()
                    }))
                },
                emitEvent: function (t) {
                    var e = t.type;
                    this.$root.$emit("bv::toast:".concat(e), t), this.$emit(e, t)
                },
                ensureToaster: function () {
                    if (!this.static && !Cc.hasTarget(this.computedToaster)) {
                        var t = document.createElement("div");
                        document.body.appendChild(t), new Vc({
                            parent: this.$root,
                            propsData: {
                                name: this.computedToaster
                            }
                        }).$mount(t)
                    }
                },
                startDismissTimer: function () {
                    this.clearDismissTimer(), this.noAutoHide || (this.timer = setTimeout(this.hide, this.resumeDismiss || this.computedDuration), this.dismissStarted = Date.now(), this.resumeDismiss = 0)
                },
                clearDismissTimer: function () {
                    clearTimeout(this.timer), this.timer = null
                },
                setHoverHandler: function (t) {
                    var e = t ? Gt : Wt,
                        i = this.$refs["b-toast"];
                    e(i, "mouseenter", this.onPause, Ac), e(i, "mouseleave", this.onUnPause, Ac)
                },
                onPause: function (t) {
                    if (!this.noAutoHide && !this.noHoverPause && this.timer && !this.resumeDismiss) {
                        var e = Date.now() - this.dismissStarted;
                        e > 0 && (this.clearDismissTimer(), this.resumeDismiss = Math.max(this.computedDuration - e, 1e3))
                    }
                },
                onUnPause: function (t) {
                    this.noAutoHide || this.noHoverPause || !this.resumeDismiss ? this.resumeDismiss = this.dismissStarted = 0 : this.startDismissTimer()
                },
                onLinkClick: function () {
                    var t = this;
                    this.$nextTick((function () {
                        zt((function () {
                            t.hide()
                        }))
                    }))
                },
                onBeforeEnter: function () {
                    this.isTransitioning = !0
                },
                onAfterEnter: function () {
                    this.isTransitioning = !1;
                    var t = this.buildEvent("shown");
                    this.emitEvent(t), this.startDismissTimer(), this.setHoverHandler(!0)
                },
                onBeforeLeave: function () {
                    this.isTransitioning = !0
                },
                onAfterLeave: function () {
                    this.isTransitioning = !1, this.order = 0, this.resumeDismiss = this.dismissStarted = 0;
                    var t = this.buildEvent("hidden");
                    this.emitEvent(t), this.doRender = !1
                },
                makeToast: function (t) {
                    var e = this,
                        i = [],
                        n = this.normalizeSlot("toast-title", this.slotScope);
                    n ? i.push(n) : this.title && i.push(t("strong", {
                        staticClass: "mr-2"
                    }, this.title)), this.noCloseButton || i.push(t(Ee, {
                        staticClass: "ml-auto mb-1",
                        on: {
                            click: function (t) {
                                e.hide()
                            }
                        }
                    }));
                    var r = t();
                    i.length > 0 && (r = t("header", {
                        staticClass: "toast-header",
                        class: this.headerClass
                    }, i));
                    var o = this.href || this.to,
                        a = t(o ? si : "div", {
                            staticClass: "toast-body",
                            class: this.bodyClass,
                            props: o ? {
                                to: this.to,
                                href: this.href
                            } : {},
                            on: o ? {
                                click: this.onLinkClick
                            } : {}
                        }, [this.normalizeSlot("default", this.slotScope) || t()]);
                    return t("div", {
                        key: "toast-".concat(this._uid),
                        ref: "toast",
                        staticClass: "toast",
                        class: this.toastClass,
                        attrs: s({}, this.$attrs, {
                            tabindex: "0",
                            id: this.safeId()
                        })
                    }, [r, a])
                }
            },
            render: function (t) {
                if (!this.doRender || !this.isMounted) return t();
                var e = "b-toast-".concat(this._uid),
                    i = this.static ? {} : this.scopedStyleAttrs;
                return t($c, {
                    props: {
                        name: e,
                        to: this.computedToaster,
                        order: this.order,
                        slim: !0,
                        disabled: this.static
                    }
                }, [t("div", {
                    key: e,
                    ref: "b-toast",
                    staticClass: "b-toast",
                    class: this.bToastClasses,
                    attrs: s({}, i, {
                        id: this.safeId("_toast_outer"),
                        role: this.isHiding ? null : this.isStatus ? "status" : "alert",
                        "aria-live": this.isHiding ? null : this.isStatus ? "polite" : "assertive",
                        "aria-atomic": this.isHiding ? null : "true"
                    })
                }, [t(xe, {
                    props: {
                        noFade: this.noFade
                    },
                    on: this.transitionHandlers
                }, [this.localShow ? this.makeToast(t) : t()])])])
            }
        }),
        Rc = ["id"].concat(v(O(A(Dc, ["static", "visible"])))),
        Lc = {
            toastContent: "default",
            title: "toast-title"
        },
        Hc = function (t) {
            return Rc.reduce((function (e, i) {
                return Q(t[i]) || (e[i] = t[i]), e
            }), {})
        },
        zc = Bt({
            components: {
                BToast: Nc,
                BToaster: Vc
            },
            plugins: {
                BVToastPlugin: Bt({
                    plugins: {
                        plugin: function (t) {
                            var e = t.extend({
                                    name: "BToastPop",
                                    extends: Nc,
                                    destroyed: function () {
                                        this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
                                    },
                                    mounted: function () {
                                        var t = this,
                                            e = function () {
                                                t.localShow = !1, t.doRender = !1, t.$nextTick((function () {
                                                    t.$nextTick((function () {
                                                        zt((function () {
                                                            t.$destroy()
                                                        }))
                                                    }))
                                                }))
                                            };
                                        this.$parent.$once("hook:destroyed", e), this.$once("hidden", e), this.listenOnRoot("bv::toaster::destroyed", (function (i) {
                                            i === t.toaster && e()
                                        }))
                                    }
                                }),
                                n = function (t, i) {
                                    if (!mt("$bvToast")) {
                                        var n = new e({
                                            parent: i,
                                            propsData: s({}, Hc(Et("BToast") || {}), {}, A(t, O(Lc)), {
                                                static: !1,
                                                visible: !0
                                            })
                                        });
                                        O(Lc).forEach((function (e) {
                                            var r = t[e];
                                            Q(r) || ("title" === e && rt(r) && (r = [i.$createElement("strong", {
                                                class: "mr-2"
                                            }, r)]), n.$slots[Lc[e]] = B(r))
                                        }));
                                        var r = document.createElement("div");
                                        document.body.appendChild(r), n.$mount(r)
                                    }
                                },
                                o = function () {
                                    function t(e) {
                                        i(this, t), k(this, {
                                            _vm: e,
                                            _root: e.$root
                                        }), x(this, {
                                            _vm: {
                                                enumerable: !0,
                                                configurable: !1,
                                                writable: !1
                                            },
                                            _root: {
                                                enumerable: !0,
                                                configurable: !1,
                                                writable: !1
                                            }
                                        })
                                    }
                                    return r(t, [{
                                        key: "toast",
                                        value: function (t) {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            t && !mt("$bvToast") && n(s({}, Hc(e), {
                                                toastContent: t
                                            }), this._vm)
                                        }
                                    }, {
                                        key: "show",
                                        value: function (t) {
                                            t && this._root.$emit("bv::show::toast", t)
                                        }
                                    }, {
                                        key: "hide",
                                        value: function () {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                            this._root.$emit("bv::hide::toast", t)
                                        }
                                    }]), t
                                }();
                            t.mixin({
                                beforeCreate: function () {
                                    this._bv__toast = new o(this)
                                }
                            }), t.prototype.hasOwnProperty("$bvToast") || $(t.prototype, "$bvToast", {
                                get: function () {
                                    return this && this._bv__toast || pt('"'.concat("$bvToast", '" must be accessed from a Vue instance "this" context.'), "BToast"), this._bv__toast
                                }
                            })
                        }
                    }
                })
            }
        }),
        Mc = "__BV_Tooltip__",
        jc = {
            focus: !0,
            hover: !0,
            click: !0,
            blur: !0,
            manual: !0
        },
        Gc = /^html$/i,
        Wc = /^noninteractive$/i,
        Uc = /^nofade$/i,
        qc = /^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,
        Kc = /^(window|viewport|scrollParent)$/i,
        Xc = /^d\d+$/i,
        Yc = /^ds\d+$/i,
        Zc = /^dh\d+$/i,
        Jc = /^o-?\d+$/i,
        Qc = /^v-.+$/i,
        td = /\s+/,
        ed = function (t, e, i) {
            if (z) {
                var n = function (t, e) {
                    var i = "BTooltip",
                        n = {
                            title: void 0,
                            trigger: "",
                            placement: "top",
                            fallbackPlacement: "flip",
                            container: !1,
                            animation: !0,
                            offset: 0,
                            id: null,
                            html: !1,
                            interactive: !0,
                            disabled: !1,
                            delay: Et(i, "delay"),
                            boundary: String(Et(i, "boundary")),
                            boundaryPadding: parseInt(Et(i, "boundaryPadding"), 10) || 0,
                            variant: Et(i, "variant"),
                            customClass: Et(i, "customClass")
                        };
                    if (rt(t.value) || ot(t.value) ? n.title = t.value : it(t.value) ? n.title = t.value : F(t.value) && (n = s({}, n, {}, t.value)), Q(n.title)) {
                        var r = e.data || {};
                        n.title = r.attrs && !et(r.attrs.title) ? r.attrs.title : void 0
                    }
                    F(n.delay) || (n.delay = {
                        show: parseInt(n.delay, 10) || 0,
                        hide: parseInt(n.delay, 10) || 0
                    }), t.arg && (n.container = "#".concat(t.arg)), O(t.modifiers).forEach((function (t) {
                        if (Gc.test(t)) n.html = !0;
                        else if (Wc.test(t)) n.interactive = !1;
                        else if (Uc.test(t)) n.animation = !1;
                        else if (qc.test(t)) n.placement = t;
                        else if (Kc.test(t)) t = "scrollparent" === t ? "scrollParent" : t, n.boundary = t;
                        else if (Xc.test(t)) {
                            var e = parseInt(t.slice(1), 10) || 0;
                            n.delay.show = e, n.delay.hide = e
                        } else Yc.test(t) ? n.delay.show = parseInt(t.slice(2), 10) || 0 : Zc.test(t) ? n.delay.hide = parseInt(t.slice(2), 10) || 0 : Jc.test(t) ? n.offset = parseInt(t.slice(1), 10) || 0 : Qc.test(t) && (n.variant = t.slice(2) || null)
                    }));
                    var o = {};
                    return B(n.trigger || "").filter(dt).join(" ").trim().toLowerCase().split(td).forEach((function (t) {
                        jc[t] && (o[t] = !0)
                    })), O(t.modifiers).forEach((function (t) {
                        t = t.toLowerCase(), jc[t] && (o[t] = !0)
                    })), n.trigger = O(o).join(" "), "blur" === n.trigger && (n.trigger = "focus"), n.trigger || (n.trigger = "hover focus"), n
                }(e, i);
                if (!t[Mc]) {
                    var r = i.context;
                    t[Mc] = new Wl({
                        parent: r,
                        _scopeId: Ds(r, void 0)
                    }), t[Mc].__bv_prev_data__ = {}, t[Mc].$on("show", (function () {
                        it(n.title) && t[Mc].updateData({
                            title: n.title(t)
                        })
                    }))
                }
                var o = {
                        title: n.title,
                        triggers: n.trigger,
                        placement: n.placement,
                        fallbackPlacement: n.fallbackPlacement,
                        variant: n.variant,
                        customClass: n.customClass,
                        container: n.container,
                        boundary: n.boundary,
                        delay: n.delay,
                        offset: n.offset,
                        noFade: !n.animation,
                        id: n.id,
                        interactive: n.interactive,
                        disabled: n.disabled,
                        html: n.html
                    },
                    a = t[Mc].__bv_prev_data__;
                if (t[Mc].__bv_prev_data__ = o, !ln(o, a)) {
                    var l = {
                        target: t
                    };
                    O(o).forEach((function (e) {
                        o[e] !== a[e] && (l[e] = "title" === e && it(o[e]) ? o[e](t) : o[e])
                    })), t[Mc].updateData(l)
                }
            }
        },
        id = Bt({
            directives: {
                VBTooltip: {
                    bind: function (t, e, i) {
                        ed(t, e, i)
                    },
                    componentUpdated: function (t, e, i) {
                        i.context.$nextTick((function () {
                            ed(t, e, i)
                        }))
                    },
                    unbind: function (t) {
                        ! function (t) {
                            t[Mc] && (t[Mc].$destroy(), t[Mc] = null), delete t[Mc]
                        }(t)
                    }
                }
            }
        }),
        nd = Bt({
            plugins: {
                AlertPlugin: De,
                BadgePlugin: di,
                BreadcrumbPlugin: yi,
                ButtonPlugin: Fi,
                ButtonGroupPlugin: Di,
                ButtonToolbarPlugin: Hi,
                CardPlugin: Bn,
                CarouselPlugin: Vn,
                CollapsePlugin: Jn,
                DropdownPlugin: No,
                EmbedPlugin: Lo,
                FormPlugin: Yo,
                FormGroupPlugin: ca,
                FormCheckboxPlugin: Sa,
                FormRadioPlugin: wa,
                FormInputPlugin: Da,
                FormTagsPlugin: Oa,
                FormTextareaPlugin: Ra,
                FormFilePlugin: Ma,
                FormSelectPlugin: Ka,
                ImagePlugin: Xa,
                InputGroupPlugin: ns,
                JumbotronPlugin: ls,
                LayoutPlugin: ps,
                LinkPlugin: ms,
                ListGroupPlugin: Ts,
                MediaPlugin: $s,
                ModalPlugin: sl,
                NavPlugin: vl,
                NavbarPlugin: xl,
                PaginationPlugin: Al,
                PaginationNavPlugin: Rl,
                PopoverPlugin: hu,
                ProgressPlugin: pu,
                SpinnerPlugin: mu,
                TablePlugin: hc,
                TabsPlugin: gc,
                ToastPlugin: zc,
                TooltipPlugin: Bt({
                    components: {
                        BTooltip: ql
                    },
                    plugins: {
                        VBTooltipPlugin: id
                    }
                })
            }
        }),
        rd = Bt({
            directives: {
                VBModal: il
            }
        }),
        od = {
            element: "body",
            offset: 10,
            method: "auto",
            throttle: 75
        },
        ad = {
            element: "(string|element|component)",
            offset: "number",
            method: "string",
            throttle: "number"
        },
        sd = "dropdown-item",
        ld = "active",
        ud = {
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown, .dropup",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        cd = "offset",
        dd = "position",
        hd = /^.*(#[^#]+)$/,
        fd = ["webkitTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd"],
        pd = {
            passive: !0,
            capture: !1
        },
        md = function (t) {
            return function (t) {
                return Object.prototype.toString.call(t)
            }(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        },
        gd = function () {
            function t(e, n, r) {
                i(this, t), this.$el = e, this.$scroller = null, this.$selector = [ud.NAV_LINKS, ud.LIST_ITEMS, ud.DROPDOWN_ITEMS].join(","), this.$offsets = [], this.$targets = [], this.$activeTarget = null, this.$scrollHeight = 0, this.$resizeTimeout = null, this.$obs_scroller = null, this.$obs_targets = null, this.$root = r || null, this.$config = null, this.updateConfig(n)
            }
            return r(t, [{
                key: "updateConfig",
                value: function (t, e) {
                    this.$scroller && (this.unlisten(), this.$scroller = null);
                    var i = s({}, this.constructor.Default, {}, t);
                    if (e && (this.$root = e), function (t, e, i) {
                            for (var n in i)
                                if (Object.prototype.hasOwnProperty.call(i, n)) {
                                    var r = i[n],
                                        o = e[n],
                                        a = o && Ut(o) ? "element" : md(o);
                                    a = o && o._isVue ? "component" : a, new RegExp(r).test(a) || pt("".concat(t, ': Option "').concat(n, '" provided type "').concat(a, '" but expected type "').concat(r, '"'))
                                }
                        }(this.constructor.Name, i, this.constructor.DefaultType), this.$config = i, this.$root) {
                        var n = this;
                        this.$root.$nextTick((function () {
                            n.listen()
                        }))
                    } else this.listen()
                }
            }, {
                key: "dispose",
                value: function () {
                    this.unlisten(), clearTimeout(this.$resizeTimeout), this.$resizeTimeout = null, this.$el = null, this.$config = null, this.$scroller = null, this.$selector = null, this.$offsets = null, this.$targets = null, this.$activeTarget = null, this.$scrollHeight = null
                }
            }, {
                key: "listen",
                value: function () {
                    var t = this,
                        e = this.getScroller();
                    e && "BODY" !== e.tagName && Gt(e, "scroll", this, pd), Gt(window, "scroll", this, pd), Gt(window, "resize", this, pd), Gt(window, "orientationchange", this, pd), fd.forEach((function (e) {
                        Gt(window, e, t, pd)
                    })), this.setObservers(!0), this.handleEvent("refresh")
                }
            }, {
                key: "unlisten",
                value: function () {
                    var t = this,
                        e = this.getScroller();
                    this.setObservers(!1), e && "BODY" !== e.tagName && Wt(e, "scroll", this, pd), Wt(window, "scroll", this, pd), Wt(window, "resize", this, pd), Wt(window, "orientationchange", this, pd), fd.forEach((function (e) {
                        Wt(window, e, t, pd)
                    }))
                }
            }, {
                key: "setObservers",
                value: function (t) {
                    var e = this;
                    this.$obs_scroller && (this.$obs_scroller.disconnect(), this.$obs_scroller = null), this.$obs_targets && (this.$obs_targets.disconnect(), this.$obs_targets = null), t && (this.$obs_targets = Cn(this.$el, (function () {
                        e.handleEvent("mutation")
                    }), {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ["href"]
                    }), this.$obs_scroller = Cn(this.getScroller(), (function () {
                        e.handleEvent("mutation")
                    }), {
                        subtree: !0,
                        childList: !0,
                        characterData: !0,
                        attributes: !0,
                        attributeFilter: ["id", "style", "class"]
                    }))
                }
            }, {
                key: "handleEvent",
                value: function (t) {
                    var e = rt(t) ? t : t.type,
                        i = this;
                    "scroll" === e ? (this.$obs_scroller || this.listen(), this.process()) : /(resize|orientationchange|mutation|refresh)/.test(e) && (i.$resizeTimeout || (i.$resizeTimeout = setTimeout((function () {
                        i.refresh(), i.process(), i.$resizeTimeout = null
                    }), i.$config.throttle)))
                }
            }, {
                key: "refresh",
                value: function () {
                    var t = this,
                        e = this.getScroller();
                    if (e) {
                        var i = e !== e.window ? dd : cd,
                            n = "auto" === this.$config.method ? i : this.$config.method,
                            r = n === dd ? fe : he,
                            o = n === dd ? this.getScrollTop() : 0;
                        return this.$offsets = [], this.$targets = [], this.$scrollHeight = this.getScrollHeight(), Yt(this.$selector, this.$el).map((function (t) {
                            return se(t, "href")
                        })).filter((function (t) {
                            return t && hd.test(t || "")
                        })).map((function (t) {
                            var i = t.replace(hd, "$1").trim();
                            if (!i) return null;
                            var n = Zt(i, e);
                            return n && qt(n) ? {
                                offset: parseInt(r(n).top, 10) + o,
                                target: i
                            } : null
                        })).filter(Boolean).sort((function (t, e) {
                            return t.offset - e.offset
                        })).reduce((function (e, i) {
                            return e[i.target] || (t.$offsets.push(i.offset), t.$targets.push(i.target), e[i.target] = !0), e
                        }), {}), this
                    }
                }
            }, {
                key: "process",
                value: function () {
                    var t = this.getScrollTop() + this.$config.offset,
                        e = this.getScrollHeight(),
                        i = this.$config.offset + e - this.getOffsetHeight();
                    if (this.$scrollHeight !== e && this.refresh(), t >= i) {
                        var n = this.$targets[this.$targets.length - 1];
                        this.$activeTarget !== n && this.activate(n)
                    } else {
                        if (this.$activeTarget && t < this.$offsets[0] && this.$offsets[0] > 0) return this.$activeTarget = null, void this.clear();
                        for (var r = this.$offsets.length; r--;) {
                            this.$activeTarget !== this.$targets[r] && t >= this.$offsets[r] && (Q(this.$offsets[r + 1]) || t < this.$offsets[r + 1]) && this.activate(this.$targets[r])
                        }
                    }
                }
            }, {
                key: "getScroller",
                value: function () {
                    if (this.$scroller) return this.$scroller;
                    var t = this.$config.element;
                    return t ? (Ut(t.$el) ? t = t.$el : rt(t) && (t = Zt(t)), t ? (this.$scroller = "BODY" === t.tagName ? window : t, this.$scroller) : null) : null
                }
            }, {
                key: "getScrollTop",
                value: function () {
                    var t = this.getScroller();
                    return t === window ? t.pageYOffset : t.scrollTop
                }
            }, {
                key: "getScrollHeight",
                value: function () {
                    return this.getScroller().scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            }, {
                key: "getOffsetHeight",
                value: function () {
                    var t = this.getScroller();
                    return t === window ? window.innerHeight : ue(t).height
                }
            }, {
                key: "activate",
                value: function (t) {
                    var e = this;
                    this.$activeTarget = t, this.clear();
                    var i = Yt(this.$selector.split(",").map((function (e) {
                        return "".concat(e, '[href$="').concat(t, '"]')
                    })).join(","), this.$el);
                    i.forEach((function (t) {
                        if (re(t, sd)) {
                            var i = Qt(ud.DROPDOWN, t);
                            i && e.setActiveState(Zt(ud.DROPDOWN_TOGGLE, i), !0), e.setActiveState(t, !0)
                        } else {
                            e.setActiveState(t, !0), Jt(t.parentElement, ud.NAV_ITEMS) && e.setActiveState(t.parentElement, !0);
                            for (var n = t; n;) {
                                var r = (n = Qt(ud.NAV_LIST_GROUP, n)) ? n.previousElementSibling : null;
                                r && Jt(r, "".concat(ud.NAV_LINKS, ", ").concat(ud.LIST_ITEMS)) && e.setActiveState(r, !0), r && Jt(r, ud.NAV_ITEMS) && (e.setActiveState(Zt(ud.NAV_LINKS, r), !0), e.setActiveState(r, !0))
                            }
                        }
                    })), i && i.length > 0 && this.$root && this.$root.$emit("bv::scrollspy::activate", t, i)
                }
            }, {
                key: "clear",
                value: function () {
                    var t = this;
                    Yt("".concat(this.$selector, ", ").concat(ud.NAV_ITEMS), this.$el).filter((function (t) {
                        return re(t, ld)
                    })).forEach((function (e) {
                        return t.setActiveState(e, !1)
                    }))
                }
            }, {
                key: "setActiveState",
                value: function (t, e) {
                    t && (e ? ie(t, ld) : ne(t, ld))
                }
            }], [{
                key: "Name",
                get: function () {
                    return "v-b-scrollspy"
                }
            }, {
                key: "Default",
                get: function () {
                    return od
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return ad
                }
            }]), t
        }(),
        vd = "__BV_ScrollSpy__",
        bd = /^\d+$/,
        yd = /^(auto|position|offset)$/,
        Sd = function (t, e, i) {
            if (z) {
                var n = function (t) {
                    var e = {};
                    return t.arg && (e.element = "#".concat(t.arg)), O(t.modifiers).forEach((function (t) {
                        bd.test(t) ? e.offset = parseInt(t, 10) : yd.test(t) && (e.method = t)
                    })), rt(t.value) ? e.element = t.value : ot(t.value) ? e.offset = Math.round(t.value) : E(t.value) && O(t.value).filter((function (t) {
                        return !!gd.DefaultType[t]
                    })).forEach((function (i) {
                        e[i] = t.value[i]
                    })), e
                }(e);
                t[vd] ? t[vd].updateConfig(n, i.context.$root) : t[vd] = new gd(t, n, i.context.$root)
            }
        },
        Td = Bt({
            plugins: {
                VBModalPlugin: rd,
                VBPopoverPlugin: du,
                VBScrollspyPlugin: Bt({
                    directives: {
                        VBScrollspy: {
                            bind: function (t, e, i) {
                                Sd(t, e, i)
                            },
                            inserted: function (t, e, i) {
                                Sd(t, e, i)
                            },
                            update: function (t, e, i) {
                                e.value !== e.oldValue && Sd(t, e, i)
                            },
                            componentUpdated: function (t, e, i) {
                                e.value !== e.oldValue && Sd(t, e, i)
                            },
                            unbind: function (t) {
                                ! function (t) {
                                    t[vd] && (t[vd].dispose(), t[vd] = null, delete t[vd])
                                }(t)
                            }
                        }
                    }
                }),
                VBTogglePlugin: Bt({
                    directives: {
                        VBToggle: Zn
                    }
                }),
                VBTooltipPlugin: id,
                VBVisiblePlugin: Bt({
                    directives: {
                        VBVisible: pn
                    }
                })
            }
        }),
        wd = {
            variant: {
                type: String,
                default: null
            },
            fontScale: {
                type: [Number, String],
                default: 1
            },
            scale: {
                type: [Number, String],
                default: 1
            },
            rotate: {
                type: [Number, String],
                default: 0
            },
            flipH: {
                type: Boolean,
                default: !1
            },
            flipV: {
                type: Boolean,
                default: !1
            },
            shiftH: {
                type: [Number, String],
                default: 0
            },
            shiftV: {
                type: [Number, String],
                default: 0
            }
        },
        Bd = {
            width: "1em",
            height: "1em",
            viewBox: "0 0 20 20",
            focusable: "false",
            role: "img",
            alt: "icon"
        },
        kd = t.extend({
            name: "BVIconBase",
            functional: !0,
            props: s({
                content: {
                    type: String
                },
                stacked: {
                    type: Boolean,
                    default: !1
                }
            }, wd),
            render: function (t, e) {
                var i = e.data,
                    n = e.props,
                    r = e.children,
                    a = Math.max(me(n.fontScale) || 1, 0) || 1,
                    s = Math.max(me(n.scale) || 1, 0) || 1,
                    l = me(n.rotate) || 0,
                    u = me(n.shiftH) || 0,
                    c = me(n.shiftV) || 0,
                    d = n.flipH,
                    h = n.flipV,
                    f = d || h || 1 !== s,
                    p = f || l,
                    m = u || c,
                    g = [p ? "translate(10 10)" : null, f ? "scale(".concat((d ? -1 : 1) * s, " ").concat((h ? -1 : 1) * s, ")") : null, l ? "rotate(".concat(l, ")") : null, p ? "translate(-10 -10)" : null].filter(dt),
                    v = n.stacked,
                    b = !et(n.content),
                    y = t("g", {
                        attrs: {
                            transform: g.join(" ") || null
                        },
                        domProps: b ? {
                            innerHTML: n.content || ""
                        } : {}
                    }, r);
                return m && (y = t("g", {
                    attrs: {
                        transform: "translate(".concat(20 * u / 16, " ").concat(-20 * c / 16, ")")
                    }
                }, [y])), t("svg", Be({
                    staticClass: "b-icon bi",
                    class: o({}, "text-".concat(n.variant), !!n.variant),
                    attrs: Bd,
                    style: v ? {} : {
                        fontSize: 1 === a ? null : "".concat(100 * a, "%")
                    }
                }, i, v ? {
                    attrs: {
                        width: null,
                        height: null,
                        role: null,
                        alt: null
                    }
                } : {}, {
                    attrs: {
                        xmlns: v ? null : "http://www.w3.org/2000/svg",
                        fill: "currentColor"
                    }
                }), [y])
            }
        }),
        Cd = function (e, i) {
            var n = "BIcon".concat(je(e)),
                r = "bi-".concat(Me(e)),
                o = qe(i || "");
            return t.extend({
                name: n,
                functional: !0,
                props: s({}, wd, {
                    stacked: {
                        type: Boolean,
                        default: !1
                    }
                }),
                render: function (t, e) {
                    var i = e.data,
                        n = e.props;
                    return t(kd, Be(i, {
                        staticClass: r,
                        props: s({}, n, {
                            content: o
                        })
                    }))
                }
            })
        }("Blank", ""),
        xd = /^BIcon/,
        $d = (s({
            icon: {
                type: String,
                default: null
            }
        }, wd, {
            stacked: {
                type: Boolean,
                default: !1
            }
        }), s({}, wd), {
            install: wt({
                plugins: {
                    componentsPlugin: nd,
                    directivesPlugin: Td
                }
            }),
            NAME: "BootstrapVue"
        });
    return Tc = $d, D && window.Vue && window.Vue.use(Tc), D && Tc.NAME && (window[Tc.NAME] = Tc), $d
}));
//# sourceMappingURL=bootstrap-vue.min.js.map