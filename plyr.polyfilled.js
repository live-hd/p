"object" == typeof navigator && function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t()
}(this, function () {
	"use strict";
	! function () {
		if ("undefined" != typeof window) try {
			var e = new window.CustomEvent("test", {
				cancelable: !0
			});
			if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
		} catch (e) {
			var t = function (e, t) {
				var n, i;
				return t = t || {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				}, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i = n.preventDefault, n.preventDefault = function () {
					i.call(this);
					try {
						Object.defineProperty(this, "defaultPrevented", {
							get: function () {
								return !0
							}
						})
					} catch (e) {
						this.defaultPrevented = !0
					}
				}, n
			};
			t.prototype = window.Event.prototype, window.CustomEvent = t
		}
	}();
	var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

	function t(e, t) {
		return e(t = {
			exports: {}
		}, t.exports), t.exports
	}! function (e) {
		var t = function () {
				try {
					return !!Symbol.iterator
				} catch (e) {
					return !1
				}
			}(),
			n = function (e) {
				var n = {
					next: function () {
						var t = e.shift();
						return {
							done: void 0 === t,
							value: t
						}
					}
				};
				return t && (n[Symbol.iterator] = function () {
					return n
				}), n
			},
			i = function (e) {
				return encodeURIComponent(e).replace(/%20/g, "+")
			},
			r = function (e) {
				return decodeURIComponent(e).replace(/\+/g, " ")
			};
		"URLSearchParams" in e && "a=1" === new URLSearchParams("?a=1").toString() || function () {
			var o = function (e) {
					if (Object.defineProperty(this, "_entries", {
							writable: !0,
							value: {}
						}), "string" == typeof e) "" !== e && this._fromString(e);
					else if (e instanceof o) {
						var t = this;
						e.forEach(function (e, n) {
							t.append(n, e)
						})
					}
				},
				a = o.prototype;
			a.append = function (e, t) {
				e in this._entries ? this._entries[e].push(t.toString()) : this._entries[e] = [t.toString()]
			}, a.delete = function (e) {
				delete this._entries[e]
			}, a.get = function (e) {
				return e in this._entries ? this._entries[e][0] : null
			}, a.getAll = function (e) {
				return e in this._entries ? this._entries[e].slice(0) : []
			}, a.has = function (e) {
				return e in this._entries
			}, a.set = function (e, t) {
				this._entries[e] = [t.toString()]
			}, a.forEach = function (e, t) {
				var n;
				for (var i in this._entries)
					if (this._entries.hasOwnProperty(i)) {
						n = this._entries[i];
						for (var r = 0; r < n.length; r++) e.call(t, n[r], i, this)
					}
			}, a.keys = function () {
				var e = [];
				return this.forEach(function (t, n) {
					e.push(n)
				}), n(e)
			}, a.values = function () {
				var e = [];
				return this.forEach(function (t) {
					e.push(t)
				}), n(e)
			}, a.entries = function () {
				var e = [];
				return this.forEach(function (t, n) {
					e.push([n, t])
				}), n(e)
			}, t && (a[Symbol.iterator] = a.entries), a.toString = function () {
				var e = [];
				return this.forEach(function (t, n) {
					e.push(i(n) + "=" + i(t))
				}), e.join("&")
			}, Object.defineProperty(a, "_fromString", {
				enumerable: !1,
				configurable: !1,
				writable: !1,
				value: function (e) {
					this._entries = {};
					for (var t, n = (e = e.replace(/^\?/, "")).split("&"), i = 0; i < n.length; i++) t = n[i].split("="), this.append(r(t[0]), t.length > 1 ? r(t[1]) : "")
				}
			}), e.URLSearchParams = o
		}(), "function" != typeof URLSearchParams.prototype.sort && (URLSearchParams.prototype.sort = function () {
			var e = this,
				t = [];
			this.forEach(function (n, i) {
				t.push([i, n]), e._entries || e.delete(i)
			}), t.sort(function (e, t) {
				return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
			}), e._entries && (e._entries = {});
			for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1])
		})
	}(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
	function (e) {
		if (function () {
				try {
					var e = new URL("b", "http://a");
					return e.pathname = "c%20d", "http://a/c%20d" === e.href && e.searchParams
				} catch (e) {
					return !1
				}
			}() || function () {
				var t = e.URL,
					n = function (t, n) {
						"string" != typeof t && (t = String(t));
						var i, r = document;
						if (n && (void 0 === e.location || n !== e.location.href)) {
							(i = (r = document.implementation.createHTMLDocument("")).createElement("base")).href = n, r.head.appendChild(i);
							try {
								if (0 !== i.href.indexOf(n)) throw new Error(i.href)
							} catch (e) {
								throw new Error("URL unable to set base " + n + " due to " + e)
							}
						}
						var o = r.createElement("a");
						if (o.href = t, i && (r.body.appendChild(o), o.href = o.href), ":" === o.protocol || !/:/.test(o.href)) throw new TypeError("Invalid URL");
						Object.defineProperty(this, "_anchorElement", {
							value: o
						});
						var a = new URLSearchParams(this.search),
							s = !0,
							l = !0,
							c = this;
						["append", "delete", "set"].forEach(function (e) {
							var t = a[e];
							a[e] = function () {
								t.apply(a, arguments), s && (l = !1, c.search = a.toString(), l = !0)
							}
						}), Object.defineProperty(this, "searchParams", {
							value: a,
							enumerable: !0
						});
						var u = void 0;
						Object.defineProperty(this, "_updateSearchParams", {
							enumerable: !1,
							configurable: !1,
							writable: !1,
							value: function () {
								this.search !== u && (u = this.search, l && (s = !1, this.searchParams._fromString(this.search), s = !0))
							}
						})
					},
					i = n.prototype;
				["hash", "host", "hostname", "port", "protocol"].forEach(function (e) {
					! function (e) {
						Object.defineProperty(i, e, {
							get: function () {
								return this._anchorElement[e]
							},
							set: function (t) {
								this._anchorElement[e] = t
							},
							enumerable: !0
						})
					}(e)
				}), Object.defineProperty(i, "search", {
					get: function () {
						return this._anchorElement.search
					},
					set: function (e) {
						this._anchorElement.search = e, this._updateSearchParams()
					},
					enumerable: !0
				}), Object.defineProperties(i, {
					toString: {
						get: function () {
							var e = this;
							return function () {
								return e.href
							}
						}
					},
					href: {
						get: function () {
							return this._anchorElement.href.replace(/\?$/, "")
						},
						set: function (e) {
							this._anchorElement.href = e, this._updateSearchParams()
						},
						enumerable: !0
					},
					pathname: {
						get: function () {
							return this._anchorElement.pathname.replace(/(^\/?)/, "/")
						},
						set: function (e) {
							this._anchorElement.pathname = e
						},
						enumerable: !0
					},
					origin: {
						get: function () {
							var e = {
									"http:": 80,
									"https:": 443,
									"ftp:": 21
								}[this._anchorElement.protocol],
								t = this._anchorElement.port != e && "" !== this._anchorElement.port;
							return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
						},
						enumerable: !0
					},
					password: {
						get: function () {
							return ""
						},
						set: function (e) {},
						enumerable: !0
					},
					username: {
						get: function () {
							return ""
						},
						set: function (e) {},
						enumerable: !0
					}
				}), n.createObjectURL = function (e) {
					return t.createObjectURL.apply(t, arguments)
				}, n.revokeObjectURL = function (e) {
					return t.revokeObjectURL.apply(t, arguments)
				}, e.URL = n
			}(), void 0 !== e.location && !("origin" in e.location)) {
			var t = function () {
				return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
			};
			try {
				Object.defineProperty(e.location, "origin", {
					get: t,
					enumerable: !0
				})
			} catch (n) {
				setInterval(function () {
					e.location.origin = t()
				}, 100)
			}
		}
	}(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);
	var n = function (e) {
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		},
		i = function (e, t, i) {
			if (n(e), void 0 === t) return e;
			switch (i) {
				case 1:
					return function (n) {
						return e.call(t, n)
					};
				case 2:
					return function (n, i) {
						return e.call(t, n, i)
					};
				case 3:
					return function (n, i, r) {
						return e.call(t, n, i, r)
					}
			}
			return function () {
				return e.apply(t, arguments)
			}
		},
		r = t(function (e) {
			var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
			"number" == typeof __g && (__g = t)
		}),
		o = t(function (e) {
			var t = e.exports = {
				version: "2.5.7"
			};
			"number" == typeof __e && (__e = t)
		}),
		a = (o.version, function (e) {
			return "object" == typeof e ? null !== e : "function" == typeof e
		}),
		s = function (e) {
			if (!a(e)) throw TypeError(e + " is not an object!");
			return e
		},
		l = function (e) {
			try {
				return !!e()
			} catch (e) {
				return !0
			}
		},
		c = !l(function () {
			return 7 != Object.defineProperty({}, "a", {
				get: function () {
					return 7
				}
			}).a
		}),
		u = r.document,
		d = a(u) && a(u.createElement),
		h = function (e) {
			return d ? u.createElement(e) : {}
		},
		f = !c && !l(function () {
			return 7 != Object.defineProperty(h("div"), "a", {
				get: function () {
					return 7
				}
			}).a
		}),
		p = function (e, t) {
			if (!a(e)) return e;
			var n, i;
			if (t && "function" == typeof (n = e.toString) && !a(i = n.call(e))) return i;
			if ("function" == typeof (n = e.valueOf) && !a(i = n.call(e))) return i;
			if (!t && "function" == typeof (n = e.toString) && !a(i = n.call(e))) return i;
			throw TypeError("Can't convert object to primitive value")
		},
		m = Object.defineProperty,
		g = {
			f: c ? Object.defineProperty : function (e, t, n) {
				if (s(e), t = p(t, !0), s(n), f) try {
					return m(e, t, n)
				} catch (e) {}
				if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
				return "value" in n && (e[t] = n.value), e
			}
		},
		y = function (e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		},
		v = c ? function (e, t, n) {
			return g.f(e, t, y(1, n))
		} : function (e, t, n) {
			return e[t] = n, e
		},
		b = {}.hasOwnProperty,
		k = function (e, t) {
			return b.call(e, t)
		},
		w = 0,
		T = Math.random(),
		E = function (e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++w + T).toString(36))
		},
		A = t(function (e) {
			var t = E("src"),
				n = Function.toString,
				i = ("" + n).split("toString");
			o.inspectSource = function (e) {
				return n.call(e)
			}, (e.exports = function (e, n, o, a) {
				var s = "function" == typeof o;
				s && (k(o, "name") || v(o, "name", n)), e[n] !== o && (s && (k(o, t) || v(o, t, e[n] ? "" + e[n] : i.join(String(n)))), e === r ? e[n] = o : a ? e[n] ? e[n] = o : v(e, n, o) : (delete e[n], v(e, n, o)))
			})(Function.prototype, "toString", function () {
				return "function" == typeof this && this[t] || n.call(this)
			})
		}),
		_ = function (e, t, n) {
			var a, s, l, c, u = e & _.F,
				d = e & _.G,
				h = e & _.S,
				f = e & _.P,
				p = e & _.B,
				m = d ? r : h ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
				g = d ? o : o[t] || (o[t] = {}),
				y = g.prototype || (g.prototype = {});
			for (a in d && (n = t), n) l = ((s = !u && m && void 0 !== m[a]) ? m : n)[a], c = p && s ? i(l, r) : f && "function" == typeof l ? i(Function.call, l) : l, m && A(m, a, l, e & _.U), g[a] != l && v(g, a, c), f && y[a] != l && (y[a] = l)
		};
	r.core = o, _.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128;
	var S = _,
		P = function (e) {
			if (null == e) throw TypeError("Can't call method on  " + e);
			return e
		},
		C = function (e) {
			return Object(P(e))
		},
		L = function (e, t, n, i) {
			try {
				return i ? t(s(n)[0], n[1]) : t(n)
			} catch (t) {
				var r = e.return;
				throw void 0 !== r && s(r.call(e)), t
			}
		},
		M = {},
		N = t(function (e) {
			var t = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
			(e.exports = function (e, n) {
				return t[e] || (t[e] = void 0 !== n ? n : {})
			})("versions", []).push({
				version: o.version,
				mode: "global",
				copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
			})
		}),
		x = t(function (e) {
			var t = N("wks"),
				n = r.Symbol,
				i = "function" == typeof n;
			(e.exports = function (e) {
				return t[e] || (t[e] = i && n[e] || (i ? n : E)("Symbol." + e))
			}).store = t
		}),
		O = x("iterator"),
		j = Array.prototype,
		I = function (e) {
			return void 0 !== e && (M.Array === e || j[O] === e)
		},
		R = Math.ceil,
		F = Math.floor,
		D = function (e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? F : R)(e)
		},
		q = Math.min,
		V = function (e) {
			return e > 0 ? q(D(e), 9007199254740991) : 0
		},
		B = function (e, t, n) {
			t in e ? g.f(e, t, y(0, n)) : e[t] = n
		},
		H = {}.toString,
		U = function (e) {
			return H.call(e).slice(8, -1)
		},
		W = x("toStringTag"),
		K = "Arguments" == U(function () {
			return arguments
		}()),
		z = function (e) {
			var t, n, i;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
				try {
					return e[t]
				} catch (e) {}
			}(t = Object(e), W)) ? n : K ? U(t) : "Object" == (i = U(t)) && "function" == typeof t.callee ? "Arguments" : i
		},
		Y = x("iterator"),
		G = o.getIteratorMethod = function (e) {
			if (null != e) return e[Y] || e["@@iterator"] || M[z(e)]
		},
		$ = x("iterator"),
		J = !1;
	try {
		[7][$]().return = function () {
			J = !0
		}
	} catch (e) {}
	var Q = function (e, t) {
		if (!t && !J) return !1;
		var n = !1;
		try {
			var i = [7],
				r = i[$]();
			r.next = function () {
				return {
					done: n = !0
				}
			}, i[$] = function () {
				return r
			}, e(i)
		} catch (e) {}
		return n
	};
	S(S.S + S.F * !Q(function (e) {}), "Array", {
		from: function (e) {
			var t, n, r, o, a = C(e),
				s = "function" == typeof this ? this : Array,
				l = arguments.length,
				c = l > 1 ? arguments[1] : void 0,
				u = void 0 !== c,
				d = 0,
				h = G(a);
			if (u && (c = i(c, l > 2 ? arguments[2] : void 0, 2)), null == h || s == Array && I(h))
				for (n = new s(t = V(a.length)); t > d; d++) B(n, d, u ? c(a[d], d) : a[d]);
			else
				for (o = h.call(a), n = new s; !(r = o.next()).done; d++) B(n, d, u ? L(o, c, [r.value, d], !0) : r.value);
			return n.length = d, n
		}
	});
	var X = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
			return "String" == U(e) ? e.split("") : Object(e)
		},
		Z = Array.isArray || function (e) {
			return "Array" == U(e)
		},
		ee = x("species"),
		te = function (e, t) {
			return new(function (e) {
				var t;
				return Z(e) && ("function" != typeof (t = e.constructor) || t !== Array && !Z(t.prototype) || (t = void 0), a(t) && null === (t = t[ee]) && (t = void 0)), void 0 === t ? Array : t
			}(e))(t)
		},
		ne = function (e, t) {
			var n = 1 == e,
				r = 2 == e,
				o = 3 == e,
				a = 4 == e,
				s = 6 == e,
				l = 5 == e || s,
				c = t || te;
			return function (t, u, d) {
				for (var h, f, p = C(t), m = X(p), g = i(u, d, 3), y = V(m.length), v = 0, b = n ? c(t, y) : r ? c(t, 0) : void 0; y > v; v++)
					if ((l || v in m) && (f = g(h = m[v], v, p), e))
						if (n) b[v] = f;
						else if (f) switch (e) {
					case 3:
						return !0;
					case 5:
						return h;
					case 6:
						return v;
					case 2:
						b.push(h)
				} else if (a) return !1;
				return s ? -1 : o || a ? a : b
			}
		},
		ie = x("unscopables"),
		re = Array.prototype;
	null == re[ie] && v(re, ie, {});
	var oe = function (e) {
			re[ie][e] = !0
		},
		ae = ne(5),
		se = !0;
	"find" in [] && Array(1).find(function () {
		se = !1
	}), S(S.P + S.F * se, "Array", {
		find: function (e) {
			return ae(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), oe("find");
	var le = {
			f: {}.propertyIsEnumerable
		},
		ce = function (e) {
			return X(P(e))
		},
		ue = Object.getOwnPropertyDescriptor,
		de = {
			f: c ? ue : function (e, t) {
				if (e = ce(e), t = p(t, !0), f) try {
					return ue(e, t)
				} catch (e) {}
				if (k(e, t)) return y(!le.f.call(e, t), e[t])
			}
		},
		he = function (e, t) {
			if (s(e), !a(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
		},
		fe = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
				try {
					(n = i(Function.call, de.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
				} catch (e) {
					t = !0
				}
				return function (e, i) {
					return he(e, i), t ? e.__proto__ = i : n(e, i), e
				}
			}({}, !1) : void 0),
			check: he
		}.set,
		pe = function (e, t, n) {
			var i, r = t.constructor;
			return r !== n && "function" == typeof r && (i = r.prototype) !== n.prototype && a(i) && fe && fe(e, i), e
		},
		me = Math.max,
		ge = Math.min,
		ye = function (e) {
			return function (t, n, i) {
				var r, o = ce(t),
					a = V(o.length),
					s = function (e, t) {
						return (e = D(e)) < 0 ? me(e + t, 0) : ge(e, t)
					}(i, a);
				if (e && n != n) {
					for (; a > s;)
						if ((r = o[s++]) != r) return !0
				} else
					for (; a > s; s++)
						if ((e || s in o) && o[s] === n) return e || s || 0; return !e && -1
			}
		},
		ve = N("keys"),
		be = function (e) {
			return ve[e] || (ve[e] = E(e))
		},
		ke = ye(!1),
		we = be("IE_PROTO"),
		Te = function (e, t) {
			var n, i = ce(e),
				r = 0,
				o = [];
			for (n in i) n != we && k(i, n) && o.push(n);
			for (; t.length > r;) k(i, n = t[r++]) && (~ke(o, n) || o.push(n));
			return o
		},
		Ee = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
		Ae = Ee.concat("length", "prototype"),
		_e = {
			f: Object.getOwnPropertyNames || function (e) {
				return Te(e, Ae)
			}
		},
		Se = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",
		Pe = "[" + Se + "]",
		Ce = RegExp("^" + Pe + Pe + "*"),
		Le = RegExp(Pe + Pe + "*$"),
		Me = function (e, t, n) {
			var i = {},
				r = l(function () {
					return !!Se[e]() || "​" != "​" [e]()
				}),
				o = i[e] = r ? t(Ne) : Se[e];
			n && (i[n] = o), S(S.P + S.F * r, "String", i)
		},
		Ne = Me.trim = function (e, t) {
			return e = String(P(e)), 1 & t && (e = e.replace(Ce, "")), 2 & t && (e = e.replace(Le, "")), e
		},
		xe = Me,
		Oe = Object.keys || function (e) {
			return Te(e, Ee)
		},
		je = c ? Object.defineProperties : function (e, t) {
			s(e);
			for (var n, i = Oe(t), r = i.length, o = 0; r > o;) g.f(e, n = i[o++], t[n]);
			return e
		},
		Ie = r.document,
		Re = Ie && Ie.documentElement,
		Fe = be("IE_PROTO"),
		De = function () {},
		qe = function () {
			var e, t = h("iframe"),
				n = Ee.length;
			for (t.style.display = "none", Re.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), qe = e.F; n--;) delete qe.prototype[Ee[n]];
			return qe()
		},
		Ve = Object.create || function (e, t) {
			var n;
			return null !== e ? (De.prototype = s(e), n = new De, De.prototype = null, n[Fe] = e) : n = qe(), void 0 === t ? n : je(n, t)
		},
		Be = _e.f,
		He = de.f,
		Ue = g.f,
		We = xe.trim,
		Ke = r.Number,
		ze = Ke,
		Ye = Ke.prototype,
		Ge = "Number" == U(Ve(Ye)),
		$e = "trim" in String.prototype,
		Je = function (e) {
			var t = p(e, !1);
			if ("string" == typeof t && t.length > 2) {
				var n, i, r, o = (t = $e ? t.trim() : We(t, 3)).charCodeAt(0);
				if (43 === o || 45 === o) {
					if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
				} else if (48 === o) {
					switch (t.charCodeAt(1)) {
						case 66:
						case 98:
							i = 2, r = 49;
							break;
						case 79:
						case 111:
							i = 8, r = 55;
							break;
						default:
							return +t
					}
					for (var a, s = t.slice(2), l = 0, c = s.length; l < c; l++)
						if ((a = s.charCodeAt(l)) < 48 || a > r) return NaN;
					return parseInt(s, i)
				}
			}
			return +t
		};
	if (!Ke(" 0o1") || !Ke("0b1") || Ke("+0x1")) {
		Ke = function (e) {
			var t = arguments.length < 1 ? 0 : e,
				n = this;
			return n instanceof Ke && (Ge ? l(function () {
				Ye.valueOf.call(n)
			}) : "Number" != U(n)) ? pe(new ze(Je(t)), n, Ke) : Je(t)
		};
		for (var Qe, Xe = c ? Be(ze) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Ze = 0; Xe.length > Ze; Ze++) k(ze, Qe = Xe[Ze]) && !k(Ke, Qe) && Ue(Ke, Qe, He(ze, Qe));
		Ke.prototype = Ye, Ye.constructor = Ke, A(r, "Number", Ke)
	}! function (e, t) {
		var n = (o.Object || {})[e] || Object[e],
			i = {};
		i[e] = t(n), S(S.S + S.F * l(function () {
			n(1)
		}), "Object", i)
	}("keys", function () {
		return function (e) {
			return Oe(C(e))
		}
	});
	var et = x("match"),
		tt = function (e) {
			var t;
			return a(e) && (void 0 !== (t = e[et]) ? !!t : "RegExp" == U(e))
		},
		nt = function (e, t, n) {
			if (tt(t)) throw TypeError("String#" + n + " doesn't accept regex!");
			return String(P(e))
		},
		it = x("match"),
		rt = function (e) {
			var t = /./;
			try {
				"/./" [e](t)
			} catch (n) {
				try {
					return t[it] = !1, !"/./" [e](t)
				} catch (e) {}
			}
			return !0
		};
	S(S.P + S.F * rt("includes"), "String", {
		includes: function (e) {
			return !!~nt(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
		}
	});
	var ot = ye(!0);
	S(S.P, "Array", {
		includes: function (e) {
			return ot(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), oe("includes");
	var at = function (e, t, n) {
		var i = x(e),
			r = n(P, i, "" [e]),
			o = r[0],
			a = r[1];
		l(function () {
			var t = {};
			return t[i] = function () {
				return 7
			}, 7 != "" [e](t)
		}) && (A(String.prototype, e, o), v(RegExp.prototype, i, 2 == t ? function (e, t) {
			return a.call(e, this, t)
		} : function (e) {
			return a.call(e, this)
		}))
	};
	at("search", 1, function (e, t, n) {
		return [function (n) {
			var i = e(this),
				r = null == n ? void 0 : n[t];
			return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
		}, n]
	});
	var st = function () {
		var e = s(this),
			t = "";
		return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
	};
	c && "g" != /./g.flags && g.f(RegExp.prototype, "flags", {
		configurable: !0,
		get: st
	});
	var lt = /./.toString,
		ct = function (e) {
			A(RegExp.prototype, "toString", e, !0)
		};
	l(function () {
		return "/a/b" != lt.call({
			source: "a",
			flags: "b"
		})
	}) ? ct(function () {
		var e = s(this);
		return "/".concat(e.source, "/", "flags" in e ? e.flags : !c && e instanceof RegExp ? st.call(e) : void 0)
	}) : "toString" != lt.name && ct(function () {
		return lt.call(this)
	});
	var ut = function (e, t) {
			return {
				value: t,
				done: !!e
			}
		},
		dt = g.f,
		ht = x("toStringTag"),
		ft = function (e, t, n) {
			e && !k(e = n ? e : e.prototype, ht) && dt(e, ht, {
				configurable: !0,
				value: t
			})
		},
		pt = {};
	v(pt, x("iterator"), function () {
		return this
	});
	var mt = function (e, t, n) {
			e.prototype = Ve(pt, {
				next: y(1, n)
			}), ft(e, t + " Iterator")
		},
		gt = be("IE_PROTO"),
		yt = Object.prototype,
		vt = Object.getPrototypeOf || function (e) {
			return e = C(e), k(e, gt) ? e[gt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? yt : null
		},
		bt = x("iterator"),
		kt = !([].keys && "next" in [].keys()),
		wt = function () {
			return this
		},
		Tt = function (e, t, n, i, r, o, a) {
			mt(n, t, i);
			var s, l, c, u = function (e) {
					if (!kt && e in p) return p[e];
					switch (e) {
						case "keys":
						case "values":
							return function () {
								return new n(this, e)
							}
					}
					return function () {
						return new n(this, e)
					}
				},
				d = t + " Iterator",
				h = "values" == r,
				f = !1,
				p = e.prototype,
				m = p[bt] || p["@@iterator"] || r && p[r],
				g = m || u(r),
				y = r ? h ? u("entries") : g : void 0,
				b = "Array" == t && p.entries || m;
			if (b && (c = vt(b.call(new e))) !== Object.prototype && c.next && (ft(c, d, !0), "function" != typeof c[bt] && v(c, bt, wt)), h && m && "values" !== m.name && (f = !0, g = function () {
					return m.call(this)
				}), (kt || f || !p[bt]) && v(p, bt, g), M[t] = g, M[d] = wt, r)
				if (s = {
						values: h ? g : u("values"),
						keys: o ? g : u("keys"),
						entries: y
					}, a)
					for (l in s) l in p || A(p, l, s[l]);
				else S(S.P + S.F * (kt || f), t, s);
			return s
		},
		Et = Tt(Array, "Array", function (e, t) {
			this._t = ce(e), this._i = 0, this._k = t
		}, function () {
			var e = this._t,
				t = this._k,
				n = this._i++;
			return !e || n >= e.length ? (this._t = void 0, ut(1)) : ut(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
		}, "values");
	M.Arguments = M.Array, oe("keys"), oe("values"), oe("entries");
	for (var At = x("iterator"), _t = x("toStringTag"), St = M.Array, Pt = {
			CSSRuleList: !0,
			CSSStyleDeclaration: !1,
			CSSValueList: !1,
			ClientRectList: !1,
			DOMRectList: !1,
			DOMStringList: !1,
			DOMTokenList: !0,
			DataTransferItemList: !1,
			FileList: !1,
			HTMLAllCollection: !1,
			HTMLCollection: !1,
			HTMLFormElement: !1,
			HTMLSelectElement: !1,
			MediaList: !0,
			MimeTypeArray: !1,
			NamedNodeMap: !1,
			NodeList: !0,
			PaintRequestList: !1,
			Plugin: !1,
			PluginArray: !1,
			SVGLengthList: !1,
			SVGNumberList: !1,
			SVGPathSegList: !1,
			SVGPointList: !1,
			SVGStringList: !1,
			SVGTransformList: !1,
			SourceBufferList: !1,
			StyleSheetList: !0,
			TextTrackCueList: !1,
			TextTrackList: !1,
			TouchList: !1
		}, Ct = Oe(Pt), Lt = 0; Lt < Ct.length; Lt++) {
		var Mt, Nt = Ct[Lt],
			xt = Pt[Nt],
			Ot = r[Nt],
			jt = Ot && Ot.prototype;
		if (jt && (jt[At] || v(jt, At, St), jt[_t] || v(jt, _t, Nt), M[Nt] = St, xt))
			for (Mt in Et) jt[Mt] || A(jt, Mt, Et[Mt], !0)
	}
	var It = function (e) {
		return function (t, n) {
			var i, r, o = String(P(t)),
				a = D(n),
				s = o.length;
			return a < 0 || a >= s ? e ? "" : void 0 : (i = o.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (r = o.charCodeAt(a + 1)) < 56320 || r > 57343 ? e ? o.charAt(a) : i : e ? o.slice(a, a + 2) : r - 56320 + (i - 55296 << 10) + 65536
		}
	}(!0);
	Tt(String, "String", function (e) {
		this._t = String(e), this._i = 0
	}, function () {
		var e, t = this._t,
			n = this._i;
		return n >= t.length ? {
			value: void 0,
			done: !0
		} : (e = It(t, n), this._i += e.length, {
			value: e,
			done: !1
		})
	});
	var Rt = t(function (e) {
			var t = E("meta"),
				n = g.f,
				i = 0,
				r = Object.isExtensible || function () {
					return !0
				},
				o = !l(function () {
					return r(Object.preventExtensions({}))
				}),
				s = function (e) {
					n(e, t, {
						value: {
							i: "O" + ++i,
							w: {}
						}
					})
				},
				c = e.exports = {
					KEY: t,
					NEED: !1,
					fastKey: function (e, n) {
						if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
						if (!k(e, t)) {
							if (!r(e)) return "F";
							if (!n) return "E";
							s(e)
						}
						return e[t].i
					},
					getWeak: function (e, n) {
						if (!k(e, t)) {
							if (!r(e)) return !0;
							if (!n) return !1;
							s(e)
						}
						return e[t].w
					},
					onFreeze: function (e) {
						return o && c.NEED && r(e) && !k(e, t) && s(e), e
					}
				}
		}),
		Ft = (Rt.KEY, Rt.NEED, Rt.fastKey, Rt.getWeak, Rt.onFreeze, {
			f: Object.getOwnPropertySymbols
		}),
		Dt = Object.assign,
		qt = !Dt || l(function () {
			var e = {},
				t = {},
				n = Symbol(),
				i = "abcdefghijklmnopqrst";
			return e[n] = 7, i.split("").forEach(function (e) {
				t[e] = e
			}), 7 != Dt({}, e)[n] || Object.keys(Dt({}, t)).join("") != i
		}) ? function (e, t) {
			for (var n = C(e), i = arguments.length, r = 1, o = Ft.f, a = le.f; i > r;)
				for (var s, l = X(arguments[r++]), c = o ? Oe(l).concat(o(l)) : Oe(l), u = c.length, d = 0; u > d;) a.call(l, s = c[d++]) && (n[s] = l[s]);
			return n
		} : Dt,
		Vt = function (e, t, n) {
			for (var i in t) A(e, i, t[i], n);
			return e
		},
		Bt = function (e, t, n, i) {
			if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
			return e
		},
		Ht = t(function (e) {
			var t = {},
				n = {},
				r = e.exports = function (e, r, o, a, l) {
					var c, u, d, h, f = l ? function () {
							return e
						} : G(e),
						p = i(o, a, r ? 2 : 1),
						m = 0;
					if ("function" != typeof f) throw TypeError(e + " is not iterable!");
					if (I(f)) {
						for (c = V(e.length); c > m; m++)
							if ((h = r ? p(s(u = e[m])[0], u[1]) : p(e[m])) === t || h === n) return h
					} else
						for (d = f.call(e); !(u = d.next()).done;)
							if ((h = L(d, p, u.value, r)) === t || h === n) return h
				};
			r.BREAK = t, r.RETURN = n
		}),
		Ut = function (e, t) {
			if (!a(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
			return e
		},
		Wt = Rt.getWeak,
		Kt = ne(5),
		zt = ne(6),
		Yt = 0,
		Gt = function (e) {
			return e._l || (e._l = new $t)
		},
		$t = function () {
			this.a = []
		},
		Jt = function (e, t) {
			return Kt(e.a, function (e) {
				return e[0] === t
			})
		};
	$t.prototype = {
		get: function (e) {
			var t = Jt(this, e);
			if (t) return t[1]
		},
		has: function (e) {
			return !!Jt(this, e)
		},
		set: function (e, t) {
			var n = Jt(this, e);
			n ? n[1] = t : this.a.push([e, t])
		},
		delete: function (e) {
			var t = zt(this.a, function (t) {
				return t[0] === e
			});
			return ~t && this.a.splice(t, 1), !!~t
		}
	};
	var Qt = {
		getConstructor: function (e, t, n, i) {
			var r = e(function (e, o) {
				Bt(e, r, t, "_i"), e._t = t, e._i = Yt++, e._l = void 0, null != o && Ht(o, n, e[i], e)
			});
			return Vt(r.prototype, {
				delete: function (e) {
					if (!a(e)) return !1;
					var n = Wt(e);
					return !0 === n ? Gt(Ut(this, t)).delete(e) : n && k(n, this._i) && delete n[this._i]
				},
				has: function (e) {
					if (!a(e)) return !1;
					var n = Wt(e);
					return !0 === n ? Gt(Ut(this, t)).has(e) : n && k(n, this._i)
				}
			}), r
		},
		def: function (e, t, n) {
			var i = Wt(s(t), !0);
			return !0 === i ? Gt(e).set(t, n) : i[e._i] = n, e
		},
		ufstore: Gt
	};
	t(function (e) {
		var t, n = ne(0),
			i = Rt.getWeak,
			o = Object.isExtensible,
			s = Qt.ufstore,
			c = {},
			u = function (e) {
				return function () {
					return e(this, arguments.length > 0 ? arguments[0] : void 0)
				}
			},
			d = {
				get: function (e) {
					if (a(e)) {
						var t = i(e);
						return !0 === t ? s(Ut(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
					}
				},
				set: function (e, t) {
					return Qt.def(Ut(this, "WeakMap"), e, t)
				}
			},
			h = e.exports = function (e, t, n, i, o, s) {
				var c = r[e],
					u = c,
					d = o ? "set" : "add",
					h = u && u.prototype,
					f = {},
					p = function (e) {
						var t = h[e];
						A(h, e, "delete" == e ? function (e) {
							return !(s && !a(e)) && t.call(this, 0 === e ? 0 : e)
						} : "has" == e ? function (e) {
							return !(s && !a(e)) && t.call(this, 0 === e ? 0 : e)
						} : "get" == e ? function (e) {
							return s && !a(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
						} : "add" == e ? function (e) {
							return t.call(this, 0 === e ? 0 : e), this
						} : function (e, n) {
							return t.call(this, 0 === e ? 0 : e, n), this
						})
					};
				if ("function" == typeof u && (s || h.forEach && !l(function () {
						(new u).entries().next()
					}))) {
					var m = new u,
						g = m[d](s ? {} : -0, 1) != m,
						y = l(function () {
							m.has(1)
						}),
						v = Q(function (e) {
							new u(e)
						}),
						b = !s && l(function () {
							for (var e = new u, t = 5; t--;) e[d](t, t);
							return !e.has(-0)
						});
					v || ((u = t(function (t, n) {
						Bt(t, u, e);
						var i = pe(new c, t, u);
						return null != n && Ht(n, o, i[d], i), i
					})).prototype = h, h.constructor = u), (y || b) && (p("delete"), p("has"), o && p("get")), (b || g) && p(d), s && h.clear && delete h.clear
				} else u = i.getConstructor(t, e, o, d), Vt(u.prototype, n), Rt.NEED = !0;
				return ft(u, e), f[e] = u, S(S.G + S.W + S.F * (u != c), f), s || i.setStrong(u, e, o), u
			}("WeakMap", u, d, Qt, !0, !0);
		l(function () {
			return 7 != (new h).set((Object.freeze || Object)(c), 7).get(c)
		}) && (t = Qt.getConstructor(u, "WeakMap"), qt(t.prototype, d), Rt.NEED = !0, n(["delete", "has", "get", "set"], function (e) {
			var n = h.prototype,
				i = n[e];
			A(n, e, function (n, r) {
				if (a(n) && !o(n)) {
					this._f || (this._f = new t);
					var s = this._f[e](n, r);
					return "set" == e ? this : s
				}
				return i.call(this, n, r)
			})
		}))
	});

	function Xt(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function Zt(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}

	function en(e, t, n) {
		return t && Zt(e.prototype, t), n && Zt(e, n), e
	}

	function tn(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function nn(e, t) {
		return function (e) {
			if (Array.isArray(e)) return e
		}(e) || function (e, t) {
			var n = [],
				i = !0,
				r = !1,
				o = void 0;
			try {
				for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
			} catch (e) {
				r = !0, o = e
			} finally {
				try {
					i || null == s.return || s.return()
				} finally {
					if (r) throw o
				}
			}
			return n
		}(e, t) || function () {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}()
	}

	function rn(e) {
		return function (e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
		}(e) || function (e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}(e) || function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}
	S(S.S + S.F, "Object", {
		assign: qt
	}), at("split", 2, function (e, t, n) {
		var i = tt,
			r = n,
			o = [].push;
		if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
			var a = void 0 === /()??/.exec("")[1];
			n = function (e, t) {
				var n = String(this);
				if (void 0 === e && 0 === t) return [];
				if (!i(e)) return r.call(n, e, t);
				var s, l, c, u, d, h = [],
					f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
					p = 0,
					m = void 0 === t ? 4294967295 : t >>> 0,
					g = new RegExp(e.source, f + "g");
				for (a || (s = new RegExp("^" + g.source + "$(?!\\s)", f));
					(l = g.exec(n)) && !((c = l.index + l[0].length) > p && (h.push(n.slice(p, l.index)), !a && l.length > 1 && l[0].replace(s, function () {
						for (d = 1; d < arguments.length - 2; d++) void 0 === arguments[d] && (l[d] = void 0)
					}), l.length > 1 && l.index < n.length && o.apply(h, l.slice(1)), u = l[0].length, p = c, h.length >= m));) g.lastIndex === l.index && g.lastIndex++;
				return p === n.length ? !u && g.test("") || h.push("") : h.push(n.slice(p)), h.length > m ? h.slice(0, m) : h
			}
		} else "0".split(void 0, 0).length && (n = function (e, t) {
			return void 0 === e && 0 === t ? [] : r.call(this, e, t)
		});
		return [function (i, r) {
			var o = e(this),
				a = null == i ? void 0 : i[t];
			return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
		}, n]
	});
	var on = le.f,
		an = function (e) {
			return function (t) {
				for (var n, i = ce(t), r = Oe(i), o = r.length, a = 0, s = []; o > a;) on.call(i, n = r[a++]) && s.push(e ? [n, i[n]] : i[n]);
				return s
			}
		},
		sn = an(!0);
	S(S.S, "Object", {
		entries: function (e) {
			return sn(e)
		}
	});
	var ln = an(!1);
	S(S.S, "Object", {
		values: function (e) {
			return ln(e)
		}
	}), at("replace", 2, function (e, t, n) {
		return [function (i, r) {
			var o = e(this),
				a = null == i ? void 0 : i[t];
			return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
		}, n]
	});
	var cn, un, dn, hn = x("species"),
		fn = r.process,
		pn = r.setImmediate,
		mn = r.clearImmediate,
		gn = r.MessageChannel,
		yn = r.Dispatch,
		vn = 0,
		bn = {},
		kn = function () {
			var e = +this;
			if (bn.hasOwnProperty(e)) {
				var t = bn[e];
				delete bn[e], t()
			}
		},
		wn = function (e) {
			kn.call(e.data)
		};
	pn && mn || (pn = function (e) {
		for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
		return bn[++vn] = function () {
			! function (e, t, n) {
				var i = void 0 === n;
				switch (t.length) {
					case 0:
						return i ? e() : e.call(n);
					case 1:
						return i ? e(t[0]) : e.call(n, t[0]);
					case 2:
						return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
					case 3:
						return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
					case 4:
						return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
				}
				e.apply(n, t)
			}("function" == typeof e ? e : Function(e), t)
		}, cn(vn), vn
	}, mn = function (e) {
		delete bn[e]
	}, "process" == U(fn) ? cn = function (e) {
		fn.nextTick(i(kn, e, 1))
	} : yn && yn.now ? cn = function (e) {
		yn.now(i(kn, e, 1))
	} : gn ? (dn = (un = new gn).port2, un.port1.onmessage = wn, cn = i(dn.postMessage, dn, 1)) : r.addEventListener && "function" == typeof postMessage && !r.importScripts ? (cn = function (e) {
		r.postMessage(e + "", "*")
	}, r.addEventListener("message", wn, !1)) : cn = "onreadystatechange" in h("script") ? function (e) {
		Re.appendChild(h("script")).onreadystatechange = function () {
			Re.removeChild(this), kn.call(e)
		}
	} : function (e) {
		setTimeout(i(kn, e, 1), 0)
	});
	var Tn = {
			set: pn,
			clear: mn
		},
		En = Tn.set,
		An = r.MutationObserver || r.WebKitMutationObserver,
		_n = r.process,
		Sn = r.Promise,
		Pn = "process" == U(_n);

	function Cn(e) {
		var t, i;
		this.promise = new e(function (e, n) {
			if (void 0 !== t || void 0 !== i) throw TypeError("Bad Promise constructor");
			t = e, i = n
		}), this.resolve = n(t), this.reject = n(i)
	}
	var Ln, Mn, Nn, xn, On = {
			f: function (e) {
				return new Cn(e)
			}
		},
		jn = function (e) {
			try {
				return {
					e: !1,
					v: e()
				}
			} catch (e) {
				return {
					e: !0,
					v: e
				}
			}
		},
		In = r.navigator,
		Rn = In && In.userAgent || "",
		Fn = x("species"),
		Dn = function (e) {
			var t = r[e];
			c && t && !t[Fn] && g.f(t, Fn, {
				configurable: !0,
				get: function () {
					return this
				}
			})
		},
		qn = Tn.set,
		Vn = function () {
			var e, t, n, i = function () {
				var i, r;
				for (Pn && (i = _n.domain) && i.exit(); e;) {
					r = e.fn, e = e.next;
					try {
						r()
					} catch (i) {
						throw e ? n() : t = void 0, i
					}
				}
				t = void 0, i && i.enter()
			};
			if (Pn) n = function () {
				_n.nextTick(i)
			};
			else if (!An || r.navigator && r.navigator.standalone)
				if (Sn && Sn.resolve) {
					var o = Sn.resolve(void 0);
					n = function () {
						o.then(i)
					}
				} else n = function () {
					En.call(r, i)
				};
			else {
				var a = !0,
					s = document.createTextNode("");
				new An(i).observe(s, {
					characterData: !0
				}), n = function () {
					s.data = a = !a
				}
			}
			return function (i) {
				var r = {
					fn: i,
					next: void 0
				};
				t && (t.next = r), e || (e = r, n()), t = r
			}
		}(),
		Bn = r.TypeError,
		Hn = r.process,
		Un = Hn && Hn.versions,
		Wn = Un && Un.v8 || "",
		Kn = r.Promise,
		zn = "process" == z(Hn),
		Yn = function () {},
		Gn = Mn = On.f,
		$n = !! function () {
			try {
				var e = Kn.resolve(1),
					t = (e.constructor = {})[x("species")] = function (e) {
						e(Yn, Yn)
					};
				return (zn || "function" == typeof PromiseRejectionEvent) && e.then(Yn) instanceof t && 0 !== Wn.indexOf("6.6") && -1 === Rn.indexOf("Chrome/66")
			} catch (e) {}
		}(),
		Jn = function (e) {
			var t;
			return !(!a(e) || "function" != typeof (t = e.then)) && t
		},
		Qn = function (e, t) {
			if (!e._n) {
				e._n = !0;
				var n = e._c;
				Vn(function () {
					for (var i = e._v, r = 1 == e._s, o = 0, a = function (t) {
							var n, o, a, s = r ? t.ok : t.fail,
								l = t.resolve,
								c = t.reject,
								u = t.domain;
							try {
								s ? (r || (2 == e._h && ei(e), e._h = 1), !0 === s ? n = i : (u && u.enter(), n = s(i), u && (u.exit(), a = !0)), n === t.promise ? c(Bn("Promise-chain cycle")) : (o = Jn(n)) ? o.call(n, l, c) : l(n)) : c(i)
							} catch (e) {
								u && !a && u.exit(), c(e)
							}
						}; n.length > o;) a(n[o++]);
					e._c = [], e._n = !1, t && !e._h && Xn(e)
				})
			}
		},
		Xn = function (e) {
			qn.call(r, function () {
				var t, n, i, o = e._v,
					a = Zn(e);
				if (a && (t = jn(function () {
						zn ? Hn.emit("unhandledRejection", o, e) : (n = r.onunhandledrejection) ? n({
							promise: e,
							reason: o
						}) : (i = r.console) && i.error && i.error("Unhandled promise rejection", o)
					}), e._h = zn || Zn(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
			})
		},
		Zn = function (e) {
			return 1 !== e._h && 0 === (e._a || e._c).length
		},
		ei = function (e) {
			qn.call(r, function () {
				var t;
				zn ? Hn.emit("rejectionHandled", e) : (t = r.onrejectionhandled) && t({
					promise: e,
					reason: e._v
				})
			})
		},
		ti = function (e) {
			var t = this;
			t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), Qn(t, !0))
		},
		ni = function (e) {
			var t, n = this;
			if (!n._d) {
				n._d = !0, n = n._w || n;
				try {
					if (n === e) throw Bn("Promise can't be resolved itself");
					(t = Jn(e)) ? Vn(function () {
						var r = {
							_w: n,
							_d: !1
						};
						try {
							t.call(e, i(ni, r, 1), i(ti, r, 1))
						} catch (e) {
							ti.call(r, e)
						}
					}): (n._v = e, n._s = 1, Qn(n, !1))
				} catch (e) {
					ti.call({
						_w: n,
						_d: !1
					}, e)
				}
			}
		};
	$n || (Kn = function (e) {
		Bt(this, Kn, "Promise", "_h"), n(e), Ln.call(this);
		try {
			e(i(ni, this, 1), i(ti, this, 1))
		} catch (e) {
			ti.call(this, e)
		}
	}, (Ln = function (e) {
		this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
	}).prototype = Vt(Kn.prototype, {
		then: function (e, t) {
			var i, r, o, a = Gn((i = Kn, void 0 === (o = s(this).constructor) || null == (r = s(o)[hn]) ? i : n(r)));
			return a.ok = "function" != typeof e || e, a.fail = "function" == typeof t && t, a.domain = zn ? Hn.domain : void 0, this._c.push(a), this._a && this._a.push(a), this._s && Qn(this, !1), a.promise
		},
		catch: function (e) {
			return this.then(void 0, e)
		}
	}), Nn = function () {
		var e = new Ln;
		this.promise = e, this.resolve = i(ni, e, 1), this.reject = i(ti, e, 1)
	}, On.f = Gn = function (e) {
		return e === Kn || e === xn ? new Nn(e) : Mn(e)
	}), S(S.G + S.W + S.F * !$n, {
		Promise: Kn
	}), ft(Kn, "Promise"), Dn("Promise"), xn = o.Promise, S(S.S + S.F * !$n, "Promise", {
		reject: function (e) {
			var t = Gn(this);
			return (0, t.reject)(e), t.promise
		}
	}), S(S.S + S.F * !$n, "Promise", {
		resolve: function (e) {
			return function (e, t) {
				if (s(e), a(t) && t.constructor === e) return t;
				var n = On.f(e);
				return (0, n.resolve)(t), n.promise
			}(this, e)
		}
	}), S(S.S + S.F * !($n && Q(function (e) {
		Kn.all(e).catch(Yn)
	})), "Promise", {
		all: function (e) {
			var t = this,
				n = Gn(t),
				i = n.resolve,
				r = n.reject,
				o = jn(function () {
					var n = [],
						o = 0,
						a = 1;
					Ht(e, !1, function (e) {
						var s = o++,
							l = !1;
						n.push(void 0), a++, t.resolve(e).then(function (e) {
							l || (l = !0, n[s] = e, --a || i(n))
						}, r)
					}), --a || i(n)
				});
			return o.e && r(o.v), n.promise
		},
		race: function (e) {
			var t = this,
				n = Gn(t),
				i = n.reject,
				r = jn(function () {
					Ht(e, !1, function (e) {
						t.resolve(e).then(n.resolve, i)
					})
				});
			return r.e && i(r.v), n.promise
		}
	});
	var ii = "".startsWith;
	S(S.P + S.F * rt("startsWith"), "String", {
		startsWith: function (e) {
			var t = nt(this, e, "startsWith"),
				n = V(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
				i = String(e);
			return ii ? ii.call(t, i, n) : t.slice(n, n + i.length) === i
		}
	}), S(S.S, "Number", {
		isNaN: function (e) {
			return e != e
		}
	});
	var ri = function (e) {
			return null != e ? e.constructor : null
		},
		oi = function (e, t) {
			return Boolean(e && t && e instanceof t)
		},
		ai = function (e) {
			return null == e
		},
		si = function (e) {
			return ri(e) === Object
		},
		li = function (e) {
			return ri(e) === String
		},
		ci = function (e) {
			return Array.isArray(e)
		},
		ui = function (e) {
			return oi(e, NodeList)
		},
		di = function (e) {
			return ai(e) || (li(e) || ci(e) || ui(e)) && !e.length || si(e) && !Object.keys(e).length
		},
		hi = {
			nullOrUndefined: ai,
			object: si,
			number: function (e) {
				return ri(e) === Number && !Number.isNaN(e)
			},
			string: li,
			boolean: function (e) {
				return ri(e) === Boolean
			},
			function: function (e) {
				return ri(e) === Function
			},
			array: ci,
			weakMap: function (e) {
				return oi(e, WeakMap)
			},
			nodeList: ui,
			element: function (e) {
				return oi(e, Element)
			},
			textNode: function (e) {
				return ri(e) === Text
			},
			event: function (e) {
				return oi(e, Event)
			},
			keyboardEvent: function (e) {
				return oi(e, KeyboardEvent)
			},
			cue: function (e) {
				return oi(e, window.TextTrackCue) || oi(e, window.VTTCue)
			},
			track: function (e) {
				return oi(e, TextTrack) || !ai(e) && li(e.kind)
			},
			url: function (e) {
				if (oi(e, window.URL)) return !0;
				if (!li(e)) return !1;
				var t = e;
				e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
				try {
					return !di(new URL(t).hostname)
				} catch (e) {
					return !1
				}
			},
			empty: di
		},
		fi = function () {
			var e = !1;
			try {
				var t = Object.defineProperty({}, "passive", {
					get: function () {
						return e = !0, null
					}
				});
				window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
			} catch (e) {}
			return e
		}();

	function pi(e, t, n) {
		var i = this,
			r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
			o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
			a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
		if (e && "addEventListener" in e && !hi.empty(t) && hi.function(n)) {
			var s = t.split(" "),
				l = a;
			fi && (l = {
				passive: o,
				capture: a
			}), s.forEach(function (t) {
				i && i.eventListeners && r && i.eventListeners.push({
					element: e,
					type: t,
					callback: n,
					options: l
				}), e[r ? "addEventListener" : "removeEventListener"](t, n, l)
			})
		}
	}

	function mi(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 ? arguments[2] : void 0,
			i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
			r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
		pi.call(this, e, t, n, !0, i, r)
	}

	function gi(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 ? arguments[2] : void 0,
			i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
			r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
		pi.call(this, e, t, n, !1, i, r)
	}

	function yi(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 ? arguments[2] : void 0,
			i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
			r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
		pi.call(this, e, t, function o() {
			gi(e, t, o, i, r);
			for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++) s[l] = arguments[l];
			n.apply(this, s)
		}, !0, i, r)
	}

	function vi(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
		if (hi.element(e) && !hi.empty(t)) {
			var r = new CustomEvent(t, {
				bubbles: n,
				detail: Object.assign({}, i, {
					plyr: this
				})
			});
			e.dispatchEvent(r)
		}
	}

	function bi(e, t) {
		var n = e.length ? e : [e];
		Array.from(n).reverse().forEach(function (e, n) {
			var i = n > 0 ? t.cloneNode(!0) : t,
				r = e.parentNode,
				o = e.nextSibling;
			i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i)
		})
	}

	function ki(e, t) {
		hi.element(e) && !hi.empty(t) && Object.entries(t).filter(function (e) {
			var t = nn(e, 2)[1];
			return !hi.nullOrUndefined(t)
		}).forEach(function (t) {
			var n = nn(t, 2),
				i = n[0],
				r = n[1];
			return e.setAttribute(i, r)
		})
	}

	function wi(e, t, n) {
		var i = document.createElement(e);
		return hi.object(t) && ki(i, t), hi.string(n) && (i.innerText = n), i
	}

	function Ti(e, t, n, i) {
		hi.element(t) && t.appendChild(wi(e, n, i))
	}

	function Ei(e) {
		hi.nodeList(e) || hi.array(e) ? Array.from(e).forEach(Ei) : hi.element(e) && hi.element(e.parentNode) && e.parentNode.removeChild(e)
	}

	function Ai(e) {
		if (hi.element(e))
			for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
	}

	function _i(e, t) {
		return hi.element(t) && hi.element(t.parentNode) && hi.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
	}

	function Si(e, t) {
		if (!hi.string(e) || hi.empty(e)) return {};
		var n = {},
			i = t;
		return e.split(",").forEach(function (e) {
			var t = e.trim(),
				r = t.replace(".", ""),
				o = t.replace(/[[\]]/g, "").split("="),
				a = o[0],
				s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
			switch (t.charAt(0)) {
				case ".":
					hi.object(i) && hi.string(i.class) && (i.class += " ".concat(r)), n.class = r;
					break;
				case "#":
					n.id = t.replace("#", "");
					break;
				case "[":
					n[a] = s
			}
		}), n
	}

	function Pi(e, t) {
		if (hi.element(e)) {
			var n = t;
			hi.boolean(n) || (n = !e.hidden), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
		}
	}

	function Ci(e, t, n) {
		if (hi.nodeList(e)) return Array.from(e).map(function (e) {
			return Ci(e, t, n)
		});
		if (hi.element(e)) {
			var i = "toggle";
			return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
		}
		return !1
	}

	function Li(e, t) {
		return hi.element(e) && e.classList.contains(t)
	}

	function Mi(e, t) {
		return function () {
			return Array.from(document.querySelectorAll(t)).includes(this)
		}.call(e, t)
	}

	function Ni(e) {
		return this.elements.container.querySelectorAll(e)
	}

	function xi(e) {
		return this.elements.container.querySelector(e)
	}

	function Oi() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
			t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		hi.element(e) && (e.focus({
			preventScroll: !0
		}), t && Ci(e, this.config.classNames.tabFocus))
	}
	var ji, Ii, Ri, Fi = (ji = document.createElement("span"), Ii = {
		WebkitTransition: "webkitTransitionEnd",
		MozTransition: "transitionend",
		OTransition: "oTransitionEnd otransitionend",
		transition: "transitionend"
	}, Ri = Object.keys(Ii).find(function (e) {
		return void 0 !== ji.style[e]
	}), !!hi.string(Ri) && Ii[Ri]);

	function Di(e) {
		setTimeout(function () {
			try {
				Pi(e, !0), e.offsetHeight, Pi(e, !1)
			} catch (e) {}
		}, 0)
	}
	var qi, Vi = {
			isIE: !!document.documentMode,
			isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
			isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
			isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
		},
		Bi = {
			"audio/ogg": "vorbis",
			"audio/wav": "1",
			"video/webm": "vp8, vorbis",
			"video/mp4": "avc1.42E01E, mp4a.40.2",
			"video/ogg": "theora"
		},
		Hi = {
			audio: "canPlayType" in document.createElement("audio"),
			video: "canPlayType" in document.createElement("video"),
			check: function (e, t, n) {
				var i = Vi.isIPhone && n && Hi.playsinline,
					r = Hi[e] || "html5" !== t;
				return {
					api: r,
					ui: r && Hi.rangeInput && ("video" !== e || !Vi.isIPhone || i)
				}
			},
			pip: !(Vi.isIPhone || !hi.function(wi("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || wi("video").disablePictureInPicture)),
			airplay: hi.function(window.WebKitPlaybackTargetAvailabilityEvent),
			playsinline: "playsInline" in document.createElement("video"),
			mime: function (e) {
				var t = nn(e.split("/"), 1)[0],
					n = e;
				if (!this.isHTML5 || t !== this.type) return !1;
				Object.keys(Bi).includes(n) && (n += '; codecs="'.concat(Bi[e], '"'));
				try {
					return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
				} catch (e) {
					return !1
				}
			},
			textTracks: "textTracks" in document.createElement("video"),
			rangeInput: (qi = document.createElement("input"), qi.type = "range", "range" === qi.type),
			touch: "ontouchstart" in document.documentElement,
			transitions: !1 !== Fi,
			reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
		},
		Ui = {
			getSources: function () {
				var e = this;
				return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
					return Hi.mime.call(e, t.getAttribute("type"))
				}) : []
			},
			getQualityOptions: function () {
				return Ui.getSources.call(this).map(function (e) {
					return Number(e.getAttribute("size"))
				}).filter(Boolean)
			},
			extend: function () {
				if (this.isHTML5) {
					var e = this;
					Object.defineProperty(e.media, "quality", {
						get: function () {
							var t = Ui.getSources.call(e).find(function (t) {
								return t.getAttribute("src") === e.source
							});
							return t && Number(t.getAttribute("size"))
						},
						set: function (t) {
							var n = Ui.getSources.call(e).find(function (e) {
								return Number(e.getAttribute("size")) === t
							});
							if (n) {
								var i = e.media,
									r = i.currentTime,
									o = i.paused,
									a = i.preload,
									s = i.readyState;
								e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", function () {
									e.currentTime = r, o || e.play()
								}), e.media.load()), vi.call(e, e.media, "qualitychange", !1, {
									quality: t
								})
							}
						}
					})
				}
			},
			cancelRequests: function () {
				this.isHTML5 && (Ei(Ui.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
			}
		};

	function Wi(e) {
		return hi.array(e) ? e.filter(function (t, n) {
			return e.indexOf(t) === n
		}) : e
	}

	function Ki(e, t) {
		return t.split(".").reduce(function (e, t) {
			return e && e[t]
		}, e)
	}

	function zi() {
		for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
		if (!n.length) return e;
		var r = n.shift();
		return hi.object(r) ? (Object.keys(r).forEach(function (t) {
			hi.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, tn({}, t, {})), zi(e[t], r[t])) : Object.assign(e, tn({}, t, r[t]))
		}), zi.apply(void 0, [e].concat(n))) : e
	}
	var Yi = g.f,
		Gi = _e.f,
		$i = r.RegExp,
		Ji = $i,
		Qi = $i.prototype,
		Xi = /a/g,
		Zi = /a/g,
		er = new $i(Xi) !== Xi;
	if (c && (!er || l(function () {
			return Zi[x("match")] = !1, $i(Xi) != Xi || $i(Zi) == Zi || "/a/i" != $i(Xi, "i")
		}))) {
		$i = function (e, t) {
			var n = this instanceof $i,
				i = tt(e),
				r = void 0 === t;
			return !n && i && e.constructor === $i && r ? e : pe(er ? new Ji(i && !r ? e.source : e, t) : Ji((i = e instanceof $i) ? e.source : e, i && r ? st.call(e) : t), n ? this : Qi, $i)
		};
		for (var tr = function (e) {
				e in $i || Yi($i, e, {
					configurable: !0,
					get: function () {
						return Ji[e]
					},
					set: function (t) {
						Ji[e] = t
					}
				})
			}, nr = Gi(Ji), ir = 0; nr.length > ir;) tr(nr[ir++]);
		Qi.constructor = $i, $i.prototype = Qi, A(r, "RegExp", $i)
	}

	function rr(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
		return hi.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
			return n[t].toString()
		})
	}

	function or() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
			t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
		return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), n.toString())
	}

	function ar() {
		return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
			return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
		})
	}

	function sr() {
		var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
		return (e = function () {
			var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
			return e = or(e, "-", " "), e = or(e, "_", " "), or(e = ar(e), " ", "")
		}(e)).charAt(0).toLowerCase() + e.slice(1)
	}

	function lr(e) {
		var t = document.createElement("div");
		return t.appendChild(e), t.innerHTML
	}
	Dn("RegExp");
	var cr = {
			pip: "PIP",
			airplay: "AirPlay",
			html5: "HTML5",
			vimeo: "Vimeo",
			youtube: "YouTube"
		},
		ur = function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (hi.empty(e) || hi.empty(t)) return "";
			var n = Ki(t.i18n, e);
			if (hi.empty(n)) return Object.keys(cr).includes(e) ? cr[e] : "";
			var i = {
				"{seektime}": t.seekTime,
				"{title}": t.title
			};
			return Object.entries(i).forEach(function (e) {
				var t = nn(e, 2),
					i = t[0],
					r = t[1];
				n = or(n, i, r)
			}), n
		},
		dr = function () {
			function e(t) {
				Xt(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
			}
			return en(e, [{
				key: "get",
				value: function (t) {
					if (!e.supported || !this.enabled) return null;
					var n = window.localStorage.getItem(this.key);
					if (hi.empty(n)) return null;
					var i = JSON.parse(n);
					return hi.string(t) && t.length ? i[t] : i
				}
			}, {
				key: "set",
				value: function (t) {
					if (e.supported && this.enabled && hi.object(t)) {
						var n = this.get();
						hi.empty(n) && (n = {}), zi(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
					}
				}
			}], [{
				key: "supported",
				get: function () {
					try {
						if (!("localStorage" in window)) return !1;
						return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0
					} catch (e) {
						return !1
					}
				}
			}]), e
		}();

	function hr(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
		return new Promise(function (n, i) {
			try {
				var r = new XMLHttpRequest;
				if (!("withCredentials" in r)) return;
				r.addEventListener("load", function () {
					if ("text" === t) try {
						n(JSON.parse(r.responseText))
					} catch (e) {
						n(r.responseText)
					} else n(r.response)
				}), r.addEventListener("error", function () {
					throw new Error(r.status)
				}), r.open("GET", e, !0), r.responseType = t, r.send()
			} catch (e) {
				i(e)
			}
		})
	}

	function fr(e, t) {
		if (hi.string(e)) {
			var n = hi.string(t),
				i = function () {
					return null !== document.getElementById(t)
				},
				r = function (e, t) {
					e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e)
				};
			if (!n || !i()) {
				var o = dr.supported,
					a = document.createElement("div");
				if (a.setAttribute("hidden", ""), n && a.setAttribute("id", t), o) {
					var s = window.localStorage.getItem("".concat("cache", "-").concat(t));
					if (null !== s) {
						var l = JSON.parse(s);
						r(a, l.content)
					}
				}
				hr(e).then(function (e) {
					hi.empty(e) || (o && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
						content: e
					})), r(a, e))
				}).catch(function () {})
			}
		}
	}
	var pr = function (e) {
			return parseInt(e / 60 / 60 % 60, 10)
		},
		mr = function (e) {
			return parseInt(e / 60 % 60, 10)
		},
		gr = function (e) {
			return parseInt(e % 60, 10)
		};

	function yr() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
			t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
		if (!hi.number(e)) return yr(null, t, n);
		var i = function (e) {
				return "0".concat(e).slice(-2)
			},
			r = pr(e),
			o = mr(e),
			a = gr(e);
		return r = t || r > 0 ? "".concat(r, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(r).concat(i(o), ":").concat(i(a))
	}
	var vr = {
		getIconUrl: function () {
			var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || Vi.isIE && !window.svg4everybody;
			return {
				url: this.config.iconUrl,
				cors: e
			}
		},
		findElements: function () {
			try {
				return this.elements.controls = xi.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
					play: Ni.call(this, this.config.selectors.buttons.play),
					pause: xi.call(this, this.config.selectors.buttons.pause),
					restart: xi.call(this, this.config.selectors.buttons.restart),
					rewind: xi.call(this, this.config.selectors.buttons.rewind),
					fastForward: xi.call(this, this.config.selectors.buttons.fastForward),
					mute: xi.call(this, this.config.selectors.buttons.mute),
					pip: xi.call(this, this.config.selectors.buttons.pip),
					airplay: xi.call(this, this.config.selectors.buttons.airplay),
					settings: xi.call(this, this.config.selectors.buttons.settings),
					captions: xi.call(this, this.config.selectors.buttons.captions),
					fullscreen: xi.call(this, this.config.selectors.buttons.fullscreen)
				}, this.elements.progress = xi.call(this, this.config.selectors.progress), this.elements.inputs = {
					seek: xi.call(this, this.config.selectors.inputs.seek),
					volume: xi.call(this, this.config.selectors.inputs.volume)
				}, this.elements.display = {
					buffer: xi.call(this, this.config.selectors.display.buffer),
					currentTime: xi.call(this, this.config.selectors.display.currentTime),
					duration: xi.call(this, this.config.selectors.display.duration)
				}, hi.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
			} catch (e) {
				return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
			}
		},
		createIcon: function (e, t) {
			var n = vr.getIconUrl.call(this),
				i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
				r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			ki(r, zi(t, {
				role: "presentation",
				focusable: "false"
			}));
			var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
				a = "".concat(i, "-").concat(e);
			return "href" in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
		},
		createLabel: function (e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = ur(e, this.config);
			return wi("span", Object.assign({}, t, {
				class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
			}), n)
		},
		createBadge: function (e) {
			if (hi.empty(e)) return null;
			var t = wi("span", {
				class: this.config.classNames.menu.value
			});
			return t.appendChild(wi("span", {
				class: this.config.classNames.menu.badge
			}, e)), t
		},
		createButton: function (e, t) {
			var n = Object.assign({}, t),
				i = sr(e),
				r = {
					element: "button",
					toggle: !1,
					label: null,
					icon: null,
					labelPressed: null,
					iconPressed: null
				};
			switch (["element", "icon", "label"].forEach(function (e) {
				Object.keys(n).includes(e) && (r[e] = n[e], delete n[e])
			}), "button" !== r.element || Object.keys(n).includes("type") || (n.type = "button"), Object.keys(n).includes("class") ? n.class.includes(this.config.classNames.control) || (n.class += " ".concat(this.config.classNames.control)) : n.class = this.config.classNames.control, e) {
				case "play":
					r.toggle = !0, r.label = "play", r.labelPressed = "pause", r.icon = "play", r.iconPressed = "pause";
					break;
				case "mute":
					r.toggle = !0, r.label = "mute", r.labelPressed = "unmute", r.icon = "volume", r.iconPressed = "muted";
					break;
				case "captions":
					r.toggle = !0, r.label = "enableCaptions", r.labelPressed = "disableCaptions", r.icon = "captions-off", r.iconPressed = "captions-on";
					break;
				case "fullscreen":
					r.toggle = !0, r.label = "enterFullscreen", r.labelPressed = "exitFullscreen", r.icon = "enter-fullscreen", r.iconPressed = "exit-fullscreen";
					break;
				case "play-large":
					n.class += " ".concat(this.config.classNames.control, "--overlaid"), i = "play", r.label = "play", r.icon = "play";
					break;
				default:
					hi.empty(r.label) && (r.label = i), hi.empty(r.icon) && (r.icon = e)
			}
			var o = wi(r.element);
			return r.toggle ? (o.appendChild(vr.createIcon.call(this, r.iconPressed, {
				class: "icon--pressed"
			})), o.appendChild(vr.createIcon.call(this, r.icon, {
				class: "icon--not-pressed"
			})), o.appendChild(vr.createLabel.call(this, r.labelPressed, {
				class: "label--pressed"
			})), o.appendChild(vr.createLabel.call(this, r.label, {
				class: "label--not-pressed"
			}))) : (o.appendChild(vr.createIcon.call(this, r.icon)), o.appendChild(vr.createLabel.call(this, r.label))), zi(n, Si(this.config.selectors.buttons[i], n)), ki(o, n), "play" === i ? (hi.array(this.elements.buttons[i]) || (this.elements.buttons[i] = []), this.elements.buttons[i].push(o)) : this.elements.buttons[i] = o, o
		},
		createRange: function (e, t) {
			var n = wi("input", zi(Si(this.config.selectors.inputs[e]), {
				type: "range",
				min: 0,
				max: 100,
				step: .01,
				value: 0,
				autocomplete: "off",
				role: "slider",
				"aria-label": ur(e, this.config),
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": 0
			}, t));
			return this.elements.inputs[e] = n, vr.updateRangeFill.call(this, n), n
		},
		createProgress: function (e, t) {
			var n = wi("progress", zi(Si(this.config.selectors.display[e]), {
				min: 0,
				max: 100,
				value: 0,
				role: "presentation",
				"aria-hidden": !0
			}, t));
			if ("volume" !== e) {
				n.appendChild(wi("span", null, "0"));
				var i = {
						played: "played",
						buffer: "buffered"
					}[e],
					r = i ? ur(i, this.config) : "";
				n.innerText = "% ".concat(r.toLowerCase())
			}
			return this.elements.display[e] = n, n
		},
		createTime: function (e) {
			var t = Si(this.config.selectors.display[e]),
				n = wi("div", zi(t, {
					class: "".concat(this.config.classNames.display.time, " ").concat(t.class ? t.class : "").trim(),
					"aria-label": ur(e, this.config)
				}), "00:00");
			return this.elements.display[e] = n, n
		},
		bindMenuItemShortcuts: function (e, t) {
			var n = this;
			mi(e, "keydown keyup", function (i) {
				if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
					var r, o = Mi(e, '[role="menuitemradio"]');
					if (!o && [32, 39].includes(i.which)) vr.showMenuPanel.call(n, t, !0);
					else 32 !== i.which && (40 === i.which || o && 39 === i.which ? (r = e.nextElementSibling, hi.element(r) || (r = e.parentNode.firstElementChild)) : (r = e.previousElementSibling, hi.element(r) || (r = e.parentNode.lastElementChild)), Oi.call(n, r, !0))
				}
			}, !1), mi(e, "keyup", function (e) {
				13 === e.which && vr.focusFirstMenuItem.call(n, null, !0)
			})
		},
		createMenuItem: function (e) {
			var t = this,
				n = e.value,
				i = e.list,
				r = e.type,
				o = e.title,
				a = e.badge,
				s = void 0 === a ? null : a,
				l = e.checked,
				c = void 0 !== l && l,
				u = Si(this.config.selectors.inputs[r]),
				d = wi("button", zi(u, {
					type: "button",
					role: "menuitemradio",
					class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
					"aria-checked": c,
					value: n
				})),
				h = wi("span");
			h.innerHTML = o, hi.element(s) && h.appendChild(s), d.appendChild(h), Object.defineProperty(d, "checked", {
				enumerable: !0,
				get: function () {
					return "true" === d.getAttribute("aria-checked")
				},
				set: function (e) {
					e && Array.from(d.parentNode.children).filter(function (e) {
						return Mi(e, '[role="menuitemradio"]')
					}).forEach(function (e) {
						return e.setAttribute("aria-checked", "false")
					}), d.setAttribute("aria-checked", e ? "true" : "false")
				}
			}), this.listeners.bind(d, "click keyup", function (e) {
				if (!hi.keyboardEvent(e) || 32 === e.which) {
					switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, r) {
						case "language":
							t.currentTrack = Number(n);
							break;
						case "quality":
							t.quality = n;
							break;
						case "speed":
							t.speed = parseFloat(n)
					}
					vr.showMenuPanel.call(t, "home", hi.keyboardEvent(e))
				}
			}, r, !1), vr.bindMenuItemShortcuts.call(this, d, r), i.appendChild(d)
		},
		formatTime: function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
				t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			return hi.number(e) ? yr(e, pr(this.duration) > 0, t) : e
		},
		updateTimeDisplay: function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
			hi.element(e) && hi.number(t) && (e.innerText = vr.formatTime(t, n))
		},
		updateVolume: function () {
			this.supported.ui && (hi.element(this.elements.inputs.volume) && vr.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), hi.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
		},
		setRange: function (e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			hi.element(e) && (e.value = t, vr.updateRangeFill.call(this, e))
		},
		updateProgress: function (e) {
			var t = this;
			if (this.supported.ui && hi.event(e)) {
				var n, i, r = 0;
				if (e) switch (e.type) {
					case "timeupdate":
					case "seeking":
					case "seeked":
						n = this.currentTime, i = this.duration, r = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && vr.setRange.call(this, this.elements.inputs.seek, r);
						break;
					case "playing":
					case "progress":
						! function (e, n) {
							var i = hi.number(n) ? n : 0,
								r = hi.element(e) ? e : t.elements.display.buffer;
							if (hi.element(r)) {
								r.value = i;
								var o = r.getElementsByTagName("span")[0];
								hi.element(o) && (o.childNodes[0].nodeValue = i)
							}
						}(this.elements.display.buffer, 100 * this.buffered)
				}
			}
		},
		updateRangeFill: function (e) {
			var t = hi.event(e) ? e.target : e;
			if (hi.element(t) && "range" === t.getAttribute("type")) {
				if (Mi(t, this.config.selectors.inputs.seek)) {
					t.setAttribute("aria-valuenow", this.currentTime);
					var n = vr.formatTime(this.currentTime),
						i = vr.formatTime(this.duration),
						r = ur("seekLabel", this.config);
					t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
				} else if (Mi(t, this.config.selectors.inputs.volume)) {
					var o = 100 * t.value;
					t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
				} else t.setAttribute("aria-valuenow", t.value);
				Vi.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
			}
		},
		updateSeekTooltip: function (e) {
			var t = this;
			if (this.config.tooltips.seek && hi.element(this.elements.inputs.seek) && hi.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
				var n = 0,
					i = this.elements.progress.getBoundingClientRect(),
					r = "".concat(this.config.classNames.tooltip, "--visible"),
					o = function (e) {
						Ci(t.elements.display.seekTooltip, r, e)
					};
				if (this.touch) o(!1);
				else {
					if (hi.event(e)) n = 100 / i.width * (e.pageX - i.left);
					else {
						if (!Li(this.elements.display.seekTooltip, r)) return;
						n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
					}
					n < 0 ? n = 0 : n > 100 && (n = 100), vr.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = "".concat(n, "%"), hi.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && o("mouseenter" === e.type)
				}
			}
		},
		timeUpdate: function (e) {
			var t = !hi.element(this.elements.display.duration) && this.config.invertTime;
			vr.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || vr.updateProgress.call(this, e)
		},
		durationUpdate: function () {
			if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
				if (this.duration >= Math.pow(2, 32)) return Pi(this.elements.display.currentTime, !0), void Pi(this.elements.progress, !0);
				hi.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
				var e = hi.element(this.elements.display.duration);
				!e && this.config.displayDuration && this.paused && vr.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && vr.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), vr.updateSeekTooltip.call(this)
			}
		},
		toggleMenuButton: function (e, t) {
			Pi(this.elements.settings.buttons[e], !t)
		},
		updateSetting: function (e, t, n) {
			var i = this.elements.settings.panels[e],
				r = null,
				o = t;
			if ("captions" === e) r = this.currentTrack;
			else {
				if (r = hi.empty(n) ? this[e] : n, hi.empty(r) && (r = this.config[e].default), !hi.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(e));
				if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(e))
			}
			if (hi.element(o) || (o = i && i.querySelector('[role="menu"]')), hi.element(o)) {
				this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = vr.getLabel.call(this, e, r);
				var a = o && o.querySelector('[value="'.concat(r, '"]'));
				hi.element(a) && (a.checked = !0)
			}
		},
		getLabel: function (e, t) {
			switch (e) {
				case "speed":
					return 1 === t ? ur("normal", this.config) : "".concat(t, "&times;");
				case "quality":
					if (hi.number(t)) {
						var n = ur("qualityLabel.".concat(t), this.config);
						return n.length ? n : "".concat(t, "p")
					}
					return ar(t);
				case "captions":
					return wr.getLabel.call(this);
				default:
					return null
			}
		},
		setQualityMenu: function (e) {
			var t = this;
			if (hi.element(this.elements.settings.panels.quality)) {
				var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
				hi.array(e) && (this.options.quality = Wi(e).filter(function (e) {
					return t.config.quality.options.includes(e)
				}));
				var i = !hi.empty(this.options.quality) && this.options.quality.length > 1;
				if (vr.toggleMenuButton.call(this, "quality", i), Ai(n), vr.checkMenu.call(this), i) {
					this.options.quality.sort(function (e, n) {
						var i = t.config.quality.options;
						return i.indexOf(e) > i.indexOf(n) ? 1 : -1
					}).forEach(function (e) {
						vr.createMenuItem.call(t, {
							value: e,
							list: n,
							type: "quality",
							title: vr.getLabel.call(t, "quality", e),
							badge: function (e) {
								var n = ur("qualityBadge.".concat(e), t.config);
								return n.length ? vr.createBadge.call(t, n) : null
							}(e)
						})
					}), vr.updateSetting.call(this, "quality", n)
				}
			}
		},
		setCaptionsMenu: function () {
			var e = this;
			if (hi.element(this.elements.settings.panels.captions)) {
				var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
					n = wr.getTracks.call(this),
					i = Boolean(n.length);
				if (vr.toggleMenuButton.call(this, "captions", i), Ai(t), vr.checkMenu.call(this), i) {
					var r = n.map(function (n, i) {
						return {
							value: i,
							checked: e.captions.toggled && e.currentTrack === i,
							title: wr.getLabel.call(e, n),
							badge: n.language && vr.createBadge.call(e, n.language.toUpperCase()),
							list: t,
							type: "language"
						}
					});
					r.unshift({
						value: -1,
						checked: !this.captions.toggled,
						title: ur("disabled", this.config),
						list: t,
						type: "language"
					}), r.forEach(vr.createMenuItem.bind(this)), vr.updateSetting.call(this, "captions", t)
				}
			}
		},
		setSpeedMenu: function (e) {
			var t = this;
			if (hi.element(this.elements.settings.panels.speed)) {
				var n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
				hi.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (e) {
					return t.config.speed.options.includes(e)
				});
				var i = !hi.empty(this.options.speed) && this.options.speed.length > 1;
				vr.toggleMenuButton.call(this, "speed", i), Ai(n), vr.checkMenu.call(this), i && (this.options.speed.forEach(function (e) {
					vr.createMenuItem.call(t, {
						value: e,
						list: n,
						type: "speed",
						title: vr.getLabel.call(t, "speed", e)
					})
				}), vr.updateSetting.call(this, "speed", n))
			}
		},
		checkMenu: function () {
			var e = this.elements.settings.buttons,
				t = !hi.empty(e) && Object.values(e).some(function (e) {
					return !e.hidden
				});
			Pi(this.elements.settings.menu, !t)
		},
		focusFirstMenuItem: function (e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			if (!this.elements.settings.popup.hidden) {
				var n = e;
				hi.element(n) || (n = Object.values(this.elements.settings.panels).find(function (e) {
					return !e.hidden
				}));
				var i = n.querySelector('[role^="menuitem"]');
				Oi.call(this, i, t)
			}
		},
		toggleMenu: function (e) {
			var t = this.elements.settings.popup,
				n = this.elements.buttons.settings;
			if (hi.element(t) && hi.element(n)) {
				var i = t.hidden,
					r = i;
				if (hi.boolean(e)) r = e;
				else if (hi.keyboardEvent(e) && 27 === e.which) r = !1;
				else if (hi.event(e)) {
					var o = t.contains(e.target);
					if (o || !o && e.target !== n && r) return
				}
				n.setAttribute("aria-expanded", r), Pi(t, !r), Ci(this.elements.container, this.config.classNames.menu.open, r), r && hi.keyboardEvent(e) ? vr.focusFirstMenuItem.call(this, null, !0) : r || i || Oi.call(this, n, hi.keyboardEvent(e))
			}
		},
		getMenuSize: function (e) {
			var t = e.cloneNode(!0);
			t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
			var n = t.scrollWidth,
				i = t.scrollHeight;
			return Ei(t), {
				width: n,
				height: i
			}
		},
		showMenuPanel: function () {
			var e = this,
				t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				i = document.getElementById("plyr-settings-".concat(this.id, "-").concat(t));
			if (hi.element(i)) {
				var r = i.parentNode,
					o = Array.from(r.children).find(function (e) {
						return !e.hidden
					});
				if (Hi.transitions && !Hi.reducedMotion) {
					r.style.width = "".concat(o.scrollWidth, "px"), r.style.height = "".concat(o.scrollHeight, "px");
					var a = vr.getMenuSize.call(this, i);
					mi.call(this, r, Fi, function t(n) {
						n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", gi.call(e, r, Fi, t))
					}), r.style.width = "".concat(a.width, "px"), r.style.height = "".concat(a.height, "px")
				}
				Pi(o, !0), Pi(i, !1), vr.focusFirstMenuItem.call(this, i, n)
			}
		},
		setDownloadLink: function () {
			var e = this.elements.buttons.download;
			hi.element(e) && e.setAttribute("href", this.download)
		},
		create: function (e) {
			var t = this,
				n = wi("div", Si(this.config.selectors.controls.wrapper));
			if (this.config.controls.includes("restart") && n.appendChild(vr.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(vr.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(vr.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(vr.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
				var i = wi("div", Si(this.config.selectors.progress));
				if (i.appendChild(vr.createRange.call(this, "seek", {
						id: "plyr-seek-".concat(e.id)
					})), i.appendChild(vr.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
					var r = wi("span", {
						class: this.config.classNames.tooltip
					}, "00:00");
					i.appendChild(r), this.elements.display.seekTooltip = r
				}
				this.elements.progress = i, n.appendChild(this.elements.progress)
			}
			if (this.config.controls.includes("current-time") && n.appendChild(vr.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(vr.createTime.call(this, "duration")), this.config.controls.includes("mute") || this.config.controls.includes("volume")) {
				var o = wi("div", {
					class: "plyr__volume"
				});
				if (this.config.controls.includes("mute") && o.appendChild(vr.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
					var a = {
						max: 1,
						step: .05,
						value: this.config.volume
					};
					o.appendChild(vr.createRange.call(this, "volume", zi(a, {
						id: "plyr-volume-".concat(e.id)
					}))), this.elements.volume = o
				}
				n.appendChild(o)
			}
			if (this.config.controls.includes("captions") && n.appendChild(vr.createButton.call(this, "captions")), this.config.controls.includes("settings") && !hi.empty(this.config.settings)) {
				var s = wi("div", {
					class: "plyr__menu",
					hidden: ""
				});
				s.appendChild(vr.createButton.call(this, "settings", {
					"aria-haspopup": !0,
					"aria-controls": "plyr-settings-".concat(e.id),
					"aria-expanded": !1
				}));
				var l = wi("div", {
						class: "plyr__menu__container",
						id: "plyr-settings-".concat(e.id),
						hidden: ""
					}),
					c = wi("div"),
					u = wi("div", {
						id: "plyr-settings-".concat(e.id, "-home")
					}),
					d = wi("div", {
						role: "menu"
					});
				u.appendChild(d), c.appendChild(u), this.elements.settings.panels.home = u, this.config.settings.forEach(function (n) {
					var i = wi("button", zi(Si(t.config.selectors.buttons.settings), {
						type: "button",
						class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
						role: "menuitem",
						"aria-haspopup": !0,
						hidden: ""
					}));
					vr.bindMenuItemShortcuts.call(t, i, n), mi(i, "click", function () {
						vr.showMenuPanel.call(t, n, !1)
					});
					var r = wi("span", null, ur(n, t.config)),
						o = wi("span", {
							class: t.config.classNames.menu.value
						});
					o.innerHTML = e[n], r.appendChild(o), i.appendChild(r), d.appendChild(i);
					var a = wi("div", {
							id: "plyr-settings-".concat(e.id, "-").concat(n),
							hidden: ""
						}),
						s = wi("button", {
							type: "button",
							class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
						});
					s.appendChild(wi("span", {
						"aria-hidden": !0
					}, ur(n, t.config))), s.appendChild(wi("span", {
						class: t.config.classNames.hidden
					}, ur("menuBack", t.config))), mi(a, "keydown", function (e) {
						37 === e.which && (e.preventDefault(), e.stopPropagation(), vr.showMenuPanel.call(t, "home", !0))
					}, !1), mi(s, "click", function () {
						vr.showMenuPanel.call(t, "home", !1)
					}), a.appendChild(s), a.appendChild(wi("div", {
						role: "menu"
					})), c.appendChild(a), t.elements.settings.buttons[n] = i, t.elements.settings.panels[n] = a
				}), l.appendChild(c), s.appendChild(l), n.appendChild(s), this.elements.settings.popup = l, this.elements.settings.menu = s
			}
			if (this.config.controls.includes("pip") && Hi.pip && n.appendChild(vr.createButton.call(this, "pip")), this.config.controls.includes("airplay") && Hi.airplay && n.appendChild(vr.createButton.call(this, "airplay")), this.config.controls.includes("download")) {
				var h = {
						element: "a",
						href: this.download,
						target: "_blank"
					},
					f = this.config.urls.download;
				!hi.url(f) && this.isEmbed && zi(h, {
					icon: "logo-".concat(this.provider),
					label: this.provider
				}), n.appendChild(vr.createButton.call(this, "download", h))
			}
			return this.config.controls.includes("fullscreen") && n.appendChild(vr.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(vr.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && vr.setQualityMenu.call(this, Ui.getQualityOptions.call(this)), vr.setSpeedMenu.call(this), n
		},
		inject: function () {
			var e = this;
			if (this.config.loadSprite) {
				var t = vr.getIconUrl.call(this);
				t.cors && fr(t.url, "sprite-plyr")
			}
			this.id = Math.floor(1e4 * Math.random());
			var n = null;
			this.elements.controls = null;
			var i = {
					id: this.id,
					seektime: this.config.seekTime,
					title: this.config.title
				},
				r = !0;
			hi.function(this.config.controls) && (this.config.controls = this.config.controls.call(this.props)), this.config.controls || (this.config.controls = []), hi.element(this.config.controls) || hi.string(this.config.controls) ? n = this.config.controls : (n = vr.create.call(this, {
				id: this.id,
				seektime: this.config.seekTime,
				speed: this.speed,
				quality: this.quality,
				captions: wr.getLabel.call(this)
			}), r = !1);
			var o, a = function (e) {
				var t = e;
				return Object.entries(i).forEach(function (e) {
					var n = nn(e, 2),
						i = n[0],
						r = n[1];
					t = or(t, "{".concat(i, "}"), r)
				}), t
			};
			if (r && (hi.string(this.config.controls) ? n = a(n) : hi.element(n) && (n.innerHTML = a(n.innerHTML))), hi.string(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), hi.element(o) || (o = this.elements.container), o[hi.element(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), hi.element(this.elements.controls) || vr.findElements.call(this), !hi.empty(this.elements.buttons)) {
				var s = function (t) {
					var n = e.config.classNames.controlPressed;
					Object.defineProperty(t, "pressed", {
						enumerable: !0,
						get: function () {
							return Li(t, n)
						},
						set: function () {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							Ci(t, n, e)
						}
					})
				};
				Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
					hi.array(e) || hi.nodeList(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e)
				})
			}
			if (window.navigator.userAgent.includes("Edge") && Di(o), this.config.tooltips.controls) {
				var l = this.config,
					c = l.classNames,
					u = l.selectors,
					d = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(c.hidden),
					h = Ni.call(this, d);
				Array.from(h).forEach(function (t) {
					Ci(t, e.config.classNames.hidden, !1), Ci(t, e.config.classNames.tooltip, !0)
				})
			}
		}
	};

	function br(e) {
		var t = e;
		if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
			var n = document.createElement("a");
			n.href = t, t = n.href
		}
		try {
			return new URL(t)
		} catch (e) {
			return null
		}
	}

	function kr(e) {
		var t = new URLSearchParams;
		return hi.object(e) && Object.entries(e).forEach(function (e) {
			var n = nn(e, 2),
				i = n[0],
				r = n[1];
			t.set(i, r)
		}), t
	}
	var wr = {
			setup: function () {
				if (this.supported.ui)
					if (!this.isVideo || this.isYouTube || this.isHTML5 && !Hi.textTracks) hi.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && vr.setCaptionsMenu.call(this);
					else {
						var e, t;
						if (hi.element(this.elements.captions) || (this.elements.captions = wi("div", Si(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, hi.element(e) && hi.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), Vi.isIE && window.URL) {
							var n = this.media.querySelectorAll("track");
							Array.from(n).forEach(function (e) {
								var t = e.getAttribute("src"),
									n = br(t);
								null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && hr(t, "blob").then(function (t) {
									e.setAttribute("src", window.URL.createObjectURL(t))
								}).catch(function () {
									Ei(e)
								})
							})
						}
						var i = Wi((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
								return e.split("-")[0]
							})),
							r = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
						if ("auto" === r) r = nn(i, 1)[0];
						var o = this.storage.get("captions");
						if (hi.boolean(o) || (o = this.config.captions.active), Object.assign(this.captions, {
								toggled: !1,
								active: o,
								language: r,
								languages: i
							}), this.isHTML5) {
							var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
							mi.call(this, this.media.textTracks, a, wr.update.bind(this))
						}
						setTimeout(wr.update.bind(this), 0)
					}
			},
			update: function () {
				var e = this,
					t = wr.getTracks.call(this, !0),
					n = this.captions,
					i = n.active,
					r = n.language,
					o = n.meta,
					a = n.currentTrackNode,
					s = Boolean(t.find(function (e) {
						return e.language === r
					}));
				this.isHTML5 && this.isVideo && t.filter(function (e) {
					return !o.get(e)
				}).forEach(function (t) {
					e.debug.log("Track added", t), o.set(t, {
						default: "showing" === t.mode
					}), t.mode = "hidden", mi.call(e, t, "cuechange", function () {
						return wr.updateCues.call(e)
					})
				}), (s && this.language !== r || !t.includes(a)) && (wr.setLanguage.call(this, r), wr.toggle.call(this, i && s)), Ci(this.elements.container, this.config.classNames.captions.enabled, !hi.empty(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && vr.setCaptionsMenu.call(this)
			},
			toggle: function (e) {
				var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				if (this.supported.ui) {
					var n = this.captions.toggled,
						i = this.config.classNames.captions.active,
						r = hi.nullOrUndefined(e) ? !n : e;
					if (r !== n) {
						if (t || (this.captions.active = r, this.storage.set({
								captions: r
							})), !this.language && r && !t) {
							var o = wr.getTracks.call(this),
								a = wr.findTrack.call(this, [this.captions.language].concat(rn(this.captions.languages)), !0);
							return this.captions.language = a.language, void wr.set.call(this, o.indexOf(a))
						}
						this.elements.buttons.captions && (this.elements.buttons.captions.pressed = r), Ci(this.elements.container, i, r), this.captions.toggled = r, vr.updateSetting.call(this, "captions"), vi.call(this, this.media, r ? "captionsenabled" : "captionsdisabled")
					}
				}
			},
			set: function (e) {
				var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
					n = wr.getTracks.call(this);
				if (-1 !== e)
					if (hi.number(e))
						if (e in n) {
							if (this.captions.currentTrack !== e) {
								this.captions.currentTrack = e;
								var i = n[e],
									r = (i || {}).language;
								this.captions.currentTrackNode = i, vr.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({
									language: r
								})), this.isVimeo && this.embed.enableTextTrack(r), vi.call(this, this.media, "languagechange")
							}
							wr.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && wr.updateCues.call(this)
						} else this.debug.warn("Track not found", e);
				else this.debug.warn("Invalid caption argument", e);
				else wr.toggle.call(this, !1, t)
			},
			setLanguage: function (e) {
				var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				if (hi.string(e)) {
					var n = e.toLowerCase();
					this.captions.language = n;
					var i = wr.getTracks.call(this),
						r = wr.findTrack.call(this, [n]);
					wr.set.call(this, i.indexOf(r), t)
				} else this.debug.warn("Invalid language argument", e)
			},
			getTracks: function () {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				return Array.from((this.media || {}).textTracks || []).filter(function (n) {
					return !e.isHTML5 || t || e.captions.meta.has(n)
				}).filter(function (e) {
					return ["captions", "subtitles"].includes(e.kind)
				})
			},
			findTrack: function (e) {
				var t, n = this,
					i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					r = wr.getTracks.call(this),
					o = function (e) {
						return Number((n.captions.meta.get(e) || {}).default)
					},
					a = Array.from(r).sort(function (e, t) {
						return o(t) - o(e)
					});
				return e.every(function (e) {
					return !(t = a.find(function (t) {
						return t.language === e
					}))
				}), t || (i ? a[0] : void 0)
			},
			getCurrentTrack: function () {
				return wr.getTracks.call(this)[this.currentTrack]
			},
			getLabel: function (e) {
				var t = e;
				return !hi.track(t) && Hi.textTracks && this.captions.toggled && (t = wr.getCurrentTrack.call(this)), hi.track(t) ? hi.empty(t.label) ? hi.empty(t.language) ? ur("enabled", this.config) : e.language.toUpperCase() : t.label : ur("disabled", this.config)
			},
			updateCues: function (e) {
				if (this.supported.ui)
					if (hi.element(this.elements.captions))
						if (hi.nullOrUndefined(e) || Array.isArray(e)) {
							var t = e;
							if (!t) {
								var n = wr.getCurrentTrack.call(this);
								t = Array.from((n || {}).activeCues || []).map(function (e) {
									return e.getCueAsHTML()
								}).map(lr)
							}
							var i = t.map(function (e) {
								return e.trim()
							}).join("\n");
							if (i !== this.elements.captions.innerHTML) {
								Ai(this.elements.captions);
								var r = wi("span", Si(this.config.selectors.caption));
								r.innerHTML = i, this.elements.captions.appendChild(r), vi.call(this, this.media, "cuechange")
							}
						} else this.debug.warn("updateCues: Invalid input", e);
				else this.debug.warn("No captions element to render to")
			}
		},
		Tr = {
			enabled: !0,
			title: "",
			debug: !1,
			autoplay: !1,
			autopause: !0,
			playsinline: !0,
			seekTime: 10,
			volume: 1,
			muted: !1,
			duration: null,
			displayDuration: !0,
			invertTime: !0,
			toggleInvert: !0,
			ratio: "16:9",
			clickToPlay: !0,
			hideControls: !0,
			resetOnEnd: !1,
			disableContextMenu: !0,
			loadSprite: !0,
			iconPrefix: "plyr",
			iconUrl: "https://cdn.plyr.io/3.4.7/plyr.svg",
			blankVideo: "https://cdn.plyr.io/static/blank.mp4",
			quality: {
				default: 576,
				options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
			},
			loop: {
				active: !1
			},
			speed: {
				selected: 1,
				options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
			},
			keyboard: {
				focused: !0,
				global: !1
			},
			tooltips: {
				controls: !1,
				seek: !0
			},
			captions: {
				active: !1,
				language: "auto",
				update: !1
			},
			fullscreen: {
				enabled: !0,
				fallback: !0,
				iosNative: !1
			},
			storage: {
				enabled: !0,
				key: "plyr"
			},
			controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
			settings: ["captions", "quality", "speed"],
			i18n: {
				restart: "Restart",
				rewind: "Rewind {seektime}s",
				play: "Play",
				pause: "Pause",
				fastForward: "Forward {seektime}s",
				seek: "Seek",
				seekLabel: "{currentTime} of {duration}",
				played: "Played",
				buffered: "Buffered",
				currentTime: "Current time",
				duration: "Duration",
				volume: "Volume",
				mute: "Mute",
				unmute: "Unmute",
				enableCaptions: "Enable captions",
				disableCaptions: "Disable captions",
				download: "Download",
				enterFullscreen: "Enter fullscreen",
				exitFullscreen: "Exit fullscreen",
				frameTitle: "Player for {title}",
				captions: "Captions",
				settings: "Settings",
				menuBack: "Go back to previous menu",
				speed: "Speed",
				normal: "Normal",
				quality: "Quality",
				loop: "Loop",
				start: "Start",
				end: "End",
				all: "All",
				reset: "Reset",
				disabled: "Disabled",
				enabled: "Enabled",
				advertisement: "Ad",
				qualityBadge: {
					2160: "4K",
					1440: "HD",
					1080: "HD",
					720: "HD",
					576: "SD",
					480: "SD"
				}
			},
			urls: {
				download: null,
				vimeo: {
					sdk: "https://player.vimeo.com/api/player.js",
					iframe: "https://player.vimeo.com/video/{0}?{1}",
					api: "https://vimeo.com/api/v2/video/{0}.json"
				},
				youtube: {
					sdk: "https://www.youtube.com/iframe_api",
					api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet"
				},
				googleIMA: {
					sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
				}
			},
			listeners: {
				seek: null,
				play: null,
				pause: null,
				restart: null,
				rewind: null,
				fastForward: null,
				mute: null,
				volume: null,
				captions: null,
				download: null,
				fullscreen: null,
				pip: null,
				airplay: null,
				speed: null,
				quality: null,
				loop: null,
				language: null
			},
			events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
			selectors: {
				editable: "input, textarea, select, [contenteditable]",
				container: ".plyr",
				controls: {
					container: null,
					wrapper: ".plyr__controls"
				},
				labels: "[data-plyr]",
				buttons: {
					play: '[data-plyr="play"]',
					pause: '[data-plyr="pause"]',
					restart: '[data-plyr="restart"]',
					rewind: '[data-plyr="rewind"]',
					fastForward: '[data-plyr="fast-forward"]',
					mute: '[data-plyr="mute"]',
					captions: '[data-plyr="captions"]',
					download: '[data-plyr="download"]',
					fullscreen: '[data-plyr="fullscreen"]',
					pip: '[data-plyr="pip"]',
					airplay: '[data-plyr="airplay"]',
					settings: '[data-plyr="settings"]',
					loop: '[data-plyr="loop"]'
				},
				inputs: {
					seek: '[data-plyr="seek"]',
					volume: '[data-plyr="volume"]',
					speed: '[data-plyr="speed"]',
					language: '[data-plyr="language"]',
					quality: '[data-plyr="quality"]'
				},
				display: {
					currentTime: ".plyr__time--current",
					duration: ".plyr__time--duration",
					buffer: ".plyr__progress__buffer",
					loop: ".plyr__progress__loop",
					volume: ".plyr__volume--display"
				},
				progress: ".plyr__progress",
				captions: ".plyr__captions",
				caption: ".plyr__caption",
				menu: {
					quality: ".js-plyr__menu__list--quality"
				}
			},
			classNames: {
				type: "plyr--{0}",
				provider: "plyr--{0}",
				video: "plyr__video-wrapper",
				embed: "plyr__video-embed",
				embedContainer: "plyr__video-embed__container",
				poster: "plyr__poster",
				posterEnabled: "plyr__poster-enabled",
				ads: "plyr__ads",
				control: "plyr__control",
				controlPressed: "plyr__control--pressed",
				playing: "plyr--playing",
				paused: "plyr--paused",
				stopped: "plyr--stopped",
				loading: "plyr--loading",
				hover: "plyr--hover",
				tooltip: "plyr__tooltip",
				cues: "plyr__cues",
				hidden: "plyr__sr-only",
				hideControls: "plyr--hide-controls",
				isIos: "plyr--is-ios",
				isTouch: "plyr--is-touch",
				uiSupported: "plyr--full-ui",
				noTransition: "plyr--no-transition",
				display: {
					time: "plyr__time"
				},
				menu: {
					value: "plyr__menu__value",
					badge: "plyr__badge",
					open: "plyr--menu-open"
				},
				captions: {
					enabled: "plyr--captions-enabled",
					active: "plyr--captions-active"
				},
				fullscreen: {
					enabled: "plyr--fullscreen-enabled",
					fallback: "plyr--fullscreen-fallback"
				},
				pip: {
					supported: "plyr--pip-supported",
					active: "plyr--pip-active"
				},
				airplay: {
					supported: "plyr--airplay-supported",
					active: "plyr--airplay-active"
				},
				tabFocus: "plyr__tab-focus"
			},
			attributes: {
				embed: {
					provider: "data-plyr-provider",
					id: "data-plyr-embed-id"
				}
			},
			keys: {
				google: null
			},
			ads: {
				enabled: !1,
				publisherId: ""
			}
		},
		Er = "picture-in-picture",
		Ar = "inline",
		_r = {
			html5: "html5",
			youtube: "youtube",
			vimeo: "vimeo"
		},
		Sr = {
			audio: "audio",
			video: "video"
		};
	var Pr = function () {},
		Cr = function () {
			function e() {
				var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				Xt(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
			}
			return en(e, [{
				key: "log",
				get: function () {
					return this.enabled ? Function.prototype.bind.call(console.log, console) : Pr
				}
			}, {
				key: "warn",
				get: function () {
					return this.enabled ? Function.prototype.bind.call(console.warn, console) : Pr
				}
			}, {
				key: "error",
				get: function () {
					return this.enabled ? Function.prototype.bind.call(console.error, console) : Pr
				}
			}]), e
		}();

	function Lr() {
		if (this.enabled) {
			var e = this.player.elements.buttons.fullscreen;
			hi.element(e) && (e.pressed = this.active), vi.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), Vi.isIos || function () {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				if (hi.element(e)) {
					var n = Ni.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
						i = n[0],
						r = n[n.length - 1];
					pi.call(this, this.elements.container, "keydown", function (e) {
						if ("Tab" === e.key && 9 === e.keyCode) {
							var t = document.activeElement;
							t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
						}
					}, t, !1)
				}
			}.call(this.player, this.target, this.active)
		}
	}

	function Mr() {
		var e = this,
			t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		if (t ? this.scrollPosition = {
				x: window.scrollX || 0,
				y: window.scrollY || 0
			} : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", Ci(this.target, this.player.config.classNames.fullscreen.fallback, t), Vi.isIos) {
			var n = document.head.querySelector('meta[name="viewport"]'),
				i = "viewport-fit=cover";
			n || (n = document.createElement("meta")).setAttribute("name", "viewport");
			var r = hi.string(n.content) && n.content.includes(i);
			t ? (this.cleanupViewport = !r, r || (n.content += ",".concat(i))) : this.cleanupViewport && (n.content = n.content.split(",").filter(function (e) {
				return e.trim() !== i
			}).join(",")), setTimeout(function () {
				return Di(e.target)
			}, 100)
		}
		Lr.call(this)
	}
	var Nr = function () {
			function e(t) {
				var n = this;
				Xt(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
					x: 0,
					y: 0
				}, mi.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
					Lr.call(n)
				}), mi.call(this.player, this.player.elements.container, "dblclick", function (e) {
					hi.element(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle()
				}), this.update()
			}
			return en(e, [{
				key: "update",
				value: function () {
					this.enabled ? this.player.debug.log("".concat(e.native ? "Native" : "Fallback", " fullscreen enabled")) : this.player.debug.log("Fullscreen not supported and fallback disabled"), Ci(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
				}
			}, {
				key: "enter",
				value: function () {
					this.enabled && (Vi.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : e.native ? this.prefix ? hi.empty(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen() : Mr.call(this, !0))
				}
			}, {
				key: "exit",
				value: function () {
					if (this.enabled)
						if (Vi.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
						else if (e.native)
						if (this.prefix) {
							if (!hi.empty(this.prefix)) {
								var t = "moz" === this.prefix ? "Cancel" : "Exit";
								document["".concat(this.prefix).concat(t).concat(this.property)]()
							}
						} else(document.cancelFullScreen || document.exitFullscreen).call(document);
					else Mr.call(this, !1)
				}
			}, {
				key: "toggle",
				value: function () {
					this.active ? this.exit() : this.enter()
				}
			}, {
				key: "enabled",
				get: function () {
					return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
				}
			}, {
				key: "active",
				get: function () {
					return !!this.enabled && (e.native ? (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target : Li(this.target, this.player.config.classNames.fullscreen.fallback))
				}
			}, {
				key: "target",
				get: function () {
					return Vi.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
				}
			}], [{
				key: "native",
				get: function () {
					return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
				}
			}, {
				key: "prefix",
				get: function () {
					if (hi.function(document.exitFullscreen)) return "";
					var e = "";
					return ["webkit", "moz", "ms"].some(function (t) {
						return !(!hi.function(document["".concat(t, "ExitFullscreen")]) && !hi.function(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
					}), e
				}
			}, {
				key: "property",
				get: function () {
					return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
				}
			}]), e
		}(),
		xr = Math.sign || function (e) {
			return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
		};

	function Or(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
		return new Promise(function (n, i) {
			var r = new Image,
				o = function () {
					delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r)
				};
			Object.assign(r, {
				onload: o,
				onerror: o,
				src: e
			})
		})
	}
	S(S.S, "Math", {
		sign: xr
	});
	var jr = {
			addStyleHook: function () {
				Ci(this.elements.container, this.config.selectors.container.replace(".", ""), !0), Ci(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
			},
			toggleNativeControls: function () {
				arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
			},
			build: function () {
				var e = this;
				if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void jr.toggleNativeControls.call(this, !0);
				hi.element(this.elements.controls) || (vr.inject.call(this), this.listeners.controls()), jr.toggleNativeControls.call(this), this.isHTML5 && wr.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, vr.updateVolume.call(this), vr.timeUpdate.call(this), jr.checkPlaying.call(this), Ci(this.elements.container, this.config.classNames.pip.supported, Hi.pip && this.isHTML5 && this.isVideo), Ci(this.elements.container, this.config.classNames.airplay.supported, Hi.airplay && this.isHTML5), Ci(this.elements.container, this.config.classNames.isIos, Vi.isIos), Ci(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
					vi.call(e, e.media, "ready")
				}, 0), jr.setTitle.call(this), this.poster && jr.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && vr.durationUpdate.call(this)
			},
			setTitle: function () {
				var e = ur("play", this.config);
				if (hi.string(this.config.title) && !hi.empty(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
						t.setAttribute("aria-label", e)
					}), this.isEmbed) {
					var t = xi.call(this, "iframe");
					if (!hi.element(t)) return;
					var n = hi.empty(this.config.title) ? "video" : this.config.title,
						i = ur("frameTitle", this.config);
					t.setAttribute("title", i.replace("{title}", n))
				}
			},
			togglePoster: function (e) {
				Ci(this.elements.container, this.config.classNames.posterEnabled, e)
			},
			setPoster: function (e) {
				var t = this;
				return arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || !this.poster ? (this.media.setAttribute("poster", e), function () {
					var e = this;
					return new Promise(function (t) {
						return e.ready ? setTimeout(t, 0) : mi.call(e, e.elements.container, "ready", t)
					}).then(function () {})
				}.call(this).then(function () {
					return Or(e)
				}).catch(function (n) {
					throw e === t.poster && jr.togglePoster.call(t, !1), n
				}).then(function () {
					if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
				}).then(function () {
					return Object.assign(t.elements.poster.style, {
						backgroundImage: "url('".concat(e, "')"),
						backgroundSize: ""
					}), jr.togglePoster.call(t, !0), e
				})) : Promise.reject(new Error("Poster already set"))
			},
			checkPlaying: function (e) {
				var t = this;
				Ci(this.elements.container, this.config.classNames.playing, this.playing), Ci(this.elements.container, this.config.classNames.paused, this.paused), Ci(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
					e.pressed = t.playing
				}), hi.event(e) && "timeupdate" === e.type || jr.toggleControls.call(this)
			},
			checkLoading: function (e) {
				var t = this;
				this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
					Ci(t.elements.container, t.config.classNames.loading, t.loading), jr.toggleControls.call(t)
				}, this.loading ? 250 : 0)
			},
			toggleControls: function (e) {
				var t = this.elements.controls;
				if (t && this.config.hideControls) {
					var n = this.touch && this.lastSeekTime + 20000 > Date.now();
					this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
				}
			}
		},
		Ir = function () {
			function e(t) {
				Xt(this, e), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
			}
			return en(e, [{
				key: "handleKey",
				value: function (e) {
					var t = this.player,
						n = t.elements,
						i = e.keyCode ? e.keyCode : e.which,
						r = "keydown" === e.type,
						o = r && i === this.lastKey;
					if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && hi.number(i)) {
						if (r) {
							var a = document.activeElement;
							if (hi.element(a)) {
								var s = t.config.selectors.editable;
								if (a !== n.inputs.seek && Mi(a, s)) return;
								if (32 === e.which && Mi(a, 'button, [role^="menuitem"]')) return
							}
							switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
								case 48:
								case 49:
								case 50:
								case 51:
								case 52:
								case 53:
								case 54:
								case 55:
								case 56:
								case 57:
									o || (t.currentTime = t.duration / 10 * (i - 48));
									break;
								case 32:
								case 75:
									o || t.togglePlay();
									break;
								case 38:
									t.increaseVolume(.1);
									break;
								case 40:
									t.decreaseVolume(.1);
									break;
								case 77:
									o || (t.muted = !t.muted);
									break;
								case 39:
									t.forward();
									break;
								case 37:
									t.rewind();
									break;
								case 70:
									t.fullscreen.toggle();
									break;
								case 67:
									o || t.toggleCaptions();
									break;
								case 76:
									t.loop = !t.loop
							}!t.fullscreen.enabled && t.fullscreen.active && 27 === i && t.fullscreen.toggle(), this.lastKey = i
						} else this.lastKey = null
					}
				}
			}, {
				key: "toggleMenu",
				value: function (e) {
					vr.toggleMenu.call(this.player, e)
				}
			}, {
				key: "firstTouch",
				value: function () {
					var e = this.player,
						t = e.elements;
					e.touch = !0, Ci(t.container, e.config.classNames.isTouch, !0)
				}
			}, {
				key: "setTabFocus",
				value: function (e) {
					var t = this.player,
						n = t.elements;
					if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
						"keydown" === e.type && (this.lastKeyDown = e.timeStamp);
						var i, r = e.timeStamp - this.lastKeyDown <= 20;
						if ("focus" !== e.type || r) i = t.config.classNames.tabFocus, Ci(Ni.call(t, ".".concat(i)), i, !1), this.focusTimer = setTimeout(function () {
							var e = document.activeElement;
							n.container.contains(e) && Ci(document.activeElement, t.config.classNames.tabFocus, !0)
						}, 10)
					}
				}
			}, {
				key: "global",
				value: function () {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = this.player;
					t.config.keyboard.global && pi.call(t, window, "keydown keyup", this.handleKey, e, !1), pi.call(t, document.body, "click", this.toggleMenu, e), yi.call(t, document.body, "touchstart", this.firstTouch), pi.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
				}
			}, {
				key: "container",
				value: function () {
					var e = this.player,
						t = e.elements;
					!e.config.keyboard.global && e.config.keyboard.focused && mi.call(e, t.container, "keydown keyup", this.handleKey, !1), mi.call(e, t.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (n) {
						var i = t.controls;
						i && "enterfullscreen" === n.type && (i.pressed = !1, i.hover = !1);
						var r = 0;
						["touchstart", "touchmove", "mousemove"].includes(n.type) && (jr.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(e.timers.controls), e.timers.controls = setTimeout(function () {
							return jr.toggleControls.call(e, !1)
						}, r)
					})
				}
			}, {
				key: "media",
				value: function () {
					var e = this.player,
						t = e.elements;
					if (mi.call(e, e.media, "timeupdate seeking seeked", function (t) {
							return vr.timeUpdate.call(e, t)
						}), mi.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
							return vr.durationUpdate.call(e, t)
						}), mi.call(e, e.media, "canplay loadeddata", function () {
							Pi(t.volume, !e.hasAudio), Pi(t.buttons.mute, !e.hasAudio)
						}), mi.call(e, e.media, "ended", function () {
							e.isHTML5 && e.isVideo && e.config.resetOnEnd && e.restart()
						}), mi.call(e, e.media, "progress playing seeking seeked", function (t) {
							return vr.updateProgress.call(e, t)
						}), mi.call(e, e.media, "volumechange", function (t) {
							return vr.updateVolume.call(e, t)
						}), mi.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
							return jr.checkPlaying.call(e, t)
						}), mi.call(e, e.media, "waiting canplay seeked playing", function (t) {
							return jr.checkLoading.call(e, t)
						}), mi.call(e, e.media, "playing", function () {
							e.ads && e.ads.enabled && !e.ads.initialized && e.ads.managerPromise.then(function () {
								return e.ads.play()
							}).catch(function () {
								return e.play()
							})
						}), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
						var n = xi.call(e, ".".concat(e.config.classNames.video));
						if (!hi.element(n)) return;
						mi.call(e, t.container, "click", function (i) {
							([t.container, n].includes(i.target) || n.contains(i.target)) && (e.touch && e.config.hideControls || (e.ended ? (e.restart(), e.play()) : e.togglePlay()))
						})
					}
					e.supported.ui && e.config.disableContextMenu && mi.call(e, t.wrapper, "contextmenu", function (e) {
						e.preventDefault()
					}, !1), mi.call(e, e.media, "volumechange", function () {
						e.storage.set({
							volume: e.volume,
							muted: e.muted
						})
					}), mi.call(e, e.media, "ratechange", function () {
						vr.updateSetting.call(e, "speed"), e.storage.set({
							speed: e.speed
						})
					}), mi.call(e, e.media, "qualitychange", function (t) {
						vr.updateSetting.call(e, "quality", null, t.detail.quality)
					}), mi.call(e, e.media, "ready qualitychange", function () {
						vr.setDownloadLink.call(e)
					});
					var i = e.config.events.concat(["keyup", "keydown"]).join(" ");
					mi.call(e, e.media, i, function (n) {
						var i = n.detail,
							r = void 0 === i ? {} : i;
						"error" === n.type && (r = e.media.error), vi.call(e, t.container, n.type, !0, r)
					})
				}
			}, {
				key: "proxy",
				value: function (e, t, n) {
					var i = this.player,
						r = i.config.listeners[n],
						o = !0;
					hi.function(r) && (o = r.call(i, e)), o && hi.function(t) && t.call(i, e)
				}
			}, {
				key: "bind",
				value: function (e, t, n, i) {
					var r = this,
						o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
						a = this.player,
						s = a.config.listeners[i],
						l = hi.function(s);
					mi.call(a, e, t, function (e) {
						return r.proxy(e, n, i)
					}, o && !l)
				}
			}, {
				key: "controls",
				value: function () {
					var e = this,
						t = this.player,
						n = t.elements,
						i = Vi.isIE ? "change" : "input";
					if (n.buttons.play && Array.from(n.buttons.play).forEach(function (n) {
							e.bind(n, "click", t.togglePlay, "play")
						}), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", function () {
							t.muted = !t.muted
						}, "mute"), this.bind(n.buttons.captions, "click", function () {
							return t.toggleCaptions()
						}), this.bind(n.buttons.download, "click", function () {
							vi.call(t, t.media, "download")
						}, "download"), this.bind(n.buttons.fullscreen, "click", function () {
							t.fullscreen.toggle()
						}, "fullscreen"), this.bind(n.buttons.pip, "click", function () {
							t.pip = "toggle"
						}, "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", function (e) {
							e.stopPropagation(), vr.toggleMenu.call(t, e)
						}), this.bind(n.buttons.settings, "keyup", function (e) {
							var n = e.which;
							[13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), vr.toggleMenu.call(t, e)) : vr.focusFirstMenuItem.call(t, null, !0))
						}, null, !1), this.bind(n.settings.menu, "keydown", function (e) {
							27 === e.which && vr.toggleMenu.call(t, e)
						}), this.bind(n.inputs.seek, "mousedown mousemove", function (e) {
							var t = n.progress.getBoundingClientRect(),
								i = 100 / t.width * (e.pageX - t.left);
							e.currentTarget.setAttribute("seek-value", i)
						}), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
							var n = e.currentTarget,
								i = e.keyCode ? e.keyCode : e.which;
							if (!hi.keyboardEvent(e) || 39 === i || 37 === i) {
								t.lastSeekTime = Date.now();
								var r = n.hasAttribute("play-on-seeked"),
									o = ["mouseup", "touchend", "keyup"].includes(e.type);
								r && o ? (n.removeAttribute("play-on-seeked"), t.play()) : !o && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause())
							}
						}), Vi.isIos) {
						var r = Ni.call(t, 'input[type="range"]');
						Array.from(r).forEach(function (t) {
							return e.bind(t, i, function (e) {
								return Di(e.target)
							})
						})
					}
					this.bind(n.inputs.seek, i, function (e) {
						var n = e.currentTarget,
							i = n.getAttribute("seek-value");
						hi.empty(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
					}, "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", function (e) {
						return vr.updateSeekTooltip.call(t, e)
					}), Vi.isWebkit && Array.from(Ni.call(t, 'input[type="range"]')).forEach(function (n) {
						e.bind(n, "input", function (e) {
							return vr.updateRangeFill.call(t, e.target)
						})
					}), t.config.toggleInvert && !hi.element(n.display.duration) && this.bind(n.display.currentTime, "click", function () {
						0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, vr.timeUpdate.call(t))
					}), this.bind(n.inputs.volume, i, function (e) {
						t.volume = e.target.value
					}, "volume"), this.bind(n.controls, "mouseenter mouseleave", function (e) {
						n.controls.hover = !t.touch && "mouseenter" === e.type
					}), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
						n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
					}), this.bind(n.controls, "focusin", function () {
						var n = t.config,
							i = t.elements,
							r = t.timers;
						Ci(i.controls, n.classNames.noTransition, !0), jr.toggleControls.call(t, !0), setTimeout(function () {
							Ci(i.controls, n.classNames.noTransition, !1)
						}, 0);
						var o = e.touch ? 3e3 : 4e3;
						clearTimeout(r.controls), r.controls = setTimeout(function () {
							return jr.toggleControls.call(t, !1)
						}, o)
					}), this.bind(n.inputs.volume, "wheel", function (e) {
						var n = e.webkitDirectionInvertedFromDevice,
							i = nn([e.deltaX, -e.deltaY].map(function (e) {
								return n ? -e : e
							}), 2),
							r = i[0],
							o = i[1],
							a = Math.sign(Math.abs(r) > Math.abs(o) ? r : o);
						t.increaseVolume(a / 50);
						var s = t.media.volume;
						(1 === a && s < 1 || -1 === a && s > 0) && e.preventDefault()
					}, "volume", !1)
				}
			}]), e
		}(),
		Rr = g.f,
		Fr = Function.prototype,
		Dr = /^\s*function ([^ (]*)/;
	"name" in Fr || c && Rr(Fr, "name", {
		configurable: !0,
		get: function () {
			try {
				return ("" + this).match(Dr)[1]
			} catch (e) {
				return ""
			}
		}
	}), at("match", 1, function (e, t, n) {
		return [function (n) {
			var i = e(this),
				r = null == n ? void 0 : n[t];
			return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
		}, n]
	});
	var qr = t(function (e, t) {
		e.exports = function () {
			var e = function () {},
				t = {},
				n = {},
				i = {};

			function r(e, t) {
				if (e) {
					var r = i[e];
					if (n[e] = t, r)
						for (; r.length;) r[0](e, t), r.splice(0, 1)
				}
			}

			function o(t, n) {
				t.call && (t = {
					success: t
				}), n.length ? (t.error || e)(n) : (t.success || e)(t)
			}

			function a(t, n, i, r) {
				var o, s, l = document,
					c = i.async,
					u = (i.numRetries || 0) + 1,
					d = i.before || e,
					h = t.replace(/^(css|img)!/, "");
				r = r || 0, /(^css!|\.css$)/.test(t) ? (o = !0, (s = l.createElement("link")).rel = "stylesheet", s.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (s = l.createElement("img")).src = h : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function (e) {
					var l = e.type[0];
					if (o && "hideFocus" in s) try {
						s.sheet.cssText.length || (l = "e")
					} catch (e) {
						l = "e"
					}
					if ("e" == l && (r += 1) < u) return a(t, n, i, r);
					n(t, l, e.defaultPrevented)
				}, !1 !== d(t, s) && l.head.appendChild(s)
			}

			function s(e, n, i) {
				var s, l;
				if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
					if (s in t) throw "LoadJS";
					t[s] = !0
				}! function (e, t, n) {
					var i, r, o = (e = e.push ? e : [e]).length,
						s = o,
						l = [];
					for (i = function (e, n, i) {
							if ("e" == n && l.push(e), "b" == n) {
								if (!i) return;
								l.push(e)
							}--o || t(l)
						}, r = 0; r < s; r++) a(e[r], i, n)
				}(e, function (e) {
					o(l, e), r(s, e)
				}, l)
			}
			return s.ready = function (e, t) {
				return function (e, t) {
					e = e.push ? e : [e];
					var r, o, a, s = [],
						l = e.length,
						c = l;
					for (r = function (e, n) {
							n.length && s.push(e), --c || t(s)
						}; l--;) o = e[l], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r)
				}(e, function (e) {
					o(t, e)
				}), s
			}, s.done = function (e) {
				r(e, [])
			}, s.reset = function () {
				t = {}, n = {}, i = {}
			}, s.isDefined = function (e) {
				return e in t
			}, s
		}()
	});

	function Vr(e) {
		return new Promise(function (t, n) {
			qr(e, {
				success: t,
				error: n
			})
		})
	}

	function Br(e) {
		e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, vi.call(this, this.media, e ? "play" : "pause"))
	}
	var Hr = {
		setup: function () {
			var e = this;
			Ci(this.elements.wrapper, this.config.classNames.embed, !0), Hr.setAspectRatio.call(this), hi.object(window.Vimeo) ? Hr.ready.call(this) : Vr(this.config.urls.vimeo.sdk).then(function () {
				Hr.ready.call(e)
			}).catch(function (t) {
				e.debug.warn("Vimeo API failed to load", t)
			})
		},
		setAspectRatio: function (e) {
			var t = nn((hi.string(e) ? e : this.config.ratio).split(":").map(Number), 2),
				n = 100 / t[0] * t[1];
			if (Hr.padding = n, this.elements.wrapper.style.paddingBottom = "".concat(n, "%"), this.supported.ui) {
				var i = (240 - n) / 4.8;
				this.media.style.transform = "translateY(-".concat(i, "%)")
			}
		},
		ready: function () {
			var e = this,
				t = this,
				n = kr({
					loop: t.config.loop.active,
					autoplay: t.autoplay,
					byline: !1,
					portrait: !1,
					title: !1,
					speed: !0,
					transparent: 0,
					gesture: "media",
					playsinline: !this.config.fullscreen.iosNative
				}),
				i = t.media.getAttribute("src");
			hi.empty(i) && (i = t.media.getAttribute(t.config.attributes.embed.id));
			var r, o = (r = i, hi.empty(r) ? null : hi.number(Number(r)) ? r : r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r),
				a = wi("iframe"),
				s = rr(t.config.urls.vimeo.iframe, o, n);
			a.setAttribute("src", s), a.setAttribute("allowfullscreen", ""), a.setAttribute("allowtransparency", ""), a.setAttribute("allow", "autoplay");
			var l = wi("div", {
				poster: t.poster,
				class: t.config.classNames.embedContainer
			});
			l.appendChild(a), t.media = _i(l, t.media), hr(rr(t.config.urls.vimeo.api, o), "json").then(function (e) {
				if (!hi.empty(e)) {
					var n = new URL(e[0].thumbnail_large);
					n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), jr.setPoster.call(t, n.href).catch(function () {})
				}
			}), t.embed = new window.Vimeo.Player(a, {
				autopause: t.config.autopause,
				muted: t.muted
			}), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
				return Br.call(t, !0), t.embed.play()
			}, t.media.pause = function () {
				return Br.call(t, !1), t.embed.pause()
			}, t.media.stop = function () {
				t.pause(), t.currentTime = 0
			};
			var c = t.media.currentTime;
			Object.defineProperty(t.media, "currentTime", {
				get: function () {
					return c
				},
				set: function (e) {
					var n = t.embed,
						i = t.media,
						r = t.paused,
						o = t.volume,
						a = r && !n.hasPlayed;
					i.seeking = !0, vi.call(t, i, "seeking"), Promise.resolve(a && n.setVolume(0)).then(function () {
						return n.setCurrentTime(e)
					}).then(function () {
						return a && n.pause()
					}).then(function () {
						return a && n.setVolume(o)
					}).catch(function () {})
				}
			});
			var u = t.config.speed.selected;
			Object.defineProperty(t.media, "playbackRate", {
				get: function () {
					return u
				},
				set: function (e) {
					t.embed.setPlaybackRate(e).then(function () {
						u = e, vi.call(t, t.media, "ratechange")
					}).catch(function (e) {
						"Error" === e.name && vr.setSpeedMenu.call(t, [])
					})
				}
			});
			var d = t.config.volume;
			Object.defineProperty(t.media, "volume", {
				get: function () {
					return d
				},
				set: function (e) {
					t.embed.setVolume(e).then(function () {
						d = e, vi.call(t, t.media, "volumechange")
					})
				}
			});
			var h = t.config.muted;
			Object.defineProperty(t.media, "muted", {
				get: function () {
					return h
				},
				set: function (e) {
					var n = !!hi.boolean(e) && e;
					t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
						h = n, vi.call(t, t.media, "volumechange")
					})
				}
			});
			var f, p = t.config.loop;
			Object.defineProperty(t.media, "loop", {
				get: function () {
					return p
				},
				set: function (e) {
					var n = hi.boolean(e) ? e : t.config.loop.active;
					t.embed.setLoop(n).then(function () {
						p = n
					})
				}
			}), t.embed.getVideoUrl().then(function (e) {
				f = e, vr.setDownloadLink.call(t)
			}).catch(function (t) {
				e.debug.warn(t)
			}), Object.defineProperty(t.media, "currentSrc", {
				get: function () {
					return f
				}
			}), Object.defineProperty(t.media, "ended", {
				get: function () {
					return t.currentTime === t.duration
				}
			}), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (t) {
				var n, i, r;
				Hr.ratio = (n = t[0], i = t[1], r = function e(t, n) {
					return 0 === n ? t : e(n, t % n)
				}(n, i), "".concat(n / r, ":").concat(i / r)), Hr.setAspectRatio.call(e, Hr.ratio)
			}), t.embed.setAutopause(t.config.autopause).then(function (e) {
				t.config.autopause = e
			}), t.embed.getVideoTitle().then(function (n) {
				t.config.title = n, jr.setTitle.call(e)
			}), t.embed.getCurrentTime().then(function (e) {
				c = e, vi.call(t, t.media, "timeupdate")
			}), t.embed.getDuration().then(function (e) {
				t.media.duration = e, vi.call(t, t.media, "durationchange")
			}), t.embed.getTextTracks().then(function (e) {
				t.media.textTracks = e, wr.setup.call(t)
			}), t.embed.on("cuechange", function (e) {
				var n = e.cues,
					i = (void 0 === n ? [] : n).map(function (e) {
						return t = e.text, n = document.createDocumentFragment(), i = document.createElement("div"), n.appendChild(i), i.innerHTML = t, n.firstChild.innerText;
						var t, n, i
					});
				wr.updateCues.call(t, i)
			}), t.embed.on("loaded", function () {
				(t.embed.getPaused().then(function (e) {
					Br.call(t, !e), e || vi.call(t, t.media, "playing")
				}), hi.element(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
			}), t.embed.on("play", function () {
				Br.call(t, !0), vi.call(t, t.media, "playing")
			}), t.embed.on("pause", function () {
				Br.call(t, !1)
			}), t.embed.on("timeupdate", function (e) {
				t.media.seeking = !1, c = e.seconds, vi.call(t, t.media, "timeupdate")
			}), t.embed.on("progress", function (e) {
				t.media.buffered = e.percent, vi.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && vi.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
					e !== t.media.duration && (t.media.duration = e, vi.call(t, t.media, "durationchange"))
				})
			}), t.embed.on("seeked", function () {
				t.media.seeking = !1, vi.call(t, t.media, "seeked")
			}), t.embed.on("ended", function () {
				t.media.paused = !0, vi.call(t, t.media, "ended")
			}), t.embed.on("error", function (e) {
				t.media.error = e, vi.call(t, t.media, "error")
			}), t.on("enterfullscreen exitfullscreen", function (e) {
				var n = t.fullscreen.target;
				if (n === t.elements.container) {
					var i = "enterfullscreen" === e.type,
						r = nn(Hr.ratio.split(":").map(Number), 2),
						o = r[0] > r[1] ? "width" : "height";
					n.style[o] = i ? "".concat(Hr.padding, "%") : null
				}
			}), setTimeout(function () {
				return jr.build.call(t)
			}, 0)
		}
	};

	function Ur(e) {
		e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, vi.call(this, this.media, e ? "play" : "pause"))
	}
	var Wr, Kr = {
			setup: function () {
				var e = this;
				Ci(this.elements.wrapper, this.config.classNames.embed, !0), Kr.setAspectRatio.call(this), hi.object(window.YT) && hi.function(window.YT.Player) ? Kr.ready.call(this) : (Vr(this.config.urls.youtube.sdk).catch(function (t) {
					e.debug.warn("YouTube API failed to load", t)
				}), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
					Kr.ready.call(e)
				}), window.onYouTubeIframeAPIReady = function () {
					window.onYouTubeReadyCallbacks.forEach(function (e) {
						e()
					})
				})
			},
			getTitle: function (e) {
				var t = this;
				if (hi.function(this.embed.getVideoData)) {
					var n = this.embed.getVideoData().title;
					if (hi.empty(n)) return this.config.title = n, void jr.setTitle.call(this)
				}
				var i = this.config.keys.google;
				hi.string(i) && !hi.empty(i) && hr(rr(this.config.urls.youtube.api, e, i)).then(function (e) {
					hi.object(e) && (t.config.title = e.items[0].snippet.title, jr.setTitle.call(t))
				}).catch(function () {})
			},
			setAspectRatio: function () {
				var e = this.config.ratio.split(":");
				this.elements.wrapper.style.paddingBottom = "".concat(100 / e[0] * e[1], "%")
			},
			ready: function () {
				var e = this,
					t = e.media.getAttribute("id");
				if (hi.empty(t) || !t.startsWith("youtube-")) {
					var n = e.media.getAttribute("src");
					hi.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
					var i, r, o = (i = n, hi.empty(i) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i),
						a = (r = e.provider, "".concat(r, "-").concat(Math.floor(1e4 * Math.random()))),
						s = wi("div", {
							id: a,
							poster: e.poster
						});
					e.media = _i(s, e.media);
					var l = function (e) {
						return "https://img.youtube.com/vi/".concat(o, "/").concat(e, "default.jpg")
					};
					Or(l("maxres"), 121).catch(function () {
						return Or(l("sd"), 121)
					}).catch(function () {
						return Or(l("hq"))
					}).then(function (t) {
						return jr.setPoster.call(e, t.src)
					}).then(function (t) {
						t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
					}).catch(function () {}), e.embed = new window.YT.Player(a, {
						videoId: o,
						playerVars: {
							autoplay: e.config.autoplay ? 1 : 0,
							hl: e.config.hl,
							controls: e.supported.ui ? 0 : 1,
							rel: 0,
							showinfo: 0,
							iv_load_policy: 3,
							modestbranding: 1,
							disablekb: 1,
							playsinline: 1,
							widget_referrer: window ? window.location.href : null,
							cc_load_policy: e.captions.active ? 1 : 0,
							cc_lang_pref: e.config.captions.language
						},
						events: {
							onError: function (t) {
								if (!e.media.error) {
									var n = t.data,
										i = {
											2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
											5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
											100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
											101: "The owner of the requested video does not allow it to be played in embedded players.",
											150: "The owner of the requested video does not allow it to be played in embedded players."
										}[n] || "An unknown error occured";
									e.media.error = {
										code: n,
										message: i
									}, vi.call(e, e.media, "error")
								}
							},
							onPlaybackRateChange: function (t) {
								var n = t.target;
								e.media.playbackRate = n.getPlaybackRate(), vi.call(e, e.media, "ratechange")
							},
							onReady: function (t) {
								if (!hi.function(e.media.play)) {
									var n = t.target;
									Kr.getTitle.call(e, o), e.media.play = function () {
										Ur.call(e, !0), n.playVideo()
									}, e.media.pause = function () {
										Ur.call(e, !1), n.pauseVideo()
									}, e.media.stop = function () {
										n.stopVideo()
									}, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
										get: function () {
											return Number(n.getCurrentTime())
										},
										set: function (t) {
											e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, vi.call(e, e.media, "seeking"), n.seekTo(t)
										}
									}), Object.defineProperty(e.media, "playbackRate", {
										get: function () {
											return n.getPlaybackRate()
										},
										set: function (e) {
											n.setPlaybackRate(e)
										}
									});
									var i = e.config.volume;
									Object.defineProperty(e.media, "volume", {
										get: function () {
											return i
										},
										set: function (t) {
											i = t, n.setVolume(100 * i), vi.call(e, e.media, "volumechange")
										}
									});
									var r = e.config.muted;
									Object.defineProperty(e.media, "muted", {
										get: function () {
											return r
										},
										set: function (t) {
											var i = hi.boolean(t) ? t : r;
											r = i, n[i ? "mute" : "unMute"](), vi.call(e, e.media, "volumechange")
										}
									}), Object.defineProperty(e.media, "currentSrc", {
										get: function () {
											return n.getVideoUrl()
										}
									}), Object.defineProperty(e.media, "ended", {
										get: function () {
											return e.currentTime === e.duration
										}
									}), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), vi.call(e, e.media, "timeupdate"), vi.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
										e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && vi.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), vi.call(e, e.media, "canplaythrough"))
									}, 200), setTimeout(function () {
										return jr.build.call(e)
									}, 50)
								}
							},
							onStateChange: function (t) {
								var n = t.target;
								switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, vi.call(e, e.media, "seeked")), t.data) {
									case -1:
										vi.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), vi.call(e, e.media, "progress");
										break;
									case 0:
										Ur.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : vi.call(e, e.media, "ended");
										break;
									case 1:
										e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Ur.call(e, !0), vi.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
											vi.call(e, e.media, "timeupdate")
										}, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), vi.call(e, e.media, "durationchange")));
										break;
									case 2:
										e.muted || e.embed.unMute(), Ur.call(e, !1)
								}
								vi.call(e, e.elements.container, "statechange", !1, {
									code: t.data
								})
							}
						}
					})
				}
			}
		},
		zr = {
			setup: function () {
				this.media ? (Ci(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), Ci(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && Ci(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = wi("div", {
					class: this.config.classNames.video
				}), bi(this.media, this.elements.wrapper), this.elements.poster = wi("div", {
					class: this.config.classNames.poster
				}), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Ui.extend.call(this) : this.isYouTube ? Kr.setup.call(this) : this.isVimeo && Hr.setup.call(this)) : this.debug.warn("No media element found!")
			}
		},
		Yr = function () {
			function e(t) {
				var n = this;
				Xt(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
					container: null,
					displayContainer: null
				}, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
					n.on("loaded", e), n.on("error", t)
				}), this.load()
			}
			return en(e, [{
				key: "load",
				value: function () {
					var e = this;
					this.enabled && (hi.object(window.google) && hi.object(window.google.ima) ? this.ready() : Vr(this.player.config.urls.googleIMA.sdk).then(function () {
						e.ready()
					}).catch(function () {
						e.trigger("error", new Error("Google IMA SDK failed to load"))
					}))
				}
			}, {
				key: "ready",
				value: function () {
					var e = this;
					this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
						e.clearSafetyTimer("onAdsManagerLoaded()")
					}), this.listeners(), this.setupIMA()
				}
			}, {
				key: "setupIMA",
				value: function () {
					this.elements.container = wi("div", {
						class: this.player.config.classNames.ads
					}), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
				}
			}, {
				key: "requestAds",
				value: function () {
					var e = this,
						t = this.player.elements.container;
					try {
						this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
							return e.onAdsManagerLoaded(t)
						}, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
							return e.onAdError(t)
						}, !1);
						var n = new google.ima.AdsRequest;
						n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
					} catch (e) {
						this.onAdError(e)
					}
				}
			}, {
				key: "pollCountdown",
				value: function () {
					var e = this;
					if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
					this.countdownTimer = setInterval(function () {
						var t = yr(Math.max(e.manager.getRemainingTime(), 0)),
							n = "".concat(ur("advertisement", e.player.config), " - ").concat(t);
						e.elements.container.setAttribute("data-badge-text", n)
					}, 100)
				}
			}, {
				key: "onAdsManagerLoaded",
				value: function (e) {
					var t = this;
					if (this.enabled) {
						var n = new google.ima.AdsRenderingSettings;
						n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), hi.empty(this.cuePoints) || this.cuePoints.forEach(function (e) {
							if (0 !== e && -1 !== e && e < t.player.duration) {
								var n = t.player.elements.progress;
								if (hi.element(n)) {
									var i = 100 / t.player.duration * e,
										r = wi("span", {
											class: t.player.config.classNames.cues
										});
									r.style.left = "".concat(i.toString(), "%"), n.appendChild(r)
								}
							}
						}), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
							return t.onAdError(e)
						}), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
							t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
								return t.onAdEvent(e)
							})
						}), this.trigger("loaded")
					}
				}
			}, {
				key: "onAdEvent",
				value: function (e) {
					var t = this,
						n = this.player.elements.container,
						i = e.getAd(),
						r = function (e) {
							var n = "ads".concat(e.replace(/_/g, "").toLowerCase());
							vi.call(t.player, t.player.media, n)
						};
					switch (e.type) {
						case google.ima.AdEvent.Type.LOADED:
							this.trigger("loaded"), r(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
							break;
						case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
							r(e.type), this.loadAds();
							break;
						case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
							r(e.type), this.pauseContent();
							break;
						case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
							r(e.type), this.pollCountdown(), this.resumeContent();
							break;
						case google.ima.AdEvent.Type.STARTED:
						case google.ima.AdEvent.Type.MIDPOINT:
						case google.ima.AdEvent.Type.COMPLETE:
						case google.ima.AdEvent.Type.IMPRESSION:
						case google.ima.AdEvent.Type.CLICK:
							r(e.type)
					}
				}
			}, {
				key: "onAdError",
				value: function (e) {
					this.cancel(), this.player.debug.warn("Ads error", e)
				}
			}, {
				key: "listeners",
				value: function () {
					var e, t = this,
						n = this.player.elements.container;
					this.player.on("ended", function () {
						t.loader.contentComplete()
					}), this.player.on("seeking", function () {
						return e = t.player.currentTime
					}), this.player.on("seeked", function () {
						var n = t.player.currentTime;
						hi.empty(t.cuePoints) || t.cuePoints.forEach(function (i, r) {
							e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(r, 1))
						})
					}), window.addEventListener("resize", function () {
						t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
					})
				}
			}, {
				key: "play",
				value: function () {
					var e = this,
						t = this.player.elements.container;
					this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
						e.elements.displayContainer.initialize();
						try {
							e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
						} catch (t) {
							e.onAdError(t)
						}
					}).catch(function () {})
				}
			}, {
				key: "resumeContent",
				value: function () {
					this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
				}
			}, {
				key: "pauseContent",
				value: function () {
					this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
				}
			}, {
				key: "cancel",
				value: function () {
					this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
				}
			}, {
				key: "loadAds",
				value: function () {
					var e = this;
					this.managerPromise.then(function () {
						e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
							e.on("loaded", t), e.player.debug.log(e.manager)
						}), e.requestAds()
					}).catch(function () {})
				}
			}, {
				key: "trigger",
				value: function (e) {
					for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
					var o = this.events[e];
					hi.array(o) && o.forEach(function (e) {
						hi.function(e) && e.apply(t, i)
					})
				}
			}, {
				key: "on",
				value: function (e, t) {
					return hi.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
				}
			}, {
				key: "startSafetyTimer",
				value: function (e, t) {
					var n = this;
					this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
						n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
					}, e)
				}
			}, {
				key: "clearSafetyTimer",
				value: function (e) {
					hi.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
				}
			}, {
				key: "enabled",
				get: function () {
					return this.player.isHTML5 && this.player.isVideo && this.player.config.ads.enabled && !hi.empty(this.publisherId)
				}
			}, {
				key: "tagUrl",
				get: function () {
					var e = {
						AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
						AV_CHANNELID: "5a0458dc28a06145e4519d21",
						AV_URL: window.location.hostname,
						cb: Date.now(),
						AV_WIDTH: 640,
						AV_HEIGHT: 480,
						AV_CDIM2: this.publisherId
					};
					return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(kr(e))
				}
			}]), e
		}(),
		Gr = {
			insertElements: function (e, t) {
				var n = this;
				hi.string(t) ? Ti(e, this.media, {
					src: t
				}) : hi.array(t) && t.forEach(function (t) {
					Ti(e, n.media, t)
				})
			},
			change: function (e) {
				var t = this;
				Ki(e, "sources.length") ? (Ui.cancelRequests.call(this), this.destroy.call(this, function () {
					t.options.quality = [], Ei(t.media), t.media = null, hi.element(t.elements.container) && t.elements.container.removeAttribute("class");
					var n = e.sources,
						i = e.type,
						r = nn(n, 1)[0],
						o = r.provider,
						a = void 0 === o ? _r.html5 : o,
						s = r.src,
						l = "html5" === a ? i : "div",
						c = "html5" === a ? {} : {
							src: s
						};
					Object.assign(t, {
						provider: a,
						type: i,
						supported: Hi.check(i, a, t.config.playsinline),
						media: wi(l, c)
					}), t.elements.container.appendChild(t.media), hi.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), hi.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), jr.addStyleHook.call(t), t.isHTML5 && Gr.insertElements.call(t, "source", n), t.config.title = e.title, zr.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && Gr.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && jr.build.call(t), t.isHTML5 && t.media.load(), t.fullscreen.update()
				}, !0)) : this.debug.warn("Invalid source format")
			}
		},
		$r = function () {
			function e(t, n) {
				var i = this;
				if (Xt(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Hi.touch, this.media = t, hi.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || hi.nodeList(this.media) || hi.array(this.media)) && (this.media = this.media[0]), this.config = zi({}, Tr, e.defaults, n || {}, function () {
						try {
							return JSON.parse(i.media.getAttribute("data-plyr-config"))
						} catch (e) {
							return {}
						}
					}()), this.elements = {
						container: null,
						captions: null,
						buttons: {},
						display: {},
						progress: {},
						inputs: {},
						settings: {
							popup: null,
							menu: null,
							panels: {},
							buttons: {}
						}
					}, this.captions = {
						active: null,
						currentTrack: -1,
						meta: new WeakMap
					}, this.fullscreen = {
						active: !1
					}, this.options = {
						speed: [],
						quality: []
					}, this.debug = new Cr(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Hi), !hi.nullOrUndefined(this.media) && hi.element(this.media))
					if (this.media.plyr) this.debug.warn("Target already setup");
					else if (this.config.enabled)
					if (Hi.check().api) {
						var r = this.media.cloneNode(!0);
						r.autoplay = !1, this.elements.original = r;
						var o = this.media.tagName.toLowerCase(),
							a = null,
							s = null;
						switch (o) {
							case "div":
								if (a = this.media.querySelector("iframe"), hi.element(a)) {
									if (s = br(a.getAttribute("src")), this.provider = function (e) {
											return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? _r.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? _r.vimeo : null
										}(s.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", s.search.length) {
										var l = ["1", "true"];
										l.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(s.searchParams.get("playsinline")), this.config.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
									}
								} else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
								if (hi.empty(this.provider) || !Object.keys(_r).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
								this.type = Sr.video;
								break;
							case "video":
							case "audio":
								this.type = o, this.provider = _r.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
								break;
							default:
								return void this.debug.error("Setup failed: unsupported type")
						}
						this.supported = Hi.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Ir(this), this.storage = new dr(this), this.media.plyr = this, hi.element(this.elements.container) || (this.elements.container = wi("div"), bi(this.media, this.elements.container)), jr.addStyleHook.call(this), zr.setup.call(this), this.config.debug && mi.call(this, this.elements.container, this.config.events.join(" "), function (e) {
							i.debug.log("event: ".concat(e.type))
						}), (this.isHTML5 || this.isEmbed && !this.supported.ui) && jr.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new Nr(this), this.config.ads.enabled && (this.ads = new Yr(this)), this.config.autoplay && this.play(), this.lastSeekTime = 0) : this.debug.error("Setup failed: no support")
					} else this.debug.error("Setup failed: no support");
				else this.debug.error("Setup failed: disabled by config");
				else this.debug.error("Setup failed: no suitable element passed")
			}
			return en(e, [{
				key: "play",
				value: function () {
					return hi.function(this.media.play) ? this.media.play() : null
				}
			}, {
				key: "pause",
				value: function () {
					this.playing && hi.function(this.media.pause) && this.media.pause()
				}
			}, {
				key: "togglePlay",
				value: function (e) {
					(hi.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
				}
			}, {
				key: "stop",
				value: function () {
					this.isHTML5 ? (this.pause(), this.restart()) : hi.function(this.media.stop) && this.media.stop()
				}
			}, {
				key: "restart",
				value: function () {
					this.currentTime = 0
				}
			}, {
				key: "rewind",
				value: function (e) {
					this.currentTime = this.currentTime - (hi.number(e) ? e : this.config.seekTime)
				}
			}, {
				key: "forward",
				value: function (e) {
					this.currentTime = this.currentTime + (hi.number(e) ? e : this.config.seekTime)
				}
			}, {
				key: "increaseVolume",
				value: function (e) {
					var t = this.media.muted ? 0 : this.volume;
					this.volume = t + (hi.number(e) ? e : 0)
				}
			}, {
				key: "decreaseVolume",
				value: function (e) {
					this.increaseVolume(-e)
				}
			}, {
				key: "toggleCaptions",
				value: function (e) {
					wr.toggle.call(this, e, !1)
				}
			}, {
				key: "airplay",
				value: function () {
					Hi.airplay && this.media.webkitShowPlaybackTargetPicker()
				}
			}, {
				key: "toggleControls",
				value: function (e) {
					if (this.supported.ui && !this.isAudio) {
						var t = Li(this.elements.container, this.config.classNames.hideControls),
							n = void 0 === e ? void 0 : !e,
							i = Ci(this.elements.container, this.config.classNames.hideControls, n);
						if (i && this.config.controls.includes("settings") && !hi.empty(this.config.settings) && vr.toggleMenu.call(this, !1), i !== t) {
							var r = i ? "controlshidden" : "controlsshown";
							vi.call(this, this.media, r)
						}
						return !i
					}
					return !1
				}
			}, {
				key: "on",
				value: function (e, t) {
					mi.call(this, this.elements.container, e, t)
				}
			}, {
				key: "once",
				value: function (e, t) {
					yi.call(this, this.elements.container, e, t)
				}
			}, {
				key: "off",
				value: function (e, t) {
					gi(this.elements.container, e, t)
				}
			}, {
				key: "destroy",
				value: function (e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if (this.ready) {
						var i = function () {
							document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (Ei(t.elements.buttons.play), Ei(t.elements.captions), Ei(t.elements.controls), Ei(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), hi.function(e) && e()) : (function () {
								this && this.eventListeners && (this.eventListeners.forEach(function (e) {
									var t = e.element,
										n = e.type,
										i = e.callback,
										r = e.options;
									t.removeEventListener(n, i, r)
								}), this.eventListeners = [])
							}.call(t), _i(t.elements.original, t.elements.container), vi.call(t, t.elements.original, "destroyed", !0), hi.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
								t.elements = null, t.media = null
							}, 200))
						};
						this.stop(), this.isHTML5 ? (clearTimeout(this.timers.loading), jr.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && hi.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
					}
				}
			}, {
				key: "supports",
				value: function (e) {
					return Hi.mime.call(this, e)
				}
			}, {
				key: "isHTML5",
				get: function () {
					return Boolean(this.provider === _r.html5)
				}
			}, {
				key: "isEmbed",
				get: function () {
					return Boolean(this.isYouTube || this.isVimeo)
				}
			}, {
				key: "isYouTube",
				get: function () {
					return Boolean(this.provider === _r.youtube)
				}
			}, {
				key: "isVimeo",
				get: function () {
					return Boolean(this.provider === _r.vimeo)
				}
			}, {
				key: "isVideo",
				get: function () {
					return Boolean(this.type === Sr.video)
				}
			}, {
				key: "isAudio",
				get: function () {
					return Boolean(this.type === Sr.audio)
				}
			}, {
				key: "playing",
				get: function () {
					return Boolean(this.ready && !this.paused && !this.ended)
				}
			}, {
				key: "paused",
				get: function () {
					return Boolean(this.media.paused)
				}
			}, {
				key: "stopped",
				get: function () {
					return Boolean(this.paused && 0 === this.currentTime)
				}
			}, {
				key: "ended",
				get: function () {
					return Boolean(this.media.ended)
				}
			}, {
				key: "currentTime",
				set: function (e) {
					if (this.duration) {
						var t = hi.number(e) && e > 0;
						this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
					}
				},
				get: function () {
					return Number(this.media.currentTime)
				}
			}, {
				key: "buffered",
				get: function () {
					var e = this.media.buffered;
					return hi.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
				}
			}, {
				key: "seeking",
				get: function () {
					return Boolean(this.media.seeking)
				}
			}, {
				key: "duration",
				get: function () {
					var e = parseFloat(this.config.duration),
						t = (this.media || {}).duration,
						n = hi.number(t) && t !== 1 / 0 ? t : 0;
					return e || n
				}
			}, {
				key: "volume",
				set: function (e) {
					var t = e;
					hi.string(t) && (t = Number(t)), hi.number(t) || (t = this.storage.get("volume")), hi.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !hi.empty(e) && this.muted && t > 0 && (this.muted = !1)
				},
				get: function () {
					return Number(this.media.volume)
				}
			}, {
				key: "muted",
				set: function (e) {
					var t = e;
					hi.boolean(t) || (t = this.storage.get("muted")), hi.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
				},
				get: function () {
					return Boolean(this.media.muted)
				}
			}, {
				key: "hasAudio",
				get: function () {
					return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
				}
			}, {
				key: "speed",
				set: function (e) {
					var t = null;
					hi.number(e) && (t = e), hi.number(t) || (t = this.storage.get("speed")), hi.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (".concat(t, ")"))
				},
				get: function () {
					return Number(this.media.playbackRate)
				}
			}, {
				key: "quality",
				set: function (e) {
					var t = this.config.quality,
						n = this.options.quality;
					if (n.length) {
						var i = [!hi.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(hi.number),
							r = !0;
						if (!n.includes(i)) {
							var o = function (e, t) {
								return hi.array(e) && e.length ? e.reduce(function (e, n) {
									return Math.abs(n - t) < Math.abs(e - t) ? n : e
								}) : null
							}(n, i);
							this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o, r = !1
						}
						t.selected = i, this.media.quality = i, r && this.storage.set({
							quality: i
						})
					}
				},
				get: function () {
					return this.media.quality
				}
			}, {
				key: "loop",
				set: function (e) {
					var t = hi.boolean(e) ? e : this.config.loop.active;
					this.config.loop.active = t, this.media.loop = t
				},
				get: function () {
					return Boolean(this.media.loop)
				}
			}, {
				key: "source",
				set: function (e) {
					Gr.change.call(this, e)
				},
				get: function () {
					return this.media.currentSrc
				}
			}, {
				key: "download",
				get: function () {
					var e = this.config.urls.download;
					return hi.url(e) ? e : this.source
				}
			}, {
				key: "poster",
				set: function (e) {
					this.isVideo ? jr.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video")
				},
				get: function () {
					return this.isVideo ? this.media.getAttribute("poster") : null
				}
			}, {
				key: "autoplay",
				set: function (e) {
					var t = hi.boolean(e) ? e : this.config.autoplay;
					this.config.autoplay = t
				},
				get: function () {
					return Boolean(this.config.autoplay)
				}
			}, {
				key: "currentTrack",
				set: function (e) {
					wr.set.call(this, e, !1)
				},
				get: function () {
					var e = this.captions,
						t = e.toggled,
						n = e.currentTrack;
					return t ? n : -1
				}
			}, {
				key: "language",
				set: function (e) {
					wr.setLanguage.call(this, e, !1)
				},
				get: function () {
					return (wr.getCurrentTrack.call(this) || {}).language
				}
			}, {
				key: "pip",
				set: function (e) {
					if (Hi.pip) {
						var t = hi.boolean(e) ? e : !this.pip;
						hi.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Er : Ar), hi.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
					}
				},
				get: function () {
					return Hi.pip ? hi.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Er : null
				}
			}], [{
				key: "supported",
				value: function (e, t, n) {
					return Hi.check(e, t, n)
				}
			}, {
				key: "loadSprite",
				value: function (e, t) {
					return fr(e, t)
				}
			}, {
				key: "setup",
				value: function (t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						i = null;
					return hi.string(t) ? i = Array.from(document.querySelectorAll(t)) : hi.nodeList(t) ? i = Array.from(t) : hi.array(t) && (i = t.filter(hi.element)), hi.empty(i) ? null : i.map(function (t) {
						return new e(t, n)
					})
				}
			}]), e
		}();
	return $r.defaults = (Wr = Tr, JSON.parse(JSON.stringify(Wr))), $r
});
//# sourceMappingURL=plyr.polyfilled.js.map