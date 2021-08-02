! function (e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/dist", n(n.s = 5)
}([function (e, t) {
    e.exports = jQuery
}, function (e, t, n) {
    var o = n(2),
        i = n(3);
    "string" == typeof (i = i.__esModule ? i.default : i) && (i = [
        [e.i, i, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    o(i, a);
    e.exports = i.locals || {}
}, function (e, t, n) {
    "use strict";
    var o, i = function () {
        return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o
    },
        a = function () {
            var e = {};
            return function (t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    e[t] = n
                }
                return e[t]
            }
        }(),
        r = [];

    function s(e) {
        for (var t = -1, n = 0; n < r.length; n++)
            if (r[n].identifier === e) {
                t = n;
                break
            } return t
    }

    function c(e, t) {
        for (var n = {}, o = [], i = 0; i < e.length; i++) {
            var a = e[i],
                c = t.base ? a[0] + t.base : a[0],
                l = n[c] || 0,
                u = "".concat(c, " ").concat(l);
            n[c] = l + 1;
            var d = s(u),
                f = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                }; - 1 !== d ? (r[d].references++, r[d].updater(f)) : r.push({
                    identifier: u,
                    updater: y(f, t),
                    references: 1
                }), o.push(u)
        }
        return o
    }

    function l(e) {
        var t = document.createElement("style"),
            o = e.attributes || {};
        if (void 0 === o.nonce) {
            var i = n.nc;
            i && (o.nonce = i)
        }
        if (Object.keys(o).forEach((function (e) {
            t.setAttribute(e, o[e])
        })), "function" == typeof e.insert) e.insert(t);
        else {
            var r = a(e.insert || "head");
            if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            r.appendChild(t)
        }
        return t
    }
    var u, d = (u = [], function (e, t) {
        return u[e] = t, u.filter(Boolean).join("\n")
    });

    function f(e, t, n, o) {
        var i = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
        if (e.styleSheet) e.styleSheet.cssText = d(t, i);
        else {
            var a = document.createTextNode(i),
                r = e.childNodes;
            r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(a, r[t]) : e.appendChild(a)
        }
    }

    function h(e, t, n) {
        var o = n.css,
            i = n.media,
            a = n.sourceMap;
        if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), a && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = o;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o))
        }
    }
    var p = null,
        v = 0;

    function y(e, t) {
        var n, o, i;
        if (t.singleton) {
            var a = v++;
            n = p || (p = l(t)), o = f.bind(null, n, a, !1), i = f.bind(null, n, a, !0)
        } else n = l(t), o = h.bind(null, n, t), i = function () {
            ! function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(n)
        };
        return o(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    o(e = t)
                } else i()
            }
    }
    e.exports = function (e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
        var n = c(e = e || [], t);
        return function (e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var o = 0; o < n.length; o++) {
                    var i = s(n[o]);
                    r[i].references--
                }
                for (var a = c(e, t), l = 0; l < n.length; l++) {
                    var u = s(n[l]);
                    0 === r[u].references && (r[u].updater(), r.splice(u, 1))
                }
                n = a
            }
        }
    }
}, function (e, t, n) {
    (t = n(4)(!1)).push([e.i, ".simple-tree-table-icon{display:inline-block;line-height:1.5em;padding-left:.5rem;text-align:center;cursor:pointer;font-size:16px}.simple-tree-table-closed .simple-tree-table-icon:after{content:'+';position:relative}\n .simple-tree-table-opened .simple-tree-table-icon:after{content:'-';position:relative}", ""]), e.exports = t
    console.log(t);
    console.log(e);
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map((function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        o = e[3];
                    if (!o) return n;
                    if (t && "function" == typeof btoa) {
                        var i = (r = o, s = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(c, " */")),
                            a = o.sources.map((function (e) {
                                return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */")
                            }));
                        return [n].concat(a).concat([i]).join("\n")
                    }
                    var r, s, c;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
            })).join("")
        }, t.i = function (e, n, o) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            var i = {};
            if (o)
                for (var a = 0; a < this.length; a++) {
                    var r = this[a][0];
                    null != r && (i[r] = !0)
                }
            for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                o && i[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c))
            }
        }, t
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
        i = n.n(o);

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function s(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
    var c = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            a(this, e), this.opts = {
                type: t.type || "session",
                key: t.key
            }, this.inst = new l(this.opts)
        }
        return s(e, [{
            key: "get",
            value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return this.inst.get(this.opts.key) || e
            }
        }, {
            key: "set",
            value: function (e) {
                this.inst.set(this.opts.key, e)
            }
        }, {
            key: "remove",
            value: function () {
                this.inst.remove(this.opts.key)
            }
        }]), e
    }(),
        l = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                a(this, e), this.storage = {
                    local: window.localStorage,
                    session: window.sessionStorage
                }[t.type]
            }
            return s(e, [{
                key: "get",
                value: function (e) {
                    try {
                        var t = this.storage.getItem(e);
                        return t ? JSON.parse(t) : null
                    } catch (e) {
                        return console.log(e), null
                    }
                }
            }, {
                key: "set",
                value: function (e, t) {
                    try {
                        this.storage.setItem(e, JSON.stringify(t))
                    } catch (e) {
                        console.log(e)
                    }
                }
            }, {
                key: "remove",
                value: function (e) {
                    this.storage.removeItem(e)
                }
            }]), e
        }(),
        u = (n(1), "simple-tree-table");

    function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var h = {
        expander: null,
        collapser: null,
        opened: "all",
        margin: 20,
        iconPosition: "> :first-child",
        iconTemplate: "<span />",
        store: null,
        storeKey: null
    },
        p = function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                d(this, e), this.options = i.a.extend({}, h, n), this.$table = i()(t), this.$expander = i()(this.options.expander), this.$collapser = i()(this.options.collapser), this.options.store && this.options.storeKey && (this.store = new c({
                    type: this.options.store,
                    key: this.options.storeKey
                })), this.init(), this.load()
            }
            var t, n, o;
            return t = e, o = [{
                key: "getDefaults",
                value: function () {
                    return h
                }
            }, {
                key: "setDefaults",
                value: function (e) {
                    return i.a.extend(h, e)
                }
            }], (n = [{
                key: "init",
                value: function () {
                    this.$table.addClass(u), this.build(), this.unbind(), this.bind()
                }
            }, {
                key: "destroy",
                value: function () {
                    var e = function (e, t) {
                        var n = new RegExp("".concat(u, "(-\\S+)?"), "g");
                        return (t.match(n) || []).join(" ")
                    };
                    this.$table.removeClass(e), this.nodes().removeClass(e), this.$table.find(".".concat(u, "-icon")).remove(), this.unbind()
                }
            }, {
                key: "build",
                value: function () {
                    var e = this;
                    this.nodes().not("[data-node-depth]").each((function (t, n) {
                        var o = i()(n),
                            a = e.depth(o);
                        o.data("node-depth", a), 1 == a && o.addClass("".concat(u, "-root"))
                    })), this.nodes().filter((function (t, n) {
                        return 0 == i()(n).find(e.options.iconPosition).find(".".concat(u, "-handler")).length
                    })).each((function (t, n) {
                        var o = i()(n),
                            a = e.depth(o),
                            r = e.options.margin * (a - 1),
                            s = i()(e.options.iconTemplate).addClass("".concat(u, "-handler ").concat(u, "-icon")).css("margin-right", "".concat(r, "px"));
                        o.find(e.options.iconPosition).prepend(s)
                    })), this.nodes().not(".".concat(u, "-empty, .").concat(u, "-opened, .").concat(u, "-closed")).each((function (t, n) {
                        var o = i()(n);
                        e.hasChildren(o) ? e.opensDefault(o) ? o.addClass("".concat(u, "-opened")) : o.addClass("".concat(u, "-closed")) : o.addClass("".concat(u, "-empty"))
                    })), this.nodes().filter(".".concat(u, "-closed")).each((function (t, n) {
                        e.show(i()(n))
                    })), this.nodes().filter(".".concat(u, "-opened")).each((function (t, n) {
                        e.hide(i()(n))
                    }))
                }
            }, {
                key: "opensDefault",
                value: function (e) {
                    var t = this.options.opened;
                    return t && ("all" == t || -1 != t.indexOf(e.data("node-id")))
                }
            }, {
                key: "bind",
                value: function () {
                    var e = this;
                    this.$expander.on("click.".concat(u), (function (t) {
                        e.expand()
                    })), this.$collapser.on("click.".concat(u), (function (t) {
                        e.collapse()
                    })), this.$table.on("click.".concat(u), "tr .".concat(u, "-handler"), (function (t) {
                        var n = i()(t.currentTarget).closest("tr");
                        n.hasClass("".concat(u, "-opened")) ? e.close(n) : e.open(n)
                    }))
                }
            }, {
                key: "unbind",
                value: function () {
                    this.$expander.off(".".concat(u)), this.$collapser.off(".".concat(u)), this.$table.off(".".concat(u, " node:open node:close"))
                }
            }, {
                key: "expand",
                value: function () {
                    var e = this;
                    this.nodes().each((function (t, n) {
                        e.show(i()(n))
                    })), this.save()
                }
            }, {
                key: "collapse",
                value: function () {
                    var e = this;
                    this.nodes().each((function (t, n) {
                        e.hide(i()(n))
                    })), this.save()
                }
            }, {
                key: "nodes",
                value: function () {
                    return this.$table.find("tr[data-node-id]")
                }
            }, {
                key: "depth",
                value: function (e) {
                    var t = e.data("node-depth");
                    if (t) return t;
                    var n = this.findByID(e.data("node-pid"));
                    return 0 != n.length ? this.depth(n) + 1 : 1
                }
            }, {
                key: "open",
                value: function (e) {
                    this.show(e), this.save(), e.trigger("node:open", [e])
                }
            }, {
                key: "show",
                value: function (e) {
                    e.hasClass("".concat(u, "-empty")) || (e.removeClass("".concat(u, "-closed")).addClass("".concat(u, "-opened")), this.showDescs(e))
                }
            }, {
                key: "showDescs",
                value: function (e) {
                    var t = this;
                    this.findChildren(e).each((function (e, n) {
                        var o = i()(n);
                        o.show(), o.hasClass("".concat(u, "-opened")) && t.showDescs(o)
                    }))
                }
            }, {
                key: "close",
                value: function (e) {
                    this.hide(e), this.save(), e.trigger("node:close", [e])
                }
            }, {
                key: "hide",
                value: function (e) {
                    e.hasClass("".concat(u, "-empty")) || (e.removeClass("".concat(u, "-opened")).addClass("".concat(u, "-closed")), this.hideDescs(e))
                }
            }, {
                key: "hideDescs",
                value: function (e) {
                    var t = this;
                    this.findChildren(e).each((function (e, n) {
                        var o = i()(n);
                        o.hide(), t.hideDescs(o)
                    }))
                }
            }, {
                key: "hasChildren",
                value: function (e) {
                    return 0 != this.findChildren(e).length
                }
            }, {
                key: "findChildren",
                value: function (e) {
                    var t = e.data("node-id");
                    return this.$table.find('tr[data-node-pid="'.concat(t, '"]'))
                }
            }, {
                key: "findDescendants",
                value: function (e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        o = this.findChildren(e);
                    return n.push(o), o.each((function (e, o) {
                        t.findDescendants(i()(o), n)
                    })), n
                }
            }, {
                key: "findByID",
                value: function (e) {
                    return this.$table.find('tr[data-node-id="'.concat(e, '"]'))
                }
            }, {
                key: "openByID",
                value: function (e) {
                    this.open(this.findByID(e))
                }
            }, {
                key: "closeByID",
                value: function (e) {
                    this.close(this.findByID(e))
                }
            }, {
                key: "load",
                value: function () {
                    var e = this;
                    if (this.store) {
                        var t = this.store.get();
                        t && (this.nodes().each((function (t, n) {
                            e.show(i()(n))
                        })), this.nodes().filter((function (e, n) {
                            return -1 != t.indexOf(i()(n).data("node-id"))
                        })).each((function (t, n) {
                            e.hide(i()(n))
                        })))
                    }
                }
            }, {
                key: "save",
                value: function () {
                    if (this.store) {
                        var e = this.nodes().filter(".".concat(u, "-closed")).map((function (e, t) {
                            return i()(t).data("node-id")
                        })).get();
                        this.store.set(e)
                    }
                }
            }]) && f(t.prototype, n), o && f(t, o), e
        }();
    i.a.fn.simpleTreeTable = function (e) {
        return this.each((function (t, n) {
            var o = i()(n);
            o.data(u) && o.data(u).destroy(), o.data(u, new p(o, e))
        }))
    }, i.a.SimpleTreeTable = p
}]);