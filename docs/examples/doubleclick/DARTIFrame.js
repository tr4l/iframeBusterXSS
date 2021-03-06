(function() {
    var m, p = this,
        r = function(a) {
            return void 0 !== a
        },
        t = function(a) {
            return "string" == typeof a
        },
        aa = function(a, b, c) {
            a = a.split(".");
            c = c || p;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && r(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
        },
        ba = function(a, b) {
            a = a.split(".");
            b = b || p;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        ca = function() {},
        da = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        v = function(a) {
            return "array" == da(a)
        },
        x = function(a) {
            return "function" == da(a)
        },
        y = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ha = function(a) {
            return a[ea] || (a[ea] = ++fa)
        },
        ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0,
        ia = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ja = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c,
                        d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        z = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? z = ia : z = ja;
            return z.apply(null, arguments)
        },
        ka = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        A = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.C = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ub = function(a, c, g) {
                for (var d =
                        Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var la = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        na = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var g = 0; g < ma.length; g++) c = ma[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var oa = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        wa = function(a) {
            if (!pa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ua, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;"));
            return a
        },
        qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        va = /\x00/g,
        pa = /[\x00&<>"']/,
        xa = function(a, b) {
            return a < b ? -1 : a > b ? 1 :
                0
        };
    var B = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, B);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    A(B, Error);
    B.prototype.name = "CustomError";
    var ya;
    var za = function(a, b) {
            if (t(a)) return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Aa = function(a, b, c) {
            for (var d = a.length, e = t(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        },
        Ba = function(a, b) {
            for (var c = a.length, d = Array(c), e = t(a) ? a.split("") : a, g = 0; g < c; g++) g in e && (d[g] = b.call(void 0, e[g], g, a));
            return d
        },
        Ca = function(a, b) {
            for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Da = function(a,
            b, c) {
            a: {
                for (var d = a.length, e = t(a) ? a.split("") : a, g = 0; g < d; g++)
                    if (g in e && b.call(c, e[g], g, a)) {
                        b = g;
                        break a
                    } b = -1
            }
            return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
        },
        Ea = function(a, b) {
            b = za(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        Fa = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Ga = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Ha = {
        Ma: "ad_container_id",
        Ta: "hideObjects",
        ob: "mtfTop",
        nb: "mtfLeft",
        tb: "zindex",
        Oa: "mtfDuration",
        rb: "wmode",
        pb: "preferFlash",
        Qa: "as_kw",
        Ra: "as_lat",
        Sa: "as_lng",
        Ua: "mtfIFPath",
        Pa: "expansionMode",
        lb: "top_container",
        kb: "mtfTopFloat",
        jb: "mtfTopDuration",
        mb: "mtfTopWmode",
        hb: "right_container",
        gb: "mtfRightFloat",
        fb: "mtfRightDuration",
        ib: "mtfRightWmode",
        Za: "bottom_container",
        Ya: "mtfBottomFloat",
        Xa: "mtfBottomDuration",
        $a: "mtfBottomWmode",
        cb: "left_container",
        bb: "mtfLeftFloat",
        ab: "mtfLeftDuration",
        eb: "mtfLeftWmode",
        qb: "mtfRenderFloatInplace",
        sb: "tryToWriteHtmlInline",
        Na: "debugjs",
        Va: "dcapp",
        La: "breakoutiframe",
        Wa: "inMobileAdSdk"
    };
    (function() {
        var a = {};
        la(Ha, function(b) {
            a[b.toLowerCase()] = b
        });
        return a
    })();
    var Ja = function(a) {
            this.a = a;
            a: {
                for (var b in a.displayConfigParameters)
                    if (!(0 <= za(Ia, b))) {
                        a = !0;
                        break a
                    } a = !1
            }
            this.c = a
        },
        Ia = ["ad_container_id"],
        Ka = function(a, b) {
            for (var c = 0; c < a.a.primaryFiles.length; ++c)
                if (a.a.primaryFiles[c].renderAs == b) return !0;
            return !1
        };
    var La = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Ma = function(a) {
            var b = a.match(La);
            a = b[1];
            var c = b[2],
                d = b[3];
            b = b[4];
            var e = "";
            a && (e += a + ":");
            d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
            return e
        },
        Na = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var g = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else g = a[c];
                    b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var Oa = function(a) {
        var b = window;
        try {
            return a.document.domain == b.document.domain
        } catch (c) {
            return !1
        }
    };
    var Pa;
    a: {
        var Qa = p.navigator;
        if (Qa) {
            var Ra = Qa.userAgent;
            if (Ra) {
                Pa = Ra;
                break a
            }
        }
        Pa = ""
    }
    var C = function(a) {
        return -1 != Pa.indexOf(a)
    };
    var Sa = function(a) {
        Sa[" "](a);
        return a
    };
    Sa[" "] = ca;
    var Ta = function(a, b) {
            try {
                return Sa(a[b]), !0
            } catch (c) {}
            return !1
        },
        Va = function(a, b) {
            var c = Ua;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Wa = C("Opera"),
        D = C("Trident") || C("MSIE"),
        Xa = C("Edge"),
        Ya = C("Gecko") && !(-1 != Pa.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        Za = -1 != Pa.toLowerCase().indexOf("webkit") && !C("Edge"),
        $a = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        ab;
    a: {
        var bb = "",
            cb = function() {
                var a = Pa;
                if (Ya) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Xa) return /Edge\/([\d\.]+)/.exec(a);
                if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Za) return /WebKit\/(\S+)/.exec(a);
                if (Wa) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();cb && (bb = cb ? cb[1] : "");
        if (D) {
            var db = $a();
            if (null != db && db > parseFloat(bb)) {
                ab = String(db);
                break a
            }
        }
        ab = bb
    }
    var eb = ab,
        Ua = {},
        fb = function(a) {
            return Va(a, function() {
                for (var b = 0, c = oa(String(eb)).split("."), d = oa(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
                    var f = c[g] || "",
                        h = d[g] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == h[0].length) break;
                        b = xa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || xa(0 == f[2].length, 0 == h[2].length) || xa(f[2], h[2]);
                        f = f[3];
                        h = h[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        gb;
    var hb = p.document;
    gb = hb && D ? $a() || ("CSS1Compat" == hb.compatMode ? parseInt(eb, 10) : 5) : void 0;
    var ib = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var E = function() {
        this.a = "";
        this.c = jb
    };
    E.prototype.L = !0;
    E.prototype.J = function() {
        return this.a
    };
    E.prototype.toString = function() {
        return "Const{" + this.a + "}"
    };
    var kb = function(a) {
            return a instanceof E && a.constructor === E && a.c === jb ? a.a : "type_error:Const"
        },
        jb = {},
        lb = function(a) {
            var b = new E;
            b.a = a;
            return b
        };
    lb("");
    var F = function() {
        this.a = mb
    };
    F.prototype.L = !0;
    F.prototype.J = function() {
        return ""
    };
    F.prototype.ga = !0;
    F.prototype.X = function() {
        return 1
    };
    var mb = {};
    var G = function() {
        this.a = "";
        this.c = nb
    };
    G.prototype.L = !0;
    G.prototype.J = function() {
        return this.a
    };
    G.prototype.ga = !0;
    G.prototype.X = function() {
        return 1
    };
    var ob = function(a) {
            if (a instanceof G && a.constructor === G && a.c === nb) return a.a;
            da(a);
            return "type_error:SafeUrl"
        },
        pb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        rb = function(a) {
            if (a instanceof G) return a;
            a = a.L ? a.J() : String(a);
            pb.test(a) || (a = "about:invalid#zClosurez");
            return qb(a)
        },
        nb = {},
        qb = function(a) {
            var b = new G;
            b.a = a;
            return b
        };
    qb("about:blank");
    var tb = function() {
        this.a = "";
        this.c = sb
    };
    tb.prototype.L = !0;
    var sb = {};
    tb.prototype.J = function() {
        return this.a
    };
    var ub = function(a) {
            var b = new tb;
            b.a = a;
            return b
        },
        vb = ub(""),
        Ab = function(a) {
            if (a instanceof G) a = 'url("' + ob(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            else if (a instanceof E) a = kb(a);
            else {
                a = String(a);
                var b = a.replace(wb, "$1").replace(xb, "url");
                if (b = yb.test(b)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c
                }
                a = b ? zb(a) : "zClosurez"
            }
            return a
        },
        yb = /^[-,."'%_!# a-zA-Z0-9]+$/,
        xb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        wb = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g,
        zb = function(a) {
            return a.replace(xb, function(a, c, d, e) {
                var b = "";
                d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
                    b = c;
                    return d
                });
                a = rb(d).J();
                return c + b + a + b + e
            })
        };
    var H = function() {
        this.a = "";
        this.g = Bb;
        this.c = null
    };
    H.prototype.ga = !0;
    H.prototype.X = function() {
        return this.c
    };
    H.prototype.L = !0;
    H.prototype.J = function() {
        return this.a
    };
    var Cb = function(a) {
            if (a instanceof H && a.constructor === H && a.g === Bb) return a.a;
            da(a);
            return "type_error:SafeHtml"
        },
        Db = /^[a-zA-Z0-9-]+$/,
        Eb = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Gb = function(a) {
            var b = 0,
                c = "",
                d = function(a) {
                    if (v(a)) Aa(a, d);
                    else {
                        if (a instanceof H) var e = a;
                        else e = null, a.ga && (e = a.X()), a = wa(a.L ? a.J() : String(a)), e = Fb(a, e);
                        c += Cb(e);
                        e = e.X();
                        0 == b ? b = e : 0 != e && b != e && (b = null)
                    }
                };
            Aa(arguments, d);
            return Fb(c, b)
        },
        Bb = {},
        Fb = function(a, b) {
            var c = new H;
            c.a = a;
            c.c = b;
            return c
        };
    Fb("<!DOCTYPE html>", 0);
    Fb("", 0);
    Fb("<br>", 0);
    var Hb = function(a) {
            return a.parentWindow || a.defaultView
        },
        Ib = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Jb = function() {
            this.a = p.document || document
        };
    var Kb;
    (Kb = !D) || (Kb = 9 <= Number(gb));
    var Lb = Kb,
        Mb = D && !fb("9"),
        Nb = function() {
            if (!p.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            p.addEventListener("test", ca, b);
            p.removeEventListener("test", ca, b);
            return a
        }();
    var I = function() {
        this.g = this.g;
        this.s = this.s
    };
    I.prototype.g = !1;
    I.prototype.dispose = function() {
        this.g || (this.g = !0, this.o())
    };
    var Ob = function(a, b) {
        a.g ? r(void 0) ? b.call(void 0) : b() : (a.s || (a.s = []), a.s.push(r(void 0) ? z(b, void 0) : b))
    };
    I.prototype.o = function() {
        if (this.s)
            for (; this.s.length;) this.s.shift()()
    };
    var J = function(a) {
        a && "function" == typeof a.dispose && a.dispose()
    };
    var Pb = function(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.xa = !0
    };
    Pb.prototype.g = function() {
        this.xa = !1
    };
    var Rb = function(a, b) {
        Pb.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.c = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            (b = a.relatedTarget) ? Ya && (Ta(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType =
                t(a.pointerType) ? a.pointerType : Qb[a.pointerType] || "";
            this.c = a;
            a.defaultPrevented && this.g()
        }
    };
    A(Rb, Pb);
    var Qb = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Rb.prototype.g = function() {
        Rb.C.g.call(this);
        var a = this.c;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Mb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Sb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Tb = function(a) {
            return !(!a || !a[Sb])
        },
        Ub = 0;
    var Vb = function(a, b, c, d, e) {
            this.listener = a;
            this.a = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.ca = e;
            this.key = ++Ub;
            this.V = this.aa = !1
        },
        Wb = function(a) {
            a.V = !0;
            a.listener = null;
            a.a = null;
            a.src = null;
            a.ca = null
        };
    var Xb = function(a) {
        this.src = a;
        this.a = {};
        this.c = 0
    };
    Xb.prototype.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [], this.c++);
        var f = Yb(a, b, d, e); - 1 < f ? (b = a[f], c || (b.aa = !1)) : (b = new Vb(b, this.src, g, !!d, e), b.aa = c, a.push(b));
        return b
    };
    var Zb = function(a, b) {
            var c = b.type;
            c in a.a && Ea(a.a[c], b) && (Wb(b), 0 == a.a[c].length && (delete a.a[c], a.c--))
        },
        ac = function(a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = Yb(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        Yb = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var g = a[e];
                if (!g.V && g.listener == b && g.capture == !!c && g.ca == d) return e
            }
            return -1
        };
    var bc = "closure_lm_" + (1E6 * Math.random() | 0),
        cc = {},
        dc = 0,
        K = function(a, b, c, d, e) {
            if (d && d.once) return ec(a, b, c, d, e);
            if (v(b)) {
                for (var g = 0; g < b.length; g++) K(a, b[g], c, d, e);
                return null
            }
            c = fc(c);
            return Tb(a) ? a.c.add(String(b), c, !1, y(d) ? !!d.capture : !!d, e) : gc(a, b, c, !1, d, e)
        },
        gc = function(a, b, c, d, e, g) {
            if (!b) throw Error("Invalid event type");
            var f = y(e) ? !!e.capture : !!e,
                h = hc(a);
            h || (a[bc] = h = new Xb(a));
            c = h.add(b, c, d, f, g);
            if (c.a) return c;
            d = ic();
            c.a = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Nb || (e = f), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(jc(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            dc++;
            return c
        },
        ic = function() {
            var a = kc,
                b = Lb ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ec = function(a, b, c, d, e) {
            if (v(b)) {
                for (var g = 0; g < b.length; g++) ec(a, b[g], c, d, e);
                return null
            }
            c = fc(c);
            return Tb(a) ? a.c.add(String(b),
                c, !0, y(d) ? !!d.capture : !!d, e) : gc(a, b, c, !0, d, e)
        },
        lc = function(a, b, c, d, e) {
            if (v(b))
                for (var g = 0; g < b.length; g++) lc(a, b[g], c, d, e);
            else d = y(d) ? !!d.capture : !!d, c = fc(c), Tb(a) ? (a = a.c, b = String(b).toString(), b in a.a && (g = a.a[b], c = Yb(g, c, d, e), -1 < c && (Wb(g[c]), Array.prototype.splice.call(g, c, 1), 0 == g.length && (delete a.a[b], a.c--)))) : a && (a = hc(a)) && (c = ac(a, b, c, d, e)) && mc(c)
        },
        mc = function(a) {
            if ("number" != typeof a && a && !a.V) {
                var b = a.src;
                if (Tb(b)) Zb(b.c, a);
                else {
                    var c = a.type,
                        d = a.a;
                    b.removeEventListener ? b.removeEventListener(c,
                        d, a.capture) : b.detachEvent ? b.detachEvent(jc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    dc--;
                    (c = hc(b)) ? (Zb(c, a), 0 == c.c && (c.src = null, b[bc] = null)) : Wb(a)
                }
            }
        },
        oc = function() {
            var a = window,
                b = nc;
            b = fc(b);
            return Tb(a) ? ac(a.c, "unload", b, !1, void 0) : a ? (a = hc(a)) ? ac(a, "unload", b, !1, void 0) : null : null
        },
        jc = function(a) {
            return a in cc ? cc[a] : cc[a] = "on" + a
        },
        qc = function(a, b, c, d) {
            var e = !0;
            if (a = hc(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var g = b[a];
                        g && g.capture == c && !g.V && (g = pc(g, d), e = e &&
                            !1 !== g)
                    }
            return e
        },
        pc = function(a, b) {
            var c = a.listener,
                d = a.ca || a.src;
            a.aa && mc(a);
            return c.call(d, b)
        },
        kc = function(a, b) {
            if (a.V) return !0;
            if (!Lb) {
                var c = b || ba("window.event");
                b = new Rb(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (f) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; 0 <= e; e--) {
                        b.a = c[e];
                        var g = qc(c[e], a, !0, b);
                        d = d && g
                    }
                    for (e = 0; e < c.length; e++) b.a = c[e],
                    g = qc(c[e],
                        a, !1, b),
                    d = d && g
                }
                return d
            }
            return pc(a, new Rb(b, this))
        },
        hc = function(a) {
            a = a[bc];
            return a instanceof Xb ? a : null
        },
        rc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        fc = function(a) {
            if (x(a)) return a;
            a[rc] || (a[rc] = function(b) {
                return a.handleEvent(b)
            });
            return a[rc]
        };
    var L = function() {
        I.call(this);
        this.c = new Xb(this);
        this.A = this;
        this.v = null
    };
    A(L, I);
    L.prototype[Sb] = !0;
    L.prototype.removeEventListener = function(a, b, c, d) {
        lc(this, a, b, c, d)
    };
    var tc = function(a, b) {
        var c = a.v;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.v) d.push(c), ++e
        }
        a = a.A;
        c = b.type || b;
        t(b) ? b = new Pb(b, a) : b instanceof Pb ? b.target = b.target || a : (e = b, b = new Pb(c, a), na(b, e));
        e = !0;
        if (d)
            for (var g = d.length - 1; 0 <= g; g--) {
                var f = b.a = d[g];
                e = sc(f, c, !0, b) && e
            }
        f = b.a = a;
        e = sc(f, c, !0, b) && e;
        e = sc(f, c, !1, b) && e;
        if (d)
            for (g = 0; g < d.length; g++) f = b.a = d[g], e = sc(f, c, !1, b) && e
    };
    L.prototype.o = function() {
        L.C.o.call(this);
        if (this.c) {
            var a = this.c,
                b = 0,
                c;
            for (c in a.a) {
                for (var d = a.a[c], e = 0; e < d.length; e++) ++b, Wb(d[e]);
                delete a.a[c];
                a.c--
            }
        }
        this.v = null
    };
    var sc = function(a, b, c, d) {
        b = a.c.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var f = b[g];
            if (f && !f.V && f.capture == c) {
                var h = f.listener,
                    n = f.ca || f.src;
                f.aa && Zb(a.c, f);
                e = !1 !== h.call(n, d) && e
            }
        }
        return e && 0 != d.xa
    };
    var uc = function(a, b) {
        this.g = a;
        this.f = b;
        this.c = 0;
        this.a = null
    };
    uc.prototype.get = function() {
        if (0 < this.c) {
            this.c--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.g();
        return a
    };
    var vc = function(a, b) {
        a.f(b);
        100 > a.c && (a.c++, b.next = a.a, a.a = b)
    };
    var wc = function(a) {
            p.setTimeout(function() {
                throw a;
            }, 0)
        },
        xc, yc = function() {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow;
                a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
                a = z(function(a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (r(c.next)) {
                        c = c.next;
                        var a = c.na;
                        c.na = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        na: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    p.setTimeout(a, 0)
                }
        };
    var zc = function() {
            this.c = this.a = null
        },
        Bc = new uc(function() {
            return new Ac
        }, function(a) {
            a.reset()
        });
    zc.prototype.add = function(a, b) {
        var c = Bc.get();
        c.set(a, b);
        this.c ? this.c.next = c : this.a = c;
        this.c = c
    };
    var Dc = function() {
            var a = Cc,
                b = null;
            a.a && (b = a.a, a.a = a.a.next, a.a || (a.c = null), b.next = null);
            return b
        },
        Ac = function() {
            this.next = this.c = this.a = null
        };
    Ac.prototype.set = function(a, b) {
        this.a = a;
        this.c = b;
        this.next = null
    };
    Ac.prototype.reset = function() {
        this.next = this.c = this.a = null
    };
    var Hc = function(a, b) {
            Ec || Fc();
            Gc || (Ec(), Gc = !0);
            Cc.add(a, b)
        },
        Ec, Fc = function() {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve(void 0);
                Ec = function() {
                    a.then(Ic)
                }
            } else Ec = function() {
                var a = Ic;
                !x(p.setImmediate) || p.Window && p.Window.prototype && !C("Edge") && p.Window.prototype.setImmediate == p.setImmediate ? (xc || (xc = yc()), xc(a)) : p.setImmediate(a)
            }
        },
        Gc = !1,
        Cc = new zc,
        Ic = function() {
            for (var a; a = Dc();) {
                try {
                    a.a.call(a.c)
                } catch (b) {
                    wc(b)
                }
                vc(Bc, a)
            }
            Gc = !1
        };
    var Jc = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        Kc = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var M = function(a, b) {
            this.a = 0;
            this.j = void 0;
            this.f = this.c = this.g = null;
            this.i = this.s = !1;
            if (a != ca) try {
                var c = this;
                a.call(b, function(a) {
                    Lc(c, 2, a)
                }, function(a) {
                    Lc(c, 3, a)
                })
            } catch (d) {
                Lc(this, 3, d)
            }
        },
        Mc = function() {
            this.next = this.g = this.c = this.f = this.a = null;
            this.i = !1
        };
    Mc.prototype.reset = function() {
        this.g = this.c = this.f = this.a = null;
        this.i = !1
    };
    var Nc = new uc(function() {
            return new Mc
        }, function(a) {
            a.reset()
        }),
        Oc = function(a, b, c) {
            var d = Nc.get();
            d.f = a;
            d.c = b;
            d.g = c;
            return d
        };
    M.prototype.then = function(a, b, c) {
        return Pc(this, x(a) ? a : null, x(b) ? b : null, c)
    };
    Jc(M);
    M.prototype.cancel = function(a) {
        0 == this.a && Hc(function() {
            var b = new Qc(a);
            Rc(this, b)
        }, this)
    };
    var Rc = function(a, b) {
            if (0 == a.a)
                if (a.g) {
                    var c = a.g;
                    if (c.c) {
                        for (var d = 0, e = null, g = null, f = c.c; f && (f.i || (d++, f.a == a && (e = f), !(e && 1 < d))); f = f.next) e || (g = f);
                        e && (0 == c.a && 1 == d ? Rc(c, b) : (g ? (d = g, d.next == c.f && (c.f = d), d.next = d.next.next) : Sc(c), Tc(c, e, 3, b)))
                    }
                    a.g = null
                } else Lc(a, 3, b)
        },
        Vc = function(a, b) {
            a.c || 2 != a.a && 3 != a.a || Uc(a);
            a.f ? a.f.next = b : a.c = b;
            a.f = b
        },
        Pc = function(a, b, c, d) {
            var e = Oc(null, null, null);
            e.a = new M(function(a, f) {
                e.f = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (k) {
                        f(k)
                    }
                } : a;
                e.c = c ? function(b) {
                    try {
                        var e = c.call(d,
                            b);
                        !r(e) && b instanceof Qc ? f(b) : a(e)
                    } catch (k) {
                        f(k)
                    }
                } : f
            });
            e.a.g = a;
            Vc(a, e);
            return e.a
        };
    M.prototype.u = function(a) {
        this.a = 0;
        Lc(this, 2, a)
    };
    M.prototype.v = function(a) {
        this.a = 0;
        Lc(this, 3, a)
    };
    var Lc = function(a, b, c) {
            if (0 == a.a) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.a = 1;
                a: {
                    var d = c,
                        e = a.u,
                        g = a.v;
                    if (d instanceof M) {
                        Vc(d, Oc(e || ca, g || null, a));
                        var f = !0
                    } else if (Kc(d)) d.then(e, g, a),
                    f = !0;
                    else {
                        if (y(d)) try {
                            var h = d.then;
                            if (x(h)) {
                                Wc(d, h, e, g, a);
                                f = !0;
                                break a
                            }
                        } catch (n) {
                            g.call(a, n);
                            f = !0;
                            break a
                        }
                        f = !1
                    }
                }
                f || (a.j = c, a.a = b, a.g = null, Uc(a), 3 != b || c instanceof Qc || Xc(a, c))
            }
        },
        Wc = function(a, b, c, d, e) {
            var g = !1,
                f = function(a) {
                    g || (g = !0, c.call(e, a))
                },
                h = function(a) {
                    g || (g = !0, d.call(e, a))
                };
            try {
                b.call(a,
                    f, h)
            } catch (n) {
                h(n)
            }
        },
        Uc = function(a) {
            a.s || (a.s = !0, Hc(a.m, a))
        },
        Sc = function(a) {
            var b = null;
            a.c && (b = a.c, a.c = b.next, b.next = null);
            a.c || (a.f = null);
            return b
        };
    M.prototype.m = function() {
        for (var a; a = Sc(this);) Tc(this, a, this.a, this.j);
        this.s = !1
    };
    var Tc = function(a, b, c, d) {
            if (3 == c && b.c && !b.i)
                for (; a && a.i; a = a.g) a.i = !1;
            if (b.a) b.a.g = null, Yc(b, c, d);
            else try {
                b.i ? b.f.call(b.g) : Yc(b, c, d)
            } catch (e) {
                Zc.call(null, e)
            }
            vc(Nc, b)
        },
        Yc = function(a, b, c) {
            2 == b ? a.f.call(a.g, c) : a.c && a.c.call(a.g, c)
        },
        Xc = function(a, b) {
            a.i = !0;
            Hc(function() {
                a.i && Zc.call(null, b)
            })
        },
        Zc = wc,
        Qc = function(a) {
            B.call(this, a)
        };
    A(Qc, B);
    Qc.prototype.name = "cancel";
    var N = function(a, b) {
        L.call(this);
        this.i = a || 1;
        this.f = b || p;
        this.m = z(this.B, this);
        this.u = +new Date
    };
    A(N, L);
    N.prototype.j = !1;
    N.prototype.a = null;
    N.prototype.B = function() {
        if (this.j) {
            var a = +new Date - this.u;
            0 < a && a < .8 * this.i ? this.a = this.f.setTimeout(this.m, this.i - a) : (this.a && (this.f.clearTimeout(this.a), this.a = null), tc(this, "tick"), this.j && (this.a = this.f.setTimeout(this.m, this.i), this.u = +new Date))
        }
    };
    N.prototype.start = function() {
        this.j = !0;
        this.a || (this.a = this.f.setTimeout(this.m, this.i), this.u = +new Date)
    };
    var $c = function(a) {
        a.j = !1;
        a.a && (a.f.clearTimeout(a.a), a.a = null)
    };
    N.prototype.o = function() {
        N.C.o.call(this);
        $c(this);
        delete this.f
    };
    var ad = function(a, b) {
        if (!x(a))
            if (a && "function" == typeof a.handleEvent) a = z(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0)
    };
    var bd = function(a) {
            a = parseInt(a, 10);
            return isNaN(a) ? "" : a + "px"
        },
        cd = function(a, b, c) {
            b = ba(a, c || p) || b;
            aa(a, b, c || p);
            return b
        },
        dd = function(a) {
            try {
                return 0 < a.document.getElementsByTagName("frame").length
            } catch (b) {
                return !1
            }
        },
        fd = function(a) {
            var b = ed(a) || a;
            a = ed(a.parent) || a.parent;
            for (var c = Oa(b) ? b : null; b != top && !dd(a);) b = a, Oa(b) && (c = b), a = ed(b.parent) || b.parent;
            return c
        },
        gd = function(a) {
            for (a = ed(a) || a; !Oa(a) && a != top;) a = ed(a.parent) || a.parent;
            return Oa(a) ? a : null
        },
        ed = function(a) {
            for (var b = self.document.domain; a &&
                !Oa(a) && 2 < b.split(".").length;) {
                b = b.substr(b.indexOf(".") + 1);
                self.document.domain = b;
                for (var c = self; c != a && c != top;) c = c.parent;
                a = c == a ? c : null
            }
            return Oa(a) ? a : null
        },
        hd = function(a) {
            try {
                if (a.frameElement) return a.frameElement
            } catch (d) {}
            for (var b = a.parent.document.getElementsByTagName("iframe"), c = 0; c < b.length; c++)
                if (b[c].contentWindow == a) return b[c];
            return null
        },
        jd = function(a, b) {
            cd("dclkStudioV3.creatives", [], b).push(a.a);
            var c = cd("dclkStudioV3.renderingLibraries", [], b),
                d = Da(c, function(a) {
                    return a.version ==
                        this.version && a.url == this.renderingLibrary
                }, a.a.renderingLibraryData);
            null === d ? (id(a.a.renderingLibraryData.renderingLibrary, b), c.push({
                version: a.a.renderingLibraryData.version,
                url: a.a.renderingLibraryData.renderingLibrary,
                loading: !0,
                bootstrapFunction: null
            })) : d.bootstrapFunction ? d.bootstrapFunction() : d.loading || (id(a.a.renderingLibraryData.renderingLibrary, b), d.loading = !0)
        },
        id = function(a, b) {
            var c = b.document.createElement("script");
            c.src = a;
            a = b.document;
            b = (a || document).getElementsByTagName("HEAD");
            (b && 0 != b.length ? b[0] : a.documentElement).appendChild(c)
        },
        ld = function(a, b, c, d, e, g, f, h, n) {
            K(self, "unload", function() {
                var k = ba("studioV2.loadedLibraries." + a.templateVersion + "." + a.rendererName + ".unload", b);
                k && k(a.uniqueId);
                null != c && kd(c, d, e, g, f, h, n)
            })
        },
        md = function(a, b, c, d, e, g, f, h) {
            K(self, "unload", function() {
                var n = Da(ba("dclkStudioV3.renderingLibraries"), function(a) {
                        return a.version == this.version && a.url == this.renderingLibrary
                    }, a.a.renderingLibraryData),
                    k = null;
                null != n && (k = n.unload) && k(a.a.creativeParameters.creative_unique_id);
                null != b && kd(b, c, d, e, g, f, h)
            })
        },
        kd = function(a, b, c, d, e, g, f) {
            a.style.width = b || "";
            a.style.height = c || "";
            a.width = d || "";
            a.height = e || "";
            a.style.display = g || "";
            f && f.parentNode.removeChild(f)
        };
    var nd = function() {
        this.c = -1
    };
    var od = function(a, b, c) {
        this.c = -1;
        this.a = a;
        this.c = c || a.c || 16;
        this.s = Array(this.c);
        this.f = Array(this.c);
        a = b;
        a.length > this.c && (this.a.g(a), a = this.a.i(), this.a.reset());
        for (c = 0; c < this.c; c++) b = c < a.length ? a[c] : 0, this.s[c] = b ^ 92, this.f[c] = b ^ 54;
        this.a.g(this.f)
    };
    A(od, nd);
    od.prototype.reset = function() {
        this.a.reset();
        this.a.g(this.f)
    };
    od.prototype.g = function(a, b) {
        this.a.g(a, b)
    };
    od.prototype.i = function() {
        var a = this.a.i();
        this.a.reset();
        this.a.g(this.s);
        this.a.g(a);
        return this.a.i()
    };
    var pd = function(a, b) {
        a.reset();
        a.g(b);
        return a.i()
    };
    var qd = function() {
        this.c = 64;
        this.a = Array(4);
        this.j = Array(this.c);
        this.s = this.f = 0;
        this.reset()
    };
    A(qd, nd);
    qd.prototype.reset = function() {
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.s = this.f = 0
    };
    var rd = function(a, b, c) {
        c || (c = 0);
        var d = Array(16);
        if (t(b))
            for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
        else
            for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
        b = a.a[0];
        c = a.a[1];
        e = a.a[2];
        var g = a.a[3];
        var f = b + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[2] + 606105819 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e &
            (g ^ b)) + d[3] + 3250441966 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[6] + 2821735955 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[7] + 4249261313 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f =
            e + (c ^ g & (b ^ c)) + d[10] + 4294925233 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[11] + 2304563134 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
        b = c + (f << 7 & 4294967295 | f >>> 25);
        f = g + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        g = b + (f << 12 & 4294967295 | f >>> 20);
        f = e + (c ^ g & (b ^ c)) + d[14] + 2792965006 & 4294967295;
        e = g + (f << 17 & 4294967295 | f >>> 15);
        f = c + (b ^ e & (g ^ b)) + d[15] + 1236535329 & 4294967295;
        c = e + (f << 22 & 4294967295 | f >>> 10);
        f = b + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        b = c + (f << 5 & 4294967295 |
            f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[11] + 643717713 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[0] + 3921069994 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[15] + 3634488961 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[4] + 3889429448 & 4294967295;
        c = e + (f << 20 & 4294967295 |
            f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[3] + 4107603335 & 4294967295;
        e = g + (f << 14 & 4294967295 | f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[8] + 1163531501 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        b = c + (f << 5 & 4294967295 | f >>> 27);
        f = g + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
        g = b + (f << 9 & 4294967295 | f >>> 23);
        f = e + (b ^ c & (g ^ b)) + d[7] + 1735328473 & 4294967295;
        e = g + (f << 14 & 4294967295 |
            f >>> 18);
        f = c + (g ^ b & (e ^ g)) + d[12] + 2368359562 & 4294967295;
        c = e + (f << 20 & 4294967295 | f >>> 12);
        f = b + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[11] + 1839030562 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[14] + 4259657740 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^
            b ^ c) + d[7] + 4139469664 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[10] + 3200236656 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[3] + 3572445317 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[6] + 76029189 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
        b = c + (f << 4 & 4294967295 | f >>> 28);
        f = g + (b ^ c ^ e) + d[12] + 3873151461 & 4294967295;
        g = b + (f << 11 & 4294967295 | f >>> 21);
        f = e + (g ^ b ^ c) + d[15] + 530742520 & 4294967295;
        e = g + (f << 16 & 4294967295 | f >>> 16);
        f = c + (e ^ g ^ b) + d[2] + 3299628645 & 4294967295;
        c = e + (f << 23 & 4294967295 | f >>> 9);
        f = b + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[12] + 1700485571 & 4294967295;
        b = c +
            (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[13] + 1309151649 & 4294967295;
        c = e + (f << 21 & 4294967295 | f >>> 11);
        f = b + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
        b = c + (f << 6 & 4294967295 | f >>> 26);
        f = g + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
        g = b + (f << 10 & 4294967295 | f >>> 22);
        f = e + (b ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
        e = g + (f << 15 & 4294967295 | f >>> 17);
        f = c + (g ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
        a.a[0] = a.a[0] + b & 4294967295;
        a.a[1] = a.a[1] + (e + (f << 21 & 4294967295 | f >>> 11)) & 4294967295;
        a.a[2] = a.a[2] + e & 4294967295;
        a.a[3] = a.a[3] + g & 4294967295
    };
    qd.prototype.g = function(a, b) {
        r(b) || (b = a.length);
        for (var c = b - this.c, d = this.j, e = this.f, g = 0; g < b;) {
            if (0 == e)
                for (; g <= c;) rd(this, a, g), g += this.c;
            if (t(a))
                for (; g < b;) {
                    if (d[e++] = a.charCodeAt(g++), e == this.c) {
                        rd(this, d);
                        e = 0;
                        break
                    }
                } else
                    for (; g < b;)
                        if (d[e++] = a[g++], e == this.c) {
                            rd(this, d);
                            e = 0;
                            break
                        }
        }
        this.f = e;
        this.s += b
    };
    qd.prototype.i = function() {
        var a = Array((56 > this.f ? this.c : 2 * this.c) - this.f);
        a[0] = 128;
        for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
        var c = 8 * this.s;
        for (b = a.length - 8; b < a.length; ++b) a[b] = c & 255, c /= 256;
        this.g(a);
        a = Array(16);
        for (b = c = 0; 4 > b; ++b)
            for (var d = 0; 32 > d; d += 8) a[c++] = this.a[b] >>> d & 255;
        return a
    };
    var ud = function(a) {
            var b = [];
            sd(new td, a, b);
            return b.join("")
        },
        td = function() {},
        sd = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (v(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", g = 0; g < b; g++) c.push(e), sd(a, d[g], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (g = b[d], "function" != typeof g && (c.push(e), vd(d, c), c.push(":"), sd(a, g, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        vd(b, c);
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
        },
        wd = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        xd = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        vd = function(a, b) {
            b.push('"', a.replace(xd, function(a) {
                var b = wd[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), wd[a] = b);
                return b
            }), '"')
        };
    var yd = function(a, b) {
        b = b.split("");
        b = Ba(b, function(a) {
            a = parseInt(a, 10);
            return isNaN(a) ? 0 : a
        });
        var c = new qd;
        b = new od(c, b);
        return ud(pd(b, a))
    };
    var zd = function(a) {
        L.call(this);
        this.a = a;
        this.i = D && !fb("7");
        this.j = K(this.a, this.i ? "readystatechange" : "load", this.u, !1, this);
        D && (this.f = window.setInterval(z(this.m, this), 100))
    };
    A(zd, L);
    zd.prototype.m = function() {
        try {
            D && "complete" == this.a.readyState && Ad(this)
        } catch (a) {}
    };
    zd.prototype.u = function() {
        try {
            this.i && "complete" != this.a.readyState || Ad(this)
        } catch (a) {}
    };
    var Ad = function(a) {
        a.f && (window.clearInterval(a.f), a.f = null);
        mc(a.j);
        a.j = null;
        tc(a, "loadEvent")
    };
    var O = function(a, b, c) {
        I.call(this);
        this.c = a;
        this.m = b || 0;
        this.f = c;
        this.i = z(this.j, this)
    };
    A(O, I);
    O.prototype.a = 0;
    O.prototype.o = function() {
        O.C.o.call(this);
        0 != this.a && p.clearTimeout(this.a);
        this.a = 0;
        delete this.c;
        delete this.f
    };
    O.prototype.start = function(a) {
        0 != this.a && p.clearTimeout(this.a);
        this.a = 0;
        this.a = ad(this.i, r(a) ? a : this.m)
    };
    O.prototype.j = function() {
        this.a = 0;
        this.c && this.c.call(this.f)
    };
    var Bd = function(a) {
        I.call(this);
        this.c = a;
        this.a = {}
    };
    A(Bd, I);
    var Cd = [],
        Dd = function(a, b, c) {
            var d = "tick";
            v(d) || (d && (Cd[0] = d.toString()), d = Cd);
            for (var e = 0; e < d.length; e++) {
                var g = K(b, d[e], c || a.handleEvent, !1, a.c || a);
                if (!g) break;
                a.a[g.key] = g
            }
        },
        Ed = function(a) {
            la(a.a, function(a, c) {
                this.a.hasOwnProperty(c) && mc(a)
            }, a);
            a.a = {}
        };
    Bd.prototype.o = function() {
        Bd.C.o.call(this);
        Ed(this)
    };
    Bd.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Fd = function() {
        I.call(this);
        this.A = {}
    };
    A(Fd, I);
    Fd.prototype.connect = function(a) {
        a && a()
    };
    Fd.prototype.I = function() {
        return !0
    };
    var Gd = function(a, b) {
        if (b && t(a)) try {
            return JSON.parse(a)
        } catch (c) {
            return null
        } else if (!b && !t(a)) return ud(a);
        return a
    };
    Fd.prototype.o = function() {
        Fd.C.o.call(this);
        delete this.A;
        delete this.B
    };
    var Hd = ["pu", "lru", "pru", "lpu", "ppu"],
        P = {},
        Jd = function() {
            for (var a = 10, b = Id, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
            return d
        },
        Id = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var Q = function(a) {
        I.call(this);
        this.ya = a || ya || (ya = new Jb)
    };
    A(Q, I);
    var R = function(a) {
        return Hb(a.ya.a)
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var S = function(a, b) {
        this.s = [];
        this.D = a;
        this.A = b || null;
        this.f = this.a = !1;
        this.g = void 0;
        this.u = this.M = this.m = !1;
        this.j = 0;
        this.c = null;
        this.i = 0
    };
    S.prototype.cancel = function(a) {
        if (this.a) this.g instanceof S && this.g.cancel();
        else {
            if (this.c) {
                var b = this.c;
                delete this.c;
                a ? b.cancel(a) : (b.i--, 0 >= b.i && b.cancel())
            }
            this.D ? this.D.call(this.A, this) : this.u = !0;
            this.a || this.B(new Kd(this))
        }
    };
    S.prototype.v = function(a, b) {
        this.m = !1;
        Ld(this, a, b)
    };
    var Ld = function(a, b, c) {
            a.a = !0;
            a.g = c;
            a.f = !b;
            Md(a)
        },
        Od = function(a) {
            if (a.a) {
                if (!a.u) throw new Nd(a);
                a.u = !1
            }
        };
    S.prototype.H = function(a) {
        Od(this);
        Ld(this, !0, a)
    };
    S.prototype.B = function(a) {
        Od(this);
        Ld(this, !1, a)
    };
    var Qd = function(a, b, c) {
            Pd(a, b, null, c)
        },
        Pd = function(a, b, c, d) {
            a.s.push([b, c, d]);
            a.a && Md(a)
        };
    S.prototype.then = function(a, b, c) {
        var d, e, g = new M(function(a, b) {
            d = a;
            e = b
        });
        Pd(this, d, function(a) {
            a instanceof Kd ? g.cancel() : e(a)
        });
        return g.then(a, b, c)
    };
    Jc(S);
    var Rd = function(a, b) {
        b instanceof S ? Qd(a, z(b.R, b)) : Qd(a, function() {
            return b
        })
    };
    S.prototype.R = function(a) {
        var b = new S;
        Pd(this, b.H, b.B, b);
        a && (b.c = this, this.i++);
        return b
    };
    var Sd = function(a) {
            return Ca(a.s, function(a) {
                return x(a[1])
            })
        },
        Md = function(a) {
            if (a.j && a.a && Sd(a)) {
                var b = a.j,
                    c = Td[b];
                c && (p.clearTimeout(c.a), delete Td[b]);
                a.j = 0
            }
            a.c && (a.c.i--, delete a.c);
            b = a.g;
            for (var d = c = !1; a.s.length && !a.m;) {
                var e = a.s.shift(),
                    g = e[0],
                    f = e[1];
                e = e[2];
                if (g = a.f ? f : g) try {
                    var h = g.call(e || a.A, b);
                    r(h) && (a.f = a.f && (h == b || h instanceof Error), a.g = b = h);
                    if (Kc(b) || "function" === typeof p.Promise && b instanceof p.Promise) d = !0, a.m = !0
                } catch (n) {
                    b = n, a.f = !0, Sd(a) || (c = !0)
                }
            }
            a.g = b;
            d && (h = z(a.v, a, !0), d = z(a.v, a,
                !1), b instanceof S ? (Pd(b, h, d), b.M = !0) : b.then(h, d));
            c && (b = new Ud(b), Td[b.a] = b, a.j = b.a)
        },
        Nd = function() {
            B.call(this)
        };
    A(Nd, B);
    Nd.prototype.message = "Deferred has already fired";
    Nd.prototype.name = "AlreadyCalledError";
    var Kd = function() {
        B.call(this)
    };
    A(Kd, B);
    Kd.prototype.message = "Deferred was canceled";
    Kd.prototype.name = "CanceledError";
    var Ud = function(a) {
        this.a = p.setTimeout(z(this.g, this), 0);
        this.c = a
    };
    Ud.prototype.g = function() {
        delete Td[this.a];
        throw this.c;
    };
    var Td = {};
    var Xd = function(a, b) {
        Q.call(this, b);
        this.a = a;
        this.A = new Bd(this);
        Ob(this, ka(J, this.A));
        this.m = new N(100, R(this));
        Ob(this, ka(J, this.m));
        this.i = new S;
        this.j = new S;
        this.c = new S;
        this.v = Jd();
        this.u = null;
        this.f = {};
        this.D = this.a.name;
        Wd(this.a, this.a.name + "_" + T(this.a));
        this.B = !1;
        Rd(this.c, this.i);
        Rd(this.c, this.j);
        Qd(this.c, this.Fa, this);
        this.c.H(!0);
        Dd(this.A, this.m, this.ra)
    };
    A(Xd, Q);
    var Yd = {},
        ae = function(a) {
            var b = new Zd(a.channelName, a.service, a.payload);
            a = b.a;
            var c = b.da;
            b = b.U;
            var d = P[a];
            if (d) return d.c(c, b), !0;
            d = $d(b)[0];
            for (var e in P) {
                var g = P[e];
                if (1 == T(g) && !g.I() && "tp" == c && "SETUP" == d) return Wd(g, a), g.c(c, b), !0
            }
            return !1
        };
    m = Xd.prototype;
    m.ea = function(a) {
        a = $d(a);
        var b = a[1];
        switch (a[0]) {
            case "SETUP_ACK":
                this.i.a || this.i.H(!0);
                break;
            case "SETUP":
                this.send("tp", "SETUP_ACK"), this.j.a || this.j.H(!0), null != this.u && this.u != b && this.send("tp", "SETUP," + this.v), this.u = b
        }
    };
    m.connect = function() {
        var a = R(this);
        if (a) {
            var b = ha(a);
            0 == (Yd[b] || 0) && null == ba("crosswindowmessaging.channel", a) && aa("crosswindowmessaging.channel", ae, a);
            Yd[b]++;
            this.B = !0;
            this.ra()
        }
    };
    m.ra = function() {
        this.a.I() ? $c(this.m) : (this.m.start(), this.send("tp", "SETUP," + this.v))
    };
    m.send = function(a, b) {
        this.a.G && (a = new Zd(this.D + "_" + (0 == T(this.a) ? 1 : 0), a, b), this.a.a.directSyncMode ? this.oa(a) : this.f[ha(a)] = ad(z(this.oa, this, a), 0))
    };
    m.oa = function(a) {
        var b = ha(a);
        this.f[b] && delete this.f[b];
        try {
            var c = ba("crosswindowmessaging.channel", this.a.G)
        } catch (d) {
            return
        }
        if (null !== c) try {
            c({
                channelName: a.a,
                service: a.da,
                payload: a.U
            })
        } catch (d) {}
    };
    m.Fa = function() {
        U(this.a, 0)
    };
    m.o = function() {
        if (this.B) {
            var a = R(this),
                b = ha(a);
            1 == --Yd[b] && aa("crosswindowmessaging.channel", null, a)
        }
        this.f && (la(this.f, function(a) {
            p.clearTimeout(a)
        }), this.f = null);
        this.i && (this.i.cancel(), delete this.i);
        this.j && (this.j.cancel(), delete this.j);
        this.c && (this.c.cancel(), delete this.c);
        Xd.C.o.call(this)
    };
    var $d = function(a) {
            a = a.split(",");
            a[1] = a[1] || null;
            return a
        },
        Zd = function(a, b, c) {
            this.a = a;
            this.da = b;
            this.U = c
        };
    var be = function(a, b) {
        Q.call(this, b);
        this.c = a;
        this.f = [];
        this.m = z(this.Ea, this)
    };
    A(be, Q);
    m = be.prototype;
    m.ha = !1;
    m.connect = function() {
        0 == T(this.c) ? (this.a = this.c.N, this.a.XPC_toOuter = z(this.ta, this)) : this.ma()
    };
    m.ma = function() {
        var a = !0;
        try {
            this.a || (this.a = R(this).frameElement), this.a && this.a.XPC_toOuter && (this.i = this.a.XPC_toOuter, this.a.XPC_toOuter.XPC_toInner = z(this.ta, this), a = !1, this.send("tp", "SETUP_ACK"), U(this.c))
        } catch (b) {}
        a && (this.j || (this.j = z(this.ma, this)), R(this).setTimeout(this.j, 100))
    };
    m.ea = function(a) {
        if (0 != T(this.c) || this.c.I() || "SETUP_ACK" != a) throw Error("Got unexpected transport message.");
        this.i = this.a.XPC_toOuter.XPC_toInner;
        U(this.c)
    };
    m.ta = function(a, b) {
        this.ha || 0 != this.f.length ? (this.f.push({
            Ka: a,
            U: b
        }), 1 == this.f.length && R(this).setTimeout(this.m, 1)) : this.c.c(a, b)
    };
    m.Ea = function() {
        for (; this.f.length;) {
            var a = this.f.shift();
            this.c.c(a.Ka, a.U)
        }
    };
    m.send = function(a, b) {
        this.ha = !0;
        this.i(a, b);
        this.ha = !1
    };
    m.o = function() {
        be.C.o.call(this);
        this.a = this.i = null
    };
    var V = function(a, b) {
            Q.call(this, b);
            this.a = a;
            this.B = this.a.a.ppu;
            this.Ba = this.a.a.lpu;
            this.m = []
        },
        ce, de;
    A(V, Q);
    m = V.prototype;
    m.Ja = 5;
    m.fa = 0;
    m.W = !1;
    m.ba = !1;
    m.wa = null;
    var ee = function(a) {
            return "googlexpc_" + a.a.name + "_msg"
        },
        fe = function(a) {
            return "googlexpc_" + a.a.name + "_ack"
        },
        he = function(a) {
            try {
                if (!a.g && ge(a.a)) return a.a.G.frames || {}
            } catch (b) {}
            return {}
        };
    V.prototype.connect = function() {
        if (!this.g && ge(this.a)) {
            if (!this.ba) {
                var a = ee(this);
                this.f = ie(this, a);
                this.v = R(this).frames[a];
                a = fe(this);
                this.c = ie(this, a);
                this.u = R(this).frames[a];
                this.ba = !0
            }
            if (je(this, ee(this)) && je(this, fe(this))) this.$ = new ke(this, he(this)[ee(this)], z(this.Aa, this)), this.D = new ke(this, he(this)[fe(this)], z(this.za, this)), this.R();
            else {
                if (1 == T(this.a)) this.wa || 0 < this.Ja-- || (Wd(this.a, Jd()), le(this), this.ba = !1, this.wa = ie(this, "googlexpc_reconnect_" + this.a.name));
                else if (0 == T(this.a)) {
                    a =
                        he(this);
                    for (var b = a.length, c = 0; c < b; c++) {
                        try {
                            if (a[c] && a[c].name) var d = a[c].name
                        } catch (g) {}
                        if (d) {
                            var e = d.split("_");
                            if (3 == e.length && "googlexpc" == e[0] && "reconnect" == e[1]) {
                                this.a.name = e[2];
                                le(this);
                                this.ba = !1;
                                break
                            }
                        }
                    }
                }
                R(this).setTimeout(z(this.connect, this), 100)
            }
        }
    };
    var ie = function(a, b) {
            var c = document.createElement("IFRAME");
            var d = c.style;
            d.position = "absolute";
            d.top = "-10px";
            d.left = "10px";
            d.width = "1px";
            d.height = "1px";
            c.id = c.name = b;
            c.src = a.B + "#INITIAL";
            R(a).document.body.appendChild(c);
            return c
        },
        le = function(a) {
            a.f && (a.f.parentNode.removeChild(a.f), a.f = null, a.v = null);
            a.c && (a.c.parentNode.removeChild(a.c), a.c = null, a.u = null)
        },
        je = function(a, b) {
            try {
                var c = he(a)[b];
                if (!c || 0 != c.location.href.indexOf(a.Ba)) return !1
            } catch (d) {
                return !1
            }
            return !0
        };
    V.prototype.R = function() {
        var a = he(this);
        a[fe(this)] && a[ee(this)] ? (this.ia = new me(this.B, this.v), this.j = new me(this.B, this.u), R(this).setTimeout(z(function() {
            this.ia.send("SETUP");
            this.W = !0
        }, this), 100)) : (this.M || (this.M = z(this.R, this)), R(this).setTimeout(this.M, 100))
    };
    var ne = function(a) {
        if (a.ja && a.Ca && (U(a.a), a.i)) {
            for (var b = 0, c; b < a.i.length; b++) c = a.i[b], a.a.c(c.da, c.U);
            delete a.i
        }
    };
    V.prototype.Aa = function(a) {
        if ("SETUP" == a) this.j && (this.j.send("SETUP_ACK"), this.ja = !0, ne(this));
        else if (this.a.I() || this.ja) {
            var b = a.indexOf("|"),
                c = a.substring(0, b);
            a = a.substring(b + 1);
            b = c.indexOf(",");
            if (-1 == b) this.j.send("ACK:" + c), oe(this, a);
            else {
                var d = c.substring(0, b);
                this.j.send("ACK:" + d);
                c = c.substring(b + 1).split("/");
                b = parseInt(c[0], 10);
                c = parseInt(c[1], 10);
                1 == b && (this.A = []);
                this.A.push(a);
                b == c && (oe(this, this.A.join("")), delete this.A)
            }
        }
    };
    V.prototype.za = function(a) {
        "SETUP_ACK" == a ? (this.W = !1, this.Ca = !0, ne(this)) : this.a.I() && this.W && parseInt(a.split(":")[1], 10) == this.fa && (this.W = !1, pe(this))
    };
    var pe = function(a) {
            if (!a.W && a.m.length) {
                var b = a.m.shift();
                ++a.fa;
                a.ia.send(a.fa + b);
                a.W = !0
            }
        },
        oe = function(a, b) {
            var c = b.indexOf(":"),
                d = b.substr(0, c);
            b = b.substring(c + 1);
            a.a.I() ? a.a.c(d, b) : (a.i || (a.i = [])).push({
                da: d,
                U: b
            })
        };
    V.prototype.send = function(a, b) {
        a = a + ":" + b;
        if (!D || 3800 >= b.length) this.m.push("|" + a);
        else {
            b = b.length;
            for (var c = Math.ceil(b / 3800), d = 0, e = 1; d < b;) this.m.push("," + e + "/" + c + "|" + a.substr(d, 3800)), e++, d += 3800
        }
        pe(this)
    };
    V.prototype.o = function() {
        V.C.o.call(this);
        var a = qe;
        Ea(a, this.$);
        Ea(a, this.D);
        this.$ = this.D = null;
        Ib(this.f);
        Ib(this.c);
        this.v = this.u = this.f = this.c = null
    };
    var qe = [],
        re = z(function() {
            var a = qe,
                b, c = !1;
            try {
                for (var d = 0; b = a[d]; d++) {
                    var e;
                    if (!(e = c)) {
                        var g = b,
                            f = g.c.location.href;
                        if (f != g.a) {
                            g.a = f;
                            var h = f.split("#")[1];
                            h && (h = h.substr(1), g.g(decodeURIComponent(h)));
                            e = !0
                        } else e = !1
                    }
                    c = e
                }
            } catch (n) {
                if (b.f.a.close(), !a.length) return
            }
            a = +new Date;
            c && (ce = a);
            de = window.setTimeout(re, 1E3 > a - ce ? 10 : 100)
        }, V),
        se = function() {
            ce = +new Date;
            de && window.clearTimeout(de);
            de = window.setTimeout(re, 10)
        },
        me = function(a, b) {
            if (!/^https?:\/\//.test(a)) throw Error("URL " + a + " is invalid");
            this.g =
                a;
            this.c = b;
            this.a = 0
        };
    me.prototype.send = function(a) {
        this.a = ++this.a % 2;
        a = this.g + "#" + this.a + encodeURIComponent(a);
        try {
            if (Za) {
                var b = this.c.location;
                if (a instanceof G) var c = a;
                else a instanceof G ? c = a : (a = a.L ? a.J() : String(a), pb.test(a) || (a = "about:invalid#zClosurez"), c = qb(a));
                b.href = ob(c)
            } else this.c.location.replace(a)
        } catch (d) {}
        se()
    };
    var ke = function(a, b, c) {
        this.f = a;
        this.c = b;
        this.g = c;
        this.a = this.c.location.href.split("#")[0] + "#INITIAL";
        qe.push(this);
        se()
    };
    var ue = function(a, b) {
        Q.call(this, b);
        this.a = a;
        this.f = this.a.a.pru;
        this.c = this.a.a.ifrid;
        Za && te()
    };
    A(ue, Q);
    if (Za) var ve = [],
        we = 0,
        te = function() {
            we || (we = window.setTimeout(function() {
                xe()
            }, 1E3))
        },
        xe = function(a) {
            var b = +new Date;
            for (a = a || 3E3; ve.length && b - ve[0].timestamp >= a;) {
                var c = ve.shift().Ia;
                Ib(c)
            }
            we = window.setTimeout(ye, 1E3)
        },
        ye = function() {
            xe()
        };
    var ze = {};
    ue.prototype.connect = function() {
        R(this).xpcRelay || (R(this).xpcRelay = Ae);
        this.send("tp", "SETUP")
    };
    var Ae = function(a, b) {
        var c = b.indexOf(":"),
            d = b.substr(0, c);
        b = b.substr(c + 1);
        if (D && -1 != (c = d.indexOf("|"))) {
            f = d.substr(0, c);
            d = d.substr(c + 1);
            c = d.indexOf("+");
            var e = d.substr(0, c);
            c = parseInt(d.substr(c + 1), 10);
            var g = ze[e];
            g || (g = ze[e] = {
                qa: [],
                va: 0,
                pa: 0
            }); - 1 != d.indexOf("++") && (g.pa = c + 1);
            g.qa[c] = b;
            g.va++;
            if (g.va != g.pa) return;
            b = g.qa.join("");
            delete ze[e]
        } else var f = d;
        P[a].c(f, decodeURIComponent(b))
    };
    ue.prototype.ea = function(a) {
        "SETUP" == a ? (this.send("tp", "SETUP_ACK"), U(this.a)) : "SETUP_ACK" == a && U(this.a)
    };
    ue.prototype.send = function(a, b) {
        b = encodeURIComponent(b);
        var c = b.length;
        if (D && 1800 < c)
            for (var d = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36), e = 0, g = 0; e < c; g++) {
                var f = b.substr(e, 1800);
                e += 1800;
                Be(this, a, f, d + (e >= c ? "++" : "+") + g)
            } else Be(this, a, b)
    };
    var Be = function(a, b, c, d) {
            if (D) {
                var e = R(a).document.createElement("DIV"),
                    g = {
                        onload: lb("this.xpcOnload()"),
                        sandbox: null
                    },
                    f = {
                        src: null,
                        srcdoc: null
                    },
                    h = {
                        sandbox: ""
                    };
                var n = {};
                for (var k in f) n[k] = f[k];
                for (k in h) n[k] = h[k];
                for (k in g) {
                    var l = k.toLowerCase();
                    if (l in f) throw Error('Cannot override "' + l + '" attribute, got "' + k + '" with value "' + g[k] + '"');
                    l in h && delete n[l];
                    n[k] = g[k]
                }
                g = null;
                f = "";
                if (n)
                    for (w in n) {
                        if (!Db.test(w)) throw Error('Invalid attribute name "' + w + '".');
                        k = n[w];
                        if (null != k) {
                            h = w;
                            l = k;
                            if (l instanceof E) l = kb(l);
                            else if ("style" == h.toLowerCase()) {
                                k = void 0;
                                if (!y(l)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof l + " given: " + l);
                                if (!(l instanceof tb)) {
                                    var u = "";
                                    for (k in l) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(k)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                                        var q = l[k];
                                        null != q && (q = v(q) ? Ba(q, Ab).join(" ") : Ab(q), u += k + ":" + q + ";")
                                    }
                                    l = u ? ub(u) : vb
                                }
                                l instanceof tb && l.constructor === tb && l.c === sb ? k = l.a : (da(l), k = "type_error:SafeStyle");
                                l = k
                            } else {
                                if (/^on/i.test(h)) throw Error('Attribute "' +
                                    h + '" requires goog.string.Const value, "' + l + '" given.');
                                if (h.toLowerCase() in Eb)
                                    if (l instanceof F) l instanceof F && l.constructor === F && l.a === mb ? l = "" : (da(l), l = "type_error:TrustedResourceUrl");
                                    else if (l instanceof G) l = ob(l);
                                else if (t(l)) l = rb(l).J();
                                else throw Error('Attribute "' + h + '" on tag "iframe" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
                            }
                            l.L && (l = l.J());
                            h = h + '="' + wa(String(l)) + '"';
                            f += " " + h
                        }
                    }
                var w = "<iframe" + f;
                f = void 0;
                null != f ? v(f) || (f = [f]) : f = [];
                !0 === ib.iframe ? w +=
                    ">" : (g = Gb(f), w += ">" + Cb(g) + "</iframe>", g = g.X());
                (n = n && n.dir) && (/^(ltr|rtl|auto)$/i.test(n) ? g = 0 : g = null);
                n = Fb(w, g);
                e.innerHTML = Cb(n);
                e = e.childNodes[0];
                e.xpcOnload = Ce
            } else e = R(a).document.createElement("IFRAME"), Za ? ve.push({
                timestamp: +new Date,
                Ia: e
            }) : K(e, "load", Ce);
            n = e.style;
            n.visibility = "hidden";
            n.width = e.style.height = "0px";
            n.position = "absolute";
            n = a.f;
            n += "#" + a.a.name;
            a.c && (n += "," + a.c);
            n += "|" + b;
            d && (n += "|" + d);
            e.src = n + (":" + c);
            R(a).document.body.appendChild(e)
        },
        Ce = function() {
            Ib(this)
        };
    ue.prototype.o = function() {
        ue.C.o.call(this);
        Za && xe(0)
    };
    var W = function(a, b, c, d, e) {
        Q.call(this, c);
        this.j = a;
        this.m = e || 2;
        this.$ = b || "*";
        this.B = new Bd(this);
        this.u = new N(100, R(this));
        this.D = !!d;
        this.f = new S;
        this.i = new S;
        this.c = new S;
        this.R = Jd();
        this.A = null;
        this.D ? 1 == T(this.j) ? Rd(this.c, this.f) : Rd(this.c, this.i) : (Rd(this.c, this.f), 2 == this.m && Rd(this.c, this.i));
        Qd(this.c, this.Ga, this);
        this.c.H(!0);
        Dd(this.B, this.u, this.sa)
    };
    A(W, Q);
    W.prototype.a = null;
    W.prototype.M = !1;
    var De = {};
    W.prototype.v = 0;
    var Ge = function(a) {
        var b = a.c.data;
        if (!t(b)) return !1;
        var c = b.indexOf("|"),
            d = b.indexOf(":");
        if (-1 == c || -1 == d) return !1;
        var e = b.substring(0, c);
        c = b.substring(c + 1, d);
        b = b.substring(d + 1);
        if (d = P[e]) return d.c(c, b, a.c.origin), !0;
        d = Ee(b)[0];
        for (var g in P) {
            var f = P[g];
            if (1 == T(f) && !f.I() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && Fe(f, a.c.origin)) return Wd(f, e), f.c(c, b), !0
        }
        return !1
    };
    W.prototype.ea = function(a) {
        var b = Ee(a);
        a = b[1];
        switch (b[0]) {
            case "SETUP_ACK":
                He(this, 1);
                this.f.a || this.f.H(!0);
                break;
            case "SETUP_ACK_NTPV2":
                2 == this.m && (He(this, 2), this.f.a || this.f.H(!0));
                break;
            case "SETUP":
                He(this, 1);
                Ie(this, 1);
                break;
            case "SETUP_NTPV2":
                2 == this.m && (b = this.a, He(this, 2), Ie(this, 2), 1 != b && null == this.A || this.A == a || Je(this), this.A = a)
        }
    };
    var Je = function(a) {
            2 != a.m || null != a.a && 2 != a.a || a.send("tp", "SETUP_NTPV2," + a.R);
            null != a.a && 1 != a.a || a.send("tp", "SETUP")
        },
        Ie = function(a, b) {
            if (2 != a.m || null != a.a && 2 != a.a || 2 != b) {
                if (null != a.a && 1 != a.a || 1 != b) return;
                a.send("tp", "SETUP_ACK")
            } else a.send("tp", "SETUP_ACK_NTPV2");
            a.i.a || a.i.H(!0)
        },
        He = function(a, b) {
            b > a.a && (a.a = b);
            1 == a.a && (a.i.a || a.D || a.i.H(!0), a.A = null)
        };
    m = W.prototype;
    m.connect = function() {
        var a = R(this),
            b = ha(a),
            c = De[b];
        "number" == typeof c || (c = 0);
        0 == c && K(a.postMessage ? a : a.document, "message", Ge, !1, W);
        De[b] = c + 1;
        this.M = !0;
        this.sa()
    };
    m.sa = function() {
        var a = 0 == T(this.j);
        this.D && a || this.j.I() || this.g ? $c(this.u) : (this.u.start(), Je(this))
    };
    m.send = function(a, b) {
        var c = this.j.G;
        c && (this.send = function(a, b) {
            var d = this,
                e = this.j.name;
            this.v = ad(function() {
                d.v = 0;
                try {
                    var f = c.postMessage ? c : c.document;
                    f.postMessage && f.postMessage(e + "|" + a + ":" + b, d.$)
                } catch (n) {}
            }, 0)
        }, this.send(a, b))
    };
    m.Ga = function() {
        U(this.j, 1 == this.m || 1 == this.a ? 200 : void 0)
    };
    m.o = function() {
        if (this.M) {
            var a = R(this),
                b = ha(a),
                c = De[b];
            De[b] = c - 1;
            1 == c && lc(a.postMessage ? a : a.document, "message", Ge, !1, W)
        }
        this.v && (p.clearTimeout(this.v), this.v = 0);
        J(this.B);
        delete this.B;
        J(this.u);
        delete this.u;
        this.f.cancel();
        delete this.f;
        this.i.cancel();
        delete this.i;
        this.c.cancel();
        delete this.c;
        delete this.send;
        W.C.o.call(this)
    };
    var Ee = function(a) {
        a = a.split(",");
        a[1] = a[1] || null;
        return a
    };
    var Ke = function(a, b) {
        Q.call(this, b);
        this.a = a;
        this.c = a.at || "";
        this.f = a.rat || "";
        a = R(this);
        if (!a.nix_setup_complete) try {
            a.execScript("Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport.GCXPC____NIXJS_handle_message(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport.GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function",
                "vbscript"), a.nix_setup_complete = !0
        } catch (c) {}
        this.GCXPC____NIXJS_handle_message = this.Ha;
        this.GCXPC____NIXJS_create_channel = this.Da
    };
    A(Ke, Q);
    m = Ke.prototype;
    m.T = !1;
    m.O = null;
    m.connect = function() {
        0 == T(this.a) ? this.la() : this.ka()
    };
    m.la = function() {
        if (!this.T) {
            var a = this.a.N;
            try {
                a.contentWindow.opener = (0, R(this).GCXPC____NIXVBS_get_wrapper)(this, this.c), this.T = !0
            } catch (b) {}
            this.T || R(this).setTimeout(z(this.la, this), 100)
        }
    };
    m.ka = function() {
        if (!this.T) {
            try {
                var a = R(this).opener;
                if (a && "GCXPC____NIXVBS_container" in a) {
                    this.O = a;
                    if (this.O.GetAuthToken() != this.f) return;
                    this.O.CreateChannel((0, R(this).GCXPC____NIXVBS_get_wrapper)(this, this.c));
                    this.T = !0;
                    U(this.a)
                }
            } catch (b) {
                return
            }
            this.T || R(this).setTimeout(z(this.ka, this), 100)
        }
    };
    m.Da = function(a) {
        this.O = a;
        this.O.GetAuthToken() == this.f && U(this.a)
    };
    m.Ha = function(a, b) {
        R(this).setTimeout(z(function() {
            this.a.c(a, b)
        }, this), 1)
    };
    m.send = function(a, b) {
        this.O.SendMessage(a, b)
    };
    m.o = function() {
        Ke.C.o.call(this);
        this.O = null
    };
    var X = function(a, b) {
        this.c = {};
        this.a = [];
        this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof X)
                for (c = a.Y(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    X.prototype.Z = function() {
        Le(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.c[this.a[b]]);
        return a
    };
    X.prototype.Y = function() {
        Le(this);
        return this.a.concat()
    };
    var Le = function(a) {
        if (a.g != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Me(a.c, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.g != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], Me(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    X.prototype.get = function(a, b) {
        return Me(this.c, a) ? this.c[a] : b
    };
    X.prototype.set = function(a, b) {
        Me(this.c, a) || (this.g++, this.a.push(a));
        this.c[a] = b
    };
    X.prototype.forEach = function(a, b) {
        for (var c = this.Y(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    var Me = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Ne = function() {
        var a = window.location.href;
        this.f = this.m = this.g = "";
        this.j = null;
        this.i = this.s = "";
        this.a = !1;
        if (a instanceof Ne) {
            this.a = r(void 0) ? void 0 : a.a;
            Oe(this, a.g);
            this.m = a.m;
            this.f = a.f;
            Pe(this, a.j);
            this.s = a.s;
            var b = a.c;
            var c = new Qe;
            c.g = b.g;
            b.a && (c.a = new X(b.a), c.c = b.c);
            Re(this, c);
            this.i = a.i
        } else a && (b = String(a).match(La)) ? (this.a = !1, Oe(this, b[1] || "", !0), this.m = Se(b[2] || ""), this.f = Se(b[3] || "", !0), Pe(this, b[4]), this.s = Se(b[5] || "", !0), Re(this, b[6] || "", !0), this.i = Se(b[7] || "")) : (this.a = !1, this.c =
            new Qe(null, this.a))
    };
    Ne.prototype.toString = function() {
        var a = [],
            b = this.g;
        b && a.push(Te(b, Ue, !0), ":");
        var c = this.f;
        if (c || "file" == b) a.push("//"), (b = this.m) && a.push(Te(b, Ue, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.j, null != c && a.push(":", String(c));
        if (c = this.s) this.f && "/" != c.charAt(0) && a.push("/"), a.push(Te(c, "/" == c.charAt(0) ? Ve : We, !0));
        (c = this.c.toString()) && a.push("?", c);
        (c = this.i) && a.push("#", Te(c, Xe));
        return a.join("")
    };
    var Oe = function(a, b, c) {
            a.g = c ? Se(b, !0) : b;
            a.g && (a.g = a.g.replace(/:$/, ""))
        },
        Pe = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.j = b
            } else a.j = null
        },
        Re = function(a, b, c) {
            b instanceof Qe ? (a.c = b, Ye(a.c, a.a)) : (c || (b = Te(b, Ze)), a.c = new Qe(b, a.a))
        },
        Se = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Te = function(a, b, c) {
            return t(a) ? (a = encodeURI(a).replace(b, $e), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        $e = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Ue = /[#\/\?@]/g,
        We = /[#\?:]/g,
        Ve = /[#\?]/g,
        Ze = /[#\?@]/g,
        Xe = /#/g,
        Qe = function(a, b) {
            this.c = this.a = null;
            this.g = a || null;
            this.f = !!b
        },
        Y = function(a) {
            a.a || (a.a = new X, a.c = 0, a.g && Na(a.g, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
    Qe.prototype.add = function(a, b) {
        Y(this);
        this.g = null;
        a = af(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.c = this.c + 1;
        return this
    };
    var bf = function(a, b) {
            Y(a);
            b = af(a, b);
            Me(a.a.c, b) && (a.g = null, a.c = a.c - a.a.get(b).length, a = a.a, Me(a.c, b) && (delete a.c[b], a.g--, a.a.length > 2 * a.g && Le(a)))
        },
        cf = function(a, b) {
            Y(a);
            b = af(a, b);
            return Me(a.a.c, b)
        };
    m = Qe.prototype;
    m.forEach = function(a, b) {
        Y(this);
        this.a.forEach(function(c, d) {
            Aa(c, function(c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    };
    m.Y = function() {
        Y(this);
        for (var a = this.a.Z(), b = this.a.Y(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
        return c
    };
    m.Z = function(a) {
        Y(this);
        var b = [];
        if (t(a)) cf(this, a) && (b = Fa(b, this.a.get(af(this, a))));
        else {
            a = this.a.Z();
            for (var c = 0; c < a.length; c++) b = Fa(b, a[c])
        }
        return b
    };
    m.set = function(a, b) {
        Y(this);
        this.g = null;
        a = af(this, a);
        cf(this, a) && (this.c = this.c - this.a.get(a).length);
        this.a.set(a, [b]);
        this.c = this.c + 1;
        return this
    };
    m.get = function(a, b) {
        a = a ? this.Z(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };
    m.toString = function() {
        if (this.g) return this.g;
        if (!this.a) return "";
        for (var a = [], b = this.a.Y(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.Z(d);
            for (var g = 0; g < d.length; g++) {
                var f = e;
                "" !== d[g] && (f += "=" + encodeURIComponent(String(d[g])));
                a.push(f)
            }
        }
        return this.g = a.join("&")
    };
    var af = function(a, b) {
            b = String(b);
            a.f && (b = b.toLowerCase());
            return b
        },
        Ye = function(a, b) {
            b && !a.f && (Y(a), a.g = null, a.a.forEach(function(a, b) {
                var c = b.toLowerCase();
                b != c && (bf(this, b), bf(this, c), 0 < a.length && (this.g = null, this.a.set(af(this, c), Ga(a)), this.c = this.c + a.length))
            }, a));
            a.f = b
        };
    var Z = function(a, b) {
        Fd.call(this);
        for (var c = 0, d; d = Hd[c]; c++)
            if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
        this.a = a;
        this.name = this.a.cn || Jd();
        this.f = b || ya || (ya = new Jb);
        this.m = [];
        this.v = new Bd(this);
        a.lpu = a.lpu || Ma(Hb(this.f.a).location.href) + "/robots.txt";
        a.ppu = a.ppu || Ma(a.pu || "") + "/robots.txt";
        P[this.name] = this;
        oc() || ec(window, "unload", nc)
    };
    A(Z, Fd);
    var df = /^%*tp$/,
        ef = /^%+tp$/;
    m = Z.prototype;
    m.K = null;
    m.P = null;
    m.F = null;
    m.S = 1;
    m.I = function() {
        return 2 == this.S
    };
    m.G = null;
    m.N = null;
    var ge = function(a) {
        try {
            return !!a.G && !a.G.closed
        } catch (b) {
            return !1
        }
    };
    Z.prototype.connect = function(a) {
        this.u = a || ca;
        3 == this.S && (this.S = 1);
        this.P ? Qd(this.P, this.j) : this.j()
    };
    Z.prototype.j = function() {
        this.P = null;
        if (this.a.ifrid) {
            var a = this.a.ifrid;
            this.N = t(a) ? this.f.a.getElementById(a) : a
        }
        this.N && ((a = this.N.contentWindow) || (a = window.frames[this.a.ifrid]), this.G = a);
        if (!this.G) {
            if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
            this.G = window.parent
        }
        if (!this.F) {
            if (!this.a.tp) {
                a = this.a;
                if (x(document.postMessage) || x(window.postMessage) || D && window.postMessage) var b = 1;
                else if (Ya) b = 2;
                else if (D && this.a.pru) b = 3;
                else {
                    var c;
                    if (c = D) {
                        c = !1;
                        try {
                            b = window.opener, window.opener = {}, c = Ta(window, "opener"), window.opener = b
                        } catch (d) {}
                    }
                    b = c ? 6 : 4
                }
                a.tp = b
            }
            switch (this.a.tp) {
                case 1:
                    this.F = new W(this, this.a.ph, this.f, !!this.a.osh, this.a.nativeProtocolVersion || 2);
                    break;
                case 6:
                    this.F = new Ke(this, this.f);
                    break;
                case 2:
                    this.F = new be(this, this.f);
                    break;
                case 3:
                    this.F = new ue(this, this.f);
                    break;
                case 4:
                    this.F = new V(this, this.f);
                    break;
                case 7:
                    if (a = this.G) try {
                        a = window.document.domain == this.G.document.domain
                    } catch (d) {
                        a = !1
                    }
                    a && (this.F = new Xd(this, this.f))
            }
            if (!this.F) throw Error("CrossPageChannel: No suitable transport found!");
        }
        for (this.F.connect(); 0 < this.m.length;) this.m.shift()()
    };
    Z.prototype.close = function() {
        this.P && (this.P.cancel(), this.P = null);
        this.m.length = 0;
        Ed(this.v);
        this.S = 3;
        J(this.F);
        this.u = this.F = null;
        J(this.K);
        this.K = null
    };
    var U = function(a, b) {
        a.I() || a.K && 0 != a.K.a || (a.S = 2, J(a.K), r(b) ? (a.K = new O(a.u, b), a.K.start()) : (a.K = null, a.u()))
    };
    Z.prototype.send = function(a, b) {
        this.I() && (ge(this) ? (y(b) && (b = ud(b)), this.F.send(ff(a), b)) : this.close())
    };
    Z.prototype.c = function(a, b, c) {
        this.P ? this.m.push(z(this.c, this, a, b, c)) : Fe(this, c) && !this.g && 3 != this.S && (a && "tp" != a ? this.I() && (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = ef.test(a) ? a.substring(1) : a, a = (c = this.A[a]) ? c : this.B ? {
            H: ka(this.B, a),
            ua: y(b)
        } : null) && (b = Gd(b, a.ua), null != b && a.H(b)) : this.F.ea(b))
    };
    var ff = function(a) {
            df.test(a) && (a = "%" + a);
            return a.replace(/[%:|]/g, encodeURIComponent)
        },
        T = function(a) {
            var b = a.a.role;
            return "number" == typeof b ? b : window.parent == a.G ? 1 : 0
        },
        Wd = function(a, b) {
            delete P[a.name];
            a.name = b;
            P[b] = a
        },
        Fe = function(a, b) {
            var c = a.a.ph;
            return /^[\s\xa0]*$/.test(null == b ? "" : String(b)) || /^[\s\xa0]*$/.test(null == c ? "" : String(c)) || b == a.a.ph
        };
    Z.prototype.o = function() {
        this.close();
        this.N = this.G = null;
        delete P[this.name];
        J(this.v);
        delete this.v;
        Z.C.o.call(this)
    };
    var nc = function() {
        for (var a in P) J(P[a])
    };
    var gf = function(a, b) {
        Z.call(this, a, b);
        this.i = null
    };
    A(gf, Z);
    gf.prototype.o = function() {
        this.i && (this.i.dispose(), this.i = null);
        gf.C.o.call(this)
    };
    gf.prototype.j = function() {
        gf.C.j.call(this);
        if (3 == this.a.tp) {
            var a = this.N;
            a ? (this.i = new zd(a), K(this.i, "loadEvent", this.D, !1, this)) : U(this)
        }
    };
    gf.prototype.D = function() {
        lc(this.i, "loadEvent", this.D, !1, this);
        this.i.dispose();
        this.i = null;
        U(this)
    };
    var hf = function() {
        I.call(this);
        this.a = null;
        var a = document.createElement("iframe");
        a.name = "studio-signal-frame";
        a.id = "studio-signal-frame";
        a.src = "about:blank";
        a.width = 0;
        a.height = 0;
        a.a = 0;
        a.scrolling = "no";
        document.body.insertBefore(a, document.body.firstChild);
        K(window, "load", this.c, !1, this)
    };
    A(hf, I);
    hf.prototype.o = function() {
        this.a && (this.a.dispose(), this.a = null);
        hf.C.o.call(this)
    };
    hf.prototype.c = function() {
        lc(window, "load", this.c, !1, this);
        var a = (new Ne).c.get("xpc");
        a = JSON.parse(a);
        this.a = new gf(a);
        a = z(this.f, this);
        this.a.A.cdto = {
            H: a,
            ua: !0
        };
        this.a.connect()
    };
    var jf = function(a) {
        return (a = a.creativeParameters) && "true" == a.useDclkStudioV3Procedure ? 1 : 0
    };
    hf.prototype.f = function(a) {
        t(a) && (a = JSON.parse(a));
        if (a) {
            var b = 1 == jf(a) ? a.creativeParameters : a.adServerData || {},
                c = b.cid,
                d = b.sig;
            b.sig = "";
            b = ud(a);
            c = yd(b, c);
            if (d == c)
                if (1 == jf(a)) {
                    var e = new Ja(a),
                        g = self.parent.parent,
                        f = self.parent;
                    if (Ka(e, "FLOATING") && !Ka(e, "BANNER")) {
                        var h = fd(g);
                        f = null
                    } else h = gd(g);
                    if (g) {
                        g = h;
                        h = g.dclkStudioV3 = g.dclkStudioV3 || {};
                        h.creativeSeq = h.creativeSeq || 1;
                        var n = e.a.creativeParameters;
                        n.creative_unique_id = n.cid + "_" + h.creativeSeq++;
                        var k;
                        if (f && (k = hd(f))) {
                            var l = k.style.width;
                            var u = k.style.height;
                            var q = k.width;
                            var w = k.height;
                            var $b = k.style.display;
                            f = (e.c ? e.a.displayConfigParameters : e.a.creativeParameters).ad_container_id;
                            h = "true" == e.a.creativeParameters.generate_ad_slot;
                            if (null == f || h) f = "creative_" + e.a.creativeParameters.creative_unique_id, h = e.a, h.creativeParameters.ad_container_id = f, null == h.displayConfigParameters && (h.displayConfigParameters = {}), h.displayConfigParameters.ad_container_id = f;
                            h = g.document.createElement("div");
                            h.id = f;
                            h.style.width = bd(e.a.width);
                            h.style.height = bd(e.a.height);
                            var Vd =
                                h;
                            f = k;
                            f.width = "0";
                            f.height = "0";
                            f.style.width = "0";
                            f.style.height = "0";
                            f.style.display = "none";
                            k.parentNode && k.parentNode.insertBefore(Vd, k)
                        }
                        jd(e, g);
                        md(e, k, l, u, q, w, $b, Vd)
                    }
                } else if (k = a, l = self.parent.parent, u = self.parent, k.breakoutToTop ? (q = fd(l), u = null) : q = gd(l), l) {
                l = q;
                q = l.studioV2 = l.studioV2 || {};
                q.creativeCount = q.creativeCount || 0;
                k.uniqueId = k.id + "_" + q.creativeCount++;
                if (u && (e = hd(u))) {
                    g = e.style.width;
                    f = e.style.height;
                    h = e.width;
                    n = e.height;
                    var kf = e.style.display;
                    u = e;
                    q = k.adServerData;
                    w = (w = q.tag) && w.adContainerElementId;
                    $b = q.generatedAdSlot;
                    if (!w || $b) w = ["creative", k.uniqueId].join("_"), q.tag.adContainerElementId = w;
                    q = l.document.createElement("div");
                    q.id = w;
                    if (w = k.dimensions) q.style.width = bd(w.width), q.style.height = bd(w.height);
                    u.width = "0";
                    u.height = "0";
                    u.style.width = "0";
                    u.style.height = "0";
                    u.style.display = "none";
                    u.parentNode && u.parentNode.insertBefore(q, u);
                    var lf = q
                }
                u = cd(["studioV2.creatives", k.creativeKey].join("."), {}, l);
                (u.adResponses = u.adResponses || new l.Array).push({
                    creativeDto: k,
                    backupImage: null
                });
                q = cd(["studioV2.loadedLibraries",
                    k.templateVersion, k.rendererName
                ].join("."), {}, l);
                u.creativeDefinition && q.bootstrap ? q.bootstrap() : (u.definitionLoading || (u.definitionLoading = !0, id(k.creativeDefinitionUrl, l)), q.loading || (q.loading = !0, id(k.renderingLibrary, l)));
                ld(k, l, e, g, f, h, n, kf, lf)
            }
            this.a.dispose();
            this.a = null
        }
    };
    new hf;
}).call(this);