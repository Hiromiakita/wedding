!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "d015a8f1-c8bc-55f0-a5f9-3d2774a1f60c")
    } catch (e) {}
}();
var sS = Object.create;
var Ms = Object.defineProperty;
var uS = Object.getOwnPropertyDescriptor;
var cS = Object.getOwnPropertyNames;
var dS = Object.getPrototypeOf
  , lS = Object.prototype.hasOwnProperty;
var x = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports);
var fS = (e, t, n, r) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let o of cS(t))
            !lS.call(e, o) && o !== n && Ms(e, o, {
                get: () => t[o],
                enumerable: !(r = uS(t, o)) || r.enumerable
            });
    return e
}
;
var q = (e, t, n) => (n = e != null ? sS(dS(e)) : {},
fS(t || !e || !e.__esModule ? Ms(n, "default", {
    value: e,
    enumerable: !0
}) : n, e));
var mt = x(A => {
    "use strict";
    var pS = A && A.__spreadArray || function(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, o = t.length, i; r < o; r++)
                (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
                i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    ;
    Object.defineProperty(A, "__esModule", {
        value: !0
    });
    A.dual = A.getEndomorphismMonoid = A.not = A.SK = A.hole = A.pipe = A.untupled = A.tupled = A.absurd = A.decrement = A.increment = A.tuple = A.flow = A.flip = A.constVoid = A.constUndefined = A.constNull = A.constFalse = A.constTrue = A.constant = A.unsafeCoerce = A.identity = A.apply = A.getRing = A.getSemiring = A.getMonoid = A.getSemigroup = A.getBooleanAlgebra = void 0;
    var mS = function(e) {
        return function() {
            return {
                meet: function(t, n) {
                    return function(r) {
                        return e.meet(t(r), n(r))
                    }
                },
                join: function(t, n) {
                    return function(r) {
                        return e.join(t(r), n(r))
                    }
                },
                zero: function() {
                    return e.zero
                },
                one: function() {
                    return e.one
                },
                implies: function(t, n) {
                    return function(r) {
                        return e.implies(t(r), n(r))
                    }
                },
                not: function(t) {
                    return function(n) {
                        return e.not(t(n))
                    }
                }
            }
        }
    };
    A.getBooleanAlgebra = mS;
    var gS = function(e) {
        return function() {
            return {
                concat: function(t, n) {
                    return function(r) {
                        return e.concat(t(r), n(r))
                    }
                }
            }
        }
    };
    A.getSemigroup = gS;
    var hS = function(e) {
        var t = (0,
        A.getSemigroup)(e);
        return function() {
            return {
                concat: t().concat,
                empty: function() {
                    return e.empty
                }
            }
        }
    };
    A.getMonoid = hS;
    var vS = function(e) {
        return {
            add: function(t, n) {
                return function(r) {
                    return e.add(t(r), n(r))
                }
            },
            zero: function() {
                return e.zero
            },
            mul: function(t, n) {
                return function(r) {
                    return e.mul(t(r), n(r))
                }
            },
            one: function() {
                return e.one
            }
        }
    };
    A.getSemiring = vS;
    var yS = function(e) {
        var t = (0,
        A.getSemiring)(e);
        return {
            add: t.add,
            mul: t.mul,
            one: t.one,
            zero: t.zero,
            sub: function(n, r) {
                return function(o) {
                    return e.sub(n(o), r(o))
                }
            }
        }
    };
    A.getRing = yS;
    var wS = function(e) {
        return function(t) {
            return t(e)
        }
    };
    A.apply = wS;
    function hi(e) {
        return e
    }
    A.identity = hi;
    A.unsafeCoerce = hi;
    function zn(e) {
        return function() {
            return e
        }
    }
    A.constant = zn;
    A.constTrue = zn(!0);
    A.constFalse = zn(!1);
    A.constNull = zn(null);
    A.constUndefined = zn(void 0);
    A.constVoid = A.constUndefined;
    function bS(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            return t.length > 1 ? e(t[1], t[0]) : function(r) {
                return e(r)(t[0])
            }
        }
    }
    A.flip = bS;
    function Ns(e, t, n, r, o, i, s, u, d) {
        switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return function() {
                return t(e.apply(this, arguments))
            }
            ;
        case 3:
            return function() {
                return n(t(e.apply(this, arguments)))
            }
            ;
        case 4:
            return function() {
                return r(n(t(e.apply(this, arguments))))
            }
            ;
        case 5:
            return function() {
                return o(r(n(t(e.apply(this, arguments)))))
            }
            ;
        case 6:
            return function() {
                return i(o(r(n(t(e.apply(this, arguments))))))
            }
            ;
        case 7:
            return function() {
                return s(i(o(r(n(t(e.apply(this, arguments)))))))
            }
            ;
        case 8:
            return function() {
                return u(s(i(o(r(n(t(e.apply(this, arguments))))))))
            }
            ;
        case 9:
            return function() {
                return d(u(s(i(o(r(n(t(e.apply(this, arguments)))))))))
            }
        }
    }
    A.flow = Ns;
    function SS() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return e
    }
    A.tuple = SS;
    function PS(e) {
        return e + 1
    }
    A.increment = PS;
    function ES(e) {
        return e - 1
    }
    A.decrement = ES;
    function Us(e) {
        throw new Error("Called `absurd` function which should be uncallable")
    }
    A.absurd = Us;
    function xS(e) {
        return function(t) {
            return e.apply(void 0, t)
        }
    }
    A.tupled = xS;
    function AS(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            return e(t)
        }
    }
    A.untupled = AS;
    function TS(e, t, n, r, o, i, s, u, d) {
        switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return t(e);
        case 3:
            return n(t(e));
        case 4:
            return r(n(t(e)));
        case 5:
            return o(r(n(t(e))));
        case 6:
            return i(o(r(n(t(e)))));
        case 7:
            return s(i(o(r(n(t(e))))));
        case 8:
            return u(s(i(o(r(n(t(e)))))));
        case 9:
            return d(u(s(i(o(r(n(t(e))))))));
        default:
            {
                for (var l = arguments[0], p = 1; p < arguments.length; p++)
                    l = arguments[p](l);
                return l
            }
        }
    }
    A.pipe = TS;
    A.hole = Us;
    var kS = function(e, t) {
        return t
    };
    A.SK = kS;
    function CS(e) {
        return function(t) {
            return !e(t)
        }
    }
    A.not = CS;
    var IS = function() {
        return {
            concat: function(e, t) {
                return Ns(e, t)
            },
            empty: hi
        }
    };
    A.getEndomorphismMonoid = IS;
    var LS = function(e, t) {
        var n = typeof e == "number" ? function(r) {
            return r.length >= e
        }
        : e;
        return function() {
            var r = Array.from(arguments);
            return n(arguments) ? t.apply(this, r) : function(o) {
                return t.apply(void 0, pS([o], r, !1))
            }
        }
    };
    A.dual = LS
}
);
var Wn = x(T => {
    "use strict";
    var OS = T && T.__spreadArray || function(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, o = t.length, i; r < o; r++)
                (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
                i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    ;
    Object.defineProperty(T, "__esModule", {
        value: !0
    });
    T.flatMapReader = T.flatMapTask = T.flatMapIO = T.flatMapEither = T.flatMapOption = T.flatMapNullable = T.liftOption = T.liftNullable = T.fromReadonlyNonEmptyArray = T.has = T.emptyRecord = T.emptyReadonlyArray = T.tail = T.head = T.isNonEmpty = T.singleton = T.right = T.left = T.isRight = T.isLeft = T.some = T.none = T.isSome = T.isNone = void 0;
    var nn = mt()
      , MS = function(e) {
        return e._tag === "None"
    };
    T.isNone = MS;
    var RS = function(e) {
        return e._tag === "Some"
    };
    T.isSome = RS;
    T.none = {
        _tag: "None"
    };
    var NS = function(e) {
        return {
            _tag: "Some",
            value: e
        }
    };
    T.some = NS;
    var US = function(e) {
        return e._tag === "Left"
    };
    T.isLeft = US;
    var DS = function(e) {
        return e._tag === "Right"
    };
    T.isRight = DS;
    var FS = function(e) {
        return {
            _tag: "Left",
            left: e
        }
    };
    T.left = FS;
    var _S = function(e) {
        return {
            _tag: "Right",
            right: e
        }
    };
    T.right = _S;
    var BS = function(e) {
        return [e]
    };
    T.singleton = BS;
    var HS = function(e) {
        return e.length > 0
    };
    T.isNonEmpty = HS;
    var qS = function(e) {
        return e[0]
    };
    T.head = qS;
    var zS = function(e) {
        return e.slice(1)
    };
    T.tail = zS;
    T.emptyReadonlyArray = [];
    T.emptyRecord = {};
    T.has = Object.prototype.hasOwnProperty;
    var WS = function(e) {
        return OS([e[0]], e.slice(1), !0)
    };
    T.fromReadonlyNonEmptyArray = WS;
    var jS = function(e) {
        return function(t, n) {
            return function() {
                for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                var i = t.apply(void 0, r);
                return e.fromEither(i == null ? (0,
                T.left)(n.apply(void 0, r)) : (0,
                T.right)(i))
            }
        }
    };
    T.liftNullable = jS;
    var VS = function(e) {
        return function(t, n) {
            return function() {
                for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                var i = t.apply(void 0, r);
                return e.fromEither((0,
                T.isNone)(i) ? (0,
                T.left)(n.apply(void 0, r)) : (0,
                T.right)(i.value))
            }
        }
    };
    T.liftOption = VS;
    var GS = function(e, t) {
        return (0,
        nn.dual)(3, function(n, r, o) {
            return t.flatMap(n, (0,
            T.liftNullable)(e)(r, o))
        })
    };
    T.flatMapNullable = GS;
    var KS = function(e, t) {
        return (0,
        nn.dual)(3, function(n, r, o) {
            return t.flatMap(n, (0,
            T.liftOption)(e)(r, o))
        })
    };
    T.flatMapOption = KS;
    var $S = function(e, t) {
        return (0,
        nn.dual)(2, function(n, r) {
            return t.flatMap(n, function(o) {
                return e.fromEither(r(o))
            })
        })
    };
    T.flatMapEither = $S;
    var YS = function(e, t) {
        return (0,
        nn.dual)(2, function(n, r) {
            return t.flatMap(n, function(o) {
                return e.fromIO(r(o))
            })
        })
    };
    T.flatMapIO = YS;
    var XS = function(e, t) {
        return (0,
        nn.dual)(2, function(n, r) {
            return t.flatMap(n, function(o) {
                return e.fromTask(r(o))
            })
        })
    };
    T.flatMapTask = XS;
    var QS = function(e, t) {
        return (0,
        nn.dual)(2, function(n, r) {
            return t.flatMap(n, function(o) {
                return e.fromReader(r(o))
            })
        })
    };
    T.flatMapReader = QS
}
);
var wi = x(X => {
    "use strict";
    var JS = X && X.__createBinding || (Object.create ? function(e, t, n, r) {
        r === void 0 && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        (!o || ("get"in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        }),
        Object.defineProperty(e, r, o)
    }
    : function(e, t, n, r) {
        r === void 0 && (r = n),
        e[r] = t[n]
    }
    )
      , ZS = X && X.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , eP = X && X.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (e != null)
            for (var n in e)
                n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && JS(t, e, n);
        return ZS(t, e),
        t
    }
    ;
    Object.defineProperty(X, "__esModule", {
        value: !0
    });
    X.sequenceS = X.sequenceT = X.getApplySemigroup = X.apS = X.apSecond = X.apFirst = X.ap = void 0;
    var tP = mt()
      , nP = eP(Wn());
    function rP(e, t) {
        return function(n) {
            return function(r) {
                return e.ap(e.map(r, function(o) {
                    return function(i) {
                        return t.ap(o, i)
                    }
                }), n)
            }
        }
    }
    X.ap = rP;
    function oP(e) {
        return function(t) {
            return function(n) {
                return e.ap(e.map(n, function(r) {
                    return function() {
                        return r
                    }
                }), t)
            }
        }
    }
    X.apFirst = oP;
    function iP(e) {
        return function(t) {
            return function(n) {
                return e.ap(e.map(n, function() {
                    return function(r) {
                        return r
                    }
                }), t)
            }
        }
    }
    X.apSecond = iP;
    function aP(e) {
        return function(t, n) {
            return function(r) {
                return e.ap(e.map(r, function(o) {
                    return function(i) {
                        var s;
                        return Object.assign({}, o, (s = {},
                        s[t] = i,
                        s))
                    }
                }), n)
            }
        }
    }
    X.apS = aP;
    function sP(e) {
        return function(t) {
            return {
                concat: function(n, r) {
                    return e.ap(e.map(n, function(o) {
                        return function(i) {
                            return t.concat(o, i)
                        }
                    }), r)
                }
            }
        }
    }
    X.getApplySemigroup = sP;
    function yi(e, t, n) {
        return function(r) {
            for (var o = Array(n.length + 1), i = 0; i < n.length; i++)
                o[i] = n[i];
            return o[n.length] = r,
            t === 0 ? e.apply(null, o) : yi(e, t - 1, o)
        }
    }
    var vi = {
        1: function(e) {
            return [e]
        },
        2: function(e) {
            return function(t) {
                return [e, t]
            }
        },
        3: function(e) {
            return function(t) {
                return function(n) {
                    return [e, t, n]
                }
            }
        },
        4: function(e) {
            return function(t) {
                return function(n) {
                    return function(r) {
                        return [e, t, n, r]
                    }
                }
            }
        },
        5: function(e) {
            return function(t) {
                return function(n) {
                    return function(r) {
                        return function(o) {
                            return [e, t, n, r, o]
                        }
                    }
                }
            }
        }
    };
    function uP(e) {
        return nP.has.call(vi, e) || (vi[e] = yi(tP.tuple, e - 1, [])),
        vi[e]
    }
    function cP(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            for (var r = t.length, o = uP(r), i = e.map(t[0], o), s = 1; s < r; s++)
                i = e.ap(i, t[s]);
            return i
        }
    }
    X.sequenceT = cP;
    function dP(e) {
        var t = e.length;
        switch (t) {
        case 1:
            return function(n) {
                var r;
                return r = {},
                r[e[0]] = n,
                r
            }
            ;
        case 2:
            return function(n) {
                return function(r) {
                    var o;
                    return o = {},
                    o[e[0]] = n,
                    o[e[1]] = r,
                    o
                }
            }
            ;
        case 3:
            return function(n) {
                return function(r) {
                    return function(o) {
                        var i;
                        return i = {},
                        i[e[0]] = n,
                        i[e[1]] = r,
                        i[e[2]] = o,
                        i
                    }
                }
            }
            ;
        case 4:
            return function(n) {
                return function(r) {
                    return function(o) {
                        return function(i) {
                            var s;
                            return s = {},
                            s[e[0]] = n,
                            s[e[1]] = r,
                            s[e[2]] = o,
                            s[e[3]] = i,
                            s
                        }
                    }
                }
            }
            ;
        case 5:
            return function(n) {
                return function(r) {
                    return function(o) {
                        return function(i) {
                            return function(s) {
                                var u;
                                return u = {},
                                u[e[0]] = n,
                                u[e[1]] = r,
                                u[e[2]] = o,
                                u[e[3]] = i,
                                u[e[4]] = s,
                                u
                            }
                        }
                    }
                }
            }
            ;
        default:
            return yi(function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                for (var o = {}, i = 0; i < t; i++)
                    o[e[i]] = n[i];
                return o
            }, t - 1, [])
        }
    }
    function lP(e) {
        return function(t) {
            for (var n = Object.keys(t), r = n.length, o = dP(n), i = e.map(t[n[0]], o), s = 1; s < r; s++)
                i = e.ap(i, t[n[s]]);
            return i
        }
    }
    X.sequenceS = lP
}
);
var Cr = x(he => {
    "use strict";
    Object.defineProperty(he, "__esModule", {
        value: !0
    });
    he.asUnit = he.as = he.getFunctorComposition = he.let = he.bindTo = he.flap = he.map = void 0;
    var fP = mt();
    function Ds(e, t) {
        return function(n) {
            return function(r) {
                return e.map(r, function(o) {
                    return t.map(o, n)
                })
            }
        }
    }
    he.map = Ds;
    function pP(e) {
        return function(t) {
            return function(n) {
                return e.map(n, function(r) {
                    return r(t)
                })
            }
        }
    }
    he.flap = pP;
    function mP(e) {
        return function(t) {
            return function(n) {
                return e.map(n, function(r) {
                    var o;
                    return o = {},
                    o[t] = r,
                    o
                })
            }
        }
    }
    he.bindTo = mP;
    function gP(e) {
        return function(t, n) {
            return function(r) {
                return e.map(r, function(o) {
                    var i;
                    return Object.assign({}, o, (i = {},
                    i[t] = n(o),
                    i))
                })
            }
        }
    }
    he.let = gP;
    function hP(e, t) {
        var n = Ds(e, t);
        return {
            map: function(r, o) {
                return (0,
                fP.pipe)(r, n(o))
            }
        }
    }
    he.getFunctorComposition = hP;
    function Fs(e) {
        return function(t, n) {
            return e.map(t, function() {
                return n
            })
        }
    }
    he.as = Fs;
    function vP(e) {
        var t = Fs(e);
        return function(n) {
            return t(n, void 0)
        }
    }
    he.asUnit = vP
}
);
var Bs = x(rn => {
    "use strict";
    Object.defineProperty(rn, "__esModule", {
        value: !0
    });
    rn.getApplicativeComposition = rn.getApplicativeMonoid = void 0;
    var _s = wi()
      , yP = mt()
      , wP = Cr();
    function bP(e) {
        var t = (0,
        _s.getApplySemigroup)(e);
        return function(n) {
            return {
                concat: t(n).concat,
                empty: e.of(n.empty)
            }
        }
    }
    rn.getApplicativeMonoid = bP;
    function SP(e, t) {
        var n = (0,
        wP.getFunctorComposition)(e, t).map
          , r = (0,
        _s.ap)(e, t);
        return {
            map: n,
            of: function(o) {
                return e.of(t.of(o))
            },
            ap: function(o, i) {
                return (0,
                yP.pipe)(o, r(i))
            }
        }
    }
    rn.getApplicativeComposition = SP
}
);
var bi = x(gt => {
    "use strict";
    Object.defineProperty(gt, "__esModule", {
        value: !0
    });
    gt.bind = gt.tap = gt.chainFirst = void 0;
    function PP(e) {
        var t = Hs(e);
        return function(n) {
            return function(r) {
                return t(r, n)
            }
        }
    }
    gt.chainFirst = PP;
    function Hs(e) {
        return function(t, n) {
            return e.chain(t, function(r) {
                return e.map(n(r), function() {
                    return r
                })
            })
        }
    }
    gt.tap = Hs;
    function EP(e) {
        return function(t, n) {
            return function(r) {
                return e.chain(r, function(o) {
                    return e.map(n(o), function(i) {
                        var s;
                        return Object.assign({}, o, (s = {},
                        s[t] = i,
                        s))
                    })
                })
            }
        }
    }
    gt.bind = EP
}
);
var qs = x(Ir => {
    "use strict";
    Object.defineProperty(Ir, "__esModule", {
        value: !0
    });
    Ir.tailRec = void 0;
    var xP = function(e, t) {
        for (var n = t(e); n._tag === "Left"; )
            n = t(n.left);
        return n.right
    };
    Ir.tailRec = xP
}
);
var Gs = x(z => {
    "use strict";
    var AP = z && z.__createBinding || (Object.create ? function(e, t, n, r) {
        r === void 0 && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        (!o || ("get"in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        }),
        Object.defineProperty(e, r, o)
    }
    : function(e, t, n, r) {
        r === void 0 && (r = n),
        e[r] = t[n]
    }
    )
      , TP = z && z.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , kP = z && z.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (e != null)
            for (var n in e)
                n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && AP(t, e, n);
        return TP(t, e),
        t
    }
    ;
    Object.defineProperty(z, "__esModule", {
        value: !0
    });
    z.tapEither = z.filterOrElse = z.chainFirstEitherK = z.chainEitherK = z.fromEitherK = z.chainOptionK = z.fromOptionK = z.fromPredicate = z.fromOption = void 0;
    var CP = bi()
      , zs = mt()
      , Rt = kP(Wn());
    function Ws(e) {
        return function(t) {
            return function(n) {
                return e.fromEither(Rt.isNone(n) ? Rt.left(t()) : Rt.right(n.value))
            }
        }
    }
    z.fromOption = Ws;
    function IP(e) {
        return function(t, n) {
            return function(r) {
                return e.fromEither(t(r) ? Rt.right(r) : Rt.left(n(r)))
            }
        }
    }
    z.fromPredicate = IP;
    function js(e) {
        var t = Ws(e);
        return function(n) {
            var r = t(n);
            return function(o) {
                return (0,
                zs.flow)(o, r)
            }
        }
    }
    z.fromOptionK = js;
    function LP(e, t) {
        var n = js(e);
        return function(r) {
            var o = n(r);
            return function(i) {
                return function(s) {
                    return t.chain(s, o(i))
                }
            }
        }
    }
    z.chainOptionK = LP;
    function Si(e) {
        return function(t) {
            return (0,
            zs.flow)(t, e.fromEither)
        }
    }
    z.fromEitherK = Si;
    function OP(e, t) {
        var n = Si(e);
        return function(r) {
            return function(o) {
                return t.chain(o, n(r))
            }
        }
    }
    z.chainEitherK = OP;
    function MP(e, t) {
        var n = Vs(e, t);
        return function(r) {
            return function(o) {
                return n(o, r)
            }
        }
    }
    z.chainFirstEitherK = MP;
    function RP(e, t) {
        return function(n, r) {
            return function(o) {
                return t.chain(o, function(i) {
                    return e.fromEither(n(i) ? Rt.right(i) : Rt.left(r(i)))
                })
            }
        }
    }
    z.filterOrElse = RP;
    function Vs(e, t) {
        var n = Si(e)
          , r = (0,
        CP.tap)(t);
        return function(o, i) {
            return r(o, n(i))
        }
    }
    z.tapEither = Vs
}
);
var Ks = x(R => {
    "use strict";
    Object.defineProperty(R, "__esModule", {
        value: !0
    });
    R.right = R.left = R.flap = R.Functor = R.Bifunctor = R.URI = R.bimap = R.mapLeft = R.map = R.separated = void 0;
    var Pi = mt()
      , NP = Cr()
      , UP = function(e, t) {
        return {
            left: e,
            right: t
        }
    };
    R.separated = UP;
    var DP = function(e, t) {
        return (0,
        Pi.pipe)(e, (0,
        R.map)(t))
    }
      , FP = function(e, t) {
        return (0,
        Pi.pipe)(e, (0,
        R.mapLeft)(t))
    }
      , _P = function(e, t, n) {
        return (0,
        Pi.pipe)(e, (0,
        R.bimap)(t, n))
    }
      , BP = function(e) {
        return function(t) {
            return (0,
            R.separated)((0,
            R.left)(t), e((0,
            R.right)(t)))
        }
    };
    R.map = BP;
    var HP = function(e) {
        return function(t) {
            return (0,
            R.separated)(e((0,
            R.left)(t)), (0,
            R.right)(t))
        }
    };
    R.mapLeft = HP;
    var qP = function(e, t) {
        return function(n) {
            return (0,
            R.separated)(e((0,
            R.left)(n)), t((0,
            R.right)(n)))
        }
    };
    R.bimap = qP;
    R.URI = "Separated";
    R.Bifunctor = {
        URI: R.URI,
        mapLeft: FP,
        bimap: _P
    };
    R.Functor = {
        URI: R.URI,
        map: DP
    };
    R.flap = (0,
    NP.flap)(R.Functor);
    var zP = function(e) {
        return e.left
    };
    R.left = zP;
    var WP = function(e) {
        return e.right
    };
    R.right = WP
}
);
var Ys = x(Ee => {
    "use strict";
    var jP = Ee && Ee.__createBinding || (Object.create ? function(e, t, n, r) {
        r === void 0 && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        (!o || ("get"in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        }),
        Object.defineProperty(e, r, o)
    }
    : function(e, t, n, r) {
        r === void 0 && (r = n),
        e[r] = t[n]
    }
    )
      , VP = Ee && Ee.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , GP = Ee && Ee.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (e != null)
            for (var n in e)
                n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && jP(t, e, n);
        return VP(t, e),
        t
    }
    ;
    Object.defineProperty(Ee, "__esModule", {
        value: !0
    });
    Ee.filterE = Ee.witherDefault = Ee.wiltDefault = void 0;
    var $s = GP(Wn());
    function KP(e, t) {
        return function(n) {
            var r = e.traverse(n);
            return function(o, i) {
                return n.map(r(o, i), t.separate)
            }
        }
    }
    Ee.wiltDefault = KP;
    function $P(e, t) {
        return function(n) {
            var r = e.traverse(n);
            return function(o, i) {
                return n.map(r(o, i), t.compact)
            }
        }
    }
    Ee.witherDefault = $P;
    function YP(e) {
        return function(t) {
            var n = e.wither(t);
            return function(r) {
                return function(o) {
                    return n(o, function(i) {
                        return t.map(r(i), function(s) {
                            return s ? $s.some(i) : $s.none
                        })
                    })
                }
            }
        }
    }
    Ee.filterE = YP
}
);
var Mr = x(c => {
    "use strict";
    var XP = c && c.__createBinding || (Object.create ? function(e, t, n, r) {
        r === void 0 && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        (!o || ("get"in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        }),
        Object.defineProperty(e, r, o)
    }
    : function(e, t, n, r) {
        r === void 0 && (r = n),
        e[r] = t[n]
    }
    )
      , QP = c && c.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , Qs = c && c.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (e != null)
            for (var n in e)
                n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && XP(t, e, n);
        return QP(t, e),
        t
    }
    ;
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    c.match = c.foldW = c.matchW = c.isRight = c.isLeft = c.fromOption = c.fromPredicate = c.FromEither = c.MonadThrow = c.throwError = c.ChainRec = c.Extend = c.extend = c.Alt = c.alt = c.altW = c.Bifunctor = c.mapLeft = c.bimap = c.Traversable = c.sequence = c.traverse = c.Foldable = c.reduceRight = c.foldMap = c.reduce = c.Monad = c.Chain = c.Applicative = c.Apply = c.ap = c.apW = c.Pointed = c.of = c.asUnit = c.as = c.Functor = c.map = c.getAltValidation = c.getApplicativeValidation = c.getWitherable = c.getFilterable = c.getCompactable = c.getSemigroup = c.getEq = c.getShow = c.URI = c.flatMap = c.right = c.left = void 0;
    c.chainFirstW = c.chainFirst = c.chain = c.chainW = c.sequenceArray = c.traverseArray = c.traverseArrayWithIndex = c.traverseReadonlyArrayWithIndex = c.traverseReadonlyNonEmptyArrayWithIndex = c.ApT = c.apSW = c.apS = c.bindW = c.bind = c.let = c.bindTo = c.Do = c.exists = c.elem = c.toError = c.toUnion = c.chainNullableK = c.fromNullableK = c.tryCatchK = c.tryCatch = c.fromNullable = c.orElse = c.orElseW = c.swap = c.filterOrElseW = c.filterOrElse = c.flatMapOption = c.flatMapNullable = c.liftOption = c.liftNullable = c.chainOptionKW = c.chainOptionK = c.fromOptionK = c.duplicate = c.flatten = c.flattenW = c.tap = c.apSecondW = c.apSecond = c.apFirstW = c.apFirst = c.flap = c.getOrElse = c.getOrElseW = c.fold = void 0;
    c.getValidation = c.getValidationMonoid = c.getValidationSemigroup = c.getApplyMonoid = c.getApplySemigroup = c.either = c.stringifyJSON = c.parseJSON = void 0;
    var Js = Bs()
      , jn = wi()
      , Zs = Qs(bi())
      , JP = qs()
      , Vn = Gs()
      , te = mt()
      , Gn = Cr()
      , Re = Qs(Wn())
      , Je = Ks()
      , Xs = Ys();
    c.left = Re.left;
    c.right = Re.right;
    c.flatMap = (0,
    te.dual)(2, function(e, t) {
        return (0,
        c.isLeft)(e) ? e : t(e.right)
    });
    var ve = function(e, t) {
        return (0,
        te.pipe)(e, (0,
        c.map)(t))
    }
      , Nt = function(e, t) {
        return (0,
        te.pipe)(e, (0,
        c.ap)(t))
    }
      , Kn = function(e, t, n) {
        return (0,
        te.pipe)(e, (0,
        c.reduce)(t, n))
    }
      , $n = function(e) {
        return function(t, n) {
            var r = (0,
            c.foldMap)(e);
            return (0,
            te.pipe)(t, r(n))
        }
    }
      , Yn = function(e, t, n) {
        return (0,
        te.pipe)(e, (0,
        c.reduceRight)(t, n))
    }
      , Lr = function(e) {
        var t = (0,
        c.traverse)(e);
        return function(n, r) {
            return (0,
            te.pipe)(n, t(r))
        }
    }
      , Ei = function(e, t, n) {
        return (0,
        te.pipe)(e, (0,
        c.bimap)(t, n))
    }
      , xi = function(e, t) {
        return (0,
        te.pipe)(e, (0,
        c.mapLeft)(t))
    }
      , eu = function(e, t) {
        return (0,
        te.pipe)(e, (0,
        c.alt)(t))
    }
      , Ai = function(e, t) {
        return (0,
        te.pipe)(e, (0,
        c.extend)(t))
    }
      , Ti = function(e, t) {
        return (0,
        JP.tailRec)(t(e), function(n) {
            return (0,
            c.isLeft)(n) ? (0,
            c.right)((0,
            c.left)(n.left)) : (0,
            c.isLeft)(n.right) ? (0,
            c.left)(t(n.right.left)) : (0,
            c.right)((0,
            c.right)(n.right.right))
        })
    };
    c.URI = "Either";
    var ZP = function(e, t) {
        return {
            show: function(n) {
                return (0,
                c.isLeft)(n) ? "left(".concat(e.show(n.left), ")") : "right(".concat(t.show(n.right), ")")
            }
        }
    };
    c.getShow = ZP;
    var eE = function(e, t) {
        return {
            equals: function(n, r) {
                return n === r || ((0,
                c.isLeft)(n) ? (0,
                c.isLeft)(r) && e.equals(n.left, r.left) : (0,
                c.isRight)(r) && t.equals(n.right, r.right))
            }
        }
    };
    c.getEq = eE;
    var tE = function(e) {
        return {
            concat: function(t, n) {
                return (0,
                c.isLeft)(n) ? t : (0,
                c.isLeft)(t) ? n : (0,
                c.right)(e.concat(t.right, n.right))
            }
        }
    };
    c.getSemigroup = tE;
    var nE = function(e) {
        var t = (0,
        c.left)(e.empty);
        return {
            URI: c.URI,
            _E: void 0,
            compact: function(n) {
                return (0,
                c.isLeft)(n) ? n : n.right._tag === "None" ? t : (0,
                c.right)(n.right.value)
            },
            separate: function(n) {
                return (0,
                c.isLeft)(n) ? (0,
                Je.separated)(n, n) : (0,
                c.isLeft)(n.right) ? (0,
                Je.separated)((0,
                c.right)(n.right.left), t) : (0,
                Je.separated)(t, (0,
                c.right)(n.right.right))
            }
        }
    };
    c.getCompactable = nE;
    var rE = function(e) {
        var t = (0,
        c.left)(e.empty)
          , n = (0,
        c.getCompactable)(e)
          , r = n.compact
          , o = n.separate
          , i = function(u, d) {
            return (0,
            c.isLeft)(u) || d(u.right) ? u : t
        }
          , s = function(u, d) {
            return (0,
            c.isLeft)(u) ? (0,
            Je.separated)(u, u) : d(u.right) ? (0,
            Je.separated)(t, (0,
            c.right)(u.right)) : (0,
            Je.separated)((0,
            c.right)(u.right), t)
        };
        return {
            URI: c.URI,
            _E: void 0,
            map: ve,
            compact: r,
            separate: o,
            filter: i,
            filterMap: function(u, d) {
                if ((0,
                c.isLeft)(u))
                    return u;
                var l = d(u.right);
                return l._tag === "None" ? t : (0,
                c.right)(l.value)
            },
            partition: s,
            partitionMap: function(u, d) {
                if ((0,
                c.isLeft)(u))
                    return (0,
                    Je.separated)(u, u);
                var l = d(u.right);
                return (0,
                c.isLeft)(l) ? (0,
                Je.separated)((0,
                c.right)(l.left), t) : (0,
                Je.separated)(t, (0,
                c.right)(l.right))
            }
        }
    };
    c.getFilterable = rE;
    var oE = function(e) {
        var t = (0,
        c.getFilterable)(e)
          , n = (0,
        c.getCompactable)(e);
        return {
            URI: c.URI,
            _E: void 0,
            map: ve,
            compact: t.compact,
            separate: t.separate,
            filter: t.filter,
            filterMap: t.filterMap,
            partition: t.partition,
            partitionMap: t.partitionMap,
            traverse: Lr,
            sequence: c.sequence,
            reduce: Kn,
            foldMap: $n,
            reduceRight: Yn,
            wither: (0,
            Xs.witherDefault)(c.Traversable, n),
            wilt: (0,
            Xs.wiltDefault)(c.Traversable, n)
        }
    };
    c.getWitherable = oE;
    var iE = function(e) {
        return {
            URI: c.URI,
            _E: void 0,
            map: ve,
            ap: function(t, n) {
                return (0,
                c.isLeft)(t) ? (0,
                c.isLeft)(n) ? (0,
                c.left)(e.concat(t.left, n.left)) : t : (0,
                c.isLeft)(n) ? n : (0,
                c.right)(t.right(n.right))
            },
            of: c.of
        }
    };
    c.getApplicativeValidation = iE;
    var aE = function(e) {
        return {
            URI: c.URI,
            _E: void 0,
            map: ve,
            alt: function(t, n) {
                if ((0,
                c.isRight)(t))
                    return t;
                var r = n();
                return (0,
                c.isLeft)(r) ? (0,
                c.left)(e.concat(t.left, r.left)) : r
            }
        }
    };
    c.getAltValidation = aE;
    var sE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? t : (0,
            c.right)(e(t.right))
        }
    };
    c.map = sE;
    c.Functor = {
        URI: c.URI,
        map: ve
    };
    c.as = (0,
    te.dual)(2, (0,
    Gn.as)(c.Functor));
    c.asUnit = (0,
    Gn.asUnit)(c.Functor);
    c.of = c.right;
    c.Pointed = {
        URI: c.URI,
        of: c.of
    };
    var uE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? t : (0,
            c.isLeft)(e) ? e : (0,
            c.right)(t.right(e.right))
        }
    };
    c.apW = uE;
    c.ap = c.apW;
    c.Apply = {
        URI: c.URI,
        map: ve,
        ap: Nt
    };
    c.Applicative = {
        URI: c.URI,
        map: ve,
        ap: Nt,
        of: c.of
    };
    c.Chain = {
        URI: c.URI,
        map: ve,
        ap: Nt,
        chain: c.flatMap
    };
    c.Monad = {
        URI: c.URI,
        map: ve,
        ap: Nt,
        of: c.of,
        chain: c.flatMap
    };
    var cE = function(e, t) {
        return function(n) {
            return (0,
            c.isLeft)(n) ? e : t(e, n.right)
        }
    };
    c.reduce = cE;
    var dE = function(e) {
        return function(t) {
            return function(n) {
                return (0,
                c.isLeft)(n) ? e.empty : t(n.right)
            }
        }
    };
    c.foldMap = dE;
    var lE = function(e, t) {
        return function(n) {
            return (0,
            c.isLeft)(n) ? e : t(n.right, e)
        }
    };
    c.reduceRight = lE;
    c.Foldable = {
        URI: c.URI,
        reduce: Kn,
        foldMap: $n,
        reduceRight: Yn
    };
    var fE = function(e) {
        return function(t) {
            return function(n) {
                return (0,
                c.isLeft)(n) ? e.of((0,
                c.left)(n.left)) : e.map(t(n.right), c.right)
            }
        }
    };
    c.traverse = fE;
    var pE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? e.of((0,
            c.left)(t.left)) : e.map(t.right, c.right)
        }
    };
    c.sequence = pE;
    c.Traversable = {
        URI: c.URI,
        map: ve,
        reduce: Kn,
        foldMap: $n,
        reduceRight: Yn,
        traverse: Lr,
        sequence: c.sequence
    };
    var mE = function(e, t) {
        return function(n) {
            return (0,
            c.isLeft)(n) ? (0,
            c.left)(e(n.left)) : (0,
            c.right)(t(n.right))
        }
    };
    c.bimap = mE;
    var gE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? (0,
            c.left)(e(t.left)) : t
        }
    };
    c.mapLeft = gE;
    c.Bifunctor = {
        URI: c.URI,
        bimap: Ei,
        mapLeft: xi
    };
    var hE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? e() : t
        }
    };
    c.altW = hE;
    c.alt = c.altW;
    c.Alt = {
        URI: c.URI,
        map: ve,
        alt: eu
    };
    var vE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? t : (0,
            c.right)(e(t))
        }
    };
    c.extend = vE;
    c.Extend = {
        URI: c.URI,
        map: ve,
        extend: Ai
    };
    c.ChainRec = {
        URI: c.URI,
        map: ve,
        ap: Nt,
        chain: c.flatMap,
        chainRec: Ti
    };
    c.throwError = c.left;
    c.MonadThrow = {
        URI: c.URI,
        map: ve,
        ap: Nt,
        of: c.of,
        chain: c.flatMap,
        throwError: c.throwError
    };
    c.FromEither = {
        URI: c.URI,
        fromEither: te.identity
    };
    c.fromPredicate = (0,
    Vn.fromPredicate)(c.FromEither);
    c.fromOption = (0,
    Vn.fromOption)(c.FromEither);
    c.isLeft = Re.isLeft;
    c.isRight = Re.isRight;
    var yE = function(e, t) {
        return function(n) {
            return (0,
            c.isLeft)(n) ? e(n.left) : t(n.right)
        }
    };
    c.matchW = yE;
    c.foldW = c.matchW;
    c.match = c.matchW;
    c.fold = c.match;
    var wE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? e(t.left) : t.right
        }
    };
    c.getOrElseW = wE;
    c.getOrElse = c.getOrElseW;
    c.flap = (0,
    Gn.flap)(c.Functor);
    c.apFirst = (0,
    jn.apFirst)(c.Apply);
    c.apFirstW = c.apFirst;
    c.apSecond = (0,
    jn.apSecond)(c.Apply);
    c.apSecondW = c.apSecond;
    c.tap = (0,
    te.dual)(2, Zs.tap(c.Chain));
    c.flattenW = (0,
    c.flatMap)(te.identity);
    c.flatten = c.flattenW;
    c.duplicate = (0,
    c.extend)(te.identity);
    c.fromOptionK = (0,
    Vn.fromOptionK)(c.FromEither);
    c.chainOptionK = (0,
    Vn.chainOptionK)(c.FromEither, c.Chain);
    c.chainOptionKW = c.chainOptionK;
    var Or = {
        fromEither: c.FromEither.fromEither
    };
    c.liftNullable = Re.liftNullable(Or);
    c.liftOption = Re.liftOption(Or);
    var tu = {
        flatMap: c.flatMap
    };
    c.flatMapNullable = Re.flatMapNullable(Or, tu);
    c.flatMapOption = Re.flatMapOption(Or, tu);
    c.filterOrElse = (0,
    Vn.filterOrElse)(c.FromEither, c.Chain);
    c.filterOrElseW = c.filterOrElse;
    var bE = function(e) {
        return (0,
        c.isLeft)(e) ? (0,
        c.right)(e.left) : (0,
        c.left)(e.right)
    };
    c.swap = bE;
    var SE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? e(t.left) : t
        }
    };
    c.orElseW = SE;
    c.orElse = c.orElseW;
    var PE = function(e) {
        return function(t) {
            return t == null ? (0,
            c.left)(e) : (0,
            c.right)(t)
        }
    };
    c.fromNullable = PE;
    var EE = function(e, t) {
        try {
            return (0,
            c.right)(e())
        } catch (n) {
            return (0,
            c.left)(t(n))
        }
    };
    c.tryCatch = EE;
    var xE = function(e, t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return (0,
            c.tryCatch)(function() {
                return e.apply(void 0, n)
            }, t)
        }
    };
    c.tryCatchK = xE;
    var AE = function(e) {
        var t = (0,
        c.fromNullable)(e);
        return function(n) {
            return (0,
            te.flow)(n, t)
        }
    };
    c.fromNullableK = AE;
    var TE = function(e) {
        var t = (0,
        c.fromNullableK)(e);
        return function(n) {
            return (0,
            c.flatMap)(t(n))
        }
    };
    c.chainNullableK = TE;
    c.toUnion = (0,
    c.foldW)(te.identity, te.identity);
    function kE(e) {
        try {
            return e instanceof Error ? e : new Error(String(e))
        } catch {
            return new Error
        }
    }
    c.toError = kE;
    function nu(e) {
        return function(t, n) {
            if (n === void 0) {
                var r = nu(e);
                return function(o) {
                    return r(t, o)
                }
            }
            return (0,
            c.isLeft)(n) ? !1 : e.equals(t, n.right)
        }
    }
    c.elem = nu;
    var CE = function(e) {
        return function(t) {
            return (0,
            c.isLeft)(t) ? !1 : e(t.right)
        }
    };
    c.exists = CE;
    c.Do = (0,
    c.of)(Re.emptyRecord);
    c.bindTo = (0,
    Gn.bindTo)(c.Functor);
    var IE = (0,
    Gn.let)(c.Functor);
    c.let = IE;
    c.bind = Zs.bind(c.Chain);
    c.bindW = c.bind;
    c.apS = (0,
    jn.apS)(c.Apply);
    c.apSW = c.apS;
    c.ApT = (0,
    c.of)(Re.emptyReadonlyArray);
    var LE = function(e) {
        return function(t) {
            var n = e(0, Re.head(t));
            if ((0,
            c.isLeft)(n))
                return n;
            for (var r = [n.right], o = 1; o < t.length; o++) {
                var i = e(o, t[o]);
                if ((0,
                c.isLeft)(i))
                    return i;
                r.push(i.right)
            }
            return (0,
            c.right)(r)
        }
    };
    c.traverseReadonlyNonEmptyArrayWithIndex = LE;
    var OE = function(e) {
        var t = (0,
        c.traverseReadonlyNonEmptyArrayWithIndex)(e);
        return function(n) {
            return Re.isNonEmpty(n) ? t(n) : c.ApT
        }
    };
    c.traverseReadonlyArrayWithIndex = OE;
    c.traverseArrayWithIndex = c.traverseReadonlyArrayWithIndex;
    var ME = function(e) {
        return (0,
        c.traverseReadonlyArrayWithIndex)(function(t, n) {
            return e(n)
        })
    };
    c.traverseArray = ME;
    c.sequenceArray = (0,
    c.traverseArray)(te.identity);
    c.chainW = c.flatMap;
    c.chain = c.flatMap;
    c.chainFirst = c.tap;
    c.chainFirstW = c.tap;
    function RE(e, t) {
        return (0,
        c.tryCatch)(function() {
            return JSON.parse(e)
        }, t)
    }
    c.parseJSON = RE;
    var NE = function(e, t) {
        return (0,
        c.tryCatch)(function() {
            var n = JSON.stringify(e);
            if (typeof n != "string")
                throw new Error("Converting unsupported structure to JSON");
            return n
        }, t)
    };
    c.stringifyJSON = NE;
    c.either = {
        URI: c.URI,
        map: ve,
        of: c.of,
        ap: Nt,
        chain: c.flatMap,
        reduce: Kn,
        foldMap: $n,
        reduceRight: Yn,
        traverse: Lr,
        sequence: c.sequence,
        bimap: Ei,
        mapLeft: xi,
        alt: eu,
        extend: Ai,
        chainRec: Ti,
        throwError: c.throwError
    };
    c.getApplySemigroup = (0,
    jn.getApplySemigroup)(c.Apply);
    c.getApplyMonoid = (0,
    Js.getApplicativeMonoid)(c.Applicative);
    var UE = function(e, t) {
        return (0,
        jn.getApplySemigroup)((0,
        c.getApplicativeValidation)(e))(t)
    };
    c.getValidationSemigroup = UE;
    var DE = function(e, t) {
        return (0,
        Js.getApplicativeMonoid)((0,
        c.getApplicativeValidation)(e))(t)
    };
    c.getValidationMonoid = DE;
    function FE(e) {
        var t = (0,
        c.getApplicativeValidation)(e).ap
          , n = (0,
        c.getAltValidation)(e).alt;
        return {
            URI: c.URI,
            _E: void 0,
            map: ve,
            of: c.of,
            chain: c.flatMap,
            bimap: Ei,
            mapLeft: xi,
            reduce: Kn,
            foldMap: $n,
            reduceRight: Yn,
            extend: Ai,
            traverse: Lr,
            sequence: c.sequence,
            chainRec: Ti,
            throwError: c.throwError,
            ap: t,
            alt: n
        }
    }
    c.getValidation = FE
}
);
var _i = x(f => {
    "use strict";
    var _ = f && f.__extends || function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(r, o) {
                r.__proto__ = o
            }
            || function(r, o) {
                for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            if (typeof n != "function" && n !== null)
                throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            e(t, n);
            function r() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype,
            new r)
        }
    }()
      , on = f && f.__assign || function() {
        return on = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }
        ,
        on.apply(this, arguments)
    }
      , BE = f && f.__spreadArray || function(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, o = t.length, i; r < o; r++)
                (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
                i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    ;
    Object.defineProperty(f, "__esModule", {
        value: !0
    });
    f.partial = f.PartialType = f.type = f.InterfaceType = f.array = f.ArrayType = f.recursion = f.RecursiveType = f.Int = f.brand = f.RefinementType = f.keyof = f.KeyofType = f.literal = f.LiteralType = f.void = f.undefined = f.null = f.UnknownRecord = f.AnyDictionaryType = f.UnknownArray = f.AnyArrayType = f.boolean = f.BooleanType = f.bigint = f.BigIntType = f.number = f.NumberType = f.string = f.StringType = f.unknown = f.UnknownType = f.voidType = f.VoidType = f.UndefinedType = f.nullType = f.NullType = f.getIndex = f.getTags = f.emptyTags = f.mergeAll = f.getDomainKeys = f.appendContext = f.getContextEntry = f.getFunctionName = f.identity = f.Type = f.success = f.failure = f.failures = void 0;
    f.alias = f.clean = f.StrictType = f.dictionary = f.object = f.ObjectType = f.Dictionary = f.getDefaultContext = f.getValidationError = f.interface = f.Array = f.taggedUnion = f.TaggedUnionType = f.Integer = f.refinement = f.any = f.AnyType = f.never = f.NeverType = f.Function = f.FunctionType = f.exact = f.ExactType = f.strict = f.readonlyArray = f.ReadonlyArrayType = f.readonly = f.ReadonlyType = f.tuple = f.TupleType = f.intersection = f.IntersectionType = f.union = f.UnionType = f.record = f.DictionaryType = void 0;
    var Q = Mr();
    f.failures = Q.left;
    var HE = function(e, t, n) {
        return (0,
        f.failures)([{
            value: e,
            context: t,
            message: n
        }])
    };
    f.failure = HE;
    f.success = Q.right;
    var B = function() {
        function e(t, n, r, o) {
            this.name = t,
            this.is = n,
            this.validate = r,
            this.encode = o,
            this.decode = this.decode.bind(this)
        }
        return e.prototype.pipe = function(t, n) {
            var r = this;
            return n === void 0 && (n = "pipe(".concat(this.name, ", ").concat(t.name, ")")),
            new e(n,t.is,function(o, i) {
                var s = r.validate(o, i);
                return (0,
                Q.isLeft)(s) ? s : t.validate(s.right, i)
            }
            ,this.encode === f.identity && t.encode === f.identity ? f.identity : function(o) {
                return r.encode(t.encode(o))
            }
            )
        }
        ,
        e.prototype.asDecoder = function() {
            return this
        }
        ,
        e.prototype.asEncoder = function() {
            return this
        }
        ,
        e.prototype.decode = function(t) {
            return this.validate(t, [{
                key: "",
                type: this,
                actual: t
            }])
        }
        ,
        e
    }();
    f.Type = B;
    var qE = function(e) {
        return e
    };
    f.identity = qE;
    function iu(e) {
        return e.displayName || e.name || "<function".concat(e.length, ">")
    }
    f.getFunctionName = iu;
    function zE(e, t) {
        return {
            key: e,
            type: t
        }
    }
    f.getContextEntry = zE;
    function Ge(e, t, n, r) {
        for (var o = e.length, i = Array(o + 1), s = 0; s < o; s++)
            i[s] = e[s];
        return i[o] = {
            key: t,
            type: n,
            actual: r
        },
        i
    }
    f.appendContext = Ge;
    function Ze(e, t) {
        for (var n = t.length, r = 0; r < n; r++)
            e.push(t[r])
    }
    var Ut = Object.prototype.hasOwnProperty;
    function Ii(e) {
        return Object.keys(e).map(function(t) {
            return "".concat(t, ": ").concat(e[t].name)
        }).join(", ")
    }
    function Xn(e) {
        for (var t = 0; t < e.length; t++)
            if (e[t].encode !== f.identity)
                return !1;
        return !0
    }
    function au(e) {
        return "{ ".concat(Ii(e), " }")
    }
    function su(e) {
        return "Partial<".concat(e, ">")
    }
    function WE(e, t, n, r) {
        r === void 0 && (r = "{ [K in ".concat(t.name, "]: ").concat(n.name, " }"));
        var o = e.length;
        return new Ui(r,function(i) {
            return f.UnknownRecord.is(i) && e.every(function(s) {
                return n.is(i[s])
            })
        }
        ,function(i, s) {
            var u = f.UnknownRecord.validate(i, s);
            if ((0,
            Q.isLeft)(u))
                return u;
            for (var d = u.right, l = {}, p = [], m = !1, g = 0; g < o; g++) {
                var h = e[g]
                  , b = d[h]
                  , y = n.validate(b, Ge(s, h, n, b));
                if ((0,
                Q.isLeft)(y))
                    Ze(p, y.left);
                else {
                    var S = y.right;
                    m = m || S !== b,
                    l[h] = S
                }
            }
            return p.length > 0 ? (0,
            f.failures)(p) : (0,
            f.success)(m || Object.keys(d).length !== o ? l : d)
        }
        ,n.encode === f.identity ? f.identity : function(i) {
            for (var s = {}, u = 0; u < o; u++) {
                var d = e[u];
                s[d] = n.encode(i[d])
            }
            return s
        }
        ,t,n)
    }
    function Mi(e) {
        var t;
        if (du(e)) {
            var n = e.value;
            if (f.string.is(n))
                return t = {},
                t[n] = null,
                t
        } else {
            if (YE(e))
                return e.keys;
            if (fu(e)) {
                var r = e.types.map(function(o) {
                    return Mi(o)
                });
                return r.some(Rr.is) ? void 0 : Object.assign.apply(Object, BE([{}], r, !1))
            }
        }
    }
    f.getDomainKeys = Mi;
    function jE(e, t, n) {
        return n === void 0 && (n = "{ [K in ".concat(e.name, "]: ").concat(t.name, " }")),
        new Ui(n,function(r) {
            return f.UnknownRecord.is(r) ? Object.keys(r).every(function(o) {
                return e.is(o) && t.is(r[o])
            }) : ou(t) && Array.isArray(r)
        }
        ,function(r, o) {
            if (f.UnknownRecord.is(r)) {
                for (var i = {}, s = [], u = Object.keys(r), d = u.length, l = !1, p = 0; p < d; p++) {
                    var m = u[p]
                      , g = r[m]
                      , h = e.validate(m, Ge(o, m, e, m));
                    if ((0,
                    Q.isLeft)(h))
                        Ze(s, h.left);
                    else {
                        var b = h.right;
                        l = l || b !== m,
                        m = b;
                        var y = t.validate(g, Ge(o, m, t, g));
                        if ((0,
                        Q.isLeft)(y))
                            Ze(s, y.left);
                        else {
                            var S = y.right;
                            l = l || S !== g,
                            i[m] = S
                        }
                    }
                }
                return s.length > 0 ? (0,
                f.failures)(s) : (0,
                f.success)(l ? i : r)
            }
            return ou(t) && Array.isArray(r) ? (0,
            f.success)(r) : (0,
            f.failure)(r, o)
        }
        ,e.encode === f.identity && t.encode === f.identity ? f.identity : function(r) {
            for (var o = {}, i = Object.keys(r), s = i.length, u = 0; u < s; u++) {
                var d = i[u];
                o[String(e.encode(d))] = t.encode(r[d])
            }
            return o
        }
        ,e,t)
    }
    function uu(e) {
        return "(" + e.map(function(t) {
            return t.name
        }).join(" | ") + ")"
    }
    function Li(e, t) {
        for (var n = !0, r = !0, o = !f.UnknownRecord.is(e), i = 0, s = t; i < s.length; i++) {
            var u = s[i];
            u !== e && (n = !1),
            f.UnknownRecord.is(u) && (r = !1)
        }
        if (n)
            return e;
        if (r)
            return t[t.length - 1];
        for (var d = {}, l = 0, p = t; l < p.length; l++) {
            var u = p[l];
            for (var m in u)
                (!Ut.call(d, m) || o || u[m] !== e[m]) && (d[m] = u[m])
        }
        return d
    }
    f.mergeAll = Li;
    function Oi(e) {
        switch (e._tag) {
        case "RefinementType":
        case "ReadonlyType":
            return Oi(e.type);
        case "InterfaceType":
        case "StrictType":
        case "PartialType":
            return e.props;
        case "IntersectionType":
            return e.types.reduce(function(t, n) {
                return Object.assign(t, Oi(n))
            }, {})
        }
    }
    function ru(e, t) {
        for (var n = Object.getOwnPropertyNames(e), r = !1, o = {}, i = 0; i < n.length; i++) {
            var s = n[i];
            Ut.call(t, s) ? o[s] = e[s] : r = !0
        }
        return r ? o : e
    }
    function VE(e) {
        return lu(e) ? "{| ".concat(Ii(e.props), " |}") : XE(e) ? su("{| ".concat(Ii(e.props), " |}")) : "Exact<".concat(e.name, ">")
    }
    function GE(e) {
        return e.length > 0
    }
    f.emptyTags = {};
    function cu(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            t.indexOf(i) !== -1 && n.push(i)
        }
        return n
    }
    function KE(e, t) {
        if (e === f.emptyTags)
            return t;
        if (t === f.emptyTags)
            return e;
        var n = Object.assign({}, e);
        for (var r in t)
            if (Ut.call(e, r)) {
                var o = cu(e[r], t[r]);
                if (GE(o))
                    n[r] = o;
                else {
                    n = f.emptyTags;
                    break
                }
            } else
                n[r] = t[r];
        return n
    }
    function $E(e, t) {
        if (e === f.emptyTags || t === f.emptyTags)
            return f.emptyTags;
        var n = f.emptyTags;
        for (var r in e)
            if (Ut.call(t, r)) {
                var o = cu(e[r], t[r]);
                o.length === 0 && (n === f.emptyTags && (n = {}),
                n[r] = e[r].concat(t[r]))
            }
        return n
    }
    function ou(e) {
        return e._tag === "AnyType"
    }
    function du(e) {
        return e._tag === "LiteralType"
    }
    function YE(e) {
        return e._tag === "KeyofType"
    }
    function lu(e) {
        return e._tag === "InterfaceType"
    }
    function XE(e) {
        return e._tag === "PartialType"
    }
    function QE(e) {
        return e._tag === "StrictType"
    }
    function JE(e) {
        return e._tag === "ExactType"
    }
    function ZE(e) {
        return e._tag === "RefinementType"
    }
    function ex(e) {
        return e._tag === "IntersectionType"
    }
    function fu(e) {
        return e._tag === "UnionType"
    }
    function tx(e) {
        return e._tag === "RecursiveType"
    }
    var Ci = [];
    function ht(e) {
        if (Ci.indexOf(e) !== -1)
            return f.emptyTags;
        if (lu(e) || QE(e)) {
            var t = f.emptyTags;
            for (var n in e.props) {
                var r = e.props[n];
                du(r) && (t === f.emptyTags && (t = {}),
                t[n] = [r.value])
            }
            return t
        } else {
            if (JE(e) || ZE(e))
                return ht(e.type);
            if (ex(e))
                return e.types.reduce(function(i, s) {
                    return KE(i, ht(s))
                }, f.emptyTags);
            if (fu(e))
                return e.types.slice(1).reduce(function(i, s) {
                    return $E(i, ht(s))
                }, ht(e.types[0]));
            if (tx(e)) {
                Ci.push(e);
                var o = ht(e.type);
                return Ci.pop(),
                o
            }
        }
        return f.emptyTags
    }
    f.getTags = ht;
    function pu(e) {
        var t = ht(e[0])
          , n = Object.keys(t)
          , r = e.length
          , o = function(l) {
            for (var p = t[l].slice(), m = [t[l]], g = 1; g < r; g++) {
                var h = e[g]
                  , b = ht(h)
                  , y = b[l];
                if (y === void 0)
                    return "continue-keys";
                if (y.some(function(S) {
                    return p.indexOf(S) !== -1
                }))
                    return "continue-keys";
                p.push.apply(p, y),
                m.push(y)
            }
            return {
                value: [l, m]
            }
        };
        e: for (var i = 0, s = n; i < s.length; i++) {
            var u = s[i]
              , d = o(u);
            if (typeof d == "object")
                return d.value;
            switch (d) {
            case "continue-keys":
                continue e
            }
        }
    }
    f.getIndex = pu;
    var mu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "null", function(r) {
                return r === null
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "NullType",
            n
        }
        return t
    }(B);
    f.NullType = mu;
    f.nullType = new mu;
    f.null = f.nullType;
    var gu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "undefined", function(r) {
                return r === void 0
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "UndefinedType",
            n
        }
        return t
    }(B);
    f.UndefinedType = gu;
    var Rr = new gu;
    f.undefined = Rr;
    var hu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "void", Rr.is, Rr.validate, f.identity) || this;
            return n._tag = "VoidType",
            n
        }
        return t
    }(B);
    f.VoidType = hu;
    f.voidType = new hu;
    f.void = f.voidType;
    var vu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "unknown", function(r) {
                return !0
            }, f.success, f.identity) || this;
            return n._tag = "UnknownType",
            n
        }
        return t
    }(B);
    f.UnknownType = vu;
    f.unknown = new vu;
    var yu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "string", function(r) {
                return typeof r == "string"
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "StringType",
            n
        }
        return t
    }(B);
    f.StringType = yu;
    f.string = new yu;
    var wu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "number", function(r) {
                return typeof r == "number"
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "NumberType",
            n
        }
        return t
    }(B);
    f.NumberType = wu;
    f.number = new wu;
    var bu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "bigint", function(r) {
                return typeof r == "bigint"
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "BigIntType",
            n
        }
        return t
    }(B);
    f.BigIntType = bu;
    f.bigint = new bu;
    var Su = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "boolean", function(r) {
                return typeof r == "boolean"
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "BooleanType",
            n
        }
        return t
    }(B);
    f.BooleanType = Su;
    f.boolean = new Su;
    var Pu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "UnknownArray", Array.isArray, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "AnyArrayType",
            n
        }
        return t
    }(B);
    f.AnyArrayType = Pu;
    f.UnknownArray = new Pu;
    f.Array = f.UnknownArray;
    var Eu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "UnknownRecord", function(r) {
                return r !== null && typeof r == "object" && !Array.isArray(r)
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "AnyDictionaryType",
            n
        }
        return t
    }(B);
    f.AnyDictionaryType = Eu;
    f.UnknownRecord = new Eu;
    var xu = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.value = s,
            u._tag = "LiteralType",
            u
        }
        return t
    }(B);
    f.LiteralType = xu;
    function nx(e, t) {
        t === void 0 && (t = JSON.stringify(e));
        var n = function(r) {
            return r === e
        };
        return new xu(t,n,function(r, o) {
            return n(r) ? (0,
            f.success)(e) : (0,
            f.failure)(r, o)
        }
        ,f.identity,e)
    }
    f.literal = nx;
    var Au = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.keys = s,
            u._tag = "KeyofType",
            u
        }
        return t
    }(B);
    f.KeyofType = Au;
    function rx(e, t) {
        t === void 0 && (t = Object.keys(e).map(function(r) {
            return JSON.stringify(r)
        }).join(" | "));
        var n = function(r) {
            return f.string.is(r) && Ut.call(e, r)
        };
        return new Au(t,n,function(r, o) {
            return n(r) ? (0,
            f.success)(r) : (0,
            f.failure)(r, o)
        }
        ,f.identity,e)
    }
    f.keyof = rx;
    var Tu = function(e) {
        _(t, e);
        function t(n, r, o, i, s, u) {
            var d = e.call(this, n, r, o, i) || this;
            return d.type = s,
            d.predicate = u,
            d._tag = "RefinementType",
            d
        }
        return t
    }(B);
    f.RefinementType = Tu;
    function ku(e, t, n) {
        return Fi(e, t, n)
    }
    f.brand = ku;
    f.Int = ku(f.number, function(e) {
        return Number.isInteger(e)
    }, "Int");
    var Ri = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.runDefinition = s,
            u._tag = "RecursiveType",
            u
        }
        return t
    }(B);
    f.RecursiveType = Ri;
    Object.defineProperty(Ri.prototype, "type", {
        get: function() {
            return this.runDefinition()
        },
        enumerable: !0,
        configurable: !0
    });
    function ox(e, t) {
        var n, r = function() {
            return n || (n = t(o),
            n.name = e),
            n
        }, o = new Ri(e,function(i) {
            return r().is(i)
        }
        ,function(i, s) {
            return r().validate(i, s)
        }
        ,function(i) {
            return r().encode(i)
        }
        ,r);
        return o
    }
    f.recursion = ox;
    var Cu = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.type = s,
            u._tag = "ArrayType",
            u
        }
        return t
    }(B);
    f.ArrayType = Cu;
    function Iu(e, t) {
        return t === void 0 && (t = "Array<".concat(e.name, ">")),
        new Cu(t,function(n) {
            return f.UnknownArray.is(n) && n.every(e.is)
        }
        ,function(n, r) {
            var o = f.UnknownArray.validate(n, r);
            if ((0,
            Q.isLeft)(o))
                return o;
            for (var i = o.right, s = i.length, u = i, d = [], l = 0; l < s; l++) {
                var p = i[l]
                  , m = e.validate(p, Ge(r, String(l), e, p));
                if ((0,
                Q.isLeft)(m))
                    Ze(d, m.left);
                else {
                    var g = m.right;
                    g !== p && (u === i && (u = i.slice()),
                    u[l] = g)
                }
            }
            return d.length > 0 ? (0,
            f.failures)(d) : (0,
            f.success)(u)
        }
        ,e.encode === f.identity ? f.identity : function(n) {
            return n.map(e.encode)
        }
        ,e)
    }
    f.array = Iu;
    var Lu = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.props = s,
            u._tag = "InterfaceType",
            u
        }
        return t
    }(B);
    f.InterfaceType = Lu;
    function Ni(e, t) {
        t === void 0 && (t = au(e));
        var n = Object.keys(e)
          , r = n.map(function(i) {
            return e[i]
        })
          , o = n.length;
        return new Lu(t,function(i) {
            if (f.UnknownRecord.is(i)) {
                for (var s = 0; s < o; s++) {
                    var u = n[s]
                      , d = i[u];
                    if (d === void 0 && !Ut.call(i, u) || !r[s].is(d))
                        return !1
                }
                return !0
            }
            return !1
        }
        ,function(i, s) {
            var u = f.UnknownRecord.validate(i, s);
            if ((0,
            Q.isLeft)(u))
                return u;
            for (var d = u.right, l = d, p = [], m = 0; m < o; m++) {
                var g = n[m]
                  , h = l[g]
                  , b = r[m]
                  , y = b.validate(h, Ge(s, g, b, h));
                if ((0,
                Q.isLeft)(y))
                    Ze(p, y.left);
                else {
                    var S = y.right;
                    (S !== h || S === void 0 && !Ut.call(l, g)) && (l === d && (l = on({}, d)),
                    l[g] = S)
                }
            }
            return p.length > 0 ? (0,
            f.failures)(p) : (0,
            f.success)(l)
        }
        ,Xn(r) ? f.identity : function(i) {
            for (var s = on({}, i), u = 0; u < o; u++) {
                var d = n[u]
                  , l = r[u].encode;
                l !== f.identity && (s[d] = l(i[d]))
            }
            return s
        }
        ,e)
    }
    f.type = Ni;
    f.interface = Ni;
    var Ou = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.props = s,
            u._tag = "PartialType",
            u
        }
        return t
    }(B);
    f.PartialType = Ou;
    function ix(e, t) {
        t === void 0 && (t = su(au(e)));
        var n = Object.keys(e)
          , r = n.map(function(i) {
            return e[i]
        })
          , o = n.length;
        return new Ou(t,function(i) {
            if (f.UnknownRecord.is(i)) {
                for (var s = 0; s < o; s++) {
                    var u = n[s]
                      , d = i[u];
                    if (d !== void 0 && !e[u].is(d))
                        return !1
                }
                return !0
            }
            return !1
        }
        ,function(i, s) {
            var u = f.UnknownRecord.validate(i, s);
            if ((0,
            Q.isLeft)(u))
                return u;
            for (var d = u.right, l = d, p = [], m = 0; m < o; m++) {
                var g = n[m]
                  , h = l[g]
                  , b = e[g]
                  , y = b.validate(h, Ge(s, g, b, h));
                if ((0,
                Q.isLeft)(y))
                    h !== void 0 && Ze(p, y.left);
                else {
                    var S = y.right;
                    S !== h && (l === d && (l = on({}, d)),
                    l[g] = S)
                }
            }
            return p.length > 0 ? (0,
            f.failures)(p) : (0,
            f.success)(l)
        }
        ,Xn(r) ? f.identity : function(i) {
            for (var s = on({}, i), u = 0; u < o; u++) {
                var d = n[u]
                  , l = i[d];
                l !== void 0 && (s[d] = r[u].encode(l))
            }
            return s
        }
        ,e)
    }
    f.partial = ix;
    var Ui = function(e) {
        _(t, e);
        function t(n, r, o, i, s, u) {
            var d = e.call(this, n, r, o, i) || this;
            return d.domain = s,
            d.codomain = u,
            d._tag = "DictionaryType",
            d
        }
        return t
    }(B);
    f.DictionaryType = Ui;
    function Mu(e, t, n) {
        var r = Mi(e);
        return r ? WE(Object.keys(r), e, t, n) : jE(e, t, n)
    }
    f.record = Mu;
    var Di = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.types = s,
            u._tag = "UnionType",
            u
        }
        return t
    }(B);
    f.UnionType = Di;
    function Ru(e, t) {
        t === void 0 && (t = uu(e));
        var n = pu(e);
        if (n !== void 0 && e.length > 0) {
            var r = n[0]
              , o = n[1]
              , i = o.length
              , s = function(u) {
                for (var d = 0; d < i; d++)
                    if (o[d].indexOf(u) !== -1)
                        return d
            };
            return new Nr(t,function(u) {
                if (f.UnknownRecord.is(u)) {
                    var d = s(u[r]);
                    return d !== void 0 ? e[d].is(u) : !1
                }
                return !1
            }
            ,function(u, d) {
                var l = f.UnknownRecord.validate(u, d);
                if ((0,
                Q.isLeft)(l))
                    return l;
                var p = l.right
                  , m = s(p[r]);
                if (m === void 0)
                    return (0,
                    f.failure)(u, d);
                var g = e[m];
                return g.validate(p, Ge(d, String(m), g, p))
            }
            ,Xn(e) ? f.identity : function(u) {
                var d = s(u[r]);
                if (d === void 0)
                    throw new Error("no codec found to encode value in union codec ".concat(t));
                return e[d].encode(u)
            }
            ,e,r)
        } else
            return new Di(t,function(u) {
                return e.some(function(d) {
                    return d.is(u)
                })
            }
            ,function(u, d) {
                for (var l = [], p = 0; p < e.length; p++) {
                    var m = e[p]
                      , g = m.validate(u, Ge(d, String(p), m, u));
                    if ((0,
                    Q.isLeft)(g))
                        Ze(l, g.left);
                    else
                        return (0,
                        f.success)(g.right)
                }
                return (0,
                f.failures)(l)
            }
            ,Xn(e) ? f.identity : function(u) {
                for (var d = 0, l = e; d < l.length; d++) {
                    var p = l[d];
                    if (p.is(u))
                        return p.encode(u)
                }
                throw new Error("no codec found to encode value in union type ".concat(t))
            }
            ,e)
    }
    f.union = Ru;
    var Nu = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.types = s,
            u._tag = "IntersectionType",
            u
        }
        return t
    }(B);
    f.IntersectionType = Nu;
    function ax(e, t) {
        t === void 0 && (t = "(".concat(e.map(function(r) {
            return r.name
        }).join(" & "), ")"));
        var n = e.length;
        return new Nu(t,function(r) {
            return e.every(function(o) {
                return o.is(r)
            })
        }
        ,e.length === 0 ? f.success : function(r, o) {
            for (var i = [], s = [], u = 0; u < n; u++) {
                var d = e[u]
                  , l = d.validate(r, Ge(o, String(u), d, r));
                (0,
                Q.isLeft)(l) ? Ze(s, l.left) : i.push(l.right)
            }
            return s.length > 0 ? (0,
            f.failures)(s) : (0,
            f.success)(Li(r, i))
        }
        ,e.length === 0 ? f.identity : function(r) {
            return Li(r, e.map(function(o) {
                return o.encode(r)
            }))
        }
        ,e)
    }
    f.intersection = ax;
    var Uu = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.types = s,
            u._tag = "TupleType",
            u
        }
        return t
    }(B);
    f.TupleType = Uu;
    function sx(e, t) {
        t === void 0 && (t = "[".concat(e.map(function(r) {
            return r.name
        }).join(", "), "]"));
        var n = e.length;
        return new Uu(t,function(r) {
            return f.UnknownArray.is(r) && r.length === n && e.every(function(o, i) {
                return o.is(r[i])
            })
        }
        ,function(r, o) {
            var i = f.UnknownArray.validate(r, o);
            if ((0,
            Q.isLeft)(i))
                return i;
            for (var s = i.right, u = s.length > n ? s.slice(0, n) : s, d = [], l = 0; l < n; l++) {
                var p = s[l]
                  , m = e[l]
                  , g = m.validate(p, Ge(o, String(l), m, p));
                if ((0,
                Q.isLeft)(g))
                    Ze(d, g.left);
                else {
                    var h = g.right;
                    h !== p && (u === s && (u = s.slice()),
                    u[l] = h)
                }
            }
            return d.length > 0 ? (0,
            f.failures)(d) : (0,
            f.success)(u)
        }
        ,Xn(e) ? f.identity : function(r) {
            return e.map(function(o, i) {
                return o.encode(r[i])
            })
        }
        ,e)
    }
    f.tuple = sx;
    var Du = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.type = s,
            u._tag = "ReadonlyType",
            u
        }
        return t
    }(B);
    f.ReadonlyType = Du;
    function ux(e, t) {
        return t === void 0 && (t = "Readonly<".concat(e.name, ">")),
        new Du(t,e.is,e.validate,e.encode,e)
    }
    f.readonly = ux;
    var Fu = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.type = s,
            u._tag = "ReadonlyArrayType",
            u
        }
        return t
    }(B);
    f.ReadonlyArrayType = Fu;
    function cx(e, t) {
        t === void 0 && (t = "ReadonlyArray<".concat(e.name, ">"));
        var n = Iu(e);
        return new Fu(t,n.is,n.validate,n.encode,e)
    }
    f.readonlyArray = cx;
    var dx = function(e, t) {
        return Bu(Ni(e), t)
    };
    f.strict = dx;
    var _u = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.type = s,
            u._tag = "ExactType",
            u
        }
        return t
    }(B);
    f.ExactType = _u;
    function Bu(e, t) {
        t === void 0 && (t = VE(e));
        var n = Oi(e);
        return new _u(t,e.is,function(r, o) {
            var i = f.UnknownRecord.validate(r, o);
            if ((0,
            Q.isLeft)(i))
                return i;
            var s = e.validate(r, o);
            return (0,
            Q.isLeft)(s) ? s : (0,
            Q.right)(ru(s.right, n))
        }
        ,function(r) {
            return e.encode(ru(r, n))
        }
        ,e)
    }
    f.exact = Bu;
    var Hu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "Function", function(r) {
                return typeof r == "function"
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "FunctionType",
            n
        }
        return t
    }(B);
    f.FunctionType = Hu;
    f.Function = new Hu;
    var qu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "never", function(r) {
                return !1
            }, function(r, o) {
                return (0,
                f.failure)(r, o)
            }, function() {
                throw new Error("cannot encode never")
            }) || this;
            return n._tag = "NeverType",
            n
        }
        return t
    }(B);
    f.NeverType = qu;
    f.never = new qu;
    var zu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "any", function(r) {
                return !0
            }, f.success, f.identity) || this;
            return n._tag = "AnyType",
            n
        }
        return t
    }(B);
    f.AnyType = zu;
    f.any = new zu;
    function Fi(e, t, n) {
        return n === void 0 && (n = "(".concat(e.name, " | ").concat(iu(t), ")")),
        new Tu(n,function(r) {
            return e.is(r) && t(r)
        }
        ,function(r, o) {
            var i = e.validate(r, o);
            if ((0,
            Q.isLeft)(i))
                return i;
            var s = i.right;
            return t(s) ? (0,
            f.success)(s) : (0,
            f.failure)(s, o)
        }
        ,e.encode,e,t)
    }
    f.refinement = Fi;
    f.Integer = Fi(f.number, Number.isInteger, "Integer");
    var Nr = function(e) {
        _(t, e);
        function t(n, r, o, i, s, u) {
            var d = e.call(this, n, r, o, i, s) || this;
            return d.tag = u,
            d
        }
        return t
    }(Di);
    f.TaggedUnionType = Nr;
    var lx = function(e, t, n) {
        n === void 0 && (n = uu(t));
        var r = Ru(t, n);
        return r instanceof Nr ? r : (console.warn("[io-ts] Cannot build a tagged union for ".concat(n, ", returning a de-optimized union")),
        new Nr(n,r.is,r.validate,r.encode,t,e))
    };
    f.taggedUnion = lx;
    var fx = function(e, t) {
        return {
            value: e,
            context: t
        }
    };
    f.getValidationError = fx;
    var px = function(e) {
        return [{
            key: "",
            type: e
        }]
    };
    f.getDefaultContext = px;
    f.Dictionary = f.UnknownRecord;
    var Wu = function(e) {
        _(t, e);
        function t() {
            var n = e.call(this, "object", function(r) {
                return r !== null && typeof r == "object"
            }, function(r, o) {
                return n.is(r) ? (0,
                f.success)(r) : (0,
                f.failure)(r, o)
            }, f.identity) || this;
            return n._tag = "ObjectType",
            n
        }
        return t
    }(B);
    f.ObjectType = Wu;
    f.object = new Wu;
    f.dictionary = Mu;
    var mx = function(e) {
        _(t, e);
        function t(n, r, o, i, s) {
            var u = e.call(this, n, r, o, i) || this;
            return u.props = s,
            u._tag = "StrictType",
            u
        }
        return t
    }(B);
    f.StrictType = mx;
    function gx(e) {
        return e
    }
    f.clean = gx;
    function hx(e) {
        return function() {
            return e
        }
    }
    f.alias = hx
}
);
var re = x(a => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    a.SortKey = a.QrCodeFormat = a.FillType = a.AppStoreProductAccountType = a.AppStoreProductIntroductoryPaymentMode = a.AppStoreProductSubscriptionPeriodUnit = a.AppLockState = a.VaultPermissionUpdateType = a.ApiReAuthRequestReason = a.ApiCacheBehavior = a.ApiGetUsersSortKey = a.UserType = a.GetItemSideEffect = a.GroupType = a.GroupState = a.ApiGetAccountsSortKey = a.ApiSortOrder = a.AccountOfflineStatus = a.ApiFilterMethod = a.BookmarkRequestSource = a.AutoFillMethod = a.ContactType = a.FormDesignation = a.SuggestedIntegration = a.ResolveMode = a.ElementType = a.AutofilledBy = a.AddressSection = a.ActivityLogEntryType = a.ActivationHubDeviceTaskType = a.ActivationHubDeviceCategory = a.ActivationHubTaskName = a.AccountStatus = a.AccountListSignInAction = a.SignInButtonStyle = a.UserState = a.VaultType = a.BillingStatus = a.AccountState = a.AccountType = a.CalloutBannerVariant = a.ButtonStyle = a.ButtonState = a.ComponentName = a.EmptyContentBackground = a.BackupCredentialsAuthMethod = a.IconShape = a.IconBadge = a.Action = a.AutofillType = void 0;
    a.ItemDetailPrimaryAction = a.ViewItemSpacing = a.DateTimeVariant = a.ElementBorderStyle = a.EditItemSaveValueAddFieldType = a.EditItemIconMenuAction = a.EditItemElementInputAutoCapitalization = a.EditItemElementInputKeyboard = a.ItemLocationMapState = a.EditItemCreateBannerType = a.EditItemWarning = a.EditItemDateClassification = a.AddFileSource = a.DefaultIconFile = a.CredentialResultStatus = a.FileImportType = a.CredentialExchangeProvider = a.AttestationStatementFormatIdentifiers = a.SignInFieldViewContext = a.SignInFieldAction = a.PrivacyCardSpendLimitDuration = a.PrivacyCardType = a.CreateButtonStyle = a.ItemAction = a.TrayAction = a.HoldToRevealMode = a.AndroidAuthMethod = a.ThemeMode = a.Tristate = a.CancelSignInBehavior = a.BrexUserPermissionStatus = a.BrexUserStatus = a.BrexEnvironment = a.BrexLimitDuration = a.BrexCurrency = a.BrexLimitType = a.BrexCardType = a.BrexCardStatus = a.BiometryAvailability = a.BiometryMethod = a.BiometricPolicy = a.CopyOption = a.EditItemSectionKind = a.EditItemSpacing = a.B5xOpiLogLevel = a.ItemUrlMode = a.DismissAction = a.ItemDetailBannerType = a.ItemState = a.SortOrder = void 0;
    a.FillStatus = a.MyceliumMode = a.InvitationRole = a.MobileTab = a.MobileHomeScreenFeature = a.MobileHomeScreenEditIdentifier = a.MobileHomeScreenType = a.MessageBoxType = a.Roles = a.MdLinkType = a.ManualSignInSubmitAction = a.CancelButtonStyle = a.SignInTextInputId = a.ManageAccountTelemetrySettingsOptionId = a.ManageAccountIllustration = a.ManageAccountColor = a.TextInputFieldType = a.MaCategoryId = a.LockScreenAccountPreviewMode = a.Accessible = a.KeyOp = a.KeyType = a.KeyAlgorithm = a.ItemLocationMessageElementSize = a.ItemDetailState = a.IndicatorPillColor = a.InAppPurchaseButtonStyle = a.FileExtensionTypes = a.TimePadding = a.HourCycle = a.HourIndexing = a.WebItemIntegrationInformation = a.Browser = a.AliasState = a.WordListType = a.SeparatorType = a.PasswordType = a.FileStatus = a.FundingAccountApiState = a.Status = a.SshPrivateKeyExportFormat = a.DisclosureSeverity = a.Format = a.EssentialSetupPageNavigationButtonEmphasis = a.EssentialSetupPageId = a.EssentialSetupFeatureIllustration = a.EssentialSetupIllustration = a.EmptyContentButtonStyle = a.RenderTarget = a.TotpIndicatorColor = void 0;
    a.WatchtowerCardType = a.VaultSimplifiedPermissionsSummary = a.VaultPermissionViewRemoveWarning = a.VaultSimplifiedPermissions = a.VaultCollectionDetailState = a.ValidOtpSchemes = a.ToastBehavior = a.ThemedIconFile = a.StepperChangeType = a.SilentUnlockReason = a.SidebarElementSpacerType = a.ManualSignInFormType = a.ShareItemTelemetryShareMethod = a.ShareItemLimitViewsCheckbox = a.ShareItemLinkExpirationMenuEntryId = a.ShareItemErrorFormat = a.ShareItemAvailableToMenuEntryId = a.TextJustification = a.SettingsElementRadioOptionIllustration = a.SettingsElementPillType = a.KnoxCalloutSeverity = a.SbCollectionMenuBasicCommand = a.CreateItemType = a.UsoProvider = a.SaveManagerIntegration = a.SafariWebExtensionAccountType = a.BiometryType = a.ReleaseChannel = a.RecoveryKeyFileContentsFormat = a.QrCodeSource = a.QuickAccessOpenedBy = a.QXOnboardingAction = a.FieldPriorityOrder = a.PrivacySpendLimit = a.OpenUrlType = a.OpWebCoreAppTheme = a.ImportName = a.PasswordGeneratorButtonAction = a.OpBrowserAppTheme = a.SyncFlag = a.QfSectionName = a.SbCollectionType = a.WindowType = a.OpAppAccountSignOutReason = a.OfflineIndicatorAction = a.OauthErrorType = a.OAuthRejectedError = a.SignInResponseContext = a.SettingsCategoryId = a.LockState = void 0;
    a.DeleteUnlockPasskeyResponse = a.ConfirmUserResponse = a.ComponentType = a.ComponentSource = a.CodeSignatureError = a.ClientDataType = a.CheckboxSetting = a.CcType = a.CancelInviteResponse = a.BrowserVerificationFailedReason = a.BrowserSupportResponse = a.BrowserHelperResponse = a.BiometricUnlock = a.BiometricAuthResponse = a.BindingError = a.B5xBrowser = a.AutofillUpdateForChromeRequest = a.AuthorizedDeviceQrDisplayMyceliumSignInResponse = a.AuthPromptType = a.AppleNotificationAuthorizationStatusResponse = a.AppleNotificationAuthorizationResponse = a.AppStoreReviewPromptRequest = a.AppStoreError = a.ApiValidateVaultPermissionsChangeError = a.ApiValidateSignInAddressError = a.ApiValidateSecretKeyError = a.ApiValidateEmailError = a.ApiType = a.ApiRemoveSshHostBookmarkResponse = a.ApiManageVaultAccessError = a.ApiItemHistoryError = a.ApiGetUsersError = a.ApiGetTrustedDevicesError = a.ApiGetItemsError = a.ApiGetGroupsError = a.ApiGetAuthMethodError = a.ApiGetAccountSignInCredentialsError = a.ApiDeleteFoundAccountResponse = a.ApiAddSshHostBookmarkResponse = a.AndroidWebAuthnError = a.AlignMyceliumRegionWithCurrentAccountsResponse = a.AliasError = a.AddressType = a.AddLocationToItemResponse = a.ActionName = a.AccountLockState = a.AccessorType = a.ZoneISOFieldRequirement = a.ZoneISOFormatType = a.WelcomeScreenSlideID = void 0;
    a.VaultItemViewability = a.VaultError = a.ValidateRecoveryCodeResponse = a.UserPromptResponse = a.TelemetryCategory = a.SystemUnlockResponse = a.SweDeviceError = a.SilentUnlockResponse = a.ShowCreateItemResponse = a.SettingsCalloutVariant = a.ServiceIntegration = a.SelectedPasswordStrength = a.SaveManagerError = a.ResendInviteResponse = a.RecoveryKeyDeleteResponse = a.RecoveryKeyActivateResponse = a.PeriodDisplay = a.OpiRequestError = a.OpImportStage = a.OpImportResponseErr = a.OpImportInitResponseErr = a.OpImportDataSourceResponseErr = a.OpImportCredentialsError = a.OpImportCredentialNeed = a.OpImportCancelError = a.OpAppBrowserSupportSetup = a.NumericMonthDayDisplay = a.NmRequestDelegatedSessionError = a.NmCurrentStatusRequest = a.NmCredentialBundleError = a.NmAuthorizationResponse = a.MonthDayDisplay = a.MfaInProgressKind = a.MdError = a.ManageAccountUserVaultsListResponseError = a.ManageAccountUserType = a.ManageAccountResponseError = a.Level = a.ItemListEntryError = a.ItemCatalogTheme = a.InterfaceIdiom = a.GetItemAtVersionError = a.FreeFamilyOption = a.FillStatusError = a.ExperimentId = a.EssentialSetupRequest = a.ErrorRequestingDSecretProxy = a.Error = a.EmailAliasProvider = a.DistanceUnit = void 0;
    a.XpcDisconnectReason = a.WindowFocusPurpose = a.WebMdError = a.WebAuthnSignUpAddAccountResponse = a.VaultPermissionsMethod = a.VaultPermissionsCannotModifyReason = void 0;
    var sc;
    (function(e) {
        e.SshKeyTitle = "ssh-key-title",
        e.SshKey = "ssh-key",
        e.None = "none",
        e.Name = "name",
        e.HonorificPrefix = "honorific-prefix",
        e.GivenName = "given-name",
        e.AdditionalName = "additional-name",
        e.FamilyName = "family-name",
        e.HonorificSuffix = "honorific-suffix",
        e.Nickname = "nickname",
        e.OrganizationTitle = "organization-title",
        e.Username = "username",
        e.NewPassword = "new-password",
        e.CurrentPassword = "current-password",
        e.OneTimeCode = "one-time-code",
        e.Organization = "organization",
        e.StreetAddress = "street-address",
        e.AddressLine1 = "address-line1",
        e.AddressLine2 = "address-line2",
        e.AddressLine3 = "address-line3",
        e.AddressLevel1 = "address-level1",
        e.AddressLevel2 = "address-level2",
        e.AddressLevel3 = "address-level3",
        e.AddressLevel4 = "address-level4",
        e.Country = "country",
        e.CountryName = "country-name",
        e.PostalCode = "postal-code",
        e.CcName = "cc-name",
        e.CcGivenName = "cc-given-name",
        e.CcAdditionalName = "cc-additional-name",
        e.CcFamilyName = "cc-family-name",
        e.CcNumber = "cc-number",
        e.CcExp = "cc-exp",
        e.CcExpMonth = "cc-exp-month",
        e.CcExpYear = "cc-exp-year",
        e.CcCsc = "cc-csc",
        e.CcType = "cc-type",
        e.TransactionCurrency = "transaction-currency",
        e.TransactionAmount = "transaction-amount",
        e.Language = "language",
        e.Bday = "bday",
        e.BdayDay = "bday-day",
        e.BdayMonth = "bday-month",
        e.BdayYear = "bday-year",
        e.Sex = "sex",
        e.Url = "url",
        e.Photo = "photo",
        e.Tel = "tel",
        e.TelCountryCode = "tel-country-code",
        e.TelNational = "tel-national",
        e.TelAreaCode = "tel-area-code",
        e.TelLocal = "tel-local",
        e.TelLocalPrefix = "tel-local-prefix",
        e.TelLocalSuffix = "tel-local-suffix",
        e.TelExtension = "tel-extension",
        e.Email = "email",
        e.Impp = "impp",
        e.CryptoAddress = "crypto-address",
        e.CryptoRecoverySeed = "crypto-recovery-seed",
        e.RecoveryCode = "recovery-code"
    }
    )(sc || (a.AutofillType = sc = {}));
    var uc;
    (function(e) {
        e.ClickOpid = "clickOpid",
        e.ClickQuerySelector = "clickQuerySelector",
        e.FillOpid = "fillOpid",
        e.FillQuerySelector = "fillQuerySelector",
        e.FocusOpid = "focusOpid",
        e.Submit = "submit"
    }
    )(uc || (a.Action = uc = {}));
    var cc;
    (function(e) {
        e.Favorite = "favorite",
        e.Lock = "lock",
        e.Chevron = "chevron",
        e.ChevronPressed = "chevronPressed",
        e.Key = "key"
    }
    )(cc || (a.IconBadge = cc = {}));
    var dc;
    (function(e) {
        e.Circle = "circle",
        e.RoundedRect = "roundedRect",
        e.Rect = "rect"
    }
    )(dc || (a.IconShape = dc = {}));
    var lc;
    (function(e) {
        e.SecretKey = "secretKey",
        e.Sso = "sso",
        e.WebAuthn = "webAuthn"
    }
    )(lc || (a.BackupCredentialsAuthMethod = lc = {}));
    var fc;
    (function(e) {
        e.Vault = "vault",
        e.Archive = "archive",
        e.Favorites = "favorites",
        e.Categories = "categories",
        e.WatchtowerCompromised = "watchtowerCompromised",
        e.WatchtowerVulnerable = "watchtowerVulnerable",
        e.WatchtowerReused = "watchtowerReused",
        e.WatchtowerWeak = "watchtowerWeak",
        e.WatchtowerUnsecured = "watchtowerUnsecured",
        e.WatchtowerInactiveMfa = "watchtowerInactiveMfa",
        e.WatchtowerInWrongAccount = "watchtowerInWrongAccount",
        e.WatchtowerPasskeyAvailable = "watchtowerPasskeyAvailable",
        e.WatchtowerExpiring = "watchtowerExpiring"
    }
    )(fc || (a.EmptyContentBackground = fc = {}));
    var pc;
    (function(e) {
        e.LegacySearchResult = "legacy_search_result",
        e.SmartSearchResult = "smart_search_result",
        e.SmartSearchFilterVault = "smart_search_filter_vault",
        e.LegacySearchFilterVault = "legacy_search_filter_vault",
        e.SmartSearchFilterFavorite = "smart_search_filter_favorite",
        e.LegacySearchFilterFavorite = "legacy_search_filter_favorite",
        e.SmartSearchFilterCategory = "smart_search_filter_category",
        e.LegacySearchFilterCategory = "legacy_search_filter_category",
        e.SmartSearchFilterTag = "smart_search_filter_tag",
        e.LegacySearchFilterTag = "legacy_search_filter_tag",
        e.SmartSearchFilterUntag = "smart_search_filter_untag",
        e.LegacySearchFilterUntag = "legacy_search_filter_untag",
        e.SetUpAnotherDevice = "set_up_another_device",
        e.CopyLink = "copy_link",
        e.ShareLink = "share_link",
        e.SetUpAnotherDeviceSetupCode = "set_up_another_device_setup_code",
        e.RemoveCard = "remove_card",
        e.SafariExtensionCard = "safari_extension_card",
        e.ProfileCard = "profile_card",
        e.LabsCard = "labs_card",
        e.AppleWatchCard = "apple_watch_card",
        e.CustomizeHomeCard = "customize_home_card",
        e.PinnedFieldsCard = "pinned_fields_card",
        e.AutofillCard = "autofill_card",
        e.Watchtower = "watchtower",
        e.WatchtowerPasswordStrengthBar = "password_strength_bar",
        e.WatchtowerCompromisedWebsites = "compromised_websites",
        e.WatchtowerVulnerablePasswords = "vulnerable_passwords",
        e.WatchtowerPasskeysAvailable = "passkeys_available",
        e.WatchtowerWrongAccount = "items_wrong_account",
        e.WatchtowerReusedPasswords = "reused_passwords",
        e.WatchtowerWeakPasswords = "weak_passwords",
        e.WatchtowerUnsecuredWebsites = "unsecured_websites",
        e.Watchtower2FA = "2FA",
        e.WatchtowerExpiringItems = "expiring_items",
        e.WatchtowerDuplicateItems = "duplicate_items",
        e.WatchtowerConflictingShortcuts = "conflicting_shortcuts",
        e.WatchtowerDeveloperCredentials = "dev_credentials_learn_more",
        e.WatchtowerRecoveryCodes = "setup_recovery_code",
        e.WatchtowerDataInvolvedInBreach = "data_involved_in_breach",
        e.WatchtowerIgnoredAlerts = "ignored_alerts",
        e.StartHere = "start_here",
        e.AddToBrowser = "add_to_browser",
        e.SetUpAutofill = "set_up_autofill",
        e.OpenTutorial = "open_tutorial",
        e.ImportNext = "import_next",
        e.DevicesNext = "devices_next",
        e.ImportAddFirstItems = "add_first_items",
        e.ImportMoreToAdd = "have_more_to_add",
        e.ImportAddItemsChooseMethod = "add_items_choose_method",
        e.MigrateDataToOnePassword = "migrate_data_to_1p",
        e.ImportDoNotAskAboutMigrationsAgain = "dont_ask_migrations_again",
        e.ImportCreateSingleItem = "create_one_new_item",
        e.Cancel = "cancel",
        e.DismissMigrateDataTo1P = "dismiss_migrate_data_to_1p",
        e.ItemImport = "item_import",
        e.Safari = "safari",
        e.Firefox = "firefox",
        e.Chrome = "chrome",
        e.Edge = "edge",
        e.Bitwarden = "bitwarden",
        e.Brave = "brave",
        e.DifferentBrowser = "different_browser",
        e.LastPass = "lastpass",
        e.ICloudKeychain = "icloud_keychain",
        e.Dashlane = "dashlane",
        e.Keepass = "keepass",
        e.KeepassXc = "keepass_xc",
        e.Roboform = "roboform",
        e.DeliniaSecretServer = "delinea_secret_server",
        e.OnePassword = "1password",
        e.DifferentPasswordManager = "different_password_manager",
        e.MemorizedPasswords = "memorized_passwords",
        e.PenAndPaper = "pen_and_paper",
        e.Spreadsheet = "spreadsheet",
        e.Csv = "csv",
        e.DoNotSeeMyOption = "i_dont_see_my_option",
        e.AddNewItemScreenGettingStarted = "getting_started",
        e.AddNewItemScreenDeveloperTools = "developer_tools",
        e.AddNewItemScreenMostPopularLogins = "popular_logins",
        e.AddNewItemScreenCryptoBasics = "crypto_basics",
        e.AddNewItemScreenTravelEssentials = "travel_essentials",
        e.PinExtension = "pin_extension",
        e.Done = "done",
        e.Skip = "skip",
        e.GetExtension = "get_extension",
        e.ClickOpenBrowser = "click_open_browser",
        e.GoToAutofillSettings = "go_to_autofill_settings",
        e.UseAutofill = "use_autofill",
        e.AutofillIsOn = "autofill_is_on",
        e.AutofillIsReady = "autofill_is_ready",
        e.AutofillStepOne = "autofill_step_1",
        e.AutofillStepTwo = "autofill_step_2",
        e.AutofillStepThree = "autofill_step_3",
        e.AutofillStepFour = "autofill_step_4",
        e.ClickPasswordField = "click_password_field",
        e.UseSuggestedPassword = "use_suggested_password",
        e.PracticeSaveAndFill = "practice_save_and_fill",
        e.SaveItem = "save_item",
        e.SavedInOnePassword = "saved_in_1password",
        e.SelectUsernameField = "select_username_field",
        e.FillWithOneClick = "fill_with_one_click",
        e.YouAreDone = "youre_done",
        e.ManageAccount = "manage_account",
        e.People = "people",
        e.InvitePeople = "invite_people",
        e.Invite = "invite",
        e.Accounts = "accounts",
        e.AccountPage = "account_page",
        e.FindInList = "find_in_list",
        e.ItemTemplate = "item_template",
        e.ItemSharing = "item_sharing",
        e.ExportData = "export_data",
        e.GitCommitSigning = "git_commit_signing",
        e.EditAutomatically = "edit_automatically",
        e.CopySnippet = "copy_snippet",
        e.Close = "close",
        e.SettingsDeveloper = "settings_developer",
        e.DeveloperExperienceOnboarding = "developer_experience_onboarding",
        e.DeveloperExperienceEnable = "developer_experience_enable",
        e.DeveloperExperienceDismiss = "developer_experience_dismiss",
        e.DeveloperExperienceSetting = "developer_experience_setting",
        e.DeveloperWatchtowerSetting = "developer_watchtower_setting",
        e.DeveloperExperienceHome = "developer_experience_home",
        e.DeveloperExperienceSsh = "developer_experience_ssh",
        e.DeveloperExperienceCli = "developer_experience_cli",
        e.DeveloperExperienceWatchtower = "developer_experience_watchtower",
        e.DeveloperExperienceActivity = "developer_experience_activity",
        e.SshBookmarksCreate = "ssh_bookmarks_create",
        e.SshBookmarksDelete = "ssh_bookmarks_delete",
        e.SshBookmarksConnect = "ssh_bookmarks_connect",
        e.SshBookmarksConfigSetting = "ssh_bookmarks_config_setting",
        e.CopySecretReference = "copy_secret_reference",
        e.MobileHome = "mobile_home",
        e.ChromeAutofillPromptScreen = "chrome_autofill_prompt_screen",
        e.GetStarted = "get_started",
        e.AutofillOnChrome = "autofill_on_chrome",
        e.DefaultTerminalSetting = "default_terminal_setting",
        e.SshAgentSetting = "ssh_agent_setting",
        e.AntiPeekModeToggleOn = "anti_peek_mode_toggle_on",
        e.AntiPeekModeToggleOff = "anti_peek_mode_toggle_off",
        e.AntiPeekModeShareBlocked = "anti_peek_mode_share_blocked",
        e.MobileHomeScreeenCustomize = "mobile_home_screen_customize",
        e.NearbyOnboardingSetLocation = "nearby_onboarding_set_location"
    }
    )(pc || (a.ComponentName = pc = {}));
    var mc;
    (function(e) {
        e.Enabled = "enabled",
        e.Disabled = "disabled"
    }
    )(mc || (a.ButtonState = mc = {}));
    var gc;
    (function(e) {
        e.Default = "default",
        e.Destructive = "destructive",
        e.DestructiveAlt = "destructiveAlt",
        e.Primary = "primary",
        e.PrimaryAlt = "primaryAlt",
        e.PrimaryWhite = "primaryWhite",
        e.Transparent = "transparent",
        e.TransparentBlue = "transparentBlue"
    }
    )(gc || (a.ButtonStyle = gc = {}));
    var hc;
    (function(e) {
        e.Subtle = "subtle",
        e.Warning = "warning",
        e.Info = "info",
        e.SolidBlue = "solidBlue",
        e.SolidPurple = "solidPurple",
        e.SolidGreen = "solidGreen",
        e.SolidRed = "solidRed"
    }
    )(hc || (a.CalloutBannerVariant = hc = {}));
    var vc;
    (function(e) {
        e.Individual = "I",
        e.Family = "F",
        e.Team = "B",
        e.Unsupported = "Unsupported"
    }
    )(vc || (a.AccountType = vc = {}));
    var yc;
    (function(e) {
        e.Registered = "R",
        e.Active = "A",
        e.Suspended = "S",
        e.Deleted = "D",
        e.Purging = "X",
        e.Purged = "Z",
        e.Unsupported = "Unsupported"
    }
    )(yc || (a.AccountState = yc = {}));
    var wc;
    (function(e) {
        e.Active = "A",
        e.Pending = "P",
        e.CancelAtEnd = "C",
        e.Frozen = "F",
        e.Lapsed = "L",
        e.Trialing = "T",
        e.Unsupported = "Unsupported"
    }
    )(wc || (a.BillingStatus = wc = {}));
    var bc;
    (function(e) {
        e.Personal = "P",
        e.Everyone = "E",
        e.Transfer = "T",
        e.UserCreated = "U",
        e.System = "S",
        e.GeneratedPasswords = "G",
        e.ManagedApplications = "M",
        e.Unsupported = "Unsupported"
    }
    )(bc || (a.VaultType = bc = {}));
    var Sc;
    (function(e) {
        e.PendingActivation = "P",
        e.Active = "A",
        e.Suspended = "S",
        e.Deleted = "D",
        e.MustMigrateAuth = "M",
        e.RecoveryStarted = "1",
        e.RecoveryAccepted = "2",
        e.Registered = "R",
        e.EmailVerifiedIncomplete = "V",
        e.ProvisionPending = "T",
        e.ProvisionStarted = "3",
        e.ProvisionAccepted = "4",
        e.ProvisionSuspended = "5",
        e.Purging = "X",
        e.Purged = "Z",
        e.Unsupported = "Unsupported"
    }
    )(Sc || (a.UserState = Sc = {}));
    var Pc;
    (function(e) {
        e.Primary = "primary",
        e.PrimaryOutline = "primaryOutline",
        e.DangerOutline = "dangerOutline",
        e.Grey = "grey",
        e.Invisible = "invisible"
    }
    )(Pc || (a.SignInButtonStyle = Pc = {}));
    var Ec;
    (function(e) {
        e.GuidedSignInExperience = "guidedSignInExperience"
    }
    )(Ec || (a.AccountListSignInAction = Ec = {}));
    var xc;
    (function(e) {
        e.Active = "active",
        e.Frozen = "frozen",
        e.Guest = "guest",
        e.Locked = "locked"
    }
    )(xc || (a.AccountStatus = xc = {}));
    var Ac;
    (function(e) {
        e.DownloadExtension = "download-extension",
        e.SetUpAutofill = "set-up-autofill",
        e.MigrateData = "migrate-data",
        e.Practice = "practice",
        e.AccessPasswords = "access-passwords",
        e.InviteFamilyMembers = "invite-family-members"
    }
    )(Ac || (a.ActivationHubTaskName = Ac = {}));
    var Tc;
    (function(e) {
        e.PhoneOrTablet = "phoneOrTablet",
        e.Computer = "computer"
    }
    )(Tc || (a.ActivationHubDeviceCategory = Tc = {}));
    var kc;
    (function(e) {
        e.AddDesktopApp = "addDesktopApp",
        e.AddMobileApp = "addMobileApp",
        e.AddExtension = "addExtension"
    }
    )(kc || (a.ActivationHubDeviceTaskType = kc = {}));
    var Cc;
    (function(e) {
        e.SshKeyUsage = "SshKeyUsage",
        e.CliAccountAccess = "CliAccountAccess"
    }
    )(Cc || (a.ActivityLogEntryType = Cc = {}));
    var Ic;
    (function(e) {
        e.Street = "Street",
        e.City = "City",
        e.Country = "Country",
        e.Zip = "Zip",
        e.State = "State"
    }
    )(Ic || (a.AddressSection = Ic = {}));
    var Lc;
    (function(e) {
        e.Us = "us",
        e.Browser = "browser"
    }
    )(Lc || (a.AutofilledBy = Lc = {}));
    var Oc;
    (function(e) {
        e.Unknown = "unknown",
        e.Button = "button",
        e.Checkbox = "checkbox",
        e.Color = "color",
        e.Date = "date",
        e.DatetimeLocal = "datetime-local",
        e.Email = "email",
        e.File = "file",
        e.Hidden = "hidden",
        e.Image = "image",
        e.Month = "month",
        e.Number = "number",
        e.Password = "password",
        e.Radio = "radio",
        e.Range = "range",
        e.Reset = "reset",
        e.Search = "search",
        e.Submit = "submit",
        e.Tel = "tel",
        e.Text = "text",
        e.Time = "time",
        e.Url = "url",
        e.Week = "week",
        e.SelectOne = "select-one",
        e.SelectMultiple = "select-multiple",
        e.Textarea = "textarea"
    }
    )(Oc || (a.ElementType = Oc = {}));
    var Mc;
    (function(e) {
        e.ActiveFieldOnly = "activeFieldOnly",
        e.AllFields = "allFields",
        e.UserEdited = "userEdited"
    }
    )(Mc || (a.ResolveMode = Mc = {}));
    var Rc;
    (function(e) {
        e.Brex = "Brex",
        e.Privacy = "Privacy"
    }
    )(Rc || (a.SuggestedIntegration = Rc = {}));
    var Nc;
    (function(e) {
        e.None = "none",
        e.Login = "login",
        e.Registration = "registration",
        e.ChangePassword = "change-password",
        e.OneTimeCode = "one-time-code",
        e.ChangeEmail = "change-email",
        e.SshKey = "ssh-key",
        e.Payment = "payment"
    }
    )(Nc || (a.FormDesignation = Nc = {}));
    var Uc;
    (function(e) {
        e.Home = "home",
        e.Work = "work",
        e.Mobile = "mobile",
        e.Fax = "fax",
        e.Pager = "pager"
    }
    )(Uc || (a.ContactType = Uc = {}));
    var Dc;
    (function(e) {
        e.SystemPrompt = "systemPrompt",
        e.ItemList = "itemList",
        e.SaveAndFill = "saveAndFill"
    }
    )(Dc || (a.AutoFillMethod = Dc = {}));
    var Fc;
    (function(e) {
        e.SshAgent = "SshAgent",
        e.Activity = "Activity"
    }
    )(Fc || (a.BookmarkRequestSource = Fc = {}));
    var _c;
    (function(e) {
        e.Include = "include",
        e.Exclude = "exclude"
    }
    )(_c || (a.ApiFilterMethod = _c = {}));
    var Bc;
    (function(e) {
        e.Online = "Online",
        e.Offline = "Offline",
        e.Unknown = "Unknown"
    }
    )(Bc || (a.AccountOfflineStatus = Bc = {}));
    var Hc;
    (function(e) {
        e.Ascending = "ascending",
        e.Descending = "descending"
    }
    )(Hc || (a.ApiSortOrder = Hc = {}));
    var qc;
    (function(e) {
        e.Name = "name",
        e.LockState = "lockState",
        e.SignedIn = "signedIn"
    }
    )(qc || (a.ApiGetAccountsSortKey = qc = {}));
    var zc;
    (function(e) {
        e.Active = "A",
        e.Deleted = "D",
        e.Unsupported = "Unsupported"
    }
    )(zc || (a.GroupState = zc = {}));
    var Wc;
    (function(e) {
        e.Owners = "O",
        e.Administrators = "A",
        e.Recovery = "R",
        e.ExternalAccountManagers = "E",
        e.TeamMembers = "M",
        e.UserDefined = "U",
        e.Unsupported = "Unsupported"
    }
    )(Wc || (a.GroupType = Wc = {}));
    var jc;
    (function(e) {
        e.CopyItemJson = "copyItemJson"
    }
    )(jc || (a.GetItemSideEffect = jc = {}));
    var Vc;
    (function(e) {
        e.Regular = "R",
        e.Service = "S",
        e.Guest = "G",
        e.Unsupported = "Unsupported"
    }
    )(Vc || (a.UserType = Vc = {}));
    var Gc;
    (function(e) {
        e.Name = "name",
        e.Email = "email"
    }
    )(Gc || (a.ApiGetUsersSortKey = Gc = {}));
    var Kc;
    (function(e) {
        e.CacheFirst = "cacheFirst",
        e.NetworkOnly = "networkOnly"
    }
    )(Kc || (a.ApiCacheBehavior = Kc = {}));
    var $c;
    (function(e) {
        e.EmailChanged = "emailChanged",
        e.PasswordOrSecretKeyChanged = "passwordOrSecretKeyChanged"
    }
    )($c || (a.ApiReAuthRequestReason = $c = {}));
    var Yc;
    (function(e) {
        e.Add = "add",
        e.Remove = "remove"
    }
    )(Yc || (a.VaultPermissionUpdateType = Yc = {}));
    var Xc;
    (function(e) {
        e.Locked = "locked",
        e.Unlocked = "unlocked"
    }
    )(Xc || (a.AppLockState = Xc = {}));
    var Qc;
    (function(e) {
        e.Day = "day",
        e.Week = "week",
        e.Month = "month",
        e.Year = "year"
    }
    )(Qc || (a.AppStoreProductSubscriptionPeriodUnit = Qc = {}));
    var Jc;
    (function(e) {
        e.PayAsYouGo = "payAsYouGo",
        e.PayUpFront = "payUpFront",
        e.FreeTrial = "freeTrial"
    }
    )(Jc || (a.AppStoreProductIntroductoryPaymentMode = Jc = {}));
    var Zc;
    (function(e) {
        e.Individual = "individual",
        e.Family = "family",
        e.TeamStarterPack = "teamStarterPack"
    }
    )(Zc || (a.AppStoreProductAccountType = Zc = {}));
    var ed;
    (function(e) {
        e.Password = "password",
        e.OneTimePassword = "oneTimePassword"
    }
    )(ed || (a.FillType = ed = {}));
    var td;
    (function(e) {
        e.Png = "png",
        e.Svg = "svg"
    }
    )(td || (a.QrCodeFormat = td = {}));
    var nd;
    (function(e) {
        e.DateCreated = "dateCreated",
        e.DateModified = "dateModified",
        e.Title = "title",
        e.RecentlyUsed = "recentlyUsed",
        e.FrequentlyUsed = "frequentlyUsed",
        e.PasswordStrength = "passwordStrength",
        e.MostRelevant = "mostRelevant"
    }
    )(nd || (a.SortKey = nd = {}));
    var rd;
    (function(e) {
        e.Ascending = "ascending",
        e.Descending = "descending"
    }
    )(rd || (a.SortOrder = rd = {}));
    var od;
    (function(e) {
        e.Active = "Active",
        e.Archived = "Archived",
        e.Deleted = "Deleted"
    }
    )(od || (a.ItemState = od = {}));
    var id;
    (function(e) {
        e.FrozenAccount = "frozenAccount",
        e.SsoMigration = "ssoMigration",
        e.RecentlyDeleted = "recentlyDeleted"
    }
    )(id || (a.ItemDetailBannerType = id = {}));
    var ad;
    (function(e) {
        e.Dismiss = "dismiss",
        e.Cancel = "cancel"
    }
    )(ad || (a.DismissAction = ad = {}));
    var sd;
    (function(e) {
        e.Default = "Default",
        e.Host = "Host",
        e.Never = "Never"
    }
    )(sd || (a.ItemUrlMode = sd = {}));
    var ud;
    (function(e) {
        e.Info = "info",
        e.Warn = "warn",
        e.Error = "error",
        e.Exception = "exception"
    }
    )(ud || (a.B5xOpiLogLevel = ud = {}));
    var cd;
    (function(e) {
        e.None = "none",
        e.Single = "single",
        e.Double = "double"
    }
    )(cd || (a.EditItemSpacing = cd = {}));
    var dd;
    (function(e) {
        e.Title = "title",
        e.Primary = "primary",
        e.Secondary = "secondary",
        e.Tags = "tags",
        e.CallToAction = "callToAction",
        e.ItemLocation = "itemLocation"
    }
    )(dd || (a.EditItemSectionKind = dd = {}));
    var ld;
    (function(e) {
        e.RetainOriginal = "RetainOriginal",
        e.TrashOriginal = "TrashOriginal"
    }
    )(ld || (a.CopyOption = ld = {}));
    var fd;
    (function(e) {
        e.BiometricsOnly = "BiometricsOnly",
        e.BiometricsOrWatch = "BiometricsOrWatch",
        e.WatchOnly = "WatchOnly",
        e.NoneAvailable = "NoneAvailable"
    }
    )(fd || (a.BiometricPolicy = fd = {}));
    var pd;
    (function(e) {
        e.Unknown = "Unknown",
        e.NoneAvailable = "NoneAvailable",
        e.TouchId = "TouchId",
        e.FaceId = "FaceId"
    }
    )(pd || (a.BiometryMethod = pd = {}));
    var md;
    (function(e) {
        e.Available = "Available",
        e.NotAvailable = "NotAvailable",
        e.SensorUnavailable = "SensorUnavailable",
        e.NotEnrolled = "NotEnrolled",
        e.Lockout = "Lockout",
        e.NotInteractive = "NotInteractive",
        e.WatchNotAvailable = "WatchNotAvailable",
        e.EnrollmentChanged = "EnrollmentChanged",
        e.Disconnected = "Disconnected",
        e.NotPaired = "NotPaired",
        e.Unknown = "Unknown"
    }
    )(md || (a.BiometryAvailability = md = {}));
    var gd;
    (function(e) {
        e.Active = "ACTIVE",
        e.Shipped = "SHIPPED",
        e.Expired = "EXPIRED",
        e.Locked = "LOCKED",
        e.Terminated = "TERMINATED"
    }
    )(gd || (a.BrexCardStatus = gd = {}));
    var hd;
    (function(e) {
        e.Virtual = "VIRTUAL",
        e.Physical = "PHYSICAL"
    }
    )(hd || (a.BrexCardType = hd = {}));
    var vd;
    (function(e) {
        e.Card = "CARD",
        e.User = "USER"
    }
    )(vd || (a.BrexLimitType = vd = {}));
    var yd;
    (function(e) {
        e.Usd = "USD"
    }
    )(yd || (a.BrexCurrency = yd = {}));
    var wd;
    (function(e) {
        e.Monthly = "MONTHLY",
        e.Quarterly = "QUARTERLY",
        e.Yearly = "YEARLY",
        e.OneTime = "ONE_TIME"
    }
    )(wd || (a.BrexLimitDuration = wd = {}));
    var bd;
    (function(e) {
        e.Production = "Production",
        e.Staging = "Staging"
    }
    )(bd || (a.BrexEnvironment = bd = {}));
    var Sd;
    (function(e) {
        e.Invited = "INVITED",
        e.Active = "ACTIVE",
        e.Closed = "CLOSED",
        e.Disabled = "DISABLED",
        e.Deleted = "DELETED",
        e.PendingActivation = "PENDING_ACTIVATION"
    }
    )(Sd || (a.BrexUserStatus = Sd = {}));
    var Pd;
    (function(e) {
        e.Granted = "GRANTED",
        e.Denied = "DENIED",
        e.Unknown = "UNKNOWN"
    }
    )(Pd || (a.BrexUserPermissionStatus = Pd = {}));
    var Ed;
    (function(e) {
        e.SignOut = "signOut",
        e.Lock = "lock"
    }
    )(Ed || (a.CancelSignInBehavior = Ed = {}));
    var xd;
    (function(e) {
        e.Set = "Set",
        e.Clear = "Clear",
        e.Mixed = "Mixed"
    }
    )(xd || (a.Tristate = xd = {}));
    var Ad;
    (function(e) {
        e.Dark = "dark",
        e.Light = "light",
        e.System = "system"
    }
    )(Ad || (a.ThemeMode = Ad = {}));
    var Td;
    (function(e) {
        e.AndroidBiometricUnlock = "AndroidBiometricUnlock",
        e.AndroidDeviceUnlock = "AndroidDeviceUnlock",
        e.NoneAvailable = "NoneAvailable"
    }
    )(Td || (a.AndroidAuthMethod = Td = {}));
    var kd;
    (function(e) {
        e.Option = "option",
        e.CtrlAlt = "ctrlAlt",
        e.None = "none"
    }
    )(kd || (a.HoldToRevealMode = kd = {}));
    var Cd;
    (function(e) {
        e.MainWindow = "mainWindow",
        e.QuickAccess = "quickAccess",
        e.Menu = "menu"
    }
    )(Cd || (a.TrayAction = Cd = {}));
    var Id;
    (function(e) {
        e.Autofill = "autofill",
        e.Download = "download",
        e.Go = "go",
        e.OpenURL = "openURL",
        e.Move = "move",
        e.Copy = "copy",
        e.Archive = "archive",
        e.Restore = "restore",
        e.Export = "export",
        e.Tag = "tag",
        e.Share = "share",
        e.CreatePrivacyCard = "createPrivacyCard",
        e.CreateBrexVendorCard = "createBrexVendorCard"
    }
    )(Id || (a.ItemAction = Id = {}));
    var Ld;
    (function(e) {
        e.Transparent = "transparent",
        e.Primary = "primary"
    }
    )(Ld || (a.CreateButtonStyle = Ld = {}));
    var Od;
    (function(e) {
        e.MerchantLocked = "MERCHANT_LOCKED",
        e.SingleUse = "SINGLE_USE"
    }
    )(Od || (a.PrivacyCardType = Od = {}));
    var Md;
    (function(e) {
        e.Transaction = "TRANSACTION",
        e.Monthly = "MONTHLY",
        e.Annually = "ANNUALLY",
        e.Forever = "FOREVER"
    }
    )(Md || (a.PrivacyCardSpendLimitDuration = Md = {}));
    var Rd;
    (function(e) {
        e.RevealSecretKey = "revealSecretKey",
        e.ConcealSecretKey = "concealSecretKey",
        e.CopySignInAddress = "copySignInAddress",
        e.CopyEmail = "copyEmail",
        e.CopySecretKey = "copySecretKey",
        e.CopyLink = "copyLink",
        e.CopySsoProvider = "copySsoProvider",
        e.LargeTypeSignInAddress = "largeTypeSignInAddress",
        e.LargeTypeEmail = "largeTypeEmail",
        e.LargeTypeSecretKey = "largeTypeSecretKey",
        e.LargeTypeSsoProvider = "largeTypeSsoProvider",
        e.ChangeEmail = "changeEmail",
        e.ChangeSecretKey = "changeSecretKey"
    }
    )(Rd || (a.SignInFieldAction = Rd = {}));
    var Nd;
    (function(e) {
        e.SetUpAnotherDevice = "setUpAnotherDevice",
        e.ManageAccount = "manageAccount",
        e.CreateVault = "createVault"
    }
    )(Nd || (a.SignInFieldViewContext = Nd = {}));
    var Ud;
    (function(e) {
        e.Packed = "packed",
        e.Tpm = "tpm",
        e.AndroidKey = "android-key",
        e.AndroidSafetynet = "android-safetynet",
        e.FidoU2f = "fido-u2f",
        e.Apple = "apple",
        e.None = "none"
    }
    )(Ud || (a.AttestationStatementFormatIdentifiers = Ud = {}));
    var Dd;
    (function(e) {
        e.Dashlane = "dashlane"
    }
    )(Dd || (a.CredentialExchangeProvider = Dd = {}));
    var Fd;
    (function(e) {
        e.Bitwarden = "bitwarden",
        e.Safari = "safari",
        e.ICloud = "iCloud",
        e.OnePux = "onePux",
        e.Chrome = "chrome"
    }
    )(Fd || (a.FileImportType = Fd = {}));
    var _d;
    (function(e) {
        e.AttentionSevere = "attentionSevere",
        e.Attention = "attention",
        e.Recommendation = "recommendation"
    }
    )(_d || (a.CredentialResultStatus = _d = {}));
    var Bd;
    (function(e) {
        e.AccountFamily = "accountFamily",
        e.AccountIndividual = "accountIndividual",
        e.AccountTeam = "accountTeam",
        e.AllCategories = "allCategories",
        e.AllItems = "allItems",
        e.ApiCredentials = "apiCredentials",
        e.Archive = "archive",
        e.AutoFill1Password = "autoFill1Password",
        e.AutoFillKey = "autoFillKey",
        e.AutoFillKeyboard = "autoFillKeyboard",
        e.AutoFillSettings = "autoFillSettings",
        e.AutoFillToggle = "autoFillToggle",
        e.BankAccount = "bankAccount",
        e.BrexCorporate = "brexCorporate",
        e.BrexVault = "brexVault",
        e.BrexVendor = "brexVendor",
        e.CreditCard = "creditCard",
        e.CreditCardAmex = "creditCardAmex",
        e.CreditCardDiscover = "creditCardDiscover",
        e.CreditCardMastercard = "creditCardMastercard",
        e.CreditCardVisa = "creditCardVisa",
        e.CryptoWallet = "cryptoWallet",
        e.Database = "database",
        e.Developer = "developer",
        e.DeveloperBiometrics = "developerBiometrics",
        e.DeveloperCli = "developerCli",
        e.DeveloperSsh = "developerSsh",
        e.DeveloperWatchtower = "developerWatchtower",
        e.DeviceListAndroidPhone = "deviceListAndroidPhone",
        e.DeviceListAndroidTablet = "deviceListAndroidTablet",
        e.DeviceListBrave = "deviceListBrave",
        e.DeviceListChrome = "deviceListChrome",
        e.DeviceListCLI = "deviceListCLI",
        e.DeviceListEdge = "deviceListEdge",
        e.DeviceListFirefox = "deviceListFirefox",
        e.DeviceListGeneric = "deviceListGeneric",
        e.DeviceListIMac = "deviceListIMac",
        e.DeviceListIPad = "deviceListIPad",
        e.DeviceListIPhone = "deviceListIPhone",
        e.DeviceListMacbookPro = "deviceListMacbookPro",
        e.DeviceListOpera = "deviceListOpera",
        e.DeviceListPC = "deviceListPC",
        e.DeviceListPCLaptop = "deviceListPCLaptop",
        e.DeviceListBraveExtension = "deviceListBraveExtension",
        e.DeviceListChromeExtension = "deviceListChromeExtension",
        e.DeviceListOperaExtension = "deviceListOperaExtension",
        e.DeviceListFirefoxExtension = "deviceListFirefoxExtension",
        e.DeviceListEdgeExtension = "deviceListEdgeExtension",
        e.DeviceListSafariExtension = "deviceListSafariExtension",
        e.DeviceListSafari = "deviceListSafari",
        e.Document = "document",
        e.DocumentImage = "documentImage",
        e.DocumentSpreadsheet = "documentSpreadsheet",
        e.DocumentText = "documentText",
        e.DocumentZip = "documentZip",
        e.DriverLicense = "driverLicense",
        e.Email = "email",
        e.EmptyAllItems = "emptyAllItems",
        e.EmptyArchive = "emptyArchive",
        e.EmptyFavorites = "emptyFavorites",
        e.EmptyNoVaults = "emptyNoVaults",
        e.EmptyRecentlyDeleted = "emptyRecentlyDeleted",
        e.EmptyWatchtowerCompromisedWebsites = "emptyWatchtowerCompromisedWebsites",
        e.EmptyWatchtowerDashboard = "emptyWatchtowerDashboard",
        e.EmptyWatchtowerExpiring = "emptyWatchtowerExpiring",
        e.EmptyWatchtowerInactiveMfa = "emptyWatchtowerInactiveMfa",
        e.EmptyWatchtowerInWrongAccount = "emptyWatchtowerInWrongAccount",
        e.EmptyWatchtowerPasskeyAvailable = "emptyWatchtowerPasskeyAvailable",
        e.EmptyWatchtowerPasswordStrength = "emptyWatchtowerPasswordStrength",
        e.EmptyWatchtowerDuplicateItem = "emptyWatchtowerDuplicateItem",
        e.EmptyWatchtowerReusedPasswords = "emptyWatchtowerReusedPasswords",
        e.EmptyWatchtowerUnsecuredWebsites = "emptyWatchtowerUnsecuredWebsites",
        e.EmptyWatchtowerVulnerablePasswords = "emptyWatchtowerVulnerablePasswords",
        e.EmptyWatchtowerWeakPasswords = "emptyWatchtowerWeakPasswords",
        e.Everything = "everything",
        e.Fastmail = "fastmail",
        e.Favorites = "favorites",
        e.Git = "git",
        e.HighlightsBrowserExtension = "highlightsBrowserExtension",
        e.HighlightsDevices = "highlightsDevices",
        e.HighlightsFaceID = "highlightsFaceID",
        e.HighlightsFamily = "highlightsFamily",
        e.HighlightsHandUp = "highlightsHandUp",
        e.HighlightsItemCatalog = "highlightsItemCatalog",
        e.HighlightsItemSharing = "highlightsItemSharing",
        e.HighlightsKey = "highlightsKey",
        e.HighlightsManaging = "highlightsManaging",
        e.HighlightsPasswordlessAuthentication = "highlightsPasswordlessAuthentication",
        e.HighlightsPerformance = "highlightsPerformance",
        e.HighlightsPlatforms = "highlightsPlatforms",
        e.HighlightsQuickAccess = "highlightsQuickAccess",
        e.HighlightsRedesign = "highlightsRedesign",
        e.HighlightsSecurity = "highlightsSecurity",
        e.HighlightsStrongPasswords = "highlightsStrongPasswords",
        e.HighlightsSupport = "highlightsSupport",
        e.HighlightsTeam = "highlightsTeam",
        e.HighlightsWatchtower = "highlightsWatchtower",
        e.HighlightsWebsite = "highlightsWebsite",
        e.HomeAllItems = "homeAllItems",
        e.HomeArchived = "homeArchived",
        e.HomeCategories = "homeCategories",
        e.HomeFavorites = "homeFavorites",
        e.HomeFrequentlyUsed = "homeFrequentlyUsed",
        e.HomeNearby = "homeNearby",
        e.HomePinned = "homePinned",
        e.HomeRecentlyAdded = "homeRecentlyAdded",
        e.HomeRecentlyCreated = "homeRecentlyCreated",
        e.HomeRecentlyDeleted = "homeRecentlyDeleted",
        e.HomeRecentlyModified = "homeRecentlyModified",
        e.HomeRecentlyUsed = "homeRecentlyUsed",
        e.HomeScreenBillboardAppleWatchTransparent = "homeScreenBillboardAppleWatchTransparent",
        e.HomeScreenBillboardCustomizeHomeTransparent = "homeScreenBillboardCustomizeHomeTransparent",
        e.HomeScreenBillboardIllustrationAppleWatch = "homeScreenBillboardIllustrationAppleWatch",
        e.HomeScreenBillboardIllustrationAutoFill = "homeScreenBillboardIllustrationAutoFill",
        e.HomeScreenBillboardIllustrationCustomizeHome = "homeScreenBillboardIllustrationCustomizeHome",
        e.HomeScreenBillboardIllustrationLabs = "homeScreenBillboardIllustrationLabs",
        e.HomeScreenBillboardIllustrationPinnedFields = "homeScreenBillboardIllustrationPinnedFields",
        e.HomeScreenBillboardIllustrationSafariExtension = "homeScreenBillboardIllustrationSafariExtension",
        e.HomeScreenBillboardLabsTransparent = "homeScreenBillboardLabsTransparent",
        e.HomeScreenBillboardPinnedFieldsTransparent = "homeScreenBillboardPinnedFieldsTransparent",
        e.HomeScreenBillboardProfileTransparent = "homeScreenBillboardProfileTransparent",
        e.HomeScreenBillboardSafariTransparent = "homeScreenBillboardSafariTransparent",
        e.HomeScreenBillboardTipsTransparent = "homeScreenBillboardTipsTransparent",
        e.HomeScreenBillboardWarningTransparent = "homeScreenBillboardWarningTransparent",
        e.HomeScreenInterstitialAppleWatch = "homeScreenInterstitialAppleWatch",
        e.HomeScreenInterstitialEmptyHome = "homeScreenInterstitialEmptyHome",
        e.HomeScreenInterstitialPinnedFields = "homeScreenInterstitialPinnedFields",
        e.HomeTags = "homeTags",
        e.HomeTips = "homeTips",
        e.HomeVaults = "homeVaults",
        e.HomeWatchtower = "homeWatchtower",
        e.Identity = "identity",
        e.ImportGuideBitwarden = "importGuideBitwarden",
        e.ImportGuideCsv = "importGuideCsv",
        e.ImportGuideDashlane = "importGuideDashlane",
        e.ImportGuideDelinea = "importGuideDelinea",
        e.ImportGuideKeypass = "importGuideKeypass",
        e.ImportGuideKeypassXc = "importGuideKeypassXc",
        e.ImportGuideLastPass = "importGuideLastPass",
        e.ImportGuideMemorized = "importGuideMemorized",
        e.ImportGuideOnePassword = "importGuideOnePassword",
        e.ImportGuidePen = "importGuidePen",
        e.ImportGuideRoboForm = "importGuideRoboForm",
        e.ImportGuideSpreadsheet = "importGuideSpreadsheet",
        e.ItemSharing = "itemSharing",
        e.KeyEmpty = "keyEmpty",
        e.KeyError = "keyError",
        e.KeyFilled = "keyFilled",
        e.LabsHero = "labsHero",
        e.Login = "login",
        e.ManageAccountBusiness = "manageAccountBusiness",
        e.ManageAccountData = "manageAccountData",
        e.ManageAccountDevices = "manageAccountDevices",
        e.ManageAccountFamily = "manageAccountFamily",
        e.ManageAccountIndividual = "manageAccountIndividual",
        e.ManageAccountPeople = "manageAccountPeople",
        e.ManageAccountSubscription = "manageAccountSubscription",
        e.ManageAccountVaults = "manageAccountVaults",
        e.ManageAccountTeam = "manageAccountTeam",
        e.MedicalRecord = "medicalRecord",
        e.Membership = "membership",
        e.OperatingSystemAndroid = "operatingSystemAndroid",
        e.OperatingSystemIos = "operatingSystemIos",
        e.OperatingSystemLinux = "operatingSystemLinux",
        e.OperatingSystemMac = "operatingSystemMac",
        e.OperatingSystemOther = "operatingSystemOther",
        e.OperatingSystemWindows = "operatingSystemWindows",
        e.OutdoorLicense = "outdoorLicense",
        e.Passkey = "passkey",
        e.Passport = "passport",
        e.Password = "password",
        e.PinUnlockSettings = "pinUnlockSettings",
        e.PinUnlockWarning = "pinUnlockWarning",
        e.Placeholder = "placeholder",
        e.PrivacyCom = "privacyCom",
        e.Profile = "profile",
        e.RecentlyCreated = "recentlyCreated",
        e.RecentlyDeleted = "recentlyDeleted",
        e.Rewards = "rewards",
        e.Router = "router",
        e.Search = "search",
        e.SecureNote = "secureNote",
        e.Server = "server",
        e.SettingsAbout = "settingsAbout",
        e.SettingsAccounts = "settingsAccounts",
        e.SettingsAdvanced = "settingsAdvanced",
        e.SettingsAppearance = "settingsAppearance",
        e.SettingsAutoFill = "settingsAutoFill",
        e.SettingsBrowser = "settingsBrowser",
        e.SettingsCollections = "settingsCollections",
        e.SettingsDeveloper = "settingsDeveloper",
        e.SettingsGeneral = "settingsGeneral",
        e.SettingsHelp = "settingsHelp",
        e.SettingsLabs = "settingsLabs",
        e.SettingsLabsExperimentFeatureFlags = "settingsLabsExperimentFeatureFlags",
        e.SettingsLabsExperimentNearbyItems = "settingsLabsExperimentNearbyItems",
        e.SettingsLabsExperimentPrivacyMode = "settingsLabsExperimentPrivacyMode",
        e.SettingsNotifications = "settingsNotifications",
        e.SettingsPrivacy = "settingsPrivacy",
        e.SettingsReview = "settingsReview",
        e.SettingsSafariExtension = "settingsSafariExtension",
        e.SettingsSecurity = "settingsSecurity",
        e.SignIn1Password = "signIn1Password",
        e.SignInAndRecovery = "signInAndRecovery",
        e.SignInBannerIllustration = "signInBannerIllustration",
        e.SignInEmergencyKit = "signInEmergencyKit",
        e.SignInGoogle = "signInGoogle",
        e.SignInManual = "signInManual",
        e.SignInOkta = "signInOkta",
        e.SignInPasskey = "signInPasskey",
        e.SignInScanQR = "signInScanQR",
        e.SignInSSO = "signInSSO",
        e.Snippet = "snippet",
        e.SocialSecurityNumber = "socialSecurityNumber",
        e.SoftwareLicense = "softwareLicense",
        e.Ssh = "ssh",
        e.SsoDeviceIcon = "ssoDeviceIcon",
        e.SsoLoginAmazon = "ssoLoginAmazon",
        e.SsoLoginAmazonAttachment = "ssoLoginAmazonAttachment",
        e.SsoLoginApple = "ssoLoginApple",
        e.SsoLoginAppleAttachment = "ssoLoginAppleAttachment",
        e.SsoLoginFacebook = "ssoLoginFacebook",
        e.SsoLoginFacebookAttachment = "ssoLoginFacebookAttachment",
        e.SsoLoginGitHub = "ssoLoginGitHub",
        e.SsoLoginGitHubAttachment = "ssoLoginGitHubAttachment",
        e.SsoLoginGoogle = "ssoLoginGoogle",
        e.SsoLoginGoogleAttachment = "ssoLoginGoogleAttachment",
        e.SsoLoginMicrosoft = "ssoLoginMicrosoft",
        e.SsoLoginMicrosoftAttachment = "ssoLoginMicrosoftAttachment",
        e.SsoLoginTwitter = "ssoLoginTwitter",
        e.SsoLoginTwitterAttachment = "ssoLoginTwitterAttachment",
        e.SsoLoginOkta = "ssoLoginOkta",
        e.SsoLoginOktaAttachment = "ssoLoginOktaAttachment",
        e.SsoLoginSlack = "ssoLoginSlack",
        e.SsoLoginSlackAttachment = "ssoLoginSlackAttachment",
        e.SsoLoginDiscord = "ssoLoginDiscord",
        e.SsoLoginDiscordAttachment = "ssoLoginDiscordAttachment",
        e.Suggestions = "suggestions",
        e.Tag = "tag",
        e.Tombstone = "tombstone",
        e.TutorialGlobe = "tutorialGlobe",
        e.UnknownCategory = "unknownCategory",
        e.Vault = "vault",
        e.VaultPlaceholder = "vaultPlaceholder",
        e.VaultGuarded = "vaultGuarded",
        e.Watchtower = "watchtower"
    }
    )(Bd || (a.DefaultIconFile = Bd = {}));
    var Hd;
    (function(e) {
        e.ChooseFile = "chooseFile",
        e.ChoosePhoto = "choosePhoto",
        e.CapturePhoto = "capturePhoto",
        e.ScanDocument = "scanDocument"
    }
    )(Hd || (a.AddFileSource = Hd = {}));
    var qd;
    (function(e) {
        e.DayMonthYear = "dayMonthYear",
        e.MonthYear = "monthYear"
    }
    )(qd || (a.EditItemDateClassification = qd = {}));
    var zd;
    (function(e) {
        e.WrongAccount = "wrongAccount",
        e.WrongAccountByPolicy = "wrongAccountByPolicy"
    }
    )(zd || (a.EditItemWarning = zd = {}));
    var Wd;
    (function(e) {
        e.ShareWithFamily = "ShareWithFamily",
        e.ShareWithTeam = "ShareWithTeam"
    }
    )(Wd || (a.EditItemCreateBannerType = Wd = {}));
    var jd;
    (function(e) {
        e.Enabled = "enabled",
        e.DisabledByUser = "disabledByUser",
        e.DisabledByAdmin = "disabledByAdmin",
        e.NoMapNoReason = "noMapNoReason"
    }
    )(jd || (a.ItemLocationMapState = jd = {}));
    var Vd;
    (function(e) {
        e.DefaultKeyboard = "DefaultKeyboard",
        e.NumberPad = "NumberPad",
        e.NamePhonePad = "NamePhonePad",
        e.NumbersAndPunctuation = "NumbersAndPunctuation",
        e.EmailAddress = "EmailAddress",
        e.Url = "Url"
    }
    )(Vd || (a.EditItemElementInputKeyboard = Vd = {}));
    var Gd;
    (function(e) {
        e.None = "None",
        e.Words = "Words",
        e.Sentences = "Sentences",
        e.AllCharacters = "AllCharacters"
    }
    )(Gd || (a.EditItemElementInputAutoCapitalization = Gd = {}));
    var Kd;
    (function(e) {
        e.ChooseFile = "chooseFile",
        e.ChoosePhoto = "choosePhoto",
        e.RemoveIcon = "removeIcon"
    }
    )(Kd || (a.EditItemIconMenuAction = Kd = {}));
    var $d;
    (function(e) {
        e.Text = "text",
        e.Url = "url",
        e.Email = "email",
        e.Address = "address",
        e.DayMonthYear = "dayMonthYear",
        e.MonthYear = "monthYear",
        e.OneTimePassword = "oneTimePassword",
        e.Password = "password",
        e.Phone = "phone",
        e.SecurityQuestion = "securityQuestion",
        e.File = "file",
        e.SshKey = "sshKey",
        e.SsoLogin = "ssoLogin"
    }
    )($d || (a.EditItemSaveValueAddFieldType = $d = {}));
    var Yd;
    (function(e) {
        e.Top = "Top",
        e.Middle = "Middle",
        e.Bottom = "Bottom",
        e.TopAndBottom = "TopAndBottom"
    }
    )(Yd || (a.ElementBorderStyle = Yd = {}));
    var Xd;
    (function(e) {
        e.Full = "full",
        e.Long = "long",
        e.Medium = "medium",
        e.Short = "short"
    }
    )(Xd || (a.DateTimeVariant = Xd = {}));
    var Qd;
    (function(e) {
        e.Single = "single",
        e.Double = "double"
    }
    )(Qd || (a.ViewItemSpacing = Qd = {}));
    var Jd;
    (function(e) {
        e.Edit = "edit",
        e.Autofill = "autofill",
        e.OpenAndFill = "openAndFill",
        e.OpenUrl = "openUrl"
    }
    )(Jd || (a.ItemDetailPrimaryAction = Jd = {}));
    var Zd;
    (function(e) {
        e.Normal = "Normal",
        e.Warning = "Warning"
    }
    )(Zd || (a.TotpIndicatorColor = Zd = {}));
    var el;
    (function(e) {
        e.BaseApp = "baseApp",
        e.AutoFillItemSelect = "autoFillItemSelect",
        e.AutoFillFieldSelect = "autoFillFieldSelect"
    }
    )(el || (a.RenderTarget = el = {}));
    var tl;
    (function(e) {
        e.Default = "default",
        e.Destructive = "destructive",
        e.Primary = "primary",
        e.Transparent = "transparent"
    }
    )(tl || (a.EmptyContentButtonStyle = tl = {}));
    var nl;
    (function(e) {
        e.Success = "success"
    }
    )(nl || (a.EssentialSetupIllustration = nl = {}));
    var rl;
    (function(e) {
        e.AutoFill = "autoFill",
        e.Biometrics = "biometrics",
        e.BiometricsFace = "biometricsFace",
        e.SystemTray = "systemTray",
        e.BrowserExtension = "browserExtension",
        e.Telemetry = "telemetry"
    }
    )(rl || (a.EssentialSetupFeatureIllustration = rl = {}));
    var ol;
    (function(e) {
        e.AutoFill = "AutoFill",
        e.Biometrics = "Biometrics",
        e.SystemTray = "SystemTray",
        e.MigrateDataFromOpSeven = "MigrateDataFromOpSeven",
        e.Telemetry = "Telemetry",
        e.ExtensionSettings = "ExtensionSettings"
    }
    )(ol || (a.EssentialSetupPageId = ol = {}));
    var il;
    (function(e) {
        e.Strong = "strong",
        e.Moderate = "moderate"
    }
    )(il || (a.EssentialSetupPageNavigationButtonEmphasis = il = {}));
    var al;
    (function(e) {
        e.Csv = "Csv",
        e.OnePif2 = "OnePif2",
        e.OnePux = "OnePux"
    }
    )(al || (a.Format = al = {}));
    var sl;
    (function(e) {
        e.Critical = "critical",
        e.Warning = "warning"
    }
    )(sl || (a.DisclosureSeverity = sl = {}));
    var ul;
    (function(e) {
        e.OpenSsh = "OpenSSH",
        e.Pkcs8 = "PKCS#8",
        e.Pkcs1 = "PKCS#1"
    }
    )(ul || (a.SshPrivateKeyExportFormat = ul = {}));
    var cl;
    (function(e) {
        e.Finished = "Finished",
        e.Running = "Running",
        e.Failed = "Failed"
    }
    )(cl || (a.Status = cl = {}));
    var dl;
    (function(e) {
        e.Enabled = "ENABLED",
        e.Pending = "PENDING"
    }
    )(dl || (a.FundingAccountApiState = dl = {}));
    var ll;
    (function(e) {
        e.Uploading = "Uploading",
        e.Available = "Available",
        e.Missing = "Missing"
    }
    )(ll || (a.FileStatus = ll = {}));
    var fl;
    (function(e) {
        e.Characters = "Characters",
        e.Words = "Words",
        e.Pin = "Pin",
        e.PasswordRules = "PasswordRules"
    }
    )(fl || (a.PasswordType = fl = {}));
    var pl;
    (function(e) {
        e.Digits = "Digits",
        e.DigitsAndSymbols = "DigitsAndSymbols",
        e.Spaces = "Spaces",
        e.Hyphens = "Hyphens",
        e.Underscores = "Underscores",
        e.Periods = "Periods",
        e.Commas = "Commas"
    }
    )(pl || (a.SeparatorType = pl = {}));
    var ml;
    (function(e) {
        e.FullWords = "FullWords",
        e.Syllables = "Syllables",
        e.ThreeLetters = "ThreeLetters"
    }
    )(ml || (a.WordListType = ml = {}));
    var gl;
    (function(e) {
        e.Enabled = "enabled",
        e.Disabled = "disabled",
        e.Deleted = "deleted"
    }
    )(gl || (a.AliasState = gl = {}));
    var hl;
    (function(e) {
        e.Chrome = "chrome",
        e.Firefox = "firefox",
        e.SafariMacos = "safari-macos",
        e.SafariIos = "safari-ios"
    }
    )(hl || (a.Browser = hl = {}));
    var vl;
    (function(e) {
        e.Brex = "Brex"
    }
    )(vl || (a.WebItemIntegrationInformation = vl = {}));
    var yl;
    (function(e) {
        e.Zero = "zero",
        e.One = "one"
    }
    )(yl || (a.HourIndexing = yl = {}));
    var wl;
    (function(e) {
        e.Twelve = "twelve",
        e.TwentyFour = "twentyFour"
    }
    )(wl || (a.HourCycle = wl = {}));
    var bl;
    (function(e) {
        e.Raw = "raw",
        e.Padded = "padded"
    }
    )(bl || (a.TimePadding = bl = {}));
    var Sl;
    (function(e) {
        e.Csv = "csv",
        e.Json = "json",
        e.OnePux = "onePux"
    }
    )(Sl || (a.FileExtensionTypes = Sl = {}));
    var Pl;
    (function(e) {
        e.Button = "Button",
        e.Link = "Link"
    }
    )(Pl || (a.InAppPurchaseButtonStyle = Pl = {}));
    var El;
    (function(e) {
        e.Green = "green",
        e.Grey = "grey",
        e.Red = "red",
        e.Purple = "purple"
    }
    )(El || (a.IndicatorPillColor = El = {}));
    var xl;
    (function(e) {
        e.Active = "active",
        e.Deleted = "deleted",
        e.Archived = "archived"
    }
    )(xl || (a.ItemDetailState = xl = {}));
    var Al;
    (function(e) {
        e.Large = "large",
        e.Medium = "medium"
    }
    )(Al || (a.ItemLocationMessageElementSize = Al = {}));
    var Tl;
    (function(e) {
        e.RSAOAEP = "RSA-OAEP",
        e.RSAOAEP256 = "RSA-OAEP-256",
        e.A256GCM = "A256GCM",
        e.ECDHES = "ECDH-ES",
        e.ES256 = "ES256"
    }
    )(Tl || (a.KeyAlgorithm = Tl = {}));
    var kl;
    (function(e) {
        e.RSA = "RSA",
        e.Oct = "oct",
        e.EC = "EC",
        e.OKP = "OKP"
    }
    )(kl || (a.KeyType = kl = {}));
    var Cl;
    (function(e) {
        e.Sign = "sign",
        e.Verify = "verify",
        e.Encrypt = "encrypt",
        e.Decrypt = "decrypt",
        e.WrapKey = "wrapKey",
        e.UnwrapKey = "unwrapKey",
        e.DeriveKey = "deriveKey",
        e.DeriveBits = "deriveBits"
    }
    )(Cl || (a.KeyOp = Cl = {}));
    var Il;
    (function(e) {
        e.WhenUnlocked = "WhenUnlocked",
        e.AfterFirstUnlock = "AfterFirstUnlock",
        e.WhenPasscodeSetThisDeviceOnly = "WhenPasscodeSetThisDeviceOnly",
        e.WhenUnlockedThisDeviceOnly = "WhenUnlockedThisDeviceOnly",
        e.AfterFirstUnlockThisDeviceOnly = "AfterFirstUnlockThisDeviceOnly"
    }
    )(Il || (a.Accessible = Il = {}));
    var Ll;
    (function(e) {
        e.Locked = "locked",
        e.Unlocked = "unlocked",
        e.FailedToUnlock = "failedToUnlock"
    }
    )(Ll || (a.LockScreenAccountPreviewMode = Ll = {}));
    var Ol;
    (function(e) {
        e.AccountOverview = "accountOverview",
        e.YourDetails = "yourDetails",
        e.People = "people",
        e.TrustedDevices = "trustedDevices",
        e.Telemetry = "telemetry",
        e.SetUpAnotherDevice = "setUpAnotherDevice",
        e.Subscription = "subscription",
        e.EmergencyKit = "emergencyKit",
        e.Vaults = "vaults",
        e.SignInAndRecovery = "signInAndRecovery"
    }
    )(Ol || (a.MaCategoryId = Ol = {}));
    var Ml;
    (function(e) {
        e.Text = "text",
        e.Numeric = "numeric",
        e.Password = "password"
    }
    )(Ml || (a.TextInputFieldType = Ml = {}));
    var Rl;
    (function(e) {
        e.GreyscaleWhite = "greyscaleWhite",
        e.GreyscaleBlack = "greyscaleBlack",
        e.ShadingHeavy = "shadingHeavy",
        e.ShadingExtraFaint = "shadingExtraFaint",
        e.ReadableGreen = "readableGreen",
        e.ReadablePurple = "readablePurple",
        e.ReadableBlue = "readableBlue",
        e.ReadableRed = "readableRed",
        e.TintGreen = "tintGreen",
        e.TintPurple = "tintPurple",
        e.TintBlue = "tintBlue",
        e.TintRed = "tintRed"
    }
    )(Rl || (a.ManageAccountColor = Rl = {}));
    var Nl;
    (function(e) {
        e.CategoryBackground = "categoryBackground",
        e.Invite = "invite"
    }
    )(Nl || (a.ManageAccountIllustration = Nl = {}));
    var Ul;
    (function(e) {
        e.TelemetryOptOut = "TelemetryOptOut"
    }
    )(Ul || (a.ManageAccountTelemetrySettingsOptionId = Ul = {}));
    var Dl;
    (function(e) {
        e.Address = "Address",
        e.Email = "Email",
        e.SecretKey = "SecretKey",
        e.Password = "Password"
    }
    )(Dl || (a.SignInTextInputId = Dl = {}));
    var Fl;
    (function(e) {
        e.Leftward = "leftward",
        e.Rightward = "rightward"
    }
    )(Fl || (a.CancelButtonStyle = Fl = {}));
    var _l;
    (function(e) {
        e.SignIn = "signIn",
        e.CheckAccount = "checkAccount"
    }
    )(_l || (a.ManualSignInSubmitAction = _l = {}));
    var Bl;
    (function(e) {
        e.Web = "web",
        e.Email = "email"
    }
    )(Bl || (a.MdLinkType = Bl = {}));
    var Hl;
    (function(e) {
        e.ToggleFullScreen = "toggleFullScreen",
        e.Services = "services",
        e.Hide = "hide",
        e.HideOthers = "hideOthers",
        e.Unhide = "unhide",
        e.ToggleDevTools = "toggleDevTools",
        e.Undo = "undo",
        e.Redo = "redo",
        e.Cut = "cut",
        e.Copy = "copy",
        e.SelectAll = "selectAll",
        e.Close = "close",
        e.Minimize = "minimize",
        e.Zoom = "zoom",
        e.Front = "front",
        e.Paste = "paste",
        e.Reload = "reload",
        e.StartSpeaking = "startSpeaking",
        e.StopSpeaking = "stopSpeaking",
        e.Help = "help",
        e.Window = "window",
        e.EditMenu = "editMenu"
    }
    )(Hl || (a.Roles = Hl = {}));
    var ql;
    (function(e) {
        e.None = "none",
        e.Info = "info",
        e.Error = "error",
        e.Question = "question",
        e.Warning = "warning"
    }
    )(ql || (a.MessageBoxType = ql = {}));
    var zl;
    (function(e) {
        e.Home = "home",
        e.Items = "items",
        e.Sidebar = "sidebar"
    }
    )(zl || (a.MobileHomeScreenType = zl = {}));
    var Wl;
    (function(e) {
        e.Vaults = "vaults",
        e.Favorites = "favorites",
        e.RecentlyCreated = "recentlyCreated",
        e.RecentlyModified = "recentlyModified",
        e.RecentlyUsed = "recentlyUsed",
        e.FrequentlyUsed = "frequentlyUsed",
        e.Tags = "tags",
        e.AllItems = "allItems",
        e.Archived = "archived",
        e.RecentlyDeleted = "recentlyDeleted",
        e.Categories = "categories",
        e.ItemFieldGroup = "itemFieldGroup",
        e.BillboardGroup = "billboardGroup",
        e.Profile = "profile",
        e.Nearby = "nearby",
        e.ActivationHub = "activationHub"
    }
    )(Wl || (a.MobileHomeScreenEditIdentifier = Wl = {}));
    var jl;
    (function(e) {
        e.NearbyItems = "nearbyItems"
    }
    )(jl || (a.MobileHomeScreenFeature = jl = {}));
    var Vl;
    (function(e) {
        e.Home = "Home",
        e.Items = "Items",
        e.Search = "Search",
        e.Watchtower = "Watchtower"
    }
    )(Vl || (a.MobileTab = Vl = {}));
    var Gl;
    (function(e) {
        e.Member = "member",
        e.Organizer = "organizer",
        e.Guest = "guest"
    }
    )(Gl || (a.InvitationRole = Gl = {}));
    var Kl;
    (function(e) {
        e.AuthorizedDriven = "authorizedDriven",
        e.UnauthorizedDriven = "unauthorizedDriven"
    }
    )(Kl || (a.MyceliumMode = Kl = {}));
    var $l;
    (function(e) {
        e.None = "none",
        e.InProgress = "inProgress"
    }
    )($l || (a.FillStatus = $l = {}));
    var Yl;
    (function(e) {
        e.Locked = "Locked",
        e.Unlocked = "Unlocked"
    }
    )(Yl || (a.LockState = Yl = {}));
    var Xl;
    (function(e) {
        e.General = "general",
        e.Appearance = "appearance",
        e.Security = "security",
        e.Privacy = "privacy",
        e.Browser = "browser",
        e.SafariExtension = "safariExtension",
        e.Notifications = "notifications",
        e.AutoFill = "autoFill",
        e.Advanced = "advanced",
        e.Help = "help",
        e.About1Password = "about1Password",
        e.Review = "review",
        e.Developers = "developers",
        e.ManageAccounts = "manageAccounts",
        e.ManageCollections = "manageCollections",
        e.Labs = "labs",
        e.TestUserPreferences = "testUserPreferences"
    }
    )(Xl || (a.SettingsCategoryId = Xl = {}));
    var Ql;
    (function(e) {
        e.Unlock = "unlock",
        e.AuthPrompt = "authPrompt"
    }
    )(Ql || (a.SignInResponseContext = Ql = {}));
    var Jl;
    (function(e) {
        e.InvalidRequest = "InvalidRequest",
        e.UnAuthorizedClient = "UnAuthorizedClient",
        e.AccessDenied = "AccessDenied",
        e.UnSupportedResponseType = "UnSupportedResponseType",
        e.InvalidScope = "InvalidScope",
        e.ServerError = "ServerError",
        e.TemporarilyUnavailable = "TemporarilyUnavailable",
        e.Unknown = "Unknown"
    }
    )(Jl || (a.OAuthRejectedError = Jl = {}));
    var Zl;
    (function(e) {
        e.InvalidRequest = "invalid_request",
        e.InvalidClient = "invalid_client",
        e.InvalidGrant = "invalid_grant",
        e.InvalidScope = "invalid_scope",
        e.UnauthorizedClient = "unauthorized_client",
        e.UnsupportedGrantType = "unsupported_grant_type",
        e.Unknown = "unknown"
    }
    )(Zl || (a.OauthErrorType = Zl = {}));
    var ef;
    (function(e) {
        e.SyncAll = "syncAll"
    }
    )(ef || (a.OfflineIndicatorAction = ef = {}));
    var tf;
    (function(e) {
        e.AccountSignout = "AccountSignout",
        e.Deletion = "Deletion",
        e.Deauthorization = "Deauthorization",
        e.SsoAccountSignout = "SsoAccountSignout"
    }
    )(tf || (a.OpAppAccountSignOutReason = tf = {}));
    var nf;
    (function(e) {
        e.Primary = "primary",
        e.ItemDetails = "itemDetails",
        e.Settings = "settings",
        e.QuickAccess = "quickAccess",
        e.AuthPrompt = "authPrompt",
        e.LargeType = "largeType",
        e.KeyboardShortcutsQX = "keyboardShortcutsQX",
        e.AutofillAccessibility = "autofillAccessibility",
        e.LargeQrCode = "largeQrCode",
        e.None = "none"
    }
    )(nf || (a.WindowType = nf = {}));
    var rf;
    (function(e) {
        e.Account = "account",
        e.LockedAccount = "lockedAccount",
        e.VaultCollection = "vaultCollection"
    }
    )(rf || (a.SbCollectionType = rf = {}));
    var of;
    (function(e) {
        e.StandardSearch = "standardSearch",
        e.SmartSearch = "smartSearch",
        e.Meta = "meta"
    }
    )(of || (a.QfSectionName = of = {}));
    var af;
    (function(e) {
        e.ForceStatusUpdate = "forceStatusUpdate",
        e.ResetAllFlags = "resetAllFlags"
    }
    )(af || (a.SyncFlag = af = {}));
    var sf;
    (function(e) {
        e.Light = "light",
        e.Dark = "dark",
        e.System = "system"
    }
    )(sf || (a.OpBrowserAppTheme = sf = {}));
    var uf;
    (function(e) {
        e.Save = "save",
        e.Generate = "generate",
        e.Done = "done"
    }
    )(uf || (a.PasswordGeneratorButtonAction = uf = {}));
    var cf;
    (function(e) {
        e.Bitwarden = "bitwarden",
        e.Brave = "brave",
        e.Chrome = "chrome",
        e.Csv = "csv",
        e.Dashlane = "dashlane",
        e.Delinea = "delinea",
        e.Edge = "edge",
        e.Firefox = "firefox",
        e.ICloud = "iCloud",
        e.Keepass = "keepass",
        e.KeePassXc = "keePassXc",
        e.LastPass = "lastPass",
        e.OnePux = "onePux",
        e.RoboForm = "roboForm",
        e.Safari = "safari",
        e.Standalone = "standalone"
    }
    )(cf || (a.ImportName = cf = {}));
    var df;
    (function(e) {
        e.Light = "light",
        e.Dark = "dark",
        e.System = "system"
    }
    )(df || (a.OpWebCoreAppTheme = df = {}));
    var lf;
    (function(e) {
        e.Url = "Url",
        e.Email = "Email",
        e.Phone = "Phone",
        e.MapApple = "MapApple",
        e.MapGoogle = "MapGoogle",
        e.MapDuckDuckGo = "MapDuckDuckGo"
    }
    )(lf || (a.OpenUrlType = lf = {}));
    var ff;
    (function(e) {
        e.Once = "Once",
        e.Transaction = "Transaction",
        e.Monthly = "Monthly",
        e.Annually = "Annually",
        e.Forever = "Forever"
    }
    )(ff || (a.PrivacySpendLimit = ff = {}));
    var pf;
    (function(e) {
        e.Primary = "Primary",
        e.Secondary = "Secondary",
        e.Tertiary = "Tertiary"
    }
    )(pf || (a.FieldPriorityOrder = pf = {}));
    var mf;
    (function(e) {
        e.AutofillRequestAccessibilityPermissions = "AutofillRequestAccessibilityPermissions"
    }
    )(mf || (a.QXOnboardingAction = mf = {}));
    var gf;
    (function(e) {
        e.AutofillShortcut = "autofillShortcut",
        e.QuickAccessShortcut = "quickAccessShortcut"
    }
    )(gf || (a.QuickAccessOpenedBy = gf = {}));
    var hf;
    (function(e) {
        e.Clipboard = "clipboard",
        e.Desktop = "desktop"
    }
    )(hf || (a.QrCodeSource = hf = {}));
    var vf;
    (function(e) {
        e.PlainText = "plainText",
        e.Html = "html"
    }
    )(vf || (a.RecoveryKeyFileContentsFormat = vf = {}));
    var yf;
    (function(e) {
        e.Production = "Production",
        e.Beta = "Beta",
        e.Nightly = "Nightly"
    }
    )(yf || (a.ReleaseChannel = yf = {}));
    var wf;
    (function(e) {
        e.FaceID = "faceID",
        e.TouchID = "touchID",
        e.Passcode = "passcode",
        e.None = "none"
    }
    )(wf || (a.BiometryType = wf = {}));
    var bf;
    (function(e) {
        e.SecretKey = "secretKey",
        e.Sso = "sso",
        e.WebAuthn = "webAuthn"
    }
    )(bf || (a.SafariWebExtensionAccountType = bf = {}));
    var Sf;
    (function(e) {
        e.Ramp = "ramp"
    }
    )(Sf || (a.SaveManagerIntegration = Sf = {}));
    var Pf;
    (function(e) {
        e.Amazon = "amazon",
        e.Apple = "apple",
        e.Discord = "discord",
        e.Facebook = "facebook",
        e.GitHub = "github",
        e.Google = "google",
        e.Microsoft = "microsoft",
        e.Okta = "okta",
        e.Slack = "slack",
        e.Twitter = "twitter"
    }
    )(Pf || (a.UsoProvider = Pf = {}));
    var Ef;
    (function(e) {
        e.Login = "login",
        e.CreditCard = "credit-card",
        e.ApiKey = "api-key",
        e.CryptoWallet = "crypto-wallet"
    }
    )(Ef || (a.CreateItemType = Ef = {}));
    var xf;
    (function(e) {
        e.LockApp = "lockApp"
    }
    )(xf || (a.SbCollectionMenuBasicCommand = xf = {}));
    var Af;
    (function(e) {
        e.Informational = "informational",
        e.Success = "success",
        e.Critical = "critical",
        e.Warning = "warning"
    }
    )(Af || (a.KnoxCalloutSeverity = Af = {}));
    var Tf;
    (function(e) {
        e.Attention = "attention",
        e.Critical = "critical",
        e.Neutral = "neutral",
        e.Informational = "informational",
        e.Success = "success"
    }
    )(Tf || (a.SettingsElementPillType = Tf = {}));
    var kf;
    (function(e) {
        e.InterfaceDensityCompact = "interfaceDensityCompact",
        e.InterfaceDensityComfortable = "interfaceDensityComfortable",
        e.AppIconLight = "appIconLight",
        e.AppIconDark = "appIconDark"
    }
    )(kf || (a.SettingsElementRadioOptionIllustration = kf = {}));
    var Cf;
    (function(e) {
        e.Leading = "leading",
        e.Centered = "centered",
        e.Trailing = "trailing"
    }
    )(Cf || (a.TextJustification = Cf = {}));
    var If;
    (function(e) {
        e.AnyoneWithTheLink = "AnyoneWithTheLink",
        e.OnlySomePeople = "OnlySomePeople"
    }
    )(If || (a.ShareItemAvailableToMenuEntryId = If = {}));
    var Lf;
    (function(e) {
        e.Modal = "Modal",
        e.ErrorStrip = "ErrorStrip"
    }
    )(Lf || (a.ShareItemErrorFormat = Lf = {}));
    var Of;
    (function(e) {
        e.OneHour = "OneHour",
        e.OneDay = "OneDay",
        e.SevenDays = "SevenDays",
        e.FourteenDays = "FourteenDays",
        e.ThirtyDays = "ThirtyDays"
    }
    )(Of || (a.ShareItemLinkExpirationMenuEntryId = Of = {}));
    var Mf;
    (function(e) {
        e.Invisible = "Invisible",
        e.VisibleChecked = "VisibleChecked",
        e.VisibleUnchecked = "VisibleUnchecked"
    }
    )(Mf || (a.ShareItemLimitViewsCheckbox = Mf = {}));
    var Rf;
    (function(e) {
        e.CopyLink = "CopyLink",
        e.ShareLink = "ShareLink"
    }
    )(Rf || (a.ShareItemTelemetryShareMethod = Rf = {}));
    var Nf;
    (function(e) {
        e.SecretKey = "secretKey",
        e.Sso = "sso",
        e.Passkey = "passkey"
    }
    )(Nf || (a.ManualSignInFormType = Nf = {}));
    var Uf;
    (function(e) {
        e.Header = "header",
        e.List = "list",
        e.ListFlexible = "listFlexible"
    }
    )(Uf || (a.SidebarElementSpacerType = Uf = {}));
    var Df;
    (function(e) {
        e.QuickAccess = "quickAccess",
        e.Autofill = "autofill"
    }
    )(Df || (a.SilentUnlockReason = Df = {}));
    var Ff;
    (function(e) {
        e.Increment = "increment",
        e.Decrement = "decrement",
        e.Reset = "reset"
    }
    )(Ff || (a.StepperChangeType = Ff = {}));
    var _f;
    (function(e) {
        e.AllItems = "allItems",
        e.AppleWatchAdd = "appleWatchAdd",
        e.AppleWatchRemove = "appleWatchRemove",
        e.Archive = "archive",
        e.ArchiveLarge = "archiveLarge",
        e.BiometricUnlockAppleFaceId = "biometricUnlockAppleFaceId",
        e.BiometricUnlockAppleTouchId = "biometricUnlockAppleTouchId",
        e.BiometricUnlockAppleWatch = "biometricUnlockAppleWatch",
        e.BiometricUnlock = "biometricUnlock",
        e.BiometricUnlockFingerprint = "biometricUnlockFingerprint",
        e.BiometricUnlockWindowsHello = "biometricUnlockWindowsHello",
        e.Cancel = "cancel",
        e.CancelOutline = "cancelOutline",
        e.Checkmark = "checkmark",
        e.CheckmarkCircle = "checkmarkCircle",
        e.CheckmarkFilled = "checkmarkFilled",
        e.ChevronDown = "chevronDown",
        e.ChevronLeft = "chevronLeft",
        e.ChevronRight = "chevronRight",
        e.ChevronUp = "chevronUp",
        e.Close = "close",
        e.CollapsedMenu = "collapsedMenu",
        e.Copy = "copy",
        e.CreditCard = "creditCard",
        e.CustomizeHome = "customizeHome",
        e.Delete = "delete",
        e.DeleteRow = "deleteRow",
        e.Disclosure = "disclosure",
        e.Document = "document",
        e.DocumentEmpty = "documentEmpty",
        e.Download = "download",
        e.DragHandle = "dragHandle",
        e.Dropdown = "dropdown",
        e.Edit = "edit",
        e.Email = "email",
        e.EmergencyKit = "emergencyKit",
        e.ExternalLink = "externalLink",
        e.FavoriteOff = "favoriteOff",
        e.FavoriteOn = "favoriteOn",
        e.Filter = "filter",
        e.Find = "find",
        e.Folder = "folder",
        e.Frozen = "frozen",
        e.Git = "git",
        e.Help = "help",
        e.HelpBubble = "helpBubble",
        e.Hide = "hide",
        e.Import = "import",
        e.Information = "information",
        e.InsertText = "insertText",
        e.Integration = "integration",
        e.ItemHistory = "itemHistory",
        e.ItemSharing = "itemSharing",
        e.Ladybug = "ladybug",
        e.LargeType = "largeType",
        e.Link = "link",
        e.Lock = "lock",
        e.Minus = "minus",
        e.Missing = "missing",
        e.ModeDark = "modeDark",
        e.ModeLight = "modeLight",
        e.ModeSystem = "modeSystem",
        e.Move = "move",
        e.NavigateBack = "navigateBack",
        e.NavigateForward = "navigateForward",
        e.NewWindow = "newWindow",
        e.NoConnection = "noConnection",
        e.NoConnectionLarge = "noConnectionLarge",
        e.NoResults = "noResults",
        e.Notifications = "notifications",
        e.OnePassword = "onePassword",
        e.OnePasswordLocked = "onePasswordLocked",
        e.OpenInBrowser = "openInBrowser",
        e.Overflow = "overflow",
        e.OverflowApple = "overflowApple",
        e.OverflowHorizontal = "overflowHorizontal",
        e.Passkey = "passkey",
        e.Password = "password",
        e.Paste = "paste",
        e.Pin = "pin",
        e.PinUnlock = "pinUnlock",
        e.Plus = "plus",
        e.PlusSmall = "plusSmall",
        e.PreviousSize = "previousSize",
        e.Print = "print",
        e.Unpin = "unpin",
        e.QrCodeScan = "qrCodeScan",
        e.RecentlyDeleted = "recentlyDeleted",
        e.RecentlyDeletedLarge = "recentlyDeletedLarge",
        e.Refresh = "refresh",
        e.Report = "report",
        e.Restore = "restore",
        e.Review = "review",
        e.Search = "search",
        e.Select = "select",
        e.Settings = "settings",
        e.SettingsAdvanced = "settingsAdvanced",
        e.Share = "share",
        e.ShareHistory = "shareHistory",
        e.Show = "show",
        e.Sidebar = "sidebar",
        e.SignIn = "signIn",
        e.Sort = "sort",
        e.Suggestions = "suggestions",
        e.TabBarHome = "tabBarHome",
        e.TabBarItems = "tabBarItems",
        e.TabBarSearch = "tabBarSearch",
        e.TabBarSettings = "tabBarSettings",
        e.TabBarWatchtower = "tabBarWatchtower",
        e.Tags = "tags",
        e.Terminal = "terminal",
        e.Trash = "trash",
        e.TrashLarge = "trashLarge",
        e.TravelMode = "travelMode",
        e.Twitter = "twitter",
        e.UnlockSettingBiometric = "unlockSettingBiometric",
        e.UnlockSettingBiometricDisabled = "unlockSettingBiometricDisabled",
        e.UnlockSettingBiometricAppleFaceId = "unlockSettingBiometricAppleFaceId",
        e.UnlockSettingBiometricAppleFaceIdDisabled = "unlockSettingBiometricAppleFaceIdDisabled",
        e.UnlockSettingBiometricAppleTouchId = "unlockSettingBiometricAppleTouchId",
        e.UnlockSettingBiometricAppleTouchIdDisabled = "unlockSettingBiometricAppleTouchIdDisabled",
        e.UnlockSettingBiometricAppleWatch = "unlockSettingBiometricAppleWatch",
        e.UnlockSettingPassword = "unlockSettingPassword",
        e.UnlockSettingPinUnlock = "unlockSettingPinUnlock",
        e.UnlockSettingPinUnlockDisabled = "unlockSettingPinUnlockDisabled",
        e.Upload = "upload",
        e.User = "user",
        e.Users = "users",
        e.UserSmall = "userSmall",
        e.UsersSmall = "usersSmall",
        e.Warning = "warning",
        e.WarningLarge = "warningLarge",
        e.Watchtower = "watchtower",
        e.WatchtowerCompromisedDomain = "watchtowerCompromisedDomain",
        e.WatchtowerExpiring = "watchtowerExpiring",
        e.WatchtowerReusedPassword = "watchtowerReusedPassword",
        e.WatchtowerTwoFactorAvailable = "watchtowerTwoFactorAvailable",
        e.WatchtowerUnsecuredWebsite = "watchtowerUnsecuredWebsite",
        e.WatchtowerVulnerablePassword = "watchtowerVulnerablePassword",
        e.WatchtowerWeakPassword = "watchtowerWeakPassword",
        e.WatchtowerDuplicateItem = "watchtowerDuplicateItem",
        e.WatchtowerWrongAccount = "watchtowerWrongAccount",
        e.WhatsApp = "whatsApp"
    }
    )(_f || (a.ThemedIconFile = _f = {}));
    var Bf;
    (function(e) {
        e.ImportantEphemeral = "importantEphemeral",
        e.Persistent = "persistent",
        e.Ephemeral = "ephemeral"
    }
    )(Bf || (a.ToastBehavior = Bf = {}));
    var Hf;
    (function(e) {
        e.AppleOtpAuth = "apple-otpauth",
        e.OtpAuth = "otpauth",
        e.Yjotp = "yjotp"
    }
    )(Hf || (a.ValidOtpSchemes = Hf = {}));
    var qf;
    (function(e) {
        e.New = "New",
        e.Existing = "Existing"
    }
    )(qf || (a.VaultCollectionDetailState = qf = {}));
    var zf;
    (function(e) {
        e.View = "view",
        e.Edit = "edit",
        e.Manage = "manage"
    }
    )(zf || (a.VaultSimplifiedPermissions = zf = {}));
    var Wf;
    (function(e) {
        e.NoViewersRemainingAndUserCanManageVaults = "noViewersRemainingAndUserCanManageVaults",
        e.NoViewersRemainingAndUserCannotManageVaults = "noViewersRemainingAndUserCannotManageVaults",
        e.YouCannotViewAndUserCanManageVaults = "youCannotViewAndUserCanManageVaults",
        e.YouCannotViewAndUserCannotManageVaults = "youCannotViewAndUserCannotManageVaults"
    }
    )(Wf || (a.VaultPermissionViewRemoveWarning = Wf = {}));
    var jf;
    (function(e) {
        e.View = "view",
        e.ViewAndEdit = "viewAndEdit",
        e.Manage = "manage",
        e.ManageAndView = "manageAndView",
        e.FullAccess = "fullAccess",
        e.Custom = "custom"
    }
    )(jf || (a.VaultSimplifiedPermissionsSummary = jf = {}));
    var Vf;
    (function(e) {
        e.CompromisedLogins = "compromisedLogins",
        e.VulnerablePasswords = "vulnerablePasswords",
        e.WeakPasswords = "weakPasswords",
        e.UnsecuredUrl = "unsecuredUrl",
        e.DuplicatePassword = "duplicatePassword",
        e.TwoFactorAvailable = "twoFactorAvailable",
        e.PasskeyAvailable = "passkeyAvailable",
        e.Expiring = "expiring",
        e.LastpassImpacted = "lastpassImpacted",
        e.WrongAccount = "wrongAccount",
        e.DuplicateItem = "duplicateItem",
        e.ConflictingShortcut = "conflictingShortcut",
        e.DeveloperWatchtower = "developerWatchtower",
        e.RecoveryCodes = "recoveryCodes"
    }
    )(Vf || (a.WatchtowerCardType = Vf = {}));
    var Gf;
    (function(e) {
        e.SlideOne = "SlideOne",
        e.SlideTwo = "SlideTwo",
        e.SlideThree = "SlideThree",
        e.SlideFour = "SlideFour",
        e.SlideFive = "SlideFive"
    }
    )(Gf || (a.WelcomeScreenSlideID = Gf = {}));
    var Kf;
    (function(e) {
        e.Basic = "basic",
        e.Extended = "extended"
    }
    )(Kf || (a.ZoneISOFormatType = Kf = {}));
    var $f;
    (function(e) {
        e.Required = "required",
        e.Optional = "optional",
        e.Excluded = "excluded"
    }
    )($f || (a.ZoneISOFieldRequirement = $f = {}));
    var Yf;
    (function(e) {
        e.Group = "group",
        e.User = "user"
    }
    )(Yf || (a.AccessorType = Yf = {}));
    var Xf;
    (function(e) {
        e.All = "All",
        e.Locked = "Locked",
        e.Unlocked = "Unlocked"
    }
    )(Xf || (a.AccountLockState = Xf = {}));
    var Qf;
    (function(e) {
        e.ExampleAction = "example_action",
        e.ClipboardCleared = "clipboard_cleared",
        e.SearchHistoryCleared = "search_history_cleared"
    }
    )(Qf || (a.ActionName = Qf = {}));
    var Jf;
    (function(e) {
        e.Success = "success",
        e.Failed = "failed"
    }
    )(Jf || (a.AddLocationToItemResponse = Jf = {}));
    var Zf;
    (function(e) {
        e.Shipping = "shipping",
        e.Billing = "billing"
    }
    )(Zf || (a.AddressType = Zf = {}));
    var ep;
    (function(e) {
        e.UnverifiedUser = "UnverifiedUser",
        e.AddressInUse = "AddressInUse",
        e.RateLimit = "RateLimit",
        e.OverQuota = "OverQuota",
        e.RequestError = "RequestError",
        e.InternalError = "InternalError"
    }
    )(ep || (a.AliasError = ep = {}));
    var tp;
    (function(e) {
        e.RegionMatchesAnAccount = "regionMatchesAnAccount",
        e.RegionWillChange = "regionWillChange",
        e.InvalidMyceliumData = "invalidMyceliumData"
    }
    )(tp || (a.AlignMyceliumRegionWithCurrentAccountsResponse = tp = {}));
    var np;
    (function(e) {
        e.Interrupted = "Interrupted",
        e.NoCredential = "NoCredential",
        e.UserCanceled = "UserCanceled",
        e.Unknown = "Unknown",
        e.UnexpectedCredentialType = "UnexpectedCredentialType",
        e.ApplicationError = "ApplicationError"
    }
    )(np || (a.AndroidWebAuthnError = np = {}));
    var rp;
    (function(e) {
        e.Error = "Error",
        e.Success = "Success"
    }
    )(rp || (a.ApiAddSshHostBookmarkResponse = rp = {}));
    var op;
    (function(e) {
        e.Removed = "removed",
        e.NotFound = "notFound",
        e.NotConfirmed = "notConfirmed"
    }
    )(op || (a.ApiDeleteFoundAccountResponse = op = {}));
    var ip;
    (function(e) {
        e.AccountNotFound = "accountNotFound",
        e.AccountLocked = "accountLocked"
    }
    )(ip || (a.ApiGetAccountSignInCredentialsError = ip = {}));
    var ap;
    (function(e) {
        e.InvalidEmail = "invalidEmail",
        e.InvalidSignInAddress = "invalidSignInAddress",
        e.ServerRequestFailed = "serverRequestFailed"
    }
    )(ap || (a.ApiGetAuthMethodError = ap = {}));
    var sp;
    (function(e) {
        e.ConnectionFailed = "connectionFailed",
        e.AccountNotFound = "accountNotFound",
        e.AccountLocked = "accountLocked",
        e.UserGuest = "userGuest",
        e.UserSuspended = "userSuspended",
        e.FilterVaultNotFound = "filterVaultNotFound",
        e.ServerRequestFailed = "serverRequestFailed",
        e.Internal = "internal"
    }
    )(sp || (a.ApiGetGroupsError = sp = {}));
    var up;
    (function(e) {
        e.NoItemsFound = "noItemsFound"
    }
    )(up || (a.ApiGetItemsError = up = {}));
    var cp;
    (function(e) {
        e.Internal = "internal"
    }
    )(cp || (a.ApiGetTrustedDevicesError = cp = {}));
    var dp;
    (function(e) {
        e.NetworkConnectionFailed = "networkConnectionFailed",
        e.AuthorizationAccountNotFound = "authorizationAccountNotFound",
        e.AuthorizationAccountLocked = "authorizationAccountLocked",
        e.AuthorizationUserGuest = "authorizationUserGuest",
        e.AuthorizationUserSuspended = "authorizationUserSuspended",
        e.SpecialFilterVaultNotFound = "specialFilterVaultNotFound",
        e.SpecialFilterVaultCannotManageAccess = "specialFilterVaultCannotManageAccess"
    }
    )(dp || (a.ApiGetUsersError = dp = {}));
    var lp;
    (function(e) {
        e.ClientError = "clientError",
        e.ItemEntityIdParseError = "itemEntityIdParseError",
        e.ItemNotFound = "itemNotFound",
        e.CouldNotLoadPreviousItemVersion = "couldNotLoadPreviousItemVersion",
        e.CouldNotRestorePreviousItemVersion = "couldNotRestorePreviousItemVersion"
    }
    )(lp || (a.ApiItemHistoryError = lp = {}));
    var fp;
    (function(e) {
        e.ConnectionFailed = "connectionFailed",
        e.AccountNotFound = "accountNotFound",
        e.AccountLocked = "accountLocked",
        e.AccountFrozen = "accountFrozen",
        e.AccountNotFamily = "accountNotFamily",
        e.UserGuest = "userGuest",
        e.UserSuspended = "userSuspended",
        e.VaultNotFound = "vaultNotFound",
        e.VaultAccessCannotBeManaged = "vaultAccessCannotBeManaged",
        e.PermissionMissingManage = "permissionMissingManage",
        e.Internal = "internal"
    }
    )(fp || (a.ApiManageVaultAccessError = fp = {}));
    var pp;
    (function(e) {
        e.Error = "Error",
        e.Success = "Success"
    }
    )(pp || (a.ApiRemoveSshHostBookmarkResponse = pp = {}));
    var mp;
    (function(e) {
        e.Android = "Android",
        e.Apple = "Apple",
        e.Mac = "Mac",
        e.MacSystemPassword = "MacSystemPassword"
    }
    )(mp || (a.ApiType = mp = {}));
    var gp;
    (function(e) {
        e.Invalid = "invalid"
    }
    )(gp || (a.ApiValidateEmailError = gp = {}));
    var hp;
    (function(e) {
        e.BadLength = "badLength",
        e.BadVersion = "badVersion"
    }
    )(hp || (a.ApiValidateSecretKeyError = hp = {}));
    var vp;
    (function(e) {
        e.Empty = "empty",
        e.MissingEnterpriseSubdomain = "missingEnterpriseSubdomain",
        e.BadDomain = "badDomain",
        e.MissingDomain = "missingDomain",
        e.LooksLikeEmail = "looksLikeEmail",
        e.ParseError = "parseError"
    }
    )(vp || (a.ApiValidateSignInAddressError = vp = {}));
    var yp;
    (function(e) {
        e.CannotRemoveReadWithoutManage = "cannotRemoveReadWithoutManage"
    }
    )(yp || (a.ApiValidateVaultPermissionsChangeError = yp = {}));
    var wp;
    (function(e) {
        e.NoAppStoreProvided = "noAppStoreProvided",
        e.CannotMakePayment = "cannotMakePayment",
        e.PurchaseFailed = "purchaseFailed",
        e.ProductNotFound = "productNotFound",
        e.CannotDecodeProductIdentifier = "cannotDecodeProductIdentifier",
        e.NoAppStoreResult = "noAppStoreResult",
        e.FailedToDeserializeResponse = "failedToDeserializeResponse",
        e.ExistingPurchaseInProgress = "existingPurchaseInProgress",
        e.UnsupportedPlatform = "unsupportedPlatform"
    }
    )(wp || (a.AppStoreError = wp = {}));
    var bp;
    (function(e) {
        e.Check = "Check",
        e.MarkAsShown = "MarkAsShown"
    }
    )(bp || (a.AppStoreReviewPromptRequest = bp = {}));
    var Sp;
    (function(e) {
        e.Granted = "granted",
        e.NotGranted = "notGranted"
    }
    )(Sp || (a.AppleNotificationAuthorizationResponse = Sp = {}));
    var Pp;
    (function(e) {
        e.NotDetermined = "notDetermined",
        e.Denied = "denied",
        e.Authorized = "authorized",
        e.Provisional = "provisional",
        e.Ephemeral = "ephemeral",
        e.Unknown = "unknown"
    }
    )(Pp || (a.AppleNotificationAuthorizationStatusResponse = Pp = {}));
    var Ep;
    (function(e) {
        e.Cli = "Cli",
        e.Ssh = "Ssh"
    }
    )(Ep || (a.AuthPromptType = Ep = {}));
    var xp;
    (function(e) {
        e.CredentialsSentSuccessfully = "credentialsSentSuccessfully",
        e.IncorrectCodeChosen = "incorrectCodeChosen",
        e.PromptTimeout = "promptTimeout",
        e.PromptDenied = "promptDenied",
        e.NetworkError = "networkError",
        e.ChannelClosed = "channelClosed",
        e.FeatureDisabled = "featureDisabled"
    }
    )(xp || (a.AuthorizedDeviceQrDisplayMyceliumSignInResponse = xp = {}));
    var Ap;
    (function(e) {
        e.MarkAsShown = "MarkAsShown"
    }
    )(Ap || (a.AutofillUpdateForChromeRequest = Ap = {}));
    var Tp;
    (function(e) {
        e.Chrome = "chrome",
        e.Firefox = "firefox",
        e.SafariMacos = "safari-macos",
        e.SafariIos = "safari-ios"
    }
    )(Tp || (a.B5xBrowser = Tp = {}));
    var kp;
    (function(e) {
        e.UrlParseFailed = "UrlParseFailed",
        e.TemplateParseFailed = "TemplateParseFailed",
        e.FailedToFindValueForFieldIdentifier = "FailedToFindValueForFieldIdentifier",
        e.FailedToGenerateLargeType = "FailedToGenerateLargeType",
        e.FailedToGenerateWatchtowerReport = "FailedToGenerateWatchtowerReport",
        e.SshKeyParseFailed = "SshKeyParseFailed",
        e.FailedToFindTemplateField = "FailedToFindTemplateField",
        e.InvalidTemplateType = "InvalidTemplateType"
    }
    )(kp || (a.BindingError = kp = {}));
    var Cp;
    (function(e) {
        e.AuthenticationSuccessful = "AuthenticationSuccessful",
        e.AuthenticationFailed = "AuthenticationFailed",
        e.UserCancel = "UserCancel",
        e.UserFallBack = "UserFallBack",
        e.SystemCancel = "SystemCancel",
        e.PasscodeNotSet = "PasscodeNotSet",
        e.BiometryNotAvailable = "BiometryNotAvailable",
        e.BiometryNotEnrolled = "BiometryNotEnrolled",
        e.BiometryLockout = "BiometryLockout",
        e.AppCancel = "AppCancel",
        e.InvalidContext = "InvalidContext",
        e.NotInteractive = "NotInteractive",
        e.WatchNotAvailable = "WatchNotAvailable",
        e.LocalizedStringsFailure = "LocalizedStringsFailure",
        e.FailureReasonUnknown = "FailureReasonUnknown",
        e.Timeout = "Timeout",
        e.BiometryAlreadyInProgress = "BiometryAlreadyInProgress"
    }
    )(Cp || (a.BiometricAuthResponse = Cp = {}));
    var Ip;
    (function(e) {
        e.None = "None",
        e.Biometry = "Biometry",
        e.DeviceCredential = "DeviceCredential"
    }
    )(Ip || (a.BiometricUnlock = Ip = {}));
    var Lp;
    (function(e) {
        e.MainAppNotRunning = "MainAppNotRunning"
    }
    )(Lp || (a.BrowserHelperResponse = Lp = {}));
    var Op;
    (function(e) {
        e.MainAppNotRunning = "MainAppNotRunning",
        e.MainAppOpenTimeout = "MainAppOpenTimeout",
        e.CannotOpenMainApp = "CannotOpenMainApp",
        e.UnknownInvocation = "UnknownInvocation",
        e.BrowserHelperNotRegistered = "BrowserHelperNotRegistered"
    }
    )(Op || (a.BrowserSupportResponse = Op = {}));
    var Mp;
    (function(e) {
        e.BrowserSignatureInvalid = "BrowserSignatureInvalid",
        e.UnknownBrowser = "UnknownBrowser"
    }
    )(Mp || (a.BrowserVerificationFailedReason = Mp = {}));
    var Rp;
    (function(e) {
        e.Success = "success",
        e.Failed = "failed"
    }
    )(Rp || (a.CancelInviteResponse = Rp = {}));
    var Np;
    (function(e) {
        e.Visa = "Visa",
        e.Mastercard = "Mastercard",
        e.AmericanExpress = "AmericanExpress",
        e.Discover = "Discover",
        e.Jcb = "Jcb",
        e.Maestro = "Maestro",
        e.VisaElectron = "VisaElectron",
        e.UnionPay = "UnionPay"
    }
    )(Np || (a.CcType = Np = {}));
    var Up;
    (function(e) {
        e.UseMaps = "useMaps",
        e.LabsNearbyItems = "labsNearbyItems",
        e.HideImportNudge = "hideImportNudge"
    }
    )(Up || (a.CheckboxSetting = Up = {}));
    var Dp;
    (function(e) {
        e.Create = "webauthn.create",
        e.Get = "webauthn.get",
        e.PaymentGet = "payment.get"
    }
    )(Dp || (a.ClientDataType = Dp = {}));
    var Fp;
    (function(e) {
        e.InvalidBrowserSignature = "InvalidBrowserSignature",
        e.UnsupportedBrowser = "UnsupportedBrowser",
        e.DoesNotMatchTeam = "DoesNotMatchTeam",
        e.NotSigned = "NotSigned",
        e.MissingRequirementInfo = "MissingRequirementInfo"
    }
    )(Fp || (a.CodeSignatureError = Fp = {}));
    var _p;
    (function(e) {
        e.SetUpAnotherDeviceModal = "set_up_another_device_modal",
        e.SetUpAnotherDeviceScreen = "set_up_another_device_screen",
        e.HomepageScreen = "homepage_screen",
        e.WatchtowerScreen = "watchtower_screen",
        e.StartHereModal = "start_here_modal",
        e.StartHereScreen = "start_here_screen",
        e.AllItemsScreen = "all_items_screen",
        e.AddItemsChooseMethodScreen = "add_items_choose_method_screen",
        e.MigrateYourDataScreen = "migrate_your_data_screen",
        e.PinExtensionScreen = "pin_extension_screen",
        e.GetExtensionScreen = "get_extension_screen",
        e.SetUpAutofillScreen = "set_up_autofill_screen",
        e.PracticeSaveAndFillScreen = "practice_save_and_fill_screen",
        e.AddNewItemScreen = "add_new_item_screen",
        e.ProfileMenu = "profile_menu",
        e.InvitePeopleModal = "invite_people_modal",
        e.InvitePeopleScreen = "invite_people_screen",
        e.ItemTemplateScreen = "item_template_screen",
        e.ItemDetailsScreen = "item_details_screen",
        e.ExportDataModal = "export_data_modal",
        e.GitCommitSigningModal = "git_commit_signing_modal",
        e.DeveloperExperienceHomeScreen = "developer_experience_home_screen",
        e.DeveloperExperienceOnboardingCallout = "developer_experience_onboarding_callout",
        e.SettingsDeveloperScreen = "settings_developer_screen",
        e.DeveloperExperienceSshScreen = "developer_experience_ssh_screen",
        e.DeveloperExperienceActivityScreen = "developer_experience_activity_screen",
        e.CopyItemMenu = "copy_item_menu",
        e.ChromeAutofillPromptScreen = "chrome_autofill_prompt_screen",
        e.AutofillSettingsScreen = "autofill_settings_screen",
        e.SettingsLabsScreen = "settings_labs_screen",
        e.QuickAccessSearchFieldResult = "quick_access_search_field_result"
    }
    )(_p || (a.ComponentSource = _p = {}));
    var Bp;
    (function(e) {
        e.Button = "button",
        e.TextLink = "text_link",
        e.Modal = "modal",
        e.Screen = "screen",
        e.MediaCard = "mediacard",
        e.Switch = "switch",
        e.SwitchOn = "switch_on",
        e.SwitchOff = "switch_off",
        e.CheckboxOn = "checkbox_on",
        e.CheckboxOff = "checkbox_off",
        e.ToolTip = "tooltip",
        e.Callout = "callout",
        e.Select = "select"
    }
    )(Bp || (a.ComponentType = Bp = {}));
    var Hp;
    (function(e) {
        e.Success = "success",
        e.Failed = "failed"
    }
    )(Hp || (a.ConfirmUserResponse = Hp = {}));
    var qp;
    (function(e) {
        e.Success = "success",
        e.Failure = "failure"
    }
    )(qp || (a.DeleteUnlockPasskeyResponse = qp = {}));
    var zp;
    (function(e) {
        e.Metric = "metric",
        e.USImperial = "uSImperial"
    }
    )(zp || (a.DistanceUnit = zp = {}));
    var Wp;
    (function(e) {
        e.Fastmail = "fastmail"
    }
    )(Wp || (a.EmailAliasProvider = Wp = {}));
    var jp;
    (function(e) {
        e.FailedMfaPrompt = "FailedMfaPrompt",
        e.InvalidMfaPromptResponse = "InvalidMfaPromptResponse",
        e.NoMfaOptions = "NoMfaOptions",
        e.MfaTimedOut = "MfaTimedOut"
    }
    )(jp || (a.Error = jp = {}));
    var Vp;
    (function(e) {
        e.UnableToFindDevice = "UnableToFindDevice",
        e.NoStoredDSecret = "NoStoredDSecret"
    }
    )(Vp || (a.ErrorRequestingDSecretProxy = Vp = {}));
    var Gp;
    (function(e) {
        e.Pages = "pages",
        e.Signin = "signin",
        e.Unlock = "unlock"
    }
    )(Gp || (a.EssentialSetupRequest = Gp = {}));
    var Kp;
    (function(e) {
        e.CustomBrowsers = "customBrowsers",
        e.FeatureFlags = "featureFlags",
        e.NearbyItems = "nearbyItems",
        e.AutoType = "autoType",
        e.Snippets = "snippets",
        e.PrivacyMode = "privacyMode"
    }
    )(Kp || (a.ExperimentId = Kp = {}));
    var $p;
    (function(e) {
        e.ReachedLimitingCondition = "ReachedLimitingCondition",
        e.NoSession = "NoSession",
        e.InvalidTabOrUrl = "InvalidTabOrUrl",
        e.InvalidItem = "InvalidItem",
        e.MismatchingUuid = "MismatchingUuid",
        e.FillFailed = "FillFailed"
    }
    )($p || (a.FillStatusError = $p = {}));
    var Yp;
    (function(e) {
        e.SignUp = "signUp",
        e.LinkExisting = "linkExisting"
    }
    )(Yp || (a.FreeFamilyOption = Yp = {}));
    var Xp;
    (function(e) {
        e.NotFound = "NotFound",
        e.NetworkError = "NetworkError"
    }
    )(Xp || (a.GetItemAtVersionError = Xp = {}));
    var Qp;
    (function(e) {
        e.Desktop = "Desktop",
        e.Phone = "Phone",
        e.Tablet = "Tablet",
        e.Browser = "Browser"
    }
    )(Qp || (a.InterfaceIdiom = Qp = {}));
    var Jp;
    (function(e) {
        e.Light = "Light",
        e.Dark = "Dark"
    }
    )(Jp || (a.ItemCatalogTheme = Jp = {}));
    var Zp;
    (function(e) {
        e.InputJsonDeserializationFailed = "InputJsonDeserializationFailed",
        e.MissingTemplateUuid = "MissingTemplateUuid",
        e.MissingItemUrl = "MissingItemUrl",
        e.BadVersionInt = "BadVersionInt"
    }
    )(Zp || (a.ItemListEntryError = Zp = {}));
    var em;
    (function(e) {
        e.Error = "Error",
        e.Warn = "Warn",
        e.Info = "Info",
        e.Debug = "Debug",
        e.Trace = "Trace"
    }
    )(em || (a.Level = em = {}));
    var tm;
    (function(e) {
        e.AccountNotFound = "accountNotFound",
        e.FeatureDisabled = "featureDisabled",
        e.AccountTypeNotSupported = "accountTypeNotSupported"
    }
    )(tm || (a.ManageAccountResponseError = tm = {}));
    var nm;
    (function(e) {
        e.Member = "member",
        e.Admin = "admin",
        e.Owner = "owner"
    }
    )(nm || (a.ManageAccountUserType = nm = {}));
    var rm;
    (function(e) {
        e.NetworkError = "networkError",
        e.PermissionDenied = "permissionDenied"
    }
    )(rm || (a.ManageAccountUserVaultsListResponseError = rm = {}));
    var om;
    (function(e) {
        e.Failed = "failed"
    }
    )(om || (a.MdError = om = {}));
    var im;
    (function(e) {
        e.Code = "Code",
        e.Yubikey = "Yubikey"
    }
    )(im || (a.MfaInProgressKind = im = {}));
    var am;
    (function(e) {
        e.Decimal = "decimal",
        e.PaddedDecimal = "paddedDecimal",
        e.Abbreviated = "abbreviated",
        e.Full = "full",
        e.Narrow = "narrow"
    }
    )(am || (a.MonthDayDisplay = am = {}));
    var sm;
    (function(e) {
        e.Ok = "ok",
        e.Dismissed = "dismissed",
        e.Timeout = "timeout",
        e.AccountLocked = "accountLocked",
        e.AccountNotFound = "accountNotFound",
        e.UnsupportedClientType = "unsupportedClientType",
        e.PasswordUnlockRequired = "passwordUnlockRequired",
        e.AppMustBeLockedToContinue = "appMustBeLockedToContinue",
        e.SystemAuthDisabled = "systemAuthDisabled",
        e.NotAvailable = "notAvailable",
        e.ClientOutOfDate = "clientOutOfDate",
        e.PromptError = "promptError"
    }
    )(sm || (a.NmAuthorizationResponse = sm = {}));
    var um;
    (function(e) {
        e.InvalidRequest = "InvalidRequest",
        e.JsonSerializeError = "JsonSerializeError",
        e.DeviceKeyNotFound = "DeviceKeyNotFound",
        e.EncryptCredentialBundleError = "EncryptCredentialBundleError",
        e.DecryptCredentialBundleError = "DecryptCredentialBundleError",
        e.StoreError = "StoreError",
        e.DecryptDeviceKeyError = "DecryptDeviceKeyError",
        e.DeviceKeyGenerationError = "DeviceKeyGenerationError",
        e.WriteDeviceKeyToStorageError = "WriteDeviceKeyToStorageError",
        e.EncryptDeviceKeyError = "EncryptDeviceKeyError",
        e.Unknown = "Unknown"
    }
    )(um || (a.NmCredentialBundleError = um = {}));
    var cm;
    (function(e) {
        e.Working = "working",
        e.PermissionErrors = "permissionErrors",
        e.ValidationErrors = "validationErrors",
        e.SynchronizationErrors = "synchronizationErrors",
        e.IncompatibleSandbox = "incompatibleSandbox",
        e.UnableToConnect = "unableToConnect"
    }
    )(cm || (a.NmCurrentStatusRequest = cm = {}));
    var dm;
    (function(e) {
        e.UserSuspended = "userSuspended",
        e.Other = "other"
    }
    )(dm || (a.NmRequestDelegatedSessionError = dm = {}));
    var lm;
    (function(e) {
        e.Decimal = "decimal",
        e.PaddedDecimal = "paddedDecimal"
    }
    )(lm || (a.NumericMonthDayDisplay = lm = {}));
    var fm;
    (function(e) {
        e.Install = "Install",
        e.Uninstall = "Uninstall"
    }
    )(fm || (a.OpAppBrowserSupportSetup = fm = {}));
    var pm;
    (function(e) {
        e.SessionNotFound = "sessionNotFound"
    }
    )(pm || (a.OpImportCancelError = pm = {}));
    var mm;
    (function(e) {
        e.Username = "username",
        e.Password = "password",
        e.Totp = "totp",
        e.Sso = "sso"
    }
    )(mm || (a.OpImportCredentialNeed = mm = {}));
    var gm;
    (function(e) {
        e.SessionNotFound = "sessionNotFound",
        e.NoDataSource = "noDataSource",
        e.UnexpectedError = "unexpectedError"
    }
    )(gm || (a.OpImportCredentialsError = gm = {}));
    var hm;
    (function(e) {
        e.SessionNotFound = "sessionNotFound",
        e.AlreadyExists = "alreadyExists",
        e.Unsupported = "unsupported",
        e.Io = "io"
    }
    )(hm || (a.OpImportDataSourceResponseErr = hm = {}));
    var vm;
    (function(e) {
        e.FailedToGenerateRandom = "failedToGenerateRandom"
    }
    )(vm || (a.OpImportInitResponseErr = vm = {}));
    var ym;
    (function(e) {
        e.SessionNotFound = "sessionNotFound",
        e.NoDataSource = "noDataSource",
        e.Io = "io",
        e.FailedToCreateFileSupport = "failedToCreateFileSupport",
        e.Offline = "offline",
        e.Cancelled = "cancelled",
        e.Other = "other",
        e.MalformedZip = "malformedZip",
        e.MalformedFile = "malformedFile",
        e.MalformedCsv = "malformedCsv"
    }
    )(ym || (a.OpImportResponseErr = ym = {}));
    var wm;
    (function(e) {
        e.Start = "start",
        e.ProcessingExportedAccount = "processingExportedAccount",
        e.Saving = "saving"
    }
    )(wm || (a.OpImportStage = wm = {}));
    var bm;
    (function(e) {
        e.InvalidRequest = "InvalidRequest",
        e.MissingAccountInformation = "MissingAccountInformation",
        e.MissingUnlockInformationInKeychain = "MissingUnlockInformationInKeychain",
        e.MissingDSecret = "MissingDSecret",
        e.CannotUnlockAccounts = "CannotUnlockAccounts",
        e.CannotEncodeResponse = "CannotEncodeResponse",
        e.Unknown = "Unknown",
        e.CannotEncryptCredentialBundle = "CannotEncryptCredentialBundle",
        e.CannotDecryptCredentialBundle = "CannotDecryptCredentialBundle",
        e.UserDefaultsError = "UserDefaultsError"
    }
    )(bm || (a.OpiRequestError = bm = {}));
    var Sm;
    (function(e) {
        e.Uppercase = "uppercase",
        e.Lowercase = "lowercase"
    }
    )(Sm || (a.PeriodDisplay = Sm = {}));
    var Pm;
    (function(e) {
        e.Success = "success",
        e.Failure = "failure"
    }
    )(Pm || (a.RecoveryKeyActivateResponse = Pm = {}));
    var Em;
    (function(e) {
        e.Success = "success",
        e.Failure = "failure"
    }
    )(Em || (a.RecoveryKeyDeleteResponse = Em = {}));
    var xm;
    (function(e) {
        e.Success = "success",
        e.Failed = "failed"
    }
    )(xm || (a.ResendInviteResponse = xm = {}));
    var Am;
    (function(e) {
        e.InvalidSession = "InvalidSession",
        e.SessionLocked = "SessionLocked",
        e.SessionNotConfigured = "SessionNotConfigured",
        e.NakedDomainFailed = "NakedDomainFailed",
        e.InvalidItemTemplate = "InvalidItemTemplate",
        e.BrainSaveObject = "BrainSaveObject",
        e.InvalidSaveRequest = "InvalidSaveRequest"
    }
    )(Am || (a.SaveManagerError = Am = {}));
    var Tm;
    (function(e) {
        e.Terrible = "Terrible",
        e.Weak = "Weak",
        e.Fair = "Fair",
        e.Good = "Good",
        e.VeryGood = "VeryGood",
        e.Excellent = "Excellent",
        e.Fantastic = "Fantastic",
        e.NotSpecified = "NotSpecified"
    }
    )(Tm || (a.SelectedPasswordStrength = Tm = {}));
    var km;
    (function(e) {
        e.Default = "default",
        e.Privacy = "privacy",
        e.Ramp = "ramp",
        e.Stripe = "stripe"
    }
    )(km || (a.ServiceIntegration = km = {}));
    var Cm;
    (function(e) {
        e.Warning = "warning",
        e.Info = "info"
    }
    )(Cm || (a.SettingsCalloutVariant = Cm = {}));
    var Im;
    (function(e) {
        e.ItemCreated = "itemCreated",
        e.Cancelled = "cancelled"
    }
    )(Im || (a.ShowCreateItemResponse = Im = {}));
    var Lm;
    (function(e) {
        e.Accepted = "Accepted",
        e.Denied = "Denied"
    }
    )(Lm || (a.SilentUnlockResponse = Lm = {}));
    var Om;
    (function(e) {
        e.GenerateDeviceUuidError = "GenerateDeviceUuidError",
        e.SetDeviceUuidError = "SetDeviceUuidError",
        e.EncryptCredentialBundleError = "EncryptCredentialBundleError",
        e.DecryptCredentialBundleError = "DecryptCredentialBundleError",
        e.DeleteDeviceKeyError = "DeleteDeviceKeyError"
    }
    )(Om || (a.SweDeviceError = Om = {}));
    var Mm;
    (function(e) {
        e.Accepted = "Accepted",
        e.UserFallBack = "UserFallBack",
        e.Cancelled = "Cancelled",
        e.Denied = "Denied",
        e.NotEnabled = "NotEnabled"
    }
    )(Mm || (a.SystemUnlockResponse = Mm = {}));
    var Rm;
    (function(e) {
        e.ItemSearch = "item_search",
        e.SetUpAnotherDevice = "set_up_another_device",
        e.Homepage = "homepage",
        e.Watchtower = "watchtower",
        e.ActivationHub = "activation_hub",
        e.ManualItemCreate = "manual_item_create",
        e.ItemImport = "item_import",
        e.ExtensionSetup = "extension_setup",
        e.SetUpAutofill = "set_up_autofill",
        e.MobileAutofillTutorial = "mobile_autofill_tutorial",
        e.ExtensionSaveFillTutorial = "extension_save_fill_tutorial",
        e.ManageAccount = "manage_account",
        e.Accounts = "accounts",
        e.InviteMembers = "invite_members",
        e.ItemSharing = "item_sharing",
        e.ExportItems = "export_items",
        e.GitCommitSigning = "git_commit_signing",
        e.DeveloperExperience = "developer_experience",
        e.SshBookmarks = "ssh_bookmarks",
        e.Item = "item",
        e.PasskeySave = "passkey_save",
        e.ChromeAutofillPrompt = "chrome_autofill_prompt",
        e.DeveloperSettings = "developer_settings",
        e.AntiPeekMode = "anti_peek_mode",
        e.PrivacySettings = "privacy_settings"
    }
    )(Rm || (a.TelemetryCategory = Rm = {}));
    var Nm;
    (function(e) {
        e.Allow = "allow",
        e.Deny = "deny",
        e.Dismiss = "dismiss"
    }
    )(Nm || (a.UserPromptResponse = Nm = {}));
    var Um;
    (function(e) {
        e.Success = "success",
        e.Failure = "failure"
    }
    )(Um || (a.ValidateRecoveryCodeResponse = Um = {}));
    var Dm;
    (function(e) {
        e.Initialization = "initialization",
        e.Create = "create",
        e.Edit = "edit",
        e.Delete = "delete"
    }
    )(Dm || (a.VaultError = Dm = {}));
    var Fm;
    (function(e) {
        e.Private = "Private",
        e.Others = "Others",
        e.Everyone = "Everyone"
    }
    )(Fm || (a.VaultItemViewability = Fm = {}));
    var _m;
    (function(e) {
        e.CannotRemoveReadWithoutManage = "cannotRemoveReadWithoutManage"
    }
    )(_m || (a.VaultPermissionsCannotModifyReason = _m = {}));
    var Bm;
    (function(e) {
        e.Simplified = "simplified"
    }
    )(Bm || (a.VaultPermissionsMethod = Bm = {}));
    var Hm;
    (function(e) {
        e.Success = "success",
        e.Error = "error"
    }
    )(Hm || (a.WebAuthnSignUpAddAccountResponse = Hm = {}));
    var qm;
    (function(e) {
        e.Failed = "failed"
    }
    )(qm || (a.WebMdError = qm = {}));
    var zm;
    (function(e) {
        e.QuickAccess = "quickAccess",
        e.SsoAuthPrompt = "ssoAuthPrompt"
    }
    )(zm || (a.WindowFocusPurpose = zm = {}));
    var Wm;
    (function(e) {
        e.CleanUp = "CleanUp",
        e.ConnectionInterrupted = "ConnectionInterrupted",
        e.ConnectionInvalidated = "ConnectionInvalidated",
        e.ConnectionTimeout = "ConnectionTimeout",
        e.ContextDropped = "ContextDropped",
        e.ServerInvalid = "ServerInvalid"
    }
    )(Wm || (a.XpcDisconnectReason = Wm = {}))
}
);
var ar = x( (Qz, ov) => {
    var wI = "2.0.0"
      , bI = Number.MAX_SAFE_INTEGER || 9007199254740991
      , SI = 16
      , PI = 250
      , EI = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
    ov.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: SI,
        MAX_SAFE_BUILD_LENGTH: PI,
        MAX_SAFE_INTEGER: bI,
        RELEASE_TYPES: EI,
        SEMVER_SPEC_VERSION: wI,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
    }
}
);
var sr = x( (Jz, iv) => {
    var xI = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {}
    ;
    iv.exports = xI
}
);
var hn = x( (rt, av) => {
    var {MAX_SAFE_COMPONENT_LENGTH: ua, MAX_SAFE_BUILD_LENGTH: AI, MAX_LENGTH: TI} = ar()
      , kI = sr();
    rt = av.exports = {};
    var CI = rt.re = []
      , II = rt.safeRe = []
      , P = rt.src = []
      , E = rt.t = {}
      , LI = 0
      , ca = "[a-zA-Z0-9-]"
      , OI = [["\\s", 1], ["\\d", TI], [ca, AI]]
      , MI = e => {
        for (let[t,n] of OI)
            e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
        return e
    }
      , O = (e, t, n) => {
        let r = MI(t)
          , o = LI++;
        kI(e, o, t),
        E[e] = o,
        P[o] = t,
        CI[o] = new RegExp(t,n ? "g" : void 0),
        II[o] = new RegExp(r,n ? "g" : void 0)
    }
    ;
    O("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    O("NUMERICIDENTIFIERLOOSE", "\\d+");
    O("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${ca}*`);
    O("MAINVERSION", `(${P[E.NUMERICIDENTIFIER]})\\.(${P[E.NUMERICIDENTIFIER]})\\.(${P[E.NUMERICIDENTIFIER]})`);
    O("MAINVERSIONLOOSE", `(${P[E.NUMERICIDENTIFIERLOOSE]})\\.(${P[E.NUMERICIDENTIFIERLOOSE]})\\.(${P[E.NUMERICIDENTIFIERLOOSE]})`);
    O("PRERELEASEIDENTIFIER", `(?:${P[E.NUMERICIDENTIFIER]}|${P[E.NONNUMERICIDENTIFIER]})`);
    O("PRERELEASEIDENTIFIERLOOSE", `(?:${P[E.NUMERICIDENTIFIERLOOSE]}|${P[E.NONNUMERICIDENTIFIER]})`);
    O("PRERELEASE", `(?:-(${P[E.PRERELEASEIDENTIFIER]}(?:\\.${P[E.PRERELEASEIDENTIFIER]})*))`);
    O("PRERELEASELOOSE", `(?:-?(${P[E.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${P[E.PRERELEASEIDENTIFIERLOOSE]})*))`);
    O("BUILDIDENTIFIER", `${ca}+`);
    O("BUILD", `(?:\\+(${P[E.BUILDIDENTIFIER]}(?:\\.${P[E.BUILDIDENTIFIER]})*))`);
    O("FULLPLAIN", `v?${P[E.MAINVERSION]}${P[E.PRERELEASE]}?${P[E.BUILD]}?`);
    O("FULL", `^${P[E.FULLPLAIN]}$`);
    O("LOOSEPLAIN", `[v=\\s]*${P[E.MAINVERSIONLOOSE]}${P[E.PRERELEASELOOSE]}?${P[E.BUILD]}?`);
    O("LOOSE", `^${P[E.LOOSEPLAIN]}$`);
    O("GTLT", "((?:<|>)?=?)");
    O("XRANGEIDENTIFIERLOOSE", `${P[E.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    O("XRANGEIDENTIFIER", `${P[E.NUMERICIDENTIFIER]}|x|X|\\*`);
    O("XRANGEPLAIN", `[v=\\s]*(${P[E.XRANGEIDENTIFIER]})(?:\\.(${P[E.XRANGEIDENTIFIER]})(?:\\.(${P[E.XRANGEIDENTIFIER]})(?:${P[E.PRERELEASE]})?${P[E.BUILD]}?)?)?`);
    O("XRANGEPLAINLOOSE", `[v=\\s]*(${P[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${P[E.XRANGEIDENTIFIERLOOSE]})(?:\\.(${P[E.XRANGEIDENTIFIERLOOSE]})(?:${P[E.PRERELEASELOOSE]})?${P[E.BUILD]}?)?)?`);
    O("XRANGE", `^${P[E.GTLT]}\\s*${P[E.XRANGEPLAIN]}$`);
    O("XRANGELOOSE", `^${P[E.GTLT]}\\s*${P[E.XRANGEPLAINLOOSE]}$`);
    O("COERCEPLAIN", `(^|[^\\d])(\\d{1,${ua}})(?:\\.(\\d{1,${ua}}))?(?:\\.(\\d{1,${ua}}))?`);
    O("COERCE", `${P[E.COERCEPLAIN]}(?:$|[^\\d])`);
    O("COERCEFULL", P[E.COERCEPLAIN] + `(?:${P[E.PRERELEASE]})?(?:${P[E.BUILD]})?(?:$|[^\\d])`);
    O("COERCERTL", P[E.COERCE], !0);
    O("COERCERTLFULL", P[E.COERCEFULL], !0);
    O("LONETILDE", "(?:~>?)");
    O("TILDETRIM", `(\\s*)${P[E.LONETILDE]}\\s+`, !0);
    rt.tildeTrimReplace = "$1~";
    O("TILDE", `^${P[E.LONETILDE]}${P[E.XRANGEPLAIN]}$`);
    O("TILDELOOSE", `^${P[E.LONETILDE]}${P[E.XRANGEPLAINLOOSE]}$`);
    O("LONECARET", "(?:\\^)");
    O("CARETTRIM", `(\\s*)${P[E.LONECARET]}\\s+`, !0);
    rt.caretTrimReplace = "$1^";
    O("CARET", `^${P[E.LONECARET]}${P[E.XRANGEPLAIN]}$`);
    O("CARETLOOSE", `^${P[E.LONECARET]}${P[E.XRANGEPLAINLOOSE]}$`);
    O("COMPARATORLOOSE", `^${P[E.GTLT]}\\s*(${P[E.LOOSEPLAIN]})$|^$`);
    O("COMPARATOR", `^${P[E.GTLT]}\\s*(${P[E.FULLPLAIN]})$|^$`);
    O("COMPARATORTRIM", `(\\s*)${P[E.GTLT]}\\s*(${P[E.LOOSEPLAIN]}|${P[E.XRANGEPLAIN]})`, !0);
    rt.comparatorTrimReplace = "$1$2$3";
    O("HYPHENRANGE", `^\\s*(${P[E.XRANGEPLAIN]})\\s+-\\s+(${P[E.XRANGEPLAIN]})\\s*$`);
    O("HYPHENRANGELOOSE", `^\\s*(${P[E.XRANGEPLAINLOOSE]})\\s+-\\s+(${P[E.XRANGEPLAINLOOSE]})\\s*$`);
    O("STAR", "(<|>)?=?\\s*\\*");
    O("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    O("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
}
);
var vo = x( (Zz, sv) => {
    var RI = Object.freeze({
        loose: !0
    })
      , NI = Object.freeze({})
      , UI = e => e ? typeof e != "object" ? RI : e : NI;
    sv.exports = UI
}
);
var da = x( (eW, dv) => {
    var uv = /^[0-9]+$/
      , cv = (e, t) => {
        let n = uv.test(e)
          , r = uv.test(t);
        return n && r && (e = +e,
        t = +t),
        e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
    }
      , DI = (e, t) => cv(t, e);
    dv.exports = {
        compareIdentifiers: cv,
        rcompareIdentifiers: DI
    }
}
);
var we = x( (tW, mv) => {
    var yo = sr()
      , {MAX_LENGTH: lv, MAX_SAFE_INTEGER: wo} = ar()
      , {safeRe: fv, t: pv} = hn()
      , FI = vo()
      , {compareIdentifiers: vn} = da()
      , la = class e {
        constructor(t, n) {
            if (n = FI(n),
            t instanceof e) {
                if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease)
                    return t;
                t = t.version
            } else if (typeof t != "string")
                throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
            if (t.length > lv)
                throw new TypeError(`version is longer than ${lv} characters`);
            yo("SemVer", t, n),
            this.options = n,
            this.loose = !!n.loose,
            this.includePrerelease = !!n.includePrerelease;
            let r = t.trim().match(n.loose ? fv[pv.LOOSE] : fv[pv.FULL]);
            if (!r)
                throw new TypeError(`Invalid Version: ${t}`);
            if (this.raw = t,
            this.major = +r[1],
            this.minor = +r[2],
            this.patch = +r[3],
            this.major > wo || this.major < 0)
                throw new TypeError("Invalid major version");
            if (this.minor > wo || this.minor < 0)
                throw new TypeError("Invalid minor version");
            if (this.patch > wo || this.patch < 0)
                throw new TypeError("Invalid patch version");
            r[4] ? this.prerelease = r[4].split(".").map(o => {
                if (/^[0-9]+$/.test(o)) {
                    let i = +o;
                    if (i >= 0 && i < wo)
                        return i
                }
                return o
            }
            ) : this.prerelease = [],
            this.build = r[5] ? r[5].split(".") : [],
            this.format()
        }
        format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`,
            this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
            this.version
        }
        toString() {
            return this.version
        }
        compare(t) {
            if (yo("SemVer.compare", this.version, this.options, t),
            !(t instanceof e)) {
                if (typeof t == "string" && t === this.version)
                    return 0;
                t = new e(t,this.options)
            }
            return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
        }
        compareMain(t) {
            return t instanceof e || (t = new e(t,this.options)),
            vn(this.major, t.major) || vn(this.minor, t.minor) || vn(this.patch, t.patch)
        }
        comparePre(t) {
            if (t instanceof e || (t = new e(t,this.options)),
            this.prerelease.length && !t.prerelease.length)
                return -1;
            if (!this.prerelease.length && t.prerelease.length)
                return 1;
            if (!this.prerelease.length && !t.prerelease.length)
                return 0;
            let n = 0;
            do {
                let r = this.prerelease[n]
                  , o = t.prerelease[n];
                if (yo("prerelease compare", n, r, o),
                r === void 0 && o === void 0)
                    return 0;
                if (o === void 0)
                    return 1;
                if (r === void 0)
                    return -1;
                if (r === o)
                    continue;
                return vn(r, o)
            } while (++n)
        }
        compareBuild(t) {
            t instanceof e || (t = new e(t,this.options));
            let n = 0;
            do {
                let r = this.build[n]
                  , o = t.build[n];
                if (yo("build compare", n, r, o),
                r === void 0 && o === void 0)
                    return 0;
                if (o === void 0)
                    return 1;
                if (r === void 0)
                    return -1;
                if (r === o)
                    continue;
                return vn(r, o)
            } while (++n)
        }
        inc(t, n, r) {
            switch (t) {
            case "premajor":
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor = 0,
                this.major++,
                this.inc("pre", n, r);
                break;
            case "preminor":
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor++,
                this.inc("pre", n, r);
                break;
            case "prepatch":
                this.prerelease.length = 0,
                this.inc("patch", n, r),
                this.inc("pre", n, r);
                break;
            case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", n, r),
                this.inc("pre", n, r);
                break;
            case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++,
                this.minor = 0,
                this.patch = 0,
                this.prerelease = [];
                break;
            case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
                this.patch = 0,
                this.prerelease = [];
                break;
            case "patch":
                this.prerelease.length === 0 && this.patch++,
                this.prerelease = [];
                break;
            case "pre":
                {
                    let o = Number(r) ? 1 : 0;
                    if (!n && r === !1)
                        throw new Error("invalid increment argument: identifier is empty");
                    if (this.prerelease.length === 0)
                        this.prerelease = [o];
                    else {
                        let i = this.prerelease.length;
                        for (; --i >= 0; )
                            typeof this.prerelease[i] == "number" && (this.prerelease[i]++,
                            i = -2);
                        if (i === -1) {
                            if (n === this.prerelease.join(".") && r === !1)
                                throw new Error("invalid increment argument: identifier already exists");
                            this.prerelease.push(o)
                        }
                    }
                    if (n) {
                        let i = [n, o];
                        r === !1 && (i = [n]),
                        vn(this.prerelease[0], n) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i
                    }
                    break
                }
            default:
                throw new Error(`invalid increment argument: ${t}`)
            }
            return this.raw = this.format(),
            this.build.length && (this.raw += `+${this.build.join(".")}`),
            this
        }
    }
    ;
    mv.exports = la
}
);
var Bt = x( (nW, hv) => {
    var gv = we()
      , _I = (e, t, n=!1) => {
        if (e instanceof gv)
            return e;
        try {
            return new gv(e,t)
        } catch (r) {
            if (!n)
                return null;
            throw r
        }
    }
    ;
    hv.exports = _I
}
);
var yv = x( (rW, vv) => {
    var BI = Bt()
      , HI = (e, t) => {
        let n = BI(e, t);
        return n ? n.version : null
    }
    ;
    vv.exports = HI
}
);
var bv = x( (oW, wv) => {
    var qI = Bt()
      , zI = (e, t) => {
        let n = qI(e.trim().replace(/^[=v]+/, ""), t);
        return n ? n.version : null
    }
    ;
    wv.exports = zI
}
);
var Ev = x( (iW, Pv) => {
    var Sv = we()
      , WI = (e, t, n, r, o) => {
        typeof n == "string" && (o = r,
        r = n,
        n = void 0);
        try {
            return new Sv(e instanceof Sv ? e.version : e,n).inc(t, r, o).version
        } catch {
            return null
        }
    }
    ;
    Pv.exports = WI
}
);
var Tv = x( (aW, Av) => {
    var xv = Bt()
      , jI = (e, t) => {
        let n = xv(e, null, !0)
          , r = xv(t, null, !0)
          , o = n.compare(r);
        if (o === 0)
            return null;
        let i = o > 0
          , s = i ? n : r
          , u = i ? r : n
          , d = !!s.prerelease.length;
        if (!!u.prerelease.length && !d)
            return !u.patch && !u.minor ? "major" : s.patch ? "patch" : s.minor ? "minor" : "major";
        let p = d ? "pre" : "";
        return n.major !== r.major ? p + "major" : n.minor !== r.minor ? p + "minor" : n.patch !== r.patch ? p + "patch" : "prerelease"
    }
    ;
    Av.exports = jI
}
);
var Cv = x( (sW, kv) => {
    var VI = we()
      , GI = (e, t) => new VI(e,t).major;
    kv.exports = GI
}
);
var Lv = x( (uW, Iv) => {
    var KI = we()
      , $I = (e, t) => new KI(e,t).minor;
    Iv.exports = $I
}
);
var Mv = x( (cW, Ov) => {
    var YI = we()
      , XI = (e, t) => new YI(e,t).patch;
    Ov.exports = XI
}
);
var Nv = x( (dW, Rv) => {
    var QI = Bt()
      , JI = (e, t) => {
        let n = QI(e, t);
        return n && n.prerelease.length ? n.prerelease : null
    }
    ;
    Rv.exports = JI
}
);
var _e = x( (lW, Dv) => {
    var Uv = we()
      , ZI = (e, t, n) => new Uv(e,n).compare(new Uv(t,n));
    Dv.exports = ZI
}
);
var _v = x( (fW, Fv) => {
    var eL = _e()
      , tL = (e, t, n) => eL(t, e, n);
    Fv.exports = tL
}
);
var Hv = x( (pW, Bv) => {
    var nL = _e()
      , rL = (e, t) => nL(e, t, !0);
    Bv.exports = rL
}
);
var bo = x( (mW, zv) => {
    var qv = we()
      , oL = (e, t, n) => {
        let r = new qv(e,n)
          , o = new qv(t,n);
        return r.compare(o) || r.compareBuild(o)
    }
    ;
    zv.exports = oL
}
);
var jv = x( (gW, Wv) => {
    var iL = bo()
      , aL = (e, t) => e.sort( (n, r) => iL(n, r, t));
    Wv.exports = aL
}
);
var Gv = x( (hW, Vv) => {
    var sL = bo()
      , uL = (e, t) => e.sort( (n, r) => sL(r, n, t));
    Vv.exports = uL
}
);
var ur = x( (vW, Kv) => {
    var cL = _e()
      , dL = (e, t, n) => cL(e, t, n) > 0;
    Kv.exports = dL
}
);
var So = x( (yW, $v) => {
    var lL = _e()
      , fL = (e, t, n) => lL(e, t, n) < 0;
    $v.exports = fL
}
);
var fa = x( (wW, Yv) => {
    var pL = _e()
      , mL = (e, t, n) => pL(e, t, n) === 0;
    Yv.exports = mL
}
);
var pa = x( (bW, Xv) => {
    var gL = _e()
      , hL = (e, t, n) => gL(e, t, n) !== 0;
    Xv.exports = hL
}
);
var Po = x( (SW, Qv) => {
    var vL = _e()
      , yL = (e, t, n) => vL(e, t, n) >= 0;
    Qv.exports = yL
}
);
var Eo = x( (PW, Jv) => {
    var wL = _e()
      , bL = (e, t, n) => wL(e, t, n) <= 0;
    Jv.exports = bL
}
);
var ma = x( (EW, Zv) => {
    var SL = fa()
      , PL = pa()
      , EL = ur()
      , xL = Po()
      , AL = So()
      , TL = Eo()
      , kL = (e, t, n, r) => {
        switch (t) {
        case "===":
            return typeof e == "object" && (e = e.version),
            typeof n == "object" && (n = n.version),
            e === n;
        case "!==":
            return typeof e == "object" && (e = e.version),
            typeof n == "object" && (n = n.version),
            e !== n;
        case "":
        case "=":
        case "==":
            return SL(e, n, r);
        case "!=":
            return PL(e, n, r);
        case ">":
            return EL(e, n, r);
        case ">=":
            return xL(e, n, r);
        case "<":
            return AL(e, n, r);
        case "<=":
            return TL(e, n, r);
        default:
            throw new TypeError(`Invalid operator: ${t}`)
        }
    }
    ;
    Zv.exports = kL
}
);
var ty = x( (xW, ey) => {
    var CL = we()
      , IL = Bt()
      , {safeRe: xo, t: Ao} = hn()
      , LL = (e, t) => {
        if (e instanceof CL)
            return e;
        if (typeof e == "number" && (e = String(e)),
        typeof e != "string")
            return null;
        t = t || {};
        let n = null;
        if (!t.rtl)
            n = e.match(t.includePrerelease ? xo[Ao.COERCEFULL] : xo[Ao.COERCE]);
        else {
            let d = t.includePrerelease ? xo[Ao.COERCERTLFULL] : xo[Ao.COERCERTL], l;
            for (; (l = d.exec(e)) && (!n || n.index + n[0].length !== e.length); )
                (!n || l.index + l[0].length !== n.index + n[0].length) && (n = l),
                d.lastIndex = l.index + l[1].length + l[2].length;
            d.lastIndex = -1
        }
        if (n === null)
            return null;
        let r = n[2]
          , o = n[3] || "0"
          , i = n[4] || "0"
          , s = t.includePrerelease && n[5] ? `-${n[5]}` : ""
          , u = t.includePrerelease && n[6] ? `+${n[6]}` : "";
        return IL(`${r}.${o}.${i}${s}${u}`, t)
    }
    ;
    ey.exports = LL
}
);
var ry = x( (AW, ny) => {
    var ga = class {
        constructor() {
            this.max = 1e3,
            this.map = new Map
        }
        get(t) {
            let n = this.map.get(t);
            if (n !== void 0)
                return this.map.delete(t),
                this.map.set(t, n),
                n
        }
        delete(t) {
            return this.map.delete(t)
        }
        set(t, n) {
            if (!this.delete(t) && n !== void 0) {
                if (this.map.size >= this.max) {
                    let o = this.map.keys().next().value;
                    this.delete(o)
                }
                this.map.set(t, n)
            }
            return this
        }
    }
    ;
    ny.exports = ga
}
);
var Be = x( (TW, sy) => {
    var ha = class e {
        constructor(t, n) {
            if (n = ML(n),
            t instanceof e)
                return t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease ? t : new e(t.raw,n);
            if (t instanceof va)
                return this.raw = t.value,
                this.set = [[t]],
                this.format(),
                this;
            if (this.options = n,
            this.loose = !!n.loose,
            this.includePrerelease = !!n.includePrerelease,
            this.raw = t.trim().split(/\s+/).join(" "),
            this.set = this.raw.split("||").map(r => this.parseRange(r.trim())).filter(r => r.length),
            !this.set.length)
                throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                let r = this.set[0];
                if (this.set = this.set.filter(o => !iy(o[0])),
                this.set.length === 0)
                    this.set = [r];
                else if (this.set.length > 1) {
                    for (let o of this.set)
                        if (o.length === 1 && BL(o[0])) {
                            this.set = [o];
                            break
                        }
                }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(t => t.join(" ").trim()).join("||").trim(),
            this.range
        }
        toString() {
            return this.range
        }
        parseRange(t) {
            let r = ((this.options.includePrerelease && FL) | (this.options.loose && _L)) + ":" + t
              , o = oy.get(r);
            if (o)
                return o;
            let i = this.options.loose
              , s = i ? Ae[be.HYPHENRANGELOOSE] : Ae[be.HYPHENRANGE];
            t = t.replace(s, YL(this.options.includePrerelease)),
            G("hyphen replace", t),
            t = t.replace(Ae[be.COMPARATORTRIM], NL),
            G("comparator trim", t),
            t = t.replace(Ae[be.TILDETRIM], UL),
            G("tilde trim", t),
            t = t.replace(Ae[be.CARETTRIM], DL),
            G("caret trim", t);
            let u = t.split(" ").map(m => HL(m, this.options)).join(" ").split(/\s+/).map(m => $L(m, this.options));
            i && (u = u.filter(m => (G("loose invalid filter", m, this.options),
            !!m.match(Ae[be.COMPARATORLOOSE])))),
            G("range list", u);
            let d = new Map
              , l = u.map(m => new va(m,this.options));
            for (let m of l) {
                if (iy(m))
                    return [m];
                d.set(m.value, m)
            }
            d.size > 1 && d.has("") && d.delete("");
            let p = [...d.values()];
            return oy.set(r, p),
            p
        }
        intersects(t, n) {
            if (!(t instanceof e))
                throw new TypeError("a Range is required");
            return this.set.some(r => ay(r, n) && t.set.some(o => ay(o, n) && r.every(i => o.every(s => i.intersects(s, n)))))
        }
        test(t) {
            if (!t)
                return !1;
            if (typeof t == "string")
                try {
                    t = new RL(t,this.options)
                } catch {
                    return !1
                }
            for (let n = 0; n < this.set.length; n++)
                if (XL(this.set[n], t, this.options))
                    return !0;
            return !1
        }
    }
    ;
    sy.exports = ha;
    var OL = ry()
      , oy = new OL
      , ML = vo()
      , va = cr()
      , G = sr()
      , RL = we()
      , {safeRe: Ae, t: be, comparatorTrimReplace: NL, tildeTrimReplace: UL, caretTrimReplace: DL} = hn()
      , {FLAG_INCLUDE_PRERELEASE: FL, FLAG_LOOSE: _L} = ar()
      , iy = e => e.value === "<0.0.0-0"
      , BL = e => e.value === ""
      , ay = (e, t) => {
        let n = !0
          , r = e.slice()
          , o = r.pop();
        for (; n && r.length; )
            n = r.every(i => o.intersects(i, t)),
            o = r.pop();
        return n
    }
      , HL = (e, t) => (G("comp", e, t),
    e = WL(e, t),
    G("caret", e),
    e = qL(e, t),
    G("tildes", e),
    e = VL(e, t),
    G("xrange", e),
    e = KL(e, t),
    G("stars", e),
    e)
      , Se = e => !e || e.toLowerCase() === "x" || e === "*"
      , qL = (e, t) => e.trim().split(/\s+/).map(n => zL(n, t)).join(" ")
      , zL = (e, t) => {
        let n = t.loose ? Ae[be.TILDELOOSE] : Ae[be.TILDE];
        return e.replace(n, (r, o, i, s, u) => {
            G("tilde", e, r, o, i, s, u);
            let d;
            return Se(o) ? d = "" : Se(i) ? d = `>=${o}.0.0 <${+o + 1}.0.0-0` : Se(s) ? d = `>=${o}.${i}.0 <${o}.${+i + 1}.0-0` : u ? (G("replaceTilde pr", u),
            d = `>=${o}.${i}.${s}-${u} <${o}.${+i + 1}.0-0`) : d = `>=${o}.${i}.${s} <${o}.${+i + 1}.0-0`,
            G("tilde return", d),
            d
        }
        )
    }
      , WL = (e, t) => e.trim().split(/\s+/).map(n => jL(n, t)).join(" ")
      , jL = (e, t) => {
        G("caret", e, t);
        let n = t.loose ? Ae[be.CARETLOOSE] : Ae[be.CARET]
          , r = t.includePrerelease ? "-0" : "";
        return e.replace(n, (o, i, s, u, d) => {
            G("caret", e, o, i, s, u, d);
            let l;
            return Se(i) ? l = "" : Se(s) ? l = `>=${i}.0.0${r} <${+i + 1}.0.0-0` : Se(u) ? i === "0" ? l = `>=${i}.${s}.0${r} <${i}.${+s + 1}.0-0` : l = `>=${i}.${s}.0${r} <${+i + 1}.0.0-0` : d ? (G("replaceCaret pr", d),
            i === "0" ? s === "0" ? l = `>=${i}.${s}.${u}-${d} <${i}.${s}.${+u + 1}-0` : l = `>=${i}.${s}.${u}-${d} <${i}.${+s + 1}.0-0` : l = `>=${i}.${s}.${u}-${d} <${+i + 1}.0.0-0`) : (G("no pr"),
            i === "0" ? s === "0" ? l = `>=${i}.${s}.${u}${r} <${i}.${s}.${+u + 1}-0` : l = `>=${i}.${s}.${u}${r} <${i}.${+s + 1}.0-0` : l = `>=${i}.${s}.${u} <${+i + 1}.0.0-0`),
            G("caret return", l),
            l
        }
        )
    }
      , VL = (e, t) => (G("replaceXRanges", e, t),
    e.split(/\s+/).map(n => GL(n, t)).join(" "))
      , GL = (e, t) => {
        e = e.trim();
        let n = t.loose ? Ae[be.XRANGELOOSE] : Ae[be.XRANGE];
        return e.replace(n, (r, o, i, s, u, d) => {
            G("xRange", e, r, o, i, s, u, d);
            let l = Se(i)
              , p = l || Se(s)
              , m = p || Se(u)
              , g = m;
            return o === "=" && g && (o = ""),
            d = t.includePrerelease ? "-0" : "",
            l ? o === ">" || o === "<" ? r = "<0.0.0-0" : r = "*" : o && g ? (p && (s = 0),
            u = 0,
            o === ">" ? (o = ">=",
            p ? (i = +i + 1,
            s = 0,
            u = 0) : (s = +s + 1,
            u = 0)) : o === "<=" && (o = "<",
            p ? i = +i + 1 : s = +s + 1),
            o === "<" && (d = "-0"),
            r = `${o + i}.${s}.${u}${d}`) : p ? r = `>=${i}.0.0${d} <${+i + 1}.0.0-0` : m && (r = `>=${i}.${s}.0${d} <${i}.${+s + 1}.0-0`),
            G("xRange return", r),
            r
        }
        )
    }
      , KL = (e, t) => (G("replaceStars", e, t),
    e.trim().replace(Ae[be.STAR], ""))
      , $L = (e, t) => (G("replaceGTE0", e, t),
    e.trim().replace(Ae[t.includePrerelease ? be.GTE0PRE : be.GTE0], ""))
      , YL = e => (t, n, r, o, i, s, u, d, l, p, m, g) => (Se(r) ? n = "" : Se(o) ? n = `>=${r}.0.0${e ? "-0" : ""}` : Se(i) ? n = `>=${r}.${o}.0${e ? "-0" : ""}` : s ? n = `>=${n}` : n = `>=${n}${e ? "-0" : ""}`,
    Se(l) ? d = "" : Se(p) ? d = `<${+l + 1}.0.0-0` : Se(m) ? d = `<${l}.${+p + 1}.0-0` : g ? d = `<=${l}.${p}.${m}-${g}` : e ? d = `<${l}.${p}.${+m + 1}-0` : d = `<=${d}`,
    `${n} ${d}`.trim())
      , XL = (e, t, n) => {
        for (let r = 0; r < e.length; r++)
            if (!e[r].test(t))
                return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (let r = 0; r < e.length; r++)
                if (G(e[r].semver),
                e[r].semver !== va.ANY && e[r].semver.prerelease.length > 0) {
                    let o = e[r].semver;
                    if (o.major === t.major && o.minor === t.minor && o.patch === t.patch)
                        return !0
                }
            return !1
        }
        return !0
    }
}
);
var cr = x( (kW, py) => {
    var dr = Symbol("SemVer ANY")
      , ba = class e {
        static get ANY() {
            return dr
        }
        constructor(t, n) {
            if (n = uy(n),
            t instanceof e) {
                if (t.loose === !!n.loose)
                    return t;
                t = t.value
            }
            t = t.trim().split(/\s+/).join(" "),
            wa("comparator", t, n),
            this.options = n,
            this.loose = !!n.loose,
            this.parse(t),
            this.semver === dr ? this.value = "" : this.value = this.operator + this.semver.version,
            wa("comp", this)
        }
        parse(t) {
            let n = this.options.loose ? cy[dy.COMPARATORLOOSE] : cy[dy.COMPARATOR]
              , r = t.match(n);
            if (!r)
                throw new TypeError(`Invalid comparator: ${t}`);
            this.operator = r[1] !== void 0 ? r[1] : "",
            this.operator === "=" && (this.operator = ""),
            r[2] ? this.semver = new ly(r[2],this.options.loose) : this.semver = dr
        }
        toString() {
            return this.value
        }
        test(t) {
            if (wa("Comparator.test", t, this.options.loose),
            this.semver === dr || t === dr)
                return !0;
            if (typeof t == "string")
                try {
                    t = new ly(t,this.options)
                } catch {
                    return !1
                }
            return ya(t, this.operator, this.semver, this.options)
        }
        intersects(t, n) {
            if (!(t instanceof e))
                throw new TypeError("a Comparator is required");
            return this.operator === "" ? this.value === "" ? !0 : new fy(t.value,n).test(this.value) : t.operator === "" ? t.value === "" ? !0 : new fy(this.value,n).test(t.semver) : (n = uy(n),
            n.includePrerelease && (this.value === "<0.0.0-0" || t.value === "<0.0.0-0") || !n.includePrerelease && (this.value.startsWith("<0.0.0") || t.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && t.operator.startsWith(">") || this.operator.startsWith("<") && t.operator.startsWith("<") || this.semver.version === t.semver.version && this.operator.includes("=") && t.operator.includes("=") || ya(this.semver, "<", t.semver, n) && this.operator.startsWith(">") && t.operator.startsWith("<") || ya(this.semver, ">", t.semver, n) && this.operator.startsWith("<") && t.operator.startsWith(">")))
        }
    }
    ;
    py.exports = ba;
    var uy = vo()
      , {safeRe: cy, t: dy} = hn()
      , ya = ma()
      , wa = sr()
      , ly = we()
      , fy = Be()
}
);
var lr = x( (CW, my) => {
    var QL = Be()
      , JL = (e, t, n) => {
        try {
            t = new QL(t,n)
        } catch {
            return !1
        }
        return t.test(e)
    }
    ;
    my.exports = JL
}
);
var hy = x( (IW, gy) => {
    var ZL = Be()
      , eO = (e, t) => new ZL(e,t).set.map(n => n.map(r => r.value).join(" ").trim().split(" "));
    gy.exports = eO
}
);
var yy = x( (LW, vy) => {
    var tO = we()
      , nO = Be()
      , rO = (e, t, n) => {
        let r = null
          , o = null
          , i = null;
        try {
            i = new nO(t,n)
        } catch {
            return null
        }
        return e.forEach(s => {
            i.test(s) && (!r || o.compare(s) === -1) && (r = s,
            o = new tO(r,n))
        }
        ),
        r
    }
    ;
    vy.exports = rO
}
);
var by = x( (OW, wy) => {
    var oO = we()
      , iO = Be()
      , aO = (e, t, n) => {
        let r = null
          , o = null
          , i = null;
        try {
            i = new iO(t,n)
        } catch {
            return null
        }
        return e.forEach(s => {
            i.test(s) && (!r || o.compare(s) === 1) && (r = s,
            o = new oO(r,n))
        }
        ),
        r
    }
    ;
    wy.exports = aO
}
);
var Ey = x( (MW, Py) => {
    var Sa = we()
      , sO = Be()
      , Sy = ur()
      , uO = (e, t) => {
        e = new sO(e,t);
        let n = new Sa("0.0.0");
        if (e.test(n) || (n = new Sa("0.0.0-0"),
        e.test(n)))
            return n;
        n = null;
        for (let r = 0; r < e.set.length; ++r) {
            let o = e.set[r]
              , i = null;
            o.forEach(s => {
                let u = new Sa(s.semver.version);
                switch (s.operator) {
                case ">":
                    u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0),
                    u.raw = u.format();
                case "":
                case ">=":
                    (!i || Sy(u, i)) && (i = u);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw new Error(`Unexpected operation: ${s.operator}`)
                }
            }
            ),
            i && (!n || Sy(n, i)) && (n = i)
        }
        return n && e.test(n) ? n : null
    }
    ;
    Py.exports = uO
}
);
var Ay = x( (RW, xy) => {
    var cO = Be()
      , dO = (e, t) => {
        try {
            return new cO(e,t).range || "*"
        } catch {
            return null
        }
    }
    ;
    xy.exports = dO
}
);
var To = x( (NW, Iy) => {
    var lO = we()
      , Cy = cr()
      , {ANY: fO} = Cy
      , pO = Be()
      , mO = lr()
      , Ty = ur()
      , ky = So()
      , gO = Eo()
      , hO = Po()
      , vO = (e, t, n, r) => {
        e = new lO(e,r),
        t = new pO(t,r);
        let o, i, s, u, d;
        switch (n) {
        case ">":
            o = Ty,
            i = gO,
            s = ky,
            u = ">",
            d = ">=";
            break;
        case "<":
            o = ky,
            i = hO,
            s = Ty,
            u = "<",
            d = "<=";
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (mO(e, t, r))
            return !1;
        for (let l = 0; l < t.set.length; ++l) {
            let p = t.set[l]
              , m = null
              , g = null;
            if (p.forEach(h => {
                h.semver === fO && (h = new Cy(">=0.0.0")),
                m = m || h,
                g = g || h,
                o(h.semver, m.semver, r) ? m = h : s(h.semver, g.semver, r) && (g = h)
            }
            ),
            m.operator === u || m.operator === d || (!g.operator || g.operator === u) && i(e, g.semver))
                return !1;
            if (g.operator === d && s(e, g.semver))
                return !1
        }
        return !0
    }
    ;
    Iy.exports = vO
}
);
var Oy = x( (UW, Ly) => {
    var yO = To()
      , wO = (e, t, n) => yO(e, t, ">", n);
    Ly.exports = wO
}
);
var Ry = x( (DW, My) => {
    var bO = To()
      , SO = (e, t, n) => bO(e, t, "<", n);
    My.exports = SO
}
);
var Dy = x( (FW, Uy) => {
    var Ny = Be()
      , PO = (e, t, n) => (e = new Ny(e,n),
    t = new Ny(t,n),
    e.intersects(t, n));
    Uy.exports = PO
}
);
var _y = x( (_W, Fy) => {
    var EO = lr()
      , xO = _e();
    Fy.exports = (e, t, n) => {
        let r = []
          , o = null
          , i = null
          , s = e.sort( (p, m) => xO(p, m, n));
        for (let p of s)
            EO(p, t, n) ? (i = p,
            o || (o = p)) : (i && r.push([o, i]),
            i = null,
            o = null);
        o && r.push([o, null]);
        let u = [];
        for (let[p,m] of r)
            p === m ? u.push(p) : !m && p === s[0] ? u.push("*") : m ? p === s[0] ? u.push(`<=${m}`) : u.push(`${p} - ${m}`) : u.push(`>=${p}`);
        let d = u.join(" || ")
          , l = typeof t.raw == "string" ? t.raw : String(t);
        return d.length < l.length ? d : t
    }
}
);
var jy = x( (BW, Wy) => {
    var By = Be()
      , Ea = cr()
      , {ANY: Pa} = Ea
      , fr = lr()
      , xa = _e()
      , AO = (e, t, n={}) => {
        if (e === t)
            return !0;
        e = new By(e,n),
        t = new By(t,n);
        let r = !1;
        e: for (let o of e.set) {
            for (let i of t.set) {
                let s = kO(o, i, n);
                if (r = r || s !== null,
                s)
                    continue e
            }
            if (r)
                return !1
        }
        return !0
    }
      , TO = [new Ea(">=0.0.0-0")]
      , Hy = [new Ea(">=0.0.0")]
      , kO = (e, t, n) => {
        if (e === t)
            return !0;
        if (e.length === 1 && e[0].semver === Pa) {
            if (t.length === 1 && t[0].semver === Pa)
                return !0;
            n.includePrerelease ? e = TO : e = Hy
        }
        if (t.length === 1 && t[0].semver === Pa) {
            if (n.includePrerelease)
                return !0;
            t = Hy
        }
        let r = new Set, o, i;
        for (let h of e)
            h.operator === ">" || h.operator === ">=" ? o = qy(o, h, n) : h.operator === "<" || h.operator === "<=" ? i = zy(i, h, n) : r.add(h.semver);
        if (r.size > 1)
            return null;
        let s;
        if (o && i) {
            if (s = xa(o.semver, i.semver, n),
            s > 0)
                return null;
            if (s === 0 && (o.operator !== ">=" || i.operator !== "<="))
                return null
        }
        for (let h of r) {
            if (o && !fr(h, String(o), n) || i && !fr(h, String(i), n))
                return null;
            for (let b of t)
                if (!fr(h, String(b), n))
                    return !1;
            return !0
        }
        let u, d, l, p, m = i && !n.includePrerelease && i.semver.prerelease.length ? i.semver : !1, g = o && !n.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
        m && m.prerelease.length === 1 && i.operator === "<" && m.prerelease[0] === 0 && (m = !1);
        for (let h of t) {
            if (p = p || h.operator === ">" || h.operator === ">=",
            l = l || h.operator === "<" || h.operator === "<=",
            o) {
                if (g && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === g.major && h.semver.minor === g.minor && h.semver.patch === g.patch && (g = !1),
                h.operator === ">" || h.operator === ">=") {
                    if (u = qy(o, h, n),
                    u === h && u !== o)
                        return !1
                } else if (o.operator === ">=" && !fr(o.semver, String(h), n))
                    return !1
            }
            if (i) {
                if (m && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === m.major && h.semver.minor === m.minor && h.semver.patch === m.patch && (m = !1),
                h.operator === "<" || h.operator === "<=") {
                    if (d = zy(i, h, n),
                    d === h && d !== i)
                        return !1
                } else if (i.operator === "<=" && !fr(i.semver, String(h), n))
                    return !1
            }
            if (!h.operator && (i || o) && s !== 0)
                return !1
        }
        return !(o && l && !i && s !== 0 || i && p && !o && s !== 0 || g || m)
    }
      , qy = (e, t, n) => {
        if (!e)
            return t;
        let r = xa(e.semver, t.semver, n);
        return r > 0 ? e : r < 0 || t.operator === ">" && e.operator === ">=" ? t : e
    }
      , zy = (e, t, n) => {
        if (!e)
            return t;
        let r = xa(e.semver, t.semver, n);
        return r < 0 ? e : r > 0 || t.operator === "<" && e.operator === "<=" ? t : e
    }
    ;
    Wy.exports = AO
}
);
var $y = x( (HW, Ky) => {
    var Aa = hn()
      , Vy = ar()
      , CO = we()
      , Gy = da()
      , IO = Bt()
      , LO = yv()
      , OO = bv()
      , MO = Ev()
      , RO = Tv()
      , NO = Cv()
      , UO = Lv()
      , DO = Mv()
      , FO = Nv()
      , _O = _e()
      , BO = _v()
      , HO = Hv()
      , qO = bo()
      , zO = jv()
      , WO = Gv()
      , jO = ur()
      , VO = So()
      , GO = fa()
      , KO = pa()
      , $O = Po()
      , YO = Eo()
      , XO = ma()
      , QO = ty()
      , JO = cr()
      , ZO = Be()
      , eM = lr()
      , tM = hy()
      , nM = yy()
      , rM = by()
      , oM = Ey()
      , iM = Ay()
      , aM = To()
      , sM = Oy()
      , uM = Ry()
      , cM = Dy()
      , dM = _y()
      , lM = jy();
    Ky.exports = {
        parse: IO,
        valid: LO,
        clean: OO,
        inc: MO,
        diff: RO,
        major: NO,
        minor: UO,
        patch: DO,
        prerelease: FO,
        compare: _O,
        rcompare: BO,
        compareLoose: HO,
        compareBuild: qO,
        sort: zO,
        rsort: WO,
        gt: jO,
        lt: VO,
        eq: GO,
        neq: KO,
        gte: $O,
        lte: YO,
        cmp: XO,
        coerce: QO,
        Comparator: JO,
        Range: ZO,
        satisfies: eM,
        toComparators: tM,
        maxSatisfying: nM,
        minSatisfying: rM,
        minVersion: oM,
        validRange: iM,
        outside: aM,
        gtr: sM,
        ltr: uM,
        intersects: cM,
        simplifyRange: dM,
        subset: lM,
        SemVer: CO,
        re: Aa.re,
        src: Aa.src,
        tokens: Aa.t,
        SEMVER_SPEC_VERSION: Vy.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: Vy.RELEASE_TYPES,
        compareIdentifiers: Gy.compareIdentifiers,
        rcompareIdentifiers: Gy.rcompareIdentifiers
    }
}
);
var Mo = x( (jj, xw) => {
    var Ew = "Expected a function"
      , Sw = NaN
      , KM = "[object Symbol]"
      , $M = /^\s+|\s+$/g
      , YM = /^[-+]0x[0-9a-f]+$/i
      , XM = /^0b[01]+$/i
      , QM = /^0o[0-7]+$/i
      , JM = parseInt
      , ZM = typeof global == "object" && global && global.Object === Object && global
      , eR = typeof self == "object" && self && self.Object === Object && self
      , tR = ZM || eR || Function("return this")()
      , nR = Object.prototype
      , rR = nR.toString
      , oR = Math.max
      , iR = Math.min
      , Ba = function() {
        return tR.Date.now()
    };
    function aR(e, t, n) {
        var r, o, i, s, u, d, l = 0, p = !1, m = !1, g = !0;
        if (typeof e != "function")
            throw new TypeError(Ew);
        t = Pw(t) || 0,
        Oo(n) && (p = !!n.leading,
        m = "maxWait"in n,
        i = m ? oR(Pw(n.maxWait) || 0, t) : i,
        g = "trailing"in n ? !!n.trailing : g);
        function h(I) {
            var M = r
              , H = o;
            return r = o = void 0,
            l = I,
            s = e.apply(H, M),
            s
        }
        function b(I) {
            return l = I,
            u = setTimeout(k, t),
            p ? h(I) : s
        }
        function y(I) {
            var M = I - d
              , H = I - l
              , Y = t - M;
            return m ? iR(Y, i - H) : Y
        }
        function S(I) {
            var M = I - d
              , H = I - l;
            return d === void 0 || M >= t || M < 0 || m && H >= i
        }
        function k() {
            var I = Ba();
            if (S(I))
                return C(I);
            u = setTimeout(k, y(I))
        }
        function C(I) {
            return u = void 0,
            g && r ? h(I) : (r = o = void 0,
            s)
        }
        function N() {
            u !== void 0 && clearTimeout(u),
            l = 0,
            r = d = o = u = void 0
        }
        function L() {
            return u === void 0 ? s : C(Ba())
        }
        function U() {
            var I = Ba()
              , M = S(I);
            if (r = arguments,
            o = this,
            d = I,
            M) {
                if (u === void 0)
                    return b(d);
                if (m)
                    return u = setTimeout(k, t),
                    h(d)
            }
            return u === void 0 && (u = setTimeout(k, t)),
            s
        }
        return U.cancel = N,
        U.flush = L,
        U
    }
    function sR(e, t, n) {
        var r = !0
          , o = !0;
        if (typeof e != "function")
            throw new TypeError(Ew);
        return Oo(n) && (r = "leading"in n ? !!n.leading : r,
        o = "trailing"in n ? !!n.trailing : o),
        aR(e, t, {
            leading: r,
            maxWait: t,
            trailing: o
        })
    }
    function Oo(e) {
        var t = typeof e;
        return !!e && (t == "object" || t == "function")
    }
    function uR(e) {
        return !!e && typeof e == "object"
    }
    function cR(e) {
        return typeof e == "symbol" || uR(e) && rR.call(e) == KM
    }
    function Pw(e) {
        if (typeof e == "number")
            return e;
        if (cR(e))
            return Sw;
        if (Oo(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Oo(t) ? t + "" : t
        }
        if (typeof e != "string")
            return e === 0 ? e : +e;
        e = e.replace($M, "");
        var n = XM.test(e);
        return n || QM.test(e) ? JM(e.slice(2), n ? 2 : 8) : YM.test(e) ? Sw : +e
    }
    xw.exports = sR
}
);
var ms = x(Rn => {
    "use strict";
    Object.defineProperty(Rn, "__esModule", {
        value: !0
    });
    var X1 = /\s/g
      , Q1 = /\W/g;
    Rn.generator = {
        plain: function(e) {
            return e
        },
        hyphens: function(e) {
            var t = e.trim().replace(X1, "-").replace(Q1, "-");
            return t
        }
    };
    function J1(e, t) {
        var n = t.zero
          , r = t.one
          , o = t.other;
        return "{" + e + `, plural,
` + (n ? "	=0{" + n + `}
` : "") + (r ? "	one{" + r + `}
` : "") + ("	other{" + o + "}}")
    }
    Rn.Plural = J1;
    var Z1 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , eN = function(e) {
        return e.replace(/[&<>"']/g, function(t) {
            return Z1[t]
        })
    };
    Rn.splitAndEscapeReplacements = function(e) {
        var t = {}
          , n = {};
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var o = e[r];
                typeof o == "function" ? n[r] = o : typeof o == "string" ? t[r] = eN(o) : t[r] = o
            }
        return [t, n]
    }
    ;
    Rn.assign = function(e, t) {
        var n = Object(e);
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n
    }
}
);
var qb = x(Pr => {
    "use strict";
    Object.defineProperty(Pr, "__esModule", {
        value: !0
    });
    Pr.dateTimeFormats = {
        short: {
            month: "short",
            day: "numeric",
            year: "numeric"
        },
        long: {
            month: "long",
            day: "numeric",
            year: "numeric"
        },
        dateTime: {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        }
    };
    Pr.numberFormats = {
        currency: {
            style: "currency",
            currency: "USD"
        },
        decimal: {
            style: "decimal"
        },
        percent: {
            style: "percent"
        }
    };
    function tN(e) {
        var t = {};
        return function(n, r) {
            var o = Array.prototype.slice.call(arguments)
              , i = n + "-" + JSON.stringify(r);
            if (i in t)
                return t[i];
            var s = new ((u = Function.prototype.bind).call.apply(u, [e, null].concat(o)));
            return t[i] = s,
            s;
            var u
        }
    }
    Pr.default = tN
}
);
var Wb = x(gs => {
    "use strict";
    Object.defineProperty(gs, "__esModule", {
        value: !0
    });
    var zb = {
        OPEN: "{",
        CLOSE: "}"
    };
    function nN(e, t) {
        if (!t)
            return e;
        for (var n = "", r = [], o = 0; o < e.length; o++)
            switch (e.charAt(o)) {
            case zb.OPEN:
                r.push(n),
                n = "";
                break;
            case zb.CLOSE:
                r.push(t[n]),
                n = "";
                break;
            default:
                n += e.charAt(o)
            }
        return r.push(n),
        r.join("")
    }
    gs.default = nN
}
);
var Vb = x(ys => {
    "use strict";
    Object.defineProperty(ys, "__esModule", {
        value: !0
    });
    var hs = "wrap", vs;
    function rN(e, t) {
        typeof vs > "u" && (vs = new DOMParser);
        var n = vs.parseFromString("<" + hs + ">" + e + "</" + hs + ">", "text/xml");
        if (!n.firstChild || n.firstChild.nodeName !== hs)
            throw new Error("Could not parse XML string");
        return jb(n.firstChild, t, !0)
    }
    ys.default = rN;
    var oN = 1
      , iN = 3;
    function jb(e, t, n) {
        if (n === void 0 && (n = !1),
        e.nodeType === iN)
            return e.nodeValue ? [e.nodeValue] : [];
        if (e.nodeType === oN) {
            var r = Array.prototype.slice.call(e.childNodes)
              , o = r.reduce(function(i, s) {
                return i.concat(jb(s, t))
            }, []);
            return n || !t[e.nodeName] ? o : [t[e.nodeName].apply(t, o)]
        } else
            return []
    }
}
);
var Kb = x(Zt => {
    "use strict";
    Object.defineProperty(Zt, "__esModule", {
        value: !0
    });
    var Nn = qb()
      , ii = ms()
      , aN = Wb()
      , sN = Vb()
      , Gb = "en"
      , uN = function(e, t, n) {
        var r = e[t]
          , o = e[Gb];
        return r && r[n] ? r[n] : o && o[n] ? o[n] : ""
    }
      , cN = function(e) {
        if (typeof Intl > "u") {
            var t = function() {
                throw new Error("Missing Intl")
            };
            return {
                date: t,
                number: t
            }
        }
        var n = function() {
            var u = Intl.DateTimeFormat;
            function d() {
                var l = Array.prototype.slice.apply(arguments);
                return l[0] = l[0] || "en-US",
                l[1] = l[1] || {},
                l[1].timeZone = l[1].timeZone || "America/Toronto",
                u.apply(this, l)
            }
            return d.prototype = u.prototype,
            d
        };
        try {
            Intl.DateTimeFormat(),
            new Date().toLocaleString(),
            new Date().toLocaleDateString(),
            new Date().toLocaleTimeString()
        } catch {
            Date.prototype.toLocaleString = Date.prototype.toString,
            Date.prototype.toLocaleDateString = Date.prototype.toDateString,
            Date.prototype.toLocaleTimeString = Date.prototype.toTimeString,
            Intl.DateTimeFormat = n()
        }
        var r = Nn.default(Intl.DateTimeFormat)
          , o = Nn.default(Intl.NumberFormat)
          , i = function(u, d, l) {
            d === void 0 && (d = "long"),
            l === void 0 && (l = e());
            var p = Nn.dateTimeFormats[d] || Nn.dateTimeFormats.long;
            return r(l, p).format(u)
        }
          , s = function(u, d, l) {
            d === void 0 && (d = "decimal"),
            l === void 0 && (l = e());
            var p = Nn.numberFormats[d] || Nn.numberFormats.decimal;
            return o(l, p).format(u)
        };
        return {
            date: i,
            number: s
        }
    };
    Zt.makeBasicT = function() {
        var e = {}
          , t = Gb
          , n = ii.generator.hyphens
          , r = function(l) {
            return l === void 0 && (l = {}),
            e = l.messages || e,
            t = l.locale || t,
            n = l.idGenerator || n,
            {
                messages: e,
                locale: t,
                idGenerator: n
            }
        }
          , o = function(l) {
            return n(l)
        }
          , i = function(l, p, m) {
            p === void 0 && (p = {}),
            m === void 0 && (m = "");
            var g = uN(e, t, l) || m || l;
            return typeof g == "string" ? aN.default(g, p) : g(p)
        }
          , s = function(l, p, m) {
            return p === void 0 && (p = {}),
            m === void 0 && (m = ""),
            i(m || o(l), p, l)
        }
          , u = function(l, p, m) {
            p === void 0 && (p = {}),
            m === void 0 && (m = "");
            var g = ii.splitAndEscapeReplacements(p)
              , h = g[0]
              , b = g[1]
              , y = s(l, h, m);
            return sN.default(y, b)
        }
          , d = {
            $: u,
            generateId: o,
            locale: function() {
                return t
            },
            lookup: i,
            set: r
        };
        return ii.assign(s, d)
    }
    ;
    Zt.makeT = function() {
        var e = Zt.makeBasicT()
          , t = cN(e.locale);
        return ii.assign(e, t)
    }
    ;
    Zt.default = Zt.makeT()
}
);
var Yb = x(en => {
    "use strict";
    Object.defineProperty(en, "__esModule", {
        value: !0
    });
    var $b = ms();
    en.Plural = $b.Plural;
    en.generator = $b.generator;
    var ws = Kb();
    en.T = ws.default;
    en.makeBasicT = ws.makeBasicT;
    en.makeT = ws.makeT
}
);
var qn = () => Number(crypto.getRandomValues(new Uint32Array(1))[0])
  , Rs = () => crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
var ge = class e {
    constructor(t, n) {
        this.appName = t;
        this.traceReporter = n;
        this.appName = t,
        this.observerId = String(Rs()),
        this.performanceObserver = new PerformanceObserver(r => {
            r.getEntries().filter(o => !!o.detail?.spanId).forEach(o => {
                let i = this.buildDataDogPayload(o);
                if (i.meta.entryType === "measure")
                    try {
                        this.traceReporter(i)
                    } catch (s) {
                        console.error("Error in sending trace", s)
                    }
            }
            )
        }
        ),
        this.startObserver()
    }
    startObserver() {
        this.performanceObserver.observe({
            entryTypes: ["mark", "measure"]
        })
    }
    stopObserver() {
        this.performanceObserver.disconnect()
    }
    calculateEpochTime(t) {
        return Math.round(t + performance.timeOrigin)
    }
    buildDataDogPayload(t) {
        return {
            name: t.name,
            traceId: t.detail.traceId,
            spanId: t.detail.spanId,
            parentId: t.detail.parentSpanId,
            start: this.calculateEpochTime(t.startTime),
            duration: Math.round(t.duration * 1e6),
            service: this.appName,
            resource: t.name,
            type: "web",
            error: t.detail.error ? 1 : 0,
            meta: {
                observerId: this.observerId,
                entryType: t.entryType
            }
        }
    }
    static async observe(t, n, r) {
        let o = {
            name: t,
            spanId: qn(),
            traceId: r ? r.traceId : qn(),
            parentSpanId: r ? r.spanId : void 0,
            error: !1
        }
          , i = (s=!1) => {
            performance.measure(t, {
                start: `start-${t}`,
                detail: {
                    ...o,
                    error: s
                }
            })
        }
        ;
        try {
            performance.mark(`start-${t}`, {
                detail: o
            });
            let s = await n(o);
            return i(),
            s
        } catch (s) {
            throw i(!0),
            s
        }
    }
    static createActiveSpan(t, n) {
        let r = {
            name: t,
            spanId: qn(),
            traceId: n ? n.traceId : qn(),
            parentSpanId: n ? n.spanId : void 0,
            error: !1
        };
        return performance.mark(`start-${t}`, {
            detail: r
        }),
        r
    }
    static endActiveSpan(t, n=!1) {
        performance.measure(t.name, {
            start: `start-${t.name}`,
            detail: {
                ...t,
                error: n
            }
        })
    }
    static async conditionalObserve(t, ...n) {
        let[r,o,i] = n
          , s = o;
        return t ? e.observe(r, s, i) : o({
            name: "",
            spanId: 0,
            traceId: 0,
            parentSpanId: void 0,
            error: !1
        })
    }
}
;
var Hi = q(Mr());
var ki = _E;
function _E(e, t) {
    var n = {};
    typeof t == "string" && (t = [].slice.call(arguments, 1));
    for (var r = t.length, o = 0; o < r; o++) {
        var i = t[o];
        i in e && (n[i] = e[i])
    }
    return n
}
var pe = q(_i())
  , Bi = pe.union([pe.type({
    type: pe.literal("Success"),
    data: pe.unknown
}), pe.type({
    type: pe.literal("Error"),
    message: pe.unknown
}), pe.type({
    type: pe.literal("NoListener")
})])
  , ju = pe.type({
    name: pe.string,
    data: pe.unknown
});
var Vu = async (e, t) => new Promise( (n, r) => chrome.runtime.sendMessage(e, t, o => {
    if (chrome.runtime.lastError) {
        let i = chrome.runtime.lastError?.message || "Unable to send message with chrome.runtime.sendMessage";
        r(new Error(i))
    } else
        n(o)
}
))
  , Gu = async (e, t, n) => new Promise( (r, o) => chrome.tabs.sendMessage(e, t, n, i => {
    if (chrome.runtime.lastError) {
        let s = chrome.runtime.lastError?.message || "Unable to send message with chrome.tabs.sendMessage";
        o(new Error(s))
    } else
        r(i)
}
));
var vx = e => typeof e == "object" && e !== null && "name"in e && typeof e.name == "string" && "message"in e && typeof e.message == "string"
  , Ur = e => vx(e) ? e.message : "An unknown error occurred";
var qi = async (e, t) => t.tabId === void 0 ? yx(e, t) : wx(e, t)
  , yx = async (e, t) => {
    let n;
    try {
        n = await Vu(e, t)
    } catch (o) {
        let i = Ur(o);
        if (Ku(i))
            `${e.name}`;
        else if ($u(i))
            `${e.name}`;
        else if (!i)
            `${e.name}`;
        else
            throw new Error(`Unhandled error response received for message <${e.name}>`);
        return {
            type: "NoListener"
        }
    }
    if (!n)
        return {
            type: "Success",
            data: void 0
        };
    let r = Bi.decode(n);
    if ((0,
    Hi.isLeft)(r))
        throw Error(`Unable to decode response for message <${e.name}>`);
    return r.right
}
  , wx = async (e, {tabId: t, ...n}) => {
    let r;
    try {
        let i = ki(n, ["documentId", "frameId"])
          , s = ki(n, ["targetParent"]);
        r = await Gu(t, {
            ...e,
            ...s
        }, i)
    } catch (i) {
        let s = i instanceof Error ? i.message : String(i);
        if (Ku(s))
            `${e.name}`;
        else if ($u(s))
            `${e.name}`;
        else if (!s)
            `${e.name}`;
        else
            throw new Error(`Unhandled error response received for tab message <${e.name}>`);
        return {
            type: "NoListener"
        }
    }
    if (!r)
        return {
            type: "Success",
            data: void 0
        };
    let o = Bi.decode(r);
    if ((0,
    Hi.isLeft)(o))
        throw Error(`Unable to decode response for tab message <${e.name}>`);
    return o.right
}
  , Ku = e => e.includes("Receiving end does not exist")
  , $u = e => e.includes("The message port closed");
var $ = async (e, t, n={
    enableTracing: !1
}) => {
    let r;
    try {
        let {enableTracing: o, ...i} = n;
        r = o ? await ge.observe(`invoke-${e}`, async s => qi({
            name: e,
            data: t,
            span: s
        }, i)) : await qi({
            name: e,
            data: t
        }, i)
    } catch (o) {
        return {
            ok: !1,
            type: "error",
            error: o instanceof Error ? o : Error(`Unhandled response type when receiving response to <${e}>`)
        }
    }
    switch (r.type) {
    case "Success":
        return {
            ok: !0,
            data: r.data
        };
    case "Error":
        return {
            ok: !1,
            type: "error",
            error: Error(`Error response received for message <${e}>`)
        };
    case "NoListener":
        return {
            ok: !1,
            type: "nolistener"
        };
    default:
        return {
            ok: !1,
            type: "error",
            error: Error(`Unhandled response type when receiving response to <${e}>`)
        }
    }
}
;
var Dt = new Map, Dr, Yu = e => {
    Dr = e
}
;
var bx = e => {
    let t = Dt.get(e);
    t ? (chrome.runtime.onMessage.removeListener(t),
    Dt.delete(e) || console.warn(`Failed to remove listener <${e}> from LISTENERS`)) : console.warn(`Attempting to remove listener <${e}>, but it does not exist.`)
}
  , Xu = () => {
    Dt.forEach( (e, t) => {
        bx(t)
    }
    )
}
  , Qn = e => Dt.has(e);
var zi = (e, t=Promise.resolve()) => {
    Yu(t),
    (e === 1 || e === 2) && addEventListener("pagehide", Xu, {
        once: !0
    })
}
;
var Zu = q(Mr());
var Sx = () => !1
  , Px = () => !1
  , Ju = e => {
    let t = chrome.runtime.getURL("");
    if (t.endsWith("/") && (t = t.slice(0, -1)),
    Sx())
        return !0;
    if (Px()) {
        if (!e.url)
            return !1;
        let n = new URL(e.url)
          , r = n.protocol + "//" + n.host;
        return r.endsWith("/") && (r = r.slice(0, -1)),
        r === t
    }
    return !!e.origin && e.origin === t
}
;
var xe = (e, t, n=!1) => {
    if (Dr === void 0)
        throw new Error(`Attempting to register a listener <${e}> before 'initialize()' has			 been called. Please call 'initialize()' from '@1password/b5x-messaging'			 before attempting to register listeners.`);
    if (Qn(e))
        throw new Error(`Attempting to register the listener <${e}>. A listener by that name already exists.`);
    let r = Ex(e, t, n);
    chrome.runtime.onMessage.addListener(r),
    Dt.set(e, r)
}
  , Ex = (e, t, n=!1) => (r, o, i) => {
    let s = ju.decode(r);
    return !(0,
    Zu.isRight)(s) || s.right.name !== e ? !1 : n && !Ju(o) ? (i({
        type: "Error",
        message: "Invalid origin for request"
    }),
    !1) : (Ax(t, s.right, o).then(u => i({
        type: "Success",
        data: u
    })).catch(u => xx(u, e, i)),
    !0)
}
  , xx = (e, t, n) => {
    let r = Ur(e);
    console.error(`Exception while handling request <${t}>: ${r}`),
    n({
        type: "Error",
        message: r
    })
}
  , Ax = async (e, t, n) => {
    if (await Dr,
    Tx(e)) {
        let {tab: r, frameId: o, url: i} = n;
        if (!r || !r.id || typeof o != "number")
            throw new Error(`Unable to respond to request <${t.name}> due to lack of tab and frame information.`);
        return e(t, {
            tab: r,
            frameId: o,
            url: i
        })
    } else
        return e(t)
}
  , Tx = e => e.length === 2;
var Jn = class {
    constructor() {
        this._events = {}
    }
    emit(t, ...n) {
        let r = this._events["~" + t];
        return r ? (r.forEach(o => {
            o.once && this.off(t, o.fn, !0),
            o.fn(...n)
        }
        ),
        !0) : !1
    }
    on(t, n, r=!1) {
        let o = {
            fn: n,
            once: r
        }
          , i = "~" + t
          , s = this._events[i];
        return s ? s.push(o) : this._events[i] = [o],
        this
    }
    off(t, n, r=!1) {
        let o = "~" + t
          , i = this._events[o];
        if (!i)
            return this;
        let s = i.filter(u => u.fn !== n || r && !u.once);
        return s.length > 0 ? this._events[o] = s : delete this._events[o],
        this
    }
    removeAllListeners(t) {
        return t ? delete this._events["~" + t] : this._events = {},
        this
    }
}
;
var ec = new Jn
  , Ne = e => t => {
    ec.emit(e, t.data)
}
  , Ie = (e, t) => {
    Qn(e) || console.error(`Attempting to use "onMessage" for <${e}> without registering a handler. Handlers must be registered before using "onMessage".`),
    ec.on(e, t)
}
;
var tc = () => {
    xe("autosave-notify-capture", Ne("autosave-notify-capture"))
}
;
var nc = () => {
    xe("autosubmit-devtools-highlight-elements", Ne("autosubmit-devtools-highlight-elements"))
}
;
var rc = () => {
    xe("show-dialog", Ne("show-dialog")),
    xe("close-dialog", Ne("close-dialog"))
}
;
var Wi = {
    "test-pre-reg-feature": !1,
    "b5x-sso-unlock": !1,
    "b5x-safari-biometry": !1,
    "b5x-account-hydration": !1,
    "b5x-firefox-data-collection-ui": !1
}
  , WU = Object.keys(Wi);
var ji = {
    "account-test-feature": !1,
    "b2b-individual-vault-reporting": !1,
    "xam-dvr-hpke-encryption": !1,
    "b5x-autosave-identities": !1,
    "b5x-autosave-suggested-password": !1,
    "b5x-autosave-totp": !1,
    "b5x-b2b-telemetry-data-collection": !1,
    "b5x-equal-inline-width": !1,
    "b5x-ignore-autocomplete-off-identities": !1,
    "b5x-next-gen-inline": !1,
    "b5x-recollect-fields-for-identities": !1,
    "b5x-telemetry-data-collection": !1,
    "core-date-time-localization": !1,
    "hide-lastpass-importer-metadata-vault": !1,
    "b5x-fix-filling-events": !1,
    "b2b-complete-trust-identity": !1,
    "b5x-new-accounts-and-vaults": !1,
    "b5x-filling-saving-telemetry": !1,
    "b5x-watchtower-breach-notification": !0,
    "securityDevelopment-passkeyPRF": !1,
    "securityDevelopment-autolock-extendedDurationOptions": !1,
    "core-securityDevelopment-openAndFill-enforcement": !1,
    "b5x-single-pane-popup": !1,
    "core-securityDevelopment-sync-notifierConnection": !1,
    "frameworks-autolock-longerDefault": !1,
    "frameworks-telem-applock-event": !1,
    "telemetry-feature-flag-context": !1,
    "b5x-trusted-mouse-down-events": !1,
    "b5x-client-performance-tracing": !1,
    "auth-self-serve-migration-v1": !1,
    "b5x-metric-gate-inline-menu-render": !1,
    "b5x-a-a-test": !1,
    "b5x-inline-menu-prominent-cta": !1,
    "b5x-auto-lock-policies": !1,
    "oph-empty-states-item-details-import-nudge": !1,
    "b2c-guided-setup-family-owner-invite-task": !1,
    "core-help-menu-consistency": !1,
    "experiment-b5x-a-a-test-all-users-20241128": !1,
    "experiment-b5x-inline-menu-prominent-cta-all-users-20241128": !1
}
  , VU = Object.keys(ji);
function Ue(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var oc = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}()
  , Vi = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
}
  , ic = {
    INIT: "@@redux/INIT" + Vi(),
    REPLACE: "@@redux/REPLACE" + Vi(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + Vi()
    }
};
function Cx(e) {
    if (typeof e != "object" || e === null)
        return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function Gi(e, t, n) {
    var r;
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
        throw new Error(Ue(0));
    if (typeof t == "function" && typeof n > "u" && (n = t,
    t = void 0),
    typeof n < "u") {
        if (typeof n != "function")
            throw new Error(Ue(1));
        return n(Gi)(e, t)
    }
    if (typeof e != "function")
        throw new Error(Ue(2));
    var o = e
      , i = t
      , s = []
      , u = s
      , d = !1;
    function l() {
        u === s && (u = s.slice())
    }
    function p() {
        if (d)
            throw new Error(Ue(3));
        return i
    }
    function m(y) {
        if (typeof y != "function")
            throw new Error(Ue(4));
        if (d)
            throw new Error(Ue(5));
        var S = !0;
        return l(),
        u.push(y),
        function() {
            if (S) {
                if (d)
                    throw new Error(Ue(6));
                S = !1,
                l();
                var C = u.indexOf(y);
                u.splice(C, 1),
                s = null
            }
        }
    }
    function g(y) {
        if (!Cx(y))
            throw new Error(Ue(7));
        if (typeof y.type > "u")
            throw new Error(Ue(8));
        if (d)
            throw new Error(Ue(9));
        try {
            d = !0,
            i = o(i, y)
        } finally {
            d = !1
        }
        for (var S = s = u, k = 0; k < S.length; k++) {
            var C = S[k];
            C()
        }
        return y
    }
    function h(y) {
        if (typeof y != "function")
            throw new Error(Ue(10));
        o = y,
        g({
            type: ic.REPLACE
        })
    }
    function b() {
        var y, S = m;
        return y = {
            subscribe: function(C) {
                if (typeof C != "object" || C === null)
                    throw new Error(Ue(11));
                function N() {
                    C.next && C.next(p())
                }
                N();
                var L = S(N);
                return {
                    unsubscribe: L
                }
            }
        },
        y[oc] = function() {
            return this
        }
        ,
        y
    }
    return g({
        type: ic.INIT
    }),
    r = {
        dispatch: g,
        subscribe: m,
        getState: p,
        replaceReducer: h
    },
    r[oc] = b,
    r
}
function ac(e, t, n) {
    let r;
    function o() {
        let s = t(e.getState());
        if (s !== r) {
            let u = r;
            r = s,
            n(r, u)
        }
    }
    let i = e.subscribe(o);
    return o(),
    i
}
var jm = q(re());
var Le = Object.values(jm.UsoProvider);
var Vm = {
    addAccount: {},
    autosave: {},
    autosaveTotp: {},
    autosubmit: {},
    passkeySigningIn: {},
    passkeySavePrompt: {
        fullscreen: !0
    },
    passkeyRegisterSuccess: {},
    passkeyGenericError: {},
    saveSocialLogin: {},
    suggestSocialLogin: {},
    sshOnboardingNextSteps: {},
    shellPlugins: {},
    shellPluginsSuccess: {},
    shellPluginsFallback: {},
    signInTo1Password: {},
    generatedPasswordUserOffline: {},
    generatedPasswordNoDefaultSavingLocation: {},
    generatedPasswordAccountIsLocked: {},
    generatedPasswordNotSignedIn: {},
    generatedPasswordNoVaultFound: {},
    generatedPasswordUnexpectedError: {},
    watchtowerBreachDetected: {}
};
var Gm = ["b5x-next-gen-inline", "b5x-equal-inline-width", "b5x-filling-saving-telemetry", "b5x-inline-menu-prominent-cta"];
var Km = {
    disabled: !0,
    "fallback-requested": !0,
    "missing-url": !0,
    "missing-public-key": !0,
    "unexpected-response": !0,
    "port-error": !0,
    timeout: !0,
    unauthorized: !0,
    unknown: !0,
    "user-cancelled": !0,
    "vault-data-failed": !0,
    "messenger-error": !0,
    "internal-error": !0
}
  , UD = {
    ...Km,
    "create-passkey-failed": !0,
    duplicate: !0,
    "preview-failed": !0,
    "save-passkey-failed": !0
}
  , DD = {
    ...Km,
    "authenticating-failed": !0,
    "bad-rp-id": !0,
    "conflicting-state": !0,
    "corrupted-item": !0,
    "missing-cached-id": !0,
    "missing-item": !0,
    "vault-icons-failed": !0
};
function an() {
    if (typeof window < "u")
        return window;
    if (typeof globalThis < "u")
        return globalThis;
    throw new Error("unable to locate global object")
}
function Zn(e) {
    return window.getComputedStyle(e, null).getPropertyValue("transform") !== "none"
}
function Lx() {
    let e = $m();
    if (e instanceof HTMLDialogElement && Zn(e)) {
        let i = e.getBoundingClientRect()
          , s = e.scrollTop - i.top;
        return {
            x: e.scrollLeft - i.left,
            y: s
        }
    }
    let t = window.visualViewport
      , n = !!t
      , r = n ? window.scrollY - t.pageTop + t.offsetTop : 0;
    return {
        x: n ? window.scrollX - t.pageLeft + t.offsetLeft : 0,
        y: r
    }
}
var $m = () => {
    let e = document.getElementsByTagName("dialog");
    return Array.from(e).filter(Ym).pop() ?? document.body
}
  , Ym = e => !e || !(e instanceof HTMLDialogElement) ? !1 : e.open && e.matches(":modal")
  , _r = e => {
    let t = []
      , n = e.parentElement;
    for (; n; )
        Ym(n) && t.push(n),
        n = n.parentElement;
    return t
}
;
function Br(e) {
    let t = Lx()
      , n = e.getBoundingClientRect();
    return DOMRect.fromRect({
        height: n.height,
        width: n.width,
        x: n.x + t.x,
        y: n.y + t.y
    })
}
var vt = (e, t) => {
    let n = ["com-1password-button", "com-1password-menu", "com-1password-notification", "com-1password-save-dialog"]
      , r = n.findIndex(u => e === u)
      , o = (u, d) => u === d.length - 1
      , i = $m();
    if (o(r, n)) {
        i.appendChild(t);
        return
    }
    let s = n.slice(r + 1);
    for (let u = 0; u < s.length; u++) {
        let d = s[u]
          , l = document.getElementsByTagName(d)[0];
        if (l) {
            i.insertBefore(t, l);
            break
        } else
            o(u, s) && i.appendChild(t)
    }
}
  , Hr = e => {
    let t = ["text", "email", "number", "password", "url", "tel", "search", "textarea"];
    return (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && t.includes(e.type.toLowerCase()) && !e.readOnly && !e.disabled
}
  , Ki = ["COM-1PASSWORD-BUTTON", "COM-1PASSWORD-MENU"]
  , er = (e, t) => e && t === e || t instanceof Element && Ki.includes(t.tagName) || !1;
var qr = (e, t) => e.reduce( (r, o) => {
    let {width: i, height: s, src: u, name: d} = t
      , l = Math.abs(o.clientWidth - i) <= 1 && Math.abs(o.clientHeight - s) <= 1
      , p = o.src && u && o.src === u
      , m = o.name && d && o.name === d
      , g = 0;
    return l && p && m ? g = 3 : l && (p || m) || p && m ? g = 2 : l && (g = 1),
    r.push({
        frame: o,
        confidence: g
    }),
    r
}
, []).sort( (r, o) => o.confidence - r.confidence)[0]
  , Xm = (e, t, n, r, o) => {
    let i = t.querySelectorAll(e);
    for (let s of i) {
        let u = (n ? s.getAttribute(n) : s.value || s.innerText)?.trim() ?? "";
        if (!(u.length === 0 || r && u.length !== r || o && !u.startsWith(o) || new Set(u.split("")).size === 1))
            return u
    }
}
  , tr = e => e.getAttribute("role") === "combobox"
  , zr = e => tr(e) && e.getAttribute("aria-expanded") === "true";
var Ox = {
    locked: !0,
    basePath: "/",
    configured: !1,
    activeField: void 0,
    activeFieldAnalysis: void 0,
    activeFieldDir: "ltr",
    activeFieldPaddingX: 0,
    autoshowMenu: !1,
    inlineMenuOpen: !1,
    inlineMenuToken: void 0,
    frameIdentifier: window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36),
    fillInProgress: !1,
    inlineDisabled: !1,
    inlineSavingEnabled: !0,
    locale: "en",
    fillPendingUserInteraction: !1,
    canRequestUnlock: {
        name: "no",
        data: {
            keyboardShortcut: void 0
        }
    },
    keepInlineAttachedToField: "off",
    appTheme: "system",
    numberOfItems: 4,
    usoLoginEnabled: !1,
    usoButtons: [],
    enabledAutosaveTypes: [],
    saving: !1,
    topFrameNakedDomain: "",
    fillSessionAutosubmitGoogleUsername: void 0,
    areAllAccountsFrozen: !1,
    usoLogonPageProvider: void 0,
    shouldCaptureOnInput: !1,
    unleashFeatures: {
        ...ji,
        ...Wi
    },
    autosaveTotpEnabled: !1
};
function Mx(e, t) {
    if (!e)
        return Ox;
    switch (t.type) {
    case "configure":
        return {
            ...e,
            ...t.payload,
            configured: !0
        };
    case "set-keep-inline-attached":
        return {
            ...e,
            keepInlineAttachedToField: t.payload
        };
    case "lock-state-changed":
        return {
            ...e,
            locked: t.payload
        };
    case "set-active-field":
        {
            let n = {
                direction: "ltr",
                paddingLeft: "0",
                paddingRight: "0"
            }
              , r = t.payload ? window.getComputedStyle(t.payload) : n
              , o = r.direction === "rtl" ? "rtl" : "ltr"
              , i = parseFloat(o === "rtl" ? r.paddingLeft : r.paddingRight)
              , s = t.payload ? zr(t.payload) : !1;
            return {
                ...e,
                activeField: t.payload,
                activeFieldAnalysis: t.payload ? e.activeFieldAnalysis : void 0,
                activeFieldDir: o,
                activeFieldPaddingX: i,
                userMustTriggerMenuToShow: s
            }
        }
    case "set-active-field-analysis":
        return {
            ...e,
            activeFieldAnalysis: t.payload
        };
    case "set-autoshow-menu":
        return {
            ...e,
            autoshowMenu: t.payload
        };
    case "user-must-trigger-menu-to-show":
        return {
            ...e,
            userMustTriggerMenuToShow: t.payload
        };
    case "set-inline-menu-open":
        return {
            ...e,
            inlineMenuOpen: t.payload
        };
    case "set-inline-menu-token":
        return {
            ...e,
            inlineMenuToken: t.payload
        };
    case "fill-start":
        return {
            ...e,
            fillInProgress: !0,
            fillPendingUserInteraction: t.payload
        };
    case "fill-end":
        return {
            ...e,
            fillInProgress: !1
        };
    case "set-page-excluded":
        return {
            ...e,
            inlineDisabled: t.payload
        };
    case "cancel-pending-fill":
        return {
            ...e,
            fillPendingUserInteraction: !1
        };
    case "set-can-request-unlock":
        return {
            ...e,
            canRequestUnlock: t.payload
        };
    case "uso-collect-buttons":
        return {
            ...e,
            usoButtons: t.payload
        };
    case "saving":
        return {
            ...e,
            saving: t.payload
        };
    case "set-are-all-accounts-frozen":
        return {
            ...e,
            areAllAccountsFrozen: t.payload
        };
    case "set-should-capture-on-input":
        return {
            ...e,
            shouldCaptureOnInput: t.payload
        };
    default:
        return e
    }
}
var v = Gi(Mx)
  , Rx = (e, t) => ac(v, e, t)
  , D = (e, t) => Rx(n => n[e], t);
var Qm = () => {
    xe("uso-collect-providers", () => v.getState().usoButtons),
    xe("uso-click-provider-button", Ne("uso-click-provider-button")),
    xe("uso-devtools-run-button-detection", Ne("uso-devtools-run-button-detection")),
    xe("uso-devtools-button-detection-debug", Ne("uso-devtools-button-detection-debug")),
    xe("uso-devtools-highlight-buttons", Ne("uso-devtools-highlight-buttons"))
}
;
var Jm = () => {
    zi(3),
    tc(),
    nc(),
    rc(),
    Qm()
}
;
var sn = q(_i()), Zm, Nx = Symbol(), ye = class {
    constructor(t) {
        this[Zm] = 0,
        this.toString = () => this.str,
        this.toJSON = () => this.str,
        this.loggableString = () => this,
        this.replace = (n, r) => $i(this.str.replace(n, r.str)),
        this.concat = n => $i(this.str + n.str),
        this.str = t
    }
}
;
Zm = Nx;
ye.assertLogSafe = e => new ye(e);
var $i = ye.assertLogSafe;
var Ux = new sn.Type("LoggableString",e => e instanceof ye, (e, t) => e instanceof ye ? sn.success(e) : sn.failure(e, t, "cannot decode unknown value to LoggableString"),e => e.str);
function Wr(e, t) {
    console.error(`Unexpected value of variable: "${t.str}"`)
}
function Dx() {
    return Fx().toString(36)
}
function Fx() {
    return globalThis.crypto.getRandomValues(new Uint32Array(1))[0]
}
function nr() {
    return ye.assertLogSafe(Dx())
}
var Yi = e => {
    let[t] = e.split("?");
    return `PortOpener: ${t}`
}
  , eg = (e, t, n) => {
    let r = tg(e, t);
    return t?.reconnect && ng(r, n),
    r
}
  , tg = (e, t, n) => _x(e, t || {}, n)
  , _x = (e, t, n) => {
    let {port: r, portId: o} = Bx(e, t, n)
      , i = Yi(r.name);
    `${i}`;
    let s = Hx(r);
    r.onMessage.addListener(s);
    let u = () => {
        r.onMessage.removeListener(s),
        r.onDisconnect.removeListener(u)
    }
    ;
    r.onDisconnect.addListener(u);
    let d = new WeakMap;
    return {
        name: `${e}/${o}`,
        disconnect: r.disconnect,
        postMessage: p => {
            `${i}${p.type}`,
            r.postMessage(p)
        }
        ,
        onMessage: {
            addListener: p => {
                let m = (g, h) => {
                    g.type !== "pm-health-check-request" && p(g, h.name)
                }
                ;
                r.onMessage.addListener(m),
                d.set(p, m)
            }
            ,
            removeListener: p => {
                let m = d.get(p);
                r.onMessage.removeListener(m),
                d.delete(p)
            }
        },
        onDisconnect: {
            addListener: p => {
                r.onDisconnect.addListener(p)
            }
            ,
            removeListener: p => {
                r.onDisconnect.removeListener(p)
            }
        },
        getConfig: () => ({
            id: o,
            reqId: t.reqId,
            type: e
        })
    }
}
  , ng = (e, t) => {
    let n = Yi(e.name)
      , r = new Map
      , o = new Map
      , i = {
        ...e.onMessage
    }
      , s = {
        ...e.onDisconnect
    }
      , u = g => {
        `${n}`,
        i.addListener(g),
        r.set(g, g)
    }
      , d = g => {
        `${n}`,
        i.removeListener(g),
        r.delete(g)
    }
      , l = g => {
        `${n}`,
        s.addListener(g),
        o.set(g, g)
    }
      , p = g => {
        `${n}`,
        s.removeListener(g),
        o.delete(g)
    }
      , m = g => {
        if (!g.persisted)
            return;
        window.removeEventListener("pageshow", m),
        `${n}`;
        let h = e.getConfig()
          , b = tg(h.type, {
            reconnect: !0,
            reqId: h.reqId
        }, h.id);
        ng(b, t);
        for (let y of r.keys())
            e.onMessage.removeListener(y),
            b.onMessage.addListener(y);
        for (let y of o.keys())
            e.onDisconnect.removeListener(y),
            b.onDisconnect.addListener(y);
        t?.(b)
    }
    ;
    e.onMessage.addListener = u,
    e.onMessage.removeListener = d,
    e.onDisconnect.addListener = l,
    e.onDisconnect.removeListener = p,
    window.addEventListener("pageshow", m)
}
  , Bx = (e, t, n) => {
    let r = nr()
      , o = {};
    t.reqId && (o.reqId = t.reqId.str),
    t.reconnect && (o.reconnect = `${t.reconnect}`),
    n && (o.reconnectId = n.str);
    let i = "?" + new URLSearchParams(o).toString();
    return {
        port: chrome.runtime.connect({
            name: `${e.str}/${r.str}${i.length > 1 ? i : ""}`
        }),
        portId: r
    }
}
  , Hx = e => t => {
    let n = Yi(e.name);
    if (t.type === "error") {
        console.warn(`${n} received error: "${t.data.loggableReason}"`);
        return
    }
    if (t.type !== "pm-health-check-request") {
        `${n}${t.type}`;
        return
    }
    if (t.type === "pm-health-check-request") {
        `${n}${t.type}`,
        e.postMessage({
            type: "pm-health-check-response",
            data: {
                windowClosed: window.closed,
                id: t.data.id
            }
        });
        return
    }
    Wr(t, ye.assertLogSafe("message"))
}
;
var jr = class {
    constructor(t="") {
        this.log = (t, ...n) => {
            this.isPermitted() && (this.message(t),
            [...n])
        }
        ;
        this.debug = (t, ...n) => {
            this.isPermitted() && (this.message(t),
            [...n])
        }
        ;
        this.info = (t, ...n) => {
            this.isPermitted() && console.info(this.message(t), ...n)
        }
        ;
        this.warn = (t, ...n) => {
            this.isPermitted() && console.warn(this.message(t), ...n)
        }
        ;
        this.error = (t, ...n) => {
            this.isPermitted() && console.error(this.message(t), ...n)
        }
        ;
        this.isPermitted = () => !1;
        this.message = t => this._prependMessage ? `${this._prependMessage}: ${t}` : t;
        this._prependMessage = t
    }
}
;
function rg(e) {
    return !!(e && typeof e == "object" && ["Success", "Error"].includes(e.type))
}
function qx(e) {
    try {
        return e?.useChrome || browser?.runtime === void 0 ? async t => og(t) : async t => browser.runtime.sendMessage(t)
    } catch {
        return async n => og(n)
    }
}
async function ig(e, t) {
    let r = await qx(t)(e).catch(o => {
        let i = o instanceof Error ? o.message : String(o);
        if (i.includes("Receiving end does not exist"))
            `${e.name}`;
        else if (i.includes("The message port closed"))
            `${e.name}`;
        else if (!i)
            `${e.name}`;
        else
            throw new Error(`Unhandled error response received for message <${e.name}>`)
    }
    );
    if (rg(r))
        switch (r.type) {
        case "Success":
            return r.data;
        case "Error":
            throw new Error(r.message ?? `Error response received for message <${e.name}>`)
        }
    if (r)
        throw new Error(`Unknown response type received for message <${e.name}>`);
    return r
}
async function og(e) {
    return new Promise( (t, n) => {
        chrome.runtime.sendMessage(e, r => {
            if (r?.type === "Success")
                t(r);
            else {
                let o = chrome.runtime.lastError;
                n(new Error(o?.message))
            }
        }
        )
    }
    )
}
var Xi = class {
    constructor(t) {
        this.request = async t => ig(t);
        this.setupRegisteredHandler = (t, n) => {
            function r(o, i, s) {
                if (o.name && o.name === t) {
                    let u = new jr("WebExtListener handler registration");
                    return new Promise(d => d(n(o.data))).then(s).catch(d => {
                        console.warn(`Caught error handling <${o.name}> message`),
                        u.error(d)
                    }
                    ),
                    !0
                }
                return !1
            }
            return r
        }
        ;
        this.on = (t, n) => {
            let r = this.setupRegisteredHandler(t, n);
            return this.registeredHandlers = this.registeredHandlers ?? [],
            this.registeredHandlers.push(r),
            chrome.runtime.onMessage.addListener(r),
            r
        }
        ;
        this.setupPort = t => {
            this.port = eg(ye.assertLogSafe(t), {
                reconnect: !0
            }, this.onPortReconnect),
            this.port.onMessage.addListener(this.onPortMessage)
        }
        ;
        this.onPortReconnect = t => {
            this.port = t
        }
        ;
        this.onPortMessage = ({type: t, data: n}) => {
            if (t !== "targeted-inline-message")
                return;
            (this.registeredHandlers ?? []).forEach(o => {
                let i = () => {
                    `${n.message.name}`
                }
                ;
                o(n.message, void 0, i)
            }
            )
        }
        ;
        this.off = (t, n) => {
            chrome.runtime.onMessage.removeListener(n)
        }
        ;
        t && (this.portType = t,
        this.setupPort(t),
        this.registeredHandlers = [])
    }
}
;
function ue(e, t={
    targetParent: !1
}) {
    return {
        name: "relay-message-to-frames",
        data: {
            message: JSON.stringify(e),
            targetParent: t.targetParent
        }
    }
}
function Qi(e) {
    return {
        name: "targeted-message-to-inline-menu",
        data: {
            message: e
        }
    }
}
function ag(e) {
    return new Xi(e)
}
var Zy = q(re());
var zx = typeof global == "object" && global && global.Object === Object && global
  , Vr = zx;
var Wx = typeof self == "object" && self && self.Object === Object && self
  , jx = Vr || Wx || Function("return this")()
  , ce = jx;
var Vx = ce.Symbol
  , De = Vx;
var sg = Object.prototype
  , Gx = sg.hasOwnProperty
  , Kx = sg.toString
  , rr = De ? De.toStringTag : void 0;
function $x(e) {
    var t = Gx.call(e, rr)
      , n = e[rr];
    try {
        e[rr] = void 0;
        var r = !0
    } catch {}
    var o = Kx.call(e);
    return r && (t ? e[rr] = n : delete e[rr]),
    o
}
var ug = $x;
var Yx = Object.prototype
  , Xx = Yx.toString;
function Qx(e) {
    return Xx.call(e)
}
var cg = Qx;
var Jx = "[object Null]"
  , Zx = "[object Undefined]"
  , dg = De ? De.toStringTag : void 0;
function eA(e) {
    return e == null ? e === void 0 ? Zx : Jx : dg && dg in Object(e) ? ug(e) : cg(e)
}
var Oe = eA;
function tA(e) {
    return e != null && typeof e == "object"
}
var Me = tA;
var nA = "[object Symbol]";
function rA(e) {
    return typeof e == "symbol" || Me(e) && Oe(e) == nA
}
var yt = rA;
function oA(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
        o[n] = t(e[n], n, e);
    return o
}
var Gr = oA;
var iA = Array.isArray
  , oe = iA;
var aA = 1 / 0
  , lg = De ? De.prototype : void 0
  , fg = lg ? lg.toString : void 0;
function pg(e) {
    if (typeof e == "string")
        return e;
    if (oe(e))
        return Gr(e, pg) + "";
    if (yt(e))
        return fg ? fg.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -aA ? "-0" : t
}
var mg = pg;
var sA = /\s/;
function uA(e) {
    for (var t = e.length; t-- && sA.test(e.charAt(t)); )
        ;
    return t
}
var gg = uA;
var cA = /^\s+/;
function dA(e) {
    return e && e.slice(0, gg(e) + 1).replace(cA, "")
}
var hg = dA;
function lA(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var et = lA;
var vg = NaN
  , fA = /^[-+]0x[0-9a-f]+$/i
  , pA = /^0b[01]+$/i
  , mA = /^0o[0-7]+$/i
  , gA = parseInt;
function hA(e) {
    if (typeof e == "number")
        return e;
    if (yt(e))
        return vg;
    if (et(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = et(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = hg(e);
    var n = pA.test(e);
    return n || mA.test(e) ? gA(e.slice(2), n ? 2 : 8) : fA.test(e) ? vg : +e
}
var yg = hA;
var wg = 1 / 0
  , vA = 17976931348623157e292;
function yA(e) {
    if (!e)
        return e === 0 ? e : 0;
    if (e = yg(e),
    e === wg || e === -wg) {
        var t = e < 0 ? -1 : 1;
        return t * vA
    }
    return e === e ? e : 0
}
var bg = yA;
function wA(e) {
    var t = bg(e)
      , n = t % 1;
    return t === t ? n ? t - n : t : 0
}
var Kr = wA;
function bA(e) {
    return e
}
var Sg = bA;
var SA = "[object AsyncFunction]"
  , PA = "[object Function]"
  , EA = "[object GeneratorFunction]"
  , xA = "[object Proxy]";
function AA(e) {
    if (!et(e))
        return !1;
    var t = Oe(e);
    return t == PA || t == EA || t == SA || t == xA
}
var $r = AA;
var TA = ce["__core-js_shared__"]
  , Yr = TA;
var Pg = function() {
    var e = /[^.]+$/.exec(Yr && Yr.keys && Yr.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function kA(e) {
    return !!Pg && Pg in e
}
var Eg = kA;
var CA = Function.prototype
  , IA = CA.toString;
function LA(e) {
    if (e != null) {
        try {
            return IA.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var tt = LA;
var OA = /[\\^$.*+?()[\]{}|]/g
  , MA = /^\[object .+?Constructor\]$/
  , RA = Function.prototype
  , NA = Object.prototype
  , UA = RA.toString
  , DA = NA.hasOwnProperty
  , FA = RegExp("^" + UA.call(DA).replace(OA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function _A(e) {
    if (!et(e) || Eg(e))
        return !1;
    var t = $r(e) ? FA : MA;
    return t.test(tt(e))
}
var xg = _A;
function BA(e, t) {
    return e?.[t]
}
var Ag = BA;
function HA(e, t) {
    var n = Ag(e, t);
    return xg(n) ? n : void 0
}
var Fe = HA;
var qA = Fe(ce, "WeakMap")
  , Xr = qA;
function zA(e, t, n, r) {
    for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
        if (t(e[i], i, e))
            return i;
    return -1
}
var Qr = zA;
function WA(e) {
    return e !== e
}
var Tg = WA;
function jA(e, t, n) {
    for (var r = n - 1, o = e.length; ++r < o; )
        if (e[r] === t)
            return r;
    return -1
}
var kg = jA;
function VA(e, t, n) {
    return t === t ? kg(e, t, n) : Qr(e, Tg, n)
}
var Cg = VA;
var GA = 9007199254740991
  , KA = /^(?:0|[1-9]\d*)$/;
function $A(e, t) {
    var n = typeof e;
    return t = t ?? GA,
    !!t && (n == "number" || n != "symbol" && KA.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var Jr = $A;
function YA(e, t) {
    return e === t || e !== e && t !== t
}
var Zr = YA;
var XA = 9007199254740991;
function QA(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XA
}
var un = QA;
function JA(e) {
    return e != null && un(e.length) && !$r(e)
}
var cn = JA;
var ZA = Object.prototype;
function eT(e) {
    var t = e && e.constructor
      , n = typeof t == "function" && t.prototype || ZA;
    return e === n
}
var Ig = eT;
function tT(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
        r[n] = t(n);
    return r
}
var Lg = tT;
var nT = "[object Arguments]";
function rT(e) {
    return Me(e) && Oe(e) == nT
}
var Ji = rT;
var Og = Object.prototype
  , oT = Og.hasOwnProperty
  , iT = Og.propertyIsEnumerable
  , aT = Ji(function() {
    return arguments
}()) ? Ji : function(e) {
    return Me(e) && oT.call(e, "callee") && !iT.call(e, "callee")
}
  , eo = aT;
function sT() {
    return !1
}
var Mg = sT;
var Ug = typeof exports == "object" && exports && !exports.nodeType && exports
  , Rg = Ug && typeof module == "object" && module && !module.nodeType && module
  , uT = Rg && Rg.exports === Ug
  , Ng = uT ? ce.Buffer : void 0
  , cT = Ng ? Ng.isBuffer : void 0
  , dT = cT || Mg
  , or = dT;
var lT = "[object Arguments]"
  , fT = "[object Array]"
  , pT = "[object Boolean]"
  , mT = "[object Date]"
  , gT = "[object Error]"
  , hT = "[object Function]"
  , vT = "[object Map]"
  , yT = "[object Number]"
  , wT = "[object Object]"
  , bT = "[object RegExp]"
  , ST = "[object Set]"
  , PT = "[object String]"
  , ET = "[object WeakMap]"
  , xT = "[object ArrayBuffer]"
  , AT = "[object DataView]"
  , TT = "[object Float32Array]"
  , kT = "[object Float64Array]"
  , CT = "[object Int8Array]"
  , IT = "[object Int16Array]"
  , LT = "[object Int32Array]"
  , OT = "[object Uint8Array]"
  , MT = "[object Uint8ClampedArray]"
  , RT = "[object Uint16Array]"
  , NT = "[object Uint32Array]"
  , V = {};
V[TT] = V[kT] = V[CT] = V[IT] = V[LT] = V[OT] = V[MT] = V[RT] = V[NT] = !0;
V[lT] = V[fT] = V[xT] = V[pT] = V[AT] = V[mT] = V[gT] = V[hT] = V[vT] = V[yT] = V[wT] = V[bT] = V[ST] = V[PT] = V[ET] = !1;
function UT(e) {
    return Me(e) && un(e.length) && !!V[Oe(e)]
}
var Dg = UT;
function DT(e) {
    return function(t) {
        return e(t)
    }
}
var Fg = DT;
var _g = typeof exports == "object" && exports && !exports.nodeType && exports
  , ir = _g && typeof module == "object" && module && !module.nodeType && module
  , FT = ir && ir.exports === _g
  , Zi = FT && Vr.process
  , _T = function() {
    try {
        var e = ir && ir.require && ir.require("util").types;
        return e || Zi && Zi.binding && Zi.binding("util")
    } catch {}
}()
  , ea = _T;
var Bg = ea && ea.isTypedArray
  , BT = Bg ? Fg(Bg) : Dg
  , to = BT;
var HT = Object.prototype
  , qT = HT.hasOwnProperty;
function zT(e, t) {
    var n = oe(e)
      , r = !n && eo(e)
      , o = !n && !r && or(e)
      , i = !n && !r && !o && to(e)
      , s = n || r || o || i
      , u = s ? Lg(e.length, String) : []
      , d = u.length;
    for (var l in e)
        (t || qT.call(e, l)) && !(s && (l == "length" || o && (l == "offset" || l == "parent") || i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Jr(l, d))) && u.push(l);
    return u
}
var Hg = zT;
function WT(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var qg = WT;
var jT = qg(Object.keys, Object)
  , zg = jT;
var VT = Object.prototype
  , GT = VT.hasOwnProperty;
function KT(e) {
    if (!Ig(e))
        return zg(e);
    var t = [];
    for (var n in Object(e))
        GT.call(e, n) && n != "constructor" && t.push(n);
    return t
}
var Wg = KT;
function $T(e) {
    return cn(e) ? Hg(e) : Wg(e)
}
var wt = $T;
var YT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , XT = /^\w*$/;
function QT(e, t) {
    if (oe(e))
        return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || yt(e) ? !0 : XT.test(e) || !YT.test(e) || t != null && e in Object(t)
}
var dn = QT;
var JT = Fe(Object, "create")
  , nt = JT;
function ZT() {
    this.__data__ = nt ? nt(null) : {},
    this.size = 0
}
var jg = ZT;
function ek(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
    t
}
var Vg = ek;
var tk = "__lodash_hash_undefined__"
  , nk = Object.prototype
  , rk = nk.hasOwnProperty;
function ok(e) {
    var t = this.__data__;
    if (nt) {
        var n = t[e];
        return n === tk ? void 0 : n
    }
    return rk.call(t, e) ? t[e] : void 0
}
var Gg = ok;
var ik = Object.prototype
  , ak = ik.hasOwnProperty;
function sk(e) {
    var t = this.__data__;
    return nt ? t[e] !== void 0 : ak.call(t, e)
}
var Kg = sk;
var uk = "__lodash_hash_undefined__";
function ck(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
    n[e] = nt && t === void 0 ? uk : t,
    this
}
var $g = ck;
function ln(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ln.prototype.clear = jg;
ln.prototype.delete = Vg;
ln.prototype.get = Gg;
ln.prototype.has = Kg;
ln.prototype.set = $g;
var ta = ln;
function dk() {
    this.__data__ = [],
    this.size = 0
}
var Yg = dk;
function lk(e, t) {
    for (var n = e.length; n--; )
        if (Zr(e[n][0], t))
            return n;
    return -1
}
var bt = lk;
var fk = Array.prototype
  , pk = fk.splice;
function mk(e) {
    var t = this.__data__
      , n = bt(t, e);
    if (n < 0)
        return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : pk.call(t, n, 1),
    --this.size,
    !0
}
var Xg = mk;
function gk(e) {
    var t = this.__data__
      , n = bt(t, e);
    return n < 0 ? void 0 : t[n][1]
}
var Qg = gk;
function hk(e) {
    return bt(this.__data__, e) > -1
}
var Jg = hk;
function vk(e, t) {
    var n = this.__data__
      , r = bt(n, e);
    return r < 0 ? (++this.size,
    n.push([e, t])) : n[r][1] = t,
    this
}
var Zg = vk;
function fn(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
fn.prototype.clear = Yg;
fn.prototype.delete = Xg;
fn.prototype.get = Qg;
fn.prototype.has = Jg;
fn.prototype.set = Zg;
var St = fn;
var yk = Fe(ce, "Map")
  , Pt = yk;
function wk() {
    this.size = 0,
    this.__data__ = {
        hash: new ta,
        map: new (Pt || St),
        string: new ta
    }
}
var eh = wk;
function bk(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var th = bk;
function Sk(e, t) {
    var n = e.__data__;
    return th(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
var Et = Sk;
function Pk(e) {
    var t = Et(this, e).delete(e);
    return this.size -= t ? 1 : 0,
    t
}
var nh = Pk;
function Ek(e) {
    return Et(this, e).get(e)
}
var rh = Ek;
function xk(e) {
    return Et(this, e).has(e)
}
var oh = xk;
function Ak(e, t) {
    var n = Et(this, e)
      , r = n.size;
    return n.set(e, t),
    this.size += n.size == r ? 0 : 1,
    this
}
var ih = Ak;
function pn(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
pn.prototype.clear = eh;
pn.prototype.delete = nh;
pn.prototype.get = rh;
pn.prototype.has = oh;
pn.prototype.set = ih;
var Ft = pn;
var Tk = "Expected a function";
function na(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
        throw new TypeError(Tk);
    var n = function() {
        var r = arguments
          , o = t ? t.apply(this, r) : r[0]
          , i = n.cache;
        if (i.has(o))
            return i.get(o);
        var s = e.apply(this, r);
        return n.cache = i.set(o, s) || i,
        s
    };
    return n.cache = new (na.Cache || Ft),
    n
}
na.Cache = Ft;
var ah = na;
var kk = 500;
function Ck(e) {
    var t = ah(e, function(r) {
        return n.size === kk && n.clear(),
        r
    })
      , n = t.cache;
    return t
}
var sh = Ck;
var Ik = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , Lk = /\\(\\)?/g
  , Ok = sh(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""),
    e.replace(Ik, function(n, r, o, i) {
        t.push(o ? i.replace(Lk, "$1") : r || n)
    }),
    t
})
  , uh = Ok;
function Mk(e) {
    return e == null ? "" : mg(e)
}
var ch = Mk;
function Rk(e, t) {
    return oe(e) ? e : dn(e, t) ? [e] : uh(ch(e))
}
var no = Rk;
var Nk = 1 / 0;
function Uk(e) {
    if (typeof e == "string" || yt(e))
        return e;
    var t = e + "";
    return t == "0" && 1 / e == -Nk ? "-0" : t
}
var xt = Uk;
function Dk(e, t) {
    t = no(t, e);
    for (var n = 0, r = t.length; e != null && n < r; )
        e = e[xt(t[n++])];
    return n && n == r ? e : void 0
}
var ro = Dk;
function Fk(e, t, n) {
    var r = e == null ? void 0 : ro(e, t);
    return r === void 0 ? n : r
}
var dh = Fk;
function _k(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; )
        e[o + n] = t[n];
    return e
}
var lh = _k;
function Bk() {
    this.__data__ = new St,
    this.size = 0
}
var fh = Bk;
function Hk(e) {
    var t = this.__data__
      , n = t.delete(e);
    return this.size = t.size,
    n
}
var ph = Hk;
function qk(e) {
    return this.__data__.get(e)
}
var mh = qk;
function zk(e) {
    return this.__data__.has(e)
}
var gh = zk;
var Wk = 200;
function jk(e, t) {
    var n = this.__data__;
    if (n instanceof St) {
        var r = n.__data__;
        if (!Pt || r.length < Wk - 1)
            return r.push([e, t]),
            this.size = ++n.size,
            this;
        n = this.__data__ = new Ft(r)
    }
    return n.set(e, t),
    this.size = n.size,
    this
}
var hh = jk;
function mn(e) {
    var t = this.__data__ = new St(e);
    this.size = t.size
}
mn.prototype.clear = fh;
mn.prototype.delete = ph;
mn.prototype.get = mh;
mn.prototype.has = gh;
mn.prototype.set = hh;
var gn = mn;
function Vk(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
        var s = e[n];
        t(s, n, e) && (i[o++] = s)
    }
    return i
}
var vh = Vk;
function Gk() {
    return []
}
var yh = Gk;
var Kk = Object.prototype
  , $k = Kk.propertyIsEnumerable
  , wh = Object.getOwnPropertySymbols
  , Yk = wh ? function(e) {
    return e == null ? [] : (e = Object(e),
    vh(wh(e), function(t) {
        return $k.call(e, t)
    }))
}
: yh
  , bh = Yk;
function Xk(e, t, n) {
    var r = t(e);
    return oe(e) ? r : lh(r, n(e))
}
var Sh = Xk;
function Qk(e) {
    return Sh(e, wt, bh)
}
var ra = Qk;
var Jk = Fe(ce, "DataView")
  , oo = Jk;
var Zk = Fe(ce, "Promise")
  , io = Zk;
var eC = Fe(ce, "Set")
  , ao = eC;
var Ph = "[object Map]"
  , tC = "[object Object]"
  , Eh = "[object Promise]"
  , xh = "[object Set]"
  , Ah = "[object WeakMap]"
  , Th = "[object DataView]"
  , nC = tt(oo)
  , rC = tt(Pt)
  , oC = tt(io)
  , iC = tt(ao)
  , aC = tt(Xr)
  , _t = Oe;
(oo && _t(new oo(new ArrayBuffer(1))) != Th || Pt && _t(new Pt) != Ph || io && _t(io.resolve()) != Eh || ao && _t(new ao) != xh || Xr && _t(new Xr) != Ah) && (_t = function(e) {
    var t = Oe(e)
      , n = t == tC ? e.constructor : void 0
      , r = n ? tt(n) : "";
    if (r)
        switch (r) {
        case nC:
            return Th;
        case rC:
            return Ph;
        case oC:
            return Eh;
        case iC:
            return xh;
        case aC:
            return Ah
        }
    return t
}
);
var oa = _t;
var sC = ce.Uint8Array
  , ia = sC;
var uC = "__lodash_hash_undefined__";
function cC(e) {
    return this.__data__.set(e, uC),
    this
}
var kh = cC;
function dC(e) {
    return this.__data__.has(e)
}
var Ch = dC;
function so(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.__data__ = new Ft; ++t < n; )
        this.add(e[t])
}
so.prototype.add = so.prototype.push = kh;
so.prototype.has = Ch;
var Ih = so;
function lC(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e))
            return !0;
    return !1
}
var Lh = lC;
function fC(e, t) {
    return e.has(t)
}
var Oh = fC;
var pC = 1
  , mC = 2;
function gC(e, t, n, r, o, i) {
    var s = n & pC
      , u = e.length
      , d = t.length;
    if (u != d && !(s && d > u))
        return !1;
    var l = i.get(e)
      , p = i.get(t);
    if (l && p)
        return l == t && p == e;
    var m = -1
      , g = !0
      , h = n & mC ? new Ih : void 0;
    for (i.set(e, t),
    i.set(t, e); ++m < u; ) {
        var b = e[m]
          , y = t[m];
        if (r)
            var S = s ? r(y, b, m, t, e, i) : r(b, y, m, e, t, i);
        if (S !== void 0) {
            if (S)
                continue;
            g = !1;
            break
        }
        if (h) {
            if (!Lh(t, function(k, C) {
                if (!Oh(h, C) && (b === k || o(b, k, n, r, i)))
                    return h.push(C)
            })) {
                g = !1;
                break
            }
        } else if (!(b === y || o(b, y, n, r, i))) {
            g = !1;
            break
        }
    }
    return i.delete(e),
    i.delete(t),
    g
}
var uo = gC;
function hC(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(r, o) {
        n[++t] = [o, r]
    }),
    n
}
var Mh = hC;
function vC(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = r
    }),
    n
}
var Rh = vC;
var yC = 1
  , wC = 2
  , bC = "[object Boolean]"
  , SC = "[object Date]"
  , PC = "[object Error]"
  , EC = "[object Map]"
  , xC = "[object Number]"
  , AC = "[object RegExp]"
  , TC = "[object Set]"
  , kC = "[object String]"
  , CC = "[object Symbol]"
  , IC = "[object ArrayBuffer]"
  , LC = "[object DataView]"
  , Nh = De ? De.prototype : void 0
  , aa = Nh ? Nh.valueOf : void 0;
function OC(e, t, n, r, o, i, s) {
    switch (n) {
    case LC:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
        e = e.buffer,
        t = t.buffer;
    case IC:
        return !(e.byteLength != t.byteLength || !i(new ia(e), new ia(t)));
    case bC:
    case SC:
    case xC:
        return Zr(+e, +t);
    case PC:
        return e.name == t.name && e.message == t.message;
    case AC:
    case kC:
        return e == t + "";
    case EC:
        var u = Mh;
    case TC:
        var d = r & yC;
        if (u || (u = Rh),
        e.size != t.size && !d)
            return !1;
        var l = s.get(e);
        if (l)
            return l == t;
        r |= wC,
        s.set(e, t);
        var p = uo(u(e), u(t), r, o, i, s);
        return s.delete(e),
        p;
    case CC:
        if (aa)
            return aa.call(e) == aa.call(t)
    }
    return !1
}
var Uh = OC;
var MC = 1
  , RC = Object.prototype
  , NC = RC.hasOwnProperty;
function UC(e, t, n, r, o, i) {
    var s = n & MC
      , u = ra(e)
      , d = u.length
      , l = ra(t)
      , p = l.length;
    if (d != p && !s)
        return !1;
    for (var m = d; m--; ) {
        var g = u[m];
        if (!(s ? g in t : NC.call(t, g)))
            return !1
    }
    var h = i.get(e)
      , b = i.get(t);
    if (h && b)
        return h == t && b == e;
    var y = !0;
    i.set(e, t),
    i.set(t, e);
    for (var S = s; ++m < d; ) {
        g = u[m];
        var k = e[g]
          , C = t[g];
        if (r)
            var N = s ? r(C, k, g, t, e, i) : r(k, C, g, e, t, i);
        if (!(N === void 0 ? k === C || o(k, C, n, r, i) : N)) {
            y = !1;
            break
        }
        S || (S = g == "constructor")
    }
    if (y && !S) {
        var L = e.constructor
          , U = t.constructor;
        L != U && "constructor"in e && "constructor"in t && !(typeof L == "function" && L instanceof L && typeof U == "function" && U instanceof U) && (y = !1)
    }
    return i.delete(e),
    i.delete(t),
    y
}
var Dh = UC;
var DC = 1
  , Fh = "[object Arguments]"
  , _h = "[object Array]"
  , co = "[object Object]"
  , FC = Object.prototype
  , Bh = FC.hasOwnProperty;
function _C(e, t, n, r, o, i) {
    var s = oe(e)
      , u = oe(t)
      , d = s ? _h : oa(e)
      , l = u ? _h : oa(t);
    d = d == Fh ? co : d,
    l = l == Fh ? co : l;
    var p = d == co
      , m = l == co
      , g = d == l;
    if (g && or(e)) {
        if (!or(t))
            return !1;
        s = !0,
        p = !1
    }
    if (g && !p)
        return i || (i = new gn),
        s || to(e) ? uo(e, t, n, r, o, i) : Uh(e, t, d, n, r, o, i);
    if (!(n & DC)) {
        var h = p && Bh.call(e, "__wrapped__")
          , b = m && Bh.call(t, "__wrapped__");
        if (h || b) {
            var y = h ? e.value() : e
              , S = b ? t.value() : t;
            return i || (i = new gn),
            o(y, S, n, r, i)
        }
    }
    return g ? (i || (i = new gn),
    Dh(e, t, n, r, o, i)) : !1
}
var Hh = _C;
function qh(e, t, n, r, o) {
    return e === t ? !0 : e == null || t == null || !Me(e) && !Me(t) ? e !== e && t !== t : Hh(e, t, n, r, qh, o)
}
var lo = qh;
var BC = 1
  , HC = 2;
function qC(e, t, n, r) {
    var o = n.length
      , i = o
      , s = !r;
    if (e == null)
        return !i;
    for (e = Object(e); o--; ) {
        var u = n[o];
        if (s && u[2] ? u[1] !== e[u[0]] : !(u[0]in e))
            return !1
    }
    for (; ++o < i; ) {
        u = n[o];
        var d = u[0]
          , l = e[d]
          , p = u[1];
        if (s && u[2]) {
            if (l === void 0 && !(d in e))
                return !1
        } else {
            var m = new gn;
            if (r)
                var g = r(l, p, d, e, t, m);
            if (!(g === void 0 ? lo(p, l, BC | HC, r, m) : g))
                return !1
        }
    }
    return !0
}
var zh = qC;
function zC(e) {
    return e === e && !et(e)
}
var fo = zC;
function WC(e) {
    for (var t = wt(e), n = t.length; n--; ) {
        var r = t[n]
          , o = e[r];
        t[n] = [r, o, fo(o)]
    }
    return t
}
var Wh = WC;
function jC(e, t) {
    return function(n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
    }
}
var po = jC;
function VC(e) {
    var t = Wh(e);
    return t.length == 1 && t[0][2] ? po(t[0][0], t[0][1]) : function(n) {
        return n === e || zh(n, e, t)
    }
}
var jh = VC;
function GC(e, t) {
    return e != null && t in Object(e)
}
var Vh = GC;
function KC(e, t, n) {
    t = no(t, e);
    for (var r = -1, o = t.length, i = !1; ++r < o; ) {
        var s = xt(t[r]);
        if (!(i = e != null && n(e, s)))
            break;
        e = e[s]
    }
    return i || ++r != o ? i : (o = e == null ? 0 : e.length,
    !!o && un(o) && Jr(s, o) && (oe(e) || eo(e)))
}
var Gh = KC;
function $C(e, t) {
    return e != null && Gh(e, t, Vh)
}
var Kh = $C;
var YC = 1
  , XC = 2;
function QC(e, t) {
    return dn(e) && fo(t) ? po(xt(e), t) : function(n) {
        var r = dh(n, e);
        return r === void 0 && r === t ? Kh(n, e) : lo(t, r, YC | XC)
    }
}
var $h = QC;
function JC(e) {
    return function(t) {
        return t?.[e]
    }
}
var Yh = JC;
function ZC(e) {
    return function(t) {
        return ro(t, e)
    }
}
var Xh = ZC;
function eI(e) {
    return dn(e) ? Yh(xt(e)) : Xh(e)
}
var Qh = eI;
function tI(e) {
    return typeof e == "function" ? e : e == null ? Sg : typeof e == "object" ? oe(e) ? $h(e[0], e[1]) : jh(e) : Qh(e)
}
var mo = tI;
function nI(e) {
    return function(t, n, r) {
        var o = Object(t);
        if (!cn(t)) {
            var i = mo(n, 3);
            t = wt(t),
            n = function(u) {
                return i(o[u], u, o)
            }
        }
        var s = e(t, n, r);
        return s > -1 ? o[i ? t[s] : s] : void 0
    }
}
var Jh = nI;
var rI = Math.max;
function oI(e, t, n) {
    var r = e == null ? 0 : e.length;
    if (!r)
        return -1;
    var o = n == null ? 0 : Kr(n);
    return o < 0 && (o = rI(r + o, 0)),
    Qr(e, mo(t, 3), o)
}
var Zh = oI;
var iI = Jh(Zh)
  , go = iI;
var aI = "[object String]";
function sI(e) {
    return typeof e == "string" || !oe(e) && Me(e) && Oe(e) == aI
}
var ev = sI;
function uI(e, t) {
    return Gr(t, function(n) {
        return e[n]
    })
}
var tv = uI;
function cI(e) {
    return e == null ? [] : tv(e, wt(e))
}
var nv = cI;
var dI = Math.max;
function lI(e, t, n, r) {
    e = cn(e) ? e : nv(e),
    n = n && !r ? Kr(n) : 0;
    var o = e.length;
    return n < 0 && (n = dI(o + n, 0)),
    ev(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Cg(e, t, n) > -1
}
var ho = lI;
var F;
(function(e) {
    e.Brave = "Brave",
    e.Chrome = "Chrome",
    e.Firefox = "Firefox",
    e.Safari = "Safari",
    e.Edge = "Microsoft Edge",
    e.Opera = "Opera",
    e.IE = "Internet Explorer",
    e.AndroidBrowser = "Android Browser",
    e.WebKit = "WebKit",
    e.Other = "Browser"
}
)(F || (F = {}));
var W;
(function(e) {
    e.macOS = "MacOSX",
    e.iOS = "iOS",
    e.Windows = "Windows",
    e.Android = "Android",
    e.Linux = "Linux",
    e.ChromeOS = "ChromeOS",
    e.Other = ""
}
)(W || (W = {}));
var rv = async e => {
    let t = await mI(e);
    return t === void 0 ? hI(e) : t
}
  , fI = new Map([["Brave", F.Brave], ["Google Chrome", F.Chrome], ["Microsoft Edge", F.Edge], ["Opera", F.Opera], ["Chromium", F.Chrome]])
  , pI = new Map([["Android", W.Android], ["Chrome OS", W.ChromeOS], ["Fuchsia", W.Other], ["iOS", W.iOS], ["Linux", W.Linux], ["macOS", W.macOS], ["Windows", W.Windows], ["Unknown", W.Other]])
  , mI = async e => {
    if (!navigator.userAgentData?.getHighEntropyValues)
        return;
    let t;
    try {
        t = await navigator.userAgentData.getHighEntropyValues(["fullVersionList", "platformVersion"])
    } catch {
        return
    }
    if (!t.fullVersionList || !t.platform || !t.platformVersion)
        return;
    let {fullVersionList: n, platform: r, platformVersion: o} = t
      , i = {
        name: F.Other,
        version: "0",
        osName: W.Other,
        osVersion: o
    };
    for (let[s,u] of fI) {
        if (i.version !== "0")
            break;
        for (let d of n)
            if (s === d.brand) {
                i.name = u,
                i.version = d.version;
                break
            }
    }
    if (i.name === F.Opera) {
        let s = sa(e, /OPR\/([\d.]+)/);
        if (s === "")
            return;
        i.version = s
    }
    if (i.version !== "0")
        return i.osName = pI.get(r) ?? W.Other,
        i.osName === W.Windows && (i.osVersion = gI(i.osVersion)),
        i
}
  , gI = e => {
    let t = e.split(".");
    if (!t[0])
        return e;
    let n = Number.parseInt(t[0], 10);
    if (Number.isNaN(n) || n < 0)
        return e;
    if (n > 0 && n < 13)
        return "10.0";
    if (n >= 13)
        return "11.0";
    if (!t[1])
        return e;
    switch (Number.parseInt(t[1], 10)) {
    case 1:
        return "7.0";
    case 2:
        return "8.0";
    case 3:
        return "8.1";
    default:
        return e
    }
}
  , hI = e => {
    e = e.toLowerCase();
    let t = go(vI, u => ho(e, u.term))
      , n = t ? t.name : F.Other;
    n === F.Chrome && "brave"in navigator && (n = F.Brave);
    let r = t ? sa(e, t.versionRegex) : ""
      , o = go(yI, u => ho(e, u.term))
      , i = o ? o.name : W.Other
      , s = o ? sa(e, o.versionRegex) : "";
    return i === W.macOS && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && (i = W.iOS,
    s = ""),
    {
        name: n,
        version: r,
        osName: i,
        osVersion: s
    }
}
  , sa = (e, t) => {
    if (!t)
        return "";
    let r = t.exec(e)?.[1];
    return r !== void 0 ? r.replace(/_/g, ".") : ""
}
  , vI = [{
    term: "msie",
    name: F.IE,
    versionRegex: /msie ([\d.]+)/
}, {
    term: "trident",
    name: F.IE,
    versionRegex: /rv:([\d.]+)/
}, {
    term: "edge",
    name: F.Edge,
    versionRegex: /edge\/([\d.]+)/
}, {
    term: "edg",
    name: F.Edge,
    versionRegex: /edg\/([\d.]+)/
}, {
    term: "opr",
    name: F.Opera,
    versionRegex: /opr\/([\d.]+)/
}, {
    term: "opera mobi",
    name: F.Opera,
    versionRegex: /version\/([\d.]+)/
}, {
    term: "opios",
    name: F.Opera,
    versionRegex: /opios\/([\d.]+)/
}, {
    term: "firefox",
    name: F.Firefox,
    versionRegex: /firefox\/([\d.]+)/
}, {
    term: "fxios",
    name: F.Firefox,
    versionRegex: /fxios\/([\d.]+)/
}, {
    term: "chrome",
    name: F.Chrome,
    versionRegex: /chrome\/([\d.]+)/
}, {
    term: "crios",
    name: F.Chrome,
    versionRegex: /crios\/([\d.]+)/
}, {
    term: "android",
    name: F.AndroidBrowser
}, {
    term: "safari",
    name: F.Safari,
    versionRegex: /version\/([\d.]+)/
}, {
    term: "applewebkit",
    name: F.WebKit,
    versionRegex: /applewebkit\/([\d.]+)/
}]
  , yI = [{
    term: "iphone",
    name: W.iOS,
    versionRegex: /os ([\d._]+)/
}, {
    term: "ipad",
    name: W.iOS,
    versionRegex: /os ([\d._]+)/
}, {
    term: "ipod",
    name: W.iOS,
    versionRegex: /os ([\d._]+)/
}, {
    term: "mac os x",
    name: W.macOS,
    versionRegex: /os x ([\d._]+)/
}, {
    term: "android;",
    name: W.Android,
    versionRegex: /android; ([\d.]+)/
}, {
    term: "android",
    name: W.Android,
    versionRegex: /android ([\d.]+)/
}, {
    term: "linux",
    name: W.Linux
}, {
    term: "cros",
    name: W.ChromeOS
}, {
    term: "windows",
    name: W.Windows,
    versionRegex: /windows nt ([\d.]+)/
}];
var ko = q($y());
var zW = [{
    name: F.Brave,
    minVersion: "109.0.0",
    displayVersion: "1.47.0"
}, {
    name: F.Chrome,
    minVersion: "109.0.0",
    displayVersion: "109"
}, {
    name: F.Edge,
    minVersion: "109.0.0",
    displayVersion: "109"
}, {
    name: F.Firefox,
    minVersion: "109.0.0",
    displayVersion: "109"
}, {
    name: F.Opera,
    minVersion: "95.0.0",
    displayVersion: "95"
}, {
    name: F.Safari,
    minVersion: "16.0.0",
    displayVersion: "16"
}];
async function Yy() {
    return await rv(navigator.userAgent)
}
var Xy = () => !0
  , Qy = () => !1;
var Jy = (e=0) => {
    let t = new Error().stack?.split(`
`);
    if (!t || e < 0)
        return;
    let n = e + 1
      , r = Xy() ? 1 : 0;
    if (!(n + r >= t.length))
        return t.splice(r, n),
        t.join(`
`)
}
  , ot = async (e=1) => new Promise(t => {
    setTimeout( () => t(), e)
}
);
var Ta = class {
    constructor(t) {
        this.transport = t;
        this.onEditedStateChanged = t => {
            this.transport.on("edited-state-changed", t)
        }
    }
    async sayHello() {
        return this.transport.request({
            name: "hello",
            data: void 0
        })
    }
    async analyzeFrame(t) {
        return this.transport.request({
            name: "analyze-frame",
            data: t
        })
    }
    async heartbeat() {
        return this.transport.request({
            name: "frame-manager-heartbeat"
        })
    }
    reportError(t) {
        let n = t.stack;
        n || (n = Jy(1));
        let r = {};
        for (let[o,i] of Object.entries(t.tags ?? {}))
            i && (r[o] = i.str);
        this.transport.request({
            name: "report-error",
            data: {
                name: t.name.str,
                message: t.message.str,
                tags: r,
                severity: t.severity,
                stack: n
            }
        }).catch(o => {
            let i = o instanceof Error ? o.message : o;
            console.error(`"report-error" failed to send: ${i}`)
        }
        )
    }
    async recordInlineMenuRenderEventAllAccounts(t) {
        return this.transport.request({
            name: "record-inline-menu-render-event-all-accounts",
            data: t
        })
    }
    async refreshCanRequestUnlock() {
        return this.transport.request({
            name: "refresh-can-request-unlock",
            data: void 0
        })
    }
    async getFrameManagerConfiguration() {
        return this.transport.request({
            name: "get-frame-manager-configuration",
            data: void 0
        })
    }
    async filterInlineMenu(t) {
        return this.transport.request(Qi({
            name: "filter-inline-menu",
            data: t
        }))
    }
    async getInlineSuggestions(t, n) {
        return this.transport.request({
            name: "get-inline-suggestions",
            data: {
                autofillType: t,
                suggestions: n
            }
        })
    }
    async focusInlineMenu() {
        return this.transport.request(Qi({
            name: "focus-inline-menu"
        }))
    }
    async requestManagedUnlock() {
        return this.transport.request({
            name: "request-managed-unlock",
            data: void 0
        })
    }
    async getSaveObjectPublicKey() {
        return this.transport.request({
            name: "get-save-object-public-key",
            data: void 0
        })
    }
    handleSaveItemRequest(t, n, r) {
        this.transport.request({
            name: "add-save-object",
            data: {
                type: t,
                data: n,
                encrypted: r
            }
        })
    }
    async addScrollAndResizeEventListeners() {
        return this.transport.request(ue({
            name: "add-scroll-and-resize-event-listeners"
        }, {
            targetParent: !0
        }))
    }
    async removeScrollAndResizeEventListeners() {
        return this.transport.request(ue({
            name: "remove-scroll-and-resize-event-listeners"
        }))
    }
    async clearFillSession() {
        return this.transport.request({
            name: "clear-fill-session"
        })
    }
    async resolvePendingFill() {
        return this.transport.request({
            name: "resolve-pending-fill",
            data: void 0
        })
    }
    onHostAppRestarted(t) {
        this.transport.on("host-app-restarted", t)
    }
    onShellPluginsUrlDetected(t) {
        this.transport.on("shell-plugins-url-detected", t)
    }
    onCanRequestUnlockChanged(t) {
        this.transport.on("can-request-unlock-changed", t)
    }
    onCollectFrameDetails(t) {
        this.transport.on("collect-frame-details", t)
    }
    onRefreshItems(t) {
        this.transport.on("refresh-items", t)
    }
    onPerformFill(t) {
        this.transport.on("perform-fill", ({payload: n, authorizedUnsafeHttp: r}) => {
            let o;
            "response"in n && "status"in n ? o = n : o = {
                response: n,
                status: Zy.FillStatus.None
            },
            t(o, r)
        }
        )
    }
    async editedStateChanged(t, n) {
        return this.transport.request(ue({
            name: "edited-state-changed",
            data: {
                formEdited: t,
                fieldEdited: n
            }
        }))
    }
    onLockStateChanged(t) {
        this.transport.on("lock-state-changed", t)
    }
    onBlurActiveField(t) {
        this.transport.on("blur-active-field", t)
    }
    onFocusPage(t) {
        this.transport.on("focus-page", t)
    }
    onPing(t) {
        this.transport.on("ping", t)
    }
    onFrozenAccountInfoChanged(t) {
        this.transport.on("frozen-accounts-changed", t)
    }
    onAddScrollAndResizeEventListeners(t) {
        this.transport.on("add-scroll-and-resize-event-listeners", t)
    }
    onRemoveScrollAndResizeEventListeners(t) {
        this.transport.on("remove-scroll-and-resize-event-listeners", t)
    }
    onForwardInlineMenuPosition(t) {
        this.transport.on("forward-inline-menu-position", t)
    }
    onGetFrameOrigin(t) {
        this.transport.on("get-frame-origin", t)
    }
    sendFrameOrigin(t) {
        this.transport.request({
            name: "provide-frame-origin",
            data: {
                uuid: t
            }
        })
    }
    onForwardActiveFieldDetails(t) {
        this.transport.on("forward-active-field-details", t)
    }
    onInlineButtonPressed(t) {
        this.transport.on("inline-button-pressed", t)
    }
    async pageReady() {
        return this.transport.request({
            name: "page-ready",
            data: void 0
        })
    }
    async sendInlineMenuOpened() {
        return this.transport.request(ue({
            name: "inline-menu-opened"
        }))
    }
    async sendInlineMenuClosed() {
        return this.transport.request(ue({
            name: "inline-menu-closed"
        }))
    }
    async sendVerificationToken(t) {
        return this.transport.request(ue({
            name: "verification-token",
            data: t
        }))
    }
    onRequestVerificationToken(t) {
        this.transport.on("request-verification-token", t)
    }
    onResizeInlineMenu(t) {
        this.transport.on("resize-inline-menu", t)
    }
    onItemDetailValueDragStart(t) {
        this.transport.on("item-detail-value-drag-start", t)
    }
    onItemDetailValueDragEnd(t) {
        this.transport.on("item-detail-value-drag-end", t)
    }
    onRemoveInlineMenu(t) {
        this.transport.on("remove-inline-menu", t)
    }
    onFocusInlineMenuFrame(t) {
        this.transport.on("focus-inline-menu-frame", t)
    }
    onInlineMenuReady(t) {
        this.transport.on("inline-menu-ready", t)
    }
    onKeyDown(t) {
        this.transport.on("key-down", t)
    }
    onPageExcluded(t) {
        this.transport.on("page-excluded", t)
    }
    onGetHideOnThisPagePermission(t) {
        this.transport.on("get-hide-on-this-page-permission", t)
    }
    onShowInline(t) {
        this.transport.on("show-inline", t)
    }
    onRequestFillAuthorization(t) {
        this.transport.on("request-fill-authorization", t)
    }
    onShowNotification(t) {
        this.transport.on("show-notification", t)
    }
    onHideNotification(t) {
        this.transport.on("hide-notification", t)
    }
    onReplaceNotification(t) {
        this.transport.on("replace-notification", t)
    }
    onResizeNotification(t) {
        this.transport.on("resize-notification", t)
    }
    onPerformEnterAnimation(t) {
        this.transport.on("notification-enter-animation", t)
    }
    onRequestFocus(t) {
        this.transport.on("focus-notification", t)
    }
    onNotificationExitComplete(t) {
        this.transport.on("notification-exit-complete", t)
    }
    onActiveNotification(t) {
        this.transport.on("active-notification", t)
    }
    onGetNestedFrameConfiguration(t) {
        this.transport.on("get-nested-frame-configuration", t)
    }
    async inlineButtonPressed() {
        return this.transport.request(ue({
            name: "inline-button-pressed"
        }))
    }
    onRemoveInlineButton(t) {
        this.transport.on("remove-inline-button", t)
    }
    onRemoveInlineButtonTooltip(t) {
        this.transport.on("remove-inline-button-tooltip", t)
    }
    async forwardInlineMenuPosition(t, n) {
        return this.transport.request(ue({
            name: "forward-inline-menu-position",
            data: {
                configuration: t,
                matchableFrameWindowProps: n
            }
        }, {
            targetParent: !0
        }))
    }
    async removeInlineMenu() {
        return this.transport.request(ue({
            name: "remove-inline-menu",
            data: void 0
        }))
    }
    async focusInlineMenuFrame() {
        return this.transport.request(ue({
            name: "focus-inline-menu-frame"
        }))
    }
    onSettingsChanged(t) {
        this.transport.on("notify-settings-changed", t)
    }
    async createCredential(t) {
        return this.transport.request({
            name: "create-credential",
            data: t
        })
    }
    async getCredential(t) {
        return this.transport.request({
            name: "get-credential",
            data: t
        })
    }
    async shouldInterceptWebauthnRequest() {
        return this.transport.request({
            name: "should-intercept-webauthn-request",
            data: void 0
        })
    }
    async sendKeyDown(t, n, r) {
        return this.transport.request(ue({
            name: "key-down",
            data: {
                key: t,
                formEdited: n,
                fieldEdited: r
            }
        }))
    }
    onInlineMenuOpened(t) {
        this.transport.on("inline-menu-opened", t)
    }
    onInlineMenuClosed(t) {
        this.transport.on("inline-menu-closed", t)
    }
    async getNestedFrameConfiguration() {
        return this.transport.request(ue({
            name: "get-nested-frame-configuration"
        }))
    }
    async showNotification(t) {
        return this.transport.request(ue({
            name: "show-notification",
            data: t
        }))
    }
    async forwardActiveFieldDetails(t, n) {
        return this.transport.request(ue({
            name: "forward-active-field-details",
            data: {
                activeFieldDetails: t,
                matchableFrameWindowProps: n
            }
        }, {
            targetParent: !0
        }))
    }
    async removeInlineButton(t) {
        return this.transport.request(ue({
            name: "remove-inline-button",
            data: {
                frameIdentifier: t
            }
        }))
    }
    async removeInlineButtonTooltip() {
        return this.transport.request(ue({
            name: "remove-inline-button-tooltip"
        }))
    }
    async getShellPluginSiteConfig() {
        return this.transport.request({
            name: "shell-plugins-site-config"
        })
    }
    async triggerShellPluginSaveIn1PasswordNotification() {
        return this.transport.request({
            name: "shell-plugins-save-in-1password-notification"
        })
    }
    async triggerShellPluginFallbackNotification() {
        return this.transport.request({
            name: "shell-plugins-fallback-notification"
        })
    }
    async getLastDetectedShellPluginsCredentials(t) {
        return this.transport.request({
            name: "shell-plugins-get-last-detected-credentials",
            data: t
        })
    }
    async setLastDetectedShellPluginsCredentials(t) {
        return this.transport.request({
            name: "shell-plugins-set-last-detected-credentials",
            data: t
        })
    }
    onSshOpenCreateKeyModal(t) {
        return this.transport.on("ssh-focus-create-form", t)
    }
    async sshFocusPublicKeyField() {
        return this.transport.request({
            name: "ssh-focus-public-key-field"
        })
    }
    onFrameTookFocus(t) {
        this.transport.on("frame-takes-focus", t)
    }
    async frameTookFocus(t, n) {
        return this.transport.request(ue({
            name: "frame-takes-focus",
            data: {
                frameIdentifier: t,
                removeMenu: n
            }
        }))
    }
    on(t, n) {
        let r = this.transport.on(t, n);
        return () => this.transport.off(t, r)
    }
    off(t, n) {
        return this.transport.off(t, n)
    }
}
  , w = new Ta(ag());
var K = q(re())
  , mM = [K.AutofillType.Username, K.AutofillType.CurrentPassword, K.AutofillType.NewPassword, K.AutofillType.CcName, K.AutofillType.CcGivenName, K.AutofillType.CcAdditionalName, K.AutofillType.CcFamilyName, K.AutofillType.CcCsc, K.AutofillType.CcExp, K.AutofillType.CcExpMonth, K.AutofillType.CcExpYear, K.AutofillType.CcType, K.AutofillType.CcNumber, K.AutofillType.Name, K.AutofillType.GivenName, K.AutofillType.AdditionalName, K.AutofillType.FamilyName, K.AutofillType.StreetAddress, K.AutofillType.AddressLine1, K.AutofillType.AddressLine2, K.AutofillType.AddressLevel1, K.AutofillType.AddressLevel2, K.AutofillType.Country, K.AutofillType.PostalCode];
function pr(e, t, n, r) {
    return !e || t === "new-password" && !r || !n ? !1 : mM.includes(t)
}
var yb = q(re());
var yn = q(re());
var Ke = (e, t) => {
    if (!e)
        return !1;
    let n = t && e.offsetParent ? t.getComputedStyle(e.offsetParent) : e.offsetParent instanceof HTMLElement && e.offsetParent.style || void 0;
    if (!gM(e.offsetParent, n))
        return !1;
    let r = t ? t.getComputedStyle(e) : e.style;
    if (r?.visibility === "hidden" || r?.display === "none")
        return !1;
    let o = e.offsetParent.getBoundingClientRect();
    return o.width === 0 || o.height === 0 || n?.visibility === "hidden" ? !1 : !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
}
  , gM = (e, t) => !(!e || Qy() && t?.position === "fixed" && e.tagName.toLowerCase() === "body");
var hM = /\r?\n/
  , ka = e => (e.trim().split(hM).shift() || "").trim()
  , vM = /[\r\n\s]+/gm
  , Ht = e => e.replace(vM, " ").trim();
var ew = () => an().crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
  , ie = e => {
    window.performance.mark && window.performance.mark("browser::collect_frame " + e)
}
  , it = e => {
    let t = "browser::collect_frame " + e;
    window.performance.measure && window.performance.measure(t, t + "Start", t + "End")
}
  , Ca = (e, t) => e ? t.has(e.tagName.toLowerCase()) : !1
  , yM = new Set(["script", "style"])
  , qt = e => Ca(e, yM) ? "" : e.innerText || e.textContent || "";
var wM = new Set(["body", "button", "form", "head", "iframe", "input", "option", "script", "select", "table", "tr", "textarea", "math"])
  , bM = new Set([HTMLScriptElement, HTMLStyleElement, HTMLButtonElement, HTMLOptionElement, HTMLTextAreaElement])
  , tw = 150
  , SM = /[^!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9\s]/
  , Co = class e {
    constructor(t, n) {
        console.assert(Ke(t), "element must be visible for correct tree traversal"),
        this.direction = n,
        this.pauseNode = this.nextPauseNode(t),
        this.walker = e.createTreeWalker(t, n)
    }
    static createTreeWalker(t, n) {
        let r = document.body
          , o = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
          , i = {
            acceptNode: u => u.nodeType === Node.TEXT_NODE && u.parentElement && bM.has(u.parentElement.constructor) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        }
          , s = document.createTreeWalker(r, o, i);
        return s.currentNode = t,
        n === 1 && t.nextSibling && (s.currentNode = t.nextSibling,
        s.previousNode()),
        s
    }
    normalizeStrings(t) {
        return t.length ? (this.direction === 0 && (t = t.reverse()),
        t.join(" ").trim().replace(/\s+/g, " ")) : ""
    }
    advanceWalker() {
        return this.direction === 0 ? !!this.walker.previousNode() : !!this.walker.nextNode()
    }
    nextPauseNode(t) {
        if (this.direction === 0)
            return t.parentElement;
        for (; t.parentElement; ) {
            if (t.parentElement.nextSibling)
                return t.parentElement.nextSibling;
            t = t.parentElement
        }
        return null
    }
    shouldPauseAtNode(t) {
        return t !== this.pauseNode ? !1 : (this.pauseNode = this.nextPauseNode(this.pauseNode),
        !0)
    }
    shouldStopAtNode(t) {
        if (this.direction === 1 && t === this.pauseNode)
            return !0;
        if (t.nodeType !== Node.ELEMENT_NODE)
            return !1;
        let n = t;
        return n instanceof HTMLInputElement && (n.type === "text" || n.type === "password") ? Ke(n) : Ca(n, wM)
    }
    findLabelText() {
        ie("labelFinderStart");
        let t = [];
        for (; this.advanceWalker(); ) {
            let r = this.walker.currentNode;
            if (this.shouldStopAtNode(r))
                break;
            if (this.shouldPauseAtNode(r)) {
                if (t.length) {
                    let s = this.normalizeStrings(t);
                    return s.length > tw ? "" : s
                }
                continue
            }
            let o = r instanceof HTMLElement ? r : r.parentElement;
            if (!Ke(o)) {
                this.skipInvisibleElement();
                continue
            }
            if (r.nodeType !== Node.TEXT_NODE)
                continue;
            let i = r.nodeValue;
            i && SM.test(i) && t.push(i)
        }
        let n = this.normalizeStrings(t);
        return ie("labelFinderEnd"),
        it("labelFinder"),
        n.length > tw ? "" : n
    }
    skipInvisibleElement() {
        let t = this.walker.currentNode;
        if (this.direction === 0)
            for (; t.parentElement && !Ke(t.parentElement); )
                t = t.parentElement;
        else if (t.firstChild)
            for (t = t.firstChild; t.nextSibling || t.firstChild; )
                t = t.nextSibling || t.firstChild;
        this.walker.currentNode = t
    }
}
  , Io = e => Ke(e) ? new Co(e,0).findLabelText() : ""
  , nw = e => Ke(e) ? new Co(e,1).findLabelText() : "";
function rw(e, t, n, r, o, i) {
    let s = e instanceof HTMLInputElement
      , u = e instanceof HTMLTextAreaElement
      , d = e instanceof HTMLSelectElement
      , l = s || u || d
      , p = t;
    e.opid = p;
    let m = l ? e.getAttribute("autocomplete") : void 0
      , g = s && e.checked
      , h = (s || u) && e.readOnly
      , b = l && e.opUserEdited
      , y = l && e.opAutofilledBy
      , S = (s || u) && e.maxLength && e.maxLength > 0 ? e.maxLength : void 0
      , k = (s || u) && e.minLength && e.minLength > 0 ? e.minLength : void 0
      , C = s || u ? e.placeholder : void 0
      , N = d ? xM(e, o) : void 0
      , L = n || Ke(e, r)
      , U = s ? e.getAttribute("passwordrules") : void 0
      , I = Object.entries(e.dataset).reduce( (M, [H,Y=""]) => ({
        ...M,
        [H]: Y
    }), {});
    return {
        autocompleteType: m || void 0,
        formOpid: o?.opid,
        htmlId: e.id || void 0,
        htmlName: e.name || void 0,
        htmlClass: e.className || void 0,
        isActive: n || void 0,
        isAriaDisabled: e.getAttribute("aria-disabled") === "true" || void 0,
        isAriaHasPopup: e.getAttribute("aria-haspopup") === "true" || void 0,
        isAriaHidden: e.getAttribute("aria-hidden") === "true" || void 0,
        isChecked: g || void 0,
        isDisabled: e.disabled || void 0,
        isHidden: !L || void 0,
        isReadOnly: h || void 0,
        isUserEdited: b || void 0,
        autofilledBy: y || void 0,
        maxLength: S,
        minLength: k,
        opid: p,
        placeholder: C || void 0,
        selectOptions: N,
        tabIndex: e.tabIndex || void 0,
        title: e.title || void 0,
        type: PM(e.type),
        value: i ? void 0 : EM(e) || void 0,
        passwordRules: U || void 0,
        dataAttributes: I
    }
}
var PM = e => Object.values(yn.ElementType).find(t => t === e) ?? yn.ElementType.Unknown
  , EM = e => {
    let {type: t, value: n} = e;
    switch (t) {
    case yn.ElementType.Submit:
    case yn.ElementType.Button:
    case yn.ElementType.Reset:
        return n === "" ? ka(qt(e)) : n;
    default:
        return n
    }
}
  , xM = (e, t) => {
    let {options: n} = e
      , r = [];
    return n && n.length > 0 && [...n].forEach(o => {
        r.push(Ht(o.text)),
        r.push(o.value)
    }
    ),
    t && t.textContent && (t.textContent = Ht(t.textContent.replace(Ht(qt(e)), ""))),
    r.length ? r : void 0
}
  , ow = (e, t) => {
    t.label = TM(e) || void 0,
    t.labelAria = AM(e) || void 0,
    t.labelData = e.getAttribute("data-label") || void 0,
    t.labelBefore = Io(e) || void 0,
    t.labelAfter = nw(e) || void 0
}
  , AM = e => {
    let t = e.getAttribute("aria-label");
    if (t)
        return t;
    let n = e.getAttribute("aria-labelledby");
    if (!n)
        return "";
    let r = "";
    for (let o of n.split(" ")) {
        let i = document.getElementById(o);
        i && (r += qt(i) + " ")
    }
    return Ht(r)
}
  , TM = e => e.labels && e.labels.length > 0 ? [...e.labels].map(t => ka(qt(t))).join(" ") : "";
var iw = (e, t, n) => {
    let r = t;
    if (e.opid = r,
    n)
        return {
            opid: r
        };
    let o, i;
    return CM(e) || (o = Io(e) || void 0,
    i = Ht(qt(e)) || void 0),
    {
        headerText: o,
        htmlAction: kM(e) || void 0,
        htmlId: e.getAttribute("id") || void 0,
        htmlMethod: e.getAttribute("method") || void 0,
        htmlName: e.getAttribute("name") || void 0,
        opid: r,
        textContent: i
    }
}
  , kM = e => {
    let t = e.ownerDocument ? e.ownerDocument.defaultView : void 0;
    if (t) {
        let n = e.getAttribute("action");
        return n ? new URL(n,t.location.href).href : t.location.href
    }
    return ""
}
  , CM = e => e.parentElement === document.body;
function wn(e) {
    let t = new Set
      , n = i => document.createNodeIterator(i, NodeFilter.SHOW_ELEMENT, s => t.has(s) ? NodeFilter.FILTER_REJECT : Ia(s) || e(s) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP)
      , r = []
      , o = i => {
        for (let s = i.nextNode(); s !== null; s = i.nextNode())
            s instanceof HTMLElement && s.shadowRoot ? (o(n(s.shadowRoot)),
            t.add(s)) : r.push(s)
    }
    ;
    return document.body && o(n(document.body)),
    r
}
var Ia = e => e instanceof HTMLElement && e.shadowRoot !== null;
function zt() {
    let e = document.activeElement;
    for (; e?.shadowRoot; )
        e = e.shadowRoot.activeElement;
    return e
}
var aw = e => Ki.includes(e.nodeName)
  , at = e => e.composedPath()[0] ?? e.target
  , sw = e => {
    let t = new Set
      , n = r => {
        let i = (m => {
            let g = m;
            for (; g; ) {
                if (g instanceof ShadowRoot)
                    return g;
                g = g.parentNode
            }
            return g
        }
        )(r);
        if (!i || t.has(i))
            return;
        t.add(i);
        let s = r
          , u = i.host
          , d = m => m instanceof Node
          , l = m => {
            m.target && m.target !== s && d(m.target) && (s = m.target,
            e(m))
        }
          , p = () => {
            i.removeEventListener("focusin", l, !0),
            u.removeEventListener("blur", p, !1),
            t.delete(i)
        }
        ;
        i.addEventListener("focusin", l, !0),
        u.addEventListener("blur", p, !1),
        n(u)
    }
    ;
    return r => {
        let o = at(r);
        o instanceof Node && n(o),
        e(r)
    }
}
;
var uw = (e, t) => {
    if (!e.body)
        return {
            focusedElement: void 0,
            fieldElements: [],
            formElements: [],
            fieldElementToForm: () => null
        };
    let n = {
        focusedElement: void 0,
        fieldElements: [],
        formElements: [],
        formToFieldMap: new Map
    };
    La(Oa(e.body), n);
    let r = () => n.focusedElement ? n.focusedElement : e.activeElement && st(e.activeElement) ? e.activeElement : void 0;
    return n.focusedElement = t.activeField ? t.activeField : r(),
    {
        ...n,
        fieldElementToForm: o => n.formToFieldMap.get(o) ?? null
    }
}
;
function La(e, t, n) {
    let r = null;
    for (; e.nextNode() !== null; )
        if (r = e.currentNode,
        r instanceof HTMLElement && r.shadowRoot) {
            La(Oa(r.shadowRoot), t, n);
            let o = r.shadowRoot.activeElement;
            o && !o.shadowRoot && st(o) && (t.focusedElement = o)
        } else if (r instanceof HTMLFormElement) {
            t.formElements.push(r);
            let o = La(Oa(r), t, r);
            o && (e.currentNode = o,
            r = o)
        } else
            st(r) && (t.fieldElements.push(r),
            n && t.formToFieldMap.set(r, n));
    return r
}
var IM = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE"])
  , LM = e => aw(e) || IM.has(e.nodeName) || e instanceof HTMLInputElement && e.type === "hidden" ? NodeFilter.FILTER_REJECT : Ia(e) || e.nodeName === "FORM" || st(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  , Oa = e => document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, LM);
var mr = e => {
    ie("collectFrameStart");
    let t = RM(document, e);
    return ie("collectFrameEnd"),
    it("collectFrame"),
    t
}
  , st = e => e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement || e instanceof HTMLButtonElement;
var OM = 200
  , MM = 50
  , RM = (e, t) => {
    Ma();
    let n = e.defaultView ? e.defaultView : an();
    n.uuid = ew();
    let {focusedElement: r, fieldElements: o, formElements: i, fieldElementToForm: s} = uw(e, t);
    ie("setOpidUndefinedStart"),
    o.forEach(y => {
        y.opid = void 0
    }
    ),
    ie("setOpidUndefinedEnd"),
    it("setOpidUndefined");
    let u = {
        max: t.maxTime || MM,
        start: Date.now()
    };
    if (r) {
        let y = o.findIndex(S => S === r);
        r.opid = y !== -1 ? y : void 0
    }
    let d = t.activeFormOnly && r && r instanceof HTMLInputElement && s(r) || void 0
      , l = NM(t, i, d)
      , p = UM(t, o, s, l, u, n, r)
      , {shouldCaptureOnInput: m, unleashFeatures: g} = v.getState();
    if (m && g["b5x-recollect-fields-for-identities"]) {
        let y = Date.now()
          , S = 2e3;
        for (let k of o) {
            let C = k.value;
            Ra.push(setInterval( () => {
                k.value !== C ? ($("autosave-capture", void 0),
                Ma()) : y - Date.now() > S && Ma()
            }
            , 150))
        }
    }
    let h = n.origin && n.origin !== "null" ? n.origin : void 0;
    return {
        direction: e.dir || void 0,
        fields: p,
        forms: [...l.values()],
        origin: h ? {
            type: "url",
            content: {
                origin: h,
                pathName: n.location.pathname
            }
        } : void 0,
        title: e.title || void 0,
        uuid: n.uuid
    }
}
  , NM = (e, t, n) => {
    ie("collectAllFormsStart");
    let r = new Map;
    for (let[o,i] of t.entries()) {
        let s = !!e.activeFormOnly && i !== n;
        r.set(i, iw(i, o, s))
    }
    return ie("collectAllFormsEnd"),
    it("collectAllForms"),
    r
}
  , Ra = []
  , Ma = () => {
    Ra.forEach(e => clearInterval(e)),
    Ra = []
}
  , UM = (e, t, n, r, o, i, s) => {
    ie("collectAllFieldsStart");
    let u = s && s.opid ? s.opid : 0, d = new Array(t.length), l = 0, p = 0, m, g = Math.min(t.length, e.maxFields || OM);
    for (l = 0; l < g && dw(o); l++) {
        p = cw(l, u, t.length),
        m = t[p];
        let h = n(m);
        if (e.activeFormOnly && s && h !== n(s)) {
            g < t.length && g++;
            continue
        }
        let b = m === s
          , y = h ? r.get(h) : void 0;
        d[p] = rw(m, p, b, i, y, e.excludeValues)
    }
    for ({fields: d, fieldElements: t} = DM(d, t),
    ie(`fields: ${d.length}`),
    ie(`field elements: ${g}`),
    ie("setLabelsOnFieldsStart"),
    p = 0,
    l = 0; l < d.length && dw(o); l++)
        p = cw(l, Math.ceil(d.length / 2), d.length),
        ow(t[p], d[p]);
    return ie(`labels set: ${l}`),
    ie("setLabelsOnFieldsEnd"),
    it("setLabelsOnFields"),
    ie("collectAllFieldsEnd"),
    it("collectAllFields"),
    d
}
  , DM = (e, t) => (ie("syncFieldsAndElementsStart"),
e = e.filter(Boolean),
t = t.filter(n => n.opid !== void 0),
ie("syncFieldsAndElementsEnd"),
it("syncFieldsAndElements"),
{
    fields: e,
    fieldElements: t
})
  , cw = (e, t, n) => {
    let r = Math.ceil(e / 2)
      , o = t - r
      , i = t + r
      , s = e % 2;
    return o >= 0 && i < n ? s ? o : i : o < 0 ? e : n - e - 1
}
  , dw = e => Date.now() - e.start < e.max;
var pw = q(re());
var Wt = q(re());
var Da = async (e, t, n) => _M[e.action](e, t, n)
  , FM = ["idmsa.apple.com", "appleid.apple.com"]
  , _M = {
    [Wt.Action.ClickOpid]: ({opid: e}, t, n) => {
        if (e === void 0)
            return -1;
        let r = t.findIndex(i => i.opid === e)
          , o = t[r];
        return o && o.click(),
        r
    }
    ,
    [Wt.Action.ClickQuerySelector]: ({querySelector: e}, t, n) => {
        if (e === void 0)
            return -1;
        let r = document.querySelector(e);
        return r && r.click(),
        r ? t.indexOf(r) : -1
    }
    ,
    [Wt.Action.FillOpid]: ({value: e, opid: t}, n, r) => {
        if (t === void 0)
            return -1;
        let o = n.findIndex(s => s.opid === t)
          , i = n[o];
        return i && Ua(i, e, r),
        o
    }
    ,
    [Wt.Action.FillQuerySelector]: ({value: e, querySelector: t}, n, r) => {
        if (t === void 0)
            return -1;
        let o = document.querySelector(t);
        return o && Ua(o, e, r),
        o ? n.indexOf(o) : -1
    }
    ,
    [Wt.Action.FocusOpid]: ({opid: e}, t, n) => {
        if (e === void 0)
            return -1;
        let r = t.findIndex(i => i.opid === e)
          , o = t[r];
        return o && Lo(o, !0),
        r
    }
    ,
    [Wt.Action.Submit]: async ({opid: e, fallbackOpid: t}, n, r) => {
        let o = n.findIndex(u => u.opid === e)
          , i = n[o]
          , s = async () => {
            let u = n.findIndex(l => l.opid === t)
              , d = n[u];
            return d ? (await Na(d, !0),
            u) : -1
        }
        ;
        if (!i || FM.includes(window.location.hostname))
            return s();
        if (i && (i instanceof HTMLInputElement && i.type === "submit" || i instanceof HTMLButtonElement && i.type !== "reset")) {
            if (i.disabled) {
                if (await ot(250),
                !i.disabled)
                    return i.click(),
                    o
            } else
                return i.click(),
                o;
            return s()
        }
        return i ? (await Na(i, !0),
        o) : -1
    }
};
var ut = "data-com-onepassword-filled"
  , mw = async (e, t) => {
    let n = [];
    if (typeof uuid < "u" && uuid !== "")
        for (let r of e) {
            let o = BM(uuid, r, t);
            n.push(o)
        }
    else
        console.error("Failed to fillFrame: Frame is missing uuid.");
    await Promise.all(n)
}
;
var BM = async (e, t, n) => {
    if (!zM(e, t.uuid) || !HM(t.allowedTargets) || !qM(t.allowUnsafeHttp || n.authorizedUnsafeHttp))
        return 0;
    let r = Fa()
      , o = r.slice()
      , i = 0;
    for (let s of t.operations) {
        let u = await Da(s, o, n);
        u !== -1 && (o = o.slice(u + 1),
        i++),
        await ot()
    }
    return t.postFill && (await Da(t.postFill, r, n) !== -1 && i++,
    await ot()),
    i
}
  , Lo = (e, t) => {
    let n = e.value;
    e.type !== "checkbox" && e.click(),
    e.focus(),
    t && e.value !== n && (e.value = n)
}
  , HM = e => {
    if (e.type === "Anywhere")
        return !0;
    if (!window.origin || window.origin === "null")
        return !1;
    let {hostname: t} = window.location;
    return e.data.filter(n => n.type === "Url").some(n => n.data.toLowerCase() === t.toLowerCase() || t.endsWith(`.${n.data}`))
}
  , qM = (e=!1) => window.location.protocol === "https:" || e
  , zM = (e, t) => !!e && e === t
  , WM = e => {
    let t = e.value;
    gw(e),
    e.dispatchEvent(new Event("input",{
        bubbles: !0,
        cancelable: !0
    })),
    e.dispatchEvent(new Event("change",{
        bubbles: !0,
        cancelable: !0
    })),
    e.setAttribute(ut, "");
    let n = () => {
        e.hasAttribute(ut) && e.removeAttribute(ut),
        e.removeEventListener("input", n)
    }
    ;
    e.addEventListener("input", n),
    hw(e),
    e.value === "" && (e.value = t),
    e.blur()
}
;
function Fa() {
    return wn(st)
}
var gw = e => {
    e.dispatchEvent(new KeyboardEvent("keydown",{
        bubbles: !0,
        cancelable: !0
    })),
    e.dispatchEvent(new KeyboardEvent("keypress")),
    e.dispatchEvent(new KeyboardEvent("keyup"))
}
  , Na = async (e, t) => {
    await ot(),
    Lo(e, t),
    await ot(50),
    e.dispatchEvent(new KeyboardEvent("keydown",{
        code: "Enter",
        key: "Enter",
        charCode: 0,
        keyCode: 13,
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window
    })),
    e.dispatchEvent(new KeyboardEvent("keypress",{
        code: "Enter",
        key: "Enter",
        charCode: 13,
        keyCode: 13,
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window
    })),
    e.dispatchEvent(new InputEvent("beforeinput",{
        bubbles: !0,
        cancelable: !0,
        inputType: "insertLineBreak",
        composed: !0
    })),
    e.dispatchEvent(new KeyboardEvent("keyup",{
        code: "Enter",
        key: "Enter",
        charCode: 0,
        keyCode: 13,
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window
    }))
}
  , hw = e => {
    let t = window.getComputedStyle(e).backgroundColor ?? ""
      , n = lw(t);
    if (n.alpha > .5 && t !== "transparent") {
        let d = fw(n) > .5 ? "light" : "dark";
        return e.setAttribute(ut, d)
    }
    let r = window.getComputedStyle(e).color ?? ""
      , o = lw(r)
      , s = fw(o) < .5 ? "light" : "dark";
    e.setAttribute(ut, s)
}
  , lw = e => {
    let t = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0
    };
    if (!e.startsWith("rgb"))
        return t;
    let n = e.split("(")[1].split(")")[0].split(",").map(r => r.trim());
    return n && n.length >= 3 && (t = {
        red: Number(n[0]),
        green: Number(n[1]),
        blue: Number(n[2]),
        alpha: n.length === 4 ? Number(n[3]) : 1
    }),
    t
}
  , fw = e => (.2126 * e.red + .7152 * e.green + .0722 * e.blue) / 255
  , Ua = (e, t, n) => {
    e instanceof HTMLButtonElement || e instanceof HTMLInputElement && e.type === "submit" || (e.opUserEdited = !0,
    e.opAutofilledBy = pw.AutofilledBy.Us,
    e.type === "checkbox" ? e.checked !== !!t && e.click() : n?.fixFillingEvents ? VM(e, t) : (jM(e),
    e.value = t,
    WM(e)))
}
  , jM = e => {
    let t = e.value;
    Lo(e),
    gw(e),
    e.value === "" && (e.value = t)
}
;
function VM(e, t) {
    let n;
    {
        let o = new DataTransfer;
        o.setData("text/plain", t),
        n = new ClipboardEvent("paste",{
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            clipboardData: o
        })
    }
    let r = [t, new FocusEvent("focus",{
        bubbles: !1,
        cancelable: !1,
        composed: !0
    }), new KeyboardEvent("keydown",{
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        key: "Meta",
        code: "MetaLeft",
        location: 1,
        keyCode: 91,
        metaKey: !0,
        which: 91
    }), new KeyboardEvent("keydown",{
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        key: "v",
        code: "KeyV",
        keyCode: 86,
        location: 0,
        which: 86
    }), n, new InputEvent("beforeinput",{
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        data: t,
        inputType: "insertFromPaste"
    }), t, new InputEvent("input",{
        bubbles: !0,
        cancelable: !1,
        composed: !0,
        inputType: "insertFromPaste"
    }), new KeyboardEvent("keyup",{
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        key: "Meta",
        code: "MetaLeft",
        keyCode: 91,
        location: 1,
        which: 91
    }), new KeyboardEvent("keyup",{
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        key: "v",
        code: "KeyV"
    }), new Event("change",{
        bubbles: !0,
        cancelable: !1,
        composed: !1
    }), new FocusEvent("blur",{
        bubbles: !1,
        cancelable: !1,
        composed: !0
    })];
    for (let o of r)
        o instanceof Event ? e.dispatchEvent(o) : (e.value = t,
        hw(e));
    e.addEventListener("input", () => {
        e.hasAttribute(ut) && e.removeAttribute(ut)
    }
    , {
        once: !0
    })
}
var bn = q(re());
var vw = "001"
  , yw = "002";
var ww = "004";
var _a = (r => (r.Login = "login",
r.CreditCard = "creditCard",
r.Identity = "identity",
r))(_a || {})
  , bw = {
    login: {
        priority: 0,
        setting: "autoSaveEnabled",
        templateUuid: vw,
        triggers: [bn.AutofillType.CurrentPassword, bn.AutofillType.NewPassword]
    },
    creditCard: {
        priority: 1,
        setting: "autoSaveCreditCardsEnabled",
        templateUuid: yw,
        triggers: [bn.AutofillType.CcNumber]
    },
    identity: {
        featureFlag: "b5x-autosave-identities",
        priority: 2,
        setting: "autoSaveIdentitiesEnabled",
        templateUuid: ww,
        triggers: [bn.AutofillType.AddressLine1, bn.AutofillType.StreetAddress]
    }
};
var Cw = q(re())
  , Iw = q(Mo());
var dR = ["IMG", "SVG", "CANVAS"]
  , lR = ["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE"]
  , fR = 4
  , pR = ["2fa", "2stepverification", "authenticationcode", "authenticator", "authy", "barcodelogin", "googleauthenticator", "loginverification", "microsoftauthenticator", "multifactor", "onetimepassword", "qrcode", "qrsignin", "scancode", "scantoconnect", "securelogin", "securitykey", "temporaryaccesscode", "timebasedcode", "totp", "twofactor", "verifyidentity"]
  , mR = () => document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
    acceptNode(e) {
        return dR.includes(e.nodeName.toUpperCase()) ? NodeFilter.FILTER_ACCEPT : lR.includes(e.nodeName.toUpperCase()) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_SKIP
    }
})
  , gR = e => {
    if (e == null)
        return null;
    let t = e.parentNode
      , n = 0;
    for (; n < fR && t !== null; ) {
        if (t instanceof HTMLElement && t.innerText && t.innerText.trim().length > 0)
            return t.innerText;
        t = t.parentNode,
        n++
    }
    return null
}
  , hR = e => e instanceof HTMLImageElement ? [e.alt, e.className, e.id, e.title] : e instanceof HTMLCanvasElement ? [e.id, e.className, e.title] : e instanceof SVGElement ? [e.id] : []
  , vR = e => {
    let t = hR(e)
      , n = gR(e);
    return n !== null && t.push(n),
    t
}
  , yR = e => {
    let t = o => o.trim().replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
      , n = vR(e).map(t).filter(o => o !== "");
    return pR.some(o => n.some(i => i.includes(o)))
}
  , wR = () => {
    if (!document.body)
        return [];
    let e = []
      , t = mR();
    for (; t.nextNode(); ) {
        let n = t.currentNode;
        Sn(n) && e.push(n)
    }
    return e
}
  , Sn = e => e instanceof HTMLImageElement || e instanceof SVGElement && e.nodeName === "svg" || e instanceof HTMLCanvasElement
  , Aw = 100
  , Tw = 400
  , kw = e => Sn(e) && e.clientWidth >= Aw && e.clientWidth <= Tw && e.clientHeight >= Aw && e.clientHeight <= Tw
  , bR = e => Sn(e) && (e.clientWidth === 0 || e.clientHeight === 0)
  , Ro = class {
    constructor() {
        this.detectedQRCodes = new Set,
        this.mutationObserver = new MutationObserver(t => {
            for (let n of t) {
                for (let r of n.addedNodes)
                    Sn(r) && this.intersectionObserver.observe(r);
                for (let r of n.removedNodes)
                    Sn(r) && (this.intersectionObserver.unobserve(r),
                    this.resizeObserver.unobserve(r),
                    this.detectedQRCodes.delete(r))
            }
        }
        ),
        this.intersectionObserver = new IntersectionObserver( (t, n) => {
            for (let r of t) {
                if (!r.isIntersecting)
                    continue;
                let o = r.target;
                if (!Sn(o)) {
                    n.unobserve(o);
                    return
                }
                if (bR(o)) {
                    n.unobserve(o),
                    this.resizeObserver.observe(o);
                    continue
                }
                if (kw(o)) {
                    if (!this.detectedQRCodes.has(o))
                        if (yR(o))
                            this.detectedQRCodes.add(o);
                        else {
                            n.unobserve(o);
                            return
                        }
                    $("autosave-qr-code-detected", void 0)
                } else
                    n.unobserve(o)
            }
        }
        ,{
            threshold: 1
        }),
        this.resizeObserver = new ResizeObserver( (t, n) => {
            for (let r of t) {
                let o = r.target;
                o.clientHeight === 0 || o.clientWidth === 0 || (n.unobserve(o),
                kw(o) && this.intersectionObserver.observe(o))
            }
        }
        ),
        D("configured", t => t && this.run())
    }
    run() {
        let {unleashFeatures: t, autosaveTotpEnabled: n} = v.getState();
        if (!(!n || !t["b5x-autosave-totp"])) {
            for (let r of wR())
                this.intersectionObserver.observe(r);
            this.mutationObserver.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }
    }
    stop() {
        this.mutationObserver.disconnect(),
        this.intersectionObserver.disconnect(),
        this.resizeObserver.disconnect()
    }
}
;
var No = class {
    constructor() {
        this.addListeners = () => {
            window.addEventListener("click", this.onClick, !0),
            window.addEventListener("keydown", this.onKeyDown, !0),
            window.addEventListener("submit", this.onSubmission, !0)
        }
        ;
        this.removeListeners = () => {
            window.removeEventListener("click", this.onClick, !0),
            window.removeEventListener("keydown", this.onKeyDown, !0),
            window.removeEventListener("submit", this.onSubmission, !0)
        }
        ;
        this.onClick = t => {
            if (!t.isTrusted)
                return;
            let n = t.target instanceof HTMLInputElement || t.target instanceof HTMLButtonElement ? t.target : null
              , r = n?.tagName.toLowerCase() ?? "";
            (r === "button" || r === "input") && n?.type === "submit" ? this.onSubmission() : t.target instanceof HTMLElement && (t.target.closest("[type='submit']") || t.target.closest("[role='button']")) && this.onSubmission()
        }
        ;
        this.onKeyDown = t => {
            if (!t.isTrusted || t.key !== "Enter")
                return;
            let n = t.target instanceof HTMLInputElement ? t.target : null;
            (n?.type === "text" || n?.type === "password" || n?.type === "email") && this.onSubmission()
        }
        ;
        this.onSubmission = (0,
        Iw.default)(async () => $("autosave-submission", void 0), 250),
        this.autosave2FAManager = new Ro,
        Ie("autosave-notify-capture", t => {
            v.dispatch({
                type: "set-should-capture-on-input",
                payload: t
            })
        }
        ),
        D("shouldCaptureOnInput", t => {
            t ? this.addListeners() : this.removeListeners()
        }
        )
    }
    onCapture(t, n) {
        let {enabledAutosaveTypes: r, shouldCaptureOnInput: o} = v.getState();
        if (r.length !== 0)
            if (o)
                $("autosave-capture", void 0);
            else {
                let i;
                n && n.fieldDesignation !== Cw.AutofillType.None && (i = Object.values(_a).find(s => r.includes(s) ? bw[s].triggers.some(u => u === n.fieldDesignation) : !1)),
                i && $("autosave-capture", i)
            }
    }
}
;
function Uo(e, t, n) {
    let r = document.createElement("div");
    r.style.position = "fixed",
    r.style.zIndex = "1000000",
    r.style.display = "flex",
    r.style.flexDirection = "column",
    r.style.alignItems = "flex-start",
    t.append(r);
    let o = document.createElement("div")
      , i = document.createElement("span");
    o.style.border = `2px solid ${n.color}`,
    i.innerText = n.text,
    i.style.background = n.color,
    i.style.color = "white",
    i.style.textAlign = "center",
    i.style.padding = "0px 10px",
    r.append(o),
    r.append(i);
    let s = !1
      , u = () => {
        if (s)
            return;
        let d = e.getBoundingClientRect();
        r.style.top = `${d.top}px`,
        r.style.left = `${d.left}px`,
        o.style.width = `${d.width}px`,
        o.style.height = `${d.height}px`,
        requestAnimationFrame(u)
    }
    ;
    return u(),
    {
        element: e,
        options: n,
        remove: () => {
            s = !0,
            r.remove()
        }
    }
}
function Do(e, t, n, r) {
    let o = document.createElement("style");
    o.innerHTML = ":host { all: initial; font-family: sans-serif; }",
    e.append(o);
    let i = document.createElement("div");
    i.style.position = "fixed",
    i.style.zIndex = "1000001",
    i.style.bottom = "0px",
    i.style.left = "0px",
    i.style.padding = "10px",
    i.style.background = "red",
    i.style.display = "flex",
    i.style.alignItems = "center",
    e.append(i);
    let s = document.createElement("span");
    s.innerText = r,
    s.style.color = "white",
    s.style.marginRight = "4px",
    i.append(s);
    for (let d of n)
        d.attachment && d.attachment(i);
    let u = document.createElement("button");
    u.innerText = "close",
    i.append(u),
    u.addEventListener("click", () => {
        for (let d of n)
            d.remove();
        t.remove()
    }
    )
}
function Lw() {
    let e = Fa()
      , t = document.createElement("com-1password-autosubmit-highlights");
    document.body.append(t);
    let n = t.attachShadow({
        mode: "closed"
    });
    window.addEventListener("click", async r => {
        let o = r.target;
        if (!st(o) || !o.opid)
            return;
        let i = await $("autosubmit-detect-elements", {
            opid: o.opid
        });
        if (!i.ok) {
            i.type === "error" && console.error(i.error),
            i.type === "nolistener" && console.error("No listener registered for AutosubmitDetectElements");
            return
        }
        let s = i.data.reduce( (d, l) => d && d.score > l.score ? d : l)
          , u = [];
        for (let d of i.data) {
            let l = e.find(m => m.opid === d.opid);
            if (!l)
                continue;
            let p = "red";
            d.opid === s.opid ? p = "green" : d.score !== 0 && (p = "orange"),
            u.push(Uo(l, n, {
                text: `Score: ${d.score}`,
                color: p
            }))
        }
        Do(n, t, u, `Detected ${u.length} autosubmit element(s)`)
    }
    )
}
var Ow = {
    INLINE_MENU_RENDER: (e, t, n) => {
        let r = {
            overallStatus: Fo(e),
            overallDuration: _o(e),
            domScanStatus: Fo(t.get("DOM_SCAN")),
            domScanDuration: _o(t.get("DOM_SCAN")),
            analyzeFrameStatus: Fo(t.get("ANALYZE_FRAME")),
            analyzeFrameDuration: _o(t.get("ANALYZE_FRAME")),
            renderMenuStatus: Fo(t.get("RENDER_INLINE_MENU")),
            renderMenuDuration: _o(t.get("RENDER_INLINE_MENU"))
        };
        n(r)
    }
}
  , Fo = e => e ? e.status : "NOT_STARTED"
  , _o = e => !e || !e.endedAt ? 0 : e.endedAt - e.startedAt;
var Ha = class {
    constructor(t, n) {
        this.steps = new Map,
        this.overallStatus = {
            status: "INCOMPLETE",
            startedAt: Date.now()
        },
        this.reportEventCallback = n,
        this.eventReportMethod = Ow[t]
    }
    startStep(t) {
        let n = new qa;
        return this.steps.set(t, n),
        n
    }
    finish() {
        this.overallStatus.status = "COMPLETED",
        this.finalizeAndReport()
    }
    incomplete() {
        this.overallStatus.status = "INCOMPLETE",
        this.finalizeAndReport()
    }
    finalizeAndReport() {
        this.overallStatus.endedAt = Date.now(),
        this.eventReportMethod(this.overallStatus, this.steps, this.reportEventCallback)
    }
}
  , qa = class {
    constructor() {
        this.status = "INCOMPLETE",
        this.startedAt = Date.now()
    }
    complete() {
        this.endedAt = Date.now(),
        this.status = "COMPLETED"
    }
}
;
function Mw(e, t) {
    return new Ha(e,t)
}
var za = q(re())
  , Wa = q(Mo());
var Bo = class {
    constructor() {
        this.ensureFillableField = ({configured: t=v.getState().configured, fillInProgress: n=v.getState().fillInProgress, inlineDisabled: r=v.getState().inlineDisabled, target: o=zt()}, i) => {
            !t || r || n || !Hr(o) || i?.(o)
        }
        ;
        this.onFocus = t => {
            let {activeField: n} = v.getState()
              , r = at(t);
            er(n, r) || (n && this.onInputBlur?.(),
            this.ensureFillableField({
                inlineDisabled: !1,
                target: r
            }, this.resolvePendingFill))
        }
        ;
        this.onAnimationStart = t => {
            let n = at(t);
            t.animationName === "onautofillstart" && (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement || n instanceof HTMLSelectElement) && (n.opUserEdited = !0,
            n.opAutofilledBy = za.AutofilledBy.Browser,
            n.value.length > 0 && this.closeMenu?.())
        }
        ;
        this.onInput = t => {
            let n = at(t)
              , {activeField: r} = v.getState();
            t.isTrusted && (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement || n instanceof HTMLSelectElement) && (n.opUserEdited = !0,
            n.opAutofilledBy && (n.opAutofilledBy = void 0)),
            r && n === r && this.onActiveInputChange?.(n),
            this.onInputChange?.(n)
        }
        ;
        this.onKeyDown = t => {
            let {activeField: n, inlineMenuOpen: r} = v.getState()
              , o = at(t);
            if (!(!n || o !== n) && !(t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) && ["ArrowUp", "ArrowDown", "Escape"].includes(t.key)) {
                if (r)
                    t.stopImmediatePropagation(),
                    t.preventDefault();
                else if (tr(n))
                    return;
                this.onActiveInputKeyDown?.(t.key)
            }
        }
        ;
        this.onMouseDown = t => {
            let {activeField: n, unleashFeatures: r} = v.getState();
            if (!t.isTrusted && r["b5x-trusted-mouse-down-events"])
                return;
            let o = at(t);
            if (er(n, o))
                return;
            o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || w.frameTookFocus(v.getState().frameIdentifier, !0).catch( () => console.error("Failed to notify focus taken"));
            let i = zt();
            if (!n && o === i) {
                this.ensureFillableField({
                    target: o
                }, this.onInputFocus);
                return
            }
            this.onInputBlur?.()
        }
        ;
        this.resolvePendingFill = t => {
            let {fillPendingUserInteraction: n, inlineDisabled: r} = v.getState()
              , o = i => {
                r || this.onInputFocus?.(i)
            }
            ;
            if (n && t.opAutofilledBy !== za.AutofilledBy.Us) {
                w.resolvePendingFill().then(i => {
                    i || (v.dispatch({
                        type: "cancel-pending-fill"
                    }),
                    o(t))
                }
                );
                return
            }
            o(t)
        }
        ;
        this.activeFieldVisibilityObserver = new IntersectionObserver(t => {
            for (let n of t) {
                let {width: r, height: o} = n.boundingClientRect;
                !n.isIntersecting && r === 0 && o === 0 && this.onInputBlur?.()
            }
        }
        ),
        this.focusinListener = sw((0,
        Wa.default)(this.onFocus, 10)),
        window.addEventListener("focusin", this.focusinListener, !0),
        window.addEventListener("keydown", (0,
        Wa.default)(this.onKeyDown, 10), !0),
        window.addEventListener("animationstart", this.onAnimationStart, !0),
        window.addEventListener("input", this.onInput, !0),
        window.addEventListener("mousedown", this.onMouseDown, !0),
        D("inlineDisabled", t => {
            this.ensureFillableField({
                inlineDisabled: t
            }, this.onInputFocus)
        }
        ),
        D("configured", t => {
            this.ensureFillableField({
                configured: t,
                inlineDisabled: !1
            }, this.resolvePendingFill)
        }
        ),
        D("fillInProgress", t => {
            this.ensureFillableField({
                fillInProgress: t
            }, this.onInputFocus)
        }
        ),
        D("activeField", t => {
            t ? this.activeFieldVisibilityObserver.observe(t) : this.activeFieldVisibilityObserver.disconnect()
        }
        )
    }
}
;
var Ho = class {
    constructor() {
        this.isFieldEdited = t => this._getFormState(t).editedFields.has(t);
        this.getFieldAnalysis = t => this.trackedFieldAnalysis.get(t);
        this._isFieldOrFormEdited = t => this._getFormState(t).editedFieldCount > 0;
        this._onInputFocus = async t => {
            if (!this._shouldDecorate(t))
                return;
            let n = Mw("INLINE_MENU_RENDER", async r => w.recordInlineMenuRenderEventAllAccounts(r));
            await ge.conditionalObserve(v.getState().unleashFeatures["b5x-client-performance-tracing"], "inline-getSuggestions", async r => this._getSuggestions(t, n, r).then(o => {
                if (o.suggestions.length > 0) {
                    if (v.dispatch({
                        type: "set-active-field",
                        payload: t
                    }),
                    v.dispatch({
                        type: "set-active-field-analysis",
                        payload: o
                    }),
                    v.getState().unleashFeatures["b5x-metric-gate-inline-menu-render"]) {
                        let i = n.startStep("RENDER_INLINE_MENU")
                          , s = ge.createActiveSpan("RENDER_INLINE_MENU", r)
                          , u = () => {}
                          , d = () => {
                            u && (u(),
                            i.complete(),
                            ge.endActiveSpan(s),
                            n.finish())
                        }
                        ;
                        u = w.on("inline-menu-ready", d)
                    }
                    this._ensureFieldIsTracked(t),
                    this.onActiveInputFocus && this.onActiveInputFocus(this.isEdited, this.isFieldEdited(t))
                } else
                    w.removeInlineMenu()
            }
            ).catch(o => {
                `${o}`
            }
            ))
        }
        ;
        this._onInputBlur = () => {
            this.onActiveInputBlur && this.onActiveInputBlur()
        }
        ;
        this._ensureFormIsTracked = t => {
            let n = this.trackedForms.get(t);
            return n || (n = {
                initialValues: new WeakMap,
                editedFields: new WeakSet,
                editedFieldCount: 0
            },
            this.trackedForms.set(t, n)),
            n
        }
        ;
        this._ensureStandaloneFieldIsTracked = t => {
            let n = this.trackedStandaloneFields.get(t);
            return n || (n = {
                initialValues: new WeakMap,
                editedFields: new WeakSet,
                editedFieldCount: 0
            },
            this.trackedStandaloneFields.set(t, n)),
            n
        }
        ;
        this._getFormState = t => t.form ? this._ensureFormIsTracked(t.form) : this._ensureStandaloneFieldIsTracked(t);
        this._ensureFieldIsTracked = t => {
            let n = this._getFormState(t);
            n.initialValues.has(t) || n.initialValues.set(t, t.value)
        }
        ;
        this._onActiveInputKeyDown = t => {
            let {activeField: n} = v.getState()
              , r = n ? this.isFieldEdited(n) : !1;
            this.onActiveInputKeyDown?.(t, this.isEdited, r)
        }
        ;
        this._onActiveInputChange = t => {
            let n = this._getFormState(t);
            if (v.getState().fillInProgress) {
                n.editedFields.has(t) && (n.editedFields.delete(t),
                n.editedFieldCount--);
                return
            }
            let r = this._isFieldOrFormEdited(t)
              , o = this.isFieldEdited(t);
            n.initialValues.get(t) === t.value ? n.editedFields.has(t) && (n.editedFields.delete(t),
            n.editedFieldCount--) : n.editedFields.has(t) || (n.editedFields.add(t),
            n.editedFieldCount++);
            let i = this._isFieldOrFormEdited(t)
              , s = this.isFieldEdited(t);
            (r !== i || o !== s) && w.editedStateChanged(i, s),
            this.onActiveInputChange?.(t)
        }
        ;
        this._closeMenu = () => {
            this.closeMenu?.()
        }
        ;
        this._shouldDecorate = t => t.offsetWidth >= 50 && t.offsetHeight >= 5 && (t instanceof HTMLTextAreaElement || t.offsetWidth >= t.offsetHeight * 2);
        this._getSuggestions = async (t, n, r) => {
            let o = this.trackedFieldAnalysis.get(t);
            if (o)
                return o;
            if (this.trackedFieldAnalysis.has(t))
                throw new Error("suggestions are already being computed for field");
            this.trackedFieldAnalysis.set(t, void 0);
            let i = n.startStep("DOM_SCAN"), s = ge.createActiveSpan("DOM-SCAN", r), u;
            try {
                u = mr({
                    activeFormOnly: !0
                })
            } catch (m) {
                throw n.incomplete(),
                ge.endActiveSpan(s, !0),
                m
            }
            i.complete(),
            ge.endActiveSpan(s);
            let d = n.startStep("ANALYZE_FRAME"), l = ge.createActiveSpan("ANALYZE_FRAME", r), p;
            try {
                p = await w.analyzeFrame(u)
            } catch (m) {
                throw n.incomplete(),
                ge.endActiveSpan(l),
                m
            }
            return d.complete(),
            ge.endActiveSpan(l),
            this.trackedFieldAnalysis.set(t, p),
            p
        }
        ;
        this.inputManager = new Bo,
        this.inputManager.onInputFocus = this._onInputFocus,
        this.inputManager.onInputBlur = this._onInputBlur,
        this.inputManager.onActiveInputKeyDown = this._onActiveInputKeyDown,
        this.inputManager.onActiveInputChange = this._onActiveInputChange,
        this.inputManager.onInputChange = t => this.onInputChange?.(t),
        this.inputManager.closeMenu = this._closeMenu,
        this.trackedForms = new WeakMap,
        this.trackedStandaloneFields = new WeakMap,
        this.trackedFieldAnalysis = new WeakMap
    }
    get isEdited() {
        let {activeField: t} = v.getState();
        return t ? this._isFieldOrFormEdited(t) : !1
    }
}
;
var gr = q(re());
var qo = class {
    constructor() {
        this.saveButtons = [];
        this._dispatchSaveError = t => {
            t && (t.disabled = !0);
            let n = [{
                text: "Something is preventing us from saving your item."
            }, {
                text: "Make sure 1Password in your browser is up to date",
                url: "https://support.1password.com/update-1password-browser/?utm_medium=promo&utm_source=save-button&utm_campaign=save-in-1password"
            }, {
                text: "or contact support for this site."
            }];
            document.dispatchEvent(new CustomEvent("OPButtonEvent",{
                detail: {
                    header: "We aren\u2019t able to save your item",
                    body: n,
                    error: !0,
                    buttonId: t?.getAttribute("id")
                }
            }))
        }
        ;
        this._handleSaveItemRequest = t => {
            let n;
            if (t.version === 1) {
                let i = t.buttonElement?.getAttribute("data-onepassword-input-id");
                i ? n = document.getElementById(i) : n = document.querySelector("input[data-onepassword-save-request]")
            } else
                n = t.buttonElement;
            if (!n)
                throw new Error("No Save Item Request found.");
            let r = n.getAttribute("data-onepassword-type")
              , o = n.value;
            typeof r == "string" && Rw(r) ? w.handleSaveItemRequest(r, o, t.shouldProvidePublicKey) : this._dispatchSaveError(t.buttonElement ? t.buttonElement : null)
        }
        ;
        this.init(),
        document.addEventListener("OPButtonAdded", () => {
            this.init()
        }
        )
    }
    init() {
        this.setSaveButtonsAndVersions(),
        this.setPublicKey(),
        this.registerButtons()
    }
    setSaveButtonsAndVersions() {
        document.querySelectorAll("onepassword-save-button").forEach(t => {
            let n = t.shadowRoot?.querySelector("button[data-onepassword-save-button]");
            n && this.saveButtons.push({
                version: 2,
                buttonElement: n,
                shouldProvidePublicKey: t.hasAttribute("data-onepassword-provide-public-key")
            })
        }
        ),
        document.querySelectorAll("button[data-onepassword-save-button]").forEach(t => {
            this.saveButtons?.push({
                version: 1,
                buttonElement: t,
                shouldProvidePublicKey: t.hasAttribute("data-onepassword-provide-public-key")
            })
        }
        )
    }
    async setPublicKey() {
        if (this.saveButtons.some(n => n.shouldProvidePublicKey)) {
            let n = await w.getSaveObjectPublicKey();
            document.body.setAttribute("data-onepassword-public-key", btoa(JSON.stringify(n)))
        }
    }
    registerButtons() {
        this.saveButtons.forEach(t => {
            t.buttonElement.disabled = !1,
            this.setModalContent(t),
            t.buttonElement.addEventListener("click", () => {
                this._handleSaveItemRequest(t)
            }
            )
        }
        )
    }
    setModalContent(t) {
        if (t.version !== 2)
            return;
        let n = t.buttonElement.getAttribute("data-onepassword-type");
        !Rw(n) && t ? this._dispatchSaveError(t.buttonElement) : document.dispatchEvent(new CustomEvent("OPButtonEvent",{
            detail: {
                header: "What\u2019s Save in 1Password?",
                buttonId: t.buttonElement.getAttribute("id"),
                body: [{
                    text: `Save this ${n?.replace("-", " ")} in 1Password automatically.`
                }]
            }
        }))
    }
}
;
function Rw(e) {
    return [gr.CreateItemType.Login, gr.CreateItemType.CreditCard, gr.CreateItemType.ApiKey, gr.CreateItemType.CryptoWallet].includes(e)
}
var He = q(re());
function SR(e) {
    return e ? e.indexOf("http://") === 0 || e.indexOf("https://") === 0 ? e : `https://${e}` : ""
}
function ct(e) {
    if (e.length === 0)
        return;
    let t;
    try {
        t = new URL(SR(e))
    } catch {
        return
    }
    switch (t.host.toLowerCase().split(".").slice(-2).join(".")) {
    case "amazon.com":
        return He.UsoProvider.Amazon;
    case "apple.com":
        return He.UsoProvider.Apple;
    case "discord.com":
        return He.UsoProvider.Discord;
    case "facebook.com":
        return He.UsoProvider.Facebook;
    case "github.com":
        return He.UsoProvider.GitHub;
    case "google.com":
    case "youtube.com":
        return He.UsoProvider.Google;
    case "live.com":
    case "microsoft.com":
    case "microsoftonline.com":
    case "hotmail.com":
    case "office.com":
        return He.UsoProvider.Microsoft;
    case "okta.com":
        return He.UsoProvider.Okta;
    case "slack.com":
        return He.UsoProvider.Slack;
    case "twitter.com":
        return He.UsoProvider.Twitter;
    default:
        return
    }
}
var lb = q(re())
  , fb = q(Mo());
var Uw = q(re());
function Dw(e) {
    let t = ct(e);
    if (!t)
        return;
    let n;
    try {
        n = new URL(e)
    } catch {
        return
    }
    let r = n.searchParams;
    if (r.has("client_id") && r.has("response_type"))
        return t
}
var PR = ["gov", "org", "com", "co", "edu", "net", "mil"];
function Tt(e) {
    if (e.startsWith("/") || e.startsWith("#") || typeof process < "u" && !1)
        return Tt(window.location.href);
    let t;
    try {
        t = new URL(e)
    } catch {
        return
    }
    if (!/https?:/.test(t.protocol.toLowerCase()))
        return;
    let r = t.host.toLowerCase().split(".");
    if (r.length > 2) {
        let o = r.slice(-3);
        if (PR.some(i => i === o[1]) && o[2].length === 2)
            return o.join(".")
    }
    return r.slice(-2).join(".")
}
function Fw(e) {
    let t = []
      , n = e.getAttribute("aria-labelledby");
    if (n && n.length > 0) {
        let r = document.getElementById(n);
        r && t.push(r)
    }
    if (e.id && e.id.length) {
        let r = e.id.replace(/['"]/g, "\\$&")
          , o = document.querySelector(`label[for="${r}"]`);
        o && t.push(o)
    }
    return t
}
function _w(e) {
    return Array.from(e.querySelectorAll("img").values())
}
var ER = /[\W_]/g
  , xR = /xbox(live)?/g;
function At(e) {
    return e.trim().replace(ER, "").toLowerCase().replace(xR, Uw.UsoProvider.Microsoft)
}
function Nw(e) {
    return e.split(/\s/).map(t => t.trim()).filter(Boolean)
}
function ja(e) {
    let t = [];
    return e.innerText && e.innerText.length > 0 && t.push(...Nw(e.innerText).map(At)),
    ["label", "aria-label", "id", "title", "onclick", "class", "name"].forEach(n => {
        let r = e.getAttribute(n);
        r && r.length > 0 && t.push(...Nw(r).map(At))
    }
    ),
    t
}
var AR = ["signin", "signup", "login", "auth"]
  , Bw = {
    name: "AnchorTagAttrsClue",
    run: function(t, n) {
        if (n.nodeName !== "a")
            return 0;
        let r = 0;
        if ((n.attributes.href ?? "").length === 0 || !n.anchorHrefDomain)
            return 0;
        if (n.anchorHrefProvider && n.anchorHrefIsOAuthUrl)
            t ? r += n.anchorHrefProvider === t ? 2 : -2 : r += 2;
        else if (n.frameBaseDomain === n.anchorHrefDomain) {
            let o = At(decodeURI(n.attributes.href));
            AR.some(s => o.includes(s)) && (Le.filter(s => s !== t).some(s => o.includes(s)) ? r -= 3 : (o.includes(t) || n.sanitizedTokens.some(s => s === t)) && (r += 1))
        } else
            r -= 500;
        return r
    }
};
var Pn = class {
    constructor(t, n) {
        this.input = t;
        this.windowSize = n;
        this.length = this.input.length - this.windowSize + 1
    }
    *[Symbol.iterator]() {
        let t = 0;
        for (; t <= this.length - 1; ) {
            let n = this.input.slice(t, t + this.windowSize);
            t++,
            yield n
        }
    }
    forEach(t) {
        for (let n of this)
            t(n)
    }
    map(t) {
        let n = [];
        for (let r of this)
            n.push(t(r));
        return n
    }
    filter(t) {
        let n = [];
        for (let r of this)
            t(r) && n.push(r);
        return n
    }
    some(t) {
        return this.filter(t).length > 0
    }
}
;
var jt = ["signinwith", "continuewith", "loginwith", "signupwith", "continueas", "loginusing"]
  , Hw = {
    name: "ContainsLoginLanguageClue",
    run: function(t, n) {
        let r = n.sanitizedTokens.length < 3 ? 2 : 3
          , o = new Pn(n.sanitizedTokens,r);
        for (let i of o) {
            let s = i.join("");
            if (jt.some(u => s.includes(u)))
                return 1
        }
        return 0
    }
};
var TR = ["test", "testid", "id", "provider", "platform", "qa", "method", "ylk", ...Le]
  , kR = ["upload", "drive"]
  , qw = {
    name: "DataAttributesClue",
    run: function(t, n) {
        let r = 0
          , o = Object.keys(n.dataset);
        if (o.length === 0)
            return 0;
        let i = Le.filter(u => u !== t);
        if (Object.keys(n.dataset).some(u => i.some(d => u.toLowerCase().includes(d) || n.dataset[u]?.toLowerCase().includes(d))))
            r -= 2;
        else {
            let u = o.filter(p => TR.some(m => p.includes(m)));
            for (let p of kR)
                for (let m of n.sanitizedTokens)
                    p === m && (r -= 2);
            u.some(p => p.toLowerCase().includes(t) || n.dataset[p]?.toLowerCase().includes(t)) && (r += 2),
            u.some(p => jt.some(m => p.includes(m) || n.dataset[p]?.includes(m))) && (r += 1)
        }
        return r
    }
};
var zw = q(re());
var Ww = {
    name: "ExactStringMatchClue",
    run: function(t, n) {
        let r = 0
          , o = [...jt.map(u => `${u}${t}`.toLowerCase()), `${t}exchange`];
        t === zw.UsoProvider.Microsoft && (o.push(...jt.map(u => `${u}xbox`.toLowerCase())),
        o.push(...jt.map(u => `${u}xboxlive`.toLowerCase())));
        let i = n.sanitizedTokens.length < 4 ? 3 : 4
          , s = new Pn(n.sanitizedTokens,i);
        for (let u of s) {
            let d = u.join("");
            o.find(p => d === p || d.includes(p)) && (r += 2)
        }
        return r
    }
};
var CR = ["projectpath", "issue", "issuetype", "project", "mergerequest"]
  , jw = {
    name: "DisqualifyingClue",
    run: (e, t) => {
        let n = Object.keys(t.dataset);
        return t.nodeName === "a" && CR.some(r => n.includes(r)) ? -1 : 0
    }
};
var Vw = {
    name: "IncludesProviderNameClue",
    run: function(t, n) {
        let r = new Set;
        return n.sanitizedTokens.forEach(o => {
            let i = Le.find(s => o === s);
            i && r.add(i)
        }
        ),
        r.size > 1 || r.size === 0 || r.size === 1 && r.values().next().value !== t ? -3 : 1
    }
};
var Gw = {
    name: "IsIframeClue",
    run: function(t, n) {
        let r = 0;
        return (n.nodeName === "iframe" || n.nodeName === "frame") && (n.frameSrcProvider === t ? r += 1 : n.frameSrcProvider && (r -= 3)),
        r
    }
};
var Kw = q(re())
  , IR = ["https://accounts.google.com/gsi/button"]
  , $w = {
    name: "KnownIframeClue",
    run: (e, t) => IR.some(n => window.location.href.startsWith(n) && e === Kw.UsoProvider.Google && t.nodeName === "div") ? 5 : 0
};
var LR = ["a", "button"]
  , OR = ["figure", "aside", "article", "section", "header", "footer", "nav", "table"]
  , Yw = {
    name: "NodeNameClue",
    run: function(t, n) {
        let r = n.nodeName;
        return LR.some(o => r === o) ? 1 : OR.some(o => r === o) ? -2 : 0
    }
};
var MR = ["button", "link"]
  , Xw = {
    name: "RoleAttrsClue",
    run: function(t, n) {
        return [n.attributes.role, n.attributes["aria-role"]].filter(o => o && o.length > 0).map(o => o?.toLowerCase()).some(o => MR.some(i => o.toLowerCase() === i)) ? 1 : 0
    }
};
var RR = ["share", "tweet", "community", "group", "follow"]
  , Qw = {
    name: "SocialShareButtonClue",
    run: function(t, n) {
        return n.sanitizedTokens.some(o => RR.some(i => o.includes(i))) ? -1 : 0
    }
};
function Va(e) {
    return {
        topFrameNakedDomain: e,
        frameBaseDomain: Tt(window.location.href)
    }
}
function Ga(e, t) {
    let n = e instanceof HTMLAnchorElement
      , o = e instanceof HTMLFrameElement || e instanceof HTMLIFrameElement ? e.getAttribute("src") ?? void 0 : void 0;
    return {
        ...t,
        nodeName: e.nodeName.toLowerCase(),
        attributes: DR(e.attributes),
        dataset: UR(e.dataset),
        anchorHrefDomain: n ? Tt(e.href)?.toLowerCase() : void 0,
        anchorHrefProvider: n ? ct(e.href) : void 0,
        anchorHrefIsOAuthUrl: n ? !!Dw(e.href) : !1,
        frameSrcDomain: o ? Tt(o) : void 0,
        frameSrcProvider: o ? ct(o) : void 0,
        sanitizedTokens: NR(e)
    }
}
function NR(e) {
    let t = ja(e);
    for (let n of [...Fw(e), ..._w(e)])
        t.push(...ja(n));
    return t
}
function UR(e) {
    let t = {};
    for (let n of Object.keys(e)) {
        let r = e[n];
        r && r.length > 0 && (t[At(n)] = At(r))
    }
    return t
}
function DR(e) {
    let t = {};
    for (let n of e)
        n.name.startsWith("data-") || (t[n.name] = At(n.value));
    return t
}
function zo(e) {
    if (!e)
        return;
    for (; !(e instanceof HTMLElement); )
        if (e = e?.parentNode ?? void 0,
        !e)
            return;
    switch (e.tagName.toLowerCase()) {
    case "html":
        return "html";
    case "head":
        return "head";
    case "body":
        return "body"
    }
    let t = e.ownerDocument
      , n = `#${CSS.escape(e.id)}`;
    if (e.id && t.querySelectorAll(n).length === 1)
        return n;
    let r = "";
    for (let i of e.classList) {
        if (r = `.${CSS.escape(i)}`,
        t.querySelectorAll(r).length === 1 || (r = `${CSS.escape(e.tagName.toLowerCase())}${r}`,
        t.querySelectorAll(r).length === 1))
            return r;
        let s = Array.from(e.parentNode?.children ?? []).indexOf(e);
        if (r = `${r}:nth-child(${s + 1})`,
        t.querySelectorAll(r).length === 1)
            return r
    }
    let o = Array.from(e.parentNode?.children ?? []).indexOf(e);
    return r = `${CSS.escape(e.tagName.toLowerCase())}:nth-child(${o + 1})`,
    e.parentNode !== t && (r = `${zo(e.parentNode ?? void 0)} > ${r}`),
    r
}
var Ka = q(re())
  , Jw = e => e.includes(Ka.UsoProvider.Apple) ? {
    [Ka.UsoProvider.Apple]: document.querySelector("a.apple-button") ?? void 0
} : {};
var Zw = {
    "cars.com": Jw
};
var eb = {
    name: "AnchorHrefSafeguard",
    run: function(t) {
        let n = t instanceof HTMLAnchorElement ? t : t.closest("a");
        if (!n)
            return !0;
        let r = Tt(n.href);
        return !!(!r || ct(n.href) || r === Tt(window.location.href))
    }
};
var FR = 30
  , _R = 15
  , BR = {
    maxSearchTimeMs: 150
}
  , HR = [Vw, qw, Ww, $w]
  , qR = [Yw, Gw, Bw, Xw, Hw, Qw]
  , zR = [jw]
  , WR = [eb]
  , jR = 0
  , VR = 3
  , GR = ["a", "button", "div", "iframe", "frame"]
  , KR = ["script", "noscript", "footer", "header", "code", "pre", "aside", "template", "svg"]
  , $R = ["https://platform.twitter.com/embed/Tweet.html"]
  , YR = ["https://accounts.google.com/gsi/iframe/select"];
function XR() {
    return document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
        acceptNode(e) {
            let t = document.defaultView ? document.defaultView : an();
            if (!Ke(e, t))
                return NodeFilter.FILTER_SKIP;
            let n = e.nodeName.toLowerCase();
            return KR.some(r => n === r) ? NodeFilter.FILTER_REJECT : GR.some(r => n === r) ? e instanceof HTMLIFrameElement && YR.some(r => e.src.includes(r)) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    })
}
function tb(e) {
    return e.reduce( (t, n) => (t += n.score,
    t), 0)
}
function nb(e, t) {
    let n = o => {
        `${o.name}`;
        let i = o.run(e, t);
        return `${o.name}`,
        o.name,
        {
            clueName: o.name,
            score: i
        }
    }
      , r = [];
    return zR.some(o => n(o).score !== 0) ? [] : (r.push(...HR.map(n)),
    tb(r) > jR && r.push(...qR.map(n)),
    r)
}
function QR(e) {
    let t = e.map(r => ({
        el: r,
        descendantCount: r.querySelectorAll("*").length
    }))
      , n = t[0];
    for (let r of t)
        r.descendantCount < n.descendantCount && (n = r);
    return n.el
}
function JR(e) {
    let t = {};
    return e.forEach(n => t[n] = 0),
    t
}
var ZR = () => $R.some(e => window.location.href.startsWith(e));
async function En(e, t, n) {
    if (e.length === 0)
        return {};
    if (ZR())
        return {};
    let r = Zw[t]
      , o = r ? r(e) : {}
      , i = Object.assign({
        ...BR
    }, n ?? {});
    let s = Date.now()
      , u = XR()
      , d = Va(t)
      , l = Date.now()
      , p = {}
      , m = JR(e);
    for (; u.nextNode(); ) {
        if ((u.currentNode.innerText?.trim().length ?? 0) > FR)
            continue;
        let g = Ga(u.currentNode, d);
        if (e.forEach(h => {
            if (o[h])
                return;
            let b = tb(nb(h, g));
            if (b > (m[h] ?? 0))
                p[h] = [u.currentNode],
                m[h] = b;
            else if (b === (m[h] ?? 0)) {
                let y = p[h] ?? [];
                y.push(u.currentNode),
                p[h] = y
            }
        }
        ),
        Date.now() - s >= i.maxSearchTimeMs) {
            console.info("[USO] Button detection aborting due to timeout.");
            break
        }
        Date.now() - l >= _R && (l = Date.now(),
        await ot(0))
    }
    return e.forEach(g => {
        if (o[g])
            return;
        let h = p[g] ?? []
          , b = m[g] ?? 0;
        if (h.length === 0 || b < VR)
            return;
        let y = QR(h);
        if (!(y instanceof HTMLButtonElement) && !(y instanceof HTMLAnchorElement)) {
            let S = y.querySelector("button") ?? y.querySelector("a");
            S && (y = S)
        }
        for (let S of WR)
            if (!S.run(y)) {
                console.warn(`[USO] Highest scoring node failed safeguard check '${S.name}'`);
                return
            }
        o[g] = y
    }
    ),
    o
}
async function Wo(e, t) {
    let {selector: n, provider: r} = e;
    if (!r) {
        for (let d of Le)
            await Wo({
                selector: n,
                provider: d
            }, t);
        return
    }
    let o = document.querySelector(n);
    if (!(o instanceof HTMLElement))
        return;
    let i = Ga(o, Va(t))
      , u = nb(r, i).reduce( (d, l) => (d.clues[l.clueName] = l.score,
    d.total += l.score,
    d), {
        clues: {},
        total: 0,
        selector: n,
        context: i
    });
    $("uso-devtools-display-button-data", u)
}
async function rb(e) {
    let t = document.body.outerHTML
      , n = window.location.href
      , r = await En(Le, e)
      , o = {};
    Object.keys(r).forEach(s => {
        let u = r[s];
        if (u == null)
            return;
        if (!(u instanceof HTMLElement)) {
            console.error("[USO][devtools] received a node that isn't an HTML element: ", u);
            return
        }
        let d = zo(u);
        d && (o[s] = d)
    }
    ),
    $("uso-devtools-display-button-data", {
        url: n,
        body: t,
        expectedResults: o
    })
}
async function ob(e) {
    if (window.location.href.toLowerCase().startsWith("https://accounts.google.com/gsi/button"))
        return;
    let t = document.createElement("com-1password-uso-highlights");
    document.body.append(t);
    let n = t.attachShadow({
        mode: "closed"
    })
      , r = []
      , o = await En(Le, e);
    Object.keys(o).forEach(i => {
        let s = o[i];
        if (!s)
            return;
        let u = Uo(s, n, {
            text: i,
            color: "red"
        });
        u.attachment = d => {
            let l = document.createElement("button");
            l.innerText = i,
            l.style.marginRight = "4px",
            l.addEventListener("click", () => {
                let p = zo(u.element);
                p && Wo({
                    selector: p,
                    provider: i
                }, e)
            }
            ),
            d.append(l)
        }
        ,
        r.push(u)
    }
    ),
    Do(n, t, r, `Detected ${r.length} USO login button(s)`)
}
var qe = q(re());
var ib = 4e3
  , ab = 1e3
  , e1 = 1e3
  , $a = !1
  , jo = class {
    constructor(t={}) {
        this.usoUsernameDetectionInitialized = !1;
        this.startAllProviderDetection = () => {
            this.startDetectionInterval(),
            this.addEventListeners()
        }
        ;
        this.stopAllProviderDetection = () => {
            this.stopDetectionInterval(),
            this.removeEventListeners()
        }
        ;
        this.startDetectionInterval = () => {
            this.detectionInterval == null && (this.detectionInterval = window.setInterval(this.findUsoProviders, ab))
        }
        ;
        this.stopDetectionInterval = () => {
            this.detectionInterval != null && (clearInterval(this.detectionInterval),
            this.detectionInterval = void 0)
        }
        ;
        this.addEventListeners = () => {
            document.body && (document.body.removeEventListener("click", this.handleDomEvent),
            document.body.removeEventListener("focusin", this.handleDomEvent),
            document.body.addEventListener("click", this.handleDomEvent),
            document.body.addEventListener("focusin", this.handleDomEvent))
        }
        ;
        this.removeEventListeners = () => {
            document.body && (document.body.removeEventListener("click", this.handleDomEvent),
            document.body.removeEventListener("focusin", this.handleDomEvent))
        }
        ;
        this.handleDomEvent = () => {
            this.debounceInterval == null && (this.debounceInterval = window.setTimeout( () => {
                this.debounceInterval != null && (clearInterval(this.debounceInterval),
                this.debounceInterval = void 0),
                this.findUsoProviders()
            }
            , e1))
        }
        ;
        this.findUsoProviders = async () => {
            Date.now() - this.startedTime > this.cutoffTime && this.stopDetectionInterval();
            let t = await En(Le, this.topFrameNakedDomain);
            Object.values(t).filter(r => !!r).length > 0 && (v.dispatch({
                type: "uso-collect-buttons",
                payload: Object.keys(t).filter(r => !!t[r])
            }),
            this.stopAllProviderDetection())
        }
        ;
        this.findButtonToClick = async t => {
            let {provider: n, withRetryTimeout: r} = t;
            if (!r)
                return (await En([n], this.topFrameNakedDomain))[n];
            let o = Date.now();
            for (; Date.now() - o < ib; ) {
                let s = (await En([n], this.topFrameNakedDomain))[n];
                if (s)
                    return s;
                await new Promise(u => setTimeout(u, ab))
            }
        }
        ;
        this.clickCorrectNode = async t => {
            let n = await this.findButtonToClick(t);
            if (n instanceof HTMLIFrameElement && t.provider === qe.UsoProvider.Google) {
                let r = document.querySelector("iframe[src^='https://accounts.google.com'] ~ div");
                r && r.click()
            } else
                n?.click && n.click()
        }
        ;
        this.initUsoUsernameDetection = () => {
            if (this.usoUsernameDetectionInitialized)
                return;
            $a = !1;
            let t = Xa(document);
            if (t) {
                t.value && $("uso-context-account", {
                    type: "Username",
                    content: t.value
                }),
                t.addEventListener("change", cb),
                this.usoUsernameDetectionInitialized = !0;
                return
            }
            Ya(document),
            this.usoUsernameDetectionInitialized = !0
        }
        ;
        this.startedTime = Date.now(),
        this.cutoffTime = t.cutoffMs ?? ib,
        this.topFrameNakedDomain = "",
        Ie("uso-click-provider-button", n => void this.clickCorrectNode(n)),
        D("configured", n => {
            n && (this.topFrameNakedDomain = v.getState().topFrameNakedDomain)
        }
        )
    }
}
;
function ub(e) {
    return Vo() ? Array.from(e.querySelectorAll("div#credentials-picker div[aria-labelledby]")).map(t => ({
        element: t,
        email: t.querySelector("div:nth-child(4) > div:nth-child(2)")?.textContent ?? void 0
    })) : Array.from(e.querySelectorAll("div[data-identifier]")).map(t => ({
        element: t,
        email: t.dataset.identifier
    }))
}
function Ya(e) {
    let t = ub(e);
    if (t.length > 0) {
        for (let n of t)
            n.element.dataset.opEmail = n.email,
            n.element.addEventListener("click", sb);
        $a || ($a = !0,
        t1())
    } else
        document.body.addEventListener("click", sb)
}
function cb(e) {
    $("uso-context-account", {
        type: "Username",
        content: e.target.value
    })
}
function t1() {
    let e = (t, n) => {
        if (!v.getState().usoLogonPageProvider) {
            n.disconnect();
            return
        }
        for (let r of t) {
            for (let o of r.addedNodes)
                if (o instanceof HTMLElement) {
                    let i = Xa(o);
                    if (i) {
                        i.addEventListener("change", cb);
                        return
                    }
                    ub(o).length > 0 && Ya(o)
                }
            for (let o of r.removedNodes)
                if (o instanceof HTMLElement && Xa(o)) {
                    Ya(document);
                    return
                }
        }
    }
    ;
    new MutationObserver(e).observe(document.body, {
        childList: !0,
        subtree: !0
    })
}
function sb(e) {
    let n = e.currentTarget?.dataset.opEmail;
    n && $("uso-context-account", {
        type: "Username",
        content: n
    })
}
function Xa(e) {
    switch (v.getState().usoLogonPageProvider) {
    case qe.UsoProvider.Apple:
        return e.querySelector('input[type="text"][id="account_name_text_field"]');
    case qe.UsoProvider.Facebook:
        return e.querySelector('input#email[type="text"][name="email"]');
    case qe.UsoProvider.GitHub:
        return e.querySelector('input#login_field[type="text"][name="login"]');
    case qe.UsoProvider.Google:
        return e.querySelector('input#identifierId[type="email"][name="identifier"]');
    case qe.UsoProvider.Microsoft:
        return e.querySelector('input[type="email"][name="loginfmt"][data-report-value="Email_Phone_Skype_Entry"]');
    case qe.UsoProvider.Twitter:
        return e.querySelector('input#username_or_email[type="text"]');
    case qe.UsoProvider.Okta:
        return document.querySelector('input#okta-signin-username[type="text"]');
    case qe.UsoProvider.Discord:
        return e.querySelector('input[type="text"][name="email"]');
    case qe.UsoProvider.Amazon:
        return e.querySelector('input#ap_email[type="text"][name="email"]');
    case qe.UsoProvider.Slack:
        return e.querySelector('input#email[type="email"][name="email"]');
    default:
        return null
    }
}
var Go = !1;
function pb() {
    let e = new jo;
    Go = !1,
    D("configured", t => {
        Qa(e)
    }
    ),
    D("locked", t => {
        Qa(e)
    }
    ),
    D("usoLoginEnabled", t => {
        Qa(e)
    }
    ),
    Ie("uso-devtools-run-button-detection", async () => rb(v.getState().topFrameNakedDomain)),
    Ie("uso-devtools-button-detection-debug", async t => Wo(t, v.getState().topFrameNakedDomain)),
    Ie("uso-devtools-highlight-buttons", async () => ob(v.getState().topFrameNakedDomain))
}
function Qa(e) {
    let {locked: t, configured: n, usoLoginEnabled: r, topFrameNakedDomain: o, usoLogonPageProvider: i} = v.getState();
    !t && n && r && document.body && !(ct(o) && !i) && r1(e)
}
var n1 = (0,
fb.default)(e => {
    $("uso-collect-buttons", e)
}
, 250);
function r1(e) {
    let {usoLogonPageProvider: t} = v.getState();
    t ? o1(t, e) : (D("usoButtons", n => {
        n.length > 0 && (e.stopAllProviderDetection(),
        n1(n))
    }
    ),
    e.startAllProviderDetection())
}
function o1(e, t) {
    e === lb.UsoProvider.Google && v.getState().fillPendingUserInteraction && !Go && a1(),
    typeof safari > "u" && t.initUsoUsernameDetection()
}
function Vo() {
    try {
        return new URL(document.location.href).pathname.startsWith("/gsi/select")
    } catch {
        return !1
    }
}
var i1 = 5e3;
function a1() {
    let e = Date.now()
      , t = (n, r) => {
        let o = () => {
            r.disconnect(),
            Go = !1
        }
        ;
        if (Date.now() - e > i1) {
            o();
            return
        }
        for (let i of n)
            for (let s of i.addedNodes)
                if (s instanceof HTMLElement && db(s)) {
                    o();
                    return
                }
    }
    ;
    db(document) || (new MutationObserver(t).observe(document.body, {
        childList: !0,
        subtree: !0
    }),
    Go = !0)
}
function s1(e, t) {
    if (Vo()) {
        let n = document.evaluate(`//div[text()='${t}']`, document.body, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE).iterateNext();
        return n instanceof HTMLElement ? n : null
    } else
        return e.querySelector(`[data-email="${t}"]`) ?? e.querySelector(`[data-identifier="${t}"]`)
}
function db(e) {
    let t = v.getState().fillSessionAutosubmitGoogleUsername
      , n = () => !document.querySelector('input:not([type="hidden"])');
    if (!t || t.length === 0 || !n() && !Vo())
        return !0;
    let r = (e.querySelector("[data-authuser]")?.dataset.authuser ?? "0") === "0"
      , o = ( () => {
        if (t?.indexOf("@") === -1) {
            let s = e.querySelector("[data-email]")?.dataset.email;
            return s ? `${t}@${s.split("@")[1]}` : t
        } else
            return t
    }
    )()
      , i = s1(e, o);
    return i ? (r && w.clearFillSession(),
    i.click(),
    !0) : !1
}
var u1 = 50
  , mb = 500
  , xn = 3e3
  , gb = 5e3
  , Ja = async e => new Promise(t => setTimeout(t, e));
async function kt(e, t) {
    let n = Date.now();
    for (; Date.now() - n < t; ) {
        let r = document.querySelector(e);
        if (r)
            return console.info(`[SSH Onboarding]: Found element: ${e}`),
            r;
        await Ja(u1)
    }
    console.info(`[SSH Onboarding]: Element not found within ${t}ms: ${e}`)
}
async function hb(e) {
    switch (e) {
    case "bitbucket":
        (await kt("button#add-key", xn))?.click();
        break;
    case "azure_devops":
        (await kt("button#__bolt-newKey", xn))?.click();
        break;
    case "digitalocean":
        {
            let t = await kt('#keys a[role="button"].Button', gb);
            t && (t.click(),
            await Ja(mb));
            break
        }
    case "google_compute_engine":
        {
            let t = await kt("#_0rif_editButton", gb);
            if (t) {
                t.click(),
                await Ja(mb);
                let n = await kt("#_0rif_edit-metadata-form div.cfc-form-stack-add-wrapper > button", xn);
                n && n.click()
            }
            break
        }
    default:
        break
    }
}
async function vb(e) {
    let t = async () => w.showNotification({
        type: "sshOnboardingNextSteps"
    });
    switch (e) {
    case "azure_devops":
        {
            let n = await kt(".bolt-panel-footer button.primary", xn);
            n && n.addEventListener("click", () => {
                let r = n.getAttribute("aria-disabled");
                r != null && r !== "false" || t()
            }
            );
            break
        }
    case "digitalocean":
        {
            let n = await kt('.ssh-key-modal button[type="submit"]', xn);
            n && n.addEventListener("click", () => {
                n.disabled || t()
            }
            );
            let r = await kt('.ssh-key-modal input[type="text"]', xn);
            r && r.addEventListener("keypress", o => {
                n?.disabled || o.key !== "Enter" || t()
            }
            );
            break
        }
    default:
        return
    }
}
var An = class {
    constructor(t) {
        this._isListeningForScrollAndResizeEvents = !1;
        this._hasFocus = !1;
        this._lastComputedSuggestions = [];
        this.onActiveInputKeyDown = (t, n, r) => {
            if (this.buttonManager?.removeTooltip(),
            t === "ArrowDown") {
                let {inlineMenuOpen: o, locked: i} = v.getState();
                o && !i ? this.inlineMenuManager?.focus() : this.inlineMenuManager?.toggle(n, r, o ? !0 : void 0)
            } else
                this._handleKeyDown(t, n, r)
        }
        ;
        this.onActiveInputChange = t => {
            let {activeField: n, inlineMenuOpen: r, activeFieldAnalysis: o, userMustTriggerMenuToShow: i, inlineSavingEnabled: s} = v.getState();
            if (this.buttonManager?.removeTooltip(),
            r) {
                if (zr(t)) {
                    this.inlineMenuManager?.detach();
                    return
                }
                this.inlineMenuManager?.filter(t.value)
            }
            if (!o || !n)
                return;
            if (r && !this.formManager._isFieldOrFormEdited(t) && this._lastComputedSuggestions.length === 0) {
                this.inlineMenuManager?.detach();
                return
            }
            if (pr(s, o.fieldDesignation, !0, !0) && !i && !r) {
                this.inlineMenuManager?.attach(!0, !0, !1),
                v.dispatch({
                    type: "user-must-trigger-menu-to-show",
                    payload: !0
                });
                return
            }
        }
        ;
        this.closeMenu = () => {
            this.inlineMenuManager?.detach()
        }
        ;
        this.onButtonClick = async () => {
            let {locked: t, canRequestUnlock: n} = v.getState();
            if (w.refreshCanRequestUnlock(),
            t) {
                if (n.name === "yes") {
                    let r = zt();
                    r instanceof HTMLElement && r.getAttribute("type") === "password" && r.blur(),
                    w.requestManagedUnlock()
                }
            } else if (await this.inlineHasContentToShow()) {
                this.inlineMenuManager?.toggle(this.formManager.isEdited, !1);
                return
            }
        }
        ;
        this.inlineHasContentToShow = async () => {
            let {activeField: t, activeFieldAnalysis: n, inlineSavingEnabled: r, areAllAccountsFrozen: o} = v.getState();
            if (o)
                return !0;
            if (!n)
                return !1;
            let i = await this.getInlineSuggestions()
              , s = t ? this.formManager.isFieldEdited(t) : !1;
            return pr(r, n.fieldDesignation, this.formManager.isEdited, s) || i.length > 0
        }
        ;
        this.getInlineSuggestions = async () => {
            let {activeFieldAnalysis: t} = v.getState();
            if (!t)
                return this._lastComputedSuggestions = [],
                [];
            let n = await w.getInlineSuggestions(t.fieldDesignation, t.suggestions);
            return this._lastComputedSuggestions = n,
            n
        }
        ;
        this.onActiveInputFocus = async (t, n) => {
            this._onActiveInputFocus();
            let {autoshowMenu: r, canRequestUnlock: o, locked: i, userMustTriggerMenuToShow: s} = v.getState();
            if (w.refreshCanRequestUnlock(),
            !r || s || i && o.name === "no")
                return;
            let u = await this.inlineHasContentToShow();
            !this.shouldHideAfterFill() && u ? this.inlineMenuManager?.attach(t, n) : this.inlineMenuManager?.detach()
        }
        ;
        this.shouldHideAfterFill = () => {
            let {activeField: t} = v.getState();
            return t?.hasAttribute(ut)
        }
        ;
        this.onActiveInputBlur = () => {
            v.dispatch({
                type: "set-active-field",
                payload: void 0
            }),
            this.inlineMenuManager?.detach()
        }
        ;
        this.collectFrame = t => {
            let {activeField: n} = v.getState();
            return n ? mr({
                activeField: n,
                activeFormOnly: !0,
                ...t
            }) : mr({
                ...t
            })
        }
        ;
        this._onScrollOrResize = () => {
            this._removeScrollAndResizeEventListeners()
        }
        ;
        this._addScrollAndResizeEventListeners = () => {
            if (this._isListeningForScrollAndResizeEvents)
                return;
            let {keepInlineAttachedToField: t} = v.getState();
            t !== "aggressive" && (window.addEventListener("scroll", this._onScrollOrResize, !0),
            window.addEventListener("resize", this._onScrollOrResize, !0),
            this._isListeningForScrollAndResizeEvents = !0)
        }
        ;
        this._removeScrollAndResizeEventListeners = () => {
            this._isListeningForScrollAndResizeEvents && (w.removeScrollAndResizeEventListeners(),
            window.removeEventListener("scroll", this._onScrollOrResize, !0),
            window.removeEventListener("resize", this._onScrollOrResize, !0),
            this._isListeningForScrollAndResizeEvents = !1,
            this.onActiveInputBlur())
        }
        ;
        this.handleFocusTaken = ({frameIdentifier: t, removeMenu: n}) => {
            this._hasFocus = t === v.getState().frameIdentifier,
            !this._hasFocus && v.getState().activeField && (v.dispatch({
                type: "set-active-field",
                payload: void 0
            }),
            n && this.inlineMenuManager?.detach())
        }
        ;
        window.addEventListener("focusin", n => {
            let r = at(n);
            if (r instanceof Element && !this._hasFocus) {
                if (this._hasFocus = !0,
                r.ariaHidden || er(v.getState().activeField, n.target))
                    return;
                w.frameTookFocus(v.getState().frameIdentifier, !Hr(n.target))
            }
        }
        , !0),
        w.onFrameTookFocus(this.handleFocusTaken),
        v.dispatch({
            type: "set-keep-inline-attached",
            payload: t?.keepInlineAttachedToField ?? "off"
        }),
        this.saveItemRequestManager = new qo,
        this.autosaveManager = new No,
        this.formManager = new Ho,
        this.formManager.onActiveInputFocus = this.onActiveInputFocus,
        this.formManager.onActiveInputBlur = this.onActiveInputBlur,
        this.formManager.onActiveInputKeyDown = this.onActiveInputKeyDown,
        this.formManager.onActiveInputChange = this.onActiveInputChange,
        this.formManager.onInputChange = n => this.autosaveManager.onCapture(n, this.formManager.getFieldAnalysis(n)),
        this.formManager.closeMenu = this.closeMenu,
        pb(),
        w.onHostAppRestarted( () => this.getFrameManagerConfiguration()),
        this.getFrameManagerConfiguration(),
        w.onInlineMenuOpened( () => {
            v.dispatch({
                type: "set-inline-menu-open",
                payload: !0
            })
        }
        ),
        w.onInlineMenuClosed( () => {
            v.dispatch({
                type: "set-inline-menu-open",
                payload: !1
            })
        }
        ),
        w.onInlineButtonPressed( () => {
            v.getState().activeField && this.onButtonClick()
        }
        ),
        w.onAddScrollAndResizeEventListeners(this._addScrollAndResizeEventListeners),
        w.onRemoveScrollAndResizeEventListeners(this._removeScrollAndResizeEventListeners),
        w.onLockStateChanged( ({locked: n}) => {
            v.dispatch({
                type: "lock-state-changed",
                payload: n
            }),
            n && (this._lastComputedSuggestions = [])
        }
        ),
        w.onCanRequestUnlockChanged(n => {
            v.dispatch({
                type: "set-can-request-unlock",
                payload: n
            })
        }
        ),
        w.onBlurActiveField( () => {
            let n = zt();
            n && n instanceof HTMLElement && n.blur()
        }
        ),
        w.onPageExcluded(n => {
            v.dispatch({
                type: "set-page-excluded",
                payload: n
            })
        }
        ),
        w.onGetHideOnThisPagePermission(n => window.confirm(n)),
        w.onShowInline(n => {
            if (v.getState().inlineMenuOpen)
                return this.inlineMenuManager?.focus();
            [...document.querySelectorAll("input")].find(r => r.opid === n.opid)?.focus(),
            v.getState().inlineMenuOpen || this.inlineMenuManager?.toggle(!1, !0),
            w.onInlineMenuReady( () => {
                this.inlineMenuManager?.focus()
            }
            )
        }
        ),
        w.onCollectFrameDetails(async n => n.checkFrame && n.frameUrl && decodeURI(window.location.href) !== d1(decodeURI(n.frameUrl)) ? Promise.reject(new Error("Message not addressed to for frame.")) : Promise.resolve(this.collectFrame(n.options))),
        w.onRefreshItems(async () => {
            let {inlineMenuOpen: n, activeField: r} = v.getState()
              , o = await this.inlineHasContentToShow()
              , i = this.shouldHideAfterFill();
            if (!o && n && i) {
                this._detachInlineMenu?.();
                return
            }
            if (r && o && !n && !i) {
                let s = this.formManager.isFieldEdited(r);
                this.inlineMenuManager?.attach(this.formManager.isEdited, s, !1);
                return
            }
        }
        ),
        w.onPerformFill( (n, r) => {
            v.dispatch({
                type: "fill-start",
                payload: n.status === yb.FillStatus.InProgress
            }),
            this._detachInlineMenu?.();
            let {unleashFeatures: o} = v.getState();
            mw(n.response.fillPayload.frames || [], {
                authorizedUnsafeHttp: r,
                fixFillingEvents: o["b5x-fix-filling-events"]
            }).then( () => {
                v.dispatch({
                    type: "fill-end"
                })
            }
            )
        }
        ),
        w.onPing( () => {
            w.sayHello()
        }
        ),
        w.onFrozenAccountInfoChanged(n => {
            v.dispatch({
                type: "set-are-all-accounts-frozen",
                payload: n.frozenAccountsInfo.areAllAccountsFrozen
            })
        }
        ),
        w.onFocusPage( () => {
            let n = v.getState().activeField;
            n && n.focus()
        }
        ),
        w.onSshOpenCreateKeyModal(n => {
            hb(n).then( () => {
                w.sshFocusPublicKeyField(),
                vb(n)
            }
            )
        }
        ),
        D("locked", n => {
            if (n)
                return;
            let r = v.getState()
              , o = r.activeField;
            o && !r.saving && (zt() !== o && o.focus(),
            this.onActiveInputFocus(this.formManager.isEdited, this.formManager.isFieldEdited(o)))
        }
        ),
        Ie("autosubmit-devtools-highlight-elements", () => Lw())
    }
    getFrameManagerConfiguration() {
        w.getFrameManagerConfiguration().then(t => {
            v.dispatch({
                type: "configure",
                payload: t
            })
        }
        )
    }
}
;
function d1(e) {
    let t = e.match(/(^https?:\/\/.*#)/g);
    return t ? t[0] : e
}
var Tn = class {
    constructor() {
        this.removeTooltip = () => {
            this._removeTooltip()
        }
        ;
        this.getActiveFieldDetails = () => {
            let {activeField: t} = v.getState();
            if (!t)
                return;
            let n = Br(t)
              , {activeFieldDir: r, activeFieldPaddingX: o, frameIdentifier: i} = v.getState();
            return {
                direction: r,
                frameIdentifier: i,
                paddingX: o,
                rect: {
                    height: n.height,
                    width: n.width,
                    x: n.x,
                    y: n.y
                },
                type: t instanceof HTMLTextAreaElement ? "textarea" : "input"
            }
        }
        ;
        this.#e = ({activeFieldDetails: t, matchableFrameWindowProps: n}) => {
            let r = wn(p => p instanceof HTMLIFrameElement);
            if (r.length === 0)
                return;
            let o = qr([...r], n);
            if (o.confidence === 0)
                return;
            let s = _r(o.frame).filter(Zn).reduce( (p, m) => {
                let {top: g, left: h, right: b} = m.getBoundingClientRect();
                return {
                    top: p.top + g,
                    left: p.left + h,
                    right: p.right + b
                }
            }
            , {
                top: 0,
                left: 0,
                right: 0
            })
              , {top: u, left: d, right: l} = o.frame.getBoundingClientRect();
            this._draw({
                ...t,
                rect: {
                    ...t.rect,
                    x: t.rect.x + (t.direction === "rtl" ? window.innerWidth - (l - s.right) : d - s.left),
                    y: t.rect.y + (u - s.top)
                }
            })
        }
        ;
        w.onForwardActiveFieldDetails(this.#e),
        D("activeField", t => {
            if (t) {
                let n = this.getActiveFieldDetails();
                n && this._draw(n)
            } else
                this._erase()
        }
        )
    }
    #e
}
;
var Ko = class extends Tn {
    _draw(t) {
        w.forwardActiveFieldDetails(t, {
            width: window.innerWidth,
            height: window.innerHeight,
            src: window.location.href,
            name: window.name
        })
    }
    _erase() {
        w.removeInlineButton(v.getState().frameIdentifier)
    }
    _removeTooltip() {
        w.removeInlineButtonTooltip()
    }
}
;
var kn = class {
    constructor() {
        this.attach = (t=!1, n=!1, r=!1) => {
            let o = this.getInlineMenuConfiguration(t, n, r);
            o && this._attach(o)
        }
        ;
        this.detach = () => {
            this._detach()
        }
        ;
        this.toggle = (t, n, r) => {
            let {inlineMenuOpen: o, locked: i} = v.getState()
              , s = typeof r > "u" ? !o : r;
            v.dispatch({
                type: "set-autoshow-menu",
                payload: s
            }),
            s ? i && r === !0 ? w.requestManagedUnlock().then(u => {
                u || this.attach(t, n, !0)
            }
            ) : this.attach(t, n, !0) : this.detach()
        }
        ;
        this.focus = () => {
            this._focus()
        }
        ;
        this.filter = t => {
            w.filterInlineMenu(t)
        }
        ;
        this.getInlineMenuConfiguration = (t, n, r) => {
            let o = this.getMenuPosition();
            if (!o)
                return;
            let i = v.getState().activeFieldAnalysis;
            if (!i || i.requiresInteractionForMenu && !r)
                return;
            let {locale: s, frameIdentifier: u, appTheme: d, keepInlineAttachedToField: l, numberOfItems: p, areAllAccountsFrozen: m} = v.getState();
            return {
                ...o,
                fieldAnalysis: i,
                formEdited: t,
                fieldEdited: n,
                locale: s,
                frameIdentifier: u,
                keepInlineAttachedToField: l,
                appTheme: d,
                numberOfItems: p,
                areAllAccountsFrozen: m
            }
        }
        ;
        this.getMenuPosition = () => {
            let {activeField: t} = v.getState();
            if (!t)
                return;
            let n = Br(t)
              , {top: r, left: o, right: i, height: s} = n
              , {activeFieldDir: u} = v.getState();
            return {
                dir: u,
                x: u === "rtl" ? window.innerWidth - i : o,
                y: r + s
            }
        }
        ;
        this.handleInlineMenuPosition = ({configuration: t, matchableFrameWindowProps: n}) => {
            let r = wn(p => p instanceof HTMLIFrameElement);
            if (r.length === 0)
                return;
            let o = qr([...r], n);
            if (o.confidence === 0)
                return;
            let s = _r(o.frame).filter(Zn).reduce( (p, m) => {
                let {top: g, left: h, right: b} = m.getBoundingClientRect();
                return {
                    top: p.top + g,
                    left: p.left + h,
                    right: p.right + b
                }
            }
            , {
                top: 0,
                left: 0,
                right: 0
            })
              , {top: u, left: d, right: l} = o.frame.getBoundingClientRect();
            this._attach({
                ...t,
                x: t.x + (t.dir === "rtl" ? window.innerWidth - (l - s.right) : d - s.left),
                y: t.y + (u - s.top)
            })
        }
        ;
        this.#e = new MutationObserver(t => {
            for (let n of t)
                n.target instanceof HTMLElement && n.target.getAttribute("aria-expanded") === "true" && (this.detach(),
                v.dispatch({
                    type: "user-must-trigger-menu-to-show",
                    payload: !0
                }))
        }
        ),
        w.onForwardInlineMenuPosition(this.handleInlineMenuPosition),
        w.onGetFrameOrigin(t => {
            let {frameIdentifier: n} = v.getState();
            t.frameIdentifier === n && w.sendFrameOrigin(t.uuid)
        }
        ),
        D("activeField", t => {
            t && tr(t) ? this.#e.observe(t, {
                attributeFilter: ["aria-expanded"]
            }) : this.#e.disconnect()
        }
        )
    }
    #e
}
;
var $o = class extends kn {
    constructor() {
        super(...arguments);
        this._attach = n => {
            w.forwardInlineMenuPosition(n, {
                width: window.innerWidth,
                height: window.innerHeight,
                src: window.location.href,
                name: window.name
            })
        }
        ;
        this._detach = () => {
            w.removeInlineMenu()
        }
        ;
        this._focus = () => {
            w.focusInlineMenuFrame()
        }
    }
}
;
var Yo = class {
    constructor() {
        this.draw = (t, n, r) => {
            this.createShadowRoot(),
            this.createNotification(),
            this.setNotificationStyles(t),
            this.setNotificationSrc(t, n, r),
            this.addShadowHostToDOM()
        }
        ;
        this.focus = t => {
            this.notification && this.notification.focus(t)
        }
        ;
        this.erase = async () => new Promise( (t, n) => {
            if (!this.shadowRoot?.host.parentElement)
                return t();
            let r = () => {
                this.shadowRoot?.host.parentElement?.removeChild(this.shadowRoot.host),
                t()
            }
              , o = () => {
                if (!this.lastFocussedTarget)
                    return;
                this.lastFocussedTarget?.focus()
            }
            ;
            this.performExitAction().then(r).then(o).catch(n)
        }
        );
        this.resize = t => {
            if (!this.notification)
                return;
            let n = "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(0, 0%, 0%, 0.06), 0 8px 40px hsla(0, 0%, 0%, 0.1)";
            this.notification.style.boxShadow = n,
            this.notification.style.webkitBoxShadow = n,
            this.notification.style.height = `${t}px`
        }
        ;
        this.animateIn = () => {
            if (!this.notification)
                return;
            let t = "300ms"
              , n = "cubic-bezier(0.64, 0.045, 0.35, 1)";
            this.notification.style.opacity = "1",
            this.notification.style.transform = "translateX(0)",
            this.notification.style.transitionDuration = t,
            this.notification.style.transitionProperty = "opacity, transform",
            this.notification.style.transitionTimingFunction = n
        }
        ;
        this.createShadowRoot = () => {
            this.shadowRoot || !document.body || (this.shadowRoot = document.createElement("com-1password-notification").attachShadow({
                mode: "closed"
            }))
        }
        ;
        this.createNotification = () => {
            !this.shadowRoot || this.notification || (this.notification = document.createElement("iframe"),
            this.notification.id = "op-notification",
            this.shadowRoot.appendChild(this.notification))
        }
        ;
        this.setNotificationStyles = t => {
            if (!this.notification)
                return;
            let n = "";
            Vm[t].fullscreen ? n = p1 : n = f1,
            this.notification.style.cssText = l1 + n
        }
        ;
        this.setNotificationSrc = (t, n, r) => {
            if (!this.notification)
                return;
            let {basePath: o, locale: i} = v.getState()
              , s = `${o}/notification/notification.html#${t}`
              , u = new URLSearchParams({
                ...r,
                notificationId: n,
                language: i
            })
              , d = new URL(s);
            this.notificationSrc = d,
            d.search = u.toString(),
            this.notification.src = d.toString()
        }
        ;
        this.performExitAction = async () => new Promise( (t, n) => {
            if (!this.notification || !this.notificationSrc)
                return t();
            let r = this.notificationSrc;
            if ((i => i.endsWith("-exit"))(r.hash))
                return n();
            r.hash = r.hash + "-exit",
            this.notification.src = r.toString(),
            w.onNotificationExitComplete( ({performExitAnimation: i}) => {
                i ? this.animateOut().then(t) : t()
            }
            )
        }
        );
        this.animateOut = async () => new Promise(t => {
            if (!this.notification)
                return t();
            this.notification.style.opacity = "0",
            this.notification.style.transform = `translateX(calc(100% + ${this.notification.style.right}))`,
            this.notification.addEventListener("transitionend", () => t(), {
                once: !0
            })
        }
        );
        document.addEventListener("focusout", t => {
            t.target && (this.lastFocussedTarget = t.target)
        }
        )
    }
    addShadowHostToDOM() {
        !this.shadowRoot || this.shadowRoot.host.parentElement || vt("com-1password-notification", this.shadowRoot.host)
    }
}
  , l1 = `
  all: initial;
  background: transparent;
  border: none;
  position: fixed;
`
  , hr = 32
  , f1 = `
  border-radius: 16px;
  height: 0;
  max-height: calc(100vh - ${hr * 2}px);
  max-width: calc(100vw - ${hr * 2}px);
  right: ${hr}px;
  top: ${hr}px;
  width: 400px;
  transform: translateX(calc(100% + ${hr}px));
  z-index: 2147483647;
`
  , p1 = `
  height: 100vh;
  right: 0;
  top: 0;
  width: 100vw;
`;
var Cn = class {
    constructor(t) {
        this._handleShowOrReplaceNotification = t => {
            if (!this.activeNotification) {
                this._drawNotification(t);
                return
            }
            this.pendingNotification = t,
            this._hideAndReplace()
        }
        ;
        this._drawNotification = t => {
            this.notificationFrame.draw(t.type, t.id.str, t.params),
            this.activeNotification = t,
            w.removeInlineMenu()
        }
        ;
        this._hideAndReplace = async () => this.notificationFrame.erase().then( () => {
            let t = this.pendingNotification;
            return this.pendingNotification = void 0,
            t ? this._drawNotification(t) : this.activeNotification = void 0,
            this.activeNotification?.id
        }
        );
        this.notificationFrame = new Yo,
        D("configured", n => {
            if (!n || !this.beforeReadyNotification || this.activeNotification)
                return;
            let r = this.beforeReadyNotification;
            this.beforeReadyNotification = void 0,
            this._handleShowOrReplaceNotification(r)
        }
        ),
        w.onShowNotification( ({type: n, requiresExplicitHide: r, params: o}) => {
            let i = nr();
            if (!(t?.onlyShowInActiveFieldFrame && !v.getState().activeField))
                return v.getState().configured ? (this._handleShowOrReplaceNotification({
                    type: n,
                    requiresExplicitHide: !!r,
                    params: o,
                    id: i
                }),
                i.str) : (this.beforeReadyNotification = {
                    type: n,
                    requiresExplicitHide: !!r,
                    params: o,
                    id: i
                },
                i.str)
        }
        ),
        w.onHideNotification(async n => {
            let r = `Active notification: ${this.activeNotification?.id}, Hide notification request: ${n.id}`;
            return this.activeNotification?.requiresExplicitHide && !n.id || this.activeNotification?.requiresExplicitHide && this.activeNotification?.id.str !== n.id || n.id && this.activeNotification?.id.str !== n.id ? Promise.resolve(void 0) : this._hideAndReplace().then(o => o?.str)
        }
        ),
        w.onReplaceNotification( ({id: n, type: r, requiresExplicitHide: o, params: i}) => {
            if (this.activeNotification && this.activeNotification.id.str === n)
                return this._handleShowOrReplaceNotification({
                    type: r,
                    requiresExplicitHide: !!o,
                    params: i,
                    id: nr()
                }),
                this.activeNotification?.id.str
        }
        ),
        w.onResizeNotification( ({height: n}) => this.notificationFrame.resize(n)),
        w.onPerformEnterAnimation(this.notificationFrame.animateIn),
        w.onRequestFocus(n => {
            this.activeNotification?.type && this.activeNotification.type === n.type && this.notificationFrame.focus(n.options)
        }
        ),
        w.onActiveNotification( () => this.activeNotification?.id.str)
    }
}
;
var Xo = class {
    constructor() {
        this.draw = (t, n) => {
            this.createShadowRoot(),
            this.createDialog(),
            this.setDialogSrc(t, n),
            this.addShadowHostToDOM()
        }
        ;
        this.erase = () => {
            this.shadowRoot?.host.parentElement?.removeChild(this.shadowRoot.host)
        }
        ;
        this.createShadowRoot = () => {
            this.shadowRoot || !document.body || (this.shadowRoot = document.createElement("com-1password-save-dialog").attachShadow({
                mode: "closed"
            }))
        }
        ;
        this.createDialog = () => {
            !this.shadowRoot || this.dialog || (this.dialog = document.createElement("iframe"),
            this.dialog.id = "op-save-dialog",
            this.dialog.style.cssText = `
        all: initial;
        color-scheme: none;
        position: fixed;
        z-index: 2147483647;
        top: 0px;
        left: 0px;
        min-width: 100vw;
        width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        height: 100vh;
        max-height: 100vh;
        border: none;
      `,
            this.shadowRoot.appendChild(this.dialog))
        }
        ;
        this.setDialogSrc = (t, n) => {
            if (!this.dialog)
                return;
            let {basePath: r, locale: o} = v.getState()
              , i = `${r}/save-dialog/save-dialog.html#${n.name}`
              , s = new URLSearchParams({
                language: o,
                sessionId: t.toString()
            });
            n.data?.frameIdentifier && s.set("frameIdentifier", n.data.frameIdentifier);
            let u = new URL(i);
            u.search = s.toString(),
            this.dialog.src = u.toString()
        }
    }
    addShadowHostToDOM() {
        !this.shadowRoot || this.shadowRoot.host.parentElement || vt("com-1password-save-dialog", this.shadowRoot.host)
    }
}
;
var In = class {
    constructor(t) {
        this._add = (t, n) => {
            this.saveDialogFrame.draw(t, n)
        }
        ;
        this._remove = () => {
            this.saveDialogFrame.erase()
        }
        ;
        this.saveDialogFrame = new Xo,
        Ie("show-dialog", ({sessionId: n, type: r}) => {
            t?.onlyShowInActiveFieldFrame && !v.getState().activeField || (v.dispatch({
                type: "saving",
                payload: !0
            }),
            this._add(n, r),
            w.removeInlineMenu())
        }
        ),
        Ie("close-dialog", () => {
            v.dispatch({
                type: "saving",
                payload: !1
            }),
            this._remove()
        }
        )
    }
}
;
var Qo = Za;
function Za(e, t) {
    return e === t || e !== e && t !== t ? !0 : typeof e != typeof t || {}.toString.call(e) != {}.toString.call(t) || e !== Object(e) || !e ? !1 : Array.isArray(e) ? wb(e, t) : {}.toString.call(e) == "[object Set]" ? wb(Array.from(e), Array.from(t)) : {}.toString.call(e) == "[object Object]" ? g1(e, t) : m1(e, t)
}
function m1(e, t) {
    return e.toString() === t.toString()
}
function wb(e, t) {
    var n = e.length;
    if (n != t.length)
        return !1;
    for (var r = 0; r < n; r++)
        if (!Za(e[r], t[r]))
            return !1;
    return !0
}
function g1(e, t) {
    var n = Object.keys(e)
      , r = n.length;
    if (r != Object.keys(t).length)
        return !1;
    for (var o = 0; o < r; o++) {
        var i = n[o];
        if (!(t.hasOwnProperty(i) && Za(e[i], t[i])))
            return !1
    }
    return !0
}
var J = "top"
  , ae = "bottom"
  , ne = "right"
  , Z = "left"
  , Jo = "auto"
  , Ct = [J, ae, ne, Z]
  , dt = "start"
  , Vt = "end"
  , bb = "clippingParents"
  , Zo = "viewport"
  , Ln = "popper"
  , Sb = "reference"
  , es = Ct.reduce(function(e, t) {
    return e.concat([t + "-" + dt, t + "-" + Vt])
}, [])
  , ei = [].concat(Ct, [Jo]).reduce(function(e, t) {
    return e.concat([t, t + "-" + dt, t + "-" + Vt])
}, [])
  , h1 = "beforeRead"
  , v1 = "read"
  , y1 = "afterRead"
  , w1 = "beforeMain"
  , b1 = "main"
  , S1 = "afterMain"
  , P1 = "beforeWrite"
  , E1 = "write"
  , x1 = "afterWrite"
  , Pb = [h1, v1, y1, w1, b1, S1, P1, E1, x1];
function de(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function ee(e) {
    if (e == null)
        return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}
function Qe(e) {
    var t = ee(e).Element;
    return e instanceof t || e instanceof Element
}
function se(e) {
    var t = ee(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}
function ti(e) {
    if (typeof ShadowRoot > "u")
        return !1;
    var t = ee(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
function A1(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var r = t.styles[n] || {}
          , o = t.attributes[n] || {}
          , i = t.elements[n];
        !se(i) || !de(i) || (Object.assign(i.style, r),
        Object.keys(o).forEach(function(s) {
            var u = o[s];
            u === !1 ? i.removeAttribute(s) : i.setAttribute(s, u === !0 ? "" : u)
        }))
    })
}
function T1(e) {
    var t = e.state
      , n = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper),
    t.styles = n,
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function() {
        Object.keys(t.elements).forEach(function(r) {
            var o = t.elements[r]
              , i = t.attributes[r] || {}
              , s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r])
              , u = s.reduce(function(d, l) {
                return d[l] = "",
                d
            }, {});
            !se(o) || !de(o) || (Object.assign(o.style, u),
            Object.keys(i).forEach(function(d) {
                o.removeAttribute(d)
            }))
        })
    }
}
var Eb = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: A1,
    effect: T1,
    requires: ["computeStyles"]
};
function le(e) {
    return e.split("-")[0]
}
var $e = Math.max
  , Gt = Math.min
  , lt = Math.round;
function ze(e, t) {
    t === void 0 && (t = !1);
    var n = e.getBoundingClientRect()
      , r = 1
      , o = 1;
    if (se(e) && t) {
        var i = e.offsetHeight
          , s = e.offsetWidth;
        s > 0 && (r = lt(n.width) / s || 1),
        i > 0 && (o = lt(n.height) / i || 1)
    }
    return {
        width: n.width / r,
        height: n.height / o,
        top: n.top / o,
        right: n.right / r,
        bottom: n.bottom / o,
        left: n.left / r,
        x: n.left / r,
        y: n.top / o
    }
}
function Kt(e) {
    var t = ze(e)
      , n = e.offsetWidth
      , r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}
function vr(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t))
        return !0;
    if (n && ti(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r))
                return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}
function Pe(e) {
    return ee(e).getComputedStyle(e)
}
function ts(e) {
    return ["table", "td", "th"].indexOf(de(e)) >= 0
}
function me(e) {
    return ((Qe(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function ft(e) {
    return de(e) === "html" ? e : e.assignedSlot || e.parentNode || (ti(e) ? e.host : null) || me(e)
}
function xb(e) {
    return !se(e) || Pe(e).position === "fixed" ? null : e.offsetParent
}
function k1(e) {
    var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1
      , n = navigator.userAgent.indexOf("Trident") !== -1;
    if (n && se(e)) {
        var r = Pe(e);
        if (r.position === "fixed")
            return null
    }
    for (var o = ft(e); se(o) && ["html", "body"].indexOf(de(o)) < 0; ) {
        var i = Pe(o);
        if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
            return o;
        o = o.parentNode
    }
    return null
}
function Ye(e) {
    for (var t = ee(e), n = xb(e); n && ts(n) && Pe(n).position === "static"; )
        n = xb(n);
    return n && (de(n) === "html" || de(n) === "body" && Pe(n).position === "static") ? t : n || k1(e) || t
}
function $t(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
function Yt(e, t, n) {
    return $e(e, Gt(t, n))
}
function Ab(e, t, n) {
    var r = Yt(e, t, n);
    return r > n ? n : r
}
function yr() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}
function wr(e) {
    return Object.assign({}, yr(), e)
}
function br(e, t) {
    return t.reduce(function(n, r) {
        return n[r] = e,
        n
    }, {})
}
var C1 = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
        placement: n.placement
    })) : t,
    wr(typeof t != "number" ? t : br(t, Ct))
};
function I1(e) {
    var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, u = le(n.placement), d = $t(u), l = [Z, ne].indexOf(u) >= 0, p = l ? "height" : "width";
    if (!(!i || !s)) {
        var m = C1(o.padding, n)
          , g = Kt(i)
          , h = d === "y" ? J : Z
          , b = d === "y" ? ae : ne
          , y = n.rects.reference[p] + n.rects.reference[d] - s[d] - n.rects.popper[p]
          , S = s[d] - n.rects.reference[d]
          , k = Ye(i)
          , C = k ? d === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0
          , N = y / 2 - S / 2
          , L = m[h]
          , U = C - g[p] - m[b]
          , I = C / 2 - g[p] / 2 + N
          , M = Yt(L, I, U)
          , H = d;
        n.modifiersData[r] = (t = {},
        t[H] = M,
        t.centerOffset = M - I,
        t)
    }
}
function L1(e) {
    var t = e.state
      , n = e.options
      , r = n.element
      , o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o),
    !o) || vr(t.elements.popper, o) && (t.elements.arrow = o))
}
var Tb = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: I1,
    effect: L1,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};
function We(e) {
    return e.split("-")[1]
}
var O1 = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function M1(e) {
    var t = e.x
      , n = e.y
      , r = window
      , o = r.devicePixelRatio || 1;
    return {
        x: lt(t * o) / o || 0,
        y: lt(n * o) / o || 0
    }
}
function kb(e) {
    var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, u = e.position, d = e.gpuAcceleration, l = e.adaptive, p = e.roundOffsets, m = e.isFixed, g = s.x, h = g === void 0 ? 0 : g, b = s.y, y = b === void 0 ? 0 : b, S = typeof p == "function" ? p({
        x: h,
        y
    }) : {
        x: h,
        y
    };
    h = S.x,
    y = S.y;
    var k = s.hasOwnProperty("x")
      , C = s.hasOwnProperty("y")
      , N = Z
      , L = J
      , U = window;
    if (l) {
        var I = Ye(n)
          , M = "clientHeight"
          , H = "clientWidth";
        if (I === ee(n) && (I = me(n),
        Pe(I).position !== "static" && u === "absolute" && (M = "scrollHeight",
        H = "scrollWidth")),
        I = I,
        o === J || (o === Z || o === ne) && i === Vt) {
            L = ae;
            var Y = m && U.visualViewport ? U.visualViewport.height : I[M];
            y -= Y - r.height,
            y *= d ? 1 : -1
        }
        if (o === Z || (o === J || o === ae) && i === Vt) {
            N = ne;
            var fe = m && U.visualViewport ? U.visualViewport.width : I[H];
            h -= fe - r.width,
            h *= d ? 1 : -1
        }
    }
    var j = Object.assign({
        position: u
    }, l && O1)
      , Te = p === !0 ? M1({
        x: h,
        y
    }) : {
        x: h,
        y
    };
    if (h = Te.x,
    y = Te.y,
    d) {
        var ke;
        return Object.assign({}, j, (ke = {},
        ke[L] = C ? "0" : "",
        ke[N] = k ? "0" : "",
        ke.transform = (U.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + y + "px)" : "translate3d(" + h + "px, " + y + "px, 0)",
        ke))
    }
    return Object.assign({}, j, (t = {},
    t[L] = C ? y + "px" : "",
    t[N] = k ? h + "px" : "",
    t.transform = "",
    t))
}
function R1(e) {
    var t = e.state
      , n = e.options
      , r = n.gpuAcceleration
      , o = r === void 0 ? !0 : r
      , i = n.adaptive
      , s = i === void 0 ? !0 : i
      , u = n.roundOffsets
      , d = u === void 0 ? !0 : u;
    if (0)
        var l;
    var p = {
        placement: le(t.placement),
        variation: We(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: o,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, kb(Object.assign({}, p, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: s,
        roundOffsets: d
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, kb(Object.assign({}, p, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: d
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var Cb = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: R1,
    data: {}
};
var ni = {
    passive: !0
};
function N1(e) {
    var t = e.state
      , n = e.instance
      , r = e.options
      , o = r.scroll
      , i = o === void 0 ? !0 : o
      , s = r.resize
      , u = s === void 0 ? !0 : s
      , d = ee(t.elements.popper)
      , l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && l.forEach(function(p) {
        p.addEventListener("scroll", n.update, ni)
    }),
    u && d.addEventListener("resize", n.update, ni),
    function() {
        i && l.forEach(function(p) {
            p.removeEventListener("scroll", n.update, ni)
        }),
        u && d.removeEventListener("resize", n.update, ni)
    }
}
var Ib = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: N1,
    data: {}
};
var U1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function On(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return U1[t]
    })
}
var D1 = {
    start: "end",
    end: "start"
};
function ri(e) {
    return e.replace(/start|end/g, function(t) {
        return D1[t]
    })
}
function Xt(e) {
    var t = ee(e)
      , n = t.pageXOffset
      , r = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: r
    }
}
function Qt(e) {
    return ze(me(e)).left + Xt(e).scrollLeft
}
function ns(e) {
    var t = ee(e)
      , n = me(e)
      , r = t.visualViewport
      , o = n.clientWidth
      , i = n.clientHeight
      , s = 0
      , u = 0;
    return r && (o = r.width,
    i = r.height,
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft,
    u = r.offsetTop)),
    {
        width: o,
        height: i,
        x: s + Qt(e),
        y: u
    }
}
function rs(e) {
    var t, n = me(e), r = Xt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = $e(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = $e(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -r.scrollLeft + Qt(e), d = -r.scrollTop;
    return Pe(o || n).direction === "rtl" && (u += $e(n.clientWidth, o ? o.clientWidth : 0) - i),
    {
        width: i,
        height: s,
        x: u,
        y: d
    }
}
function Jt(e) {
    var t = Pe(e)
      , n = t.overflow
      , r = t.overflowX
      , o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r)
}
function oi(e) {
    return ["html", "body", "#document"].indexOf(de(e)) >= 0 ? e.ownerDocument.body : se(e) && Jt(e) ? e : oi(ft(e))
}
function It(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = oi(e)
      , o = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , i = ee(r)
      , s = o ? [i].concat(i.visualViewport || [], Jt(r) ? r : []) : r
      , u = t.concat(s);
    return o ? u : u.concat(It(ft(s)))
}
function Mn(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}
function F1(e) {
    var t = ze(e);
    return t.top = t.top + e.clientTop,
    t.left = t.left + e.clientLeft,
    t.bottom = t.top + e.clientHeight,
    t.right = t.left + e.clientWidth,
    t.width = e.clientWidth,
    t.height = e.clientHeight,
    t.x = t.left,
    t.y = t.top,
    t
}
function Lb(e, t) {
    return t === Zo ? Mn(ns(e)) : Qe(t) ? F1(t) : Mn(rs(me(e)))
}
function _1(e) {
    var t = It(ft(e))
      , n = ["absolute", "fixed"].indexOf(Pe(e).position) >= 0
      , r = n && se(e) ? Ye(e) : e;
    return Qe(r) ? t.filter(function(o) {
        return Qe(o) && vr(o, r) && de(o) !== "body"
    }) : []
}
function os(e, t, n) {
    var r = t === "clippingParents" ? _1(e) : [].concat(t)
      , o = [].concat(r, [n])
      , i = o[0]
      , s = o.reduce(function(u, d) {
        var l = Lb(e, d);
        return u.top = $e(l.top, u.top),
        u.right = Gt(l.right, u.right),
        u.bottom = Gt(l.bottom, u.bottom),
        u.left = $e(l.left, u.left),
        u
    }, Lb(e, i));
    return s.width = s.right - s.left,
    s.height = s.bottom - s.top,
    s.x = s.left,
    s.y = s.top,
    s
}
function Sr(e) {
    var t = e.reference, n = e.element, r = e.placement, o = r ? le(r) : null, i = r ? We(r) : null, s = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, d;
    switch (o) {
    case J:
        d = {
            x: s,
            y: t.y - n.height
        };
        break;
    case ae:
        d = {
            x: s,
            y: t.y + t.height
        };
        break;
    case ne:
        d = {
            x: t.x + t.width,
            y: u
        };
        break;
    case Z:
        d = {
            x: t.x - n.width,
            y: u
        };
        break;
    default:
        d = {
            x: t.x,
            y: t.y
        }
    }
    var l = o ? $t(o) : null;
    if (l != null) {
        var p = l === "y" ? "height" : "width";
        switch (i) {
        case dt:
            d[l] = d[l] - (t[p] / 2 - n[p] / 2);
            break;
        case Vt:
            d[l] = d[l] + (t[p] / 2 - n[p] / 2);
            break;
        default:
        }
    }
    return d
}
function Xe(e, t) {
    t === void 0 && (t = {});
    var n = t
      , r = n.placement
      , o = r === void 0 ? e.placement : r
      , i = n.boundary
      , s = i === void 0 ? bb : i
      , u = n.rootBoundary
      , d = u === void 0 ? Zo : u
      , l = n.elementContext
      , p = l === void 0 ? Ln : l
      , m = n.altBoundary
      , g = m === void 0 ? !1 : m
      , h = n.padding
      , b = h === void 0 ? 0 : h
      , y = wr(typeof b != "number" ? b : br(b, Ct))
      , S = p === Ln ? Sb : Ln
      , k = e.rects.popper
      , C = e.elements[g ? S : p]
      , N = os(Qe(C) ? C : C.contextElement || me(e.elements.popper), s, d)
      , L = ze(e.elements.reference)
      , U = Sr({
        reference: L,
        element: k,
        strategy: "absolute",
        placement: o
    })
      , I = Mn(Object.assign({}, k, U))
      , M = p === Ln ? I : L
      , H = {
        top: N.top - M.top + y.top,
        bottom: M.bottom - N.bottom + y.bottom,
        left: N.left - M.left + y.left,
        right: M.right - N.right + y.right
    }
      , Y = e.modifiersData.offset;
    if (p === Ln && Y) {
        var fe = Y[o];
        Object.keys(H).forEach(function(j) {
            var Te = [ne, ae].indexOf(j) >= 0 ? 1 : -1
              , ke = [J, ae].indexOf(j) >= 0 ? "y" : "x";
            H[j] += fe[ke] * Te
        })
    }
    return H
}
function is(e, t) {
    t === void 0 && (t = {});
    var n = t
      , r = n.placement
      , o = n.boundary
      , i = n.rootBoundary
      , s = n.padding
      , u = n.flipVariations
      , d = n.allowedAutoPlacements
      , l = d === void 0 ? ei : d
      , p = We(r)
      , m = p ? u ? es : es.filter(function(b) {
        return We(b) === p
    }) : Ct
      , g = m.filter(function(b) {
        return l.indexOf(b) >= 0
    });
    g.length === 0 && (g = m);
    var h = g.reduce(function(b, y) {
        return b[y] = Xe(e, {
            placement: y,
            boundary: o,
            rootBoundary: i,
            padding: s
        })[le(y)],
        b
    }, {});
    return Object.keys(h).sort(function(b, y) {
        return h[b] - h[y]
    })
}
function B1(e) {
    if (le(e) === Jo)
        return [];
    var t = On(e);
    return [ri(e), t, ri(t)]
}
function H1(e) {
    var t = e.state
      , n = e.options
      , r = e.name;
    if (!t.modifiersData[r]._skip) {
        for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, u = s === void 0 ? !0 : s, d = n.fallbackPlacements, l = n.padding, p = n.boundary, m = n.rootBoundary, g = n.altBoundary, h = n.flipVariations, b = h === void 0 ? !0 : h, y = n.allowedAutoPlacements, S = t.options.placement, k = le(S), C = k === S, N = d || (C || !b ? [On(S)] : B1(S)), L = [S].concat(N).reduce(function(tn, pt) {
            return tn.concat(le(pt) === Jo ? is(t, {
                placement: pt,
                boundary: p,
                rootBoundary: m,
                padding: l,
                flipVariations: b,
                allowedAutoPlacements: y
            }) : pt)
        }, []), U = t.rects.reference, I = t.rects.popper, M = new Map, H = !0, Y = L[0], fe = 0; fe < L.length; fe++) {
            var j = L[fe]
              , Te = le(j)
              , ke = We(j) === dt
              , Fn = [J, ae].indexOf(Te) >= 0
              , _n = Fn ? "width" : "height"
              , Ce = Xe(t, {
                placement: j,
                boundary: p,
                rootBoundary: m,
                altBoundary: g,
                padding: l
            })
              , Ve = Fn ? ke ? ne : Z : ke ? ae : J;
            U[_n] > I[_n] && (Ve = On(Ve));
            var Er = On(Ve)
              , Lt = [];
            if (i && Lt.push(Ce[Te] <= 0),
            u && Lt.push(Ce[Ve] <= 0, Ce[Er] <= 0),
            Lt.every(function(tn) {
                return tn
            })) {
                Y = j,
                H = !1;
                break
            }
            M.set(j, Lt)
        }
        if (H)
            for (var xr = b ? 3 : 1, fi = function(pt) {
                var Hn = L.find(function(Tr) {
                    var Ot = M.get(Tr);
                    if (Ot)
                        return Ot.slice(0, pt).every(function(pi) {
                            return pi
                        })
                });
                if (Hn)
                    return Y = Hn,
                    "break"
            }, Bn = xr; Bn > 0; Bn--) {
                var Ar = fi(Bn);
                if (Ar === "break")
                    break
            }
        t.placement !== Y && (t.modifiersData[r]._skip = !0,
        t.placement = Y,
        t.reset = !0)
    }
}
var Ob = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: H1,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};
function Mb(e, t, n) {
    return n === void 0 && (n = {
        x: 0,
        y: 0
    }),
    {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}
function Rb(e) {
    return [J, ne, ae, Z].some(function(t) {
        return e[t] >= 0
    })
}
function q1(e) {
    var t = e.state
      , n = e.name
      , r = t.rects.reference
      , o = t.rects.popper
      , i = t.modifiersData.preventOverflow
      , s = Xe(t, {
        elementContext: "reference"
    })
      , u = Xe(t, {
        altBoundary: !0
    })
      , d = Mb(s, r)
      , l = Mb(u, o, i)
      , p = Rb(d)
      , m = Rb(l);
    t.modifiersData[n] = {
        referenceClippingOffsets: d,
        popperEscapeOffsets: l,
        isReferenceHidden: p,
        hasPopperEscaped: m
    },
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": p,
        "data-popper-escaped": m
    })
}
var Nb = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: q1
};
function z1(e, t, n) {
    var r = le(e)
      , o = [Z, J].indexOf(r) >= 0 ? -1 : 1
      , i = typeof n == "function" ? n(Object.assign({}, t, {
        placement: e
    })) : n
      , s = i[0]
      , u = i[1];
    return s = s || 0,
    u = (u || 0) * o,
    [Z, ne].indexOf(r) >= 0 ? {
        x: u,
        y: s
    } : {
        x: s,
        y: u
    }
}
function W1(e) {
    var t = e.state
      , n = e.options
      , r = e.name
      , o = n.offset
      , i = o === void 0 ? [0, 0] : o
      , s = ei.reduce(function(p, m) {
        return p[m] = z1(m, t.rects, i),
        p
    }, {})
      , u = s[t.placement]
      , d = u.x
      , l = u.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d,
    t.modifiersData.popperOffsets.y += l),
    t.modifiersData[r] = s
}
var Ub = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: W1
};
function j1(e) {
    var t = e.state
      , n = e.name;
    t.modifiersData[n] = Sr({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var Db = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: j1,
    data: {}
};
function as(e) {
    return e === "x" ? "y" : "x"
}
function V1(e) {
    var t = e.state
      , n = e.options
      , r = e.name
      , o = n.mainAxis
      , i = o === void 0 ? !0 : o
      , s = n.altAxis
      , u = s === void 0 ? !1 : s
      , d = n.boundary
      , l = n.rootBoundary
      , p = n.altBoundary
      , m = n.padding
      , g = n.tether
      , h = g === void 0 ? !0 : g
      , b = n.tetherOffset
      , y = b === void 0 ? 0 : b
      , S = Xe(t, {
        boundary: d,
        rootBoundary: l,
        padding: m,
        altBoundary: p
    })
      , k = le(t.placement)
      , C = We(t.placement)
      , N = !C
      , L = $t(k)
      , U = as(L)
      , I = t.modifiersData.popperOffsets
      , M = t.rects.reference
      , H = t.rects.popper
      , Y = typeof y == "function" ? y(Object.assign({}, t.rects, {
        placement: t.placement
    })) : y
      , fe = typeof Y == "number" ? {
        mainAxis: Y,
        altAxis: Y
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, Y)
      , j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
      , Te = {
        x: 0,
        y: 0
    };
    if (I) {
        if (i) {
            var ke, Fn = L === "y" ? J : Z, _n = L === "y" ? ae : ne, Ce = L === "y" ? "height" : "width", Ve = I[L], Er = Ve + S[Fn], Lt = Ve - S[_n], xr = h ? -H[Ce] / 2 : 0, fi = C === dt ? M[Ce] : H[Ce], Bn = C === dt ? -H[Ce] : -M[Ce], Ar = t.elements.arrow, tn = h && Ar ? Kt(Ar) : {
                width: 0,
                height: 0
            }, pt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yr(), Hn = pt[Fn], Tr = pt[_n], Ot = Yt(0, M[Ce], tn[Ce]), pi = N ? M[Ce] / 2 - xr - Ot - Hn - fe.mainAxis : fi - Ot - Hn - fe.mainAxis, tS = N ? -M[Ce] / 2 + xr + Ot + Tr + fe.mainAxis : Bn + Ot + Tr + fe.mainAxis, mi = t.elements.arrow && Ye(t.elements.arrow), nS = mi ? L === "y" ? mi.clientTop || 0 : mi.clientLeft || 0 : 0, Es = (ke = j?.[L]) != null ? ke : 0, rS = Ve + pi - Es - nS, oS = Ve + tS - Es, xs = Yt(h ? Gt(Er, rS) : Er, Ve, h ? $e(Lt, oS) : Lt);
            I[L] = xs,
            Te[L] = xs - Ve
        }
        if (u) {
            var As, iS = L === "x" ? J : Z, aS = L === "x" ? ae : ne, Mt = I[U], kr = U === "y" ? "height" : "width", Ts = Mt + S[iS], ks = Mt - S[aS], gi = [J, Z].indexOf(k) !== -1, Cs = (As = j?.[U]) != null ? As : 0, Is = gi ? Ts : Mt - M[kr] - H[kr] - Cs + fe.altAxis, Ls = gi ? Mt + M[kr] + H[kr] - Cs - fe.altAxis : ks, Os = h && gi ? Ab(Is, Mt, Ls) : Yt(h ? Is : Ts, Mt, h ? Ls : ks);
            I[U] = Os,
            Te[U] = Os - Mt
        }
        t.modifiersData[r] = Te
    }
}
var Fb = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: V1,
    requiresIfExists: ["offset"]
};
function ss(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}
function us(e) {
    return e === ee(e) || !se(e) ? Xt(e) : ss(e)
}
function G1(e) {
    var t = e.getBoundingClientRect()
      , n = lt(t.width) / e.offsetWidth || 1
      , r = lt(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1
}
function cs(e, t, n) {
    n === void 0 && (n = !1);
    var r = se(t)
      , o = se(t) && G1(t)
      , i = me(t)
      , s = ze(e, o)
      , u = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , d = {
        x: 0,
        y: 0
    };
    return (r || !r && !n) && ((de(t) !== "body" || Jt(i)) && (u = us(t)),
    se(t) ? (d = ze(t, !0),
    d.x += t.clientLeft,
    d.y += t.clientTop) : i && (d.x = Qt(i))),
    {
        x: s.left + u.scrollLeft - d.x,
        y: s.top + u.scrollTop - d.y,
        width: s.width,
        height: s.height
    }
}
function K1(e) {
    var t = new Map
      , n = new Set
      , r = [];
    e.forEach(function(i) {
        t.set(i.name, i)
    });
    function o(i) {
        n.add(i.name);
        var s = [].concat(i.requires || [], i.requiresIfExists || []);
        s.forEach(function(u) {
            if (!n.has(u)) {
                var d = t.get(u);
                d && o(d)
            }
        }),
        r.push(i)
    }
    return e.forEach(function(i) {
        n.has(i.name) || o(i)
    }),
    r
}
function ds(e) {
    var t = K1(e);
    return Pb.reduce(function(n, r) {
        return n.concat(t.filter(function(o) {
            return o.phase === r
        }))
    }, [])
}
function ls(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0,
                n(e())
            })
        }
        )),
        t
    }
}
function fs(e) {
    var t = e.reduce(function(n, r) {
        var o = n[r.name];
        return n[r.name] = o ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data)
        }) : r,
        n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
var _b = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function Bb() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return !t.some(function(r) {
        return !(r && typeof r.getBoundingClientRect == "function")
    })
}
function Hb(e) {
    e === void 0 && (e = {});
    var t = e
      , n = t.defaultModifiers
      , r = n === void 0 ? [] : n
      , o = t.defaultOptions
      , i = o === void 0 ? _b : o;
    return function(u, d, l) {
        l === void 0 && (l = i);
        var p = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, _b, i),
            modifiersData: {},
            elements: {
                reference: u,
                popper: d
            },
            attributes: {},
            styles: {}
        }
          , m = []
          , g = !1
          , h = {
            state: p,
            setOptions: function(k) {
                var C = typeof k == "function" ? k(p.options) : k;
                y(),
                p.options = Object.assign({}, i, p.options, C),
                p.scrollParents = {
                    reference: Qe(u) ? It(u) : u.contextElement ? It(u.contextElement) : [],
                    popper: It(d)
                };
                var N = ds(fs([].concat(r, p.options.modifiers)));
                if (p.orderedModifiers = N.filter(function(j) {
                    return j.enabled
                }),
                0) {
                    var L;
                    if (getBasePlacement(p.options.placement) === auto)
                        var U;
                    var I, M, H, Y, fe
                }
                return b(),
                h.update()
            },
            forceUpdate: function() {
                if (!g) {
                    var k = p.elements
                      , C = k.reference
                      , N = k.popper;
                    if (Bb(C, N)) {
                        p.rects = {
                            reference: cs(C, Ye(N), p.options.strategy === "fixed"),
                            popper: Kt(N)
                        },
                        p.reset = !1,
                        p.placement = p.options.placement,
                        p.orderedModifiers.forEach(function(j) {
                            return p.modifiersData[j.name] = Object.assign({}, j.data)
                        });
                        for (var L = 0, U = 0; U < p.orderedModifiers.length; U++) {
                            if (p.reset === !0) {
                                p.reset = !1,
                                U = -1;
                                continue
                            }
                            var I = p.orderedModifiers[U]
                              , M = I.fn
                              , H = I.options
                              , Y = H === void 0 ? {} : H
                              , fe = I.name;
                            typeof M == "function" && (p = M({
                                state: p,
                                options: Y,
                                name: fe,
                                instance: h
                            }) || p)
                        }
                    }
                }
            },
            update: ls(function() {
                return new Promise(function(S) {
                    h.forceUpdate(),
                    S(p)
                }
                )
            }),
            destroy: function() {
                y(),
                g = !0
            }
        };
        if (!Bb(u, d))
            return h;
        h.setOptions(l).then(function(S) {
            !g && l.onFirstUpdate && l.onFirstUpdate(S)
        });
        function b() {
            p.orderedModifiers.forEach(function(S) {
                var k = S.name
                  , C = S.options
                  , N = C === void 0 ? {} : C
                  , L = S.effect;
                if (typeof L == "function") {
                    var U = L({
                        state: p,
                        name: k,
                        instance: h,
                        options: N
                    })
                      , I = function() {};
                    m.push(U || I)
                }
            })
        }
        function y() {
            m.forEach(function(S) {
                return S()
            }),
            m = []
        }
        return h
    }
}
var $1 = [Ib, Db, Cb, Eb, Ub, Ob, Fb, Tb, Nb]
  , ps = Hb({
    defaultModifiers: $1
});
var Qb = q(Yb());
var Xb = {
    de: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " in 1Password gespeichert"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "1Password-Shell-Plug-in f\xFCr " + e.platformName + " verf\xFCgbar"
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password hat ein Problem festgestellt."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password ist gesperrt. Bitte entsperren und erneut versuchen."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password meldet sich jetzt automatisch an, nachdem Ihre Anmeldedaten automatisch ausgef\xFCllt wurden."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "Eine Dauer f\xFCr das Ausgabenlimit ist erforderlich"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Bei der Kommunikation mit Brex.com ist ein Problem aufgetreten. Bitte versuchen Sie es erneut"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "Ein schnellerer Weg, sich anzumelden"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "Durch eine Sicherheitsl\xFCcke auf dieser Website ist Ihr aktuelles Passwort gef\xE4hrdet."
        },
        "A-title-is-required": function(e) {
            return "Ein Titel ist erforderlich"
        },
        "Add-account": function(e) {
            return "Konto hinzuf\xFCgen"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "Konto zur 1Password-Browser-Erweiterung hinzuf\xFCgen"
        },
        "All-vaults-are-disabled-": function(e) {
            return "Alle Tresore sind deaktiviert."
        },
        "An-error-has-occurred": function(e) {
            return "Es ist ein Fehler aufgetreten"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "Es ist ein unerwarteter Fehler aufgetreten. Bitte kontaktieren Sie support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "Zu Konto zuweisen"
        },
        Back: function(e) {
            return "Zur\xFCck"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Brex-Karten werden von Brex.com gespeichert und synchronisiert."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex f\xFCllt Transaktionsnotizen auf dieser Karte automatisch aus."
        },
        Cancel: function(e) {
            return "Abbrechen"
        },
        "Change-now": function(e) {
            return "Jetzt \xE4ndern"
        },
        "Change-this-compromised-password": function(e) {
            return "\xC4ndern Sie dieses kompromittierte Passwort"
        },
        "Choose-an-account": function(e) {
            return "W\xE4hlen Sie ein Konto"
        },
        Close: function(e) {
            return "Schlie\xDFen"
        },
        "Conceal-previous-value": function(e) {
            return "Vorherigen Wert verbergen"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "Stellen Sie eine Verbindung zum Internet her und versuchen Sie es erneut."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Mit Privacy Card verbinden\u2026"
        },
        "Contact-Support": function(e) {
            return "Support kontaktieren"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "Bitten Sie den Support um Hilfe und teilen Sie ihm mit, dass es sich um ein Problem mit dem Standardkonto handelt."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "Bitten Sie den Support um Hilfe und teilen Sie ihm mit, dass es sich um ein Problem mit dem generierten Passworttresor handelt."
        },
        "Create---Fill": function(e) {
            return "Erstellen und ausf\xFCllen"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Brex-Verk\xE4uferkarte erstellen \u2026"
        },
        "Create-Masked-Email": function(e) {
            return "Maskierte E-Mail erstellen"
        },
        Custom: function(e) {
            return "Benutzerdefiniert"
        },
        Dismiss: function(e) {
            return "Verwerfen"
        },
        "Don-t-ask-again": function(e) {
            return "Nicht erneut fragen"
        },
        "Download-1Password-8": function(e) {
            return "1Password 8 herunterladen"
        },
        Edit: function(e) {
            return "Bearbeiten"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "Betrag in Dollar eingeben"
        },
        Error: function(e) {
            return "Fehler"
        },
        "Existing-items": function(e) {
            return "Bestehende Objekte"
        },
        "Failed-to-load-item-": function(e) {
            return "Objekt konnte nicht geladen werden."
        },
        "Failed-to-save-item-": function(e) {
            return "Objekt konnte nicht gespeichert werden."
        },
        "Fill-Email": function(e) {
            return "E-Mail ausf\xFCllen"
        },
        "Funding-Source": function(e) {
            return "Finanzierungsquelle"
        },
        "Get-Help-": function(e) {
            return "Hilfe anfordern \u2026"
        },
        "Got-it": function(e) {
            return "Verstanden"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "Eingabefeld f\xFCr den Objekttitel"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "Ung\xFCltiger Einmalpasswort-Code."
        },
        "Learn-more-": function(e) {
            return "Mehr erfahren \u2026"
        },
        "Loading-": function(e) {
            return "Wird geladen \u2026"
        },
        Lock: function(e) {
            return "Sperren"
        },
        "Lock-Card": function(e) {
            return "Sperrkarte"
        },
        "Lock-card-is-required": function(e) {
            return "Eine Sperrkarte ist erforderlich"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "Stellen Sie sicher, dass 1Password-Konten, die Logins f\xFCr diese Website enthalten, entsperrt sind."
        },
        "New-Item": function(e) {
            return "Neues Objekt"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "N\xE4chster Schritt: SSH-Agenten einrichten"
        },
        "No-logins-found": function(e) {
            return "Keine Logins gefunden"
        },
        "No-passkeys-found": function(e) {
            return "Keine Passkeys gefunden"
        },
        None: function(e) {
            return "Keine"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "Nach dem Speichern merken wir es uns f\xFCr Sie."
        },
        Overwrite: function(e) {
            return "\xDCberschreiben"
        },
        "Overwrite-one-time-password-": function(e) {
            return "Einmal-Passwort \xFCberschreiben?"
        },
        "Passkey-saved": function(e) {
            return "Passkey gespeichert"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "Bitte melden Sie sich bei 1Password an, um sich online zu sch\xFCtzen und Ihre Passw\xF6rter ganz einfach zu speichern und einzusetzen."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Dr\xFCcken Sie zum Entsperren auf das 1Password-Symbol in der Symbolleiste Ihres Browsers."
        },
        Previous: function(e) {
            return "Vorherige"
        },
        "Privacy-Card": function(e) {
            return "Privacy Card"
        },
        "Reason-for-card": function(e) {
            return "Grund f\xFCr Karte"
        },
        Regenerate: function(e) {
            return "Regenerieren"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "Erneut regenerieren in " + e.secondsLeft + " s"
        },
        "Reveal-previous-value": function(e) {
            return "Vorherigen Wert aufdecken"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "Aufdecken, um vorherigen Wert zu sehen"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH-Schl\xFCssel erstellt. Um diesen Schl\xFCssel lokal zu verwenden, richten Sie den 1Password-SSH-Agenten ein, der in 1Password\xA08 verf\xFCgbar ist."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH-Schl\xFCssel erstellt. Um diesen Schl\xFCssel lokal zu verwenden, richten Sie den 1Password-SSH-Agenten ein."
        },
        Save: function(e) {
            return "Speichern"
        },
        "Save-Item": function(e) {
            return "Objekt speichern"
        },
        "Save-in-1Password-": function(e) {
            return "In 1Password speichern?"
        },
        "Save-item": function(e) {
            return "Objekt speichern"
        },
        "Save-one-time-password": function(e) {
            return "Einmal-Passwort speichern"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "Einmal-Passw\xF6rter speichern, die bei der Anmeldung automatisch ausgef\xFCllt werden."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "Dialog zum Speichern oder Aktualisieren von Informationen in 1Password"
        },
        "Save-passkey": function(e) {
            return "Passkey speichern"
        },
        "Saved-one-time-password": function(e) {
            return "Gespeichertes Einmal-Passwort"
        },
        "Select-account": function(e) {
            return "Konto ausw\xE4hlen"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "W\xE4hlen Sie zum Entsperren das 1Password-Symbol in der Symbolleiste Ihres Browsers aus."
        },
        "Session-expired-for-tab-": function(e) {
            return "Sitzung f\xFCr den Tab abgelaufen."
        },
        "Set-Spending-Limit": function(e) {
            return "Ausgabenlimit festlegen"
        },
        "Set-up-SSH-Agent": function(e) {
            return "SSH-Agenten einrichten"
        },
        "Sign-in": function(e) {
            return "Anmelden"
        },
        "Sign-in-to-1Password": function(e) {
            return "Bei 1Password anmelden"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "Melden Sie sich mit einem Klick bei Websites an, speichern Sie Ihre Daten ganz einfach und generieren Sie neue Passw\xF6rter mit der Browser-Erweiterung."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "Mit einem Passkey anmelden"
        },
        "Something-went-wrong": function(e) {
            return "Etwas ist schiefgelaufen"
        },
        "Spending-Limit": function(e) {
            return "Ausgabenlimit"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "Schritt 3: Pr\xFCfen oder bearbeiten Sie Ihr neues Login-Objekt und speichern Sie es anschlie\xDFend."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Speichern Sie Ihren " + e.credentialName + " in 1Password und authentifizieren Sie " + e.platformName + " CLI mit " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "Die Integration mit Brex wurde deaktiviert. Bitte stellen Sie sie auf 1Password.com wieder her"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "Das Einmal-Passwort in diesem Objekt wird ersetzt."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "Der Grund f\xFCr eine Karte ist erforderlich"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "Zeit\xFCberschreitung bei der Anfrage zur Erstellung eines Passkeys."
        },
        "The-spending-limit-is-required": function(e) {
            return "Das Ausgabenlimit ist erforderlich"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "Tippen Sie anschlie\xDFend auf die Offline-Anzeige (<offlineIndicator />) und schlie\xDFen Sie Ihre Anmeldung ab, um Ihre \xC4nderungen zu speichern."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "Um " + e.item + " zu speichern, m\xFCssen Sie zuerst 1Password entsperren."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "Um einen Passkey zu speichern, m\xFCssen Sie zuerst 1Password entsperren."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "Um Ihren Passkey zu verwenden, m\xFCssen Sie zuerst 1Password entsperren."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID oder Apple Watch"
        },
        "Try-Again": function(e) {
            return "Erneut versuchen"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "Versuchen Sie, 1Password zu sperren und entsperren, um es erneut auszuf\xFCllen."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "Karte kann nicht erstellt werden, bitte erneut versuchen."
        },
        "Unable-to-fill-password": function(e) {
            return "Passwort kann nicht ausgef\xFCllt werden."
        },
        "Unlock-1Password": function(e) {
            return "1Password entsperren"
        },
        "Unlock-to-save": function(e) {
            return "Zum Speichern entsperren"
        },
        "Unlocking-1Password-": function(e) {
            return "1Password wird entsperrt \u2026"
        },
        Update: function(e) {
            return "Update"
        },
        "Update-Existing": function(e) {
            return "Bestehende aktualisieren"
        },
        "Update-Item": function(e) {
            return "Objekt aktualisieren"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "1Password f\xFCr die Zwei-Faktor-Authentifizierung verwenden"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Verwenden Sie 1Password, um " + e.platformName + " CLI mit " + e.authType + " zu authentifizieren."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "Sicherheitsschl\xFCssel oder anderen Passkey verwenden"
        },
        "View-settings": function(e) {
            return "Einstellungen anzeigen"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "Das vorgeschlagene Passwort kann nicht verwendet werden, da ein unerwarteter Fehler aufgetreten ist."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "Sie k\xF6nnen dies jederzeit in den Einstellungen \xE4ndern."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "Sie k\xF6nnen Ihre Konten in den Einstellungen verwalten."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "Ihr " + e.accountName + "-Konto muss entsperrt werden, um dieses Passwort auszuf\xFCllen. Entsperren Sie es und versuchen Sie es erneut."
        },
        "a--item-": function(e) {
            return "ein " + e.item
        },
        "an--item-": function(e) {
            return "ein " + e.item
        },
        email: function(e) {
            return "E-Mail"
        },
        "every-month": function(e) {
            return "jeden Monat"
        },
        "every-quarter": function(e) {
            return "jedes Quartal"
        },
        "every-transaction": function(e) {
            return "jede Transaktion"
        },
        "every-year": function(e) {
            return "jedes Jahr"
        },
        forever: function(e) {
            return "f\xFCr immer"
        },
        "in-1-Month": function(e) {
            return "in 1 Monat"
        },
        "in-1-Year": function(e) {
            return "in 1 Jahr"
        },
        "in-7-Days": function(e) {
            return "in 7 Tagen"
        },
        "loading---": function(e) {
            return "wird geladen..."
        },
        "one-time": function(e) {
            return "einmalig"
        },
        "one-time-password": function(e) {
            return "einmaliges Passwort"
        },
        "system-authentication": function(e) {
            return "Systemauthentifizierung"
        },
        "auth-unfamiliar-website": function(e) {
            return "Unbekannte Website"
        },
        "auth-type-code-to-fill": function(e) {
            return e.code + " tippen, um " + e.type + e.website + " auszuf\xFCllen."
        },
        "auth-filling-on-website": function(e) {
            return " auf " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "Falscher Code eingegeben"
        },
        "auth-why-is-this-needed": function(e) {
            return "Wieso ist das n\xF6tig?"
        },
        "item-use-suggested-password": function(e) {
            return "Empfohlenes Passwort nutzen"
        },
        "item-create-privacy-card": function(e) {
            return "Privacy Card erstellen"
        },
        "item-create-email-alias": function(e) {
            return "Verschleierte E-Mail erstellen"
        },
        "item-type-credit-card": function(e) {
            return "Kreditkarte"
        },
        "item-type-identity": function(e) {
            return "Identit\xE4t"
        },
        "item-type-unspecified": function(e) {
            return "Objekt"
        },
        categories: function(e) {
            return "Kategorien"
        },
        "category-suggestions": function(e) {
            return "Vorschl\xE4ge"
        },
        "category-logins": function(e) {
            return "Logins"
        },
        "category-identities": function(e) {
            return "Identit\xE4ten"
        },
        "category-credit-cards": function(e) {
            return "Kreditkarten"
        },
        "category-generated-password": function(e) {
            return "Generiertes Passwort"
        },
        "category-hide-on-this-page": function(e) {
            return "Auf dieser Seite ausblenden"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "Bitte 1Password per Symbolleistenicon entsperren."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return e.shortcut + "-K\xFCrzel tippen, um 1Password zu entsperren"
        },
        "locked-request-unlock": function(e) {
            return "1Password \xF6ffnen"
        },
        "notification-add-account": function(e) {
            return "Konto hinzuf\xFCgen zu"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "Sie k\xF6nnen Konten sp\xE4ter in 1Password hinzuf\xFCgen und entfernen"
        },
        "notification-settings": function(e) {
            return "Einstellungen"
        },
        "notification-add-account-never": function(e) {
            return "Niemals"
        },
        "notification-add-account-confirm": function(e) {
            return "Hinzuf\xFCgen"
        },
        "authorize-fill": function(e) {
            return "Klicken Sie OK, um Ihr 1Password-Objekt auf " + e.host + " auszuf\xFCllen"
        },
        "authorize-fill-brex": function(e) {
            return "Klicken Sie auf OK, um mit 1Password eine Brex Karte auf " + e.host + " zu erstellen und auszuf\xFCllen"
        },
        "authorize-fill-privacy": function(e) {
            return "Klicken Sie auf OK, um mit 1Password eine Privacy Card auf " + e.host + " zu erstellen und auszuf\xFCllen"
        },
        "authorize-fill-protocol": function(e) {
            return `1Password-Warnung: Dies ist eine ungesicherte (HTTP) Seite, und alle Informationen, die Sie absenden, k\xF6nnen m\xF6glicherweise von anderen eingesehen und ge\xE4ndert werden. 

M\xF6chten Sie dieses Objekt immer noch ausf\xFCllen?`
        },
        "tooltip-close-1password": function(e) {
            return "Schlie\xDFen"
        },
        "tooltip-open-1password": function(e) {
            return "\xD6ffnen"
        },
        "tooltip-no-items": function(e) {
            return "Keine anzuzeigenden Objekte vorhanden"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `Klicken Sie zum Entsperren auf das 1Password-Symbol 
in der Symbolleiste Ihres Browsers`
        },
        "tooltip-unlock-1password": function(e) {
            return "1Password entsperren"
        },
        Title: function(e) {
            return "Titel"
        },
        "save-in-header": function(e) {
            return "Speichern in"
        },
        "save-item": function(e) {
            return "Objekt speichern"
        },
        "update-item": function(e) {
            return "Objekt aktualisieren"
        },
        "select-item": function(e) {
            return "Objekt ausw\xE4hlen"
        },
        "Save-new-Login": function(e) {
            return "Neuen Login speichern"
        },
        cancel: function(e) {
            return "Abbrechen"
        },
        close: function(e) {
            return "Schlie\xDFen"
        },
        confirm: function(e) {
            return "Best\xE4tigen"
        },
        "unknown-item": function(e) {
            return "Unbekanntes Objekt"
        },
        "save-in": function(e) {
            return "Speichern in"
        },
        "select-a-vault": function(e) {
            return "Tresor w\xE4hlen"
        },
        "locked-title": function(e) {
            return "1Password ist gesperrt"
        },
        "locked-message": function(e) {
            return "Um weiter mit 1Password zu speichern, entsperren Sie ein Konto."
        },
        "offline-title": function(e) {
            return "Ihr Konto ist offline."
        },
        "offline-message": function(e) {
            return "Sie k\xF6nnen dieses Objekt erst speichern, wenn Sie angemeldet und online sind."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "Dr\xFCcken Sie zum \xD6ffnen von 1Password auf das 1Password-Symbol in der Symbolleiste Ihres Browsers."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "Dr\xFCcken Sie auf " + e.shortcut + ", um 1Password zu \xF6ffnen."
        },
        "current-item": function(e) {
            return "Aktuelles Objekt"
        },
        "updated-item": function(e) {
            return "Aktualisiertes Objekt"
        },
        "add-tag": function(e) {
            return "Tag hinzuf\xFCgen"
        },
        "remove-tag": function(e) {
            return "Tag entfernen"
        },
        "sso-info-banner": function(e) {
            return "Neue Objekte mit verkn\xFCpften Logins sollten im selben Tresor gespeichert werden und m\xFCssen im selben Konto sein."
        },
        "new-item": function(e) {
            return "Neues Objekt"
        },
        "update-existing": function(e) {
            return "Bestehende aktualisieren"
        },
        "enable-privacy-header": function(e) {
            return "Zu 1Password hinzuf\xFCgen"
        },
        "enable-privacy-description": function(e) {
            return "Verwenden Sie 1Password, um \xFCberall dort, wo Sie online bezahlen, Privacy Cards zu erstellen und auszuf\xFCllen und H\xE4ndlerkarten f\xFCr die zuk\xFCnftige Verwendung zu speichern."
        },
        "enable-privacy-choose-account": function(e) {
            return "W\xE4hlen Sie ein Konto"
        },
        "enable-privacy-add-button": function(e) {
            return "Zu 1Password hinzuf\xFCgen"
        },
        "enable-privacy-error": function(e) {
            return "Die Integration von Privacy konnte nicht aktiviert werden. Bitte sp\xE4ter erneut versuchen."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "Bitte entsperren Sie das ausgew\xE4hlte Konto, um die Integration zu aktivieren."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "Bitte entsperren Sie 1Password, um die Integration zu aktivieren."
        },
        "privacy-error-enable-header": function(e) {
            return "Integration kann nicht aktiviert werden"
        },
        "privacy-error-header": function(e) {
            return "Es ist ein Fehler aufgetreten"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "F\xFCr die Integration mit Privacy ist eine 1Password-Mitgliedschaft erforderlich."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Bitte vergewissern Sie sich, dass mindestens eine Finanzierungsquelle mit Ihrem Privacy.com-Konto verkn\xFCpft ist und versuchen Sie es dann erneut."
        },
        "privacy-error-unexpected-error": function(e) {
            return "Es ist ein unerwarteter Fehler aufgetreten. Bitte kontaktieren Sie support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "jeden Monat"
        },
        "privacy-monthly": function(e) {
            return "Monatlich"
        },
        "privacy-annually": function(e) {
            return "jedes Jahr"
        },
        "privacy-transaction": function(e) {
            return "jede Transaktion"
        },
        "privacy-forever": function(e) {
            return "f\xFCr immer"
        },
        "privacy-single-use": function(e) {
            return "Einmaliger Gebrauch"
        },
        "privacy-header": function(e) {
            return "Privacy Card erstellen"
        },
        "privacy-card-name-label": function(e) {
            return "Kartenname"
        },
        "privacy-spend-limit-label": function(e) {
            return "Ausgabenlimit festlegen"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "Frequenz"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "Ausgabenlimit"
        },
        "privacy-funding-account-label": function(e) {
            return "Finanzierungsquelle"
        },
        "privacy-save-label": function(e) {
            return "In 1Password speichern"
        },
        "privacy-create-button": function(e) {
            return "Erstellen und ausf\xFCllen"
        },
        "privacy-error-integration-disabled": function(e) {
            return "Bitte aktivieren Sie die Privacy-Integration \xFCber das Kontextmen\xFC der Developer Tools."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password ist gesperrt. Bitte entsperren und erneut versuchen."
        },
        "privacy-error-vault-locked": function(e) {
            return "Dieser Tresor ist gesperrt. Bitte entsperren und erneut versuchen."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "W\xE4hlen Sie einen Tresor aus."
        },
        "privacy-error-save-failed": function(e) {
            return "Objekt konnte nicht gespeichert werden. Pr\xFCfen Sie, ob der Tresor entsperrt ist, und versuchen Sie es erneut."
        },
        "privacy-error-empty-card-name": function(e) {
            return "Bitte geben Sie einen Kartenname ein."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "Bitte geben Sie einen k\xFCrzeren Kartenname ein."
        },
        "privacy-error-empty-limit": function(e) {
            return "Sie m\xFCssen ein Ausgabenlimit f\xFCr die Karte angeben."
        },
        "privacy-error-limit-too-large": function(e) {
            return "Bitte geben Sie ein kleineres Ausgabenlimit f\xFCr die Karte ein."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "URL kann nicht geparst werden"
        },
        "privacy-error-http-error": function(e) {
            return "Privacy nicht erreichbar. Bitte \xFCberpr\xFCfen Sie Ihre Internetverbindung und versuchen Sie es erneut."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "Authentifizierung mit Privacy nicht m\xF6glich. Bitte \xFCberpr\xFCfen Sie Ihren API-Schl\xFCssel und versuchen Sie es erneut."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "Fehler beim Erstellen der Karte: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "Fehler beim Erstellen der Karte."
        },
        "privacy-error-brain-error": function(e) {
            return "Es ist nicht m\xF6glich, ein Kreditkarten-Objekt von der Privacy Card aus zu erstellen."
        },
        "privacy-error-default": function(e) {
            return "Ein unerwarteter Fehler ist aufgetreten."
        },
        "notification-save-in": function(e) {
            return "Speichern in"
        },
        "notification-save-secondary": function(e) {
            return "Soll Ihr " + e.host + "-Login in 1Password gespeichert werden?"
        },
        "notification-save-save": function(e) {
            return "Speichern"
        },
        "ssh-title": function(e) {
            return "SSH-Key erstellen und ausf\xFCllen"
        },
        "ssh-create-button": function(e) {
            return "Erstellen und ausf\xFCllen"
        },
        "ssh-error-message": function(e) {
            return "Es ist ein unerwarteter Fehler aufgetreten. Bitte kontaktieren Sie support@1password.com"
        },
        "unexpected-error": function(e) {
            return "Es ist ein unerwarteter Fehler aufgetreten. Bitte kontaktieren Sie support@1password.com."
        },
        "login-duplicate": function(e) {
            return "Bereits gespeichert"
        },
        "social-login-linked": function(e) {
            return e.item + " ist verlinkt mit:"
        },
        "social-login-locked": function(e) {
            return "Dr\xFCcken Sie zum Entsperren auf das 1Password-Symbol in der Symbolleiste Ihres Browsers."
        },
        "social-login-no-items": function(e) {
            return "Keine Objekte f\xFCr die Anmeldung gefunden."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " wurde verwendet, um sich anzumelden bei:"
        },
        "social-login-save-in-1password": function(e) {
            return "In 1Password speichern?"
        },
        "social-login-save-item": function(e) {
            return "Objekt speichern"
        },
        "social-login-save-item-locked": function(e) {
            return "Zum Speichern entsperren"
        },
        "social-login-sign-in-with": function(e) {
            return "Anmelden mit\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "Melden Sie sich an mit " + e.title + ": " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "Anmelden"
        },
        "social-login-select-provider": function(e) {
            return "Ihr " + e.provider + "-Login ausw\xE4hlen"
        },
        "social-login-add-existing": function(e) {
            return "F\xFCgen Sie ein bestehendes Login hinzu, um sich damit anzumelden."
        },
        "social-login-sign-in-with-label": function(e) {
            return "anmelden mit"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "W\xE4hlen Sie den Login, mit dem Sie sich angemeldet haben"
        },
        "social-login-save-provider-only-title": function(e) {
            return "Als generisches " + e.provider + "-Objekt speichern"
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "Nur speichern, dass Sie sich mit " + e.provider + " angemeldet haben"
        },
        "shell-plugin-create-title": function(e) {
            return "Erstellen Sie ein neues Objekt f\xFCr Shell-Plug-ins"
        },
        "shell-plugin-create-button": function(e) {
            return "Objekt speichern"
        },
        "autosave-title-save": function(e) {
            return e.item + " speichern"
        },
        "autosave-title-saved": function(e) {
            return e.item + " gespeichert"
        },
        "autosave-title-update": function(e) {
            return e.item + " aktualisieren"
        },
        "autosave-title-updated": function(e) {
            return e.item + " aktualisiert"
        },
        "autosave-save-type-generic": function(e) {
            return "Objekt"
        },
        "autosave-save-type-login": function(e) {
            return "Login"
        },
        "autosave-save-type-credit-card": function(e) {
            return "Kreditkarte"
        },
        "autosave-save-type-identity": function(e) {
            return "Identit\xE4t"
        }
    },
    en: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " saved in 1Password"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "1Password Shell Plugin available for " + e.platformName
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password encountered a problem."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password is locked. Please try again after unlocking."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password will now sign in automatically after autofilling your credentials."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "A duration for the spending limit is required"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "A problem occurred when communicating with Brex.com. Please try again"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "A quicker way to sign in"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "A security breach on this website has put your current password at risk."
        },
        "A-title-is-required": function(e) {
            return "A title is required"
        },
        "Add-account": function(e) {
            return "Add account"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "Add account to 1Password browser extension"
        },
        "All-vaults-are-disabled-": function(e) {
            return "All vaults are disabled."
        },
        "An-error-has-occurred": function(e) {
            return "An error has occurred"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "An unexpected error occurred. Please contact support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "Assign to Account"
        },
        Back: function(e) {
            return "Back"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Brex cards are stored and sync from Brex.com."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex will auto-fill transaction memos on this card."
        },
        Cancel: function(e) {
            return "Cancel"
        },
        "Change-now": function(e) {
            return "Change now"
        },
        "Change-this-compromised-password": function(e) {
            return "Change this compromised password"
        },
        "Choose-an-account": function(e) {
            return "Choose an account"
        },
        Close: function(e) {
            return "Close"
        },
        "Conceal-previous-value": function(e) {
            return "Conceal previous value"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "Connect to the internet and then try again."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Connecting to Privacy Card\u2026"
        },
        "Contact-Support": function(e) {
            return "Contact Support"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "Contact support for help, and tell them it's a problem with the default account."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "Contact support for help, and tell them it's a problem with the generated password vault."
        },
        "Create---Fill": function(e) {
            return "Create & Fill"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Create Brex vendor card\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "Create Masked Email"
        },
        Custom: function(e) {
            return "Custom"
        },
        Dismiss: function(e) {
            return "Dismiss"
        },
        "Don-t-ask-again": function(e) {
            return "Don\u2019t ask again"
        },
        "Download-1Password-8": function(e) {
            return "Download 1Password 8"
        },
        Edit: function(e) {
            return "Edit"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "Enter the amount in dollars"
        },
        Error: function(e) {
            return "Error"
        },
        "Existing-items": function(e) {
            return "Existing items"
        },
        "Failed-to-load-item-": function(e) {
            return "Failed to load item."
        },
        "Failed-to-save-item-": function(e) {
            return "Failed to save item."
        },
        "Fill-Email": function(e) {
            return "Fill Email"
        },
        "Funding-Source": function(e) {
            return "Funding Source"
        },
        "Get-Help-": function(e) {
            return "Get Help\u2026"
        },
        "Got-it": function(e) {
            return "Got it"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "Input field for the item's title"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "Invalid one-time password secret."
        },
        "Learn-more-": function(e) {
            return "Learn more\u2026"
        },
        "Loading-": function(e) {
            return "Loading\u2026"
        },
        Lock: function(e) {
            return "Lock"
        },
        "Lock-Card": function(e) {
            return "Lock Card"
        },
        "Lock-card-is-required": function(e) {
            return "Lock card is required"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "Make sure 1Password accounts containing logins for this site are unlocked."
        },
        "New-Item": function(e) {
            return "New Item"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "Next step: Set up SSH Agent"
        },
        "No-logins-found": function(e) {
            return "No logins found"
        },
        "No-passkeys-found": function(e) {
            return "No passkeys found"
        },
        None: function(e) {
            return "None"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "Once saved, we'll remember it for you."
        },
        Overwrite: function(e) {
            return "Overwrite"
        },
        "Overwrite-one-time-password-": function(e) {
            return "Overwrite one-time password?"
        },
        "Passkey-saved": function(e) {
            return "Passkey saved"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "Please sign in to 1Password to keep yourself safe online and make it easy to save and fill your passwords."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Press the 1Password icon in your browser's toolbar to unlock."
        },
        Previous: function(e) {
            return "Previous"
        },
        "Privacy-Card": function(e) {
            return "Privacy Card"
        },
        "Reason-for-card": function(e) {
            return "Reason for card"
        },
        Regenerate: function(e) {
            return "Regenerate"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "Regenerate again in " + e.secondsLeft + "s"
        },
        "Reveal-previous-value": function(e) {
            return "Reveal previous value"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "Reveal to see previous value"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH key created. To use this key locally, set up the 1Password SSH Agent, available on 1Password 8."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH key created. To use this key locally, set up the 1Password SSH agent."
        },
        Save: function(e) {
            return "Save"
        },
        "Save-Item": function(e) {
            return "Save Item"
        },
        "Save-in-1Password-": function(e) {
            return "Save in 1Password?"
        },
        "Save-item": function(e) {
            return "Save item"
        },
        "Save-one-time-password": function(e) {
            return "Save one-time password"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "Save one-time passwords that will be automatically filled during sign-in."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "Save or update information dialog in 1Password"
        },
        "Save-passkey": function(e) {
            return "Save passkey"
        },
        "Saved-one-time-password": function(e) {
            return "Saved one-time password"
        },
        "Select-account": function(e) {
            return "Select account"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Select the 1Password icon in your browser's toolbar to unlock."
        },
        "Session-expired-for-tab-": function(e) {
            return "Session expired for tab."
        },
        "Set-Spending-Limit": function(e) {
            return "Set Spending Limit"
        },
        "Set-up-SSH-Agent": function(e) {
            return "Set up SSH Agent"
        },
        "Sign-in": function(e) {
            return "Sign in"
        },
        "Sign-in-to-1Password": function(e) {
            return "Sign in to 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "Sign in to websites with one click, easily save your information, and generate new passwords with the browser extension."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "Sign in with a passkey"
        },
        "Something-went-wrong": function(e) {
            return "Something went wrong"
        },
        "Spending-Limit": function(e) {
            return "Spending Limit"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "Step 3: Review or edit your new login item, then save it."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Store your " + e.credentialName + " in 1Password and authenticate " + e.platformName + " CLI with " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "The integration with Brex has been disabled, please reconnect it on 1Password.com"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "The one-time password in this item will be replaced."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "The reason for a card is required"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "The request to create a passkey timed out."
        },
        "The-spending-limit-is-required": function(e) {
            return "The spending limit is required"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "Then tap the offline indicator ( <offlineIndicator /> ) and finish signing in to save your changes."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "To save " + e.item + ", unlock 1Password first."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "To save a passkey, unlock 1Password first."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "To use your passkey, unlock 1Password first."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID or Apple Watch"
        },
        "Try-Again": function(e) {
            return "Try Again"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "Try locking and then unlocking 1Password to fill again."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "Unable to create card, please try again."
        },
        "Unable-to-fill-password": function(e) {
            return "Unable to fill password"
        },
        "Unlock-1Password": function(e) {
            return "Unlock 1Password"
        },
        "Unlock-to-save": function(e) {
            return "Unlock to save"
        },
        "Unlocking-1Password-": function(e) {
            return "Unlocking 1Password\u2026"
        },
        Update: function(e) {
            return "Update"
        },
        "Update-Existing": function(e) {
            return "Update Existing"
        },
        "Update-Item": function(e) {
            return "Update Item"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "Use 1Password for two-factor authentication"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Use 1Password to authenticate " + e.platformName + " CLI with " + e.authType + "."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "Use a security key or another passkey"
        },
        "View-settings": function(e) {
            return "View settings"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "We're unable to use the suggested password as an unexpected error occurred."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "You can change this at any time in settings."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "You can manage your accounts in Settings."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "Your " + e.accountName + " account needs to be unlocked to fill this password. Unlock it and try again."
        },
        "a--item-": function(e) {
            return "a " + e.item
        },
        "an--item-": function(e) {
            return "an " + e.item
        },
        email: function(e) {
            return "email"
        },
        "every-month": function(e) {
            return "every month"
        },
        "every-quarter": function(e) {
            return "every quarter"
        },
        "every-transaction": function(e) {
            return "every transaction"
        },
        "every-year": function(e) {
            return "every year"
        },
        forever: function(e) {
            return "forever"
        },
        "in-1-Month": function(e) {
            return "in 1 Month"
        },
        "in-1-Year": function(e) {
            return "in 1 Year"
        },
        "in-7-Days": function(e) {
            return "in 7 Days"
        },
        "loading---": function(e) {
            return "loading..."
        },
        "one-time": function(e) {
            return "one time"
        },
        "one-time-password": function(e) {
            return "one-time password"
        },
        "system-authentication": function(e) {
            return "system authentication"
        },
        "auth-unfamiliar-website": function(e) {
            return "Unfamiliar Website"
        },
        "auth-type-code-to-fill": function(e) {
            return "Type " + e.code + " to authorize " + e.type + " filling" + e.website + "."
        },
        "auth-filling-on-website": function(e) {
            return " on " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "Incorrect code entered"
        },
        "auth-why-is-this-needed": function(e) {
            return "Why is this needed?"
        },
        "item-use-suggested-password": function(e) {
            return "Use Suggested Password"
        },
        "item-create-privacy-card": function(e) {
            return "Create Privacy Card"
        },
        "item-create-email-alias": function(e) {
            return "Create Masked Email"
        },
        "item-type-credit-card": function(e) {
            return "credit card"
        },
        "item-type-identity": function(e) {
            return "identity"
        },
        "item-type-unspecified": function(e) {
            return "item"
        },
        categories: function(e) {
            return "Categories"
        },
        "category-suggestions": function(e) {
            return "Suggestions"
        },
        "category-logins": function(e) {
            return "Logins"
        },
        "category-identities": function(e) {
            return "Identities"
        },
        "category-credit-cards": function(e) {
            return "Credit Cards"
        },
        "category-generated-password": function(e) {
            return "Generated Password"
        },
        "category-hide-on-this-page": function(e) {
            return "Hide on this page"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "Please unlock 1Password from the toolbar icon."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "Press " + e.shortcut + " to unlock 1Password"
        },
        "locked-request-unlock": function(e) {
            return "Open 1Password"
        },
        "notification-add-account": function(e) {
            return "Add account to"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "You can add and remove accounts later from 1Password"
        },
        "notification-settings": function(e) {
            return "Settings"
        },
        "notification-add-account-never": function(e) {
            return "Never"
        },
        "notification-add-account-confirm": function(e) {
            return "Add"
        },
        "authorize-fill": function(e) {
            return "Click OK to fill your 1Password item on " + e.host
        },
        "authorize-fill-brex": function(e) {
            return "Click OK to create and fill a Brex card using 1Password on " + e.host
        },
        "authorize-fill-privacy": function(e) {
            return "Click OK to create and fill a Privacy Card using 1Password on " + e.host
        },
        "authorize-fill-protocol": function(e) {
            return `1Password warning: This is an unsecured (HTTP) page, and any information you submit can potentially be seen and changed by others. \r
\r
Do you still wish to fill this item?`
        },
        "tooltip-close-1password": function(e) {
            return "Close"
        },
        "tooltip-open-1password": function(e) {
            return "Open"
        },
        "tooltip-no-items": function(e) {
            return "No items to show"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `Press the 1Password icon in\r
your browser\u2019s toolbar to unlock`
        },
        "tooltip-unlock-1password": function(e) {
            return "Unlock 1Password"
        },
        Title: function(e) {
            return "Title"
        },
        "save-in-header": function(e) {
            return "Save in"
        },
        "save-item": function(e) {
            return "Save Item"
        },
        "update-item": function(e) {
            return "Update Item"
        },
        "select-item": function(e) {
            return "Choose Item"
        },
        "Save-new-Login": function(e) {
            return "Save new Login"
        },
        cancel: function(e) {
            return "Cancel"
        },
        close: function(e) {
            return "Close"
        },
        confirm: function(e) {
            return "Confirm"
        },
        "unknown-item": function(e) {
            return "unknown item"
        },
        "save-in": function(e) {
            return "save in"
        },
        "select-a-vault": function(e) {
            return "Select a vault"
        },
        "locked-title": function(e) {
            return "1Password is locked"
        },
        "locked-message": function(e) {
            return "To continue saving with 1Password, unlock an account."
        },
        "offline-title": function(e) {
            return "Your account is offline."
        },
        "offline-message": function(e) {
            return "You won't be able to save this item until you are signed in and online."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "Press the 1Password icon in your browser\u2019s toolbar to open 1Password."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "Press " + e.shortcut + " to open 1Password."
        },
        "current-item": function(e) {
            return "Current Item"
        },
        "updated-item": function(e) {
            return "Updated Item"
        },
        "add-tag": function(e) {
            return "Add tag"
        },
        "remove-tag": function(e) {
            return "Remove tag"
        },
        "sso-info-banner": function(e) {
            return "New items with linked logins should be saved within the same vault, and must be in the same account."
        },
        "new-item": function(e) {
            return "New Item"
        },
        "update-existing": function(e) {
            return "Update Existing"
        },
        "enable-privacy-header": function(e) {
            return "Add to 1Password"
        },
        "enable-privacy-description": function(e) {
            return "Use 1Password to create and fill Privacy Cards everywhere you pay online, and save merchant cards for future use."
        },
        "enable-privacy-choose-account": function(e) {
            return "Choose an account"
        },
        "enable-privacy-add-button": function(e) {
            return "Add to 1Password"
        },
        "enable-privacy-error": function(e) {
            return "Unable to enable the Privacy integration. Please try again later."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "Please unlock the selected account to enable the integration."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "Please unlock 1Password to enable the integration."
        },
        "privacy-error-enable-header": function(e) {
            return "Unable to enable integration"
        },
        "privacy-error-header": function(e) {
            return "An error has occurred"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "A 1Password membership is required to integrate with Privacy."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Please ensure there is at least one Funding Source associated with your Privacy.com account, then try again."
        },
        "privacy-error-unexpected-error": function(e) {
            return "An unexpected error occurred. Please contact support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "every month"
        },
        "privacy-monthly": function(e) {
            return "Monthly"
        },
        "privacy-annually": function(e) {
            return "every year"
        },
        "privacy-transaction": function(e) {
            return "every transaction"
        },
        "privacy-forever": function(e) {
            return "forever"
        },
        "privacy-single-use": function(e) {
            return "Single Use"
        },
        "privacy-header": function(e) {
            return "Create Privacy Card"
        },
        "privacy-card-name-label": function(e) {
            return "Card name"
        },
        "privacy-spend-limit-label": function(e) {
            return "Set spending limit"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "Frequency"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "Spending Limit"
        },
        "privacy-funding-account-label": function(e) {
            return "Funding source"
        },
        "privacy-save-label": function(e) {
            return "Save in 1Password"
        },
        "privacy-create-button": function(e) {
            return "Create and Fill"
        },
        "privacy-error-integration-disabled": function(e) {
            return "Please enable the Privacy integration from the Developer Tools context menu."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password is locked. Please try again after unlocking."
        },
        "privacy-error-vault-locked": function(e) {
            return "This vault is locked. Please try again after unlocking."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "Please select a vault."
        },
        "privacy-error-save-failed": function(e) {
            return "Unable to save item. Check that the vault is unlocked and try again."
        },
        "privacy-error-empty-card-name": function(e) {
            return "Please enter a name for the card."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "Please enter a smaller name for the card."
        },
        "privacy-error-empty-limit": function(e) {
            return "You must provide a spending limit for the card."
        },
        "privacy-error-limit-too-large": function(e) {
            return "Please enter a smaller spending limit for the card."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "Unable to parse URL"
        },
        "privacy-error-http-error": function(e) {
            return "We were unable to reach Privacy. Please check your internet connection and try again."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "Unable to authenticate with Privacy. Please check your API key and try again."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "Error creating card: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "Error creating card."
        },
        "privacy-error-brain-error": function(e) {
            return "Unable to create credit card item from Privacy Card."
        },
        "privacy-error-default": function(e) {
            return "An unexpected error occurred."
        },
        "notification-save-in": function(e) {
            return "Save in"
        },
        "notification-save-secondary": function(e) {
            return "Save your " + e.host + " login in 1Password?"
        },
        "notification-save-save": function(e) {
            return "Save"
        },
        "ssh-title": function(e) {
            return "Create & Fill SSH Key"
        },
        "ssh-create-button": function(e) {
            return "Create & Fill"
        },
        "ssh-error-message": function(e) {
            return "An unexpected error occurred. Please contact support@1password.com"
        },
        "unexpected-error": function(e) {
            return "An unexpected error occurred. Please contact support@1password.com"
        },
        "login-duplicate": function(e) {
            return "Already saved"
        },
        "social-login-linked": function(e) {
            return e.item + " is linked to:"
        },
        "social-login-locked": function(e) {
            return "Press the 1Password icon in your browser's toolbar to unlock."
        },
        "social-login-no-items": function(e) {
            return "No items found to sign in with."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " was used to sign in to:"
        },
        "social-login-save-in-1password": function(e) {
            return "Save in 1Password?"
        },
        "social-login-save-item": function(e) {
            return "Save item"
        },
        "social-login-save-item-locked": function(e) {
            return "Unlock to Save"
        },
        "social-login-sign-in-with": function(e) {
            return "Sign in with\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "Sign in using " + e.title + ": " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "Sign in"
        },
        "social-login-select-provider": function(e) {
            return "select your " + e.provider + " login"
        },
        "social-login-add-existing": function(e) {
            return "Add an existing login to sign in with."
        },
        "social-login-sign-in-with-label": function(e) {
            return "sign in with"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "choose the login you signed in with"
        },
        "social-login-save-provider-only-title": function(e) {
            return "Save as generic " + e.provider + " item"
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "Only save that you used " + e.provider + " to sign in"
        },
        "shell-plugin-create-title": function(e) {
            return "Create new Shell Plugins item"
        },
        "shell-plugin-create-button": function(e) {
            return "Save item"
        },
        "autosave-title-save": function(e) {
            return "Save " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + " saved"
        },
        "autosave-title-update": function(e) {
            return "Update " + e.item
        },
        "autosave-title-updated": function(e) {
            return e.item + " updated"
        },
        "autosave-save-type-generic": function(e) {
            return "Item"
        },
        "autosave-save-type-login": function(e) {
            return "Login"
        },
        "autosave-save-type-credit-card": function(e) {
            return "Credit card"
        },
        "autosave-save-type-identity": function(e) {
            return "Identity"
        }
    },
    es: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " guardado en 1Password"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "Plugin del shell de 1Password disponible para " + e.platformName
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password ha detectado un problema."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password est\xE1 bloqueado. Int\xE9ntalo de nuevo despu\xE9s de desbloquearlo."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password ahora iniciar\xE1 sesi\xF3n autom\xE1ticamente tras autocompletar tus credenciales."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "Se requiere una duraci\xF3n de l\xEDmite de gasto"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Ha ocurrido un problema al comunicarnos con Brex.com. Int\xE9ntalo de nuevo"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "Una forma m\xE1s r\xE1pida de iniciar sesi\xF3n"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "Un fallo de seguridad en este sitio web ha puesto en riesgo tu contrase\xF1a actual."
        },
        "A-title-is-required": function(e) {
            return "Se requiere un t\xEDtulo"
        },
        "Add-account": function(e) {
            return "A\xF1adir cuenta"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "A\xF1adir cuenta a la extensi\xF3n de navegador de 1Password"
        },
        "All-vaults-are-disabled-": function(e) {
            return "Todas las b\xF3vedas est\xE1n desactivadas."
        },
        "An-error-has-occurred": function(e) {
            return "Ha ocurrido un error"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "Se ha producido un error inesperado. Ponte en contacto con support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "Asignar a una cuenta"
        },
        Back: function(e) {
            return "Atr\xE1s"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Las tarjetas Brex se almacenan y sincronizan desde Brex.com."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex cumplimentar\xE1 autom\xE1ticamente registros de transacciones en esta tarjeta."
        },
        Cancel: function(e) {
            return "Cancelar"
        },
        "Change-now": function(e) {
            return "Cambiar ahora"
        },
        "Change-this-compromised-password": function(e) {
            return "Cambiar esta contrase\xF1a comprometida"
        },
        "Choose-an-account": function(e) {
            return "Elige una cuenta"
        },
        Close: function(e) {
            return "Cerrar"
        },
        "Conceal-previous-value": function(e) {
            return "Ocultar el valor anterior"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "Con\xE9ctate a internet y vuelve a intentarlo."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Conectando con la tarjeta de Privacy\u2026"
        },
        "Contact-Support": function(e) {
            return "Contactar con el equipo de asistencia"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "Contacta con el equipo de asistencia para recibir ayuda y contarles si hay alg\xFAn problema con la cuenta predeterminada."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "Contacta con el equipo de asistencia para recibir ayuda y contarles si hay alg\xFAn problema con la b\xF3veda generada con contrase\xF1a."
        },
        "Create---Fill": function(e) {
            return "Crear y cumplimentar"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Crear tarjeta de proveedor de Brex\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "Crear correo electr\xF3nico enmascarado"
        },
        Custom: function(e) {
            return "Personalizado"
        },
        Dismiss: function(e) {
            return "Descartar"
        },
        "Don-t-ask-again": function(e) {
            return "No preguntar de nuevo"
        },
        "Download-1Password-8": function(e) {
            return "Descargar 1Password 8"
        },
        Edit: function(e) {
            return "Editar"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "Introduce la cantidad en d\xF3lares"
        },
        Error: function(e) {
            return "Error"
        },
        "Existing-items": function(e) {
            return "Elementos existentes"
        },
        "Failed-to-load-item-": function(e) {
            return "Error al cargar el elemento."
        },
        "Failed-to-save-item-": function(e) {
            return "Error al guardar el elemento."
        },
        "Fill-Email": function(e) {
            return "Cumplimentar correo electr\xF3nico"
        },
        "Funding-Source": function(e) {
            return "Fuente de financiaci\xF3n"
        },
        "Get-Help-": function(e) {
            return "Conseguir ayuda\u2026"
        },
        "Got-it": function(e) {
            return "Entendido"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "Campo de entrada para el t\xEDtulo del elemento"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "Contrase\xF1a secreta de uso \xFAnico no v\xE1lida."
        },
        "Learn-more-": function(e) {
            return "M\xE1s informaci\xF3n\u2026"
        },
        "Loading-": function(e) {
            return "Cargando\u2026"
        },
        Lock: function(e) {
            return "Bloquear"
        },
        "Lock-Card": function(e) {
            return "Bloquear tarjeta"
        },
        "Lock-card-is-required": function(e) {
            return "Se requiere bloquear la tarjeta"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "Aseg\xFArate de que las cuentas de 1Password que contienen credenciales de inicio de sesi\xF3n para este sitio est\xE1n bloqueadas."
        },
        "New-Item": function(e) {
            return "Nuevo elemento"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "Paso siguiente: configurar el agente SSH"
        },
        "No-logins-found": function(e) {
            return "No se han encontrado inicios de sesi\xF3n"
        },
        "No-passkeys-found": function(e) {
            return "No se han encontrado claves"
        },
        None: function(e) {
            return "Ninguno"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "Una vez guardado, lo recordaremos por ti."
        },
        Overwrite: function(e) {
            return "Sobrescribir"
        },
        "Overwrite-one-time-password-": function(e) {
            return "\xBFSobrescribir contrase\xF1a de un solo uso?"
        },
        "Passkey-saved": function(e) {
            return "Clave guardada"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "Inicia sesi\xF3n en 1Password para navegar de forma segura y para que te resulte m\xE1s f\xE1cil guardar y recordar tus contrase\xF1as."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Pulsa el icono de 1Password en la barra de herramientas de tu navegador para desbloquear."
        },
        Previous: function(e) {
            return "Anterior"
        },
        "Privacy-Card": function(e) {
            return "Tarjeta de Privacy"
        },
        "Reason-for-card": function(e) {
            return "Motivo de la tarjeta"
        },
        Regenerate: function(e) {
            return "Generar de nuevo"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "Generar de nuevo en " + e.secondsLeft + " s"
        },
        "Reveal-previous-value": function(e) {
            return "Mostrar el valor anterior"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "Mostrar para ver el valor anterior"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "Clave SSH creada. Para usar esta clave de forma local, configura el agente SSH de 1Password, disponible en 1Password 8."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "Clave SSH creada. Para usar esta clave de forma local, configurar el agente SSH de 1Password."
        },
        Save: function(e) {
            return "Guardar"
        },
        "Save-Item": function(e) {
            return "Guardar elemento"
        },
        "Save-in-1Password-": function(e) {
            return "\xBFGuardar en 1Password?"
        },
        "Save-item": function(e) {
            return "Guardar elemento"
        },
        "Save-one-time-password": function(e) {
            return "Guardar la contrase\xF1a de un solo uso"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "Guardar la contrase\xF1a de un solo uso que se cumplimentar\xE1 autom\xE1ticamente durante el inicio de sesi\xF3n."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "Guardar o actualizar el di\xE1logo de informaci\xF3n en 1Password"
        },
        "Save-passkey": function(e) {
            return "Guardar clave"
        },
        "Saved-one-time-password": function(e) {
            return "Contrase\xF1a de un solo uso guardada"
        },
        "Select-account": function(e) {
            return "Seleccionar cuenta"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Selecciona el icono de 1Password en la barra de herramientas de tu navegador para desbloquear."
        },
        "Session-expired-for-tab-": function(e) {
            return "Sesi\xF3n caducada para la pesta\xF1a."
        },
        "Set-Spending-Limit": function(e) {
            return "Configurar l\xEDmite de gasto"
        },
        "Set-up-SSH-Agent": function(e) {
            return "Configurar el agente SSH"
        },
        "Sign-in": function(e) {
            return "Iniciar sesi\xF3n"
        },
        "Sign-in-to-1Password": function(e) {
            return "Iniciar sesi\xF3n en 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "Inicia sesi\xF3n en sitios web con tan solo un clic, guarda tu informaci\xF3n f\xE1cilmente y genera nuevas contrase\xF1as con la extensi\xF3n de navegador."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "Iniciar sesi\xF3n con una clave"
        },
        "Something-went-wrong": function(e) {
            return "Algo ha salido mal"
        },
        "Spending-Limit": function(e) {
            return "L\xEDmite de gastos"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "Paso 3: revisa o edita el nuevo elemento de inicio de sesi\xF3n y gu\xE1rdalo."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Guarda tu " + e.credentialName + " en 1Password y autentica el CLI de " + e.platformName + " con " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "La integraci\xF3n con Brex se ha desactivado, vuelve a conectarlo en 1Password.com"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "La contrase\xF1a de un solo uso en este elemento se sustituir\xE1."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "Se requiere el motivo de la tarjeta"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "Se ha agotado el tiempo de espera de la solicitud para crear una clave."
        },
        "The-spending-limit-is-required": function(e) {
            return "Se requiere el l\xEDmite de gasto"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "Despu\xE9s, pulsa el indicador de fuera de l\xEDnea ( <offlineIndicator /> ) y termina de iniciar sesi\xF3n para guardar tus cambios."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "Para guardar " + e.item + ", desbloquea primero 1Password."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "Para guardar la clave, desbloquea primero 1Password."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "Para usar la clave, desbloquea primero 1Password."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID y Apple Watch"
        },
        "Try-Again": function(e) {
            return "Int\xE9ntalo de nuevo"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "Intenta bloquear y desbloquear 1Password para volver a cumplimentar."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "No se ha podido crear la tarjeta, int\xE9ntalo de nuevo."
        },
        "Unable-to-fill-password": function(e) {
            return "No se ha podido cumplimentar la contrase\xF1a"
        },
        "Unlock-1Password": function(e) {
            return "Desbloquear 1Password"
        },
        "Unlock-to-save": function(e) {
            return "Desbloquear para guardar"
        },
        "Unlocking-1Password-": function(e) {
            return "Desbloquear 1Password\u2026"
        },
        Update: function(e) {
            return "Actualizar"
        },
        "Update-Existing": function(e) {
            return "Actualizar existente"
        },
        "Update-Item": function(e) {
            return "Actualizar elemento"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "Utiliza 1Password para la autenticaci\xF3n de dos factores"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Use 1Password para autenticar el CLI de " + e.platformName + " con " + e.authType + "."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "Utilizar una clave de seguridad u otra clave"
        },
        "View-settings": function(e) {
            return "Ver ajustes"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "No podemos usar la contrase\xF1a sugerida porque se ha producido un error inesperado."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "Puedes cambiar esto en cualquier momento desde ajustes."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "Puedes gestionar tus cuentas desde Ajustes."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "Tu cuenta " + e.accountName + " se tiene que desbloquear para cumplimentar esta contrase\xF1a. Desbloqu\xE9ala y vuelve a intentarlo de nuevo."
        },
        "a--item-": function(e) {
            return "un/a " + e.item
        },
        "an--item-": function(e) {
            return "un/a " + e.item
        },
        email: function(e) {
            return "correo electr\xF3nico"
        },
        "every-month": function(e) {
            return "cada mes"
        },
        "every-quarter": function(e) {
            return "cada trimestre"
        },
        "every-transaction": function(e) {
            return "cada transacci\xF3n"
        },
        "every-year": function(e) {
            return "cada a\xF1o"
        },
        forever: function(e) {
            return "para siempre"
        },
        "in-1-Month": function(e) {
            return "en 1 mes"
        },
        "in-1-Year": function(e) {
            return "en 1 a\xF1o"
        },
        "in-7-Days": function(e) {
            return "en 7 d\xEDas"
        },
        "loading---": function(e) {
            return "cargando..."
        },
        "one-time": function(e) {
            return "una vez"
        },
        "one-time-password": function(e) {
            return "contrase\xF1a de un solo uso"
        },
        "system-authentication": function(e) {
            return "autenticaci\xF3n del sistema"
        },
        "auth-unfamiliar-website": function(e) {
            return "P\xE1gina web no familiar"
        },
        "auth-type-code-to-fill": function(e) {
            return "Escribe " + e.code + " para autorizar que " + e.type + " complete" + e.website + "."
        },
        "auth-filling-on-website": function(e) {
            return " en " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "C\xF3digo incorrecto introducido"
        },
        "auth-why-is-this-needed": function(e) {
            return "\xBFPor qu\xE9 es esto necesario?"
        },
        "item-use-suggested-password": function(e) {
            return "Usar contrase\xF1a sugerida"
        },
        "item-create-privacy-card": function(e) {
            return "Nueva tarjeta de Privacy"
        },
        "item-create-email-alias": function(e) {
            return "Crear correo electr\xF3nico enmascarado"
        },
        "item-type-credit-card": function(e) {
            return "tarjeta de cr\xE9dito"
        },
        "item-type-identity": function(e) {
            return "identidad"
        },
        "item-type-unspecified": function(e) {
            return "elemento"
        },
        categories: function(e) {
            return "Categor\xEDas"
        },
        "category-suggestions": function(e) {
            return "Sugerencias"
        },
        "category-logins": function(e) {
            return "Inicios de sesi\xF3n"
        },
        "category-identities": function(e) {
            return "Identidades"
        },
        "category-credit-cards": function(e) {
            return "Tarjetas de cr\xE9dito"
        },
        "category-generated-password": function(e) {
            return "Contrase\xF1a generada"
        },
        "category-hide-on-this-page": function(e) {
            return "Ocultar en esta p\xE1gina"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "Por favor, desbloquea 1Password desde el icono en la barra de herramientas."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "Pulsa " + e.shortcut + " para desbloquear 1Password"
        },
        "locked-request-unlock": function(e) {
            return "Abrir 1Password"
        },
        "notification-add-account": function(e) {
            return "A\xF1adir cuenta a"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "Puedes a\xF1adir y quitar cuentas m\xE1s tarde desde 1Password"
        },
        "notification-settings": function(e) {
            return "Ajustes"
        },
        "notification-add-account-never": function(e) {
            return "Nunca"
        },
        "notification-add-account-confirm": function(e) {
            return "A\xF1adir"
        },
        "authorize-fill": function(e) {
            return "Haz clic en OK para completar tu elemento de 1Password en " + e.host
        },
        "authorize-fill-brex": function(e) {
            return "Haz clic en OK para crear y cumplimentar una tarjeta de Brex usando 1Password en " + e.host
        },
        "authorize-fill-privacy": function(e) {
            return "Haz clic en OK para crear y cumplimentar una tarjeta de Privacy usando 1Password en " + e.host
        },
        "authorize-fill-protocol": function(e) {
            return `Advertencia de 1Password: Esta es una p\xE1gina no asegurada (HTTP), y cualquier informaci\xF3n que env\xEDes es posible que se pueda ver y modificar por terceros. 

\xBFSigue queriendo cumplimentar este elemento?`
        },
        "tooltip-close-1password": function(e) {
            return "Cerrar"
        },
        "tooltip-open-1password": function(e) {
            return "Abrir"
        },
        "tooltip-no-items": function(e) {
            return "No hay elementos que mostrar"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `Pulsa el icono de 1Password en
la barra de herramientas de tu navegador para desbloquear`
        },
        "tooltip-unlock-1password": function(e) {
            return "Desbloquear 1Password"
        },
        Title: function(e) {
            return "T\xEDtulo"
        },
        "save-in-header": function(e) {
            return "Guardar en"
        },
        "save-item": function(e) {
            return "Guardar elemento"
        },
        "update-item": function(e) {
            return "Actualizar elemento"
        },
        "select-item": function(e) {
            return "Elegir elemento"
        },
        "Save-new-Login": function(e) {
            return "Guardar nuevo inicio de sesi\xF3n"
        },
        cancel: function(e) {
            return "Cancelar"
        },
        close: function(e) {
            return "Cerrar"
        },
        confirm: function(e) {
            return "Confirmar"
        },
        "unknown-item": function(e) {
            return "elemento desconocido"
        },
        "save-in": function(e) {
            return "guardar en"
        },
        "select-a-vault": function(e) {
            return "Selecciona una b\xF3veda"
        },
        "locked-title": function(e) {
            return "1Password est\xE1 bloqueado"
        },
        "locked-message": function(e) {
            return "Para continuar guardando con 1Password, desbloquea una cuenta."
        },
        "offline-title": function(e) {
            return "Tu cuenta est\xE1 fuera de l\xEDnea."
        },
        "offline-message": function(e) {
            return "No podr\xE1s guardar este elemento hasta que inicies sesi\xF3n y est\xE9s en l\xEDnea."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "Pulsa el icono de 1Password en la barra de herramientas de tu navegador para abrir 1Password."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "Pulsa " + e.shortcut + " para abrir 1Password."
        },
        "current-item": function(e) {
            return "Elemento actual"
        },
        "updated-item": function(e) {
            return "Elemento actualizado"
        },
        "add-tag": function(e) {
            return "A\xF1adir etiqueta"
        },
        "remove-tag": function(e) {
            return "Eliminar etiqueta"
        },
        "sso-info-banner": function(e) {
            return "Los elementos nuevos con inicios de sesi\xF3n vinculados se deber\xEDan guardar en la misma b\xF3veda y deber\xE1n estar en la misma cuenta."
        },
        "new-item": function(e) {
            return "Nuevo elemento"
        },
        "update-existing": function(e) {
            return "Actualizar existente"
        },
        "enable-privacy-header": function(e) {
            return "A\xF1adir a 1Password"
        },
        "enable-privacy-description": function(e) {
            return "Usa 1Password para crear y cumplimentar tarjetas de Privacy siempre que pagues en l\xEDnea, y guarda tarjetas comerciales para usarlas en el futuro."
        },
        "enable-privacy-choose-account": function(e) {
            return "Elegir una cuenta"
        },
        "enable-privacy-add-button": function(e) {
            return "A\xF1adir a 1Password"
        },
        "enable-privacy-error": function(e) {
            return "No se ha podido habilitar la integraci\xF3n de Privacy. Int\xE9ntalo de nuevo m\xE1s tarde."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "Desbloquea la cuenta seleccionada para habilitar la integraci\xF3n."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "Desbloquea 1Password para habilitar la integraci\xF3n."
        },
        "privacy-error-enable-header": function(e) {
            return "No se puede habilitar la integraci\xF3n"
        },
        "privacy-error-header": function(e) {
            return "Ha ocurrido un error"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "Se requiere una suscripci\xF3n de 1Password para integrarlo con Privacy."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Aseg\xFArate de que hay al menos una fuente de financiaci\xF3n vinculada a tu cuenta de Privacy.com e int\xE9ntalo de nuevo."
        },
        "privacy-error-unexpected-error": function(e) {
            return "Se ha producido un error inesperado. Ponte en contacto con support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "cada mes"
        },
        "privacy-monthly": function(e) {
            return "Mensual"
        },
        "privacy-annually": function(e) {
            return "cada a\xF1o"
        },
        "privacy-transaction": function(e) {
            return "cada transacci\xF3n"
        },
        "privacy-forever": function(e) {
            return "para siempre"
        },
        "privacy-single-use": function(e) {
            return "Uso \xFAnico"
        },
        "privacy-header": function(e) {
            return "Crear tarjeta de Privacy"
        },
        "privacy-card-name-label": function(e) {
            return "Nombre de la tarjeta"
        },
        "privacy-spend-limit-label": function(e) {
            return "Configurar l\xEDmite de gastos"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "Frecuencia"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "L\xEDmite de gastos"
        },
        "privacy-funding-account-label": function(e) {
            return "Fuente de financiaci\xF3n"
        },
        "privacy-save-label": function(e) {
            return "Guardar en 1Password"
        },
        "privacy-create-button": function(e) {
            return "Crear y completar"
        },
        "privacy-error-integration-disabled": function(e) {
            return "Habilita la integraci\xF3n de Privacy desde el men\xFA contextual de las herramientas del desarrollador."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password est\xE1 bloqueado. Por favor int\xE9ntalo de nuevo despu\xE9s de desbloquearlo."
        },
        "privacy-error-vault-locked": function(e) {
            return "Esta b\xF3veda est\xE1 bloqueada. Int\xE9ntalo de nuevo despu\xE9s de desbloquearla."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "Selecciona una b\xF3veda."
        },
        "privacy-error-save-failed": function(e) {
            return "No se ha podido guardar el elemento. Comprueba que la b\xF3veda est\xE1 desbloqueada y vuelve a intentarlo."
        },
        "privacy-error-empty-card-name": function(e) {
            return "Introduce un nombre para la tarjeta."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "Introduce un nombre m\xE1s corto para la tarjeta."
        },
        "privacy-error-empty-limit": function(e) {
            return "Debes facilitar un l\xEDmite de gastos para la tarjeta."
        },
        "privacy-error-limit-too-large": function(e) {
            return "Introduce un l\xEDmite de gastos menor para la tarjeta."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "No se ha podido analizar la URL"
        },
        "privacy-error-http-error": function(e) {
            return "No nos hemos podido conectar con Privacy. Revisa tu conexi\xF3n a internet e int\xE9ntalo de nuevo."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "No se ha podido autenticar con Privacy. Comprueba tu clave API y vuelve a intentarlo."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "Error al crear la tarjeta: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "Error al crear la tarjeta."
        },
        "privacy-error-brain-error": function(e) {
            return "No se ha podido crear el elemento de la tarjeta de cr\xE9dito desde la tarjeta de Privacy."
        },
        "privacy-error-default": function(e) {
            return "Se ha producido un error inesperado."
        },
        "notification-save-in": function(e) {
            return "Guardar en"
        },
        "notification-save-secondary": function(e) {
            return "\xBFGuardar el inicio de sesi\xF3n de " + e.host + " en 1Password?"
        },
        "notification-save-save": function(e) {
            return "Guardar"
        },
        "ssh-title": function(e) {
            return "Crear y completar clave SSH"
        },
        "ssh-create-button": function(e) {
            return "Crear y completar"
        },
        "ssh-error-message": function(e) {
            return "Se ha producido un error inesperado. Ponte en contacto con support@1password.com"
        },
        "unexpected-error": function(e) {
            return "Se ha producido un error inesperado. Ponte en contacto con support@1password.com"
        },
        "login-duplicate": function(e) {
            return "Ya se ha guardado"
        },
        "social-login-linked": function(e) {
            return e.item + " se ha vinculado a:"
        },
        "social-login-locked": function(e) {
            return "Pulsa el icono de 1Password en la barra de herramientas de tu navegador para desbloquear."
        },
        "social-login-no-items": function(e) {
            return "No encontrados elementos con los que iniciar sesi\xF3n."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " se ha utilizado para iniciar sesi\xF3n en:"
        },
        "social-login-save-in-1password": function(e) {
            return "\xBFGuardar en 1Password?"
        },
        "social-login-save-item": function(e) {
            return "Guardar elemento"
        },
        "social-login-save-item-locked": function(e) {
            return "Desbloquear para guardar"
        },
        "social-login-sign-in-with": function(e) {
            return "Iniciar sesi\xF3n con\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "Iniciar sesi\xF3n usando " + e.title + ": " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "Iniciar sesi\xF3n"
        },
        "social-login-select-provider": function(e) {
            return "selecciona tu inicio de sesi\xF3n de " + e.provider
        },
        "social-login-add-existing": function(e) {
            return "A\xF1adir credenciales existentes con las que iniciar sesi\xF3n."
        },
        "social-login-sign-in-with-label": function(e) {
            return "iniciar sesi\xF3n con"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "elige las credenciales con las que iniciaste sesi\xF3n"
        },
        "social-login-save-provider-only-title": function(e) {
            return "Guardar como elemento gen\xE9rico de " + e.provider
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "Solo guardar que utilizaste " + e.provider + " para iniciar sesi\xF3n"
        },
        "shell-plugin-create-title": function(e) {
            return "Crear nuevo elemento de plugin de shell"
        },
        "shell-plugin-create-button": function(e) {
            return "Guardar elemento"
        },
        "autosave-title-save": function(e) {
            return "Guardar " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + " guardado"
        },
        "autosave-title-update": function(e) {
            return "Actualizar " + e.item
        },
        "autosave-title-updated": function(e) {
            return e.item + " actualizado"
        },
        "autosave-save-type-generic": function(e) {
            return "Elemento"
        },
        "autosave-save-type-login": function(e) {
            return "Inicio de sesi\xF3n"
        },
        "autosave-save-type-credit-card": function(e) {
            return "Tarjeta de cr\xE9dito"
        },
        "autosave-save-type-identity": function(e) {
            return "Identidad"
        }
    },
    fr: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " enregistr\xE9 dans 1Password"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "Plug-in du shell 1Password disponible pour " + e.platformName
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password a rencontr\xE9 un probl\xE8me."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password est verrouill\xE9. Veuillez r\xE9essayer apr\xE8s l'avoir d\xE9bloqu\xE9."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password se connectera d\xE9sormais automatiquement apr\xE8s avoir rempli vos informations d'identification."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "Une dur\xE9e pour la limitation de d\xE9ponse est n\xE9cessaire"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Un probl\xE8me est survenur lors des communications avec Bex.com. Veuillez r\xE9essayer"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "Une m\xE9thode de connexion plus rapide"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "Une faille de s\xE9curit\xE9 sur ce site web a compromis votre mot de passe actuel."
        },
        "A-title-is-required": function(e) {
            return "Un titre est n\xE9cessaire"
        },
        "Add-account": function(e) {
            return "Ajouter un compte"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "Ajouter un compte \xE0 l'extension de navigateur 1Password"
        },
        "All-vaults-are-disabled-": function(e) {
            return "Tous les coffres sont d\xE9sactiv\xE9s."
        },
        "An-error-has-occurred": function(e) {
            return "Une erreur s'est produite"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "Une erreur inattendue s'est produite. Veuillez contacter support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "Assigner \xE0 un compte"
        },
        Back: function(e) {
            return "Retour"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Les cartes Brex sont enregistr\xE9e et synchronis\xE9e sur Brex.com."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex va remplir automatiquement les m\xE9mos de transaction de cette carte."
        },
        Cancel: function(e) {
            return "Annuler"
        },
        "Change-now": function(e) {
            return "Le modifier maintenant"
        },
        "Change-this-compromised-password": function(e) {
            return "Modifier le mot de passe compromis"
        },
        "Choose-an-account": function(e) {
            return "Choisir un compte"
        },
        Close: function(e) {
            return "Fermer"
        },
        "Conceal-previous-value": function(e) {
            return "Cacher la valeur pr\xE9c\xE9dente"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "Connectez-vous \xE0 internet et r\xE9essayez."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Connexion \xE0 la carte Privacy\u2026"
        },
        "Contact-Support": function(e) {
            return "Contacter l'assistance"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "Contactez le service d'assistance pour obtenir de l'aide, et pr\xE9cisez qu'il s'agit d'un probl\xE8me avec le compte par d\xE9faut."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "Contactez le service d'assistance pour obtenir de l'aide, et pr\xE9cisez qu'il s'agit d'un probl\xE8me avec le coffre du mot de passe g\xE9n\xE9r\xE9."
        },
        "Create---Fill": function(e) {
            return "Cr\xE9er et remplir"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Cr\xE9er une carte de vendeur Brex\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "Cr\xE9er un e-mail masqu\xE9"
        },
        Custom: function(e) {
            return "Personnalis\xE9"
        },
        Dismiss: function(e) {
            return "Ignorer"
        },
        "Don-t-ask-again": function(e) {
            return "Ne pas demander \xE0 nouveau"
        },
        "Download-1Password-8": function(e) {
            return "T\xE9l\xE9charger 1Password 8"
        },
        Edit: function(e) {
            return "Modifier"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "Saisissez le montant en dollars"
        },
        Error: function(e) {
            return "Erreur"
        },
        "Existing-items": function(e) {
            return "\xC9l\xE9ments existants"
        },
        "Failed-to-load-item-": function(e) {
            return "Impossible de charger l'\xE9l\xE9ment."
        },
        "Failed-to-save-item-": function(e) {
            return "Impossible d\u2019enregistrer l\u2019\xE9l\xE9ment."
        },
        "Fill-Email": function(e) {
            return "Remplir l'e-mail"
        },
        "Funding-Source": function(e) {
            return "Source de financement"
        },
        "Get-Help-": function(e) {
            return "Obtenir de l'aide\u2026"
        },
        "Got-it": function(e) {
            return "J'ai compris"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "Champ de saisie pour le titre de l'\xE9l\xE9ment"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "Secret du mot de passe \xE0 usage unique non valide."
        },
        "Learn-more-": function(e) {
            return "En savoir plus\u2026"
        },
        "Loading-": function(e) {
            return "Chargement\u2026"
        },
        Lock: function(e) {
            return "Verrouiller"
        },
        "Lock-Card": function(e) {
            return "Verrouiller la carte"
        },
        "Lock-card-is-required": function(e) {
            return "Il est n\xE9cessaire de verrouiller la carte"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "Assurez-vous que les comptes 1Password contenant des identifiants pour ce site sont d\xE9verrouill\xE9s."
        },
        "New-Item": function(e) {
            return "Nouvel \xE9l\xE9ment"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "\xC9tape suivante\xA0: Configurer l'agent SSH"
        },
        "No-logins-found": function(e) {
            return "Aucun identifiant trouv\xE9"
        },
        "No-passkeys-found": function(e) {
            return "Aucune cl\xE9 d'acc\xE8s trouv\xE9e"
        },
        None: function(e) {
            return "Aucun"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "Une fois enregistr\xE9, nous le garderons en m\xE9moire pour vous."
        },
        Overwrite: function(e) {
            return "Remplacer"
        },
        "Overwrite-one-time-password-": function(e) {
            return "Remplacer le mot de passe \xE0 usage unique\xA0?"
        },
        "Passkey-saved": function(e) {
            return "Cl\xE9 d'acc\xE8s enregistr\xE9e"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "Connectez-vous \xE0 1Password pour assurer votre s\xE9curit\xE9 en ligne et vous permettre d'enregistrer et de remplir vos mots de passe en toute simplicit\xE9."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Appuyez sur l'ic\xF4ne 1Password dans la barre d'outils de votre navigateur pour d\xE9verrouiller."
        },
        Previous: function(e) {
            return "Pr\xE9c\xE9dent"
        },
        "Privacy-Card": function(e) {
            return "Carte Privacy"
        },
        "Reason-for-card": function(e) {
            return "Motif pour la carte"
        },
        Regenerate: function(e) {
            return "G\xE9n\xE9rer \xE0 nouveau"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "G\xE9n\xE9rer \xE0 nouveau dans " + e.secondsLeft + "s"
        },
        "Reveal-previous-value": function(e) {
            return "R\xE9v\xE9ler la valeur pr\xE9c\xE9dente"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "R\xE9v\xE9ler pour afficher la valeur pr\xE9c\xE9dente"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "Cl\xE9 SSH cr\xE9\xE9e. Pour utiliser cette cl\xE9 localement, configurez l'agent SSH 1Password, disponible sur 1Password 8."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "Cl\xE9 SSH cr\xE9\xE9e. Pour utiliser cette cl\xE9 localement, configurez l'agent SSH 1Password."
        },
        Save: function(e) {
            return "Enregistrer"
        },
        "Save-Item": function(e) {
            return "Enregistrer l'\xE9l\xE9ment"
        },
        "Save-in-1Password-": function(e) {
            return "Enregistrer dans 1Password\xA0?"
        },
        "Save-item": function(e) {
            return "Enregistrer l'\xE9l\xE9ment"
        },
        "Save-one-time-password": function(e) {
            return "Enregistrer le mot de passe \xE0 usage unique"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "Enregistrez les mots de passe \xE0 usage unique qui seront automatiquement remplis lors de la connexion."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "Enregistrez ou mettez \xE0 jour les informations dans la bo\xEEte de dialogue de 1Password"
        },
        "Save-passkey": function(e) {
            return "Enregistrer la cl\xE9 d'acc\xE8s"
        },
        "Saved-one-time-password": function(e) {
            return "Mot de passe \xE0 usage unique enregistr\xE9"
        },
        "Select-account": function(e) {
            return "S\xE9lectionnez le compte"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "S\xE9lectionnez l'ic\xF4ne 1Password dans la barre d'outils de votre navigateur pour d\xE9verrouiller."
        },
        "Session-expired-for-tab-": function(e) {
            return "Session expir\xE9e pour l'onglet."
        },
        "Set-Spending-Limit": function(e) {
            return "D\xE9finir un plafond de d\xE9penses"
        },
        "Set-up-SSH-Agent": function(e) {
            return "Configurer l'agent SSH"
        },
        "Sign-in": function(e) {
            return "Connexion"
        },
        "Sign-in-to-1Password": function(e) {
            return "Connexion \xE0 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "Connectez-vous \xE0 des sites web en un clic, enregistrez facilement vos informations et g\xE9n\xE9rez de nouveaux mots de passe gr\xE2ce \xE0 l'extension de navigateur."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "Se connecter avec une cl\xE9 d'acc\xE8s"
        },
        "Something-went-wrong": function(e) {
            return "Un probl\xE8me est survenu"
        },
        "Spending-Limit": function(e) {
            return "Plafond de d\xE9penses"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "\xC9tape 3\xA0: Consultez ou modifiez votre nouvel identifiant de connexion, puis enregistrez-le."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Stockez votre " + e.credentialName + " dans 1Password et authentifiez l'interface CLI de " + e.platformName + " avec " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "L'int\xE9gration das Brex a \xE9t\xE9 d\xE9sactiv\xE9e, veuillez la reconnecter depuis 1Password.com"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "Le mot de passe \xE0 usage unique de cet \xE9l\xE9ment sera remplac\xE9."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "Le motif pour cette carte est n\xE9cessaire"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "La demande de cr\xE9ation d'un mot de passe a d\xE9pass\xE9 le temps imparti."
        },
        "The-spending-limit-is-required": function(e) {
            return "La limite de d\xE9pense est n\xE9cessaire"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "Appuyez ensuite sur l'indicateur hors ligne ( <offlineIndicator /> ) et finissez de vous connecter pour enregistrer vos modifications."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "Pour enregistrer " + e.item + ", commencez par d\xE9verrouiller 1Password."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "Pour enregistrer une cl\xE9 d'acc\xE8s, d\xE9verrouillez d'abord 1Password."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "Pour utiliser votre cl\xE9 d'acc\xE8s, d\xE9verrouillez d'abord 1Password."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch\xA0ID ou Apple\xA0Watch"
        },
        "Try-Again": function(e) {
            return "R\xE9essayer"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "Essayez de verrouiller puis de d\xE9verrouiller 1Password pour le remplir \xE0 nouveau."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "Impossible de cr\xE9er la carte, veuillez r\xE9essayer."
        },
        "Unable-to-fill-password": function(e) {
            return "Impossible de remplir le mot de passe"
        },
        "Unlock-1Password": function(e) {
            return "D\xE9verrouiller 1Password"
        },
        "Unlock-to-save": function(e) {
            return "D\xE9verrouiller pour enregistrer"
        },
        "Unlocking-1Password-": function(e) {
            return "D\xE9verrouillage de 1Password\u2026"
        },
        Update: function(e) {
            return "Mise \xE0 jour"
        },
        "Update-Existing": function(e) {
            return "Mettre \xE0 jour existant"
        },
        "Update-Item": function(e) {
            return "Mettre \xE0 jour l'\xE9l\xE9ment"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "Utiliser 1Password pour l'authentification \xE0 deux facteurs"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Utilisez 1Password pour authentifier l'interface CLI de " + e.platformName + " avec " + e.authType + "."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "Utiliser une cl\xE9 de s\xE9curit\xE9 ou une autre cl\xE9 d'acc\xE8s"
        },
        "View-settings": function(e) {
            return "Afficher les param\xE8tres"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "Nous ne pouvons pas utiliser le mot de passe sugg\xE9r\xE9 car une erreur inattendue s'est produite."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "Vous pouvez modifier cela \xE0 tout moment dans les param\xE8tres."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "Vous pouvez g\xE9rer vos comptes dans les Param\xE8tres."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "Votre compte " + e.accountName + " doit \xEAtre d\xE9verrouill\xE9 pour remplir ce mot de passe. D\xE9verrouillez-le et r\xE9essayez."
        },
        "a--item-": function(e) {
            return "un " + e.item
        },
        "an--item-": function(e) {
            return "un " + e.item
        },
        email: function(e) {
            return "e-mail"
        },
        "every-month": function(e) {
            return "tous les mois"
        },
        "every-quarter": function(e) {
            return "tous les trimestres"
        },
        "every-transaction": function(e) {
            return "toutes les transactions"
        },
        "every-year": function(e) {
            return "tous les ans"
        },
        forever: function(e) {
            return "pour toujours"
        },
        "in-1-Month": function(e) {
            return "dans 1 mois"
        },
        "in-1-Year": function(e) {
            return "dans 1 an"
        },
        "in-7-Days": function(e) {
            return "dans 7 jours"
        },
        "loading---": function(e) {
            return "chargement..."
        },
        "one-time": function(e) {
            return "une fois"
        },
        "one-time-password": function(e) {
            return "mot de passe \xE0 usage unique"
        },
        "system-authentication": function(e) {
            return "authentification syst\xE8me"
        },
        "auth-unfamiliar-website": function(e) {
            return "Site web non familier"
        },
        "auth-type-code-to-fill": function(e) {
            return "Tapez " + e.code + " pour autoriser " + e.type + " \xE0 renseigner " + e.website + "."
        },
        "auth-filling-on-website": function(e) {
            return " sur " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "Code entr\xE9 incorrect"
        },
        "auth-why-is-this-needed": function(e) {
            return "Pourquoi est-ce n\xE9cessaire ?"
        },
        "item-use-suggested-password": function(e) {
            return "Utiliser le mot de passe sugg\xE9r\xE9"
        },
        "item-create-privacy-card": function(e) {
            return "Cr\xE9er une carte Privacy"
        },
        "item-create-email-alias": function(e) {
            return "Cr\xE9er un e-mail masqu\xE9"
        },
        "item-type-credit-card": function(e) {
            return "carte de cr\xE9dit"
        },
        "item-type-identity": function(e) {
            return "identit\xE9"
        },
        "item-type-unspecified": function(e) {
            return "\xE9l\xE9ment"
        },
        categories: function(e) {
            return "Cat\xE9gories"
        },
        "category-suggestions": function(e) {
            return "Suggestions"
        },
        "category-logins": function(e) {
            return "Identifiants"
        },
        "category-identities": function(e) {
            return "Identit\xE9s"
        },
        "category-credit-cards": function(e) {
            return "Cartes de cr\xE9dit"
        },
        "category-generated-password": function(e) {
            return "Mot de passe g\xE9n\xE9r\xE9"
        },
        "category-hide-on-this-page": function(e) {
            return "Masquer sur cette page"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "Veuillez d\xE9verrouiller 1Password depuis l'ic\xF4ne dans la barre d'outils."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "Appuyez sur " + e.shortcut + " pour d\xE9verrouiller 1Password"
        },
        "locked-request-unlock": function(e) {
            return "Ouvrir 1Password"
        },
        "notification-add-account": function(e) {
            return "Ajouter le compte \xE0"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "Vous pouvez ajouter et supprimer des comptes plus tard depuis 1Password"
        },
        "notification-settings": function(e) {
            return "Param\xE8tres"
        },
        "notification-add-account-never": function(e) {
            return "Jamais"
        },
        "notification-add-account-confirm": function(e) {
            return "Ajouter"
        },
        "authorize-fill": function(e) {
            return "Cliquez sur OK pour remplir votre \xE9l\xE9ment 1Password sur " + e.host
        },
        "authorize-fill-brex": function(e) {
            return "Cliquez sur OK pour cr\xE9er et remplir une carte Brex en utilisant 1Password sur " + e.host
        },
        "authorize-fill-privacy": function(e) {
            return "Cliquez sur OK pour cr\xE9er et remplir une carte Privacy en utilisant 1Password sur " + e.host
        },
        "authorize-fill-protocol": function(e) {
            return `Avertissement de 1Password\xA0: Il s'agit d'une page non s\xE9curis\xE9e (HTTP), et toute information que vous soumettez peut potentiellement \xEAtre vue et modifi\xE9e par d'autres personnes. 

Souhaitez-vous toujours remplir cet \xE9l\xE9ment\xA0?`
        },
        "tooltip-close-1password": function(e) {
            return "Fermer"
        },
        "tooltip-open-1password": function(e) {
            return "Ouvrir"
        },
        "tooltip-no-items": function(e) {
            return "Aucun \xE9l\xE9ment \xE0 afficher"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return "Appuyez sur l'ic\xF4ne 1Password dans la barre d'outils de votre navigateur pour d\xE9verrouiller"
        },
        "tooltip-unlock-1password": function(e) {
            return "D\xE9verrouiller 1Password"
        },
        Title: function(e) {
            return "Titre"
        },
        "save-in-header": function(e) {
            return "Enregistrer dans"
        },
        "save-item": function(e) {
            return "Enregistrer l'\xE9l\xE9ment"
        },
        "update-item": function(e) {
            return "Mettre \xE0 jour l'\xE9l\xE9ment"
        },
        "select-item": function(e) {
            return "Choisir l'\xE9l\xE9ment"
        },
        "Save-new-Login": function(e) {
            return "Enregistrer un nouvel Identifiant"
        },
        cancel: function(e) {
            return "Annuler"
        },
        close: function(e) {
            return "Fermer"
        },
        confirm: function(e) {
            return "Confirmer"
        },
        "unknown-item": function(e) {
            return "\xE9l\xE9ment inconnu"
        },
        "save-in": function(e) {
            return "enregistrer dans"
        },
        "select-a-vault": function(e) {
            return "S\xE9lectionnez une coffre"
        },
        "locked-title": function(e) {
            return "1Password est verrouill\xE9"
        },
        "locked-message": function(e) {
            return "Pour continuer \xE0 \xE9conomiser avec 1Password, d\xE9verrouillez un compte."
        },
        "offline-title": function(e) {
            return "Votre compte est hors ligne."
        },
        "offline-message": function(e) {
            return "Vous ne pourrez pas enregistrer cet \xE9l\xE9ment tant que vous ne serez pas connect\xE9 et en ligne."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "Appuyez sur l'ic\xF4ne 1Password dans la barre d'outils de votre navigateur pour ouvrir 1Password."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "Appuyez sur " + e.shortcut + " pour ouvrir 1Password."
        },
        "current-item": function(e) {
            return "\xC9l\xE9ment actuel"
        },
        "updated-item": function(e) {
            return "\xC9l\xE9ment mis \xE0 jour"
        },
        "add-tag": function(e) {
            return "Ajouter un tag"
        },
        "remove-tag": function(e) {
            return "Supprimer le tag"
        },
        "sso-info-banner": function(e) {
            return "Les nouveaux \xE9l\xE9ments avec des identifiants li\xE9s doivent \xEAtre enregistr\xE9s dans le m\xEAme coffre et \xEAtre dans le m\xEAme compte."
        },
        "new-item": function(e) {
            return "Nouvel \xE9l\xE9ment"
        },
        "update-existing": function(e) {
            return "Mettre \xE0 jour existant"
        },
        "enable-privacy-header": function(e) {
            return "Ajouter \xE0 1Password"
        },
        "enable-privacy-description": function(e) {
            return "Utilisez 1Password pour cr\xE9er et remplir des cartes Privacy partout o\xF9 vous payez en ligne, et enregistrez les cartes des commer\xE7ants pour une utilisation ult\xE9rieure."
        },
        "enable-privacy-choose-account": function(e) {
            return "Choisir un compte"
        },
        "enable-privacy-add-button": function(e) {
            return "Ajouter \xE0 1Password"
        },
        "enable-privacy-error": function(e) {
            return "Impossible d'activer l'int\xE9gration Privacy. Veuillez r\xE9essayer plus tard."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "Veuillez d\xE9verrouiller le compte s\xE9lectionn\xE9 pour activer l'int\xE9gration."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "Veuillez d\xE9verrouiller 1Password pour activer l'int\xE9gration."
        },
        "privacy-error-enable-header": function(e) {
            return "Impossible d'activer l'int\xE9gration"
        },
        "privacy-error-header": function(e) {
            return "Une erreur s'est produite"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "Un abonnement 1Password est n\xE9cessaire pour int\xE9grer avec Privacy."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Veuillez vous assurer de disposer au moins d'une source de financement associ\xE9e \xE0 votre compte Privacy.com, puis r\xE9essayez."
        },
        "privacy-error-unexpected-error": function(e) {
            return "Une erreur inattendue s'est produite. Veuillez contacter support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "tous les mois"
        },
        "privacy-monthly": function(e) {
            return "Mensuellement"
        },
        "privacy-annually": function(e) {
            return "tous les ans"
        },
        "privacy-transaction": function(e) {
            return "toutes les transactions"
        },
        "privacy-forever": function(e) {
            return "pour toujours"
        },
        "privacy-single-use": function(e) {
            return "Usage unique"
        },
        "privacy-header": function(e) {
            return "Cr\xE9er une carte Privacy"
        },
        "privacy-card-name-label": function(e) {
            return "Nom de la carte"
        },
        "privacy-spend-limit-label": function(e) {
            return "D\xE9finir un plafond de d\xE9penses"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "Fr\xE9quence"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "Plafond de d\xE9penses"
        },
        "privacy-funding-account-label": function(e) {
            return "Source de financement"
        },
        "privacy-save-label": function(e) {
            return "Enregistrer dans 1Password"
        },
        "privacy-create-button": function(e) {
            return "Cr\xE9er et remplir"
        },
        "privacy-error-integration-disabled": function(e) {
            return "Veuillez activer l'int\xE9gration Privacy dans le menu contextuel des outils du d\xE9veloppeur."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password est verrouill\xE9. Veuillez r\xE9essayer apr\xE8s l'avoir d\xE9bloqu\xE9."
        },
        "privacy-error-vault-locked": function(e) {
            return "Ce coffre est verrouill\xE9. Veuillez r\xE9essayer apr\xE8s l'avoir d\xE9bloqu\xE9."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "Veuillez s\xE9lectionner un coffre."
        },
        "privacy-error-save-failed": function(e) {
            return "Impossible d'enregistrer cet \xE9l\xE9ment. V\xE9rifiez que le coffre est d\xE9verrouill\xE9, puis r\xE9essayez."
        },
        "privacy-error-empty-card-name": function(e) {
            return "Veuillez saisir un nom pour la carte."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "Veuillez indiquer un nom plus court pour la carte."
        },
        "privacy-error-empty-limit": function(e) {
            return "Vous devez indiquer une limite de d\xE9penses pour la carte."
        },
        "privacy-error-limit-too-large": function(e) {
            return "Veuillez indiquer une limite de d\xE9penses inf\xE9rieure pour la carte."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "Impossible d'analyser l'URL"
        },
        "privacy-error-http-error": function(e) {
            return "Nous n'avons pas pu atteindre Privacy. Veuillez v\xE9rifier votre connexion Internet, puis r\xE9essayez."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "Impossible d'authentifier avec Privacy. Veuillez v\xE9rifier votre cl\xE9 API, puis r\xE9essayez."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "Erreur lors de la cr\xE9ation de la carte\xA0: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "Erreur lors de la cr\xE9ation de la carte\xA0."
        },
        "privacy-error-brain-error": function(e) {
            return "Impossible de cr\xE9er un \xE9l\xE9ment de carte de cr\xE9dit \xE0 partir de la carte Privacy."
        },
        "privacy-error-default": function(e) {
            return "Une erreur inattendue s\u2019est produite."
        },
        "notification-save-in": function(e) {
            return "Enregistrer dans"
        },
        "notification-save-secondary": function(e) {
            return "Enregistrer votre identifiant " + e.host + " sur 1Password\xA0?"
        },
        "notification-save-save": function(e) {
            return "Enregistrer"
        },
        "ssh-title": function(e) {
            return "Cr\xE9er et remplir la cl\xE9 SSH"
        },
        "ssh-create-button": function(e) {
            return "Cr\xE9er et remplir"
        },
        "ssh-error-message": function(e) {
            return "Une erreur inattendue s'est produite. Veuillez contacter support@1password.com"
        },
        "unexpected-error": function(e) {
            return "Une erreur inattendue s'est produite. Veuillez contacter support@1password.com"
        },
        "login-duplicate": function(e) {
            return "D\xE9j\xE0 enregistr\xE9"
        },
        "social-login-linked": function(e) {
            return e.item + " est associ\xE9 \xE0\xA0:"
        },
        "social-login-locked": function(e) {
            return "Appuyez sur l'ic\xF4ne 1Password dans la barre d'outils de votre navigateur pour d\xE9verrouiller."
        },
        "social-login-no-items": function(e) {
            return "Aucun \xE9l\xE9ment trouv\xE9 pour se connecter."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " a \xE9t\xE9 utilis\xE9 pour se connecter\xA0:"
        },
        "social-login-save-in-1password": function(e) {
            return "Enregistrer dans 1Password\xA0?"
        },
        "social-login-save-item": function(e) {
            return "Enregistrer l'\xE9l\xE9ment"
        },
        "social-login-save-item-locked": function(e) {
            return "D\xE9verrouiller pour enregistrer"
        },
        "social-login-sign-in-with": function(e) {
            return "Se connecter avec\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "Se connecter en utilisant " + e.title + "\xA0: " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "Connexion"
        },
        "social-login-select-provider": function(e) {
            return "s\xE9lectionnez les identifiants de " + e.provider
        },
        "social-login-add-existing": function(e) {
            return "Ajoutez un identifiant existant pour vous connecter."
        },
        "social-login-sign-in-with-label": function(e) {
            return "se connecter avec"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "choisissez l'identifiant avec lequel vous vous \xEAtes connect\xE9"
        },
        "social-login-save-provider-only-title": function(e) {
            return "Enregistrer comme \xE9l\xE9ment g\xE9n\xE9rique de " + e.provider
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "Enregistrer seulement que vous avez utilis\xE9 " + e.provider + " pour vous connecter"
        },
        "shell-plugin-create-title": function(e) {
            return "Cr\xE9er un nouvel \xE9l\xE9ment Plug-ins du shell"
        },
        "shell-plugin-create-button": function(e) {
            return "Enregistrer l'\xE9l\xE9ment"
        },
        "autosave-title-save": function(e) {
            return "Enregistrer " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + " enregistr\xE9"
        },
        "autosave-title-update": function(e) {
            return "Mettre \xE0 jour " + e.item
        },
        "autosave-title-updated": function(e) {
            return e.item + " mis \xE0 jour"
        },
        "autosave-save-type-generic": function(e) {
            return "\xC9l\xE9ment"
        },
        "autosave-save-type-login": function(e) {
            return "Connexion"
        },
        "autosave-save-type-credit-card": function(e) {
            return "Carte de cr\xE9dit"
        },
        "autosave-save-type-identity": function(e) {
            return "Identit\xE9"
        }
    },
    it: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " salvato in 1Password"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "Plugin della shell 1Password disponibile per " + e.platformName
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password ha avuto un problema."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password \xE8 bloccato. Prova di nuovo dopo lo sblocco."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password ora eseguir\xE0 l\u2019accesso in automatico dopo aver compilato in automatico le tue credenziali."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "\xC8 obbligatoria una durata per il limite di spesa"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Si \xE8 verificato un problema di comunicazione con Brex.com. Riprova"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "Un modo pi\xF9 rapido per eseguire l\u2019accesso"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "Una violazione di sicurezza su questo sito web ha messo a rischio la tua password attuale."
        },
        "A-title-is-required": function(e) {
            return "\xC8 richiesto un titolo"
        },
        "Add-account": function(e) {
            return "Aggiungi account"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "Aggiungi l\u2019account all\u2019estensione del browser di 1Password"
        },
        "All-vaults-are-disabled-": function(e) {
            return "Tutte le casseforti sono disabilitate."
        },
        "An-error-has-occurred": function(e) {
            return "Si \xE8 verificato un errore"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "Si \xE8 verificato un errore imprevisto. Contatta support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "Assegna all'account"
        },
        Back: function(e) {
            return "Indietro"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Le carte Brex vengono archiviate e sincronizzate da Brex.com."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex compiler\xE0 automaticamente i promemoria delle transazioni su questa carta."
        },
        Cancel: function(e) {
            return "Annulla"
        },
        "Change-now": function(e) {
            return "Cambia ora"
        },
        "Change-this-compromised-password": function(e) {
            return "Cambia questa password compromessa"
        },
        "Choose-an-account": function(e) {
            return "Scegli un account"
        },
        Close: function(e) {
            return "Chiudi"
        },
        "Conceal-previous-value": function(e) {
            return "Nascondi il valore precedente"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "Collegati a internet e riprova."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Connessione alla carta Privacy\u2026"
        },
        "Contact-Support": function(e) {
            return "Contatta il supporto"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "Contatta il supporto per chiedere assistenza e spiega che si tratta di un problema con l\u2019account predefinito."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "Contatta il supporto per chiedere assistenza e spiega che si tratta di un problema con la cassaforte delle password generate."
        },
        "Create---Fill": function(e) {
            return "Crea e compila"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Crea carta venditore Brex\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "Crea email mascherata"
        },
        Custom: function(e) {
            return "Personalizzato"
        },
        Dismiss: function(e) {
            return "Ignora"
        },
        "Don-t-ask-again": function(e) {
            return "Non chiedermelo pi\xF9"
        },
        "Download-1Password-8": function(e) {
            return "Scarica 1Password 8"
        },
        Edit: function(e) {
            return "Modifica"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "Inserisci l'importo in dollari"
        },
        Error: function(e) {
            return "Errore"
        },
        "Existing-items": function(e) {
            return "Elementi esistenti"
        },
        "Failed-to-load-item-": function(e) {
            return "Impossibile caricare l'elemento."
        },
        "Failed-to-save-item-": function(e) {
            return "Impossibile salvare l'elemento."
        },
        "Fill-Email": function(e) {
            return "Compila email"
        },
        "Funding-Source": function(e) {
            return "Fonte di finanziamento"
        },
        "Get-Help-": function(e) {
            return "Ricevi assistenza\u2026"
        },
        "Got-it": function(e) {
            return "Ho capito"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "Campo di immissione per il titolo dell\u2019elemento"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "Segreto della password monouso non valido."
        },
        "Learn-more-": function(e) {
            return "Ulteriori informazioni\u2026"
        },
        "Loading-": function(e) {
            return "Caricamento in corso\u2026"
        },
        Lock: function(e) {
            return "Blocca"
        },
        "Lock-Card": function(e) {
            return "Blocca carta"
        },
        "Lock-card-is-required": function(e) {
            return "\xC8 necessario il blocco della carta"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "Assicurati che gli account 1Password che contengono le credenziali per questo sito siano sbloccati."
        },
        "New-Item": function(e) {
            return "Nuovo elemento"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "Passaggio successivo: configura l'Agente SSH"
        },
        "No-logins-found": function(e) {
            return "Nessuna credenziale trovata"
        },
        "No-passkeys-found": function(e) {
            return "Nessuna chiave trovata"
        },
        None: function(e) {
            return "Nessuno"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "Una volta salvato, lo ricorderemo per te."
        },
        Overwrite: function(e) {
            return "Sovrascrivi"
        },
        "Overwrite-one-time-password-": function(e) {
            return "Sovrascrivere la password monouso?"
        },
        "Passkey-saved": function(e) {
            return "Chiave salvata"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "Accedi a 1Password per preservare la tua sicurezza online e per facilitare il salvataggio e l\u2019inserimento delle password."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Premi l'icona di 1Password nella barra degli strumenti del browser per sbloccare."
        },
        Previous: function(e) {
            return "Precedente"
        },
        "Privacy-Card": function(e) {
            return "Carta Privacy"
        },
        "Reason-for-card": function(e) {
            return "Motivo della carta"
        },
        Regenerate: function(e) {
            return "Rigenera"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "Rigenera di nuovo tra " + e.secondsLeft + "s"
        },
        "Reveal-previous-value": function(e) {
            return "Mostra il valore precedente"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "Mostra per vedere il valore precedente"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "Chiave SSH creata. Per utilizzare questa chiave in locale, configura l\u2019agente SSH di 1Password, disponibile su 1Password\xA08."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "Chiave SSH creata. Per utilizzare questa chiave in locale, configura l'Agente SSH di 1Password."
        },
        Save: function(e) {
            return "Salva"
        },
        "Save-Item": function(e) {
            return "Salva l\u2019elemento"
        },
        "Save-in-1Password-": function(e) {
            return "Salvare in 1Password?"
        },
        "Save-item": function(e) {
            return "Salva elemento"
        },
        "Save-one-time-password": function(e) {
            return "Salva la password monouso"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "Salva le password monouso che saranno compilate automaticamente durante l\u2019accesso."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "Finestra di dialogo per il salvataggio o l\u2019aggiornamento delle informazioni in 1Password"
        },
        "Save-passkey": function(e) {
            return "Salva la chiave"
        },
        "Saved-one-time-password": function(e) {
            return "Password monouso salvata"
        },
        "Select-account": function(e) {
            return "Seleziona l'account"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Seleziona l'icona di 1Password nella barra degli strumenti del browser per sbloccare."
        },
        "Session-expired-for-tab-": function(e) {
            return "Sessione scaduta per la scheda."
        },
        "Set-Spending-Limit": function(e) {
            return "Imposta il limite di spesa"
        },
        "Set-up-SSH-Agent": function(e) {
            return "Configura l'Agente SSH"
        },
        "Sign-in": function(e) {
            return "Accedi"
        },
        "Sign-in-to-1Password": function(e) {
            return "Accedi a 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "Accedi ai siti web con un semplice click, salva facilmente le informazioni e genera nuove password con l\u2019estensione del browser."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "Accedi con una chiave"
        },
        "Something-went-wrong": function(e) {
            return "Si \xE8 verificato un errore"
        },
        "Spending-Limit": function(e) {
            return "Limite di spesa"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "Passaggio 3: rivedi o modifica il tuo nuovo elemento di accesso, quindi salvalo."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Memorizza le tue credenziali di " + e.credentialName + " in 1Password e autentica la CLI di " + e.platformName + " con " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "L'integrazione con Brex \xE8 stata disabilitata. Riconnettiti con 1Password.com"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "Le password monouso in questo elemento verranno sostituite."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "\xC8 richiesto il motivo della carta"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "La richiesta di creazione di una chiave \xE8 scaduta."
        },
        "The-spending-limit-is-required": function(e) {
            return "\xC8 richiesto il limite di spesa"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "Quindi tocca l'indicatore di offline ( <offlineIndicator /> ) e completa l'accesso per salvare le modifiche."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "Per salvare " + e.item + ", sblocca prima 1Password."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "Per salvare una chiave di accesso, sblocca prima 1Password."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "Per utilizzare la tua chiave di accesso, sblocca prima 1Password."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID o Apple Watch"
        },
        "Try-Again": function(e) {
            return "Riprova"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "Prova a bloccare e poi a sbloccare 1Password per riempire di nuovo il campo."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "Impossibile creare la carta, riprova."
        },
        "Unable-to-fill-password": function(e) {
            return "Impossibile compilare la password"
        },
        "Unlock-1Password": function(e) {
            return "Sblocca 1Password"
        },
        "Unlock-to-save": function(e) {
            return "Sblocca per salvare"
        },
        "Unlocking-1Password-": function(e) {
            return "Sblocco di 1Password in corso\u2026"
        },
        Update: function(e) {
            return "Aggiorna"
        },
        "Update-Existing": function(e) {
            return "Aggiorna esistente"
        },
        "Update-Item": function(e) {
            return "Aggiorna l\u2019elemento"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "Usa 1Password per l\u2019autenticazione a due fattori"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Utilizza 1Password per autenticare la CLI di " + e.platformName + " con " + e.authType + "."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "Utilizza una chiave di sicurezza o un\u2019altra chiave"
        },
        "View-settings": function(e) {
            return "Visualizza impostazioni"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "Non possiamo usare la password suggerita perch\xE9 si \xE8 verificato un errore imprevisto."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "Puoi modificare questa impostazione in qualsiasi momento nelle impostazioni."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "Puoi gestire i tuoi account nelle Impostazioni."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "Il tuo account " + e.accountName + " deve essere sbloccato per inserire questa password. Sbloccalo e riprova."
        },
        "a--item-": function(e) {
            return "un " + e.item
        },
        "an--item-": function(e) {
            return "un " + e.item
        },
        email: function(e) {
            return "email"
        },
        "every-month": function(e) {
            return "ogni mese"
        },
        "every-quarter": function(e) {
            return "ogni trimestre"
        },
        "every-transaction": function(e) {
            return "ogni transazione"
        },
        "every-year": function(e) {
            return "ogni anno"
        },
        forever: function(e) {
            return "per sempre"
        },
        "in-1-Month": function(e) {
            return "in 1 mese"
        },
        "in-1-Year": function(e) {
            return "in 1 anno"
        },
        "in-7-Days": function(e) {
            return "in 7 giorni"
        },
        "loading---": function(e) {
            return "caricamento in corso..."
        },
        "one-time": function(e) {
            return "una volta"
        },
        "one-time-password": function(e) {
            return "password monouso"
        },
        "system-authentication": function(e) {
            return "autenticazione di sistema"
        },
        "auth-unfamiliar-website": function(e) {
            return "Sito web sconosciuto"
        },
        "auth-type-code-to-fill": function(e) {
            return "Digita " + e.code + " per autorizzare " + e.type + " a compilare " + e.website + "."
        },
        "auth-filling-on-website": function(e) {
            return " su " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "Codice inserito non corretto"
        },
        "auth-why-is-this-needed": function(e) {
            return "Perch\xE9 questo \xE8 necessario?"
        },
        "item-use-suggested-password": function(e) {
            return "Usa password suggerita"
        },
        "item-create-privacy-card": function(e) {
            return "Crea carta Privacy"
        },
        "item-create-email-alias": function(e) {
            return "Crea email mascherata"
        },
        "item-type-credit-card": function(e) {
            return "carta di credito"
        },
        "item-type-identity": function(e) {
            return "identit\xE0"
        },
        "item-type-unspecified": function(e) {
            return "elemento"
        },
        categories: function(e) {
            return "Categorie"
        },
        "category-suggestions": function(e) {
            return "Suggerimenti"
        },
        "category-logins": function(e) {
            return "Dati di accesso"
        },
        "category-identities": function(e) {
            return "Identit\xE0"
        },
        "category-credit-cards": function(e) {
            return "Carte di credito"
        },
        "category-generated-password": function(e) {
            return "Password generata"
        },
        "category-hide-on-this-page": function(e) {
            return "Nascondi su questa pagina"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "Sblocca 1Password dall'icona nella barra degli strumenti."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "Premi " + e.shortcut + " per sbloccare 1Password"
        },
        "locked-request-unlock": function(e) {
            return "Apri 1Password"
        },
        "notification-add-account": function(e) {
            return "Aggiungi account a"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "Puoi aggiungere e rimuovere account in un secondo momento da 1Password"
        },
        "notification-settings": function(e) {
            return "Impostazioni"
        },
        "notification-add-account-never": function(e) {
            return "Mai"
        },
        "notification-add-account-confirm": function(e) {
            return "Aggiungi"
        },
        "authorize-fill": function(e) {
            return "Clicca OK per compilare il tuo elemento di 1Password su " + e.host
        },
        "authorize-fill-brex": function(e) {
            return "Clicca su OK per creare e compilare una carta Brex utilizzando 1Password su " + e.host
        },
        "authorize-fill-privacy": function(e) {
            return "Clicca su OK per creare e compilare una carta Privacy utilizzando 1Password su " + e.host
        },
        "authorize-fill-protocol": function(e) {
            return `Avviso di 1Password: questa \xE8 una pagina non protetta (HTTP) e qualsiasi informazione inviata pu\xF2 essere potenzialmente vista e modificata da altri. 

Desideri comunque compilare questa voce?`
        },
        "tooltip-close-1password": function(e) {
            return "Chiudi"
        },
        "tooltip-open-1password": function(e) {
            return "Apri"
        },
        "tooltip-no-items": function(e) {
            return "Nessun elemento da mostrare"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `Premi l\u2019icona di 1Password nella barra
degli strumenti del browser per sbloccare`
        },
        "tooltip-unlock-1password": function(e) {
            return "Sblocca 1Password"
        },
        Title: function(e) {
            return "Titolo"
        },
        "save-in-header": function(e) {
            return "Salva in"
        },
        "save-item": function(e) {
            return "Salva l\u2019elemento"
        },
        "update-item": function(e) {
            return "Aggiorna l\u2019elemento"
        },
        "select-item": function(e) {
            return "Scegli l\u2019elemento"
        },
        "Save-new-Login": function(e) {
            return "Salva nuovo accesso"
        },
        cancel: function(e) {
            return "Annulla"
        },
        close: function(e) {
            return "Chiudi"
        },
        confirm: function(e) {
            return "Conferma"
        },
        "unknown-item": function(e) {
            return "elemento sconosciuto"
        },
        "save-in": function(e) {
            return "salva in"
        },
        "select-a-vault": function(e) {
            return "Seleziona una cassaforte"
        },
        "locked-title": function(e) {
            return "1Password \xE8 bloccato"
        },
        "locked-message": function(e) {
            return "Per continuare a salvare con 1Password, sblocca un account."
        },
        "offline-title": function(e) {
            return "Il tuo account \xE8 offline."
        },
        "offline-message": function(e) {
            return "Non sarai in grado di salvare questo elemento fino a quando non avrai effettuato l'accesso e sarai online."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "Premi l'icona 1Password nella barra degli strumenti del browser per aprire 1Password."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "Premi " + e.shortcut + " per aprire 1Password."
        },
        "current-item": function(e) {
            return "Elemento attuale"
        },
        "updated-item": function(e) {
            return "Elemento aggiornato"
        },
        "add-tag": function(e) {
            return "Aggiungi etichetta"
        },
        "remove-tag": function(e) {
            return "Rimuovi etichetta"
        },
        "sso-info-banner": function(e) {
            return "I nuovi elementi con accessi collegati devono essere salvati nella stessa cassaforte e devono trovarsi nello stesso account."
        },
        "new-item": function(e) {
            return "Nuovo elemento"
        },
        "update-existing": function(e) {
            return "Aggiorna esistente"
        },
        "enable-privacy-header": function(e) {
            return "Aggiungi a 1Password"
        },
        "enable-privacy-description": function(e) {
            return "Usa 1Password per creare e compilare le carte Privacy ovunque paghi online, e salva le carte del commerciante per gli utilizzi futuri."
        },
        "enable-privacy-choose-account": function(e) {
            return "Scegli un account"
        },
        "enable-privacy-add-button": function(e) {
            return "Aggiungi a 1Password"
        },
        "enable-privacy-error": function(e) {
            return "Impossibile abilitare l'integrazione di Privacy. Per favore riprova pi\xF9 tardi."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "Sblocca l'account selezionato per abilitare l'integrazione."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "Sblocca 1Password per abilitare l'integrazione."
        },
        "privacy-error-enable-header": function(e) {
            return "Impossibile abilitare l'integrazione"
        },
        "privacy-error-header": function(e) {
            return "Si \xE8 verificato un errore"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "\xC8 necessario l'abbonamento a 1Password per l'integrazione con Privacy."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Assicurati che ci sia almeno una fonte di finanziamento associata al tuo conto su Privacy.com, quindi riprova."
        },
        "privacy-error-unexpected-error": function(e) {
            return "Si \xE8 verificato un errore imprevisto. Contatta support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "ogni mese"
        },
        "privacy-monthly": function(e) {
            return "Mensilmente"
        },
        "privacy-annually": function(e) {
            return "ogni anno"
        },
        "privacy-transaction": function(e) {
            return "ogni transazione"
        },
        "privacy-forever": function(e) {
            return "per sempre"
        },
        "privacy-single-use": function(e) {
            return "Uso singolo"
        },
        "privacy-header": function(e) {
            return "Crea carta Privacy"
        },
        "privacy-card-name-label": function(e) {
            return "Nome della carta"
        },
        "privacy-spend-limit-label": function(e) {
            return "Imposta il limite di spesa"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "Frequenza"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "Limite di spesa"
        },
        "privacy-funding-account-label": function(e) {
            return "Fonte di finanziamento"
        },
        "privacy-save-label": function(e) {
            return "Salva in 1Password"
        },
        "privacy-create-button": function(e) {
            return "Crea e compila"
        },
        "privacy-error-integration-disabled": function(e) {
            return "Abilita l'integrazione di Privacy dal menu contestuale Strumenti per sviluppatori."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password \xE8 bloccato. Prova di nuovo dopo lo sblocco."
        },
        "privacy-error-vault-locked": function(e) {
            return "Questa cassaforte \xE8 bloccata. Prova di nuovo dopo lo sblocco."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "Seleziona una cassaforte."
        },
        "privacy-error-save-failed": function(e) {
            return "Impossibile salvare l'elemento. Verifica che la cassaforte sia sbloccata e riprova."
        },
        "privacy-error-empty-card-name": function(e) {
            return "Inserisci un nome per la carta."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "Inserisci un nome pi\xF9 breve per la carta."
        },
        "privacy-error-empty-limit": function(e) {
            return "\xC8 necessario fornire un limite di spesa per la carta."
        },
        "privacy-error-limit-too-large": function(e) {
            return "Inserisci un limite di spesa inferiore per la carta."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "Impossibile analizzare l'URL"
        },
        "privacy-error-http-error": function(e) {
            return "Impossibile raggiungere Privacy. Controlla la connessione a internet e riprova."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "Impossibile eseguire l'autenticazione con Privacy. Controlla la tua chiave API e riprova."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "Errore durante la creazione della carta: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "Errore durante la creazione della carta."
        },
        "privacy-error-brain-error": function(e) {
            return "Impossibile creare l'elemento della carta di credito dalla carta Privacy."
        },
        "privacy-error-default": function(e) {
            return "Si \xE8 verificato un errore imprevisto."
        },
        "notification-save-in": function(e) {
            return "Salva in"
        },
        "notification-save-secondary": function(e) {
            return "Vuoi salvare le tue credenziali di " + e.host + " su 1Password?"
        },
        "notification-save-save": function(e) {
            return "Salva"
        },
        "ssh-title": function(e) {
            return "Crea e compila la chiave SSH"
        },
        "ssh-create-button": function(e) {
            return "Crea e compila"
        },
        "ssh-error-message": function(e) {
            return "Si \xE8 verificato un errore imprevisto. Contatta support@1password.com"
        },
        "unexpected-error": function(e) {
            return "Si \xE8 verificato un errore imprevisto. Contatta support@1password.com"
        },
        "login-duplicate": function(e) {
            return "Salvataggio gi\xE0 effettuato"
        },
        "social-login-linked": function(e) {
            return e.item + " \xE8 collegato a:"
        },
        "social-login-locked": function(e) {
            return "Premi l'icona di 1Password nella barra degli strumenti del browser per sbloccare."
        },
        "social-login-no-items": function(e) {
            return "Nessun elemento trovato con cui effettuare l'accesso."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " \xE8 stato utilizzato per accedere a:"
        },
        "social-login-save-in-1password": function(e) {
            return "Salvare in 1Password?"
        },
        "social-login-save-item": function(e) {
            return "Salva elemento"
        },
        "social-login-save-item-locked": function(e) {
            return "Sblocca per salvare"
        },
        "social-login-sign-in-with": function(e) {
            return "Accedi con\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "Accedi utilizzando " + e.title + ": " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "Accedi"
        },
        "social-login-select-provider": function(e) {
            return "seleziona le tue credenziali di " + e.provider
        },
        "social-login-add-existing": function(e) {
            return "Aggiungi un profilo esistente con cui effettuare l'accesso."
        },
        "social-login-sign-in-with-label": function(e) {
            return "accedi con"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "scegli le credenziali con cui hai effettuato l'accesso"
        },
        "social-login-save-provider-only-title": function(e) {
            return "Salva come elemento generico di " + e.provider
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "Salva solo che hai utilizzato " + e.provider + " per accedere"
        },
        "shell-plugin-create-title": function(e) {
            return "Crea nuovo elemento Shell Plugins"
        },
        "shell-plugin-create-button": function(e) {
            return "Salva elemento"
        },
        "autosave-title-save": function(e) {
            return "Salva " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + " salvato"
        },
        "autosave-title-update": function(e) {
            return "Aggiorna " + e.item
        },
        "autosave-title-updated": function(e) {
            return e.item + " aggiornato"
        },
        "autosave-save-type-generic": function(e) {
            return "Elemento"
        },
        "autosave-save-type-login": function(e) {
            return "Accesso"
        },
        "autosave-save-type-credit-card": function(e) {
            return "Carta di credito"
        },
        "autosave-save-type-identity": function(e) {
            return "Identit\xE0"
        }
    },
    ja: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + "\u304C1Password\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "1Password Shell Plugin\u306F" + e.platformName + "\u3067\u5229\u7528\u3067\u304D\u307E\u3059"
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002"
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u304B\u3089\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password\u306F\u8A8D\u8A3C\u60C5\u5831\u3092\u81EA\u52D5\u5165\u529B\u3057\u305F\u5F8C\u3001\u81EA\u52D5\u7684\u306B\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002"
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "\u652F\u51FA\u5236\u9650\u306E\u671F\u9593\u304C\u5FC5\u8981\u3067\u3059"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Brex.com\u3068\u901A\u4FE1\u3059\u308B\u969B\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "\u3088\u308A\u8FC5\u901F\u306A\u30B5\u30A4\u30F3\u30A4\u30F3\u65B9\u6CD5"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "\u3053\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4FB5\u5BB3\u306B\u3088\u308A\u3001\u304A\u5BA2\u3055\u307E\u306E\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5371\u967A\u306B\u3055\u3089\u3055\u308C\u3066\u3044\u307E\u3059\u3002"
        },
        "A-title-is-required": function(e) {
            return "\u30BF\u30A4\u30C8\u30EB\u304C\u5FC5\u8981\u3067\u3059"
        },
        "Add-account": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "1Password\u30D6\u30E9\u30A6\u30B6\u62E1\u5F35\u6A5F\u80FD\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B"
        },
        "All-vaults-are-disabled-": function(e) {
            return "\u3059\u3079\u3066\u306E\u4FDD\u7BA1\u5EAB\u306F\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"
        },
        "An-error-has-occurred": function(e) {
            return "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002support@1password.com\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044"
        },
        "Assign-to-Account": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u5272\u308A\u5F53\u3066\u308B"
        },
        Back: function(e) {
            return "\u623B\u308B"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Brex\u30AB\u30FC\u30C9\u306FBrex.com\u304B\u3089\u4FDD\u5B58\u30FB\u540C\u671F\u3055\u308C\u307E\u3059\u3002"
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex\u306F\u3001\u3053\u306E\u30AB\u30FC\u30C9\u306B\u53D6\u5F15\u30E1\u30E2\u3092\u81EA\u52D5\u5165\u529B\u3057\u307E\u3059\u3002"
        },
        Cancel: function(e) {
            return "\u30AD\u30E3\u30F3\u30BB\u30EB"
        },
        "Change-now": function(e) {
            return "\u4ECA\u3059\u3050\u5909\u66F4\u3059\u308B"
        },
        "Change-this-compromised-password": function(e) {
            return "\u3053\u306E\u6F0F\u6D29\u3057\u305F\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B"
        },
        "Choose-an-account": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u9078\u629E"
        },
        Close: function(e) {
            return "\u9589\u3058\u308B"
        },
        "Conceal-previous-value": function(e) {
            return "\u4EE5\u524D\u306E\u5024\u3092\u96A0\u3059"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306B\u63A5\u7D9A\u3057\u3066\u304B\u3089\u3001\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30AB\u30FC\u30C9\u306B\u63A5\u7D9A\u3057\u3066\u3044\u307E\u3059\u2026"
        },
        "Contact-Support": function(e) {
            return "\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "\u30B5\u30DD\u30FC\u30C8\u306B\u9023\u7D61\u3057\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u554F\u984C\u3067\u3042\u308B\u3053\u3068\u3092\u4F1D\u3048\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "\u30B5\u30DD\u30FC\u30C8\u306B\u9023\u7D61\u3057\u3001\u751F\u6210\u3055\u308C\u305F\u30D1\u30B9\u30EF\u30FC\u30C9\u4FDD\u7BA1\u5EAB\u306E\u554F\u984C\u3067\u3042\u308B\u3053\u3068\u3092\u4F1D\u3048\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "Create---Fill": function(e) {
            return "\u4F5C\u6210\u3068\u5165\u529B"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Brex\u30D9\u30F3\u30C0\u30FC\u30AB\u30FC\u30C9\u3092\u4F5C\u6210\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "\u30DE\u30B9\u30AF\u30E1\u30FC\u30EB\u306E\u4F5C\u6210"
        },
        Custom: function(e) {
            return "\u30AB\u30B9\u30BF\u30E0"
        },
        Dismiss: function(e) {
            return "\u7121\u8996\u3059\u308B"
        },
        "Don-t-ask-again": function(e) {
            return "\u4ECA\u5F8C\u306F\u78BA\u8A8D\u3057\u306A\u3044"
        },
        "Download-1Password-8": function(e) {
            return "1Password 8\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
        },
        Edit: function(e) {
            return "\u7DE8\u96C6"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "\u91D1\u984D\u3092\u30C9\u30EB\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
        },
        Error: function(e) {
            return "\u30A8\u30E9\u30FC"
        },
        "Existing-items": function(e) {
            return "\u65E2\u5B58\u306E\u30A2\u30A4\u30C6\u30E0"
        },
        "Failed-to-load-item-": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002"
        },
        "Failed-to-save-item-": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002"
        },
        "Fill-Email": function(e) {
            return "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5165\u529B"
        },
        "Funding-Source": function(e) {
            return "\u8CC7\u91D1\u8ABF\u9054\u5148"
        },
        "Get-Help-": function(e) {
            return "\u30D8\u30EB\u30D7\u3092\u53C2\u7167\u2026"
        },
        "Got-it": function(e) {
            return "\u4E86\u89E3"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u306E\u30BF\u30A4\u30C8\u30EB\u306E\u5165\u529B\u30D5\u30A3\u30FC\u30EB\u30C9"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "\u30EF\u30F3\u30BF\u30A4\u30E0\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u304C\u7121\u52B9\u3067\u3059\u3002"
        },
        "Learn-more-": function(e) {
            return "\u8A73\u3057\u304F\u898B\u308B\u2026"
        },
        "Loading-": function(e) {
            return "\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"
        },
        Lock: function(e) {
            return "\u30ED\u30C3\u30AF"
        },
        "Lock-Card": function(e) {
            return "\u30ED\u30C3\u30AF\u30AB\u30FC\u30C9"
        },
        "Lock-card-is-required": function(e) {
            return "\u30ED\u30C3\u30AF\u30AB\u30FC\u30C9\u304C\u5FC5\u8981\u3067\u3059"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "\u3053\u306E\u30B5\u30A4\u30C8\u306E\u30ED\u30B0\u30A4\u30F3\u3092\u542B\u30801Password\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u30ED\u30C3\u30AF\u89E3\u9664\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "New-Item": function(e) {
            return "\u65B0\u898F\u30A2\u30A4\u30C6\u30E0"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\uFF1ASSH \u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u8A2D\u5B9A"
        },
        "No-logins-found": function(e) {
            return "\u30ED\u30B0\u30A4\u30F3\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"
        },
        "No-passkeys-found": function(e) {
            return "\u30D1\u30B9\u30AD\u30FC\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"
        },
        None: function(e) {
            return "\u306A\u3057"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "\u4E00\u5EA6\u4FDD\u5B58\u3059\u308C\u3070\u3001\u305D\u308C\u3092\u8A18\u61B6\u3057\u307E\u3059\u3002"
        },
        Overwrite: function(e) {
            return "\u4E0A\u66F8\u304D"
        },
        "Overwrite-one-time-password-": function(e) {
            return "\u30EF\u30F3\u30BF\u30A4\u30E0\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4E0A\u66F8\u304D\u3057\u307E\u3059\u304B\uFF1F"
        },
        "Passkey-saved": function(e) {
            return "\u30D1\u30B9\u30AD\u30FC\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "1Password\u306B\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u306E\u5B89\u5168\u3092\u78BA\u4FDD\u3057\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u4FDD\u5B58\u3068\u5165\u529B\u3092\u7C21\u5358\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u30D6\u30E9\u30A6\u30B6\u306E\u30C4\u30FC\u30EB\u30D0\u30FC\u306B\u3042\u308B1Password\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u3066\u3001\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3059\u3002"
        },
        Previous: function(e) {
            return "\u524D"
        },
        "Privacy-Card": function(e) {
            return "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30AB\u30FC\u30C9"
        },
        "Reason-for-card": function(e) {
            return "\u30AB\u30FC\u30C9\u306E\u7406\u7531"
        },
        Regenerate: function(e) {
            return "\u518D\u751F\u6210"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return e.secondsLeft + "\u79D2\u5F8C\u306B\u518D\u751F\u6210\u3059\u308B"
        },
        "Reveal-previous-value": function(e) {
            return "\u4EE5\u524D\u306E\u5024\u3092\u8868\u793A\u3059\u308B"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "\u4EE5\u524D\u306E\u5024\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u8868\u793A\u3059\u308B"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH\u30AD\u30FC\u304C\u4F5C\u6210\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u306E\u30AD\u30FC\u3092\u30ED\u30FC\u30AB\u30EB\u3067\u4F7F\u7528\u3059\u308B\u306B\u306F\u30011Password 8\u3067\u5229\u7528\u3067\u304D\u308B1Password SSH\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH\u30AD\u30FC\u304C\u4F5C\u6210\u3055\u308C\u307E\u3057\u305F\u3002\u3053\u306E\u9375\u3092\u30ED\u30FC\u30AB\u30EB\u3067\u4F7F\u7528\u3059\u308B\u306B\u306F\u30011Password SSH\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"
        },
        Save: function(e) {
            return "\u4FDD\u5B58"
        },
        "Save-Item": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58"
        },
        "Save-in-1Password-": function(e) {
            return "1Password\u306B\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F"
        },
        "Save-item": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58"
        },
        "Save-one-time-password": function(e) {
            return "\u30EF\u30F3\u30BF\u30A4\u30E0\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3\u6642\u306B\u81EA\u52D5\u5165\u529B\u3055\u308C\u308B\u30EF\u30F3\u30BF\u30A4\u30E0\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u3002"
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "1Password\u306E\u60C5\u5831\u4FDD\u5B58\u30FB\u66F4\u65B0\u30C0\u30A4\u30A2\u30ED\u30B0"
        },
        "Save-passkey": function(e) {
            return "\u30D1\u30B9\u30AD\u30FC\u3092\u4FDD\u5B58"
        },
        "Saved-one-time-password": function(e) {
            return "\u30EF\u30F3\u30BF\u30A4\u30E0\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F"
        },
        "Select-account": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u9078\u629E"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u30D6\u30E9\u30A6\u30B6\u306E\u30C4\u30FC\u30EB\u30D0\u30FC\u306B\u3042\u308B1Password\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u9078\u629E\u3057\u3066\u3001\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3059\u3002"
        },
        "Session-expired-for-tab-": function(e) {
            return "\u30BF\u30D6\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u5207\u308C\u307E\u3057\u305F\u3002"
        },
        "Set-Spending-Limit": function(e) {
            return "\u652F\u51FA\u9650\u5EA6\u984D\u306E\u8A2D\u5B9A"
        },
        "Set-up-SSH-Agent": function(e) {
            return "SSH\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u8A2D\u5B9A"
        },
        "Sign-in": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3"
        },
        "Sign-in-to-1Password": function(e) {
            return "1Password \u306B\u30B5\u30A4\u30F3\u30A4\u30F3"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "\u30D6\u30E9\u30A6\u30B6\u306E\u62E1\u5F35\u6A5F\u80FD\u3092\u4F7F\u3046\u3068\u3001\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3067\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306B\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3001\u60C5\u5831\u3092\u7C21\u5358\u306B\u4FDD\u5B58\u3057\u3001\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u751F\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"
        },
        "Sign-in-with-a-passkey": function(e) {
            return "\u30D1\u30B9\u30AD\u30FC\u3067\u30B5\u30A4\u30F3\u30A4\u30F3"
        },
        "Something-went-wrong": function(e) {
            return "\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F"
        },
        "Spending-Limit": function(e) {
            return "\u652F\u51FA\u9650\u5EA6\u984D"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "\u30B9\u30C6\u30C3\u30D73\uFF1A\u65B0\u3057\u3044\u30ED\u30B0\u30A4\u30F3\u30A2\u30A4\u30C6\u30E0\u3092\u78BA\u8A8D\u307E\u305F\u306F\u7DE8\u96C6\u3057\u3066\u304B\u3089\u3001\u4FDD\u5B58\u3057\u307E\u3059\u3002"
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return e.credentialName + "\u30921Password\u306B\u4FDD\u5B58\u3057\u3066\u3001" + e.authType + "\u3067" + e.platformName + " CLI\u3092\u8A8D\u8A3C\u3057\u307E\u3059\u3002"
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "Brex\u3068\u306E\u7D71\u5408\u306F\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u30021Password.com\u3067\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u306E\u30EF\u30F3\u30BF\u30A4\u30E0\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002"
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "\u30AB\u30FC\u30C9\u306E\u7406\u7531\u304C\u5FC5\u8981\u3067\u3059"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "\u30D1\u30B9\u30AD\u30FC\u306E\u4F5C\u6210\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3057\u307E\u3057\u305F\u3002"
        },
        "The-spending-limit-is-required": function(e) {
            return "\u652F\u51FA\u9650\u5EA6\u984D\u304C\u5FC5\u8981\u3067\u3059"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "\u305D\u306E\u5F8C\u3001\u30AA\u30D5\u30E9\u30A4\u30F3\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\uFF08<offlineIndicator />\uFF09\u3092\u30BF\u30C3\u30D7\u3057\u3001\u30B5\u30A4\u30F3\u30A4\u30F3\u3092\u5B8C\u4E86\u3059\u308B\u3068\u3001\u5909\u66F4\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return e.item + "\u3092\u4FDD\u5B58\u3059\u308B\u306B\u306F\u3001\u307E\u305A1Password\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "\u30D1\u30B9\u30AD\u30FC\u3092\u4FDD\u5B58\u3059\u308B\u306B\u306F\u3001\u307E\u305A1Password\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "\u30D1\u30B9\u30AD\u30FC\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u307E\u305A1Password\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID\u307E\u305F\u306FApple Watch"
        },
        "Try-Again": function(e) {
            return "\u3084\u308A\u76F4\u3059"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "1Password\u3092\u30ED\u30C3\u30AF\u3057\u3066\u304B\u3089\u89E3\u9664\u3057\u3066\u3001\u3082\u3046\u4E00\u5EA6\u5165\u529B\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "\u30AB\u30FC\u30C9\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093\u3002\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044."
        },
        "Unable-to-fill-password": function(e) {
            return "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3067\u304D\u307E\u305B\u3093"
        },
        "Unlock-1Password": function(e) {
            return "1Password\u3092\u30ED\u30C3\u30AF\u89E3\u9664"
        },
        "Unlock-to-save": function(e) {
            return "\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u3066\u4FDD\u5B58"
        },
        "Unlocking-1Password-": function(e) {
            return "1Password\u3092\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u3066\u3044\u307E\u3059\u2026\u2026"
        },
        Update: function(e) {
            return "\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"
        },
        "Update-Existing": function(e) {
            return "\u65E2\u5B58\u306E\u3082\u306E\u3092\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"
        },
        "Update-Item": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "2\u8981\u7D20\u8A8D\u8A3C\u306B1Password\u3092\u4F7F\u7528\u3059\u308B"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "1Password\u3092\u4F7F\u7528\u3057\u3066\u3001" + e.authType + "\u3067" + e.platformName + "\u3092\u8A8D\u8A3C\u3059\u308B\u3002"
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30AD\u30FC\u307E\u305F\u306F\u5225\u306E\u30D1\u30B9\u30AD\u30FC\u3092\u4F7F\u7528\u3059\u308B"
        },
        "View-settings": function(e) {
            return "\u8A2D\u5B9A\u3092\u8868\u793A"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u305F\u3081\u3001\u63D0\u6848\u3055\u308C\u305F\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "\u3053\u308C\u306F\u8A2D\u5B9A\u3067\u3044\u3064\u3067\u3082\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u8A2D\u5B9A\u3067\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002"
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "\u3053\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3059\u308B\u306B\u306F\u3001" + e.accountName + "\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u3082\u3046\u4E00\u5EA6\u8A66\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "a--item-": function(e) {
            return e.item
        },
        "an--item-": function(e) {
            return e.item
        },
        email: function(e) {
            return "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"
        },
        "every-month": function(e) {
            return "\u6BCE\u6708"
        },
        "every-quarter": function(e) {
            return "\u6BCE\u56DB\u534A\u671F"
        },
        "every-transaction": function(e) {
            return "\u53D6\u5F15\u3054\u3068"
        },
        "every-year": function(e) {
            return "\u6BCE\u5E74"
        },
        forever: function(e) {
            return "\u6C38\u4E45"
        },
        "in-1-Month": function(e) {
            return "1\u30F6\u6708\u5F8C"
        },
        "in-1-Year": function(e) {
            return "1\u5E74\u5F8C"
        },
        "in-7-Days": function(e) {
            return "7\u65E5\u5F8C"
        },
        "loading---": function(e) {
            return "\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026"
        },
        "one-time": function(e) {
            return "1\u56DE"
        },
        "one-time-password": function(e) {
            return "\u30EF\u30F3\u30BF\u30A4\u30E0\u30D1\u30B9\u30EF\u30FC\u30C9"
        },
        "system-authentication": function(e) {
            return "\u30B7\u30B9\u30C6\u30E0\u8A8D\u8A3C"
        },
        "auth-unfamiliar-website": function(e) {
            return "\u4E0D\u660E\u306A\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8"
        },
        "auth-type-code-to-fill": function(e) {
            return e.code + " \u3092\u5165\u529B\u3057\u3001" + e.website + " \u306B" + e.type + " \u3092\u5165\u529B\u3057\u307E\u3059\u3002"
        },
        "auth-filling-on-website": function(e) {
            return " \u6307\u5B9A\u5148 " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "\u4E0D\u6B63\u306A\u30B3\u30FC\u30C9\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F"
        },
        "auth-why-is-this-needed": function(e) {
            return "\u306A\u305C\u3053\u308C\u304C\u5FC5\u8981\u3067\u3059\u304B\uFF1F"
        },
        "item-use-suggested-password": function(e) {
            return "\u304A\u3059\u3059\u3081\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B"
        },
        "item-create-privacy-card": function(e) {
            return "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30AB\u30FC\u30C9\u3092\u4F5C\u6210"
        },
        "item-create-email-alias": function(e) {
            return "\u30DE\u30B9\u30AF\u30A2\u30C9\u30EC\u30B9\u306E\u4F5C\u6210"
        },
        "item-type-credit-card": function(e) {
            return "\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9"
        },
        "item-type-identity": function(e) {
            return "\u500B\u4EBA\u60C5\u5831"
        },
        "item-type-unspecified": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0"
        },
        categories: function(e) {
            return "\u30AB\u30C6\u30B4\u30EA"
        },
        "category-suggestions": function(e) {
            return "\u304A\u3059\u3059\u3081"
        },
        "category-logins": function(e) {
            return "\u30ED\u30B0\u30A4\u30F3"
        },
        "category-identities": function(e) {
            return "\u500B\u4EBA\u60C5\u5831"
        },
        "category-credit-cards": function(e) {
            return "\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9"
        },
        "category-generated-password": function(e) {
            return "\u751F\u6210\u3055\u308C\u305F\u30D1\u30B9\u30EF\u30FC\u30C9"
        },
        "category-hide-on-this-page": function(e) {
            return "\u3053\u306E\u30DA\u30FC\u30B8\u306B\u8868\u793A\u3057\u306A\u3044"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u30A2\u30A4\u30B3\u30F3\u304B\u30891Password\u3092\u30A2\u30F3\u30ED\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return e.shortcut + " \u3092\u4F7F\u7528\u3057\u3066\u30011Password\u3092\u30A2\u30F3\u30ED\u30C3\u30AF"
        },
        "locked-request-unlock": function(e) {
            return "1Password\u3092\u958B\u304F"
        },
        "notification-add-account": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u8FFD\u52A0\u5148"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3001\u5F8C\u30671Password\u304B\u3089\u8FFD\u52A0\u3057\u305F\u308A\u524A\u9664\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059"
        },
        "notification-settings": function(e) {
            return "\u8A2D\u5B9A"
        },
        "notification-add-account-never": function(e) {
            return "\u8FFD\u52A0\u3057\u306A\u3044"
        },
        "notification-add-account-confirm": function(e) {
            return "\u8FFD\u52A0\u3059\u308B"
        },
        "authorize-fill": function(e) {
            return "\u300COK\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001" + e.host + " \u306E1Password\u30A2\u30A4\u30C6\u30E0\u3092\u5165\u529B\u3057\u307E\u3059"
        },
        "authorize-fill-brex": function(e) {
            return "OK\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066Brex \u30AB\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u3001" + e.host + " \u4E0A\u306E1Password\u3092\u4F7F\u7528\u3057\u3066\u8A18\u5165\u3057\u307E\u3059\u3002"
        },
        "authorize-fill-privacy": function(e) {
            return "OK\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30AB\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u3001" + e.host + " \u4E0A\u306E1Password\u3092\u4F7F\u7528\u3057\u3066\u8A18\u5165\u3057\u307E\u3059\u3002"
        },
        "authorize-fill-protocol": function(e) {
            return `1Password\u304B\u3089\u306E\u8B66\u544A: \u3053\u306E\u30DA\u30FC\u30B8\u306F\u5B89\u5168\u3067\u306F\u306A\u3044 (HTTP) \u30DA\u30FC\u30B8\u306E\u305F\u3081\u3001\u9001\u4FE1\u3059\u308B\u60C5\u5831\u306F\u7B2C\u4E09\u8005\u306B\u3088\u308A\u95B2\u89A7\u304A\u3088\u3073\u5909\u66F4\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002

\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u5165\u529B\u3057\u307E\u3059\u304B\uFF1F`
        },
        "tooltip-close-1password": function(e) {
            return "\u9589\u3058\u308B"
        },
        "tooltip-open-1password": function(e) {
            return "\u958B\u304F"
        },
        "tooltip-no-items": function(e) {
            return "\u8868\u793A\u3059\u308B\u30A2\u30A4\u30C6\u30E0\u304C\u3042\u308A\u307E\u305B\u3093"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `\u30D6\u30E9\u30A6\u30B6\u306E\u30C4\u30FC\u30EB\u30D0\u30FC\u306B\u3042\u308B
1Password\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u3066\u3001\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3059`
        },
        "tooltip-unlock-1password": function(e) {
            return "1Password\u3092\u30ED\u30C3\u30AF\u89E3\u9664"
        },
        Title: function(e) {
            return "\u30BF\u30A4\u30C8\u30EB"
        },
        "save-in-header": function(e) {
            return "\u6B21\u306B\u4FDD\u5B58\uFF1A"
        },
        "save-item": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58"
        },
        "update-item": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"
        },
        "select-item": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u9078\u629E"
        },
        "Save-new-Login": function(e) {
            return "\u65B0\u898F\u30ED\u30B0\u30A4\u30F3\u3092\u4FDD\u5B58"
        },
        cancel: function(e) {
            return "\u30AD\u30E3\u30F3\u30BB\u30EB"
        },
        close: function(e) {
            return "\u9589\u3058\u308B"
        },
        confirm: function(e) {
            return "\u78BA\u8A8D"
        },
        "unknown-item": function(e) {
            return "\u4E0D\u660E\u306A\u30A2\u30A4\u30C6\u30E0"
        },
        "save-in": function(e) {
            return "\u4FDD\u5B58"
        },
        "select-a-vault": function(e) {
            return "\u4FDD\u7BA1\u5EAB\u3092\u9078\u629E"
        },
        "locked-title": function(e) {
            return "1Password \u306F\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059"
        },
        "locked-message": function(e) {
            return "\u5F15\u304D\u7D9A\u304D1Password\u3067\u4FDD\u5B58\u3059\u308B\u306B\u306F\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "offline-title": function(e) {
            return "\u3042\u306A\u305F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u30AA\u30D5\u30E9\u30A4\u30F3\u3067\u3059\u3002"
        },
        "offline-message": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u3066\u30AA\u30F3\u30E9\u30A4\u30F3\u306B\u306A\u308B\u307E\u3067\u3001\u3053\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "\u30D6\u30E9\u30A6\u30B6\u306E\u30C4\u30FC\u30EB\u30D0\u30FC\u306E1Password\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u3066\u30011Password\u3092\u958B\u304D\u307E\u3059\u3002"
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return e.shortcut + " \u3092\u62BC\u3057\u3066\u30011Password\u3092\u958B\u304F\u3002"
        },
        "current-item": function(e) {
            return "\u73FE\u5728\u306E\u30A2\u30A4\u30C6\u30E0"
        },
        "updated-item": function(e) {
            return "\u66F4\u65B0\u3055\u308C\u305F\u30A2\u30A4\u30C6\u30E0"
        },
        "add-tag": function(e) {
            return "\u30BF\u30B0\u3092\u8FFD\u52A0"
        },
        "remove-tag": function(e) {
            return "\u30BF\u30B0\u3092\u524A\u9664"
        },
        "sso-info-banner": function(e) {
            return "\u30EA\u30F3\u30AF\u3055\u308C\u305F\u30ED\u30B0\u30A4\u30F3\u60C5\u5831\u3092\u6301\u3064\u65B0\u3057\u3044\u30A2\u30A4\u30C6\u30E0\u306F\u3001\u540C\u3058\u4FDD\u7BA1\u5EAB\u306B\u4FDD\u5B58\u3055\u308C\u3001\u540C\u3058\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"
        },
        "new-item": function(e) {
            return "\u65B0\u898F\u30A2\u30A4\u30C6\u30E0"
        },
        "update-existing": function(e) {
            return "\u65E2\u5B58\u306E\u3082\u306E\u3092\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"
        },
        "enable-privacy-header": function(e) {
            return "1Password\u306B\u8FFD\u52A0"
        },
        "enable-privacy-description": function(e) {
            return "1Password\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u652F\u6255\u3046\u5834\u6240\u306E\u3069\u3053\u306B\u3067\u3082Privacy Cards\u3092\u4F5C\u6210\u3057\u3066\u5165\u529B\u3057\u3001\u5C06\u6765\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u52A0\u76DF\u5E97\u30AB\u30FC\u30C9\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002"
        },
        "enable-privacy-choose-account": function(e) {
            return "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u9078\u629E"
        },
        "enable-privacy-add-button": function(e) {
            return "1Password \u306B\u8FFD\u52A0"
        },
        "enable-privacy-error": function(e) {
            return "Privacy\u306E\u7D71\u5408\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002\u5F8C\u3067\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "\u7D71\u5408\u3092\u6709\u52B9\u306B\u3059\u308B\u305F\u3081\u3001\u9078\u629E\u3057\u305F\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "\u7D71\u5408\u3092\u6709\u52B9\u306B\u3059\u308B\u305F\u3081\u30011Password \u3092\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-enable-header": function(e) {
            return "\u9023\u643A\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u305B\u3093"
        },
        "privacy-error-header": function(e) {
            return "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u3068\u9023\u643A\u3059\u308B\u306B\u306F\u30011Password\u30E1\u30F3\u30D0\u30FC\u30B7\u30C3\u30D7\u304C\u5FC5\u8981\u3067\u3059\u3002"
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Privacy.com\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u8CC7\u91D1\u8ABF\u9054\u5148\u304C1\u3064\u4EE5\u4E0A\u7D10\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u3001\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-unexpected-error": function(e) {
            return "\u4E88\u671F\u3057\u306A\u3044\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002support@1password.com \u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "\u6BCE\u6708"
        },
        "privacy-monthly": function(e) {
            return "\u6BCE\u6708"
        },
        "privacy-annually": function(e) {
            return "\u6BCE\u5E74"
        },
        "privacy-transaction": function(e) {
            return "\u53D6\u5F15\u3054\u3068"
        },
        "privacy-forever": function(e) {
            return "\u6C38\u4E45"
        },
        "privacy-single-use": function(e) {
            return "\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B9"
        },
        "privacy-header": function(e) {
            return "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30AB\u30FC\u30C9\u3092\u4F5C\u6210"
        },
        "privacy-card-name-label": function(e) {
            return "\u30AB\u30FC\u30C9\u540D\u79F0"
        },
        "privacy-spend-limit-label": function(e) {
            return "\u652F\u51FA\u9650\u5EA6\u984D\u306E\u8A2D\u5B9A"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "\u983B\u5EA6"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "\u652F\u51FA\u9650\u5EA6\u984D"
        },
        "privacy-funding-account-label": function(e) {
            return "\u8CC7\u91D1\u8ABF\u9054\u5148"
        },
        "privacy-save-label": function(e) {
            return "1Password\u306B\u4FDD\u5B58\u3059\u308B"
        },
        "privacy-create-button": function(e) {
            return "\u4F5C\u6210\u3068\u8A18\u5165"
        },
        "privacy-error-integration-disabled": function(e) {
            return "\u958B\u767A\u8005\u30C4\u30FC\u30EB\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\u304B\u3089Privacy\u306E\u7D71\u5408\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-app-locked": function(e) {
            return "1Password\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u304B\u3089\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-vault-locked": function(e) {
            return "\u4FDD\u7BA1\u5EAB\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u3066\u304B\u3089\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-no-vault-selected": function(e) {
            return "\u4FDD\u7BA1\u5EAB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-save-failed": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58\u3067\u304D\u307E\u305B\u3093\u3002\u4FDD\u7BA1\u5EAB\u306E\u30ED\u30C3\u30AF\u304C\u89E3\u9664\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u3001\u3082\u3046\u4E00\u5EA6\u8A66\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-empty-card-name": function(e) {
            return "\u30AB\u30FC\u30C9\u306E\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-card-name-too-large": function(e) {
            return "\u30AB\u30FC\u30C9\u306E\u540D\u524D\u3092\u77ED\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-empty-limit": function(e) {
            return "\u30AB\u30FC\u30C9\u306E\u5229\u7528\u9650\u5EA6\u984D\u3092\u63D0\u793A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-limit-too-large": function(e) {
            return "\u30AB\u30FC\u30C9\u306E\u5229\u7528\u9650\u5EA6\u984D\u3092\u4E0B\u3052\u3066\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "URL\u3092\u89E3\u6790\u3067\u304D\u307E\u305B\u3093\u3002"
        },
        "privacy-error-http-error": function(e) {
            return "Privacy\u306B\u5230\u9054\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u3054\u78BA\u8A8D\u306E\u4E0A\u3001\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-invalid-api-key": function(e) {
            return "Privacy\u306E\u8A8D\u8A3C\u304C\u3067\u304D\u307E\u305B\u3093\u3002API\u30AD\u30FC\u3092\u3054\u78BA\u8A8D\u306E\u4E0A\u3001\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002"
        },
        "privacy-error-api-error-with-message": function(e) {
            return "\u30AB\u30FC\u30C9\u4F5C\u6210\u30A8\u30E9\u30FC\uFF1A" + e.message
        },
        "privacy-error-api-error": function(e) {
            return "\u30AB\u30FC\u30C9\u4F5C\u6210\u30A8\u30E9\u30FC\u3002"
        },
        "privacy-error-brain-error": function(e) {
            return "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30AB\u30FC\u30C9\u304B\u3089\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u306E\u9805\u76EE\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093\u3002"
        },
        "privacy-error-default": function(e) {
            return "\u4E88\u671F\u3057\u306A\u3044\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002"
        },
        "notification-save-in": function(e) {
            return "\u6B21\u306B\u4FDD\u5B58:"
        },
        "notification-save-secondary": function(e) {
            return e.host + " \u30ED\u30B0\u30A4\u30F3\u3092 1Password \u306B\u4FDD\u5B58\u3057\u307E\u3059\u304B?"
        },
        "notification-save-save": function(e) {
            return "\u4FDD\u5B58"
        },
        "ssh-title": function(e) {
            return "SSH\u30AD\u30FC\u306E\u4F5C\u6210\u3068\u5165\u529B"
        },
        "ssh-create-button": function(e) {
            return "\u4F5C\u6210\u3068\u5165\u529B"
        },
        "ssh-error-message": function(e) {
            return "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002support@1password.com\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044"
        },
        "unexpected-error": function(e) {
            return "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002support@1password.com\u307E\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044"
        },
        "login-duplicate": function(e) {
            return "\u3059\u3067\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059"
        },
        "social-login-linked": function(e) {
            return e.item + "\u306F\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\uFF1A"
        },
        "social-login-locked": function(e) {
            return "\u30D6\u30E9\u30A6\u30B6\u306E\u30C4\u30FC\u30EB\u30D0\u30FC\u306B\u3042\u308B1Password\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u3066\u3001\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3057\u307E\u3059\u3002"
        },
        "social-login-no-items": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u30A2\u30A4\u30C6\u30E0\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"
        },
        "social-login-provider-used": function(e) {
            return e.provider + " \u306F\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3057\u305F\uFF1A"
        },
        "social-login-save-in-1password": function(e) {
            return "1Password\u306B\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F"
        },
        "social-login-save-item": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58"
        },
        "social-login-save-item-locked": function(e) {
            return "\u30ED\u30C3\u30AF\u89E3\u9664\u3057\u3066\u4FDD\u5B58"
        },
        "social-login-sign-in-with": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return e.title + "\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30A4\u30F3\u30A4\u30F3\uFF1A" + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3"
        },
        "social-login-select-provider": function(e) {
            return e.provider + "\u30ED\u30B0\u30A4\u30F3\u3092\u9078\u629E"
        },
        "social-login-add-existing": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u65E2\u5B58\u306E\u30ED\u30B0\u30A4\u30F3\u3092\u8FFD\u52A0\u3002"
        },
        "social-login-sign-in-with-label": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u305F\u30ED\u30B0\u30A4\u30F3\u3092\u9078\u629E\u3057\u307E\u3059"
        },
        "social-login-save-provider-only-title": function(e) {
            return "\u4E00\u822C\u7684\u306A" + e.provider + "\u30A2\u30A4\u30C6\u30E0\u3068\u3057\u3066\u4FDD\u5B58"
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return e.provider + "\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u305F\u3053\u3068\u3060\u3051\u3092\u4FDD\u5B58\u3057\u307E\u3059"
        },
        "shell-plugin-create-title": function(e) {
            return "Shell Plugins\u30A2\u30A4\u30C6\u30E0\u3092\u65B0\u898F\u4F5C\u6210\u3059\u308B"
        },
        "shell-plugin-create-button": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0\u3092\u4FDD\u5B58"
        },
        "autosave-title-save": function(e) {
            return e.item + "\u3092\u4FDD\u5B58\u3059\u308B"
        },
        "autosave-title-saved": function(e) {
            return e.item + "\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F"
        },
        "autosave-title-update": function(e) {
            return e.item + "\u3092\u66F4\u65B0\u3059\u308B"
        },
        "autosave-title-updated": function(e) {
            return e.item + "\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F"
        },
        "autosave-save-type-generic": function(e) {
            return "\u30A2\u30A4\u30C6\u30E0"
        },
        "autosave-save-type-login": function(e) {
            return "\u30ED\u30B0\u30A4\u30F3"
        },
        "autosave-save-type-credit-card": function(e) {
            return "\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9"
        },
        "autosave-save-type-identity": function(e) {
            return "\u500B\u4EBA\u60C5\u5831"
        }
    },
    ko: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + "\uC774(\uAC00) 1Password\uC5D0 \uC800\uC7A5\uB428"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return e.platformName + "\uC6A9 1Password \uC178 \uD50C\uB7EC\uADF8\uC778 \uC0AC\uC6A9 \uAC00\uB2A5"
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password\uC5D0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password\uAC00 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uAE08\uC744 \uD574\uC81C\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password\uB294 \uC774\uC81C \uC790\uACA9 \uC99D\uBA85\uC744 \uC790\uB3D9\uC73C\uB85C \uCC44\uC6B4 \uD6C4\uC5D0 \uC790\uB3D9\uC73C\uB85C \uB85C\uADF8\uC778\uD569\uB2C8\uB2E4."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "\uC9C0\uCD9C \uD55C\uB3C4\uC758 \uAE30\uAC04\uC774 \uD544\uC694\uD569\uB2C8\uB2E4"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Brex.com\uACFC \uD1B5\uC2E0\uD558\uB294 \uC911 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "\uB354 \uBE60\uB974\uAC8C \uB85C\uADF8\uC778\uD558\uB294 \uBC29\uBC95"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "\uC774 \uC6F9\uC0AC\uC774\uD2B8\uC758 \uBCF4\uC548 \uCE68\uD574\uB85C \uC778\uD558\uC5EC \uD68C\uC6D0\uB2D8\uC758 \uD604\uC7AC \uBE44\uBC00\uBC88\uD638\uAC00 \uC704\uD5D8\uC5D0 \uCC98\uD588\uC2B5\uB2C8\uB2E4."
        },
        "A-title-is-required": function(e) {
            return "\uC81C\uBAA9\uC740 \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4"
        },
        "Add-account": function(e) {
            return "\uACC4\uC815 \uCD94\uAC00"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "1Password \uBE0C\uB77C\uC6B0\uC800 \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uACC4\uC815 \uCD94\uAC00"
        },
        "All-vaults-are-disabled-": function(e) {
            return "\uBAA8\uB4E0 \uAE08\uACE0\uAC00 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
        },
        "An-error-has-occurred": function(e) {
            return "\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. support@1password.com\uC73C\uB85C \uBB38\uC758\uD574 \uC8FC\uC138\uC694"
        },
        "Assign-to-Account": function(e) {
            return "\uACC4\uC815\uC5D0 \uD560\uB2F9"
        },
        Back: function(e) {
            return "\uB4A4\uB85C"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Brex \uCE74\uB4DC\uB294 Brex.com\uC5D0\uC11C \uBCF4\uAD00 \uBC0F \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex\uAC00 \uC774 \uCE74\uB4DC\uC5D0 \uAC70\uB798 \uBA54\uBAA8\uB97C \uC790\uB3D9\uC73C\uB85C \uC785\uB825\uD569\uB2C8\uB2E4."
        },
        Cancel: function(e) {
            return "\uCDE8\uC18C"
        },
        "Change-now": function(e) {
            return "\uC9C0\uAE08 \uBCC0\uACBD"
        },
        "Change-this-compromised-password": function(e) {
            return "\uBCF4\uC548\uC774 \uCE68\uD574\uB41C \uC774 \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
        },
        "Choose-an-account": function(e) {
            return "\uACC4\uC815 \uC120\uD0DD"
        },
        Close: function(e) {
            return "\uB2EB\uAE30"
        },
        "Conceal-previous-value": function(e) {
            return "\uC774\uC804 \uAC12 \uC228\uAE30\uAE30"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "\uC778\uD130\uB137\uC5D0 \uC5F0\uACB0\uD55C \uB2E4\uC74C, \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Privacy \uCE74\uB4DC\uC5D0 \uC5F0\uACB0\uD558\uB294 \uC911\u2026"
        },
        "Contact-Support": function(e) {
            return "\uACE0\uAC1D \uC9C0\uC6D0 \uBB38\uC758"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "\uC9C0\uC6D0\uD300\uC5D0 \uC5F0\uB77D\uD558\uC5EC \uB3C4\uC6C0\uC744 \uC694\uCCAD\uD558\uACE0, \uAE30\uBCF8 \uACC4\uC815\uC5D0 \uBB38\uC81C\uAC00 \uC788\uB2E4\uACE0 \uB9D0\uC500\uD574 \uC8FC\uC138\uC694."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "\uC9C0\uC6D0\uD300\uC5D0 \uC5F0\uB77D\uD558\uC5EC \uB3C4\uC6C0\uC744 \uC694\uCCAD\uD558\uACE0, \uC0DD\uC131\uB41C \uBE44\uBC00\uBC88\uD638 \uAE08\uACE0\uC5D0 \uBB38\uC81C\uAC00 \uC788\uB2E4\uACE0 \uB9D0\uC500\uD574 \uC8FC\uC138\uC694."
        },
        "Create---Fill": function(e) {
            return "\uC0DD\uC131 \uBC0F \uCC44\uC6B0\uAE30"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Brex \uBCA4\uB354 \uCE74\uB4DC \uB9CC\uB4E4\uAE30\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "\uB9C8\uC2A4\uD0B9\uB41C \uC774\uBA54\uC77C \uC0DD\uC131"
        },
        Custom: function(e) {
            return "\uC0AC\uC6A9\uC790 \uC9C0\uC815"
        },
        Dismiss: function(e) {
            return "\uCDE8\uC18C"
        },
        "Don-t-ask-again": function(e) {
            return "\uB2E4\uC2DC \uBB3B\uC9C0 \uC54A\uAE30"
        },
        "Download-1Password-8": function(e) {
            return "1Password 8 \uB2E4\uC6B4\uB85C\uB4DC"
        },
        Edit: function(e) {
            return "\uD3B8\uC9D1"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "\uB2EC\uB7EC\uB85C \uAE08\uC561\uC744 \uC785\uB825\uD558\uC138\uC694"
        },
        Error: function(e) {
            return "\uC624\uB958"
        },
        "Existing-items": function(e) {
            return "\uAE30\uC874 \uD56D\uBAA9"
        },
        "Failed-to-load-item-": function(e) {
            return "\uD56D\uBAA9\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."
        },
        "Failed-to-save-item-": function(e) {
            return "\uD56D\uBAA9\uC744 \uC800\uC7A5\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."
        },
        "Fill-Email": function(e) {
            return "\uC774\uBA54\uC77C \uCC44\uC6B0\uAE30"
        },
        "Funding-Source": function(e) {
            return "\uC790\uAE08 \uCD9C\uCC98"
        },
        "Get-Help-": function(e) {
            return "\uB3C4\uC6C0 \uBC1B\uAE30\u2026"
        },
        "Got-it": function(e) {
            return "\uD655\uC778"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "\uD56D\uBAA9\uC758 \uC81C\uBAA9\uC5D0 \uB300\uD55C \uC785\uB825\uB780"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "\uC77C\uD68C\uC6A9 \uBE44\uBC00\uBC88\uD638\uAC00 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
        },
        "Learn-more-": function(e) {
            return "\uC790\uC138\uD788 \uBCF4\uAE30\u2026"
        },
        "Loading-": function(e) {
            return "\uBD88\uB7EC\uC624\uB294 \uC911\u2026"
        },
        Lock: function(e) {
            return "\uC7A0\uAE08"
        },
        "Lock-Card": function(e) {
            return "\uCE74\uB4DC \uC7A0\uAE08"
        },
        "Lock-card-is-required": function(e) {
            return "\uCE74\uB4DC \uC7A0\uAE08\uC774 \uD544\uC694\uD569\uB2C8\uB2E4"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "\uC774 \uC0AC\uC774\uD2B8\uC758 \uB85C\uADF8\uC778 \uC815\uBCF4\uAC00 \uD3EC\uD568\uB41C 1Password \uACC4\uC815\uC774 \uC7A0\uACA8 \uC788\uC9C0 \uC54A\uC740\uC9C0 \uD655\uC778\uD558\uC138\uC694."
        },
        "New-Item": function(e) {
            return "\uC0C8 \uD56D\uBAA9"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "\uB2E4\uC74C \uB2E8\uACC4: SSH \uC5D0\uC774\uC804\uD2B8 \uC124\uC815"
        },
        "No-logins-found": function(e) {
            return "\uB85C\uADF8\uC778 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
        },
        "No-passkeys-found": function(e) {
            return "\uD328\uC2A4 \uD0A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
        },
        None: function(e) {
            return "\uC5C6\uC74C"
        },
        OK: function(e) {
            return "\uD655\uC778"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "\uC800\uC7A5\uD558\uC2DC\uBA74 \uC774 \uC815\uBCF4\uAC00 \uAE30\uC5B5\uB429\uB2C8\uB2E4."
        },
        Overwrite: function(e) {
            return "\uB36E\uC5B4\uC4F0\uAE30"
        },
        "Overwrite-one-time-password-": function(e) {
            return "\uC77C\uD68C\uC6A9 \uBE44\uBC00\uBC88\uD638\uB97C \uB36E\uC5B4\uC4F8\uAE4C\uC694?"
        },
        "Passkey-saved": function(e) {
            return "\uC800\uC7A5\uB41C \uD328\uC2A4 \uD0A4"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "1Password\uC5D0 \uB85C\uADF8\uC778\uD558\uC5EC \uC628\uB77C\uC778\uC5D0\uC11C \uBCF4\uC548\uC744 \uC720\uC9C0\uD558\uACE0 \uAC04\uD3B8\uD558\uAC8C \uBE44\uBC00\uBC88\uD638\uB97C \uC800\uC7A5\uD558\uACE0 \uC790\uB3D9\uC73C\uB85C \uC785\uB825\uD558\uC138\uC694."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\uBE0C\uB77C\uC6B0\uC800\uC758 \uB3C4\uAD6C \uBAA8\uC74C\uC5D0 \uC788\uB294 1Password \uC544\uC774\uCF58\uC744 \uB20C\uB7EC\uC11C \uC7A0\uAE08 \uD574\uC81C\uD569\uB2C8\uB2E4."
        },
        Previous: function(e) {
            return "\uC774\uC804"
        },
        "Privacy-Card": function(e) {
            return "Privacy \uCE74\uB4DC"
        },
        "Reason-for-card": function(e) {
            return "\uCE74\uB4DC \uC774\uC720"
        },
        Regenerate: function(e) {
            return "\uB2E4\uC2DC \uC0DD\uC131"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return e.secondsLeft + "\uCD08 \uD6C4 \uB2E4\uC2DC \uC0DD\uC131"
        },
        "Reveal-previous-value": function(e) {
            return "\uC774\uC804 \uAC12 \uD45C\uC2DC"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "\uD45C\uC2DC\uD558\uC5EC \uC774\uC804 \uAC12 \uBCF4\uAE30"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH \uD0A4\uAC00 \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB85C\uCEEC\uC5D0\uC11C \uC774 \uD0A4\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 1Password\xA08\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 1Password SSH \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uC815\uD558\uC138\uC694."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH \uD0A4\uAC00 \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB85C\uCEEC\uC5D0\uC11C \uC774 \uD0A4\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 1Password SSH \uC5D0\uC774\uC804\uD2B8\uB97C \uC124\uC815\uD558\uC138\uC694."
        },
        Save: function(e) {
            return "\uC800\uC7A5"
        },
        "Save-Item": function(e) {
            return "\uD56D\uBAA9 \uC800\uC7A5"
        },
        "Save-in-1Password-": function(e) {
            return "1Password\uC5D0 \uC800\uC7A5\uD560\uAE4C\uC694?"
        },
        "Save-item": function(e) {
            return "\uD56D\uBAA9 \uC800\uC7A5"
        },
        "Save-one-time-password": function(e) {
            return "\uC77C\uD68C\uC6A9 \uBE44\uBC00\uBC88\uD638 \uC800\uC7A5"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "\uB85C\uADF8\uC778 \uACFC\uC815\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uC785\uB825\uB418\uB294 \uC77C\uD68C\uC6A9 \uBE44\uBC00\uBC88\uD638\uB97C \uC800\uC7A5\uD569\uB2C8\uB2E4."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "1Password\uC758 \uC815\uBCF4 \uB300\uD654 \uC0C1\uC790\uB97C \uC800\uC7A5\uD558\uAC70\uB098 \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4"
        },
        "Save-passkey": function(e) {
            return "\uD328\uC2A4 \uD0A4 \uC800\uC7A5"
        },
        "Saved-one-time-password": function(e) {
            return "\uC77C\uD68C\uC6A9 \uBE44\uBC00\uBC88\uD638 \uC800\uC7A5 \uC644\uB8CC"
        },
        "Select-account": function(e) {
            return "\uACC4\uC815 \uC120\uD0DD"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\uBE0C\uB77C\uC6B0\uC800\uC758 \uB3C4\uAD6C \uBAA8\uC74C\uC5D0 \uC788\uB294 1Password \uC544\uC774\uCF58\uC744 \uC120\uD0DD\uD558\uC5EC \uC7A0\uAE08 \uD574\uC81C\uD569\uB2C8\uB2E4."
        },
        "Session-expired-for-tab-": function(e) {
            return "\uD0ED\uC5D0 \uB300\uD55C \uC138\uC158\uC774 \uB9CC\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
        },
        "Set-Spending-Limit": function(e) {
            return "\uC9C0\uCD9C \uD55C\uB3C4 \uC124\uC815"
        },
        "Set-up-SSH-Agent": function(e) {
            return "SSH \uC5D0\uC774\uC804\uD2B8 \uC124\uC815"
        },
        "Sign-in": function(e) {
            return "\uB85C\uADF8\uC778"
        },
        "Sign-in-to-1Password": function(e) {
            return "1Password\uC5D0 \uB85C\uADF8\uC778"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "\uBE0C\uB77C\uC6B0\uC800 \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD55C \uBC88 \uD074\uB9AD\uC73C\uB85C \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uB85C\uADF8\uC778\uD558\uACE0, \uAC04\uD3B8\uD558\uAC8C \uC815\uBCF4\uB97C \uC800\uC7A5\uD558\uBA70, \uC0C8\uB85C\uC6B4 \uBE44\uBC00\uBC88\uD638\uB97C \uC0DD\uC131\uD558\uC138\uC694."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "\uD328\uC2A4 \uD0A4\uB85C \uB85C\uADF8\uC778"
        },
        "Something-went-wrong": function(e) {
            return "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4"
        },
        "Spending-Limit": function(e) {
            return "\uC9C0\uCD9C \uD55C\uB3C4"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "3\uB2E8\uACC4: \uC0C8\uB85C\uC6B4 \uB85C\uADF8\uC778 \uD56D\uBAA9\uC744 \uAC80\uD1A0 \uB610\uB294 \uD3B8\uC9D1\uD55C \uB2E4\uC74C, \uC800\uC7A5\uD569\uB2C8\uB2E4."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "\uD68C\uC6D0\uB2D8\uC758 " + e.credentialName + "\uC744(\uB97C) 1Password\uC5D0 \uC800\uC7A5\uD558\uACE0 " + e.authType + "\uC744(\uB97C) \uD1B5\uD558\uC5EC " + e.platformName + " CLI\uB97C \uC778\uC99D\uD569\uB2C8\uB2E4."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "Brex\uC640\uC758 \uD1B5\uD569\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4. 1Password.com\uC5D0\uC11C \uB2E4\uC2DC \uC5F0\uACB0\uD558\uC138\uC694"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "\uC774 \uD56D\uBAA9\uC758 \uC77C\uD68C\uC6A9 \uBE44\uBC00\uBC88\uD638\uAC00 \uB300\uCCB4\uB429\uB2C8\uB2E4."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "\uCE74\uB4DC \uC774\uC720\uB294 \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "\uD328\uC2A4 \uD0A4 \uC0DD\uC131 \uC694\uCCAD \uC2DC\uAC04\uC774 \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4."
        },
        "The-spending-limit-is-required": function(e) {
            return "\uC9C0\uCD9C \uD55C\uB3C4\uB294 \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "\uADF8\uB7F0 \uB2E4\uC74C, \uC624\uD504\uB77C\uC778 \uC9C0\uD45C( <offlineIndicator /> )\uB97C \uD0ED\uD558\uACE0 \uB85C\uADF8\uC778\uC744 \uC644\uB8CC\uD55C \uD6C4 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC800\uC7A5\uD569\uB2C8\uB2E4."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return e.item + "\uC744(\uB97C) \uC800\uC7A5\uD558\uB824\uBA74 \uBA3C\uC800 1Password\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uC138\uC694."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "\uD328\uC2A4\uD0A4\uB97C \uC800\uC7A5\uD558\uB824\uBA74 \uBA3C\uC800 1Password\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uC138\uC694."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "\uD328\uC2A4\uD0A4\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 \uBA3C\uC800 1Password\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uC138\uC694."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID \uB610\uB294 Apple Watch"
        },
        "Try-Again": function(e) {
            return "\uB2E4\uC2DC \uC2DC\uB3C4"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "1Password\uB97C \uC7A0\uADFC \uB2E4\uC74C, \uC7A0\uAE08\uC744 \uD574\uC81C\uD558\uACE0 \uB2E4\uC2DC \uCC44\uC6CC \uBCF4\uC138\uC694."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "\uCE74\uB4DC\uB97C \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "Unable-to-fill-password": function(e) {
            return "\uBE44\uBC00\uBC88\uD638\uB97C \uCC44\uC6B8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
        },
        "Unlock-1Password": function(e) {
            return "1Password \uC7A0\uAE08 \uD574\uC81C"
        },
        "Unlock-to-save": function(e) {
            return "\uC7A0\uAE08 \uD574\uC81C\uD558\uACE0 \uC800\uC7A5"
        },
        "Unlocking-1Password-": function(e) {
            return "1Password\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uB294 \uC911\u2026"
        },
        Update: function(e) {
            return "\uC5C5\uB370\uC774\uD2B8"
        },
        "Update-Existing": function(e) {
            return "\uAE30\uC874 \uC815\uBCF4 \uC5C5\uB370\uC774\uD2B8"
        },
        "Update-Item": function(e) {
            return "\uD56D\uBAA9 \uC5C5\uB370\uC774\uD2B8"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "2\uB2E8\uACC4 \uC778\uC99D\uC5D0 1Password \uC0AC\uC6A9"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "1Password\uB97C \uC0AC\uC6A9\uD558\uC5EC " + e.authType + "\uC744(\uB97C) \uD1B5\uD574 " + e.platformName + " CLI\uB97C \uC778\uC99D\uD569\uB2C8\uB2E4."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "\uBCF4\uC548 \uD0A4 \uB610\uB294 \uB2E4\uB978 \uD328\uC2A4 \uD0A4 \uC0AC\uC6A9"
        },
        "View-settings": function(e) {
            return "\uC124\uC815 \uBCF4\uAE30"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC5EC \uC81C\uC548\uB41C \uBE44\uBC00\uBC88\uD638\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "\uC5B8\uC81C\uB4E0\uC9C0 \uC124\uC815\uC5D0\uC11C \uC774 \uC120\uD0DD\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "\uC124\uC815\uC5D0\uC11C \uACC4\uC815\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "\uC774 \uBE44\uBC00\uBC88\uD638\uB97C \uCC44\uC6B0\uB824\uBA74 \uD68C\uC6D0\uB2D8\uC758 " + e.accountName + " \uACC4\uC815\uC744 \uC7A0\uAE08 \uD574\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4. \uC7A0\uAE08\uC744 \uD574\uC81C\uD558\uACE0 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uBCF4\uC138\uC694."
        },
        "a--item-": function(e) {
            return e.item
        },
        "an--item-": function(e) {
            return e.item
        },
        email: function(e) {
            return "\uC774\uBA54\uC77C"
        },
        "every-month": function(e) {
            return "\uB9E4\uC6D4"
        },
        "every-quarter": function(e) {
            return "\uB9E4\uBD84\uAE30"
        },
        "every-transaction": function(e) {
            return "\uBAA8\uB4E0 \uAC70\uB798"
        },
        "every-year": function(e) {
            return "\uB9E4\uB144"
        },
        forever: function(e) {
            return "\uC601\uAD6C\uC801"
        },
        "in-1-Month": function(e) {
            return "1\uAC1C\uC6D4 \uD6C4"
        },
        "in-1-Year": function(e) {
            return "1\uB144 \uD6C4"
        },
        "in-7-Days": function(e) {
            return "7\uC77C \uD6C4"
        },
        "loading---": function(e) {
            return "\uBD88\uB7EC\uC624\uB294 \uC911..."
        },
        "one-time": function(e) {
            return "\uC77C\uD68C\uC131"
        },
        "one-time-password": function(e) {
            return "\uC77C\uD68C\uC6A9 \uBE44\uBC00\uBC88\uD638"
        },
        "system-authentication": function(e) {
            return "\uC2DC\uC2A4\uD15C \uC778\uC99D"
        },
        "auth-unfamiliar-website": function(e) {
            return "\uCE5C\uC219\uD558\uC9C0 \uC54A\uC740 \uC6F9\uC0AC\uC774\uD2B8"
        },
        "auth-type-code-to-fill": function(e) {
            return e.website + " " + e.type + "\uC758 \uC790\uB3D9 \uC785\uB825\uC744 \uC2B9\uC778\uD558\uB824\uBA74 " + e.code + "\uC744(\uB97C) \uC785\uB825\uD558\uC138\uC694."
        },
        "auth-filling-on-website": function(e) {
            return e.website + "\uC5D0\uC11C"
        },
        "auth-incorrect-code-entered": function(e) {
            return "\uC798\uBABB\uB41C \uCF54\uB4DC\uAC00 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4"
        },
        "auth-why-is-this-needed": function(e) {
            return "\uC774\uAC83\uC740 \uC65C \uD544\uC694\uD558\uB098\uC694?"
        },
        "item-use-suggested-password": function(e) {
            return "\uC81C\uC548\uB41C \uBE44\uBC00\uBC88\uD638 \uC0AC\uC6A9"
        },
        "item-create-privacy-card": function(e) {
            return "Privacy \uCE74\uB4DC \uB9CC\uB4E4\uAE30"
        },
        "item-create-email-alias": function(e) {
            return "\uB9C8\uC2A4\uD0B9\uB41C \uC774\uBA54\uC77C \uC0DD\uC131"
        },
        "item-type-credit-card": function(e) {
            return "\uC2E0\uC6A9\uCE74\uB4DC"
        },
        "item-type-identity": function(e) {
            return "\uC2E0\uC6D0 \uC815\uBCF4"
        },
        "item-type-unspecified": function(e) {
            return "\uD56D\uBAA9"
        },
        categories: function(e) {
            return "\uCE74\uD14C\uACE0\uB9AC"
        },
        "category-suggestions": function(e) {
            return "\uC81C\uC548"
        },
        "category-logins": function(e) {
            return "\uB85C\uADF8\uC778 \uC815\uBCF4"
        },
        "category-identities": function(e) {
            return "\uC2E0\uC6D0 \uC815\uBCF4"
        },
        "category-credit-cards": function(e) {
            return "\uC2E0\uC6A9\uCE74\uB4DC"
        },
        "category-generated-password": function(e) {
            return "\uC0DD\uC131\uB41C \uBE44\uBC00\uBC88\uD638"
        },
        "category-hide-on-this-page": function(e) {
            return "\uC774 \uD398\uC774\uC9C0\uC5D0\uC11C \uC228\uAE30\uAE30"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "\uB3C4\uAD6C \uBAA8\uC74C \uC544\uC774\uCF58\uC5D0\uC11C 1Password\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uC138\uC694."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return e.shortcut + "\uC744(\uB97C) \uB20C\uB7EC\uC11C 1Password\uB97C \uC7A0\uAE08 \uD574\uC81C\uD569\uB2C8\uB2E4"
        },
        "locked-request-unlock": function(e) {
            return "1Password \uC5F4\uAE30"
        },
        "notification-add-account": function(e) {
            return "\uB2E4\uC74C\uC5D0 \uACC4\uC815 \uCD94\uAC00"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "\uB098\uC911\uC5D0 1Password\uC5D0\uC11C \uACC4\uC815\uC744 \uCD94\uAC00 \uB610\uB294 \uC81C\uAC70\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4"
        },
        "notification-settings": function(e) {
            return "\uC124\uC815"
        },
        "notification-add-account-never": function(e) {
            return "\uC548 \uD568"
        },
        "notification-add-account-confirm": function(e) {
            return "\uCD94\uAC00"
        },
        "authorize-fill": function(e) {
            return e.host + "\uC5D0\uC11C 1Password \uD56D\uBAA9\uC744 \uCC44\uC6B0\uB824\uBA74 \uD655\uC778\uC744 \uD074\uB9AD\uD558\uC138\uC694"
        },
        "authorize-fill-brex": function(e) {
            return "'\uD655\uC778'\uC744 \uD074\uB9AD\uD558\uC5EC Brex \uCE74\uB4DC\uB97C \uC0DD\uC131\uD558\uACE0, " + e.host + "\uC5D0\uC11C 1Password\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uB3D9\uC73C\uB85C \uAE30\uC785\uD558\uC138\uC694"
        },
        "authorize-fill-privacy": function(e) {
            return "'\uD655\uC778'\uC744 \uD074\uB9AD\uD558\uC5EC Privacy \uCE74\uB4DC\uB97C \uC0DD\uC131\uD558\uACE0, " + e.host + "\uC5D0\uC11C 1Password\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC790\uB3D9\uC73C\uB85C \uAE30\uC785\uD558\uC138\uC694"
        },
        "authorize-fill-protocol": function(e) {
            return `1Password \uACBD\uACE0: \uC774 \uD398\uC774\uC9C0\uB294 \uBCF4\uC548\uC774 \uC548 \uB418\uB294 \uD398\uC774\uC9C0(HTTP)\uC774\uBA70, \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC81C\uCD9C\uB41C \uC815\uBCF4\uB97C \uC7A0\uC7AC\uC801\uC73C\uB85C \uBCF4\uACE0 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 

\uADF8\uB798\uB3C4 \uC774 \uD56D\uBAA9\uC744 \uAE30\uC785\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`
        },
        "tooltip-close-1password": function(e) {
            return "\uB2EB\uAE30"
        },
        "tooltip-open-1password": function(e) {
            return "\uC5F4\uAE30"
        },
        "tooltip-no-items": function(e) {
            return "\uD45C\uC2DC\uD560 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `\uBE0C\uB77C\uC6B0\uC800\uC758 \uB3C4\uAD6C \uBAA8\uC74C\uC5D0 \uC788\uB294 1Password
\uC544\uC774\uCF58\uC744 \uB20C\uB7EC\uC11C \uC7A0\uAE08 \uD574\uC81C\uD569\uB2C8\uB2E4`
        },
        "tooltip-unlock-1password": function(e) {
            return "1Password \uC7A0\uAE08 \uD574\uC81C"
        },
        Title: function(e) {
            return "\uC81C\uBAA9"
        },
        "save-in-header": function(e) {
            return "\uC800\uC7A5 \uC704\uCE58"
        },
        "save-item": function(e) {
            return "\uD56D\uBAA9 \uC800\uC7A5"
        },
        "update-item": function(e) {
            return "\uD56D\uBAA9 \uC5C5\uB370\uC774\uD2B8"
        },
        "select-item": function(e) {
            return "\uD56D\uBAA9 \uC120\uD0DD"
        },
        "Save-new-Login": function(e) {
            return "\uC0C8 \uB85C\uADF8\uC778 \uC815\uBCF4 \uC800\uC7A5"
        },
        cancel: function(e) {
            return "\uCDE8\uC18C"
        },
        close: function(e) {
            return "\uB2EB\uAE30"
        },
        confirm: function(e) {
            return "\uD655\uC778"
        },
        "unknown-item": function(e) {
            return "\uC54C \uC218 \uC5C6\uB294 \uD56D\uBAA9"
        },
        "save-in": function(e) {
            return "\uC800\uC7A5 \uC704\uCE58"
        },
        "select-a-vault": function(e) {
            return "\uAE08\uACE0 \uC120\uD0DD"
        },
        "locked-title": function(e) {
            return "1Password\uAC00 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4"
        },
        "locked-message": function(e) {
            return "\uACC4\uC18D 1Password\uB97C \uC0AC\uC6A9\uD574 \uC800\uC7A5\uD558\uB824\uBA74 \uACC4\uC815\uC744 \uC7A0\uAE08 \uD574\uC81C\uD558\uC138\uC694."
        },
        "offline-title": function(e) {
            return "\uACC4\uC815\uC774 \uC624\uD504\uB77C\uC778 \uC0C1\uD0DC\uC785\uB2C8\uB2E4."
        },
        "offline-message": function(e) {
            return "\uB85C\uADF8\uC778\uD558\uACE0 \uC628\uB77C\uC778 \uC0C1\uD0DC\uC77C \uB54C\uAE4C\uC9C0 \uC774 \uD56D\uBAA9\uC744 \uC800\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "\uBE0C\uB77C\uC6B0\uC800\uC758 \uB3C4\uAD6C \uBAA8\uC74C\uC5D0 \uC788\uB294 1Password \uC544\uC774\uCF58\uC744 \uB20C\uB7EC\uC11C 1Password\uB97C \uC5FD\uB2C8\uB2E4."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return e.shortcut + "\uC744(\uB97C) \uB20C\uB7EC\uC11C 1Password\uB97C \uC5FD\uB2C8\uB2E4."
        },
        "current-item": function(e) {
            return "\uD604\uC7AC \uD56D\uBAA9"
        },
        "updated-item": function(e) {
            return "\uC5C5\uB370\uC774\uD2B8\uB41C \uD56D\uBAA9"
        },
        "add-tag": function(e) {
            return "\uD0DC\uADF8 \uCD94\uAC00"
        },
        "remove-tag": function(e) {
            return "\uD0DC\uADF8 \uC81C\uAC70"
        },
        "sso-info-banner": function(e) {
            return "\uC5F0\uACB0\uB41C \uB85C\uADF8\uC778 \uC815\uBCF4\uAC00 \uC788\uB294 \uC0C8\uB85C\uC6B4 \uD56D\uBAA9\uC740 \uB3D9\uC77C\uD55C \uAE08\uACE0\uC5D0 \uC800\uC7A5\uB418\uACE0, \uB3D9\uC77C\uD55C \uACC4\uC815\uC5D0 \uC704\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4."
        },
        "new-item": function(e) {
            return "\uC0C8 \uD56D\uBAA9"
        },
        "update-existing": function(e) {
            return "\uAE30\uC874 \uC815\uBCF4 \uC5C5\uB370\uC774\uD2B8"
        },
        "enable-privacy-header": function(e) {
            return "1Password\uC5D0 \uCD94\uAC00"
        },
        "enable-privacy-description": function(e) {
            return "\uC628\uB77C\uC778 \uACB0\uC81C\uAC00 \uAC00\uB2A5\uD55C \uC5B4\uB290 \uACF3\uC5D0\uC11C\uB4E0 1Password\uB97C \uC0AC\uC6A9\uD574 Privacy \uCE74\uB4DC\uB97C \uC0DD\uC131 \uBC0F \uAE30\uC785\uD558\uACE0, \uD6D7\uB0A0 \uC0AC\uC6A9\uD560 \uB54C\uB97C \uB300\uBE44\uD574 \uBA38\uCC9C\uD2B8 \uCE74\uB4DC\uB97C \uC800\uC7A5\uD574 \uB450\uC138\uC694."
        },
        "enable-privacy-choose-account": function(e) {
            return "\uACC4\uC815 \uC120\uD0DD"
        },
        "enable-privacy-add-button": function(e) {
            return "1Password\uC5D0 \uCD94\uAC00"
        },
        "enable-privacy-error": function(e) {
            return "Privacy \uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "\uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD558\uB824\uBA74 \uC120\uD0DD\uB41C \uACC4\uC815\uC744 \uC7A0\uAE08 \uD574\uC81C\uD558\uC138\uC694."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "\uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD558\uB824\uBA74 1Password\uB97C \uC7A0\uAE08 \uD574\uC81C\uD558\uC138\uC694."
        },
        "privacy-error-enable-header": function(e) {
            return "\uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
        },
        "privacy-error-header": function(e) {
            return "\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "Privacy\uC640 \uD1B5\uD569\uD558\uB824\uBA74 1Password \uBA64\uBC84\uC2ED\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "\uD68C\uC6D0\uB2D8\uC758 Privacy.com \uACC4\uC815\uC5D0 \uD558\uB098 \uC774\uC0C1\uC758 \uC790\uAE08\uC6D0\uC774 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD55C \uD6C4, \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "privacy-error-unexpected-error": function(e) {
            return "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. support@1password.com\uC73C\uB85C \uBB38\uC758\uD574 \uC8FC\uC138\uC694"
        },
        "privacy-error-okay-button": function(e) {
            return "\uD655\uC778"
        },
        "privacy-once": function(e) {
            return "\uB9E4\uC6D4"
        },
        "privacy-monthly": function(e) {
            return "\uB9E4\uC6D4"
        },
        "privacy-annually": function(e) {
            return "\uB9E4\uB144"
        },
        "privacy-transaction": function(e) {
            return "\uBAA8\uB4E0 \uAC70\uB798"
        },
        "privacy-forever": function(e) {
            return "\uC601\uAD6C\uC801"
        },
        "privacy-single-use": function(e) {
            return "\uB2E8\uC77C \uC0AC\uC6A9"
        },
        "privacy-header": function(e) {
            return "Privacy \uCE74\uB4DC \uB9CC\uB4E4\uAE30"
        },
        "privacy-card-name-label": function(e) {
            return "\uCE74\uB4DC \uC774\uB984"
        },
        "privacy-spend-limit-label": function(e) {
            return "\uC9C0\uCD9C \uD55C\uB3C4 \uC124\uC815"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "\uBE48\uB3C4"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "\uC9C0\uCD9C \uD55C\uB3C4"
        },
        "privacy-funding-account-label": function(e) {
            return "\uC790\uAE08 \uCD9C\uCC98"
        },
        "privacy-save-label": function(e) {
            return "1Password\uC5D0 \uC800\uC7A5"
        },
        "privacy-create-button": function(e) {
            return "\uC0DD\uC131 \uBC0F \uC790\uB3D9 \uAE30\uC785"
        },
        "privacy-error-integration-disabled": function(e) {
            return "\uAC1C\uBC1C\uC790 \uB3C4\uAD6C \uCEE8\uD14D\uC2A4\uD2B8 \uBA54\uB274\uC5D0\uC11C Privacy \uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD558\uC138\uC694."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password\uAC00 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uAE08\uC744 \uD574\uC81C\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "privacy-error-vault-locked": function(e) {
            return "\uC774 \uAE08\uACE0\uB294 \uC7A0\uACA8 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uAE08\uC744 \uD574\uC81C\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "\uAE08\uACE0\uB97C \uC120\uD0DD\uD558\uC138\uC694."
        },
        "privacy-error-save-failed": function(e) {
            return "\uD56D\uBAA9\uC744 \uC800\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uAE08\uACE0\uAC00 \uC7A0\uACA8 \uC788\uB294\uC9C0 \uD655\uC778\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "privacy-error-empty-card-name": function(e) {
            return "\uCE74\uB4DC\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "\uB354 \uC9E7\uC740 \uCE74\uB4DC \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."
        },
        "privacy-error-empty-limit": function(e) {
            return "\uCE74\uB4DC\uC758 \uC0AC\uC6A9 \uD55C\uB3C4\uB97C \uC785\uB825\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."
        },
        "privacy-error-limit-too-large": function(e) {
            return "\uB354 \uC801\uC740 \uCE74\uB4DC \uC9C0\uCD9C \uD55C\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "URL\uC744 \uAD6C\uBB38 \uBD84\uC11D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
        },
        "privacy-error-http-error": function(e) {
            return "Privacy\uC5D0 \uC811\uC18D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC778\uD130\uB137 \uC5F0\uACB0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "Privacy \uC778\uC99D\uC744 \uC218\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. API \uD0A4\uB97C \uD655\uC778\uD55C \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "\uCE74\uB4DC \uC0DD\uC131 \uC911 \uC624\uB958 \uBC1C\uC0DD: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "\uCE74\uB4DC \uC0DD\uC131 \uC911 \uC624\uB958 \uBC1C\uC0DD."
        },
        "privacy-error-brain-error": function(e) {
            return "Privacy \uCE74\uB4DC\uC5D0\uC11C \uC2E0\uC6A9\uCE74\uB4DC \uD56D\uBAA9\uC744 \uC0DD\uC131\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
        },
        "privacy-error-default": function(e) {
            return "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."
        },
        "notification-save-in": function(e) {
            return "\uC800\uC7A5 \uC704\uCE58"
        },
        "notification-save-secondary": function(e) {
            return "1Password\uC5D0 " + e.host + " \uB85C\uADF8\uC778 \uC815\uBCF4\uB97C \uC800\uC7A5\uD560\uAE4C\uC694?"
        },
        "notification-save-save": function(e) {
            return "\uC800\uC7A5"
        },
        "ssh-title": function(e) {
            return "SSH \uD0A4 \uC0DD\uC131 \uBC0F \uCC44\uC6B0\uAE30"
        },
        "ssh-create-button": function(e) {
            return "\uC0DD\uC131 \uBC0F \uCC44\uC6B0\uAE30"
        },
        "ssh-error-message": function(e) {
            return "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. support@1password.com\uC73C\uB85C \uBB38\uC758\uD574 \uC8FC\uC138\uC694"
        },
        "unexpected-error": function(e) {
            return "\uC608\uAE30\uCE58 \uC54A\uC740 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. support@1password.com\uC73C\uB85C \uBB38\uC758\uD574 \uC8FC\uC138\uC694"
        },
        "login-duplicate": function(e) {
            return "\uC774\uBBF8 \uC800\uC7A5\uB428"
        },
        "social-login-linked": function(e) {
            return e.item + "\uC758 \uC5F0\uACB0 \uB300\uC0C1:"
        },
        "social-login-locked": function(e) {
            return "\uBE0C\uB77C\uC6B0\uC800\uC758 \uB3C4\uAD6C \uBAA8\uC74C\uC5D0 \uC788\uB294 1Password \uC544\uC774\uCF58\uC744 \uB20C\uB7EC\uC11C \uC7A0\uAE08 \uD574\uC81C\uD569\uB2C8\uB2E4."
        },
        "social-login-no-items": function(e) {
            return "\uB85C\uADF8\uC778\uD560 \uD56D\uBAA9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
        },
        "social-login-provider-used": function(e) {
            return e.provider + "\uC774(\uAC00) \uB85C\uADF8\uC778\uD558\uB294 \uB370 \uC0AC\uC6A9\uB428:"
        },
        "social-login-save-in-1password": function(e) {
            return "1Password\uC5D0 \uC800\uC7A5\uD560\uAE4C\uC694?"
        },
        "social-login-save-item": function(e) {
            return "\uD56D\uBAA9 \uC800\uC7A5"
        },
        "social-login-save-item-locked": function(e) {
            return "\uC7A0\uAE08 \uD574\uC81C\uD558\uACE0 \uC800\uC7A5"
        },
        "social-login-sign-in-with": function(e) {
            return "\uB85C\uADF8\uC778 \uBC29\uC2DD\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return e.title + ": " + e.subtitle + "\uC744(\uB97C) \uD1B5\uD558\uC5EC \uB85C\uADF8\uC778"
        },
        "social-login-sign-in": function(e) {
            return "\uB85C\uADF8\uC778"
        },
        "social-login-select-provider": function(e) {
            return e.provider + " \uB85C\uADF8\uC778 \uC120\uD0DD"
        },
        "social-login-add-existing": function(e) {
            return "\uAE30\uC874\uC758 \uB85C\uADF8\uC778 \uC815\uBCF4\uB97C \uCD94\uAC00\uD558\uC5EC \uB85C\uADF8\uC778\uD569\uB2C8\uB2E4."
        },
        "social-login-sign-in-with-label": function(e) {
            return "\uB85C\uADF8\uC778 \uBC29\uC2DD"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "\uB85C\uADF8\uC778 \uC2DC \uC0AC\uC6A9\uD55C \uB85C\uADF8\uC778 \uC815\uBCF4 \uC120\uD0DD"
        },
        "social-login-save-provider-only-title": function(e) {
            return "\uC77C\uBC18 " + e.provider + " \uD56D\uBAA9\uC73C\uB85C \uC800\uC7A5"
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return e.provider + "\uC744(\uB97C) \uC0AC\uC6A9\uD574 \uB85C\uADF8\uC778\uD55C \uAC83\uB9CC \uC800\uC7A5"
        },
        "shell-plugin-create-title": function(e) {
            return "\uC0C8\uB85C\uC6B4 \uC178 \uD50C\uB7EC\uADF8\uC778 \uD56D\uBAA9 \uB9CC\uB4E4\uAE30"
        },
        "shell-plugin-create-button": function(e) {
            return "\uD56D\uBAA9 \uC800\uC7A5"
        },
        "autosave-title-save": function(e) {
            return e.item + " \uC800\uC7A5"
        },
        "autosave-title-saved": function(e) {
            return e.item + " \uC800\uC7A5\uB428"
        },
        "autosave-title-update": function(e) {
            return e.item + " \uC5C5\uB370\uC774\uD2B8"
        },
        "autosave-title-updated": function(e) {
            return e.item + " \uC5C5\uB370\uC774\uD2B8\uB428"
        },
        "autosave-save-type-generic": function(e) {
            return "\uD56D\uBAA9"
        },
        "autosave-save-type-login": function(e) {
            return "\uB85C\uADF8\uC778 \uC815\uBCF4"
        },
        "autosave-save-type-credit-card": function(e) {
            return "\uC2E0\uC6A9 \uCE74\uB4DC"
        },
        "autosave-save-type-identity": function(e) {
            return "\uC2E0\uC6D0 \uC815\uBCF4"
        }
    },
    nl: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " opgeslagen in 1Password"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "Shell-plugin voor " + e.platformName + " beschikbaar voor 1Password"
        },
        "1Password-encountered-a-problem-": function(e) {
            return "Er is een fout opgetreden in 1Password."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password is vergrendeld. Probeer het na het ontgrendelen opnieuw."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Passwordt logt vanaf nu voor je in na het automatisch invullen van je inloggegevens."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "Een duur voor de uitgavelimiet is verplicht"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Er is een fout opgetreden bij het communiceren met Brex.com. Probeer het opnieuw"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "Sneller kunnen inloggen"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "Door een beveiligingslek op deze website is je huidige wachtwoord in gevaar gekomen."
        },
        "A-title-is-required": function(e) {
            return "Een titel is verplicht"
        },
        "Add-account": function(e) {
            return "Account toevoegen"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "Account toevoegen aan de browser-extensie van 1Password"
        },
        "All-vaults-are-disabled-": function(e) {
            return "Alle kluizen zijn uitgeschakeld."
        },
        "An-error-has-occurred": function(e) {
            return "Er is een fout opgetreden"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "Er is een onverwachte fout opgetreden. Neem contact op met support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "Toewijzen aan account"
        },
        Back: function(e) {
            return "Terug"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Brex-kaarten zijn opgeslagen en synchroniseren met Brex.com."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex vult trasnactiememo's op deze kaart automatisch in."
        },
        Cancel: function(e) {
            return "Annuleren"
        },
        "Change-now": function(e) {
            return "Nu wijzigen"
        },
        "Change-this-compromised-password": function(e) {
            return "Wijzig dit gecomprimitteerde wachtwoord"
        },
        "Choose-an-account": function(e) {
            return "Kies een account"
        },
        Close: function(e) {
            return "Sluiten"
        },
        "Conceal-previous-value": function(e) {
            return "Vorige waarde verbergen"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "Zorg voor een werkende internetverbinding en probeer het opnieuw."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Verbinden met priv\xE9kaart\u2026"
        },
        "Contact-Support": function(e) {
            return "Klantenservice"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "Neem contact op met de klantenservice en vertel hen dat er een probleem is met het standaardaccount."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "Neem contact op met de klantenservice en vertel hen dat er een probleem is met de gegenereerde wachtwoordkluis."
        },
        "Create---Fill": function(e) {
            return "Aanmaken en invullen"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Brex-leverancierskaart aanmaken\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "Gemaskeerde e-mail aanmaken"
        },
        Custom: function(e) {
            return "Aangepast"
        },
        Dismiss: function(e) {
            return "Negeren"
        },
        "Don-t-ask-again": function(e) {
            return "Niet meer vragen"
        },
        "Download-1Password-8": function(e) {
            return "Download 1Password 8"
        },
        Edit: function(e) {
            return "Bewerken"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "Voer het bedrag in dollars in"
        },
        Error: function(e) {
            return "Foutmelding"
        },
        "Existing-items": function(e) {
            return "Bestaande items"
        },
        "Failed-to-load-item-": function(e) {
            return "Laden van item mislukt."
        },
        "Failed-to-save-item-": function(e) {
            return "Bewaren van item mislukt."
        },
        "Fill-Email": function(e) {
            return "E-mailadres invullen"
        },
        "Funding-Source": function(e) {
            return "Financieringsbron"
        },
        "Get-Help-": function(e) {
            return "Krijg ondersteuning\u2026"
        },
        "Got-it": function(e) {
            return "Begrepen"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "Invoerveld voor de itemtitel"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "Ongeldig \xE9\xE9nmalig wachtwoord."
        },
        "Learn-more-": function(e) {
            return "Kom meer te weten\u2026"
        },
        "Loading-": function(e) {
            return "Laden\u2026"
        },
        Lock: function(e) {
            return "Vergrendelen"
        },
        "Lock-Card": function(e) {
            return "Kaart vergrendelen"
        },
        "Lock-card-is-required": function(e) {
            return "Kaart vergrendelen is verplicht"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "Zorg ervoor dat 1Password-accounts met inloggegevens voor deze website zijn ontgrendeld."
        },
        "New-Item": function(e) {
            return "Nieuw item"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "Volgende stap: SSH Agent instellen"
        },
        "No-logins-found": function(e) {
            return "Geen inloggegevens gevonden"
        },
        "No-passkeys-found": function(e) {
            return "Geen passkeys gevonden"
        },
        None: function(e) {
            return "Geen"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "Sla het op en wij onthouden het voortaan voor je."
        },
        Overwrite: function(e) {
            return "Overschrijven"
        },
        "Overwrite-one-time-password-": function(e) {
            return "Eenmalig wachtwoord overschrijven?"
        },
        "Passkey-saved": function(e) {
            return "Passkey opgeslagen"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "Log in bij 1Password om veiliger online te gaan en het opslaan en invullen van je wachtwoorden makkelijker te maken."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Druk op het 1Password-icoon in de werkbalk van je browser om te ontgrendelen."
        },
        Previous: function(e) {
            return "Vorige"
        },
        "Privacy-Card": function(e) {
            return "Priv\xE9kaart"
        },
        "Reason-for-card": function(e) {
            return "Reden voor kaart"
        },
        Regenerate: function(e) {
            return "Opnieuw genereren"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "Opnieuw genereren in " + e.secondsLeft + " sec."
        },
        "Reveal-previous-value": function(e) {
            return "Vorige waarde weergeven"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "Kies weergeven voor vorige waarde"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH-key aangemaakt. Om deze sleutel lokaal te gebruiken, stel je SSH Agent van 1Password in (beschikbaar op 1Password 8)."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH-sleutel aangemaakt. Om deze sleutel lokaal te gebruiken, stel je eerst de SSH Agent van 1Password in."
        },
        Save: function(e) {
            return "Opslaan"
        },
        "Save-Item": function(e) {
            return "Item opslaan"
        },
        "Save-in-1Password-": function(e) {
            return "Opslaan in 1Password?"
        },
        "Save-item": function(e) {
            return "Item opslaan"
        },
        "Save-one-time-password": function(e) {
            return "Eenmalig wachtwoord opslaan"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "Eenmalige wachtwoorden opslaan die automatisch worden ingevuld tijdens het inloggen."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "Informatiedialoog in 1Password opslaan of bijwerken"
        },
        "Save-passkey": function(e) {
            return "Passkey opslaan"
        },
        "Saved-one-time-password": function(e) {
            return "Eenmalige wachtwoord opgeslagen"
        },
        "Select-account": function(e) {
            return "Selecteer account"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Selecteer het 1Password-icoon in de werkbalk van je browser om te ontgrendelen."
        },
        "Session-expired-for-tab-": function(e) {
            return "Sessie verlopen voor tabblad."
        },
        "Set-Spending-Limit": function(e) {
            return "Bestedingslimiet instellen"
        },
        "Set-up-SSH-Agent": function(e) {
            return "SSH Agent instellen"
        },
        "Sign-in": function(e) {
            return "Inloggen"
        },
        "Sign-in-to-1Password": function(e) {
            return "Log in bij 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "Log dankzij de browser-extensie met \xE9\xE9n klik in op websites, sla eenvoudig je informatie op, en maak nieuwe wachtwoorden aan."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "Inloggen met een passkey"
        },
        "Something-went-wrong": function(e) {
            return "Er ging iets mis"
        },
        "Spending-Limit": function(e) {
            return "Bestedingslimiet"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "Stap 3: bekijk en wijzig eventueel je nieuwe inlogitem. Sla het vervolgens op."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Sla je " + e.credentialName + " op in 1Password en verifieer de CLI van " + e.platformName + " met " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "De integratie met Brex is uitgeschakeld. Stel opnieuw in op 1Password.com"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "Het eenmalige wachtwoord in dit item wordt vervangen."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "De reden voor een kaart is verplicht"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "Time out van het verzoek om een passkey aan te maken."
        },
        "The-spending-limit-is-required": function(e) {
            return "De bestedingslimiet is verplicht"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "Tik dan op de indicator dat je offline bent (<offlineIndicator />) en voltooi het inlogproces om je wijzigingen op te slaan."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "Om " + e.item + " op te slaan, moet je eerst 1Password ontgrendelen."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "Ontgrendel eerst 1Password om een passkey op te slaan."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "Ontgrendel eerst 1Password om je passkey te gebruiken."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID of Apple Watch"
        },
        "Try-Again": function(e) {
            return "Opnieuw proberen"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "Vergrendel en ontgrendel 1Password en vul daarna opnieuw aan."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "Kan kaart niet maken, probeer het opnieuw."
        },
        "Unable-to-fill-password": function(e) {
            return "Wachtwoord automatisch aanvullen mislukt"
        },
        "Unlock-1Password": function(e) {
            return "1Password ontgrendelen"
        },
        "Unlock-to-save": function(e) {
            return "Ontgrendel om op te slaan"
        },
        "Unlocking-1Password-": function(e) {
            return "1Password wordt ontgrendeld\u2026"
        },
        Update: function(e) {
            return "Bijwerken"
        },
        "Update-Existing": function(e) {
            return "Bestaande bijwerken"
        },
        "Update-Item": function(e) {
            return "Item bijwerken"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "Gebruik 1Password voor tweefactorauthenticatie"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Gebruik 1Password om de CLI van " + e.platformName + " te verifi\xEBren met " + e.authType + "."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "Gebruik een beveiligingssleutel of een andere passkey"
        },
        "View-settings": function(e) {
            return "Instellingen weergeven"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "Door een onverwachte fout konden we het voorgestelde wachtwoord niet gebruiken."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "Je kunt je keuze altijd wijzigen onder instellingen."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "Je kunt je accounts beheren onder Instellingen."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "Je " + e.accountName + "-account moet worden ontgrendeld om dit wachtwoord in te vullen. Ontgrendel je account en probeer het opnieuw."
        },
        "a--item-": function(e) {
            return "een " + e.item
        },
        "an--item-": function(e) {
            return "een " + e.item
        },
        email: function(e) {
            return "e-mail"
        },
        "every-month": function(e) {
            return "elke maand"
        },
        "every-quarter": function(e) {
            return "elk kwartaal"
        },
        "every-transaction": function(e) {
            return "elke transactie"
        },
        "every-year": function(e) {
            return "elk jaar"
        },
        forever: function(e) {
            return "voor altijd"
        },
        "in-1-Month": function(e) {
            return "over 1 maand"
        },
        "in-1-Year": function(e) {
            return "over 1 jaar"
        },
        "in-7-Days": function(e) {
            return "over 7 dagen"
        },
        "loading---": function(e) {
            return "laden..."
        },
        "one-time": function(e) {
            return "eenmalig"
        },
        "one-time-password": function(e) {
            return "eenmalig wachtwoord"
        },
        "system-authentication": function(e) {
            return "systeemverificatie"
        },
        "auth-unfamiliar-website": function(e) {
            return "Onbekende website"
        },
        "auth-type-code-to-fill": function(e) {
            return "Typ " + e.code + " om " + e.type + " te autoriseren " + e.website + " in te vullen."
        },
        "auth-filling-on-website": function(e) {
            return " op " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "Onjuiste code ingevoerd"
        },
        "auth-why-is-this-needed": function(e) {
            return "Waarom is dit nodig?"
        },
        "item-use-suggested-password": function(e) {
            return "Voorgesteld wachtwoord gebruiken"
        },
        "item-create-privacy-card": function(e) {
            return "Priv\xE9kaart aanmaken"
        },
        "item-create-email-alias": function(e) {
            return "Gemaskeerde e-mail aanmaken"
        },
        "item-type-credit-card": function(e) {
            return "creditcard"
        },
        "item-type-identity": function(e) {
            return "identiteit"
        },
        "item-type-unspecified": function(e) {
            return "item"
        },
        categories: function(e) {
            return "Categorie\xEBn"
        },
        "category-suggestions": function(e) {
            return "Suggesties"
        },
        "category-logins": function(e) {
            return "Logins"
        },
        "category-identities": function(e) {
            return "Identiteiten"
        },
        "category-credit-cards": function(e) {
            return "Creditcards"
        },
        "category-generated-password": function(e) {
            return "Gegenereerd wachtwoord"
        },
        "category-hide-on-this-page": function(e) {
            return "Verbergen op deze pagina"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "Ontgrendel 1Password via het werkbalkpictogram."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "Druk op " + e.shortcut + " om 1Password te ontgrendelen"
        },
        "locked-request-unlock": function(e) {
            return "1Password openen"
        },
        "notification-add-account": function(e) {
            return "Account toevoegen aan"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "Je kunt accounts op een later moment toevoegen aan en verwijderen uit 1Password"
        },
        "notification-settings": function(e) {
            return "Instellingen"
        },
        "notification-add-account-never": function(e) {
            return "Nooit"
        },
        "notification-add-account-confirm": function(e) {
            return "Toevoegen"
        },
        "authorize-fill": function(e) {
            return "Klik op OK om je 1Password-item in te vullen op " + e.host
        },
        "authorize-fill-brex": function(e) {
            return "Klik op OK om een Brex-kaart aan te maken en in te vullen met 1Password op " + e.host
        },
        "authorize-fill-privacy": function(e) {
            return "Klik op OK om een priv\xE9kaart aan te maken en in te vullen met 1Password op " + e.host
        },
        "authorize-fill-protocol": function(e) {
            return `Waarschuwing van 1Password: Dit is een onbeveiligde (HTTP) pagina en alle informatie die je verstrekt kan mogelijk worden gezien en gewijzigd door anderen. 

Wil je dit item nog steeds invullen?`
        },
        "tooltip-close-1password": function(e) {
            return "Sluiten"
        },
        "tooltip-open-1password": function(e) {
            return "Openen"
        },
        "tooltip-no-items": function(e) {
            return "Geen items om weer te geven"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return "Druk op het 1Password-pictogram in de werkbalk van je browser om te ontgrendelen"
        },
        "tooltip-unlock-1password": function(e) {
            return "1Password ontgrendelen"
        },
        Title: function(e) {
            return "Titel"
        },
        "save-in-header": function(e) {
            return "Opslaan in"
        },
        "save-item": function(e) {
            return "Item opslaan"
        },
        "update-item": function(e) {
            return "Item bijwerken"
        },
        "select-item": function(e) {
            return "Item kiezen"
        },
        "Save-new-Login": function(e) {
            return "Nieuwe login opslaan"
        },
        cancel: function(e) {
            return "Annuleren"
        },
        close: function(e) {
            return "Sluiten"
        },
        confirm: function(e) {
            return "Bevestigen"
        },
        "unknown-item": function(e) {
            return "onbekend item"
        },
        "save-in": function(e) {
            return "opslaan in"
        },
        "select-a-vault": function(e) {
            return "Selecteer een kluis"
        },
        "locked-title": function(e) {
            return "1Password is vergrendeld"
        },
        "locked-message": function(e) {
            return "Ontgrendel een account om verder te gaan met opslaan met 1Password."
        },
        "offline-title": function(e) {
            return "Je account is offline."
        },
        "offline-message": function(e) {
            return "Je kunt dit item niet opslaan tot je bent ingelogd en bent verbonden met internet."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "Druk op het pictogram in de werkbalk van je browser om 1Password te openen."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "Druk op " + e.shortcut + " om 1Password te openen."
        },
        "current-item": function(e) {
            return "Huidig item"
        },
        "updated-item": function(e) {
            return "Bijgewerkt item"
        },
        "add-tag": function(e) {
            return "Tag toevoegen"
        },
        "remove-tag": function(e) {
            return "Tag verwijderen"
        },
        "sso-info-banner": function(e) {
            return "Nieuwe items met gekoppelde logins moeten worden opgeslagen binnen dezelfde kluis en moeten in hetzelfde account zijn."
        },
        "new-item": function(e) {
            return "Nieuw item"
        },
        "update-existing": function(e) {
            return "Bestaande bijwerken"
        },
        "enable-privacy-header": function(e) {
            return "Toevoegen aan 1Password"
        },
        "enable-privacy-description": function(e) {
            return "Gebruik 1Password om overal waar je online betaalt priv\xE9kaarten te maken en in te vullen en sla verkoperskaarten op voor toekomstig gebruik."
        },
        "enable-privacy-choose-account": function(e) {
            return "Kies een account"
        },
        "enable-privacy-add-button": function(e) {
            return "Toevoegen aan 1Password"
        },
        "enable-privacy-error": function(e) {
            return "Kan de Priv\xE9-integratie niet inschakelen. Probeer het later opnieuw."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "Ontgrendel het geselecteerde account om de integratie in te schakelen."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "Ontgrendel 1Password om de integratie in te schakelen."
        },
        "privacy-error-enable-header": function(e) {
            return "Kan integratie niet inschakelen"
        },
        "privacy-error-header": function(e) {
            return "Er is een fout opgetreden"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "Er is een 1Password-lidmaatschap vereist om te integreren met Priv\xE9."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Zorg ervoor dat er minstens \xE9\xE9n financieringsbron is gekoppeld aan je Privacy.com-account. Probeer het daarna opnieuw."
        },
        "privacy-error-unexpected-error": function(e) {
            return "Er is een onverwachte fout opgetreden. Neem contact op met support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "elke maand"
        },
        "privacy-monthly": function(e) {
            return "Maandelijks"
        },
        "privacy-annually": function(e) {
            return "elk jaar"
        },
        "privacy-transaction": function(e) {
            return "elke transactie"
        },
        "privacy-forever": function(e) {
            return "voor altijd"
        },
        "privacy-single-use": function(e) {
            return "Eenmalig gebruik"
        },
        "privacy-header": function(e) {
            return "Priv\xE9kaart aanmaken"
        },
        "privacy-card-name-label": function(e) {
            return "Kaartnaam"
        },
        "privacy-spend-limit-label": function(e) {
            return "Ingestelde bestedingslimiet"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "Frequentie"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "Bestedingslimiet"
        },
        "privacy-funding-account-label": function(e) {
            return "Financieringsbron"
        },
        "privacy-save-label": function(e) {
            return "Opslaan in 1Password"
        },
        "privacy-create-button": function(e) {
            return "Aanmaken en invullen"
        },
        "privacy-error-integration-disabled": function(e) {
            return "Schakel de Priv\xE9-integratie in via het ontwikkelaarstools-contextmenu."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password is vergrendeld. Probeer het na het ontgrendelen opnieuw."
        },
        "privacy-error-vault-locked": function(e) {
            return "Deze kluis is vergrendeld. Probeer het na het ontgrendelen opnieuw."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "Selecteer een kluis."
        },
        "privacy-error-save-failed": function(e) {
            return "Kan item niet opslaan. Controleer of de kluis ontgrendeld is en probeer het opnieuw."
        },
        "privacy-error-empty-card-name": function(e) {
            return "Voer een naam in voor de kaart."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "Voer een kortere naam in voor de kaart."
        },
        "privacy-error-empty-limit": function(e) {
            return "Je moet een bestedingslimiet voor de kaart instellen."
        },
        "privacy-error-limit-too-large": function(e) {
            return "Voer een kleinere bestedingslimiet in voor de kaart."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "Kan URL niet verwerken"
        },
        "privacy-error-http-error": function(e) {
            return "We konden Priv\xE9 niet bereiken. Controleer je internetverbinding en probeer het opnieuw."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "We konden niet verifi\xEBren met Priv\xE9. Controleer je API-sleutel en probeer het opnieuw."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "Fout bij het aanmaken van kaart: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "Fout bij het aanmaken van kaart."
        },
        "privacy-error-brain-error": function(e) {
            return "Kan geen creditcarditem aanmaken via priv\xE9kaart."
        },
        "privacy-error-default": function(e) {
            return "Er is een onverwachte fout opgetreden."
        },
        "notification-save-in": function(e) {
            return "Opslaan in"
        },
        "notification-save-secondary": function(e) {
            return "Inloggegevens van " + e.host + " opslaan in 1Password?"
        },
        "notification-save-save": function(e) {
            return "Opslaan"
        },
        "ssh-title": function(e) {
            return "Maak SSH-key in en vul deze in"
        },
        "ssh-create-button": function(e) {
            return "Aanmaken en invullen"
        },
        "ssh-error-message": function(e) {
            return "Er is een onverwachte fout opgetreden. Neem contact op met support@1password.com"
        },
        "unexpected-error": function(e) {
            return "Er is een onverwachte fout opgetreden. Neem contact op met support@1password.com"
        },
        "login-duplicate": function(e) {
            return "Al opgeslagen"
        },
        "social-login-linked": function(e) {
            return e.item + " is gekoppeld aan:"
        },
        "social-login-locked": function(e) {
            return "Druk op het 1Password-icoon in de werkbalk van je browser om te ontgrendelen."
        },
        "social-login-no-items": function(e) {
            return "Geen items gevonden om mee in te loggen."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " werd gebruikt om in te loggen bij:"
        },
        "social-login-save-in-1password": function(e) {
            return "Opslaan in 1Password?"
        },
        "social-login-save-item": function(e) {
            return "Item opslaan"
        },
        "social-login-save-item-locked": function(e) {
            return "Ontgrendel om op te slaan"
        },
        "social-login-sign-in-with": function(e) {
            return "Inloggen met\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "Inloggen met " + e.title + ": " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "Inloggen"
        },
        "social-login-select-provider": function(e) {
            return "selecteer je login voor " + e.provider
        },
        "social-login-add-existing": function(e) {
            return "Kies een bestaande login om mee in te loggen."
        },
        "social-login-sign-in-with-label": function(e) {
            return "inloggen met"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "kies bestaande inloggegevens die je eerder hebt gebruikt"
        },
        "social-login-save-provider-only-title": function(e) {
            return "Als algemeen " + e.provider + "-item opslaan"
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "Sla alleen op dat je met " + e.provider + " hebt ingelogd"
        },
        "shell-plugin-create-title": function(e) {
            return "Nieuw Shell Plugins-item aanmaken"
        },
        "shell-plugin-create-button": function(e) {
            return "Item opslaan"
        },
        "autosave-title-save": function(e) {
            return e.item + " opslaan"
        },
        "autosave-title-saved": function(e) {
            return e.item + " opgeslagen"
        },
        "autosave-title-update": function(e) {
            return e.item + " bijwerken"
        },
        "autosave-title-updated": function(e) {
            return e.item + " bijgewerkt"
        },
        "autosave-save-type-generic": function(e) {
            return "Item"
        },
        "autosave-save-type-login": function(e) {
            return "Inloggegevens"
        },
        "autosave-save-type-credit-card": function(e) {
            return "Creditcard"
        },
        "autosave-save-type-identity": function(e) {
            return "Identiteit"
        }
    },
    pt: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " salvo no 1Password"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "Plugin de shell do 1Password dispon\xEDvel para " + e.platformName
        },
        "1Password-encountered-a-problem-": function(e) {
            return "O 1Password encontrou um problema."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "O 1Password est\xE1 bloqueado. Tente novamente ap\xF3s desbloquear."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "O 1Password agora far\xE1 login automaticamente ap\xF3s preencher automaticamente suas credenciais."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "\xC9 obrigat\xF3rio uma dura\xE7\xE3o para o limite de gastos"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "Ocorreu um problema na comunica\xE7\xE3o com Brex.com. Tente novamente"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "Uma maneira mais r\xE1pida de fazer login"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "Uma viola\xE7\xE3o de seguran\xE7a neste site colocou sua senha atual em risco."
        },
        "A-title-is-required": function(e) {
            return "O t\xEDtulo \xE9 obrigat\xF3rio"
        },
        "Add-account": function(e) {
            return "Adicionar conta"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "Adicionar conta \xE0 extens\xE3o do navegador 1Password"
        },
        "All-vaults-are-disabled-": function(e) {
            return "Todos os cofres est\xE3o desativados."
        },
        "An-error-has-occurred": function(e) {
            return "Ocorreu um erro"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "Ocorreu um erro inesperado. Entre em contato com support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "Atribuir a conta"
        },
        Back: function(e) {
            return "Voltar"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Os cart\xF5es Brex s\xE3o armazenados e sincronizados a partir de Brex.com."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "O Brex preencher\xE1 automaticamente registros das transa\xE7\xF5es nesse cart\xE3o."
        },
        Cancel: function(e) {
            return "Cancelar"
        },
        "Change-now": function(e) {
            return "Mudar agora"
        },
        "Change-this-compromised-password": function(e) {
            return "Alterar esta senha comprometida"
        },
        "Choose-an-account": function(e) {
            return "Escolha uma conta"
        },
        Close: function(e) {
            return "Fechar"
        },
        "Conceal-previous-value": function(e) {
            return "Ocultar valor anterior"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "Conecte-se \xE0 internet e tente novamente."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "Conectando o Privacy Card\u2026"
        },
        "Contact-Support": function(e) {
            return "Entre em contato com o suporte"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "Entre em contato com o suporte para pedir ajuda e informe que \xE9 um problema com a conta padr\xE3o."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "Entre em contato com o suporte para pedir ajuda e informe que \xE9 um problema com o cofre com senha gerada."
        },
        "Create---Fill": function(e) {
            return "Criar e preencher"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "Criar cart\xE3o de fornecedor Brex\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "Criar email oculto"
        },
        Custom: function(e) {
            return "Personalizado"
        },
        Dismiss: function(e) {
            return "Ignorar"
        },
        "Don-t-ask-again": function(e) {
            return "N\xE3o pergunte novamente"
        },
        "Download-1Password-8": function(e) {
            return "Baixar 1Password 8"
        },
        Edit: function(e) {
            return "Editar"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "Digite o valor em d\xF3lares"
        },
        Error: function(e) {
            return "Erro"
        },
        "Existing-items": function(e) {
            return "Itens existentes"
        },
        "Failed-to-load-item-": function(e) {
            return "Falha ao carregar o item."
        },
        "Failed-to-save-item-": function(e) {
            return "Falha ao salvar o item."
        },
        "Fill-Email": function(e) {
            return "Preencher email"
        },
        "Funding-Source": function(e) {
            return "Origem de financiamento"
        },
        "Get-Help-": function(e) {
            return "Receber ajuda\u2026"
        },
        "Got-it": function(e) {
            return "Entendi"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "Campo de entrada para o t\xEDtulo do item"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "Senha secreta de uso \xFAnico inv\xE1lida."
        },
        "Learn-more-": function(e) {
            return "Saiba mais\u2026"
        },
        "Loading-": function(e) {
            return "Carregando\u2026"
        },
        Lock: function(e) {
            return "Bloquear"
        },
        "Lock-Card": function(e) {
            return "Bloquear cart\xE3o"
        },
        "Lock-card-is-required": function(e) {
            return "\xC9 necess\xE1rio o bloqueio do cart\xE3o"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "Certifique-se de que as contas do 1Password que cont\xEAm logins para este site estejam desbloqueadas."
        },
        "New-Item": function(e) {
            return "Novo item"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "Pr\xF3xima etapa: configurar o Agente SSH"
        },
        "No-logins-found": function(e) {
            return "Nenhum login encontrado"
        },
        "No-passkeys-found": function(e) {
            return "Nenhuma passkey encontrada"
        },
        None: function(e) {
            return "Nenhum"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "Uma vez salvo, memorizaremos para voc\xEA."
        },
        Overwrite: function(e) {
            return "Substituir"
        },
        "Overwrite-one-time-password-": function(e) {
            return "Substituir a senha de uso \xFAnico?"
        },
        "Passkey-saved": function(e) {
            return "Passkey salva"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "Acesse a conta no 1Password para manter-se seguro online e tornar mais f\xE1cil salvar e preencher senhas."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Pressione o \xEDcone do 1Password na barra de ferramentas do navegador para liberar."
        },
        Previous: function(e) {
            return "Anterior"
        },
        "Privacy-Card": function(e) {
            return "Privacy Card"
        },
        "Reason-for-card": function(e) {
            return "Motivo do cart\xE3o"
        },
        Regenerate: function(e) {
            return "Gerar novamente"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "Gerar novamente em " + e.secondsLeft + " s"
        },
        "Reveal-previous-value": function(e) {
            return "Revelar valor anterior"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "Revelar para ver valor anterior"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "Chave SSH criada. Para usar esta chave localmente, configure o Agente SSH 1Password, dispon\xEDvel no 1Password 8."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "Chave SSH criada. Para usar essa chave no local, configure o agente SSH do 1Password."
        },
        Save: function(e) {
            return "Salvar"
        },
        "Save-Item": function(e) {
            return "Salvar item"
        },
        "Save-in-1Password-": function(e) {
            return "Salvar no 1Password?"
        },
        "Save-item": function(e) {
            return "Salvar item"
        },
        "Save-one-time-password": function(e) {
            return "Salvar a senha de uso \xFAnico"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "Salvar senhas de uso \xFAnico que ser\xE3o preenchidas automaticamente durante o login."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "Caixa de di\xE1logo Salvar ou atualizar informa\xE7\xF5es no 1Password"
        },
        "Save-passkey": function(e) {
            return "Salvar passkey"
        },
        "Saved-one-time-password": function(e) {
            return "Senha de uso \xFAnico salva"
        },
        "Select-account": function(e) {
            return "Selecionar conta"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "Selecione o \xEDcone do 1Password na barra de ferramentas do navegador para liberar."
        },
        "Session-expired-for-tab-": function(e) {
            return "Sess\xE3o expirada para a guia."
        },
        "Set-Spending-Limit": function(e) {
            return "Definir o limite de gastos"
        },
        "Set-up-SSH-Agent": function(e) {
            return "Configurar agente SSH"
        },
        "Sign-in": function(e) {
            return "Acessar"
        },
        "Sign-in-to-1Password": function(e) {
            return "Entrar no 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "Entre em sites com um clique, salve facilmente suas informa\xE7\xF5es e gere novas senhas com a extens\xE3o do navegador."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "Entrar com passkey"
        },
        "Something-went-wrong": function(e) {
            return "Houve um problema"
        },
        "Spending-Limit": function(e) {
            return "Limite de gastos"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "Etapa 3: revise ou edite seu novo item de login e salve-o."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Armazene sua " + e.credentialName + " no 1Password e autentique o CLI de " + e.platformName + " com " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "A integra\xE7\xE3o com Brex foi desativada. Conecte novamente com o 1Password.com"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "A senha de uso \xFAnico neste item ser\xE1 substitu\xEDda."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "O motivo do cart\xE3o \xE9 obrigat\xF3rio"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "O prazo da solicita\xE7\xE3o para criar uma passkey acabou."
        },
        "The-spending-limit-is-required": function(e) {
            return "O limite de gastos \xE9 obrigat\xF3rio"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "Depois toque no indicador de offline ( <offlineIndicator /> ) e conclua o acesso para salvar as altera\xE7\xF5es."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "Para salvar " + e.item + ", desbloqueie o 1Password primeiro."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "Para salvar uma senha, desbloqueie o 1Password primeiro."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "Para usar sua senha, desbloqueie o 1Password primeiro."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID ou Apple Watch"
        },
        "Try-Again": function(e) {
            return "Tente novamente"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "Experimente bloquear e depois desbloquear o 1Password para preencher novamente."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "N\xE3o foi poss\xEDvel criar o cart\xE3o. Tente novamente."
        },
        "Unable-to-fill-password": function(e) {
            return "N\xE3o \xE9 poss\xEDvel preencher a senha"
        },
        "Unlock-1Password": function(e) {
            return "Desbloqueie o 1Password"
        },
        "Unlock-to-save": function(e) {
            return "Desbloqueie para salvar"
        },
        "Unlocking-1Password-": function(e) {
            return "Desbloqueando o 1Password\u2026"
        },
        Update: function(e) {
            return "Atualizar"
        },
        "Update-Existing": function(e) {
            return "Atualizar existente"
        },
        "Update-Item": function(e) {
            return "Atualizar item"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "Use o 1Password para autentica\xE7\xE3o de dois fatores"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "Use o 1Password para autenticar em CLI " + e.platformName + " com " + e.authType + "."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "Use uma chave de seguran\xE7a ou outra passkey"
        },
        "View-settings": function(e) {
            return "Configura\xE7\xF5es de exibi\xE7\xE3o"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "N\xE3o foi poss\xEDvel utilizar a senha sugerida devido a um erro inesperado."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "Voc\xEA pode alterar isso a qualquer momento nas configura\xE7\xF5es."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "Voc\xEA pode gerenciar suas contas em Configura\xE7\xF5es."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "Sua conta " + e.accountName + " precisa ser desbloqueada para preencher esta senha. Desbloqueie-a e tente novamente."
        },
        "a--item-": function(e) {
            return "um " + e.item
        },
        "an--item-": function(e) {
            return "um " + e.item
        },
        email: function(e) {
            return "email"
        },
        "every-month": function(e) {
            return "todos os meses"
        },
        "every-quarter": function(e) {
            return "todos os trimestres"
        },
        "every-transaction": function(e) {
            return "todas as transa\xE7\xF5es"
        },
        "every-year": function(e) {
            return "todos os anos"
        },
        forever: function(e) {
            return "vital\xEDcio"
        },
        "in-1-Month": function(e) {
            return "em 1 m\xEAs"
        },
        "in-1-Year": function(e) {
            return "em 1 ano"
        },
        "in-7-Days": function(e) {
            return "em 7 dias"
        },
        "loading---": function(e) {
            return "carregando..."
        },
        "one-time": function(e) {
            return "uma vez"
        },
        "one-time-password": function(e) {
            return "senha de uso \xFAnico"
        },
        "system-authentication": function(e) {
            return "autentica\xE7\xE3o no sistema"
        },
        "auth-unfamiliar-website": function(e) {
            return "Site desconhecido"
        },
        "auth-type-code-to-fill": function(e) {
            return "Digite " + e.code + " para autorizar o preenchimento de " + e.type + " em " + e.website + "."
        },
        "auth-filling-on-website": function(e) {
            return " em " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "Foi informado um c\xF3digo incorreto"
        },
        "auth-why-is-this-needed": function(e) {
            return "Por que isso \xE9 necess\xE1rio?"
        },
        "item-use-suggested-password": function(e) {
            return "Usar a senha sugerida"
        },
        "item-create-privacy-card": function(e) {
            return "Criar Cart\xE3o Privacy"
        },
        "item-create-email-alias": function(e) {
            return "Criar email oculto"
        },
        "item-type-credit-card": function(e) {
            return "cart\xE3o de cr\xE9dito"
        },
        "item-type-identity": function(e) {
            return "identidade"
        },
        "item-type-unspecified": function(e) {
            return "item"
        },
        categories: function(e) {
            return "Categorias"
        },
        "category-suggestions": function(e) {
            return "Sugest\xF5es"
        },
        "category-logins": function(e) {
            return "Credenciais"
        },
        "category-identities": function(e) {
            return "Identidades"
        },
        "category-credit-cards": function(e) {
            return "Cart\xF5es de cr\xE9dito"
        },
        "category-generated-password": function(e) {
            return "Senha gerada"
        },
        "category-hide-on-this-page": function(e) {
            return "Ocultar nesta p\xE1gina"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "Desbloqueie o 1Password no \xEDcone da barra de ferramentas."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "Pressione " + e.shortcut + " para desbloquear o 1Password"
        },
        "locked-request-unlock": function(e) {
            return "Abrir o 1Password"
        },
        "notification-add-account": function(e) {
            return "Adicionar conta ao"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "Voc\xEA poder\xE1 adicionar e remover contas do 1Password depois"
        },
        "notification-settings": function(e) {
            return "Configura\xE7\xF5es"
        },
        "notification-add-account-never": function(e) {
            return "Nunca"
        },
        "notification-add-account-confirm": function(e) {
            return "Adicionar"
        },
        "authorize-fill": function(e) {
            return "Clique em OK para preencher o item do 1Password no " + e.host
        },
        "authorize-fill-brex": function(e) {
            return "Clique em OK para criar e preencher um cart\xE3o Brex com o1Password em " + e.host
        },
        "authorize-fill-privacy": function(e) {
            return "Clique em OK para criar e preencher um cart\xE3o Privacy com o1Password em " + e.host
        },
        "authorize-fill-protocol": function(e) {
            return `Aviso do 1Password: esta p\xE1gina n\xE3o \xE9 segura (HTTP) e todas as informa\xE7\xF5es que voc\xEA enviar poder\xE3o ser vistas e alteradas por outras pessoas. 

Ainda deseja preencher esse item?`
        },
        "tooltip-close-1password": function(e) {
            return "Fechar"
        },
        "tooltip-open-1password": function(e) {
            return "Abrir"
        },
        "tooltip-no-items": function(e) {
            return "Nenhum item para mostrar"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `Pressione o \xEDcone 1Password em
barra de ferramentas do seu navegador para desbloquear`
        },
        "tooltip-unlock-1password": function(e) {
            return "Desbloquear o 1Password"
        },
        Title: function(e) {
            return "T\xEDtulo"
        },
        "save-in-header": function(e) {
            return "Salvar em"
        },
        "save-item": function(e) {
            return "Salvar o item"
        },
        "update-item": function(e) {
            return "Atualizadar o item"
        },
        "select-item": function(e) {
            return "Escolher item"
        },
        "Save-new-Login": function(e) {
            return "Salvar novas credenciais"
        },
        cancel: function(e) {
            return "Cancelar"
        },
        close: function(e) {
            return "Fechar"
        },
        confirm: function(e) {
            return "Confirmar"
        },
        "unknown-item": function(e) {
            return "item desconhecido"
        },
        "save-in": function(e) {
            return "salvar em"
        },
        "select-a-vault": function(e) {
            return "Selecione um cofre"
        },
        "locked-title": function(e) {
            return "O 1Password est\xE1 bloqueado"
        },
        "locked-message": function(e) {
            return "Para continuar salvando com o 1Password, desbloqueie uma conta."
        },
        "offline-title": function(e) {
            return "Sua conta est\xE1 offline."
        },
        "offline-message": function(e) {
            return "Voc\xEA n\xE3o poder\xE1 salvar o item at\xE9 entrar na conta e estar online."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "Pressione o \xEDcone do 1Password na barra de ferramentas do navegador para abrir o 1Password."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "Pressione " + e.shortcut + " para abrir o 1Password."
        },
        "current-item": function(e) {
            return "Item atual"
        },
        "updated-item": function(e) {
            return "Item atualizado"
        },
        "add-tag": function(e) {
            return "Adicionar etiqueta"
        },
        "remove-tag": function(e) {
            return "Remover etiqueta"
        },
        "sso-info-banner": function(e) {
            return "Itens novos com credenciais vinculadas devem ser salvos no mesmo cofre e devem estar na mesma conta."
        },
        "new-item": function(e) {
            return "Novo item"
        },
        "update-existing": function(e) {
            return "Atualizar o existente"
        },
        "enable-privacy-header": function(e) {
            return "Adicionar ao 1Password"
        },
        "enable-privacy-description": function(e) {
            return "Use o 1Password para criar e preencher cart\xF5es do Privacy em todos os lugares onde voc\xEA pagar online e guardar cart\xF5es de vendedores para usar futuramente."
        },
        "enable-privacy-choose-account": function(e) {
            return "Escolha uma conta"
        },
        "enable-privacy-add-button": function(e) {
            return "Adicionar ao 1Password"
        },
        "enable-privacy-error": function(e) {
            return "N\xE3o foi poss\xEDvel ativar a integra\xE7\xE3o com o Privacy. Tente novamente mais tarde."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "Desbloqueie a conta selecionada para ativar a integra\xE7\xE3o."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "Desbloqueie o 1Password para ativar a integra\xE7\xE3o."
        },
        "privacy-error-enable-header": function(e) {
            return "N\xE3o foi poss\xEDvel ativar a integra\xE7\xE3o"
        },
        "privacy-error-header": function(e) {
            return "Ocorreu um erro"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "\xC9 necess\xE1rio uma associa\xE7\xE3o do 1Password para integrar com o Privacy."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "Verifique se h\xE1 pelo menos uma Origem de Financiamento associada \xE0 sua conta no Privacy.com e tente novamente."
        },
        "privacy-error-unexpected-error": function(e) {
            return "Ocorreu um erro inesperado. Entre em contato com support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "todos os meses"
        },
        "privacy-monthly": function(e) {
            return "Mensal"
        },
        "privacy-annually": function(e) {
            return "todos os anos"
        },
        "privacy-transaction": function(e) {
            return "todas as transa\xE7\xF5es"
        },
        "privacy-forever": function(e) {
            return "vital\xEDcio"
        },
        "privacy-single-use": function(e) {
            return "Uso \xFAnico"
        },
        "privacy-header": function(e) {
            return "Criar cart\xE3o Privacy"
        },
        "privacy-card-name-label": function(e) {
            return "Nome do cart\xE3o"
        },
        "privacy-spend-limit-label": function(e) {
            return "Definir o limite de gastos"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "Frequ\xEAncia"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "Limite de gastos"
        },
        "privacy-funding-account-label": function(e) {
            return "Origem do financiamento"
        },
        "privacy-save-label": function(e) {
            return "Salvar no 1Password"
        },
        "privacy-create-button": function(e) {
            return "Criar e preencher"
        },
        "privacy-error-integration-disabled": function(e) {
            return "Ative a integra\xE7\xE3o com o Privacy no menu de contexto Ferramentas de desenvolvedor."
        },
        "privacy-error-app-locked": function(e) {
            return "O 1Password est\xE1 bloqueado. Tente novamente ap\xF3s desbloquear."
        },
        "privacy-error-vault-locked": function(e) {
            return "Esse cofre est\xE1 bloqueado. Desbloqueie e tente novamente."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "Selecione um cofre."
        },
        "privacy-error-save-failed": function(e) {
            return "N\xE3o foi poss\xEDvel salvar o item. Verifique se o cofre est\xE1 trancado e tente novamente."
        },
        "privacy-error-empty-card-name": function(e) {
            return "Digite um nome para o cart\xE3o."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "Digite um nome menor para o cart\xE3o."
        },
        "privacy-error-empty-limit": function(e) {
            return "Voc\xEA precisa informar um limite de gastos para o cart\xE3o."
        },
        "privacy-error-limit-too-large": function(e) {
            return "Digite um limite de gastos menor para o cart\xE3o."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "N\xE3o foi poss\xEDvel processar o URL"
        },
        "privacy-error-http-error": function(e) {
            return "N\xE3o foi poss\xEDvel acessar o Privacy. Verifique a conex\xE3o com a internet e tente novamente."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "N\xE3o foi poss\xEDvel autenticar na Privacy. Confira a chave da API e tente novamente."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "Erro na cria\xE7\xE3o do cart\xE3o: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "Erro na cria\xE7\xE3o do cart\xE3o."
        },
        "privacy-error-brain-error": function(e) {
            return "N\xE3o foi poss\xEDvel criar o item de cart\xE3o de cr\xE9dito a partir do cart\xE3o Privacy."
        },
        "privacy-error-default": function(e) {
            return "Ocorreu um erro inesperado."
        },
        "notification-save-in": function(e) {
            return "Salvar em"
        },
        "notification-save-secondary": function(e) {
            return "Salvar sua credencial de " + e.host + " no 1Password?"
        },
        "notification-save-save": function(e) {
            return "Salvar"
        },
        "ssh-title": function(e) {
            return "Criar e preencher chave SSH"
        },
        "ssh-create-button": function(e) {
            return "Criar e preencher"
        },
        "ssh-error-message": function(e) {
            return "Ocorreu um erro inesperado. Entre em contato com support@1password.com"
        },
        "unexpected-error": function(e) {
            return "Ocorreu um erro inesperado. Entre em contato com support@1password.com"
        },
        "login-duplicate": function(e) {
            return "J\xE1 foi salvo"
        },
        "social-login-linked": function(e) {
            return e.item + " est\xE1 vinculado a:"
        },
        "social-login-locked": function(e) {
            return "Pressione o \xEDcone do 1Password na barra de ferramentas do navegador para liberar."
        },
        "social-login-no-items": function(e) {
            return "Nenhum item encontrado para entrar."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " foi utilizado para entrar em:"
        },
        "social-login-save-in-1password": function(e) {
            return "Salvar no 1Password?"
        },
        "social-login-save-item": function(e) {
            return "Salvar item"
        },
        "social-login-save-item-locked": function(e) {
            return "Desbloquear para salvar"
        },
        "social-login-sign-in-with": function(e) {
            return "Entrar com\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "Acessar com " + e.title + ": " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "Entrar"
        },
        "social-login-select-provider": function(e) {
            return "selecione a credencial do seu " + e.provider
        },
        "social-login-add-existing": function(e) {
            return "Inclua uma credencial atual para entrar."
        },
        "social-login-sign-in-with-label": function(e) {
            return "entrar com"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "escolha a credencial que usou para se inscrever"
        },
        "social-login-save-provider-only-title": function(e) {
            return "Salve como item gen\xE9rico de " + e.provider
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "Salve somente o " + e.provider + " que utilizou para entrar"
        },
        "shell-plugin-create-title": function(e) {
            return "Criar novo item do Shell Plugins"
        },
        "shell-plugin-create-button": function(e) {
            return "Salvar item"
        },
        "autosave-title-save": function(e) {
            return "Salvar " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + " salvo"
        },
        "autosave-title-update": function(e) {
            return e.item + " salvo"
        },
        "autosave-title-updated": function(e) {
            return e.item + " atualizado"
        },
        "autosave-save-type-generic": function(e) {
            return "Item"
        },
        "autosave-save-type-login": function(e) {
            return "Login"
        },
        "autosave-save-type-credit-card": function(e) {
            return "Cart\xE3o de cr\xE9dito"
        },
        "autosave-save-type-identity": function(e) {
            return "Identidade"
        }
    },
    ru: {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + ": \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u0432 1Password"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "\u041F\u043B\u0430\u0433\u0438\u043D 1Password Shell \u0434\u043B\u044F " + e.platformName
        },
        "1Password-encountered-a-problem-": function(e) {
            return "\u0412 1Password \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430."
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438."
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password \u0442\u0435\u043F\u0435\u0440\u044C \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u0441\u043B\u0435 \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430."
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043B\u0438\u043C\u0438\u0442\u0430 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A Brex.com \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "\u0411\u043E\u043B\u0435\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0432\u0445\u043E\u0434 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "\u041D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u044D\u0442\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 \u0441\u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u043E \u0432\u0430\u0448 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C."
        },
        "A-title-is-required": function(e) {
            return "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
        },
        "Add-account": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0432 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 1Password \u0434\u043B\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430"
        },
        "All-vaults-are-disabled-": function(e) {
            return "\u0412\u0441\u0435 \u0441\u0435\u0439\u0444\u044B \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u044B."
        },
        "An-error-has-occurred": function(e) {
            return "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "\u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443"
        },
        Back: function(e) {
            return "\u041D\u0430\u0437\u0430\u0434"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "\u041A\u0430\u0440\u0442\u044B Brex \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u0438 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0438\u0437 Brex.com."
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F\u0445 \u043D\u0430 \u044D\u0442\u043E\u0439 \u043A\u0430\u0440\u0442\u0435."
        },
        Cancel: function(e) {
            return "\u041E\u0442\u043C\u0435\u043D\u0430"
        },
        "Change-now": function(e) {
            return "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441"
        },
        "Change-this-compromised-password": function(e) {
            return "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
        },
        "Choose-an-account": function(e) {
            return "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
        },
        Close: function(e) {
            return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        },
        "Conceal-previous-value": function(e) {
            return "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u043A \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430."
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441 \u043A\u0430\u0440\u0442\u043E\u0439 Privacy\u2026"
        },
        "Contact-Support": function(e) {
            return "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u0438\u043C, \u0447\u0442\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u0441 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E."
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u0438\u043C, \u0447\u0442\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u0441 \u0441\u0435\u0439\u0444\u043E\u043C, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u044B\u043B \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u0430\u0440\u043E\u043B\u044C."
        },
        "Create---Fill": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 Brex\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B"
        },
        Custom: function(e) {
            return "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435"
        },
        Dismiss: function(e) {
            return "\u0421\u043A\u0440\u044B\u0442\u044C"
        },
        "Don-t-ask-again": function(e) {
            return "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C"
        },
        "Download-1Password-8": function(e) {
            return "\u0421\u043A\u0430\u0447\u0430\u0442\u044C 1Password 8"
        },
        Edit: function(e) {
            return "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0432 \u0434\u043E\u043B\u043B\u0430\u0440\u0430\u0445"
        },
        Error: function(e) {
            return "\u041E\u0448\u0438\u0431\u043A\u0430"
        },
        "Existing-items": function(e) {
            return "\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B"
        },
        "Failed-to-load-item-": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442."
        },
        "Failed-to-save-item-": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442."
        },
        "Fill-Email": function(e) {
            return "\u0412\u0432\u0435\u0441\u0442\u0438 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B"
        },
        "Funding-Source": function(e) {
            return "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
        },
        "Get-Help-": function(e) {
            return "\u041F\u043E\u043C\u043E\u0449\u044C\u2026"
        },
        "Got-it": function(e) {
            return "\u041F\u043E\u043D\u044F\u0442\u043D\u043E"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "\u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0434\u043B\u044F \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "\u041D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C."
        },
        "Learn-more-": function(e) {
            return "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435\u2026"
        },
        "Loading-": function(e) {
            return "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026"
        },
        Lock: function(e) {
            return "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        },
        "Lock-Card": function(e) {
            return "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443"
        },
        "Lock-card-is-required": function(e) {
            return "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B 1Password \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435."
        },
        "New-Item": function(e) {
            return "\u041D\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433: \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 SSH Agent"
        },
        "No-logins-found": function(e) {
            return "\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B"
        },
        "No-passkeys-found": function(e) {
            return "Passkey \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B"
        },
        None: function(e) {
            return "\u041D\u0435\u0442"
        },
        OK: function(e) {
            return "OK"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "\u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043C\u044B \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u043C \u0435\u0433\u043E \u0434\u043B\u044F \u0432\u0430\u0441."
        },
        Overwrite: function(e) {
            return "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C"
        },
        "Overwrite-one-time-password-": function(e) {
            return "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C?"
        },
        "Passkey-saved": function(e) {
            return "Passkey \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 1Password, \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0438 \u043B\u0435\u0433\u043A\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u0438 \u043F\u0430\u0440\u043E\u043B\u0438."
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A 1Password \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C."
        },
        Previous: function(e) {
            return "\u041D\u0430\u0437\u0430\u0434"
        },
        "Privacy-Card": function(e) {
            return "\u041A\u0430\u0440\u0442\u0430 Privacy"
        },
        "Reason-for-card": function(e) {
            return "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u044B"
        },
        Regenerate: function(e) {
            return "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437 \u0447\u0435\u0440\u0435\u0437 " + e.secondsLeft + " \u0441\u0435\u043A."
        },
        "Reveal-previous-value": function(e) {
            return "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "\u041E\u0442\u043A\u0440\u044B\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH-\u043A\u043B\u044E\u0447 \u0441\u043E\u0437\u0434\u0430\u043D. \u0427\u0442\u043E\u0431\u044B \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043B\u044E\u0447, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 1Password SSH Agent, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0434\u043B\u044F 1Password 8."
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH-\u043A\u043B\u044E\u0447 \u0441\u043E\u0437\u0434\u0430\u043D. \u0427\u0442\u043E\u0431\u044B \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043B\u044E\u0447, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 1Password SSH Agent."
        },
        Save: function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        },
        "Save-Item": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "Save-in-1Password-": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 1Password?"
        },
        "Save-item": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "Save-one-time-password": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u043E\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B."
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0434\u0438\u0430\u043B\u043E\u0433 \u0432 1Password"
        },
        "Save-passkey": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C passkey"
        },
        "Saved-one-time-password": function(e) {
            return "\u041E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D"
        },
        "Select-account": function(e) {
            return "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u043E\u043A 1Password \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C."
        },
        "Session-expired-for-tab-": function(e) {
            return "\u0421\u0440\u043E\u043A \u0441\u0435\u0430\u043D\u0441\u0430 \u0434\u043B\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0438 \u0438\u0441\u0442\u0435\u043A."
        },
        "Set-Spending-Limit": function(e) {
            return "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043B\u0438\u043C\u0438\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432"
        },
        "Set-up-SSH-Agent": function(e) {
            return "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C SSH Agent"
        },
        "Sign-in": function(e) {
            return "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
        },
        "Sign-in-to-1Password": function(e) {
            return "\u0412\u043E\u0439\u0442\u0438 \u0432 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "\u0412\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u043D\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430\u0445 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A, \u043B\u0435\u0433\u043A\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u043E\u043B\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."
        },
        "Sign-in-with-a-passkey": function(e) {
            return "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0441 passkey"
        },
        "Something-went-wrong": function(e) {
            return "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430"
        },
        "Spending-Limit": function(e) {
            return "\u041B\u0438\u043C\u0438\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "\u0428\u0430\u0433 3: \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0430 \u0437\u0430\u0442\u0435\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0435\u0433\u043E."
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "\u0425\u0440\u0430\u043D\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 " + e.credentialName + " \u0432 1Password \u0434\u043B\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 " + e.platformName + " CLI \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E " + e.authType + "."
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 Brex \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430. \u0415\u0449\u0435 \u0440\u0430\u0437 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0432\u044F\u0437\u044C \u043D\u0430 1Password.com"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "\u0411\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0435\u043D \u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0432 \u044D\u0442\u043E\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0435."
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u044B"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "\u0412\u0440\u0435\u043C\u044F \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 Passkey \u0438\u0441\u0442\u0435\u043A\u043B\u043E."
        },
        "The-spending-limit-is-required": function(e) {
            return "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0438\u043C\u0438\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "\u0417\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \xAB\u041D\u0435 \u0432 \u0441\u0435\u0442\u0438\xBB\u200E ( <offlineIndicator /> ) \u0438 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F."
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C " + e.item + ", \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 1Password."
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C passkey, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 1Password."
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "\u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C passkey, \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 1Password."
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID \u0438\u043B\u0438 Apple Watch"
        },
        "Try-Again": function(e) {
            return "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u043D\u043E\u0432\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0430 \u0437\u0430\u0442\u0435\u043C \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C 1Password."
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."
        },
        "Unable-to-fill-password": function(e) {
            return "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
        },
        "Unlock-1Password": function(e) {
            return "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C 1Password"
        },
        "Unlock-to-save": function(e) {
            return "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        },
        "Unlocking-1Password-": function(e) {
            return "\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 1Password\u2026"
        },
        Update: function(e) {
            return "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"
        },
        "Update-Existing": function(e) {
            return "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435"
        },
        "Update-Item": function(e) {
            return "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 1Password \u0434\u043B\u044F \u0434\u0432\u0443\u0445\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u043E\u0439 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 1Password \u0434\u043B\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 " + e.platformName + " CLI \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E " + e.authType + "."
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u044E\u0447 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0439 passkey"
        },
        "View-settings": function(e) {
            return "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "\u041C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430."
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "\u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0437\u0436\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445."
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0432\u043E\u0438\u043C\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\u043C\u0438 \u0432 \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445."
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0430\u0440\u043E\u043B\u044C, \u0432\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 " + e.accountName + " \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D. \u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."
        },
        "a--item-": function(e) {
            return e.item
        },
        "an--item-": function(e) {
            return e.item
        },
        email: function(e) {
            return "\u044D\u043B. \u043F\u043E\u0447\u0442\u0430"
        },
        "every-month": function(e) {
            return "\u0432 \u043C\u0435\u0441\u044F\u0446"
        },
        "every-quarter": function(e) {
            return "\u0432 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"
        },
        "every-transaction": function(e) {
            return "\u043A\u0430\u0436\u0434\u0430\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F"
        },
        "every-year": function(e) {
            return "\u0432 \u0433\u043E\u0434"
        },
        forever: function(e) {
            return "\u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430"
        },
        "in-1-Month": function(e) {
            return "\u0447\u0435\u0440\u0435\u0437 1 \u043C\u0435\u0441\u044F\u0446"
        },
        "in-1-Year": function(e) {
            return "\u0447\u0435\u0440\u0435\u0437 1 \u0433\u043E\u0434"
        },
        "in-7-Days": function(e) {
            return "\u0447\u0435\u0440\u0435\u0437 7 \u0434\u043D\u0435\u0439"
        },
        "loading---": function(e) {
            return "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
        },
        "one-time": function(e) {
            return "\u043E\u0434\u0438\u043D \u0440\u0430\u0437"
        },
        "one-time-password": function(e) {
            return "\u043E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
        },
        "system-authentication": function(e) {
            return "\u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B"
        },
        "auth-unfamiliar-website": function(e) {
            return "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442"
        },
        "auth-type-code-to-fill": function(e) {
            return "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 " + e.code + " \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 " + e.type + " \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F " + e.website + "."
        },
        "auth-filling-on-website": function(e) {
            return " \u043D\u0430 " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "\u0412\u0432\u0435\u0434\u0435\u043D \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043E\u0434"
        },
        "auth-why-is-this-needed": function(e) {
            return "\u041F\u043E\u0447\u0435\u043C\u0443 \u044D\u0442\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E?"
        },
        "item-use-suggested-password": function(e) {
            return "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
        },
        "item-create-privacy-card": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443 Privacy"
        },
        "item-create-email-alias": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B"
        },
        "item-type-credit-card": function(e) {
            return "\u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0430"
        },
        "item-type-identity": function(e) {
            return "\u0443\u0434\u043E\u0441-\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438"
        },
        "item-type-unspecified": function(e) {
            return "\u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        categories: function(e) {
            return "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
        },
        "category-suggestions": function(e) {
            return "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F"
        },
        "category-logins": function(e) {
            return "\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430"
        },
        "category-identities": function(e) {
            return "\u0423\u0434\u043E\u0441-\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438"
        },
        "category-credit-cards": function(e) {
            return "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0435 \u043A\u0430\u0440\u0442\u044B"
        },
        "category-generated-password": function(e) {
            return "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
        },
        "category-hide-on-this-page": function(e) {
            return "\u0421\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 1Password, \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u0438\u043A\u043E\u043D\u043A\u0443 \u0432 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432."
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 " + e.shortcut + " \u0434\u043B\u044F \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438 1Password"
        },
        "locked-request-unlock": function(e) {
            return "\u041E\u0442\u043A\u0440\u044B\u0442\u044C 1Password"
        },
        "notification-add-account": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0432"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u0438\u0437 1Password \u043F\u043E\u0437\u0436\u0435, \u043F\u0435\u0440\u0435\u0439\u0434\u044F \u0432 \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
        },
        "notification-settings": function(e) {
            return "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
        },
        "notification-add-account-never": function(e) {
            return "\u041D\u0438\u043A\u043E\u0433\u0434\u0430"
        },
        "notification-add-account-confirm": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
        },
        "authorize-fill": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u041E\u041A, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 1Password \u043D\u0430 " + e.host
        },
        "authorize-fill-brex": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 OK, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u044B Brex, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F 1Password \u043D\u0430 " + e.host
        },
        "authorize-fill-privacy": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 OK, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u044B Privacy, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F 1Password \u043D\u0430 " + e.host
        },
        "authorize-fill-protocol": function(e) {
            return `\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0442 1Password: \u044D\u0442\u043E \u043D\u0435\u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 (HTTP), \u0438 \u043B\u044E\u0431\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0432\u0432\u0435\u0434\u0435\u0442\u0435, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0430 \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u043C\u0438. 

\u0412\u044B \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442?`
        },
        "tooltip-close-1password": function(e) {
            return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        },
        "tooltip-open-1password": function(e) {
            return "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"
        },
        "tooltip-no-items": function(e) {
            return "\u041D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `\u0427\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0438\u043A\u043E\u043D\u043A\u0443 1Password
\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430`
        },
        "tooltip-unlock-1password": function(e) {
            return "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C 1Password"
        },
        Title: function(e) {
            return "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
        },
        "save-in-header": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432"
        },
        "save-item": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "update-item": function(e) {
            return "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "select-item": function(e) {
            return "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "Save-new-Login": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043B\u043E\u0433\u0438\u043D"
        },
        cancel: function(e) {
            return "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
        },
        close: function(e) {
            return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        },
        confirm: function(e) {
            return "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
        },
        "unknown-item": function(e) {
            return "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "save-in": function(e) {
            return "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432"
        },
        "select-a-vault": function(e) {
            return "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0439\u0444"
        },
        "locked-title": function(e) {
            return "1Password \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D"
        },
        "locked-message": function(e) {
            return "\u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 1Password, \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442."
        },
        "offline-title": function(e) {
            return "\u0412\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043D\u0435 \u0432 \u0441\u0435\u0442\u0438."
        },
        "offline-message": function(e) {
            return "\u0412\u044B \u043D\u0435 \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432\u043E\u0439\u0434\u0435\u0442\u0435 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0435\u0442\u0438."
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0438\u043A\u043E\u043D\u043A\u0443 1Password \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C 1Password."
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 " + e.shortcut + " \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C 1Password."
        },
        "current-item": function(e) {
            return "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "updated-item": function(e) {
            return "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "add-tag": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0433"
        },
        "remove-tag": function(e) {
            return "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0433"
        },
        "sso-info-banner": function(e) {
            return "\u041D\u043E\u0432\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B \u0432 \u0442\u043E\u043C \u0436\u0435 \u0441\u0435\u0439\u0444\u0435 \u0438 \u0432 \u0442\u043E\u043C \u0436\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0435."
        },
        "new-item": function(e) {
            return "\u041D\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "update-existing": function(e) {
            return "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435"
        },
        "enable-privacy-header": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 1Password"
        },
        "enable-privacy-description": function(e) {
            return "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 1Password, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442 Privacy \u043F\u0440\u0438 \u043B\u044E\u0431\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043A\u0430\u0440\u0442\u044B \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F."
        },
        "enable-privacy-choose-account": function(e) {
            return "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
        },
        "enable-privacy-add-button": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0432 1Password"
        },
        "enable-privacy-error": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 Privacy. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043F\u043E\u0437\u0436\u0435."
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0434\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438."
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 1Password \u0434\u043B\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438."
        },
        "privacy-error-enable-header": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E"
        },
        "privacy-error-header": function(e) {
            return "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "\u0414\u043B\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 Privacy \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 1Password."
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u043A \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443 \u043D\u0430 Privacy.com \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0435\u043D \u043F\u043E \u043A\u0440\u0430\u0439\u043D\u0435\u0439 \u043C\u0435\u0440\u0435 \u043E\u0434\u0438\u043D \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F."
        },
        "privacy-error-unexpected-error": function(e) {
            return "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "\u041E\u043A"
        },
        "privacy-once": function(e) {
            return "\u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446"
        },
        "privacy-monthly": function(e) {
            return "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E"
        },
        "privacy-annually": function(e) {
            return "\u043A\u0430\u0436\u0434\u044B\u0439 \u0433\u043E\u0434"
        },
        "privacy-transaction": function(e) {
            return "\u043A\u0430\u0436\u0434\u0430\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F"
        },
        "privacy-forever": function(e) {
            return "\u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430"
        },
        "privacy-single-use": function(e) {
            return "\u041E\u0434\u043D\u043E\u0440\u0430\u0437\u043E\u0432\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
        },
        "privacy-header": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443 Privacy"
        },
        "privacy-card-name-label": function(e) {
            return "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u044B"
        },
        "privacy-spend-limit-label": function(e) {
            return "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043B\u0438\u043C\u0438\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "\u0427\u0430\u0441\u0442\u043E\u0442\u0430"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "\u041B\u0438\u043C\u0438\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432"
        },
        "privacy-funding-account-label": function(e) {
            return "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0444\u0438\u043D\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"
        },
        "privacy-save-label": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 1Password"
        },
        "privacy-create-button": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C"
        },
        "privacy-error-integration-disabled": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 Privacy \u0432 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u043C \u043C\u0435\u043D\u044E \u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430."
        },
        "privacy-error-app-locked": function(e) {
            return "1Password \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438."
        },
        "privacy-error-vault-locked": function(e) {
            return "\u042D\u0442\u043E\u0442 \u0441\u0435\u0439\u0444 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438."
        },
        "privacy-error-no-vault-selected": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0439\u0444."
        },
        "privacy-error-save-failed": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0441\u0435\u0439\u0444 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443."
        },
        "privacy-error-empty-card-name": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u044B."
        },
        "privacy-error-card-name-too-large": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u044B."
        },
        "privacy-error-empty-limit": function(e) {
            return "\u0414\u043B\u044F \u043A\u0430\u0440\u0442\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u0442\u0440\u0430\u0442."
        },
        "privacy-error-limit-too-large": function(e) {
            return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043B\u0438\u043C\u0438\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432 \u043F\u043E \u043A\u0430\u0440\u0442\u0435."
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441"
        },
        "privacy-error-http-error": function(e) {
            return "\u041D\u0430\u043C \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 Privacy. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0451 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430."
        },
        "privacy-error-invalid-api-key": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u0434\u043B\u0438\u043D\u043D\u043E\u0441\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Privacy. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0430\u0448 API \u043A\u043B\u044E\u0447 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."
        },
        "privacy-error-api-error-with-message": function(e) {
            return "\u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043A\u0430\u0440\u0442\u044B \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: " + e.message
        },
        "privacy-error-api-error": function(e) {
            return "\u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043A\u0430\u0440\u0442\u044B \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430."
        },
        "privacy-error-brain-error": function(e) {
            return "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B \u0434\u043B\u044F \u043A\u0430\u0440\u0442\u044B Privacy."
        },
        "privacy-error-default": function(e) {
            return "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430."
        },
        "notification-save-in": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432"
        },
        "notification-save-secondary": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 " + e.host + " \u0432 1Password?"
        },
        "notification-save-save": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        },
        "ssh-title": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C SSH-\u043A\u043B\u044E\u0447"
        },
        "ssh-create-button": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C"
        },
        "ssh-error-message": function(e) {
            return "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 support@1password.com"
        },
        "unexpected-error": function(e) {
            return "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 support@1password.com"
        },
        "login-duplicate": function(e) {
            return "\u0423\u0436\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E"
        },
        "social-login-linked": function(e) {
            return e.item + " \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u043A:"
        },
        "social-login-locked": function(e) {
            return "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A 1Password \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C."
        },
        "social-login-no-items": function(e) {
            return "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E."
        },
        "social-login-provider-used": function(e) {
            return e.provider + " \u0431\u044B\u043B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443:"
        },
        "social-login-save-in-1password": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 1Password?"
        },
        "social-login-save-item": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "social-login-save-item-locked": function(e) {
            return "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
        },
        "social-login-sign-in-with": function(e) {
            return "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 c\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F " + e.title + ": " + e.subtitle
        },
        "social-login-sign-in": function(e) {
            return "\u0412\u043E\u0439\u0442\u0438"
        },
        "social-login-select-provider": function(e) {
            return "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0433\u043E " + e.provider
        },
        "social-login-add-existing": function(e) {
            return "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043B\u043E\u0433\u0438\u043D \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442."
        },
        "social-login-sign-in-with-label": function(e) {
            return "\u0432\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 c"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0432\u044B \u0432\u043E\u0448\u043B\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
        },
        "social-login-save-provider-only-title": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A \u043E\u0431\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 " + e.provider
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E, \u0447\u0442\u043E \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0441 " + e.provider
        },
        "shell-plugin-create-title": function(e) {
            return "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 Shell Plugins"
        },
        "shell-plugin-create-button": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "autosave-title-save": function(e) {
            return "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + ": \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E"
        },
        "autosave-title-update": function(e) {
            return "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C " + e.item
        },
        "autosave-title-updated": function(e) {
            return e.item + " \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D"
        },
        "autosave-save-type-generic": function(e) {
            return "\u042D\u043B\u0435\u043C\u0435\u043D\u0442"
        },
        "autosave-save-type-login": function(e) {
            return "\u041B\u043E\u0433\u0438\u043D"
        },
        "autosave-save-type-credit-card": function(e) {
            return "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0430"
        },
        "autosave-save-type-identity": function(e) {
            return "\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        }
    },
    "zh-CN": {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " \u5DF2\u4FDD\u5B58\u5728 1Password \u4E2D"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "\u9002\u7528\u4E8E " + e.platformName + " \u7684 1Password \u5916\u58F3\u63D2\u4EF6\u53EF\u7528"
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password \u9047\u5230\u95EE\u9898\u3002"
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password \u5DF2\u9501\u5B9A\u3002\u8BF7\u89E3\u9501\u540E\u91CD\u8BD5\u3002"
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password \u5728\u81EA\u52A8\u586B\u5145\u8EAB\u4EFD\u4FE1\u606F\u4E4B\u540E\u5C06\u81EA\u52A8\u767B\u5F55\u3002"
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "\u9700\u8981\u6709\u652F\u4ED8\u9650\u989D\u7684\u671F\u9650"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "\u4E0E Brex.com \u901A\u4FE1\u65F6\u9047\u5230\u95EE\u9898\u3002\u8BF7\u518D\u8BD5\u4E00\u6B21"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "\u66F4\u5FEB\u901F\u7684\u767B\u5F55"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "\u8BE5\u7F51\u7AD9\u7684\u5B89\u5168\u6F0F\u6D1E\u5DF2\u4F7F\u60A8\u7684\u5F53\u524D\u5BC6\u7801\u9762\u4E34\u98CE\u9669\u3002"
        },
        "A-title-is-required": function(e) {
            return "\u9700\u8981\u6807\u9898"
        },
        "Add-account": function(e) {
            return "\u6DFB\u52A0\u5E10\u6237"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "\u6DFB\u52A0\u5E10\u6237\u81F3 1Password \u6D4F\u89C8\u5668\u6269\u5C55"
        },
        "All-vaults-are-disabled-": function(e) {
            return "\u6240\u6709\u4FDD\u9669\u5E93\u5DF2\u7981\u7528\u3002"
        },
        "An-error-has-occurred": function(e) {
            return "\u53D1\u751F\u9519\u8BEF"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002\u8BF7\u8054\u7CFB support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "\u5206\u914D\u5230\u5E10\u6237"
        },
        Back: function(e) {
            return "\u8FD4\u56DE"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Brex \u5361\u662F\u7531 Brex.com \u5B58\u50A8\u548C\u540C\u6B65\u7684\u3002"
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex \u5C06\u81EA\u52A8\u5728\u6B64\u5361\u4E0A\u586B\u5199\u4EA4\u6613\u5907\u5FD8\u3002"
        },
        Cancel: function(e) {
            return "\u53D6\u6D88"
        },
        "Change-now": function(e) {
            return "\u7ACB\u5373\u66F4\u6539"
        },
        "Change-this-compromised-password": function(e) {
            return "\u66F4\u6539\u6709\u6CC4\u9732\u98CE\u9669\u7684\u5BC6\u7801"
        },
        "Choose-an-account": function(e) {
            return "\u9009\u62E9\u4E00\u4E2A\u5E10\u6237"
        },
        Close: function(e) {
            return "\u5173\u95ED"
        },
        "Conceal-previous-value": function(e) {
            return "\u9690\u85CF\u4E4B\u524D\u7684\u503C"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "\u8FDE\u63A5\u5230\u4E92\u8054\u7F51\u5E76\u518D\u8BD5\u4E00\u6B21\u3002"
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "\u6B63\u5728\u8FDE\u63A5 Privacy \u5361\u7247\u2026"
        },
        "Contact-Support": function(e) {
            return "\u8054\u7CFB\u652F\u6301"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "\u8054\u7CFB\u652F\u6301\u4EBA\u5458\u5BFB\u6C42\u5E2E\u52A9\uFF0C\u5E76\u544A\u8BC9\u5BF9\u65B9\u9047\u5230\u4E86\u9ED8\u8BA4\u5E10\u6237\u7684\u95EE\u9898\u3002"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "\u8054\u7CFB\u652F\u6301\u4EBA\u5458\u5BFB\u6C42\u5E2E\u52A9\uFF0C\u5E76\u544A\u8BC9\u5BF9\u65B9\u9047\u5230\u4E86\u751F\u6210\u7684\u5BC6\u7801\u4FDD\u9669\u5E93\u7684\u95EE\u9898\u3002"
        },
        "Create---Fill": function(e) {
            return "\u521B\u5EFA\u5E76\u586B\u5145"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "\u521B\u5EFA Brex \u4F9B\u5E94\u5546\u5361\u7247\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "\u521B\u5EFA\u8499\u9762\u7535\u5B50\u90AE\u4EF6"
        },
        Custom: function(e) {
            return "\u81EA\u5B9A\u4E49"
        },
        Dismiss: function(e) {
            return "\u5173\u95ED"
        },
        "Don-t-ask-again": function(e) {
            return "\u4E0D\u518D\u8BE2\u95EE"
        },
        "Download-1Password-8": function(e) {
            return "\u4E0B\u8F7D 1Password 8"
        },
        Edit: function(e) {
            return "\u7F16\u8F91"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "\u8BF7\u4EE5\u7F8E\u5143\u4E3A\u5355\u4F4D\u8F93\u5165\u91D1\u989D"
        },
        Error: function(e) {
            return "\u9519\u8BEF"
        },
        "Existing-items": function(e) {
            return "\u73B0\u6709\u7684\u9879\u76EE"
        },
        "Failed-to-load-item-": function(e) {
            return "\u52A0\u8F7D\u9879\u76EE\u5931\u8D25\u3002"
        },
        "Failed-to-save-item-": function(e) {
            return "\u4FDD\u5B58\u9879\u76EE\u5931\u8D25\u3002"
        },
        "Fill-Email": function(e) {
            return "\u586B\u5199\u7535\u5B50\u90AE\u4EF6"
        },
        "Funding-Source": function(e) {
            return "\u8D44\u91D1\u6765\u6E90"
        },
        "Get-Help-": function(e) {
            return "\u83B7\u53D6\u5E2E\u52A9\u2026"
        },
        "Got-it": function(e) {
            return "\u660E\u767D\u4E86"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "\u9879\u76EE\u6807\u9898\u7684\u8F93\u5165\u5B57\u6BB5"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "\u65E0\u6548\u7684\u4E00\u6B21\u6027\u5BC6\u7801\u3002"
        },
        "Learn-more-": function(e) {
            return "\u4E86\u89E3\u66F4\u591A\u2026"
        },
        "Loading-": function(e) {
            return "\u6B63\u5728\u52A0\u8F7D..."
        },
        Lock: function(e) {
            return "\u9501\u5B9A"
        },
        "Lock-Card": function(e) {
            return "\u9501\u5B9A\u5361\u7247"
        },
        "Lock-card-is-required": function(e) {
            return "\u9700\u8981\u9501\u5B9A\u5361\u7247"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "\u786E\u4FDD\u5305\u542B\u6B64\u7AD9\u70B9\u767B\u5F55\u4FE1\u606F\u7684 1Password \u5E10\u6237\u5DF2\u89E3\u9501\u3002"
        },
        "New-Item": function(e) {
            return "\u65B0\u5EFA\u9879\u76EE"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "\u4E0B\u4E00\u6B65\uFF1A\u8BBE\u7F6E SSH Agent"
        },
        "No-logins-found": function(e) {
            return "\u672A\u627E\u5230\u767B\u5F55\u4FE1\u606F"
        },
        "No-passkeys-found": function(e) {
            return "\u672A\u627E\u5230\u901A\u884C\u5BC6\u94A5"
        },
        None: function(e) {
            return "\u65E0"
        },
        OK: function(e) {
            return "\u597D"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "\u4FDD\u5B58\u4E4B\u540E\uFF0C\u6211\u4EEC\u4F1A\u4E3A\u4F60\u8BB0\u4F4F\u3002"
        },
        Overwrite: function(e) {
            return "\u8986\u76D6"
        },
        "Overwrite-one-time-password-": function(e) {
            return "\u8986\u76D6\u4E00\u6B21\u6027\u5BC6\u7801\uFF1F"
        },
        "Passkey-saved": function(e) {
            return "\u5BC6\u94A5\u5DF2\u4FDD\u5B58"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "\u8BF7\u767B\u5F55 1Password \u4EE5\u4FDD\u62A4\u7F51\u4E0A\u5B89\u5168\uFF0C\u5E76\u8BA9\u4FDD\u5B58\u548C\u586B\u5145\u5BC6\u7801\u53D8\u5F97\u7B80\u5355\u3002"
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u6309\u4E0B\u6D4F\u89C8\u5668\u5DE5\u5177\u680F\u4E0A\u7684 1Password \u56FE\u6807\u4EE5\u89E3\u9501\u3002"
        },
        Previous: function(e) {
            return "\u4E0A\u4E00\u6B65"
        },
        "Privacy-Card": function(e) {
            return "Privacy \u5361\u7247"
        },
        "Reason-for-card": function(e) {
            return "\u5361\u7247\u7406\u7531"
        },
        Regenerate: function(e) {
            return "\u91CD\u65B0\u751F\u6210"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return e.secondsLeft + " \u79D2\u540E\u518D\u6B21\u91CD\u65B0\u751F\u6210"
        },
        "Reveal-previous-value": function(e) {
            return "\u663E\u793A\u4E4B\u524D\u7684\u503C"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "\u663E\u793A\u4EE5\u67E5\u770B\u4E4B\u524D\u7684\u503C"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH \u5BC6\u94A5\u5DF2\u521B\u5EFA\u3002\u8981\u5728\u672C\u5730\u4F7F\u7528\u6B64\u5BC6\u94A5\uFF0C\u8BF7\u8BBE\u7F6E 1Password \u7684 SSH Agent\uFF0C\u5728 1Password 8 \u4E2D\u63D0\u4F9B\u3002"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH \u5BC6\u94A5\u5DF2\u521B\u5EFA\u3002\u8981\u5728\u672C\u5730\u4F7F\u7528\u6B64\u5BC6\u94A5\uFF0C\u8BF7\u8BBE\u7F6E 1Password \u7684 SSH Agent\u3002"
        },
        Save: function(e) {
            return "\u4FDD\u5B58"
        },
        "Save-Item": function(e) {
            return "\u4FDD\u5B58\u9879\u76EE"
        },
        "Save-in-1Password-": function(e) {
            return "\u5728 1Password \u4E2D\u4FDD\u5B58\uFF1F"
        },
        "Save-item": function(e) {
            return "\u4FDD\u5B58\u9879\u76EE"
        },
        "Save-one-time-password": function(e) {
            return "\u4FDD\u5B58\u4E00\u6B21\u6027\u5BC6\u7801"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "\u4FDD\u5B58\u767B\u5F55\u65F6\u81EA\u52A8\u586B\u5199\u7684\u4E00\u6B21\u6027\u5BC6\u7801\u3002"
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "\u5728 1Password \u4E2D\u4FDD\u5B58\u6216\u66F4\u65B0\u4FE1\u606F\u5BF9\u8BDD\u6846"
        },
        "Save-passkey": function(e) {
            return "\u4FDD\u5B58\u5BC6\u94A5"
        },
        "Saved-one-time-password": function(e) {
            return "\u5DF2\u4FDD\u5B58\u7684\u4E00\u6B21\u6027\u5BC6\u7801"
        },
        "Select-account": function(e) {
            return "\u9009\u62E9\u5E10\u6237"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u9009\u62E9\u6D4F\u89C8\u5668\u5DE5\u5177\u680F\u4E0A\u7684 1Password \u56FE\u6807\u4EE5\u89E3\u9501\u3002"
        },
        "Session-expired-for-tab-": function(e) {
            return "\u6807\u7B7E\u4F1A\u8BDD\u8FC7\u671F\u3002"
        },
        "Set-Spending-Limit": function(e) {
            return "\u8BBE\u5B9A\u652F\u4ED8\u9650\u989D"
        },
        "Set-up-SSH-Agent": function(e) {
            return "\u8BBE\u7F6E SSH Agent"
        },
        "Sign-in": function(e) {
            return "\u767B\u5F55"
        },
        "Sign-in-to-1Password": function(e) {
            return "\u767B\u5F55 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "\u4E00\u952E\u767B\u5F55\u7F51\u7AD9\uFF0C\u8F7B\u677E\u4FDD\u5B58\u60A8\u7684\u4FE1\u606F\uFF0C\u5E76\u4F7F\u7528\u6D4F\u89C8\u5668\u6269\u5C55\u751F\u6210\u65B0\u5BC6\u7801\u3002"
        },
        "Sign-in-with-a-passkey": function(e) {
            return "\u901A\u8FC7\u901A\u884C\u5BC6\u94A5\u767B\u5F55"
        },
        "Something-went-wrong": function(e) {
            return "\u51FA\u9519\u4E86"
        },
        "Spending-Limit": function(e) {
            return "\u652F\u4ED8\u9650\u989D"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "\u7B2C 3 \u6B65\uFF1A\u68C0\u67E5\u6216\u7F16\u8F91\u65B0\u7684\u767B\u5F55\u9879\u76EE\uFF0C\u7136\u540E\u4FDD\u5B58\u3002"
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "\u5C06 " + e.credentialName + " \u5B58\u50A8\u5728 1Password \u4E2D\u5E76\u901A\u8FC7 " + e.authType + " \u9A8C\u8BC1 " + e.platformName + " CLI\u3002"
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "\u4E0E Brex \u7684\u96C6\u6210\u5DF2\u88AB\u7981\u7528\uFF0C\u8BF7\u91CD\u65B0\u4E0E 1Password.com \u8FDE\u63A5"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "\u6B64\u9879\u76EE\u4E2D\u7684\u4E00\u6B21\u6027\u5BC6\u7801\u5C06\u88AB\u66FF\u6362\u3002"
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "\u5361\u7247\u7406\u7531\u662F\u5FC5\u9700\u7684"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "\u521B\u5EFA\u901A\u884C\u5BC6\u94A5\u7684\u8BF7\u6C42\u5DF2\u8D85\u65F6\u3002"
        },
        "The-spending-limit-is-required": function(e) {
            return "\u652F\u4ED8\u9650\u989D\u662F\u5FC5\u9700\u7684"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "\u7136\u540E\u8F7B\u6309\u79BB\u7EBF\u6307\u793A\u5668\uFF08<offlineIndicator />\uFF09\u5B8C\u6210\u767B\u5F55\u4EE5\u4FDD\u5B58\u66F4\u6539\u3002"
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "\u8981\u4FDD\u5B58 " + e.item + "\uFF0C\u9700\u5148\u89E3\u9501 1Password\u3002"
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "\u8981\u4FDD\u5B58\u901A\u884C\u5BC6\u94A5\uFF0C\u9700\u5148\u89E3\u9501 1Password\u3002"
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "\u8981\u4F7F\u7528\u901A\u884C\u5BC6\u94A5\uFF0C\u9700\u5148\u89E3\u9501 1Password\u3002"
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "\u89E6\u63A7 ID \u6216 Apple Watch"
        },
        "Try-Again": function(e) {
            return "\u518D\u8BD5\u4E00\u6B21"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "\u5C1D\u8BD5\u9501\u5B9A\u518D\u89E3\u9501 1Password \u4EE5\u518D\u6B21\u586B\u5145\u3002"
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "\u521B\u5EFA\u5361\u7247\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002"
        },
        "Unable-to-fill-password": function(e) {
            return "\u65E0\u6CD5\u586B\u5145\u5BC6\u7801"
        },
        "Unlock-1Password": function(e) {
            return "\u89E3\u9501 1Password"
        },
        "Unlock-to-save": function(e) {
            return "\u89E3\u9501\u4EE5\u4FDD\u5B58"
        },
        "Unlocking-1Password-": function(e) {
            return "\u6B63\u5728\u89E3\u9501 1Password\u2026"
        },
        Update: function(e) {
            return "\u66F4\u65B0"
        },
        "Update-Existing": function(e) {
            return "\u66F4\u65B0\u73B0\u6709"
        },
        "Update-Item": function(e) {
            return "\u66F4\u65B0\u9879\u76EE"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "\u4F7F\u7528 1Password \u4F5C\u4E3A\u4E24\u6B65\u9A8C\u8BC1\u5DE5\u5177"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "\u4F7F\u7528 1Password \u901A\u8FC7 " + e.authType + " \u9A8C\u8BC1 " + e.platformName + " CLI\u3002"
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "\u4F7F\u7528\u5B89\u5168\u5BC6\u94A5\u6216\u5176\u4ED6\u901A\u884C\u5BC6\u94A5"
        },
        "View-settings": function(e) {
            return "\u67E5\u770B\u8BBE\u7F6E"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "\u56E0\u4E3A\u53D1\u751F\u610F\u5916\u9519\u8BEF\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4F7F\u7528\u5EFA\u8BAE\u7684\u5BC6\u7801\u3002"
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "\u4F60\u53EF\u4EE5\u968F\u65F6\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6539\u3002"
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "\u60A8\u53EF\u4EE5\u5728\u201C\u8BBE\u7F6E\u201D\u4E2D\u7BA1\u7406\u60A8\u7684\u5E10\u6237\u3002"
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "\u60A8\u7684 " + e.accountName + " \u5E10\u6237\u9700\u8981\u89E3\u9501\u624D\u80FD\u586B\u5145\u6B64\u5BC6\u7801\u3002\u89E3\u9501\u5E76\u91CD\u8BD5\u3002"
        },
        "a--item-": function(e) {
            return "\u4E00\u4E2A " + e.item
        },
        "an--item-": function(e) {
            return "\u4E00\u4E2A " + e.item
        },
        email: function(e) {
            return "\u7535\u5B50\u90AE\u4EF6"
        },
        "every-month": function(e) {
            return "\u6BCF\u6708"
        },
        "every-quarter": function(e) {
            return "\u6BCF\u5B63\u5EA6"
        },
        "every-transaction": function(e) {
            return "\u6BCF\u7B14\u4EA4\u6613"
        },
        "every-year": function(e) {
            return "\u6BCF\u5E74"
        },
        forever: function(e) {
            return "\u6C38\u8FDC"
        },
        "in-1-Month": function(e) {
            return "1 \u4E2A\u6708\u540E"
        },
        "in-1-Year": function(e) {
            return "1 \u5E74\u540E"
        },
        "in-7-Days": function(e) {
            return "7 \u5929\u540E"
        },
        "loading---": function(e) {
            return "\u6B63\u5728\u52A0\u8F7D..."
        },
        "one-time": function(e) {
            return "\u4E00\u6B21\u6027"
        },
        "one-time-password": function(e) {
            return "\u4E00\u6B21\u6027\u5BC6\u7801"
        },
        "system-authentication": function(e) {
            return "\u7CFB\u7EDF\u9A8C\u8BC1"
        },
        "auth-unfamiliar-website": function(e) {
            return "\u4E0D\u719F\u6089\u7684\u7F51\u7AD9"
        },
        "auth-type-code-to-fill": function(e) {
            return "\u8F93\u5165 " + e.code + " \u4EE5\u6388\u6743 " + e.type + " \u586B\u5145" + e.website + "\u3002"
        },
        "auth-filling-on-website": function(e) {
            return "\u5728 " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "\u8F93\u5165\u4E86\u4E0D\u6B63\u786E\u7684\u4EE3\u7801"
        },
        "auth-why-is-this-needed": function(e) {
            return "\u4E3A\u4EC0\u4E48\u9700\u8981\u6B64\u64CD\u4F5C\uFF1F"
        },
        "item-use-suggested-password": function(e) {
            return "\u4F7F\u7528\u5EFA\u8BAE\u7684\u5BC6\u7801"
        },
        "item-create-privacy-card": function(e) {
            return "\u521B\u5EFA Privacy \u5361\u7247"
        },
        "item-create-email-alias": function(e) {
            return "\u521B\u5EFA\u8499\u9762\u7535\u5B50\u90AE\u4EF6"
        },
        "item-type-credit-card": function(e) {
            return "\u4FE1\u7528\u5361"
        },
        "item-type-identity": function(e) {
            return "\u8EAB\u4EFD\u6807\u8BC6"
        },
        "item-type-unspecified": function(e) {
            return "\u9879\u76EE"
        },
        categories: function(e) {
            return "\u7C7B\u522B"
        },
        "category-suggestions": function(e) {
            return "\u5EFA\u8BAE"
        },
        "category-logins": function(e) {
            return "\u767B\u5F55\u4FE1\u606F"
        },
        "category-identities": function(e) {
            return "\u8EAB\u4EFD\u6807\u8BC6"
        },
        "category-credit-cards": function(e) {
            return "\u4FE1\u7528\u5361"
        },
        "category-generated-password": function(e) {
            return "\u5DF2\u751F\u6210\u7684\u5BC6\u7801"
        },
        "category-hide-on-this-page": function(e) {
            return "\u5728\u6B64\u9875\u9762\u9690\u85CF"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "\u8BF7\u4ECE\u5DE5\u5177\u680F\u56FE\u6807\u4E2D\u89E3\u9501 1Password\u3002"
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "\u6309\u4E0B " + e.shortcut + " \u6765\u89E3\u9501 1Password"
        },
        "locked-request-unlock": function(e) {
            return "\u6253\u5F00 1Password"
        },
        "notification-add-account": function(e) {
            return "\u5C06\u5E10\u6237\u6DFB\u52A0\u5230"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "\u4E4B\u540E\u60A8\u53EF\u4EE5\u5728 1Password \u4E2D\u6DFB\u52A0\u548C\u79FB\u9664\u5E10\u6237"
        },
        "notification-settings": function(e) {
            return "\u8BBE\u7F6E"
        },
        "notification-add-account-never": function(e) {
            return "\u4ECE\u4E0D"
        },
        "notification-add-account-confirm": function(e) {
            return "\u6DFB\u52A0"
        },
        "authorize-fill": function(e) {
            return "\u70B9\u51FB OK \u4EE5\u5728 " + e.host + " \u586B\u5199\u60A8 1Password \u7684\u9879\u76EE"
        },
        "authorize-fill-brex": function(e) {
            return "\u70B9\u51FB OK \u521B\u5EFA Brex \u5361\u7247\uFF0C\u5E76\u4F7F\u7528 1Password \u5728 " + e.host + " \u586B\u5165"
        },
        "authorize-fill-privacy": function(e) {
            return "\u70B9\u51FB OK \u5236\u4F5C Privacy \u5361\u7247\uFF0C\u5E76\u4F7F\u7528 1Password \u5728 " + e.host + " \u586B\u5165"
        },
        "authorize-fill-protocol": function(e) {
            return `1Password \u8B66\u544A\uFF1A\u8FD9\u662F\u4E0D\u5B89\u5168\u7684\uFF08HTTP\uFF09\u9875\u9762\uFF0C\u4F60\u63D0\u4EA4\u7684\u4EFB\u4F55\u4FE1\u606F\u90FD\u53EF\u80FD\u88AB\u4ED6\u4EBA\u770B\u5230\u6216\u66F4\u6539\u3002

\u4F60\u786E\u5B9A\u4ECD\u7136\u8981\u586B\u4E9B\u6B64\u9879\u76EE\u5417\uFF1F`
        },
        "tooltip-close-1password": function(e) {
            return "\u5173\u95ED"
        },
        "tooltip-open-1password": function(e) {
            return "\u6253\u5F00"
        },
        "tooltip-no-items": function(e) {
            return "\u6CA1\u6709\u53EF\u663E\u793A\u7684\u9879\u76EE"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `\u6309\u4E0B\u6D4F\u89C8\u5668\u5DE5\u5177\u680F\u4E0A\u7684
1Password \u56FE\u6807\u4EE5\u89E3\u9501`
        },
        "tooltip-unlock-1password": function(e) {
            return "\u89E3\u9501 1Password"
        },
        Title: function(e) {
            return "\u6807\u9898"
        },
        "save-in-header": function(e) {
            return "\u4FDD\u5B58\u5728"
        },
        "save-item": function(e) {
            return "\u4FDD\u5B58\u9879\u76EE"
        },
        "update-item": function(e) {
            return "\u66F4\u65B0\u9879\u76EE"
        },
        "select-item": function(e) {
            return "\u9009\u62E9\u9879\u76EE"
        },
        "Save-new-Login": function(e) {
            return "\u4FDD\u5B58\u65B0\u767B\u5F55\u4FE1\u606F"
        },
        cancel: function(e) {
            return "\u53D6\u6D88"
        },
        close: function(e) {
            return "\u5173\u95ED"
        },
        confirm: function(e) {
            return "\u786E\u8BA4"
        },
        "unknown-item": function(e) {
            return "\u672A\u77E5\u9879\u76EE"
        },
        "save-in": function(e) {
            return "\u4FDD\u5B58\u5728"
        },
        "select-a-vault": function(e) {
            return "\u9009\u62E9\u4FDD\u9669\u5E93"
        },
        "locked-title": function(e) {
            return "1Password \u88AB\u9501\u5B9A"
        },
        "locked-message": function(e) {
            return "\u8981\u7EE7\u7EED\u4F7F\u7528 1Password \u4FDD\u5B58\uFF0C\u8BF7\u89E3\u9501\u4E00\u4E2A\u5E10\u6237\u3002"
        },
        "offline-title": function(e) {
            return "\u60A8\u7684\u5E10\u6237\u5DF2\u79BB\u7EBF\u3002"
        },
        "offline-message": function(e) {
            return "\u4F60\u5728\u767B\u5F55\u5E76\u4E0A\u7EBF\u4E4B\u524D\u5C06\u65E0\u6CD5\u4FDD\u5B58\u6B64\u9879\u76EE\u3002"
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "\u6309\u4E0B\u6D4F\u89C8\u5668\u5DE5\u5177\u680F\u4E0A\u7684 1Password \u56FE\u6807\u4EE5\u6253\u5F00 1Password\u3002"
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "\u6309\u4E0B " + e.shortcut + " \u6765\u6253\u5F00 1Password\u3002"
        },
        "current-item": function(e) {
            return "\u5F53\u524D\u9879\u76EE"
        },
        "updated-item": function(e) {
            return "\u5DF2\u66F4\u65B0\u7684\u9879\u76EE"
        },
        "add-tag": function(e) {
            return "\u6DFB\u52A0\u6807\u7B7E"
        },
        "remove-tag": function(e) {
            return "\u79FB\u9664\u6807\u7B7E"
        },
        "sso-info-banner": function(e) {
            return "\u94FE\u63A5\u7684\u767B\u5F55\u4FE1\u606F\u7684\u65B0\u9879\u76EE\u5E94\u5F53\u4FDD\u5B58\u5728\u540C\u4E00\u4E2A\u4FDD\u9669\u5E93\u4E2D\uFF0C\u5E76\u5E94\u5C5E\u4E8E\u540C\u4E00\u4E2A\u5E10\u6237\u3002"
        },
        "new-item": function(e) {
            return "\u65B0\u5EFA\u9879\u76EE"
        },
        "update-existing": function(e) {
            return "\u66F4\u65B0\u73B0\u6709"
        },
        "enable-privacy-header": function(e) {
            return "\u6DFB\u52A0\u81F3 1Password"
        },
        "enable-privacy-description": function(e) {
            return "\u4F7F\u7528 1Password \u5728\u7EBF\u4E0A\u6D88\u8D39\u65F6\u5236\u4F5C\u5E76\u586B\u5165 Privacy Card\uFF0C\u50A8\u5B58\u5546\u4E1A\u5361\u8FD8\u80FD\u5728\u672A\u6765\u4F7F\u7528\u3002"
        },
        "enable-privacy-choose-account": function(e) {
            return "\u9009\u62E9\u4E00\u4E2A\u5E10\u6237"
        },
        "enable-privacy-add-button": function(e) {
            return "\u6DFB\u52A0\u81F3 1Password"
        },
        "enable-privacy-error": function(e) {
            return "\u65E0\u6CD5\u542F\u7528 Privacy \u6574\u5408\u3002\u8BF7\u518D\u8BD5\u4E00\u6B21\u3002"
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "\u8BF7\u89E3\u9501\u9009\u62E9\u7684\u5E10\u6237\u4EE5\u542F\u7528\u6574\u5408\u529F\u80FD\u3002"
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "\u8BF7\u89E3\u9501 1Password \u4EE5\u542F\u7528\u6574\u5408\u529F\u80FD\u3002"
        },
        "privacy-error-enable-header": function(e) {
            return "\u65E0\u6CD5\u542F\u7528\u6574\u5408"
        },
        "privacy-error-header": function(e) {
            return "\u53D1\u751F\u9519\u8BEF"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "\u9700\u8981 1Password \u4F1A\u5458\u624D\u80FD\u4E0E Privacy \u6574\u5408\u3002"
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "\u8BF7\u5148\u786E\u4FDD\u60A8\u7684 Privacy.com \u5E10\u6237\u81F3\u5C11\u6709\u5173\u8FDE\u4E00\u4E2A\u8D44\u91D1\u6765\u6E90\uFF0C\u4E4B\u540E\u518D\u91CD\u8BD5\u4E00\u6B21\u3002"
        },
        "privacy-error-unexpected-error": function(e) {
            return "\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002\u8BF7\u8054\u7CFB support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "\u786E\u5B9A"
        },
        "privacy-once": function(e) {
            return "\u6BCF\u6708"
        },
        "privacy-monthly": function(e) {
            return "\u6BCF\u6708"
        },
        "privacy-annually": function(e) {
            return "\u6BCF\u5E74"
        },
        "privacy-transaction": function(e) {
            return "\u6BCF\u7B14\u4EA4\u6613"
        },
        "privacy-forever": function(e) {
            return "\u6C38\u8FDC"
        },
        "privacy-single-use": function(e) {
            return "\u4E00\u6B21\u6027\u4F7F\u7528"
        },
        "privacy-header": function(e) {
            return "\u521B\u5EFA Privacy \u5361\u7247"
        },
        "privacy-card-name-label": function(e) {
            return "\u5361\u7247\u540D\u79F0"
        },
        "privacy-spend-limit-label": function(e) {
            return "\u8BBE\u5B9A\u652F\u4ED8\u9650\u989D"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "\u9891\u7387"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "\u652F\u4ED8\u9650\u989D"
        },
        "privacy-funding-account-label": function(e) {
            return "\u8D44\u91D1\u6765\u6E90"
        },
        "privacy-save-label": function(e) {
            return "\u5728 1Password \u4E2D\u4FDD\u5B58"
        },
        "privacy-create-button": function(e) {
            return "\u521B\u5EFA\u5E76\u586B\u5145"
        },
        "privacy-error-integration-disabled": function(e) {
            return "\u8BF7\u5728\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177\u5185\u5BB9\u83DC\u5355\u5F00\u542F Privacy \u6574\u5408\u3002"
        },
        "privacy-error-app-locked": function(e) {
            return "1Password \u5DF2\u9501\u5B9A\u3002\u8BF7\u89E3\u9501\u540E\u91CD\u8BD5\u3002"
        },
        "privacy-error-vault-locked": function(e) {
            return "\u8FD9\u4E2A\u4FDD\u9669\u5E93\u5DF2\u9501\u5B9A\u3002\u8BF7\u89E3\u9501\u540E\u91CD\u8BD5\u3002"
        },
        "privacy-error-no-vault-selected": function(e) {
            return "\u8BF7\u9009\u62E9\u4FDD\u9669\u5E93\u3002"
        },
        "privacy-error-save-failed": function(e) {
            return "\u65E0\u6CD5\u50A8\u5B58\u9879\u76EE\u3002\u8BF7\u68C0\u67E5\u4FDD\u9669\u5E93\u662F\u5426\u89E3\u9501\u540E\u518D\u8BD5\u4E00\u6B21\u3002"
        },
        "privacy-error-empty-card-name": function(e) {
            return "\u8BF7\u4E3A\u5361\u7247\u547D\u540D\u3002"
        },
        "privacy-error-card-name-too-large": function(e) {
            return "\u8BF7\u4E3A\u5361\u7247\u53D6\u4E2A\u77ED\u4E00\u70B9\u7684\u540D\u5B57\u3002"
        },
        "privacy-error-empty-limit": function(e) {
            return "\u8BF7\u63D0\u4F9B\u5361\u7247\u652F\u4ED8\u989D\u5EA6\u3002"
        },
        "privacy-error-limit-too-large": function(e) {
            return "\u8BF7\u8F93\u5165\u8F83\u5C0F\u7684\u5361\u7247\u989D\u5EA6\u3002"
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "\u65E0\u6CD5\u89E3\u6790 url"
        },
        "privacy-error-http-error": function(e) {
            return "\u6211\u4EEC\u65E0\u6CD5\u8FDE\u63A5 Privacy\u3002\u8BF7\u786E\u8BA4\u4F60\u7684\u4E92\u8054\u7F51\u8FDE\u63A5\u5E76\u518D\u8BD5\u4E00\u6B21\u3002"
        },
        "privacy-error-invalid-api-key": function(e) {
            return "\u65E0\u6CD5\u4F7F\u7528 Privacy \u9A8C\u8BC1\u3002\u8BF7\u786E\u8BA4\u4F60\u7684 API \u91D1\u94A5\u5E76\u518D\u8BD5\u4E00\u6B21\u3002"
        },
        "privacy-error-api-error-with-message": function(e) {
            return "\u5236\u4F5C\u5361\u7247\u65F6\u53D1\u751F\u95EE\u9898\uFF1A" + e.message
        },
        "privacy-error-api-error": function(e) {
            return "\u5236\u4F5C\u5361\u7247\u65F6\u53D1\u751F\u95EE\u9898\u3002"
        },
        "privacy-error-brain-error": function(e) {
            return "\u65E0\u6CD5\u4ECE Privacy \u5361\u7247\u5236\u4F5C\u4FE1\u7528\u5361\u3002"
        },
        "privacy-error-default": function(e) {
            return "\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002"
        },
        "notification-save-in": function(e) {
            return "\u4FDD\u5B58\u5728"
        },
        "notification-save-secondary": function(e) {
            return "\u5728 1Password \u4E2D\u4FDD\u5B58 " + e.host + " \u767B\u5F55\u4FE1\u606F\u5417\uFF1F"
        },
        "notification-save-save": function(e) {
            return "\u4FDD\u5B58"
        },
        "ssh-title": function(e) {
            return "\u521B\u5EFA\u5E76\u586B\u5145 SSH \u5BC6\u94A5"
        },
        "ssh-create-button": function(e) {
            return "\u521B\u5EFA\u5E76\u586B\u5145"
        },
        "ssh-error-message": function(e) {
            return "\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002\u8BF7\u8054\u7CFB support@1password.com"
        },
        "unexpected-error": function(e) {
            return "\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002\u8BF7\u8054\u7CFB support@1password.com"
        },
        "login-duplicate": function(e) {
            return "\u5DF2\u4FDD\u5B58"
        },
        "social-login-linked": function(e) {
            return e.item + " \u5DF2\u94FE\u63A5\u5230\uFF1A"
        },
        "social-login-locked": function(e) {
            return "\u6309\u4E0B\u6D4F\u89C8\u5668\u5DE5\u5177\u680F\u4E0A\u7684 1Password \u56FE\u6807\u4EE5\u89E3\u9501\u3002"
        },
        "social-login-no-items": function(e) {
            return "\u672A\u627E\u5230\u7528\u4E8E\u767B\u5F55\u7684\u9879\u76EE\u3002"
        },
        "social-login-provider-used": function(e) {
            return e.provider + " \u88AB\u7528\u4E8E\u767B\u5F55\uFF1A"
        },
        "social-login-save-in-1password": function(e) {
            return "\u5728 1Password \u4E2D\u4FDD\u5B58\uFF1F"
        },
        "social-login-save-item": function(e) {
            return "\u4FDD\u5B58\u9879\u76EE"
        },
        "social-login-save-item-locked": function(e) {
            return "\u89E3\u9501\u4EE5\u4FDD\u5B58"
        },
        "social-login-sign-in-with": function(e) {
            return "\u767B\u5F55\u65B9\u5F0F\u4E3A\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "\u901A\u8FC7 " + e.title + ": " + e.subtitle + " \u767B\u5F55"
        },
        "social-login-sign-in": function(e) {
            return "\u767B\u5F55"
        },
        "social-login-select-provider": function(e) {
            return "\u9009\u62E9 " + e.provider + " \u767B\u5F55"
        },
        "social-login-add-existing": function(e) {
            return "\u6DFB\u52A0\u5DF2\u6709\u7684\u5E10\u6237\u4FE1\u606F\u4EE5\u767B\u5F55"
        },
        "social-login-sign-in-with-label": function(e) {
            return "\u767B\u5F55\u65B9\u5F0F\u4E3A"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "\u9009\u62E9\u60A8\u7684\u767B\u5F55\u65B9\u5F0F"
        },
        "social-login-save-provider-only-title": function(e) {
            return "\u4FDD\u5B58\u4E3A\u901A\u7528 " + e.provider + " \u9879\u76EE"
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "\u53EA\u4FDD\u5B58\u4F60\u4F7F\u7528 " + e.provider + " \u4F5C\u4E3A\u767B\u5F55\u65B9\u5F0F"
        },
        "shell-plugin-create-title": function(e) {
            return "\u65B0\u5EFA\u5916\u58F3\u63D2\u4EF6\u9879\u76EE"
        },
        "shell-plugin-create-button": function(e) {
            return "\u4FDD\u5B58\u9879\u76EE"
        },
        "autosave-title-save": function(e) {
            return "\u4FDD\u5B58 " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + " \u5DF2\u4FDD\u5B58"
        },
        "autosave-title-update": function(e) {
            return "\u66F4\u65B0 " + e.item
        },
        "autosave-title-updated": function(e) {
            return e.item + " \u5DF2\u66F4\u65B0"
        },
        "autosave-save-type-generic": function(e) {
            return "\u9879\u76EE"
        },
        "autosave-save-type-login": function(e) {
            return "\u767B\u5F55"
        },
        "autosave-save-type-credit-card": function(e) {
            return "\u4FE1\u7528\u5361"
        },
        "autosave-save-type-identity": function(e) {
            return "\u8EAB\u4EFD\u6807\u8BC6"
        }
    },
    "zh-TW": {
        "-credentialName--saved-in-1Password": function(e) {
            return e.credentialName + " \u5DF2\u5132\u5B58\u5728 1Password \u4E2D"
        },
        "1Password-Shell-Plugin-available-for--platformName-": function(e) {
            return "\u9069\u7528\u65BC " + e.platformName + " \u7684 1Password \u6BBC\u5C64\u5916\u639B\u7A0B\u5F0F\u53EF\u7528"
        },
        "1Password-encountered-a-problem-": function(e) {
            return "1Password \u9047\u5230\u554F\u984C\u3002"
        },
        "1Password-is-locked--Please-try-again-after-unlocking-": function(e) {
            return "1Password \u5DF2\u9396\u4E0A\u3002\u8ACB\u89E3\u9396\u5F8C\u91CD\u8A66\u3002"
        },
        "1Password-will-now-sign-in-automatically-after-autofilling-your-credentials-": function(e) {
            return "1Password \u5728\u81EA\u52D5\u586B\u5165\u8EAB\u4EFD\u8CC7\u8A0A\u5F8C\u5C07\u81EA\u52D5\u767B\u5165\u3002"
        },
        "A-duration-for-the-spending-limit-is-required": function(e) {
            return "\u9700\u8981\u6709\u652F\u4ED8\u9650\u984D\u7684\u671F\u9650"
        },
        "A-problem-occurred-when-communicating-with-Brex-com--Please-try-again": function(e) {
            return "\u8207 Brex.com \u901A\u8A0A\u6642\u9047\u5230\u554F\u984C\u3002\u8ACB\u518D\u8A66\u4E00\u6B21"
        },
        "A-quicker-way-to-sign-in": function(e) {
            return "\u66F4\u5FEB\u6377\u7684\u767B\u5165"
        },
        "A-security-breach-on-this-website-has-put-your-current-password-at-risk-": function(e) {
            return "\u8A72\u7DB2\u7AD9\u7684\u5B89\u5168\u6F0F\u6D1E\u5DF2\u4F7F\u60A8\u7684\u7576\u524D\u5BC6\u78BC\u9762\u81E8\u98A8\u96AA"
        },
        "A-title-is-required": function(e) {
            return "\u9700\u8981\u6A19\u984C"
        },
        "Add-account": function(e) {
            return "\u65B0\u589E\u5E33\u865F"
        },
        "Add-account-to-1Password-browser-extension": function(e) {
            return "\u65B0\u589E\u5E33\u865F\u81F3 1Password \u700F\u89BD\u5668\u64F4\u5145\u5143\u4EF6"
        },
        "All-vaults-are-disabled-": function(e) {
            return "\u6240\u6709\u4FDD\u96AA\u5EAB\u5DF2\u505C\u7528\u3002"
        },
        "An-error-has-occurred": function(e) {
            return "\u767C\u751F\u932F\u8AA4"
        },
        "An-unexpected-error-occurred--Please-contact-support-1password-com": function(e) {
            return "\u767C\u751F\u610F\u5916\u932F\u8AA4\u3002\u8ACB\u806F\u7E6B support@1password.com"
        },
        "Assign-to-Account": function(e) {
            return "\u5206\u914D\u5230\u5E33\u865F"
        },
        Back: function(e) {
            return "\u8FD4\u56DE"
        },
        "Brex-cards-are-stored-and-sync-from-Brex-com-": function(e) {
            return "Brex \u5361\u662F\u7531 Brex.com \u5B58\u5132\u548C\u540C\u6B65\u7684\u3002"
        },
        "Brex-will-auto-fill-transaction-memos-on-this-card-": function(e) {
            return "Brex \u5C07\u81EA\u52D5\u5728\u6B64\u5361\u4E0A\u586B\u5BEB\u4EA4\u6613\u5099\u5FD8\u3002"
        },
        Cancel: function(e) {
            return "\u53D6\u6D88"
        },
        "Change-now": function(e) {
            return "\u7ACB\u5373\u8B8A\u66F4"
        },
        "Change-this-compromised-password": function(e) {
            return "\u8B8A\u66F4\u6709\u6D29\u6F0F\u98A8\u96AA\u7684\u5BC6\u78BC"
        },
        "Choose-an-account": function(e) {
            return "\u9078\u64C7\u4E00\u500B\u5E33\u865F"
        },
        Close: function(e) {
            return "\u95DC\u9589"
        },
        "Conceal-previous-value": function(e) {
            return "\u96B1\u85CF\u4E4B\u524D\u7684\u503C"
        },
        "Connect-to-the-internet-and-then-try-again-": function(e) {
            return "\u9023\u63A5\u5230\u7DB2\u8DEF\u4E26\u518D\u8A66\u4E00\u6B21\u3002"
        },
        "Connecting-to-Privacy-Card-": function(e) {
            return "\u6B63\u5728\u9023\u63A5 Privacy \u5361\u7247\u2026"
        },
        "Contact-Support": function(e) {
            return "\u806F\u7D61\u652F\u63F4"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-default-account-": function(e) {
            return "\u806F\u7D61\u652F\u63F4\u4EBA\u54E1\u5C0B\u6C42\u5354\u52A9\uFF0C\u4E26\u544A\u8A34\u5C0D\u65B9\u9047\u5230\u4E86\u9810\u8A2D\u5E33\u865F\u7684\u554F\u984C\u3002"
        },
        "Contact-support-for-help--and-tell-them-it-s-a-problem-with-the-generated-password-vault-": function(e) {
            return "\u806F\u7D61\u652F\u63F4\u4EBA\u54E1\u5C0B\u6C42\u5354\u52A9\uFF0C\u4E26\u544A\u8A34\u5C0D\u65B9\u9047\u5230\u4E86\u7522\u751F\u7684\u5BC6\u78BC\u4FDD\u96AA\u5EAB\u7684\u554F\u984C\u3002"
        },
        "Create---Fill": function(e) {
            return "\u5EFA\u7ACB\u4E26\u586B\u5165"
        },
        "Create-Brex-vendor-card-": function(e) {
            return "\u5EFA\u7ACB Brex \u4F9B\u61C9\u5546\u5361\u7247\u2026"
        },
        "Create-Masked-Email": function(e) {
            return "\u5EFA\u7ACB\u8499\u9762\u96FB\u5B50\u90F5\u4EF6"
        },
        Custom: function(e) {
            return "\u81EA\u8A02"
        },
        Dismiss: function(e) {
            return "\u95DC\u9589"
        },
        "Don-t-ask-again": function(e) {
            return "\u4E0D\u518D\u8A62\u554F"
        },
        "Download-1Password-8": function(e) {
            return "\u4E0B\u8F09 1Password 8"
        },
        Edit: function(e) {
            return "\u7DE8\u8F2F"
        },
        "Enter-the-amount-in-dollars": function(e) {
            return "\u8ACB\u4EE5\u7F8E\u91D1\u70BA\u55AE\u4F4D\u8F38\u5165\u91D1\u984D"
        },
        Error: function(e) {
            return "\u932F\u8AA4"
        },
        "Existing-items": function(e) {
            return "\u73FE\u6709\u9805\u76EE"
        },
        "Failed-to-load-item-": function(e) {
            return "\u8F09\u5165\u9805\u76EE\u5931\u6557\u3002"
        },
        "Failed-to-save-item-": function(e) {
            return "\u5132\u5B58\u9805\u76EE\u5931\u6557\u3002"
        },
        "Fill-Email": function(e) {
            return "\u586B\u5165\u96FB\u5B50\u90F5\u4EF6"
        },
        "Funding-Source": function(e) {
            return "\u8CC7\u91D1\u4F86\u6E90"
        },
        "Get-Help-": function(e) {
            return "\u53D6\u5F97\u8AAA\u660E\u2026"
        },
        "Got-it": function(e) {
            return "\u77E5\u9053\u4E86"
        },
        "Input-field-for-the-item-s-title": function(e) {
            return "\u9805\u76EE\u6A19\u984C\u7684\u8F38\u5165\u6B04\u4F4D"
        },
        "Invalid-one-time-password-secret-": function(e) {
            return "\u7121\u6548\u7684\u4E00\u6B21\u6027\u5BC6\u78BC\u3002"
        },
        "Learn-more-": function(e) {
            return "\u9032\u4E00\u6B65\u77AD\u89E3\u2026"
        },
        "Loading-": function(e) {
            return "\u6B63\u5728\u8F09\u5165\u22EF"
        },
        Lock: function(e) {
            return "\u4E0A\u9396"
        },
        "Lock-Card": function(e) {
            return "\u9396\u4E0A\u5361\u7247"
        },
        "Lock-card-is-required": function(e) {
            return "\u9700\u8981\u9396\u4E0A\u5361\u7247"
        },
        "Make-sure-1Password-accounts-containing-logins-for-this-site-are-unlocked-": function(e) {
            return "\u78BA\u4FDD\u5305\u542B\u6B64\u7DB2\u7AD9\u767B\u5165\u8CC7\u8A0A\u7684 1Password \u5E33\u865F\u5DF2\u89E3\u9396\u3002"
        },
        "New-Item": function(e) {
            return "\u65B0\u589E\u9805\u76EE"
        },
        "Next-step--Set-up-SSH-Agent": function(e) {
            return "\u4E0B\u4E00\u6B65\uFF1A\u8A2D\u5B9A SSH Agent"
        },
        "No-logins-found": function(e) {
            return "\u6C92\u6709\u627E\u5230\u767B\u5165\u8CC7\u6599"
        },
        "No-passkeys-found": function(e) {
            return "\u672A\u627E\u5230\u901A\u884C\u5BC6\u9470"
        },
        None: function(e) {
            return "\u7121"
        },
        OK: function(e) {
            return "\u597D"
        },
        "Once-saved--we-ll-remember-it-for-you-": function(e) {
            return "\u5132\u5B58\u4E4B\u5F8C\uFF0C\u6211\u5011\u6703\u70BA\u4F60\u8A18\u4F4F\u3002"
        },
        Overwrite: function(e) {
            return "\u8986\u5BEB"
        },
        "Overwrite-one-time-password-": function(e) {
            return "\u8986\u5BEB\u4E00\u6B21\u6027\u5BC6\u78BC\uFF1F"
        },
        "Passkey-saved": function(e) {
            return "\u5BC6\u9470\u5DF2\u5132\u5B58"
        },
        "Please-sign-in-to-1Password-to-keep-yourself-safe-online-and-make-it-easy-to-save-and-fill-your-passwords-": function(e) {
            return "\u8ACB\u767B\u5165 1Password \u4EE5\u4FDD\u8B77\u7DB2\u8DEF\u5B89\u5168\uFF0C\u4E26\u8B93\u5132\u5B58\u548C\u586B\u5165\u5BC6\u78BC\u8B8A\u5F97\u7C21\u55AE\u3002"
        },
        "Press-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u6309\u4E0B\u700F\u89BD\u5668\u5DE5\u5177\u5217\u4E0A\u7684 1Password \u5716\u793A\u4EE5\u89E3\u9396\u3002"
        },
        Previous: function(e) {
            return "\u4E0A\u4E00\u6B65"
        },
        "Privacy-Card": function(e) {
            return "Privacy \u5361\u7247"
        },
        "Reason-for-card": function(e) {
            return "\u5361\u7247\u7406\u7531"
        },
        Regenerate: function(e) {
            return "\u91CD\u65B0\u7522\u751F"
        },
        "Regenerate-again-in--secondsLeft-s": function(e) {
            return e.secondsLeft + " \u79D2\u5F8C\u518D\u6B21\u91CD\u65B0\u7522\u751F"
        },
        "Reveal-previous-value": function(e) {
            return "\u986F\u793A\u4E4B\u524D\u7684\u503C"
        },
        "Reveal-to-see-previous-value": function(e) {
            return "\u986F\u793A\u4EE5\u67E5\u770B\u4E4B\u524D\u7684\u503C"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-Agent--available-on-1Password-8-": function(e) {
            return "SSH \u91D1\u9470\u5DF2\u5EFA\u7ACB\u3002\u8981\u5728\u672C\u6A5F\u4F7F\u7528\u6B64\u91D1\u9470\uFF0C\u8ACB\u8A2D\u5B9A 1Password \u7684 SSH Agent\uFF0C\u5728 1Password 8 \u4E2D\u63D0\u4F9B\u3002"
        },
        "SSH-key-created--To-use-this-key-locally--set-up-the-1Password-SSH-agent-": function(e) {
            return "SSH \u91D1\u9470\u5DF2\u5EFA\u7ACB\u3002\u8981\u5728\u672C\u6A5F\u4F7F\u7528\u6B64\u91D1\u9470\uFF0C\u8ACB\u8A2D\u5B9A 1Password \u7684 SSH Agent\u3002"
        },
        Save: function(e) {
            return "\u5132\u5B58"
        },
        "Save-Item": function(e) {
            return "\u5132\u5B58\u9805\u76EE"
        },
        "Save-in-1Password-": function(e) {
            return "\u5728 1Password \u4E2D\u5132\u5B58\uFF1F"
        },
        "Save-item": function(e) {
            return "\u5132\u5B58\u9805\u76EE"
        },
        "Save-one-time-password": function(e) {
            return "\u5132\u5B58\u4E00\u6B21\u6027\u5BC6\u78BC"
        },
        "Save-one-time-passwords-that-will-be-automatically-filled-during-sign-in-": function(e) {
            return "\u5132\u5B58\u767B\u5165\u6642\u81EA\u52D5\u586B\u5BEB\u7684\u4E00\u6B21\u6027\u5BC6\u78BC\u3002"
        },
        "Save-or-update-information-dialog-in-1Password": function(e) {
            return "\u5728 1Password \u4E2D\u5132\u5B58\u6216\u66F4\u65B0\u8CC7\u8A0A\u5C0D\u8A71\u65B9\u584A"
        },
        "Save-passkey": function(e) {
            return "\u5132\u5B58\u5BC6\u9470"
        },
        "Saved-one-time-password": function(e) {
            return "\u5DF2\u5132\u5B58\u7684\u4E00\u6B21\u6027\u5BC6\u78BC"
        },
        "Select-account": function(e) {
            return "\u9078\u64C7\u5E33\u865F"
        },
        "Select-the-1Password-icon-in-your-browser-s-toolbar-to-unlock-": function(e) {
            return "\u9078\u64C7\u700F\u89BD\u5668\u5DE5\u5177\u5217\u4E0A\u7684 1Password \u5716\u793A\u4EE5\u89E3\u9396\u3002"
        },
        "Session-expired-for-tab-": function(e) {
            return "\u6A19\u7C64\u5DE5\u4F5C\u968E\u6BB5\u904E\u671F"
        },
        "Set-Spending-Limit": function(e) {
            return "\u8A2D\u5B9A\u652F\u4ED8\u9650\u984D"
        },
        "Set-up-SSH-Agent": function(e) {
            return "\u8A2D\u5B9A SSH Agent"
        },
        "Sign-in": function(e) {
            return "\u767B\u5165"
        },
        "Sign-in-to-1Password": function(e) {
            return "\u767B\u5165 1Password"
        },
        "Sign-in-to-websites-with-one-click--easily-save-your-information--and-generate-new-passwords-with-the-browser-extension-": function(e) {
            return "\u4E00\u9375\u767B\u5165\u7DB2\u7AD9\uFF0C\u8F15\u9B06\u4FDD\u5B58\u60A8\u7684\u8CC7\u8A0A\uFF0C\u4E26\u4F7F\u7528\u700F\u89BD\u5668\u64F4\u5145\u5143\u4EF6\u7522\u751F\u65B0\u5BC6\u78BC\u3002"
        },
        "Sign-in-with-a-passkey": function(e) {
            return "\u900F\u904E\u901A\u884C\u5BC6\u9470\u767B\u5165"
        },
        "Something-went-wrong": function(e) {
            return "\u51FA\u932F\u4E86"
        },
        "Spending-Limit": function(e) {
            return "\u652F\u4ED8\u9650\u984D"
        },
        "Step-3--Review-or-edit-your-new-login-item--then-save-it-": function(e) {
            return "\u7B2C 3 \u6B65\uFF1A\u6AA2\u67E5\u6216\u7DE8\u8F2F\u65B0\u7684\u767B\u5165\u9805\u76EE\uFF0C\u7136\u5F8C\u5132\u5B58\u3002"
        },
        "Store-your--credentialName--in-1Password-and-authenticate--platformName--CLI-with--authType--": function(e) {
            return "\u5C07 " + e.credentialName + " \u5B58\u5132\u5728 1Password \u4E2D\u4E26\u900F\u904E " + e.authType + " \u9A57\u8B49 " + e.platformName + " CLI\u3002"
        },
        "The-integration-with-Brex-has-been-disabled--please-reconnect-it-on-1Password-com": function(e) {
            return "\u8207 Brex \u7684\u6574\u5408\u5DF2\u88AB\u505C\u7528\uFF0C\u8ACB\u91CD\u65B0\u8207 1Password.com \u9023\u63A5"
        },
        "The-one-time-password-in-this-item-will-be-replaced-": function(e) {
            return "\u6B64\u9805\u76EE\u4E2D\u7684\u4E00\u6B21\u6027\u5BC6\u78BC\u5C07\u88AB\u53D6\u4EE3\u3002"
        },
        "The-reason-for-a-card-is-required": function(e) {
            return "\u5361\u7247\u7406\u7531\u662F\u5FC5\u9700\u7684"
        },
        "The-request-to-create-a-passkey-timed-out-": function(e) {
            return "\u5EFA\u7ACB\u901A\u884C\u5BC6\u9470\u5DF2\u8D85\u6642\u3002"
        },
        "The-spending-limit-is-required": function(e) {
            return "\u652F\u4ED8\u9650\u984D\u662F\u5FC5\u9700\u7684"
        },
        "Then-tap-the-offline-indicator----offlineIndicator------and-finish-signing-in-to-save-your-changes-": function(e) {
            return "\u7136\u5F8C\u8F15\u6309\u96E2\u7DDA\u6307\u793A\u5668\uFF08<offlineIndicator />\uFF09\u5B8C\u6210\u767B\u5165\u4EE5\u5132\u5B58\u8B8A\u66F4\u3002"
        },
        "To-save--item---unlock-1Password-first-": function(e) {
            return "\u82E5\u8981\u5132\u5B58 " + e.item + "\uFF0C\u9700\u5148\u89E3\u9396 1Password\u3002"
        },
        "To-save-a-passkey--unlock-1Password-first-": function(e) {
            return "\u82E5\u8981\u5132\u5B58\u901A\u884C\u5BC6\u9470\uFF0C\u9700\u5148\u89E3\u9396 1Password\u3002"
        },
        "To-use-your-passkey--unlock-1Password-first-": function(e) {
            return "\u82E5\u8981\u4F7F\u7528\u901A\u884C\u5BC6\u9470\uFF0C\u9700\u5148\u89E3\u9396 1Password\u3002"
        },
        "Touch-ID-or-Apple-Watch": function(e) {
            return "Touch ID \u6216 Apple Watch"
        },
        "Try-Again": function(e) {
            return "\u518D\u8A66\u4E00\u6B21"
        },
        "Try-locking-and-then-unlocking-1Password-to-fill-again-": function(e) {
            return "\u5617\u8A66\u4E0A\u9396\u518D\u89E3\u9396 1Password \u4EE5\u518D\u6B21\u586B\u5165\u3002"
        },
        "Unable-to-create-card--please-try-again-": function(e) {
            return "\u5EFA\u7ACB\u5361\u7247\u5931\u6557\uFF0C\u8ACB\u91CD\u8A66."
        },
        "Unable-to-fill-password": function(e) {
            return "\u7121\u6CD5\u586B\u5165\u5BC6\u78BC"
        },
        "Unlock-1Password": function(e) {
            return "\u89E3\u9396 1Password"
        },
        "Unlock-to-save": function(e) {
            return "\u89E3\u9396\u4EE5\u5132\u5B58"
        },
        "Unlocking-1Password-": function(e) {
            return "\u89E3\u9396 1Password\u2026"
        },
        Update: function(e) {
            return "\u66F4\u65B0"
        },
        "Update-Existing": function(e) {
            return "\u66F4\u65B0\u73FE\u6709"
        },
        "Update-Item": function(e) {
            return "\u66F4\u65B0\u9805\u76EE"
        },
        "Use-1Password-for-two-factor-authentication": function(e) {
            return "\u4F7F\u7528 1Password \u4F5C\u70BA\u96D9\u56E0\u7D20\u9A57\u8B49\u5DE5\u5177"
        },
        "Use-1Password-to-authenticate--platformName--CLI-with--authType--": function(e) {
            return "\u4F7F\u7528 1Password \u900F\u904E " + e.authType + " \u9A57\u8B49 " + e.platformName + " CLI\u3002"
        },
        "Use-a-security-key-or-another-passkey": function(e) {
            return "\u4F7F\u7528\u5B89\u5168\u91D1\u9470\u6216\u5176\u4ED6\u901A\u884C\u5BC6\u9470"
        },
        "View-settings": function(e) {
            return "\u6AA2\u8996\u8A2D\u5B9A"
        },
        "We-re-unable-to-use-the-suggested-password-as-an-unexpected-error-occurred-": function(e) {
            return "\u56E0\u70BA\u767C\u751F\u610F\u5916\u932F\u8AA4\uFF0C\u6211\u5011\u7121\u6CD5\u4F7F\u7528\u5EFA\u8B70\u7684\u5BC6\u78BC\u3002"
        },
        "Windows-Hello": function(e) {
            return "Windows Hello"
        },
        "You-can-change-this-at-any-time-in-settings-": function(e) {
            return "\u4F60\u53EF\u4EE5\u96A8\u6642\u5728\u8A2D\u5B9A\u4E2D\u8B8A\u66F4\u3002"
        },
        "You-can-manage-your-accounts-in-Settings-": function(e) {
            return "\u60A8\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u4E2D\u7BA1\u7406\u60A8\u7684\u5E33\u865F\u3002"
        },
        "Your--accountName--account-needs-to-be-unlocked-to-fill-this-password--Unlock-it-and-try-again-": function(e) {
            return "\u60A8\u7684 " + e.accountName + " \u5E33\u865F\u9700\u8981\u89E3\u9396\u624D\u80FD\u586B\u5165\u6B64\u5BC6\u78BC\u3002\u89E3\u9396\u4E26\u91CD\u8A66\u3002"
        },
        "a--item-": function(e) {
            return "\u4E00\u500B " + e.item
        },
        "an--item-": function(e) {
            return "\u4E00\u500B " + e.item
        },
        email: function(e) {
            return "\u96FB\u5B50\u90F5\u4EF6"
        },
        "every-month": function(e) {
            return "\u6BCF\u6708"
        },
        "every-quarter": function(e) {
            return "\u6BCF\u5B63\u5EA6"
        },
        "every-transaction": function(e) {
            return "\u6BCF\u7B46\u4EA4\u6613"
        },
        "every-year": function(e) {
            return "\u6BCF\u5E74"
        },
        forever: function(e) {
            return "\u6C38\u9060"
        },
        "in-1-Month": function(e) {
            return "1 \u500B\u6708\u5F8C"
        },
        "in-1-Year": function(e) {
            return "1 \u5E74\u5F8C"
        },
        "in-7-Days": function(e) {
            return "7 \u5929\u5F8C"
        },
        "loading---": function(e) {
            return "\u6B63\u5728\u8F09\u5165..."
        },
        "one-time": function(e) {
            return "\u4E00\u6B21\u6027"
        },
        "one-time-password": function(e) {
            return "\u4E00\u6B21\u6027\u5BC6\u78BC"
        },
        "system-authentication": function(e) {
            return "\u7CFB\u7D71\u9A57\u8B49"
        },
        "auth-unfamiliar-website": function(e) {
            return "\u4E0D\u719F\u6089\u7684\u7DB2\u7AD9"
        },
        "auth-type-code-to-fill": function(e) {
            return "\u8F38\u5165 " + e.code + " \u4EE5\u6388\u6B0A " + e.type + " \u586B\u5145" + e.website + "\u3002"
        },
        "auth-filling-on-website": function(e) {
            return "\u5230 " + e.website
        },
        "auth-incorrect-code-entered": function(e) {
            return "\u8F38\u5165\u4E86\u4E0D\u6B63\u78BA\u7684\u4EE3\u78BC"
        },
        "auth-why-is-this-needed": function(e) {
            return "\u70BA\u4EC0\u9EBC\u9700\u8981\u6B64\u884C\u70BA\uFF1F"
        },
        "item-use-suggested-password": function(e) {
            return "\u4F7F\u7528\u63A8\u85A6\u7684\u5BC6\u78BC"
        },
        "item-create-privacy-card": function(e) {
            return "\u5EFA\u7ACB Privacy \u5361\u7247"
        },
        "item-create-email-alias": function(e) {
            return "\u5EFA\u7ACB\u8499\u9762\u96FB\u5B50\u90F5\u4EF6"
        },
        "item-type-credit-card": function(e) {
            return "\u4FE1\u7528\u5361"
        },
        "item-type-identity": function(e) {
            return "\u8EAB\u5206\u8A8D\u8B49"
        },
        "item-type-unspecified": function(e) {
            return "\u9805\u76EE"
        },
        categories: function(e) {
            return "\u985E\u5225"
        },
        "category-suggestions": function(e) {
            return "\u5EFA\u8B70"
        },
        "category-logins": function(e) {
            return "\u767B\u5165"
        },
        "category-identities": function(e) {
            return "\u8EAB\u5206\u8A8D\u8B49"
        },
        "category-credit-cards": function(e) {
            return "\u4FE1\u7528\u5361"
        },
        "category-generated-password": function(e) {
            return "\u5EFA\u7ACB\u5BC6\u78BC"
        },
        "category-hide-on-this-page": function(e) {
            return "\u5728\u6B64\u9801\u9762\u4E0A\u96B1\u85CF"
        },
        "locked-unlock-from-toolbar": function(e) {
            return "\u8ACB\u5F9E\u5DE5\u5177\u5217\u5716\u793A\u4E2D\u89E3\u9396 1Password\u3002"
        },
        "locked-press-shortcut-to-unlock": function(e) {
            return "\u6309 " + e.shortcut + " \u4F86\u89E3\u9396 1Password"
        },
        "locked-request-unlock": function(e) {
            return "\u958B\u555F 1Password"
        },
        "notification-add-account": function(e) {
            return "\u5C07\u5E33\u865F\u6DFB\u52A0\u5230"
        },
        "notification-1password": function(e) {
            return "1Password"
        },
        "notification-add-remove-later": function(e) {
            return "\u4E4B\u5F8C\u60A8\u53EF\u4EE5\u5728 1Password \u4E2D\u6DFB\u52A0\u548C\u79FB\u9664\u5E33\u865F"
        },
        "notification-settings": function(e) {
            return "\u8A2D\u5B9A"
        },
        "notification-add-account-never": function(e) {
            return "\u6C38\u4E0D"
        },
        "notification-add-account-confirm": function(e) {
            return "\u6DFB\u52A0"
        },
        "authorize-fill": function(e) {
            return "\u9EDE\u64CA OK \u4EE5\u5728 " + e.host + " \u586B\u5BEB\u60A8 1Password \u7684\u9805\u76EE"
        },
        "authorize-fill-brex": function(e) {
            return "\u6309 OK \u5EFA\u7ACB Brex \u5361\u7247\uFF0C\u4E26\u4F7F\u7528 1Password \u5728 " + e.host + " \u586B\u5165"
        },
        "authorize-fill-privacy": function(e) {
            return "\u9EDE\u64CA OK \u88FD\u4F5C Privacy \u5361\u7247\uFF0C\u4E26\u4F7F\u7528 1Password \u5728 " + e.host + " \u586B\u5165"
        },
        "authorize-fill-protocol": function(e) {
            return `1Password \u8B66\u544A\uFF1A\u9019\u662F\u4E0D\u5B89\u5168\u7684\uFF08HTTP\uFF09\u9801\u9762\uFF0C\u4F60\u63D0\u4EA4\u7684\u4EFB\u4F55\u8CC7\u8A0A\u90FD\u53EF\u80FD\u88AB\u4ED6\u4EBA\u770B\u5230\u6216\u66F4\u6539\u3002

\u4F60\u78BA\u5B9A\u4ECD\u7136\u8981\u586B\u4E9B\u6B64\u9805\u76EE\u55CE\uFF1F`
        },
        "tooltip-close-1password": function(e) {
            return "\u95DC\u9589"
        },
        "tooltip-open-1password": function(e) {
            return "\u958B\u555F"
        },
        "tooltip-no-items": function(e) {
            return "\u7121\u53EF\u986F\u793A\u7684\u9805\u76EE"
        },
        "tooltip-press-icon-in-toolbar": function(e) {
            return `\u6309\u4E0B\u700F\u89BD\u5668\u5DE5\u5177\u5217\u4E0A\u7684
1Password \u5716\u793A\u4EE5\u89E3\u9396`
        },
        "tooltip-unlock-1password": function(e) {
            return "\u89E3\u9396 1Password"
        },
        Title: function(e) {
            return "\u6A19\u984C"
        },
        "save-in-header": function(e) {
            return "\u5132\u5B58\u5728"
        },
        "save-item": function(e) {
            return "\u5132\u5B58\u9805\u76EE"
        },
        "update-item": function(e) {
            return "\u66F4\u65B0\u9805\u76EE"
        },
        "select-item": function(e) {
            return "\u9078\u64C7\u9805\u76EE"
        },
        "Save-new-Login": function(e) {
            return "\u5132\u5B58\u65B0\u767B\u5165"
        },
        cancel: function(e) {
            return "\u53D6\u6D88"
        },
        close: function(e) {
            return "\u95DC\u9589"
        },
        confirm: function(e) {
            return "\u78BA\u8A8D"
        },
        "unknown-item": function(e) {
            return "\u672A\u77E5\u9805\u76EE"
        },
        "save-in": function(e) {
            return "\u5132\u5B58\u5728"
        },
        "select-a-vault": function(e) {
            return "\u9078\u64C7\u5132\u5B58\u5EAB"
        },
        "locked-title": function(e) {
            return "1Password \u5DF2\u4E0A\u9396"
        },
        "locked-message": function(e) {
            return "\u8981\u7E7C\u7E8C\u4F7F\u7528 1Password \u5132\u5B58\uFF0C\u8ACB\u89E3\u9396\u4E00\u500B\u5E33\u865F\u3002"
        },
        "offline-title": function(e) {
            return "\u60A8\u7684\u5E33\u865F\u5DF2\u96E2\u7DDA\u3002"
        },
        "offline-message": function(e) {
            return "\u4F60\u5728\u767B\u5165\u4E26\u4E0A\u7DDA\u4E4B\u524D\u5C07\u7121\u6CD5\u5132\u5B58\u6B64\u9805\u76EE\u3002"
        },
        "offline-press-icon-in-toolbar": function(e) {
            return "\u6309\u4E0B\u700F\u89BD\u5668\u5DE5\u5177\u5217\u4E0A\u7684 1Password \u5716\u793A\u4EE5\u958B\u555F 1Password\u3002"
        },
        "offline-press-shortcut-to-open-extension": function(e) {
            return "\u6309 " + e.shortcut + " \u4F86\u958B\u555F 1Password\u3002"
        },
        "current-item": function(e) {
            return "\u7576\u524D\u9805\u76EE"
        },
        "updated-item": function(e) {
            return "\u5DF2\u66F4\u65B0\u7684\u9805\u76EE"
        },
        "add-tag": function(e) {
            return "\u6DFB\u52A0\u6A19\u7C64"
        },
        "remove-tag": function(e) {
            return "\u79FB\u9664\u6A19\u7C64"
        },
        "sso-info-banner": function(e) {
            return "\u9023\u7D50\u7684\u767B\u5165\u8CC7\u8A0A\u7684\u65B0\u9805\u76EE\u61C9\u7576\u5132\u5B58\u5728\u540C\u4E00\u500B\u4FDD\u96AA\u5EAB\u4E2D\uFF0C\u4E26\u61C9\u7576\u5C6C\u65BC\u540C\u4E00\u500B\u5E33\u865F\u3002"
        },
        "new-item": function(e) {
            return "\u65B0\u589E\u9805\u76EE"
        },
        "update-existing": function(e) {
            return "\u66F4\u65B0\u73FE\u6709"
        },
        "enable-privacy-header": function(e) {
            return "\u6DFB\u52A0\u81F3 1Password"
        },
        "enable-privacy-description": function(e) {
            return "\u4F7F\u7528 1Password \u5728\u7DDA\u4E0A\u6D88\u8CBB\u6642\u88FD\u4F5C\u4E26\u586B\u5165 Privacy Card\uFF0C\u5132\u5B58\u5546\u696D\u5361\u9084\u80FD\u5728\u672A\u4F86\u4F7F\u7528\u3002"
        },
        "enable-privacy-choose-account": function(e) {
            return "\u9078\u64C7\u5E33\u865F"
        },
        "enable-privacy-add-button": function(e) {
            return "\u6DFB\u52A0\u81F3 1Password"
        },
        "enable-privacy-error": function(e) {
            return "\u7121\u6CD5\u555F\u7528 Privacy \u6574\u5408\u3002\u8ACB\u518D\u8A66\u4E00\u6B21\u3002"
        },
        "enable-privacy-selected-account-locked-account-error": function(e) {
            return "\u8ACB\u89E3\u9396\u9078\u64C7\u7684\u5E33\u865F\u4EE5\u555F\u7528\u6574\u5408\u529F\u80FD\u3002"
        },
        "enable-privacy-sole-account-locked-account-error": function(e) {
            return "\u8ACB\u89E3\u9396 1Password \u4EE5\u555F\u7528\u6574\u5408\u529F\u80FD\u3002"
        },
        "privacy-error-enable-header": function(e) {
            return "\u7121\u6CD5\u555F\u7528\u6574\u5408"
        },
        "privacy-error-header": function(e) {
            return "\u767C\u751F\u932F\u8AA4"
        },
        "privacy-error-no-valid-accounts": function(e) {
            return "\u9700\u8981 1Password \u6703\u54E1\u624D\u80FD\u8207 Privacy \u6574\u5408\u3002"
        },
        "privacy-error-unable-to-get-funding-accounts": function(e) {
            return "\u8ACB\u5148\u78BA\u4FDD\u60A8\u7684 Privacy.com \u5E33\u865F\u81F3\u5C11\u6709\u9023\u63A5\u4E00\u500B\u8CC7\u91D1\u4F86\u6E90\uFF0C\u4E4B\u5F8C\u518D\u91CD\u8A66\u4E00\u6B21\u3002"
        },
        "privacy-error-unexpected-error": function(e) {
            return "\u767C\u751F\u610F\u5916\u932F\u8AA4\u3002\u8ACB\u806F\u7E6B support@1password.com"
        },
        "privacy-error-okay-button": function(e) {
            return "OK"
        },
        "privacy-once": function(e) {
            return "\u6BCF\u6708"
        },
        "privacy-monthly": function(e) {
            return "\u6BCF\u6708"
        },
        "privacy-annually": function(e) {
            return "\u6BCF\u5E74"
        },
        "privacy-transaction": function(e) {
            return "\u6BCF\u7B46\u4EA4\u6613"
        },
        "privacy-forever": function(e) {
            return "\u6C38\u9060"
        },
        "privacy-single-use": function(e) {
            return "\u4E00\u6B21\u6027\u4F7F\u7528"
        },
        "privacy-header": function(e) {
            return "\u5EFA\u7ACB Privacy \u5361\u7247"
        },
        "privacy-card-name-label": function(e) {
            return "\u5361\u7247\u540D\u7A31"
        },
        "privacy-spend-limit-label": function(e) {
            return "\u8A2D\u5B9A\u652F\u4ED8\u9650\u984D"
        },
        "privacy-spend-limit-frequency-label": function(e) {
            return "\u983B\u7387"
        },
        "privacy-spend-limit-amount-label": function(e) {
            return "\u652F\u4ED8\u9650\u984D"
        },
        "privacy-funding-account-label": function(e) {
            return "\u8CC7\u91D1\u4F86\u6E90"
        },
        "privacy-save-label": function(e) {
            return "\u5132\u5B58\u5728 1Password"
        },
        "privacy-create-button": function(e) {
            return "\u5EFA\u7ACB\u4E26\u586B\u5165"
        },
        "privacy-error-integration-disabled": function(e) {
            return "\u8ACB\u5728\u958B\u767C\u4EBA\u54E1\u5DE5\u5177\u5167\u5BB9\u9078\u55AE\u958B\u555F Privacy \u6574\u5408\u3002"
        },
        "privacy-error-app-locked": function(e) {
            return "1Password \u5DF2\u9396\u4E0A\u3002\u8ACB\u89E3\u9396\u5F8C\u91CD\u8A66\u3002"
        },
        "privacy-error-vault-locked": function(e) {
            return "\u9019\u500B\u4FDD\u96AA\u5EAB\u5DF2\u9396\u4E0A\u3002\u8ACB\u89E3\u9396\u5F8C\u91CD\u8A66\u3002"
        },
        "privacy-error-no-vault-selected": function(e) {
            return "\u8ACB\u9078\u64C7\u4FDD\u96AA\u5EAB\u3002"
        },
        "privacy-error-save-failed": function(e) {
            return "\u7121\u6CD5\u5132\u5B58\u9805\u76EE\u3002\u8ACB\u6AA2\u67E5\u4FDD\u96AA\u5EAB\u662F\u5426\u89E3\u9396\u5F8C\u518D\u8A66\u4E00\u6B21\u3002"
        },
        "privacy-error-empty-card-name": function(e) {
            return "\u8ACB\u70BA\u5361\u7247\u547D\u540D\u3002"
        },
        "privacy-error-card-name-too-large": function(e) {
            return "\u8ACB\u70BA\u5361\u7247\u53D6\u500B\u5B57\u6578\u5C11\u4E00\u9EDE\u7684\u540D\u5B57\u3002"
        },
        "privacy-error-empty-limit": function(e) {
            return "\u8ACB\u63D0\u4F9B\u5361\u7247\u652F\u4ED8\u984D\u5EA6\u3002"
        },
        "privacy-error-limit-too-large": function(e) {
            return "\u8ACB\u8F38\u5165\u8F03\u5C0F\u7684\u5361\u7247\u984D\u5EA6\u3002"
        },
        "privacy-error-page-url-parse-error": function(e) {
            return "\u7121\u6CD5\u89E3\u6790 url"
        },
        "privacy-error-http-error": function(e) {
            return "\u6211\u5011\u7121\u6CD5\u9023\u63A5 Privacy\u3002\u8ACB\u78BA\u8A8D\u4F60\u7684\u7DB2\u8DEF\u9023\u7DDA\u4E26\u518D\u8A66\u4E00\u6B21\u3002"
        },
        "privacy-error-invalid-api-key": function(e) {
            return "\u7121\u6CD5\u4F7F\u7528 Privacy \u9A57\u8B49\u3002\u8ACB\u78BA\u8A8D\u4F60\u7684 API \u91D1\u9470\u4E26\u518D\u8A66\u4E00\u6B21\u3002"
        },
        "privacy-error-api-error-with-message": function(e) {
            return "\u88FD\u4F5C\u5361\u7247\u6642\u767C\u751F\u554F\u984C\uFF1A" + e.message
        },
        "privacy-error-api-error": function(e) {
            return "\u88FD\u4F5C\u5361\u7247\u6642\u767C\u751F\u554F\u984C\u3002"
        },
        "privacy-error-brain-error": function(e) {
            return "\u7121\u6CD5\u5F9E Privacy \u5361\u7247\u88FD\u4F5C\u4FE1\u7528\u5361\u3002"
        },
        "privacy-error-default": function(e) {
            return "\u767C\u751F\u610F\u5916\u932F\u8AA4\u3002"
        },
        "notification-save-in": function(e) {
            return "\u5132\u5B58\u5728"
        },
        "notification-save-secondary": function(e) {
            return "\u5728 1Password \u4E2D\u5132\u5B58 " + e.host + " \u767B\u5165\u8CC7\u6599\u55CE\uFF1F"
        },
        "notification-save-save": function(e) {
            return "\u5132\u5B58"
        },
        "ssh-title": function(e) {
            return "\u5EFA\u7ACB\u4E26\u586B\u5165 SSH \u91D1\u9470"
        },
        "ssh-create-button": function(e) {
            return "\u5EFA\u7ACB\u4E26\u586B\u5165"
        },
        "ssh-error-message": function(e) {
            return "\u767C\u751F\u610F\u5916\u932F\u8AA4\u3002\u8ACB\u806F\u7E6B support@1password.com"
        },
        "unexpected-error": function(e) {
            return "\u767C\u751F\u610F\u5916\u932F\u8AA4\u3002\u8ACB\u806F\u7E6B support@1password.com"
        },
        "login-duplicate": function(e) {
            return "\u5DF2\u5132\u5B58"
        },
        "social-login-linked": function(e) {
            return e.item + " \u5DF2\u9023\u7D50\u5230\uFF1A"
        },
        "social-login-locked": function(e) {
            return "\u6309\u4E0B\u700F\u89BD\u5668\u5DE5\u5177\u5217\u4E0A\u7684 1Password \u5716\u793A\u4EE5\u89E3\u9396\u3002"
        },
        "social-login-no-items": function(e) {
            return "\u672A\u627E\u5230\u7528\u65BC\u767B\u5165\u7684\u9805\u76EE\u3002"
        },
        "social-login-provider-used": function(e) {
            return e.provider + " \u88AB\u7528\u65BC\u767B\u5165\uFF1A"
        },
        "social-login-save-in-1password": function(e) {
            return "\u5728 1Password \u4E2D\u5132\u5B58\uFF1F"
        },
        "social-login-save-item": function(e) {
            return "\u5132\u5B58\u9805\u76EE"
        },
        "social-login-save-item-locked": function(e) {
            return "\u89E3\u9396\u4EE5\u5132\u5B58"
        },
        "social-login-sign-in-with": function(e) {
            return "\u767B\u5165\u65B9\u5F0F\u70BA\u2026"
        },
        "social-login-sign-in-with-details": function(e) {
            return "\u900F\u904E " + e.title + ": " + e.subtitle + " \u767B\u5165"
        },
        "social-login-sign-in": function(e) {
            return "\u767B\u5165"
        },
        "social-login-select-provider": function(e) {
            return "\u9078\u64C7 " + e.provider + " \u767B\u5165"
        },
        "social-login-add-existing": function(e) {
            return "\u6DFB\u52A0\u5DF2\u6709\u7684\u5E33\u865F\u8CC7\u8A0A\u4EE5\u767B\u5165"
        },
        "social-login-sign-in-with-label": function(e) {
            return "\u767B\u5165\u65B9\u5F0F\u70BA"
        },
        "social-login-sign-in-with-item-used": function(e) {
            return "\u9078\u64C7\u60A8\u7684\u767B\u5165\u65B9\u5F0F"
        },
        "social-login-save-provider-only-title": function(e) {
            return "\u5132\u5B58\u70BA\u4E00\u822C " + e.provider + " \u9805\u76EE"
        },
        "social-login-save-provider-only-subtitle": function(e) {
            return "\u53EA\u5132\u5B58\u4F60\u4F7F\u7528 " + e.provider + " \u4F5C\u70BA\u767B\u5165\u65B9\u5F0F"
        },
        "shell-plugin-create-title": function(e) {
            return "\u5EFA\u7ACB\u65B0\u7684\u6BBC\u5C64\u5916\u639B\u7A0B\u5F0F\u9805\u76EE"
        },
        "shell-plugin-create-button": function(e) {
            return "\u5132\u5B58\u9805\u76EE"
        },
        "autosave-title-save": function(e) {
            return "\u5132\u5B58 " + e.item
        },
        "autosave-title-saved": function(e) {
            return e.item + " \u5DF2\u5132\u5B58"
        },
        "autosave-title-update": function(e) {
            return "\u66F4\u65B0 " + e.item
        },
        "autosave-title-updated": function(e) {
            return e.item + " \u5DF2\u66F4\u65B0"
        },
        "autosave-save-type-generic": function(e) {
            return "\u9805\u76EE"
        },
        "autosave-save-type-login": function(e) {
            return "\u767B\u5165"
        },
        "autosave-save-type-credit-card": function(e) {
            return "\u4FE1\u7528\u5361"
        },
        "autosave-save-type-identity": function(e) {
            return "\u8EAB\u5206\u8A8D\u8B49"
        }
    }
};
function ai(e) {
    let t = (0,
    Qb.makeT)();
    return t.set({
        locale: e,
        messages: Xb
    }),
    t
}
var Jb = (n => (n.DescribeUnlock = "DescribeUnlock",
n.DescribeInaction = "DescribeInaction",
n))(Jb || {})
  , dN = e => e in Jb
  , lN = {
    PromptUnlock: "tooltip-unlock-1password",
    PromptOpen: "tooltip-open-1password",
    PromptClose: "tooltip-close-1password",
    DescribeUnlock: "tooltip-press-icon-in-toolbar",
    DescribeInaction: "tooltip-no-items"
}
  , si = class {
    constructor() {
        this.stylesHaveLoaded = !1;
        this.isHovering = !1;
        this.hasHovered = !1;
        this.showSaveOption = !1;
        this.debugToggle = !1;
        w.onEditedStateChanged( ({formEdited: t, fieldEdited: n}) => {
            let {activeFieldAnalysis: r, inlineSavingEnabled: o} = v.getState();
            r && (this.showSaveOption = pr(o, r.fieldDesignation, t, n))
        }
        ),
        w.onEditedStateChanged( () => {
            this.handleStateChange({
                debug: "edited"
            })
        }
        ),
        D("locked", () => {
            this.handleStateChange({
                debug: "locked"
            })
        }
        ),
        D("inlineMenuOpen", () => {
            this.handleStateChange({
                debug: "inlinemenuopen"
            })
        }
        ),
        D("activeFieldAnalysis", () => {
            this.handleStateChange({
                debug: "activeFieldAnalysis"
            })
        }
        )
    }
    debug(t) {
        this.debugToggle
    }
    attachedElementDrawn() {
        this.handleStateChange({
            debug: "attachedElementDrawn"
        })
    }
    attachedElementRemoved() {
        this.handleStateChange({
            debug: "attachedElementRemoved"
        })
    }
    async getContext() {
        let {locked: t, canRequestUnlock: n, inlineMenuOpen: r, activeFieldAnalysis: o} = v.getState()
          , i = await this.getFillSuggestionsCount();
        return {
            canRequestUnlock: n,
            canSaveNewItem: this.showSaveOption,
            fillSuggestionsCount: i,
            locked: t,
            inlineMenuOpen: r,
            isHovering: this.isHovering,
            hasHovered: this.hasHovered,
            hasFieldAnalysis: o !== void 0
        }
    }
    async handleStateChange(t) {
        if (this.debug(`Tooltip: started <${t.debug}>`),
        !this.shadowRoot || !this.attachedToElement || !this.stylesHaveLoaded) {
            this.debug(`Tooltip: ended   <${t.debug}> - DOM not ready`);
            return
        }
        let n = await this.getContext()
          , r = this.computeTooltipState(n);
        if (r === this.currentState) {
            this.forcePositionUpdate(),
            this.debug(`Tooltip: ended   <${t.debug}> - keeping ${r}`);
            return
        }
        let o = this.currentState;
        if (this.currentState = r,
        this.removeTooltip(),
        !r) {
            this.debug(`Tooltip: ended   <${t.debug}> - removed ${o}`);
            return
        }
        let i = lN[r];
        this.createTooltip(this.attachedToElement, this.shadowRoot, i),
        this.debug(`Tooltip: ended   <${t.debug}> - replaced ${o} with ${this.currentState}`)
    }
    computeTooltipState({canRequestUnlock: t, canSaveNewItem: n, fillSuggestionsCount: r, locked: o, inlineMenuOpen: i, isHovering: s, hasHovered: u, hasFieldAnalysis: d}) {
        let l = !u || s;
        if (o && t.name === "yes" && l)
            return "PromptUnlock";
        if (o && l)
            return "DescribeUnlock";
        if (i && s)
            return "PromptClose";
        if (!i && s && n)
            return "PromptOpen";
        if (i && s && n)
            return "PromptClose";
        if (d) {
            if (!i && s && r > 0)
                return "PromptOpen";
            if (!i && !n && r === 0 && l)
                return "DescribeInaction"
        }
    }
    setAttachedToElement(t) {
        this.attachedToElement = t,
        this.handleStateChange({
            debug: "elementAttached"
        })
    }
    setShadowRoot(t) {
        this.shadowRoot = t,
        this.handleStateChange({
            debug: "shadowAttached"
        })
    }
    addEventListeners(t) {
        t.addEventListener("pointerenter", this.handleAttachedEnter.bind(this)),
        t.addEventListener("pointerleave", this.handleAttachedExit.bind(this)),
        t.addEventListener("click", this.handleAttachedClick.bind(this))
    }
    handleAttachedClick() {
        this.shakeTooltipIfNecessary()
    }
    handleTooltipClick(t) {
        t.target && (this.onClick?.(),
        this.handleAttachedClick())
    }
    async shakeTooltipIfNecessary() {
        let t = await this.getContext()
          , n = this.computeTooltipState(t);
        n && dN(n) && this.shakeTooltip()
    }
    shakeTooltip() {
        !this.tooltipRoot || !this.tooltipContent || (this.tooltipContent.classList.add("shake"),
        setTimeout( () => {
            this.tooltipContent?.classList.remove("shake")
        }
        , 250))
    }
    createTooltip(t, n, r) {
        let {basePath: o, locale: i} = v.getState();
        w.refreshCanRequestUnlock();
        let u = ai(i).lookup(r);
        this.tooltipRoot = document.createElement("div"),
        this.tooltipRoot.id = "inline-tooltip-root",
        this.tooltipRoot.className = "interactive",
        this.tooltipRoot.setAttribute("role", "tooltip"),
        this.tooltipRoot.ariaRoleDescription = u,
        this.tooltipContent = document.createElement("div"),
        this.tooltipContent.id = "inline-tooltip-content",
        this.tooltipText = document.createElement("div"),
        this.tooltipText.className = "label",
        this.tooltipText.textContent = u,
        this.tooltipContent.style.visibility = "hidden",
        this.tooltipArrow = document.createElement("div"),
        this.tooltipArrow.id = "arrow",
        this.tooltipArrow.setAttribute("data-popper-arrow", ""),
        this.tooltipContent.appendChild(this.tooltipText),
        this.tooltipRoot.appendChild(this.tooltipContent),
        this.tooltipRoot.addEventListener("click", this.handleTooltipClick.bind(this)),
        this.tooltipContent.appendChild(this.tooltipArrow),
        this.tooltipArrow.style.setProperty("--arrow-url", `url(${o}/images/tooltip-notch.svg)`),
        t.setAttribute("aria-describedby", this.tooltipRoot.id),
        n.appendChild(this.tooltipRoot),
        this.popperInstance = ps(t, this.tooltipRoot, {
            placement: "top",
            strategy: "absolute",
            modifiers: [{
                name: "offset",
                options: {
                    offset: [0, 8]
                }
            }, {
                name: "flip",
                options: {
                    padding: 10,
                    allowedAutoPlacements: ["top", "bottom"]
                }
            }, {
                name: "eventListeners",
                options: {
                    scroll: !1,
                    resize: !1
                }
            }, {
                name: "afterWrite",
                enabled: !0,
                phase: "afterWrite",
                fn: () => {
                    this.tooltipContent && (this.tooltipContent.style.visibility = "visible")
                }
            }]
        }),
        this.popperInstance.forceUpdate()
    }
    async getFillSuggestionsCount() {
        let {activeFieldAnalysis: t} = v.getState();
        return t ? w.getInlineSuggestions(t.fieldDesignation, t.suggestions).then(n => n.length).catch( () => 0) : 0
    }
    updateStylesLoadedState(t) {
        this.stylesHaveLoaded = t
    }
    forcePositionUpdate() {
        this.popperInstance && this.popperInstance.forceUpdate()
    }
    handleAttachedEnter(t) {
        t.pointerType === "mouse" && (this.isHovering = !0,
        this.hasHovered = !0,
        window.clearTimeout(this.visibilityTimeout),
        this.visibilityTimeout = window.setTimeout( () => {
            this.handleStateChange({
                debug: "mouseEnter"
            })
        }
        , 200))
    }
    removeTooltip() {
        window.clearTimeout(this.visibilityTimeout),
        !(!this.shadowRoot || !this.tooltipRoot) && (this.shadowRoot.removeChild(this.tooltipRoot),
        this.tooltipRoot = void 0,
        this.tooltipContent = void 0,
        this.tooltipText = void 0,
        this.tooltipArrow = void 0,
        this.popperInstance = void 0)
    }
    handleAttachedExit(t) {
        t.pointerType === "mouse" && (this.isHovering = !1,
        this.handleStateChange({
            debug: "mouseLeave"
        }))
    }
}
;
var Zb = 4
  , bs = (n => (n.Unlocking = "unlocking",
n.Locking = "locking",
n))(bs || {})
  , Ss = (n => (n.Opening = "opening",
n.Closing = "closing",
n))(Ss || {})
  , Ps = (n => (n.Appearing = "appearing",
n.Disappearing = "disappearing",
n))(Ps || {})
  , je = {
    ...bs,
    ...Ss,
    ...Ps
}
  , Un = class e extends Tn {
    constructor() {
        super();
        this.allowFastPoll = !0;
        this.areShadowRootStylesLoaded = !1;
        this.shadowRootStylesLoaded = void 0;
        this.isHovering = !1;
        this.tooltipManager = this.getToolTipManager(),
        this.EVENT_DATA = {
            componentType: "button",
            componentName: "inline_icon",
            category: "inline_icon_00"
        },
        D("locked", (n, r) => {
            if (n && !r) {
                this.animateIcons({
                    type: je.Locking
                });
                return
            }
            r && !n && this.animateIcons({
                type: je.Unlocking
            })
        }
        ),
        D("inlineMenuOpen", (n, r) => {
            if (n && !r) {
                this.animateIcons({
                    type: je.Opening
                });
                return
            }
            r && !n && this.animateIcons({
                type: je.Closing
            })
        }
        ),
        D("inlineDisabled", n => {
            n && (this.animateIcons({
                type: je.Disappearing
            }),
            this._erase())
        }
        ),
        w.onRemoveInlineButton( ({frameIdentifier: n}) => {
            this.drawnByFrame && this.drawnByFrame !== n || this._erase()
        }
        ),
        w.onRemoveInlineButtonTooltip(this._removeTooltip.bind(this))
    }
    static{this.height = 18
    }static{this.width = 31
    }_draw(n) {
        this.createShadowRoot(),
        this.clearPreviousAnimations(),
        this.createStatus(),
        this.createButton(),
        this.setButtonStyles(n),
        this.setStateStyles(),
        this.addShadowHostToDOM(),
        this.addStylesheetLinkToDOM(),
        this.animateIcons({
            type: je.Appearing
        }),
        this.drawnByFrame = n.frameIdentifier,
        this.getToolTipManager().attachedElementDrawn()
    }
    _erase() {
        this.shadowRoot?.host.parentElement && (this.getToolTipManager().attachedElementRemoved(),
        this.shadowRootStyles && this.shadowRoot.removeChild(this.shadowRootStyles),
        this.shadowRoot.host.parentElement.removeChild(this.shadowRoot.host),
        this.isKeepingButtonInField = !1,
        this.rafId && (window.cancelAnimationFrame(this.rafId),
        this.rafId = void 0),
        this.allowFastPoll = !0,
        this.positionLastCheckedTimestamp = void 0,
        this.buttonLastMovedTimestamp = void 0,
        this.areShadowRootStylesLoaded = !1,
        this.shadowRootStylesLoaded = void 0,
        this.shadowRootStyles = void 0)
    }
    _removeTooltip() {
        this.getToolTipManager().removeTooltip()
    }
    getToolTipManager() {
        return this.tooltipManager ? this.tooltipManager : (this.tooltipManager = new si,
        this.tooltipManager.onClick = () => {
            this.onClick?.(),
            $("record-click-event-all-accounts", {
                event: this.EVENT_DATA
            })
        }
        ,
        this.tooltipManager)
    }
    addStylesheetLinkToDOM() {
        if (!this.shadowRoot)
            return;
        let {basePath: n} = v.getState();
        this.shadowRootStyles = document.createElement("link"),
        this.shadowRootStyles.setAttribute("rel", "stylesheet"),
        this.shadowRootStyles.setAttribute("href", `${n}/injected/styles/inline-tooltip.css`),
        this.shadowRoot.appendChild(this.shadowRootStyles);
        let r;
        this.shadowRootStylesLoaded = new Promise(o => {
            r = o,
            this.tooltipManager.updateStylesLoadedState(!0)
        }
        ),
        this.shadowRootStyles.onload = o => {
            r(),
            this.areShadowRootStylesLoaded = !0
        }
    }
    createShadowRoot() {
        this.shadowRoot || !document.body || (this.shadowRoot = document.createElement("com-1password-button").attachShadow({
            mode: "closed"
        }),
        this.shadowRoot.addEventListener("mousedown", n => {
            n.stopImmediatePropagation(),
            n.preventDefault()
        }
        ),
        this.shadowRoot.addEventListener("click", n => {
            n.target && (w.inlineButtonPressed(),
            $("record-click-event-all-accounts", {
                event: this.EVENT_DATA
            }))
        }
        ),
        this.getToolTipManager().setShadowRoot(this.shadowRoot))
    }
    animateIcons(n) {
        switch (n.type) {
        case je.Locking:
        case je.Unlocking:
            this.animateLockState(n.type);
            return;
        case je.Disappearing:
            return;
        case je.Appearing:
            this.animateRenderState();
            return;
        case je.Opening:
        case je.Closing:
            this.animateMenuState(n.type);
            return;
        default:
            Wr(n.type, ye.assertLogSafe("transition.type"))
        }
    }
    animateRenderState() {
        this.button && this.modifyClasses({
            el: this.button,
            addClasses: ["appearing"]
        })
    }
    animateMenuState(n) {
        if (!this.chevron)
            return;
        let r = n === "opening" ? "closing" : "opening";
        this.modifyClasses({
            el: this.chevron,
            addClasses: [n],
            removeClasses: [r]
        })
    }
    animateLockState(n) {
        if (!this.icons)
            return;
        let r = n === "locking" ? "unlocking" : "locking";
        this.modifyClasses({
            el: this.icons,
            addClasses: [n],
            removeClasses: [r]
        })
    }
    modifyClasses(n) {
        let r = n.removeClasses ?? [];
        n.el.classList.remove(...r);
        let o = n.addClasses ?? [];
        n.el.classList.add(...o)
    }
    addShadowHostToDOM() {
        if (!this.shadowRoot || this.shadowRoot.host.parentElement)
            return;
        let {keepInlineAttachedToField: n} = v.getState();
        if (vt("com-1password-button", this.shadowRoot.host),
        n !== "off") {
            let r = o => {
                if (!this.isKeepingButtonInField)
                    return;
                this.buttonLastMovedTimestamp || (this.buttonLastMovedTimestamp = o),
                this.positionLastCheckedTimestamp || (this.positionLastCheckedTimestamp = o);
                let i = !0;
                if (n === "gentle" && (o - this.buttonLastMovedTimestamp > 500 || !this.allowFastPoll) && (this.allowFastPoll = !1,
                o - this.positionLastCheckedTimestamp <= 500 && (i = !1)),
                i) {
                    let s = this.getActiveFieldDetails();
                    if (!s)
                        return;
                    let u = this.getButtonPosition(s);
                    if (!u)
                        return;
                    if (n === "gentle") {
                        let d = this.currentButtonPosition;
                        if (!d)
                            return;
                        Qo(d, u) || (this.buttonLastMovedTimestamp = o)
                    }
                    this.setButtonStyles(s),
                    this.getToolTipManager().forcePositionUpdate(),
                    this.positionLastCheckedTimestamp = o
                }
                this.rafId = window.requestAnimationFrame(r)
            }
            ;
            this.rafId = window.requestAnimationFrame(r),
            this.isKeepingButtonInField = !0
        }
    }
    createButton() {
        if (!this.shadowRoot || this.button)
            return;
        let n = v.getState().basePath;
        this.icons = document.createElement("div"),
        this.icons.classList.add("icons"),
        this.chevron = document.createElement("i"),
        this.chevron.classList.add("icon"),
        this.chevron.classList.add("chevron"),
        this.chevron.style.backgroundImage = `url('${n}/images/icons/chevron.svg')`,
        this.icons.appendChild(this.chevron),
        this.lock = document.createElement("i"),
        this.lock.classList.add("icon"),
        this.lock.classList.add("lock"),
        this.lock.style.backgroundImage = `url('${n}/images/icons/lock.svg')`,
        this.icons.appendChild(this.lock),
        this.button = document.createElement("button"),
        this.button.id = "op-button",
        this.button.appendChild(this.icons),
        window.matchMedia("(hover: none)").matches && (this.buttonTouchTarget = this.button.appendChild(document.createElement("div"))),
        this.buttonTouchTarget ? this.getToolTipManager().addEventListeners(this.buttonTouchTarget) : this.getToolTipManager().addEventListeners(this.button),
        this.shadowRoot.appendChild(this.button),
        this.getToolTipManager().setAttachedToElement(this.button)
    }
    createStatus() {
        !this.shadowRoot || this.status || (this.status = document.createElement("div"),
        this.status.id = "op-status",
        this.status.setAttribute("role", "status"),
        this.status.innerText = "1Password menu available. Press the down arrow key to select.",
        this.status.style.cssText = `
		 all: initial;
		 position: absolute;
		 top: -1000px;
		 left: -1000px;
		 opacity: 0;
		 width: 0;
		 height: 0;
	   `,
        this.shadowRoot.appendChild(this.status))
    }
    setButtonStyles(n) {
        if (!this.button)
            return;
        let r = this.getButtonPosition(n);
        this.currentButtonPosition = r,
        this.button.style.position = "fixed",
        this.button.style.zIndex = "2147483647",
        this.button.style.top = `${r.y}px`,
        this.button.style.left = `${r.x}px`,
        this.button.style.minWidth = `${e.width}px`,
        this.button.style.width = `${e.width}px`,
        this.button.style.maxWidth = `${e.width}px`,
        this.button.style.minHeight = `${e.height}px`,
        this.button.style.height = `${e.height}px`,
        this.button.style.maxHeight = `${e.height}px`,
        this.button.style.removeProperty("background"),
        this.button.style.backgroundSize = "cover",
        this.button.style.backgroundRepeat = "no-repeat",
        this.button.style.overflow = "hidden",
        this.button.style.border = "none",
        this.button.style.outline = "0",
        this.button.style.cursor = "pointer",
        this.button.style.opacity = "0";
        let o = v.getState().basePath
          , i = `${o}/images/icons/onepassword-stateful-container-right.svg`
          , s = `${o}/images/icons/onepassword-stateful-container-right-hover.svg`;
        this.button.style.backgroundImage = this.isHovering ? `url(${s})` : `url(${i})`,
        this.button.onmouseenter = () => {
            this.isHovering = !0,
            this.button && (this.button.style.backgroundImage = `url(${s})`)
        }
        ,
        this.button.onmouseleave = () => {
            this.isHovering = !1,
            this.button && (this.button.style.backgroundImage = `url(${i})`)
        }
        ,
        this.buttonTouchTarget && (this.buttonTouchTarget.style.cssText = `
				 left: -${r.topOffset}px;
		 height: ${n.rect.height}px;
		 position: absolute;
		 top: -${r.topOffset}px;
		 width: ${n.rect.height}px;
	   `)
    }
    setStateStyles() {
        let n = v.getState().locked ? "locked" : "unlocked"
          , r = v.getState().locked ? "unlocked" : "locked";
        this.icons && this.modifyClasses({
            el: this.icons,
            addClasses: [n],
            removeClasses: [r]
        })
    }
    clearPreviousAnimations() {
        this.button && this.modifyClasses({
            el: this.button,
            removeClasses: Object.values(Ps)
        }),
        this.chevron && this.modifyClasses({
            el: this.chevron,
            removeClasses: Object.values(Ss)
        }),
        this.icons && this.modifyClasses({
            el: this.icons,
            removeClasses: Object.values(bs)
        })
    }
    getButtonPosition(n) {
        let r = n.rect.y + n.rect.height
          , o = n.rect.x
          , i = (n.rect.height - e.height) / 2;
        n.type === "textarea" && i > Zb && (i = Zb);
        let s = Math.max(i, n.paddingX)
          , u = r - e.height - i
          , d = n.rect.width - e.width - s
          , l = o + (n.direction === "rtl" ? s : d);
        return {
            topOffset: i,
            x: l,
            y: u
        }
    }
}
;
var ui = class {
    constructor() {
        this.draw = t => {
            this.isHidden() ? this.show() : (this.createShadowRoot(),
            this.createMenu(),
            this.setMenuSrc(t),
            this.positionMenu(t),
            this.addShadowHostToDOM(),
            w.sendInlineMenuOpened())
        }
        ;
        this.erase = () => {
            this.shadowRoot?.host.parentElement && (this.shadowRoot.host.parentElement.removeChild(this.shadowRoot.host),
            w.sendInlineMenuClosed())
        }
        ;
        this.show = () => {
            !this.menu?.parentNode || this.menu.style.visibility === "visible" || (this.menu.style.visibility = "visible")
        }
        ;
        this.hide = () => {
            !this.menu?.parentNode || this.menu.style.visibility === "hidden" || (this.menu.style.visibility = "hidden")
        }
        ;
        this.isHidden = () => (this.menu?.parentElement ?? !1) && this.menu?.style.visibility === "hidden";
        this.resize = (t, n) => {
            this.menu?.parentNode && (this.menu.style.height = `${t}px`,
            this.menu.style.maxHeight = `${t}px`,
            n && (this.menu.style.width = `${n}px`))
        }
        ;
        this.focus = () => {
            this.menu?.parentNode && (this.isHidden() && this.show(),
            w.focusInlineMenu(),
            this.menu.focus())
        }
        ;
        this.getCurrentMenuPosition = () => this.currentMenuPosition;
        this.updateMenuPosition = t => {
            this.menu && (this.currentMenuPosition = t,
            this.menu.style.top = `${t.y}px`,
            t.dir === "rtl" ? this.menu.style.right = `${t.x}px` : this.menu.style.left = `${t.x}px`)
        }
        ;
        this.createShadowRoot = () => {
            this.shadowRoot || !document.body || (this.shadowRoot = document.createElement("com-1password-menu").attachShadow({
                mode: "closed"
            }))
        }
        ;
        this.createMenu = () => {
            !this.shadowRoot || this.menu || (this.menu = document.createElement("iframe"),
            this.menu.id = "op-menu",
            this.shadowRoot.appendChild(this.menu))
        }
        ;
        this.getInlineFeatures = () => {
            let {unleashFeatures: t} = v.getState();
            return Gm.reduce( (n, r) => ({
                ...n,
                [r]: t[r]
            }), {})
        }
        ;
        this.setMenuSrc = t => {
            if (!this.menu)
                return;
            let {fieldAnalysis: n, context: r, formEdited: o, fieldEdited: i, locale: s, frameIdentifier: u, appTheme: d, numberOfItems: l} = t
              , {fieldDesignation: p, formDesignation: m, suggestions: g} = n
              , {basePath: h, inlineMenuToken: b, locked: y, areAllAccountsFrozen: S, inlineSavingEnabled: k, activeField: C} = v.getState();
            if (typeof b != "string")
                throw new Error("No inline menu token exists.");
            let N = new URL(`${h}/menu/menu.html`)
              , L = new URLSearchParams({
                frameIdentifier: u,
                token: b,
                displayHost: window.location.hostname,
                fieldDesignation: p,
                formDesignation: m,
                suggestions: JSON.stringify(g),
                formEdited: o.toString(),
                fieldEdited: i.toString(),
                fieldContent: C?.value || "",
                locked: y.toString(),
                locale: s,
                appTheme: d,
                numberOfItems: l.toString(),
                areAllAccountsFrozen: S.toString(),
                inlineSavingEnabled: k.toString(),
                unleashFeatures: JSON.stringify(this.getInlineFeatures())
            });
            r && L.append("context", r),
            N.search = L.toString(),
            this.menu.src = N.toString()
        }
        ;
        this.positionMenu = t => {
            this.menu && (this.currentMenuPosition = {
                dir: t.dir,
                x: t.x,
                y: t.y
            },
            this.menu.style.cssText = `
        all: initial;
        position: fixed;
        top: ${t.y}px;
        ${t.dir === "rtl" ? "right" : "left"}: ${t.x}px;
        z-index: 2147483647;
        min-width: 250px;
        height: 0;
        max-height: 242px;
        visibility: hidden;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
        outline: 0;
      `)
        }
    }
    addShadowHostToDOM() {
        !this.shadowRoot || this.shadowRoot.host.parentElement || vt("com-1password-menu", this.shadowRoot.host)
    }
}
;
var Dn = class extends kn {
    constructor(n) {
        super();
        this.allowFastPoll = !0;
        this._focus = () => {
            setTimeout( () => {
                this.inlineMenuFrame.focus()
            }
            , 1)
        }
        ;
        this._attach = n => {
            if (this.inlineMenuFrame.draw(n),
            n.keepInlineAttachedToField !== "off") {
                let r = o => {
                    if (!this.isKeepingMenuAttachedToField)
                        return;
                    this.menuLastMovedTimestamp || (this.menuLastMovedTimestamp = o),
                    this.positionLastCheckedTimestamp || (this.positionLastCheckedTimestamp = o);
                    let i = !0;
                    if (n.keepInlineAttachedToField === "gentle" && (o - this.menuLastMovedTimestamp > 500 || !this.allowFastPoll) && (this.allowFastPoll = !1,
                    o - this.positionLastCheckedTimestamp <= 500 && (i = !1)),
                    i) {
                        let s = this.getMenuPosition();
                        if (!s)
                            return;
                        if (n.keepInlineAttachedToField === "gentle") {
                            let u = this.inlineMenuFrame.getCurrentMenuPosition();
                            if (!u)
                                return;
                            Qo(u, s) || (this.menuLastMovedTimestamp = o)
                        }
                        this.inlineMenuFrame.updateMenuPosition(s),
                        this.positionLastCheckedTimestamp = o
                    }
                    this.rafId = window.requestAnimationFrame(r)
                }
                ;
                this.rafId = window.requestAnimationFrame(r),
                this.isKeepingMenuAttachedToField = !0
            }
        }
        ;
        this._detach = () => {
            this.inlineMenuFrame.erase(),
            this.isKeepingMenuAttachedToField = !1,
            this.rafId && (window.cancelAnimationFrame(this.rafId),
            this.rafId = void 0),
            this.allowFastPoll = !0,
            this.positionLastCheckedTimestamp = void 0,
            this.menuLastMovedTimestamp = void 0
        }
        ;
        this.inlineMenuFrame = new ui,
        this.shouldShowAfterDragEnds = !1,
        v.dispatch({
            type: "set-inline-menu-token",
            payload: window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
        }),
        w.onRequestVerificationToken( () => {
            if (!(n?.onlyShowInActiveFieldFrame && !v.getState().activeField))
                return v.getState().inlineMenuToken
        }
        ),
        w.onResizeInlineMenu( ({height: r, width: o}) => {
            this.inlineMenuFrame.resize(r, o)
        }
        ),
        w.onItemDetailValueDragStart( () => {
            this.inlineMenuFrame.isHidden() || (this.shouldShowAfterDragEnds = !0),
            this.inlineMenuFrame.hide(),
            v.dispatch({
                type: "set-inline-menu-open",
                payload: !1
            })
        }
        ),
        w.onItemDetailValueDragEnd( () => {
            this.shouldShowAfterDragEnds && this.inlineMenuFrame.show(),
            this.shouldShowAfterDragEnds = !1
        }
        ),
        w.onInlineMenuReady( () => {
            this.inlineMenuFrame.show()
        }
        ),
        w.onRemoveInlineMenu(r => {
            this._detach(),
            r && v.dispatch({
                type: "set-autoshow-menu",
                payload: !1
            })
        }
        ),
        w.onFocusInlineMenuFrame(this._focus),
        D("locked", r => {
            r && this._detach()
        }
        ),
        D("inlineDisabled", r => {
            r && this._detach()
        }
        )
    }
}
;
var ci = class extends An {
    constructor(n) {
        super(n);
        this._detachInlineMenu = () => {
            this.#e && this.inlineMenuManager?.detach()
        }
        ;
        this._handleKeyDown = (n, r, o) => {
            switch (n) {
            case "ArrowUp":
            case "Escape":
                this.#e ? this.inlineMenuManager?.toggle(r, o, !1) : w.sendKeyDown(n, r, o)
            }
        }
        ;
        this._onActiveInputFocus = () => {
            this._addScrollAndResizeEventListeners(),
            w.addScrollAndResizeEventListeners()
        }
        ;
        w.getNestedFrameConfiguration().then( ({handleInPageElements: r}={
            handleInPageElements: !1
        }) => {
            this.#e = r,
            this.#e ? (this.buttonManager = new Un,
            this.inlineMenuManager = new Dn({
                onlyShowInActiveFieldFrame: !0
            }),
            new In({
                onlyShowInActiveFieldFrame: !0
            }),
            new Cn({
                onlyShowInActiveFieldFrame: !0
            })) : (this.buttonManager = new Ko,
            this.inlineMenuManager = new $o)
        }
        )
    }
    #e
}
;
var fN = 100
  , di = class {
    constructor() {
        this.baseNode = void 0,
        this.detectionInterval = void 0,
        this.mutationObserver = void 0,
        this.init(),
        w.onShellPluginsUrlDetected( () => {
            this.mutationObserver ? this.attemptToRestartMutationObserver() : this.init()
        }
        )
    }
    async init() {
        if ((await Yy()).osName === "Windows")
            return;
        let n = await w.getShellPluginSiteConfig();
        n && this.startPageReadyDetection(n)
    }
    startPageReadyDetection(t) {
        this.detectionInterval || (this.detectionInterval = window.setInterval(async () => {
            if (document.readyState === "complete") {
                if (this.stopPageReadyDetection(),
                this.baseNode = this.getBaseNodeFromConfig(t),
                !this.baseNode)
                    return w.triggerShellPluginFallbackNotification();
                this.searchCredentialsInPage(t.secrets, t.platformName),
                this.setupMutationObserver()
            }
        }
        , fN))
    }
    stopPageReadyDetection() {
        this.detectionInterval && (clearTimeout(this.detectionInterval),
        this.detectionInterval = void 0)
    }
    getBaseNodeFromConfig(t) {
        return t.secrets.baseHtmlNode ? document.querySelector(t.secrets.baseHtmlNode) || void 0 : document.body
    }
    setupMutationObserver() {
        if (!this.baseNode)
            return;
        let t = async (n, r) => {
            let o = await w.getShellPluginSiteConfig();
            if (!o) {
                this.pauseMutationObserver();
                return
            }
            this.searchCredentialsInPage(o.secrets, o.platformName)
        }
        ;
        this.mutationObserver || (this.mutationObserver = new MutationObserver(t)),
        this.mutationObserver.observe(this.baseNode, {
            childList: !0,
            subtree: !0
        })
    }
    pauseMutationObserver() {
        this.baseNode = void 0,
        this.mutationObserver?.disconnect()
    }
    async attemptToRestartMutationObserver() {
        let t = await w.getShellPluginSiteConfig();
        t && (this.baseNode = this.getBaseNodeFromConfig(t),
        this.baseNode && this.mutationObserver?.observe(this.baseNode, {
            childList: !0,
            subtree: !0
        }))
    }
    async searchCredentialsInPage(t, n) {
        if (!this.baseNode)
            return;
        let r = this.baseNode
          , o = []
          , i = await w.getLastDetectedShellPluginsCredentials(n)
          , s = new Map(i ? i.map(d => [d.fieldLabel, d.value]) : [])
          , u = !1;
        t.secretInPageDetails.forEach(d => {
            let l = Xm(d.nodeSelector, r, d.attribute, d.expectedLength, d.expectedPrefix);
            l && (o.push({
                fieldLabel: d.fieldLabel,
                toBeConcealed: d.toBeConcealed,
                value: l
            }),
            s.get(d.fieldLabel) !== l && (u = !0))
        }
        ),
        u && o.length === t.secretInPageDetails.length && (await w.setLastDetectedShellPluginsCredentials({
            platformName: n,
            credentials: o
        }),
        await w.triggerShellPluginSaveIn1PasswordNotification())
    }
}
;
var li = class extends An {
    constructor(n) {
        super(n);
        this._detachInlineMenu = () => {
            this.inlineMenuManager?.detach()
        }
        ;
        this._handleKeyDown = (n, r, o) => {
            switch (n) {
            case "ArrowUp":
            case "Escape":
                this.inlineMenuManager?.toggle(r, o, !1)
            }
        }
        ;
        this._onActiveInputFocus = () => {
            this._addScrollAndResizeEventListeners()
        }
        ;
        this._heartBeat = () => {
            w.heartbeat()
        }
        ;
        this.shellPluginsManager = new di,
        this.#e = window.document.body.nodeName.toLowerCase() === "frameset",
        this.#e || (this.buttonManager = new Un,
        this.inlineMenuManager = new Dn,
        new In,
        new Cn),
        w.onRequestFillAuthorization(pN),
        n?.sendFrameManagerHeartbeat && (this._heartBeat(),
        setInterval(this._heartBeat, 1e3 * 30)),
        w.onKeyDown( ({key: r, formEdited: o, fieldEdited: i}) => this._handleKeyDown(r, o, i)),
        w.pageReady(),
        w.onGetNestedFrameConfiguration( () => ({
            handleInPageElements: this.#e
        }))
    }
    #e
}
  , pN = e => {
    let t = ai(v.getState().locale), {host: n, href: r} = window.location, o;
    switch (e) {
    case 0:
        o = t.lookup("authorize-fill-brex", {
            host: n
        });
        break;
    case 2:
        o = t.lookup("authorize-fill-privacy", {
            host: n
        });
        break;
    case 3:
        o = t.lookup("authorize-fill-protocol");
        break;
    default:
        o = t.lookup("authorize-fill", {
            host: n
        });
        break
    }
    return {
        url: r,
        authorized: window.confirm(o)
    }
}
;
function eS(e) {
    return Jm(),
    window === window.top ? new li(e) : new ci(e),
    !0
}
eS({
    sendFrameManagerHeartbeat: !1,
    keepInlineAttachedToField: "gentle"
});
new ge("b5x-inline",e => {
    $("send-trace", e, {
        enableTracing: !1
    })
}
);

//# debugId=d015a8f1-c8bc-55f0-a5f9-3d2774a1f60c
