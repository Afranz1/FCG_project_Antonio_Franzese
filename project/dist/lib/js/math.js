/*! For license information please see math.js.LICENSE.txt */
!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.math = t() : e.math = t(); }(this, (() => (() => { var e = { 1977: function (e, t) { var r; !function (n) {
        "use strict";
        var i = Math.cosh || function (e) { return Math.abs(e) < 1e-9 ? 1 - e : .5 * (Math.exp(e) + Math.exp(-e)); }, a = Math.sinh || function (e) { return Math.abs(e) < 1e-9 ? e : .5 * (Math.exp(e) - Math.exp(-e)); }, o = function () { throw SyntaxError("Invalid Param"); };
        function u(e, t) { var r = Math.abs(e), n = Math.abs(t); return 0 === e ? Math.log(n) : 0 === t ? Math.log(r) : r < 3e3 && n < 3e3 ? .5 * Math.log(e * e + t * t) : (e /= 2, t /= 2, .5 * Math.log(e * e + t * t) + Math.LN2); }
        function s(e, t) { if (!(this instanceof s))
            return new s(e, t); var r = function (e, t) { var r = { re: 0, im: 0 }; if (null == e)
            r.re = r.im = 0;
        else if (void 0 !== t)
            r.re = e, r.im = t;
        else
            switch (typeof e) {
                case "object":
                    if ("im" in e && "re" in e)
                        r.re = e.re, r.im = e.im;
                    else if ("abs" in e && "arg" in e) {
                        if (!Number.isFinite(e.abs) && Number.isFinite(e.arg))
                            return s.INFINITY;
                        r.re = e.abs * Math.cos(e.arg), r.im = e.abs * Math.sin(e.arg);
                    }
                    else if ("r" in e && "phi" in e) {
                        if (!Number.isFinite(e.r) && Number.isFinite(e.phi))
                            return s.INFINITY;
                        r.re = e.r * Math.cos(e.phi), r.im = e.r * Math.sin(e.phi);
                    }
                    else
                        2 === e.length ? (r.re = e[0], r.im = e[1]) : o();
                    break;
                case "string":
                    r.im = r.re = 0;
                    var n = e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), i = 1, a = 0;
                    null === n && o();
                    for (var u = 0; u < n.length; u++) {
                        var c = n[u];
                        " " === c || "\t" === c || "\n" === c || ("+" === c ? i++ : "-" === c ? a++ : "i" === c || "I" === c ? (i + a === 0 && o(), " " === n[u + 1] || isNaN(n[u + 1]) ? r.im += parseFloat((a % 2 ? "-" : "") + "1") : (r.im += parseFloat((a % 2 ? "-" : "") + n[u + 1]), u++), i = a = 0) : ((i + a === 0 || isNaN(c)) && o(), "i" === n[u + 1] || "I" === n[u + 1] ? (r.im += parseFloat((a % 2 ? "-" : "") + c), u++) : r.re += parseFloat((a % 2 ? "-" : "") + c), i = a = 0));
                    }
                    i + a > 0 && o();
                    break;
                case "number":
                    r.im = 0, r.re = e;
                    break;
                default: o();
            } return isNaN(r.re) || isNaN(r.im), r; }(e, t); this.re = r.re, this.im = r.im; }
        s.prototype = { re: 0, im: 0, sign: function () { var e = this.abs(); return new s(this.re / e, this.im / e); }, add: function (e, t) { var r = new s(e, t); return this.isInfinite() && r.isInfinite() ? s.NAN : this.isInfinite() || r.isInfinite() ? s.INFINITY : new s(this.re + r.re, this.im + r.im); }, sub: function (e, t) { var r = new s(e, t); return this.isInfinite() && r.isInfinite() ? s.NAN : this.isInfinite() || r.isInfinite() ? s.INFINITY : new s(this.re - r.re, this.im - r.im); }, mul: function (e, t) { var r = new s(e, t); return this.isInfinite() && r.isZero() || this.isZero() && r.isInfinite() ? s.NAN : this.isInfinite() || r.isInfinite() ? s.INFINITY : 0 === r.im && 0 === this.im ? new s(this.re * r.re, 0) : new s(this.re * r.re - this.im * r.im, this.re * r.im + this.im * r.re); }, div: function (e, t) { var r = new s(e, t); if (this.isZero() && r.isZero() || this.isInfinite() && r.isInfinite())
                return s.NAN; if (this.isInfinite() || r.isZero())
                return s.INFINITY; if (this.isZero() || r.isInfinite())
                return s.ZERO; e = this.re, t = this.im; var n, i, a = r.re, o = r.im; return 0 === o ? new s(e / a, t / a) : Math.abs(a) < Math.abs(o) ? new s((e * (i = a / o) + t) / (n = a * i + o), (t * i - e) / n) : new s((e + t * (i = o / a)) / (n = o * i + a), (t - e * i) / n); }, pow: function (e, t) { var r = new s(e, t); if (e = this.re, t = this.im, r.isZero())
                return s.ONE; if (0 === r.im) {
                if (0 === t && e > 0)
                    return new s(Math.pow(e, r.re), 0);
                if (0 === e)
                    switch ((r.re % 4 + 4) % 4) {
                        case 0: return new s(Math.pow(t, r.re), 0);
                        case 1: return new s(0, Math.pow(t, r.re));
                        case 2: return new s(-Math.pow(t, r.re), 0);
                        case 3: return new s(0, -Math.pow(t, r.re));
                    }
            } if (0 === e && 0 === t && r.re > 0 && r.im >= 0)
                return s.ZERO; var n = Math.atan2(t, e), i = u(e, t); return e = Math.exp(r.re * i - r.im * n), t = r.im * i + r.re * n, new s(e * Math.cos(t), e * Math.sin(t)); }, sqrt: function () { var e, t, r = this.re, n = this.im, i = this.abs(); if (r >= 0) {
                if (0 === n)
                    return new s(Math.sqrt(r), 0);
                e = .5 * Math.sqrt(2 * (i + r));
            }
            else
                e = Math.abs(n) / Math.sqrt(2 * (i - r)); return t = r <= 0 ? .5 * Math.sqrt(2 * (i - r)) : Math.abs(n) / Math.sqrt(2 * (i + r)), new s(e, n < 0 ? -t : t); }, exp: function () { var e = Math.exp(this.re); return this.im, new s(e * Math.cos(this.im), e * Math.sin(this.im)); }, expm1: function () { var e = this.re, t = this.im; return new s(Math.expm1(e) * Math.cos(t) + function (e) { var t = Math.PI / 4; if (-t > e || e > t)
                return Math.cos(e) - 1; var r = e * e; return r * (r * (r * (r * (r * (r * (r * (r / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - .5); }(t), Math.exp(e) * Math.sin(t)); }, log: function () { var e = this.re, t = this.im; return new s(u(e, t), Math.atan2(t, e)); }, abs: function () { return e = this.re, t = this.im, r = Math.abs(e), n = Math.abs(t), r < 3e3 && n < 3e3 ? Math.sqrt(r * r + n * n) : (r < n ? (r = n, n = e / t) : n = t / e, r * Math.sqrt(1 + n * n)); var e, t, r, n; }, arg: function () { return Math.atan2(this.im, this.re); }, sin: function () { var e = this.re, t = this.im; return new s(Math.sin(e) * i(t), Math.cos(e) * a(t)); }, cos: function () { var e = this.re, t = this.im; return new s(Math.cos(e) * i(t), -Math.sin(e) * a(t)); }, tan: function () { var e = 2 * this.re, t = 2 * this.im, r = Math.cos(e) + i(t); return new s(Math.sin(e) / r, a(t) / r); }, cot: function () { var e = 2 * this.re, t = 2 * this.im, r = Math.cos(e) - i(t); return new s(-Math.sin(e) / r, a(t) / r); }, sec: function () { var e = this.re, t = this.im, r = .5 * i(2 * t) + .5 * Math.cos(2 * e); return new s(Math.cos(e) * i(t) / r, Math.sin(e) * a(t) / r); }, csc: function () { var e = this.re, t = this.im, r = .5 * i(2 * t) - .5 * Math.cos(2 * e); return new s(Math.sin(e) * i(t) / r, -Math.cos(e) * a(t) / r); }, asin: function () { var e = this.re, t = this.im, r = new s(t * t - e * e + 1, -2 * e * t).sqrt(), n = new s(r.re - t, r.im + e).log(); return new s(n.im, -n.re); }, acos: function () { var e = this.re, t = this.im, r = new s(t * t - e * e + 1, -2 * e * t).sqrt(), n = new s(r.re - t, r.im + e).log(); return new s(Math.PI / 2 - n.im, n.re); }, atan: function () { var e = this.re, t = this.im; if (0 === e) {
                if (1 === t)
                    return new s(0, 1 / 0);
                if (-1 === t)
                    return new s(0, -1 / 0);
            } var r = e * e + (1 - t) * (1 - t), n = new s((1 - t * t - e * e) / r, -2 * e / r).log(); return new s(-.5 * n.im, .5 * n.re); }, acot: function () { var e = this.re, t = this.im; if (0 === t)
                return new s(Math.atan2(1, e), 0); var r = e * e + t * t; return 0 !== r ? new s(e / r, -t / r).atan() : new s(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).atan(); }, asec: function () { var e = this.re, t = this.im; if (0 === e && 0 === t)
                return new s(0, 1 / 0); var r = e * e + t * t; return 0 !== r ? new s(e / r, -t / r).acos() : new s(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).acos(); }, acsc: function () { var e = this.re, t = this.im; if (0 === e && 0 === t)
                return new s(Math.PI / 2, 1 / 0); var r = e * e + t * t; return 0 !== r ? new s(e / r, -t / r).asin() : new s(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).asin(); }, sinh: function () { var e = this.re, t = this.im; return new s(a(e) * Math.cos(t), i(e) * Math.sin(t)); }, cosh: function () { var e = this.re, t = this.im; return new s(i(e) * Math.cos(t), a(e) * Math.sin(t)); }, tanh: function () { var e = 2 * this.re, t = 2 * this.im, r = i(e) + Math.cos(t); return new s(a(e) / r, Math.sin(t) / r); }, coth: function () { var e = 2 * this.re, t = 2 * this.im, r = i(e) - Math.cos(t); return new s(a(e) / r, -Math.sin(t) / r); }, csch: function () { var e = this.re, t = this.im, r = Math.cos(2 * t) - i(2 * e); return new s(-2 * a(e) * Math.cos(t) / r, 2 * i(e) * Math.sin(t) / r); }, sech: function () { var e = this.re, t = this.im, r = Math.cos(2 * t) + i(2 * e); return new s(2 * i(e) * Math.cos(t) / r, -2 * a(e) * Math.sin(t) / r); }, asinh: function () { var e = this.im; this.im = -this.re, this.re = e; var t = this.asin(); return this.re = -this.im, this.im = e, e = t.re, t.re = -t.im, t.im = e, t; }, acosh: function () { var e = this.acos(); if (e.im <= 0) {
                var t = e.re;
                e.re = -e.im, e.im = t;
            }
            else
                t = e.im, e.im = -e.re, e.re = t; return e; }, atanh: function () { var e = this.re, t = this.im, r = e > 1 && 0 === t, n = 1 - e, i = 1 + e, a = n * n + t * t, o = 0 !== a ? new s((i * n - t * t) / a, (t * n + i * t) / a) : new s(-1 !== e ? e / 0 : 0, 0 !== t ? t / 0 : 0), c = o.re; return o.re = u(o.re, o.im) / 2, o.im = Math.atan2(o.im, c) / 2, r && (o.im = -o.im), o; }, acoth: function () { var e = this.re, t = this.im; if (0 === e && 0 === t)
                return new s(0, Math.PI / 2); var r = e * e + t * t; return 0 !== r ? new s(e / r, -t / r).atanh() : new s(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).atanh(); }, acsch: function () { var e = this.re, t = this.im; if (0 === t)
                return new s(0 !== e ? Math.log(e + Math.sqrt(e * e + 1)) : 1 / 0, 0); var r = e * e + t * t; return 0 !== r ? new s(e / r, -t / r).asinh() : new s(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).asinh(); }, asech: function () { var e = this.re, t = this.im; if (this.isZero())
                return s.INFINITY; var r = e * e + t * t; return 0 !== r ? new s(e / r, -t / r).acosh() : new s(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).acosh(); }, inverse: function () { if (this.isZero())
                return s.INFINITY; if (this.isInfinite())
                return s.ZERO; var e = this.re, t = this.im, r = e * e + t * t; return new s(e / r, -t / r); }, conjugate: function () { return new s(this.re, -this.im); }, neg: function () { return new s(-this.re, -this.im); }, ceil: function (e) { return e = Math.pow(10, e || 0), new s(Math.ceil(this.re * e) / e, Math.ceil(this.im * e) / e); }, floor: function (e) { return e = Math.pow(10, e || 0), new s(Math.floor(this.re * e) / e, Math.floor(this.im * e) / e); }, round: function (e) { return e = Math.pow(10, e || 0), new s(Math.round(this.re * e) / e, Math.round(this.im * e) / e); }, equals: function (e, t) { var r = new s(e, t); return Math.abs(r.re - this.re) <= s.EPSILON && Math.abs(r.im - this.im) <= s.EPSILON; }, clone: function () { return new s(this.re, this.im); }, toString: function () { var e = this.re, t = this.im, r = ""; return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(e) < s.EPSILON && (e = 0), Math.abs(t) < s.EPSILON && (t = 0), 0 === t ? r + e : (0 !== e ? (r += e, r += " ", t < 0 ? (t = -t, r += "-") : r += "+", r += " ") : t < 0 && (t = -t, r += "-"), 1 !== t && (r += t), r + "i")); }, toVector: function () { return [this.re, this.im]; }, valueOf: function () { return 0 === this.im ? this.re : null; }, isNaN: function () { return isNaN(this.re) || isNaN(this.im); }, isZero: function () { return 0 === this.im && 0 === this.re; }, isFinite: function () { return isFinite(this.re) && isFinite(this.im); }, isInfinite: function () { return !(this.isNaN() || this.isFinite()); } }, s.ZERO = new s(0, 0), s.ONE = new s(1, 0), s.I = new s(0, 1), s.PI = new s(Math.PI, 0), s.E = new s(Math.E, 0), s.INFINITY = new s(1 / 0, 1 / 0), s.NAN = new s(NaN, NaN), s.EPSILON = 1e-15, void 0 === (r = function () { return s; }.apply(t, [])) || (e.exports = r);
    }(); }, 9662: (e, t, r) => { var n = r(614), i = r(6330), a = TypeError; e.exports = function (e) { if (n(e))
        return e; throw a(i(e) + " is not a function"); }; }, 9483: (e, t, r) => { var n = r(4411), i = r(6330), a = TypeError; e.exports = function (e) { if (n(e))
        return e; throw a(i(e) + " is not a constructor"); }; }, 6077: (e, t, r) => { var n = r(614), i = String, a = TypeError; e.exports = function (e) { if ("object" == typeof e || n(e))
        return e; throw a("Can't set " + i(e) + " as a prototype"); }; }, 1223: (e, t, r) => { var n = r(5112), i = r(30), a = r(3070).f, o = n("unscopables"), u = Array.prototype; null == u[o] && a(u, o, { configurable: !0, value: i(null) }), e.exports = function (e) { u[o][e] = !0; }; }, 1530: (e, t, r) => {
        "use strict";
        var n = r(8710).charAt;
        e.exports = function (e, t, r) { return t + (r ? n(e, t).length : 1); };
    }, 5787: (e, t, r) => { var n = r(7976), i = TypeError; e.exports = function (e, t) { if (n(t, e))
        return e; throw i("Incorrect invocation"); }; }, 9670: (e, t, r) => { var n = r(111), i = String, a = TypeError; e.exports = function (e) { if (n(e))
        return e; throw a(i(e) + " is not an object"); }; }, 7556: (e, t, r) => { var n = r(7293); e.exports = n((function () { if ("function" == typeof ArrayBuffer) {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
    } })); }, 1285: (e, t, r) => {
        "use strict";
        var n = r(7908), i = r(1400), a = r(6244);
        e.exports = function (e) { for (var t = n(this), r = a(t), o = arguments.length, u = i(o > 1 ? arguments[1] : void 0, r), s = o > 2 ? arguments[2] : void 0, c = void 0 === s ? r : i(s, r); c > u;)
            t[u++] = e; return t; };
    }, 8533: (e, t, r) => {
        "use strict";
        var n = r(2092).forEach, i = r(9341)("forEach");
        e.exports = i ? [].forEach : function (e) { return n(this, e, arguments.length > 1 ? arguments[1] : void 0); };
    }, 8457: (e, t, r) => {
        "use strict";
        var n = r(9974), i = r(6916), a = r(7908), o = r(3411), u = r(7659), s = r(4411), c = r(6244), f = r(6135), l = r(4121), p = r(1246), m = Array;
        e.exports = function (e) { var t = a(e), r = s(this), h = arguments.length, d = h > 1 ? arguments[1] : void 0, v = void 0 !== d; v && (d = n(d, h > 2 ? arguments[2] : void 0)); var y, g, x, b, w, N, D = p(t), E = 0; if (!D || this === m && u(D))
            for (y = c(t), g = r ? new this(y) : m(y); y > E; E++)
                N = v ? d(t[E], E) : t[E], f(g, E, N);
        else
            for (w = (b = l(t, D)).next, g = r ? new this : []; !(x = i(w, b)).done; E++)
                N = v ? o(b, d, [x.value, E], !0) : x.value, f(g, E, N); return g.length = E, g; };
    }, 1318: (e, t, r) => { var n = r(5656), i = r(1400), a = r(6244), o = function (e) { return function (t, r, o) { var u, s = n(t), c = a(s), f = i(o, c); if (e && r != r) {
        for (; c > f;)
            if ((u = s[f++]) != u)
                return !0;
    }
    else
        for (; c > f; f++)
            if ((e || f in s) && s[f] === r)
                return e || f || 0; return !e && -1; }; }; e.exports = { includes: o(!0), indexOf: o(!1) }; }, 2092: (e, t, r) => { var n = r(9974), i = r(1702), a = r(8361), o = r(7908), u = r(6244), s = r(5417), c = i([].push), f = function (e) { var t = 1 == e, r = 2 == e, i = 3 == e, f = 4 == e, l = 6 == e, p = 7 == e, m = 5 == e || l; return function (h, d, v, y) { for (var g, x, b = o(h), w = a(b), N = n(d, v), D = u(w), E = 0, A = y || s, S = t ? A(h, D) : r || p ? A(h, 0) : void 0; D > E; E++)
        if ((m || E in w) && (x = N(g = w[E], E, b), e))
            if (t)
                S[E] = x;
            else if (x)
                switch (e) {
                    case 3: return !0;
                    case 5: return g;
                    case 6: return E;
                    case 2: c(S, g);
                }
            else
                switch (e) {
                    case 4: return !1;
                    case 7: c(S, g);
                } return l ? -1 : i || f ? f : S; }; }; e.exports = { forEach: f(0), map: f(1), filter: f(2), some: f(3), every: f(4), find: f(5), findIndex: f(6), filterReject: f(7) }; }, 1194: (e, t, r) => { var n = r(7293), i = r(5112), a = r(7392), o = i("species"); e.exports = function (e) { return a >= 51 || !n((function () { var t = []; return (t.constructor = {})[o] = function () { return { foo: 1 }; }, 1 !== t[e](Boolean).foo; })); }; }, 9341: (e, t, r) => {
        "use strict";
        var n = r(7293);
        e.exports = function (e, t) { var r = [][e]; return !!r && n((function () { r.call(null, t || function () { return 1; }, 1); })); };
    }, 3671: (e, t, r) => { var n = r(9662), i = r(7908), a = r(8361), o = r(6244), u = TypeError, s = function (e) { return function (t, r, s, c) { n(r); var f = i(t), l = a(f), p = o(f), m = e ? p - 1 : 0, h = e ? -1 : 1; if (s < 2)
        for (;;) {
            if (m in l) {
                c = l[m], m += h;
                break;
            }
            if (m += h, e ? m < 0 : p <= m)
                throw u("Reduce of empty array with no initial value");
        } for (; e ? m >= 0 : p > m; m += h)
        m in l && (c = r(c, l[m], m, f)); return c; }; }; e.exports = { left: s(!1), right: s(!0) }; }, 3658: (e, t, r) => {
        "use strict";
        var n = r(9781), i = r(3157), a = TypeError, o = Object.getOwnPropertyDescriptor, u = n && !function () { if (void 0 !== this)
            return !0; try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
        }
        catch (e) {
            return e instanceof TypeError;
        } }();
        e.exports = u ? function (e, t) { if (i(e) && !o(e, "length").writable)
            throw a("Cannot set read only .length"); return e.length = t; } : function (e, t) { return e.length = t; };
    }, 1589: (e, t, r) => { var n = r(1400), i = r(6244), a = r(6135), o = Array, u = Math.max; e.exports = function (e, t, r) { for (var s = i(e), c = n(t, s), f = n(void 0 === r ? s : r, s), l = o(u(f - c, 0)), p = 0; c < f; c++, p++)
        a(l, p, e[c]); return l.length = p, l; }; }, 206: (e, t, r) => { var n = r(1702); e.exports = n([].slice); }, 4362: (e, t, r) => { var n = r(1589), i = Math.floor, a = function (e, t) { var r = e.length, s = i(r / 2); return r < 8 ? o(e, t) : u(e, a(n(e, 0, s), t), a(n(e, s), t), t); }, o = function (e, t) { for (var r, n, i = e.length, a = 1; a < i;) {
        for (n = a, r = e[a]; n && t(e[n - 1], r) > 0;)
            e[n] = e[--n];
        n !== a++ && (e[n] = r);
    } return e; }, u = function (e, t, r, n) { for (var i = t.length, a = r.length, o = 0, u = 0; o < i || u < a;)
        e[o + u] = o < i && u < a ? n(t[o], r[u]) <= 0 ? t[o++] : r[u++] : o < i ? t[o++] : r[u++]; return e; }; e.exports = a; }, 7475: (e, t, r) => { var n = r(3157), i = r(4411), a = r(111), o = r(5112)("species"), u = Array; e.exports = function (e) { var t; return n(e) && (t = e.constructor, (i(t) && (t === u || n(t.prototype)) || a(t) && null === (t = t[o])) && (t = void 0)), void 0 === t ? u : t; }; }, 5417: (e, t, r) => { var n = r(7475); e.exports = function (e, t) { return new (n(e))(0 === t ? 0 : t); }; }, 3411: (e, t, r) => { var n = r(9670), i = r(9212); e.exports = function (e, t, r, a) { try {
        return a ? t(n(r)[0], r[1]) : t(r);
    }
    catch (t) {
        i(e, "throw", t);
    } }; }, 7072: (e, t, r) => { var n = r(5112)("iterator"), i = !1; try {
        var a = 0, o = { next: function () { return { done: !!a++ }; }, return: function () { i = !0; } };
        o[n] = function () { return this; }, Array.from(o, (function () { throw 2; }));
    }
    catch (e) { } e.exports = function (e, t) { if (!t && !i)
        return !1; var r = !1; try {
        var a = {};
        a[n] = function () { return { next: function () { return { done: r = !0 }; } }; }, e(a);
    }
    catch (e) { } return r; }; }, 4326: (e, t, r) => { var n = r(1702), i = n({}.toString), a = n("".slice); e.exports = function (e) { return a(i(e), 8, -1); }; }, 648: (e, t, r) => { var n = r(1694), i = r(614), a = r(4326), o = r(5112)("toStringTag"), u = Object, s = "Arguments" == a(function () { return arguments; }()); e.exports = n ? a : function (e) { var t, r, n; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) { try {
        return e[t];
    }
    catch (e) { } }(t = u(e), o)) ? r : s ? a(t) : "Object" == (n = a(t)) && i(t.callee) ? "Arguments" : n; }; }, 5631: (e, t, r) => {
        "use strict";
        var n = r(3070).f, i = r(30), a = r(9190), o = r(9974), u = r(5787), s = r(8554), c = r(408), f = r(1656), l = r(6178), p = r(6340), m = r(9781), h = r(2423).fastKey, d = r(9909), v = d.set, y = d.getterFor;
        e.exports = { getConstructor: function (e, t, r, f) { var l = e((function (e, n) { u(e, p), v(e, { type: t, index: i(null), first: void 0, last: void 0, size: 0 }), m || (e.size = 0), s(n) || c(n, e[f], { that: e, AS_ENTRIES: r }); })), p = l.prototype, d = y(t), g = function (e, t, r) { var n, i, a = d(e), o = x(e, t); return o ? o.value = r : (a.last = o = { index: i = h(t, !0), key: t, value: r, previous: n = a.last, next: void 0, removed: !1 }, a.first || (a.first = o), n && (n.next = o), m ? a.size++ : e.size++, "F" !== i && (a.index[i] = o)), e; }, x = function (e, t) { var r, n = d(e), i = h(t); if ("F" !== i)
                return n.index[i]; for (r = n.first; r; r = r.next)
                if (r.key == t)
                    return r; }; return a(p, { clear: function () { for (var e = d(this), t = e.index, r = e.first; r;)
                    r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete t[r.index], r = r.next; e.first = e.last = void 0, m ? e.size = 0 : this.size = 0; }, delete: function (e) { var t = this, r = d(t), n = x(t, e); if (n) {
                    var i = n.next, a = n.previous;
                    delete r.index[n.index], n.removed = !0, a && (a.next = i), i && (i.previous = a), r.first == n && (r.first = i), r.last == n && (r.last = a), m ? r.size-- : t.size--;
                } return !!n; }, forEach: function (e) { for (var t, r = d(this), n = o(e, arguments.length > 1 ? arguments[1] : void 0); t = t ? t.next : r.first;)
                    for (n(t.value, t.key, this); t && t.removed;)
                        t = t.previous; }, has: function (e) { return !!x(this, e); } }), a(p, r ? { get: function (e) { var t = x(this, e); return t && t.value; }, set: function (e, t) { return g(this, 0 === e ? 0 : e, t); } } : { add: function (e) { return g(this, e = 0 === e ? 0 : e, e); } }), m && n(p, "size", { get: function () { return d(this).size; } }), l; }, setStrong: function (e, t, r) { var n = t + " Iterator", i = y(t), a = y(n); f(e, t, (function (e, t) { v(this, { type: n, target: e, state: i(e), kind: t, last: void 0 }); }), (function () { for (var e = a(this), t = e.kind, r = e.last; r && r.removed;)
                r = r.previous; return e.target && (e.last = r = r ? r.next : e.state.first) ? l("keys" == t ? r.key : "values" == t ? r.value : [r.key, r.value], !1) : (e.target = void 0, l(void 0, !0)); }), r ? "entries" : "values", !r, !0), p(t); } };
    }, 7710: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(7854), a = r(1702), o = r(4705), u = r(8052), s = r(2423), c = r(408), f = r(5787), l = r(614), p = r(8554), m = r(111), h = r(7293), d = r(7072), v = r(8003), y = r(9587);
        e.exports = function (e, t, r) { var g = -1 !== e.indexOf("Map"), x = -1 !== e.indexOf("Weak"), b = g ? "set" : "add", w = i[e], N = w && w.prototype, D = w, E = {}, A = function (e) { var t = a(N[e]); u(N, e, "add" == e ? function (e) { return t(this, 0 === e ? 0 : e), this; } : "delete" == e ? function (e) { return !(x && !m(e)) && t(this, 0 === e ? 0 : e); } : "get" == e ? function (e) { return x && !m(e) ? void 0 : t(this, 0 === e ? 0 : e); } : "has" == e ? function (e) { return !(x && !m(e)) && t(this, 0 === e ? 0 : e); } : function (e, r) { return t(this, 0 === e ? 0 : e, r), this; }); }; if (o(e, !l(w) || !(x || N.forEach && !h((function () { (new w).entries().next(); })))))
            D = r.getConstructor(t, e, g, b), s.enable();
        else if (o(e, !0)) {
            var S = new D, C = S[b](x ? {} : -0, 1) != S, M = h((function () { S.has(1); })), F = d((function (e) { new w(e); })), O = !x && h((function () { for (var e = new w, t = 5; t--;)
                e[b](t, t); return !e.has(-0); }));
            F || ((D = t((function (e, t) { f(e, N); var r = y(new w, e, D); return p(t) || c(t, r[b], { that: r, AS_ENTRIES: g }), r; }))).prototype = N, N.constructor = D), (M || O) && (A("delete"), A("has"), g && A("get")), (O || C) && A(b), x && N.clear && delete N.clear;
        } return E[e] = D, n({ global: !0, constructor: !0, forced: D != w }, E), v(D, e), x || r.setStrong(D, e, g), D; };
    }, 9920: (e, t, r) => { var n = r(2597), i = r(3887), a = r(1236), o = r(3070); e.exports = function (e, t, r) { for (var u = i(t), s = o.f, c = a.f, f = 0; f < u.length; f++) {
        var l = u[f];
        n(e, l) || r && n(r, l) || s(e, l, c(t, l));
    } }; }, 4964: (e, t, r) => { var n = r(5112)("match"); e.exports = function (e) { var t = /./; try {
        "/./"[e](t);
    }
    catch (r) {
        try {
            return t[n] = !1, "/./"[e](t);
        }
        catch (e) { }
    } return !1; }; }, 8544: (e, t, r) => { var n = r(7293); e.exports = !n((function () { function e() { } return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype; })); }, 4230: (e, t, r) => { var n = r(1702), i = r(4488), a = r(1340), o = /"/g, u = n("".replace); e.exports = function (e, t, r, n) { var s = a(i(e)), c = "<" + t; return "" !== r && (c += " " + r + '="' + u(a(n), o, "&quot;") + '"'), c + ">" + s + "</" + t + ">"; }; }, 6178: e => { e.exports = function (e, t) { return { value: e, done: t }; }; }, 8880: (e, t, r) => { var n = r(9781), i = r(3070), a = r(9114); e.exports = n ? function (e, t, r) { return i.f(e, t, a(1, r)); } : function (e, t, r) { return e[t] = r, e; }; }, 9114: e => { e.exports = function (e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }; }; }, 6135: (e, t, r) => {
        "use strict";
        var n = r(4948), i = r(3070), a = r(9114);
        e.exports = function (e, t, r) { var o = n(t); o in e ? i.f(e, o, a(0, r)) : e[o] = r; };
    }, 7045: (e, t, r) => { var n = r(6339), i = r(3070); e.exports = function (e, t, r) { return r.get && n(r.get, t, { getter: !0 }), r.set && n(r.set, t, { setter: !0 }), i.f(e, t, r); }; }, 8052: (e, t, r) => { var n = r(614), i = r(3070), a = r(6339), o = r(3072); e.exports = function (e, t, r, u) { u || (u = {}); var s = u.enumerable, c = void 0 !== u.name ? u.name : t; if (n(r) && a(r, c, u), u.global)
        s ? e[t] = r : o(t, r);
    else {
        try {
            u.unsafe ? e[t] && (s = !0) : delete e[t];
        }
        catch (e) { }
        s ? e[t] = r : i.f(e, t, { value: r, enumerable: !1, configurable: !u.nonConfigurable, writable: !u.nonWritable });
    } return e; }; }, 9190: (e, t, r) => { var n = r(8052); e.exports = function (e, t, r) { for (var i in t)
        n(e, i, t[i], r); return e; }; }, 3072: (e, t, r) => { var n = r(7854), i = Object.defineProperty; e.exports = function (e, t) { try {
        i(n, e, { value: t, configurable: !0, writable: !0 });
    }
    catch (r) {
        n[e] = t;
    } return t; }; }, 5117: (e, t, r) => {
        "use strict";
        var n = r(6330), i = TypeError;
        e.exports = function (e, t) { if (!delete e[t])
            throw i("Cannot delete property " + n(t) + " of " + n(e)); };
    }, 9781: (e, t, r) => { var n = r(7293); e.exports = !n((function () { return 7 != Object.defineProperty({}, 1, { get: function () { return 7; } })[1]; })); }, 4154: e => { var t = "object" == typeof document && document.all, r = void 0 === t && void 0 !== t; e.exports = { all: t, IS_HTMLDDA: r }; }, 317: (e, t, r) => { var n = r(7854), i = r(111), a = n.document, o = i(a) && i(a.createElement); e.exports = function (e) { return o ? a.createElement(e) : {}; }; }, 7207: e => { var t = TypeError; e.exports = function (e) { if (e > 9007199254740991)
        throw t("Maximum allowed index exceeded"); return e; }; }, 8324: e => { e.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }; }, 8509: (e, t, r) => { var n = r(317)("span").classList, i = n && n.constructor && n.constructor.prototype; e.exports = i === Object.prototype ? void 0 : i; }, 8886: (e, t, r) => { var n = r(8113).match(/firefox\/(\d+)/i); e.exports = !!n && +n[1]; }, 7871: (e, t, r) => { var n = r(3823), i = r(5268); e.exports = !n && !i && "object" == typeof window && "object" == typeof document; }, 3823: e => { e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version; }, 256: (e, t, r) => { var n = r(8113); e.exports = /MSIE|Trident/.test(n); }, 1528: (e, t, r) => { var n = r(8113), i = r(7854); e.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== i.Pebble; }, 6833: (e, t, r) => { var n = r(8113); e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n); }, 5268: (e, t, r) => { var n = r(4326), i = r(7854); e.exports = "process" == n(i.process); }, 1036: (e, t, r) => { var n = r(8113); e.exports = /web0s(?!.*chrome)/i.test(n); }, 8113: (e, t, r) => { var n = r(5005); e.exports = n("navigator", "userAgent") || ""; }, 7392: (e, t, r) => { var n, i, a = r(7854), o = r(8113), u = a.process, s = a.Deno, c = u && u.versions || s && s.version, f = c && c.v8; f && (i = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && o && (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (i = +n[1]), e.exports = i; }, 8008: (e, t, r) => { var n = r(8113).match(/AppleWebKit\/(\d+)\./); e.exports = !!n && +n[1]; }, 748: e => { e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]; }, 2109: (e, t, r) => { var n = r(7854), i = r(1236).f, a = r(8880), o = r(8052), u = r(3072), s = r(9920), c = r(4705); e.exports = function (e, t) { var r, f, l, p, m, h = e.target, d = e.global, v = e.stat; if (r = d ? n : v ? n[h] || u(h, {}) : (n[h] || {}).prototype)
        for (f in t) {
            if (p = t[f], l = e.dontCallGetSet ? (m = i(r, f)) && m.value : r[f], !c(d ? f : h + (v ? "." : "#") + f, e.forced) && void 0 !== l) {
                if (typeof p == typeof l)
                    continue;
                s(p, l);
            }
            (e.sham || l && l.sham) && a(p, "sham", !0), o(r, f, p, e);
        } }; }, 7293: e => { e.exports = function (e) { try {
        return !!e();
    }
    catch (e) {
        return !0;
    } }; }, 7007: (e, t, r) => {
        "use strict";
        r(4916);
        var n = r(1470), i = r(8052), a = r(2261), o = r(7293), u = r(5112), s = r(8880), c = u("species"), f = RegExp.prototype;
        e.exports = function (e, t, r, l) { var p = u(e), m = !o((function () { var t = {}; return t[p] = function () { return 7; }, 7 != ""[e](t); })), h = m && !o((function () { var t = !1, r = /a/; return "split" === e && ((r = {}).constructor = {}, r.constructor[c] = function () { return r; }, r.flags = "", r[p] = /./[p]), r.exec = function () { return t = !0, null; }, r[p](""), !t; })); if (!m || !h || r) {
            var d = n(/./[p]), v = t(p, ""[e], (function (e, t, r, i, o) { var u = n(e), s = t.exec; return s === a || s === f.exec ? m && !o ? { done: !0, value: d(t, r, i) } : { done: !0, value: u(r, t, i) } : { done: !1 }; }));
            i(String.prototype, e, v[0]), i(f, p, v[1]);
        } l && s(f[p], "sham", !0); };
    }, 6677: (e, t, r) => { var n = r(7293); e.exports = !n((function () { return Object.isExtensible(Object.preventExtensions({})); })); }, 2104: (e, t, r) => { var n = r(4374), i = Function.prototype, a = i.apply, o = i.call; e.exports = "object" == typeof Reflect && Reflect.apply || (n ? o.bind(a) : function () { return o.apply(a, arguments); }); }, 9974: (e, t, r) => { var n = r(1470), i = r(9662), a = r(4374), o = n(n.bind); e.exports = function (e, t) { return i(e), void 0 === t ? e : a ? o(e, t) : function () { return e.apply(t, arguments); }; }; }, 4374: (e, t, r) => { var n = r(7293); e.exports = !n((function () { var e = function () { }.bind(); return "function" != typeof e || e.hasOwnProperty("prototype"); })); }, 7065: (e, t, r) => {
        "use strict";
        var n = r(1702), i = r(9662), a = r(111), o = r(2597), u = r(206), s = r(4374), c = Function, f = n([].concat), l = n([].join), p = {}, m = function (e, t, r) { if (!o(p, t)) {
            for (var n = [], i = 0; i < t; i++)
                n[i] = "a[" + i + "]";
            p[t] = c("C,a", "return new C(" + l(n, ",") + ")");
        } return p[t](e, r); };
        e.exports = s ? c.bind : function (e) { var t = i(this), r = t.prototype, n = u(arguments, 1), o = function () { var r = f(n, u(arguments)); return this instanceof o ? m(t, r.length, r) : t.apply(e, r); }; return a(r) && (o.prototype = r), o; };
    }, 6916: (e, t, r) => { var n = r(4374), i = Function.prototype.call; e.exports = n ? i.bind(i) : function () { return i.apply(i, arguments); }; }, 6530: (e, t, r) => { var n = r(9781), i = r(2597), a = Function.prototype, o = n && Object.getOwnPropertyDescriptor, u = i(a, "name"), s = u && "something" === function () { }.name, c = u && (!n || n && o(a, "name").configurable); e.exports = { EXISTS: u, PROPER: s, CONFIGURABLE: c }; }, 1470: (e, t, r) => { var n = r(4326), i = r(1702); e.exports = function (e) { if ("Function" === n(e))
        return i(e); }; }, 1702: (e, t, r) => { var n = r(4374), i = Function.prototype, a = i.call, o = n && i.bind.bind(a, a); e.exports = n ? o : function (e) { return function () { return a.apply(e, arguments); }; }; }, 5005: (e, t, r) => { var n = r(7854), i = r(614), a = function (e) { return i(e) ? e : void 0; }; e.exports = function (e, t) { return arguments.length < 2 ? a(n[e]) : n[e] && n[e][t]; }; }, 1246: (e, t, r) => { var n = r(648), i = r(8173), a = r(8554), o = r(7497), u = r(5112)("iterator"); e.exports = function (e) { if (!a(e))
        return i(e, u) || i(e, "@@iterator") || o[n(e)]; }; }, 4121: (e, t, r) => { var n = r(6916), i = r(9662), a = r(9670), o = r(6330), u = r(1246), s = TypeError; e.exports = function (e, t) { var r = arguments.length < 2 ? u(e) : t; if (i(r))
        return a(n(r, e)); throw s(o(e) + " is not iterable"); }; }, 8173: (e, t, r) => { var n = r(9662), i = r(8554); e.exports = function (e, t) { var r = e[t]; return i(r) ? void 0 : n(r); }; }, 647: (e, t, r) => { var n = r(1702), i = r(7908), a = Math.floor, o = n("".charAt), u = n("".replace), s = n("".slice), c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, f = /\$([$&'`]|\d{1,2})/g; e.exports = function (e, t, r, n, l, p) { var m = r + e.length, h = n.length, d = f; return void 0 !== l && (l = i(l), d = c), u(p, d, (function (i, u) { var c; switch (o(u, 0)) {
        case "$": return "$";
        case "&": return e;
        case "`": return s(t, 0, r);
        case "'": return s(t, m);
        case "<":
            c = l[s(u, 1, -1)];
            break;
        default:
            var f = +u;
            if (0 === f)
                return i;
            if (f > h) {
                var p = a(f / 10);
                return 0 === p ? i : p <= h ? void 0 === n[p - 1] ? o(u, 1) : n[p - 1] + o(u, 1) : i;
            }
            c = n[f - 1];
    } return void 0 === c ? "" : c; })); }; }, 7854: (e, t, r) => { var n = function (e) { return e && e.Math == Math && e; }; e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function () { return this; }() || Function("return this")(); }, 2597: (e, t, r) => { var n = r(1702), i = r(7908), a = n({}.hasOwnProperty); e.exports = Object.hasOwn || function (e, t) { return a(i(e), t); }; }, 3501: e => { e.exports = {}; }, 842: (e, t, r) => { var n = r(7854); e.exports = function (e, t) { var r = n.console; r && r.error && (1 == arguments.length ? r.error(e) : r.error(e, t)); }; }, 490: (e, t, r) => { var n = r(5005); e.exports = n("document", "documentElement"); }, 4664: (e, t, r) => { var n = r(9781), i = r(7293), a = r(317); e.exports = !n && !i((function () { return 7 != Object.defineProperty(a("div"), "a", { get: function () { return 7; } }).a; })); }, 8361: (e, t, r) => { var n = r(1702), i = r(7293), a = r(4326), o = Object, u = n("".split); e.exports = i((function () { return !o("z").propertyIsEnumerable(0); })) ? function (e) { return "String" == a(e) ? u(e, "") : o(e); } : o; }, 9587: (e, t, r) => { var n = r(614), i = r(111), a = r(7674); e.exports = function (e, t, r) { var o, u; return a && n(o = t.constructor) && o !== r && i(u = o.prototype) && u !== r.prototype && a(e, u), e; }; }, 2788: (e, t, r) => { var n = r(1702), i = r(614), a = r(5465), o = n(Function.toString); i(a.inspectSource) || (a.inspectSource = function (e) { return o(e); }), e.exports = a.inspectSource; }, 2423: (e, t, r) => { var n = r(2109), i = r(1702), a = r(3501), o = r(111), u = r(2597), s = r(3070).f, c = r(8006), f = r(1156), l = r(2050), p = r(9711), m = r(6677), h = !1, d = p("meta"), v = 0, y = function (e) { s(e, d, { value: { objectID: "O" + v++, weakData: {} } }); }, g = e.exports = { enable: function () { g.enable = function () { }, h = !0; var e = c.f, t = i([].splice), r = {}; r[d] = 1, e(r).length && (c.f = function (r) { for (var n = e(r), i = 0, a = n.length; i < a; i++)
            if (n[i] === d) {
                t(n, i, 1);
                break;
            } return n; }, n({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: f.f })); }, fastKey: function (e, t) { if (!o(e))
            return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!u(e, d)) {
            if (!l(e))
                return "F";
            if (!t)
                return "E";
            y(e);
        } return e[d].objectID; }, getWeakData: function (e, t) { if (!u(e, d)) {
            if (!l(e))
                return !0;
            if (!t)
                return !1;
            y(e);
        } return e[d].weakData; }, onFreeze: function (e) { return m && h && l(e) && !u(e, d) && y(e), e; } }; a[d] = !0; }, 9909: (e, t, r) => { var n, i, a, o = r(4811), u = r(7854), s = r(111), c = r(8880), f = r(2597), l = r(5465), p = r(6200), m = r(3501), h = "Object already initialized", d = u.TypeError, v = u.WeakMap; if (o || l.state) {
        var y = l.state || (l.state = new v);
        y.get = y.get, y.has = y.has, y.set = y.set, n = function (e, t) { if (y.has(e))
            throw d(h); return t.facade = e, y.set(e, t), t; }, i = function (e) { return y.get(e) || {}; }, a = function (e) { return y.has(e); };
    }
    else {
        var g = p("state");
        m[g] = !0, n = function (e, t) { if (f(e, g))
            throw d(h); return t.facade = e, c(e, g, t), t; }, i = function (e) { return f(e, g) ? e[g] : {}; }, a = function (e) { return f(e, g); };
    } e.exports = { set: n, get: i, has: a, enforce: function (e) { return a(e) ? i(e) : n(e, {}); }, getterFor: function (e) { return function (t) { var r; if (!s(t) || (r = i(t)).type !== e)
            throw d("Incompatible receiver, " + e + " required"); return r; }; } }; }, 7659: (e, t, r) => { var n = r(5112), i = r(7497), a = n("iterator"), o = Array.prototype; e.exports = function (e) { return void 0 !== e && (i.Array === e || o[a] === e); }; }, 3157: (e, t, r) => { var n = r(4326); e.exports = Array.isArray || function (e) { return "Array" == n(e); }; }, 614: (e, t, r) => { var n = r(4154), i = n.all; e.exports = n.IS_HTMLDDA ? function (e) { return "function" == typeof e || e === i; } : function (e) { return "function" == typeof e; }; }, 4411: (e, t, r) => { var n = r(1702), i = r(7293), a = r(614), o = r(648), u = r(5005), s = r(2788), c = function () { }, f = [], l = u("Reflect", "construct"), p = /^\s*(?:class|function)\b/, m = n(p.exec), h = !p.exec(c), d = function (e) { if (!a(e))
        return !1; try {
        return l(c, f, e), !0;
    }
    catch (e) {
        return !1;
    } }, v = function (e) { if (!a(e))
        return !1; switch (o(e)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction": return !1;
    } try {
        return h || !!m(p, s(e));
    }
    catch (e) {
        return !0;
    } }; v.sham = !0, e.exports = !l || i((function () { var e; return d(d.call) || !d(Object) || !d((function () { e = !0; })) || e; })) ? v : d; }, 4705: (e, t, r) => { var n = r(7293), i = r(614), a = /#|\.prototype\./, o = function (e, t) { var r = s[u(e)]; return r == f || r != c && (i(t) ? n(t) : !!t); }, u = o.normalize = function (e) { return String(e).replace(a, ".").toLowerCase(); }, s = o.data = {}, c = o.NATIVE = "N", f = o.POLYFILL = "P"; e.exports = o; }, 8554: e => { e.exports = function (e) { return null == e; }; }, 111: (e, t, r) => { var n = r(614), i = r(4154), a = i.all; e.exports = i.IS_HTMLDDA ? function (e) { return "object" == typeof e ? null !== e : n(e) || e === a; } : function (e) { return "object" == typeof e ? null !== e : n(e); }; }, 1913: e => { e.exports = !1; }, 7850: (e, t, r) => { var n = r(111), i = r(4326), a = r(5112)("match"); e.exports = function (e) { var t; return n(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e)); }; }, 2190: (e, t, r) => { var n = r(5005), i = r(614), a = r(7976), o = r(3307), u = Object; e.exports = o ? function (e) { return "symbol" == typeof e; } : function (e) { var t = n("Symbol"); return i(t) && a(t.prototype, u(e)); }; }, 408: (e, t, r) => { var n = r(9974), i = r(6916), a = r(9670), o = r(6330), u = r(7659), s = r(6244), c = r(7976), f = r(4121), l = r(1246), p = r(9212), m = TypeError, h = function (e, t) { this.stopped = e, this.result = t; }, d = h.prototype; e.exports = function (e, t, r) { var v, y, g, x, b, w, N, D = r && r.that, E = !(!r || !r.AS_ENTRIES), A = !(!r || !r.IS_RECORD), S = !(!r || !r.IS_ITERATOR), C = !(!r || !r.INTERRUPTED), M = n(t, D), F = function (e) { return v && p(v, "normal", e), new h(!0, e); }, O = function (e) { return E ? (a(e), C ? M(e[0], e[1], F) : M(e[0], e[1])) : C ? M(e, F) : M(e); }; if (A)
        v = e.iterator;
    else if (S)
        v = e;
    else {
        if (!(y = l(e)))
            throw m(o(e) + " is not iterable");
        if (u(y)) {
            for (g = 0, x = s(e); x > g; g++)
                if ((b = O(e[g])) && c(d, b))
                    return b;
            return new h(!1);
        }
        v = f(e, y);
    } for (w = A ? e.next : v.next; !(N = i(w, v)).done;) {
        try {
            b = O(N.value);
        }
        catch (e) {
            p(v, "throw", e);
        }
        if ("object" == typeof b && b && c(d, b))
            return b;
    } return new h(!1); }; }, 9212: (e, t, r) => { var n = r(6916), i = r(9670), a = r(8173); e.exports = function (e, t, r) { var o, u; i(e); try {
        if (!(o = a(e, "return"))) {
            if ("throw" === t)
                throw r;
            return r;
        }
        o = n(o, e);
    }
    catch (e) {
        u = !0, o = e;
    } if ("throw" === t)
        throw r; if (u)
        throw o; return i(o), r; }; }, 3061: (e, t, r) => {
        "use strict";
        var n = r(3383).IteratorPrototype, i = r(30), a = r(9114), o = r(8003), u = r(7497), s = function () { return this; };
        e.exports = function (e, t, r, c) { var f = t + " Iterator"; return e.prototype = i(n, { next: a(+!c, r) }), o(e, f, !1, !0), u[f] = s, e; };
    }, 1656: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(6916), a = r(1913), o = r(6530), u = r(614), s = r(3061), c = r(9518), f = r(7674), l = r(8003), p = r(8880), m = r(8052), h = r(5112), d = r(7497), v = r(3383), y = o.PROPER, g = o.CONFIGURABLE, x = v.IteratorPrototype, b = v.BUGGY_SAFARI_ITERATORS, w = h("iterator"), N = "keys", D = "values", E = "entries", A = function () { return this; };
        e.exports = function (e, t, r, o, h, v, S) { s(r, t, o); var C, M, F, O = function (e) { if (e === h && I)
            return I; if (!b && e in _)
            return _[e]; switch (e) {
            case N:
            case D:
            case E: return function () { return new r(this, e); };
        } return function () { return new r(this); }; }, T = t + " Iterator", B = !1, _ = e.prototype, k = _[w] || _["@@iterator"] || h && _[h], I = !b && k || O(h), R = "Array" == t && _.entries || k; if (R && (C = c(R.call(new e))) !== Object.prototype && C.next && (a || c(C) === x || (f ? f(C, x) : u(C[w]) || m(C, w, A)), l(C, T, !0, !0), a && (d[T] = A)), y && h == D && k && k.name !== D && (!a && g ? p(_, "name", D) : (B = !0, I = function () { return i(k, this); })), h)
            if (M = { values: O(D), keys: v ? I : O(N), entries: O(E) }, S)
                for (F in M)
                    (b || B || !(F in _)) && m(_, F, M[F]);
            else
                n({ target: t, proto: !0, forced: b || B }, M); return a && !S || _[w] === I || m(_, w, I, { name: h }), d[t] = I, M; };
    }, 3383: (e, t, r) => {
        "use strict";
        var n, i, a, o = r(7293), u = r(614), s = r(111), c = r(30), f = r(9518), l = r(8052), p = r(5112), m = r(1913), h = p("iterator"), d = !1;
        [].keys && ("next" in (a = [].keys()) ? (i = f(f(a))) !== Object.prototype && (n = i) : d = !0), !s(n) || o((function () { var e = {}; return n[h].call(e) !== e; })) ? n = {} : m && (n = c(n)), u(n[h]) || l(n, h, (function () { return this; })), e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d };
    }, 7497: e => { e.exports = {}; }, 6244: (e, t, r) => { var n = r(7466); e.exports = function (e) { return n(e.length); }; }, 6339: (e, t, r) => { var n = r(7293), i = r(614), a = r(2597), o = r(9781), u = r(6530).CONFIGURABLE, s = r(2788), c = r(9909), f = c.enforce, l = c.get, p = Object.defineProperty, m = o && !n((function () { return 8 !== p((function () { }), "length", { value: 8 }).length; })), h = String(String).split("String"), d = e.exports = function (e, t, r) { "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!a(e, "name") || u && e.name !== t) && (o ? p(e, "name", { value: t, configurable: !0 }) : e.name = t), m && r && a(r, "arity") && e.length !== r.arity && p(e, "length", { value: r.arity }); try {
        r && a(r, "constructor") && r.constructor ? o && p(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
    }
    catch (e) { } var n = f(e); return a(n, "source") || (n.source = h.join("string" == typeof t ? t : "")), e; }; Function.prototype.toString = d((function () { return i(this) && l(this).source || s(this); }), "toString"); }, 6736: e => { var t = Math.expm1, r = Math.exp; e.exports = !t || t(10) > 22025.465794806718 || t(10) < 22025.465794806718 || -2e-17 != t(-2e-17) ? function (e) { var t = +e; return 0 == t ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : r(t) - 1; } : t; }, 403: e => { var t = Math.log, r = Math.LOG10E; e.exports = Math.log10 || function (e) { return t(e) * r; }; }, 6513: e => { var t = Math.log; e.exports = Math.log1p || function (e) { var r = +e; return r > -1e-8 && r < 1e-8 ? r - r * r / 2 : t(1 + r); }; }, 4310: e => { e.exports = Math.sign || function (e) { var t = +e; return 0 == t || t != t ? t : t < 0 ? -1 : 1; }; }, 4758: e => { var t = Math.ceil, r = Math.floor; e.exports = Math.trunc || function (e) { var n = +e; return (n > 0 ? r : t)(n); }; }, 5948: (e, t, r) => { var n, i, a, o, u, s, c, f, l = r(7854), p = r(9974), m = r(1236).f, h = r(261).set, d = r(6833), v = r(1528), y = r(1036), g = r(5268), x = l.MutationObserver || l.WebKitMutationObserver, b = l.document, w = l.process, N = l.Promise, D = m(l, "queueMicrotask"), E = D && D.value; E || (n = function () { var e, t; for (g && (e = w.domain) && e.exit(); i;) {
        t = i.fn, i = i.next;
        try {
            t();
        }
        catch (e) {
            throw i ? o() : a = void 0, e;
        }
    } a = void 0, e && e.enter(); }, d || g || y || !x || !b ? !v && N && N.resolve ? ((c = N.resolve(void 0)).constructor = N, f = p(c.then, c), o = function () { f(n); }) : g ? o = function () { w.nextTick(n); } : (h = p(h, l), o = function () { h(n); }) : (u = !0, s = b.createTextNode(""), new x(n).observe(s, { characterData: !0 }), o = function () { s.data = u = !u; })), e.exports = E || function (e) { var t = { fn: e, next: void 0 }; a && (a.next = t), i || (i = t, o()), a = t; }; }, 8523: (e, t, r) => {
        "use strict";
        var n = r(9662), i = TypeError, a = function (e) { var t, r; this.promise = new e((function (e, n) { if (void 0 !== t || void 0 !== r)
            throw i("Bad Promise constructor"); t = e, r = n; })), this.resolve = n(t), this.reject = n(r); };
        e.exports.f = function (e) { return new a(e); };
    }, 3929: (e, t, r) => { var n = r(7850), i = TypeError; e.exports = function (e) { if (n(e))
        throw i("The method doesn't accept regular expressions"); return e; }; }, 2814: (e, t, r) => { var n = r(7854), i = r(7293), a = r(1702), o = r(1340), u = r(3111).trim, s = r(1361), c = a("".charAt), f = n.parseFloat, l = n.Symbol, p = l && l.iterator, m = 1 / f(s + "-0") != -1 / 0 || p && !i((function () { f(Object(p)); })); e.exports = m ? function (e) { var t = u(o(e)), r = f(t); return 0 === r && "-" == c(t, 0) ? -0 : r; } : f; }, 3009: (e, t, r) => { var n = r(7854), i = r(7293), a = r(1702), o = r(1340), u = r(3111).trim, s = r(1361), c = n.parseInt, f = n.Symbol, l = f && f.iterator, p = /^[+-]?0x/i, m = a(p.exec), h = 8 !== c(s + "08") || 22 !== c(s + "0x16") || l && !i((function () { c(Object(l)); })); e.exports = h ? function (e, t) { var r = u(o(e)); return c(r, t >>> 0 || (m(p, r) ? 16 : 10)); } : c; }, 30: (e, t, r) => { var n, i = r(9670), a = r(6048), o = r(748), u = r(3501), s = r(490), c = r(317), f = r(6200)("IE_PROTO"), l = function () { }, p = function (e) { return "<script>" + e + "<\/script>"; }, m = function (e) { e.write(p("")), e.close(); var t = e.parentWindow.Object; return e = null, t; }, h = function () { try {
        n = new ActiveXObject("htmlfile");
    }
    catch (e) { } var e, t; h = "undefined" != typeof document ? document.domain && n ? m(n) : ((t = c("iframe")).style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F) : m(n); for (var r = o.length; r--;)
        delete h.prototype[o[r]]; return h(); }; u[f] = !0, e.exports = Object.create || function (e, t) { var r; return null !== e ? (l.prototype = i(e), r = new l, l.prototype = null, r[f] = e) : r = h(), void 0 === t ? r : a.f(r, t); }; }, 6048: (e, t, r) => { var n = r(9781), i = r(3353), a = r(3070), o = r(9670), u = r(5656), s = r(1956); t.f = n && !i ? Object.defineProperties : function (e, t) { o(e); for (var r, n = u(t), i = s(t), c = i.length, f = 0; c > f;)
        a.f(e, r = i[f++], n[r]); return e; }; }, 3070: (e, t, r) => { var n = r(9781), i = r(4664), a = r(3353), o = r(9670), u = r(4948), s = TypeError, c = Object.defineProperty, f = Object.getOwnPropertyDescriptor; t.f = n ? a ? function (e, t, r) { if (o(e), t = u(t), o(r), "function" == typeof e && "prototype" === t && "value" in r && "writable" in r && !r.writable) {
        var n = f(e, t);
        n && n.writable && (e[t] = r.value, r = { configurable: "configurable" in r ? r.configurable : n.configurable, enumerable: "enumerable" in r ? r.enumerable : n.enumerable, writable: !1 });
    } return c(e, t, r); } : c : function (e, t, r) { if (o(e), t = u(t), o(r), i)
        try {
            return c(e, t, r);
        }
        catch (e) { } if ("get" in r || "set" in r)
        throw s("Accessors not supported"); return "value" in r && (e[t] = r.value), e; }; }, 1236: (e, t, r) => { var n = r(9781), i = r(6916), a = r(5296), o = r(9114), u = r(5656), s = r(4948), c = r(2597), f = r(4664), l = Object.getOwnPropertyDescriptor; t.f = n ? l : function (e, t) { if (e = u(e), t = s(t), f)
        try {
            return l(e, t);
        }
        catch (e) { } if (c(e, t))
        return o(!i(a.f, e, t), e[t]); }; }, 1156: (e, t, r) => { var n = r(4326), i = r(5656), a = r(8006).f, o = r(1589), u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []; e.exports.f = function (e) { return u && "Window" == n(e) ? function (e) { try {
        return a(e);
    }
    catch (e) {
        return o(u);
    } }(e) : a(i(e)); }; }, 8006: (e, t, r) => { var n = r(6324), i = r(748).concat("length", "prototype"); t.f = Object.getOwnPropertyNames || function (e) { return n(e, i); }; }, 5181: (e, t) => { t.f = Object.getOwnPropertySymbols; }, 9518: (e, t, r) => { var n = r(2597), i = r(614), a = r(7908), o = r(6200), u = r(8544), s = o("IE_PROTO"), c = Object, f = c.prototype; e.exports = u ? c.getPrototypeOf : function (e) { var t = a(e); if (n(t, s))
        return t[s]; var r = t.constructor; return i(r) && t instanceof r ? r.prototype : t instanceof c ? f : null; }; }, 2050: (e, t, r) => { var n = r(7293), i = r(111), a = r(4326), o = r(7556), u = Object.isExtensible, s = n((function () { u(1); })); e.exports = s || o ? function (e) { return !!i(e) && (!o || "ArrayBuffer" != a(e)) && (!u || u(e)); } : u; }, 7976: (e, t, r) => { var n = r(1702); e.exports = n({}.isPrototypeOf); }, 6324: (e, t, r) => { var n = r(1702), i = r(2597), a = r(5656), o = r(1318).indexOf, u = r(3501), s = n([].push); e.exports = function (e, t) { var r, n = a(e), c = 0, f = []; for (r in n)
        !i(u, r) && i(n, r) && s(f, r); for (; t.length > c;)
        i(n, r = t[c++]) && (~o(f, r) || s(f, r)); return f; }; }, 1956: (e, t, r) => { var n = r(6324), i = r(748); e.exports = Object.keys || function (e) { return n(e, i); }; }, 5296: (e, t) => {
        "use strict";
        var r = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, i = n && !r.call({ 1: 2 }, 1);
        t.f = i ? function (e) { var t = n(this, e); return !!t && t.enumerable; } : r;
    }, 7674: (e, t, r) => { var n = r(1702), i = r(9670), a = r(6077); e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () { var e, t = !1, r = {}; try {
        (e = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), t = r instanceof Array;
    }
    catch (e) { } return function (r, n) { return i(r), a(n), t ? e(r, n) : r.__proto__ = n, r; }; }() : void 0); }, 288: (e, t, r) => {
        "use strict";
        var n = r(1694), i = r(648);
        e.exports = n ? {}.toString : function () { return "[object " + i(this) + "]"; };
    }, 2140: (e, t, r) => { var n = r(6916), i = r(614), a = r(111), o = TypeError; e.exports = function (e, t) { var r, u; if ("string" === t && i(r = e.toString) && !a(u = n(r, e)))
        return u; if (i(r = e.valueOf) && !a(u = n(r, e)))
        return u; if ("string" !== t && i(r = e.toString) && !a(u = n(r, e)))
        return u; throw o("Can't convert object to primitive value"); }; }, 3887: (e, t, r) => { var n = r(5005), i = r(1702), a = r(8006), o = r(5181), u = r(9670), s = i([].concat); e.exports = n("Reflect", "ownKeys") || function (e) { var t = a.f(u(e)), r = o.f; return r ? s(t, r(e)) : t; }; }, 857: (e, t, r) => { var n = r(7854); e.exports = n; }, 2534: e => { e.exports = function (e) { try {
        return { error: !1, value: e() };
    }
    catch (e) {
        return { error: !0, value: e };
    } }; }, 3702: (e, t, r) => { var n = r(7854), i = r(2492), a = r(614), o = r(4705), u = r(2788), s = r(5112), c = r(7871), f = r(3823), l = r(1913), p = r(7392), m = i && i.prototype, h = s("species"), d = !1, v = a(n.PromiseRejectionEvent), y = o("Promise", (function () { var e = u(i), t = e !== String(i); if (!t && 66 === p)
        return !0; if (l && (!m.catch || !m.finally))
        return !0; if (!p || p < 51 || !/native code/.test(e)) {
        var r = new i((function (e) { e(1); })), n = function (e) { e((function () { }), (function () { })); };
        if ((r.constructor = {})[h] = n, !(d = r.then((function () { })) instanceof n))
            return !0;
    } return !t && (c || f) && !v; })); e.exports = { CONSTRUCTOR: y, REJECTION_EVENT: v, SUBCLASSING: d }; }, 2492: (e, t, r) => { var n = r(7854); e.exports = n.Promise; }, 9478: (e, t, r) => { var n = r(9670), i = r(111), a = r(8523); e.exports = function (e, t) { if (n(e), i(t) && t.constructor === e)
        return t; var r = a.f(e); return (0, r.resolve)(t), r.promise; }; }, 612: (e, t, r) => { var n = r(2492), i = r(7072), a = r(3702).CONSTRUCTOR; e.exports = a || !i((function (e) { n.all(e).then(void 0, (function () { })); })); }, 2626: (e, t, r) => { var n = r(3070).f; e.exports = function (e, t, r) { r in e || n(e, r, { configurable: !0, get: function () { return t[r]; }, set: function (e) { t[r] = e; } }); }; }, 8572: e => { var t = function () { this.head = null, this.tail = null; }; t.prototype = { add: function (e) { var t = { item: e, next: null }; this.head ? this.tail.next = t : this.head = t, this.tail = t; }, get: function () { var e = this.head; if (e)
            return this.head = e.next, this.tail === e && (this.tail = null), e.item; } }, e.exports = t; }, 7651: (e, t, r) => { var n = r(6916), i = r(9670), a = r(614), o = r(4326), u = r(2261), s = TypeError; e.exports = function (e, t) { var r = e.exec; if (a(r)) {
        var c = n(r, e, t);
        return null !== c && i(c), c;
    } if ("RegExp" === o(e))
        return n(u, e, t); throw s("RegExp#exec called on incompatible receiver"); }; }, 2261: (e, t, r) => {
        "use strict";
        var n, i, a = r(6916), o = r(1702), u = r(1340), s = r(7066), c = r(2999), f = r(2309), l = r(30), p = r(9909).get, m = r(9441), h = r(7168), d = f("native-string-replace", String.prototype.replace), v = RegExp.prototype.exec, y = v, g = o("".charAt), x = o("".indexOf), b = o("".replace), w = o("".slice), N = (i = /b*/g, a(v, n = /a/, "a"), a(v, i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex), D = c.BROKEN_CARET, E = void 0 !== /()??/.exec("")[1];
        (N || E || D || m || h) && (y = function (e) { var t, r, n, i, o, c, f, m = this, h = p(m), A = u(e), S = h.raw; if (S)
            return S.lastIndex = m.lastIndex, t = a(y, S, A), m.lastIndex = S.lastIndex, t; var C = h.groups, M = D && m.sticky, F = a(s, m), O = m.source, T = 0, B = A; if (M && (F = b(F, "y", ""), -1 === x(F, "g") && (F += "g"), B = w(A, m.lastIndex), m.lastIndex > 0 && (!m.multiline || m.multiline && "\n" !== g(A, m.lastIndex - 1)) && (O = "(?: " + O + ")", B = " " + B, T++), r = new RegExp("^(?:" + O + ")", F)), E && (r = new RegExp("^" + O + "$(?!\\s)", F)), N && (n = m.lastIndex), i = a(v, M ? r : m, B), M ? i ? (i.input = w(i.input, T), i[0] = w(i[0], T), i.index = m.lastIndex, m.lastIndex += i[0].length) : m.lastIndex = 0 : N && i && (m.lastIndex = m.global ? i.index + i[0].length : n), E && i && i.length > 1 && a(d, i[0], r, (function () { for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (i[o] = void 0); })), i && C)
            for (i.groups = c = l(null), o = 0; o < C.length; o++)
                c[(f = C[o])[0]] = i[f[1]]; return i; }), e.exports = y;
    }, 7066: (e, t, r) => {
        "use strict";
        var n = r(9670);
        e.exports = function () { var e = n(this), t = ""; return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t; };
    }, 4706: (e, t, r) => { var n = r(6916), i = r(2597), a = r(7976), o = r(7066), u = RegExp.prototype; e.exports = function (e) { var t = e.flags; return void 0 !== t || "flags" in u || i(e, "flags") || !a(u, e) ? t : n(o, e); }; }, 2999: (e, t, r) => { var n = r(7293), i = r(7854).RegExp, a = n((function () { var e = i("a", "y"); return e.lastIndex = 2, null != e.exec("abcd"); })), o = a || n((function () { return !i("a", "y").sticky; })), u = a || n((function () { var e = i("^r", "gy"); return e.lastIndex = 2, null != e.exec("str"); })); e.exports = { BROKEN_CARET: u, MISSED_STICKY: o, UNSUPPORTED_Y: a }; }, 9441: (e, t, r) => { var n = r(7293), i = r(7854).RegExp; e.exports = n((function () { var e = i(".", "s"); return !(e.dotAll && e.exec("\n") && "s" === e.flags); })); }, 7168: (e, t, r) => { var n = r(7293), i = r(7854).RegExp; e.exports = n((function () { var e = i("(?<a>b)", "g"); return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c"); })); }, 4488: (e, t, r) => { var n = r(8554), i = TypeError; e.exports = function (e) { if (n(e))
        throw i("Can't call method on " + e); return e; }; }, 6340: (e, t, r) => {
        "use strict";
        var n = r(5005), i = r(3070), a = r(5112), o = r(9781), u = a("species");
        e.exports = function (e) { var t = n(e), r = i.f; o && t && !t[u] && r(t, u, { configurable: !0, get: function () { return this; } }); };
    }, 8003: (e, t, r) => { var n = r(3070).f, i = r(2597), a = r(5112)("toStringTag"); e.exports = function (e, t, r) { e && !r && (e = e.prototype), e && !i(e, a) && n(e, a, { configurable: !0, value: t }); }; }, 6200: (e, t, r) => { var n = r(2309), i = r(9711), a = n("keys"); e.exports = function (e) { return a[e] || (a[e] = i(e)); }; }, 5465: (e, t, r) => { var n = r(7854), i = r(3072), a = "__core-js_shared__", o = n[a] || i(a, {}); e.exports = o; }, 2309: (e, t, r) => { var n = r(1913), i = r(5465); (e.exports = function (e, t) { return i[e] || (i[e] = void 0 !== t ? t : {}); })("versions", []).push({ version: "3.26.1", mode: n ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" }); }, 6707: (e, t, r) => { var n = r(9670), i = r(9483), a = r(8554), o = r(5112)("species"); e.exports = function (e, t) { var r, u = n(e).constructor; return void 0 === u || a(r = n(u)[o]) ? t : i(r); }; }, 3429: (e, t, r) => { var n = r(7293); e.exports = function (e) { return n((function () { var t = ""[e]('"'); return t !== t.toLowerCase() || t.split('"').length > 3; })); }; }, 8710: (e, t, r) => { var n = r(1702), i = r(9303), a = r(1340), o = r(4488), u = n("".charAt), s = n("".charCodeAt), c = n("".slice), f = function (e) { return function (t, r) { var n, f, l = a(o(t)), p = i(r), m = l.length; return p < 0 || p >= m ? e ? "" : void 0 : (n = s(l, p)) < 55296 || n > 56319 || p + 1 === m || (f = s(l, p + 1)) < 56320 || f > 57343 ? e ? u(l, p) : n : e ? c(l, p, p + 2) : f - 56320 + (n - 55296 << 10) + 65536; }; }; e.exports = { codeAt: f(!1), charAt: f(!0) }; }, 8415: (e, t, r) => {
        "use strict";
        var n = r(9303), i = r(1340), a = r(4488), o = RangeError;
        e.exports = function (e) { var t = i(a(this)), r = "", u = n(e); if (u < 0 || u == 1 / 0)
            throw o("Wrong number of repetitions"); for (; u > 0; (u >>>= 1) && (t += t))
            1 & u && (r += t); return r; };
    }, 6091: (e, t, r) => { var n = r(6530).PROPER, i = r(7293), a = r(1361); e.exports = function (e) { return i((function () { return !!a[e]() || "​᠎" !== "​᠎"[e]() || n && a[e].name !== e; })); }; }, 3111: (e, t, r) => { var n = r(1702), i = r(4488), a = r(1340), o = r(1361), u = n("".replace), s = "[" + o + "]", c = RegExp("^" + s + s + "*"), f = RegExp(s + s + "*$"), l = function (e) { return function (t) { var r = a(i(t)); return 1 & e && (r = u(r, c, "")), 2 & e && (r = u(r, f, "")), r; }; }; e.exports = { start: l(1), end: l(2), trim: l(3) }; }, 6293: (e, t, r) => { var n = r(7392), i = r(7293); e.exports = !!Object.getOwnPropertySymbols && !i((function () { var e = Symbol(); return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41; })); }, 6532: (e, t, r) => { var n = r(6916), i = r(5005), a = r(5112), o = r(8052); e.exports = function () { var e = i("Symbol"), t = e && e.prototype, r = t && t.valueOf, u = a("toPrimitive"); t && !t[u] && o(t, u, (function (e) { return n(r, this); }), { arity: 1 }); }; }, 2015: (e, t, r) => { var n = r(6293); e.exports = n && !!Symbol.for && !!Symbol.keyFor; }, 261: (e, t, r) => { var n, i, a, o, u = r(7854), s = r(2104), c = r(9974), f = r(614), l = r(2597), p = r(7293), m = r(490), h = r(206), d = r(317), v = r(8053), y = r(6833), g = r(5268), x = u.setImmediate, b = u.clearImmediate, w = u.process, N = u.Dispatch, D = u.Function, E = u.MessageChannel, A = u.String, S = 0, C = {}; try {
        n = u.location;
    }
    catch (e) { } var M = function (e) { if (l(C, e)) {
        var t = C[e];
        delete C[e], t();
    } }, F = function (e) { return function () { M(e); }; }, O = function (e) { M(e.data); }, T = function (e) { u.postMessage(A(e), n.protocol + "//" + n.host); }; x && b || (x = function (e) { v(arguments.length, 1); var t = f(e) ? e : D(e), r = h(arguments, 1); return C[++S] = function () { s(t, void 0, r); }, i(S), S; }, b = function (e) { delete C[e]; }, g ? i = function (e) { w.nextTick(F(e)); } : N && N.now ? i = function (e) { N.now(F(e)); } : E && !y ? (o = (a = new E).port2, a.port1.onmessage = O, i = c(o.postMessage, o)) : u.addEventListener && f(u.postMessage) && !u.importScripts && n && "file:" !== n.protocol && !p(T) ? (i = T, u.addEventListener("message", O, !1)) : i = "onreadystatechange" in d("script") ? function (e) { m.appendChild(d("script")).onreadystatechange = function () { m.removeChild(this), M(e); }; } : function (e) { setTimeout(F(e), 0); }), e.exports = { set: x, clear: b }; }, 863: (e, t, r) => { var n = r(1702); e.exports = n(1..valueOf); }, 1400: (e, t, r) => { var n = r(9303), i = Math.max, a = Math.min; e.exports = function (e, t) { var r = n(e); return r < 0 ? i(r + t, 0) : a(r, t); }; }, 5656: (e, t, r) => { var n = r(8361), i = r(4488); e.exports = function (e) { return n(i(e)); }; }, 9303: (e, t, r) => { var n = r(4758); e.exports = function (e) { var t = +e; return t != t || 0 === t ? 0 : n(t); }; }, 7466: (e, t, r) => { var n = r(9303), i = Math.min; e.exports = function (e) { return e > 0 ? i(n(e), 9007199254740991) : 0; }; }, 7908: (e, t, r) => { var n = r(4488), i = Object; e.exports = function (e) { return i(n(e)); }; }, 7593: (e, t, r) => { var n = r(6916), i = r(111), a = r(2190), o = r(8173), u = r(2140), s = r(5112), c = TypeError, f = s("toPrimitive"); e.exports = function (e, t) { if (!i(e) || a(e))
        return e; var r, s = o(e, f); if (s) {
        if (void 0 === t && (t = "default"), r = n(s, e, t), !i(r) || a(r))
            return r;
        throw c("Can't convert object to primitive value");
    } return void 0 === t && (t = "number"), u(e, t); }; }, 4948: (e, t, r) => { var n = r(7593), i = r(2190); e.exports = function (e) { var t = n(e, "string"); return i(t) ? t : t + ""; }; }, 1694: (e, t, r) => { var n = {}; n[r(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(n); }, 1340: (e, t, r) => { var n = r(648), i = String; e.exports = function (e) { if ("Symbol" === n(e))
        throw TypeError("Cannot convert a Symbol value to a string"); return i(e); }; }, 6330: e => { var t = String; e.exports = function (e) { try {
        return t(e);
    }
    catch (e) {
        return "Object";
    } }; }, 9711: (e, t, r) => { var n = r(1702), i = 0, a = Math.random(), o = n(1..toString); e.exports = function (e) { return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++i + a, 36); }; }, 3307: (e, t, r) => { var n = r(6293); e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator; }, 3353: (e, t, r) => { var n = r(9781), i = r(7293); e.exports = n && i((function () { return 42 != Object.defineProperty((function () { }), "prototype", { value: 42, writable: !1 }).prototype; })); }, 8053: e => { var t = TypeError; e.exports = function (e, r) { if (e < r)
        throw t("Not enough arguments"); return e; }; }, 4811: (e, t, r) => { var n = r(7854), i = r(614), a = n.WeakMap; e.exports = i(a) && /native code/.test(String(a)); }, 6800: (e, t, r) => { var n = r(857), i = r(2597), a = r(6061), o = r(3070).f; e.exports = function (e) { var t = n.Symbol || (n.Symbol = {}); i(t, e) || o(t, e, { value: a.f(e) }); }; }, 6061: (e, t, r) => { var n = r(5112); t.f = n; }, 5112: (e, t, r) => { var n = r(7854), i = r(2309), a = r(2597), o = r(9711), u = r(6293), s = r(3307), c = i("wks"), f = n.Symbol, l = f && f.for, p = s ? f : f && f.withoutSetter || o; e.exports = function (e) { if (!a(c, e) || !u && "string" != typeof c[e]) {
        var t = "Symbol." + e;
        u && a(f, e) ? c[e] = f[e] : c[e] = s && l ? l(t) : p(t);
    } return c[e]; }; }, 1361: e => { e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"; }, 2222: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(7293), a = r(3157), o = r(111), u = r(7908), s = r(6244), c = r(7207), f = r(6135), l = r(5417), p = r(1194), m = r(5112), h = r(7392), d = m("isConcatSpreadable"), v = h >= 51 || !i((function () { var e = []; return e[d] = !1, e.concat()[0] !== e; })), y = p("concat"), g = function (e) { if (!o(e))
            return !1; var t = e[d]; return void 0 !== t ? !!t : a(e); };
        n({ target: "Array", proto: !0, arity: 1, forced: !v || !y }, { concat: function (e) { var t, r, n, i, a, o = u(this), p = l(o, 0), m = 0; for (t = -1, n = arguments.length; t < n; t++)
                if (g(a = -1 === t ? o : arguments[t]))
                    for (i = s(a), c(m + i), r = 0; r < i; r++, m++)
                        r in a && f(p, m, a[r]);
                else
                    c(m + 1), f(p, m++, a); return p.length = m, p; } });
    }, 6541: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(2092).every;
        n({ target: "Array", proto: !0, forced: !r(9341)("every") }, { every: function (e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0); } });
    }, 3290: (e, t, r) => { var n = r(2109), i = r(1285), a = r(1223); n({ target: "Array", proto: !0 }, { fill: i }), a("fill"); }, 7327: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(2092).filter;
        n({ target: "Array", proto: !0, forced: !r(1194)("filter") }, { filter: function (e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0); } });
    }, 9826: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(2092).find, a = r(1223), o = "find", u = !0;
        o in [] && Array(1).find((function () { u = !1; })), n({ target: "Array", proto: !0, forced: u }, { find: function (e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0); } }), a(o);
    }, 9554: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(8533);
        n({ target: "Array", proto: !0, forced: [].forEach != i }, { forEach: i });
    }, 1038: (e, t, r) => { var n = r(2109), i = r(8457); n({ target: "Array", stat: !0, forced: !r(7072)((function (e) { Array.from(e); })) }, { from: i }); }, 6699: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1318).includes, a = r(7293), o = r(1223);
        n({ target: "Array", proto: !0, forced: a((function () { return !Array(1).includes(); })) }, { includes: function (e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0); } }), o("includes");
    }, 2772: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1470), a = r(1318).indexOf, o = r(9341), u = i([].indexOf), s = !!u && 1 / u([1], 1, -0) < 0, c = o("indexOf");
        n({ target: "Array", proto: !0, forced: s || !c }, { indexOf: function (e) { var t = arguments.length > 1 ? arguments[1] : void 0; return s ? u(this, e, t) || 0 : a(this, e, t); } });
    }, 9753: (e, t, r) => { r(2109)({ target: "Array", stat: !0 }, { isArray: r(3157) }); }, 6992: (e, t, r) => {
        "use strict";
        var n = r(5656), i = r(1223), a = r(7497), o = r(9909), u = r(3070).f, s = r(1656), c = r(6178), f = r(1913), l = r(9781), p = "Array Iterator", m = o.set, h = o.getterFor(p);
        e.exports = s(Array, "Array", (function (e, t) { m(this, { type: p, target: n(e), index: 0, kind: t }); }), (function () { var e = h(this), t = e.target, r = e.kind, n = e.index++; return !t || n >= t.length ? (e.target = void 0, c(void 0, !0)) : c("keys" == r ? n : "values" == r ? t[n] : [n, t[n]], !1); }), "values");
        var d = a.Arguments = a.Array;
        if (i("keys"), i("values"), i("entries"), !f && l && "values" !== d.name)
            try {
                u(d, "name", { value: "values" });
            }
            catch (e) { }
    }, 9600: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1702), a = r(8361), o = r(5656), u = r(9341), s = i([].join), c = a != Object, f = u("join", ",");
        n({ target: "Array", proto: !0, forced: c || !f }, { join: function (e) { return s(o(this), void 0 === e ? "," : e); } });
    }, 1249: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(2092).map;
        n({ target: "Array", proto: !0, forced: !r(1194)("map") }, { map: function (e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0); } });
    }, 5827: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(3671).left, a = r(9341), o = r(7392), u = r(5268);
        n({ target: "Array", proto: !0, forced: !a("reduce") || !u && o > 79 && o < 83 }, { reduce: function (e) { var t = arguments.length; return i(this, e, t, t > 1 ? arguments[1] : void 0); } });
    }, 5069: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1702), a = r(3157), o = i([].reverse), u = [1, 2];
        n({ target: "Array", proto: !0, forced: String(u) === String(u.reverse()) }, { reverse: function () { return a(this) && (this.length = this.length), o(this); } });
    }, 7042: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(3157), a = r(4411), o = r(111), u = r(1400), s = r(6244), c = r(5656), f = r(6135), l = r(5112), p = r(1194), m = r(206), h = p("slice"), d = l("species"), v = Array, y = Math.max;
        n({ target: "Array", proto: !0, forced: !h }, { slice: function (e, t) { var r, n, l, p = c(this), h = s(p), g = u(e, h), x = u(void 0 === t ? h : t, h); if (i(p) && (r = p.constructor, (a(r) && (r === v || i(r.prototype)) || o(r) && null === (r = r[d])) && (r = void 0), r === v || void 0 === r))
                return m(p, g, x); for (n = new (void 0 === r ? v : r)(y(x - g, 0)), l = 0; g < x; g++, l++)
                g in p && f(n, l, p[g]); return n.length = l, n; } });
    }, 5212: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(2092).some;
        n({ target: "Array", proto: !0, forced: !r(9341)("some") }, { some: function (e) { return i(this, e, arguments.length > 1 ? arguments[1] : void 0); } });
    }, 2707: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1702), a = r(9662), o = r(7908), u = r(6244), s = r(5117), c = r(1340), f = r(7293), l = r(4362), p = r(9341), m = r(8886), h = r(256), d = r(7392), v = r(8008), y = [], g = i(y.sort), x = i(y.push), b = f((function () { y.sort(void 0); })), w = f((function () { y.sort(null); })), N = p("sort"), D = !f((function () { if (d)
            return d < 70; if (!(m && m > 3)) {
            if (h)
                return !0;
            if (v)
                return v < 603;
            var e, t, r, n, i = "";
            for (e = 65; e < 76; e++) {
                switch (t = String.fromCharCode(e), e) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        r = 3;
                        break;
                    case 68:
                    case 71:
                        r = 4;
                        break;
                    default: r = 2;
                }
                for (n = 0; n < 47; n++)
                    y.push({ k: t + n, v: r });
            }
            for (y.sort((function (e, t) { return t.v - e.v; })), n = 0; n < y.length; n++)
                t = y[n].k.charAt(0), i.charAt(i.length - 1) !== t && (i += t);
            return "DGBEFHACIJK" !== i;
        } }));
        n({ target: "Array", proto: !0, forced: b || !w || !N || !D }, { sort: function (e) { void 0 !== e && a(e); var t = o(this); if (D)
                return void 0 === e ? g(t) : g(t, e); var r, n, i = [], f = u(t); for (n = 0; n < f; n++)
                n in t && x(i, t[n]); for (l(i, function (e) { return function (t, r) { return void 0 === r ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, r) || 0 : c(t) > c(r) ? 1 : -1; }; }(e)), r = u(i), n = 0; n < r;)
                t[n] = i[n++]; for (; n < f;)
                s(t, n++); return t; } });
    }, 561: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(7908), a = r(1400), o = r(9303), u = r(6244), s = r(3658), c = r(7207), f = r(5417), l = r(6135), p = r(5117), m = r(1194)("splice"), h = Math.max, d = Math.min;
        n({ target: "Array", proto: !0, forced: !m }, { splice: function (e, t) { var r, n, m, v, y, g, x = i(this), b = u(x), w = a(e, b), N = arguments.length; for (0 === N ? r = n = 0 : 1 === N ? (r = 0, n = b - w) : (r = N - 2, n = d(h(o(t), 0), b - w)), c(b + r - n), m = f(x, n), v = 0; v < n; v++)
                (y = w + v) in x && l(m, v, x[y]); if (m.length = n, r < n) {
                for (v = w; v < b - n; v++)
                    g = v + r, (y = v + n) in x ? x[g] = x[y] : p(x, g);
                for (v = b; v > b - n + r; v--)
                    p(x, v - 1);
            }
            else if (r > n)
                for (v = b - n; v > w; v--)
                    g = v + r - 1, (y = v + n - 1) in x ? x[g] = x[y] : p(x, g); for (v = 0; v < r; v++)
                x[v + w] = arguments[v + 2]; return s(x, b - n + r), m; } });
    }, 3843: (e, t, r) => { var n = r(2109), i = r(1702), a = Date, o = i(a.prototype.getTime); n({ target: "Date", stat: !0 }, { now: function () { return o(new a); } }); }, 5735: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(7293), a = r(7908), o = r(7593);
        n({ target: "Date", proto: !0, arity: 1, forced: i((function () { return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function () { return 1; } }); })) }, { toJSON: function (e) { var t = a(this), r = o(t, "number"); return "number" != typeof r || isFinite(r) ? t.toISOString() : null; } });
    }, 3710: (e, t, r) => { var n = r(1702), i = r(8052), a = Date.prototype, o = "Invalid Date", u = n(a.toString), s = n(a.getTime); String(new Date(NaN)) != o && i(a, "toString", (function () { var e = s(this); return e == e ? u(this) : o; })); }, 4812: (e, t, r) => { var n = r(2109), i = r(7065); n({ target: "Function", proto: !0, forced: Function.bind !== i }, { bind: i }); }, 8309: (e, t, r) => { var n = r(9781), i = r(6530).EXISTS, a = r(1702), o = r(3070).f, u = Function.prototype, s = a(u.toString), c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, f = a(c.exec); n && !i && o(u, "name", { configurable: !0, get: function () { try {
            return f(c, s(this))[1];
        }
        catch (e) {
            return "";
        } } }); }, 8862: (e, t, r) => { var n = r(2109), i = r(5005), a = r(2104), o = r(6916), u = r(1702), s = r(7293), c = r(3157), f = r(614), l = r(111), p = r(2190), m = r(206), h = r(6293), d = i("JSON", "stringify"), v = u(/./.exec), y = u("".charAt), g = u("".charCodeAt), x = u("".replace), b = u(1..toString), w = /[\uD800-\uDFFF]/g, N = /^[\uD800-\uDBFF]$/, D = /^[\uDC00-\uDFFF]$/, E = !h || s((function () { var e = i("Symbol")(); return "[null]" != d([e]) || "{}" != d({ a: e }) || "{}" != d(Object(e)); })), A = s((function () { return '"\\udf06\\ud834"' !== d("\udf06\ud834") || '"\\udead"' !== d("\udead"); })), S = function (e, t) { var r = m(arguments), n = t; if ((l(t) || void 0 !== e) && !p(e))
        return c(t) || (t = function (e, t) { if (f(n) && (t = o(n, this, e, t)), !p(t))
            return t; }), r[1] = t, a(d, null, r); }, C = function (e, t, r) { var n = y(r, t - 1), i = y(r, t + 1); return v(N, e) && !v(D, i) || v(D, e) && !v(N, n) ? "\\u" + b(g(e, 0), 16) : e; }; d && n({ target: "JSON", stat: !0, arity: 3, forced: E || A }, { stringify: function (e, t, r) { var n = m(arguments), i = a(E ? S : d, null, n); return A && "string" == typeof i ? x(i, w, C) : i; } }); }, 9098: (e, t, r) => {
        "use strict";
        r(7710)("Map", (function (e) { return function () { return e(this, arguments.length ? arguments[0] : void 0); }; }), r(5631));
    }, 1532: (e, t, r) => { r(9098); }, 9752: (e, t, r) => { var n = r(2109), i = r(6513), a = Math.acosh, o = Math.log, u = Math.sqrt, s = Math.LN2; n({ target: "Math", stat: !0, forced: !a || 710 != Math.floor(a(Number.MAX_VALUE)) || a(1 / 0) != 1 / 0 }, { acosh: function (e) { var t = +e; return t < 1 ? NaN : t > 94906265.62425156 ? o(t) + s : i(t - 1 + u(t - 1) * u(t + 1)); } }); }, 2376: (e, t, r) => { var n = r(2109), i = Math.asinh, a = Math.log, o = Math.sqrt; n({ target: "Math", stat: !0, forced: !(i && 1 / i(0) > 0) }, { asinh: function e(t) { var r = +t; return isFinite(r) && 0 != r ? r < 0 ? -e(-r) : a(r + o(r * r + 1)) : r; } }); }, 3181: (e, t, r) => { var n = r(2109), i = Math.atanh, a = Math.log; n({ target: "Math", stat: !0, forced: !(i && 1 / i(-0) < 0) }, { atanh: function (e) { var t = +e; return 0 == t ? t : a((1 + t) / (1 - t)) / 2; } }); }, 3484: (e, t, r) => { var n = r(2109), i = r(4310), a = Math.abs, o = Math.pow; n({ target: "Math", stat: !0 }, { cbrt: function (e) { var t = +e; return i(t) * o(a(t), 1 / 3); } }); }, 8621: (e, t, r) => { var n = r(2109), i = r(6736), a = Math.cosh, o = Math.abs, u = Math.E; n({ target: "Math", stat: !0, forced: !a || a(710) === 1 / 0 }, { cosh: function (e) { var t = i(o(e) - 1) + 1; return (t + 1 / (t * u * u)) * (u / 2); } }); }, 5890: (e, t, r) => { var n = r(2109), i = r(6736); n({ target: "Math", stat: !0, forced: i != Math.expm1 }, { expm1: i }); }, 658: (e, t, r) => { r(2109)({ target: "Math", stat: !0 }, { log10: r(403) }); }, 197: (e, t, r) => { r(2109)({ target: "Math", stat: !0 }, { log1p: r(6513) }); }, 4914: (e, t, r) => { var n = r(2109), i = Math.log, a = Math.LN2; n({ target: "Math", stat: !0 }, { log2: function (e) { return i(e) / a; } }); }, 2420: (e, t, r) => { r(2109)({ target: "Math", stat: !0 }, { sign: r(4310) }); }, 160: (e, t, r) => { var n = r(2109), i = r(7293), a = r(6736), o = Math.abs, u = Math.exp, s = Math.E; n({ target: "Math", stat: !0, forced: i((function () { return -2e-17 != Math.sinh(-2e-17); })) }, { sinh: function (e) { var t = +e; return o(t) < 1 ? (a(t) - a(-t)) / 2 : (u(t - 1) - u(-t - 1)) * (s / 2); } }); }, 970: (e, t, r) => { var n = r(2109), i = r(6736), a = Math.exp; n({ target: "Math", stat: !0 }, { tanh: function (e) { var t = +e, r = i(t), n = i(-t); return r == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (r - n) / (a(t) + a(-t)); } }); }, 9653: (e, t, r) => {
        "use strict";
        var n = r(9781), i = r(7854), a = r(1702), o = r(4705), u = r(8052), s = r(2597), c = r(9587), f = r(7976), l = r(2190), p = r(7593), m = r(7293), h = r(8006).f, d = r(1236).f, v = r(3070).f, y = r(863), g = r(3111).trim, x = "Number", b = i.Number, w = b.prototype, N = i.TypeError, D = a("".slice), E = a("".charCodeAt), A = function (e) { var t = p(e, "number"); return "bigint" == typeof t ? t : S(t); }, S = function (e) { var t, r, n, i, a, o, u, s, c = p(e, "number"); if (l(c))
            throw N("Cannot convert a Symbol value to a number"); if ("string" == typeof c && c.length > 2)
            if (c = g(c), 43 === (t = E(c, 0)) || 45 === t) {
                if (88 === (r = E(c, 2)) || 120 === r)
                    return NaN;
            }
            else if (48 === t) {
                switch (E(c, 1)) {
                    case 66:
                    case 98:
                        n = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        n = 8, i = 55;
                        break;
                    default: return +c;
                }
                for (o = (a = D(c, 2)).length, u = 0; u < o; u++)
                    if ((s = E(a, u)) < 48 || s > i)
                        return NaN;
                return parseInt(a, n);
            } return +c; };
        if (o(x, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
            for (var C, M = function (e) { var t = arguments.length < 1 ? 0 : b(A(e)), r = this; return f(w, r) && m((function () { y(r); })) ? c(Object(t), r, M) : t; }, F = n ? h(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), O = 0; F.length > O; O++)
                s(b, C = F[O]) && !s(M, C) && v(M, C, d(b, C));
            M.prototype = w, w.constructor = M, u(i, x, M, { constructor: !0 });
        }
    }, 3299: (e, t, r) => { r(2109)({ target: "Number", stat: !0, nonConfigurable: !0, nonWritable: !0 }, { EPSILON: Math.pow(2, -52) }); }, 4048: (e, t, r) => { r(2109)({ target: "Number", stat: !0 }, { isNaN: function (e) { return e != e; } }); }, 6977: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1702), a = r(9303), o = r(863), u = r(8415), s = r(7293), c = RangeError, f = String, l = Math.floor, p = i(u), m = i("".slice), h = i(1..toFixed), d = function (e, t, r) { return 0 === t ? r : t % 2 == 1 ? d(e, t - 1, r * e) : d(e * e, t / 2, r); }, v = function (e, t, r) { for (var n = -1, i = r; ++n < 6;)
            i += t * e[n], e[n] = i % 1e7, i = l(i / 1e7); }, y = function (e, t) { for (var r = 6, n = 0; --r >= 0;)
            n += e[r], e[r] = l(n / t), n = n % t * 1e7; }, g = function (e) { for (var t = 6, r = ""; --t >= 0;)
            if ("" !== r || 0 === t || 0 !== e[t]) {
                var n = f(e[t]);
                r = "" === r ? n : r + p("0", 7 - n.length) + n;
            } return r; };
        n({ target: "Number", proto: !0, forced: s((function () { return "0.000" !== h(8e-5, 3) || "1" !== h(.9, 0) || "1.25" !== h(1.255, 2) || "1000000000000000128" !== h(0xde0b6b3a7640080, 0); })) || !s((function () { h({}); })) }, { toFixed: function (e) { var t, r, n, i, u = o(this), s = a(e), l = [0, 0, 0, 0, 0, 0], h = "", x = "0"; if (s < 0 || s > 20)
                throw c("Incorrect fraction digits"); if (u != u)
                return "NaN"; if (u <= -1e21 || u >= 1e21)
                return f(u); if (u < 0 && (h = "-", u = -u), u > 1e-21)
                if (r = (t = function (e) { for (var t = 0, r = e; r >= 4096;)
                    t += 12, r /= 4096; for (; r >= 2;)
                    t += 1, r /= 2; return t; }(u * d(2, 69, 1)) - 69) < 0 ? u * d(2, -t, 1) : u / d(2, t, 1), r *= 4503599627370496, (t = 52 - t) > 0) {
                    for (v(l, 0, r), n = s; n >= 7;)
                        v(l, 1e7, 0), n -= 7;
                    for (v(l, d(10, n, 1), 0), n = t - 1; n >= 23;)
                        y(l, 1 << 23), n -= 23;
                    y(l, 1 << n), v(l, 1, 1), y(l, 2), x = g(l);
                }
                else
                    v(l, 0, r), v(l, 1 << -t, 0), x = g(l) + p("0", s); return s > 0 ? h + ((i = x.length) <= s ? "0." + p("0", s - i) + x : m(x, 0, i - s) + "." + m(x, i - s)) : h + x; } });
    }, 5147: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1702), a = r(7293), o = r(863), u = i(1..toPrecision);
        n({ target: "Number", proto: !0, forced: a((function () { return "1" !== u(1, void 0); })) || !a((function () { u({}); })) }, { toPrecision: function (e) { return void 0 === e ? u(o(this)) : u(o(this), e); } });
    }, 8011: (e, t, r) => { r(2109)({ target: "Object", stat: !0, sham: !r(9781) }, { create: r(30) }); }, 3321: (e, t, r) => { var n = r(2109), i = r(9781), a = r(6048).f; n({ target: "Object", stat: !0, forced: Object.defineProperties !== a, sham: !i }, { defineProperties: a }); }, 9070: (e, t, r) => { var n = r(2109), i = r(9781), a = r(3070).f; n({ target: "Object", stat: !0, forced: Object.defineProperty !== a, sham: !i }, { defineProperty: a }); }, 5003: (e, t, r) => { var n = r(2109), i = r(7293), a = r(5656), o = r(1236).f, u = r(9781), s = i((function () { o(1); })); n({ target: "Object", stat: !0, forced: !u || s, sham: !u }, { getOwnPropertyDescriptor: function (e, t) { return o(a(e), t); } }); }, 9337: (e, t, r) => { var n = r(2109), i = r(9781), a = r(3887), o = r(5656), u = r(1236), s = r(6135); n({ target: "Object", stat: !0, sham: !i }, { getOwnPropertyDescriptors: function (e) { for (var t, r, n = o(e), i = u.f, c = a(n), f = {}, l = 0; c.length > l;)
            void 0 !== (r = i(n, t = c[l++])) && s(f, t, r); return f; } }); }, 9660: (e, t, r) => { var n = r(2109), i = r(6293), a = r(7293), o = r(5181), u = r(7908); n({ target: "Object", stat: !0, forced: !i || a((function () { o.f(1); })) }, { getOwnPropertySymbols: function (e) { var t = o.f; return t ? t(u(e)) : []; } }); }, 489: (e, t, r) => { var n = r(2109), i = r(7293), a = r(7908), o = r(9518), u = r(8544); n({ target: "Object", stat: !0, forced: i((function () { o(1); })), sham: !u }, { getPrototypeOf: function (e) { return o(a(e)); } }); }, 7941: (e, t, r) => { var n = r(2109), i = r(7908), a = r(1956); n({ target: "Object", stat: !0, forced: r(7293)((function () { a(1); })) }, { keys: function (e) { return a(i(e)); } }); }, 1539: (e, t, r) => { var n = r(1694), i = r(8052), a = r(288); n || i(Object.prototype, "toString", a, { unsafe: !0 }); }, 4678: (e, t, r) => { var n = r(2109), i = r(2814); n({ global: !0, forced: parseFloat != i }, { parseFloat: i }); }, 1058: (e, t, r) => { var n = r(2109), i = r(3009); n({ global: !0, forced: parseInt != i }, { parseInt: i }); }, 821: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(6916), a = r(9662), o = r(8523), u = r(2534), s = r(408);
        n({ target: "Promise", stat: !0, forced: r(612) }, { all: function (e) { var t = this, r = o.f(t), n = r.resolve, c = r.reject, f = u((function () { var r = a(t.resolve), o = [], u = 0, f = 1; s(e, (function (e) { var a = u++, s = !1; f++, i(r, t, e).then((function (e) { s || (s = !0, o[a] = e, --f || n(o)); }), c); })), --f || n(o); })); return f.error && c(f.value), r.promise; } });
    }, 4164: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1913), a = r(3702).CONSTRUCTOR, o = r(2492), u = r(5005), s = r(614), c = r(8052), f = o && o.prototype;
        if (n({ target: "Promise", proto: !0, forced: a, real: !0 }, { catch: function (e) { return this.then(void 0, e); } }), !i && s(o)) {
            var l = u("Promise").prototype.catch;
            f.catch !== l && c(f, "catch", l, { unsafe: !0 });
        }
    }, 3401: (e, t, r) => {
        "use strict";
        var n, i, a, o = r(2109), u = r(1913), s = r(5268), c = r(7854), f = r(6916), l = r(8052), p = r(7674), m = r(8003), h = r(6340), d = r(9662), v = r(614), y = r(111), g = r(5787), x = r(6707), b = r(261).set, w = r(5948), N = r(842), D = r(2534), E = r(8572), A = r(9909), S = r(2492), C = r(3702), M = r(8523), F = "Promise", O = C.CONSTRUCTOR, T = C.REJECTION_EVENT, B = C.SUBCLASSING, _ = A.getterFor(F), k = A.set, I = S && S.prototype, R = S, z = I, q = c.TypeError, j = c.document, P = c.process, L = M.f, U = L, $ = !!(j && j.createEvent && c.dispatchEvent), H = "unhandledrejection", G = function (e) { var t; return !(!y(e) || !v(t = e.then)) && t; }, V = function (e, t) { var r, n, i, a = t.value, o = 1 == t.state, u = o ? e.ok : e.fail, s = e.resolve, c = e.reject, l = e.domain; try {
            u ? (o || (2 === t.rejection && X(t), t.rejection = 1), !0 === u ? r = a : (l && l.enter(), r = u(a), l && (l.exit(), i = !0)), r === e.promise ? c(q("Promise-chain cycle")) : (n = G(r)) ? f(n, r, s, c) : s(r)) : c(a);
        }
        catch (e) {
            l && !i && l.exit(), c(e);
        } }, Z = function (e, t) { e.notified || (e.notified = !0, w((function () { for (var r, n = e.reactions; r = n.get();)
            V(r, e); e.notified = !1, t && !e.rejection && J(e); }))); }, W = function (e, t, r) { var n, i; $ ? ((n = j.createEvent("Event")).promise = t, n.reason = r, n.initEvent(e, !1, !0), c.dispatchEvent(n)) : n = { promise: t, reason: r }, !T && (i = c["on" + e]) ? i(n) : e === H && N("Unhandled promise rejection", r); }, J = function (e) { f(b, c, (function () { var t, r = e.facade, n = e.value; if (Y(e) && (t = D((function () { s ? P.emit("unhandledRejection", n, r) : W(H, r, n); })), e.rejection = s || Y(e) ? 2 : 1, t.error))
            throw t.value; })); }, Y = function (e) { return 1 !== e.rejection && !e.parent; }, X = function (e) { f(b, c, (function () { var t = e.facade; s ? P.emit("rejectionHandled", t) : W("rejectionhandled", t, e.value); })); }, Q = function (e, t, r) { return function (n) { e(t, n, r); }; }, K = function (e, t, r) { e.done || (e.done = !0, r && (e = r), e.value = t, e.state = 2, Z(e, !0)); }, ee = function (e, t, r) { if (!e.done) {
            e.done = !0, r && (e = r);
            try {
                if (e.facade === t)
                    throw q("Promise can't be resolved itself");
                var n = G(t);
                n ? w((function () { var r = { done: !1 }; try {
                    f(n, t, Q(ee, r, e), Q(K, r, e));
                }
                catch (t) {
                    K(r, t, e);
                } })) : (e.value = t, e.state = 1, Z(e, !1));
            }
            catch (t) {
                K({ done: !1 }, t, e);
            }
        } };
        if (O && (z = (R = function (e) { g(this, z), d(e), f(n, this); var t = _(this); try {
            e(Q(ee, t), Q(K, t));
        }
        catch (e) {
            K(t, e);
        } }).prototype, (n = function (e) { k(this, { type: F, done: !1, notified: !1, parent: !1, reactions: new E, rejection: !1, state: 0, value: void 0 }); }).prototype = l(z, "then", (function (e, t) { var r = _(this), n = L(x(this, R)); return r.parent = !0, n.ok = !v(e) || e, n.fail = v(t) && t, n.domain = s ? P.domain : void 0, 0 == r.state ? r.reactions.add(n) : w((function () { V(n, r); })), n.promise; })), i = function () { var e = new n, t = _(e); this.promise = e, this.resolve = Q(ee, t), this.reject = Q(K, t); }, M.f = L = function (e) { return e === R || void 0 === e ? new i(e) : U(e); }, !u && v(S) && I !== Object.prototype)) {
            a = I.then, B || l(I, "then", (function (e, t) { var r = this; return new R((function (e, t) { f(a, r, e, t); })).then(e, t); }), { unsafe: !0 });
            try {
                delete I.constructor;
            }
            catch (e) { }
            p && p(I, z);
        }
        o({ global: !0, constructor: !0, wrap: !0, forced: O }, { Promise: R }), m(R, F, !1, !0), h(F);
    }, 8674: (e, t, r) => { r(3401), r(821), r(4164), r(6027), r(683), r(6294); }, 6027: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(6916), a = r(9662), o = r(8523), u = r(2534), s = r(408);
        n({ target: "Promise", stat: !0, forced: r(612) }, { race: function (e) { var t = this, r = o.f(t), n = r.reject, c = u((function () { var o = a(t.resolve); s(e, (function (e) { i(o, t, e).then(r.resolve, n); })); })); return c.error && n(c.value), r.promise; } });
    }, 683: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(6916), a = r(8523);
        n({ target: "Promise", stat: !0, forced: r(3702).CONSTRUCTOR }, { reject: function (e) { var t = a.f(this); return i(t.reject, void 0, e), t.promise; } });
    }, 6294: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(5005), a = r(1913), o = r(2492), u = r(3702).CONSTRUCTOR, s = r(9478), c = i("Promise"), f = a && !u;
        n({ target: "Promise", stat: !0, forced: a || u }, { resolve: function (e) { return s(f && this === c ? o : this, e); } });
    }, 2419: (e, t, r) => { var n = r(2109), i = r(5005), a = r(2104), o = r(7065), u = r(9483), s = r(9670), c = r(111), f = r(30), l = r(7293), p = i("Reflect", "construct"), m = Object.prototype, h = [].push, d = l((function () { function e() { } return !(p((function () { }), [], e) instanceof e); })), v = !l((function () { p((function () { })); })), y = d || v; n({ target: "Reflect", stat: !0, forced: y, sham: y }, { construct: function (e, t) { u(e), s(t); var r = arguments.length < 3 ? e : u(arguments[2]); if (v && !d)
            return p(e, t, r); if (e == r) {
            switch (t.length) {
                case 0: return new e;
                case 1: return new e(t[0]);
                case 2: return new e(t[0], t[1]);
                case 3: return new e(t[0], t[1], t[2]);
                case 4: return new e(t[0], t[1], t[2], t[3]);
            }
            var n = [null];
            return a(h, n, t), new (a(o, e, n));
        } var i = r.prototype, l = f(c(i) ? i : m), y = a(e, l, t); return c(y) ? y : l; } }); }, 1299: (e, t, r) => { var n = r(2109), i = r(7854), a = r(8003); n({ global: !0 }, { Reflect: {} }), a(i.Reflect, "Reflect", !0); }, 4603: (e, t, r) => { var n = r(9781), i = r(7854), a = r(1702), o = r(4705), u = r(9587), s = r(8880), c = r(8006).f, f = r(7976), l = r(7850), p = r(1340), m = r(4706), h = r(2999), d = r(2626), v = r(8052), y = r(7293), g = r(2597), x = r(9909).enforce, b = r(6340), w = r(5112), N = r(9441), D = r(7168), E = w("match"), A = i.RegExp, S = A.prototype, C = i.SyntaxError, M = a(S.exec), F = a("".charAt), O = a("".replace), T = a("".indexOf), B = a("".slice), _ = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, k = /a/g, I = /a/g, R = new A(k) !== k, z = h.MISSED_STICKY, q = h.UNSUPPORTED_Y; if (o("RegExp", n && (!R || z || N || D || y((function () { return I[E] = !1, A(k) != k || A(I) == I || "/a/i" != A(k, "i"); }))))) {
        for (var j = function (e, t) { var r, n, i, a, o, c, h = f(S, this), d = l(e), v = void 0 === t, y = [], b = e; if (!h && d && v && e.constructor === j)
            return e; if ((d || f(S, e)) && (e = e.source, v && (t = m(b))), e = void 0 === e ? "" : p(e), t = void 0 === t ? "" : p(t), b = e, N && "dotAll" in k && (n = !!t && T(t, "s") > -1) && (t = O(t, /s/g, "")), r = t, z && "sticky" in k && (i = !!t && T(t, "y") > -1) && q && (t = O(t, /y/g, "")), D && (a = function (e) { for (var t, r = e.length, n = 0, i = "", a = [], o = {}, u = !1, s = !1, c = 0, f = ""; n <= r; n++) {
            if ("\\" === (t = F(e, n)))
                t += F(e, ++n);
            else if ("]" === t)
                u = !1;
            else if (!u)
                switch (!0) {
                    case "[" === t:
                        u = !0;
                        break;
                    case "(" === t:
                        M(_, B(e, n + 1)) && (n += 2, s = !0), i += t, c++;
                        continue;
                    case ">" === t && s:
                        if ("" === f || g(o, f))
                            throw new C("Invalid capture group name");
                        o[f] = !0, a[a.length] = [f, c], s = !1, f = "";
                        continue;
                }
            s ? f += t : i += t;
        } return [i, a]; }(e), e = a[0], y = a[1]), o = u(A(e, t), h ? this : S, j), (n || i || y.length) && (c = x(o), n && (c.dotAll = !0, c.raw = j(function (e) { for (var t, r = e.length, n = 0, i = "", a = !1; n <= r; n++)
            "\\" !== (t = F(e, n)) ? a || "." !== t ? ("[" === t ? a = !0 : "]" === t && (a = !1), i += t) : i += "[\\s\\S]" : i += t + F(e, ++n); return i; }(e), r)), i && (c.sticky = !0), y.length && (c.groups = y)), e !== b)
            try {
                s(o, "source", "" === b ? "(?:)" : b);
            }
            catch (e) { } return o; }, P = c(A), L = 0; P.length > L;)
            d(j, A, P[L++]);
        S.constructor = j, j.prototype = S, v(i, "RegExp", j, { constructor: !0 });
    } b("RegExp"); }, 8450: (e, t, r) => { var n = r(9781), i = r(9441), a = r(4326), o = r(7045), u = r(9909).get, s = RegExp.prototype, c = TypeError; n && i && o(s, "dotAll", { configurable: !0, get: function () { if (this !== s) {
            if ("RegExp" === a(this))
                return !!u(this).dotAll;
            throw c("Incompatible receiver, RegExp required");
        } } }); }, 4916: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(2261);
        n({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
    }, 8386: (e, t, r) => { var n = r(9781), i = r(2999).MISSED_STICKY, a = r(4326), o = r(7045), u = r(9909).get, s = RegExp.prototype, c = TypeError; n && i && o(s, "sticky", { configurable: !0, get: function () { if (this !== s) {
            if ("RegExp" === a(this))
                return !!u(this).sticky;
            throw c("Incompatible receiver, RegExp required");
        } } }); }, 7601: (e, t, r) => {
        "use strict";
        r(4916);
        var n, i, a = r(2109), o = r(6916), u = r(614), s = r(9670), c = r(1340), f = (n = !1, (i = /[ac]/).exec = function () { return n = !0, /./.exec.apply(this, arguments); }, !0 === i.test("abc") && n), l = /./.test;
        a({ target: "RegExp", proto: !0, forced: !f }, { test: function (e) { var t = s(this), r = c(e), n = t.exec; if (!u(n))
                return o(l, t, r); var i = o(n, t, r); return null !== i && (s(i), !0); } });
    }, 9714: (e, t, r) => {
        "use strict";
        var n = r(6530).PROPER, i = r(8052), a = r(9670), o = r(1340), u = r(7293), s = r(4706), c = "toString", f = RegExp.prototype.toString, l = u((function () { return "/a/b" != f.call({ source: "a", flags: "b" }); })), p = n && f.name != c;
        (l || p) && i(RegExp.prototype, c, (function () { var e = a(this); return "/" + o(e.source) + "/" + o(s(e)); }), { unsafe: !0 });
    }, 7227: (e, t, r) => {
        "use strict";
        r(7710)("Set", (function (e) { return function () { return e(this, arguments.length ? arguments[0] : void 0); }; }), r(5631));
    }, 189: (e, t, r) => { r(7227); }, 2023: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1702), a = r(3929), o = r(4488), u = r(1340), s = r(4964), c = i("".indexOf);
        n({ target: "String", proto: !0, forced: !s("includes") }, { includes: function (e) { return !!~c(u(o(this)), u(a(e)), arguments.length > 1 ? arguments[1] : void 0); } });
    }, 8783: (e, t, r) => {
        "use strict";
        var n = r(8710).charAt, i = r(1340), a = r(9909), o = r(1656), u = r(6178), s = "String Iterator", c = a.set, f = a.getterFor(s);
        o(String, "String", (function (e) { c(this, { type: s, string: i(e), index: 0 }); }), (function () { var e, t = f(this), r = t.string, i = t.index; return i >= r.length ? u(void 0, !0) : (e = n(r, i), t.index += e.length, u(e, !1)); }));
    }, 4723: (e, t, r) => {
        "use strict";
        var n = r(6916), i = r(7007), a = r(9670), o = r(8554), u = r(7466), s = r(1340), c = r(4488), f = r(8173), l = r(1530), p = r(7651);
        i("match", (function (e, t, r) { return [function (t) { var r = c(this), i = o(t) ? void 0 : f(t, e); return i ? n(i, t, r) : new RegExp(t)[e](s(r)); }, function (e) { var n = a(this), i = s(e), o = r(t, n, i); if (o.done)
                return o.value; if (!n.global)
                return p(n, i); var c = n.unicode; n.lastIndex = 0; for (var f, m = [], h = 0; null !== (f = p(n, i));) {
                var d = s(f[0]);
                m[h] = d, "" === d && (n.lastIndex = l(i, u(n.lastIndex), c)), h++;
            } return 0 === h ? null : m; }]; }));
    }, 2481: (e, t, r) => { r(2109)({ target: "String", proto: !0 }, { repeat: r(8415) }); }, 5306: (e, t, r) => {
        "use strict";
        var n = r(2104), i = r(6916), a = r(1702), o = r(7007), u = r(7293), s = r(9670), c = r(614), f = r(8554), l = r(9303), p = r(7466), m = r(1340), h = r(4488), d = r(1530), v = r(8173), y = r(647), g = r(7651), x = r(5112)("replace"), b = Math.max, w = Math.min, N = a([].concat), D = a([].push), E = a("".indexOf), A = a("".slice), S = "$0" === "a".replace(/./, "$0"), C = !!/./[x] && "" === /./[x]("a", "$0");
        o("replace", (function (e, t, r) { var a = C ? "$" : "$0"; return [function (e, r) { var n = h(this), a = f(e) ? void 0 : v(e, x); return a ? i(a, e, n, r) : i(t, m(n), e, r); }, function (e, i) { var o = s(this), u = m(e); if ("string" == typeof i && -1 === E(i, a) && -1 === E(i, "$<")) {
                var f = r(t, o, u, i);
                if (f.done)
                    return f.value;
            } var h = c(i); h || (i = m(i)); var v = o.global; if (v) {
                var x = o.unicode;
                o.lastIndex = 0;
            } for (var S = [];;) {
                var C = g(o, u);
                if (null === C)
                    break;
                if (D(S, C), !v)
                    break;
                "" === m(C[0]) && (o.lastIndex = d(u, p(o.lastIndex), x));
            } for (var M, F = "", O = 0, T = 0; T < S.length; T++) {
                for (var B = m((C = S[T])[0]), _ = b(w(l(C.index), u.length), 0), k = [], I = 1; I < C.length; I++)
                    D(k, void 0 === (M = C[I]) ? M : String(M));
                var R = C.groups;
                if (h) {
                    var z = N([B], k, _, u);
                    void 0 !== R && D(z, R);
                    var q = m(n(i, void 0, z));
                }
                else
                    q = y(B, u, _, k, R, i);
                _ >= O && (F += A(u, O, _) + q, O = _ + B.length);
            } return F + A(u, O); }]; }), !!u((function () { var e = /./; return e.exec = function () { var e = []; return e.groups = { a: "7" }, e; }, "7" !== "".replace(e, "$<a>"); })) || !S || C);
    }, 86: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(4230);
        n({ target: "String", proto: !0, forced: r(3429)("sub") }, { sub: function () { return i(this, "sub", "", ""); } });
    }, 3650: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(1702), a = r(4488), o = r(9303), u = r(1340), s = i("".slice), c = Math.max, f = Math.min;
        n({ target: "String", proto: !0, forced: !"".substr || "b" !== "ab".substr(-1) }, { substr: function (e, t) { var r, n, i = u(a(this)), l = i.length, p = o(e); return p === 1 / 0 && (p = 0), p < 0 && (p = c(l + p, 0)), (r = void 0 === t ? l : o(t)) <= 0 || r === 1 / 0 || p >= (n = f(p + r, l)) ? "" : s(i, p, n); } });
    }, 3210: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(3111).trim;
        n({ target: "String", proto: !0, forced: r(6091)("trim") }, { trim: function () { return i(this); } });
    }, 4032: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(7854), a = r(6916), o = r(1702), u = r(1913), s = r(9781), c = r(6293), f = r(7293), l = r(2597), p = r(7976), m = r(9670), h = r(5656), d = r(4948), v = r(1340), y = r(9114), g = r(30), x = r(1956), b = r(8006), w = r(1156), N = r(5181), D = r(1236), E = r(3070), A = r(6048), S = r(5296), C = r(8052), M = r(2309), F = r(6200), O = r(3501), T = r(9711), B = r(5112), _ = r(6061), k = r(6800), I = r(6532), R = r(8003), z = r(9909), q = r(2092).forEach, j = F("hidden"), P = "Symbol", L = z.set, U = z.getterFor(P), $ = Object.prototype, H = i.Symbol, G = H && H.prototype, V = i.TypeError, Z = i.QObject, W = D.f, J = E.f, Y = w.f, X = S.f, Q = o([].push), K = M("symbols"), ee = M("op-symbols"), te = M("wks"), re = !Z || !Z.prototype || !Z.prototype.findChild, ne = s && f((function () { return 7 != g(J({}, "a", { get: function () { return J(this, "a", { value: 7 }).a; } })).a; })) ? function (e, t, r) { var n = W($, t); n && delete $[t], J(e, t, r), n && e !== $ && J($, t, n); } : J, ie = function (e, t) { var r = K[e] = g(G); return L(r, { type: P, tag: e, description: t }), s || (r.description = t), r; }, ae = function (e, t, r) { e === $ && ae(ee, t, r), m(e); var n = d(t); return m(r), l(K, n) ? (r.enumerable ? (l(e, j) && e[j][n] && (e[j][n] = !1), r = g(r, { enumerable: y(0, !1) })) : (l(e, j) || J(e, j, y(1, {})), e[j][n] = !0), ne(e, n, r)) : J(e, n, r); }, oe = function (e, t) { m(e); var r = h(t), n = x(r).concat(fe(r)); return q(n, (function (t) { s && !a(ue, r, t) || ae(e, t, r[t]); })), e; }, ue = function (e) { var t = d(e), r = a(X, this, t); return !(this === $ && l(K, t) && !l(ee, t)) && (!(r || !l(this, t) || !l(K, t) || l(this, j) && this[j][t]) || r); }, se = function (e, t) { var r = h(e), n = d(t); if (r !== $ || !l(K, n) || l(ee, n)) {
            var i = W(r, n);
            return !i || !l(K, n) || l(r, j) && r[j][n] || (i.enumerable = !0), i;
        } }, ce = function (e) { var t = Y(h(e)), r = []; return q(t, (function (e) { l(K, e) || l(O, e) || Q(r, e); })), r; }, fe = function (e) { var t = e === $, r = Y(t ? ee : h(e)), n = []; return q(r, (function (e) { !l(K, e) || t && !l($, e) || Q(n, K[e]); })), n; };
        c || (C(G = (H = function () { if (p(G, this))
            throw V("Symbol is not a constructor"); var e = arguments.length && void 0 !== arguments[0] ? v(arguments[0]) : void 0, t = T(e), r = function (e) { this === $ && a(r, ee, e), l(this, j) && l(this[j], t) && (this[j][t] = !1), ne(this, t, y(1, e)); }; return s && re && ne($, t, { configurable: !0, set: r }), ie(t, e); }).prototype, "toString", (function () { return U(this).tag; })), C(H, "withoutSetter", (function (e) { return ie(T(e), e); })), S.f = ue, E.f = ae, A.f = oe, D.f = se, b.f = w.f = ce, N.f = fe, _.f = function (e) { return ie(B(e), e); }, s && (J(G, "description", { configurable: !0, get: function () { return U(this).description; } }), u || C($, "propertyIsEnumerable", ue, { unsafe: !0 }))), n({ global: !0, constructor: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: H }), q(x(te), (function (e) { k(e); })), n({ target: P, stat: !0, forced: !c }, { useSetter: function () { re = !0; }, useSimple: function () { re = !1; } }), n({ target: "Object", stat: !0, forced: !c, sham: !s }, { create: function (e, t) { return void 0 === t ? g(e) : oe(g(e), t); }, defineProperty: ae, defineProperties: oe, getOwnPropertyDescriptor: se }), n({ target: "Object", stat: !0, forced: !c }, { getOwnPropertyNames: ce }), I(), R(H, P), O[j] = !0;
    }, 1817: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(9781), a = r(7854), o = r(1702), u = r(2597), s = r(614), c = r(7976), f = r(1340), l = r(3070).f, p = r(9920), m = a.Symbol, h = m && m.prototype;
        if (i && s(m) && (!("description" in h) || void 0 !== m().description)) {
            var d = {}, v = function () { var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : f(arguments[0]), t = c(h, this) ? new m(e) : void 0 === e ? m() : m(e); return "" === e && (d[t] = !0), t; };
            p(v, m), v.prototype = h, h.constructor = v;
            var y = "Symbol(test)" == String(m("test")), g = o(h.valueOf), x = o(h.toString), b = /^Symbol\((.*)\)[^)]+$/, w = o("".replace), N = o("".slice);
            l(h, "description", { configurable: !0, get: function () { var e = g(this); if (u(d, e))
                    return ""; var t = x(e), r = y ? N(t, 7, -1) : w(t, b, "$1"); return "" === r ? void 0 : r; } }), n({ global: !0, constructor: !0, forced: !0 }, { Symbol: v });
        }
    }, 763: (e, t, r) => { var n = r(2109), i = r(5005), a = r(2597), o = r(1340), u = r(2309), s = r(2015), c = u("string-to-symbol-registry"), f = u("symbol-to-string-registry"); n({ target: "Symbol", stat: !0, forced: !s }, { for: function (e) { var t = o(e); if (a(c, t))
            return c[t]; var r = i("Symbol")(t); return c[t] = r, f[r] = t, r; } }); }, 2165: (e, t, r) => { r(6800)("iterator"); }, 2526: (e, t, r) => { r(4032), r(763), r(6620), r(8862), r(9660); }, 6620: (e, t, r) => { var n = r(2109), i = r(2597), a = r(2190), o = r(6330), u = r(2309), s = r(2015), c = u("symbol-to-string-registry"); n({ target: "Symbol", stat: !0, forced: !s }, { keyFor: function (e) { if (!a(e))
            throw TypeError(o(e) + " is not a symbol"); if (i(c, e))
            return c[e]; } }); }, 4747: (e, t, r) => { var n = r(7854), i = r(8324), a = r(8509), o = r(8533), u = r(8880), s = function (e) { if (e && e.forEach !== o)
        try {
            u(e, "forEach", o);
        }
        catch (t) {
            e.forEach = o;
        } }; for (var c in i)
        i[c] && s(n[c] && n[c].prototype); s(a); }, 3948: (e, t, r) => { var n = r(7854), i = r(8324), a = r(8509), o = r(6992), u = r(8880), s = r(5112), c = s("iterator"), f = s("toStringTag"), l = o.values, p = function (e, t) { if (e) {
        if (e[c] !== l)
            try {
                u(e, c, l);
            }
            catch (t) {
                e[c] = l;
            }
        if (e[f] || u(e, f, t), i[t])
            for (var r in o)
                if (e[r] !== o[r])
                    try {
                        u(e, r, o[r]);
                    }
                    catch (t) {
                        e[r] = o[r];
                    }
    } }; for (var m in i)
        p(n[m] && n[m].prototype, m); p(a, "DOMTokenList"); }, 3753: (e, t, r) => {
        "use strict";
        var n = r(2109), i = r(6916);
        n({ target: "URL", proto: !0, enumerable: !0 }, { toJSON: function () { return i(URL.prototype.toString, this); } });
    }, 7928: e => {
        "use strict";
        var t = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        } return e; }, r = { "{": "\\{", "}": "\\}", "\\": "\\textbackslash{}", "#": "\\#", $: "\\$", "%": "\\%", "&": "\\&", "^": "\\textasciicircum{}", _: "\\_", "~": "\\textasciitilde{}" }, n = { "–": "\\--", "—": "\\---", " ": "~", "\t": "\\qquad{}", "\r\n": "\\newline{}", "\n": "\\newline{}" }, i = function (e, r) { return t({}, e, r); };
        e.exports = function (e) { for (var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = a.preserveFormatting, u = void 0 !== o && o, s = a.escapeMapFn, c = void 0 === s ? i : s, f = String(e), l = "", p = c(t({}, r), u ? t({}, n) : {}), m = Object.keys(p), h = function () { var e = !1; m.forEach((function (t, r) { e || f.length >= t.length && f.slice(0, t.length) === t && (l += p[m[r]], f = f.slice(t.length, f.length), e = !0); })), e || (l += f.slice(0, 1), f = f.slice(1, f.length)); }; f;)
            h(); return l; };
    }, 5628: function (e, t) { var r; !function (n) {
        "use strict";
        var i = { s: 1, n: 0, d: 1 };
        function a(e, t) { if (isNaN(e = parseInt(e, 10)))
            throw f.InvalidParameter; return e * t; }
        function o(e, t) { if (0 === t)
            throw f.DivisionByZero; var r = Object.create(f.prototype); r.s = e < 0 ? -1 : 1; var n = c(e = e < 0 ? -e : e, t); return r.n = e / n, r.d = t / n, r; }
        function u(e) { for (var t = {}, r = e, n = 2, i = 4; i <= r;) {
            for (; r % n == 0;)
                r /= n, t[n] = (t[n] || 0) + 1;
            i += 1 + 2 * n++;
        } return r !== e ? r > 1 && (t[r] = (t[r] || 0) + 1) : t[e] = (t[e] || 0) + 1, t; }
        var s = function (e, t) { var r, n = 0, o = 1, u = 1, s = 0, c = 0, l = 0, p = 1, m = 1, h = 0, d = 1, v = 1, y = 1, g = 1e7; if (null == e)
            ;
        else if (void 0 !== t) {
            if (u = (n = e) * (o = t), n % 1 != 0 || o % 1 != 0)
                throw f.NonIntegerParameter;
        }
        else
            switch (typeof e) {
                case "object":
                    if ("d" in e && "n" in e)
                        n = e.n, o = e.d, "s" in e && (n *= e.s);
                    else {
                        if (!(0 in e))
                            throw f.InvalidParameter;
                        n = e[0], 1 in e && (o = e[1]);
                    }
                    u = n * o;
                    break;
                case "number":
                    if (e < 0 && (u = e, e = -e), e % 1 == 0)
                        n = e;
                    else if (e > 0) {
                        for (e >= 1 && (e /= m = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10))); d <= g && y <= g;) {
                            if (e === (r = (h + v) / (d + y))) {
                                d + y <= g ? (n = h + v, o = d + y) : y > d ? (n = v, o = y) : (n = h, o = d);
                                break;
                            }
                            e > r ? (h += v, d += y) : (v += h, y += d), d > g ? (n = v, o = y) : (n = h, o = d);
                        }
                        n *= m;
                    }
                    else
                        (isNaN(e) || isNaN(t)) && (o = n = NaN);
                    break;
                case "string":
                    if (null === (d = e.match(/\d+|./g)))
                        throw f.InvalidParameter;
                    if ("-" === d[h] ? (u = -1, h++) : "+" === d[h] && h++, d.length === h + 1 ? c = a(d[h++], u) : "." === d[h + 1] || "." === d[h] ? ("." !== d[h] && (s = a(d[h++], u)), (1 + ++h === d.length || "(" === d[h + 1] && ")" === d[h + 3] || "'" === d[h + 1] && "'" === d[h + 3]) && (c = a(d[h], u), p = Math.pow(10, d[h].length), h++), ("(" === d[h] && ")" === d[h + 2] || "'" === d[h] && "'" === d[h + 2]) && (l = a(d[h + 1], u), m = Math.pow(10, d[h + 1].length) - 1, h += 3)) : "/" === d[h + 1] || ":" === d[h + 1] ? (c = a(d[h], u), p = a(d[h + 2], 1), h += 3) : "/" === d[h + 3] && " " === d[h + 1] && (s = a(d[h], u), c = a(d[h + 2], u), p = a(d[h + 4], 1), h += 5), d.length <= h) {
                        u = n = l + (o = p * m) * s + m * c;
                        break;
                    }
                default: throw f.InvalidParameter;
            } if (0 === o)
            throw f.DivisionByZero; i.s = u < 0 ? -1 : 1, i.n = Math.abs(n), i.d = Math.abs(o); };
        function c(e, t) { if (!e)
            return t; if (!t)
            return e; for (;;) {
            if (!(e %= t))
                return t;
            if (!(t %= e))
                return e;
        } }
        function f(e, t) { if (s(e, t), !(this instanceof f))
            return o(i.s * i.n, i.d); e = c(i.d, i.n), this.s = i.s, this.n = i.n / e, this.d = i.d / e; }
        f.DivisionByZero = new Error("Division by Zero"), f.InvalidParameter = new Error("Invalid argument"), f.NonIntegerParameter = new Error("Parameters must be integer"), f.prototype = { s: 1, n: 0, d: 1, abs: function () { return o(this.n, this.d); }, neg: function () { return o(-this.s * this.n, this.d); }, add: function (e, t) { return s(e, t), o(this.s * this.n * i.d + i.s * this.d * i.n, this.d * i.d); }, sub: function (e, t) { return s(e, t), o(this.s * this.n * i.d - i.s * this.d * i.n, this.d * i.d); }, mul: function (e, t) { return s(e, t), o(this.s * i.s * this.n * i.n, this.d * i.d); }, div: function (e, t) { return s(e, t), o(this.s * i.s * this.n * i.d, this.d * i.n); }, clone: function () { return o(this.s * this.n, this.d); }, mod: function (e, t) { if (isNaN(this.n) || isNaN(this.d))
                return new f(NaN); if (void 0 === e)
                return o(this.s * this.n % this.d, 1); if (s(e, t), 0 === i.n && 0 === this.d)
                throw f.DivisionByZero; return o(this.s * (i.d * this.n) % (i.n * this.d), i.d * this.d); }, gcd: function (e, t) { return s(e, t), o(c(i.n, this.n) * c(i.d, this.d), i.d * this.d); }, lcm: function (e, t) { return s(e, t), 0 === i.n && 0 === this.n ? o(0, 1) : o(i.n * this.n, c(i.n, this.n) * c(i.d, this.d)); }, ceil: function (e) { return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new f(NaN) : o(Math.ceil(e * this.s * this.n / this.d), e); }, floor: function (e) { return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new f(NaN) : o(Math.floor(e * this.s * this.n / this.d), e); }, round: function (e) { return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new f(NaN) : o(Math.round(e * this.s * this.n / this.d), e); }, inverse: function () { return o(this.s * this.d, this.n); }, pow: function (e, t) { if (s(e, t), 1 === i.d)
                return i.s < 0 ? o(Math.pow(this.s * this.d, i.n), Math.pow(this.n, i.n)) : o(Math.pow(this.s * this.n, i.n), Math.pow(this.d, i.n)); if (this.s < 0)
                return null; var r = u(this.n), n = u(this.d), a = 1, c = 1; for (var f in r)
                if ("1" !== f) {
                    if ("0" === f) {
                        a = 0;
                        break;
                    }
                    if (r[f] *= i.n, r[f] % i.d != 0)
                        return null;
                    r[f] /= i.d, a *= Math.pow(f, r[f]);
                } for (var f in n)
                if ("1" !== f) {
                    if (n[f] *= i.n, n[f] % i.d != 0)
                        return null;
                    n[f] /= i.d, c *= Math.pow(f, n[f]);
                } return i.s < 0 ? o(c, a) : o(a, c); }, equals: function (e, t) { return s(e, t), this.s * this.n * i.d == i.s * i.n * this.d; }, compare: function (e, t) { s(e, t); var r = this.s * this.n * i.d - i.s * i.n * this.d; return (0 < r) - (r < 0); }, simplify: function (e) { if (isNaN(this.n) || isNaN(this.d))
                return this; e = e || .001; for (var t = this.abs(), r = t.toContinued(), n = 1; n < r.length; n++) {
                for (var i = o(r[n - 1], 1), a = n - 2; a >= 0; a--)
                    i = i.inverse().add(r[a]);
                if (i.sub(t).abs().valueOf() < e)
                    return i.mul(this.s);
            } return this; }, divisible: function (e, t) { return s(e, t), !(!(i.n * this.d) || this.n * i.d % (i.n * this.d)); }, valueOf: function () { return this.s * this.n / this.d; }, toFraction: function (e) { var t, r = "", n = this.n, i = this.d; return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && (t = Math.floor(n / i)) > 0 && (r += t, r += " ", n %= i), r += n, r += "/", r += i), r; }, toLatex: function (e) { var t, r = "", n = this.n, i = this.d; return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && (t = Math.floor(n / i)) > 0 && (r += t, n %= i), r += "\\frac{", r += n, r += "}{", r += i, r += "}"), r; }, toContinued: function () { var e, t = this.n, r = this.d, n = []; if (isNaN(t) || isNaN(r))
                return n; do {
                n.push(Math.floor(t / r)), e = t % r, t = r, r = e;
            } while (1 !== t); return n; }, toString: function (e) { var t = this.n, r = this.d; if (isNaN(t) || isNaN(r))
                return "NaN"; e = e || 15; var n = function (e, t) { for (; t % 2 == 0; t /= 2)
                ; for (; t % 5 == 0; t /= 5)
                ; if (1 === t)
                return 0; for (var r = 10 % t, n = 1; 1 !== r; n++)
                if (r = 10 * r % t, n > 2e3)
                    return 0; return n; }(0, r), i = function (e, t, r) { for (var n = 1, i = function (e, t, r) { for (var n = 1; t > 0; e = e * e % r, t >>= 1)
                1 & t && (n = n * e % r); return n; }(10, r, t), a = 0; a < 300; a++) {
                if (n === i)
                    return a;
                n = 10 * n % t, i = 10 * i % t;
            } return 0; }(0, r, n), a = this.s < 0 ? "-" : ""; if (a += t / r | 0, t %= r, (t *= 10) && (a += "."), n) {
                for (var o = i; o--;)
                    a += t / r | 0, t %= r, t *= 10;
                for (a += "(", o = n; o--;)
                    a += t / r | 0, t %= r, t *= 10;
                a += ")";
            }
            else
                for (o = e; t && o--;)
                    a += t / r | 0, t %= r, t *= 10; return a; } }, void 0 === (r = function () { return f; }.apply(t, [])) || (e.exports = r);
    }(); }, 3228: e => { e.exports = function e(t, r) {
        "use strict";
        var n, i, a = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, o = /(^[ ]*|[ ]*$)/g, u = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, s = /^0x[0-9a-f]+$/i, c = /^0/, f = function (t) { return e.insensitive && ("" + t).toLowerCase() || "" + t; }, l = f(t).replace(o, "") || "", p = f(r).replace(o, "") || "", m = l.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), h = p.replace(a, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), d = parseInt(l.match(s), 16) || 1 !== m.length && l.match(u) && Date.parse(l), v = parseInt(p.match(s), 16) || d && p.match(u) && Date.parse(p) || null;
        if (v) {
            if (d < v)
                return -1;
            if (d > v)
                return 1;
        }
        for (var y = 0, g = Math.max(m.length, h.length); y < g; y++) {
            if (n = !(m[y] || "").match(c) && parseFloat(m[y]) || m[y] || 0, i = !(h[y] || "").match(c) && parseFloat(h[y]) || h[y] || 0, isNaN(n) !== isNaN(i))
                return isNaN(n) ? 1 : -1;
            if (typeof n != typeof i && (n += "", i += ""), n < i)
                return -1;
            if (n > i)
                return 1;
        }
        return 0;
    }; }, 6377: (e, t, r) => { var n = r(4832), i = r(8652), a = r(801), o = r(2030), u = r(3618), s = r(9049), c = r(1971); c.alea = n, c.xor128 = i, c.xorwow = a, c.xorshift7 = o, c.xor4096 = u, c.tychei = s, e.exports = c; }, 4832: function (e, t, r) { var n; !function (e, i, a) { function o(e) { var t, r = this, n = (t = 4022871197, function (e) { e = String(e); for (var r = 0; r < e.length; r++) {
        var n = .02519603282416938 * (t += e.charCodeAt(r));
        n -= t = n >>> 0, t = (n *= t) >>> 0, t += 4294967296 * (n -= t);
    } return 2.3283064365386963e-10 * (t >>> 0); }); r.next = function () { var e = 2091639 * r.s0 + 2.3283064365386963e-10 * r.c; return r.s0 = r.s1, r.s1 = r.s2, r.s2 = e - (r.c = 0 | e); }, r.c = 1, r.s0 = n(" "), r.s1 = n(" "), r.s2 = n(" "), r.s0 -= n(e), r.s0 < 0 && (r.s0 += 1), r.s1 -= n(e), r.s1 < 0 && (r.s1 += 1), r.s2 -= n(e), r.s2 < 0 && (r.s2 += 1), n = null; } function u(e, t) { return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t; } function s(e, t) { var r = new o(e), n = t && t.state, i = r.next; return i.int32 = function () { return 4294967296 * r.next() | 0; }, i.double = function () { return i() + 11102230246251565e-32 * (2097152 * i() | 0); }, i.quick = i, n && ("object" == typeof n && u(n, r), i.state = function () { return u(r, {}); }), i; } i && i.exports ? i.exports = s : r.amdD && r.amdO ? void 0 === (n = function () { return s; }.call(t, r, t, i)) || (i.exports = n) : this.alea = s; }(0, e = r.nmd(e), r.amdD); }, 9049: function (e, t, r) { var n; !function (e, i, a) { function o(e) { var t = this, r = ""; t.next = function () { var e = t.b, r = t.c, n = t.d, i = t.a; return e = e << 25 ^ e >>> 7 ^ r, r = r - n | 0, n = n << 24 ^ n >>> 8 ^ i, i = i - e | 0, t.b = e = e << 20 ^ e >>> 12 ^ r, t.c = r = r - n | 0, t.d = n << 16 ^ r >>> 16 ^ i, t.a = i - e | 0; }, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, e === Math.floor(e) ? (t.a = e / 4294967296 | 0, t.b = 0 | e) : r += e; for (var n = 0; n < r.length + 20; n++)
        t.b ^= 0 | r.charCodeAt(n), t.next(); } function u(e, t) { return t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t; } function s(e, t) { var r = new o(e), n = t && t.state, i = function () { return (r.next() >>> 0) / 4294967296; }; return i.double = function () { do {
        var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
    } while (0 === e); return e; }, i.int32 = r.next, i.quick = i, n && ("object" == typeof n && u(n, r), i.state = function () { return u(r, {}); }), i; } i && i.exports ? i.exports = s : r.amdD && r.amdO ? void 0 === (n = function () { return s; }.call(t, r, t, i)) || (i.exports = n) : this.tychei = s; }(0, e = r.nmd(e), r.amdD); }, 8652: function (e, t, r) { var n; !function (e, i, a) { function o(e) { var t = this, r = ""; t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function () { var e = t.x ^ t.x << 11; return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ e ^ e >>> 8; }, e === (0 | e) ? t.x = e : r += e; for (var n = 0; n < r.length + 64; n++)
        t.x ^= 0 | r.charCodeAt(n), t.next(); } function u(e, t) { return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t; } function s(e, t) { var r = new o(e), n = t && t.state, i = function () { return (r.next() >>> 0) / 4294967296; }; return i.double = function () { do {
        var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
    } while (0 === e); return e; }, i.int32 = r.next, i.quick = i, n && ("object" == typeof n && u(n, r), i.state = function () { return u(r, {}); }), i; } i && i.exports ? i.exports = s : r.amdD && r.amdO ? void 0 === (n = function () { return s; }.call(t, r, t, i)) || (i.exports = n) : this.xor128 = s; }(0, e = r.nmd(e), r.amdD); }, 3618: function (e, t, r) { var n; !function (e, i, a) { function o(e) { var t = this; t.next = function () { var e, r, n = t.w, i = t.X, a = t.i; return t.w = n = n + 1640531527 | 0, r = i[a + 34 & 127], e = i[a = a + 1 & 127], r ^= r << 13, e ^= e << 17, r ^= r >>> 15, e ^= e >>> 12, r = i[a] = r ^ e, t.i = a, r + (n ^ n >>> 16) | 0; }, function (e, t) { var r, n, i, a, o, u = [], s = 128; for (t === (0 | t) ? (n = t, t = null) : (t += "\0", n = 0, s = Math.max(s, t.length)), i = 0, a = -32; a < s; ++a)
        t && (n ^= t.charCodeAt((a + 32) % t.length)), 0 === a && (o = n), n ^= n << 10, n ^= n >>> 15, n ^= n << 4, n ^= n >>> 13, a >= 0 && (o = o + 1640531527 | 0, i = 0 == (r = u[127 & a] ^= n + o) ? i + 1 : 0); for (i >= 128 && (u[127 & (t && t.length || 0)] = -1), i = 127, a = 512; a > 0; --a)
        n = u[i + 34 & 127], r = u[i = i + 1 & 127], n ^= n << 13, r ^= r << 17, n ^= n >>> 15, r ^= r >>> 12, u[i] = n ^ r; e.w = o, e.X = u, e.i = i; }(t, e); } function u(e, t) { return t.i = e.i, t.w = e.w, t.X = e.X.slice(), t; } function s(e, t) { null == e && (e = +new Date); var r = new o(e), n = t && t.state, i = function () { return (r.next() >>> 0) / 4294967296; }; return i.double = function () { do {
        var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
    } while (0 === e); return e; }, i.int32 = r.next, i.quick = i, n && (n.X && u(n, r), i.state = function () { return u(r, {}); }), i; } i && i.exports ? i.exports = s : r.amdD && r.amdO ? void 0 === (n = function () { return s; }.call(t, r, t, i)) || (i.exports = n) : this.xor4096 = s; }(0, e = r.nmd(e), r.amdD); }, 2030: function (e, t, r) { var n; !function (e, i, a) { function o(e) { var t = this; t.next = function () { var e, r, n = t.x, i = t.i; return e = n[i], r = (e ^= e >>> 7) ^ e << 24, r ^= (e = n[i + 1 & 7]) ^ e >>> 10, r ^= (e = n[i + 3 & 7]) ^ e >>> 3, r ^= (e = n[i + 4 & 7]) ^ e << 7, e = n[i + 7 & 7], r ^= (e ^= e << 13) ^ e << 9, n[i] = r, t.i = i + 1 & 7, r; }, function (e, t) { var r, n = []; if (t === (0 | t))
        n[0] = t;
    else
        for (t = "" + t, r = 0; r < t.length; ++r)
            n[7 & r] = n[7 & r] << 15 ^ t.charCodeAt(r) + n[r + 1 & 7] << 13; for (; n.length < 8;)
        n.push(0); for (r = 0; r < 8 && 0 === n[r]; ++r)
        ; for (8 == r ? n[7] = -1 : n[r], e.x = n, e.i = 0, r = 256; r > 0; --r)
        e.next(); }(t, e); } function u(e, t) { return t.x = e.x.slice(), t.i = e.i, t; } function s(e, t) { null == e && (e = +new Date); var r = new o(e), n = t && t.state, i = function () { return (r.next() >>> 0) / 4294967296; }; return i.double = function () { do {
        var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
    } while (0 === e); return e; }, i.int32 = r.next, i.quick = i, n && (n.x && u(n, r), i.state = function () { return u(r, {}); }), i; } i && i.exports ? i.exports = s : r.amdD && r.amdO ? void 0 === (n = function () { return s; }.call(t, r, t, i)) || (i.exports = n) : this.xorshift7 = s; }(0, e = r.nmd(e), r.amdD); }, 801: function (e, t, r) { var n; !function (e, i, a) { function o(e) { var t = this, r = ""; t.next = function () { var e = t.x ^ t.x >>> 2; return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ e ^ e << 1) | 0; }, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, e === (0 | e) ? t.x = e : r += e; for (var n = 0; n < r.length + 64; n++)
        t.x ^= 0 | r.charCodeAt(n), n == r.length && (t.d = t.x << 10 ^ t.x >>> 4), t.next(); } function u(e, t) { return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t.v = e.v, t.d = e.d, t; } function s(e, t) { var r = new o(e), n = t && t.state, i = function () { return (r.next() >>> 0) / 4294967296; }; return i.double = function () { do {
        var e = ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) / (1 << 21);
    } while (0 === e); return e; }, i.int32 = r.next, i.quick = i, n && ("object" == typeof n && u(n, r), i.state = function () { return u(r, {}); }), i; } i && i.exports ? i.exports = s : r.amdD && r.amdO ? void 0 === (n = function () { return s; }.call(t, r, t, i)) || (i.exports = n) : this.xorwow = s; }(0, e = r.nmd(e), r.amdD); }, 1971: function (e, t, r) { var n; !function (i, a, o) { var u, s = 256, c = o.pow(s, 6), f = o.pow(2, 52), l = 2 * f, p = 255; function m(e, t, r) { var n = [], p = y(v((t = 1 == t ? { entropy: !0 } : t || {}).entropy ? [e, g(a)] : null == e ? function () { try {
        var e;
        return u && (e = u.randomBytes) ? e = e(s) : (e = new Uint8Array(s), (i.crypto || i.msCrypto).getRandomValues(e)), g(e);
    }
    catch (e) {
        var t = i.navigator, r = t && t.plugins;
        return [+new Date, i, r, i.screen, g(a)];
    } }() : e, 3), n), m = new h(n), x = function () { for (var e = m.g(6), t = c, r = 0; e < f;)
        e = (e + r) * s, t *= s, r = m.g(1); for (; e >= l;)
        e /= 2, t /= 2, r >>>= 1; return (e + r) / t; }; return x.int32 = function () { return 0 | m.g(4); }, x.quick = function () { return m.g(4) / 4294967296; }, x.double = x, y(g(m.S), a), (t.pass || r || function (e, t, r, n) { return n && (n.S && d(n, m), e.state = function () { return d(m, {}); }), r ? (o.random = e, t) : e; })(x, p, "global" in t ? t.global : this == o, t.state); } function h(e) { var t, r = e.length, n = this, i = 0, a = n.i = n.j = 0, o = n.S = []; for (r || (e = [r++]); i < s;)
        o[i] = i++; for (i = 0; i < s; i++)
        o[i] = o[a = p & a + e[i % r] + (t = o[i])], o[a] = t; (n.g = function (e) { for (var t, r = 0, i = n.i, a = n.j, o = n.S; e--;)
        t = o[i = p & i + 1], r = r * s + o[p & (o[i] = o[a = p & a + t]) + (o[a] = t)]; return n.i = i, n.j = a, r; })(s); } function d(e, t) { return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t; } function v(e, t) { var r, n = [], i = typeof e; if (t && "object" == i)
        for (r in e)
            try {
                n.push(v(e[r], t - 1));
            }
            catch (e) { } return n.length ? n : "string" == i ? e : e + "\0"; } function y(e, t) { for (var r, n = e + "", i = 0; i < n.length;)
        t[p & i] = p & (r ^= 19 * t[p & i]) + n.charCodeAt(i++); return g(t); } function g(e) { return String.fromCharCode.apply(0, e); } if (y(o.random(), a), e.exports) {
        e.exports = m;
        try {
            u = r(5042);
        }
        catch (e) { }
    }
    else
        void 0 === (n = function () { return m; }.call(t, r, t, e)) || (e.exports = n); }("undefined" != typeof self ? self : this, [], Math); }, 4279: e => { function t() { } t.prototype = { on: function (e, t, r) { var n = this.e || (this.e = {}); return (n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this; }, once: function (e, t, r) { var n = this; function i() { n.off(e, i), t.apply(r, arguments); } return i._ = t, this.on(e, i, r); }, emit: function (e) { for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, i = r.length; n < i; n++)
            r[n].fn.apply(r[n].ctx, t); return this; }, off: function (e, t) { var r = this.e || (this.e = {}), n = r[e], i = []; if (n && t)
            for (var a = 0, o = n.length; a < o; a++)
                n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]); return i.length ? r[e] = i : delete r[e], this; } }, e.exports = t, e.exports.TinyEmitter = t; }, 5042: () => { }, 7061: (e, t, r) => { var n = r(8698).default; function i() {
        "use strict";
        e.exports = i = function () { return t; }, e.exports.__esModule = !0, e.exports.default = e.exports;
        var t = {}, r = Object.prototype, a = r.hasOwnProperty, o = Object.defineProperty || function (e, t, r) { e[t] = r.value; }, u = "function" == typeof Symbol ? Symbol : {}, s = u.iterator || "@@iterator", c = u.asyncIterator || "@@asyncIterator", f = u.toStringTag || "@@toStringTag";
        function l(e, t, r) { return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t]; }
        try {
            l({}, "");
        }
        catch (e) {
            l = function (e, t, r) { return e[t] = r; };
        }
        function p(e, t, r, n) { var i = t && t.prototype instanceof d ? t : d, a = Object.create(i.prototype), u = new M(n || []); return o(a, "_invoke", { value: E(e, r, u) }), a; }
        function m(e, t, r) { try {
            return { type: "normal", arg: e.call(t, r) };
        }
        catch (e) {
            return { type: "throw", arg: e };
        } }
        t.wrap = p;
        var h = {};
        function d() { }
        function v() { }
        function y() { }
        var g = {};
        l(g, s, (function () { return this; }));
        var x = Object.getPrototypeOf, b = x && x(x(F([])));
        b && b !== r && a.call(b, s) && (g = b);
        var w = y.prototype = d.prototype = Object.create(g);
        function N(e) { ["next", "throw", "return"].forEach((function (t) { l(e, t, (function (e) { return this._invoke(t, e); })); })); }
        function D(e, t) { function r(i, o, u, s) { var c = m(e[i], e, o); if ("throw" !== c.type) {
            var f = c.arg, l = f.value;
            return l && "object" == n(l) && a.call(l, "__await") ? t.resolve(l.__await).then((function (e) { r("next", e, u, s); }), (function (e) { r("throw", e, u, s); })) : t.resolve(l).then((function (e) { f.value = e, u(f); }), (function (e) { return r("throw", e, u, s); }));
        } s(c.arg); } var i; o(this, "_invoke", { value: function (e, n) { function a() { return new t((function (t, i) { r(e, n, t, i); })); } return i = i ? i.then(a, a) : a(); } }); }
        function E(e, t, r) { var n = "suspendedStart"; return function (i, a) { if ("executing" === n)
            throw new Error("Generator is already running"); if ("completed" === n) {
            if ("throw" === i)
                throw a;
            return { value: void 0, done: !0 };
        } for (r.method = i, r.arg = a;;) {
            var o = r.delegate;
            if (o) {
                var u = A(o, r);
                if (u) {
                    if (u === h)
                        continue;
                    return u;
                }
            }
            if ("next" === r.method)
                r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
                if ("suspendedStart" === n)
                    throw n = "completed", r.arg;
                r.dispatchException(r.arg);
            }
            else
                "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var s = m(e, t, r);
            if ("normal" === s.type) {
                if (n = r.done ? "completed" : "suspendedYield", s.arg === h)
                    continue;
                return { value: s.arg, done: r.done };
            }
            "throw" === s.type && (n = "completed", r.method = "throw", r.arg = s.arg);
        } }; }
        function A(e, t) { var r = t.method, n = e.iterator[r]; if (void 0 === n)
            return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = void 0, A(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), h; var i = m(n, e.iterator, t.arg); if ("throw" === i.type)
            return t.method = "throw", t.arg = i.arg, t.delegate = null, h; var a = i.arg; return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h); }
        function S(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t); }
        function C(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t; }
        function M(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(S, this), this.reset(!0); }
        function F(e) { if (e) {
            var t = e[s];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length)) {
                var r = -1, n = function t() { for (; ++r < e.length;)
                    if (a.call(e, r))
                        return t.value = e[r], t.done = !1, t; return t.value = void 0, t.done = !0, t; };
                return n.next = n;
            }
        } return { next: O }; }
        function O() { return { value: void 0, done: !0 }; }
        return v.prototype = y, o(w, "constructor", { value: y, configurable: !0 }), o(y, "constructor", { value: v, configurable: !0 }), v.displayName = l(y, f, "GeneratorFunction"), t.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name)); }, t.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, f, "GeneratorFunction")), e.prototype = Object.create(w), e; }, t.awrap = function (e) { return { __await: e }; }, N(D.prototype), l(D.prototype, c, (function () { return this; })), t.AsyncIterator = D, t.async = function (e, r, n, i, a) { void 0 === a && (a = Promise); var o = new D(p(e, r, n, i), a); return t.isGeneratorFunction(r) ? o : o.next().then((function (e) { return e.done ? e.value : o.next(); })); }, N(w), l(w, f, "Generator"), l(w, s, (function () { return this; })), l(w, "toString", (function () { return "[object Generator]"; })), t.keys = function (e) { var t = Object(e), r = []; for (var n in t)
            r.push(n); return r.reverse(), function e() { for (; r.length;) {
            var n = r.pop();
            if (n in t)
                return e.value = n, e.done = !1, e;
        } return e.done = !0, e; }; }, t.values = F, M.prototype = { constructor: M, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
                for (var t in this)
                    "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0); }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type)
                throw e.arg; return this.rval; }, dispatchException: function (e) { if (this.done)
                throw e; var t = this; function r(r, n) { return o.type = "throw", o.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n; } for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n], o = i.completion;
                if ("root" === i.tryLoc)
                    return r("end");
                if (i.tryLoc <= this.prev) {
                    var u = a.call(i, "catchLoc"), s = a.call(i, "finallyLoc");
                    if (u && s) {
                        if (this.prev < i.catchLoc)
                            return r(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc)
                            return r(i.finallyLoc);
                    }
                    else if (u) {
                        if (this.prev < i.catchLoc)
                            return r(i.catchLoc, !0);
                    }
                    else {
                        if (!s)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc)
                            return r(i.finallyLoc);
                    }
                }
            } }, abrupt: function (e, t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                    var i = n;
                    break;
                }
            } i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var o = i ? i.completion : {}; return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(o); }, complete: function (e, t) { if ("throw" === e.type)
                throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h; }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), C(r), h;
            } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var i = n.arg;
                        C(r);
                    }
                    return i;
                }
            } throw new Error("illegal catch attempt"); }, delegateYield: function (e, t, r) { return this.delegate = { iterator: F(e), resultName: t, nextLoc: r }, "next" === this.method && (this.arg = void 0), h; } }, t;
    } e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports; }, 8698: e => { function t(r) { return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r); } e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports; }, 4687: (e, t, r) => { var n = r(7061)(); e.exports = n; try {
        regeneratorRuntime = n;
    }
    catch (e) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
    } }, 4814: function (e) { e.exports = function () {
        "use strict";
        function e(e, r) { var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
            if (Array.isArray(e) || (n = function (e, r) { if (e) {
                if ("string" == typeof e)
                    return t(e, r);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, r) : void 0;
            } }(e)) || r && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0, a = function () { };
                return { s: a, n: function () { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }; }, e: function (e) { throw e; }, f: a };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        } var o, u = !0, s = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return u = e.done, e; }, e: function (e) { s = !0, o = e; }, f: function () { try {
                u || null == n.return || n.return();
            }
            finally {
                if (s)
                    throw o;
            } } }; }
        function t(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function r(e) { return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, r(e); }
        function n() { return !0; }
        function i() { return !1; }
        function a() { }
        var o = "Argument is not a typed-function.";
        return function t() { function u(e) { return "object" === r(e) && null !== e && e.constructor === Object; } var s, c, f = [{ name: "number", test: function (e) { return "number" == typeof e; } }, { name: "string", test: function (e) { return "string" == typeof e; } }, { name: "boolean", test: function (e) { return "boolean" == typeof e; } }, { name: "Function", test: function (e) { return "function" == typeof e; } }, { name: "Array", test: Array.isArray }, { name: "Date", test: function (e) { return e instanceof Date; } }, { name: "RegExp", test: function (e) { return e instanceof RegExp; } }, { name: "Object", test: u }, { name: "null", test: function (e) { return null === e; } }, { name: "undefined", test: function (e) { return void 0 === e; } }], l = { name: "any", test: n, isAny: !0 }, p = 0, m = { createCount: 0 }; function h(t) { var r = s.get(t); if (r)
            return r; var n, i, a = 'Unknown type "' + t + '"', o = t.toLowerCase(), u = e(c); try {
            for (u.s(); !(i = u.n()).done;)
                if ((n = i.value).toLowerCase() === o) {
                    a += '. Did you mean "' + n + '" ?';
                    break;
                }
        }
        catch (e) {
            u.e(e);
        }
        finally {
            u.f();
        } throw new TypeError(a); } function d(e) { for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "any", r = t ? h(t).index : c.length, n = [], i = 0; i < e.length; ++i) {
            if (!e[i] || "string" != typeof e[i].name || "function" != typeof e[i].test)
                throw new TypeError("Object with properties {name: string, test: function} expected");
            var a = e[i].name;
            if (s.has(a))
                throw new TypeError('Duplicate type name "' + a + '"');
            n.push(a), s.set(a, { name: a, test: e[i].test, isAny: e[i].isAny, index: r + i, conversionsTo: [] });
        } var o = c.slice(r); c = c.slice(0, r).concat(n).concat(o); for (var u = r + n.length; u < c.length; ++u)
            s.get(c[u]).index = u; } function v() { s = new Map, c = [], p = 0, d([l], !1); } function y(e) { var t = c.filter((function (t) { var r = s.get(t); return !r.isAny && r.test(e); })); return t.length ? t : ["any"]; } function g(e) { return e && "function" == typeof e && "_typedFunctionData" in e; } function x(t, r, n) { if (!g(t))
            throw new TypeError(o); var i = n && n.exact, a = E(Array.isArray(r) ? r.join(",") : r), u = b(a); if (!i || u in t.signatures) {
            var s = t._typedFunctionData.signatureMap.get(u);
            if (s)
                return s;
        } var c, f, l, p = a.length; if (i)
            for (f in c = [], t.signatures)
                c.push(t._typedFunctionData.signatureMap.get(f));
        else
            c = t._typedFunctionData.signatures; for (var m = 0; m < p; ++m) {
            var h, d = a[m], v = [], y = void 0, x = e(c);
            try {
                for (x.s(); !(h = x.n()).done;) {
                    var w = M((y = h.value).params, m);
                    if (w && (!d.restParam || w.restParam)) {
                        if (!w.hasAny && "continue" === function () { var e = D(w); if (d.types.some((function (t) { return !e.has(t.name); })))
                            return "continue"; }())
                            continue;
                        v.push(y);
                    }
                }
            }
            catch (e) {
                x.e(e);
            }
            finally {
                x.f();
            }
            if (0 === (c = v).length)
                break;
        } var N, A = e(c); try {
            for (A.s(); !(N = A.n()).done;)
                if ((l = N.value).params.length <= p)
                    return l;
        }
        catch (e) {
            A.e(e);
        }
        finally {
            A.f();
        } throw new TypeError("Signature not found (signature: " + (t.name || "unnamed") + "(" + b(a, ", ") + "))"); } function b(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ","; return e.map((function (e) { return e.name; })).join(t); } function w(e) { var t = 0 === e.indexOf("..."), r = (t ? e.length > 3 ? e.slice(3) : "any" : e).split("|").map((function (e) { return h(e.trim()); })), n = !1, i = t ? "..." : ""; return { types: r.map((function (e) { return n = e.isAny || n, i += e.name + "|", { name: e.name, typeIndex: e.index, test: e.test, isAny: e.isAny, conversion: null, conversionIndex: -1 }; })), name: i.slice(0, -1), hasAny: n, hasConversion: !1, restParam: t }; } function N(t) { var r = function (t) { if (0 === t.length)
            return []; var r = t.map(h); t.length > 1 && r.sort((function (e, t) { return e.index - t.index; })); var n = r[0].conversionsTo; if (1 === t.length)
            return n; n = n.concat([]); for (var i = new Set(t), a = 1; a < r.length; ++a) {
            var o, u = void 0, s = e(r[a].conversionsTo);
            try {
                for (s.s(); !(o = s.n()).done;)
                    u = o.value, i.has(u.from) || (n.push(u), i.add(u.from));
            }
            catch (e) {
                s.e(e);
            }
            finally {
                s.f();
            }
        } return n; }(t.types.map((function (e) { return e.name; }))), n = t.hasAny, i = t.name, a = r.map((function (e) { var t = h(e.from); return n = t.isAny || n, i += "|" + e.from, { name: e.from, typeIndex: t.index, test: t.test, isAny: t.isAny, conversion: e, conversionIndex: e.index }; })); return { types: t.types.concat(a), name: i, hasAny: n, hasConversion: a.length > 0, restParam: t.restParam }; } function D(e) { return e.typeSet || (e.typeSet = new Set, e.types.forEach((function (t) { return e.typeSet.add(t.name); }))), e.typeSet; } function E(e) { var t = []; if ("string" != typeof e)
            throw new TypeError("Signatures must be strings"); var r = e.trim(); if ("" === r)
            return t; for (var n = r.split(","), i = 0; i < n.length; ++i) {
            var a = w(n[i].trim());
            if (a.restParam && i !== n.length - 1)
                throw new SyntaxError('Unexpected rest parameter "' + n[i] + '": only allowed for the last parameter');
            if (0 === a.types.length)
                return null;
            t.push(a);
        } return t; } function A(e) { var t = G(e); return !!t && t.restParam; } function S(e) { if (e && 0 !== e.types.length) {
            if (1 === e.types.length)
                return h(e.types[0].name).test;
            if (2 === e.types.length) {
                var t = h(e.types[0].name).test, r = h(e.types[1].name).test;
                return function (e) { return t(e) || r(e); };
            }
            var i = e.types.map((function (e) { return h(e.name).test; }));
            return function (e) { for (var t = 0; t < i.length; t++)
                if (i[t](e))
                    return !0; return !1; };
        } return n; } function C(e) { var t, r, n; if (A(e)) {
            var i = (t = H(e).map(S)).length, a = S(G(e));
            return function (e) { for (var r = 0; r < t.length; r++)
                if (!t[r](e[r]))
                    return !1; return function (e) { for (var t = i; t < e.length; t++)
                if (!a(e[t]))
                    return !1; return !0; }(e) && e.length >= i + 1; };
        } return 0 === e.length ? function (e) { return 0 === e.length; } : 1 === e.length ? (r = S(e[0]), function (e) { return r(e[0]) && 1 === e.length; }) : 2 === e.length ? (r = S(e[0]), n = S(e[1]), function (e) { return r(e[0]) && n(e[1]) && 2 === e.length; }) : (t = e.map(S), function (e) { for (var r = 0; r < t.length; r++)
            if (!t[r](e[r]))
                return !1; return e.length === t.length; }); } function M(e, t) { return t < e.length ? e[t] : A(e) ? G(e) : null; } function F(e, t) { var r = M(e, t); return r ? D(r) : new Set; } function O(e) { return null === e.conversion || void 0 === e.conversion; } function T(t, r) { var n = new Set; return t.forEach((function (t) { var i, a, o = e(F(t.params, r)); try {
            for (o.s(); !(a = o.n()).done;)
                i = a.value, n.add(i);
        }
        catch (e) {
            o.e(e);
        }
        finally {
            o.f();
        } })), n.has("any") ? ["any"] : Array.from(n); } function B(e, t, n) { var i, a, o, u = e || "unnamed", s = n, c = function () { var e = []; if (s.forEach((function (r) { var n = S(M(r.params, o)); (o < r.params.length || A(r.params)) && n(t[o]) && e.push(r); })), 0 === e.length) {
            if ((a = T(s, o)).length > 0) {
                var r = y(t[o]);
                return (i = new TypeError("Unexpected type of argument in function " + u + " (expected: " + a.join(" or ") + ", actual: " + r.join(" | ") + ", index: " + o + ")")).data = { category: "wrongType", fn: u, index: o, actual: r, expected: a }, { v: i };
            }
        }
        else
            s = e; }; for (o = 0; o < t.length; o++) {
            var f = c();
            if ("object" === r(f))
                return f.v;
        } var l = s.map((function (e) { return A(e.params) ? 1 / 0 : e.params.length; })); if (t.length < Math.min.apply(null, l))
            return a = T(s, o), (i = new TypeError("Too few arguments in function " + u + " (expected: " + a.join(" or ") + ", index: " + t.length + ")")).data = { category: "tooFewArgs", fn: u, index: t.length, expected: a }, i; var p = Math.max.apply(null, l); if (t.length > p)
            return (i = new TypeError("Too many arguments in function " + u + " (expected: " + p + ", actual: " + t.length + ")")).data = { category: "tooManyArgs", fn: u, index: t.length, expectedLength: p }, i; for (var m = [], h = 0; h < t.length; ++h)
            m.push(y(t[h]).join("|")); return (i = new TypeError('Arguments of type "' + m.join(", ") + '" do not match any of the defined signatures of function ' + u + ".")).data = { category: "mismatch", actual: m }, i; } function _(e) { for (var t = c.length + 1, r = 0; r < e.types.length; r++)
            O(e.types[r]) && (t = Math.min(t, e.types[r].typeIndex)); return t; } function k(e) { for (var t = p + 1, r = 0; r < e.types.length; r++)
            O(e.types[r]) || (t = Math.min(t, e.types[r].conversionIndex)); return t; } function I(e, t) { if (e.hasAny) {
            if (!t.hasAny)
                return 1;
        }
        else if (t.hasAny)
            return -1; if (e.restParam) {
            if (!t.restParam)
                return 1;
        }
        else if (t.restParam)
            return -1; if (e.hasConversion) {
            if (!t.hasConversion)
                return 1;
        }
        else if (t.hasConversion)
            return -1; var r = _(e) - _(t); if (r < 0)
            return -1; if (r > 0)
            return 1; var n = k(e) - k(t); return n < 0 ? -1 : n > 0 ? 1 : 0; } function R(t, r) { var n = t.params, i = r.params, a = G(n), o = G(i), u = A(n), s = A(i); if (u && a.hasAny) {
            if (!s || !o.hasAny)
                return 1;
        }
        else if (s && o.hasAny)
            return -1; var c, f, l = 0, p = 0, m = e(n); try {
            for (m.s(); !(f = m.n()).done;)
                (c = f.value).hasAny && ++l, c.hasConversion && ++p;
        }
        catch (e) {
            m.e(e);
        }
        finally {
            m.f();
        } var h, d = 0, v = 0, y = e(i); try {
            for (y.s(); !(h = y.n()).done;)
                (c = h.value).hasAny && ++d, c.hasConversion && ++v;
        }
        catch (e) {
            y.e(e);
        }
        finally {
            y.f();
        } if (l !== d)
            return l - d; if (u && a.hasConversion) {
            if (!s || !o.hasConversion)
                return 1;
        }
        else if (s && o.hasConversion)
            return -1; if (p !== v)
            return p - v; if (u) {
            if (!s)
                return 1;
        }
        else if (s)
            return -1; var g = (n.length - i.length) * (u ? -1 : 1); if (0 !== g)
            return g; for (var x, b = [], w = 0, N = 0; N < n.length; ++N) {
            var D = I(n[N], i[N]);
            b.push(D), w += D;
        } if (0 !== w)
            return w; for (var E = 0, S = b; E < S.length; E++)
            if (0 !== (x = S[E]))
                return x; return 0; } function z(e, t) { var r = t; if (e.some((function (e) { return e.hasConversion; }))) {
            var n = A(e), i = e.map(q);
            r = function () { for (var e = [], r = n ? arguments.length - 1 : arguments.length, a = 0; a < r; a++)
                e[a] = i[a](arguments[a]); return n && (e[r] = arguments[r].map(i[r])), t.apply(this, e); };
        } var a = r; if (A(e)) {
            var o = e.length - 1;
            a = function () { return r.apply(this, V(arguments, 0, o).concat([V(arguments, o)])); };
        } return a; } function q(e) { var t, r, n, i, a = [], o = []; switch (e.types.forEach((function (e) { e.conversion && (a.push(h(e.conversion.from).test), o.push(e.conversion.convert)); })), o.length) {
            case 0: return function (e) { return e; };
            case 1: return t = a[0], n = o[0], function (e) { return t(e) ? n(e) : e; };
            case 2: return t = a[0], r = a[1], n = o[0], i = o[1], function (e) { return t(e) ? n(e) : r(e) ? i(e) : e; };
            default: return function (e) { for (var t = 0; t < o.length; t++)
                if (a[t](e))
                    return o[t](e); return e; };
        } } function j(e) { return function e(t, r, n) { if (r < t.length) {
            var i = t[r], a = [];
            if (i.restParam) {
                var o = i.types.filter(O);
                o.length < i.types.length && a.push({ types: o, name: "..." + o.map((function (e) { return e.name; })).join("|"), hasAny: o.some((function (e) { return e.isAny; })), hasConversion: !1, restParam: !0 }), a.push(i);
            }
            else
                a = i.types.map((function (e) { return { types: [e], name: e.name, hasAny: e.isAny, hasConversion: e.conversion, restParam: !1 }; }));
            return u = a, s = function (i) { return e(t, r + 1, n.concat([i])); }, Array.prototype.concat.apply([], u.map(s));
        } var u, s; return [n]; }(e, 0, []); } function P(t, r, n) { var i, a, o = [], u = e(t); try {
            for (u.s(); !(a = u.n()).done;) {
                var s = n[i = a.value];
                if ("number" != typeof s)
                    throw new TypeError('No definition for referenced signature "' + i + '"');
                if ("function" != typeof (s = r[s]))
                    return !1;
                o.push(s);
            }
        }
        catch (e) {
            u.e(e);
        }
        finally {
            u.f();
        } return o; } function L(e, t, r) { for (var n = function (e) { return e.map((function (e) { return Y(e) ? W(e.referToSelf.callback) : J(e) ? Z(e.referTo.references, e.referTo.callback) : e; })); }(e), i = new Array(n.length).fill(!1), a = !0; a;) {
            a = !1;
            for (var o = !0, u = 0; u < n.length; ++u)
                if (!i[u]) {
                    var s = n[u];
                    if (Y(s))
                        n[u] = s.referToSelf.callback(r), n[u].referToSelf = s.referToSelf, i[u] = !0, o = !1;
                    else if (J(s)) {
                        var c = P(s.referTo.references, n, t);
                        c ? (n[u] = s.referTo.callback.apply(this, c), n[u].referTo = s.referTo, i[u] = !0, o = !1) : a = !0;
                    }
                }
            if (o && a)
                throw new SyntaxError("Circular reference detected in resolving typed.referTo");
        } return n; } function U(t, r) { if (m.createCount++, 0 === Object.keys(r).length)
            throw new SyntaxError("No signatures provided"); m.warnAgainstDeprecatedThis && function (e) { var t = /\bthis(\(|\.signatures\b)/; Object.keys(e).forEach((function (r) { var n = e[r]; if (t.test(n.toString()))
            throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead."); })); }(r); var n, o = [], u = [], s = {}, c = [], f = function () { if (!Object.prototype.hasOwnProperty.call(r, n))
            return "continue"; var t = E(n); if (!t)
            return "continue"; o.forEach((function (r) { if (function (t, r) { for (var n = Math.max(t.length, r.length), i = 0; i < n; i++) {
            var a, o = F(t, i), u = !1, s = void 0, c = e(F(r, i));
            try {
                for (c.s(); !(a = c.n()).done;)
                    if (s = a.value, o.has(s)) {
                        u = !0;
                        break;
                    }
            }
            catch (e) {
                c.e(e);
            }
            finally {
                c.f();
            }
            if (!u)
                return !1;
        } var f = t.length, l = r.length, p = A(t), m = A(r); return p ? m ? f === l : l >= f : m ? f >= l : f === l; }(r, t))
            throw new TypeError('Conflicting signatures "' + b(r) + '" and "' + b(t) + '".'); })), o.push(t); var i = u.length; u.push(r[n]); var a, f = void 0, l = e(j(t.map(N))); try {
            for (l.s(); !(a = l.n()).done;) {
                var p = b(f = a.value);
                c.push({ params: f, name: p, fn: i }), f.every((function (e) { return !e.hasConversion; })) && (s[p] = i);
            }
        }
        catch (e) {
            l.e(e);
        }
        finally {
            l.f();
        } }; for (n in r)
            f(); c.sort(R); var l, p = L(u, s, me); for (l in s)
            Object.prototype.hasOwnProperty.call(s, l) && (s[l] = p[s[l]]); for (var h = [], d = new Map, v = 0, y = c; v < y.length; v++)
            l = y[v], d.has(l.name) || (l.fn = p[l.fn], h.push(l), d.set(l.name, l)); for (var g = h[0] && h[0].params.length <= 2 && !A(h[0].params), x = h[1] && h[1].params.length <= 2 && !A(h[1].params), w = h[2] && h[2].params.length <= 2 && !A(h[2].params), D = h[3] && h[3].params.length <= 2 && !A(h[3].params), M = h[4] && h[4].params.length <= 2 && !A(h[4].params), O = h[5] && h[5].params.length <= 2 && !A(h[5].params), T = g && x && w && D && M && O, B = 0; B < h.length; ++B)
            h[B].test = C(h[B].params); for (var _ = g ? S(h[0].params[0]) : i, k = x ? S(h[1].params[0]) : i, I = w ? S(h[2].params[0]) : i, q = D ? S(h[3].params[0]) : i, P = M ? S(h[4].params[0]) : i, U = O ? S(h[5].params[0]) : i, $ = g ? S(h[0].params[1]) : i, H = x ? S(h[1].params[1]) : i, G = w ? S(h[2].params[1]) : i, V = D ? S(h[3].params[1]) : i, Z = M ? S(h[4].params[1]) : i, W = O ? S(h[5].params[1]) : i, J = 0; J < h.length; ++J)
            h[J].implementation = z(h[J].params, h[J].fn); var Y = g ? h[0].implementation : a, X = x ? h[1].implementation : a, Q = w ? h[2].implementation : a, K = D ? h[3].implementation : a, ee = M ? h[4].implementation : a, te = O ? h[5].implementation : a, re = g ? h[0].params.length : -1, ne = x ? h[1].params.length : -1, ie = w ? h[2].params.length : -1, ae = D ? h[3].params.length : -1, oe = M ? h[4].params.length : -1, ue = O ? h[5].params.length : -1, se = T ? 6 : 0, ce = h.length, fe = h.map((function (e) { return e.test; })), le = h.map((function (e) { return e.implementation; })), pe = function () { for (var e = se; e < ce; e++)
            if (fe[e](arguments))
                return le[e].apply(this, arguments); return m.onMismatch(t, arguments, h); }; function me(e, t) { return arguments.length === re && _(e) && $(t) ? Y.apply(this, arguments) : arguments.length === ne && k(e) && H(t) ? X.apply(this, arguments) : arguments.length === ie && I(e) && G(t) ? Q.apply(this, arguments) : arguments.length === ae && q(e) && V(t) ? K.apply(this, arguments) : arguments.length === oe && P(e) && Z(t) ? ee.apply(this, arguments) : arguments.length === ue && U(e) && W(t) ? te.apply(this, arguments) : pe.apply(this, arguments); } try {
            Object.defineProperty(me, "name", { value: t });
        }
        catch (e) { } return me.signatures = s, me._typedFunctionData = { signatures: h, signatureMap: d }, me; } function $(e, t, r) { throw B(e, t, r); } function H(e) { return V(e, 0, e.length - 1); } function G(e) { return e[e.length - 1]; } function V(e, t, r) { return Array.prototype.slice.call(e, t, r); } function Z(e, t) { return { referTo: { references: e, callback: t } }; } function W(e) { if ("function" != typeof e)
            throw new TypeError("Callback function expected as first argument"); return { referToSelf: { callback: e } }; } function J(e) { return e && "object" === r(e.referTo) && Array.isArray(e.referTo.references) && "function" == typeof e.referTo.callback; } function Y(e) { return e && "object" === r(e.referToSelf) && "function" == typeof e.referToSelf.callback; } function X(e, t) { if (!e)
            return t; if (t && t !== e) {
            var r = new Error("Function names do not match (expected: " + e + ", actual: " + t + ")");
            throw r.data = { actual: t, expected: e }, r;
        } return e; } function Q(e) { var t; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (g(e[r]) || "string" == typeof e[r].signature) && (t = X(t, e[r].name)); return t; } function K(e, t) { var r; for (r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                if (r in e && t[r] !== e[r]) {
                    var n = new Error('Signature "' + r + '" is defined twice');
                    throw n.data = { signature: r, sourceFunction: t[r], destFunction: e[r] }, n;
                }
                e[r] = t[r];
            } } v(), d(f); var ee = m; function te(e) { if (!e || "string" != typeof e.from || "string" != typeof e.to || "function" != typeof e.convert)
            throw new TypeError("Object with properties {from: string, to: string, convert: function} expected"); if (e.to === e.from)
            throw new SyntaxError('Illegal to define conversion from "' + e.from + '" to itself.'); } return m = function (e) { for (var t = "string" == typeof e, r = t ? e : "", n = {}, i = t ? 1 : 0; i < arguments.length; ++i) {
            var a = arguments[i], o = {}, s = void 0;
            if ("function" == typeof a ? (s = a.name, "string" == typeof a.signature ? o[a.signature] = a : g(a) && (o = a.signatures)) : u(a) && (o = a, t || (s = Q(a))), 0 === Object.keys(o).length) {
                var c = new TypeError("Argument to 'typed' at index " + i + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
                throw c.data = { index: i, argument: a }, c;
            }
            t || (r = X(r, s)), K(n, o);
        } return U(r || "", n); }, m.create = t, m.createCount = ee.createCount, m.onMismatch = $, m.throwMismatchError = $, m.createError = B, m.clear = v, m.clearConversions = function () { var t, r, n = e(c); try {
            for (n.s(); !(r = n.n()).done;)
                t = r.value, s.get(t).conversionsTo = [];
        }
        catch (e) {
            n.e(e);
        }
        finally {
            n.f();
        } p = 0; }, m.addTypes = d, m._findType = h, m.referTo = function () { var e = H(arguments).map((function (e) { return b(E(e)); })), t = G(arguments); if ("function" != typeof t)
            throw new TypeError("Callback function expected as last argument"); return Z(e, t); }, m.referToSelf = W, m.convert = function (e, t) { var r = h(t); if (r.test(e))
            return e; var n = r.conversionsTo; if (0 === n.length)
            throw new Error("There are no conversions to " + t + " defined."); for (var i = 0; i < n.length; i++)
            if (h(n[i].from).test(e))
                return n[i].convert(e); throw new Error("Cannot convert " + e + " to " + t); }, m.findSignature = x, m.find = function (e, t, r) { return x(e, t, r).implementation; }, m.isTypedFunction = g, m.warnAgainstDeprecatedThis = !0, m.addType = function (e, t) { var r = "any"; !1 !== t && s.has("Object") && (r = "Object"), m.addTypes([e], r); }, m.addConversion = function (e) { te(e); var t = h(e.to); if (!t.conversionsTo.every((function (t) { return t.from !== e.from; })))
            throw new Error('There is already a conversion from "' + e.from + '" to "' + t.name + '"'); t.conversionsTo.push({ from: e.from, convert: e.convert, index: p++ }); }, m.addConversions = function (e) { e.forEach(m.addConversion); }, m.removeConversion = function (e) { te(e); var t = h(e.to), r = function (e, t) { for (var r = 0; r < e.length; r++)
            if (t(e[r]))
                return e[r]; }(t.conversionsTo, (function (t) { return t.from === e.from; })); if (!r)
            throw new Error("Attempt to remove nonexistent conversion from " + e.from + " to " + e.to); if (r.convert !== e.convert)
            throw new Error("Conversion to remove does not match existing conversion"); var n = t.conversionsTo.indexOf(r); t.conversionsTo.splice(n, 1); }, m.resolve = function (e, t) { if (!g(e))
            throw new TypeError(o); for (var r = e._typedFunctionData.signatures, n = 0; n < r.length; ++n)
            if (r[n].test(t))
                return r[n]; return null; }, m; }();
    }(); } }, t = {}; function r(n) { var i = t[n]; if (void 0 !== i)
    return i.exports; var a = t[n] = { id: n, loaded: !1, exports: {} }; return e[n].call(a.exports, a, a.exports, r), a.loaded = !0, a.exports; } r.amdD = function () { throw new Error("define cannot be used indirect"); }, r.amdO = {}, r.d = (e, t) => { for (var n in t)
    r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, r.g = function () { if ("object" == typeof globalThis)
    return globalThis; try {
    return this || new Function("return this")();
}
catch (e) {
    if ("object" == typeof window)
        return window;
} }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e); var n = {}; return (() => {
    "use strict";
    r.d(n, { default: () => Ny });
    var e = {};
    function t(e) { return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, t(e); }
    function i(e) { return "number" == typeof e; }
    function a(e) { return !(!e || "object" !== t(e) || "function" != typeof e.constructor) && (!0 === e.isBigNumber && "object" === t(e.constructor.prototype) && !0 === e.constructor.prototype.isBigNumber || "function" == typeof e.constructor.isDecimal && !0 === e.constructor.isDecimal(e)); }
    function o(e) { return e && "object" === t(e) && !0 === Object.getPrototypeOf(e).isComplex || !1; }
    function u(e) { return e && "object" === t(e) && !0 === Object.getPrototypeOf(e).isFraction || !1; }
    function s(e) { return e && !0 === e.constructor.prototype.isUnit || !1; }
    function c(e) { return "string" == typeof e; }
    r.r(e), r.d(e, { createAbs: () => ea, createAccessorNode: () => tp, createAcos: () => mf, createAcosh: () => Bf, createAcot: () => kf, createAcoth: () => Rf, createAcsc: () => qf, createAcsch: () => Pf, createAdd: () => zl, createAddScalar: () => aa, createAnd: () => uc, createApply: () => ra, createApplyTransform: () => Gv, createArg: () => qo, createArrayNode: () => np, createAsec: () => Uf, createAsech: () => Hf, createAsin: () => Vf, createAsinh: () => Zf, createAssignmentNode: () => pp, createAtan: () => Wf, createAtan2: () => Yf, createAtanh: () => Qf, createAtomicMass: () => Nv, createAvogadro: () => Dv, createBellNumbers: () => Xh, createBigNumberClass: () => kr, createBignumber: () => mi, createBin: () => xs, createBitAnd: () => Oo, createBitNot: () => Bo, createBitOr: () => ko, createBitXor: () => zo, createBlockNode: () => hp, createBohrMagneton: () => rv, createBohrRadius: () => sv, createBoltzmann: () => Ev, createBoolean: () => pi, createCatalan: () => Kh, createCbrt: () => ua, createCeil: () => ya, createChain: () => Om, createChainClass: () => Dm, createClassicalElectronRadius: () => cv, createClone: () => Mn, createColumn: () => tu, createColumnTransform: () => Vv, createCombinations: () => hh, createCombinationsWithRep: () => yh, createCompare: () => cc, createCompareNatural: () => mc, createCompareText: () => vc, createCompile: () => Yp, createComplex: () => hi, createComplexClass: () => Rr, createComposition: () => td, createConcat: () => Qo, createConcatTransform: () => uy, createConditionalNode: () => vp, createConductanceQuantum: () => nv, createConj: () => Po, createConstantNode: () => Ap, createCos: () => el, createCosh: () => rl, createCot: () => nl, createCoth: () => al, createCoulomb: () => ev, createCount: () => nu, createCreateUnit: () => lf, createCross: () => au, createCsc: () => ol, createCsch: () => sl, createCtranspose: () => Ku, createCube: () => xa, createCumSum: () => eh, createCumSumTransform: () => my, createDeepEqual: () => Ic, createDenseMatrixClass: () => Sn, createDerivative: () => xd, createDet: () => Tm, createDeuteronMass: () => dv, createDiag: () => uu, createDiff: () => Eu, createDiffTransform: () => cy, createDistance: () => Ym, createDivide: () => Wm, createDivideScalar: () => Os, createDot: () => Ul, createDotDivide: () => $s, createDotMultiply: () => lo, createDotPow: () => Ls, createE: () => kd, createEfimovFactor: () => wv, createEigs: () => zm, createElectricConstant: () => Qd, createElectronMass: () => fv, createElementaryCharge: () => tv, createEqual: () => gc, createEqualScalar: () => oi, createEqualText: () => wc, createErf: () => os, createEvaluate: () => Qp, createExp: () => ba, createExpm: () => jm, createExpm1: () => Na, createFactorial: () => Oh, createFalse: () => Md, createFaraday: () => Av, createFermiCoupling: () => lv, createFft: () => ns, createFibonacciHeapClass: () => Zc, createFilter: () => su, createFilterTransform: () => Wv, createFineStructure: () => pv, createFirstRadiation: () => Sv, createFix: () => Sa, createFlatten: () => lu, createFloor: () => Oa, createForEach: () => mu, createForEachTransform: () => Yv, createFormat: () => gs, createFraction: () => di, createFractionClass: () => qr, createFunctionAssignmentNode: () => Mp, createFunctionNode: () => Vp, createGamma: () => Sh, createGasConstant: () => Mv, createGcd: () => Ra, createGetMatrixDataType: () => vu, createGravitationConstant: () => Wd, createGravity: () => zv, createHartreeEnergy: () => mv, createHasNumericValue: () => Wn, createHelp: () => Mm, createHelpClass: () => Nm, createHex: () => ws, createHypot: () => jl, createI: () => Ud, createIdentity: () => gu, createIfft: () => as, createIm: () => Lo, createImmutableDenseMatrixClass: () => Gc, createIndex: () => Gl, createIndexClass: () => Vc, createIndexNode: () => Op, createIndexTransform: () => Xv, createInfinity: () => Od, createIntersect: () => Xm, createInv: () => Bm, createInverseConductanceQuantum: () => iv, createInvmod: () => so, createIsInteger: () => zn, createIsNaN: () => ei, createIsNegative: () => Hn, createIsNumeric: () => Vn, createIsPositive: () => Yn, createIsPrime: () => Cs, createIsZero: () => Qn, createKldivergence: () => Bh, createKlitzing: () => uv, createKron: () => bu, createLN10: () => zd, createLN2: () => Rd, createLOG10E: () => jd, createLOG2E: () => qd, createLarger: () => Fc, createLargerEq: () => Bc, createLcm: () => ja, createLeafCount: () => nd, createLeftShift: () => rc, createLgamma: () => Mh, createLog: () => Is, createLog10: () => La, createLog1p: () => zs, createLog2: () => $a, createLoschmidt: () => Cv, createLsolve: () => Vs, createLsolveAll: () => Ys, createLup: () => rm, createLusolve: () => xm, createLyap: () => Zm, createMad: () => ah, createMagneticConstant: () => Xd, createMagneticFluxQuantum: () => av, createMap: () => wu, createMapTransform: () => Qv, createMatrix: () => yi, createMatrixClass: () => Pr, createMatrixFromColumns: () => Ai, createMatrixFromFunction: () => xi, createMatrixFromRows: () => Ni, createMax: () => $c, createMaxTransform: () => ty, createMean: () => rh, createMeanTransform: () => ry, createMedian: () => ih, createMin: () => Hc, createMinTransform: () => ny, createMod: () => Va, createMode: () => ms, createMolarMass: () => Iv, createMolarMassC12: () => Rv, createMolarPlanckConstant: () => Fv, createMolarVolume: () => Ov, createMultinomial: () => kh, createMultiply: () => Ja, createMultiplyScalar: () => Za, createNaN: () => Td, createNeutronMass: () => vv, createNode: () => Zl, createNorm: () => Ll, createNot: () => Wo, createNthRoot: () => Xa, createNthRoots: () => js, createNuclearMagneton: () => ov, createNull: () => Fd, createNumber: () => si, createNumeric: () => Ms, createObjectNode: () => Bp, createOct: () => bs, createOnes: () => Au, createOperatorNode: () => kp, createOr: () => Jo, createParenthesisNode: () => Rp, createParse: () => Wp, createParser: () => tm, createParserClass: () => Kp, createPartitionSelect: () => Pc, createPermutations: () => Rh, createPhi: () => Id, createPi: () => Bd, createPickRandom: () => Uh, createPinv: () => km, createPlanckCharge: () => Lv, createPlanckConstant: () => Jd, createPlanckLength: () => qv, createPlanckMass: () => jv, createPlanckTemperature: () => Uv, createPlanckTime: () => Pv, createPolynomialRoot: () => wm, createPow: () => Ts, createPrint: () => Ds, createProd: () => vs, createProtonMass: () => hv, createQr: () => nm, createQuantileSeq: () => ch, createQuantumOfCirculation: () => yv, createRandom: () => Gh, createRandomInt: () => Zh, createRange: () => Ou, createRangeClass: () => jr, createRangeNode: () => qp, createRangeTransform: () => iy, createRationalize: () => wd, createRe: () => Uo, createReducedPlanckConstant: () => Yd, createRelationalNode: () => Pp, createReplacer: () => Dd, createReshape: () => Bu, createResize: () => ku, createResolve: () => dd, createResultSet: () => Qe, createReviver: () => Nd, createRightArithShift: () => ic, createRightLogShift: () => oc, createRotate: () => Ru, createRotationMatrix: () => qu, createRound: () => ks, createRow: () => ju, createRowTransform: () => ay, createRydberg: () => gv, createSQRT1_2: () => Pd, createSQRT2: () => Ld, createSackurTetrode: () => Tv, createSchur: () => Gm, createSec: () => cl, createSech: () => ll, createSecondRadiation: () => Bv, createSetCartesian: () => gl, createSetDifference: () => bl, createSetDistinct: () => Nl, createSetIntersect: () => El, createSetIsSubset: () => Sl, createSetMultiplicity: () => Ml, createSetPowerset: () => Ol, createSetSize: () => Bl, createSetSymDifference: () => kl, createSetUnion: () => Rl, createSign: () => Ka, createSimplify: () => cd, createSimplifyConstant: () => pd, createSimplifyCore: () => hd, createSin: () => pl, createSinh: () => hl, createSize: () => Lu, createSlu: () => vm, createSmaller: () => Dc, createSmallerEq: () => Sc, createSort: () => Uc, createSpaClass: () => Wc, createSparse: () => cf, createSparseMatrixClass: () => ui, createSpeedOfLight: () => Zd, createSplitUnit: () => Ci, createSqrt: () => eo, createSqrtm: () => Lm, createSquare: () => ro, createSqueeze: () => $u, createStd: () => fh, createStdTransform: () => fy, createStefanBoltzmann: () => _v, createStirlingS2: () => Jh, createString: () => fi, createSubset: () => Gu, createSubsetTransform: () => oy, createSubtract: () => io, createSum: () => Qm, createSumTransform: () => ly, createSylvester: () => $m, createSymbolNode: () => Lp, createSymbolicEqual: () => yd, createTan: () => dl, createTanh: () => vl, createTau: () => _d, createThomsonCrossSection: () => xv, createTo: () => As, createTrace: () => $l, createTranspose: () => Xu, createTrue: () => Cd, createTypeOf: () => ri, createTyped: () => Ve, createUnaryMinus: () => Xi, createUnaryPlus: () => Ki, createUnequal: () => zc, createUnitClass: () => af, createUnitFunction: () => uf, createUppercaseE: () => Hd, createUppercasePi: () => $d, createUsolve: () => Ws, createUsolveAll: () => Qs, createVacuumImpedance: () => Kd, createVariance: () => sh, createVarianceTransform: () => dy, createVersion: () => Gd, createWeakMixingAngle: () => bv, createWienDisplacement: () => kv, createXgcd: () => oo, createXor: () => Yo, createZeros: () => ts }), r(4916), r(7601), r(9653), r(6699), r(5212), r(1539), r(2023), r(489), r(9753), r(3710), r(4603), r(8450), r(8386), r(9714), r(8309);
    var f = Array.isArray;
    function l(e) { return e && !0 === e.constructor.prototype.isMatrix || !1; }
    function p(e) { return Array.isArray(e) || l(e); }
    function m(e) { return e && e.isDenseMatrix && !0 === e.constructor.prototype.isMatrix || !1; }
    function h(e) { return e && e.isSparseMatrix && !0 === e.constructor.prototype.isMatrix || !1; }
    function d(e) { return e && !0 === e.constructor.prototype.isRange || !1; }
    function v(e) { return e && !0 === e.constructor.prototype.isIndex || !1; }
    function y(e) { return "boolean" == typeof e; }
    function g(e) { return e && !0 === e.constructor.prototype.isResultSet || !1; }
    function x(e) { return e && !0 === e.constructor.prototype.isHelp || !1; }
    function b(e) { return "function" == typeof e; }
    function w(e) { return e instanceof Date; }
    function N(e) { return e instanceof RegExp; }
    function D(e) { return !(!e || "object" !== t(e) || e.constructor !== Object || o(e) || u(e)); }
    function E(e) { return null === e; }
    function A(e) { return void 0 === e; }
    function S(e) { return e && !0 === e.isAccessorNode && !0 === e.constructor.prototype.isNode || !1; }
    function C(e) { return e && !0 === e.isArrayNode && !0 === e.constructor.prototype.isNode || !1; }
    function M(e) { return e && !0 === e.isAssignmentNode && !0 === e.constructor.prototype.isNode || !1; }
    function F(e) { return e && !0 === e.isBlockNode && !0 === e.constructor.prototype.isNode || !1; }
    function O(e) { return e && !0 === e.isConditionalNode && !0 === e.constructor.prototype.isNode || !1; }
    function T(e) { return e && !0 === e.isConstantNode && !0 === e.constructor.prototype.isNode || !1; }
    function B(e) { return T(e) || q(e) && 1 === e.args.length && T(e.args[0]) && "-+~".includes(e.op); }
    function _(e) { return e && !0 === e.isFunctionAssignmentNode && !0 === e.constructor.prototype.isNode || !1; }
    function k(e) { return e && !0 === e.isFunctionNode && !0 === e.constructor.prototype.isNode || !1; }
    function I(e) { return e && !0 === e.isIndexNode && !0 === e.constructor.prototype.isNode || !1; }
    function R(e) { return e && !0 === e.isNode && !0 === e.constructor.prototype.isNode || !1; }
    function z(e) { return e && !0 === e.isObjectNode && !0 === e.constructor.prototype.isNode || !1; }
    function q(e) { return e && !0 === e.isOperatorNode && !0 === e.constructor.prototype.isNode || !1; }
    function j(e) { return e && !0 === e.isParenthesisNode && !0 === e.constructor.prototype.isNode || !1; }
    function P(e) { return e && !0 === e.isRangeNode && !0 === e.constructor.prototype.isNode || !1; }
    function L(e) { return e && !0 === e.isRelationalNode && !0 === e.constructor.prototype.isNode || !1; }
    function U(e) { return e && !0 === e.isSymbolNode && !0 === e.constructor.prototype.isNode || !1; }
    function $(e) { return e && !0 === e.constructor.prototype.isChain || !1; }
    function H(e) { var r = t(e); return "object" === r ? null === e ? "null" : a(e) ? "BigNumber" : e.constructor && e.constructor.name ? e.constructor.name : "Object" : r; }
    var G = r(4814);
    function V(e) { return "boolean" == typeof e || !!isFinite(e) && e === Math.round(e); }
    r(2420), r(4914), r(658), r(197), r(3484), r(5890), r(2222), r(5306), r(4723), r(4678), r(2772), r(1249), r(1058), r(9600), r(7042), r(561), r(3299), r(9752), r(2376), r(3181), r(8621), r(160), r(970);
    var Z = Math.sign || function (e) { return e > 0 ? 1 : e < 0 ? -1 : 0; }, W = Math.log2 || function (e) { return Math.log(e) / Math.LN2; }, J = Math.log10 || function (e) { return Math.log(e) / Math.LN10; }, Y = Math.log1p || function (e) { return Math.log(e + 1); }, X = Math.cbrt || function (e) { if (0 === e)
        return e; var t, r = e < 0; return r && (e = -e), t = isFinite(e) ? (e / ((t = Math.exp(Math.log(e) / 3)) * t) + 2 * t) / 3 : e, r ? -t : t; }, Q = Math.expm1 || function (e) { return e >= 2e-4 || e <= -2e-4 ? Math.exp(e) - 1 : e + e * e / 2 + e * e * e / 6; };
    function K(e, t, r) { var n = { 2: "0b", 8: "0o", 16: "0x" }[t], i = ""; if (r) {
        if (r < 1)
            throw new Error("size must be in greater than 0");
        if (!V(r))
            throw new Error("size must be an integer");
        if (e > Math.pow(2, r - 1) - 1 || e < -Math.pow(2, r - 1))
            throw new Error("Value must be in range [-2^".concat(r - 1, ", 2^").concat(r - 1, "-1]"));
        if (!V(e))
            throw new Error("Value must be an integer");
        e < 0 && (e += Math.pow(2, r)), i = "i".concat(r);
    } var a = ""; return e < 0 && (e = -e, a = "-"), "".concat(a).concat(n).concat(e.toString(t)).concat(i); }
    function ee(e, t) { if ("function" == typeof t)
        return t(e); if (e === 1 / 0)
        return "Infinity"; if (e === -1 / 0)
        return "-Infinity"; if (isNaN(e))
        return "NaN"; var r, n, a = "auto"; if (t && (t.notation && (a = t.notation), i(t) ? r = t : i(t.precision) && (r = t.precision), t.wordSize && "number" != typeof (n = t.wordSize)))
        throw new Error('Option "wordSize" must be a number'); switch (a) {
        case "fixed": return re(e, r);
        case "exponential": return ne(e, r);
        case "engineering": return function (e, t) { if (isNaN(e) || !isFinite(e))
            return String(e); var r = ie(te(e), t), n = r.exponent, a = r.coefficients, o = n % 3 == 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3; if (i(t))
            for (; t > a.length || n - o + 1 > a.length;)
                a.push(0);
        else
            for (var u = Math.abs(n - o) - (a.length - 1), s = 0; s < u; s++)
                a.push(0); for (var c = Math.abs(n - o), f = 1; c > 0;)
            f++, c--; var l = a.slice(f).join(""), p = i(t) && l.length || l.match(/[1-9]/) ? "." + l : "", m = a.slice(0, f).join("") + p + "e" + (n >= 0 ? "+" : "") + o.toString(); return r.sign + m; }(e, r);
        case "bin": return K(e, 2, n);
        case "oct": return K(e, 8, n);
        case "hex": return K(e, 16, n);
        case "auto": return function (e, t, r) { if (isNaN(e) || !isFinite(e))
            return String(e); var n = r && void 0 !== r.lowerExp ? r.lowerExp : -3, i = r && void 0 !== r.upperExp ? r.upperExp : 5, a = te(e), o = t ? ie(a, t) : a; if (o.exponent < n || o.exponent >= i)
            return ne(e, t); var u = o.coefficients, s = o.exponent; u.length < t && (u = u.concat(ae(t - u.length))), u = u.concat(ae(s - u.length + 1 + (u.length < t ? t - u.length : 0))); var c = s > 0 ? s : 0; return c < (u = ae(-s).concat(u)).length - 1 && u.splice(c + 1, 0, "."), o.sign + u.join(""); }(e, r, t && t).replace(/((\.\d*?)(0+))($|e)/, (function () { var e = arguments[2], t = arguments[4]; return "." !== e ? e + t : t; }));
        default: throw new Error('Unknown notation "' + a + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
    } }
    function te(e) { var t = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/); if (!t)
        throw new SyntaxError("Invalid number " + e); var r = t[1], n = t[2], i = parseFloat(t[4] || "0"), a = n.indexOf("."); i += -1 !== a ? a - 1 : n.length - 1; var o = n.replace(".", "").replace(/^0*/, (function (e) { return i -= e.length, ""; })).replace(/0*$/, "").split("").map((function (e) { return parseInt(e); })); return 0 === o.length && (o.push(0), i++), { sign: r, coefficients: o, exponent: i }; }
    function re(e, t) { if (isNaN(e) || !isFinite(e))
        return String(e); var r = te(e), n = "number" == typeof t ? ie(r, r.exponent + 1 + t) : r, i = n.coefficients, a = n.exponent + 1, o = a + (t || 0); return i.length < o && (i = i.concat(ae(o - i.length))), a < 0 && (i = ae(1 - a).concat(i), a = 1), a < i.length && i.splice(a, 0, 0 === a ? "0." : "."), n.sign + i.join(""); }
    function ne(e, t) { if (isNaN(e) || !isFinite(e))
        return String(e); var r = te(e), n = t ? ie(r, t) : r, i = n.coefficients, a = n.exponent; i.length < t && (i = i.concat(ae(t - i.length))); var o = i.shift(); return n.sign + o + (i.length > 0 ? "." + i.join("") : "") + "e" + (a >= 0 ? "+" : "") + a; }
    function ie(e, t) { for (var r = { sign: e.sign, coefficients: e.coefficients, exponent: e.exponent }, n = r.coefficients; t <= 0;)
        n.unshift(0), r.exponent++, t++; if (n.length > t && n.splice(t, n.length - t)[0] >= 5) {
        var i = t - 1;
        for (n[i]++; 10 === n[i];)
            n.pop(), 0 === i && (n.unshift(0), r.exponent++, i++), n[--i]++;
    } return r; }
    function ae(e) { for (var t = [], r = 0; r < e; r++)
        t.push(0); return t; }
    var oe = Number.EPSILON || 2220446049250313e-31;
    function ue(e, t, r) { if (null == r)
        return e === t; if (e === t)
        return !0; if (isNaN(e) || isNaN(t))
        return !1; if (isFinite(e) && isFinite(t)) {
        var n = Math.abs(e - t);
        return n < oe || n <= Math.max(Math.abs(e), Math.abs(t)) * r;
    } return !1; }
    var se = Math.acosh || function (e) { return Math.log(Math.sqrt(e * e - 1) + e); }, ce = Math.asinh || function (e) { return Math.log(Math.sqrt(e * e + 1) + e); }, fe = Math.atanh || function (e) { return Math.log((1 + e) / (1 - e)) / 2; }, le = Math.cosh || function (e) { return (Math.exp(e) + Math.exp(-e)) / 2; }, pe = Math.sinh || function (e) { return (Math.exp(e) - Math.exp(-e)) / 2; }, me = Math.tanh || function (e) { var t = Math.exp(2 * e); return (t - 1) / (t + 1); };
    function he(e) { var r = t(e); if ("number" === r || "string" === r || "boolean" === r || null == e)
        return e; if ("function" == typeof e.clone)
        return e.clone(); if (Array.isArray(e))
        return e.map((function (e) { return he(e); })); if (e instanceof Date)
        return new Date(e.valueOf()); if (a(e))
        return e; if (e instanceof RegExp)
        throw new TypeError("Cannot clone " + e); return de(e, he); }
    function de(e, t) { var r = {}; for (var n in e)
        Ne(e, n) && (r[n] = t(e[n])); return r; }
    function ve(e, t) { for (var r in t)
        Ne(t, r) && (e[r] = t[r]); return e; }
    function ye(e, t) { if (Array.isArray(t))
        throw new TypeError("Arrays are not supported by deepExtend"); for (var r in t)
        if (Ne(t, r) && !(r in Object.prototype) && !(r in Function.prototype))
            if (t[r] && t[r].constructor === Object)
                void 0 === e[r] && (e[r] = {}), e[r] && e[r].constructor === Object ? ye(e[r], t[r]) : e[r] = t[r];
            else {
                if (Array.isArray(t[r]))
                    throw new TypeError("Arrays are not supported by deepExtend");
                e[r] = t[r];
            } return e; }
    function ge(e, t) { var r, n, i; if (Array.isArray(e)) {
        if (!Array.isArray(t))
            return !1;
        if (e.length !== t.length)
            return !1;
        for (n = 0, i = e.length; n < i; n++)
            if (!ge(e[n], t[n]))
                return !1;
        return !0;
    } if ("function" == typeof e)
        return e === t; if (e instanceof Object) {
        if (Array.isArray(t) || !(t instanceof Object))
            return !1;
        for (r in e)
            if (!(r in t) || !ge(e[r], t[r]))
                return !1;
        for (r in t)
            if (!(r in e))
                return !1;
        return !0;
    } return e === t; }
    function xe(e) { var t = {}; return be(e, t), t; }
    function be(e, r) { for (var n in e)
        if (Ne(e, n)) {
            var i = e[n];
            "object" === t(i) && null !== i ? be(i, r) : r[n] = i;
        } }
    function we(e, t, r) { var n, i = !0; Object.defineProperty(e, t, { get: function () { return i && (n = r(), i = !1), n; }, set: function (e) { n = e, i = !1; }, configurable: !0, enumerable: !0 }); }
    function Ne(e, t) { return e && Object.hasOwnProperty.call(e, t); }
    function De(e) { return Object.keys(e).map((function (t) { return e[t]; })); }
    function Ee(e, t, r, n) { function i(n) { var i = function (e, t) { for (var r = {}, n = 0; n < t.length; n++) {
        var i = t[n], a = e[i];
        void 0 !== a && (r[i] = a);
    } return r; }(n, t.map(Se)); return function (e, t, r) { if (!t.filter((function (e) { return !function (e) { return e && "?" === e[0]; }(e); })).every((function (e) { return void 0 !== r[e]; }))) {
        var n = t.filter((function (e) { return void 0 === r[e]; }));
        throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(n.map((function (e) { return '"'.concat(e, '"'); })).join(", "), "."));
    } }(e, t, n), r(i); } return i.isFactory = !0, i.fn = e, i.dependencies = t.slice().sort(), n && (i.meta = n), i; }
    function Ae(e) { return "function" == typeof e && "string" == typeof e.fn && Array.isArray(e.dependencies); }
    function Se(e) { return e && "?" === e[0] ? e.slice(1) : e; }
    function Ce(e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }
    function Me(e) { var r = function (e, r) { if ("object" !== t(e) || null === e)
        return e; var n = e[Symbol.toPrimitive]; if (void 0 !== n) {
        var i = n.call(e, r);
        if ("object" !== t(i))
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return String(e); }(e, "string"); return "symbol" === t(r) ? r : String(r); }
    function Fe(e, t) { for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Me(n.key), n);
    } }
    function Oe(e, t, r) { return t && Fe(e.prototype, t), r && Fe(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
    function Te(e, t) { if (Ie(e) && _e(e, t))
        return e[t]; if ("function" == typeof e[t] && ke(e, t))
        throw new Error('Cannot access method "' + t + '" as a property'); throw new Error('No access to property "' + t + '"'); }
    function Be(e, t, r) { if (Ie(e) && _e(e, t))
        return e[t] = r, r; throw new Error('No access to property "' + t + '"'); }
    function _e(e, r) { return !(!e || "object" !== t(e) || !Ne(Re, r) && (r in Object.prototype || r in Function.prototype)); }
    function ke(e, t) { return !(null == e || "function" != typeof e[t] || Ne(e, t) && Object.getPrototypeOf && t in Object.getPrototypeOf(e) || !Ne(ze, t) && (t in Object.prototype || t in Function.prototype)); }
    function Ie(e) { return "object" === t(e) && e && e.constructor === Object; }
    r(2707), r(9554), r(4747), r(7327), r(6541), r(9070), r(7941), r(6992), r(1532), r(8783), r(3948), r(1038), r(2526), r(1817), r(2165);
    var Re = { length: !0, name: !0 }, ze = { toString: !0, valueOf: !0, toLocaleString: !0 };
    function qe(e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return je(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? je(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }
    function je(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    var Pe = function () { function e(t) { Ce(this, e), this.wrappedObject = t; } return Oe(e, [{ key: "keys", value: function () { return Object.keys(this.wrappedObject); } }, { key: "get", value: function (e) { return Te(this.wrappedObject, e); } }, { key: "set", value: function (e, t) { return Be(this.wrappedObject, e, t), this; } }, { key: "has", value: function (e) { return e in this.wrappedObject; } }]), e; }();
    function Le() { return new Map; }
    function Ue(e) { if (!e)
        return Le(); if ($e(e))
        return e; if (D(e))
        return new Pe(e); throw new Error("createMap can create maps from objects or Maps"); }
    function $e(e) { return !!e && (e instanceof Map || e instanceof Pe || "function" == typeof e.set && "function" == typeof e.get && "function" == typeof e.keys && "function" == typeof e.has); }
    function He(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        r[n - 1] = arguments[n]; for (var i = 0, a = r; i < a.length; i++) {
        var o = a[i];
        if (o)
            if ($e(o)) {
                var u, s = qe(o.keys());
                try {
                    for (s.s(); !(u = s.n()).done;) {
                        var c = u.value;
                        e.set(c, o.get(c));
                    }
                }
                catch (e) {
                    s.e(e);
                }
                finally {
                    s.f();
                }
            }
            else if (D(o))
                for (var f = 0, l = Object.keys(o); f < l.length; f++) {
                    var p = l[f];
                    e.set(p, o[p]);
                }
    } return e; }
    var Ge = function () { return Ge = G.create, G; }, Ve = Ee("typed", ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], (function (e) { var t = e.BigNumber, r = e.Complex, n = e.DenseMatrix, B = e.Fraction, H = Ge(); return H.clear(), H.addTypes([{ name: "number", test: i }, { name: "Complex", test: o }, { name: "BigNumber", test: a }, { name: "Fraction", test: u }, { name: "Unit", test: s }, { name: "identifier", test: function (e) { return c && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])*$/.test(e); } }, { name: "string", test: c }, { name: "Chain", test: $ }, { name: "Array", test: f }, { name: "Matrix", test: l }, { name: "DenseMatrix", test: m }, { name: "SparseMatrix", test: h }, { name: "Range", test: d }, { name: "Index", test: v }, { name: "boolean", test: y }, { name: "ResultSet", test: g }, { name: "Help", test: x }, { name: "function", test: b }, { name: "Date", test: w }, { name: "RegExp", test: N }, { name: "null", test: E }, { name: "undefined", test: A }, { name: "AccessorNode", test: S }, { name: "ArrayNode", test: C }, { name: "AssignmentNode", test: M }, { name: "BlockNode", test: F }, { name: "ConditionalNode", test: O }, { name: "ConstantNode", test: T }, { name: "FunctionNode", test: k }, { name: "FunctionAssignmentNode", test: _ }, { name: "IndexNode", test: I }, { name: "Node", test: R }, { name: "ObjectNode", test: z }, { name: "OperatorNode", test: q }, { name: "ParenthesisNode", test: j }, { name: "RangeNode", test: P }, { name: "RelationalNode", test: L }, { name: "SymbolNode", test: U }, { name: "Map", test: $e }, { name: "Object", test: D }]), H.addConversions([{ from: "number", to: "BigNumber", convert: function (e) { if (t || Ze(e), e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length > 15)
                throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + e + "). Use function bignumber(x) to convert to BigNumber."); return new t(e); } }, { from: "number", to: "Complex", convert: function (e) { return r || We(e), new r(e, 0); } }, { from: "BigNumber", to: "Complex", convert: function (e) { return r || We(e), new r(e.toNumber(), 0); } }, { from: "Fraction", to: "BigNumber", convert: function (e) { throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction."); } }, { from: "Fraction", to: "Complex", convert: function (e) { return r || We(e), new r(e.valueOf(), 0); } }, { from: "number", to: "Fraction", convert: function (e) { B || Je(e); var t = new B(e); if (t.valueOf() !== e)
                throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + e + "). Use function fraction(x) to convert to Fraction."); return t; } }, { from: "string", to: "number", convert: function (e) { var t = Number(e); if (isNaN(t))
                throw new Error('Cannot convert "' + e + '" to a number'); return t; } }, { from: "string", to: "BigNumber", convert: function (e) { t || Ze(e); try {
                return new t(e);
            }
            catch (t) {
                throw new Error('Cannot convert "' + e + '" to BigNumber');
            } } }, { from: "string", to: "Fraction", convert: function (e) { B || Je(e); try {
                return new B(e);
            }
            catch (t) {
                throw new Error('Cannot convert "' + e + '" to Fraction');
            } } }, { from: "string", to: "Complex", convert: function (e) { r || We(e); try {
                return new r(e);
            }
            catch (t) {
                throw new Error('Cannot convert "' + e + '" to Complex');
            } } }, { from: "boolean", to: "number", convert: function (e) { return +e; } }, { from: "boolean", to: "BigNumber", convert: function (e) { return t || Ze(e), new t(+e); } }, { from: "boolean", to: "Fraction", convert: function (e) { return B || Je(e), new B(+e); } }, { from: "boolean", to: "string", convert: function (e) { return String(e); } }, { from: "Array", to: "Matrix", convert: function (e) { return n || function () { throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided"); }(), new n(e); } }, { from: "Matrix", to: "Array", convert: function (e) { return e.valueOf(); } }]), H.onMismatch = function (e, t, r) { var n = H.createError(e, t, r); if (["wrongType", "mismatch"].includes(n.data.category) && 1 === t.length && p(t[0]) && r.some((function (e) { return !e.params.includes(","); }))) {
        var i = new TypeError("Function '".concat(e, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(e, ")'."));
        throw i.data = n.data, i;
    } throw n; }, H.onMismatch = function (e, t, r) { var n = H.createError(e, t, r); if (["wrongType", "mismatch"].includes(n.data.category) && 1 === t.length && p(t[0]) && r.some((function (e) { return !e.params.includes(","); }))) {
        var i = new TypeError("Function '".concat(e, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(e, ")'."));
        throw i.data = n.data, i;
    } throw n; }, H; }));
    function Ze(e) { throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided")); }
    function We(e) { throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided")); }
    function Je(e) { throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided.")); }
    r(5735), r(3753);
    var Ye, Xe, Qe = Ee("ResultSet", [], (function () { function e(t) { if (!(this instanceof e))
        throw new SyntaxError("Constructor must be called with the new operator"); this.entries = t || []; } return e.prototype.type = "ResultSet", e.prototype.isResultSet = !0, e.prototype.valueOf = function () { return this.entries; }, e.prototype.toString = function () { return "[" + this.entries.join(", ") + "]"; }, e.prototype.toJSON = function () { return { mathjs: "ResultSet", entries: this.entries }; }, e.fromJSON = function (t) { return new e(t.entries); }, e; }), { isClass: !0 }), Ke = (r(8011), 9e15), et = 1e9, tt = "0123456789abcdef", rt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", nt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", it = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Ke, maxE: Ke, crypto: !1 }, at = !0, ot = "[DecimalError] ", ut = ot + "Invalid argument: ", st = ot + "Precision limit exceeded", ct = ot + "crypto unavailable", ft = "[object Decimal]", lt = Math.floor, pt = Math.pow, mt = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, ht = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, dt = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, vt = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, yt = 1e7, gt = rt.length - 1, xt = nt.length - 1, bt = { toStringTag: ft };
    function wt(e) { var t, r, n, i = e.length - 1, a = "", o = e[0]; if (i > 0) {
        for (a += o, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + "").length) && (a += Bt(r)), a += n;
        (r = 7 - (n = (o = e[t]) + "").length) && (a += Bt(r));
    }
    else if (0 === o)
        return "0"; for (; o % 10 == 0;)
        o /= 10; return a + o; }
    function Nt(e, t, r) { if (e !== ~~e || e < t || e > r)
        throw Error(ut + e); }
    function Dt(e, t, r, n) { var i, a, o, u; for (a = e[0]; a >= 10; a /= 10)
        --t; return --t < 0 ? (t += 7, i = 0) : (i = Math.ceil((t + 1) / 7), t %= 7), a = pt(10, 7 - t), u = e[i] % a | 0, null == n ? t < 3 ? (0 == t ? u = u / 100 | 0 : 1 == t && (u = u / 10 | 0), o = r < 4 && 99999 == u || r > 3 && 49999 == u || 5e4 == u || 0 == u) : o = (r < 4 && u + 1 == a || r > 3 && u + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == pt(10, t - 2) - 1 || (u == a / 2 || 0 == u) && 0 == (e[i + 1] / a / 100 | 0) : t < 4 ? (0 == t ? u = u / 1e3 | 0 : 1 == t ? u = u / 100 | 0 : 2 == t && (u = u / 10 | 0), o = (n || r < 4) && 9999 == u || !n && r > 3 && 4999 == u) : o = ((n || r < 4) && u + 1 == a || !n && r > 3 && u + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == pt(10, t - 3) - 1, o; }
    function Et(e, t, r) { for (var n, i, a = [0], o = 0, u = e.length; o < u;) {
        for (i = a.length; i--;)
            a[i] *= t;
        for (a[0] += tt.indexOf(e.charAt(o++)), n = 0; n < a.length; n++)
            a[n] > r - 1 && (void 0 === a[n + 1] && (a[n + 1] = 0), a[n + 1] += a[n] / r | 0, a[n] %= r);
    } return a.reverse(); }
    bt.absoluteValue = bt.abs = function () { var e = new this.constructor(this); return e.s < 0 && (e.s = 1), St(e); }, bt.ceil = function () { return St(new this.constructor(this), this.e + 1, 2); }, bt.clampedTo = bt.clamp = function (e, t) { var r = this, n = r.constructor; if (e = new n(e), t = new n(t), !e.s || !t.s)
        return new n(NaN); if (e.gt(t))
        throw Error(ut + t); return r.cmp(e) < 0 ? e : r.cmp(t) > 0 ? t : new n(r); }, bt.comparedTo = bt.cmp = function (e) { var t, r, n, i, a = this, o = a.d, u = (e = new a.constructor(e)).d, s = a.s, c = e.s; if (!o || !u)
        return s && c ? s !== c ? s : o === u ? 0 : !o ^ s < 0 ? 1 : -1 : NaN; if (!o[0] || !u[0])
        return o[0] ? s : u[0] ? -c : 0; if (s !== c)
        return s; if (a.e !== e.e)
        return a.e > e.e ^ s < 0 ? 1 : -1; for (t = 0, r = (n = o.length) < (i = u.length) ? n : i; t < r; ++t)
        if (o[t] !== u[t])
            return o[t] > u[t] ^ s < 0 ? 1 : -1; return n === i ? 0 : n > i ^ s < 0 ? 1 : -1; }, bt.cosine = bt.cos = function () { var e, t, r = this, n = r.constructor; return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + 7, n.rounding = 1, r = function (e, t) { var r, n, i; if (t.isZero())
        return t; (n = t.d.length) < 32 ? i = (1 / Ut(4, r = Math.ceil(n / 3))).toString() : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Lt(e, 1, t.times(i), new e(1)); for (var a = r; a--;) {
        var o = t.times(t);
        t = o.times(o).minus(o).times(8).plus(1);
    } return e.precision -= r, t; }(n, $t(n, r)), n.precision = e, n.rounding = t, St(2 == Xe || 3 == Xe ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN); }, bt.cubeRoot = bt.cbrt = function () { var e, t, r, n, i, a, o, u, s, c, f = this, l = f.constructor; if (!f.isFinite() || f.isZero())
        return new l(f); for (at = !1, (a = f.s * pt(f.s * f, 1 / 3)) && Math.abs(a) != 1 / 0 ? n = new l(a.toString()) : (r = wt(f.d), (a = ((e = f.e) - r.length + 1) % 3) && (r += 1 == a || -2 == a ? "0" : "00"), a = pt(r, 1 / 3), e = lt((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (n = new l(r = a == 1 / 0 ? "5e" + e : (r = a.toExponential()).slice(0, r.indexOf("e") + 1) + e)).s = f.s), o = (e = l.precision) + 3;;)
        if (c = (s = (u = n).times(u).times(u)).plus(f), n = At(c.plus(f).times(u), c.plus(s), o + 2, 1), wt(u.d).slice(0, o) === (r = wt(n.d)).slice(0, o)) {
            if ("9999" != (r = r.slice(o - 3, o + 1)) && (i || "4999" != r)) {
                +r && (+r.slice(1) || "5" != r.charAt(0)) || (St(n, e + 1, 1), t = !n.times(n).times(n).eq(f));
                break;
            }
            if (!i && (St(u, e + 1, 0), u.times(u).times(u).eq(f))) {
                n = u;
                break;
            }
            o += 4, i = 1;
        } return at = !0, St(n, e, l.rounding, t); }, bt.decimalPlaces = bt.dp = function () { var e, t = this.d, r = NaN; if (t) {
        if (r = 7 * ((e = t.length - 1) - lt(this.e / 7)), e = t[e])
            for (; e % 10 == 0; e /= 10)
                r--;
        r < 0 && (r = 0);
    } return r; }, bt.dividedBy = bt.div = function (e) { return At(this, new this.constructor(e)); }, bt.dividedToIntegerBy = bt.divToInt = function (e) { var t = this.constructor; return St(At(this, new t(e), 0, 1, 1), t.precision, t.rounding); }, bt.equals = bt.eq = function (e) { return 0 === this.cmp(e); }, bt.floor = function () { return St(new this.constructor(this), this.e + 1, 3); }, bt.greaterThan = bt.gt = function (e) { return this.cmp(e) > 0; }, bt.greaterThanOrEqualTo = bt.gte = function (e) { var t = this.cmp(e); return 1 == t || 0 === t; }, bt.hyperbolicCosine = bt.cosh = function () { var e, t, r, n, i, a = this, o = a.constructor, u = new o(1); if (!a.isFinite())
        return new o(a.s ? 1 / 0 : NaN); if (a.isZero())
        return u; r = o.precision, n = o.rounding, o.precision = r + Math.max(a.e, a.sd()) + 4, o.rounding = 1, (i = a.d.length) < 32 ? t = (1 / Ut(4, e = Math.ceil(i / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), a = Lt(o, 1, a.times(t), new o(1), !0); for (var s, c = e, f = new o(8); c--;)
        s = a.times(a), a = u.minus(s.times(f.minus(s.times(f)))); return St(a, o.precision = r, o.rounding = n, !0); }, bt.hyperbolicSine = bt.sinh = function () { var e, t, r, n, i = this, a = i.constructor; if (!i.isFinite() || i.isZero())
        return new a(i); if (t = a.precision, r = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, (n = i.d.length) < 3)
        i = Lt(a, 2, i, i, !0);
    else {
        e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e, i = Lt(a, 2, i = i.times(1 / Ut(5, e)), i, !0);
        for (var o, u = new a(5), s = new a(16), c = new a(20); e--;)
            o = i.times(i), i = i.times(u.plus(o.times(s.times(o).plus(c))));
    } return a.precision = t, a.rounding = r, St(i, t, r, !0); }, bt.hyperbolicTangent = bt.tanh = function () { var e, t, r = this, n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, At(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s); }, bt.inverseCosine = bt.acos = function () { var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, a = r.rounding; return -1 !== n ? 0 === n ? t.isNeg() ? Ot(r, i, a) : new r(0) : new r(NaN) : t.isZero() ? Ot(r, i + 4, a).times(.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = Ot(r, i + 4, a).times(.5), r.precision = i, r.rounding = a, e.minus(t)); }, bt.inverseHyperbolicCosine = bt.acosh = function () { var e, t, r = this, n = r.constructor; return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, at = !1, r = r.times(r).minus(1).sqrt().plus(r), at = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r); }, bt.inverseHyperbolicSine = bt.asinh = function () { var e, t, r = this, n = r.constructor; return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, at = !1, r = r.times(r).plus(1).sqrt().plus(r), at = !0, n.precision = e, n.rounding = t, r.ln()); }, bt.inverseHyperbolicTangent = bt.atanh = function () { var e, t, r, n, i = this, a = i.constructor; return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? St(new a(i), e, t, !0) : (a.precision = r = n - i.e, i = At(i.plus(1), new a(1).minus(i), r + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN); }, bt.inverseSine = bt.asin = function () { var e, t, r, n, i = this, a = i.constructor; return i.isZero() ? new a(i) : (t = i.abs().cmp(1), r = a.precision, n = a.rounding, -1 !== t ? 0 === t ? ((e = Ot(a, r + 4, n).times(.5)).s = i.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = n, i.times(2))); }, bt.inverseTangent = bt.atan = function () { var e, t, r, n, i, a, o, u, s, c = this, f = c.constructor, l = f.precision, p = f.rounding; if (c.isFinite()) {
        if (c.isZero())
            return new f(c);
        if (c.abs().eq(1) && l + 4 <= xt)
            return (o = Ot(f, l + 4, p).times(.25)).s = c.s, o;
    }
    else {
        if (!c.s)
            return new f(NaN);
        if (l + 4 <= xt)
            return (o = Ot(f, l + 4, p).times(.5)).s = c.s, o;
    } for (f.precision = u = l + 10, f.rounding = 1, e = r = Math.min(28, u / 7 + 2 | 0); e; --e)
        c = c.div(c.times(c).plus(1).sqrt().plus(1)); for (at = !1, t = Math.ceil(u / 7), n = 1, s = c.times(c), o = new f(c), i = c; -1 !== e;)
        if (i = i.times(s), a = o.minus(i.div(n += 2)), i = i.times(s), void 0 !== (o = a.plus(i.div(n += 2))).d[t])
            for (e = t; o.d[e] === a.d[e] && e--;)
                ; return r && (o = o.times(2 << r - 1)), at = !0, St(o, f.precision = l, f.rounding = p, !0); }, bt.isFinite = function () { return !!this.d; }, bt.isInteger = bt.isInt = function () { return !!this.d && lt(this.e / 7) > this.d.length - 2; }, bt.isNaN = function () { return !this.s; }, bt.isNegative = bt.isNeg = function () { return this.s < 0; }, bt.isPositive = bt.isPos = function () { return this.s > 0; }, bt.isZero = function () { return !!this.d && 0 === this.d[0]; }, bt.lessThan = bt.lt = function (e) { return this.cmp(e) < 0; }, bt.lessThanOrEqualTo = bt.lte = function (e) { return this.cmp(e) < 1; }, bt.logarithm = bt.log = function (e) { var t, r, n, i, a, o, u, s, c = this, f = c.constructor, l = f.precision, p = f.rounding; if (null == e)
        e = new f(10), t = !0;
    else {
        if (r = (e = new f(e)).d, e.s < 0 || !r || !r[0] || e.eq(1))
            return new f(NaN);
        t = e.eq(10);
    } if (r = c.d, c.s < 0 || !r || !r[0] || c.eq(1))
        return new f(r && !r[0] ? -1 / 0 : 1 != c.s ? NaN : r ? 0 : 1 / 0); if (t)
        if (r.length > 1)
            a = !0;
        else {
            for (i = r[0]; i % 10 == 0;)
                i /= 10;
            a = 1 !== i;
        } if (at = !1, o = zt(c, u = l + 5), n = t ? Ft(f, u + 10) : zt(e, u), Dt((s = At(o, n, u, 1)).d, i = l, p))
        do {
            if (o = zt(c, u += 10), n = t ? Ft(f, u + 10) : zt(e, u), s = At(o, n, u, 1), !a) {
                +wt(s.d).slice(i + 1, i + 15) + 1 == 1e14 && (s = St(s, l + 1, 0));
                break;
            }
        } while (Dt(s.d, i += 10, p)); return at = !0, St(s, l, p); }, bt.minus = bt.sub = function (e) { var t, r, n, i, a, o, u, s, c, f, l, p, m = this, h = m.constructor; if (e = new h(e), !m.d || !e.d)
        return m.s && e.s ? m.d ? e.s = -e.s : e = new h(e.d || m.s !== e.s ? m : NaN) : e = new h(NaN), e; if (m.s != e.s)
        return e.s = -e.s, m.plus(e); if (c = m.d, p = e.d, u = h.precision, s = h.rounding, !c[0] || !p[0]) {
        if (p[0])
            e.s = -e.s;
        else {
            if (!c[0])
                return new h(3 === s ? -0 : 0);
            e = new h(m);
        }
        return at ? St(e, u, s) : e;
    } if (r = lt(e.e / 7), f = lt(m.e / 7), c = c.slice(), a = f - r) {
        for ((l = a < 0) ? (t = c, a = -a, o = p.length) : (t = p, r = f, o = c.length), a > (n = Math.max(Math.ceil(u / 7), o) + 2) && (a = n, t.length = 1), t.reverse(), n = a; n--;)
            t.push(0);
        t.reverse();
    }
    else {
        for ((l = (n = c.length) < (o = p.length)) && (o = n), n = 0; n < o; n++)
            if (c[n] != p[n]) {
                l = c[n] < p[n];
                break;
            }
        a = 0;
    } for (l && (t = c, c = p, p = t, e.s = -e.s), o = c.length, n = p.length - o; n > 0; --n)
        c[o++] = 0; for (n = p.length; n > a;) {
        if (c[--n] < p[n]) {
            for (i = n; i && 0 === c[--i];)
                c[i] = yt - 1;
            --c[i], c[n] += yt;
        }
        c[n] -= p[n];
    } for (; 0 === c[--o];)
        c.pop(); for (; 0 === c[0]; c.shift())
        --r; return c[0] ? (e.d = c, e.e = Mt(c, r), at ? St(e, u, s) : e) : new h(3 === s ? -0 : 0); }, bt.modulo = bt.mod = function (e) { var t, r = this, n = r.constructor; return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? St(new n(r), n.precision, n.rounding) : (at = !1, 9 == n.modulo ? (t = At(r, e.abs(), 0, 3, 1)).s *= e.s : t = At(r, e, 0, n.modulo, 1), t = t.times(e), at = !0, r.minus(t)); }, bt.naturalExponential = bt.exp = function () { return Rt(this); }, bt.naturalLogarithm = bt.ln = function () { return zt(this); }, bt.negated = bt.neg = function () { var e = new this.constructor(this); return e.s = -e.s, St(e); }, bt.plus = bt.add = function (e) { var t, r, n, i, a, o, u, s, c, f, l = this, p = l.constructor; if (e = new p(e), !l.d || !e.d)
        return l.s && e.s ? l.d || (e = new p(e.d || l.s === e.s ? l : NaN)) : e = new p(NaN), e; if (l.s != e.s)
        return e.s = -e.s, l.minus(e); if (c = l.d, f = e.d, u = p.precision, s = p.rounding, !c[0] || !f[0])
        return f[0] || (e = new p(l)), at ? St(e, u, s) : e; if (a = lt(l.e / 7), n = lt(e.e / 7), c = c.slice(), i = a - n) {
        for (i < 0 ? (r = c, i = -i, o = f.length) : (r = f, n = a, o = c.length), i > (o = (a = Math.ceil(u / 7)) > o ? a + 1 : o + 1) && (i = o, r.length = 1), r.reverse(); i--;)
            r.push(0);
        r.reverse();
    } for ((o = c.length) - (i = f.length) < 0 && (i = o, r = f, f = c, c = r), t = 0; i;)
        t = (c[--i] = c[i] + f[i] + t) / yt | 0, c[i] %= yt; for (t && (c.unshift(t), ++n), o = c.length; 0 == c[--o];)
        c.pop(); return e.d = c, e.e = Mt(c, n), at ? St(e, u, s) : e; }, bt.precision = bt.sd = function (e) { var t, r = this; if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e)
        throw Error(ut + e); return r.d ? (t = Tt(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t; }, bt.round = function () { var e = this, t = e.constructor; return St(new t(e), e.e + 1, t.rounding); }, bt.sine = bt.sin = function () { var e, t, r = this, n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + 7, n.rounding = 1, r = function (e, t) { var r, n = t.d.length; if (n < 3)
        return t.isZero() ? t : Lt(e, 2, t, t); r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r, t = Lt(e, 2, t = t.times(1 / Ut(5, r)), t); for (var i, a = new e(5), o = new e(16), u = new e(20); r--;)
        i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(u)))); return t; }(n, $t(n, r)), n.precision = e, n.rounding = t, St(Xe > 2 ? r.neg() : r, e, t, !0)) : new n(NaN); }, bt.squareRoot = bt.sqrt = function () { var e, t, r, n, i, a, o = this, u = o.d, s = o.e, c = o.s, f = o.constructor; if (1 !== c || !u || !u[0])
        return new f(!c || c < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0); for (at = !1, 0 == (c = Math.sqrt(+o)) || c == 1 / 0 ? (((t = wt(u)).length + s) % 2 == 0 && (t += "0"), c = Math.sqrt(t), s = lt((s + 1) / 2) - (s < 0 || s % 2), n = new f(t = c == 1 / 0 ? "5e" + s : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + s)) : n = new f(c.toString()), r = (s = f.precision) + 3;;)
        if (n = (a = n).plus(At(o, a, r + 2, 1)).times(.5), wt(a.d).slice(0, r) === (t = wt(n.d)).slice(0, r)) {
            if ("9999" != (t = t.slice(r - 3, r + 1)) && (i || "4999" != t)) {
                +t && (+t.slice(1) || "5" != t.charAt(0)) || (St(n, s + 1, 1), e = !n.times(n).eq(o));
                break;
            }
            if (!i && (St(a, s + 1, 0), a.times(a).eq(o))) {
                n = a;
                break;
            }
            r += 4, i = 1;
        } return at = !0, St(n, s, f.rounding, e); }, bt.tangent = bt.tan = function () { var e, t, r = this, n = r.constructor; return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, (r = r.sin()).s = 1, r = At(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, St(2 == Xe || 4 == Xe ? r.neg() : r, e, t, !0)) : new n(NaN); }, bt.times = bt.mul = function (e) { var t, r, n, i, a, o, u, s, c, f = this, l = f.constructor, p = f.d, m = (e = new l(e)).d; if (e.s *= f.s, !(p && p[0] && m && m[0]))
        return new l(!e.s || p && !p[0] && !m || m && !m[0] && !p ? NaN : p && m ? 0 * e.s : e.s / 0); for (r = lt(f.e / 7) + lt(e.e / 7), (s = p.length) < (c = m.length) && (a = p, p = m, m = a, o = s, s = c, c = o), a = [], n = o = s + c; n--;)
        a.push(0); for (n = c; --n >= 0;) {
        for (t = 0, i = s + n; i > n;)
            u = a[i] + m[n] * p[i - n - 1] + t, a[i--] = u % yt | 0, t = u / yt | 0;
        a[i] = (a[i] + t) % yt | 0;
    } for (; !a[--o];)
        a.pop(); return t ? ++r : a.shift(), e.d = a, e.e = Mt(a, r), at ? St(e, l.precision, l.rounding) : e; }, bt.toBinary = function (e, t) { return Ht(this, 2, e, t); }, bt.toDecimalPlaces = bt.toDP = function (e, t) { var r = this, n = r.constructor; return r = new n(r), void 0 === e ? r : (Nt(e, 0, et), void 0 === t ? t = n.rounding : Nt(t, 0, 8), St(r, e + r.e + 1, t)); }, bt.toExponential = function (e, t) { var r, n = this, i = n.constructor; return void 0 === e ? r = Ct(n, !0) : (Nt(e, 0, et), void 0 === t ? t = i.rounding : Nt(t, 0, 8), r = Ct(n = St(new i(n), e + 1, t), !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r; }, bt.toFixed = function (e, t) { var r, n, i = this, a = i.constructor; return void 0 === e ? r = Ct(i) : (Nt(e, 0, et), void 0 === t ? t = a.rounding : Nt(t, 0, 8), r = Ct(n = St(new a(i), e + i.e + 1, t), !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r; }, bt.toFraction = function (e) { var t, r, n, i, a, o, u, s, c, f, l, p, m = this, h = m.d, d = m.constructor; if (!h)
        return new d(m); if (c = r = new d(1), n = s = new d(0), o = (a = (t = new d(n)).e = Tt(h) - m.e - 1) % 7, t.d[0] = pt(10, o < 0 ? 7 + o : o), null == e)
        e = a > 0 ? t : c;
    else {
        if (!(u = new d(e)).isInt() || u.lt(c))
            throw Error(ut + u);
        e = u.gt(t) ? a > 0 ? t : c : u;
    } for (at = !1, u = new d(wt(h)), f = d.precision, d.precision = a = 7 * h.length * 2; l = At(u, t, 0, 1, 1), 1 != (i = r.plus(l.times(n))).cmp(e);)
        r = n, n = i, i = c, c = s.plus(l.times(i)), s = i, i = t, t = u.minus(l.times(i)), u = i; return i = At(e.minus(r), n, 0, 1, 1), s = s.plus(i.times(c)), r = r.plus(i.times(n)), s.s = c.s = m.s, p = At(c, n, a, 1).minus(m).abs().cmp(At(s, r, a, 1).minus(m).abs()) < 1 ? [c, n] : [s, r], d.precision = f, at = !0, p; }, bt.toHexadecimal = bt.toHex = function (e, t) { return Ht(this, 16, e, t); }, bt.toNearest = function (e, t) { var r = this, n = r.constructor; if (r = new n(r), null == e) {
        if (!r.d)
            return r;
        e = new n(1), t = n.rounding;
    }
    else {
        if (e = new n(e), void 0 === t ? t = n.rounding : Nt(t, 0, 8), !r.d)
            return e.s ? r : e;
        if (!e.d)
            return e.s && (e.s = r.s), e;
    } return e.d[0] ? (at = !1, r = At(r, e, 0, t, 1).times(e), at = !0, St(r)) : (e.s = r.s, r = e), r; }, bt.toNumber = function () { return +this; }, bt.toOctal = function (e, t) { return Ht(this, 8, e, t); }, bt.toPower = bt.pow = function (e) { var t, r, n, i, a, o, u = this, s = u.constructor, c = +(e = new s(e)); if (!(u.d && e.d && u.d[0] && e.d[0]))
        return new s(pt(+u, c)); if ((u = new s(u)).eq(1))
        return u; if (n = s.precision, a = s.rounding, e.eq(1))
        return St(u, n, a); if ((t = lt(e.e / 7)) >= e.d.length - 1 && (r = c < 0 ? -c : c) <= 9007199254740991)
        return i = _t(s, u, r, n), e.s < 0 ? new s(1).div(i) : St(i, n, a); if ((o = u.s) < 0) {
        if (t < e.d.length - 1)
            return new s(NaN);
        if (0 == (1 & e.d[t]) && (o = 1), 0 == u.e && 1 == u.d[0] && 1 == u.d.length)
            return u.s = o, u;
    } return (t = 0 != (r = pt(+u, c)) && isFinite(r) ? new s(r + "").e : lt(c * (Math.log("0." + wt(u.d)) / Math.LN10 + u.e + 1))) > s.maxE + 1 || t < s.minE - 1 ? new s(t > 0 ? o / 0 : 0) : (at = !1, s.rounding = u.s = 1, r = Math.min(12, (t + "").length), (i = Rt(e.times(zt(u, n + r)), n)).d && Dt((i = St(i, n + 5, 1)).d, n, a) && (t = n + 10, +wt((i = St(Rt(e.times(zt(u, t + r)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 == 1e14 && (i = St(i, n + 1, 0))), i.s = o, at = !0, s.rounding = a, St(i, n, a)); }, bt.toPrecision = function (e, t) { var r, n = this, i = n.constructor; return void 0 === e ? r = Ct(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Nt(e, 1, et), void 0 === t ? t = i.rounding : Nt(t, 0, 8), r = Ct(n = St(new i(n), e, t), e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r; }, bt.toSignificantDigits = bt.toSD = function (e, t) { var r = this.constructor; return void 0 === e ? (e = r.precision, t = r.rounding) : (Nt(e, 1, et), void 0 === t ? t = r.rounding : Nt(t, 0, 8)), St(new r(this), e, t); }, bt.toString = function () { var e = this, t = e.constructor, r = Ct(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() && !e.isZero() ? "-" + r : r; }, bt.truncated = bt.trunc = function () { return St(new this.constructor(this), this.e + 1, 1); }, bt.valueOf = bt.toJSON = function () { var e = this, t = e.constructor, r = Ct(e, e.e <= t.toExpNeg || e.e >= t.toExpPos); return e.isNeg() ? "-" + r : r; };
    var At = function () { function e(e, t, r) { var n, i = 0, a = e.length; for (e = e.slice(); a--;)
        n = e[a] * t + i, e[a] = n % r | 0, i = n / r | 0; return i && e.unshift(i), e; } function t(e, t, r, n) { var i, a; if (r != n)
        a = r > n ? 1 : -1;
    else
        for (i = a = 0; i < r; i++)
            if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break;
            } return a; } function r(e, t, r, n) { for (var i = 0; r--;)
        e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r]; for (; !e[0] && e.length > 1;)
        e.shift(); } return function (n, i, a, o, u, s) { var c, f, l, p, m, h, d, v, y, g, x, b, w, N, D, E, A, S, C, M, F = n.constructor, O = n.s == i.s ? 1 : -1, T = n.d, B = i.d; if (!(T && T[0] && B && B[0]))
        return new F(n.s && i.s && (T ? !B || T[0] != B[0] : B) ? T && 0 == T[0] || !B ? 0 * O : O / 0 : NaN); for (s ? (m = 1, f = n.e - i.e) : (s = yt, m = 7, f = lt(n.e / m) - lt(i.e / m)), C = B.length, A = T.length, g = (y = new F(O)).d = [], l = 0; B[l] == (T[l] || 0); l++)
        ; if (B[l] > (T[l] || 0) && f--, null == a ? (N = a = F.precision, o = F.rounding) : N = u ? a + (n.e - i.e) + 1 : a, N < 0)
        g.push(1), h = !0;
    else {
        if (N = N / m + 2 | 0, l = 0, 1 == C) {
            for (p = 0, B = B[0], N++; (l < A || p) && N--; l++)
                D = p * s + (T[l] || 0), g[l] = D / B | 0, p = D % B | 0;
            h = p || l < A;
        }
        else {
            for ((p = s / (B[0] + 1) | 0) > 1 && (B = e(B, p, s), T = e(T, p, s), C = B.length, A = T.length), E = C, b = (x = T.slice(0, C)).length; b < C;)
                x[b++] = 0;
            (M = B.slice()).unshift(0), S = B[0], B[1] >= s / 2 && ++S;
            do {
                p = 0, (c = t(B, x, C, b)) < 0 ? (w = x[0], C != b && (w = w * s + (x[1] || 0)), (p = w / S | 0) > 1 ? (p >= s && (p = s - 1), 1 == (c = t(d = e(B, p, s), x, v = d.length, b = x.length)) && (p--, r(d, C < v ? M : B, v, s))) : (0 == p && (c = p = 1), d = B.slice()), (v = d.length) < b && d.unshift(0), r(x, d, b, s), -1 == c && (c = t(B, x, C, b = x.length)) < 1 && (p++, r(x, C < b ? M : B, b, s)), b = x.length) : 0 === c && (p++, x = [0]), g[l++] = p, c && x[0] ? x[b++] = T[E] || 0 : (x = [T[E]], b = 1);
            } while ((E++ < A || void 0 !== x[0]) && N--);
            h = void 0 !== x[0];
        }
        g[0] || g.shift();
    } if (1 == m)
        y.e = f, Ye = h;
    else {
        for (l = 1, p = g[0]; p >= 10; p /= 10)
            l++;
        y.e = l + f * m - 1, St(y, u ? a + y.e + 1 : a, o, h);
    } return y; }; }();
    function St(e, t, r, n) { var i, a, o, u, s, c, f, l, p, m = e.constructor; e: if (null != t) {
        if (!(l = e.d))
            return e;
        for (i = 1, u = l[0]; u >= 10; u /= 10)
            i++;
        if ((a = t - i) < 0)
            a += 7, o = t, s = (f = l[p = 0]) / pt(10, i - o - 1) % 10 | 0;
        else if ((p = Math.ceil((a + 1) / 7)) >= (u = l.length)) {
            if (!n)
                break e;
            for (; u++ <= p;)
                l.push(0);
            f = s = 0, i = 1, o = (a %= 7) - 7 + 1;
        }
        else {
            for (f = u = l[p], i = 1; u >= 10; u /= 10)
                i++;
            s = (o = (a %= 7) - 7 + i) < 0 ? 0 : f / pt(10, i - o - 1) % 10 | 0;
        }
        if (n = n || t < 0 || void 0 !== l[p + 1] || (o < 0 ? f : f % pt(10, i - o - 1)), c = r < 4 ? (s || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : s > 5 || 5 == s && (4 == r || n || 6 == r && (a > 0 ? o > 0 ? f / pt(10, i - o) : 0 : l[p - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !l[0])
            return l.length = 0, c ? (t -= e.e + 1, l[0] = pt(10, (7 - t % 7) % 7), e.e = -t || 0) : l[0] = e.e = 0, e;
        if (0 == a ? (l.length = p, u = 1, p--) : (l.length = p + 1, u = pt(10, 7 - a), l[p] = o > 0 ? (f / pt(10, i - o) % pt(10, o) | 0) * u : 0), c)
            for (;;) {
                if (0 == p) {
                    for (a = 1, o = l[0]; o >= 10; o /= 10)
                        a++;
                    for (o = l[0] += u, u = 1; o >= 10; o /= 10)
                        u++;
                    a != u && (e.e++, l[0] == yt && (l[0] = 1));
                    break;
                }
                if (l[p] += u, l[p] != yt)
                    break;
                l[p--] = 0, u = 1;
            }
        for (a = l.length; 0 === l[--a];)
            l.pop();
    } return at && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e; }
    function Ct(e, t, r) { if (!e.isFinite())
        return qt(e); var n, i = e.e, a = wt(e.d), o = a.length; return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Bt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Bt(-i - 1) + a, r && (n = r - o) > 0 && (a += Bt(n))) : i >= o ? (a += Bt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Bt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Bt(n))), a; }
    function Mt(e, t) { var r = e[0]; for (t *= 7; r >= 10; r /= 10)
        t++; return t; }
    function Ft(e, t, r) { if (t > gt)
        throw at = !0, r && (e.precision = r), Error(st); return St(new e(rt), t, 1, !0); }
    function Ot(e, t, r) { if (t > xt)
        throw Error(st); return St(new e(nt), t, r, !0); }
    function Tt(e) { var t = e.length - 1, r = 7 * t + 1; if (t = e[t]) {
        for (; t % 10 == 0; t /= 10)
            r--;
        for (t = e[0]; t >= 10; t /= 10)
            r++;
    } return r; }
    function Bt(e) { for (var t = ""; e--;)
        t += "0"; return t; }
    function _t(e, t, r, n) { var i, a = new e(1), o = Math.ceil(n / 7 + 4); for (at = !1;;) {
        if (r % 2 && Gt((a = a.times(t)).d, o) && (i = !0), 0 === (r = lt(r / 2))) {
            r = a.d.length - 1, i && 0 === a.d[r] && ++a.d[r];
            break;
        }
        Gt((t = t.times(t)).d, o);
    } return at = !0, a; }
    function kt(e) { return 1 & e.d[e.d.length - 1]; }
    function It(e, t, r) { for (var n, i = new e(t[0]), a = 0; ++a < t.length;) {
        if (!(n = new e(t[a])).s) {
            i = n;
            break;
        }
        i[r](n) && (i = n);
    } return i; }
    function Rt(e, t) { var r, n, i, a, o, u, s, c = 0, f = 0, l = 0, p = e.constructor, m = p.rounding, h = p.precision; if (!e.d || !e.d[0] || e.e > 17)
        return new p(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN); for (null == t ? (at = !1, s = h) : s = t, u = new p(.03125); e.e > -2;)
        e = e.times(u), l += 5; for (s += n = Math.log(pt(2, l)) / Math.LN10 * 2 + 5 | 0, r = a = o = new p(1), p.precision = s;;) {
        if (a = St(a.times(e), s, 1), r = r.times(++f), wt((u = o.plus(At(a, r, s, 1))).d).slice(0, s) === wt(o.d).slice(0, s)) {
            for (i = l; i--;)
                o = St(o.times(o), s, 1);
            if (null != t)
                return p.precision = h, o;
            if (!(c < 3 && Dt(o.d, s - n, m, c)))
                return St(o, p.precision = h, m, at = !0);
            p.precision = s += 10, r = a = u = new p(1), f = 0, c++;
        }
        o = u;
    } }
    function zt(e, t) { var r, n, i, a, o, u, s, c, f, l, p, m = 1, h = e, d = h.d, v = h.constructor, y = v.rounding, g = v.precision; if (h.s < 0 || !d || !d[0] || !h.e && 1 == d[0] && 1 == d.length)
        return new v(d && !d[0] ? -1 / 0 : 1 != h.s ? NaN : d ? 0 : h); if (null == t ? (at = !1, f = g) : f = t, v.precision = f += 10, n = (r = wt(d)).charAt(0), !(Math.abs(a = h.e) < 15e14))
        return c = Ft(v, f + 2, g).times(a + ""), h = zt(new v(n + "." + r.slice(1)), f - 10).plus(c), v.precision = g, null == t ? St(h, g, y, at = !0) : h; for (; n < 7 && 1 != n || 1 == n && r.charAt(1) > 3;)
        n = (r = wt((h = h.times(e)).d)).charAt(0), m++; for (a = h.e, n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1)), l = h, s = o = h = At(h.minus(1), h.plus(1), f, 1), p = St(h.times(h), f, 1), i = 3;;) {
        if (o = St(o.times(p), f, 1), wt((c = s.plus(At(o, new v(i), f, 1))).d).slice(0, f) === wt(s.d).slice(0, f)) {
            if (s = s.times(2), 0 !== a && (s = s.plus(Ft(v, f + 2, g).times(a + ""))), s = At(s, new v(m), f, 1), null != t)
                return v.precision = g, s;
            if (!Dt(s.d, f - 10, y, u))
                return St(s, v.precision = g, y, at = !0);
            v.precision = f += 10, c = o = h = At(l.minus(1), l.plus(1), f, 1), p = St(h.times(h), f, 1), i = u = 1;
        }
        s = c, i += 2;
    } }
    function qt(e) { return String(e.s * e.s / 0); }
    function jt(e, t) { var r, n, i; for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; 48 === t.charCodeAt(n); n++)
        ; for (i = t.length; 48 === t.charCodeAt(i - 1); --i)
        ; if (t = t.slice(n, i)) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % 7, r < 0 && (n += 7), n < i) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i;)
                e.d.push(+t.slice(n, n += 7));
            n = 7 - (t = t.slice(n)).length;
        }
        else
            n -= i;
        for (; n--;)
            t += "0";
        e.d.push(+t), at && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
    }
    else
        e.e = 0, e.d = [0]; return e; }
    function Pt(e, t) { var r, n, i, a, o, u, s, c, f; if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), vt.test(t))
            return jt(e, t);
    }
    else if ("Infinity" === t || "NaN" === t)
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e; if (ht.test(t))
        r = 16, t = t.toLowerCase();
    else if (mt.test(t))
        r = 2;
    else {
        if (!dt.test(t))
            throw Error(ut + t);
        r = 8;
    } for ((a = t.search(/p/i)) > 0 ? (s = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), o = (a = t.indexOf(".")) >= 0, n = e.constructor, o && (a = (u = (t = t.replace(".", "")).length) - a, i = _t(n, new n(r), a, 2 * a)), a = f = (c = Et(t, r, yt)).length - 1; 0 === c[a]; --a)
        c.pop(); return a < 0 ? new n(0 * e.s) : (e.e = Mt(c, f), e.d = c, at = !1, o && (e = At(e, i, 4 * u)), s && (e = e.times(Math.abs(s) < 54 ? pt(2, s) : Br.pow(2, s))), at = !0, e); }
    function Lt(e, t, r, n, i) { var a, o, u, s, c = e.precision, f = Math.ceil(c / 7); for (at = !1, s = r.times(r), u = new e(n);;) {
        if (o = At(u.times(s), new e(t++ * t++), c, 1), u = i ? n.plus(o) : n.minus(o), n = At(o.times(s), new e(t++ * t++), c, 1), void 0 !== (o = u.plus(n)).d[f]) {
            for (a = f; o.d[a] === u.d[a] && a--;)
                ;
            if (-1 == a)
                break;
        }
        a = u, u = n, n = o, o = a;
    } return at = !0, o.d.length = f + 1, o; }
    function Ut(e, t) { for (var r = e; --t;)
        r *= e; return r; }
    function $t(e, t) { var r, n = t.s < 0, i = Ot(e, e.precision, 1), a = i.times(.5); if ((t = t.abs()).lte(a))
        return Xe = n ? 4 : 1, t; if ((r = t.divToInt(i)).isZero())
        Xe = n ? 3 : 2;
    else {
        if ((t = t.minus(r.times(i))).lte(a))
            return Xe = kt(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Xe = kt(r) ? n ? 1 : 4 : n ? 3 : 2;
    } return t.minus(i).abs(); }
    function Ht(e, t, r, n) { var i, a, o, u, s, c, f, l, p, m = e.constructor, h = void 0 !== r; if (h ? (Nt(r, 1, et), void 0 === n ? n = m.rounding : Nt(n, 0, 8)) : (r = m.precision, n = m.rounding), e.isFinite()) {
        for (h ? (i = 2, 16 == t ? r = 4 * r - 3 : 8 == t && (r = 3 * r - 2)) : i = t, (o = (f = Ct(e)).indexOf(".")) >= 0 && (f = f.replace(".", ""), (p = new m(1)).e = f.length - o, p.d = Et(Ct(p), 10, i), p.e = p.d.length), a = s = (l = Et(f, 10, i)).length; 0 == l[--s];)
            l.pop();
        if (l[0]) {
            if (o < 0 ? a-- : ((e = new m(e)).d = l, e.e = a, l = (e = At(e, p, r, n, 0, i)).d, a = e.e, c = Ye), o = l[r], u = i / 2, c = c || void 0 !== l[r + 1], c = n < 4 ? (void 0 !== o || c) && (0 === n || n === (e.s < 0 ? 3 : 2)) : o > u || o === u && (4 === n || c || 6 === n && 1 & l[r - 1] || n === (e.s < 0 ? 8 : 7)), l.length = r, c)
                for (; ++l[--r] > i - 1;)
                    l[r] = 0, r || (++a, l.unshift(1));
            for (s = l.length; !l[s - 1]; --s)
                ;
            for (o = 0, f = ""; o < s; o++)
                f += tt.charAt(l[o]);
            if (h) {
                if (s > 1)
                    if (16 == t || 8 == t) {
                        for (o = 16 == t ? 4 : 3, --s; s % o; s++)
                            f += "0";
                        for (s = (l = Et(f, i, t)).length; !l[s - 1]; --s)
                            ;
                        for (o = 1, f = "1."; o < s; o++)
                            f += tt.charAt(l[o]);
                    }
                    else
                        f = f.charAt(0) + "." + f.slice(1);
                f = f + (a < 0 ? "p" : "p+") + a;
            }
            else if (a < 0) {
                for (; ++a;)
                    f = "0" + f;
                f = "0." + f;
            }
            else if (++a > s)
                for (a -= s; a--;)
                    f += "0";
            else
                a < s && (f = f.slice(0, a) + "." + f.slice(a));
        }
        else
            f = h ? "0p+0" : "0";
        f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
    }
    else
        f = qt(e); return e.s < 0 ? "-" + f : f; }
    function Gt(e, t) { if (e.length > t)
        return e.length = t, !0; }
    function Vt(e) { return new this(e).abs(); }
    function Zt(e) { return new this(e).acos(); }
    function Wt(e) { return new this(e).acosh(); }
    function Jt(e, t) { return new this(e).plus(t); }
    function Yt(e) { return new this(e).asin(); }
    function Xt(e) { return new this(e).asinh(); }
    function Qt(e) { return new this(e).atan(); }
    function Kt(e) { return new this(e).atanh(); }
    function er(e, t) { e = new this(e), t = new this(t); var r, n = this.precision, i = this.rounding, a = n + 4; return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (r = t.s < 0 ? Ot(this, n, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (r = Ot(this, a, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(At(e, t, a, 1)), t = Ot(this, a, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(At(e, t, a, 1)) : (r = Ot(this, a, 1).times(t.s > 0 ? .25 : .75)).s = e.s : r = new this(NaN), r; }
    function tr(e) { return new this(e).cbrt(); }
    function rr(e) { return St(e = new this(e), e.e + 1, 2); }
    function nr(e, t, r) { return new this(e).clamp(t, r); }
    function ir(e) { if (!e || "object" != typeof e)
        throw Error(ot + "Object expected"); var t, r, n, i = !0 === e.defaults, a = ["precision", 1, et, "rounding", 0, 8, "toExpNeg", -Ke, 0, "toExpPos", 0, Ke, "maxE", 0, Ke, "minE", -Ke, 0, "modulo", 0, 9]; for (t = 0; t < a.length; t += 3)
        if (r = a[t], i && (this[r] = it[r]), void 0 !== (n = e[r])) {
            if (!(lt(n) === n && n >= a[t + 1] && n <= a[t + 2]))
                throw Error(ut + r + ": " + n);
            this[r] = n;
        } if (r = "crypto", i && (this[r] = it[r]), void 0 !== (n = e[r])) {
        if (!0 !== n && !1 !== n && 0 !== n && 1 !== n)
            throw Error(ut + r + ": " + n);
        if (n) {
            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes)
                throw Error(ct);
            this[r] = !0;
        }
        else
            this[r] = !1;
    } return this; }
    function ar(e) { return new this(e).cos(); }
    function or(e) { return new this(e).cosh(); }
    function ur(e, t) { return new this(e).div(t); }
    function sr(e) { return new this(e).exp(); }
    function cr(e) { return St(e = new this(e), e.e + 1, 3); }
    function fr() { var e, t, r = new this(0); for (at = !1, e = 0; e < arguments.length;)
        if ((t = new this(arguments[e++])).d)
            r.d && (r = r.plus(t.times(t)));
        else {
            if (t.s)
                return at = !0, new this(1 / 0);
            r = t;
        } return at = !0, r.sqrt(); }
    function lr(e) { return e instanceof Br || e && e.toStringTag === ft || !1; }
    function pr(e) { return new this(e).ln(); }
    function mr(e, t) { return new this(e).log(t); }
    function hr(e) { return new this(e).log(2); }
    function dr(e) { return new this(e).log(10); }
    function vr() { return It(this, arguments, "lt"); }
    function yr() { return It(this, arguments, "gt"); }
    function gr(e, t) { return new this(e).mod(t); }
    function xr(e, t) { return new this(e).mul(t); }
    function br(e, t) { return new this(e).pow(t); }
    function wr(e) { var t, r, n, i, a = 0, o = new this(1), u = []; if (void 0 === e ? e = this.precision : Nt(e, 1, et), n = Math.ceil(e / 7), this.crypto)
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); a < n;)
                (i = t[a]) >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : u[a++] = i % 1e7;
        else {
            if (!crypto.randomBytes)
                throw Error(ct);
            for (t = crypto.randomBytes(n *= 4); a < n;)
                (i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (u.push(i % 1e7), a += 4);
            a = n / 4;
        }
    else
        for (; a < n;)
            u[a++] = 1e7 * Math.random() | 0; for (e %= 7, (n = u[--a]) && e && (i = pt(10, 7 - e), u[a] = (n / i | 0) * i); 0 === u[a]; a--)
        u.pop(); if (a < 0)
        r = 0, u = [0];
    else {
        for (r = -1; 0 === u[0]; r -= 7)
            u.shift();
        for (n = 1, i = u[0]; i >= 10; i /= 10)
            n++;
        n < 7 && (r -= 7 - n);
    } return o.e = r, o.d = u, o; }
    function Nr(e) { return St(e = new this(e), e.e + 1, this.rounding); }
    function Dr(e) { return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN; }
    function Er(e) { return new this(e).sin(); }
    function Ar(e) { return new this(e).sinh(); }
    function Sr(e) { return new this(e).sqrt(); }
    function Cr(e, t) { return new this(e).sub(t); }
    function Mr() { var e = 0, t = arguments, r = new this(t[e]); for (at = !1; r.s && ++e < t.length;)
        r = r.plus(t[e]); return at = !0, St(r, this.precision, this.rounding); }
    function Fr(e) { return new this(e).tan(); }
    function Or(e) { return new this(e).tanh(); }
    function Tr(e) { return St(e = new this(e), e.e + 1, 1); }
    bt[Symbol.for("nodejs.util.inspect.custom")] = bt.toString, bt[Symbol.toStringTag] = "Decimal";
    var Br = bt.constructor = function e(t) { var r, n, i; function a(e) { var t, r, n, i = this; if (!(i instanceof a))
        return new a(e); if (i.constructor = a, lr(e))
        return i.s = e.s, void (at ? !e.d || e.e > a.maxE ? (i.e = NaN, i.d = null) : e.e < a.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d)); if ("number" == (n = typeof e)) {
        if (0 === e)
            return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void (i.d = [0]);
        if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
            for (t = 0, r = e; r >= 10; r /= 10)
                t++;
            return void (at ? t > a.maxE ? (i.e = NaN, i.d = null) : t < a.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e]));
        }
        return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void (i.d = null)) : jt(i, e.toString());
    } if ("string" !== n)
        throw Error(ut + e); return 45 === (r = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === r && (e = e.slice(1)), i.s = 1), vt.test(e) ? jt(i, e) : Pt(i, e); } if (a.prototype = bt, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.EUCLID = 9, a.config = a.set = ir, a.clone = e, a.isDecimal = lr, a.abs = Vt, a.acos = Zt, a.acosh = Wt, a.add = Jt, a.asin = Yt, a.asinh = Xt, a.atan = Qt, a.atanh = Kt, a.atan2 = er, a.cbrt = tr, a.ceil = rr, a.clamp = nr, a.cos = ar, a.cosh = or, a.div = ur, a.exp = sr, a.floor = cr, a.hypot = fr, a.ln = pr, a.log = mr, a.log10 = dr, a.log2 = hr, a.max = vr, a.min = yr, a.mod = gr, a.mul = xr, a.pow = br, a.random = wr, a.round = Nr, a.sign = Dr, a.sin = Er, a.sinh = Ar, a.sqrt = Sr, a.sub = Cr, a.sum = Mr, a.tan = Fr, a.tanh = Or, a.trunc = Tr, void 0 === t && (t = {}), t && !0 !== t.defaults)
        for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < i.length;)
            t.hasOwnProperty(n = i[r++]) || (t[n] = this[n]); return a.config(t), a; }(it);
    rt = new Br(rt), nt = new Br(nt);
    const _r = Br;
    var kr = Ee("BigNumber", ["?on", "config"], (function (e) { var t = e.on, r = e.config, n = _r.clone({ precision: r.precision, modulo: _r.EUCLID }); return n.prototype = Object.create(n.prototype), n.prototype.type = "BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON = function () { return { mathjs: "BigNumber", value: this.toString() }; }, n.fromJSON = function (e) { return new n(e.value); }, t && t("config", (function (e, t) { e.precision !== t.precision && n.config({ precision: e.precision }); })), n; }), { isClass: !0 }), Ir = r(1977), Rr = Ee("Complex", [], (function () { return Object.defineProperty(Ir, "name", { value: "Complex" }), Ir.prototype.constructor = Ir, Ir.prototype.type = "Complex", Ir.prototype.isComplex = !0, Ir.prototype.toJSON = function () { return { mathjs: "Complex", re: this.re, im: this.im }; }, Ir.prototype.toPolar = function () { return { r: this.abs(), phi: this.arg() }; }, Ir.prototype.format = function (e) { var t = this.im, r = this.re, n = ee(this.re, e), a = ee(this.im, e), o = i(e) ? e : e ? e.precision : null; if (null !== o) {
        var u = Math.pow(10, -o);
        Math.abs(r / t) < u && (r = 0), Math.abs(t / r) < u && (t = 0);
    } return 0 === t ? n : 0 === r ? 1 === t ? "i" : -1 === t ? "-i" : a + "i" : t < 0 ? -1 === t ? n + " - i" : n + " - " + a.substring(1) + "i" : 1 === t ? n + " + i" : n + " + " + a + "i"; }, Ir.fromPolar = function (e) { switch (arguments.length) {
        case 1:
            var r = arguments[0];
            if ("object" === t(r))
                return Ir(r);
            throw new TypeError("Input has to be an object with r and phi keys.");
        case 2:
            var n = arguments[0], a = arguments[1];
            if (i(n)) {
                if (s(a) && a.hasBase("ANGLE") && (a = a.toNumber("rad")), i(a))
                    return new Ir({ r: n, phi: a });
                throw new TypeError("Phi is not a number nor an angle unit.");
            }
            throw new TypeError("Radius r is not a number.");
        default: throw new SyntaxError("Wrong number of arguments in function fromPolar");
    } }, Ir.prototype.valueOf = Ir.prototype.toString, Ir.fromJSON = function (e) { return new Ir(e); }, Ir.compare = function (e, t) { return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0; }, Ir; }), { isClass: !0 }), zr = r(5628), qr = Ee("Fraction", [], (function () { return Object.defineProperty(zr, "name", { value: "Fraction" }), zr.prototype.constructor = zr, zr.prototype.type = "Fraction", zr.prototype.isFraction = !0, zr.prototype.toJSON = function () { return { mathjs: "Fraction", n: this.s * this.n, d: this.d }; }, zr.fromJSON = function (e) { return new zr(e); }, zr; }), { isClass: !0 }), jr = (r(8674), Ee("Range", [], (function () { function e(t, r, n) { if (!(this instanceof e))
        throw new SyntaxError("Constructor must be called with the new operator"); var i = null != t, o = null != r, u = null != n; if (i)
        if (a(t))
            t = t.toNumber();
        else if ("number" != typeof t)
            throw new TypeError("Parameter start must be a number"); if (o)
        if (a(r))
            r = r.toNumber();
        else if ("number" != typeof r)
            throw new TypeError("Parameter end must be a number"); if (u)
        if (a(n))
            n = n.toNumber();
        else if ("number" != typeof n)
            throw new TypeError("Parameter step must be a number"); this.start = i ? parseFloat(t) : 0, this.end = o ? parseFloat(r) : 0, this.step = u ? parseFloat(n) : 1; } return e.prototype.type = "Range", e.prototype.isRange = !0, e.parse = function (t) { if ("string" != typeof t)
        return null; var r = t.split(":").map((function (e) { return parseFloat(e); })); if (r.some((function (e) { return isNaN(e); })))
        return null; switch (r.length) {
        case 2: return new e(r[0], r[1]);
        case 3: return new e(r[0], r[2], r[1]);
        default: return null;
    } }, e.prototype.clone = function () { return new e(this.start, this.end, this.step); }, e.prototype.size = function () { var e = 0, t = this.start, r = this.step, n = this.end - t; return Z(r) === Z(n) ? e = Math.ceil(n / r) : 0 === n && (e = 0), isNaN(e) && (e = 0), [e]; }, e.prototype.min = function () { var e = this.size()[0]; return e > 0 ? this.step > 0 ? this.start : this.start + (e - 1) * this.step : void 0; }, e.prototype.max = function () { var e = this.size()[0]; return e > 0 ? this.step > 0 ? this.start + (e - 1) * this.step : this.start : void 0; }, e.prototype.forEach = function (e) { var t = this.start, r = this.step, n = this.end, i = 0; if (r > 0)
        for (; t < n;)
            e(t, [i], this), t += r, i++;
    else if (r < 0)
        for (; t > n;)
            e(t, [i], this), t += r, i++; }, e.prototype.map = function (e) { var t = []; return this.forEach((function (r, n, i) { t[n[0]] = e(r, n, i); })), t; }, e.prototype.toArray = function () { var e = []; return this.forEach((function (t, r) { e[r[0]] = t; })), e; }, e.prototype.valueOf = function () { return this.toArray(); }, e.prototype.format = function (e) { var t = ee(this.start, e); return 1 !== this.step && (t += ":" + ee(this.step, e)), t + ":" + ee(this.end, e); }, e.prototype.toString = function () { return this.format(); }, e.prototype.toJSON = function () { return { mathjs: "Range", start: this.start, end: this.end, step: this.step }; }, e.fromJSON = function (t) { return new e(t.start, t.end, t.step); }, e; }), { isClass: !0 })), Pr = Ee("Matrix", [], (function () { function e() { if (!(this instanceof e))
        throw new SyntaxError("Constructor must be called with the new operator"); } return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.prototype.storage = function () { throw new Error("Cannot invoke storage on a Matrix interface"); }, e.prototype.datatype = function () { throw new Error("Cannot invoke datatype on a Matrix interface"); }, e.prototype.create = function (e, t) { throw new Error("Cannot invoke create on a Matrix interface"); }, e.prototype.subset = function (e, t, r) { throw new Error("Cannot invoke subset on a Matrix interface"); }, e.prototype.get = function (e) { throw new Error("Cannot invoke get on a Matrix interface"); }, e.prototype.set = function (e, t, r) { throw new Error("Cannot invoke set on a Matrix interface"); }, e.prototype.resize = function (e, t) { throw new Error("Cannot invoke resize on a Matrix interface"); }, e.prototype.reshape = function (e, t) { throw new Error("Cannot invoke reshape on a Matrix interface"); }, e.prototype.clone = function () { throw new Error("Cannot invoke clone on a Matrix interface"); }, e.prototype.size = function () { throw new Error("Cannot invoke size on a Matrix interface"); }, e.prototype.map = function (e, t) { throw new Error("Cannot invoke map on a Matrix interface"); }, e.prototype.forEach = function (e) { throw new Error("Cannot invoke forEach on a Matrix interface"); }, e.prototype[Symbol.iterator] = function () { throw new Error("Cannot iterate a Matrix interface"); }, e.prototype.toArray = function () { throw new Error("Cannot invoke toArray on a Matrix interface"); }, e.prototype.valueOf = function () { throw new Error("Cannot invoke valueOf on a Matrix interface"); }, e.prototype.format = function (e) { throw new Error("Cannot invoke format on a Matrix interface"); }, e.prototype.toString = function () { throw new Error("Cannot invoke toString on a Matrix interface"); }, e; }), { isClass: !0 }), Lr = r(4687);
    function Ur(e, t, r) { var n = new (0, e.constructor)(2), i = ""; if (r) {
        if (r < 1)
            throw new Error("size must be in greater than 0");
        if (!V(r))
            throw new Error("size must be an integer");
        if (e.greaterThan(n.pow(r - 1).sub(1)) || e.lessThan(n.pow(r - 1).mul(-1)))
            throw new Error("Value must be in range [-2^".concat(r - 1, ", 2^").concat(r - 1, "-1]"));
        if (!e.isInteger())
            throw new Error("Value must be an integer");
        e.lessThan(0) && (e = e.add(n.pow(r))), i = "i".concat(r);
    } switch (t) {
        case 2: return "".concat(e.toBinary()).concat(i);
        case 8: return "".concat(e.toOctal()).concat(i);
        case 16: return "".concat(e.toHexadecimal()).concat(i);
        default: throw new Error("Base ".concat(t, " not supported "));
    } }
    function $r(e, t) { return void 0 !== t ? e.toExponential(t - 1) : e.toExponential(); }
    function Hr(e, t) { var r = e.length - t.length, n = e.length; return e.substring(r, n) === t; }
    function Gr(e, r) { var n = function (e, r) { return "number" == typeof e ? ee(e, r) : a(e) ? function (e, t) { if ("function" == typeof t)
        return t(e); if (!e.isFinite())
        return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity"; var r, n, i = "auto"; if (void 0 !== t && (t.notation && (i = t.notation), "number" == typeof t ? r = t : t.precision && (r = t.precision), t.wordSize && "number" != typeof (n = t.wordSize)))
        throw new Error('Option "wordSize" must be a number'); switch (i) {
        case "fixed": return function (e, t) { return e.toFixed(t); }(e, r);
        case "exponential": return $r(e, r);
        case "engineering": return function (e, t) { var r = e.e, n = r % 3 == 0 ? r : r < 0 ? r - 3 - r % 3 : r - r % 3, i = e.mul(Math.pow(10, -n)), a = i.toPrecision(t); return -1 !== a.indexOf("e") && (a = i.toString()), a + "e" + (r >= 0 ? "+" : "") + n.toString(); }(e, r);
        case "bin": return Ur(e, 2, n);
        case "oct": return Ur(e, 8, n);
        case "hex": return Ur(e, 16, n);
        case "auto":
            var a = t && void 0 !== t.lowerExp ? t.lowerExp : -3, o = t && void 0 !== t.upperExp ? t.upperExp : 5;
            if (e.isZero())
                return "0";
            var u = e.toSignificantDigits(r), s = u.e;
            return (s >= a && s < o ? u.toFixed() : $r(e, r)).replace(/((\.\d*?)(0+))($|e)/, (function () { var e = arguments[2], t = arguments[4]; return "." !== e ? e + t : t; }));
        default: throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
    } }(e, r) : function (e) { return e && "object" === t(e) && "number" == typeof e.s && "number" == typeof e.n && "number" == typeof e.d || !1; }(e) ? r && "decimal" === r.fraction ? e.toString() : e.s * e.n + "/" + e.d : Array.isArray(e) ? Wr(e, r) : c(e) ? '"' + e + '"' : "function" == typeof e ? e.syntax ? String(e.syntax) : "function" : e && "object" === t(e) ? "function" == typeof e.format ? e.format(r) : e && e.toString(r) !== {}.toString() ? e.toString(r) : "{" + Object.keys(e).map((function (t) { return '"' + t + '": ' + Gr(e[t], r); })).join(", ") + "}" : String(e); }(e, r); return r && "object" === t(r) && "truncate" in r && n.length > r.truncate ? n.substring(0, r.truncate - 3) + "..." : n; }
    function Vr(e) { for (var t = String(e), r = "", n = 0; n < t.length;) {
        var i = t.charAt(n);
        "\\" === i ? (r += i, n++, "" !== (i = t.charAt(n)) && -1 !== '"\\/bfnrtu'.indexOf(i) || (r += "\\"), r += i) : r += '"' === i ? '\\"' : i, n++;
    } return '"' + r + '"'; }
    function Zr(e) { var t = String(e); return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function Wr(e, t) { if (Array.isArray(e)) {
        for (var r = "[", n = e.length, i = 0; i < n; i++)
            0 !== i && (r += ", "), r += Wr(e[i], t);
        return r + "]";
    } return Gr(e, t); }
    function Jr(e, t) { if (!c(e))
        throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + H(e) + ", index: 0)"); if (!c(t))
        throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + H(t) + ", index: 1)"); return e === t ? 0 : e > t ? 1 : -1; }
    function Yr(e, t, r) { if (!(this instanceof Yr))
        throw new SyntaxError("Constructor must be called with the new operator"); this.actual = e, this.expected = t, this.relation = r, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = (new Error).stack; }
    function Xr(e, t, r) { if (!(this instanceof Xr))
        throw new SyntaxError("Constructor must be called with the new operator"); this.index = e, arguments.length < 3 ? (this.min = 0, this.max = t) : (this.min = t, this.max = r), void 0 !== this.min && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = (new Error).stack; }
    function Qr(e) { for (var t = []; Array.isArray(e);)
        t.push(e.length), e = e[0]; return t; }
    function Kr(e, t, r) { var n, i = e.length; if (i !== t[r])
        throw new Yr(i, t[r]); if (r < t.length - 1) {
        var a = r + 1;
        for (n = 0; n < i; n++) {
            var o = e[n];
            if (!Array.isArray(o))
                throw new Yr(t.length - 1, t.length, "<");
            Kr(e[n], t, a);
        }
    }
    else
        for (n = 0; n < i; n++)
            if (Array.isArray(e[n]))
                throw new Yr(t.length + 1, t.length, ">"); }
    function en(e, t) { if (0 === t.length) {
        if (Array.isArray(e))
            throw new Yr(e.length, 0);
    }
    else
        Kr(e, t, 0); }
    function tn(e, t) { if (!i(e) || !V(e))
        throw new TypeError("Index must be an integer (value: " + e + ")"); if (e < 0 || "number" == typeof t && e >= t)
        throw new Xr(e, t); }
    function rn(e, t, r) { if (!Array.isArray(e) || !Array.isArray(t))
        throw new TypeError("Array expected"); if (0 === t.length)
        throw new Error("Resizing to scalar is not supported"); return t.forEach((function (e) { if (!i(e) || !V(e) || e < 0)
        throw new TypeError("Invalid size, must contain positive integers (size: " + Gr(t) + ")"); })), nn(e, t, 0, void 0 !== r ? r : 0), e; }
    function nn(e, t, r, n) { var i, a, o = e.length, u = t[r], s = Math.min(o, u); if (e.length = u, r < t.length - 1) {
        var c = r + 1;
        for (i = 0; i < s; i++)
            a = e[i], Array.isArray(a) || (a = [a], e[i] = a), nn(a, t, c, n);
        for (i = s; i < u; i++)
            a = [], e[i] = a, nn(a, t, c, n);
    }
    else {
        for (i = 0; i < s; i++)
            for (; Array.isArray(e[i]);)
                e[i] = e[i][0];
        for (i = s; i < u; i++)
            e[i] = n;
    } }
    function an(e, t) { var r = pn(e), n = r.length; if (!Array.isArray(e) || !Array.isArray(t))
        throw new TypeError("Array expected"); if (0 === t.length)
        throw new Yr(0, n, "!="); var i = un(t = on(t, n)); if (n !== i)
        throw new Yr(i, n, "!="); try {
        return function (e, t) { for (var r, n = e, i = t.length - 1; i > 0; i--) {
            var a = t[i];
            r = [];
            for (var o = n.length / a, u = 0; u < o; u++)
                r.push(n.slice(u * a, (u + 1) * a));
            n = r;
        } return n; }(r, t);
    }
    catch (e) {
        if (e instanceof Yr)
            throw new Yr(i, n, "!=");
        throw e;
    } }
    function on(e, t) { var r = un(e), n = e.slice(), i = e.indexOf(-1); if (e.indexOf(-1, i + 1) >= 0)
        throw new Error("More than one wildcard in sizes"); if (i >= 0) {
        if (t % r != 0)
            throw new Error("Could not replace wildcard, since " + t + " is no multiple of " + -r);
        n[i] = -t / r;
    } return n; }
    function un(e) { return e.reduce((function (e, t) { return e * t; }), 1); }
    function sn(e, t) { for (var r = t || Qr(e); Array.isArray(e) && 1 === e.length;)
        e = e[0], r.shift(); for (var n = r.length; 1 === r[n - 1];)
        n--; return n < r.length && (e = cn(e, n, 0), r.length = n), e; }
    function cn(e, t, r) { var n, i; if (r < t) {
        var a = r + 1;
        for (n = 0, i = e.length; n < i; n++)
            e[n] = cn(e[n], t, a);
    }
    else
        for (; Array.isArray(e);)
            e = e[0]; return e; }
    function fn(e, t, r, n) { var i = n || Qr(e); if (r)
        for (var a = 0; a < r; a++)
            e = [e], i.unshift(1); for (e = ln(e, t, 0); i.length < t;)
        i.push(1); return e; }
    function ln(e, t, r) { var n, i; if (Array.isArray(e)) {
        var a = r + 1;
        for (n = 0, i = e.length; n < i; n++)
            e[n] = ln(e[n], t, a);
    }
    else
        for (var o = r; o < t; o++)
            e = [e]; return e; }
    function pn(e) { if (!Array.isArray(e))
        return e; var t = []; return e.forEach((function e(r) { Array.isArray(r) ? r.forEach(e) : t.push(r); })), t; }
    function mn(e, t) { return Array.prototype.map.call(e, t); }
    function hn(e, t) { Array.prototype.forEach.call(e, t); }
    function dn(e, t) { if (1 !== Qr(e).length)
        throw new Error("Only one dimensional matrices supported"); return Array.prototype.filter.call(e, t); }
    function vn(e, t) { if (1 !== Qr(e).length)
        throw new Error("Only one dimensional matrices supported"); return Array.prototype.filter.call(e, (function (e) { return t.test(e); })); }
    function yn(e, t) { return Array.prototype.join.call(e, t); }
    function gn(e) { if (!Array.isArray(e))
        throw new TypeError("Array input expected"); if (0 === e.length)
        return e; var t = [], r = 0; t[0] = { value: e[0], identifier: 0 }; for (var n = 1; n < e.length; n++)
        e[n] === e[n - 1] ? r++ : r = 0, t.push({ value: e[n], identifier: r }); return t; }
    function xn(e) { if (!Array.isArray(e))
        throw new TypeError("Array input expected"); if (0 === e.length)
        return e; for (var t = [], r = 0; r < e.length; r++)
        t.push(e[r].value); return t; }
    function bn(e, t) { for (var r, n = 0, i = 0; i < e.length; i++) {
        var a = e[i], o = Array.isArray(a);
        if (0 === i && o && (n = a.length), o && a.length !== n)
            return;
        var u = o ? bn(a, t) : t(a);
        if (void 0 === r)
            r = u;
        else if (r !== u)
            return "mixed";
    } return r; }
    function wn(e, t) { return -1 !== e.indexOf(t); }
    function Nn(e) { var t = 0, r = 1, n = Object.create(null), i = Object.create(null), a = 0, o = function (e) { var o = i[e]; if (o && (delete n[o], delete i[e], --t, r === o)) {
        if (!t)
            return a = 0, void (r = 1);
        for (; !hasOwnProperty.call(n, ++r);)
            ;
    } }; return e = Math.abs(e), { hit: function (u) { var s = i[u], c = ++a; if (n[c] = u, i[u] = c, !s) {
            if (++t <= e)
                return;
            return u = n[r], o(u), u;
        } if (delete n[s], r === s)
            for (; !hasOwnProperty.call(n, ++r);)
                ; }, delete: o, clear: function () { t = a = 0, r = 1, n = Object.create(null), i = Object.create(null); } }; }
    function Dn(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = r.hasher, i = r.limit; return i = null == i ? Number.POSITIVE_INFINITY : i, n = null == n ? JSON.stringify : n, function r() { "object" !== t(r.cache) && (r.cache = { values: new Map, lru: Nn(i || Number.POSITIVE_INFINITY) }); for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o]; var u = n(a); if (r.cache.values.has(u))
        return r.cache.lru.hit(u), r.cache.values.get(u); var s = e.apply(e, a); return r.cache.values.set(u, s), r.cache.values.delete(r.cache.lru.hit(u)), s; }; }
    function En(e) { return Object.keys(e.signatures || {}).reduce((function (e, t) { var r = (t.match(/,/g) || []).length + 1; return Math.max(e, r); }), -1); }
    function An(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    r(5827), r(86), r(6977), r(5147), Yr.prototype = new RangeError, Yr.prototype.constructor = RangeError, Yr.prototype.name = "DimensionError", Yr.prototype.isDimensionError = !0, Xr.prototype = new RangeError, Xr.prototype.constructor = RangeError, Xr.prototype.name = "IndexError", Xr.prototype.isIndexError = !0, r(8862);
    var Sn = Ee("DenseMatrix", ["Matrix"], (function (e) { var t = e.Matrix; function r(e, t) { if (!(this instanceof r))
        throw new SyntaxError("Constructor must be called with the new operator"); if (t && !c(t))
        throw new Error("Invalid datatype: " + t); if (l(e))
        "DenseMatrix" === e.type ? (this._data = he(e._data), this._size = he(e._size), this._datatype = t || e._datatype) : (this._data = e.toArray(), this._size = e.size(), this._datatype = t || e._datatype);
    else if (e && f(e.data) && f(e.size))
        this._data = e.data, this._size = e.size, en(this._data, this._size), this._datatype = t || e.datatype;
    else if (f(e))
        this._data = d(e), this._size = Qr(this._data), en(this._data, this._size), this._datatype = t;
    else {
        if (e)
            throw new TypeError("Unsupported type of data (" + H(e) + ")");
        this._data = [], this._size = [0], this._datatype = t;
    } } function n(e, t) { if (!v(t))
        throw new TypeError("Invalid index"); if (t.isScalar())
        return e.get(t.min()); var n = t.size(); if (n.length !== e._size.length)
        throw new Yr(n.length, e._size.length); for (var i = t.min(), a = t.max(), u = 0, s = e._size.length; u < s; u++)
        tn(i[u], e._size[u]), tn(a[u], e._size[u]); return new r(o(e._data, t, n.length, 0), e._datatype); } function o(e, t, r, n) { var i = n === r - 1, a = t.dimension(n); return i ? a.map((function (t) { return tn(t, e.length), e[t]; })).valueOf() : a.map((function (i) { return tn(i, e.length), o(e[i], t, r, n + 1); })).valueOf(); } function u(e, t, r, n) { if (!t || !0 !== t.isIndex)
        throw new TypeError("Invalid index"); var i, a = t.size(), o = t.isScalar(); if (l(r) ? (i = r.size(), r = r.valueOf()) : i = Qr(r), o) {
        if (0 !== i.length)
            throw new TypeError("Scalar expected");
        e.set(t.min(), r, n);
    }
    else {
        if (a.length < e._size.length)
            throw new Yr(a.length, e._size.length, "<");
        if (i.length < a.length) {
            for (var u = 0, c = 0; 1 === a[u] && 1 === i[u];)
                u++;
            for (; 1 === a[u];)
                c++, u++;
            r = fn(r, a.length, c, i);
        }
        if (!ge(a, i))
            throw new Yr(a, i, ">");
        var f = t.max().map((function (e) { return e + 1; }));
        h(e, f, n);
        var p = a.length;
        s(e._data, t, r, p, 0);
    } return e; } function s(e, t, r, n, i) { var a = i === n - 1, o = t.dimension(i); a ? o.forEach((function (t, n) { tn(t), e[t] = r[n[0]]; })) : o.forEach((function (a, o) { tn(a), s(e[a], t, r[o[0]], n, i + 1); })); } function m(e, t, r) { if (0 === t.length) {
        for (var n = e._data; f(n);)
            n = n[0];
        return n;
    } return e._size = t.slice(0), e._data = rn(e._data, e._size, r), e; } function h(e, t, r) { for (var n = e._size.slice(0), i = !1; n.length < t.length;)
        n.push(0), i = !0; for (var a = 0, o = t.length; a < o; a++)
        t[a] > n[a] && (n[a] = t[a], i = !0); i && m(e, n, r); } function d(e) { for (var t = 0, r = e.length; t < r; t++) {
        var n = e[t];
        f(n) ? e[t] = d(n) : n && !0 === n.isMatrix && (e[t] = d(n.valueOf()));
    } return e; } return r.prototype = new t, r.prototype.createDenseMatrix = function (e, t) { return new r(e, t); }, Object.defineProperty(r, "name", { value: "DenseMatrix" }), r.prototype.constructor = r, r.prototype.type = "DenseMatrix", r.prototype.isDenseMatrix = !0, r.prototype.getDataType = function () { return bn(this._data, H); }, r.prototype.storage = function () { return "dense"; }, r.prototype.datatype = function () { return this._datatype; }, r.prototype.create = function (e, t) { return new r(e, t); }, r.prototype.subset = function (e, t, r) { switch (arguments.length) {
        case 1: return n(this, e);
        case 2:
        case 3: return u(this, e, t, r);
        default: throw new SyntaxError("Wrong number of arguments");
    } }, r.prototype.get = function (e) { if (!f(e))
        throw new TypeError("Array expected"); if (e.length !== this._size.length)
        throw new Yr(e.length, this._size.length); for (var t = 0; t < e.length; t++)
        tn(e[t], this._size[t]); for (var r = this._data, n = 0, i = e.length; n < i; n++) {
        var a = e[n];
        tn(a, r.length), r = r[a];
    } return r; }, r.prototype.set = function (e, t, r) { if (!f(e))
        throw new TypeError("Array expected"); if (e.length < this._size.length)
        throw new Yr(e.length, this._size.length, "<"); var n, i, a, o = e.map((function (e) { return e + 1; })); h(this, o, r); var u = this._data; for (n = 0, i = e.length - 1; n < i; n++)
        tn(a = e[n], u.length), u = u[a]; return tn(a = e[e.length - 1], u.length), u[a] = t, this; }, r.prototype.resize = function (e, t, r) { if (!p(e))
        throw new TypeError("Array or Matrix expected"); var n = e.valueOf().map((function (e) { return Array.isArray(e) && 1 === e.length ? e[0] : e; })); return m(r ? this.clone() : this, n, t); }, r.prototype.reshape = function (e, t) { var r = t ? this.clone() : this; r._data = an(r._data, e); var n = r._size.reduce((function (e, t) { return e * t; })); return r._size = on(e, n), r; }, r.prototype.clone = function () { return new r({ data: he(this._data), size: he(this._size), datatype: this._datatype }); }, r.prototype.size = function () { return this._size.slice(0); }, r.prototype.map = function (e) { var t = this, n = En(e), i = function r(i, a) { return f(i) ? i.map((function (e, t) { return r(e, a.concat(t)); })) : 1 === n ? e(i) : 2 === n ? e(i, a) : e(i, a, t); }(this._data, []); return new r(i, void 0 !== this._datatype ? bn(i, H) : void 0); }, r.prototype.forEach = function (e) { var t = this; !function r(n, i) { f(n) ? n.forEach((function (e, t) { r(e, i.concat(t)); })) : e(n, i, t); }(this._data, []); }, r.prototype[Symbol.iterator] = Lr.mark((function e() { var t; return Lr.wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return t = Lr.mark((function e(t, r) { var n; return Lr.wrap((function (i) { for (;;)
                switch (i.prev = i.next) {
                    case 0:
                        if (!f(t)) {
                            i.next = 9;
                            break;
                        }
                        n = 0;
                    case 2:
                        if (!(n < t.length)) {
                            i.next = 7;
                            break;
                        }
                        return i.delegateYield(e(t[n], r.concat(n)), "t0", 4);
                    case 4:
                        n++, i.next = 2;
                        break;
                    case 7:
                        i.next = 11;
                        break;
                    case 9: return i.next = 11, { value: t, index: r };
                    case 11:
                    case "end": return i.stop();
                } }), e); })), e.delegateYield(t(this._data, []), "t0", 2);
            case 2:
            case "end": return e.stop();
        } }), e, this); })), r.prototype.rows = function () { var e = []; if (2 !== this.size().length)
        throw new TypeError("Rows can only be returned for a 2D matrix."); var t, n = function (e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return An(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? An(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }(this._data); try {
        for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            e.push(new r([i], this._datatype));
        }
    }
    catch (e) {
        n.e(e);
    }
    finally {
        n.f();
    } return e; }, r.prototype.columns = function () { var e = this, t = [], n = this.size(); if (2 !== n.length)
        throw new TypeError("Rows can only be returned for a 2D matrix."); for (var i = this._data, a = function (n) { var a = i.map((function (e) { return [e[n]]; })); t.push(new r(a, e._datatype)); }, o = 0; o < n[1]; o++)
        a(o); return t; }, r.prototype.toArray = function () { return he(this._data); }, r.prototype.valueOf = function () { return this._data; }, r.prototype.format = function (e) { return Gr(this._data, e); }, r.prototype.toString = function () { return Gr(this._data); }, r.prototype.toJSON = function () { return { mathjs: "DenseMatrix", data: this._data, size: this._size, datatype: this._datatype }; }, r.prototype.diagonal = function (e) { if (e) {
        if (a(e) && (e = e.toNumber()), !i(e) || !V(e))
            throw new TypeError("The parameter k must be an integer number");
    }
    else
        e = 0; for (var t = e > 0 ? e : 0, n = e < 0 ? -e : 0, o = this._size[0], u = this._size[1], s = Math.min(o - n, u - t), c = [], f = 0; f < s; f++)
        c[f] = this._data[f + n][f + t]; return new r({ data: c, size: [s], datatype: this._datatype }); }, r.diagonal = function (e, t, n, o) { if (!f(e))
        throw new TypeError("Array expected, size parameter"); if (2 !== e.length)
        throw new Error("Only two dimensions matrix are supported"); if (e = e.map((function (e) { if (a(e) && (e = e.toNumber()), !i(e) || !V(e) || e < 1)
        throw new Error("Size values must be positive integers"); return e; })), n) {
        if (a(n) && (n = n.toNumber()), !i(n) || !V(n))
            throw new TypeError("The parameter k must be an integer number");
    }
    else
        n = 0; var u, s = n > 0 ? n : 0, c = n < 0 ? -n : 0, p = e[0], m = e[1], h = Math.min(p - c, m - s); if (f(t)) {
        if (t.length !== h)
            throw new Error("Invalid value array length");
        u = function (e) { return t[e]; };
    }
    else if (l(t)) {
        var d = t.size();
        if (1 !== d.length || d[0] !== h)
            throw new Error("Invalid matrix length");
        u = function (e) { return t.get([e]); };
    }
    else
        u = function () { return t; }; o || (o = a(u(0)) ? u(0).mul(0) : 0); var v = []; if (e.length > 0) {
        v = rn(v, e, o);
        for (var y = 0; y < h; y++)
            v[y + c][y + s] = u(y);
    } return new r({ data: v, size: [p, m] }); }, r.fromJSON = function (e) { return new r(e); }, r.prototype.swapRows = function (e, t) { if (!(i(e) && V(e) && i(t) && V(t)))
        throw new Error("Row index must be positive integers"); if (2 !== this._size.length)
        throw new Error("Only two dimensional matrix is supported"); return tn(e, this._size[0]), tn(t, this._size[0]), r._swapRows(e, t, this._data), this; }, r._swapRows = function (e, t, r) { var n = r[e]; r[e] = r[t], r[t] = n; }, r; }), { isClass: !0 }), Cn = "clone", Mn = Ee(Cn, ["typed"], (function (e) { return (0, e.typed)(Cn, { any: he }); }));
    function Fn(e) { var t, r, n = e.length, i = e[0].length, a = []; for (r = 0; r < i; r++) {
        var o = [];
        for (t = 0; t < n; t++)
            o.push(e[t][r]);
        a.push(o);
    } return a; }
    function On(e) { for (var t = 0; t < e.length; t++)
        if (p(e[t]))
            return !0; return !1; }
    function Tn(e, t) { l(e) && (e = e.valueOf()); for (var r = 0, n = e.length; r < n; r++) {
        var i = e[r];
        Array.isArray(i) ? Tn(i, t) : t(i);
    } }
    function Bn(e, t, r) { return e && "function" == typeof e.map ? e.map((function (e) { return Bn(e, t, r); })) : t(e); }
    function _n(e, t, r) { var n = Array.isArray(e) ? Qr(e) : e.size(); if (t < 0 || t >= n.length)
        throw new Xr(t, n.length); return l(e) ? e.create(kn(e.valueOf(), t, r)) : kn(e, t, r); }
    function kn(e, t, r) { var n, i, a, o; if (t <= 0) {
        if (Array.isArray(e[0])) {
            for (o = Fn(e), i = [], n = 0; n < o.length; n++)
                i[n] = kn(o[n], t - 1, r);
            return i;
        }
        for (a = e[0], n = 1; n < e.length; n++)
            a = r(a, e[n]);
        return a;
    } for (i = [], n = 0; n < e.length; n++)
        i[n] = kn(e[n], t - 1, r); return i; }
    function In(e, t, r, n, i, a, o, u, s, c, f) { var l, p, m, h, d = e._values, v = e._index, y = e._ptr; if (n)
        for (p = y[t], m = y[t + 1], l = p; l < m; l++)
            r[h = v[l]] !== a ? (r[h] = a, o.push(h), c ? (n[h] = s ? u(d[l], f) : u(f, d[l]), i[h] = a) : n[h] = d[l]) : (n[h] = s ? u(d[l], n[h]) : u(n[h], d[l]), i[h] = a);
    else
        for (p = y[t], m = y[t + 1], l = p; l < m; l++)
            r[h = v[l]] !== a ? (r[h] = a, o.push(h)) : i[h] = a; }
    var Rn = "isInteger", zn = Ee(Rn, ["typed"], (function (e) { var t = e.typed; return t(Rn, { number: V, BigNumber: function (e) { return e.isInt(); }, Fraction: function (e) { return 1 === e.d && isFinite(e.n); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), qn = (r(9826), r(4048), "number");
    function jn(e) { return e < 0; }
    function Pn(e) { return e > 0; }
    function Ln(e) { return 0 === e; }
    function Un(e) { return Number.isNaN(e); }
    jn.signature = qn, Pn.signature = qn, Ln.signature = qn, Un.signature = qn;
    var $n = "isNegative", Hn = Ee($n, ["typed"], (function (e) { var t = e.typed; return t($n, { number: jn, BigNumber: function (e) { return e.isNeg() && !e.isZero() && !e.isNaN(); }, Fraction: function (e) { return e.s < 0; }, Unit: t.referToSelf((function (e) { return function (r) { return t.find(e, r.valueType())(r.value); }; })), "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Gn = "isNumeric", Vn = Ee(Gn, ["typed"], (function (e) { var t = e.typed; return t(Gn, { "number | BigNumber | Fraction | boolean": function () { return !0; }, "Complex | Unit | string | null | undefined | Node": function () { return !1; }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Zn = (r(3210), "hasNumericValue"), Wn = Ee(Zn, ["typed", "isNumeric"], (function (e) { var t = e.typed, r = e.isNumeric; return t(Zn, { boolean: function () { return !0; }, string: function (e) { return e.trim().length > 0 && !isNaN(Number(e)); }, any: function (e) { return r(e); } }); })), Jn = "isPositive", Yn = Ee(Jn, ["typed"], (function (e) { var t = e.typed; return t(Jn, { number: Pn, BigNumber: function (e) { return !e.isNeg() && !e.isZero() && !e.isNaN(); }, Fraction: function (e) { return e.s > 0 && e.n > 0; }, Unit: t.referToSelf((function (e) { return function (r) { return t.find(e, r.valueType())(r.value); }; })), "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Xn = "isZero", Qn = Ee(Xn, ["typed"], (function (e) { var t = e.typed; return t(Xn, { number: Ln, BigNumber: function (e) { return e.isZero(); }, Complex: function (e) { return 0 === e.re && 0 === e.im; }, Fraction: function (e) { return 1 === e.d && 0 === e.n; }, Unit: t.referToSelf((function (e) { return function (r) { return t.find(e, r.valueType())(r.value); }; })), "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Kn = "isNaN", ei = Ee(Kn, ["typed"], (function (e) { return (0, e.typed)(Kn, { number: Un, BigNumber: function (e) { return e.isNaN(); }, Fraction: function (e) { return !1; }, Complex: function (e) { return e.isNaN(); }, Unit: function (e) { return Number.isNaN(e.value); }, "Array | Matrix": function (e) { return Bn(e, Number.isNaN); } }); })), ti = "typeOf", ri = Ee(ti, ["typed"], (function (e) { return (0, e.typed)(ti, { any: H }); }));
    function ni(e, t, r) { if (null == r)
        return e.eq(t); if (e.eq(t))
        return !0; if (e.isNaN() || t.isNaN())
        return !1; if (e.isFinite() && t.isFinite()) {
        var n = e.minus(t).abs();
        if (n.isZero())
            return !0;
        var i = e.constructor.max(e.abs(), t.abs());
        return n.lte(i.times(r));
    } return !1; }
    var ii = Ee("compareUnits", ["typed"], (function (e) { var t = e.typed; return { "Unit, Unit": t.referToSelf((function (e) { return function (r, n) { if (!r.equalBase(n))
            throw new Error("Cannot compare units with different base"); return t.find(e, [r.valueType(), n.valueType()])(r.value, n.value); }; })) }; })), ai = "equalScalar", oi = Ee(ai, ["typed", "config"], (function (e) { var t = e.typed, r = e.config, n = ii({ typed: t }); return t(ai, { "boolean, boolean": function (e, t) { return e === t; }, "number, number": function (e, t) { return ue(e, t, r.epsilon); }, "BigNumber, BigNumber": function (e, t) { return e.eq(t) || ni(e, t, r.epsilon); }, "Fraction, Fraction": function (e, t) { return e.equals(t); }, "Complex, Complex": function (e, t) { return function (e, t, r) { return ue(e.re, t.re, r) && ue(e.im, t.im, r); }(e, t, r.epsilon); } }, n); })), ui = (Ee(ai, ["typed", "config"], (function (e) { var t = e.typed, r = e.config; return t(ai, { "number, number": function (e, t) { return ue(e, t, r.epsilon); } }); })), Ee("SparseMatrix", ["typed", "equalScalar", "Matrix"], (function (e) { var t = e.typed, r = e.equalScalar, n = e.Matrix; function o(e, t) { if (!(this instanceof o))
        throw new SyntaxError("Constructor must be called with the new operator"); if (t && !c(t))
        throw new Error("Invalid datatype: " + t); if (l(e))
        !function (e, t, r) { "SparseMatrix" === t.type ? (e._values = t._values ? he(t._values) : void 0, e._index = he(t._index), e._ptr = he(t._ptr), e._size = he(t._size), e._datatype = r || t._datatype) : u(e, t.valueOf(), r || t._datatype); }(this, e, t);
    else if (e && f(e.index) && f(e.ptr) && f(e.size))
        this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size, this._datatype = t || e.datatype;
    else if (f(e))
        u(this, e, t);
    else {
        if (e)
            throw new TypeError("Unsupported type of data (" + H(e) + ")");
        this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = t;
    } } function u(e, n, i) { e._values = [], e._index = [], e._ptr = [], e._datatype = i; var a = n.length, o = 0, u = r, s = 0; if (c(i) && (u = t.find(r, [i, i]) || r, s = t.convert(0, i)), a > 0) {
        var l = 0;
        do {
            e._ptr.push(e._index.length);
            for (var p = 0; p < a; p++) {
                var m = n[p];
                if (f(m)) {
                    if (0 === l && o < m.length && (o = m.length), l < m.length) {
                        var h = m[l];
                        u(h, s) || (e._values.push(h), e._index.push(p));
                    }
                }
                else
                    0 === l && o < 1 && (o = 1), u(m, s) || (e._values.push(m), e._index.push(p));
            }
            l++;
        } while (l < o);
    } e._ptr.push(e._index.length), e._size = [a, o]; } function s(e, t) { if (!v(t))
        throw new TypeError("Invalid index"); if (t.isScalar())
        return e.get(t.min()); var r, n, i, a, u = t.size(); if (u.length !== e._size.length)
        throw new Yr(u.length, e._size.length); var s = t.min(), c = t.max(); for (r = 0, n = e._size.length; r < n; r++)
        tn(s[r], e._size[r]), tn(c[r], e._size[r]); var f = e._values, l = e._index, p = e._ptr, m = t.dimension(0), h = t.dimension(1), d = [], y = []; m.forEach((function (e, t) { y[e] = t[0], d[e] = !0; })); var g = f ? [] : void 0, x = [], b = []; return h.forEach((function (e) { for (b.push(x.length), i = p[e], a = p[e + 1]; i < a; i++)
        r = l[i], !0 === d[r] && (x.push(y[r]), g && g.push(f[i])); })), b.push(x.length), new o({ values: g, index: x, ptr: b, size: u, datatype: e._datatype }); } function m(e, t, r, n) { if (!t || !0 !== t.isIndex)
        throw new TypeError("Invalid index"); var i, a = t.size(), o = t.isScalar(); if (l(r) ? (i = r.size(), r = r.toArray()) : i = Qr(r), o) {
        if (0 !== i.length)
            throw new TypeError("Scalar expected");
        e.set(t.min(), r, n);
    }
    else {
        if (1 !== a.length && 2 !== a.length)
            throw new Yr(a.length, e._size.length, "<");
        if (i.length < a.length) {
            for (var u = 0, s = 0; 1 === a[u] && 1 === i[u];)
                u++;
            for (; 1 === a[u];)
                s++, u++;
            r = fn(r, a.length, s, i);
        }
        if (!ge(a, i))
            throw new Yr(a, i, ">");
        if (1 === a.length)
            t.dimension(0).forEach((function (t, i) { tn(t), e.set([t, 0], r[i[0]], n); }));
        else {
            var c = t.dimension(0), f = t.dimension(1);
            c.forEach((function (t, i) { tn(t), f.forEach((function (a, o) { tn(a), e.set([t, a], r[i[0]][o[0]], n); })); }));
        }
    } return e; } function h(e, t, r, n) { if (r - t == 0)
        return r; for (var i = t; i < r; i++)
        if (n[i] === e)
            return i; return t; } function d(e, t, r, n, i, a, o) { i.splice(e, 0, n), a.splice(e, 0, t); for (var u = r + 1; u < o.length; u++)
        o[u]++; } function y(e, n, i, a) { var o = a || 0, u = r, s = 0; c(e._datatype) && (u = t.find(r, [e._datatype, e._datatype]) || r, s = t.convert(0, e._datatype), o = t.convert(o, e._datatype)); var f, l, p, m = !u(o, s), h = e._size[0], d = e._size[1]; if (i > d) {
        for (l = d; l < i; l++)
            if (e._ptr[l] = e._values.length, m)
                for (f = 0; f < h; f++)
                    e._values.push(o), e._index.push(f);
        e._ptr[i] = e._values.length;
    }
    else
        i < d && (e._ptr.splice(i + 1, d - i), e._values.splice(e._ptr[i], e._values.length), e._index.splice(e._ptr[i], e._index.length)); if (d = i, n > h) {
        if (m) {
            var v = 0;
            for (l = 0; l < d; l++) {
                e._ptr[l] = e._ptr[l] + v, p = e._ptr[l + 1] + v;
                var y = 0;
                for (f = h; f < n; f++, y++)
                    e._values.splice(p + y, 0, o), e._index.splice(p + y, 0, f), v++;
            }
            e._ptr[d] = e._values.length;
        }
    }
    else if (n < h) {
        var g = 0;
        for (l = 0; l < d; l++) {
            e._ptr[l] = e._ptr[l] - g;
            var x = e._ptr[l], b = e._ptr[l + 1] - g;
            for (p = x; p < b; p++)
                (f = e._index[p]) > n - 1 && (e._values.splice(p, 1), e._index.splice(p, 1), g++);
        }
        e._ptr[l] = e._values.length;
    } return e._size[0] = n, e._size[1] = i, e; } function g(e, t, r, n, i) { var a, o, u = n[0], s = n[1], c = []; for (a = 0; a < u; a++)
        for (c[a] = [], o = 0; o < s; o++)
            c[a][o] = 0; for (o = 0; o < s; o++)
        for (var f = r[o], l = r[o + 1], p = f; p < l; p++)
            c[a = t[p]][o] = e ? i ? he(e[p]) : e[p] : 1; return c; } return o.prototype = new n, o.prototype.createSparseMatrix = function (e, t) { return new o(e, t); }, Object.defineProperty(o, "name", { value: "SparseMatrix" }), o.prototype.constructor = o, o.prototype.type = "SparseMatrix", o.prototype.isSparseMatrix = !0, o.prototype.getDataType = function () { return bn(this._values, H); }, o.prototype.storage = function () { return "sparse"; }, o.prototype.datatype = function () { return this._datatype; }, o.prototype.create = function (e, t) { return new o(e, t); }, o.prototype.density = function () { var e = this._size[0], t = this._size[1]; return 0 !== e && 0 !== t ? this._index.length / (e * t) : 0; }, o.prototype.subset = function (e, t, r) { if (!this._values)
        throw new Error("Cannot invoke subset on a Pattern only matrix"); switch (arguments.length) {
        case 1: return s(this, e);
        case 2:
        case 3: return m(this, e, t, r);
        default: throw new SyntaxError("Wrong number of arguments");
    } }, o.prototype.get = function (e) { if (!f(e))
        throw new TypeError("Array expected"); if (e.length !== this._size.length)
        throw new Yr(e.length, this._size.length); if (!this._values)
        throw new Error("Cannot invoke get on a Pattern only matrix"); var t = e[0], r = e[1]; tn(t, this._size[0]), tn(r, this._size[1]); var n = h(t, this._ptr[r], this._ptr[r + 1], this._index); return n < this._ptr[r + 1] && this._index[n] === t ? this._values[n] : 0; }, o.prototype.set = function (e, n, i) { if (!f(e))
        throw new TypeError("Array expected"); if (e.length !== this._size.length)
        throw new Yr(e.length, this._size.length); if (!this._values)
        throw new Error("Cannot invoke set on a Pattern only matrix"); var a = e[0], o = e[1], u = this._size[0], s = this._size[1], l = r, p = 0; c(this._datatype) && (l = t.find(r, [this._datatype, this._datatype]) || r, p = t.convert(0, this._datatype)), (a > u - 1 || o > s - 1) && (y(this, Math.max(a + 1, u), Math.max(o + 1, s), i), u = this._size[0], s = this._size[1]), tn(a, u), tn(o, s); var m = h(a, this._ptr[o], this._ptr[o + 1], this._index); return m < this._ptr[o + 1] && this._index[m] === a ? l(n, p) ? function (e, t, r, n, i) { r.splice(e, 1), n.splice(e, 1); for (var a = t + 1; a < i.length; a++)
        i[a]--; }(m, o, this._values, this._index, this._ptr) : this._values[m] = n : l(n, p) || d(m, a, o, n, this._values, this._index, this._ptr), this; }, o.prototype.resize = function (e, t, r) { if (!p(e))
        throw new TypeError("Array or Matrix expected"); var n = e.valueOf().map((function (e) { return Array.isArray(e) && 1 === e.length ? e[0] : e; })); if (2 !== n.length)
        throw new Error("Only two dimensions matrix are supported"); return n.forEach((function (e) { if (!i(e) || !V(e) || e < 0)
        throw new TypeError("Invalid size, must contain positive integers (size: " + Gr(n) + ")"); })), y(r ? this.clone() : this, n[0], n[1], t); }, o.prototype.reshape = function (e, t) { if (!f(e))
        throw new TypeError("Array expected"); if (2 !== e.length)
        throw new Error("Sparse matrices can only be reshaped in two dimensions"); e.forEach((function (t) { if (!i(t) || !V(t) || t <= -2 || 0 === t)
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Gr(e) + ")"); })); var r = this._size[0] * this._size[1]; if (r !== (e = on(e, r))[0] * e[1])
        throw new Error("Reshaping sparse matrix will result in the wrong number of elements"); var n = t ? this.clone() : this; if (this._size[0] === e[0] && this._size[1] === e[1])
        return n; for (var a = [], o = 0; o < n._ptr.length; o++)
        for (var u = 0; u < n._ptr[o + 1] - n._ptr[o]; u++)
            a.push(o); for (var s = n._values.slice(), c = n._index.slice(), l = 0; l < n._index.length; l++) {
        var p = c[l], m = a[l], v = p * n._size[1] + m;
        a[l] = v % e[1], c[l] = Math.floor(v / e[1]);
    } n._values.length = 0, n._index.length = 0, n._ptr.length = e[1] + 1, n._size = e.slice(); for (var y = 0; y < n._ptr.length; y++)
        n._ptr[y] = 0; for (var g = 0; g < s.length; g++) {
        var x = c[g], b = a[g], w = s[g];
        d(h(x, n._ptr[b], n._ptr[b + 1], n._index), x, b, w, n._values, n._index, n._ptr);
    } return n; }, o.prototype.clone = function () { return new o({ values: this._values ? he(this._values) : void 0, index: he(this._index), ptr: he(this._ptr), size: he(this._size), datatype: this._datatype }); }, o.prototype.size = function () { return this._size.slice(0); }, o.prototype.map = function (e, n) { if (!this._values)
        throw new Error("Cannot invoke map on a Pattern only matrix"); var i = this, a = this._size[0], u = this._size[1], s = En(e); return function (e, n, i, a, u, s, f) { var l = [], p = [], m = [], h = r, d = 0; c(e._datatype) && (h = t.find(r, [e._datatype, e._datatype]) || r, d = t.convert(0, e._datatype)); for (var v = function (e, t, r) { e = s(e, t, r), h(e, d) || (l.push(e), p.push(t)); }, y = 0; y <= u; y++) {
        m.push(l.length);
        var g = e._ptr[y], x = e._ptr[y + 1];
        if (f)
            for (var b = g; b < x; b++) {
                var w = e._index[b];
                w >= 0 && w <= i && v(e._values[b], w - 0, y - 0);
            }
        else {
            for (var N = {}, D = g; D < x; D++)
                N[e._index[D]] = e._values[D];
            for (var E = 0; E <= i; E++)
                v(E in N ? N[E] : 0, E - 0, y - 0);
        }
    } return m.push(l.length), new o({ values: l, index: p, ptr: m, size: [i - 0 + 1, u - 0 + 1] }); }(this, 0, a - 1, 0, u - 1, (function (t, r, n) { return 1 === s ? e(t) : 2 === s ? e(t, [r, n]) : e(t, [r, n], i); }), n); }, o.prototype.forEach = function (e, t) { if (!this._values)
        throw new Error("Cannot invoke forEach on a Pattern only matrix"); for (var r = this._size[0], n = this._size[1], i = 0; i < n; i++) {
        var a = this._ptr[i], o = this._ptr[i + 1];
        if (t)
            for (var u = a; u < o; u++) {
                var s = this._index[u];
                e(this._values[u], [s, i], this);
            }
        else {
            for (var c = {}, f = a; f < o; f++)
                c[this._index[f]] = this._values[f];
            for (var l = 0; l < r; l++)
                e(l in c ? c[l] : 0, [l, i], this);
        }
    } }, o.prototype[Symbol.iterator] = Lr.mark((function e() { var t, r, n, i, a, o; return Lr.wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0:
                if (this._values) {
                    e.next = 2;
                    break;
                }
                throw new Error("Cannot iterate a Pattern only matrix");
            case 2: t = this._size[1], r = 0;
            case 4:
                if (!(r < t)) {
                    e.next = 18;
                    break;
                }
                n = this._ptr[r], i = this._ptr[r + 1], a = n;
            case 8:
                if (!(a < i)) {
                    e.next = 15;
                    break;
                }
                return o = this._index[a], e.next = 12, { value: this._values[a], index: [o, r] };
            case 12:
                a++, e.next = 8;
                break;
            case 15:
                r++, e.next = 4;
                break;
            case 18:
            case "end": return e.stop();
        } }), e, this); })), o.prototype.toArray = function () { return g(this._values, this._index, this._ptr, this._size, !0); }, o.prototype.valueOf = function () { return g(this._values, this._index, this._ptr, this._size, !1); }, o.prototype.format = function (e) { for (var t = this._size[0], r = this._size[1], n = this.density(), i = "Sparse Matrix [" + Gr(t, e) + " x " + Gr(r, e) + "] density: " + Gr(n, e) + "\n", a = 0; a < r; a++)
        for (var o = this._ptr[a], u = this._ptr[a + 1], s = o; s < u; s++)
            i += "\n    (" + Gr(this._index[s], e) + ", " + Gr(a, e) + ") ==> " + (this._values ? Gr(this._values[s], e) : "X"); return i; }, o.prototype.toString = function () { return Gr(this.toArray()); }, o.prototype.toJSON = function () { return { mathjs: "SparseMatrix", values: this._values, index: this._index, ptr: this._ptr, size: this._size, datatype: this._datatype }; }, o.prototype.diagonal = function (e) { if (e) {
        if (a(e) && (e = e.toNumber()), !i(e) || !V(e))
            throw new TypeError("The parameter k must be an integer number");
    }
    else
        e = 0; var t = e > 0 ? e : 0, r = e < 0 ? -e : 0, n = this._size[0], u = this._size[1], s = Math.min(n - r, u - t), c = [], f = [], l = []; l[0] = 0; for (var p = t; p < u && c.length < s; p++)
        for (var m = this._ptr[p], h = this._ptr[p + 1], d = m; d < h; d++) {
            var v = this._index[d];
            if (v === p - t + r) {
                c.push(this._values[d]), f[c.length - 1] = v - r;
                break;
            }
        } return l.push(c.length), new o({ values: c, index: f, ptr: l, size: [s, 1] }); }, o.fromJSON = function (e) { return new o(e); }, o.diagonal = function (e, n, u, s, p) { if (!f(e))
        throw new TypeError("Array expected, size parameter"); if (2 !== e.length)
        throw new Error("Only two dimensions matrix are supported"); if (e = e.map((function (e) { if (a(e) && (e = e.toNumber()), !i(e) || !V(e) || e < 1)
        throw new Error("Size values must be positive integers"); return e; })), u) {
        if (a(u) && (u = u.toNumber()), !i(u) || !V(u))
            throw new TypeError("The parameter k must be an integer number");
    }
    else
        u = 0; var m = r, h = 0; c(p) && (m = t.find(r, [p, p]) || r, h = t.convert(0, p)); var d, v = u > 0 ? u : 0, y = u < 0 ? -u : 0, g = e[0], x = e[1], b = Math.min(g - y, x - v); if (f(n)) {
        if (n.length !== b)
            throw new Error("Invalid value array length");
        d = function (e) { return n[e]; };
    }
    else if (l(n)) {
        var w = n.size();
        if (1 !== w.length || w[0] !== b)
            throw new Error("Invalid matrix length");
        d = function (e) { return n.get([e]); };
    }
    else
        d = function () { return n; }; for (var N = [], D = [], E = [], A = 0; A < x; A++) {
        E.push(N.length);
        var S = A - v;
        if (S >= 0 && S < b) {
            var C = d(S);
            m(C, h) || (D.push(S + y), N.push(C));
        }
    } return E.push(N.length), new o({ values: N, index: D, ptr: E, size: [g, x] }); }, o.prototype.swapRows = function (e, t) { if (!(i(e) && V(e) && i(t) && V(t)))
        throw new Error("Row index must be positive integers"); if (2 !== this._size.length)
        throw new Error("Only two dimensional matrix is supported"); return tn(e, this._size[0]), tn(t, this._size[0]), o._swapRows(e, t, this._size[1], this._values, this._index, this._ptr), this; }, o._forEachRow = function (e, t, r, n, i) { for (var a = n[e], o = n[e + 1], u = a; u < o; u++)
        i(r[u], t[u]); }, o._swapRows = function (e, t, r, n, i, a) { for (var o = 0; o < r; o++) {
        var u = a[o], s = a[o + 1], c = h(e, u, s, i), f = h(t, u, s, i);
        if (c < s && f < s && i[c] === e && i[f] === t) {
            if (n) {
                var l = n[c];
                n[c] = n[f], n[f] = l;
            }
        }
        else if (c < s && i[c] === e && (f >= s || i[f] !== t)) {
            var p = n ? n[c] : void 0;
            i.splice(f, 0, t), n && n.splice(f, 0, p), i.splice(f <= c ? c + 1 : c, 1), n && n.splice(f <= c ? c + 1 : c, 1);
        }
        else if (f < s && i[f] === t && (c >= s || i[c] !== e)) {
            var m = n ? n[f] : void 0;
            i.splice(c, 0, e), n && n.splice(c, 0, m), i.splice(c <= f ? f + 1 : f, 1), n && n.splice(c <= f ? f + 1 : f, 1);
        }
    } }, o; }), { isClass: !0 })), si = Ee("number", ["typed"], (function (e) { var t = e.typed, r = t("number", { "": function () { return 0; }, number: function (e) { return e; }, string: function (e) { if ("NaN" === e)
            return NaN; var t, r, n = (r = (t = e).match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/)) ? { input: t, radix: { "0b": 2, "0o": 8, "0x": 16 }[r[1]], integerPart: r[2], fractionalPart: r[3] } : null; if (n)
            return function (e) { for (var t = parseInt(e.integerPart, e.radix), r = 0, n = 0; n < e.fractionalPart.length; n++)
                r += parseInt(e.fractionalPart[n], e.radix) / Math.pow(e.radix, n + 1); var i = t + r; if (isNaN(i))
                throw new SyntaxError('String "' + e.input + '" is no valid number'); return i; }(n); var i = 0, a = e.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/); a && (i = Number(a[2]), e = a[1]); var o = Number(e); if (isNaN(o))
            throw new SyntaxError('String "' + e + '" is no valid number'); if (a) {
            if (o > Math.pow(2, i) - 1)
                throw new SyntaxError('String "'.concat(e, '" is out of range'));
            o >= Math.pow(2, i - 1) && (o -= Math.pow(2, i));
        } return o; }, BigNumber: function (e) { return e.toNumber(); }, Fraction: function (e) { return e.valueOf(); }, Unit: function (e) { throw new Error("Second argument with valueless unit expected"); }, null: function (e) { return 0; }, "Unit, string | Unit": function (e, t) { return e.toNumber(t); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); return r.fromJSON = function (e) { return parseFloat(e.value); }, r; })), ci = "string", fi = Ee(ci, ["typed"], (function (e) { var t = e.typed; return t(ci, { "": function () { return ""; }, number: ee, null: function (e) { return "null"; }, boolean: function (e) { return e + ""; }, string: function (e) { return e; }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })), any: function (e) { return String(e); } }); })), li = "boolean", pi = Ee(li, ["typed"], (function (e) { var t = e.typed; return t(li, { "": function () { return !1; }, boolean: function (e) { return e; }, number: function (e) { return !!e; }, null: function (e) { return !1; }, BigNumber: function (e) { return !e.isZero(); }, string: function (e) { var t = e.toLowerCase(); if ("true" === t)
            return !0; if ("false" === t)
            return !1; var r = Number(e); if ("" !== e && !isNaN(r))
            return !!r; throw new Error('Cannot convert "' + e + '" to a boolean'); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), mi = Ee("bignumber", ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t("bignumber", { "": function () { return new r(0); }, number: function (e) { return new r(e + ""); }, string: function (e) { var t = e.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/); if (t) {
            var n = t[2], i = r(t[1]), a = new r(2).pow(Number(n));
            if (i.gt(a.sub(1)))
                throw new SyntaxError('String "'.concat(e, '" is out of range'));
            var o = new r(2).pow(Number(n) - 1);
            return i.gte(o) ? i.sub(a) : i;
        } return new r(e); }, BigNumber: function (e) { return e; }, Fraction: function (e) { return new r(e.n).div(e.d).times(e.s); }, null: function (e) { return new r(0); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), hi = Ee("complex", ["typed", "Complex"], (function (e) { var t = e.typed, r = e.Complex; return t("complex", { "": function () { return r.ZERO; }, number: function (e) { return new r(e, 0); }, "number, number": function (e, t) { return new r(e, t); }, "BigNumber, BigNumber": function (e, t) { return new r(e.toNumber(), t.toNumber()); }, Fraction: function (e) { return new r(e.valueOf(), 0); }, Complex: function (e) { return e.clone(); }, string: function (e) { return r(e); }, null: function (e) { return r(0); }, Object: function (e) { if ("re" in e && "im" in e)
            return new r(e.re, e.im); if ("r" in e && "phi" in e || "abs" in e && "arg" in e)
            return new r(e); throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)"); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), di = Ee("fraction", ["typed", "Fraction"], (function (e) { var t = e.typed, r = e.Fraction; return t("fraction", { number: function (e) { if (!isFinite(e) || isNaN(e))
            throw new Error(e + " cannot be represented as a fraction"); return new r(e); }, string: function (e) { return new r(e); }, "number, number": function (e, t) { return new r(e, t); }, null: function (e) { return new r(0); }, BigNumber: function (e) { return new r(e.toString()); }, Fraction: function (e) { return e; }, Object: function (e) { return new r(e); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), vi = "matrix", yi = Ee(vi, ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], (function (e) { var t = e.typed, r = (e.Matrix, e.DenseMatrix), n = e.SparseMatrix; return t(vi, { "": function () { return i([]); }, string: function (e) { return i([], e); }, "string, string": function (e, t) { return i([], e, t); }, Array: function (e) { return i(e); }, Matrix: function (e) { return i(e, e.storage()); }, "Array | Matrix, string": i, "Array | Matrix, string, string": i }); function i(e, t, i) { if ("dense" === t || "default" === t || void 0 === t)
        return new r(e, i); if ("sparse" === t)
        return new n(e, i); throw new TypeError("Unknown matrix type " + JSON.stringify(t) + "."); } })), gi = "matrixFromFunction", xi = Ee(gi, ["typed", "matrix", "isZero"], (function (e) { var t = e.typed, r = e.matrix, n = e.isZero; return t(gi, { "Array | Matrix, function, string, string": function (e, t, r, n) { return i(e, t, r, n); }, "Array | Matrix, function, string": function (e, t, r) { return i(e, t, r); }, "Matrix, function": function (e, t) { return i(e, t, "dense"); }, "Array, function": function (e, t) { return i(e, t, "dense").toArray(); }, "Array | Matrix, string, function": function (e, t, r) { return i(e, r, t); }, "Array | Matrix, string, string, function": function (e, t, r, n) { return i(e, n, t, r); } }); function i(e, t, i, a) { var o; return (o = void 0 !== a ? r(i, a) : r(i)).resize(e), o.forEach((function (e, r) { var i = t(r); n(i) || o.set(r, i); })), o; } }));
    function bi(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    var wi = "matrixFromRows", Ni = Ee(wi, ["typed", "matrix", "flatten", "size"], (function (e) { var t = e.typed, r = e.matrix, n = e.flatten, i = e.size; return t(wi, { "...Array": function (e) { return a(e); }, "...Matrix": function (e) { return r(a(e.map((function (e) { return e.toArray(); })))); } }); function a(e) { if (0 === e.length)
        throw new TypeError("At least one row is needed to construct a matrix."); var t, r = o(e[0]), i = [], a = function (e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return bi(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? bi(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }(e); try {
        for (a.s(); !(t = a.n()).done;) {
            var u = t.value, s = o(u);
            if (s !== r)
                throw new TypeError("The vectors had different length: " + (0 | r) + " ≠ " + (0 | s));
            i.push(n(u));
        }
    }
    catch (e) {
        a.e(e);
    }
    finally {
        a.f();
    } return i; } function o(e) { var t = i(e); if (1 === t.length)
        return t[0]; if (2 === t.length) {
        if (1 === t[0])
            return t[1];
        if (1 === t[1])
            return t[0];
        throw new TypeError("At least one of the arguments is not a vector.");
    } throw new TypeError("Only one- or two-dimensional vectors are supported."); } }));
    function Di(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    var Ei = "matrixFromColumns", Ai = Ee(Ei, ["typed", "matrix", "flatten", "size"], (function (e) { var t = e.typed, r = e.matrix, n = e.flatten, i = e.size; return t(Ei, { "...Array": function (e) { return a(e); }, "...Matrix": function (e) { return r(a(e.map((function (e) { return e.toArray(); })))); } }); function a(e) { if (0 === e.length)
        throw new TypeError("At least one column is needed to construct a matrix."); for (var t = o(e[0]), r = [], i = 0; i < t; i++)
        r[i] = []; var a, u = function (e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return Di(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Di(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }(e); try {
        for (u.s(); !(a = u.n()).done;) {
            var s = a.value, c = o(s);
            if (c !== t)
                throw new TypeError("The vectors had different length: " + (0 | t) + " ≠ " + (0 | c));
            for (var f = n(s), l = 0; l < t; l++)
                r[l].push(f[l]);
        }
    }
    catch (e) {
        u.e(e);
    }
    finally {
        u.f();
    } return r; } function o(e) { var t = i(e); if (1 === t.length)
        return t[0]; if (2 === t.length) {
        if (1 === t[0])
            return t[1];
        if (1 === t[1])
            return t[0];
        throw new TypeError("At least one of the arguments is not a vector.");
    } throw new TypeError("Only one- or two-dimensional vectors are supported."); } })), Si = "splitUnit", Ci = Ee(Si, ["typed"], (function (e) { return (0, e.typed)(Si, { "Unit, Array": function (e, t) { return e.splitUnit(t); } }); })), Mi = "number", Fi = "number, number";
    function Oi(e) { return Math.abs(e); }
    function Ti(e, t) { return e + t; }
    function Bi(e, t) { return e * t; }
    function _i(e) { return -e; }
    function ki(e) { return e; }
    function Ii(e) { return X(e); }
    function Ri(e) { return e * e * e; }
    function zi(e) { return Math.exp(e); }
    function qi(e) { return Q(e); }
    function ji(e, t) { if (!V(e) || !V(t))
        throw new Error("Parameters in function gcd must be integer numbers"); for (var r; 0 !== t;)
        r = e % t, e = t, t = r; return e < 0 ? -e : e; }
    function Pi(e, t) { if (!V(e) || !V(t))
        throw new Error("Parameters in function lcm must be integer numbers"); if (0 === e || 0 === t)
        return 0; for (var r, n = e * t; 0 !== t;)
        t = e % (r = t), e = r; return Math.abs(n / e); }
    function Li(e) { return J(e); }
    function Ui(e) { return W(e); }
    function $i(e, t) { if (t > 0)
        return e - t * Math.floor(e / t); if (0 === t)
        return e; throw new Error("Cannot calculate mod for a negative divisor"); }
    function Hi(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, r = t < 0; if (r && (t = -t), 0 === t)
        throw new Error("Root must be non-zero"); if (e < 0 && Math.abs(t) % 2 != 1)
        throw new Error("Root must be odd when a is negative."); if (0 === e)
        return r ? 1 / 0 : 0; if (!isFinite(e))
        return r ? 0 : e; var n = Math.pow(Math.abs(e), 1 / t); return n = e < 0 ? -n : n, r ? 1 / n : n; }
    function Gi(e) { return Z(e); }
    function Vi(e) { return e * e; }
    function Zi(e, t) { var r, n, i, a = 0, o = 1, u = 1, s = 0; if (!V(e) || !V(t))
        throw new Error("Parameters in function xgcd must be integer numbers"); for (; t;)
        i = e - (n = Math.floor(e / t)) * t, r = a, a = o - n * a, o = r, r = u, u = s - n * u, s = r, e = t, t = i; return e < 0 ? [-e, -o, -s] : [e, e ? o : 0, s]; }
    function Wi(e, t) { return e * e < 1 && t === 1 / 0 || e * e > 1 && t === -1 / 0 ? 0 : Math.pow(e, t); }
    function Ji(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; if (!V(t) || t < 0 || t > 15)
        throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive"); return parseFloat(re(e, t)); }
    Oi.signature = Mi, Ti.signature = Fi, Bi.signature = Fi, _i.signature = Mi, ki.signature = Mi, Ii.signature = Mi, Ri.signature = Mi, zi.signature = Mi, qi.signature = Mi, ji.signature = Fi, Pi.signature = Fi, Li.signature = Mi, Ui.signature = Mi, $i.signature = Fi, Gi.signature = Mi, Vi.signature = Mi, Zi.signature = Fi, Wi.signature = Fi;
    var Yi = "unaryMinus", Xi = Ee(Yi, ["typed"], (function (e) { var t = e.typed; return t(Yi, { number: _i, "Complex | BigNumber | Fraction": function (e) { return e.neg(); }, Unit: t.referToSelf((function (e) { return function (r) { var n = r.clone(); return n.value = t.find(e, n.valueType())(r.value), n; }; })), "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })) }); })), Qi = "unaryPlus", Ki = Ee(Qi, ["typed", "config", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.BigNumber; return t(Qi, { number: ki, Complex: function (e) { return e; }, BigNumber: function (e) { return e; }, Fraction: function (e) { return e; }, Unit: function (e) { return e.clone(); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })), "boolean | string": function (e) { return "BigNumber" === r.number ? new n(+e) : +e; } }); })), ea = Ee("abs", ["typed"], (function (e) { var t = e.typed; return t("abs", { number: Oi, "Complex | BigNumber | Fraction | Unit": function (e) { return e.abs(); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })) }); })), ta = "apply", ra = Ee(ta, ["typed", "isInteger"], (function (e) { var t = e.typed, r = e.isInteger; return t(ta, { "Array | Matrix, number | BigNumber, function": function (e, t, n) { if (!r(t))
            throw new TypeError("Integer number expected for dimension"); var i = Array.isArray(e) ? Qr(e) : e.size(); if (t < 0 || t >= i.length)
            throw new Xr(t, i.length); return l(e) ? e.create(na(e.valueOf(), t, n)) : na(e, t, n); } }); }));
    function na(e, t, r) { var n, i, a; if (t <= 0) {
        if (Array.isArray(e[0])) {
            for (a = function (e) { var t, r, n = e.length, i = e[0].length, a = []; for (r = 0; r < i; r++) {
                var o = [];
                for (t = 0; t < n; t++)
                    o.push(e[t][r]);
                a.push(o);
            } return a; }(e), i = [], n = 0; n < a.length; n++)
                i[n] = na(a[n], t - 1, r);
            return i;
        }
        return r(e);
    } for (i = [], n = 0; n < e.length; n++)
        i[n] = na(e[n], t - 1, r); return i; }
    var ia = "addScalar", aa = Ee(ia, ["typed"], (function (e) { var t = e.typed; return t(ia, { "number, number": Ti, "Complex, Complex": function (e, t) { return e.add(t); }, "BigNumber, BigNumber": function (e, t) { return e.plus(t); }, "Fraction, Fraction": function (e, t) { return e.add(t); }, "Unit, Unit": t.referToSelf((function (e) { return function (r, n) { if (null === r.value || void 0 === r.value)
            throw new Error("Parameter x contains a unit with undefined value"); if (null === n.value || void 0 === n.value)
            throw new Error("Parameter y contains a unit with undefined value"); if (!r.equalBase(n))
            throw new Error("Units do not match"); var i = r.clone(); return i.value = t.find(e, [i.valueType(), n.valueType()])(i.value, n.value), i.fixPrefix = !1, i; }; })) }); })), oa = "cbrt", ua = Ee(oa, ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex", "BigNumber", "Fraction"], (function (e) { var t = e.config, r = e.typed, n = e.isNegative, i = e.unaryMinus, s = e.matrix, c = e.Complex, f = e.BigNumber, l = e.Fraction; return r(oa, { number: Ii, Complex: p, "Complex, boolean": p, BigNumber: function (e) { return e.cbrt(); }, Unit: function (e) { if (e.value && o(e.value)) {
            var t = e.clone();
            return t.value = 1, (t = t.pow(1 / 3)).value = p(e.value), t;
        } var r, s = n(e.value); s && (e.value = i(e.value)), r = a(e.value) ? new f(1).div(3) : u(e.value) ? new l(1, 3) : 1 / 3; var c = e.pow(r); return s && (c.value = i(c.value)), c; } }); function p(e, r) { var n = e.arg() / 3, i = e.abs(), a = new c(Ii(i), 0).mul(new c(0, n).exp()); if (r) {
        var o = [a, new c(Ii(i), 0).mul(new c(0, n + 2 * Math.PI / 3).exp()), new c(Ii(i), 0).mul(new c(0, n - 2 * Math.PI / 3).exp())];
        return "Array" === t.matrix ? o : s(o);
    } return a; } }));
    function sa(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    function ca(e, t) { if (e) {
        if ("string" == typeof e)
            return sa(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? sa(e, t) : void 0;
    } }
    function fa(e, t) { return function (e) { if (Array.isArray(e))
        return e; }(e) || function (e, t) { var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != r) {
        var n, i, a, o, u = [], s = !0, c = !1;
        try {
            if (a = (r = r.call(e)).next, 0 === t) {
                if (Object(r) !== r)
                    return;
                s = !1;
            }
            else
                for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0)
                    ;
        }
        catch (e) {
            c = !0, i = e;
        }
        finally {
            try {
                if (!s && null != r.return && (o = r.return(), Object(o) !== o))
                    return;
            }
            finally {
                if (c)
                    throw i;
            }
        }
        return u;
    } }(e, t) || ca(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    var la = Ee("matAlgo11xS0s", ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return function (e, n, i, a) { var o = e._values, u = e._index, s = e._ptr, c = e._size, f = e._datatype; if (!o)
        throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value"); var l, p = c[0], m = c[1], h = r, d = 0, v = i; "string" == typeof f && (l = f, h = t.find(r, [l, l]), d = t.convert(0, l), n = t.convert(n, l), v = t.find(i, [l, l])); for (var y = [], g = [], x = [], b = 0; b < m; b++) {
        x[b] = g.length;
        for (var w = s[b], N = s[b + 1], D = w; D < N; D++) {
            var E = u[D], A = a ? v(n, o[D]) : v(o[D], n);
            h(A, d) || (g.push(E), y.push(A));
        }
    } return x[m] = g.length, e.createSparseMatrix({ values: y, index: g, ptr: x, size: [p, m], datatype: l }); }; })), pa = Ee("matAlgo12xSfs", ["typed", "DenseMatrix"], (function (e) { var t = e.typed, r = e.DenseMatrix; return function (e, n, i, a) { var o = e._values, u = e._index, s = e._ptr, c = e._size, f = e._datatype; if (!o)
        throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value"); var l, p = c[0], m = c[1], h = i; "string" == typeof f && (l = f, n = t.convert(n, l), h = t.find(i, [l, l])); for (var d = [], v = [], y = [], g = 0; g < m; g++) {
        for (var x = g + 1, b = s[g], w = s[g + 1], N = b; N < w; N++) {
            var D = u[N];
            v[D] = o[N], y[D] = x;
        }
        for (var E = 0; E < p; E++)
            0 === g && (d[E] = []), y[E] === x ? d[E][g] = a ? h(n, v[E]) : h(v[E], n) : d[E][g] = a ? h(n, 0) : h(0, n);
    } return new r({ data: d, size: [p, m], datatype: l }); }; })), ma = Ee("matAlgo14xDs", ["typed"], (function (e) { var t = e.typed; return function (e, n, i, a) { var o, u = e._data, s = e._size, c = e._datatype, f = i; "string" == typeof c && (o = c, n = t.convert(n, o), f = t.find(i, [o, o])); var l = s.length > 0 ? r(f, 0, s, s[0], u, n, a) : []; return e.createDenseMatrix({ data: l, size: he(s), datatype: o }); }; function r(e, t, n, i, a, o, u) { var s = []; if (t === n.length - 1)
        for (var c = 0; c < i; c++)
            s[c] = u ? e(o, a[c]) : e(a[c], o);
    else
        for (var f = 0; f < i; f++)
            s[f] = r(e, t + 1, n, n[t + 1], a[f], o, u); return s; } })), ha = "ceil", da = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"], va = Ee(ha, ["typed", "config", "round"], (function (e) { var t = e.typed, r = e.config, n = e.round; return t(ha, { number: function (e) { return ue(e, n(e), r.epsilon) ? n(e) : Math.ceil(e); }, "number, number": function (e, t) { if (ue(e, n(e, t), r.epsilon))
            return n(e, t); var i = fa("".concat(e, "e").split("e"), 2), a = i[0], o = i[1], u = Math.ceil(Number("".concat(a, "e").concat(Number(o) + t))), s = fa("".concat(u, "e").split("e"), 2); return a = s[0], o = s[1], Number("".concat(a, "e").concat(Number(o) - t)); } }); })), ya = Ee(ha, da, (function (e) { var t = e.typed, r = e.config, n = e.round, i = e.matrix, a = e.equalScalar, o = e.zeros, u = e.DenseMatrix, s = la({ typed: t, equalScalar: a }), c = pa({ typed: t, DenseMatrix: u }), f = ma({ typed: t }), l = va({ typed: t, config: r, round: n }); return t("ceil", { number: l.signatures.number, "number,number": l.signatures["number,number"], Complex: function (e) { return e.ceil(); }, "Complex, number": function (e, t) { return e.ceil(t); }, "Complex, BigNumber": function (e, t) { return e.ceil(t.toNumber()); }, BigNumber: function (e) { return ni(e, n(e), r.epsilon) ? n(e) : e.ceil(); }, "BigNumber, BigNumber": function (e, t) { return ni(e, n(e, t), r.epsilon) ? n(e, t) : e.toDecimalPlaces(t.toNumber(), _r.ROUND_CEIL); }, Fraction: function (e) { return e.ceil(); }, "Fraction, number": function (e, t) { return e.ceil(t); }, "Fraction, BigNumber": function (e, t) { return e.ceil(t.toNumber()); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })), "Array, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return Bn(t, (function (t) { return e(t, r); }), !0); }; })), "SparseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return s(t, r, e, !1); }; })), "DenseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return f(t, r, e, !1); }; })), "number | Complex | Fraction | BigNumber, Array": t.referToSelf((function (e) { return function (t, r) { return f(i(r), t, e, !0).valueOf(); }; })), "number | Complex | Fraction | BigNumber, Matrix": t.referToSelf((function (e) { return function (t, r) { return a(t, 0) ? o(r.size(), r.storage()) : "dense" === r.storage() ? f(r, t, e, !0) : c(r, t, e, !0); }; })) }); })), ga = "cube", xa = Ee(ga, ["typed"], (function (e) { return (0, e.typed)(ga, { number: Ri, Complex: function (e) { return e.mul(e).mul(e); }, BigNumber: function (e) { return e.times(e).times(e); }, Fraction: function (e) { return e.pow(3); }, Unit: function (e) { return e.pow(3); } }); })), ba = Ee("exp", ["typed"], (function (e) { return (0, e.typed)("exp", { number: zi, Complex: function (e) { return e.exp(); }, BigNumber: function (e) { return e.exp(); } }); })), wa = "expm1", Na = Ee(wa, ["typed", "Complex"], (function (e) { var t = e.typed, r = e.Complex; return t(wa, { number: qi, Complex: function (e) { var t = Math.exp(e.re); return new r(t * Math.cos(e.im) - 1, t * Math.sin(e.im)); }, BigNumber: function (e) { return e.exp().minus(1); } }); })), Da = "fix", Ea = ["typed", "Complex", "matrix", "ceil", "floor", "equalScalar", "zeros", "DenseMatrix"], Aa = Ee(Da, ["typed", "ceil", "floor"], (function (e) { var t = e.typed, r = e.ceil, n = e.floor; return t(Da, { number: function (e) { return e > 0 ? n(e) : r(e); }, "number, number": function (e, t) { return e > 0 ? n(e, t) : r(e, t); } }); })), Sa = Ee(Da, Ea, (function (e) { var t = e.typed, r = e.Complex, n = e.matrix, i = e.ceil, a = e.floor, o = e.equalScalar, u = e.zeros, s = e.DenseMatrix, c = pa({ typed: t, DenseMatrix: s }), f = ma({ typed: t }), l = Aa({ typed: t, ceil: i, floor: a }); return t("fix", { number: l.signatures.number, "number, number | BigNumber": l.signatures["number,number"], Complex: function (e) { return new r(e.re > 0 ? Math.floor(e.re) : Math.ceil(e.re), e.im > 0 ? Math.floor(e.im) : Math.ceil(e.im)); }, "Complex, number": function (e, t) { return new r(e.re > 0 ? a(e.re, t) : i(e.re, t), e.im > 0 ? a(e.im, t) : i(e.im, t)); }, "Complex, BigNumber": function (e, t) { var n = t.toNumber(); return new r(e.re > 0 ? a(e.re, n) : i(e.re, n), e.im > 0 ? a(e.im, n) : i(e.im, n)); }, BigNumber: function (e) { return e.isNegative() ? i(e) : a(e); }, "BigNumber, number | BigNumber": function (e, t) { return e.isNegative() ? i(e, t) : a(e, t); }, Fraction: function (e) { return e.s < 0 ? e.ceil() : e.floor(); }, "Fraction, number | BigNumber": function (e, t) { return e.s < 0 ? i(e, t) : a(e, t); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })), "Array | Matrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return Bn(t, (function (t) { return e(t, r); }), !0); }; })), "number | Complex | Fraction | BigNumber, Array": t.referToSelf((function (e) { return function (t, r) { return f(n(r), t, e, !0).valueOf(); }; })), "number | Complex | Fraction | BigNumber, Matrix": t.referToSelf((function (e) { return function (t, r) { return o(t, 0) ? u(r.size(), r.storage()) : "dense" === r.storage() ? f(r, t, e, !0) : c(r, t, e, !0); }; })) }); })), Ca = "floor", Ma = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"], Fa = Ee(Ca, ["typed", "config", "round"], (function (e) { var t = e.typed, r = e.config, n = e.round; return t(Ca, { number: function (e) { return ue(e, n(e), r.epsilon) ? n(e) : Math.floor(e); }, "number, number": function (e, t) { if (ue(e, n(e, t), r.epsilon))
            return n(e, t); var i = fa("".concat(e, "e").split("e"), 2), a = i[0], o = i[1], u = Math.floor(Number("".concat(a, "e").concat(Number(o) + t))), s = fa("".concat(u, "e").split("e"), 2); return a = s[0], o = s[1], Number("".concat(a, "e").concat(Number(o) - t)); } }); })), Oa = Ee(Ca, Ma, (function (e) { var t = e.typed, r = e.config, n = e.round, i = e.matrix, a = e.equalScalar, o = e.zeros, u = e.DenseMatrix, s = la({ typed: t, equalScalar: a }), c = pa({ typed: t, DenseMatrix: u }), f = ma({ typed: t }), l = Fa({ typed: t, config: r, round: n }); return t("floor", { number: l.signatures.number, "number,number": l.signatures["number,number"], Complex: function (e) { return e.floor(); }, "Complex, number": function (e, t) { return e.floor(t); }, "Complex, BigNumber": function (e, t) { return e.floor(t.toNumber()); }, BigNumber: function (e) { return ni(e, n(e), r.epsilon) ? n(e) : e.floor(); }, "BigNumber, BigNumber": function (e, t) { return ni(e, n(e, t), r.epsilon) ? n(e, t) : e.toDecimalPlaces(t.toNumber(), _r.ROUND_FLOOR); }, Fraction: function (e) { return e.floor(); }, "Fraction, number": function (e, t) { return e.floor(t); }, "Fraction, BigNumber": function (e, t) { return e.floor(t.toNumber()); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })), "Array, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return Bn(t, (function (t) { return e(t, r); }), !0); }; })), "SparseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return s(t, r, e, !1); }; })), "DenseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return f(t, r, e, !1); }; })), "number | Complex | Fraction | BigNumber, Array": t.referToSelf((function (e) { return function (t, r) { return f(i(r), t, e, !0).valueOf(); }; })), "number | Complex | Fraction | BigNumber, Matrix": t.referToSelf((function (e) { return function (t, r) { return a(t, 0) ? o(r.size(), r.storage()) : "dense" === r.storage() ? f(r, t, e, !0) : c(r, t, e, !0); }; })) }); })), Ta = Ee("matAlgo01xDSid", ["typed"], (function (e) { var t = e.typed; return function (e, r, n, i) { var a = e._data, o = e._size, u = e._datatype, s = r._values, c = r._index, f = r._ptr, l = r._size, p = r._datatype; if (o.length !== l.length)
        throw new Yr(o.length, l.length); if (o[0] !== l[0] || o[1] !== l[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")"); if (!s)
        throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"); var m, h, d = o[0], v = o[1], y = "string" == typeof u && u === p ? u : void 0, g = y ? t.find(n, [y, y]) : n, x = []; for (m = 0; m < d; m++)
        x[m] = []; var b = [], w = []; for (h = 0; h < v; h++) {
        for (var N = h + 1, D = f[h], E = f[h + 1], A = D; A < E; A++)
            b[m = c[A]] = i ? g(s[A], a[m][h]) : g(a[m][h], s[A]), w[m] = N;
        for (m = 0; m < d; m++)
            w[m] === N ? x[m][h] = b[m] : x[m][h] = a[m][h];
    } return e.createDenseMatrix({ data: x, size: [d, v], datatype: y }); }; })), Ba = Ee("matAlgo04xSidSid", ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return function (e, n, i) { var a = e._values, o = e._index, u = e._ptr, s = e._size, c = e._datatype, f = n._values, l = n._index, p = n._ptr, m = n._size, h = n._datatype; if (s.length !== m.length)
        throw new Yr(s.length, m.length); if (s[0] !== m[0] || s[1] !== m[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + m + ")"); var d, v = s[0], y = s[1], g = r, x = 0, b = i; "string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]), x = t.convert(0, d), b = t.find(i, [d, d])); var w, N, D, E, A, S = a && f ? [] : void 0, C = [], M = [], F = a && f ? [] : void 0, O = a && f ? [] : void 0, T = [], B = []; for (N = 0; N < y; N++) {
        M[N] = C.length;
        var _ = N + 1;
        for (E = u[N], A = u[N + 1], D = E; D < A; D++)
            w = o[D], C.push(w), T[w] = _, F && (F[w] = a[D]);
        for (E = p[N], A = p[N + 1], D = E; D < A; D++)
            if (T[w = l[D]] === _) {
                if (F) {
                    var k = b(F[w], f[D]);
                    g(k, x) ? T[w] = null : F[w] = k;
                }
            }
            else
                C.push(w), B[w] = _, O && (O[w] = f[D]);
        if (F && O)
            for (D = M[N]; D < C.length;)
                T[w = C[D]] === _ ? (S[D] = F[w], D++) : B[w] === _ ? (S[D] = O[w], D++) : C.splice(D, 1);
    } return M[y] = C.length, e.createSparseMatrix({ values: S, index: C, ptr: M, size: [v, y], datatype: d }); }; })), _a = Ee("matAlgo10xSids", ["typed", "DenseMatrix"], (function (e) { var t = e.typed, r = e.DenseMatrix; return function (e, n, i, a) { var o = e._values, u = e._index, s = e._ptr, c = e._size, f = e._datatype; if (!o)
        throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value"); var l, p = c[0], m = c[1], h = i; "string" == typeof f && (l = f, n = t.convert(n, l), h = t.find(i, [l, l])); for (var d = [], v = [], y = [], g = 0; g < m; g++) {
        for (var x = g + 1, b = s[g], w = s[g + 1], N = b; N < w; N++) {
            var D = u[N];
            v[D] = o[N], y[D] = x;
        }
        for (var E = 0; E < p; E++)
            0 === g && (d[E] = []), y[E] === x ? d[E][g] = a ? h(n, v[E]) : h(v[E], n) : d[E][g] = n;
    } return new r({ data: d, size: [p, m], datatype: l }); }; })), ka = Ee("matAlgo13xDD", ["typed"], (function (e) { var t = e.typed; return function (e, n, i) { var a, o = e._data, u = e._size, s = e._datatype, c = n._data, f = n._size, l = n._datatype, p = []; if (u.length !== f.length)
        throw new Yr(u.length, f.length); for (var m = 0; m < u.length; m++) {
        if (u[m] !== f[m])
            throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + f + ")");
        p[m] = u[m];
    } var h = i; "string" == typeof s && s === l && (a = s, h = t.find(i, [a, a])); var d = p.length > 0 ? r(h, 0, p, p[0], o, c) : []; return e.createDenseMatrix({ data: d, size: p, datatype: a }); }; function r(e, t, n, i, a, o) { var u = []; if (t === n.length - 1)
        for (var s = 0; s < i; s++)
            u[s] = e(a[s], o[s]);
    else
        for (var c = 0; c < i; c++)
            u[c] = r(e, t + 1, n, n[t + 1], a[c], o[c]); return u; } })), Ia = Ee("matrixAlgorithmSuite", ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix, n = ka({ typed: t }), i = ma({ typed: t }); return function (e) { var a, o = e.elop, u = e.SD || e.DS; o ? (a = { "DenseMatrix, DenseMatrix": function (e, t) { return n(e, t, o); }, "Array, Array": function (e, t) { return n(r(e), r(t), o).valueOf(); }, "Array, DenseMatrix": function (e, t) { return n(r(e), t, o); }, "DenseMatrix, Array": function (e, t) { return n(e, r(t), o); } }, e.SS && (a["SparseMatrix, SparseMatrix"] = function (t, r) { return e.SS(t, r, o, !1); }), e.DS && (a["DenseMatrix, SparseMatrix"] = function (t, r) { return e.DS(t, r, o, !1); }, a["Array, SparseMatrix"] = function (t, n) { return e.DS(r(t), n, o, !1); }), u && (a["SparseMatrix, DenseMatrix"] = function (e, t) { return u(t, e, o, !0); }, a["SparseMatrix, Array"] = function (e, t) { return u(r(t), e, o, !0); })) : (a = { "DenseMatrix, DenseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, r, e); }; })), "Array, Array": t.referToSelf((function (e) { return function (t, i) { return n(r(t), r(i), e).valueOf(); }; })), "Array, DenseMatrix": t.referToSelf((function (e) { return function (t, i) { return n(r(t), i, e); }; })), "DenseMatrix, Array": t.referToSelf((function (e) { return function (t, i) { return n(t, r(i), e); }; })) }, e.SS && (a["SparseMatrix, SparseMatrix"] = t.referToSelf((function (t) { return function (r, n) { return e.SS(r, n, t, !1); }; }))), e.DS && (a["DenseMatrix, SparseMatrix"] = t.referToSelf((function (t) { return function (r, n) { return e.DS(r, n, t, !1); }; })), a["Array, SparseMatrix"] = t.referToSelf((function (t) { return function (n, i) { return e.DS(r(n), i, t, !1); }; }))), u && (a["SparseMatrix, DenseMatrix"] = t.referToSelf((function (e) { return function (t, r) { return u(r, t, e, !0); }; })), a["SparseMatrix, Array"] = t.referToSelf((function (e) { return function (t, n) { return u(r(n), t, e, !0); }; })))); var s = e.scalar || "any"; (e.Ds || e.Ss) && (o ? (a["DenseMatrix," + s] = function (e, t) { return i(e, t, o, !1); }, a[s + ", DenseMatrix"] = function (e, t) { return i(t, e, o, !0); }, a["Array," + s] = function (e, t) { return i(r(e), t, o, !1).valueOf(); }, a[s + ", Array"] = function (e, t) { return i(r(t), e, o, !0).valueOf(); }) : (a["DenseMatrix," + s] = t.referToSelf((function (e) { return function (t, r) { return i(t, r, e, !1); }; })), a[s + ", DenseMatrix"] = t.referToSelf((function (e) { return function (t, r) { return i(r, t, e, !0); }; })), a["Array," + s] = t.referToSelf((function (e) { return function (t, n) { return i(r(t), n, e, !1).valueOf(); }; })), a[s + ", Array"] = t.referToSelf((function (e) { return function (t, n) { return i(r(n), t, e, !0).valueOf(); }; })))); var c = void 0 !== e.sS ? e.sS : e.Ss; return o ? (e.Ss && (a["SparseMatrix," + s] = function (t, r) { return e.Ss(t, r, o, !1); }), c && (a[s + ", SparseMatrix"] = function (e, t) { return c(t, e, o, !0); })) : (e.Ss && (a["SparseMatrix," + s] = t.referToSelf((function (t) { return function (r, n) { return e.Ss(r, n, t, !1); }; }))), c && (a[s + ", SparseMatrix"] = t.referToSelf((function (e) { return function (t, r) { return c(r, t, e, !0); }; })))), o && o.signatures && ve(a, o.signatures), a; }; })), Ra = Ee("gcd", ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.BigNumber, a = e.DenseMatrix, o = Ta({ typed: t }), u = Ba({ typed: t, equalScalar: n }), s = _a({ typed: t, DenseMatrix: a }), c = Ia({ typed: t, matrix: r }), f = "number | BigNumber | Fraction | Matrix | Array", l = {}; return l["".concat(f, ", ").concat(f, ", ...").concat(f)] = t.referToSelf((function (e) { return function (t, r, n) { for (var i = e(t, r), a = 0; a < n.length; a++)
        i = e(i, n[a]); return i; }; })), t("gcd", { "number, number": ji, "BigNumber, BigNumber": function (e, t) { if (!e.isInt() || !t.isInt())
            throw new Error("Parameters in function gcd must be integer numbers"); for (var r = new i(0); !t.isZero();) {
            var n = e.mod(t);
            e = t, t = n;
        } return e.lt(r) ? e.neg() : e; }, "Fraction, Fraction": function (e, t) { return e.gcd(t); } }, c({ SS: u, DS: o, Ss: s }), l); })), za = Ee("matAlgo02xDS0", ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return function (e, n, i, a) { var o = e._data, u = e._size, s = e._datatype, c = n._values, f = n._index, l = n._ptr, p = n._size, m = n._datatype; if (u.length !== p.length)
        throw new Yr(u.length, p.length); if (u[0] !== p[0] || u[1] !== p[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + u + ") must match Matrix B (" + p + ")"); if (!c)
        throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"); var h, d = u[0], v = u[1], y = r, g = 0, x = i; "string" == typeof s && s === m && (h = s, y = t.find(r, [h, h]), g = t.convert(0, h), x = t.find(i, [h, h])); for (var b = [], w = [], N = [], D = 0; D < v; D++) {
        N[D] = w.length;
        for (var E = l[D], A = l[D + 1], S = E; S < A; S++) {
            var C = f[S], M = a ? x(c[S], o[C][D]) : x(o[C][D], c[S]);
            y(M, g) || (w.push(C), b.push(M));
        }
    } return N[v] = w.length, n.createSparseMatrix({ values: b, index: w, ptr: N, size: [d, v], datatype: h }); }; })), qa = Ee("matAlgo06xS0S0", ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return function (e, n, i) { var a = e._values, o = e._size, u = e._datatype, s = n._values, c = n._size, f = n._datatype; if (o.length !== c.length)
        throw new Yr(o.length, c.length); if (o[0] !== c[0] || o[1] !== c[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + c + ")"); var l, p = o[0], m = o[1], h = r, d = 0, v = i; "string" == typeof u && u === f && (l = u, h = t.find(r, [l, l]), d = t.convert(0, l), v = t.find(i, [l, l])); for (var y = a && s ? [] : void 0, g = [], x = [], b = y ? [] : void 0, w = [], N = [], D = 0; D < m; D++) {
        x[D] = g.length;
        var E = D + 1;
        if (In(e, D, w, b, N, E, g, v), In(n, D, w, b, N, E, g, v), b)
            for (var A = x[D]; A < g.length;) {
                var S = g[A];
                if (N[S] === E) {
                    var C = b[S];
                    h(C, d) ? g.splice(A, 1) : (y.push(C), A++);
                }
                else
                    g.splice(A, 1);
            }
        else
            for (var M = x[D]; M < g.length;)
                N[g[M]] !== E ? g.splice(M, 1) : M++;
    } return x[m] = g.length, e.createSparseMatrix({ values: y, index: g, ptr: x, size: [p, m], datatype: l }); }; })), ja = Ee("lcm", ["typed", "matrix", "equalScalar"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = za({ typed: t, equalScalar: n }), a = qa({ typed: t, equalScalar: n }), o = la({ typed: t, equalScalar: n }), u = Ia({ typed: t, matrix: r }), s = "number | BigNumber | Fraction | Matrix | Array", c = {}; return c["".concat(s, ", ").concat(s, ", ...").concat(s)] = t.referToSelf((function (e) { return function (t, r, n) { for (var i = e(t, r), a = 0; a < n.length; a++)
        i = e(i, n[a]); return i; }; })), t("lcm", { "number, number": Pi, "BigNumber, BigNumber": function (e, t) { if (!e.isInt() || !t.isInt())
            throw new Error("Parameters in function lcm must be integer numbers"); if (e.isZero())
            return e; if (t.isZero())
            return t; for (var r = e.times(t); !t.isZero();) {
            var n = t;
            t = e.mod(n), e = n;
        } return r.div(e).abs(); }, "Fraction, Fraction": function (e, t) { return e.lcm(t); } }, u({ SS: a, DS: i, Ss: o }), c); })), Pa = "log10", La = Ee(Pa, ["typed", "config", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.Complex; return t(Pa, { number: function (e) { return e >= 0 || r.predictable ? Li(e) : new n(e, 0).log().div(Math.LN10); }, Complex: function (e) { return new n(e).log().div(Math.LN10); }, BigNumber: function (e) { return !e.isNegative() || r.predictable ? e.log() : new n(e.toNumber(), 0).log().div(Math.LN10); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Ua = "log2", $a = Ee(Ua, ["typed", "config", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.Complex; return t(Ua, { number: function (e) { return e >= 0 || r.predictable ? Ui(e) : i(new n(e, 0)); }, Complex: i, BigNumber: function (e) { return !e.isNegative() || r.predictable ? e.log(2) : i(new n(e.toNumber(), 0)); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); function i(e) { var t = Math.sqrt(e.re * e.re + e.im * e.im); return new n(Math.log2 ? Math.log2(t) : Math.log(t) / Math.LN2, Math.atan2(e.im, e.re) / Math.LN2); } })), Ha = Ee("matAlgo03xDSf", ["typed"], (function (e) { var t = e.typed; return function (e, r, n, i) { var a = e._data, o = e._size, u = e._datatype, s = r._values, c = r._index, f = r._ptr, l = r._size, p = r._datatype; if (o.length !== l.length)
        throw new Yr(o.length, l.length); if (o[0] !== l[0] || o[1] !== l[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")"); if (!s)
        throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix"); var m, h = o[0], d = o[1], v = 0, y = n; "string" == typeof u && u === p && (m = u, v = t.convert(0, m), y = t.find(n, [m, m])); for (var g = [], x = 0; x < h; x++)
        g[x] = []; for (var b = [], w = [], N = 0; N < d; N++) {
        for (var D = N + 1, E = f[N], A = f[N + 1], S = E; S < A; S++) {
            var C = c[S];
            b[C] = i ? y(s[S], a[C][N]) : y(a[C][N], s[S]), w[C] = D;
        }
        for (var M = 0; M < h; M++)
            w[M] === D ? g[M][N] = b[M] : g[M][N] = i ? y(v, a[M][N]) : y(a[M][N], v);
    } return e.createDenseMatrix({ data: g, size: [h, d], datatype: m }); }; })), Ga = Ee("matAlgo05xSfSf", ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return function (e, n, i) { var a = e._values, o = e._index, u = e._ptr, s = e._size, c = e._datatype, f = n._values, l = n._index, p = n._ptr, m = n._size, h = n._datatype; if (s.length !== m.length)
        throw new Yr(s.length, m.length); if (s[0] !== m[0] || s[1] !== m[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + m + ")"); var d, v = s[0], y = s[1], g = r, x = 0, b = i; "string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]), x = t.convert(0, d), b = t.find(i, [d, d])); var w, N, D, E, A = a && f ? [] : void 0, S = [], C = [], M = A ? [] : void 0, F = A ? [] : void 0, O = [], T = []; for (N = 0; N < y; N++) {
        C[N] = S.length;
        var B = N + 1;
        for (D = u[N], E = u[N + 1]; D < E; D++)
            w = o[D], S.push(w), O[w] = B, M && (M[w] = a[D]);
        for (D = p[N], E = p[N + 1]; D < E; D++)
            O[w = l[D]] !== B && S.push(w), T[w] = B, F && (F[w] = f[D]);
        if (A)
            for (D = C[N]; D < S.length;) {
                var _ = O[w = S[D]], k = T[w];
                if (_ === B || k === B) {
                    var I = b(_ === B ? M[w] : x, k === B ? F[w] : x);
                    g(I, x) ? S.splice(D, 1) : (A.push(I), D++);
                }
            }
    } return C[y] = S.length, e.createSparseMatrix({ values: A, index: S, ptr: C, size: [v, y], datatype: d }); }; })), Va = Ee("mod", ["typed", "matrix", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = za({ typed: t, equalScalar: n }), o = Ha({ typed: t }), u = Ga({ typed: t, equalScalar: n }), s = la({ typed: t, equalScalar: n }), c = pa({ typed: t, DenseMatrix: i }); return t("mod", { "number, number": $i, "BigNumber, BigNumber": function (e, t) { if (t.isNeg())
            throw new Error("Cannot calculate mod for a negative divisor"); return t.isZero() ? e : e.mod(t); }, "Fraction, Fraction": function (e, t) { if (t.compare(0) < 0)
            throw new Error("Cannot calculate mod for a negative divisor"); return e.compare(0) >= 0 ? e.mod(t) : e.mod(t).add(t).mod(t); } }, Ia({ typed: t, matrix: r })({ SS: u, DS: o, SD: a, Ss: s, sS: c })); })), Za = Ee("multiplyScalar", ["typed"], (function (e) { return (0, e.typed)("multiplyScalar", { "number, number": Bi, "Complex, Complex": function (e, t) { return e.mul(t); }, "BigNumber, BigNumber": function (e, t) { return e.times(t); }, "Fraction, Fraction": function (e, t) { return e.mul(t); }, "number | Fraction | BigNumber | Complex, Unit": function (e, t) { return t.multiply(e); }, "Unit, number | Fraction | BigNumber | Complex | Unit": function (e, t) { return e.multiply(t); } }); })), Wa = "multiply", Ja = Ee(Wa, ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], (function (e) { var t = e.typed, r = e.matrix, n = e.addScalar, i = e.multiplyScalar, a = e.equalScalar, o = e.dot, u = la({ typed: t, equalScalar: a }), s = ma({ typed: t }); function c(e, t) { switch (e.length) {
        case 1:
            switch (t.length) {
                case 1:
                    if (e[0] !== t[0])
                        throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
                    break;
                case 2:
                    if (e[0] !== t[0])
                        throw new RangeError("Dimension mismatch in multiplication. Vector length (" + e[0] + ") must match Matrix rows (" + t[0] + ")");
                    break;
                default: throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)");
            }
            break;
        case 2:
            switch (t.length) {
                case 1:
                    if (e[1] !== t[0])
                        throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + e[1] + ") must match Vector length (" + t[0] + ")");
                    break;
                case 2:
                    if (e[1] !== t[0])
                        throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + e[1] + ") must match Matrix B rows (" + t[0] + ")");
                    break;
                default: throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)");
            }
            break;
        default: throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + e.length + " dimensions)");
    } } var f = t("_multiplyMatrixVector", { "DenseMatrix, any": function (e, r) { var a, o = e._data, u = e._size, s = e._datatype, c = r._data, f = r._datatype, l = u[0], p = u[1], m = n, h = i; s && f && s === f && "string" == typeof s && (a = s, m = t.find(n, [a, a]), h = t.find(i, [a, a])); for (var d = [], v = 0; v < l; v++) {
            for (var y = o[v], g = h(y[0], c[0]), x = 1; x < p; x++)
                g = m(g, h(y[x], c[x]));
            d[v] = g;
        } return e.createDenseMatrix({ data: d, size: [l], datatype: a }); }, "SparseMatrix, any": function (e, r) { var o = e._values, u = e._index, s = e._ptr, c = e._datatype; if (!o)
            throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix"); var f, l = r._data, p = r._datatype, m = e._size[0], h = r._size[0], d = [], v = [], y = [], g = n, x = i, b = a, w = 0; c && p && c === p && "string" == typeof c && (f = c, g = t.find(n, [f, f]), x = t.find(i, [f, f]), b = t.find(a, [f, f]), w = t.convert(0, f)); var N = [], D = []; y[0] = 0; for (var E = 0; E < h; E++) {
            var A = l[E];
            if (!b(A, w))
                for (var S = s[E], C = s[E + 1], M = S; M < C; M++) {
                    var F = u[M];
                    D[F] ? N[F] = g(N[F], x(A, o[M])) : (D[F] = !0, v.push(F), N[F] = x(A, o[M]));
                }
        } for (var O = v.length, T = 0; T < O; T++) {
            var B = v[T];
            d[T] = N[B];
        } return y[1] = v.length, e.createSparseMatrix({ values: d, index: v, ptr: y, size: [m, 1], datatype: f }); } }), p = t("_multiplyMatrixMatrix", { "DenseMatrix, DenseMatrix": function (e, r) { var a, o = e._data, u = e._size, s = e._datatype, c = r._data, f = r._size, l = r._datatype, p = u[0], m = u[1], h = f[1], d = n, v = i; s && l && s === l && "string" == typeof s && (a = s, d = t.find(n, [a, a]), v = t.find(i, [a, a])); for (var y = [], g = 0; g < p; g++) {
            var x = o[g];
            y[g] = [];
            for (var b = 0; b < h; b++) {
                for (var w = v(x[0], c[0][b]), N = 1; N < m; N++)
                    w = d(w, v(x[N], c[N][b]));
                y[g][b] = w;
            }
        } return e.createDenseMatrix({ data: y, size: [p, h], datatype: a }); }, "DenseMatrix, SparseMatrix": function (e, r) { var o = e._data, u = e._size, s = e._datatype, c = r._values, f = r._index, l = r._ptr, p = r._size, m = r._datatype; if (!c)
            throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix"); var h, d = u[0], v = p[1], y = n, g = i, x = a, b = 0; s && m && s === m && "string" == typeof s && (h = s, y = t.find(n, [h, h]), g = t.find(i, [h, h]), x = t.find(a, [h, h]), b = t.convert(0, h)); for (var w = [], N = [], D = [], E = r.createSparseMatrix({ values: w, index: N, ptr: D, size: [d, v], datatype: h }), A = 0; A < v; A++) {
            D[A] = N.length;
            var S = l[A], C = l[A + 1];
            if (C > S)
                for (var M = 0, F = 0; F < d; F++) {
                    for (var O = F + 1, T = void 0, B = S; B < C; B++) {
                        var _ = f[B];
                        M !== O ? (T = g(o[F][_], c[B]), M = O) : T = y(T, g(o[F][_], c[B]));
                    }
                    M !== O || x(T, b) || (N.push(F), w.push(T));
                }
        } return D[v] = N.length, E; }, "SparseMatrix, DenseMatrix": function (e, r) { var o = e._values, u = e._index, s = e._ptr, c = e._datatype; if (!o)
            throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix"); var f, l = r._data, p = r._datatype, m = e._size[0], h = r._size[0], d = r._size[1], v = n, y = i, g = a, x = 0; c && p && c === p && "string" == typeof c && (f = c, v = t.find(n, [f, f]), y = t.find(i, [f, f]), g = t.find(a, [f, f]), x = t.convert(0, f)); for (var b = [], w = [], N = [], D = e.createSparseMatrix({ values: b, index: w, ptr: N, size: [m, d], datatype: f }), E = [], A = [], S = 0; S < d; S++) {
            N[S] = w.length;
            for (var C = S + 1, M = 0; M < h; M++) {
                var F = l[M][S];
                if (!g(F, x))
                    for (var O = s[M], T = s[M + 1], B = O; B < T; B++) {
                        var _ = u[B];
                        A[_] !== C ? (A[_] = C, w.push(_), E[_] = y(F, o[B])) : E[_] = v(E[_], y(F, o[B]));
                    }
            }
            for (var k = N[S], I = w.length, R = k; R < I; R++) {
                var z = w[R];
                b[R] = E[z];
            }
        } return N[d] = w.length, D; }, "SparseMatrix, SparseMatrix": function (e, r) { var a, o = e._values, u = e._index, s = e._ptr, c = e._datatype, f = r._values, l = r._index, p = r._ptr, m = r._datatype, h = e._size[0], d = r._size[1], v = o && f, y = n, g = i; c && m && c === m && "string" == typeof c && (a = c, y = t.find(n, [a, a]), g = t.find(i, [a, a])); for (var x, b, w, N, D, E, A, S, C = v ? [] : void 0, M = [], F = [], O = e.createSparseMatrix({ values: C, index: M, ptr: F, size: [h, d], datatype: a }), T = v ? [] : void 0, B = [], _ = 0; _ < d; _++) {
            F[_] = M.length;
            var k = _ + 1;
            for (D = p[_], E = p[_ + 1], N = D; N < E; N++)
                if (S = l[N], v)
                    for (b = s[S], w = s[S + 1], x = b; x < w; x++)
                        B[A = u[x]] !== k ? (B[A] = k, M.push(A), T[A] = g(f[N], o[x])) : T[A] = y(T[A], g(f[N], o[x]));
                else
                    for (b = s[S], w = s[S + 1], x = b; x < w; x++)
                        B[A = u[x]] !== k && (B[A] = k, M.push(A));
            if (v)
                for (var I = F[_], R = M.length, z = I; z < R; z++) {
                    var q = M[z];
                    C[z] = T[q];
                }
        } return F[d] = M.length, O; } }); return t(Wa, i, { "Array, Array": t.referTo("Matrix, Matrix", (function (e) { return function (t, n) { c(Qr(t), Qr(n)); var i = e(r(t), r(n)); return l(i) ? i.valueOf() : i; }; })), "Matrix, Matrix": function (e, r) { var a = e.size(), u = r.size(); return c(a, u), 1 === a.length ? 1 === u.length ? function (e, t, r) { if (0 === r)
            throw new Error("Cannot multiply two empty vectors"); return o(e, t); }(e, r, a[0]) : function (e, r) { if ("dense" !== r.storage())
            throw new Error("Support for SparseMatrix not implemented"); return function (e, r) { var a, o = e._data, u = e._size, s = e._datatype, c = r._data, f = r._size, l = r._datatype, p = u[0], m = f[1], h = n, d = i; s && l && s === l && "string" == typeof s && (a = s, h = t.find(n, [a, a]), d = t.find(i, [a, a])); for (var v = [], y = 0; y < m; y++) {
            for (var g = d(o[0], c[0][y]), x = 1; x < p; x++)
                g = h(g, d(o[x], c[x][y]));
            v[y] = g;
        } return e.createDenseMatrix({ data: v, size: [m], datatype: a }); }(e, r); }(e, r) : 1 === u.length ? f(e, r) : p(e, r); }, "Matrix, Array": t.referTo("Matrix,Matrix", (function (e) { return function (t, n) { return e(t, r(n)); }; })), "Array, Matrix": t.referToSelf((function (e) { return function (t, n) { return e(r(t, n.storage()), n); }; })), "SparseMatrix, any": function (e, t) { return u(e, t, i, !1); }, "DenseMatrix, any": function (e, t) { return s(e, t, i, !1); }, "any, SparseMatrix": function (e, t) { return u(t, e, i, !0); }, "any, DenseMatrix": function (e, t) { return s(t, e, i, !0); }, "Array, any": function (e, t) { return s(r(e), t, i, !1).valueOf(); }, "any, Array": function (e, t) { return s(r(t), e, i, !0).valueOf(); }, "any, any": i, "any, any, ...any": t.referToSelf((function (e) { return function (t, r, n) { for (var i = e(t, r), a = 0; a < n.length; a++)
            i = e(i, n[a]); return i; }; })) }); })), Ya = "nthRoot", Xa = Ee(Ya, ["typed", "matrix", "equalScalar", "BigNumber"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.BigNumber, a = Ta({ typed: t }), o = za({ typed: t, equalScalar: n }), u = qa({ typed: t, equalScalar: n }), s = la({ typed: t, equalScalar: n }), c = Ia({ typed: t, matrix: r }); function f() { throw new Error("Complex number not supported in function nthRoot. Use nthRoots instead."); } return t(Ya, { number: Hi, "number, number": Hi, BigNumber: function (e) { return l(e, new i(2)); }, "BigNumber, BigNumber": l, Complex: f, "Complex, number": f, Array: t.referTo("DenseMatrix,number", (function (e) { return function (t) { return e(r(t), 2).valueOf(); }; })), DenseMatrix: t.referTo("DenseMatrix,number", (function (e) { return function (t) { return e(t, 2); }; })), SparseMatrix: t.referTo("SparseMatrix,number", (function (e) { return function (t) { return e(t, 2); }; })), "SparseMatrix, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { if (1 === r.density())
            return u(t, r, e); throw new Error("Root must be non-zero"); }; })), "DenseMatrix, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { if (1 === r.density())
            return a(t, r, e, !1); throw new Error("Root must be non-zero"); }; })), "Array, SparseMatrix": t.referTo("DenseMatrix,SparseMatrix", (function (e) { return function (t, n) { return e(r(t), n); }; })), "number | BigNumber, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { if (1 === r.density())
            return s(r, t, e, !0); throw new Error("Root must be non-zero"); }; })) }, c({ scalar: "number | BigNumber", SD: o, Ss: s, sS: !1 })); function l(e, t) { var r = i.precision, n = i.clone({ precision: r + 2 }), a = new i(0), o = new n(1), u = t.isNegative(); if (u && (t = t.neg()), t.isZero())
        throw new Error("Root must be non-zero"); if (e.isNegative() && !t.abs().mod(2).equals(1))
        throw new Error("Root must be odd when a is negative."); if (e.isZero())
        return u ? new n(1 / 0) : 0; if (!e.isFinite())
        return u ? a : e; var s = e.abs().pow(o.div(t)); return s = e.isNeg() ? s.neg() : s, new i((u ? o.div(s) : s).toPrecision(r)); } })), Qa = "sign", Ka = Ee(Qa, ["typed", "BigNumber", "Fraction", "complex"], (function (e) { var t = e.typed, r = e.BigNumber, n = e.complex, i = e.Fraction; return t(Qa, { number: Gi, Complex: function (e) { return 0 === e.im ? n(Gi(e.re)) : e.sign(); }, BigNumber: function (e) { return new r(e.cmp(0)); }, Fraction: function (e) { return new i(e.s, 1); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })), Unit: t.referToSelf((function (e) { return function (r) { if (!r._isDerived() && 0 !== r.units[0].unit.offset)
            throw new TypeError("sign is ambiguous for units with offset"); return t.find(e, r.valueType())(r.value); }; })) }); })), eo = Ee("sqrt", ["config", "typed", "Complex"], (function (e) { var t = e.config, r = e.typed, n = e.Complex; return r("sqrt", { number: i, Complex: function (e) { return e.sqrt(); }, BigNumber: function (e) { return !e.isNegative() || t.predictable ? e.sqrt() : i(e.toNumber()); }, Unit: function (e) { return e.pow(.5); } }); function i(e) { return isNaN(e) ? NaN : e >= 0 || t.predictable ? Math.sqrt(e) : new n(e, 0).sqrt(); } })), to = "square", ro = Ee(to, ["typed"], (function (e) { return (0, e.typed)(to, { number: Vi, Complex: function (e) { return e.mul(e); }, BigNumber: function (e) { return e.times(e); }, Fraction: function (e) { return e.mul(e); }, Unit: function (e) { return e.pow(2); } }); })), no = "subtract", io = Ee(no, ["typed", "matrix", "equalScalar", "addScalar", "unaryMinus", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = (e.addScalar, e.unaryMinus, e.DenseMatrix), a = Ta({ typed: t }), o = Ha({ typed: t }), u = Ga({ typed: t, equalScalar: n }), s = _a({ typed: t, DenseMatrix: i }), c = pa({ typed: t, DenseMatrix: i }), f = Ia({ typed: t, matrix: r }); return t(no, { "number, number": function (e, t) { return e - t; }, "Complex, Complex": function (e, t) { return e.sub(t); }, "BigNumber, BigNumber": function (e, t) { return e.minus(t); }, "Fraction, Fraction": function (e, t) { return e.sub(t); }, "Unit, Unit": t.referToSelf((function (e) { return function (r, n) { if (null === r.value)
            throw new Error("Parameter x contains a unit with undefined value"); if (null === n.value)
            throw new Error("Parameter y contains a unit with undefined value"); if (!r.equalBase(n))
            throw new Error("Units do not match"); var i = r.clone(); return i.value = t.find(e, [i.valueType(), n.valueType()])(i.value, n.value), i.fixPrefix = !1, i; }; })) }, f({ SS: u, DS: a, SD: o, Ss: c, sS: s })); })), ao = "xgcd", oo = Ee(ao, ["typed", "config", "matrix", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.BigNumber; return t(ao, { "number, number": function (e, t) { var i = Zi(e, t); return "Array" === r.matrix ? i : n(i); }, "BigNumber, BigNumber": function (e, t) { var a, o, u, s, c = new i(0), f = new i(1), l = c, p = f, m = f, h = c; if (!e.isInt() || !t.isInt())
            throw new Error("Parameters in function xgcd must be integer numbers"); for (; !t.isZero();)
            o = e.div(t).floor(), u = e.mod(t), a = l, l = p.minus(o.times(l)), p = a, a = m, m = h.minus(o.times(m)), h = a, e = t, t = u; return s = e.lt(c) ? [e.neg(), p.neg(), h.neg()] : [e, e.isZero() ? 0 : p, h], "Array" === r.matrix ? s : n(s); } }); })), uo = "invmod", so = Ee(uo, ["typed", "config", "BigNumber", "xgcd", "equal", "smaller", "mod", "add", "isInteger"], (function (e) { var t = e.typed, r = (e.config, e.BigNumber), n = e.xgcd, i = e.equal, a = e.smaller, o = e.mod, u = e.add, s = e.isInteger; return t(uo, { "number, number": c, "BigNumber, BigNumber": c }); function c(e, t) { if (!s(e) || !s(t))
        throw new Error("Parameters in function invmod must be integer numbers"); if (e = o(e, t), i(t, 0))
        throw new Error("Divisor must be non zero"); var c = n(e, t), f = fa(c = c.valueOf(), 2), l = f[0], p = f[1]; return i(l, r(1)) ? (p = o(p, t), a(p, r(0)) && (p = u(p, t)), p) : NaN; } })), co = Ee("matAlgo09xS0Sf", ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return function (e, n, i) { var a = e._values, o = e._index, u = e._ptr, s = e._size, c = e._datatype, f = n._values, l = n._index, p = n._ptr, m = n._size, h = n._datatype; if (s.length !== m.length)
        throw new Yr(s.length, m.length); if (s[0] !== m[0] || s[1] !== m[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + m + ")"); var d, v = s[0], y = s[1], g = r, x = 0, b = i; "string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]), x = t.convert(0, d), b = t.find(i, [d, d])); var w, N, D, E, A, S = a && f ? [] : void 0, C = [], M = [], F = S ? [] : void 0, O = []; for (N = 0; N < y; N++) {
        M[N] = C.length;
        var T = N + 1;
        if (F)
            for (E = p[N], A = p[N + 1], D = E; D < A; D++)
                O[w = l[D]] = T, F[w] = f[D];
        for (E = u[N], A = u[N + 1], D = E; D < A; D++)
            if (w = o[D], F) {
                var B = O[w] === T ? F[w] : x, _ = b(a[D], B);
                g(_, x) || (C.push(w), S.push(_));
            }
            else
                C.push(w);
    } return M[y] = C.length, e.createSparseMatrix({ values: S, index: C, ptr: M, size: [v, y], datatype: d }); }; })), fo = "dotMultiply", lo = Ee(fo, ["typed", "matrix", "equalScalar", "multiplyScalar"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.multiplyScalar, a = za({ typed: t, equalScalar: n }), o = co({ typed: t, equalScalar: n }), u = la({ typed: t, equalScalar: n }), s = Ia({ typed: t, matrix: r }); return t(fo, s({ elop: i, SS: o, DS: a, Ss: u })); }));
    function po(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger())
        throw new Error("Integers expected in function bitAnd"); var r = e.constructor; if (e.isNaN() || t.isNaN())
        return new r(NaN); if (e.isZero() || t.eq(-1) || e.eq(t))
        return e; if (t.isZero() || e.eq(-1))
        return t; if (!e.isFinite() || !t.isFinite()) {
        if (!e.isFinite() && !t.isFinite())
            return e.isNegative() === t.isNegative() ? e : new r(0);
        if (!e.isFinite())
            return t.isNegative() ? e : e.isNegative() ? new r(0) : t;
        if (!t.isFinite())
            return e.isNegative() ? t : t.isNegative() ? new r(0) : e;
    } return vo(e, t, (function (e, t) { return e & t; })); }
    function mo(e) { if (e.isFinite() && !e.isInteger())
        throw new Error("Integer expected in function bitNot"); var t = e.constructor, r = t.precision; t.config({ precision: 1e9 }); var n = e.plus(new t(1)); return n.s = -n.s || null, t.config({ precision: r }), n; }
    function ho(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger())
        throw new Error("Integers expected in function bitOr"); var r = e.constructor; if (e.isNaN() || t.isNaN())
        return new r(NaN); var n = new r(-1); return e.isZero() || t.eq(n) || e.eq(t) ? t : t.isZero() || e.eq(n) ? e : e.isFinite() && t.isFinite() ? vo(e, t, (function (e, t) { return e | t; })) : !e.isFinite() && !e.isNegative() && t.isNegative() || e.isNegative() && !t.isNegative() && !t.isFinite() ? n : e.isNegative() && t.isNegative() ? e.isFinite() ? e : t : e.isFinite() ? t : e; }
    function vo(e, t, r) { var n, i, a, o, u, s = e.constructor, c = +(e.s < 0), f = +(t.s < 0); if (c) {
        n = yo(mo(e));
        for (var l = 0; l < n.length; ++l)
            n[l] ^= 1;
    }
    else
        n = yo(e); if (f) {
        i = yo(mo(t));
        for (var p = 0; p < i.length; ++p)
            i[p] ^= 1;
    }
    else
        i = yo(t); n.length <= i.length ? (a = n, o = i, u = c) : (a = i, o = n, u = f); var m = a.length, h = o.length, d = 1 ^ r(c, f), v = new s(1 ^ d), y = new s(1), g = new s(2), x = s.precision; for (s.config({ precision: 1e9 }); m > 0;)
        r(a[--m], o[--h]) === d && (v = v.plus(y)), y = y.times(g); for (; h > 0;)
        r(u, o[--h]) === d && (v = v.plus(y)), y = y.times(g); return s.config({ precision: x }), 0 === d && (v.s = -v.s), v; }
    function yo(e) { for (var t = e.d, r = t[0] + "", n = 1; n < t.length; ++n) {
        for (var i = t[n] + "", a = 7 - i.length; a--;)
            i = "0" + i;
        r += i;
    } for (var o = r.length; "0" === r.charAt(o);)
        o--; var u = e.e, s = r.slice(0, o + 1 || 1), c = s.length; if (u > 0)
        if (++u > c)
            for (u -= c; u--;)
                s += "0";
        else
            u < c && (s = s.slice(0, u) + "." + s.slice(u)); for (var f = [0], l = 0; l < s.length;) {
        for (var p = f.length; p--;)
            f[p] *= 10;
        f[0] += parseInt(s.charAt(l++));
        for (var m = 0; m < f.length; ++m)
            f[m] > 1 && (null !== f[m + 1] && void 0 !== f[m + 1] || (f[m + 1] = 0), f[m + 1] += f[m] >> 1, f[m] &= 1);
    } return f.reverse(); }
    function go(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger())
        throw new Error("Integers expected in function bitXor"); var r = e.constructor; if (e.isNaN() || t.isNaN())
        return new r(NaN); if (e.isZero())
        return t; if (t.isZero())
        return e; if (e.eq(t))
        return new r(0); var n = new r(-1); return e.eq(n) ? mo(t) : t.eq(n) ? mo(e) : e.isFinite() && t.isFinite() ? vo(e, t, (function (e, t) { return e ^ t; })) : e.isFinite() || t.isFinite() ? new r(e.isNegative() === t.isNegative() ? 1 / 0 : -1 / 0) : n; }
    function xo(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger())
        throw new Error("Integers expected in function leftShift"); var r = e.constructor; return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : e.isFinite() || t.isFinite() ? t.lt(55) ? e.times(Math.pow(2, t.toNumber()) + "") : e.times(new r(2).pow(t)) : new r(NaN); }
    function bo(e, t) { if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger())
        throw new Error("Integers expected in function rightArithShift"); var r = e.constructor; return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : t.isFinite() ? t.lt(55) ? e.div(Math.pow(2, t.toNumber()) + "").floor() : e.div(new r(2).pow(t)).floor() : e.isNegative() ? new r(-1) : e.isFinite() ? new r(0) : new r(NaN); }
    r(5069);
    var wo = "number, number";
    function No(e, t) { if (!V(e) || !V(t))
        throw new Error("Integers expected in function bitAnd"); return e & t; }
    function Do(e) { if (!V(e))
        throw new Error("Integer expected in function bitNot"); return ~e; }
    function Eo(e, t) { if (!V(e) || !V(t))
        throw new Error("Integers expected in function bitOr"); return e | t; }
    function Ao(e, t) { if (!V(e) || !V(t))
        throw new Error("Integers expected in function bitXor"); return e ^ t; }
    function So(e, t) { if (!V(e) || !V(t))
        throw new Error("Integers expected in function leftShift"); return e << t; }
    function Co(e, t) { if (!V(e) || !V(t))
        throw new Error("Integers expected in function rightArithShift"); return e >> t; }
    function Mo(e, t) { if (!V(e) || !V(t))
        throw new Error("Integers expected in function rightLogShift"); return e >>> t; }
    No.signature = wo, Do.signature = "number", Eo.signature = wo, Ao.signature = wo, So.signature = wo, Co.signature = wo, Mo.signature = wo;
    var Fo = "bitAnd", Oo = Ee(Fo, ["typed", "matrix", "equalScalar"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = za({ typed: t, equalScalar: n }), a = qa({ typed: t, equalScalar: n }), o = la({ typed: t, equalScalar: n }), u = Ia({ typed: t, matrix: r }); return t(Fo, { "number, number": No, "BigNumber, BigNumber": po }, u({ SS: a, DS: i, Ss: o })); })), To = "bitNot", Bo = Ee(To, ["typed"], (function (e) { var t = e.typed; return t(To, { number: Do, BigNumber: mo, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), _o = "bitOr", ko = Ee(_o, ["typed", "matrix", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = Ta({ typed: t }), o = Ba({ typed: t, equalScalar: n }), u = _a({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: r }); return t(_o, { "number, number": Eo, "BigNumber, BigNumber": ho }, s({ SS: o, DS: a, Ss: u })); })), Io = Ee("matAlgo07xSSf", ["typed", "DenseMatrix"], (function (e) { var t = e.typed, r = e.DenseMatrix; return function (e, i, a) { var o = e._size, u = e._datatype, s = i._size, c = i._datatype; if (o.length !== s.length)
        throw new Yr(o.length, s.length); if (o[0] !== s[0] || o[1] !== s[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + s + ")"); var f, l, p, m = o[0], h = o[1], d = 0, v = a; "string" == typeof u && u === c && (f = u, d = t.convert(0, f), v = t.find(a, [f, f])); var y = []; for (l = 0; l < m; l++)
        y[l] = []; var g = [], x = [], b = [], w = []; for (p = 0; p < h; p++) {
        var N = p + 1;
        for (n(e, p, b, g, N), n(i, p, w, x, N), l = 0; l < m; l++) {
            var D = b[l] === N ? g[l] : d, E = w[l] === N ? x[l] : d;
            y[l][p] = v(D, E);
        }
    } return new r({ data: y, size: [m, h], datatype: f }); }; function n(e, t, r, n, i) { for (var a = e._values, o = e._index, u = e._ptr, s = u[t], c = u[t + 1]; s < c; s++) {
        var f = o[s];
        r[f] = i, n[f] = a[s];
    } } })), Ro = "bitXor", zo = Ee(Ro, ["typed", "matrix", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.DenseMatrix, i = Ha({ typed: t }), a = Io({ typed: t, DenseMatrix: n }), o = pa({ typed: t, DenseMatrix: n }), u = Ia({ typed: t, matrix: r }); return t(Ro, { "number, number": Ao, "BigNumber, BigNumber": go }, u({ SS: a, DS: i, Ss: o })); })), qo = Ee("arg", ["typed"], (function (e) { var t = e.typed; return t("arg", { number: function (e) { return Math.atan2(0, e); }, BigNumber: function (e) { return e.constructor.atan2(0, e); }, Complex: function (e) { return e.arg(); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), jo = "conj", Po = Ee(jo, ["typed"], (function (e) { var t = e.typed; return t(jo, { "number | BigNumber | Fraction": function (e) { return e; }, Complex: function (e) { return e.conjugate(); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Lo = Ee("im", ["typed"], (function (e) { var t = e.typed; return t("im", { number: function () { return 0; }, "BigNumber | Fraction": function (e) { return e.mul(0); }, Complex: function (e) { return e.im; }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Uo = Ee("re", ["typed"], (function (e) { var t = e.typed; return t("re", { "number | BigNumber | Fraction": function (e) { return e; }, Complex: function (e) { return e.re; }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), $o = "number, number";
    function Ho(e) { return !e; }
    function Go(e, t) { return !(!e && !t); }
    function Vo(e, t) { return !!e != !!t; }
    function Zo(e, t) { return !(!e || !t); }
    Ho.signature = "number", Go.signature = $o, Vo.signature = $o, Zo.signature = $o;
    var Wo = Ee("not", ["typed"], (function (e) { var t = e.typed; return t("not", { "null | undefined": function () { return !0; }, number: Ho, Complex: function (e) { return 0 === e.re && 0 === e.im; }, BigNumber: function (e) { return e.isZero() || e.isNaN(); }, Unit: t.referToSelf((function (e) { return function (r) { return t.find(e, r.valueType())(r.value); }; })), "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Jo = Ee("or", ["typed", "matrix", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = Ha({ typed: t }), o = Ga({ typed: t, equalScalar: n }), u = pa({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: r }); return t("or", { "number, number": Go, "Complex, Complex": function (e, t) { return 0 !== e.re || 0 !== e.im || 0 !== t.re || 0 !== t.im; }, "BigNumber, BigNumber": function (e, t) { return !e.isZero() && !e.isNaN() || !t.isZero() && !t.isNaN(); }, "Unit, Unit": t.referToSelf((function (e) { return function (t, r) { return e(t.value || 0, r.value || 0); }; })) }, s({ SS: o, DS: a, Ss: u })); })), Yo = Ee("xor", ["typed", "matrix", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.DenseMatrix, i = Ha({ typed: t }), a = Io({ typed: t, DenseMatrix: n }), o = pa({ typed: t, DenseMatrix: n }), u = Ia({ typed: t, matrix: r }); return t("xor", { "number, number": Vo, "Complex, Complex": function (e, t) { return (0 !== e.re || 0 !== e.im) != (0 !== t.re || 0 !== t.im); }, "BigNumber, BigNumber": function (e, t) { return (!e.isZero() && !e.isNaN()) != (!t.isZero() && !t.isNaN()); }, "Unit, Unit": t.referToSelf((function (e) { return function (t, r) { return e(t.value || 0, r.value || 0); }; })) }, u({ SS: a, DS: i, Ss: o })); })), Xo = "concat", Qo = Ee(Xo, ["typed", "matrix", "isInteger"], (function (e) { var t = e.typed, r = e.matrix, n = e.isInteger; return t(Xo, { "...Array | Matrix | number | BigNumber": function (e) { var t, o, u = e.length, s = -1, c = !1, f = []; for (t = 0; t < u; t++) {
            var p = e[t];
            if (l(p) && (c = !0), i(p) || a(p)) {
                if (t !== u - 1)
                    throw new Error("Dimension must be specified as last argument");
                if (o = s, s = p.valueOf(), !n(s))
                    throw new TypeError("Integer number expected for dimension");
                if (s < 0 || t > 0 && s > o)
                    throw new Xr(s, o + 1);
            }
            else {
                var m = he(p).valueOf(), h = Qr(m);
                if (f[t] = m, o = s, s = h.length - 1, t > 0 && s !== o)
                    throw new Yr(o + 1, s + 1);
            }
        } if (0 === f.length)
            throw new SyntaxError("At least one matrix expected"); for (var d = f.shift(); f.length;)
            d = Ko(d, f.shift(), s, 0); return c ? r(d) : d; }, "...string": function (e) { return e.join(""); } }); }));
    function Ko(e, t, r, n) { if (n < r) {
        if (e.length !== t.length)
            throw new Yr(e.length, t.length);
        for (var i = [], a = 0; a < e.length; a++)
            i[a] = Ko(e[a], t[a], r, n + 1);
        return i;
    } return e.concat(t); }
    var eu = "column", tu = Ee(eu, ["typed", "Index", "matrix", "range"], (function (e) { var t = e.typed, r = e.Index, n = e.matrix, i = e.range; return t(eu, { "Matrix, number": a, "Array, number": function (e, t) { return a(n(he(e)), t).valueOf(); } }); function a(e, t) { if (2 !== e.size().length)
        throw new Error("Only two dimensional matrix is supported"); tn(t, e.size()[1]); var n = i(0, e.size()[0]), a = new r(n, t); return e.subset(a); } })), ru = "count", nu = Ee(ru, ["typed", "size", "prod"], (function (e) { var t = e.typed, r = e.size, n = e.prod; return t(ru, { string: function (e) { return e.length; }, "Matrix | Array": function (e) { return n(r(e)); } }); })), iu = "cross", au = Ee(iu, ["typed", "matrix", "subtract", "multiply"], (function (e) { var t = e.typed, r = e.matrix, n = e.subtract, i = e.multiply; return t(iu, { "Matrix, Matrix": function (e, t) { return r(a(e.toArray(), t.toArray())); }, "Matrix, Array": function (e, t) { return r(a(e.toArray(), t)); }, "Array, Matrix": function (e, t) { return r(a(e, t.toArray())); }, "Array, Array": a }); function a(e, t) { var r = Math.max(Qr(e).length, Qr(t).length); e = sn(e), t = sn(t); var a = Qr(e), o = Qr(t); if (1 !== a.length || 1 !== o.length || 3 !== a[0] || 3 !== o[0])
        throw new RangeError("Vectors with length 3 expected (Size A = [" + a.join(", ") + "], B = [" + o.join(", ") + "])"); var u = [n(i(e[1], t[2]), i(e[2], t[1])), n(i(e[2], t[0]), i(e[0], t[2])), n(i(e[0], t[1]), i(e[1], t[0]))]; return r > 1 ? [u] : u; } })), ou = "diag", uu = Ee(ou, ["typed", "matrix", "DenseMatrix", "SparseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.DenseMatrix, i = e.SparseMatrix; return t(ou, { Array: function (e) { return a(e, 0, Qr(e), null); }, "Array, number": function (e, t) { return a(e, t, Qr(e), null); }, "Array, BigNumber": function (e, t) { return a(e, t.toNumber(), Qr(e), null); }, "Array, string": function (e, t) { return a(e, 0, Qr(e), t); }, "Array, number, string": function (e, t, r) { return a(e, t, Qr(e), r); }, "Array, BigNumber, string": function (e, t, r) { return a(e, t.toNumber(), Qr(e), r); }, Matrix: function (e) { return a(e, 0, e.size(), e.storage()); }, "Matrix, number": function (e, t) { return a(e, t, e.size(), e.storage()); }, "Matrix, BigNumber": function (e, t) { return a(e, t.toNumber(), e.size(), e.storage()); }, "Matrix, string": function (e, t) { return a(e, 0, e.size(), t); }, "Matrix, number, string": function (e, t, r) { return a(e, t, e.size(), r); }, "Matrix, BigNumber, string": function (e, t, r) { return a(e, t.toNumber(), e.size(), r); } }); function a(e, t, a, o) { if (!V(t))
        throw new TypeError("Second parameter in function diag must be an integer"); var u = t > 0 ? t : 0, s = t < 0 ? -t : 0; switch (a.length) {
        case 1: return function (e, t, r, a, o, u) { var s = [a + o, a + u]; if (r && "sparse" !== r && "dense" !== r)
            throw new TypeError("Unknown matrix type ".concat(r, '"')); var c = "sparse" === r ? i.diagonal(s, e, t) : n.diagonal(s, e, t); return null !== r ? c : c.valueOf(); }(e, t, o, a[0], s, u);
        case 2: return function (e, t, n, i, a, o) { if (l(e)) {
            var u = e.diagonal(t);
            return null !== n ? n !== u.storage() ? r(u, n) : u : u.valueOf();
        } for (var s = Math.min(i[0] - a, i[1] - o), c = [], f = 0; f < s; f++)
            c[f] = e[f + a][f + o]; return null !== n ? r(c) : c; }(e, t, o, a, s, u);
    } throw new RangeError("Matrix for function diag must be 2 dimensional"); } })), su = Ee("filter", ["typed"], (function (e) { return (0, e.typed)("filter", { "Array, function": cu, "Matrix, function": function (e, t) { return e.create(cu(e.toArray(), t)); }, "Array, RegExp": vn, "Matrix, RegExp": function (e, t) { return e.create(vn(e.toArray(), t)); } }); }));
    function cu(e, t) { var r = En(t); return dn(e, (function (e, n, i) { return 1 === r ? t(e) : 2 === r ? t(e, [n]) : t(e, [n], i); })); }
    var fu = "flatten", lu = Ee(fu, ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix; return t(fu, { Array: function (e) { return pn(e); }, Matrix: function (e) { var t = pn(e.toArray()); return r(t); } }); })), pu = "forEach", mu = Ee(pu, ["typed"], (function (e) { return (0, e.typed)(pu, { "Array, function": hu, "Matrix, function": function (e, t) { e.forEach(t); } }); }));
    function hu(e, t) { var r = En(t); !function n(i, a) { Array.isArray(i) ? hn(i, (function (e, t) { n(e, a.concat(t)); })) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e); }(e, []); }
    var du = "getMatrixDataType", vu = Ee(du, ["typed"], (function (e) { return (0, e.typed)(du, { Array: function (e) { return bn(e, H); }, Matrix: function (e) { return e.getDataType(); } }); })), yu = "identity", gu = Ee(yu, ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.BigNumber, o = e.DenseMatrix, u = e.SparseMatrix; return t(yu, { "": function () { return "Matrix" === r.matrix ? n([]) : []; }, string: function (e) { return n(e); }, "number | BigNumber": function (e) { return c(e, e, "Matrix" === r.matrix ? "dense" : void 0); }, "number | BigNumber, string": function (e, t) { return c(e, e, t); }, "number | BigNumber, number | BigNumber": function (e, t) { return c(e, t, "Matrix" === r.matrix ? "dense" : void 0); }, "number | BigNumber, number | BigNumber, string": function (e, t, r) { return c(e, t, r); }, Array: function (e) { return s(e); }, "Array, string": function (e, t) { return s(e, t); }, Matrix: function (e) { return s(e.valueOf(), e.storage()); }, "Matrix, string": function (e, t) { return s(e.valueOf(), t); } }); function s(e, t) { switch (e.length) {
        case 0: return t ? n(t) : [];
        case 1: return c(e[0], e[0], t);
        case 2: return c(e[0], e[1], t);
        default: throw new Error("Vector containing two values expected");
    } } function c(e, t, r) { var n = a(e) || a(t) ? i : null; if (a(e) && (e = e.toNumber()), a(t) && (t = t.toNumber()), !V(e) || e < 1)
        throw new Error("Parameters in function identity must be positive integers"); if (!V(t) || t < 1)
        throw new Error("Parameters in function identity must be positive integers"); var s = n ? new i(1) : 1, c = n ? new n(0) : 0, f = [e, t]; if (r) {
        if ("sparse" === r)
            return u.diagonal(f, s, 0, c);
        if ("dense" === r)
            return o.diagonal(f, s, 0, c);
        throw new TypeError('Unknown matrix type "'.concat(r, '"'));
    } for (var l = rn([], f, c), p = e < t ? e : t, m = 0; m < p; m++)
        l[m][m] = s; return l; } })), xu = "kron", bu = Ee(xu, ["typed", "matrix", "multiplyScalar"], (function (e) { var t = e.typed, r = e.matrix, n = e.multiplyScalar; return t(xu, { "Matrix, Matrix": function (e, t) { return r(i(e.toArray(), t.toArray())); }, "Matrix, Array": function (e, t) { return r(i(e.toArray(), t)); }, "Array, Matrix": function (e, t) { return r(i(e, t.toArray())); }, "Array, Array": i }); function i(e, t) { if (1 === Qr(e).length && (e = [e]), 1 === Qr(t).length && (t = [t]), Qr(e).length > 2 || Qr(t).length > 2)
        throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(e.length) + ", y = " + JSON.stringify(t.length) + ")"); var r = [], i = []; return e.map((function (e) { return t.map((function (t) { return i = [], r.push(i), e.map((function (e) { return t.map((function (t) { return i.push(n(e, t)); })); })); })); })) && r; } })), wu = Ee("map", ["typed"], (function (e) { return (0, e.typed)("map", { "Array, function": Nu, "Matrix, function": function (e, t) { return e.map(t); } }); }));
    function Nu(e, t) { var r = En(t); return function n(i, a) { if (Array.isArray(i))
        return i.map((function (e, t) { return n(e, a.concat(t)); })); try {
        return 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e);
    }
    catch (t) {
        if (t instanceof TypeError && "data" in t && "wrongType" === t.data.category) {
            var o = "map attempted to call '".concat(t.data.fn, "(").concat(i), u = JSON.stringify(a);
            throw 2 === r ? o += "," + u : 1 !== r && (o += ",".concat(u, ",").concat(e)), o += ")' but argument ".concat(t.data.index + 1, " of type "), o += "".concat(t.data.actual, " does not match expected type "), o += t.data.expected.join(" or "), new TypeError(o);
        }
        throw t;
    } }(e, []); }
    var Du = "diff", Eu = Ee(Du, ["typed", "matrix", "subtract", "number"], (function (e) { var t = e.typed, r = e.matrix, n = e.subtract, i = e.number; return t(Du, { "Array | Matrix": function (e) { return l(e) ? r(o(e.toArray())) : o(e); }, "Array | Matrix, number": function (e, t) { if (!V(t))
            throw new RangeError("Dimension must be a whole number"); return l(e) ? r(a(e.toArray(), t)) : a(e, t); }, "Array, BigNumber": t.referTo("Array,number", (function (e) { return function (t, r) { return e(t, i(r)); }; })), "Matrix, BigNumber": t.referTo("Matrix,number", (function (e) { return function (t, r) { return e(t, i(r)); }; })) }); function a(e, t) { if (l(e) && (e = e.toArray()), !Array.isArray(e))
        throw RangeError("Array/Matrix does not have that many dimensions"); if (t > 0) {
        var r = [];
        return e.forEach((function (e) { r.push(a(e, t - 1)); })), r;
    } if (0 === t)
        return o(e); throw RangeError("Cannot have negative dimension"); } function o(e) { for (var t = [], r = e.length, n = 1; n < r; n++)
        t.push(u(e[n - 1], e[n])); return t; } function u(e, t) { l(e) && (e = e.toArray()), l(t) && (t = t.toArray()); var r = Array.isArray(e), i = Array.isArray(t); if (r && i)
        return function (e, t) { if (e.length !== t.length)
            throw RangeError("Not all sub-arrays have the same length"); for (var r = [], n = e.length, i = 0; i < n; i++)
            r.push(u(e[i], t[i])); return r; }(e, t); if (!r && !i)
        return n(t, e); throw TypeError("Cannot calculate difference between 1 array and 1 non-array"); } })), Au = Ee("ones", ["typed", "config", "matrix", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.BigNumber; return t("ones", { "": function () { return "Array" === r.matrix ? o([]) : o([], "default"); }, "...number | BigNumber | string": function (e) { if ("string" == typeof e[e.length - 1]) {
            var t = e.pop();
            return o(e, t);
        } return "Array" === r.matrix ? o(e) : o(e, "default"); }, Array: o, Matrix: function (e) { var t = e.storage(); return o(e.valueOf(), t); }, "Array | Matrix, string": function (e, t) { return o(e.valueOf(), t); } }); function o(e, t) { var r = function (e) { var t = !1; return e.forEach((function (e, r, n) { a(e) && (t = !0, n[r] = e.toNumber()); })), t; }(e), o = r ? new i(1) : 1; if (function (e) { e.forEach((function (e) { if ("number" != typeof e || !V(e) || e < 0)
        throw new Error("Parameters in function ones must be positive integers"); })); }(e), t) {
        var u = n(t);
        return e.length > 0 ? u.resize(e, o) : u;
    } var s = []; return e.length > 0 ? rn(s, e, o) : s; } }));
    function Su() { throw new Error('No "bignumber" implementation available'); }
    function Cu() { throw new Error('No "fraction" implementation available'); }
    function Mu() { throw new Error('No "matrix" implementation available'); }
    var Fu = "range", Ou = Ee(Fu, ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.bignumber, a = e.smaller, o = e.smallerEq, u = e.larger, s = e.largerEq; return t(Fu, { string: f, "string, boolean": f, "number, number": function (e, t) { return c(l(e, t, 1)); }, "number, number, number": function (e, t, r) { return c(l(e, t, r)); }, "number, number, boolean": function (e, t, r) { return c(r ? p(e, t, 1) : l(e, t, 1)); }, "number, number, number, boolean": function (e, t, r, n) { return c(n ? p(e, t, r) : l(e, t, r)); }, "BigNumber, BigNumber": function (e, t) { return c(m(e, t, new (0, e.constructor)(1))); }, "BigNumber, BigNumber, BigNumber": function (e, t, r) { return c(m(e, t, r)); }, "BigNumber, BigNumber, boolean": function (e, t, r) { var n = e.constructor; return c(r ? h(e, t, new n(1)) : m(e, t, new n(1))); }, "BigNumber, BigNumber, BigNumber, boolean": function (e, t, r, n) { return c(n ? h(e, t, r) : m(e, t, r)); } }); function c(e) { return "Matrix" === r.matrix ? n ? n(e) : Mu() : e; } function f(e, t) { var n = function (e) { var t = e.split(":").map((function (e) { return Number(e); })); if (t.some((function (e) { return isNaN(e); })))
        return null; switch (t.length) {
        case 2: return { start: t[0], end: t[1], step: 1 };
        case 3: return { start: t[0], end: t[2], step: t[1] };
        default: return null;
    } }(e); if (!n)
        throw new SyntaxError('String "' + e + '" is no valid range'); return "BigNumber" === r.number ? (void 0 === i && Su(), c((t ? h : m)(i(n.start), i(n.end), i(n.step)))) : c((t ? p : l)(n.start, n.end, n.step)); } function l(e, t, r) { var n = [], i = e; if (r > 0)
        for (; a(i, t);)
            n.push(i), i += r;
    else if (r < 0)
        for (; u(i, t);)
            n.push(i), i += r; return n; } function p(e, t, r) { var n = [], i = e; if (r > 0)
        for (; o(i, t);)
            n.push(i), i += r;
    else if (r < 0)
        for (; s(i, t);)
            n.push(i), i += r; return n; } function m(e, t, r) { var n = i(0), o = [], s = e; if (r.gt(n))
        for (; a(s, t);)
            o.push(s), s = s.plus(r);
    else if (r.lt(n))
        for (; u(s, t);)
            o.push(s), s = s.plus(r); return o; } function h(e, t, r) { var n = i(0), a = [], u = e; if (r.gt(n))
        for (; o(u, t);)
            a.push(u), u = u.plus(r);
    else if (r.lt(n))
        for (; s(u, t);)
            a.push(u), u = u.plus(r); return a; } })), Tu = "reshape", Bu = Ee(Tu, ["typed", "isInteger", "matrix"], (function (e) { var t = e.typed, r = e.isInteger; return t(Tu, { "Matrix, Array": function (e, t) { return e.reshape(t, !0); }, "Array, Array": function (e, t) { return t.forEach((function (e) { if (!r(e))
            throw new TypeError("Invalid size for dimension: " + e); })), an(e, t); } }); }));
    function _u(e, t, r, n) { if (!(this instanceof _u))
        throw new SyntaxError("Constructor must be called with the new operator"); this.fn = e, this.count = t, this.min = r, this.max = n, this.message = "Wrong number of arguments in function " + e + " (" + t + " provided, " + r + (null != n ? "-" + n : "") + " expected)", this.stack = (new Error).stack; }
    _u.prototype = new Error, _u.prototype.constructor = Error, _u.prototype.name = "ArgumentsError", _u.prototype.isArgumentsError = !0;
    var ku = Ee("resize", ["config", "matrix"], (function (e) { var t = e.config, r = e.matrix; return function (e, i, o) { if (2 !== arguments.length && 3 !== arguments.length)
        throw new _u("resize", arguments.length, 2, 3); if (l(i) && (i = i.valueOf()), a(i[0]) && (i = i.map((function (e) { return a(e) ? e.toNumber() : e; }))), l(e))
        return e.resize(i, o, !0); if ("string" == typeof e)
        return n(e, i, o); var u = !Array.isArray(e) && "Array" !== t.matrix; if (0 === i.length) {
        for (; Array.isArray(e);)
            e = e[0];
        return he(e);
    } Array.isArray(e) || (e = [e]); var s = rn(e = he(e), i, o); return u ? r(s) : s; }; function n(e, t, r) { if (void 0 !== r) {
        if ("string" != typeof r || 1 !== r.length)
            throw new TypeError("Single character expected as defaultValue");
    }
    else
        r = " "; if (1 !== t.length)
        throw new Yr(t.length, 1); var n = t[0]; if ("number" != typeof n || !V(n))
        throw new TypeError("Invalid size, must contain positive integers (size: " + Gr(t) + ")"); if (e.length > n)
        return e.substring(0, n); if (e.length < n) {
        for (var i = e, a = 0, o = n - e.length; a < o; a++)
            i += r;
        return i;
    } return e; } })), Iu = "rotate", Ru = Ee(Iu, ["typed", "multiply", "rotationMatrix"], (function (e) { var t = e.typed, r = e.multiply, n = e.rotationMatrix; return t(Iu, { "Array , number | BigNumber | Complex | Unit": function (e, t) { return i(e, 2), r(n(t), e).toArray(); }, "Matrix , number | BigNumber | Complex | Unit": function (e, t) { return i(e, 2), r(n(t), e); }, "Array, number | BigNumber | Complex | Unit, Array | Matrix": function (e, t, a) { return i(e, 3), r(n(t, a), e); }, "Matrix, number | BigNumber | Complex | Unit, Array | Matrix": function (e, t, a) { return i(e, 3), r(n(t, a), e); } }); function i(e, t) { var r = Array.isArray(e) ? Qr(e) : e.size(); if (r.length > 2)
        throw new RangeError("Vector must be of dimensions 1x".concat(t)); if (2 === r.length && 1 !== r[1])
        throw new RangeError("Vector must be of dimensions 1x".concat(t)); if (r[0] !== t)
        throw new RangeError("Vector must be of dimensions 1x".concat(t)); } })), zu = "rotationMatrix", qu = Ee(zu, ["typed", "config", "multiplyScalar", "addScalar", "unaryMinus", "norm", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix", "cos", "sin"], (function (e) { var t = e.typed, r = e.config, n = e.multiplyScalar, i = e.addScalar, o = e.unaryMinus, u = e.norm, s = e.BigNumber, c = e.matrix, f = e.DenseMatrix, l = e.SparseMatrix, p = e.cos, m = e.sin; return t(zu, { "": function () { return "Matrix" === r.matrix ? c([]) : []; }, string: function (e) { return c(e); }, "number | BigNumber | Complex | Unit": function (e) { return h(e, "Matrix" === r.matrix ? "dense" : void 0); }, "number | BigNumber | Complex | Unit, string": function (e, t) { return h(e, t); }, "number | BigNumber | Complex | Unit, Array": function (e, t) { var r = c(t); return d(r), g(e, r, void 0); }, "number | BigNumber | Complex | Unit, Matrix": function (e, t) { d(t); var n = t.storage() || ("Matrix" === r.matrix ? "dense" : void 0); return g(e, t, n); }, "number | BigNumber | Complex | Unit, Array, string": function (e, t, r) { var n = c(t); return d(n), g(e, n, r); }, "number | BigNumber | Complex | Unit, Matrix, string": function (e, t, r) { return d(t), g(e, t, r); } }); function h(e, t) { var r = a(e) ? new s(-1) : -1, i = p(e), o = m(e); return y([[i, n(r, o)], [o, i]], t); } function d(e) { var t = e.size(); if (t.length < 1 || 3 !== t[0])
        throw new RangeError("Vector must be of dimensions 1x3"); } function v(e) { return e.reduce((function (e, t) { return n(e, t); })); } function y(e, t) { if (t) {
        if ("sparse" === t)
            return new l(e);
        if ("dense" === t)
            return new f(e);
        throw new TypeError('Unknown matrix type "'.concat(t, '"'));
    } return e; } function g(e, t, r) { var n = u(t); if (0 === n)
        throw new RangeError("Rotation around zero vector"); var c = a(e) ? s : null, f = c ? new c(1) : 1, l = c ? new c(-1) : -1, h = c ? new c(t.get([0]) / n) : t.get([0]) / n, d = c ? new c(t.get([1]) / n) : t.get([1]) / n, g = c ? new c(t.get([2]) / n) : t.get([2]) / n, x = p(e), b = i(f, o(x)), w = m(e); return y([[i(x, v([h, h, b])), i(v([h, d, b]), v([l, g, w])), i(v([h, g, b]), v([d, w]))], [i(v([h, d, b]), v([g, w])), i(x, v([d, d, b])), i(v([d, g, b]), v([l, h, w]))], [i(v([h, g, b]), v([l, d, w])), i(v([d, g, b]), v([h, w])), i(x, v([g, g, b]))]], r); } })), ju = Ee("row", ["typed", "Index", "matrix", "range"], (function (e) { var t = e.typed, r = e.Index, n = e.matrix, i = e.range; return t("row", { "Matrix, number": a, "Array, number": function (e, t) { return a(n(he(e)), t).valueOf(); } }); function a(e, t) { if (2 !== e.size().length)
        throw new Error("Only two dimensional matrix is supported"); tn(t, e.size()[0]); var n = i(0, e.size()[1]), a = new r(t, n); return e.subset(a); } })), Pu = "size", Lu = Ee(Pu, ["typed", "config", "?matrix"], (function (e) { var t = e.typed, r = e.config, n = e.matrix; return t(Pu, { Matrix: function (e) { return e.create(e.size()); }, Array: Qr, string: function (e) { return "Array" === r.matrix ? [e.length] : n([e.length]); }, "number | Complex | BigNumber | Unit | boolean | null": function (e) { return "Array" === r.matrix ? [] : n ? n([]) : Mu(); } }); })), Uu = "squeeze", $u = Ee(Uu, ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix; return t(Uu, { Array: function (e) { return sn(he(e)); }, Matrix: function (e) { var t = sn(e.toArray()); return Array.isArray(t) ? r(t) : t; }, any: function (e) { return he(e); } }); })), Hu = "subset", Gu = Ee(Hu, ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix; return t(Hu, { "Array, Index": function (e, t) { var n = r(e).subset(t); return t.isScalar() ? n : n.valueOf(); }, "Matrix, Index": function (e, t) { return e.subset(t); }, "Object, Index": Wu, "string, Index": Vu, "Array, Index, any": function (e, t, n) { return r(he(e)).subset(t, n, void 0).valueOf(); }, "Array, Index, any, any": function (e, t, n, i) { return r(he(e)).subset(t, n, i).valueOf(); }, "Matrix, Index, any": function (e, t, r) { return e.clone().subset(t, r); }, "Matrix, Index, any, any": function (e, t, r, n) { return e.clone().subset(t, r, n); }, "string, Index, string": Zu, "string, Index, string, string": Zu, "Object, Index, any": Ju }); }));
    function Vu(e, t) { if (!v(t))
        throw new TypeError("Index expected"); if (1 !== t.size().length)
        throw new Yr(t.size().length, 1); var r = e.length; tn(t.min()[0], r), tn(t.max()[0], r); var n = t.dimension(0), i = ""; return n.forEach((function (t) { i += e.charAt(t); })), i; }
    function Zu(e, t, r, n) { if (!t || !0 !== t.isIndex)
        throw new TypeError("Index expected"); if (1 !== t.size().length)
        throw new Yr(t.size().length, 1); if (void 0 !== n) {
        if ("string" != typeof n || 1 !== n.length)
            throw new TypeError("Single character expected as defaultValue");
    }
    else
        n = " "; var i = t.dimension(0); if (i.size()[0] !== r.length)
        throw new Yr(i.size()[0], r.length); var a = e.length; tn(t.min()[0]), tn(t.max()[0]); for (var o = [], u = 0; u < a; u++)
        o[u] = e.charAt(u); if (i.forEach((function (e, t) { o[e] = r.charAt(t[0]); })), o.length > a)
        for (var s = a - 1, c = o.length; s < c; s++)
            o[s] || (o[s] = n); return o.join(""); }
    function Wu(e, t) { if (1 !== t.size().length)
        throw new Yr(t.size(), 1); var r = t.dimension(0); if ("string" != typeof r)
        throw new TypeError("String expected as index to retrieve an object property"); return Te(e, r); }
    function Ju(e, t, r) { if (1 !== t.size().length)
        throw new Yr(t.size(), 1); var n = t.dimension(0); if ("string" != typeof n)
        throw new TypeError("String expected as index to retrieve an object property"); var i = he(e); return Be(i, n, r), i; }
    var Yu = "transpose", Xu = Ee(Yu, ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix; return t(Yu, { Array: function (e) { return n(r(e)).valueOf(); }, Matrix: n, any: he }); function n(e) { var t, r = e.size(); switch (r.length) {
        case 1:
            t = e.clone();
            break;
        case 2:
            var n = r[0], i = r[1];
            if (0 === i)
                throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Gr(r) + ")");
            switch (e.storage()) {
                case "dense":
                    t = function (e, t, r) { for (var n, i = e._data, a = [], o = 0; o < r; o++) {
                        n = a[o] = [];
                        for (var u = 0; u < t; u++)
                            n[u] = he(i[u][o]);
                    } return e.createDenseMatrix({ data: a, size: [r, t], datatype: e._datatype }); }(e, n, i);
                    break;
                case "sparse": t = function (e, t, r) { for (var n, i, a, o = e._values, u = e._index, s = e._ptr, c = o ? [] : void 0, f = [], l = [], p = [], m = 0; m < t; m++)
                    p[m] = 0; for (n = 0, i = u.length; n < i; n++)
                    p[u[n]]++; for (var h = 0, d = 0; d < t; d++)
                    l.push(h), h += p[d], p[d] = l[d]; for (l.push(h), a = 0; a < r; a++)
                    for (var v = s[a], y = s[a + 1], g = v; g < y; g++) {
                        var x = p[u[g]]++;
                        f[x] = a, o && (c[x] = he(o[g]));
                    } return e.createSparseMatrix({ values: c, index: f, ptr: l, size: [r, t], datatype: e._datatype }); }(e, n, i);
            }
            break;
        default: throw new RangeError("Matrix must be a vector or two dimensional (size: " + Gr(r) + ")");
    } return t; } })), Qu = "ctranspose", Ku = Ee(Qu, ["typed", "transpose", "conj"], (function (e) { var t = e.typed, r = e.transpose, n = e.conj; return t(Qu, { any: function (e) { return n(r(e)); } }); })), es = "zeros", ts = Ee(es, ["typed", "config", "matrix", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.BigNumber; return t(es, { "": function () { return "Array" === r.matrix ? o([]) : o([], "default"); }, "...number | BigNumber | string": function (e) { if ("string" == typeof e[e.length - 1]) {
            var t = e.pop();
            return o(e, t);
        } return "Array" === r.matrix ? o(e) : o(e, "default"); }, Array: o, Matrix: function (e) { var t = e.storage(); return o(e.valueOf(), t); }, "Array | Matrix, string": function (e, t) { return o(e.valueOf(), t); } }); function o(e, t) { var r = function (e) { var t = !1; return e.forEach((function (e, r, n) { a(e) && (t = !0, n[r] = e.toNumber()); })), t; }(e), o = r ? new i(0) : 0; if (function (e) { e.forEach((function (e) { if ("number" != typeof e || !V(e) || e < 0)
        throw new Error("Parameters in function zeros must be positive integers"); })); }(e), t) {
        var u = n(t);
        return e.length > 0 ? u.resize(e, o) : u;
    } var s = []; return e.length > 0 ? rn(s, e, o) : s; } }));
    function rs(e) { return function (e) { if (Array.isArray(e))
        return sa(e); }(e) || function (e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e); }(e) || ca(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    r(3290);
    var ns = Ee("fft", ["typed", "matrix", "addScalar", "multiplyScalar", "divideScalar", "exp", "tau", "i"], (function (e) { var t = e.typed, r = (e.matrix, e.addScalar), n = e.multiplyScalar, i = e.divideScalar, a = e.exp, o = e.tau, u = e.i; return t("fft", { Array: s, Matrix: function (e) { return e.create(s(e.toArray())); } }); function s(e) { var t = Qr(e); return 1 === t.length ? f(e, t[0]) : c(e.map((function (e) { return s(e, t.slice(1)); })), 0); } function c(e, t) { var r = Qr(e); if (0 !== t)
        return new Array(r[0]).fill(0).map((function (r, n) { return c(e[n], t - 1); })); if (1 === r.length)
        return f(e); function n(e) { var t = Qr(e); return new Array(t[1]).fill(0).map((function (r, n) { return new Array(t[0]).fill(0).map((function (t, r) { return e[r][n]; })); })); } return n(c(n(e), 1)); } function f(e) { var t = e.length; if (1 === t)
        return [e[0]]; if (t % 2 == 0) {
        for (var s = [].concat(rs(f(e.filter((function (e, t) { return t % 2 == 0; })))), rs(f(e.filter((function (e, t) { return t % 2 == 1; }))))), c = 0; c < t / 2; c++) {
            var l = s[c], p = n(s[c + t / 2], a(n(n(o, u), i(-c, t))));
            s[c] = r(l, p), s[c + t / 2] = r(l, n(-1, p));
        }
        return s;
    } throw new Error("Can only calculate FFT of power-of-two size"); } })), is = "ifft", as = Ee(is, ["typed", "fft", "dotDivide", "conj"], (function (e) { var t = e.typed, r = e.fft, n = e.dotDivide, i = e.conj; return t(is, { "Array | Matrix": function (e) { var t = l(e) ? e.size() : Qr(e); return n(i(r(i(e))), t.reduce((function (e, t) { return e * t; }), 1)); } }); })), os = Ee("erf", ["typed"], (function (e) { var t = e.typed; return t("name", { number: function (e) { var t = Math.abs(e); return t >= ls ? Z(e) : t <= us ? Z(e) * function (e) { var t, r = e * e, n = cs[0][4] * r, i = r; for (t = 0; t < 3; t += 1)
            n = (n + cs[0][t]) * r, i = (i + fs[0][t]) * r; return e * (n + cs[0][3]) / (i + fs[0][3]); }(t) : t <= 4 ? Z(e) * (1 - function (e) { var t, r = cs[1][8] * e, n = e; for (t = 0; t < 7; t += 1)
            r = (r + cs[1][t]) * e, n = (n + fs[1][t]) * e; var i = (r + cs[1][7]) / (n + fs[1][7]), a = parseInt(16 * e) / 16, o = (e - a) * (e + a); return Math.exp(-a * a) * Math.exp(-o) * i; }(t)) : Z(e) * (1 - function (e) { var t, r = 1 / (e * e), n = cs[2][5] * r, i = r; for (t = 0; t < 4; t += 1)
            n = (n + cs[2][t]) * r, i = (i + fs[2][t]) * r; var a = r * (n + cs[2][4]) / (i + fs[2][4]); a = (ss - a) / e; var o = (e - (r = parseInt(16 * e) / 16)) * (e + r); return Math.exp(-r * r) * Math.exp(-o) * a; }(t)); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), us = .46875, ss = .5641895835477563, cs = [[3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, .18577770618460315], [.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 2.1531153547440383e-8], [.30532663496123236, .36034489994980445, .12578172611122926, .016083785148742275, .0006587491615298378, .016315387137302097]], fs = [[23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171], [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495], [2.568520192289822, 1.8729528499234604, .5279051029514285, .06051834131244132, .0023352049762686918]], ls = Math.pow(2, 53), ps = "mode", ms = Ee(ps, ["typed", "isNaN", "isNumeric"], (function (e) { var t = e.typed, r = e.isNaN, n = e.isNumeric; return t(ps, { "Array | Matrix": i, "...": function (e) { return i(e); } }); function i(e) { if (0 === (e = pn(e.valueOf())).length)
        throw new Error("Cannot calculate mode of an empty array"); for (var t = {}, i = [], a = 0, o = 0; o < e.length; o++) {
        var u = e[o];
        if (n(u) && r(u))
            throw new Error("Cannot calculate mode of an array containing NaN values");
        u in t || (t[u] = 0), t[u]++, t[u] === a ? i.push(u) : t[u] > a && (a = t[u], i = [u]);
    } return i; } }));
    function hs(e, t, r) { var n; return -1 !== String(e).indexOf("Unexpected type") ? (n = arguments.length > 2 ? " (type: " + H(r) + ", value: " + JSON.stringify(r) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + t + ", unexpected type of argument" + n)) : -1 !== String(e).indexOf("complex numbers") ? (n = arguments.length > 2 ? " (type: " + H(r) + ", value: " + JSON.stringify(r) + ")" : "", new TypeError("Cannot calculate " + t + ", no ordering relation is defined for complex numbers" + n)) : e; }
    var ds = "prod", vs = Ee(ds, ["typed", "config", "multiplyScalar", "numeric"], (function (e) { var t = e.typed, r = e.config, n = e.multiplyScalar, i = e.numeric; return t(ds, { "Array | Matrix": a, "Array | Matrix, number | BigNumber": function (e, t) { throw new Error("prod(A, dim) is not yet supported"); }, "...": function (e) { return a(e); } }); function a(e) { var t; if (Tn(e, (function (e) { try {
        t = void 0 === t ? e : n(t, e);
    }
    catch (t) {
        throw hs(t, "prod", e);
    } })), "string" == typeof t && (t = i(t, r.number)), void 0 === t)
        throw new Error("Cannot calculate prod of an empty array"); return t; } })), ys = "format", gs = Ee(ys, ["typed"], (function (e) { return (0, e.typed)(ys, { any: Gr, "any, Object | function | number": Gr }); })), xs = Ee("bin", ["typed", "format"], (function (e) { var t = e.typed, r = e.format; return t("bin", { "number | BigNumber": function (e) { return r(e, { notation: "bin" }); }, "number | BigNumber, number": function (e, t) { return r(e, { notation: "bin", wordSize: t }); } }); })), bs = Ee("oct", ["typed", "format"], (function (e) { var t = e.typed, r = e.format; return t("oct", { "number | BigNumber": function (e) { return r(e, { notation: "oct" }); }, "number | BigNumber, number": function (e, t) { return r(e, { notation: "oct", wordSize: t }); } }); })), ws = Ee("hex", ["typed", "format"], (function (e) { var t = e.typed, r = e.format; return t("hex", { "number | BigNumber": function (e) { return r(e, { notation: "hex" }); }, "number | BigNumber, number": function (e, t) { return r(e, { notation: "hex", wordSize: t }); } }); })), Ns = "print", Ds = Ee(Ns, ["typed"], (function (e) { return (0, e.typed)(Ns, { "string, Object | Array": Es, "string, Object | Array, number | Object": Es }); }));
    function Es(e, t, r) { return e.replace(/\$([\w.]+)/g, (function (e, n) { for (var i = n.split("."), a = t[i.shift()]; i.length && void 0 !== a;) {
        var o = i.shift();
        a = o ? a[o] : a + ".";
    } return void 0 !== a ? c(a) ? a : Gr(a, r) : e; })); }
    var As = Ee("to", ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix; return t("to", { "Unit, Unit | string": function (e, t) { return e.to(t); } }, Ia({ typed: t, matrix: r })({ Ds: !0 })); })), Ss = "isPrime", Cs = Ee(Ss, ["typed"], (function (e) { var t = e.typed; return t(Ss, { number: function (e) { if (0 * e != 0)
            return !1; if (e <= 3)
            return e > 1; if (e % 2 == 0 || e % 3 == 0)
            return !1; for (var t = 5; t * t <= e; t += 6)
            if (e % t == 0 || e % (t + 2) == 0)
                return !1; return !0; }, BigNumber: function (e) { if (0 * e.toNumber() != 0)
            return !1; if (e.lte(3))
            return e.gt(1); if (e.mod(2).eq(0) || e.mod(3).eq(0))
            return !1; if (e.lt(Math.pow(2, 32))) {
            for (var t = e.toNumber(), r = 5; r * r <= t; r += 6)
                if (t % r == 0 || t % (r + 2) == 0)
                    return !1;
            return !0;
        } function n(e, t, r) { for (var n = 1; !t.eq(0);)
            t.mod(2).eq(0) ? (t = t.div(2), e = e.mul(e).mod(r)) : (t = t.sub(1), n = e.mul(n).mod(r)); return n; } for (var i = e.constructor.clone({ precision: 2 * e.toFixed(0).length }), a = 0, o = (e = new i(e)).sub(1); o.mod(2).eq(0);)
            o = o.div(2), a += 1; var u = null; if (e.lt("3317044064679887385961981"))
            u = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41].filter((function (t) { return t < e; }));
        else {
            var s = Math.min(e.toNumber() - 2, Math.floor(2 * Math.pow(e.toFixed(0).length * Math.log(10), 2)));
            u = [];
            for (var c = 2; c <= s; c += 1)
                u.push(s);
        } for (var f = 0; f < u.length; f += 1) {
            var l = u[f], p = n(e.sub(e).add(l), o, e);
            if (!p.eq(1))
                for (var m = 0, h = p; !h.eq(e.sub(1)); m += 1, h = h.mul(h).mod(e))
                    if (m === a - 1)
                        return !1;
        } return !0; }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Ms = Ee("numeric", ["number", "?bignumber", "?fraction"], (function (e) { var t = e.number, r = e.bignumber, n = e.fraction, i = { string: !0, number: !0, BigNumber: !0, Fraction: !0 }, a = { number: function (e) { return t(e); }, BigNumber: r ? function (e) { return r(e); } : Su, Fraction: n ? function (e) { return n(e); } : Cu }; return function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "number", r = arguments.length > 2 ? arguments[2] : void 0; if (void 0 !== r)
        throw new SyntaxError("numeric() takes one or two arguments"); var n = H(e); if (!(n in i))
        throw new TypeError("Cannot convert " + e + ' of type "' + n + '"; valid input types are ' + Object.keys(i).join(", ")); if (!(t in a))
        throw new TypeError("Cannot convert " + e + ' to type "' + t + '"; valid output types are ' + Object.keys(a).join(", ")); return t === n ? e : a[t](e); }; })), Fs = "divideScalar", Os = Ee(Fs, ["typed", "numeric"], (function (e) { var t = e.typed; return e.numeric, t(Fs, { "number, number": function (e, t) { return e / t; }, "Complex, Complex": function (e, t) { return e.div(t); }, "BigNumber, BigNumber": function (e, t) { return e.div(t); }, "Fraction, Fraction": function (e, t) { return e.div(t); }, "Unit, number | Complex | Fraction | BigNumber | Unit": function (e, t) { return e.divide(t); }, "number | Fraction | Complex | BigNumber, Unit": function (e, t) { return t.divideInto(e); } }); })), Ts = Ee("pow", ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.identity, i = e.multiply, a = e.matrix, o = e.inv, u = e.number, s = e.fraction, c = e.Complex; return t("pow", { "number, number": f, "Complex, Complex": function (e, t) { return e.pow(t); }, "BigNumber, BigNumber": function (e, t) { return t.isInteger() || e >= 0 || r.predictable ? e.pow(t) : new c(e.toNumber(), 0).pow(t.toNumber(), 0); }, "Fraction, Fraction": function (e, t) { var n = e.pow(t); if (null != n)
            return n; if (r.predictable)
            throw new Error("Result of pow is non-rational and cannot be expressed as a fraction"); return f(e.valueOf(), t.valueOf()); }, "Array, number": l, "Array, BigNumber": function (e, t) { return l(e, t.toNumber()); }, "Matrix, number": p, "Matrix, BigNumber": function (e, t) { return p(e, t.toNumber()); }, "Unit, number | BigNumber": function (e, t) { return e.pow(t); } }); function f(e, t) { if (r.predictable && !V(t) && e < 0)
        try {
            var n = s(t), i = u(n);
            if ((t === i || Math.abs((t - i) / t) < 1e-14) && n.d % 2 == 1)
                return (n.n % 2 == 0 ? 1 : -1) * Math.pow(-e, t);
        }
        catch (e) { } return r.predictable && (e < -1 && t === 1 / 0 || e > -1 && e < 0 && t === -1 / 0) ? NaN : V(t) || e >= 0 || r.predictable ? Wi(e, t) : e * e < 1 && t === 1 / 0 || e * e > 1 && t === -1 / 0 ? 0 : new c(e, 0).pow(t, 0); } function l(e, t) { if (!V(t))
        throw new TypeError("For A^b, b must be an integer (value is " + t + ")"); var r = Qr(e); if (2 !== r.length)
        throw new Error("For A^b, A must be 2 dimensional (A has " + r.length + " dimensions)"); if (r[0] !== r[1])
        throw new Error("For A^b, A must be square (size is " + r[0] + "x" + r[1] + ")"); if (t < 0)
        try {
            return l(o(e), -t);
        }
        catch (e) {
            if ("Cannot calculate inverse, determinant is zero" === e.message)
                throw new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + t + ")");
            throw e;
        } for (var a = n(r[0]).valueOf(), u = e; t >= 1;)
        1 == (1 & t) && (a = i(u, a)), t >>= 1, u = i(u, u); return a; } function p(e, t) { return a(l(e.valueOf(), t)); } })), Bs = "Number of decimals in function round must be an integer", _s = "round", ks = Ee(_s, ["typed", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.BigNumber, o = e.DenseMatrix, u = la({ typed: t, equalScalar: n }), s = pa({ typed: t, DenseMatrix: o }), c = ma({ typed: t }); return t(_s, { number: Ji, "number, number": Ji, "number, BigNumber": function (e, t) { if (!t.isInteger())
            throw new TypeError(Bs); return new a(e).toDecimalPlaces(t.toNumber()); }, Complex: function (e) { return e.round(); }, "Complex, number": function (e, t) { if (t % 1)
            throw new TypeError(Bs); return e.round(t); }, "Complex, BigNumber": function (e, t) { if (!t.isInteger())
            throw new TypeError(Bs); var r = t.toNumber(); return e.round(r); }, BigNumber: function (e) { return e.toDecimalPlaces(0); }, "BigNumber, BigNumber": function (e, t) { if (!t.isInteger())
            throw new TypeError(Bs); return e.toDecimalPlaces(t.toNumber()); }, Fraction: function (e) { return e.round(); }, "Fraction, number": function (e, t) { if (t % 1)
            throw new TypeError(Bs); return e.round(t); }, "Fraction, BigNumber": function (e, t) { if (!t.isInteger())
            throw new TypeError(Bs); return e.round(t.toNumber()); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e, !0); }; })), "SparseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return u(t, r, e, !1); }; })), "DenseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return c(t, r, e, !1); }; })), "Array, number | BigNumber": t.referToSelf((function (e) { return function (t, n) { return c(r(t), n, e, !1).valueOf(); }; })), "number | Complex | BigNumber | Fraction, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : s(r, t, e, !0); }; })), "number | Complex | BigNumber | Fraction, DenseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : c(r, t, e, !0); }; })), "number | Complex | BigNumber | Fraction, Array": t.referToSelf((function (e) { return function (t, n) { return c(r(n), t, e, !0).valueOf(); }; })) }); })), Is = Ee("log", ["config", "typed", "divideScalar", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.divideScalar, i = e.Complex; return t("log", { number: function (e) { return e >= 0 || r.predictable ? function (e, t) { return Math.log(e); }(e) : new i(e, 0).log(); }, Complex: function (e) { return e.log(); }, BigNumber: function (e) { return !e.isNegative() || r.predictable ? e.ln() : new i(e.toNumber(), 0).log(); }, "any, any": t.referToSelf((function (e) { return function (t, r) { return n(e(t), e(r)); }; })) }); })), Rs = "log1p", zs = Ee(Rs, ["typed", "config", "divideScalar", "log", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.divideScalar, i = e.log, a = e.Complex; return t(Rs, { number: function (e) { return e >= -1 || r.predictable ? Y(e) : o(new a(e, 0)); }, Complex: o, BigNumber: function (e) { var t = e.plus(1); return !t.isNegative() || r.predictable ? t.ln() : o(new a(e.toNumber(), 0)); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })), "any, any": t.referToSelf((function (e) { return function (t, r) { return n(e(t), i(r)); }; })) }); function o(e) { var t = e.re + 1; return new a(Math.log(Math.sqrt(t * t + e.im * e.im)), Math.atan2(e.im, t)); } })), qs = "nthRoots", js = Ee(qs, ["config", "typed", "divideScalar", "Complex"], (function (e) { var t = e.typed, r = (e.config, e.divideScalar, e.Complex), n = [function (e) { return new r(e, 0); }, function (e) { return new r(0, e); }, function (e) { return new r(-e, 0); }, function (e) { return new r(0, -e); }]; function i(e, t) { if (t < 0)
        throw new Error("Root must be greater than zero"); if (0 === t)
        throw new Error("Root must be non-zero"); if (t % 1 != 0)
        throw new Error("Root must be an integer"); if (0 === e || 0 === e.abs())
        return [new r(0, 0)]; var i, a = "number" == typeof e; (a || 0 === e.re || 0 === e.im) && (i = a ? 2 * +(e < 0) : 0 === e.im ? 2 * +(e.re < 0) : 2 * +(e.im < 0) + 1); for (var o = e.arg(), u = e.abs(), s = [], c = Math.pow(u, 1 / t), f = 0; f < t; f++) {
        var l = (i + 4 * f) / t;
        l !== Math.round(l) ? s.push(new r({ r: c, phi: (o + 2 * Math.PI * f) / t })) : s.push(n[l % 4](c));
    } return s; } return t(qs, { Complex: function (e) { return i(e, 2); }, "Complex, number": i }); })), Ps = "dotPow", Ls = Ee(Ps, ["typed", "equalScalar", "matrix", "pow", "DenseMatrix"], (function (e) { var t = e.typed, r = e.equalScalar, n = e.matrix, i = e.pow, a = e.DenseMatrix, o = Ha({ typed: t }), u = Io({ typed: t, DenseMatrix: a }), s = la({ typed: t, equalScalar: r }), c = pa({ typed: t, DenseMatrix: a }), f = Ia({ typed: t, matrix: n }), l = {}; for (var p in i.signatures)
        Object.prototype.hasOwnProperty.call(i.signatures, p) && (p.includes("Matrix") || p.includes("Array") || (l[p] = i.signatures[p])); var m = t(l); return t(Ps, f({ elop: m, SS: u, DS: o, Ss: s, sS: c })); })), Us = "dotDivide", $s = Ee(Us, ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.divideScalar, a = e.DenseMatrix, o = za({ typed: t, equalScalar: n }), u = Ha({ typed: t }), s = Io({ typed: t, DenseMatrix: a }), c = la({ typed: t, equalScalar: n }), f = pa({ typed: t, DenseMatrix: a }), l = Ia({ typed: t, matrix: r }); return t(Us, l({ elop: i, SS: s, DS: u, SD: o, Ss: c, sS: f })); }));
    function Hs(e) { var t = e.DenseMatrix; return function (e, r, n) { var i = e.size(); if (2 !== i.length)
        throw new RangeError("Matrix must be two dimensional (size: " + Gr(i) + ")"); var a = i[0]; if (a !== i[1])
        throw new RangeError("Matrix must be square (size: " + Gr(i) + ")"); var o = []; if (l(r)) {
        var u = r.size(), s = r._data;
        if (1 === u.length) {
            if (u[0] !== a)
                throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (var c = 0; c < a; c++)
                o[c] = [s[c]];
            return new t({ data: o, size: [a, 1], datatype: r._datatype });
        }
        if (2 === u.length) {
            if (u[0] !== a || 1 !== u[1])
                throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            if (m(r)) {
                if (n) {
                    o = [];
                    for (var p = 0; p < a; p++)
                        o[p] = [s[p][0]];
                    return new t({ data: o, size: [a, 1], datatype: r._datatype });
                }
                return r;
            }
            if (h(r)) {
                for (var d = 0; d < a; d++)
                    o[d] = [0];
                for (var v = r._values, y = r._index, g = r._ptr, x = g[1], b = g[0]; b < x; b++)
                    o[y[b]][0] = v[b];
                return new t({ data: o, size: [a, 1], datatype: r._datatype });
            }
        }
        throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    } if (f(r)) {
        var w = Qr(r);
        if (1 === w.length) {
            if (w[0] !== a)
                throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (var N = 0; N < a; N++)
                o[N] = [r[N]];
            return new t({ data: o, size: [a, 1] });
        }
        if (2 === w.length) {
            if (w[0] !== a || 1 !== w[1])
                throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
            for (var D = 0; D < a; D++)
                o[D] = [r[D][0]];
            return new t({ data: o, size: [a, 1] });
        }
        throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    } }; }
    var Gs = "lsolve", Vs = Ee(Gs, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.divideScalar, i = e.multiplyScalar, a = e.subtract, o = e.equalScalar, u = e.DenseMatrix, s = Hs({ DenseMatrix: u }); return t(Gs, { "SparseMatrix, Array | Matrix": function (e, t) { return function (e, t) { for (var r = (t = s(e, t, !0))._data, c = e._size[0], f = e._size[1], l = e._values, p = e._index, m = e._ptr, h = [], d = 0; d < f; d++) {
            var v = r[d][0] || 0;
            if (o(v, 0))
                h[d] = [0];
            else {
                for (var y = 0, g = [], x = [], b = m[d], w = m[d + 1], N = b; N < w; N++) {
                    var D = p[N];
                    D === d ? y = l[N] : D > d && (g.push(l[N]), x.push(D));
                }
                if (o(y, 0))
                    throw new Error("Linear system cannot be solved since matrix is singular");
                for (var E = n(v, y), A = 0, S = x.length; A < S; A++) {
                    var C = x[A];
                    r[C] = [a(r[C][0] || 0, i(E, g[A]))];
                }
                h[d] = [E];
            }
        } return new u({ data: h, size: [c, 1] }); }(e, t); }, "DenseMatrix, Array | Matrix": function (e, t) { return c(e, t); }, "Array, Array | Matrix": function (e, t) { return c(r(e), t).valueOf(); } }); function c(e, t) { for (var r = (t = s(e, t, !0))._data, c = e._size[0], f = e._size[1], l = [], p = e._data, m = 0; m < f; m++) {
        var h = r[m][0] || 0, d = void 0;
        if (o(h, 0))
            d = 0;
        else {
            var v = p[m][m];
            if (o(v, 0))
                throw new Error("Linear system cannot be solved since matrix is singular");
            d = n(h, v);
            for (var y = m + 1; y < c; y++)
                r[y] = [a(r[y][0] || 0, i(d, p[y][m]))];
        }
        l[m] = [d];
    } return new u({ data: l, size: [c, 1] }); } })), Zs = "usolve", Ws = Ee(Zs, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.divideScalar, i = e.multiplyScalar, a = e.subtract, o = e.equalScalar, u = e.DenseMatrix, s = Hs({ DenseMatrix: u }); return t(Zs, { "SparseMatrix, Array | Matrix": function (e, t) { return function (e, t) { for (var r = (t = s(e, t, !0))._data, c = e._size[0], f = e._size[1], l = e._values, p = e._index, m = e._ptr, h = [], d = f - 1; d >= 0; d--) {
            var v = r[d][0] || 0;
            if (o(v, 0))
                h[d] = [0];
            else {
                for (var y = 0, g = [], x = [], b = m[d], w = m[d + 1] - 1; w >= b; w--) {
                    var N = p[w];
                    N === d ? y = l[w] : N < d && (g.push(l[w]), x.push(N));
                }
                if (o(y, 0))
                    throw new Error("Linear system cannot be solved since matrix is singular");
                for (var D = n(v, y), E = 0, A = x.length; E < A; E++) {
                    var S = x[E];
                    r[S] = [a(r[S][0], i(D, g[E]))];
                }
                h[d] = [D];
            }
        } return new u({ data: h, size: [c, 1] }); }(e, t); }, "DenseMatrix, Array | Matrix": function (e, t) { return c(e, t); }, "Array, Array | Matrix": function (e, t) { return c(r(e), t).valueOf(); } }); function c(e, t) { for (var r = (t = s(e, t, !0))._data, c = e._size[0], f = e._size[1], l = [], p = e._data, m = f - 1; m >= 0; m--) {
        var h = r[m][0] || 0, d = void 0;
        if (o(h, 0))
            d = 0;
        else {
            var v = p[m][m];
            if (o(v, 0))
                throw new Error("Linear system cannot be solved since matrix is singular");
            d = n(h, v);
            for (var y = m - 1; y >= 0; y--)
                r[y] = [a(r[y][0] || 0, i(d, p[y][m]))];
        }
        l[m] = [d];
    } return new u({ data: l, size: [c, 1] }); } })), Js = "lsolveAll", Ys = Ee(Js, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.divideScalar, i = e.multiplyScalar, a = e.subtract, o = e.equalScalar, u = e.DenseMatrix, s = Hs({ DenseMatrix: u }); return t(Js, { "SparseMatrix, Array | Matrix": function (e, t) { return function (e, t) { for (var r = [s(e, t, !0)._data.map((function (e) { return e[0]; }))], c = e._size[0], f = e._size[1], l = e._values, p = e._index, m = e._ptr, h = 0; h < f; h++)
            for (var d = r.length, v = 0; v < d; v++) {
                for (var y = r[v], g = [], x = [], b = m[h], w = m[h + 1], N = 0, D = b; D < w; D++) {
                    var E = p[D];
                    E === h ? N = l[D] : E > h && (g.push(l[D]), x.push(E));
                }
                if (o(N, 0))
                    if (o(y[h], 0)) {
                        if (0 === v) {
                            var A = rs(y);
                            A[h] = 1;
                            for (var S = 0, C = x.length; S < C; S++) {
                                var M = x[S];
                                A[M] = a(A[M], g[S]);
                            }
                            r.push(A);
                        }
                    }
                    else {
                        if (0 === v)
                            return [];
                        r.splice(v, 1), v -= 1, d -= 1;
                    }
                else {
                    y[h] = n(y[h], N);
                    for (var F = 0, O = x.length; F < O; F++) {
                        var T = x[F];
                        y[T] = a(y[T], i(y[h], g[F]));
                    }
                }
            } return r.map((function (e) { return new u({ data: e.map((function (e) { return [e]; })), size: [c, 1] }); })); }(e, t); }, "DenseMatrix, Array | Matrix": function (e, t) { return c(e, t); }, "Array, Array | Matrix": function (e, t) { return c(r(e), t).map((function (e) { return e.valueOf(); })); } }); function c(e, t) { for (var r = [s(e, t, !0)._data.map((function (e) { return e[0]; }))], c = e._data, f = e._size[0], l = e._size[1], p = 0; p < l; p++)
        for (var m = r.length, h = 0; h < m; h++) {
            var d = r[h];
            if (o(c[p][p], 0))
                if (o(d[p], 0)) {
                    if (0 === h) {
                        var v = rs(d);
                        v[p] = 1;
                        for (var y = p + 1; y < l; y++)
                            v[y] = a(v[y], c[y][p]);
                        r.push(v);
                    }
                }
                else {
                    if (0 === h)
                        return [];
                    r.splice(h, 1), h -= 1, m -= 1;
                }
            else {
                d[p] = n(d[p], c[p][p]);
                for (var g = p + 1; g < l; g++)
                    d[g] = a(d[g], i(d[p], c[g][p]));
            }
        } return r.map((function (e) { return new u({ data: e.map((function (e) { return [e]; })), size: [f, 1] }); })); } })), Xs = "usolveAll", Qs = Ee(Xs, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.divideScalar, i = e.multiplyScalar, a = e.subtract, o = e.equalScalar, u = e.DenseMatrix, s = Hs({ DenseMatrix: u }); return t(Xs, { "SparseMatrix, Array | Matrix": function (e, t) { return function (e, t) { for (var r = [s(e, t, !0)._data.map((function (e) { return e[0]; }))], c = e._size[0], f = e._size[1], l = e._values, p = e._index, m = e._ptr, h = f - 1; h >= 0; h--)
            for (var d = r.length, v = 0; v < d; v++) {
                for (var y = r[v], g = [], x = [], b = m[h], w = 0, N = m[h + 1] - 1; N >= b; N--) {
                    var D = p[N];
                    D === h ? w = l[N] : D < h && (g.push(l[N]), x.push(D));
                }
                if (o(w, 0))
                    if (o(y[h], 0)) {
                        if (0 === v) {
                            var E = rs(y);
                            E[h] = 1;
                            for (var A = 0, S = x.length; A < S; A++) {
                                var C = x[A];
                                E[C] = a(E[C], g[A]);
                            }
                            r.push(E);
                        }
                    }
                    else {
                        if (0 === v)
                            return [];
                        r.splice(v, 1), v -= 1, d -= 1;
                    }
                else {
                    y[h] = n(y[h], w);
                    for (var M = 0, F = x.length; M < F; M++) {
                        var O = x[M];
                        y[O] = a(y[O], i(y[h], g[M]));
                    }
                }
            } return r.map((function (e) { return new u({ data: e.map((function (e) { return [e]; })), size: [c, 1] }); })); }(e, t); }, "DenseMatrix, Array | Matrix": function (e, t) { return c(e, t); }, "Array, Array | Matrix": function (e, t) { return c(r(e), t).map((function (e) { return e.valueOf(); })); } }); function c(e, t) { for (var r = [s(e, t, !0)._data.map((function (e) { return e[0]; }))], c = e._data, f = e._size[0], l = e._size[1] - 1; l >= 0; l--)
        for (var p = r.length, m = 0; m < p; m++) {
            var h = r[m];
            if (o(c[l][l], 0))
                if (o(h[l], 0)) {
                    if (0 === m) {
                        var d = rs(h);
                        d[l] = 1;
                        for (var v = l - 1; v >= 0; v--)
                            d[v] = a(d[v], c[v][l]);
                        r.push(d);
                    }
                }
                else {
                    if (0 === m)
                        return [];
                    r.splice(m, 1), m -= 1, p -= 1;
                }
            else {
                h[l] = n(h[l], c[l][l]);
                for (var y = l - 1; y >= 0; y--)
                    h[y] = a(h[y], i(h[l], c[y][l]));
            }
        } return r.map((function (e) { return new u({ data: e.map((function (e) { return [e]; })), size: [f, 1] }); })); } })), Ks = Ee("matAlgo08xS0Sid", ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return function (e, n, i) { var a = e._values, o = e._index, u = e._ptr, s = e._size, c = e._datatype, f = n._values, l = n._index, p = n._ptr, m = n._size, h = n._datatype; if (s.length !== m.length)
        throw new Yr(s.length, m.length); if (s[0] !== m[0] || s[1] !== m[1])
        throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + m + ")"); if (!a || !f)
        throw new Error("Cannot perform operation on Pattern Sparse Matrices"); var d, v = s[0], y = s[1], g = r, x = 0, b = i; "string" == typeof c && c === h && (d = c, g = t.find(r, [d, d]), x = t.convert(0, d), b = t.find(i, [d, d])); for (var w, N, D, E, A = [], S = [], C = [], M = [], F = [], O = 0; O < y; O++) {
        C[O] = S.length;
        var T = O + 1;
        for (N = u[O], D = u[O + 1], w = N; w < D; w++)
            F[E = o[w]] = T, M[E] = a[w], S.push(E);
        for (N = p[O], D = p[O + 1], w = N; w < D; w++)
            F[E = l[w]] === T && (M[E] = b(M[E], f[w]));
        for (w = C[O]; w < S.length;) {
            var B = M[E = S[w]];
            g(B, x) ? S.splice(w, 1) : (A.push(B), w++);
        }
    } return C[y] = S.length, e.createSparseMatrix({ values: A, index: S, ptr: C, size: [v, y], datatype: d }); }; })), ec = Ee("useMatrixForArrayScalar", ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix; return { "Array, number": t.referTo("DenseMatrix, number", (function (e) { return function (t, n) { return e(r(t), n).valueOf(); }; })), "Array, BigNumber": t.referTo("DenseMatrix, BigNumber", (function (e) { return function (t, n) { return e(r(t), n).valueOf(); }; })), "number, Array": t.referTo("number, DenseMatrix", (function (e) { return function (t, n) { return e(t, r(n)).valueOf(); }; })), "BigNumber, Array": t.referTo("BigNumber, DenseMatrix", (function (e) { return function (t, n) { return e(t, r(n)).valueOf(); }; })) }; })), tc = "leftShift", rc = Ee(tc, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.DenseMatrix, o = Ta({ typed: t }), u = za({ typed: t, equalScalar: n }), s = Ks({ typed: t, equalScalar: n }), c = _a({ typed: t, DenseMatrix: a }), f = la({ typed: t, equalScalar: n }), l = ma({ typed: t }), p = Ia({ typed: t, matrix: r }), m = ec({ typed: t, matrix: r }); return t(tc, { "number, number": So, "BigNumber, BigNumber": xo, "SparseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return n(r, 0) ? t.clone() : f(t, r, e, !1); }; })), "DenseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return n(r, 0) ? t.clone() : l(t, r, e, !1); }; })), "number | BigNumber, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : c(r, t, e, !0); }; })), "number | BigNumber, DenseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : l(r, t, e, !0); }; })) }, m, p({ SS: s, DS: o, SD: u })); })), nc = "rightArithShift", ic = Ee(nc, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.DenseMatrix, o = Ta({ typed: t }), u = za({ typed: t, equalScalar: n }), s = Ks({ typed: t, equalScalar: n }), c = _a({ typed: t, DenseMatrix: a }), f = la({ typed: t, equalScalar: n }), l = ma({ typed: t }), p = Ia({ typed: t, matrix: r }), m = ec({ typed: t, matrix: r }); return t(nc, { "number, number": Co, "BigNumber, BigNumber": bo, "SparseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return n(r, 0) ? t.clone() : f(t, r, e, !1); }; })), "DenseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return n(r, 0) ? t.clone() : l(t, r, e, !1); }; })), "number | BigNumber, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : c(r, t, e, !0); }; })), "number | BigNumber, DenseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : l(r, t, e, !0); }; })) }, m, p({ SS: s, DS: o, SD: u })); })), ac = "rightLogShift", oc = Ee(ac, ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.DenseMatrix, o = Ta({ typed: t }), u = za({ typed: t, equalScalar: n }), s = Ks({ typed: t, equalScalar: n }), c = _a({ typed: t, DenseMatrix: a }), f = la({ typed: t, equalScalar: n }), l = ma({ typed: t }), p = Ia({ typed: t, matrix: r }), m = ec({ typed: t, matrix: r }); return t(ac, { "number, number": Mo, "SparseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return n(r, 0) ? t.clone() : f(t, r, e, !1); }; })), "DenseMatrix, number | BigNumber": t.referToSelf((function (e) { return function (t, r) { return n(r, 0) ? t.clone() : l(t, r, e, !1); }; })), "number | BigNumber, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : c(r, t, e, !0); }; })), "number | BigNumber, DenseMatrix": t.referToSelf((function (e) { return function (t, r) { return n(t, 0) ? i(r.size(), r.storage()) : l(r, t, e, !0); }; })) }, m, p({ SS: s, DS: o, SD: u })); })), uc = Ee("and", ["typed", "matrix", "equalScalar", "zeros", "not"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.not, o = za({ typed: t, equalScalar: n }), u = qa({ typed: t, equalScalar: n }), s = la({ typed: t, equalScalar: n }), c = ma({ typed: t }), f = Ia({ typed: t, matrix: r }); return t("and", { "number, number": Zo, "Complex, Complex": function (e, t) { return !(0 === e.re && 0 === e.im || 0 === t.re && 0 === t.im); }, "BigNumber, BigNumber": function (e, t) { return !(e.isZero() || t.isZero() || e.isNaN() || t.isNaN()); }, "Unit, Unit": t.referToSelf((function (e) { return function (t, r) { return e(t.value || 0, r.value || 0); }; })), "SparseMatrix, any": t.referToSelf((function (e) { return function (t, r) { return a(r) ? i(t.size(), t.storage()) : s(t, r, e, !1); }; })), "DenseMatrix, any": t.referToSelf((function (e) { return function (t, r) { return a(r) ? i(t.size(), t.storage()) : c(t, r, e, !1); }; })), "any, SparseMatrix": t.referToSelf((function (e) { return function (t, r) { return a(t) ? i(t.size(), t.storage()) : s(r, t, e, !0); }; })), "any, DenseMatrix": t.referToSelf((function (e) { return function (t, r) { return a(t) ? i(t.size(), t.storage()) : c(r, t, e, !0); }; })), "Array, any": t.referToSelf((function (e) { return function (t, n) { return e(r(t), n).valueOf(); }; })), "any, Array": t.referToSelf((function (e) { return function (t, n) { return e(t, r(n)).valueOf(); }; })) }, f({ SS: u, DS: o })); })), sc = "compare", cc = Ee(sc, ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix"], (function (e) { var t = e.typed, r = e.config, n = e.equalScalar, i = e.matrix, a = e.BigNumber, o = e.Fraction, u = e.DenseMatrix, s = Ha({ typed: t }), c = Ga({ typed: t, equalScalar: n }), f = pa({ typed: t, DenseMatrix: u }), l = Ia({ typed: t, matrix: i }), p = ii({ typed: t }); return t(sc, fc({ typed: t, config: r }), { "boolean, boolean": function (e, t) { return e === t ? 0 : e > t ? 1 : -1; }, "BigNumber, BigNumber": function (e, t) { return ni(e, t, r.epsilon) ? new a(0) : new a(e.cmp(t)); }, "Fraction, Fraction": function (e, t) { return new o(e.compare(t)); }, "Complex, Complex": function () { throw new TypeError("No ordering relation is defined for complex numbers"); } }, p, l({ SS: c, DS: s, Ss: f })); })), fc = Ee(sc, ["typed", "config"], (function (e) { var t = e.typed, r = e.config; return t(sc, { "number, number": function (e, t) { return ue(e, t, r.epsilon) ? 0 : e > t ? 1 : -1; } }); })), lc = r(3228), pc = "compareNatural", mc = Ee(pc, ["typed", "compare"], (function (e) { var t = e.typed, r = e.compare, n = r.signatures["boolean,boolean"]; return t(pc, { "any, any": function e(t, o) { var u, s = H(t), c = H(o); if (!("number" !== s && "BigNumber" !== s && "Fraction" !== s || "number" !== c && "BigNumber" !== c && "Fraction" !== c))
            return "0" !== (u = r(t, o)).toString() ? u > 0 ? 1 : -1 : lc(s, c); var f = ["Array", "DenseMatrix", "SparseMatrix"]; if (f.includes(s) || f.includes(c))
            return 0 !== (u = i(e, t, o)) ? u : lc(s, c); if (s !== c)
            return lc(s, c); if ("Complex" === s)
            return function (e, t) { return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0; }(t, o); if ("Unit" === s)
            return t.equalBase(o) ? e(t.value, o.value) : a(e, t.formatUnits(), o.formatUnits()); if ("boolean" === s)
            return n(t, o); if ("string" === s)
            return lc(t, o); if ("Object" === s)
            return function (e, t, r) { var n = Object.keys(t), i = Object.keys(r); n.sort(lc), i.sort(lc); var o = a(e, n, i); if (0 !== o)
                return o; for (var u = 0; u < n.length; u++) {
                var s = e(t[n[u]], r[i[u]]);
                if (0 !== s)
                    return s;
            } return 0; }(e, t, o); if ("null" === s)
            return 0; if ("undefined" === s)
            return 0; throw new TypeError('Unsupported type of value "' + s + '"'); } }); function i(e, t, r) { return h(t) && h(r) ? a(e, t.toJSON().values, r.toJSON().values) : h(t) ? i(e, t.toArray(), r) : h(r) ? i(e, t, r.toArray()) : m(t) ? i(e, t.toJSON().data, r) : m(r) ? i(e, t, r.toJSON().data) : Array.isArray(t) ? Array.isArray(r) ? a(e, t, r) : i(e, t, [r]) : i(e, [t], r); } function a(e, t, r) { for (var n = 0, i = Math.min(t.length, r.length); n < i; n++) {
        var a = e(t[n], r[n]);
        if (0 !== a)
            return a;
    } return t.length > r.length ? 1 : t.length < r.length ? -1 : 0; } })), hc = "compareText", dc = ["typed", "matrix"];
    Jr.signature = "any, any";
    var vc = Ee(hc, dc, (function (e) { var t = e.typed, r = e.matrix, n = Ia({ typed: t, matrix: r }); return t(hc, Jr, n({ elop: Jr, Ds: !0 })); })), yc = "equal", gc = Ee(yc, ["typed", "matrix", "equalScalar", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = Ha({ typed: t }), o = Io({ typed: t, DenseMatrix: i }), u = pa({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: r }); return t(yc, xc({ typed: t, equalScalar: n }), s({ elop: n, SS: o, DS: a, Ss: u })); })), xc = Ee(yc, ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return t(yc, { "any, any": function (e, t) { return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : r(e, t); } }); })), bc = "equalText", wc = Ee(bc, ["typed", "compareText", "isZero"], (function (e) { var t = e.typed, r = e.compareText, n = e.isZero; return t(bc, { "any, any": function (e, t) { return n(r(e, t)); } }); })), Nc = "smaller", Dc = Ee(Nc, ["typed", "config", "matrix", "DenseMatrix"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = Ha({ typed: t }), o = Io({ typed: t, DenseMatrix: i }), u = pa({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: n }), c = ii({ typed: t }); return t(Nc, Ec({ typed: t, config: r }), { "boolean, boolean": function (e, t) { return e < t; }, "BigNumber, BigNumber": function (e, t) { return e.lt(t) && !ni(e, t, r.epsilon); }, "Fraction, Fraction": function (e, t) { return -1 === e.compare(t); }, "Complex, Complex": function (e, t) { throw new TypeError("No ordering relation is defined for complex numbers"); } }, c, s({ SS: o, DS: a, Ss: u })); })), Ec = Ee(Nc, ["typed", "config"], (function (e) { var t = e.typed, r = e.config; return t(Nc, { "number, number": function (e, t) { return e < t && !ue(e, t, r.epsilon); } }); })), Ac = "smallerEq", Sc = Ee(Ac, ["typed", "config", "matrix", "DenseMatrix"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = Ha({ typed: t }), o = Io({ typed: t, DenseMatrix: i }), u = pa({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: n }), c = ii({ typed: t }); return t(Ac, Cc({ typed: t, config: r }), { "boolean, boolean": function (e, t) { return e <= t; }, "BigNumber, BigNumber": function (e, t) { return e.lte(t) || ni(e, t, r.epsilon); }, "Fraction, Fraction": function (e, t) { return 1 !== e.compare(t); }, "Complex, Complex": function () { throw new TypeError("No ordering relation is defined for complex numbers"); } }, c, s({ SS: o, DS: a, Ss: u })); })), Cc = Ee(Ac, ["typed", "config"], (function (e) { var t = e.typed, r = e.config; return t(Ac, { "number, number": function (e, t) { return e <= t || ue(e, t, r.epsilon); } }); })), Mc = "larger", Fc = Ee(Mc, ["typed", "config", "matrix", "DenseMatrix"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = Ha({ typed: t }), o = Io({ typed: t, DenseMatrix: i }), u = pa({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: n }), c = ii({ typed: t }); return t(Mc, Oc({ typed: t, config: r }), { "boolean, boolean": function (e, t) { return e > t; }, "BigNumber, BigNumber": function (e, t) { return e.gt(t) && !ni(e, t, r.epsilon); }, "Fraction, Fraction": function (e, t) { return 1 === e.compare(t); }, "Complex, Complex": function () { throw new TypeError("No ordering relation is defined for complex numbers"); } }, c, s({ SS: o, DS: a, Ss: u })); })), Oc = Ee(Mc, ["typed", "config"], (function (e) { var t = e.typed, r = e.config; return t(Mc, { "number, number": function (e, t) { return e > t && !ue(e, t, r.epsilon); } }); })), Tc = "largerEq", Bc = Ee(Tc, ["typed", "config", "matrix", "DenseMatrix"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = Ha({ typed: t }), o = Io({ typed: t, DenseMatrix: i }), u = pa({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: n }), c = ii({ typed: t }); return t(Tc, _c({ typed: t, config: r }), { "boolean, boolean": function (e, t) { return e >= t; }, "BigNumber, BigNumber": function (e, t) { return e.gte(t) || ni(e, t, r.epsilon); }, "Fraction, Fraction": function (e, t) { return -1 !== e.compare(t); }, "Complex, Complex": function () { throw new TypeError("No ordering relation is defined for complex numbers"); } }, c, s({ SS: o, DS: a, Ss: u })); })), _c = Ee(Tc, ["typed", "config"], (function (e) { var t = e.typed, r = e.config; return t(Tc, { "number, number": function (e, t) { return e >= t || ue(e, t, r.epsilon); } }); })), kc = "deepEqual", Ic = Ee(kc, ["typed", "equal"], (function (e) { var t = e.typed, r = e.equal; return t(kc, { "any, any": function (e, t) { return n(e.valueOf(), t.valueOf()); } }); function n(e, t) { if (Array.isArray(e)) {
        if (Array.isArray(t)) {
            var i = e.length;
            if (i !== t.length)
                return !1;
            for (var a = 0; a < i; a++)
                if (!n(e[a], t[a]))
                    return !1;
            return !0;
        }
        return !1;
    } return !Array.isArray(t) && r(e, t); } })), Rc = "unequal", zc = Ee(Rc, ["typed", "config", "equalScalar", "matrix", "DenseMatrix"], (function (e) { var t = e.typed, r = (e.config, e.equalScalar), n = e.matrix, i = e.DenseMatrix, a = Ha({ typed: t }), o = Io({ typed: t, DenseMatrix: i }), u = pa({ typed: t, DenseMatrix: i }), s = Ia({ typed: t, matrix: n }); return t(Rc, qc({ typed: t, equalScalar: r }), s({ elop: function (e, t) { return !r(e, t); }, SS: o, DS: a, Ss: u })); })), qc = Ee(Rc, ["typed", "equalScalar"], (function (e) { var t = e.typed, r = e.equalScalar; return t(Rc, { "any, any": function (e, t) { return null === e ? null !== t : null === t ? null !== e : void 0 === e ? void 0 !== t : void 0 === t ? void 0 !== e : !r(e, t); } }); })), jc = "partitionSelect", Pc = Ee(jc, ["typed", "isNumeric", "isNaN", "compare"], (function (e) { var t = e.typed, r = e.isNumeric, n = e.isNaN, i = e.compare, a = i, o = function (e, t) { return -i(e, t); }; return t(jc, { "Array | Matrix, number": function (e, t) { return u(e, t, a); }, "Array | Matrix, number, string": function (e, t, r) { if ("asc" === r)
            return u(e, t, a); if ("desc" === r)
            return u(e, t, o); throw new Error('Compare string must be "asc" or "desc"'); }, "Array | Matrix, number, function": u }); function u(e, t, r) { if (!V(t) || t < 0)
        throw new Error("k must be a non-negative integer"); if (l(e)) {
        if (e.size().length > 1)
            throw new Error("Only one dimensional matrices supported");
        return s(e.valueOf(), t, r);
    } if (Array.isArray(e))
        return s(e, t, r); } function s(e, t, i) { if (t >= e.length)
        throw new Error("k out of bounds"); for (var a = 0; a < e.length; a++)
        if (r(e[a]) && n(e[a]))
            return e[a]; for (var o = 0, u = e.length - 1; o < u;) {
        for (var s = o, c = u, f = e[Math.floor(Math.random() * (u - o + 1)) + o]; s < c;)
            if (i(e[s], f) >= 0) {
                var l = e[c];
                e[c] = e[s], e[s] = l, --c;
            }
            else
                ++s;
        i(e[s], f) > 0 && --s, t <= s ? u = s : o = s + 1;
    } return e[t]; } })), Lc = "sort", Uc = Ee(Lc, ["typed", "matrix", "compare", "compareNatural"], (function (e) { var t = e.typed, r = e.matrix, n = e.compare, i = e.compareNatural, a = n, o = function (e, t) { return -n(e, t); }; return t(Lc, { Array: function (e) { return s(e), e.sort(a); }, Matrix: function (e) { return c(e), r(e.toArray().sort(a), e.storage()); }, "Array, function": function (e, t) { return s(e), e.sort(t); }, "Matrix, function": function (e, t) { return c(e), r(e.toArray().sort(t), e.storage()); }, "Array, string": function (e, t) { return s(e), e.sort(u(t)); }, "Matrix, string": function (e, t) { return c(e), r(e.toArray().sort(u(t)), e.storage()); } }); function u(e) { if ("asc" === e)
        return a; if ("desc" === e)
        return o; if ("natural" === e)
        return i; throw new Error('String "asc", "desc", or "natural" expected'); } function s(e) { if (1 !== Qr(e).length)
        throw new Error("One dimensional array expected"); } function c(e) { if (1 !== e.size().length)
        throw new Error("One dimensional matrix expected"); } })), $c = Ee("max", ["typed", "config", "numeric", "larger"], (function (e) { var t = e.typed, r = e.config, n = e.numeric, i = e.larger; return t("max", { "Array | Matrix": o, "Array | Matrix, number | BigNumber": function (e, t) { return _n(e, t.valueOf(), a); }, "...": function (e) { if (On(e))
            throw new TypeError("Scalar values expected in function max"); return o(e); } }); function a(e, t) { try {
        return i(e, t) ? e : t;
    }
    catch (e) {
        throw hs(e, "max", t);
    } } function o(e) { var t; if (Tn(e, (function (e) { try {
        isNaN(e) && "number" == typeof e ? t = NaN : (void 0 === t || i(e, t)) && (t = e);
    }
    catch (t) {
        throw hs(t, "max", e);
    } })), void 0 === t)
        throw new Error("Cannot calculate max of an empty array"); return "string" == typeof t && (t = n(t, r.number)), t; } })), Hc = Ee("min", ["typed", "config", "numeric", "smaller"], (function (e) { var t = e.typed, r = e.config, n = e.numeric, i = e.smaller; return t("min", { "Array | Matrix": o, "Array | Matrix, number | BigNumber": function (e, t) { return _n(e, t.valueOf(), a); }, "...": function (e) { if (On(e))
            throw new TypeError("Scalar values expected in function min"); return o(e); } }); function a(e, t) { try {
        return i(e, t) ? e : t;
    }
    catch (e) {
        throw hs(e, "min", t);
    } } function o(e) { var t; if (Tn(e, (function (e) { try {
        isNaN(e) && "number" == typeof e ? t = NaN : (void 0 === t || i(e, t)) && (t = e);
    }
    catch (t) {
        throw hs(t, "min", e);
    } })), void 0 === t)
        throw new Error("Cannot calculate min of an empty array"); return "string" == typeof t && (t = n(t, r.number)), t; } })), Gc = Ee("ImmutableDenseMatrix", ["smaller", "DenseMatrix"], (function (e) { var t = e.smaller, r = e.DenseMatrix; function n(e, t) { if (!(this instanceof n))
        throw new SyntaxError("Constructor must be called with the new operator"); if (t && !c(t))
        throw new Error("Invalid datatype: " + t); if (l(e) || f(e)) {
        var i = new r(e, t);
        this._data = i._data, this._size = i._size, this._datatype = i._datatype, this._min = null, this._max = null;
    }
    else if (e && f(e.data) && f(e.size))
        this._data = e.data, this._size = e.size, this._datatype = e.datatype, this._min = void 0 !== e.min ? e.min : null, this._max = void 0 !== e.max ? e.max : null;
    else {
        if (e)
            throw new TypeError("Unsupported type of data (" + H(e) + ")");
        this._data = [], this._size = [0], this._datatype = t, this._min = null, this._max = null;
    } } return n.prototype = new r, n.prototype.type = "ImmutableDenseMatrix", n.prototype.isImmutableDenseMatrix = !0, n.prototype.subset = function (e) { switch (arguments.length) {
        case 1:
            var t = r.prototype.subset.call(this, e);
            return l(t) ? new n({ data: t._data, size: t._size, datatype: t._datatype }) : t;
        case 2:
        case 3: throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
        default: throw new SyntaxError("Wrong number of arguments");
    } }, n.prototype.set = function () { throw new Error("Cannot invoke set on an Immutable Matrix instance"); }, n.prototype.resize = function () { throw new Error("Cannot invoke resize on an Immutable Matrix instance"); }, n.prototype.reshape = function () { throw new Error("Cannot invoke reshape on an Immutable Matrix instance"); }, n.prototype.clone = function () { return new n({ data: he(this._data), size: he(this._size), datatype: this._datatype }); }, n.prototype.toJSON = function () { return { mathjs: "ImmutableDenseMatrix", data: this._data, size: this._size, datatype: this._datatype }; }, n.fromJSON = function (e) { return new n(e); }, n.prototype.swapRows = function () { throw new Error("Cannot invoke swapRows on an Immutable Matrix instance"); }, n.prototype.min = function () { if (null === this._min) {
        var e = null;
        this.forEach((function (r) { (null === e || t(r, e)) && (e = r); })), this._min = null !== e ? e : void 0;
    } return this._min; }, n.prototype.max = function () { if (null === this._max) {
        var e = null;
        this.forEach((function (r) { (null === e || t(e, r)) && (e = r); })), this._max = null !== e ? e : void 0;
    } return this._max; }, n; }), { isClass: !0 }), Vc = Ee("Index", ["ImmutableDenseMatrix"], (function (e) { var t = e.ImmutableDenseMatrix; function r(e) { if (!(this instanceof r))
        throw new SyntaxError("Constructor must be called with the new operator"); this._dimensions = [], this._isScalar = !0; for (var t = 0, i = arguments.length; t < i; t++) {
        var a = arguments[t];
        if (d(a))
            this._dimensions.push(a), this._isScalar = !1;
        else if (Array.isArray(a) || l(a)) {
            var o = n(a.valueOf());
            this._dimensions.push(o);
            var u = o.size();
            1 === u.length && 1 === u[0] || (this._isScalar = !1);
        }
        else if ("number" == typeof a)
            this._dimensions.push(n([a]));
        else {
            if ("string" != typeof a)
                throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
            this._dimensions.push(a);
        }
    } } function n(e) { for (var r = 0, n = e.length; r < n; r++)
        if ("number" != typeof e[r] || !V(e[r]))
            throw new TypeError("Index parameters must be positive integer numbers"); return new t(e); } return r.prototype.type = "Index", r.prototype.isIndex = !0, r.prototype.clone = function () { var e = new r; return e._dimensions = he(this._dimensions), e._isScalar = this._isScalar, e; }, r.create = function (e) { var t = new r; return r.apply(t, e), t; }, r.prototype.size = function () { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
        var n = this._dimensions[t];
        e[t] = "string" == typeof n ? 1 : n.size()[0];
    } return e; }, r.prototype.max = function () { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
        var n = this._dimensions[t];
        e[t] = "string" == typeof n ? n : n.max();
    } return e; }, r.prototype.min = function () { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
        var n = this._dimensions[t];
        e[t] = "string" == typeof n ? n : n.min();
    } return e; }, r.prototype.forEach = function (e) { for (var t = 0, r = this._dimensions.length; t < r; t++)
        e(this._dimensions[t], t, this); }, r.prototype.dimension = function (e) { return this._dimensions[e] || null; }, r.prototype.isObjectProperty = function () { return 1 === this._dimensions.length && "string" == typeof this._dimensions[0]; }, r.prototype.getObjectProperty = function () { return this.isObjectProperty() ? this._dimensions[0] : null; }, r.prototype.isScalar = function () { return this._isScalar; }, r.prototype.toArray = function () { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
        var n = this._dimensions[t];
        e.push("string" == typeof n ? n : n.toArray());
    } return e; }, r.prototype.valueOf = r.prototype.toArray, r.prototype.toString = function () { for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
        var n = this._dimensions[t];
        "string" == typeof n ? e.push(JSON.stringify(n)) : e.push(n.toString());
    } return "[" + e.join(", ") + "]"; }, r.prototype.toJSON = function () { return { mathjs: "Index", dimensions: this._dimensions }; }, r.fromJSON = function (e) { return r.create(e.dimensions); }, r; }), { isClass: !0 }), Zc = Ee("FibonacciHeap", ["smaller", "larger"], (function (e) { var t = e.smaller, r = e.larger, n = 1 / Math.log((1 + Math.sqrt(5)) / 2); function i() { if (!(this instanceof i))
        throw new SyntaxError("Constructor must be called with the new operator"); this._minimum = null, this._size = 0; } function a(e, t, r) { t.left.right = t.right, t.right.left = t.left, r.degree--, r.child === t && (r.child = t.right), 0 === r.degree && (r.child = null), t.left = e, t.right = e.right, e.right = t, t.right.left = t, t.parent = null, t.mark = !1; } function o(e, t) { var r = t.parent; r && (t.mark ? (a(e, t, r), o(r)) : t.mark = !0); } i.prototype.type = "FibonacciHeap", i.prototype.isFibonacciHeap = !0, i.prototype.insert = function (e, r) { var n = { key: e, value: r, degree: 0 }; if (this._minimum) {
        var i = this._minimum;
        n.left = i, n.right = i.right, i.right = n, n.right.left = n, t(e, i.key) && (this._minimum = n);
    }
    else
        n.left = n, n.right = n, this._minimum = n; return this._size++, n; }, i.prototype.size = function () { return this._size; }, i.prototype.clear = function () { this._minimum = null, this._size = 0; }, i.prototype.isEmpty = function () { return 0 === this._size; }, i.prototype.extractMinimum = function () { var e = this._minimum; if (null === e)
        return e; for (var i = this._minimum, a = e.degree, o = e.child; a > 0;) {
        var s = o.right;
        o.left.right = o.right, o.right.left = o.left, o.left = i, o.right = i.right, i.right = o, o.right.left = o, o.parent = null, o = s, a--;
    } return e.left.right = e.right, e.right.left = e.left, i = e === e.right ? null : function (e, i) { var a, o = Math.floor(Math.log(i) * n) + 1, s = new Array(o), c = 0, f = e; if (f)
        for (c++, f = f.right; f !== e;)
            c++, f = f.right; for (; c > 0;) {
        for (var l = f.degree, p = f.right; a = s[l];) {
            if (r(f.key, a.key)) {
                var m = a;
                a = f, f = m;
            }
            u(a, f), s[l] = null, l++;
        }
        s[l] = f, f = p, c--;
    } e = null; for (var h = 0; h < o; h++)
        (a = s[h]) && (e ? (a.left.right = a.right, a.right.left = a.left, a.left = e, a.right = e.right, e.right = a, a.right.left = a, t(a.key, e.key) && (e = a)) : e = a); return e; }(i = e.right, this._size), this._size--, this._minimum = i, e; }, i.prototype.remove = function (e) { this._minimum = function (e, r, n) { r.key = -1; var i = r.parent; return i && t(r.key, i.key) && (a(e, r, i), o(e, i)), t(r.key, e.key) && (e = r), e; }(this._minimum, e), this.extractMinimum(); }; var u = function (e, t) { e.left.right = e.right, e.right.left = e.left, e.parent = t, t.child ? (e.left = t.child, e.right = t.child.right, t.child.right = e, e.right.left = e) : (t.child = e, e.right = e, e.left = e), t.degree++, e.mark = !1; }; return i; }), { isClass: !0 }), Wc = Ee("Spa", ["addScalar", "equalScalar", "FibonacciHeap"], (function (e) { var t = e.addScalar, r = e.equalScalar, n = e.FibonacciHeap; function i() { if (!(this instanceof i))
        throw new SyntaxError("Constructor must be called with the new operator"); this._values = [], this._heap = new n; } return i.prototype.type = "Spa", i.prototype.isSpa = !0, i.prototype.set = function (e, t) { if (this._values[e])
        this._values[e].value = t;
    else {
        var r = this._heap.insert(e, t);
        this._values[e] = r;
    } }, i.prototype.get = function (e) { var t = this._values[e]; return t ? t.value : 0; }, i.prototype.accumulate = function (e, r) { var n = this._values[e]; n ? n.value = t(n.value, r) : (n = this._heap.insert(e, r), this._values[e] = n); }, i.prototype.forEach = function (e, t, n) { var i = this._heap, a = this._values, o = [], u = i.extractMinimum(); for (u && o.push(u); u && u.key <= t;)
        u.key >= e && (r(u.value, 0) || n(u.key, u.value, this)), (u = i.extractMinimum()) && o.push(u); for (var s = 0; s < o.length; s++) {
        var c = o[s];
        a[(u = i.insert(c.key, c.value)).key] = u;
    } }, i.prototype.swap = function (e, t) { var r = this._values[e], n = this._values[t]; if (!r && n)
        r = this._heap.insert(e, n.value), this._heap.remove(n), this._values[e] = r, this._values[t] = void 0;
    else if (r && !n)
        n = this._heap.insert(t, r.value), this._heap.remove(r), this._values[t] = n, this._values[e] = void 0;
    else if (r && n) {
        var i = r.value;
        r.value = n.value, n.value = i;
    } }, i; }), { isClass: !0 });
    function Jc(e, t, r) { return (t = Me(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
    function Yc() { return Yc = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    } return e; }, Yc.apply(this, arguments); }
    r(5003), r(9337), r(3321), r(3650);
    var Xc = Dn((function (e) { return new e(1).exp(); }), { hasher: tf }), Qc = Dn((function (e) { return new e(1).plus(new e(5).sqrt()).div(2); }), { hasher: tf }), Kc = Dn((function (e) { return e.acos(-1); }), { hasher: tf }), ef = Dn((function (e) { return Kc(e).times(2); }), { hasher: tf });
    function tf(e) { return e[0].precision; }
    function rf(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
    } return r; }
    function nf(e) { for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? rf(Object(r), !0).forEach((function (t) { Jc(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rf(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
    } return e; }
    var af = Ee("Unit", ["?on", "config", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format", "number", "Complex", "BigNumber", "Fraction"], (function (e) { var r, n, i, a = e.on, u = e.config, c = e.addScalar, f = e.subtract, l = e.multiplyScalar, p = e.divideScalar, m = e.pow, h = e.abs, d = e.fix, v = e.round, y = e.equal, g = e.isNumeric, x = e.format, b = e.number, w = e.Complex, N = e.BigNumber, D = e.Fraction, E = b; function A(e, t) { if (!(this instanceof A))
        throw new Error("Constructor must be called with the new operator"); if (null != e && !g(e) && !o(e))
        throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined"); if (this.fixPrefix = !1, this.skipAutomaticSimplification = !0, void 0 === t)
        this.units = [], this.dimensions = R.map((function (e) { return 0; }));
    else if ("string" == typeof t) {
        var r = A.parse(t);
        this.units = r.units, this.dimensions = r.dimensions;
    }
    else {
        if (!s(t) || null !== t.value)
            throw new TypeError("Second parameter in Unit constructor must be a string or valueless Unit");
        this.fixPrefix = t.fixPrefix, this.skipAutomaticSimplification = t.skipAutomaticSimplification, this.dimensions = t.dimensions.slice(0), this.units = t.units.map((function (e) { return Yc({}, e); }));
    } this.value = this._normalize(e); } function S() { for (; " " === i || "\t" === i;)
        M(); } function C(e) { return e >= "0" && e <= "9"; } function M() { n++, i = r.charAt(n); } function F(e) { n = e, i = r.charAt(n); } function O() { var e = "", t = n; if ("+" === i ? M() : "-" === i && (e += i, M()), !function (e) { return e >= "0" && e <= "9" || "." === e; }(i))
        return F(t), null; if ("." === i) {
        if (e += i, M(), !C(i))
            return F(t), null;
    }
    else {
        for (; C(i);)
            e += i, M();
        "." === i && (e += i, M());
    } for (; C(i);)
        e += i, M(); if ("E" === i || "e" === i) {
        var r = "", a = n;
        if (r += i, M(), "+" !== i && "-" !== i || (r += i, M()), !C(i))
            return F(a), e;
        for (e += r; C(i);)
            e += i, M();
    } return e; } function T() { for (var e = ""; C(i) || A.isValidAlpha(i);)
        e += i, M(); var t = e.charAt(0); return A.isValidAlpha(t) ? e : null; } function B(e) { return i === e ? (M(), e) : null; } Object.defineProperty(A, "name", { value: "Unit" }), A.prototype.constructor = A, A.prototype.type = "Unit", A.prototype.isUnit = !0, A.parse = function (e, t) { if (t = t || {}, n = -1, i = "", "string" != typeof (r = e))
        throw new TypeError("Invalid argument in Unit.parse, string expected"); var a = new A; a.units = []; var o = 1, s = !1; M(), S(); var c = O(), f = null; if (c) {
        if ("BigNumber" === u.number)
            f = new N(c);
        else if ("Fraction" === u.number)
            try {
                f = new D(c);
            }
            catch (e) {
                f = parseFloat(c);
            }
        else
            f = parseFloat(c);
        S(), B("*") ? (o = 1, s = !0) : B("/") && (o = -1, s = !0);
    } for (var l = [], p = 1;;) {
        for (S(); "(" === i;)
            l.push(o), p *= o, o = 1, M(), S();
        var m;
        if (!i)
            break;
        var h = i;
        if (null === (m = T()))
            throw new SyntaxError('Unexpected "' + h + '" in "' + r + '" at index ' + n.toString());
        var d = _(m);
        if (null === d)
            throw new SyntaxError('Unit "' + m + '" not found.');
        var v = o * p;
        if (S(), B("^")) {
            S();
            var y = O();
            if (null === y)
                throw new SyntaxError('In "' + e + '", "^" must be followed by a floating-point number');
            v *= y;
        }
        a.units.push({ unit: d.unit, prefix: d.prefix, power: v });
        for (var g = 0; g < R.length; g++)
            a.dimensions[g] += (d.unit.dimensions[g] || 0) * v;
        for (S(); ")" === i;) {
            if (0 === l.length)
                throw new SyntaxError('Unmatched ")" in "' + r + '" at index ' + n.toString());
            p /= l.pop(), M(), S();
        }
        if (s = !1, B("*") ? (o = 1, s = !0) : B("/") ? (o = -1, s = !0) : o = 1, d.unit.base) {
            var x = d.unit.base.key;
            $.auto[x] = { unit: d.unit, prefix: d.prefix };
        }
    } if (S(), i)
        throw new SyntaxError('Could not parse: "' + e + '"'); if (s)
        throw new SyntaxError('Trailing characters: "' + e + '"'); if (0 !== l.length)
        throw new SyntaxError('Unmatched "(" in "' + r + '"'); if (0 === a.units.length && !t.allowNoUnits)
        throw new SyntaxError('"' + e + '" contains no units'); return a.value = void 0 !== f ? a._normalize(f) : null, a; }, A.prototype.clone = function () { var e = new A; e.fixPrefix = this.fixPrefix, e.skipAutomaticSimplification = this.skipAutomaticSimplification, e.value = he(this.value), e.dimensions = this.dimensions.slice(0), e.units = []; for (var t = 0; t < this.units.length; t++)
        for (var r in e.units[t] = {}, this.units[t])
            Ne(this.units[t], r) && (e.units[t][r] = this.units[t][r]); return e; }, A.prototype.valueType = function () { return H(this.value); }, A.prototype._isDerived = function () { return 0 !== this.units.length && (this.units.length > 1 || Math.abs(this.units[0].power - 1) > 1e-15); }, A.prototype._normalize = function (e) { if (null == e || 0 === this.units.length)
        return e; for (var t = e, r = A._getNumberConverter(H(e)), n = 0; n < this.units.length; n++) {
        var i = r(this.units[n].unit.value), a = r(this.units[n].prefix.value), o = r(this.units[n].power);
        t = l(t, m(l(i, a), o));
    } return t; }, A.prototype._denormalize = function (e, t) { if (null == e || 0 === this.units.length)
        return e; for (var r = e, n = A._getNumberConverter(H(e)), i = 0; i < this.units.length; i++) {
        var a = n(this.units[i].unit.value), o = n(this.units[i].prefix.value), u = n(this.units[i].power);
        r = p(r, m(l(a, o), u));
    } return r; }; var _ = Dn((function (e) { if (Ne(P, e)) {
        var t = P[e];
        return { unit: t, prefix: t.prefixes[""] };
    } for (var r in P)
        if (Ne(P, r) && Hr(e, r)) {
            var n = P[r], i = e.length - r.length, a = e.substring(0, i), o = Ne(n.prefixes, a) ? n.prefixes[a] : void 0;
            if (void 0 !== o)
                return { unit: n, prefix: o };
        } return null; }), { hasher: function (e) { return e[0]; }, limit: 100 }); function k(e) { return e.equalBase(z.NONE) && null !== e.value && !u.predictable ? e.value : e; } A.isValuelessUnit = function (e) { return null !== _(e); }, A.prototype.hasBase = function (e) { if ("string" == typeof e && (e = z[e]), !e)
        return !1; for (var t = 0; t < R.length; t++)
        if (Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0)) > 1e-12)
            return !1; return !0; }, A.prototype.equalBase = function (e) { for (var t = 0; t < R.length; t++)
        if (Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0)) > 1e-12)
            return !1; return !0; }, A.prototype.equals = function (e) { return this.equalBase(e) && y(this.value, e.value); }, A.prototype.multiply = function (e) { for (var t = this.clone(), r = s(e) ? e : new A(e), n = 0; n < R.length; n++)
        t.dimensions[n] = (this.dimensions[n] || 0) + (r.dimensions[n] || 0); for (var i = 0; i < r.units.length; i++) {
        var a = nf({}, r.units[i]);
        t.units.push(a);
    } if (null !== this.value || null !== r.value) {
        var o = null === this.value ? this._normalize(1) : this.value, u = null === r.value ? r._normalize(1) : r.value;
        t.value = l(o, u);
    }
    else
        t.value = null; return s(e) && (t.skipAutomaticSimplification = !1), k(t); }, A.prototype.divideInto = function (e) { return new A(e).divide(this); }, A.prototype.divide = function (e) { for (var t = this.clone(), r = s(e) ? e : new A(e), n = 0; n < R.length; n++)
        t.dimensions[n] = (this.dimensions[n] || 0) - (r.dimensions[n] || 0); for (var i = 0; i < r.units.length; i++) {
        var a = nf(nf({}, r.units[i]), {}, { power: -r.units[i].power });
        t.units.push(a);
    } if (null !== this.value || null !== r.value) {
        var o = null === this.value ? this._normalize(1) : this.value, u = null === r.value ? r._normalize(1) : r.value;
        t.value = p(o, u);
    }
    else
        t.value = null; return s(e) && (t.skipAutomaticSimplification = !1), k(t); }, A.prototype.pow = function (e) { for (var t = this.clone(), r = 0; r < R.length; r++)
        t.dimensions[r] = (this.dimensions[r] || 0) * e; for (var n = 0; n < t.units.length; n++)
        t.units[n].power *= e; return null !== t.value ? t.value = m(t.value, e) : t.value = null, t.skipAutomaticSimplification = !1, k(t); }, A.prototype.abs = function () { var e = this.clone(); if (null !== e.value)
        if (e._isDerived() || 0 === e.units[0].unit.offset)
            e.value = h(e.value);
        else {
            var t = e._numberConverter(), r = t(e.units[0].unit.value), n = t(e.units[0].unit.offset), i = l(r, n);
            e.value = f(h(c(e.value, i)), i);
        } for (var a in e.units)
        "VA" !== e.units[a].unit.name && "VAR" !== e.units[a].unit.name || (e.units[a].unit = P.W); return e; }, A.prototype.to = function (e) { var t, r = null === this.value ? this._normalize(1) : this.value; if ("string" == typeof e)
        t = A.parse(e);
    else {
        if (!s(e))
            throw new Error("String or Unit expected as parameter");
        t = e.clone();
    } if (!this.equalBase(t))
        throw new Error("Units do not match ('".concat(t.toString(), "' != '").concat(this.toString(), "')")); if (null !== t.value)
        throw new Error("Cannot convert to a unit with a value"); if (null === this.value || this._isDerived() || this.units[0].unit.offset === t.units[0].unit.offset)
        t.value = he(r);
    else {
        var n = A._getNumberConverter(H(r)), i = n(this.units[0].unit.value), a = n(this.units[0].unit.offset), o = l(i, a), u = n(t.units[0].unit.value), p = n(t.units[0].unit.offset), m = l(u, p);
        t.value = f(c(r, o), m);
    } return t.fixPrefix = !0, t.skipAutomaticSimplification = !0, t; }, A.prototype.toNumber = function (e) { return E(this.toNumeric(e)); }, A.prototype.toNumeric = function (e) { var t; return (t = e ? this.to(e) : this.clone())._isDerived() || 0 === t.units.length ? t._denormalize(t.value) : t._denormalize(t.value, t.units[0].prefix.value); }, A.prototype.toString = function () { return this.format(); }, A.prototype.toJSON = function () { return { mathjs: "Unit", value: this._denormalize(this.value), unit: this.formatUnits(), fixPrefix: this.fixPrefix }; }, A.fromJSON = function (e) { var t = new A(e.value, e.unit); return t.fixPrefix = e.fixPrefix || !1, t; }, A.prototype.valueOf = A.prototype.toString, A.prototype.simplify = function () { var e, t, r = this.clone(), n = []; for (var i in G)
        if (Ne(G, i) && r.hasBase(z[i])) {
            e = i;
            break;
        } if ("NONE" === e)
        r.units = [];
    else if (e && Ne(G, e) && (t = G[e]), t)
        r.units = [{ unit: t.unit, prefix: t.prefix, power: 1 }];
    else {
        for (var a = !1, o = 0; o < R.length; o++) {
            var u = R[o];
            Math.abs(r.dimensions[o] || 0) > 1e-12 && (Ne(G, u) ? n.push({ unit: G[u].unit, prefix: G[u].prefix, power: r.dimensions[o] || 0 }) : a = !0);
        }
        n.length < r.units.length && !a && (r.units = n);
    } return r; }, A.prototype.toSI = function () { for (var e = this.clone(), t = [], r = 0; r < R.length; r++) {
        var n = R[r];
        if (Math.abs(e.dimensions[r] || 0) > 1e-12) {
            if (!Ne($.si, n))
                throw new Error("Cannot express custom unit " + n + " in SI units");
            t.push({ unit: $.si[n].unit, prefix: $.si[n].prefix, power: e.dimensions[r] || 0 });
        }
    } return e.units = t, e.fixPrefix = !0, e.skipAutomaticSimplification = !0, e; }, A.prototype.formatUnits = function () { for (var e = "", t = "", r = 0, n = 0, i = 0; i < this.units.length; i++)
        this.units[i].power > 0 ? (r++, e += " " + this.units[i].prefix.name + this.units[i].unit.name, Math.abs(this.units[i].power - 1) > 1e-15 && (e += "^" + this.units[i].power)) : this.units[i].power < 0 && n++; if (n > 0)
        for (var a = 0; a < this.units.length; a++)
            this.units[a].power < 0 && (r > 0 ? (t += " " + this.units[a].prefix.name + this.units[a].unit.name, Math.abs(this.units[a].power + 1) > 1e-15 && (t += "^" + -this.units[a].power)) : (t += " " + this.units[a].prefix.name + this.units[a].unit.name, t += "^" + this.units[a].power)); e = e.substr(1), t = t.substr(1), r > 1 && n > 0 && (e = "(" + e + ")"), n > 1 && r > 0 && (t = "(" + t + ")"); var o = e; return r > 0 && n > 0 && (o += " / "), o + t; }, A.prototype.format = function (e) { var t = this.skipAutomaticSimplification || null === this.value ? this.clone() : this.simplify(), r = !1; for (var n in void 0 !== t.value && null !== t.value && o(t.value) && (r = Math.abs(t.value.re) < 1e-14), t.units)
        Ne(t.units, n) && t.units[n].unit && ("VA" === t.units[n].unit.name && r ? t.units[n].unit = P.VAR : "VAR" !== t.units[n].unit.name || r || (t.units[n].unit = P.VA)); 1 !== t.units.length || t.fixPrefix || Math.abs(t.units[0].power - Math.round(t.units[0].power)) < 1e-14 && (t.units[0].prefix = t._bestPrefix()); var i = t._denormalize(t.value), a = null !== t.value ? x(i, e || {}) : "", u = t.formatUnits(); return t.value && o(t.value) && (a = "(" + a + ")"), u.length > 0 && a.length > 0 && (a += " "), a + u; }, A.prototype._bestPrefix = function () { if (1 !== this.units.length)
        throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!"); if (Math.abs(this.units[0].power - Math.round(this.units[0].power)) >= 1e-14)
        throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!"); var e = null !== this.value ? h(this.value) : 0, t = h(this.units[0].unit.value), r = this.units[0].prefix; if (0 === e)
        return r; var n = this.units[0].power, i = Math.log(e / Math.pow(r.value * t, n)) / Math.LN10 - 1.2; if (i > -2.200001 && i < 1.800001)
        return r; i = Math.abs(i); var a = this.units[0].unit.prefixes; for (var o in a)
        if (Ne(a, o)) {
            var u = a[o];
            if (u.scientific) {
                var s = Math.abs(Math.log(e / Math.pow(u.value * t, n)) / Math.LN10 - 1.2);
                (s < i || s === i && u.name.length < r.name.length) && (r = u, i = s);
            }
        } return r; }, A.prototype.splitUnit = function (e) { for (var t = this.clone(), r = [], n = 0; n < e.length && (t = t.to(e[n]), n !== e.length - 1); n++) {
        var i = t.toNumeric(), a = v(i), o = new A(y(a, i) ? a : d(t.toNumeric()), e[n].toString());
        r.push(o), t = f(t, o);
    } for (var u = 0, s = 0; s < r.length; s++)
        u = c(u, r[s].value); return y(u, this.value) && (t.value = 0), r.push(t), r; }; var I = { NONE: { "": { name: "", value: 1, scientific: !0 } }, SHORT: { "": { name: "", value: 1, scientific: !0 }, da: { name: "da", value: 10, scientific: !1 }, h: { name: "h", value: 100, scientific: !1 }, k: { name: "k", value: 1e3, scientific: !0 }, M: { name: "M", value: 1e6, scientific: !0 }, G: { name: "G", value: 1e9, scientific: !0 }, T: { name: "T", value: 1e12, scientific: !0 }, P: { name: "P", value: 1e15, scientific: !0 }, E: { name: "E", value: 1e18, scientific: !0 }, Z: { name: "Z", value: 1e21, scientific: !0 }, Y: { name: "Y", value: 1e24, scientific: !0 }, d: { name: "d", value: .1, scientific: !1 }, c: { name: "c", value: .01, scientific: !1 }, m: { name: "m", value: .001, scientific: !0 }, u: { name: "u", value: 1e-6, scientific: !0 }, n: { name: "n", value: 1e-9, scientific: !0 }, p: { name: "p", value: 1e-12, scientific: !0 }, f: { name: "f", value: 1e-15, scientific: !0 }, a: { name: "a", value: 1e-18, scientific: !0 }, z: { name: "z", value: 1e-21, scientific: !0 }, y: { name: "y", value: 1e-24, scientific: !0 } }, LONG: { "": { name: "", value: 1, scientific: !0 }, deca: { name: "deca", value: 10, scientific: !1 }, hecto: { name: "hecto", value: 100, scientific: !1 }, kilo: { name: "kilo", value: 1e3, scientific: !0 }, mega: { name: "mega", value: 1e6, scientific: !0 }, giga: { name: "giga", value: 1e9, scientific: !0 }, tera: { name: "tera", value: 1e12, scientific: !0 }, peta: { name: "peta", value: 1e15, scientific: !0 }, exa: { name: "exa", value: 1e18, scientific: !0 }, zetta: { name: "zetta", value: 1e21, scientific: !0 }, yotta: { name: "yotta", value: 1e24, scientific: !0 }, deci: { name: "deci", value: .1, scientific: !1 }, centi: { name: "centi", value: .01, scientific: !1 }, milli: { name: "milli", value: .001, scientific: !0 }, micro: { name: "micro", value: 1e-6, scientific: !0 }, nano: { name: "nano", value: 1e-9, scientific: !0 }, pico: { name: "pico", value: 1e-12, scientific: !0 }, femto: { name: "femto", value: 1e-15, scientific: !0 }, atto: { name: "atto", value: 1e-18, scientific: !0 }, zepto: { name: "zepto", value: 1e-21, scientific: !0 }, yocto: { name: "yocto", value: 1e-24, scientific: !0 } }, SQUARED: { "": { name: "", value: 1, scientific: !0 }, da: { name: "da", value: 100, scientific: !1 }, h: { name: "h", value: 1e4, scientific: !1 }, k: { name: "k", value: 1e6, scientific: !0 }, M: { name: "M", value: 1e12, scientific: !0 }, G: { name: "G", value: 1e18, scientific: !0 }, T: { name: "T", value: 1e24, scientific: !0 }, P: { name: "P", value: 1e30, scientific: !0 }, E: { name: "E", value: 1e36, scientific: !0 }, Z: { name: "Z", value: 1e42, scientific: !0 }, Y: { name: "Y", value: 1e48, scientific: !0 }, d: { name: "d", value: .01, scientific: !1 }, c: { name: "c", value: 1e-4, scientific: !1 }, m: { name: "m", value: 1e-6, scientific: !0 }, u: { name: "u", value: 1e-12, scientific: !0 }, n: { name: "n", value: 1e-18, scientific: !0 }, p: { name: "p", value: 1e-24, scientific: !0 }, f: { name: "f", value: 1e-30, scientific: !0 }, a: { name: "a", value: 1e-36, scientific: !0 }, z: { name: "z", value: 1e-42, scientific: !0 }, y: { name: "y", value: 1e-48, scientific: !0 } }, CUBIC: { "": { name: "", value: 1, scientific: !0 }, da: { name: "da", value: 1e3, scientific: !1 }, h: { name: "h", value: 1e6, scientific: !1 }, k: { name: "k", value: 1e9, scientific: !0 }, M: { name: "M", value: 1e18, scientific: !0 }, G: { name: "G", value: 1e27, scientific: !0 }, T: { name: "T", value: 1e36, scientific: !0 }, P: { name: "P", value: 1e45, scientific: !0 }, E: { name: "E", value: 1e54, scientific: !0 }, Z: { name: "Z", value: 1e63, scientific: !0 }, Y: { name: "Y", value: 1e72, scientific: !0 }, d: { name: "d", value: .001, scientific: !1 }, c: { name: "c", value: 1e-6, scientific: !1 }, m: { name: "m", value: 1e-9, scientific: !0 }, u: { name: "u", value: 1e-18, scientific: !0 }, n: { name: "n", value: 1e-27, scientific: !0 }, p: { name: "p", value: 1e-36, scientific: !0 }, f: { name: "f", value: 1e-45, scientific: !0 }, a: { name: "a", value: 1e-54, scientific: !0 }, z: { name: "z", value: 1e-63, scientific: !0 }, y: { name: "y", value: 1e-72, scientific: !0 } }, BINARY_SHORT_SI: { "": { name: "", value: 1, scientific: !0 }, k: { name: "k", value: 1e3, scientific: !0 }, M: { name: "M", value: 1e6, scientific: !0 }, G: { name: "G", value: 1e9, scientific: !0 }, T: { name: "T", value: 1e12, scientific: !0 }, P: { name: "P", value: 1e15, scientific: !0 }, E: { name: "E", value: 1e18, scientific: !0 }, Z: { name: "Z", value: 1e21, scientific: !0 }, Y: { name: "Y", value: 1e24, scientific: !0 } }, BINARY_SHORT_IEC: { "": { name: "", value: 1, scientific: !0 }, Ki: { name: "Ki", value: 1024, scientific: !0 }, Mi: { name: "Mi", value: Math.pow(1024, 2), scientific: !0 }, Gi: { name: "Gi", value: Math.pow(1024, 3), scientific: !0 }, Ti: { name: "Ti", value: Math.pow(1024, 4), scientific: !0 }, Pi: { name: "Pi", value: Math.pow(1024, 5), scientific: !0 }, Ei: { name: "Ei", value: Math.pow(1024, 6), scientific: !0 }, Zi: { name: "Zi", value: Math.pow(1024, 7), scientific: !0 }, Yi: { name: "Yi", value: Math.pow(1024, 8), scientific: !0 } }, BINARY_LONG_SI: { "": { name: "", value: 1, scientific: !0 }, kilo: { name: "kilo", value: 1e3, scientific: !0 }, mega: { name: "mega", value: 1e6, scientific: !0 }, giga: { name: "giga", value: 1e9, scientific: !0 }, tera: { name: "tera", value: 1e12, scientific: !0 }, peta: { name: "peta", value: 1e15, scientific: !0 }, exa: { name: "exa", value: 1e18, scientific: !0 }, zetta: { name: "zetta", value: 1e21, scientific: !0 }, yotta: { name: "yotta", value: 1e24, scientific: !0 } }, BINARY_LONG_IEC: { "": { name: "", value: 1, scientific: !0 }, kibi: { name: "kibi", value: 1024, scientific: !0 }, mebi: { name: "mebi", value: Math.pow(1024, 2), scientific: !0 }, gibi: { name: "gibi", value: Math.pow(1024, 3), scientific: !0 }, tebi: { name: "tebi", value: Math.pow(1024, 4), scientific: !0 }, pebi: { name: "pebi", value: Math.pow(1024, 5), scientific: !0 }, exi: { name: "exi", value: Math.pow(1024, 6), scientific: !0 }, zebi: { name: "zebi", value: Math.pow(1024, 7), scientific: !0 }, yobi: { name: "yobi", value: Math.pow(1024, 8), scientific: !0 } }, BTU: { "": { name: "", value: 1, scientific: !0 }, MM: { name: "MM", value: 1e6, scientific: !0 } } }; I.SHORTLONG = Yc({}, I.SHORT, I.LONG), I.BINARY_SHORT = Yc({}, I.BINARY_SHORT_SI, I.BINARY_SHORT_IEC), I.BINARY_LONG = Yc({}, I.BINARY_LONG_SI, I.BINARY_LONG_IEC); var R = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"], z = { NONE: { dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0] }, MASS: { dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0] }, LENGTH: { dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0] }, TIME: { dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0] }, CURRENT: { dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0] }, TEMPERATURE: { dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0] }, LUMINOUS_INTENSITY: { dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0] }, AMOUNT_OF_SUBSTANCE: { dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0] }, FORCE: { dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0] }, SURFACE: { dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0] }, VOLUME: { dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0] }, ENERGY: { dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0] }, POWER: { dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0] }, PRESSURE: { dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0] }, ELECTRIC_CHARGE: { dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0] }, ELECTRIC_CAPACITANCE: { dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0] }, ELECTRIC_POTENTIAL: { dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0] }, ELECTRIC_RESISTANCE: { dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0] }, ELECTRIC_INDUCTANCE: { dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0] }, ELECTRIC_CONDUCTANCE: { dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0] }, MAGNETIC_FLUX: { dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0] }, MAGNETIC_FLUX_DENSITY: { dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0] }, FREQUENCY: { dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0] }, ANGLE: { dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0] }, BIT: { dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1] } }; for (var q in z)
        Ne(z, q) && (z[q].key = q); var j = { name: "", base: {}, value: 1, offset: 0, dimensions: R.map((function (e) { return 0; })) }, P = { meter: { name: "meter", base: z.LENGTH, prefixes: I.LONG, value: 1, offset: 0 }, inch: { name: "inch", base: z.LENGTH, prefixes: I.NONE, value: .0254, offset: 0 }, foot: { name: "foot", base: z.LENGTH, prefixes: I.NONE, value: .3048, offset: 0 }, yard: { name: "yard", base: z.LENGTH, prefixes: I.NONE, value: .9144, offset: 0 }, mile: { name: "mile", base: z.LENGTH, prefixes: I.NONE, value: 1609.344, offset: 0 }, link: { name: "link", base: z.LENGTH, prefixes: I.NONE, value: .201168, offset: 0 }, rod: { name: "rod", base: z.LENGTH, prefixes: I.NONE, value: 5.0292, offset: 0 }, chain: { name: "chain", base: z.LENGTH, prefixes: I.NONE, value: 20.1168, offset: 0 }, angstrom: { name: "angstrom", base: z.LENGTH, prefixes: I.NONE, value: 1e-10, offset: 0 }, m: { name: "m", base: z.LENGTH, prefixes: I.SHORT, value: 1, offset: 0 }, in: { name: "in", base: z.LENGTH, prefixes: I.NONE, value: .0254, offset: 0 }, ft: { name: "ft", base: z.LENGTH, prefixes: I.NONE, value: .3048, offset: 0 }, yd: { name: "yd", base: z.LENGTH, prefixes: I.NONE, value: .9144, offset: 0 }, mi: { name: "mi", base: z.LENGTH, prefixes: I.NONE, value: 1609.344, offset: 0 }, li: { name: "li", base: z.LENGTH, prefixes: I.NONE, value: .201168, offset: 0 }, rd: { name: "rd", base: z.LENGTH, prefixes: I.NONE, value: 5.02921, offset: 0 }, ch: { name: "ch", base: z.LENGTH, prefixes: I.NONE, value: 20.1168, offset: 0 }, mil: { name: "mil", base: z.LENGTH, prefixes: I.NONE, value: 254e-7, offset: 0 }, m2: { name: "m2", base: z.SURFACE, prefixes: I.SQUARED, value: 1, offset: 0 }, sqin: { name: "sqin", base: z.SURFACE, prefixes: I.NONE, value: 64516e-8, offset: 0 }, sqft: { name: "sqft", base: z.SURFACE, prefixes: I.NONE, value: .09290304, offset: 0 }, sqyd: { name: "sqyd", base: z.SURFACE, prefixes: I.NONE, value: .83612736, offset: 0 }, sqmi: { name: "sqmi", base: z.SURFACE, prefixes: I.NONE, value: 2589988.110336, offset: 0 }, sqrd: { name: "sqrd", base: z.SURFACE, prefixes: I.NONE, value: 25.29295, offset: 0 }, sqch: { name: "sqch", base: z.SURFACE, prefixes: I.NONE, value: 404.6873, offset: 0 }, sqmil: { name: "sqmil", base: z.SURFACE, prefixes: I.NONE, value: 6.4516e-10, offset: 0 }, acre: { name: "acre", base: z.SURFACE, prefixes: I.NONE, value: 4046.86, offset: 0 }, hectare: { name: "hectare", base: z.SURFACE, prefixes: I.NONE, value: 1e4, offset: 0 }, m3: { name: "m3", base: z.VOLUME, prefixes: I.CUBIC, value: 1, offset: 0 }, L: { name: "L", base: z.VOLUME, prefixes: I.SHORT, value: .001, offset: 0 }, l: { name: "l", base: z.VOLUME, prefixes: I.SHORT, value: .001, offset: 0 }, litre: { name: "litre", base: z.VOLUME, prefixes: I.LONG, value: .001, offset: 0 }, cuin: { name: "cuin", base: z.VOLUME, prefixes: I.NONE, value: 16387064e-12, offset: 0 }, cuft: { name: "cuft", base: z.VOLUME, prefixes: I.NONE, value: .028316846592, offset: 0 }, cuyd: { name: "cuyd", base: z.VOLUME, prefixes: I.NONE, value: .764554857984, offset: 0 }, teaspoon: { name: "teaspoon", base: z.VOLUME, prefixes: I.NONE, value: 5e-6, offset: 0 }, tablespoon: { name: "tablespoon", base: z.VOLUME, prefixes: I.NONE, value: 15e-6, offset: 0 }, drop: { name: "drop", base: z.VOLUME, prefixes: I.NONE, value: 5e-8, offset: 0 }, gtt: { name: "gtt", base: z.VOLUME, prefixes: I.NONE, value: 5e-8, offset: 0 }, minim: { name: "minim", base: z.VOLUME, prefixes: I.NONE, value: 6.161152e-8, offset: 0 }, fluiddram: { name: "fluiddram", base: z.VOLUME, prefixes: I.NONE, value: 36966911e-13, offset: 0 }, fluidounce: { name: "fluidounce", base: z.VOLUME, prefixes: I.NONE, value: 2957353e-11, offset: 0 }, gill: { name: "gill", base: z.VOLUME, prefixes: I.NONE, value: .0001182941, offset: 0 }, cc: { name: "cc", base: z.VOLUME, prefixes: I.NONE, value: 1e-6, offset: 0 }, cup: { name: "cup", base: z.VOLUME, prefixes: I.NONE, value: .0002365882, offset: 0 }, pint: { name: "pint", base: z.VOLUME, prefixes: I.NONE, value: .0004731765, offset: 0 }, quart: { name: "quart", base: z.VOLUME, prefixes: I.NONE, value: .0009463529, offset: 0 }, gallon: { name: "gallon", base: z.VOLUME, prefixes: I.NONE, value: .003785412, offset: 0 }, beerbarrel: { name: "beerbarrel", base: z.VOLUME, prefixes: I.NONE, value: .1173478, offset: 0 }, oilbarrel: { name: "oilbarrel", base: z.VOLUME, prefixes: I.NONE, value: .1589873, offset: 0 }, hogshead: { name: "hogshead", base: z.VOLUME, prefixes: I.NONE, value: .238481, offset: 0 }, fldr: { name: "fldr", base: z.VOLUME, prefixes: I.NONE, value: 36966911e-13, offset: 0 }, floz: { name: "floz", base: z.VOLUME, prefixes: I.NONE, value: 2957353e-11, offset: 0 }, gi: { name: "gi", base: z.VOLUME, prefixes: I.NONE, value: .0001182941, offset: 0 }, cp: { name: "cp", base: z.VOLUME, prefixes: I.NONE, value: .0002365882, offset: 0 }, pt: { name: "pt", base: z.VOLUME, prefixes: I.NONE, value: .0004731765, offset: 0 }, qt: { name: "qt", base: z.VOLUME, prefixes: I.NONE, value: .0009463529, offset: 0 }, gal: { name: "gal", base: z.VOLUME, prefixes: I.NONE, value: .003785412, offset: 0 }, bbl: { name: "bbl", base: z.VOLUME, prefixes: I.NONE, value: .1173478, offset: 0 }, obl: { name: "obl", base: z.VOLUME, prefixes: I.NONE, value: .1589873, offset: 0 }, g: { name: "g", base: z.MASS, prefixes: I.SHORT, value: .001, offset: 0 }, gram: { name: "gram", base: z.MASS, prefixes: I.LONG, value: .001, offset: 0 }, ton: { name: "ton", base: z.MASS, prefixes: I.SHORT, value: 907.18474, offset: 0 }, t: { name: "t", base: z.MASS, prefixes: I.SHORT, value: 1e3, offset: 0 }, tonne: { name: "tonne", base: z.MASS, prefixes: I.LONG, value: 1e3, offset: 0 }, grain: { name: "grain", base: z.MASS, prefixes: I.NONE, value: 6479891e-11, offset: 0 }, dram: { name: "dram", base: z.MASS, prefixes: I.NONE, value: .0017718451953125, offset: 0 }, ounce: { name: "ounce", base: z.MASS, prefixes: I.NONE, value: .028349523125, offset: 0 }, poundmass: { name: "poundmass", base: z.MASS, prefixes: I.NONE, value: .45359237, offset: 0 }, hundredweight: { name: "hundredweight", base: z.MASS, prefixes: I.NONE, value: 45.359237, offset: 0 }, stick: { name: "stick", base: z.MASS, prefixes: I.NONE, value: .115, offset: 0 }, stone: { name: "stone", base: z.MASS, prefixes: I.NONE, value: 6.35029318, offset: 0 }, gr: { name: "gr", base: z.MASS, prefixes: I.NONE, value: 6479891e-11, offset: 0 }, dr: { name: "dr", base: z.MASS, prefixes: I.NONE, value: .0017718451953125, offset: 0 }, oz: { name: "oz", base: z.MASS, prefixes: I.NONE, value: .028349523125, offset: 0 }, lbm: { name: "lbm", base: z.MASS, prefixes: I.NONE, value: .45359237, offset: 0 }, cwt: { name: "cwt", base: z.MASS, prefixes: I.NONE, value: 45.359237, offset: 0 }, s: { name: "s", base: z.TIME, prefixes: I.SHORT, value: 1, offset: 0 }, min: { name: "min", base: z.TIME, prefixes: I.NONE, value: 60, offset: 0 }, h: { name: "h", base: z.TIME, prefixes: I.NONE, value: 3600, offset: 0 }, second: { name: "second", base: z.TIME, prefixes: I.LONG, value: 1, offset: 0 }, sec: { name: "sec", base: z.TIME, prefixes: I.LONG, value: 1, offset: 0 }, minute: { name: "minute", base: z.TIME, prefixes: I.NONE, value: 60, offset: 0 }, hour: { name: "hour", base: z.TIME, prefixes: I.NONE, value: 3600, offset: 0 }, day: { name: "day", base: z.TIME, prefixes: I.NONE, value: 86400, offset: 0 }, week: { name: "week", base: z.TIME, prefixes: I.NONE, value: 604800, offset: 0 }, month: { name: "month", base: z.TIME, prefixes: I.NONE, value: 2629800, offset: 0 }, year: { name: "year", base: z.TIME, prefixes: I.NONE, value: 31557600, offset: 0 }, decade: { name: "decade", base: z.TIME, prefixes: I.NONE, value: 315576e3, offset: 0 }, century: { name: "century", base: z.TIME, prefixes: I.NONE, value: 315576e4, offset: 0 }, millennium: { name: "millennium", base: z.TIME, prefixes: I.NONE, value: 315576e5, offset: 0 }, hertz: { name: "Hertz", base: z.FREQUENCY, prefixes: I.LONG, value: 1, offset: 0, reciprocal: !0 }, Hz: { name: "Hz", base: z.FREQUENCY, prefixes: I.SHORT, value: 1, offset: 0, reciprocal: !0 }, rad: { name: "rad", base: z.ANGLE, prefixes: I.SHORT, value: 1, offset: 0 }, radian: { name: "radian", base: z.ANGLE, prefixes: I.LONG, value: 1, offset: 0 }, deg: { name: "deg", base: z.ANGLE, prefixes: I.SHORT, value: null, offset: 0 }, degree: { name: "degree", base: z.ANGLE, prefixes: I.LONG, value: null, offset: 0 }, grad: { name: "grad", base: z.ANGLE, prefixes: I.SHORT, value: null, offset: 0 }, gradian: { name: "gradian", base: z.ANGLE, prefixes: I.LONG, value: null, offset: 0 }, cycle: { name: "cycle", base: z.ANGLE, prefixes: I.NONE, value: null, offset: 0 }, arcsec: { name: "arcsec", base: z.ANGLE, prefixes: I.NONE, value: null, offset: 0 }, arcmin: { name: "arcmin", base: z.ANGLE, prefixes: I.NONE, value: null, offset: 0 }, A: { name: "A", base: z.CURRENT, prefixes: I.SHORT, value: 1, offset: 0 }, ampere: { name: "ampere", base: z.CURRENT, prefixes: I.LONG, value: 1, offset: 0 }, K: { name: "K", base: z.TEMPERATURE, prefixes: I.SHORT, value: 1, offset: 0 }, degC: { name: "degC", base: z.TEMPERATURE, prefixes: I.SHORT, value: 1, offset: 273.15 }, degF: { name: "degF", base: z.TEMPERATURE, prefixes: I.SHORT, value: 1 / 1.8, offset: 459.67 }, degR: { name: "degR", base: z.TEMPERATURE, prefixes: I.SHORT, value: 1 / 1.8, offset: 0 }, kelvin: { name: "kelvin", base: z.TEMPERATURE, prefixes: I.LONG, value: 1, offset: 0 }, celsius: { name: "celsius", base: z.TEMPERATURE, prefixes: I.LONG, value: 1, offset: 273.15 }, fahrenheit: { name: "fahrenheit", base: z.TEMPERATURE, prefixes: I.LONG, value: 1 / 1.8, offset: 459.67 }, rankine: { name: "rankine", base: z.TEMPERATURE, prefixes: I.LONG, value: 1 / 1.8, offset: 0 }, mol: { name: "mol", base: z.AMOUNT_OF_SUBSTANCE, prefixes: I.SHORT, value: 1, offset: 0 }, mole: { name: "mole", base: z.AMOUNT_OF_SUBSTANCE, prefixes: I.LONG, value: 1, offset: 0 }, cd: { name: "cd", base: z.LUMINOUS_INTENSITY, prefixes: I.SHORT, value: 1, offset: 0 }, candela: { name: "candela", base: z.LUMINOUS_INTENSITY, prefixes: I.LONG, value: 1, offset: 0 }, N: { name: "N", base: z.FORCE, prefixes: I.SHORT, value: 1, offset: 0 }, newton: { name: "newton", base: z.FORCE, prefixes: I.LONG, value: 1, offset: 0 }, dyn: { name: "dyn", base: z.FORCE, prefixes: I.SHORT, value: 1e-5, offset: 0 }, dyne: { name: "dyne", base: z.FORCE, prefixes: I.LONG, value: 1e-5, offset: 0 }, lbf: { name: "lbf", base: z.FORCE, prefixes: I.NONE, value: 4.4482216152605, offset: 0 }, poundforce: { name: "poundforce", base: z.FORCE, prefixes: I.NONE, value: 4.4482216152605, offset: 0 }, kip: { name: "kip", base: z.FORCE, prefixes: I.LONG, value: 4448.2216, offset: 0 }, kilogramforce: { name: "kilogramforce", base: z.FORCE, prefixes: I.NONE, value: 9.80665, offset: 0 }, J: { name: "J", base: z.ENERGY, prefixes: I.SHORT, value: 1, offset: 0 }, joule: { name: "joule", base: z.ENERGY, prefixes: I.SHORT, value: 1, offset: 0 }, erg: { name: "erg", base: z.ENERGY, prefixes: I.NONE, value: 1e-7, offset: 0 }, Wh: { name: "Wh", base: z.ENERGY, prefixes: I.SHORT, value: 3600, offset: 0 }, BTU: { name: "BTU", base: z.ENERGY, prefixes: I.BTU, value: 1055.05585262, offset: 0 }, eV: { name: "eV", base: z.ENERGY, prefixes: I.SHORT, value: 1602176565e-28, offset: 0 }, electronvolt: { name: "electronvolt", base: z.ENERGY, prefixes: I.LONG, value: 1602176565e-28, offset: 0 }, W: { name: "W", base: z.POWER, prefixes: I.SHORT, value: 1, offset: 0 }, watt: { name: "watt", base: z.POWER, prefixes: I.LONG, value: 1, offset: 0 }, hp: { name: "hp", base: z.POWER, prefixes: I.NONE, value: 745.6998715386, offset: 0 }, VAR: { name: "VAR", base: z.POWER, prefixes: I.SHORT, value: w.I, offset: 0 }, VA: { name: "VA", base: z.POWER, prefixes: I.SHORT, value: 1, offset: 0 }, Pa: { name: "Pa", base: z.PRESSURE, prefixes: I.SHORT, value: 1, offset: 0 }, psi: { name: "psi", base: z.PRESSURE, prefixes: I.NONE, value: 6894.75729276459, offset: 0 }, atm: { name: "atm", base: z.PRESSURE, prefixes: I.NONE, value: 101325, offset: 0 }, bar: { name: "bar", base: z.PRESSURE, prefixes: I.SHORTLONG, value: 1e5, offset: 0 }, torr: { name: "torr", base: z.PRESSURE, prefixes: I.NONE, value: 133.322, offset: 0 }, mmHg: { name: "mmHg", base: z.PRESSURE, prefixes: I.NONE, value: 133.322, offset: 0 }, mmH2O: { name: "mmH2O", base: z.PRESSURE, prefixes: I.NONE, value: 9.80665, offset: 0 }, cmH2O: { name: "cmH2O", base: z.PRESSURE, prefixes: I.NONE, value: 98.0665, offset: 0 }, coulomb: { name: "coulomb", base: z.ELECTRIC_CHARGE, prefixes: I.LONG, value: 1, offset: 0 }, C: { name: "C", base: z.ELECTRIC_CHARGE, prefixes: I.SHORT, value: 1, offset: 0 }, farad: { name: "farad", base: z.ELECTRIC_CAPACITANCE, prefixes: I.LONG, value: 1, offset: 0 }, F: { name: "F", base: z.ELECTRIC_CAPACITANCE, prefixes: I.SHORT, value: 1, offset: 0 }, volt: { name: "volt", base: z.ELECTRIC_POTENTIAL, prefixes: I.LONG, value: 1, offset: 0 }, V: { name: "V", base: z.ELECTRIC_POTENTIAL, prefixes: I.SHORT, value: 1, offset: 0 }, ohm: { name: "ohm", base: z.ELECTRIC_RESISTANCE, prefixes: I.SHORTLONG, value: 1, offset: 0 }, henry: { name: "henry", base: z.ELECTRIC_INDUCTANCE, prefixes: I.LONG, value: 1, offset: 0 }, H: { name: "H", base: z.ELECTRIC_INDUCTANCE, prefixes: I.SHORT, value: 1, offset: 0 }, siemens: { name: "siemens", base: z.ELECTRIC_CONDUCTANCE, prefixes: I.LONG, value: 1, offset: 0 }, S: { name: "S", base: z.ELECTRIC_CONDUCTANCE, prefixes: I.SHORT, value: 1, offset: 0 }, weber: { name: "weber", base: z.MAGNETIC_FLUX, prefixes: I.LONG, value: 1, offset: 0 }, Wb: { name: "Wb", base: z.MAGNETIC_FLUX, prefixes: I.SHORT, value: 1, offset: 0 }, tesla: { name: "tesla", base: z.MAGNETIC_FLUX_DENSITY, prefixes: I.LONG, value: 1, offset: 0 }, T: { name: "T", base: z.MAGNETIC_FLUX_DENSITY, prefixes: I.SHORT, value: 1, offset: 0 }, b: { name: "b", base: z.BIT, prefixes: I.BINARY_SHORT, value: 1, offset: 0 }, bits: { name: "bits", base: z.BIT, prefixes: I.BINARY_LONG, value: 1, offset: 0 }, B: { name: "B", base: z.BIT, prefixes: I.BINARY_SHORT, value: 8, offset: 0 }, bytes: { name: "bytes", base: z.BIT, prefixes: I.BINARY_LONG, value: 8, offset: 0 } }, L = { meters: "meter", inches: "inch", feet: "foot", yards: "yard", miles: "mile", links: "link", rods: "rod", chains: "chain", angstroms: "angstrom", lt: "l", litres: "litre", liter: "litre", liters: "litre", teaspoons: "teaspoon", tablespoons: "tablespoon", minims: "minim", fluiddrams: "fluiddram", fluidounces: "fluidounce", gills: "gill", cups: "cup", pints: "pint", quarts: "quart", gallons: "gallon", beerbarrels: "beerbarrel", oilbarrels: "oilbarrel", hogsheads: "hogshead", gtts: "gtt", grams: "gram", tons: "ton", tonnes: "tonne", grains: "grain", drams: "dram", ounces: "ounce", poundmasses: "poundmass", hundredweights: "hundredweight", sticks: "stick", lb: "lbm", lbs: "lbm", kips: "kip", kgf: "kilogramforce", acres: "acre", hectares: "hectare", sqfeet: "sqft", sqyard: "sqyd", sqmile: "sqmi", sqmiles: "sqmi", mmhg: "mmHg", mmh2o: "mmH2O", cmh2o: "cmH2O", seconds: "second", secs: "second", minutes: "minute", mins: "minute", hours: "hour", hr: "hour", hrs: "hour", days: "day", weeks: "week", months: "month", years: "year", decades: "decade", centuries: "century", millennia: "millennium", hertz: "hertz", radians: "radian", degrees: "degree", gradians: "gradian", cycles: "cycle", arcsecond: "arcsec", arcseconds: "arcsec", arcminute: "arcmin", arcminutes: "arcmin", BTUs: "BTU", watts: "watt", joules: "joule", amperes: "ampere", coulombs: "coulomb", volts: "volt", ohms: "ohm", farads: "farad", webers: "weber", teslas: "tesla", electronvolts: "electronvolt", moles: "mole", bit: "bits", byte: "bytes" }; function U(e) { if ("BigNumber" === e.number) {
        var t = Kc(N);
        P.rad.value = new N(1), P.deg.value = t.div(180), P.grad.value = t.div(200), P.cycle.value = t.times(2), P.arcsec.value = t.div(648e3), P.arcmin.value = t.div(10800);
    }
    else
        P.rad.value = 1, P.deg.value = Math.PI / 180, P.grad.value = Math.PI / 200, P.cycle.value = 2 * Math.PI, P.arcsec.value = Math.PI / 648e3, P.arcmin.value = Math.PI / 10800; P.radian.value = P.rad.value, P.degree.value = P.deg.value, P.gradian.value = P.grad.value; } U(u), a && a("config", (function (e, t) { e.number !== t.number && U(e); })); var $ = { si: { NONE: { unit: j, prefix: I.NONE[""] }, LENGTH: { unit: P.m, prefix: I.SHORT[""] }, MASS: { unit: P.g, prefix: I.SHORT.k }, TIME: { unit: P.s, prefix: I.SHORT[""] }, CURRENT: { unit: P.A, prefix: I.SHORT[""] }, TEMPERATURE: { unit: P.K, prefix: I.SHORT[""] }, LUMINOUS_INTENSITY: { unit: P.cd, prefix: I.SHORT[""] }, AMOUNT_OF_SUBSTANCE: { unit: P.mol, prefix: I.SHORT[""] }, ANGLE: { unit: P.rad, prefix: I.SHORT[""] }, BIT: { unit: P.bits, prefix: I.SHORT[""] }, FORCE: { unit: P.N, prefix: I.SHORT[""] }, ENERGY: { unit: P.J, prefix: I.SHORT[""] }, POWER: { unit: P.W, prefix: I.SHORT[""] }, PRESSURE: { unit: P.Pa, prefix: I.SHORT[""] }, ELECTRIC_CHARGE: { unit: P.C, prefix: I.SHORT[""] }, ELECTRIC_CAPACITANCE: { unit: P.F, prefix: I.SHORT[""] }, ELECTRIC_POTENTIAL: { unit: P.V, prefix: I.SHORT[""] }, ELECTRIC_RESISTANCE: { unit: P.ohm, prefix: I.SHORT[""] }, ELECTRIC_INDUCTANCE: { unit: P.H, prefix: I.SHORT[""] }, ELECTRIC_CONDUCTANCE: { unit: P.S, prefix: I.SHORT[""] }, MAGNETIC_FLUX: { unit: P.Wb, prefix: I.SHORT[""] }, MAGNETIC_FLUX_DENSITY: { unit: P.T, prefix: I.SHORT[""] }, FREQUENCY: { unit: P.Hz, prefix: I.SHORT[""] } } }; $.cgs = JSON.parse(JSON.stringify($.si)), $.cgs.LENGTH = { unit: P.m, prefix: I.SHORT.c }, $.cgs.MASS = { unit: P.g, prefix: I.SHORT[""] }, $.cgs.FORCE = { unit: P.dyn, prefix: I.SHORT[""] }, $.cgs.ENERGY = { unit: P.erg, prefix: I.NONE[""] }, $.us = JSON.parse(JSON.stringify($.si)), $.us.LENGTH = { unit: P.ft, prefix: I.NONE[""] }, $.us.MASS = { unit: P.lbm, prefix: I.NONE[""] }, $.us.TEMPERATURE = { unit: P.degF, prefix: I.NONE[""] }, $.us.FORCE = { unit: P.lbf, prefix: I.NONE[""] }, $.us.ENERGY = { unit: P.BTU, prefix: I.BTU[""] }, $.us.POWER = { unit: P.hp, prefix: I.NONE[""] }, $.us.PRESSURE = { unit: P.psi, prefix: I.NONE[""] }, $.auto = JSON.parse(JSON.stringify($.si)); var G = $.auto; for (var V in A.setUnitSystem = function (e) { if (!Ne($, e))
        throw new Error("Unit system " + e + " does not exist. Choices are: " + Object.keys($).join(", ")); G = $[e]; }, A.getUnitSystem = function () { for (var e in $)
        if (Ne($, e) && $[e] === G)
            return e; }, A.typeConverters = { BigNumber: function (e) { return new N(e + ""); }, Fraction: function (e) { return new D(e); }, Complex: function (e) { return e; }, number: function (e) { return e; } }, A.prototype._numberConverter = function () { var e = A.typeConverters[this.valueType()]; if (e)
        return e; throw new TypeError('Unsupported Unit value type "' + this.valueType() + '"'); }, A._getNumberConverter = function (e) { if (!A.typeConverters[e])
        throw new TypeError('Unsupported type "' + e + '"'); return A.typeConverters[e]; }, P)
        if (Ne(P, V)) {
            var Z = P[V];
            Z.dimensions = Z.base.dimensions;
        } for (var W in L)
        if (Ne(L, W)) {
            var J = P[L[W]], Y = {};
            for (var X in J)
                Ne(J, X) && (Y[X] = J[X]);
            Y.name = W, P[W] = Y;
        } return A.isValidAlpha = function (e) { return /^[a-zA-Z]$/.test(e); }, A.createUnit = function (e, r) { if ("object" !== t(e))
        throw new TypeError("createUnit expects first parameter to be of type 'Object'"); if (r && r.override)
        for (var n in e)
            if (Ne(e, n) && A.deleteUnit(n), e[n].aliases)
                for (var i = 0; i < e[n].aliases.length; i++)
                    A.deleteUnit(e[n].aliases[i]); var a; for (var o in e)
        Ne(e, o) && (a = A.createUnitSingle(o, e[o])); return a; }, A.createUnitSingle = function (e, r) { if (null == r && (r = {}), "string" != typeof e)
        throw new TypeError("createUnitSingle expects first parameter to be of type 'string'"); if (Ne(P, e))
        throw new Error('Cannot create unit "' + e + '": a unit with that name already exists'); !function (e) { for (var t = 0; t < e.length; t++) {
        if (i = e.charAt(t), 0 === t && !A.isValidAlpha(i))
            throw new Error('Invalid unit name (must begin with alpha character): "' + e + '"');
        if (t > 0 && !A.isValidAlpha(i) && !C(i))
            throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + e + '"');
    } }(e); var n, a, o, u = null, s = [], c = 0; if (r && "Unit" === r.type)
        u = r.clone();
    else if ("string" == typeof r)
        "" !== r && (n = r);
    else {
        if ("object" !== t(r))
            throw new TypeError('Cannot create unit "' + e + '" from "' + r.toString() + '": expecting "string" or "Unit" or "Object"');
        n = r.definition, a = r.prefixes, c = r.offset, o = r.baseName, r.aliases && (s = r.aliases.valueOf());
    } if (s)
        for (var f = 0; f < s.length; f++)
            if (Ne(P, s[f]))
                throw new Error('Cannot create alias "' + s[f] + '": a unit with that name already exists'); if (n && "string" == typeof n && !u)
        try {
            u = A.parse(n, { allowNoUnits: !0 });
        }
        catch (t) {
            throw t.message = 'Could not create unit "' + e + '" from "' + n + '": ' + t.message, t;
        }
    else
        n && "Unit" === n.type && (u = n.clone()); s = s || [], c = c || 0, a = a && a.toUpperCase && I[a.toUpperCase()] || I.NONE; var l = {}; if (u) {
        l = { name: e, value: u.value, dimensions: u.dimensions.slice(0), prefixes: a, offset: c };
        var p = !1;
        for (var m in z)
            if (Ne(z, m)) {
                for (var h = !0, d = 0; d < R.length; d++)
                    if (Math.abs((l.dimensions[d] || 0) - (z[m].dimensions[d] || 0)) > 1e-12) {
                        h = !1;
                        break;
                    }
                if (h) {
                    p = !0, l.base = z[m];
                    break;
                }
            }
        if (!p) {
            o = o || e + "_STUFF";
            var v = { dimensions: u.dimensions.slice(0) };
            v.key = o, z[o] = v, G[o] = { unit: l, prefix: I.NONE[""] }, l.base = z[o];
        }
    }
    else {
        if (o = o || e + "_STUFF", R.indexOf(o) >= 0)
            throw new Error('Cannot create new base unit "' + e + '": a base unit with that name already exists (and cannot be overridden)');
        for (var y in R.push(o), z)
            Ne(z, y) && (z[y].dimensions[R.length - 1] = 0);
        for (var g = { dimensions: [] }, x = 0; x < R.length; x++)
            g.dimensions[x] = 0;
        g.dimensions[R.length - 1] = 1, g.key = o, z[o] = g, l = { name: e, value: 1, dimensions: z[o].dimensions.slice(0), prefixes: a, offset: c, base: z[o] }, G[o] = { unit: l, prefix: I.NONE[""] };
    } A.UNITS[e] = l; for (var b = 0; b < s.length; b++) {
        var w = s[b], N = {};
        for (var D in l)
            Ne(l, D) && (N[D] = l[D]);
        N.name = w, A.UNITS[w] = N;
    } return delete _.cache, new A(null, e); }, A.deleteUnit = function (e) { delete A.UNITS[e]; }, A.PREFIXES = I, A.BASE_DIMENSIONS = R, A.BASE_UNITS = z, A.UNIT_SYSTEMS = $, A.UNITS = P, A; }), { isClass: !0 }), of = "unit", uf = Ee(of, ["typed", "Unit"], (function (e) { var t = e.typed, r = e.Unit; return t(of, { Unit: function (e) { return e.clone(); }, string: function (e) { return r.isValuelessUnit(e) ? new r(null, e) : r.parse(e, { allowNoUnits: !0 }); }, "number | BigNumber | Fraction | Complex, string | Unit": function (e, t) { return new r(e, t); }, "number | BigNumber | Fraction": function (e) { return new r(e); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), sf = "sparse", cf = Ee(sf, ["typed", "SparseMatrix"], (function (e) { var t = e.typed, r = e.SparseMatrix; return t(sf, { "": function () { return new r([]); }, string: function (e) { return new r([], e); }, "Array | Matrix": function (e) { return new r(e); }, "Array | Matrix, string": function (e, t) { return new r(e, t); } }); })), ff = "createUnit", lf = Ee(ff, ["typed", "Unit"], (function (e) { var t = e.typed, r = e.Unit; return t(ff, { "Object, Object": function (e, t) { return r.createUnit(e, t); }, Object: function (e) { return r.createUnit(e, {}); }, "string, Unit | string | Object, Object": function (e, t, n) { var i = {}; return i[e] = t, r.createUnit(i, n); }, "string, Unit | string | Object": function (e, t) { var n = {}; return n[e] = t, r.createUnit(n, {}); }, string: function (e) { var t = {}; return t[e] = {}, r.createUnit(t, {}); } }); })), pf = "acos", mf = Ee(pf, ["typed", "config", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.Complex; return t(pf, { number: function (e) { return e >= -1 && e <= 1 || r.predictable ? Math.acos(e) : new n(e, 0).acos(); }, Complex: function (e) { return e.acos(); }, BigNumber: function (e) { return e.acos(); } }); })), hf = "number";
    function df(e) { return se(e); }
    function vf(e) { return Math.atan(1 / e); }
    function yf(e) { return isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0; }
    function gf(e) { return Math.asin(1 / e); }
    function xf(e) { var t = 1 / e; return Math.log(t + Math.sqrt(t * t + 1)); }
    function bf(e) { return Math.acos(1 / e); }
    function wf(e) { var t = 1 / e, r = Math.sqrt(t * t - 1); return Math.log(r + t); }
    function Nf(e) { return ce(e); }
    function Df(e) { return fe(e); }
    function Ef(e) { return 1 / Math.tan(e); }
    function Af(e) { var t = Math.exp(2 * e); return (t + 1) / (t - 1); }
    function Sf(e) { return 1 / Math.sin(e); }
    function Cf(e) { return 0 === e ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * Z(e); }
    function Mf(e) { return 1 / Math.cos(e); }
    function Ff(e) { return 2 / (Math.exp(e) + Math.exp(-e)); }
    function Of(e) { return pe(e); }
    df.signature = hf, vf.signature = hf, yf.signature = hf, gf.signature = hf, xf.signature = hf, bf.signature = hf, wf.signature = hf, Nf.signature = hf, Df.signature = hf, Ef.signature = hf, Af.signature = hf, Sf.signature = hf, Cf.signature = hf, Mf.signature = hf, Ff.signature = hf, Of.signature = hf;
    var Tf = "acosh", Bf = Ee(Tf, ["typed", "config", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.Complex; return t(Tf, { number: function (e) { return e >= 1 || r.predictable ? df(e) : e <= -1 ? new n(Math.log(Math.sqrt(e * e - 1) - e), Math.PI) : new n(e, 0).acosh(); }, Complex: function (e) { return e.acosh(); }, BigNumber: function (e) { return e.acosh(); } }); })), _f = "acot", kf = Ee(_f, ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t(_f, { number: vf, Complex: function (e) { return e.acot(); }, BigNumber: function (e) { return new r(1).div(e).atan(); } }); })), If = "acoth", Rf = Ee(If, ["typed", "config", "Complex", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.Complex, i = e.BigNumber; return t(If, { number: function (e) { return e >= 1 || e <= -1 || r.predictable ? yf(e) : new n(e, 0).acoth(); }, Complex: function (e) { return e.acoth(); }, BigNumber: function (e) { return new i(1).div(e).atanh(); } }); })), zf = "acsc", qf = Ee(zf, ["typed", "config", "Complex", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.Complex, i = e.BigNumber; return t(zf, { number: function (e) { return e <= -1 || e >= 1 || r.predictable ? gf(e) : new n(e, 0).acsc(); }, Complex: function (e) { return e.acsc(); }, BigNumber: function (e) { return new i(1).div(e).asin(); } }); })), jf = "acsch", Pf = Ee(jf, ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t(jf, { number: xf, Complex: function (e) { return e.acsch(); }, BigNumber: function (e) { return new r(1).div(e).asinh(); } }); })), Lf = "asec", Uf = Ee(Lf, ["typed", "config", "Complex", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.Complex, i = e.BigNumber; return t(Lf, { number: function (e) { return e <= -1 || e >= 1 || r.predictable ? bf(e) : new n(e, 0).asec(); }, Complex: function (e) { return e.asec(); }, BigNumber: function (e) { return new i(1).div(e).acos(); } }); })), $f = "asech", Hf = Ee($f, ["typed", "config", "Complex", "BigNumber"], (function (e) { var t = e.typed, r = e.config, n = e.Complex, i = e.BigNumber; return t($f, { number: function (e) { if (e <= 1 && e >= -1 || r.predictable) {
            var t = 1 / e;
            if (t > 0 || r.predictable)
                return wf(e);
            var i = Math.sqrt(t * t - 1);
            return new n(Math.log(i - t), Math.PI);
        } return new n(e, 0).asech(); }, Complex: function (e) { return e.asech(); }, BigNumber: function (e) { return new i(1).div(e).acosh(); } }); })), Gf = "asin", Vf = Ee(Gf, ["typed", "config", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.Complex; return t(Gf, { number: function (e) { return e >= -1 && e <= 1 || r.predictable ? Math.asin(e) : new n(e, 0).asin(); }, Complex: function (e) { return e.asin(); }, BigNumber: function (e) { return e.asin(); } }); })), Zf = Ee("asinh", ["typed"], (function (e) { return (0, e.typed)("asinh", { number: Nf, Complex: function (e) { return e.asinh(); }, BigNumber: function (e) { return e.asinh(); } }); })), Wf = Ee("atan", ["typed"], (function (e) { return (0, e.typed)("atan", { number: function (e) { return Math.atan(e); }, Complex: function (e) { return e.atan(); }, BigNumber: function (e) { return e.atan(); } }); })), Jf = "atan2", Yf = Ee(Jf, ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.BigNumber, a = e.DenseMatrix, o = za({ typed: t, equalScalar: n }), u = Ha({ typed: t }), s = co({ typed: t, equalScalar: n }), c = la({ typed: t, equalScalar: n }), f = pa({ typed: t, DenseMatrix: a }), l = Ia({ typed: t, matrix: r }); return t(Jf, { "number, number": Math.atan2, "BigNumber, BigNumber": function (e, t) { return i.atan2(e, t); } }, l({ scalar: "number | BigNumber", SS: s, DS: u, SD: o, Ss: c, sS: f })); })), Xf = "atanh", Qf = Ee(Xf, ["typed", "config", "Complex"], (function (e) { var t = e.typed, r = e.config, n = e.Complex; return t(Xf, { number: function (e) { return e <= 1 && e >= -1 || r.predictable ? Df(e) : new n(e, 0).atanh(); }, Complex: function (e) { return e.atanh(); }, BigNumber: function (e) { return e.atanh(); } }); })), Kf = Ee("trigUnit", ["typed"], (function (e) { var t = e.typed; return { Unit: t.referToSelf((function (e) { return function (r) { if (!r.hasBase(r.constructor.BASE_UNITS.ANGLE))
            throw new TypeError("Unit in function cot is no angle"); return t.find(e, r.valueType())(r.value); }; })) }; })), el = Ee("cos", ["typed"], (function (e) { var t = e.typed, r = Kf({ typed: t }); return t("cos", { number: Math.cos, "Complex | BigNumber": function (e) { return e.cos(); } }, r); })), tl = "cosh", rl = Ee(tl, ["typed"], (function (e) { return (0, e.typed)(tl, { number: le, "Complex | BigNumber": function (e) { return e.cosh(); } }); })), nl = Ee("cot", ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t("cot", { number: Ef, Complex: function (e) { return e.cot(); }, BigNumber: function (e) { return new r(1).div(e.tan()); } }, Kf({ typed: t })); })), il = "coth", al = Ee(il, ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t(il, { number: Af, Complex: function (e) { return e.coth(); }, BigNumber: function (e) { return new r(1).div(e.tanh()); } }); })), ol = Ee("csc", ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t("csc", { number: Sf, Complex: function (e) { return e.csc(); }, BigNumber: function (e) { return new r(1).div(e.sin()); } }, Kf({ typed: t })); })), ul = "csch", sl = Ee(ul, ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t(ul, { number: Cf, Complex: function (e) { return e.csch(); }, BigNumber: function (e) { return new r(1).div(e.sinh()); } }); })), cl = Ee("sec", ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t("sec", { number: Mf, Complex: function (e) { return e.sec(); }, BigNumber: function (e) { return new r(1).div(e.cos()); } }, Kf({ typed: t })); })), fl = "sech", ll = Ee(fl, ["typed", "BigNumber"], (function (e) { var t = e.typed, r = e.BigNumber; return t(fl, { number: Ff, Complex: function (e) { return e.sech(); }, BigNumber: function (e) { return new r(1).div(e.cosh()); } }); })), pl = Ee("sin", ["typed"], (function (e) { var t = e.typed, r = Kf({ typed: t }); return t("sin", { number: Math.sin, "Complex | BigNumber": function (e) { return e.sin(); } }, r); })), ml = "sinh", hl = Ee(ml, ["typed"], (function (e) { return (0, e.typed)(ml, { number: Of, "Complex | BigNumber": function (e) { return e.sinh(); } }); })), dl = Ee("tan", ["typed"], (function (e) { var t = e.typed, r = Kf({ typed: t }); return t("tan", { number: Math.tan, "Complex | BigNumber": function (e) { return e.tan(); } }, r); })), vl = Ee("tanh", ["typed"], (function (e) { return (0, e.typed)("tanh", { number: me, "Complex | BigNumber": function (e) { return e.tanh(); } }); })), yl = "setCartesian", gl = Ee(yl, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], (function (e) { var t = e.typed, r = e.size, n = e.subset, i = e.compareNatural, a = e.Index, o = e.DenseMatrix; return t(yl, { "Array | Matrix, Array | Matrix": function (e, t) { var u = []; if (0 !== n(r(e), new a(0)) && 0 !== n(r(t), new a(0))) {
            var s = pn(Array.isArray(e) ? e : e.toArray()).sort(i), c = pn(Array.isArray(t) ? t : t.toArray()).sort(i);
            u = [];
            for (var f = 0; f < s.length; f++)
                for (var l = 0; l < c.length; l++)
                    u.push([s[f], c[l]]);
        } return Array.isArray(e) && Array.isArray(t) ? u : new o(u); } }); })), xl = "setDifference", bl = Ee(xl, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], (function (e) { var t = e.typed, r = e.size, n = e.subset, i = e.compareNatural, a = e.Index, o = e.DenseMatrix; return t(xl, { "Array | Matrix, Array | Matrix": function (e, t) { var u; if (0 === n(r(e), new a(0)))
            u = [];
        else {
            if (0 === n(r(t), new a(0)))
                return pn(e.toArray());
            var s, c = gn(pn(Array.isArray(e) ? e : e.toArray()).sort(i)), f = gn(pn(Array.isArray(t) ? t : t.toArray()).sort(i));
            u = [];
            for (var l = 0; l < c.length; l++) {
                s = !1;
                for (var p = 0; p < f.length; p++)
                    if (0 === i(c[l].value, f[p].value) && c[l].identifier === f[p].identifier) {
                        s = !0;
                        break;
                    }
                s || u.push(c[l]);
            }
        } return Array.isArray(e) && Array.isArray(t) ? xn(u) : new o(xn(u)); } }); })), wl = "setDistinct", Nl = Ee(wl, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], (function (e) { var t = e.typed, r = e.size, n = e.subset, i = e.compareNatural, a = e.Index, o = e.DenseMatrix; return t(wl, { "Array | Matrix": function (e) { var t; if (0 === n(r(e), new a(0)))
            t = [];
        else {
            var u = pn(Array.isArray(e) ? e : e.toArray()).sort(i);
            (t = []).push(u[0]);
            for (var s = 1; s < u.length; s++)
                0 !== i(u[s], u[s - 1]) && t.push(u[s]);
        } return Array.isArray(e) ? t : new o(t); } }); })), Dl = "setIntersect", El = Ee(Dl, ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"], (function (e) { var t = e.typed, r = e.size, n = e.subset, i = e.compareNatural, a = e.Index, o = e.DenseMatrix; return t(Dl, { "Array | Matrix, Array | Matrix": function (e, t) { var u; if (0 === n(r(e), new a(0)) || 0 === n(r(t), new a(0)))
            u = [];
        else {
            var s = gn(pn(Array.isArray(e) ? e : e.toArray()).sort(i)), c = gn(pn(Array.isArray(t) ? t : t.toArray()).sort(i));
            u = [];
            for (var f = 0; f < s.length; f++)
                for (var l = 0; l < c.length; l++)
                    if (0 === i(s[f].value, c[l].value) && s[f].identifier === c[l].identifier) {
                        u.push(s[f]);
                        break;
                    }
        } return Array.isArray(e) && Array.isArray(t) ? xn(u) : new o(xn(u)); } }); })), Al = "setIsSubset", Sl = Ee(Al, ["typed", "size", "subset", "compareNatural", "Index"], (function (e) { var t = e.typed, r = e.size, n = e.subset, i = e.compareNatural, a = e.Index; return t(Al, { "Array | Matrix, Array | Matrix": function (e, t) { if (0 === n(r(e), new a(0)))
            return !0; if (0 === n(r(t), new a(0)))
            return !1; for (var o, u = gn(pn(Array.isArray(e) ? e : e.toArray()).sort(i)), s = gn(pn(Array.isArray(t) ? t : t.toArray()).sort(i)), c = 0; c < u.length; c++) {
            o = !1;
            for (var f = 0; f < s.length; f++)
                if (0 === i(u[c].value, s[f].value) && u[c].identifier === s[f].identifier) {
                    o = !0;
                    break;
                }
            if (!1 === o)
                return !1;
        } return !0; } }); })), Cl = "setMultiplicity", Ml = Ee(Cl, ["typed", "size", "subset", "compareNatural", "Index"], (function (e) { var t = e.typed, r = e.size, n = e.subset, i = e.compareNatural, a = e.Index; return t(Cl, { "number | BigNumber | Fraction | Complex, Array | Matrix": function (e, t) { if (0 === n(r(t), new a(0)))
            return 0; for (var o = pn(Array.isArray(t) ? t : t.toArray()), u = 0, s = 0; s < o.length; s++)
            0 === i(o[s], e) && u++; return u; } }); })), Fl = "setPowerset", Ol = Ee(Fl, ["typed", "size", "subset", "compareNatural", "Index"], (function (e) { var t = e.typed, r = e.size, n = e.subset, i = e.compareNatural, a = e.Index; return t(Fl, { "Array | Matrix": function (e) { if (0 === n(r(e), new a(0)))
            return []; for (var t = pn(Array.isArray(e) ? e : e.toArray()).sort(i), u = [], s = 0; s.toString(2).length <= t.length;)
            u.push(o(t, s.toString(2).split("").reverse())), s++; return function (e) { for (var t = [], r = e.length - 1; r > 0; r--)
            for (var n = 0; n < r; n++)
                e[n].length > e[n + 1].length && (t = e[n], e[n] = e[n + 1], e[n + 1] = t); return e; }(u); } }); function o(e, t) { for (var r = [], n = 0; n < t.length; n++)
        "1" === t[n] && r.push(e[n]); return r; } })), Tl = "setSize", Bl = Ee(Tl, ["typed", "compareNatural"], (function (e) { var t = e.typed, r = e.compareNatural; return t(Tl, { "Array | Matrix": function (e) { return Array.isArray(e) ? pn(e).length : pn(e.toArray()).length; }, "Array | Matrix, boolean": function (e, t) { if (!1 === t || 0 === e.length)
            return Array.isArray(e) ? pn(e).length : pn(e.toArray()).length; for (var n = pn(Array.isArray(e) ? e : e.toArray()).sort(r), i = 1, a = 1; a < n.length; a++)
            0 !== r(n[a], n[a - 1]) && i++; return i; } }); })), _l = "setSymDifference", kl = Ee(_l, ["typed", "size", "concat", "subset", "setDifference", "Index"], (function (e) { var t = e.typed, r = e.size, n = e.concat, i = e.subset, a = e.setDifference, o = e.Index; return t(_l, { "Array | Matrix, Array | Matrix": function (e, t) { if (0 === i(r(e), new o(0)))
            return pn(t); if (0 === i(r(t), new o(0)))
            return pn(e); var u = pn(e), s = pn(t); return n(a(u, s), a(s, u)); } }); })), Il = "setUnion", Rl = Ee(Il, ["typed", "size", "concat", "subset", "setIntersect", "setSymDifference", "Index"], (function (e) { var t = e.typed, r = e.size, n = e.concat, i = e.subset, a = e.setIntersect, o = e.setSymDifference, u = e.Index; return t(Il, { "Array | Matrix, Array | Matrix": function (e, t) { if (0 === i(r(e), new u(0)))
            return pn(t); if (0 === i(r(t), new u(0)))
            return pn(e); var s = pn(e), c = pn(t); return n(o(s, c), a(s, c)); } }); })), zl = Ee("add", ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.addScalar, i = e.equalScalar, a = e.DenseMatrix, o = (e.SparseMatrix, Ta({ typed: t })), u = Ba({ typed: t, equalScalar: i }), s = _a({ typed: t, DenseMatrix: a }), c = Ia({ typed: t, matrix: r }); return t("add", { "any, any": n, "any, any, ...any": t.referToSelf((function (e) { return function (t, r, n) { for (var i = e(t, r), a = 0; a < n.length; a++)
            i = e(i, n[a]); return i; }; })) }, c({ elop: n, DS: o, SS: u, Ss: s })); })), ql = "hypot", jl = Ee(ql, ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"], (function (e) { var t = e.typed, r = e.abs, n = e.addScalar, i = e.divideScalar, a = e.multiplyScalar, u = e.sqrt, s = e.smaller, c = e.isPositive; return t(ql, { "... number | BigNumber": f, Array: f, Matrix: function (e) { return f(pn(e.toArray())); } }); function f(e) { for (var t = 0, f = 0, l = 0; l < e.length; l++) {
        if (o(e[l]))
            throw new TypeError("Unexpected type of argument to hypot");
        var p = r(e[l]);
        s(f, p) ? (t = a(t, a(i(f, p), i(f, p))), t = n(t, 1), f = p) : t = n(t, c(p) ? a(i(p, f), i(p, f)) : p);
    } return a(f, u(t)); } })), Pl = "norm", Ll = Ee(Pl, ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], (function (e) { var t = e.typed, r = e.abs, n = e.add, i = e.pow, a = e.conj, o = e.sqrt, u = e.multiply, s = e.equalScalar, c = e.larger, f = e.smaller, l = e.matrix, p = e.ctranspose, m = e.eigs; return t(Pl, { number: Math.abs, Complex: function (e) { return e.abs(); }, BigNumber: function (e) { return e.abs(); }, boolean: function (e) { return Math.abs(e); }, Array: function (e) { return h(l(e), 2); }, Matrix: function (e) { return h(e, 2); }, "Array, number | BigNumber | string": function (e, t) { return h(l(e), t); }, "Matrix, number | BigNumber | string": function (e, t) { return h(e, t); } }); function h(e, t) { var l = e.size(); if (1 === l.length)
        return function (e, t) { if (t === Number.POSITIVE_INFINITY || "inf" === t)
            return function (e) { var t = 0; return e.forEach((function (e) { var n = r(e); c(n, t) && (t = n); }), !0), t; }(e); if (t === Number.NEGATIVE_INFINITY || "-inf" === t)
            return function (e) { var t; return e.forEach((function (e) { var n = r(e); t && !f(n, t) || (t = n); }), !0), t || 0; }(e); if ("fro" === t)
            return h(e, 2); if ("number" == typeof t && !isNaN(t)) {
            if (!s(t, 0)) {
                var a = 0;
                return e.forEach((function (e) { a = n(i(r(e), t), a); }), !0), i(a, 1 / t);
            }
            return Number.POSITIVE_INFINITY;
        } throw new Error("Unsupported parameter value"); }(e, t); if (2 === l.length) {
        if (l[0] && l[1])
            return function (e, t) { if (1 === t)
                return function (e) { var t = [], i = 0; return e.forEach((function (e, a) { var o = a[1], u = n(t[o] || 0, r(e)); c(u, i) && (i = u), t[o] = u; }), !0), i; }(e); if (t === Number.POSITIVE_INFINITY || "inf" === t)
                return function (e) { var t = [], i = 0; return e.forEach((function (e, a) { var o = a[0], u = n(t[o] || 0, r(e)); c(u, i) && (i = u), t[o] = u; }), !0), i; }(e); if ("fro" === t)
                return function (e) { var t = 0; return e.forEach((function (e, r) { t = n(t, u(e, a(e))); })), r(o(t)); }(e); if (2 === t)
                return function (e) { var t = e.size(); if (t[0] !== t[1])
                    throw new RangeError("Invalid matrix dimensions"); var n = p(e), i = u(n, e), a = m(i).values.toArray(), s = a[a.length - 1]; return r(o(s)); }(e); throw new Error("Unsupported parameter value " + t); }(e, t);
        throw new RangeError("Invalid matrix dimensions");
    } } })), Ul = Ee("dot", ["typed", "addScalar", "multiplyScalar", "conj", "size"], (function (e) { var t = e.typed, r = e.addScalar, n = e.multiplyScalar, i = e.conj, a = e.size; return t("dot", { "Array | DenseMatrix, Array | DenseMatrix": function (e, a) { var s = o(e, a), c = l(e) ? e._data : e, f = l(e) ? e._datatype : void 0, p = l(a) ? a._data : a, m = l(a) ? a._datatype : void 0, h = 2 === u(e).length, d = 2 === u(a).length, v = r, y = n; if (f && m && f === m && "string" == typeof f) {
            var g = f;
            v = t.find(r, [g, g]), y = t.find(n, [g, g]);
        } if (!h && !d) {
            for (var x = y(i(c[0]), p[0]), b = 1; b < s; b++)
                x = v(x, y(i(c[b]), p[b]));
            return x;
        } if (!h && d) {
            for (var w = y(i(c[0]), p[0][0]), N = 1; N < s; N++)
                w = v(w, y(i(c[N]), p[N][0]));
            return w;
        } if (h && !d) {
            for (var D = y(i(c[0][0]), p[0]), E = 1; E < s; E++)
                D = v(D, y(i(c[E][0]), p[E]));
            return D;
        } if (h && d) {
            for (var A = y(i(c[0][0]), p[0][0]), S = 1; S < s; S++)
                A = v(A, y(i(c[S][0]), p[S][0]));
            return A;
        } }, "SparseMatrix, SparseMatrix": function (e, t) { o(e, t); for (var i = e._index, a = e._values, u = t._index, s = t._values, c = 0, f = r, l = n, p = 0, m = 0; p < i.length && m < u.length;) {
            var h = i[p], d = u[m];
            h < d ? p++ : h > d ? m++ : h === d && (c = f(c, l(a[p], s[m])), p++, m++);
        } return c; } }); function o(e, t) { var r, n, i = u(e), a = u(t); if (1 === i.length)
        r = i[0];
    else {
        if (2 !== i.length || 1 !== i[1])
            throw new RangeError("Expected a column vector, instead got a matrix of size (" + i.join(", ") + ")");
        r = i[0];
    } if (1 === a.length)
        n = a[0];
    else {
        if (2 !== a.length || 1 !== a[1])
            throw new RangeError("Expected a column vector, instead got a matrix of size (" + a.join(", ") + ")");
        n = a[0];
    } if (r !== n)
        throw new RangeError("Vectors must have equal length (" + r + " != " + n + ")"); if (0 === r)
        throw new RangeError("Cannot calculate the dot product of empty vectors"); return r; } function u(e) { return l(e) ? e.size() : a(e); } })), $l = Ee("trace", ["typed", "matrix", "add"], (function (e) { var t = e.typed, r = e.matrix, n = e.add; return t("trace", { Array: function (e) { return i(r(e)); }, SparseMatrix: function (e) { var t = e._values, r = e._index, i = e._ptr, a = e._size, o = a[0], u = a[1]; if (o === u) {
            var s = 0;
            if (t.length > 0)
                for (var c = 0; c < u; c++)
                    for (var f = i[c], l = i[c + 1], p = f; p < l; p++) {
                        var m = r[p];
                        if (m === c) {
                            s = n(s, t[p]);
                            break;
                        }
                        if (m > c)
                            break;
                    }
            return s;
        } throw new RangeError("Matrix must be square (size: " + Gr(a) + ")"); }, DenseMatrix: i, any: he }); function i(e) { var t = e._size, r = e._data; switch (t.length) {
        case 1:
            if (1 === t[0])
                return he(r[0]);
            throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
        case 2:
            var i = t[0];
            if (i === t[1]) {
                for (var a = 0, o = 0; o < i; o++)
                    a = n(a, r[o][o]);
                return a;
            }
            throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
        default: throw new RangeError("Matrix must be two dimensional (size: " + Gr(t) + ")");
    } } })), Hl = "index", Gl = Ee(Hl, ["typed", "Index"], (function (e) { var t = e.typed, r = e.Index; return t(Hl, { "...number | string | BigNumber | Range | Array | Matrix": function (e) { var t = e.map((function (e) { return a(e) ? e.toNumber() : Array.isArray(e) || l(e) ? e.map((function (e) { return a(e) ? e.toNumber() : e; })) : e; })), n = new r; return r.apply(n, t), n; } }); })), Vl = (r(189), new Set(["end"])), Zl = Ee("Node", ["mathWithTransform"], (function (e) { var r = e.mathWithTransform; return function () { function e() { Ce(this, e); } return Oe(e, [{ key: "type", get: function () { return "Node"; } }, { key: "isNode", get: function () { return !0; } }, { key: "evaluate", value: function (e) { return this.compile().evaluate(e); } }, { key: "compile", value: function () { var e = this._compile(r, {}), t = {}; return { evaluate: function (r) { var n = Ue(r); return function (e) { for (var t = 0, r = rs(Vl); t < r.length; t++) {
                    var n = r[t];
                    if (e.has(n))
                        throw new Error('Scope contains an illegal symbol, "' + n + '" is a reserved keyword');
                } }(n), e(n, t, null); } }; } }, { key: "_compile", value: function (e, t) { throw new Error("Method _compile must be implemented by type " + this.type); } }, { key: "forEach", value: function (e) { throw new Error("Cannot run forEach on a Node interface"); } }, { key: "map", value: function (e) { throw new Error("Cannot run map on a Node interface"); } }, { key: "_ifNode", value: function (e) { if (!R(e))
                throw new TypeError("Callback function must return a Node"); return e; } }, { key: "traverse", value: function (e) { e(this, null, null), function e(t, r) { t.forEach((function (t, n, i) { r(t, n, i), e(t, r); })); }(this, e); } }, { key: "transform", value: function (e) { return function t(r, n, i) { var a = e(r, n, i); return a !== r ? a : r.map(t); }(this, null, null); } }, { key: "filter", value: function (e) { var t = []; return this.traverse((function (r, n, i) { e(r, n, i) && t.push(r); })), t; } }, { key: "clone", value: function () { throw new Error("Cannot clone a Node interface"); } }, { key: "cloneDeep", value: function () { return this.map((function (e) { return e.cloneDeep(); })); } }, { key: "equals", value: function (e) { return !!e && this.type === e.type && ge(this, e); } }, { key: "toString", value: function (e) { var t = this._getCustomString(e); return void 0 !== t ? t : this._toString(e); } }, { key: "toJSON", value: function () { throw new Error("Cannot serialize object: toJSON not implemented by " + this.type); } }, { key: "toHTML", value: function (e) { var t = this._getCustomString(e); return void 0 !== t ? t : this.toHTML(e); } }, { key: "_toString", value: function () { throw new Error("_toString not implemented for " + this.type); } }, { key: "toTex", value: function (e) { var t = this._getCustomString(e); return void 0 !== t ? t : this._toTex(e); } }, { key: "_toTex", value: function (e) { throw new Error("_toTex not implemented for " + this.type); } }, { key: "_getCustomString", value: function (e) { if (e && "object" === t(e))
                switch (t(e.handler)) {
                    case "object":
                    case "undefined": return;
                    case "function": return e.handler(this, e);
                    default: throw new TypeError("Object or function expected as callback");
                } } }, { key: "getIdentifier", value: function () { return this.type; } }, { key: "getContent", value: function () { return this; } }]), e; }(); }), { isClass: !0, isNode: !0 });
    function Wl(e, t) { return Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) { return e.__proto__ = t, e; }, Wl(e, t); }
    function Jl(e, t) { if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wl(e, t); }
    function Yl(e, r) { if (r && ("object" === t(r) || "function" == typeof r))
        return r; if (void 0 !== r)
        throw new TypeError("Derived constructors may only return object or undefined"); return function (e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }(e); }
    function Xl(e) { return Xl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) { return e.__proto__ || Object.getPrototypeOf(e); }, Xl(e); }
    function Ql(e) { return e && e.isIndexError ? new Xr(e.index + 1, e.min + 1, void 0 !== e.max ? e.max + 1 : void 0) : e; }
    function Kl(e) { var r = e.subset; return function (e, n) { try {
        if (Array.isArray(e))
            return r(e, n);
        if (e && "function" == typeof e.subset)
            return e.subset(n);
        if ("string" == typeof e)
            return r(e, n);
        if ("object" === t(e)) {
            if (!n.isObjectProperty())
                throw new TypeError("Cannot apply a numeric index as object property");
            return Te(e, n.getObjectProperty());
        }
        throw new TypeError("Cannot apply index: unsupported type of object");
    }
    catch (e) {
        throw Ql(e);
    } }; }
    r(1299), r(2419);
    var ep = "AccessorNode", tp = Ee(ep, ["subset", "Node"], (function (e) { var t = e.subset, r = e.Node, n = Kl({ subset: t }); function i(e) { return !(S(e) || C(e) || T(e) || k(e) || z(e) || j(e) || U(e)); } var a = function (e) { Jl(o, e); var t, r, a = (t = o, r = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, n = Xl(t); if (r) {
        var i = Xl(this).constructor;
        e = Reflect.construct(n, arguments, i);
    }
    else
        e = n.apply(this, arguments); return Yl(this, e); }); function o(e, t) { var r; if (Ce(this, o), r = a.call(this), !R(e))
        throw new TypeError('Node expected for parameter "object"'); if (!I(t))
        throw new TypeError('IndexNode expected for parameter "index"'); return r.object = e, r.index = t, r; } return Oe(o, [{ key: "name", get: function () { return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""; } }, { key: "type", get: function () { return ep; } }, { key: "isAccessorNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = this.object._compile(e, t), i = this.index._compile(e, t); if (this.index.isObjectProperty()) {
                var a = this.index.getObjectProperty();
                return function (e, t, n) { return Te(r(e, t, n), a); };
            } return function (e, t, a) { var o = r(e, t, a), u = i(e, t, o); return n(o, u); }; } }, { key: "forEach", value: function (e) { e(this.object, "object", this), e(this.index, "index", this); } }, { key: "map", value: function (e) { return new o(this._ifNode(e(this.object, "object", this)), this._ifNode(e(this.index, "index", this))); } }, { key: "clone", value: function () { return new o(this.object, this.index); } }, { key: "_toString", value: function (e) { var t = this.object.toString(e); return i(this.object) && (t = "(" + t + ")"), t + this.index.toString(e); } }, { key: "toHTML", value: function (e) { var t = this.object.toHTML(e); return i(this.object) && (t = '<span class="math-parenthesis math-round-parenthesis">(</span>' + t + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t + this.index.toHTML(e); } }, { key: "_toTex", value: function (e) { var t = this.object.toTex(e); return i(this.object) && (t = "\\left(' + object + '\\right)"), t + this.index.toTex(e); } }, { key: "toJSON", value: function () { return { mathjs: ep, object: this.object, index: this.index }; } }], [{ key: "fromJSON", value: function (e) { return new o(e.object, e.index); } }]), o; }(r); return Jc(a, "name", ep), a; }), { isClass: !0, isNode: !0 });
    var rp = "ArrayNode", np = Ee(rp, ["Node"], (function (e) { var t = function (e) { Jl(i, e); var t, r, n = (t = i, r = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, n = Xl(t); if (r) {
        var i = Xl(this).constructor;
        e = Reflect.construct(n, arguments, i);
    }
    else
        e = n.apply(this, arguments); return Yl(this, e); }); function i(e) { var t; if (Ce(this, i), (t = n.call(this)).items = e || [], !Array.isArray(t.items) || !t.items.every(R))
        throw new TypeError("Array containing Nodes expected"); return t; } return Oe(i, [{ key: "type", get: function () { return rp; } }, { key: "isArrayNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = mn(this.items, (function (r) { return r._compile(e, t); })); if ("Array" !== e.config.matrix) {
                var n = e.matrix;
                return function (e, t, i) { return n(mn(r, (function (r) { return r(e, t, i); }))); };
            } return function (e, t, n) { return mn(r, (function (r) { return r(e, t, n); })); }; } }, { key: "forEach", value: function (e) { for (var t = 0; t < this.items.length; t++)
                e(this.items[t], "items[" + t + "]", this); } }, { key: "map", value: function (e) { for (var t = [], r = 0; r < this.items.length; r++)
                t[r] = this._ifNode(e(this.items[r], "items[" + r + "]", this)); return new i(t); } }, { key: "clone", value: function () { return new i(this.items.slice(0)); } }, { key: "_toString", value: function (e) { return "[" + this.items.map((function (t) { return t.toString(e); })).join(", ") + "]"; } }, { key: "toJSON", value: function () { return { mathjs: rp, items: this.items }; } }, { key: "toHTML", value: function (e) { return '<span class="math-parenthesis math-square-parenthesis">[</span>' + this.items.map((function (t) { return t.toHTML(e); })).join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'; } }, { key: "_toTex", value: function (e) { return function t(r, n) { var i = r.some(C) && !r.every(C), a = n || i, o = a ? "&" : "\\\\", u = r.map((function (r) { return r.items ? t(r.items, !n) : r.toTex(e); })).join(o); return i || !a || a && !n ? "\\begin{bmatrix}" + u + "\\end{bmatrix}" : u; }(this.items, !1); } }], [{ key: "fromJSON", value: function (e) { return new i(e.items); } }]), i; }(e.Node); return Jc(t, "name", rp), t; }), { isClass: !0, isNode: !0 });
    function ip(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    var ap = [{ AssignmentNode: {}, FunctionAssignmentNode: {} }, { ConditionalNode: { latexLeftParens: !1, latexRightParens: !1, latexParens: !1 } }, { "OperatorNode:or": { op: "or", associativity: "left", associativeWith: [] } }, { "OperatorNode:xor": { op: "xor", associativity: "left", associativeWith: [] } }, { "OperatorNode:and": { op: "and", associativity: "left", associativeWith: [] } }, { "OperatorNode:bitOr": { op: "|", associativity: "left", associativeWith: [] } }, { "OperatorNode:bitXor": { op: "^|", associativity: "left", associativeWith: [] } }, { "OperatorNode:bitAnd": { op: "&", associativity: "left", associativeWith: [] } }, { "OperatorNode:equal": { op: "==", associativity: "left", associativeWith: [] }, "OperatorNode:unequal": { op: "!=", associativity: "left", associativeWith: [] }, "OperatorNode:smaller": { op: "<", associativity: "left", associativeWith: [] }, "OperatorNode:larger": { op: ">", associativity: "left", associativeWith: [] }, "OperatorNode:smallerEq": { op: "<=", associativity: "left", associativeWith: [] }, "OperatorNode:largerEq": { op: ">=", associativity: "left", associativeWith: [] }, RelationalNode: { associativity: "left", associativeWith: [] } }, { "OperatorNode:leftShift": { op: "<<", associativity: "left", associativeWith: [] }, "OperatorNode:rightArithShift": { op: ">>", associativity: "left", associativeWith: [] }, "OperatorNode:rightLogShift": { op: ">>>", associativity: "left", associativeWith: [] } }, { "OperatorNode:to": { op: "to", associativity: "left", associativeWith: [] } }, { RangeNode: {} }, { "OperatorNode:add": { op: "+", associativity: "left", associativeWith: ["OperatorNode:add", "OperatorNode:subtract"] }, "OperatorNode:subtract": { op: "-", associativity: "left", associativeWith: [] } }, { "OperatorNode:multiply": { op: "*", associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"] }, "OperatorNode:divide": { op: "/", associativity: "left", associativeWith: [], latexLeftParens: !1, latexRightParens: !1, latexParens: !1 }, "OperatorNode:dotMultiply": { op: ".*", associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"] }, "OperatorNode:dotDivide": { op: "./", associativity: "left", associativeWith: [] }, "OperatorNode:mod": { op: "mod", associativity: "left", associativeWith: [] } }, { "OperatorNode:multiply": { associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"] } }, { "OperatorNode:unaryPlus": { op: "+", associativity: "right" }, "OperatorNode:unaryMinus": { op: "-", associativity: "right" }, "OperatorNode:bitNot": { op: "~", associativity: "right" }, "OperatorNode:not": { op: "not", associativity: "right" } }, { "OperatorNode:pow": { op: "^", associativity: "right", associativeWith: [], latexRightParens: !1 }, "OperatorNode:dotPow": { op: ".^", associativity: "right", associativeWith: [] } }, { "OperatorNode:factorial": { op: "!", associativity: "left" } }, { "OperatorNode:ctranspose": { op: "'", associativity: "left" } }];
    function op(e, t) { if (!t || "auto" !== t)
        return e; for (var r = e; j(r);)
        r = r.content; return r; }
    function up(e, t, r, n) { var i = e; "keep" !== t && (i = e.getContent()); for (var a = i.getIdentifier(), o = null, u = 0; u < ap.length; u++)
        if (a in ap[u]) {
            o = u;
            break;
        } if ("OperatorNode:multiply" === a && i.implicit && "show" !== r) {
        var s = op(i.args[0], t);
        T(s) && n && "OperatorNode:divide" === n.getIdentifier() && B(op(n.args[0], t)) || "OperatorNode:divide" === s.getIdentifier() && B(op(s.args[0], t)) && T(op(s.args[1])) || (o += 1);
    } return o; }
    function sp(e, t) { var r = e; "keep" !== t && (r = e.getContent()); var n = r.getIdentifier(), i = up(r, t); if (null === i)
        return null; var a = ap[i][n]; if (Ne(a, "associativity")) {
        if ("left" === a.associativity)
            return "left";
        if ("right" === a.associativity)
            return "right";
        throw Error("'" + n + "' has the invalid associativity '" + a.associativity + "'.");
    } return null; }
    function cp(e, t, r) { var n = "keep" !== r ? e.getContent() : e, i = "keep" !== r ? e.getContent() : t, a = n.getIdentifier(), o = i.getIdentifier(), u = up(n, r); if (null === u)
        return null; var s = ap[u][a]; if (Ne(s, "associativeWith") && s.associativeWith instanceof Array) {
        for (var c = 0; c < s.associativeWith.length; c++)
            if (s.associativeWith[c] === o)
                return !0;
        return !1;
    } return null; }
    function fp(e) { var t, r = "OperatorNode:" + e, n = function (e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return ip(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ip(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }(ap); try {
        for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            if (r in i)
                return i[r].op;
        }
    }
    catch (e) {
        n.e(e);
    }
    finally {
        n.f();
    } return null; }
    var lp = "AssignmentNode", pp = Ee(lp, ["subset", "?matrix", "Node"], (function (e) { var r = e.subset, n = e.matrix, i = e.Node, a = Kl({ subset: r }), o = function (e) { var r = e.subset, n = e.matrix; return function (e, i, a) { try {
        if (Array.isArray(e))
            return n(e).subset(i, a).valueOf();
        if (e && "function" == typeof e.subset)
            return e.subset(i, a);
        if ("string" == typeof e)
            return r(e, i, a);
        if ("object" === t(e)) {
            if (!i.isObjectProperty())
                throw TypeError("Cannot apply a numeric index as object property");
            return Be(e, i.getObjectProperty(), a), e;
        }
        throw new TypeError("Cannot apply index: unsupported type of object");
    }
    catch (e) {
        throw Ql(e);
    } }; }({ subset: r, matrix: n }); function u(e, t, r) { t || (t = "keep"); var n = up(e, t, r), i = up(e.value, t, r); return "all" === t || null !== i && i <= n; } var s = function (e) { Jl(i, e); var t, r, n = (t = i, r = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, n = Xl(t); if (r) {
        var i = Xl(this).constructor;
        e = Reflect.construct(n, arguments, i);
    }
    else
        e = n.apply(this, arguments); return Yl(this, e); }); function i(e, t, r) { var a; if (Ce(this, i), (a = n.call(this)).object = e, a.index = r ? t : null, a.value = r || t, !U(e) && !S(e))
        throw new TypeError('SymbolNode or AccessorNode expected as "object"'); if (U(e) && "end" === e.name)
        throw new Error('Cannot assign to symbol "end"'); if (a.index && !I(a.index))
        throw new TypeError('IndexNode expected as "index"'); if (!R(a.value))
        throw new TypeError('Node expected as "value"'); return a; } return Oe(i, [{ key: "name", get: function () { return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""; } }, { key: "type", get: function () { return lp; } }, { key: "isAssignmentNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = this.object._compile(e, t), n = this.index ? this.index._compile(e, t) : null, i = this.value._compile(e, t), u = this.object.name; if (this.index) {
                if (this.index.isObjectProperty()) {
                    var s = this.index.getObjectProperty();
                    return function (e, t, n) { var a = r(e, t, n), o = i(e, t, n); return Be(a, s, o), o; };
                }
                if (U(this.object))
                    return function (e, t, a) { var s = r(e, t, a), c = i(e, t, a), f = n(e, t, s); return e.set(u, o(s, f, c)), c; };
                var c = this.object.object._compile(e, t);
                if (this.object.index.isObjectProperty()) {
                    var f = this.object.index.getObjectProperty();
                    return function (e, t, r) { var a = c(e, t, r), u = Te(a, f), s = n(e, t, u), l = i(e, t, r); return Be(a, f, o(u, s, l)), l; };
                }
                var l = this.object.index._compile(e, t);
                return function (e, t, r) { var u = c(e, t, r), s = l(e, t, u), f = a(u, s), p = n(e, t, f), m = i(e, t, r); return o(u, s, o(f, p, m)), m; };
            } if (!U(this.object))
                throw new TypeError("SymbolNode expected as object"); return function (e, t, r) { var n = i(e, t, r); return e.set(u, n), n; }; } }, { key: "forEach", value: function (e) { e(this.object, "object", this), this.index && e(this.index, "index", this), e(this.value, "value", this); } }, { key: "map", value: function (e) { return new i(this._ifNode(e(this.object, "object", this)), this.index ? this._ifNode(e(this.index, "index", this)) : null, this._ifNode(e(this.value, "value", this))); } }, { key: "clone", value: function () { return new i(this.object, this.index, this.value); } }, { key: "_toString", value: function (e) { var t = this.object.toString(e), r = this.index ? this.index.toString(e) : "", n = this.value.toString(e); return u(this, e && e.parenthesis, e && e.implicit) && (n = "(" + n + ")"), t + r + " = " + n; } }, { key: "toJSON", value: function () { return { mathjs: lp, object: this.object, index: this.index, value: this.value }; } }, { key: "toHTML", value: function (e) { var t = this.object.toHTML(e), r = this.index ? this.index.toHTML(e) : "", n = this.value.toHTML(e); return u(this, e && e.parenthesis, e && e.implicit) && (n = '<span class="math-paranthesis math-round-parenthesis">(</span>' + n + '<span class="math-paranthesis math-round-parenthesis">)</span>'), t + r + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + n; } }, { key: "_toTex", value: function (e) { var t = this.object.toTex(e), r = this.index ? this.index.toTex(e) : "", n = this.value.toTex(e); return u(this, e && e.parenthesis, e && e.implicit) && (n = "\\left(".concat(n, "\\right)")), t + r + ":=" + n; } }], [{ key: "fromJSON", value: function (e) { return new i(e.object, e.index, e.value); } }]), i; }(i); return Jc(s, "name", lp), s; }), { isClass: !0, isNode: !0 });
    var mp = "BlockNode", hp = Ee(mp, ["ResultSet", "Node"], (function (e) { var t = e.ResultSet, r = function (e) { Jl(a, e); var r, n, i = (r = a, n = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, t = Xl(r); if (n) {
        var i = Xl(this).constructor;
        e = Reflect.construct(t, arguments, i);
    }
    else
        e = t.apply(this, arguments); return Yl(this, e); }); function a(e) { var t; if (Ce(this, a), t = i.call(this), !Array.isArray(e))
        throw new Error("Array expected"); return t.blocks = e.map((function (e) { var t = e && e.node, r = !e || void 0 === e.visible || e.visible; if (!R(t))
        throw new TypeError('Property "node" must be a Node'); if ("boolean" != typeof r)
        throw new TypeError('Property "visible" must be a boolean'); return { node: t, visible: r }; })), t; } return Oe(a, [{ key: "type", get: function () { return mp; } }, { key: "isBlockNode", get: function () { return !0; } }, { key: "_compile", value: function (e, r) { var n = mn(this.blocks, (function (t) { return { evaluate: t.node._compile(e, r), visible: t.visible }; })); return function (e, r, i) { var a = []; return hn(n, (function (t) { var n = t.evaluate(e, r, i); t.visible && a.push(n); })), new t(a); }; } }, { key: "forEach", value: function (e) { for (var t = 0; t < this.blocks.length; t++)
                e(this.blocks[t].node, "blocks[" + t + "].node", this); } }, { key: "map", value: function (e) { for (var t = [], r = 0; r < this.blocks.length; r++) {
                var n = this.blocks[r], i = this._ifNode(e(n.node, "blocks[" + r + "].node", this));
                t[r] = { node: i, visible: n.visible };
            } return new a(t); } }, { key: "clone", value: function () { return new a(this.blocks.map((function (e) { return { node: e.node, visible: e.visible }; }))); } }, { key: "_toString", value: function (e) { return this.blocks.map((function (t) { return t.node.toString(e) + (t.visible ? "" : ";"); })).join("\n"); } }, { key: "toJSON", value: function () { return { mathjs: mp, blocks: this.blocks }; } }, { key: "toHTML", value: function (e) { return this.blocks.map((function (t) { return t.node.toHTML(e) + (t.visible ? "" : '<span class="math-separator">;</span>'); })).join('<span class="math-separator"><br /></span>'); } }, { key: "_toTex", value: function (e) { return this.blocks.map((function (t) { return t.node.toTex(e) + (t.visible ? "" : ";"); })).join("\\;\\;\n"); } }], [{ key: "fromJSON", value: function (e) { return new a(e.blocks); } }]), a; }(e.Node); return Jc(r, "name", mp), r; }), { isClass: !0, isNode: !0 });
    var dp = "ConditionalNode", vp = Ee(dp, ["Node"], (function (e) { var t = function (e) { Jl(i, e); var t, r, n = (t = i, r = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, n = Xl(t); if (r) {
        var i = Xl(this).constructor;
        e = Reflect.construct(n, arguments, i);
    }
    else
        e = n.apply(this, arguments); return Yl(this, e); }); function i(e, t, r) { var a; if (Ce(this, i), a = n.call(this), !R(e))
        throw new TypeError("Parameter condition must be a Node"); if (!R(t))
        throw new TypeError("Parameter trueExpr must be a Node"); if (!R(r))
        throw new TypeError("Parameter falseExpr must be a Node"); return a.condition = e, a.trueExpr = t, a.falseExpr = r, a; } return Oe(i, [{ key: "type", get: function () { return dp; } }, { key: "isConditionalNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = this.condition._compile(e, t), n = this.trueExpr._compile(e, t), i = this.falseExpr._compile(e, t); return function (e, t, u) { return function (e) { if ("number" == typeof e || "boolean" == typeof e || "string" == typeof e)
                return !!e; if (e) {
                if (a(e))
                    return !e.isZero();
                if (o(e))
                    return !(!e.re && !e.im);
                if (s(e))
                    return !!e.value;
            } if (null == e)
                return !1; throw new TypeError('Unsupported type of condition "' + H(e) + '"'); }(r(e, t, u)) ? n(e, t, u) : i(e, t, u); }; } }, { key: "forEach", value: function (e) { e(this.condition, "condition", this), e(this.trueExpr, "trueExpr", this), e(this.falseExpr, "falseExpr", this); } }, { key: "map", value: function (e) { return new i(this._ifNode(e(this.condition, "condition", this)), this._ifNode(e(this.trueExpr, "trueExpr", this)), this._ifNode(e(this.falseExpr, "falseExpr", this))); } }, { key: "clone", value: function () { return new i(this.condition, this.trueExpr, this.falseExpr); } }, { key: "_toString", value: function (e) { var t = e && e.parenthesis ? e.parenthesis : "keep", r = up(this, t, e && e.implicit), n = this.condition.toString(e), i = up(this.condition, t, e && e.implicit); ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = "(" + n + ")"); var a = this.trueExpr.toString(e), o = up(this.trueExpr, t, e && e.implicit); ("all" === t || "OperatorNode" === this.trueExpr.type || null !== o && o <= r) && (a = "(" + a + ")"); var u = this.falseExpr.toString(e), s = up(this.falseExpr, t, e && e.implicit); return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== s && s <= r) && (u = "(" + u + ")"), n + " ? " + a + " : " + u; } }, { key: "toJSON", value: function () { return { mathjs: dp, condition: this.condition, trueExpr: this.trueExpr, falseExpr: this.falseExpr }; } }, { key: "toHTML", value: function (e) { var t = e && e.parenthesis ? e.parenthesis : "keep", r = up(this, t, e && e.implicit), n = this.condition.toHTML(e), i = up(this.condition, t, e && e.implicit); ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = '<span class="math-parenthesis math-round-parenthesis">(</span>' + n + '<span class="math-parenthesis math-round-parenthesis">)</span>'); var a = this.trueExpr.toHTML(e), o = up(this.trueExpr, t, e && e.implicit); ("all" === t || "OperatorNode" === this.trueExpr.type || null !== o && o <= r) && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>'); var u = this.falseExpr.toHTML(e), s = up(this.falseExpr, t, e && e.implicit); return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== s && s <= r) && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), n + '<span class="math-operator math-conditional-operator">?</span>' + a + '<span class="math-operator math-conditional-operator">:</span>' + u; } }, { key: "_toTex", value: function (e) { return "\\begin{cases} {" + this.trueExpr.toTex(e) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(e) + "}\\\\{" + this.falseExpr.toTex(e) + "}, &\\quad{\\text{otherwise}}\\end{cases}"; } }], [{ key: "fromJSON", value: function (e) { return new i(e.condition, e.trueExpr, e.falseExpr); } }]), i; }(e.Node); return Jc(t, "name", dp), t; }), { isClass: !0, isNode: !0 }), yp = r(7928), gp = { Alpha: "A", alpha: "\\alpha", Beta: "B", beta: "\\beta", Gamma: "\\Gamma", gamma: "\\gamma", Delta: "\\Delta", delta: "\\delta", Epsilon: "E", epsilon: "\\epsilon", varepsilon: "\\varepsilon", Zeta: "Z", zeta: "\\zeta", Eta: "H", eta: "\\eta", Theta: "\\Theta", theta: "\\theta", vartheta: "\\vartheta", Iota: "I", iota: "\\iota", Kappa: "K", kappa: "\\kappa", varkappa: "\\varkappa", Lambda: "\\Lambda", lambda: "\\lambda", Mu: "M", mu: "\\mu", Nu: "N", nu: "\\nu", Xi: "\\Xi", xi: "\\xi", Omicron: "O", omicron: "o", Pi: "\\Pi", pi: "\\pi", varpi: "\\varpi", Rho: "P", rho: "\\rho", varrho: "\\varrho", Sigma: "\\Sigma", sigma: "\\sigma", varsigma: "\\varsigma", Tau: "T", tau: "\\tau", Upsilon: "\\Upsilon", upsilon: "\\upsilon", Phi: "\\Phi", phi: "\\phi", varphi: "\\varphi", Chi: "X", chi: "\\chi", Psi: "\\Psi", psi: "\\psi", Omega: "\\Omega", omega: "\\omega", true: "\\mathrm{True}", false: "\\mathrm{False}", i: "i", inf: "\\infty", Inf: "\\infty", infinity: "\\infty", Infinity: "\\infty", oo: "\\infty", lim: "\\lim", undefined: "\\mathbf{?}" }, xp = { transpose: "^\\top", ctranspose: "^H", factorial: "!", pow: "^", dotPow: ".^\\wedge", unaryPlus: "+", unaryMinus: "-", bitNot: "\\~", not: "\\neg", multiply: "\\cdot", divide: "\\frac", dotMultiply: ".\\cdot", dotDivide: ".:", mod: "\\mod", add: "+", subtract: "-", to: "\\rightarrow", leftShift: "<<", rightArithShift: ">>", rightLogShift: ">>>", equal: "=", unequal: "\\neq", smaller: "<", larger: ">", smallerEq: "\\leq", largerEq: "\\geq", bitAnd: "\\&", bitXor: "\\underline{|}", bitOr: "|", and: "\\wedge", xor: "\\veebar", or: "\\vee" }, bp = { abs: { 1: "\\left|${args[0]}\\right|" }, add: { 2: "\\left(${args[0]}".concat(xp.add, "${args[1]}\\right)") }, cbrt: { 1: "\\sqrt[3]{${args[0]}}" }, ceil: { 1: "\\left\\lceil${args[0]}\\right\\rceil" }, cube: { 1: "\\left(${args[0]}\\right)^3" }, divide: { 2: "\\frac{${args[0]}}{${args[1]}}" }, dotDivide: { 2: "\\left(${args[0]}".concat(xp.dotDivide, "${args[1]}\\right)") }, dotMultiply: { 2: "\\left(${args[0]}".concat(xp.dotMultiply, "${args[1]}\\right)") }, dotPow: { 2: "\\left(${args[0]}".concat(xp.dotPow, "${args[1]}\\right)") }, exp: { 1: "\\exp\\left(${args[0]}\\right)" }, expm1: "\\left(e".concat(xp.pow, "{${args[0]}}-1\\right)"), fix: { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" }, floor: { 1: "\\left\\lfloor${args[0]}\\right\\rfloor" }, gcd: "\\gcd\\left(${args}\\right)", hypot: "\\hypot\\left(${args}\\right)", log: { 1: "\\ln\\left(${args[0]}\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}\\right)" }, log10: { 1: "\\log_{10}\\left(${args[0]}\\right)" }, log1p: { 1: "\\ln\\left(${args[0]}+1\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)" }, log2: "\\log_{2}\\left(${args[0]}\\right)", mod: { 2: "\\left(${args[0]}".concat(xp.mod, "${args[1]}\\right)") }, multiply: { 2: "\\left(${args[0]}".concat(xp.multiply, "${args[1]}\\right)") }, norm: { 1: "\\left\\|${args[0]}\\right\\|", 2: void 0 }, nthRoot: { 2: "\\sqrt[${args[1]}]{${args[0]}}" }, nthRoots: { 2: "\\{y : $y^{args[1]} = {${args[0]}}\\}" }, pow: { 2: "\\left(${args[0]}\\right)".concat(xp.pow, "{${args[1]}}") }, round: { 1: "\\left\\lfloor${args[0]}\\right\\rceil", 2: void 0 }, sign: { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" }, sqrt: { 1: "\\sqrt{${args[0]}}" }, square: { 1: "\\left(${args[0]}\\right)^2" }, subtract: { 2: "\\left(${args[0]}".concat(xp.subtract, "${args[1]}\\right)") }, unaryMinus: { 1: "".concat(xp.unaryMinus, "\\left(${args[0]}\\right)") }, unaryPlus: { 1: "".concat(xp.unaryPlus, "\\left(${args[0]}\\right)") }, bitAnd: { 2: "\\left(${args[0]}".concat(xp.bitAnd, "${args[1]}\\right)") }, bitNot: { 1: xp.bitNot + "\\left(${args[0]}\\right)" }, bitOr: { 2: "\\left(${args[0]}".concat(xp.bitOr, "${args[1]}\\right)") }, bitXor: { 2: "\\left(${args[0]}".concat(xp.bitXor, "${args[1]}\\right)") }, leftShift: { 2: "\\left(${args[0]}".concat(xp.leftShift, "${args[1]}\\right)") }, rightArithShift: { 2: "\\left(${args[0]}".concat(xp.rightArithShift, "${args[1]}\\right)") }, rightLogShift: { 2: "\\left(${args[0]}".concat(xp.rightLogShift, "${args[1]}\\right)") }, bellNumbers: { 1: "\\mathrm{B}_{${args[0]}}" }, catalan: { 1: "\\mathrm{C}_{${args[0]}}" }, stirlingS2: { 2: "\\mathrm{S}\\left(${args}\\right)" }, arg: { 1: "\\arg\\left(${args[0]}\\right)" }, conj: { 1: "\\left(${args[0]}\\right)^*" }, im: { 1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace" }, re: { 1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace" }, and: { 2: "\\left(${args[0]}".concat(xp.and, "${args[1]}\\right)") }, not: { 1: xp.not + "\\left(${args[0]}\\right)" }, or: { 2: "\\left(${args[0]}".concat(xp.or, "${args[1]}\\right)") }, xor: { 2: "\\left(${args[0]}".concat(xp.xor, "${args[1]}\\right)") }, cross: { 2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)" }, ctranspose: { 1: "\\left(${args[0]}\\right)".concat(xp.ctranspose) }, det: { 1: "\\det\\left(${args[0]}\\right)" }, dot: { 2: "\\left(${args[0]}\\cdot${args[1]}\\right)" }, expm: { 1: "\\exp\\left(${args[0]}\\right)" }, inv: { 1: "\\left(${args[0]}\\right)^{-1}" }, pinv: { 1: "\\left(${args[0]}\\right)^{+}" }, sqrtm: { 1: "{${args[0]}}".concat(xp.pow, "{\\frac{1}{2}}") }, trace: { 1: "\\mathrm{tr}\\left(${args[0]}\\right)" }, transpose: { 1: "\\left(${args[0]}\\right)".concat(xp.transpose) }, combinations: { 2: "\\binom{${args[0]}}{${args[1]}}" }, combinationsWithRep: { 2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)" }, factorial: { 1: "\\left(${args[0]}\\right)".concat(xp.factorial) }, gamma: { 1: "\\Gamma\\left(${args[0]}\\right)" }, lgamma: { 1: "\\ln\\Gamma\\left(${args[0]}\\right)" }, equal: { 2: "\\left(${args[0]}".concat(xp.equal, "${args[1]}\\right)") }, larger: { 2: "\\left(${args[0]}".concat(xp.larger, "${args[1]}\\right)") }, largerEq: { 2: "\\left(${args[0]}".concat(xp.largerEq, "${args[1]}\\right)") }, smaller: { 2: "\\left(${args[0]}".concat(xp.smaller, "${args[1]}\\right)") }, smallerEq: { 2: "\\left(${args[0]}".concat(xp.smallerEq, "${args[1]}\\right)") }, unequal: { 2: "\\left(${args[0]}".concat(xp.unequal, "${args[1]}\\right)") }, erf: { 1: "erf\\left(${args[0]}\\right)" }, max: "\\max\\left(${args}\\right)", min: "\\min\\left(${args}\\right)", variance: "\\mathrm{Var}\\left(${args}\\right)", acos: { 1: "\\cos^{-1}\\left(${args[0]}\\right)" }, acosh: { 1: "\\cosh^{-1}\\left(${args[0]}\\right)" }, acot: { 1: "\\cot^{-1}\\left(${args[0]}\\right)" }, acoth: { 1: "\\coth^{-1}\\left(${args[0]}\\right)" }, acsc: { 1: "\\csc^{-1}\\left(${args[0]}\\right)" }, acsch: { 1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)" }, asec: { 1: "\\sec^{-1}\\left(${args[0]}\\right)" }, asech: { 1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)" }, asin: { 1: "\\sin^{-1}\\left(${args[0]}\\right)" }, asinh: { 1: "\\sinh^{-1}\\left(${args[0]}\\right)" }, atan: { 1: "\\tan^{-1}\\left(${args[0]}\\right)" }, atan2: { 2: "\\mathrm{atan2}\\left(${args}\\right)" }, atanh: { 1: "\\tanh^{-1}\\left(${args[0]}\\right)" }, cos: { 1: "\\cos\\left(${args[0]}\\right)" }, cosh: { 1: "\\cosh\\left(${args[0]}\\right)" }, cot: { 1: "\\cot\\left(${args[0]}\\right)" }, coth: { 1: "\\coth\\left(${args[0]}\\right)" }, csc: { 1: "\\csc\\left(${args[0]}\\right)" }, csch: { 1: "\\mathrm{csch}\\left(${args[0]}\\right)" }, sec: { 1: "\\sec\\left(${args[0]}\\right)" }, sech: { 1: "\\mathrm{sech}\\left(${args[0]}\\right)" }, sin: { 1: "\\sin\\left(${args[0]}\\right)" }, sinh: { 1: "\\sinh\\left(${args[0]}\\right)" }, tan: { 1: "\\tan\\left(${args[0]}\\right)" }, tanh: { 1: "\\tanh\\left(${args[0]}\\right)" }, to: { 2: "\\left(${args[0]}".concat(xp.to, "${args[1]}\\right)") }, numeric: function (e, t) { return e.args[0].toTex(); }, number: { 0: "0", 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)" }, string: { 0: '\\mathtt{""}', 1: "\\mathrm{string}\\left(${args[0]}\\right)" }, bignumber: { 0: "0", 1: "\\left(${args[0]}\\right)" }, complex: { 0: "0", 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)+".concat(gp.i, "\\cdot\\left(${args[1]}\\right)\\right)") }, matrix: { 0: "\\begin{bmatrix}\\end{bmatrix}", 1: "\\left(${args[0]}\\right)", 2: "\\left(${args[0]}\\right)" }, sparse: { 0: "\\begin{bsparse}\\end{bsparse}", 1: "\\left(${args[0]}\\right)" }, unit: { 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)" } }, wp = { deg: "^\\circ" };
    function Np(e) { return yp(e, { preserveFormatting: !0 }); }
    function Dp(e, t) { return (t = void 0 !== t && t) ? Ne(wp, e) ? wp[e] : "\\mathrm{" + Np(e) + "}" : Ne(gp, e) ? gp[e] : Np(e); }
    var Ep = "ConstantNode", Ap = Ee(Ep, ["Node"], (function (e) { var t = function (e) { Jl(i, e); var t, r, n = (t = i, r = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, n = Xl(t); if (r) {
        var i = Xl(this).constructor;
        e = Reflect.construct(n, arguments, i);
    }
    else
        e = n.apply(this, arguments); return Yl(this, e); }); function i(e) { var t; return Ce(this, i), (t = n.call(this)).value = e, t; } return Oe(i, [{ key: "type", get: function () { return Ep; } }, { key: "isConstantNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = this.value; return function () { return r; }; } }, { key: "forEach", value: function (e) { } }, { key: "map", value: function (e) { return this.clone(); } }, { key: "clone", value: function () { return new i(this.value); } }, { key: "_toString", value: function (e) { return Gr(this.value, e); } }, { key: "toHTML", value: function (e) { var t = this._toString(e); switch (H(this.value)) {
                case "number":
                case "BigNumber":
                case "Fraction": return '<span class="math-number">' + t + "</span>";
                case "string": return '<span class="math-string">' + t + "</span>";
                case "boolean": return '<span class="math-boolean">' + t + "</span>";
                case "null": return '<span class="math-null-symbol">' + t + "</span>";
                case "undefined": return '<span class="math-undefined">' + t + "</span>";
                default: return '<span class="math-symbol">' + t + "</span>";
            } } }, { key: "toJSON", value: function () { return { mathjs: Ep, value: this.value }; } }, { key: "_toTex", value: function (e) { var t = this._toString(e); switch (H(this.value)) {
                case "string": return "\\mathtt{" + Np(t) + "}";
                case "number":
                case "BigNumber":
                    if (!isFinite(this.value))
                        return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
                    var r = t.toLowerCase().indexOf("e");
                    return -1 !== r ? t.substring(0, r) + "\\cdot10^{" + t.substring(r + 1) + "}" : t;
                case "Fraction": return this.value.toLatex();
                default: return t;
            } } }], [{ key: "fromJSON", value: function (e) { return new i(e.value); } }]), i; }(e.Node); return Jc(t, "name", Ep), t; }), { isClass: !0, isNode: !0 });
    function Sp(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    var Cp = "FunctionAssignmentNode", Mp = Ee(Cp, ["typed", "Node"], (function (e) { var t = e.typed; function r(e, t, r) { var n = up(e, t, r), i = up(e.expr, t, r); return "all" === t || null !== i && i <= n; } var n = function (e) { Jl(o, e); var n, i, a = (n = o, i = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, t = Xl(n); if (i) {
        var r = Xl(this).constructor;
        e = Reflect.construct(t, arguments, r);
    }
    else
        e = t.apply(this, arguments); return Yl(this, e); }); function o(e, t, r) { var n; if (Ce(this, o), n = a.call(this), "string" != typeof e)
        throw new TypeError('String expected for parameter "name"'); if (!Array.isArray(t))
        throw new TypeError('Array containing strings or objects expected for parameter "params"'); if (!R(r))
        throw new TypeError('Node expected for parameter "expr"'); if (Vl.has(e))
        throw new Error('Illegal function name, "' + e + '" is a reserved keyword'); var i, u = new Set, s = function (e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return Sp(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Sp(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }(t); try {
        for (s.s(); !(i = s.n()).done;) {
            var c = i.value, f = "string" == typeof c ? c : c.name;
            if (u.has(f))
                throw new Error('Duplicate parameter name "'.concat(f, '"'));
            u.add(f);
        }
    }
    catch (e) {
        s.e(e);
    }
    finally {
        s.f();
    } return n.name = e, n.params = t.map((function (e) { return e && e.name || e; })), n.types = t.map((function (e) { return e && e.type || "any"; })), n.expr = r, n; } return Oe(o, [{ key: "type", get: function () { return Cp; } }, { key: "isFunctionAssignmentNode", get: function () { return !0; } }, { key: "_compile", value: function (e, r) { var n = Object.create(r); hn(this.params, (function (e) { n[e] = !0; })); var i = this.expr._compile(e, n), a = this.name, o = this.params, u = yn(this.types, ","), s = a + "(" + yn(this.params, ", ") + ")"; return function (e, r, n) { var c = {}; c[u] = function () { for (var t = Object.create(r), a = 0; a < o.length; a++)
                t[o[a]] = arguments[a]; return i(e, t, n); }; var f = t(a, c); return f.syntax = s, e.set(a, f), f; }; } }, { key: "forEach", value: function (e) { e(this.expr, "expr", this); } }, { key: "map", value: function (e) { var t = this._ifNode(e(this.expr, "expr", this)); return new o(this.name, this.params.slice(0), t); } }, { key: "clone", value: function () { return new o(this.name, this.params.slice(0), this.expr); } }, { key: "_toString", value: function (e) { var t = e && e.parenthesis ? e.parenthesis : "keep", n = this.expr.toString(e); return r(this, t, e && e.implicit) && (n = "(" + n + ")"), this.name + "(" + this.params.join(", ") + ") = " + n; } }, { key: "toJSON", value: function () { var e = this.types; return { mathjs: Cp, name: this.name, params: this.params.map((function (t, r) { return { name: t, type: e[r] }; })), expr: this.expr }; } }, { key: "toHTML", value: function (e) { for (var t = e && e.parenthesis ? e.parenthesis : "keep", n = [], i = 0; i < this.params.length; i++)
                n.push('<span class="math-symbol math-parameter">' + Zr(this.params[i]) + "</span>"); var a = this.expr.toHTML(e); return r(this, t, e && e.implicit) && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + Zr(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + n.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + a; } }, { key: "_toTex", value: function (e) { var t = e && e.parenthesis ? e.parenthesis : "keep", n = this.expr.toTex(e); return r(this, t, e && e.implicit) && (n = "\\left(".concat(n, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(Dp).join(",") + "\\right):=" + n; } }], [{ key: "fromJSON", value: function (e) { return new o(e.name, e.params, e.expr); } }]), o; }(e.Node); return Jc(n, "name", Cp), n; }), { isClass: !0, isNode: !0 });
    var Fp = "IndexNode", Op = Ee(Fp, ["Node", "size"], (function (e) { var t = e.Node, r = e.size, n = function (e) { Jl(a, e); var t, n, i = (t = a, n = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, r = Xl(t); if (n) {
        var i = Xl(this).constructor;
        e = Reflect.construct(r, arguments, i);
    }
    else
        e = r.apply(this, arguments); return Yl(this, e); }); function a(e, t) { var r; if (Ce(this, a), (r = i.call(this)).dimensions = e, r.dotNotation = t || !1, !Array.isArray(e) || !e.every(R))
        throw new TypeError('Array containing Nodes expected for parameter "dimensions"'); if (r.dotNotation && !r.isObjectProperty())
        throw new Error("dotNotation only applicable for object properties"); return r; } return Oe(a, [{ key: "type", get: function () { return Fp; } }, { key: "isIndexNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var n = mn(this.dimensions, (function (n, i) { if (n.filter((function (e) { return e.isSymbolNode && "end" === e.name; })).length > 0) {
                var a = Object.create(t);
                a.end = !0;
                var o = n._compile(e, a);
                return function (e, t, n) { if (!l(n) && !f(n) && !c(n))
                    throw new TypeError('Cannot resolve "end": context must be a Matrix, Array, or string but is ' + H(n)); var a = r(n).valueOf(), u = Object.create(t); return u.end = a[i], o(e, u, n); };
            } return n._compile(e, t); })), i = Te(e, "index"); return function (e, t, r) { var a = mn(n, (function (n) { return n(e, t, r); })); return i.apply(void 0, rs(a)); }; } }, { key: "forEach", value: function (e) { for (var t = 0; t < this.dimensions.length; t++)
                e(this.dimensions[t], "dimensions[" + t + "]", this); } }, { key: "map", value: function (e) { for (var t = [], r = 0; r < this.dimensions.length; r++)
                t[r] = this._ifNode(e(this.dimensions[r], "dimensions[" + r + "]", this)); return new a(t, this.dotNotation); } }, { key: "clone", value: function () { return new a(this.dimensions.slice(0), this.dotNotation); } }, { key: "isObjectProperty", value: function () { return 1 === this.dimensions.length && T(this.dimensions[0]) && "string" == typeof this.dimensions[0].value; } }, { key: "getObjectProperty", value: function () { return this.isObjectProperty() ? this.dimensions[0].value : null; } }, { key: "_toString", value: function (e) { return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]"; } }, { key: "toJSON", value: function () { return { mathjs: Fp, dimensions: this.dimensions, dotNotation: this.dotNotation }; } }, { key: "toHTML", value: function (e) { for (var t = [], r = 0; r < this.dimensions.length; r++)
                t[r] = this.dimensions[r].toHTML(); return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + Zr(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'; } }, { key: "_toTex", value: function (e) { var t = this.dimensions.map((function (t) { return t.toTex(e); })); return this.dotNotation ? "." + this.getObjectProperty() : "_{" + t.join(",") + "}"; } }], [{ key: "fromJSON", value: function (e) { return new a(e.dimensions, e.dotNotation); } }]), a; }(t); return Jc(n, "name", Fp), n; }), { isClass: !0, isNode: !0 });
    var Tp = "ObjectNode", Bp = Ee(Tp, ["Node"], (function (e) { var r = function (e) { Jl(a, e); var r, n, i = (r = a, n = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, t = Xl(r); if (n) {
        var i = Xl(this).constructor;
        e = Reflect.construct(t, arguments, i);
    }
    else
        e = t.apply(this, arguments); return Yl(this, e); }); function a(e) { var r; if (Ce(this, a), (r = i.call(this)).properties = e || {}, e && ("object" !== t(e) || !Object.keys(e).every((function (t) { return R(e[t]); }))))
        throw new TypeError("Object containing Nodes expected"); return r; } return Oe(a, [{ key: "type", get: function () { return Tp; } }, { key: "isObjectNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = {}; for (var n in this.properties)
                if (Ne(this.properties, n)) {
                    var i = Vr(n), a = JSON.parse(i);
                    if (!_e(this.properties, a))
                        throw new Error('No access to property "' + a + '"');
                    r[a] = this.properties[n]._compile(e, t);
                } return function (e, t, n) { var i = {}; for (var a in r)
                Ne(r, a) && (i[a] = r[a](e, t, n)); return i; }; } }, { key: "forEach", value: function (e) { for (var t in this.properties)
                Ne(this.properties, t) && e(this.properties[t], "properties[" + Vr(t) + "]", this); } }, { key: "map", value: function (e) { var t = {}; for (var r in this.properties)
                Ne(this.properties, r) && (t[r] = this._ifNode(e(this.properties[r], "properties[" + Vr(r) + "]", this))); return new a(t); } }, { key: "clone", value: function () { var e = {}; for (var t in this.properties)
                Ne(this.properties, t) && (e[t] = this.properties[t]); return new a(e); } }, { key: "_toString", value: function (e) { var t = []; for (var r in this.properties)
                Ne(this.properties, r) && t.push(Vr(r) + ": " + this.properties[r].toString(e)); return "{" + t.join(", ") + "}"; } }, { key: "toJSON", value: function () { return { mathjs: Tp, properties: this.properties }; } }, { key: "toHTML", value: function (e) { var t = []; for (var r in this.properties)
                Ne(this.properties, r) && t.push('<span class="math-symbol math-property">' + Zr(r) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[r].toHTML(e)); return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>'; } }, { key: "_toTex", value: function (e) { var t = []; for (var r in this.properties)
                Ne(this.properties, r) && t.push("\\mathbf{" + r + ":} & " + this.properties[r].toTex(e) + "\\\\"); return "\\left\\{\\begin{array}{ll}" + t.join("\n") + "\\end{array}\\right\\}"; } }], [{ key: "fromJSON", value: function (e) { return new a(e.properties); } }]), a; }(e.Node); return Jc(r, "name", Tp), r; }), { isClass: !0, isNode: !0 });
    var _p = "OperatorNode", kp = Ee(_p, ["Node"], (function (e) { function t(e, r) { var n = e; if ("auto" === r)
        for (; j(n);)
            n = n.content; return !!T(n) || !!q(n) && t(n.args[0], r); } function r(e, r, n, i, a) { var o, u = up(e, r, n), s = sp(e, r); if ("all" === r || i.length > 2 && "OperatorNode:add" !== e.getIdentifier() && "OperatorNode:multiply" !== e.getIdentifier())
        return i.map((function (e) { switch (e.getContent().type) {
            case "ArrayNode":
            case "ConstantNode":
            case "SymbolNode":
            case "ParenthesisNode": return !1;
            default: return !0;
        } })); switch (i.length) {
        case 0:
            o = [];
            break;
        case 1:
            var c = up(i[0], r, n, e);
            if (a && null !== c) {
                var f, l;
                if ("keep" === r ? (f = i[0].getIdentifier(), l = e.getIdentifier()) : (f = i[0].getContent().getIdentifier(), l = e.getContent().getIdentifier()), !1 === ap[u][l].latexLeftParens) {
                    o = [!1];
                    break;
                }
                if (!1 === ap[c][f].latexParens) {
                    o = [!1];
                    break;
                }
            }
            if (null === c) {
                o = [!1];
                break;
            }
            if (c <= u) {
                o = [!0];
                break;
            }
            o = [!1];
            break;
        case 2:
            var p, m, h = up(i[0], r, n, e), d = cp(e, i[0], r);
            p = null !== h && (h === u && "right" === s && !d || h < u);
            var v, y, g, x = up(i[1], r, n, e), b = cp(e, i[1], r);
            m = null !== x && (x === u && "left" === s && !b || x < u), a && ("keep" === r ? (v = e.getIdentifier(), y = e.args[0].getIdentifier(), g = e.args[1].getIdentifier()) : (v = e.getContent().getIdentifier(), y = e.args[0].getContent().getIdentifier(), g = e.args[1].getContent().getIdentifier()), null !== h && (!1 === ap[u][v].latexLeftParens && (p = !1), !1 === ap[h][y].latexParens && (p = !1)), null !== x && (!1 === ap[u][v].latexRightParens && (m = !1), !1 === ap[x][g].latexParens && (m = !1))), o = [p, m];
            break;
        default: "OperatorNode:add" !== e.getIdentifier() && "OperatorNode:multiply" !== e.getIdentifier() || (o = i.map((function (t) { var i = up(t, r, n, e), a = cp(e, t, r), o = sp(t, r); return null !== i && (u === i && s === o && !a || i < u); })));
    } if (i.length >= 2 && "OperatorNode:multiply" === e.getIdentifier() && e.implicit && "all" !== r && "hide" === n)
        for (var w = 1; w < o.length; ++w)
            !t(i[w], r) || o[w - 1] || "keep" === r && j(i[w - 1]) || (o[w] = !0); return o; } var n = function (e) { Jl(a, e); var t, n, i = (t = a, n = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, r = Xl(t); if (n) {
        var i = Xl(this).constructor;
        e = Reflect.construct(r, arguments, i);
    }
    else
        e = r.apply(this, arguments); return Yl(this, e); }); function a(e, t, r, n, o) { var u; if (Ce(this, a), u = i.call(this), "string" != typeof e)
        throw new TypeError('string expected for parameter "op"'); if ("string" != typeof t)
        throw new TypeError('string expected for parameter "fn"'); if (!Array.isArray(r) || !r.every(R))
        throw new TypeError('Array containing Nodes expected for parameter "args"'); return u.implicit = !0 === n, u.isPercentage = !0 === o, u.op = e, u.fn = t, u.args = r || [], u; } return Oe(a, [{ key: "type", get: function () { return _p; } }, { key: "isOperatorNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { if ("string" != typeof this.fn || !ke(e, this.fn))
                throw e[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"'); var r = Te(e, this.fn), n = mn(this.args, (function (r) { return r._compile(e, t); })); if (1 === n.length) {
                var i = n[0];
                return function (e, t, n) { return r(i(e, t, n)); };
            } if (2 === n.length) {
                var a = n[0], o = n[1];
                return function (e, t, n) { return r(a(e, t, n), o(e, t, n)); };
            } return function (e, t, i) { return r.apply(null, mn(n, (function (r) { return r(e, t, i); }))); }; } }, { key: "forEach", value: function (e) { for (var t = 0; t < this.args.length; t++)
                e(this.args[t], "args[" + t + "]", this); } }, { key: "map", value: function (e) { for (var t = [], r = 0; r < this.args.length; r++)
                t[r] = this._ifNode(e(this.args[r], "args[" + r + "]", this)); return new a(this.op, this.fn, t, this.implicit, this.isPercentage); } }, { key: "clone", value: function () { return new a(this.op, this.fn, this.args.slice(0), this.implicit, this.isPercentage); } }, { key: "isUnary", value: function () { return 1 === this.args.length; } }, { key: "isBinary", value: function () { return 2 === this.args.length; } }, { key: "_toString", value: function (e) { var t = e && e.parenthesis ? e.parenthesis : "keep", n = e && e.implicit ? e.implicit : "hide", i = this.args, a = r(this, t, n, i, !1); if (1 === i.length) {
                var o = sp(this, t), u = i[0].toString(e);
                a[0] && (u = "(" + u + ")");
                var s = /[a-zA-Z]+/.test(this.op);
                return "right" === o ? this.op + (s ? " " : "") + u : "left" === o ? u + (s ? " " : "") + this.op : u + this.op;
            } if (2 === i.length) {
                var c = i[0].toString(e), f = i[1].toString(e);
                return a[0] && (c = "(" + c + ")"), a[1] && (f = "(" + f + ")"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? c + " " + f : c + " " + this.op + " " + f;
            } if (i.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
                var l = i.map((function (t, r) { return t = t.toString(e), a[r] && (t = "(" + t + ")"), t; }));
                return this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? l.join(" ") : l.join(" " + this.op + " ");
            } return this.fn + "(" + this.args.join(", ") + ")"; } }, { key: "toJSON", value: function () { return { mathjs: _p, op: this.op, fn: this.fn, args: this.args, implicit: this.implicit, isPercentage: this.isPercentage }; } }, { key: "toHTML", value: function (e) { var t = e && e.parenthesis ? e.parenthesis : "keep", n = e && e.implicit ? e.implicit : "hide", i = this.args, a = r(this, t, n, i, !1); if (1 === i.length) {
                var o = sp(this, t), u = i[0].toHTML(e);
                return a[0] && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), "right" === o ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + Zr(this.op) + "</span>" + u : u + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + Zr(this.op) + "</span>";
            } if (2 === i.length) {
                var s = i[0].toHTML(e), c = i[1].toHTML(e);
                return a[0] && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), a[1] && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? s + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + c : s + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Zr(this.op) + "</span>" + c;
            } var f = i.map((function (t, r) { return t = t.toHTML(e), a[r] && (t = '<span class="math-parenthesis math-round-parenthesis">(</span>' + t + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t; })); return i.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier()) ? this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === n ? f.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : f.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Zr(this.op) + "</span>") : '<span class="math-function">' + Zr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + f.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'; } }, { key: "_toTex", value: function (e) { var t = e && e.parenthesis ? e.parenthesis : "keep", n = e && e.implicit ? e.implicit : "hide", i = this.args, a = r(this, t, n, i, !0), o = xp[this.fn]; if (o = void 0 === o ? this.op : o, 1 === i.length) {
                var u = sp(this, t), s = i[0].toTex(e);
                return a[0] && (s = "\\left(".concat(s, "\\right)")), "right" === u ? o + s : s + o;
            } if (2 === i.length) {
                var c = i[0], f = c.toTex(e);
                a[0] && (f = "\\left(".concat(f, "\\right)"));
                var l, p = i[1].toTex(e);
                switch (a[1] && (p = "\\left(".concat(p, "\\right)")), l = "keep" === t ? c.getIdentifier() : c.getContent().getIdentifier(), this.getIdentifier()) {
                    case "OperatorNode:divide": return o + "{" + f + "}{" + p + "}";
                    case "OperatorNode:pow":
                        switch (f = "{" + f + "}", p = "{" + p + "}", l) {
                            case "ConditionalNode":
                            case "OperatorNode:divide": f = "\\left(".concat(f, "\\right)");
                        }
                        break;
                    case "OperatorNode:multiply": if (this.implicit && "hide" === n)
                        return f + "~" + p;
                }
                return f + o + p;
            } if (i.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
                var m = i.map((function (t, r) { return t = t.toTex(e), a[r] && (t = "\\left(".concat(t, "\\right)")), t; }));
                return "OperatorNode:multiply" === this.getIdentifier() && this.implicit && "hide" === n ? m.join("~") : m.join(o);
            } return "\\mathrm{" + this.fn + "}\\left(" + i.map((function (t) { return t.toTex(e); })).join(",") + "\\right)"; } }, { key: "getIdentifier", value: function () { return this.type + ":" + this.fn; } }], [{ key: "fromJSON", value: function (e) { return new a(e.op, e.fn, e.args, e.implicit, e.isPercentage); } }]), a; }(e.Node); return Jc(n, "name", _p), n; }), { isClass: !0, isNode: !0 });
    var Ip = "ParenthesisNode", Rp = Ee(Ip, ["Node"], (function (e) { var t = function (e) { Jl(i, e); var t, r, n = (t = i, r = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, n = Xl(t); if (r) {
        var i = Xl(this).constructor;
        e = Reflect.construct(n, arguments, i);
    }
    else
        e = n.apply(this, arguments); return Yl(this, e); }); function i(e) { var t; if (Ce(this, i), t = n.call(this), !R(e))
        throw new TypeError('Node expected for parameter "content"'); return t.content = e, t; } return Oe(i, [{ key: "type", get: function () { return Ip; } }, { key: "isParenthesisNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { return this.content._compile(e, t); } }, { key: "getContent", value: function () { return this.content.getContent(); } }, { key: "forEach", value: function (e) { e(this.content, "content", this); } }, { key: "map", value: function (e) { return new i(e(this.content, "content", this)); } }, { key: "clone", value: function () { return new i(this.content); } }, { key: "_toString", value: function (e) { return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "(" + this.content.toString(e) + ")" : this.content.toString(e); } }, { key: "toJSON", value: function () { return { mathjs: Ip, content: this.content }; } }, { key: "toHTML", value: function (e) { return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(e) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(e); } }, { key: "_toTex", value: function (e) { return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "\\left(".concat(this.content.toTex(e), "\\right)") : this.content.toTex(e); } }], [{ key: "fromJSON", value: function (e) { return new i(e.content); } }]), i; }(e.Node); return Jc(t, "name", Ip), t; }), { isClass: !0, isNode: !0 });
    var zp = "RangeNode", qp = Ee(zp, ["Node"], (function (e) { function t(e, t, r) { var n = up(e, t, r), i = {}, a = up(e.start, t, r); if (i.start = null !== a && a <= n || "all" === t, e.step) {
        var o = up(e.step, t, r);
        i.step = null !== o && o <= n || "all" === t;
    } var u = up(e.end, t, r); return i.end = null !== u && u <= n || "all" === t, i; } var r = function (e) { Jl(a, e); var r, n, i = (r = a, n = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, t = Xl(r); if (n) {
        var i = Xl(this).constructor;
        e = Reflect.construct(t, arguments, i);
    }
    else
        e = t.apply(this, arguments); return Yl(this, e); }); function a(e, t, r) { var n; if (Ce(this, a), n = i.call(this), !R(e))
        throw new TypeError("Node expected"); if (!R(t))
        throw new TypeError("Node expected"); if (r && !R(r))
        throw new TypeError("Node expected"); if (arguments.length > 3)
        throw new Error("Too many arguments"); return n.start = e, n.end = t, n.step = r || null, n; } return Oe(a, [{ key: "type", get: function () { return zp; } }, { key: "isRangeNode", get: function () { return !0; } }, { key: "needsEnd", value: function () { return this.filter((function (e) { return U(e) && "end" === e.name; })).length > 0; } }, { key: "_compile", value: function (e, t) { var r = e.range, n = this.start._compile(e, t), i = this.end._compile(e, t); if (this.step) {
                var a = this.step._compile(e, t);
                return function (e, t, o) { return r(n(e, t, o), i(e, t, o), a(e, t, o)); };
            } return function (e, t, a) { return r(n(e, t, a), i(e, t, a)); }; } }, { key: "forEach", value: function (e) { e(this.start, "start", this), e(this.end, "end", this), this.step && e(this.step, "step", this); } }, { key: "map", value: function (e) { return new a(this._ifNode(e(this.start, "start", this)), this._ifNode(e(this.end, "end", this)), this.step && this._ifNode(e(this.step, "step", this))); } }, { key: "clone", value: function () { return new a(this.start, this.end, this.step && this.step); } }, { key: "_toString", value: function (e) { var r, n = t(this, e && e.parenthesis ? e.parenthesis : "keep", e && e.implicit), i = this.start.toString(e); if (n.start && (i = "(" + i + ")"), r = i, this.step) {
                var a = this.step.toString(e);
                n.step && (a = "(" + a + ")"), r += ":" + a;
            } var o = this.end.toString(e); return n.end && (o = "(" + o + ")"), r + ":" + o; } }, { key: "toJSON", value: function () { return { mathjs: zp, start: this.start, end: this.end, step: this.step }; } }, { key: "toHTML", value: function (e) { var r, n = t(this, e && e.parenthesis ? e.parenthesis : "keep", e && e.implicit), i = this.start.toHTML(e); if (n.start && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), r = i, this.step) {
                var a = this.step.toHTML(e);
                n.step && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>'), r += '<span class="math-operator math-range-operator">:</span>' + a;
            } var o = this.end.toHTML(e); return n.end && (o = '<span class="math-parenthesis math-round-parenthesis">(</span>' + o + '<span class="math-parenthesis math-round-parenthesis">)</span>'), r + '<span class="math-operator math-range-operator">:</span>' + o; } }, { key: "_toTex", value: function (e) { var r = t(this, e && e.parenthesis ? e.parenthesis : "keep", e && e.implicit), n = this.start.toTex(e); if (r.start && (n = "\\left(".concat(n, "\\right)")), this.step) {
                var i = this.step.toTex(e);
                r.step && (i = "\\left(".concat(i, "\\right)")), n += ":" + i;
            } var a = this.end.toTex(e); return r.end && (a = "\\left(".concat(a, "\\right)")), n + ":" + a; } }], [{ key: "fromJSON", value: function (e) { return new a(e.start, e.end, e.step); } }]), a; }(e.Node); return Jc(r, "name", zp), r; }), { isClass: !0, isNode: !0 });
    var jp = "RelationalNode", Pp = Ee(jp, ["Node"], (function (e) { var t = e.Node, r = { equal: "==", unequal: "!=", smaller: "<", larger: ">", smallerEq: "<=", largerEq: ">=" }, n = function (e) { Jl(a, e); var t, n, i = (t = a, n = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, r = Xl(t); if (n) {
        var i = Xl(this).constructor;
        e = Reflect.construct(r, arguments, i);
    }
    else
        e = r.apply(this, arguments); return Yl(this, e); }); function a(e, t) { var r; if (Ce(this, a), r = i.call(this), !Array.isArray(e))
        throw new TypeError("Parameter conditionals must be an array"); if (!Array.isArray(t))
        throw new TypeError("Parameter params must be an array"); if (e.length !== t.length - 1)
        throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals"); return r.conditionals = e, r.params = t, r; } return Oe(a, [{ key: "type", get: function () { return jp; } }, { key: "isRelationalNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = this, n = this.params.map((function (r) { return r._compile(e, t); })); return function (t, i, a) { for (var o, u = n[0](t, i, a), s = 0; s < r.conditionals.length; s++)
                if (o = u, u = n[s + 1](t, i, a), !Te(e, r.conditionals[s])(o, u))
                    return !1; return !0; }; } }, { key: "forEach", value: function (e) { var t = this; this.params.forEach((function (r, n) { return e(r, "params[" + n + "]", t); }), this); } }, { key: "map", value: function (e) { var t = this; return new a(this.conditionals.slice(), this.params.map((function (r, n) { return t._ifNode(e(r, "params[" + n + "]", t)); }), this)); } }, { key: "clone", value: function () { return new a(this.conditionals, this.params); } }, { key: "_toString", value: function (e) { for (var t = e && e.parenthesis ? e.parenthesis : "keep", n = up(this, t, e && e.implicit), i = this.params.map((function (r, i) { var a = up(r, t, e && e.implicit); return "all" === t || null !== a && a <= n ? "(" + r.toString(e) + ")" : r.toString(e); })), a = i[0], o = 0; o < this.conditionals.length; o++)
                a += " " + r[this.conditionals[o]], a += " " + i[o + 1]; return a; } }, { key: "toJSON", value: function () { return { mathjs: jp, conditionals: this.conditionals, params: this.params }; } }, { key: "toHTML", value: function (e) { for (var t = e && e.parenthesis ? e.parenthesis : "keep", n = up(this, t, e && e.implicit), i = this.params.map((function (r, i) { var a = up(r, t, e && e.implicit); return "all" === t || null !== a && a <= n ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + r.toHTML(e) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : r.toHTML(e); })), a = i[0], o = 0; o < this.conditionals.length; o++)
                a += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Zr(r[this.conditionals[o]]) + "</span>" + i[o + 1]; return a; } }, { key: "_toTex", value: function (e) { for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = up(this, t, e && e.implicit), n = this.params.map((function (n, i) { var a = up(n, t, e && e.implicit); return "all" === t || null !== a && a <= r ? "\\left(" + n.toTex(e) + "\right)" : n.toTex(e); })), i = n[0], a = 0; a < this.conditionals.length; a++)
                i += xp[this.conditionals[a]] + n[a + 1]; return i; } }], [{ key: "fromJSON", value: function (e) { return new a(e.conditionals, e.params); } }]), a; }(t); return Jc(n, "name", jp), n; }), { isClass: !0, isNode: !0 });
    var Lp = Ee("SymbolNode", ["math", "?Unit", "Node"], (function (e) { var t = e.math, r = e.Unit; function n(e) { return !!r && r.isValuelessUnit(e); } var i = function (e) { Jl(u, e); var i, a, o = (i = u, a = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, t = Xl(i); if (a) {
        var r = Xl(this).constructor;
        e = Reflect.construct(t, arguments, r);
    }
    else
        e = t.apply(this, arguments); return Yl(this, e); }); function u(e) { var t; if (Ce(this, u), t = o.call(this), "string" != typeof e)
        throw new TypeError('String expected for parameter "name"'); return t.name = e, t; } return Oe(u, [{ key: "type", get: function () { return "SymbolNode"; } }, { key: "isSymbolNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var i = this.name; if (!0 === t[i])
                return function (e, t, r) { return t[i]; }; if (i in e)
                return function (t, r, n) { return t.has(i) ? t.get(i) : Te(e, i); }; var a = n(i); return function (e, t, n) { return e.has(i) ? e.get(i) : a ? new r(null, i) : u.onUndefinedSymbol(i); }; } }, { key: "forEach", value: function (e) { } }, { key: "map", value: function (e) { return this.clone(); } }, { key: "clone", value: function () { return new u(this.name); } }, { key: "_toString", value: function (e) { return this.name; } }, { key: "toHTML", value: function (e) { var t = Zr(this.name); return "true" === t || "false" === t ? '<span class="math-symbol math-boolean">' + t + "</span>" : "i" === t ? '<span class="math-symbol math-imaginary-symbol">' + t + "</span>" : "Infinity" === t ? '<span class="math-symbol math-infinity-symbol">' + t + "</span>" : "NaN" === t ? '<span class="math-symbol math-nan-symbol">' + t + "</span>" : "null" === t ? '<span class="math-symbol math-null-symbol">' + t + "</span>" : "undefined" === t ? '<span class="math-symbol math-undefined-symbol">' + t + "</span>" : '<span class="math-symbol">' + t + "</span>"; } }, { key: "toJSON", value: function () { return { mathjs: "SymbolNode", name: this.name }; } }, { key: "_toTex", value: function (e) { var r = !1; void 0 === t[this.name] && n(this.name) && (r = !0); var i = Dp(this.name, r); return "\\" === i[0] ? i : " " + i; } }], [{ key: "onUndefinedSymbol", value: function (e) { throw new Error("Undefined symbol " + e); } }, { key: "fromJSON", value: function (e) { return new u(e.name); } }]), u; }(e.Node); return i; }), { isClass: !0, isNode: !0 });
    function Up(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Xl(e));)
        ; return e; }
    function $p() { return $p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var n = Up(e, t); if (n) {
        var i = Object.getOwnPropertyDescriptor(n, t);
        return i.get ? i.get.call(arguments.length < 3 ? e : r) : i.value;
    } }, $p.apply(this, arguments); }
    function Hp(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        r[n - 1] = arguments[n]; return "function" == typeof e.createSubScope ? He.apply(void 0, [e.createSubScope()].concat(r)) : He.apply(void 0, [Le(), e].concat(r)); }
    var Gp = "FunctionNode", Vp = Ee(Gp, ["math", "Node", "SymbolNode"], (function (e) { var r = e.math, n = e.Node, i = e.SymbolNode, a = function (e) { return Gr(e, { truncate: 78 }); }; function o(e, r, n) { for (var i, a = "", o = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi, u = 0; null !== (i = o.exec(e));)
        if (a += e.substring(u, i.index), u = i.index, "$$" === i[0])
            a += "$", u++;
        else {
            u += i[0].length;
            var s = r[i[1]];
            if (!s)
                throw new ReferenceError("Template: Property " + i[1] + " does not exist.");
            if (void 0 === i[2])
                switch (t(s)) {
                    case "string":
                        a += s;
                        break;
                    case "object":
                        if (R(s))
                            a += s.toTex(n);
                        else {
                            if (!Array.isArray(s))
                                throw new TypeError("Template: " + i[1] + " has to be a Node, String or array of Nodes");
                            a += s.map((function (e, t) { if (R(e))
                                return e.toTex(n); throw new TypeError("Template: " + i[1] + "[" + t + "] is not a Node."); })).join(",");
                        }
                        break;
                    default: throw new TypeError("Template: " + i[1] + " has to be a Node, String or array of Nodes");
                }
            else {
                if (!R(s[i[2]] && s[i[2]]))
                    throw new TypeError("Template: " + i[1] + "[" + i[2] + "] is not a Node.");
                a += s[i[2]].toTex(n);
            }
        } return a + e.slice(u); } var u = function (e) { Jl(c, e); var n, u, s = (n = c, u = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" == typeof Proxy)
        return !0; try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
    }
    catch (e) {
        return !1;
    } }(), function () { var e, t = Xl(n); if (u) {
        var r = Xl(this).constructor;
        e = Reflect.construct(t, arguments, r);
    }
    else
        e = t.apply(this, arguments); return Yl(this, e); }); function c(e, t) { var r; if (Ce(this, c), r = s.call(this), "string" == typeof e && (e = new i(e)), !R(e))
        throw new TypeError('Node expected as parameter "fn"'); if (!Array.isArray(t) || !t.every(R))
        throw new TypeError('Array containing Nodes expected for parameter "args"'); return r.fn = e, r.args = t || [], r; } return Oe(c, [{ key: "name", get: function () { return this.fn.name || ""; } }, { key: "type", get: function () { return Gp; } }, { key: "isFunctionNode", get: function () { return !0; } }, { key: "_compile", value: function (e, t) { var r = this.args.map((function (r) { return r._compile(e, t); })); if (!U(this.fn)) {
                if (S(this.fn) && I(this.fn.index) && this.fn.index.isObjectProperty()) {
                    var n = this.fn.object._compile(e, t), i = this.fn.index.getObjectProperty(), o = this.args;
                    return function (t, a, u) { var s = n(t, a, u); if (function (e, t) { if (!ke(e, t))
                        throw new Error('No access to method "' + t + '"'); }(s, i), s[i] && s[i].rawArgs)
                        return s[i](o, e, Hp(t, a), t); var c = r.map((function (e) { return e(t, a, u); })); return s[i].apply(s, c); };
                }
                var u = this.fn.toString(), s = this.fn._compile(e, t), f = this.args;
                return function (t, n, i) { var o = s(t, n, i); if ("function" != typeof o)
                    throw new TypeError("Expression '".concat(u, "' did not evaluate to a function; value is:") + "\n  ".concat(a(o))); if (o.rawArgs)
                    return o(f, e, Hp(t, n), t); var c = r.map((function (e) { return e(t, n, i); })); return o.apply(o, c); };
            } var l = this.fn.name; if (t[l]) {
                var p = this.args;
                return function (t, n, i) { var o = n[l]; if ("function" != typeof o)
                    throw new TypeError("Argument '".concat(l, "' was not a function; received: ").concat(a(o))); if (o.rawArgs)
                    return o(p, e, Hp(t, n), t); var u = r.map((function (e) { return e(t, n, i); })); return o.apply(o, u); };
            } var m = l in e ? Te(e, l) : void 0, h = "function" == typeof m && !0 === m.rawArgs, d = function (t) { var r; if (t.has(l))
                r = t.get(l);
            else {
                if (!(l in e))
                    return c.onUndefinedFunction(l);
                r = Te(e, l);
            } if ("function" == typeof r)
                return r; throw new TypeError("'".concat(l, "' is not a function; its value is:\n  ").concat(a(r))); }; if (h) {
                var v = this.args;
                return function (t, r, n) { return d(t)(v, e, Hp(t, r), t); };
            } switch (r.length) {
                case 0: return function (e, t, r) { return d(e)(); };
                case 1: return function (e, t, n) { return d(e)((0, r[0])(e, t, n)); };
                case 2: return function (e, t, n) { var i = d(e), a = r[0], o = r[1]; return i(a(e, t, n), o(e, t, n)); };
                default: return function (e, t, n) { var i = d(e), a = r.map((function (r) { return r(e, t, n); })); return i.apply(void 0, rs(a)); };
            } } }, { key: "forEach", value: function (e) { e(this.fn, "fn", this); for (var t = 0; t < this.args.length; t++)
                e(this.args[t], "args[" + t + "]", this); } }, { key: "map", value: function (e) { for (var t = this._ifNode(e(this.fn, "fn", this)), r = [], n = 0; n < this.args.length; n++)
                r[n] = this._ifNode(e(this.args[n], "args[" + n + "]", this)); return new c(t, r); } }, { key: "clone", value: function () { return new c(this.fn, this.args.slice(0)); } }, { key: "toString", value: function (e) { var r, n = this.fn.toString(e); return e && "object" === t(e.handler) && Ne(e.handler, n) && (r = e.handler[n](this, e)), void 0 !== r ? r : $p(Xl(c.prototype), "toString", this).call(this, e); } }, { key: "_toString", value: function (e) { var t = this.args.map((function (t) { return t.toString(e); })); return (_(this.fn) ? "(" + this.fn.toString(e) + ")" : this.fn.toString(e)) + "(" + t.join(", ") + ")"; } }, { key: "toJSON", value: function () { return { mathjs: Gp, fn: this.fn, args: this.args }; } }, { key: "toHTML", value: function (e) { var t = this.args.map((function (t) { return t.toHTML(e); })); return '<span class="math-function">' + Zr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'; } }, { key: "toTex", value: function (e) { var r; return e && "object" === t(e.handler) && Ne(e.handler, this.name) && (r = e.handler[this.name](this, e)), void 0 !== r ? r : $p(Xl(c.prototype), "toTex", this).call(this, e); } }, { key: "_toTex", value: function (e) { var n, i, a = this.args.map((function (t) { return t.toTex(e); })); switch (bp[this.name] && (n = bp[this.name]), !r[this.name] || "function" != typeof r[this.name].toTex && "object" !== t(r[this.name].toTex) && "string" != typeof r[this.name].toTex || (n = r[this.name].toTex), t(n)) {
                case "function":
                    i = n(this, e);
                    break;
                case "string":
                    i = o(n, this, e);
                    break;
                case "object": switch (t(n[a.length])) {
                    case "function":
                        i = n[a.length](this, e);
                        break;
                    case "string": i = o(n[a.length], this, e);
                }
            } return void 0 !== i ? i : o("\\mathrm{${name}}\\left(${args}\\right)", this, e); } }, { key: "getIdentifier", value: function () { return this.type + ":" + this.name; } }]), c; }(n); return Jc(u, "name", Gp), Jc(u, "onUndefinedFunction", (function (e) { throw new Error("Undefined function " + e); })), Jc(u, "fromJSON", (function (e) { return new u(e.fn, e.args); })), u; }), { isClass: !0, isNode: !0 }), Zp = "parse", Wp = Ee(Zp, ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"], (function (e) { var t = e.typed, r = e.numeric, n = e.config, i = e.AccessorNode, a = e.ArrayNode, o = e.AssignmentNode, u = e.BlockNode, s = e.ConditionalNode, c = e.ConstantNode, f = e.FunctionAssignmentNode, l = e.FunctionNode, p = e.IndexNode, m = e.ObjectNode, h = e.OperatorNode, d = e.ParenthesisNode, v = e.RangeNode, y = e.RelationalNode, g = e.SymbolNode, x = t(Zp, { string: function (e) { return j(e, {}); }, "Array | Matrix": function (e) { return b(e, {}); }, "string, Object": function (e, t) { return j(e, void 0 !== t.nodes ? t.nodes : {}); }, "Array | Matrix, Object": b }); function b(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = void 0 !== t.nodes ? t.nodes : {}; return Bn(e, (function (e) { if ("string" != typeof e)
        throw new TypeError("String expected"); return j(e, r); })); } var w = { ",": !0, "(": !0, ")": !0, "[": !0, "]": !0, "{": !0, "}": !0, '"': !0, "'": !0, ";": !0, "+": !0, "-": !0, "*": !0, ".*": !0, "/": !0, "./": !0, "%": !0, "^": !0, ".^": !0, "~": !0, "!": !0, "&": !0, "|": !0, "^|": !0, "=": !0, ":": !0, "?": !0, "==": !0, "!=": !0, "<": !0, ">": !0, "<=": !0, ">=": !0, "<<": !0, ">>": !0, ">>>": !0 }, N = { mod: !0, to: !0, in: !0, and: !0, xor: !0, or: !0, not: !0 }, D = { true: !0, false: !1, null: null, undefined: void 0 }, E = ["NaN", "Infinity"]; function A(e, t) { return e.expression.substr(e.index, t); } function C(e) { return A(e, 1); } function M(e) { e.index++; } function F(e) { return e.expression.charAt(e.index - 1); } function O(e) { return e.expression.charAt(e.index + 1); } function _(e) { for (e.tokenType = 0, e.token = "", e.comment = "";;) {
        if ("#" === C(e))
            for (; "\n" !== C(e) && "" !== C(e);)
                e.comment += C(e), M(e);
        if (!x.isWhitespace(C(e), e.nestingLevel))
            break;
        M(e);
    } if ("" !== C(e)) {
        if ("\n" === C(e) && !e.nestingLevel)
            return e.tokenType = 1, e.token = C(e), void M(e);
        var t = C(e), r = A(e, 2), n = A(e, 3);
        if (3 === n.length && w[n])
            return e.tokenType = 1, e.token = n, M(e), M(e), void M(e);
        if (2 === r.length && w[r])
            return e.tokenType = 1, e.token = r, M(e), void M(e);
        if (w[t])
            return e.tokenType = 1, e.token = t, void M(e);
        if (x.isDigitDot(t)) {
            e.tokenType = 2;
            var i = A(e, 2);
            if ("0b" === i || "0o" === i || "0x" === i) {
                for (e.token += C(e), M(e), e.token += C(e), M(e); x.isHexDigit(C(e));)
                    e.token += C(e), M(e);
                if ("." === C(e))
                    for (e.token += ".", M(e); x.isHexDigit(C(e));)
                        e.token += C(e), M(e);
                else if ("i" === C(e))
                    for (e.token += "i", M(e); x.isDigit(C(e));)
                        e.token += C(e), M(e);
                return;
            }
            if ("." === C(e)) {
                if (e.token += C(e), M(e), !x.isDigit(C(e)))
                    return void (e.tokenType = 1);
            }
            else {
                for (; x.isDigit(C(e));)
                    e.token += C(e), M(e);
                x.isDecimalMark(C(e), O(e)) && (e.token += C(e), M(e));
            }
            for (; x.isDigit(C(e));)
                e.token += C(e), M(e);
            if ("E" === C(e) || "e" === C(e))
                if (x.isDigit(O(e)) || "-" === O(e) || "+" === O(e)) {
                    if (e.token += C(e), M(e), "+" !== C(e) && "-" !== C(e) || (e.token += C(e), M(e)), !x.isDigit(C(e)))
                        throw se(e, 'Digit expected, got "' + C(e) + '"');
                    for (; x.isDigit(C(e));)
                        e.token += C(e), M(e);
                    if (x.isDecimalMark(C(e), O(e)))
                        throw se(e, 'Digit expected, got "' + C(e) + '"');
                }
                else if ("." === O(e))
                    throw M(e), se(e, 'Digit expected, got "' + C(e) + '"');
        }
        else {
            if (!x.isAlpha(C(e), F(e), O(e))) {
                for (e.tokenType = 4; "" !== C(e);)
                    e.token += C(e), M(e);
                throw se(e, 'Syntax error in part "' + e.token + '"');
            }
            for (; x.isAlpha(C(e), F(e), O(e)) || x.isDigit(C(e));)
                e.token += C(e), M(e);
            Ne(N, e.token) ? e.tokenType = 1 : e.tokenType = 3;
        }
    }
    else
        e.tokenType = 1; } function I(e) { do {
        _(e);
    } while ("\n" === e.token); } function R(e) { e.nestingLevel++; } function z(e) { e.nestingLevel--; } function j(e, t) { var r = { extraNodes: {}, expression: "", comment: "", index: 0, token: "", tokenType: 0, nestingLevel: 0, conditionalLevel: null }; Yc(r, { expression: e, extraNodes: t }), _(r); var n = function (e) { var t, r, n = []; for ("" !== e.token && "\n" !== e.token && ";" !== e.token && (t = P(e), e.comment && (t.comment = e.comment)); "\n" === e.token || ";" === e.token;)
        0 === n.length && t && (r = ";" !== e.token, n.push({ node: t, visible: r })), _(e), "\n" !== e.token && ";" !== e.token && "" !== e.token && (t = P(e), e.comment && (t.comment = e.comment), r = ";" !== e.token, n.push({ node: t, visible: r })); return n.length > 0 ? new u(n) : (t || (t = new c(void 0), e.comment && (t.comment = e.comment)), t); }(r); if ("" !== r.token)
        throw 1 === r.tokenType ? ce(r, "Unexpected operator " + r.token) : se(r, 'Unexpected part "' + r.token + '"'); return n; } function P(e) { var t, r, n, i, a = function (e) { for (var t = function (e) { for (var t = L(e); "or" === e.token;)
        I(e), t = new h("or", "or", [t, L(e)]); return t; }(e); "?" === e.token;) {
        var r = e.conditionalLevel;
        e.conditionalLevel = e.nestingLevel, I(e);
        var n = t, i = P(e);
        if (":" !== e.token)
            throw se(e, "False part of conditional expression expected");
        e.conditionalLevel = null, I(e);
        var a = P(e);
        t = new s(n, i, a), e.conditionalLevel = r;
    } return t; }(e); if ("=" === e.token) {
        if (U(a))
            return t = a.name, I(e), n = P(e), new o(new g(t), n);
        if (S(a))
            return I(e), n = P(e), new o(a.object, a.index, n);
        if (k(a) && U(a.fn) && (i = !0, r = [], t = a.name, a.args.forEach((function (e, t) { U(e) ? r[t] = e.name : i = !1; })), i))
            return I(e), n = P(e), new f(t, r, n);
        throw se(e, "Invalid left hand side of assignment operator =");
    } return a; } function L(e) { for (var t = $(e); "xor" === e.token;)
        I(e), t = new h("xor", "xor", [t, $(e)]); return t; } function $(e) { for (var t = H(e); "and" === e.token;)
        I(e), t = new h("and", "and", [t, H(e)]); return t; } function H(e) { for (var t = G(e); "|" === e.token;)
        I(e), t = new h("|", "bitOr", [t, G(e)]); return t; } function G(e) { for (var t = V(e); "^|" === e.token;)
        I(e), t = new h("^|", "bitXor", [t, V(e)]); return t; } function V(e) { for (var t = Z(e); "&" === e.token;)
        I(e), t = new h("&", "bitAnd", [t, Z(e)]); return t; } function Z(e) { for (var t = [W(e)], r = [], n = { "==": "equal", "!=": "unequal", "<": "smaller", ">": "larger", "<=": "smallerEq", ">=": "largerEq" }; Ne(n, e.token);) {
        var i = { name: e.token, fn: n[e.token] };
        r.push(i), I(e), t.push(W(e));
    } return 1 === t.length ? t[0] : 2 === t.length ? new h(r[0].name, r[0].fn, t) : new y(r.map((function (e) { return e.fn; })), t); } function W(e) { var t, r, n, i; t = J(e); for (var a = { "<<": "leftShift", ">>": "rightArithShift", ">>>": "rightLogShift" }; Ne(a, e.token);)
        n = a[r = e.token], I(e), i = [t, J(e)], t = new h(r, n, i); return t; } function J(e) { var t, r, n, i; t = Y(e); for (var a = { to: "to", in: "to" }; Ne(a, e.token);)
        n = a[r = e.token], I(e), "in" === r && "" === e.token ? t = new h("*", "multiply", [t, new g("in")], !0) : (i = [t, Y(e)], t = new h(r, n, i)); return t; } function Y(e) { var t, r = []; if (t = ":" === e.token ? new c(1) : X(e), ":" === e.token && e.conditionalLevel !== e.nestingLevel) {
        for (r.push(t); ":" === e.token && r.length < 3;)
            I(e), ")" === e.token || "]" === e.token || "," === e.token || "" === e.token ? r.push(new g("end")) : r.push(X(e));
        t = 3 === r.length ? new v(r[0], r[2], r[1]) : new v(r[0], r[1]);
    } return t; } function X(e) { var t, r, n, i; t = Q(e); for (var a = { "+": "add", "-": "subtract" }; Ne(a, e.token);) {
        n = a[r = e.token], I(e);
        var o = Q(e);
        i = o.isPercentage ? [t, new h("*", "multiply", [t, o])] : [t, o], t = new h(r, n, i);
    } return t; } function Q(e) { var t, r, n, i; r = t = K(e); for (var a = { "*": "multiply", ".*": "dotMultiply", "/": "divide", "./": "dotDivide" }; Ne(a, e.token);)
        i = a[n = e.token], I(e), r = K(e), t = new h(n, i, [t, r]); return t; } function K(e) { var t, r; for (r = t = ee(e); 3 === e.tokenType || "in" === e.token && T(t) || !(2 !== e.tokenType || T(r) || q(r) && "!" !== r.op) || "(" === e.token;)
        r = ee(e), t = new h("*", "multiply", [t, r], !0); return t; } function ee(e) { for (var t = te(e), r = t, n = []; "/" === e.token && B(r);) {
        if (n.push(Yc({}, e)), I(e), 2 !== e.tokenType) {
            Yc(e, n.pop());
            break;
        }
        if (n.push(Yc({}, e)), I(e), 3 !== e.tokenType && "(" !== e.token) {
            n.pop(), Yc(e, n.pop());
            break;
        }
        Yc(e, n.pop()), n.pop(), r = te(e), t = new h("/", "divide", [t, r]);
    } return t; } function te(e) { var t, r, n, i; t = re(e); for (var a = { "%": "mod", mod: "mod" }; Ne(a, e.token);)
        n = a[r = e.token], I(e), "%" === r && 1 === e.tokenType && "(" !== e.token ? t = new h("/", "divide", [t, new c(100)], !1, !0) : (i = [t, re(e)], t = new h(r, n, i)); return t; } function re(e) { var t, i, o, u = { "-": "unaryMinus", "+": "unaryPlus", "~": "bitNot", not: "not" }; return Ne(u, e.token) ? (o = u[e.token], t = e.token, I(e), i = [re(e)], new h(t, o, i)) : function (e) { var t, i, o, u; return t = function (e) { var t, i, o; t = function (e) { var t = []; if (3 === e.tokenType && Ne(e.extraNodes, e.token)) {
        var i = e.extraNodes[e.token];
        if (_(e), "(" === e.token) {
            if (t = [], R(e), _(e), ")" !== e.token)
                for (t.push(P(e)); "," === e.token;)
                    _(e), t.push(P(e));
            if (")" !== e.token)
                throw se(e, "Parenthesis ) expected");
            z(e), _(e);
        }
        return new i(t);
    } return function (e) { var t; return 3 === e.tokenType || 1 === e.tokenType && e.token in N ? (t = e.token, _(e), ne(e, Ne(D, t) ? new c(D[t]) : -1 !== E.indexOf(t) ? new c(r(t, "number")) : new g(t))) : function (e) { var t; return '"' === e.token ? (t = ie(e), ne(e, new c(t))) : function (e) { var t; return "'" === e.token ? (t = ae(e), ne(e, new c(t))) : function (e) { var t, i, o, u; if ("[" === e.token) {
        if (R(e), _(e), "]" !== e.token) {
            var s = oe(e);
            if (";" === e.token) {
                for (o = 1, i = [s]; ";" === e.token;)
                    _(e), i[o] = oe(e), o++;
                if ("]" !== e.token)
                    throw se(e, "End of matrix ] expected");
                z(e), _(e), u = i[0].items.length;
                for (var f = 1; f < o; f++)
                    if (i[f].items.length !== u)
                        throw ce(e, "Column dimensions mismatch (" + i[f].items.length + " !== " + u + ")");
                t = new a(i);
            }
            else {
                if ("]" !== e.token)
                    throw se(e, "End of matrix ] expected");
                z(e), _(e), t = s;
            }
        }
        else
            z(e), _(e), t = new a([]);
        return ne(e, t);
    } return function (e) { if ("{" === e.token) {
        var t;
        R(e);
        var i = {};
        do {
            if (_(e), "}" !== e.token) {
                if ('"' === e.token)
                    t = ie(e);
                else if ("'" === e.token)
                    t = ae(e);
                else {
                    if (!(3 === e.tokenType || 1 === e.tokenType && e.token in N))
                        throw se(e, "Symbol or string expected as object key");
                    t = e.token, _(e);
                }
                if (":" !== e.token)
                    throw se(e, "Colon : expected after object key");
                _(e), i[t] = P(e);
            }
        } while ("," === e.token);
        if ("}" !== e.token)
            throw se(e, "Comma , or bracket } expected after object value");
        z(e), _(e);
        var a = new m(i);
        return ne(e, a);
    } return function (e) { var t; return 2 === e.tokenType ? (t = e.token, _(e), new c(r(t, n.number))) : function (e) { var t; if ("(" === e.token) {
        if (R(e), _(e), t = P(e), ")" !== e.token)
            throw se(e, "Parenthesis ) expected");
        return z(e), _(e), ne(e, t = new d(t));
    } return function (e) { throw "" === e.token ? se(e, "Unexpected end of expression") : se(e, "Value expected"); }(e); }(e); }(e); }(e); }(e); }(e); }(e); }(e); }(e); for (var u = { "!": "factorial", "'": "ctranspose" }; Ne(u, e.token);)
        o = u[i = e.token], _(e), t = ne(e, t = new h(i, o, [t])); return t; }(e), ("^" === e.token || ".^" === e.token) && (o = "^" === (i = e.token) ? "pow" : "dotPow", I(e), u = [t, re(e)], t = new h(i, o, u)), t; }(e); } function ne(e, t, r) { for (var n; !("(" !== e.token && "[" !== e.token && "." !== e.token || r && -1 === r.indexOf(e.token));)
        if (n = [], "(" === e.token) {
            if (!U(t) && !S(t))
                return t;
            if (R(e), _(e), ")" !== e.token)
                for (n.push(P(e)); "," === e.token;)
                    _(e), n.push(P(e));
            if (")" !== e.token)
                throw se(e, "Parenthesis ) expected");
            z(e), _(e), t = new l(t, n);
        }
        else if ("[" === e.token) {
            if (R(e), _(e), "]" !== e.token)
                for (n.push(P(e)); "," === e.token;)
                    _(e), n.push(P(e));
            if ("]" !== e.token)
                throw se(e, "Parenthesis ] expected");
            z(e), _(e), t = new i(t, new p(n));
        }
        else {
            if (_(e), 3 !== e.tokenType)
                throw se(e, "Property name expected after dot");
            n.push(new c(e.token)), _(e), t = new i(t, new p(n, !0));
        } return t; } function ie(e) { for (var t = ""; "" !== C(e) && '"' !== C(e);)
        "\\" === C(e) && (t += C(e), M(e)), t += C(e), M(e); if (_(e), '"' !== e.token)
        throw se(e, 'End of string " expected'); return _(e), JSON.parse('"' + t + '"'); } function ae(e) { for (var t = ""; "" !== C(e) && "'" !== C(e);)
        "\\" === C(e) && (t += C(e), M(e)), t += C(e), M(e); if (_(e), "'" !== e.token)
        throw se(e, "End of string ' expected"); return _(e), JSON.parse('"' + t + '"'); } function oe(e) { for (var t = [P(e)], r = 1; "," === e.token;)
        _(e), t[r] = P(e), r++; return new a(t); } function ue(e) { return e.index - e.token.length + 1; } function se(e, t) { var r = ue(e), n = new SyntaxError(t + " (char " + r + ")"); return n.char = r, n; } function ce(e, t) { var r = ue(e), n = new SyntaxError(t + " (char " + r + ")"); return n.char = r, n; } return x.isAlpha = function (e, t, r) { return x.isValidLatinOrGreek(e) || x.isValidMathSymbol(e, r) || x.isValidMathSymbol(t, e); }, x.isValidLatinOrGreek = function (e) { return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(e); }, x.isValidMathSymbol = function (e, t) { return /^[\uD835]$/.test(e) && /^[\uDC00-\uDFFF]$/.test(t) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(t); }, x.isWhitespace = function (e, t) { return " " === e || "\t" === e || "\n" === e && t > 0; }, x.isDecimalMark = function (e, t) { return "." === e && "/" !== t && "*" !== t && "^" !== t; }, x.isDigitDot = function (e) { return e >= "0" && e <= "9" || "." === e; }, x.isDigit = function (e) { return e >= "0" && e <= "9"; }, x.isHexDigit = function (e) { return e >= "0" && e <= "9" || e >= "a" && e <= "f" || e >= "A" && e <= "F"; }, t.addConversion({ from: "string", to: "Node", convert: x }), x; })), Jp = "compile", Yp = Ee(Jp, ["typed", "parse"], (function (e) { var t = e.typed, r = e.parse; return t(Jp, { string: function (e) { return r(e).compile(); }, "Array | Matrix": function (e) { return Bn(e, (function (e) { return r(e).compile(); })); } }); })), Xp = "evaluate", Qp = Ee(Xp, ["typed", "parse"], (function (e) { var t = e.typed, r = e.parse; return t(Xp, { string: function (e) { var t = Le(); return r(e).compile().evaluate(t); }, "string, Map | Object": function (e, t) { return r(e).compile().evaluate(t); }, "Array | Matrix": function (e) { var t = Le(); return Bn(e, (function (e) { return r(e).compile().evaluate(t); })); }, "Array | Matrix, Map | Object": function (e, t) { return Bn(e, (function (e) { return r(e).compile().evaluate(t); })); } }); })), Kp = Ee("Parser", ["evaluate"], (function (e) { var t = e.evaluate; function r() { if (!(this instanceof r))
        throw new SyntaxError("Constructor must be called with the new operator"); Object.defineProperty(this, "scope", { value: Le(), writable: !1 }); } return r.prototype.type = "Parser", r.prototype.isParser = !0, r.prototype.evaluate = function (e) { return t(e, this.scope); }, r.prototype.get = function (e) { if (this.scope.has(e))
        return this.scope.get(e); }, r.prototype.getAll = function () { return function (e) { if (e instanceof Pe)
        return e.wrappedObject; var t, r = {}, n = qe(e.keys()); try {
        for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            Be(r, i, e.get(i));
        }
    }
    catch (e) {
        n.e(e);
    }
    finally {
        n.f();
    } return r; }(this.scope); }, r.prototype.getAllAsMap = function () { return this.scope; }, r.prototype.set = function (e, t) { return this.scope.set(e, t), t; }, r.prototype.remove = function (e) { this.scope.delete(e); }, r.prototype.clear = function () { this.scope.clear(); }, r; }), { isClass: !0 }), em = "parser", tm = Ee(em, ["typed", "Parser"], (function (e) { var t = e.typed, r = e.Parser; return t(em, { "": function () { return new r; } }); })), rm = Ee("lup", ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtract", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"], (function (e) { var t = e.typed, r = e.matrix, n = e.abs, i = e.addScalar, a = e.divideScalar, o = e.multiplyScalar, u = e.subtract, s = e.larger, c = e.equalScalar, f = e.unaryMinus, l = e.DenseMatrix, p = e.SparseMatrix, m = e.Spa; return t("lup", { DenseMatrix: function (e) { return h(e); }, SparseMatrix: function (e) { return function (e) { var t, r, i, u = e._size[0], l = e._size[1], h = Math.min(u, l), d = e._values, v = e._index, y = e._ptr, g = [], x = [], b = [], w = [u, h], N = [], D = [], E = [], A = [h, l], S = [], C = []; for (t = 0; t < u; t++)
            S[t] = t, C[t] = t; var M = function () { var e = new m; r < u && (b.push(g.length), g.push(1), x.push(r)), E.push(N.length); var l = y[r], h = y[r + 1]; for (i = l; i < h; i++)
            t = v[i], e.set(S[t], d[i]); r > 0 && e.forEach(0, r - 1, (function (t, r) { p._forEachRow(t, g, x, b, (function (n, i) { n > t && e.accumulate(n, f(o(i, r))); })); })); var M, F, O, T, B = r, _ = e.get(r), k = n(_); e.forEach(r + 1, u - 1, (function (e, t) { var r = n(t); s(r, k) && (B = e, k = r, _ = t); })), r !== B && (p._swapRows(r, B, w[1], g, x, b), p._swapRows(r, B, A[1], N, D, E), e.swap(r, B), F = B, O = C[M = r], T = C[F], S[O] = F, S[T] = M, C[M] = T, C[F] = O), e.forEach(0, u - 1, (function (e, t) { e <= r ? (N.push(t), D.push(e)) : (t = a(t, _), c(t, 0) || (g.push(t), x.push(e))); })); }; for (r = 0; r < l; r++)
            M(); return E.push(N.length), b.push(g.length), { L: new p({ values: g, index: x, ptr: b, size: w }), U: new p({ values: N, index: D, ptr: E, size: A }), p: S, toString: function () { return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p; } }; }(e); }, Array: function (e) { var t = h(r(e)); return { L: t.L.valueOf(), U: t.U.valueOf(), p: t.p }; } }); function h(e) { var t, r, f, p = e._size[0], m = e._size[1], h = Math.min(p, m), d = he(e._data), v = [], y = [p, h], g = [], x = [h, m], b = []; for (t = 0; t < p; t++)
        b[t] = t; for (r = 0; r < m; r++) {
        if (r > 0)
            for (t = 0; t < p; t++) {
                var w = Math.min(t, r), N = 0;
                for (f = 0; f < w; f++)
                    N = i(N, o(d[t][f], d[f][r]));
                d[t][r] = u(d[t][r], N);
            }
        var D = r, E = 0, A = 0;
        for (t = r; t < p; t++) {
            var S = d[t][r], C = n(S);
            s(C, E) && (D = t, E = C, A = S);
        }
        if (r !== D && (b[r] = [b[D], b[D] = b[r]][0], l._swapRows(r, D, d)), r < p)
            for (t = r + 1; t < p; t++) {
                var M = d[t][r];
                c(M, 0) || (d[t][r] = a(d[t][r], A));
            }
    } for (r = 0; r < m; r++)
        for (t = 0; t < p; t++)
            0 === r && (t < m && (g[t] = []), v[t] = []), t < r ? (t < m && (g[t][r] = d[t][r]), r < p && (v[t][r] = 0)) : t !== r ? (t < m && (g[t][r] = 0), r < p && (v[t][r] = d[t][r])) : (t < m && (g[t][r] = d[t][r]), r < p && (v[t][r] = 1)); var F = new l({ data: v, size: y }), O = new l({ data: g, size: x }), T = []; for (t = 0, h = b.length; t < h; t++)
        T[b[t]] = t; return { L: F, U: O, p: T, toString: function () { return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p; } }; } })), nm = Ee("qr", ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtract", "complex"], (function (e) { var t = e.typed, r = e.matrix, n = e.zeros, i = e.identity, a = e.isZero, o = e.equal, u = e.sign, s = e.sqrt, c = e.conj, f = e.unaryMinus, l = e.addScalar, p = e.divideScalar, m = e.multiplyScalar, h = e.subtract, d = e.complex; return Yc(t("qr", { DenseMatrix: function (e) { return y(e); }, SparseMatrix: function (e) { return function (e) { throw new Error("qr not implemented for sparse matrices yet"); }(); }, Array: function (e) { var t = y(r(e)); return { Q: t.Q.valueOf(), R: t.R.valueOf() }; } }), { _denseQRimpl: v }); function v(e) { var t, r, d, v = e._size[0], y = e._size[1], g = i([v], "dense"), x = g._data, b = e.clone(), w = b._data, N = n([v], ""); for (d = 0; d < Math.min(y, v); ++d) {
        var D = w[d][d], E = f(o(D, 0) ? 1 : u(D)), A = c(E), S = 0;
        for (t = d; t < v; t++)
            S = l(S, m(w[t][d], c(w[t][d])));
        var C = m(E, s(S));
        if (!a(C)) {
            var M = h(D, C);
            for (N[d] = 1, t = d + 1; t < v; t++)
                N[t] = p(w[t][d], M);
            var F = f(c(p(M, C))), O = void 0;
            for (r = d; r < y; r++) {
                for (O = 0, t = d; t < v; t++)
                    O = l(O, m(c(N[t]), w[t][r]));
                for (O = m(O, F), t = d; t < v; t++)
                    w[t][r] = m(h(w[t][r], m(N[t], O)), A);
            }
            for (t = 0; t < v; t++) {
                for (O = 0, r = d; r < v; r++)
                    O = l(O, m(x[t][r], N[r]));
                for (O = m(O, F), r = d; r < v; ++r)
                    x[t][r] = p(h(x[t][r], m(O, c(N[r]))), A);
            }
        }
    } return { Q: g, R: b, toString: function () { return "Q: " + this.Q.toString() + "\nR: " + this.R.toString(); } }; } function y(e) { var t = v(e), r = t.R._data; if (e._data.length > 0)
        for (var n = "Complex" === r[0][0].type ? d(0) : 0, i = 0; i < r.length; ++i)
            for (var a = 0; a < i && a < (r[0] || []).length; ++a)
                r[i][a] = n; return t; } }));
    function im(e, t, r, n, i, a, o) { var u = 0; for (r[o] = e; u >= 0;) {
        var s = r[o + u], c = r[n + s];
        -1 === c ? (u--, a[t++] = s) : (r[n + s] = r[i + c], r[o + ++u] = c);
    } return t; }
    function am(e) { return -e - 2; }
    var om = Ee("csAmd", ["add", "multiply", "transpose"], (function (e) { var t = e.add, r = e.multiply, n = e.transpose; return function (e, o) { if (!o || e <= 0 || e > 3)
        return null; var u = o._size, s = u[0], c = u[1], f = 0, l = Math.max(16, 10 * Math.sqrt(c)), p = function (e, i, a, o, u) { var s = n(i); if (1 === e && o === a)
        return t(i, s); if (2 === e) {
        for (var c = s._index, f = s._ptr, l = 0, p = 0; p < a; p++) {
            var m = f[p];
            if (f[p] = l, !(f[p + 1] - m > u))
                for (var h = f[p + 1]; m < h; m++)
                    c[l++] = c[m];
        }
        return f[a] = l, i = n(s), r(s, i);
    } return r(s, i); }(e, o, s, c, l = Math.min(c - 2, l)); !function (e, t, r) { for (var n = e._values, i = e._index, a = e._ptr, o = e._size[1], u = 0, s = 0; s < o; s++) {
        var c = a[s];
        for (a[s] = u; c < a[s + 1]; c++)
            t(i[c], s, n ? n[c] : 1, null) && (i[u] = i[c], n && (n[u] = n[c]), u++);
    } a[o] = u, i.splice(u, i.length - u), n && n.splice(u, n.length - u); }(p, a); for (var m, h, d, v, y, g, x, b, w, N, D, E, A, S, C, M, F = p._index, O = p._ptr, T = O[c], B = [], _ = [], k = c + 1, I = 2 * (c + 1), R = 3 * (c + 1), z = 4 * (c + 1), q = 5 * (c + 1), j = 6 * (c + 1), P = 7 * (c + 1), L = B, U = function (e, t, r, n, a, o, u, s, c, f, l, p) { for (var m = 0; m < e; m++)
        r[0 + m] = t[m + 1] - t[m]; r[0 + e] = 0; for (var h = 0; h <= e; h++)
        r[a + h] = -1, o[h] = -1, r[u + h] = -1, r[s + h] = -1, r[c + h] = 1, r[f + h] = 1, r[l + h] = 0, r[p + h] = r[0 + h]; var d = i(0, 0, r, f, e); return r[l + e] = -2, t[e] = -1, r[f + e] = 0, d; }(c, O, _, 0, R, L, I, P, k, j, z, q), $ = function (e, t, r, n, i, a, o, u, s, c, f) { for (var l = 0, p = 0; p < e; p++) {
        var m = r[n + p];
        if (0 === m)
            r[i + p] = -2, l++, t[p] = -1, r[a + p] = 0;
        else if (m > o)
            r[u + p] = 0, r[i + p] = -1, l++, t[p] = am(e), r[u + e]++;
        else {
            var h = r[s + m];
            -1 !== h && (c[h] = p), r[f + p] = r[s + m], r[s + m] = p;
        }
    } return l; }(c, O, _, q, z, j, l, k, R, L, I), H = 0; $ < c;) {
        for (d = -1; H < c && -1 === (d = _[R + H]); H++)
            ;
        -1 !== _[I + d] && (L[_[I + d]] = -1), _[R + H] = _[I + d];
        var G = _[z + d], V = _[k + d];
        $ += V;
        var Z = 0;
        _[k + d] = -V;
        var W = O[d], J = 0 === G ? W : T, Y = J;
        for (v = 1; v <= G + 1; v++) {
            for (v > G ? (g = d, x = W, b = _[0 + d] - G) : (x = O[g = F[W++]], b = _[0 + g]), y = 1; y <= b; y++)
                (w = _[k + (m = F[x++])]) <= 0 || (Z += w, _[k + m] = -w, F[Y++] = m, -1 !== _[I + m] && (L[_[I + m]] = L[m]), -1 !== L[m] ? _[I + L[m]] = _[I + m] : _[R + _[q + m]] = _[I + m]);
            g !== d && (O[g] = am(d), _[j + g] = 0);
        }
        for (0 !== G && (T = Y), _[q + d] = Z, O[d] = J, _[0 + d] = Y - J, _[z + d] = -2, U = i(U, f, _, j, c), N = J; N < Y; N++)
            if (!((D = _[z + (m = F[N])]) <= 0)) {
                var X = U - (w = -_[k + m]);
                for (W = O[m], E = O[m] + D - 1; W <= E; W++)
                    _[j + (g = F[W])] >= U ? _[j + g] -= w : 0 !== _[j + g] && (_[j + g] = _[q + g] + X);
            }
        for (N = J; N < Y; N++) {
            for (A = (E = O[m = F[N]]) + _[z + m] - 1, S = E, C = 0, M = 0, W = E; W <= A; W++)
                if (0 !== _[j + (g = F[W])]) {
                    var Q = _[j + g] - U;
                    Q > 0 ? (M += Q, F[S++] = g, C += g) : (O[g] = am(d), _[j + g] = 0);
                }
            _[z + m] = S - E + 1;
            var K = S, ee = E + _[0 + m];
            for (W = A + 1; W < ee; W++) {
                var te = _[k + (h = F[W])];
                te <= 0 || (M += te, F[S++] = h, C += h);
            }
            0 === M ? (O[m] = am(d), Z -= w = -_[k + m], V += w, $ += w, _[k + m] = 0, _[z + m] = -1) : (_[q + m] = Math.min(_[q + m], M), F[S] = F[K], F[K] = F[E], F[E] = d, _[0 + m] = S - E + 1, C = (C < 0 ? -C : C) % c, _[I + m] = _[P + C], _[P + C] = m, L[m] = C);
        }
        for (_[q + d] = Z, U = i(U + (f = Math.max(f, Z)), f, _, j, c), N = J; N < Y; N++)
            if (!(_[k + (m = F[N])] >= 0))
                for (m = _[P + (C = L[m])], _[P + C] = -1; -1 !== m && -1 !== _[I + m]; m = _[I + m], U++) {
                    for (b = _[0 + m], D = _[z + m], W = O[m] + 1; W <= O[m] + b - 1; W++)
                        _[j + F[W]] = U;
                    var re = m;
                    for (h = _[I + m]; -1 !== h;) {
                        var ne = _[0 + h] === b && _[z + h] === D;
                        for (W = O[h] + 1; ne && W <= O[h] + b - 1; W++)
                            _[j + F[W]] !== U && (ne = 0);
                        ne ? (O[h] = am(m), _[k + m] += _[k + h], _[k + h] = 0, _[z + h] = -1, h = _[I + h], _[I + re] = h) : (re = h, h = _[I + h]);
                    }
                }
        for (W = J, N = J; N < Y; N++)
            (w = -_[k + (m = F[N])]) <= 0 || (_[k + m] = w, M = _[q + m] + Z - w, -1 !== _[R + (M = Math.min(M, c - $ - w))] && (L[_[R + M]] = m), _[I + m] = _[R + M], L[m] = -1, _[R + M] = m, H = Math.min(H, M), _[q + m] = M, F[W++] = m);
        _[k + d] = V, 0 == (_[0 + d] = W - J) && (O[d] = -1, _[j + d] = 0), 0 !== G && (T = W);
    } for (m = 0; m < c; m++)
        O[m] = am(O[m]); for (h = 0; h <= c; h++)
        _[R + h] = -1; for (h = c; h >= 0; h--)
        _[k + h] > 0 || (_[I + h] = _[R + O[h]], _[R + O[h]] = h); for (g = c; g >= 0; g--)
        _[k + g] <= 0 || -1 !== O[g] && (_[I + g] = _[R + O[g]], _[R + O[g]] = g); for (d = 0, m = 0; m <= c; m++)
        -1 === O[m] && (d = im(m, d, _, R, I, B, j)); return B.splice(B.length - 1, 1), B; }; function i(e, t, r, n, i) { if (e < 2 || e + t < 0) {
        for (var a = 0; a < i; a++)
            0 !== r[n + a] && (r[n + a] = 1);
        e = 2;
    } return e; } function a(e, t) { return e !== t; } }));
    function um(e, t, r, n, i, a, o) { var u, s, c, f = 0; if (e <= t || r[n + t] <= r[i + e])
        return -1; r[i + e] = r[n + t]; var l = r[a + e]; if (r[a + e] = t, -1 === l)
        f = 1, c = e;
    else {
        for (f = 2, c = l; c !== r[o + c]; c = r[o + c])
            ;
        for (u = l; u !== c; u = s)
            s = r[o + u], r[o + u] = c;
    } return { jleaf: f, q: c }; }
    var sm = Ee("csCounts", ["transpose"], (function (e) { var t = e.transpose; return function (e, r, n, i) { if (!e || !r || !n)
        return null; var a, o, u, s, c, f, l, p = e._size, m = p[0], h = p[1], d = 4 * h + (i ? h + m + 1 : 0), v = [], y = h, g = 2 * h, x = 3 * h, b = 4 * h, w = 5 * h + 1; for (u = 0; u < d; u++)
        v[u] = -1; var N = [], D = t(e), E = D._index, A = D._ptr; for (u = 0; u < h; u++)
        for (N[o = n[u]] = -1 === v[x + o] ? 1 : 0; -1 !== o && -1 === v[x + o]; o = r[o])
            v[x + o] = u; if (i) {
        for (u = 0; u < h; u++)
            v[n[u]] = u;
        for (a = 0; a < m; a++) {
            for (u = h, f = A[a], l = A[a + 1], c = f; c < l; c++)
                u = Math.min(u, v[E[c]]);
            v[w + a] = v[b + u], v[b + u] = a;
        }
    } for (a = 0; a < h; a++)
        v[0 + a] = a; for (u = 0; u < h; u++) {
        for (-1 !== r[o = n[u]] && N[r[o]]--, s = i ? v[b + u] : o; -1 !== s; s = i ? v[w + s] : -1)
            for (c = A[s]; c < A[s + 1]; c++) {
                var S = um(a = E[c], o, v, x, y, g, 0);
                S.jleaf >= 1 && N[o]++, 2 === S.jleaf && N[S.q]--;
            }
        -1 !== r[o] && (v[0 + o] = r[o]);
    } for (o = 0; o < h; o++)
        -1 !== r[o] && (N[r[o]] += N[o]); return N; }; })), cm = Ee("csSqr", ["add", "multiply", "transpose"], (function (e) { var t = e.add, r = e.multiply, n = e.transpose, i = om({ add: t, multiply: r, transpose: n }), a = sm({ transpose: n }); return function (e, t, r) { var n, o = t._ptr, u = t._size[1], s = {}; if (s.q = i(e, t), e && !s.q)
        return null; if (r) {
        var c = e ? function (e, t, r, n) { for (var i = e._values, a = e._index, o = e._ptr, u = e._size, s = e._datatype, c = u[0], f = u[1], l = null, p = [], m = [], h = 0, d = 0; d < f; d++) {
            m[d] = h;
            for (var v = r ? r[d] : d, y = o[v], g = o[v + 1], x = y; x < g; x++) {
                var b = a[x];
                p[h] = b, l && (l[h] = i[x]), h++;
            }
        } return m[f] = h, e.createSparseMatrix({ values: l, index: p, ptr: m, size: [c, f], datatype: s }); }(t, 0, s.q) : t;
        s.parent = function (e, t) { if (!e)
            return null; var r, n, i = e._index, a = e._ptr, o = e._size, u = o[0], s = o[1], c = [], f = [], l = s; for (r = 0; r < u; r++)
            f[l + r] = -1; for (var p = 0; p < s; p++) {
            c[p] = -1, f[0 + p] = -1;
            for (var m = a[p], h = a[p + 1], d = m; d < h; d++) {
                var v = i[d];
                for (r = f[l + v]; -1 !== r && r < p; r = n)
                    n = f[0 + r], f[0 + r] = p, -1 === n && (c[r] = p);
                f[l + v] = p;
            }
        } return c; }(c);
        var f = function (e, t) { if (!e)
            return null; var r, n = 0, i = [], a = [], o = t, u = 2 * t; for (r = 0; r < t; r++)
            a[0 + r] = -1; for (r = t - 1; r >= 0; r--)
            -1 !== e[r] && (a[o + r] = a[0 + e[r]], a[0 + e[r]] = r); for (r = 0; r < t; r++)
            -1 === e[r] && (n = im(r, n, a, 0, o, i, u)); return i; }(s.parent, u);
        if (s.cp = a(c, s.parent, f, 1), c && s.parent && s.cp && function (e, t) { var r = e._ptr, n = e._index, i = e._size, a = i[0], o = i[1]; t.pinv = [], t.leftmost = []; var u, s, c, f, l, p = t.parent, m = t.pinv, h = t.leftmost, d = [], v = a, y = a + o, g = a + 2 * o; for (s = 0; s < o; s++)
            d[v + s] = -1, d[y + s] = -1, d[g + s] = 0; for (u = 0; u < a; u++)
            h[u] = -1; for (s = o - 1; s >= 0; s--)
            for (f = r[s], l = r[s + 1], c = f; c < l; c++)
                h[n[c]] = s; for (u = a - 1; u >= 0; u--)
            m[u] = -1, -1 !== (s = h[u]) && (0 == d[g + s]++ && (d[y + s] = u), d[0 + u] = d[v + s], d[v + s] = u); for (t.lnz = 0, t.m2 = a, s = 0; s < o; s++)
            if (u = d[v + s], t.lnz++, u < 0 && (u = t.m2++), m[u] = s, !(--g[s] <= 0)) {
                t.lnz += d[g + s];
                var x = p[s];
                -1 !== x && (0 === d[g + x] && (d[y + x] = d[y + s]), d[0 + d[y + s]] = d[v + x], d[v + x] = d[0 + u], d[g + x] += d[g + s]);
            } for (u = 0; u < a; u++)
            m[u] < 0 && (m[u] = s++); return !0; }(c, s))
            for (s.unz = 0, n = 0; n < u; n++)
                s.unz += s.cp[n];
    }
    else
        s.unz = 4 * o[u] + u, s.lnz = s.unz; return s; }; }));
    function fm(e, t) { return e[t] < 0; }
    function lm(e, t) { e[t] = am(e[t]); }
    function pm(e) { return e < 0 ? am(e) : e; }
    function mm(e, t, r, n, i) { var a, o, u, s = t._index, c = t._ptr, f = t._size[1], l = 0; for (n[0] = e; l >= 0;) {
        e = n[l];
        var p = i ? i[e] : e;
        fm(c, e) || (lm(c, e), n[f + l] = p < 0 ? 0 : pm(c[p]));
        var m = 1;
        for (o = n[f + l], u = p < 0 ? 0 : pm(c[p + 1]); o < u; o++)
            if (!fm(c, a = s[o])) {
                n[f + l] = o, n[++l] = a, m = 0;
                break;
            }
        m && (l--, n[--r] = e);
    } return r; }
    var hm = Ee("csSpsolve", ["divideScalar", "multiply", "subtract"], (function (e) { var t = e.divideScalar, r = e.multiply, n = e.subtract; return function (e, i, a, o, u, s, c) { var f, l, p, m, h = e._values, d = e._index, v = e._ptr, y = e._size[1], g = i._values, x = i._index, b = i._ptr, w = function (e, t, r, n, i) { var a, o, u, s = e._ptr, c = e._size, f = t._index, l = t._ptr, p = c[1], m = p; for (o = l[r], u = l[r + 1], a = o; a < u; a++) {
        var h = f[a];
        fm(s, h) || (m = mm(h, e, m, n, i));
    } for (a = m; a < p; a++)
        lm(s, n[a]); return m; }(e, i, a, o, s); for (f = w; f < y; f++)
        u[o[f]] = 0; for (l = b[a], p = b[a + 1], f = l; f < p; f++)
        u[x[f]] = g[f]; for (var N = w; N < y; N++) {
        var D = o[N], E = s ? s[D] : D;
        if (!(E < 0))
            for (l = v[E], p = v[E + 1], u[D] = t(u[D], h[c ? l : p - 1]), f = c ? l + 1 : l, m = c ? p : p - 1; f < m; f++) {
                var A = d[f];
                u[A] = n(u[A], r(h[f], u[D]));
            }
    } return w; }; })), dm = Ee("csLu", ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"], (function (e) { var t = e.abs, r = e.divideScalar, n = e.multiply, i = e.subtract, a = e.larger, o = e.largerEq, u = e.SparseMatrix, s = hm({ divideScalar: r, multiply: n, subtract: i }); return function (e, i, c) { if (!e)
        return null; var f, l = e._size[1], p = 100, m = 100; i && (f = i.q, p = i.lnz || p, m = i.unz || m); var h, d, v = [], y = [], g = [], x = new u({ values: v, index: y, ptr: g, size: [l, l] }), b = [], w = [], N = [], D = new u({ values: b, index: w, ptr: N, size: [l, l] }), E = [], A = [], S = []; for (h = 0; h < l; h++)
        A[h] = 0, E[h] = -1, g[h + 1] = 0; p = 0, m = 0; for (var C = 0; C < l; C++) {
        g[C] = p, N[C] = m;
        var M = f ? f[C] : C, F = s(x, e, M, S, A, E, 1), O = -1, T = -1;
        for (d = F; d < l; d++)
            if (E[h = S[d]] < 0) {
                var B = t(A[h]);
                a(B, T) && (T = B, O = h);
            }
            else
                w[m] = E[h], b[m++] = A[h];
        if (-1 === O || T <= 0)
            return null;
        E[M] < 0 && o(t(A[M]), n(T, c)) && (O = M);
        var _ = A[O];
        for (w[m] = C, b[m++] = _, E[O] = C, y[p] = O, v[p++] = 1, d = F; d < l; d++)
            E[h = S[d]] < 0 && (y[p] = h, v[p++] = r(A[h], _)), A[h] = 0;
    } for (g[l] = p, N[l] = m, d = 0; d < p; d++)
        y[d] = E[y[d]]; return v.splice(p, v.length - p), y.splice(p, y.length - p), b.splice(m, b.length - m), w.splice(m, w.length - m), { L: x, U: D, pinv: E }; }; })), vm = Ee("slu", ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"], (function (e) { var t = e.typed, r = e.abs, n = e.add, i = e.multiply, a = e.transpose, o = e.divideScalar, u = e.subtract, s = e.larger, c = e.largerEq, f = e.SparseMatrix, l = cm({ add: n, multiply: i, transpose: a }), p = dm({ abs: r, divideScalar: o, multiply: i, subtract: u, larger: s, largerEq: c, SparseMatrix: f }); return t("slu", { "SparseMatrix, number, number": function (e, t, r) { if (!V(t) || t < 0 || t > 3)
            throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]"); if (r < 0 || r > 1)
            throw new Error("Partial pivoting threshold must be a number from 0 to 1"); var n = l(t, e, !1), i = p(e, n, r); return { L: i.L, U: i.U, p: i.pinv, q: n.q, toString: function () { return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\np: " + this.p.toString() + (this.q ? "\nq: " + this.q.toString() : "") + "\n"; } }; } }); }));
    function ym(e, t) { var r, n = t.length, i = []; if (e)
        for (r = 0; r < n; r++)
            i[e[r]] = t[r];
    else
        for (r = 0; r < n; r++)
            i[r] = t[r]; return i; }
    var gm = "lusolve", xm = Ee(gm, ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"], (function (e) { var t = e.typed, r = e.matrix, n = e.lup, i = e.slu, a = e.usolve, o = e.lsolve, u = Hs({ DenseMatrix: e.DenseMatrix }); return t(gm, { "Array, Array | Matrix": function (e, t) { e = r(e); var i = n(e); return c(i.L, i.U, i.p, null, t).valueOf(); }, "DenseMatrix, Array | Matrix": function (e, t) { var r = n(e); return c(r.L, r.U, r.p, null, t); }, "SparseMatrix, Array | Matrix": function (e, t) { var r = n(e); return c(r.L, r.U, r.p, null, t); }, "SparseMatrix, Array | Matrix, number, number": function (e, t, r, n) { var a = i(e, r, n); return c(a.L, a.U, a.p, a.q, t); }, "Object, Array | Matrix": function (e, t) { return c(e.L, e.U, e.p, e.q, t); } }); function s(e) { if (l(e))
        return e; if (f(e))
        return r(e); throw new TypeError("Invalid Matrix LU decomposition"); } function c(e, t, r, n, i) { e = s(e), t = s(t), r && ((i = u(e, i, !0))._data = ym(r, i._data)); var c = o(e, i), f = a(t, c); return n && (f._data = ym(n, f._data)), f; } })), bm = "polynomialRoot", wm = Ee(bm, ["typed", "isZero", "equalScalar", "add", "subtract", "multiply", "divide", "sqrt", "unaryMinus", "cbrt", "typeOf", "im", "re"], (function (e) { var t = e.typed, r = e.isZero, n = e.equalScalar, i = e.add, a = e.subtract, o = e.multiply, u = e.divide, s = e.sqrt, c = e.unaryMinus, f = e.cbrt, l = e.typeOf, p = e.im, m = e.re; return t(bm, { "number|Complex, ...number|Complex": function (e, t) { for (var h = [e].concat(rs(t)); h.length > 0 && r(h[h.length - 1]);)
            h.pop(); if (h.length < 2)
            throw new RangeError("Polynomial [".concat(e, ", ").concat(t, "] must have a non-zero non-constant coefficient")); switch (h.length) {
            case 2: return [c(u(h[0], h[1]))];
            case 3:
                var d = fa(h, 3), v = d[0], y = d[1], g = d[2], x = o(2, g), b = o(y, y), w = o(4, g, v);
                if (n(b, w))
                    return [u(c(y), x)];
                var N = s(a(b, w));
                return [u(a(N, y), x), u(a(c(N), y), x)];
            case 4:
                var D = fa(h, 4), E = D[0], A = D[1], S = D[2], C = D[3], M = c(o(3, C)), F = o(S, S), O = o(3, C, A), T = i(o(2, S, S, S), o(27, C, C, E)), B = o(9, C, S, A);
                if (n(F, O) && n(T, B))
                    return [u(S, M)];
                var _, k = a(F, O), I = a(T, B), R = i(o(18, C, S, A, E), o(S, S, A, A)), z = i(o(4, S, S, S, E), o(4, C, A, A, A), o(27, C, C, E, E));
                return n(R, z) ? [u(a(o(4, C, S, A), i(o(9, C, C, E), o(S, S, S))), o(C, k)), u(a(o(9, C, E), o(S, A)), o(2, k))] : (_ = n(F, O) ? I : u(i(I, s(a(o(I, I), o(4, k, k, k)))), 2), f(_, !0).toArray().map((function (e) { return u(i(S, e, u(k, e)), M); })).map((function (e) { return "Complex" === l(e) && n(m(e), m(e) + p(e)) ? m(e) : e; })));
            default: throw new RangeError("only implemented for cubic or lower-order polynomials, not ".concat(h));
        } } }); })), Nm = Ee("Help", ["parse"], (function (e) { var t = e.parse; function r(e) { if (!(this instanceof r))
        throw new SyntaxError("Constructor must be called with the new operator"); if (!e)
        throw new Error('Argument "doc" missing'); this.doc = e; } return r.prototype.type = "Help", r.prototype.isHelp = !0, r.prototype.toString = function () { var e = this.doc || {}, r = "\n"; if (e.name && (r += "Name: " + e.name + "\n\n"), e.category && (r += "Category: " + e.category + "\n\n"), e.description && (r += "Description:\n    " + e.description + "\n\n"), e.syntax && (r += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) {
        r += "Examples:\n";
        for (var n = {}, i = 0; i < e.examples.length; i++) {
            var a = e.examples[i];
            r += "    " + a + "\n";
            var o = void 0;
            try {
                o = t(a).compile().evaluate(n);
            }
            catch (e) {
                o = e;
            }
            void 0 === o || x(o) || (r += "        " + Gr(o, { precision: 14 }) + "\n");
        }
        r += "\n";
    } return e.mayThrow && e.mayThrow.length && (r += "Throws: " + e.mayThrow.join(", ") + "\n\n"), e.seealso && e.seealso.length && (r += "See also: " + e.seealso.join(", ") + "\n"), r; }, r.prototype.toJSON = function () { var e = he(this.doc); return e.mathjs = "Help", e; }, r.fromJSON = function (e) { var t = {}; return Object.keys(e).filter((function (e) { return "mathjs" !== e; })).forEach((function (r) { t[r] = e[r]; })), new r(t); }, r.prototype.valueOf = r.prototype.toString, r; }), { isClass: !0 }), Dm = Ee("Chain", ["?on", "math", "typed"], (function (e) { var t = e.on, r = e.math, n = e.typed; function i(e) { if (!(this instanceof i))
        throw new SyntaxError("Constructor must be called with the new operator"); $(e) ? this.value = e.value : this.value = e; } function a(e, t) { we(i.prototype, e, (function () { var e = t(); if ("function" == typeof e)
        return o(e); })); } function o(e) { return function () { if (0 === arguments.length)
        return new i(e(this.value)); for (var t = [this.value], r = 0; r < arguments.length; r++)
        t[r + 1] = arguments[r]; if (n.isTypedFunction(e)) {
        var a = n.resolve(e, t);
        if (1 === a.params.length)
            throw new Error("chain function " + e.name + " cannot match rest parameter between chain value and additional arguments.");
        return new i(a.implementation.apply(e, t));
    } return new i(e.apply(e, t)); }; } i.prototype.type = "Chain", i.prototype.isChain = !0, i.prototype.done = function () { return this.value; }, i.prototype.valueOf = function () { return this.value; }, i.prototype.toString = function () { return Gr(this.value); }, i.prototype.toJSON = function () { return { mathjs: "Chain", value: this.value }; }, i.fromJSON = function (e) { return new i(e.value); }, i.createProxy = function (e, t) { if ("string" == typeof e)
        s = e, "function" == typeof (c = t) && (i.prototype[s] = o(c));
    else {
        var r = function (t) { Ne(e, t) && void 0 === u[t] && a(t, (function () { return e[t]; })); };
        for (var n in e)
            r(n);
    } var s, c; }; var u = { expression: !0, docs: !0, type: !0, classes: !0, json: !0, error: !0, isChain: !0 }; return i.createProxy(r), t && t("import", (function (e, t, r) { r || a(e, t); })), i; }), { isClass: !0 }), Em = { name: "e", category: "Constants", syntax: ["e"], description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828", examples: ["e", "e ^ 2", "exp(2)", "log(e)"], seealso: ["exp"] }, Am = { name: "pi", category: "Constants", syntax: ["pi"], description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159", examples: ["pi", "sin(pi/2)"], seealso: ["tau"] }, Sm = { bignumber: { name: "bignumber", category: "Construction", syntax: ["bignumber(x)"], description: "Create a big number from a number or string.", examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"], seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"] }, boolean: { name: "boolean", category: "Construction", syntax: ["x", "boolean(x)"], description: "Convert a string or number into a boolean.", examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"], seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"] }, complex: { name: "complex", category: "Construction", syntax: ["complex()", "complex(re, im)", "complex(string)"], description: "Create a complex number.", examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'], seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"] }, createUnit: { name: "createUnit", category: "Construction", syntax: ["createUnit(definitions)", "createUnit(name, definition)"], description: "Create a user-defined unit and register it with the Unit type.", examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'], seealso: ["unit", "splitUnit"] }, fraction: { name: "fraction", category: "Construction", syntax: ["fraction(num)", "fraction(matrix)", "fraction(num,den)", "fraction({n: num, d: den})"], description: "Create a fraction from a number or from integer numerator and denominator.", examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)", "fraction({n: 333, d: 53})", "fraction([sqrt(9), sqrt(10), sqrt(11)])"], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"] }, index: { name: "index", category: "Construction", syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"], description: "Create an index to get or replace a subset of a matrix", examples: ["[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[1:2, 1:2] = ones(2, 2)"], seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"] }, matrix: { name: "matrix", category: "Construction", syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"], description: "Create a matrix.", examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'], seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"] }, number: { name: "number", category: "Construction", syntax: ["x", "number(x)", "number(unit, valuelessUnit)"], description: "Create a number or convert a string or boolean into a number.", examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'], seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"] }, sparse: { name: "sparse", category: "Construction", syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'], description: "Create a sparse matrix.", examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'], seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"] }, splitUnit: { name: "splitUnit", category: "Construction", syntax: ["splitUnit(unit: Unit, parts: Unit[])"], description: "Split a unit in an array of units whose sum is equal to the original unit.", examples: ['splitUnit(1 m, ["feet", "inch"])'], seealso: ["unit", "createUnit"] }, string: { name: "string", category: "Construction", syntax: ['"text"', "string(x)"], description: "Create a string or convert a value to a string", examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"] }, unit: { name: "unit", category: "Construction", syntax: ["value unit", "unit(value, unit)", "unit(string)"], description: "Create a unit.", examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"] }, e: Em, E: Em, false: { name: "false", category: "Constants", syntax: ["false"], description: "Boolean value false", examples: ["false"], seealso: ["true"] }, i: { name: "i", category: "Constants", syntax: ["i"], description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.", examples: ["i", "i * i", "sqrt(-1)"], seealso: [] }, Infinity: { name: "Infinity", category: "Constants", syntax: ["Infinity"], description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.", examples: ["Infinity", "1 / 0"], seealso: [] }, LN2: { name: "LN2", category: "Constants", syntax: ["LN2"], description: "Returns the natural logarithm of 2, approximately equal to 0.693", examples: ["LN2", "log(2)"], seealso: [] }, LN10: { name: "LN10", category: "Constants", syntax: ["LN10"], description: "Returns the natural logarithm of 10, approximately equal to 2.302", examples: ["LN10", "log(10)"], seealso: [] }, LOG2E: { name: "LOG2E", category: "Constants", syntax: ["LOG2E"], description: "Returns the base-2 logarithm of E, approximately equal to 1.442", examples: ["LOG2E", "log(e, 2)"], seealso: [] }, LOG10E: { name: "LOG10E", category: "Constants", syntax: ["LOG10E"], description: "Returns the base-10 logarithm of E, approximately equal to 0.434", examples: ["LOG10E", "log(e, 10)"], seealso: [] }, NaN: { name: "NaN", category: "Constants", syntax: ["NaN"], description: "Not a number", examples: ["NaN", "0 / 0"], seealso: [] }, null: { name: "null", category: "Constants", syntax: ["null"], description: "Value null", examples: ["null"], seealso: ["true", "false"] }, pi: Am, PI: Am, phi: { name: "phi", category: "Constants", syntax: ["phi"], description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...", examples: ["phi"], seealso: [] }, SQRT1_2: { name: "SQRT1_2", category: "Constants", syntax: ["SQRT1_2"], description: "Returns the square root of 1/2, approximately equal to 0.707", examples: ["SQRT1_2", "sqrt(1/2)"], seealso: [] }, SQRT2: { name: "SQRT2", category: "Constants", syntax: ["SQRT2"], description: "Returns the square root of 2, approximately equal to 1.414", examples: ["SQRT2", "sqrt(2)"], seealso: [] }, tau: { name: "tau", category: "Constants", syntax: ["tau"], description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.", examples: ["tau", "2 * pi"], seealso: ["pi"] }, true: { name: "true", category: "Constants", syntax: ["true"], description: "Boolean value true", examples: ["true"], seealso: ["false"] }, version: { name: "version", category: "Constants", syntax: ["version"], description: "A string with the version number of math.js", examples: ["version"], seealso: [] }, speedOfLight: { description: "Speed of light in vacuum", examples: ["speedOfLight"] }, gravitationConstant: { description: "Newtonian constant of gravitation", examples: ["gravitationConstant"] }, planckConstant: { description: "Planck constant", examples: ["planckConstant"] }, reducedPlanckConstant: { description: "Reduced Planck constant", examples: ["reducedPlanckConstant"] }, magneticConstant: { description: "Magnetic constant (vacuum permeability)", examples: ["magneticConstant"] }, electricConstant: { description: "Electric constant (vacuum permeability)", examples: ["electricConstant"] }, vacuumImpedance: { description: "Characteristic impedance of vacuum", examples: ["vacuumImpedance"] }, coulomb: { description: "Coulomb's constant", examples: ["coulomb"] }, elementaryCharge: { description: "Elementary charge", examples: ["elementaryCharge"] }, bohrMagneton: { description: "Borh magneton", examples: ["bohrMagneton"] }, conductanceQuantum: { description: "Conductance quantum", examples: ["conductanceQuantum"] }, inverseConductanceQuantum: { description: "Inverse conductance quantum", examples: ["inverseConductanceQuantum"] }, magneticFluxQuantum: { description: "Magnetic flux quantum", examples: ["magneticFluxQuantum"] }, nuclearMagneton: { description: "Nuclear magneton", examples: ["nuclearMagneton"] }, klitzing: { description: "Von Klitzing constant", examples: ["klitzing"] }, bohrRadius: { description: "Borh radius", examples: ["bohrRadius"] }, classicalElectronRadius: { description: "Classical electron radius", examples: ["classicalElectronRadius"] }, electronMass: { description: "Electron mass", examples: ["electronMass"] }, fermiCoupling: { description: "Fermi coupling constant", examples: ["fermiCoupling"] }, fineStructure: { description: "Fine-structure constant", examples: ["fineStructure"] }, hartreeEnergy: { description: "Hartree energy", examples: ["hartreeEnergy"] }, protonMass: { description: "Proton mass", examples: ["protonMass"] }, deuteronMass: { description: "Deuteron Mass", examples: ["deuteronMass"] }, neutronMass: { description: "Neutron mass", examples: ["neutronMass"] }, quantumOfCirculation: { description: "Quantum of circulation", examples: ["quantumOfCirculation"] }, rydberg: { description: "Rydberg constant", examples: ["rydberg"] }, thomsonCrossSection: { description: "Thomson cross section", examples: ["thomsonCrossSection"] }, weakMixingAngle: { description: "Weak mixing angle", examples: ["weakMixingAngle"] }, efimovFactor: { description: "Efimov factor", examples: ["efimovFactor"] }, atomicMass: { description: "Atomic mass constant", examples: ["atomicMass"] }, avogadro: { description: "Avogadro's number", examples: ["avogadro"] }, boltzmann: { description: "Boltzmann constant", examples: ["boltzmann"] }, faraday: { description: "Faraday constant", examples: ["faraday"] }, firstRadiation: { description: "First radiation constant", examples: ["firstRadiation"] }, loschmidt: { description: "Loschmidt constant at T=273.15 K and p=101.325 kPa", examples: ["loschmidt"] }, gasConstant: { description: "Gas constant", examples: ["gasConstant"] }, molarPlanckConstant: { description: "Molar Planck constant", examples: ["molarPlanckConstant"] }, molarVolume: { description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa", examples: ["molarVolume"] }, sackurTetrode: { description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa", examples: ["sackurTetrode"] }, secondRadiation: { description: "Second radiation constant", examples: ["secondRadiation"] }, stefanBoltzmann: { description: "Stefan-Boltzmann constant", examples: ["stefanBoltzmann"] }, wienDisplacement: { description: "Wien displacement law constant", examples: ["wienDisplacement"] }, molarMass: { description: "Molar mass constant", examples: ["molarMass"] }, molarMassC12: { description: "Molar mass constant of carbon-12", examples: ["molarMassC12"] }, gravity: { description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)", examples: ["gravity"] }, planckLength: { description: "Planck length", examples: ["planckLength"] }, planckMass: { description: "Planck mass", examples: ["planckMass"] }, planckTime: { description: "Planck time", examples: ["planckTime"] }, planckCharge: { description: "Planck charge", examples: ["planckCharge"] }, planckTemperature: { description: "Planck temperature", examples: ["planckTemperature"] }, derivative: { name: "derivative", category: "Algebra", syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"], description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.", examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.evaluate({x: 3})"], seealso: ["simplify", "parse", "evaluate"] }, lsolve: { name: "lsolve", category: "Algebra", syntax: ["x=lsolve(L, b)"], description: "Finds one solution of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"], seealso: ["lsolveAll", "lup", "lusolve", "usolve", "matrix", "sparse"] }, lsolveAll: { name: "lsolveAll", category: "Algebra", syntax: ["x=lsolveAll(L, b)"], description: "Finds all solutions of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"], seealso: ["lsolve", "lup", "lusolve", "usolve", "matrix", "sparse"] }, lup: { name: "lup", category: "Algebra", syntax: ["lup(m)"], description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U", examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"], seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"] }, lusolve: { name: "lusolve", category: "Algebra", syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"], description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"], seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"] }, leafCount: { name: "leafCount", category: "Algebra", syntax: ["leafCount(expr)"], description: "Computes the number of leaves in the parse tree of the given expression", examples: ['leafCount("e^(i*pi)-1")', 'leafCount(parse("{a: 22/7, b: 10^(1/2)}"))'], seealso: ["simplify"] }, polynomialRoot: { name: "polynomialRoot", category: "Algebra", syntax: ["x=polynomialRoot(-6, 3)", "x=polynomialRoot(4, -4, 1)", "x=polynomialRoot(-8, 12, -6, 1)"], description: "Finds the roots of a univariate polynomial given by its coefficients starting from constant, linear, and so on, increasing in degree.", examples: ["a = polynomialRoot(-6, 11, -6 1)"], seealso: ["cbrt", "sqrt"] }, resolve: { name: "resolve", category: "Algebra", syntax: ["resolve(node, scope)"], description: "Recursively substitute variables in an expression tree.", examples: ['resolve(parse("1 + x"), { x: 7 })', 'resolve(parse("size(text)"), { text: "Hello World" })', 'resolve(parse("x + y"), { x: parse("3z") })', 'resolve(parse("3x"), { x: parse("y+z"), z: parse("w^y") })'], seealso: ["simplify", "evaluate"], mayThrow: ["ReferenceError"] }, simplify: { name: "simplify", category: "Algebra", syntax: ["simplify(expr)", "simplify(expr, rules)"], description: "Simplify an expression tree.", examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.evaluate({x: 2})"], seealso: ["simplifyCore", "derivative", "evaluate", "parse", "rationalize", "resolve"] }, simplifyConstant: { name: "simplifyConstant", category: "Algebra", syntax: ["simplifyConstant(expr)", "simplifyConstant(expr, options)"], description: "Replace constant subexpressions of node with their values.", examples: ['simplifyConatant("(3-3)*x")', 'simplifyConstant(parse("z-cos(tau/8)"))'], seealso: ["simplify", "simplifyCore", "evaluate"] }, simplifyCore: { name: "simplifyCore", category: "Algebra", syntax: ["simplifyCore(node)"], description: "Perform simple one-pass simplifications on an expression tree.", examples: ['simplifyCore(parse("0*x"))', 'simplifyCore(parse("(x+0)*2"))'], seealso: ["simplify", "simplifyConstant", "evaluate"] }, symbolicEqual: { name: "symbolicEqual", category: "Algebra", syntax: ["symbolicEqual(expr1, expr2)", "symbolicEqual(expr1, expr2, options)"], description: "Returns true if the difference of the expressions simplifies to 0", examples: ['symbolicEqual("x*y","y*x")', 'symbolicEqual("abs(x^2)", "x^2")', 'symbolicEqual("abs(x)", "x", {context: {abs: {trivial: true}}})'], seealso: ["simplify", "evaluate"] }, rationalize: { name: "rationalize", category: "Algebra", syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"], description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.", examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'], seealso: ["simplify"] }, slu: { name: "slu", category: "Algebra", syntax: ["slu(A, order, threshold)"], description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U", examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"], seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"] }, usolve: { name: "usolve", category: "Algebra", syntax: ["x=usolve(U, b)"], description: "Finds one solution of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.", examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"], seealso: ["usolveAll", "lup", "lusolve", "lsolve", "matrix", "sparse"] }, usolveAll: { name: "usolveAll", category: "Algebra", syntax: ["x=usolve(U, b)"], description: "Finds all solutions of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.", examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"], seealso: ["usolve", "lup", "lusolve", "lsolve", "matrix", "sparse"] }, qr: { name: "qr", category: "Algebra", syntax: ["qr(A)"], description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.", examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"], seealso: ["lup", "slu", "matrix"] }, abs: { name: "abs", category: "Arithmetic", syntax: ["abs(x)"], description: "Compute the absolute value.", examples: ["abs(3.5)", "abs(-4.2)"], seealso: ["sign"] }, add: { name: "add", category: "Operators", syntax: ["x + y", "add(x, y)"], description: "Add two values.", examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'], seealso: ["subtract"] }, cbrt: { name: "cbrt", category: "Arithmetic", syntax: ["cbrt(x)", "cbrt(x, allRoots)"], description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned", examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"], seealso: ["square", "sqrt", "cube", "multiply"] }, ceil: { name: "ceil", category: "Arithmetic", syntax: ["ceil(x)"], description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.", examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"], seealso: ["floor", "fix", "round"] }, cube: { name: "cube", category: "Arithmetic", syntax: ["cube(x)"], description: "Compute the cube of a value. The cube of x is x * x * x.", examples: ["cube(2)", "2^3", "2 * 2 * 2"], seealso: ["multiply", "square", "pow"] }, divide: { name: "divide", category: "Operators", syntax: ["x / y", "divide(x, y)"], description: "Divide two values.", examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"], seealso: ["multiply"] }, dotDivide: { name: "dotDivide", category: "Operators", syntax: ["x ./ y", "dotDivide(x, y)"], description: "Divide two values element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"], seealso: ["multiply", "dotMultiply", "divide"] }, dotMultiply: { name: "dotMultiply", category: "Operators", syntax: ["x .* y", "dotMultiply(x, y)"], description: "Multiply two values element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"], seealso: ["multiply", "divide", "dotDivide"] }, dotPow: { name: "dotPow", category: "Operators", syntax: ["x .^ y", "dotPow(x, y)"], description: "Calculates the power of x to y element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"], seealso: ["pow"] }, exp: { name: "exp", category: "Arithmetic", syntax: ["exp(x)"], description: "Calculate the exponent of a value.", examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"], seealso: ["expm", "expm1", "pow", "log"] }, expm: { name: "expm", category: "Arithmetic", syntax: ["exp(x)"], description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.", examples: ["expm([[0,2],[0,0]])"], seealso: ["exp"] }, expm1: { name: "expm1", category: "Arithmetic", syntax: ["expm1(x)"], description: "Calculate the value of subtracting 1 from the exponential value.", examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"], seealso: ["exp", "pow", "log"] }, fix: { name: "fix", category: "Arithmetic", syntax: ["fix(x)"], description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.", examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"], seealso: ["ceil", "floor", "round"] }, floor: { name: "floor", category: "Arithmetic", syntax: ["floor(x)"], description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.", examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"], seealso: ["ceil", "fix", "round"] }, gcd: { name: "gcd", category: "Arithmetic", syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"], description: "Compute the greatest common divisor.", examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"], seealso: ["lcm", "xgcd"] }, hypot: { name: "hypot", category: "Arithmetic", syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"], description: "Calculate the hypotenusa of a list with values. ", examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"], seealso: ["abs", "norm"] }, lcm: { name: "lcm", category: "Arithmetic", syntax: ["lcm(x, y)"], description: "Compute the least common multiple.", examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"], seealso: ["gcd"] }, log: { name: "log", category: "Arithmetic", syntax: ["log(x)", "log(x, base)"], description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).", examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"], seealso: ["exp", "log1p", "log2", "log10"] }, log2: { name: "log2", category: "Arithmetic", syntax: ["log2(x)"], description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.", examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"], seealso: ["exp", "log1p", "log", "log10"] }, log1p: { name: "log1p", category: "Arithmetic", syntax: ["log1p(x)", "log1p(x, base)"], description: "Calculate the logarithm of a `value+1`", examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"], seealso: ["exp", "log", "log2", "log10"] }, log10: { name: "log10", category: "Arithmetic", syntax: ["log10(x)"], description: "Compute the 10-base logarithm of a value.", examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"], seealso: ["exp", "log"] }, mod: { name: "mod", category: "Operators", syntax: ["x % y", "x mod y", "mod(x, y)"], description: "Calculates the modulus, the remainder of an integer division.", examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"], seealso: ["divide"] }, multiply: { name: "multiply", category: "Operators", syntax: ["x * y", "multiply(x, y)"], description: "multiply two values.", examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"], seealso: ["divide"] }, norm: { name: "norm", category: "Arithmetic", syntax: ["norm(x)", "norm(x, p)"], description: "Calculate the norm of a number, vector or matrix.", examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")'] }, nthRoot: { name: "nthRoot", category: "Arithmetic", syntax: ["nthRoot(a)", "nthRoot(a, root)"], description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".', examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"], seealso: ["nthRoots", "pow", "sqrt"] }, nthRoots: { name: "nthRoots", category: "Arithmetic", syntax: ["nthRoots(A)", "nthRoots(A, root)"], description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.', examples: ["nthRoots(1)", "nthRoots(1, 3)"], seealso: ["sqrt", "pow", "nthRoot"] }, pow: { name: "pow", category: "Operators", syntax: ["x ^ y", "pow(x, y)"], description: "Calculates the power of x to y, x^y.", examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)", "math.pow([[1, 2], [4, 3]], 2)", "math.pow([[1, 2], [4, 3]], -1)"], seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"] }, round: { name: "round", category: "Arithmetic", syntax: ["round(x)", "round(x, n)"], description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.", examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"], seealso: ["ceil", "floor", "fix"] }, sign: { name: "sign", category: "Arithmetic", syntax: ["sign(x)"], description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.", examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"], seealso: ["abs"] }, sqrt: { name: "sqrt", category: "Arithmetic", syntax: ["sqrt(x)"], description: "Compute the square root value. If x = y * y, then y is the square root of x.", examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"], seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"] }, sqrtm: { name: "sqrtm", category: "Arithmetic", syntax: ["sqrtm(x)"], description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.", examples: ["sqrtm([[33, 24], [48, 57]])"], seealso: ["sqrt", "abs", "square", "multiply"] }, square: { name: "square", category: "Arithmetic", syntax: ["square(x)"], description: "Compute the square of a value. The square of x is x * x.", examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"], seealso: ["multiply", "pow", "sqrt", "cube"] }, subtract: { name: "subtract", category: "Operators", syntax: ["x - y", "subtract(x, y)"], description: "subtract two values.", examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"], seealso: ["add"] }, unaryMinus: { name: "unaryMinus", category: "Operators", syntax: ["-x", "unaryMinus(x)"], description: "Inverse the sign of a value. Converts booleans and strings to numbers.", examples: ["-4.5", "-(-5.6)", '-"22"'], seealso: ["add", "subtract", "unaryPlus"] }, unaryPlus: { name: "unaryPlus", category: "Operators", syntax: ["+x", "unaryPlus(x)"], description: "Converts booleans and strings to numbers.", examples: ["+true", '+"2"'], seealso: ["add", "subtract", "unaryMinus"] }, xgcd: { name: "xgcd", category: "Arithmetic", syntax: ["xgcd(a, b)"], description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.", examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"], seealso: ["gcd", "lcm"] }, invmod: { name: "invmod", category: "Arithmetic", syntax: ["invmod(a, b)"], description: "Calculate the (modular) multiplicative inverse of a modulo b. Solution to the equation ax ≣ 1 (mod b)", examples: ["invmod(8, 12)=NaN", "invmod(7, 13)=2", "math.invmod(15151, 15122)=10429"], seealso: ["gcd", "xgcd"] }, bitAnd: { name: "bitAnd", category: "Bitwise", syntax: ["x & y", "bitAnd(x, y)"], description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0", examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"], seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] }, bitNot: { name: "bitNot", category: "Bitwise", syntax: ["~x", "bitNot(x)"], description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.", examples: ["~1", "~2", "bitNot([2, -3, 4])"], seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] }, bitOr: { name: "bitOr", category: "Bitwise", syntax: ["x | y", "bitOr(x, y)"], description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.", examples: ["5 | 3", "bitOr([1, 2, 3], 4)"], seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] }, bitXor: { name: "bitXor", category: "Bitwise", syntax: ["bitXor(x, y)"], description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.", examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"], seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"] }, leftShift: { name: "leftShift", category: "Bitwise", syntax: ["x << y", "leftShift(x, y)"], description: "Bitwise left logical shift of a value x by y number of bits.", examples: ["4 << 1", "8 >> 1"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"] }, rightArithShift: { name: "rightArithShift", category: "Bitwise", syntax: ["x >> y", "rightArithShift(x, y)"], description: "Bitwise right arithmetic shift of a value x by y number of bits.", examples: ["8 >> 1", "4 << 1", "-12 >> 2"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"] }, rightLogShift: { name: "rightLogShift", category: "Bitwise", syntax: ["x >>> y", "rightLogShift(x, y)"], description: "Bitwise right logical shift of a value x by y number of bits.", examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"] }, bellNumbers: { name: "bellNumbers", category: "Combinatorics", syntax: ["bellNumbers(n)"], description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.", examples: ["bellNumbers(3)", "bellNumbers(8)"], seealso: ["stirlingS2"] }, catalan: { name: "catalan", category: "Combinatorics", syntax: ["catalan(n)"], description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.", examples: ["catalan(3)", "catalan(8)"], seealso: ["bellNumbers"] }, composition: { name: "composition", category: "Combinatorics", syntax: ["composition(n, k)"], description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.", examples: ["composition(5, 3)"], seealso: ["combinations"] }, stirlingS2: { name: "stirlingS2", category: "Combinatorics", syntax: ["stirlingS2(n, k)"], description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.", examples: ["stirlingS2(5, 3)"], seealso: ["bellNumbers"] }, config: { name: "config", category: "Core", syntax: ["config()", "config(options)"], description: "Get configuration or change configuration.", examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"], seealso: [] }, import: { name: "import", category: "Core", syntax: ["import(functions)", "import(functions, options)"], description: "Import functions or constants from an object.", examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"], seealso: [] }, typed: { name: "typed", category: "Core", syntax: ["typed(signatures)", "typed(name, signatures)"], description: "Create a typed function.", examples: ['double = typed({ "number": f(x)=x+x })', "double(2)", 'double("hello")'], seealso: [] }, arg: { name: "arg", category: "Complex", syntax: ["arg(x)"], description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).", examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"], seealso: ["re", "im", "conj", "abs"] }, conj: { name: "conj", category: "Complex", syntax: ["conj(x)"], description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.", examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"], seealso: ["re", "im", "abs", "arg"] }, re: { name: "re", category: "Complex", syntax: ["re(x)"], description: "Get the real part of a complex number.", examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"], seealso: ["im", "conj", "abs", "arg"] }, im: { name: "im", category: "Complex", syntax: ["im(x)"], description: "Get the imaginary part of a complex number.", examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"], seealso: ["re", "conj", "abs", "arg"] }, evaluate: { name: "evaluate", category: "Expression", syntax: ["evaluate(expression)", "evaluate([expr1, expr2, expr3, ...])"], description: "Evaluate an expression or an array with expressions.", examples: ['evaluate("2 + 3")', 'evaluate("sqrt(" + 4 + ")")'], seealso: [] }, help: { name: "help", category: "Expression", syntax: ["help(object)", "help(string)"], description: "Display documentation on a function or data type.", examples: ["help(sqrt)", 'help("complex")'], seealso: [] }, distance: { name: "distance", category: "Geometry", syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2]])"], description: "Calculates the Euclidean distance between two points.", examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"], seealso: [] }, intersect: { name: "intersect", category: "Geometry", syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"], description: "Computes the intersection point of lines and/or planes.", examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"], seealso: [] }, and: { name: "and", category: "Logical", syntax: ["x and y", "and(x, y)"], description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.", examples: ["true and false", "true and true", "2 and 4"], seealso: ["not", "or", "xor"] }, not: { name: "not", category: "Logical", syntax: ["not x", "not(x)"], description: "Logical not. Flips the boolean value of given argument.", examples: ["not true", "not false", "not 2", "not 0"], seealso: ["and", "or", "xor"] }, or: { name: "or", category: "Logical", syntax: ["x or y", "or(x, y)"], description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.", examples: ["true or false", "false or false", "0 or 4"], seealso: ["not", "and", "xor"] }, xor: { name: "xor", category: "Logical", syntax: ["x xor y", "xor(x, y)"], description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.", examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"], seealso: ["not", "and", "or"] }, concat: { name: "concat", category: "Matrix", syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"], description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.", examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"], seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, count: { name: "count", category: "Matrix", syntax: ["count(x)"], description: "Count the number of elements of a matrix, array or string.", examples: ["a = [1, 2; 3, 4; 5, 6]", "count(a)", "size(a)", 'count("hello world")'], seealso: ["size"] }, cross: { name: "cross", category: "Matrix", syntax: ["cross(A, B)"], description: "Calculate the cross product for two vectors in three dimensional space.", examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"], seealso: ["multiply", "dot"] }, column: { name: "column", category: "Matrix", syntax: ["column(x, index)"], description: "Return a column from a matrix or array.", examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"], seealso: ["row", "matrixFromColumns"] }, ctranspose: { name: "ctranspose", category: "Matrix", syntax: ["x'", "ctranspose(x)"], description: "Complex Conjugate and Transpose a matrix", examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"] }, det: { name: "det", category: "Matrix", syntax: ["det(x)"], description: "Calculate the determinant of a matrix", examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"], seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, diag: { name: "diag", category: "Matrix", syntax: ["diag(x)", "diag(x, k)"], description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.", examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"], seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, diff: { name: "diff", category: "Matrix", syntax: ["diff(arr)", "diff(arr, dim)"], description: ["Create a new matrix or array with the difference of the passed matrix or array.", "Dim parameter is optional and used to indicant the dimension of the array/matrix to apply the difference", "If no dimension parameter is passed it is assumed as dimension 0", "Dimension is zero-based in javascript and one-based in the parser", "Arrays must be 'rectangular' meaning arrays like [1, 2]", "If something is passed as a matrix it will be returned as a matrix but other than that all matrices are converted to arrays"], examples: ["diff([1, 2, 4, 7, 0])", "diff([1, 2, 4, 7, 0], 0)", "diff(matrix([1, 2, 4, 7, 0]))", "diff([[1, 2], [3, 4]])", "diff([[1, 2], [3, 4]], 0)", "diff([[1, 2], [3, 4]], 1)", "diff([[1, 2], [3, 4]], bignumber(1))", "diff(matrix([[1, 2], [3, 4]]), 1)", "diff([[1, 2], matrix([3, 4])], 1)"], seealso: ["subtract", "partitionSelect"] }, dot: { name: "dot", category: "Matrix", syntax: ["dot(A, B)", "A * B"], description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn", examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"], seealso: ["multiply", "cross"] }, getMatrixDataType: { name: "getMatrixDataType", category: "Matrix", syntax: ["getMatrixDataType(x)"], description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".', examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"], seealso: ["matrix", "sparse", "typeOf"] }, identity: { name: "identity", category: "Matrix", syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"], description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.", examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"], seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, filter: { name: "filter", category: "Matrix", syntax: ["filter(x, test)"], description: "Filter items in a matrix.", examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"], seealso: ["sort", "map", "forEach"] }, flatten: { name: "flatten", category: "Matrix", syntax: ["flatten(x)"], description: "Flatten a multi dimensional matrix into a single dimensional matrix.", examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"], seealso: ["concat", "resize", "size", "squeeze"] }, forEach: { name: "forEach", category: "Matrix", syntax: ["forEach(x, callback)"], description: "Iterates over all elements of a matrix/array, and executes the given callback function.", examples: ["numberOfPets = {}", "addPet(n) = numberOfPets[n] = (numberOfPets[n] ? numberOfPets[n]:0 ) + 1;", 'forEach(["Dog","Cat","Cat"], addPet)', "numberOfPets"], seealso: ["map", "sort", "filter"] }, inv: { name: "inv", category: "Matrix", syntax: ["inv(x)"], description: "Calculate the inverse of a matrix", examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"], seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, pinv: { name: "pinv", category: "Matrix", syntax: ["pinv(x)"], description: "Calculate the Moore–Penrose inverse of a matrix", examples: ["pinv([1, 2; 3, 4])", "pinv([[1, 0], [0, 1], [0, 1]])", "pinv(4)"], seealso: ["inv"] }, eigs: { name: "eigs", category: "Matrix", syntax: ["eigs(x)"], description: "Calculate the eigenvalues and eigenvectors of a real symmetric matrix", examples: ["eigs([[5, 2.3], [2.3, 1]])"], seealso: ["inv"] }, kron: { name: "kron", category: "Matrix", syntax: ["kron(x, y)"], description: "Calculates the kronecker product of 2 matrices or vectors.", examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"], seealso: ["multiply", "dot", "cross"] }, matrixFromFunction: { name: "matrixFromFunction", category: "Matrix", syntax: ["math.matrixFromFunction(size, fn)", "math.matrixFromFunction(size, fn, format)", "math.matrixFromFunction(size, fn, format, datatype)", "math.matrixFromFunction(size, format, fn)", "math.matrixFromFunction(size, format, datatype, fn)"], description: "Create a matrix by evaluating a generating function at each index.", examples: ["f(I) = I[1] - I[2]", "matrixFromFunction([3,3], f)", "g(I) = I[1] - I[2] == 1 ? 4 : 0", 'matrixFromFunction([100, 100], "sparse", g)', "matrixFromFunction([5], random)"], seealso: ["matrix", "matrixFromRows", "matrixFromColumns", "zeros"] }, matrixFromRows: { name: "matrixFromRows", category: "Matrix", syntax: ["math.matrixFromRows(...arr)", "math.matrixFromRows(row1, row2)", "math.matrixFromRows(row1, row2, row3)"], description: "Create a dense matrix from vectors as individual rows.", examples: ["matrixFromRows([1, 2, 3], [[4],[5],[6]])"], seealso: ["matrix", "matrixFromColumns", "matrixFromFunction", "zeros"] }, matrixFromColumns: { name: "matrixFromColumns", category: "Matrix", syntax: ["math.matrixFromColumns(...arr)", "math.matrixFromColumns(row1, row2)", "math.matrixFromColumns(row1, row2, row3)"], description: "Create a dense matrix from vectors as individual columns.", examples: ["matrixFromColumns([1, 2, 3], [[4],[5],[6]])"], seealso: ["matrix", "matrixFromRows", "matrixFromFunction", "zeros"] }, map: { name: "map", category: "Matrix", syntax: ["map(x, callback)"], description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.", examples: ["map([1, 2, 3], square)"], seealso: ["filter", "forEach"] }, ones: { name: "ones", category: "Matrix", syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"], description: "Create a matrix containing ones.", examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"], seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, partitionSelect: { name: "partitionSelect", category: "Matrix", syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"], description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.", examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1)'], seealso: ["sort"] }, range: { name: "range", category: "Type", syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"], description: "Create a range. Lower bound of the range is included, upper bound is excluded.", examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, resize: { name: "resize", category: "Matrix", syntax: ["resize(x, size)", "resize(x, size, defaultValue)"], description: "Resize a matrix.", examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'], seealso: ["size", "subset", "squeeze", "reshape"] }, reshape: { name: "reshape", category: "Matrix", syntax: ["reshape(x, sizes)"], description: "Reshape a multi dimensional array to fit the specified dimensions.", examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])", "reshape([1, 2, 3, 4], [-1, 2])"], seealso: ["size", "squeeze", "resize"] }, rotate: { name: "rotate", category: "Matrix", syntax: ["rotate(w, theta)", "rotate(w, theta, v)"], description: "Returns a 2-D angle matrix (2x2) for a given angle (in radians). Returns a 2-D angle matrix (3x3) of a given angle (in radians) around given axis.", examples: ["rotate([1, 0], math.pi / 2)", 'rotate(matrix([1, 0]), unit("35deg"))', 'rotate([1, 0, 0], unit("90deg"), [0, 0, 1])', 'rotate(matrix([1, 0, 0]), unit("90deg"), matrix([0, 0, 1]))'], seealso: ["matrix", "rotationMatrix"] }, rotationMatrix: { name: "rotationMatrix", category: "Matrix", syntax: ["rotationMatrix(theta)", "rotationMatrix(theta, v)", "rotationMatrix(theta, v, format)"], description: "Returns a 2-D angle matrix (2x2) for a given angle (in radians). Returns a 2-D angle matrix (3x3) of a given angle (in radians) around given axis.", examples: ["rotationMatrix(pi / 2)", 'rotationMatrix(unit("45deg"), [0, 0, 1])', 'rotationMatrix(1, matrix([0, 0, 1]), "sparse")'], seealso: ["cos", "sin"] }, row: { name: "row", category: "Matrix", syntax: ["row(x, index)"], description: "Return a row from a matrix or array.", examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"], seealso: ["column", "matrixFromRows"] }, size: { name: "size", category: "Matrix", syntax: ["size(x)"], description: "Calculate the size of a matrix.", examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"], seealso: ["concat", "count", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"] }, sort: { name: "sort", category: "Matrix", syntax: ["sort(x)", "sort(x, compare)"], description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.', examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"])', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'], seealso: ["map", "filter", "forEach"] }, squeeze: { name: "squeeze", category: "Matrix", syntax: ["squeeze(x)"], description: "Remove inner and outer singleton dimensions from a matrix.", examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"] }, subset: { name: "subset", category: "Matrix", syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"], description: "Get or set a subset of the entries of a matrix or characters of a string. Indexes are one-based. There should be one index specification for each dimension of the target. Each specification can be a single index, a list of indices, or a range in colon notation `l:u`. In a range, both the lower bound l and upper bound u are included; and if a bound is omitted it defaults to the most extreme valid value. The cartesian product of the indices specified in each dimension determines the target of the operation.", examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]", "f[[1,2], [1,3]] = [9, 10; 11, 12]", "f"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"] }, trace: { name: "trace", category: "Matrix", syntax: ["trace(A)"], description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.", examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"] }, transpose: { name: "transpose", category: "Matrix", syntax: ["x'", "transpose(x)"], description: "Transpose a matrix", examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"] }, zeros: { name: "zeros", category: "Matrix", syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"], description: "Create a matrix containing zeros.", examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"] }, fft: { name: "fft", category: "Matrix", syntax: ["fft(x)"], description: "Calculate N-dimensional fourier transform", examples: ["fft([[1, 0], [1, 0]])"], seealso: ["ifft"] }, ifft: { name: "ifft", category: "Matrix", syntax: ["ifft(x)"], description: "Calculate N-dimensional inverse fourier transform", examples: ["ifft([[2, 2], [0, 0]])"], seealso: ["fft"] }, sylvester: { name: "sylvester", category: "Matrix", syntax: ["sylvester(A,B,C)"], description: "Solves the real-valued Sylvester equation AX+XB=C for X", examples: ["sylvester([[-1, -2], [1, 1]], [[-2, 1], [-1, 2]], [[-3, 2], [3, 0]])", "sylvester(A,B,C)"], seealso: ["schur", "lyap"] }, schur: { name: "schur", category: "Matrix", syntax: ["schur(A)"], description: "Performs a real Schur decomposition of the real matrix A = UTU'", examples: ["schur([[1, 0], [-4, 3]])", "schur(A)"], seealso: ["lyap", "sylvester"] }, lyap: { name: "lyap", category: "Matrix", syntax: ["lyap(A,Q)"], description: "Solves the Continuous-time Lyapunov equation AP+PA'+Q=0 for P", examples: ["lyap([[-2, 0], [1, -4]], [[3, 1], [1, 3]])", "lyap(A,Q)"], seealso: ["schur", "sylvester"] }, combinations: { name: "combinations", category: "Probability", syntax: ["combinations(n, k)"], description: "Compute the number of combinations of n items taken k at a time", examples: ["combinations(7, 5)"], seealso: ["combinationsWithRep", "permutations", "factorial"] }, combinationsWithRep: { name: "combinationsWithRep", category: "Probability", syntax: ["combinationsWithRep(n, k)"], description: "Compute the number of combinations of n items taken k at a time with replacements.", examples: ["combinationsWithRep(7, 5)"], seealso: ["combinations", "permutations", "factorial"] }, factorial: { name: "factorial", category: "Probability", syntax: ["n!", "factorial(n)"], description: "Compute the factorial of a value", examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"], seealso: ["combinations", "combinationsWithRep", "permutations", "gamma"] }, gamma: { name: "gamma", category: "Probability", syntax: ["gamma(n)"], description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.", examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"], seealso: ["factorial"] }, kldivergence: { name: "kldivergence", category: "Probability", syntax: ["kldivergence(x, y)"], description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.", examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"], seealso: [] }, lgamma: { name: "lgamma", category: "Probability", syntax: ["lgamma(n)"], description: "Logarithm of the gamma function for real, positive numbers and complex numbers, using Lanczos approximation for numbers and Stirling series for complex numbers.", examples: ["lgamma(4)", "lgamma(1/2)", "lgamma(math.i)", "lgamma(complex(1.1, 2))"], seealso: ["gamma"] }, multinomial: { name: "multinomial", category: "Probability", syntax: ["multinomial(A)"], description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.", examples: ["multinomial([1, 2, 1])"], seealso: ["combinations", "factorial"] }, permutations: { name: "permutations", category: "Probability", syntax: ["permutations(n)", "permutations(n, k)"], description: "Compute the number of permutations of n items taken k at a time", examples: ["permutations(5)", "permutations(5, 3)"], seealso: ["combinations", "combinationsWithRep", "factorial"] }, pickRandom: { name: "pickRandom", category: "Probability", syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"], description: "Pick a random entry from a given array.", examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"], seealso: ["random", "randomInt"] }, random: { name: "random", category: "Probability", syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"], description: "Return a random number.", examples: ["random()", "random(10, 20)", "random([2, 3])"], seealso: ["pickRandom", "randomInt"] }, randomInt: { name: "randomInt", category: "Probability", syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"], description: "Return a random integer number", examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"], seealso: ["pickRandom", "random"] }, compare: { name: "compare", category: "Relational", syntax: ["compare(x, y)"], description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"] }, compareNatural: { name: "compareNatural", category: "Relational", syntax: ["compareNatural(x, y)"], description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"] }, compareText: { name: "compareText", category: "Relational", syntax: ["compareText(x, y)"], description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'], seealso: ["compare", "compareNatural"] }, deepEqual: { name: "deepEqual", category: "Relational", syntax: ["deepEqual(x, y)"], description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.", examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"], seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"] }, equal: { name: "equal", category: "Relational", syntax: ["x == y", "equal(x, y)"], description: "Check equality of two values. Returns true if the values are equal, and false if not.", examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"], seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"] }, equalText: { name: "equalText", category: "Relational", syntax: ["equalText(x, y)"], description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.", examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'], seealso: ["compare", "compareNatural", "compareText", "equal"] }, larger: { name: "larger", category: "Relational", syntax: ["x > y", "larger(x, y)"], description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.", examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"] }, largerEq: { name: "largerEq", category: "Relational", syntax: ["x >= y", "largerEq(x, y)"], description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.", examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"], seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"] }, smaller: { name: "smaller", category: "Relational", syntax: ["x < y", "smaller(x, y)"], description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.", examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"], seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"] }, smallerEq: { name: "smallerEq", category: "Relational", syntax: ["x <= y", "smallerEq(x, y)"], description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.", examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"], seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"] }, unequal: { name: "unequal", category: "Relational", syntax: ["x != y", "unequal(x, y)"], description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.", examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"], seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"] }, setCartesian: { name: "setCartesian", category: "Set", syntax: ["setCartesian(set1, set2)"], description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays and the values will be sorted in ascending order before the operation.", examples: ["setCartesian([1, 2], [3, 4])"], seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"] }, setDifference: { name: "setDifference", category: "Set", syntax: ["setDifference(set1, set2)"], description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setIntersect", "setSymDifference"] }, setDistinct: { name: "setDistinct", category: "Set", syntax: ["setDistinct(set)"], description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setDistinct([1, 1, 1, 2, 2, 3])"], seealso: ["setMultiplicity"] }, setIntersect: { name: "setIntersect", category: "Set", syntax: ["setIntersect(set1, set2)"], description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setDifference"] }, setIsSubset: { name: "setIsSubset", category: "Set", syntax: ["setIsSubset(set1, set2)"], description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"], seealso: ["setUnion", "setIntersect", "setDifference"] }, setMultiplicity: { name: "setMultiplicity", category: "Set", syntax: ["setMultiplicity(element, set)"], description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"], seealso: ["setDistinct", "setSize"] }, setPowerset: { name: "setPowerset", category: "Set", syntax: ["setPowerset(set)"], description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setPowerset([1, 2, 3])"], seealso: ["setCartesian"] }, setSize: { name: "setSize", category: "Set", syntax: ["setSize(set)", "setSize(set, unique)"], description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.', examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"], seealso: ["setUnion", "setIntersect", "setDifference"] }, setSymDifference: { name: "setSymDifference", category: "Set", syntax: ["setSymDifference(set1, set2)"], description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setIntersect", "setDifference"] }, setUnion: { name: "setUnion", category: "Set", syntax: ["setUnion(set1, set2)"], description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setIntersect", "setDifference"] }, erf: { name: "erf", category: "Special", syntax: ["erf(x)"], description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x", examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"], seealso: [] }, cumsum: { name: "cumsum", category: "Statistics", syntax: ["cumsum(a, b, c, ...)", "cumsum(A)"], description: "Compute the cumulative sum of all values.", examples: ["cumsum(2, 3, 4, 1)", "cumsum([2, 3, 4, 1])", "cumsum([1, 2; 3, 4])", "cumsum([1, 2; 3, 4], 1)", "cumsum([1, 2; 3, 4], 2)"], seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"] }, mad: { name: "mad", category: "Statistics", syntax: ["mad(a, b, c, ...)", "mad(A)"], description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.", examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"], seealso: ["mean", "median", "std", "abs"] }, max: { name: "max", category: "Statistics", syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"], description: "Compute the maximum value of a list of values.", examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"], seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"] }, mean: { name: "mean", category: "Statistics", syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"], description: "Compute the arithmetic mean of a list of values.", examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"], seealso: ["max", "median", "min", "prod", "std", "sum", "variance"] }, median: { name: "median", category: "Statistics", syntax: ["median(a, b, c, ...)", "median(A)"], description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.", examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"], seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"] }, min: { name: "min", category: "Statistics", syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"], description: "Compute the minimum value of a list of values.", examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"], seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"] }, mode: { name: "mode", category: "Statistics", syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"], description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.", examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"], seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"] }, prod: { name: "prod", category: "Statistics", syntax: ["prod(a, b, c, ...)", "prod(A)"], description: "Compute the product of all values.", examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"], seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"] }, quantileSeq: { name: "quantileSeq", category: "Statistics", syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"], description: "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.", examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"], seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"] }, std: { name: "std", category: "Statistics", syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"], description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".', examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"], seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"] }, sum: { name: "sum", category: "Statistics", syntax: ["sum(a, b, c, ...)", "sum(A)"], description: "Compute the sum of all values.", examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"], seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"] }, variance: { name: "variance", category: "Statistics", syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, normalization)"], description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".', examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", 'variance([2, 4, 6, 8], "uncorrected")', 'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"], seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"] }, acos: { name: "acos", category: "Trigonometry", syntax: ["acos(x)"], description: "Compute the inverse cosine of a value in radians.", examples: ["acos(0.5)", "acos(cos(2.3))"], seealso: ["cos", "atan", "asin"] }, acosh: { name: "acosh", category: "Trigonometry", syntax: ["acosh(x)"], description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.", examples: ["acosh(1.5)"], seealso: ["cosh", "asinh", "atanh"] }, acot: { name: "acot", category: "Trigonometry", syntax: ["acot(x)"], description: "Calculate the inverse cotangent of a value.", examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"], seealso: ["cot", "atan"] }, acoth: { name: "acoth", category: "Trigonometry", syntax: ["acoth(x)"], description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.", examples: ["acoth(2)", "acoth(0.5)"], seealso: ["acsch", "asech"] }, acsc: { name: "acsc", category: "Trigonometry", syntax: ["acsc(x)"], description: "Calculate the inverse cotangent of a value.", examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"], seealso: ["csc", "asin", "asec"] }, acsch: { name: "acsch", category: "Trigonometry", syntax: ["acsch(x)"], description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.", examples: ["acsch(0.5)"], seealso: ["asech", "acoth"] }, asec: { name: "asec", category: "Trigonometry", syntax: ["asec(x)"], description: "Calculate the inverse secant of a value.", examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"], seealso: ["acos", "acot", "acsc"] }, asech: { name: "asech", category: "Trigonometry", syntax: ["asech(x)"], description: "Calculate the inverse secant of a value.", examples: ["asech(0.5)"], seealso: ["acsch", "acoth"] }, asin: { name: "asin", category: "Trigonometry", syntax: ["asin(x)"], description: "Compute the inverse sine of a value in radians.", examples: ["asin(0.5)", "asin(sin(0.5))"], seealso: ["sin", "acos", "atan"] }, asinh: { name: "asinh", category: "Trigonometry", syntax: ["asinh(x)"], description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.", examples: ["asinh(0.5)"], seealso: ["acosh", "atanh"] }, atan: { name: "atan", category: "Trigonometry", syntax: ["atan(x)"], description: "Compute the inverse tangent of a value in radians.", examples: ["atan(0.5)", "atan(tan(0.5))"], seealso: ["tan", "acos", "asin"] }, atanh: { name: "atanh", category: "Trigonometry", syntax: ["atanh(x)"], description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.", examples: ["atanh(0.5)"], seealso: ["acosh", "asinh"] }, atan2: { name: "atan2", category: "Trigonometry", syntax: ["atan2(y, x)"], description: "Computes the principal value of the arc tangent of y/x in radians.", examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"], seealso: ["sin", "cos", "tan"] }, cos: { name: "cos", category: "Trigonometry", syntax: ["cos(x)"], description: "Compute the cosine of x in radians.", examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"], seealso: ["acos", "sin", "tan"] }, cosh: { name: "cosh", category: "Trigonometry", syntax: ["cosh(x)"], description: "Compute the hyperbolic cosine of x in radians.", examples: ["cosh(0.5)"], seealso: ["sinh", "tanh", "coth"] }, cot: { name: "cot", category: "Trigonometry", syntax: ["cot(x)"], description: "Compute the cotangent of x in radians. Defined as 1/tan(x)", examples: ["cot(2)", "1 / tan(2)"], seealso: ["sec", "csc", "tan"] }, coth: { name: "coth", category: "Trigonometry", syntax: ["coth(x)"], description: "Compute the hyperbolic cotangent of x in radians.", examples: ["coth(2)", "1 / tanh(2)"], seealso: ["sech", "csch", "tanh"] }, csc: { name: "csc", category: "Trigonometry", syntax: ["csc(x)"], description: "Compute the cosecant of x in radians. Defined as 1/sin(x)", examples: ["csc(2)", "1 / sin(2)"], seealso: ["sec", "cot", "sin"] }, csch: { name: "csch", category: "Trigonometry", syntax: ["csch(x)"], description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)", examples: ["csch(2)", "1 / sinh(2)"], seealso: ["sech", "coth", "sinh"] }, sec: { name: "sec", category: "Trigonometry", syntax: ["sec(x)"], description: "Compute the secant of x in radians. Defined as 1/cos(x)", examples: ["sec(2)", "1 / cos(2)"], seealso: ["cot", "csc", "cos"] }, sech: { name: "sech", category: "Trigonometry", syntax: ["sech(x)"], description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)", examples: ["sech(2)", "1 / cosh(2)"], seealso: ["coth", "csch", "cosh"] }, sin: { name: "sin", category: "Trigonometry", syntax: ["sin(x)"], description: "Compute the sine of x in radians.", examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"], seealso: ["asin", "cos", "tan"] }, sinh: { name: "sinh", category: "Trigonometry", syntax: ["sinh(x)"], description: "Compute the hyperbolic sine of x in radians.", examples: ["sinh(0.5)"], seealso: ["cosh", "tanh"] }, tan: { name: "tan", category: "Trigonometry", syntax: ["tan(x)"], description: "Compute the tangent of x in radians.", examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"], seealso: ["atan", "sin", "cos"] }, tanh: { name: "tanh", category: "Trigonometry", syntax: ["tanh(x)"], description: "Compute the hyperbolic tangent of x in radians.", examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"], seealso: ["sinh", "cosh"] }, to: { name: "to", category: "Units", syntax: ["x to unit", "to(x, unit)"], description: "Change the unit of a value.", examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"], seealso: [] }, clone: { name: "clone", category: "Utils", syntax: ["clone(x)"], description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices", examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'], seealso: [] }, format: { name: "format", category: "Utils", syntax: ["format(value)", "format(value, precision)"], description: "Format a value of any type as string.", examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"], seealso: ["print"] }, bin: { name: "bin", category: "Utils", syntax: ["bin(value)"], description: "Format a number as binary", examples: ["bin(2)"], seealso: ["oct", "hex"] }, oct: { name: "oct", category: "Utils", syntax: ["oct(value)"], description: "Format a number as octal", examples: ["oct(56)"], seealso: ["bin", "hex"] }, hex: { name: "hex", category: "Utils", syntax: ["hex(value)"], description: "Format a number as hexadecimal", examples: ["hex(240)"], seealso: ["bin", "oct"] }, isNaN: { name: "isNaN", category: "Utils", syntax: ["isNaN(x)"], description: "Test whether a value is NaN (not a number)", examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"], seealso: ["isNegative", "isNumeric", "isPositive", "isZero"] }, isInteger: { name: "isInteger", category: "Utils", syntax: ["isInteger(x)"], description: "Test whether a value is an integer number.", examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"], seealso: ["isNegative", "isNumeric", "isPositive", "isZero"] }, isNegative: { name: "isNegative", category: "Utils", syntax: ["isNegative(x)"], description: "Test whether a value is negative: smaller than zero.", examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"], seealso: ["isInteger", "isNumeric", "isPositive", "isZero"] }, isNumeric: { name: "isNumeric", category: "Utils", syntax: ["isNumeric(x)"], description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.", examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")', "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'], seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue"] }, hasNumericValue: { name: "hasNumericValue", category: "Utils", syntax: ["hasNumericValue(x)"], description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.", examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")', "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", 'hasNumericValue([2.3, "foo", false])'], seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "isNumeric"] }, isPositive: { name: "isPositive", category: "Utils", syntax: ["isPositive(x)"], description: "Test whether a value is positive: larger than zero.", examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"], seealso: ["isInteger", "isNumeric", "isNegative", "isZero"] }, isPrime: { name: "isPrime", category: "Utils", syntax: ["isPrime(x)"], description: "Test whether a value is prime: has no divisors other than itself and one.", examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"], seealso: ["isInteger", "isNumeric", "isNegative", "isZero"] }, isZero: { name: "isZero", category: "Utils", syntax: ["isZero(x)"], description: "Test whether a value is zero.", examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"], seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"] }, print: { name: "print", category: "Utils", syntax: ["print(template, values)", "print(template, values, precision)"], description: "Interpolate values into a string template.", examples: ['print("Lucy is $age years old", {age: 5})', 'print("The value of pi is $pi", {pi: pi}, 3)', 'print("Hello, $user.name!", {user: {name: "John"}})', 'print("Values: $0, $1, $2", [6, 9, 4])'], seealso: ["format"] }, typeOf: { name: "typeOf", category: "Utils", syntax: ["typeOf(x)"], description: "Get the type of a variable.", examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", 'typeOf("hello world")'], seealso: ["getMatrixDataType"] }, numeric: { name: "numeric", category: "Utils", syntax: ["numeric(x)"], description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.", examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction)', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number)'], seealso: ["number", "fraction", "bignumber", "string", "format"] } }, Cm = "help", Mm = Ee(Cm, ["typed", "mathWithTransform", "Help"], (function (e) { var t = e.typed, r = e.mathWithTransform, n = e.Help; return t(Cm, { any: function (e) { var t, i = e; if ("string" != typeof e)
            for (t in r)
                if (Ne(r, t) && e === r[t]) {
                    i = t;
                    break;
                } var a = Te(Sm, i); if (!a) {
            var o = "function" == typeof i ? i.name : i;
            throw new Error('No documentation found on "' + o + '"');
        } return new n(a); } }); })), Fm = "chain", Om = Ee(Fm, ["typed", "Chain"], (function (e) { var t = e.typed, r = e.Chain; return t(Fm, { "": function () { return new r; }, any: function (e) { return new r(e); } }); })), Tm = Ee("det", ["typed", "matrix", "subtract", "multiply", "divideScalar", "isZero", "unaryMinus"], (function (e) { var t = e.typed, r = e.matrix, n = e.subtract, i = e.multiply, a = e.divideScalar, o = e.isZero, u = e.unaryMinus; return t("det", { any: function (e) { return he(e); }, "Array | Matrix": function (e) { var t; switch ((t = l(e) ? e.size() : Array.isArray(e) ? (e = r(e)).size() : []).length) {
            case 0: return he(e);
            case 1:
                if (1 === t[0])
                    return he(e.valueOf()[0]);
                throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
            case 2:
                var s = t[0];
                if (s === t[1])
                    return function (e, t, r) { if (1 === t)
                        return he(e[0][0]); if (2 === t)
                        return n(i(e[0][0], e[1][1]), i(e[1][0], e[0][1])); for (var s = !1, c = new Array(t).fill(0).map((function (e, t) { return t; })), f = 0; f < t; f++) {
                        var l = c[f];
                        if (o(e[l][f])) {
                            var p = void 0;
                            for (p = f + 1; p < t; p++)
                                if (!o(e[c[p]][f])) {
                                    l = c[p], c[p] = c[f], c[f] = l, s = !s;
                                    break;
                                }
                            if (p === t)
                                return e[l][f];
                        }
                        for (var m = e[l][f], h = 0 === f ? 1 : e[c[f - 1]][f - 1], d = f + 1; d < t; d++)
                            for (var v = c[d], y = f + 1; y < t; y++)
                                e[v][y] = a(n(i(e[v][y], m), i(e[v][f], e[l][y])), h);
                    } var g = e[c[t - 1]][t - 1]; return s ? u(g) : g; }(e.clone().valueOf(), s);
                throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
            default: throw new RangeError("Matrix must be two dimensional (size: " + Gr(t) + ")");
        } } }); })), Bm = Ee("inv", ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], (function (e) { var t = e.typed, r = e.matrix, n = e.divideScalar, i = e.addScalar, a = e.multiply, o = e.unaryMinus, u = e.det, s = e.identity, c = e.abs; return t("inv", { "Array | Matrix": function (e) { var t = l(e) ? e.size() : Qr(e); switch (t.length) {
            case 1:
                if (1 === t[0])
                    return l(e) ? r([n(1, e.valueOf()[0])]) : [n(1, e[0])];
                throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
            case 2:
                var i = t[0], a = t[1];
                if (i === a)
                    return l(e) ? r(f(e.valueOf(), i, a), e.storage()) : f(e, i, a);
                throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
            default: throw new RangeError("Matrix must be two dimensional (size: " + Gr(t) + ")");
        } }, any: function (e) { return n(1, e); } }); function f(e, t, r) { var f, l, p, m, h; if (1 === t) {
        if (0 === (m = e[0][0]))
            throw Error("Cannot calculate inverse, determinant is zero");
        return [[n(1, m)]];
    } if (2 === t) {
        var d = u(e);
        if (0 === d)
            throw Error("Cannot calculate inverse, determinant is zero");
        return [[n(e[1][1], d), n(o(e[0][1]), d)], [n(o(e[1][0]), d), n(e[0][0], d)]];
    } var v = e.concat(); for (f = 0; f < t; f++)
        v[f] = v[f].concat(); for (var y = s(t).valueOf(), g = 0; g < r; g++) {
        var x = c(v[g][g]), b = g;
        for (f = g + 1; f < t;)
            c(v[f][g]) > x && (x = c(v[f][g]), b = f), f++;
        if (0 === x)
            throw Error("Cannot calculate inverse, determinant is zero");
        (f = b) !== g && (h = v[g], v[g] = v[f], v[f] = h, h = y[g], y[g] = y[f], y[f] = h);
        var w = v[g], N = y[g];
        for (f = 0; f < t; f++) {
            var D = v[f], E = y[f];
            if (f !== g) {
                if (0 !== D[g]) {
                    for (p = n(o(D[g]), w[g]), l = g; l < r; l++)
                        D[l] = i(D[l], a(p, w[l]));
                    for (l = 0; l < r; l++)
                        E[l] = i(E[l], a(p, N[l]));
                }
            }
            else {
                for (p = w[g], l = g; l < r; l++)
                    D[l] = n(D[l], p);
                for (l = 0; l < r; l++)
                    E[l] = n(E[l], p);
            }
        }
    } return y; } })), _m = "pinv", km = Ee(_m, ["typed", "matrix", "inv", "deepEqual", "equal", "dotDivide", "dot", "ctranspose", "divideScalar", "multiply", "add", "Complex"], (function (e) { var t = e.typed, r = e.matrix, n = e.inv, i = e.deepEqual, a = e.equal, o = e.dotDivide, u = e.dot, s = e.ctranspose, c = e.divideScalar, f = e.multiply, p = e.add, m = e.Complex; return t(_m, { "Array | Matrix": function (e) { var t = l(e) ? e.size() : Qr(e); switch (t.length) {
            case 1: return v(e) ? s(e) : 1 === t[0] ? n(e) : o(s(e), u(e, e));
            case 2:
                if (v(e))
                    return s(e);
                var i = t[0], a = t[1];
                if (i === a)
                    try {
                        return n(e);
                    }
                    catch (e) {
                        if (!(e instanceof Error && e.message.match(/Cannot calculate inverse, determinant is zero/)))
                            throw e;
                    }
                return l(e) ? r(h(e.valueOf(), i, a), e.storage()) : h(e, i, a);
            default: throw new RangeError("Matrix must be two dimensional (size: " + Gr(t) + ")");
        } }, any: function (e) { return a(e, 0) ? he(e) : c(1, e); } }); function h(e, t, r) { var i = function (e, t, r) { var n = function (e, t, r) { for (var n = he(e), i = 0, a = 0; a < t; a++) {
        if (r <= i)
            return n;
        for (var u = a; d(n[u][i]);)
            if (t === ++u && (u = a, r === ++i))
                return n;
        var s = [n[a], n[u]];
        n[u] = s[0], n[a] = s[1];
        for (var c = n[a][i], l = 0; l < r; l++)
            n[a][l] = o(n[a][l], c);
        for (var m = 0; m < t; m++)
            if (m !== a) {
                c = n[m][i];
                for (var h = 0; h < r; h++)
                    n[m][h] = p(n[m][h], f(-1, f(c, n[a][h])));
            }
        i++;
    } return n; }(e, t, r); return { C: e.map((function (e, r) { return e.filter((function (e, r) { return r < t && !d(u(n[r], n[r])); })); })), F: n.filter((function (e, t) { return !d(u(n[t], n[t])); })) }; }(e, t, r), a = i.C, c = i.F, l = f(n(f(s(a), a)), s(a)), m = f(s(c), n(f(c, s(c)))); return f(m, l); } function d(e) { return a(p(e, m(1, 1)), p(0, m(1, 1))); } function v(e) { return i(p(e, m(1, 1)), p(f(e, 0), m(1, 1))); } }));
    function Im(e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return Rm(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Rm(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }
    function Rm(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    var zm = Ee("eigs", ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], (function (e) { var t = e.config, r = e.typed, n = e.matrix, s = e.addScalar, c = e.subtract, f = e.equal, l = e.abs, p = e.atan, m = e.cos, h = e.sin, d = e.multiplyScalar, v = e.divideScalar, y = e.inv, g = e.bignumber, x = e.multiply, b = e.add, w = e.larger, N = e.column, D = e.flatten, E = e.number, A = e.complex, S = e.sqrt, C = e.diag, M = e.qr, F = e.usolve, O = e.usolveAll, T = e.im, B = e.re, _ = e.smaller, k = e.matrixFromColumns, I = e.dot, R = function (e) { var t = e.config, r = e.addScalar, n = e.subtract, i = e.abs, a = e.atan, o = e.cos, u = e.sin, s = e.multiplyScalar, c = e.inv, f = e.bignumber, l = e.multiply, p = e.add; function m(e, r) { for (var n, i = e.length, a = Math.abs(r / i), o = new Array(i), u = 0; u < i; u++)
        o[u] = N(i, 0), o[u][u] = 1; for (var s = x(e); Math.abs(s[1]) >= Math.abs(a);) {
        var c = s[0][0], f = s[0][1];
        e = g(e, (l = e[c][c], p = e[f][f], m = e[c][f], h = void 0, h = p - l, n = Math.abs(h) <= t.epsilon ? Math.PI / 4 : .5 * Math.atan(2 * m / (p - l))), c, f), o = d(o, n, c, f), s = x(e);
    } for (var l, p, m, h, v = N(i, 0), y = 0; y < i; y++)
        v[y] = e[y][y]; return w(he(v), he(o)); } function h(e, r) { for (var o, u = e.length, p = i(r / u), m = new Array(u), h = 0; h < u; h++)
        m[h] = N(u, 0), m[h][h] = 1; for (var d = b(e); i(d[1]) >= i(p);) {
        var g = d[0][0], x = d[0][1];
        e = y(e, (D = e[g][g], E = e[x][x], A = e[g][x], S = void 0, S = n(E, D), o = i(S) <= t.epsilon ? f(-1).acos().div(4) : s(.5, a(l(2, A, c(S))))), g, x), m = v(m, o, g, x), d = b(e);
    } for (var D, E, A, S, C = N(u, 0), M = 0; M < u; M++)
        C[M] = e[M][M]; return w(he(C), he(m)); } function d(e, t, r, n) { for (var i = e.length, a = Math.cos(t), o = Math.sin(t), u = N(i, 0), s = N(i, 0), c = 0; c < i; c++)
        u[c] = a * e[c][r] - o * e[c][n], s[c] = o * e[c][r] + a * e[c][n]; for (var f = 0; f < i; f++)
        e[f][r] = u[f], e[f][n] = s[f]; return e; } function v(e, t, i, a) { for (var c = e.length, l = o(t), p = u(t), m = N(c, f(0)), h = N(c, f(0)), d = 0; d < c; d++)
        m[d] = n(s(l, e[d][i]), s(p, e[d][a])), h[d] = r(s(p, e[d][i]), s(l, e[d][a])); for (var v = 0; v < c; v++)
        e[v][i] = m[v], e[v][a] = h[v]; return e; } function y(e, t, i, a) { for (var c = e.length, m = f(o(t)), h = f(u(t)), d = s(m, m), v = s(h, h), y = N(c, f(0)), g = N(c, f(0)), x = l(f(2), m, h, e[i][a]), b = r(n(s(d, e[i][i]), x), s(v, e[a][a])), w = p(s(v, e[i][i]), x, s(d, e[a][a])), D = 0; D < c; D++)
        y[D] = n(s(m, e[i][D]), s(h, e[a][D])), g[D] = r(s(h, e[i][D]), s(m, e[a][D])); e[i][i] = b, e[a][a] = w, e[i][a] = f(0), e[a][i] = f(0); for (var E = 0; E < c; E++)
        E !== i && E !== a && (e[i][E] = y[E], e[E][i] = y[E], e[a][E] = g[E], e[E][a] = g[E]); return e; } function g(e, t, r, n) { for (var i = e.length, a = Math.cos(t), o = Math.sin(t), u = a * a, s = o * o, c = N(i, 0), f = N(i, 0), l = u * e[r][r] - 2 * a * o * e[r][n] + s * e[n][n], p = s * e[r][r] + 2 * a * o * e[r][n] + u * e[n][n], m = 0; m < i; m++)
        c[m] = a * e[r][m] - o * e[n][m], f[m] = o * e[r][m] + a * e[n][m]; e[r][r] = l, e[n][n] = p, e[r][n] = 0, e[n][r] = 0; for (var h = 0; h < i; h++)
        h !== r && h !== n && (e[r][h] = c[h], e[h][r] = c[h], e[n][h] = f[h], e[h][n] = f[h]); return e; } function x(e) { for (var t = e.length, r = 0, n = [0, 1], i = 0; i < t; i++)
        for (var a = i + 1; a < t; a++)
            Math.abs(r) < Math.abs(e[i][a]) && (r = Math.abs(e[i][a]), n = [i, a]); return [n, r]; } function b(e) { for (var t = e.length, r = 0, n = [0, 1], a = 0; a < t; a++)
        for (var o = a + 1; o < t; o++)
            i(r) < i(e[a][o]) && (r = i(e[a][o]), n = [a, o]); return [n, r]; } function w(e, t) { for (var r = e.length, n = Array(r), a = Array(r), o = 0; o < r; o++)
        a[o] = Array(r); for (var u = 0; u < r; u++) {
        for (var s = 0, c = e[0], f = 0; f < e.length; f++)
            i(e[f]) < i(c) && (c = e[s = f]);
        n[u] = e.splice(s, 1)[0];
        for (var l = 0; l < r; l++)
            a[l][u] = t[l][s], t[l].splice(s, 1);
    } return { values: n, vectors: a }; } function N(e, t) { for (var r = new Array(e), n = 0; n < e; n++)
        r[n] = t; return r; } return function (e, r) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.epsilon, i = arguments.length > 3 ? arguments[3] : void 0; if ("number" === i)
        return m(e, n); if ("BigNumber" === i)
        return h(e, n); throw TypeError("Unsupported data type: " + i); }; }({ config: t, addScalar: s, subtract: c, column: N, flatten: D, equal: f, abs: l, atan: p, cos: m, sin: h, multiplyScalar: d, inv: y, bignumber: g, complex: A, multiply: x, add: b }), z = function (e) { var t = e.addScalar, r = e.subtract, n = e.flatten, i = e.multiply, a = e.multiplyScalar, o = e.divideScalar, u = e.sqrt, s = e.abs, c = e.bignumber, f = e.diag, l = e.inv, p = e.qr, m = e.usolve, h = e.usolveAll, d = e.equal, v = e.complex, y = e.larger, g = e.smaller, x = e.matrixFromColumns, b = e.dot; function w(e, t, n, i, a, o, u, f) { var l = "BigNumber" === f, p = "Complex" === f, m = l ? c(0) : p ? v(0) : 0, h = l ? c(1) : p ? v(1) : 1; if (g(s(n), u))
        return [[h, m], [m, h]]; if (y(s(r(a, o)), u))
        return [[r(a, i), r(o, i)], [n, n]]; var d = r(e, a), x = r(t, a), b = r(n, a), w = r(i, a); return g(s(x), u) ? [[d, h], [b, m]] : [[x, m], [w, h]]; } function N(e, t) { for (var r = 0; r < e.length; r++) {
        var n;
        (n = e[r]).push.apply(n, rs(Array(t - e[r].length).fill(0)));
    } for (var i = e.length; i < t; i++)
        e.push(Array(t).fill(0)), e[i][i] = 1; return e; } function D(e, t, r) { for (var n = 0; n < e.length; n++)
        if (r(e[n], t))
            return n; return -1; } function E(e, t, r, n, i) { for (var a, o = "BigNumber" === i ? c(1e3) : 1e3, u = 0; a = A(t, r, i), a = m(e, a), !y(C(a), o);)
        if (++u >= 5)
            return null; for (u = 0;;) {
        var s = m(e, a);
        if (g(C(S(a, [s])), n))
            break;
        if (++u >= 10)
            return null;
        a = M(s);
    } return a; } function A(e, t, r) { var n = "BigNumber" === r, i = "Complex" === r, a = Array(e).fill(0).map((function (e) { return 2 * Math.random() - 1; })); return n && (a = a.map((function (e) { return c(e); }))), i && (a = a.map((function (e) { return v(e); }))), M(a = S(a, t), r); } function S(e, t) { var n, a = Im(t); try {
        for (a.s(); !(n = a.n()).done;) {
            var u = n.value;
            e = r(e, i(o(b(u, e), b(u, u)), u));
        }
    }
    catch (e) {
        a.e(e);
    }
    finally {
        a.f();
    } return e; } function C(e) { return s(u(b(e, e))); } function M(e, t) { var r = "Complex" === t, n = "BigNumber" === t ? c(1) : r ? v(1) : 1; return i(o(n, C(e)), e); } return function (e, m, b, A, S) { void 0 === S && (S = !0); var C = function (e, r, n, i, u) { var l, p = "BigNumber" === i, m = "Complex" === i, h = p ? c(0) : 0, x = p ? c(1) : m ? v(1) : 1, b = p ? c(1) : 1, w = p ? c(10) : 2, N = a(w, w); u && (l = Array(r).fill(x)); for (var D = !1; !D;) {
        D = !0;
        for (var E = 0; E < r; E++) {
            for (var A = h, S = h, C = 0; C < r; C++)
                if (E !== C) {
                    var M = s(e[E][C]);
                    A = t(A, M), S = t(S, M);
                }
            if (!d(A, 0) && !d(S, 0)) {
                for (var F = b, O = A, T = o(S, w), B = a(S, w); g(O, T);)
                    O = a(O, N), F = a(F, w);
                for (; y(O, B);)
                    O = o(O, N), F = o(F, w);
                if (g(o(t(O, S), F), a(t(A, S), .95))) {
                    D = !1;
                    for (var _ = o(1, F), k = 0; k < r; k++)
                        E !== k && (e[E][k] = a(e[E][k], F), e[k][E] = a(e[k][E], _));
                    u && (l[E] = a(l[E], F));
                }
            }
        }
    } return f(l); }(e, m, 0, A, S); !function (e, n, i, u, f, l) { var p = "BigNumber" === u, m = "Complex" === u, h = p ? c(0) : m ? v(0) : 0; p && (i = c(i)); for (var d = 0; d < n - 2; d++) {
        for (var y = 0, x = h, b = d + 1; b < n; b++) {
            var w = e[b][d];
            g(s(x), s(w)) && (x = w, y = b);
        }
        if (!g(s(x), i)) {
            if (y !== d + 1) {
                var N = e[y];
                e[y] = e[d + 1], e[d + 1] = N;
                for (var D = 0; D < n; D++) {
                    var E = e[D][y];
                    e[D][y] = e[D][d + 1], e[D][d + 1] = E;
                }
                if (f) {
                    var A = l[y];
                    l[y] = l[d + 1], l[d + 1] = A;
                }
            }
            for (var S = d + 2; S < n; S++) {
                var C = o(e[S][d], x);
                if (0 !== C) {
                    for (var M = 0; M < n; M++)
                        e[S][M] = r(e[S][M], a(C, e[d + 1][M]));
                    for (var F = 0; F < n; F++)
                        e[F][d + 1] = t(e[F][d + 1], a(C, e[F][S]));
                    if (f)
                        for (var O = 0; O < n; O++)
                            l[S][O] = r(l[S][O], a(C, l[d + 1][O]));
                }
            }
        }
    } }(e, m, b, A, S, C); var M, F = function (e, n, o, l, m) { var h = "BigNumber" === l, d = "Complex" === l, y = h ? c(1) : d ? v(1) : 1; h && (o = c(o)); for (var x, b, D, E, A, S, C, M, F = he(e), O = [], T = n, B = [], _ = m ? f(Array(n).fill(y)) : void 0, k = m ? f(Array(T).fill(y)) : void 0, I = 0; I <= 100;) {
        I += 1;
        for (var R = 0; R < T; R++)
            F[R][R] = r(F[R][R], 0);
        var z = p(F), q = z.Q, j = z.R;
        F = i(j, q);
        for (var P = 0; P < T; P++)
            F[P][P] = t(F[P][P], 0);
        if (m && (k = i(k, q)), 1 === T || g(s(F[T - 1][T - 2]), o)) {
            I = 0, O.push(F[T - 1][T - 1]), m && (B.unshift([[1]]), N(k, n), _ = i(_, k), T > 1 && (k = f(Array(T - 1).fill(y)))), T -= 1, F.pop();
            for (var L = 0; L < T; L++)
                F[L].pop();
        }
        else if (2 === T || g(s(F[T - 2][T - 3]), o)) {
            I = 0;
            var U = (x = F[T - 2][T - 2], b = F[T - 2][T - 1], D = F[T - 1][T - 2], E = F[T - 1][T - 1], A = void 0, S = void 0, C = void 0, M = void 0, A = t(x, E), S = r(a(x, E), a(b, D)), C = a(A, .5), M = a(u(r(a(A, A), a(4, S))), .5), [t(C, M), r(C, M)]);
            O.push.apply(O, rs(U)), m && (B.unshift(w(F[T - 2][T - 2], F[T - 2][T - 1], F[T - 1][T - 2], F[T - 1][T - 1], U[0], U[1], o, l)), N(k, n), _ = i(_, k), T > 2 && (k = f(Array(T - 2).fill(y)))), T -= 2, F.pop(), F.pop();
            for (var $ = 0; $ < T; $++)
                F[$].pop(), F[$].pop();
        }
        if (0 === T)
            break;
    } if (O.sort((function (e, t) { return +r(s(e), s(t)); })), I > 100) {
        var H = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + O.join(", "));
        throw H.values = O, H.vectors = [], H;
    } var G = m ? i(_, function (e, t) { for (var r = [], n = 0; n < t; n++)
        r[n] = Array(t).fill(0); var i, a = 0, o = Im(e); try {
        for (o.s(); !(i = o.n()).done;) {
            for (var u = i.value, s = u.length, c = 0; c < s; c++)
                for (var f = 0; f < s; f++)
                    r[a + c][a + f] = u[c][f];
            a += s;
        }
    }
    catch (e) {
        o.e(e);
    }
    finally {
        o.f();
    } return r; }(B, n)) : void 0; return { values: O, C: G }; }(e, m, b, A, S), O = F.values, T = F.C; return S && (M = function (e, t, a, o, u, s, p) { var m, y = l(a), g = i(y, e, a), x = "BigNumber" === p, b = "Complex" === p, w = x ? c(0) : b ? v(0) : 0, N = x ? c(1) : b ? v(1) : 1, A = [], S = [], C = Im(u); try {
        for (C.s(); !(m = C.n()).done;) {
            var M = m.value, F = D(A, M, d);
            -1 === F ? (A.push(M), S.push(1)) : S[F] += 1;
        }
    }
    catch (z) {
        C.e(z);
    }
    finally {
        C.f();
    } for (var O = [], T = A.length, B = Array(t).fill(w), _ = f(Array(t).fill(N)), k = [], I = function (e) { var u = A[e], c = r(g, i(u, _)), f = h(c, B); for (f.shift(); f.length < S[e];) {
        var m = E(c, t, f, s, p);
        if (null == m) {
            k.push(u);
            break;
        }
        f.push(m);
    } var d = i(l(o), a); f = f.map((function (e) { return i(d, e); })), O.push.apply(O, rs(f.map((function (e) { return n(e); })))); }, R = 0; R < T; R++)
        I(R); if (0 !== k.length) {
        var z = new Error("Failed to find eigenvectors for the following eigenvalues: " + k.join(", "));
        throw z.values = u, z.vectors = O, z;
    } return O; }(e, m, T, C, O, b, A), M = x.apply(void 0, rs(M))), { values: O, vectors: M }; }; }({ config: t, addScalar: s, subtract: c, multiply: x, multiplyScalar: d, flatten: D, divideScalar: v, sqrt: S, abs: l, bignumber: g, diag: C, qr: M, inv: y, usolve: F, usolveAll: O, equal: f, complex: A, larger: w, smaller: _, matrixFromColumns: k, dot: I }); return r("eigs", { Array: function (e) { return q(n(e)); }, "Array, number|BigNumber": function (e, t) { return q(n(e), t); }, Matrix: function (e) { var t = q(e), r = t.values, i = t.vectors; return { values: n(r), vectors: n(i) }; }, "Matrix, number|BigNumber": function (e, t) { var r = q(e, t), i = r.values, a = r.vectors; return { values: n(i), vectors: n(a) }; } }); function q(e, r) { void 0 === r && (r = t.epsilon); var n = e.size(); if (2 !== n.length || n[0] !== n[1])
        throw new RangeError("Matrix must be square (size: " + Gr(n) + ")"); var i = e.toArray(), a = n[0]; if (function (e, t, r) { for (var n = 0; n < t; n++)
        for (var i = 0; i < t; i++)
            if (w(g(l(T(e[n][i]))), r))
                return !1; return !0; }(i, a, r) && (function (e, t) { for (var r = 0; r < t; r++)
        for (var n = 0; n < t; n++)
            e[r][n] = B(e[r][n]); }(i, a), function (e, t, r) { for (var n = 0; n < t; n++)
        for (var i = n; i < t; i++)
            if (w(g(l(c(e[n][i], e[i][n]))), r))
                return !1; return !0; }(i, a, r))) {
        var o = j(e, i, a);
        return R(i, a, r, o);
    } var u = j(e, i, a); return z(i, a, r, u); } function j(e, t, r) { var n = e.datatype(); if ("number" === n || "BigNumber" === n || "Complex" === n)
        return n; for (var s = !1, c = !1, f = !1, l = 0; l < r; l++)
        for (var p = 0; p < r; p++) {
            var m = t[l][p];
            if (i(m) || u(m))
                s = !0;
            else if (a(m))
                c = !0;
            else {
                if (!o(m))
                    throw TypeError("Unsupported type in Matrix: " + H(m));
                f = !0;
            }
        } if (c && f && console.warn("Complex BigNumbers not supported, this operation will lose precission."), f) {
        for (var h = 0; h < r; h++)
            for (var d = 0; d < r; d++)
                t[h][d] = A(t[h][d]);
        return "Complex";
    } if (c) {
        for (var v = 0; v < r; v++)
            for (var y = 0; y < r; y++)
                t[v][y] = g(t[v][y]);
        return "BigNumber";
    } if (s) {
        for (var x = 0; x < r; x++)
            for (var b = 0; b < r; b++)
                t[x][b] = E(t[x][b]);
        return "number";
    } throw TypeError("Matrix contains unsupported types only."); } })), qm = "expm", jm = Ee(qm, ["typed", "abs", "add", "identity", "inv", "multiply"], (function (e) { var t = e.typed, r = e.abs, n = e.add, i = e.identity, a = e.inv, o = e.multiply; return t(qm, { Matrix: function (e) { var t = e.size(); if (2 !== t.length || t[0] !== t[1])
            throw new RangeError("Matrix must be square (size: " + Gr(t) + ")"); for (var s = t[0], c = function (e) { for (var t = e.size()[0], n = 0, i = 0; i < t; i++) {
            for (var a = 0, o = 0; o < t; o++)
                a += r(e.get([i, o]));
            n = Math.max(a, n);
        } return n; }(e), f = function (e, t) { for (var r = 0; r < 30; r++)
            for (var n = 0; n <= r; n++) {
                var i = r - n;
                if (u(e, n, i) < 1e-15)
                    return { q: n, j: i };
            } throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)"); }(c), l = f.q, p = f.j, m = o(e, Math.pow(2, -p)), d = i(s), v = i(s), y = 1, g = m, x = -1, b = 1; b <= l; b++)
            b > 1 && (g = o(g, m), x = -x), d = n(d, o(y = y * (l - b + 1) / ((2 * l - b + 1) * b), g)), v = n(v, o(y * x, g)); for (var w = o(a(v), d), N = 0; N < p; N++)
            w = o(w, w); return h(e) ? e.createSparseMatrix(w) : w; } }); function u(e, t, r) { for (var n = 1, i = 2; i <= t; i++)
        n *= i; for (var a = n, o = t + 1; o <= 2 * t; o++)
        a *= o; var u = a * (2 * t + 1); return 8 * Math.pow(e / Math.pow(2, r), 2 * t) * n * n / (a * u); } })), Pm = "sqrtm", Lm = Ee(Pm, ["typed", "abs", "add", "multiply", "map", "sqrt", "subtract", "inv", "size", "max", "identity"], (function (e) { var t = e.typed, r = e.abs, n = e.add, i = e.multiply, a = e.map, o = e.sqrt, u = e.subtract, s = e.inv, c = e.size, f = e.max, p = e.identity, m = 1e-6; function h(e) { var t, a = 0, o = e, l = p(c(e)); do {
        var h = o;
        if (o = i(.5, n(h, s(l))), l = i(.5, n(l, s(h))), (t = f(r(u(o, h)))) > m && ++a > 1e3)
            throw new Error("computing square root of matrix: iterative method could not converge");
    } while (t > m); return o; } return t(Pm, { "Array | Matrix": function (e) { var t = l(e) ? e.size() : Qr(e); switch (t.length) {
            case 1:
                if (1 === t[0])
                    return a(e, o);
                throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
            case 2:
                if (t[0] === t[1])
                    return h(e);
                throw new RangeError("Matrix must be square (size: " + Gr(t) + ")");
            default: throw new RangeError("Matrix must be at most two dimensional (size: " + Gr(t) + ")");
        } } }); })), Um = "sylvester", $m = Ee(Um, ["typed", "schur", "matrixFromColumns", "matrix", "multiply", "range", "concat", "transpose", "index", "subset", "add", "subtract", "identity", "lusolve", "abs"], (function (e) { var t = e.typed, r = e.schur, n = e.matrixFromColumns, i = e.matrix, a = e.multiply, o = e.range, u = e.concat, s = e.transpose, c = e.index, f = e.subset, l = e.add, p = e.subtract, m = e.identity, h = e.lusolve, d = e.abs; return t(Um, { "Matrix, Matrix, Matrix": v, "Array, Matrix, Matrix": function (e, t, r) { return v(i(e), t, r); }, "Array, Array, Matrix": function (e, t, r) { return v(i(e), i(t), r); }, "Array, Matrix, Array": function (e, t, r) { return v(i(e), t, i(r)); }, "Matrix, Array, Matrix": function (e, t, r) { return v(e, i(t), r); }, "Matrix, Array, Array": function (e, t, r) { return v(e, i(t), i(r)); }, "Matrix, Matrix, Array": function (e, t, r) { return v(e, t, i(r)); }, "Array, Array, Array": function (e, t, r) { return v(i(e), i(t), i(r)).toArray(); } }); function v(e, t, v) { for (var y = t.size()[0], g = e.size()[0], x = r(e), b = x.T, w = x.U, N = r(a(-1, t)), D = N.T, E = N.U, A = a(a(s(w), v), E), S = o(0, g), C = [], M = function (e, t) { return u(e, t, 1); }, F = function (e, t) { return u(e, t, 0); }, O = 0; O < y; O++)
        if (O < y - 1 && d(f(D, c(O + 1, O))) > 1e-5) {
            for (var T = F(f(A, c(S, O)), f(A, c(S, O + 1))), B = 0; B < O; B++)
                T = l(T, F(a(C[B], f(D, c(B, O))), a(C[B], f(D, c(B, O + 1)))));
            var _ = a(m(g), a(-1, f(D, c(O, O)))), k = a(m(g), a(-1, f(D, c(O + 1, O)))), I = a(m(g), a(-1, f(D, c(O, O + 1)))), R = a(m(g), a(-1, f(D, c(O + 1, O + 1)))), z = F(M(l(b, _), k), M(I, l(b, R))), q = h(z, T);
            C[O] = q.subset(c(o(0, g), 0)), C[O + 1] = q.subset(c(o(g, 2 * g), 0)), O++;
        }
        else {
            for (var j = f(A, c(S, O)), P = 0; P < O; P++)
                j = l(j, a(C[P], f(D, c(P, O))));
            var L = f(D, c(O, O)), U = p(b, a(L, m(g)));
            C[O] = h(U, j);
        } var $ = i(n.apply(void 0, C)); return a(w, a($, s(E))); } })), Hm = "schur", Gm = Ee(Hm, ["typed", "matrix", "identity", "multiply", "qr", "norm", "subtract"], (function (e) { var t = e.typed, r = e.matrix, n = e.identity, i = e.multiply, a = e.qr, o = e.norm, u = e.subtract; return t(Hm, { Array: function (e) { var t = s(r(e)); return { U: t.U.valueOf(), T: t.T.valueOf() }; }, Matrix: function (e) { return s(e); } }); function s(e) { var t, r = e.size()[0], s = e, c = n(r), f = 0; do {
        t = s;
        var l = a(s), p = l.Q, m = l.R;
        if (s = i(m, p), c = i(c, p), f++ > 100)
            break;
    } while (o(u(s, t)) > 1e-4); return { U: c, T: s }; } })), Vm = "lyap", Zm = Ee(Vm, ["typed", "matrix", "sylvester", "multiply", "transpose"], (function (e) { var t = e.typed, r = e.matrix, n = e.sylvester, i = e.multiply, a = e.transpose; return t(Vm, { "Matrix, Matrix": function (e, t) { return n(e, a(e), i(-1, t)); }, "Array, Matrix": function (e, t) { return n(r(e), a(r(e)), i(-1, t)); }, "Matrix, Array": function (e, t) { return n(e, a(r(e)), r(i(-1, t))); }, "Array, Array": function (e, t) { return n(r(e), a(r(e)), r(i(-1, t))).toArray(); } }); })), Wm = Ee("divide", ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], (function (e) { var t = e.typed, r = e.matrix, n = e.multiply, i = e.equalScalar, a = e.divideScalar, o = e.inv, u = la({ typed: t, equalScalar: i }), s = ma({ typed: t }); return t("divide", ve({ "Array | Matrix, Array | Matrix": function (e, t) { return n(e, o(t)); }, "DenseMatrix, any": function (e, t) { return s(e, t, a, !1); }, "SparseMatrix, any": function (e, t) { return u(e, t, a, !1); }, "Array, any": function (e, t) { return s(r(e), t, a, !1).valueOf(); }, "any, Array | Matrix": function (e, t) { return n(e, o(t)); } }, a.signatures)); })), Jm = "distance", Ym = Ee(Jm, ["typed", "addScalar", "subtract", "divideScalar", "multiplyScalar", "unaryMinus", "sqrt", "abs"], (function (e) { var t = e.typed, r = e.addScalar, n = e.subtract, i = e.multiplyScalar, o = e.divideScalar, u = e.unaryMinus, s = e.sqrt, c = e.abs; return t(Jm, { "Array, Array, Array": function (e, t, r) { if (2 === e.length && 2 === t.length && 2 === r.length) {
            if (!l(e))
                throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
            if (!l(t))
                throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
            if (!l(r))
                throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
            var a = o(n(r[1], r[0]), n(t[1], t[0])), s = i(i(a, a), t[0]), c = u(i(a, t[0])), f = e[1];
            return v(e[0], e[1], s, c, f);
        } throw new TypeError("Invalid Arguments: Try again"); }, "Object, Object, Object": function (e, t, r) { if (2 === Object.keys(e).length && 2 === Object.keys(t).length && 2 === Object.keys(r).length) {
            if (!l(e))
                throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
            if (!l(t))
                throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers");
            if (!l(r))
                throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers");
            if ("pointX" in e && "pointY" in e && "lineOnePtX" in t && "lineOnePtY" in t && "lineTwoPtX" in r && "lineTwoPtY" in r) {
                var a = o(n(r.lineTwoPtY, r.lineTwoPtX), n(t.lineOnePtY, t.lineOnePtX)), s = i(i(a, a), t.lineOnePtX), c = u(i(a, t.lineOnePtX)), f = e.pointX;
                return v(e.pointX, e.pointY, s, c, f);
            }
            throw new TypeError("Key names do not match");
        } throw new TypeError("Invalid Arguments: Try again"); }, "Array, Array": function (e, t) { if (2 === e.length && 3 === t.length) {
            if (!l(e))
                throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
            if (!p(t))
                throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
            return v(e[0], e[1], t[0], t[1], t[2]);
        } if (3 === e.length && 6 === t.length) {
            if (!p(e))
                throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
            if (!h(t))
                throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument");
            return y(e[0], e[1], e[2], t[0], t[1], t[2], t[3], t[4], t[5]);
        } if (e.length === t.length && e.length > 0) {
            if (!m(e))
                throw new TypeError("All values of an array should be numbers or BigNumbers");
            if (!m(t))
                throw new TypeError("All values of an array should be numbers or BigNumbers");
            return g(e, t);
        } throw new TypeError("Invalid Arguments: Try again"); }, "Object, Object": function (e, t) { if (2 === Object.keys(e).length && 3 === Object.keys(t).length) {
            if (!l(e))
                throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
            if (!p(t))
                throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers");
            if ("pointX" in e && "pointY" in e && "xCoeffLine" in t && "yCoeffLine" in t && "constant" in t)
                return v(e.pointX, e.pointY, t.xCoeffLine, t.yCoeffLine, t.constant);
            throw new TypeError("Key names do not match");
        } if (3 === Object.keys(e).length && 6 === Object.keys(t).length) {
            if (!p(e))
                throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers");
            if (!h(t))
                throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers");
            if ("pointX" in e && "pointY" in e && "x0" in t && "y0" in t && "z0" in t && "a" in t && "b" in t && "c" in t)
                return y(e.pointX, e.pointY, e.pointZ, t.x0, t.y0, t.z0, t.a, t.b, t.c);
            throw new TypeError("Key names do not match");
        } if (2 === Object.keys(e).length && 2 === Object.keys(t).length) {
            if (!l(e))
                throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers");
            if (!l(t))
                throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers");
            if ("pointOneX" in e && "pointOneY" in e && "pointTwoX" in t && "pointTwoY" in t)
                return g([e.pointOneX, e.pointOneY], [t.pointTwoX, t.pointTwoY]);
            throw new TypeError("Key names do not match");
        } if (3 === Object.keys(e).length && 3 === Object.keys(t).length) {
            if (!p(e))
                throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers");
            if (!p(t))
                throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers");
            if ("pointOneX" in e && "pointOneY" in e && "pointOneZ" in e && "pointTwoX" in t && "pointTwoY" in t && "pointTwoZ" in t)
                return g([e.pointOneX, e.pointOneY, e.pointOneZ], [t.pointTwoX, t.pointTwoY, t.pointTwoZ]);
            throw new TypeError("Key names do not match");
        } throw new TypeError("Invalid Arguments: Try again"); }, Array: function (e) { if (!function (e) { if (2 === e[0].length && f(e[0][0]) && f(e[0][1])) {
            if (e.some((function (e) { return 2 !== e.length || !f(e[0]) || !f(e[1]); })))
                return !1;
        }
        else {
            if (!(3 === e[0].length && f(e[0][0]) && f(e[0][1]) && f(e[0][2])))
                return !1;
            if (e.some((function (e) { return 3 !== e.length || !f(e[0]) || !f(e[1]) || !f(e[2]); })))
                return !1;
        } return !0; }(e))
            throw new TypeError("Incorrect array format entered for pairwise distance calculation"); return function (e) { for (var t = [], r = [], n = [], i = 0; i < e.length - 1; i++)
            for (var a = i + 1; a < e.length; a++)
                2 === e[0].length ? (r = [e[i][0], e[i][1]], n = [e[a][0], e[a][1]]) : 3 === e[0].length && (r = [e[i][0], e[i][1], e[i][2]], n = [e[a][0], e[a][1], e[a][2]]), t.push(g(r, n)); return t; }(e); } }); function f(e) { return "number" == typeof e || a(e); } function l(e) { return e.constructor !== Array && (e = d(e)), f(e[0]) && f(e[1]); } function p(e) { return e.constructor !== Array && (e = d(e)), f(e[0]) && f(e[1]) && f(e[2]); } function m(e) { return Array.isArray(e) || (e = d(e)), e.every(f); } function h(e) { return e.constructor !== Array && (e = d(e)), f(e[0]) && f(e[1]) && f(e[2]) && f(e[3]) && f(e[4]) && f(e[5]); } function d(e) { for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++)
        r.push(e[t[n]]); return r; } function v(e, t, n, a, u) { var f = c(r(r(i(n, e), i(a, t)), u)), l = s(r(i(n, n), i(a, a))); return o(f, l); } function y(e, t, a, u, c, f, l, p, m) { var h = [n(i(n(c, t), m), i(n(f, a), p)), n(i(n(f, a), l), i(n(u, e), m)), n(i(n(u, e), p), i(n(c, t), l))]; h = s(r(r(i(h[0], h[0]), i(h[1], h[1])), i(h[2], h[2]))); var d = s(r(r(i(l, l), i(p, p)), i(m, m))); return o(h, d); } function g(e, t) { for (var a = e.length, o = 0, u = 0, c = 0; c < a; c++)
        u = n(e[c], t[c]), o = r(i(u, u), o); return s(o); } })), Xm = Ee("intersect", ["typed", "config", "abs", "add", "addScalar", "matrix", "multiply", "multiplyScalar", "divideScalar", "subtract", "smaller", "equalScalar", "flatten", "isZero", "isNumeric"], (function (e) { var t = e.typed, r = e.config, n = e.abs, i = e.add, a = e.addScalar, o = e.matrix, u = e.multiply, s = e.multiplyScalar, c = e.divideScalar, f = e.subtract, l = e.smaller, p = e.equalScalar, m = e.flatten, h = e.isZero, d = e.isNumeric; return t("intersect", { "Array, Array, Array": v, "Array, Array, Array, Array": y, "Matrix, Matrix, Matrix": function (e, t, r) { var n = v(e.valueOf(), t.valueOf(), r.valueOf()); return null === n ? null : o(n); }, "Matrix, Matrix, Matrix, Matrix": function (e, t, r, n) { var i = y(e.valueOf(), t.valueOf(), r.valueOf(), n.valueOf()); return null === i ? null : o(i); } }); function v(e, t, r) { if (e = g(e), t = g(t), r = g(r), !b(e))
        throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument"); if (!b(t))
        throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument"); if (!function (e) { return 4 === e.length && d(e[0]) && d(e[1]) && d(e[2]) && d(e[3]); }(r))
        throw new TypeError("Array with 4 numbers expected as third argument"); return function (e, t, r, n, i, o, u, l, p, m) { var h = s(e, u), d = s(n, u), v = s(t, l), y = s(i, l), g = s(r, p), x = s(o, p), b = f(f(f(m, h), v), g), w = f(f(f(a(a(d, y), x), h), v), g), N = c(b, w); return [a(e, s(N, f(n, e))), a(t, s(N, f(i, t))), a(r, s(N, f(o, r)))]; }(e[0], e[1], e[2], t[0], t[1], t[2], r[0], r[1], r[2], r[3]); } function y(e, t, o, m) { if (e = g(e), t = g(t), o = g(o), m = g(m), 2 === e.length) {
        if (!x(e))
            throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
        if (!x(t))
            throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
        if (!x(o))
            throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
        if (!x(m))
            throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument");
        return function (e, t, o, p) { var m = e, d = o, v = f(m, t), y = f(d, p), g = f(s(v[0], y[1]), s(y[0], v[1])); if (h(g))
            return null; if (l(n(g), r.epsilon))
            return null; var x = s(y[0], m[1]), b = s(y[1], m[0]), w = s(y[0], d[1]), N = s(y[1], d[0]), D = c(a(f(f(x, b), w), N), g); return i(u(v, D), m); }(e, t, o, m);
    } if (3 === e.length) {
        if (!b(e))
            throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
        if (!b(t))
            throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
        if (!b(o))
            throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument");
        if (!b(m))
            throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument");
        return function (e, t, r, n, i, o, u, l, m, d, v, y) { var g = w(e, u, d, u, t, l, v, l, r, m, y, m), x = w(d, u, n, e, v, l, i, t, y, m, o, r), b = w(e, u, n, e, t, l, i, t, r, m, o, r), N = w(d, u, d, u, v, l, v, l, y, m, y, m), D = w(n, e, n, e, i, t, i, t, o, r, o, r), E = f(s(g, x), s(b, N)), A = f(s(D, N), s(x, x)); if (h(A))
            return null; var S = c(E, A), C = c(a(g, s(S, x)), N), M = a(e, s(S, f(n, e))), F = a(t, s(S, f(i, t))), O = a(r, s(S, f(o, r))), T = a(u, s(C, f(d, u))), B = a(l, s(C, f(v, l))), _ = a(m, s(C, f(y, m))); return p(M, T) && p(F, B) && p(O, _) ? [M, F, O] : null; }(e[0], e[1], e[2], t[0], t[1], t[2], o[0], o[1], o[2], m[0], m[1], m[2]);
    } throw new TypeError("Arrays with two or thee dimensional points expected"); } function g(e) { return 1 === e.length ? e[0] : e.length > 1 && Array.isArray(e[0]) && e.every((function (e) { return Array.isArray(e) && 1 === e.length; })) ? m(e) : e; } function x(e) { return 2 === e.length && d(e[0]) && d(e[1]); } function b(e) { return 3 === e.length && d(e[0]) && d(e[1]) && d(e[2]); } function w(e, t, r, n, i, o, u, c, l, p, m, h) { var d = s(f(e, t), f(r, n)), v = s(f(i, o), f(u, c)), y = s(f(l, p), f(m, h)); return a(a(d, v), y); } })), Qm = Ee("sum", ["typed", "config", "add", "numeric"], (function (e) { var t = e.typed, r = e.config, n = e.add, i = e.numeric; return t("sum", { "Array | Matrix": a, "Array | Matrix, number | BigNumber": function (e, t) { try {
            return _n(e, t, n);
        }
        catch (e) {
            throw hs(e, "sum");
        } }, "...": function (e) { if (On(e))
            throw new TypeError("Scalar values expected in function sum"); return a(e); } }); function a(e) { var t; return Tn(e, (function (e) { try {
        t = void 0 === t ? e : n(t, e);
    }
    catch (t) {
        throw hs(t, "sum", e);
    } })), void 0 === t && (t = i(0, r.number)), "string" == typeof t && (t = i(t, r.number)), t; } })), Km = "cumsum", eh = Ee(Km, ["typed", "add", "unaryPlus"], (function (e) { var t = e.typed, r = e.add, n = e.unaryPlus; return t(Km, { Array: i, Matrix: function (e) { return e.create(i(e.valueOf())); }, "Array, number | BigNumber": o, "Matrix, number | BigNumber": function (e, t) { return e.create(o(e.valueOf(), t)); }, "...": function (e) { if (On(e))
            throw new TypeError("All values expected to be scalar in function cumsum"); return i(e); } }); function i(e) { try {
        return a(e);
    }
    catch (e) {
        throw hs(e, Km);
    } } function a(e) { if (0 === e.length)
        return []; for (var t = [n(e[0])], i = 1; i < e.length; ++i)
        t.push(r(t[i - 1], e[i])); return t; } function o(e, t) { var r = Qr(e); if (t < 0 || t >= r.length)
        throw new Xr(t, r.length); try {
        return u(e, t);
    }
    catch (e) {
        throw hs(e, Km);
    } } function u(e, t) { var r, n, i; if (t <= 0) {
        var o = e[0][0];
        if (Array.isArray(o)) {
            for (i = Fn(e), n = [], r = 0; r < i.length; r++)
                n[r] = u(i[r], t - 1);
            return n;
        }
        return a(e);
    } for (n = [], r = 0; r < e.length; r++)
        n[r] = u(e[r], t - 1); return n; } })), th = "mean", rh = Ee(th, ["typed", "add", "divide"], (function (e) { var t = e.typed, r = e.add, n = e.divide; return t(th, { "Array | Matrix": i, "Array | Matrix, number | BigNumber": function (e, t) { try {
            var i = _n(e, t, r), a = Array.isArray(e) ? Qr(e) : e.size();
            return n(i, a[t]);
        }
        catch (e) {
            throw hs(e, "mean");
        } }, "...": function (e) { if (On(e))
            throw new TypeError("Scalar values expected in function mean"); return i(e); } }); function i(e) { var t, i = 0; if (Tn(e, (function (e) { try {
        t = void 0 === t ? e : r(t, e), i++;
    }
    catch (t) {
        throw hs(t, "mean", e);
    } })), 0 === i)
        throw new Error("Cannot calculate the mean of an empty array"); return n(t, i); } })), nh = "median", ih = Ee(nh, ["typed", "add", "divide", "compare", "partitionSelect"], (function (e) { var t = e.typed, r = e.add, n = e.divide, i = e.compare, a = e.partitionSelect; function o(e) { try {
        var t = (e = pn(e.valueOf())).length;
        if (0 === t)
            throw new Error("Cannot calculate median of an empty array");
        if (t % 2 == 0) {
            for (var r = t / 2 - 1, n = a(e, r + 1), o = e[r], c = 0; c < r; ++c)
                i(e[c], o) > 0 && (o = e[c]);
            return s(o, n);
        }
        var f = a(e, (t - 1) / 2);
        return u(f);
    }
    catch (e) {
        throw hs(e, "median");
    } } var u = t({ "number | BigNumber | Complex | Unit": function (e) { return e; } }), s = t({ "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function (e, t) { return n(r(e, t), 2); } }); return t(nh, { "Array | Matrix": o, "Array | Matrix, number | BigNumber": function (e, t) { throw new Error("median(A, dim) is not yet supported"); }, "...": function (e) { if (On(e))
            throw new TypeError("Scalar values expected in function median"); return o(e); } }); })), ah = Ee("mad", ["typed", "abs", "map", "median", "subtract"], (function (e) { var t = e.typed, r = e.abs, n = e.map, i = e.median, a = e.subtract; return t("mad", { "Array | Matrix": o, "...": function (e) { return o(e); } }); function o(e) { if (0 === (e = pn(e.valueOf())).length)
        throw new Error("Cannot calculate median absolute deviation (mad) of an empty array"); try {
        var t = i(e);
        return i(n(e, (function (e) { return r(a(e, t)); })));
    }
    catch (e) {
        throw e instanceof TypeError && -1 !== e.message.indexOf("median") ? new TypeError(e.message.replace("median", "mad")) : hs(e, "mad");
    } } })), oh = "unbiased", uh = "variance", sh = Ee(uh, ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], (function (e) { var t = e.typed, r = e.add, n = e.subtract, i = e.multiply, o = e.divide, u = e.apply, s = e.isNaN; return t(uh, { "Array | Matrix": function (e) { return c(e, oh); }, "Array | Matrix, string": c, "Array | Matrix, number | BigNumber": function (e, t) { return f(e, t, oh); }, "Array | Matrix, number | BigNumber, string": f, "...": function (e) { return c(e, oh); } }); function c(e, t) { var u, c = 0; if (0 === e.length)
        throw new SyntaxError("Function variance requires one or more parameters (0 provided)"); if (Tn(e, (function (e) { try {
        u = void 0 === u ? e : r(u, e), c++;
    }
    catch (t) {
        throw hs(t, "variance", e);
    } })), 0 === c)
        throw new Error("Cannot calculate variance of an empty array"); var f = o(u, c); if (u = void 0, Tn(e, (function (e) { var t = n(e, f); u = void 0 === u ? i(t, t) : r(u, i(t, t)); })), s(u))
        return u; switch (t) {
        case "uncorrected": return o(u, c);
        case "biased": return o(u, c + 1);
        case "unbiased":
            var l = a(u) ? u.mul(0) : 0;
            return 1 === c ? l : o(u, c - 1);
        default: throw new Error('Unknown normalization "' + t + '". Choose "unbiased" (default), "uncorrected", or "biased".');
    } } function f(e, t, r) { try {
        if (0 === e.length)
            throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
        return u(e, t, (function (e) { return c(e, r); }));
    }
    catch (e) {
        throw hs(e, "variance");
    } } })), ch = Ee("quantileSeq", ["typed", "add", "multiply", "partitionSelect", "compare"], (function (e) { var t = e.typed, r = e.add, n = e.multiply, o = e.partitionSelect, u = e.compare; function s(e, t, a) { var s = pn(e), f = s.length; if (0 === f)
        throw new Error("Cannot calculate quantile of an empty sequence"); if (i(t)) {
        var l = t * (f - 1), p = l % 1;
        if (0 === p) {
            var m = a ? s[l] : o(s, l);
            return c(m), m;
        }
        var h, d, v = Math.floor(l);
        if (a)
            h = s[v], d = s[v + 1];
        else {
            d = o(s, v + 1), h = s[v];
            for (var y = 0; y < v; ++y)
                u(s[y], h) > 0 && (h = s[y]);
        }
        return c(h), c(d), r(n(h, 1 - p), n(d, p));
    } var g = t.times(f - 1); if (g.isInteger()) {
        g = g.toNumber();
        var x = a ? s[g] : o(s, g);
        return c(x), x;
    } var b, w, N = g.floor(), D = g.minus(N), E = N.toNumber(); if (a)
        b = s[E], w = s[E + 1];
    else {
        w = o(s, E + 1), b = s[E];
        for (var A = 0; A < E; ++A)
            u(s[A], b) > 0 && (b = s[A]);
    } c(b), c(w); var S = new D.constructor(1); return r(n(b, S.minus(D)), n(w, D)); } var c = t({ "number | BigNumber | Unit": function (e) { return e; } }); return function (e, t, r) { var n, o, u; if (arguments.length < 2 || arguments.length > 3)
        throw new SyntaxError("Function quantileSeq requires two or three parameters"); if (p(e)) {
        if ("boolean" == typeof (r = r || !1)) {
            if (o = e.valueOf(), i(t)) {
                if (t < 0)
                    throw new Error("N/prob must be non-negative");
                if (t <= 1)
                    return s(o, t, r);
                if (t > 1) {
                    if (!V(t))
                        throw new Error("N must be a positive integer");
                    var c = t + 1;
                    n = new Array(t);
                    for (var f = 0; f < t;)
                        n[f] = s(o, ++f / c, r);
                    return n;
                }
            }
            if (a(t)) {
                var l = t.constructor;
                if (t.isNegative())
                    throw new Error("N/prob must be non-negative");
                if (u = new l(1), t.lte(u))
                    return new l(s(o, t, r));
                if (t.gt(u)) {
                    if (!t.isInteger())
                        throw new Error("N must be a positive integer");
                    var m = t.toNumber();
                    if (m > 4294967295)
                        throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
                    var h = new l(m + 1);
                    n = new Array(m);
                    for (var d = 0; d < m;)
                        n[d] = new l(s(o, new l(++d).div(h), r));
                    return n;
                }
            }
            if (Array.isArray(t)) {
                n = new Array(t.length);
                for (var v = 0; v < n.length; ++v) {
                    var y = t[v];
                    if (i(y)) {
                        if (y < 0 || y > 1)
                            throw new Error("Probability must be between 0 and 1, inclusive");
                    }
                    else {
                        if (!a(y))
                            throw new TypeError("Unexpected type of argument in function quantileSeq");
                        if (u = new y.constructor(1), y.isNegative() || y.gt(u))
                            throw new Error("Probability must be between 0 and 1, inclusive");
                    }
                    n[v] = s(o, y, r);
                }
                return n;
            }
            throw new TypeError("Unexpected type of argument in function quantileSeq");
        }
        throw new TypeError("Unexpected type of argument in function quantileSeq");
    } throw new TypeError("Unexpected type of argument in function quantileSeq"); }; })), fh = Ee("std", ["typed", "map", "sqrt", "variance"], (function (e) { var t = e.typed, r = e.map, n = e.sqrt, i = e.variance; return t("std", { "Array | Matrix": a, "Array | Matrix, string": a, "Array | Matrix, number | BigNumber": a, "Array | Matrix, number | BigNumber, string": a, "...": function (e) { return a(e); } }); function a(e, t) { if (0 === e.length)
        throw new SyntaxError("Function std requires one or more parameters (0 provided)"); try {
        var a = i.apply(null, arguments);
        return p(a) ? r(a, n) : n(a);
    }
    catch (e) {
        throw e instanceof TypeError && -1 !== e.message.indexOf(" variance") ? new TypeError(e.message.replace(" variance", " std")) : e;
    } } }));
    function lh(e, t) { if (t < e)
        return 1; if (t === e)
        return t; var r = t + e >> 1; return lh(e, r) * lh(r + 1, t); }
    function ph(e, t) { if (!V(e) || e < 0)
        throw new TypeError("Positive integer value expected in function combinations"); if (!V(t) || t < 0)
        throw new TypeError("Positive integer value expected in function combinations"); if (t > e)
        throw new TypeError("k must be less than or equal to n"); for (var r = e - t, n = 1, i = 2, a = t < r ? t : r, o = t < r ? r + 1 : t + 1; o <= e; ++o)
        for (n *= o; i <= a && n % i == 0;)
            n /= i, ++i; return i <= a && (n /= lh(i, a)), n; }
    ph.signature = "number, number";
    var mh = "combinations", hh = Ee(mh, ["typed"], (function (e) { return (0, e.typed)(mh, { "number, number": ph, "BigNumber, BigNumber": function (e, t) { var r, n, i = e.constructor, a = e.minus(t), o = new i(1); if (!dh(e) || !dh(t))
            throw new TypeError("Positive integer value expected in function combinations"); if (t.gt(e))
            throw new TypeError("k must be less than n in function combinations"); if (r = o, t.lt(a))
            for (n = o; n.lte(a); n = n.plus(o))
                r = r.times(t.plus(n)).dividedBy(n);
        else
            for (n = o; n.lte(t); n = n.plus(o))
                r = r.times(a.plus(n)).dividedBy(n); return r; } }); }));
    function dh(e) { return e.isInteger() && e.gte(0); }
    var vh = "combinationsWithRep", yh = Ee(vh, ["typed"], (function (e) { return (0, e.typed)(vh, { "number, number": function (e, t) { if (!V(e) || e < 0)
            throw new TypeError("Positive integer value expected in function combinationsWithRep"); if (!V(t) || t < 0)
            throw new TypeError("Positive integer value expected in function combinationsWithRep"); if (e < 1)
            throw new TypeError("k must be less than or equal to n + k - 1"); return t < e - 1 ? lh(e, e + t - 1) / lh(1, t) : lh(t + 1, e + t - 1) / lh(1, e - 1); }, "BigNumber, BigNumber": function (e, t) { var r, n, i = new (0, e.constructor)(1), a = e.minus(i); if (!gh(e) || !gh(t))
            throw new TypeError("Positive integer value expected in function combinationsWithRep"); if (e.lt(i))
            throw new TypeError("k must be less than or equal to n + k - 1 in function combinationsWithRep"); if (r = i, t.lt(a))
            for (n = i; n.lte(a); n = n.plus(i))
                r = r.times(t.plus(n)).dividedBy(n);
        else
            for (n = i; n.lte(t); n = n.plus(i))
                r = r.times(a.plus(n)).dividedBy(n); return r; } }); }));
    function gh(e) { return e.isInteger() && e.gte(0); }
    function xh(e) { var t; if (V(e))
        return e <= 0 ? isFinite(e) ? 1 / 0 : NaN : e > 171 ? 1 / 0 : lh(1, e - 1); if (e < .5)
        return Math.PI / (Math.sin(Math.PI * e) * xh(1 - e)); if (e >= 171.35)
        return 1 / 0; if (e > 85) {
        var r = e * e, n = r * e, i = n * e, a = i * e;
        return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * r) - 139 / (51840 * n) - 571 / (2488320 * i) + 163879 / (209018880 * a) + 5246819 / (75246796800 * a * e));
    } --e, t = wh[0]; for (var o = 1; o < wh.length; ++o)
        t += wh[o] / (e + o); var u = e + bh + .5; return Math.sqrt(2 * Math.PI) * Math.pow(u, e + .5) * Math.exp(-u) * t; }
    xh.signature = "number";
    var bh = 4.7421875, wh = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22], Nh = .9189385332046728, Dh = [1.000000000190015, 76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, .001208650973866179, -5395239384953e-18];
    function Eh(e) { if (e < 0)
        return NaN; if (0 === e)
        return 1 / 0; if (!isFinite(e))
        return e; if (e < .5)
        return Math.log(Math.PI / Math.sin(Math.PI * e)) - Eh(1 - e); for (var t = 5 + (e -= 1) + .5, r = Dh[0], n = 6; n >= 1; n--)
        r += Dh[n] / (e + n); return Nh + (e + .5) * Math.log(t) - t + Math.log(r); }
    Eh.signature = "number";
    var Ah = "gamma", Sh = Ee(Ah, ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"], (function (e) { var t = e.typed, r = e.config, n = (e.multiplyScalar, e.pow, e.BigNumber), i = e.Complex; return t(Ah, { number: xh, Complex: function e(t) { if (0 === t.im)
            return xh(t.re); if (t.re < .5) {
            var r = new i(1 - t.re, -t.im), n = new i(Math.PI * t.re, Math.PI * t.im);
            return new i(Math.PI).div(n.sin()).div(e(r));
        } t = new i(t.re - 1, t.im); for (var a = new i(wh[0], 0), o = 1; o < wh.length; ++o) {
            var u = new i(wh[o], 0);
            a = a.add(u.div(t.add(o)));
        } var s = new i(t.re + bh + .5, t.im), c = Math.sqrt(2 * Math.PI), f = s.pow(t.add(.5)), l = s.neg().exp(); return a.mul(c).mul(f).mul(l); }, BigNumber: function (e) { if (e.isInteger())
            return e.isNegative() || e.isZero() ? new n(1 / 0) : a(e.minus(1)); if (!e.isFinite())
            return new n(e.isNegative() ? NaN : 1 / 0); throw new Error("Integer BigNumber expected"); } }); function a(e) { if (e < 8)
        return new n([1, 1, 2, 6, 24, 120, 720, 5040][e]); var t = r.precision + (0 | Math.log(e.toNumber())), i = n.clone({ precision: t }); if (e % 2 == 1)
        return e.times(a(new n(e - 1))); for (var o = e, u = new i(e), s = e.toNumber(); o > 2;)
        s += o -= 2, u = u.times(s); return new n(u.toPrecision(n.precision)); } })), Ch = "lgamma", Mh = Ee(Ch, ["Complex", "typed"], (function (e) { var t = e.Complex, r = e.typed, n = [-.029550653594771242, .00641025641025641, -.0019175269175269176, .0008417508417508417, -.0005952380952380953, .0007936507936507937, -.002777777777777778, .08333333333333333]; return r(Ch, { number: Eh, Complex: function e(r) { if (r.isNaN())
            return new t(NaN, NaN); if (0 === r.im)
            return new t(Eh(r.re), 0); if (r.re >= 7 || Math.abs(r.im) >= 7)
            return i(r); if (r.re <= .1) {
            var n = (s = 6.283185307179586, (!0 ^ ((c = r.im) > 0 || !(c < 0) && 1 / c == 1 / 0) ? -s : s) * Math.floor(.5 * r.re + .25)), o = r.mul(Math.PI).sin().log(), u = e(new t(1 - r.re, -r.im));
            return new t(1.1447298858494002, n).sub(o).sub(u);
        } return r.im >= 0 ? a(r) : a(r.conjugate()).conjugate(); var s, c; }, BigNumber: function () { throw new Error("mathjs doesn't yet provide an implementation of the algorithm lgamma for BigNumber"); } }); function i(e) { for (var r = e.sub(.5).mul(e.log()).sub(e).add(Nh), i = new t(1, 0).div(e), a = i.div(e), o = n[0], u = n[1], s = 2 * a.re, c = a.re * a.re + a.im * a.im, f = 2; f < 8; f++) {
        var l = u;
        u = -c * o + n[f], o = s * o + l;
    } var p = i.mul(a.mul(o).add(u)); return r.add(p); } function a(e) { var r = 0, n = 0, a = e; for (e = e.add(1); e.re <= 7;) {
        var o = (a = a.mul(e)).im < 0 ? 1 : 0;
        0 !== o && 0 === n && r++, n = o, e = e.add(1);
    } return i(e).sub(a.log()).sub(new t(0, 2 * r * Math.PI * 1)); } })), Fh = "factorial", Oh = Ee(Fh, ["typed", "gamma"], (function (e) { var t = e.typed, r = e.gamma; return t(Fh, { number: function (e) { if (e < 0)
            throw new Error("Value must be non-negative"); return r(e + 1); }, BigNumber: function (e) { if (e.isNegative())
            throw new Error("Value must be non-negative"); return r(e.plus(1)); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return Bn(t, e); }; })) }); })), Th = "kldivergence", Bh = Ee(Th, ["typed", "matrix", "divide", "sum", "multiply", "map", "dotDivide", "log", "isNumeric"], (function (e) { var t = e.typed, r = e.matrix, n = e.divide, i = e.sum, a = e.multiply, o = e.map, u = e.dotDivide, s = e.log, c = e.isNumeric; return t(Th, { "Array, Array": function (e, t) { return f(r(e), r(t)); }, "Matrix, Array": function (e, t) { return f(e, r(t)); }, "Array, Matrix": function (e, t) { return f(r(e), t); }, "Matrix, Matrix": function (e, t) { return f(e, t); } }); function f(e, t) { var r = t.size().length, f = e.size().length; if (r > 1)
        throw new Error("first object must be one dimensional"); if (f > 1)
        throw new Error("second object must be one dimensional"); if (r !== f)
        throw new Error("Length of two vectors must be equal"); if (0 === i(e))
        throw new Error("Sum of elements in first object must be non zero"); if (0 === i(t))
        throw new Error("Sum of elements in second object must be non zero"); var l = n(e, i(e)), p = n(t, i(t)), m = i(a(l, o(u(l, p), (function (e) { return s(e); })))); return c(m) ? m : Number.NaN; } })), _h = "multinomial", kh = Ee(_h, ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"], (function (e) { var t = e.typed, r = e.add, n = e.divide, i = e.multiply, a = e.factorial, o = e.isInteger, u = e.isPositive; return t(_h, { "Array | Matrix": function (e) { var t = 0, s = 1; return Tn(e, (function (e) { if (!o(e) || !u(e))
            throw new TypeError("Positive integer value expected in function multinomial"); t = r(t, e), s = i(s, a(e)); })), n(a(t), s); } }); })), Ih = "permutations", Rh = Ee(Ih, ["typed", "factorial"], (function (e) { var t = e.typed, r = e.factorial; return t(Ih, { "number | BigNumber": r, "number, number": function (e, t) { if (!V(e) || e < 0)
            throw new TypeError("Positive integer value expected in function permutations"); if (!V(t) || t < 0)
            throw new TypeError("Positive integer value expected in function permutations"); if (t > e)
            throw new TypeError("second argument k must be less than or equal to first argument n"); return lh(e - t + 1, e); }, "BigNumber, BigNumber": function (e, t) { var r, n; if (!zh(e) || !zh(t))
            throw new TypeError("Positive integer value expected in function permutations"); if (t.gt(e))
            throw new TypeError("second argument k must be less than or equal to first argument n"); for (r = e.mul(0).add(1), n = e.minus(t).plus(1); n.lte(e); n = n.plus(1))
            r = r.times(n); return r; } }); }));
    function zh(e) { return e.isInteger() && e.gte(0); }
    r(3843);
    var qh = r(6377), jh = qh(Date.now());
    function Ph(e) { var t, r; return t = null === (r = e) ? jh : qh(String(r)), function () { return t(); }; }
    var Lh = "pickRandom", Uh = Ee(Lh, ["typed", "config", "?on"], (function (e) { var t = e.typed, r = e.config, n = e.on, a = Ph(r.randomSeed); return n && n("config", (function (e, t) { e.randomSeed !== t.randomSeed && (a = Ph(e.randomSeed)); })), t(Lh, { "Array | Matrix": function (e) { return o(e, {}); }, "Array | Matrix, Object": function (e, t) { return o(e, t); }, "Array | Matrix, number": function (e, t) { return o(e, { number: t }); }, "Array | Matrix, Array | Matrix": function (e, t) { return o(e, { weights: t }); }, "Array | Matrix, Array | Matrix, number": function (e, t, r) { return o(e, { number: r, weights: t }); }, "Array | Matrix, number, Array | Matrix": function (e, t, r) { return o(e, { number: t, weights: r }); } }); function o(e, t) { var r = t.number, n = t.weights, o = t.elementWise, u = void 0 === o || o, s = void 0 === r; s && (r = 1); var c = l(e) ? e.create : l(n) ? n.create : null; e = e.valueOf(), n && (n = n.valueOf()), !0 === u && (e = pn(e), n = pn(n)); var f = 0; if (void 0 !== n) {
        if (n.length !== e.length)
            throw new Error("Weights must have the same length as possibles");
        for (var p = 0, m = n.length; p < m; p++) {
            if (!i(n[p]) || n[p] < 0)
                throw new Error("Weights must be an array of positive numbers");
            f += n[p];
        }
    } for (var h, d = e.length, v = []; v.length < r;) {
        if (void 0 === n)
            h = e[Math.floor(a() * d)];
        else
            for (var y = a() * f, g = 0, x = e.length; g < x; g++)
                if ((y -= n[g]) < 0) {
                    h = e[g];
                    break;
                }
        v.push(h);
    } return s ? v[0] : c ? c(v) : v; } }));
    function $h(e, t) { var r = []; if ((e = e.slice(0)).length > 1)
        for (var n = 0, i = e.shift(); n < i; n++)
            r.push($h(e, t));
    else
        for (var a = 0, o = e.shift(); a < o; a++)
            r.push(t()); return r; }
    var Hh = "random", Gh = Ee(Hh, ["typed", "config", "?on"], (function (e) { var t = e.typed, r = e.config, n = e.on, i = Ph(r.randomSeed); return n && n("config", (function (e, t) { e.randomSeed !== t.randomSeed && (i = Ph(e.randomSeed)); })), t(Hh, { "": function () { return o(0, 1); }, number: function (e) { return o(0, e); }, "number, number": function (e, t) { return o(e, t); }, "Array | Matrix": function (e) { return a(e, 0, 1); }, "Array | Matrix, number": function (e, t) { return a(e, 0, t); }, "Array | Matrix, number, number": function (e, t, r) { return a(e, t, r); } }); function a(e, t, r) { var n = $h(e.valueOf(), (function () { return o(t, r); })); return l(e) ? e.create(n) : n; } function o(e, t) { return e + i() * (t - e); } })), Vh = "randomInt", Zh = Ee(Vh, ["typed", "config", "?on"], (function (e) { var t = e.typed, r = e.config, n = e.on, i = Ph(r.randomSeed); return n && n("config", (function (e, t) { e.randomSeed !== t.randomSeed && (i = Ph(e.randomSeed)); })), t(Vh, { "": function () { return o(0, 1); }, number: function (e) { return o(0, e); }, "number, number": function (e, t) { return o(e, t); }, "Array | Matrix": function (e) { return a(e, 0, 1); }, "Array | Matrix, number": function (e, t) { return a(e, 0, t); }, "Array | Matrix, number, number": function (e, t, r) { return a(e, t, r); } }); function a(e, t, r) { var n = $h(e.valueOf(), (function () { return o(t, r); })); return l(e) ? e.create(n) : n; } function o(e, t) { return Math.floor(e + i() * (t - e)); } })), Wh = "stirlingS2", Jh = Ee(Wh, ["typed", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "number", "?bignumber", "larger"], (function (e) { var t = e.typed, r = e.addScalar, n = (e.subtract, e.multiplyScalar), a = (e.divideScalar, e.pow, e.factorial, e.combinations, e.isNegative), o = e.isInteger, u = e.number, s = e.bignumber, c = e.larger, f = [], l = []; return t(Wh, { "number | BigNumber, number | BigNumber": function (e, t) { if (!o(e) || a(e) || !o(t) || a(t))
            throw new TypeError("Non-negative integer value expected in function stirlingS2"); if (c(t, e))
            throw new TypeError("k must be less than or equal to n in function stirlingS2"); var p = !(i(e) && i(t)), m = p ? l : f, h = p ? s : u, d = u(e), v = u(t); if (m[d] && m[d].length > v)
            return m[d][v]; for (var y = 0; y <= d; ++y)
            if (m[y] || (m[y] = [h(0 === y ? 1 : 0)]), 0 !== y)
                for (var g = m[y], x = m[y - 1], b = g.length; b <= y && b <= v; ++b)
                    g[b] = b === y ? 1 : r(n(h(b), x[b]), x[b - 1]); return m[d][v]; } }); })), Yh = "bellNumbers", Xh = Ee(Yh, ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"], (function (e) { var t = e.typed, r = e.addScalar, n = e.isNegative, i = e.isInteger, a = e.stirlingS2; return t(Yh, { "number | BigNumber": function (e) { if (!i(e) || n(e))
            throw new TypeError("Non-negative integer value expected in function bellNumbers"); for (var t = 0, o = 0; o <= e; o++)
            t = r(t, a(e, o)); return t; } }); })), Qh = "catalan", Kh = Ee(Qh, ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"], (function (e) { var t = e.typed, r = e.addScalar, n = e.divideScalar, i = e.multiplyScalar, a = e.combinations, o = e.isNegative, u = e.isInteger; return t(Qh, { "number | BigNumber": function (e) { if (!u(e) || o(e))
            throw new TypeError("Non-negative integer value expected in function catalan"); return n(a(i(e, 2), e), r(e, 1)); } }); })), ed = "composition", td = Ee(ed, ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"], (function (e) { var t = e.typed, r = e.addScalar, n = e.combinations, i = e.isPositive, a = (e.isNegative, e.isInteger), o = e.larger; return t(ed, { "number | BigNumber, number | BigNumber": function (e, t) { if (!(a(e) && i(e) && a(t) && i(t)))
            throw new TypeError("Positive integer value expected in function composition"); if (o(t, e))
            throw new TypeError("k must be less than or equal to n in function composition"); return n(r(e, -1), r(t, -1)); } }); })), rd = "leafCount", nd = Ee(rd, ["parse", "typed"], (function (e) { function t(e) { var r = 0; return e.forEach((function (e) { r += t(e); })), r || 1; } return e.parse, (0, e.typed)(rd, { Node: function (e) { return t(e); } }); }));
    function id(e) { return T(e) || q(e) && e.isUnary() && T(e.args[0]); }
    function ad(e) { return !!T(e) || !(!k(e) && !q(e) || !e.args.every(ad)) || !(!j(e) || !ad(e.content)); }
    function od(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
    } return r; }
    function ud(e) { for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? od(Object(r), !0).forEach((function (t) { Jc(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : od(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
    } return e; }
    r(2481);
    var sd = Ee("simplifyUtil", ["FunctionNode", "OperatorNode", "SymbolNode"], (function (e) { var t = e.FunctionNode, r = e.OperatorNode, n = e.SymbolNode, i = !0, a = !1, o = "defaultF", u = { add: { trivial: i, total: i, commutative: i, associative: i }, unaryPlus: { trivial: i, total: i, commutative: i, associative: i }, subtract: { trivial: a, total: i, commutative: a, associative: a }, multiply: { trivial: i, total: i, commutative: i, associative: i }, divide: { trivial: a, total: i, commutative: a, associative: a }, paren: { trivial: i, total: i, commutative: i, associative: a }, defaultF: { trivial: a, total: i, commutative: a, associative: a } }; function s(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u, n = o; if ("string" == typeof e ? n = e : q(e) ? n = e.fn.toString() : k(e) ? n = e.name : j(e) && (n = "paren"), Ne(r, n)) {
        var i = r[n];
        if (Ne(i, t))
            return i[t];
        if (Ne(u, n))
            return u[n][t];
    } if (Ne(r, o)) {
        var a = r.defaultF;
        return Ne(a, t) ? a[t] : u.defaultF[t];
    } if (Ne(u, n)) {
        var s = u[n];
        if (Ne(s, t))
            return s[t];
    } return u.defaultF[t]; } function c(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u; return s(e, "associative", t); } function f(e, t) { var r, n = []; return c(e, t) ? (r = e.op, function e(t) { for (var i = 0; i < t.args.length; i++) {
        var a = t.args[i];
        q(a) && r === a.op ? e(a) : n.push(a);
    } }(e), n) : e.args; } function l(e) { return q(e) ? function (t) { try {
        return new r(e.op, e.fn, t, e.implicit);
    }
    catch (e) {
        return console.error(e), [];
    } } : function (r) { return new t(new n(e.name), r); }; } return { createMakeNodeFunction: l, hasProperty: s, isCommutative: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u; return s(e, "commutative", t); }, isAssociative: c, mergeContext: function (e, t) { var r = ud({}, e); for (var n in t)
            Ne(e, n) ? r[n] = ud(ud({}, t[n]), e[n]) : r[n] = t[n]; return r; }, flatten: function e(t, r) { if (!t.args || 0 === t.args.length)
            return t; t.args = f(t, r); for (var n = 0; n < t.args.length; n++)
            e(t.args[n], r); }, allChildren: f, unflattenr: function e(t, r) { if (t.args && 0 !== t.args.length) {
            for (var n = l(t), i = t.args.length, a = 0; a < i; a++)
                e(t.args[a], r);
            if (i > 2 && c(t, r)) {
                for (var o = t.args.pop(); t.args.length > 0;)
                    o = n([t.args.pop(), o]);
                t.args = o.args;
            }
        } }, unflattenl: function e(t, r) { if (t.args && 0 !== t.args.length) {
            for (var n = l(t), i = t.args.length, a = 0; a < i; a++)
                e(t.args[a], r);
            if (i > 2 && c(t, r)) {
                for (var o = t.args.shift(); t.args.length > 0;)
                    o = n([o, t.args.shift()]);
                t.args = o.args;
            }
        } }, defaultContext: u, realContext: { divide: { total: a }, log: { total: a } }, positiveContext: { subtract: { total: a }, abs: { trivial: i }, log: { total: i } } }; })), cd = Ee("simplify", ["config", "typed", "parse", "add", "subtract", "multiply", "divide", "pow", "isZero", "equal", "resolve", "simplifyConstant", "simplifyCore", "?fraction", "?bignumber", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], (function (e) { e.config; var r = e.typed, n = e.parse, i = (e.add, e.subtract, e.multiply, e.divide, e.pow, e.isZero, e.equal), a = e.resolve, o = e.simplifyConstant, u = e.simplifyCore, s = (e.fraction, e.bignumber, e.mathWithTransform, e.matrix, e.AccessorNode), c = e.ArrayNode, f = e.ConstantNode, l = e.FunctionNode, p = e.IndexNode, m = e.ObjectNode, h = e.OperatorNode, d = e.ParenthesisNode, v = e.SymbolNode, y = sd({ FunctionNode: l, OperatorNode: h, SymbolNode: v }), g = y.hasProperty, x = y.isCommutative, b = y.isAssociative, w = y.mergeContext, N = y.flatten, D = y.unflattenr, E = y.unflattenl, A = y.createMakeNodeFunction, S = y.defaultContext, C = y.realContext, M = y.positiveContext; r.addConversion({ from: "Object", to: "Map", convert: Ue }); var F = r("simplify", { Node: z, "Node, Map": function (e, t) { return z(e, !1, t); }, "Node, Map, Object": function (e, t, r) { return z(e, !1, t, r); }, "Node, Array": z, "Node, Array, Map": z, "Node, Array, Map, Object": z }); function O(e) { return e.transform((function (e, t, r) { return j(e) ? O(e.content) : e; })); } r.removeConversion({ from: "Object", to: "Map", convert: Ue }), F.defaultContext = S, F.realContext = C, F.positiveContext = M; var B = { true: !0, false: !0, e: !0, i: !0, Infinity: !0, LN2: !0, LN10: !0, LOG2E: !0, LOG10E: !0, NaN: !0, phi: !0, pi: !0, SQRT1_2: !0, SQRT2: !0, tau: !0 }; function _(e, t) { var r = {}; if (e.s) {
        var i = e.s.split("->");
        if (2 !== i.length)
            throw SyntaxError("Could not parse rule: " + e.s);
        r.l = i[0], r.r = i[1];
    }
    else
        r.l = e.l, r.r = e.r; r.l = O(n(r.l)), r.r = O(n(r.r)); for (var a = 0, o = ["imposeContext", "repeat", "assuming"]; a < o.length; a++) {
        var u = o[a];
        u in e && (r[u] = e[u]);
    } if (e.evaluate && (r.evaluate = n(e.evaluate)), b(r.l, t)) {
        var s, c = !x(r.l, t);
        c && (s = R());
        var f = A(r.l), l = R();
        r.expanded = {}, r.expanded.l = f([r.l, l]), N(r.expanded.l, t), D(r.expanded.l, t), r.expanded.r = f([r.r, l]), c && (r.expandedNC1 = {}, r.expandedNC1.l = f([s, r.l]), r.expandedNC1.r = f([s, r.r]), r.expandedNC2 = {}, r.expandedNC2.l = f([s, r.expanded.l]), r.expandedNC2.r = f([s, r.expanded.r]));
    } return r; } function k(e, r) { for (var n = [], i = 0; i < e.length; i++) {
        var a = e[i], o = void 0, u = t(a);
        switch (u) {
            case "string": a = { s: a };
            case "object":
                o = _(a, r);
                break;
            case "function":
                o = a;
                break;
            default: throw TypeError("Unsupported type of rule: " + u);
        }
        n.push(o);
    } return n; } F.rules = [u, { l: "log(e)", r: "1" }, { s: "n-n1 -> n+-n1", assuming: { subtract: { total: !0 } } }, { s: "n-n -> 0", assuming: { subtract: { total: !1 } } }, { s: "-(cl*v) -> v * (-cl)", assuming: { multiply: { commutative: !0 }, subtract: { total: !0 } } }, { s: "-(cl*v) -> (-cl) * v", assuming: { multiply: { commutative: !1 }, subtract: { total: !0 } } }, { s: "-(v*cl) -> v * (-cl)", assuming: { multiply: { commutative: !1 }, subtract: { total: !0 } } }, { l: "-(n1/n2)", r: "-n1/n2" }, { l: "-v", r: "v * (-1)" }, { l: "(n1 + n2)*(-1)", r: "n1*(-1) + n2*(-1)", repeat: !0 }, { l: "n/n1^n2", r: "n*n1^-n2" }, { l: "n/n1", r: "n*n1^-1" }, { s: "(n1*n2)^n3 -> n1^n3 * n2^n3", assuming: { multiply: { commutative: !0 } } }, { s: "(n1*n2)^(-1) -> n2^(-1) * n1^(-1)", assuming: { multiply: { commutative: !1 } } }, { s: "(n ^ n1) ^ n2 -> n ^ (n1 * n2)", assuming: { divide: { total: !0 } } }, { l: " vd   * ( vd   * n1 + n2)", r: "vd^2       * n1 +  vd   * n2" }, { s: " vd   * (vd^n4 * n1 + n2)   ->  vd^(1+n4)  * n1 +  vd   * n2", assuming: { divide: { total: !0 } } }, { s: "vd^n3 * ( vd   * n1 + n2)   ->  vd^(n3+1)  * n1 + vd^n3 * n2", assuming: { divide: { total: !0 } } }, { s: "vd^n3 * (vd^n4 * n1 + n2)   ->  vd^(n3+n4) * n1 + vd^n3 * n2", assuming: { divide: { total: !0 } } }, { l: "n*n", r: "n^2" }, { s: "n * n^n1 -> n^(n1+1)", assuming: { divide: { total: !0 } } }, { s: "n^n1 * n^n2 -> n^(n1+n2)", assuming: { divide: { total: !0 } } }, o, { s: "n+n -> 2*n", assuming: { add: { total: !0 } } }, { l: "n+-n", r: "0" }, { l: "vd*n + vd", r: "vd*(n+1)" }, { l: "n3*n1 + n3*n2", r: "n3*(n1+n2)" }, { l: "n3^(-n4)*n1 +   n3  * n2", r: "n3^(-n4)*(n1 + n3^(n4+1) *n2)" }, { l: "n3^(-n4)*n1 + n3^n5 * n2", r: "n3^(-n4)*(n1 + n3^(n4+n5)*n2)" }, { s: "n*vd + vd -> (n+1)*vd", assuming: { multiply: { commutative: !1 } } }, { s: "vd + n*vd -> (1+n)*vd", assuming: { multiply: { commutative: !1 } } }, { s: "n1*n3 + n2*n3 -> (n1+n2)*n3", assuming: { multiply: { commutative: !1 } } }, { s: "n^n1 * n -> n^(n1+1)", assuming: { divide: { total: !0 }, multiply: { commutative: !1 } } }, { s: "n1*n3^(-n4) + n2 * n3    -> (n1 + n2*n3^(n4 +  1))*n3^(-n4)", assuming: { multiply: { commutative: !1 } } }, { s: "n1*n3^(-n4) + n2 * n3^n5 -> (n1 + n2*n3^(n4 + n5))*n3^(-n4)", assuming: { multiply: { commutative: !1 } } }, { l: "n*cd + cd", r: "(n+1)*cd" }, { s: "cd*n + cd -> cd*(n+1)", assuming: { multiply: { commutative: !1 } } }, { s: "cd + cd*n -> cd*(1+n)", assuming: { multiply: { commutative: !1 } } }, o, { s: "(-n)*n1 -> -(n*n1)", assuming: { subtract: { total: !0 } } }, { s: "n1*(-n) -> -(n1*n)", assuming: { subtract: { total: !0 }, multiply: { commutative: !1 } } }, { s: "ce+ve -> ve+ce", assuming: { add: { commutative: !0 } }, imposeContext: { add: { commutative: !1 } } }, { s: "vd*cd -> cd*vd", assuming: { multiply: { commutative: !0 } }, imposeContext: { multiply: { commutative: !1 } } }, { l: "n+-n1", r: "n-n1" }, { s: "n*(n1^-1) -> n/n1", assuming: { multiply: { commutative: !0 } } }, { s: "n*n1^-n2 -> n/n1^n2", assuming: { multiply: { commutative: !0 } } }, { s: "n^-1 -> 1/n", assuming: { multiply: { commutative: !0 } } }, { l: "n^1", r: "n" }, { s: "n*(n1/n2) -> (n*n1)/n2", assuming: { multiply: { associative: !0 } } }, { s: "n-(n1+n2) -> n-n1-n2", assuming: { addition: { associative: !0, commutative: !0 } } }, { l: "1*n", r: "n", imposeContext: { multiply: { commutative: !0 } } }, { s: "n1/(n2/n3) -> (n1*n3)/n2", assuming: { multiply: { associative: !0 } } }, { l: "n1/(-n2)", r: "-n1/n2" }]; var I = 0; function R() { return new v("_p" + I++); } function z(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Le(), n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = n.consoleDebug; t = k(t || F.rules, n.context); for (var o = a(e, r), u = {}, s = (o = O(o)).toString({ parenthesis: "all" }); !u[s];) {
        u[s] = !0, I = 0;
        var c = s;
        i && console.log("Working on: ", s);
        for (var f = 0; f < t.length; f++) {
            var l = "";
            if ("function" == typeof t[f] ? (o = t[f](o, n), i && (l = t[f].name)) : (N(o, n.context), o = P(o, t[f], n.context), i && (l = "".concat(t[f].l.toString(), " -> ").concat(t[f].r.toString()))), i) {
                var p = o.toString({ parenthesis: "all" });
                p !== c && (console.log("Applying", l, "produced", p), c = p);
            }
            E(o, n.context);
        }
        s = o.toString({ parenthesis: "all" });
    } return o; } function q(e, t, r) { var n = e; if (e)
        for (var i = 0; i < e.length; ++i) {
            var a = P(e[i], t, r);
            a !== e[i] && (n === e && (n = e.slice()), n[i] = a);
        } return n; } function P(e, t, r) { if (t.assuming)
        for (var n in t.assuming)
            for (var i in t.assuming[n])
                if (g(n, i, r) !== t.assuming[n][i])
                    return e; var a = w(t.imposeContext, r), o = e; if (o instanceof h || o instanceof l) {
        var u = q(o.args, t, r);
        u !== o.args && ((o = o.clone()).args = u);
    }
    else if (o instanceof d) {
        if (o.content) {
            var f = P(o.content, t, r);
            f !== o.content && (o = new d(f));
        }
    }
    else if (o instanceof c) {
        var v = q(o.items, t, r);
        v !== o.items && (o = new c(v));
    }
    else if (o instanceof s) {
        var y = o.object;
        o.object && (y = P(o.object, t, r));
        var x = o.index;
        o.index && (x = P(o.index, t, r)), y === o.object && x === o.index || (o = new s(y, x));
    }
    else if (o instanceof p) {
        var b = q(o.dimensions, t, r);
        b !== o.dimensions && (o = new p(b));
    }
    else if (o instanceof m) {
        var N = !1, D = {};
        for (var E in o.properties)
            D[E] = P(o.properties[E], t, r), D[E] !== o.properties[E] && (N = !0);
        N && (o = new m(D));
    } var A = t.r, S = H(t.l, o, a)[0]; if (!S && t.expanded && (A = t.expanded.r, S = H(t.expanded.l, o, a)[0]), !S && t.expandedNC1 && (A = t.expandedNC1.r, (S = H(t.expandedNC1.l, o, a)[0]) || (A = t.expandedNC2.r, S = H(t.expandedNC2.l, o, a)[0])), S) {
        var C = o.implicit;
        o = A.clone(), C && "implicit" in A && (o.implicit = !0), o = o.transform((function (e) { return e.isSymbolNode && Ne(S.placeholders, e.name) ? S.placeholders[e.name].clone() : e; }));
    } return t.repeat && o !== e && (o = P(o, t, r)), o; } function L(e, t) { var r = { placeholders: {} }; if (!e.placeholders && !t.placeholders)
        return r; if (!e.placeholders)
        return t; if (!t.placeholders)
        return e; for (var n in e.placeholders)
        if (Ne(e.placeholders, n) && (r.placeholders[n] = e.placeholders[n], Ne(t.placeholders, n) && !G(e.placeholders[n], t.placeholders[n])))
            return null; for (var i in t.placeholders)
        Ne(t.placeholders, i) && (r.placeholders[i] = t.placeholders[i]); return r; } function $(e, t) { var r, n = []; if (0 === e.length || 0 === t.length)
        return n; for (var i = 0; i < e.length; i++)
        for (var a = 0; a < t.length; a++)
            (r = L(e[i], t[a])) && n.push(r); return n; } function H(e, t, r, n) { var a = [{ placeholders: {} }]; if (e instanceof h && t instanceof h || e instanceof l && t instanceof l) {
        if (e instanceof h) {
            if (e.op !== t.op || e.fn !== t.fn)
                return [];
        }
        else if (e instanceof l && e.name !== t.name)
            return [];
        if (!(1 === t.args.length && 1 === e.args.length || !b(t, r) && t.args.length === e.args.length || n)) {
            if (t.args.length >= 2 && 2 === e.args.length) {
                for (var o = function (e, t) { var r, n, i = [], a = A(e); if (x(e, t))
                    for (var o = 0; o < e.args.length; o++)
                        (n = e.args.slice(0)).splice(o, 1), r = 1 === n.length ? n[0] : a(n), i.push(a([e.args[o], r]));
                else
                    for (var u = 1; u < e.args.length; u++) {
                        var s = e.args[0];
                        u > 1 && (s = a(e.args.slice(0, u))), r = 1 === (n = e.args.slice(u)).length ? n[0] : a(n), i.push(a([s, r]));
                    } return i; }(t, r), u = [], s = 0; s < o.length; s++) {
                    var c = H(e, o[s], r, !0);
                    u = u.concat(c);
                }
                return u;
            }
            if (e.args.length > 2)
                throw Error("Unexpected non-binary associative function: " + e.toString());
            return [];
        }
        for (var p = [], m = 0; m < e.args.length; m++) {
            var d = H(e.args[m], t.args[m], r);
            if (0 === d.length)
                break;
            p.push(d);
        }
        if (p.length !== e.args.length) {
            if (!x(t, r) || 1 === e.args.length)
                return [];
            if (e.args.length > 2)
                throw new Error("permuting >2 commutative non-associative rule arguments not yet implemented");
            var y = H(e.args[0], t.args[1], r);
            if (0 === y.length)
                return [];
            var g = H(e.args[1], t.args[0], r);
            if (0 === g.length)
                return [];
            p = [y, g];
        }
        a = function (e) { if (0 === e.length)
            return e; for (var t = e.reduce($), r = [], n = {}, i = 0; i < t.length; i++) {
            var a = JSON.stringify(t[i]);
            n[a] || (n[a] = !0, r.push(t[i]));
        } return r; }(p);
    }
    else if (e instanceof v) {
        if (0 === e.name.length)
            throw new Error("Symbol in rule has 0 length...!?");
        if (B[e.name]) {
            if (e.name !== t.name)
                return [];
        }
        else
            switch (e.name[1] >= "a" && e.name[1] <= "z" ? e.name.substring(0, 2) : e.name[0]) {
                case "n":
                case "_p":
                    a[0].placeholders[e.name] = t;
                    break;
                case "c":
                case "cl":
                    if (!T(t))
                        return [];
                    a[0].placeholders[e.name] = t;
                    break;
                case "v":
                    if (T(t))
                        return [];
                    a[0].placeholders[e.name] = t;
                    break;
                case "vl":
                    if (!U(t))
                        return [];
                    a[0].placeholders[e.name] = t;
                    break;
                case "cd":
                    if (!id(t))
                        return [];
                    a[0].placeholders[e.name] = t;
                    break;
                case "vd":
                    if (id(t))
                        return [];
                    a[0].placeholders[e.name] = t;
                    break;
                case "ce":
                    if (!ad(t))
                        return [];
                    a[0].placeholders[e.name] = t;
                    break;
                case "ve":
                    if (ad(t))
                        return [];
                    a[0].placeholders[e.name] = t;
                    break;
                default: throw new Error("Invalid symbol in rule: " + e.name);
            }
    }
    else {
        if (!(e instanceof f))
            return [];
        if (!i(e.value, t.value))
            return [];
    } return a; } function G(e, t) { if (e instanceof f && t instanceof f) {
        if (!i(e.value, t.value))
            return !1;
    }
    else if (e instanceof v && t instanceof v) {
        if (e.name !== t.name)
            return !1;
    }
    else {
        if (!(e instanceof h && t instanceof h || e instanceof l && t instanceof l))
            return !1;
        if (e instanceof h) {
            if (e.op !== t.op || e.fn !== t.fn)
                return !1;
        }
        else if (e instanceof l && e.name !== t.name)
            return !1;
        if (e.args.length !== t.args.length)
            return !1;
        for (var r = 0; r < e.args.length; r++)
            if (!G(e.args[r], t.args[r]))
                return !1;
    } return !0; } return F; }));
    function fd(e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) {
        if (Array.isArray(e) || (r = function (e, t) { if (e) {
            if ("string" == typeof e)
                return ld(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ld(e, t) : void 0;
        } }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0, i = function () { };
            return { s: i, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: i };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    } var a, o = !0, u = !1; return { s: function () { r = r.call(e); }, n: function () { var e = r.next(); return o = e.done, e; }, e: function (e) { u = !0, a = e; }, f: function () { try {
            o || null == r.return || r.return();
        }
        finally {
            if (u)
                throw a;
        } } }; }
    function ld(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r]; return n; }
    var pd = Ee("simplifyConstant", ["typed", "parse", "config", "mathWithTransform", "matrix", "?fraction", "?bignumber", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode"], (function (e) { var r = e.typed, n = (e.parse, e.config), i = e.mathWithTransform, a = e.matrix, o = e.fraction, s = e.bignumber, c = e.AccessorNode, f = e.ArrayNode, p = e.ConstantNode, m = e.FunctionNode, h = e.IndexNode, d = e.ObjectNode, v = e.OperatorNode, y = e.SymbolNode, g = sd({ FunctionNode: m, OperatorNode: v, SymbolNode: y }), x = g.isCommutative, b = g.isAssociative, w = g.allChildren, N = g.createMakeNodeFunction, D = r("simplifyConstant", { Node: function (e) { return M(k(e, {})); }, "Node, Object": function (e, t) { return M(k(e, t)); } }); function E(e) { return u(e) ? e.valueOf() : e instanceof Array ? e.map(E) : l(e) ? a(E(e.valueOf())) : e; } function A(e, t, r) { try {
        return i[e].apply(null, t);
    }
    catch (n) {
        return t = t.map(E), O(i[e].apply(null, t), r);
    } } var S = r({ Fraction: function (e) { var t, r = e.s * e.n; return t = r < 0 ? new v("-", "unaryMinus", [new p(-r)]) : new p(r), 1 === e.d ? t : new v("/", "divide", [t, new p(e.d)]); }, number: function (e) { return e < 0 ? B(new p(-e)) : new p(e); }, BigNumber: function (e) { return e < 0 ? B(new p(-e)) : new p(e); }, Complex: function (e) { throw new Error("Cannot convert Complex number to Node"); }, string: function (e) { return new p(e); }, Matrix: function (e) { return new f(e.valueOf().map((function (e) { return S(e); }))); } }); function M(e) { return R(e) ? e : S(e); } function F(e, t) { if (t && !1 !== t.exactFractions && isFinite(e) && o) {
        var r = o(e), n = t && "number" == typeof t.fractionsLimit ? t.fractionsLimit : 1 / 0;
        if (r.valueOf() === e && r.n < n && r.d < n)
            return r;
    } return e; } var O = r({ "string, Object": function (e, t) { return "BigNumber" === n.number ? (void 0 === s && Su(), s(e)) : "Fraction" === n.number ? (void 0 === o && Cu(), o(e)) : F(parseFloat(e), t); }, "Fraction, Object": function (e, t) { return e; }, "BigNumber, Object": function (e, t) { return e; }, "number, Object": function (e, t) { return F(e, t); }, "Complex, Object": function (e, t) { return 0 !== e.im ? e : F(e.re, t); }, "Matrix, Object": function (e, t) { return a(F(e.valueOf())); }, "Array, Object": function (e, t) { return e.map(F); } }); function B(e) { return new v("-", "unaryMinus", [e]); } function _(e, t, r, n) { var i = t.shift(), a = t.reduce((function (t, i) { if (!R(i)) {
        var a = t.pop();
        if (R(a))
            return [a, i];
        try {
            return t.push(A(e, [a, i], n)), t;
        }
        catch (e) {
            t.push(a);
        }
    } t.push(M(t.pop())); var o = 1 === t.length ? t[0] : r(t); return [r([o, M(i)])]; }), [i]); return 1 === a.length ? a[0] : r([a[0], S(a[1])]); } function k(e, r) { switch (e.type) {
        case "SymbolNode": return e;
        case "ConstantNode":
            switch (t(e.value)) {
                case "number": return O(e.value, r);
                case "string": return e.value;
                default: if (!isNaN(e.value))
                    return O(e.value, r);
            }
            return e;
        case "FunctionNode":
            if (i[e.name] && i[e.name].rawArgs)
                return e;
            if (-1 === ["add", "multiply"].indexOf(e.name)) {
                var n = e.args.map((function (e) { return k(e, r); }));
                if (!n.some(R))
                    try {
                        return A(e.name, n, r);
                    }
                    catch (e) { }
                if ("size" === e.name && 1 === n.length && C(n[0])) {
                    for (var o = [], u = n[0]; C(u);)
                        o.push(u.items.length), u = u.items[0];
                    return a(o);
                }
                return new m(e.name, n.map(M));
            }
        case "OperatorNode":
            var s, v, y = e.fn.toString(), g = N(e);
            if (q(e) && e.isUnary())
                v = R((s = [k(e.args[0], r)])[0]) ? g(s) : A(y, s, r);
            else if (b(e, r.context))
                if (s = (s = w(e, r.context)).map((function (e) { return k(e, r); })), x(y, r.context)) {
                    for (var E = [], S = [], F = 0; F < s.length; F++)
                        R(s[F]) ? S.push(s[F]) : E.push(s[F]);
                    E.length > 1 ? (v = _(y, E, g, r), S.unshift(v), v = _(y, S, g, r)) : v = _(y, s, g, r);
                }
                else
                    v = _(y, s, g, r);
            else
                v = _(y, s = e.args.map((function (e) { return k(e, r); })), g, r);
            return v;
        case "ParenthesisNode": return k(e.content, r);
        case "AccessorNode": return function (e, t, r) { if (!I(t))
            return new c(M(e), M(t)); if (C(e) || l(e)) {
            for (var n = Array.from(t.dimensions); n.length > 0;)
                if (T(n[0]) && "string" != typeof n[0].value) {
                    var i = O(n.shift().value, r);
                    C(e) ? e = e.items[i - 1] : (e = e.valueOf()[i - 1]) instanceof Array && (e = a(e));
                }
                else {
                    if (!(n.length > 1 && T(n[1]) && "string" != typeof n[1].value))
                        break;
                    var o, u = O(n[1].value, r), s = [], m = C(e) ? e.items : e.valueOf(), d = fd(m);
                    try {
                        for (d.s(); !(o = d.n()).done;) {
                            var v = o.value;
                            if (C(v))
                                s.push(v.items[u - 1]);
                            else {
                                if (!l(e))
                                    break;
                                s.push(v[u - 1]);
                            }
                        }
                    }
                    catch (e) {
                        d.e(e);
                    }
                    finally {
                        d.f();
                    }
                    if (s.length !== m.length)
                        break;
                    e = C(e) ? new f(s) : a(s), n.splice(1, 1);
                }
            return n.length === t.dimensions.length ? new c(M(e), t) : n.length > 0 ? (t = new h(n), new c(M(e), t)) : e;
        } if (z(e) && 1 === t.dimensions.length && T(t.dimensions[0])) {
            var y = t.dimensions[0].value;
            return y in e.properties ? e.properties[y] : new p;
        } return new c(M(e), t); }(k(e.object, r), k(e.index, r), r);
        case "ArrayNode":
            var B = e.items.map((function (e) { return k(e, r); }));
            return B.some(R) ? new f(B.map(M)) : a(B);
        case "IndexNode": return new h(e.dimensions.map((function (e) { return D(e, r); })));
        case "ObjectNode":
            var j = {};
            for (var P in e.properties)
                j[P] = D(e.properties[P], r);
            return new d(j);
        default: throw new Error("Unimplemented node type in simplifyConstant: ".concat(e.type));
    } } return D; })), md = "simplifyCore", hd = Ee(md, ["typed", "parse", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], (function (e) { var t = e.typed, r = (e.parse, e.equal), n = e.isZero, i = (e.add, e.subtract, e.multiply, e.divide, e.pow, e.AccessorNode), a = e.ArrayNode, o = e.ConstantNode, u = e.FunctionNode, s = e.IndexNode, c = e.ObjectNode, f = e.OperatorNode, l = (e.ParenthesisNode, e.SymbolNode), p = new o(0), m = new o(1), h = new o(!0), d = new o(!1); function v(e) { return q(e) && ["and", "not", "or"].includes(e.op); } var y = sd({ FunctionNode: u, OperatorNode: f, SymbolNode: l }), g = y.hasProperty, x = y.isCommutative; function b(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = t ? t.context : void 0; if (g(e, "trivial", o)) {
        if (k(e) && 1 === e.args.length)
            return b(e.args[0], t);
        var l = !1, y = 0;
        if (e.forEach((function (e) { 1 == ++y && (l = b(e, t)); })), 1 === y)
            return l;
    } var w = e; if (k(w)) {
        var N = fp(w.name);
        if (!N)
            return new u(b(w.fn), w.args.map((function (e) { return b(e, t); })));
        if (w.args.length > 2 && g(w, "associative", o))
            for (; w.args.length > 2;) {
                var D = w.args.pop(), E = w.args.pop();
                w.args.push(new f(N, w.name, [D, E]));
            }
        w = new f(N, w.name, w.args);
    } if (q(w) && w.isUnary()) {
        var A = b(w.args[0], t);
        if ("~" === w.op && q(A) && A.isUnary() && "~" === A.op)
            return A.args[0];
        if ("not" === w.op && q(A) && A.isUnary() && "not" === A.op && v(A.args[0]))
            return A.args[0];
        var M = !0;
        if ("-" === w.op && q(A) && (A.isBinary() && "subtract" === A.fn && (w = new f("-", "subtract", [A.args[1], A.args[0]]), M = !1), A.isUnary() && "-" === A.op))
            return A.args[0];
        if (M)
            return new f(w.op, w.fn, [A]);
    } if (q(w) && w.isBinary()) {
        var F = b(w.args[0], t), O = b(w.args[1], t);
        if ("+" === w.op) {
            if (T(F) && n(F.value))
                return O;
            if (T(O) && n(O.value))
                return F;
            q(O) && O.isUnary() && "-" === O.op && (O = O.args[0], w = new f("-", "subtract", [F, O]));
        }
        if ("-" === w.op)
            return q(O) && O.isUnary() && "-" === O.op ? b(new f("+", "add", [F, O.args[0]]), t) : T(F) && n(F.value) ? b(new f("-", "unaryMinus", [O])) : T(O) && n(O.value) ? F : new f(w.op, w.fn, [F, O]);
        if ("*" === w.op) {
            if (T(F)) {
                if (n(F.value))
                    return p;
                if (r(F.value, 1))
                    return O;
            }
            if (T(O)) {
                if (n(O.value))
                    return p;
                if (r(O.value, 1))
                    return F;
                if (x(w, o))
                    return new f(w.op, w.fn, [O, F], w.implicit);
            }
            return new f(w.op, w.fn, [F, O], w.implicit);
        }
        if ("/" === w.op)
            return T(F) && n(F.value) ? p : T(O) && r(O.value, 1) ? F : new f(w.op, w.fn, [F, O]);
        if ("^" === w.op && T(O)) {
            if (n(O.value))
                return m;
            if (r(O.value, 1))
                return F;
        }
        if ("and" === w.op) {
            if (T(F)) {
                if (!F.value)
                    return d;
                if (v(O))
                    return O;
            }
            if (T(O)) {
                if (!O.value)
                    return d;
                if (v(F))
                    return F;
            }
        }
        if ("or" === w.op) {
            if (T(F)) {
                if (F.value)
                    return h;
                if (v(O))
                    return O;
            }
            if (T(O)) {
                if (O.value)
                    return h;
                if (v(F))
                    return F;
            }
        }
        return new f(w.op, w.fn, [F, O]);
    } if (q(w))
        return new f(w.op, w.fn, w.args.map((function (e) { return b(e, t); }))); if (C(w))
        return new a(w.items.map((function (e) { return b(e, t); }))); if (S(w))
        return new i(b(w.object, t), b(w.index, t)); if (I(w))
        return new s(w.dimensions.map((function (e) { return b(e, t); }))); if (z(w)) {
        var B = {};
        for (var _ in w.properties)
            B[_] = b(w.properties[_], t);
        return new c(B);
    } return w; } return t(md, { Node: b, "Node,Object": b }); })), dd = Ee("resolve", ["typed", "parse", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode"], (function (e) { var t = e.typed, r = e.parse, n = e.ConstantNode, i = e.FunctionNode, a = e.OperatorNode, o = e.ParenthesisNode; function u(e, t) { var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set; if (!t)
        return e; if (U(e)) {
        if (s.has(e.name)) {
            var c = Array.from(s).join(", ");
            throw new ReferenceError("recursive loop of variable definitions among {".concat(c, "}"));
        }
        var f = t.get(e.name);
        if (R(f)) {
            var l = new Set(s);
            return l.add(e.name), u(f, t, l);
        }
        return "number" == typeof f ? r(String(f)) : void 0 !== f ? new n(f) : e;
    } if (q(e)) {
        var p = e.args.map((function (e) { return u(e, t, s); }));
        return new a(e.op, e.fn, p, e.implicit);
    } if (j(e))
        return new o(u(e.content, t, s)); if (k(e)) {
        var m = e.args.map((function (e) { return u(e, t, s); }));
        return new i(e.name, m);
    } return e.map((function (e) { return u(e, t, s); })); } return t("resolve", { Node: u, "Node, Map | null | undefined": u, "Node, Object": function (e, t) { return u(e, Ue(t)); }, "Array | Matrix": t.referToSelf((function (e) { return function (t) { return t.map((function (t) { return e(t); })); }; })), "Array | Matrix, null | undefined": t.referToSelf((function (e) { return function (t) { return t.map((function (t) { return e(t); })); }; })), "Array, Object": t.referTo("Array,Map", (function (e) { return function (t, r) { return e(t, Ue(r)); }; })), "Matrix, Object": t.referTo("Matrix,Map", (function (e) { return function (t, r) { return e(t, Ue(r)); }; })), "Array | Matrix, Map": t.referToSelf((function (e) { return function (t, r) { return t.map((function (t) { return e(t, r); })); }; })) }); })), vd = "symbolicEqual", yd = Ee(vd, ["parse", "simplify", "typed", "OperatorNode"], (function (e) { e.parse; var t = e.simplify, r = e.typed, n = e.OperatorNode; function i(e, r) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = new n("-", "subtract", [e, r]), o = t(a, {}, i); return T(o) && !o.value; } return r(vd, { "Node, Node": i, "Node, Node, Object": i }); })), gd = "derivative", xd = Ee(gd, ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], (function (e) { var t = e.typed, r = e.config, n = e.parse, i = e.simplify, a = e.equal, o = e.isZero, u = e.numeric, s = e.ConstantNode, c = e.FunctionNode, f = e.OperatorNode, l = e.ParenthesisNode, p = e.SymbolNode; function m(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { simplify: !0 }, n = {}; v(n, e, t.name); var a = y(e, n); return r.simplify ? i(a) : a; } t.addConversion({ from: "identifier", to: "SymbolNode", convert: n }); var h = t(gd, { "Node, SymbolNode": m, "Node, SymbolNode, Object": m }); t.removeConversion({ from: "identifier", to: "SymbolNode", convert: n }), h._simplify = !0, h.toTex = function (e) { return d.apply(null, e.args); }; var d = t("_derivTex", { "Node, SymbolNode": function (e, t) { return T(e) && "string" === H(e.value) ? d(n(e.value).toString(), t.toString(), 1) : d(e.toTex(), t.toString(), 1); }, "Node, ConstantNode": function (e, t) { if ("string" === H(t.value))
            return d(e, n(t.value)); throw new Error("The second parameter to 'derivative' is a non-string constant"); }, "Node, SymbolNode, ConstantNode": function (e, t, r) { return d(e.toString(), t.name, r.value); }, "string, string, number": function (e, t, r) { return (1 === r ? "{d\\over d" + t + "}" : "{d^{" + r + "}\\over d" + t + "^{" + r + "}}") + "\\left[".concat(e, "\\right]"); } }), v = t("constTag", { "Object, ConstantNode, string": function (e, t) { return e[t] = !0, !0; }, "Object, SymbolNode, string": function (e, t, r) { return t.name !== r && (e[t] = !0, !0); }, "Object, ParenthesisNode, string": function (e, t, r) { return v(e, t.content, r); }, "Object, FunctionAssignmentNode, string": function (e, t, r) { return -1 === t.params.indexOf(r) ? (e[t] = !0, !0) : v(e, t.expr, r); }, "Object, FunctionNode | OperatorNode, string": function (e, t, r) { if (t.args.length > 0) {
            for (var n = v(e, t.args[0], r), i = 1; i < t.args.length; ++i)
                n = v(e, t.args[i], r) && n;
            if (n)
                return e[t] = !0, !0;
        } return !1; } }), y = t("_derivative", { "ConstantNode, Object": function (e) { return g(0); }, "SymbolNode, Object": function (e, t) { return void 0 !== t[e] ? g(0) : g(1); }, "ParenthesisNode, Object": function (e, t) { return new l(y(e.content, t)); }, "FunctionAssignmentNode, Object": function (e, t) { return void 0 !== t[e] ? g(0) : y(e.expr, t); }, "FunctionNode, Object": function (e, t) { if (1 !== e.args.length && function (e) { if ("log" !== e.name && "nthRoot" !== e.name && "pow" !== e.name || 2 !== e.args.length) {
            for (var t = 0; t < e.args.length; ++t)
                e.args[t] = g(0);
            throw e.compile().evaluate(), new Error("Expected TypeError, but none found");
        } }(e), void 0 !== t[e])
            return g(0); var r, n, i, a, o = e.args[0], u = !1, s = !1; switch (e.name) {
            case "cbrt":
                u = !0, n = new f("*", "multiply", [g(3), new f("^", "pow", [o, new f("/", "divide", [g(2), g(3)])])]);
                break;
            case "sqrt":
            case "nthRoot":
                if (1 === e.args.length)
                    u = !0, n = new f("*", "multiply", [g(2), new c("sqrt", [o])]);
                else if (2 === e.args.length)
                    return t[r = new f("/", "divide", [g(1), e.args[1]])] = t[e.args[1]], y(new f("^", "pow", [o, r]), t);
                break;
            case "log10": r = g(10);
            case "log":
                if (r || 1 !== e.args.length) {
                    if (1 === e.args.length && r || 2 === e.args.length && void 0 !== t[e.args[1]])
                        n = new f("*", "multiply", [o.clone(), new c("log", [r || e.args[1]])]), u = !0;
                    else if (2 === e.args.length)
                        return y(new f("/", "divide", [new c("log", [o]), new c("log", [e.args[1]])]), t);
                }
                else
                    n = o.clone(), u = !0;
                break;
            case "pow": return t[r] = t[e.args[1]], y(new f("^", "pow", [o, e.args[1]]), t);
            case "exp":
                n = new c("exp", [o.clone()]);
                break;
            case "sin":
                n = new c("cos", [o.clone()]);
                break;
            case "cos":
                n = new f("-", "unaryMinus", [new c("sin", [o.clone()])]);
                break;
            case "tan":
                n = new f("^", "pow", [new c("sec", [o.clone()]), g(2)]);
                break;
            case "sec":
                n = new f("*", "multiply", [e, new c("tan", [o.clone()])]);
                break;
            case "csc":
                s = !0, n = new f("*", "multiply", [e, new c("cot", [o.clone()])]);
                break;
            case "cot":
                s = !0, n = new f("^", "pow", [new c("csc", [o.clone()]), g(2)]);
                break;
            case "asin":
                u = !0, n = new c("sqrt", [new f("-", "subtract", [g(1), new f("^", "pow", [o.clone(), g(2)])])]);
                break;
            case "acos":
                u = !0, s = !0, n = new c("sqrt", [new f("-", "subtract", [g(1), new f("^", "pow", [o.clone(), g(2)])])]);
                break;
            case "atan":
                u = !0, n = new f("+", "add", [new f("^", "pow", [o.clone(), g(2)]), g(1)]);
                break;
            case "asec":
                u = !0, n = new f("*", "multiply", [new c("abs", [o.clone()]), new c("sqrt", [new f("-", "subtract", [new f("^", "pow", [o.clone(), g(2)]), g(1)])])]);
                break;
            case "acsc":
                u = !0, s = !0, n = new f("*", "multiply", [new c("abs", [o.clone()]), new c("sqrt", [new f("-", "subtract", [new f("^", "pow", [o.clone(), g(2)]), g(1)])])]);
                break;
            case "acot":
                u = !0, s = !0, n = new f("+", "add", [new f("^", "pow", [o.clone(), g(2)]), g(1)]);
                break;
            case "sinh":
                n = new c("cosh", [o.clone()]);
                break;
            case "cosh":
                n = new c("sinh", [o.clone()]);
                break;
            case "tanh":
                n = new f("^", "pow", [new c("sech", [o.clone()]), g(2)]);
                break;
            case "sech":
                s = !0, n = new f("*", "multiply", [e, new c("tanh", [o.clone()])]);
                break;
            case "csch":
                s = !0, n = new f("*", "multiply", [e, new c("coth", [o.clone()])]);
                break;
            case "coth":
                s = !0, n = new f("^", "pow", [new c("csch", [o.clone()]), g(2)]);
                break;
            case "asinh":
                u = !0, n = new c("sqrt", [new f("+", "add", [new f("^", "pow", [o.clone(), g(2)]), g(1)])]);
                break;
            case "acosh":
                u = !0, n = new c("sqrt", [new f("-", "subtract", [new f("^", "pow", [o.clone(), g(2)]), g(1)])]);
                break;
            case "atanh":
                u = !0, n = new f("-", "subtract", [g(1), new f("^", "pow", [o.clone(), g(2)])]);
                break;
            case "asech":
                u = !0, s = !0, n = new f("*", "multiply", [o.clone(), new c("sqrt", [new f("-", "subtract", [g(1), new f("^", "pow", [o.clone(), g(2)])])])]);
                break;
            case "acsch":
                u = !0, s = !0, n = new f("*", "multiply", [new c("abs", [o.clone()]), new c("sqrt", [new f("+", "add", [new f("^", "pow", [o.clone(), g(2)]), g(1)])])]);
                break;
            case "acoth":
                u = !0, s = !0, n = new f("-", "subtract", [g(1), new f("^", "pow", [o.clone(), g(2)])]);
                break;
            case "abs":
                n = new f("/", "divide", [new c(new p("abs"), [o.clone()]), o.clone()]);
                break;
            default: throw new Error('Function "' + e.name + '" is not supported by derivative, or a wrong number of arguments is passed');
        } u ? (i = "/", a = "divide") : (i = "*", a = "multiply"); var l = y(o, t); return s && (l = new f("-", "unaryMinus", [l])), new f(i, a, [l, n]); }, "OperatorNode, Object": function (e, t) { if (void 0 !== t[e])
            return g(0); if ("+" === e.op)
            return new f(e.op, e.fn, e.args.map((function (e) { return y(e, t); }))); if ("-" === e.op) {
            if (e.isUnary())
                return new f(e.op, e.fn, [y(e.args[0], t)]);
            if (e.isBinary())
                return new f(e.op, e.fn, [y(e.args[0], t), y(e.args[1], t)]);
        } if ("*" === e.op) {
            var r = e.args.filter((function (e) { return void 0 !== t[e]; }));
            if (r.length > 0) {
                var n = e.args.filter((function (e) { return void 0 === t[e]; })), i = 1 === n.length ? n[0] : new f("*", "multiply", n), u = r.concat(y(i, t));
                return new f("*", "multiply", u);
            }
            return new f("+", "add", e.args.map((function (r) { return new f("*", "multiply", e.args.map((function (e) { return e === r ? y(e, t) : e.clone(); }))); })));
        } if ("/" === e.op && e.isBinary()) {
            var s = e.args[0], l = e.args[1];
            return void 0 !== t[l] ? new f("/", "divide", [y(s, t), l]) : void 0 !== t[s] ? new f("*", "multiply", [new f("-", "unaryMinus", [s]), new f("/", "divide", [y(l, t), new f("^", "pow", [l.clone(), g(2)])])]) : new f("/", "divide", [new f("-", "subtract", [new f("*", "multiply", [y(s, t), l.clone()]), new f("*", "multiply", [s.clone(), y(l, t)])]), new f("^", "pow", [l.clone(), g(2)])]);
        } if ("^" === e.op && e.isBinary()) {
            var p = e.args[0], m = e.args[1];
            if (void 0 !== t[p])
                return T(p) && (o(p.value) || a(p.value, 1)) ? g(0) : new f("*", "multiply", [e, new f("*", "multiply", [new c("log", [p.clone()]), y(m.clone(), t)])]);
            if (void 0 !== t[m]) {
                if (T(m)) {
                    if (o(m.value))
                        return g(0);
                    if (a(m.value, 1))
                        return y(p, t);
                }
                var h = new f("^", "pow", [p.clone(), new f("-", "subtract", [m, g(1)])]);
                return new f("*", "multiply", [m.clone(), new f("*", "multiply", [y(p, t), h])]);
            }
            return new f("*", "multiply", [new f("^", "pow", [p.clone(), m.clone()]), new f("+", "add", [new f("*", "multiply", [y(p, t), new f("/", "divide", [m.clone(), p.clone()])]), new f("*", "multiply", [y(m, t), new c("log", [p.clone()])])])]);
        } throw new Error('Operator "' + e.op + '" is not supported by derivative, or a wrong number of arguments is passed'); } }); function g(e, t) { return new s(u(e, t || r.number)); } return h; })), bd = "rationalize", wd = Ee(bd, ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplifyConstant", "simplifyCore", "simplify", "?bignumber", "?fraction", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode", "ParenthesisNode"], (function (e) { e.config; var t = e.typed, r = (e.equal, e.isZero, e.add, e.subtract, e.multiply, e.divide, e.pow, e.parse, e.simplifyConstant), n = e.simplifyCore, i = e.simplify, a = (e.fraction, e.bignumber, e.mathWithTransform, e.matrix, e.AccessorNode, e.ArrayNode, e.ConstantNode), o = (e.FunctionNode, e.IndexNode, e.ObjectNode, e.OperatorNode), u = e.SymbolNode; function s(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = f(), a = c(e, t, !0, n.firstRules), o = a.variables.length, u = { exactFractions: !1 }, s = { exactFractions: !0 }; if (e = a.expression, o >= 1) {
        var m, h;
        e = l(e);
        var d, v = !0, y = !1;
        for (e = i(e, n.firstRules, {}, u); h = v ? n.distrDivRules : n.sucDivRules, v = !v, (d = (e = i(e, h, {}, s)).toString()) !== m;)
            y = !0, m = d;
        y && (e = i(e, n.firstRulesAgain, {}, u)), e = i(e, n.finalRules, {}, u);
    } var g = [], x = {}; return "OperatorNode" === e.type && e.isBinary() && "/" === e.op ? (1 === o && (e.args[0] = p(e.args[0], g), e.args[1] = p(e.args[1])), r && (x.numerator = e.args[0], x.denominator = e.args[1])) : (1 === o && (e = p(e, g)), r && (x.numerator = e, x.denominator = null)), r ? (x.coefficients = g, x.variables = a.variables, x.expression = e, x) : e; } return e.ParenthesisNode, t(bd, { Node: s, "Node, boolean": function (e, t) { return s(e, {}, t); }, "Node, Object": s, "Node, Object, boolean": s }); function c(e, t, r, n) { var a = [], o = i(e, n, t, { exactFractions: !1 }), u = "+-*" + ((r = !!r) ? "/" : ""); !function e(t) { var r = t.type; if ("FunctionNode" === r)
        throw new Error("There is an unsolved function call"); if ("OperatorNode" === r)
        if ("^" === t.op) {
            if ("ConstantNode" !== t.args[1].type || !V(parseFloat(t.args[1].value)))
                throw new Error("There is a non-integer exponent");
            e(t.args[0]);
        }
        else {
            if (-1 === u.indexOf(t.op))
                throw new Error("Operator " + t.op + " invalid in polynomial expression");
            for (var n = 0; n < t.args.length; n++)
                e(t.args[n]);
        }
    else if ("SymbolNode" === r) {
        var i = t.name;
        -1 === a.indexOf(i) && a.push(i);
    }
    else if ("ParenthesisNode" === r)
        e(t.content);
    else if ("ConstantNode" !== r)
        throw new Error("type " + r + " is not allowed in polynomial expression"); }(o); var s = {}; return s.expression = o, s.variables = a, s; } function f() { var e = [n, { l: "n+n", r: "2*n" }, { l: "n+-n", r: "0" }, r, { l: "n*(n1^-1)", r: "n/n1" }, { l: "n*n1^-n2", r: "n/n1^n2" }, { l: "n1^-1", r: "1/n1" }, { l: "n*(n1/n2)", r: "(n*n1)/n2" }, { l: "1*n", r: "n" }], t = [{ l: "(-n1)/(-n2)", r: "n1/n2" }, { l: "(-n1)*(-n2)", r: "n1*n2" }, { l: "n1--n2", r: "n1+n2" }, { l: "n1-n2", r: "n1+(-n2)" }, { l: "(n1+n2)*n3", r: "(n1*n3 + n2*n3)" }, { l: "n1*(n2+n3)", r: "(n1*n2+n1*n3)" }, { l: "c1*n + c2*n", r: "(c1+c2)*n" }, { l: "c1*n + n", r: "(c1+1)*n" }, { l: "c1*n - c2*n", r: "(c1-c2)*n" }, { l: "c1*n - n", r: "(c1-1)*n" }, { l: "v/c", r: "(1/c)*v" }, { l: "v/-c", r: "-(1/c)*v" }, { l: "-v*-c", r: "c*v" }, { l: "-v*c", r: "-c*v" }, { l: "v*-c", r: "-c*v" }, { l: "v*c", r: "c*v" }, { l: "-(-n1*n2)", r: "(n1*n2)" }, { l: "-(n1*n2)", r: "(-n1*n2)" }, { l: "-(-n1+n2)", r: "(n1-n2)" }, { l: "-(n1+n2)", r: "(-n1-n2)" }, { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" }, { l: "-(-n1/n2)", r: "(n1/n2)" }, { l: "-(n1/n2)", r: "(-n1/n2)" }], i = [{ l: "(n1/(n2/n3))", r: "((n1*n3)/n2)" }, { l: "(n1/n2/n3)", r: "(n1/(n2*n3))" }], a = {}; return a.firstRules = e.concat(t, i), a.distrDivRules = [{ l: "(n1/n2 + n3/n4)", r: "((n1*n4 + n3*n2)/(n2*n4))" }, { l: "(n1/n2 + n3)", r: "((n1 + n3*n2)/n2)" }, { l: "(n1 + n2/n3)", r: "((n1*n3 + n2)/n3)" }], a.sucDivRules = i, a.firstRulesAgain = e.concat(t), a.finalRules = [n, { l: "n*-n", r: "-n^2" }, { l: "n*n", r: "n^2" }, r, { l: "n*-n^n1", r: "-n^(n1+1)" }, { l: "n*n^n1", r: "n^(n1+1)" }, { l: "n^n1*-n^n2", r: "-n^(n1+n2)" }, { l: "n^n1*n^n2", r: "n^(n1+n2)" }, { l: "n^n1*-n", r: "-n^(n1+1)" }, { l: "n^n1*n", r: "n^(n1+1)" }, { l: "n^n1/-n", r: "-n^(n1-1)" }, { l: "n^n1/n", r: "n^(n1-1)" }, { l: "n/-n^n1", r: "-n^(1-n1)" }, { l: "n/n^n1", r: "n^(1-n1)" }, { l: "n^n1/-n^n2", r: "n^(n1-n2)" }, { l: "n^n1/n^n2", r: "n^(n1-n2)" }, { l: "n1+(-n2*n3)", r: "n1-n2*n3" }, { l: "v*(-c)", r: "-c*v" }, { l: "n1+-n2", r: "n1-n2" }, { l: "v*c", r: "c*v" }, { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" }], a; } function l(e, t, r) { var n = e.type, i = arguments.length > 1; if ("OperatorNode" === n && e.isBinary()) {
        var u, s = !1;
        if ("^" === e.op && ("ParenthesisNode" !== e.args[0].type && "OperatorNode" !== e.args[0].type || "ConstantNode" !== e.args[1].type || (s = (u = parseFloat(e.args[1].value)) >= 2 && V(u))), s) {
            if (u > 2) {
                var c = e.args[0], f = new o("^", "pow", [e.args[0].cloneDeep(), new a(u - 1)]);
                e = new o("*", "multiply", [c, f]);
            }
            else
                e = new o("*", "multiply", [e.args[0], e.args[0].cloneDeep()]);
            i && ("content" === r ? t.content = e : t.args[r] = e);
        }
    } if ("ParenthesisNode" === n)
        l(e.content, e, "content");
    else if ("ConstantNode" !== n && "SymbolNode" !== n)
        for (var p = 0; p < e.args.length; p++)
            l(e.args[p], e, p); if (!i)
        return e; } function p(e, t) { void 0 === t && (t = []), t[0] = 0; var r = 0, n = ""; !function e(i, a, o) { var u = i.type; if ("FunctionNode" === u)
        throw new Error("There is an unsolved function call"); if ("OperatorNode" === u) {
        if (-1 === "+-*^".indexOf(i.op))
            throw new Error("Operator " + i.op + " invalid");
        if (null !== a) {
            if (("unaryMinus" === i.fn || "pow" === i.fn) && "add" !== a.fn && "subtract" !== a.fn && "multiply" !== a.fn)
                throw new Error("Invalid " + i.op + " placing");
            if (("subtract" === i.fn || "add" === i.fn || "multiply" === i.fn) && "add" !== a.fn && "subtract" !== a.fn)
                throw new Error("Invalid " + i.op + " placing");
            if (("subtract" === i.fn || "add" === i.fn || "unaryMinus" === i.fn) && 0 !== o.noFil)
                throw new Error("Invalid " + i.op + " placing");
        }
        "^" !== i.op && "*" !== i.op || (o.fire = i.op);
        for (var s = 0; s < i.args.length; s++)
            "unaryMinus" === i.fn && (o.oper = "-"), "+" !== i.op && "subtract" !== i.fn || (o.fire = "", o.cte = 1, o.oper = 0 === s ? "+" : i.op), o.noFil = s, e(i.args[s], i, o);
    }
    else if ("SymbolNode" === u) {
        if (i.name !== n && "" !== n)
            throw new Error("There is more than one variable");
        if (n = i.name, null === a)
            return void (t[1] = 1);
        if ("^" === a.op && 0 !== o.noFil)
            throw new Error("In power the variable should be the first parameter");
        if ("*" === a.op && 1 !== o.noFil)
            throw new Error("In multiply the variable should be the second parameter");
        "" !== o.fire && "*" !== o.fire || (r < 1 && (t[1] = 0), t[1] += o.cte * ("+" === o.oper ? 1 : -1), r = Math.max(1, r));
    }
    else {
        if ("ConstantNode" !== u)
            throw new Error("Type " + u + " is not allowed");
        var c = parseFloat(i.value);
        if (null === a)
            return void (t[0] = c);
        if ("^" === a.op) {
            if (1 !== o.noFil)
                throw new Error("Constant cannot be powered");
            if (!V(c) || c <= 0)
                throw new Error("Non-integer exponent is not allowed");
            for (var f = r + 1; f < c; f++)
                t[f] = 0;
            return c > r && (t[c] = 0), t[c] += o.cte * ("+" === o.oper ? 1 : -1), void (r = Math.max(c, r));
        }
        o.cte = c, "" === o.fire && (t[0] += o.cte * ("+" === o.oper ? 1 : -1));
    } }(e, null, { cte: 1, oper: "+", fire: "" }); for (var i, s = !0, c = r = t.length - 1; c >= 0; c--)
        if (0 !== t[c]) {
            var f = new a(s ? t[c] : Math.abs(t[c])), l = t[c] < 0 ? "-" : "+";
            if (c > 0) {
                var p = new u(n);
                if (c > 1) {
                    var m = new a(c);
                    p = new o("^", "pow", [p, m]);
                }
                f = -1 === t[c] && s ? new o("-", "unaryMinus", [p]) : 1 === Math.abs(t[c]) ? p : new o("*", "multiply", [f, p]);
            }
            i = s ? f : "+" === l ? new o("+", "add", [i, f]) : new o("-", "subtract", [i, f]), s = !1;
        } return s ? new a(0) : i; } })), Nd = Ee("reviver", ["classes"], (function (e) { var t = e.classes; return function (e, r) { var n = t[r && r.mathjs]; return n && "function" == typeof n.fromJSON ? n.fromJSON(r) : r; }; })), Dd = Ee("replacer", [], (function () { return function (e, t) { return "number" != typeof t || isFinite(t) && !isNaN(t) ? t : { mathjs: "number", value: String(t) }; }; })), Ed = Math.PI, Ad = 2 * Math.PI, Sd = Math.E, Cd = Ee("true", [], (function () { return !0; })), Md = Ee("false", [], (function () { return !1; })), Fd = Ee("null", [], (function () { return null; })), Od = Vd("Infinity", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r(1 / 0) : 1 / 0; })), Td = Vd("NaN", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r(NaN) : NaN; })), Bd = Vd("pi", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? Kc(r) : Ed; })), _d = Vd("tau", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? ef(r) : Ad; })), kd = Vd("e", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? Xc(r) : Sd; })), Id = Vd("phi", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? Qc(r) : 1.618033988749895; })), Rd = Vd("LN2", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r(2).ln() : Math.LN2; })), zd = Vd("LN10", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r(10).ln() : Math.LN10; })), qd = Vd("LOG2E", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r(1).div(new r(2).ln()) : Math.LOG2E; })), jd = Vd("LOG10E", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r(1).div(new r(10).ln()) : Math.LOG10E; })), Pd = Vd("SQRT1_2", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r("0.5").sqrt() : Math.SQRT1_2; })), Ld = Vd("SQRT2", ["config", "?BigNumber"], (function (e) { var t = e.config, r = e.BigNumber; return "BigNumber" === t.number ? new r(2).sqrt() : Math.SQRT2; })), Ud = Vd("i", ["Complex"], (function (e) { return e.Complex.I; })), $d = Ee("PI", ["pi"], (function (e) { return e.pi; })), Hd = Ee("E", ["e"], (function (e) { return e.e; })), Gd = Ee("version", [], (function () { return "11.5.0"; }));
    function Vd(e, t, r) { return Ee(e, t, r, { recreateOnConfigChange: !0 }); }
    var Zd = $v("speedOfLight", "299792458", "m s^-1"), Wd = $v("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2"), Jd = $v("planckConstant", "6.62607015e-34", "J s"), Yd = $v("reducedPlanckConstant", "1.0545718176461565e-34", "J s"), Xd = $v("magneticConstant", "1.25663706212e-6", "N A^-2"), Qd = $v("electricConstant", "8.8541878128e-12", "F m^-1"), Kd = $v("vacuumImpedance", "376.730313667", "ohm"), ev = $v("coulomb", "8.987551792261171e9", "N m^2 C^-2"), tv = $v("elementaryCharge", "1.602176634e-19", "C"), rv = $v("bohrMagneton", "9.2740100783e-24", "J T^-1"), nv = $v("conductanceQuantum", "7.748091729863649e-5", "S"), iv = $v("inverseConductanceQuantum", "12906.403729652257", "ohm"), av = $v("magneticFluxQuantum", "2.0678338484619295e-15", "Wb"), ov = $v("nuclearMagneton", "5.0507837461e-27", "J T^-1"), uv = $v("klitzing", "25812.807459304513", "ohm"), sv = $v("bohrRadius", "5.29177210903e-11", "m"), cv = $v("classicalElectronRadius", "2.8179403262e-15", "m"), fv = $v("electronMass", "9.1093837015e-31", "kg"), lv = $v("fermiCoupling", "1.1663787e-5", "GeV^-2"), pv = Hv("fineStructure", .0072973525693), mv = $v("hartreeEnergy", "4.3597447222071e-18", "J"), hv = $v("protonMass", "1.67262192369e-27", "kg"), dv = $v("deuteronMass", "3.3435830926e-27", "kg"), vv = $v("neutronMass", "1.6749271613e-27", "kg"), yv = $v("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1"), gv = $v("rydberg", "10973731.568160", "m^-1"), xv = $v("thomsonCrossSection", "6.6524587321e-29", "m^2"), bv = Hv("weakMixingAngle", .2229), wv = Hv("efimovFactor", 22.7), Nv = $v("atomicMass", "1.66053906660e-27", "kg"), Dv = $v("avogadro", "6.02214076e23", "mol^-1"), Ev = $v("boltzmann", "1.380649e-23", "J K^-1"), Av = $v("faraday", "96485.33212331001", "C mol^-1"), Sv = $v("firstRadiation", "3.7417718521927573e-16", "W m^2"), Cv = $v("loschmidt", "2.686780111798444e25", "m^-3"), Mv = $v("gasConstant", "8.31446261815324", "J K^-1 mol^-1"), Fv = $v("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1"), Ov = $v("molarVolume", "0.022413969545014137", "m^3 mol^-1"), Tv = Hv("sackurTetrode", -1.16487052358), Bv = $v("secondRadiation", "0.014387768775039337", "m K"), _v = $v("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4"), kv = $v("wienDisplacement", "2.897771955e-3", "m K"), Iv = $v("molarMass", "0.99999999965e-3", "kg mol^-1"), Rv = $v("molarMassC12", "11.9999999958e-3", "kg mol^-1"), zv = $v("gravity", "9.80665", "m s^-2"), qv = $v("planckLength", "1.616255e-35", "m"), jv = $v("planckMass", "2.176435e-8", "kg"), Pv = $v("planckTime", "5.391245e-44", "s"), Lv = $v("planckCharge", "1.87554603778e-18", "C"), Uv = $v("planckTemperature", "1.416785e+32", "K");
    function $v(e, t, r) { return Ee(e, ["config", "Unit", "BigNumber"], (function (e) { var n = e.config, i = e.Unit, a = e.BigNumber, o = new i("BigNumber" === n.number ? new a(t) : parseFloat(t), r); return o.fixPrefix = !0, o; })); }
    function Hv(e, t) { return Ee(e, ["config", "BigNumber"], (function (e) { var r = e.config, n = e.BigNumber; return "BigNumber" === r.number ? new n(t) : t; })); }
    var Gv = Ee("apply", ["typed", "isInteger"], (function (e) { var t = e.typed, r = e.isInteger, n = ra({ typed: t, isInteger: r }); return t("apply", { "...any": function (e) { var t = e[1]; i(t) ? e[1] = t - 1 : a(t) && (e[1] = t.minus(1)); try {
            return n.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), Vv = Ee("column", ["typed", "Index", "matrix", "range"], (function (e) { var t = e.typed, r = e.Index, n = e.matrix, a = e.range, o = tu({ typed: t, Index: r, matrix: n, range: a }); return t("column", { "...any": function (e) { var t = e.length - 1, r = e[t]; i(r) && (e[t] = r - 1); try {
            return o.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 });
    function Zv(e, t, r) { var n = e.filter((function (e) { return U(e) && !(e.name in t) && !r.has(e.name); }))[0]; if (!n)
        throw new Error('No undefined variable found in inline expression "' + e + '"'); var i = n.name, a = Hp(r), o = e.compile(); return function (e) { return a.set(i, e), o.evaluate(a); }; }
    var Wv = Ee("filter", ["typed"], (function (e) { var t = e.typed; function r(e, t, r) { var i, a; return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = U(e[1]) || _(e[1]) ? e[1].compile().evaluate(r) : Zv(e[1], t, r)), n(i, a); } r.rawArgs = !0; var n = t("filter", { "Array, function": Jv, "Matrix, function": function (e, t) { return e.create(Jv(e.toArray(), t)); }, "Array, RegExp": vn, "Matrix, RegExp": function (e, t) { return e.create(vn(e.toArray(), t)); } }); return r; }), { isTransformFunction: !0 });
    function Jv(e, t) { var r = En(t); return dn(e, (function (e, n, i) { return 1 === r ? t(e) : 2 === r ? t(e, [n + 1]) : t(e, [n + 1], i); })); }
    var Yv = Ee("forEach", ["typed"], (function (e) { var t = e.typed; function r(e, t, r) { var i, a; return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = U(e[1]) || _(e[1]) ? e[1].compile().evaluate(r) : Zv(e[1], t, r)), n(i, a); } r.rawArgs = !0; var n = t("forEach", { "Array | Matrix, function": function (e, t) { var r = En(t); !function n(i, a) { Array.isArray(i) ? hn(i, (function (e, t) { n(e, a.concat(t + 1)); })) : 1 === r ? t(i) : 2 === r ? t(i, a) : t(i, a, e); }(e.valueOf(), []); } }); return r; }), { isTransformFunction: !0 }), Xv = Ee("index", ["Index"], (function (e) { var t = e.Index; return function () { for (var e = [], r = 0, n = arguments.length; r < n; r++) {
        var o = arguments[r];
        if (d(o))
            o.start--, o.end -= o.step > 0 ? 0 : 2;
        else if (o && !0 === o.isSet)
            o = o.map((function (e) { return e - 1; }));
        else if (f(o) || l(o))
            o = o.map((function (e) { return e - 1; }));
        else if (i(o))
            o--;
        else if (a(o))
            o = o.toNumber() - 1;
        else if ("string" != typeof o)
            throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
        e[r] = o;
    } var u = new t; return t.apply(u, e), u; }; }), { isTransformFunction: !0 }), Qv = Ee("map", ["typed"], (function (e) { var t = e.typed; function r(e, t, r) { var i, a; return e[0] && (i = e[0].compile().evaluate(r)), e[1] && (a = U(e[1]) || _(e[1]) ? e[1].compile().evaluate(r) : Zv(e[1], t, r)), n(i, a); } r.rawArgs = !0; var n = t("map", { "Array, function": function (e, t) { return Kv(e, t, e); }, "Matrix, function": function (e, t) { return e.create(Kv(e.valueOf(), t, e)); } }); return r; }), { isTransformFunction: !0 });
    function Kv(e, t, r) { var n = En(t); return function e(i, a) { return Array.isArray(i) ? mn(i, (function (t, r) { return e(t, a.concat(r + 1)); })) : 1 === n ? t(i) : 2 === n ? t(i, a) : t(i, a, r); }(e, []); }
    function ey(e) { if (2 === e.length && p(e[0])) {
        var t = (e = e.slice())[1];
        i(t) ? e[1] = t - 1 : a(t) && (e[1] = t.minus(1));
    } return e; }
    var ty = Ee("max", ["typed", "config", "numeric", "larger"], (function (e) { var t = e.typed, r = e.config, n = e.numeric, i = e.larger, a = $c({ typed: t, config: r, numeric: n, larger: i }); return t("max", { "...any": function (e) { e = ey(e); try {
            return a.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), ry = Ee("mean", ["typed", "add", "divide"], (function (e) { var t = e.typed, r = e.add, n = e.divide, i = rh({ typed: t, add: r, divide: n }); return t("mean", { "...any": function (e) { e = ey(e); try {
            return i.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), ny = Ee("min", ["typed", "config", "numeric", "smaller"], (function (e) { var t = e.typed, r = e.config, n = e.numeric, i = e.smaller, a = Hc({ typed: t, config: r, numeric: n, smaller: i }); return t("min", { "...any": function (e) { e = ey(e); try {
            return a.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), iy = Ee("range", ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"], (function (e) { var t = e.typed, r = e.config, n = e.matrix, i = e.bignumber, a = e.smaller, o = e.smallerEq, u = e.larger, s = e.largerEq, c = Ou({ typed: t, config: r, matrix: n, bignumber: i, smaller: a, smallerEq: o, larger: u, largerEq: s }); return t("range", { "...any": function (e) { return "boolean" != typeof e[e.length - 1] && e.push(!0), c.apply(null, e); } }); }), { isTransformFunction: !0 }), ay = Ee("row", ["typed", "Index", "matrix", "range"], (function (e) { var t = e.typed, r = e.Index, n = e.matrix, a = e.range, o = ju({ typed: t, Index: r, matrix: n, range: a }); return t("row", { "...any": function (e) { var t = e.length - 1, r = e[t]; i(r) && (e[t] = r - 1); try {
            return o.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), oy = Ee("subset", ["typed", "matrix"], (function (e) { var t = e.typed, r = e.matrix, n = Gu({ typed: t, matrix: r }); return t("subset", { "...any": function (e) { try {
            return n.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), uy = Ee("concat", ["typed", "matrix", "isInteger"], (function (e) { var t = e.typed, r = e.matrix, n = e.isInteger, o = Qo({ typed: t, matrix: r, isInteger: n }); return t("concat", { "...any": function (e) { var t = e.length - 1, r = e[t]; i(r) ? e[t] = r - 1 : a(r) && (e[t] = r.minus(1)); try {
            return o.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), sy = "diff", cy = Ee(sy, ["typed", "matrix", "subtract", "number", "bignumber"], (function (e) { var t = e.typed, r = e.matrix, n = e.subtract, i = e.number, a = e.bignumber, o = Eu({ typed: t, matrix: r, subtract: n, number: i, bignumber: a }); return t(sy, { "...any": function (e) { e = ey(e); try {
            return o.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), fy = Ee("std", ["typed", "map", "sqrt", "variance"], (function (e) { var t = e.typed, r = e.map, n = e.sqrt, i = e.variance, a = fh({ typed: t, map: r, sqrt: n, variance: i }); return t("std", { "...any": function (e) { e = ey(e); try {
            return a.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), ly = Ee("sum", ["typed", "config", "add", "numeric"], (function (e) { var t = e.typed, r = e.config, n = e.add, i = e.numeric, a = Qm({ typed: t, config: r, add: n, numeric: i }); return t("sum", { "...any": function (e) { e = ey(e); try {
            return a.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), py = "cumsum", my = Ee(py, ["typed", "add", "unaryPlus"], (function (e) { var t = e.typed, r = e.add, n = e.unaryPlus, o = eh({ typed: t, add: r, unaryPlus: n }); return t(py, { "...any": function (e) { if (2 === e.length && p(e[0])) {
            var t = e[1];
            i(t) ? e[1] = t - 1 : a(t) && (e[1] = t.minus(1));
        } try {
            return o.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), hy = "variance", dy = Ee(hy, ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"], (function (e) { var t = e.typed, r = e.add, n = e.subtract, i = e.multiply, a = e.divide, o = e.apply, u = e.isNaN, s = sh({ typed: t, add: r, subtract: n, multiply: i, divide: a, apply: o, isNaN: u }); return t(hy, { "...any": function (e) { e = ey(e); try {
            return s.apply(null, e);
        }
        catch (e) {
            throw Ql(e);
        } } }); }), { isTransformFunction: !0 }), vy = (r(4812), r(4279));
    var yy = { epsilon: 1e-12, matrix: "Matrix", number: "number", precision: 64, predictable: !1, randomSeed: null }, gy = ["Matrix", "Array"], xy = ["number", "BigNumber", "Fraction"];
    function by(e, t) { function r(r) { if (r) {
        var n = de(e, he);
        wy(r, "matrix", gy), wy(r, "number", xy), ye(e, r);
        var i = de(e, he), a = de(r, he);
        return t("config", i, n, a), i;
    } return de(e, he); } return r.MATRIX_OPTIONS = gy, r.NUMBER_OPTIONS = xy, Object.keys(yy).forEach((function (t) { Object.defineProperty(r, t, { get: function () { return e[t]; }, enumerable: !0, configurable: !0 }); })), r; }
    function wy(e, t, r) { var n, i; void 0 !== e[t] && (n = r, i = e[t], -1 === n.indexOf(i)) && console.warn('Warning: Unknown value "' + e[t] + '" for configuration option "' + t + '". Available options: ' + r.map((function (e) { return JSON.stringify(e); })).join(", ") + "."); }
    const Ny = function e(r, n) { var B = Yc({}, yy, n); if ("function" != typeof Object.create)
        throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility."); var H, V, Z = (H = { isNumber: i, isComplex: o, isBigNumber: a, isFraction: u, isUnit: s, isString: c, isArray: f, isMatrix: l, isCollection: p, isDenseMatrix: m, isSparseMatrix: h, isRange: d, isIndex: v, isBoolean: y, isResultSet: g, isHelp: x, isFunction: b, isDate: w, isRegExp: N, isObject: D, isNull: E, isUndefined: A, isAccessorNode: S, isArrayNode: C, isAssignmentNode: M, isBlockNode: F, isConditionalNode: O, isConstantNode: T, isFunctionAssignmentNode: _, isFunctionNode: k, isIndexNode: I, isNode: R, isObjectNode: z, isOperatorNode: q, isParenthesisNode: j, isRangeNode: P, isRelationalNode: L, isSymbolNode: U, isChain: $ }, V = new vy, H.on = V.on.bind(V), H.off = V.off.bind(V), H.once = V.once.bind(V), H.emit = V.emit.bind(V), H); Z.config = by(B, Z.emit), Z.expression = { transform: {}, mathWithTransform: { config: Z.config } }; var W = {}; function J() { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r]; return Z.typed.apply(Z.typed, t); } J.isTypedFunction = G.isTypedFunction; var Y = function (e, r, n, i) { function c(t, r, a) { var o; if (a.wrap && "function" == typeof r && (r = function (e) { var t = function () { for (var t = [], r = 0, i = arguments.length; r < i; r++) {
        var a = arguments[r];
        t[r] = a && a.valueOf();
    } return e.apply(n, t); }; return e.transform && (t.transform = e.transform), t; }(r)), "function" == typeof (o = r) && "string" == typeof o.signature && (r = e(t, Jc({}, r.signature, r))), e.isTypedFunction(n[t]) && e.isTypedFunction(r))
        return r = a.override ? e(t, r.signatures) : e(n[t], r), n[t] = r, delete i[t], f(t, r), void n.emit("import", t, (function () { return r; })); if (void 0 === n[t] || a.override)
        return n[t] = r, delete i[t], f(t, r), void n.emit("import", t, (function () { return r; })); if (!a.silent)
        throw new Error('Cannot import "' + t + '": already exists'); } function f(e, t) { t && "function" == typeof t.transform ? (n.expression.transform[e] = t.transform, d(e) && (n.expression.mathWithTransform[e] = t.transform)) : (delete n.expression.transform[e], d(e) && (n.expression.mathWithTransform[e] = t)); } function p(e) { delete n.expression.transform[e], d(e) ? n.expression.mathWithTransform[e] = n[e] : delete n.expression.mathWithTransform[e]; } function m(t, r) { var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.fn; if (wn(a, "."))
        throw new Error("Factory name should not contain a nested path. Name: " + JSON.stringify(a)); var o = y(t) ? n.expression.transform : n, u = a in n.expression.transform, s = Ne(o, a) ? o[a] : void 0, c = function () { var i = {}; t.dependencies.map(Se).forEach((function (e) { if (wn(e, "."))
        throw new Error("Factory dependency should not contain a nested path. Name: " + JSON.stringify(e)); "math" === e ? i.math = n : "mathWithTransform" === e ? i.mathWithTransform = n.expression.mathWithTransform : "classes" === e ? i.classes = n : i[e] = n[e]; })); var o = t(i); if (o && "function" == typeof o.transform)
        throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"'); if (void 0 === s || r.override)
        return o; if (e.isTypedFunction(s) && e.isTypedFunction(o))
        return e(s, o); if (r.silent)
        return s; throw new Error('Cannot import "' + a + '": already exists'); }; t.meta && !1 === t.meta.lazy ? (o[a] = c(), s && u ? p(a) : (y(t) || v(t)) && we(n.expression.mathWithTransform, a, (function () { return o[a]; }))) : (we(o, a, c), s && u ? p(a) : (y(t) || v(t)) && we(n.expression.mathWithTransform, a, (function () { return o[a]; }))), i[a] = t, n.emit("import", a, c); } function h(e) { return "function" == typeof e || "number" == typeof e || "string" == typeof e || "boolean" == typeof e || null === e || s(e) || o(e) || a(e) || u(e) || l(e) || Array.isArray(e); } function d(e) { return !Ne(g, e); } function v(e) { return !(-1 !== e.fn.indexOf(".") || Ne(g, e.fn) || e.meta && e.meta.isClass); } function y(e) { return void 0 !== e && void 0 !== e.meta && !0 === e.meta.isTransformFunction || !1; } var g = { expression: !0, type: !0, docs: !0, error: !0, json: !0, chain: !0 }; return function (e, r) { var n = arguments.length; if (1 !== n && 2 !== n)
        throw new _u("import", n, 1, 2); function i(e, n, a) { if (Array.isArray(n))
        n.forEach((function (t) { return i(e, t); }));
    else if ("object" === t(n))
        for (var o in n)
            Ne(n, o) && i(e, n[o], o);
    else if (Ae(n) || void 0 !== a) {
        var u = Ae(n) ? y(n) ? n.fn + ".transform" : n.fn : a;
        if (Ne(e, u) && e[u] !== n && !r.silent)
            throw new Error('Cannot import "' + u + '" twice');
        e[u] = n;
    }
    else if (!r.silent)
        throw new TypeError("Factory, Object, or Array expected"); } r || (r = {}); var a = {}; for (var o in i(a, e), a)
        if (Ne(a, o)) {
            var u = a[o];
            if (Ae(u))
                m(u, r);
            else if (h(u))
                c(o, u, r);
            else if (!r.silent)
                throw new TypeError("Factory, Object, or Array expected");
        } }; }(J, 0, Z, W); return Z.import = Y, Z.on("config", (function () { De(W).forEach((function (e) { e && e.meta && e.meta.recreateOnConfigChange && Y(e, { override: !0 }); })); })), Z.create = e.bind(null, r), Z.factory = Ee, Z.import(De(xe(r))), Z.ArgumentsError = _u, Z.DimensionError = Yr, Z.IndexError = Xr, Z; }(e);
})(), n.default; })()));
//# sourceMappingURL=math.js.map
//# sourceMappingURL=math.js.map