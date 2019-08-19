$(document).ready(function(){
	
    $('.img-responsive').each(function() {
        var maxWidth = 180; // Max width for the image
        var maxHeight = 3000;    // Max height for the image
        var ratio = 0;  // Used for aspect ratio
        var width = $(this).width();    // Current image width
        var height = $(this).height();  // Current image height
    
        // Check if the current width is larger than the max
        if(width > maxWidth){
            ratio = maxWidth / width;   // get ratio for scaling image
            $(this).css("width", maxWidth); // Set new width
            $(this).css("height", height * ratio);  // Scale height based on ratio
            height = height * ratio;    // Reset height to match scaled image
        }
    
        var width = $(this).width();    // Current image width
        var height = $(this).height();  // Current image height
    
        // Check if current height is larger than max
        if(height > maxHeight){
            ratio = maxHeight / height; // get ratio for scaling image
            $(this).css("height", maxHeight);   // Set new height
            $(this).css("width", width * ratio);    // Scale width based on ratio
            width = width * ratio;    // Reset width to match scaled image
        }
        
        });
        
    });
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
! function(g) {
    g.fn.twentytwenty = function(m) {
        m = g.extend({
            default_offset_pct: .5,
            orientation: "horizontal",
            before_label: "Before",
            after_label: "After",
            no_overlay: !1,
            move_slider_on_hover: !1,
            move_with_handle_only: !0,
            click_to_move: !1
        }, m);
        return this.each(function() {
            var e = m.default_offset_pct,
                s = g(this),
                r = m.orientation,
                t = "vertical" === r ? "down" : "left",
                n = "vertical" === r ? "up" : "right";
            s.wrap("<div class='twentytwenty-wrapper twentytwenty-" + r + "'></div>"), m.no_overlay || s.append("<div class='twentytwenty-overlay'></div>");
            var c = s.find("img:first"),
                d = s.find("img:last");
            s.append("<div class='twentytwenty-handle'></div>");
            var l = s.find(".twentytwenty-handle");
            l.append("<span class='twentytwenty-" + t + "-arrow'></span>"), l.append("<span class='twentytwenty-" + n + "-arrow'></span>"), s.addClass("twentytwenty-container"), c.addClass("twentytwenty-before"), d.addClass("twentytwenty-after");
            var i = s.find(".twentytwenty-overlay");
            i.append("<div class='twentytwenty-before-label'></div>"), i.append("<div class='twentytwenty-after-label'></div>");
            var a = function(t) {
                    var e, n, i, a, o = (e = t, n = c.width(), i = c.height(), {
                        w: n + "px",
                        h: i + "px",
                        cw: e * n + "px",
                        ch: e * i + "px"
                    });
                    l.css("vertical" === r ? "top" : "left", "vertical" === r ? o.ch : o.cw), a = o, "vertical" === r ? (c.css("clip", "rect(0," + a.w + "," + a.ch + ",0)"), d.css("clip", "rect(" + a.ch + "," + a.w + "," + a.h + ",0)")) : (c.css("clip", "rect(0," + a.cw + "," + a.h + ",0)"), d.css("clip", "rect(0," + a.w + "," + a.h + "," + a.cw + ")")), s.css("height", a.h)
                },
                o = function(t, e) {
                    var n, i, a;
                    return n = "vertical" === r ? (e - v) / p : (t - w) / f, i = 0, a = 1, Math.max(i, Math.min(a, n))
                };
            g(window).on("resize.twentytwenty", function(t) {
                a(e)
            });
            var w = 0,
                v = 0,
                f = 0,
                p = 0,
                y = function(t) {
                    (t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY) && "vertical" !== r ? t.preventDefault() : (t.distX < t.distY && t.distX < -t.distY || t.distX > t.distY && t.distX > -t.distY) && "vertical" === r && t.preventDefault(), s.addClass("active"), w = s.offset().left, v = s.offset().top, f = c.width(), p = c.height()
                },
                h = function(t) {
                    s.hasClass("active") && (e = o(t.pageX, t.pageY), a(e))
                },
                u = function() {
                    s.removeClass("active")
                },
                _ = m.move_with_handle_only ? l : s;
            _.on("movestart", y), _.on("move", h), _.on("moveend", u), m.move_slider_on_hover && (s.on("mouseenter", y), s.on("mousemove", h), s.on("mouseleave", u)), l.on("touchmove", function(t) {
                t.preventDefault()
            }), s.find("img").on("mousedown", function(t) {
                t.preventDefault()
            }), m.click_to_move && s.on("click", function(t) {
                w = s.offset().left, v = s.offset().top, f = c.width(), p = c.height(), e = o(t.pageX, t.pageY), a(e)
            }), g(window).trigger("resize.twentytwenty")
        })
    }
}(jQuery);
! function(e) {
    "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && null !== module && module.exports ? module.exports = e : e()
}(function() {
    var i = Object.assign || window.jQuery && jQuery.extend,
        p = 8,
        a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
            return window.setTimeout(function() {
                e()
            }, 25)
        };
    ! function() {
        if ("function" == typeof window.CustomEvent) return;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }();
    var o = {
            textarea: !0,
            input: !0,
            select: !0,
            button: !0
        },
        u = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup"
        },
        r = {
            move: "touchmove",
            cancel: "touchend",
            end: "touchend"
        },
        d = /\s+/,
        c = {
            bubbles: !0,
            cancelable: !0
        },
        t = "function" == typeof Symbol ? Symbol("events") : {};

    function m(e) {
        return e[t] || (e[t] = {})
    }

    function v(e, t, n, o, i) {
        t = t.split(d);
        var a, c = m(e),
            u = t.length;

        function r(e) {
            n(e, o)
        }
        for (; u--;)(c[a = t[u]] || (c[a] = [])).push([n, r]), e.addEventListener(a, r)
    }

    function f(e, t, n, o) {
        t = t.split(d);
        var i, a, c, u = m(e),
            r = t.length;
        if (u)
            for (; r--;)
                if (a = u[i = t[r]])
                    for (c = a.length; c--;) a[c][0] === n && (e.removeEventListener(i, a[c][1]), a.splice(c, 1))
    }

    function g(e, t, n) {
        var o = new CustomEvent(t, c);
        n && i(o, n), e.dispatchEvent(o)
    }

    function n(e) {
        var n = e,
            o = !1,
            i = !1;

        function t(e) {
            o ? (n(), a(t), o = !(i = !0)) : i = !1
        }
        this.kick = function(e) {
            o = !0, i || t()
        }, this.end = function(e) {
            var t = n;
            e && (i ? (n = o ? function() {
                t(), e()
            } : e, o = !0) : e())
        }
    }

    function h() {}

    function s(e) {
        e.preventDefault()
    }

    function l(e, t) {
        var n, o;
        if (e.identifiedTouch) return e.identifiedTouch(t);
        for (n = -1, o = e.length; ++n < o;)
            if (e[n].identifier === t) return e[n]
    }

    function X(e, t) {
        var n = l(e.changedTouches, t.identifier);
        if (n && (n.pageX !== t.pageX || n.pageY !== t.pageY)) return n
    }

    function Y(e, t) {
        T(e, t, e, w)
    }

    function y(e, t) {
        w()
    }

    function w() {
        f(document, u.move, Y), f(document, u.cancel, y)
    }

    function b(e) {
        f(document, r.move, e.touchmove), f(document, r.cancel, e.touchend)
    }

    function T(e, t, n, o) {
        var i, a, c, u, r, d, m, v, f, s = n.pageX - t.pageX,
            l = n.pageY - t.pageY;
        s * s + l * l < p * p || (a = t, c = n, u = s, r = l, d = o, m = (i = e).targetTouches, v = i.timeStamp - a.timeStamp, f = {
            altKey: i.altKey,
            ctrlKey: i.ctrlKey,
            shiftKey: i.shiftKey,
            startX: a.pageX,
            startY: a.pageY,
            distX: u,
            distY: r,
            deltaX: u,
            deltaY: r,
            pageX: c.pageX,
            pageY: c.pageY,
            velocityX: u / v,
            velocityY: r / v,
            identifier: a.identifier,
            targetTouches: m,
            finger: m ? m.length : 1,
            enableMove: function() {
                this.moveEnabled = !0, this.enableMove = h, i.preventDefault()
            }
        }, g(a.target, "movestart", f), d(a))
    }

    function E(e, t) {
        var n = t.timer;
        t.touch = e, t.timeStamp = e.timeStamp, n.kick()
    }

    function S(e, t) {
        var n = t.target,
            o = t.event,
            i = t.timer;
        f(document, u.move, E), f(document, u.end, S), K(n, o, i, function() {
            setTimeout(function() {
                f(n, "click", s)
            }, 0)
        })
    }

    function k(e, t) {
        var n, o = t.target,
            i = t.event,
            a = t.timer;
        l(e.changedTouches, i.identifier) && (n = t, f(document, r.move, n.activeTouchmove), f(document, r.end, n.activeTouchend), K(o, i, a))
    }

    function K(e, t, n, o) {
        n.end(function() {
            return g(e, "moveend", t), o && o()
        })
    }
    if (v(document, "mousedown", function(e) {
            var t;
            1 !== (t = e).which || t.ctrlKey || t.altKey || o[e.target.tagName.toLowerCase()] || (v(document, u.move, Y, e), v(document, u.cancel, y, e))
        }), v(document, "touchstart", function(e) {
            if (!o[e.target.tagName.toLowerCase()]) {
                var t = e.changedTouches[0],
                    n = {
                        target: t.target,
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: t.identifier,
                        touchmove: function(e, t) {
                            var n, o, i;
                            (i = X(n = e, o = t)) && T(n, o, i, b)
                        },
                        touchend: function(e, t) {
                            var n;
                            n = t, l(e.changedTouches, n.identifier) && b(n)
                        }
                    };
                v(document, r.move, n.touchmove, n), v(document, r.cancel, n.touchend, n)
            }
        }), v(document, "movestart", function(e) {
            if (!e.defaultPrevented && e.moveEnabled) {
                var a = {
                        startX: e.startX,
                        startY: e.startY,
                        pageX: e.pageX,
                        pageY: e.pageY,
                        distX: e.distX,
                        distY: e.distY,
                        deltaX: e.deltaX,
                        deltaY: e.deltaY,
                        velocityX: e.velocityX,
                        velocityY: e.velocityY,
                        identifier: e.identifier,
                        targetTouches: e.targetTouches,
                        finger: e.finger
                    },
                    c = {
                        target: e.target,
                        event: a,
                        timer: new n(function(e) {
                            var t, n, o, i;
                            t = a, n = c.touch, o = c.timeStamp, i = o - t.timeStamp, t.distX = n.pageX - t.startX, t.distY = n.pageY - t.startY, t.deltaX = n.pageX - t.pageX, t.deltaY = n.pageY - t.pageY, t.velocityX = .3 * t.velocityX + .7 * t.deltaX / i, t.velocityY = .3 * t.velocityY + .7 * t.deltaY / i, t.pageX = n.pageX, t.pageY = n.pageY, g(c.target, "move", a)
                        }),
                        touch: void 0,
                        timeStamp: e.timeStamp
                    };
                void 0 === e.identifier ? (v(e.target, "click", s), v(document, u.move, E, c), v(document, u.end, S, c)) : (c.activeTouchmove = function(e, t) {
                    var n, o, i, a, c;
                    n = e, i = (o = t).event, a = o.timer, (c = X(n, i)) && (n.preventDefault(), i.targetTouches = n.targetTouches, o.touch = c, o.timeStamp = n.timeStamp, a.kick())
                }, c.activeTouchend = function(e, t) {
                    k(e, t)
                }, v(document, r.move, c.activeTouchmove, c), v(document, r.end, c.activeTouchend, c))
            }
        }), window.jQuery) {
        var j = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");
        jQuery.event.special.movestart = {
            setup: function() {
                return v(this, "movestart", e), !1
            },
            teardown: function() {
                return f(this, "movestart", e), !1
            },
            add: q
        }, jQuery.event.special.move = {
            setup: function() {
                return v(this, "movestart", C), !1
            },
            teardown: function() {
                return f(this, "movestart", C), !1
            },
            add: q
        }, jQuery.event.special.moveend = {
            setup: function() {
                return v(this, "movestart", Q), !1
            },
            teardown: function() {
                return f(this, "movestart", Q), !1
            },
            add: q
        }
    }

    function e(e) {
        e.enableMove()
    }

    function C(e) {
        e.enableMove()
    }

    function Q(e) {
        e.enableMove()
    }

    function q(e) {
        var o = e.handler;
        e.handler = function(e) {
            for (var t, n = j.length; n--;) e[t = j[n]] = e.originalEvent[t];
            o.apply(this, arguments)
        }
    }
});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function() {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window,
                y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
                        fadeOut: 0
                    }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y,
                        g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function() {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function(e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
                        else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
                        else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function() {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window,
                d = e(t),
                a = d.data("blockUI.history"),
                c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function() {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function(e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body),
                    d = l.width(),
                    a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window,
                l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function() {
                    l(i)
                }, 10), !1
            }
            var s = t.data,
                d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function() {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) {
            t(window, e)
        }, e.unblockUI = function(e) {
            o(window, e)
        }, e.growlUI = function(t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function(t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function() {
                l({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function() {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function(o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function() {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }), this.each(function() {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function(t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null,
            b = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
jQuery(function(e) {
    if ("undefined" == typeof wc_add_to_cart_params) return !1;

    function t() {
        e(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart", this.updateCartPage).on("added_to_cart removed_from_cart", this.updateFragments)
    }
    t.prototype.onAddToCart = function(t) {
        var a = e(this);
        if (a.is(".ajax_add_to_cart")) {
            if (!a.attr("data-product_id")) return !0;
            t.preventDefault(), a.removeClass("added"), a.addClass("loading");
            var r = {};
            e.each(a.data(), function(t, a) {
                r[t] = a
            }), e(document.body).trigger("adding_to_cart", [a, r]), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), r, function(t) {
                t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? e(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
            })
        }
    }, t.prototype.onRemoveFromCart = function(t) {
        var a = e(this),
            r = a.closest(".woocommerce-mini-cart-item");
        t.preventDefault(), r.block({
            message: null,
            overlayCSS: {
                opacity: .6
            }
        }), e.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"), {
            cart_item_key: a.data("cart_item_key")
        }, function(t) {
            t && t.fragments ? e(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
        }).fail(function() {
            window.location = a.attr("href")
        })
    }, t.prototype.updateButton = function(t, a, r, o) {
        (o = void 0 !== o && o) && (o.removeClass("loading"), o.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== o.parent().find(".added_to_cart").length || o.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), e(document.body).trigger("wc_cart_button_updated", [o]))
    }, t.prototype.updateCartPage = function() {
        var t = window.location.toString().replace("add-to-cart", "added-to-cart");
        e.get(t, function(t) {
            e(".shop_table.cart:eq(0)").replaceWith(e(t).find(".shop_table.cart:eq(0)")), e(".cart_totals:eq(0)").replaceWith(e(t).find(".cart_totals:eq(0)")), e(".cart_totals, .shop_table.cart").stop(!0).css("opacity", "1").unblock(), e(document.body).trigger("cart_page_refreshed"), e(document.body).trigger("cart_totals_refreshed")
        })
    }, t.prototype.updateFragments = function(t, a) {
        a && (e.each(a, function(t) {
            e(t).addClass("updating").fadeTo("400", "0.6").block({
                message: null,
                overlayCSS: {
                    opacity: .6
                }
            })
        }), e.each(a, function(t, a) {
            e(t).replaceWith(a), e(t).stop(!0).css("opacity", "1").unblock()
        }), e(document.body).trigger("wc_fragments_loaded"))
    }, new t
});
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(i = e({
                            path: "/"
                        }, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="),
                        C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {}
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function() {})
});
jQuery(function(i) {
    i(".woocommerce-ordering").on("change", "select.orderby", function() {
        i(this).closest("form").submit()
    }), i("input.qty:not(.product-quantity input.qty)").each(function() {
        var e = parseFloat(i(this).attr("min"));
        0 <= e && parseFloat(i(this).val()) < e && i(this).val(e)
    });
    var o = "store_notice" + (i(".woocommerce-store-notice").data("notice-id") || "");
    "hidden" === Cookies.get(o) ? i(".woocommerce-store-notice").hide() : i(".woocommerce-store-notice").show(), i(".woocommerce-store-notice__dismiss-link").click(function(e) {
        Cookies.set(o, "hidden", {
            path: "/"
        }), i(".woocommerce-store-notice").hide(), e.preventDefault()
    }), i(document.body).on("click", function() {
        i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), i(".woocommerce-input-wrapper").on("click", function(e) {
        e.stopPropagation()
    }), i(".woocommerce-input-wrapper :input").on("keydown", function(e) {
        var o = i(this).parent().find("span.description");
        if (27 === e.which && o.length && o.is(":visible")) return o.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
    }).on("click focus", function() {
        var e = i(this).parent(),
            o = e.find("span.description");
        e.addClass("currentTarget"), i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), o.length && o.is(":hidden") && o.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
    }), i.scroll_to_notices = function(e) {
        e.length && i("html, body").animate({
            scrollTop: e.offset().top - 100
        }, 1e3)
    }
});
jQuery(function(r) {
    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var t = !0,
        o = wc_cart_fragments_params.cart_hash_key;
    try {
        t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
    } catch (f) {
        t = !1
    }

    function a() {
        t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }

    function s(e) {
        t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
    }
    var e = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        data: {
            time: (new Date).getTime()
        },
        timeout: wc_cart_fragments_params.request_timeout,
        success: function(e) {
            e && e.fragments && (r.each(e.fragments, function(e, t) {
                r(e).replaceWith(t)
            }), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), r(document.body).trigger("wc_fragments_refreshed"))
        },
        error: function() {
            r(document.body).trigger("wc_fragments_ajax_error")
        }
    };

    function n() {
        r.ajax(e)
    }
    if (t) {
        var i = null;
        r(document.body).on("wc_fragment_refresh updated_wc_div", function() {
            n()
        }), r(document.body).on("added_to_cart removed_from_cart", function(e, t, r) {
            var n = sessionStorage.getItem(o);
            null !== n && n !== undefined && "" !== n || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(r)
        }), r(document.body).on("wc_fragments_refreshed", function() {
            clearTimeout(i), i = setTimeout(n, 864e5)
        }), r(window).on("storage onstorage", function(e) {
            o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && n()
        }), r(window).on("pageshow", function(e) {
            e.originalEvent.persisted && (r(".widget_shopping_cart_content").empty(), r(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = r.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
                _ = sessionStorage.getItem(o),
                g = Cookies.get("woocommerce_cart_hash"),
                m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
            if (m) {
                var d = 1 * m + 864e5,
                    w = (new Date).getTime();
                if (d < w) throw "Fragment expired";
                i = setTimeout(n, d - w)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
            r.each(c, function(e, t) {
                r(e).replaceWith(t)
            }), r(document.body).trigger("wc_fragments_loaded")
        } catch (f) {
            n()
        }
    } else n();
    0 < Cookies.get("woocommerce_items_in_cart") ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), r(document.body).on("adding_to_cart", function() {
        r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    }), "undefined" != typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.widgetsPreview && wp.customize.widgetsPreview.WidgetPartial && wp.customize.selectiveRefresh.bind("partial-content-rendered", function() {
        n()
    })
});
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
! function(a, b) {
    "use strict";
    var c = {},
        d = a.document,
        e = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (e.TweenLite) return e.TweenLite;
    var f, g, h, i, j, k = function(a) {
            var b, c = a.split("."),
                d = e;
            for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
            return d
        },
        l = k("com.greensock"),
        m = 1e-10,
        n = function(a) {
            var b, c = [],
                d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c
        },
        o = function() {},
        p = function() {
            var a = Object.prototype.toString,
                b = a.call([]);
            return function(c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(),
        q = {},
        r = function(d, f, g, h) {
            this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
            var i = [];
            this.check = function(j) {
                for (var l, m, n, o, p = f.length, s = p; --p > -1;)(l = q[f[p]] || new r(f[p], [])).gsClass ? (i[p] = l.gsClass, s--) : j && l.sc.push(this);
                if (0 === s && g) {
                    if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                        if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                            if (d === b) {
                                module.exports = c[b] = o;
                                for (p in c) o[p] = c[p]
                            } else c[b] && (c[b][n] = o);
                    else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                        return o
                    });
                    for (p = 0; p < this.sc.length; p++) this.sc[p].check()
                }
            }, this.check(!0)
        },
        s = a._gsDefine = function(a, b, c, d) {
            return new r(a, b, c, d)
        },
        t = l._class = function(a, b, c) {
            return b = b || function() {}, s(a, [], function() {
                return b
            }, c), b
        };
    s.globals = e;
    var u = [0, 0, 1, 1],
        v = t("easing.Ease", function(a, b, c, d) {
            this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u
        }, !0),
        w = v.map = {},
        x = v.register = function(a, b, c, d) {
            for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        };
    for (h = v.prototype, h._calcEnd = !1, h.getRatio = function(a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type,
                c = this._power,
                d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
    w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
    var y = t("events.EventDispatcher", function(a) {
        this._listeners = {}, this._eventTarget = a || this
    });
    h = y.prototype, h.addEventListener = function(a, b, c, d, e) {
        e = e || 0;
        var f, g, h = this._listeners[a],
            k = 0;
        for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
        h.splice(k, 0, {
            c: b,
            s: c,
            up: d,
            pr: e
        })
    }, h.removeEventListener = function(a, b) {
        var c, d = this._listeners[a];
        if (d)
            for (c = d.length; --c > -1;)
                if (d[c].c === b) return void d.splice(c, 1)
    }, h.dispatchEvent = function(a) {
        var b, c, d, e = this._listeners[a];
        if (e)
            for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                type: a,
                target: c
            }) : d.c.call(d.s || c))
    };
    var z = a.requestAnimationFrame,
        A = a.cancelAnimationFrame,
        B = Date.now || function() {
            return (new Date).getTime()
        },
        C = B();
    for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
    t("Ticker", function(a, b) {
        var c, e, f, g, h, k = this,
            l = B(),
            n = b !== !1 && z ? "auto" : !1,
            p = 500,
            q = 33,
            r = "tick",
            s = function(a) {
                var b, d, i = B() - C;
                i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r)
            };
        y.call(k), k.time = k.frame = 0, k.tick = function() {
            s(!0)
        }, k.lagSmoothing = function(a, b) {
            return arguments.length ? (p = a || 1 / m, void(q = Math.min(b, p, 0))) : 1 / m > p
        }, k.sleep = function() {
            null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1))
        }, k.wake = function(a) {
            null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function(a) {
                return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
            }, k === i && (j = !0), s(2)
        }, k.fps = function(a) {
            return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c
        }, k.useRAF = function(a) {
            return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
        }, k.fps(a), setTimeout(function() {
            "auto" === n && k.frame < 5 && "hidden" !== (d || {}).visibilityState && k.useRAF(!1)
        }, 1500)
    }), h = l.Ticker.prototype = new l.events.EventDispatcher, h.constructor = l.Ticker;
    var D = t("core.Animation", function(a, b) {
        if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, X) {
            j || i.wake();
            var c = this.vars.useFrames ? W : X;
            c.add(this, c._time), this.vars.paused && this.paused(!0)
        }
    });
    i = D.ticker = new l.Ticker, h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
    var E = function() {
        j && B() - C > 2e3 && ("hidden" !== (d || {}).visibilityState || !i.lagSmoothing()) && i.wake();
        var a = setTimeout(E, 2e3);
        a.unref && a.unref()
    };
    E(), h.play = function(a, b) {
        return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
    }, h.pause = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!0)
    }, h.resume = function(a, b) {
        return null != a && this.seek(a, b), this.paused(!1)
    }, h.seek = function(a, b) {
        return this.totalTime(Number(a), b !== !1)
    }, h.restart = function(a, b) {
        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
    }, h.reverse = function(a, b) {
        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
    }, h.render = function(a, b, c) {}, h.invalidate = function() {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
    }, h.isActive = function() {
        var a, b = this._timeline,
            c = this._startTime;
        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
    }, h._enabled = function(a, b) {
        return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
    }, h._kill = function(a, b) {
        return this._enabled(!1, !1)
    }, h.kill = function(a, b) {
        return this._kill(a, b), this
    }, h._uncache = function(a) {
        for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
        return this
    }, h._swapSelfInParams = function(a) {
        for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
        return c
    }, h._callback = function(a) {
        var b = this.vars,
            c = b[a],
            d = b[a + "Params"],
            e = b[a + "Scope"] || b.callbackScope || this,
            f = d ? d.length : 0;
        switch (f) {
            case 0:
                c.call(e);
                break;
            case 1:
                c.call(e, d[0]);
                break;
            case 2:
                c.call(e, d[0], d[1]);
                break;
            default:
                c.apply(e, d)
        }
    }, h.eventCallback = function(a, b, c, d) {
        if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars;
            if (1 === arguments.length) return e[a];
            null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
        }
        return this
    }, h.delay = function(a) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
    }, h.duration = function(a) {
        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, h.totalDuration = function(a) {
        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
    }, h.time = function(a, b) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
    }, h.totalTime = function(a, b, c) {
        if (j || i.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var d = this._totalDuration,
                    e = this._timeline;
                if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                    for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
            }
            this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z())
        }
        return this
    }, h.progress = h.totalProgress = function(a, b) {
        var c = this.duration();
        return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
    }, h.startTime = function(a) {
        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
    }, h.endTime = function(a) {
        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
    }, h.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        var b, c;
        for (a = a || m, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
        return this
    }, h.reversed = function(a) {
        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
    }, h.paused = function(a) {
        if (!arguments.length) return this._paused;
        var b, c, d = this._timeline;
        return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
    };
    var F = t("core.SimpleTimeline", function(a) {
        D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    h = F.prototype = new D, h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(a, b, c, d) {
        var e, f;
        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
            for (f = a._startTime; e && e._startTime > f;) e = e._prev;
        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
    }, h._remove = function(a, b) {
        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
    }, h.render = function(a, b, c) {
        var d, e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
    }, h.rawTime = function() {
        return j || i.wake(), this._totalTime
    };
    var G = t("TweenLite", function(b, c, d) {
            if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : G.selector(b) || b;
            var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                i = this.vars.overwrite;
            if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
                for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
            else this._propLookup = {}, this._siblings = $(b, this, !1), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)))
        }, !0),
        H = function(b) {
            return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        },
        I = function(a, b) {
            var c, d = {};
            for (c in a) U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c], delete a[c]);
            a.css = d
        };
    h = G.prototype = new D, h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.20.5", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function(a, b) {
        i.lagSmoothing(a, b)
    }, G.selector = a.$ || a.jQuery || function(b) {
        var c = a.$ || a.jQuery;
        return c ? (G.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b)
    };
    var J = [],
        K = {},
        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        M = /[\+-]=-?[\.\d]/,
        N = function(a) {
            for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
        },
        O = function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = [],
                m = 0,
                n = "",
                o = 0;
            for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                _next: l._firstPT,
                t: l,
                p: l.length - 1,
                s: g,
                c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                f: 0,
                m: o && 4 > o ? Math.round : 0
            }), m += k.length;
            return n += b.substr(m), n && l.push(n), l.setRatio = N, M.test(b) && (l.end = null), l
        },
        P = function(a, b, c, d, e, f, g, h, i) {
            "function" == typeof d && (d = d(i || 0, a));
            var j, k = typeof a[b],
                l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                n = "string" == typeof d && "=" === d.charAt(1),
                o = {
                    t: a,
                    p: b,
                    s: m,
                    f: "function" === k,
                    pg: 0,
                    n: e || b,
                    m: f ? "function" == typeof f ? f : Math.round : 0,
                    pr: 0,
                    c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                };
            return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = O(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || G.defaultStringFilter, o), o = {
                t: j,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: e || b,
                pr: 0,
                m: 0
            }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
        },
        Q = G._internals = {
            isArray: p,
            isSelector: H,
            lazyTweens: J,
            blobDif: O
        },
        R = G._plugins = {},
        S = Q.tweenLookup = {},
        T = 0,
        U = Q.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1
        },
        V = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        W = D._rootFramesTimeline = new F,
        X = D._rootTimeline = new F,
        Y = 30,
        Z = Q.lazyRender = function() {
            var a, b = J.length;
            for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
            J.length = 0
        };
    X._startTime = i.time, W._startTime = i.frame, X._active = W._active = !0, setTimeout(Z, 1), D._updateRoot = G.render = function() {
        var a, b, c;
        if (J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y) {
            Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
            for (c in S) {
                for (b = S[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                0 === b.length && delete S[c]
            }
            if (c = X._first, (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
                for (; c && c._paused;) c = c._next;
                c || i.sleep()
            }
        }
    }, i.addEventListener("tick", D._updateRoot);
    var $ = function(a, b, c) {
            var d, e, f = a._gsTweenID;
            if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = {
                    target: a,
                    tweens: []
                }), b && (d = S[f].tweens, d[e = d.length] = b, c))
                for (; --e > -1;) d[e] === b && d.splice(e, 1);
            return S[f].tweens
        },
        _ = function(a, b, c, d) {
            var e, f, g = a.vars.onOverwrite;
            return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
        },
        aa = function(a, b, c, d, e) {
            var f, g, h, i;
            if (1 === d || d >= 4) {
                for (i = e.length, f = 0; i > f; f++)
                    if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                    else if (5 === d) break;
                return g
            }
            var j, k = b._startTime + m,
                l = [],
                n = 0,
                o = 0 === b._duration;
            for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o), 0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
            for (f = n; --f > -1;)
                if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                    if (2 !== d && !_(h, b)) continue;
                    h._enabled(!1, !1) && (g = !0)
                } return g
        },
        ba = function(a, b, c) {
            for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                d = d._timeline
            }
            return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
        };
    h._init = function() {
        var a, b, c, d, e, f, g = this.vars,
            h = this._overwrittenProps,
            i = this._duration,
            j = !!g.immediateRender,
            k = g.ease;
        if (g.startAt) {
            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
            for (d in g.startAt) e[d] = g.startAt[d];
            if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = G.to(this.target || {}, 0, e), j)
                if (this._time > 0) this._startAt = null;
                else if (0 !== i) return
        } else if (g.runBackwards && 0 !== i)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
            else {
                0 !== this._time && (j = !1), c = {};
                for (d in g) U[d] && "autoCSS" !== d || (c[d] = g[d]);
                if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            } if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
        else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
        if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
            for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
        this._onUpdate = g.onUpdate, this._initted = !0
    }, h._initProps = function(b, c, d, e, f) {
        var g, h, i, j, k, l;
        if (null == b) return !1;
        K[b._gsTweenID] && Z(), this.vars.css || b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b);
        for (g in this.vars)
            if (l = this.vars[g], U[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
            else if (R[g] && (j = new R[g])._onInitTween(b, this.vars[g], this, f)) {
            for (this._firstPT = k = {
                    _next: this._firstPT,
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: g,
                    pg: 1,
                    pr: j._priority,
                    m: 0
                }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
            (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
        } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
        return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i)
    }, h.render = function(a, b, c) {
        var d, e, f, g, h = this._time,
            i = this._duration,
            j = this._rawPrevTime;
        if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);
        else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
        else if (this._totalTime = this._time = a, this._easeType) {
            var k = a / i,
                l = this._easeType,
                n = this._easePower;
            (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
        } else this.ratio = this._ease.getRatio(a / i);
        if (this._time !== h || c) {
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
                this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
            this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
        }
    }, h._kill = function(a, b, c) {
        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
        b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
        var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
        if ((p(b) || H(b)) && "number" != typeof b[0])
            for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
        else {
            if (this._targets) {
                for (d = this._targets.length; --d > -1;)
                    if (b === this._targets[d]) {
                        h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                        break
                    }
            } else {
                if (b !== this.target) return !1;
                h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
            }
            if (h) {
                if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
                    for (f in j) h[f] && (l || (l = []), l.push(f));
                    if ((l || !a) && !_(this, c, b, l)) return !1
                }
                for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return i
    }, h.invalidate = function() {
        return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
    }, h._enabled = function(a, b) {
        if (j || i.wake(), a && this._gc) {
            var c, d = this._targets;
            if (d)
                for (c = d.length; --c > -1;) this._siblings[c] = $(d[c], this, !0);
            else this._siblings = $(this.target, this, !0)
        }
        return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
    }, G.to = function(a, b, c) {
        return new G(a, b, c)
    }, G.from = function(a, b, c) {
        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
    }, G.fromTo = function(a, b, c, d) {
        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
    }, G.delayedCall = function(a, b, c, d, e) {
        return new G(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0
        })
    }, G.set = function(a, b) {
        return new G(a, 0, b)
    }, G.getTweensOf = function(a, b) {
        if (null == a) return [];
        a = "string" != typeof a ? a : G.selector(a) || a;
        var c, d, e, f;
        if ((p(a) || H(a)) && "number" != typeof a[0]) {
            for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
            for (c = d.length; --c > -1;)
                for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
        } else if (a._gsTweenID)
            for (d = $(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
        return d || []
    }, G.killTweensOf = G.killDelayedCallsTo = function(a, b, c) {
        "object" == typeof b && (c = b, b = !1);
        for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
    };
    var ca = t("plugins.TweenPlugin", function(a, b) {
        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ca.prototype
    }, !0);
    if (h = ca.prototype, ca.version = "1.19.0", ca.API = 2, h._firstPT = null, h._addTween = P, h.setRatio = N, h._kill = function(a) {
            var b, c = this._overwriteProps,
                d = this._firstPT;
            if (null != a[this._propName]) this._overwriteProps = [];
            else
                for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
            for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
            return !1
        }, h._mod = h._roundProps = function(a) {
            for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
        }, G._onPluginEvent = function(a, b) {
            var c, d, e, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h;) {
                    for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                    (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                }
                h = b._firstPT = e
            }
            for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
            return c
        }, ca.activate = function(a) {
            for (var b = a.length; --b > -1;) a[b].API === ca.API && (R[(new a[b])._propName] = a[b]);
            return !0
        }, s.plugin = function(a) {
            if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
            var b, c = a.propName,
                d = a.priority || 0,
                e = a.overwriteProps,
                f = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                },
                g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                    ca.call(this, c, d), this._overwriteProps = e || []
                }, a.global === !0),
                h = g.prototype = new ca(c);
            h.constructor = g, g.API = a.API;
            for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
            return g.version = a.version, ca.activate([g]), g
        }, f = a._gsQueue) {
        for (g = 0; g < f.length; g++) f[g]();
        for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
    }
    j = !1
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
            var c, d, e, f, g = function() {
                    a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                },
                h = _gsScope._gsDefine.globals,
                i = {},
                j = g.prototype = new a("css");
            j.constructor = g, g.version = "1.20.5", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                top: j,
                right: j,
                bottom: j,
                left: j,
                width: j,
                height: j,
                fontSize: j,
                padding: j,
                margin: j,
                perspective: j,
                lineHeight: ""
            };
            var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                w = /(?:\d|\-|\+|=|#|\.)*/g,
                x = /opacity *= *([^)]*)/i,
                y = /opacity:([^;]*)/i,
                z = /alpha\(opacity *=.+?\)/i,
                A = /^(rgb|hsl)/,
                B = /([A-Z])/g,
                C = /-([a-z])/gi,
                D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                E = function(a, b) {
                    return b.toUpperCase()
                },
                F = /(?:Left|Right|Width)/i,
                G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                I = /,(?=[^\)]*(?:\(|$))/gi,
                J = /[\s,\(]/i,
                K = Math.PI / 180,
                L = 180 / Math.PI,
                M = {},
                N = {
                    style: {}
                },
                O = _gsScope.document || {
                    createElement: function() {
                        return N
                    }
                },
                P = function(a, b) {
                    return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
                },
                Q = P("div"),
                R = P("img"),
                S = g._internals = {
                    _specialProps: i
                },
                T = (_gsScope.navigator || {}).userAgent || "",
                U = function() {
                    var a = T.indexOf("Android"),
                        b = P("a");
                    return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
                }(),
                V = function(a) {
                    return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                W = function(a) {
                    _gsScope.console && console.log(a)
                },
                X = "",
                Y = "",
                Z = function(a, b) {
                    b = b || Q;
                    var c, d, e = b.style;
                    if (void 0 !== e[a]) return a;
                    for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                    return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
                },
                $ = ("undefined" != typeof window ? window : O.defaultView || {
                    getComputedStyle: function() {}
                }).getComputedStyle,
                _ = g.getStyle = function(a, b, c, d, e) {
                    var f;
                    return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
                },
                aa = S.convertToPixels = function(a, c, d, e, f) {
                    if ("px" === e || !e && "lineHeight" !== c) return d;
                    if ("auto" === e || !d) return 0;
                    var h, i, j, k = F.test(c),
                        l = a,
                        m = Q.style,
                        n = 0 > d,
                        o = 1 === d;
                    if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                        if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                        else {
                            if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                            else {
                                if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                m[k ? "width" : "height"] = d + e
                            }
                            l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
                        }
                    else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
                    return o && (h /= 100), n ? -h : h
                },
                ba = S.calculateOffset = function(a, b, c) {
                    if ("absolute" !== _(a, "position", c)) return 0;
                    var d = "left" === b ? "Left" : "Top",
                        e = _(a, "margin" + d, c);
                    return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
                },
                ca = function(a, b) {
                    var c, d, e, f = {};
                    if (b = b || $(a, null))
                        if (c = b.length)
                            for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                        else
                            for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                    else if (b = a.currentStyle || a.style)
                        for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                    return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                },
                da = function(a, b, c, d, e) {
                    var f, g, h, i = {},
                        j = a.style;
                    for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                    if (d)
                        for (g in d) "className" !== g && (i[g] = d[g]);
                    return {
                        difs: i,
                        firstMPT: h
                    }
                },
                ea = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ga = function(a, b, c) {
                    if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                    if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                    var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                        e = ea[b],
                        f = e.length;
                    for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
                    return d
                },
                ha = function(a, b) {
                    if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                    (null == a || "" === a) && (a = "0 0");
                    var c, d = a.split(" "),
                        e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                        f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                    if (d.length > 3 && !b) {
                        for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                        return a.join(",")
                    }
                    return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
                },
                ia = function(a, b) {
                    return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                },
                ja = function(a, b) {
                    return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                },
                ka = function(a, b, c, d) {
                    var e, f, g, h, i, j = 1e-6;
                    return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
                },
                la = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                ma = function(a, b, c) {
                    return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                },
                na = g.parseColor = function(a, b) {
                    var c, d, e, f, g, h, i, j, k, l, m;
                    if (a)
                        if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                        else {
                            if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
                            else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                            else if ("hsl" === a.substr(0, 3))
                                if (c = m = a.match(s), b) {
                                    if (-1 !== a.indexOf("=")) return a.match(t)
                                } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
                            else c = a.match(s) || la.transparent;
                            c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                        }
                    else c = la.black;
                    return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                },
                oa = function(a, b) {
                    var c, d, e, f = a.match(pa) || [],
                        g = 0,
                        h = "";
                    if (!f.length) return a;
                    for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                    return h + a.substr(g)
                },
                pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (j in la) pa += "|" + j + "\\b";
            pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function(a) {
                var b, c = a[0] + " " + a[1];
                pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
            }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
            var qa = function(a, b, c, d) {
                    if (null == a) return function(a) {
                        return a
                    };
                    var e, f = b ? (a.match(pa) || [""])[0] : "",
                        g = a.split(f).join("").match(u) || [],
                        h = a.substr(0, a.indexOf(g[0])),
                        i = ")" === a.charAt(a.length - 1) ? ")" : "",
                        j = -1 !== a.indexOf(" ") ? " " : ",",
                        k = g.length,
                        l = k > 0 ? g[0].replace(s, "") : "";
                    return k ? e = b ? function(a) {
                        var b, m, n, o;
                        if ("number" == typeof a) a += l;
                        else if (d && I.test(a)) {
                            for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                            return o.join(",")
                        }
                        if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                            for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                    } : function(a) {
                        var b, f, m;
                        if ("number" == typeof a) a += l;
                        else if (d && I.test(a)) {
                            for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                            return f.join(",")
                        }
                        if (b = a.match(u) || [], m = b.length, k > m--)
                            for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                        return h + b.join(j) + i
                    } : function(a) {
                        return a
                    }
                },
                ra = function(a) {
                    return a = a.split(","),
                        function(b, c, d, e, f, g, h) {
                            var i, j = (c + "").split(" ");
                            for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                            return e.parse(b, h, f, g)
                        }
                },
                sa = (S._setPluginRatio = function(a) {
                    this.plugin.setRatio(a);
                    for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                    if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a)
                        for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                            if (c = i.t, c.type) {
                                if (1 === c.type) {
                                    for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                    c[f] = e
                                }
                            } else c[f] = c.s + c.xs0;
                            i = i._next
                        }
                }, function(a, b, c, d, e) {
                    this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                }),
                ta = (S._parseToProxy = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l = d,
                        m = {},
                        n = {},
                        o = c._transform,
                        p = M;
                    for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                        if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                            for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                        d = d._next
                    }
                    return {
                        proxy: m,
                        end: n,
                        firstMPT: j,
                        pt: k
                    }
                }, S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                    this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                }),
                ua = function(a, b, c, d, e, f) {
                    var g = new ta(a, b, c, d - c, e, -1, f);
                    return g.b = c, g.e = g.xs0 = d, g
                },
                va = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                    c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                    var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                        E = d.split(", ").join(",").split(" "),
                        F = D.length,
                        G = k !== !1;
                    for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
                        if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);
                        else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
                    else if (v = p.match(s)) {
                        if (w = u.match(t), !w || w.length !== v.length) return h;
                        for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
                        h["xs" + h.l] += p.substr(o)
                    } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                    if (-1 !== d.indexOf("=") && h.data) {
                        for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                        h.e = B + h["xs" + m]
                    }
                    return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                },
                wa = 9;
            for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
            j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                var g = this,
                    h = g.l;
                return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                    s: b + c
                }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
            };
            var xa = function(a, b) {
                    b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                },
                ya = S._registerComplexSpecialProp = function(a, b, c) {
                    "object" != typeof b && (b = {
                        parser: c
                    });
                    var d, e, f = a.split(","),
                        g = b.defaultValue;
                    for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
                },
                za = S._registerPluginProp = function(a) {
                    if (!i[a]) {
                        var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                        ya(a, {
                            parser: function(a, c, d, e, f, g, j) {
                                var k = h.com.greensock.plugins[b];
                                return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
                            }
                        })
                    }
                };
            j = xa.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                var g, h, i, j, k, l, m = this.keyword;
                if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                    for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                    b = h.join(", "), c = i.join(", ")
                }
                return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
            }, j.parse = function(a, b, c, d, f, g, h) {
                return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
            }, g.registerSpecialProp = function(a, b, c) {
                ya(a, {
                    parser: function(a, d, e, f, g, h, i) {
                        var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                        return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                    },
                    priority: c
                })
            }, g.useSVGTransformAttr = !0;
            var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ca = Z("transform"),
                Da = X + "transform",
                Ea = Z("transformOrigin"),
                Fa = null !== Z("perspective"),
                Ga = S.Transform = function() {
                    this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
                },
                Ha = _gsScope.SVGElement,
                Ia = function(a, b, c) {
                    var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
                        f = /([a-z])([A-Z])/g;
                    for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                    return b.appendChild(e), e
                },
                Ja = O.documentElement || {},
                Ka = function() {
                    var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
                    return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
                }(),
                La = function(a, b, c, d, e, f) {
                    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                        w = Qa(a, !0);
                    v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                        x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                        y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                },
                Ma = function(a) {
                    var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        d = this.parentNode,
                        e = this.nextSibling,
                        f = this.style.cssText;
                    if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                        b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
                    } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                    return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
                },
                Na = function(a) {
                    try {
                        return a.getBBox()
                    } catch (b) {
                        return Ma.call(a, !0)
                    }
                },
                Oa = function(a) {
                    return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a))
                },
                Pa = [1, 0, 0, 1, 0, 0],
                Qa = function(a, b) {
                    var c, d, e, f, g, h, i = a._gsTransform || new Ga,
                        j = 1e5,
                        k = a.style;
                    if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa;
                    for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
                    return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                },
                Ra = S.getTransform = function(a, c, d, e) {
                    if (a._gsTransform && d && !e) return a._gsTransform;
                    var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
                        n = m.scaleX < 0,
                        o = 2e-5,
                        p = 1e5,
                        q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                        r = parseFloat(g.defaultTransformPerspective) || 0;
                    if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
                        if (16 === f.length) {
                            var s, t, u, v, w, x = f[0],
                                y = f[1],
                                z = f[2],
                                A = f[3],
                                B = f[4],
                                C = f[5],
                                D = f[6],
                                E = f[7],
                                F = f[8],
                                G = f[9],
                                H = f[10],
                                I = f[12],
                                J = f[13],
                                K = f[14],
                                M = f[11],
                                N = Math.atan2(D, H);
                            m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                        } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                            var O = f.length >= 6,
                                P = O ? f[0] : 1,
                                Q = f[1] || 0,
                                R = f[2] || 0,
                                S = O ? f[3] : 1;
                            m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                        }
                        Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                        for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                    }
                    return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function() {
                        Va(a.style, Ca)
                    }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                        a.removeAttribute("transform")
                    }))), m
                },
                Sa = function(a) {
                    var b, c, d = this.data,
                        e = -d.rotation * K,
                        f = e + d.skewX * K,
                        g = 1e5,
                        h = (Math.cos(e) * d.scaleX * g | 0) / g,
                        i = (Math.sin(e) * d.scaleX * g | 0) / g,
                        j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                        k = (Math.cos(f) * d.scaleY * g | 0) / g,
                        l = this.t.style,
                        m = this.t.currentStyle;
                    if (m) {
                        c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                        var n, o, q = this.t.offsetWidth,
                            r = this.t.offsetHeight,
                            s = "absolute" !== m.position,
                            t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                            u = d.x + q * d.xPercent / 100,
                            v = d.y + r * d.yPercent / 100;
                        if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                            var y, z, A, B = 8 > p ? 1 : -1;
                            for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
                        }
                    }
                },
                Ta = S.set3DTransformRatio = S.setTransformRatio = function(a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                        A = this.t.style,
                        B = z.rotation,
                        C = z.rotationX,
                        D = z.rotationY,
                        E = z.scaleX,
                        F = z.scaleY,
                        G = z.scaleZ,
                        H = z.x,
                        I = z.y,
                        J = z.z,
                        L = z.svg,
                        M = z.perspective,
                        N = z.force3D,
                        O = z.skewY,
                        P = z.skewX;
                    if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                    if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                    else {
                        if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                        c = g = 1, d = f = 0
                    }
                    k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
                };
            j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(a, b, c, d, f, h, i) {
                    if (d._lastParsedTransform === i) return f;
                    d._lastParsedTransform = i;
                    var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                    "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
                    var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
                        x = a.style,
                        y = 1e-6,
                        z = Ba.length,
                        A = i,
                        B = {},
                        C = "transformOrigin",
                        D = Ra(a, e, !0, A.parseTransform),
                        E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                    if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", -1 !== E.indexOf("%") && (m.width = _(a, "width"), m.height = _(a, "height")), O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                    else if ("object" == typeof A) {
                        if (l = {
                                scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                                scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                                scaleZ: ja(A.scaleZ, D.scaleZ),
                                x: ja(A.x, D.x),
                                y: ja(A.y, D.y),
                                z: ja(A.z, D.z),
                                xPercent: ja(A.xPercent, D.xPercent),
                                yPercent: ja(A.yPercent, D.yPercent),
                                perspective: ja(A.transformPerspective, D.perspective)
                            }, p = A.directionalRotation, null != p)
                            if ("object" == typeof p)
                                for (m in p) A[m] = p[m];
                            else A.rotation = p;
                        "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
                    }
                    for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                    return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
                },
                prefix: !0
            }), ya("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), ya("borderRadius", {
                defaultValue: "0px",
                parser: function(a, b, c, f, g, h) {
                    b = this.format(b);
                    var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        z = a.style;
                    for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                    return g
                },
                prefix: !0,
                formatter: qa("0px 0px 0px 0px", !1, !0)
            }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(a, b, c, d, f, g) {
                    return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                },
                prefix: !0,
                formatter: qa("0px 0px", !1, !0)
            }), ya("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(a, b, c, d, f, g) {
                    var h, i, j, k, l, m, n = "background-position",
                        o = e || $(a, null),
                        q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                        r = this.format(b);
                    if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                        for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                        q = h.join(" ");
                    }
                    return this.parseComplex(a.style, q, r, f, g)
                },
                formatter: ha
            }), ya("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(a) {
                    return a += "", "co" === a.substr(0, 2) ? a : ha(-1 === a.indexOf(" ") ? a + " " + a : a)
                }
            }), ya("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), ya("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), ya("transformStyle", {
                prefix: !0
            }), ya("backfaceVisibility", {
                prefix: !0
            }), ya("userSelect", {
                prefix: !0
            }), ya("margin", {
                parser: ra("marginTop,marginRight,marginBottom,marginLeft")
            }), ya("padding", {
                parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), ya("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(a, b, c, d, f, g) {
                    var h, i, j;
                    return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                }
            }), ya("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), ya("autoRound,strictUnits", {
                parser: function(a, b, c, d, e) {
                    return e
                }
            }), ya("border", {
                defaultValue: "0px solid #000",
                parser: function(a, b, c, d, f, g) {
                    var h = _(a, "borderTopWidth", e, !1, "0px"),
                        i = this.format(b).split(" "),
                        j = i[0].replace(w, "");
                    return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                },
                color: !0,
                formatter: function(a) {
                    var b = a.split(" ");
                    return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
                }
            }), ya("borderWidth", {
                parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), ya("float,cssFloat,styleFloat", {
                parser: function(a, b, c, d, e, f) {
                    var g = a.style,
                        h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                    return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                }
            });
            var Ua = function(a) {
                var b, c = this.t,
                    d = c.filter || _(this.data, "filter") || "",
                    e = this.s + this.c * a | 0;
                100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
            };
            ya("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(a, b, c, d, f, g) {
                    var h = parseFloat(_(a, "opacity", e, !1, "1")),
                        i = a.style,
                        j = "autoAlpha" === c;
                    return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                }
            });
            var Va = function(a, b) {
                    b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
                },
                Wa = function(a) {
                    if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                        this.t.setAttribute("class", 0 === a ? this.b : this.e);
                        for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            ya("className", {
                parser: function(a, b, d, f, g, h, i) {
                    var j, k, l, m, n, o = a.getAttribute("class") || "",
                        p = a.style.cssText;
                    if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
                        for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                        l.setRatio(1)
                    }
                    return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                }
            });
            var Xa = function(a) {
                if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var b, c, d, e, f, g = this.t.style,
                        h = i.transform.parse;
                    if ("all" === this.e) g.cssText = "", e = !0;
                    else
                        for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                    e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (ya("clearProps", {
                    parser: function(a, b, d, e, f) {
                        return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                    }
                }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
            j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
                if (!a.nodeType) return !1;
                this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
                var n, p, s, t, u, v, w, x, z, A = a.style;
                if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                    for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                    x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                }
                if (c) {
                    for (; p;) {
                        for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                        (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                    }
                    this._firstPT = t
                }
                return !0
            }, j.parse = function(a, b, c, f) {
                var g, h, j, l, m, n, o, p, s, t, u = a.style;
                for (g in b) {
                    if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);
                    else {
                        if ("--" === g.substr(0, 2)) {
                            this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                            continue
                        }
                        m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
                    }
                    f && c && !c.plugin && (c.plugin = f)
                }
                return c
            }, j.setRatio = function(a) {
                var b, c, d, e = this._firstPT,
                    f = 1e-6;
                if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; e;) {
                            if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type)
                                if (1 === e.type)
                                    if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                    else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                            else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                            else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                            else {
                                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                e.t[e.p] = c
                            } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                            else e.t[e.p] = b + e.xs0;
                            e = e._next
                        } else
                            for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                    else
                        for (; e;) {
                            if (2 !== e.type)
                                if (e.r && -1 !== e.type)
                                    if (b = e.r(e.s + e.c), e.type) {
                                        if (1 === e.type) {
                                            for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                            e.t[e.p] = c
                                        }
                                    } else e.t[e.p] = b + e.xs0;
                            else e.t[e.p] = e.e;
                            else e.setRatio(a);
                            e = e._next
                        }
            }, j._enableTransforms = function(a) {
                this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
            };
            var Ya = function(a) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            j._addLazySet = function(a, b, c) {
                var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
                d.e = c, d.setRatio = Ya, d.data = this
            }, j._linkCSSP = function(a, b, c, d) {
                return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
            }, j._mod = function(a) {
                for (var b = this._firstPT; b;) "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next
            }, j._kill = function(b) {
                var c, d, e, f = b;
                if (b.autoAlpha || b.alpha) {
                    f = {};
                    for (d in b) f[d] = b[d];
                    f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                }
                for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                return a.prototype._kill.call(this, f)
            };
            var Za = function(a, b, c) {
                var d, e, f, g;
                if (a.slice)
                    for (e = a.length; --e > -1;) Za(a[e], b, c);
                else
                    for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
            };
            return g.cascadeTo = function(a, c, d) {
                var e, f, g, h, i = b.to(a, c, d),
                    j = [i],
                    k = [],
                    l = [],
                    m = [],
                    n = b._internals.reservedProps;
                for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                    if (f = da(m[e], k[e], l[e]), f.firstMPT) {
                        f = f.difs;
                        for (g in d) n[g] && (f[g] = d[g]);
                        h = {};
                        for (g in f) h[g] = k[e][g];
                        j.push(b.fromTo(m[e], c, h, f))
                    } return j
            }, a.activate([g]), g
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b)
    }("CSSPlugin");
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function g() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }
    return function e(l) {
        function C(e, n, o) {
            var t;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    if ("number" == typeof(o = g({
                            path: "/"
                        }, C.defaults, o)).expires) {
                        var r = new Date;
                        r.setMilliseconds(r.getMilliseconds() + 864e5 * o.expires), o.expires = r
                    }
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        t = JSON.stringify(n), /^[\{\[]/.test(t) && (n = t)
                    } catch (e) {}
                    n = l.write ? l.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var i = "";
                    for (var c in o) o[c] && (i += "; " + c, !0 !== o[c] && (i += "=" + o[c]));
                    return document.cookie = e + "=" + n + i
                }
                e || (t = {});
                for (var a = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, s = 0; s < a.length; s++) {
                    var p = a[s].split("="),
                        d = p.slice(1).join("=");
                    '"' === d.charAt(0) && (d = d.slice(1, -1));
                    try {
                        var u = p[0].replace(f, decodeURIComponent);
                        if (d = l.read ? l.read(d, u) : l(d, u) || d.replace(f, decodeURIComponent), this.json) try {
                            d = JSON.parse(d)
                        } catch (e) {}
                        if (e === u) {
                            t = d;
                            break
                        }
                        e || (t[u] = d)
                    } catch (e) {}
                }
                return t
            }
        }
        return (C.set = C).get = function(e) {
            return C.call(C, e)
        }, C.getJSON = function() {
            return C.apply({
                json: !0
            }, [].slice.call(arguments))
        }, C.defaults = {}, C.remove = function(e, n) {
            C(e, "", g(n, {
                expires: -1
            }))
        }, C.withConverter = e, C
    }(function() {})
});
/*!
 * Flickity PACKAGED v2.2.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */
/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */
! function(e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
    "use strict";
    var d = Array.prototype.slice,
        i = t.console,
        u = void 0 === i ? function() {} : function(t) {
            i.error(t)
        };

    function n(h, s, c) {
        (c = c || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
        }), c.fn[h] = function(t) {
            if ("string" != typeof t) return n = t, this.each(function(t, e) {
                var i = c.data(e, h);
                i ? (i.option(n), i._init()) : (i = new s(e, n), c.data(e, h, i))
            }), this;
            var e, o, r, a, l, n, i = d.call(arguments, 1);
            return r = i, l = "$()." + h + '("' + (o = t) + '")', (e = this).each(function(t, e) {
                var i = c.data(e, h);
                if (i) {
                    var n = i[o];
                    if (n && "_" != o.charAt(0)) {
                        var s = n.apply(i, r);
                        a = void 0 === a ? s : a
                    } else u(l + " is not a valid method")
                } else u(h + " not initialized. Cannot call methods, i.e. " + l)
            }), void 0 !== a ? a : e
        }, o(c))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = n)
    }
    return o(e || t.jQuery), n
}),
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var o = i[s];
                n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function m(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    var i = "undefined" == typeof console ? function() {} : function(t) {
            console.error(t)
        },
        y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        b = y.length;

    function E(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }
    var S, C = !1;

    function x(t) {
        if (function() {
                if (!C) {
                    C = !0;
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                    var e = document.body || document.documentElement;
                    e.appendChild(t);
                    var i = E(t);
                    S = 200 == Math.round(m(i.width)), x.isBoxSizeOuter = S, e.removeChild(t)
                }
            }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var e = E(t);
            if ("none" == e.display) return function() {
                for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < b; e++) t[y[e]] = 0;
                return t
            }();
            var i = {};
            i.width = t.offsetWidth, i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < b; s++) {
                var o = y[s],
                    r = e[o],
                    a = parseFloat(r);
                i[o] = isNaN(a) ? 0 : a
            }
            var l = i.paddingLeft + i.paddingRight,
                h = i.paddingTop + i.paddingBottom,
                c = i.marginLeft + i.marginRight,
                d = i.marginTop + i.marginBottom,
                u = i.borderLeftWidth + i.borderRightWidth,
                f = i.borderTopWidth + i.borderBottomWidth,
                p = n && S,
                g = m(e.width);
            !1 !== g && (i.width = g + (p ? 0 : l + u));
            var v = m(e.height);
            return !1 !== v && (i.height = v + (p ? 0 : h + f)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (h + f), i.outerWidth = i.width + c, i.outerHeight = i.height + d, i
        }
    }
    return x
}),
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var i = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function(t, e) {
        return t[i](e)
    }
}),
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */
function(e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(h, o) {
    var c = {
            extend: function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            modulo: function(t, e) {
                return (t % e + e) % e
            }
        },
        e = Array.prototype.slice;
    c.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
    }, c.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, c.getParent = function(t, e) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, o(t, e)) return t
    }, c.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, c.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, c.filterFindElements = function(t, n) {
        t = c.makeArray(t);
        var s = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement)
                if (n) {
                    o(t, n) && s.push(t);
                    for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) s.push(e[i])
                } else s.push(t)
        }), s
    }, c.debounceMethod = function(t, e, n) {
        n = n || 100;
        var s = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
                i = this;
            this[o] = setTimeout(function() {
                s.apply(i, e), delete i[o]
            }, n)
        }
    }, c.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, c.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var d = h.console;
    return c.htmlInit = function(a, l) {
        c.docReady(function() {
            var t = c.toDashed(l),
                s = "data-" + t,
                e = document.querySelectorAll("[" + s + "]"),
                i = document.querySelectorAll(".js-" + t),
                n = c.makeArray(e).concat(c.makeArray(i)),
                o = s + "-options",
                r = h.jQuery;
            n.forEach(function(e) {
                var t, i = e.getAttribute(s) || e.getAttribute(o);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void(d && d.error("Error parsing " + s + " on " + e.className + ": " + t))
                }
                var n = new a(e, t);
                r && r.data(e, l, n)
            })
        })
    }, c
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = i(e, e.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t, this.parent = e, this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
    }, n.destroy = function() {
        this.unselect(), this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }, n.getSize = function() {
        this.size = e(this.element)
    }, n.setPosition = function(t) {
        this.x = t, this.updateTarget(), this.renderPosition(t)
    }, n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }, n.select = function() {
        this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
    }, n.unselect = function() {
        this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
    }, n.wrapShift = function(t) {
        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
    }, n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}(window, function() {
    "use strict";

    function t(t) {
        this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }, e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
            e = this.getLastCell(),
            i = e ? e.size[t] : 0,
            n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }, e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, e.select = function() {
        this.cells.forEach(function(t) {
            t.select()
        })
    }, e.unselect = function() {
        this.cells.forEach(function(t) {
            t.unselect()
        })
    }, e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }, t
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = i(e, e.fizzyUIUtils))
}(window, function(t, e) {
    var i = {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        },
        animate: function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                requestAnimationFrame(function() {
                    e.animate()
                })
            }
        },
        positionSlider: function() {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
        },
        setTranslateX: function(t, e) {
            t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
            var i = this.getPositionValue(t);
            this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
        },
        dispatchScrollEvent: function() {
            var t = this.slides[0];
            if (t) {
                var e = -this.x - t.target,
                    i = e / this.slidesWidth;
                this.dispatchEvent("scroll", null, [i, e])
            }
        },
        positionSliderAtSelected: function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        },
        getPositionValue: function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        },
        settle: function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        },
        shiftWrapCells: function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        },
        _shiftCells: function(t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    o = 0 < e ? i : 0;
                s.wrapShift(o), e -= s.size.outerWidth
            }
        },
        _unshiftCells: function(t) {
            if (t && t.length)
                for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
        },
        integratePhysics: function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        },
        applyForce: function(t) {
            this.velocity += t
        },
        getFrictionFactor: function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        },
        getRestingPosition: function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        },
        applyDragForce: function() {
            if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x - this.velocity;
                this.applyForce(t)
            }
        },
        applySelectedAttraction: function() {
            if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(t)
            }
        }
    };
    return i
}),
function(r, a) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(t, e, i, n, s, o) {
        return a(r, t, e, i, n, s, o)
    });
    else if ("object" == typeof module && module.exports) module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var t = r.Flickity;
        r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype)
    }
}(window, function(n, t, e, a, i, r, s) {
    var l = n.jQuery,
        o = n.getComputedStyle,
        h = n.console;

    function c(t, e) {
        for (t = a.makeArray(t); t.length;) e.appendChild(t.shift())
    }
    var d = 0,
        u = {};

    function f(t, e) {
        var i = a.getQueryElement(t);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                var n = u[this.element.flickityGUID];
                return n.option(e), n
            }
            l && (this.$element = l(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(e), this._create()
        } else h && h.error("Bad element for Flickity: " + (i || t))
    }
    f.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, f.createMethods = [];
    var p = f.prototype;
    a.extend(p, t.prototype), p._create = function() {
        var t = this.guid = ++d;
        for (var e in this.element.flickityGUID = t, (u[t] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), this.options.on) {
            var i = this.options.on[e];
            this.on(e, i)
        }
        f.createMethods.forEach(function(t) {
            this[t]()
        }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
    }, p.option = function(t) {
        a.extend(this.options, t)
    }, p.activate = function() {
        this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
    }, p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
    }, p._filterFindCellElements = function(t) {
        return a.filterFindElements(t, this.options.cellSelector)
    }, p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, p._makeCells = function(t) {
        return this._filterFindCellElements(t).map(function(t) {
            return new i(t, this)
        }, this)
    }, p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }, p.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0)
    }, p._positionCells = function(t) {
        t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
        var e = 0;
        if (0 < t) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
            var o = this.cells[s];
            o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }, p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    }, p.updateSlides = function() {
        if (this.slides = [], this.cells.length) {
            var n = new r(this);
            this.slides.push(n);
            var s = "left" == this.originSide ? "marginRight" : "marginLeft",
                o = this._getCanCellFit();
            this.cells.forEach(function(t, e) {
                if (n.cells.length) {
                    var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
                    o.call(this, e, i) || (n.updateTarget(), n = new r(this), this.slides.push(n)), n.addCell(t)
                } else n.addCell(t)
            }, this), n.updateTarget(), this.updateSelectedSlide()
        }
    }, p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t) return function() {
            return !1
        };
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
            n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    }, p._init = p.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected()
    }, p.getSize = function() {
        this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var g = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }, p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition,
                e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }, p._getGapCells = function(t, e, i) {
        for (var n = []; 0 < t;) {
            var s = this.cells[e];
            if (!s) break;
            n.push(s), e += i, t -= s.size.outerWidth
        }
        return n
    }, p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft,
                e = t ? "marginRight" : "marginLeft",
                i = t ? "marginLeft" : "marginRight",
                n = this.slideableWidth - this.getLastCell().size[i],
                s = n < this.size.innerWidth,
                o = this.cursorPosition + this.cells[0].size[e],
                r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) {
                t.target = s ? n * this.cellAlign : (t.target = Math.max(t.target, o), Math.min(t.target, r))
            }, this)
        }
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l && this.$element) {
            var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (e) {
                var o = l.Event(e);
                o.type = t, s = o
            }
            this.$element.trigger(s, i)
        }
    }, p.select = function(t, e, i) {
        if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)), this.slides[t])) {
            var n = this.selectedIndex;
            this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != n && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
        }
    }, p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = a.modulo(t, e),
            n = Math.abs(i - this.selectedIndex),
            s = Math.abs(i + e - this.selectedIndex),
            o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n ? t += e : !this.isDragSelect && o < n && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
    }, p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }, p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }, p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
    }, p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }, p.selectInitialIndex = function() {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
            if (t && "string" == typeof t)
                if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
            var e = 0;
            t && this.slides[t] && (e = t), this.select(e, !1, !0)
        }
    }, p.selectCell = function(t, e, i) {
        var n = this.queryCell(t);
        if (n) {
            var s = this.getCellSlideIndex(n);
            this.select(s, e, i)
        }
    }, p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++) {
            if (-1 != this.slides[e].cells.indexOf(t)) return e
        }
    }, p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t) return i
        }
    }, p.getCells = function(t) {
        t = a.makeArray(t);
        var i = [];
        return t.forEach(function(t) {
            var e = this.getCell(t);
            e && i.push(e)
        }, this), i
    }, p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }, p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e || (t = a.getParent(t, ".flickity-slider > *"), this.getCell(t))
    }, p.getAdjacentCellElements = function(t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
            var o = this.options.wrapAround ? a.modulo(s, i) : s,
                r = this.slides[o];
            r && (n = n.concat(r.getCellElements()))
        }
        return n
    }, p.queryCell = function(t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
            if (t.match(/^[#\.]?[\d\/]/)) return;
            t = this.element.querySelector(t)
        }
        return this.getCell(t)
    }, p.uiChange = function() {
        this.emitEvent("uiChange")
    }, p.childUIPointerDown = function(t) {
        "touchstart" != t.type && t.preventDefault(), this.focus()
    }, p.onresize = function() {
        this.watchCSS(), this.resize()
    }, a.debounceMethod(f, "onresize", 150), p.resize = function() {
        if (this.isActive) {
            this.getSize(), this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }, p.watchCSS = function() {
        this.options.watchCSS && (-1 != o(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }, p.onkeydown = function(t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
            var i = f.keyboardHandlers[t.keyCode];
            i && i.call(this)
        }
    }, f.keyboardHandlers = {
        37: function() {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[t]()
        },
        39: function() {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[t]()
        }
    }, p.focus = function() {
        var t = n.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }), n.pageYOffset != t && n.scrollTo(n.pageXOffset, t)
    }, p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
            t.destroy()
        }), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    }, p.destroy = function() {
        this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), l && this.$element && l.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid]
    }, a.extend(p, s), f.data = function(t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && u[e]
    }, a.htmlInit(f, "flickity"), l && l.bridget && l.bridget("flickity", f), f.setJQuery = function(t) {
        l = t
    }, f.Cell = i, f.Slide = r, f
}),
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
function(e, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter)
}(window, function(s, t) {
    function e() {}
    var i = e.prototype = Object.create(t.prototype);
    i.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }, i.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }, i._bindStartEvent = function(t, e) {
        var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener",
            n = "mousedown";
        s.PointerEvent ? n = "pointerdown" : "ontouchstart" in s && (n = "touchstart"), t[i](n, this)
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier) return i
        }
    }, i.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, i.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }, i.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }, i._pointerDown = function(t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    }, i.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    };
    var n = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return i._bindPostStartEvents = function(t) {
        if (t) {
            var e = n[t.type];
            e.forEach(function(t) {
                s.addEventListener(t, this)
            }, this), this._boundPointerEvents = e
        }
    }, i._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
            s.removeEventListener(t, this)
        }, this), delete this._boundPointerEvents)
    }, i.onmousemove = function(t) {
        this._pointerMove(t, t)
    }, i.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, i.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, i._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }, i.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }, i.onmouseup = function(t) {
        this._pointerUp(t, t)
    }, i.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, i.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, i._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e)
    }, i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }, i._pointerDone = function() {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
    }, i._pointerReset = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier
    }, i.pointerDone = function() {}, i.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, i.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, i._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e)
    }, i.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }, e.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }, e
}),
/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */
function(e, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer)
}(window, function(o, t) {
    function e() {}
    var i = e.prototype = Object.create(t.prototype);
    i.bindHandles = function() {
        this._bindHandles(!0)
    }, i.unbindHandles = function() {
        this._bindHandles(!1)
    }, i._bindHandles = function(t) {
        for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
            var s = this.handles[n];
            this._bindStartEvent(s, t), s[e]("click", this), o.PointerEvent && (s.style.touchAction = i)
        }
    }, i._touchActionValue = "none", i.pointerDown = function(t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
    };
    var s = {
            TEXTAREA: !0,
            INPUT: !0,
            SELECT: !0,
            OPTION: !0
        },
        r = {
            radio: !0,
            checkbox: !0,
            button: !0,
            submit: !0,
            image: !0,
            file: !0
        };
    return i.okayPointerDown = function(t) {
        var e = s[t.target.nodeName],
            i = r[t.target.type],
            n = !e || i;
        return n || this._pointerReset(), n
    }, i.pointerDownBlur = function() {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur()
    }, i.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
    }, i._dragPointerMove = function(t, e) {
        var i = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
    }, i.hasDragStarted = function(t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
    }, i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
    }, i._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, i._dragStart = function(t, e) {
        this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
    }, i.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }, i._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }, i.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
    }, i._dragEnd = function(t, e) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks
        }.bind(this)), this.dragEnd(t, e)
    }, i.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }, i.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }, i._staticClick = function(t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
            delete this.isIgnoringMouseUp
        }.bind(this), 400)))
    }, i.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }, e.getPointerPoint = t.getPointerPoint, e
}),
function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils)
}(window, function(i, t, e, a) {
    a.extend(t.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }), t.createMethods.push("_createDrag");
    var n = t.prototype;
    a.extend(n, e.prototype), n._touchActionValue = "pan-y";
    var s = "createTouch" in document,
        o = !1;
    n._createDrag = function() {
        this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !o && (i.addEventListener("touchmove", function() {}), o = !0)
    }, n.onActivateDrag = function() {
        this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
    }, n.onDeactivateDrag = function() {
        this.unbindHandles(), this.element.classList.remove("is-draggable")
    }, n.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    }, n.bindDrag = function() {
        this.options.draggable = !0, this.updateDraggable()
    }, n.unbindDrag = function() {
        this.options.draggable = !1, this.updateDraggable()
    }, n._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }, n.pointerDown = function(t, e) {
        this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e)
    }, n._pointerDownDefault = function(t, e) {
        this.pointerDownPointer = {
            pageX: e.pageX,
            pageY: e.pageY
        }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
    };
    var r = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };

    function l() {
        return {
            x: i.pageXOffset,
            y: i.pageYOffset
        }
    }
    return n.pointerDownFocus = function(t) {
        r[t.target.nodeName] || this.focus()
    }, n._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type,
            i = "touch" == t.pointerType,
            n = r[t.target.nodeName];
        e || i || n || t.preventDefault()
    }, n.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }, n.pointerUp = function(t, e) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
    }, n.pointerDone = function() {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll
    }, n.dragStart = function(t, e) {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e]))
    }, n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
    }, n.dragMove = function(t, e, i) {
        if (this.isDraggable) {
            t.preventDefault(), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var s = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                s = o < s ? .5 * (s + o) : s;
                var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                s = s < r ? .5 * (s + r) : s
            }
            this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
        }
    }, n.dragEnd = function(t, e) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
        }
    }, n.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(),
            e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
            i = this._getClosestResting(t, e, 1),
            n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index
    }, n._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
                return t <= e
            } : function(t, e) {
                return t < e
            }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
        return {
            distance: s,
            index: n - i
        }
    }, n.getSlideDistance = function(t, e) {
        var i = this.slides.length,
            n = this.options.wrapAround && 1 < i,
            s = n ? a.modulo(e, i) : e,
            o = this.slides[s];
        if (!o) return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + r)
    }, n.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
            e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
    }, n.staticClick = function(t, e) {
        var i = this.getParentCell(t.target),
            n = i && i.element,
            s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s])
    }, n.onscroll = function() {
        var t = l(),
            e = this.pointerDownScroll.x - t.x,
            i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone()
    }, t
}),
function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function(t, e, i, n) {
    "use strict";
    var s = "http://www.w3.org/2000/svg";

    function o(t, e) {
        this.direction = t, this.parent = e, this._create()
    }(o.prototype = Object.create(i.prototype))._create = function() {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, o.prototype.activate = function() {
        this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
    }, o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
    }, o.prototype.createSVG = function() {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
        var e, i = document.createElementNS(s, "path"),
            n = "string" != typeof(e = this.parent.options.arrowShape) ? "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z" : e;
        return i.setAttribute("d", n), i.setAttribute("class", "arrow"), this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(i), t
    }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }, o.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, o.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, o.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length) this.enable();
        else {
            var e = t.length ? t.length - 1 : 0,
                i = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]()
        }
    }, o.prototype.destroy = function() {
        this.deactivate(), this.allOff()
    }, n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }), e.createMethods.push("_createPrevNextButtons");
    var r = e.prototype;
    return r._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
    }, r.activatePrevNextButtons = function() {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, r.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, e.PrevNextButton = o, e
}),
function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function s(t) {
        this.parent = t, this._create()
    }(s.prototype = Object.create(i.prototype))._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, s.prototype.activate = function() {
        this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
    }, s.prototype.deactivate = function() {
        this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
    }, s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }, s.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
            var r = document.createElement("li");
            r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r)
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i)
    }, s.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    }, s.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
    }, s.prototype.onTap = s.prototype.onClick = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    }, s.prototype.destroy = function() {
        this.deactivate(), this.allOff()
    }, e.PageDots = s, n.extend(e.defaults, {
        pageDots: !0
    }), e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return o._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    }, o.activatePageDots = function() {
        this.pageDots.activate()
    }, o.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }, o.updatePageDots = function() {
        this.pageDots.setDots()
    }, o.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }, e.PageDots = s, e
}),
function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, e, i) {
        return n(t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }(n.prototype = Object.create(t.prototype)).play = function() {
        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
    }, n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(), this.timeout = setTimeout(function() {
                e.parent.next(!0), e.tick()
            }, t)
        }
    }, n.prototype.stop = function() {
        this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }, n.prototype.clear = function() {
        clearTimeout(this.timeout)
    }, n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear())
    }, n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }, n.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]()
    }, n.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }, e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }), i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return s._createPlayer = function() {
        this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, s.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    }, s.playPlayer = function() {
        this.player.play()
    }, s.stopPlayer = function() {
        this.player.stop()
    }, s.pausePlayer = function() {
        this.player.pause()
    }, s.unpausePlayer = function() {
        this.player.unpause()
    }, s.deactivatePlayer = function() {
        this.player.stop(), this.element.removeEventListener("mouseenter", this)
    }, s.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    }, s.onmouseleave = function() {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this)
    }, i.Player = n, i
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(t, e, n) {
    var i = e.prototype;
    return i.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var n = this.cells.length;
            e = void 0 === e ? n : e;
            var s, o, r = (s = i, o = document.createDocumentFragment(), s.forEach(function(t) {
                    o.appendChild(t.element)
                }), o),
                a = e == n;
            if (a) this.slider.appendChild(r);
            else {
                var l = this.cells[e].element;
                this.slider.insertBefore(r, l)
            }
            if (0 === e) this.cells = i.concat(this.cells);
            else if (a) this.cells = this.cells.concat(i);
            else {
                var h = this.cells.splice(e, n - e);
                this.cells = this.cells.concat(i).concat(h)
            }
            this._sizeCells(i), this.cellChange(e, !0)
        }
    }, i.append = function(t) {
        this.insert(t, this.cells.length)
    }, i.prepend = function(t) {
        this.insert(t, 0)
    }, i.remove = function(t) {
        var e = this.getCells(t);
        if (e && e.length) {
            var i = this.cells.length - 1;
            e.forEach(function(t) {
                t.remove();
                var e = this.cells.indexOf(t);
                i = Math.min(e, i), n.removeFrom(this.cells, t)
            }, this), this.cellChange(i, !0)
        }
    }, i.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }, i.cellChange = function(t, e) {
        var i = this.selectedElement;
        this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
    }, e
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(t, e, o) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;

    function s(t, e) {
        this.img = t, this.flickity = e, this.load()
    }
    return i._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }, i.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0,
                i = this.getAdjacentCellElements(e),
                n = [];
            i.forEach(function(t) {
                var e = function(t) {
                    if ("IMG" == t.nodeName) {
                        var e = t.getAttribute("data-flickity-lazyload"),
                            i = t.getAttribute("data-flickity-lazyload-src"),
                            n = t.getAttribute("data-flickity-lazyload-srcset");
                        if (e || i || n) return [t]
                    }
                    var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                    return o.makeArray(s)
                }(t);
                n = n.concat(e)
            }), n.forEach(function(t) {
                new s(t, this)
            }, this)
        }
    }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
            e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
    }, s.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }, s.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }, s.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
            n = i && i.element;
        this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
    }, e.LazyLoader = s, e
}),
/*!
 * Flickity v2.2.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
    return t
}),
/*!
 * Flickity asNavFor v2.0.1
 * enable asNavFor for Flickity
 */
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(n, s) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return t._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t)
            })
        }
    }, t.setNavCompanion = function(t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
            this.navCompanion = e;
            var i = this;
            this.onNavCompanionSelect = function() {
                i.navCompanionSelect()
            }, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
        }
    }, t.navCompanionSelect = function(t) {
        if (this.navCompanion) {
            var e, i, n, s = this.navCompanion.selectedCells[0],
                o = this.navCompanion.cells.indexOf(s),
                r = o + this.navCompanion.selectedCells.length - 1,
                a = Math.floor((e = o, i = r, n = this.navCompanion.cellAlign, (i - e) * n + e));
            if (this.selectCell(a, !1, t), this.removeNavSelectedElements(), !(a >= this.cells.length)) {
                var l = this.cells.slice(o, r + 1);
                this.navSelectedElements = l.map(function(t) {
                    return t.element
                }), this.changeNavSelectedClass("add")
            }
        }
    }, t.changeNavSelectedClass = function(e) {
        this.navSelectedElements.forEach(function(t) {
            t.classList[e]("is-nav-selected")
        })
    }, t.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }, t.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
    }, t.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }, t.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }, t.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, n
}),
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    var o = e.jQuery,
        r = e.console;

    function a(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }
    var l = Array.prototype.slice;

    function h(t, e, i) {
        if (!(this instanceof h)) return new h(t, e, i);
        var n, s = t;
        ("string" == typeof t && (s = document.querySelectorAll(t)), s) ? (this.elements = (n = s, Array.isArray(n) ? n : "object" == typeof n && "number" == typeof n.length ? l.call(n) : [n]), this.options = a({}, this.options), "function" == typeof e ? i = e : a(this.options, e), i && this.on("always", i), this.getImages(), o && (this.jqDeferred = new o.Deferred), setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (s || t))
    }(h.prototype = Object.create(t.prototype)).options = {}, h.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, h.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var c = {
        1: !0,
        9: !0,
        11: !0
    };

    function i(t) {
        this.img = t
    }

    function n(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    return h.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var s = n && n[2];
                s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
            }
    }, h.prototype.addImage = function(t) {
        var e = new i(t);
        this.images.push(e)
    }, h.prototype.addBackground = function(t, e) {
        var i = new n(t, e);
        this.images.push(i)
    }, h.prototype.check = function() {
        var n = this;

        function e(t, e, i) {
            setTimeout(function() {
                n.progress(t, e, i)
            })
        }
        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : this.complete()
    }, h.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
    }, h.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, (i.prototype = Object.create(t.prototype)).check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    }, i.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, i.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, i.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (n.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, n.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, h.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((o = t).fn.imagesLoaded = function(t, e) {
            return new h(this, t, e).jqDeferred.promise(o(this))
        })
    }, h.makeJQueryPlugin(), h
}),
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
function(i, n) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded)
}(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }, n.imagesLoaded = function() {
        if (this.options.imagesLoaded) {
            var n = this;
            i(this.slider).on("progress", function(t, e) {
                var i = n.getParentCell(e.img);
                n.cellSizeChange(i && i.element), n.options.freeScroll || n.positionSliderAtSelected()
            })
        }
    }, e
});
/*!
 * Flickity fullscreen v1.1.1
 * Enable fullscreen view for Flickity
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define(["flickity/js/index"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity")) : t(e.Flickity)
}(window, function(e) {
    "use strict";
    e.createMethods.push("_createFullscreen");
    var t = e.prototype;
    t._createFullscreen = function() {
        this.isFullscreen = !1, this.options.fullscreen && (this.viewFullscreenButton = new n("view", this), this.exitFullscreenButton = new n("exit", this), this.on("activate", this._changeFullscreenActive), this.on("deactivate", this._changeFullscreenActive))
    }, t._changeFullscreenActive = function() {
        var e = this.isActive ? "appendChild" : "removeChild";
        this.element[e](this.viewFullscreenButton.element), this.element[e](this.exitFullscreenButton.element);
        var t = this.isActive ? "activate" : "deactivate";
        this.viewFullscreenButton[t](), this.exitFullscreenButton[t]()
    }, t.viewFullscreen = function() {
        this._changeFullscreen(!0), this.focus()
    }, t.exitFullscreen = function() {
        this._changeFullscreen(!1)
    }, t._changeFullscreen = function(e) {
        if (this.isFullscreen != e) {
            var t = (this.isFullscreen = e) ? "add" : "remove";
            document.documentElement.classList[t]("is-flickity-fullscreen"), this.element.classList[t]("is-fullscreen"), this.resize(), this.isFullscreen && this.reposition(), this.dispatchEvent("fullscreenChange", null, [e])
        }
    }, t.toggleFullscreen = function() {
        this._changeFullscreen(!this.isFullscreen)
    };
    var i = t.setGallerySize;

    function n(e, t) {
        this.name = e, this.createButton(), this.createIcon(), this.onClick = function() {
            t[e + "Fullscreen"]()
        }, this.clickHandler = this.onClick.bind(this)
    }
    t.setGallerySize = function() {
        this.options.setGallerySize && (this.isFullscreen ? this.viewport.style.height = "" : i.call(this))
    }, e.keyboardHandlers[27] = function() {
        this.exitFullscreen()
    }, n.prototype.createButton = function() {
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-fullscreen-button flickity-fullscreen-button-" + this.name, e.setAttribute("type", "button");
        var t, i = (t = this.name + " full-screen")[0].toUpperCase() + t.slice(1);
        e.setAttribute("aria-label", i), e.title = i
    };
    var s = "http://www.w3.org/2000/svg",
        l = {
            view: "M15,20,7,28h5v4H0V20H4v5l8-8Zm5-5,8-8v5h4V0H20V4h5l-8,8Z",
            exit: "M32,3l-7,7h5v4H18V2h4V7l7-7ZM3,32l7-7v5h4V18H2v4H7L0,29Z"
        };
    return n.prototype.createIcon = function() {
        var e = document.createElementNS(s, "svg");
        e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 32 32");
        var t = document.createElementNS(s, "path"),
            i = l[this.name];
        t.setAttribute("d", i), e.appendChild(t), this.element.appendChild(e)
    }, n.prototype.activate = function() {
        this.element.addEventListener("click", this.clickHandler)
    }, n.prototype.deactivate = function() {
        this.element.removeEventListener("click", this.clickHandler)
    }, e.FullscreenButton = n, e
});

! function(e, t) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils)
}(this, function(e, h) {
    var t = e.Slide,
        a = t.prototype.updateTarget;
    t.prototype.updateTarget = function() {
        if (a.apply(this, arguments), this.parent.options.fade) {
            var i = this.target - this.x,
                s = this.cells[0].x;
            this.cells.forEach(function(e) {
                var t = e.x - s - i;
                e.renderPosition(t)
            })
        }
    }, t.prototype.setOpacity = function(t) {
        this.cells.forEach(function(e) {
            e.element.style.opacity = t
        })
    };
    var i = e.prototype;
    e.createMethods.push("_createFade"), i._createFade = function() {
        this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
    };
    var s = i.updateSlides;
    i.updateSlides = function() {
        s.apply(this, arguments), this.options.fade && this.slides.forEach(function(e, t) {
            var i = t == this.selectedIndex ? 1 : 0;
            e.setOpacity(i)
        }, this)
    }, i.onSelectFade = function() {
        this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
    }, i.onSettleFade = function() {
        (delete this.didDragEnd, this.options.fade) && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
    }, i.onDragEndFade = function() {
        this.didDragEnd = !0
    }, i.onActivateFade = function() {
        this.options.fade && this.element.classList.add("is-fade")
    }, i.onDeactivateFade = function() {
        this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function(e) {
            e.setOpacity("")
        }))
    };
    var n = i.positionSlider;
    i.positionSlider = function() {
        this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : n.apply(this, arguments)
    };
    var d = i.positionSliderAtSelected;
    i.positionSliderAtSelected = function() {
        this.options.fade && this.setTranslateX(0), d.apply(this, arguments)
    }, i.fadeSlides = function() {
        if (!(this.slides.length < 2)) {
            var e = this.getFadeIndexes(),
                t = this.slides[e.a],
                i = this.slides[e.b],
                s = this.wrapDifference(t.target, i.target),
                a = this.wrapDifference(t.target, -this.x);
            a /= s, t.setOpacity(1 - a), i.setOpacity(a);
            var n = e.a;
            this.isDragging && (n = .5 < a ? e.a : e.b), null != this.fadeHideIndex && this.fadeHideIndex != n && this.fadeHideIndex != e.a && this.fadeHideIndex != e.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = n
        }
    }, i.getFadeIndexes = function() {
        return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
            a: this.fadeIndex,
            b: this.selectedIndex
        }
    }, i.getFadeDragWrapIndexes = function() {
        var e = this.slides.map(function(e, t) {
                return this.getSlideDistance(-this.x, t)
            }, this),
            t = e.map(function(e) {
                return Math.abs(e)
            }),
            i = Math.min.apply(Math, t),
            s = t.indexOf(i),
            a = e[s],
            n = this.slides.length,
            d = 0 <= a ? 1 : -1;
        return {
            a: s,
            b: h.modulo(s + d, n)
        }
    }, i.getFadeDragLimitIndexes = function() {
        for (var e = 0, t = 0; t < this.slides.length - 1; t++) {
            var i = this.slides[t];
            if (-this.x < i.target) break;
            e = t
        }
        return {
            a: e,
            b: e + 1
        }
    }, i.wrapDifference = function(e, t) {
        var i = t - e;
        if (!this.options.wrapAround) return i;
        var s = i + this.slideableWidth,
            a = i - this.slideableWidth;
        return Math.abs(s) < Math.abs(i) && (i = s), Math.abs(a) < Math.abs(i) && (i = a), i
    };
    var o = i._getWrapShiftCells;
    i._getWrapShiftCells = function() {
        this.options.fade || o.apply(this, arguments)
    };
    var r = i.shiftWrapCells;
    return i.shiftWrapCells = function() {
        this.options.fade || r.apply(this, arguments)
    }, e
});
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
}(function(a) {
    "use strict";
    var o, r, u = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        },
        s = 0,
        f = function(e) {
            o = e.pageX, r = e.pageY
        },
        d = function(e, t, n, i) {
            if (Math.sqrt((n.pX - o) * (n.pX - o) + (n.pY - r) * (n.pY - r)) < i.sensitivity) return t.off(n.event, f), delete n.timeoutId, n.isActive = !0, e.pageX = o, e.pageY = r, delete n.pX, delete n.pY, i.over.apply(t[0], [e]);
            n.pX = o, n.pY = r, n.timeoutId = setTimeout(function() {
                d(e, t, n, i)
            }, i.interval)
        };
    a.fn.hoverIntent = function(e, t, n) {
        var i = s++,
            v = a.extend({}, u);
        a.isPlainObject(e) ? (v = a.extend(v, e), a.isFunction(v.out) || (v.out = v.over)) : v = a.isFunction(t) ? a.extend(v, {
            over: e,
            out: t,
            selector: n
        }) : a.extend(v, {
            over: e,
            out: e,
            selector: t
        });
        var o = function(e) {
            var o = a.extend({}, e),
                r = a(this),
                t = r.data("hoverIntent");
            t || r.data("hoverIntent", t = {});
            var u = t[i];
            u || (t[i] = u = {
                id: i
            }), u.timeoutId && (u.timeoutId = clearTimeout(u.timeoutId));
            var n = u.event = "mousemove.hoverIntent.hoverIntent" + i;
            if ("mouseenter" === e.type) {
                if (u.isActive) return;
                u.pX = o.pageX, u.pY = o.pageY, r.off(n, f).on(n, f), u.timeoutId = setTimeout(function() {
                    d(o, r, u, v)
                }, v.interval)
            } else {
                if (!u.isActive) return;
                r.off(n, f), u.timeoutId = setTimeout(function() {
                    var e, t, n, i;
                    e = o, t = r, n = u, i = v.out, delete t.data("hoverIntent")[n.id], i.apply(t[0], [e])
                }, v.timeout)
            }
        };
        return this.on({
            "mouseenter.hoverIntent": o,
            "mouseleave.hoverIntent": o
        }, v.selector)
    }
});
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
    "use strict";

    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        s = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) s.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, s, o = this.getListenersAsObject(e);
        for (r in o)
            if (o.hasOwnProperty(r))
                for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var s = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
    }(this),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" == f.call(e)
        }

        function s(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0; n < e.length; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function o(e, t, n) {
            if (!(this instanceof o)) return new o(e, t, n);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function h(e) {
            this.img = e
        }

        function a(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var u = e.jQuery,
            c = e.console,
            f = Object.prototype.toString;
        o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [];
            for (var e = 0; e < this.elements.length; e++) {
                var t = this.elements[e];
                this.addElementImages(t)
            }
        }, o.prototype.addElementImages = function(e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && d[t]) {
                for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var s = e.querySelectorAll(this.options.background);
                    for (i = 0; i < s.length; i++) {
                        var o = s[i];
                        this.addElementBackgroundImages(o)
                    }
                }
            }
        };
        var d = {
            1: !0,
            9: !0,
            11: !0
        };
        o.prototype.addElementBackgroundImages = function(e) {
            for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var r = i && i[1];
                r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
            }
        };
        var m = e.getComputedStyle || function(e) {
            return e.currentStyle
        };
        return o.prototype.addImage = function(e) {
            var t = new h(e);
            this.images.push(t)
        }, o.prototype.addBackground = function(e, t) {
            var n = new a(e, t);
            this.images.push(n)
        }, o.prototype.check = function() {
            function e(e, n, i) {
                setTimeout(function() {
                    t.progress(e, n, i)
                })
            }
            var t = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (var n = 0; n < this.images.length; n++) {
                var i = this.images[n];
                i.once("progress", e), i.check()
            }
        }, o.prototype.progress = function(e, t, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
        }, o.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, h.prototype = new t, h.prototype.check = function() {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
        }, h.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, h.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("progress", this, this.img, t)
        }, h.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, h.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, h.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, h.prototype.unbindEvents = function() {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype = new h, a.prototype.check = function() {
            n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function() {
            n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("progress", this, this.element, t)
        }, o.makeJQueryPlugin = function(t) {
            t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function(e, t) {
                var n = new o(this, e, t);
                return n.jqDeferred.promise(u(this))
            })
        }, o.makeJQueryPlugin(), o
    });
/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {}

        function d() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function e(c) {
            function e() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = c("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var g = document.body || document.documentElement;
                        g.appendChild(e);
                        var h = j(e);
                        l = 200 === b(h.width), g.removeChild(e)
                    }
                }
            }

            function h(a) {
                if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var c = j(a);
                    if ("none" === c.display) return d();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                        var o = g[m],
                            p = c[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = h && l,
                        y = b(c.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = b(c.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return h
        }
        var f = "undefined" == typeof console ? c : function(a) {
                console.error(a)
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            } [k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    });

! function(d, _) {
    "use strict";
    if ("IntersectionObserver" in d && "IntersectionObserverEntry" in d && "intersectionRatio" in d.IntersectionObserverEntry.prototype) "isIntersecting" in d.IntersectionObserverEntry.prototype || Object.defineProperty(d.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
            return 0 < this.intersectionRatio
        }
    });
    else {
        var e = [];
        t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function(e) {
            if (!this._observationTargets.some(function(t) {
                    return t.element == e
                })) {
                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                this._registerInstance(), this._observationTargets.push({
                    element: e,
                    entry: null
                }), this._monitorIntersections(), this._checkForIntersections()
            }
        }, t.prototype.unobserve = function(e) {
            this._observationTargets = this._observationTargets.filter(function(t) {
                return t.element != e
            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, t.prototype.disconnect = function() {
            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, t.prototype.takeRecords = function() {
            var t = this._queuedEntries.slice();
            return this._queuedEntries = [], t
        }, t.prototype._initThresholds = function(t) {
            var e = t || [0];
            return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) {
                if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");
                return t !== n[e - 1]
            })
        }, t.prototype._parseRootMargin = function(t) {
            var e = (t || "0px").split(/\s+/).map(function(t) {
                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                return {
                    value: parseFloat(e[1]),
                    unit: e[2]
                }
            });
            return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
        }, t.prototype._monitorIntersections = function() {
            this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(d, "resize", this._checkForIntersections, !0), n(_, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in d && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(_, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }))))
        }, t.prototype._unmonitorIntersections = function() {
            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(d, "resize", this._checkForIntersections, !0), o(_, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, t.prototype._checkForIntersections = function() {
            var h = this._rootIsInDom(),
                c = h ? this._getRootRect() : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            this._observationTargets.forEach(function(t) {
                var e = t.element,
                    n = m(e),
                    o = this._rootContainsTarget(e),
                    i = t.entry,
                    r = h && o && this._computeTargetAndRootIntersection(e, c),
                    s = t.entry = new a({
                        time: d.performance && performance.now && performance.now(),
                        target: e,
                        boundingClientRect: n,
                        rootBounds: c,
                        intersectionRect: r
                    });
                i ? h && o ? this._hasCrossedThreshold(i, s) && this._queuedEntries.push(s) : i && i.isIntersecting && this._queuedEntries.push(s) : this._queuedEntries.push(s)
            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, t.prototype._computeTargetAndRootIntersection = function(t, e) {
            if ("none" != d.getComputedStyle(t).display) {
                for (var n, o, i, r, s, h, c, a, u = m(t), l = v(t), p = !1; !p;) {
                    var f = null,
                        g = 1 == l.nodeType ? d.getComputedStyle(l) : {};
                    if ("none" == g.display) return;
                    if (l == this.root || l == _ ? (p = !0, f = e) : l != _.body && l != _.documentElement && "visible" != g.overflow && (f = m(l)), f && (n = f, o = u, void 0, i = Math.max(n.top, o.top), r = Math.min(n.bottom, o.bottom), s = Math.max(n.left, o.left), h = Math.min(n.right, o.right), a = r - i, !(u = 0 <= (c = h - s) && 0 <= a && {
                            top: i,
                            bottom: r,
                            left: s,
                            right: h,
                            width: c,
                            height: a
                        }))) break;
                    l = v(l)
                }
                return u
            }
        }, t.prototype._getRootRect = function() {
            var t;
            if (this.root) t = m(this.root);
            else {
                var e = _.documentElement,
                    n = _.body;
                t = {
                    top: 0,
                    left: 0,
                    right: e.clientWidth || n.clientWidth,
                    width: e.clientWidth || n.clientWidth,
                    bottom: e.clientHeight || n.clientHeight,
                    height: e.clientHeight || n.clientHeight
                }
            }
            return this._expandRectByRootMargin(t)
        }, t.prototype._expandRectByRootMargin = function(n) {
            var t = this._rootMarginValues.map(function(t, e) {
                    return "px" == t.unit ? t.value : t.value * (e % 2 ? n.width : n.height) / 100
                }),
                e = {
                    top: n.top - t[0],
                    right: n.right + t[1],
                    bottom: n.bottom + t[2],
                    left: n.left - t[3]
                };
            return e.width = e.right - e.left, e.height = e.bottom - e.top, e
        }, t.prototype._hasCrossedThreshold = function(t, e) {
            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (n !== o)
                for (var i = 0; i < this.thresholds.length; i++) {
                    var r = this.thresholds[i];
                    if (r == n || r == o || r < n != r < o) return !0
                }
        }, t.prototype._rootIsInDom = function() {
            return !this.root || i(_, this.root)
        }, t.prototype._rootContainsTarget = function(t) {
            return i(this.root || _, t)
        }, t.prototype._registerInstance = function() {
            e.indexOf(this) < 0 && e.push(this)
        }, t.prototype._unregisterInstance = function() {
            var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
        }, d.IntersectionObserver = t, d.IntersectionObserverEntry = a
    }

    function a(t) {
        this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }, this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect,
            n = e.width * e.height,
            o = this.intersectionRect,
            i = o.width * o.height;
        this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0
    }

    function t(t, e) {
        var n, o, i, r = e || {};
        if ("function" != typeof t) throw new Error("callback must be a function");
        if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, i = null, function() {
            i || (i = setTimeout(function() {
                n(), i = null
            }, o))
        }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
            return t.value + t.unit
        }).join(" ")
    }

    function n(t, e, n, o) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
    }

    function o(t, e, n, o) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
    }

    function m(t) {
        var e;
        try {
            e = t.getBoundingClientRect()
        } catch (t) {}
        return e ? (e.width && e.height || (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top
        }), e) : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }

    function i(t, e) {
        for (var n = e; n;) {
            if (n == t) return !0;
            n = v(n)
        }
        return !1
    }

    function v(t) {
        var e = t.parentNode;
        return e && 11 == e.nodeType && e.host ? e.host : e
    }
}(window, document);
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var z = function() {
            j.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
        },
        I = "data-scrollmagic-pin-spacer",
        t = !(z.version = "2.0.5");
    try {
        var e = Object.defineProperty({}, "passive", {
            get: function() {
                t = !0
            }
        });
        window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
    } catch (e) {
        t = !1
    }
    var k = !!t && {
        passive: !0
    };
    window.addEventListener("mousewheel", function() {}, k), z.Controller = function(e) {
        var n, o, r = "ScrollMagic.Controller",
            i = "REVERSE",
            t = "PAUSED",
            l = O.defaults,
            a = this,
            s = j.extend({}, l, e),
            c = [],
            u = !1,
            d = 0,
            f = t,
            g = !0,
            p = 0,
            h = !0,
            v = function() {
                0 < s.refreshInterval && (o = window.setTimeout(R, s.refreshInterval))
            },
            m = function() {
                return s.vertical ? j.get.scrollTop(s.container) : j.get.scrollLeft(s.container)
            },
            w = function() {
                return s.vertical ? s.container === window ? document.documentElement.clientHeight : j.get.height(s.container) : j.get.width(s.container)
            },
            y = this._setScrollPos = function(e) {
                s.vertical ? g ? window.scrollTo(j.get.scrollLeft(), e) : s.container.scrollTop = e : g ? window.scrollTo(e, j.get.scrollTop()) : s.container.scrollLeft = e
            },
            S = function() {
                if (h && u) {
                    var n = j.type.Array(u) ? u : c.slice(0);
                    u = !1;
                    var e = d,
                        t = (d = a.scrollPos()) - e;
                    0 !== t && (f = 0 < t ? "FORWARD" : i), f === i && n.reverse(), n.forEach(function(e, t) {
                        T(3, "updating Scene " + (t + 1) + "/" + n.length + " (" + c.length + " total)"), e.update(!0)
                    }), 0 === n.length && 3 <= s.loglevel && T(3, "updating 0 Scenes (nothing added to controller)")
                }
            },
            b = function() {
                n = j.rAF(S)
            },
            E = function(e) {
                T(3, "event fired causing an update:", e.type), "resize" == e.type && (p = w(), f = t), !0 !== u && (u = !0, b())
            },
            R = function() {
                if (!g && p != w()) {
                    var t;
                    try {
                        t = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (e) {
                        (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    s.container.dispatchEvent(t)
                }
                c.forEach(function(e, t) {
                    e.refresh()
                }), v()
            },
            T = this._log = function(e, t) {
                s.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + r + ") ->"), j.log.apply(window, arguments))
            };
        this._options = s;
        var C = function(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function(e) {
                if (j.type.Array(e)) e.forEach(function(e, t) {
                    a.addScene(e)
                });
                else if (e instanceof z.Scene) {
                    if (e.controller() !== a) e.addTo(a);
                    else if (c.indexOf(e) < 0) {
                        for (var t in c.push(e), c = C(c), e.on("shift.controller_sort", function() {
                                c = C(c)
                            }), s.globalSceneOptions) e[t] && e[t].call(e, s.globalSceneOptions[t]);
                        T(3, "adding Scene (now " + c.length + " total)")
                    }
                } else T(1, "ERROR: invalid argument supplied for '.addScene()'");
                return a
            }, this.removeScene = function(e) {
                if (j.type.Array(e)) e.forEach(function(e, t) {
                    a.removeScene(e)
                });
                else {
                    var t = c.indexOf(e); - 1 < t && (e.off("shift.controller_sort"), c.splice(t, 1), T(3, "removing Scene (now " + c.length + " left)"), e.remove())
                }
                return a
            }, this.updateScene = function(e, n) {
                return j.type.Array(e) ? e.forEach(function(e, t) {
                    a.updateScene(e, n)
                }) : n ? e.update(!0) : !0 !== u && e instanceof z.Scene && (-1 == (u = u || []).indexOf(e) && u.push(e), u = C(u), b()), a
            }, this.update = function(e) {
                return E({
                    type: "resize"
                }), e && S(), a
            }, this.scrollTo = function(e, t) {
                if (j.type.Number(e)) y.call(s.container, e, t);
                else if (e instanceof z.Scene) e.controller() === a ? a.scrollTo(e.scrollOffset(), t) : T(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e);
                else if (j.type.Function(e)) y = e;
                else {
                    var n = j.get.elements(e)[0];
                    if (n) {
                        for (; n.parentNode.hasAttribute(I);) n = n.parentNode;
                        var o = s.vertical ? "top" : "left",
                            r = j.get.offset(s.container),
                            i = j.get.offset(n);
                        g || (r[o] -= a.scrollPos()), a.scrollTo(i[o] - r[o], t)
                    } else T(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", e)
                }
                return a
            }, this.scrollPos = function(e) {
                return arguments.length ? (j.type.Function(e) ? m = e : T(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), a) : m.call(a)
            }, this.info = function(e) {
                var t = {
                    size: p,
                    vertical: s.vertical,
                    scrollPos: d,
                    scrollDirection: f,
                    container: s.container,
                    isDocument: g
                };
                return arguments.length ? void 0 !== t[e] ? t[e] : void T(1, 'ERROR: option "' + e + '" is not available') : t
            }, this.loglevel = function(e) {
                return arguments.length ? (s.loglevel != e && (s.loglevel = e), a) : s.loglevel
            }, this.enabled = function(e) {
                return arguments.length ? (h != e && (h = !!e, a.updateScene(c, !0)), a) : h
            }, this.destroy = function(e) {
                window.clearTimeout(o);
                for (var t = c.length; t--;) c[t].destroy(e);
                return s.container.removeEventListener("resize", E, k), s.container.removeEventListener("scroll", E, k), j.cAF(n), T(3, "destroyed " + r + " (reset: " + (e ? "true" : "false") + ")"), null
            },
            function() {
                for (var e in s) l.hasOwnProperty(e) || (T(2, 'WARNING: Unknown option "' + e + '"'), delete s[e]);
                if (s.container = j.get.elements(s.container)[0], !s.container) throw T(1, "ERROR creating object " + r + ": No valid scroll container supplied"), r + " init failed.";
                (g = s.container === window || s.container === document.body || !document.body.contains(s.container)) && (s.container = window), p = w(), s.container.addEventListener("resize", E, k), s.container.addEventListener("scroll", E, k);
                var t = parseInt(s.refreshInterval, 10);
                s.refreshInterval = j.type.Number(t) ? t : l.refreshInterval, v(), T(3, "added new " + r + " controller (v" + z.version + ")")
            }(), a
    };
    var O = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    z.Controller.addOption = function(e, t) {
        O.defaults[e] = t
    }, z.Controller.extend = function(e) {
        var t = this;
        z.Controller = function() {
            return t.apply(this, arguments), this.$super = j.extend({}, this), e.apply(this, arguments) || this
        }, j.extend(z.Controller, t), z.Controller.prototype = t.prototype, z.Controller.prototype.constructor = z.Controller
    }, z.Scene = function(e) {
        var n, s, o = "ScrollMagic.Scene",
            c = "BEFORE",
            u = "DURING",
            d = "AFTER",
            r = _.defaults,
            f = this,
            g = j.extend({}, r, e),
            p = c,
            h = 0,
            a = {
                start: 0,
                end: 0
            },
            v = 0,
            i = !0,
            l = {};
        this.on = function(e, r) {
            return j.type.Function(r) ? (e = e.trim().split(" ")).forEach(function(e) {
                var t = e.split("."),
                    n = t[0],
                    o = t[1];
                "*" != n && (l[n] || (l[n] = []), l[n].push({
                    namespace: o || "",
                    callback: r
                }))
            }) : m(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"), f
        }, this.off = function(e, i) {
            return e ? (e = e.trim().split(" ")).forEach(function(e, t) {
                var n = e.split("."),
                    o = n[0],
                    r = n[1] || "";
                ("*" === o ? Object.keys(l) : [o]).forEach(function(e) {
                    for (var t = l[e] || [], n = t.length; n--;) {
                        var o = t[n];
                        !o || r !== o.namespace && "*" !== r || i && i != o.callback || t.splice(n, 1)
                    }
                    t.length || delete l[e]
                })
            }) : m(1, "ERROR: Invalid event name supplied."), f
        }, this.trigger = function(e, n) {
            if (e) {
                var t = e.trim().split("."),
                    o = t[0],
                    r = t[1],
                    i = l[o];
                m(3, "event fired:", o, n ? "->" : "", n || ""), i && i.forEach(function(e, t) {
                    r && r !== e.namespace || e.callback.call(f, new z.Event(o, e.namespace, f, n))
                })
            } else m(1, "ERROR: Invalid event name supplied.");
            return f
        }, f.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? b() : "reverse" === e.what && f.update())
        }).on("shift.internal", function(e) {
            t(), f.update()
        });
        var m = this._log = function(e, t) {
            g.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + o + ") ->"), j.log.apply(window, arguments))
        };
        this.addTo = function(e) {
            return e instanceof z.Controller ? s != e && (s && s.removeScene(f), s = e, T(), S(!0), b(!0), t(), s.info("container").addEventListener("resize", E), e.addScene(f), f.trigger("add", {
                controller: s
            }), m(3, "added " + o + " to controller"), f.update()) : m(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), f
        }, this.enabled = function(e) {
            return arguments.length ? (i != e && (i = !!e, f.update(!0)), f) : i
        }, this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", E);
                var e = s;
                s = void 0, e.removeScene(f), f.trigger("remove"), m(3, "removed " + o + " from controller")
            }
            return f
        }, this.destroy = function(e) {
            return f.trigger("destroy", {
                reset: e
            }), f.remove(), f.triggerElement(null), f.off("*.*"), m(3, "destroyed " + o + " (reset: " + (e ? "true" : "false") + ")"), null
        }, this.update = function(e) {
            if (s)
                if (e)
                    if (s.enabled() && i) {
                        var t, n = s.info("scrollPos");
                        t = 0 < g.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0, f.trigger("update", {
                            startPos: a.start,
                            endPos: a.end,
                            scrollPos: n
                        }), f.progress(t)
                    } else w && p === u && x(!0);
            else s.updateScene(f, !1);
            return f
        }, this.refresh = function() {
            return S(), b(), f
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = p,
                    o = s ? s.info("scrollDirection") : "PAUSED",
                    r = g.reverse || h <= e;
                if (0 === g.duration ? (t = h != e, p = 0 === (h = e < 1 && r ? 0 : 1) ? c : u) : e < 0 && p !== c && r ? (p = c, t = !(h = 0)) : 0 <= e && e < 1 && r ? (h = e, p = u, t = !0) : 1 <= e && p !== d ? (h = 1, p = d, t = !0) : p !== u || r || x(), t) {
                    var i = {
                            progress: h,
                            state: p,
                            scrollDirection: o
                        },
                        l = p != n,
                        a = function(e) {
                            f.trigger(e, i)
                        };
                    l && n !== u && (a("enter"), a(n === c ? "start" : "end")), a("progress"), l && p !== u && (a(p === c ? "start" : "end"), a("leave"))
                }
                return f
            }
            return h
        };
        var w, y, t = function() {
                a = {
                    start: v + g.offset
                }, s && g.triggerElement && (a.start -= s.info("size") * g.triggerHook), a.end = a.start + g.duration
            },
            S = function(e) {
                if (n) {
                    var t = "duration";
                    C(t, n.call(f)) && !e && (f.trigger("change", {
                        what: t,
                        newval: g[t]
                    }), f.trigger("shift", {
                        reason: t
                    }))
                }
            },
            b = function(e) {
                var t = 0,
                    n = g.triggerElement;
                if (s && (n || 0 < v)) {
                    if (n)
                        if (n.parentNode) {
                            for (var o = s.info(), r = j.get.offset(o.container), i = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(I);) n = n.parentNode;
                            var l = j.get.offset(n);
                            o.isDocument || (r[i] -= s.scrollPos()), t = l[i] - r[i]
                        } else m(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0), f.triggerElement(void 0);
                    var a = t != v;
                    v = t, a && !e && f.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                }
            },
            E = function(e) {
                0 < g.triggerHook && f.trigger("shift", {
                    reason: "containerResize"
                })
            },
            R = j.extend(_.validate, {
                duration: function(t) {
                    if (j.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                        var e = parseFloat(t) / 100;
                        t = function() {
                            return s ? s.info("size") * e : 0
                        }
                    }
                    if (j.type.Function(t)) {
                        n = t;
                        try {
                            t = parseFloat(n())
                        } catch (e) {
                            t = -1
                        }
                    }
                    if (t = parseFloat(t), !j.type.Number(t) || t < 0) throw n ? (n = void 0, ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                    return t
                }
            }),
            T = function(e) {
                (e = arguments.length ? [e] : Object.keys(R)).forEach(function(t, e) {
                    var n;
                    if (R[t]) try {
                        n = R[t](g[t])
                    } catch (e) {
                        n = r[t];
                        var o = j.type.String(e) ? [e] : e;
                        j.type.Array(o) ? (o[0] = "ERROR: " + o[0], o.unshift(1), m.apply(this, o)) : m(1, "ERROR: Problem executing validation callback for option '" + t + "':", e.message)
                    } finally {
                        g[t] = n
                    }
                })
            },
            C = function(e, t) {
                var n = !1,
                    o = g[e];
                return g[e] != t && (g[e] = t, T(e), n = o != g[e]), n
            },
            O = function(t) {
                f[t] || (f[t] = function(e) {
                    return arguments.length ? ("duration" === t && (n = void 0), C(t, e) && (f.trigger("change", {
                        what: t,
                        newval: g[t]
                    }), -1 < _.shifts.indexOf(t) && f.trigger("shift", {
                        reason: t
                    })), f) : g[t]
                })
            };
        this.controller = function() {
            return s
        }, this.state = function() {
            return p
        }, this.scrollOffset = function() {
            return a.start
        }, this.triggerPosition = function() {
            var e = g.offset;
            return s && (g.triggerElement ? e += v : e += s.info("size") * f.triggerHook()), e
        }, f.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (p === d && t || p === u && 0 === g.duration) && x(), t && M()
        }).on("progress.internal", function(e) {
            x()
        }).on("add.internal", function(e) {
            M()
        }).on("destroy.internal", function(e) {
            f.removePin(e.reset)
        });
        var x = function(e) {
                if (w && s) {
                    var t = s.info(),
                        n = y.spacer.firstChild;
                    if (e || p !== u) {
                        var o = {
                                position: y.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            r = j.css(n, "position") != o.position;
                        y.pushFollowers ? 0 < g.duration && (p === d && 0 === parseFloat(j.css(y.spacer, "padding-top")) ? r = !0 : p === c && 0 === parseFloat(j.css(y.spacer, "padding-bottom")) && (r = !0)) : o[t.vertical ? "top" : "left"] = g.duration * h, j.css(n, o), r && M()
                    } else {
                        "fixed" != j.css(n, "position") && (j.css(n, {
                            position: "fixed"
                        }), M());
                        var i = j.get.offset(y.spacer, !0),
                            l = g.reverse || 0 === g.duration ? t.scrollPos - a.start : Math.round(h * g.duration * 10) / 10;
                        i[t.vertical ? "top" : "left"] += l, j.css(y.spacer.firstChild, {
                            top: i.top,
                            left: i.left
                        })
                    }
                }
            },
            M = function() {
                if (w && s && y.inFlow) {
                    var e = p === u,
                        t = s.info("vertical"),
                        n = y.spacer.firstChild,
                        o = j.isMarginCollapseType(j.css(y.spacer, "display")),
                        r = {};
                    y.relSize.width || y.relSize.autoFullWidth ? e ? j.css(w, {
                        width: j.get.width(y.spacer)
                    }) : j.css(w, {
                        width: "100%"
                    }) : (r["min-width"] = j.get.width(t ? w : n, !0, !0), r.width = e ? r["min-width"] : "auto"), y.relSize.height ? e ? j.css(w, {
                        height: j.get.height(y.spacer) - (y.pushFollowers ? g.duration : 0)
                    }) : j.css(w, {
                        height: "100%"
                    }) : (r["min-height"] = j.get.height(t ? n : w, !0, !o), r.height = e ? r["min-height"] : "auto"), y.pushFollowers && (r["padding" + (t ? "Top" : "Left")] = g.duration * h, r["padding" + (t ? "Bottom" : "Right")] = g.duration * (1 - h)), j.css(y.spacer, r)
                }
            },
            N = function() {
                s && w && p === u && !s.info("isDocument") && x()
            },
            P = function() {
                s && w && p === u && ((y.relSize.width || y.relSize.autoFullWidth) && j.get.width(window) != j.get.width(y.spacer.parentNode) || y.relSize.height && j.get.height(window) != j.get.height(y.spacer.parentNode)) && M()
            },
            F = function(e) {
                s && w && p === u && !s.info("isDocument") && (console.log("onMousewheelOverPin => "), e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
            };
        this.setPin = function(e, t) {
            if (t = j.extend({}, {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                }, t), !(e = j.get.elements(e)[0])) return m(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), f;
            if ("fixed" === j.css(e, "position")) return m(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), f;
            if (w) {
                if (w === e) return f;
                f.removePin()
            }
            var n = (w = e).parentNode.style.display,
                o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            w.parentNode.style.display = "none";
            var r = "absolute" != j.css(w, "position"),
                i = j.css(w, o.concat(["display"])),
                l = j.css(w, ["width", "height"]);
            w.parentNode.style.display = n, !r && t.pushFollowers && (m(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), t.pushFollowers = !1), window.setTimeout(function() {
                w && 0 === g.duration && t.pushFollowers && m(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
            }, 0);
            var a = w.parentNode.insertBefore(document.createElement("div"), w),
                s = j.extend(i, {
                    position: r ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (r || j.extend(s, j.css(w, ["width", "height"])), j.css(a, s), a.setAttribute(I, ""), j.addClass(a, t.spacerClass), y = {
                    spacer: a,
                    relSize: {
                        width: "%" === l.width.slice(-1),
                        height: "%" === l.height.slice(-1),
                        autoFullWidth: "auto" === l.width && r && j.isMarginCollapseType(i.display)
                    },
                    pushFollowers: t.pushFollowers,
                    inFlow: r
                }, !w.___origStyle) {
                w.___origStyle = {};
                var c = w.style;
                o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                    w.___origStyle[e] = c[e] || ""
                })
            }
            return y.relSize.width && j.css(a, {
                width: l.width
            }), y.relSize.height && j.css(a, {
                height: l.height
            }), a.appendChild(w), j.css(w, {
                position: r ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (y.relSize.width || y.relSize.autoFullWidth) && j.css(w, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", N, k), window.addEventListener("resize", N, k), window.addEventListener("resize", P, k), w.addEventListener("mousewheel", F, k), w.addEventListener("DOMMouseScroll", F, k), m(3, "added pin"), x(), f
        }, this.removePin = function(e) {
            if (w) {
                if (p === u && x(!0), e || !s) {
                    var t = y.spacer.firstChild;
                    if (t.hasAttribute(I)) {
                        var n = y.spacer.style;
                        margins = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                            margins[e] = n[e] || ""
                        }), j.css(t, margins)
                    }
                    y.spacer.parentNode.insertBefore(t, y.spacer), y.spacer.parentNode.removeChild(y.spacer), w.parentNode.hasAttribute(I) || (j.css(w, w.___origStyle), delete w.___origStyle)
                }
                window.removeEventListener("scroll", N, k), window.removeEventListener("resize", N, k), window.removeEventListener("resize", P, k), w.removeEventListener("mousewheel", F, k), w.removeEventListener("DOMMouseScroll", F, k), w = void 0, y.spacer = null, m(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
            }
            return f
        };
        var A, L = [];
        return f.on("destroy.internal", function(e) {
                f.removeClassToggle(e.reset)
            }), this.setClassToggle = function(e, t) {
                var n = j.get.elements(e);
                return 0 !== n.length && j.type.String(t) ? (0 < L.length && f.removeClassToggle(), A = t, L = n, f.on("enter.internal_class leave.internal_class", function(e) {
                    var n = "enter" === e.type ? j.addClass : j.removeClass;
                    L.forEach(function(e, t) {
                        n(e, A)
                    })
                })) : m(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."), f
            }, this.removeClassToggle = function(e) {
                return e && L.forEach(function(e, t) {
                    j.removeClass(e, A)
                }), f.off("start.internal_class end.internal_class"), A = void 0, L = [], f
            },
            function() {
                for (var e in g) r.hasOwnProperty(e) || (m(2, 'WARNING: Unknown option "' + e + '"'), delete g[e]);
                for (var t in r) O(t);
                T()
            }(), f
    };
    var _ = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !j.type.Number(e)) throw ['Invalid value for option "offset":', e];
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = j.get.elements(e)[0];
                    if (!t || !t.parentNode) throw ['Element defined in option "triggerElement" was not found:', e];
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (j.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw ['Invalid value for option "triggerHook": ', e];
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            },
            loglevel: function(e) {
                if (e = parseInt(e), !j.type.Number(e) || e < 0 || 3 < e) throw ['Invalid value for option "loglevel":', e];
                return e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    z.Scene.addOption = function(e, t, n, o) {
        e in _.defaults ? z._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (_.defaults[e] = t, _.validate[e] = n, o && _.shifts.push(e))
    }, z.Scene.extend = function(e) {
        var t = this;
        z.Scene = function() {
            return t.apply(this, arguments), this.$super = j.extend({}, this), e.apply(this, arguments) || this
        }, j.extend(z.Scene, t), z.Scene.prototype = t.prototype, z.Scene.prototype.constructor = z.Scene
    }, z.Event = function(e, t, n, o) {
        for (var r in o = o || {}) this[r] = o[r];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var j = z._util = function(l) {
        var n, e = {},
            a = function(e) {
                return parseFloat(e) || 0
            },
            s = function(e) {
                return e.currentStyle ? e.currentStyle : l.getComputedStyle(e)
            },
            o = function(e, t, n, o) {
                if ((t = t === document ? l : t) === l) o = !1;
                else if (!p.DomElement(t)) return 0;
                e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                var r = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
                if (n && o) {
                    var i = s(t);
                    r += "Height" === e ? a(i.marginTop) + a(i.marginBottom) : a(i.marginLeft) + a(i.marginRight)
                }
                return r
            },
            c = function(e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            };
        e.extend = function(e) {
            for (e = e || {}, n = 1; n < arguments.length; n++)
                if (arguments[n])
                    for (var t in arguments[n]) arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
            return e
        }, e.isMarginCollapseType = function(e) {
            return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
        };
        var r = 0,
            t = ["ms", "moz", "webkit", "o"],
            i = l.requestAnimationFrame,
            u = l.cancelAnimationFrame;
        for (n = 0; !i && n < t.length; ++n) i = l[t[n] + "RequestAnimationFrame"], u = l[t[n] + "CancelAnimationFrame"] || l[t[n] + "CancelRequestAnimationFrame"];
        i || (i = function(e) {
            var t = (new Date).getTime(),
                n = Math.max(0, 16 - (t - r)),
                o = l.setTimeout(function() {
                    e(t + n)
                }, n);
            return r = t + n, o
        }), u || (u = function(e) {
            l.clearTimeout(e)
        }), e.rAF = i.bind(l), e.cAF = u.bind(l);
        var d = ["error", "warn", "log"],
            f = l.console || {};
        for (f.log = f.log || function() {}, n = 0; n < d.length; n++) {
            var g = d[n];
            f[g] || (f[g] = f.log)
        }
        e.log = function(e) {
            (d.length < e || e <= 0) && (e = d.length);
            var t = new Date,
                n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3),
                o = d[e - 1],
                r = Array.prototype.splice.call(arguments, 1),
                i = Function.prototype.bind.call(f[o], f);
            r.unshift(n), i.apply(f, r)
        };
        var p = e.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        p.String = function(e) {
            return "string" === p(e)
        }, p.Function = function(e) {
            return "function" === p(e)
        }, p.Array = function(e) {
            return Array.isArray(e)
        }, p.Number = function(e) {
            return !p.Array(e) && 0 <= e - parseFloat(e) + 1
        }, p.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var h = e.get = {};
        return h.elements = function(e) {
            var t = [];
            if (p.String(e)) try {
                e = document.querySelectorAll(e)
            } catch (e) {
                return t
            }
            if ("nodelist" === p(e) || p.Array(e) || e instanceof NodeList)
                for (var n = 0, o = t.length = e.length; n < o; n++) {
                    var r = e[n];
                    t[n] = p.DomElement(r) ? r : h.elements(r)
                } else(p.DomElement(e) || e === document || e === l) && (t = [e]);
            return t
        }, h.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : l.pageYOffset || 0
        }, h.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : l.pageXOffset || 0
        }, h.width = function(e, t, n) {
            return o("width", e, t, n)
        }, h.height = function(e, t, n) {
            return o("height", e, t, n)
        }, h.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var o = e.getBoundingClientRect();
                n.top = o.top, n.left = o.left, t || (n.top += h.scrollTop(), n.left += h.scrollLeft())
            }
            return n
        }, e.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, e.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, e.css = function(e, t) {
            if (p.String(t)) return s(e)[c(t)];
            if (p.Array(t)) {
                var n = {},
                    o = s(e);
                return t.forEach(function(e, t) {
                    n[e] = o[c(e)]
                }), n
            }
            for (var r in t) {
                var i = t[r];
                i == parseFloat(i) && (i += "px"), e.style[c(r)] = i
            }
        }, e
    }(window || {});
    return z.Scene.prototype.addIndicators = function() {
        return z._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
    }, z.Scene.prototype.removeIndicators = function() {
        return z._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
    }, z.Scene.prototype.setTween = function() {
        return z._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
    }, z.Scene.prototype.removeTween = function() {
        return z._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
    }, z.Scene.prototype.setVelocity = function() {
        return z._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
    }, z.Scene.prototype.removeVelocity = function() {
        return z._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
    }, z
}),
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic jQuery plugin.
 *
 * requires: jQuery ~1.11 or ~2.1
 */
function(e, t) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "jquery"], t) : "object" == typeof exports ? t(require("scrollmagic"), require("jquery")) : t(e.ScrollMagic, e.jQuery)
}(this, function(e, n) {
    "use strict";
    var t = "jquery.ScrollMagic",
        o = window.console || {},
        r = Function.prototype.bind.call(o.error || o.log || function() {}, o);
    e || r("(" + t + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), n || r("(" + t + ") -> ERROR: jQuery could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs."), e._util.get.elements = function(e) {
        return n(e).toArray()
    }, e._util.addClass = function(e, t) {
        n(e).addClass(t)
    }, e._util.removeClass = function(e, t) {
        n(e).removeClass(t)
    }, n.ScrollMagic = e
}),
/*!
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
function(e, t) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function(e, h, v) {
    var t = "animation.gsap",
        n = window.console || {},
        o = Function.prototype.bind.call(n.error || n.log || function() {}, n);
    e || o("(" + t + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), h || o("(" + t + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e
    }), e.Scene.extend(function() {
        var d, f = this,
            g = function() {
                f._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + t + ")", "->"), f._log.apply(this, arguments))
            };
        f.on("progress.plugin_gsap", function() {
            p()
        }), f.on("destroy.plugin_gsap", function(e) {
            f.removeTween(e.reset)
        });
        var p = function() {
            if (d) {
                var e = f.progress(),
                    t = f.state();
                d.repeat && -1 === d.repeat() ? "DURING" === t && d.paused() ? d.play() : "DURING" === t || d.paused() || d.pause() : e != d.progress() && (0 === f.duration() ? 0 < e ? d.play() : d.reverse() : f.tweenChanges() && d.tweenTo ? d.tweenTo(e * d.duration()) : d.progress(e).pause())
            }
        };
        f.setTween = function(e, t, n) {
            var o;
            1 < arguments.length && (arguments.length < 3 && (n = t, t = 1), e = h.to(e, t, n));
            try {
                (o = v ? new v({
                    smoothChildTiming: !0
                }).add(e) : e).pause()
            } catch (e) {
                return g(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), f
            }
            if (d && f.removeTween(), d = o, e.repeat && -1 === e.repeat() && (d.repeat(-1), d.yoyo(e.yoyo())), f.tweenChanges() && !d.tweenTo && g(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), d && f.controller() && f.triggerElement() && 2 <= f.loglevel()) {
                var r = h.getTweensOf(f.triggerElement()),
                    i = f.controller().info("vertical");
                r.forEach(function(e, t) {
                    var n = e.vars.css || e.vars;
                    if (i ? void 0 !== n.top || void 0 !== n.bottom : void 0 !== n.left || void 0 !== n.right) return g(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1
                })
            }
            if (1.14 <= parseFloat(TweenLite.version))
                for (var l, a, s = d.getChildren ? d.getChildren(!0, !0, !1) : [d], c = function() {
                        g(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                    }, u = 0; u < s.length; u++) l = s[u], a !== c && (a = l.vars.onOverwrite, l.vars.onOverwrite = function() {
                    a && a.apply(this, arguments), c.apply(this, arguments)
                });
            return g(3, "added tween"), p(), f
        }, f.removeTween = function(e) {
            return d && (e && d.progress(0).pause(), d.kill(), d = void 0, g(3, "removed tween (reset: " + (e ? "true" : "false") + ")")), f
        }
    })
});
/*!
 * HC-Sticky
 * =========
 * Version: 2.2.3
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-sticky
 * Description: Cross-browser plugin that makes any element on your page visible while you scroll
 * License: MIT
 */
! function(t, e) {
    "use strict";
    if ("object" == typeof module && "object" == typeof module.exports) {
        if (!t.document) throw new Error("HC-Sticky requires a browser to run.");
        module.exports = e(t)
    } else "function" == typeof define && define.amd ? define("hcSticky", [], e(t)) : e(t)
}("undefined" != typeof window ? window : this, function(V) {
    "use strict";
    var U = {
            top: 0,
            bottom: 0,
            bottomEnd: 0,
            innerTop: 0,
            innerSticker: null,
            stickyClass: "sticky",
            stickTo: null,
            followScroll: !0,
            responsive: null,
            mobileFirst: !1,
            onStart: null,
            onStop: null,
            onBeforeResize: null,
            onResize: null,
            resizeDebounce: 100,
            disable: !1,
            queries: null,
            queryFlow: "down"
        },
        Y = function(t, e, o) {
            console.log("%c! HC Sticky:%c " + t + "%c " + o + " is now deprecated and will be removed. Use%c " + e + "%c instead.", "color: red", "color: darkviolet", "color: black", "color: darkviolet", "color: black")
        },
        $ = V.document,
        Q = function(n, f) {
            var o = this;
            if ("string" == typeof n && (n = $.querySelector(n)), !n) return !1;
            f.queries && Y("queries", "responsive", "option"), f.queryFlow && Y("queryFlow", "mobileFirst", "option");
            var p = {},
                d = Q.Helpers,
                s = n.parentNode;
            "static" === d.getStyle(s, "position") && (s.style.position = "relative");
            var u = function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    d.isEmptyObject(t) && !d.isEmptyObject(p) || (p = Object.assign({}, U, p, t))
                },
                t = function() {
                    return p.disable
                },
                e = function() {
                    var t, e = p.responsive || p.queries;
                    if (e) {
                        var o = V.innerWidth;
                        if (t = f, (p = Object.assign({}, U, t || {})).mobileFirst)
                            for (var i in e) i <= o && !d.isEmptyObject(e[i]) && u(e[i]);
                        else {
                            var n = [];
                            for (var s in e) {
                                var r = {};
                                r[s] = e[s], n.push(r)
                            }
                            for (var l = n.length - 1; 0 <= l; l--) {
                                var a = n[l],
                                    c = Object.keys(a)[0];
                                o <= c && !d.isEmptyObject(a[c]) && u(a[c])
                            }
                        }
                    }
                },
                r = {
                    css: {},
                    position: null,
                    stick: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        d.hasClass(n, p.stickyClass) || (!1 === l.isAttached && l.attach(), r.position = "fixed", n.style.position = "fixed", n.style.left = l.offsetLeft + "px", n.style.width = l.width, void 0 === t.bottom ? n.style.bottom = "auto" : n.style.bottom = t.bottom + "px", void 0 === t.top ? n.style.top = "auto" : n.style.top = t.top + "px", n.classList ? n.classList.add(p.stickyClass) : n.className += " " + p.stickyClass, p.onStart && p.onStart.call(n, Object.assign({}, p)))
                    },
                    release: function() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        if (t.stop = t.stop || !1, !0 === t.stop || "fixed" === r.position || null === r.position || !(void 0 === t.top && void 0 === t.bottom || void 0 !== t.top && (parseInt(d.getStyle(n, "top")) || 0) === t.top || void 0 !== t.bottom && (parseInt(d.getStyle(n, "bottom")) || 0) === t.bottom)) {
                            !0 === t.stop ? !0 === l.isAttached && l.detach() : !1 === l.isAttached && l.attach();
                            var e = t.position || r.css.position;
                            r.position = e, n.style.position = e, n.style.left = !0 === t.stop ? r.css.left : l.positionLeft + "px", n.style.width = "absolute" !== e ? r.css.width : l.width, void 0 === t.bottom ? n.style.bottom = !0 === t.stop ? "" : "auto" : n.style.bottom = t.bottom + "px", void 0 === t.top ? n.style.top = !0 === t.stop ? "" : "auto" : n.style.top = t.top + "px", n.classList ? n.classList.remove(p.stickyClass) : n.className = n.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), p.onStop && p.onStop.call(n, Object.assign({}, p))
                        }
                    }
                },
                l = {
                    el: $.createElement("div"),
                    offsetLeft: null,
                    positionLeft: null,
                    width: null,
                    isAttached: !1,
                    init: function() {
                        for (var t in l.el.className = "sticky-spacer", r.css) l.el.style[t] = r.css[t];
                        l.el.style["z-index"] = "-1";
                        var e = d.getStyle(n);
                        l.offsetLeft = d.offset(n).left - (parseInt(e.marginLeft) || 0), l.positionLeft = d.position(n).left, l.width = d.getStyle(n, "width")
                    },
                    attach: function() {
                        s.insertBefore(l.el, n), l.isAttached = !0
                    },
                    detach: function() {
                        l.el = s.removeChild(l.el), l.isAttached = !1
                    }
                },
                a = void 0,
                c = void 0,
                g = void 0,
                m = void 0,
                h = void 0,
                v = void 0,
                y = void 0,
                b = void 0,
                S = void 0,
                w = void 0,
                k = void 0,
                E = void 0,
                x = void 0,
                L = void 0,
                T = void 0,
                j = void 0,
                O = void 0,
                C = void 0,
                z = V.pageYOffset || $.documentElement.scrollTop,
                N = 0,
                H = void 0,
                R = function() {
                    T = C(), m = O(), x = h + m - b - k, L = y < T;
                    var t = V.pageYOffset || $.documentElement.scrollTop,
                        e = d.offset(n).top,
                        o = e - t,
                        i = void 0;
                    H = t < z ? "up" : "down", N = t - z, E < (z = t) ? x + b + (L ? S : 0) - (p.followScroll && L ? 0 : b) <= t + T - w - (y - (E - w) < T - w && p.followScroll && 0 < (i = T - y - w) ? i : 0) ? r.release({
                        position: "absolute",
                        bottom: v + s.offsetHeight - x - b
                    }) : L && p.followScroll ? "down" === H ? o + T + S <= y + .9 ? r.stick({
                        bottom: S
                    }) : "fixed" === r.position && r.release({
                        position: "absolute",
                        top: e - b - E - N + w
                    }) : Math.ceil(o + w) < 0 && "fixed" === r.position ? r.release({
                        position: "absolute",
                        top: e - b - E + w - N
                    }) : t + b - w <= e && r.stick({
                        top: b - w
                    }) : r.stick({
                        top: b - w
                    }) : r.release({
                        stop: !0
                    })
                },
                A = !1,
                i = !1,
                B = function() {
                    A && (d.event.unbind(V, "scroll", R), A = !1)
                },
                I = function() {
                    var t, e, o, i;
                    null !== n.offsetParent && "none" !== d.getStyle(n, "display") ? (r.css = (t = n, e = d.getCascadedStyle(t), o = d.getStyle(t), i = {
                        height: t.offsetHeight + "px",
                        left: e.left,
                        right: e.right,
                        top: e.top,
                        bottom: e.bottom,
                        position: o.position,
                        display: o.display,
                        verticalAlign: o.verticalAlign,
                        boxSizing: o.boxSizing,
                        marginLeft: e.marginLeft,
                        marginRight: e.marginRight,
                        marginTop: e.marginTop,
                        marginBottom: e.marginBottom,
                        paddingLeft: e.paddingLeft,
                        paddingRight: e.paddingRight
                    }, e.float && (i.float = e.float || "none"), e.cssFloat && (i.cssFloat = e.cssFloat || "none"), o.MozBoxSizing && (i.MozBoxSizing = o.MozBoxSizing), i.width = "auto" !== e.width ? e.width : "border-box" === i.boxSizing || "border-box" === i.MozBoxSizing ? t.offsetWidth + "px" : o.width, i), l.init(), a = !(!p.stickTo || !("document" === p.stickTo || p.stickTo.nodeType && 9 === p.stickTo.nodeType || "object" == typeof p.stickTo && p.stickTo instanceof("undefined" != typeof HTMLDocument ? HTMLDocument : Document))), c = p.stickTo ? a ? $ : "string" == typeof p.stickTo ? $.querySelector(p.stickTo) : p.stickTo : s, T = (C = function() {
                        var t = n.offsetHeight + (parseInt(r.css.marginTop) || 0) + (parseInt(r.css.marginBottom) || 0),
                            e = (T || 0) - t;
                        return -1 <= e && e <= 1 ? T : t
                    })(), m = (O = function() {
                        return a ? Math.max($.documentElement.clientHeight, $.body.scrollHeight, $.documentElement.scrollHeight, $.body.offsetHeight, $.documentElement.offsetHeight) : c.offsetHeight
                    })(), h = a ? 0 : d.offset(c).top, v = p.stickTo ? a ? 0 : d.offset(s).top : h, y = V.innerHeight, j = n.offsetTop - (parseInt(r.css.marginTop) || 0), g = p.innerSticker ? "string" == typeof p.innerSticker ? $.querySelector(p.innerSticker) : p.innerSticker : null, b = isNaN(p.top) && -1 < p.top.indexOf("%") ? parseFloat(p.top) / 100 * y : p.top, S = isNaN(p.bottom) && -1 < p.bottom.indexOf("%") ? parseFloat(p.bottom) / 100 * y : p.bottom, w = g ? g.offsetTop : p.innerTop ? p.innerTop : 0, k = isNaN(p.bottomEnd) && -1 < p.bottomEnd.indexOf("%") ? parseFloat(p.bottomEnd) / 100 * y : p.bottomEnd, E = h - b + w + j, m <= T ? B() : (R(), A || (d.event.bind(V, "scroll", R), A = !0))) : B()
                },
                q = function() {
                    n.style.position = "", n.style.left = "", n.style.top = "", n.style.bottom = "", n.style.width = "", n.classList ? n.classList.remove(p.stickyClass) : n.className = n.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), r.css = {}, !(r.position = null) === l.isAttached && l.detach()
                },
                F = function() {
                    q(), e(), t() ? B() : I()
                },
                M = function() {
                    p.onBeforeResize && p.onBeforeResize.call(n, Object.assign({}, p)), F(), p.onResize && p.onResize.call(n, Object.assign({}, p))
                },
                D = p.resizeDebounce ? d.debounce(M, p.resizeDebounce) : M,
                P = function() {
                    i && (d.event.unbind(V, "resize", D), i = !1), B()
                },
                W = function() {
                    i || (d.event.bind(V, "resize", D), i = !0), e(), t() ? B() : I()
                };
            this.options = function(t) {
                return t ? p[t] : Object.assign({}, p)
            }, this.refresh = F, this.update = function(t) {
                u(t), f = Object.assign({}, f, t || {}), F()
            }, this.attach = W, this.detach = P, this.destroy = function() {
                P(), q()
            }, this.triggerMethod = function(t, e) {
                "function" == typeof o[t] && o[t](e)
            }, this.reinit = function() {
                Y("reinit", "refresh", "method"), F()
            }, u(f), W(), d.event.bind(V, "load", F)
        };
    if (void 0 !== V.jQuery) {
        var i = V.jQuery,
            n = "hcSticky";
        i.fn.extend({
            hcSticky: function(e, o) {
                return this.length ? "options" === e ? i.data(this.get(0), n).options() : this.each(function() {
                    var t = i.data(this, n);
                    t ? t.triggerMethod(e, o) : (t = new Q(this, e), i.data(this, n, t))
                }) : this
            }
        })
    }
    return V.hcSticky = V.hcSticky || Q, Q
}),
function(c) {
    "use strict";
    var t = c.hcSticky,
        f = c.document;
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t, e) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n)
                    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (o[s] = n[s])
            }
            return o
        },
        writable: !0,
        configurable: !0
    }), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
        var e, o;
        if (null == this) throw new TypeError("this is null or not defined");
        var i = Object(this),
            n = i.length >>> 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (1 < arguments.length && (e = arguments[1]), o = 0; o < n;) {
            var s;
            o in i && (s = i[o], t.call(e, s, o, i)), o++
        }
    });
    var e = function() {
            var t = f.documentElement,
                e = function() {};

            function i(t) {
                var e = c.event;
                return e.target = e.target || e.srcElement || t, e
            }
            t.addEventListener ? e = function(t, e, o) {
                t.addEventListener(e, o, !1)
            } : t.attachEvent && (e = function(e, t, o) {
                e[t + o] = o.handleEvent ? function() {
                    var t = i(e);
                    o.handleEvent.call(o, t)
                } : function() {
                    var t = i(e);
                    o.call(e, t)
                }, e.attachEvent("on" + t, e[t + o])
            });
            var o = function() {};
            return t.removeEventListener ? o = function(t, e, o) {
                t.removeEventListener(e, o, !1)
            } : t.detachEvent && (o = function(e, o, i) {
                e.detachEvent("on" + o, e[o + i]);
                try {
                    delete e[o + i]
                } catch (t) {
                    e[o + i] = void 0
                }
            }), {
                bind: e,
                unbind: o
            }
        }(),
        r = function(t, e) {
            return c.getComputedStyle ? e ? f.defaultView.getComputedStyle(t, null).getPropertyValue(e) : f.defaultView.getComputedStyle(t, null) : t.currentStyle ? e ? t.currentStyle[e.replace(/-\w/g, function(t) {
                return t.toUpperCase().replace("-", "")
            })] : t.currentStyle : void 0
        },
        l = function(t) {
            var e = t.getBoundingClientRect(),
                o = c.pageYOffset || f.documentElement.scrollTop,
                i = c.pageXOffset || f.documentElement.scrollLeft;
            return {
                top: e.top + o,
                left: e.left + i
            }
        };
    t.Helpers = {
        isEmptyObject: function(t) {
            for (var e in t) return !1;
            return !0
        },
        debounce: function(i, n, s) {
            var r = void 0;
            return function() {
                var t = this,
                    e = arguments,
                    o = s && !r;
                clearTimeout(r), r = setTimeout(function() {
                    r = null, s || i.apply(t, e)
                }, n), o && i.apply(t, e)
            }
        },
        hasClass: function(t, e) {
            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
        },
        offset: l,
        position: function(t) {
            var e = t.offsetParent,
                o = l(e),
                i = l(t),
                n = r(e),
                s = r(t);
            return o.top += parseInt(n.borderTopWidth) || 0, o.left += parseInt(n.borderLeftWidth) || 0, {
                top: i.top - o.top - (parseInt(s.marginTop) || 0),
                left: i.left - o.left - (parseInt(s.marginLeft) || 0)
            }
        },
        getStyle: r,
        getCascadedStyle: function(t) {
            var e = t.cloneNode(!0);
            e.style.display = "none", Array.prototype.slice.call(e.querySelectorAll('input[type="radio"]')).forEach(function(t) {
                t.removeAttribute("name")
            }), t.parentNode.insertBefore(e, t.nextSibling);
            var o = void 0;
            e.currentStyle ? o = e.currentStyle : c.getComputedStyle && (o = f.defaultView.getComputedStyle(e, null));
            var i = {};
            for (var n in o) !isNaN(n) || "string" != typeof o[n] && "number" != typeof o[n] || (i[n] = o[n]);
            if (Object.keys(i).length < 3)
                for (var s in i = {}, o) isNaN(s) || (i[o[s].replace(/-\w/g, function(t) {
                    return t.toUpperCase().replace("-", "")
                })] = o.getPropertyValue(o[s]));
            if (i.margin || "auto" !== i.marginLeft ? i.margin || i.marginLeft !== i.marginRight || i.marginLeft !== i.marginTop || i.marginLeft !== i.marginBottom || (i.margin = i.marginLeft) : i.margin = "auto", !i.margin && "0px" === i.marginLeft && "0px" === i.marginRight) {
                var r = t.offsetLeft - t.parentNode.offsetLeft,
                    l = r - (parseInt(i.left) || 0) - (parseInt(i.right) || 0),
                    a = t.parentNode.offsetWidth - t.offsetWidth - r - (parseInt(i.right) || 0) + (parseInt(i.left) || 0) - l;
                0 !== a && 1 !== a || (i.margin = "auto")
            }
            return e.parentNode.removeChild(e), e = null, i
        },
        event: e
    }
}(window);
/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
! function(c, b, m, u) {
    m.swipebox = function(o, e) {
        var n, a, t = {
                useCSS: !0,
                useSVG: !0,
                initialIndexOnArray: 0,
                removeBarsOnMobile: !0,
                hideCloseButtonOnMobile: !1,
                hideBarsDelay: 3e3,
                videoMaxWidth: 1140,
                vimeoColor: "cccccc",
                beforeOpen: null,
                afterOpen: null,
                afterClose: null,
                afterMedia: null,
                nextSlide: null,
                prevSlide: null,
                loopAtEnd: !1,
                autoplayVideos: !1,
                queryStringData: {},
                toggleClassOnLoad: ""
            },
            r = this,
            g = [],
            l = o.selector,
            i = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
            s = null !== i || b.createTouch !== u || "ontouchstart" in c || "onmsgesturechange" in c || navigator.msMaxTouchPoints,
            d = !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            w = c.innerWidth ? c.innerWidth : m(c).width(),
            p = c.innerHeight ? c.innerHeight : m(c).height(),
            f = 0;
        r.settings = {}, m.swipebox.close = function() {
            n.closeSlide()
        }, m.swipebox.extend = function() {
            return n
        }, r.init = function() {
            r.settings = m.extend({}, t, e), m.isArray(o) ? (g = o, n.target = m(c), n.init(r.settings.initialIndexOnArray)) : m(b).on("click", l, function(e) {
                if ("slide current" === e.target.parentNode.className) return !1;
                var t, i, s;
                m.isArray(o) || (n.destroy(), a = m(l), n.actions()), g = [], s || (i = "data-rel", s = m(this).attr(i)), s || (i = "rel", s = m(this).attr(i)), (a = s && "" !== s && "nofollow" !== s ? m(l).filter("[" + i + '="' + s + '"]') : m(l)).each(function() {
                    var e = null,
                        t = null;
                    m(this).attr("title") && (e = m(this).attr("title")), m(this).attr("href") && (t = m(this).attr("href")), g.push({
                        href: t,
                        title: e
                    })
                }), t = a.index(m(this)), e.preventDefault(), e.stopPropagation(), n.target = m(e.target), n.init(t)
            })
        }, n = {
            init: function(e) {
                r.settings.beforeOpen && r.settings.beforeOpen(), this.target.trigger("swipebox-start"), m.swipebox.isOpen = !0, this.build(), this.openSlide(e), this.openMedia(e), this.preloadMedia(e + 1), this.preloadMedia(e - 1), r.settings.afterOpen && r.settings.afterOpen(e)
            },
            build: function() {
                var e, t = this;
                m("body").append('<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>'), d && !0 === r.settings.useSVG && (e = (e = m("#swipebox-close").css("background-image")).replace("png", "svg"), m("#swipebox-prev, #swipebox-next, #swipebox-close").css({
                    "background-image": e
                })), i && r.settings.removeBarsOnMobile && m("#swipebox-bottom-bar, #swipebox-top-bar").remove(), m.each(g, function() {
                    m("#swipebox-slider").append('<div class="slide"></div>')
                }), t.setDim(), t.actions(), s && t.gesture(), t.keyboard(), t.animBars(), t.resize()
            },
            setDim: function() {
                var e, t, i;
                "onorientationchange" in c ? c.addEventListener("orientationchange", function() {
                    0 === c.orientation ? (e = w, t = p) : 90 !== c.orientation && -90 !== c.orientation || (e = p, t = w)
                }, !1) : (e = c.innerWidth ? c.innerWidth : m(c).width(), t = c.innerHeight ? c.innerHeight : m(c).height()), i = {
                    width: e,
                    height: t
                }, m("#swipebox-overlay").css(i)
            },
            resize: function() {
                var e = this;
                m(c).resize(function() {
                    e.setDim()
                }).resize()
            },
            supportTransition: function() {
                var e, t = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                for (e = 0; e < t.length; e++)
                    if (b.createElement("div").style[t[e]] !== u) return t[e];
                return !1
            },
            doCssTrans: function() {
                if (r.settings.useCSS && this.supportTransition()) return !0
            },
            gesture: function() {
                var i, s, o, a, n, r, l = this,
                    d = !1,
                    p = !1,
                    c = {},
                    b = {},
                    u = m("#swipebox-top-bar, #swipebox-bottom-bar"),
                    h = m("#swipebox-slider");
                u.addClass("visible-bars"), l.setTimeout(), m("body").bind("touchstart", function(e) {
                    return m(this).addClass("touching"), i = m("#swipebox-slider .slide").index(m("#swipebox-slider .slide.current")), b = e.originalEvent.targetTouches[0], c.pageX = e.originalEvent.targetTouches[0].pageX, c.pageY = e.originalEvent.targetTouches[0].pageY, m("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + f + "%, 0, 0)",
                        transform: "translate3d(" + f + "%, 0, 0)"
                    }), m(".touching").bind("touchmove", function(e) {
                        if (e.preventDefault(), e.stopPropagation(), b = e.originalEvent.targetTouches[0], !p && (n = o, o = b.pageY - c.pageY, 50 <= Math.abs(o) || d)) {
                            var t = .75 - Math.abs(o) / h.height();
                            h.css({
                                top: o + "px"
                            }), h.css({
                                opacity: t
                            }), d = !0
                        }
                        a = s, s = b.pageX - c.pageX, r = 100 * s / w, !p && !d && 10 <= Math.abs(s) && (m("#swipebox-slider").css({
                            "-webkit-transition": "",
                            transition: ""
                        }), p = !0), p && (0 < s ? 0 === i ? m("#swipebox-overlay").addClass("leftSpringTouch") : (m("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), m("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (f + r) + "%, 0, 0)",
                            transform: "translate3d(" + (f + r) + "%, 0, 0)"
                        })) : s < 0 && (g.length === i + 1 ? m("#swipebox-overlay").addClass("rightSpringTouch") : (m("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), m("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (f + r) + "%, 0, 0)",
                            transform: "translate3d(" + (f + r) + "%, 0, 0)"
                        }))))
                    }), !1
                }).bind("touchend", function(e) {
                    if (e.preventDefault(), e.stopPropagation(), m("#swipebox-slider").css({
                            "-webkit-transition": "-webkit-transform 0.4s ease",
                            transition: "transform 0.4s ease"
                        }), o = b.pageY - c.pageY, s = b.pageX - c.pageX, r = 100 * s / w, d)
                        if (d = !1, 100 <= Math.abs(o) && Math.abs(o) > Math.abs(n)) {
                            var t = 0 < o ? h.height() : -h.height();
                            h.animate({
                                top: t + "px",
                                opacity: 0
                            }, 300, function() {
                                l.closeSlide()
                            })
                        } else h.animate({
                            top: 0,
                            opacity: 1
                        }, 300);
                    else p ? (p = !1, 10 <= s && a <= s ? l.getPrev() : s <= -10 && s <= a && l.getNext()) : u.hasClass("visible-bars") ? (l.clearTimeout(), l.hideBars()) : (l.showBars(), l.setTimeout());
                    m("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + f + "%, 0, 0)",
                        transform: "translate3d(" + f + "%, 0, 0)"
                    }), m("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), m(".touching").off("touchmove").removeClass("touching")
                })
            },
            setTimeout: function() {
                if (0 < r.settings.hideBarsDelay) {
                    var e = this;
                    e.clearTimeout(), e.timeout = c.setTimeout(function() {
                        e.hideBars()
                    }, r.settings.hideBarsDelay)
                }
            },
            clearTimeout: function() {
                c.clearTimeout(this.timeout), this.timeout = null
            },
            showBars: function() {
                var e = m("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? e.addClass("visible-bars") : (m("#swipebox-top-bar").animate({
                    top: 0
                }, 500), m("#swipebox-bottom-bar").animate({
                    bottom: 0
                }, 500), setTimeout(function() {
                    e.addClass("visible-bars")
                }, 1e3))
            },
            hideBars: function() {
                var e = m("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? e.removeClass("visible-bars") : (m("#swipebox-top-bar").animate({
                    top: "-50px"
                }, 500), m("#swipebox-bottom-bar").animate({
                    bottom: "-50px"
                }, 500), setTimeout(function() {
                    e.removeClass("visible-bars")
                }, 1e3))
            },
            animBars: function() {
                var e = this,
                    t = m("#swipebox-top-bar, #swipebox-bottom-bar");
                t.addClass("visible-bars"), e.setTimeout(), m("#swipebox-slider").click(function() {
                    t.hasClass("visible-bars") || (e.showBars(), e.setTimeout())
                }), m("#swipebox-bottom-bar").hover(function() {
                    e.showBars(), t.addClass("visible-bars"), e.clearTimeout()
                }, function() {
                    0 < r.settings.hideBarsDelay && (t.removeClass("visible-bars"), e.setTimeout())
                })
            },
            keyboard: function() {
                var t = this;
                m(c).bind("keyup", function(e) {
                    e.preventDefault(), e.stopPropagation(), 37 === e.keyCode ? t.getPrev() : 39 === e.keyCode ? t.getNext() : 27 === e.keyCode && t.closeSlide()
                })
            },
            actions: function() {
                var t = this,
                    e = "touchend click";
                g.length < 2 ? (m("#swipebox-bottom-bar").hide(), u === g[1] && m("#swipebox-top-bar").hide()) : (m("#swipebox-prev").bind(e, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.getPrev(), t.setTimeout()
                }), m("#swipebox-next").bind(e, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.getNext(), t.setTimeout()
                })), m("#swipebox-close").bind(e, function() {
                    t.closeSlide()
                })
            },
            setSlide: function(e, t) {
                t = t || !1;
                var i = m("#swipebox-slider");
                f = 100 * -e, this.doCssTrans() ? i.css({
                    "-webkit-transform": "translate3d(" + 100 * -e + "%, 0, 0)",
                    transform: "translate3d(" + 100 * -e + "%, 0, 0)"
                }) : i.animate({
                    left: 100 * -e + "%"
                }), m("#swipebox-slider .slide").removeClass("current"), m("#swipebox-slider .slide").eq(e).addClass("current"), this.setTitle(e), t && i.fadeIn(), m("#swipebox-prev, #swipebox-next").removeClass("disabled"), 0 === e ? m("#swipebox-prev").addClass("disabled") : e === g.length - 1 && !0 !== r.settings.loopAtEnd && m("#swipebox-next").addClass("disabled")
            },
            openSlide: function(e) {
                m("html").addClass("swipebox-html"), s ? (m("html").addClass("swipebox-touch"), r.settings.hideCloseButtonOnMobile && m("html").addClass("swipebox-no-close-button")) : m("html").addClass("swipebox-no-touch"), m(c).trigger("resize"), this.setSlide(e, !0)
            },
            preloadMedia: function(e) {
                var t = this,
                    i = null;
                g[e] !== u && (i = g[e].href), t.isVideo(i) ? t.openMedia(e) : setTimeout(function() {
                    t.openMedia(e)
                }, 1e3)
            },
            openMedia: function(e) {
                var t, i;
                if (g[e] !== u && (t = g[e].href), e < 0 || e >= g.length) return !1;
                i = m("#swipebox-slider .slide").eq(e), this.isVideo(t) ? (i.html(this.getVideo(t)), r.settings.afterMedia && r.settings.afterMedia(e)) : (i.addClass("slide-loading"), this.loadMedia(t, function() {
                    i.removeClass("slide-loading"), i.html(this), r.settings.afterMedia && r.settings.afterMedia(e)
                }))
            },
            setTitle: function(e) {
                var t = null;
                m("#swipebox-title").empty(), g[e] !== u && (t = g[e].title), t ? (m("#swipebox-top-bar").show(), m("#swipebox-title").append(t)) : m("#swipebox-top-bar").hide()
            },
            isVideo: function(e) {
                if (e) {
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) return !0;
                    if (0 <= e.toLowerCase().indexOf("swipeboxvideo=1")) return !0
                }
            },
            parseUri: function(e, t) {
                var i = b.createElement("a"),
                    s = {};
                return i.href = decodeURIComponent(e), i.search && (s = JSON.parse('{"' + i.search.toLowerCase().replace("?", "").replace(/&/g, '","').replace(/=/g, '":"') + '"}')), m.isPlainObject(t) && (s = m.extend(s, t, r.settings.queryStringData)), m.map(s, function(e, t) {
                    if (e && "" < e) return encodeURIComponent(t) + "=" + encodeURIComponent(e)
                }).join("&")
            },
            getVideo: function(e) {
                var t = "",
                    i = e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),
                    s = e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
                    o = e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),
                    a = "";
                return t = i || s ? (s && (i = s), a = n.parseUri(e, {
                    autoplay: r.settings.autoplayVideos ? "1" : "0",
                    v: ""
                }), '<iframe width="560" height="315" src="//' + i[1] + "/embed/" + i[2] + "?" + a + '" frameborder="0" allowfullscreen></iframe>') : o ? (a = n.parseUri(e, {
                    autoplay: r.settings.autoplayVideos ? "1" : "0",
                    byline: "0",
                    portrait: "0",
                    color: r.settings.vimeoColor
                }), '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + o[1] + "?" + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : '<iframe width="560" height="315" src="' + e + '" frameborder="0" allowfullscreen></iframe>', '<div class="swipebox-video-container" style="max-width:' + r.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + t + "</div></div>"
            },
            loadMedia: function(e, t) {
                if (0 === e.trim().indexOf("#")) t.call(m("<div>", {
                    class: "swipebox-inline-container"
                }).append(m(e).clone().toggleClass(r.settings.toggleClassOnLoad)));
                else if (!this.isVideo(e)) {
                    var i = m("<img>").on("load", function() {
                        t.call(i)
                    });
                    i.attr("src", e)
                }
            },
            getNext: function() {
                var e, t = this,
                    i = m("#swipebox-slider .slide").index(m("#swipebox-slider .slide.current"));
                i + 1 < g.length ? (e = m("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src"), m("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src", e), i++, t.setSlide(i), t.preloadMedia(i + 1), r.settings.nextSlide && r.settings.nextSlide(i)) : !0 === r.settings.loopAtEnd ? (e = m("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src"), m("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src", e), i = 0, t.preloadMedia(i), t.setSlide(i), t.preloadMedia(i + 1), r.settings.nextSlide && r.settings.nextSlide(i)) : (m("#swipebox-overlay").addClass("rightSpring"), setTimeout(function() {
                    m("#swipebox-overlay").removeClass("rightSpring")
                }, 500))
            },
            getPrev: function() {
                var e, t = m("#swipebox-slider .slide").index(m("#swipebox-slider .slide.current"));
                0 < t ? (e = m("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src"), m("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src", e), t--, this.setSlide(t), this.preloadMedia(t - 1), r.settings.prevSlide && r.settings.prevSlide(t)) : (m("#swipebox-overlay").addClass("leftSpring"), setTimeout(function() {
                    m("#swipebox-overlay").removeClass("leftSpring")
                }, 500))
            },
            nextSlide: function(e) {},
            prevSlide: function(e) {},
            closeSlide: function() {
                m("html").removeClass("swipebox-html"), m("html").removeClass("swipebox-touch"), m(c).trigger("resize"), this.destroy()
            },
            destroy: function() {
                m(c).unbind("keyup"), m("body").unbind("touchstart"), m("body").unbind("touchmove"), m("body").unbind("touchend"), m("#swipebox-slider").unbind(), m("#swipebox-overlay").remove(), m.isArray(o) || o.removeData("_swipebox"), this.target && this.target.trigger("swipebox-destroy"), m.swipebox.isOpen = !1, r.settings.afterClose && r.settings.afterClose()
            }
        }, r.init()
    }, m.fn.swipebox = function(e) {
        if (!m.data(this, "_swipebox")) {
            var t = new m.swipebox(this, e);
            this.data("_swipebox", t)
        }
        return this.data("_swipebox")
    }
}(window, document, jQuery);

var zeen = function(M) {
    "use strict";
    var I = {
        init: function() {
            this.dom(), this.data(), this.bind(), this.anis(), this.sticky(), this.cta(), this.sliderInit(), this.lightboxInit(), this.sidebars(), this.infScr(), this.fillRunner(), this.mobileMenuClass(), this.masonryInit(), this.header(), this.topBlock(), this.anchorTouch(), this.parallax3s(), this.parallaxIt(), this.noPar(), this.hero31(), this.ipl(), this.imgControl(), this.postTracks(), this.qtyArrows(), this.toTop(), this.topBarMsg(), this.videoWrap(), this.videoBg(), this.woo(), this.stickyCheck(), this.stickyEl(), this.twitchLoad()
        },
        loaded: function() {
            this.slideInP(), this.$topBarMsg.slideDown(), this.subL(), this.timedPup(), this.verticalMenus()
        },
        woo: function() {
            !0 === this.wooArchive && this.$products.imagesLoaded().progress(function(e, t) {
                t.img.parentNode.parentNode.parentNode.classList.add("article-window")
            })
        },
        dom: function() {
            this.$win = M(window), this.$doc = M(document), this.$body = M("body"), this.$page = M("#page"), this.$rtl = this.$body.hasClass("rtl"), this.$content = M("#content"), this.$timedPup = M("#timed-pup"), this.$modal = M("#modal"), this.$baseOverlay = M("#tipi-overlay"), this.$skinMode = M("#mode__wrap"), this.$modalCustom = this.$modal.find(".content-custom"), this.$modalSearch = this.$modal.find(".content-search"), this.$modalSearchField = this.$modalSearch.find(".search-field"), this.$modalSearchFound = this.$modalSearch.find(".content-found"), this.$dropSearch = M(".drop-search"), this.$dropSearchFound = this.$dropSearch.find(".content-found"), this.$dropSearchField = this.$dropSearch.find(".search-field"), this.$searchResults = M(".search-all-results"), this.resizing = !1, this.$stickyOff = !0, this.$header = M("#masthead"), this.$trendingSecondary = M("#trending-secondary"), this.$siteNav = M("#site-navigation"), this.$secondaryWrap = M("#secondary-wrap"), this.$stickyP2 = M("#sticky-p2-share"), this.$dropper = this.$siteNav.find(".horizontal-menu > .dropper").add(this.$secondaryWrap.find(".horizontal-menu > .dropper")).add(this.$header.find(".horizontal-menu > .dropper")), this.$dropperChild = this.$dropper.find(".block-mm-changer"), this.$toolTip = M(".tipi-tip"), this.$toolTipOutput = "", this.$toolTipCurrent = "", this.headerOne = this.$header.hasClass("main-menu-inline"), this.$wpAdminBar = M("#wpadminbar"), this.$primary = M("#primary"), this.$verticalMenu = M("#site-header-side-70s"), this.$entryContentWrap = this.$primary.find(".entry-content-wrap"), this.$entryContent = this.$primary.find(".entry-content"), this.$parentAnimation = this.$primary.find(".parent-animation:not(.loaded)"), this.$toTop = M("#to-top"), this.$progress = M("#progress"), this.$mobBotShare = M("#mob-bot-share"), this.$iplTitle = M("#sticky-title"), this.$slideIn = M("#slide-in-box"), this.$slideInX = this.$slideIn.find("> .tipi-closer"), this.$slideForm = this.$slideIn.find("form"), this.slideInScene = "", this.toTopScene = "", this.mobMenuClearTO = "", this.resizeTo = "", this.pubTimer = "", this.qvWrapCache = "", this.ticking = !1, this.$sorter = M(".sorter"), this.$topBarMsg = M("#top-bar-message"), this.$topBlock = M("#zeen-top-block"), this.imgAni = document.getElementsByClassName("article-ani"), this.$footer = M("#colophon"), this.$footerBgArea = this.$footer.find(".bg-area"), this.stickyVertical = !1, this.$stickyMenu = M(".sticky-menu"), this.stickyMenu = !1, this.stickyMobMenu = !1, this.$hero31 = M(".hero-31 > .hero"), this.$controller = new ScrollMagic.Controller, this.$parallaxItCont = new ScrollMagic.Controller, this.$parallax3sController = new ScrollMagic.Controller, this.$main = M("#main"), this.ignoreCodes = [9, 13, 16, 17, 18, 20, 32, 45, 116, 224, 93, 91], this.timer = 0, this.headerIsSticky = !1, this.$slideInMenu = M("#slide-in-menu"), this.$slideMenuOpen = M(".slide-menu-tr-open"), this.$mobMenuOpen = M(".mob-tr-open"), this.$mobMenuClose = M(".mob-tr-close"), this.$mobHead = M("#mobhead"), this.$mobMenu = this.$mobHead.find(".mobile-navigation").add(M("#mob-menu-wrap").find(".mobile-navigation")), this.$mobMenuChildren = this.$mobMenu.find(".menu-item-has-children"), this.thePaged = zeenJS.qry.paged || 1, this.audio = new Audio, this.video = document.createElement("video"), this.ajaxCall = "", this.ajaxData = {}, this.wooArchive = "", this.$products = "", this.headAreaHeight = 0
        },
        verticalMenus: function() {
            0 !== this.$verticalMenu.length && this.$verticalMenu.addClass("v-70-vis")
        },
        data: function() {
            this.$docHeight = this.$doc.height(), this.$winWidth = this.$win.width(), this.$winHeight = this.$win.height() + 1, this.$headerHeight = this.$header.outerHeight(!0), this.$wpAdminBarHeight = 0, this.$wpAdminBarHeightNeg = 0, this.$body.hasClass("admin-bar") && !this.$body.hasClass("tipi-builder-frame-inner") && (this.$wpAdminBarHeight = 783 < this.$winWidth ? 32 : 46, this.$wpAdminBarHeightNeg = "-" + this.$wpAdminBarHeight), this.mmAni = 0, this.$body.hasClass("mm-ani-3") && (this.mmAni = 3), (this.$body.hasClass("term-woocategory") || this.$body.hasClass("post-type-archive-product") || this.$body.hasClass("woocommerce-page")) && (this.wooArchive = !0, this.$products = this.$entryContentWrap.find(".products")), I.$winWidth < 767 ? this.headAreaHeight = this.$mobHead.outerHeight() : ((this.$header.hasClass("sticky-menu-1") || this.$header.hasClass("sticky-menu-3")) && (this.headerIsSticky = !0, this.headAreaHeight = this.$headerHeight), (this.$siteNav.hasClass("sticky-menu-1") || this.$siteNav.hasClass("sticky-menu-3")) && (this.headerIsSticky = !1, this.headAreaHeight = this.$siteNav.outerHeight()));
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function() {
                        t = !0
                    }
                });
                window.addEventListener("zeen", e, e), window.removeEventListener("zeen", e, e)
            } catch (e) {
                t = !1
            }
            this.$listener = !!t && {
                passive: !0
            }
        },
        bind: function() {
            this.$win.on("resize", this.resize.bind(this)), this.$win.on("orientationchange", this.orientationchange.bind(this)), this.$toTop.on("click", this.toTopInit), this.$doc.on("keyup", this.keyUp.bind(this)), this.$body.on("click touchstart", ".block-more", this.blockMore), this.$body.on("click", ".inf-load-more", this.loadMoreButton), this.$body.on("click", ".media-tr, .modal-tr", this.modalOn), this.$body.on("click", ".close, .tipi-overlay", this.modalOff), this.$body.hasClass("body--mobile--limit") && this.$body.on("click", ".mobile--limiter", this.mobLimiter), 0 < this.$modalSearchFound.length && this.$modalSearchField.on("keyup", this.liveSearch), 0 < this.$skinMode.length && this.$skinMode.on("click", this.skinMode), 0 < this.$dropSearchFound.length && this.$dropSearchField.on("keyup", function(e) {
                var t = M(this).parent().parent(),
                    i = {
                        field: M(this),
                        wrapper: t,
                        ppp: 2,
                        results: t.find(".content-found")
                    };
                I.liveSearch(e, i)
            }), (0 < this.$dropSearchFound.length || this.$modalSearchFound.length) && this.$searchResults.on("click", this.liveSearchTr), this.$body.on("click", ".trending-op", this.trending), this.$mobMenuClose.on("click", this.closeMobMenu.bind(this)), this.$mobMenuOpen.on("click", this.openMobMenu.bind(this)), this.$mobMenu.on("click", ".open-child", this.verticalMenuShow), this.$slideMenuOpen.on("click", this.openSlideMenu.bind(this)), this.$toolTip.on("mouseenter", this.toolTipInit), this.$body.on("click", ".tipi-like-count", this.likes), this.$slideInX.on("click", this.slideInPX.bind(this)), this.$slideForm.on("submit", this.slideInSubmit.bind(this)), this.$sorter.on("click", this.sorter), this.$body.on("click", ".tipi-basket-remove", this.removeBasket), this.$body.on("click", "#qty-plus", this.qtyArrowChange), this.$body.on("click", "#qty-minus", this.qtyArrowChange), this.$doc.on("updated_wc_div", function() {
                I.qtyArrows()
            }), this.$win.load(function() {
                I.loaded()
            }), this.$dropperChild.hoverIntent(this.blockMore), this.$dropper.hoverIntent(function(e) {
                var t = M(this);
                if (t.addClass("active active-1"), 3 === I.mmAni) {
                    var i = t.find("> .menu");
                    i.hasClass("mm-1") && (i = i.find("> .menu-wrap > .sub-menu")), i.css({
                        visibility: "visible",
                        opacity: "1"
                    }).hide().stop().slideDown(200)
                }
            }, function() {
                var e = M(this);
                if (e.removeClass("active"), 3 === I.mmAni) {
                    var t = e.find("> .menu");
                    t.hasClass("mm-1") && (t = t.find("> .menu-wrap > .sub-menu")), t.stop().slideUp(200)
                }
            })
        },
        trending: function(e) {
            var t = M(this),
                i = t.parent().data("uid"),
                s = M("#block-wrap-" + i),
                a = s.find(" > div");
            if (!a.hasClass("loading")) {
                var o = t.data("r"),
                    n = "now";
                1 === o ? o = 2 : n = 2 === o ? (o = 7, "week") : (o = 30, "month"), t.siblings().removeClass("trending-selected"), t.addClass("trending-selected");
                var r = "zeen_" + i,
                    l = window[r],
                    d = {
                        blockData: l,
                        $blockData: s,
                        changer: !1,
                        append: 2,
                        manual: !0,
                        response: ""
                    };
                M.ajax({
                    method: "GET",
                    data: {
                        uid: i,
                        mm: !0,
                        excerpt_off: !0,
                        counter: !0,
                        counter_class: "border",
                        byline_off: !0,
                        review_off: !0,
                        data: l,
                        trending: ["zeen-trending-" + n, o]
                    },
                    dataType: "html",
                    url: zeenJS.root + "block",
                    beforeSend: function(e) {
                        if (a.addClass("loading"), e.setRequestHeader("X-WP-Nonce", zeenJS.nonce), I.ajaxChecker(r + "_" + o)) return d.response = I.ajaxGetter(r + "_" + o), I.ajaxLoadMore(d), s.addClass("loaded"), !1
                    },
                    success: function(e) {
                        e = JSON.parse(e), d.response = e, I.ajaxLoadMore(d), I.ajaxSetter(r + "_" + o, e), s.addClass("loaded")
                    },
                    fail: function(e) {
                        console.log("ERROR", e)
                    }
                })
            }
        },
        anchorTouch: function() {
            var o = "ontouchstart" in document.documentElement;
            this.$dropper.each(function(e, t) {
                var i = M(this),
                    s = i.find("> a"),
                    a = s.attr("href");
                if (void 0 !== a && -1 < a.indexOf("#") && s.on("click.anchor", function(e) {
                        var t = 0,
                            i = document.getElementById(a.split("#")[1]);
                        if ("#" !== a) {
                            if (!i) return;
                            t = zenscroll.getTopOf(i)
                        }
                        e.preventDefault(), zenscroll.toY(t - I.headAreaHeight - I.$wpAdminBarHeight, null)
                    }), !1 === o) return !0;
                0 < i.find("> .menu").length && s.on("click", function(e) {
                    var t = M(this);
                    if (i.siblings(".tapped").removeClass("tapped"), (0 === i.find(".menu").length && 0 === i.find(".sub-menu").length || i.hasClass("tapped")) && "#" !== t.attr("href")) return !0;
                    e.preventDefault(), i.addClass("tapped")
                })
            })
        },
        topBlock: function() {
            if (0 !== this.$topBlock.length && !this.$topBlock.hasClass("standard-ani") && !this.$topBlock.hasClass("loaded")) {
                var s = this;
                this.$topBlock.imagesLoaded().always(function(e) {
                    var t = s.$topBlock.outerHeight(!0),
                        i = {
                            y: 100,
                            opacity: .3
                        };
                    767 < s.$winWidth && (s.$topBlock.hasClass("zeen-top-block-92") || s.$topBlock.hasClass("zeen-top-block-94")) && (i = {
                        opacity: .3
                    }), new ScrollMagic.Scene({
                        triggerElement: "body",
                        offset: 0,
                        duration: t,
                        triggerHook: 0
                    }).setTween(s.$topBlock.find("img"), i).addTo(I.$controller), s.$topBlock.addClass("loaded")
                })
            }
        },
        anis: function(e) {
            this.tempAni(), this.loopAni(), this.blockAni()
        },
        tempAni: function() {
            for (var e = document.getElementsByClassName("ani-base"), i = new IntersectionObserver(function(e) {
                    e.forEach(function(t) {
                        if (t.isIntersecting) {
                            imagesLoaded(t.target, function(e) {
                                t.target.classList.add("article-window")
                            }), t.target.classList.remove("article-ani");
                            var e = t.target.getElementsByClassName("lets-review-api-wrap");
                            0 < e.length && (t.target.parentElement.classList.contains("preview-review-bot") || t.target.parentElement.parentElement.classList.contains("preview-review-bot")) && setTimeout(function() {
                                t.target.classList.add("review-ani-done"), TweenLite.fromTo(e[0], 1, {
                                    width: "0"
                                }, {
                                    width: e[0].getAttribute("data-api-100") + "%",
                                    ease: Power2.easeOut
                                })
                            }, 300), i.unobserve(t.target)
                        }
                    })
                }, {
                    threshold: [0]
                }), t = e.length - 1; 0 <= t; t--) e[t].classList.contains("article-window") || i.observe(e[t]);
            var s = document.getElementsByClassName("block-to-see"),
                a = new IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                        e.isIntersecting && (e.target.classList.add("tipi-seen"), a.unobserve(e.target))
                    })
                }, {
                    threshold: [0],
                    rootMargin: "-100px 0px"
                });
            for (t = s.length - 1; 0 <= t; t--) s[t].classList.contains("tipi-seen") || a.observe(s[t]);
            if (!0 === zeenJS.args.lazy) {
                var o = document.getElementsByClassName("zeen-lazy-load"),
                    n = new IntersectionObserver(function(e) {
                        e.forEach(function(e) {
                            if (e.isIntersecting) {
                                var i = M(e.target);
                                i.attr("src", i.attr("data-zeen-src")).removeAttr("data-zeen-src").attr("srcset", i.attr("data-zeen-srcset")).removeAttr("data-zeen-srcset").attr("sizes", i.attr("data-zeen-sizes")).removeAttr("data-zeen-sizes"), i.imagesLoaded(function() {
                                    i.removeClass("zeen-lazy-load").addClass("zeen-lazy-loaded");
                                    var e = i.closest("article");
                                    if (e.hasClass("masonry-child")) {
                                        var t = e.closest(".block-masonry");
                                        !0 === !!t.data("masonry") ? t.masonry("layout") : I.masonryInit()
                                    }
                                }), n.unobserve(e.target)
                            }
                        })
                    }, {
                        threshold: [0],
                        rootMargin: "300px 0px"
                    });
                for (t = o.length - 1; 0 <= t; t--) o[t].classList.contains("zeen-lazy-loaded") || n.observe(o[t])
            }
        },
        mobLimiter: function(e) {
            e.preventDefault(), M(this).closest(".post-wrap").addClass("mobile--limiter--more")
        },
        loopAni: function(e) {
            this.$winWidth < 1200 || this.$primary.find("> .post-wrap").each(function() {
                var e = M(this);
                if (e.hasClass("loop-ani-checked")) return !0;
                if (e.hasClass("align-fade-up") || e.hasClass("align-fade-up-done"))
                    for (var t = e.hasClass("align-fade-up") ? "fade-up" : "fade-up-done", i = e.find(".alignleft, .alignright"), s = new IntersectionObserver(function(e) {
                            e.forEach(function(e) {
                                0 < e.boundingClientRect.top && (e.target.classList.add("tipi-seen"), "fade-up-done" === t && s.unobserve(e.target), !1 === e.isIntersecting && e.target.classList.remove("tipi-seen"))
                            })
                        }, {
                            threshold: [0],
                            rootMargin: "500px 0px 0px 0px"
                        }), a = i.length - 1; 0 <= a; a--) s.observe(i[a]);
                e.addClass("loop-ani-checked")
            })
        },
        blockAni: function() {
            var e = document.getElementsByClassName("block-ani");
            if (0 !== e.length)
                for (var t = new IntersectionObserver(function(e) {
                        e.forEach(function(e) {
                            e.isIntersecting && (e.target.classList.add("loaded"), t.unobserve(e.target))
                        })
                    }, {
                        threshold: [0]
                    }), i = e.length - 1; 0 <= i; i--) e[i].classList.contains("loaded") || t.observe(e[i])
        },
        twitchLoad: function() {
            var e = document.getElementsByClassName("twitch");
            if (0 !== e.length)
                for (var i = new IntersectionObserver(function(e) {
                        e.forEach(function(e) {
                            if (e.isIntersecting) {
                                var t = M(e.target);
                                t.append('<iframe width="1280" height="720" scrolling="no" frameborder="0" class="twitch-frame" src="' + t.data("src") + '" frameborder="0" seamless="seamless" allowfullscreen="true"></iframe>'), t.find("iframe").load(function() {
                                    t.addClass("ani-in loaded")
                                }), i.unobserve(e.target)
                            }
                        })
                    }, {
                        threshold: [0]
                    }), t = e.length - 1; 0 <= t; t--) e[t].classList.contains("loaded") || i.observe(e[t])
        },
        sorter: function() {
            var e = M(this);
            e.hasClass("load-more-wrap") || I.activeFocus(e)
        },
        activeFocus: function(t) {
            if (t.hasClass("active")) return t.blur(), void t.removeClass("active");
            t.addClass("active"), "ontouchstart" in document.documentElement ? (I.$doc.on("touchstart", function(e) {
                t.removeClass("active"), I.$doc.off("touchstart"), t.off("touchstart")
            }), t.on("touchstart", function(e) {
                e.stopPropagation()
            })) : (t.focus(), t.on({
                focusout: function() {
                    t.data("timer", setTimeout(function() {
                        t.removeClass("active"), t.off("focusin focusout")
                    }, 0))
                },
                focusin: function() {
                    clearTimeout(t.data("timer"))
                }
            }))
        },
        loading: function(e, t) {
            "on" === t ? e.addClass("loading") : e.removeClass("loading")
        },
        slideInP: function() {
            if (!(0 === this.$slideIn.length || this.$winWidth < 767)) {
                var e = this.$content,
                    t = 2 * this.$winHeight;
                this.$slideIn.hasClass("slide-in-2") && 0 < this.$entryContentWrap.length && (t = (e = this.$entryContentWrap).outerHeight(!0)), t + e.offset().top > this.$docHeight && (t = e.offset().top), this.$body.hasClass("single-product") && (t *= .4), this.slideInScene = new ScrollMagic.Scene({
                    triggerElement: e,
                    offset: t,
                    triggerHook: .75
                }).addTo(I.$controller).setClassToggle(this.$body, "slide-in-active").setClassToggle(this.$slideIn, "active")
            }
        },
        slideInPX: function() {
            this.$body.removeClass("slide-in-active"), this.$slideIn.hasClass("slide-in-1") && this.turnItOff(1), this.$slideIn.hasClass("slide-in-2") && this.turnItOff(2), this.slideInScene.destroy(!0)
        },
        slideInSubmit: function() {
            this.turnItOff(1)
        },
        turnItOff: function(e) {
            1 === e ? Cookies.set("wp_sliding_box", "off", {
                expires: zeenJS.args.cookieDuration
            }) : 2 === e ? Cookies.set("wp_sliding_box_p", "off", {
                expires: zeenJS.args.cookieDuration
            }) : 3 === e ? Cookies.set("wp_timed_pp", "off", {
                expires: zeenJS.args.cookieDuration
            }) : 4 === e ? Cookies.set("wp_top_bar", "off", {
                expires: zeenJS.args.cookieDuration
            }) : 5 === e && Cookies.set("subL", "off", {
                expires: zeenJS.args.cookieDuration
            })
        },
        topBarMsg: function() {
            0 !== this.$topBarMsg.length && M("#top-bar-message-close").on("click", function() {
                var e = M(this);
                I.$topBarMsg.slideUp(), e.off("click"), I.turnItOff(4)
            })
        },
        timedPup: function() {
            if (0 !== this.$timedPup.length) {
                var e = this.$timedPup.data("t"),
                    t = this.$timedPup.data("d"),
                    i = this;
                void 0 === e ? e = 15e3 : e *= 1e3, setTimeout(function() {
                    i.modalOff(), i.$body.addClass("modal-active"), i.$baseOverlay.addClass("active"), i.$timedPup.addClass("active"), 1 === t && i.$baseOverlay.on("click", function() {
                        i.turnItOff(3), i.$baseOverlay.off("click")
                    })
                }, e)
            }
        },
        postTracks: function() {
            0 === this.$progress.length && 0 === this.$mobBotShare.length || this.$entryContent.each(function(e, t) {
                var i = M(t);
                if (i.hasClass("sticky-el")) return !0;
                i.addClass("progresson"), i.find("img").imagesLoaded(function() {
                    var e = i.outerHeight(!0),
                        t = new ScrollMagic.Scene({
                            triggerElement: i,
                            duration: e,
                            triggerHook: .5
                        }).addTo(I.$controller).on("enter leave", function(e) {
                            "leave" === e.type ? I.$progress.add(I.$mobBotShare).addClass("inactive").removeClass("active") : I.$progress.add(I.$mobBotShare).removeClass("inactive").addClass("active")
                        });
                    0 !== I.$progress.length && (I.$winHeight < e + 50 || I.$body.hasClass("ipl-done")) && t.setTween(TweenLite.fromTo(I.$progress, 3, {
                        width: "0"
                    }, {
                        width: "100%",
                        ease: Power0.easeNone
                    }))
                })
            })
        },
        keyUp: function(e) {
            if (!this.$modal.hasClass("inactive") || this.$body.hasClass("slide-menu-open")) {
                !1 !== ("key" in e ? "Escape" === e.key || "Esc" === e.key : 27 === e.keyCode) && (this.closeSlideMenu(e), this.modalOff())
            }
        },
        masonryInit: function() {
            M(".block-masonry").each(function() {
                var e = M(this),
                    t = !!e.data("masonry");
                e.removeClass("loaded"), !0 === t && e.masonry("destroy"), I.masonry(e)
            })
        },
        masonry: function(e) {
            if (0 !== e.length) var t = e.imagesLoaded().always(function(e) {
                M(e.elements).find("article").addClass("fully-loaded"), t.masonry({
                    itemSelector: "article",
                    percentPosition: !0,
                    hiddenStyle: {
                        transform: "translateY(60px)",
                        opacity: 0
                    },
                    visibleStyle: {
                        transform: "translateY(0px)",
                        opacity: 1
                    }
                }), t.one("layoutComplete", function(e, t) {
                    M(this).addClass("loaded")
                })
            })
        },
        header: function(e) {
            if (767 < this.$winWidth) {
                var t = !1;
                if (this.$header.hasClass("sticky-top") && !this.$header.hasClass("evented")) {
                    var i = this.getDetails(this.$header);
                    window.addEventListener("scroll", function(e) {
                        var t = window.pageYOffset || document.documentElement.scrollTop;
                        I.ticking || (window.requestAnimationFrame(function() {
                            t > Math.min(45, I.$headerHeight) && t >= i.top - I.$wpAdminBarHeight ? -1 === I.$body[0].className.indexOf("sticky-header--active") && (I.$body[0].className += " sticky-header--active") : I.$body[0].classList.remove("sticky-header--active"), I.ticking = !1
                        }), I.ticking = !0)
                    }, I.$listener), t = !0, this.$header.addClass("evented")
                }
                if (t || this.$header.hasClass("sticky-menu")) {
                    var s = this.$header.find(".logo-main img");
                    s.imagesLoaded(function() {
                        s.css("height", "").css("height", s.height()), I.$header.css("height", "").css("height", I.$headerHeight).addClass("size-set")
                    })
                }
            }
        },
        mobileMenuClass: function() {
            this.$mobMenuChildren.find("> a").after('<a href="#" class="open-child"><i class="tipi-i-chevron-down"></i></a>')
        },
        verticalMenuShow: function(e) {
            e.preventDefault();
            var t = M(this),
                i = t.parent(),
                s = i.siblings(".menu-item-has-children");
            s.find("> .opened-child").removeClass("opened-child"), s.find("> .child-is-open").removeClass("child-is-open");
            var a = i.find("> .sub-menu");
            t.hasClass("child-is-open") ? (t.removeClass("child-is-open"), a.removeClass("opened-child")) : (t.addClass("child-is-open"), a.addClass("opened-child"))
        },
        secondaryImgs: function(e) {
            var t = M(this);
            "mouseenter" === e.type ? t.addClass("hovering") : t.removeClass("hovering")
        },
        stickyCheck: function() {
            var e = document.createElement("a").style;
            e.cssText = "position:sticky;position:-webkit-sticky;", this.$stickyOff = -1 !== e.position.indexOf("sticky"), !1 === this.$stickyOff && this.$body.addClass("sticky-disabled")
        },
        stickyEl: function() {
            var s;
            0 !== this.headAreaHeight && !1 !== this.$stickyOff && M(".sticky-el").each(function(e, t) {
                var i = M(this);
                s = i.hasClass("block-wrap") && 0 < parseInt(i.find("> .tipi-row-inner-style").css("padding-top")) ? 0 : 30, I.$winWidth < 767 && (s = 15), i.css("top", I.headAreaHeight + I.$wpAdminBarHeight + s)
            })
        },
        sticky: function() {
            0 !== this.$stickyMenu.length && this.$stickyMenu.each(function(e, t) {
                var i = M(t);
                if (!((i.hasClass("site-header") || i.hasClass("stickied")) && I.$winWidth < 768 || (i.hasClass("site-mob-header") || i.hasClass("stickied")) && 767 < I.$winWidth)) {
                    i.addClass("stickied");
                    var s, a, o = M("#header-line"),
                        n = 120;
                    i.hasClass("site-mob-header") && (n = I.$winHeight, o = M("#mob-line"));
                    var r, l = i.outerHeight(!0);
                    i.hasClass("sticky-menu-2") ? (a = 2, i.addClass("still"), r = new ScrollMagic.Scene({
                        triggerElement: o,
                        triggerHook: 0
                    }).addTo(I.$controller).on("update", function(e) {
                        e.scrollPos > e.startPos + 1 && ("FORWARD" === I.$controller.info("scrollDirection") ? i.removeClass("active") : "REVERSE" === I.$controller.info("scrollDirection") && i.addClass("active").removeClass("still"));
                        var t = parseInt(e.startPos - l - I.$wpAdminBarHeight + 1);
                        t < 1 && (t = 1), e.scrollPos < t && i.removeClass("stuck active").addClass("still")
                    }).on("enter", function(e) {
                        i.addClass("stuck")
                    })) : i.hasClass("sticky-menu-3") ? (a = 3, r = new ScrollMagic.Scene({
                        triggerElement: o,
                        triggerHook: 0,
                        offset: n
                    }).addTo(I.$controller).on("update", function(e) {
                        e.scrollPos > e.startPos ? i.addClass("slidedown stuck") : (e.scrollPos < e.startPos - l - I.$wpAdminBarHeight - n + 1 || 0 === e.scrollPos) && i.removeClass("slidedown stuck")
                    }), I.$body.hasClass("single-post") && i.hasClass("main-navigation") && (s = !0)) : !i.hasClass("sticky-menu-1") && !i.hasClass("sticky-menu-4") || i.hasClass("site-mob-header") || (a = 1, r = new ScrollMagic.Scene({
                        triggerElement: o,
                        triggerHook: 0,
                        offset: -1 * I.$wpAdminBarHeight
                    }).addTo(I.$controller), I.$body.hasClass("single-post") && i.hasClass("main-navigation") && (s = !0)), !0 === s ? (r.on("update", function(e) {
                        e.scrollPos > e.startPos && i.addClass("stuck"), e.scrollPos > e.startPos + I.$winHeight / 2 && (i.addClass("stuck-full"), "FORWARD" === I.$controller.info("scrollDirection") ? i.removeClass("stuck-up") : "REVERSE" === I.$controller.info("scrollDirection") && i.addClass("stuck-up"))
                    }), r.on("leave", function(e) {
                        i.removeClass("stuck-up stuck-full stuck")
                    })) : 2 !== a && r.on("update", function(e) {
                        e.scrollPos > e.startPos ? i.addClass("stuck") : i.removeClass("stuck")
                    }), i.hasClass("site-mob-header") ? I.stickyMobMenu = r : I.stickyMenu = r
                }
            })
        },
        liveSearchTr: function(e) {
            e.preventDefault(), M(this).closest(".search-form-wrap").find("> form").trigger("submit")
        },
        liveSearch: function(e, t) {
            void 0 === t && (t = {
                field: I.$modalSearchField,
                wrapper: I.$modalSearch,
                results: I.$modalSearchFound
            }), I.timer && clearTimeout(I.timer), -1 === M.inArray(e.keyCode, I.ignoreCodes) && (I.timer = setTimeout(I.searchAjax(t), 700))
        },
        searchAjax: function(i) {
            var e = i.field.val();
            if (i.wrapper.removeClass("with-results"), e.length < 2) i.wrapper.addClass("zero-typo");
            else {
                var t = 3;
                void 0 !== i.ppp && (t = i.ppp, 1), M.ajax({
                    method: "GET",
                    url: zeenJS.root + "s?kw=" + e + "&ppp=" + t,
                    dataType: "html",
                    beforeSend: function(e) {
                        e.setRequestHeader("X-WP-Nonce", zeenJS.nonce), i.wrapper.css("height", i.wrapper.height())
                    },
                    success: function(e) {
                        i.results.empty(), i.results.append(e), i.wrapper.removeClass("zero-typo");
                        var t = i.results.find("article");
                        0 === t.length ? i.wrapper.addClass("no-results-found") : (i.wrapper.removeClass("no-results-found"), (t.length + 1) % 3 == 0 && i.results.find(".block").append("<article></article>")), t.imagesLoaded(function() {
                            I.blockAni(), i.wrapper.css("height", "auto")
                        }), i.wrapper.addClass("with-results with-results-cache")
                    },
                    fail: function(e) {
                        console.log("ERROR", e)
                    }
                })
            }
        },
        mediaPlay: function() {
            I.video.play(), I.audio.play()
        },
        mediaStop: function() {
            I.audio.pause(), I.video.pause()
        },
        subL: function() {
            !1 !== zeenJS.args.subL && "off" !== Cookies.get("subL") && document.documentElement.addEventListener("mouseleave", I.subE, I.$listener)
        },
        modalSubscribe: function() {
            I.$modal.addClass("active active-4").removeClass("inactive"), I.$body.addClass("modal-active"), setTimeout(function() {
                I.$modal.find(".content-subscribe input[type=email]").focus()
            }, 400)
        },
        modalOn: function(e) {
            e.preventDefault();
            var t, i = M(this),
                s = i.data();
            (I.$body.hasClass("modal-skin-2") || ("frame" == s.type || "qv" == s.type || "embed" == s.type || "46" == s.type ? I.$modal.addClass("dark-overlay").removeClass("light-overlay") : I.$modal.addClass("light-overlay").removeClass("dark-overlay")), "frame" != s.type && "embed" != s.type && "46" != s.type || ("ext" == s.source ? t = "" === s.src ? '<span class="embed-error">' + zeenJS.i18n.embedError + "</span>" : '<iframe width="560" height="315"  class="frame" src="' + s.src + '" frameborder="0" seamless="seamless" allow="autoplay" allowfullscreen></iframe>' : ("audio" === s.format && (I.audio.canPlayType("audio/mpeg;") ? (I.audio.type = "audio/mpeg", "" !== s.srcA && (I.audio.src = s.srcA)) : (I.audio.type = "audio/ogg", "" !== s.srcB && (I.audio.src = s.srcB)), I.audio.controls = !0, t = I.audio, I.mediaPlay()), "video" === s.format && (I.video.canPlayType("video/mp4;") ? (I.video.type = "video/mp4", "" !== s.srcA && (I.video.src = s.srcA)) : (I.video.type = "video/ogg", "" !== s.srcB && (I.video.src = s.srcB)), I.video.setAttribute("controls", "controls"), I.video.setAttribute("controlsList", "nodownload"), I.mediaPlay(), t = I.video), setTimeout(function() {
                I.$modalCustom.addClass("ani-in")
            }, 350))), "frame" == s.type) && (I.audio = new Audio, I.video = document.createElement("video"), I.$modalCustom.addClass("is-" + s.format).append(t), I.$modal.addClass("active active-1").removeClass("inactive"), I.$body.addClass("modal-active"), I.$modalCustom.addClass("tipi-spin ani-in"), "ext" == s.source ? I.$modalCustom.find("iframe").load(function() {
                I.$modalCustom.addClass("frame-ldd").removeClass("tipi-spin")
            }) : I.$modalCustom.find("audio, video").on("loadstart", function() {
                I.$modalCustom.addClass("frame-ldd").removeClass("tipi-spin")
            }));
            if ("embed" == s.type) {
                var a = i.closest(".hero-wrap");
                if (a.hasClass("active-embed")) return;
                var o = parseInt(8999 * Math.random() + 1e3);
                a.append('<div id="frame-wrap-' + o + '" class="frame-wrap"></div>').addClass("active-embed is-" + s.format).removeClass("inactive-embed"), M("#frame-wrap-" + o).append(t)
            }
            if ("46" == s.type) {
                var n = i.closest("article");
                if (n.hasClass("playing")) return;
                var r = M("#block-wrap-" + s.target).find(".block-piece-1"),
                    l = r.find(".mask");
                r.addClass("loading-embed").removeClass("active-embed"), l.html('<div class="frame-wrap-46-pad"><div id="frame-wrap-' + s.target + '" class="frame-wrap tipi-spin frame-wrap-46"></div></div>'), M("#frame-wrap-" + s.target).append(t), setTimeout(function() {
                    r.addClass("active-embed embed-ldd-once")
                }, 150), i.hasClass("icon-size-s") && n.addClass("playing").siblings().removeClass("playing")
            }
            return "search" == s.type && (I.$modal.addClass("active active-3").removeClass("inactive"), I.$body.addClass("modal-active"), 1024 < I.$winWidth && setTimeout(function() {
                I.$modalSearchField.focus()
            }, 500)), "subscribe" == s.type && I.modalSubscribe(), "lwa" == s.type && (I.$modal.addClass("active active-2").removeClass("inactive"), I.$body.addClass("modal-active"), setTimeout(function() {
                I.$modal.find(".lwa-username > input").focus()
            }, 700)), "search-drop" == s.type && (I.activeFocus(i.closest(".drop-search-wrap")), setTimeout(function() {
                i.parent().find(".search-field").focus()
            }, 250)), "qv" == s.type && (I.$modal.addClass("active active-qv").removeClass("inactive"), I.$body.addClass("modal-active"), I.ajaxCall = M.ajax({
                method: "GET",
                dataType: "html",
                url: zeenJS.root + "qv?id=" + s.pid,
                beforeSend: function(e) {
                    I.$modal.addClass("tipi-spin"), I.$modalCustom.empty().removeClass("is-video is-audio")
                },
                success: function(e) {
                    I.$modalCustom.html(e), I.qtyArrows(), I.$modalCustom.find("img").imagesLoaded().always(function(e) {
                        I.$modal.removeClass("tipi-spin"), setTimeout(function() {
                            I.$modalCustom.addClass("ani-in")
                        }, 50)
                    })
                },
                fail: function(e) {
                    console.log("ERROR", e)
                }
            })), !1
        },
        modalOff: function(e) {
            void 0 !== e && e.preventDefault(), I.closeSlideMenu(e), I.mediaStop();
            var t = 0;
            I.$modalCustom.hasClass("ani-in") && (I.$modalCustom.removeClass("ani-in"), t = 220), I.$modal.removeClass("active active-qv active-4 active-3 active-2 active-1").addClass("inactive"), I.$body.removeClass("modal-active"), I.$timedPup.removeClass("active"), setTimeout(function() {
                I.$modalCustom.empty().removeClass("is-video is-audio")
            }, t), setTimeout(function() {
                I.$modalSearch.removeClass("with-results-cache with-results"), I.$modalSearchField.val("")
            }, 600), I.$body.hasClass("sub-l") && I.turnItOff(5)
        },
        parallax3s: function(e) {
            if (!this.$body.hasClass("tipi-builder-frame-inner") || !0 === e) {
                var t = M(".block-65");
                0 === t.length || this.$winWidth < 480 || t.find("> article").each(function(e, t) {
                    var i = M(t);
                    if (i.hasClass("parallaxed3s")) return !0;
                    i.addClass("parallaxed3s"), i.imagesLoaded(function() {
                        var e = i.outerHeight(!0),
                            t = i.hasClass("odd") ? .35 * e : .15 * e;
                        new ScrollMagic.Scene({
                            triggerElement: i,
                            triggerHook: 1,
                            offset: 0,
                            duration: I.$winHeight + e
                        }).setTween(TweenLite.fromTo(i.find("> .preview-mini-wrap"), 1, {
                            y: t,
                            ease: Linear.easeNone,
                            force3D: !0
                        }, {
                            y: "-" + t,
                            ease: Linear.easeNone,
                            force3D: !0
                        })).addTo(I.$parallax3sController)
                    })
                })
            }
        },
        cta: function() {
            var e = M(".block-wrap-cta");
            0 !== e.length && e.each(function(e, t) {
                var i, s = M(this),
                    a = s.find(".img-tag-bg");
                i = 0 === a.length ? (a = s.find(".video-wrap")).find("iframe") : a.find(".bg"), a.imagesLoaded({
                    background: !0
                }, function() {
                    if (a.hasClass("cta-parallax") && !s.hasClass("parallaxed")) {
                        var e = a.outerHeight() + I.$winHeight;
                        new ScrollMagic.Scene({
                            triggerElement: a,
                            triggerHook: 1,
                            duration: e
                        }).setTween(TweenLite.fromTo(i, 1, {
                            y: "-20%",
                            scale: 1,
                            ease: Linear.easeNone
                        }, {
                            y: "20%",
                            scale: 1.15,
                            ease: Linear.easeNone
                        })).addTo(I.$parallaxItCont), s.addClass("parallaxed")
                    }
                    setTimeout(function() {
                        s.addClass("cta-img-ldd")
                    }, 200)
                })
            })
        },
        noPar: function(e) {
            var t = M(".no-par");
            0 !== t.length && t.imagesLoaded(function() {
                t.addClass("mask-loaded")
            })
        },
        parallaxIt: function(e) {
            var t = M(".parallax");
            0 === t.length || this.$body.hasClass("tipi-builder-frame-inner") && !0 !== e || t.each(function(e, t) {
                var c = M(this);
                if (!c.hasClass("parallaxed")) {
                    c.addClass("parallaxed");
                    var h = 1.1,
                        p = c.find("img:not(.avatar)");
                    c.hasClass("parallax-min") && (h = 1.185), p.imagesLoaded(function() {
                        var e = p.height(),
                            t = .2 * e + "px",
                            i = e + I.$winHeight,
                            s = 1;
                        if (I.$winHeight > I.$winWidth && (t = .125 * e + "px", s = 2), c.hasClass("hero-wrap")) {
                            !0, h = 1.05;
                            var a = parseInt(p.attr("height")),
                                o = parseInt(p.attr("width")),
                                n = c.width();
                            n < o && (a = Math.floor(a / (o / n)));
                            var r = c.closest(".post-wrap"),
                                l = .9;
                            if (r.hasClass("hero-m") ? h = 1.1 : r.hasClass("hero-l") && (h = 1.15, l = .95), o < a ? (c.addClass("is-portrait"), 2) : 2 === s && (l = .9), c.hasClass("cover-11") || r.hasClass("hero-s")) {
                                var d = e * l;
                                I.$winHeight, I.$headerHeight, I.$wpAdminBarHeight, I.$siteNav.outerHeight(), I.$secondaryWrap.outerHeight();
                                TweenLite.to(c, .5, {
                                    height: d
                                })
                            }
                        }
                        new ScrollMagic.Scene({
                            triggerElement: c,
                            triggerHook: 1,
                            duration: i
                        }).setTween(TweenLite.fromTo(p, 1, {
                            y: "-" + t,
                            scale: 1,
                            ease: Linear.easeNone
                        }, {
                            y: t,
                            scale: h,
                            ease: Linear.easeNone
                        })).addTo(I.$parallaxItCont), setTimeout(function() {
                            c.addClass("mask-loaded")
                        }, 450)
                    })
                }
            })
        },
        hero31: function() {
            if (0 !== this.$hero31.length) {
                var e = "";
                this.$hero31.closest(".post-wrap").hasClass("format-gallery") ? (e = this.$hero31.find("> .slider"), this.doHero31(e)) : (e = this.$hero31.find(".fi-bg")).imagesLoaded({
                    background: !0
                }, function() {
                    e.addClass("fi-bg-ldd"), TweenLite.to(e, .3, {
                        opacity: 1
                    }), setTimeout(function() {
                        I.doHero31(e)
                    }, 300)
                })
            }
        },
        doHero31: function(e) {
            var t = new ScrollMagic.Controller,
                i = this.$winHeight - this.$wpAdminBarHeight;
            767 < I.$winWidth ? i -= this.$headerHeight - this.$siteNav.outerHeight() - this.$secondaryWrap.outerHeight() : i -= this.$mobHead.outerHeight(), i -= .1 * this.$winHeight, this.$hero31.parent().height(i), new ScrollMagic.Scene({
                triggerElement: this.$body,
                triggerHook: 0,
                offset: 0,
                duration: .1 * this.$winHeight
            }).setTween(e, {
                opacity: zeenJS.args.heroFade
            }).addTo(t), new ScrollMagic.Scene({
                triggerElement: this.$body,
                triggerHook: 0,
                offset: 0,
                duration: .1 * this.$winHeight
            }).setTween(this.$hero31.find(".mask-overlay"), {
                opacity: 1
            }).addTo(t)
        },
        loadMoreButton: function(e) {
            e.preventDefault();
            var t = M(this),
                i = t.data();
            t.hasClass("loaded") || I.loadMore(t, i)
        },
        infScr: function() {
            var e = M(".inf-scr");
            if (0 !== e.length) {
                var a, o, n = e.first().data("mnp");
                e.each(function(e, t) {
                    var i = (a = M(t)).closest(".block-wrap");
                    if (!(a.hasClass("loaded") || a.hasClass("inf-load-more") || a.hasClass("inf-scr-masonry") || i.hasClass("dt-off") && 767 < I.$winWidth || i.hasClass("mob-off") && I.$winWidth < 768)) {
                        (o = a.data()).mnp = n;
                        var s = new ScrollMagic.Scene({
                            triggerElement: a,
                            triggerHook: 1,
                            offset: -500
                        }).addTo(I.$controller).on("enter", function(e) {
                            a.hasClass("loaded") ? s.destroy() : (I.loadMore(a, o), a.addClass("loaded"))
                        })
                    }
                })
            }
        },
        likes: function(e) {
            e.preventDefault();
            var t = M(this);
            if (!t.hasClass("liking") && !t.hasClass("liked")) {
                var i = t.data();
                M.ajax({
                    method: "POST",
                    data: {
                        pid: i.pid
                    },
                    url: zeenJS.root + "lk",
                    beforeSend: function(e) {
                        t.addClass("liking"), e.setRequestHeader("X-WP-Nonce", zeenJS.nonce)
                    },
                    success: function(e) {
                        t.removeClass("liking").addClass("liked"), t.find(".tipi-value").html(e[0]), Cookies.set("wp_liked_articles", e[1], {
                            expires: zeenJS.args.cookieDuration
                        })
                    },
                    fail: function(e) {
                        console.log("ERROR", e)
                    }
                })
            }
        },
        ipl: function() {
            var e = M(".ipl");
            0 === e.length || !0 !== zeenJS.args.iplMob && I.$winWidth < 768 || e.each(function(e, t) {
                var i = (t = M(this)).data();
                if (!t.hasClass("loaded")) var s = new ScrollMagic.Scene({
                    triggerElement: M(t),
                    triggerHook: 1,
                    offset: -2 * I.$winHeight
                }).addTo(I.$controller).on("enter", function(e) {
                    t.hasClass("loaded") || (I.runIpl(t, i), t.addClass("loaded"), setTimeout(function() {
                        s.destroy(!0)
                    }, 1e3))
                })
            })
        },
        updateHref: function(e, t) {
            window.history.pushState("", e, t), "" !== e && (document.title = e)
        },
        GA: function(e) {
            "undefined" != typeof _gaq && null !== _gaq && _gaq.push(["_trackPageview", e]), "undefined" != typeof ga && null !== ga && ga("send", "pageview", e)
        },
        subE: function(e) {
            "off" !== Cookies.get("subL") || !0 !== zeenJS.args.subCookie ? I.$body.hasClass("modal-active") || 0 < e.clientY || (I.$body.addClass("sub-l"), I.modalSubscribe()) : document.documentElement.removeEventListener("mouseleave", I.subE, I.$listener)
        },
        runIpl: function(r, l) {
            void 0 === l && (r = M(this), l = r.data()), M.ajax({
                method: "GET",
                data: {
                    pid: l.pid,
                    ipl: !0
                },
                dataType: "html",
                url: zeenJS.root + "ipl",
                beforeSend: function(e) {
                    e.setRequestHeader("X-WP-Nonce", zeenJS.nonce)
                },
                success: function(e) {
                    I.$primary.append(e);
                    var i = I.$primary.find("> .post-" + l.pid),
                        t = i[0].getBoundingClientRect(),
                        s = window.pageYOffset || document.documentElement.scrollTop,
                        a = t.top + s;
                    767 < I.$winWidth && (a -= 180, (I.$header.hasClass("sticky-menu-1") || I.$header.hasClass("sticky-menu-3")) && (a -= I.$headerHeight), (I.$siteNav.hasClass("sticky-menu-1") || I.$siteNav.hasClass("sticky-menu-3")) && (a -= I.$siteNav.outerHeight())), a < s && window.scrollTo(0, a), I.sliderInit(), I.blockAni(), I.tempAni();
                    for (var o = zeenJS.args.ipl.length - 1; 0 <= o; o--) M.get(zeenJS.args.pluginsUrl + "/" + zeenJS.args.ipl[o]);
                    !0 === zeenJS.args.fbComs && !0 === zeenJS.args.iplComs && FB.XFBML.parse(i[0]), new ScrollMagic.Scene({
                        triggerElement: r,
                        triggerHook: .5,
                        offset: 0
                    }).addTo(I.$controller).on("enter leave", function(e) {
                        if (1 === e.progress) {
                            if (0 < I.$progress.length && I.$progress.css("background-color", l.nextHex), I.updateHref(l.titleNext, l.next), I.GA(l.next), I.$iplTitle.html(l.titleNext), 0 < I.$stickyP2.length && (I.$stickyP2.find(".share-button-tw").attr("href", "https://twitter.com/share?url=" + encodeURIComponent(l.next)), I.$stickyP2.find(".share-button-fb").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(l.next))), 0 < I.$mobBotShare.length && (I.$mobBotShare.find(".share-button-tw").attr("href", "https://twitter.com/share?url=" + encodeURIComponent(l.next)), I.$mobBotShare.find(".share-button-fb").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(l.next)), I.$mobBotShare.find(".share-button-msg").attr("href", "fb-messenger://share/?link=" + encodeURIComponent(l.next)), I.$mobBotShare.find(".share-button-wa").attr("href", "whatsapp://send?text=" + l.titleNext + " – " + encodeURIComponent(l.next))), !1 !== zeenJS.args.disqus) 0 < (t = i.find(".disqus-replace")).length && (M("#disqus_thread").attr("id", "").addClass("disqus-replace"), t.attr("id", "disqus_thread"), setTimeout(function() {
                                DISQUS.reset({
                                    reload: !0,
                                    config: function() {
                                        this.page.identifier = l.pid, this.page.url = l.next, this.page.title = l.titleNext
                                    }
                                })
                            }, 50))
                        } else {
                            var t;
                            if (!1 !== zeenJS.args.disqus) 0 < (t = I.$primary.find("> .post-" + l.pidori + " .disqus-replace")).length && (M("#disqus_thread").attr("id", "").addClass("disqus-replace"), t.attr("id", "disqus_thread"), setTimeout(function() {
                                DISQUS.reset({
                                    reload: !0,
                                    config: function() {
                                        this.page.identifier = l.pidori, this.page.url = l.prev, this.page.title = l.titlePrev
                                    }
                                })
                            }, 50));
                            0 < I.$progress.length && I.$progress.css("background-color", l.prevHex), I.updateHref(l.titlePrev, l.prev), I.GA(l.prev), I.$iplTitle.html(l.titlePrev), 0 < I.$stickyP2.length && (I.$stickyP2.find(".share-button-tw").attr("href", "https://twitter.com/share?url=" + encodeURIComponent(l.prev)), I.$stickyP2.find(".share-button-fb").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(l.prev))), 0 < I.$mobBotShare.length && (I.$mobBotShare.find(".share-button-tw").attr("href", "https://twitter.com/share?url=" + encodeURIComponent(l.prev)), I.$mobBotShare.find(".share-button-fb").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(l.prev)), I.$mobBotShare.find(".share-button-msg").attr("href", "fb-messenger://share/?link=" + encodeURIComponent(l.prev)), I.$mobBotShare.find(".share-button-wa").attr("href", "whatsapp://send?text=" + l.titlePrev + " – " + encodeURIComponent(l.prev)))
                        }
                    });
                    var n = new ScrollMagic.Scene({
                        triggerElement: r,
                        triggerHook: 1,
                        offset: 0
                    }).addTo(I.$controller).on("enter", function(e) {
                        I.$body.addClass("ipl-done"), i.removeClass("ipl-loading"), i.prev().addClass("ipl-bg"), I.parallaxIt(), I.noPar(), setTimeout(function() {
                            I.sidebars(), I.reSidebars(), I.stickyEl(), I.imgControl(), I.lightboxInit(), n.destroy(!0)
                        }, 750), setTimeout(function() {
                            I.postTracks()
                        }, 900)
                    });
                    I.$entryContent = M(".entry-content:not(.progresson)"), I.videoWrap(), I.stickyEl(), I.loopAni(), I.ipl(), 0 < I.$primary.find(".no-more-articles-wrap").length && M("#ipl-loader").addClass("ipl-end"), 0 < I.$skinMode.length && I.$skinMode.hasClass("triggered") && (I.$skinMode.hasClass("mode--dark") ? i.removeClass("article-layout-skin-1").addClass("article-layout-skin-2") : i.removeClass("article-layout-skin-2").addClass("article-layout-skin-1"))
                },
                fail: function(e) {
                    console.log("ERROR", e)
                }
            }), M(".inf-scr").removeClass("active")
        },
        blockMore: function(e) {
            var t = M(this);
            if (t.hasClass("block-mm-changer") && "click" === e.type || e.preventDefault(), !t.hasClass("no-more") && !t.hasClass("active")) {
                var i, s, a, o;
                if (t.hasClass("block-mm-changer")) {
                    if (s = t.closest(".menu"), parseInt(s.data("mm")) < 10 || 50 < parseInt(s.data("mm"))) return;
                    i = s.find(".block-wrap"), o = a = !0
                } else(i = t.closest(".block-wrap")).parent().hasClass("menu-wrap") && (a = !0);
                var n = t.data(),
                    r = i.data(),
                    l = M("#block-wrap-" + r.id),
                    d = l.find("> div");
                if (!d.hasClass("loading")) {
                    var c, h, p = !!t.hasClass("block-changer"),
                        u = void 0 !== n.dir && 1 === n.dir ? 1 : 2,
                        f = void 0 === n.dir ? 1 : 2,
                        m = f,
                        g = {
                            term: n.term,
                            id: n.tid
                        },
                        v = "zeen_" + r.id;
                    0 === window[v].target || void 0 !== n.tid && 0 !== n.tid || (v = v + "_" + window[v].target), 0 < n.tid && (v = v + "_" + n.tid, void 0 === window[v] && (window[v] = M.extend(!0, {}, window["zeen_" + r.id]), window[v].args.cat = "", window[v].args.tag__in = "", window[v].args.post__in = "", window[v].term = "", "category" === n.term ? window[v].args.cat = n.tid : "post_tag" === n.term ? window[v].args.tag__in = n.tid : (window[v].args.tax_query = {
                        taxonomy: g.term,
                        field: "term_id",
                        terms: g.id
                    }, window[v].term = g)), window["zeen_" + r.id].target = n.tid), 1 === n.reset && (v = "zeen_" + r.id, window[v].target = 0);
                    var C = n.title,
                        $ = n.reset,
                        b = n.subtitle,
                        y = n.ur,
                        w = i.find(".block-more-2"),
                        k = i.find(".block-more-1");
                    if (0 === w.length ? w = i.find(".block-more-3") : void 0 !== n.term ? (w.data({
                            term: n.term,
                            tid: n.tid
                        }), k.data({
                            term: n.term,
                            tid: n.tid
                        })) : (w.removeData("term").removeData("tid"), k.removeData("term").removeData("tid")), !0 === p) {
                        if (c = 1, m = 2, t.hasClass("block-mm-changer")) s.find(".active").removeClass("active");
                        else {
                            var S = t.closest(".sorter");
                            S.find(".block-changer").removeClass("active"), S.find(".current-txt").html(n.sorttitle + zeenJS.args.iconSorter)
                        }
                        t.hasClass("block-mm-init") && s.find(".block-mm-init").removeClass("block-mm-init"), t.addClass("active"), window[v].next = 2, window[v].prev = 0, 1 === n.mnp && (h = "off")
                    } else window[v].mnp, window[v].next = 1 === u ? (c = window[v].prev, window[v].prev = parseInt(window[v].prev) - 1, parseInt(window[v].next) - 1) : (c = window[v].next, window[v].prev = parseInt(window[v].prev) + 1, parseInt(window[v].next) + 1);
                    var x = window[v],
                        T = {
                            blockData: x,
                            $blockData: l,
                            $elemN: w,
                            $elemP: k,
                            dir: n.dir,
                            changer: p,
                            trigger_type: f,
                            append: m,
                            loaders: h,
                            title: C,
                            newUrl: y,
                            reset: $,
                            subtitle: b,
                            response: ""
                        };
                    return M.ajax({
                        method: "GET",
                        data: {
                            paged: c,
                            type: f,
                            mm: a,
                            term: g,
                            data: x
                        },
                        dataType: "html",
                        url: zeenJS.root + "block",
                        beforeSend: function(e) {
                            if (!0 === o && s.parent().find("> a").data("ppp") >= n.count && (T.loaders = "off"), d.addClass("loading tipi-spin"), e.setRequestHeader("X-WP-Nonce", zeenJS.nonce), I.ajaxChecker(v + "_" + c)) return T.response = I.ajaxGetter(v + "_" + c), I.ajaxLoadMore(T), !0 === o ? i.closest(".mm-wrap").addClass("active-1") : !0 === a && i.closest(".mm-wrap").removeClass("active-1"), 2 === m && (1 === u ? i.removeClass("loaded block-ani-r").addClass("block-ani-l") : i.removeClass("loaded block-ani-l").addClass("block-ani-r")), I.reSidebars(), i.addClass("loaded"), !1
                        },
                        success: function(e) {
                            e = JSON.parse(e), T.response = e, I.ajaxLoadMore(T), !0 === o ? i.closest(".mm-wrap").addClass("active-1") : !0 === a && i.closest(".mm-wrap").removeClass("active-1"), I.ajaxSetter(v + "_" + c, e), i.addClass("loaded"), I.parallax3s(), 2 === m && (1 === u ? i.removeClass("block-ani-r").addClass("block-ani-l") : i.removeClass("block-ani-l").addClass("block-ani-r"))
                        },
                        fail: function(e) {
                            console.log("ERROR", e)
                        }
                    }), !1
                }
            }
        },
        ajaxLoadMore: function(e) {
            var t = M(e.response[1]);
            if (void 0 !== e.title || void 0 !== e.subtitle) {
                var i = e.$blockData.find(".block-title-wrap");
                void 0 !== e.title && (void 0 !== e.newUrl ? i.find(".block-title-url").attr("href", e.newUrl).html(e.title) : i.find(".block-title").html(e.title)), void 0 !== e.subtitle && i.find(".block-subtitle").html(e.subtitle)
            }
            var s = e.$blockData.find(".block"),
                a = s.find("> .block-masonry");
            if (0 < a.length && (s = a).addClass("masonry-ajax"), 1 === e.append) e.$blockData.hasClass("block-wrap-grid") ? s.last().after(t) : s.append(t), 0 < a.length ? s.imagesLoaded(function() {
                s.append(t), I.tempAni(), s.find("article").addClass("fully-loaded"), e.$blockData.find("> div").removeClass("loading tipi-spin"), s.masonry("appended", t), I.reSidebars()
            }) : I.reSidebars();
            else {
                if (e.$blockData.hasClass("block-wrap-grid")) {
                    if (e.$blockData.css("height", e.$blockData.height()), 1 === s.length) s.replaceWith(t);
                    else {
                        t = t.filter(function() {
                            return 1 === this.nodeType
                        });
                        for (var o = 0; o < s.length; o++) s[o].replaceWith(t[o])
                    }
                    s.imagesLoaded(function() {
                        e.$blockData.css("height", "auto")
                    })
                } else s.css("height", s.height()), s.html(t), s.imagesLoaded(function() {
                    s.css("height", "auto")
                });
                0 < a.length && (s.masonry("destroy"), I.masonry(s), s.imagesLoaded(function() {
                    I.tempAni(), s.find("article").addClass("fully-loaded"), e.$blockData.find("> div").removeClass("loading tipi-spin")
                }))
            }!0 !== e.manual && (!0 === e.changer ? "off" === e.loaders ? (e.$elemN.addClass("no-more"), e.$elemP.addClass("no-more"), e.$elemN.hasClass("block-more-3") && e.$elemN.html(zeenJS.i18n.noMore)) : (e.$elemN.removeClass("no-more"), e.$elemP.addClass("no-more"), e.$elemN.hasClass("block-more-3") && e.$elemN.html(zeenJS.i18n.loadMore)) : 1 === e.trigger_type ? "" !== e.blockData && e.blockData.next > e.response[0] && e.$elemP.html(zeenJS.i18n.noMore).addClass("no-more") : (e.$elemN.removeClass("no-more"), e.$elemP.removeClass("no-more"), "" !== e.blockData && 0 === e.blockData.prev && (e.$elemP.addClass("no-more"), e.$elemN.removeClass("no-more")), "" !== e.blockData && e.response[0] < e.blockData.next && (0 !== e.blockData.prev && e.$elemP.removeClass("no-more"), e.$elemN.addClass("no-more")))), 0 === a.length && (e.$blockData.find("> div").removeClass("loading tipi-spin"), I.fillRunner(), I.tempAni())
        },
        ajaxGetter: function(e) {
            return I.ajaxData[e]
        },
        ajaxSetter: function(e, t) {
            I.ajaxDeleter(e), I.ajaxData[e] = t
        },
        videoWrap: function() {
            M('iframe[src*="youtube"], iframe[src*="vimeo.com"], iframe[src*="dailymotion"]').each(function() {
                var e = M(this),
                    t = e.parent();
                t.hasClass("video-wrap") || t.hasClass("frame-wrap") || t.hasClass("content-custom") || e.hasClass("elementor-video-iframe") || e.hasClass("skip-video") || t.hasClass("fluid-width-video-wrapper") || e.wrap('<div class="video-wrap"></div>')
            })
        },
        videoBg: function() {
            if (767 < this.$winWidth) {
                var e = [],
                    t = this.$header.find(".bg-area > .background .media-bg"),
                    i = this.$footerBgArea.find(".background .media-bg");
                0 < t.length && e.push(t), 0 < i.length && e.push(i);
                for (var s = e.length - 1; 0 <= s; s--) {
                    if (0 < e[s].find("> source").length) {
                        var a = e[s].find("> source");
                        a.attr("src", a.data("src")).removeAttr("data-src"), e[s][0].load()
                    } else e[s].attr("src", e[s].data("src"));
                    e[s].addClass("active")
                }
            }
        },
        skinMode: function(e) {
            e.preventDefault(), I.$skinMode.addClass("triggered"), I.$skinMode.hasClass("mode--dark") ? (I.$skinMode.removeClass("mode--dark"), I.$primary.find("> .article-layout-skin-2").removeClass("article-layout-skin-2").addClass("article-layout-skin-1")) : (I.$skinMode.addClass("mode--dark"), I.$primary.find("> .article-layout-skin-1").removeClass("article-layout-skin-1").addClass("article-layout-skin-2"))
        },
        removeBasket: function(e) {
            e.preventDefault();
            var t = M(this),
                i = t.data("pid");
            I.ajaxCall = M.ajax({
                method: "POST",
                url: zeenJS.root + "remove?pid=" + i,
                beforeSend: function(e) {
                    e.setRequestHeader("X-WP-Nonce", zeenJS.nonce), t.parent().addClass("loading")
                },
                success: function(e) {
                    I.$body.trigger("wc_fragment_refresh")
                },
                fail: function(e) {
                    console.log("ERROR", e)
                }
            })
        },
        imgControl: function(e) {
            this.$primary.find("> .post-wrap").each(function() {
                var e = M(this),
                    t = e.find(".entry-content .alignnone").add(e.find(".entry-content .aligncenter"));
                if (0 < t.length) {
                    var i, s = new IntersectionObserver(function(e) {
                        e.forEach(function(e) {
                            e.isIntersecting && (e.target.classList.add("embed-vis"), s.unobserve(e.target))
                        })
                    }, {
                        threshold: [0],
                        rootMargin: "-100px 0px"
                    });
                    t.each(function(e, t) {
                        (i = M(this)).hasClass("embed-vis") || s.observe(i[0])
                    })
                }
            })
        },
        ajaxDeleter: function(e, t) {
            if (!0 === t) {
                for (var i in I.ajaxData) 0 === i.indexOf(e) && delete I.ajaxData[i];
                void 0 !== window[e + "_2"] && (window[e + "_2"] = "")
            } else delete I.ajaxData[e]
        },
        ajaxChecker: function(e) {
            return void 0 !== window[e] && "" !== window[e] ? (I.ajaxData[e] = window[e], !0) : void 0 !== I.ajaxData[e] || void 0
        },
        loadMore: function(o, n) {
            o.addClass("loaded"), void 0 !== I.thePaged && 0 !== I.thePaged || (I.thePaged = 1), void 0 === n && (o = M(this), n = o.data());
            var r = o.closest(".block-wrap"),
                e = n.type;
            4 === e && (e = 3);
            var l, d = r;
            r.hasClass("block-masonry-wrap") ? (d = d.find(".block > .block-masonry"), l = !0) : r.hasClass("block-wrap-65") ? (d = d.find(".block"), l = 65) : d = d.find("> .tipi-row-inner-style > .tipi-row-inner-box");
            var c, t = zeenJS.qry,
                i = r.data("id");
            void 0 === i || void 0 === window["zeen_" + i] || I.$body.hasClass("blog") || (t = window["zeen_" + i].args), M.ajax({
                method: "POST",
                data: {
                    preview: n.preview,
                    mnp: n.mnp,
                    qry: t,
                    paged: I.thePaged,
                    frontpage: zeenJS.args.frontpage,
                    basePagi: window.location.pathname,
                    type: e
                },
                url: zeenJS.root + "pagi",
                dataType: "html",
                beforeSend: function(e) {
                    I.thePaged = parseInt(I.thePaged) + 1, e.setRequestHeader("X-WP-Nonce", zeenJS.nonce), c = r.find(".inf-load-more-wrap:not(.inf-loaded)").addClass("tipi-spin inf-loading")
                },
                success: function(e) {
                    var t, i, s = M(e),
                        a = s;
                    !0 === l ? (i = I.getDetails(d), r.find(".inf-scr:not(.inf-scr-masonry)").css("top", i.height - 200), r.find(".inf-scr").addClass("inf-scr-masonry"), d.addClass("masonry-ajax"), d.append(a), d.imagesLoaded(function() {
                        I.tempAni(), d.find("article").addClass("fully-loaded"), d.masonry("appended", a), s.each(function() {
                            ((t = M(this)).hasClass("pagination") || t.hasClass("inf-scr")) && r.find(" > .tipi-row-inner-style > .tipi-row-inner-box").append(t)
                        }), c.addClass("inf-scr-masonry").css("top", i.height - 200), I.infPagi(o, n), c.removeClass("tipi-spin inf-loading").addClass("inf-loaded"), I.infScr()
                    })) : (65 === l ? (i = I.getDetails(d), r.find(".inf-scr:not(.inf-scr-masonry)").css("top", i.height - 200).addClass("inf-scr-masonry"), c.addClass("inf-scr-masonry").css("top", i.height - 200), s.each(function() {
                        (t = M(this)).hasClass("pagination") || t.hasClass("inf-scr") ? r.append(t) : d.append(t)
                    })) : d.append(s), c.removeClass("tipi-spin inf-loading").addClass("inf-loaded"), I.tempAni(), I.parallax3s(), I.infScr(), I.fillRunner(), I.infPagi(o, n))
                },
                fail: function(e) {
                    console.log("ERROR", e)
                }
            }), M(".inf-scr").removeClass("active")
        },
        infPagi: function(e, t) {
            new ScrollMagic.Scene({
                triggerElement: e,
                triggerHook: 1,
                offset: "100px"
            }).addTo(I.$controller).on("enter leave", function(e) {
                1 === e.progress ? (I.updateHref(t.titleNext, t.next), I.GA(t.next)) : (I.updateHref(t.titlePrev, t.prev), I.GA(t.prev))
            }), this.reSidebars()
        },
        reSidebars: function() {
            M(".sticky-on").each(function() {
                M(this).data("hcSticky").refresh()
            })
        },
        sidebars: function() {
            var r = "";
            this.$body.hasClass("tipi-builder-frame-inner") && (r = !0);
            var l = this;
            (I.$winWidth < 1020 ? M(".sticky-sb-on:not(.sidebar-wrap)") : M(".sticky-sb-on")).each(function() {
                var s, a = M(this),
                    o = !1,
                    n = 0;
                a.imagesLoaded(function() {
                    s = a.hasClass("sidebar-wrap") ? (o = !0, a.find("> .sidebar").outerHeight(!0)) : a.outerHeight(!0);
                    var e = 0;
                    if (l.$siteNav.hasClass("sticky-menu")) l.$siteNav.hasClass("sticky-menu-2") || (e = l.$siteNav.outerHeight());
                    else {
                        var t = l.$siteNav.closest(".site-header");
                        0 < t.length && !t.hasClass("sticky-menu-2") && (e = t.outerHeight())
                    }!0 === l.headerIsSticky && (e = l.$headerHeight - l.$header.data("ptDiff") - l.$header.data("pbDiff"), n = 15);
                    var i = 30 + I.$wpAdminBarHeight + e - n;
                    if ((l.$winWidth < 1020 && !0 === o || l.$winWidth < 767) && (i = 0), l.$winHeight < s + i) {
                        if (a.hasClass("sticky-on") || !0 === r) return void a.removeClass("sticky-sb sticky-el");
                        a.addClass("sticky-on").hcSticky({
                            top: i,
                            resizeDebounce: 300
                        })
                    } else a.addClass("sticky-sb sticky-el"), a.css("top", i)
                })
            })
        },
        sliderInit: function() {
            var e = M(".slider");
            0 !== e.length && e.each(function() {
                var e, i = M(this),
                    s = i.data(),
                    t = !0,
                    a = !1,
                    o = !0,
                    n = 0,
                    r = i,
                    l = parseInt(s.effect),
                    d = {
                        wrapAround: !0,
                        imagesLoaded: !0,
                        draggable: !1,
                        pageDots: !1,
                        setGallerySize: !1,
                        prevNextButtons: !1,
                        cellSelector: ".slide",
                        contain: !0,
                        rightToLeft: I.$rtl
                    };
                if (I.$winWidth < 768 == !0 && (d.draggable = !0), i.hasClass("flickity-enabled") && (o = !1), 10 === s.s && (e = !0, 1 === s.fh && (n = 1), "s" !== s.fs && "m" !== s.fs || (d.fullscreen = !0)), 50 < s.s && s.s < 60 && (d.setGallerySize = !0, d.adaptiveHeight = !0, d.selectedAttraction = .0925, d.friction = .725, (2 === l || 51 !== s.s && 55 !== s.s) && (d.autoPlay = zeenJS.args.sDelay)), 51 !== s.s && 55 !== s.s || (t = !(a = !0), 0 === l && (d.selectedAttraction = .2, d.friction = .8)), 768 < I.$winWidth && (52 === s.s ? d.groupCells = 2 : 53 === s.s ? d.groupCells = 3 : 54 === s.s && (d.groupCells = 4)), 15 === s.s && (t = !1, d.wrapAround = !1), 16 === s.s && (d.wrapAround = !1, d.cellAlign = "left", r = i.prev(), d.asNavFor = r[0]), 21 === s.s && (d.setGallerySize = !0, d.wrapAround = !1, d.adaptiveHeight = !0), 2 === l && (d.contain = !1, d.fade = !0, a = t = !(d.pageDots = !0)), !0 === o) {
                    i.on("ready.flickity", function() {
                        var e;
                        i.addClass("slider-ldd"), 21 === s.s && i.removeClass("tipi-spin"), e = 50 < s.s ? i.find("article") : i.find("img"), 51 === s.s || 55 === s.s ? e.first().imagesLoaded(function() {
                            i.addClass("slider-rdy")
                        }) : 52 === s.s ? e.slice(0, 1).imagesLoaded(function() {
                            i.addClass("slider-rdy")
                        }) : 53 === s.s ? e.slice(0, 2).imagesLoaded(function() {
                            i.addClass("slider-rdy")
                        }) : 54 === s.s ? e.slice(0, 3).imagesLoaded(function() {
                            i.addClass("slider-rdy")
                        }) : 10 !== s.s && 15 !== s.s || e.imagesLoaded(function(e) {
                            i.addClass("slider-rdy"), i.closest(".hero-wrap").addClass("mask-loaded")
                        })
                    }), i.flickity(d);
                    var c = "";
                    if (!1 === d.wrapAround && (c = i.data("flickity")), 21 === s.s && i.css("counter-reset", "list " + (c.slides.length + 1)), !0 === t) {
                        var h = i.find(".slider-arrow-prev"),
                            p = i.find(".slider-arrow-next");
                        h.on("click", function() {
                            r.flickity("previous"), !1 === d.wrapAround && (0 === c.selectedIndex ? h.addClass("disabled") : h.removeClass("disabled"), c.selectedIndex === c.slides.length - 1 ? p.addClass("disabled") : p.removeClass("disabled"))
                        }), p.on("click", function() {
                            r.flickity("next"), !1 === d.wrapAround && (0 === c.selectedIndex ? h.addClass("disabled") : h.removeClass("disabled"), c.selectedIndex === c.slides.length - 1 ? p.addClass("disabled") : p.removeClass("disabled"))
                        })
                    }
                    if (!0 === e && i.on("change.flickity", function(e, t) {
                            I.$body.hasClass("gallery-viewing") || i.on("mouseleave", function() {
                                I.$body.removeClass("gallery-viewing"), i.off("mouseleave")
                            }), I.$body.addClass("gallery-viewing")
                        }), !0 === a) {
                        c = i.data("flickity");
                        var u = i.find(".slider-arrow");
                        u.on("click", function() {
                            var e = M(this);
                            if (!e.data("doing")) {
                                e.data("doing", !0);
                                var t = c.selectedIndex;
                                e.hasClass("slider-arrow-next") ? r.flickity("next") : r.flickity("previous");
                                var i = c.selectedIndex;
                                1 < c.cells.length && I.sliderAlt(c, t, i, s.effect)
                            }
                        }), 0 < zeenJS.args.sDelay && (i.data("autoplay", !0), setInterval(function() {
                            if (!0 === i.data("autoplay")) {
                                var e = c.selectedIndex;
                                r.flickity("next");
                                var t = c.selectedIndex;
                                1 < c.cells.length && I.sliderAlt(c, e, t, s.effect)
                            }
                        }, zeenJS.args.sDelay), i.on("mouseenter", function() {
                            i.data("autoplay", !1)
                        }), i.on("mouseleave", function() {
                            i.data("autoplay", !0)
                        })), i.on("settle.flickity", function(e, t) {
                            u.removeData("doing")
                        }), i.on("settle.flickity", function(e, t) {
                            u.removeData("doing")
                        })
                    }
                }
                if (1 == n) {
                    if (1019 < I.$winWidth) {
                        var f = I.$winHeight - I.$wpAdminBarHeight;
                        I.$header.hasClass("site-header-53") || I.$header.hasClass("site-header-54") || I.$header.hasClass("site-header-55") || (f -= I.$headerHeight), i.css("height", f + "px")
                    } else i.css("height", "");
                    setTimeout(function() {
                        i.flickity("reposition")
                    }, 50)
                }
            })
        },
        sliderAlt: function(e, t, i, s) {
            if (0 === parseInt(s)) {
                var a = e.cells.length;
                i === a && (i = 0);
                for (var o = 0 === t && i === a - 1 || !(0 === i && t === a - 1 || t < i) ? "L" : "R", n = M(e.slides[t].cells[0].element), r = M(e.slides[i].cells[0].element), l = e.slides[t].outerWidth, d = Power2.easeInOut, c = l - .2 * l, h = "R" === o ? -Math.abs(c) : c, p = "L" === o ? -Math.abs(c) : c, u = "L" === o ? -Math.abs(l) : l, f = "R" === o ? -Math.abs(l) : l, m = e.slides.length - 1; 0 <= m; m--) e.slides[m].cells[0].element.classList.remove("old-slide", "new-slide");
                n.addClass("old-slide"), r.addClass("new-slide"), TweenLite.fromTo(r, .6, {
                    x: u
                }, {
                    x: 0,
                    ease: d
                }), TweenLite.fromTo(n, .6, {
                    x: 0
                }, {
                    x: f,
                    ease: d
                }), TweenLite.fromTo(r.find("> .mask"), .6, {
                    x: h
                }, {
                    x: 0,
                    ease: d
                }), TweenLite.fromTo(n.find("> .mask"), .6, {
                    x: 0
                }, {
                    x: p,
                    ease: d
                }), TweenLite.fromTo(r.find("> .meta"), .6, {
                    x: f
                }, {
                    x: 0,
                    ease: d
                }), TweenLite.fromTo(n.find("> .meta"), .6, {
                    x: 0
                }, {
                    x: u,
                    ease: d
                })
            }
        },
        lightboxClasses: function() {
            this.$entryContent.find("a").has("img").each(function() {
                var e = M("img", this).attr("title"),
                    t = M(this),
                    i = t.attr("href");
                if (void 0 !== e && t.attr("title", e), void 0 !== i && "prettyPhoto[product-gallery]" !== t.data("rel")) {
                    var s = i.split("."),
                        a = M(s)[M(s).length - 1];
                    "jpg" !== a && "jpeg" !== a && "png" !== a && "gif" !== a || t.addClass("tipi-lightbox")
                }
            })
        },
        lightboxInit: function() {
            I.lightboxClasses(), !0 === zeenJS.args.lightbox && M(".tipi-lightbox").swipebox()
        },
        toolTipInit: function(e) {
            if (!(I.$winWidth < 1200)) {
                I.$toolTipCurrent = M(this), I.$toolTipCurrent.addClass("tipi-tipped");
                var t = "tipi-tip-wrap-b";
                I.$toolTipCurrent.hasClass("tipi-tip-r") && (t = "tipi-tip-wrap-r"), I.$toolTipCurrent.hasClass("tipi-tip-l") && (t = "tipi-tip-wrap-l");
                var i = '<div class="tipi-tip-wrap font-s ' + t + '"><div class="inner">' + I.$toolTipCurrent.data("title") + '</div><div class="detail"></div></div>';
                I.$body.append(i), I.$toolTipOutput = I.$body.find(" > .tipi-tip-wrap:not(.removing)"), I.$toolTipCurrent.hasClass("tipi-tip-move") ? (I.$toolTipCurrent.on("mousemove", I.tooltipLive), I.$toolTipOutput.addClass("tipi-tip-mover")) : I.tooltipSetup(), I.$toolTipCurrent.on("mouseleave", I.tooltipDestroy)
            }
        },
        tooltipDestroy: function() {
            I.$toolTipOutput.addClass("removing"), setTimeout(function() {
                M(".removing").remove()
            }, 500), I.$toolTipCurrent.off("mouseleave mousemove")
        },
        tooltipLive: function(e) {
            I.tooltipSetup({
                left: e.clientX,
                top: e.clientY
            })
        },
        tooltipSetup: function(e) {
            void 0 === e && (e = {}), void 0 === e.output && (e.output = I.$toolTipOutput), void 0 === e.current && (e.current = I.$toolTipCurrent);
            var t = I.getDetails(e.output),
                i = I.getDetails(e.current);
            void 0 === e.left ? e.left = i.left + i.width / 2 - t.width / 2 : e.left = e.left - t.width / 2, void 0 === e.top ? (e.top = i.top, e.top = e.top + i.height) : e.top = e.top + 10, e.current.hasClass("tipi-tip-r") ? (e.top = i.top + i.height / 2 - t.height / 2, e.left = i.width + i.left + 10) : e.current.hasClass("tipi-tip-l") && (e.top = i.top + i.height / 2 - t.height / 2, e.left = i.left - t.width - 10), e.output.css({
                left: e.left,
                top: e.top
            }).addClass("tipi-tip-wrap-visible")
        },
        getDetails: function(e) {
            var t = e[0].getBoundingClientRect();
            return {
                left: t.left,
                top: t.top,
                width: t.width,
                height: t.height
            }
        },
        orientationchange: function() {
            this.cleanUp(), this.$parallax3sController.destroy(!0), this.$parallax3sController = new ScrollMagic.Controller, M(".parallaxed3s").removeClass("parallaxed3s"), this.parallax3s()
        },
        resize: function() {
            this.resizing = !0, this.data();
            var e = this;
            clearTimeout(this.resizeTo), this.resizeTo = setTimeout(function() {
                1199 < e.$winWidth && e.cleanUp(), e.imgControl(!0), e.header(), e.sticky(), e.sliderInit(), e.sidebars(), e.reSidebars(), e.cta(), e.resizing = !1
            }, 275)
        },
        cleanUp: function(e) {
            this.$parallaxItCont.destroy(!0), this.$parallaxItCont = new ScrollMagic.Controller, M(".parallaxed").removeClass("parallaxed"), this.parallaxIt()
        },
        qtyArrows: function() {
            M(".cart .quantity:not(.has-arrows )").addClass("has-arrows").append('<span class="qty-arrows"><span id="qty-plus" class="qty-arrow qty-plus"><i class="tipi-i-chevron-up"></i></span><span id="qty-minus" class="qty-arrow qty-minus"><i class="tipi-i-chevron-down"></i></span></span>')
        },
        qtyArrowChange: function() {
            var e = M(this).closest(".quantity").find(".qty"),
                t = M(this).hasClass("qty-plus"),
                i = parseInt(e.val()),
                s = parseInt(e.attr("max")),
                a = parseInt(e.attr("min")),
                o = e.attr("step");
            i && "" !== i && "NaN" !== i || (i = 0), "" !== s && "NaN" !== s || (s = ""), "" !== a && "NaN" !== a || (a = 0), "any" !== o && "" !== o && void 0 !== o && "NaN" !== parseInt(o) || (o = 1), !0 === t ? s && s <= i ? e.val(s) : e.val(i + parseInt(o)) : a && i <= a ? e.val(a) : 0 < i && e.val(i - parseInt(o)), e.trigger("change")
        },
        fillRunner: function(e) {
            if (!this.$body.hasClass("tipi-builder-frame-inner") || !0 === e) {
                if (!0 === e && M(".tipi-fill").remove(), !0 === this.wooArchive) {
                    var t = this.$entryContentWrap.data("ppl");
                    2 < t && 0 < this.$products.length && this.$products.each(function() {
                        I.fillIt(M(this), t, " product")
                    })
                }
                var i = this.$primary.add(this.$dropper).find(".ppl-l-4, .ppl-m-4");
                0 < i.length && (i = i.find(".block:not(.block-65)")).each(function() {
                    I.fillIt(M(this), 4)
                }), 0 < (i = this.$primary.add(this.$dropper).find(".ppl-l-5, .ppl-m-5")).length && (i = i.find(".block:not(.block-65)")).each(function() {
                    I.fillIt(M(this), 5)
                }), 0 < (i = this.$primary.add(this.$dropper).find(".ppl-l-3, .ppl-m-3")).length && (i = i.find(".block:not(.block-65)")).each(function() {
                    i.hasClass("block-wrap-65") || I.fillIt(M(this), 3)
                })
            }
        },
        fillIt: function(e, t, i) {
            if (767 < this.$winWidth) {
                var s, a = e.children().length;
                if (a === t) return;
                if ((s = a < t ? t - a : t - (s = a - Math.floor(a / t) * t)) < t)
                    for (var o = 0; o < s; o++) {
                        var n = document.createElement("article");
                        n.className = void 0 === i ? "tipi-fill" : "tipi-fill " + i, e.append(n)
                    }
            } else M(".tipi-fill").remove()
        },
        toTopInit: function(e) {
            e.preventDefault(), zenscroll.toY(0, 800)
        },
        toTop: function() {
            this.$body.hasClass("to-top__fixed") && (this.toTopScene = new ScrollMagic.Scene({
                triggerElement: this.$body,
                offset: Math.min(400, this.$winHeight),
                triggerHook: 0
            }).addTo(I.$controller).setClassToggle(this.$body, "to-top__active"))
        },
        openSlideMenu: function(e) {
            e.preventDefault(), this.$body.addClass("slide-menu-open"), this.$baseOverlay.addClass("active"), this.$slideInMenu.addClass("active")
        },
        closeSlideMenu: function(e) {
            void 0 !== e && e.preventDefault(), this.$body.removeClass("slide-menu-open"), this.$slideInMenu.removeClass("active"), this.$baseOverlay.removeClass("active")
        },
        openMobMenu: function(e) {
            if (e.preventDefault(), this.$body.hasClass("site-mob-menu-a-3")) {
                var t = M(window).scrollTop();
                I.$body.addClass("mob-open mob-open-3"), this.$content.add(this.$topBlock).add(this.$mobHead).css("top", "-" + t + "px"), this.$page.css("height", this.$winHeight)
            } else this.$body.hasClass("mob-open") ? this.$body.removeClass("mob-open") : this.$body.addClass("mob-open")
        },
        mobMenuClear: function(e) {
            this.$body.removeClass("mob-open"), this.$body.hasClass("site-mob-menu-a-3") && (clearTimeout(I.mobMenuClearTO), I.mobMenuClearTO = setTimeout(function() {
                var e = I.$content.css("top");
                I.$content.add(I.$topBlock).add(I.$mobHead).css("top", ""), I.$page.css("height", ""), I.$body.removeClass("mob-open mob-open-3"), window.scrollTo(0, e)
            }, 500))
        },
        closeMobMenu: function(e) {
            e.preventDefault(), I.mobMenuClear()
        },
        pub: function() {
            var e = this;
            clearTimeout(this.pubTimer), this.pubTimer = setTimeout(function() {
                e.$parallaxItCont.destroy(!0), e.$parallax3sController.destroy(!0), M(".parallaxed").removeClass("parallaxed"), M(".parallaxed3s").removeClass("parallaxed3s"), M(".tipi-parallax-ani .bg, .tipi-parallax-ani iframe").css("transform", ""), e.dom(), e.data(), e.anis(), e.sliderInit(), e.masonryInit(), e.sidebars(), e.reSidebars(), e.cta(!0), e.noPar(), e.fillRunner(!0), e.stickyEl(), e.parallaxIt(!0), e.parallax3s(!0)
            }, 50)
        },
        cus: function(e) {
            "sticky" === e && "function" == typeof I.stickyMenu.destroy && I.stickyMenu.destroy(!0), "sticky" === e && "function" == typeof I.stickyMobMenu.destroy && I.stickyMobMenu.destroy(!0), this.dom(), this.data(), this.bind(), "sticky" === e && (this.$stickyMenu.removeClass("slidedown stickied stuck active still"), this.sticky())
        }
    };
    return I.init(), {
        pub: function() {
            I.pub()
        },
        cus: function(e) {
            I.cus(e)
        }
    }
}(jQuery);
/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */
/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */
! function(t, i) {
    "function" == typeof define && define.amd ? define([], i()) : "object" == typeof module && module.exports ? module.exports = i() : function e() {
        document && document.body ? t.zenscroll = i() : setTimeout(e, 9)
    }()
}(this, function() {
    "use strict";
    if ("undefined" == typeof window || !("document" in window)) return {};
    var s = function(l, i, d) {
            var t;
            i = i || 999, d || 0 === d || (d = 9);
            var c = function(e) {
                    t = e
                },
                h = function() {
                    clearTimeout(t), c(0)
                },
                p = function(e) {
                    return Math.max(0, l.getTopOf(e) - d)
                },
                u = function(e, s, a) {
                    if (h(), 0 === s || s && s < 0 || (t = l.body) && "getComputedStyle" in window && "smooth" === window.getComputedStyle(t)["scroll-behavior"]) l.toY(e), a && a();
                    else {
                        var o = l.getY(),
                            n = Math.max(0, e) - o,
                            r = (new Date).getTime();
                        s = s || Math.min(Math.abs(n), i),
                            function i() {
                                c(setTimeout(function() {
                                    var e = Math.min(1, ((new Date).getTime() - r) / s),
                                        t = Math.max(0, Math.floor(o + n * (e < .5 ? 2 * e * e : e * (4 - 2 * e) - 1)));
                                    l.toY(t), e < 1 && l.getHeight() + t < l.body.scrollHeight ? i() : (setTimeout(h, 99), a && a())
                                }, 9))
                            }()
                    }
                    var t
                },
                f = function(e, t, i) {
                    u(p(e), t, i)
                };
            return {
                setup: function(e, t) {
                    return (0 === e || e) && (i = e), (0 === t || t) && (d = t), {
                        defaultDuration: i,
                        edgeOffset: d
                    }
                },
                to: f,
                toY: u,
                intoView: function(e, t, i) {
                    var s = e.getBoundingClientRect().height,
                        a = l.getTopOf(e) + s,
                        o = l.getHeight(),
                        n = l.getY(),
                        r = n + o;
                    p(e) < n || o < s + d ? f(e, t, i) : r < a + d ? u(a - o + d, t, i) : i && i()
                },
                center: function(e, t, i, s) {
                    u(Math.max(0, l.getTopOf(e) - l.getHeight() / 2 + (i || e.getBoundingClientRect().height / 2)), t, s)
                },
                stop: h,
                moving: function() {
                    return !!t
                },
                getY: l.getY,
                getTopOf: l.getTopOf
            }
        },
        a = document.documentElement,
        t = function() {
            return window.scrollY || a.scrollTop
        },
        e = s({
            body: document.scrollingElement || document.body,
            toY: function(e) {
                window.scrollTo(0, e)
            },
            getY: t,
            getHeight: function() {
                return document.documentElement.clientHeight || a.clientHeight
            },
            getTopOf: function(e) {
                return e.getBoundingClientRect().top + t() - a.offsetTop
            }
        });
    return e.createScroller = function(t, e, i) {
        return s({
            body: t,
            toY: function(e) {
                t.scrollTop = e
            },
            getY: function() {
                return t.scrollTop
            },
            getHeight: function() {
                return Math.min(t.clientHeight, document.documentElement.clientHeight || a.clientHeight)
            },
            getTopOf: function(e) {
                return e.offsetTop
            }
        }, e, i)
    }, e
});
(function($) {
    $('#billing_country_field').on('change', function() {
        var country_code = $(this).find('#billing_country').val();
        if (country_code == 'VN') {
            $('.woocommerce-billing-fields__field-wrapper').addClass('active');
        } else {
            $('.woocommerce-billing-fields__field-wrapper').removeClass('active');
        }
    })
})(jQuery);
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d)
                    if (d.secret || d.message || d.value)
                        if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                            for (e = 0; e < k.length; e++) k[e].style.display = "none";
                            for (e = 0; e < j.length; e++)
                                if (f = j[e], c.source === f.contentWindow) {
                                    if (f.removeAttribute("style"), "height" === d.message) {
                                        if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                        else if (~~g < 200) g = 200;
                                        f.height = g
                                    }
                                    if ("link" === d.message)
                                        if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                            if (b.activeElement === f) a.top.location.href = d.value
                                } else;
                        }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);