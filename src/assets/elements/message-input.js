!(function(e) {
  function r(r) {
    for (
      var n, f, i = r[0], l = r[1], a = r[2], c = 0, s = [];
      c < i.length;
      c++
    )
      o[(f = i[c])] && s.push(o[f][0]), (o[f] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (p && p(r); s.length; ) s.shift()();
    return u.push.apply(u, a || []), t();
  }
  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++)
        0 !== o[t[i]] && (n = !1);
      n && (u.splice(r--, 1), (e = f((f.s = t[0]))));
    }
    return e;
  }
  var n = {},
    o = { 0: 0 },
    u = [];
  function f(r) {
    if (n[r]) return n[r].exports;
    var t = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, f), (t.l = !0), t.exports;
  }
  (f.m = e),
    (f.c = n),
    (f.d = function(e, r, t) {
      f.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (f.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (f.t = function(e, r) {
      if ((1 & r && (e = f(e)), 8 & r)) return e;
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (f.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var n in e)
          f.d(
            t,
            n,
            function(r) {
              return e[r];
            }.bind(null, n)
          );
      return t;
    }),
    (f.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return f.d(r, 'a', r), r;
    }),
    (f.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (f.p = '');
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    l = i.push.bind(i);
  (i.push = r), (i = i.slice());
  for (var a = 0; a < i.length; a++) r(i[a]);
  var p = l;
  t();
})([]);
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    1: function(n, o, p) {
      n.exports = p('hN/g');
    },
    'hN/g': function(n, o) {}
  },
  [[1, 0]]
]);
!(function(e, t) {
  'use strict';
  function n() {
    var e = C.splice(0, C.length);
    for ($e = 0; e.length; ) e.shift().call(null, e.shift());
  }
  function r(e, t) {
    for (var n = 0, r = e.length; n < r; n++) d(e[n], t);
  }
  function o(e) {
    return function(t) {
      Pe(t) && (d(t, e), oe.length && r(t.querySelectorAll(oe), e));
    };
  }
  function l(e) {
    var t = xe.call(e, 'is'),
      n = e.nodeName.toUpperCase(),
      r = ae.call(ne, t ? J + t.toUpperCase() : Y + n);
    return t && -1 < r && !a(n, t) ? -1 : r;
  }
  function a(e, t) {
    return -1 < oe.indexOf(e + '[is="' + t + '"]');
  }
  function i(e) {
    var t = e.currentTarget,
      n = e.attrChange,
      r = e.attrName,
      o = e.target,
      l = e[K] || 2,
      a = e[X] || 3;
    !tt ||
      (o && o !== t) ||
      !t[q] ||
      'style' === r ||
      (e.prevValue === e.newValue &&
        ('' !== e.newValue || (n !== l && n !== a))) ||
      t[q](r, n === l ? null : e.prevValue, n === a ? null : e.newValue);
  }
  function u(e) {
    var t = o(e);
    return function(e) {
      C.push(t, e.target), $e && clearTimeout($e), ($e = setTimeout(n, 1));
    };
  }
  function c(e) {
    et && ((et = !1), e.currentTarget.removeEventListener(Q, c)),
      oe.length &&
        r((e.target || g).querySelectorAll(oe), e.detail === _ ? _ : U),
      Se &&
        (function() {
          for (var e, t = 0, n = Re.length; t < n; t++)
            le.contains((e = Re[t])) || (n--, Re.splice(t--, 1), d(e, _));
        })();
  }
  function s(e, t) {
    var n = this;
    Ze.call(n, e, t), w.call(n, { target: n });
  }
  function m(e, t, n) {
    var r = t.apply(e, n),
      o = l(r);
    return (
      -1 < o && F(r, re[o]),
      n.pop() &&
        oe.length &&
        (function(e) {
          for (var t, n = 0, r = e.length; n < r; n++) F((t = e[n]), re[l(t)]);
        })(r.querySelectorAll(oe)),
      r
    );
  }
  function f(e, t) {
    Ne(e, t),
      N
        ? N.observe(e, Ke)
        : (Je && ((e.setAttribute = s), (e[P] = O(e)), e[R](W, w)), e[R]($, i)),
      e[G] && tt && ((e.created = !0), e[G](), (e.created = !1));
  }
  function p(e) {
    throw new Error('A ' + e + ' type is already registered');
  }
  function d(e, t) {
    var n,
      r,
      o = l(e);
    -1 < o &&
      (I(e, re[o]),
      (o = 0),
      t !== U || e[U]
        ? t !== _ ||
          e[_] ||
          ((e[U] = !1), (e[_] = !0), (r = 'disconnected'), (o = 1))
        : ((e[_] = !1),
          (e[U] = !0),
          (r = 'connected'),
          (o = 1),
          Se && ae.call(Re, e) < 0 && Re.push(e)),
      o && (n = e[t + k] || e[r + k]) && n.call(e));
  }
  function h() {}
  function T(e, t, n) {
    var r = (n && n[x]) || '',
      o = t.prototype,
      l = Oe(o),
      a = t.observedAttributes || me,
      i = { prototype: l };
    Ve(l, G, {
      value: function() {
        if (be) be = !1;
        else if (!this[Le]) {
          (this[Le] = !0), new t(this), o[G] && o[G].call(this);
          var e = ye[we.get(t)];
          (!Ee || e.create.length > 1) && E(this);
        }
      }
    }),
      Ve(l, q, {
        value: function(e) {
          -1 < ae.call(a, e) && o[q] && o[q].apply(this, arguments);
        }
      }),
      o[Z] && Ve(l, B, { value: o[Z] }),
      o[j] && Ve(l, z, { value: o[j] }),
      r && (i[x] = r),
      (e = e.toUpperCase()),
      (ye[e] = { constructor: t, create: r ? [r, Ae(e)] : [e] }),
      we.set(t, e),
      g[V](e.toLowerCase(), i),
      v(e),
      Ce[e].r();
  }
  function L(e) {
    var t = ye[e.toUpperCase()];
    return t && t.constructor;
  }
  function M(e) {
    return 'string' == typeof e ? e : (e && e.is) || '';
  }
  function E(e) {
    for (var t, n = e[q], r = n ? e.attributes : me, o = r.length; o--; )
      n.call(e, (t = r[o]).name || t.nodeName, null, t.value || t.nodeValue);
  }
  function v(e) {
    return (
      (e = e.toUpperCase()) in Ce ||
        ((Ce[e] = {}),
        (Ce[e].p = new ge(function(t) {
          Ce[e].r = t;
        }))),
      Ce[e].p
    );
  }
  function H() {
    Me && delete e.customElements,
      se(e, 'customElements', { configurable: !0, value: new h() }),
      se(e, 'CustomElementRegistry', { configurable: !0, value: h });
    for (
      var t = y.get(/^HTML[A-Z]*[a-z]/), n = t.length;
      n--;
      (function(t) {
        var n = e[t];
        if (n) {
          (e[t] = function(e) {
            var t, r;
            return (
              e || (e = this),
              e[Le] ||
                ((be = !0),
                (t = ye[we.get(e.constructor)]),
                ((e = (r = Ee && 1 === t.create.length)
                  ? Reflect.construct(n, me, t.constructor)
                  : g.createElement.apply(g, t.create))[Le] = !0),
                (be = !1),
                r || E(e)),
              e
            );
          }),
            (e[t].prototype = n.prototype);
          try {
            n.prototype.constructor = e[t];
          } catch (r) {
            se(n, Le, { value: e[t] });
          }
        }
      })(t[n])
    );
    (g.createElement = function(e, t) {
      var n = M(t);
      return n ? ze.call(this, e, Ae(n)) : ze.call(this, e);
    }),
      Qe || ((Ye = !0), g[V](''));
  }
  var g = e.document,
    b = e.Object,
    y = (function(e) {
      var t,
        n,
        r,
        o,
        l = /^[A-Z]+[a-z]/,
        a = function(e, t) {
          (t = t.toLowerCase()) in i ||
            ((i[e] = (i[e] || []).concat(t)), (i[t] = i[t.toUpperCase()] = e));
        },
        i = (b.create || b)(null),
        u = {};
      for (n in e)
        for (o in e[n])
          for (i[o] = r = e[n][o], t = 0; t < r.length; t++)
            i[r[t].toLowerCase()] = i[r[t].toUpperCase()] = o;
      return (
        (u.get = function(e) {
          return 'string' == typeof e
            ? i[e] || (l.test(e) ? [] : '')
            : (function(e) {
                var t,
                  n = [];
                for (t in i) e.test(t) && n.push(t);
                return n;
              })(e);
        }),
        (u.set = function(e, t) {
          return l.test(e) ? a(e, t) : a(t, e), u;
        }),
        u
      );
    })({
      collections: {
        HTMLAllCollection: ['all'],
        HTMLCollection: ['forms'],
        HTMLFormControlsCollection: ['elements'],
        HTMLOptionsCollection: ['options']
      },
      elements: {
        Element: ['element'],
        HTMLAnchorElement: ['a'],
        HTMLAppletElement: ['applet'],
        HTMLAreaElement: ['area'],
        HTMLAttachmentElement: ['attachment'],
        HTMLAudioElement: ['audio'],
        HTMLBRElement: ['br'],
        HTMLBaseElement: ['base'],
        HTMLBodyElement: ['body'],
        HTMLButtonElement: ['button'],
        HTMLCanvasElement: ['canvas'],
        HTMLContentElement: ['content'],
        HTMLDListElement: ['dl'],
        HTMLDataElement: ['data'],
        HTMLDataListElement: ['datalist'],
        HTMLDetailsElement: ['details'],
        HTMLDialogElement: ['dialog'],
        HTMLDirectoryElement: ['dir'],
        HTMLDivElement: ['div'],
        HTMLDocument: ['document'],
        HTMLElement: [
          'element',
          'abbr',
          'address',
          'article',
          'aside',
          'b',
          'bdi',
          'bdo',
          'cite',
          'code',
          'command',
          'dd',
          'dfn',
          'dt',
          'em',
          'figcaption',
          'figure',
          'footer',
          'header',
          'i',
          'kbd',
          'mark',
          'nav',
          'noscript',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'section',
          'small',
          'strong',
          'sub',
          'summary',
          'sup',
          'u',
          'var',
          'wbr'
        ],
        HTMLEmbedElement: ['embed'],
        HTMLFieldSetElement: ['fieldset'],
        HTMLFontElement: ['font'],
        HTMLFormElement: ['form'],
        HTMLFrameElement: ['frame'],
        HTMLFrameSetElement: ['frameset'],
        HTMLHRElement: ['hr'],
        HTMLHeadElement: ['head'],
        HTMLHeadingElement: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        HTMLHtmlElement: ['html'],
        HTMLIFrameElement: ['iframe'],
        HTMLImageElement: ['img'],
        HTMLInputElement: ['input'],
        HTMLKeygenElement: ['keygen'],
        HTMLLIElement: ['li'],
        HTMLLabelElement: ['label'],
        HTMLLegendElement: ['legend'],
        HTMLLinkElement: ['link'],
        HTMLMapElement: ['map'],
        HTMLMarqueeElement: ['marquee'],
        HTMLMediaElement: ['media'],
        HTMLMenuElement: ['menu'],
        HTMLMenuItemElement: ['menuitem'],
        HTMLMetaElement: ['meta'],
        HTMLMeterElement: ['meter'],
        HTMLModElement: ['del', 'ins'],
        HTMLOListElement: ['ol'],
        HTMLObjectElement: ['object'],
        HTMLOptGroupElement: ['optgroup'],
        HTMLOptionElement: ['option'],
        HTMLOutputElement: ['output'],
        HTMLParagraphElement: ['p'],
        HTMLParamElement: ['param'],
        HTMLPictureElement: ['picture'],
        HTMLPreElement: ['pre'],
        HTMLProgressElement: ['progress'],
        HTMLQuoteElement: ['blockquote', 'q', 'quote'],
        HTMLScriptElement: ['script'],
        HTMLSelectElement: ['select'],
        HTMLShadowElement: ['shadow'],
        HTMLSlotElement: ['slot'],
        HTMLSourceElement: ['source'],
        HTMLSpanElement: ['span'],
        HTMLStyleElement: ['style'],
        HTMLTableCaptionElement: ['caption'],
        HTMLTableCellElement: ['td', 'th'],
        HTMLTableColElement: ['col', 'colgroup'],
        HTMLTableElement: ['table'],
        HTMLTableRowElement: ['tr'],
        HTMLTableSectionElement: ['thead', 'tbody', 'tfoot'],
        HTMLTemplateElement: ['template'],
        HTMLTextAreaElement: ['textarea'],
        HTMLTimeElement: ['time'],
        HTMLTitleElement: ['title'],
        HTMLTrackElement: ['track'],
        HTMLUListElement: ['ul'],
        HTMLUnknownElement: ['unknown', 'vhgroupv', 'vkeygen'],
        HTMLVideoElement: ['video']
      },
      nodes: {
        Attr: ['node'],
        Audio: ['audio'],
        CDATASection: ['node'],
        CharacterData: ['node'],
        Comment: ['#comment'],
        Document: ['#document'],
        DocumentFragment: ['#document-fragment'],
        DocumentType: ['node'],
        HTMLDocument: ['#document'],
        Image: ['img'],
        Option: ['option'],
        ProcessingInstruction: ['node'],
        ShadowRoot: ['#shadow-root'],
        Text: ['#text'],
        XMLDocument: ['xml']
      }
    });
  'object' != typeof t && (t = { type: t || 'auto' });
  var C,
    w,
    A,
    O,
    N,
    D,
    I,
    F,
    S,
    V = 'registerElement',
    P = '__' + V + ((1e5 * e.Math.random()) >> 0),
    R = 'addEventListener',
    U = 'attached',
    k = 'Callback',
    _ = 'detached',
    x = 'extends',
    q = 'attributeChanged' + k,
    B = U + k,
    Z = 'connected' + k,
    j = 'disconnected' + k,
    G = 'created' + k,
    z = _ + k,
    K = 'ADDITION',
    X = 'REMOVAL',
    $ = 'DOMAttrModified',
    Q = 'DOMContentLoaded',
    W = 'DOMSubtreeModified',
    Y = '<',
    J = '=',
    ee = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
    te = [
      'ANNOTATION-XML',
      'COLOR-PROFILE',
      'FONT-FACE',
      'FONT-FACE-SRC',
      'FONT-FACE-URI',
      'FONT-FACE-FORMAT',
      'FONT-FACE-NAME',
      'MISSING-GLYPH'
    ],
    ne = [],
    re = [],
    oe = '',
    le = g.documentElement,
    ae =
      ne.indexOf ||
      function(e) {
        for (var t = this.length; t-- && this[t] !== e; );
        return t;
      },
    ie = b.prototype,
    ue = ie.hasOwnProperty,
    ce = ie.isPrototypeOf,
    se = b.defineProperty,
    me = [],
    fe = b.getOwnPropertyDescriptor,
    pe = b.getOwnPropertyNames,
    de = b.getPrototypeOf,
    he = b.setPrototypeOf,
    Te = !!b.__proto__,
    Le = '__dreCEv1',
    Me = e.customElements,
    Ee =
      !/^force/.test(t.type) && !!(Me && Me.define && Me.get && Me.whenDefined),
    ve = b.create || b,
    He =
      e.Map ||
      function() {
        var e,
          t = [],
          n = [];
        return {
          get: function(e) {
            return n[ae.call(t, e)];
          },
          set: function(r, o) {
            (e = ae.call(t, r)) < 0 ? (n[t.push(r) - 1] = o) : (n[e] = o);
          }
        };
      },
    ge =
      e.Promise ||
      function(e) {
        function t(e) {
          for (r = !0; n.length; ) n.shift()(e);
        }
        var n = [],
          r = !1,
          o = {
            catch: function() {
              return o;
            },
            then: function(e) {
              return n.push(e), r && setTimeout(t, 1), o;
            }
          };
        return e(t), o;
      },
    be = !1,
    ye = ve(null),
    Ce = ve(null),
    we = new He(),
    Ae = function(e) {
      return e.toLowerCase();
    },
    Oe =
      b.create ||
      function e(t) {
        return t ? ((e.prototype = t), new e()) : this;
      },
    Ne =
      he ||
      (Te
        ? function(e, t) {
            return (e.__proto__ = t), e;
          }
        : pe && fe
        ? (function() {
            function e(e, t) {
              for (var n, r = pe(t), o = 0, l = r.length; o < l; o++)
                ue.call(e, (n = r[o])) || se(e, n, fe(t, n));
            }
            return function(t, n) {
              do {
                e(t, n);
              } while ((n = de(n)) && !ce.call(n, t));
              return t;
            };
          })()
        : function(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          }),
    De = e.MutationObserver || e.WebKitMutationObserver,
    Ie = e.HTMLAnchorElement,
    Fe = (e.HTMLElement || e.Element || e.Node).prototype,
    Se = !ce.call(Fe, le),
    Ve = Se
      ? function(e, t, n) {
          return (e[t] = n.value), e;
        }
      : se,
    Pe = Se
      ? function(e) {
          return 1 === e.nodeType;
        }
      : function(e) {
          return ce.call(Fe, e);
        },
    Re = Se && [],
    Ue = Fe.attachShadow,
    ke = Fe.cloneNode,
    _e = Fe.dispatchEvent,
    xe = Fe.getAttribute,
    qe = Fe.hasAttribute,
    Be = Fe.removeAttribute,
    Ze = Fe.setAttribute,
    je = g.createElement,
    Ge = g.importNode,
    ze = je,
    Ke = De && { attributes: !0, characterData: !0, attributeOldValue: !0 },
    Xe =
      De ||
      function(e) {
        (Je = !1), le.removeEventListener($, Xe);
      },
    $e = 0,
    Qe = V in g && !/^force-all/.test(t.type),
    We = !0,
    Ye = !1,
    Je = !0,
    et = !0,
    tt = !0;
  if (
    (De &&
      (((S = g.createElement('div')).innerHTML = '<div><div></div></div>'),
      new De(function(e, t) {
        if (
          e[0] &&
          'childList' == e[0].type &&
          !e[0].removedNodes[0].childNodes.length
        ) {
          var n = (S = fe(Fe, 'innerHTML')) && S.set;
          n &&
            se(Fe, 'innerHTML', {
              set: function(e) {
                for (; this.lastChild; ) this.removeChild(this.lastChild);
                n.call(this, e);
              }
            });
        }
        t.disconnect(), (S = null);
      }).observe(S, { childList: !0, subtree: !0 }),
      (S.innerHTML = '')),
    Qe ||
      (he || Te
        ? ((I = function(e, t) {
            ce.call(t, e) || f(e, t);
          }),
          (F = f))
        : (F = I = function(e, t) {
            e[P] || ((e[P] = b(!0)), f(e, t));
          }),
      Se
        ? ((Je = !1),
          (function() {
            var e = fe(Fe, R),
              t = e.value,
              n = function(e) {
                var t = new CustomEvent($, { bubbles: !0 });
                (t.attrName = e),
                  (t.prevValue = xe.call(this, e)),
                  (t.newValue = null),
                  (t[X] = t.attrChange = 2),
                  Be.call(this, e),
                  _e.call(this, t);
              },
              r = function(e, t) {
                var n = qe.call(this, e),
                  r = n && xe.call(this, e),
                  o = new CustomEvent($, { bubbles: !0 });
                Ze.call(this, e, t),
                  (o.attrName = e),
                  (o.prevValue = n ? r : null),
                  (o.newValue = t),
                  n
                    ? (o.MODIFICATION = o.attrChange = 1)
                    : (o[K] = o.attrChange = 0),
                  _e.call(this, o);
              },
              o = function(e) {
                var t,
                  n = e.currentTarget,
                  r = n[P],
                  o = e.propertyName;
                r.hasOwnProperty(o) &&
                  ((r = r[o]),
                  ((t = new CustomEvent($, { bubbles: !0 })).attrName = r.name),
                  (t.prevValue = r.value || null),
                  (t.newValue = r.value = n[o] || null),
                  null == t.prevValue
                    ? (t[K] = t.attrChange = 0)
                    : (t.MODIFICATION = t.attrChange = 1),
                  _e.call(n, t));
              };
            (e.value = function(e, l, a) {
              e === $ &&
                this[q] &&
                this.setAttribute !== r &&
                ((this[P] = {
                  className: { name: 'class', value: this.className }
                }),
                (this.setAttribute = r),
                (this.removeAttribute = n),
                t.call(this, 'propertychange', o)),
                t.call(this, e, l, a);
            }),
              se(Fe, R, e);
          })())
        : De ||
          (le[R]($, Xe),
          le.setAttribute(P, 1),
          le.removeAttribute(P),
          Je &&
            ((w = function(e) {
              var t,
                n,
                r,
                o = this;
              if (o === e.target) {
                for (r in ((t = o[P]), (o[P] = n = O(o)), n)) {
                  if (!(r in t)) return A(0, o, r, t[r], n[r], K);
                  if (n[r] !== t[r])
                    return A(1, o, r, t[r], n[r], 'MODIFICATION');
                }
                for (r in t) if (!(r in n)) return A(2, o, r, t[r], n[r], X);
              }
            }),
            (A = function(e, t, n, r, o, l) {
              var a = {
                attrChange: e,
                currentTarget: t,
                attrName: n,
                prevValue: r,
                newValue: o
              };
              (a[l] = e), i(a);
            }),
            (O = function(e) {
              for (
                var t, n, r = {}, o = e.attributes, l = 0, a = o.length;
                l < a;
                l++
              )
                'setAttribute' !== (n = (t = o[l]).name) && (r[n] = t.value);
              return r;
            }))),
      (g[V] = function(e, t) {
        if (
          ((n = e.toUpperCase()),
          We &&
            ((We = !1),
            De
              ? ((N = (function(e, t) {
                  function n(e, t) {
                    for (var n = 0, r = e.length; n < r; t(e[n++]));
                  }
                  return new De(function(r) {
                    for (var o, l, a, i = 0, u = r.length; i < u; i++)
                      'childList' === (o = r[i]).type
                        ? (n(o.addedNodes, e), n(o.removedNodes, t))
                        : ((l = o.target),
                          tt &&
                            l[q] &&
                            'style' !== o.attributeName &&
                            (a = xe.call(l, o.attributeName)) !== o.oldValue &&
                            l[q](o.attributeName, o.oldValue, a));
                  });
                })(o(U), o(_))),
                (D = function(e) {
                  return N.observe(e, { childList: !0, subtree: !0 }), e;
                })(g),
                Ue &&
                  (Fe.attachShadow = function() {
                    return D(Ue.apply(this, arguments));
                  }))
              : ((C = []),
                g[R]('DOMNodeInserted', u(U)),
                g[R]('DOMNodeRemoved', u(_))),
            g[R](Q, c),
            g[R]('readystatechange', c),
            (g.importNode = function(e, t) {
              switch (e.nodeType) {
                case 1:
                  return m(g, Ge, [e, !!t]);
                case 11:
                  for (
                    var n = g.createDocumentFragment(),
                      r = e.childNodes,
                      o = r.length,
                      l = 0;
                    l < o;
                    l++
                  )
                    n.appendChild(g.importNode(r[l], !!t));
                  return n;
                default:
                  return ke.call(e, !!t);
              }
            }),
            (Fe.cloneNode = function(e) {
              return m(this, ke, [!!e]);
            })),
          Ye)
        )
          return (Ye = !1);
        if (
          (-2 < ae.call(ne, J + n) + ae.call(ne, Y + n) && p(e),
          !ee.test(n) || -1 < ae.call(te, n))
        )
          throw new Error('The type ' + e + ' is invalid');
        var n,
          l,
          a = function() {
            return s ? g.createElement(f, n) : g.createElement(f);
          },
          i = t || ie,
          s = ue.call(i, x),
          f = s ? t[x].toUpperCase() : n;
        return (
          s && -1 < ae.call(ne, Y + f) && p(f),
          (l = ne.push((s ? J : Y) + n) - 1),
          (oe = oe.concat(
            oe.length ? ',' : '',
            s ? f + '[is="' + e.toLowerCase() + '"]' : f
          )),
          (a.prototype = re[l] = ue.call(i, 'prototype')
            ? i.prototype
            : Oe(Fe)),
          oe.length && r(g.querySelectorAll(oe), U),
          a
        );
      }),
      (g.createElement = ze = function(e, t) {
        var n = M(t),
          r = n ? je.call(g, e, Ae(n)) : je.call(g, e),
          o = '' + e,
          l = ae.call(ne, (n ? J : Y) + (n || o).toUpperCase()),
          i = -1 < l;
        return (
          n &&
            (r.setAttribute('is', (n = n.toLowerCase())),
            i && (i = a(o.toUpperCase(), n))),
          (tt = !g.createElement.innerHTMLHelper),
          i && F(r, re[l]),
          r
        );
      })),
    (h.prototype = {
      constructor: h,
      define: Ee
        ? function(e, t, n) {
            if (n) T(e, t, n);
            else {
              var r = e.toUpperCase();
              (ye[r] = { constructor: t, create: [r] }),
                we.set(t, r),
                Me.define(e, t);
            }
          }
        : T,
      get: Ee
        ? function(e) {
            return Me.get(e) || L(e);
          }
        : L,
      whenDefined: Ee
        ? function(e) {
            return ge.race([Me.whenDefined(e), v(e)]);
          }
        : v
    }),
    !Me || /^force/.test(t.type))
  )
    H();
  else if (!t.noBuiltIn)
    try {
      !(function(t, n, r) {
        var o = new RegExp('^<a\\s+is=(\'|")' + r + '\\1></a>$');
        if (
          ((n[x] = 'a'),
          ((t.prototype = Oe(Ie.prototype)).constructor = t),
          e.customElements.define(r, t, n),
          !o.test(g.createElement('a', { is: r }).outerHTML) ||
            !o.test(new t().outerHTML))
        )
          throw n;
      })(
        function e() {
          return Reflect.construct(Ie, [], e);
        },
        {},
        'document-register-element-a'
      );
    } catch (nt) {
      H();
    }
  if (!t.noBuiltIn)
    try {
      if (je.call(g, 'a', 'a').outerHTML.indexOf('is') < 0) throw {};
    } catch (rt) {
      Ae = function(e) {
        return { is: e.toLowerCase() };
      };
    }
})(window);
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(e, t, n) {
      e.exports = n('zUnb');
    },
    crnd: function(e, t) {
      function n(e) {
        return Promise.resolve().then(function() {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 'crnd');
    },
    zUnb: function(e, t, n) {
      'use strict';
      function r(e) {
        return 'function' == typeof e;
      }
      n.r(t);
      let s = !1;
      const o = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        }
      };
      function i(e) {
        setTimeout(() => {
          throw e;
        });
      }
      const a = {
          closed: !0,
          next(e) {},
          error(e) {
            if (o.useDeprecatedSynchronousErrorHandling) throw e;
            i(e);
          },
          complete() {}
        },
        l = Array.isArray || (e => e && 'number' == typeof e.length);
      function c(e) {
        return null != e && 'object' == typeof e;
      }
      const u = { e: {} };
      let d;
      function h() {
        try {
          return d.apply(this, arguments);
        } catch (e) {
          return (u.e = e), u;
        }
      }
      function f(e) {
        return (d = e), h;
      }
      function p(e) {
        return (
          Error.call(this),
          (this.message = e
            ? `${e.length} errors occurred during unsubscription:\n${e
                .map((e, t) => `${t + 1}) ${e.toString()}`)
                .join('\n  ')}`
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = e),
          this
        );
      }
      p.prototype = Object.create(Error.prototype);
      const g = p;
      class m {
        constructor(e) {
          (this.closed = !1),
            (this._parent = null),
            (this._parents = null),
            (this._subscriptions = null),
            e && (this._unsubscribe = e);
        }
        unsubscribe() {
          let e,
            t = !1;
          if (this.closed) return;
          let {
            _parent: n,
            _parents: s,
            _unsubscribe: o,
            _subscriptions: i
          } = this;
          (this.closed = !0),
            (this._parent = null),
            (this._parents = null),
            (this._subscriptions = null);
          let a = -1,
            d = s ? s.length : 0;
          for (; n; ) n.remove(this), (n = (++a < d && s[a]) || null);
          if (
            (r(o) &&
              f(o).call(this) === u &&
              ((t = !0), (e = e || (u.e instanceof g ? y(u.e.errors) : [u.e]))),
            l(i))
          )
            for (a = -1, d = i.length; ++a < d; ) {
              const n = i[a];
              if (c(n) && f(n.unsubscribe).call(n) === u) {
                (t = !0), (e = e || []);
                let n = u.e;
                n instanceof g ? (e = e.concat(y(n.errors))) : e.push(n);
              }
            }
          if (t) throw new g(e);
        }
        add(e) {
          if (!e || e === m.EMPTY) return m.EMPTY;
          if (e === this) return this;
          let t = e;
          switch (typeof e) {
            case 'function':
              t = new m(e);
            case 'object':
              if (t.closed || 'function' != typeof t.unsubscribe) return t;
              if (this.closed) return t.unsubscribe(), t;
              if ('function' != typeof t._addParent) {
                const e = t;
                (t = new m())._subscriptions = [e];
              }
              break;
            default:
              throw new Error(
                'unrecognized teardown ' + e + ' added to Subscription.'
              );
          }
          return (
            (this._subscriptions || (this._subscriptions = [])).push(t),
            t._addParent(this),
            t
          );
        }
        remove(e) {
          const t = this._subscriptions;
          if (t) {
            const n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
          }
        }
        _addParent(e) {
          let { _parent: t, _parents: n } = this;
          t && t !== e
            ? n
              ? -1 === n.indexOf(e) && n.push(e)
              : (this._parents = [e])
            : (this._parent = e);
        }
      }
      function y(e) {
        return e.reduce((e, t) => e.concat(t instanceof g ? t.errors : t), []);
      }
      m.EMPTY = (function(e) {
        return (e.closed = !0), e;
      })(new m());
      const _ =
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random();
      class w extends m {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            (this._parentSubscription = null),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!e) {
                this.destination = a;
                break;
              }
              if ('object' == typeof e) {
                e instanceof w
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new v(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new v(this, e, t, n));
          }
        }
        [_]() {
          return this;
        }
        static create(e, t, n) {
          const r = new w(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: e, _parents: t } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = e),
            (this._parents = t),
            (this._parentSubscription = null),
            this
          );
        }
      }
      class v extends w {
        constructor(e, t, n, s) {
          let o;
          super(), (this._parentSubscriber = e);
          let i = this;
          r(t)
            ? (o = t)
            : t &&
              ((o = t.next),
              (n = t.error),
              (s = t.complete),
              t !== a &&
                (r((i = Object.create(t)).unsubscribe) &&
                  this.add(i.unsubscribe.bind(i)),
                (i.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = i),
            (this._next = o),
            (this._error = n),
            (this._complete = s);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = o;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : i(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              i(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              o.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling))
              throw n;
            i(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!o.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call');
          try {
            t.call(this._context, n);
          } catch (r) {
            return o.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (i(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const b =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      class E {
        constructor(e) {
          (this._isScalar = !1), e && (this._subscribe = e);
        }
        lift(e) {
          const t = new E();
          return (t.source = this), (t.operator = e), t;
        }
        subscribe(e, t, n) {
          const { operator: r } = this,
            s = (function(e, t, n) {
              if (e) {
                if (e instanceof w) return e;
                if (e[_]) return e[_]();
              }
              return e || t || n ? new w(e, t, n) : new w(a);
            })(e, t, n);
          if (
            (r
              ? r.call(s, this.source)
              : s.add(
                  this.source ||
                    (o.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                    ? this._subscribe(s)
                    : this._trySubscribe(s)
                ),
            o.useDeprecatedSynchronousErrorHandling &&
              s.syncErrorThrowable &&
              ((s.syncErrorThrowable = !1), s.syncErrorThrown))
          )
            throw s.syncErrorValue;
          return s;
        }
        _trySubscribe(e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            o.useDeprecatedSynchronousErrorHandling &&
              ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              (function(e) {
                for (; e; ) {
                  const { closed: t, destination: n, isStopped: r } = e;
                  if (t || r) return !1;
                  e = n && n instanceof w ? n : null;
                }
                return !0;
              })(e)
                ? e.error(t)
                : console.warn(t);
          }
        }
        forEach(e, t) {
          return new (t = C(t))((t, n) => {
            let r;
            r = this.subscribe(
              t => {
                try {
                  e(t);
                } catch (s) {
                  n(s), r && r.unsubscribe();
                }
              },
              n,
              t
            );
          });
        }
        _subscribe(e) {
          const { source: t } = this;
          return t && t.subscribe(e);
        }
        [b]() {
          return this;
        }
        pipe(...e) {
          return 0 === e.length
            ? this
            : ((t = e)
                ? 1 === t.length
                  ? t[0]
                  : function(e) {
                      return t.reduce((e, t) => t(e), e);
                    }
                : function() {})(this);
          var t;
        }
        toPromise(e) {
          return new (e = C(e))((e, t) => {
            let n;
            this.subscribe(e => (n = e), e => t(e), () => e(n));
          });
        }
      }
      function C(e) {
        if ((e || (e = o.Promise || Promise), !e))
          throw new Error('no Promise impl found');
        return e;
      }
      function x() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      (E.create = e => new E(e)),
        (x.prototype = Object.create(Error.prototype));
      const T = x;
      class k extends m {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class I extends w {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      class N extends E {
        constructor() {
          super(),
            (this.observers = []),
            (this.closed = !1),
            (this.isStopped = !1),
            (this.hasError = !1),
            (this.thrownError = null);
        }
        [_]() {
          return new I(this);
        }
        lift(e) {
          const t = new S(this, this);
          return (t.operator = e), t;
        }
        next(e) {
          if (this.closed) throw new T();
          if (!this.isStopped) {
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let s = 0; s < n; s++) r[s].next(e);
          }
        }
        error(e) {
          if (this.closed) throw new T();
          (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
          const { observers: t } = this,
            n = t.length,
            r = t.slice();
          for (let s = 0; s < n; s++) r[s].error(e);
          this.observers.length = 0;
        }
        complete() {
          if (this.closed) throw new T();
          this.isStopped = !0;
          const { observers: e } = this,
            t = e.length,
            n = e.slice();
          for (let r = 0; r < t; r++) n[r].complete();
          this.observers.length = 0;
        }
        unsubscribe() {
          (this.isStopped = !0), (this.closed = !0), (this.observers = null);
        }
        _trySubscribe(e) {
          if (this.closed) throw new T();
          return super._trySubscribe(e);
        }
        _subscribe(e) {
          if (this.closed) throw new T();
          return this.hasError
            ? (e.error(this.thrownError), m.EMPTY)
            : this.isStopped
            ? (e.complete(), m.EMPTY)
            : (this.observers.push(e), new k(this, e));
        }
        asObservable() {
          const e = new E();
          return (e.source = this), e;
        }
      }
      N.create = (e, t) => new S(e, t);
      class S extends N {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : m.EMPTY;
        }
      }
      class A extends w {
        constructor(e, t, n) {
          super(),
            (this.parent = e),
            (this.outerValue = t),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(
            this.outerValue,
            e,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const M = e => t => {
          for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.closed || t.complete();
        },
        D = e => t => (
          e
            .then(
              e => {
                t.closed || (t.next(e), t.complete());
              },
              e => t.error(e)
            )
            .then(null, i),
          t
        );
      function R() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      const O = R(),
        P = e => t => {
          const n = e[O]();
          for (;;) {
            const e = n.next();
            if (e.done) {
              t.complete();
              break;
            }
            if ((t.next(e.value), t.closed)) break;
          }
          return (
            'function' == typeof n.return &&
              t.add(() => {
                n.return && n.return();
              }),
            t
          );
        },
        V = e => t => {
          const n = e[b]();
          if ('function' != typeof n.subscribe)
            throw new TypeError(
              'Provided object does not correctly implement Symbol.observable'
            );
          return n.subscribe(t);
        },
        j = e => e && 'number' == typeof e.length && 'function' != typeof e;
      function F(e) {
        return (
          e && 'function' != typeof e.subscribe && 'function' == typeof e.then
        );
      }
      const H = e => {
        if (e instanceof E)
          return t =>
            e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
        if (e && 'function' == typeof e[b]) return V(e);
        if (j(e)) return M(e);
        if (F(e)) return D(e);
        if (e && 'function' == typeof e[O]) return P(e);
        {
          const t = c(e) ? 'an invalid object' : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
      class L extends w {
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      function B(e, t) {
        return function(n) {
          if ('function' != typeof e)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new $(e, t));
        };
      }
      class $ {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new z(e, this.project, this.thisArg));
        }
      }
      class z extends w {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function U(e, t) {
        return new E(
          t
            ? n => {
                const r = new m();
                let s = 0;
                return (
                  r.add(
                    t.schedule(function() {
                      s !== e.length
                        ? (n.next(e[s++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : M(e)
        );
      }
      class Z {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new K(e, this.project, this.concurrent));
        }
      }
      class K extends L {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = new A(this, void 0, void 0);
          this.destination.add(r),
            (function(e, t, n, r, s = new A(e, n, r)) {
              s.closed || H(t)(s);
            })(this, e, t, n, r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function G(e) {
        return e;
      }
      function q(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          r = e[e.length - 1];
        var s;
        return (
          (s = r) && 'function' == typeof s.schedule
            ? ((n = e.pop()),
              e.length > 1 &&
                'number' == typeof e[e.length - 1] &&
                (t = e.pop()))
            : 'number' == typeof r && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof E
            ? e[0]
            : (function(e = Number.POSITIVE_INFINITY) {
                return (function e(t, n, r = Number.POSITIVE_INFINITY) {
                  return 'function' == typeof n
                    ? s =>
                        s.pipe(
                          e(
                            (e, r) =>
                              (function(e, t) {
                                return e instanceof E ? e : new E(H(e));
                              })(t(e, r)).pipe(B((t, s) => n(e, t, r, s))),
                            r
                          )
                        )
                    : ('number' == typeof n && (r = n),
                      e => e.lift(new Z(t, r)));
                })(G, e);
              })(t)(U(e, n))
        );
      }
      function Q() {
        return function(e) {
          return e.lift(new W(e));
        };
      }
      class W {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new Y(e, n),
            s = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class Y extends w {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      const J = class extends E {
          constructor(e, t) {
            super(),
              (this.source = e),
              (this.subjectFactory = t),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(e) {
            return this.getSubject().subscribe(e);
          }
          getSubject() {
            const e = this._subject;
            return (
              (e && !e.isStopped) || (this._subject = this.subjectFactory()),
              this._subject
            );
          }
          connect() {
            let e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new m()).add(
                  this.source.subscribe(new ee(this.getSubject(), this))
                ),
                e.closed
                  ? ((this._connection = null), (e = m.EMPTY))
                  : (this._connection = e)),
              e
            );
          }
          refCount() {
            return Q()(this);
          }
        }.prototype,
        X = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: J._subscribe },
          _isComplete: { value: J._isComplete, writable: !0 },
          getSubject: { value: J.getSubject },
          connect: { value: J.connect },
          refCount: { value: J.refCount }
        };
      class ee extends I {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function te() {
        return new N();
      }
      function ne(e) {
        for (let t in e) if (e[t] === ne) return t;
        throw Error('Could not find renamed property on target object.');
      }
      const re = ne({ ngInjectableDef: ne });
      function se(e) {
        return {
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0
        };
      }
      function oe(e) {
        return e.hasOwnProperty(re) ? e[re] : null;
      }
      class ie {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef =
              void 0 !== t
                ? se({ providedIn: t.providedIn || 'root', factory: t.factory })
                : void 0);
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const ae = '__annotations__',
        le = '__parameters__',
        ce = '__prop__metadata__';
      function ue(e, t, n) {
        const r = (function(e) {
          return function(...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        })(t);
        function s(...e) {
          if (this instanceof s) return r.apply(this, e), this;
          const t = new s(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const s = e.hasOwnProperty(le)
              ? e[le]
              : Object.defineProperty(e, le, { value: [] })[le];
            for (; s.length <= r; ) s.push(null);
            return (s[r] = s[r] || []).push(t), e;
          }
        }
        return (
          n && (s.prototype = Object.create(n.prototype)),
          (s.prototype.ngMetadataName = e),
          (s.annotationCls = s),
          s
        );
      }
      const de = 'undefined' != typeof window && window,
        he =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        fe = ('undefined' != typeof global && global) || de || he,
        pe = Promise.resolve(0);
      let ge = null;
      function me() {
        if (!ge) {
          const e = fe.Symbol;
          if (e && e.iterator) ge = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (ge = n);
            }
          }
        }
        return ge;
      }
      function ye(e) {
        'undefined' == typeof Zone
          ? pe.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      function _e(e, t) {
        return (
          e === t ||
          ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t))
        );
      }
      function we(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(we).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function ve(e) {
        return (
          (e.__forward_ref__ = ve),
          (e.toString = function() {
            return we(this());
          }),
          e
        );
      }
      function be(e) {
        return 'function' == typeof e &&
          e.hasOwnProperty('__forward_ref__') &&
          e.__forward_ref__ === ve
          ? e()
          : e;
      }
      const Ee = ue('Inject', e => ({ token: e })),
        Ce = ue('Optional'),
        xe = ue('Self'),
        Te = ue('SkipSelf'),
        ke = '__source',
        Ie = new Object(),
        Ne = Ie,
        Se = new ie('INJECTOR');
      class Ae {
        get(e, t = Ie) {
          if (t === Ie)
            throw new Error(`NullInjectorError: No provider for ${we(e)}!`);
          return t;
        }
      }
      class Me {
        static create(e, t) {
          return Array.isArray(e)
            ? new $e(e, t)
            : new $e(e.providers, e.parent, e.name || null);
        }
      }
      (Me.THROW_IF_NOT_FOUND = Ie),
        (Me.NULL = new Ae()),
        (Me.ngInjectableDef = se({ providedIn: 'any', factory: () => qe(Se) }));
      const De = function(e) {
          return e;
        },
        Re = [],
        Oe = De,
        Pe = function() {
          return Array.prototype.slice.call(arguments);
        },
        Ve = ne({ provide: String, useValue: ne }),
        je = 'ngTokenPath',
        Fe = 'ngTempTokenPath',
        He = Me.NULL,
        Le = /\n/gm,
        Be = '\u0275';
      class $e {
        constructor(e, t = He, n = null) {
          (this.parent = t), (this.source = n);
          const r = (this._records = new Map());
          r.set(Me, { token: Me, fn: De, deps: Re, value: this, useNew: !1 }),
            r.set(Se, { token: Se, fn: De, deps: Re, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = be(n)) instanceof Array)
                  for (let r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ('function' == typeof n)
                    throw Ze('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide)
                    throw Ze('Unexpected provider', n);
                  {
                    let e = be(n.provide);
                    const r = (function(e) {
                      const t = (function(e) {
                        let t = Re;
                        const n = e.deps;
                        if (n && n.length) {
                          t = [];
                          for (let e = 0; e < n.length; e++) {
                            let r = 6,
                              s = be(n[e]);
                            if (s instanceof Array)
                              for (let e = 0, t = s; e < t.length; e++) {
                                const n = t[e];
                                n instanceof Ce || n == Ce
                                  ? (r |= 1)
                                  : n instanceof Te || n == Te
                                  ? (r &= -3)
                                  : n instanceof xe || n == xe
                                  ? (r &= -5)
                                  : (s = n instanceof Ee ? n.token : be(n));
                              }
                            t.push({ token: s, options: r });
                          }
                        } else if (e.useExisting)
                          t = [{ token: be(e.useExisting), options: 6 }];
                        else if (!(n || Ve in e))
                          throw Ze("'deps' required", e);
                        return t;
                      })(e);
                      let n = De,
                        r = Re,
                        s = !1,
                        o = be(e.provide);
                      if (Ve in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (s = !0), (n = be(e.useClass));
                      else {
                        if ('function' != typeof o)
                          throw Ze(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            e
                          );
                        (s = !0), (n = o);
                      }
                      return { deps: t, fn: n, useNew: s, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = t.get(e);
                      if (r) {
                        if (r.fn !== Pe) throw ze(e);
                      } else
                        t.set(
                          e,
                          (r = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: Pe,
                            value: Re
                          })
                        );
                      r.deps.push({ token: (e = n), options: 6 });
                    }
                    const s = t.get(e);
                    if (s && s.fn == Pe) throw ze(e);
                    t.set(e, r);
                  }
                }
            })(r, e);
        }
        get(e, t, n = 0) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, s, o, i) {
              try {
                return (function(t, n, r, s, o, i) {
                  let a;
                  if (!n || 4 & i) 2 & i || (a = s.get(t, o, 0));
                  else {
                    if ((a = n.value) == Oe)
                      throw Error(Be + 'Circular dependency');
                    if (a === Re) {
                      n.value = Oe;
                      let t = void 0,
                        o = n.useNew,
                        i = n.fn,
                        l = n.deps,
                        c = Re;
                      if (l.length) {
                        c = [];
                        for (let t = 0; t < l.length; t++) {
                          const n = l[t],
                            o = n.options,
                            i = 2 & o ? r.get(n.token) : void 0;
                          c.push(
                            e(
                              n.token,
                              i,
                              r,
                              i || 4 & o ? s : He,
                              1 & o ? null : Me.THROW_IF_NOT_FOUND,
                              0
                            )
                          );
                        }
                      }
                      n.value = a = o ? new i(...c) : i.apply(t, c);
                    }
                  }
                  return a;
                })(t, n, r, s, o, i);
              } catch (a) {
                throw (a instanceof Error || (a = new Error(a)),
                (a[Fe] = a[Fe] || []).unshift(t),
                n && n.value == Oe && (n.value = Re),
                a);
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (s) {
            const t = s[Fe];
            throw (e[ke] && t.unshift(e[ke]),
            (s.message = Ue('\n' + s.message, t, this.source)),
            (s[je] = t),
            (s[Fe] = null),
            s);
          }
        }
        toString() {
          const e = [];
          return (
            this._records.forEach((t, n) => e.push(we(n))),
            `StaticInjector[${e.join(', ')}]`
          );
        }
      }
      function ze(e) {
        return Ze('Cannot mix multi providers and regular providers', e);
      }
      function Ue(e, t, n = null) {
        e = e && '\n' === e.charAt(0) && e.charAt(1) == Be ? e.substr(2) : e;
        let r = we(t);
        if (t instanceof Array) r = t.map(we).join(' -> ');
        else if ('object' == typeof t) {
          let e = [];
          for (let n in t)
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(
                n + ':' + ('string' == typeof r ? JSON.stringify(r) : we(r))
              );
            }
          r = `{${e.join(', ')}}`;
        }
        return `StaticInjectorError${n ? '(' + n + ')' : ''}[${r}]: ${e.replace(
          Le,
          '\n  '
        )}`;
      }
      function Ze(e, t) {
        return new Error(Ue(e, t));
      }
      let Ke = void 0;
      function Ge(e) {
        const t = Ke;
        return (Ke = e), t;
      }
      function qe(e, t = 0) {
        if (void 0 === Ke)
          throw new Error('inject() must be called from an injection context');
        if (null === Ke) {
          const n = oe(e);
          if (n && 'root' == n.providedIn)
            return void 0 === n.value ? (n.value = n.factory()) : n.value;
          if (8 & t) return null;
          throw new Error(`Injector: NOT_FOUND [${we(e)}]`);
        }
        return Ke.get(e, 8 & t ? null : void 0, t);
      }
      const Qe = Function;
      function We(e) {
        return 'function' == typeof e;
      }
      const Ye = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,
        Je = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,
        Xe = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/;
      class et {
        constructor(e) {
          this._reflect = e || fe.Reflect;
        }
        isReflectionEnabled() {
          return !0;
        }
        factory(e) {
          return (...t) => new e(...t);
        }
        _zipTypesAndAnnotations(e, t) {
          let n;
          n = void 0 === e ? new Array(t.length) : new Array(e.length);
          for (let r = 0; r < n.length; r++)
            (n[r] = void 0 === e ? [] : e[r] != Object ? [e[r]] : []),
              t && null != t[r] && (n[r] = n[r].concat(t[r]));
          return n;
        }
        _ownParameters(e, t) {
          const n = e.toString();
          if (Ye.exec(n) || (Je.exec(n) && !Xe.exec(n))) return null;
          if (e.parameters && e.parameters !== t.parameters)
            return e.parameters;
          const r = e.ctorParameters;
          if (r && r !== t.ctorParameters) {
            const e = 'function' == typeof r ? r() : r,
              t = e.map(e => e && e.type),
              n = e.map(e => e && tt(e.decorators));
            return this._zipTypesAndAnnotations(t, n);
          }
          const s = e.hasOwnProperty(le) && e[le],
            o =
              this._reflect &&
              this._reflect.getOwnMetadata &&
              this._reflect.getOwnMetadata('design:paramtypes', e);
          return o || s
            ? this._zipTypesAndAnnotations(o, s)
            : new Array(e.length).fill(void 0);
        }
        parameters(e) {
          if (!We(e)) return [];
          const t = nt(e);
          let n = this._ownParameters(e, t);
          return n || t === Object || (n = this.parameters(t)), n || [];
        }
        _ownAnnotations(e, t) {
          if (e.annotations && e.annotations !== t.annotations) {
            let t = e.annotations;
            return (
              'function' == typeof t && t.annotations && (t = t.annotations), t
            );
          }
          return e.decorators && e.decorators !== t.decorators
            ? tt(e.decorators)
            : e.hasOwnProperty(ae)
            ? e[ae]
            : null;
        }
        annotations(e) {
          if (!We(e)) return [];
          const t = nt(e),
            n = this._ownAnnotations(e, t) || [];
          return (t !== Object ? this.annotations(t) : []).concat(n);
        }
        _ownPropMetadata(e, t) {
          if (e.propMetadata && e.propMetadata !== t.propMetadata) {
            let t = e.propMetadata;
            return (
              'function' == typeof t && t.propMetadata && (t = t.propMetadata),
              t
            );
          }
          if (e.propDecorators && e.propDecorators !== t.propDecorators) {
            const t = e.propDecorators,
              n = {};
            return (
              Object.keys(t).forEach(e => {
                n[e] = tt(t[e]);
              }),
              n
            );
          }
          return e.hasOwnProperty(ce) ? e[ce] : null;
        }
        propMetadata(e) {
          if (!We(e)) return {};
          const t = nt(e),
            n = {};
          if (t !== Object) {
            const e = this.propMetadata(t);
            Object.keys(e).forEach(t => {
              n[t] = e[t];
            });
          }
          const r = this._ownPropMetadata(e, t);
          return (
            r &&
              Object.keys(r).forEach(e => {
                const t = [];
                n.hasOwnProperty(e) && t.push(...n[e]),
                  t.push(...r[e]),
                  (n[e] = t);
              }),
            n
          );
        }
        hasLifecycleHook(e, t) {
          return e instanceof Qe && t in e.prototype;
        }
        guards(e) {
          return {};
        }
        getter(e) {
          return new Function('o', 'return o.' + e + ';');
        }
        setter(e) {
          return new Function('o', 'v', 'return o.' + e + ' = v;');
        }
        method(e) {
          return new Function(
            'o',
            'args',
            `if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`
          );
        }
        importUri(e) {
          return 'object' == typeof e && e.filePath ? e.filePath : `./${we(e)}`;
        }
        resourceUri(e) {
          return `./${we(e)}`;
        }
        resolveIdentifier(e, t, n, r) {
          return r;
        }
        resolveEnum(e, t) {
          return e[t];
        }
      }
      function tt(e) {
        return e
          ? e.map(e => new (0, e.type.annotationCls)(...(e.args ? e.args : [])))
          : [];
      }
      function nt(e) {
        const t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
        return (t ? t.constructor : null) || Object;
      }
      var rt = (function() {
        var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
        return (
          (e[e.Emulated] = 'Emulated'),
          (e[e.Native] = 'Native'),
          (e[e.None] = 'None'),
          (e[e.ShadowDom] = 'ShadowDom'),
          e
        );
      })();
      function st(e, t) {
        const n = at(e),
          r = at(t);
        if (n && r)
          return (function(e, t, n) {
            const r = e[me()](),
              s = t[me()]();
            for (;;) {
              const e = r.next(),
                t = s.next();
              if (e.done && t.done) return !0;
              if (e.done || t.done) return !1;
              if (!n(e.value, t.value)) return !1;
            }
          })(e, t, st);
        {
          const s = e && ('object' == typeof e || 'function' == typeof e),
            o = t && ('object' == typeof t || 'function' == typeof t);
          return !(n || !s || r || !o) || _e(e, t);
        }
      }
      class ot {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new ot(e);
        }
        static unwrap(e) {
          return ot.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof ot;
        }
      }
      class it {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function at(e) {
        return (
          !!lt(e) && (Array.isArray(e) || (!(e instanceof Map) && me() in e))
        );
      }
      function lt(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      class ct {}
      class ut {}
      function dt(e) {
        const t = Error(
          `No component factory found for ${we(
            e
          )}. Did you add it to @NgModule.entryComponents?`
        );
        return (t[ht] = e), t;
      }
      const ht = 'ngComponent';
      class ft {
        resolveComponentFactory(e) {
          throw dt(e);
        }
      }
      class pt {}
      pt.NULL = new ft();
      class gt {
        constructor(e, t, n) {
          (this._parent = t),
            (this._ngModule = n),
            (this._factories = new Map());
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if (
            (!t &&
              this._parent &&
              (t = this._parent.resolveComponentFactory(e)),
            !t)
          )
            throw dt(e);
          return new mt(t, this._ngModule);
        }
      }
      class mt extends ut {
        constructor(e, t) {
          super(),
            (this.factory = e),
            (this.ngModule = t),
            (this.selector = e.selector),
            (this.componentType = e.componentType),
            (this.ngContentSelectors = e.ngContentSelectors),
            (this.inputs = e.inputs),
            (this.outputs = e.outputs);
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      class yt {}
      class _t {}
      function wt(...e) {}
      let vt = wt,
        bt = wt,
        Et = wt,
        Ct = wt,
        xt = wt;
      class Tt {
        constructor(e) {
          this.nativeElement = e;
        }
      }
      Tt.__NG_ELEMENT_ID__ = () => vt(Tt);
      class kt {}
      class It {}
      var Nt = (function() {
        var e = { Important: 1, DashCase: 2 };
        return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
      })();
      class St {}
      St.__NG_ELEMENT_ID__ = () => xt();
      const At = new ie(
        'The presence of this token marks an injector as being the root injector.'
      );
      class Mt extends N {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            s = e => null,
            o = () => null;
          e && 'object' == typeof e
            ? ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e.next(t));
                  }
                : t => {
                    e.next(t);
                  }),
              e.error &&
                (s = this.__isAsync
                  ? t => {
                      setTimeout(() => e.error(t));
                    }
                  : t => {
                      e.error(t);
                    }),
              e.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e(t));
                  }
                : t => {
                    e(t);
                  }),
              t &&
                (s = this.__isAsync
                  ? e => {
                      setTimeout(() => t(e));
                    }
                  : e => {
                      t(e);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const i = super.subscribe(r, s, o);
          return e instanceof m && e.add(i), i;
        }
      }
      class Dt {}
      Dt.__NG_ELEMENT_ID__ = () => bt(Dt, Tt);
      let Rt = !0,
        Ot = !1;
      function Pt() {
        return (Ot = !0), Rt;
      }
      class Vt {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const e = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(e),
              (this.inertBodyElement = this.inertDocument.createElement(
                'body'
              )),
              e.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector('svg')
              ? ((this.inertBodyElement.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector('svg img') &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = 'document'),
            t.open('GET', 'data:text/html;charset=utf-8,' + e, !1),
            t.send(void 0);
          const n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            const n = new window.DOMParser().parseFromString(e, 'text/html')
              .body;
            return n.removeChild(n.firstChild), n;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement('template');
          return 'content' in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode &&
                this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) ||
              e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const jt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Ft = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Ht(e) {
        return (e = String(e)).match(jt) || e.match(Ft)
          ? e
          : (Pt() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
              ),
            'unsafe:' + e);
      }
      function Lt(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function Bt(...e) {
        const t = {};
        for (const n of e)
          for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const $t = Lt('area,br,col,hr,img,wbr'),
        zt = Lt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Ut = Lt('rp,rt'),
        Zt = Bt(Ut, zt),
        Kt = Bt(
          $t,
          Bt(
            zt,
            Lt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          Bt(
            Ut,
            Lt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          Zt
        ),
        Gt = Lt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        qt = Lt('srcset'),
        Qt = Bt(
          Gt,
          qt,
          Lt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          )
        );
      class Wt {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? this.startElement(t)
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join('');
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!Kt.hasOwnProperty(t)) return void (this.sanitizedSomething = !0);
          this.buf.push('<'), this.buf.push(t);
          const n = e.attributes;
          for (let s = 0; s < n.length; s++) {
            const e = n.item(s),
              t = e.name,
              o = t.toLowerCase();
            if (!Qt.hasOwnProperty(o)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = e.value;
            Gt[o] && (i = Ht(i)),
              qt[o] &&
                ((r = i),
                (i = (r = String(r))
                  .split(',')
                  .map(e => Ht(e.trim()))
                  .join(', '))),
              this.buf.push(' ', t, '="', Xt(i), '"');
          }
          var r;
          this.buf.push('>');
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          Kt.hasOwnProperty(t) &&
            !$t.hasOwnProperty(t) &&
            (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(e) {
          this.buf.push(Xt(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${
                e.outerHTML
              }`
            );
          return t;
        }
      }
      const Yt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Jt = /([^\#-~ |!])/g;
      function Xt(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(Yt, function(e) {
            return (
              '&#' +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(Jt, function(e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let en;
      function tn(e) {
        return 'content' in e &&
          (function(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var nn = (function() {
        var e = {
          NONE: 0,
          HTML: 1,
          STYLE: 2,
          SCRIPT: 3,
          URL: 4,
          RESOURCE_URL: 5
        };
        return (
          (e[e.NONE] = 'NONE'),
          (e[e.HTML] = 'HTML'),
          (e[e.STYLE] = 'STYLE'),
          (e[e.SCRIPT] = 'SCRIPT'),
          (e[e.URL] = 'URL'),
          (e[e.RESOURCE_URL] = 'RESOURCE_URL'),
          e
        );
      })();
      class rn {}
      const sn = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        on = /^url\(([^)]+)\)$/;
      String;
      const an = !1;
      String;
      class ln {
        constructor(e) {
          (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const cn = new ln('7.0.4'),
        un = 'ngDebugContext',
        dn = 'ngOriginalError',
        hn = 'ngErrorLogger';
      function fn(e) {
        return e[un];
      }
      function pn(e) {
        return e[dn];
      }
      function gn(e, ...t) {
        e.error(...t);
      }
      class mn {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function(e) {
              return e[hn] || gn;
            })(e);
          r(this._console, 'ERROR', e),
            t && r(this._console, 'ORIGINAL ERROR', t),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(e) {
          return e ? (fn(e) ? fn(e) : this._findContext(pn(e))) : null;
        }
        _findOriginalError(e) {
          let t = pn(e);
          for (; t && pn(t); ) t = pn(t);
          return t;
        }
      }
      function yn(e) {
        return e.length > 1
          ? ' (' +
              (function(e) {
                const t = [];
                for (let n = 0; n < e.length; ++n) {
                  if (t.indexOf(e[n]) > -1) return t.push(e[n]), t;
                  t.push(e[n]);
                }
                return t;
              })(e.slice().reverse())
                .map(e => we(e.token))
                .join(' -> ') +
              ')'
          : '';
      }
      function _n(e, t, n, r) {
        const s = [t],
          o = n(s),
          i = r
            ? (function(e, t) {
                const n = `${o} caused by: ${
                    t instanceof Error ? t.message : t
                  }`,
                  r = Error(n);
                return (r[dn] = t), r;
              })(0, r)
            : Error(o);
        return (
          (i.addKey = wn),
          (i.keys = s),
          (i.injectors = [e]),
          (i.constructResolvingMessage = n),
          (i[dn] = r),
          i
        );
      }
      function wn(e, t) {
        this.injectors.push(e),
          this.keys.push(t),
          (this.message = this.constructResolvingMessage(this.keys));
      }
      function vn(e, t) {
        const n = [];
        for (let r = 0, s = t.length; r < s; r++) {
          const e = t[r];
          n.push(e && 0 != e.length ? e.map(we).join(' ') : '?');
        }
        return Error(
          "Cannot resolve all parameters for '" +
            we(e) +
            "'(" +
            n.join(', ') +
            "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
            we(e) +
            "' is decorated with Injectable."
        );
      }
      class bn {
        constructor(e, t) {
          if (((this.token = e), (this.id = t), !e))
            throw new Error('Token must be defined!');
          this.displayName = we(this.token);
        }
        static get(e) {
          return Cn.get(be(e));
        }
        static get numberOfKeys() {
          return Cn.numberOfKeys;
        }
      }
      class En {
        constructor() {
          this._allKeys = new Map();
        }
        get(e) {
          if (e instanceof bn) return e;
          if (this._allKeys.has(e)) return this._allKeys.get(e);
          const t = new bn(e, bn.numberOfKeys);
          return this._allKeys.set(e, t), t;
        }
        get numberOfKeys() {
          return this._allKeys.size;
        }
      }
      const Cn = new En();
      class xn {
        constructor(e) {
          this.reflectionCapabilities = e;
        }
        updateCapabilities(e) {
          this.reflectionCapabilities = e;
        }
        factory(e) {
          return this.reflectionCapabilities.factory(e);
        }
        parameters(e) {
          return this.reflectionCapabilities.parameters(e);
        }
        annotations(e) {
          return this.reflectionCapabilities.annotations(e);
        }
        propMetadata(e) {
          return this.reflectionCapabilities.propMetadata(e);
        }
        hasLifecycleHook(e, t) {
          return this.reflectionCapabilities.hasLifecycleHook(e, t);
        }
        getter(e) {
          return this.reflectionCapabilities.getter(e);
        }
        setter(e) {
          return this.reflectionCapabilities.setter(e);
        }
        method(e) {
          return this.reflectionCapabilities.method(e);
        }
        importUri(e) {
          return this.reflectionCapabilities.importUri(e);
        }
        resourceUri(e) {
          return this.reflectionCapabilities.resourceUri(e);
        }
        resolveIdentifier(e, t, n, r) {
          return this.reflectionCapabilities.resolveIdentifier(e, t, n, r);
        }
        resolveEnum(e, t) {
          return this.reflectionCapabilities.resolveEnum(e, t);
        }
      }
      const Tn = new xn(new et());
      class kn {
        constructor(e, t, n) {
          (this.key = e), (this.optional = t), (this.visibility = n);
        }
        static fromKey(e) {
          return new kn(e, !1, null);
        }
      }
      const In = [];
      class Nn {
        constructor(e, t, n) {
          (this.key = e),
            (this.resolvedFactories = t),
            (this.multiProvider = n),
            (this.resolvedFactory = this.resolvedFactories[0]);
        }
      }
      class Sn {
        constructor(e, t) {
          (this.factory = e), (this.dependencies = t);
        }
      }
      function An(e) {
        return new Nn(
          bn.get(e.provide),
          [
            (function(e) {
              let t, n;
              if (e.useClass) {
                const r = be(e.useClass);
                (t = Tn.factory(r)), (n = Mn(r));
              } else
                e.useExisting
                  ? ((t = e => e), (n = [kn.fromKey(bn.get(e.useExisting))]))
                  : e.useFactory
                  ? ((t = e.useFactory),
                    (n = (function(e, t) {
                      if (t) {
                        const n = t.map(e => [e]);
                        return t.map(t => Dn(e, t, n));
                      }
                      return Mn(e);
                    })(e.useFactory, e.deps)))
                  : ((t = () => e.useValue), (n = In));
              return new Sn(t, n);
            })(e)
          ],
          e.multi || !1
        );
      }
      function Mn(e) {
        const t = Tn.parameters(e);
        if (!t) return [];
        if (t.some(e => null == e)) throw vn(e, t);
        return t.map(n => Dn(e, n, t));
      }
      function Dn(e, t, n) {
        let r = null,
          s = !1;
        if (!Array.isArray(t))
          return Rn(t instanceof Ee ? t.token : t, s, null);
        let o = null;
        for (let i = 0; i < t.length; ++i) {
          const e = t[i];
          e instanceof Qe
            ? (r = e)
            : e instanceof Ee
            ? (r = e.token)
            : e instanceof Ce
            ? (s = !0)
            : e instanceof xe || e instanceof Te
            ? (o = e)
            : e instanceof ie && (r = e);
        }
        if (null != (r = be(r))) return Rn(r, s, o);
        throw vn(e, n);
      }
      function Rn(e, t, n) {
        return new kn(bn.get(e), t, n);
      }
      const On = new Object();
      class Pn {
        static resolve(e) {
          return (function(e) {
            const t = (function(e, t) {
              for (let n = 0; n < e.length; n++) {
                const r = e[n],
                  s = t.get(r.key.id);
                if (s) {
                  if (r.multiProvider !== s.multiProvider)
                    throw Error(
                      `Cannot mix multi providers and regular providers, got: ${s} ${r}`
                    );
                  if (r.multiProvider)
                    for (let e = 0; e < r.resolvedFactories.length; e++)
                      s.resolvedFactories.push(r.resolvedFactories[e]);
                  else t.set(r.key.id, r);
                } else {
                  let e;
                  (e = r.multiProvider
                    ? new Nn(
                        r.key,
                        r.resolvedFactories.slice(),
                        r.multiProvider
                      )
                    : r),
                    t.set(r.key.id, e);
                }
              }
              return t;
            })(
              (function e(t, n) {
                return (
                  t.forEach(t => {
                    if (t instanceof Qe) n.push({ provide: t, useClass: t });
                    else if (t && 'object' == typeof t && void 0 !== t.provide)
                      n.push(t);
                    else {
                      if (!(t instanceof Array))
                        throw (function(e) {
                          return Error(
                            `Invalid provider - only instances of Provider and Type are allowed, got: ${t}`
                          );
                        })();
                      e(t, n);
                    }
                  }),
                  n
                );
              })(e, []).map(An),
              new Map()
            );
            return Array.from(t.values());
          })(e);
        }
        static resolveAndCreate(e, t) {
          const n = Pn.resolve(e);
          return Pn.fromResolvedProviders(n, t);
        }
        static fromResolvedProviders(e, t) {
          return new Vn(e, t);
        }
      }
      class Vn {
        constructor(e, t) {
          (this._constructionCounter = 0),
            (this._providers = e),
            (this.parent = t || null);
          const n = e.length;
          (this.keyIds = new Array(n)), (this.objs = new Array(n));
          for (let r = 0; r < n; r++)
            (this.keyIds[r] = e[r].key.id), (this.objs[r] = On);
        }
        get(e, t = Ne) {
          return this._getByKey(bn.get(e), null, t);
        }
        resolveAndCreateChild(e) {
          const t = Pn.resolve(e);
          return this.createChildFromResolved(t);
        }
        createChildFromResolved(e) {
          const t = new Vn(e);
          return (t.parent = this), t;
        }
        resolveAndInstantiate(e) {
          return this.instantiateResolved(Pn.resolve([e])[0]);
        }
        instantiateResolved(e) {
          return this._instantiateProvider(e);
        }
        getProviderAtIndex(e) {
          if (e < 0 || e >= this._providers.length)
            throw (function(e) {
              return Error(`Index ${e} is out-of-bounds.`);
            })(e);
          return this._providers[e];
        }
        _new(e) {
          if (this._constructionCounter++ > this._getMaxNumberOfObjects())
            throw _n(this, e.key, function(e) {
              return `Cannot instantiate cyclic dependency!${yn(e)}`;
            });
          return this._instantiateProvider(e);
        }
        _getMaxNumberOfObjects() {
          return this.objs.length;
        }
        _instantiateProvider(e) {
          if (e.multiProvider) {
            const t = new Array(e.resolvedFactories.length);
            for (let n = 0; n < e.resolvedFactories.length; ++n)
              t[n] = this._instantiate(e, e.resolvedFactories[n]);
            return t;
          }
          return this._instantiate(e, e.resolvedFactories[0]);
        }
        _instantiate(e, t) {
          const n = t.factory;
          let r, s;
          try {
            r = t.dependencies.map(e => this._getByReflectiveDependency(e));
          } catch (i) {
            throw (i.addKey && i.addKey(this, e.key), i);
          }
          try {
            s = n(...r);
          } catch (i) {
            throw _n(
              this,
              e.key,
              function(e) {
                const t = we(e[0].token);
                return `${o.message}: Error during instantiation of ${t}!${yn(
                  e
                )}.`;
              },
              (o = i)
            );
          }
          var o;
          return s;
        }
        _getByReflectiveDependency(e) {
          return this._getByKey(e.key, e.visibility, e.optional ? null : Ne);
        }
        _getByKey(e, t, n) {
          return e === Vn.INJECTOR_KEY
            ? this
            : t instanceof xe
            ? this._getByKeySelf(e, n)
            : this._getByKeyDefault(e, n, t);
        }
        _getObjByKeyId(e) {
          for (let t = 0; t < this.keyIds.length; t++)
            if (this.keyIds[t] === e)
              return (
                this.objs[t] === On &&
                  (this.objs[t] = this._new(this._providers[t])),
                this.objs[t]
              );
          return On;
        }
        _throwOrNull(e, t) {
          if (t !== Ne) return t;
          throw (function(e, t) {
            return _n(e, t, function(e) {
              return `No provider for ${we(e[0].token)}!${yn(e)}`;
            });
          })(this, e);
        }
        _getByKeySelf(e, t) {
          const n = this._getObjByKeyId(e.id);
          return n !== On ? n : this._throwOrNull(e, t);
        }
        _getByKeyDefault(e, t, n) {
          let r;
          for (r = n instanceof Te ? this.parent : this; r instanceof Vn; ) {
            const t = r,
              n = t._getObjByKeyId(e.id);
            if (n !== On) return n;
            r = t.parent;
          }
          return null !== r ? r.get(e.token, t) : this._throwOrNull(e, t);
        }
        get displayName() {
          return `ReflectiveInjector(providers: [${(function(e, t) {
            const n = new Array(e._providers.length);
            for (let r = 0; r < e._providers.length; ++r)
              n[r] = t(e.getProviderAtIndex(r));
            return n;
          })(this, e => ' "' + e.key.displayName + '" ').join(', ')}])`;
        }
        toString() {
          return this.displayName;
        }
      }
      function jn(e) {
        return !!e && 'function' == typeof e.then;
      }
      Vn.INJECTOR_KEY = bn.get(Me);
      const Fn = new ie('Application Initializer');
      class Hn {
        constructor(e) {
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const e = [],
            t = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const t = this.appInits[n]();
              jn(t) && e.push(t);
            }
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch(e => {
              this.reject(e);
            }),
            0 === e.length && t(),
            (this.initialized = !0);
        }
      }
      const Ln = new ie('AppId');
      function Bn() {
        return `${$n()}${$n()}${$n()}`;
      }
      function $n() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const zn = new ie('Platform Initializer'),
        Un = new ie('Platform ID'),
        Zn = new ie('appBootstrapListener');
      class Kn {
        log(e) {
          console.log(e);
        }
        warn(e) {
          console.warn(e);
        }
      }
      function Gn() {
        throw new Error('Runtime compiler is not loaded');
      }
      class qn {
        compileModuleSync(e) {
          throw Gn();
        }
        compileModuleAsync(e) {
          throw Gn();
        }
        compileModuleAndAllComponentsSync(e) {
          throw Gn();
        }
        compileModuleAndAllComponentsAsync(e) {
          throw Gn();
        }
        clearCache() {}
        clearCacheFor(e) {}
        getModuleId(e) {}
      }
      class Qn {}
      let Wn, Yn;
      function Jn() {
        const e = fe.wtf;
        return !(!e || !(Wn = e.trace) || ((Yn = Wn.events), 0));
      }
      const Xn = Jn(),
        er = Xn
          ? function(e, t = null) {
              return Yn.createScope(e, t);
            }
          : (e, t) =>
              function(e, t) {
                return null;
              },
        tr = Xn
          ? function(e, t) {
              return Wn.leaveScope(e, t), t;
            }
          : (e, t) => t;
      class nr {
        constructor({ enableLongStackTrace: e = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Mt(!1)),
            (this.onMicrotaskEmpty = new Mt(!1)),
            (this.onStable = new Mt(!1)),
            (this.onError = new Mt(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (e, n, r, s, o, i) => {
                try {
                  return ir(t), e.invokeTask(r, s, o, i);
                } finally {
                  ar(t);
                }
              },
              onInvoke: (e, n, r, s, o, i, a) => {
                try {
                  return ir(t), e.invoke(r, s, o, i, a);
                } finally {
                  ar(t);
                }
              },
              onHasTask: (e, n, r, s) => {
                e.hasTask(r, s),
                  n === r &&
                    ('microTask' == s.change
                      ? ((t.hasPendingMicrotasks = s.microTask), or(t))
                      : 'macroTask' == s.change &&
                        (t.hasPendingMacrotasks = s.macroTask));
              },
              onHandleError: (e, n, r, s) => (
                e.handleError(r, s),
                t.runOutsideAngular(() => t.onError.emit(s)),
                !1
              )
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!nr.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (nr.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner,
            o = s.scheduleEventTask('NgZoneEvent: ' + r, e, sr, rr, rr);
          try {
            return s.runTask(o, t, n);
          } finally {
            s.cancelTask(o);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function rr() {}
      const sr = {};
      function or(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function ir(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ar(e) {
        e._nesting--, or(e);
      }
      class lr {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Mt()),
            (this.onMicrotaskEmpty = new Mt()),
            (this.onStable = new Mt()),
            (this.onError = new Mt());
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      class cr {
        constructor(e) {
          (this._ngZone = e),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            this._watchAngularEvents(),
            e.run(() => {
              this.taskTrackingZone = Zone.current.get('TaskTrackingZone');
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            }
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  nr.assertNotInAngularZone(),
                    ye(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                }
              });
            });
        }
        increasePendingRequestCount() {
          return (
            (this._pendingCount += 1), (this._didWork = !0), this._pendingCount
          );
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0))
            throw new Error('pending async requests below zero');
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable &&
            0 === this._pendingCount &&
            !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            ye(() => {
              for (; 0 !== this._callbacks.length; ) {
                let e = this._callbacks.pop();
                clearTimeout(e.timeoutId), e.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let e = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              t =>
                !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map(e => ({
                source: e.source,
                creationLocation: e.creationLocation,
                data: e.data
              }))
            : [];
        }
        addCallback(e, t, n) {
          let r = -1;
          t &&
            t > 0 &&
            (r = setTimeout(() => {
              (this._callbacks = this._callbacks.filter(
                e => e.timeoutId !== r
              )),
                e(this._didWork, this.getPendingTasks());
            }, t)),
            this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
        }
        whenStable(e, t, n) {
          if (n && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(e, t, n), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(e, t, n) {
          return [];
        }
      }
      class ur {
        constructor() {
          (this._applications = new Map()), fr.addToWindow(this);
        }
        registerApplication(e, t) {
          this._applications.set(e, t);
        }
        unregisterApplication(e) {
          this._applications.delete(e);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(e) {
          return this._applications.get(e) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(e, t = !0) {
          return fr.findTestabilityInTree(this, e, t);
        }
      }
      ur.ctorParameters = () => [];
      class dr {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let hr,
        fr = new dr(),
        pr = function(e, t, n) {
          return e
            .get(Qn)
            .createCompiler([t])
            .compileModuleAsync(n);
        };
      const gr = new ie('AllowMultipleToken');
      class mr {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function yr(e, t, n = []) {
        const r = `Platform: ${t}`,
          s = new ie(r);
        return (t = []) => {
          let o = _r();
          if (!o || o.injector.get(gr, !1))
            if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
            else {
              const e = n.concat(t).concat({ provide: s, useValue: !0 });
              !(function(e) {
                if (hr && !hr.destroyed && !hr.injector.get(gr, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                hr = e.get(wr);
                const t = e.get(zn, null);
                t && t.forEach(e => e());
              })(Me.create({ providers: e, name: r }));
            }
          return (function(e) {
            const t = _r();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(s);
        };
      }
      function _r() {
        return hr && !hr.destroyed ? hr : null;
      }
      class wr {
        constructor(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(e, t) {
          const n =
              'noop' === (s = t ? t.ngZone : void 0)
                ? new lr()
                : ('zone.js' === s ? void 0 : s) ||
                  new nr({ enableLongStackTrace: Pt() }),
            r = [{ provide: nr, useValue: n }];
          var s;
          return n.run(() => {
            const t = Me.create({
                providers: r,
                parent: this.injector,
                name: e.moduleType.name
              }),
              s = e.create(t),
              o = s.injector.get(mn, null);
            if (!o)
              throw new Error(
                'No ErrorHandler. Is platform module (BrowserModule) included?'
              );
            return (
              s.onDestroy(() => Er(this._modules, s)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: e => {
                    o.handleError(e);
                  }
                })
              ),
              (function(e, t, n) {
                try {
                  const s = n();
                  return jn(s)
                    ? s.catch(n => {
                        throw (t.runOutsideAngular(() => e.handleError(n)), n);
                      })
                    : s;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(o, n, () => {
                const e = s.injector.get(Hn);
                return (
                  e.runInitializers(),
                  e.donePromise.then(() => (this._moduleDoBootstrap(s), s))
                );
              })
            );
          });
        }
        bootstrapModule(e, t = []) {
          const n = vr({}, t);
          return pr(this.injector, n, e).then(e =>
            this.bootstrapModuleFactory(e, n)
          );
        }
        _moduleDoBootstrap(e) {
          const t = e.injector.get(br);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach(e => t.bootstrap(e));
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                `The module ${we(
                  e.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                  'Please define one of these.'
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed)
            throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach(e => e.destroy()),
            this._destroyListeners.forEach(e => e()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function vr(e, t) {
        return Array.isArray(t) ? t.reduce(vr, e) : Object.assign({}, e, t);
      }
      class br {
        constructor(e, t, n, r, s, o) {
          (this._zone = e),
            (this._console = t),
            (this._injector = n),
            (this._exceptionHandler = r),
            (this._componentFactoryResolver = s),
            (this._initStatus = o),
            (this._bootstrapListeners = []),
            (this._views = []),
            (this._runningTick = !1),
            (this._enforceNoNewChanges = !1),
            (this._stable = !0),
            (this.componentTypes = []),
            (this.components = []),
            (this._enforceNoNewChanges = Pt()),
            this._zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this._zone.run(() => {
                  this.tick();
                });
              }
            });
          const i = new E(e => {
              (this._stable =
                this._zone.isStable &&
                !this._zone.hasPendingMacrotasks &&
                !this._zone.hasPendingMicrotasks),
                this._zone.runOutsideAngular(() => {
                  e.next(this._stable), e.complete();
                });
            }),
            a = new E(e => {
              let t;
              this._zone.runOutsideAngular(() => {
                t = this._zone.onStable.subscribe(() => {
                  nr.assertNotInAngularZone(),
                    ye(() => {
                      this._stable ||
                        this._zone.hasPendingMacrotasks ||
                        this._zone.hasPendingMicrotasks ||
                        ((this._stable = !0), e.next(!0));
                    });
                });
              });
              const n = this._zone.onUnstable.subscribe(() => {
                nr.assertInAngularZone(),
                  this._stable &&
                    ((this._stable = !1),
                    this._zone.runOutsideAngular(() => {
                      e.next(!1);
                    }));
              });
              return () => {
                t.unsubscribe(), n.unsubscribe();
              };
            });
          this.isStable = q(
            i,
            a.pipe(e =>
              Q()(
                (function(e, t) {
                  return function(t) {
                    let n;
                    n =
                      'function' == typeof e
                        ? e
                        : function() {
                            return e;
                          };
                    const r = Object.create(t, X);
                    return (r.source = t), (r.subjectFactory = n), r;
                  };
                })(te)(e)
              )
            )
          );
        }
        bootstrap(e, t) {
          if (!this._initStatus.done)
            throw new Error(
              'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
            );
          let n;
          (n =
            e instanceof ut
              ? e
              : this._componentFactoryResolver.resolveComponentFactory(e)),
            this.componentTypes.push(n.componentType);
          const r = n instanceof mt ? null : this._injector.get(yt),
            s = n.create(Me.NULL, [], t || n.selector, r);
          s.onDestroy(() => {
            this._unloadComponent(s);
          });
          const o = s.injector.get(cr, null);
          return (
            o &&
              s.injector
                .get(ur)
                .registerApplication(s.location.nativeElement, o),
            this._loadComponent(s),
            Pt() &&
              this._console.log(
                'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
              ),
            s
          );
        }
        tick() {
          if (this._runningTick)
            throw new Error('ApplicationRef.tick is called recursively');
          const e = br._tickScope();
          try {
            (this._runningTick = !0),
              this._views.forEach(e => e.detectChanges()),
              this._enforceNoNewChanges &&
                this._views.forEach(e => e.checkNoChanges());
          } catch (t) {
            this._zone.runOutsideAngular(() =>
              this._exceptionHandler.handleError(t)
            );
          } finally {
            (this._runningTick = !1), tr(e);
          }
        }
        attachView(e) {
          const t = e;
          this._views.push(t), t.attachToAppRef(this);
        }
        detachView(e) {
          const t = e;
          Er(this._views, t), t.detachFromAppRef();
        }
        _loadComponent(e) {
          this.attachView(e.hostView),
            this.tick(),
            this.components.push(e),
            this._injector
              .get(Zn, [])
              .concat(this._bootstrapListeners)
              .forEach(t => t(e));
        }
        _unloadComponent(e) {
          this.detachView(e.hostView), Er(this.components, e);
        }
        ngOnDestroy() {
          this._views.slice().forEach(e => e.destroy());
        }
        get viewCount() {
          return this._views.length;
        }
      }
      function Er(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      br._tickScope = er('ApplicationRef#tick()');
      class Cr {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new Mt()),
            (this.length = 0);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        [me()]() {
          return this._results[me()]();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t) {
            return t.reduce((t, n) => {
              const r = Array.isArray(n) ? e(n) : n;
              return t.concat(r);
            }, []);
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class xr {}
      xr.__NG_ELEMENT_ID__ = () => Ct(xr, Tt);
      class Tr {}
      Tr.__NG_ELEMENT_ID__ = () => Et();
      class kr {
        constructor(e, t) {
          (this.name = e), (this.callback = t);
        }
      }
      class Ir {
        constructor(e, t, n) {
          (this.nativeNode = e),
            (this._debugContext = n),
            (this.listeners = []),
            (this.parent = null),
            t && t instanceof Nr && t.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class Nr extends Ir {
        constructor(e, t, n) {
          super(e, t, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = e);
        }
        addChild(e) {
          e && (this.childNodes.push(e), (e.parent = this));
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...t),
            t.forEach(e => {
              e.parent && e.parent.removeChild(e), (e.parent = this);
            }));
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 === n
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t),
              (t.parent = this),
              this.childNodes.splice(n, 0, t));
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t.childNodes.forEach(t => {
                t instanceof Nr && (n(t) && r.push(t), e(t, n, r));
              });
            })(this, e, t),
            t
          );
        }
        queryAllNodes(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t instanceof Nr &&
                t.childNodes.forEach(t => {
                  n(t) && r.push(t), t instanceof Nr && e(t, n, r);
                });
            })(this, e, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter(e => e instanceof Nr);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach(n => {
            n.name == e && n.callback(t);
          });
        }
      }
      const Sr = new Map();
      function Ar(e) {
        return Sr.get(e) || null;
      }
      function Mr(e) {
        Sr.set(e.nativeNode, e);
      }
      class Dr {
        constructor() {}
        supports(e) {
          return at(e);
        }
        create(e) {
          return new Or(e);
        }
      }
      const Rr = (e, t) => t;
      class Or {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || Rr);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; t || n; ) {
            const o = !n || (t && t.currentIndex < Fr(n, r, s)) ? t : n,
              i = Fr(o, r, s),
              a = o.currentIndex;
            if (o === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == o.previousIndex)) r++;
            else {
              s || (s = []);
              const e = i - r,
                t = a - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    o = r + n;
                  t <= o && o < e && (s[n] = r + 1);
                }
                s[o.previousIndex] = t - e;
              }
            }
            i !== a && e(o, i, a);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !at(e)))
            throw new Error(
              `Error trying to diff '${we(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            s = this._itHead,
            o = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (r = this._trackByFn(t, (n = e[t]))),
                null !== s && _e(s.trackById, r)
                  ? (o && (s = this._verifyReinsertion(s, n, r, t)),
                    _e(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, t)), (o = !0)),
                (s = s._next);
          } else
            (t = 0),
              (function(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[me()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, e => {
                (r = this._trackByFn(t, e)),
                  null !== s && _e(s.trackById, r)
                    ? (o && (s = this._verifyReinsertion(s, e, r, t)),
                      _e(s.item, e) || this._addIdentityChange(s, e))
                    : ((s = this._mismatch(s, e, r, t)), (o = !0)),
                  (s = s._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(s), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e, t;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
              e.previousIndex = e.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                e = this._movesHead;
              null !== e;
              e = t
            )
              (e.previousIndex = e.currentIndex), (t = e._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          return (
            null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (_e(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, s, r))
              : null !==
                (e =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (_e(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, s, r))
              : (e = this._addAfter(new Pr(t, n), s, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (e = this._reinsertAfter(s, e._prev, r))
              : e.currentIndex != r &&
                ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            s = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new jr()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return e.previousIndex === t
            ? e
            : ((this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
              e);
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new jr()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class Pr {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class Vr {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === t || t <= n.currentIndex) && _e(n.trackById, e))
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class jr {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new Vr()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Fr(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class Hr {
        constructor() {}
        supports(e) {
          return e instanceof Map || lt(e);
        }
        create() {
          return new Lr();
        }
      }
      class Lr {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || lt(e)))
              throw new Error(
                `Error trying to diff '${we(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Br(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          _e(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach(n => t(e[n], n));
        }
      }
      class Br {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      class $r {
        constructor(e) {
          this.factories = e;
        }
        static create(e, t) {
          if (null != t) {
            const n = t.factories.slice();
            e = e.concat(n);
          }
          return new $r(e);
        }
        static extend(e) {
          return {
            provide: $r,
            useFactory: t => {
              if (!t)
                throw new Error(
                  'Cannot extend IterableDiffers without a parent injector'
                );
              return $r.create(e, t);
            },
            deps: [[$r, new Te(), new Ce()]]
          };
        }
        find(e) {
          const t = this.factories.find(t => t.supports(e));
          if (null != t) return t;
          throw new Error(
            `Cannot find a differ supporting object '${e}' of type '${((n = e),
            n.name || typeof n)}'`
          );
          var n;
        }
      }
      $r.ngInjectableDef = se({
        providedIn: 'root',
        factory: () => new $r([new Dr()])
      });
      class zr {
        constructor(e) {
          this.factories = e;
        }
        static create(e, t) {
          if (t) {
            const n = t.factories.slice();
            e = e.concat(n);
          }
          return new zr(e);
        }
        static extend(e) {
          return {
            provide: zr,
            useFactory: t => {
              if (!t)
                throw new Error(
                  'Cannot extend KeyValueDiffers without a parent injector'
                );
              return zr.create(e, t);
            },
            deps: [[zr, new Te(), new Ce()]]
          };
        }
        find(e) {
          const t = this.factories.find(t => t.supports(e));
          if (t) return t;
          throw new Error(`Cannot find a differ supporting object '${e}'`);
        }
      }
      const Ur = [new Hr()],
        Zr = new $r([new Dr()]),
        Kr = new zr(Ur),
        Gr = yr(null, 'core', [
          { provide: Un, useValue: 'unknown' },
          { provide: wr, deps: [Me] },
          { provide: ur, deps: [] },
          { provide: Kn, deps: [] }
        ]),
        qr = new ie('LocaleId');
      function Qr() {
        return Zr;
      }
      function Wr() {
        return Kr;
      }
      function Yr(e) {
        return e || 'en-US';
      }
      class Jr {
        constructor(e) {}
      }
      function Xr(e, t, n) {
        const r = e.state,
          s = 1792 & r;
        return s === t
          ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
          : s === n;
      }
      function es(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), !0)
        );
      }
      function ts(e, t) {
        return e.nodes[t];
      }
      function ns(e, t) {
        return e.nodes[t];
      }
      function rs(e, t) {
        return e.nodes[t];
      }
      function ss(e, t) {
        return e.nodes[t];
      }
      function os(e, t) {
        return e.nodes[t];
      }
      const is = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0
      };
      function as(e, t, n, r) {
        let s = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        return (
          r &&
            (s +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(e, t) {
            const n = new Error(e);
            return ls(n, t), n;
          })(s, e)
        );
      }
      function ls(e, t) {
        (e[un] = t), (e[hn] = t.logError.bind(t));
      }
      function cs(e) {
        return new Error(
          `ViewDestroyedError: Attempt to use a destroyed view: ${e}`
        );
      }
      const us = () => {},
        ds = new Map();
      function hs(e) {
        let t = ds.get(e);
        return t || ((t = we(e) + '_' + ds.size), ds.set(e, t)), t;
      }
      const fs = '$$undefined',
        ps = '$$empty';
      function gs(e) {
        return {
          id: fs,
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data
        };
      }
      let ms = 0;
      function ys(e, t, n, r) {
        return !(!(2 & e.state) && _e(e.oldValues[t.bindingIndex + n], r));
      }
      function _s(e, t, n, r) {
        return !!ys(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function ws(e, t, n, r) {
        const s = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !st(s, r)) {
          const o = t.bindings[n].name;
          throw as(
            is.createDebugContext(e, t.nodeIndex),
            `${o}: ${s}`,
            `${o}: ${r}`,
            0 != (1 & e.state)
          );
        }
      }
      function vs(e) {
        let t = e;
        for (; t; )
          2 & t.def.flags && (t.state |= 8),
            (t = t.viewContainerParent || t.parent);
      }
      function bs(e, t) {
        let n = e;
        for (; n && n !== t; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function Es(e, t, n, r) {
        try {
          return (
            vs(33554432 & e.def.nodes[t].flags ? ns(e, t).componentView : e),
            is.handleEvent(e, t, n, r)
          );
        } catch (s) {
          e.root.errorHandler.handleError(s);
        }
      }
      function Cs(e) {
        return e.parent ? ns(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function xs(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function Ts(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return ns(e, t.nodeIndex).renderElement;
          case 2:
            return ts(e, t.nodeIndex).renderText;
        }
      }
      function ks(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function Is(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function Ns(e) {
        const t = {};
        let n = 0;
        const r = {};
        return (
          e &&
            e.forEach(([e, s]) => {
              'number' == typeof e
                ? ((t[e] = s),
                  (n |= (function(e) {
                    return 1 << e % 32;
                  })(e)))
                : (r[e] = s);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function Ss(e, t) {
        return e.map(e => {
          let n, r;
          return (
            Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              t &&
              Object.defineProperty(n, ke, { value: t, configurable: !0 }),
            { flags: r, token: n, tokenKey: hs(n) }
          );
        });
      }
      function As(e, t, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === rt.Native)
            ? ns(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const Ms = new WeakMap();
      function Ds(e) {
        let t = Ms.get(e);
        return t || (((t = e(() => us)).factory = e), Ms.set(e, t)), t;
      }
      function Rs(e, t, n, r, s) {
        3 === t && (n = e.renderer.parentNode(Ts(e, e.def.lastRenderRootNode))),
          Os(e, t, 0, e.def.nodes.length - 1, n, r, s);
      }
      function Os(e, t, n, r, s, o, i) {
        for (let a = n; a <= r; a++) {
          const n = e.def.nodes[a];
          11 & n.flags && Vs(e, n, t, s, o, i), (a += n.childCount);
        }
      }
      function Ps(e, t, n, r, s, o) {
        let i = e;
        for (; i && !ks(i); ) i = i.parent;
        const a = i.parent,
          l = xs(i),
          c = l.nodeIndex + l.childCount;
        for (let u = l.nodeIndex + 1; u <= c; u++) {
          const e = a.def.nodes[u];
          e.ngContentIndex === t && Vs(a, e, n, r, s, o), (u += e.childCount);
        }
        if (!a.parent) {
          const i = e.root.projectableNodes[t];
          if (i) for (let t = 0; t < i.length; t++) js(e, i[t], n, r, s, o);
        }
      }
      function Vs(e, t, n, r, s, o) {
        if (8 & t.flags) Ps(e, t.ngContent.index, n, r, s, o);
        else {
          const i = Ts(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && js(e, i, n, r, s, o),
                32 & t.bindingFlags &&
                  js(ns(e, t.nodeIndex).componentView, i, n, r, s, o))
              : js(e, i, n, r, s, o),
            16777216 & t.flags)
          ) {
            const i = ns(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < i.length; e++) Rs(i[e], n, r, s, o);
          }
          1 & t.flags &&
            !t.element.name &&
            Os(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, s, o);
        }
      }
      function js(e, t, n, r, s, o) {
        const i = e.renderer;
        switch (n) {
          case 1:
            i.appendChild(r, t);
            break;
          case 2:
            i.insertBefore(r, t, s);
            break;
          case 3:
            i.removeChild(r, t);
            break;
          case 0:
            o.push(t);
        }
      }
      const Fs = /^:([^:]+):(.+)$/;
      function Hs(e) {
        if (':' === e[0]) {
          const t = e.match(Fs);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function Ls(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      function Bs(e, t, n, r, s, o, i = [], a, l, c, u, d) {
        c || (c = us);
        const { matchedQueries: h, references: f, matchedQueryIds: p } = Ns(n);
        let g = null,
          m = null;
        o && ([g, m] = Hs(o)), (a = a || []);
        const y = new Array(a.length);
        for (let v = 0; v < a.length; v++) {
          const [e, t, n] = a[v],
            [r, s] = Hs(t);
          let o = void 0,
            i = void 0;
          switch (15 & e) {
            case 4:
              i = n;
              break;
            case 1:
            case 8:
              o = n;
          }
          y[v] = {
            flags: e,
            ns: r,
            name: s,
            nonMinifiedName: s,
            securityContext: o,
            suffix: i
          };
        }
        l = l || [];
        const _ = new Array(l.length);
        for (let v = 0; v < l.length; v++) {
          const [e, t] = l[v];
          _[v] = { type: 0, target: e, eventName: t, propName: null };
        }
        const w = (i = i || []).map(([e, t]) => {
          const [n, r] = Hs(e);
          return [n, r, t];
        });
        return (
          (d = (function(e) {
            if (e && e.id === fs) {
              const t =
                (null != e.encapsulation && e.encapsulation !== rt.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? `c${ms++}` : ps;
            }
            return e && e.id === ps && (e = null), e || null;
          })(d)),
          u && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: h,
            matchedQueryIds: p,
            references: f,
            ngContentIndex: r,
            childCount: s,
            bindings: y,
            bindingFlags: Ls(y),
            outputs: _,
            element: {
              ns: g,
              name: m,
              attrs: w,
              template: null,
              componentProvider: null,
              componentView: u || null,
              componentRendererType: d,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || us
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function $s(e, t, n) {
        const r = n.element,
          s = e.root.selectorOrNode,
          o = e.renderer;
        let i;
        if (e.parent || !s) {
          i = r.name ? o.createElement(r.name, r.ns) : o.createComment('');
          const s = As(e, t, n);
          s && o.appendChild(s, i);
        } else
          i = o.selectRootElement(
            s,
            !!r.componentRendererType &&
              r.componentRendererType.encapsulation === rt.ShadowDom
          );
        if (r.attrs)
          for (let a = 0; a < r.attrs.length; a++) {
            const [e, t, n] = r.attrs[a];
            o.setAttribute(i, t, n, e);
          }
        return i;
      }
      function zs(e, t, n, r) {
        for (let i = 0; i < n.outputs.length; i++) {
          const a = n.outputs[i],
            l = Us(
              e,
              n.nodeIndex,
              ((o = a.eventName), (s = a.target) ? `${s}:${o}` : o)
            );
          let c = a.target,
            u = e;
          'component' === a.target && ((c = null), (u = t));
          const d = u.renderer.listen(c || r, a.eventName, l);
          e.disposables[n.outputIndex + i] = d;
        }
        var s, o;
      }
      function Us(e, t, n) {
        return r => Es(e, t, n, r);
      }
      function Zs(e, t, n, r) {
        if (!_s(e, t, n, r)) return !1;
        const s = t.bindings[n],
          o = ns(e, t.nodeIndex),
          i = o.renderElement,
          a = s.name;
        switch (15 & s.flags) {
          case 1:
            !(function(e, t, n, r, s, o) {
              const i = t.securityContext;
              let a = i ? e.root.sanitizer.sanitize(i, o) : o;
              a = null != a ? a.toString() : null;
              const l = e.renderer;
              null != o
                ? l.setAttribute(n, s, a, r)
                : l.removeAttribute(n, s, r);
            })(e, s, i, s.ns, a, r);
            break;
          case 2:
            !(function(e, t, n, r) {
              const s = e.renderer;
              r ? s.addClass(t, n) : s.removeClass(t, n);
            })(e, i, a, r);
            break;
          case 4:
            !(function(e, t, n, r, s) {
              let o = e.root.sanitizer.sanitize(nn.STYLE, s);
              if (null != o) {
                o = o.toString();
                const e = t.suffix;
                null != e && (o += e);
              } else o = null;
              const i = e.renderer;
              null != o ? i.setStyle(n, r, o) : i.removeStyle(n, r);
            })(e, s, i, a, r);
            break;
          case 8:
            !(function(e, t, n, r, s) {
              const o = t.securityContext;
              let i = o ? e.root.sanitizer.sanitize(o, s) : s;
              e.renderer.setProperty(n, r, i);
            })(
              33554432 & t.flags && 32 & s.flags ? o.componentView : e,
              s,
              i,
              a,
              r
            );
        }
        return !0;
      }
      const Ks = new Object(),
        Gs = hs(Me),
        qs = hs(Se),
        Qs = hs(yt);
      function Ws(e, t, n, r) {
        return (
          (n = be(n)),
          { index: -1, deps: Ss(r, we(t)), flags: e, token: t, value: n }
        );
      }
      function Ys(e, t, n = Me.THROW_IF_NOT_FOUND) {
        const r = Ge(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags))
            return e._parent.get(t.token, n);
          const i = t.tokenKey;
          switch (i) {
            case Gs:
            case qs:
            case Qs:
              return e;
          }
          const a = e._def.providersByKey[i];
          let l;
          if (a) {
            let t = e._providers[a.index];
            return (
              void 0 === t && (t = e._providers[a.index] = Js(e, a)),
              t === Ks ? void 0 : t
            );
          }
          if (
            (l = oe(t.token)) &&
            ((s = e),
            null != (o = l).providedIn &&
              ((function(e, t) {
                return e._def.modules.indexOf(o.providedIn) > -1;
              })(s) ||
                ('root' === o.providedIn && s._def.isRoot)))
          ) {
            const n = e._providers.length;
            return (
              (e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: l.factory,
                deps: [],
                index: n,
                token: t.token
              }),
              (e._providers[n] = Ks),
              (e._providers[n] = Js(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Ge(r);
        }
        var s, o;
      }
      function Js(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Ys(e, n[0]));
                case 2:
                  return new t(Ys(e, n[0]), Ys(e, n[1]));
                case 3:
                  return new t(Ys(e, n[0]), Ys(e, n[1]), Ys(e, n[2]));
                default:
                  const s = new Array(r);
                  for (let t = 0; t < r; t++) s[t] = Ys(e, n[t]);
                  return new t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(Ys(e, n[0]));
                case 2:
                  return t(Ys(e, n[0]), Ys(e, n[1]));
                case 3:
                  return t(Ys(e, n[0]), Ys(e, n[1]), Ys(e, n[2]));
                default:
                  const s = Array(r);
                  for (let t = 0; t < r; t++) s[t] = Ys(e, n[t]);
                  return t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Ys(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === Ks ||
            null == n ||
            'object' != typeof n ||
            131072 & t.flags ||
            'function' != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? Ks : n
        );
      }
      function Xs(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
          return null;
        const r = n[t];
        return (
          (r.viewContainerParent = null),
          ro(n, t),
          is.dirtyParentQueries(r),
          to(r),
          r
        );
      }
      function eo(e, t, n) {
        const r = t ? Ts(t, t.def.lastRenderRootNode) : e.renderElement,
          s = n.renderer.parentNode(r),
          o = n.renderer.nextSibling(r);
        Rs(n, 2, s, o, void 0);
      }
      function to(e) {
        Rs(e, 3, null, null, void 0);
      }
      function no(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ro(e, t) {
        t >= e.length - 1 ? e.pop() : e.splice(t, 1);
      }
      const so = new Object();
      function oo(e, t, n, r, s, o) {
        return new io(e, t, n, r, s, o);
      }
      class io extends ut {
        constructor(e, t, n, r, s, o) {
          super(),
            (this.selector = e),
            (this.componentType = t),
            (this._inputs = r),
            (this._outputs = s),
            (this.ngContentSelectors = o),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const e = [],
            t = this._inputs;
          for (let n in t) e.push({ propName: n, templateName: t[n] });
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs)
            e.push({ propName: t, templateName: this._outputs[t] });
          return e;
        }
        create(e, t, n, r) {
          if (!r) throw new Error('ngModule should be provided');
          const s = Ds(this.viewDefFactory),
            o = s.nodes[0].element.componentProvider.nodeIndex,
            i = is.createRootView(e, t || [], n, s, r, so),
            a = rs(i, o).instance;
          return (
            n &&
              i.renderer.setAttribute(
                ns(i, 0).renderElement,
                'ng-version',
                cn.full
              ),
            new ao(i, new ho(i), a)
          );
        }
      }
      class ao extends ct {
        constructor(e, t, n) {
          super(),
            (this._view = e),
            (this._viewRef = t),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = n);
        }
        get location() {
          return new Tt(ns(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new mo(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      function lo(e, t, n) {
        return new co(e, t, n);
      }
      class co {
        constructor(e, t, n) {
          (this._view = e),
            (this._elDef = t),
            (this._data = n),
            (this._embeddedViews = []);
        }
        get element() {
          return new Tt(this._data.renderElement);
        }
        get injector() {
          return new mo(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view,
            t = this._elDef.parent;
          for (; !t && e; ) (t = xs(e)), (e = e.parent);
          return e ? new mo(e, t) : new mo(this._view, null);
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = Xs(this._data, e);
            is.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new ho(t);
            return e.attachToViewContainerRef(this), e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }
        createComponent(e, t, n, r, s) {
          const o = n || this.parentInjector;
          s || e instanceof mt || (s = o.get(yt));
          const i = e.create(o, r, void 0, s);
          return this.insert(i.hostView, t), i;
        }
        insert(e, t) {
          if (e.destroyed)
            throw new Error(
              'Cannot insert a destroyed View in a ViewContainer!'
            );
          const n = e;
          return (
            (function(e, t, n, r) {
              let s = t.viewContainer._embeddedViews;
              null == n && (n = s.length),
                (r.viewContainerParent = e),
                no(s, n, r),
                (function(e, t) {
                  const n = Cs(t);
                  if (!n || n === e || 16 & t.state) return;
                  t.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function(e, n) {
                      if (4 & n.flags) return;
                      (t.parent.def.nodeFlags |= 4), (n.flags |= 4);
                      let r = n.parent;
                      for (; r; ) (r.childFlags |= 4), (r = r.parent);
                    })(0, t.parentNodeDef);
                })(t, r),
                is.dirtyParentQueries(r),
                eo(t, n > 0 ? s[n - 1] : null, r);
            })(this._view, this._data, t, n._view),
            n.attachToViewContainerRef(this),
            e
          );
        }
        move(e, t) {
          if (e.destroyed)
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const n = this._embeddedViews.indexOf(e._view);
          return (
            (function(e, t, r) {
              const s = e.viewContainer._embeddedViews,
                o = s[n];
              ro(s, n),
                null == r && (r = s.length),
                no(s, r, o),
                is.dirtyParentQueries(o),
                to(o),
                eo(e, r > 0 ? s[r - 1] : null, o);
            })(this._data, 0, t),
            e
          );
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = Xs(this._data, e);
          t && is.destroyView(t);
        }
        detach(e) {
          const t = Xs(this._data, e);
          return t ? new ho(t) : null;
        }
      }
      function uo(e) {
        return new ho(e);
      }
      class ho {
        constructor(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        get rootNodes() {
          return (function(e) {
            const t = [];
            return Rs(e, 0, void 0, void 0, t), t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          vs(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            is.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }
        checkNoChanges() {
          is.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(e);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            is.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null),
            to(this._view),
            is.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._viewContainerRef = e;
        }
      }
      function fo(e, t) {
        return new po(e, t);
      }
      class po extends Dt {
        constructor(e, t) {
          super(), (this._parentView = e), (this._def = t);
        }
        createEmbeddedView(e) {
          return new ho(
            is.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }
        get elementRef() {
          return new Tt(
            ns(this._parentView, this._def.nodeIndex).renderElement
          );
        }
      }
      function go(e, t) {
        return new mo(e, t);
      }
      class mo {
        constructor(e, t) {
          (this.view = e), (this.elDef = t);
        }
        get(e, t = Me.THROW_IF_NOT_FOUND) {
          return is.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: e, tokenKey: hs(e) },
            t
          );
        }
      }
      function yo(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = ns(e, n.nodeIndex);
          return n.element.template ? t.template : t.renderElement;
        }
        if (2 & n.flags) return ts(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return rs(e, n.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${t}`);
      }
      function _o(e) {
        return new wo(e.renderer);
      }
      class wo {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = Hs(t),
            s = this.delegate.createElement(r, n);
          return e && this.delegate.appendChild(e, s), s;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment('');
          return e && this.delegate.appendChild(e, t), t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e),
            r = this.delegate.nextSibling(e);
          for (let s = 0; s < t.length; s++)
            this.delegate.insertBefore(n, t[s], r);
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, s] = Hs(t);
          null != n
            ? this.delegate.setAttribute(e, s, n, r)
            : this.delegate.removeAttribute(e, s, r);
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }
        setElementStyle(e, t, n) {
          null != n
            ? this.delegate.setStyle(e, t, n)
            : this.delegate.removeStyle(e, t);
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function vo(e, t, n, r) {
        return new bo(e, t, n, r);
      }
      class bo {
        constructor(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(e) {
              const t = e._def,
                n = (e._providers = new Array(t.providers.length));
              for (let r = 0; r < t.providers.length; r++) {
                const s = t.providers[r];
                4096 & s.flags || (void 0 === n[r] && (n[r] = Js(e, s)));
              }
            })(this);
        }
        get(e, t = Me.THROW_IF_NOT_FOUND, n = 0) {
          let r = 0;
          return (
            4 & n ? (r |= 1) : 2 & n && (r |= 4),
            Ys(this, { token: e, tokenKey: hs(e), flags: r }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(pt);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${we(
                this.instance.constructor
              )} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function(e, t) {
              const n = e._def,
                r = new Set();
              for (let s = 0; s < n.providers.length; s++)
                if (131072 & n.providers[s].flags) {
                  const t = e._providers[s];
                  if (t && t !== Ks) {
                    const e = t.ngOnDestroy;
                    'function' != typeof e ||
                      r.has(t) ||
                      (e.apply(t), r.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach(e => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const Eo = hs(kt),
        Co = hs(St),
        xo = hs(Tt),
        To = hs(xr),
        ko = hs(Dt),
        Io = hs(Tr),
        No = hs(Me),
        So = hs(Se);
      function Ao(e, t) {
        return Oo(e, t);
      }
      function Mo(e, t) {
        let n = e;
        for (; n.parent && !ks(n); ) n = n.parent;
        return Po(n.parent, xs(n), !0, t.provider.value, t.provider.deps);
      }
      function Do(e, t) {
        const n = Po(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
        if (t.outputs.length)
          for (let s = 0; s < t.outputs.length; s++) {
            const o = t.outputs[s],
              i = n[o.propName];
            if (!(r = i) || 'function' != typeof r.subscribe)
              throw new Error(
                `@Output ${o.propName} not initialized in '${
                  n.constructor.name
                }'.`
              );
            {
              const n = i.subscribe(Ro(e, t.parent.nodeIndex, o.eventName));
              e.disposables[t.outputIndex + s] = n.unsubscribe.bind(n);
            }
          }
        var r;
        return n;
      }
      function Ro(e, t, n) {
        return r => Es(e, t, n, r);
      }
      function Oo(e, t) {
        const n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return Po(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function(e, t, n, r, s) {
              const o = s.length;
              switch (o) {
                case 0:
                  return r();
                case 1:
                  return r(jo(e, t, n, s[0]));
                case 2:
                  return r(jo(e, t, n, s[0]), jo(e, t, n, s[1]));
                case 3:
                  return r(
                    jo(e, t, n, s[0]),
                    jo(e, t, n, s[1]),
                    jo(e, t, n, s[2])
                  );
                default:
                  const i = Array(o);
                  for (let r = 0; r < o; r++) i[r] = jo(e, t, n, s[r]);
                  return r(...i);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return jo(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function Po(e, t, n, r, s) {
        const o = s.length;
        switch (o) {
          case 0:
            return new r();
          case 1:
            return new r(jo(e, t, n, s[0]));
          case 2:
            return new r(jo(e, t, n, s[0]), jo(e, t, n, s[1]));
          case 3:
            return new r(
              jo(e, t, n, s[0]),
              jo(e, t, n, s[1]),
              jo(e, t, n, s[2])
            );
          default:
            const i = new Array(o);
            for (let r = 0; r < o; r++) i[r] = jo(e, t, n, s[r]);
            return new r(...i);
        }
      }
      const Vo = {};
      function jo(e, t, n, r, s = Me.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const o = e;
        2 & r.flags && (s = null);
        const i = r.tokenKey;
        i === Io && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        let a = e;
        for (; a; ) {
          if (t)
            switch (i) {
              case Eo:
                return _o(Fo(a, t, n));
              case Co:
                return Fo(a, t, n).renderer;
              case xo:
                return new Tt(ns(a, t.nodeIndex).renderElement);
              case To:
                return ns(a, t.nodeIndex).viewContainer;
              case ko:
                if (t.element.template) return ns(a, t.nodeIndex).template;
                break;
              case Io:
                return uo(Fo(a, t, n));
              case No:
              case So:
                return go(a, t);
              default:
                const e = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[i];
                if (e) {
                  let t = rs(a, e.nodeIndex);
                  return (
                    t ||
                      ((t = { instance: Oo(a, e) }),
                      (a.nodes[e.nodeIndex] = t)),
                    t.instance
                  );
                }
            }
          (n = ks(a)), (t = xs(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        const l = o.root.injector.get(r.token, Vo);
        return l !== Vo || s === Vo
          ? l
          : o.root.ngModule.injector.get(r.token, s);
      }
      function Fo(e, t, n) {
        let r;
        if (n) r = ns(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !ks(r); ) r = r.parent;
        return r;
      }
      function Ho(e, t, n, r, s, o) {
        if (32768 & n.flags) {
          const t = ns(e, n.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = s), 524288 & n.flags)) {
          o = o || {};
          const t = ot.unwrap(e.oldValues[n.bindingIndex + r]);
          o[n.bindings[r].nonMinifiedName] = new it(t, s, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = s), o;
      }
      function Lo(e, t) {
        if (!(e.def.nodeFlags & t)) return;
        const n = e.def.nodes;
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          let i = o.parent;
          for (
            !i && o.flags & t && $o(e, s, o.flags & t, r++),
              0 == (o.childFlags & t) && (s += o.childCount);
            i && 1 & i.flags && s === i.nodeIndex + i.childCount;

          )
            i.directChildFlags & t && (r = Bo(e, i, t, r)), (i = i.parent);
        }
      }
      function Bo(e, t, n, r) {
        for (let s = t.nodeIndex + 1; s <= t.nodeIndex + t.childCount; s++) {
          const t = e.def.nodes[s];
          t.flags & n && $o(e, s, t.flags & n, r++), (s += t.childCount);
        }
        return r;
      }
      function $o(e, t, n, r) {
        const s = rs(e, t);
        if (!s) return;
        const o = s.instance;
        o &&
          (is.setCurrentNode(e, t),
          1048576 & n && es(e, 512, r) && o.ngAfterContentInit(),
          2097152 & n && o.ngAfterContentChecked(),
          4194304 & n && es(e, 768, r) && o.ngAfterViewInit(),
          8388608 & n && o.ngAfterViewChecked(),
          131072 & n && o.ngOnDestroy());
      }
      function zo(e) {
        const t = e.def.nodeMatchedQueries;
        for (; e.parent && Is(e); ) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let s = 0; s <= r; s++) {
            const r = e.def.nodes[s];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId &&
              os(e, s).setDirty(),
              (!(1 & r.flags && s + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (s += r.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            134217728 & t.flags && 536870912 & t.flags && os(e, n).setDirty(),
              (n += t.childCount);
          }
      }
      function Uo(e, t) {
        const n = os(e, t.nodeIndex);
        if (!n.dirty) return;
        let r,
          s = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          (s = Zo(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])),
            (r = rs(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((s = Zo(e, 0, e.def.nodes.length - 1, t.query, [])),
            (r = e.component));
        n.reset(s);
        const o = t.query.bindings;
        let i = !1;
        for (let a = 0; a < o.length; a++) {
          const e = o[a];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              (t = n), (i = !0);
          }
          r[e.propName] = t;
        }
        i && n.notifyOnChanges();
      }
      function Zo(e, t, n, r, s) {
        for (let o = t; o <= n; o++) {
          const t = e.def.nodes[o],
            n = t.matchedQueries[r.id];
          if (
            (null != n && s.push(Ko(e, t, n)),
            1 & t.flags &&
              t.element.template &&
              (t.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            const n = ns(e, o);
            if (
              ((t.childMatchedQueries & r.filterId) === r.filterId &&
                (Zo(e, o + 1, o + t.childCount, r, s), (o += t.childCount)),
              16777216 & t.flags)
            ) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const o = e[t],
                  i = Cs(o);
                i && i === n && Zo(o, 0, o.def.nodes.length - 1, r, s);
              }
            }
            const i = n.template._projectedViews;
            if (i)
              for (let e = 0; e < i.length; e++) {
                const t = i[e];
                Zo(t, 0, t.def.nodes.length - 1, r, s);
              }
          }
          (t.childMatchedQueries & r.filterId) !== r.filterId &&
            (o += t.childCount);
        }
        return s;
      }
      function Ko(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return ns(e, t.nodeIndex).renderElement;
            case 0:
              return new Tt(ns(e, t.nodeIndex).renderElement);
            case 2:
              return ns(e, t.nodeIndex).template;
            case 3:
              return ns(e, t.nodeIndex).viewContainer;
            case 4:
              return rs(e, t.nodeIndex).instance;
          }
      }
      function Go(e, t, n) {
        const r = As(e, t, n);
        r && Ps(e, n.ngContent.index, 1, r, null, void 0);
      }
      function qo(e, t, n) {
        let r;
        const s = e.renderer;
        r = s.createText(n.text.prefix);
        const o = As(e, t, n);
        return o && s.appendChild(o, r), { renderText: r };
      }
      function Qo(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function Wo(e, t, n, r) {
        let s = 0,
          o = 0,
          i = 0,
          a = 0,
          l = 0,
          c = null,
          u = null,
          d = !1,
          h = !1,
          f = null;
        for (let p = 0; p < t.length; p++) {
          const e = t[p];
          if (
            ((e.nodeIndex = p),
            (e.parent = c),
            (e.bindingIndex = s),
            (e.outputIndex = o),
            (e.renderParent = u),
            (i |= e.flags),
            (l |= e.matchedQueryIds),
            e.element)
          ) {
            const t = e.element;
            (t.publicProviders = c
              ? c.element.publicProviders
              : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (d = !1),
              (h = !1),
              e.element.template &&
                (l |= e.element.template.nodeMatchedQueries);
          }
          if (
            (Jo(c, e, t.length),
            (s += e.bindings.length),
            (o += e.outputs.length),
            !u && 3 & e.flags && (f = e),
            20224 & e.flags)
          ) {
            d ||
              ((d = !0),
              (c.element.publicProviders = Object.create(
                c.element.publicProviders
              )),
              (c.element.allProviders = c.element.publicProviders));
            const t = 0 != (32768 & e.flags);
            0 == (8192 & e.flags) || t
              ? (c.element.publicProviders[hs(e.provider.token)] = e)
              : (h ||
                  ((h = !0),
                  (c.element.allProviders = Object.create(
                    c.element.publicProviders
                  ))),
                (c.element.allProviders[hs(e.provider.token)] = e)),
              t && (c.element.componentProvider = e);
          }
          if (
            (c
              ? ((c.childFlags |= e.flags),
                (c.directChildFlags |= e.flags),
                (c.childMatchedQueries |= e.matchedQueryIds),
                e.element &&
                  e.element.template &&
                  (c.childMatchedQueries |=
                    e.element.template.nodeMatchedQueries))
              : (a |= e.flags),
            e.childCount > 0)
          )
            (c = e), Yo(e) || (u = e);
          else
            for (; c && p === c.nodeIndex + c.childCount; ) {
              const e = c.parent;
              e &&
                ((e.childFlags |= c.childFlags),
                (e.childMatchedQueries |= c.childMatchedQueries)),
                (u = (c = e) && Yo(c) ? c.renderParent : c);
            }
        }
        return {
          factory: null,
          nodeFlags: i,
          rootNodeFlags: a,
          nodeMatchedQueries: l,
          flags: e,
          nodes: t,
          updateDirectives: n || us,
          updateRenderer: r || us,
          handleEvent: (e, n, r, s) => t[n].element.handleEvent(e, r, s),
          bindingCount: s,
          outputCount: o,
          lastRenderRootNode: f
        };
      }
      function Yo(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function Jo(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              'Illegal State: Embedded templates without nodes are not allowed!'
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${
                t.nodeIndex
              }!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${
              t.nodeIndex
            }!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${
                t.nodeIndex
              }!`
            );
          if (134217728 & t.flags && e)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${
                t.nodeIndex
              }!`
            );
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${
                t.nodeIndex
              }!`
            );
        }
      }
      function Xo(e, t, n, r) {
        const s = ni(e.root, e.renderer, e, t, n);
        return ri(s, e.component, r), si(s), s;
      }
      function ei(e, t, n) {
        const r = ni(e, e.renderer, null, null, t);
        return ri(r, n, n), si(r), r;
      }
      function ti(e, t, n, r) {
        const s = t.element.componentRendererType;
        let o;
        return (
          (o = s
            ? e.root.rendererFactory.createRenderer(r, s)
            : e.root.renderer),
          ni(e.root, o, e, t.element.componentProvider, n)
        );
      }
      function ni(e, t, n, r, s) {
        const o = new Array(s.nodes.length),
          i = s.outputCount ? new Array(s.outputCount) : null;
        return {
          def: s,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: o,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(s.bindingCount),
          disposables: i,
          initIndex: -1
        };
      }
      function ri(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function si(e) {
        let t;
        ks(e) &&
          (t = ns(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        const n = e.def,
          r = e.nodes;
        for (let s = 0; s < n.nodes.length; s++) {
          const o = n.nodes[s];
          let i;
          switch ((is.setCurrentNode(e, s), 201347067 & o.flags)) {
            case 1:
              const n = $s(e, t, o);
              let a = void 0;
              if (33554432 & o.flags) {
                const t = Ds(o.element.componentView);
                a = is.createComponentView(e, o, t, n);
              }
              zs(e, a, o, n),
                (i = {
                  renderElement: n,
                  componentView: a,
                  viewContainer: null,
                  template: o.element.template ? fo(e, o) : void 0
                }),
                16777216 & o.flags && (i.viewContainer = lo(e, o, i));
              break;
            case 2:
              i = qo(e, t, o);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (i = r[s]) || 4096 & o.flags || (i = { instance: Ao(e, o) });
              break;
            case 16:
              i = { instance: Mo(e, o) };
              break;
            case 16384:
              (i = r[s]) || (i = { instance: Do(e, o) }),
                32768 & o.flags &&
                  ri(
                    ns(e, o.parent.nodeIndex).componentView,
                    i.instance,
                    i.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              i = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              i = new Cr();
              break;
            case 8:
              Go(e, t, o), (i = void 0);
          }
          r[s] = i;
        }
        fi(e, hi.CreateViewNodes), yi(e, 201326592, 268435456, 0);
      }
      function oi(e) {
        li(e),
          is.updateDirectives(e, 1),
          pi(e, hi.CheckNoChanges),
          is.updateRenderer(e, 1),
          fi(e, hi.CheckNoChanges),
          (e.state &= -97);
      }
      function ii(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          Xr(e, 0, 256),
          li(e),
          is.updateDirectives(e, 0),
          pi(e, hi.CheckAndUpdate),
          yi(e, 67108864, 536870912, 0);
        let t = Xr(e, 256, 512);
        Lo(e, 2097152 | (t ? 1048576 : 0)),
          is.updateRenderer(e, 0),
          fi(e, hi.CheckAndUpdate),
          yi(e, 134217728, 536870912, 0),
          Lo(e, 8388608 | ((t = Xr(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          Xr(e, 768, 1024);
      }
      function ai(e, t, n, r, s, o, i, a, l, c, u, d, h) {
        return 0 === n
          ? (function(e, t, n, r, s, o, i, a, l, c, u, d) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n, r, s, o, i, a, l, c, u, d) {
                    const h = t.bindings.length;
                    let f = !1;
                    return (
                      h > 0 && Zs(e, t, 0, n) && (f = !0),
                      h > 1 && Zs(e, t, 1, r) && (f = !0),
                      h > 2 && Zs(e, t, 2, s) && (f = !0),
                      h > 3 && Zs(e, t, 3, o) && (f = !0),
                      h > 4 && Zs(e, t, 4, i) && (f = !0),
                      h > 5 && Zs(e, t, 5, a) && (f = !0),
                      h > 6 && Zs(e, t, 6, l) && (f = !0),
                      h > 7 && Zs(e, t, 7, c) && (f = !0),
                      h > 8 && Zs(e, t, 8, u) && (f = !0),
                      h > 9 && Zs(e, t, 9, d) && (f = !0),
                      f
                    );
                  })(e, t, n, r, s, o, i, a, l, c, u, d);
                case 2:
                  return (function(e, t, n, r, s, o, i, a, l, c, u, d) {
                    let h = !1;
                    const f = t.bindings,
                      p = f.length;
                    if (
                      (p > 0 && _s(e, t, 0, n) && (h = !0),
                      p > 1 && _s(e, t, 1, r) && (h = !0),
                      p > 2 && _s(e, t, 2, s) && (h = !0),
                      p > 3 && _s(e, t, 3, o) && (h = !0),
                      p > 4 && _s(e, t, 4, i) && (h = !0),
                      p > 5 && _s(e, t, 5, a) && (h = !0),
                      p > 6 && _s(e, t, 6, l) && (h = !0),
                      p > 7 && _s(e, t, 7, c) && (h = !0),
                      p > 8 && _s(e, t, 8, u) && (h = !0),
                      p > 9 && _s(e, t, 9, d) && (h = !0),
                      h)
                    ) {
                      let h = t.text.prefix;
                      p > 0 && (h += Qo(n, f[0])),
                        p > 1 && (h += Qo(r, f[1])),
                        p > 2 && (h += Qo(s, f[2])),
                        p > 3 && (h += Qo(o, f[3])),
                        p > 4 && (h += Qo(i, f[4])),
                        p > 5 && (h += Qo(a, f[5])),
                        p > 6 && (h += Qo(l, f[6])),
                        p > 7 && (h += Qo(c, f[7])),
                        p > 8 && (h += Qo(u, f[8])),
                        p > 9 && (h += Qo(d, f[9]));
                      const g = ts(e, t.nodeIndex).renderText;
                      e.renderer.setValue(g, h);
                    }
                    return h;
                  })(e, t, n, r, s, o, i, a, l, c, u, d);
                case 16384:
                  return (function(e, t, n, r, s, o, i, a, l, c, u, d) {
                    const h = rs(e, t.nodeIndex),
                      f = h.instance;
                    let p = !1,
                      g = void 0;
                    const m = t.bindings.length;
                    return (
                      m > 0 &&
                        ys(e, t, 0, n) &&
                        ((p = !0), (g = Ho(e, h, t, 0, n, g))),
                      m > 1 &&
                        ys(e, t, 1, r) &&
                        ((p = !0), (g = Ho(e, h, t, 1, r, g))),
                      m > 2 &&
                        ys(e, t, 2, s) &&
                        ((p = !0), (g = Ho(e, h, t, 2, s, g))),
                      m > 3 &&
                        ys(e, t, 3, o) &&
                        ((p = !0), (g = Ho(e, h, t, 3, o, g))),
                      m > 4 &&
                        ys(e, t, 4, i) &&
                        ((p = !0), (g = Ho(e, h, t, 4, i, g))),
                      m > 5 &&
                        ys(e, t, 5, a) &&
                        ((p = !0), (g = Ho(e, h, t, 5, a, g))),
                      m > 6 &&
                        ys(e, t, 6, l) &&
                        ((p = !0), (g = Ho(e, h, t, 6, l, g))),
                      m > 7 &&
                        ys(e, t, 7, c) &&
                        ((p = !0), (g = Ho(e, h, t, 7, c, g))),
                      m > 8 &&
                        ys(e, t, 8, u) &&
                        ((p = !0), (g = Ho(e, h, t, 8, u, g))),
                      m > 9 &&
                        ys(e, t, 9, d) &&
                        ((p = !0), (g = Ho(e, h, t, 9, d, g))),
                      g && f.ngOnChanges(g),
                      65536 & t.flags &&
                        es(e, 256, t.nodeIndex) &&
                        f.ngOnInit(),
                      262144 & t.flags && f.ngDoCheck(),
                      p
                    );
                  })(e, t, n, r, s, o, i, a, l, c, u, d);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n, r, s, o, i, a, l, c, u, d) {
                    const h = t.bindings;
                    let f = !1;
                    const p = h.length;
                    if (
                      (p > 0 && _s(e, t, 0, n) && (f = !0),
                      p > 1 && _s(e, t, 1, r) && (f = !0),
                      p > 2 && _s(e, t, 2, s) && (f = !0),
                      p > 3 && _s(e, t, 3, o) && (f = !0),
                      p > 4 && _s(e, t, 4, i) && (f = !0),
                      p > 5 && _s(e, t, 5, a) && (f = !0),
                      p > 6 && _s(e, t, 6, l) && (f = !0),
                      p > 7 && _s(e, t, 7, c) && (f = !0),
                      p > 8 && _s(e, t, 8, u) && (f = !0),
                      p > 9 && _s(e, t, 9, d) && (f = !0),
                      f)
                    ) {
                      const f = ss(e, t.nodeIndex);
                      let g;
                      switch (201347067 & t.flags) {
                        case 32:
                          (g = new Array(h.length)),
                            p > 0 && (g[0] = n),
                            p > 1 && (g[1] = r),
                            p > 2 && (g[2] = s),
                            p > 3 && (g[3] = o),
                            p > 4 && (g[4] = i),
                            p > 5 && (g[5] = a),
                            p > 6 && (g[6] = l),
                            p > 7 && (g[7] = c),
                            p > 8 && (g[8] = u),
                            p > 9 && (g[9] = d);
                          break;
                        case 64:
                          (g = {}),
                            p > 0 && (g[h[0].name] = n),
                            p > 1 && (g[h[1].name] = r),
                            p > 2 && (g[h[2].name] = s),
                            p > 3 && (g[h[3].name] = o),
                            p > 4 && (g[h[4].name] = i),
                            p > 5 && (g[h[5].name] = a),
                            p > 6 && (g[h[6].name] = l),
                            p > 7 && (g[h[7].name] = c),
                            p > 8 && (g[h[8].name] = u),
                            p > 9 && (g[h[9].name] = d);
                          break;
                        case 128:
                          const e = n;
                          switch (p) {
                            case 1:
                              g = e.transform(n);
                              break;
                            case 2:
                              g = e.transform(r);
                              break;
                            case 3:
                              g = e.transform(r, s);
                              break;
                            case 4:
                              g = e.transform(r, s, o);
                              break;
                            case 5:
                              g = e.transform(r, s, o, i);
                              break;
                            case 6:
                              g = e.transform(r, s, o, i, a);
                              break;
                            case 7:
                              g = e.transform(r, s, o, i, a, l);
                              break;
                            case 8:
                              g = e.transform(r, s, o, i, a, l, c);
                              break;
                            case 9:
                              g = e.transform(r, s, o, i, a, l, c, u);
                              break;
                            case 10:
                              g = e.transform(r, s, o, i, a, l, c, u, d);
                          }
                      }
                      f.value = g;
                    }
                    return f;
                  })(e, t, n, r, s, o, i, a, l, c, u, d);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, s, o, i, a, l, c, u, d, h)
          : (function(e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n) {
                    let r = !1;
                    for (let s = 0; s < n.length; s++)
                      Zs(e, t, s, n[s]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let o = 0; o < n.length; o++)
                      _s(e, t, o, n[o]) && (s = !0);
                    if (s) {
                      let s = '';
                      for (let e = 0; e < n.length; e++) s += Qo(n[e], r[e]);
                      s = t.text.prefix + s;
                      const o = ts(e, t.nodeIndex).renderText;
                      e.renderer.setValue(o, s);
                    }
                    return s;
                  })(e, t, n);
                case 16384:
                  return (function(e, t, n) {
                    const r = rs(e, t.nodeIndex),
                      s = r.instance;
                    let o = !1,
                      i = void 0;
                    for (let a = 0; a < n.length; a++)
                      ys(e, t, a, n[a]) &&
                        ((o = !0), (i = Ho(e, r, t, a, n[a], i)));
                    return (
                      i && s.ngOnChanges(i),
                      65536 & t.flags &&
                        es(e, 256, t.nodeIndex) &&
                        s.ngOnInit(),
                      262144 & t.flags && s.ngDoCheck(),
                      o
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let o = 0; o < n.length; o++)
                      _s(e, t, o, n[o]) && (s = !0);
                    if (s) {
                      const s = ss(e, t.nodeIndex);
                      let o;
                      switch (201347067 & t.flags) {
                        case 32:
                          o = n;
                          break;
                        case 64:
                          o = {};
                          for (let t = 0; t < n.length; t++)
                            o[r[t].name] = n[t];
                          break;
                        case 128:
                          const e = n[0],
                            s = n.slice(1);
                          o = e.transform(...s);
                      }
                      s.value = o;
                    }
                    return s;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function li(e) {
        const t = e.def;
        if (4 & t.nodeFlags)
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = ns(e, n).template._projectedViews;
              if (t)
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  (r.state |= 32), bs(r, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function ci(e, t, n, r, s, o, i, a, l, c, u, d, h) {
        return (
          0 === n
            ? (function(e, t, n, r, s, o, i, a, l, c, u, d) {
                const h = t.bindings.length;
                h > 0 && ws(e, t, 0, n),
                  h > 1 && ws(e, t, 1, r),
                  h > 2 && ws(e, t, 2, s),
                  h > 3 && ws(e, t, 3, o),
                  h > 4 && ws(e, t, 4, i),
                  h > 5 && ws(e, t, 5, a),
                  h > 6 && ws(e, t, 6, l),
                  h > 7 && ws(e, t, 7, c),
                  h > 8 && ws(e, t, 8, u),
                  h > 9 && ws(e, t, 9, d);
              })(e, t, r, s, o, i, a, l, c, u, d, h)
            : (function(e, t, n) {
                for (let r = 0; r < n.length; r++) ws(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function ui(e, t) {
        if (os(e, t.nodeIndex).dirty)
          throw as(
            is.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & e.state)
          );
      }
      function di(e) {
        if (!(128 & e.state)) {
          if (
            (pi(e, hi.Destroy), fi(e, hi.Destroy), Lo(e, 131072), e.disposables)
          )
            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function(e) {
            if (!(16 & e.state)) return;
            const t = Cs(e);
            if (t) {
              const n = t.template._projectedViews;
              n && (ro(n, n.indexOf(e)), is.dirtyParentQueries(e));
            }
          })(e),
            e.renderer.destroyNode &&
              (function(e) {
                const t = e.def.nodes.length;
                for (let n = 0; n < t; n++) {
                  const t = e.def.nodes[n];
                  1 & t.flags
                    ? e.renderer.destroyNode(ns(e, n).renderElement)
                    : 2 & t.flags
                    ? e.renderer.destroyNode(ts(e, n).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) &&
                      os(e, n).destroy();
                }
              })(e),
            ks(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      var hi = (function() {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (e[e.CreateViewNodes] = 'CreateViewNodes'),
          (e[e.CheckNoChanges] = 'CheckNoChanges'),
          (e[e.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (e[e.CheckAndUpdate] = 'CheckAndUpdate'),
          (e[e.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (e[e.Destroy] = 'Destroy'),
          e
        );
      })();
      function fi(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            33554432 & s.flags
              ? gi(ns(e, r).componentView, t)
              : 0 == (33554432 & s.childFlags) && (r += s.childCount);
          }
      }
      function pi(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            if (16777216 & s.flags) {
              const n = ns(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) gi(n[e], t);
            } else 0 == (16777216 & s.childFlags) && (r += s.childCount);
          }
      }
      function gi(e, t) {
        const n = e.state;
        switch (t) {
          case hi.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? oi(e)
                : 64 & n && mi(e, hi.CheckNoChangesProjectedViews));
            break;
          case hi.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? oi(e) : 64 & n && mi(e, t));
            break;
          case hi.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? ii(e)
                : 64 & n && mi(e, hi.CheckAndUpdateProjectedViews));
            break;
          case hi.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? ii(e) : 64 & n && mi(e, t));
            break;
          case hi.Destroy:
            di(e);
            break;
          case hi.CreateViewNodes:
            si(e);
        }
      }
      function mi(e, t) {
        pi(e, t), fi(e, t);
      }
      function yi(e, t, n, r) {
        if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
        const s = e.def.nodes.length;
        for (let o = 0; o < s; o++) {
          const s = e.def.nodes[o];
          if (s.flags & t && s.flags & n)
            switch ((is.setCurrentNode(e, s.nodeIndex), r)) {
              case 0:
                Uo(e, s);
                break;
              case 1:
                ui(e, s);
            }
          (s.childFlags & t && s.childFlags & n) || (o += s.childCount);
        }
      }
      let _i = !1;
      function wi(e, t, n, r, s, o) {
        const i = s.injector.get(It);
        return ei(bi(e, s, i, t, n), r, o);
      }
      function vi(e, t, n, r, s, o) {
        const i = s.injector.get(It),
          a = bi(e, s, new ta(i), t, n),
          l = Mi(r);
        return Xi(ji.create, ei, null, [a, l, o]);
      }
      function bi(e, t, n, r, s) {
        const o = t.injector.get(rn),
          i = t.injector.get(mn),
          a = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: s,
          sanitizer: o,
          rendererFactory: n,
          renderer: a,
          errorHandler: i
        };
      }
      function Ei(e, t, n, r) {
        const s = Mi(n);
        return Xi(ji.create, Xo, null, [e, t, s, r]);
      }
      function Ci(e, t, n, r) {
        return (
          (n = Ii.get(t.element.componentProvider.provider.token) || Mi(n)),
          Xi(ji.create, ti, null, [e, t, n, r])
        );
      }
      function xi(e, t, n, r) {
        return vo(
          e,
          t,
          n,
          (function(e) {
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function(
              e
            ) {
              let t = !1,
                n = !1;
              return 0 === Ti.size
                ? { hasOverrides: t, hasDeprecatedOverrides: n }
                : (e.providers.forEach(e => {
                    const r = Ti.get(e.token);
                    3840 & e.flags &&
                      r &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach(e => {
                    ki.forEach((r, s) => {
                      oe(s).providedIn === e &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: t, hasDeprecatedOverrides: n });
            })(e);
            return t
              ? ((function(e) {
                  for (let t = 0; t < e.providers.length; t++) {
                    const r = e.providers[t];
                    n && (r.flags |= 4096);
                    const s = Ti.get(r.token);
                    s &&
                      ((r.flags = (-3841 & r.flags) | s.flags),
                      (r.deps = Ss(s.deps)),
                      (r.value = s.value));
                  }
                  if (ki.size > 0) {
                    let t = new Set(e.modules);
                    ki.forEach((r, s) => {
                      if (t.has(oe(s).providedIn)) {
                        let t = {
                          token: s,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: Ss(r.deps),
                          value: r.value,
                          index: e.providers.length
                        };
                        e.providers.push(t), (e.providersByKey[hs(s)] = t);
                      }
                    });
                  }
                })((e = e.factory(() => us))),
                e)
              : e;
          })(r)
        );
      }
      const Ti = new Map(),
        ki = new Map(),
        Ii = new Map();
      function Ni(e) {
        let t;
        Ti.set(e.token, e),
          'function' == typeof e.token &&
            (t = oe(e.token)) &&
            'function' == typeof t.providedIn &&
            ki.set(e.token, e);
      }
      function Si(e, t) {
        const n = Ds(t.viewDefFactory),
          r = Ds(n.nodes[0].element.componentView);
        Ii.set(e, r);
      }
      function Ai() {
        Ti.clear(), ki.clear(), Ii.clear();
      }
      function Mi(e) {
        if (0 === Ti.size) return e;
        const t = (function(e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const s = e.nodes[r];
            1 & s.flags && (n = s),
              n &&
                3840 & s.flags &&
                Ti.has(s.provider.token) &&
                (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(() => us);
        for (let r = 0; r < t.length; r++) n(e, t[r]);
        return e;
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const e = t.provider,
                n = Ti.get(e.token);
              n &&
                ((t.flags = (-3841 & t.flags) | n.flags),
                (e.deps = Ss(n.deps)),
                (e.value = n.value));
            }
          }
        }
      }
      function Di(e, t, n, r, s, o, i, a, l, c, u, d, h) {
        const f = e.def.nodes[t];
        return (
          ai(e, f, n, r, s, o, i, a, l, c, u, d, h),
          224 & f.flags ? ss(e, t).value : void 0
        );
      }
      function Ri(e, t, n, r, s, o, i, a, l, c, u, d, h) {
        const f = e.def.nodes[t];
        return (
          ci(e, f, n, r, s, o, i, a, l, c, u, d, h),
          224 & f.flags ? ss(e, t).value : void 0
        );
      }
      function Oi(e) {
        return Xi(ji.detectChanges, ii, null, [e]);
      }
      function Pi(e) {
        return Xi(ji.checkNoChanges, oi, null, [e]);
      }
      function Vi(e) {
        return Xi(ji.destroy, di, null, [e]);
      }
      var ji = (function() {
        var e = {
          create: 0,
          detectChanges: 1,
          checkNoChanges: 2,
          destroy: 3,
          handleEvent: 4
        };
        return (
          (e[e.create] = 'create'),
          (e[e.detectChanges] = 'detectChanges'),
          (e[e.checkNoChanges] = 'checkNoChanges'),
          (e[e.destroy] = 'destroy'),
          (e[e.handleEvent] = 'handleEvent'),
          e
        );
      })();
      let Fi, Hi, Li;
      function Bi(e, t) {
        (Hi = e), (Li = t);
      }
      function $i(e, t, n, r) {
        return (
          Bi(e, t), Xi(ji.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        );
      }
      function zi(e, t) {
        if (128 & e.state) throw cs(ji[Fi]);
        return (
          Bi(e, Qi(e, 0)),
          e.def.updateDirectives(function(e, n, r, ...s) {
            const o = e.def.nodes[n];
            return (
              0 === t ? Zi(e, o, r, s) : Ki(e, o, r, s),
              16384 & o.flags && Bi(e, Qi(e, n)),
              224 & o.flags ? ss(e, o.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function Ui(e, t) {
        if (128 & e.state) throw cs(ji[Fi]);
        return (
          Bi(e, Wi(e, 0)),
          e.def.updateRenderer(function(e, n, r, ...s) {
            const o = e.def.nodes[n];
            return (
              0 === t ? Zi(e, o, r, s) : Ki(e, o, r, s),
              3 & o.flags && Bi(e, Wi(e, n)),
              224 & o.flags ? ss(e, o.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function Zi(e, t, n, r) {
        if (ai(e, t, n, ...r)) {
          const i = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e],
                a = i[e];
              8 & r.flags &&
                (n[
                  ((s = r.nonMinifiedName),
                  (o = void 0),
                  (o = s.replace(/[$@]/g, '_')),
                  `ng-reflect-${(s = o.replace(
                    Gi,
                    (...e) => '-' + e[1].toLowerCase()
                  ))}`)
                ] = qi(a));
            }
            const r = t.parent,
              a = ns(e, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let t in n) {
                const r = n[t];
                null != r
                  ? e.renderer.setAttribute(a, t, r)
                  : e.renderer.removeAttribute(a, t);
              }
            else
              e.renderer.setValue(a, `bindings=${JSON.stringify(n, null, 2)}`);
          }
        }
        var s, o;
      }
      function Ki(e, t, n, r) {
        ci(e, t, n, ...r);
      }
      const Gi = /([A-Z])/g;
      function qi(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      function Qi(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      function Wi(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      class Yi {
        constructor(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          let n = this.nodeDef,
            r = e;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = xs(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return (
            ns(this.elView, this.elDef.nodeIndex).componentView || this.view
          );
        }
        get injector() {
          return go(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef)
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
            }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            Ji(this.elView, this.elDef, e);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && Ji(this.elView, n, e), (t += n.childCount);
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function(e) {
            for (; e && !ks(e); ) e = e.parent;
            return e.parent ? ns(e.parent, xs(e).nodeIndex) : null;
          })(this.elOrCompView);
          return e ? e.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags
            ? Ts(this.view, this.nodeDef)
            : Ts(this.elView, this.elDef);
        }
        logError(e, ...t) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const s = (function(e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
            return n;
          })(n, r);
          let o = -1;
          n.factory(() => (++o === s ? e.error.bind(e, ...t) : us)),
            o < s &&
              (e.error(
                'Illegal state: the ViewDefinitionFactory did not call the logger!'
              ),
              e.error(...t));
        }
      }
      function Ji(e, t, n) {
        for (let r in t.references) n[r] = Ko(e, t, t.references[r]);
      }
      function Xi(e, t, n, r) {
        const s = Fi,
          o = Hi,
          i = Li;
        try {
          Fi = e;
          const l = t.apply(n, r);
          return (Hi = o), (Li = i), (Fi = s), l;
        } catch (a) {
          if (fn(a) || !Hi) throw a;
          throw (function(e, t) {
            return (
              e instanceof Error || (e = new Error(e.toString())), ls(e, t), e
            );
          })(a, ea());
        }
      }
      function ea() {
        return Hi ? new Yi(Hi, Li) : null;
      }
      class ta {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new na(this.delegate.createRenderer(e, t));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class na {
        constructor(e) {
          (this.delegate = e),
            (this.debugContextFactory = ea),
            (this.data = this.delegate.data);
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          !(function(e) {
            Sr.delete(e.nativeNode);
          })(Ar(e)),
            this.delegate.destroyNode && this.delegate.destroyNode(e);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t),
            r = this.createDebugContext(n);
          if (r) {
            const t = new Nr(n, null, r);
            (t.name = e), Mr(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e),
            n = this.createDebugContext(t);
          return n && Mr(new Ir(t, null, n)), t;
        }
        createText(e) {
          const t = this.delegate.createText(e),
            n = this.createDebugContext(t);
          return n && Mr(new Ir(t, null, n)), t;
        }
        appendChild(e, t) {
          const n = Ar(e),
            r = Ar(t);
          n && r && n instanceof Nr && n.addChild(r),
            this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = Ar(e),
            s = Ar(t),
            o = Ar(n);
          r && s && r instanceof Nr && r.insertBefore(o, s),
            this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = Ar(e),
            r = Ar(t);
          n && r && n instanceof Nr && n.removeChild(r),
            this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t),
            r = ea() || (an ? this.createDebugContext(n) : null);
          return r && Mr(new Nr(n, null, r)), n;
        }
        setAttribute(e, t, n, r) {
          const s = Ar(e);
          s && s instanceof Nr && (s.attributes[r ? r + ':' + t : t] = n),
            this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = Ar(e);
          r && r instanceof Nr && (r.attributes[n ? n + ':' + t : t] = null),
            this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = Ar(e);
          n && n instanceof Nr && (n.classes[t] = !0),
            this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = Ar(e);
          n && n instanceof Nr && (n.classes[t] = !1),
            this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const s = Ar(e);
          s && s instanceof Nr && (s.styles[t] = n),
            this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = Ar(e);
          r && r instanceof Nr && (r.styles[t] = null),
            this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = Ar(e);
          r && r instanceof Nr && (r.properties[t] = n),
            this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ('string' != typeof e) {
            const r = Ar(e);
            r && r.listeners.push(new kr(t, n));
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      function ra(e, t, n) {
        return new sa(e, t, n);
      }
      class sa extends _t {
        constructor(e, t, n) {
          super(),
            (this.moduleType = e),
            (this._bootstrapComponents = t),
            (this._ngModuleDefFactory = n);
        }
        create(e) {
          !(function() {
            if (_i) return;
            _i = !0;
            const e = Pt()
              ? {
                  setCurrentNode: Bi,
                  createRootView: vi,
                  createEmbeddedView: Ei,
                  createComponentView: Ci,
                  createNgModuleRef: xi,
                  overrideProvider: Ni,
                  overrideComponentView: Si,
                  clearOverrides: Ai,
                  checkAndUpdateView: Oi,
                  checkNoChangesView: Pi,
                  destroyView: Vi,
                  createDebugContext: (e, t) => new Yi(e, t),
                  handleEvent: $i,
                  updateDirectives: zi,
                  updateRenderer: Ui
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: wi,
                  createEmbeddedView: Xo,
                  createComponentView: ti,
                  createNgModuleRef: vo,
                  overrideProvider: us,
                  overrideComponentView: us,
                  clearOverrides: us,
                  checkAndUpdateView: ii,
                  checkNoChangesView: oi,
                  destroyView: di,
                  createDebugContext: (e, t) => new Yi(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) =>
                    e.def.updateDirectives(0 === t ? Di : Ri, e),
                  updateRenderer: (e, t) =>
                    e.def.updateRenderer(0 === t ? Di : Ri, e)
                };
            (is.setCurrentNode = e.setCurrentNode),
              (is.createRootView = e.createRootView),
              (is.createEmbeddedView = e.createEmbeddedView),
              (is.createComponentView = e.createComponentView),
              (is.createNgModuleRef = e.createNgModuleRef),
              (is.overrideProvider = e.overrideProvider),
              (is.overrideComponentView = e.overrideComponentView),
              (is.clearOverrides = e.clearOverrides),
              (is.checkAndUpdateView = e.checkAndUpdateView),
              (is.checkNoChangesView = e.checkNoChangesView),
              (is.destroyView = e.destroyView),
              (is.resolveDep = jo),
              (is.createDebugContext = e.createDebugContext),
              (is.handleEvent = e.handleEvent),
              (is.updateDirectives = e.updateDirectives),
              (is.updateRenderer = e.updateRenderer),
              (is.dirtyParentQueries = zo);
          })();
          const t = (function(e) {
            const t = Array.from(e.providers),
              n = Array.from(e.modules),
              r = {};
            for (const s in e.providersByKey) r[s] = e.providersByKey[s];
            return {
              factory: e.factory,
              isRoot: e.isRoot,
              providers: t,
              modules: n,
              providersByKey: r
            };
          })(Ds(this._ngModuleDefFactory));
          return is.createNgModuleRef(
            this.moduleType,
            e || Me.NULL,
            this._bootstrapComponents,
            t
          );
        }
      }
      const oa = Element.prototype,
        ia =
          oa.matches ||
          oa.matchesSelector ||
          oa.mozMatchesSelector ||
          oa.msMatchesSelector ||
          oa.oMatchesSelector ||
          oa.webkitMatchesSelector,
        aa = {
          schedule(e, t) {
            const n = setTimeout(e, t);
            return () => clearTimeout(n);
          },
          scheduleBeforeRender(e) {
            if ('undefined' == typeof window) return aa.schedule(e, 0);
            if (void 0 === window.requestAnimationFrame)
              return aa.schedule(e, 16);
            const t = window.requestAnimationFrame(e);
            return () => window.cancelAnimationFrame(t);
          }
        };
      function la(e, t, n) {
        let r = n;
        return (
          (function(e) {
            return !!e && e.nodeType === Node.ELEMENT_NODE;
          })(e) &&
            t.some(
              (t, n) =>
                !(
                  '*' === t ||
                  !(function(t, n) {
                    return ia.call(e, n);
                  })(0, t) ||
                  ((r = n), 0)
                )
            ),
          r
        );
      }
      const ca = 10;
      class ua {
        constructor(e, t) {
          (this.component = e),
            (this.injector = t),
            (this.componentFactory = t.get(pt).resolveComponentFactory(e));
        }
        create(e) {
          return new da(this.componentFactory, e);
        }
      }
      class da {
        constructor(e, t) {
          (this.componentFactory = e),
            (this.injector = t),
            (this.inputChanges = null),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.uninitializedInputs = new Set());
        }
        connect(e) {
          if (null !== this.scheduledDestroyFn)
            return (
              this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
            );
          this.componentRef || this.initializeComponent(e);
        }
        disconnect() {
          this.componentRef &&
            null === this.scheduledDestroyFn &&
            (this.scheduledDestroyFn = aa.schedule(() => {
              this.componentRef &&
                (this.componentRef.destroy(), (this.componentRef = null));
            }, ca));
        }
        getInputValue(e) {
          return this.componentRef
            ? this.componentRef.instance[e]
            : this.initialInputValues.get(e);
        }
        setInputValue(e, t) {
          var n, r;
          (n = t) === (r = this.getInputValue(e)) ||
            (n != n && r != r) ||
            (this.componentRef
              ? (this.recordInputChange(e, t),
                (this.componentRef.instance[e] = t),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(e, t));
        }
        initializeComponent(e) {
          const t = Me.create({ providers: [], parent: this.injector }),
            n = (function(t, n) {
              const r = e.childNodes,
                s = n.map(() => []);
              let o = -1;
              n.some((e, t) => '*' === e && ((o = t), !0));
              for (let e = 0, i = r.length; e < i; ++e) {
                const t = r[e],
                  i = la(t, n, o);
                -1 !== i && s[i].push(t);
              }
              return s;
            })(0, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(t, n, e)),
            (this.implementsOnChanges =
              'function' == typeof this.componentRef.instance.ngOnChanges),
            this.initializeInputs(),
            this.initializeOutputs(),
            this.detectChanges(),
            this.injector.get(br).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({ propName: e }) => {
            const t = this.initialInputValues.get(e);
            t ? this.setInputValue(e, t) : this.uninitializedInputs.add(e);
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs() {
          const e = this.componentFactory.outputs.map(
            ({ propName: e, templateName: t }) =>
              this.componentRef.instance[e].pipe(
                B(e => ({ name: t, value: e }))
              )
          );
          this.events = q(...e);
        }
        callNgOnChanges() {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const e = this.inputChanges;
          (this.inputChanges = null), this.componentRef.instance.ngOnChanges(e);
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = aa.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(e, t) {
          if (this.componentRef && !this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const n = this.inputChanges[e];
          if (n) return void (n.currentValue = t);
          const r = this.uninitializedInputs.has(e);
          this.uninitializedInputs.delete(e);
          const s = r ? void 0 : this.getInputValue(e);
          this.inputChanges[e] = new it(s, t, r);
        }
        detectChanges() {
          this.componentRef &&
            (this.callNgOnChanges(),
            this.componentRef.changeDetectorRef.detectChanges());
        }
      }
      class ha extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      class fa {
        constructor() {
          this.publish = new Mt();
        }
        emitDraft(e) {
          this.publish.emit({ text: e, writtenAt: new Date() });
        }
      }
      class pa {
        constructor(e) {
          const t = (function(e, t) {
            const n = (function(e, n) {
                return t.injector.get(pt).resolveComponentFactory(e).inputs;
              })(e),
              r = t.strategyFactory || new ua(e, t.injector),
              s = (function(e) {
                const t = {};
                return (
                  e.forEach(({ propName: e, templateName: n }) => {
                    t[
                      (function(e) {
                        return n.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`);
                      })()
                    ] = e;
                  }),
                  t
                );
              })(n);
            class o extends ha {
              constructor(e) {
                super(), (this.ngElementStrategy = r.create(e || t.injector));
              }
              attributeChangedCallback(e, n, o, i) {
                this.ngElementStrategy ||
                  (this.ngElementStrategy = r.create(t.injector)),
                  this.ngElementStrategy.setInputValue(s[e], o);
              }
              connectedCallback() {
                this.ngElementStrategy ||
                  (this.ngElementStrategy = r.create(t.injector)),
                  this.ngElementStrategy.connect(this),
                  (this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(
                    e => {
                      const t = (function(e, t, n) {
                        if ('function' != typeof CustomEvent) {
                          const r = e.createEvent('CustomEvent');
                          return r.initCustomEvent(t, !1, !1, n), r;
                        }
                        return new CustomEvent(t, {
                          bubbles: !1,
                          cancelable: !1,
                          detail: n
                        });
                      })(this.ownerDocument, e.name, e.value);
                      this.dispatchEvent(t);
                    }
                  ));
              }
              disconnectedCallback() {
                this.ngElementStrategy && this.ngElementStrategy.disconnect(),
                  this.ngElementEventsSubscription &&
                    (this.ngElementEventsSubscription.unsubscribe(),
                    (this.ngElementEventsSubscription = null));
              }
            }
            return (
              (o.observedAttributes = Object.keys(s)),
              n
                .map(({ propName: e }) => e)
                .forEach(e => {
                  Object.defineProperty(o.prototype, e, {
                    get: function() {
                      return this.ngElementStrategy.getInputValue(e);
                    },
                    set: function(t) {
                      this.ngElementStrategy.setInputValue(e, t);
                    },
                    configurable: !0,
                    enumerable: !0
                  });
                }),
              o
            );
          })(fa, { injector: e });
          customElements.define('app-message-input', t);
        }
        ngDoBootstrap() {}
      }
      var ga = gs({ encapsulation: 3, styles: [], data: {} });
      function ma(e) {
        return Wo(
          0,
          [
            (e()(),
            Bs(
              0,
              0,
              [['message', 1]],
              null,
              0,
              'input',
              [['type', 'text']],
              null,
              [[null, 'keydown.meta.enter']],
              function(e, t, n) {
                var r = !0;
                return (
                  'keydown.meta.enter' === t &&
                    (r = !1 !== e.component.emitDraft(yo(e, 0).value) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(),
            Bs(
              1,
              0,
              null,
              null,
              1,
              'button',
              [['type', 'button']],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r = !1 !== e.component.emitDraft(yo(e, 0).value) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(),
            (function(e, t, n) {
              const r = new Array(n.length - 1);
              for (let s = 1; s < n.length; s++)
                r[s - 1] = {
                  flags: 8,
                  name: null,
                  ns: null,
                  nonMinifiedName: null,
                  securityContext: null,
                  suffix: n[s]
                };
              return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: -1,
                flags: 2,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: {},
                matchedQueryIds: 0,
                references: {},
                ngContentIndex: null,
                childCount: 0,
                bindings: r,
                bindingFlags: 8,
                outputs: [],
                element: null,
                provider: null,
                text: { prefix: n[0] },
                query: null,
                ngContent: null
              };
            })(0, 0, ['Send']))
          ],
          null,
          null
        );
      }
      function ya(e) {
        return Wo(
          0,
          [
            (e()(),
            Bs(
              0,
              0,
              null,
              null,
              1,
              'app-message-input',
              [],
              null,
              null,
              null,
              ma,
              ga
            )),
            ((t = 49152),
            (function(e, t, n, r, s, o, i, a, l) {
              const {
                matchedQueries: c,
                references: u,
                matchedQueryIds: d
              } = Ns(null);
              l || (l = []), a || (a = []), (o = be(o));
              const h = Ss([], we(s));
              return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: 1,
                flags: t,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: c,
                matchedQueryIds: d,
                references: u,
                ngContentIndex: -1,
                childCount: 0,
                bindings: a,
                bindingFlags: Ls(a),
                outputs: l,
                element: null,
                provider: { token: s, value: o, deps: h },
                text: null,
                query: null,
                ngContent: null
              };
            })(0, (t |= 16384), 0, 0, fa, fa, 0, [], []))
          ],
          null,
          null
        );
        var t;
      }
      var _a = oo('app-message-input', fa, ya, {}, { publish: 'publish' }, []);
      class wa {}
      const va = void 0;
      var ba = [
        'en',
        [['a', 'p'], ['AM', 'PM'], va],
        [['AM', 'PM'], va, va],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        va,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        va,
        [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', va, "{1} 'at' {0}", va],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':'
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function(e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        }
      ];
      const Ea = {};
      var Ca = (function() {
        var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
        return (
          (e[e.Zero] = 'Zero'),
          (e[e.One] = 'One'),
          (e[e.Two] = 'Two'),
          (e[e.Few] = 'Few'),
          (e[e.Many] = 'Many'),
          (e[e.Other] = 'Other'),
          e
        );
      })();
      const xa = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        Ta = new ie('UseV4Plurals');
      class ka {}
      class Ia extends ka {
        constructor(e, t) {
          super(), (this.locale = e), (this.deprecatedPluralFn = t);
        }
        getPluralCategory(e, t) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(t || this.locale, e)
              : (function(e) {
                  return (function(e) {
                    const t = e.toLowerCase().replace(/_/g, '-');
                    let n = Ea[t];
                    if (n) return n;
                    const r = t.split('-')[0];
                    if ((n = Ea[r])) return n;
                    if ('en' === r) return ba;
                    throw new Error(
                      `Missing locale data for the locale "${e}".`
                    );
                  })(e)[18];
                })(t || this.locale)(e)
          ) {
            case Ca.Zero:
              return 'zero';
            case Ca.One:
              return 'one';
            case Ca.Two:
              return 'two';
            case Ca.Few:
              return 'few';
            case Ca.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      const Na = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/,
        Sa = {
          yMMMdjms: La(
            Ha([
              ja('year', 1),
              Fa('month', 3),
              ja('day', 1),
              ja('hour', 1),
              ja('minute', 1),
              ja('second', 1)
            ])
          ),
          yMdjm: La(
            Ha([
              ja('year', 1),
              ja('month', 1),
              ja('day', 1),
              ja('hour', 1),
              ja('minute', 1)
            ])
          ),
          yMMMMEEEEd: La(
            Ha([ja('year', 1), Fa('month', 4), Fa('weekday', 4), ja('day', 1)])
          ),
          yMMMMd: La(Ha([ja('year', 1), Fa('month', 4), ja('day', 1)])),
          yMMMd: La(Ha([ja('year', 1), Fa('month', 3), ja('day', 1)])),
          yMd: La(Ha([ja('year', 1), ja('month', 1), ja('day', 1)])),
          jms: La(Ha([ja('hour', 1), ja('second', 1), ja('minute', 1)])),
          jm: La(Ha([ja('hour', 1), ja('minute', 1)]))
        },
        Aa = {
          yyyy: La(ja('year', 4)),
          yy: La(ja('year', 2)),
          y: La(ja('year', 1)),
          MMMM: La(Fa('month', 4)),
          MMM: La(Fa('month', 3)),
          MM: La(ja('month', 2)),
          M: La(ja('month', 1)),
          LLLL: La(Fa('month', 4)),
          L: La(Fa('month', 1)),
          dd: La(ja('day', 2)),
          d: La(ja('day', 1)),
          HH: Ma(Ra(La(Va(ja('hour', 2), !1)))),
          H: Ra(La(Va(ja('hour', 1), !1))),
          hh: Ma(Ra(La(Va(ja('hour', 2), !0)))),
          h: Ra(La(Va(ja('hour', 1), !0))),
          jj: La(ja('hour', 2)),
          j: La(ja('hour', 1)),
          mm: Ma(La(ja('minute', 2))),
          m: La(ja('minute', 1)),
          ss: Ma(La(ja('second', 2))),
          s: La(ja('second', 1)),
          sss: La(ja('second', 3)),
          EEEE: La(Fa('weekday', 4)),
          EEE: La(Fa('weekday', 3)),
          EE: La(Fa('weekday', 2)),
          E: La(Fa('weekday', 1)),
          a: Da(La(Va(ja('hour', 1), !0))),
          Z: Pa('short'),
          z: Pa('long'),
          ww: La({}),
          w: La({}),
          G: La(Fa('era', 1)),
          GG: La(Fa('era', 2)),
          GGG: La(Fa('era', 3)),
          GGGG: La(Fa('era', 4))
        };
      function Ma(e) {
        return function(t, n) {
          const r = e(t, n);
          return 1 == r.length ? '0' + r : r;
        };
      }
      function Da(e) {
        return function(t, n) {
          return e(t, n).split(' ')[1];
        };
      }
      function Ra(e) {
        return function(t, n) {
          return e(t, n).split(' ')[0];
        };
      }
      function Oa(e, t, n) {
        return new Intl.DateTimeFormat(t, n)
          .format(e)
          .replace(/[\u200e\u200f]/g, '');
      }
      function Pa(e) {
        const t = { hour: '2-digit', hour12: !1, timeZoneName: e };
        return function(e, n) {
          const r = Oa(e, n, t);
          return r ? r.substring(3) : '';
        };
      }
      function Va(e, t) {
        return (e.hour12 = t), e;
      }
      function ja(e, t) {
        const n = {};
        return (n[e] = 2 === t ? '2-digit' : 'numeric'), n;
      }
      function Fa(e, t) {
        const n = {};
        return (n[e] = t < 4 ? (t > 1 ? 'short' : 'narrow') : 'long'), n;
      }
      function Ha(e) {
        return e.reduce((e, t) => Object.assign({}, e, t), {});
      }
      function La(e) {
        return (t, n) => Oa(t, n, e);
      }
      const Ba = new Map();
      class $a {
        static format(e, t, n) {
          return (function(e, t, n) {
            const r = Sa[e];
            if (r) return r(t, n);
            const s = e;
            let o = Ba.get(s);
            if (!o) {
              let t;
              (o = []), Na.exec(e);
              let n = e;
              for (; n; )
                (t = Na.exec(n))
                  ? (n = (o = o.concat(t.slice(1))).pop())
                  : (o.push(n), (n = null));
              Ba.set(s, o);
            }
            return o.reduce((e, r) => {
              const s = Aa[r];
              return (
                e +
                (s
                  ? s(t, n)
                  : (function(e) {
                      return "''" === e
                        ? "'"
                        : e.replace(/(^'|'$)/g, '').replace(/''/g, "'");
                    })(r))
              );
            }, '');
          })(n, e, t);
        }
      }
      class za {
        constructor(e) {
          this._locale = e;
        }
        transform(e, t = 'mediumDate') {
          if (null == e || '' === e || e != e) return null;
          let n;
          if (('string' == typeof e && (e = e.trim()), Ua(e))) n = e;
          else if (isNaN(e - parseFloat(e)))
            if ('string' == typeof e && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
              const [t, r, s] = e.split('-').map(e => parseInt(e, 10));
              n = new Date(t, r - 1, s);
            } else n = new Date(e);
          else n = new Date(parseFloat(e));
          if (!Ua(n)) {
            let t;
            if ('string' != typeof e || !(t = e.match(xa)))
              throw (function(e, t) {
                return Error(
                  `InvalidPipeArgument: '${t}' for pipe '${we(za)}'`
                );
              })(0, e);
            n = (function(e) {
              const t = new Date(0);
              let n = 0,
                r = 0;
              const s = e[8] ? t.setUTCFullYear : t.setFullYear,
                o = e[8] ? t.setUTCHours : t.setHours;
              e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
                s.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
              const i = Number(e[4] || 0) - n,
                a = Number(e[5] || 0) - r,
                l = Number(e[6] || 0),
                c = Math.round(1e3 * parseFloat('0.' + (e[7] || 0)));
              return o.call(t, i, a, l, c), t;
            })(t);
          }
          return $a.format(n, this._locale, za._ALIASES[t] || t);
        }
      }
      function Ua(e) {
        return e instanceof Date && !isNaN(e.valueOf());
      }
      za._ALIASES = {
        medium: 'yMMMdjms',
        short: 'yMdjm',
        fullDate: 'yMMMMEEEEd',
        longDate: 'yMMMMd',
        mediumDate: 'yMMMd',
        shortDate: 'yMd',
        mediumTime: 'jms',
        shortTime: 'jm'
      };
      class Za {}
      const Ka = new ie('DocumentToken'),
        Ga = 'server';
      let qa = null;
      function Qa() {
        return qa;
      }
      class Wa {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      }
      class Ya extends Wa {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const t = this.createElement('div', document);
            if (null != this.getStyle(t, 'animationName'))
              this._animationPrefix = '';
            else {
              const e = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < e.length; n++)
                if (null != this.getStyle(t, e[n] + 'AnimationName')) {
                  this._animationPrefix = '-' + e[n].toLowerCase() + '-';
                  break;
                }
            }
            const n = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(n).forEach(e => {
              null != this.getStyle(t, e) && (this._transitionEnd = n[e]);
            });
          } catch (e) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = null == n ? t : t + '/../' + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      }
      const Ja = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex'
        },
        Xa = 3,
        el = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        tl = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        };
      let nl;
      fe.Node &&
        (nl =
          fe.Node.prototype.contains ||
          function(e) {
            return !!(16 & this.compareDocumentPosition(e));
          });
      class rl extends Ya {
        parse(e) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var e;
          (e = new rl()), qa || (qa = e);
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          window.console && (console.error ? console.error(e) : console.log(e));
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        get attrToPropMap() {
          return Ja;
        }
        contains(e, t) {
          return nl.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent('MouseEvent');
          return t.initEvent(e, !0, !0), t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent('Event');
          return t.initEvent(e, !0, !0), t;
        }
        preventDefault(e) {
          e.preventDefault(), (e.returnValue = !1);
        }
        isPrevented(e) {
          return (
            e.defaultPrevented || (null != e.returnValue && !e.returnValue)
          );
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          return 'content' in e && this.isTemplateElement(e) ? e.content : null;
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          return this.hasProperty(e, 'content') ? e.content : e;
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes,
            n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t[r];
          return n;
        }
        clearNodes(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach(n => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement('template');
          return (t.innerHTML = e), t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement(
            'SCRIPT'
          );
          return r.setAttribute(e, t), r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement('style');
          return this.appendChild(n, this.createTextNode(e, t)), n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(!0);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = '';
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || '';
          return n ? r == n : r.length > 0;
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map(),
            n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          return this.isTemplateElement(e) ? this.content(e) : e;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || '';
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return null != e.shadowRoot && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), !0);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute('href');
        }
        getEventKey(e) {
          let t = e.key;
          if (null == t) {
            if (null == (t = e.keyIdentifier)) return 'Unidentified';
            t.startsWith('U+') &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              e.location === Xa && tl.hasOwnProperty(t) && (t = tl[t]));
          }
          return el[t] || t;
        }
        getGlobalEventTarget(e, t) {
          return 'window' === t
            ? window
            : 'document' === t
            ? e
            : 'body' === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            ol || (ol = document.querySelector('base'))
              ? ol.getAttribute('href')
              : null;
          return null == t
            ? null
            : ((n = t),
              sl || (sl = document.createElement('a')),
              sl.setAttribute('href', n),
              '/' === sl.pathname.charAt(0) ? sl.pathname : '/' + sl.pathname);
          var n;
        }
        resetBaseElement() {
          ol = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, 'data-' + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, 'data-' + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return (function(e, t) {
            t = encodeURIComponent(t);
            for (const n of e.split(';')) {
              const e = n.indexOf('='),
                [r, s] = -1 == e ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
              if (r.trim() === t) return decodeURIComponent(s);
            }
            return null;
          })(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
        }
      }
      let sl,
        ol = null;
      const il = Ka;
      function al() {
        return !!window.history.pushState;
      }
      class ll extends wa {
        constructor(e) {
          super(), (this._doc = e), this._init();
        }
        _init() {
          (this.location = Qa().getLocation()),
            (this._history = Qa().getHistory());
        }
        getBaseHrefFromDOM() {
          return Qa().getBaseHref(this._doc);
        }
        onPopState(e) {
          Qa()
            .getGlobalEventTarget(this._doc, 'window')
            .addEventListener('popstate', e, !1);
        }
        onHashChange(e) {
          Qa()
            .getGlobalEventTarget(this._doc, 'window')
            .addEventListener('hashchange', e, !1);
        }
        get pathname() {
          return this.location.pathname;
        }
        get search() {
          return this.location.search;
        }
        get hash() {
          return this.location.hash;
        }
        set pathname(e) {
          this.location.pathname = e;
        }
        pushState(e, t, n) {
          al() ? this._history.pushState(e, t, n) : (this.location.hash = n);
        }
        replaceState(e, t, n) {
          al() ? this._history.replaceState(e, t, n) : (this.location.hash = n);
        }
        forward() {
          this._history.forward();
        }
        back() {
          this._history.back();
        }
      }
      ll.ctorParameters = () => [
        { type: void 0, decorators: [{ type: Ee, args: [il] }] }
      ];
      const cl = new ie('TRANSITION_ID'),
        ul = [
          {
            provide: Fn,
            useFactory: function(e, t, n) {
              return () => {
                n.get(Hn).donePromise.then(() => {
                  const n = Qa();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                    .filter(t => n.getAttribute(t, 'ng-transition') === e)
                    .forEach(e => n.remove(e));
                });
              };
            },
            deps: [cl, il, Me],
            multi: !0
          }
        ];
      class dl {
        static init() {
          var e;
          (e = new dl()), (fr = e);
        }
        addToWindow(e) {
          (fe.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r)
              throw new Error('Could not find testability for element.');
            return r;
          }),
            (fe.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (fe.getAllAngularRootElements = () => e.getAllRootElements()),
            fe.frameworkStabilizers || (fe.frameworkStabilizers = []),
            fe.frameworkStabilizers.push(e => {
              const t = fe.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const s = function(t) {
                (r = r || t), 0 == --n && e(r);
              };
              t.forEach(function(e) {
                e.whenStable(s);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? Qa().isShadowRoot(t)
              ? this.findTestabilityInTree(e, Qa().getHost(t), !0)
              : this.findTestabilityInTree(e, Qa().parentElement(t), !0)
            : null;
        }
      }
      function hl(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) ||
          ((fe.ng = fe.ng || {})[e] = t);
      }
      const fl = { ApplicationRef: br, NgZone: nr };
      function pl(e) {
        return Ar(e);
      }
      const gl = new ie('EventManagerPlugins');
      class ml {
        constructor(e, t) {
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach(e => (e.manager = this)),
            (this._plugins = e.slice().reverse());
        }
        addEventListener(e, t, n) {
          return this._findPluginFor(t).addEventListener(e, t, n);
        }
        addGlobalEventListener(e, t, n) {
          return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          const t = this._eventNameToPlugin.get(e);
          if (t) return t;
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const t = n[r];
            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
          }
          throw new Error(`No event manager plugin found for event ${e}`);
        }
      }
      class yl {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = Qa().getGlobalEventTarget(this._doc, e);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      class _l {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(e) {
          const t = new Set();
          e.forEach(e => {
            this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
          }),
            this.onStylesAdded(t);
        }
        onStylesAdded(e) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class wl extends _l {
        constructor(e) {
          super(),
            (this._doc = e),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(e.head);
        }
        _addStylesToHost(e, t) {
          e.forEach(e => {
            const n = this._doc.createElement('style');
            (n.textContent = e), this._styleNodes.add(t.appendChild(n));
          });
        }
        addHost(e) {
          this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
        }
        removeHost(e) {
          this._hostNodes.delete(e);
        }
        onStylesAdded(e) {
          this._hostNodes.forEach(t => this._addStylesToHost(e, t));
        }
        ngOnDestroy() {
          this._styleNodes.forEach(e => Qa().remove(e));
        }
      }
      const vl = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        bl = /%COMP%/g,
        El = '_nghost-%COMP%',
        Cl = '_ngcontent-%COMP%';
      function xl(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          Array.isArray(s) ? xl(e, s, n) : ((s = s.replace(bl, e)), n.push(s));
        }
        return n;
      }
      function Tl(e) {
        return t => {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      class kl {
        constructor(e, t) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new Il(e));
        }
        createRenderer(e, t) {
          if (!e || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case rt.Emulated: {
              let n = this.rendererByCompId.get(t.id);
              return (
                n ||
                  ((n = new Al(this.eventManager, this.sharedStylesHost, t)),
                  this.rendererByCompId.set(t.id, n)),
                n.applyToHost(e),
                n
              );
            }
            case rt.Native:
            case rt.ShadowDom:
              return new Ml(this.eventManager, this.sharedStylesHost, e, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const e = xl(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(e),
                  this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class Il {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(vl[t], e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = 'string' == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ''), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = `${r}:${t}`;
            const s = vl[r];
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = vl[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & Nt.DashCase
            ? e.style.setProperty(t, n, r & Nt.Important ? 'important' : '')
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & Nt.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
        }
        setProperty(e, t, n) {
          Sl(t, 'property'), (e[t] = n);
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return (
            Sl(t, 'listener'),
            'string' == typeof e
              ? this.eventManager.addGlobalEventListener(e, t, Tl(n))
              : this.eventManager.addEventListener(e, t, Tl(n))
          );
        }
      }
      const Nl = '@'.charCodeAt(0);
      function Sl(e, t) {
        if (e.charCodeAt(0) === Nl)
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class Al extends Il {
        constructor(e, t, n) {
          super(e), (this.component = n);
          const r = xl(n.id, n.styles, []);
          t.addStyles(r),
            (this.contentAttr = Cl.replace(bl, n.id)),
            (this.hostAttr = El.replace(bl, n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, '');
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class Ml extends Il {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === rt.ShadowDom
                ? n.attachShadow({ mode: 'open' })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = xl(r.id, r.styles, []);
          for (let o = 0; o < s.length; o++) {
            const e = document.createElement('style');
            (e.textContent = s[o]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      const Dl =
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(e) {
            return '__zone_symbol__' + e;
          },
        Rl = Dl('addEventListener'),
        Ol = Dl('removeEventListener'),
        Pl = {},
        Vl = 'FALSE',
        jl = 'ANGULAR',
        Fl = 'addEventListener',
        Hl = 'removeEventListener',
        Ll = '__zone_symbol__propagationStopped',
        Bl = '__zone_symbol__stopImmediatePropagation';
      let $l;
      'undefined' != typeof Zone &&
        Zone[Dl('BLACK_LISTED_EVENTS')] &&
        ($l = {});
      const zl = function(e) {
          return !!$l && $l.hasOwnProperty(e);
        },
        Ul = function(e) {
          const t = Pl[e.type];
          if (!t) return;
          const n = this[t];
          if (!n) return;
          const r = [e];
          if (1 === n.length) {
            const e = n[0];
            return e.zone !== Zone.current
              ? e.zone.run(e.handler, this, r)
              : e.handler.apply(this, r);
          }
          {
            const t = n.slice();
            for (let n = 0; n < t.length && !0 !== e[Ll]; n++) {
              const e = t[n];
              e.zone !== Zone.current
                ? e.zone.run(e.handler, this, r)
                : e.handler.apply(this, r);
            }
          }
        };
      class Zl extends yl {
        constructor(e, t, n) {
          super(e),
            (this.ngZone = t),
            (n &&
              (function(e) {
                return e === Ga;
              })(n)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype[Bl]) return;
          const e = (Event.prototype[Bl] =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function() {
            this && (this[Ll] = !0), e && e.apply(this, arguments);
          };
        }
        supports(e) {
          return !0;
        }
        addEventListener(e, t, n) {
          let r = n;
          if (!e[Rl] || (nr.isInAngularZone() && !zl(t))) e[Fl](t, r, !1);
          else {
            let n = Pl[t];
            n || (n = Pl[t] = Dl(jl + t + Vl));
            let s = e[n];
            const o = s && s.length > 0;
            s || (s = e[n] = []);
            const i = zl(t) ? Zone.root : Zone.current;
            if (0 === s.length) s.push({ zone: i, handler: r });
            else {
              let e = !1;
              for (let t = 0; t < s.length; t++)
                if (s[t].handler === r) {
                  e = !0;
                  break;
                }
              e || s.push({ zone: i, handler: r });
            }
            o || e[Rl](t, Ul, !1);
          }
          return () => this.removeEventListener(e, t, r);
        }
        removeEventListener(e, t, n) {
          let r = e[Ol];
          if (!r) return e[Hl].apply(e, [t, n, !1]);
          let s = Pl[t],
            o = s && e[s];
          if (!o) return e[Hl].apply(e, [t, n, !1]);
          let i = !1;
          for (let a = 0; a < o.length; a++)
            if (o[a].handler === n) {
              (i = !0), o.splice(a, 1);
              break;
            }
          i
            ? 0 === o.length && r.apply(e, [t, Ul, !1])
            : e[Hl].apply(e, [t, n, !1]);
        }
      }
      const Kl = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        Gl = new ie('HammerGestureConfig'),
        ql = new ie('HammerLoader');
      class Ql {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(e) {
          const t = new Hammer(e, this.options);
          t.get('pinch').set({ enable: !0 }),
            t.get('rotate').set({ enable: !0 });
          for (const n in this.overrides) t.get(n).set(this.overrides[n]);
          return t;
        }
      }
      class Wl extends yl {
        constructor(e, t, n, r) {
          super(e), (this._config = t), (this.console = n), (this.loader = r);
        }
        supports(e) {
          return !(
            (!Kl.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${e}" event cannot be bound because Hammer.JS is not ` +
                  'loaded and no custom loader has been specified.'
              ),
              1))
          );
        }
        addEventListener(e, t, n) {
          const r = this.manager.getZone();
          if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
            let r = !1,
              s = () => {
                r = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn(
                        'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                      ),
                      void (s = () => {})
                    );
                  r || (s = this.addEventListener(e, t, n));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${t}" event cannot be bound because the custom ` +
                      'Hammer.JS loader failed.'
                  ),
                    (s = () => {});
                }),
              () => {
                s();
              }
            );
          }
          return r.runOutsideAngular(() => {
            const s = this._config.buildHammer(e),
              o = function(e) {
                r.runGuarded(function() {
                  n(e);
                });
              };
            return (
              s.on(t, o),
              () => {
                s.off(t, o), 'function' == typeof s.destroy && s.destroy();
              }
            );
          });
        }
        isCustomEvent(e) {
          return this._config.events.indexOf(e) > -1;
        }
      }
      const Yl = ['alt', 'control', 'meta', 'shift'],
        Jl = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey
        };
      class Xl extends yl {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return null != Xl.parseEventName(e);
        }
        addEventListener(e, t, n) {
          const r = Xl.parseEventName(t),
            s = Xl.eventCallback(r.fullKey, n, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => Qa().onAndCancel(e, r.domEventName, s));
        }
        static parseEventName(e) {
          const t = e.toLowerCase().split('.'),
            n = t.shift();
          if (0 === t.length || ('keydown' !== n && 'keyup' !== n)) return null;
          const r = Xl._normalizeKey(t.pop());
          let s = '';
          if (
            (Yl.forEach(e => {
              const n = t.indexOf(e);
              n > -1 && (t.splice(n, 1), (s += e + '.'));
            }),
            (s += r),
            0 != t.length || 0 === r.length)
          )
            return null;
          const o = {};
          return (o.domEventName = n), (o.fullKey = s), o;
        }
        static getEventFullKey(e) {
          let t = '',
            n = Qa().getEventKey(e);
          return (
            ' ' === (n = n.toLowerCase())
              ? (n = 'space')
              : '.' === n && (n = 'dot'),
            Yl.forEach(r => {
              r != n && (0, Jl[r])(e) && (t += r + '.');
            }),
            (t += n)
          );
        }
        static eventCallback(e, t, n) {
          return r => {
            Xl.getEventFullKey(r) === e && n.runGuarded(() => t(r));
          };
        }
        static _normalizeKey(e) {
          switch (e) {
            case 'esc':
              return 'escape';
            default:
              return e;
          }
        }
      }
      class ec {}
      class tc extends ec {
        constructor(e) {
          super(), (this._doc = e);
        }
        sanitize(e, t) {
          if (null == t) return null;
          switch (e) {
            case nn.NONE:
              return t;
            case nn.HTML:
              return t instanceof rc
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'HTML'),
                  (function(e, t) {
                    let n = null;
                    try {
                      en = en || new Vt(e);
                      let r = t ? String(t) : '';
                      n = en.getInertBodyElement(r);
                      let s = 5,
                        o = r;
                      do {
                        if (0 === s)
                          throw new Error(
                            'Failed to sanitize html because the input is unstable'
                          );
                        s--,
                          (r = o),
                          (o = n.innerHTML),
                          (n = en.getInertBodyElement(r));
                      } while (r !== o);
                      const i = new Wt(),
                        a = i.sanitizeChildren(tn(n) || n);
                      return (
                        Pt() &&
                          i.sanitizedSomething &&
                          console.warn(
                            'WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).'
                          ),
                        a
                      );
                    } finally {
                      if (n) {
                        const e = tn(n) || n;
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                      }
                    }
                  })(this._doc, String(t)));
            case nn.STYLE:
              return t instanceof sc
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'Style'),
                  (function(e) {
                    if (!(e = String(e).trim())) return '';
                    const t = e.match(on);
                    return (t && Ht(t[1]) === t[1]) ||
                      (e.match(sn) &&
                        (function(e) {
                          let t = !0,
                            n = !0;
                          for (let r = 0; r < e.length; r++) {
                            const s = e.charAt(r);
                            "'" === s && n
                              ? (t = !t)
                              : '"' === s && t && (n = !n);
                          }
                          return t && n;
                        })(e))
                      ? e
                      : (Pt() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`
                          ),
                        'unsafe');
                  })(t));
            case nn.SCRIPT:
              if (t instanceof oc)
                return t.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(t, 'Script'),
              new Error('unsafe value used in a script context'));
            case nn.URL:
              return t instanceof ac || t instanceof ic
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'URL'), Ht(String(t)));
            case nn.RESOURCE_URL:
              if (t instanceof ac)
                return t.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(t, 'ResourceURL'),
              new Error(
                'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
              ));
            default:
              throw new Error(
                `Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`
              );
          }
        }
        checkNotSafeValue(e, t) {
          if (e instanceof nc)
            throw new Error(
              `Required a safe ${t}, got a ${e.getTypeName()} ` +
                '(see http://g.co/ng/security#xss)'
            );
        }
        bypassSecurityTrustHtml(e) {
          return new rc(e);
        }
        bypassSecurityTrustStyle(e) {
          return new sc(e);
        }
        bypassSecurityTrustScript(e) {
          return new oc(e);
        }
        bypassSecurityTrustUrl(e) {
          return new ic(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return new ac(e);
        }
      }
      class nc {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${
              this.changingThisBreaksApplicationSecurity
            }` + ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class rc extends nc {
        getTypeName() {
          return 'HTML';
        }
      }
      class sc extends nc {
        getTypeName() {
          return 'Style';
        }
      }
      class oc extends nc {
        getTypeName() {
          return 'Script';
        }
      }
      class ic extends nc {
        getTypeName() {
          return 'URL';
        }
      }
      class ac extends nc {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const lc = yr(Gr, 'browser', [
        { provide: Un, useValue: 'browser' },
        {
          provide: zn,
          useValue: function() {
            rl.makeCurrent(), dl.init();
          },
          multi: !0
        },
        { provide: wa, useClass: ll, deps: [il] },
        {
          provide: il,
          useFactory: function() {
            return document;
          },
          deps: []
        }
      ]);
      function cc() {
        return new mn();
      }
      class uc {
        constructor(e) {
          if (e)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(e) {
          return {
            ngModule: uc,
            providers: [
              { provide: Ln, useValue: e.appId },
              { provide: cl, useExisting: Ln },
              ul
            ]
          };
        }
      }
      class dc {
        constructor(e) {
          (this._doc = e), (this._dom = Qa());
        }
        addTag(e, t = !1) {
          return e ? this._getOrCreateElement(e, t) : null;
        }
        addTags(e, t = !1) {
          return e
            ? e.reduce(
                (e, n) => (n && e.push(this._getOrCreateElement(n, t)), e),
                []
              )
            : [];
        }
        getTag(e) {
          return (
            (e && this._dom.querySelector(this._doc, `meta[${e}]`)) || null
          );
        }
        getTags(e) {
          if (!e) return [];
          const t = this._dom.querySelectorAll(this._doc, `meta[${e}]`);
          return t ? [].slice.call(t) : [];
        }
        updateTag(e, t) {
          if (!e) return null;
          t = t || this._parseSelector(e);
          const n = this.getTag(t);
          return n
            ? this._setMetaElementAttributes(e, n)
            : this._getOrCreateElement(e, !0);
        }
        removeTag(e) {
          this.removeTagElement(this.getTag(e));
        }
        removeTagElement(e) {
          e && this._dom.remove(e);
        }
        _getOrCreateElement(e, t = !1) {
          if (!t) {
            const t = this._parseSelector(e),
              n = this.getTag(t);
            if (n && this._containsAttributes(e, n)) return n;
          }
          const n = this._dom.createElement('meta');
          this._setMetaElementAttributes(e, n);
          const r = this._dom.getElementsByTagName(this._doc, 'head')[0];
          return this._dom.appendChild(r, n), n;
        }
        _setMetaElementAttributes(e, t) {
          return (
            Object.keys(e).forEach(n => this._dom.setAttribute(t, n, e[n])), t
          );
        }
        _parseSelector(e) {
          const t = e.name ? 'name' : 'property';
          return `${t}="${e[t]}"`;
        }
        _containsAttributes(e, t) {
          return Object.keys(e).every(
            n => this._dom.getAttribute(t, n) === e[n]
          );
        }
      }
      dc.ngInjectableDef = se({
        factory: function() {
          return new dc(qe(il));
        },
        token: dc,
        providedIn: 'root'
      });
      class hc {
        constructor(e) {
          this._doc = e;
        }
        getTitle() {
          return Qa().getTitle(this._doc);
        }
        setTitle(e) {
          Qa().setTitle(this._doc, e);
        }
      }
      (hc.ngInjectableDef = se({
        factory: function() {
          return new hc(qe(il));
        },
        token: hc,
        providedIn: 'root'
      })),
        'undefined' != typeof window && window;
      var fc = ra(pa, [], function(e) {
        return (function(e) {
          const t = {},
            n = [];
          let r = !1;
          for (let s = 0; s < e.length; s++) {
            const o = e[s];
            o.token === At && !0 === o.value && (r = !0),
              1073741824 & o.flags && n.push(o.token),
              (o.index = s),
              (t[hs(o.token)] = o);
          }
          return {
            factory: null,
            providersByKey: t,
            providers: e,
            modules: n,
            isRoot: r
          };
        })([
          Ws(512, pt, gt, [[8, [_a]], [3, pt], yt]),
          Ws(5120, qr, Yr, [[3, qr]]),
          Ws(4608, ka, Ia, [qr, [2, Ta]]),
          Ws(4608, qn, qn, []),
          Ws(5120, Ln, Bn, []),
          Ws(5120, $r, Qr, []),
          Ws(5120, zr, Wr, []),
          Ws(4608, ec, tc, [Ka]),
          Ws(6144, rn, null, [ec]),
          Ws(4608, Gl, Ql, []),
          Ws(
            5120,
            gl,
            function(e, t, n, r, s, o, i, a) {
              return [new Zl(e, t, n), new Xl(r), new Wl(s, o, i, a)];
            },
            [Ka, nr, Un, Ka, Ka, Gl, Kn, [2, ql]]
          ),
          Ws(4608, ml, ml, [gl, nr]),
          Ws(135680, wl, wl, [Ka]),
          Ws(4608, kl, kl, [ml, wl]),
          Ws(6144, It, null, [kl]),
          Ws(6144, _l, null, [wl]),
          Ws(4608, cr, cr, [nr]),
          Ws(1073742336, Za, Za, []),
          Ws(1024, mn, cc, []),
          Ws(
            1024,
            Fn,
            function(e) {
              return [
                ((t = e),
                hl('probe', pl),
                hl(
                  'coreTokens',
                  Object.assign(
                    {},
                    fl,
                    (t || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
                  )
                ),
                () => pl)
              ];
              var t;
            },
            [[2, mr]]
          ),
          Ws(512, Hn, Hn, [[2, Fn]]),
          Ws(131584, br, br, [nr, Kn, Me, mn, pt, Hn]),
          Ws(1073742336, Jr, Jr, [br]),
          Ws(1073742336, uc, uc, [[3, uc]]),
          Ws(1073742336, pa, pa, [Me]),
          Ws(256, At, !0, [])
        ]);
      });
      (function() {
        if (Ot)
          throw new Error('Cannot enable prod mode after platform setup.');
        Rt = !1;
      })(),
        lc()
          .bootstrapModuleFactory(fc, { ngZone: 'noop' })
          .catch(e => console.error(e));
    }
  },
  [[0, 0]]
]);
